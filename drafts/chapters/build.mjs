#!/usr/bin/env node
// Reassemble the per-chapter files (in manifest order) back into the single paper files.
//   node drafts/chapters/build.mjs --check     # verify the FROZEN originals/ round-trip to the papers
//   node drafts/chapters/build.mjs             # write drafts/paper.md/.es.md FROM the WORKING chapters
//   node drafts/chapters/build.mjs --out=DIR   # dry-run the WORKING assembly into DIR instead
// Editor notes: a trailing `EDITOR-NOTE:` / `NOTA DEL EDITOR:` line in a working chapter is stripped.
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, "..", "..");
const args = Object.fromEntries(process.argv.slice(2).filter(a => a.startsWith("--"))
  .map(a => { const [k, v] = a.replace(/^--/, "").split("="); return [k, v ?? true]; }));

const manifest = JSON.parse(readFileSync(join(HERE, "manifest.json"), "utf8"));
const stripNote = (t) => t.replace(/\n(EDITOR-NOTE:|NOTA DEL EDITOR:)[^\n]*\n*$/i, "\n");
const assemble = (dir, langKey, strip) => manifest.map(ch => {
  const t = readFileSync(join(dir, ch[langKey]), "utf8"); return strip ? stripNote(t) : t;
}).join("");

if (args.check) {                                          // frozen originals must reproduce the papers
  let ok = true;
  const enOut = assemble(join(HERE, "originals"), "en", false), esOut = assemble(join(HERE, "originals"), "es", false);
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

// WORKING copies: strip the editor note AND normalize each chapter to end in a blank line, so an
// edited chapter that lost its trailing newline doesn't glue the next `## ` heading onto its prose.
const assembleWorking = (langKey) => manifest.map(ch =>
  stripNote(readFileSync(join(HERE, ch[langKey]), "utf8")).replace(/\s+$/, "") + "\n\n"
).join("").replace(/\n+$/, "\n");
const enOut = assembleWorking("en"), esOut = assembleWorking("es");
const outDir = args.out ? String(args.out) : join(ROOT, "drafts");
writeFileSync(join(outDir, "paper.md"), enOut);
writeFileSync(join(outDir, "paper.es.md"), esOut);
console.log(`Wrote paper.md (${enOut.length} chars) and paper.es.md (${esOut.length} chars) to ${outDir} from WORKING chapters.`);
