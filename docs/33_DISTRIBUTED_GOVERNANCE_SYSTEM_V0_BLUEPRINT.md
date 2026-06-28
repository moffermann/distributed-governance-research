# Distributed Governance System v0 Blueprint

## Purpose

This document consolidates a first integrated version of the distributed governance system.

It does not replace the detailed design documents. It provides a coherent v0 blueprint that lets the project move faster: a single operational view of actors, objects, citizen interfaces, project flows, funding, fiscalization, evidence, lifecycle, and boundaries.

## Core thesis

> Public resources can be allocated and controlled through distributed citizen participation, structured projects, verifiable value commitments, transparent evidence, accountable fiscalization, and auditable lifecycle rules.

The system does not begin by abolishing every institution. It begins by creating a functional layer where public/social value can be proposed, funded, executed, verified, contested, and improved with less concentration of discretionary power.

## v0 design goal

The v0 goal is not to solve the entire state. It is to create a working architecture for one or more bounded public functions or pilots.

A strong first pilot should have:

- projectizable activities;
- visible outcomes;
- manageable risk;
- distributed local actors;
- clear evidence possibilities;
- moderate legal complexity;
- strong citizen understanding.

Sports, especially local sports projects, remains a strong transition pilot candidate.

## What v0 must prove

v0 should prove that the system can:

1. let citizens discover projects without complexity overload;
2. let actors create projects as measurable public promises;
3. let citizens fund projects conditionally;
4. prevent immediate uncontrolled transfer of money;
5. require execution responsibility;
6. require value metrics and evidence;
7. require fiscalization proportional to risk;
8. handle comments, complaints, evidence, and corrections;
9. release funds by milestone, evidence, and review;
10. preserve full auditability;
11. update role-based reputation;
12. support transition without pretending the entire system is mature from day one.

## Core actors

The v0 actor model remains simple.

```text
Citizen
Organization
```

An organization may be:

- company;
- nonprofit;
- public institution;
- university;
- club;
- association;
- cooperative;
- union;
- NGO;
- local community group;
- other legal or civic organization.

Organization type is an attribute, not a separate actor class.

## Core roles

Actors can hold roles in specific projects.

Important roles:

- proposer;
- modeler or designer;
- executor;
- fiscalizer;
- evidence producer;
- funder;
- voter where voting applies;
- delegator;
- delegate;
- moderator;
- complainant;
- evaluator;
- commenter;
- beneficiary;
- affected party;
- technical assistant.

Roles are accumulable unless conflict rules prevent it.

Examples:

- executor should not fiscalize its own project;
- fiscalizer should not validate where it has direct interest;
- delegate acts only inside accepted scope;
- moderator should not approve own or related project;
- executor responsibility starts when executor accepts the project design.

## Core object: project

A project is the basic financeable and executable unit.

A project must contain:

- problem;
- solution;
- territory;
- promised value;
- value icons;
- beneficiaries;
- responsible executor;
- budget;
- milestones;
- metrics;
- evidence obligations;
- fiscalization requirements;
- risks;
- antivalues;
- funding target;
- closure conditions;
- lifecycle state;
- audit trail.

Key rule:

> A project is funded. A common-good charter is approved.

A project may exist as a draft without executor, but it cannot be published for execution financing without an identified and accepted responsible executor.

## Value thesis and value icons

Every public project must declare what value it promises.

Value icons are the citizen-visible representation of the value thesis.

Examples:

```text
👧 Childhood
⚽ Sports
❤️ Health
📚 Education
🌳 Nature
🧓 Older adults
👥 Community
```

A value icon is not decoration.

Rule:

> No value icon without metrics. No metrics without evidence.

The system should first search the value catalog before generating new values. AI may propose a new value only when there is no adequate existing catalog value.

## Metrics and evidence

For each promised value, the project must define measurable commitments.

Example for a sports training project:

- number of participants;
- age range;
- sessions per week;
- duration;
- attendance target;
- activity evidence;
- beneficiary confirmation;
- fiscalizer review.

The metric validator should reject input-only metrics when they do not measure value.

Example:

```text
Buying 100 balls
```

is not enough to measure sports value. The project must measure actual participation, sessions, use, attendance, or equivalent value-relevant output.

## Evidence model

Evidence can come from:

