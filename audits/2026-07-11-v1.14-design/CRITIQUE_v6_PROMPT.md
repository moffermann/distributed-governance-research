# Adversarial critique of E4 v1.14 v6 — the CODE — instructions for Codex

Repo: C:/devel/claude-projects/distributed-governance-research (branch master). v6 addresses your v5 verdict
(`CRITIQUE_v5_SUMMARY.md`: NEEDS CHANGES, 0 cleared / 7 partial / 0 not, capability NOT met, multiplier-relapse
MATERIAL). Read `scripts/simulation/e4-v5/` — `contract.mjs`, `engine.mjs`, `schema.mjs`, `adapter.mjs`,
`evidence.mjs`, `controls.mjs`, `test.mjs`, `theorem-check.mjs` — plus `research/e4-parity-theorem.md`,
`audits/2026-07-11-v1.14-design/{DESIGN_SKETCH_v5.md,ROADMAP.md,ANTIVALUE-MODELING.md}`, and the aligned companions
`research/e4-value-estimation-foundation.md`, `audits/2026-07-11-v1.14-design/E4-empirical-anchors.md`.

**RUN it:** `npm run e4:controls`, `npm run e4:test`, `npm run e4:theorem`, `npm run e4:evidence`.

## What v6 changed (verify each against your v5 blockers)
1. **Manifest + fail-closed validation:** `theta_id` is now a hash of a RESOLVED evidence manifest (world, budgets,
   swept keys, alpha factors, estimand, optimizer). `validateDomain` fails closed on the executable domain
   (integrality of N/K, positive Beta shapes, `c_lo<c_hi`, `phi∈(0,1)`, unit intervals). Dead params removed
   (`rho_P` cancels under z-scoring; `common_random` unused).
2. **Joint evaluator (replaces 4-key corners):** declared fixed-vs-uncertain split; the sweep is a joint box over
   7 UNCERTAIN coords INCLUDING your sign-flippers `p, sigma_e`; a one-at-a-time flip probe over the held coords.
3. **Robust estimand + repaired state machine:** switched to **ratio-of-sums** `Σ(D−C)/ΣO` (a single tiny-O world
   can no longer dominate — your (1,1)/(−1,100) divergence); the D_F backbone now reports **sign shares** (magnitude
   over D_F is meaningless — arms can destroy value); **set-based materiality** over the headline R_alpha; degeneracy
   /sufficiency aborts; recursive finiteness in the closed schema.
4. **Fixtures through the classifier:** `classify()` is exported and unit-tested directly; a harm-channel attribution
   test (m falls when `pi_opp→0`); strong-central and null fixtures.
5. **Embargo as a release boundary:** the whole evidence text (incl. rival + hash lines) is routed through the sole
   adapter; legacy engines refuse to run without `E4_ALLOW_LEGACY=1` (a release test asserts exit 2).
6. **Analytic theorem + regression:** `e4-parity-theorem.md` (joint-normal fixed-threshold; `a` absent; large-K
   corollary) with a passing regression (`e4:theorem`, ~0.2 MC SE); companions aligned (project-varying + harm form;
   Prelec = F↔G instrument, not target `w`).

Current evidence: `m_hat≈46%`; sign INDETERMINATE over D_F (Core v0 wins ~67% of corners, central ~31%); robustly
positive over R_alpha at α=0.5/0.8, central-possible at α=0.95; numerical RESOLVED; no held coordinate flips the sign.

## IMPORTANT — use several parallel subagents (one per dimension). RUN the code. Do not rubber-stamp.

## Task
For each of your 7 v5 blockers, decide cleared / partial / not-cleared NOW, and attack what remains. Look hard at:
the joint-set evaluator (is corners+center a real envelope, or does it still miss interior extrema? is the
fixed-vs-uncertain split honest, or does an "uncertain" coordinate belong in "fixed" or vice-versa?); the
ratio-of-sums switch (does it change the estimand's meaning in a way that should be pre-registered/justified? is the
sign-share backbone honest?); the R_alpha magnitude (the >100% values — legitimate value-destruction, or an
artifact?); the manifest hash (does it now identify the actual run?); the embargo (any remaining bypass / token
variant / legacy feed?); the theorem (is the proof correct and honestly scoped?); capability (do the fixtures +
attribution now PROVE it?).

## Output
Each subagent writes `audits/2026-07-11-v1.14-design/critique-v6-<dimension>.md`. Then
`audits/2026-07-11-v1.14-design/CRITIQUE_v6_SUMMARY.md`: overall verdict (ready-to-preregister / needs-changes /
not-viable), a per-blocker cleared/partial/not-cleared table (all 7), remaining blockers ranked, the single
sharpest improvement, explicit yes/no on multiplier-relapse, explicit yes/no on capability-met, and the shortest
path to preregisterable. If it is genuinely ready to pre-register, say so plainly.
