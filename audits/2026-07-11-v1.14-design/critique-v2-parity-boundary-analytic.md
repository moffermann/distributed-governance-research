# Dimension 4 — parity boundary, analytic

## Verdict: PARTIAL, not cleared for pre-registration

There is a useful closed-form **benchmark**, but there is no clean universal closed form for the design as written. The benchmark is an equal-cost, fixed-funded-share, jointly elliptical signal-selection model. It reduces parity to equality of each arm's signal quality. The full proposed institution has own-signal eligibility, heterogeneous costs, a budget-constrained greedy portfolio, MNAR Bernoulli reporting, sample-dependent z-scores, and a credit signal. Its boundary is a high-dimensional expectation over discontinuous selection regions and should be solved numerically.

More seriously, v2 has not yet specified the model needed for even the benchmark. It gives a central observation equation but only prose for the distributed estimate (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v2.md:25-39`). As written, `a + w(v_p-S̄)` has no project subscript (`DESIGN_SKETCH_v2.md:28`): if it is constant across projects, it disappears from equal-cost rankings. If it is meant to vary by project, its joint distribution with project value, cost, and credit is missing. Therefore the advertised analytic characterization (`DESIGN_SKETCH_v2.md:74-78`) is not currently a derivable object.

The claimed connection to the legacy law is also wrong without another parameter. The old law compares two **harm weights**: central score `S+ - ηS−` versus distributed score `S+ - (1-β)S−` (`research/e4-analytical-backbone.md:41-60`; implemented as central negative-value attenuation and negative-report underparticipation in `scripts/simulation/e4-v4-symmetric-frontier.mjs:36-50`). The new central score `a+bS+wZ` has no differential harm weight. It does not nest that comparison.

## A closed form under explicit simplifying assumptions

### 1. Fixed-quota signal-selection lemma

Assume:

1. Projects are iid and numerous, costs are equal, and each institution funds exactly a fraction `q` of projects. There is no eligibility gate or credit term.
2. True project score `S` and an institution's ranking signal `X_k` are jointly normal. The same formula holds for an elliptical family with the corresponding linear conditional mean.
3. Delivered score is `S`, and the full-information denominator is fixed or concentrates to a positive constant in the large-project limit. This last assumption is needed because the declared object is `E[(D-C)/O]`, not merely `E[D-C]` (`research/e4-value-estimation-foundation.md:58-63`).

Let `z_q = Φ^{-1}(1-q)`. Institution `k` funds when

\[
X_k > t_k = E[X_k] + \operatorname{sd}(X_k)z_q.
\]

For jointly normal `(S,X_k)`,

\[
E[S\mid X_k=x]
=\mu_S+\frac{\operatorname{Cov}(S,X_k)}{\sigma_{X_k}^2}(x-\mu_{X_k}).
\]

Integrating over the upper tail gives delivered score per candidate

\[
V_k
=E[S\mathbf 1\{X_k>t_k\}]
=q\mu_S+\phi(z_q)\frac{\operatorname{Cov}(S,X_k)}{\sigma_{X_k}}.
\tag{1}
\]

Thus the closed-form parity condition is

\[
\boxed{
\frac{\operatorname{Cov}(S,X_C)}{\operatorname{sd}(X_C)}
=
\frac{\operatorname{Cov}(S,X_D)}{\operatorname{sd}(X_D)}
}
\tag{2}
\]

or, equivalently, equality of `Corr(S,X_k)` because `sd(S)` is common. This result is independent of `q` only because both arms fund the same fixed share and face no gate.

### 2. Apply the lemma to the proposed central model

To make the projection term meaningful, write it as a project-varying `Z_j = v_{pj}-S̄_j` and assume

\[
X_C=a+bS+wZ+\epsilon_C,
\qquad
\epsilon_C\perp(S,Z),
\qquad
\operatorname{Var}(\epsilon_C)=\tau_C^2.
\]

Let `Var(S)=σ_S²`, `Var(Z)=σ_Z²`, and `Cov(S,Z)=σ_SZ`. Then the central side of (2) is

\[
Q_C=
\frac{b\sigma_S^2+w\sigma_{SZ}}
{\sqrt{b^2\sigma_S^2+w^2\sigma_Z^2+2bw\sigma_{SZ}+\tau_C^2}}.
\tag{3}
\]

The intercept `a` is absent: a common shift changes neither ordering nor a fixed top share. If `Z` is also common across projects—as v2's unsubscripted notation literally says—then `σ_Z²=σ_SZ=0` and `w` is absent too. Under those assumptions, sweeping `a` and `w` cannot move the parity frontier at all. This directly contradicts the foundation's verbal claim that central bias `a+w(v_p-S̄)` is what should trade off against distributed degradation (`research/e4-value-estimation-foundation.md:58-63`).

For a generic affine distributed signal

\[
X_D=\alpha_D+\kappa_D S+\epsilon_D,
\qquad \epsilon_D\perp S,
\qquad \operatorname{Var}(\epsilon_D)=\tau_D^2,
\]

the distributed side is

\[
Q_D=
\frac{\kappa_D\sigma_S^2}
{\sqrt{\kappa_D^2\sigma_S^2+\tau_D^2}}.
\tag{4}
\]

Equations (3)=(4) are a closed-form implicit parity surface. With `w=0`, positive slopes, and positive noise, it simplifies to

\[
\frac{b}{\tau_C}=\frac{\kappa_D}{\tau_D}.
\tag{5}
\]

If one *defines* `κ_D=1-β`, then `β*=1-bτ_D/τ_C`, truncated to `[0,1]`. But that definition is not the distributed mechanism in v2: adverse nonresponse to negative individual valuations is not generally a scalar attenuation of aggregate `S`. Moreover, with zero noise, every positive scalar multiple ranks identically, so `β` represented only through `κ_D` has no ranking effect. Equation (5) must not be sold as the substantive coverage boundary.

### 3. The honest voice-bias closed form, and exactly when `β=1-η` returns

Let `U=S+` be the sum of positive valuations, `V=S−` the absolute sum of negative valuations, and `S=U-V`. Under adverse voice bias, the mean distributed signal before sampling noise is

\[
X_D(r)=U-rV,\qquad r=1-\beta.
\]

Let `A=Var(U)`, `B=Var(V)`, and `C=Cov(U,V)`. With independent report noise variance `τ_D²`, equation (2) gives

\[
Q_D(r)=
\frac{A-C+r(B-C)}
{\sqrt{A+r^2B-2rC+\tau_D^2}}.
\tag{6}
\]

The benchmark parity equation is therefore `Q_C=Q_D(1-β)`, with `Q_C` from (3). Squaring yields an explicit quadratic equation in `r`; candidate roots must still satisfy `r∈[0,1]` and the unsquared sign condition. This is the defensible analytic generalization for the stated central model.

The legacy anti-diagonal follows only after replacing the proposed central equation with

\[
X_C(\eta)=U-\eta V
\]

and setting both noises to zero. Define

\[
Q(r)=\frac{A-C+r(B-C)}{\sqrt{A+r^2B-2rC}}.
\]

Direct differentiation gives

\[
Q'(r)=
\frac{(1-r)(AB-C^2)}{(A+r^2B-2rC)^{3/2}}\ge 0
\quad\text{for }0\le r\le1,
\tag{7}
\]

with strict inequality away from `r=1` when the covariance matrix is nonsingular. Hence the arm with the larger harm weight ranks more informatively, and parity occurs at `r=η`, i.e.

\[
\boxed{\beta^*=1-\eta}.
\]

That is a valid theorem for the old nested model, not for `a+bS+wZ`. In fact, a noiseless current central signal `bS` with `b>0` is equivalent to `η=1`: it ranks truth perfectly, so it weakly beats every `β>0` distributed signal and ties only at `β=0`. The old engine itself distinguishes the exact clean law from the noisy simulation: it declares the exact law at `scripts/simulation/e4-v4-symmetric-frontier.mjs:82-85`, while its reported full-simulation anti-diagonal includes `0.89` at `(η=1,β=0)` rather than parity (`research/e4-v4-symmetric-frontier-results.txt:8-17`).

### 4. Eligibility brings `a` back, but destroys the simple boundary

For equal costs and a common eligibility threshold `g`, suppose the institution funds up to fraction `q`. Its effective standardized cutoff is

\[
z_k=\frac{\max\{g,\ \mu_{X_k}+\sigma_{X_k}z_q\}-\mu_{X_k}}{\sigma_{X_k}}.
\]

Then

\[
V_k
=\mu_S[1-\Phi(z_k)]
+\frac{\operatorname{Cov}(S,X_k)}{\sigma_{X_k}}\phi(z_k).
\tag{8}
\]

This is still analytic but parity is now an implicit equation involving `Φ` and `φ`; `a` affects `μ_X` and therefore eligibility. This is the only coherent route by which a project-invariant intercept affects equal-cost selection. V2 explicitly requires eligibility by each arm's own estimate (`DESIGN_SKETCH_v2.md:21-23`), so equation (2), not equation (8), is only a benchmark.

## Why the full portfolio boundary has no clean universal closed form

The exact full-model object can be written, but not reduced to a scalar law without deleting load-bearing features. For world `W`, let

\[
J_k(W;\theta)=\operatorname{Greedy}_B\{(R^k_j(W;\theta),c_j,E^k_j(W;\theta))\}_{j=1}^K
\]

and `V_k(W;θ)=Σ_{j∈J_k} S_j`. The boundary is

\[
\mathcal B=
\left\{\theta:
E_W\left[
\frac{V_D(W;\theta)-V_C(W;\theta)}{O(W)}
\right]=0
\right\}.
\tag{9}
\]

For each realized world, `J_k` changes when any pairwise score-per-cost inequality reverses, when an own-estimate eligibility inequality crosses zero, or when a changed prefix of the ordering does or does not fit the remaining budget. The shipped gate implements exactly those discontinuities: heterogeneous exact costs and a greedy residual-budget fill (`scripts/simulation/e5-sp-symmetry-gate.mjs:52-57`), MNAR Bernoulli reports and report noise (`e5-sp-symmetry-gate.mjs:68-75`), own-estimate eligibility (`e5-sp-symmetry-gate.mjs:74-86`), and a sample-standardized value/credit mixture (`e5-sp-symmetry-gate.mjs:77-90`). Even under multivariate normal latent variables, (9) becomes a sum of truncated moments over a combinatorial collection of multivariate regions. Bernoulli-thinned report sums add a discrete mixture. An exact 0-1 knapsack rule would be still harder; importantly, the shipped engines use **greedy**, not optimal knapsack (`scripts/simulation/e4-v4-symmetric-frontier.mjs:31-35`; `e5-sp-symmetry-gate.mjs:52-57`).

There is also a simple non-identification proof against any boundary depending only on the displayed `θ`. Take two projects, no noise, no credit, `b=1`, `S_1=1`, `S_2=3`, and let `A_0=a+wZ` be constant. With equal costs and capacity for one project, both central `(A_0+S_j)` and distributed truth rank project 2 first for every `A_0`. Now set costs `(1,2)` and budget `2`. Distributed truth-per-cost selects project 2. Central selects project 1 exactly when

\[
A_0+1>\frac{A_0+3}{2}\iff A_0>1,
\]

after which project 2 no longer fits. The sign therefore changes with a cost configuration that is not in the displayed `θ`, holding `(a,w,b,β,σ_F,p,τ_D,λ,A)` fixed. V2 acknowledges that costs, budget, reach, eligibility, and other quantities govern the result (`DESIGN_SKETCH_v2.md:41-46`) but still defines `θ` without them (`DESIGN_SKETCH_v2.md:48-61`). No universal `β=f(a,w,b,...)` exists over those omitted objects.

Finally, the estimand itself matters. The gate stores per-world `(D-C)/O` and reports its mean (`scripts/simulation/e5-sp-symmetry-gate.mjs:102-113`), but its bootstrap computes `(ΣD-ΣC)/ΣO` (`e5-sp-symmetry-gate.mjs:21-23`). These are different functionals when `O` varies and covaries with the arm difference. An analytic theorem for expected delivered difference or a ratio of expectations does not automatically locate the declared `E[Δ_O]` boundary.

## Specific issues and required fixes

1. **The proposed projection term is not typed at project level.** Define `Z_j=v_{pj}-S̄_j`, state whether `S̄_j` is the same object as `S_j^A` under mean aggregation, and specify the joint law of `(S_j,Z_j,c_j,P_j)`. If `Z` is global, admit that `w` affects only eligibility and heterogeneous-cost ranking, not equal-cost order.

2. **The distributed observation equation is missing.** Replace the prose at `DESIGN_SKETCH_v2.md:37-39` with a person-level reporting equation, an estimator (including whether inverse-probability weighting is used), and the induced conditional mean and variance of `M_j^D`. Without this, `β` has no mathematical location in a parity equation.

3. **Do not claim that `a+bS+wZ` extends `β=1-η`.** Either (a) present equations (2), (3), and (6) as the new benchmark and call the old anti-diagonal a separate nested harm model, or (b) use a central model such as `a+b_+U-b_-V+wZ+ε`, whose relative harm weight `η=b_-/b_+` genuinely nests the old result.

4. **Split the result into an analytic benchmark and a numerical frontier.** Pre-register the theorem under equal costs/fixed quota/no gate/no credit, then define the full target by (9) and solve it with common-random-number root finding plus Monte Carlo error bands. Do not describe the full greedy/eligibility boundary as “characterized analytically.”

5. **Implement the proposed model before citing engine support.** The current gate's central arm is an unbiased reach-times-sample-mean estimator plus credit (`scripts/simulation/e5-sp-symmetry-gate.mjs:77-90`); it contains no `a`, `b`, `w`, or project-level projection. Its reproduction can validate the simulation plumbing, not the v2 central model. The gate's `λ=0` cells remain positive (`audits/2026-07-11-v1.14-design/v2-reproduction-e5-sp-symmetry-gate.txt:4-14`), which is evidence that other selection/sampling asymmetries matter even after credit is removed.

6. **Freeze one parity functional.** If the target is `E[(D-C)/O]`, bootstrap and solve that same mean-of-world-ratios functional. If a large-market ratio of expectations is used for the theorem, label it an approximation and report where it disagrees with the finite-world target.

7. **Add analytic regression tests.** At minimum: constant `a` and constant `Z` invariance under equal cost/fixed quota; `β=0` parity against a noiseless `bS` central; exact `β=1-η` in the nested harm model; equation (8) for a one-project eligibility case; and the two-project heterogeneous-cost counterexample above. These tests should fail if a coding change silently turns a benchmark theorem into a claim about the full institution.

## Bottom line

V2 can honestly promise **a theorem-backed benchmark plus a simulated full parity surface**. It cannot honestly promise a closed-form analytic characterization of the full central-versus-coverage portfolio boundary, and it cannot call the new model a generalization of `β=1-η` until it either nests a differential harm coefficient or explicitly retires that analogy.
