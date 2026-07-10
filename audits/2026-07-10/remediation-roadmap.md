# Publication-readiness roadmap (from the 2026-07-10 audit + symmetry-gate outcome)

> **✅ STATUS 2026-07-10: PUBLICATION-READY. Both author decisions resolved.** After the NO-GO decision,
> Tiers 0–7 were worked end-to-end and validated with Codex at each step; Codex's final holistic review
> confirmed the paper + reviewer-visible surface are publication-ready. The two blocking author items are now
> resolved: **T3.2** — verified (Zenodo API) that **v1.12 / 21252911 is the live latest deposit**; working
> draft bumped to **v1.13**; all local metadata aligned. **T3.1** — author chose **Option B (dual license,
> separate records)**: corpus/code CC BY 4.0 / MIT, manuscript CC BY-NC-ND 4.0 as a separate Zenodo record
> from v1.13; local metadata + deposit procedure prepared. **The only remaining step is the author's Zenodo
> DEPOSIT of the two v1.13 records** (a mechanical action, Zenodo-paused/author-gated) — not a blocker on the
> repo's publication-readiness. All other open items below are non-blocking polish or Tier-8 enlargements.

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

## TIER 1 — Truth of the claim ✅ COMPLETE (2026-07-10; validated with Codex)
> Added in the T1 close (Codex review): an explicit "stylized test of a selection mechanism, not a
> validated Core v0 implementation" caveat in the Section-6 quantitative-status paragraph (EN+ES), and the
> 46–68% central-share relabelled a **candidate validation target requiring an explicit construct mapping**
> (not a "checkable prediction") in prose + calibration table (EN+ES). Deferred to T2/T5: standardize the
> remaining "oracle"→"full-information benchmark" wording across the paper.
- [x] **T1.1 — Estimand contract** DONE: `research/claim-and-estimand-contract.md` (validated with Codex;
  its 5 edits applied — selection-only estimand vs future Δ_total, benchmark not an upper bound, median vs
  cluster-CI separated, "credit-pressured" not "credit-maximizing", uncalibrated units stated). Governs
  every downstream claim; §7 retires the multiplier / Gilens-Page calibration / delivery product /
  "pre-registered 7/7". *(brainstorm; headline C1–C2; evaluation risk)*
