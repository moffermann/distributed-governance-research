# Critique v2 — DGP completeness, registry, and identification

## Verdict

**NOT CLEARED — needs changes before pre-registration.** v2 correctly states the rule that every governing quantity must be surfaced and correctly admits that transport is unverified. It does not yet obey either admission. Section 4 is a list of work still to do, not a full DGP; Section 5 is a provenance sketch, not an auditable parameter registry. The advertised `theta` omits variables in its own central equation and most quantities that determine selection. The proposed target-context magnitudes of `a`, `w`, `b`, and the format effect remain **ASSUMED, informed by source-context proxies**; the evidence supports hypotheses about form and perhaps sign, but does not identify numeric public-project-value supports. Several proposed coefficients are not separately identified under the equation as written. Finally, the three one-at-a-time zero settings are useful wiring tests but are not an adequate symmetry gate.

This dimension therefore does **not** clear prior must-fix 4 (complete DGP and identification) or must-fix 5 (auditable registry). Both are only acknowledged as requirements.

## 1. “Enumerate” is an instruction, not an enumeration

The design says to enumerate `N`, `K`, costs, budget share, exposure, project quality, `P`, `lambda`, `h`, information allocation, eligibility, and `A`, and to publish a theory-to-code crosswalk (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v2.md:41-46`). None of that enumeration or crosswalk follows. Instead, the next section defines

```text
theta = (a, w, b, beta, sigma_F, p, tau_D, lambda, A)
```

(`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v2.md:48-50`). That vector omits most of the quantities the preceding paragraph says must not be hidden. A fixed constant need not be swept on the parity surface, but it still needs a registry row, value, unit, source/status, and robustness rule. The design currently conflates “not varied” with “not part of the DGP.”

The missing or underdefined governing objects include:

| Layer | Governing quantities absent from `theta` or not mathematically defined |
|---|---|
| Population/project generator | `N`, `K`, project-level mean/location distribution, within-project `F_j` shape beyond `sigma_F`, between-project dependence, affected-population/reach distribution, whether unaffected people have `u_ij=0`, and cost/reach/value dependence |
| Scale and welfare score | support and unit of `u_ij`, the zero, scale normalization, whether `S_j^A` is a mean or a reach-weighted sum, the opportunity-cost rule `h`, and whether delivered value is gross `S` or net `S-hc` |
| Central observation | the distribution/scale/correlation of `eta_j`; `v_p` and `Sbar` and whether they vary by project; the format-treatment indicator and the reducible/irreducible decomposition of `a`; attention/sample allocation; knowledge of reach; and covariance of errors with `S`, cost, and `P` |
| Distributed observation | a participation equation defining `p` and `beta`; the reporting/noise distribution behind `tau_D`; the estimator used under unequal inclusion; strategic/correlated reporting; missingness; and whether reach is observed |
| Credit and decision | the generator and unit of `P`; its dependence on value, cost, reach, and central error; z-score reference population; eligibility threshold; tie-breaking; budget; portfolio algorithm; and treatment of projects with negative estimated or realized net value |
| Simulation/estimand | inner-world distribution, seed/common-random-number scheme, number of worlds, the exact conditional functional whose sign defines the surface, Monte Carlo stopping error, and behavior when `O=0` |

These are not pedantic additions. v2 says the primary aggregation is the **mean** (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v2.md:16-23`), while both shipped engines generate and deliver **sums** over reached/interested people (`scripts/simulation/e5-sp-symmetry-gate.mjs:39-49,92-99`; `scripts/simulation/e4-v4-symmetric-frontier.mjs:26-35`). With heterogeneous reach, mean value and total delivered value can rank projects differently. The sketch also introduces `h` only in its checklist (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v2.md:41-45`) but never states whether the new `O`, `D`, and `C` score gross value or the old engine's net `S-h*cost`; the old gate makes that subtraction outcome-determining (`scripts/simulation/e5-sp-symmetry-gate.mjs:60-65,92-99`). Until these choices are equations, there is no single v2 parity surface to preregister.

### The shipped engines demonstrate why a literal registry is necessary

Neither shipped engine implements the new central model. The E5 gate's central signal is a reach-scaled sample mean with shared report noise, then a `lambda` mixture with credit (`scripts/simulation/e5-sp-symmetry-gate.mjs:77-90`); it has no `a`, `b`, `w`, `v_p`, `Sbar`, or format component. The E4-v4 engine instead implements noisy perception plus negative-value attenuation `gamma` (`scripts/simulation/e4-v4-symmetric-frontier.mjs:36-50`). They are historical falsification targets, not executable specifications of v2.

They also reveal many result-governing constants that prose can easily hide:

- E5 fixes eleven world quantities in `WP`, including `N=5000`, `K=500`, location/spread values, a reach generator, credit spread, and a one-third budget (`scripts/simulation/e5-sp-symmetry-gate.mjs:29-30`). Cost lower bound `1`, reach truncation `[0.005,0.9]`, normal project quality, and the lognormal credit mapping are additional equation-level choices (`scripts/simulation/e5-sp-symmetry-gate.mjs:33-49`). The declared `WP.eta=0.1` is never read by the subsequent world or evaluation code; a generated crosswalk/linter should catch this dead parameter (`scripts/simulation/e5-sp-symmetry-gate.mjs:30-49,60-99`).
- E5 also fixes a greedy (not optimal-knapsack) portfolio rule (`scripts/simulation/e5-sp-symmetry-gate.mjs:52-57`), rounds the central sample count and floors it at one (`scripts/simulation/e5-sp-symmetry-gate.mjs:77-85`), uses a z-score with a population denominator and an SD fallback of one (`scripts/simulation/e5-sp-symmetry-gate.mjs:24-27`), uses 100 worlds and fixed seeds (`scripts/simulation/e5-sp-symmetry-gate.mjs:102-108`), and evaluates two hand-fixed `(p,beta,tau)` regimes and small `lambda/rho/h` grids (`scripts/simulation/e5-sp-symmetry-gate.mjs:116-117`). Every one can move a finite-budget selection frontier.
- E4-v4 hard-codes costs uniform on `[1,10]` and reach uniform on `[0.1,0.7]` (`scripts/simulation/e4-v4-symmetric-frontier.mjs:26-29`), the one-third budget (`scripts/simulation/e4-v4-symmetric-frontier.mjs:36-40`), organized-project probability and capture increments (`scripts/simulation/e4-v4-symmetric-frontier.mjs:43-49`), `N`, `K`, seeds, grids, and the 54-point scenario box (`scripts/simulation/e4-v4-symmetric-frontier.mjs:55-64`). Its summary additionally drops ratios when `C <= 0.05 O`, an output-dependent conditioning rule (`scripts/simulation/e4-v4-symmetric-frontier.mjs:59-64`). These choices cannot silently carry into v2.

**Fix:** distinguish `theta_all` (every stochastic, behavioral, institutional, numerical, and normative input) from `theta_surface` (the preregistered subset varied in the primary atlas). Generate the crosswalk from the engine's actual configuration schema and fail CI for an unregistered literal or an unused registry parameter. Put fixed quantities in `theta_all` with a `FIXED` analysis role; “fixed” is not a provenance status.

## 2. The registry's status semantics are internally inconsistent

The allowed status vocabulary is `{OBSERVED, ESTIMATED, PROXY-ANCHORED, ASSUMED, NORMATIVE}` (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v2.md:48-50`), but `lambda` is labeled `POSITED`, a status outside that set (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v2.md:59-61`). `POSITED` is substantively `ASSUMED` until a target-context measurement exists. `sigma_F, F shape` is labeled `ASSUMED / app-elicitable`, mixing current provenance with a possible future data source; “elicitable” is not evidence. Three distinct distributed parameters are combined in one row even though turnout, sign-dependent response, and report error have different estimands and identification requirements (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v2.md:58-60`).

