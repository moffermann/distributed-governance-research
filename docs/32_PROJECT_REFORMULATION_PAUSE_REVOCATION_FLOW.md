# Project Reformulation, Pause, and Revocation Flow v0

## Purpose

This document freezes the first version of the flow for handling projects that cannot continue normally.

Not every problem should revoke a project. The system needs proportional responses: correction, reformulation, pause, extraordinary review, or revocation.

## Core principle

> A project may be corrected, reformulated, paused, or revoked, but every critical change must preserve history, explain effects on funds, notify affected actors, and remain fully traceable.

Reformulation may change implementation, but it must not unilaterally rewrite the value promise that funders and beneficiaries relied on.

Reformulation limits and timing should be policy-configurable. Core v0 requires the active reformulation policy to be visible, traceable, and enforceable; it does not impose one universal maximum number of reformulations or one universal minimum period between reformulations.

## Relationship with project variation control

H021 defines the classification test used before choosing the response level.

Project changes should be classified as:

```text
Minor variation or correction:
  fixes or clarifies without changing the project promise.

Operational variation / operational reformulation:
  changes implementation while preserving the value thesis and core metrics.

Material value reformulation:
  reduces, alters, or replaces the value thesis, core metrics, beneficiary scope, promised result, or public utility.

Substitutive reformulation:
  turns the proposal into a substantially different project.
```

The classification determines the path:

```text
Minor variation -> correction or audit-only record
Operational variation -> active Reformulation Policy
Material value reformulation -> C017 Reformulation Proposal
Substitutive reformulation -> new project or original-project failure/closure
```

Example:

```text
A Macul multi-court project may move an accessible bathroom within the same facility if equivalent access and metrics are preserved. That is operational.

Removing the bathroom commitment or reducing public access hours changes the value promise. That requires a material value reformulation path.

Replacing the multi-court with temporary sports workshops is a different project.
```

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
- fulfillment evidence needs require better context.

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

Reformulation applies when the project changes in a relevant way but may still preserve public value. H021 supplies the variation classification, while C017 controls the value-thesis boundary.

Examples:

- beneficiary count changes materially;
- execution location changes;
- budget changes materially;
- executor changes;
- core milestones change;
- fulfillment evidence obligations change;
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
- active reformulation policy is shown and applied;
- rules and AI validation run again;
- citizen-facing views update;
- relevant actors are notified;
- executor may need to accept again;
- fiscalization may need to update;
- funders may receive response or funding-treatment options only when the configured policy and C005/C017 rules allow it.

Example:

```text
Reformulation proposed

Change:
direct beneficiaries decrease from 80 to 60 children.

Reason:
available venue has lower capacity.

Impact:
lower promised reach, higher cost per beneficiary, updated metrics required.

Funding treatment:
eligible unreleased balances follow the configured reformulation policy and C005/C017 rules.
```

### Rule

> Reformulation is not silent editing. It is a visible new project version.

### Variation classification before reformulation

Before approving a reformulation path, the system or reviewer should compare:

- original and proposed value thesis;
- original and proposed core metrics;
- beneficiary scope;
- budget, milestones, disbursement, evidential contract, fiscalization, risk, antivalue, and related-party safeguards;
- active Reformulation Policy limits, timing, approval authority, and deadline effects.

If the value thesis and core metrics remain intact, the change may be operational.

If they are reduced, altered, or replaced, the change must become a C017 Reformulation Proposal.

If the project is no longer substantially the same project, it should become a new project or trigger failure, closure, or revocation of the original under the original terms.

### Reformulation policy

The active policy may define:

- maximum reformulations;
- minimum period between reformulations;
- whether reformulation extends the funding deadline;
- who may approve operational reformulation;
- who may approve material value reformulation;
- what happens if limits are exhausted;
- what happens if a reformulation expires without decision.

In tutored mode, the administrator or tutored authority may configure concrete values, such as `maximum reformulations: 2` and `minimum period between reformulations: 30 days`. In a non-tutored or open mode, the competent authority, community mechanism, or active protocol defines the strategy. The application records and enforces the configured policy; it does not impose a universal value.

## 3. Pause

Pause applies when execution, disbursement, or a milestone must temporarily stop until a critical condition is resolved.

Core v0 distinguishes:

```text
Systemic pause
Material or legal suspension
Final resolution
```

A systemic pause is an internal platform/protocol effect. It can stop execution funding, disbursement, milestone advancement, phase gate acceptance, closure, or use of disputed evidence for the affected scope.

A material or legal suspension is an external-world effect, such as a physical construction halt, permit suspension, operational prohibition, sanction, or legal-right suspension. For regulated projects, it requires a court order, regulator order, competent authority resolution, enforceable legal rule, or enforceable accepted obligation.

