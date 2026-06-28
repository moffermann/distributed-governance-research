# Project Reformulation, Pause, and Revocation Flow v0

## Purpose

This document freezes the first version of the flow for handling projects that cannot continue normally.

Not every problem should revoke a project. The system needs proportional responses: correction, reformulation, pause, extraordinary review, or revocation.

## Core principle

> A project may be corrected, reformulated, paused, or revoked, but every critical change must preserve history, explain effects on funds, notify affected actors, and remain fully traceable.

## Main question

```text
What happens when a project cannot continue exactly as approved?
```

## Response levels

The system should distinguish four main response levels:

```text
1. Minor correction
2. Reformulation
3. Pause
4. Revocation
```

Recommended decision hierarchy:

```text
Minor problem → correction
Relevant but salvageable change → reformulation
Temporary risk or unresolved blocker → pause
Severe non-compliance or impossibility → revocation
```

## 1. Minor correction

A minor correction applies when the issue is fixable and does not change the core promise of the project.

Examples:

- missing evidence;
- incomplete document;
- milestone clarification needed;
- minor budget detail missing;
- relevant comment requires answer;
- mistaken field or typo;
- evidence needs better context.

Possible state:

```text
Correction required
```

Effects:

- project does not necessarily stop entirely;
- affected milestone may pause;
- related disbursement may be retained;
- executor receives correction request;
- fiscalizer or reviewer checks correction;
- history records the correction.

Example:

```text
Milestone 2 observed

Reason:
attendance list for the second session is missing.

Required action:
upload attendance list or justify absence.

Effect:
disbursement for this milestone remains retained until corrected.
```

### Rule

> Minor correction lets errors be fixed without turning every issue into a new substantive project version.

## 2. Reformulation

Reformulation applies when the project changes in a relevant way but may still preserve its public purpose.

Examples:

- beneficiary count changes materially;
- execution location changes;
- budget changes materially;
- executor changes;
- core milestones change;
- evidence obligations change;
- fiscalization requirement changes;
- promised value is reduced or modified;
- new risk or antivalue becomes material.

Possible state:

```text
Requires reformulation
```

Effects:

- new project version is created;
- previous version remains visible;
- changes are explained;
- rules and AI validation run again;
- citizen-facing views update;
- relevant actors are notified;
- executor may need to accept again;
- fiscalization may need to update;
- funders may receive response options when rules require it.

Example:

```text
Reformulation proposed

Change:
direct beneficiaries decrease from 80 to 60 children.

Reason:
available venue has lower capacity.

Impact:
lower promised reach, higher cost per beneficiary, updated metrics required.

Funder options:
keep contribution, return to available balance, or reassign according to profile.
```

### Rule

> Reformulation is not silent editing. It is a visible new project version.

## 3. Pause

Pause applies when execution, disbursement, or a milestone must temporarily stop until a critical condition is resolved.

Types of pause:

```text
Execution pause
Disbursement pause
Specific milestone pause
Full project pause
```

Possible reasons:

- blocking complaint;
- contradicted evidence;
- missing fiscalizer report;
- safety issue;
- required document missing;
- unresolved relationship or conflict issue;
- temporary non-compliance;
- extraordinary review;
- external emergency;
- operating mode suspension.

Possible state:

```text
Paused
```

Pause should show:

- what is paused;
- why it is paused;
- who or what rule triggered it;
- what must happen next;
- what happens to funds;
- what happens to deadlines;
- which actors must respond.

Example:

```text
Project paused

Reason:
blocking complaint about declared beneficiaries.

Effect:
no new funds will be released until the complaint is resolved.

Next:
executor must respond and fiscalizer must review additional evidence.
```

### Rule

> Pause is temporary control, not silent cancellation.

## 4. Revocation

Revocation applies when the project should no longer continue under its existing authorization.

Possible reasons:

- fraud;
- false beneficiaries;
- manipulated evidence;
- severe non-compliance;
- misuse of funds;
- relevant hidden relationship;
- impossible execution;
- repeated failed milestones;
- severe unmitigated risk;
- compromised fiscalization.

Possible state:

```text
Revoked
```

Effects:

- execution stops;
- unreleased funds are blocked;
- already released funds are reviewed;
- retentions or guarantees may activate;
- unused funds are returned or reassigned according to rules;
- resolution is recorded;
- role-based reputation may be affected;
- relevant actors are notified;
- appeal or review may exist if protocol allows.

Example:

```text
Project revoked

Reason:
part of the declared beneficiary list was proven false.

Effect:
remaining funds are blocked, released funds are reviewed, executor reputation is affected, and unreleased citizen contributions return or reassign according to each citizen's rules.
```

### Rule

> Revocation requires a traceable decision connected to evidence, review, complaint, or protocol rule.

## Treatment of funds

### Minor correction

- funds for the affected milestone are retained;
- unaffected funds may continue if protocol allows;
- release resumes after correction is accepted.

### Reformulation

- funds remain committed or paused;
- funders may need to accept the new version;
- funds are not released until updated conditions are validated;
- default citizen rules apply if no response is received within protocol window.

### Pause

- unreleased funds remain retained;
- released funds may be reviewed if related to the issue;
- deadlines may pause or continue depending on protocol.

### Revocation

- unreleased funds are returned or reassigned;
- retained funds may be used according to protocol, guarantee, recovery, or return rules;
- already released funds are classified as justified, disputed, or non-compliant;
- recovery or sanctions may apply where rules allow.

### Fund rule

> Unreleased funds never automatically belong to the executor. Released funds must be separated into justified, disputed, and non-compliant uses when a project fails.

## Citizen notifications

Citizen-facing messages should be simple.

### Correction

```text
This project needs to correct information before advancing the affected milestone.
Your contribution remains committed.
```

### Reformulation

```text
This project changed in a relevant way.
You may keep your contribution, return it to your balance, or reassign it.
```

### Pause

```text
This project is temporarily paused.
No new funds will be released until the stated issue is resolved.
```

### Revocation

```text
This project was revoked.
Unreleased funds will be returned or reassigned according to your rules.
```

## Executor view

The executor should see:

- current state;
- reason;
- affected milestone or project area;
- required action;
- deadline;
- evidence needed;
- possible consequences.

Examples:

```text
State:
Requires reformulation

Reason:
material change in beneficiary count

Available actions:
propose new version, respond, attach evidence, request closure without execution.
```

```text
State:
Paused

Reason:
blocking complaint

Required action:
respond to complaint and upload additional evidence.
```

## Fiscalizer view

The fiscalizer should see:

- reason for correction, pause, reformulation, or revocation;
- related evidence;
- affected milestones;
- affected funds;
- related comments and complaints;
- expected decision;
- review deadline.

Possible recommendations:

- lift pause;
- maintain pause;
- request correction;
- accept reformulation;
- reject reformulation;
- recommend revocation;
- request extraordinary review.

## Audit trail

Every critical state change must be recorded in Layer 5.

Required trace:

- previous state;
- new state;
- reason;
- actor or rule that triggered it;
- evidence considered;
- related complaints;
- funds affected;
- project version;
- executor responses;
- fiscalizer decision;
- notifications sent;
- reputation effects;
- timestamp.

### Rule

> No critical state change should exist without traceability.

## Citizen-facing states

Recommended simple states:

```text
Correction required
Requires reformulation
Paused
Under extraordinary review
Revoked
Closed
```

Technical sub-states can exist in Layer 5.

Examples:

```text
Paused by complaint
Paused by evidence issue
Paused by fiscalization issue
Paused by operating mode
Paused by safety issue
```

## Abuse protection

The flow must prevent the executor from using reformulation to escape responsibility.

Rules:

- previous commitments remain visible;
- changes of scope must show impact;
- beneficiary reductions must be explicit;
- budget changes need justification;
- fiscalization cannot be weakened silently;
- execution failure cannot be disguised as a clean new design without history.

The flow must also prevent weak complaints from destroying projects.

Rules:

- not every complaint pauses;
- not every observation blocks;
- pause requires explicit reason;
- revocation requires review and evidence;
- rejected good-faith complaints should not be punished as abuse.

## Summary flow

```text
Problem detected
→ classify severity
→ correction / reformulation / pause / revocation
→ notify actors
→ define fund effects
→ require response or new version
→ review
→ continue, reformulate, close, or revoke
→ record in audit trail
→ update role-based reputation where applicable
```

## What this flow should not do

This flow should not:

- erase old project versions;
- let changes happen silently;
- release funds during unresolved blockers;
- treat all issues as revocation;
- let weak complaints automatically destroy projects;
- hide fund treatment;
- hide reputation consequences;
- confuse pause with closure.

## Design rule

> Project failure handling must be proportional, visible, reversible where possible, final where necessary, and always auditable.

## Status

Accepted as Project Reformulation, Pause, and Revocation Flow v0.
