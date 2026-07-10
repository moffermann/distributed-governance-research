# Publication-readiness roadmap (from the 2026-07-10 audit + symmetry-gate outcome)

**Date:** 2026-07-10 · **Owner:** author (Mauricio Offermann) · **Status of this file:** the working
control document for getting to a clean publication. Supersedes the stale live roadmap until `docs/03`
is reconciled (task T2.1).

**Sources folded in (nothing left out):** the five Codex audit files in this folder
(`headline-number.md`, `evaluation.md`, `errors-gaps-improvements.md`, `consistency-contradictions.md`,
`cleanliness-order-readability.md`), Codex's roadmap critique, and the **symmetry-gate outcome**
(`symmetry-gate-preregistration.md`, `symmetry-gate-results.txt`).

## Governing decision (locked 2026-07-10)
The pre-registered **symmetry gate returned NO-GO**: with a symmetric comparator (equal appraisal budget,
own-noisy eligibility, no oracle gate, bounded-credit central, delivery parity) the distributed selection
advantage is **real but small — median ≈0.025 of the full-information benchmark, below the pre-registered
0.05 materiality bar** (18/18 cells positive; rises with credit pressure, falls as credit aligns with
value). Therefore: **Path B — publish the architecture + qualitative mechanism; retire the calibrated
multiplier.** No engine rebuild on the critical path; the simulation is demoted to a directional
illustration reporting the small conditional number in a methods/appendix section only.

## Prioritization rule (author's, 2026-07-10)
Order strictly by **publication integrity**: correctness → consistency → external-facing correctness →
completeness → simulation trustworthiness → corpus navigability. **Anything that ENLARGES the paper
(new sections, the empirical study, ambitious rewrites, implementing the full mechanism) goes to the
bottom (Tier 8).** Do not publish with errors, contradictions, dead links, stale metadata, or unsupported
claims.

**Publication-readiness gate (all must be TRUE before submitting):** no claim exceeds what the evidence
supports · no internal contradiction between abstract/body/notes/roadmap · no stale external metadata
(version, DOI, license, attack count) · no dead references · every load-bearing citation supports its
claim · EN and ES mirror each other exactly · the shipped simulation reproduces what the text says it does.

---

## TIER 0 — Record the decisions (done / do now; minutes)
- [x] **T0.1** Symmetry gate run + pre-registration frozen (`symmetry-gate-*`). Verdict NO-GO recorded.
- [x] **T0.2** Gate integrity checks DONE (`e5-sp-symmetry-gate-diagnostics.mjs`; notes in
  `symmetry-gate-diagnostics-notes.md`; validated with Codex). (a) **World-cluster bootstrap**: honest
  pooled CI **[0.0233, 0.0288]** — NO-GO robust. (b) **Appraisal-allocation diagnostic**: adversarial>baseline
  is a genuine even-bandwidth effect (central RMSE explodes on high-reach; driven by p/tau, not beta), not a
  bug. Caveats to carry into the paper: document the p↔budget coupling; rename "adversarial" →
  **matched-budget low-information stress regime**; do not claim prop-reach eliminates the advantage (unrun).
  *(Codex gate interpretation)*

## TIER 1 — Truth of the claim (do FIRST; the credibility core; ~2–3 days)
- [ ] **T1.1 — Estimand contract (1 page).** Primary estimand, symmetry conditions, permitted
  interpretation; explicitly retires the calibrated multiplier. Governs every downstream claim.
  *(brainstorm; headline C1–C2; evaluation risk)*
- [ ] **T1.2 — Retire the multiplier as a calibrated result** everywhere it reads as current: `drafts/paper.md`
  + `paper.es.md` (~2.2×/+53-54× headline framing), `research/*`, `docs/03`. Replace with the qualitative
  mechanism + the honest one-line gate result ("median advantage ≈0.025 of the full-information benchmark,
  below its pre-registered 0.05 materiality gate") confined to a methods/appendix passage.
  *(gate; headline all; evaluation)*
- [ ] **T1.3 — Reframe the simulation's job:** directional/mechanism demonstration (regions, sensitivity,
  failure cases), never a privileged point estimate. *(evaluation next-steps; brainstorm)*
- [ ] **T1.4 — Relabel provenance:** the "pre-registration" is post-exploratory → call it an *exploratory
  analysis specification*; "pre-registered 7/7" is retired. *(evaluation M2; errors M2; consistency m1)*
- [ ] **T1.5 — Mechanism-fidelity honesty ("is this Core v0?"):** the engine's `P` does NOT implement
  visibility×traceability×concentration and `S` has no permanence — it imposes correlated latent scores.
  For publication, **relabel the engine as an abstract score-selection model of the mechanism**, not a
  Core v0 simulation (implementing the real mechanism is Tier 8). *(Codex critique; errors M7)*
- [ ] **T1.6 — Terminology:** the paper's new "agenda capture" = objective/selection misalignment, which
  is NOT the corpus's A020 "agenda-setting/scope construction". Disambiguate the term so it does not
  collide with the attack corpus. *(evaluation M5)*
