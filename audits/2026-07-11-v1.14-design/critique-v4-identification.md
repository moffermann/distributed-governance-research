# Dimension 2 — identification

## Verdict

**PARTIAL.** V4 removes v3's exact fixed-`v_p` algebraic collapse **in the idealized complete-data interior**. If the
three distinct project-level variables `M^C_j`, `S_j`, and `v_{p,j}` are jointly observed, the central equation can
be written

```text
M^C_j = a + c S_j + w v_{p,j} + eta_j,       c = b-w.
```

Full-rank variation in `(1,S,v_p)` identifies `(a,c,w)` as conditional-mean coefficients, and then
`b=c+w`. This is a genuine repair of the v3 equation in which fixed `v_p` left only an intercept and one slope
(`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v4.md:61-74`;
`audits/2026-07-11-v1.14-design/critique-v3-transport-partial-id.md:52-62`).

That conditional statement is not yet the claim v4 makes. The printed rank condition is mathematically
insufficient; the proposed generator does not guarantee it; the bridge protocol equates the required regressor
with the dependent planner forecast; and neither regressor exogeneity, measurement error, project selection, nor
weak identification is handled. The optional convenience-sample bridge is candidly described as unable to recover
population magnitudes, so it cannot identify `(a,b,w)` on the target scale. Thus the **exact v3 collapse is cleared,
but target identification and the bridge implementation are not**. This blocker remains **PARTIAL**, not cleared.

## What the rank result actually requires

With an intercept, the population rank condition is

```text
Var(S) > 0,
Var(v_p) > 0,
Var(S) Var(v_p) - Cov(S,v_p)^2 > 0,
```

equivalently `|Corr(S,v_p)|<1`, plus a conditional-mean restriction such as
`E[eta | S,v_p]=0`. In finite bridge data, the corresponding sample design matrix must have rank three. These
conditions identify the coefficients of the conditional mean. Calling `w` a structural **projection mechanism**
additionally requires a measurement/timing design or exclusion restriction that rules out omitted planner
information, category effects, and common-method error.

The distinction matters. Correlated regressors do not themselves cause bias and `v_p` need not be independent of
`S`; non-collinearity is enough for statistical identification. But mere non-collinearity does not make the
coefficient causal or precisely estimated.

## Ranked issues and required fixes

### 1. Blocking — the stated rank condition is wrong, and the generator does not guarantee rank

V4 states `Cov(S,v_p) < sd(S) sd(v_p)` and says rank is guaranteed because `v_p` is a distinct object
(`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v4.md:64-74`). The inequality misses the absolute value. Perfect
negative collinearity has `Cov(S,v_p)=-sd(S)sd(v_p)`, satisfies the printed strict inequality, and still makes the
design singular. It also fails to require positive variance in each regressor.

The proposed generation rule does not cure this. It permits `v_p=v_p0+gamma*g+xi`, but only says `zeta<1` for the
correlation of `g` with quality and permits nonnegative dispersion generally
(`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v4.md:73-74,114-123`). Hence `zeta=-1` is not excluded, and
`gamma=0,sigma_v=0` makes `v_p` constant. Near-unit correlation, small `gamma`, or small `sigma_v` produces
arbitrarily weak identification even when exact rank technically holds. A variable being conceptually distinct
does not guarantee empirical residual variation.

**Fix:** replace the prose condition with the positive-determinant condition above. In the generator, enforce and
test `Var(v_p | 1,S)>0`, not merely `zeta<1`; reject rank-deficient bridge designs. Pre-register a weak-identification
diagnostic such as the minimum eigenvalue/condition number of the standardized design and the partial variance or
partial `R^2` of `v_p` after `S`. If it fails a frozen precision/power threshold, report `(a,b,w)` as weakly
identified and use a joint confidence/set projection rather than unstable point ranges.

### 2. Blocking — the bridge protocol collapses `v_p` into the outcome `M^C`

The model requires two distinct planner quantities: `v_{p,j}` is the project-varying category prior/regressor,
while `M^C_j` is the final central estimate/outcome (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v4.md:61-74`).
Section G instead requests the planner forecast `M^C_{p,j}` and calls it the `v_{p,j}` proxy, alongside `S_j` and
`g_j` (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v4.md:175-181`). If the same forecast supplies both `M^C` and
`v_p`, the claimed regression is self-referential. If only `g` is observed and `v_p` remains latent, the model
identifies at most composites such as `a+w*v_p0` and `w*gamma`; latent `w*xi+eta` also mixes the two error channels.

The terminology is unstable across the companion foundation as well: there `v_p` is the planner's **own position**
relative to the population mean, not a category forecast
(`research/e4-value-estimation-foundation.md:23-37`). The stadium story therefore has only the planner's “80” and
citizen truth near zero unless a separate pre-project category prior/own valuation and final project forecast are
actually elicited.

**Fix:** observe and serialize three separate objects on every bridge project:

1. `v_{p,j}` — a prior/own-value elicited before project-specific beneficiary evidence, with its scale fixed;
2. `M^C_j` — the planner's final estimate of the interested-population mean on the same scale; and
3. `S_j` — the target citizen mean (or a measurement model for it).

Freeze the timing and define whether `v_p` is an own valuation or a category prior; it cannot silently alternate.
Use repeated projects within categories and, if multiple planners are included, planner/category effects so the
coefficient is not merely a between-category contrast.

### 3. Blocking — full rank identifies a linear projection, not the stated structural mechanism

