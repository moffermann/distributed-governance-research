# Core v0 Scope Freeze

## Purpose

This document freezes the first coherent scope of the Distributed Governance System v0.

The goal is to stop uncontrolled conceptual expansion and define what belongs in the first version of the model, what should remain as later extension, what depends on country implementation, and what is out of scope.

## Status

Accepted as Core v0 scope freeze.

This does not mean the system is finished. It means the baseline architecture is bounded enough to formalize, diagram, stress test, and eventually turn into a paper or prototype.

## Core v0 thesis

> Core v0 is a project-based distributed governance system where citizens allocate public resources to verifiable projects, projects declare measurable value, execution is accountable, evidence is produced, fiscalizers review fulfillment, funds are released by milestones, and the full process remains auditable.

## Scope rule after freeze

New ideas must be classified before entering the architecture:

```text
Core v0
Extension v1+
Country implementation
Out of scope
```

A new idea may enter Core v0 only if it is necessary for the model to work coherently, resolves a contradiction, addresses a serious failure mode, or clarifies an existing v0 element without expanding the architecture.

## Core v0 includes

### 1. Actor model

Core actor types:

```text
Citizen
Organization
```

Organization is a neutral umbrella for non-state collective actors such as companies, nonprofits, universities, clubs, associations, cooperatives, unions, NGOs, local groups, and similar entities.

Organization type is an attribute, not a separate actor class.

Integrated C007 correction:

```text
Core v0 internal organizations exclude public institutions.
```

Public institutions remain external legal, budgetary, auditing, regulatory, or infrastructure actors. They do not propose, execute, fiscalize, moderate, or compete for distributed project financing inside Core v0.

### 2. Role model

Core roles:

- proposer;
- modeler / designer;
- executor;
- fiscalizer;
- evidence producer;
- funder;
- follower;
- commenter;
- complainant;
- beneficiary;
- affected party;
- delegator;
- delegate;
- moderator where protocol-defined and not a public institution acting as an internal participant;
- evaluator where enabled.

Roles are accumulable unless conflict rules prevent it.

Examples:

- executor should not fiscalize its own project;
- fiscalizer should not validate where there is direct conflict;
- delegate acts only inside accepted scope;
- executor responsibility begins when executor accepts the project design.

### 2a. Idea object

Core v0 includes `Idea` as a separate civic-demand object.

An idea may be visible, followed, commented on, refined, and associated with future projects.

An idea is not financeable for execution.

Rule:

> Ideas capture demand. Projects execute responsibility. Financing applies to projects, not ideas.

### 3. Project object

The project is the basic financeable and executable unit.

A project must include:

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

Rule:

> Public executorless demand is an Idea, not an open financeable project. A project cannot be published for execution financing without an identified and accepted responsible executor.

### 4. Value thesis, value icons, and metrics

Each project must declare what public value it promises.

Core rules:

- every published project must have at least one value thesis;
- value icons are not marketing decorations;
- selecting a value creates metric obligations;
- metrics require evidence;
- value verification uses a package of metrics, evidence, qualitative context where relevant, beneficiary signals, fiscalizer judgment, complaints, and contradiction channels;
- vague value claims must be reformulated before publication.

### 5. Value catalog and metric validator

Core v0 includes:

- value catalog;
- AI-assisted value search;
- AI-assisted value generation when needed;
- metric validator;
- hard validation rules;
- semantic validation for weak or mismatched metrics;
- evidence requirement checks.

Rule:

> Search first. Generate only when necessary. Accept a value only with measurable and verifiable commitments.

### 6. Beneficiary model

Core v0 distinguishes:

- direct beneficiaries;
- indirect beneficiaries;
- estimated beneficiaries;
- confirmed beneficiaries;
- affected parties.

Projects must clarify who benefits and how beneficiaries are counted or confirmed.

### 7. Evidence model

Evidence can be produced by executor, fiscalizer, evidence producer, beneficiary, funder, open observer, documents, or integrations.

Evidence must be linked to project, milestone, metric, producer, timestamp, status, and privacy classification.

Executor-produced evidence is self-reported support unless corroborated. Critical milestones, disbursements, and closures require evidence produced or corroborated by evidence producers, fiscalizers, verified beneficiaries, technical records, or other non-executor sources.

### 8. Fiscalization model

Core v0 includes accountable fiscalization.

```text
Executor executes.
Evidence producers produce evidence.
Fiscalizers evaluate compliance.
Citizens observe, comment, contradict, and denounce.
```

The executor should not freely appoint or directly control the fiscalizer that validates its own performance.

Fiscalization is proportional to project size, complexity, risk, territory, and beneficiary vulnerability.

Fiscalization may be modeled as a Control Subproject with budget, methodology, deliverables, evidence, comments, auditability, and reputation. Control selection must be protocolized, conflict-checked, risk-adjusted, and auditable.

### 9. Funding model

Core v0 includes:

- civic wallet or civic allocation right;
- conditional project funding;
- funding target;
- committed funds;
- no immediate release to executor;
- no ordinary withdrawal after financing;
- return, reassignment, recovery, guarantee, or retention handling only through project failure, closure, complaint, or reformulation rules;
- automatic following after funding.

Rule:

> Funding is a conditional commitment, not immediate payment and not a freely reversible expression of preference.

### 10. Disbursement model

Every disbursement requires:

- milestone;
- evidence;
- fiscalizer review;
- blocking-condition check;
- rule applied;
- audit trace.

Core v0 also requires a coherent Disbursement Milestone plan before execution funding. Specialized validation should check milestone evidence, release amounts, partial-release rules, retentions, and advance-payment protections. Projects with unresolved critical validation failures cannot begin receiving execution funding.

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

### 11. Open project and parallel closure

