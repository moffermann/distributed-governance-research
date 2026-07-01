# Reputation Input Chain v0

## Purpose

This concept defines how reputation moves from public context to formal role-specific reputation effects in the Distributed Governance System v0.

It consolidates H014 after H015, C012, C018, H023, and H030.

## Status

Accepted H014 consolidation rule.

## Core rule

> Reputation should move through a traceable chain: `Reputation Signal -> Reputation Input -> Reputation Update -> Reputation Summary`. Raw opinion, proximity, suspicion, unfounded complaints, unreviewed evidence, popularity, or closure labels do not directly update formal reputation.

## 1. Reputation Signal

A `Reputation Signal` is visible context without direct formal reputation effect.

Examples:

- citizen satisfaction or dissatisfaction;
- beneficiary experience;
- funder concern;
- public criticism;
- visible objection;
- raw complaint before review;
- unreviewed evidence submission;
- AI anomaly flag.

Signals may be shown, aggregated, contradicted, or routed into review, but they do not directly change a score.

## 2. Reputation Input

A `Reputation Input` is a reviewed input that may affect role-specific reputation.

It may derive from:

- verified value fulfillment score;
- metric breakdown;
- EvaluationRecord with reputation effect;
- founded complaint correction;
- Responsibility Event;
- accepted fulfillment/control evidence correction;
- verified discovery;
- fiscalizer or reviewer finding;
- role-performance review where the protocol defines one.

Minimum fields:

```text
input_id
actor
role_affected
project_or_object
source_type
source_reference
obligation_or_performance_dimension
review_basis
severity_or_weight_basis
formal_reputation_effect
appeal_or_review_status
timestamp
```

## 3. Reputation Update

A `Reputation Update` applies a reviewed input to an actor in a specific role.

Minimum fields:

```text
update_id
actor
role_affected
reputation_input_reference
previous_reputation
new_reputation
weight_used
decay_or_time_weight_rule
severity_rule
citizen_facing_explanation
appeal_or_review_status
timestamp
```

The exact formula is protocol-configurable. Core v0 requires traceability, role separation, time weighting, severity treatment, and recovery without historical erasure.

## 4. Reputation Summary

A `Reputation Summary` is a citizen-facing navigation layer.

It may show:

```text
Executor reputation: 84 / 100
Recent fulfillment: strong
Serious responsibility events: 1
Details available
```

The summary is not the source of reputation judgment. It aggregates role-specific updates and must remain inspectable.

## No automatic contamination

Reputation follows demonstrated role responsibility, not mere association.

Related companies, holding-linked companies, owners, directors, controllers, project leads, technical leads, financial leads, fiscalizers, auditors, evidence producers, and key professionals may be linked to the project record, but formal reputation effects require a reviewed basis.

Accepted bases may include:

- formal project role;
- declared or hidden control;
- obligation breach;
- direct participation in the reviewed event;
- negligence in an assigned review duty;
- repeated pattern after visible warnings;
- undeclared related-party conflict that materially affected control or execution.

Rejected pattern:

```text
Company A failed -> every company in the same holding loses reputation.
```

Accepted pattern:

```text
Company A failed -> review which actors, roles, controllers, related parties, or professionals had demonstrated responsibility for the relevant failure.
```

## Macul example

Project:

```text
Design and Construction of Multi-court Facility in Macul
```

If the approved design omitted required bathrooms or used incorrect court dimensions:

- the modeler/designer may receive a negative input if the omission belongs to design responsibility;
- the technical reviewer may receive a negative input if it negligently approved the design;
- the executor should not be penalized merely for executing an accepted flawed design;
- the executor may receive a negative input if the accepted design included bathrooms but execution omitted them;
- a holding-related company should not be penalized unless its role, control, conflict, concealment, negligence, or direct responsibility is reviewed and demonstrated.

Citizen complaint:

```text
Bathrooms are missing.
```

Initial status:

```text
Reputation Signal or Complaint Evidence
```

After review:

```text
Reputation Input only if the complaint is founded and connected to a role obligation.
```

Formal effect:

```text
Reputation Update only for the actor and role that the reviewed record connects to the failure.
```

## Design rule

> Keep reputation simple for citizens, but make the technical chain auditable. Reputation is not a social score, a popularity vote, a closure label, or guilt by association. It is a role-specific history of reviewed performance, responsibility, verified fulfillment, and corrected information.
