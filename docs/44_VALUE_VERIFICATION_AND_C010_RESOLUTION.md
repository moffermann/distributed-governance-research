# Value Verification and C010 Resolution v0

## Purpose

This document resolves contradiction C010 from the v0 contradiction checklist.

C010 was originally framed as the risk that metrics can distort public value. The system requires metrics to prevent vague promises, but metrics can become harmful if they replace value, encourage shallow compliance, or reward what is easy to count rather than what is meaningful.

## Status

Accepted as the v0 resolution for C010.

## Core principle

> Metrics are instruments of verification, not substitutes for public value. ^r836f6a1c

A project should not be considered successful merely because it satisfied one isolated metric if the broader fulfillment evidence shows that the promised value was weak, distorted, or not reasonably produced.

## The contradiction

The system needs metrics because projects must be verifiable.

But metrics can distort behavior when actors optimize for the indicator instead of the value.

Examples:

```text
Metric: number of sessions.
Distortion: many low-quality sessions.

Metric: number of participants.
Distortion: inflated attendance or shallow participation.

Metric: number of delivered objects.
Distortion: objects delivered but not used or not useful.
```

Without metrics, promises become vague. With narrow metrics, value can be gamed.

## Resolution

Core v0 should use a `Value Verification Package` instead of isolated metrics. ^ra78252bd

Each promised value should be verified through multiple dimensions rather than a single number.

## Value Verification Package

A value verification package may include:

- activity metrics;
- reach metrics;
- continuity metrics;
- quality signals;
- beneficiary confirmation;
- fiscalizer observation;
- fulfillment evidence items;
- evidence-coverage matrix for value floors, formal secondary values, antivalue ceilings, material claims, and metrics;
- material information claims and corrections;
- risk and antivalue review;
- contradiction or complaint signals;
- final value assessment.

The exact package depends on the value type and project risk.

The package defines fulfillment evidence needs and source-role expectations. It should not preselect the independent evidence producers who later verify the project.

H012 adds that the package should distinguish positive floors from negative ceilings:

```text
Value floor:
  minimum positive commitment to reach.

Antivalue ceiling:
  maximum negative effect not to exceed.
```

Both may require metrics, qualitative commitments, fulfillment/control evidence, fiscalizer review, and role-specific consequences.

## Minimum v0 rule

For every promised value:

```text
1. At least two verification dimensions should be defined.
2. A pure activity metric should not be sufficient by itself.
3. Every metric must connect to fulfillment evidence.
4. Beneficiary feedback or confirmation should be included when relevant.
5. Antivalues and risks must be reviewed at closure.
6. The fiscalizer may mark formal compliance as weak if the value is not reasonably demonstrated.
7. Antivalue ceilings should be reviewed against their declared thresholds, measurement method, affected zones or parties, and required fulfillment/control evidence.
8. Every value floor, formal secondary value, antivalue ceiling, material value claim, and relevant metric must pass an evidence-coverage check or be marked as a coverage gap before funding or formal effects.
```

## Relationship with material information claims

H023 treats value statements, metric statements, beneficiary counts, milestone declarations, and risk-mitigation declarations as material information claims when they affect funding, disbursement, closure, trust, or reputation.

Value verification should therefore preserve the relationship between:

- promised value;
- metric or qualitative commitment;
- material claim;
- supporting fulfillment evidence;
- contradictory contextualized evidence;
- review status;
- correction history;
- responsibility or verified-discovery effect where applicable.

Example:

```text
Promised value:
Sports participation for children.

Material claim:
80 children regularly attended.

Fulfillment evidence:
Attendance lists, parent confirmations, evidence-producer observations, photos, and fiscalizer review.

Possible conclusion:
Formal sessions occurred, but the beneficiary count was materially overstated.
```

This keeps the citizen-facing signal simple while making the technical value-verification package auditable.

## Relationship with the Project Evidential Contract

H022 defines the ex ante Project Evidential Contract.

The Value Verification Package is the value-specific part of that contract. It explains how each promised value will be verified through metrics, fulfillment evidence needs, qualitative context, beneficiary signals, fiscalizer judgment, complaints, contradictions, risk review, and final assessment.

