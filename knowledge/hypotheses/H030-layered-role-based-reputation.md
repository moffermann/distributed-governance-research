# H030 — Layered Role-Based Reputation

## Hypothesis

Reputation in a distributed governance system should be layered, role-based, transparent, and aggregated upward. A person or organization may have a general reputation summary, but meaningful evaluation should be separated by role and inspectable in detail.

Formal reputation updates should be based on verified value fulfillment, metric breakdowns, founded complaints, evidence corrections, and role-specific `Responsibility Events`. Reputation should not become one generic social score or automatic blame by association.

## Resolution alignment

This hypothesis is aligned with:

- `docs/51_ROLE_REPUTATION_RESPONSIBILITY_AND_C012_RESOLUTION.md`;
- `docs/56_VALUE_FULFILLMENT_REPUTATION_AND_C018_RESOLUTION.md`;
- `docs/33_DISTRIBUTED_GOVERNANCE_SYSTEM_V0_BLUEPRINT.md`;
- `docs/34_CORE_V0_SCOPE_FREEZE.md`.

H030 should be read as the reputation-visibility architecture. C012 defines when responsibility can affect a role. C018 defines how value fulfillment and closure context should affect reputation.

## Rationale

The same actor can participate in different roles:

- citizen funder;
- project modeler;
- executor;
- fiscalizer;
- auditor;
- expert reviewer;
- evidence producer;
- delegate;
- complainant;
- beneficiary;
- affected party.

Performance in one role should not automatically imply competence or trustworthiness in another.

Being a good executor does not necessarily make someone a good fiscalizer. Being a good fiscalizer does not necessarily make someone a good modeler. Being a responsible citizen funder does not imply technical competence.

At the same time, role separation must not hide responsibility. If an actor breaches a role obligation, the relevant role reputation should reflect the demonstrated responsibility with evidence and severity.

## Layered structure

### 1. General summary

A simple high-level reputation view:

```text
General trust level: Medium-high
Relevant roles: executor, modeler, fiscalizer
Project history: 18 projects
Recent performance: stable
General score: 84 / 100
```

The general summary should be easy to understand but should not hide the underlying detail. It is a navigation layer, not the source of formal reputation judgment.

### 2. Role-specific reputation

Separate reputation by role:

- executor reputation;
- modeler reputation;
- fiscalizer reputation;
- auditor reputation;
- expert reviewer reputation;
- evidence producer reliability;
- delegate reliability;
- complainant reliability;
- funder behavior.

Example:

```text
General score: 84 / 100
Modeler: no history
Executor: 79 / 100
Fiscalizer: no history
Funder behavior: 93 / 100
```

### 3. Dimension-specific detail

Each role may have sub-dimensions.

Executor example:

- value thesis fulfillment;
- metric fulfillment;
- budget discipline;
- timeline compliance;
- handling of antivalue;
- transparency;
- beneficiary treatment;
- response to incidents.

Fiscalizer example:

- accuracy;
- independence;
- methodological quality;
- responsiveness to review;
- false-positive / false-negative history;
- conflict-of-interest management.

Delegate example:

- delegated-action traceability;
- responsiveness to delegators;
- conflict disclosure;
- repeated allocation patterns after warnings;
- respect for scope and caps where configured.

### 4. Project-level traceability

A role-specific score should be traceable to the projects that produced it.

Example:

```text
Executor score: 79 / 100
  → Project A: value fulfillment 96 / 100, no responsibility events
  → Project B: value fulfillment 62 / 100, one negligence event
  → Project C: value fulfillment 81 / 100, founded complaint corrected metric
```

A user should be able to inspect why a score is low or high.

## Formal reputation inputs

Formal reputation updates should be explicit objects or records derived from:

- project value fulfillment score;
- predefined metric weights;
- accepted evidence;
- fiscalizer evaluation;
- founded complaint corrections;
- role-specific Responsibility Events;
- severity and responsibility type;
- previous reputation;
- update weight or decay rule;
- appeal or review status where applicable.

