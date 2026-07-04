# H014 — Reputation Architecture

## Hypothesis

A distributed governance system requires reputation that is institutional, personal, role-based, time-weighted, recoverable, transparent, and traceable from reviewed inputs to role-specific updates.

Reputation should not become a generic social score, a popularity vote, a punishment for proximity, or an automatic effect of project closure labels.

## Resolution alignment

H014 should be read with:

- [[reputation-input-chain-v0|knowledge/concepts/reputation-input-chain-v0.md]];
- [[evaluation-context-taxonomy-v0|knowledge/concepts/evaluation-context-taxonomy-v0.md]];
- [[H030-layered-role-based-reputation|knowledge/hypotheses/H030-layered-role-based-reputation.md]];
- [[51_ROLE_REPUTATION_RESPONSIBILITY_AND_C012_RESOLUTION|docs/51_ROLE_REPUTATION_RESPONSIBILITY_AND_C012_RESOLUTION.md]];
- [[56_VALUE_FULFILLMENT_REPUTATION_AND_C018_RESOLUTION|docs/56_VALUE_FULFILLMENT_REPUTATION_AND_C018_RESOLUTION.md]].

H015 defines which evaluations can become formal reputation inputs. C012 defines when negative responsibility affects a role. C018 defines why closure labels are context rather than automatic scores. H030 defines the layered visibility model.

## Rationale

If institutions, companies, foundations, auditors, fiscalizers, experts, and project teams compete for social resources, reputation becomes a key mechanism for trust and accountability.

However, reputation cannot be attached only to disposable institutions. Otherwise, a failed or fraudulent group could close one entity, create another, and reset its history.

## Core rule

Reputation should follow reviewed role responsibility and verified role performance.

It may attach to both:

- organizations;
- the people with relevant responsibility inside projects.

But it should update only through a traceable chain:

```text
Reputation Signal -> Reputation Input -> Reputation Update -> Reputation Summary
```

Raw opinion, popularity, suspicion, unfounded complaints, unreviewed evidence, AI anomaly flags, project proximity, and closure labels should not directly update formal reputation.

## Reputation input chain

### Reputation Signal

A signal is visible context without direct formal effect:

- citizen satisfaction or dissatisfaction;
- beneficiary experience;
- funder concern;
- public criticism;
- raw complaint;
- unreviewed evidence submission;
- AI anomaly flag.

Signals may be routed into review, but they do not directly update reputation.

### Reputation Input

A formal input is a reviewed record that may affect reputation.

Examples:

- verified value fulfillment score;
- metric breakdown;
- EvaluationRecord with reputation effect;
- founded complaint correction;
- Responsibility Event;
- accepted fulfillment/control evidence correction;
- verified discovery;
- fiscalizer or reviewer finding;
- protocol-defined role-performance review.

### Reputation Update

An update applies a reviewed input to a specific actor in a specific role.

It should record:

```text
actor
role affected
project or object
reputation input reference
obligation or performance dimension
previous reputation
new reputation
weight or decay rule
severity rule
citizen-facing explanation
appeal or review status
```

### Reputation Summary

The summary is a citizen-facing navigation layer, not the source of formal judgment.

Example:

```text
Executor reputation: 84 / 100
Recent fulfillment: strong
Serious responsibility events: 1
Details available
```

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

Related companies or holding-linked companies should not be automatically contaminated by one actor's reputation event. A related actor may receive a reputation input only when review establishes a formal role, control, hidden conflict, direct participation, negligence, repeated pattern, or other role-specific responsibility basis.

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

Severe events may lose numerical weight over time, but they should remain visibly inspectable even after aggregate reputation improves.

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

## Macul example

Project:

```text
Design and Construction of Multi-court Facility in Macul
```

If the accepted design omits required bathrooms or uses incorrect court dimensions:

- the modeler/designer may receive a reputation input if the flaw belongs to design responsibility;
- the technical reviewer may receive a reputation input if it negligently approved the flawed design;
- the executor should not be penalized merely for executing the accepted design;
- the executor may receive a reputation input if the design included bathrooms and execution omitted them;
- a holding-related company should not be penalized unless its formal role, control, conflict, concealment, negligence, or direct responsibility is reviewed and demonstrated.

If a resident says "bathrooms are missing," that starts as a reputation signal or complaint evidence. It becomes a reputation input only after review connects the finding to a role obligation. It becomes a reputation update only for the actor and role actually affected.

## Audit requirements

Every formal reputation update should preserve:

- source reputation input;
- actor and role affected;
- project or object reference;
- obligation or performance dimension;
- evidence, EvaluationRecord, complaint, fiscalizer report, verified discovery, or Responsibility Event references;
- previous reputation;
- new reputation;
- weight, decay, and severity rule;
- citizen-facing explanation;
- appeal or review status;
- timestamp.

## Non-goals

H014 does not define a single universal formula for all reputation. Formula parameters may be protocol-configurable.

H014 does not create a generic social score. General summaries are navigation layers over role-specific records.

## Simulation evidence

The pre-registered E6 experiment ([[e6-reputational-competition-design|research/e6-reputational-competition-design.md]], results in [[simulation-results|research/simulation-results.md]]) isolates the incentive channel of this architecture with an all-honest executor pool, where diversion does not exist and any gain is incentive rather than enforcement. Visible reputational competition sustains executor effort and quality where opacity lets them decay toward cost-minimization, delivering +11% more social value in-model. Visibility alone carries most of the effect: in an opaque system there is no visible standard to imitate, and professional norms erode — visibility creates a commons of standards before it creates a market. The same experiment supplies the design warning this hypothesis's rules anticipate: naive reputation-weighted assignment concentrates work faster than it finds ability, because early assignments build reputation, reputation wins assignments, and early luck locks in. That is why in Core v0 reputation informs funders' choices and eligibility rather than automatically assigning work, and why concentration must remain visible, entrants protected, and reputation read against the opportunities an actor actually had.

## Principle

> Reputation should be simple on the surface, deep under inspection, traceable across people and institutions, weighted over time, and proportional to reviewed responsibility, verified performance, and severity.

> Reputation moves from signal to reviewed input to role-specific update to citizen-facing summary. It should not jump directly from opinion, suspicion, project proximity, or closure label to formal score.

## Status

Core trust infrastructure hypothesis. Aligned during the residual audit after H015.
