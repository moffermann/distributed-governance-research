# Critique dimension 3 — range provenance and the invented-range trap

## Verdict

**Not defensible as written.** The surface is formalizable, but an empirical or policy-relevant positive “floor” is not. The sketch supplies neither numeric ranges nor actual `MEASURED`/`ASSUMED` tags; it supplies candidate literatures and future measurement plans. Today, every empirical input in the proposed vector is either **ASSUMED**, **MEASURABLE-IN-PRINCIPLE**, or a **normative scenario choice**. That is not a semantic quibble: the controlling paper says no pilot has run and the remaining parameters are “plausible rather than measured” (`drafts/paper.md:1265-1273`), while the contract bars magnitude interpretation until the project-value distribution, appraisal errors, sponsor–public-value relationship, and delivery effects are measured (`research/claim-and-estimand-contract.md:59-70`).

The honest v1.14 output available before new data is therefore a **reversal map over declared assumption boxes**, not “the floor under plausible/measured assumptions.” A positive floor would be manufactured by the chosen box. The repository already contains a central-win region, and the sketch provides no empirical basis for excluding it.

## Parameter-by-parameter provenance audit

The sketch promises that every input “is tagged `MEASURED` ... or `ASSUMED`” (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH.md:51-52`), but the table actually contains no such tags and no numeric supports (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH.md:41-49`). The defensible status **before any pilot/new extraction** is:

| Proposed input | Defensible status now | Why the proposed provenance is insufficient | Minimum evidence needed to graduate |
|---|---|---|---|
| `ρ_proxy` | **ASSUMED; potentially estimable only after construct validation** | “Proxy↔outcome studies; else ASSUMED” names no study, population, proxy, outcome, estimate, or mapping. The existing engine's `rho` is a latent correlation used to construct claimable credit, not an observed “share of structural value”: it enters `cLat=rho*a+...` while true `S` and `P` are generated on different scales (`scripts/simulation/e5-sp-symmetry-gate.mjs:33-49`). The paper explicitly says its value and credit variables are abstract rather than measured architecture constructs (`drafts/paper.md:546-558`). | A named dataset in the target domain; operational definitions of proxy and social value; an estimated measurement/error model; transport justification; confidence/credible region. |
| `b` | **ASSUMED and not yet operationally identified** | Broockman–Skovron and Ross et al. can motivate elite–mass misperception/false consensus, but the sketch gives no quantitative bridge from those constructs to a shift of project-level `G` toward the planner's own valuation **or claimable credit** (`DESIGN_SKETCH.md:44`). The current paper is more candid: credit pressure is “posited” and its magnitude must be measured (`drafts/paper.md:588-594`). Combining projection and credit claiming in one range also makes source transfer impossible to audit. | Separate estimands for projection and credit pressure; target-population data linking planner beliefs, planner/private preferences, credit, and affected-party value; ex ante sign and scale conventions. |
| `τ_C` | **ASSUMED** | “partial / ASSUMED” is not a measurement. The frozen gate merely assigns common noise values `0.5` and `1.0` in two model regimes (`scripts/simulation/e5-sp-symmetry-gate.mjs:116-117`); it does not estimate central appraisal error. The contract lists appraisal errors among the quantities still requiring real data (`research/claim-and-estimand-contract.md:59-62`). | Repeated or held-out central appraisals against a validated outcome/value target, with decomposition of sampling error, systematic error, and scale error. |
| `β` | **ASSUMED; demographics are at most an indirect anchor** | In the engine, `β` is specifically **sign-dependent reporting**: a person with `v<0` reports with probability `p(1-β)` (`scripts/simulation/e5-sp-symmetry-gate.mjs:68-74`). PB participant demographics do not identify that conditional probability or its denominator. The paper says `β` *can* be anchored to PB demographics (`drafts/paper.md:893-906`), and its appendix calls it “calibratable,” not calibrated (`drafts/paper.md:1433-1439`). | Linked affected-population data identifying project exposure, valuation sign/intensity, eligibility, and reporting. Demographic imbalance alone is not `β`. |
| `p` | **ASSUMED as the model defines it; aggregate turnout is only a proxy candidate** | The model's `p` is an independent report probability for each **interested citizen–project dyad**, not municipal PB turnout (`scripts/simulation/e5-sp-symmetry-gate.mjs:68-74`). A published participation rate lacks the latent “interested” denominator and does not identify project-specific coverage. | A target-domain sampling frame with affected/interested nonparticipants, project-level exposure, repeat participation, and uncertainty/heterogeneity estimates. |
| `τ_D` | **ASSUMED; source is a category error** | The table assigns “PB participation rates” as the source for the pair `p, τ_D` (`DESIGN_SKETCH.md:47`). Participation rates cannot measure report noise. The current gate in fact forces the same `τ` into both arms (`scripts/simulation/e5-sp-symmetry-gate.mjs:73-85`), so there is no existing estimate of a distributed-specific error distribution. | Citizen reports linked to a defensible validation target or repeated-measurement model; bias, variance, tails, within-person dependence, and strategic error distinguished. |
| `σ_F` | **ASSUMED; future elicitation plan** | “Elicitable (Likert dispersion)” is not “measured” (`DESIGN_SKETCH.md:48`). The contract says the value units and project-generating distribution are uncalibrated (`research/claim-and-estimand-contract.md:47-52`). Raw Likert dispersion also does not directly identify dispersion on a cardinal latent-utility scale. | A preregistered measurement model establishing the scale transformation and measurement invariance, with target-population elicitation and uncertainty. |
| `ε`-share | **ASSUMED and not recoverable from one cross-section of Likert responses** | Separating structural project value from idiosyncratic valuation/error requires repeated items, repeated respondents/projects, or a hierarchical model. The sketch supplies none. The frozen generator instead hard-codes `mean`, `sd`, `projSpread`, `muF`, and `sigF` (`scripts/simulation/e5-sp-symmetry-gate.mjs:29-47`). | Hierarchical/repeated-measures design that separately identifies respondent, project, context, and measurement-error components. |
| `A` | **NORMATIVE CHOICE, not `MEASURED` or `ASSUMED`** | Utilitarian sum versus distributional weights is a social-welfare specification, not an empirical range. The contract explicitly says the existing aggregate is non-distributional (`research/claim-and-estimand-contract.md:47-54`). | Declare primary normative rule and a finite, reasoned robustness set. Do not describe selection among rules as measurement. |