The table is not yet the registry required by the prior critique. It gives no mathematical definition, target population, numeric support/distribution, exact paper table/variable, extraction code, sampling uncertainty, measurement uncertainty, identifying restriction, transport mapping, dependence, or blinded update rule. “Near-linear,” “sizable,” and “PB-informed” are descriptions, not preregisterable supports (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v2.md:52-61`). The source harvest itself says full paper reads and exact-coefficient confirmation are still pending (`audits/2026-07-11-v1.14-design/E4-empirical-anchors.md:66-71`). A range cannot be frozen from unverified summaries and still be called auditable.

The format row is also numerically misdescribed. The cited change `0.67 -> 0.19` leaves 28% of the original value and removes about 72%; that is not a “~1/2” reducible share (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v2.md:54-57`). The foundation is more accurate when it says “more than half” (`research/e4-value-estimation-foundation.md:38-41`) but then its own summary table reverts to “~1/2” (`research/e4-value-estimation-foundation.md:48-55`). More importantly, a treatment contrast in perceptual error is not automatically a structural share of the intercept: it can change slope, variance, composition, scale use, or the estimand elicited. That decomposition needs an observation model.

### Honest current statuses

| Target DGP object | What the cited evidence supports now | Honest target-context status now |
|---|---|---|
| linear/intercept-shift form | a source-context candidate specification | **ASSUMED model form, externally motivated**; compare against nonlinear, issue-feature, and heteroskedastic alternatives |
| numeric `a` | political-opinion errors on source-specific scales | **ASSUMED (proxy-informed)** after an explicit unit/transport map; not a project-value range |
| numeric `w` | directional source-task contrasts of roughly 21–50%, explicitly described as reduced form | **ASSUMED (proxy-informed)**; those contrasts are not estimates of the coefficient `w` in v2 (`audits/2026-07-11-v1.14-design/E4-empirical-anchors.md:39-52`) |
| `b` | qualitative source-context responsiveness | **ASSUMED (proxy-informed)** until an exact source estimate is extracted and transported |
| reducible share | a source-task format contrast | **ASSUMED (proxy-informed)** for project appraisal; not yet a decomposition of `a` |
| `F`, `sigma_F`, `beta`, `p`, `tau_D` | no target data in the supplied materials | **ASSUMED** |
| `lambda` and `P` process | proposed mechanism, measurement pending | **ASSUMED** |
| `A` | declared social aggregation choice | **NORMATIVE** |

