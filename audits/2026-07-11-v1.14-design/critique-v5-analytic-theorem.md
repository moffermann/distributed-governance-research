# Dimension 4 — analytic theorem

## Verdict: PARTIAL

The fixed-population-threshold identity is correct, and v5 repairs the statement-level defects flagged in v4:
it defines `Z:=v_p-S`, declares orthogonal central noise and nondegenerate signals, calls the signed-MNAR Gaussian
bridge a moment-matched approximation, and acknowledges both numerator LLNs and the threshold/quota distinction
(`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v5.md:75-80`). An independent experiment using the shipped RNG and
an engine-reachable exact-normal special case agrees with the identity.

The v4 blocker is **not cleared**, however. The same paragraph says that a proof and regression tests ship with the
engine, but neither exists. The controls test signal recovery, two inactivation paths, and one harm direction
(`scripts/simulation/e4-v5/controls.mjs:22-63`); the acceptance suite tests outcome fixtures and the embargo
(`scripts/simulation/e4-v5/test.mjs:16-55`). Neither suite mentions or evaluates a normal threshold, covariance,
analytic value, intercept invariance, exact quota, trimmed-sum convergence, or denominator-ratio limit. A repository
search finds the theorem only in the design sketch. Thus v5 improves the proposed statement but still has no
theorem artifact or regression protection.

Relative to v4: **PARTIAL remains PARTIAL**. The ambiguous `Sbar`, omitted normalization, and unqualified CLT story
are repaired in prose, and the lemma is numerically corroborated; the proof-to-code and theorem-to-production-model
links remain absent.

## What the numerical check establishes

I first ran the shipped suites:

```text
> npm run e4:controls
PASS  C1 signal recovery: M_C=M_D=S => D=C=O
PASS  C1 estimand m == 0
PASS  C2 lambda=0 => credit P inert
PASS  C3 w=0 => planner position inert
PASS  C4 harm channel active (m falls as central sees harm)
ALL CONTROLS PASSED

> npm run e4:test
PASS  FIX strong-distributed => m materially > 0  — m=0.462
PASS  FIX strong-central => m < 0 (central wins)  — m=-0.420
PASS  FIX null => |m| negligible  — m=0.0002
PASS  FIX boundary => finite & modest  — m=0.417
...
ALL TESTS PASSED
```

Those are useful controls, but none tests the theorem. I therefore ran two independent inline Node experiments.

### Engine-reachable exact-normal limit

The engine can be made exactly Gaussian at project level by setting `sigma=0`, `pi_opp=0`, `w=0`, `s_exp=0`, and
`b_H_C=b`. Then `S=q` and `M_C=a+bS+eta`, using the actual decomposition and central equation at
`scripts/simulation/e4-v5/engine.mjs:63-78`. With `m_q=0.4`, `s_q=1.2`, `a=0.3`, `b=b_H_C=0.8`,
`sigma_C=0.9`, and selection share `q=0.2`, I applied the *population threshold externally* to the projects emitted
by `generateWorld`:

```text
engine normal-limit fixture: generated=791584/1000000
analytic=0.32509116 fixed=0.32625885 SE=0.00086557 diff=0.00116769 z=1.35 selected=0.200502
```

This agrees within Monte Carlo error. Dropping `n=0` projects does not bias this special case because the drop rule
at `scripts/simulation/e4-v5/engine.mjs:59-61` is independent of `q`, `S`, and `M_C` under the fixture.

### Fixed population threshold is not an exact finite quota

For direct jointly normal draws with `mu_S=0.7`, `sd(S)=1.3`, `mu_X=-0.4`, `sd(X)=1.8`, `rho=0.55`, and `q=0.2`,
the identity gives `V=0.34017277` per candidate. The fixed-threshold Monte Carlo agrees for every tested `K`; the
top-`qK` exact quota has a visible finite-`K` bias that shrinks with `K`:

