# Dimension 3 — complete executable DGP

## Verdict

**NOT CLEARED.** V3 is a substantial advance over v2's TODO list: it names a project/value generator, person-level response rule, central signal, credit ranking, budget, greedy selection, registry, and intended tests (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:44-64,92-98`). But §3 is still not a complete executable DGP. Its distributed estimate is on a different scale from its declared truth, the reach/population process and several “stated laws” are not stated, the hurdle produces conflicting eligibility and scoring rules, the format parameter has no operational equation, and the proposed zero controls do not make the arms symmetric. The fresh replacement engine implementing this design is itself still only a future specification (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:108-114`).

Prior blocker (2), “no complete executable v2 DGP,” therefore moves from **absent** to **materially specified but not cleared**. The design should not be frozen or called runnable until the issues below are resolved.

## Component audit

| Component | Status | Reason |
|---|---|---|
| World/projects | **Partial** | `K`, costs, and budget are present, but population size, membership/reach draws, and joint dependencies are absent. |
| `F` / individual value | **Partial** | The location model is present, but the population over which the mean is taken and scale/variance conventions are not. |
| Reach | **Not executable** | “`ρ_j` … from a stated law” names a placeholder, not the law or the interested-person indicator process. |
| Costs/budget | **Mostly specified** | The marginal cost law and budget formula are given, but supports/dependencies and admissible `φ` remain registry work. |
| Distributed MNAR observation | **Internally inconsistent** | It estimates a sum while truth is a mean and is mislabeled Horvitz–Thompson despite using the wrong inclusion weight for negative values. |
| Central model | **Equation present; identification claim false as written** | A project subscript is necessary, but does not by itself separate `a`, `b`, and `w`; under the natural reading `S̄_j=S_j`, they collapse exactly. |
| Credit | **Placeholder** | `P_j` is only “from a stated law”; its dependence on value, cost, reach, and central error is unstated. |
| Selection/oracle | **Not unique** | The distributed score is missing and the hurdle rule conflicts with the displayed eligibility/ranking rules. |
| Registry | **Partial** | Much improved, but it omits population, format components/regime, information allocation, numerical conventions, and test/root/bootstrap constants. |
| Negative controls | **Fail** | `a=w=λ=0` leaves slope, MNAR, scale, noise aggregation, and information-route asymmetries active. |

## Ranked issues and fixes

### 1. Blocking — `S_j` and `M^D_j` are in different units

