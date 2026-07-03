#!/usr/bin/env node
// Anchor checker for `path:line` references in defense briefs.
//
// The defense files cite corpus lines as `docs/NN_FILE.md:123` followed by a
// prose description of what that line states. Corpus edits shift line numbers,
// so this tool:
//   1. verifies each anchored line exists and is substantive (not blank, not a
//      heading, not a code fence);
//   2. fuzzy-matches the bullet's description against the target file to find
//      the best-supported line, reporting drift when the anchor points
//      somewhere clearly worse;
//   3. with --fix, rewrites drifted single anchors to the best-matching line.
//
// Range citations ("`X:a` through `X:b`") are only checked for substantive
// endpoints; they are never auto-fixed.
//
// Usage: node scripts/check-anchors.mjs [--fix] [globDir ...]
//        (default scan dir: defenses)

import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const FIX = process.argv.includes("--fix");
const dirs = process.argv.slice(2).filter((a) => a !== "--fix");
if (dirs.length === 0) dirs.push("defenses");

const STOP = new Set(
  "the a an and or of to in for with that this those these are is be may must should not it its as by on at from where when which whose while through into over under between across states requires defines lists gives allows records classifies confirms".split(
    " ",
  ),
);

const tokenize = (s) =>
  (s.toLowerCase().match(/[a-z][a-z-]{3,}/g) || []).filter((w) => !STOP.has(w));

const substantive = (line) => {
  if (line === undefined) return false;
  const t = line.trim();
  return t !== "" && !t.startsWith("#") && !t.startsWith("```");
};

const fileCache = new Map();
const loadLines = (p) => {
  if (!fileCache.has(p)) fileCache.set(p, readFileSync(p, "utf8").split(/\r?\n/));
  return fileCache.get(p);
};

const score = (lineText, tokens) => {
  const lineTokens = new Set(tokenize(lineText));
  let n = 0;
  for (const t of tokens) if (lineTokens.has(t)) n++;
  return n;
};

const bestLine = (lines, tokens) => {
  let best = { n: 0, score: -1 };
  for (let i = 0; i < lines.length; i++) {
    if (!substantive(lines[i])) continue;
    const s = score(lines[i], tokens);
    if (s > best.score) best = { n: i + 1, score: s };
  }
  return best;
};

let broken = 0;
let fixed = 0;
let drifted = 0;

for (const dir of dirs) {
  for (const name of readdirSync(dir).filter((f) => f.endsWith(".md")).sort()) {
    const path = join(dir, name);
    let text = readFileSync(path, "utf8");
    const bullets = text.split(/\r?\n/).filter((l) => /`(docs|knowledge)\/[^`]+:\d+`/.test(l));
    let changed = false;

    for (const bullet of bullets) {
      const refs = [...bullet.matchAll(/`((docs|knowledge)\/[^`:]+):(\d+)`/g)];
      const isRange = refs.length > 1 && new Set(refs.map((r) => r[1])).size === 1 && /through/.test(bullet);
      const desc = bullet.replace(/`[^`]*`/g, " ");
      const tokens = tokenize(desc);

      for (const ref of refs) {
        const [, target, , numStr] = ref;
        const num = parseInt(numStr, 10);
        if (!existsSync(target)) {
          console.log(`MISSING FILE  ${path}: ${target}:${num}`);
          broken++;
          continue;
        }
        const lines = loadLines(target);
        const ok = num >= 1 && num <= lines.length && substantive(lines[num - 1]);
        const anchoredScore = ok ? score(lines[num - 1], tokens) : -1;
        const best = bestLine(lines, tokens);
        // Ranges get the substantive check only: their description spans many
        // lines, so fuzzy scores against a single endpoint mislead.
        const clearlyDrifted = ok && !isRange && anchoredScore <= 1 && best.score >= 5 && best.n !== num;

        if (!ok || clearlyDrifted) {
          const kind = ok ? "DRIFTED" : "BROKEN ";
          const suggest = best.score >= 3 ? ` -> suggest :${best.n} (score ${best.score} vs ${anchoredScore})` : " (no confident match)";
          console.log(`${kind}      ${path}: ${target}:${num}${suggest}${isRange ? " [range: manual fix]" : ""}`);
          if (!ok) broken++;
          else drifted++;
          // Auto-fix only unambiguous cases: a non-substantive target, or a
          // substantive target that shares at most one content word with the
          // claim while another line matches strongly.
          if (FIX && !isRange && best.score >= 3 && (!ok || clearlyDrifted)) {
            text = text.replace(`\`${target}:${num}\``, `\`${target}:${best.n}\``);
            changed = true;
            fixed++;
          }
        }
      }
    }
    if (changed) writeFileSync(path, text);
  }
}

