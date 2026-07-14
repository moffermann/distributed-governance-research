// Beautiful PDF builder: Markdown -> styled HTML -> PDF (via puppeteer/Chrome, which embeds fonts into the PDF).
// Usage: node scripts/build-pdf.mjs <input.md> <output.pdf> --lang=es|en --title="..." [--titlepage]
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { marked } from 'marked';
import puppeteer from 'puppeteer';

const args = process.argv.slice(2);
const [inFile, outFile] = args.filter((a) => !a.startsWith('--'));
const opt = Object.fromEntries(args.filter((a) => a.startsWith('--')).map((a) => {
  const [k, ...v] = a.replace(/^--/, '').split('=');
  return [k, v.length ? v.join('=') : true];
}));
const lang = opt.lang || 'es';
const titlePage = !!opt.titlepage;

let md = readFileSync(inFile, 'utf8');

// Split off a title block (H1 + leading metadata) for a dedicated title page, if requested.
let titleHtml = '';
if (titlePage) {
  const firstH2 = md.search(/^## /m);
  if (firstH2 > 0) {
    const head = md.slice(0, firstH2);
    md = md.slice(firstH2);
    titleHtml = `<section class="titlepage">${marked.parse(head)}</section>`;
  }
}

marked.setOptions({ gfm: true, breaks: false });
const bodyHtml = marked.parse(md);

const L = {
  es: { pageOf: 'Página' },
  en: { pageOf: 'Page' },
}[lang] || { pageOf: 'Page' };

const css = `
:root{
  --ink:#161616; --muted:#5b5b5b; --accent:#1f3d5c; --accent2:#7a5c2e;
  --rule:#d9d9d9; --tableHead:#eef2f6; --codebg:#f4f5f7;
  --serif: Georgia, "Iowan Old Style", "Times New Roman", serif;
  --sans: "Segoe UI", "Helvetica Neue", Arial, sans-serif;
  --mono: "Cascadia Code", "Consolas", "SFMono-Regular", monospace;
}
*{ box-sizing:border-box; }
html,body{ background:#ffffff; }
html{ font-size:10.7pt; }
body{
  font-family:var(--serif); color:var(--ink); line-height:1.52;
  margin:0; -webkit-font-feature-settings:"liga","kern"; font-feature-settings:"liga","kern";
  text-rendering:optimizeLegibility;
}
p{ margin:0 0 .62em; text-align:justify; hyphens:auto; -webkit-hyphens:auto; }
h1,h2,h3,h4{ font-family:var(--sans); color:var(--accent); line-height:1.22; font-weight:600; text-wrap:balance; }
h1{ font-size:1.95rem; margin:0 0 .35em; letter-spacing:-.01em; }
h2{ font-size:1.28rem; margin:1.5em 0 .5em; padding-bottom:.18em; border-bottom:1.5px solid var(--rule); break-after:avoid; }
h3{ font-size:1.06rem; margin:1.15em 0 .35em; color:#26476a; break-after:avoid; }
h4{ font-size:.98rem; margin:1em 0 .3em; color:#2f2f2f; break-after:avoid; }
h2+p, h3+p, h4+p{ break-before:avoid; }
strong{ font-weight:700; color:#0f0f0f; }
em{ font-style:italic; }
a{ color:var(--accent); text-decoration:none; }
ul,ol{ margin:.2em 0 .7em; padding-left:1.35em; }
li{ margin:.22em 0; text-align:justify; hyphens:auto; }
li::marker{ color:var(--accent); }
blockquote{
  margin:.8em 0; padding:.5em .9em; border-left:3px solid var(--accent2);
  background:#faf7f1; color:#3a3a3a; font-size:.96em;
}
blockquote p:last-child{ margin-bottom:0; }
code{ font-family:var(--mono); font-size:.86em; background:var(--codebg); padding:.05em .32em; border-radius:3px; color:#243b53; }
pre{ background:var(--codebg); padding:.7em .9em; border-radius:6px; overflow-x:auto; font-size:.82em; line-height:1.4; }
pre code{ background:none; padding:0; }
hr{ border:0; border-top:1px solid var(--rule); margin:1.6em 0; }
sup,sub{ line-height:0; }

/* Tables */
table{ border-collapse:collapse; width:100%; margin:.9em 0 1.1em; font-size:.9em;
  font-variant-numeric:tabular-nums; break-inside:avoid; }
thead th{ background:var(--tableHead); color:#12314e; font-family:var(--sans); font-weight:600;
  text-align:left; }
th,td{ border:1px solid var(--rule); padding:.4em .6em; vertical-align:top; }
tbody tr:nth-child(even){ background:#fafbfc; }

/* Lead / metadata paragraph right after H1 (bold blurb + copyright) */
h1 + p strong, h1 + p{ }
/* The bold "Working paper ..." blurb and the italic copyright line */
p em:only-child{ color:var(--muted); }

/* Title page */
.titlepage{ break-after:page; display:flex; flex-direction:column; justify-content:center;
  min-height: 86vh; text-align:left; }
.titlepage h1{ font-size:2.5rem; line-height:1.15; margin-bottom:.6em; }
.titlepage p{ text-align:left; }
.titlepage > p:first-of-type{ /* the bold blurb */ font-size:.95rem; color:#333;
  border-top:2px solid var(--accent); border-bottom:1px solid var(--rule);
  padding:.9em 0; margin:.4em 0 1.1em; }
.titlepage em{ color:var(--muted); }

/* Simple header block for short docs (no title page): make the H1 area prettier */
.doc > h1:first-child{ border-bottom:2px solid var(--accent); padding-bottom:.25em; }

/* Avoid orphan/widow-ish breaks */
h1,h2,h3,h4{ break-inside:avoid; }
img{ max-width:100%; }
`;

const html = `<!doctype html><html lang="${lang}"><head><meta charset="utf-8">
<title>${(opt.title || '').replace(/</g, '&lt;')}</title>
<style>${css}</style></head>
<body><div class="doc">${titleHtml}${bodyHtml}</div></body></html>`;

const htmlPath = outFile.replace(/\.pdf$/i, '.tmp.html');
mkdirSync(dirname(outFile), { recursive: true });
writeFileSync(htmlPath, html);

const footer = `<div style="width:100%; font-family:'Segoe UI',Arial,sans-serif; font-size:8pt; color:#8a8a8a; text-align:center; padding:0 12mm;">
  <span class="pageNumber"></span> / <span class="totalPages"></span>
</div>`;
const headerT = `<div style="width:100%; font-family:'Segoe UI',Arial,sans-serif; font-size:7.5pt; color:#b3b3b3; text-align:right; padding:0 12mm;">
  ${(opt.running || '').replace(/</g, '&lt;')}
</div>`;

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.goto(pathToFileURL(resolve(htmlPath)).href, { waitUntil: 'networkidle0' });
await page.pdf({
  path: outFile,
  format: 'A4',
  printBackground: true,
  displayHeaderFooter: true,
  headerTemplate: headerT,
  footerTemplate: footer,
  margin: { top: '20mm', bottom: '18mm', left: '19mm', right: '19mm' },
  preferCSSPageSize: false,
});
await browser.close();
console.log('PDF written:', outFile);
