# H005 - Personal AI Guides for Participation

## Hypothesis

Personal AI guides could reduce the cognitive cost of citizen participation by summarizing proposals, comparing them with declared individual preferences, detecting contradictions, and helping citizens understand possible actions.

They are useful, but they are not required for Core v0.

## Problem addressed

A common objection to participatory governance is that people lack time, information, or technical knowledge to participate in many decisions.

Core v0 already contains lower-dependency mechanisms for participation capacity:

- layered citizen interfaces;
- Assisted Deliberation Context;
- automatic allocation profiles;
- scoped delegation;
- participation-support projects;
- notifications and summaries;
- public audit trails.

Personal AI guides may extend these mechanisms later, but the model should not depend on advanced personal AI to work.

## Scope classification

Full personal AI guides are `Extension v1+`.

Core v0 should only define compatibility and safety boundaries for any personal AI assistance connected to the platform.

## Boundary with neighboring concepts

H005 is not H006.

H006 defines a common Assisted Deliberation Context shown around material citizen actions. It is part of Core v0 because ordinary citizens need a concise, source-visible context before deciding.

H005 concerns a private or user-specific assistant aligned with one citizen's preferences, values, goals, accessibility needs, language, and decision history.

H005 is not delegation.

Delegation is explicit scoped authority given to an eligible citizen or eligible organization. A personal AI guide cannot be a delegate, cannot hold represented weight, cannot accept delegation, and cannot act as an internal civic actor.

H005 is not an automatic allocation profile.

An automatic allocation profile is a citizen-configured rule that executes under published platform rules. A personal AI guide may help a citizen configure or understand a profile, but the executed rule is the profile, not the AI as an actor.

H005 is bounded by C008:

```text
AI assists; the protocol decides.
```

## Allowed functions

A personal AI guide may:

- summarize project cards, full project sheets, complaints, comments, evidence status, fiscalization status, and audit history;
- compare projects against the citizen's declared preferences;
- explain how a project relates to the citizen's values or past behavior;
- translate technical language into accessible language;
- identify contradictions, missing information, risks, or unresolved issues;
- explain the Assisted Deliberation Context;
- help configure an automatic allocation profile;
- help compare eligible delegates;
- draft comments, questions, justified objections, or complaint text for citizen review;
- remind the citizen of pending decisions, reports, delegation changes, or profile runs;
- explain why an automatic allocation profile or delegate acted as it did;
- help the citizen inspect source records.

## Prohibited functions

A personal AI guide must not:

- become a civic actor;
- become a delegate;
- accept delegation;
- hold represented weight;
- fund, support, object, complain, vote, follow, or offer fiscalization by itself;
- submit formal complaint evidence or fulfillment/control evidence by itself;
- select fiscalizers;
- approve disbursement, closure, reputation, or formal evaluation;
- override protocol rules;
- hide source records;
- manipulate the citizen through undisclosed ranking;
- silently convert private preferences into platform-wide discovery rules;
- sell privileged steering, paid promotion, or hidden recommendations;
- use citizen data for external targeting without explicit consent and governance;
- perform material civic action without the citizen's explicit confirmation or a separately configured, auditable platform rule.

## Compatibility rules

If a personal AI guide connects to the system, Core v0 compatibility should require:

- verified citizen control over connection and revocation;
- explicit consent for data access scope;
- separation between reading, drafting, recommending, and acting;
- visible source references for material advice;
- AI-generated content labels where relevant;
- correction and override by the citizen;
- no hidden delegation;
- no hidden automatic allocation;
- no private provider authority over platform order, funding, reputation, or complaint handling;
- audit trace when the guide materially influences a platform action;
- privacy protections for sensitive identity, beneficiary, complaint, evidence, delegation, and preference data.

## Material-action rule

For material civic actions, the system should distinguish:

```text
AI suggestion
Citizen confirmation
Protocol action
Audit record
```

A personal AI guide may prepare or recommend an action. The action becomes valid only through:

- explicit citizen confirmation;
- an accepted delegation to an eligible non-AI actor;
- a citizen-configured automatic allocation profile;
- or another platform-recognized rule that is public, revocable where applicable, and auditable.

## Example: Macul multi-courts

A personal AI guide may tell the citizen:

```text
This project matches your interest in youth sports.
Design deliverables are still pending.
Execution funds may be reserved but cannot be released until the design gate is accepted.
Review bathrooms, dimensions, accessibility, lighting, and the declared relationship between designer and executor.
```

It may help the citizen open the design detail, draft a question, or configure a sports-focused allocation profile.

It must not silently fund the project, hide the pending design gate, suppress objections about missing bathrooms, or act as a delegate.

## Example: adult-care project

A guide may help a citizen who cares about older adults compare projects by:

- service continuity;
- beneficiary privacy protections;
- fulfillment evidence sufficiency;
- role-performance history;
- complaint status;
- distance or territory.

It must not use private family-care preferences to target the citizen with undisclosed provider recommendations or paid project placement.

## Risks

- model bias;
- provider capture;
- manipulation;
- over-delegation;
- privacy concerns.
- preference capture;
- hidden political targeting;
- AI hallucination;
- over-trust in generated summaries;
- unequal access to high-quality assistants;
- vendor lock-in;
- private recommender capture of public allocation.

## Open design questions

- Should personal AI guides be platform-provided, third-party, self-hosted, or mixed?
- What minimum audit trace is required when a guide materially influences a civic action?
- How should citizens revoke guide access and delete or export preference data?
- How should guide recommendations be distinguished from platform discovery?
- Should a country implementation certify guide providers, or should Core v0 only define interface and safety requirements?

## Status

Aligned as Extension v1+ with Core v0 compatibility boundaries.
