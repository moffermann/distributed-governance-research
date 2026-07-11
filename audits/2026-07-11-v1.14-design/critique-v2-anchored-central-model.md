# Dimension 3 — anchored central model and transport

## Verdict

**Needs changes; the qualitative model class is defensible, but the claimed quantitative anchoring is not.** v2 is a real improvement over the ad-hoc central proxy: it separates value estimation from credit pressure (`DESIGN_SKETCH_v2.md:28-35`) and openly labels transport unverified (`DESIGN_SKETCH_v2.md:54-57`; `research/e4-value-estimation-foundation.md:71-74`). But the displayed equation is not yet a faithful operationalization of the cited evidence, and the political-opinion/effort-task estimates do not identify project-value parameters. Transport is therefore **fatal to any empirically sized parity boundary**, but not fatal to an explicitly conditional robustness atlas in which target-domain `a`, `b`, and `w` remain assumed until bridge data exist.

| Claim in v2 | Verdict |
|---|---|
| Linear responsiveness plus systematic bias is a reasonable central-signal model class | **Cleared only as a hypothesis/form** |
| `a` is proxy-anchored at 7–36 points for project value | **Not cleared** |
| `w` is proxy-anchored at 21–50% | **Not cleared; 50% is not a projection coefficient** |
| A roughly half “format-reducible share of `a`” is anchored | **Not cleared** |
| Remaining bias can be called irreducible | **Not cleared** |
| The shipped engines validate this central arm | **No; neither engine implements it** |

## Specific issues

### 1. As written, the projection term may be constant across projects and therefore is not project-level projection

The model is

```text
M_j^C = a + b S_j^A + w (v_p - Sbar) + eta_j.
```

Both the design and foundation omit a project index from `v_p` and leave `Sbar` undefined (`DESIGN_SKETCH_v2.md:28-34`; `research/e4-value-estimation-foundation.md:23-35`). If these are the planner's general position and one grand population mean, `a + w(v_p-Sbar)` is the same offset for every project. That does not represent projecting one's project-specific valuation onto citizens' project-specific valuations.

The consequence is not innocuous. The central ranking equation standardizes `M_j^C / cost_j` (`DESIGN_SKETCH_v2.md:28-30`). A common offset therefore becomes `constant / cost_j`: it can favor cheap projects and change the eligibility threshold, but it does not encode the cited directional false-consensus mechanism. With equal costs and no eligibility threshold it has no effect on ordering at all. Thus a large political-opinion intercept can mechanically produce either no selection loss or an unintended cost bias, depending on unrelated DGP choices.

**Fix:** define task-specific objects on the same scale, e.g. `v_pj` and `mu_j = A(u_.j)`, and write a conditional measurement equation such as

```text
M_pj^C = alpha_p + x_j' gamma + b mu_j + w (v_pj - mu_j) + eps_pj,
```

where `x_j` contains predeclared project attributes that give any directional intercept meaning. If the central institution is a team, also specify how individual signals become the institutional estimate. Do not use a single unsigned `a` as a generic penalty.

### 2. The source outcomes do not identify the proposed coefficients

The evidence harvest maps a linear relationship to `a + b*true`, observed gaps to `a`, and percentage prediction errors to `w` (`E4-empirical-anchors.md:10-26,39-55`). Those mappings are too strong.

The harvest also says full reads and exact-coefficient confirmation are still future work (`E4-empirical-anchors.md:66-71`). A registry cannot honestly call coefficients anchored while its own extraction record is explicitly provisional.

