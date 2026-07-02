# Project Disbursement Flow v0

## Purpose

This document freezes the first version of the project disbursement flow.

Disbursement is one of the most trust-sensitive parts of the system. It defines when committed public resources move from controlled custody into actual release for execution.

## Core principle

> Disbursement is not payment by trust. It is conditional release of retained resources, based on milestones, fulfillment evidence, fiscalization, and absence of relevant blocking issues.

For phased projects, disbursement is also phase-gated. Funds committed to a later execution phase may be collected in advance, but they cannot be released until prerequisite phase deliverables are accepted.

## Main question

```text
When, why, and under what controls can project funds be released?
```

## Flow overview

```text
1. Funds committed
2. Project becomes execution-ready
3. Execution begins
4. Phase gate is checked where applicable
5. Milestone is activated or submitted for review
6. Fulfillment evidence is submitted
7. Fiscalizer reviews
8. Blocking conditions are checked
9. Disbursement decision is made
9. System generates a financial order where money movement is required
10. Custodian executes payment, retention, return, reassignment, or recovery
11. Audit trail is updated
12. Citizens and project actors are notified
```

## 1. Funds committed

When citizens fund a project, money is not immediately released to the executor.

Initial state:

```text
Committed
```

Meaning:

```text
The contribution counts toward the project funding target, but it is not yet available to the executor.
```

This status should always be visible to the citizen.

## 2. Execution-ready project

A project can move toward disbursement only after it becomes execution-ready.

Required conditions may include:

- funding complete;
- prerequisite phase gate accepted where applicable;
- responsible executor accepted;
- fiscalizer confirmed;
- fiscalizer eligibility and reputation profile accepted for the assigned scope where responsible fiscalization is required;
- minimum admissible control package accepted where required;
- Project Evidential Contract configured;
- milestones defined;
- disbursement milestone plan validated with no unresolved critical failures;
- no admitted blocking complaints or scoped systemic pauses;
- required documents complete;
- Financial Assurance Profile configured;
- required guarantee, retention, insurance, escrow, or equivalent assurance materialized where applicable;
- operating mode requirements satisfied.

Execution-ready does not mean automatic release of the full budget.

For phased projects, execution-ready may apply to the relevant phase. Construction-phase disbursement requires construction readiness, not merely parent-project publication or funding.

### Rule

> Execution-ready authorizes controlled execution. It does not authorize uncontrolled payment.

No project may receive execution funding commitments until its disbursement milestone plan and any applicable phase-gate funding treatment are coherent enough for funding and later fiscalization.

The disbursement milestone plan should reference the accepted Project Evidential Contract. This avoids releasing funds against fulfillment evidence criteria invented after execution has already started.

If the executor proposes to change milestones, fulfillment evidence requirements, disbursement criteria, fiscalization conditions, or beneficiary targets during execution, the change must be classified under H021 before any affected funds are released. Operational variations follow the active Reformulation Policy; material value changes require the C017 Reformulation Proposal path.

If the project combines design and construction, construction funds may be committed while the design phase is pending only when the phase baseline, phase gate, release block, and fund-treatment rule are explicit. Those funds cannot be released while the design phase is pending, rejected, or materially reformulated.

Example:

```text
Project:
Design and Construction of Multi-court Facility in Macul.

Design phase:
Pending review.

Construction funding:
Reserved.

Disbursement:
Blocked until design accepted.
```

## 3. Start of execution

Once execution begins, the milestone calendar becomes active.

For phased projects, the milestone calendar activates for the relevant accepted phase. Design milestones may be active while construction milestones remain blocked by the design gate.

Each milestone should have:

- phase reference where applicable;
- maximum releasable amount;
- required fulfillment evidence;
- responsible fiscalizer;
- deadline;
- approval criteria;
- correction rule;
- rejection rule.

Example:

```text
Milestone 1:
Beneficiary registration

Maximum releasable amount:
20% of project budget

Required fulfillment evidence:
registration list, selection criteria, initial confirmations

Reviewer:
responsible fiscalizer
```

## 4. Phase gate check

Before a milestone in a later phase can activate for disbursement, the system checks whether required prior phase gates are accepted.

Possible phase gate results:

```text
Accepted
Requires correction
Rejected
Material reformulation required
Pending review
```

If the gate is not accepted, later-phase disbursement remains blocked.

Example:

```text
Construction milestone:
site preparation.

Prerequisite:
design package accepted.

Result:
blocked because design review requires correction.
```

## 5. Milestone activation or review request

There are two possible models:

```text
A. Executor requests review of a milestone.
B. System activates review when a date or condition is reached.
```

