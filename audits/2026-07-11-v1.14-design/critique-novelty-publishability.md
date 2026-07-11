# Critique 6 — novelty and publishability

## Verdict

**Not publishable as a standalone contribution in the proposed form.** The proposed Monte Carlo/Sobol surface is a useful internal model audit and could be a strong appendix or reproducibility supplement to the architecture paper. It is not, by itself, a new method, a new mechanism-design result, an empirical estimate, or a validated comparative-institutions result. As written, v1.14 would be accurately summarized as: **“we applied standard global sensitivity analysis to one uncalibrated stochastic microsimulation and reported the resulting response surface.”**

The genuine possible contribution is narrower and harder: derive a **credit-versus-coverage dominance frontier** for two information-allocation mechanisms under matched information budgets, then constrain that frontier with observable moments from real participatory-budgeting/appraisal data. That would connect an institutional mechanism theorem to an empirically identified or partially identified region. The present sketch supplies neither the theorem nor the identification.

## Severity-ranked, quotable issues

### 1. CRITICAL — The proposed method is textbook prior art, not a contribution

> **“A Monte Carlo plausibility prior, first- and total-order Sobol indices, a low-tail output, and named scenarios are an application of established sensitivity-analysis tools. Their use on this model is not methodologically novel.”**

The entire proposed method is Monte Carlo over inputs, Sobol indices, a minimum/quantile, conditional profiles, an expectation, and a favorable corner (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH.md:54-63`). This is precisely the established computer-model sensitivity workflow. Oakley and O'Hagan developed probabilistic sensitivity analysis over joint input distributions two decades ago ([JRSS B, 2004](https://doi.org/10.1111/j.1467-9868.2004.05304.x)). Fonoberova, Fonoberov, and Mezić explicitly proposed global sensitivity analysis for agent-based models, including identifying influential parameters and their contributions to output variance ([Reliability Engineering & System Safety, 2013](https://doi.org/10.1016/j.ress.2013.04.004)). ten Broeke, van Voorn, and Ligtenberg directly compared Sobol decomposition with other sensitivity methods for ABMs ([JASSS, 2016](https://doi.org/10.18564/jasss.2857)).

Worse, ten Broeke et al. find that Sobol indices aggregate over the whole parameter space, do not reveal the mechanism behind influence, and do not by themselves establish robustness of model patterns. That directly undercuts the sketch's suggestion that Sobol rankings plus a floor turn the exercise into a mechanism contribution.

**Concrete fix:** Do not sell v1.14 as methodological novelty. Either (a) explicitly demote it to a robustness appendix for the architecture-and-mechanism paper, or (b) contribute a genuinely new inferential object—e.g., an estimable robust-dominance bound with coverage guarantees—and benchmark it against Sobol, scenario discovery, and conventional worst-case analysis on multiple models. Merely implementing known tools cleanly is not enough.

### 2. CRITICAL — The “new surface” mostly re-expresses a grid the repository already ran

> **“v1.14 currently adds resolution and presentation, not a new scientific estimand: the existing gate already sweeps the same mechanism axes and reports the same directional comparative statics.”**

The current confirmatory gate already sweeps credit pressure, proxy/value alignment, and the opportunity-cost hurdle, with separate participation, voice-bias, and noise regimes (`drafts/paper.md:600-604`; `scripts/simulation/e5-sp-symmetry-gate.mjs:116-117`). It already reports that the advantage rises with credit pressure and falls as credit aligns with value (`drafts/paper.md:609-617`). The sketch's proposed vector—proxy quality, planner bias, central noise, adverse voice bias, participation, distributed noise, valuation dispersion, and aggregation (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH.md:36-52`)—mainly densifies or renames that apparatus.

The paper correctly says its load-bearing contribution is the architecture and the **direction** of the mechanism, not a multiplier (`drafts/paper.md:546-566`). Turning the existing grid into a smoother plot does not change that assessment.

