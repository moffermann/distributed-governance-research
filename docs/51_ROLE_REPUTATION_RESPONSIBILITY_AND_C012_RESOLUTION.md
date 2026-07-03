# Role Reputation, Responsibility Events, and C012 Resolution v0

## Purpose

This document resolves contradiction C012 from the v0 contradiction checklist.

C012 was originally framed as the tension between role-based reputation and shared responsibility in multi-actor projects. The final resolution is that reputation remains role-specific, and negative reputation effects require a responsibility event that connects an actor, a role, an obligation, evidence, and severity.

## Status

Accepted as the v0 resolution for C012.

## Core principle

> Reputation is affected by demonstrated responsibility in a specific role, not by mere proximity to a failed project. ^r3ec4169a

There is no automatic collective reputation penalty for everyone involved in a failed project.

## The contradiction

The system already requires reputation to be role-based:

```text
Reputation as executor
Reputation as fiscalizer
Reputation as evidence producer
Reputation as delegate
Reputation as complainant
```

But projects can fail through chains of responsibility.

A project failure may involve:

- executor non-compliance;
- weak fiscalization;
- poor evidence production;
- misleading complaint;
- irresponsible delegation;
- bad project design;
- beneficiary inconsistency;
- manipulated evidence;
- ignored warning signals.

The question is:

```text
Who loses reputation, and in which role?
```

## Resolution

Use a `Responsibility Event`.

A responsibility event records a specific failure, breach, negligence, founded complaint, misuse, false contextualized evidence, or closure problem and links it to the role that had the obligation to prevent, detect, disclose, correct, or avoid that failure.

## Responsibility Event contents

A responsibility event should include:

- event ID;
- project or object affected;
- triggering event;
- actor affected;
- actor role affected;
- obligation or duty involved;
- evidence supporting responsibility;
- material information claim or verified discovery reference where applicable;
- severity;
- responsibility type;
- reputational effect;
- appeal or review status;
- timestamp;
- reviewer or rule that produced the event.

Example:

```text
Responsibility Event: RE-104
Project: P-201
Problem: inflated beneficiary list
Actor: Foundation A
Role affected: executor
Obligation: truthful beneficiary declaration
Review basis: complaint C-22 founded + evidence producer record + fiscalizer review
Severity: high
Effect: negative executor reputation
```

## Responsibility types

Recommended v0 labels:

```text
Direct responsibility
Negligence
Responsibility by repeated pattern
No responsibility
```

## Direct responsibility

The actor directly caused the problem or breached a role obligation.

Example:

```text
Executor declared beneficiaries that did not exist.
```

Effect:

```text
Negative reputation as executor.
```

## Negligence

The actor did not directly create the problem, but failed a reasonable duty of review, verification, disclosure, or care in its role.

Example:

```text
Fiscalizer approved a milestone without checking basic evidence that should have been reviewed.
```

Effect:

```text
Negative reputation as fiscalizer.
```

## Responsibility by repeated pattern

A single bad outcome may not prove responsibility, but a repeated pattern may.

Example:

```text
A delegate repeatedly allocates funds to projects from the same executor despite repeated warnings, founded complaints, or failures.
```

Effect:

```text
Possible negative reputation as delegate.
```

## No responsibility

An actor may be connected to a failed project without being responsible for the failure.

Example:

```text
A delegate funded one apparently valid project that later failed due to hidden executor fraud.
```

In that case, the delegate should not automatically lose reputation.

## No collective punishment

A failed project should not automatically damage every actor connected to it.

Rejected rule:

```text
Project failed → everyone involved loses reputation.
```

Accepted rule:

```text
Project failed → review responsibility events by role.
```

## Role-specific impact

A reputational effect must apply to the role where responsibility was demonstrated.

Examples:

```text
Executor failed to execute → executor reputation affected.
Fiscalizer approved false contextualized evidence -> fiscalizer reputation affected.
Evidence producer submitted manipulated contextualized evidence -> evidence producer reputation affected.
Delegate repeatedly ignored warning signals → delegate reputation affected.
Complainant filed repeated malicious complaints → complainant reputation affected.
```

H014 adds the reputation input chain around this rule:

```text
signal -> reviewed reputation input -> role-specific reputation update -> citizen-facing summary
```

A Responsibility Event is one type of formal Reputation Input. It does not update every related actor by association; it updates only the actor and role connected to the demonstrated obligation breach.

## Relationship with complaints

A founded complaint can trigger a responsibility event if it demonstrates a role-specific obligation breach.

A rejected complaint should not automatically trigger negative responsibility.

A malicious or knowingly false complaint may trigger a responsibility event for the complainant role, but only if demonstrated.

## Relationship with evidence

A responsibility event must be based on evidence.

Possible responsibility-event sources:

- evidence producer record;
- material information claim history;
- verified discovery record;
- fiscalizer review;
- founded complaint;
- technical register;
- beneficiary confirmation;
- financial audit trail;
- project closure report;
- repeated pattern analysis.

## Relationship with information claims

H023 extends this responsibility model to material information reliability.

False, hidden, incomplete, or misleading information should not automatically damage reputation when it is merely alleged. It may affect reputation only when a review connects a material claim, actor, role obligation, evidence, severity, and responsibility type.

Examples:

```text
Executor responsibility:
The executor declared that 80 children attended, but review confirms material beneficiary inflation.

Evidence producer responsibility:
An evidence producer submitted manipulated attendance records.

Fiscalizer responsibility:
The fiscalizer approved a milestone despite obvious contradictory evidence that should have been reviewed.

Complainant or observer positive event:
A verified actor found a duplicate invoice that materially improved project control.
```

Negative effects should use `Responsibility Event`. Positive effects may use a role-specific Reputation Input for verified discovery, where the discovery was material, useful, and confirmed by review.

Under H014, verified discovery may become a positive Reputation Input only after review confirms materiality, usefulness, actor role, and formal effect. Raw accusations, unreviewed evidence, and AI anomaly flags remain signals until reviewed.

## Relationship with project closure

Negative project closure should trigger a responsibility review.

It should not automatically assign blame.

Closure may produce:

```text
No responsibility event
One responsibility event
Multiple responsibility events in different roles
```

## C012 final resolution

C012 is resolved as follows:

```text
Keep reputation role-based and use responsibility events to connect failures to specific actors, roles, obligations, evidence, and severity.
```

Final rule:

> Reputation is not reduced because an actor was near a failed project. It is reduced only when a responsibility event demonstrates that the actor, in a specific role, breached a role obligation with evidence and severity sufficient to affect reputation.

## Documents that should eventually reflect this resolution

This resolution should inform future updates to:

- project lifecycle and closure model;
- complaint entity model;
- fiscalization and control model;
- evidence producer model;
- delegation flow;
- consolidated entity/object/state map;
- future implementable schema.

## Remaining risks

- Responsibility assignment may become too complex.
- Actors may dispute responsibility events.
- Repeated-pattern responsibility may be hard to prove.
- Fiscalizers may be reluctant to assign responsibility.
- Minor failures may generate excessive penalties.

## Mitigations

- keep v0 responsibility categories simple;
- require evidence and severity;
- allow appeal or review;
- distinguish direct responsibility from negligence and pattern;
- do not penalize mere association;
- expose responsibility reasoning in the audit trail.

## Design rule

> Reputation must follow responsibility, not blame by association. Information reliability effects require traceable claims, evidence, review, severity, and role-specific responsibility or verified discovery.
