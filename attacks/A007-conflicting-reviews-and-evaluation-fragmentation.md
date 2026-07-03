# A007 - Conflicting Reviews and Evaluation Fragmentation

## Status

Reviewed in paired Phase 3 review. Improvements integrated in [[73_CONFLICT_OF_REVIEW_HANDLING_AND_A007_RESOLUTION|docs/73_CONFLICT_OF_REVIEW_HANDLING_AND_A007_RESOLUTION.md]] and propagated into the core corpus.

## Description

The model separates fulfillment evaluation, technical review, fiscalization conclusions, complaint findings, reputation inputs, and soft citizen signals. This attack asks what happens when these reviews conflict.

## Location in current project

- [[03_ROADMAP|docs/03_ROADMAP.md]] Phase 3 priority objection: conflicting reviews.
- [[evaluation-context-taxonomy-v0|knowledge/concepts/evaluation-context-taxonomy-v0.md]].
- [[44_VALUE_VERIFICATION_AND_C010_RESOLUTION|docs/44_VALUE_VERIFICATION_AND_C010_RESOLUTION.md]].
- [[56_VALUE_FULFILLMENT_REPUTATION_AND_C018_RESOLUTION|docs/56_VALUE_FULFILLMENT_REPUTATION_AND_C018_RESOLUTION.md]].
- [[38_V0_CONTRADICTION_AND_FAILURE_MODE_CHECKLIST|docs/38_V0_CONTRADICTION_AND_FAILURE_MODE_CHECKLIST.md]] evaluation and fiscalization checklists.
- [[66_IMPLEMENTABLE_OBJECT_SCHEMA_DRAFT_V0|docs/66_IMPLEMENTABLE_OBJECT_SCHEMA_DRAFT_V0.md]] object `EvaluationRecord`.

## Problem

Different reviewers may legitimately evaluate different dimensions. Confusion arises when citizens or the system collapse them into one conclusion.

Example:

```text
Technical review says the Macul courts meet dimensions.
Affected parties say nighttime noise exceeds antivalue ceilings.
Fiscalizer says disbursement milestone is complete.
Complaint reviewer says public-access rules were misleading.
```

## Recommended resolution path

- Require every `EvaluationRecord` to identify evaluation context, dimension, evidence basis, authority or qualification basis, effect type, and scope.
- Show conflicting review status in citizen-facing summaries without making citizens read all technical material.
- Define precedence only by effect, not by generic reviewer status.
- Add unresolved-conflict labels where formal effects cannot be safely merged.
- Require appeal, correction, or secondary review paths for high-impact contradictions.

## Theoretical base and citations

- Mark Bovens, "Analysing and Assessing Accountability" (2007): accountability has forums, actors, standards, and consequences.
- Michael Power, `The Audit Society` (1997): audit conclusions can create legitimacy even when their scope is narrow.
- Daubert v. Merrell Dow Pharmaceuticals, 509 U.S. 579 (1993): expert evidence reliability depends on method and relevance.
- National Research Council, `Strengthening Forensic Science in the United States` (2009): forensic claims require standards, validation, and limits.
- ISO/IEC 17025: competence of testing and calibration laboratories depends on validated methods and quality systems.

## Social reasons

Citizens need simple conclusions, but oversimplification can hide legitimate disagreement. People affected by harms should not be dismissed because a different dimension passed review.

## Conflicts of interest

- Executors may cite the most favorable review as if it resolved all dimensions.
- Fiscalizers may resist contradiction that weakens prior reports.
- Authorities may privilege reviews aligned with policy goals.
- Complainants may frame partial findings as total project failure.

## Inconsistencies to test

- Role-specific evaluation is precise, but citizen-facing labels may collapse it.
- Disbursement can be scope-specific, while public reputation may appear project-wide.
- Complaint evidence may later matter for fulfillment review, but only after acceptance by the relevant review path.

## Stress scenario

The construction milestone is accepted, but a later noise review shows the project exceeded declared antivalue ceilings. Does the system reopen disbursement, adjust reputation, require mitigation, or only record the conflict?

## Review checklist

- Does each review state its formal effect?
- Are conflicts shown as scoped and dimension-specific?
- Is there a rule for unresolved contradictions before closure?
- Can later findings correct earlier evaluation records?
- Are citizens prevented from confusing soft signals with formal evaluation?

## Expected resolution output

A Phase 3 resolution should define conflict-of-review handling rules and citizen labels for scoped contradictory findings.
