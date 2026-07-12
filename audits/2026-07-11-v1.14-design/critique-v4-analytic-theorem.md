# Dimension 4 — analytic theorem

## Verdict: PARTIAL

V4 states the correct fixed-population-threshold normal lemma, correctly removes `a`, and correctly keeps the
retired `beta = 1-eta` law out of the new model. That clears the central algebraic error in v3. It does **not** yet
clear the analytic blocker for preregistration: the displayed `Q_C` changes the model's variable, silently assumes
orthogonal central noise, the large-`K` corollary omits numerator convergence, and the person-level MNAR rule does
not become a jointly normal project-level signal merely by a within-project CLT. No proof or regression test has
shipped. The document itself therefore remains accurate in calling this a **proposed** theorem
(`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v4.md:133-151,184-188`).

Relative to the v3 analytic blocker, the status is **PARTIAL**: theorem statement and intercept invariance are
cleared; the mapping from the runnable model to that theorem and the claimed limiting link are not.

## What is correct

Let `t_k = E[X_k] + sd(X_k) z_q`, where `z_q = Phi^{-1}(1-q)`. For nondegenerate jointly normal `(S,X_k)`,

```text
E[S | X_k=x] = mu_S + Cov(S,X_k)/Var(X_k) * (x-E[X_k]).
```

Multiplying by `1{X_k>t_k}` and integrating gives

```text
E[S 1{X_k>t_k}]
  = q mu_S + Cov(S,X_k)/sd(X_k) * phi(z_q).
```

Thus the formula for expected delivered value **per candidate** and the parity equivalence are exact for a
population threshold with common `q in (0,1)`
(`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v4.md:133-139`). This is a selected-value identity,
not an exact finite-`K` top-quota identity.

Removing `a` is also exactly right. With no gate, equal costs, and a fixed share, adding a constant changes neither
ranks nor the standardized threshold; `a` returns only when eligibility or heterogeneous `a/c_j` can change
selection (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v4.md:79-89,140-145`).

## Remaining issues and exact fixes

### 1. Blocking — `Q_C` is not yet the `Q_C` of the model contract

The runnable contract defines

```text
X_C = a + bS + w(v_p-S) + eta
    = a + (b-w)S + w v_p + eta.
```

(`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v4.md:61-74`). The theorem instead introduces `Z=v_p-Sbar` as a
“distinct” variable, although `Sbar` is nowhere defined in v4, and then uses `X_C=a+bS+wZ+eta`
(`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v4.md:140-143`). There are only
two coherent readings:

1. If `Sbar=S`, define `Z:=v_p-S`. The displayed formula is algebraically correct, but `Z` is a derived variable,
   not a separately free primitive; its moments are constrained by the declared joint law of `(S,v_p)`.
2. If `Sbar` is genuinely distinct from `S`, the theorem analyzes a different central signal from §B.4.

The formula also drops `Cov(S,eta)`, `Cov(Z,eta)`, and their variance cross-terms. A marginal declaration
`eta~Normal(0,sigma_C^2)` does not imply those covariances are zero
(`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v4.md:66-74`). Under the actual
contract and independent `eta`, the unambiguous version is

```text
Q_C = ((b-w)Var(S) + w Cov(S,v_p)) /
      sqrt((b-w)^2 Var(S) + w^2 Var(v_p)
           + 2w(b-w)Cov(S,v_p) + Var(eta)).
```

This is equivalent to v4's expression only when `Z:=v_p-S` and `eta` is independent of `(S,v_p)`. **Fix:** delete
the undefined `Sbar`, make that definition and independence explicit, specify the joint-normal law that supplies
the moments, and require `Var(X_C)>0`. If a distinct `Sbar` is intended, change §B.4 and the full model contract too.

### 2. Blocking — the MNAR “CLT” does not generate the theorem's joint normality

V4 is right that `beta` is not a slope and right to call the normal representation an approximation
(`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v4.md:148-151`). But the stated conditional moment is not mean-scale
as printed. If `U` is the
sum of nonnegative values and `V` the absolute sum of negative values, the exact moment is

```text
E[X_D | u] = (U-(1-beta)V)/n,
```

not `U-(1-beta)V`. The missing `1/n` conflicts with the mean-scale estimator in §B.3
(`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v4.md:48-59,148-150`). With `r=1-beta`, independent reports, and
report-noise variance
`sigma_e^2`, the exact conditional variance is

```text
Var(X_D | u) = n^-2 * {
  sum_{u_i>=0} [(1/p-1)u_i^2 + sigma_e^2/p]
  + sum_{u_i<0} [(r/p-r^2)u_i^2 + r sigma_e^2/p]
}.
```

More importantly, a within-project CLT normalizes fluctuations **around a nonlinear conditional mean**. Under
the contract's `u=q+epsilon`, with `epsilon~Normal(0,sigma^2)` and large reach,

```text
E[X_D | q] -> g_beta(q)
  = q - beta * [q Phi(-q/sigma) - sigma phi(q/sigma)].
```

For `beta!=0`, `g_beta(q)` is nonlinear. Hence even as `n` grows, `(S,X_D)` converges toward `(q,g_beta(q))`, not
a nondegenerate jointly normal pair. “CLT” alone cannot justify the theorem's normal signal. **Fix:** define a
separate moment-matched bivariate-normal reduced-form benchmark, compute `Q_D` from the exact law-of-total-
covariance/variance moments above (analytically or by preregistered quadrature), and label the replacement of the
nonlinear pair by a Gaussian pair as the approximation. Alternatively, state a local-linear/small-`beta` regime
and bound its error. Do not present joint normality as a consequence of report-level CLT.

### 3. Major — the large-`K` corollary is missing its numerator laws

The conditions printed in v4 are `O_K/K -> V_O>0`, vanishing degeneracy probability, and uniform integrability of
the ratio (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v4.md:145-147`). Those conditions alone do not imply the
claimed limit: one also needs

