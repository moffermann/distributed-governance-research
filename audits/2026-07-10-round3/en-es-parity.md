# EN/ES parity

## Verdict

**Minor-only — substantively publication-ready on this dimension.** The authoritative English paper and its Spanish mirror contain the same sections, claims, quantitative results, caveats, formulas, and references. I found no translation-only change to the governing Path-B claim, the symmetry-gate estimand or result, the retired multiplier's status, or the paper's limitations. One bounded navigational defect remains: five English companion-resource links are non-links with incorrect relative path text in the Spanish mirror.

## Findings

### 1. Minor — the Spanish mirror drops five live companion-resource links and prints paths that are wrong relative to `drafts/`

- **Locator:** English links at `drafts/paper.md:392`, `drafts/paper.md:528`, and `drafts/paper.md:1423-1427`; Spanish counterparts at `drafts/paper.es.md:430`, `drafts/paper.es.md:577`, and `drafts/paper.es.md:1500-1504`.
- **What is wrong:** English links `formal-models` twice, `simulation-results` twice, and `audit-evidence-base` once using working destinations such as `../research/formal-models.md`. At all five corresponding Spanish occurrences, the link is replaced with inline code such as `` `research/formal-models.md` ``. These are not clickable, and if interpreted relative to the paper's `drafts/` directory they point to nonexistent `drafts/research/...` paths rather than `../research/...`. The other two in-paper links—the claim-and-estimand contract and docs/113—are mirrored correctly, so this is a localized synchronization defect rather than a deliberate Spanish formatting convention.
- **Why it matters:** The claims and evidence are semantically identical, but a Spanish reader does not receive equivalent access to the formal proofs, full simulation tables, or audit evidence base at the places where the paper directs readers to them. That violates the requirement that the Spanish paper mirror the authoritative English surface exactly.
- **Concrete fix:** Replace the five Spanish code spans with Markdown links using translated link labels and the exact English destinations: `../research/formal-models.md`, `../research/simulation-results.md`, and `../research/audit-evidence-base.md`. Apply the change at both body occurrences and in the companion-materials note.

## Verification notes

- The heading trees match: both papers contain the same 17 Markdown headings, covering the abstract/resumen, Sections 1–10, the E4 calibration appendix, the references, and the same three Section 5 subsections.
- Paragraph blocks align one-for-one after accounting for the intentional Spanish translation banner at `drafts/paper.es.md:5`; no English argument paragraph lacks a Spanish counterpart and no extra Spanish claim paragraph appears.
- An ordered comparison of every digit-bearing token in each aligned paragraph found no numerical claim drift. The only tokenization difference is the semantically equivalent English prose “roughly twofold to more than fivefold” at `drafts/paper.md:603-605` versus Spanish “~2× a más de 5×” at `drafts/paper.es.md:657-660`.
- The governing evidence hierarchy is mirrored: the abstract result and limitations (`drafts/paper.md:13-15`; `drafts/paper.es.md:15-17`), the separate pre-registered median and post-hoc ratio-of-sums (`drafts/paper.md:537-555`; `drafts/paper.es.md:587-607`), the delivery-at-parity/future-estimand limitation (`drafts/paper.md:1154-1179`; `drafts/paper.es.md:1229-1254`), and the conclusion's retirement language (`drafts/paper.md:1272-1288`; `drafts/paper.es.md:1348-1365`) say the same thing.
- Both bibliographies contain the same 80 entries in the same order. Every locator in this report was re-read against the current working tree immediately before finalization.
