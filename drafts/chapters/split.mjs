#!/usr/bin/env node
// Split drafts/paper.md (EN) and drafts/paper.es.md (ES) into per-chapter working files under
// drafts/chapters/, a frozen copy under drafts/chapters/originals/, a YAML scope file per chapter,
// and a manifest. NON-DESTRUCTIVE: build.mjs reassembles working copies back into the papers.
//
//   node drafts/chapters/split.mjs           # init: (re)write originals/ + manifest; create working
//                                            #   md + yaml ONLY IF MISSING (never clobbers edits)
//   node drafts/chapters/split.mjs --reset   # also overwrite working md + yaml from the pristine source
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = dirname(fileURLToPath(import.meta.url));
const ORIG = join(HERE, "originals");
const ROOT = join(HERE, "..", "..");
const RESET = process.argv.includes("--reset");
mkdirSync(ORIG, { recursive: true });

function chunk(raw) {
  const re = /^(# |## )/gm;                            // NOT `### ` (level-3 stays inside its chapter)
  const bounds = []; let m;
  while ((m = re.exec(raw)) !== null) bounds.push(m.index);
  if (!bounds.length) return [{ head: "(none)", text: raw }];
  if (bounds[0] !== 0) bounds.unshift(0);
  const out = [];
  for (let i = 0; i < bounds.length; i++) {
    const text = raw.slice(bounds[i], i + 1 < bounds.length ? bounds[i + 1] : raw.length);
    const nl = text.indexOf("\n");
    out.push({ head: text.slice(0, nl < 0 ? text.length : nl).trim(), text });
  }
  return out;
}
function slugify(head, i) {
  if (/^#\s/.test(head)) return "00-front";
  const s = head.replace(/^#+\s*/, "").replace(/^\d+(\.\d+)*[.\)]?\s*/, "")
    .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 40);
  return String(i).padStart(2, "0") + "-" + (s || "chapter");
}
const wc = (t) => (t.trim().match(/\S+/g) || []).length;
const q = (s) => JSON.stringify(String(s ?? ""));

// Chapter-scope design (v1.15). max_words = absolute cap; else round(max_frac * original EN words).
const SCOPE = {
  "front":       { summarize:false, max_frac:1.0, target:"-", in:"Paper title only.", out:"Body content.", preserve:["The title verbatim."], obs:"", notes:"Verbatim." },
  "abstract":    { summarize:true, max_words:280, target:"~280 words (aggressive)", in:"The abstract.", out:"Method/result detail.",
    preserve:["Fair literature-anchored ASYMMETRIC contrast as the PRIMARY finding: PROBABLE ~98% vs ~44% (~2.2x, ~54-pt).","+58.6-pt full selection+delivery result.","Honest label: directional/conditional/stylized, NOT calibrated field effects.","Symmetry gate = a NARROW idealized-central robustness check that CANNOT bound the architecture.","The calibrated FIELD multiplier stays retired (do not restore it).","Credit-vs-coverage mechanism.","43-attack adversarial review.","The 'no pilot / uncalibrated units' honest limitation."],
    obs:"<<AUTHOR OBSERVATION PENDING — fill this, then it is passed to Codex on the next summarization pass.>>",
    notes:"CARRIES THE FRAMING FIX. Remove any confirmatory-vs-exploratory inversion; do not headline 'retire the multiplier'." },
  "introduction":{ summarize:true, max_frac:0.6, target:"medium", in:"Motivation, credit-vs-coverage idea, contribution statement.", out:"Methods, results, proofs.",
    preserve:["The problem/motivation.","The contribution statement.","Qualify any 'mandated planning' as the TUTORED-mode case, not the architecture."], obs:"", notes:"" },
  "the-functional-distribution-principle":{ summarize:true, max_frac:0.8, target:"light", in:"The selective-distribution principle.", out:"Core v0 specifics.", preserve:["The selective/functional distribution principle."], obs:"", notes:"" },
  "related-work":{ summarize:true, max_frac:0.6, target:"medium", in:"Positioning vs prior literature.", out:"Our own results.", preserve:["Positioning vs polycentric/liquid-democracy/mechanism-design literature.","The distinguishing citations."], obs:"", notes:"Often trimmable." },
  "the-core-v0-architecture":{ summarize:true, max_frac:1.0, target:"medium + ADD modalities", in:"Roles, lifecycle, planning scopes.", out:"Proofs, results.",
    preserve:["Role separation (proposer/executor/fiscalizer/evidence/custody).","The project lifecycle.","Planning scopes.","ADD: early operating-modalities subsection — Open = distributed planning by construction; Tutored/closed = centralized scope construction as a TRANSITION, and what the central does in tutored mode."], obs:"", notes:"Subsumes ERRATA E-1." },
  "formal-analysis":{ summarize:true, max_frac:0.9, target:"light (rigor)", in:"Propositions 5.1-5.3.", out:"Empirics.",
    preserve:["Prop 5.1 incentive-compatible milestone disbursement.","Prop 5.2 collusion-proof fiscalization.","Prop 5.3 attention-constrained allocation.","The reconciling text: distributed prioritization holds even in tutored mode."], obs:"", notes:"Keep propositions; tighten prose only; connect to the §4 modalities subsection." },
  "computational-evidence":{ summarize:true, max_frac:0.5, target:"HEAVY", in:"Results narrative.", out:"Full methods -> Appendix E4.",
    preserve:["Fair asymmetric PROBABLE result (98%/44% ~2.2x) as PRIMARY.","+58.6-pt full stack with its CI.","Symmetry gate demoted to a narrow idealized-central robustness check (state WHY the idealization cannot bound the architecture).","Three-layer factorial + the layer-sign-reversal caveat.","Common-mode sensitivity.","Every honest caveat."], obs:"", notes:"CRUX + biggest cut. Remove the confirmatory/exploratory inversion; drop 'retire the multiplier' as headline; dedupe the ~20 restatements." },
  "adversarial-review-as-method":{ summarize:true, max_frac:0.4, target:"HEAVY", in:"That adversarial review was the method (short).", out:"Blow-by-blow of the 43 attacks (in the corpus).",
    preserve:["That adversarial review WAS the method.","43 attacks / 5 rounds / integrated-or-bounded-limitation outcome."], obs:"", notes:"Compress hard." },
  "limitations":{ summarize:true, max_frac:0.85, target:"light", in:"Honest limits and scope conditions.", out:"New claims.",
    preserve:["Every distinct limitation and scope condition."], obs:"", notes:"KEEP — rigor. Tighten only." },
  "implementation-pathway":{ summarize:true, max_frac:0.7, target:"medium", in:"Transition/operating-mode deployment path.", out:"",
    preserve:["The operating-mode transition path.","Incumbent-resistance indicators."], obs:"", notes:"Align with the §4 modalities subsection." },
  "conclusion":{ summarize:true, max_frac:0.6, target:"medium", in:"What the paper establishes.", out:"Restating the number many times.",
    preserve:["What the paper establishes.","The corrected headline, stated ONCE."], obs:"", notes:"Remove repeated restatements." },
  "appendix-e4":{ summarize:true, max_frac:0.9, target:"keep + relabel", in:"Symmetric-gate full methods + the four-scenario robustness map.", out:"",
    preserve:["Symmetric gate full methods.","Four-scenario robustness map.","E4 calibration targets."], obs:"", notes:"Keep methods (an appendix is the right home); relabel the gate as a conservative/idealized slice, not the confirmatory headline." },
  "references":{ summarize:false, max_frac:1.0, target:"-", in:"Bibliography.", out:"", preserve:["All references verbatim."], obs:"", notes:"Verbatim." },
};

const enC = chunk(readFileSync(join(ROOT, "drafts", "paper.md"), "utf8"));
const esC = chunk(readFileSync(join(ROOT, "drafts", "paper.es.md"), "utf8"));
console.log(`EN chunks: ${enC.length}   ES chunks: ${esC.length}`);
if (enC.length !== esC.length) { console.log("!! chunk-count mismatch — aborting."); process.exit(1); }

const manifest = [];
for (let i = 0; i < enC.length; i++) {
  const slug = slugify(enC[i].head, i);
  const key = slug.replace(/^\d+-/, "");
  const sc = SCOPE[key] || { summarize:true, max_frac:0.7, target:"TBD", in:"TBD", out:"TBD", preserve:[], obs:"", notes:"" };
  const enFile = `${slug}.en.md`, esFile = `${slug}.es.md`, metaFile = `${slug}.yaml`;

  // frozen originals (always) + working copies (only if missing, unless --reset)
  writeFileSync(join(ORIG, enFile), enC[i].text);
  writeFileSync(join(ORIG, esFile), esC[i].text);
  if (RESET || !existsSync(join(HERE, enFile))) writeFileSync(join(HERE, enFile), enC[i].text);
  if (RESET || !existsSync(join(HERE, esFile))) writeFileSync(join(HERE, esFile), esC[i].text);

  const enWords = wc(enC[i].text);
  const maxWords = sc.max_words ?? Math.round((sc.max_frac ?? 0.7) * enWords);
  const status = sc.summarize ? "summary" : "ready";   // summary = needs work | ready = approved
  if (RESET || !existsSync(join(HERE, metaFile))) {
    const preserve = (sc.preserve || []).map(p => `  - ${q(p)}`).join("\n") || "  []";
    writeFileSync(join(HERE, metaFile),
`chapter: ${String(i).padStart(2, "0")}
slug: ${slug}
section: ${q(enC[i].head)}
order: ${i}
files: { en: ${enFile}, es: ${esFile} }
status: ${status}            # summary = needs summarizing | ready = approved, leave it alone
summarize: ${sc.summarize}
en_words_original: ${enWords}
max_words: ${maxWords}
target_reduction: ${q(sc.target)}
scope_in: ${q(sc.in)}
scope_out: ${q(sc.out)}
must_preserve:
${preserve}
observations: |
  ${sc.obs || ""}
notes: ${q(sc.notes)}
`);
  }
  manifest.push({ order: i, slug, section: enC[i].head, en: enFile, es: esFile, meta: metaFile, en_words: enWords, max_words: maxWords, status });
}
writeFileSync(join(HERE, "manifest.json"), JSON.stringify(manifest, null, 2) + "\n");
console.log(`originals/ frozen; working md + yaml ${RESET ? "reset" : "created-if-missing"}; manifest written (${manifest.length} chapters).`);
