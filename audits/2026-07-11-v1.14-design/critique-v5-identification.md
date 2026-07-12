# Dimension 2 — identification in practice

## Verdict

**PARTIAL.** V5 clears the old exact coefficient collapse and implements a generative model whose **default latent
design is strongly identified**. It does not clear the blocker at the contract or evidence level. The actual fourth
regressor is `s(V)H`, not raw `H`; the engine discards every latent regressor needed to fit the equation; admissible
contract endpoints make the design exactly singular or the harm coefficient weak; and no rank/recovery/weak-ID
fixture exists. More immediately, the advertised `D_F` and `R_alpha` extrema are not extrema: the
`corners+center` algorithm misses reproducible interior values in both the full box and the reported alpha=0.95
box. The released partial-ID interval is therefore an uncertified sample of the box, not a bound.

The implemented equation can be rewritten as

```text
M_C = a + (b-w) S+ + w v_p - b_H_C [s(V)H] + eta.
```

Conditional on fixed `s_exp`, observed `(M_C,S+,v_p,V,H)`, full column rank of
`(1,S+,v_p,s(V)H)`, and `E[eta|S+,v_p,V,H]=0`, OLS identifies
`(a,c,w,-b_H_C)` with `c=b-w`, and the invertible map `b=c+w` recovers all four requested parameters. V5 really
implements the project-varying `v_p` and gated harm term
(`scripts/simulation/e4-v5/engine.mjs:76-78`). That is a real repair. It is not a guarantee that holds over the
contract, and it is not an identification procedure shipped by this code.

## Commands run and focused results

All three official commands completed successfully:

```text
npm run e4:controls
  ALL CONTROLS PASSED
  baseline m_hat=0.4540; CI=[0.4388,0.4699]

npm run e4:test
  ALL TESTS PASSED
  strong-distributed=0.462; strong-central=-0.420; null=0.0002; boundary=0.417

npm run e4:evidence
  m_hat=0.457
  D_F=[-0.061,1.100]
  R_0.95=[0.145,0.747]
```

I then reconstructed the latent rows using the exact generator and PRNG sequence at the evidence scale
(`N=900`, `K=120`, 300 worlds, seed `20260711`) and inspected the design matrix. The coefficient vector below is
`(a,b-w,w,-b_H_C)`; its truth is `(0.2,0.4,0.5,-0.5)`.

```text
case                 n       sd(S+)  sd(v_p)  sd(s(V)H)  standardized kappa  OLS coefficients
base                 35,855  0.5905  0.7048   0.09561        2.514           0.1991,0.3960,0.5061,-0.4828
s_exp=10             35,855  0.5905  0.7048   0.01465        2.327           0.1997,0.3956,0.5061,-0.2920
gamma=0,sigma_v=0    35,855  0.5905  ~0       0.09561        singular        coefficients not separately identified
zeta=1,sigma_v=0     35,855  0.5905  0.9976   0.09561       28.03            0.2013,0.3972,0.5010,-0.4835
```

The base recovery is good and shows that project variation has fixed v4's algebraic defect. The `s_exp=10` row
also shows why a standardized condition number alone is inadequate: the gated-harm column loses 98% of its
variance relative to the base case, and the realized `b_H_C` estimate becomes poor even with 35,855 projects. At
`gamma=0,sigma_v=0`, `v_p=v_p0` is constant and collinear with the intercept, so only
`a+w*v_p0` and `b-w` are identified.

For the extrema check, I first recomputed all 16 `D_F` corners and then evaluated 256 deterministic Halton interior
points with the exact production sweep settings. None of those generic interior points escaped the corner range,
but targeted one-dimensional face searches did. At the reported upper corner
`(w=3,b_H_C=0,beta=0,s_exp=0.2)`:

```text
D_F face, beta=0.000: m=1.099976   # value reported as m_hi_DF
D_F face, beta=0.050: m=1.114183   # omitted interior point; +0.014207

R_0.95 face, w=1.12,b_H_C=0,s_exp=0.55:
beta=0.010: m=0.747119             # reported upper endpoint
beta=0.060: m=0.768975             # omitted interior point; +0.021855
```

A 21-point base-case beta line had 6 upward and 14 downward steps; a 21-point `s_exp` line had 17 upward and 3
downward steps. Thus coordinate monotonicity is false for the implemented finite-Monte-Carlo objective. The missed
values are not a hypothetical optimizer concern: they are produced by the same `estimand`, seed, `N`, `K`, and 300
worlds used by `evidence.mjs`.

## What is fixed from v4

1. **The exact fixed-`v_p` collapse is fixed at the default.** `v_pj` varies by category signal and idiosyncratic
   noise (`engine.mjs:76`), and the default latent matrix has full rank and a modest standardized condition number.
2. **The four-coefficient parameterization is algebraically recoverable.** The reconstructed default run recovers
   the known coefficients closely. The harm term is a separate regressor when `V` and `H` are observed
   (`engine.mjs:77-78`).
