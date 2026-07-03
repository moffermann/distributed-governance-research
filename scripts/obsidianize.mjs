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
const PATHS_MODE = process.argv.includes("--paths");
const dirs = process.argv.slice(2).filter((a) => a !== "--apply" && a !== "--paths");
if (dirs.length === 0) dirs.push("defenses");

// ---------------------------------------------------------------------------
// --paths mode: convert bare backtick .md path references into Obsidian
// wikilinks ([[basename|original-text]]), preserving the visible text.
// Skips fenced code blocks, non-unique basenames (e.g. the various README
// files), and paths that do not exist. Idempotent: already-converted links
// contain no backtick path and are untouched.
// ---------------------------------------------------------------------------
if (PATHS_MODE) {
  const { readdirSync: rd, readFileSync: rf, writeFileSync: wf, existsSync: ex } = await import("node:fs");
  const { join: j } = await import("node:path");
  const ALL_DIRS = ["docs", "knowledge", "attacks", "defenses", "drafts", "research", "external-review"];
  const files = [];
  const walk = (d) => {
    for (const e of rd(d, { withFileTypes: true })) {
      if (e.name === "node_modules" || e.name.startsWith(".")) continue;
      const p = j(d, e.name);
      if (e.isDirectory()) walk(p);
      else if (e.name.endsWith(".md")) files.push(p.replace(/\\/g, "/"));
    }
  };
  for (const d of ALL_DIRS) if (ex(d)) walk(d);
  const baseCount = new Map();
  for (const p of files) {
    const b = p.split("/").pop().replace(/\.md$/, "");
    baseCount.set(b, (baseCount.get(b) || 0) + 1);
  }

  let converted = 0;
  let skippedNonUnique = 0;
  const targets = dirs.filter((d) => ex(d));
  const workFiles = [];
  for (const d of targets) {
    if (d.endsWith(".md")) workFiles.push(d);
    else {
      const acc = [];
      const w2 = (dd) => {
        for (const e of rd(dd, { withFileTypes: true })) {
          if (e.name === "node_modules" || e.name.startsWith(".")) continue;
          const p = j(dd, e.name);
          if (e.isDirectory()) w2(p);
          else if (e.name.endsWith(".md")) acc.push(p.replace(/\\/g, "/"));
        }
      };
      w2(d);
      workFiles.push(...acc);
    }
  }

  for (const path of workFiles) {
    const lines = rf(path, "utf8").split(/\r?\n/);
    let fence = false;
    let changed = false;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].trim().startsWith("```")) {
        fence = !fence;
        continue;
      }
      if (fence) continue;
      lines[i] = lines[i].replace(/`((?:docs|knowledge|attacks|defenses|drafts|research|external-review)\/[^`:*\n]+\.md)`/g, (m, target) => {
        if (!ex(target)) return m;
        const base = target.split("/").pop().replace(/\.md$/, "");
        if ((baseCount.get(base) || 0) !== 1) {
          skippedNonUnique++;
          return m;
        }
        changed = true;
        converted++;
        return `[[${base}|${target}]]`;
      });
    }
    if (changed && APPLY) wf(path, lines.join("\n"));
  }
  console.log(`paths mode: ${converted} backtick path refs ${APPLY ? "converted" : "convertible"} across ${workFiles.length} files; ${skippedNonUnique} skipped (non-unique basename)`);
  if (!APPLY) console.log("(dry run — pass --apply to write)");
  process.exit(0);
}

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

const nearestHeading = (lines, num) => {
  for (let i = num - 1; i >= 0; i--) {
    const m = lines[i].match(/^#{1,6}\s+(.*)$/);
    if (m) return m[1].replace(/[[\]|#^]/g, "").trim();
  }
  return null;
};

const plans = new Map(); // target -> Map(lineNum -> id)
const manual = [];
let converted = 0;
let headingRefs = 0;

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
        // Ranges collapse to a heading reference covering the range start.
        const [, target, , aStr] = refs[0];
        const [, , , bStr] = refs[refs.length - 1];
        if (!existsSync(target)) continue;
        const lines = loadLines(target);
        const heading = nearestHeading(lines, parseInt(aStr, 10));
        if (!heading) {
          manual.push(`RANGE   ${path}: ${target}:${aStr} .. :${bStr} (no enclosing heading)`);
          continue;
        }
        const basename = target.split("/").pop().replace(/\.md$/, "");
        const span = `\`${target}:${aStr}\` through \`${target}:${bStr}\``;
        text = text.replace(span, `[[${basename}#${heading}|${target}]]`);
        headingRefs++;
        continue;
      }
      for (const ref of refs) {
        const [full, target, , numStr] = ref;
        const num = parseInt(numStr, 10);
        if (!existsSync(target)) continue;
        const lines = loadLines(target);
        const line = lines[num - 1] ?? "";
        if (inFence(target, num) || line.trim().startsWith("|")) {
          // Block IDs cannot live inside fences or target table rows: fall
          // back to a heading reference for the enclosing section.
          const heading = nearestHeading(lines, num);
          if (!heading) {
            manual.push(`NOHEAD  ${path}: ${target}:${num}`);
            continue;
          }
          const basename = target.split("/").pop().replace(/\.md$/, "");
          text = text.replace(full, `[[${basename}#${heading}|${target}]]`);
          headingRefs++;
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

console.log(`plan: convert ${converted} anchors to block refs and ${headingRefs} to heading refs across ${defenseEdits.size} defense files`);
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
