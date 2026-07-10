# Symmetry gate — pre-registration (FROZEN before running)

**Date:** 2026-07-10
**Purpose:** a go/no-go experiment to decide, with evidence, between (A) rebuilding the E5-SP quantitative
engine and (B) publishing the architecture + qualitative mechanism paper without a calibrated multiplier.
**Designed by:** Codex (gpt-5.6), the independent auditor, to be genuinely adversarial (not rigged to pass).
**Script:** `scripts/simulation/e5-sp-symmetry-gate.mjs` (fresh; the current engine is left unchanged).
**This file is frozen BEFORE execution.** The decision rule below is committed in advance.

## What the gate tests
Whether the distributed arm's selection advantage **survives** once the three asymmetries the audit
identified as favoring it are removed:
1. the distributed's **oracle net-value gate** (replaced by each arm's own noisy eligibility test);
2. the central's **pure-credit `w=0`** objective (replaced by a competent value-reader under *bounded*
   credit pressure `lambda`);
3. the **stipulated 1.30× delivery** superiority (removed — delivery held at parity `f=1.0`, so this is a
   **selection-only** test).

## Comparator (both arms symmetric except the coverage mechanism)
Truth from the current `buildWorld` (canonical faithful-split world params: N=5000, K=500, mean=0.27,
sd=1.0, projSpread=0.15, costHi=10, muF=-4, sigF=1.5, sigP=1.0, eta=0.1). Both arms share: candidate pool,
exact costs, budget (budgetFrac=1/3), truth `net[j]=S[j]-h*cost[j]`, delivery `f=1.0`, the same report-noise
model `report = v + Normal(0, tau)`, the same greedy budget rule, and eligibility by each arm's OWN estimate
(`hatNet>0`).

- **Distributed (endogenous coverage).** Each interested citizen reports independently w.p. `p` if `v>=0`,
  `p*(1-beta)` if `v<0` (adverse voice bias preserved). `hatS_D[j] = sum(reports)/p`;
  `hatNet_D[j] = hatS_D[j]-h*cost[j]`; score `hatNet_D/cost`; eligible iff `hatNet_D>0`.
- **Central (competent value-reader, even bandwidth, bounded credit).** Appraisal budget = the distributed
  arm's *expected* total number of reports in that world, spread **evenly** across projects (fixed
  bandwidth). Per project: sample `m_C` interested citizens with replacement, observe `v+Normal(0,tau)`;
  `hatS_C[j] = reach[j]*mean(observed)`; `hatNet_C[j]=hatS_C[j]-h*cost[j]`; eligible iff `hatNet_C>0`;
  score `score_C = (1-lambda)*z(hatNet_C/cost) + lambda*z(P/cost)` (`z` across the pool). Credit affects
  ranking, never eligibility (no knowingly-value-destroying villain).
- **Oracle.** full-information greedy on true `net/cost`, eligible iff `net>0`.

The **only** legitimate differences: distributed reports self-route toward projects people care about
(endogenous coverage); negative stakeholders participate less; central appraisal is spread evenly; central
ranking carries bounded credit pressure. Everything else is symmetric.

Delivered value scored on **true** `net`: `D,C,O = sum(net over each arm's funded set)`.
`Delta = (D-C)/O` per world; report per-world median and paired 95% bootstrap over worlds.

## Frozen parameters
N=5000, K=500, budgetFrac=1/3, **100 worlds, seedBase=20260710**. Sweep:
- `lambda ∈ {0, 0.1, 0.2, 0.3}` (0 = negative control; >0.3 excluded as strawman).
- `latentRho ∈ {0, 0.5, 1}` (report realized `corr(S,P)`).
- `h ∈ {1.5, 2.5, 4}`.
- **Baseline observation regime:** `p=.35, beta=.30, tau=.5`.
- **Adversarial observation regime:** `p=.15, beta=.60, tau=1.0`.

## PRE-REGISTERED decision rule (committed now)
**Primary domain (18 cells):** baseline regime, `lambda ∈ {.1,.2,.3}`, `latentRho ∈ {0,.5}`, all three `h`.

**GO** (the quantitative rebuild is worth it) iff ALL of:
1. at least **15 of 18** primary cells have mean `Delta > 0`;
2. pooled primary-domain **median `Delta >= 0.05`**;
3. the pooled primary-domain **95% bootstrap lower bound > 0**;
4. pooled **median `Delta >= 0`** under the adversarial observation regime (same lambda/rho/h domain).

**NO-GO** otherwise → drop the quantitative rebuild; publish the architecture/mechanism paper (path B),
with the simulation demoted to an illustrative conditional frontier.

**Negative-control guard:** if the `lambda=0` baseline cells have pooled median `Delta > 0.05`, do NOT
declare success — pause and hunt for a remaining hidden informational asymmetry, because with no credit
distortion the two arms should be close.
