# E4 — Propagation status, packaging, and decisions flagged for the author

> **SUPERSEDED (2026-07-10 audit).** This note predates the value-model-v2 agenda-capture reframe; its
> harm-blindness (beta*=1-eta) framing and any headline multipliers (2.2x/2.09x/1.83x/2.0x) are
> HISTORICAL. Current state: `research/e4e5-value-model-v2.md` + `research/e5-sp-preregistration.md`.
> Kept for the record.

## Status
Closes the Tier 1–3 improvement pass from the 6-reviewer constructive round. Records
(a) what was propagated to the paper, (b) the framing decisions I made autonomously,
(c) what remains for the author's judgment, and (d) packaging/placement decisions.
Everything is in git; **Zenodo remains paused**.

## A. Propagated to the paper (EN + ES, mirrored)
- **Abstract restructured to three pillars** under a "conditional frontier" signature:
  (1) allocation as the law **β < 1 − γ** (~parity to ~1.8×); (2) capture-resistance
  (the objection became the argument; ~10×, equal-wallet floor, m·q detection floor,
  burden-of-proof inversion); (3) delivery as the **precondition, not a second
  multiplier**. Combined "~2×" representative point; the audit-calibrated 2.2×
  (Finding 7) kept under its withdrawal condition; frontier + threshold named as the
  load-bearing results.
- **Finding 4** gained the symmetric re-examination (frontier + analytical backbone +
  capture) and now points to the new design docs; the participation-bias critique is
  absorbed into the β axis.
- **Experiment map** updated (E4 refined by E4-v4/v5).

## B. Framing decisions I made autonomously (please confirm or adjust)
1. **Three pillars, not two.** Promoted capture-resistance to its own beat (per 3
   reviewers) rather than folding it into effect (1) (my earlier Option A). *Adjustable.*
2. **Kept Finding 7's audit-calibrated 2.22×** as the surviving compound under its
   withdrawal condition, and framed the abstract's "~2×" as a representative point.
   Rationale: Finding 7 is a *separate* apparatus (the 10k-citizen ABM calibrated to
   auditors); E4-v4/v5 is a fresh matrix model of the allocation question. They are two
   models of the same question; I presented the frontier as the primary/more-careful
   result and kept 2.22× as the audit-anchored instantiation. **This is the biggest
   open editorial call** — an alternative is to drop the compound multiplier entirely.
3. **"Effects don't multiply" correction applied** (statistical reviewer): delivery is
   framed as the precondition that makes allocation capture-resistant, not an
   independent factor. *Adjustable.*
4. **Did NOT re-derive Finding 5's +53-54% selection or the 2.19× compound** — those are
   the ABM apparatus; changing them needs re-running E5/E7, out of scope for this pass.
   I added reconciling language in Finding 4 instead. **Flag:** a fuller reconciliation
   of Findings 5/7 with the E4-v4/v5 frontier is pending your call.

## C. Pending in the paper (Tier 2 material not yet inserted — needs your go)
- **Analytical results subsection** (Propositions 1–3 from `e4-analytical-backbone.md`):
  the parity law, the capture threshold ρ(C), the detection-floor theorem, + the three
  invariance propositions. Highest-value insertion; converts the paper from "sim table"
  to "theorem confirmed by sim."
- **Keystone citations** (`e4-theoretical-positioning.md`): VCG second-best, Ostrom P4,
  Wittman steelman, Condorcet independence bridge, QV family, Gibbard-Satterthwaite,
  Hirschman, Sen aggregation caveat, capture canon. To be woven into §5/§6 and the bib.
- **Calibration clause + targets appendix** (`e4-calibration-targets.md`): the central
  %oracle-vs-IEG/Flyvbjerg checkable prediction; the Gonçalves 2014 field-evidence
  clause; the "roadmap not apology" reframing of the model-internal gap.
- **Honest boundary from robustness:** interested-set size is load-bearing (advantage
  holds for sets ≥ ~5–30, collapses at very tiny 3–12); worth a sentence.

## D. Packaging / placement decisions (flagged)
- **Master vs companion split (recommend):** the **capture *claim* and the analytical
  backbone belong in the master** (the unifying thesis + the propositions); the
  **measurement machinery** (frontier sweeps, capture sensitivities, detection-floor
  runs, Morris screen) belongs in the **companion/experiments repo**. Mirrors the E8
  precedent. Your call.
- **Reproducibility:** the v4 frontier now caches its box computation (one clean run);
  the held-out confirmatory (`e4-v3-confirm.mjs`) already re-tests the six predictions
  on fresh seeds. Remaining (follow-up, low risk deferred to avoid disturbing working
  scripts): factor a shared kernel module (mulberry32 / buildWorld / fund) used by all
  E4 scripts, emit machine-readable (JSON/CSV) alongside the .txt, and a single
  `npm run repro:e4` target. Documented here rather than executed to keep the working
  scripts stable.
- **Figures (recommended for the paper/companion):** frontier heatmap with the β=1−γ
  line, capture-threshold curves with the pd-sensitivity band, the detection-floor
  surface, and the Morris tornado — the four objects that "are the evidence."

## E. One-line contribution claim (from the strategist, for your use)
> Distributed allocation's advantage over the centralized state is a conditional
> frontier, not a constant — it wins where a platform's voice inequality is milder than
> the state's blindness to diffuse harm — and the architecture's integrity layer is what
> makes that advantage resistant to organized capture.
