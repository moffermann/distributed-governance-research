#!/usr/bin/env node
// Convert fragile `path:line` anchors in defense briefs into stable Obsidian
// block references.
//
// For each `docs/FILE.md:N` anchor:
//   1. a content-derived block ID (^r + 8-hex hash) is appended to line N of
//      the target document (once, no matter how many defenses cite it);
//   2. the defense bullet's `path:N` ref is rewritten as
//      [[FILE-basename#^id|path]] so Obsidian resolves it to the exact block
//      regardless of future line movement.
//
// Targets inside code fences or tables cannot carry block IDs and are
// reported for manual conversion (usually to a [[FILE#Heading]] reference).
// Range citations ("`X:a` through `X:b`") are reported, not converted.
//
// Usage: node scripts/obsidianize.mjs [--apply] [dir ...]   (default: defenses)
//        Without --apply, prints the full conversion plan and touches nothing.

import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";

const APPLY = process.argv.includes("--apply");
const dirs = process.argv.slice(2).filter((a) => a !== "--apply");
if (dirs.length === 0) dirs.push("defenses");

const hash = (s) => {
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) >>> 0;
  return h.toString(16).padStart(8, "0");
};

const fileLines = new Map();
const loadLines = (p) => {
  if (!fileLines.has(p)) fileLines.set(p, readFileSync(p, "utf8").split(/\r?\n/));
  return fileLines.get(p);
};

const fenceStateCache = new Map();
const inFence = (p, n) => {
  if (!fenceStateCache.has(p)) {
    const states = [];
    let open = false;
    for (const line of loadLines(p)) {
      if (line.trim().startsWith("```")) open = !open;
      states.push(open);
    }
    fenceStateCache.set(p, states);
  }
  return fenceStateCache.get(p)[n - 1];
};

const plans = new Map(); // target -> Map(lineNum -> id)
const manual = [];
let converted = 0;

const defenseEdits = new Map(); // defense path -> text

const targets = [];
for (const d of dirs) {
  if (d.endsWith(".md")) targets.push(d);
  else for (const name of readdirSync(d).filter((f) => f.endsWith(".md")).sort()) targets.push(join(d, name));
}

{
  for (const path of targets) {
    let text = readFileSync(path, "utf8");
    const bulletLines = text.split(/\r?\n/).filter((l) => /`(docs|knowledge)\/[^`]+:\d+`/.test(l));

    for (const bullet of bulletLines) {
      const refs = [...bullet.matchAll(/`((docs|knowledge)\/[^`:]+):(\d+)`/g)];
      const isRange = refs.length > 1 && new Set(refs.map((r) => r[1])).size === 1 && /through/.test(bullet);
      if (isRange) {
        manual.push(`RANGE   ${path}: ${refs.map((r) => `${r[1]}:${r[3]}`).join(" .. ")}`);
        continue;
      }
      for (const ref of refs) {
        const [full, target, , numStr] = ref;
        const num = parseInt(numStr, 10);
        if (!existsSync(target)) continue;
        const lines = loadLines(target);
        const line = lines[num - 1] ?? "";
        if (inFence(target, num)) {
          manual.push(`FENCE   ${path}: ${target}:${num} (block IDs cannot live inside code fences)`);
          continue;
        }
        if (line.trim().startsWith("|")) {
          manual.push(`TABLE   ${path}: ${target}:${num} (block IDs cannot target table rows)`);
          continue;
        }
        const id = `r${hash(target + "::" + line.trim())}`;
        if (!plans.has(target)) plans.set(target, new Map());
        plans.get(target).set(num, id);
        const basename = target.split("/").pop().replace(/\.md$/, "");
        text = text.replace(full, `[[${basename}#^${id}|${target}]]`);
        converted++;
      }
    }
    defenseEdits.set(path, text);
  }
}

console.log(`plan: convert ${converted} anchors across ${defenseEdits.size} defense files`);
console.log(`plan: inject block IDs into ${plans.size} target documents:`);
for (const [target, m] of [...plans.entries()].sort()) {
  console.log(`  ${target}: ${m.size} block ID(s) at line(s) ${[...m.keys()].sort((a, b) => a - b).join(", ")}`);
}
if (manual.length) {
  console.log(`\nmanual conversion needed (${manual.length}):`);
  for (const m of manual) console.log(`  ${m}`);
}

if (!APPLY) {
  console.log("\n(dry run — pass --apply to write changes)");
  process.exit(0);
}

for (const [target, m] of plans.entries()) {
  const lines = loadLines(target).slice();
  for (const [num, id] of m.entries()) {
    if (!lines[num - 1].includes(`^${id}`)) lines[num - 1] = `${lines[num - 1]} ^${id}`;
  }
  writeFileSync(target, lines.join("\n"));
}
for (const [path, text] of defenseEdits.entries()) writeFileSync(path, text);
console.log("\napplied.");
