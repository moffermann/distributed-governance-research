# Adversarial critique of E4 v1.14 (v7 state) — the CODE + the anchored-scenario framing — for Codex

Repo: C:/devel/claude-projects/distributed-governance-research (branch master). Since your v5 critique the design has
advanced substantially. RUN the code: `npm run e4:controls`, `e4:test`, `e4:theorem`, `e4:scenarios`, `e4:frontier`,
`e4:evidence`.

Read the code `scripts/simulation/e4-v5/` (contract, engine, schema, adapter, evidence, controls, test,
theorem-check, scenarios, scenario-configs, frontier), the anchors `research/e4-plausible-anchors.md`, the theorem
`research/e4-parity-theorem.md`, and the prior panel findings you should NOT re-derive:
`audits/2026-07-11-v1.14-design/{CRITIQUE_v5_SUMMARY.md,REVIEW_PANEL_CONSOLIDATED.md}` and `review-*.md`.

## What changed (verify + attack)
1. **Panel Tier-1 fixes:** latent crash fixed; `theta_id` now folds the resolved contract hash (mutating a THETA
   value changes it — verify); `validateConfig` rejects ±Infinity; `validateDomain` no longer forces zeta≥0; dead
   params (`rho_P`, `common_random`) removed.
2. **Estimand:** ratio-of-sums `Σ(D−C)/ΣO` with a per-arm efficiency decomposition `D/O`, `C/O`.
3. **Anchored 3-scenario framing (author):** PRO-CENTRAL (harm-myopia off, competent central — the continuity anchor
   to the earlier ~0.025 NO-GO), PROBABLE (evidence-anchored), PRO-DISTRIBUTED. Each knob's probable value is
   justified by empirical measurement (public-procurement heavy tail arXiv:1309.0218; PB turnout) or theory or
   proxy-with-transport-gap — see the master table in `e4-plausible-anchors.md`. Results: PRO-CENTRAL m=+6.1%,
   PROBABLE +46.6%, PRO-DIST +199.8% (with D/O,C/O). Continuity: removing myopia collapses +46.6%→+6.1%.
4. **Ceteris-paribus frontiers:** no single knob flips the winner from PROBABLE; a combined central-competence axis
   locates the parity frontier at t≈1.13 (central wins only if BETTER than a fully-competent plausible central).
5. Legacy engines behind `E4_ALLOW_LEGACY=1` (NOTE: panel found ~19 retired engines exist; only 2 guarded — still open).

## IMPORTANT — several parallel subagents. RUN the code. Do not rubber-stamp.

## Task — attack hardest at the NEW work
- **Scenario anchoring honesty:** are the PROBABLE bands genuinely evidence/theory-anchored, or still analyst-chosen
  to favour distribution? Is the transport gap (political-opinion→project-value) honestly handled for `w,a,b`? Is
  PRO-CENTRAL a fair "central's best case" or is it under-powered? Is the continuity claim (≈0.025 regime) sound?
- **Frontier methodology:** is the ceteris-paribus-from-PROBABLE + combined-competence-axis a valid way to LOCATE
  the frontier, or does starting at PROBABLE bias "no single knob flips it"? Is the t≈1.13 result robust?
- **The D/O,C/O decomposition and the >100% / negative values** — honest, or artefacts?
- **Still-open panel items:** universal legacy guard (H3), text-embargo confusables (M2), the global sweep still
  under construction, R_α "coverage" not verified, theorem scoped as no-myopia limit (M1).
- Re-check your 7 v5 blockers: cleared / partial / not-cleared NOW.

## Output
Each subagent → `audits/2026-07-11-v1.14-design/critique-v7-<dimension>.md`. Then `CRITIQUE_v7_SUMMARY.md`: overall
verdict, per-blocker table, remaining blockers ranked, single sharpest improvement, explicit yes/no on
multiplier-relapse and capability-met, and the shortest path to preregisterable. Say plainly if it is ready.
