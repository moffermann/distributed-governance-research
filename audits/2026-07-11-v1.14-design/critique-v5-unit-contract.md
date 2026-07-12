# Critique v5 — contract and engine unit consistency

## Verdict

**PARTIAL.** The v4 mean-versus-sum defect is cleared in the running implementation. `Splus`, `H`, `S`, `M_D`, and
`M_C` are all project-level interested-person means, and portfolio delivery sums the same `S` score in all three
arms (`scripts/simulation/e4-v5/engine.mjs:63-81,113-128`). The code implements `S=Splus-H` exactly, and its
interior-domain reporting process has the advertised conditional mean
`E[M_D|u]=Splus-(1-beta)H` (`scripts/simulation/e4-v5/engine.mjs:65-74`). The signal-recovery, common-selection, and
pathway controls run and pass.

The larger v4 blocker—an exhaustive, fail-closed, outcome-blind contract that is the only path to evidence—is **not
cleared**. The official evidence path silently replaces the contract's hashed `N=4000`, `K=200`, and
`n_worlds=1500` with unregistered `N=900`, `K=120`, `BASE_NW=600`, and `SWEEP_NW=300`, while labeling the output
`base+<contractHash>` (`scripts/simulation/e4-v5/contract.mjs:21-22,65-72,140-149`;
`scripts/simulation/e4-v5/evidence.mjs:10-12,57-67`). The validator does not detect unused parameters, accepts
configurations on which the printed DGP is undefined, and cannot enforce the stated unit scale
(`scripts/simulation/e4-v5/contract.mjs:17-59,115-130`). The engine also contains many unregistered numerical
literals despite its categorical contrary claim (`scripts/simulation/e4-v5/engine.mjs:1-6,9-45,157-168`).

| Audit question | Answer |
|---|---|
| Mean-scale DGP correct in code? | **Yes**, as a sum of selected project-mean scores, not population welfare; the exact-binomial claim is not implemented. |
| `S=Splus-H` implemented? | **Yes, exactly.** |
| MNAR realized behavior consistent with the printed mean? | **Yes for `0<p<=1`**, as conditional unbiasedness, not realized equality; **no at the accepted `p=0` endpoint**. |
| Every engine literal registered? | **No.** RNG, approximation, tolerance, bootstrap, and boundary literals remain in the engine. |
| Every registered item live? | **No.** `NUM.common_random` is unconsumed; positive magnitudes of `rho_P` cancel exactly after z-scoring. |
| Contract the only source of official evidence? | **No.** Evidence-critical overrides and sweep rules live outside the contract and outside its hash. |
| V4 blocker disposition | **PARTIAL.** Unit repair cleared; executable-contract/exhaustiveness blocker remains. |

## Commands run and exact relevant output

`npm run e4:controls` returned exit code 0:

```text
PASS  C1 signal recovery: M_C=M_D=S => D=C=O  — max|D-C|=0.00e+0, max|D-O|=0.00e+0
PASS  C1 estimand m == 0  — m=0.00e+0
PASS  C2 lambda=0 => credit P inert  — max|dC|=0.00e+0
PASS  C3 w=0 => planner position inert  — max|dC|=0.00e+0
PASS  C4 harm channel active (m falls as central sees harm)  — m(b_H_C=0)=0.4709 -> m(b_H_C=1)=0.1135

Baseline (defaults, SMALL world): m_hat=0.4540  CI=[0.4388, 0.4699]  pi_deg=0.000  kept=300/300

ALL CONTROLS PASSED
```

A focused fixed-`u` Monte Carlo used `K=2000`, `N=50`, `p=.25`, `beta=.4`, zero taste/report noise, and fixed reach.
It confirms the interior-domain conditional mean to simulation error:

```text
fixed u=2: mean realized M_D=2.0034, identity=2.0000, error=0.0034
fixed u=-2: mean realized M_D=-1.2049, identity=-1.2000, error=-0.0049
```

A same-seed liveness check at nonzero `lambda` exposes the credit-loading cancellation:

```text
rho_P 0.5 vs 2 at lambda=.4: D=0, C=0, O=0
rho_P 1 vs 5 at lambda=.4: D=0, C=0, O=0
```

Finally, direct contract validation and execution at edge configurations produced:

```text
ACCEPT {"p":0}
ACCEPT {"a_V":0,"b_V":0}
ACCEPT {"c_lo":0,"c_hi":0}
ACCEPT {"N":1.5,"K":2.5}
ACCEPT {"c_lo":5,"c_hi":1}
p=0 generated=18, finite M_D=18, unique M_D=0
p=0 estimand m_hat=-0.4274558944027196, kept=10/10
```

