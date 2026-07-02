# A004 - Metric Manipulation and Goodhart Effects

## Status

Reviewed in paired Phase 3 review. Improvements integrated in `docs/70_METRIC_GAMING_TEST_AND_A004_RESOLUTION.md` and propagated into the core corpus.

## Description

The system converts public value into value floors, antivalue ceilings, metrics, evidence needs, and review consequences. This attack asks whether actors can satisfy the metric while defeating the value.

## Location in current project

- `docs/03_ROADMAP.md` Phase 3 priority objection: manipulation of metrics.
- `docs/13_VALUE_ICON_CATALOG_AND_METRIC_VALIDATOR.md`.
- `docs/44_VALUE_VERIFICATION_AND_C010_RESOLUTION.md`.
- `docs/56_VALUE_FULFILLMENT_REPUTATION_AND_C018_RESOLUTION.md`.
- `knowledge/hypotheses/H018-project-value-thesis-and-measurement.md`.
- `docs/66_IMPLEMENTABLE_OBJECT_SCHEMA_DRAFT_V0.md` objects `Metric`, `ValueVerificationPackage`, and `EvaluationRecord`.

## Problem

Metrics are necessary for accountability, but they can distort behavior. A project may choose easy metrics, focus on counted outputs, exclude difficult beneficiaries, or reformulate targets after funding.

Example:

```text
The Macul project measures "number of courts built" but not usable dimensions, public access, safety, bathrooms, accessibility, maintenance, or actual community use.
```

## Recommended resolution path

- Require every metric to link to a value floor, antivalue ceiling, material claim, evidence need, and review consequence.
- Reject input-only metrics when they do not show value.
- Add metric-gaming risk prompts for vulnerable or high-value projects.
- Preserve qualitative context and beneficiary contradiction where measurement is incomplete.
- Require material metric changes to use reformulation/versioning, not silent edits.

## Theoretical base and citations

- Charles Goodhart, "Problems of Monetary Management" (1975): targets can stop being good measures once they become control targets.
- Donald Campbell, "Assessing the Impact of Planned Social Change" (1976): quantitative indicators used for decisions become vulnerable to corruption and distortion.
- Bengt Holmstrom and Paul Milgrom, "Multitask Principal-Agent Analyses" (1991): rewarding measured tasks can distort unmeasured tasks.
- Michael Power, `The Audit Society` (1997): measurement and audit can produce compliance performances rather than substantive accountability.
- Kenneth Arrow, `Social Choice and Individual Values` (1951): aggregation and social choice can produce structural difficulties when plural values are compressed.

## Social reasons

Metric gaming can harm the exact groups the project claims to help. It is especially dangerous in care, education, health, poverty reduction, and public safety, where important outcomes are hard to observe.

## Conflicts of interest

- Proposers prefer easy metrics.
- Executors prefer metrics that match cheap delivery.
- Fiscalizers may prefer metrics that are easy to review.
- Funders may prefer simple numbers even when they are incomplete.

## Inconsistencies to test

- Citizen simplicity pushes toward few metrics, but value verification may need multi-dimensional evidence.
- Reputation updates require comparability, but projects differ in complexity and beneficiary context.
- Antivalue ceilings are declared constraints, but omitted antivalues can escape measurement.

## Stress scenario

A sports workshop reports 100 enrolled children but attendance is low, sessions are irregular, and the most vulnerable children stopped attending after week two. The project technically hits an enrollment metric but not the value promise.

## Review checklist

- Are metrics linked to value rather than activity alone?
- Are antivalue ceilings measurable?
- Can fiscalizers reject formally correct but substantively weak metrics?
- Are metric changes versioned before funding or reformulation?
- Are hard-to-measure values given qualitative review paths?

## Resolution output

Resolved in `docs/70_METRIC_GAMING_TEST_AND_A004_RESOLUTION.md`: the metric-gaming test is a required evidence-coverage check inside the `ValueVerificationPackage` and `ProjectEvidentialContract`. Every declared value floor, formal secondary value, antivalue ceiling, material value claim, and relevant metric must identify the fulfillment/control evidence needed to verify it. A004 defines coverage; A013 separately evaluates whether submitted evidence satisfies those needs with sufficient quality, producer qualification, and method fit.