Types of pause:

```text
Execution pause
Disbursement pause
Specific milestone pause
Specific phase pause
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
- affected scope;
- whether it is a systemic pause or an externally ordered material/legal suspension;
- what must happen next;
- what happens to funds;
- what happens to deadlines;
- which actors must respond.

Example:

```text
Project paused

Reason:
admitted complaint about declared beneficiaries.

Effect:
no execution funds or milestone funds for the affected scope will be released until the complaint is resolved, corrected, narrowed, or referred according to the applicable rule.

Next:
executor must respond and fiscalizer must review additional evidence.
```

Complaint review, control, mitigation, correction, or referral-preparation funding may continue where the applicable policy allows. The purpose is to stop contested advancement without preventing the system from paying for verification or correction.

### Rule

> Pause is temporary control, not silent cancellation and not automatic physical enforcement.

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

- system authorization ends or is converted into the applicable closure/recovery path;
- unreleased funds are blocked;
- already released funds are reviewed;
- retentions, guarantees, or other Financial Assurance Profile mechanisms may activate;
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

Where the project is legally regulated, material execution stop, permit revocation, legal sanction, or operational suspension must come from the competent authority, court, regulator, or enforceable accepted obligation. The platform revokes system authorization and funding effects; it does not pretend to be the external legal authority.

### Rule

> Revocation requires a traceable decision connected to evidence, review, complaint, competent-authority decision, or protocol rule.

## Treatment of funds

### Minor correction

- funds for the affected milestone are retained;
- unaffected funds may continue if protocol allows;
- release resumes after correction is accepted.

### Reformulation

- funds remain committed or paused;
- funders may need to accept the new version only where the configured policy and C005/C017 rules require it;
- funds are not released until updated conditions are validated;
- eligible unreleased, unused, retained, guaranteed, or recovered funds follow the configured reformulation policy and citizen rules;
- released funds cannot be freely withdrawn and remain subject to evidence, fiscalization, guarantee, recovery, sanction, and reputation rules.

### Pause

- unreleased funds remain retained;
- released funds may be reviewed if related to the issue;
- deadlines may pause or continue depending on protocol.
- new execution funding or disbursement may stop only for the affected scope;
- complaint review, control, correction, mitigation, or referral funding may continue where allowed.

### Revocation

- unreleased funds are returned or reassigned;
- retained or guaranteed funds may be used according to protocol, Financial Assurance Profile, recovery, or return rules;
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
The active reformulation policy defines what happens to eligible unreleased funds.
Released funds cannot be freely withdrawn.
```

### Pause

```text
This project is temporarily paused.
No execution funds will be released for the affected scope until the stated issue is resolved.
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
admitted complaint created a scoped systemic pause

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
- affected scope;
- systemic pause, material/legal suspension, or final resolution classification;
- contextualized evidence considered;
- related complaints;
- funds affected;
- project version;
- H021 variation classification where a project change is involved;
- original and proposed value thesis and core-metric comparison where applicable;
- active Reformulation Policy or policy reference where applicable;
- executor responses;
- fiscalizer decision;
- authority or court order where material/legal effect occurs;
- rule for lifting, narrowing, maintaining, or escalating the pause;
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
- avoidable executor failure, misleading design, insufficient planning, or non-compliance should generate candidate role-specific reputation events even if a reformulated version is accepted.

The flow must also prevent weak complaints from destroying projects.

Rules:

- not every complaint pauses;
- not every observation blocks;
- pause requires explicit reason and affected scope;
- systemic pause should not be confused with material/legal suspension;
- revocation requires review, evidence, competent-authority decision, or applicable protocol rule;
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

Closure category is procedural context. Reputation should be updated primarily from verified fulfillment of the value thesis, metric breakdown, founded complaints, evidence corrections, and role-specific responsibility events.

Complaint filing, support, quote, funding, admissibility, referral, and pending systemic pause are procedural signals. They may be visible in project history, but formal negative reputation requires final resolution, founded responsibility, confirmed non-compliance, a role-specific Responsibility Event, or an external decision that establishes responsibility.

## What this flow should not do

This flow should not:

- erase old project versions;
- let changes happen silently;
- release funds during unresolved blockers;
- treat all issues as revocation;
- let weak complaints automatically destroy projects;
- hide fund treatment;
- hide reputation consequences;
- treat admissibility or referral as final responsibility;
- treat systemic pause as physical or legal suspension where no external authority or enforceable obligation exists;
- confuse pause with closure.

## Design rule

> Project failure handling must be proportional, visible, reversible where possible, final where necessary, and always auditable.

## Status

Accepted as Project Reformulation, Pause, and Revocation Flow v0.
