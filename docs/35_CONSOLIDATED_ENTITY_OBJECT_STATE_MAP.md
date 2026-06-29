# Consolidated Entity, Object, and State Map v0

## Purpose

This document defines the consolidated map of entities, objects, roles, relationships, and states for the Distributed Governance System v0.

It is a bridge between the conceptual architecture and the next step: lifecycle diagrams, flow diagrams, responsibility matrices, and implementable specifications.

## Status

Accepted as Consolidated Entity, Object, and State Map v0.

## Map principle

> The system should be understandable as a set of actors playing roles over project objects that move through explicit states by traceable events.

## Top-level structure

```text
Actors
→ hold Roles
→ interact with Objects
→ trigger Events
→ change States
→ produce Audit Records
```

## 1. Actor entities

Core actor types are intentionally simple.

### Citizen

A verified individual participant.

A citizen may act as:

- proposer;
- funder;
- follower;
- commenter;
- complainant;
- evidence producer;
- fiscalizer if eligible;
- beneficiary;
- affected party;
- delegator;
- delegate;
- evaluator.

### Organization

A verified collective or legal/civic entity.

Organization type is an attribute.

Possible organization types:

- company;
- nonprofit;
- university;
- club;
- association;
- cooperative;
- union;
- NGO;
- local group;
- other recognized organization.

Core v0 organizations are internal non-state actors. Public institutions are external legal, budgetary, auditing, regulatory, or infrastructure actors unless a country implementation explicitly departs from the Core v0 baseline.

An organization may act as:

- proposer;
- modeler;
- executor;
- fiscalizer;
- evidence producer;
- delegate;
- funder where rules allow;
- technical assistant.

### Public Institution / External Authority

A public institution is external to the internal actor set in Core v0.

It may act as:

- legal framework setter;
- budget allocator or remover;
- external auditor;
- law enforcer;
- public authority issuing governance resolutions in tutored mode;
- external tutored-scope reviewer for eligibility, duplication, scope, or compatibility where configured;
- infrastructure provider for identity, treasury, custody, permits, or registries.

It should not act as:

- internal project proposer;
- internal executor;
- internal fiscalizer;
- internal evidence producer;
- ordinary delegate;
- internal moderator of competing projects;
- recipient of distributed project financing.

## 2. Role entities

Roles are contextual. The same actor may hold different roles in different projects.

### Project roles

```text
Proposer
Modeler / Designer
Executor
Fiscalizer
Evidence Producer
Funder
Follower
Commenter
Complainant
Beneficiary
Affected Party
Evaluator
Moderator
Technical Assistant
```

### Allocation and delegation roles

```text
Delegator
Delegate
Automatic Profile Owner
```

### Role rules

- role assignment must be traceable;
- role acceptance is required for responsibility-heavy roles;
- roles may have scope;
- roles may have conflicts;
- roles may affect reputation;
- roles may be revoked, resigned, expired, or replaced depending on rules.

## 3. Primary objects

## Idea

A public expression of civic demand or project possibility.

An idea is not financeable for execution.

Key attributes:

- id;
- title;
- summary;
- problem or demand;
- territory;
- value interests;
- supporters;
- followers;
- comments;
- structured objections;
- associated projects;
- current status;
- audit trail.

Key relationships:

```text
Idea may generate many Projects
Idea has many SupportSignals
Idea has many Comments
Idea has many Followers
Idea has many StructuredObjections
Idea has many AuditEvents
```

## Project

The main financeable and executable unit.

Key attributes:

- id;
- title;
- summary;
- problem;
- solution;
- territory;
- proposer;
- modeler;
- executor;
- value theses;
- beneficiaries;
- budget;
- milestones;
- disbursement milestone plan;
- evidence obligations;
- fiscalization requirements;
- common-good impact declarations where relevant;
- funding target;
- closure conditions;
- risks;
- antivalues;
- current state;
- current version;
- audit trail.

Key relationships:

```text
Project has many ProjectVersions
Project has many ValueTheses
Project has many BeneficiaryGroups
Project has one or more Budgets
Project has many Milestones
Project has DisbursementMilestonePlan
Project has many EvidenceItems
Project has FiscalizationRequirement
Project has many FiscalizerOffers
Project has many FundingCommitments
Project has many Complaints
Project has many Comments
Project has many AuditEvents
Project has one current State
```

## Project Version

A versioned snapshot of a project.

Attributes:

- version number;
- project id;
- changed fields;
- change reason;
- actor responsible;
- timestamp;
- validation status;
- citizen-visible summary;
- previous version;
- next version.

Used for:

- reformulation;
- budget changes;
- beneficiary changes;
- value thesis changes;
- evidence requirement changes;
- fiscalization changes;
- auditability.

## Value Thesis

A project's declared promise of public value.

Attributes:

- value icon;
- value name;
- statement;
- beneficiary link;
- metrics;
- evidence requirements;
- status;
- validation result.

Relationships:

```text
ValueThesis belongs to ProjectVersion
ValueThesis uses ValueIcon
ValueThesis has many Metrics
ValueThesis requires EvidenceItems
```

## Value Icon

A catalog or generated representation of a value type.

Attributes:

- code;
- icon;
- name;
- definition;
- mandatory metrics;
- optional metrics;
- evidence requirements;
- origin: catalog, AI-generated, project-specific, standardized later;
- related values.

## Metric

A measurable commitment linked to value.

Attributes:

- metric name;
- unit;
- target;
- timeframe;
- beneficiary group;
- evidence requirement;
- validation status;
- fulfillment status.

## Beneficiary Group

Defines who receives project value.

Types:

```text
Direct
Indirect
Estimated
Confirmed
Affected party
```

Attributes:

- description;
- count;
- criteria;
- territory;
- confirmation method;
- privacy classification;
- status.

## Budget

The structured financial plan of a project.

Attributes:

- total amount;
- budget lines;
- control cost;
- fiscalization cost;
- evidence cost;
- contingency;
- guarantees;
- retentions;
- current version.

## Budget Line

Attributes:

- category;
- amount;
- justification;
- linked milestone;
- executor controlled or control controlled;
- status.

## Civic Wallet / Civic Allocation

Represents the citizen's available public allocation right.

Attributes:

- owner;
- period;
- available amount;
- committed amount;
- delegated amount;
- automatic profile amount;
- history.

Rule:

> Civic allocation is a public allocation right, not private withdrawable cash.

## Funding Commitment

A citizen's conditional allocation to a project.

Attributes:

- citizen;
- project;
- amount;
- source: direct, delegated, automatic profile;
- funding target: execution, minimum control, supplemental control where applicable;
- status;
- timestamp;
- commitment and failure-handling rule;
- related project version.

States:

```text
Committed
Reserved
Locked
Returned
Reassigned
Released partially
Released totally
```

Rule:

> Funding is a commitment until project closure, not a freely reversible preference. Return, reassignment, recovery, guarantee, or retention handling occurs through project failure, closure, complaint, or reformulation rules.

## Supplemental Control Contribution

A designated contribution for control after the minimum admissible control package is accepted.

Attributes:

- citizen or funding actor;
- project;
- amount;
- target: secondary fiscalizer / fiscalization auditor, distinct evidence mission, extraordinary review reserve where permitted;
- admissibility status;
- reservation status;
- linked control offer or evidence mission where assigned;
- rejection reason if no admissible supplemental need remains;
- timestamp.

States:

```text
Offered
Reserved for secondary fiscalization
Assigned to distinct evidence mission
Assigned to secondary fiscalizer
Rejected as saturated
Returned
Reassigned
Closed
```

Rule:

> Supplemental control contributions never fund execution. They may fund at most one secondary fiscalizer or fiscalization auditor and distinct additional evidence needs under protocol limits.

## Milestone

A verifiable execution step.

Attributes:

- project;
- name;
- description;
- expected date;
- responsible actor;
- evidence required;
- metric links;
- maximum disbursement amount;
- review rule;
- status.

States:

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

## Disbursement Milestone Plan

A structured plan defining how project funds may be released.

Attributes:

- project;
- milestone list;
- release amounts;
- maximum release per milestone;
- partial-release rules;
- retention rules;
- evidence required;
- protected advance-payment rules where applicable;
- validation status;
- critical failures;
- citizen-facing summary.

Rule:

> A project cannot receive execution funding while its disbursement milestone plan has unresolved critical validation failures.

## Evidence Item

A piece of material used to verify, contradict, or evaluate a project.

Attributes:

- project;
- milestone;
- metric;
- producer;
- producer role;
- type;
- description;
- file or reference;
- timestamp;
- location metadata where allowed;
- privacy classification;
- review status;
- contradiction status.

Rule:

> Executor-submitted material is self-reported support unless corroborated. Critical milestones, disbursements, and closures require evidence produced or corroborated by evidence producers, fiscalizers, verified beneficiaries, technical records, or other non-executor sources.