- [ ] **T1.7 — Retire the "converges on old ~2.2×" corroboration claim** (different apparatus; the number
  was known during calibration → not independent). *(headline Major 7; consistency M7)*
- [ ] **T1.8 — Scope & unsupported-claim sweep:** state the domain is a bounded public-investment slice
  (not "the purpose of the state"); mark partial-equilibrium (no strategic behavior, complementarities,
  GE); soften/retract the currently-unverified claims (raw congruence ≈0.3; Arnold "diffuse benefits earn
  no return"; Core-v0 loss 2.5%; corr transportability; novelty "to our knowledge" before a systematic
  lit review). *(errors M8–M9, suspected list; evaluation M7, m1)*

## TIER 2 — Internal consistency (reconcile everything to the new state; ~1–2 days)
- [ ] **T2.1 — Live roadmap `docs/03_ROADMAP.md`:** rewrite to true state (hurdle implemented; gate NO-GO;
  multiplier retired; Path B). Point to this file. Move done P0–P5 to a dated log. *(consistency M3;
  cleanliness M1)*
- [ ] **T2.2 — Consolidate the three E5-SP notes** (`e4e5-value-model-v2.md`, `e5-sp-preregistration.md`,
  `e5-sp-paper-propagation.md`): one current-state block each + a dated appendix for history; remove
  "Not yet implemented", the stacked/contradExpiry banners, and the "harm-blindness revives" vs "inert"
  whiplash. *(consistency M4–M5; cleanliness M7; errors m5)*
- [ ] **T2.3 — Banner the retracted-era notes:** `e4-analytical-backbone.md` (<1% net-neg / 99% oracle)
  and `research/audit-2026-07-10.md` (obsolete "hurdle deferred / ~3× robust"). *(consistency M5–M6)*
- [ ] **T2.4 — Paper internal contradictions:** abstract says delivery is "not a second multiplier / not
  two independent effects to be multiplied" while Finding 5 says they "multiply" (EN+ES); reconcile.
  Fix the central-share number (66–77% → correct 55–65% of oracle). *(consistency M2, M8)*
- [ ] **T2.5 — Number-drift sweep:** grep every magnitude (2.0/2.2/2.8/3.0×, 1.43×, 53-54%, %oracle) and
  ensure each is either correct-current or clearly bannered historical. *(consistency number-drift)*

