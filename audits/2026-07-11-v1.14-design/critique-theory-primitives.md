# Critique dimension 1 — theory and primitives

## Verdict

**Formalizable only after major changes; not honest or rigorous as written.** The sketch has a potentially usable comparative-estimation problem inside it, but its headline theoretical claim is currently ill-typed, its central primitive mixes belief with political objective, and its welfare arithmetic assumes the very cardinal interpersonal comparability that the citations do not establish. “Declare `A`” and “define a scale” are not solutions. Until the paper supplies a common, transformation-invariant welfare scale—or retreats to an explicitly synthetic score—neither the utilitarian sum nor the magnitude of Δ has a defensible interpretation.

## Ranked issues

### 1. CRITICAL — “`G = F`” is not a proposition that can be true or false; it compares different kinds of object

> **The sketch's key theoretical proposition is not merely unproved; it is ill-typed. `F_ij` is one person's project valuation, `F` is then reused for its distribution, while `G_j` is a planner estimate of an aggregate `S_j`. There is no coherent equality `G = F` to guarantee or deny.**

The sketch defines the individual-indexed scalar at `audits/2026-07-11-v1.14-design/DESIGN_SKETCH.md:17`, reuses `F` as a distribution at `DESIGN_SKETCH.md:19`, defines `S_j = A({F_ij})` at `DESIGN_SKETCH.md:21`, and defines `G_j` as an estimate of `S_j` at `DESIGN_SKETCH.md:22`. It nevertheless states the key claim as `G = F` at `DESIGN_SKETCH.md:27-28` and describes θ as governing an “F↔G relationship” at `DESIGN_SKETCH.md:38-39`. The relevant comparison is `M_j^C` versus `S_j`, not `G_j` versus `F_ij` or its population distribution.

Worse, `G_j` combines “belief/estimate” with “self-interest” (`DESIGN_SKETCH.md:22-24`). A political-credit motive is an objective or ranking distortion, not an epistemic belief unless the model separately posits and identifies motivated cognition. This silently contradicts the controlling specification: the central arm “reads value competently” and bounded credit pressure affects ranking, never eligibility (`research/claim-and-estimand-contract.md:32-37`); the authoritative paper likewise separates its noisy value estimate from the credit-weighted ranking score (`drafts/paper.md:587-594`). Collapsing those into `G` makes an inaccurate belief observationally indistinguishable from an accurate belief used under a different objective.

**Concrete fix.** Replace the primitives with typed objects, for example:

- `u_ij`: person `i`'s welfare change from project `j` relative to a stated counterfactual;
- `S_j^A = A(u_1j, ..., u_nj)`: welfare index conditional on a fixed `A`;
- `X_j^C`: central proxy information;
- `M_j^C = E[S_j^A | X_j^C]` (or another declared estimator): central epistemic estimate;
- `R_j^C = r(M_j^C, P_j; λ)`: central ranking score, with political credit `P_j` and pressure λ kept outside the belief;
- `M_j^D`: distributed estimate under its own observation/participation process.

Then state and test comparisons such as calibration, MSE, rank correlation, and portfolio regret. Use a new symbol such as ℘ for the population distribution; never use `F` for both an individual random variable and a distribution.

### 2. CRITICAL — the utilitarian sum and Δ are meaningless without interpersonal cardinal comparability and a meaningful zero

> **Stevens does not validate the sum; Stevens makes the missing assumption visible. A “defined measurement scale” is insufficient unless the admissible transformations leave `A`, project rankings, and Δ invariant. The sketch never supplies that invariance.**

The sketch invokes Stevens while leaving the scale type unspecified (`DESIGN_SKETCH.md:17-20`), chooses a utilitarian sum (`DESIGN_SKETCH.md:49`), and then forms a normalized magnitude from delivered sums (`DESIGN_SKETCH.md:32-34`). Those operations require much more than ordering:

