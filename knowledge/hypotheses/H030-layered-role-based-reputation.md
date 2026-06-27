# H030 — Layered Role-Based Reputation

## Hypothesis

Reputation in a distributed governance system should be layered and role-based. A person or institution may have a general reputation summary, but meaningful evaluation should be separated by role.

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
General trust level: High
Relevant roles: executor, modeler, fiscalizer
Project history: 18 projects
Recent performance: stable
```

### 2. Role-specific reputation

Separate reputation by role:

- executor reputation;
- modeler reputation;
- fiscalizer reputation;
- auditor reputation;
- expert reviewer reputation;
- complainant reliability;
- funder behavior.

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

### 4. Temporal weighting

Reputation should be weighted by recency, allowing recovery while preserving traceability.

### 5. Responsibility weighting

Reputation impact should depend on the actor's level of responsibility in the project.

## Principle

> Reputation should be simple at the surface, detailed under inspection, separated by role, weighted over time, and proportional to responsibility.

## Status

Extension of H014 — Reputation Architecture.