No target-context empirical input is presently `OBSERVED` or `ESTIMATED` in the supplied design. That is acceptable for a conditional simulation, but the registry must say it plainly.

**Fix:** use separate columns for (1) source-study evidence status, (2) target-context identification status, (3) transport status, and (4) analysis role. For example: `source=ESTIMATED`, `target=ASSUMED`, `transport=UNVALIDATED`, `role=SWEPT`. Do not let the single label `PROXY-ANCHORED` erase the unvalidated transport step.

## 3. Transport does turn the numeric “anchors” back into assumptions

The supporting documents expressly concede that political-opinion magnitudes do not transport without assumption (`research/e4-value-estimation-foundation.md:71-76`; `audits/2026-07-11-v1.14-design/E4-empirical-anchors.md:66-70`). Yet the design still labels the target `a`, `w`, `b`, and format share `PROXY-ANCHORED` and proposes sweeping “anchored ranges” (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v2.md:52-57`; `research/e4-value-estimation-foundation.md:58-63`). The caveat is visible, but the status still overstates what is known.

The scale problem is decisive. Seven-to-36 percentage points of issue support, 0.67 ideology-scale points, and a 21–50% task outcome contrast are not commensurable coefficients in a public-project-value regression. They have different outcomes, denominators, predictor scales, populations, and elicitation tasks (`audits/2026-07-11-v1.14-design/E4-empirical-anchors.md:18-26,39-47`). In particular, “21–50%” is not a direct admissible interval `w in [0.21,0.50]` unless the new simulator reproduces the source experiment's outcome and covariate normalization. Calling it a range for `w` would be a category error.

An honest transport layer would first standardize and then expose the unverified bridge, for example

```text
A_source = a_source / scale_source
a_target = kappa_a * A_source * scale_target
w_target = kappa_w * T(source estimand, target equation)
```

where `T` is a documented estimand conversion, and `kappa_a`, `kappa_w` are registered transport parameters. Without target validation, their admissible sets must include no transport (`kappa=0`) and materially weaker/stronger effects; sign restrictions require a separate argument. The primary result should be a union of parity regions over that transport set, with a source-conditional surface shown separately. If no admissible set is stated, “partial identification” is premature: the model has named unknowns, not identified bounds. The design's claimed contribution of partial identification (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v2.md:74-79`) becomes honest only after the transport set and the data moments restricting it are specified.