```text
analytic fixed-threshold V=0.34017277, threshold=1.11491822
K=10  R=200000 fixed=0.34020025 SE=0.00060155 diff= 0.00002747 selected=0.199684
K=10  R=200000 quota=0.32141577 SE=0.00037517 diff=-0.01875700 exact_share=0.200000
K=50  R=60000  fixed=0.33982212 SE=0.00049080 diff=-0.00035066 selected=0.200012
K=50  R=60000  quota=0.33567198 SE=0.00030636 diff=-0.00450079 exact_share=0.200000
K=250 R=12000  fixed=0.34016775 SE=0.00049398 diff=-0.00000502 selected=0.200128
K=250 R=12000  quota=0.33911289 SE=0.00030876 diff=-0.00105989 exact_share=0.200000
```

This is exactly the distinction v5 now names, but does not test. It also shows why a regression test must not assert
the population-threshold formula as an exact finite-quota identity.

## Remaining issues and required fixes

### 1. Blocking — the asserted proof and regression tests do not ship

`DESIGN_SKETCH_v5.md:80` makes a factual build claim: “Proof + regression tests ship with the engine.” There is no
proof file, theorem helper, benchmark mode, or test invocation implementing that claim. `package.json:9-11` exposes
only evidence, controls, and the acceptance suite, and the latter two contain no analytic assertion.

**Fix:** add a proof artifact referenced by the design and a deterministic analytic test module invoked by
`npm run e4:test` (or a dedicated command also called from it). Treat failure as release-blocking. Do not call the
benchmark “shipped” until both are in the repository.

### 2. Blocking — the displayed `Q_C` is a separate reduced form, not the production central signal

The design's expression with `Z:=v_p-S`,

```text
X_C^G = a + bS + w(v_p-S) + eta,
```

has the stated numerator `b Var(S)+w Cov(S,Z)` under `eta` orthogonality. The production engine instead computes

```text
M_C = a + (b-w)Splus + w v_p - b_H_C s(V)H + eta
```

(`scripts/simulation/e4-v5/engine.mjs:71-78`). Its covariance with truth is generally

```text
Cov(S,M_C)
 = (b-w)Cov(S,Splus) + w Cov(S,v_p) - b_H_C Cov(S,s(V)H),
```

with a correspondingly full variance including all cross-covariances. It reduces to the displayed Gaussian form
only under additional restrictions such as `H=0`, or in a deliberately separate moment-matched construction. The
code contains no construction that calculates the full-DGP moments, creates the matched Gaussian pair, or measures
approximation error. The independent exact-normal fixture above works precisely because it imposes the special
restrictions `w=0`, `s(V)=1`, and `b_H_C=b`.

**Fix:** define a named `GaussianBenchmark` object with `(mu_S, mu_Xk, var_S, var_Xk, cov_SXk, q)` derived from either
preregistered analytic/quadrature moments or a frozen pilot, and state that it is not the full DGP. For the central
arm, compute moments from the actual `Splus`, `H`, `s(V)`, and `v_p` terms rather than silently substituting `S`.
For the distributed arm, use law-of-total covariance/variance for the MNAR estimator. Report the approximation
error separately; the identity itself cannot certify that the replacement is close.

### 3. Major — the production selector is outside the theorem

The theorem selects `X_k>t_k` at a common population share. The engine first applies an arm-specific eligibility
gate, ranks standardized benefit/cost, optionally adds credit tilt, and greedily spends a cost budget
(`scripts/simulation/e4-v5/engine.mjs:97-117`). The oracle, central, and distributed arms then use that selector
(`scripts/simulation/e4-v5/engine.mjs:120-128`). Variable costs, eligibility, endogenous realized shares, salience
tilt, and exact residual budget fill all lie outside the lemma. In particular, adding `a` can change eligibility at
`engine.mjs:101-103`, so the theorem's intercept invariance does **not** apply to the production central arm.

**Fix:** implement a separate benchmark selector with no eligibility gate, equal costs, no credit tilt, and either
(a) the fixed population threshold or (b) an explicitly named exact quota. Never use the theorem as validation of
the main engine's budget selector. Validation of the main selector needs independent invariance and oracle-recovery
tests, not the normal lemma.

### 4. Major — the large-`K` and conditional-ratio corollaries remain only labels

The code computes finite worlds and then conditions on a simulation-calibrated `o_min`
(`scripts/simulation/e4-v5/engine.mjs:131-170`). Nothing proves or tests the asserted numerator LLNs, the oracle LLN,
the vanishing exclusion probability, uniform integrability of the retained ratio, or convergence under an exact
quota. Passing finite synthetic fixtures is not evidence for those limits.