// ---------------------------------------------------------------------------
// Corpus-wide reference checks: bare backtick file paths and Obsidian
// wikilinks. Line anchors only exist in defenses/, but every directory cites
// files, and knowledge/ links notes with [[wikilinks]]. Both break on rename
// or deletion; neither depends on line numbers.
// ---------------------------------------------------------------------------

import { statSync } from "node:fs";

const CORPUS_DIRS = ["docs", "knowledge", "attacks", "defenses", "drafts", "research", "external-review", "contradictions"];
let refBroken = 0;
let linkBroken = 0;

const allMd = [];
const walk = (dir) => {
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    if (e.name === "node_modules" || e.name.startsWith(".")) continue;
    const p = join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name.endsWith(".md")) allMd.push(p.replace(/\\/g, "/"));
  }
};
for (const d of CORPUS_DIRS) if (existsSync(d)) walk(d);
const basenames = new Map();
for (const p of allMd) {
  const b = p.split("/").pop().replace(/\.md$/, "");
  if (!basenames.has(b)) basenames.set(b, []);
  basenames.get(b).push(p);
}

for (const path of allMd) {
  const text = readFileSync(path, "utf8");

  // Bare backtick path references (existence only).
  for (const m of text.matchAll(/`((docs|knowledge|attacks|defenses)\/[^`:*\n]+\.md)`/g)) {
    if (!existsSync(m[1])) {
      console.log(`DEAD PATH     ${path}: ${m[1]}`);
      refBroken++;
    }
  }

  // Obsidian wikilinks: resolve by relative path from the file's directory,
  // by vault-relative path, or by unique basename anywhere in the corpus.
  // Block references ([[file#^id]]) additionally require the ^id marker to
  // exist inside the resolved file.
  for (const m of text.matchAll(/\[\[([^\]|#]+?)(?:#(\^)?([^\]|]+?))?(?:\\?\|[^\]]*)?\]\]/g)) {
    // Markdown tables require the wikilink pipe to be escaped as \|; strip a
    // trailing backslash left on the target when the escaped form is used.
    const target = m[1].trim().replace(/\\$/, "");
    if (!target || target.startsWith("http")) continue;
    const cand = target.endsWith(".md") ? target : `${target}.md`;
    const fromDir = join(path, "..", cand).replace(/\\/g, "/");
    const base = cand.split("/").pop().replace(/\.md$/, "");
    const resolved = existsSync(cand)
      ? cand
      : existsSync(fromDir)
        ? fromDir
        : existsSync(join("knowledge", cand))
          ? join("knowledge", cand)
          : basenames.get(base)?.[0];
    if (!resolved) {
      console.log(`DEAD WIKILINK ${path}: [[${target}]]`);
      linkBroken++;
      continue;
    }
    if (m[3]) {
      const frag = m[3].trim();
      const body = readFileSync(resolved, "utf8");
      if (m[2]) {
        if (!body.includes(`^${frag}`)) {
          console.log(`DEAD BLOCKREF ${path}: [[${target}#^${frag}]] (no ^${frag} in ${resolved})`);
          linkBroken++;
        }
      } else {
        const wanted = frag.toLowerCase();
        const found = body
          .split(/\r?\n/)
          .some((l) => /^#{1,6}\s+/.test(l) && l.replace(/^#{1,6}\s+/, "").replace(/[[\]|#^]/g, "").trim().toLowerCase() === wanted);
        if (!found) {
          console.log(`DEAD HEADING  ${path}: [[${target}#${frag}]] (no such heading in ${resolved})`);
          linkBroken++;
        }
      }
    }
  }
}

console.log(
  `\nanchors: broken=${broken} drifted=${drifted} fixed=${fixed}${FIX ? " (fix mode)" : " (report mode; use --fix to apply)"}` +
    `\ncorpus:  dead-paths=${refBroken} dead-wikilinks=${linkBroken}`,
);
process.exit(broken + drifted > fixed || refBroken + linkBroken > 0 ? 1 : 0);
