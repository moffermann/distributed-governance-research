# Control Subprojects and C002 Resolution v0

## Purpose

This document resolves contradiction C002 from the v0 contradiction checklist.

C002 was originally framed as a tension between allowing fiscalizers to offer their services and preventing the executor from choosing or controlling the fiscalizer who will evaluate its own performance.

The resolution is to model fiscalization work as a special kind of project: a `Control Subproject` associated with a parent project.

## Status

Accepted as the v0 resolution for C002.

## Core distinction

```text
Main Project ≠ Control Subproject
```

A main project executes a public value promise.

A control subproject executes the fiscalization, evidence review, audit, or verification work associated with that main project.

Both are project-like, but they do not follow exactly the same selection rules.

## Definition of Control Subproject

A `Control Subproject` is a project-like unit whose purpose is to fiscalize, audit, verify, inspect, or review a parent project.

It may include:

- responsible fiscalizer or control executor;
- scope of review;
- methodology;
- budget;
- milestones;
- fulfillment/control evidence requirements;
- reports;
- deliverables;
- timeline;
- comments;
- questions;
- reputation effects;
- audit trail.

It does not exist to deliver the public value of the parent project. It exists to control whether that value is being executed as promised.

## Why model fiscalization as a project?

Fiscalization work has project-like characteristics:

- someone executes the fiscalization;
- there is a budget;
- there are deliverables;
- there may be milestones;
- there is methodology;
- there are comments and questions;
- there is evidence;
- there is closure;
- performance should affect reputation.

Therefore, modeling fiscalization as a control subproject allows it to use the same architecture of responsibility, evidence, comments, auditability, and reputation.

## Difference from ordinary projects

A control subproject is not selected by popularity or ordinary citizen funding competition.

The selection logic is different because fiscalization is a control function.

Ordinary projects answer:

```text
What public value should be executed?
```

Control subprojects answer:

```text
Who is qualified and independent enough to verify execution?
```

## Relationship between main project and control subproject

```text
Main Project
→ requires control
→ opens fiscalization/control subproject process
→ receives fiscalizer/control offers
→ generates project-specific fiscalizer eligibility and reputation profiles
→ assigns control subproject by protocol
→ uses control reports for milestones and disbursement
```

A main project may have:

- one control subproject;
- several control subprojects;
- specialized control subprojects;
- a secondary fiscalization or fiscalization-audit subproject where protocol permits;
- evidence mission subprojects;
- extraordinary review subprojects.

## Funding of control subprojects

The control subproject should be funded from the parent project's control budget.

The control budget may include:

- responsible fiscalization;
- evidence production;
- field visits;
- technical inspections;
- audit reports;
- extraordinary reviews;
- contingency control work.

Rule:

> Control funding is part of the project control architecture, but it should not be controlled by the executor being reviewed.

## Secondary fiscalization and fiscalization audit

Core v0 may allow one secondary fiscalizer or fiscalization auditor after the primary control package has been accepted.

This role exists to strengthen auditability without creating unlimited fiscalization.

Rules:

- maximum one primary fiscalizer and one secondary fiscalizer or fiscalization auditor;
- the secondary fiscalizer does not replace the primary fiscalizer;
- the secondary fiscalizer reviews, contrasts, or audits the primary fiscalization;
- its conclusions are public and auditable;
- its conclusions do not automatically block execution or disbursement;
- any blocking effect must enter through the ordinary complaint, extraordinary review, pause, blocking, or disbursement-control path;
- selection must follow eligibility, conflict, independence, and auditability rules.

Supplemental evidence-producer subprojects may also be accepted when they produce distinct or complementary evidence. They should not be used to fund duplicate evidence that adds no meaningful verification value.

## Selection problem

The executor should not choose its own fiscalizer.

But the platform should also not select fiscalizers through opaque discretion.

Therefore, fiscalization offers should be handled through a protocolized selection process similar to a lightweight procurement or tender process.

Selection should expose a project-specific fiscalizer eligibility and reputation profile. This profile shows the criteria for the parent project or control subproject, the fiscalizer's eligibility for that specific scope, contextual performance in comparable projects, declared or detected repeat relationships, dependency concentration, workload/capacity, and safeguards required. It is not a generic reputation score and does not select the fiscalizer by itself.

## Selection flow

```text
1. Parent project declares required control.
2. Control budget and scope are defined.
3. Control subproject opportunity opens.
4. Fiscalizers submit offers.
5. Eligibility filter applies.
6. Conflict-of-interest filter applies.
7. Technical/economic evaluation applies.
8. Selection rule applies based on risk.
9. Control subproject is assigned.
10. Selection reason is published and audited.
```

## Eligibility criteria

Eligibility defines who may compete.

Recommended v0 criteria:

- verified identity or organization;
- eligible actor type;
- required competency or qualification;
- relevant experience;
- no active ineligibility or severe negative reputation;
- capacity to execute the control work;
- acceptance of auditability;
- acceptance of reporting obligations;
- relationship and conflict declaration;
- offer submitted within window;
- offer includes required methodology and deliverables.

Eligibility does not choose the winner. It only defines admissible offers.

## Conflict criteria

