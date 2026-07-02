# D004 - Defense Against A004: Metric Manipulation and Goodhart Effects

## Attack reference

- Attack file: `attacks/A004-metric-manipulation-and-goodhart-effects.md`
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

- `knowledge/hypotheses/H018-project-value-thesis-and-measurement.md:24` identifies the risk of attractive value with weak or input-only metrics.
- `knowledge/hypotheses/H018-project-value-thesis-and-measurement.md:46` connects value floors and antivalue ceilings to the Project Evidential Contract and fulfillment/control evidence needs.
- `knowledge/hypotheses/H018-project-value-thesis-and-measurement.md:54` states that metrics should not be only input measures.
- `knowledge/hypotheses/H018-project-value-thesis-and-measurement.md:105` requires a proportional Value Verification Package for every promised value.
- `docs/44_VALUE_VERIFICATION_AND_C010_RESOLUTION.md:15` states that metrics are instruments of verification, not substitutes for public value.
- `docs/44_VALUE_VERIFICATION_AND_C010_RESOLUTION.md:42` replaces isolated metrics with a Value Verification Package.
- `docs/44_VALUE_VERIFICATION_AND_C010_RESOLUTION.md:84` through `docs/44_VALUE_VERIFICATION_AND_C010_RESOLUTION.md:89` require non-input-only metrics, evidence linkage, beneficiary confirmation where relevant, risk checks, and antivalue-ceiling review.
- `docs/44_VALUE_VERIFICATION_AND_C010_RESOLUTION.md:354` states that a project should not be approved, closed as fulfilled, or fully released solely because one narrow metric was met.
- `docs/56_VALUE_FULFILLMENT_REPUTATION_AND_C018_RESOLUTION.md:143` requires metric weights before funding begins.
- `docs/13_VALUE_ICON_CATALOG_AND_METRIC_VALIDATOR.md:448` states that metrics must be linked to evidence.

## Bibliographic basis

- Charles Goodhart, "Problems of Monetary Management" (1975): a measure can stop being a good measure when it becomes a target.
- Donald Campbell, "Assessing the Impact of Planned Social Change" (1976): indicators used for decisions are vulnerable to corruption and distortion.
- Bengt Holmstrom and Paul Milgrom, "Multitask Principal-Agent Analyses" (1991): rewarding measured tasks can distort unmeasured tasks.
- Michael Power, `The Audit Society` (1997): audit and measurement can produce formal compliance without substantive accountability.
- Kenneth Arrow, `Social Choice and Individual Values` (1951): plural values are difficult to compress into single measures.

## Proposed improvements

Add a metric-gaming test to the `ValueVerificationPackage` and `ProjectEvidentialContract`:

- does the metric measure an input, activity, output, outcome, continuity condition, or antivalue ceiling;
- what relevant value dimension remains unmeasured;
- what gaming behavior would let the actor satisfy the metric while defeating the value;
- what beneficiary or affected-party contradiction path applies;
- whether metric change after funding requires correction, operational variation, material reformulation, or new project.

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

Defense strength: strong conceptually, moderate operationally.

Residual risk: fiscalizers may apply qualitative judgment inconsistently, beneficiaries may be selectively measured, and proposers may still prefer easy metrics. This requires explicit metric-gaming prompts and reviewable metric design.

## Decision

The attack is founded but already central to the model. The architecture should not abandon metrics; it should finalize the metric-gaming test and enforce broader verification before disbursement, closure, and reputation effects.