The only restriction printed for the disturbance is the marginal law `eta_j ~ Normal(0,sigma_C^2)`
(`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v4.md:66-67`). That does not state
`E[eta|S,v_p]=0`, independence, homoskedasticity, or absence of planner/category-level clustering. Without a
conditional restriction, many triples `(a,b,w)` can be paired with different conditional means of `eta` and yield
the same observed joint law. The claim that `v_p` varies “independently of `S`” also contradicts the next
paragraph's deliberate correlation of `g` with `q` (`DESIGN_SKETCH_v4.md:62-74`). Independence is unnecessary;
exogeneity of the residual is the relevant condition.

Project selection can break even that condition. If forecasts or citizen measurements exist only for proposed,
shortlisted, funded, or app-popular projects, inclusion may depend on `S`, `v_p`, or unobserved planner error. Then
`E[eta|S,v_p,selected]=0` does not follow from an unconditional DGP. A coefficient among selected projects is not
the candidate-universe coefficient used by the simulation.

**Fix:** choose the estimand explicitly. For descriptive conditional-mean coefficients, define `eta` by
`E[eta|S,v_p,planner,category]=0` and avoid causal language. For a projection-mechanism coefficient, add a credible
timing/exclusion or randomized elicitation design. Measure the full pre-selection candidate frame; otherwise
pre-register inclusion probabilities/weights, a selection model, or selection-sensitivity bounds and label the
result population-conditional.

### 4. Blocking — sampled `S_j` creates errors-in-variables and the admitted convenience sample cannot identify target magnitudes

V4 correctly says reality requires a bridge measurement for `S_j`, but its only in-scope instrument is a gamified
convenience sample, explicitly limited to “existence + direction of the gap, not population magnitudes”
(`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v4.md:175-181`). That caveat is honest. It also means the bridge, as
currently allowed, cannot identify `(a,b,w)` for the target interested population or contract `R_alpha` to a
target-identified magnitude region.

Even under probability sampling, replacing latent `S_j` with a noisy sample mean causes errors-in-variables bias;
with a convenience sample and the design's sign-dependent participation, the error is generally nonclassical and
correlated with project value. It can attenuate the `S` coefficient, contaminate `w` when `S` and `v_p` correlate,
and manufacture an apparent planner gap. The foundation itself says citizen `F` remains assumed/app-elicitable and
transport to public-project value remains an assumption
(`research/e4-value-estimation-foundation.md:50-63,80-85`).

**Fix:** either (a) obtain a target-representative/reweighted citizen sample with a frozen nonresponse model,
repeated measurements, and a hierarchical measurement-error likelihood that propagates uncertainty in each
`S_j`; or (b) retain the author's data constraint and say plainly that bridge results can test existence/direction
in the convenience population only, while target `(a,b,w)` remain sensitivity parameters. Do not describe option
(b) as moving the model to target identification.

### 5. Major — no executable artifact tests the new identification claim

Neither named engine implements the v4 central equation or bridge variables. E5 constructs a sampled central
value estimate plus credit and has no `(a,b,w,v_p)` regression
(`scripts/simulation/e5-sp-symmetry-gate.mjs:77-90`). E4-v4 implements harm attenuation `gamma` and adverse voice
`beta`, not planner projection (`scripts/simulation/e4-v4-symmetric-frontier.mjs:36-50`). V4 itself still describes
the fresh engine and tests in future tense (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v4.md:154-172`). Therefore
there is no recovery evidence for the newly claimed parameterization.

**Fix:** add deterministic identification fixtures before preregistration:

- recover known `(a,b,w)` with distinct noiseless `M^C,S,v_p` and a well-conditioned design;
- reject constant `v_p`, perfect positive collinearity, and perfect negative collinearity;
- flag a near-collinear weak-identification case;
- show the bias from using `M^C` itself as the `v_p` proxy;
- show the errors-in-variables distortion from sampled `S`; and
- show that selection on `eta` changes the selected-sample coefficient.

## Bridge-data assessment

The sentence “absent bridge data, results stay transport-sensitivity” is correct and should remain
(`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v4.md:175-181`). The listed bridge variables are not sufficient.
Target identification requires distinct observed `M^C` and `v_p`, measured `S` with a sampling/measurement model,
full and sufficiently strong rank, a residual/selection restriction, and a declared target project population.
Under the no-survey/no-fieldwork constraint, the current app can supply an exploratory convenience-population
directional check, not population coefficient magnitudes.

## Clearance test

Mark this blocker cleared only when all of the following are in the contract and executable:

1. the correct positive-definite rank condition and a frozen weak-identification rule;
2. three semantically and operationally distinct bridge variables `M^C`, `v_p`, and `S`;
3. a conditional residual restriction and a project/planner selection protocol;
4. a measurement-error/nonresponse model for sampled `S`, or an explicit refusal to claim target identification;
5. joint coefficient uncertainty propagated through the transport bounds; and
6. recovery, singular-design, weak-ID, measurement-error, and selection fixtures.

## Single sharpest improvement

**Rewrite §G as an actual three-measurement bridge design: elicit the planner's prior `v_p` before project-specific
evidence, elicit the final planner estimate `M^C` afterward, and estimate citizen truth `S` with an explicit
sampling/measurement model.** Then replace the one-sided covariance sentence with
`Var(S)Var(v_p)-Cov(S,v_p)^2>0` plus weak-ID and selection diagnostics. That preserves v4's real algebraic advance
without calling a convenience-sample, self-proxy regression identified.
