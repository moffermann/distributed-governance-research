# Dimension 6 — dependence-aware sensitivity

## Verdict

**PARTIAL; must-fix 6 is not cleared, and the design is not ready to preregister.** V2 correctly rejects independent-input Sobol indices, demotes Shapley effects to non-causal secondary summaries, and says to separate inner from outer uncertainty (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v2.md:63-72`). Those are the right principles and materially improve on v1's defect (`audits/2026-07-11-v1.14-design/CRITIQUE_SUMMARY.md:78-91`). But there is still no joint law, admissible set, dependence graph, conditional sampler, Shapley value function, outer target, or nested estimator. “Joint distribution / admissible set” is a promise, not a design.

The most important distinction is missing: the conditional frontier \(m(\theta)=E_W[\Delta_O\mid\theta]=0\) does **not** require a probability distribution over \(\theta\), but the probability mass on either side, named-scenario prevalence, and every Shapley effect do. V2 should preserve the frontier as the primary, measure-free object and treat all probability-weighted summaries as explicitly law-contingent.

## Specific issues

### 1. The proposed dependence restriction is both incomplete and directionally wrong

V2 gives only two examples: tie `w`'s sign to `v_p-Sbar` and tie the format component to `a` (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v2.md:63-66`). Neither is an executable joint model.

More seriously, `w`'s **sign must not be tied to** the planner gap's sign. The empirical mapping says `w>0`, while `v_p-Sbar` supplies the direction (`audits/2026-07-11-v1.14-design/E4-empirical-anchors.md:39-55`; `research/e4-value-estimation-foundation.md:30-35`). Setting `sign(w)=sign(v_p-Sbar)` makes their product nonnegative, converting directional projection into a one-way upward shift and deleting the under-prediction half of the mechanism. The correct restriction is `w >= 0`, `q_j = v_{pj}-Sbar_j` signed, and `sign(w*q_j)=sign(q_j)` when `w>0`. Yet `q_j`, the planner-position distribution, and their common causes are absent from the registered `theta` (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v2.md:48-61`), so the stated joint law cannot even express the claimed dependence.

The format component has the same problem. V2 lists a “format/reducible share of `a`” in the registry but omits it from `theta` (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v2.md:48-61`) and never states whether `a = a_irreducible + a_format`, whether a format intervention deterministically scales one component, or whether the two components are stochastic. Sampling total `a` and its share as if they were free inputs creates impossible decompositions; including both a component and its deterministic total in Shapley attribution double-counts one degree of freedom.

Finally, `A` is put inside `theta` (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v2.md:48-50`) even though the design correctly says alternative aggregation rules are separate normative estimands, not draws from a prior (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v2.md:16-20`). A Shapley analysis that randomizes over `A` would turn a normative choice into apparent empirical variance.

### 2. The joint choice can determine the headline even with identical marginals

The shipped E4-v4 special case gives the exact parity law `beta = 1-gamma` (`scripts/simulation/e4-v4-symmetric-frontier.mjs:82-85`). Let `U` be uniform on `[0,1]`, set `gamma=U`, and keep `beta` marginally uniform under each of these copulas:

- `beta=(1-U-epsilon) mod 1`: \(P(\beta<1-\gamma)=1-\epsilon\);
- `beta=(1-U+epsilon) mod 1`: \(P(\beta<1-\gamma)=\epsilon\);
- `beta=1-U`: all mass is exactly on parity.

Thus, with the **same uniform marginal for each parameter**, `epsilon=.01` yields a 99% distributed-win mass under one dependence structure, 1% under another, and 100% parity under the limiting countermonotone structure. I independently checked these values over 1,000,000 equally spaced `U` draws. Independent uniforms would yield 50%. The copula alone can therefore choose the region-mass headline.

This does not move the mathematical frontier. It determines which parts of the frontier are admissible and how much probability sits on each side. That is why the foundation's proposed headline about “how large each region is” (`research/e4-value-estimation-foundation.md:58-63`) is not identified until a joint measure is defended. Under a mere admissible set, “large” can mean geometric volume only after choosing a coordinate system and base measure; it is not a real-world prevalence.

