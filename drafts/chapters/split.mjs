#!/usr/bin/env node
// Split drafts/paper.md (EN) and drafts/paper.es.md (ES) into per-chapter files under
// drafts/chapters/, plus a shared YAML scope file per chapter and a manifest.json.
// NON-DESTRUCTIVE: derives chapters from the papers; build.mjs reassembles them byte-for-byte.
//   node drafts/chapters/split.mjs
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = join(HERE, "..", "..");                 // repo root
const EN = join(ROOT, "drafts", "paper.md");
const ES = join(ROOT, "drafts", "paper.es.md");

// Split a paper into chunks at the title (`# `) and every level-2 heading (`## `).
// Chunks are verbatim substrings; concatenating them in order reproduces the file exactly.
function chunk(raw) {
  const re = /^(# |## )/gm;                           // NOT `### ` (level-3 stays inside its chapter)
  const bounds = []; let m;
  while ((m = re.exec(raw)) !== null) bounds.push(m.index);
  if (!bounds.length) return [{ head: "(none)", text: raw }];
  if (bounds[0] !== 0) bounds.unshift(0);             // capture any leading bytes with the first chunk
  const out = [];
  for (let i = 0; i < bounds.length; i++) {
    const text = raw.slice(bounds[i], i + 1 < bounds.length ? bounds[i + 1] : raw.length);
    const head = text.slice(0, text.indexOf("\n") < 0 ? text.length : text.indexOf("\n")).trim();
    out.push({ head, text });
  }
  return out;
}

function slugify(head, i) {
  if (/^#\s/.test(head)) return "00-front";           // the title line
  const s = head.replace(/^#+\s*/, "").replace(/^\d+(\.\d+)*[.\)]?\s*/, "")
    .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 40);
  return String(i).padStart(2, "0") + "-" + (s || "chapter");
}

// My chapter-scope design (v1.15 goals baked in). Keyed by slug suffix (after the NN- prefix).
const SCOPE = {
  "front":                  { summarize: false, target: "-",   in: "Paper title only.", out: "Any body content.", notes: "Verbatim." },
  "abstract":               { summarize: true,  target: "tighten", in: "The single-paragraph abstract.", out: "Method/result detail.", notes: "CARRIES THE FRAMING FIX: fair literature-anchored asymmetric result (~2.2x, 98% vs 44%) is PRIMARY; the symmetry gate is a narrow robustness check, not 'confirmatory'; drop 'retire the multiplier' as the headline. Keep directional/conditional label." },
  "introduction":           { summarize: true,  target: "medium", in: "Motivation, the credit-vs-coverage idea, contribution statement.", out: "Methods, results, proofs.", notes: "Qualify any 'mandated/mandate-bound planning' phrasing as the TUTORED-mode case, not the architecture." },
  "the-functional-distribution-principle": { summarize: true, target: "light", in: "The selective-distribution principle.", out: "Core v0 specifics.", notes: "" },
  "related-work":           { summarize: true,  target: "medium", in: "Positioning vs prior literature.", out: "Our own results.", notes: "Often trimmable." },
  "the-core-v0-architecture": { summarize: true, target: "medium+add", in: "The architecture: roles, lifecycle, planning scopes.", out: "Proofs, computational results.", notes: "ADD an early, explicit OPERATING-MODALITIES subsection: Open = distributed planning by construction (the default); Tutored/closed = centralized scope construction as a TRANSITION mechanism, and WHAT THE CENTRAL DOES in tutored mode (defines/administers the Planning Scope, eligibility review; every material decision + silence -> public governance-resolution object). Subsumes ERRATA E-1." },
  "formal-analysis":        { summarize: true,  target: "light", in: "Propositions 5.1 disbursement, 5.2 fiscalization, 5.3 attention.", out: "Empirics.", notes: "RIGOR — keep the propositions; tighten prose only. Contains the reconciling text that distributed prioritization holds even in tutored mode; connect it to the §4 modalities subsection." },
  "computational-evidence": { summarize: true,  target: "HEAVY", in: "Results narrative across the experiments.", out: "Full methods -> Appendix E4.", notes: "CRUX. Correct the hierarchy: fair asymmetric literature-anchored contrast (~2.2x; +58.6 full stack) is the PRIMARY finding; the symmetric gate becomes a narrow selection robustness check whose idealization (harm-aware, incorruptible central) is stated as WHY it cannot bound the architecture. Remove the confirmatory/exploratory inversion, drop 'retire the multiplier' as conclusion, and dedupe the ~20 restatements of the number. Biggest single reduction." },
  "adversarial-review-as-method": { summarize: true, target: "HEAVY", in: "That adversarial review was the method (short).", out: "Blow-by-blow of the 43 attacks (lives in the corpus).", notes: "Methodological autobiography — compress hard to a short paragraph." },
  "limitations":            { summarize: true,  target: "light", in: "Honest limits and scope conditions.", out: "New claims.", notes: "KEEP — this is rigor, not autobiography. Tighten only." },
  "implementation-pathway": { summarize: true,  target: "medium", in: "Transition/operating-mode path to deployment.", out: "", notes: "Align with the §4 modalities subsection." },
  "conclusion":             { summarize: true,  target: "medium", in: "What the paper establishes.", out: "Restating the number many times.", notes: "Remove repeated restatements; state the corrected headline once." },
  "appendix-e4":            { summarize: true,  target: "keep-relabel", in: "Full methods of the symmetric gate AND the four-scenario robustness map.", out: "", notes: "Keep the detailed methods here (an appendix is the RIGHT home for the robustness check). Relabel to support the corrected hierarchy (gate = conservative/idealized slice, not the confirmatory headline)." },
  "references":             { summarize: false, target: "-", in: "Bibliography.", out: "", notes: "Verbatim." },
};

const enC = chunk(readFileSync(EN, "utf8"));
const esC = chunk(readFileSync(ES, "utf8"));
console.log(`EN chunks: ${enC.length}   ES chunks: ${esC.length}`);
if (enC.length !== esC.length) {
  console.log("!! chunk-count mismatch — EN/ES headings do not align. Listing heads:");
  const n = Math.max(enC.length, esC.length);
  for (let i = 0; i < n; i++) console.log(`  [${i}] EN: ${enC[i]?.head ?? "—"}   |   ES: ${esC[i]?.head ?? "—"}`);
  process.exit(1);
}

const yamlEsc = (s) => JSON.stringify(String(s ?? ""));   // safe one-line YAML scalar
const manifest = [];
for (let i = 0; i < enC.length; i++) {
  const slug = slugify(enC[i].head, i);
  const key = slug.replace(/^\d+-/, "");
  const sc = SCOPE[key] || { summarize: true, target: "TBD", in: "TBD", out: "TBD", notes: "" };
  const enFile = `${slug}.en.md`, esFile = `${slug}.es.md`, metaFile = `${slug}.yaml`;
  writeFileSync(join(HERE, enFile), enC[i].text);
  writeFileSync(join(HERE, esFile), esC[i].text);
  const enLines = enC[i].text.split("\n").length, esLines = esC[i].text.split("\n").length;
  writeFileSync(join(HERE, metaFile),
`chapter: ${String(i).padStart(2, "0")}
slug: ${slug}
section: ${yamlEsc(enC[i].head)}
order: ${i}
files: { en: ${enFile}, es: ${esFile} }
en_lines: ${enLines}
es_lines: ${esLines}
status: draft            # draft | editing | summarized | final
summarize: ${sc.summarize}
target_reduction: ${yamlEsc(sc.target)}
scope_in: ${yamlEsc(sc.in)}
scope_out: ${yamlEsc(sc.out)}
notes: ${yamlEsc(sc.notes)}
`);
  manifest.push({ order: i, slug, section: enC[i].head, en: enFile, es: esFile, meta: metaFile, en_lines: enLines, es_lines: esLines });
}
writeFileSync(join(HERE, "manifest.json"), JSON.stringify(manifest, null, 2) + "\n");
console.log(`Wrote ${manifest.length} chapters (+ .es.md + .yaml) and manifest.json to drafts/chapters/`);
