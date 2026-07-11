# Critique — parameterization and identifiability

## Verdict

**Not formalizable as-is; viable only after a major reparameterization and an explicit identification design.** The proposed \(\theta\) is neither a complete parameterization of the simulator nor an identified description of the relationship among individual value \(F\), social value \(S\), and central information/choice. It currently mixes latent traits, measurement properties, behavioral selection, and normative choices, while omitting several quantities that mechanically determine \(\Delta\). Calling the result a “mechanism-governed surface” would therefore overstate what has been learned: it would be a response surface of a posited data-generating process whose decisive decompositions are not separately recoverable from the proposed observations.

## Severity-ranked issues

### P0 — `G` conflates a belief with an objective, so `b`, `rho_proxy`, and `tau_C` have no coherent estimand

> **Quotable issue:** “The sketch calls \(G\) the planner’s belief about \(S\), then puts self-interest and claimable credit inside that belief. Measurement error, projection, and strategic credit-seeking are different causal objects; collapsing them into \(G\) makes the central distortion true by construction and prevents its components from being identified.”

The sketch defines \(G_j\) as a “belief/estimate” produced from proxies, judgment, **and self-interest** ([DESIGN_SKETCH.md:22](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-11-v1.14-design/DESIGN_SKETCH.md#L22)-[24](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-11-v1.14-design/DESIGN_SKETCH.md#L24)), and then describes `b` as a shift toward either the planner’s own value **or claimable credit** ([DESIGN_SKETCH.md:44](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-11-v1.14-design/DESIGN_SKETCH.md#L44)). Those alternatives are not interchangeable:

- proxy reliability and `tau_C` concern what the planner knows about \(S\);
- projection concerns how the planner predicts other people from the planner’s own preferences;
- credit pressure concerns which objective the planner ranks, even if the planner knows \(S\) perfectly.

The symmetry gate correctly separates these objects. It constructs a noisy central value estimate and then combines that estimate with credit in a decision score weighted by `lambda` ([e5-sp-symmetry-gate.mjs:77](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e5-sp-symmetry-gate.mjs#L77)-[90](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e5-sp-symmetry-gate.mjs#L90)). The controlling contract likewise says credit affects ranking, never eligibility ([claim-and-estimand-contract.md:32](C:/devel/claude-projects/distributed-governance-research/research/claim-and-estimand-contract.md#L32)-[37](C:/devel/claude-projects/distributed-governance-research/research/claim-and-estimand-contract.md#L37)). The new sketch erases this distinction and drops `lambda` entirely. As a result, an observed central/public-value gap can be reallocated arbitrarily among low proxy quality, projection, random error, and strategic credit weight.

**Concrete fix:** Define at least three separate equations:

1. an epistemic signal, e.g. \(X^C_j = m_C(S_j,Z_j)+e^C_j\);
2. a planner-specific projection component, e.g. \(Q_{kj}=q(F_{kj},Z_j)\);
3. a choice/ranking equation, e.g. \(R^C_{kj}=(1-\lambda_k)z(X^C_j/c_j)+\lambda_k z(P_{kj}/c_j)\).

Reserve \(G\) for the first equation. Estimate `lambda` from choices conditional on elicited forecasts, and estimate projection only from forecast error conditional on the planner’s separately elicited own valuation. If those data do not exist, combine the terms into one explicitly **unidentified central-distortion index** and do not interpret its components.

### P0 — the advertised “small vector” does not govern `Delta`; it omits load-bearing world and decision parameters

> **Quotable issue:** “The proposed surface is not \(\Delta(\theta)\): important arguments of \(\Delta\) have simply been held off the page. Omitting them does not make the surface low-dimensional; it conditions the answer on hidden constants.”

The sketch lists proxy quality, bias/noise, participation, valuation dispersion, and aggregation ([DESIGN_SKETCH.md:36](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-11-v1.14-design/DESIGN_SKETCH.md#L36)-[49](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-11-v1.14-design/DESIGN_SKETCH.md#L49)). It omits at least:

- central credit weight `lambda` and the credit construct/distribution;
- the opportunity-cost hurdle `h`, costs, budget share, and eligibility rule;
- project mean quality, cross-project quality spread, reach distribution, project count, and population/exposure scale;
- how a fixed information budget is allocated across projects;
- reporting selection as a function of valuation magnitude and covariates, not merely sign;
- proposal/agenda selection and sponsor–public-value alignment.

These are not theoretical niceties. The gate freezes a world with `mean`, `sd`, `projSpread`, `costHi`, `muF`, `sigF`, `sigP`, and `budgetFrac` ([e5-sp-symmetry-gate.mjs:29](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e5-sp-symmetry-gate.mjs#L29)-[30](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e5-sp-symmetry-gate.mjs#L30)); constructs reach, quality, credit, and aggregate \(S\) from them ([e5-sp-symmetry-gate.mjs:33](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e5-sp-symmetry-gate.mjs#L33)-[49](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e5-sp-symmetry-gate.mjs#L49)); and evaluates cells over `lambda`, `h`, `p`, `beta`, and `tau` ([e5-sp-symmetry-gate.mjs:60](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e5-sp-symmetry-gate.mjs#L60)-[65](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e5-sp-symmetry-gate.mjs#L65), [116](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e5-sp-symmetry-gate.mjs#L116)-[117](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e5-sp-symmetry-gate.mjs#L117)). The contract explicitly says the value/cost units, hurdle, and project-generating distribution remain uncalibrated ([claim-and-estimand-contract.md:47](C:/devel/claude-projects/distributed-governance-research/research/claim-and-estimand-contract.md#L47)-[52](C:/devel/claude-projects/distributed-governance-research/research/claim-and-estimand-contract.md#L52)).

The omission of `h` is especially damaging because the sketch says it scores “TRUE aggregate value (S)” ([DESIGN_SKETCH.md:32](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-11-v1.14-design/DESIGN_SKETCH.md#L32)-[34](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-11-v1.14-design/DESIGN_SKETCH.md#L34)), whereas the controlling estimand is **net** value, \(S-hc\) ([claim-and-estimand-contract.md:13](C:/devel/claude-projects/distributed-governance-research/research/claim-and-estimand-contract.md#L13)-[19](C:/devel/claude-projects/distributed-governance-research/research/claim-and-estimand-contract.md#L19)).

**Concrete fix:** Write the complete structural argument list before selecting sensitivity parameters: \(\Delta=\Delta(\theta_{world},\theta_{obs},\theta_{choice},\theta_{institution})\). Either include every load-bearing quantity in the uncertainty design or prove an invariance that permits exclusion. At minimum restore `lambda`, `h`, cost and budget distributions, reach/exposure, project quality location and spread, credit-score generation, information allocation, and eligibility error. Reconcile the estimand to net value before any preregistration.

### P0 — the latent `F -> S -> G` system is not identified by the proposed measurements

> **Quotable issue:** “Without an external anchor for social value, the model cannot tell whether a central/public discrepancy is central error, citizen-report error, nonresponse, an aggregation choice, or a rescaling of latent utility. A simulation can assign each label, but the proposed data cannot recover them.”

The sketch’s phrase “the \(F\leftrightarrow G\) relationship” is already a category mistake. \(F_{ij}\) is individual-project utility, while \(G_j\) estimates the aggregated \(S_j=A(F_{1j},\ldots,F_{Nj})\) ([DESIGN_SKETCH.md:17](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-11-v1.14-design/DESIGN_SKETCH.md#L17)-[26](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-11-v1.14-design/DESIGN_SKETCH.md#L26)). Identification therefore requires two distinct bridges: individual reports to cardinal/interpersonally comparable \(F\), and \(S\) to central signals and choices. No observation equations, anchors, repeated indicators, exclusion restrictions, or validation outcome are specified.

`rho_proxy` is also undefined mathematically: “share of structural cross-project value the proxy tracks (mu vs epsilon)” ([DESIGN_SKETCH.md:43](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-11-v1.14-design/DESIGN_SKETCH.md#L43)) could mean a correlation, reliability, variance explained, a loading, or a mixture weight. These are not equivalent and are transformed differently by nonlinear ranking. The existing gate demonstrates the danger: it sweeps a **latent** Gaussian `rho` but separately reports a realized `corr(S,P)` diagnostic ([e5-sp-symmetry-gate.mjs:104](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e5-sp-symmetry-gate.mjs#L104)-[113](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e5-sp-symmetry-gate.mjs#L113)); its grid is explicitly the latent quantity ([e5-sp-symmetry-gate.mjs:116](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e5-sp-symmetry-gate.mjs#L116)-[117](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e5-sp-symmetry-gate.mjs#L117)). Rebranding that ambiguity as `rho_proxy` repeats the earlier latent-versus-realized error.

Likert dispersion does not identify cardinal \(\sigma_F\), much less interpersonal comparability or the structural/idiosyncratic variance split asserted at [DESIGN_SKETCH.md:48](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-11-v1.14-design/DESIGN_SKETCH.md#L48). Different thresholds, respondent scale use, and affine latent scales can generate the same item frequencies but different sums and different crossings of the net-value hurdle.

**Concrete fix:** Pre-specify a measurement model with its normalization and validation target. Use multiple indicators or repeated elicitations per respondent/project, measurement-invariance tests across groups, and an explicit cardinal anchor (money-metric willingness to pay/accept, bounded allocation trade-offs, or another defensible common numeraire). Collect independent ex-post outcome/cost measures or blinded expert valuations to validate \(S\). Define `rho_proxy` as one named estimand—preferably out-of-sample reliability or predictive \(R^2\)—and map it analytically to the simulator parameter. If the anchor is unavailable, call \(F\), \(S\), and the variance decomposition **set-identified under declared scale restrictions**, not measured.

### P1 — `p`, `beta`, and `tau_D` are mutually confounded under endogenous, non-ignorable participation

> **Quotable issue:** “Participatory-budget demographics do not identify adverse voice bias. Among observed reports, silence can mean no exposure, no stake, low participation propensity, negative valuation, low valuation magnitude, or reporting error; the proposed \((p,\beta,\tau_D)\) decomposition assigns causes that the observed sample cannot distinguish.”

The distributed estimator is said to depend on coverage `p`, adverse voice bias `beta`, and noise `tau_D` ([DESIGN_SKETCH.md:25](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-11-v1.14-design/DESIGN_SKETCH.md#L25), [46](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-11-v1.14-design/DESIGN_SKETCH.md#L46)-[48](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-11-v1.14-design/DESIGN_SKETCH.md#L48)). In the gate, however, `beta` is not inferred: the simulator hard-codes response probability as `p` for nonnegative values and `p*(1-beta)` for negative values, then adds report noise ([e5-sp-symmetry-gate.mjs:68](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e5-sp-symmetry-gate.mjs#L68)-[75](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e5-sp-symmetry-gate.mjs#L75)). Because sign is missing precisely for nonparticipants, ordinary PB participation data cannot estimate that selection function without observing at least some nonparticipants’ valuations. Demographics can establish compositional imbalance; they cannot establish the sign-conditional welfare bias the simulation calls `beta`.

Moreover, a single `p` cannot simultaneously mean awareness/exposure, being affected, platform access, survey response, and report submission. Participation is likely a function of \(|F_{ij}|\), sign, salience, project visibility, costs of voice, demographics, and expected pivotality. `tau_D` is then also confounded with respondent heterogeneity and item-scale error.

**Concrete fix:** Replace `p` and `beta` with a selection model \(M_{ij}\sim\Pr(M=1\mid E_{ij},F_{ij},X_i,Z_j)\), explicitly separating exposure/affectedness \(E\) from conditional response. Obtain valuations from a probability sample of nonparticipants, oversampling known affected groups. Randomize invitations, reminders, information, and reporting costs to identify response propensities; record exposure denominators. Use inverse-probability or doubly robust estimation only where positivity is credible, and perform MNAR sensitivity bounds for sign/magnitude dependence that remains unidentified. Estimate report noise from repeated/blinded elicitations, not from the cross-sectional residual left after selection.

### P1 — the omitted dependence structure is causal, not cosmetic

> **Quotable issue:** “`b` and `rho_proxy` are not naturally independent knobs, and neither is independent of participation. Visibility, reach, organization, planner attention, proxy quality, credit claimability, and citizen voice are generated by common project and stakeholder characteristics. A product prior over them would create impossible worlds and misleading separability.”

The repository’s own theory says the central and distributed frictions are “two faces of one Olson asymmetry”: diffuse harmed groups are underrepresented both in organized central proxies and in participatory voice ([e4e5-analytical-propositions.md:179](C:/devel/claude-projects/distributed-governance-research/research/e4e5-analytical-propositions.md#L179)-[188](C:/devel/claude-projects/distributed-governance-research/research/e4e5-analytical-propositions.md#L188)). The gate’s generator also makes credit and reach share a latent project factor ([e5-sp-symmetry-gate.mjs:41](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e5-sp-symmetry-gate.mjs#L41)-[47](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e5-sp-symmetry-gate.mjs#L47)). Yet the sketch gives no joint causal model for `rho_proxy`, `b`, `p`, `beta`, `tau_C`, or `tau_D`.

Likely dependencies include:

- better-organized/high-visibility projects receiving both higher participation and more accurate central proxies;
- projection or credit pressure increasing with contestation, which also changes adverse voice selection;
- planner attention being allocated endogenously toward claimable-credit projects, jointly changing proxy reliability and residual error;
- project reach affecting social-value variance, participation sample size, central appraisal precision, and political credit simultaneously.

**Concrete fix:** Draw a causal graph and parameterize conditional distributions by observed project/stakeholder covariates. Estimate a joint hierarchical model with project-level latent factors and planner/municipality random effects; preserve posterior dependence when propagating uncertainty. If the dependence is not empirically identified, define a small set of substantively coherent joint scenarios or partial-identification bounds over admissible correlations. Do not label `b`, `rho_proxy`, and `beta` “separable drivers” without an intervention or exclusion restriction that separates them.

### P1 — the arm comparison still risks encoding the conclusion through asymmetric estimator definitions

> **Quotable issue:** “The sketch gives the distributed arm ‘citizen reports’ and the central arm ‘proxies + judgment + self-interest,’ then asks which estimate better recovers citizen-defined truth. Unless information resources and behavioral distortions are mapped symmetrically, the parameterization is a conclusion written as an observation model.”

The sketch assigns explicit systematic bias to the central arm while the distributed arm gets only coverage, adverse voice, and random report noise ([DESIGN_SKETCH.md:22](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-11-v1.14-design/DESIGN_SKETCH.md#L22)-[26](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-11-v1.14-design/DESIGN_SKETCH.md#L26)). Missing distributed-side analogues include strategic expression, salience/availability bias, correlated misinformation, organized mobilization, interpersonal scale use, and delegation concentration. Missing central-side advantages include professional measurement, repeated appraisal, administrative data, and endogenous attention. Merely sweeping the listed disadvantages does not establish a fair information comparison.

The controlling contract is stricter: same pool, costs, expected appraisal budget, noise process, eligibility logic, delivery resources, and no truth access ([claim-and-estimand-contract.md:24](C:/devel/claude-projects/distributed-governance-research/research/claim-and-estimand-contract.md#L24)-[30](C:/devel/claude-projects/distributed-governance-research/research/claim-and-estimand-contract.md#L30)). It permits a bounded credit term and different routing, not an unrestricted central-bias bundle ([claim-and-estimand-contract.md:32](C:/devel/claude-projects/distributed-governance-research/research/claim-and-estimand-contract.md#L32)-[37](C:/devel/claude-projects/distributed-governance-research/research/claim-and-estimand-contract.md#L37)).

**Concrete fix:** Preserve the symmetry-gate decomposition. Give both arms a common measurement-error family and matched, explicit information budgets; allow institution-specific routing/selection and bounded ranking distortions. Add distributed strategic/correlated-reporting parameters and central adaptive-attention parameters, or justify their exclusion as named scope restrictions. Require a nested parity model in which identical information routing and zero ranking distortion yield exchangeable arms. Test that parity in code before interpreting any surface.

### P2 — `A` is a normative model choice, not an identifiable component of `theta`

> **Quotable issue:** “No amount of data identifies the correct aggregation rule. Treating \(A\) as another parameter in \(\theta\) blurs normative sensitivity with empirical uncertainty and makes incompatible welfare estimands look like draws from one population.”

The sketch correctly labels aggregation a normative choice but still puts it in the same table as empirical parameters ([DESIGN_SKETCH.md:49](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-11-v1.14-design/DESIGN_SKETCH.md#L49)). Changing from a utilitarian sum to distributional weights changes \(S\), the truth against which both institutions are scored; it is not uncertainty about the same estimand. The controlling contract is explicit that its cardinal utilitarian aggregate is not an equity measure ([claim-and-estimand-contract.md:47](C:/devel/claude-projects/distributed-governance-research/research/claim-and-estimand-contract.md#L47)-[50](C:/devel/claude-projects/distributed-governance-research/research/claim-and-estimand-contract.md#L50)).

**Concrete fix:** Remove `A` from empirical \(\theta\). Define one primary welfare functional and analyze each alternative aggregation/weighting rule as a separate estimand with separately reported results. Never average across rules or use their variation to form one interval.

## Minimum acceptable reparameterization before preregistration

1. **Truth/welfare block:** a declared \(A\); common cardinal normalization; project reach/exposure; value location, structural and idiosyncratic dispersion; costs, opportunity-cost hurdle, project dependence, and agenda/sponsor selection.
2. **Distributed observation block:** exposure, affectedness, MNAR response by sign and magnitude, report measurement error, strategic/correlated reporting, and information budget.
3. **Central observation block:** observable proxies, proxy measurement model, attention allocation, residual error, and planner-specific projection measured separately from credit incentives.
4. **Choice block:** common eligibility and portfolio rule; an explicit bounded credit weight `lambda`; institution-specific routing separated from epistemic accuracy.
5. **Identification table:** for every parameter, state the observable, sampling unit, identifying variation/assumption, normalization, and whether it is point-identified, set-identified, or merely assumed.
6. **Joint model:** specify which parameters share latent causes or are endogenous; propagate their joint distribution rather than pretending they are independent axes.
7. **Falsification checks:** exchangeable-arm parity; recover known parameters from synthetic data; distinguish latent inputs from realized correlations; show that alternative decompositions of the same observed central/report gaps are rejected by the proposed data rather than by fiat.

Until those conditions are met, the honest label is **“conditional simulation over an assumed structural parameterization,” not “the identified mechanism-governed relationship between \(F\) and \(G\).”**
