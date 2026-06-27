# H030 — Layered Role-Based Reputation

## Hypothesis

Reputation in a distributed governance system should be layered, role-based, transparent, and aggregated upward. A person or institution may have a general reputation summary, but meaningful evaluation should be separated by role and inspectable in detail.

## Rationale

The same actor can participate in different roles:

- citizen funder;
- project modeler;
- executor;
- fiscalizer;
- auditor;
- expert reviewer;
- complainant;
- beneficiary;
- affected party.

Performance in one role should not automatically imply competence or trustworthiness in another.

Being a good executor does not necessarily make someone a good fiscalizer. Being a good fiscalizer does not necessarily make someone a good modeler. Being a responsible citizen funder does not imply technical competence.

## Layered structure

### 1. General summary

A simple high-level reputation view:

```text
General trust level: Medium-high
Relevant roles: executor, modeler, fiscalizer
Project history: 18 projects
Recent performance: stable
General score: 3.5 / 5
```

The general summary should be easy to understand but should not hide the underlying detail.

### 2. Role-specific reputation

Separate reputation by role:

- executor reputation;
- modeler reputation;
- fiscalizer reputation;
- auditor reputation;
- expert reviewer reputation;
- complainant reliability;
- funder behavior.

Example:

```text
General score: 3.5 / 5
Modeler: no history
Executor: 3.0 / 5
Fiscalizer: no history
Funder behavior: 4.5 / 5
```

### 3. Dimension-specific detail

Each role may have sub-dimensions.

Executor example:

- goal fulfillment;
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
- resistance to review;
- false-positive / false-negative history;
- conflict-of-interest management.

### 4. Project-level traceability

A role-specific score should be traceable to the projects that produced it.

Example:

```text
Executor score: 3.0 / 5
  → Project A: 5.0
  → Project B: 1.0
  → Project C: 3.0
```

A user should be able to inspect why a score is low or high.

## No special contamination rule

The system does not need a special rule that automatically transfers reputation damage from one role to another.

Instead, the general reputation summary aggregates role-specific data upward, and the user can inspect the role-level and project-level detail.

If someone was a poor executor but has no history as a modeler or fiscalizer, the platform should make that visible rather than inventing a penalty in unrelated roles.

## Transparency as the mechanism

The mechanism is not hidden judgment. The mechanism is layered transparency.

A user may see a general score, then inspect role scores, then inspect the projects and events that generated those scores.

## Temporal weighting

Reputation should be weighted by recency, allowing recovery while preserving traceability.

## Responsibility weighting

Reputation impact should depend on the actor's level of responsibility in the project.

## Principle

> Reputation should be simple at the surface, detailed under inspection, separated by role, aggregated upward, weighted over time, and proportional to responsibility.

## Status

Extension of H014 — Reputation Architecture.