Example:

```text
Executor marks:
Milestone 1 ready for review.
```

This does not validate the milestone.

### Rule

> The executor can declare progress, but cannot approve its own milestone.

## 6. Fulfillment evidence submission

Fulfillment evidence must be submitted for the milestone.

Fulfillment evidence may come from:

- executor;
- beneficiaries;
- evidence producers;
- accepted supplemental evidence producers;
- fiscalizer;
- funders;
- open observers;
- system integrations where applicable.

Fulfillment evidence states:

```text
Expected
Submitted
Pending review
Accepted as evidence
Accepted only as contextual material
Insufficient for fulfillment effect
Needs corroboration
Observed
Rejected
Contradicted
Linked to fiscalizer report
```

Fulfillment evidence should be linked to:

- project;
- project phase where applicable;
- milestone;
- metric;
- evidential contract requirement;
- evidence producer;
- timestamp;
- traceability metadata where required;
- privacy classification;
- sufficiency status for the claimed formal effect;
- limitation statement where relevant;
- review status.

Executor-submitted material is self-reported support unless corroborated. Critical milestones, disbursements, and closures require fulfillment evidence produced or corroborated by evidence producers, fiscalizers, verified beneficiaries, technical records, or other non-executor sources.

If submitted fulfillment evidence does not satisfy the evidential contract, the fiscalizer may accept it only as contextual material, mark it insufficient for fulfillment effect, request correction or additional fulfillment evidence, approve partially where the disbursement plan allows it, or reject the milestone.

Example:

```text
Submitted evidence:
Dark photo with no reliable timestamp, location metadata, or link to the milestone.

Review status:
Accepted only as contextual material / insufficient for fulfillment effect.

Disbursement effect:
No full release until adequate evidence or corroboration is submitted.
```

## 7. Fiscalizer review

The fiscalizer reviews whether the milestone was fulfilled.

Where the disbursement depends on a phase gate, the fiscalizer, reviewer, certifier, or competent authority also verifies whether the phase deliverables satisfy the accepted baseline and threshold policy.

The review may consider:

- required fulfillment evidence;
- evidential contract references;
- distinct supplemental fulfillment evidence where accepted;
- metric targets;
- beneficiary confirmations;
- budget use;
- executor report;
- evidence producer submissions;
- comments;
- complaints;
- prior warnings;
- protocol rules;
- fiscalizer eligibility/profile warnings where they affect report weight or safeguards;
- secondary fiscalizer or fiscalization-audit findings where accepted.

Possible review results:

```text
Approved
Approved with observations
Correction required
Rejected
Extraordinary review required
```

## 8. Blocking condition check

Before any release, the system checks whether a blocking issue exists.

Possible blockers:

- blocking complaint open;
- prerequisite phase gate pending, rejected, or requiring correction;
- fulfillment evidence contradicted and unresolved;
- fiscalizer report missing;
- formal review triggered by supplemental control finding;
- milestone late without accepted justification;
- budget exceeded;
- required document missing;
- declared relationship issue unresolved;
- project paused;
- operating mode suspension;
- serious safety or legality issue.

If a blocker exists, the disbursement is not released.

Possible status:

```text
Paused
Blocked
Correction required
Under extraordinary review
```

### Rule

> Blocking status must be explicit, justified, and reviewable.

Supplemental control findings do not block disbursement automatically. They must be converted into a formal complaint, extraordinary review, pause, blocking condition, or disbursement objection under the applicable rule.

## 9. Disbursement decision

Possible decisions:

```text
Release full milestone amount
Release partial milestone amount
Retain pending fulfillment evidence
Retain by guarantee
Require correction
Reject milestone
Send to extraordinary review
Block because of complaint
```

The platform should not generate a full release order when the required fulfillment/control evidence is inconclusive, insufficient, contradicted, or accepted only as contextual material for the relevant milestone.

When a decision requires money movement, the system should generate a `Financial Order` for the custodian, treasury integration, escrow service, bank, or other country-specific financial execution mechanism.

The financial order should include:

- project;
- phase where applicable;
- milestone or closure reference;
- amount;
- action: release, retain, return, reassign, recover, or execute guarantee;
- rule applied;
- Financial Assurance Profile or Guarantee Materialization Record reference where relevant;
- fulfillment evidence and fiscalization references where relevant;
- blocking-condition status;
- destination or ledger account;
- protocol authorization or signature.

