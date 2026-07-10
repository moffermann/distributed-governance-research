# Review Packet — Systems Architect / Technologist Reviewer

> **⚠️ SUPERSEDED — DO NOT SEND AS-IS (2026-07-10).** This packet targets a v1.8-era draft and its pre-Path-B evidence hierarchy (eight experiments / compound multiplier). The project is now on **Path B**: the multiplier is **retired**; the one genuinely pre-registered confirmatory test is the **symmetry gate** (NO-GO — selection advantage positive but small, pre-registered pooled median Δ = 0.025 < 0.05; post-hoc ratio-of-sums 0.026). Current working draft **v1.13**; controlling spec `research/claim-and-estimand-contract.md`. A v1.13 Path-B packet + cover is pending (roadmap R2-10). Retained for provenance only.

## Why I am sending this to you

I am developing an independent research project on distributed public project governance.

I am not asking you to validate the political theory.

I am asking you to attack the model as a systems architect: object model, workflow, states, data, auditability, identity, permissions, privacy, evidence integrity, implementation sequencing, and MVP feasibility.

The most useful criticism would identify what is overengineered, what is missing, what should stay manual, and what a realistic first prototype should include.

## Compact paper summary

The project asks whether modern technology can help realign institutional incentives enough to improve citizen participation, reduce corruption opportunities, increase accountability, and perform part of the work currently monopolized by state institutions without destroying the existing institutional order.

The minimal model proposes a bounded public-project governance layer.

In this layer, public resources are allocated and controlled through financeable projects that:

- declare measurable public value;
- receive conditional funding rather than immediate uncontrolled payment;
- define how promised value will be evidenced;
- require proportional fiscalization and control;
- release funds by milestone, evidence, and review;
- allow comments, objections, complaints, and corrections;
- close through accountability records;
- update role-specific reputation according to verified fulfillment.

The model is not a proposal to abolish the state, vote on everything, replace public institutions, or reduce governance to blockchain/DAO mechanics.

From a systems perspective, this can be read as an institutional workflow architecture:

```text
actors
roles
projects
value promises
evidence contexts
funding commitments
milestone gates
fiscalization assignments
complaints
audit events
closure records
reputation updates
```

The core thesis is:

> Public resources can be allocated and controlled through financeable public projects that declare measurable value, receive conditional funding, produce contextualized evidence, undergo independent fiscalization, release funds by verified milestones, and update actor reputation according to verified fulfillment.

## Main document to read

Please start here:

```text
docs/101_CORE_V0_MINIMAL_PUBLISHABLE_MODEL.md
```

The published academic manuscript behind this model — formal propositions and an eight-experiment simulation, six experiments pre-registered — is `drafts/paper.md` (v1.8; the v1.7 edition is archived as DOI 10.5281/zenodo.21199738).

You do not need to read the full repository.

Optional deeper documents:

```text
docs/35_CONSOLIDATED_ENTITY_OBJECT_STATE_MAP.md
docs/64_FORMAL_ENTITY_INVENTORY_V0.md
docs/66_IMPLEMENTABLE_OBJECT_SCHEMA_DRAFT_V0.md
docs/diagrams/README.md
external-review/core-v0-review-packet.md
```

## What I need from you

Please focus on:

- object model complexity;
- workflow/state complexity;
- MVP sequencing;
- identity and permissions;
- evidence integrity;
- audit trail design;
- privacy and protected identities;
- integration with payments, treasury, documents, and notification systems;
- manual versus automated operations;
- AI usage boundaries.

## Key questions

```text
1. What is the minimum viable technical prototype?
2. Which object or flow is overengineered?
3. Which object is missing from an implementation perspective?
4. Where are there too many states?
5. Which data would be hardest to capture reliably?
6. Which decisions should remain manual in v0?
7. Where would identity, permissions, or privacy become difficult?
8. How should evidence integrity be handled in a minimal pilot?
9. What systems would this need to integrate with first?
10. What would you build first in 90 days?
```

## Suggested response format

```text
Reviewer background:

One-paragraph understanding of the model:

Strongest technical architecture element:

Most overengineered element:

Missing object / missing workflow:

Data capture risk:

Identity / permission / privacy risk:

Auditability risk:

MVP recommendation:

What should remain manual:

90-day prototype proposal:

Bottom-line judgment:
```

## Optional scoring

```text
Clarity: __ / 5
Technical plausibility: __ / 5
Data model coherence: __ / 5
Workflow coherence: __ / 5
MVP feasibility: __ / 5
Security/privacy handling: __ / 5
Implementation readiness: __ / 5
```

## Message template

```text
Hi [Name],

I am working on a research/prototype architecture for distributed public project governance.

You can read it as an institutional workflow system: actors, roles, projects, evidence, fiscalization, conditional funding, milestone disbursement, complaints, audit trail, closure, and reputation.

I would value your review as a systems architect/technologist.

Please focus on implementability: what is overengineered, what is missing, what should be manual first, what the MVP should contain, and where the data model or workflow becomes too complex.

Suggested entry document:
docs/101_CORE_V0_MINIMAL_PUBLISHABLE_MODEL.md
```

## Final instruction

I am looking for practical architectural criticism, not general encouragement.