The last result is not an implementation of the displayed estimator at `p=0`; it is an accidental all-zero signal
created because the reporting branch is never entered, so the division by zero is never evaluated
(`scripts/simulation/e4-v5/engine.mjs:68-74`).

## What v5 genuinely fixes

### 1. One scale now flows through the comparison

For each interested person, the engine generates signed `u`; it accumulates positive parts and absolute negative
parts, then divides both by `n`. Thus `Splus` and `H` are means and `S=Splus-H` is exact
(`scripts/simulation/e4-v5/engine.mjs:63-73`). `M_D` uses the same `/n`; `M_C` is an affine combination of mean-scale
objects (`scripts/simulation/e4-v5/engine.mjs:69-78`). Each arm uses its own mean-scale signal for eligibility and
ranking, but every selected portfolio is evaluated using the common `S` (`scripts/simulation/e4-v5/engine.mjs:97-128`).
Consequently `(D-C)/O` is dimensionless and parity is zero (`scripts/simulation/e4-v5/engine.mjs:131-153`).

This remains a **project-score estimand**. A project reaching 10 people and one reaching 10,000 contribute equally
when their interested-person mean `S` is equal. That is dimensionally coherent and matches the design's explicit
mean-scale choice (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v5.md:11-17,45-55`), but it is not aggregate
beneficiary welfare. Any artifact that calls `D`, `C`, or `O` population value would overstate what the code computes.

### 2. The anti-value and MNAR algebra is correct on its proper domain

For `u>=0`, reporting occurs with probability `p` and the reported term is `(u+e)/p`; for `u<0`, the probability is
`p(1-beta)` with the same expansion weight (`scripts/simulation/e4-v5/engine.mjs:65-70`). Because the fresh report
noise draw is mean-zero and made only after an independent reporting draw, conditional expectation gives

```text
positive: p * u/p = u
negative: p(1-beta) * u/p = (1-beta)u
```

and averaging yields `Splus-(1-beta)H`. At `beta=0`, this is **conditional unbiasedness**, not realized equality,
unless `p=1` and `sigma_e=0`. The control uses exactly those stronger values and therefore makes no false finite-
sample claim (`scripts/simulation/e4-v5/controls.mjs:22-34`). The interior-`p`, interior-`beta` identity is nevertheless
not a committed regression test; the focused check above exists only as audit evidence.

## Ranked implementation issues

### 1. Blocking: the evidence artifact is not identified by the contract it prints

The contract registers and hashes `N=4000`, `K=200`, `NUM.n_worlds=1500`, bootstrap settings, classification settings,
and the declared bands (`scripts/simulation/e4-v5/contract.mjs:19-80,140-149`). The sole evidence script instead
hard-codes:

```text
WORLD = { N: 900, K: 120 }
SWEEP_NW = 300
BASE_NW = 600
ALPHA_FACTOR = { .5:.6, .8:1, .95:1.3 }
SIGN_KEYS = [w,b_H_C,beta,s_exp]
```

outside the contract (`scripts/simulation/e4-v5/evidence.mjs:10-16,37-39`). Yet `theta_id` is `base+contractHash()`
(`scripts/simulation/e4-v5/evidence.mjs:65-68`). Two runs with the same printed contract hash can therefore use
different official-evidence world sizes, sweep budgets, sign-key subsets, or coverage scaling. More basically, the
printed `base` theta ID is false: the run did not use the hashed base values of `N` and `K`.

**Minimum fix:** move the production world overrides, base/sweep/rival Monte Carlo budgets, sign-key list,
`ALPHA_FACTOR`, optimizer/grid rule, and seed derivations into the versioned contract; include them in the hash; emit
the hash of the **resolved configuration actually run**. Tests may use explicitly named test profiles, but an
evidence profile must not be an unregistered object spread.

### 2. Blocking: `validateConfig` accepts non-runnable or semantically invalid points

`validateConfig` checks only scalar numeric type and independent `dm` intervals (`scripts/simulation/e4-v5/contract.mjs:115-130`).
It does not enforce:

- `p>0`, although the model divides by `p`; `p=0` is accepted and silently becomes `M_D=0`, contradicting the printed
  conditional mean (`scripts/simulation/e4-v5/contract.mjs:40-42`; `scripts/simulation/e4-v5/engine.mjs:68-74`);
- strictly positive Beta shapes, although `a_V=b_V=0` and analogous reach shapes do not define Beta distributions
  (`scripts/simulation/e4-v5/contract.mjs:25-26,30-31`; `scripts/simulation/e4-v5/engine.mjs:27-39,55-60`);
- integer, finite `N` and `K`; fractional counts and even `Infinity` pass their declared domains
  (`scripts/simulation/e4-v5/contract.mjs:21-22,125-129`);
- `0<c_lo<=c_hi`; zero cost reaches divisions by `c`, while reversed named bounds are accepted
  (`scripts/simulation/e4-v5/contract.mjs:28-29`; `scripts/simulation/e4-v5/engine.mjs:58,102-108`);
- finiteness for any field whose upper domain is `Infinity`, or relational/domain-specific constraints.

The advertised “fail-closed” behavior therefore covers unknown/missing names, not whether the registered DGP is
defined. `p`'s `df` lower bound happens to protect the present sign sweep, but `validateConfig` validates `dm`, and
base/test callers can still execute the undefined endpoint.

**Minimum fix:** use an executable schema with finite/integer/refinement checks and cross-field invariants. Make
`p.dm` strictly positive (or specify and separately classify a no-report regime), require Beta shapes and costs
strictly positive, enforce ordered cost bounds, and reject non-finite values. Add committed boundary tests.

### 3. Material: registered liveness is not enforced, and `rho_P` magnitude is dead

All 30 `THETA` keys are syntactically referenced through `cfg`; there are no unregistered `cfg.*` reads. That is real
progress. But `validateConfig`'s “unused” check merely requires every key to be present—it has no consumption or
liveness mechanism (`scripts/simulation/e4-v5/contract.mjs:112-130`). Two concrete failures remain:

1. `P=rho_P*V`, followed by `z(P/c)`, makes every positive rescaling of `rho_P` cancel exactly. Thus the full positive
   magnitude range `[0.5,2]` in `R_alpha` is behaviorally identical; only zero/sign can matter
   (`scripts/simulation/e4-v5/contract.mjs:58`; `scripts/simulation/e4-v5/engine.mjs:80,107-109`). Control C2 varies
   `rho_P` only when `lambda=0`, so it cannot expose this deadness (`scripts/simulation/e4-v5/controls.mjs:37-44`).
2. `NUM.common_random` is registered and hashed but is never read anywhere in `e4-v5`. Common project realizations
   are hardwired by `runWorld`; changing the registry value cannot change behavior
   (`scripts/simulation/e4-v5/contract.mjs:65-72`; `scripts/simulation/e4-v5/engine.mjs:120-128`).

`AGGREGATION.alternatives=['harm_weighted']` is likewise hashed but has no implementation; only the primary mean is
real. It should be labeled non-executable metadata or removed until there is a separate estimand path
(`scripts/simulation/e4-v5/contract.mjs:61-62,142-143`).

**Minimum fix:** remove `rho_P` magnitude and define `P=V` if only direction is intended, or add non-scaling credit
noise/intercept so the loading is live before z-scoring. Remove `common_random` as a configurable value or implement
and test both settings. Add a parameter-liveness suite that perturbs every registered production parameter at an
active interior point and separately verifies inactivation boundaries.

### 4. Material: the engine violates its own no-unregistered-literal rule

The engine says every literal comes from the contract (`scripts/simulation/e4-v5/engine.mjs:1-6`). A complete scan
finds the following unregistered literal classes:

| Class | Unregistered engine literals / conventions | Lines |
|---|---|---|
| PRNG | `0x6D2B79F5`, shifts `15/7/14`, multiplier `61`, divisor `4294967296` | `engine.mjs:9-16` |
| floating guard / transforms | `1e-12`, Box-Muller `-2` and `2`, exponential guard | `engine.mjs:18-29` |
| Gamma sampler | `1/3`, `9`, `0.0331`, `0.5`, acceptance inequalities | `engine.mjs:27-39` |
| count sampler | normal-approximation formula, clamp/round and boundary rules `0/1` | `engine.mjs:40-45` |
| structural boundaries | sign cutoff `0`, correlation clamp, visibility clamp `[0,1]`, strict eligibility `>0` | `engine.mjs:53-78,98-105` |
| selection/estimation | population-SD divisor, zero fallback branches, median `0.5`, bootstrap seed salt `0x9e3779b9`, empirical-quantile indices | `engine.mjs:87-117,132-168` |

Some zeros, ones, and exact algebraic identities belong in a reviewed structural allowlist rather than as tunable
parameters. The random-generator constants, epsilon, count approximation, seed salt, and quantile convention are
genuine numerical-contract inputs because they can change results. None is in `NUM`.

**Minimum fix:** weaken the impossible blanket assertion to an enforceable rule, define a reviewed allowlist for
language/algebraic constants, and register/hash every result-governing numerical choice. A static test should fail on
an engine numeric literal not in the allowlist or a named contract reference.

### 5. Material: the code implements an approximate, not the specified, count DGP

The design says `n_j~Binomial(N,r_j)` (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v5.md:14-17`). The engine uses
`round(Nr + sqrt(Nr(1-r))Z)` clamped to `[0,N]` (`scripts/simulation/e4-v5/engine.mjs:40-45,59-61`). This is neither an
exact binomial sampler nor registered as an approximation. It changes the zero-reach/drop probability and finite-`n`
distribution, especially near boundaries and at the contract's small mathematical-domain values.

