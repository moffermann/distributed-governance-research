# Critique dimension 5 — honesty guardrails / retired-multiplier relapse

## Verdict

**Not honest enough as-is; viable only with substantial reporting changes. Yes, the sketch explicitly risks resurrecting the retired multiplier.** The surface reframe is defensible in principle, but the proposed presentation is not merely adjacent to the old failure mode: it reinstates the same `2.2× [CI]` visual object, gives it a substantively named real-world “state,” and then relies on nearby model-internal caveats to prevent magnitude inference. The prior audit already established that “model-internal” caveats do not cure a headline hierarchy that foregrounds an unsupported magnitude (`audits/2026-07-10-round2/high-value-improvements.md:11-15`).

The sketch also commits a basic estimand error. It defines `Δ = (D-C)/O`, an additive difference normalized by the full-information reference (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH.md:30-34`), but proposes reporting `2.2×`, which is multiplicative ratio notation (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH.md:65-75`). A value of `Δ = 2.2` would mean a difference equal to 220% of `O`; it does **not** mean distributed delivery is 2.2 times central delivery. If the intended statistic is `D/C`, it is a different estimand and must not be called `Δ`.

## Severity-ranked issues and concrete fixes

### 1. Critical — the proposed `2.2× [CI]` both changes the estimand and recreates the withdrawn headline

> **Quotable issue:** “A surface is not an epistemic reset if its featured coordinate is the same retired multiplier, in the same notation, with a confidence-looking interval.”

The governing contract defines the selection contrast as `(D-C)/O` and expressly separates it from a future total delivered-value estimand (`research/claim-and-estimand-contract.md:7-22`). It also forbids multiplying selection and delivery into a headline (`research/claim-and-estimand-contract.md:39-45`). The sketch adopts the normalized-difference estimand (`DESIGN_SKETCH.md:30-34`) but then switches without explanation to “state X → 2.2× [CI]” (`DESIGN_SKETCH.md:65-70`). That notation reads as `D/C`, not `(D-C)/O`, and resembles the paper's retired `2.22×` value-per-budget ratio almost exactly (`drafts/paper.md:539-544`).

This is especially dangerous because the old number was a compound selection-and-delivery ratio, whereas the controlling test is selection-only under delivery parity (`drafts/paper.md:546-566`). A reader can therefore infer all three false propositions at once: (i) the new analysis restored the old magnitude, (ii) the number is an architecture-level total effect, and (iii) the interval makes that effect statistically estimated. The authoritative paper says the opposite: its load-bearing contribution is mechanism direction, not a point multiplier (`drafts/paper.md:565-566`; see also `drafts/paper.md:1373-1385`).

**Concrete fix:**

- Ban multiplier notation from the primary and profile reporting for this estimand. Report signed `Δ` only, in “percentage points of the full-information greedy reference,” e.g. `Δ = 0.026`, never `2.2×`.
- If `R = D/C` is retained as a secondary descriptive statistic, define it as a separate estimand, state that it becomes unstable when `C` is near zero or negative, and never present it in the title, abstract, summary, profile name, or lead figure.
- Remove `2.2×` even as a placeholder. Its exact match to the retired neighborhood is needless target leakage and is already known to be non-independent: the prior audit found that agreement with the old `~2.2×` after outcome-aware modeling is not corroboration (`audits/2026-07-10/headline-number.md:160-164`).

### 2. Critical — “unless θ is measured” falsely implies that measured inputs convert the output into a real-world effect

> **Quotable issue:** “Measuring model inputs can calibrate a simulation; it does not identify the architecture's causal effect.”

The sketch says `Δ(θ)` is model-internal/conditional “unless θ is measured” (`DESIGN_SKETCH.md:65-68`). That exception is too broad. Even perfect measurement of the listed inputs would not, by itself, validate the functional form, establish transport to the target jurisdiction, bridge latent valuation to observed public value, identify the counterfactual institutional treatment, or cover omitted mechanisms. The governing contract requires relevant real measurement of the project-value distribution, appraisal errors, sponsor–public-value relationship, and delivery effects before any simulation output can be interpreted beyond a conditional output (`research/claim-and-estimand-contract.md:47-70`). It also records uncalibrated value/cost units, an uncalibrated project-generating distribution, and multiple omitted endogenous processes (`research/claim-and-estimand-contract.md:47-57`). The paper is even more explicit: no pilot has run, the symmetry gate is not calibrated to a PB dataset, and remaining parameters are plausible rather than measured (`drafts/paper.md:1265-1275`); the paper does not answer by how much real-world value improves (`drafts/paper.md:1279-1287`).