- A McFadden random-utility representation is ordinarily identified from choices only up to normalizations; utility levels and error scale are not automatically comparable across people.
- A single Likert item is at best ordinal absent a defensible measurement model. Its category spacing, respondent thresholds, and units need not be common. The proposed “Likert dispersion” at `DESIGN_SKETCH.md:48` therefore cannot identify `σ_F`, much less an idiosyncratic/structural variance share, by coding categories 1–5 and taking their variance.
- Under person-specific positive affine transformations `u'_ij = a_i u_ij + c_i`, an unweighted sum can change project rankings. Even under a common affine transformation, an arbitrary origin changes `O` and therefore can change `Δ = (D-C)/O`; if funded-set sizes vary, it can also change the numerator. Ratio language such as “2.2×” requires a meaningful common zero, not merely an interval scale.

This is exactly the Robbins–Arrow issue the sketch omits. Arrow's ordinal impossibility does not apply *if* the paper assumes a cardinal, interpersonally comparable domain and fixes a social-welfare functional, but that is a substantive normative and informational assumption—not an escape achieved by writing a sigma sign. The repository's own historical theory note explicitly admitted the “normative cost” of interpersonal cardinal comparison (`research/e4e5-analytical-propositions.md:206-209`). The authoritative paper says summation “rests on Samuelson” while acknowledging that Sen resists it (`drafts/paper.md:889-891`), but Samuelson's public-good condition sums individual marginal rates of substitution in a common numeraire; it does not license summing arbitrary latent or Likert utilities.

**Concrete fix.** Before any simulation, choose one defensible route:

1. **Common-numeraire route:** define `u_ij` as willingness-to-pay/equivalent variation or another ratio-scale welfare change, state income/distributional consequences, and pre-specify interpersonal weights. This brings serious elicitation and equity assumptions, which must be owned.
2. **Validated latent-scale route:** pre-specify multiple indicators or choice tasks, anchoring vignettes/common items, item-response or choice model, scale normalization, and tests of measurement invariance/differential item functioning across persons and groups. Do not call the resulting scale ratio-level unless justified.
3. **Synthetic-score route:** state that `S` is a model score with arbitrarily fixed units, not “true social value,” and restrict claims to transformations under which results are demonstrably invariant. Drop empirical multiplier language.
4. **Ordinal route:** if only ordinal reports are available, use an ordinal social-choice/rank-based estimand and confront Arrow/Gibbard constraints; do not sum codes or report cardinal value ratios.

Whichever route is chosen, preregister scale-invariance tests: rerun under all admissible transformations and show that the sign/ranking claim survives. Treat `A` as a normative specification, not a nuisance input in the same sensitivity prior as empirical parameters.

### 3. HIGH — “latent random utility” and “latent-variable-estimable” overstate what McFadden and Bollen provide

> **The citations establish modeling languages, not the existence, uniqueness, identification, or interpersonal measurability of a person's project value.**

At `DESIGN_SKETCH.md:17-20`, the same `F_ij` is described as fixed at a person/instant/context/scale, a latent random utility, uncertainty about a unique latent value, *or* genuine internal stochasticity. Those are different models:

- Under epistemic uncertainty, the welfare value is a fixed unknown parameter and randomness belongs to the analyst's posterior or measurement process.
- Under random utility, a stochastic component enters the person's choice utility; the welfare target might be a systematic component, a realized utility, or an expectation. These are not interchangeable.
- If reports are noisy indicators of a latent construct, the construct is not “estimable” without an identified measurement model, sufficient indicators/repeated choices, exclusion or loading restrictions, and scale normalizations.

McFadden (1974) supplies a random-utility/discrete-choice model; it does not turn choice data into unique cardinal welfare levels that may be summed across persons. Bollen (2002) is particularly poor support for the unqualified word “estimable”: its own abstract highlights identification and latent-variable indeterminacy as properties requiring attention. The sketch cites neither an observation model nor identification conditions.

**Concrete fix.** Decide *before* simulation whether `u_ij` is (a) a fixed welfare change, (b) the systematic part of choice utility, or (c) a stochastic realized utility. Write the measurement/choice equation and the exact observed data. State which parameters are identified, what normalizations identify the scale, and whether inference targets `u_ij`, `E[u_ij]`, or a posterior distribution. If there are no data and no measurement model yet, call `u_ij` a simulated latent score, not “latent-variable-estimable.”

