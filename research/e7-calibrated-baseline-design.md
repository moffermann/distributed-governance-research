# E7 Design — Headline Sensitivity Under a Calibrated Status Quo, Realistic Scale, and Adversarial Signals

## Status

Pre-registered experiment design. Written before implementation and before any run; the Predictions section is committed in advance, per the corpus's adversarial discipline. Motivated by the manuscript-review round of the v1.6 paper: three of five reviewer profiles (academic, systems-architect, public-sector practitioner) independently converged on the same methodological attack, formalized as [[A036-opaque-baseline-calibration-strawman|attacks/A036-opaque-baseline-calibration-strawman.md]] — the E5 opaque arm models an administration with no working controls, the leakage anchor is category-mismatched (capitation cash transfers rather than construction), the E4 central planner's fixed bandwidth mutilates the comparator, and the signal-aggregation results hold only under bias-free signals. E7 measures what survives when each favorable choice is replaced by the reviewers' version. This is the corpus applying [[P001-comparative-critique-rule|knowledge/principles/P001-comparative-critique-rule.md]] to itself: the architecture must be compared against the real institutional system, not against a caricature of it.

## What E7 changes relative to E5/E4 (four interventions, run factorially where meaningful)

1. **Calibrated institutional baseline (S′).** A new status-quo arm modeling a functioning administration with its documented control regime: moderate detection from standing audit institutions and technical inspection (p ∈ 0.30-0.50), payment-state retention (a ≈ 0.5, partial protection), partial recovery through performance bonds (r ≈ 0.3-0.5), no reputational memory (R = 0 — the instrument genuinely absent from the status quo), and official completion recorded against paper certification (the visibility channel unchanged). Leakage outcomes are anchored to the construction-comparable Olken (2007) ~24% figure, not the Uganda capitation 87%; the E5 zero-control arm S is retained and relabeled as the explicit lower bound it is.
2. **Scaled planner bandwidth.** The central selection regime's inspection budget scales with scope (K_PLAN proportional to N_p, at the same 15% ratio that E4's small-scale case implied), removing the fixed-constant mutilation. The E4 fixed-bandwidth planner is retained for continuity and labeled adversarial.
3. **Municipal scale.** All arms run at N_p ∈ {10, 20, 40} — the project counts of a real municipal pilot domain — alongside N_p = 200 for continuity with E4/E5.
4. **Adversarial signal bias (E7b).** The distributed selection regime's citizen signals carry common-mode bias: a fraction β ∈ {0, 0.05, 0.10, 0.20, 0.30, 0.40} of signalers is coordinated (clientelist bloc or astroturf campaign) and reports inflated θ for a designated favored-project set instead of θ + noise. This tests the corpus's declared limit — aggregation defeats noise, not bias — quantitatively, against the E4 admission that biased elicitation is the untested regime.

## Arms

| Arm | Selection | Delivery | Reads as |
|---|---|---|---|
| S | central (fixed bandwidth) | opaque (zero-control) | E5 continuity arm; lower bound, no longer "the status quo" |
| S′ | central (scaled bandwidth) | calibrated institutional controls | the defensible status quo |
| A1′ | central (scaled, same portfolio as S′) | verified (architecture) | delivery effect against real controls |
| A3′ | distributed (β swept) | calibrated institutional controls | selection effect against real controls |
| A2 | distributed (β swept) | verified (architecture) | the full architecture |

Primary contrasts, matched portfolios and paired seeds throughout: the recalibrated multiplier V(A2)/V(S′); the recalibrated delivery effect V(A1′)−V(S′); the recalibrated selection effect V(A3′)−V(S′); the recalibrated visibility gap of S′; and each of these as a function of scale and β.

## Metrics

Per arm, mean ± sd over 20 seeded runs, with paired contrasts reported as mean [95% CI] on the same seeds: delivered value V per unit budget; leak fraction; visibility gap (officially reported completion minus real delivered fraction); sel(θ); executor-pool composition. All multipliers reported with propagated paired CIs — including the headline ratio, which E5 reported without one. Every headline number carries the in-model qualifier in the results text itself.

## Pre-registered predictions (committed before first run)

1. **The multiplier survives recalibration but loses more than half its excess.** V(A2)/V(S′) stays above 1 at every scale, but falls below 1.5× (from 2.19× against zero-control) once real controls are modeled. If it falls near 1, that is the finding and the manuscript's headline must be withdrawn rather than requalified.
2. **The delivery effect shrinks more than the selection effect.** The calibrated baseline already contains most delivery instruments (retention, bonds, inspection), so V(A1′)−V(S′) contracts proportionally more than the selection margin does; the architecture's residual delivery edge concentrates in what S′ genuinely lacks — verifier independence, reputational memory, and metering — rather than in the control instruments themselves.
3. **At municipal scale, selection is a wash and the case rests on delivery plus visibility.** With scaled bandwidth and N_p ≤ 20, central sel(θ) is statistically indistinguishable from distributed sel(θ), and the architecture's advantage at pilot scale comes from the delivery and visibility channels, not from selection. The distributed-selection advantage re-emerges as N_p grows.
4. **Bias degrades aggregation roughly linearly, with a crossover.** Distributed sel(θ) declines approximately linearly in β, and there exists a crossover β* — predicted in the 0.25-0.35 band at small-to-mid scale — beyond which the scaled-bandwidth central planner selects better than biased open aggregation. Below β ≈ 0.10, distributed selection remains superior at every scale.
5. **The visibility gap survives recalibration at reduced size.** S′ still overstates delivery relative to reality — predicted at 8-15 points, versus E5's 29 against zero-control — because paper certification against milestones is not evidence-gated verification. This is the claim expected to emerge as the architecture's most robust, since metering is the one instrument no baseline configuration contains.

If any prediction fails, the failure is reported as a finding.

## Result-determining assumptions, declared in advance

S′'s control parameters are documented-practice-informed but still uncalibrated to a specific administration — E7 reduces the baseline gap from caricature to plausible, not from plausible to measured; calibration against a real participatory-budgeting or procurement dataset remains the declared next phase and is not claimed here. θ remains an oracle. The coordinated-bias model is one bias geometry among several (common-mode inflation of a favored set); dispersed idiosyncratic bias and strategic counter-signaling are not modeled. Honest-executor capacity failure remains unmodeled, so leaks remain lower bounds in all arms.

## What E7 changes in the paper

Whatever survives becomes the paper's recalibrated headline, stated against S′ with paired CIs and in-model qualifiers; the 2.19× figure is retitled as the zero-control bound and removed from the abstract unless S′ sustains a multiplier of comparable rhetorical weight. Finding 4's open-construction claim gains its bias-conditional statement (β-dependence and crossover). Section 9's pilot expectations are restated at municipal scale. The limitations section replaces "parameters plausible, not calibrated" with the two-tier statement E7 makes true: caricature-robust, calibration-pending.
