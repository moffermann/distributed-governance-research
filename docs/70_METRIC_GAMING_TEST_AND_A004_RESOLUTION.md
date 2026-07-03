# Metric Gaming Test and A004 Resolution v0

## Status

Accepted Phase 3 resolution.

Paired review:

- Attack: [[A004-metric-manipulation-and-goodhart-effects|attacks/A004-metric-manipulation-and-goodhart-effects.md]]
- Defense: [[D004-metric-manipulation-and-goodhart-effects|defenses/D004-metric-manipulation-and-goodhart-effects.md]]

## Resolution decision

A004 is founded and does not distort the project when it strengthens verification instead of rejecting measurement. The project rejects the distorted conclusion that metrics should be abandoned.

The accepted resolution is not a new evidence layer and not a fixed numeric rule such as "small projects require N evidence items." The accepted resolution is a coverage check inside the `Value Verification Package` and `Project Evidential Contract`: every declared value floor, formal secondary value, antivalue ceiling, material value claim, and relevant metric should identify the fulfillment/control evidence needed to verify it.

The metric-gaming test is satisfied when the existing required fulfillment/control evidence set reasonably covers the value or antivalue being claimed. It is failed or marked weak when an actor can satisfy a narrow metric while leaving a declared value dimension, beneficiary experience, affected-party impact, or antivalue ceiling unverified.

## Rule added to Core v0

Every value-relevant metric should be reviewed for gaming risk before funding and before formal effects.

This review should be understood as required-evidence coverage, not evidence volume by project size. The question is:

```text
Which fulfillment/control evidence is necessary to verify this declared value floor,
formal secondary value, antivalue ceiling, material value claim, or metric?
```

The metric-gaming test should not ask for additional evidence merely to increase count. It should verify that the required evidence set already attached to the value thesis, value icon, metric, or antivalue ceiling covers the dimensions that matter for the promised value.

The metric-gaming test should ask:

- does the metric measure an input, activity, output, outcome, continuity condition, or antivalue ceiling;
- what value dimension remains unmeasured;
- how could an actor satisfy the metric while defeating the value;
- which required fulfillment/control evidence is necessary to verify the value or antivalue being claimed;
- whether beneficiary evaluation, affected-party evaluation, or another experiential review is required for dimensions that only those actors can observe;
- what beneficiary, affected-party, contradiction, or qualitative review path is available;
- does changing the metric require correction, operational variation, material reformulation, or a new project.

Operationally, this should be implemented as an evidence-coverage matrix inside the `ValueVerificationPackage` and `ProjectEvidentialContract`, not as a separate evidence layer. The matrix should map:

- each declared value floor;
- each formal secondary value;
- each antivalue ceiling;
- each material value claim;
- each metric or qualitative commitment;
- each required fulfillment/control evidence need;
- each beneficiary, affected-party, contradiction, or qualitative review path where relevant;
- each formal consequence: publication block, financeable block, phase-gate block, disbursement block, closure limitation, correction, reformulation, responsibility event, or reputation input.

Coverage status should be explicit:

```text
coverage complete
coverage weak
coverage gap
metric gap
under correction
```

## Boundary with A013

A004 defines coverage: what evidence is necessary to avoid metric gaming.

A013 defines evidence quality: whether submitted evidence is relevant, authentic enough for the claimed effect, complete, properly contextualized, sufficiently corroborated, and useful for disbursement, closure, responsibility, or reputation.

These questions should remain separate:

```text
A004: Did the project define the necessary evidence needs for each value or antivalue?
A013: Does the submitted evidence actually satisfy those needs with enough quality and sufficiency?
```

For this reason, broad propagation of A004 should reference A013 when discussing evidence quality, sufficiency, authenticity, metadata, AI-generation risk, and usefulness. A004 should not try to solve those quality questions itself.

## Macul example

`Number of courts built` is weak if it does not check usable dimensions, safety, accessibility, public access, bathrooms where required or promised, maintenance, actual use, and noise ceilings. The metric may remain part of the package, but it cannot be the whole proof of value.

A stronger Macul value-verification package would attach required fulfillment/control evidence to each declared dimension:

- dimensions and safety: technical review, measurements, or accepted design-phase deliverables;
- lighting, bathrooms, accessibility, and access rules: reviewed completion evidence and source-linked material claims;
- actual public use: beneficiary or user confirmation, use records, field observation, or other accepted fulfillment evidence;
- affected-party impact: affected-party reports or observations where relevant;
- noise ceiling: defined measurement points, timing, method, device/source record, and fiscalizer or reviewer assessment.

Beneficiary evaluation should be required where the promised value depends on beneficiary experience, access, usefulness, continuity, or treatment. It should not replace technical review for dimensions, permits, structural safety, acoustic measurement, or other specialized checks.

## Citizen simplicity

The citizen-facing layer should show `verification package strong`, `evidence coverage gap`, `metric gap`, or `metric under correction` rather than exposing every measurement debate by default.

## Transparency and accountability effect

The test prevents narrow metric compliance from substituting for public value fulfillment. It also preserves measurement as a useful discipline rather than a marketing label.

## Residual risks

- Required evidence coverage may look complete while submitted evidence later proves weak, false, incomplete, or insufficient under A013.
- Qualitative judgment may be inconsistent.
- Proposers may still prefer cheap metrics.
- Beneficiary feedback can be manipulated or selectively collected.

## Integration target

This resolution should inform Metric, ValueVerificationPackage, ProjectEvidentialContract, FulfillmentEvidenceNeed, EvaluationRecord, closure, and role-specific reputation.

It should be propagated with an explicit reference to A013 / `EvidenceQualityReview` so that evidence-need coverage and evidence quality/sufficiency remain separate.