The design also promises “drop & log `n_j=0`,” while the engine only `continue`s; no count is returned or logged
(`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v5.md:14-17`; `scripts/simulation/e4-v5/engine.mjs:59-83`). If all
projects drop, `estimand` removes that world before computing `pi_deg`, so such a world is not counted as `O=0`
(`scripts/simulation/e4-v5/engine.mjs:120-151`). That is a contract/state mismatch, even if negligible at the current
unregistered evidence profile.

**Minimum fix:** implement an exact seeded binomial sampler or explicitly register, justify, hash, and validate the
approximation regime. Return drop counts. Count fully empty generated worlds in the degeneracy probability rather
than deleting them.

### 6. Moderate: unit consistency is conventional, not machine-checked

The registry entries contain `value`, `kind`, three intervals, and prose `note`, but no unit field
(`scripts/simulation/e4-v5/contract.mjs:17-59`). The arithmetic is coherent only under implicit typings: `q`, `u`,
`Splus`, `H`, `v_p`, `a`, `sigma*`, and `M*` share mean-value units; `b`, `w`, `b_H_C`, and `s(V)` are dimensionless;
`h` is mean-value per cost; and `c` is cost. In particular, describing `h` merely as a “physical” opportunity-cost
hurdle does not mechanically establish the units needed by `M-hc` (`scripts/simulation/e4-v5/contract.mjs:55-58`;
`scripts/simulation/e4-v5/engine.mjs:102-105`).