A004 adds that the package must be checked for required evidence coverage. The package should answer, for each value-relevant commitment:

```text
What value or antivalue dimension is claimed?
What metric or qualitative commitment represents it?
What fulfillment/control evidence is necessary to verify it?
What beneficiary, affected-party, contradiction, or qualitative review path is required where direct experience matters?
What formal consequence applies if the evidence is missing, weak, contradicted, or later fails A013 review?
```

The accepted status should be one of:

```text
coverage complete
coverage weak
coverage gap
metric gap
under correction
```

Where a value floor, antivalue ceiling, milestone, or material claim depends on a hard technical KPI, the package should also identify the required evidence producer qualification standard, method or protocol, instrument/tool expectations, metadata, and report limitations needed for formal proof. The package does not need to name the final producer, but it must say what kind of qualified producer and method can prove the claim.

Independent evidence producers may later offer fulfillment/control evidence tied to specific value floors, antivalue ceilings, metrics, material claims, milestones, phases, risks, or declared antivalues. Fulfillment/control evidence that satisfies accepted package needs has higher eligibility priority, while unexpected fulfillment/control evidence may still be accepted when equivalent, necessary, materially useful, or complementary within the available control budget.

Example:

```text
Project:
Sports school for 80 children.

Evidential contract:
attendance records, beneficiary confirmation, activity fulfillment evidence, fiscalizer review, and contradiction path.

Value Verification Package:
sessions delivered, regular attendance, continuity, beneficiary feedback, fulfillment evidence strength, and antivalue check.
```

If the project changes the evidential contract after support or funding, the value-verification package should preserve the old version, explain the change, and trigger reformulation or review where the change materially weakens what citizens funded.

## Relationship with observability-based evaluation

H015 adds that value verification must distinguish evaluation context.

Beneficiary feedback, affected-party experience, citizen observations, expert opinions, fiscalizer conclusions, complaint findings, and reputation inputs should not collapse into one undifferentiated score. ^r16045dbf

For every formal value-verification input, the technical layer should record:

```text
evaluated dimension
actor role
observability basis
authority or qualification basis where applicable
contextualized evidence used
evaluation type
formal effect
producer qualification basis where formal proof is claimed
method, instrument, or protocol basis where relevant
```

Example:

```text
Macul multi-court project:
  beneficiary confirms whether public access was real;
  resident complains that bathrooms are missing;
  technical reviewer checks dimensions and safety;
  fiscalizer decides whether the design gate or construction milestone is accepted.
```

Each signal matters, but each has a different procedural effect.

## Example: sports value

Promised value:

```text
Sports participation for children.
```

Weak metric alone:

```text
48 sessions held.
```

Better verification package:

```text
Activity:
48 sessions planned / delivered.

Reach:
number of unique children enrolled.

Continuity:
average attendance across the program.

Quality:
beneficiary or parent feedback.

Fulfillment evidence:
attendance lists, photos, calendar, evidence producer observations.

Antivalue check:
exclusion, concentration in one closed group, low actual participation.

Coverage status:
not just sessions held; the package covers reach, continuity, beneficiary experience, and exclusion risk.
```

## Metric types

Recommended metric types:

### Activity

Measures what was done.

Examples:

- sessions delivered;
- workshops held;
- visits completed;
- reports produced.

### Reach

Measures who or how many were reached.

Examples:

- participants;
- direct beneficiaries;
- families covered;
- territory covered.

### Continuity

Measures whether participation or effect persisted over time.

Examples:

- attendance average;
- retention rate;
- repeated use;
- program completion.

### Quality

Measures whether the activity was useful or adequate.

Examples:

- beneficiary survey;
- fiscalizer observation;
- expert review;
- structured testimonial;
- satisfaction or usefulness score.

Quality signals should be classified as soft public signals or experiential evaluations unless a review path incorporates them into the formal value-verification package.

### Fulfillment evidence strength

Measures whether the claim is supported by enough fulfillment evidence.

Examples:

- self-reported evidence only;
- beneficiary confirmation;
- independent fulfillment evidence;
- qualified independent fulfillment evidence using the required method for a hard KPI;
- contradicted fulfillment evidence;
- fiscalizer observation.