The shipped engines demonstrate the inherited risk rather than solve it. E4-v4 takes a full `gamma x beta` grid and a full 54-point Cartesian box (`scripts/simulation/e4-v4-symmetric-frontier.mjs:55-64`) and reports the equally weighted fraction of box points favoring distributed (`scripts/simulation/e4-v4-symmetric-frontier.mjs:87-93`). E5 fixes `(p,beta,tau)` into two hand-built regimes (`scripts/simulation/e5-sp-symmetry-gate.mjs:116-117`), then gives equal weight to selected `lambda x rho x h` cells when pooling (`scripts/simulation/e5-sp-symmetry-gate.mjs:141-149`). Neither engine implements a dependence-aware joint law or an admissible-set analysis. Their pooled summaries are conditional on silent weighting measures and cannot validate v2's new method.

### 3. “Joint distribution / admissible set” presents non-interchangeable alternatives

A Shapley effect needs a probability law because its value function uses conditional expectations or conditional variances. A set of admissible parameter vectors supplies no probabilities and therefore no unique Shapley effect. Conversely, assigning a single probability law to poorly transported inputs creates precision that the evidence does not contain. Both source documents explicitly admit that political-opinion magnitudes do not identify project-value magnitudes (`audits/2026-07-11-v1.14-design/E4-empirical-anchors.md:66-71`; `research/e4-value-estimation-foundation.md:71-76`).

V2 must choose the inferential interpretation by layer:

- use a **set** for unsupported transport/model-form uncertainty and report robust lower/upper conclusions over that set;
- use a **distribution** only for genuinely stochastic jurisdiction/world heterogeneity or an explicitly elicited epistemic distribution;
- never silently turn a range into a uniform prior;
- never compute one Shapley ranking over the union of models, normative `A` choices, and transport assumptions.

Without this separation, the analyst can obtain a preferred result by choosing a copula, a base measure on the admissible set, or a mixture weight across model forms.

### 4. Dependence-aware Shapley is valid only after several missing choices are frozen

Calling the effects “variance attribution” rather than causal drivers is correct (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v2.md:67-69`), but insufficient. Under dependence, several Shapley constructions answer different questions. V2 does not state the output being decomposed, the cooperative-game value function, the conditioning convention, the conditional sampler, grouping, or treatment of deterministic constraints.

For example, for the common closed conditional-variance game, let `Y=X1` and `X2=X1`. Although `X2` is absent from the response equation, dependent-input Shapley allocates one half of the variance to each duplicate because either variable perfectly predicts `Y`. That is a valid predictive attribution, but not evidence that `X2` is a structural driver. The same ambiguity will arise if total `a` and its components, or `w` and a deterministic signed projection term, are entered as separate coordinates. Rankings will also change under a reparameterization from `(w,q)` to the product `z=w*q`.

The Shapley target must be the outer response `m(theta)=E_W[Delta_O|theta]`, not raw `Delta_O(theta,W)`. Otherwise irreducible world noise enters the denominator and changes every “importance” share when the number or variance of inner worlds changes. `A` must be stratified, model/transport variants must be reported separately, and deterministically linked variables should be grouped by primitive causal block. At minimum preregister

`v(S) = Var_P(E_P[m(theta) | theta_S]) / Var_P(m(theta))`

for each named joint law `P`, state the conditional-sampling algorithm and diagnostics, and report Monte Carlo uncertainty for the Shapley estimates. If no defensible `P` exists, omit Shapley rather than manufacture it from a uniform admissible box.

### 5. Inner-versus-outer separation is stated but not operationalized

V2 says a world-cluster interval covers only simulation variability (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v2.md:70-71`), but it does not define the nested estimators or the risk functional used to classify parity. That omission matters because the shipped E5 engine reuses the same seeds across all cells (`scripts/simulation/e5-sp-symmetry-gate.mjs:102-108`), concatenates those correlated cell results (`scripts/simulation/e5-sp-symmetry-gate.mjs:141-149`), and its bootstrap resamples individual stored observations rather than entire common-random-number world clusters across `theta` (`scripts/simulation/e5-sp-symmetry-gate.mjs:21-23`). That is not an outer-uncertainty interval and does not preserve the cross-cell dependence created by common random numbers.