**Minimum fix:** add explicit unit/scale and role/dependency fields to `THETA`, validate dimensionless coefficients,
and generate a contract-to-equation crosswalk. Keep all reporting explicit that delivery is a sum of selected
project means.

## Controls: passed but incomplete

The existing controls establish exact recovery when `p=1`, `beta=0`, and both signal noises vanish; exact equality
of funded values under common signals; credit/projection inactivation; and a directional active-harm check
(`scripts/simulation/e4-v5/controls.mjs:22-63`). They do not test:

- the MNAR conditional mean and variance at interior `p` and `beta`;
- `beta=0` sign-invariant reporting at `p<1`;
- harm inactivation at `b_H_C=0`;
- `rho_P` liveness at `lambda>0`;
- every registered parameter's active and inactive behavior;
- exact-binomial moments, `n=0` accounting, empty/singleton eligibility, zero/ordered costs, or `p`'s lower boundary;
- that the resolved evidence profile and all numerical/sweep rules are included in the emitted hash.

Passing these controls is therefore necessary evidence that the core equations are wired correctly, but not proof
of an exhaustive contract.

## Shortest path to clear this blocker

1. Make one hashed **resolved evidence profile** contain the actual `N`, `K`, all Monte Carlo budgets/seeds, sweep
   keys, coverage rules, optimizer/grid rules, and classification inputs; remove in-script production overrides.
2. Tighten `validateConfig` to the DGP's real executable domain and relational constraints, including `p>0`, finite
   integer counts, positive Beta shapes/costs, and ordered cost bounds.
3. Repair or remove the behaviorally dead `rho_P` magnitude and unconsumed `common_random`; add a full liveness test.
4. Register result-governing numerical constants and approximation choices, with an explicit structural-literal
   allowlist; implement exact binomial sampling or preregister the approximation.
5. Commit the interior MNAR mean/variance test plus edge/drop/empty-state tests.

After those changes, this dimension can move from **PARTIAL** to **CLEARED**. As shipped, v5 is a real and largely
unit-consistent engine, but its official output still cannot honestly be described as generated solely by the
versioned contract whose hash it prints.
