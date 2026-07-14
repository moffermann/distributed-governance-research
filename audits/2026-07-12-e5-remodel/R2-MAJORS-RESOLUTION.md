# Adversarial R2 code-consistency majors — RESOLVED (all cleared)

**Date:** 2026-07-13. The round-2 adversarial verdict (`ADVERSARIAL-R2-VERDICT.md`) left the E5/E9/E10 *code/test*
majors open (no headline blocker, but propagation / world-sample consistency / test-weakness / invalid-input /
design-drift defects). These are now fixed and adversarially verified over three passes. **Headlines unchanged**
throughout: E5 **+58.6%** [+58.0, +59.2], E9 **+57.4%**, E10 planning-off **+58.6% → +57.7%** (−0.9pp).

## The six majors (+ minors) and their fixes

| # | Experiment | Defect | Fix |
|---|---|---|---|
| #1 | E9 | headline used recycle; dispersion/agenda tables inherited the strict default → inconsistent planning/full | one `PRIMARY` recycled object threaded through every emitted primary table + tests; strict kept only as a labelled diagnostic and the nSec=1→E5 reduction |
| #2 | E10 | `armValueNet` scaled `phi`, so the oracle + world-retention used the NET budget → arms could retain DIFFERENT world samples | added `budgetScale` to `delivered2x2`/`fullStack` that scales ONLY arm funding; oracle + retention always full-budget → scale=1 / 1−κ_C / 1−κ_D share the SAME retained worlds and normalizer |
| #3 | E10 | tests could pass the rejected value-haircut impl; no PRO_DIST | tests pin `withCosts == delivered2x2(budgetScale=1−κ)` over the full oracle, require STRICT excess over the naive `value·(1−κ)` haircut, pin shared retention (equal `n`/`sumO`) for both arms in PROBABLE **and** PRO_DIST, and check both signed net cells |
| #4 | E5 | `tempt_tail` absent from the LHS + validation; tests passed with zero verified diversion | `tempt_tail` REQUIRED in `validateDelivery` (finite ∈[0,1], never omitted), SWEPT + carried in the LHS, and pinned: default ~2% / R=0 ~7% nonzero, `=== 0` collapse when tail off, truly-omitted config rejected |
| #5 | E10 | invalid κ / non-boolean `planningOn` accepted | `validateCosts`: finite κ ∈[0,1), strict boolean `planningOn`; `e10()` calls it |
| #6 | E5/E9 docs | inline drift (pure U(0,1), zero verified diversion, "belongs to E10" de-overlap contradiction, "robust") | corrected inline: temptation is U(0,1)+tail; diversion already charged in E5, E10's κ is de-overlapped admin cost; selection/delivery "large-in-PROBABLE, not robust" |
| new | E5/E9 API | public `budgetScale` unvalidated | validated finite ∈[0,1] in both engines, with rejection tests |
| new | E10 | `planningOn` path silently used strict, not recycle | exported `PLANNING_PRIMARY` (recycle); `e10()` planning-on defaults to it, pinned against `fullStack(...PLANNING_PRIMARY)` |
| new/minor | E9 | recycled tables are all-positive, but stdout said "sign-ambiguous / ~0-3% / agenda DOMINANT" and (after a first fix) falsely "planning reverses sign across named worlds" | stdout corrected to match the printed numbers: planning stays POSITIVE across the four named worlds (SELECTION/DELIVERY are the layers that reverse), magnitude rides on the declared `secValSpread`; agenda strengthens the near-zero, CI-unresolved distributed-sel effect |

## Verification

Three hostile adversarial passes (Codex, multi-role): pass 1 verified #1/#2/#5/#6 and flagged #3/#4 + 3 new defects;
pass 2 cleared planning-primary and caught an stdout error introduced by the first #1 rewrite; pass 3 found **no open
major anywhere** with only 3 E9 prose items left; the **final pass returned "all cleared"** — E5/E9/E10 code/test-
consistent, no open major, no stdout/number/comment contradiction.

**Tests:** E5 52/52, E9 29/29, E10 27/27, E4 all green. E4 scenario ordering (−0.04 < +0.13 < +0.37 < +0.55 < +1.96),
the `nSec=1 → E5` exact reduction, and the embargo suite all preserved. Worktree clean.

**Not in scope (unchanged):** the manuscript (already publication-ready per the friendly panel);
`research/e4-analytical-backbone.md` still names ρ(C) (the manuscript refers to it generically); the Zenodo deposit
(author-gated).
