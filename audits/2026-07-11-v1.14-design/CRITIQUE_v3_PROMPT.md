# Adversarial critique of E4 design sketch v3 — instructions for Codex

Repo: C:/devel/claude-projects/distributed-governance-research (branch master). Read
`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md` (the NEW design), `CRITIQUE_v2_SUMMARY.md` (your prior verdict
on v2: NEEDS CHANGES, 7 blockers) and the seven `critique-v2-*.md` files, plus `research/e4-value-estimation-
foundation.md`, `audits/2026-07-11-v1.14-design/E4-empirical-anchors.md`, and the shipped engines
`scripts/simulation/e5-sp-symmetry-gate.mjs`, `scripts/simulation/e4-v4-symmetric-frontier.mjs`.

Context (settled): Path B; the calibrated multiplier is retired. v3 reframes E4 as a **transport-robust partial
identification** of the credit-vs-coverage **parity boundary**, with (i) ONE frozen estimand
`m(theta)=E_W[(D_W-C_W)/O_W|theta]`, parity at 0; (ii) source!=target coefficients with a pre-registered
transport-discrepancy set T (incl. attenuation-to-zero g=0 and sign-reversal g<0) yielding bounds [m_lo,m_hi] and a
`transport-indeterminate` class; (iii) a complete executable DGP with the project-indexed central model
`M_C = a + b*S_j + w*(v_p - S_bar_j) + eta`; (iv) an analytic BENCHMARK under stated assumptions + a numerical full
frontier (the beta=1-eta claim is RETIRED); (v) a mechanical Delta_O-first output embargo isolating the legacy
engine. The author wants the TRUTH — "sometimes the central wins" and "the sign is unidentified here" are BOTH
acceptable, even desired, headlines. No forced ugliness either.

## IMPORTANT — use several parallel subagents (one per dimension). Do not go linear.

## Task
Verify v3 actually closes each of your seven v2 blockers, then attack what remains. Blockers were:
(1) target model not identified / transport not bounded; (2) no complete executable v2 DGP; (3) parity estimand not
frozen (choice of functional can flip the sign); (4) invalid "extends beta=1-eta" analytic claim; (5) joint law can
choose every headline; (6) multiplier quarantine not mechanically enforceable; (7) novelty premature.

Dimensions (one subagent each):
1. **Frozen estimand** — is `m=E_W[(D-C)/O]` genuinely ONE functional now? Does the per-world ratio + the O<=o_min
   exclusion bias the sign vs a ratio-of-sums or median? Is the materiality delta honestly justified (not recycling
   0.05)? Is the `unresolved`/`transport-indeterminate` state coherent with the frontier m=0?
2. **Transport-robust partial ID** — is source!=target now correctly separated? Is the transport set T (incl. g=0
   and sign-reversal) the honest identified region, or still a hidden analyst choice that determines the answer? Are
   the bounds [m_lo,m_hi] computed over the right object? Does labeling target a/w/b "PROXY-INFORMED via T" finally
   stop the "anchored" overclaim?
3. **Complete executable DGP** — are §3's equations a full, runnable spec (world, F, reach, costs, budget, MNAR
   reports, central model, credit, selection)? Any remaining hidden constant outside theta_all? Are the negative
   controls (w=0,a=0,lambda=0) sufficient to prove symmetry, and is the project-indexed w*(v_p - S_bar_j) actually
   separately identified from a under the selection nonlinearity?
4. **Analytic benchmark** — is retiring beta=1-eta correct, and is the Cov(S,X_k)/sd(X_k) parity benchmark
   derivable and correctly scoped as the LIMITING case (not the claim)? Sketch the derivation or show where it fails.
5. **Sensitivity — measure-free primary** — is the measure-free conditional frontier + partial-ID map genuinely
   primary (no joint law choosing the headline)? Are the secondary region-mass/Shapley steps correctly quarantined
   and frozen-before-running?
6. **Mechanical embargo & engine spec** — is the Delta_O-first output schema + legacy isolation actually
   enforceable in code (fails on unregistered literal; never prints "x"; D/C forbidden by default)? Any relapse
   path left? Explicit yes/no on multiplier-relapse risk.
7. **Novelty & positioning** — is "theorem-backed benchmark + transport-robust robustness atlas + measurement plan"
   an honest and sufficient contribution? Run the sharper prior-art check on noisy/biased **expert-vs-crowd
   budgeted selection** (not just F-vs-G perception). Is anything here already published?

## Output
Each subagent writes `audits/2026-07-11-v1.14-design/critique-v3-<dimension>.md` (verdict + specific issues + fixes,
real file:line). Then `audits/2026-07-11-v1.14-design/CRITIQUE_v3_SUMMARY.md`: overall verdict
(ready-to-preregister / needs-changes / not-viable), a per-blocker cleared/partial/not-cleared table (all 7),
remaining blockers ranked, the single sharpest improvement, and an explicit yes/no on multiplier-relapse risk. Be
candid; reproduce/inspect the engines where useful. Do not rubber-stamp. If v3 is genuinely ready to pre-register,
say so plainly.
