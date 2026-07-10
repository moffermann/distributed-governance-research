# D036 - Defense Against A036: The Opaque Baseline Is a Strawman

## Integration status

Manuscript-review round paired review completed. Accepted resolution: [[105_CALIBRATED_BASELINE_EVIDENCE_AND_A036_RESOLUTION|docs/105_CALIBRATED_BASELINE_EVIDENCE_AND_A036_RESOLUTION.md]]. NOTE (2026-07-10): the pre-registered E7 experiment is **superseded** — the later symmetry gate (NO-GO) is the current arbiter and the calibrated multiplier is retired.

## Attack reference

- Attack file: [[A036-opaque-baseline-calibration-strawman|attacks/A036-opaque-baseline-calibration-strawman.md]]
- Attack title: `A036 - The Opaque Baseline Is a Strawman: The Status Quo Already Contains a Control Regime`
- Source: manuscript v1.6 review round — academic, systems-architect, and public-sector-practitioner reviewers, convergent.

## Attack summary

The attack argues that the manuscript's headline figures — the 2.19× delivered-value multiplier, the +43% delivery effect, and the 29-point visibility gap — are measured against an opaque arm parameterized as near-zero control, while real administrations already operate audit institutions, retentions, performance bonds, technical inspection, and procurement platforms. It adds that the leakage anchor is category-mismatched (capitation cash transfers at 87% calibrating a construction regime whose comparable measurement is ~24%), that the verified arm's zero leak is an algebraic identity of chosen parameters, and that the corpus thereby violates its own P001 rule in its most visible claim.

## Objective evaluation

- Classification: founded as a presentation and calibration objection; partially founded as a substantive objection.
- Why it is founded: the headline figures travel in the abstract and conclusion without the in-model qualifier the limitations section requires; the dramatic anchor is category-mismatched to the running example's project type; and the deterrence-by-construction identity is documented in the corpus's own results and then not allowed to discipline the headline. Three profiles reached this independently, one of them by auditing the code.
- Why it is not fatal to the architecture: the empirical anchors were measured in administrations that already had the paper controls the attack lists — Uganda's leakage occurred under a state with audit institutions and procurement law; Indonesia's 24% survived standing supervision. The documented band is therefore leakage *net of the existing control regime as practiced*, not the leakage of a zero-control fantasy: the modeled opaque arm is an extreme point of a real band, not an invention. What the status quo demonstrably lacks — verifier independence from the verified, reputational memory, and metering — is exactly what the architecture adds, and no calibration choice removes that structural difference.
- Difference of judgment: medium. Where within the 24-87% band a fair baseline sits is an empirical question the corpus can answer by running it, which is what E7 pre-registers; the attack and the defense agree on the test.
- Editorial distortion risk: medium. The attack would distort the project if it were read as showing the architecture adds nothing — the paper-controls regime it invokes is precisely the regime whose measured leakage and unverified completion the empirical literature documents; "controls exist on paper" and "delivery is verified" are different claims, and conflating them would concede the attack more than its own evidence supports.

## Response

The defense concedes the presentation core immediately, because the corpus's own declared standards concede it: the limitations section states that parameters are plausible rather than calibrated and that directions, not point values, are the findings — and an abstract that carries 2.19× without that qualifier is out of compliance with the manuscript's own rules. That is a correctable editorial failure, not a finding against the architecture.

On substance, the defense is comparative, per P001 read symmetrically. The attack's picture of the status quo — audit institutions, retentions, bonds, inspection — is the status quo *de jure*. The corpus's empirical anchors are measurements of that same status quo *de facto*: Reinikka and Svensson's 87% and Olken's 24% were not measured in stateless voids but in administrations equipped with the attack's full control list. The real dispute is therefore not "controls versus no controls" but where practiced enforcement sits inside a wide documented band, and which instruments close the gap between reported and real delivery. On that question the architecture's distinctive claims survive any point in the band: no configuration of the existing regime makes the verifier independent of the verified by construction, none carries reputational memory across procurements, and none meters the gap between certified and actual completion — the visibility gap can only be *measured at all* inside an architecture that records both sides.

