#!/usr/bin/env node
// -----------------------------------------------------------------------------
// Zenodo v1.13 deposit — creates a NEW VERSION *draft* and STOPS (never publishes).
//
// It leaves a DRAFT you review in the Zenodo web UI and PUBLISH yourself (the
// irreversible step stays in your hands). A draft mints no public DOI and can be
// discarded safely.
//
// USAGE (run in YOUR OWN terminal so the token never enters the Claude session):
//   Windows PowerShell:   $env:ZENODO_TOKEN="xxxxx"; node scripts/zenodo-deposit-v1.13.mjs
//   Git Bash / macOS:     ZENODO_TOKEN=xxxxx node scripts/zenodo-deposit-v1.13.mjs
//
// The token needs scopes: deposit:write, deposit:actions. Get it at
//   https://zenodo.org/account/settings/applications/tokens/new/
//
// If any step errors, copy the printed output (REDACT the token) and share it;
// the script is defensive and stops on the first failure without publishing.
// -----------------------------------------------------------------------------

import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

// Load ZENODO_TOKEN from a local, git-ignored .env if it isn't already in the environment.
// (The token is never printed by this script.)
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
// The latest PUBLISHED version to branch the new version from (v1.12 record id):
const LATEST_ID = process.env.ZENODO_LATEST_ID || "21252911";

if (!TOKEN) {
  console.error("ERROR: ZENODO_TOKEN is not set. Export it and re-run (see the header of this file).");
  process.exit(1);
}

const H = { Authorization: `Bearer ${TOKEN}` };
const HJ = { ...H, "Content-Type": "application/json" };

async function api(method, url, body, raw) {
  const opts = { method, headers: raw ? H : HJ };
  if (body !== undefined) opts.body = raw ? body : JSON.stringify(body);
  const res = await fetch(url.startsWith("http") ? url : API + url, opts);
  const text = await res.text();
  let json;
  try { json = text ? JSON.parse(text) : {}; } catch { json = { _raw: text }; }
  if (!res.ok) {
    console.error(`\n✗ ${method} ${url} -> HTTP ${res.status}`);
    console.error(JSON.stringify(json, null, 2));
    process.exit(1);
  }
  return json;
}

function root() {
  return execSync("git rev-parse --show-toplevel", { encoding: "utf8" }).trim();
}

async function main() {
  const REPO = root();
  const isoDate = new Date().toISOString().slice(0, 10);

  // Files to attach: the 4 v1.13 renders + a fresh repo/code archive.
  const renders = [
    "renders/paper-v1.13-en.pdf",
    "renders/paper-v1.13-es.pdf",
    "renders/paper-v1.13-en.html",
    "renders/paper-v1.13-es.html",
  ].map((p) => path.join(REPO, p));

  // Build a corpus+code zip from the committed tree (HEAD) so the record stays
  // "corpus + working paper + code".
  const zipPath = path.join(REPO, "renders", "distributed-governance-research-v1.13.zip");
  try {
    execSync(`git archive --format=zip -o "${zipPath}" HEAD`, { cwd: REPO, stdio: "inherit" });
    console.log("• Built repo archive:", zipPath);
  } catch (e) {
    console.error("WARN: could not build git archive; continuing with renders only.", e.message);
  }
  const files = [...renders, ...(fs.existsSync(zipPath) ? [zipPath] : [])];
  for (const f of files) if (!fs.existsSync(f)) { console.error("ERROR: missing file", f); process.exit(1); }

  // Metadata (mirrors .zenodo.json; mixed CC-BY/MIT split explained in `notes`).
  const zj = JSON.parse(fs.readFileSync(path.join(REPO, ".zenodo.json"), "utf8"));
  const metadata = {
    title: zj.title,
    upload_type: zj.upload_type || "publication",
    publication_type: zj.publication_type || "workingpaper",
    description: zj.description,
    creators: zj.creators,
    access_right: "open",
    license: zj.license || "cc-by-4.0",
    version: zj.version || "v1.13",
    keywords: zj.keywords,
    notes: zj.notes,
    publication_date: isoDate,
  };

  console.log(`\n1) Creating a NEW VERSION draft from published record ${LATEST_ID} ...`);
  const nv = await api("POST", `/deposit/depositions/${LATEST_ID}/actions/newversion`);
  const draftUrl = nv.links?.latest_draft;
  if (!draftUrl) { console.error("ERROR: no latest_draft link returned:", JSON.stringify(nv.links, null, 2)); process.exit(1); }
  const draft = await api("GET", draftUrl);
  const draftId = draft.id;
  const bucket = draft.links?.bucket;
  console.log(`   -> draft id ${draftId}`);

  console.log("2) Removing files carried over from the previous version ...");
  const existing = draft.files || [];
  for (const fobj of existing) {
    const fid = fobj.id;
    await api("DELETE", `/deposit/depositions/${draftId}/files/${fid}`);
    console.log("   - deleted", fobj.filename || fid);
  }

  console.log("3) Uploading v1.13 files ...");
  for (const f of files) {
    const name = path.basename(f);
    const data = fs.readFileSync(f);
    await api("PUT", `${bucket}/${encodeURIComponent(name)}`, data, /*raw*/ true);
    console.log("   + uploaded", name, `(${data.length} bytes)`);
  }

  console.log("4) Writing v1.13 metadata ...");
  await api("PUT", `/deposit/depositions/${draftId}`, { metadata });

  const html = draft.links?.html || `https://zenodo.org/deposit/${draftId}`;
  console.log("\n✅ DRAFT READY — NOT published.");
  console.log("   Review it here, then press Publish yourself:");
  console.log("   " + html);
  console.log("\n   (Nothing public was created. If it looks wrong, discard the draft in the UI.)");
  console.log("\n   After publishing, remember to paste the supersession notice");
  console.log("   (docs/ZENODO_SUPERSESSION_NOTICE.md) into the older versions' Description via 'Edit'.");
}

main().catch((e) => { console.error("UNEXPECTED ERROR:", e); process.exit(1); });