**Concrete fix:** Before preregistration, write a one-paragraph “contribution delta” that names what proposition, identified quantity, dataset, decision rule, or institutional comparison becomes available under v1.14 that is unavailable from the existing gate. If the answer is only “global parameter ranking and prettier conditional summaries,” keep it as a supplement and do not revise the paper's contribution claim around it.

### 3. CRITICAL — A preregistered “plausibility prior” does not convert assumptions into uncertainty quantification about the world

> **“Pre-registration freezes analyst judgment; it does not validate that judgment. A posterior-looking interval generated from an assumed prior over an acknowledged stylized DGP is still uncertainty about the analyst's simulator, not uncertainty about institutional performance.”**

The controlling contract says the value units, hurdle, and project-generating distribution are uncalibrated; the model omits strategic reporting, endogenous proposals, complementarities, incidence, and general equilibrium (`research/claim-and-estimand-contract.md:47-56`). It also says that until the value distribution, appraisal error, sponsor/public-value relationship, and delivery effects are measured, any Δ is conditional simulation output, not an estimated effect (`research/claim-and-estimand-contract.md:59-70`). The paper is even more explicit: no specific PB dataset calibrates the gate, remaining parameters are plausible rather than measured, and no pilot has run (`drafts/paper.md:1265-1275`).

The computer-model literature's threshold is higher. Kennedy and O'Hagan's calibration framework uses observations to learn inputs and explicitly represents model discrepancy between simulator and reality ([JRSS B, 2001](https://doi.org/10.1111/1467-9868.00294)). v1.14 proposes neither an observation model nor discrepancy, validation, or held-out prediction. It therefore propagates stipulated uncertainty without learning anything about whether the simulator represents the target institution.

**Concrete fix:** Replace the “plausibility prior” with one of two honest objects:

1. an **elicited scenario distribution**, explicitly described as stakeholder/analyst belief and used only for model exploration; or
2. a **posterior/identified set** constrained by linked empirical moments: citizen-level preferences or ballots, affected-party coverage by sign and subgroup, planner/appraisal rankings, proxy-to-ex-post-outcome relationships, report noise, costs, and realized project outcomes.

For a publishable empirical claim, pre-specify calibration data, an observation model, model discrepancy, and a genuinely held-out validation task. Report whether the model predicts portfolio choices/outcomes out of sample, not merely whether it reproduces its own draws.

### 4. CRITICAL — The proposed “floor” is not a robust-mechanism result

> **“A fifth percentile under one chosen prior is not an institutional guarantee, and a minimum over an analyst-drawn box is not a theorem. Both are artifacts of the chosen support unless the support is empirically or axiomatically identified.”**

