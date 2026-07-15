#!/usr/bin/env node
// Reassemble the per-chapter files (in manifest order) back into the single paper files.
//   node drafts/chapters/build.mjs --check     # verify round-trip vs the current papers (no write)
//   node drafts/chapters/build.mjs             # write drafts/paper.md and drafts/paper.es.md
//   node drafts/chapters/build.mjs --out=DIR   # write into DIR instead (dry run to a temp)
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, "..", "..");
const args = Object.fromEntries(process.argv.slice(2).filter(a => a.startsWith("--"))
  .map(a => { const [k, v] = a.replace(/^--/, "").split("="); return [k, v ?? true]; }));

const manifest = JSON.parse(readFileSync(join(HERE, "manifest.json"), "utf8"));
const assemble = (langKey) => manifest.map(ch => readFileSync(join(HERE, ch[langKey]), "utf8")).join("");
const enOut = assemble("en"), esOut = assemble("es");

if (args.check) {
  let ok = true;
  for (const [lang, built, orig] of [["EN", enOut, join(ROOT, "drafts", "paper.md")], ["ES", esOut, join(ROOT, "drafts", "paper.es.md")]]) {
    const cur = readFileSync(orig, "utf8");
    if (built === cur) { console.log(`${lang}: round-trip OK (byte-identical, ${built.length} chars)`); }
    else {
      ok = false;
      let i = 0; while (i < built.length && i < cur.length && built[i] === cur[i]) i++;
      console.log(`${lang}: DIFF at char ${i} (built ${built.length} vs original ${cur.length}).`);
      console.log(`  built:    ${JSON.stringify(built.slice(i, i + 60))}`);
      console.log(`  original: ${JSON.stringify(cur.slice(i, i + 60))}`);
    }
  }
  process.exit(ok ? 0 : 1);
}

const outDir = args.out ? String(args.out) : join(ROOT, "drafts");
writeFileSync(join(outDir, "paper.md"), enOut);
writeFileSync(join(outDir, "paper.es.md"), esOut);
console.log(`Wrote paper.md (${enOut.length} chars) and paper.es.md (${esOut.length} chars) to ${outDir}`);