For hard KPI claims, evidence strength is not only a question of independence or quantity. A citizen's good-faith observation may be useful context, but a formal dimension, safety, laboratory, engineering, medical, accounting, or other technical claim requires a producer whose qualification and method fit the declared evidence need.

### Antivalue and risk check

Measures whether the project produced negative effects or failed to mitigate declared risks.

Examples:

- exclusion;
- underuse;
- harm to affected parties;
- cost concentration;
- misleading beneficiary claim.

## Qualitative fulfillment evidence

Core v0 allows qualitative fulfillment evidence, but it should be structured.

Acceptable qualitative fulfillment evidence may include:

- beneficiary surveys;
- structured testimonials;
- interviews;
- fiscalizer observations;
- evidence producer field reports;
- verified comments from beneficiaries;
- parent or caregiver feedback where relevant.

Qualitative fulfillment evidence should not be treated as arbitrary narrative. It should identify:

- source;
- relationship to project;
- question or observation structure;
- relevance to value thesis;
- review status;
- privacy classification.

When qualitative evidence is used as a formal value-verification input, the package should also state whether ordinary beneficiary experience is enough, whether a structured survey protocol is required, or whether a qualified professional or institution must collect and report the evidence.

## Fiscalizer conclusion

The fiscalizer should not only check whether a metric was formally satisfied.

The fiscalizer should be able to conclude:

```text
Value reasonably demonstrated
Value partially demonstrated
Formal compliance, weak value
Value not demonstrated
Fulfillment evidence insufficient
```

Example:

```text
Sessions delivered: yes.
Attendance: low.
Beneficiary feedback: weak.
Independent fulfillment evidence: limited.

Conclusion:
formal compliance, weak value.
```

## Citizen-facing explanation

The citizen should not need to read every metric.

The project should display a simple value signal:

```text
Value promised: Sports
Verification status: Partially demonstrated
Why: sessions were delivered, but attendance and beneficiary feedback were weaker than expected.
```

A citizen may click deeper to see the fulfillment evidence and metric package.

## Anti-gaming rule

A project should not be approved, closed as fulfilled, or fully released solely because one narrow metric was met. ^r804c04ab

Rule:

> If the broader verification package contradicts the isolated metric, the value should be marked partial, weak, or not demonstrated.

## Relationship with disbursement

Milestone disbursement can still rely on specific milestone fulfillment evidence.

But final closure and reputation should consider the broader value verification package.

This avoids releasing funds mechanically while still allowing milestone-based execution.

## C010 final resolution

C010 is resolved as follows:

```text
Replace isolated value metrics with a Value Verification Package.
```

Final rule:

> Every promised value must be verified through a package of metrics and fulfillment evidence. Activity metrics alone are insufficient. The package must pass an A004 evidence-coverage check for each value floor, formal secondary value, antivalue ceiling, material value claim, and relevant metric. For hard KPI claims, the package must identify the required producer qualification and method standard before evidence is financed or accepted for formal effects. The fiscalizer may mark a project as formally compliant but weak in value if the broader fulfillment evidence does not reasonably demonstrate the promised value.

H015 complement:

> Value-verification inputs must be dimension-scoped and effect-scoped. A citizen, beneficiary, affected party, expert, evidence producer, fiscalizer, or auditor may contribute only the evaluation type their observability, experience, assignment, or qualification supports.

## Documents that should eventually reflect this resolution

This resolution should inform future updates to:

- value icon catalog and metric validator;
- project object model;
- project creation flow;
- disbursement flow;
- project closure model;
- technical audit trail layer;
- consolidated entity/object/state map;
- future implementable schema.

## Remaining risks

- Value verification packages may become too complex.
- Fiscalizers may apply qualitative judgment inconsistently.
- Beneficiary feedback may be manipulated.
- Soft public signals may be mistaken for formal value fulfillment.
- Some values may remain difficult to measure.
- Excessive verification could increase project cost.

## Mitigations

- start with simple minimum packages by value type;
- use structured qualitative fulfillment evidence;
- separate milestone disbursement from final value judgment where needed;
- make fiscalizer reasoning visible;
- allow beneficiary contradiction;
- update value catalog over time.

## Design rule

> Measure enough to verify value, but not so narrowly that the measurement becomes the value.
