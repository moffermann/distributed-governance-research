# Project Object Model v0

## Purpose

This document defines the project as the central operational object of the Core v0 architecture.

## Definition

A project is the basic operational and financeable unit of the system.

It is a concrete proposal for public or social action that declares:

- what value it promises to generate;
- who benefits;
- what resources it requires;
- who is responsible for execution;
- how it will be executed;
- how progress will be measured;
- what evidence will be required;
- how it can be fiscalized;
- what risks, externalities, or antivalues may exist.

## Core distinction

```text
A project is funded.
A common-good charter is approved.
```

A project does not require a vote to exist or to be financed. It requires financing, evidence, responsibility, and accountability.

## Minimal definition

```text
Project:
  financeable operational unit;
  created by a citizen or organization;
  associated with a public function or project classification;
  declares value thesis, budget, KPIs, milestones, evidence, responsible actors, risks, and fiscalization conditions.
```

## Required executor rule

A project may exist as a draft or design without an executor.

However, a project should not enter execution-financing unless it has an identified and accepted responsible executor.

Reason:

```text
No executor → no accountable party → no enforceable milestones → no evidence obligation → no reputational consequence.
```

Therefore:

> Every project published for execution financing must have a responsible executor identified and accepted.

A separate project may exist for design/modeling work. In that case, the executor is the actor responsible for delivering the design, not the future execution of the designed project.

## Main project sections

### 1. Project identity

- project id;
- name;
- short description;
- full description;
- public function / classification;
- territory or location;
- current state;
- creation date;
- publication date;
- funding deadline.

### 2. Actors and roles

The project references actors who hold roles.

Possible project roles:

- proposer;
- modeler / designer;
- executor;
- fiscalizer;
- funder;
- beneficiary;
- affected party;
- complainant / denunciante;
- evaluator;
- commenter;
- evidence producer.

Roles are accumulable unless an incompatibility or conflict of interest applies.

### 3. Value thesis

The value thesis declares:

- value promised;
- problem addressed;
- intended beneficiaries;
- why the project matters;
- what happens if the project is not performed;
- relevant risks or tradeoffs.

### 4. KPIs

A project defines its own KPIs.

Each KPI should include:

- name;
- description;
- target;
- measurement method;
- evidence required;
- reporting frequency;
- reporting actor;
- fiscalization actor or method where applicable.

### 5. Budget and financing

A project declares:

- required amount;
- currency;
- funding deadline;
- amount currently financed;
- number of funders;
- funding status;
- funding closure rules.

Core funding rules:

```text
If the project reaches or exceeds its declared funding target → funding closes.
No automatic overfunding by default.
If the project does not reach funding by deadline → close or reformulate.
```

### 6. Milestones, disbursement, and guarantees

A project may include:

- execution milestones;
- amount associated with each milestone;
- evidence required for each milestone;
- disbursement condition;
- retention rules;
- guarantees or bonds;
- conditions for executing guarantees.

Funding completion does not imply full immediate transfer to the executor. Funds may be released by milestone according to the project design.

### 7. Evidence and fiscalization

The project declares:

- evidence required;
- evidence submitted;
- observations;
- fiscalization events;
- fiscalization results;
- unresolved issues;
- mitigation requirements.

The executor should not be the only source of evidence about its own performance.

### 8. Risks and antivalues

A project declares:

- risks;
- possible externalities;
- declared antivalues;
- mitigation plans;
- detected undeclared antivalues if discovered later.

Undeclared antivalues may affect fiscalization, reputation, mitigation, pause, or revocation.

### 9. Relationships with other objects

A project may be linked to:

- composite program;
- common-good governance program;
- common-good charter;
- operating mode;
- complaint;
- fiscalization process;
- reputation records;
- delegation-generated actions;
- evidence records;
- guarantee records.

## Project states

### Primary lifecycle

```text
Draft
→ Pending moderation, if operating mode requires it
→ Published / Funding
→ Funded
→ Preparation
→ Execution
→ Completed
→ Evaluated / Closed
```

### Alternative or exceptional states

```text
Rejected in moderation
Reformulated
Expired without funding
Closed
Under complaint
Paused
Revoked
```

## State definitions

### Draft

Editable and not public for funding.

### Pending moderation

Waiting for approval under a tutored or semi-open operating mode.

### Published / Funding

Visible and eligible to receive funding/support according to its operating mode and project rules.

### Funded

Reached or exceeded the declared funding target. Funding closes.

### Preparation

Post-funding setup before execution begins.

### Execution

Milestones are being performed and evidence is being produced.

### Completed

Execution commitments are finished.

### Evaluated / Closed

Evidence, fiscalization, reputation, and results are recorded.

## Rejection in moderation

Moderation rejection before publication is not a public punishment and should not create reputational damage by itself.

The project creator may reformulate, reclassify, or resubmit.

## Principle

> A project is a defined commitment for value creation. It can be financed only when responsibility, value thesis, KPIs, evidence, and execution accountability are sufficiently explicit.

## Status

Accepted as Project Object Model v0.