## TIER 3 — External-facing correctness (must fix before any deposit; ~½ day)
- [ ] **T3.1 — License conflict:** paper CC BY-NC-ND 4.0 vs `CITATION.cff`/`.zenodo.json`/**live deposit**
  CC-BY-4.0. Decide and make all agree (author call). *(consistency C2)*
- [ ] **T3.2 — Version/deposit reconciliation:** README says v1.8 latest but record **21252911 is live as
  v1.12** (title still "v1.8"). Confirm the true deposit state (revisits the "Zenodo paused" assumption)
  and align README/CITATION/.zenodo/LICENSE/docs-101/dates. *(consistency M9, m3; cleanliness m2)*
- [ ] **T3.3 — Stale attack count** in public metadata: README + `.zenodo.json` say 40/4 rounds; truth is
  43 (A001–A043), docs 67–113, 5 rounds. (Paper body 7 EN + 7 ES spots — do in the same pass.)
  *(consistency M10; cleanliness M2)*
- [ ] **T3.4 — Dead reference:** paper cites `research/e4-v4-symmetric-frontier.md` (nonexistent; it's a
  `.mjs` + a results `.txt`). Fix the citation. *(consistency m4; cleanliness M8)*
- [ ] **T3.5 — Extend `check-anchors.mjs`** to validate `research/` and `drafts/` code-span paths (it
  currently passes because it only checks docs|knowledge|attacks|defenses). *(cleanliness M8)*

## TIER 4 — Completeness (missing pieces; ~1 day)
- [ ] **T4.1 — Bibliography:** add the real, verified entries the reframed paper relies on
  (Gilens-Page 2014, Mayhew 1974, Arnold 1990, Hayek 1945, Pohl-Mihaljek 1992, IMF PIE-X 2015, Rajaram
  et al. 2014) to EN + ES. *(errors m6; propagation note)*
- [ ] **T4.2 — Citation precision:** tighten overgeneralized support (Bandiera 83% is setting-specific;
  Olken is audit coverage not detection prob; Reinikka-Svensson is context leakage; Hayek supports
  dispersed knowledge not the aggregation rule). *(errors M10, citation table)*
- [ ] **T4.3 — Contradiction registry:** add a C037 tombstone (title/disposition/date) and retitle the
  registry as closed with the true retained count. *(cleanliness M3)*
- [ ] **T4.4 — EN↔ES mirror pass:** every Tier 1–4 change lands in both languages in the same commit.
  *(standing discipline)*

## TIER 5 — Simulation trustworthiness (it ships with the paper; ~1–2 days)
- [ ] **T5.1 — Honest engine header + CLI:** fix stale comments ("delivery 1.43×", "all scored on true S",
  "<1% net-neg"); reject unknown flags; add `--help`; print effective params + seed base; fix the ignored
  `--rho`; note `--concentrate=1` is inert in the canonical frontier; rename `rho→latentRho`, output
  `corrSP`. *(headline Minor 1; errors m9; cleanliness M9)*
- [ ] **T5.2 — Drop or archive `--cats`:** it funds gross `S` (not `net`) with a different rule, so its
  decomposition is not the headline's; since the decomposition is no longer a core claim, **remove/archive
  it** rather than rebuild. *(headline Major 6; errors M5; cleanliness C1)*
- [ ] **T5.3 — Fix the corr display + rename "oracle":** compute realized corr over ALL worlds (not the
  first 4); rename the greedy benchmark from "oracle" to "full-information greedy benchmark". *(headline
  C1, m3; errors m1)*
- [ ] **T5.4 — Minimal regression tests:** deterministic snapshot + a scale/unit-invariance guard, added
  alongside each change. *(errors m8; cleanliness M9)*
- [ ] **T5.5 — Move generated/stray outputs** out of reader-facing `research/` (sidecar JSON, retired
  1M-format txt). *(cleanliness m1)*

## TIER 6 — Corpus navigability (a reviewer must find the current set; ~1 day)
- [ ] **T6.1 — `research/README.md`** manifest: one row per experiment/model (id, paper finding, status,
  current design, engine, command, result artifact, superseded-by). *(cleanliness M4)*
- [ ] **T6.2 — Resolve the E5 naming collision** (`e5-value-delivery-*` vs `e5-sp-*`); label historical
  notes and result formats. *(cleanliness M4)*
- [ ] **T6.3 — Make `docs/04_DOC_INDEX.md` navigable** (per-file rows w/ status), unique `03`. *(cleanliness M5)*
- [ ] **T6.4 — Nits:** mixed-language heading "Honest open cabos"→"Open issues"; `.gitignore` `./`;
  defense heading "(D041)"→"(D041–D043)". *(cleanliness nits)*

## TIER 7 — Minimal paper-readability fixes that are correctness, not enlargement (~1 day)
- [ ] **T7.1 — Reconcile the two finding-numbering systems** (abstract "findings" vs Section 6 Findings
  1–7). *(cleanliness M6)*
- [ ] **T7.2 — Define undefined notation** (`u`, `sel(θ)`); add a small notation/glossary table. *(cleanliness M6)*
- [ ] **T7.3 — Portable Markdown links** in public-facing artifacts (replace Obsidian wikilinks where they
  break on GitHub). *(cleanliness m3)*

---

## TIER 8 — ENLARGEMENTS (explicitly DEFERRED; do not block publication)
- [ ] **E1 — Paper Section 6 restructure:** `###` subheadings (E1–E8, split Finding 4's six sub-arguments),
  promote related-work/architecture/limitations/implementation leads to headings, trim the ~735-word
  abstract. *(cleanliness M6)* — readability enlargement.
- [ ] **E2 — Implement the real Core v0 mechanism in the engine** (visibility/traceability/concentration
  for `P`; permanence for `S`; endogenous proposals; strategic reporting) — turns the abstract model into
  a true Core v0 simulation. *(Codex critique; errors M7, M9)* — large.
- [ ] **E3 — The quantitative rebuild (the deferred Tier-1 engine work)** IF ever revisited: scale-invariant
  units, symmetric comparator in the main engine, separated delivery, joint/global sensitivity. Gated by a
  fresh pre-registration. *(headline/errors/evaluation P1 items)* — large; NO-GO says not now.
- [ ] **E4 — The empirical study:** does ex-ante cross-constituency coverage add incremental predictive
  value for realized project outcomes beyond sponsor preference and cost? On historical project data — the
  only path to a *measured* corr(S,P). *(brainstorm; evaluation next-steps)* — weeks–months.
- [ ] **E5 — Participation-decay diagnostic:** hold central appraisal capacity FIXED while varying the
  distributed `p`, to support any resilience-to-disengagement claim (the current gate couples the central's
  budget to `p`, so it cannot speak to participation decay). *(T0.2 diagnostics; Codex)* — small, post-hoc.

---

## Suggested execution order
1. **T0.2** integrity checks → **T1.1 estimand** → **T1.2–T1.8 truth of the claim** (this is the paper's spine).
2. **T2** internal consistency (reconcile all docs to the new state) — in the same working sessions as T1.
3. **T3** external correctness + **T4** completeness (cheap, unblock a clean deposit).
4. **T5** simulation trustworthiness + **T6** navigability + **T7** minimal readability-correctness.
5. Re-run the **publication-readiness gate** checklist; only then submit/deposit.
6. Tier 8 enlargements as separate, post-publication programs.
