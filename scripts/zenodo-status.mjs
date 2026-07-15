#!/usr/bin/env node
// -----------------------------------------------------------------------------
// Zenodo status — READ ONLY. Lists your depositions (published + drafts) so we can
// see what state the record is in before retrying a deposit. Creates nothing,
// publishes nothing, deletes nothing.
//
// USAGE (in YOUR terminal; reads ZENODO_TOKEN from .env, never prints it):
//   node scripts/zenodo-status.mjs
// -----------------------------------------------------------------------------

import fs from "node:fs";
import path from "node:path";

if (!process.env.ZENODO_TOKEN) {
  try {
    const envPath = path.join(process.cwd(), ".env");
    if (fs.existsSync(envPath)) {
      for (const line of fs.readFileSync(envPath, "utf8").split(/\r?\n/)) {
        const m = line.match(/^\s*(?:export\s+)?ZENODO_TOKEN\s*=\s*(.*?)\s*$/);
        if (m) process.env.ZENODO_TOKEN = m[1].replace(/^["']|["']$/g, "");
      }
    }
  } catch { /* ignore */ }
}

const API = "https://zenodo.org/api";
const TOKEN = process.env.ZENODO_TOKEN;
if (!TOKEN) { console.error("ERROR: ZENODO_TOKEN not set (put it in .env)."); process.exit(1); }
const H = { Authorization: `Bearer ${TOKEN}` };

async function get(url) {
  const res = await fetch(url.startsWith("http") ? url : API + url, { headers: H });
  const text = await res.text();
  let json; try { json = text ? JSON.parse(text) : {}; } catch { json = { _raw: text }; }
  return { ok: res.ok, status: res.status, json };
}

function row(d) {
  const m = d.metadata || {};
  const state = d.state || (d.submitted ? "done" : "unsubmitted");
  const files = Array.isArray(d.files) ? d.files.length : (d.files?.count ?? "?");
  return `  id=${d.id}  state=${String(state).padEnd(12)} version=${(m.version||"-").padEnd(7)} files=${files}  "${(m.title||"").slice(0,60)}"`;
}

async function main() {
  console.log("Listing your depositions (most recent first) — READ ONLY ...\n");
  const list = await get("/deposit/depositions?size=25&sort=mostrecent&all_versions=true");
  if (!list.ok) {
    console.error(`Could not list depositions (HTTP ${list.status}):`);
    console.error(JSON.stringify(list.json, null, 2));
    process.exit(1);
  }
  const deps = Array.isArray(list.json) ? list.json : [];
  if (!deps.length) { console.log("  (no depositions returned)"); }
  const drafts = [];
  for (const d of deps) {
    console.log(row(d));
    const state = d.state || (d.submitted ? "done" : "unsubmitted");
    if (state !== "done") drafts.push(d);
  }

  console.log("\n--- Summary ---");
  console.log(`  total listed: ${deps.length}`);
  if (drafts.length) {
    console.log(`  OPEN DRAFTS (unsubmitted) — likely the blocker:`);
    for (const d of drafts) {
      console.log(`    draft id=${d.id}  version=${d.metadata?.version || "-"}  edit=${d.links?.html || d.links?.self || "?"}`);
    }
    console.log("\n  Options once we see this:");
    console.log("    A) reuse the open draft -> update its files/metadata to v1.14, then publish");
    console.log("    B) discard the open draft, then create a fresh v1.14 new-version");
  } else {
    console.log("  No open drafts found. The newversion error may then be a Zenodo API/platform issue");
    console.log("  (legacy endpoint on the new Zenodo) — we'd switch to the /records/{id}/versions API.");
  }
  console.log("\n(Nothing was created, published, or deleted.)");
}

main().catch((e) => { console.error("UNEXPECTED ERROR:", e?.message || e); process.exit(1); });
