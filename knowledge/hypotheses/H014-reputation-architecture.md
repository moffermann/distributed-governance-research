# H014 — Reputation Architecture

## Hypothesis

A distributed governance system requires reputation that is institutional, personal, role-based, time-weighted, recoverable, and transparent.

## Rationale

If institutions, companies, foundations, auditors, fiscalizers, experts, and project teams compete for social resources, reputation becomes a key mechanism for trust and accountability.

However, reputation cannot be attached only to disposable institutions. Otherwise, a failed or fraudulent group could close one entity, create another, and reset its history.

## Core rule

Reputation should follow both:

- organizations;
- the people with relevant responsibility inside projects.

## Actors whose reputation may be linked

- legal representative;
- owners or controllers;
- directors;
- project lead;
- technical lead;
- financial lead;
- auditors;
- fiscalizers;
- key professionals;
- execution team members according to role and responsibility.

## Responsibility weighting

Transparency requires visibility of the whole relevant team, but responsibility should be weighted by role. A director, technical lead, auditor, and junior team member should not bear identical responsibility.

## Time weighting

Reputation should be weighted by recency. Old evaluations lose weight over time, allowing recovery without erasing history.

Example:

```text
Project 1: success → 5.0
Project 2: failure → 2.0
Initial average: 3.5
Future successful projects can improve the score.
Older events gradually lose weight.
```

## Severity weighting

Failure and fraud should not decay identically.

- Ordinary failure should reduce reputation but allow recovery.
- Fraud, concealment, misappropriation, or manipulation should carry heavier and longer-lasting reputational consequences.

## Layered reputation

Reputation should be simple at the surface and detailed under demand.

Summary view:

```text
General reputation: 4.3 / 5
Trust level: High
History: 18 projects, 15 successful, 2 partial, 1 failed
```

Detailed view:

- goal fulfillment;
- transparency;
- technical quality;
- use of resources;
- beneficiary treatment;
- management of externalities;
- response to problems;
- fiscalization history.

## Principle

> Reputation should be simple on the surface, deep under inspection, traceable across people and institutions, weighted over time, and proportional to responsibility and severity.

## Status

Core trust infrastructure hypothesis.
