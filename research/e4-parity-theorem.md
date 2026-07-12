# E4 analytic benchmark — the joint-normal fixed-threshold parity theorem

> A **stylized no-myopia Gaussian benchmark**, not a reduction of the full engine. The production engine adds
> eligibility gates, heterogeneous costs, greedy residual fill, MNAR reports, z-scoring, credit, AND a salience-gated
> harm term; this theorem nests it ONLY under the extra restrictions in **Honest scope** below (no harm gate, net
> `S`). It is a sanity-check limit, not a proof about the production engine. Regression:
> `scripts/simulation/e4-v5/theorem-check.mjs` (matches within ~0.2 Monte-Carlo SE). Replaces the retired `β = 1−η`
> harm-weight law (which does not nest the v1.14 model).

## Setup
Candidate projects are i.i.d. draws of `(S, X)`, where `S` is true (mean-scale) value and `X` is a selector's
signal (the central estimate `X_C = M^C`, or the distributed estimate `X_D = M^D`). Assume:
1. `(S, X)` is **jointly normal**, `Var(X) > 0`.
2. Equal costs, no eligibility gate, no credit; each selector funds the top fraction `q ∈ (0,1)` by its own `X`.
3. Selection is at the **population threshold** `t = μ_X + σ_X · z_q`, `z_q = Φ⁻¹(1−q)` (equivalently, the exact
   top-`qK` quota in the `K → ∞` limit).

## Lemma (expected selected value per candidate)
```
V := E[S · 1{X > t}] = q·μ_S + φ(z_q) · Cov(S,X)/σ_X ,
```
where `φ` is the standard normal pdf.

**Proof.** Joint normality gives the linear conditional mean `E[S | X = x] = μ_S + (Cov(S,X)/σ_X²)(x − μ_X)`. Then
```
E[S·1{X>t}] = ∫_t^∞ E[S|X=x] f_X(x) dx
            = μ_S·P(X>t) + (Cov(S,X)/σ_X²)·∫_t^∞ (x − μ_X) f_X(x) dx.
```
`P(X>t) = q`, and the standard truncated-normal identity `∫_t^∞ (x − μ_X) f_X(x) dx = σ_X·φ(z_q)` give
`V = q·μ_S + (Cov(S,X)/σ_X²)·σ_X·φ(z_q) = q·μ_S + φ(z_q)·Cov(S,X)/σ_X`. ∎

## Parity condition
For two selectors `X_C`, `X_D` at the same `q`, the common `q·μ_S` term and the common positive tail factor
`φ(z_q)` cancel, so
```
V_D = V_C   ⇔   Cov(S,X_D)/σ_{X_D} = Cov(S,X_C)/σ_{X_C}.
```
**The parity boundary is the equality of the two signal-to-noise covariance ratios `Cov(S,X_k)/sd(X_k)`.** The
intercept `a` of the central model is **absent** (rank-invariant under a fixed funded share with no gate); it
re-enters only in the numerical model through the own-estimate eligibility gate and heterogeneous `/c_j`.

For the central signal `X_C = a + (b−w)·S + w·v_p + η` with a distinct project-varying projection `Z = v_p − S`
(typed as its own variable, `η ⊥ (S, v_p)`):
```
Cov(S,X_C) = b·Var(S) + w·Cov(S,Z),
Var(X_C)   = b²·Var(S) + w²·Var(Z) + 2bw·Cov(S,Z) + Var(η).
```

## Large-K corollary (link to the frozen estimand)
The lemma is about expected selected sums, not automatically the frozen ratio-of-sums estimand. If
`O_K/K → V_O > 0` (oracle LLN), the numerators `D_K/K, C_K/K` converge, and `Pr(O_K ≤ o_min) → 0`, then
```
m_K = Σ(D_K − C_K)/Σ O_K  →  (V_D − V_C)/V_O ,
```
so the covariance-ratio equality is the parity boundary **in the large-project limit**. Finite-world `m` is
numerical; the engine's ratio-of-sums estimator is the finite-`K` object the lemma approximates.

## Honest scope
- **The production central signal is NOT this benchmark's `X_C` without extra restrictions.** The engine's central
  estimate is `M^C = a + b·S⁺ + w·(v_{p,j}−S⁺) − b_H^C·s(V)·H + η` (support `S⁺`, minus a **visibility-gated harm**
  term). The benchmark's `X_C = a + (b−w)S + w·v_p + η` uses **net** `S = S⁺ − H` with no separate harm term. Matching
  them requires `−b_H^C·s(V)·H = −(b−w)·H`, i.e. the **coefficient condition `b_H^C·s(V) = b−w`** (a constant gate at
  exactly that value) — OR the trivial `H ≡ 0`. A constant gate ALONE is insufficient. So the benchmark literally
  nests the production signal only in that special case; otherwise it is a **modified net-`S`, no-separate-harm
  stylized model** — a sanity-check Gaussian benchmark, NOT a proof that the full harm-gated engine reduces to it.
- The MNAR distributed signal is **not** exactly jointly normal at finite reach (thresholded non-response +
  Bernoulli thinning); the Gaussian mapping is a **moment-matched reduced-form approximation**, not an identity.
  So this lemma is the analytic sanity check, and the numerical frontier (with the true DGP) is the object.
- `a` is deliberately absent from the benchmark frontier; do not read a benchmark magnitude off `a`.
