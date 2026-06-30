# Project Lifecycle After Publication Flow v0

## Purpose

This document freezes the first version of the project lifecycle after publication.

It covers what happens after a project becomes public as an open project: how it completes closure conditions, becomes execution-ready, enters execution, advances through phases and milestones, submits evidence, receives fiscalization, releases funds, handles problems, and closes.

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
→ phase gates and execution-ready
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
- required prior phase gate accepted where applicable;
- responsible executor accepted;
- fiscalizer confirmed;
- evidence producers committed;
- beneficiary information declared or confirmed;
- required documents complete;
- guarantees or retentions configured;
- minimum admissible control package complete;
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

For phased projects, the dashboard should also show phase-specific conditions.

Example:

```text
Design phase: submitted for review
Construction funding: reserved
Construction release: blocked until design accepted
```

### Rule

> A project does not become ready because it passed a rigid sequence. It becomes ready because all applicable closure conditions are complete.

## 3. Execution-ready transition

When all applicable closure conditions are complete, the system evaluates whether the project or the relevant project phase can become `Execution-ready`.

This check should confirm:

- the project version is stable;
- required prior phase gates are accepted where applicable;
- funding commitments are enough;
- no blocking complaint is active;
- fiscalization is configured;
- Project Evidential Contract and evidence obligations are configured;
- the minimum admissible control package is accepted where control is required;
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

- the project or phase may begin execution under the approved plan;
- funds remain controlled and are released by rule;
- milestones, evidence, fiscalization, and reporting obligations become active.

### Rule

> Execution-ready authorizes the start of controlled execution. It does not release the full budget automatically.

For phased projects, execution-ready is phase-sensitive. A parent project may collect construction funding while the design phase is pending, but the construction phase does not become execution-ready and construction funds cannot be released until the design phase gate is accepted.

Supplemental control funding after execution-ready does not reopen this transition by default. A project may remain execution-ready while additional control-only funding is reserved for one secondary fiscalizer, fiscalization audit, or distinct evidence work. Any blocking effect from supplemental control must enter through the ordinary complaint, extraordinary review, pause, blocking, or disbursement-control path.

## 4. Start of execution

When execution begins, status becomes:

```text
In execution
```

For phased projects, execution begins for the relevant accepted phase. Design work may be in execution while construction remains reserved and not ready. Construction begins only after prerequisite design deliverables and required control conditions are accepted.

The system activates:

- milestone calendar;
- evidence schedule;
- fiscalizer responsibilities;
- any accepted supplemental control responsibilities;
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

Where phases are used, each milestone should identify its phase.

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
- project phase where applicable;
- milestone;
- metric;
- evidential contract requirement;
- producer;
- timestamp;
- privacy classification;
- review status.

### Rule

> Evidence is not mere decoration. It must be connected to a milestone, metric, value promise, or complaint/review issue.

Executor-submitted material is self-reported support unless corroborated. Critical milestones, disbursements, and closures require evidence produced or corroborated by evidence producers, fiscalizers, verified beneficiaries, technical records, or other non-executor sources.

Evidence is evaluated against the accepted Project Evidential Contract. If the project changes that contract during execution, the change must preserve history and may require reformulation, notification, or renewed review where it weakens the original promise.

In an integrated design-and-execution project, design-phase evidence is evaluated before construction release. A design package for the Macul multi-court project should evidence dimensions, access rules, bathrooms or accessibility commitments where required, budget refinement, permit or compatibility requirements, and construction evidence requirements.

## 7. Fiscalizer review

The fiscalizer reviews the milestone against the accepted project design.

When a phase gate is being evaluated, the fiscalizer, reviewer, certifier, or competent authority reviews the phase deliverables against the phase baseline and threshold policy.

The review may consider:

- required evidence;
- evidential contract requirements;
- distinct supplemental evidence where accepted;
- metric targets;
- beneficiary confirmations;
- budget use;
- executor report;
- evidence producer submissions;
- comments;
- complaints;
- prior warnings;
- protocol rules.
- secondary fiscalization or fiscalization-audit findings where accepted.

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

For phased projects, funds are also released according to phase gates.

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

- phase, where applicable;
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

> Construction money is not released for an integrated design-and-execution project until the design phase has been accepted.

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

Supplemental control reports are observations within the control architecture. They may strengthen a complaint, request for extraordinary review, pause, or disbursement objection, but they do not automatically override the primary fiscalizer or block execution by themselves.

### Rule

> Problems should not disappear into informal conversation. If they affect execution, evidence, funding, or trust, they must produce a visible state or review path.

## 10. Reformulation

A project may require reformulation if the original design can no longer be executed as approved but the project may still preserve public value.

Before choosing the reformulation path, the project change should be classified under H021:

```text
Minor variation or correction:
  record or correct without creating a substantive new promise.

Operational variation / operational reformulation:
  preserve the value thesis and core metrics while changing implementation.

Material value reformulation:
  use a C017 Reformulation Proposal because the promised value, core metrics, beneficiary scope, or public utility changes.

Substitutive reformulation:
  treat as a new project or as failure/closure of the original project.
```

Examples:

- cost changed materially;
- location changed;
- beneficiary number changed;
- executor proposes a modified plan;
- required fiscalization changes;
- milestone plan is no longer realistic;
- risk or antivalue becomes material.

For an integrated Macul design-and-construction project, the design phase failing to include required bathrooms, producing wrong court dimensions, or reducing promised public access is not an ordinary implementation adjustment. It is a design failure or material value reformulation if it changes what funders and beneficiaries relied on.

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

Operational reformulation may preserve the value thesis. Material value reformulation cannot unilaterally rewrite what funders financed and beneficiaries expected; it requires visible cause analysis, preserved history, funding effects, C017 approval handling, and role-specific responsibility review.

Example:

```text
Changing the weekly schedule of a sports school while preserving 80 children and the same evidence obligations may be operational.

Reducing the target from 80 children to 60 children changes the value promise and must use the material value reformulation path.

Replacing the sports school with an unrelated community event is not the same project.
```

## 11. Pause

A project may be paused when execution or disbursement should temporarily stop.

Possible reasons:

- blocking complaint;
- missing evidence;
- failed or pending prerequisite phase gate;
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
- phase completion status where applicable;
- metrics achieved;
- metrics not achieved;
- beneficiaries confirmed;
- budget used;
- unused funds;
- evidence final status;
- evidential contract fulfillment status;
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
Design under review
Construction reserved
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
- release later-phase execution funds before prerequisite phase gates are accepted;
- allow executor self-validation;
- hide blocking complaints;
- hide failed milestones;
- erase previous versions during reformulation;
- treat a material value change as an ordinary operational variation;
- close without final evidence and money status;
- assign reputation effects without role context.

## Design rule

> The lifecycle must make progress conditional, evidence-based, and traceable from open project to final closure.

## Status

Accepted as Project Lifecycle After Publication Flow v0.
