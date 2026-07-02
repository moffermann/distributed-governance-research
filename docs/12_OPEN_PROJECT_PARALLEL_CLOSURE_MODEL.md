# Open Project and Parallel Closure Model v0

## Purpose

This document consolidates the idea that projects should not advance through an unnecessarily rigid sequence of stages.

Instead, once a project is sufficiently defined and publishable, it can enter an open state where different required conditions are completed in parallel by different actors.

This model simplifies citizen participation and better reflects distributed governance.

## Core idea

> A project becomes executable not because it passed a long sequential process, but because it completed all applicable closure conditions.

A project can be open for multiple forms of participation at the same time:

- funding;
- phase-specific funding where applicable;
- support;
- justified objection;
- fiscalization offers or fiscalizer participation;
- evidence producer commitments;
- beneficiary confirmation;
- comments;
- complaints;
- support;
- following;
- observation.

## Project Open state

A Project Open state means:

> The project is visible, participable, and gathering the conditions required to become executable.

It is not merely "looking for money".

It may also be looking for:

- fiscalizers;
- evidence producers;
- funders;
- phase deliverables or phase-gate review;
- planning scope alignment review where applicable;
- beneficiary confirmations;
- observations;
- missing control components;
- resolution of blocking issues.

## Parallel condition model

In the open state, the project dashboard shows which conditions are complete, incomplete, or blocked.

Example:

```text
Funding:
  $7.560.000 of $12.000.000
  Missing $4.440.000

Support:
  1,180 active supporters

Justified objections:
  18 active objections

Fiscalizers:
  0 of 1 required

Phases:
  Design under review
  Construction funding reserved

Evidence producers:
  2 of 4 required

Beneficiaries:
  80 declared

Complaints:
  0 blocking
```

The citizen can immediately see what is missing and where they can participate.

## Citizen actions in Project Open state

A citizen or organization may:

- fund the project;
- support the project without funding;
- withdraw support;
- submit a justified objection;
- withdraw a justified objection;
- offer to become a fiscalizer, if eligible;
- offer to become an evidence producer;
- commit to provide evidence later;
- comment;
- file a complaint;
- follow the project;
- support without funding;
- inspect beneficiaries, funders, supporters, justified objections, fiscalizers, evidence, comments, and complaints.

The system does not need to block funding simply because other conditions are incomplete.

Instead, the funding is conditional until the project closes its open formation stage.

Support and justified objection are civic signals, not financial commitments. They may inform the project's legitimacy profile, threshold policy, attention, or review priority, but they remain reversible by the citizen who created them. Withdrawing support does not withdraw committed funding. Withdrawing an objection does not erase a formal complaint if one was filed.

## Conditional funding

Funding provided while a project is open should be treated as committed or reserved funding, not as money released to the executor.

The funds are not transferred to the executor merely because citizens funded the project.

The project must first complete all applicable closure conditions.

If the project never completes its closure conditions within the allowed time, the project may be:

- reformulated;
- extended under protocol rules;
- expired unfunded or closed without execution;
- returned or reassigned according to funding rules.

The allowed time should be represented through a visible `FundingAttempt` for each financeable project, phase, or funding lane. Extension is permitted only under objective and capped rules, such as high funding progress, strong funding velocity, active support growth, continuity risk, essential-service lane, or near-completion without material blockers.

## Closure conditions

Closure conditions are the minimum requirements that must be complete before the project can move from Open to Execution-ready.

They should come from the project's applicable `Threshold Policy`, not from one universal checklist applied to every project.

Possible closure conditions include:

- responsible executor accepted;
- active Planning Scope alignment confirmed;
- required funding reached;
- required prior phase gate accepted where applicable;
- required fiscalizer or fiscalizers confirmed with project-specific eligibility/profile review where responsible fiscalization is required;
- required evidence producer commitments met;
- beneficiary information declared or confirmed where applicable;
- Financial Assurance Profile configured;
- required guarantee materialized where applicable;
- required moderation completed if operating mode requires it;
- no unresolved blocking complaint;
- required control budget completed;
- required project documents complete;
- admissibility review completed where the Threshold Policy requires document or technical acceptability review.

Not every project requires every condition.