Citizen evaluations, comments, and informal satisfaction signals may be visible as soft context, but they should not automatically create formal sanctions or reputation updates.

## Responsibility Events

Negative reputation effects require a `Responsibility Event` when the effect is based on blame, breach, negligence, false evidence, repeated pattern, or founded complaint.

A Responsibility Event should connect:

- actor;
- role affected;
- obligation breached;
- evidence supporting responsibility;
- severity;
- responsibility type;
- reputational effect;
- review or appeal status.

Example:

```text
Project:
Multi-court sports complex in Macul.

Closure category:
Partially fulfilled.

Verified value fulfillment:
95 / 100.

Reputation effect:
The executor is not automatically penalized merely because closure was "partial".

Later finding:
A founded complaint proves that the executor inflated beneficiary access reports.

Responsibility Event:
Actor: executor organization
Role affected: executor
Obligation: truthful execution and beneficiary reporting
Evidence: founded complaint + fiscalizer review + corrected evidence record
Severity: high
Effect: negative executor reputation adjustment
```

## Closure category as context

Closure labels are procedural context, not automatic reputation scores.

Rejected pattern:

```text
Partially fulfilled → automatic penalty.
Revoked → automatic penalty for everyone connected to the project.
Fulfilled → automatic positive reputation even if later evidence disproves fulfillment.
```

Accepted pattern:

```text
Closure category describes how the project ended.
Value fulfillment score measures what was actually delivered.
Responsibility Events identify role-specific blame where evidence supports it.
```

## No automatic contamination rule

The system does not need a special rule that automatically transfers reputation damage from one role to another.

Instead, the general reputation summary aggregates role-specific data upward, and the user can inspect the role-level and project-level detail.

If someone was a poor executor but has no history as a modeler or fiscalizer, the platform should make that visible rather than inventing a penalty in unrelated roles.

A failed project should also not automatically damage every connected actor. A funder, delegate, fiscalizer, evidence producer, or beneficiary should be affected only when a role-specific responsibility record demonstrates a relevant obligation breach.

## Transparency as the mechanism

The mechanism is not hidden judgment. The mechanism is layered transparency.

A user may see a general score, then inspect role scores, then inspect the projects, value fulfillment scores, evidence corrections, founded complaints, and Responsibility Events that generated those scores.

## Citizen-facing simplicity

The ordinary citizen should see a simple summary first.

Example:

```text
Executor reputation: 79 / 100
Recent value fulfillment: mostly strong
Founded responsibility events: 1 serious event in last 12 months
Details available
```

The detailed audit layer should remain available without forcing every citizen to interpret the full scoring model before funding or following a project.

## Temporal weighting

Reputation should be weighted by recency, allowing recovery while preserving traceability.

Severe Responsibility Events should remain visibly inspectable even if aggregate reputation later improves.

## Responsibility weighting

Reputation impact should depend on the actor's level of responsibility in the project.

The same project may produce different role updates:

```text
Executor:
positive update if value fulfillment is high and no responsibility event exists.

Fiscalizer:
negative update if it negligently approved false evidence later corrected by a founded complaint.

Evidence producer:
negative update if it submitted manipulated evidence.

Delegate:
possible negative update only if repeated allocation patterns show disregard for visible warnings or founded failures.
```

## Audit requirements

Every formal reputation update should preserve:

- actor;
- role affected;
- project or object reference;
- closure category where applicable;
- value fulfillment score where applicable;
- metric breakdown;
- evidence and fiscalization references;
- founded complaint references;
- Responsibility Event references;
- previous reputation;
- new reputation;
- weight or decay rule;
- citizen-facing explanation;
- timestamp;
- appeal or review status where applicable.

## Principle

> Reputation should be simple at the surface, detailed under inspection, separated by role, aggregated upward, weighted over time, and proportional to demonstrated responsibility.

> Closure labels explain procedure; value fulfillment measures delivery; Responsibility Events explain blame.

## Status

Core reputation architecture hypothesis. Extends H014 and is qualified by C012 and C018.
