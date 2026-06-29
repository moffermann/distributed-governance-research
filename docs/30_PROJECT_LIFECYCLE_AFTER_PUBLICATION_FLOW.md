# Project Lifecycle After Publication Flow v0

## Purpose

This document freezes the first version of the project lifecycle after publication.

It covers what happens after a project becomes public as an open project: how it completes closure conditions, becomes execution-ready, enters execution, advances through milestones, submits evidence, receives fiscalization, releases funds, handles problems, and closes.

## Core principle

> A project moves from public promise to execution only through verifiable conditions, and releases resources only through milestones, evidence, and fiscalization.

Publication is not execution authorization. Funding is not immediate payment. Execution is not self-declared compliance.

## Main question

```text
What happens to a project after it is published as open until it closes?
```

## Lifecycle overview

```text
Open project
→ parallel closure of conditions
→ execution-ready
→ in execution
→ milestones
→ evidence submission
→ fiscalizer review
→ disbursement decision
→ corrections / complaints / pause / reformulation / revocation if needed
→ closure
→ final evaluation and reputation effects
```

## 1. Open project

A project becomes `Open` when it is public and can gather the elements it needs before execution.

An open project can receive:

- funding commitments;
- fiscalizer offers;
- evidence producer commitments;
- beneficiary confirmations where applicable;
- comments;
- complaints;
- community observations;
- missing documents or clarifications.

An open project cannot automatically execute just because it is visible.

### Rule

> Open means public and active for completion of conditions. It does not mean approved for execution.

## 2. Parallel closure of conditions

Open projects complete their applicable conditions in parallel.

Possible closure conditions:

- funding target reached;
- responsible executor accepted;
- fiscalizer confirmed;
- evidence producers committed;
- beneficiary information declared or confirmed;
- required documents complete;
- guarantees or retentions configured;
- control budget complete;
- no blocking complaint;
- moderation completed if operating mode requires it;
- required protocol checks passed.

The project dashboard should show each condition as complete, incomplete, pending, blocked, or not applicable.

Example:

```text
Funding: complete
Executor: confirmed
Fiscalizer: confirmed
Evidence producers: 4/4
Blocking complaints: 0
Documents: complete
```

### Rule

> A project does not become ready because it passed a rigid sequence. It becomes ready because all applicable closure conditions are complete.

## 3. Execution-ready transition

When all applicable closure conditions are complete, the system evaluates whether the project can become `Execution-ready`.

This check should confirm:

- the project version is stable;
- funding commitments are enough;
- no blocking complaint is active;
- fiscalization is configured;
- evidence obligations are configured;
- milestone plan is complete;
- disbursement milestone plan has no unresolved critical validation failures;
- disbursement rules are defined;
- executor has accepted responsibility;
- required documents and guarantees are complete;
- operating mode requirements are satisfied.

If approved, status becomes:

```text
Execution-ready
```

### Meaning

Execution-ready means:

- the project may begin execution under the approved plan;
- funds remain controlled and are released by rule;
- milestones, evidence, fiscalization, and reporting obligations become active.

### Rule

> Execution-ready authorizes the start of controlled execution. It does not release the full budget automatically.

## 4. Start of execution

When execution begins, status becomes:

```text
In execution
```

The system activates:

- milestone calendar;
- evidence schedule;
- fiscalizer responsibilities;
- executor reporting obligations;
- citizen notifications;
- funder tracking;
- complaint and observation channels;
- disbursement controls.

The executor should see an execution panel with:

- current milestone;
- next evidence due;
- pending comments or complaints;
- fiscalizer requirements;
- disbursement status;
- risks or delays.

## 5. Milestone execution

Each milestone should include:

- milestone name;
- expected date or period;
- responsible actor;
- expected output;
- required evidence;
- reviewer;
- disbursement consequence;
- correction rule;
- late rule.

Example:

```text
Milestone 1:
Beneficiary registration

Expected evidence:
registration list, selection criteria, initial confirmations

Reviewer:
responsible fiscalizer

Disbursement:
20% if accepted
```

### Possible milestone states

```text
Pending
In progress
Evidence submitted
Under review
Approved
Approved with observations
Correction required
Rejected
Late
Paused
```

## 6. Evidence submission

For each milestone, evidence may come from:

- executor;
- fiscalizer;
- evidence producers;
- beneficiaries;
- funders;
- open observers;
- documents or system integrations where applicable.

Possible evidence states:

```text
Expected
Submitted
Pending review
Accepted as evidence
Observed
Rejected
Contradicted
Linked to fiscalizer report
```

Evidence must be linked to:

- project;
- milestone;
- metric;
- producer;
- timestamp;
- privacy classification;
- review status.

### Rule

> Evidence is not mere decoration. It must be connected to a milestone, metric, value promise, or complaint/review issue.

Executor-submitted material is self-reported support unless corroborated. Critical milestones, disbursements, and closures require evidence produced or corroborated by evidence producers, fiscalizers, verified beneficiaries, technical records, or other non-executor sources.

## 7. Fiscalizer review

The fiscalizer reviews the milestone against the accepted project design.

The review may consider:

- required evidence;
- metric targets;
- beneficiary confirmations;
- budget use;
- executor report;
- evidence producer submissions;
- comments;
- complaints;
- prior warnings;
- protocol rules.