The custodian executes valid financial orders. It may reject or suspend an order only for closed technical or legal causes such as invalid signature, duplicated order, insufficient funds, invalid account, legal freeze, compliance block required by law, malformed order, or ledger mismatch. It should not reject an order because it disagrees with the project's civic value or priority.

The platform should not generate a release order for a later phase while a required prior phase gate is not accepted.

Example full release:

```text
Milestone 1 approved

Maximum releasable:
$2.400.000

Released:
$2.400.000

Reason:
complete fulfillment evidence, fiscalizer approval, no admitted blocking complaints or scoped systemic pauses.
```

Example partial release:

```text
Milestone 2 approved with observations

Maximum releasable:
$3.000.000

Released:
$2.100.000

Retained:
$900.000

Reason:
activities started, but attendance confirmation remains incomplete.
```

## 10. Partial release and retention

The system should not be only binary.

Possible mechanisms:

- full disbursement;
- partial disbursement;
- temporary retention;
- guarantee retention;
- fulfillment-evidence-based retention;
- complaint-based retention;
- correction-based retention.

### Rule

> The system should be able to recognize real progress without releasing resources over insufficient fulfillment evidence.

Partial release is allowed only when the disbursement milestone plan defines separable components, accepted fulfillment evidence for completed components, explicit retained amount, clear condition for releasing retained funds, fiscalizer explanation, and citizen-facing summary.

## 11. Financial assurance, guarantees, and retentions

H011 requires every execution-financeable project to have a Financial Assurance Profile. This is not limited to construction. Care delivery, school-supply purchases, workshops, food support, health support, infrastructure, and other social projects can all fail, abandon execution, misuse funds, or require recovery.

For Core v0, the required guarantee amount should be calculated from the active global guarantee percentage:

```text
required_guarantee_amount =
eligible_execution_budget_or_phase_budget * global_guarantee_percentage
```

The proposer, designer, or executor should not choose a lower guarantee percentage or self-classify the project into a lower assurance category.

The required guarantee, deposit, insurance, bond, escrow, retention, or equivalent instrument is materialized only when a lawful custodian, guarantor, insurer, treasury, bank, escrow provider, or equivalent mechanism confirms it. An uploaded document from the executor is not sufficient by itself.

Retentions may help:

- correct non-compliance;
- respond to observations;
- cover minor failures;
- prevent full payment before final fulfillment evidence;
- preserve leverage until closure.

### Rule

> The executor may satisfy assurance requirements, but cannot define the assurance requirement that applies to itself.

> A guarantee is materialized only after external custodian or guarantor confirmation.

Examples:

```text
Elderly care:
  monthly release, retained future service funds, and guarantee materialization protect continuity if the executor abandons care visits.

School supplies:
  direct supplier payment, invoice path, delivery evidence, and retained funds protect against incomplete kit delivery.

Workshop:
  release by verified sessions or attendance periods protects against inflated attendance.

Infrastructure:
  release remains blocked until phase gates, control, assurance, and milestone evidence are satisfied.
```

## 12. Failed milestone

If a milestone fails:

- milestone funds are not released;
- correction may be requested;
- a correction window may open;
- funders are notified;
- history is updated;
- role-based reputation may be affected.

If failure repeats or becomes serious, the project may enter:

```text
Paused
Requires reformulation
Extraordinary review
Revoked
```

Unused funds may be returned or reassigned according to protocol and citizen rules.

## 13. Complaint impact

Complaints can affect disbursement differently.

If complaint is non-blocking:

```text
Milestone may continue, but remains observed.
```

If complaint is blocking:

```text
Disbursement connected to the affected scope pauses only if the complaint has a valid blocking status under the applicable policy, protocol, contract, competent authority resolution, or court/regulator order where required.
```

Fiscalizer admissibility may create a scoped systemic pause for the affected disbursement, milestone, phase, budget line, evidence item, or actor relationship. That pause blocks release inside the platform while the review, correction, mitigation, referral, or final resolution proceeds.

A blocking complaint should identify what it blocks:

- whole project;
- project phase;
- specific milestone;
- specific budget line;
- specific contextualized evidence item;
- specific actor relationship;
- specific fiscalization decision.

### Rule

> Not every complaint blocks disbursement, but a blocking complaint must stop release of funds connected to the risk under review.

H024 boundary:

> A submitted complaint, support threshold, reserved review funding, or fiscalizer quote does not by itself block disbursement. After admissibility, the system may pause only the affected funding/disbursement scope. For legally regulated projects, platform review does not stop operations, revoke permits, halt construction, impose sanctions, or suspend legal rights. Those effects require a court order, regulator order, competent authority resolution, or enforceable obligation where applicable.

Reputation boundary:

> A disbursement pause caused by complaint admissibility is procedural context. Formal negative reputation effects require final resolution, founded responsibility, confirmed non-compliance, a role-specific Responsibility Event, or an external decision that establishes responsibility.

## 14. Remaining or unused funds

Funds may remain unused because of:

- lower actual cost;
- cancelled milestone;
- cheaper supplier;
- partial fulfillment;
- unused retention;
- project revocation;
- project expiration.

Possible treatment:

- return proportionally to citizen balances;
- reassign according to each citizen's automatic profile;
- keep for an approved extension of the same project;
- transfer to similar projects only if the protocol explicitly permits it.

### Rule

> Remaining funds do not automatically belong to the executor.

## 15. Revoked project

If a project is revoked before release:

```text
Committed or reserved funds return or are reassigned according to citizen and protocol rules.
```

If revoked after partial release:

- remaining funds are blocked;
- released funds are reviewed;
- retentions or guarantees may be activated;
- recovery or sanctions may apply where rules allow;
- reputation effects are recorded.

### Rule

> Revocation must distinguish unreleased funds, justified released funds, and funds released under non-compliance.

## 16. Citizen view

The citizen should see a simple status.

Example normal case:

```text
Your contribution:
$10.000

Status:
Committed

Project:
In execution

Latest milestone:
Milestone 1 approved

Project funds released:
20%

Fulfillment evidence:
Reviewed by fiscalizer

Alerts:
0 admitted blocking complaints or scoped systemic pauses
```

Example problem case:

```text
Disbursement paused

Reason:
An admitted complaint created a scoped systemic pause for Milestone 2.

What happens next:
Executor must respond and the fiscalizer must review additional evidence.
```

Example phase-gate case:

```text
Construction funds reserved

Reason:
Design review is not accepted yet.

What happens next:
The designer/executor must correct the design package or request reformulation.
No construction money is released while this gate remains unresolved.
```

Example supplemental control case:

```text
Disbursement observed

Reason:
A secondary fiscalization report contradicts part of the primary fiscalizer's conclusion.

What happens next:
The issue must enter formal review before it can block release.
```

## 17. Executor view

The executor should see an operational disbursement panel.

Example:

```text
Current milestone:
Start of training

Maximum releasable amount:
$3.000.000

Pending fulfillment evidence:
- initial attendance
- activity photos
- beneficiary confirmation

Status:
Correction required

Action:
Submit missing fulfillment evidence
```

## 18. Fiscalizer view

The fiscalizer should see:

- milestone pending review;
- fulfillment evidence received;
- committed metrics;
- relevant comments;
- associated complaints;
- amount requested;
- approval criteria;
- protocol rule.
- fiscalizer eligibility/profile status;
- report sufficiency requirements.

Possible decision actions:

```text
Approve
Approve with observations
Request correction
Reject
Request extraordinary review
```

## 19. Audit trail

Every disbursement event must be recorded in Layer 5.

Required trace:

- project;
- phase where applicable;
- milestone;
- requested amount;
- approved amount;
- released amount;
- retained amount;
- financial order ID where applicable;
- custodian execution status where applicable;
- fulfillment evidence considered;
- fiscalizer decision;
- fiscalizer eligibility/profile reference where material;
- fiscalization report sufficiency status;
- supplemental control reports considered where applicable;
- blockers checked;
- complaints considered;
- rule applied;
- decision timestamp;
- actor or system component responsible;
- citizen notification record;
- later corrections or reversals.

### Rule

> No disbursement should exist without an auditable explanation.

## Money states

Recommended money states:

```text
Committed
Reserved
Retained
Pending review
Approved for release
Released partially
Released totally
Paused
Blocked
Returned
Reassigned
In recovery
```

Assurance states:

```text
Assurance pending
Guarantee materialized
Guarantee insufficient
Guarantee expired
Guarantee executed
Guarantee released
```

Citizen-facing labels may be simplified, but the technical states should remain traceable.

## What this flow should not do

The disbursement flow should not:

- release money immediately after funding;
- release full budget by default;
- rely on executor self-validation;
- hide blocking complaints;
- ignore contradicted fulfillment evidence;
- treat supplemental control findings as automatic vetoes;
- hide retained amounts;
- treat remaining funds as executor property;
- make release decisions without audit trace;
- confuse citizen-facing simplicity with lack of control.

## Design rule

> Public money assigned to a project remains conditional until fulfillment is verifiable. Each release requires milestone, fulfillment evidence, review, rule, and traceability.

## Status

Accepted as Project Disbursement Flow v0.