3. **The design document no longer claims target empirical identification without bridge data.** It correctly says
   the bridge needs three distinct measurements and, absent them, `(a,b,w)` remain transport-sensitivity inputs
   (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v5.md:96-99`).

These fixes justify **PARTIAL**, rather than not-cleared.

## Ranked issues and required fixes

### 1. Blocking — `corners+center` demonstrably does not bound the implemented objective

The code itself labels the procedure an approximation (`scripts/simulation/e4-v5/evidence.mjs:15`) and evaluates
only the corners plus one center (`evidence.mjs:18-30`). It nevertheless publishes those samples as
`m_lo_DF/m_hi_DF` and `m_Ralpha` bounds (`evidence.mjs:60-62`). The explicit face searches above exceed both the
published full-box and alpha=0.95 upper endpoints. Therefore the sign and magnitude envelopes are not valid
identified intervals.

This failure has two sources. Selection uses thresholds, ranking, greedy budget fill, and eligibility, so the
objective is discontinuous and no monotonicity theorem supports corner optimization. In addition, the purported
common seed is not common random numbers across `beta`: report noise is drawn only when a beta-dependent report is
accepted (`engine.mjs:68-69`). Changing `beta` therefore changes the number of PRNG calls and desynchronizes every
subsequent individual, project, and world. Monte-Carlo noise itself becomes a jagged function of the parameter.

**Fix:** split structural, participation-uniform, reporting-noise, central-noise, and bootstrap draws into stable
counter-based or independently seeded streams so worlds remain aligned across theta. Then either prove
coordinate monotonicity for each optimized direction or replace `corners+center` with a preregistered adaptive
global/face search that includes boundary optimization, convergence tolerances, repeated starts, and simultaneous
Monte-Carlo confidence bounds on extrema. Until certification succeeds, set numerical status to unresolved and do
not call the sampled endpoints bounds.

### 2. Blocking — the contract admits exact and weak identification failures without detecting them

Both `gamma=0` and `sigma_v=0` are inside `D_F` (`scripts/simulation/e4-v5/contract.mjs:46-47`), making `v_p`
constant when combined. Then `a`, `b`, and `w` are not separately identified. At the opposite edge,
`s_exp=10` is admitted (`contract.mjs:52`) and makes `s(V)H` so small on the low-visibility population that
`b_H_C` is weakly identified on its natural scale. Other admissible settings (`zeta` near 1 with little
`sigma_v`) can make projection variation largely redundant with support variation.

The evidence sweep does not notice this because it varies only `w,b_H_C,beta,s_exp`
(`evidence.mjs:16`) while fixing the rank-generating `gamma,sigma_v,zeta` at defaults. Controls C3 and C4 verify
pathway inactivation/direction, not parameter recovery, singularity, or precision
(`scripts/simulation/e4-v5/controls.mjs:46-58`).

**Fix:** register an identification diagnostic and frozen failure rule based on the effective, unstandardized
information matrix: sample rank, partial variance/partial R-squared for `v_p` after the other regressors, partial
variance of `s(V)H`, minimum eigenvalue, and parameter-scale standard errors. Run it at every theta used for
evidence. Mark singular regions unidentified and weak regions weakly identified; do not silently treat them as
ordinary transport points. Add deterministic recovery, constant-`v_p`, perfect-positive/negative-collinearity,
near-collinearity, and vanishing-gate fixtures.

### 3. Major — the implemented output cannot support the claimed regression or bridge

The generator computes `Splus`, `H`, `v_pj`, `V`, and `sV`, but returns only `{S,c,M_C,M_D,P}`
(`scripts/simulation/e4-v5/engine.mjs:76-81`). Observing `S=Splus-H` cannot recover the two components. `P` can
encode `V` only after assuming known, nonzero `rho_P`, and it still does not recover `H`. Thus no consumer of the
engine can form the actual design matrix, much less distinguish a prior `v_p` from final `M_C`. There is also no
estimator or bridge-data schema in `e4-v5`; the successful controls merely show that hand-set pathways affect the
simulation.

**Fix:** keep the evidence artifact closed, but add a separate internal diagnostics/bridge record containing
distinct pre-evidence `v_p`, final `M_C`, measured or latent-model `Splus/H`, `V`, inclusion status, and timing.
Implement recovery and rank checks against that record. For real bridge data, freeze the sampling,
measurement-error, and selection model; otherwise retain the current honest label that coefficients are
sensitivity inputs, not empirically identified target parameters.

### 4. Major — raw `H` variation does not by itself identify `b_H_C`

The prompt's three varying regressors shorthand is incomplete. The central coefficient multiplies `s(V)H`, not
`H` (`engine.mjs:77-78`). Variation in harm concentrated where `V` is near zero provides almost no information
about `b_H_C`; if `V` or `H` is unobserved, the coefficient is not identified from `(S,M_C,v_p)` alone. If
`s_exp` is also to be learned rather than fixed, `b_H_C` and the gate shape require joint nonlinear
identification over substantial visibility support.

**Fix:** state the exact rank condition using `G=s(V)H`, require separately observed `V` and `H`, and specify
whether `s_exp` is fixed sensitivity input or estimated. If estimated, add profile-likelihood or joint-set
diagnostics for `(b_H_C,s_exp)` rather than reporting a single coefficient-rank result.

## Disposition

**V4 blocker 2 remains PARTIAL.** The default DGP now has a valid, recoverable four-parameter latent regression,
so the old algebraic defect is cleared. Preregistration is still blocked by (i) an observed, reproducible failure
of the extrema algorithm, (ii) admissible singular/weak designs with no guard, and (iii) no executable bridge or
identification diagnostic. The shortest path is: stabilize common random numbers, replace sampled corners with
certified optimization plus Monte-Carlo endpoint uncertainty, and add latent-design recovery/rank fixtures with an
explicit unidentified/weak-ID state.

