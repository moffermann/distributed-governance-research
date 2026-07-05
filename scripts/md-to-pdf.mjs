#!/usr/bin/env node
// Render a corpus markdown document to a print-quality PDF via headless Edge.
// Handles the corpus subset of markdown: headings, bold/italic, inline code,
// fenced code blocks, blockquotes, ordered/unordered lists, TABLES,
// horizontal rules, and Obsidian wikilinks (rendered as their display text).
//
// Usage: node scripts/md-to-pdf.mjs <input.md> <output.pdf> [--lang es|en] [--toc]

import { readFileSync, writeFileSync, mkdtempSync, rmSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { join, resolve } from "node:path";
import { tmpdir } from "node:os";

const args = process.argv.slice(2);
const flags = new Set(args.filter((a) => a.startsWith("--")));
const positional = args.filter((a) => !a.startsWith("--") && !["es", "en"].includes(a));
const langIdx = args.indexOf("--lang");
const lang = langIdx >= 0 ? args[langIdx + 1] : "es";
const wantToc = flags.has("--toc");
const [input, outputRaw] = positional;
if (!input || !outputRaw) {
  console.error("usage: node scripts/md-to-pdf.mjs <input.md> <output.pdf> [--lang es|en] [--toc]");
  process.exit(1);
}
const output = resolve(outputRaw); // Edge headless requires an absolute output path

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
const headings = []; // {level, text, id} for optional TOC
let fence = false;
let list = null;
let para = [];
let table = null; // {header: [], align: [], rows: [][]}
let firstH1Done = false;
let inRefs = false;

const slug = (t) => t.toLowerCase().replace(/[^a-z0-9áéíóúñü]+/gi, "-").replace(/^-+|-+$/g, "").slice(0, 60);

const flushPara = () => {
  if (para.length) {
    out.push(`<p>${inline(para.join(" "))}</p>`);
    para = [];
  }
};
const closeList = () => {
  if (list) { out.push(`</${list}>`); list = null; }
};
const flushTable = () => {
  if (!table) return;
  const alignCss = (a) => (a === "c" ? ' style="text-align:center"' : a === "r" ? ' style="text-align:right"' : "");
  let h = "<table><thead><tr>";
  table.header.forEach((c, i) => { h += `<th${alignCss(table.align[i])}>${inline(c)}</th>`; });
  h += "</tr></thead><tbody>";
  for (const row of table.rows) {
    h += "<tr>";
    row.forEach((c, i) => { h += `<td${alignCss(table.align[i])}>${inline(c)}</td>`; });
    h += "</tr>";
  }
  h += "</tbody></table>";
  out.push(h);
  table = null;
};
const splitRow = (line) =>
  line.replace(/^\s*\|/, "").replace(/\|\s*$/, "").split(/(?<!\\)\|/).map((c) => c.trim().replace(/\\\|/g, "|"));

for (let idx = 0; idx < lines.length; idx++) {
  const raw = lines[idx];
  if (raw.trim().startsWith("```")) {
    flushPara(); closeList(); flushTable();
    out.push(fence ? "</code></pre>" : "<pre><code>");
    fence = !fence;
    continue;
  }
  if (fence) { out.push(esc(raw)); continue; }

  // Table detection: a pipe row followed by a separator row
  if (/^\s*\|.*\|\s*$/.test(raw)) {
    const next = lines[idx + 1] || "";
    if (!table && /^\s*\|[\s:|-]+\|\s*$/.test(next)) {
      flushPara(); closeList();
      const align = splitRow(next).map((c) =>
        /^:-+:$/.test(c) ? "c" : /^-+:$/.test(c) ? "r" : "l");
      table = { header: splitRow(raw), align, rows: [] };
      idx++; // skip separator
      continue;
    }
    if (table) { table.rows.push(splitRow(raw)); continue; }
  } else if (table) {
    flushTable();
  }

  const h = raw.match(/^(#{1,6})\s+(.*)$/);
  if (h) {
    flushPara(); closeList(); flushTable();
    const level = h[1].length;
    const text = h[2];
    const id = slug(text);
    if (level === 1 && !firstH1Done) {
      firstH1Done = true;
      out.push(`<h1 class="doc-title" id="${id}">${inline(text)}</h1>`);
    } else {
      if (level === 2) {
        inRefs = /^(references|referencias)/i.test(text.trim());
        headings.push({ level, text, id });
        out.push(`<h2 id="${id}"${inRefs ? ' class="refs-head"' : ""}>${inline(text)}</h2>`);
      } else {
        if (level === 3) headings.push({ level, text, id });
        out.push(`<h${level} id="${id}">${inline(text)}</h${level}>`);
      }
    }
    continue;
  }
  if (/^---+\s*$/.test(raw)) { flushPara(); closeList(); flushTable(); out.push("<hr>"); continue; }
  const bq = raw.match(/^>\s?(.*)$/);
  if (bq) { flushPara(); closeList(); out.push(`<blockquote><p>${inline(bq[1])}</p></blockquote>`); continue; }
  const ul = raw.match(/^[-*]\s+(.*)$/);
  const ol = raw.match(/^\d+\.\s+(.*)$/);
  if (ul || ol) {
    flushPara();
    const kind = ul ? "ul" : "ol";
    if (list !== kind) { closeList(); out.push(`<${kind}${inRefs && kind === "ul" ? ' class="refs"' : ""}>`); list = kind; }
    out.push(`<li>${inline((ul || ol)[1])}</li>`);
    continue;
  }
  if (raw.trim() === "") { flushPara(); closeList(); continue; }
  para.push(raw.trim());
}
flushPara(); closeList(); flushTable();

// Optional table of contents inserted after the title block (first <hr> or title)
let body = out.join("\n");
if (wantToc && headings.length > 2) {
  const tocItems = headings
    .map((h) => `<li class="toc-l${h.level}"><a href="#${h.id}">${esc(h.text)}</a></li>`)
    .join("\n");
  const toc = `<nav class="toc"><div class="toc-title">${lang === "es" ? "Contenido" : "Contents"}</div><ul>${tocItems}</ul></nav>`;
  const firstHr = body.indexOf("<hr>");
  body = firstHr >= 0
    ? body.slice(0, firstHr + 4) + "\n" + toc + "\n" + body.slice(firstHr + 4)
    : toc + "\n" + body;
}

const docTitle = (lines.find((l) => l.startsWith("# ")) || "# Documento").slice(2).replace(/[*_`]/g, "");

const html = `<!doctype html><html lang="${lang}"><head><meta charset="utf-8"><title>${esc(docTitle)}</title><style>
  @page { size: A4; margin: 24mm 21mm 22mm 21mm; }
  * { box-sizing: border-box; }
  /* Paint an explicit white page background: without it the PDF pages are
     transparent and dark-mode viewers (iOS, some readers) render black text
     on their own black canvas. print-color-adjust forces Edge to emit it. */
  html { -webkit-print-color-adjust: exact; print-color-adjust: exact; background: #ffffff; }
  body { font-family: 'Palatino Linotype', Palatino, Georgia, 'Times New Roman', serif;
         font-size: 10.8pt; line-height: 1.5; color: #1b1b1b; margin: 0;
         background: #ffffff; hyphens: auto; -webkit-hyphens: auto; }
  .running { position: fixed; top: -16mm; left: 0; right: 0; font-size: 7.5pt;
             color: #8a8a8a; letter-spacing: 0.04em; text-transform: uppercase;
             border-bottom: 0.4pt solid #d8d8d8; padding-bottom: 2pt;
             font-family: Georgia, serif; }
  h1.doc-title { font-size: 19pt; line-height: 1.25; margin: 0 0 6pt; font-weight: 700;
                 letter-spacing: -0.01em; }
  h1.doc-title + p em, .subtitle { color: #444; }
  h2 { font-size: 12.5pt; margin: 20pt 0 7pt; font-weight: 700;
       border-bottom: 0.6pt solid #b9b9b9; padding-bottom: 3pt; letter-spacing: 0.005em; }
  h3 { font-size: 11pt; margin: 14pt 0 5pt; font-weight: 700; }
  h4 { font-size: 10.8pt; margin: 12pt 0 4pt; font-weight: 700; font-style: italic; }
  p { margin: 0 0 7pt; text-align: justify; orphans: 3; widows: 3; }
  h1 + p, h2 + p, h3 + p { text-indent: 0; }
  blockquote { margin: 9pt 16pt 10pt; padding: 6pt 12pt; border-left: 2.2pt solid #555;
               background: #f7f7f5; color: #2c2c2c; font-size: 10.3pt; }
  blockquote p { margin: 0; }
  pre { background: #f6f6f3; border: 0.5pt solid #cfcfc9; border-radius: 2pt;
        padding: 8pt 10pt; font-size: 8.6pt; line-height: 1.42;
        white-space: pre-wrap; word-wrap: break-word; margin: 7pt 0 10pt;
        page-break-inside: avoid; }
  code { font-family: Consolas, 'Courier New', monospace; font-size: 0.9em;
         background: #f4f4f1; padding: 0 2pt; border-radius: 2pt; }
  pre code { background: none; padding: 0; }
  ul, ol { margin: 2pt 0 9pt; padding-left: 20pt; }
  li { margin-bottom: 3pt; text-align: justify; }
  ul.refs { list-style: none; padding-left: 0; }
  ul.refs li { padding-left: 18pt; text-indent: -18pt; margin-bottom: 4pt;
               font-size: 9.8pt; text-align: left; }
  hr { border: none; border-top: 0.5pt solid #b5b5b5; margin: 14pt auto; width: 40%; }
  table { border-collapse: collapse; width: 100%; margin: 8pt 0 11pt;
          font-size: 8.9pt; line-height: 1.35; page-break-inside: avoid; }
  thead th { border-top: 1.1pt solid #222; border-bottom: 0.6pt solid #222;
             padding: 3.5pt 5pt; text-align: left; font-weight: 700; }
  tbody td { border-bottom: 0.35pt solid #cccccc; padding: 3pt 5pt;
             vertical-align: top; }
  tbody tr:last-child td { border-bottom: 1.1pt solid #222; }
  .xref { font-family: Consolas, monospace; font-size: 0.86em; color: #4a4a4a; }
  .toc { margin: 10pt 0 4pt; padding: 8pt 12pt; background: #f8f8f6;
         border: 0.5pt solid #ddd; page-break-inside: avoid; }
  .toc-title { font-weight: 700; font-size: 10pt; margin-bottom: 4pt;
               text-transform: uppercase; letter-spacing: 0.06em; }
  .toc ul { list-style: none; padding-left: 0; margin: 0; column-count: 2; column-gap: 18pt; }
  .toc li { margin-bottom: 1.5pt; font-size: 9pt; text-align: left; }
  .toc li.toc-l3 { padding-left: 12pt; color: #555; }
  .toc a { color: inherit; text-decoration: none; }
  h1, h2, h3, h4 { page-break-after: avoid; hyphens: none; -webkit-hyphens: none; }
  blockquote, .toc { page-break-inside: avoid; }
</style></head><body>
<div class="running">${esc(docTitle.length > 90 ? docTitle.slice(0, 90) + "…" : docTitle)}</div>
${body}</body></html>`;

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