The defense's decisive move, however, is procedural: the corpus does not argue this; it runs it. E7 pre-registers the calibrated institutional baseline the three reviewers demanded — moderate detection, retention, bond-backed recovery, the construction-category anchor, scaled planner bandwidth, municipal scale — with committed predictions that put the headline at risk in writing: if the multiplier collapses toward 1 against the calibrated baseline, the manuscript's headline is withdrawn, not requalified. An attack whose empirical test the project pre-registers against itself, with a stated withdrawal condition, is an attack that has been integrated in the strongest sense the method allows.

## Project-document basis

- [[P001-comparative-critique-rule|knowledge/principles/P001-comparative-critique-rule.md]] requires comparison against how the current system actually performs — which cuts both ways: against caricatured baselines, and against reading paper controls as practiced enforcement.
- [[e5-value-delivery-design|research/e5-value-delivery-design.md]] declared the opaque band literature-anchored and uncalibrated from the outset, with sensitivity across the band as part of the design.
- [[simulation-results|research/simulation-results.md]] documents the result-determining assumptions this attack turns on — the leakage band, the deterrence identity, and the direction-not-points rule — in its own declared-limits sections.
- [[e7-calibrated-baseline-design|research/e7-calibrated-baseline-design.md]] pre-registers the attack's test with committed predictions, including the withdrawal condition on the headline.
- [[P007-integrate-or-bound-rule|knowledge/principles/P007-integrate-or-bound-rule.md]] governs the outcome: the objection integrates as an experiment and an editorial rule rather than as a rhetorical concession.

## Bibliographic basis

- Harold Demsetz, "Information and Efficiency: Another Viewpoint" (1969): comparative institutional analysis requires real alternatives on both sides — the attack's own standard, accepted here as binding on the corpus.
- Ritva Reinikka and Jakob Svensson, "Local Capture: Evidence from a Central Government Transfer Program in Uganda" (2004): the 87% was measured inside a formally controlled administration — de facto leakage under de jure controls.
- Benjamin Olken, "Monitoring Corruption: Evidence from a Field Experiment in Indonesia" (2007): the category-matched construction anchor, and evidence that even intensified top-down audit leaves a residual gap.
- Ritva Reinikka and Jakob Svensson, "The Power of Information in Public Services" (2011): publishing the gap — metering — reduced capture where formal controls alone had not; the architecture's distinctive instrument has its own empirical line.
- Nicola Dimitri, Gustavo Piga, and Giancarlo Spagnolo (eds.), `Handbook of Procurement` (2006): the existing contractual toolkit a calibrated baseline must include, adopted as E7's parameterization guide.

## Proposed improvements

Integrate the objection as method rather than argument:

- run E7 as pre-registered and let its outcome set the manuscript's headline, including the committed withdrawal condition;
- adopt the editorial rule that no simulation figure appears in abstract or conclusion without its in-model qualifier and named baseline;
- relabel the zero-control arm as an explicit lower bound in every surface that mentions it, retiring "status quo" as its name;
- report the headline multiplier with a propagated paired confidence interval, and stop juxtaposing percentage headlines with absolute-unit intervals;
- record in the methods section that P001 binds the corpus's self-comparisons symmetrically.

## Applies to

- the manuscript's abstract, Finding 5, and conclusion;
- research/simulation-results.md and the E5/E7 design documents;
- the publishable model's tested-so-far section;
- the essay and plain-language derivatives that quote the headline;
- the corpus's editorial rules for reporting simulation evidence.

## Defense strength and residual risk

Defense strength: strong on the de-facto-versus-de-jure comparative point (the empirical anchors already measure administrations with the attack's control list) and strong procedurally, because the pre-registered E7 converts the dispute into a falsifiable test with a committed withdrawal condition. Weak — deliberately undefended — on the presentation core, which is conceded as an editorial compliance failure.

Residual risk: E7's calibrated baseline is itself parameterized from documented practice rather than measured against a specific administration, so a determined critic can iterate the attack one level up; the full answer is the declared calibration-to-real-PB-data phase, and until E7 runs, the v1.6 headline stands in public with the weakness the attack names.

## Decision

The attack is founded in presentation and calibration and partially founded in substance. It integrates as the pre-registered E7 experiment plus a binding editorial rule for simulation figures; the architecture's structural claims (verifier independence, reputational memory, metering) are defended as baseline-independent, and the headline multiplier is explicitly placed at E7's mercy.
