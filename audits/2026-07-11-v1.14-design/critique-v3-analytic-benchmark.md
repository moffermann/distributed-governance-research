# Dimension 4 — analytic benchmark

## Verdict: PARTIAL — the false legacy claim is retired, but the replacement theorem is not yet preregistration-ready

V3 makes the right conceptual correction. The old `beta = 1-eta` result compares two differential harm weights: the old central signal attenuates negative valuations and the old distributed signal attenuates negative participation (`research/e4-analytical-backbone.md:41-60`; `scripts/simulation/e4-v4-symmetric-frontier.mjs:41-50`). The new central equation, `a+bS+w(v_p-Sbar)+eta`, has no corresponding central harm-weight parameter (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:51-57`). It does not nest the old model. Explicit retirement at `DESIGN_SKETCH_v3.md:83-84` therefore closes the false-generalization half of v2 blocker 4.

It does **not** yet close the blocker as a preregistered analytic result. Section 5 contains a result whose “derivation [is] to be written and checked,” calls the result a closed-form surface in `a`, and does not state the large-project/oracle-denominator conditions needed to connect a selected-value lemma to the frozen finite-world estimand (`DESIGN_SKETCH_v3.md:85-90`). Under the benchmark's own no-gate, fixed-share assumptions, `a` cannot appear. Under the actual MNAR report equation, the distributed signal is not exactly elliptical and `beta` is not an affine loading on `S`. The result is salvageable as a deliberately narrow limiting benchmark, not as currently written.

**Status of v2 blocker 4: CLEARED NARROWLY.** The false extension claim is retired. The promised replacement theorem still needs a complete statement, proof, and regression tests, so the analytic-benchmark dimension remains partial and creates a separate preregistration blocker.

## What can actually be derived

### Fixed-threshold normal lemma

Assume for the moment:

1. Projects are iid draws of `(S,X_C,X_D)` with finite second moments and nonzero signal variances.
2. Costs are equal, there is no eligibility gate or credit, and both arms fund the same fraction `q in (0,1)`.
3. Selection is by a population threshold producing share `q` (or, for an exact top-`qK` quota, take the `K -> infinity` limit).
4. Each `(S,X_k)` is jointly normal. For a non-normal extension, the full vector must come from one common elliptical family with a finite linear conditional mean and a common standardized signal marginal; merely saying that the “signals [are] elliptical” is not enough.

Let `z_q = Phi^{-1}(1-q)` and `t_k = E[X_k] + sd(X_k) z_q`. Joint normality gives

```text
E[S | X_k=x]
  = mu_S + Cov(S,X_k)/Var(X_k) * (x-mu_Xk).
```

Therefore expected delivered value **per candidate project** is

```text
V_k = E[S 1{X_k>t_k}]
    = q*mu_S + phi(z_q) * Cov(S,X_k)/sd(X_k).             (1)
```

The common `q*mu_S` term cancels, as does the positive common tail factor `phi(z_q)`. Thus

```text
V_D = V_C
  iff Cov(S,X_D)/sd(X_D) = Cov(S,X_C)/sd(X_C).            (2)
```

For a common multivariate elliptical family, replace `phi(z_q)` with the common positive standardized-tail moment
`kappa_q = E[T 1{T>t_q}]`. If the two arms are only separately assigned different elliptical families, the correct condition is `kappa_qD Q_D = kappa_qC Q_C`, not `Q_D=Q_C`. The exact normal result in (1) is the cleanest preregisterable theorem.

The wording “arm selection value proportional to `Cov/sd`” at `DESIGN_SKETCH_v3.md:85-87` is slightly false unless `mu_S=0`: it is the **increment over random fixed-share selection**, or the difference between arms, that is proportional to this quantity.

### Connection to the frozen ratio estimand is only limiting

Equation (2) locates parity of expected selected sums, not automatically parity of

```text
m_K = E[(D_K-C_K)/O_K].
```

For the link claimed in v3, one additionally needs an oracle law of large numbers such as

```text
O_K/K -> V_O > 0,
```

and uniform integrability of `(D_K-C_K)/O_K` (or a stronger denominator bounded-away-from-zero condition), with `P(O_K <= o_min) -> 0`. Then

```text
m_K -> (V_D-V_C)/V_O,
```

so (2) is the parity boundary **in the large-project limit**. Positivity “in expectation” is not enough. Without concentration, denominator weighting can flip the result: with equally likely worlds `(D-C,O)=(1,1)` and `(-1,100)`, `E[D-C]=0` but `E[(D-C)/O]=0.495>0`. The v3 exclusion rule (`DESIGN_SKETCH_v3.md:24-30`) makes the required conditioning/concentration statement more, not less, important.

For finite `K`, selecting the exact top `qK` projects uses a random order-statistic threshold. Formula (1) is then an asymptotic approximation, not an exact finite-portfolio identity. V3 should call the benchmark a fixed-threshold population theorem and the engine check its finite-`K` convergence.

## What the central equation implies in the benchmark

The intercept is rank-invariant when there is no eligibility gate and the funded share is fixed. Hence `a` cannot occur in the benchmark frontier. It returns in the full model through own-estimate eligibility and, with heterogeneous costs, through `(a+...)/c_j`; those are precisely among the features v3 excludes from the analytic case (`DESIGN_SKETCH_v3.md:58-62,85-90`). The phrase “surface in `(a,b,w,beta,sigma,...)`” at `DESIGN_SKETCH_v3.md:87` is therefore wrong about `a`.

There is a sharper collapse in the equations as written. V3 defines `S_j` as the project-population mean and then describes `Sbar_j` as the project-population mean (`DESIGN_SKETCH_v3.md:38-41,47-48,53-56`). If these are the same object and `v_p` is fixed, then

```text
X_C = (a+w*v_p) + (b-w)S + eta,

Q_C = (b-w) Var(S)
      / sqrt((b-w)^2 Var(S) + Var(eta)).                  (3)
```

Thus `a+w*v_p` disappears and the benchmark identifies only the composite slope `b-w`; project-indexing separates `w` from the intercept but not from `b`. If `Sbar_j` is intended to be a distinct project variable, define `Z_j=v_p-Sbar_j` and its joint law with `S`. Then

```text
Q_C = [b Var(S) + w Cov(S,Z)]
      / sqrt[b^2 Var(S) + w^2 Var(Z)
             + 2bw Cov(S,Z) + Var(eta)].                 (4)
```

Again, `a` is absent. The benchmark must choose between (3) and (4); it cannot leave `Sbar_j` semantically duplicated and still claim a checked implicit surface.

## `beta` is not a slope coefficient in the executable report mechanism

Let `U` be the sum of positive individual valuations, `V` the absolute sum of negative valuations, and `r=1-beta`. Under v3's report rule and division by the baseline `p` (`DESIGN_SKETCH_v3.md:49-50`),

```text
E[X_D | {u_i}] = U-rV.                                    (5)
```

This is not a scalar attenuation of truth. In a **scale-matched total-value benchmark** with `T=U-V`, writing `A=Var(U)`, `B=Var(V)`, and `C=Cov(U,V)` gives

```text
Cov(T,X_D) = A-C+r(B-C).                                  (6)
```

With a stylized independent additive noise of constant variance `tau_D^2`, the denominator would be

```text
sd(X_D)^2 = A+r^2 B-2rC+tau_D^2.                          (7)
```

But the executable Bernoulli-report design has beta-dependent, value-dependent sampling variance. If report noise has variance `sigma_e^2`, its conditional contribution is

```text
sum_{u_i>=0} [(1/p-1)u_i^2 + sigma_e^2/p]
+ sum_{u_i<0} [(r/p-r^2)u_i^2 + r*sigma_e^2/p].           (8)
```

That term must be averaged into `Var(X_D)`. Moreover, v3 defines target `S_j` as a **mean** but `M^D_j` as an unnormalized expanded **sum** (`DESIGN_SKETCH_v3.md:47-50`). Equation (6) therefore applies directly only after a scale choice: for fixed reach one can divide both `U,V` by reach without changing ranks; with project-varying reach, the required covariance also depends on the joint law of reach and valuations. Thresholded nonresponse plus Bernoulli thinning does not yield an exactly elliptical `(S,X_D)` pair at finite reach. V3 therefore has two honest options: (i) define the analytic benchmark as a separate reduced-form normal signal model whose moments use the scale-matched versions of (6)-(8), or (ii) state and justify a large-reach CLT approximation. It cannot simply put `beta` in the parenthesized “closed-form surface” and regard the derivation as complete.

The shipped engines do not fill this gap. The old E4 engine implements the retired two-harm-weight model and still prints the legacy exact-law sentence (`scripts/simulation/e4-v4-symmetric-frontier.mjs:36-50,82-85`). Its stochastic output has `D/C=0.89`, not parity, at `(gamma,beta)=(1,0)`, demonstrating that the clean law is already only a benchmark once sampling/noise are restored (`research/e4-v4-symmetric-frontier-results.txt:8-17`). The E5 gate implements MNAR reports but its central arm is an unbiased reach-times-sample-mean estimator plus credit, with no `a`, `b`, or `w` (`scripts/simulation/e5-sp-symmetry-gate.mjs:68-90`). Neither engine verifies (2)-(8) for v3.

## Ranked remaining issues and exact fixes

1. **BLOCKER — the theorem does not yet target the frozen estimand.** Add `K -> infinity`, `O_K/K -> V_O>0`, the exclusion-probability condition, and uniform integrability to the proposition. State explicitly that finite-world `m` is numerical. Add a counterexample test in which expected differences tie but oracle-normalized mean differences do not.

2. **BLOCKER — “elliptical signals” is underspecified and is not generated exactly by the MNAR DGP.** Prefer a joint-normal benchmark. If retaining “elliptical,” require one common multivariate elliptical family and use its common tail factor. Label the person-report mapping as a reduced-form moment/CLT approximation, not an identity.

3. **MAJOR — the advertised parameter surface contains a parameter that mathematically cancels.** Remove `a` from the analytic surface, and state that it operates only in the numerical full model. Decide whether `Sbar_j=S_j`; if yes, publish (3) and admit that only `b-w` matters in the benchmark. If no, type `Z_j` and publish (4) with its full joint law.

4. **MAJOR — the `beta` mapping is missing.** Include (5)-(8), with the exact scale convention (mean versus total) and noise-variance notation. Do not substitute `kappa_D=1-beta`; adverse nonresponse to negative individual values is not a scalar attenuation of aggregate `S`.

5. **MAJOR — the retired statement survives in an active foundation document.** `research/e4-value-estimation-foundation.md:58-63` still says the new surface “extends” `beta=1-eta`, while v3 says it is retired. Amend that note to point to the separate legacy nested-harm theorem. Keeping both claims invites conceptual relapse even if the v3 engine is isolated.

6. **REQUIRED VALIDATION — no analytic regression exists.** Before preregistration, test: intercept invariance in the benchmark; equation (3) or (4) against Monte Carlo; normal fixed-threshold equation (1); finite-`K` convergence; denominator-weighting divergence; `beta=0` parity against equally noisy identical signals; and the separate legacy nested-harm result only inside its legacy test.

## Bottom line

Retiring `beta=1-eta` is unambiguously correct, and v3 is also correct that eligibility, heterogeneous costs, greedy residual fill, MNAR reports, z-scoring, and credit require a numerical full frontier (`DESIGN_SKETCH_v3.md:88-90`; the corresponding discontinuities are visible in `scripts/simulation/e5-sp-symmetry-gate.mjs:52-57,68-98`). The sharp replacement is a **joint-normal fixed-threshold selection theorem plus a large-`K`, positive-oracle limiting corollary**. Until v3 states that theorem, removes `a` from it, and derives or approximates the actual `beta` moments, “theorem-backed benchmark” is a plan rather than a completed contribution.