A fiscalizer offer should be rejected or flagged when there is a strong conflict.

Possible conflicts:

- same organization as executor;
- direct financial relationship with executor;
- current contractual dependency;
- family or close personal relationship where declared;
- shared ownership;
- repeated suspicious relationship pattern;
- involvement in designing or executing the parent project;
- prior disqualifying conduct.

Rule:

> The executor may declare an objection based on verifiable conflict, but cannot select the fiscalizer.

## Evaluation criteria

Among admissible offers, the protocol may evaluate:

- methodology;
- experience;
- independence;
- cost;
- territorial capacity;
- response time;
- reputation;
- quality of evidence plan;
- clarity of deliverables;
- ability to detect fraud, non-compliance, or weak fulfillment/control evidence.

## Risk-adjusted selection model

The selection process should be proportional to parent-project risk.

### Low-risk projects

```text
Eligibility filter
Conflict filter
Rotation or random selection among admissible fiscalizers
```

This keeps the system simple and avoids bureaucracy.

### Medium-risk projects

```text
Eligibility filter
Conflict filter
Simple technical/economic scoring
Semi-random selection among top admissible offers
```

This avoids pure popularity, pure price competition, and pure platform discretion.

### High-risk projects

```text
Strong eligibility filter
Strong conflict filter
Detailed technical/economic evaluation
Possible double fiscalization
Possible specialized review
Public justification of selection
```

High-risk projects may require more than one fiscalizer or a reinforced control structure.

## Why not ordinary voting?

Citizens may observe and comment on control offers, but the control subproject should not be selected by ordinary popularity vote.

Fiscalization is not a popularity contest. It is a control function.

The relevant question is not:

```text
Who do people like most?
```

The relevant question is:

```text
Who is admissible, independent, competent, affordable, and methodologically adequate for this control task?
```

## Citizen role

Citizens can still participate by:

- seeing offers;
- seeing why an offer was selected;
- commenting on apparent conflicts;
- objecting to suspicious relationships;
- following the control subproject;
- reading reports;
- filing complaints if control is deficient.

But citizens do not directly select fiscalizers by popularity in v0.

## Executor role

The executor can:

- see control requirements;
- see selected fiscalizer;
- respond to fiscalizer requests;
- object to verifiable conflicts;
- provide evidence;
- answer observations.

The executor cannot:

- choose its preferred fiscalizer;
- directly pay the fiscalizer outside the protocol;
- remove the fiscalizer for convenience;
- weaken control requirements unilaterally.

## Reputation effects

Because a control subproject is project-like, it can produce role-based reputation events.

Fiscalizer reputation may be affected by:

- timeliness;
- quality of reports;
- independence;
- detection of relevant issues;
- false or negligent conclusions;
- failure to disclose conflicts;
- quality of evidence review;
- closure quality.

Main project reputation and control subproject reputation remain linked but distinct.

## Comments and complaints

Control subprojects may receive:

- comments;
- questions;
- conflict observations;
- complaints about fiscalization quality;
- evidence contradictions;
- requests for clarification.

This allows the same transparency model used for projects to apply to control work.

## C002 final resolution

C002 is resolved as follows:

```text
Fiscalization is modeled as a Control Subproject associated with a parent project.
```

Final rule:

> Fiscalization may be structured as a project-like control subproject with budget, methodology, deliverables, evidence, comments, auditability, and reputation. However, it is not selected by ordinary popularity or by the executor. It is selected through a protocolized, risk-adjusted process based on eligibility, conflict checks, technical/economic criteria, and auditability.

> The selection record should expose the project-specific fiscalizer eligibility and reputation profile, including comparable-project history, repeat relationships, dependency concentration, report sufficiency history, warnings, and safeguards where material.

Supplemental rule:

> Control subprojects may include one secondary fiscalization or fiscalization-audit role and distinct additional fulfillment/control evidence work, but they must not become unlimited control overfunding.

## Documents that should eventually reflect this resolution

This resolution should inform future updates to:

- Core v0 scope freeze;
- consolidated entity/object/state map;
- fiscalization evidence and control model;
- project disbursement flow;
- diagram index;
- contradiction checklist;
- future implementable object schema.

## Remaining risks

- The selection process may become too complex.
- Fiscalizers may game scoring criteria.
- Repeated relationships may still create soft capture.
- Low-risk projects may not justify expensive selection procedures.
- High-risk projects may need country-specific professional standards.
- Secondary fiscalization may be used to pressure or harass projects if not capped.
- Duplicate fulfillment/control evidence work may waste control funding.

## Mitigations

- Use risk-adjusted selection.
- Keep low-risk selection simple.
- Make selection reasons visible.
- Track repeated relationships.
- Require conflict declarations.
- Record selection as audit event.
- Allow citizen observations on conflicts.
- Cap ordinary supplemental fiscalization at one secondary fiscalizer or fiscalization auditor.
- Require distinct fulfillment/control evidence value before accepting supplemental fulfillment/control evidence work.
- Route blocking effects through formal review paths rather than automatic secondary-fiscalizer veto.

## Design rule

> Control work should fit the project architecture, but control selection must follow independence rules stronger than ordinary project selection.
