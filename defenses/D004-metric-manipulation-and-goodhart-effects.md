# D004 - Defense Against A004: Metric Manipulation and Goodhart Effects

## Integration status

Phase 3 paired review completed and propagated. Accepted resolution: [[70_METRIC_GAMING_TEST_AND_A004_RESOLUTION|docs/70_METRIC_GAMING_TEST_AND_A004_RESOLUTION.md]].

## Attack reference

- Attack file: [[A004-metric-manipulation-and-goodhart-effects|attacks/A004-metric-manipulation-and-goodhart-effects.md]]
- Attack title: `A004 - Metric Manipulation and Goodhart Effects`
- Roadmap source: Phase 3 priority objection, manipulation of metrics.

## Attack summary

The attack argues that actors may satisfy a metric while defeating the underlying value. In the Macul example, "number of courts built" can be satisfied while the courts are unusable, inaccessible, unsafe, missing bathrooms, wrong-sized, poorly maintained, or unavailable to the public.

## Objective evaluation

- Classification: founded and expected.
- Why it is founded: any accountability system using metrics is exposed to Goodhart/Campbell effects, especially when money, reputation, or closure depends on measurable indicators.
- Why it is not fatal to the architecture: Core v0 already rejects isolated metrics and uses value floors, antivalue ceilings, Value Verification Packages, Project Evidential Contracts, qualitative context, beneficiary signals, fiscalizer judgment, complaints, contradictions, and role-specific reputation.
- Difference of judgment: low. Metric gaming is a classic and well-supported institutional risk.
- Editorial distortion risk: medium. The attack would distort the project if it leads to abandoning measurement entirely. The correct defense is not "no metrics"; it is metrics embedded in broader verification.

## Response

The defense is that metrics are instruments of verification, not the definition of public value.

The model should not approve, close, release, or reward a project solely because one isolated number was met. Each metric must connect to a value floor, antivalue ceiling, material claim, evidence need, review method, and possible consequence.

For Macul, a court-count metric is weak unless it is joined with dimensions, safety, public access, accessibility, bathrooms where promised or required, maintenance, use evidence, affected-party observations, noise ceilings, and fiscalizer review.

## Project-document basis

- [[H018-project-value-thesis-and-measurement#^r74573eb0|knowledge/hypotheses/H018-project-value-thesis-and-measurement.md]] identifies the risk of attractive value with weak or input-only metrics.
- [[H018-project-value-thesis-and-measurement#^rbc8194be|knowledge/hypotheses/H018-project-value-thesis-and-measurement.md]] connects value floors and antivalue ceilings to the Project Evidential Contract and fulfillment/control evidence needs.
- [[H018-project-value-thesis-and-measurement#^reaf2a7fd|knowledge/hypotheses/H018-project-value-thesis-and-measurement.md]] states that metrics should not be only input measures.
- [[H018-project-value-thesis-and-measurement#^r36d55ad5|knowledge/hypotheses/H018-project-value-thesis-and-measurement.md]] requires a proportional Value Verification Package for every promised value.
- [[44_VALUE_VERIFICATION_AND_C010_RESOLUTION#^r836f6a1c|docs/44_VALUE_VERIFICATION_AND_C010_RESOLUTION.md]] states that metrics are instruments of verification, not substitutes for public value.
- [[44_VALUE_VERIFICATION_AND_C010_RESOLUTION#^ra78252bd|docs/44_VALUE_VERIFICATION_AND_C010_RESOLUTION.md]] replaces isolated metrics with a Value Verification Package.
- [[44_VALUE_VERIFICATION_AND_C010_RESOLUTION#Minimum v0 rule|docs/44_VALUE_VERIFICATION_AND_C010_RESOLUTION.md]] require non-input-only metrics, evidence linkage, beneficiary confirmation where relevant, risk checks, and antivalue-ceiling review.
- [[44_VALUE_VERIFICATION_AND_C010_RESOLUTION#^r804c04ab|docs/44_VALUE_VERIFICATION_AND_C010_RESOLUTION.md]] states that a project should not be approved, closed as fulfilled, or fully released solely because one narrow metric was met.
- [[56_VALUE_FULFILLMENT_REPUTATION_AND_C018_RESOLUTION#^r36df0dc8|docs/56_VALUE_FULFILLMENT_REPUTATION_AND_C018_RESOLUTION.md]] requires metric weights before funding begins.
- [[13_VALUE_ICON_CATALOG_AND_METRIC_VALIDATOR#^r79fdd97e|docs/13_VALUE_ICON_CATALOG_AND_METRIC_VALIDATOR.md]] states that metrics must be linked to evidence.

## Bibliographic basis

- Charles Goodhart, "Problems of Monetary Management" (1975): a measure can stop being a good measure when it becomes a target.
- Donald Campbell, "Assessing the Impact of Planned Social Change" (1976): indicators used for decisions are vulnerable to corruption and distortion.
- Bengt Holmstrom and Paul Milgrom, "Multitask Principal-Agent Analyses" (1991): rewarding measured tasks can distort unmeasured tasks.
- Michael Power, `The Audit Society` (1997): audit and measurement can produce formal compliance without substantive accountability.
- Kenneth Arrow, `Social Choice and Individual Values` (1951): plural values are difficult to compress into single measures.

## Proposed improvements

Add a metric-gaming / evidence-coverage test to the `ValueVerificationPackage` and `ProjectEvidentialContract`:

- does the metric measure an input, activity, output, outcome, continuity condition, or antivalue ceiling;
- what relevant value dimension remains unmeasured;
- what gaming behavior would let the actor satisfy the metric while defeating the value;
- what beneficiary or affected-party contradiction path applies;
- whether metric change after funding requires correction, operational variation, material reformulation, or new project.
- whether every declared value floor, formal secondary value, antivalue ceiling, material value claim, and relevant metric has required fulfillment/control evidence needs.

## Applies to

- ValueThesis;
- Value-Antivalue Profile;
- Metric;
- ValueVerificationPackage;
- ProjectEvidentialContract;
- FulfillmentEvidenceNeed;
- EvaluationRecord;
- closure and role-specific reputation.

## Defense strength and residual risk

Defense strength: stronger after A004 propagation. The architecture now treats metric-gaming as a required evidence-coverage check before funding and formal effects, while A013 separately handles quality and sufficiency of submitted evidence.

Residual risk: fiscalizers may apply qualitative judgment inconsistently, beneficiaries may be selectively measured, and proposers may still prefer easy metrics. This requires explicit coverage status, reviewable metric design, and visible coverage-gap labels.

## Decision

The attack is founded but already central to the model. The architecture should not abandon metrics; it should enforce evidence coverage for each value and antivalue commitment before funding, disbursement, closure, and reputation effects.