### 4. HIGH — declaring `A` does not make `S` “true,” and varying `A` changes the estimand rather than testing robustness

> **`A` is a social-welfare judgment. Once `A` changes, the study is no longer perturbing one data-generating process; it is asking a different normative question. Calling every resulting `S` “true social value” launders that choice into ontology.**

The sketch calls `S_j` “true social value” immediately after defining it by a declared aggregation rule (`DESIGN_SKETCH.md:21`), then puts utilitarian and distributionally weighted versions of `A` into robustness scenarios (`DESIGN_SKETCH.md:49`). Yet the paper correctly admits that the current score says nothing about equity or incidence and that broader use needs a separate social-welfare specification (`drafts/paper.md:1253-1263`). Its controlling contract likewise calls the value units and project-generating distribution uncalibrated (`research/claim-and-estimand-contract.md:47-54`). The sketch does not close those gaps.

It also leaves load-bearing domain questions unanswered: Who counts as “affected”? Relative to which no-project/counterfactual baseline is `u_ij` measured? Are future people represented? How are nonparticipants and missing reports treated? Are rights or catastrophic harms side constraints rather than additive disutility? Does the opportunity-cost hurdle use the same welfare units? Different answers can reverse funded-set rankings without any change in proxy quality or participation.

**Concrete fix.** Rename the object `S_j^A`, “the social-value index under aggregation rule `A`.” Freeze one primary `A`, its population, weights, counterfactual, temporal discounting, and rights/feasibility constraints. Report alternative aggregation rules in a separate **normative sensitivity analysis**; do not pool them into a plausibility prior or summarize them with one Sobol/floor result. Never call a conclusion robust merely because it survives a few author-chosen weights—show the reversal frontier over an explicitly justified class of social-welfare functions.

### 5. HIGH — “no guarantee of equality” is a tautological non-result and does not support the directional mechanism claim

> **Showing that a planner need not recover social value exactly is trivial; it neither establishes systematic bias nor shows that the distributed estimator is closer. Both arms can be imperfect, unbiased, or rank-equivalent.**

The conditions at `DESIGN_SKETCH.md:27-28` muddle several distinct claims. Full information, perfect measurement, and zero bias are not all necessary for `M_j^C = S_j`: a sufficient statistic can recover `S_j`, and equality can occur by chance. Exact realized equality is also unnecessary for good allocation: a noisy but unbiased estimator can preserve the correct ranking. Conversely, perfect information does not yield social-value maximization if the planner deliberately ranks on political credit—another reason belief and objective must be separated.

The controlling contract's symmetry requirements are stronger and more honest: neither arm sees ground truth, both act on their own noisy estimates, and they share appraisal-error and eligibility logic (`research/claim-and-estimand-contract.md:24-30`). The theory must nest this parity/null case. A generic “no guarantee” claim does not.

**Concrete fix.** Replace the sentence with testable propositions, for example:

- **Calibration:** `E[S_j^A | M_j^k] = M_j^k` for institution `k` in `{C,D}`.
- **Accuracy:** compare `E[(M_j^k - S_j^A)^2]` under matched information budgets.
- **Ranking:** compare pairwise rank-error probability or portfolio regret under the shared funding rule.
- **Bias decomposition:** distinguish mean measurement bias, heterogeneous proxy residuals, political-objective distortion, and random noise.

State explicitly that the model nests `M^C = M^D = S`, central superiority, and distributed superiority. Any directional result must follow from declared restrictions on the two observation and ranking processes, not from “no guarantee.”

### 6. HIGH — the behavioral citations are suggestive analogies, not sufficient support for the modeled planner process

> **The bibliography is being asked to identify a quantitative government-project appraisal mechanism that none of the cited studies measures. The citations support possibility, not the sign, functional form, prevalence, or range of `b`.**

Specific overreach:

- **Stiglitz (2017)** is a broad retrospective on information economics. Information asymmetry explains why estimates may differ; it does not imply that a public planner's estimate has the sketch's systematic projection/credit shift.
- **Ross, Greene & House (1977)** demonstrates false-consensus effects in social-perception studies. It is not a study of public officials estimating project welfare, and it cannot identify the proposed `b`.
- **Charité, Fisman & Kuziemko (2015)** studies experimental redistribution/reference points, including subjects placed in a social-planner role. That is relevant to a narrow redistribution mechanism but not a general measurement-error model for infrastructure value; it also does not support combining reference points, self-interest, and claimable credit into one shift.
- **Broockman & Skovron (2018)** does show politicians misperceiving constituency opinion, but its observed issue-specific conservative asymmetry and selective-contact mechanism do not establish projection toward the politician's own value or claimable project credit. Using it to set a generic scalar `b` would be a construct-mapping error.
- **McFadden (1974), Bollen (2002), and Stevens (1946)** support model/measurement concepts subject to identification and scale restrictions; they do not jointly validate interpersonal cardinal aggregation.

The authoritative paper already uses the more direct Mayhew/Arnold credit-claiming literature for the separate ranking channel (`drafts/paper.md:588-593`). The sketch should preserve that separation and add direct evidence on bureaucratic appraisal error, political responsiveness/contact bias, and project-level credit claiming rather than make generic psychology carry the mechanism.

Finally, none of McFadden, Bollen, Stevens, Stiglitz, Charité–Fisman–Kuziemko, Ross–Greene–House, or Broockman–Skovron appears in the authoritative paper's reference list, which begins at `drafts/paper.md:1442` and ends at `drafts/paper.md:1525`. “Stiglitz 2017” is not even given a title. The design is therefore not currently citation-complete.

**Concrete fix.** Add full, version-correct bibliography entries and a claim-to-citation table stating exactly what each source supports and does not support. Add Robbins on interpersonal utility comparisons, Arrow/Sen on aggregation domains and informational bases, and modern measurement-invariance/latent-choice identification references. For each behavioral mechanism, either cite a public-official/project-appraisal study with a defensible construct bridge or label the mechanism **ASSUMED**. Do not infer parameter ranges from existence proofs or lab demonstrations.

Primary-source checks supporting this citation audit: [McFadden (1974) archive](https://escholarship.org/uc/item/0p99072q); [Bollen (2002), including identification and indeterminacy in the abstract](https://www.annualreviews.org/content/journals/10.1146/annurev.psych.53.100901.135239); [Stevens (1946)](https://www.science.org/doi/10.1126/science.103.2684.677); [Stiglitz (2017)](https://www.nber.org/papers/w23780); [Ross, Greene & House (1977)](https://www.sciencedirect.com/science/article/abs/pii/002210317790049X); [Charité, Fisman & Kuziemko (2015)](https://www.nber.org/papers/w21009); and [Broockman & Skovron (2018)](https://www.cambridge.org/core/journals/american-political-science-review/article/abs/bias-in-perceptions-of-public-opinion-among-political-elites/2EF080E04D3AAE6AC1C894F52642E706).

## Minimum acceptable rewritten theory block

The theory section is ready for preregistration only if it does all of the following:

1. Uses typed, non-overloaded notation and compares `M_j^C` and `M_j^D` with `S_j^A`, never `G` with `F`.
2. Separates each institution's information/measurement process from its ranking objective.
3. Defines the welfare scale, permissible transformations, interpersonal comparability, common zero/unit, and the observation model that could identify it.
4. Calls `S_j^A` an index conditional on a normative aggregation rule and treats alternative aggregation rules as separate estimands.
5. Replaces “no guarantee” with nested null, central-win, and distributed-win propositions stated in calibration, error, ranking, or regret terms.
6. Downgrades generic behavioral citations from calibration evidence to mechanism motivation unless a direct construct mapping is supplied.

Without those changes, the sensitivity surface would be mathematically executable but theoretically uninterpretable: it would map arbitrary latent-score conventions and a conflated planner construct into a precise-looking Δ.