## Severity-ranked, quotable issues

### Critical 1 — “The sketch has no measured ranges; it has a bibliography-shaped measurement wish list.”

The heading claims “ranges sourced, not invented” (`DESIGN_SKETCH.md:36-39`), but the table gives no numbers, extraction rules, target population, estimates, uncertainty, or even completed status tags (`DESIGN_SKETCH.md:41-52`). “Proxy↔outcome studies,” “PB participation demographics,” and “elicitable” are research plans. A citation is not a range, and a plan is not a measurement.

This directly conflicts with the controlling evidence boundary: the contract calls the value/cost units and project generator uncalibrated (`research/claim-and-estimand-contract.md:47-57`), and the authoritative paper says no specific PB dataset or pilot has calibrated the current test (`drafts/paper.md:1265-1273`). Any pre-registration built from the current table would merely freeze researcher judgment after the result is already known.

**Concrete fix:** Before pre-registration, create a parameter registry with, for every input: mathematical definition, unit/scale, target population, numeric support, distribution or uncertainty set, dependence assumptions, exact source/table/variable, extraction code, transport argument, status (`OBSERVED`, `ESTIMATED`, `PROXY-ANCHORED`, `ASSUMED`, `NORMATIVE`), and a blinded rule for updating it. Until those fields are populated, tag all empirical inputs `ASSUMED`.

### Critical 2 — “A floor over an assumed box is a property of the box, not of the architecture.”

The load-bearing proposal is the minimum or fifth percentile over a “plausible region” (`DESIGN_SKETCH.md:56-63`). With no empirical joint region, the analyst chooses the endpoints and prior mass that determine that floor. The guardrail that conclusions should disclose dependence on assumed parameters (`DESIGN_SKETCH.md:65-75`) does not rescue the claim: **all** current endpoints are assumed, so the floor itself is assumption-governed.