**Concrete fix:** Replace the exception with a permanent hierarchy:

1. With assumed inputs: **conditional stylized-model output**.
2. With measured inputs but no external validation: **empirically anchored model prediction**, still not an estimated treatment effect.
3. Only after prespecified out-of-sample validation and a design that identifies the institutional counterfactual: an **empirical effect estimate**, reported with sampling, parameter, and model uncertainty.

No number should be called a real-world magnitude merely because every row in the θ table has acquired a `MEASURED` tag.

### 3. Major — the world-cluster Monte-Carlo interval communicates precision about the wrong uncertainty

> **Quotable issue:** “The proposed 95% interval can become arbitrarily narrow by simulating more worlds while uncertainty about the model, ranges, and real institution remains unchanged.”

The sketch proposes a “95% world-cluster Monte-Carlo interval” beside each state-profile number (`DESIGN_SKETCH.md:54-63`) and says a label distinguishing it from empirical uncertainty is enough (`DESIGN_SKETCH.md:65-70`). It is not. That interval captures simulation/world variability conditional on the chosen DGP and fixed θ. It excludes range uncertainty, parameter-estimation uncertainty, measurement error in θ, structural/model-form uncertainty, scenario-classification error, and external-validity uncertainty. The gate diagnostics correctly describe the existing interval as a world-cluster interval on the simulated DGP (`audits/2026-07-10/symmetry-gate-diagnostics-notes.md:7-10`), while the prior headline audit found that structural calibration, not Monte-Carlo noise, dominates uncertainty (`audits/2026-07-10/headline-number.md:136-152`).

Putting `[lower, upper]` immediately after `2.2×` predictably resembles an empirical confidence interval. “DGP-conditional” in methods or a footnote will not undo that first impression, especially because the paper itself uses the familiar `95% ... interval` syntax for the gate (`drafts/paper.md:546-554`).

**Concrete fix:**

- Call it a **simulation-replication interval** or report a Monte-Carlo standard error; do not abbreviate it to `CI`.
- Do not place it in the headline/profile label. Put it in a column headed “simulation variability at fixed θ and fixed model.”
- Beside it, report the far more important spread from parameter/range and model/specification uncertainty. If that cannot be quantified, state `not quantified`, visibly.
- Prespecify the exact sentence: “This interval measures repeat-run variability of the stipulated simulator; it is not an empirical confidence interval and has no real-world coverage interpretation.”

### 4. Major — substantively named “state archetypes” launder assumptions into observations

> **Quotable issue:** “Calling a hand-set θ vector ‘high-contestation/low-proxy-quality’ makes a synthetic coordinate sound like a diagnosed jurisdiction.”

The sketch proposes named state archetypes such as “high-contestation/low-proxy-quality” and “consensus/high-proxy-quality” (`DESIGN_SKETCH.md:60-62`), even though several governing inputs are only partially sourced, assumed, or merely elicitable (`DESIGN_SKETCH.md:41-52`). A reader can naturally interpret “state X → 2.2×” as a forecast for real places matching a recognizable political description. Yet no classification rule maps observed institutions into these latent parameter vectors, and no validation establishes that the archetype label predicts the joint DGP.

The arrow worsens the problem: it visually asserts a state-to-outcome mapping rather than a simulator input-to-output mapping. This recreates the old calibration trap in a friendlier wrapper. The earlier audit found that choosing a preferred parameter region after seeing that it recovered the old magnitude was outcome-aware scenario selection, not exogenous calibration (`audits/2026-07-10/headline-number.md:65-67`). Freezing profiles now does not erase knowledge of the target or of prior engine behavior.

**Concrete fix:**

- Until an external measurement/classification rule exists, use neutral labels such as **Synthetic scenario S1** and print the full θ vector next to every output.
- If substantive labels are later used, preregister observable inclusion criteria, data sources, cut points, missing-data rules, and an out-of-sample mapping from a real unit to θ **before** computing profile outcomes.
- Select profiles from externally defined empirical quantiles or report the entire finite scenario grid. Do not choose coordinates because they yield a memorable or historically familiar number.

### 5. Major — “floor” and “does not fall below” turn a conditional simulation summary into a guarantee

> **Quotable issue:** “A fifth percentile is not a floor, and a minimum over an author-drawn plausibility box is not a guarantee about the architecture.”