The sketch equivocates between a minimum and a fifth percentile (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH.md:58-59`). Those are different objects: a worst case over a set versus a probability statement under a distribution. Neither establishes mechanism robustness when the set/distribution is chosen rather than identified.

This falls well short of the relevant mechanism-design benchmark. Bergemann and Morris study robustness by varying type spaces/information structures and deriving when implementation survives that uncertainty ([Econometrica, 2005](https://doi.org/10.1111/j.1468-0262.2005.00638.x)). v1.14 keeps one fixed behavioral/DGP architecture and averages over its knobs. It should not be positioned as “robust mechanism design.”

The repository itself once recognized the right upgrade: an analytical result demotes the simulation to illustration and degradation quantification (`research/e4-analytical-backbone.md:26-34`). But that note's principal parity mechanism is now explicitly superseded/retired for magnitude and relegated to a rare special case (`research/e4-analytical-backbone.md:3-24`). The new credit-versus-coverage mechanism lacks an equivalent theorem.

**Concrete fix:** Define mechanisms \(M_D\) and \(M_C\), an environment class \(\mathcal E\), and observable restrictions \(m\). Derive a sharp bound

\[
L(m)=\inf_{e\in\mathcal E(m)}\;E_e[(V(M_D)-V(M_C))/O].
\]

Characterize when \(L(m)>0\), when the upper bound is below zero, and where the sign is unidentified. The restrictions in \(\mathcal E(m)\) must be justified by observables or explicit axioms, not “plausibility.” A sharp partial-identification/dominance result would be scientifically different from a Sobol plot.

### 5. HIGH — The binary comparator omits the actual participatory-budgeting mechanism-design frontier

> **“A bespoke distributed estimator beating a bespoke central estimator is not yet comparative institutional analysis; publishable comparison requires credible alternative rules, including ones already studied and deployed.”**

The paper presents quadratic funding as the closest citizen-allocation mechanism and distinguishes Core v0's truncation rule (`drafts/paper.md:250-259`), but that is not an adequate map of the participatory-budgeting mechanism literature. Benade et al. analytically compare knapsack, rankings, value-for-money rankings, and threshold approval and test them on real PB election data ([AAAI, 2017](https://doi.org/10.1609/aaai.v31i1.10563)). Goel et al. provide strategy-proofness results for knapsack voting and evidence from actual municipal deployments ([ACM TEAC, 2019](https://doi.org/10.1145/3340230)). Those papers earn contribution through formal rule properties and/or real data—not through sensitivity analysis of a preferred rule.

v1.14 compares only “coverage-routed citizen reports” with “even-bandwidth central appraisal plus credit pressure.” That two-arm construction can make the sign depend on how those two estimators are authored, without telling a municipality whether Core v0 beats approval PB, knapsack voting, delegated variants, stratified sampling/citizen assemblies, a central planner using adaptive rather than even appraisal, or hybrid expert-citizen rules.

**Concrete fix:** Add at least four credible comparators under the same information/cost budget: value-only adaptive central appraisal; approval PB; knapsack/value-for-money PB; and a stratified or hybrid citizen-expert estimator. Use real ballot/appraisal data where possible. Report regret and welfare relative to the same declared social objective, plus distributional and participation outcomes. If Core v0's advantage vanishes against an ordinary adaptive central or established PB rule, that is the important result.

### 6. HIGH — The engine is closer to a static stochastic microsimulation than a substantively agent-based model

> **“There are people-shaped random draws, but no strategic agents, adaptation, social interaction, proposal response, or institutional feedback in the selection gate. Calling Sobol analysis here an ABM contribution invites an avoidable reviewer attack.”**

In each world, the gate independently generates project interest and valuations, constructs a correlated credit score, and sums valuations (`scripts/simulation/e5-sp-symmetry-gate.mjs:33-49`). Distributed participation is then an independent Bernoulli report decision conditional only on valuation sign (`scripts/simulation/e5-sp-symmetry-gate.mjs:68-75`). There is no updating, interaction, strategic report, endogenous proposal supply, or repeated institutional response. The repository concedes those missing processes (`research/claim-and-estimand-contract.md:51-52`).

This matters for novelty because existing ABM sensitivity work addresses nonlinear interactions, feedback, emergent properties, and temporal patterns; ten Broeke et al. explicitly treat those as the reasons ordinary sensitivity summaries may be insufficient. v1.14 has no such emergent object to explain. Its main uncertainty is authored parametric uncertainty in a static selection rule.

**Concrete fix:** Call the gate a **stochastic comparative microsimulation** unless genuine adaptive agents are added. If the paper wants an ABM contribution, introduce and validate at least the load-bearing behavioral feedbacks—strategic reporting, endogenous proposal generation, learning/adaptation, mobilization/voice correlation, and repeated planner response—and analyze temporal/regime outcomes. Do not add complexity merely for the label; for the current question, an analytic/microsimulation paper is cleaner.

### 7. HIGH — Parameter sensitivity leaves the most dangerous uncertainty outside the analysis

> **“The largest uncertainty is not where the knobs sit; it is whether the authored model class is the right one. v1.14 varies parameters while holding fixed the assumptions most capable of manufacturing comparative advantage.”**

The sketch sweeps parameters inside a single model but holds fixed the existence and form of latent cardinal value, the project generator, greedy portfolio choice, exogenous projects, non-strategic reports, the planner's scoring equation, and the arms' information-routing rules (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH.md:15-34`; `scripts/simulation/e5-sp-symmetry-gate.mjs:52-99`). The contract acknowledges these are stylized and incomplete (`research/claim-and-estimand-contract.md:47-57`). A low Sobol index within that model says nothing about sensitivity to alternative model structures.