A published project enters `Open project` state and may gather funding, fiscalizer offers, evidence commitments, beneficiary confirmations, comments, complaints, required documents, and control configuration in parallel.

Rule:

> A project becomes execution-ready when all applicable closure conditions are complete, not because it passed a rigid sequence.

### 12. Citizen interface layers

Core v0 includes:

```text
Layer 0: Home / discovery
Layer 1: Compact project list
Layer 2: Project dashboard
Layer 3: Detail by icon or signal
Layer 4: Full citizen project sheet
Layer 5: Technical audit trail
```

Rule:

> Simple by default, clickable by signal, deeply auditable by choice.

### 13. Citizen action flows

Core v0 includes flows for funding, following, fiscalizer offers, evidence production, comments/questions, complaints, delegation, and automatic allocation profiles.

### 14. Project creation and publication

Core v0 includes project creation from idea to open project:

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

`Idea` is the source object for civic demand. It is not a project state and is not financeable until converted into a project with accepted executor responsibility.

Project creation also includes lightweight common-good impact declaration where relevant through affected assets, affected parties, risks, antivalues, evidence, and fiscalization. Full common-good charter governance remains Extension v1+.

### 15. Project lifecycle after publication

Core v0 includes:

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

### 16. Correction, reformulation, pause, revocation

Core v0 includes proportional response to problems:

```text
Minor problem → correction
Relevant but salvageable change → reformulation
Temporary blocker → pause
Severe non-compliance or impossibility → revocation
```

Rule:

> No critical project change should erase history or hide effects on funds, evidence, reputation, or responsibility.

### 17. Complaint model

Complaints are formal review triggers. Not every complaint blocks a project. Blocking status must be explicit, justified, and reviewable.

### 18. Delegation model

Core v0 includes simple scoped delegation with explicit scope, delegate acceptance, concentration visibility, reporting, and immediate revocation for future actions.

Delegation has priority over automatic allocation within the delegated scope. Core v0 does not impose a universal hard cap on delegation concentration; it requires concentration visibility and soft warnings, while configurable caps remain protocol, pilot, territory, or country implementation choices.

### 19. Automatic allocation profile

Core v0 includes citizen-configured automatic allocation. It is not delegation and not hidden system choice.

Automatic allocation rules do not execute where an active delegation governs the same balance or scope.

### 20. Technical audit trail

Core v0 requires Layer 5 auditability for project versions, value history, metrics, budget, custody trace, milestones, disbursements, evidence, fiscalization, complaints, role events, relationship declarations, moderation decisions, and protocol references.

Layer 5 should also preserve material AI-assisted outputs, governance resolutions, review timeout resolutions, protocol-change records, discovery visibility reasons where material, and privacy-aware access/redaction traces.

### 21. Operating modes

Core v0 includes public-function operating modes:

```text
Closed
Tutored
Semi-open
Open
Suspended
```

Core v0 does not force countries to exit tutored mode. It requires material tutored decisions and tutored silence to become public civic objects through Governance Resolution and Review Timeout Resolution mechanisms.

### 22. Role-based reputation

Core v0 includes reputation by role: executor, modeler, fiscalizer, evidence producer, complainant, delegate, and other relevant roles.

Rule:

> Reputation follows role responsibility. It is not one generic social score.

Closure labels are procedural context, not automatic reputation scores. Reputation should be updated through verified value fulfillment, metric breakdown, founded complaints, evidence corrections, and responsibility events by role.

### 23. Discovery visibility and customization

Core v0 includes transparent discovery controls:

- Layer 0 remains navigation, not a feed;
- Home categories may be reordered, pinned, collapsed, or hidden by the user;
- hidden categories remain available through Explore and search;
- project lists must show ordering mode;
- urgent and recommended projects must show why they appear;
- paid promotion and opaque manual boosting are excluded.

### 24. Basic observability baseline

Core v0 includes simple user-facing signals plus a minimal administrative observability baseline. The full universal institutional observability panel remains Extension v1+.

## Extension v1+ concepts

These should not be part of Core v0 unless later shown necessary:

- public value return per peso / public ROI;
- advanced delegation markets;
- paid delegation;
- subdelegation;
- time-bound delegation;
- complex delegation portfolios;
- advanced cross-project benchmarking;
- full common-good subordinate charter system;
- complex canary releases;
- advanced capture-prediction scoring;
- advanced inferred recommender systems;
- detailed sector-specific KPI libraries beyond pilot needs;
- full common-good charter governance;
- full multi-sector implementation.

## Country implementation decisions

These depend on the implementing jurisdiction:

- legal custody of funds;
- tax authority / treasury integration;
- enforceability of disbursement rules;
- legal identity requirements;
- privacy standards;
- procurement compatibility;
- institutional moderation authority;
- any departure from the Core v0 rule that public institutions remain external to internal project participation;
- sector chosen for pilot;
- official budget percentage migrated to the system;
- sanctions and recovery mechanisms;
- appeal and administrative review rules.

## Out of scope for Core v0

Core v0 does not solve:

- full replacement of the state;
- national deployment across every public function;
- detailed legal drafting for a country;
- complete welfare-state transition;
- all macroeconomic effects;
- final constitutional design;
- universal moral ranking of all public values.
- public institutions as internal competitors for distributed project financing under the Core v0 baseline.

## Immediate next use of this freeze

This scope freeze should be used to:

1. build the consolidated entity-object-state map;
2. create lifecycle and flow diagrams;
3. classify hypotheses and documents;
4. build the contradiction and failure-mode checklist;
5. create the paper outline v1.

## Design rule

> Core v0 is small enough to reason about, strict enough to be trustworthy, and complete enough to demonstrate distributed project governance from idea to closure.
