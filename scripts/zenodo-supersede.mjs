#!/usr/bin/env node
// -----------------------------------------------------------------------------
// Zenodo supersession — prepend a "superseded, see latest" notice to the Description
// of OLDER published versions of the paper concept. Editing a published record's
// metadata does NOT mint a new DOI (it is a metadata edit, reversible by editing again).
//
// SAFE BY DEFAULT: a dry-run that only PRINTS what it would do. It changes nothing
// unless you pass --apply. Idempotent: it skips any record that already has the notice.
//
// It touches ONLY published versions whose concept DOI is the paper concept
// (10.5281/zenodo.21193846), and NEVER the latest version (v1.14, 21311851). The separate
// "Computational Experiments" lineage (different concept DOI) is left untouched.
//
// USAGE (in YOUR terminal; reads ZENODO_TOKEN from .env, never prints it):
//   node scripts/zenodo-supersede.mjs            # dry-run (shows the plan; changes nothing)
//   node scripts/zenodo-supersede.mjs --apply    # actually edit + re-publish the metadata
// -----------------------------------------------------------------------------

import fs from "node:fs";
import path from "node:path";

const APPLY = process.argv.includes("--apply");

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

const CONCEPT_DOI = "10.5281/zenodo.21193846";   // the paper concept
const LATEST_ID = 21311851;                       // v1.14 — never touch the latest
const SENTINEL = "SUPERSEDED — please see the latest version"; // idempotency marker

const NOTICE =
  `<p>⚠️ <strong>SUPERSEDED — please see the latest version.</strong> This version reported a calibrated compound value-per-budget multiplier that is now retired as a calibrated effect. The project's simulation contrasts are directional and conditional on a stylized comparative-institutions model — not calibrated real-world effects — and it rests on the architecture and the qualitative credit-versus-coverage mechanism, not a multiplier. Please read the latest version and cite the concept DOI 10.5281/zenodo.21193846. Controlling specification: research/claim-and-estimand-contract.md.</p>` +
  `<p>⚠️ <strong>SUPERADA — vea la última versión.</strong> Esta versión reportó un multiplicador compuesto de valor por presupuesto que ahora está retirado como efecto calibrado. Los contrastes de simulación del proyecto son direccionales y condicionales de un modelo estilizado de instituciones comparadas —no efectos calibrados de campo— y se apoya en la arquitectura y el mecanismo cualitativo de crédito versus cobertura, no en un multiplicador. Por favor lea la última versión y cite el DOI de concepto 10.5281/zenodo.21193846. Especificación rectora: research/claim-and-estimand-contract.md.</p>` +
  `<hr>`;

const H = { Authorization: `Bearer ${TOKEN}` };
const HJ = { ...H, "Content-Type": "application/json" };

async function api(method, url, body) {
  const res = await fetch(url.startsWith("http") ? url : API + url, {
    method, headers: body !== undefined ? HJ : H,
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  let json; try { json = text ? JSON.parse(text) : {}; } catch { json = { _raw: text }; }
  return { ok: res.ok, status: res.status, json };
}

async function main() {
  console.log(APPLY ? "APPLY mode — will edit + re-publish metadata.\n" : "DRY-RUN — nothing will change. Use --apply to actually edit.\n");
  const list = await api("GET", "/deposit/depositions?size=50&sort=mostrecent&all_versions=true");
  if (!list.ok) { console.error(`Could not list depositions (HTTP ${list.status}):`, JSON.stringify(list.json, null, 2)); process.exit(1); }
  const deps = Array.isArray(list.json) ? list.json : [];

  const targets = deps.filter((d) => {
    const published = (d.state || (d.submitted ? "done" : "unsubmitted")) === "done";
    const sameConcept = d.conceptdoi === CONCEPT_DOI;
    const isLatest = Number(d.id) === LATEST_ID;
    return published && sameConcept && !isLatest;
  });

  if (!targets.length) {
    console.log("No older same-concept published versions found to supersede.");
    console.log("(Records outside the paper concept, drafts, and the latest v1.14 are excluded by design.)");
    return;
  }

  let planned = 0, skipped = 0, done = 0, failed = 0;
  for (const d of targets) {
    const ver = d.metadata?.version || "-";
    const doi = d.doi || "-";
    const desc = d.metadata?.description || "";
    if (desc.includes(SENTINEL)) {
      console.log(`  skip  id=${d.id}  v=${ver}  (already has the notice)`);
      skipped++; continue;
    }
    if (!APPLY) {
      console.log(`  WOULD prepend notice -> id=${d.id}  v=${ver}  doi=${doi}`);
      planned++; continue;
    }
    // APPLY: edit -> update description -> publish.
    process.stdout.write(`  editing id=${d.id} v=${ver} ... `);
    const edit = await api("POST", `/deposit/depositions/${d.id}/actions/edit`);
    if (!edit.ok) { console.log(`FAILED (edit HTTP ${edit.status})`); console.error(JSON.stringify(edit.json)); failed++; continue; }
    const meta = { ...(edit.json.metadata || d.metadata) };
    meta.description = NOTICE + (meta.description || "");
    const put = await api("PUT", `/deposit/depositions/${d.id}`, { metadata: meta });
    if (!put.ok) { console.log(`FAILED (put HTTP ${put.status})`); console.error(JSON.stringify(put.json)); failed++; continue; }
    const pub = await api("POST", `/deposit/depositions/${d.id}/actions/publish`);
    if (!pub.ok) { console.log(`FAILED (publish HTTP ${pub.status})`); console.error(JSON.stringify(pub.json)); failed++; continue; }
    console.log("done");
    done++;
  }

  console.log("\n--- Summary ---");
  if (!APPLY) {
    console.log(`  would update: ${planned}   already-noticed (skipped): ${skipped}`);
    console.log("  Re-run with --apply to make these edits (metadata only; no new DOIs).");
  } else {
    console.log(`  updated: ${done}   skipped: ${skipped}   failed: ${failed}`);
    console.log("  (Metadata edits only — no new DOIs were minted.)");
  }
}

main().catch((e) => { console.error("UNEXPECTED ERROR:", e?.message || e); process.exit(1); });