The preregistration must define, for each fixed `theta`, `R` replicated worlds and

`m_hat(theta) = R^-1 * sum_r Delta_O(theta,W_r)`.

Use common random numbers to estimate contrasts and locate the frontier, but resample a world seed as one cluster containing that seed's outcomes at **all** evaluated `theta`. Report the Monte Carlo standard error of `m_hat(theta)` and frontier-location error separately from variation of `m(theta)` under an outer law. Anchored-parameter, transport, and model-form uncertainty are not made smaller by increasing `R`. Emulator approximation and frontier root-finding error need their own convergence checks.

### 6. “Before running” is not an adequate outcome-blind safeguard here

The proposed safeguards are only the label “outcome-blind” on ranges and a promise to preregister the joint/grid before running (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v2.md:48-50`; `audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v2.md:72`). But the response surface's direction is already known from the shipped engines: E4-v4 hard-codes and prints the analytic crossover (`scripts/simulation/e4-v4-symmetric-frontier.mjs:82-85`), while E5 has already swept selected axes and evaluates a frozen primary domain (`scripts/simulation/e5-sp-symmetry-gate.mjs:146-165`). The team cannot become outcome-blind merely by freezing a new grid after seeing these results. Named “high-projection / weak-proxy” and “low-projection / strong-proxy” scenarios (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v2.md:67-68`) are also outcome-aligned labels unless their inclusion and weights come from external data.

All work to date should be labeled exploratory. A confirmatory preregistration needs an auditable source-to-support file frozen before the replacement engine's outputs are exposed, preferably set or reviewed by someone insulated from those outputs. Admissibility constraints must refer only to institutional/data-generating facts, never to `Delta_O`, parity distance, or which arm wins. Freeze all candidate dependence structures and report every one; do not select the structure with the most stable or attractive Shapley ranking after the run. A held-out seed is useful for code validation but cannot repair post-outcome choice of supports or copulas.

## Required fixes before preregistration

1. **Separate the frontier from weighting.** Evaluate `m(theta)` on a predeclared Cartesian envelope broad enough to show both sides. Overlay, rather than replace it with, externally justified admissible sets. Lead with the frontier and robust sign; never call geometric box volume prevalence.
2. **Repair and complete the primitive registry.** Add signed `q_j=v_pj-Sbar_j`, planner/project common causes, and the exact `a` decomposition. Constrain `w>=0`; do not tie its sign to `q_j`. Remove `A` from probabilistic sensitivity and run a separate analysis for each normative aggregation rule.
3. **Preregister dependence as mathematics, not adjectives.** For every candidate law/set, publish marginals, copula or structural equations, deterministic constraints, support, provenance, transport mapping, scenario weights, and conditional-sampling code. Include both favorable and adverse empirically defensible dependence structures.
4. **Use robust bounds for ignorance.** For a preregistered family `Pset`, report `[inf_P P_P(m(theta)>delta), sup_P P_P(m(theta)>delta)]` and the corresponding central-win interval. If that interval is wide, the result is dependence-unidentified. For a pure admissible set with no probabilities, report robust central/distributed/parity subsets and no win probability.
5. **Freeze a nested Monte Carlo protocol.** Define the conditional mean (or another explicitly justified risk functional), replication count and stopping rule, common-random-number coupling, seed-cluster bootstrap, emulator validation, and frontier-location error. Keep simulation, parameter, model-form, and transport uncertainty in separate tables.
6. **Make Shapley genuinely secondary and law-specific.** Use `m(theta)`, state the exact value function, group deterministically linked primitives, validate conditional draws, give estimation intervals, and show results for every preregistered joint law. Do not average across `A` or model forms. Omit Shapley if no probability law is defensible.
7. **Strengthen the outcome-blind firewall.** Declare existing results exploratory; freeze source extraction, supports, dependence candidates, weights, exclusions, scenario definitions, code hash, seeds, and decision rules before exposing replacement-engine results. Maintain an immutable audit trail and report all frozen variants.

The single sharpest improvement is to make the **conditional frontier invariant and primary**, then place externally justified admissible sets and law-specific probability mass on top of it as visibly secondary layers. That prevents a convenient copula from becoming the result.