Possible review outcomes:

```text
Approved
Approved with observations
Correction required
Rejected
Extraordinary review required
```

### Rule

> The executor may report progress, but cannot unilaterally validate its own fulfillment.

## 8. Disbursement decision

Funds are released according to milestone rules.

Possible disbursement states:

```text
Retained
Pending review
Approved for release
Released partially
Released fully for milestone
Paused
Blocked by complaint
Correction required
Returned or reassigned if project fails
```

The disbursement decision should show:

- milestone;
- amount requested;
- amount approved;
- evidence considered;
- fiscalizer decision;
- any complaint or alert;
- rule applied;
- timestamp;
- actor or system decision responsible.

### Rule

> Money is released for verified milestone fulfillment, not for promises or self-declared progress.

## 9. Observations, corrections, and complaints

During execution, the project may receive:

- comments;
- observations;
- evidence contradictions;
- complaints;
- fiscalizer alerts;
- beneficiary feedback;
- project change requests.

The system may respond by:

- asking executor for clarification;
- requesting additional evidence;
- requiring correction;
- pausing milestone review;
- pausing disbursement;
- triggering extraordinary review;
- escalating to reformulation;
- escalating to revocation in severe cases.

### Rule

> Problems should not disappear into informal conversation. If they affect execution, evidence, funding, or trust, they must produce a visible state or review path.

## 10. Reformulation

A project may require reformulation if the original design can no longer be executed as approved but the project may still preserve public value.

Examples:

- cost changed materially;
- location changed;
- beneficiary number changed;
- executor proposes a modified plan;
- required fiscalization changes;
- milestone plan is no longer realistic;
- risk or antivalue becomes material.

Reformulation should:

- preserve history;
- create a new version;
- show what changed;
- notify affected actors;
- allow funder response where rules require it;
- re-run validation;
- update citizen preview;
- not silently erase prior commitments.

### Rule

> Reformulation changes the project transparently; it does not delete the past.

Operational reformulation may preserve the value thesis. Material value reformulation cannot unilaterally rewrite what funders financed and beneficiaries expected; it requires visible cause analysis, preserved history, funding effects, and role-specific responsibility review.

## 11. Pause

A project may be paused when execution or disbursement should temporarily stop.

Possible reasons:

- blocking complaint;
- missing evidence;
- fiscalizer delay;
- executor delay;
- serious unresolved contradiction;
- external emergency;
- operating mode suspension;
- legal or safety issue.

Pause should show:

- what is paused;
- why;
- who triggered it;
- what must happen next;
- whether funding, execution, or only disbursement is affected.

### Rule

> Pause is temporary control, not silent cancellation.

## 12. Revocation

Revocation is stronger than pause.

It may apply when the project should no longer continue under its accepted authorization.

Possible reasons:

- serious non-compliance;
- fraud;
- false beneficiaries;
- hidden conflict affecting control;
- impossible execution;
- severe unresolved risk;
- repeated failed correction;
- misuse of funds.

Revocation should define:

- project status;
- unused funds treatment;
- already released funds treatment;
- required recovery or sanctions if applicable;
- reputation effects;
- final public explanation;
- appeal or review path where applicable.

### Rule

> Revocation must be traceable, justified, and connected to evidence or rule-based review.

## 13. Closure

A project closes when it reaches a final state.

Possible closure outcomes:

```text
Closed fulfilled
Closed partially fulfilled
Closed unfulfilled
Closed revoked
Closed expired
Closed reformulated into new version
```

Closure should include:

- final value fulfillment;
- metrics achieved;
- metrics not achieved;
- beneficiaries confirmed;
- budget used;
- unused funds;
- evidence final status;
- fiscalizer final report;
- unresolved observations;
- complaints status;
- lessons or notes;
- reputation effects.

### Rule

> Closure must explain what was promised, what was actually delivered, what evidence supports that conclusion, and what happened to the money.

## 14. Final evaluation and reputation

After closure, role-based reputation may be affected.

Relevant roles:

- executor;
- modeler or designer;
- fiscalizer;
- evidence producer;
- funder only where relevant to abuse patterns;
- complainant if complaint quality or abuse is relevant;
- moderator if applicable.

Reputation must be role-specific.

Examples:

- executor reputation: execution performance;
- modeler reputation: design quality;
- fiscalizer reputation: review quality and independence;
- evidence producer reputation: reliability and usefulness of evidence.

### Rule

> Reputation follows role responsibility. It should not collapse all participation into one generic score.

## Citizen-facing status map

Citizen-facing statuses should remain simple:

```text
Open project
Execution-ready
In execution
Paused
Requires reformulation
Revoked
Closed
```

Deeper technical states appear in Layer 5.

## What this lifecycle should not do

This lifecycle should not:

- treat publication as execution approval;
- release all funds at once by default;
- allow executor self-validation;
- hide blocking complaints;
- hide failed milestones;
- erase previous versions during reformulation;
- close without final evidence and money status;
- assign reputation effects without role context.

## Design rule

> The lifecycle must make progress conditional, evidence-based, and traceable from open project to final closure.

## Status

Accepted as Project Lifecycle After Publication Flow v0.