**Concrete fix:** Add a pre-registered **model-form multiverse**: alternative project/value distributions; correlated voice and proxy bias; adaptive central bandwidth; ordinal/approval versus cardinal reports; strategic reports; endogenous proposals; alternative aggregation/welfare rules; greedy versus exact knapsack; and repeated versus one-shot allocation. Treat model specification as an uncertainty axis and report sign stability across model classes. If no defensible probabilities exist over model classes, use scenario/dominance analysis, not a prior-weighted average.

### 8. MEDIUM — The manuscript itself admits novelty has not been established

> **“The paper cannot promote v1.14 as a new contribution while simultaneously admitting that no systematic prior-art review has established priority.”**

The manuscript says directly that it has not conducted the systematic prior-art review needed to establish field-level priority and therefore claims only an integrative synthesis (`drafts/paper.md:274-291`). That caution is correct. A new surface does not cure the gap.

**Concrete fix:** Before making any novelty claim, search at minimum computational social choice/PB, robust and prior-independent mechanism design, social-simulation UQ, computer-model calibration, robust decision-making/scenario discovery, and comparative-institutional simulation. State inclusion criteria and provide a claim-to-prior-art table. This review can prevent overclaiming, but it cannot create novelty where the design has none.

## The contribution that could be publishable

The strongest route is a **theorem-plus-data paper**, not a larger simulation:

1. **Formal object:** a matched-information-budget comparison between coverage-routed and centrally routed appraisal, allowing adverse selection into voice, proxy/credit misalignment, and correlated errors.
2. **Result:** necessary/sufficient or sharp sufficient conditions for distributed dominance, central dominance, and sign-indeterminacy; ideally sharp bounds based on observable moments rather than a full parametric DGP.
3. **Identification:** show which moments can be learned from PB ballots, affected-party surveys, administrative appraisal rankings, project costs, and ex-post outcomes; state what remains unidentified.
4. **Empirical test:** estimate/calibrate on some municipalities/processes and evaluate portfolio/value predictions on held-out ones, with an explicit model-discrepancy term.
5. **Comparators:** benchmark against deployed PB rules, adaptive central appraisal, and hybrid institutions under common budgets.
6. **Decision relevance:** report the observable conditions under which a municipality should prefer each mechanism, including a “do not know” region. A result showing that neither arm robustly dominates would still be publishable if the identified switching conditions are new and useful.

This would turn “Δ is a surface” into the stronger claim: **“the sign of comparative institutional advantage is partially identified by these observable information and participation moments, with this sharp dominance frontier.”** That is the single sharpest improvement available.

## Publication threshold by outlet

| Target | v1.14 as sketched | Minimum credible upgrade |
|---|---|---|
| Architecture/governance paper | Useful appendix; not a new headline contribution | Keep claims model-internal; use it to identify pilot measurements and failure regions |
| Social-simulation/UQ journal | Routine application, especially for a static microsimulation | New method with benchmarking, or a deeply validated empirical case with model-form uncertainty and replication |
| Computational social choice / mechanism design | Not competitive: no new rule property, implementation theorem, or strategic analysis | Formal dominance/strategy result plus comparison to established PB rules; preferably real data |
| Empirical public administration / policy | Not publishable as an effect estimate | Linked appraisal/ballot/outcome data, credible construct mapping, calibration and held-out validation or a pilot |

## Defensible claim now

If no theorem or empirical calibration is added, the honest claim is:

> “We provide a preregistered robustness atlas for one stylized credit-versus-coverage selection model. It identifies which authored assumptions drive the model's comparative result and which measurements a pilot would need. It is a model-criticism and research-design exercise, not evidence of a real-world magnitude, an institutional guarantee, or a new sensitivity-analysis method.”

That would be worthwhile and honest. It would not justify rebuilding the paper around v1.14 as a novel quantitative contribution.