```text
D_K/K -> V_D,    C_K/K -> V_C
```

jointly with the oracle convergence. Under the theorem's iid **fixed population thresholds**, these numerator
laws follow from the LLN for `S_j 1{X^k_j>t_k}`. They do not follow merely from the three conditions displayed in
the corollary. An exact top-`qK` quota instead needs a trimmed-sum/order-statistic LLN and is not the finite-sample
selection rule proved above.

Once all three normalized sums converge, the ratio converges in probability to `(V_D-V_C)/V_O`; because
`Pr(O_K>o_min)->1`, uniform integrability of the retained ratio then upgrades this to convergence of the
**conditional** expectation defining `m_K` (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v4.md:92-100`). **Fix:**
state the two numerator
convergences, define uniform integrability for the ratio on the retained event (or define an extension off it), and
say whether the theorem uses a population threshold or an exact quota. Add the trimmed-sum condition if both are
claimed.

### 4. Required validation — the theorem is still a specification, not a checked artifact

V4 says the result remains “to state + prove + regression-test,” and the positioning properly denies
theorem-backed status until those artifacts ship
(`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v4.md:133-151,184-188`). The two named engines do
not provide that validation. The E5 engine implements a total-scale MNAR estimate and a different central
reach-times-sample-mean signal, with no `(a,b,w,v_p)` theorem model
(`scripts/simulation/e5-sp-symmetry-gate.mjs:68-90`). The E4 engine implements the retired harm-attenuation model
and still prints the old exact `beta=1-gamma` claim (`scripts/simulation/e4-v4-symmetric-frontier.mjs:36-50,82-85`).

**Fix:** before preregistration, add regression tests for: equation (1) under direct joint-normal draws; equivalent
`Q_C` parameterizations; intercept invariance; finite-`K` convergence for population-threshold and exact-quota
selection separately; the conditional oracle-ratio limit; exact MNAR conditional mean/variance; and a fixture
showing that the MNAR DGP is nonlinear/non-normal even though its within-project sampling error approaches normal.

## Bottom line

The core normal selected-value theorem and the removal of `a` are correct. The sharpest remaining repair is to
make the analytic benchmark a **separate, explicitly moment-matched Gaussian reduced form** of the mean-scale MNAR
DGP, rather than suggesting that report-level CLT supplies joint normality. Together with an unambiguous
`Z:=v_p-S`, independent `eta`, numerator LLNs, a proof, and regression tests, that would clear this blocker.