**Fix:** reserve `PROXY-ANCHORED` for the source estimand or relabel target magnitudes `ASSUMED (proxy-informed)`. Add target pilot data: planners provide project-level own valuations and estimates of affected-party distributions; a probability sample of affected people supplies the validation target. Estimate and hold out the source-to-target mapping before running the institutional comparison.

## 4. The central coefficients are not identified as written

The equation is

```text
M_j^C = a + b*S_j^A + w*(v_p - Sbar) + eta_j
```

(`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v2.md:25-30`). Its notation makes `v_p - Sbar` look project-invariant. If it is a scalar `d`, then

```text
M_j^C = (a + w*d) + b*S_j^A + eta_j.
```

Only `alpha = a + w*d` is identified; infinitely many `(a,w)` pairs generate the same signals and portfolios. Sweeping `a` and `w` as independent boundary axes would count observationally identical worlds repeatedly. It would also misrepresent projection as a project-varying ranking distortion when it is only a common offset.

If the intended term is project-specific, it must be indexed: `d_j = v_pj - mu_j`. With mean aggregation, `mu_j=S_j^A`, so

```text
M_j^C = a + (b-w)*S_j^A + w*v_pj + eta_j.
```

Now `b` and `w` can be separated only with independent project-level variation in measured planner valuations `v_pj` conditional on citizen means, plus enough projects and an error model. None of those observations appears in the registry. A planner-level random intercept, project/issue features, interactions, and repeated planners are also needed to distinguish a general intercept from directional issue-specific bias.

There is a further decision-model identification problem. The central ranking standardizes `M_j^C/cost` before mixing it with standardized `P_j/cost` (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v2.md:28-35`). Positive rescaling of the whole central signal is erased by `z(.)`; a constant intercept either cancels under equal costs or, with unequal costs, induces an `a/cost_j` preference for cheap projects. That mechanical cost effect is not the same construct as ideological intercept bias. Eligibility may restore some level information, but only after its exact threshold and `h` are defined. Selection data alone therefore identify, at best, ordinal composites and threshold combinations—not raw `a`, `b`, `w`, and error scale. Direct elicitation of `M`, `v_p`, and the citizen validation target is required.

The distributed side has analogous confounding. The design gives only prose for `M_j^D` (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v2.md:37-40`). Under the old engine's response rule, negative-valued people respond at `p(1-beta)`, positives at `p`, and reports are divided only by `p` (`scripts/simulation/e5-sp-symmetry-gate.mjs:68-75`). Without a probability validation sample or response follow-up, baseline participation `p`, sign-dependent missingness `beta`, the negative tail of `F`, and report error `tau_D` cannot be recovered separately from observed reports. `sigma_F` and `tau_D` are likewise confounded without repeats or external validation.

**Fixes:**

1. Index every object (`u_ij`, `mu_j`, `v_pj`, planner `r`, jurisdiction `q`) and state the sampling hierarchy.
2. Define the estimand for each coefficient and list the exact observed moments that identify or bound it.
3. Decompose format explicitly, e.g. `a_j(q)=a_j^irreducible + (1-q)*a_j^format`, with `q` a registered treatment/elicitation indicator; do not infer a structural share from one total-error contrast.
4. Collect direct project-level planner forecasts and own values, population validation samples, repeat elicitations for noise, response follow-up for MNAR bounds, observed project costs/eligibility/rankings, and credit measures. Use held-out projects/jurisdictions for validation.
5. Until those data exist, call the surface **conditional on assumed target parameters**, and report identified sets only where explicit data moments and assumptions produce actual bounds.

## 5. `lambda=0`, `w=0`, and `a=0` are not an adequate control suite

