#!/usr/bin/env node
// -----------------------------------------------------------------------------
// Zenodo reads — READ ONLY, no token needed. Prints how many times the paper has been
// viewed and downloaded (aggregate across all versions) and, per version, its own counts.
// Zenodo counts are anonymous (how many, never who) and update with some delay.
//
// USAGE:  node scripts/zenodo-reads.mjs
// -----------------------------------------------------------------------------

const API = "https://zenodo.org/api";
const LATEST = "21311851";          // v1.14 record id
const KNOWN = [                     // paper concept versions (newest first)
  ["21311851", "v1.14"], ["21252911", "v1.12"], ["21252321", "v1.11"],
  ["21249063", "v1.10"], ["21246169", "v1.9"],  ["21228492", "v1.8"],
  ["21199738", "v1.7"],  ["21193847", "v1.6"],
];

async function rec(id) {
  const res = await fetch(`${API}/records/${id}`);
  if (!res.ok) return null;
  return res.json();
}

async function main() {
  const latest = await rec(LATEST);
  if (!latest) { console.error("Could not reach Zenodo."); process.exit(1); }
  const s = latest.stats || {};
  console.log("PAPER — all versions combined (the concept total):");
  console.log(`  views: ${s.views ?? "?"} (${s.unique_views ?? "?"} unique)   downloads: ${s.downloads ?? "?"} (${s.unique_downloads ?? "?"} unique)\n`);

  console.log("Per version (its own reads):");
  for (const [id, label] of KNOWN) {
    const r = await rec(id);
    const v = r?.stats || {};
    const vv = v.version_views ?? v.this_version?.views ?? "?";
    const vd = v.version_downloads ?? v.this_version?.downloads ?? "?";
    console.log(`  ${label.padEnd(6)} views: ${String(vv).padStart(4)}   downloads: ${String(vd).padStart(4)}`);
  }
  console.log("\n(Anonymous counts — how many, never who. They filter bots and update with a delay.)");
}

main().catch((e) => { console.error("ERROR:", e?.message || e); process.exit(1); });