V3 declares `S_j=mean_i(u_ij)` (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:47-48`) but declares `M^D_j=Σreports/p` (`DESIGN_SKETCH_v3.md:49-50`). Conditional on realized values and ignoring zero-mean report noise,

```text
E[M^D_j | u] = Σ_{u_ij≥0} u_ij + (1-β) Σ_{u_ij<0} u_ij.
```

Even at `β=0`, this equals `n_j S_j`, not `S_j`. Heterogeneous reach therefore gives the distributed arm a reach-weighted total signal while the central arm estimates a mean. At the supposed clean point `a=w=λ=0, b=1, β=0, τ_C=τ_D=0`, one arm ranks approximately by `n_jS_j` and the other by `S_j`; their portfolios need not coincide. This alone disproves the proposed symmetry claim at `DESIGN_SKETCH_v3.md:63-64`.

The “Horvitz–Thompson” label is also incorrect. With inclusion probabilities `p` for nonnegative values and `p(1-β)` for negative values, a Horvitz–Thompson total would divide each observed negative value by `p(1-β)`. Dividing every report by `p` deliberately preserves adverse-voice attenuation; that may be the intended behavioral estimator, but it is not HT for the true total or mean.

**Fix:** choose one value unit and use it everywhere. The clean primary-mean version is

```text
S_j = n_j^{-1} Σ_{i:I_ij=1} u_ij
M^D_j = n_j^{-1} Σ_{i:I_ij=1} R_ij (u_ij+e_ij) / p
```

and explicitly call `M^D` the **baseline-expanded, MNAR-biased mean estimator**. Its conditional expectation should be printed in the preregistration. If total affected-person value is the scientific target instead, redefine `S_j`, `M^C_j`, delivered value, and the welfare-scale discussion as totals. Do not mix the two.

### 2. Blocking — reach and matched information are not generated

“Reach `ρ_j` (interested population) from a stated law” is not a runnable equation (`DESIGN_SKETCH_v3.md:45-46`). There is no population size `N`, no indicator `I_ij`, no rule for valuations of uninterested people, no distribution parameters for reach, and no dependence of reach on cost, quality, or credit. `N` is also absent from the supposedly exhaustive `θ_all` list (`DESIGN_SKETCH_v3.md:92-95`).

This is particularly consequential because the object is advertised as **matched-information** selection (`DESIGN_SKETCH_v3.md:8-10`), yet §3 gives the distributed arm a random number of person-level reports while giving the central arm a direct noisy affine function of true `S_j`. No central appraisal budget, number of appraisers, allocation rule, or information-cost matching appears in §3 or `θ_all`. The legacy E5 gate did operationalize one such convention—expected total reports and an evenly spread, rounded central sample (`scripts/simulation/e5-sp-symmetry-gate.mjs:68-90`)—but v3 neither adopts nor replaces it.

**Fix:** state a complete sampling hierarchy, for example `N`, `I_ij|r_j ~ Bernoulli(r_j)`, `r_j~F_r`, `n_j=Σ_iI_ij`, and `u_ij|I_ij=1,q_j`; specify what happens at `n_j=0`. Add the exact common information budget and allocation rules for both arms, including integer rounding. Register every parameter and all permitted dependencies among `(q_j,r_j,c_j,P_j,v_pj)`.

### 3. Blocking — project indexing does not identify `w` from `a` (or `b`)

V3 asserts that `w(v_p-S̄_j)` is project-indexed “so `w` is separately identified from the intercept `a`” (`DESIGN_SKETCH_v3.md:53-57`). Project indexing is necessary, not sufficient. The design defines `S_j` as the project-population mean (`DESIGN_SKETCH_v3.md:47-48`) and then describes `S̄_j` as the project-population mean (`DESIGN_SKETCH_v3.md:55-56`). Under the natural reading `S̄_j=S_j`,

```text
M^C_j = (a+w v_p) + (b-w)S_j + η_j.
```

For any scalar `t`, the transformation

```text
(a,b,w) -> (a-t v_p, b+t, w+t)
```

leaves every `M^C_j` exactly unchanged. Eligibility, z-scoring, nonlinear greedy selection, and delivered value are deterministic coarsenings of those same signals; they cannot recover information absent from `M^C`. Selection nonlinearity therefore does not rescue identification.

If `S̄_j` instead means the superpopulation mean `q_j` while `S_j` is a finite interested-sample mean, say so. Then separation requires full-rank independent variation in `S_j` and `S̄_j`, direct observation of planner forecasts, and an error model. With `v_p` fixed per run, planner-specific intercept and `wv_p` remain entangled unless variation across planners/projects or restrictions identify them. Selection sets alone are still weaker than the direct bridge measurements.

**Fix:** define distinct, observed bridge variables—preferably project-specific planner own value `v_pj`, population target `μ_j`, and planner forecast `M^C_pj`—and state the rank condition and observed moments that identify or bound each coefficient. If the intended simulation has `S̄_j=S_j` and fixed `v_p`, reparameterize honestly to the identified composites `α=a+wv_p` and `γ=b-w`; do not plot `a` and `w` as distinct structural axes.

### 4. Blocking — selection and hurdle equations conflict

Central ranking is displayed as `z(M^C_j/c_j)` mixed with `z(P_j/c_j)` (`DESIGN_SKETCH_v3.md:58-59`), and eligibility is `M^·_j>0` (`DESIGN_SKETCH_v3.md:60-61`). The next sentence says `h` enters eligibility/scoring as `S_j-hc_j` uniformly across arms (`DESIGN_SKETCH_v3.md:61-62`). These statements do not determine whether central eligibility is `M^C_j>0` or `M^C_j-hc_j>0`, whether the central value score is `M^C_j/c_j` or `(M^C_j-hc_j)/c_j`, or why an institution would use unobserved true `S_j` in its own gate. The distributed ranking score and oracle equations are not displayed at all. Delivered value is `ΣS_j` in §1 (`DESIGN_SKETCH_v3.md:19-24`) even though the hurdle language can also be read as net delivered value.

Reproducibility additionally requires the z-score reference set (all projects or eligible projects), variance convention/fallback, tie-break rule, and exact residual-budget behavior. The old engine demonstrates that these are result-governing choices, not implementation trivia: it fixes a population-SD z-score with fallback one, own-estimate net gates, and exact greedy residual fill (`scripts/simulation/e5-sp-symmetry-gate.mjs:24-27,52-57,68-98`). Those rules cannot silently carry forward because that engine implements a different model.

**Fix:** give one equation each for `E^D_j`, `R^D_j`, `E^C_j`, `R^C_j`, `E^O_j`, `R^O_j`, funded sets, and delivered values. If `h` is an eligibility opportunity-cost hurdle, a coherent gross-value version is `E^k_j=1{M^k_j-hc_j>0}`, value component `(M^k_j-hc_j)/c_j`, oracle analog with `S_j`, while delivered score remains declared gross `S_j`; state that choice explicitly.

### 5. Major — several “laws” and constants remain placeholders outside `θ_all`

`P_j` and reach are merely “from a stated law” (`DESIGN_SKETCH_v3.md:45-46,58-59`); the text never states those laws. The joint law and independence/correlation restrictions for costs, qualities, reach, credit, planner position, and both noise processes are also absent. `N(m_q,s_q)`, `N(0,τ_D)`, and `N(0,τ_C)` do not say whether the second argument is variance or standard deviation (`DESIGN_SKETCH_v3.md:47-54`).

The format decomposition is not executable either. `a=κa_fmt+(1-κ)a_irr` is a weighted average, not a split of total `a`, and neither `a_fmt` nor `a_irr` is in `θ_all` (`DESIGN_SKETCH_v3.md:57,92-95`). No format-regime variable activates or removes the format component, so `κ` is dead with respect to the displayed central equation once `a` is supplied. That contradicts the promised unused-parameter failure (`DESIGN_SKETCH_v3.md:108-111`).

Numerical behavior is also governed by unregistered choices: bootstrap replications and interval level, common-random-number coupling, root-finder tolerance/bracketing/failure rule, stopping precision, tie-breaking, and z-score fallback. The legacy gate contains a cautionary example: `WP.eta` is registered but unused (`scripts/simulation/e5-sp-symmetry-gate.mjs:29-30,33-49`).

**Fix:** replace compound placeholders such as “`P-law`” with an executable, recursively validated configuration schema containing all distribution parameters and dependencies. Define format components as `a=a_fmt+a_res`, with `a_fmt=κa` and `a_res=(1-κ)a` only if that signed proportional restriction is truly intended, plus a format intervention variable. Add all numerical-analysis constants to `θ_all` (or a separately exhaustive `ν_all` computational registry) and require zero unregistered literals and zero unused fields.

### 6. Blocking — the negative controls do not prove symmetry

The proposed joint setting `w=0,a=0,λ=0` with “symmetric noise” leaves all of the following active: `b≠1`, adverse response `β`, participation sampling `p`, the mean/sum scale mismatch, unequal central/distributed noise aggregation, and unequal information allocation (`DESIGN_SKETCH_v3.md:47-64`). Therefore `m→0` is not implied. Nor does setting each of `w`, `a`, or `λ` to zero individually isolate a channel; every other asymmetry remains.

The shipped gate already illustrates the logical error. Its `λ=0` control retains routing and reporting differences and produces pooled median `Δ_O=0.016`, which the old threshold labels “ok” rather than parity (`audits/2026-07-11-v1.14-design/canonical-symmetry-gate-rerun.txt:82-90`; control code at `scripts/simulation/e5-sp-symmetry-gate.mjs:140-166`). It cannot validate the v3 model because its central estimator is a reach-scaled sampled mean plus credit, not `a+bS+w(v_p-S̄)` (`scripts/simulation/e5-sp-symmetry-gate.mjs:77-90`). The E4-v4 engine is further removed: it generates total value and harm attenuation (`scripts/simulation/e4-v4-symmetric-frontier.mjs:26-50`).

**Fix:** preregister three distinct test families:

1. **Signal recovery:** `a=w=0,b=1,τ_C=0` gives `M^C_j=S_j`; `p=1,β=0,τ_D=0` with proper mean normalization gives `M^D_j=S_j`.
2. **Exact joint symmetry:** feed both arms the same realized signal, gate, score, budget, tie-break, and greedy rule. Require identical funded sets and `D_W=C_W` world-by-world—not merely `m≈0` after Monte Carlo.
3. **Pathway inactivation:** at `λ=0`, arbitrary changes to `P` have no effect; at `w=0`, changes to planner position have no effect; at zero format component, format treatment has no effect; at `β=0`, response probability is sign-invariant. Then add one asymmetry at a time with paired worlds.

A separate bias-neutral **routing benchmark** may preserve different information allocation. It is allowed to have nonzero `m`; call that the coverage/allocation effect, not a failed symmetry test.

## Minimum completion criteria

1. Resolve mean versus total value and write the induced expectation of the MNAR distributed estimator.
2. Specify `N`, interested-person indicators, reach law, no-reach behavior, and matched information allocation.
3. Define `S̄_j` separately from `S_j` or collapse the observationally equivalent central coefficients; state identification moments/rank conditions.
4. Write complete score, eligibility, oracle, hurdle, greedy, z-score, and delivered-value equations.
5. Make every stochastic and numerical law executable and recursively registered, including the format regime/components.
6. Replace the three-zero slogan with signal-recovery, exact joint-symmetry, and pathway-inactivation tests.
7. Build the fresh v3 engine and generated crosswalk before freezing supports or calling this DGP executable.

## Bottom line

V3 has the right **inventory** of a DGP, but not yet a single unambiguous DGP. The sharpest repair is to resolve the mean/total mismatch and then write a common signal-and-selection interface for all three arms. That one change exposes the required reach normalization, makes exact symmetry testable, and prevents a hidden reach advantage from being mistaken for the credit-versus-coverage mechanism.