The wording that each zero “should collapse the relevant asymmetry” is too ambiguous to preregister (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v2.md:41-46`). None should generally collapse `Delta_O` to zero:

- `lambda=0` removes the credit pathway but leaves central-versus-distributed information allocation, `a`, `b`, `w`, errors, participation, and voice bias.
- `w=0` removes projection but leaves the intercept, slope error, noise, and credit pressure.
- `a=0` removes the common intercept but leaves projection, slope error, noise, and credit pressure.

The existing gate proves the distinction. It defines `lambda=0` as its negative control (`scripts/simulation/e5-sp-symmetry-gate.mjs:140-150`) but tests only whether the pooled median exceeds `0.05`, not whether parity or a pathway invariance holds (`scripts/simulation/e5-sp-symmetry-gate.mjs:151-166`). I reran the shipped engine and exactly reproduced the recorded `lambda=0` median `Delta_O=0.016`, which the script labels “ok” (`audits/2026-07-11-v1.14-design/canonical-symmetry-gate-rerun.txt:82-90`). A nonzero institutional difference remains because information routes remain different. Moreover, the shipped gate cannot test `a=0` or projection-`w=0` because those parameters do not exist in its central equation (`scripts/simulation/e5-sp-symmetry-gate.mjs:77-90`).

Use three distinct classes of tests:

### A. Pathway-inactivation tests (exact or Monte Carlo-equivalent)

- At `lambda=0`, changing, rescaling, or permuting `P`—and changing its generator/correlation—must leave the central chosen set and `Delta_O` identical world-by-world.
- At `w=0`, changing `v_pj` must have no effect. At `v_pj=mu_j`, changing `w` must have no effect.
- At `a_format=0`, changing the format-treatment indicator must have no effect. This requires the format decomposition to exist in code.
- At `beta=0`, sign of `u_ij` must not affect participation probability. At `tau_D=0`, report noise draws must not affect results.

These test whether a parameter is wired only to its claimed pathway. Do not use an arbitrary `|Delta|<0.05` threshold for a property that should be exact.

### B. Signal-recovery tests

- `a=w=0`, `b=1`, `eta=0` must give `M_j^C=S_j^A` before costs, z-scoring, eligibility, or credit are applied.
- Representative full coverage with truthful noiseless reports must give `M_j^D=S_j^A` under the declared aggregation.
- Sign/relabeling and unit transformations must give the preregistered equivariant change in `M`; standardized rankings must be invariant to admissible positive unit rescaling.

### C. A genuine joint symmetry gate

Give both arms the same realized signal, information budget/allocation, report noise, cost/budget, eligibility, and portfolio rule; set `lambda=a=w=beta=0`, `b=1`, and remove residual noise. Their portfolios must then be identical world-by-world and `Delta_O=0`. Next add one asymmetry at a time in a full factorial ablation, using paired worlds/common random numbers and reporting the paired effect of activating the pathway. A second benchmark should preserve the intended difference in information routing while neutralizing bias; that benchmark need not be parity, and its residual difference should be labeled the coverage/allocation mechanism rather than “hidden asymmetry.”

Also add dead-parameter and literal-constant tests. The unused `eta` in the current E5 configuration shows that a successful run is not evidence that a named parameter is operative (`scripts/simulation/e5-sp-symmetry-gate.mjs:29-30,33-49`).

## 6. Concrete pre-registration blockers and completion criteria

1. **Write the actual DGP.** Give generating and observation equations for world/value, reach, distributed MNAR reporting, central estimation, credit, costs, eligibility, portfolio selection, and the oracle. Resolve mean-versus-total and gross-versus-net value.
2. **Create the executable registry/crosswalk.** One row per governing quantity, including fixed numerical constants and simulation settings; include definition, unit, target, support, joint dependence, exact provenance, extraction artifact, uncertainty, transport, identification restriction, status, and code symbol.
3. **Repair provenance labels.** Mark all unmeasured target inputs `ASSUMED`; put source evidence and transport in separate columns. Add explicit transport parameters/sets rather than treating a caveat as a substitute for a bridge.
4. **Repair identification.** Index planner position by project or collapse `a+w*d` to one estimable intercept. State what data identify every swept axis. Do not call an unrestricted unknown “partially identified.”
5. **Build a fresh v2 engine.** The old engines do not implement the claimed model. The fresh engine must reject unregistered literals and unused parameters and must ship the pathway, recovery, and joint-symmetry tests above.
6. **Do not freeze or run the parity surface until 1–5 are complete.** Otherwise the “outcome-blind” support will still be a researcher-chosen box over incompletely defined and nonidentified coordinates.

The candid bottom line is: v2 has learned the vocabulary of DGP completeness and provenance, but it has not yet delivered either artifact. Its structural source literature is useful for motivating candidate model forms. It does not currently identify the public-project parameter ranges that locate the parity boundary.
