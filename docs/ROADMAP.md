# Project roadmap — priority-ordered by ROI (2026-07-12)

**State.** E4 v1.14 (the harm-myopia four-scenario robustness result) is **publication-ready** — Codex and the author
agree on the code (`scripts/simulation/e4-v5/`), the section draft, AND its integration into `drafts/paper.md` +
`drafts/paper.es.md`. The manuscript is deposited as an **unpublished Zenodo draft** (record 21311851; concept DOI
10.5281/zenodo.21193846); latest published = v1.12 (21252911). v1.14 will update that draft slot.

**Re-sequenced (author, 2026-07-12): CLOSE THE EXPERIMENT PROGRAM FIRST, costs LAST.** The layered value program is
now ordered **E4 → E5 → E9 → E10**, with the administrative-cost dimension deferred to E10 (after E9), NOT the
immediate next track. Canonical map + rationale: `docs/EXPERIMENT-INVENTORY.md`. Each stage is validated by a friendly
Codex/agent round (correct + anchor the model) before the adversarial pass.

- **E4** = selection at matched budget. CLOSED, publication-ready v1.14.
- **E5** = selection × delivery (delivered value), rebuilt on the E4 base. Steps 1+2 done (opaque-band sweep +
  monitoring coupling); `scripts/simulation/e4-v5/e5-delivery.mjs`. IN PROGRESS: friendly round → anchors → perfect /
  publication-ready → integrate into the paper's Finding 5.
- **E9** = full-stack comparison (planning + selection + delivery, central vs Core v0 distributed). NOT built. This is
  where the planning layer finally gets its honest measurement (the ≈1.05× was a mis-comparison — see inventory).
- **E10** = E9 + costs (admin `κ` / leakage). Absorbs `e5-layers.mjs`, `ADMIN-COST-LEG.md`, `LEAKAGE-CORRUPTION-LEG.md`.
- **THEN** headlines + paper propagation; deposit.

The tracks below are the PRE-re-sequencing plan, kept for reference; the cost leg (Track 2) now maps to E10.

ROI = impact ÷ effort, with dependencies. Ranked:

---
## TRACK 1 — NOW · B. Full-paper E4-coherence pass  ★★★★★
The E4 v1.14 extension was integrated as one new subsection + abstract, but ~10 other E4 mentions still frame it as
"modest Δ=0.025, retired multiplier, rests on architecture" only, and the header still says v1.13. Not false (the
symmetry gate IS the no-myopia anchor), but the manuscript must read coherently.
- **Do:** reconcile every E4 mention (paper.md lines ~3, 124, 519, 551-617, 754, 804, 1049, 1088, 1349, 1418,
  appendix 1458) so the symmetry-gate result and the v1.14 four-scenario map are consistently one story; bump the
  version header to v1.14; update the appendix "E4 calibration targets" to the anchored-scenario framing. Mirror
  EN↔ES (keep 17/17 parity). Keep the reporting embargo (no ×/D/C; declared reference points, not calibrated).
- **Done when:** Codex confirms the WHOLE paper's E4 narrative is coherent and non-contradictory, EN↔ES faithful.
- Effort: low-medium. Prerequisite for a clean deposit.

## TRACK 2 — C. Administrative-cost leg `m_admin`  ★★★★★  (highest new value)
The author's strongest card: a large AND well-identified number, anchored to **real public-budget line items** (no
political-opinion→project-value transport gap). Spec: `audits/2026-07-11-v1.14-design/ADMIN-COST-LEG.md`.
- **Do:** build `scripts/simulation/e4-v5/admin-cost.mjs` — a separate, transparent estimand `m_admin` (+ combined
  `m_total` with explicit decomposition, no double-counting). Scope (author): what Core v0 eliminates = value-proxy
  market studies, allocation, prioritization, AI-fiscalization machinery, delivery management, software licenses,
  travel; NOT project design, NOT human fiscalization; MINUS Core v0's own operating cost. Anchor `κ_C, κ_D` to
  published data (IDB *Better Spending for Better Lives* 2018; country procurement/administration figures). Run the
  same discipline as E4: contract/tests/embargo + Codex hardening rounds. Then add an `m_admin` subsection to the
  paper (EN+ES).
- **Done when:** Codex judges the leg honestly scoped, free of double-counting, anchored, and its paper subsection
  publication-ready. Constraint respected: no surveys/field/paid data — published sources only.
- Effort: medium-high (a mini-E4). Independent of B/A.

## TRACK 3 — A. Deposit v1.14 to Zenodo (author-gated)  ★★★★☆
- **Do:** render EN+ES (PDF/HTML), update the draft on record 21311851 via `scripts/zenodo-deposit-v1.13.mjs`
  (adapt to v1.14; reads `.env` ZENODO_TOKEN, never prints it, DRAFT only). The irreversible **Publish** is the
  author's action; I never handle the token or click publish.
- **Depends on:** B (+ C, per the strengthen-first choice — deposit with `m_admin` in).
- Effort: low. Author-gated.

---
## LATER (after the deposit)
- **D. Leakage / corruption leg `m_leak`** ★★★★☆ — `LEAKAGE-CORRUPTION-LEG.md`; identifiable (IDB), potentially
  large; build AFTER C (shared budget-accounting machinery; honest floor on Core v0's own new attack surfaces; no
  double-counting with `m_admin`).
- **E. Richer anti-value** ★★★☆☆ — `ANTIVALUE-MODELING.md`: signed voice (mobilization as well as suppression),
  harm-weighted aggregation `A` as a separate normative estimand. Robustness deepening, not a new headline.
- **F. Interactive explorer polish** ★★☆☆☆ — selectable axes, presets, accessibility passes; dissemination tool,
  best AFTER publication. (Published proto: claude.ai/code/artifact/f1a500f1…)
- **G. Bridge-measurement app / country presets** ★☆☆☆☆ — needs target-domain data; blocked by the no-field-data
  constraint except a self-built convenience-sample app (existence/direction only).

---
## Invariants (do not drift)
- E4 stays CLEAN: selection quality at MATCHED budget only; cost (`m_admin`) and leakage (`m_leak`) are SEPARATE legs.
- No calibrated multiplier; no ×/D-C; parity at 0; declared reference points, not calibrated impact, unless
  target-domain data exist. Capability guardrail: neither gerrymandered to a null nor to a positive.
- EN↔ES mirror discipline for every paper edit (keep 17/17 section parity).
- Zenodo deposit/publish is AUTHOR-GATED; I create/update drafts only, never handle the token, never publish.
- Single source of truth for scenario/leg configs = the code; docs give anchors/direction, not duplicated values
  (a doc↔code fork caused a wrong headline once — Codex v7).