**Fix:** state the fixed-threshold LLNs and the exact-quota trimmed-sum theorem separately, then add convergence
tests across increasing `K`. If the conditional expectation limit is retained, test all three normalized sums
jointly and test the retained ratio only after specifying a uniformly integrable envelope or a bounded-support
benchmark.

## Missing proof: assumptions and steps

A sufficient narrow theorem is:

1. For each arm `k`, `(S,X_k)` is jointly normal with finite means, `0<Var(X_k)<infinity`, and `E|S|<infinity`;
   candidates are iid across `j`. Cross-arm joint normality is unnecessary for the marginal identity.
2. Fix a common `q in (0,1)`, let `z_q=Phi^{-1}(1-q)`, and set the *population* threshold
   `t_k=mu_Xk+sd(X_k)z_q`.
3. Joint normality gives
   `E[S|X_k]=mu_S+Cov(S,X_k)(X_k-mu_Xk)/Var(X_k)`.
4. With `Z=(X_k-mu_Xk)/sd(X_k)`, integrate the upper normal tail:
   `P(Z>z_q)=q` and `E[Z 1{Z>z_q}]=phi(z_q)`.
5. Therefore
   `E[S 1{X_k>t_k}]=q mu_S+phi(z_q)Cov(S,X_k)/sd(X_k)`.
   With the same `q`, parity follows by cancellation of `q mu_S`. A constant intercept shifts both `X_k` and
   `t_k` and leaves this event unchanged; that claim requires the no-gate benchmark.
6. For fixed thresholds, apply the LLN to `S_j 1{X_kj>t_k}` and to the selection indicator. For an exact quota
   `n_K/K -> q`, separately invoke empirical-quantile consistency plus a trimmed-sum/order-statistic LLN under a
   continuous `X_k` distribution. Do not claim finite-`K` equality.
7. For a normalized oracle ratio, establish joint convergence of `D_K/K`, `C_K/K`, and `O_K/K -> V_O>0`, then use
   continuous mapping. Upgrading convergence in probability to the conditional expectation defining `m_K`
   requires uniform integrability on the retained event and vanishing exclusion probability.

The proof must then explicitly say that the signed-MNAR/full-harm DGP is not jointly normal and that moment matching
is an approximation external to this theorem.

## Concrete regression suite required for clearance

1. **Direct identity grid:** deterministic bivariate-normal draws over several `q`, nonzero `mu_S`, positive and
   negative correlations, and unequal scales. Require the analytic value to lie within a prespecified multiple of
   the Monte Carlo standard error; separately test `sd(X)=0` rejection.
2. **Engine normal-limit fixture:** use the exact configuration reported above, apply an exported fixed-threshold
   benchmark selector, and compare to the closed-form value. This guards the `Splus-H` implementation as well as
   the formula.
3. **Equivalent parameterizations:** verify numerically that `a+bS+wZ+eta` with `Z=v_p-S` equals
   `a+(b-w)S+w v_p+eta` draw-by-draw, and that the two covariance/variance formulas agree.
4. **Intercept invariance:** under the no-gate fixed-threshold benchmark, change `a` with common random numbers and
   require identical selections and value. Add a separate test documenting that production eligibility can break
   this invariance.
5. **Threshold versus quota:** assert the fixed-threshold identity at finite `K`; assert only convergence, not exact
   equality, for top-`qK` quotas. The finite-`K` experiment above is a suitable negative-control fixture.
6. **Moment-matched bridge:** compute full-DGP moments including `Splus`, gated `H`, `v_p`, and MNAR sampling;
   reproduce those moments in the Gaussian benchmark and report, rather than assume away, selection-value error.
7. **Large-`K` ratio:** over increasing `K`, separately check normalized `D`, `C`, and `O`, exclusion probability,
   and the retained ratio under conditions strong enough for uniform integrability.

## Disposition

The analytic benchmark is mathematically viable and the shipped generator can reproduce its normal special case.
That is meaningful progress, but it does not make the blocker cleared. The shortest repair is to ship the narrow
proof plus a dedicated fixed-threshold benchmark/test module, and to place a hard boundary around it: it validates
the Gaussian reduced form only, not the production eligibility/cost/budget engine. Until then, the correct status is
**PARTIAL**.