- [x] **T1.2 — Retire the multiplier as a calibrated result** DONE (validated with Codex, contract-conformant).
  `drafts/paper.md` + `paper.es.md` in lockstep: abstract "correction" paragraph (gate result only, no recited
  ~2×); "Status of the earlier compound ratios" + governing "Quantitative status" paragraph; contributions,
  Finding 5 ("interact" not "multiply"), Finding 7 ("audit-parameterized baseline — what it does and does not
  calibrate"), E8, transition, conclusion all reframed; the 2.19/2.22/2.26 kept only as labelled conditional
  apparatus outputs. Controlling retirement banners on `e4e5-value-model-v2.md`, `e5-sp-preregistration.md`,
  `docs/03`; propagation note CANCELLED. check-anchors clean; EN/ES at parity. *(gate; headline all; evaluation)*
- [x] **T1.3 — Reframe the simulation's job** DONE (covered by T1.2): the paper's "Quantitative status"
  paragraph + Section 6 now present the sims as conditional apparatus outputs / mechanism direction, not a
  privileged point estimate; contract §6 binds this. *(evaluation next-steps; brainstorm)*
- [x] **T1.4 — Relabel provenance** DONE (covered by T1.1+T1.2): contract §7 + the `e5-sp-preregistration.md`
  banner call it a post-exploratory *exploratory analysis specification*; "pre-registered 7/7" retired.
  *(evaluation M2; errors M2; consistency m1)*
- [x] **T1.5 — Mechanism-fidelity honesty** DONE for publication text (contract §5 + the paper call the
  engine a "stylized model of the selection mechanism, not a validated Core v0 implementation"). The stale
  engine *header comment* cleanup is tracked under T5.1; implementing the real mechanism is Tier 8 (E2).
  *(Codex critique; errors M7)*
- [x] **T1.6 — Terminology** N/A for the paper: "agenda capture" does **not** appear in `drafts/paper.md`/
  `paper.es.md` (the term-collision with A020 was in the now-retired v2 notes). Nothing to disambiguate in
  the publication. *(evaluation M5)*
- [x] **T1.7 — Retire the "converges on old ~2.2×" corroboration** DONE (contract §7; the paper no longer
  claims convergence — the ABM figures are labelled conditional apparatus outputs). *(headline Major 7;
  consistency M7)*
- [x] **T1.8 — Scope & unsupported-claim sweep** DONE for the paper: novelty "to our knowledge / first"
  claims softened (prior-art review preliminary; the (iv) "wins at every scale" now "consistent but small,
  Section 6") EN+ES. Scope/partial-equilibrium limits are governed by contract §5. NOTE: the unverified
  notes-claims (raw congruence ≈0.3; Core-v0 2.5%; corr transportability) are NOT in the paper (they lived
  in the retired v2 notes). The Arnold-strength / redistribution-rhetoric refinements → T2.4. *(errors
  M8–M9; evaluation M7, m1)*

## TIER 2 — Internal consistency (reconcile everything to the new state; ~1–2 days)
- [x] **T2.1 — Live roadmap `docs/03_ROADMAP.md`** DONE: the stale 2.8×-era ACTIVE STACK replaced by a
  short "moved" pointer to this remediation roadmap + the contract; Program-status lines de-staled (v2
  RETIRED, multiplier retired, deposit state → author). A "live roadmap" no longer carries a contradictory
  body. *(consistency M3; cleanliness M1)*
- [~] **T2.2 — Consolidate the three E5-SP notes** — controlling RETIREMENT banners now on all three
  (`e4e5-value-model-v2.md`, `e5-sp-preregistration.md`, `e5-sp-paper-propagation.md` = CANCELLED); the
  deeper "one current-state block + dated appendix" consolidation is deferred (cosmetic; banners already
  prevent misreading). *(consistency M4–M5; cleanliness M7; errors m5)*
- [x] **T2.3 — Banner the retracted-era notes** DONE: controlling banners on `e4-analytical-backbone.md`
  and `research/audit-2026-07-10.md` pointing to the NO-GO/contract state. *(consistency M5–M6)*
- [x] **T2.4 — Paper internal contradictions** DONE: the "multiply vs not-multiply" clash resolved in T1
  (Finding 5 → "interact"); the 66–77% central-share lived in the retired notes (not the paper); residual
  "E7 calibrated baseline / recalibration" standardized to **"audit-parameterized"** (paper.md:340, 1336 +
  ES) and the calibration appendix reconciled with the construct-mapping caveat (%-oracle → %-benchmark;
  "direct overlay" → "candidate validation target requiring a construct bridge"), EN+ES. *(consistency M2, M8;
  T1.2 review; final Codex holistic check)*
- [x] **T2.5 — Number-drift sweep** DONE: swept in T1.2/T3.3; every current-reading magnitude in the paper
  is either correct or labelled a superseded/conditional apparatus output; check-anchors clean throughout.
  *(consistency number-drift)*

## TIER 3 — External-facing correctness (must fix before any deposit; ~½ day)
- [x] **T3.1 — License: DECIDED 2026-07-10 (final: author chose full openness — CC BY 4.0 everywhere).**
  (First leaned Option B / dual with a protected NC-ND manuscript, then reversed: the code + corpus are
  already public MIT/CC-BY, so a protected manuscript would not protect the implementation, and the ideas are
  public via the paper regardless — so full CC BY is the coherent, honest choice.) **All text + research
  content (corpus + manuscript + publishable model + essay/explainer + reviewer packets) = CC BY 4.0; code =
  MIT; attribution required.** Reverted every surface: paper headers EN+ES, LICENSE.md, CITATION.cff,
  `.zenodo.json` (single record), README, docs/101, external-review READMEs; deleted the separate-record
  metadata `drafts/paper.zenodo.json`; RELEASING.md back to a single-record deposit. No conflict remains.
  *(consistency C2)*
- [x] **T3.2 — Version/deposit: RESOLVED 2026-07-10.** Verified read-only via the Zenodo API: record
  **21252911 is live, v1.12, published 2026-07-07, is_last=true, CC BY 4.0** — falsifying the stale "v1.8
  paused" assumption. Author confirmed the next version is **v1.13** (this Path B reframe). Aligned all local
  metadata: README (latest deposited 21252911/v1.12; working draft v1.13), LICENSE.md citation (v1.12/21252911),
  CITATION.cff (version v1.13 per the draft-sync rule; preferred-citation DOI stays v1.12/21252911),
  `.zenodo.json` (v1.13), paper headers EN+ES (v1.13). Only the live record's TITLE string still reads "v1.8"
  — fixing it needs a metadata redeposit (author action). *(consistency M9, m3)*
- [x] **T3.3 — Stale attack count** DONE: README + `.zenodo.json` + paper (7 EN + 7 ES spots) updated to
  **43 attacks (A001–A043), docs 67–113, 5 rounds**; README/.zenodo descriptions also **retired the
  ~2× headline framing** ("recalibrating the delivered-value headline" → the NO-GO/contract statement).
  *(consistency M10; cleanliness M2)*
- [x] **T3.4 — Dead reference** DONE: paper (EN+ES) now cites the real
  `scripts/simulation/e4-v4-symmetric-frontier.mjs` + `research/e4-v4-symmetric-frontier-results.txt`.
  *(consistency m4; cleanliness M8)*
- [ ] **T3.5 — Extend `check-anchors.mjs`** to validate `research/`/`drafts/` code-span paths (deferred;
  the specific dead ref it would catch is already fixed). *(cleanliness M8)*

## TIER 4 — Completeness (missing pieces; ~1 day)
- [x] **T4.1 — Bibliography: MOSTLY MOOT.** The paper (Path B, harm-blindness framing) does **not** cite
  Gilens-Page/Mayhew/Arnold/Pohl-Mihaljek/IMF PIE-X — those were for the v2 agenda-capture framing we did
  NOT propagate. Verified via grep: none appear in `drafts/paper.md`. Only Hayek (already present) is used.
  No missing-bib gap remains for the current paper. *(errors m6; propagation note)*
- [x] **T4.2 — Citation precision** DONE (highest-value item): Bandiera 83% cell flagged **setting-specific
  (Italian standardized-goods procurement)** in the calibration table (EN+ES). Olken/Reinikka-Svensson are
  used correctly in the current paper (the flagged over-reach lived in retired notes); Hayek is used for
  dispersed knowledge, not an aggregation rule. *(errors M10, citation table)*
- [x] **T4.3 — Contradiction registry** DONE: honest **C037 TOMBSTONE** row (no surviving record; whether
  never-assigned/withdrawn/merged/deleted is unverified — corrected per Codex from an earlier speculative
  wording) + count fixed to "nineteen resolved across C026–C045, one void tombstone". *(cleanliness M3)*
- [x] **T4.4 — EN↔ES mirror pass** — maintained throughout (every Tier 1–4 change landed in both languages).
  *(standing discipline)*

## TIER 5 — Simulation trustworthiness (it ships with the paper; ~1–2 days)
- [~] **T5.1 — Honest engine header + CLI:** header comment fixed (net value, 1.30×, RETIRED-status block →
  gate/contract) ✅. Remaining (deferred, lower-value): reject unknown flags, `--help`, print effective
  params, fix ignored `--rho`, note `--concentrate` inert, rename `rho→latentRho`/`corrSP`. *(headline Minor 1; errors m9)*
- [x] **T5.2 — Archive/flag `--cats`** DONE: `--cats` now prints a prominent LEGACY GROSS-VALUE DIAGNOSTIC
  warning (it funds gross `S`, so its factors do NOT decompose the net headline); kept for provenance
  rather than removed. *(headline Major 6; errors M5; cleanliness C1)*
- [x] **T5.3 — Runtime honesty (publication-blocking per Codex)** DONE: `e5-sp-model.mjs` now prints a
  prominent **RETIRED/EXPLORATORY runtime warning** at the top of output and relabels the misleading terms
  — 'rho' disclosed as a LATENT correlation (not Pearson corr(S,P)), 'corr(S,P)' as a 4-world diagnostic,
  the [0.1,0.3] window as NOT Gilens-Page-calibrated, 'oracle'→'full-information greedy benchmark', and
  dropped the "robust" claim. A user running the script now sees the retirement. *(headline C1, m3; errors
  m1; final Codex holistic check)*
- [ ] **T5.4 — Minimal regression tests:** deterministic snapshot + a scale/unit-invariance guard, added
  alongside each change. *(errors m8; cleanliness M9)*
- [ ] **T5.5 — Move generated/stray outputs** out of reader-facing `research/` (sidecar JSON, retired
  1M-format txt). *(cleanliness m1)*

## TIER 6 — Corpus navigability (a reviewer must find the current set; ~1 day)
- [x] **T6.1 — `research/README.md`** DONE: manifest naming the current authoritative set (contract, gate,
  exploratory engine, paper) + the governing one-line result + the superseded families (with banners).
  *(cleanliness M4)*
- [~] **T6.2 — E5 naming collision** — documented in the new `research/README.md` conventions note; the
  actual file rename is deferred (risky; low-value). *(cleanliness M4)*
- [ ] **T6.3 — Make `docs/04_DOC_INDEX.md` navigable** (per-file rows w/ status), unique `03`. Deferred
  (lower reader impact; the index is numerically complete). *(cleanliness M5)*
- [x] **T6.4 — Nits** DONE: "Honest open cabos"→"open issues"; defense heading "(D041)"→"(D041–D043)".
  (`.gitignore ./` left as-is — harmless.) *(cleanliness nits)*

## TIER 7 — Minimal paper-readability fixes that are correctness, not enlargement (~1 day)
- [x] **T7.1 — Reconcile the two finding-numbering systems** DONE: abstract now says "three results
  (distinct from the numbered Findings 1–7 of Section 6)" (EN+ES). *(cleanliness M6)*
- [x] **T7.2 — Define undefined notation** DONE: `u` (idiosyncratic need component independent of quality)
  and `sel(θ)` (Pearson corr between θ and the funding-target-reached indicator — corrected per Codex from
  a wrong first draft) defined at first use (EN+ES). A fuller glossary table is optional (Tier 8/E1). *(cleanliness M6)*
- [x] **T7.3 — Portable Markdown links** DONE (GitHub is a publication surface, per Codex): all 7 EN + 1 ES
  paper wikilinks converted to standard relative Markdown (`[text](../path)`); all targets verified to exist;
  check-anchors clean. (Internal corpus docs keep the Obsidian convention.) *(cleanliness m3)*

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