Conditions depend on:

- project size;
- project type;
- public function;
- operating mode;
- risk or control requirements;
- territory;
- technical complexity;
- procedural burden profile;
- protocol rules.

The policy source should be visible:

```text
Threshold policy:
Medium public sports infrastructure.

Source:
Current protocol + tutored sports operating mode.

Applies because:
The project builds physical infrastructure, uses public funding, affects public access, and may overlap with existing sports projects.
```

Concrete threshold values may be configured by protocol, operating mode, public-function rule, or country implementation. In tutored mode, the administrator or tutored authority may configure review thresholds such as required documents, duplication checks, review windows, or compatibility checks. In non-tutored or open modes, the competent protocol or governance mechanism defines the applicable strategy. The application records and enforces the visible policy; it does not invent hidden thresholds.

The system and AI may help discover which documents appear necessary, but document acceptability is governed by the active policy. If a project requires independent admissibility review outside tutored authority review, that review may be modeled as a Control Subproject associated with the parent project.

For phased projects, closure conditions may be phase-specific. A parent project may receive construction funding commitments while the design phase is pending, but the construction phase cannot become execution-ready until the design package is accepted and any required control package, documents, evidence plan, and blocking-condition checks are complete.

## State transition

Suggested simplified citizen-facing states:

```text
Draft
→ Open
→ Execution-ready
→ In execution
→ Closed
```

Exceptional states:

```text
Paused
Observed
Reformulation required
Expired
Expired unfunded
Revoked
```

## Draft

The project exists but is not yet publicly participable.

## Open

The project is public and gathering its required conditions in parallel.

Citizens and organizations can participate by funding, offering fiscalization, offering evidence, commenting, following, supporting, or denouncing.

## Execution-ready

The project completed all applicable closure conditions.

At this point:

- Planning Scope alignment is confirmed;
- funding is complete;
- executor responsibility is confirmed;
- required prior phase gates are accepted where applicable;
- fiscalization requirements are satisfied;
- fulfillment/control evidence requirements are satisfied or committed;
- no blocking issue prevents execution;
- funds can begin to be released according to milestones and disbursement rules.

For phased projects, execution-ready may apply to the relevant phase. Construction funding can be reserved before design acceptance, but construction funds cannot be released until the design phase gate is accepted.

## In execution

The project is being executed by the responsible executor.

Milestones, evidence, fiscalization, complaints, and disbursements operate according to the accepted project design and control rules.

## Closed

The project execution and evaluation process has ended.

Final evidence, fiscalization results, financial closure, reputation effects, and project history remain visible.

## Citizen-facing dashboard

The Open project dashboard should emphasize missing and completed conditions.

Example:

```text
Escuela deportiva infantil en Maipú

Estado:
Proyecto abierto

Para estar listo necesita:

💰 Financiamiento
$7.560.000 de $12.000.000
Faltan $4.440.000

🛡 Fiscalizadores
0 de 1 requeridos

📎 Productores de evidencia
2 de 4 requeridos

👥 Beneficiarios
80 declarados

💬 Comentarios
35

🚩 Denuncias
0 bloqueantes

Threshold policy:
Medium public sports project

Actions:
[Financiar]
[Ofrecerme como fiscalizador]
[Aportar evidencia]
[Seguir]
[Ver detalle]
```

## Why this improves the model

The parallel closure model avoids making citizens understand a long technical sequence.

Instead of saying:

```text
This project is in stage 3 of 9.
```

The system says:

```text
This project is open and still needs:
- funding;
- fiscalizer;
- evidence producers.
```

This is easier to understand and invites participation.

## Relationship to the Citizen Project Card

The citizen project card becomes an access dashboard, not a static summary.

Each signal is both information and an entry point:

- funding opens funding detail;
- fiscalizers opens fiscalizer detail;
- evidence opens evidence detail;
- beneficiaries opens beneficiary detail;
- complaints opens complaint detail;
- comments opens discussion.

## Principle

> Project openness means that a project is gathering the conditions required for execution. The project becomes execution-ready only when all applicable closure conditions from its visible threshold policy are complete.

## Status

Accepted as Open Project and Parallel Closure Model v0.
