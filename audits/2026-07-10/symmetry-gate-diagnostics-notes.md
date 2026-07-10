# Symmetry-gate post-hoc diagnostics (T0.2) — outcome & caveats

**Date:** 2026-07-10 · **Status:** post-hoc (does NOT reopen the frozen gate). Validated with the auditor
(Codex). Script: `scripts/simulation/e5-sp-symmetry-gate-diagnostics.mjs`; raw output:
`symmetry-gate-diagnostics.txt`.

## What was checked and found
1. **World-cluster bootstrap** (honest CI; resample unit = world, not the 18 correlated cells).
   Pooled primary-domain `Delta = 0.0260`, **95% CI [0.0233, 0.0288]** — wider than the frozen gate's
   naive CI, sign unchanged, still below the 0.05 research-program rebuild gate. **NO-GO stands** under the correct
   interval.
2. **Adversarial > baseline is a genuine even-bandwidth effect, not a bug.** Under EVEN central appraisal
   allocation, RMSE(hatS_C − S) explodes on high-reach projects (top decile ~1519 reach: RMSE 222 base /
   482 stress); reach-proportional allocation sharply cuts the top-decile error (222→80, 482→165). The
   one-at-a-time move shows the advantage jump is driven by **p and tau** (scarcer, noisier information
   degrades the central's reach-tied appraisal), while **beta slightly REDUCES** the advantage (the
   distributed's own voice-bias weakness), exactly as the mechanism predicts.

## Caveats to carry into the paper (per auditor)
- **State the mechanism, not an unrun outcome.** The diagnostic shows proportional allocation lowers
  central RMSE; it does NOT show its effect on portfolio `Delta`. Say *"the larger advantage is explained
  by the even-bandwidth appraisal mechanism"* — do **not** say proportional allocation eliminates the
  advantage (that run was not done).
- **The `p` coupling must be documented prominently.** Central appraisal capacity is matched to the
  distributed arm's expected number of reports, so lowering `p` also lowers the central's information
  budget. Hence `+p only = 0.0507` means: *"under equal and increasingly scarce appraisal bandwidth,
  endogenous allocation of observations outperforms even allocation more strongly."* It does **NOT** mean
  falling citizen participation benefits distributed governance or demonstrates resilience to
  disengagement.
- **Rename** the "adversarial" case the **matched-budget low-information stress regime** in all
  paper-facing text, to avoid the participation-resilience misreading.

## Deferred (added to roadmap Tier 8, E5)
A genuine **participation-decay diagnostic** — hold central appraisal capacity FIXED while varying the
distributed `p` — is required before any resilience-to-disengagement claim. Not needed for the current
NO-GO / Path-B publication.

## Verdict
**T0.2 closed.** The gate's NO-GO is robust under the honest CI, and its regime structure is a genuine
modeled mechanism with the coupling caveat documented.

## Reading the frozen gate output (round-2 clarification)
- The gate's `symmetry-gate-results.txt` verdict prints **"advantage does not survive"**. Read this as
  **"does not clear the pre-registered 0.05 research-program rebuild gate"** — the advantage is **positive in all 18
  primary cells** (median Δ = 0.025, CI excludes zero); it is small, not absent. The paper/contract state
  this correctly ("positive but small").
- The frozen output still labels the low-information regime **"ADVERSARIAL"**; paper-facing text uses the
  more precise **"matched-budget low-information stress regime"** (see the caveat above). The frozen artifact
  is left unmutated for reproducibility; this note is the controlling interpretation.
