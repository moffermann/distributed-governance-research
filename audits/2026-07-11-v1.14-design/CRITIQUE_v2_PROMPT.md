# Adversarial critique of E4 design sketch v2 — instructions for Codex

Repo: C:/devel/claude-projects/distributed-governance-research (branch master). Read
`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v2.md` (the design), `CRITIQUE_SUMMARY.md` (your prior 7 must-fixes
for v1), `research/e4-value-estimation-foundation.md` and `audits/2026-07-11-v1.14-design/E4-empirical-anchors.md`
(the literature-anchored central-arm model M_C = a + b*S + w*(v_p - S_bar) + noise), and the shipped engines
`scripts/simulation/e5-sp-symmetry-gate.mjs`, `scripts/simulation/e4-v4-symmetric-frontier.mjs`.

Context (settled): Path B; the calibrated multiplier is retired. v2 reframes E4 as a **parity surface** (where does
each institution win) with Delta_O=(D-C)/O parity-at-0, never "x". The central arm is now anchored to published
elite-misperception evidence (Broockman-Skovron linear intercept-shift; Gagnon-Bartsch / Dias-Lucas-Sheffer
directional projection ~21-50%). The author wants the TRUTH — "sometimes the central wins" is an acceptable, even
desired, headline if precise conditions show it; but no forced ugliness either.

## IMPORTANT — use several parallel subagents (one per dimension). Do not go linear.

## Task
Verify v2 actually fixes your 7 prior must-fixes, then attack what remains. Dimensions (one subagent each):
1. **Multiplier-embargo & estimand** — is Delta_O=(D-C)/O used consistently (parity 0), the "x"/2.2x embargo
   honored, D/C quarantined as a secondary diagnostic? Any relapse path left?
2. **Parity-objective vs floor** — is the sign-map (with central-win regions led) genuinely the primary output, and
   the practical-equivalence band honest? Does anything smuggle a "floor"/magnitude back?
3. **Anchored central model** — is M_C = a + b*S + w*(v_p - S_bar) + noise faithful to Broockman-Skovron /
   Gagnon-Bartsch / Dias-Lucas-Sheffer? Is the **transport** from political-opinion to project-value defensible or
   fatal? How to bound the transport error honestly? Is separating format-reducible vs irreducible bias right?
4. **Parity boundary — analytic** — can the boundary be DERIVED in closed form for this central vs coverage (a
   generalization of beta = 1 - eta), or only simulated? Sketch the derivation or prove it can't be done cleanly.
5. **DGP completeness, registry & identification** — are all governing constants surfaced (not hidden outside
   theta)? Is the parameter-registry honest (PROXY-ANCHORED vs ASSUMED), and does transport quietly turn
   "anchored" back into "assumed"? Negative controls (lambda=0, w=0, a=0) adequate?
6. **Dependence-aware sensitivity** — is the joint-distribution / Shapley / inner-vs-outer plan correct and
   outcome-blind, or does the joint choice determine the result?
7. **Novelty & positioning** — with the central-arm result already in the literature, what is genuinely novel here
   (the parity boundary? the anchored simulation? partial identification?) and is the positioning honest?

## Output
Each subagent writes `audits/2026-07-11-v1.14-design/critique-v2-<dimension>.md` (verdict + specific issues + fixes,
real file:line). Then `audits/2026-07-11-v1.14-design/CRITIQUE_v2_SUMMARY.md`: overall verdict
(ready-to-preregister / needs-changes / not-viable), a per-must-fix cleared/partial/not-cleared table, remaining
blockers ranked, the single sharpest improvement, and an explicit yes/no on multiplier-relapse risk. Be candid;
reproduce/inspect the engines where useful. Do not rubber-stamp.
