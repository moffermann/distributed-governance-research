#!/usr/bin/env node
// -----------------------------------------------------------------------------
// Zenodo v1.14 deposit.
//
// TWO STEPS, both run by YOU in YOUR OWN terminal (the token never enters the
// Claude session, and Claude never runs this script):
//
//   STEP 1 — create the DRAFT (safe, reversible, mints NO public DOI):
//     Git Bash / macOS:   node scripts/zenodo-deposit-v1.14.mjs
//     PowerShell:         node scripts/zenodo-deposit-v1.14.mjs
//
//   STEP 2 — PUBLISH (irreversible: mints a permanent public DOI in YOUR name).
//   Only after you have reviewed what STEP 1 uploaded:
//     node scripts/zenodo-deposit-v1.14.mjs --publish
//
// The token is read from your git-ignored .env (ZENODO_TOKEN=...) or from the
// environment. It is NEVER printed. Scopes needed: deposit:write, deposit:actions.
//
// If anything errors, copy the printed output (the token is never shown) and share it.
// The script stops on the first failure. Without --publish it can only ever leave a
// discardable draft.
// -----------------------------------------------------------------------------

import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const PUBLISH = process.argv.includes("--publish");

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
// The latest PUBLISHED version to branch the new version from (v1.12 record id).
// (An unpublished v1.13 draft, if one exists, is NOT the latest published; Zenodo's
// newversion action will reuse any open unsubmitted draft on this record.)
const LATEST_ID = process.env.ZENODO_LATEST_ID || "21252911";

if (!TOKEN) {
  console.error("ERROR: ZENODO_TOKEN is not set. Put it in .env as ZENODO_TOKEN=... and re-run (see the header of this file).");
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
  const isoDate = "2026-07-14"; // v1.14 release date (kept in sync with CITATION.cff / .zenodo.json)

  // Files to attach: the 2 full renders (pdf + html), the 2 Spanish short-form PDFs,
  // and a fresh corpus+code archive (so the record stays "corpus + working paper + code").
  const renders = [
    "renders/paper-v1.14-en.pdf",
    "renders/paper-v1.14-es.pdf",
    "renders/paper-v1.14-en.html",
    "renders/paper-v1.14-es.html",
    "renders/paper-v1.14-lectura-simple-es.pdf",
    "renders/paper-v1.14-resumen-ejecutivo-es.pdf",
  ].map((p) => path.join(REPO, p));

  const zipPath = path.join(REPO, "renders", "distributed-governance-research-v1.14.zip");
  try {
    execSync(`git archive --format=zip -o "${zipPath}" HEAD`, { cwd: REPO, stdio: "inherit" });
    console.log("• Built repo archive:", zipPath);
  } catch (e) {
    console.error("WARN: could not build git archive; continuing with renders only.", e.message);
  }
  const files = [...renders, ...(fs.existsSync(zipPath) ? [zipPath] : [])];
  for (const f of files) if (!fs.existsSync(f)) { console.error("ERROR: missing file", f); process.exit(1); }

  // Metadata mirrors .zenodo.json (already bumped to v1.14).
  const zj = JSON.parse(fs.readFileSync(path.join(REPO, ".zenodo.json"), "utf8"));
  const metadata = {
    title: zj.title,
    upload_type: zj.upload_type || "publication",
    publication_type: zj.publication_type || "workingpaper",
    description: zj.description,
    creators: zj.creators,
    access_right: "open",
    license: zj.license || "cc-by-4.0",
    version: zj.version || "v1.14",
    keywords: zj.keywords,
    notes: zj.notes,
    publication_date: isoDate,
  };

  console.log("\n1) Locating the draft to deposit into ...");
  // Prefer an EXISTING open (unsubmitted) draft. Creating a second new-version draft while one
  // is already open is what Zenodo rejects with "files.enabled: Please remove all files first".
  let draft;
  const list = await api("GET", "/deposit/depositions?size=25&sort=mostrecent&all_versions=true");
  const openDraft = (Array.isArray(list) ? list : []).find(
    (d) => (d.state || (d.submitted ? "done" : "unsubmitted")) !== "done"
  );
  if (openDraft) {
    draft = await api("GET", openDraft.links?.self || `/deposit/depositions/${openDraft.id}`);
    console.log(`   -> reusing existing open draft id ${draft.id} (previously version ${openDraft.metadata?.version || "?"})`);
  } else {
    console.log(`   -> no open draft; creating a NEW VERSION from published record ${LATEST_ID} ...`);
    const nv = await api("POST", `/deposit/depositions/${LATEST_ID}/actions/newversion`);
    const draftUrl = nv.links?.latest_draft;
    if (!draftUrl) { console.error("ERROR: no latest_draft link returned:", JSON.stringify(nv.links, null, 2)); process.exit(1); }
    draft = await api("GET", draftUrl);
    console.log(`   -> new draft id ${draft.id}`);
  }
  const draftId = draft.id;
  const bucket = draft.links?.bucket;
  if (!bucket) { console.error("ERROR: draft has no files bucket link; cannot upload.", JSON.stringify(draft.links, null, 2)); process.exit(1); }

  console.log("2) Removing files carried over from the previous version / prior draft ...");
  for (const fobj of (draft.files || [])) {
    await api("DELETE", `/deposit/depositions/${draftId}/files/${fobj.id}`);
    console.log("   - deleted", fobj.filename || fobj.id);
  }

  console.log("3) Uploading v1.14 files ...");
  for (const f of files) {
    const name = path.basename(f);
    const data = fs.readFileSync(f);
    await api("PUT", `${bucket}/${encodeURIComponent(name)}`, data, /*raw*/ true);
    console.log("   + uploaded", name, `(${data.length} bytes)`);
  }

  console.log("4) Writing v1.14 metadata ...");
  await api("PUT", `/deposit/depositions/${draftId}`, { metadata });

  const html = draft.links?.html || `https://zenodo.org/deposit/${draftId}`;

  if (!PUBLISH) {
    console.log("\n✅ DRAFT READY — NOT published. Nothing public was created.");
    console.log(`   Draft id: ${draftId}`);
    console.log(`   Title:    ${metadata.title}`);
    console.log(`   Version:  ${metadata.version}   Date: ${metadata.publication_date}`);
    console.log(`   Files:    ${files.map((f) => path.basename(f)).join(", ")}`);
    console.log("\n   Review the above. When you are ready to mint the PERMANENT public DOI, re-run:");
    console.log("     node scripts/zenodo-deposit-v1.14.mjs --publish");
    console.log("   (or discard the draft here: " + html + ")");
    return;
  }

  console.log("\n⚠  PUBLISHING — this mints a PERMANENT public DOI in your name and CANNOT be undone.");
  const pub = await api("POST", `/deposit/depositions/${draftId}/actions/publish`);
  const doi = pub.doi || pub.metadata?.doi || pub.links?.doi;
  console.log("\n✅ PUBLISHED.");
  console.log(`   Version DOI: ${doi || "(see record)"}`);
  console.log(`   Record:      ${pub.links?.record_html || pub.links?.html || html}`);
  console.log("\n   Next: paste docs/ZENODO_SUPERSESSION_NOTICE.md into the older versions' Description via 'Edit',");
  console.log("   and share the new version DOI so it can be swept into CITATION.cff / README.");
}

main().catch((e) => { console.error("UNEXPECTED ERROR:", e); process.exit(1); });