The sketch says it will “lead with the floor” (`DESIGN_SKETCH.md:8-13`) and defines that floor as either a minimum **or** a low quantile such as the fifth percentile, glossed as “the architecture does not fall below X vs the status quo” (`DESIGN_SKETCH.md:56-62`). These are three different claims. A fifth percentile explicitly permits 5% of prior mass below the reported value. A sampled minimum is not necessarily the mathematical minimum. Even an exact minimum only applies inside the chosen parameter/model region; it says nothing about omitted mechanisms or the world outside that region.

The phrase “the architecture ... vs the status quo” strips away the simulator qualification and reads as an institutional guarantee. That conflicts with the contract's description of the engine as a stylized selection mechanism rather than a validated Core v0 implementation (`research/claim-and-estimand-contract.md:47-57`) and with its binding interpretation clause (`research/claim-and-estimand-contract.md:59-70`). It also makes any central-win region easy to bury behind a positive fifth percentile.

**Concrete fix:**

- Reserve **floor** for a proven or exhaustively computed minimum over an explicitly closed, preregistered domain. Call a fifth percentile a “prior-weighted fifth percentile,” never a floor.
- Use the sentence: “Within synthetic model M and preregistered domain Θ, the lowest computed normalized selection contrast was X.”
- Report the share of the domain/prior with `Δ ≤ 0`, the most adverse central-win scenario, and all sign reversals before any positive quantile. If central wins anywhere in the declared plausible region, the lead must say so.

### 6. Major — local caveats are insufficient because the reporting hierarchy itself is the misleading mechanism

> **Quotable issue:** “The caveat is accurate, but the hierarchy is not: readers remember the named state, the `2.2×`, and the brackets—not the ontology of the interval.”

The guardrails are individually well intentioned (`DESIGN_SKETCH.md:65-75`), but they put the memorable policy-shaped claim first and ask qualifiers to retract its ordinary meaning. The project has already encountered this exact failure. The previous audit found that model-internal caveats did not cure an abstract/conclusion hierarchy dominated by large numbers (`audits/2026-07-10-round2/high-value-improvements.md:11-15`), and its recommended remedy was to move retired apparatus magnitudes to a clearly historical location and lead with the NO-GO, direction, and inference boundary (`audits/2026-07-10-round2/high-value-improvements.md:38-45`). The current paper accordingly labels the old ratios superseded for magnitude inference (`drafts/paper.md:539-544`) and states that its contribution is direction rather than a multiplier (`drafts/paper.md:546-566`). v1.14 should not reverse that evidence hierarchy by making a new conditional multiplier the most legible object.

**Concrete fix:** Adopt a reporting embargo on any profile multiplier until empirical identification and validation exist. The primary output should be:

1. sign map and parity/central-win regions;
2. sensitivity/range provenance;
3. signed normalized differences with model/specification uncertainty;
4. synthetic profiles, if still useful, in a secondary table with no multiplier notation and no standalone headline.

## Exactly how a reasonable reader could misread the result

1. The reader sees a real-world-sounding label such as “high-contestation/low-proxy-quality.”
2. The arrow in “state X → 2.2×” reads causally/predictively: places in state X receive 2.2 times the value.
3. The exact number matches the paper's previously public `2.22×` status-quo comparison (`drafts/paper.md:539-544`), so it looks like a sophisticated revalidation rather than a different conditional statistic.
4. Brackets labelled `95%` make the estimate look empirically precise, even though more simulation worlds narrow only Monte-Carlo error.
5. “Measured” parameter tags suggest empirical estimation, although measured inputs do not identify the architecture's treatment effect.
6. “Floor” and “does not fall below” suggest robustness beyond the author-defined model region and conceal any tail or omitted-model reversals.
7. The model-internal caveat is then read as routine academic caution, not as a statement that **no real-world magnitude has been estimated at all**.

## Minimum honesty conditions before pre-registration

- Delete the `2.2× [CI]` framing and keep the declared `(D-C)/O` estimand in consistent additive units.
- State that all outputs remain model predictions even when inputs are measured; define the additional validation and causal-identification gates needed for empirical effect language.
- Replace profile “CIs” with explicitly labelled simulation variability and foreground parameter/model uncertainty.
- Use neutral synthetic scenario labels until a preregistered observable mapping to real states exists.
- Replace the ambiguous floor with an exact domain minimum or correctly named quantile, and lead with sign reversals/central-win regions.
- Add a binding reporting rule: **no standalone multiplier, no state-to-magnitude arrow, and no “architecture delivers” construction before external identification.**

With those changes, a mechanism-governed surface can be an honest conditional analysis. Without them, v1.14 would reintroduce the retired multiplier in a more technically decorated—but no more empirically identified—form.
