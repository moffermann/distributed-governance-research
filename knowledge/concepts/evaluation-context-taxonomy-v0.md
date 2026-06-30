# Evaluation Context Taxonomy v0

## Purpose

This concept separates different kinds of evaluation in the Distributed Governance System v0.

H015 does not prohibit citizens from expressing opinions, filing complaints, or submitting complaint evidence. It limits which actors may turn a statement, observation, or evidence item into a formal evaluation with procedural effects.

## Status

Accepted terminology and design rule for H015.

## Core rule

> Formal evaluation is dimension-scoped and effect-scoped. An actor may evaluate only the dimension they can observe, experience, verify, or are assigned or qualified to review. The system must distinguish soft public signals from formal inputs to fulfillment, disbursement, closure, reputation, responsibility, or legal referral.

## Minimum evaluation record

Every formal evaluation record should identify:

```text
evaluation_context
evaluated_dimension
actor_role
observability_basis
authority_or_qualification_basis
evidence_context_used
evaluation_type
formal_effect
review_status
```

This does not mean ordinary citizens fill out a technical form. The interface may ask simple questions such as:

```text
What did you see or experience?
What project promise, milestone, or harm does this relate to?
Do you want to comment, confirm, object, or file a complaint?
```

The technical layer records the classification.

## Evaluation contexts

### Soft Public Signal

A `Soft Public Signal` expresses opinion, perceived quality, satisfaction, concern, support, objection, or public sentiment.

It may be visible, aggregated, and used as context, but it does not directly trigger disbursement, closure, sanction, or reputation update.

Examples:

```text
The court looks poorly maintained.
The sports school seems useful.
I do not trust this executor.
```

### Experiential Evaluation

An `Experiential Evaluation` comes from a beneficiary, affected party, worker, local resident, funder, or other actor who directly experienced a project dimension.

It may evaluate:

- receipt of service;
- usefulness;
- treatment;
- access;
- local harm or externality;
- beneficiary confirmation;
- affected-party impact.

It can inform value verification, complaints, and reputation only through the relevant review path, aggregation rule, or evidential package.

### Fulfillment Evaluation

A `Fulfillment Evaluation` is a formal assessment of whether the project fulfilled a value thesis, commitment, metric, milestone, phase gate, deliverable, disbursement condition, closure condition, or reputation-relevant obligation.

It requires relevant fulfillment evidence, observability, assignment, or qualification.

### Technical or Professional Review

A `Technical or Professional Review` evaluates dimensions that require specialized competence, such as engineering, safety, environmental compliance, accounting, sanitary standards, dimensions, permits, or regulated requirements.

It should be performed by an assigned or qualified reviewer, fiscalizer, certifier, competent authority, auditor, laboratory, or professional body where required.

### Fiscalization Conclusion

A `Fiscalization Conclusion` is the fiscalizer's accountable review output. It connects contextualized evidence, methodology, conflicts, limitations, observations, and review outcome.

It may affect milestone approval, disbursement, correction, closure, responsibility, or referral.

### Complaint Review Finding

A `Complaint Review Finding` evaluates a complaint's admissibility, relevance, evidence, scope, foundedness, and procedural effect.

It does not require the original complainant to be the formal evaluator of the underlying fulfillment dimension.

### Reputation Input

A `Reputation Input` is a formal input to role-specific reputation. It should derive from verified fulfillment evaluation, founded complaint corrections, accepted fulfillment evidence, responsibility events, or reviewed role performance.

Soft public signals may be displayed, but they should not automatically become formal reputation updates.

## Macul example

For `Design and Construction of Multi-court Facility in Macul`:

```text
Resident complaint:
  The resident may file a complaint that bathrooms are missing or court dimensions appear wrong.
  This is not a formal technical fulfillment evaluation.

Beneficiary evaluation:
  A player may confirm whether the court was usable and whether public access was real.

Technical review:
  A qualified reviewer measures the court and checks whether dimensions match the accepted design.

Fiscalization conclusion:
  The fiscalizer decides whether the design gate or construction milestone is accepted, observed, rejected, or requires correction.

Reputation input:
  Reputation changes only after the reviewed outcome identifies role-specific fulfillment, breach, negligence, false evidence, or responsibility.
```

## Design rule

> Keep citizen input simple, but record formal evaluation context precisely. A person may be a valid source for one dimension and not for another. The system should preserve that boundary instead of collapsing all evaluations into one score.