The phrase “plausible/measured assumptions” (`DESIGN_SKETCH.md:10-12`, `:58-59`) improperly fuses two different evidential objects. A fifth percentile under a researcher-chosen prior is especially easy to manufacture: give central-favourable states less than five percent prior mass and the reported “floor” ignores them by construction.

**Concrete fix:** Report two objects and never conflate them:

1. `inf Δ(θ)` over a broad **admissible mechanism domain**, including central-favourable states; call it the *model-domain lower envelope*.
2. A conditional distribution over a **data-supported uncertainty set**, only after actual estimates exist; call it an *empirically conditioned predictive summary*, not a floor.

Before data, lead with the parity/reversal frontier and the fraction of declared scenarios in which each arm wins. Do not make a positive floor claim.

### Critical 3 — “The proposed vector omits already-known range-sensitive constants, so even perfect provenance for its listed inputs would not identify the floor.”

The current contract says the opportunity-cost hurdle and project-generating distribution are uncalibrated (`research/claim-and-estimand-contract.md:47-52`). The frozen engine hard-codes `N`, `K`, valuation mean/dispersion, project spread, cost support, reach distribution, credit spread, and budget fraction (`scripts/simulation/e5-sp-symmetry-gate.mjs:29-47`), and its actual grid sweeps `h` explicitly (`scripts/simulation/e5-sp-symmetry-gate.mjs:116-117`). Yet the sketch's new `θ` table omits `h`, budget scarcity, project/reach and cost distributions, `N/K`, and an explicit credit-pressure mixing weight (`DESIGN_SKETCH.md:41-49`).

This is not hypothetical. The prior audit found `h=2.5` was fitted rather than calibrated and was dimensionally unstable when population/reach changed (`audits/2026-07-10/headline-number.md:71-91`); it also found budget share and other structural choices materially widened the old result envelope (`audits/2026-07-10/headline-number.md:136-152`). Holding these constants fixed simply moves the invented-range trap one level down.

**Concrete fix:** Promote every non-invariant, output-sensitive constant into the registry and global domain, or prove and test that the target summary is invariant to it. At minimum include opportunity-cost/value normalization, credit-pressure weight, budget fraction, candidate count, affected-set/reach distribution, cost distribution, valuation tails, and proposal-pool composition.

### Critical 4 — “The repository already contains a defensible central-win region; a positive floor can exist only by excluding it.”

The authoritative paper's existing symmetric frontier states that the advantage reverses when voice bias exceeds the centre's harm-blindness (`β > 1-η`) (`drafts/paper.md:775-800`). More starkly, it reports `D/C = 0.89`—a central win—at the accountable-central corner (`η=1, β=0`) (`drafts/paper.md:828-841`). The underlying code says the same: values below one mean central wins, and the edge exists only where platform voice bias is milder than central harm-blindness (`scripts/simulation/e4-v4-symmetric-frontier.mjs:82-85`). No current measurement excludes competent, low-bias central institutions or high-bias distributed participation.

A read-only diagnostic on the current gate reinforces the problem for the sketch's **newly separate** `τ_C` and `τ_D`. I kept its world generator and scoring rules (`scripts/simulation/e5-sp-symmetry-gate.mjs:29-99`), split only the common `τ` into arm-specific values as the sketch proposes, and evaluated 100 frozen-seed worlds at `rho=1`, credit pressure `0`, `p=.5`, `β=.8`, `τ_D=1`, `τ_C=0`. Mean `Δ=(D-C)/O` was `-0.0063` (median `-0.0069`; world-cluster interval `[-0.0089,-0.0037]`). This is a diagnostic, not an empirical estimate, but none of those values can be excluded by the provenance table. A positive floor would thus encode the desired conclusion in the support.

**Concrete fix:** Require an adversarial-support rule: every range must include the strongest central comparator and worst distributed setting consistent with evidence, not merely a favoured “status quo” archetype. Pre-register a central-win falsification region. If the data-supported set intersects it, the headline is “institutional advantage reverses by conditions,” not “the architecture has a positive floor.”

### Major 5 — “The current gate is not range evidence for v1.14.”