- executor;
- fiscalizer;
- evidence producer;
- beneficiary;
- funder;
- open observer;
- documents;
- system integrations where applicable.

Evidence must be linked to:

- project;
- milestone;
- metric;
- value promise;
- producer;
- timestamp;
- review status;
- privacy classification.

Evidence states:

```text
Expected
Submitted
Pending review
Accepted as evidence
Observed
Rejected
Contradicted
Used in fiscalization report
```

## Fiscalization model

Fiscalization is the accountable review of project compliance.

Core distinction:

```text
Executor executes.
Evidence producers produce evidence.
Fiscalizers evaluate compliance.
Citizens observe, comment, contradict, and denounce.
```

The executor should not freely choose or directly control the fiscalizer responsible for validating its own performance.

Fiscalization may be simple for low-risk projects and reinforced for larger, technical, risky, remote, irreversible, or vulnerable-beneficiary projects.

Fiscalization cost is a control cost and should be separated from executor-controlled execution spending.

## Citizen interface layers

v0 uses layered citizen complexity.

```text
Layer 0: Home / discovery
Layer 1: Compact project list
Layer 2: Project dashboard
Layer 3: Detail by icon or signal
Layer 4: Full citizen project sheet
Layer 5: Technical audit trail
```

Principle:

> Simple by default, clickable by signal, deeply auditable by choice.

### Layer 0 — Home / discovery

Layer 0 is not a project feed. It is a navigation surface.

It includes:

- available civic allocation;
- urgent now, maximum one or two projects;
- explore by value;
- projects that need something;
- search;
- delegation or automatic profile.

### Layer 1 — Compact project list

Layer 1 lets citizens compare projects quickly.

Each compact item shows:

- name;
- short description;
- value icons;
- funding progress;
- missing conditions;
- signal counts;
- contextual action button.

### Layer 2 — Project dashboard

Layer 2 is the first project-specific view.

It shows:

- project header;
- value promised;
- who will do it;
- project state;
- conditions needed to become execution-ready;
- main actions;
- signal dashboard;
- short summary;
- access to full project sheet.

### Layer 3 — Detail by signal

Every visible icon, number, condition, or alert is clickable.

Layer 3 explains one signal at a time:

```text
meaning
status
why it matters
how it is verified
what the citizen can do
```

### Layer 4 — Full citizen project sheet

Layer 4 lets a citizen understand the full project in accessible language.

It includes:

- summary;
- value promised;
- beneficiaries;
- executor;
- budget;
- closure conditions;
- milestones;
- evidence;
- fiscalization;
- risks and antivalues;
- comments;
- complaints;
- change history;
- access to audit trail.

### Layer 5 — Technical audit trail

Layer 5 contains complete traceability:

- project versions;
- value thesis history;
- metric history;
- budget history;
- funding and custody trace;
- milestone and disbursement trace;
- evidence archive;
- fiscalization reports;
- complaint trace;
- relationship declarations;
- role events;
- moderation decisions;
- protocol references;
- export and verification tools.

## Citizen action flows

v0 includes these citizen flows:

```text
Funding
Following
Offering as fiscalizer
Producing evidence
Commenting / asking
Filing complaint
Delegating
Configuring automatic allocation profile
```

### Funding

Funding is a conditional commitment.

It does not immediately transfer money to the executor.

Funds are released only after closure conditions, milestones, evidence, and fiscalization rules are satisfied.

### Following

Following is observation and notification only.

It does not fund, approve, validate, or block a project.

### Fiscalizer offer

Offering to fiscalize is a role request with responsibility.

It requires eligibility, relationship declaration, methodology, scope, and acceptance.

### Evidence production

Evidence production creates verifiable material.

It does not by itself validate compliance.

### Comments and questions

Comments support civic observation and clarification.

Serious issues can be escalated into formal complaints.

### Complaints

A complaint is a formal review trigger.

It may affect status, milestones, disbursement, or reputation depending on severity and review.

### Delegation

Delegation is scoped authorization to another actor.

It requires explicit scope, delegate acceptance, transparency of concentration, and immediate revocation for future actions.

### Automatic allocation profile

Automatic allocation is citizen-configured rule-based distribution.

It is not delegation and not hidden system choice.

## Project creation flow

Creating a project means turning an idea into a structured public promise.

Flow:

```text
Idea
→ problem and solution
→ promised values
→ beneficiaries
→ executor
→ budget
→ milestones
→ metrics and evidence
→ fiscalization
→ risks and antivalues
→ validation
→ citizen preview
→ publication as open project
```

The creator should not start with a giant technical form. The system should assist the creator in making the project financeable, measurable, fiscalizable, and auditable.

## Open project model

When published, the project becomes open.

Open means it can receive:

- funding;
- fiscalizer offers;
- evidence producer commitments;
- comments;
- complaints;
- beneficiary confirmations where applicable;
- community observation.

Open does not mean execution may start.

A project becomes execution-ready only when all applicable closure conditions are complete.

## Lifecycle after publication

Lifecycle:

```text
Open project
→ parallel closure of conditions
→ execution-ready
→ in execution
→ milestones
→ evidence submission
→ fiscalizer review
→ disbursement decision
→ correction / pause / reformulation / revocation if needed
→ closure
→ final evaluation and reputation effects
```

The project does not advance through a rigid sequential bureaucracy. It advances through condition completion and evidence-based checks.

## Disbursement model

Disbursement is conditional release.

Each release requires:

- milestone;
- evidence;
- review;
- blocking check;
- rule applied;
- audit trace.

Money states:

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

Remaining funds do not automatically belong to the executor.

## Reformulation, pause, and revocation

The system must handle problems proportionally.

Response hierarchy:

```text
Minor problem → correction
Relevant but salvageable change → reformulation
Temporary blocker → pause
Severe non-compliance or impossibility → revocation
```

Rules:

- no silent editing of core promises;
- no erasing old versions;
- no hiding effect on funds;
- no unresolved blockers ignored;
- no revocation without traceable reason;
- no treating every complaint as automatic project destruction.

## Project closure

A project can close as:

```text
fulfilled
partially fulfilled
unfulfilled
revoked
expired
reformulated into new version
```

Closure must show:

- promised value;
- actual delivered value;
- metrics achieved;
- beneficiaries confirmed;
- evidence status;
- budget used;
- unused funds;
- complaints status;
- fiscalizer final report;
- reputation effects.

## Reputation

Reputation must be role-based.

Examples:

- executor reputation: execution performance;
- modeler reputation: design quality;
- fiscalizer reputation: review quality and independence;
- evidence producer reputation: accuracy and usefulness;
- complainant reputation: good-faith signal quality or abuse patterns.

Rule:

> Reputation follows role responsibility. It should not collapse all participation into one generic score.

## Operating modes

A public function may operate in different modes during transition:

```text
Closed
Tutored
Semi-open
Open
Suspended
```

Tutored or semi-open modes may require institutional moderation before publication or under defined triggers.

Operating mode decisions should be visible and traceable.

## Treasury / public revenue authority

In v0, treasury or revenue authority is treated as infrastructure integration, not a civic decision-maker.

It may support:

- collection;
- custody;
- settlement;
- disbursement integration;
- compliance with country implementation.

It does not decide project value, select ordinary projects, or fiscalize by default.

## Out of scope for v0

v0 should not attempt to solve everything.

Out of scope or future extension:

- universal cross-domain public value ROI ranking;
- full national transition of all public functions;
- complex subdelegation and paid delegation markets;
- universal replacement of public institutions;
- full legal implementation by country;
- advanced macro-budget balancing;
- every possible common-good governance case;
- deep predictive scoring as a decision authority.

## Future extensions

Potential later versions:

- public value return per peso;
- richer reputation models;
- more advanced delegation;
- common-good governance programs;
- composite programs;
- institutional observability dashboards;
- transition maturity metrics;
- AI-assisted project generation and catalog governance;
- advanced fraud and capture detection;
- cross-project benchmarking.

## v0 success criteria

A v0 pilot is successful if it can demonstrate:

- citizens can understand projects quickly;
- projects can be created as verifiable public promises;
- funds remain conditional and traceable;
- evidence and fiscalization actually affect disbursement;
- complaints can pause or correct serious problems;
- project history cannot be erased;
- executors cannot self-validate;
- citizens can follow outcomes;
- closure explains value delivered and money used;
- reputation effects align with role responsibility.

## Design rule

> v0 should be small enough to implement, strict enough to be trustworthy, and open enough to evolve.

## Status

Accepted as Distributed Governance System v0 Blueprint.