- Broockman–Skovron's “strikingly linear” result supports linearity/responsiveness, not `b = 1` or any numeric support for `b`. v2 appropriately says “responsive,” but still labels `b` proxy-anchored without an extracted slope or uncertainty (`DESIGN_SKETCH_v2.md:31-34,56`). In the paper, the intercept shift is oriented by whether higher support denotes a conservative or liberal position, and varies by issue and party; it is not one positive project-invariant intercept. See the [primary paper](https://escholarship.org/content/qt7sk23908/qt7sk23908.pdf).
- The 7–36-point values are errors in estimating **support shares for named policies on a bounded 0–100 scale**, not errors in a latent project-value index. The repo itself concedes this scale/domain gap (`E4-empirical-anchors.md:18-26,66-70`). Calling this a defensible project-value range before defining a unit-preserving map is incorrect.
- The Gagnon-Bartsch evidence is an exogenous fatigue manipulation and willingness-to-work forecast. The cited 21% is the cleaner cross-state projection estimate; the observed 50% error also contains task uncertainty. The anchor notes acknowledge the roughly equal decomposition (`E4-empirical-anchors.md:39-47`), but then put the full 21–50% range into `w` (`E4-empirical-anchors.md:51-62`; `research/e4-value-estimation-foundation.md:30-35,53`). That double-counts uncertainty once `eta_j` is also included. The [primary paper](https://gagnon-bartsch.com/files/projection_experiment.pdf) explicitly treats roughly 29 points of the 50% error as possibly due to uncertainty, leaving roughly 21% as projection.
- Neither 21% nor 50% is the coefficient on `(v_pj-mu_j)`. They are relative errors in a particular willingness-to-work outcome under a particular state contrast. Converting either into `w` requires the source contrast in predictor state, outcome units, link function, and denominator. None is in the registry.

**Fix:** label `b` only `PROXY-SUPPORTED FORM` and label target-domain `a` and `w` `ASSUMED (source evidence available)` until an explicit scale/link transport is supplied. Extract coefficients, standard errors, exact contrasts, sample/task definitions, and covariance from the primary papers; do not turn outcome error percentages into structural weights.

### 3. `a` and `w` can double-count the same directional bias

The design describes `a` as systematic directional bias and `w(v_p-Sbar)` as directional projection (`DESIGN_SKETCH_v2.md:31-34`). But Broockman–Skovron's intercept shift is an empirical residual pattern whose proposed explanations include biased contact and partisan differences; it is not established as a primitive independent of projection. Dias–Lucas–Sheffer, meanwhile, studies how projection and conservative-exemplar accessibility interact. Adding an intercept harvested from one political-opinion pattern to a projection term harvested from another can count overlapping mechanisms twice.

This is especially serious because the proposed joint distribution merely “ties” the sign of `w` to planner position (`DESIGN_SKETCH_v2.md:63-66`); it does not identify the covariance or impose a non-overlapping decomposition.

**Fix:** choose one of two honest specifications before simulation:

1. a reduced-form total-bias model `M = alpha(x_j,p) + b S + eps`, with no separately interpreted projection coefficient; or
2. a mechanism model with project-level projection plus a residual intercept, estimated jointly in target-domain bridge data.

In the second, define `alpha` as the residual conditional bias after controlling for projection and planner/project covariates. Pre-register covariance and avoid independently sweeping two estimates of the same error.

### 4. Transport is presently unidentified, not merely “uncertain around the source range”

The target differs from every source on the important axes: outcome (synthetic project value versus support share, ideology, or willingness to work), scale, affected population, decision stakes, information available, actor (professional appraisal institution versus politician or experimental predictor), and aggregation from people to portfolios. The design acknowledges “transport ... UNVERIFIED” (`DESIGN_SKETCH_v2.md:54-55`), while the foundation correctly says point magnitudes do not transfer (`research/e4-value-estimation-foundation.md:71-74`). Those admissions contradict describing the transported numeric ranges as “proxy-anchored” (`DESIGN_SKETCH_v2.md:48-57`).

No source-domain estimate alone can supply a finite, credible transport-error band. Without assumptions or target observations, the target effect may be attenuated to zero, amplified, or sign-reversed for some project classes. Choosing, for example, a 50% haircut is just another unsupported assumption.

**Fix — partial-identification protocol:** distinguish source and target parameters and expose the discrepancy:

```text
theta_T = H(theta_S, scale map, Z_T, Z_S) + d_transport,
d_transport in Gamma.
```

Before bridge data, let `Gamma` include the null and plausible sign reversal, bounded only by the declared target score support. This will often be wide or vacuous; that is the honest result. For every parameter cell, report

```text
Delta_low(theta) = inf over d_transport in Gamma of E[Delta_O | theta, d_transport]
Delta_high(theta) = sup over d_transport in Gamma of E[Delta_O | theta, d_transport].
```

Classify a region as robust distributed-win only if `Delta_low > +delta`, robust central-win only if `Delta_high < -delta`, and otherwise transport-indeterminate. Show sensitivity to nested, predeclared `Gamma` sets; do not put probability mass on transport discrepancies without data.

The useful next measurement is a bridge study using the **same projects, same response scale, and same affected population**: elicit citizen distributions and independent planners' point and distribution forecasts; record `v_pj`; estimate the full measurement equation hierarchically; validate on held-out projects and jurisdictions. Source studies may inform a discounted prior or model class, never the target likelihood. Freeze the discount before viewing parity outcomes.

### 5. “Format-reducible” versus “irreducible” is conceptually useful but empirically mislabeled

The foundation infers that part of `a` is a measurement/format artifact and the remainder is irreducible (`research/e4-value-estimation-foundation.md:38-41`); v2 registers a roughly one-half reducible share (`DESIGN_SKETCH_v2.md:33-34,57`). Yet `0.67 -> 0.19` is a 72% reduction, not roughly one-half. More importantly, the Dias–Lucas–Sheffer contrast combines at least cognitive effort and response format. Their randomized order analysis attributes roughly two-thirds of the improvement to effort carried into the later point estimate, with an additional format contribution; it does not identify “format share of `a` = 1/2.” See the [primary paper](https://www.cambridge.org/core/services/aop-cambridge-core/content/view/A0CEE5D0616BD12E1BA9B1B96C1154C2/S2049847025100691a.pdf/beyond-the-mean-how-thinking-about-the-distribution-of-public-opinions-reduces-politicians-perceptual-errors.pdf).

Nor is the residual 0.19 “irreducible.” It is residual under one survey instrument in one domain; more information, deliberation, team aggregation, calibration feedback, or another elicitation could reduce it. The empirical-anchor file itself only says “two honest consequences” without identifying a permanent component (`E4-empirical-anchors.md:28-37`).

**Fix:** replace the reducible/irreducible parameter with explicitly manipulable central-information regimes: point elicitation, distribution elicitation, deliberation/effort, external survey access, and team aggregation. Treat the observed task contrasts as source-domain intervention evidence. Call the remaining component `unexplained residual bias under regime r`, not irreducible bias.

### 6. The source literature studies perceptions, not the institutional estimate used for selection

v2 moves directly from an individual planner's perception to `M_j^C`, then combines it with credit in the institutional ranking (`DESIGN_SKETCH_v2.md:25-35`). Real central appraisal can pool staff, surveys, engineering evidence, cost-benefit analysis, hearings, and feedback. Conversely, it may introduce correlated organizational bias. The cited studies do not identify this aggregation or its effective noise.

**Fix:** add an observation layer and an institution layer. Generate planner/appraiser signals conditional on project truth, then specify who observes which signal, how many appraisers there are, whether errors are correlated, how disagreement is resolved, and what data the institution purchases. Match the distributed arm's information budget at this institutional layer. Estimate or sweep team-error correlation; independent errors average out, common directional errors do not.

### 7. The shipped engines provide no validation of the new equation

Inspection confirms that neither required engine contains `a`, `b`, `w`, planner positions, or format regimes:

- E4-v4 perturbs each interested citizen value with noise and attenuates negative perceived values by `gamma`, then sums them (`scripts/simulation/e4-v4-symmetric-frontier.mjs:36-50`). Its `beta = 1-gamma` frontier therefore concerns symmetric harm perception/voice bias, not the proposed central estimator (`scripts/simulation/e4-v4-symmetric-frontier.mjs:82-85`).
- E5 builds `S` as the **sum** of affected citizens' values (`scripts/simulation/e5-sp-symmetry-gate.mjs:33-49`), gives the central arm a sample of actual affected values plus noise, multiplies by known reach, and then adds credit pressure only in ranking (`scripts/simulation/e5-sp-symmetry-gate.mjs:77-90`). That is an unbiased value-reader conditional on reach, not `a + b*S + w*(v_p-Sbar)`.

The old engines are valid regression tests for their own mechanisms, not evidence that v2's central model behaves correctly. The design itself promises a fresh symmetry gate (`DESIGN_SKETCH_v2.md:41-46`); until it exists, implementation fidelity is untested.

**Fix:** create a new engine and theory-to-code crosswalk. Its mandatory unit tests should include: `a=w=0, b=1` recovers an unbiased central signal; project-specific `v_pj=mu_j` kills projection; a common offset cannot masquerade as project-specific projection; relabeling the project-value direction flips the corresponding signed bias; distribution-format treatment changes only preregistered components; and source-to-target scale transformations leave standardized predictions invariant.

## Minimum defensible revision before preregistration

1. Correct and index the measurement equation, including project attributes, planner/project values, units, and institutional aggregation.
2. Downgrade transported numeric `a` and `w` from `PROXY-ANCHORED` to `ASSUMED`; reserve “proxy-supported” for qualitative form/sign hypotheses.
3. Remove 50% from the projection-weight support unless a documented structural conversion shows why task uncertainty is not being counted in `eta`.
4. Replace the half-format/irreducible split with separate manipulable information regimes and an unexplained residual.
5. Add an explicit transport-discrepancy set and report robust-win/indeterminate regions under nested bounds.
6. Build the fresh engine; do not splice the new parameters into either legacy engine and call that validation.

With those changes, E4 can honestly say: **published work motivates a family of systematic central-estimation errors; project-value magnitudes remain unidentified, so the simulation reports which conclusions survive explicit transport bounds.** Without them, “literature-anchored central arm” overstates what the evidence anchors.