States:

```text
Expected
Submitted
Pending review
Accepted as evidence
Observed
Rejected
Contradicted
Linked to report
```

## Fiscalization Requirement

Defines required control for a project.

Attributes:

- project;
- required fiscalizer count;
- required evidence producer count;
- supplemental evidence need count or scope where applicable;
- secondary fiscalizer slot: none, open, filled, closed;
- report count;
- control budget;
- expertise needed;
- risk basis;
- status.

## Control Subproject

A project-like control object associated with a parent project.

It may define fiscalization, evidence-production, audit, or control work.

Attributes:

- parent project;
- control type: primary fiscalization, secondary fiscalization, fiscalization audit, evidence mission, technical review, extraordinary review;
- methodology;
- deliverables;
- control budget;
- evidence requirements;
- eligibility rule;
- conflict checks;
- selection rule;
- assigned actor or actors;
- status;
- audit trail.

Rule:

> Control subprojects fit the project architecture, but their selection follows independence rules stronger than ordinary project selection.

Supplemental rule:

> The ordinary supplemental control cap is one secondary fiscalization or fiscalization-audit role plus non-duplicative evidence work. Additional control must not become unlimited fiscalizer or evidence-producer overfunding.

## Fiscalizer Offer

An actor's offer to fiscalize.

Attributes:

- actor;
- project;
- role requested;
- scope;
- methodology summary;
- budget requested;
- availability;
- relationships declared;
- qualifications;
- status.

States:

```text
Draft
Submitted
Under review
Accepted
Rejected
Withdrawn
Replaced
```

## Fiscalization Assignment

The accepted fiscalization role.

Attributes:

- project;
- fiscalizer;
- assignment type: primary fiscalizer, secondary fiscalizer, fiscalization auditor;
- scope;
- reports required;
- relationship declarations;
- start date;
- status.

States:

```text
Active
Late
Suspended
Completed
Resigned
Removed
```

## Fiscalization Report

A fiscalizer's review output.

Attributes:

- project;
- milestone;
- fiscalizer;
- evidence considered;
- metric evaluation;
- conclusion;
- observations;
- disbursement recommendation;
- timestamp;
- status.

Outcomes:

```text
Approved
Approved with observations
Correction required
Rejected
Extraordinary review required
```

## Disbursement

A controlled release of funds.

Attributes:

- project;
- milestone;
- requested amount;
- approved amount;
- released amount;
- retained amount;
- evidence considered;
- fiscalizer report;
- blocking check;
- rule applied;
- status;
- timestamp.

States:

```text
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

## Complaint

A formal review trigger.

Attributes:

- project;
- complainant;
- category;
- description;
- affected area;
- evidence attached;
- status;
- blocking status;
- resolution;
- timestamp.

States:

```text
Submitted
Pending initial review
Needs more information
Sent to executor response
Sent to fiscalizer review
Open
Blocking
Resolved
Rejected
Withdrawn
Reopened
Appealed
```

## Comment

A non-formal discussion or observation item.

Attributes:

- project;
- actor;
- type: question, observation, suggestion, response, clarification;
- related area;
- text;
- visible identity mode;
- protected identity request reference where applicable;
- legal/safety/privacy gate status;
- status;
- timestamp.

States:

```text
Published
Pending response
Responded
Marked relevant
Converted to complaint
Hidden by moderation
Resolved
```

Rules:

- comments are linked to verified actors;
- visible identity is the default;
- protected identity is a justified per-comment exception, not an anonymous layer;
- serious claims may be converted to complaints;
- all comments remain subject to narrow legal, safety, privacy, and platform-integrity gates.

## Delegation

A scoped authorization from one actor to another.

Attributes:

- delegator;
- delegate;
- scope;
- status;
- request date;
- acceptance date;
- revocation date;
- reporting preference;
- base allocation profile or fallback rule at activation, for budget delegation;
- concentration signal at activation;
- concentration signal during reporting.

States:

```text
Requested
Accepted
Active
Rejected
Revoked
Resigned
```

Rule:

> Delegation concentration is allowed when citizens choose it, but it must be visible before delegation, during delegated action, in delegate reports, and in administrative observability.

Budget delegation rule:

> Budget delegation should not become active unless the citizen has a selected base allocation profile or fallback rule. If delegation ends, that previously selected rule resumes for future allocation.

## Automatic Allocation Profile

Citizen-configured allocation rule.

Attributes:

- owner;
- base profile selection status;
- value preferences;
- territory preferences;
- project-state preferences;
- control preferences;
- fallback rule;
- delegation-end fallback behavior;
- active delegation interaction;
- status;
- history.

States:

```text
Draft
Active
Paused
Edited
Disabled
```

Rule:

> Automatic allocation rules do not execute where active delegation governs the same balance or scope.

Continuity rule:

> On first active use, the citizen should select or acknowledge a base allocation profile. The public system default may be selected as that profile. The selected base profile resumes when budget delegation is revoked, rejected, expired, or resigned.

## Reputation Record

Role-specific reputation event.

Attributes:

- actor;
- role;
- project or object;
- event type;
- outcome;
- evidence;
- timestamp;
- weight or severity;
- appeal/review status.

## Operating Mode

Defines how open or moderated a public function is.

Modes:

```text
Closed
Tutored
Semi-open
Open
Suspended
```

Attributes:

- public function;
- mode;
- effective date;
- reason;
- approving authority or process;
- affected project rules;
- governance resolutions;
- review timeout policy;
- timeout resolutions;
- history.

## Governance Resolution

A public civic object recording a material tutored-mode decision.

Attributes:

- authority;
- affected project or rule;
- decision;
- reason;
- evidence or criteria considered;
- review window;
- comments/support/objections;
- status;
- timestamp;
- audit trail.

## Review Timeout Resolution

A public civic object created when a tutored review window expires without authority decision.

Attributes:

- affected project or request;
- responsible authority;
- configured timeout policy;
- expiration date;
- automatic effect;
- public comments/support/objections;
- status;
- audit trail.

## Audit Event

Immutable record of relevant system activity.

Attributes:

- object type;
- object id;
- actor;
- event type;
- previous state;
- new state;
- data changed;
- rule applied;
- protocol version;
- material AI assistance reference where applicable;
- discovery visibility reason where applicable;
- timestamp;
- visibility;
- privacy classification.

## 4. Project state map

Primary project states:

```text
Draft
In validation
Requires adjustment
Ready to publish
Open project
Execution-ready
In execution
Correction required
Paused
Requires reformulation
Under extraordinary review
Revoked
Closed
Expired
```

## Project state transitions

```text
Draft → In validation
In validation → Requires adjustment
Requires adjustment → In validation
In validation → Ready to publish
Ready to publish → Open project
Open project → Execution-ready
Execution-ready → In execution
In execution → Correction required
Correction required → In execution
In execution → Paused
Paused → In execution
Open project → Requires reformulation
In execution → Requires reformulation
Requires reformulation → In validation
In execution → Under extraordinary review
Under extraordinary review → In execution
Under extraordinary review → Revoked
In execution → Closed
Open project → Expired
Open project → Revoked
Paused → Revoked
Requires reformulation → Closed
```

## 5. Responsibility matrix summary

```text
Project design:
  proposer, modeler, executor if accepted

Execution:
  executor

Value metrics:
  project modeler proposes, validator checks, executor accepts where executing

Evidence production:
  executor, evidence producers, beneficiaries, observers

Fiscalization:
  fiscalizer

Funding:
  funders, delegates, automatic profiles

Disbursement:
  protocol rules, fiscalizer review, custody integration

Complaints:
  complainant triggers, executor/fiscalizer/responders answer, review process resolves

Audit trail:
  system records, actors cannot erase history
```

## 6. Key relationship rules

- Project is the central object.
- Project version preserves history.
- Value thesis connects project to metrics and evidence.
- Metrics must connect to evidence.
- Evidence must connect to milestone, metric, or complaint/review issue.
- Fiscalization report connects evidence to review outcome.
- Disbursement connects milestone, evidence, fiscalization, and money state.
- Complaint can affect project state, milestone state, evidence state, or disbursement state.
- Delegation affects funding action authority, not citizen identity.
- Automatic profile affects allocation rule, not delegation.
- Reputation connects actor, role, and outcome.
- Audit event records all significant transitions.

## 7. Next use

This map should be used to create:

- entity relationship diagram;
- project lifecycle state diagram;
- funding/disbursement state diagram;
- evidence/fiscalization diagram;
- complaint resolution diagram;
- delegation diagram;
- role responsibility matrix;
- implementable object schema draft.

## Design rule

> Every important system decision should be expressible as: actor in role performs event on object, causing a state change recorded as audit event.
