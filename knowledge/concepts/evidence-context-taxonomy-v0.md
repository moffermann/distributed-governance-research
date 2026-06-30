# Evidence Context Taxonomy v0

## Purpose

This concept separates different uses of the word `evidence` in the Distributed Governance System v0.

The project previously used `evidence` for multiple procedural objects. That creates ambiguity because evidence attached to a complaint is not the same as evidence used to verify value fulfillment, disbursement, closure, or reputation.

## Status

Accepted terminology rule for Core v0 cleanup.

## Core rule

> Do not use bare `evidence` for system objects when the evidence has procedural consequences. Use an explicit context such as `Complaint Evidence`, `Fulfillment Evidence`, `Control Evidence`, or `Administrative Observability Data`. `Evidence Item` may remain as a generic technical object only when it has a required context or purpose field.

## Evidence contexts

### Complaint Evidence

`Complaint Evidence` is material submitted, attached, or reviewed inside a complaint process.

It may support, refute, clarify, or contextualize an allegation.

It does not prove the complaint by itself.

Example:

```text
A resident submits photos alleging that the Macul multi-court project lacks required bathrooms.
```

Those photos are `Complaint Evidence` until a reviewer or fiscalizer uses them in the complaint review.

### Fulfillment Evidence

`Fulfillment Evidence` is material used to verify whether a project fulfilled its value thesis, core value commitments, metrics, milestones, phase gates, deliverables, disbursement conditions, closure conditions, or reputation-relevant obligations.

Example:

```text
A technical measurement confirms whether the Macul courts match the accepted dimensions.
```

That measurement is `Fulfillment Evidence` because it supports or contradicts fulfillment of the accepted design and value commitments.

### Control Evidence

`Control Evidence` is material produced, captured, or commissioned through fiscalization, evidence missions, technical review, admissibility review, or another control process.

Control evidence usually becomes either:

- fulfillment evidence, when used to verify project commitments; or
- complaint evidence, when produced inside a complaint or extraordinary review file.

Example:

```text
A selected control subproject performs a field visit and produces georeferenced photos.
```

The field visit output is `Control Evidence`; its procedural use determines whether it supports fulfillment review, complaint review, or both.

### Contradiction Evidence

`Contradiction Evidence` is material submitted to challenge, weaken, or correct a material information claim, evidence item, report, or fulfillment conclusion.

It may later become complaint evidence, fulfillment evidence, or verified-discovery evidence if reviewed and accepted for that purpose.

### Administrative Observability Data

`Administrative Observability Data` is platform-generated or system-level data used to audit the operation of the platform or transition process.

It is not automatically evidence of project fulfillment or evidence of a complaint.

Examples:

```text
percentage of projects with incomplete fulfillment evidence
average time from complaint submission to fiscalizer quote
number of projects stuck before execution-ready status
```

### Research Evidence

`Research Evidence` is evidence used by the research project itself: literature, empirical findings, institutional examples, objections, case comparisons, or external data.

It is not a governance-system evidence item.

## Generic Evidence Item rule

`Evidence Item` may remain as the generic object in the entity map, but it must include explicit context.

Minimum field:

```text
evidence_context:
  complaint
  fulfillment
  control
  contradiction
  administrative_observability
  research
```

Recommended additional fields:

```text
procedural_use
target_object
source_role
review_status
decision_effect
```

## Complaint boundary

Any verified actor may submit a complaint and attach complaint evidence if the complaint meets the required structure.

Observability is not a precondition for filing a complaint.

Complaint processing remains governed by the complaint model: verified identity, affected scope, initial support material, fiscalizer quote, citizen support, reserved review funding, admissibility review, and competent authority or court referral where applicable.

## Fulfillment boundary

Formal fulfillment evaluation is different.

Actors may formally evaluate fulfillment dimensions only when they can observe, measure, verify, or are assigned or qualified to review that dimension.

Example:

```text
A citizen can complain that Macul court dimensions appear wrong.
A technical reviewer or fiscalizer formally evaluates whether the dimensions comply.
```

## Design rule

> Complaint evidence opens, supports, refutes, or contextualizes review. Fulfillment evidence verifies promised value. Control evidence is produced by review infrastructure. Administrative observability data audits the system. Research evidence supports the theory. Do not collapse these into one undifferentiated evidence object.
