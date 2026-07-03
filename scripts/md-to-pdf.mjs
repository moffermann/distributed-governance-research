#!/usr/bin/env node
// Render a corpus markdown document to a print-quality PDF via headless Edge.
// Handles the corpus subset of markdown: headings, bold/italic, inline code,
// fenced code blocks, blockquotes, lists, horizontal rules, and Obsidian
// wikilinks ([[target|display]] renders as its display text).
//
// Usage: node scripts/md-to-pdf.mjs <input.md> <output.pdf> [--title "..."]

import { readFileSync, writeFileSync, mkdtempSync, rmSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { join } from "node:path";
import { tmpdir } from "node:os";

const [input, output] = process.argv.slice(2).filter((a) => !a.startsWith("--"));
if (!input || !output) {
  console.error("usage: node scripts/md-to-pdf.mjs <input.md> <output.pdf>");
  process.exit(1);
}

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const inline = (s) =>
  esc(s)
    .replace(/\[\[[^\]|]+\|([^\]]+)\]\]/g, "<span class=\"xref\">$1</span>")
    .replace(/\[\[([^\]|]+)\]\]/g, "<span class=\"xref\">$1</span>")
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*\n]+)\*/g, "<em>$1</em>");

const lines = readFileSync(input, "utf8").split(/\r?\n/);
const out = [];
let fence = false;
let list = null; // "ul" | "ol" | null
let para = [];

const flushPara = () => {
  if (para.length) {
    out.push(`<p>${inline(para.join(" "))}</p>`);
    para = [];
  }
};
const closeList = () => {
  if (list) {
    out.push(`</${list}>`);
    list = null;
  }
};

for (const raw of lines) {
  if (raw.trim().startsWith("```")) {
    flushPara();
    closeList();
    out.push(fence ? "</code></pre>" : "<pre><code>");
    fence = !fence;
    continue;
  }
  if (fence) {
    out.push(esc(raw));
    continue;
  }
  const line = raw;
  const h = line.match(/^(#{1,6})\s+(.*)$/);
  if (h) {
    flushPara();
    closeList();
    out.push(`<h${h[1].length}>${inline(h[2])}</h${h[1].length}>`);
    continue;
  }
  if (/^---+\s*$/.test(line)) {
    flushPara();
    closeList();
    out.push("<hr>");
    continue;
  }
  const bq = line.match(/^>\s?(.*)$/);
  if (bq) {
    flushPara();
    closeList();
    out.push(`<blockquote><p>${inline(bq[1])}</p></blockquote>`);
    continue;
  }
  const ul = line.match(/^[-*]\s+(.*)$/);
  const ol = line.match(/^\d+\.\s+(.*)$/);
  if (ul || ol) {
    flushPara();
    const kind = ul ? "ul" : "ol";
    if (list !== kind) {
      closeList();
      out.push(`<${kind}>`);
      list = kind;
    }
    out.push(`<li>${inline((ul || ol)[1])}</li>`);
    continue;
  }
  if (line.trim() === "") {
    flushPara();
    closeList();
    continue;
  }
  para.push(line.trim());
}
flushPara();
closeList();

const html = `<!doctype html><html><head><meta charset="utf-8"><style>
  @page { size: A4; margin: 25mm 22mm; }
  body { font-family: Georgia, 'Times New Roman', serif; font-size: 10.5pt;
         line-height: 1.55; color: #1a1a1a; max-width: 100%; }
  h1 { font-size: 17pt; line-height: 1.3; margin: 0 0 10pt; }
  h2 { font-size: 13pt; margin: 18pt 0 6pt; border-bottom: 0.5pt solid #999; padding-bottom: 2pt; }
  h3 { font-size: 11.5pt; margin: 14pt 0 4pt; }
  p { margin: 0 0 7pt; text-align: justify; }
  blockquote { margin: 8pt 14pt; padding-left: 10pt; border-left: 2pt solid #888; color: #333; }
  pre { background: #f4f4f2; border: 0.5pt solid #ccc; padding: 7pt 9pt; font-size: 8.8pt;
        white-space: pre-wrap; word-wrap: break-word; margin: 6pt 0 9pt; }
  code { font-family: Consolas, monospace; font-size: 0.92em; }
  ul, ol { margin: 0 0 8pt; padding-left: 20pt; }
  li { margin-bottom: 3pt; text-align: justify; }
  hr { border: none; border-top: 0.5pt solid #aaa; margin: 14pt 0; }
  .xref { font-family: Consolas, monospace; font-size: 0.88em; color: #444; }
  h1, h2, h3 { page-break-after: avoid; }
  pre, blockquote { page-break-inside: avoid; }
</style></head><body>${out.join("\n")}</body></html>`;

const tmp = mkdtempSync(join(tmpdir(), "mdpdf-"));
const htmlPath = join(tmp, "doc.html");
writeFileSync(htmlPath, html);
const edge = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
execFileSync(edge, [
  "--headless",
  "--disable-gpu",
  `--print-to-pdf=${output}`,
  "--no-pdf-header-footer",
  htmlPath,
], { stdio: "inherit" });
rmSync(tmp, { recursive: true, force: true });
console.log(`wrote ${output}`);