The frozen gate used two fixed `(p, β, τ)` regimes and a small discrete grid for `λ`, latent `rho`, and `h` (`scripts/simulation/e5-sp-symmetry-gate.mjs:116-117`). Its primary pool then excluded `λ=0` and `rho=1`, reserving `λ=0` as a negative control (`scripts/simulation/e5-sp-symmetry-gate.mjs:140-150`). That was legitimate for its narrow go/no-go question, but it does not establish the empirical support of any v1.14 parameter. Indeed, the paper explicitly labels `λ` posited (`drafts/paper.md:588-594`). Reusing these cells as “plausible ranges” would turn a frozen stress-test design into faux empirical provenance.

**Concrete fix:** Treat all gate settings as historical model scenarios. Do not initialize new empirical priors from them. Derive v1.14 supports independently of gate outcomes, preferably with blinded data extraction or an external range-setting protocol.

### Major 6 — “The sketch confuses a normalized difference with a ratio, so its floor and reversal threshold are internally incoherent.”

The estimand is `Δ=(D-C)/O` (`DESIGN_SKETCH.md:30-34`), for which central wins iff `Δ<0`. Yet the open question says “`Δ ≤ 1` (central wins)” (`DESIGN_SKETCH.md:81-83`), and the guardrail illustrates a conditional output as `2.2×` (`DESIGN_SKETCH.md:69-70`). A multiplier threshold of one applies to `D/C`, not `(D-C)/O`. On the declared scale, almost every modest distributed win also satisfies `Δ≤1`; the current gate's pooled median `0.025` is one example (`drafts/paper.md:546-554`).

**Concrete fix:** Choose one primary effect scale and use its correct null everywhere. Recommended: retain `g=(D-C)/O` with reversal at `g=0`, because `D/C` becomes unstable when `C` is small. Delete every `×` rendering for `g`. If `D/C` is retained descriptively, name it `R`, give it a separate interval and floor, and state `R<1` as its central-win condition.

### Major 7 — “Measurement uncertainty and transport uncertainty are absent, so a `MEASURED` endpoint would still be falsely sharp.”

Even future empirical estimates will have sampling error, construct error, domain heterogeneity, and transport uncertainty. The proposed Monte Carlo interval is conditional only on simulated worlds (`DESIGN_SKETCH.md:60-61`, `:67-70`), exactly the limitation the contract already emphasizes (`research/claim-and-estimand-contract.md:59-70`). Plugging empirical point estimates into named profiles would not propagate uncertainty in the range itself.

**Concrete fix:** Represent estimated parameter supports hierarchically: within-study uncertainty, between-site heterogeneity, and explicit transport inflation to the target domain. Propagate parameter-estimation uncertainty separately from simulation noise and model/scenario uncertainty. Report all three; never let a world-cluster Monte Carlo interval stand in for them.

## Required changes before pre-registration

1. **Relabel now:** no proposed empirical input is `MEASURED`; `A` is `NORMATIVE`; all others are `ASSUMED` or, after a real extraction, `PROXY-ANCHORED`/`ESTIMATED`.
2. **Freeze provenance before outcomes:** publish the complete numeric registry and extraction protocol before choosing the simulation box or profile names.
3. **Expand the vector:** include every range-sensitive world, cost, budget, and institutional comparator parameter already known to matter.
4. **Define the scale correctly:** normalized-difference floor at zero; ratio parity at one. Never mix them.
5. **Lead with reversals:** map central-win, parity, and distributed-win regions. The pre-data lower envelope must include the documented central-win region unless external evidence excludes it.
6. **Ban the phrase “measured range” without an estimate:** a literature citation, candidate dataset, elicitation plan, or model output does not qualify.
7. **Defer empirical floor language:** until relevant data exist, call any minimum a *lower envelope over an assumed scenario domain*. If a fifth percentile is shown, state that it is prior-dependent and publish tail mass assigned to central-win states.

## Bottom line

The reframe avoids a single fixed multiplier only cosmetically unless range provenance is solved first. As currently specified, the analyst can recover any desired floor by choosing which competent-central and voice-biased-distributed states count as “plausible,” while leaving already-sensitive constants outside `θ`. The sharp, honest contribution available now is a **conditional reversal surface with explicit unknown ranges**. A positive real-world floor must wait for measurement.
