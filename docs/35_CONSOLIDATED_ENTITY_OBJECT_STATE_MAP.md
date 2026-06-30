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
- infrastructure provider for identity, treasury, custody, permits, or registries;
- allocation amount provider where legally authorized;
- custodian that executes protocol-valid financial orders and reports closed technical/legal execution blocks.

It should not act as:

- internal project proposer;
- internal executor;
- internal fiscalizer;
- internal evidence producer;
- ordinary delegate;
- internal moderator of competing projects;
- discretionary project payment authority;
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
Idea has many JustifiedObjectionSignals
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
- value verification packages;
- beneficiaries;
- budget;
- phase plan or project phases where applicable;
- milestones;
- disbursement milestone plan;
- Project Evidential Contract;
- evidence needs;
- evidence obligations;
- fiscalization requirements;
- related-party and conflict declarations;
- related-party conflict classification where applicable;
- public-benefit safeguards where applicable;
- common-good impact declarations where relevant;
- active support count;
- active justified objection count;
- funding target;
- funding deadline;
- reformulation policy or policy reference;
- variation control history;
- threshold policy or policy reference;
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
Project has many ValueVerificationPackages
Project has many BeneficiaryGroups
Project has one or more Budgets
Project may have many ProjectPhases
Project has many Milestones
Project has DisbursementMilestonePlan
Project has one ProjectEvidentialContract
Project has many EvidenceNeeds
Project has many EvidenceItems
Project has FiscalizationRequirement
Project has many FiscalizerOffers
Project has many FundingCommitments
Project has many Complaints
Project has many Comments
Project has many SupportSignals
Project has many JustifiedObjectionSignals
Project has many RelatedPartyConflictReviews
Project has many ProjectVariationRecords
Project has many ReformulationProposals
Project has ReformulationPolicy or reformulation policy reference
Project has ThresholdPolicy or threshold policy reference
Project has many AuditEvents
Project has one current State
```

## Support Signal

A reversible positive civic signal attached to an idea or project.

Attributes:

- actor;
- target object: idea or project;
- target version where relevant;
- reason or optional note where allowed;
- status: active, withdrawn, superseded;
- created timestamp;
- withdrawn timestamp where applicable;
- audit references.

Rule:

> Support is a civic signal, not funding. A citizen may withdraw support at any time, and withdrawn support should not count as active support.

## Justified Objection Signal

A reversible structured negative civic signal attached to an idea or project.

Attributes:

- actor;
- target object: idea or project;
- target version where relevant;
- objection reason;
- explanation;
- affected area: value, beneficiaries, budget, evidence, fiscalization, duplication, access, common-good impact, related-party concern, scope, other;
- status: active, withdrawn, superseded, converted to complaint where applicable;
- created timestamp;
- withdrawn timestamp where applicable;
- linked complaint where applicable;
- audit references.

Rule:

> A justified objection is not a simple dislike and is not a formal complaint by default. It is a reversible civic signal that identifies a reasoned concern.

Withdrawal rule:

> Withdrawing a justified objection removes it from active objection counts but does not erase the historical trace and does not erase a formal complaint or review already opened.

## Threshold Policy

A visible policy object or policy reference that defines which proportional thresholds apply to a project.

Attributes:

- project or project category;
- public function;
- operating mode;
- source: protocol, project type rule, public-function rule, tutored authority configuration, country implementation, or other authorized source;
- threshold dimensions applied;
- procedural burden profile: light, standard, reinforced, critical, or configured equivalent;
- threshold values where concrete values exist;
- conditions affected: publication, funding, execution-ready status, disbursement, closure, reformulation, pause, or review;
- required-document checklist where applicable;
- requirement discovery source: rule, AI assistance, authority, protocol, or reviewer;
- document-completeness requirements where applicable;
- document-acceptability reviewer or authority where applicable;
- admissibility-review requirement where applicable;
- rationale;
- citizen-facing explanation;
- technical audit reference;
- effective date or version;
- change history;
- status.

Possible threshold dimensions:

- execution funding;
- beneficiary or attendance commitments;
- social support where applicable;
- technical validation;
- fiscalization and control package;
- evidence producer commitments;
- permits or required documents;
- procedural burden profile;
- admissibility review;
- common-good impact declaration;
- related-party safeguards;
- affected-party visibility;
- tutored-scope review;
- complaint or blocking-condition clearance.

Rule:

> Thresholds are proportional project conditions, not a universal approval formula. The citizen surface shows what is missing; the audit layer shows why the condition applies and who or what rule defined it.

Document rule:

> AI and rules may help discover required documents, but document acceptability is validated only by the competent authority, independent reviewer, certifier, fiscalizer, or protocol-defined review body where the active policy requires it.

Example:

```text
Small cultural workshop:
Funding, expected attendees, basic evidence plan, no blocking complaint.

Macul multi-court facility:
Funding, accepted executor, permit documents, control package, public access rules, related-party safeguards if applicable, and tutored duplication review if configured.

Strategic defense asset:
Funding, strategic compatibility, competent institutional control, and limited distributed operational governance.
```

## Project Evidential Contract

A versioned project object defining how fulfillment will be evidenced.

Attributes:

- project;
- project version;
- value promises covered;
- metrics and qualitative commitments covered;
- material information claims covered;
- evidence needs;
- milestone evidence requirements;
- budget-line evidence requirements where relevant;
- risk and antivalue evidence requirements where relevant;
- evidence types;
- evidence source roles: executor, beneficiary, affected party, evidence producer, fiscalizer, technical record, external register, or other;
- corroboration requirement;
- executor self-report treatment;
- fiscalizer or reviewer responsibility;
- disbursement, closure, complaint, correction, and responsibility effects;
- privacy classification and protected-identity rules where relevant;
- proportionality basis: project type, risk, territory, operating mode, value catalog, threshold policy, or competent-authority requirement;
- citizen-facing verification summary;
- validation status;
- audit trail.

Relationships:

```text
ProjectEvidentialContract belongs to Project
ProjectEvidentialContract covers ValueVerificationPackages
ProjectEvidentialContract defines EvidenceNeeds
ProjectEvidentialContract constrains EvidenceProducer offers and EvidenceItems
ProjectEvidentialContract may be changed by ProjectVariationRecord or ReformulationProposal
```

States:

```text
Draft
In validation
Accepted
Requires adjustment
Weak or not verifiable
Superseded by reformulation
Closed
```

Rules:

- every execution-financeable project should have an accepted evidential contract;
- the contract is project-specific and proportional, not one universal centralized evidence code;
- the contract defines evidence needs, not preselected evidence producers;
- material weakening after support or funding should be versioned and may require reformulation, notification, renewed review, or responsibility analysis;
- citizens should see a simple verification summary, while Layer 5 preserves the full contract.

Example:

```text
Sports school:
attendance records, beneficiary confirmation, activity photos, evidence-producer observations, fiscalizer review.

Water-intensive project:
baseline documents, technical measurements, permit documents, expert review, affected-party channels, competent-authority boundaries.
```

## Related-Party Conflict Review

A traceable review object that records declared, detected, or alleged related-party conflicts for a project.

Attributes:

- project;
- actors and roles involved;
- relationship type;
- benefit type: monetary, non-monetary, operational, ownership, revenue, beneficiary, supplier, or other;
- disclosure status: declared, corrected, alleged, hidden, misrepresented, disproven;
- severity classification: low or indirect, relevant, severe, hidden or misrepresented;
- public-benefit safeguards required;
- independent control requirement;
- effect: disclose, warn, require safeguards, require non-related control, reformulate, exclude actor or supplier, block disbursement, reject, trigger complaint review, or trigger responsibility review;
- citizen-facing explanation;
- audit references;
- status.

Rule:

> Related-party status does not automatically invalidate a project. The system exposes the relationship, classifies severity, and applies proportional safeguards or blocking consequences.

Example:

```text
Project:
Multi-court facility in Macul.

Declared relationship:
The proposing local sports club will also use the facility.

Classification:
Low or indirect conflict.

Effect:
Visible warning plus public access rules and independent control.

Hidden relationship:
The executor secretly hires a sibling's construction company.

Effect:
Possible disbursement block, supplier replacement, complaint review, and Responsibility Event if proven.
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
- phase plan changes;
- beneficiary changes;
- value thesis changes;
- evidence requirement changes;
- fiscalization changes;
- auditability.

## Project Phase

A project phase is an internal segment of a parent project with its own deliverables, funding lane, verification gate, and disbursement boundary where needed.

It is not automatically a separate public-value project and it is not the same as a milestone. A phase groups one or more milestones or deliverables.

Attributes:

- phase id;
- project;
- project version;
- phase type: design, feasibility, construction, delivery, operation, pilot, scale-up, monitoring, or configured equivalent;
- phase order;
- phase title;
- phase purpose;
- responsible actor or role;
- related modeler, executor, fiscalizer, reviewer, or evidence producer where applicable;
- phase budget or funding lane;
- phase funding target;
- phase funding status;
- phase deliverables;
- minimum public-value baseline where the phase gates later execution;
- phase evidential requirements or Project Evidential Contract section;
- phase threshold conditions;
- prerequisite phases;
- successor phases;
- readiness gate;
- verification or fiscalization rule;
- disbursement rules;
- related milestones;
- related evidence items;
- related material information claims;
- related related-party declarations or safeguards where applicable;
- current state;
- audit trail.

States:

```text
Draft
Open for funding
Funded
Deliverables in progress
Submitted for review
Accepted
Requires correction
Rejected
Superseded by reformulation
Closed
```

Relationships:

```text
ProjectPhase belongs to Project
ProjectPhase belongs to ProjectVersion
ProjectPhase may have many Milestones
ProjectPhase may have one or more Budgets or BudgetLines
ProjectPhase may have many FundingCommitments
ProjectPhase may have many EvidenceItems
ProjectPhase may reference ProjectEvidentialContract
ProjectPhase may reference FiscalizationRequirement or ControlSubproject
ProjectPhase may be affected by ProjectVariationRecord
ProjectPhase may generate AuditEvents
```

Rule:

> Project phases are used when a project needs phase-specific funding, deliverables, verification, or disbursement gates. Small low-risk projects may have one implicit phase.

Design-and-execution rule:

> If a parent project combines design and execution, execution funding may be collected in parallel but remains reserved or conditionally committed until the required design phase is accepted. Construction or execution disbursement cannot occur against an unaudited design.

Example:

```text
Project:
  Design and Construction of Multi-court Facility in Macul

Phase 1:
  Design
  Deliverables: design package, dimensions, public-access rules, budget, risks, evidence plan
  Gate: accepted / requires correction / rejected

Phase 2:
  Construction
  Funding: may be committed while design is pending
  Start condition: design phase accepted
  Disbursement: construction milestones, evidence, fiscalization
```

## Project Variation Record

A traceable classification and decision record for a project change under H021.

Attributes:

- record id;
- project id;
- base project version;
- proposed or resulting project version where applicable;
- variation class: minor correction, operational variation, material value reformulation, or substitutive reformulation;
- proposed by;
- reviewed or approved by where applicable;
- active Reformulation Policy or policy reference;
- change reason;
- affected fields;
- original and proposed value thesis comparison;
- original and proposed core metric comparison;
- beneficiary impact;
- budget impact;
- phase impact;
- milestone impact;
- disbursement impact;
- Project Evidential Contract impact;
- fiscalization impact;
- risk, antivalue, and related-party-safeguard impact;
- approval requirement;
- approval result or current review status;
- citizen-facing summary;
- notification history;
- linked complaint, pause, revocation, Responsibility Event, or financial order where applicable;
- audit references.

Relationships:

```text
ProjectVariationRecord belongs to Project
ProjectVariationRecord compares ProjectVersions
ProjectVariationRecord may affect ProjectPhases
ProjectVariationRecord may create or reference ReformulationProposal
ProjectVariationRecord may update ProjectEvidentialContract
ProjectVariationRecord may reference ThresholdPolicy or ReformulationPolicy
ProjectVariationRecord may generate AuditEvents
```

Rule:

> Unapproved variation records do not erase the accepted base design or the executor's responsibility under that design.

Example:

```text
Changing a sports-school schedule while preserving 80 beneficiaries is operational.
Changing 80 beneficiaries to 60 beneficiaries is a material value reformulation.
Replacing the sports school with an unrelated event is a different project.
```

## Reformulation Proposal

A separate proposal required when a project change reduces, alters, or replaces the value thesis, core metrics, beneficiary scope, promised result, or public utility under C017.

Attributes:

- proposal id;
- project id;
- original project version;
- proposed project version;
- reason for reformulation;
- triggering event;
- original value thesis;
- proposed value thesis;
- original core metrics;
- proposed core metrics;
- beneficiary impact;
- budget impact;
- milestone impact;
- evidence impact;
- fiscalization impact;
- funding impact;
- executor explanation;
- validation result;
- fiscalizer observation where applicable;
- approval rule or authority;
- approval status;
- consequence if rejected or expired;
- citizen-facing summary;
- audit references.

Relationships:

```text
ReformulationProposal belongs to Project
ReformulationProposal references ProjectVariationRecord
ReformulationProposal compares ProjectVersions
ReformulationProposal follows ReformulationPolicy
ReformulationProposal may create new ProjectVersion if approved
ReformulationProposal may lead to closure, failure, or revocation if rejected or expired
```

Rule:

> A Reformulation Proposal may preserve partial value, but it cannot convert original non-fulfillment into retrospective success.

## Reformulation Policy

A visible policy object or policy reference defining how reformulation is handled for a project, public function, operating mode, competent authority, community mechanism, or protocol.

Attributes:

- policy id or reference;
- source: project, public function, operating mode, competent authority, community mechanism, protocol, or country implementation;
- scope;
- maximum reformulations where configured;
- minimum period between reformulations where configured;
- deadline-extension effects;
- operational-reformulation approval authority;
- material-value-reformulation approval authority;
- exhaustion consequences;
- expiry-without-decision consequence;
- notification rules;
- effective date or version;
- audit references.

Relationships:

```text
ReformulationPolicy may apply to Project
ReformulationPolicy may apply to OperatingMode
ReformulationPolicy governs ProjectVariationRecords
ReformulationPolicy governs ReformulationProposals
ReformulationPolicy is referenced by AuditEvents
```

Rule:

> Core v0 requires the active Reformulation Policy to be visible, traceable, and enforced; it does not impose one universal maximum count or one universal minimum period.

## Value Thesis

A project's declared promise of public value.

Attributes:

- value icon;
- value name;
- statement;
- beneficiary link;
- metrics;
- evidence needs;
- value verification package;
- status;
- validation result.

Relationships:

```text
ValueThesis belongs to ProjectVersion
ValueThesis uses ValueIcon
ValueThesis has many Metrics
ValueThesis has ValueVerificationPackage
ValueThesis defines EvidenceNeeds
ValueThesis is covered by ProjectEvidentialContract
```

Rule:

> A value thesis is not merely descriptive. It anchors the project's promised public value, core commitments, evidence needs, reformulation boundary, closure evaluation, and reputation effects.

## Value Verification Package

A structured package defining how one promised value will be verified.

It is the value-specific bridge between the Value Thesis and the Project Evidential Contract.

Attributes:

- package id;
- project;
- project version;
- value thesis;
- value icon or value type;
- core value commitments;
- metrics and qualitative commitments;
- evidence needs per commitment;
- expected source roles or corroboration paths;
- beneficiary signal requirements where relevant;
- fiscalizer or reviewer method;
- risk and antivalue checks;
- complaint or contradiction path;
- disbursement, closure, reformulation, responsibility, or reputation effects;
- citizen-facing verification summary;
- validation status;
- audit trail.

Relationships:

```text
ValueVerificationPackage belongs to ValueThesis
ValueVerificationPackage belongs to ProjectVersion
ValueVerificationPackage is covered by ProjectEvidentialContract
ValueVerificationPackage references Metrics
ValueVerificationPackage defines EvidenceNeeds
ValueVerificationPackage may be supported or contradicted by EvidenceItems
ValueVerificationPackage may be reviewed by FiscalizationReport
ValueVerificationPackage may be affected by Complaint or VerifiedDiscovery
```

Rule:

> Value verification uses packages, not isolated metrics. Activity metrics alone are insufficient when they do not reasonably demonstrate the promised value.

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
- evidence need;
- evidential contract requirement reference;
- validation status;
- fulfillment status.

Rule:

> Each core metric should identify what evidence need can verify it. The project defines the evidence need and source role, but should not preselect the independent evidence producer.

## Evidence Need

A predefined need for evidence linked to a value commitment, metric, material claim, milestone, phase, risk, or antivalue.

An evidence need is not the same as an evidence item and is not a preselected evidence producer. It states what must be evidenced and under what review conditions.

Attributes:

- need id;
- project;
- project version;
- related value thesis or value verification package;
- related metric, material claim, milestone, phase, risk, or antivalue;
- evidence type expected;
- expected source role or corroboration path;
- timing;
- priority: required, recommended, supplemental, or configured equivalent;
- whether executor self-report is sufficient or corroboration is required;
- fiscalizer or reviewer role;
- disbursement, closure, complaint, reformulation, responsibility, or reputation effect;
- privacy or protected-identity constraints;
- audit trail.

Relationships:

```text
EvidenceNeed belongs to ProjectEvidentialContract
EvidenceNeed may belong to ValueVerificationPackage
EvidenceNeed may reference Metric
EvidenceNeed may reference ProjectPhase
EvidenceNeed may be addressed by EvidenceProducer offers or commitments
EvidenceNeed may be satisfied, weakened, contradicted, or left unresolved by EvidenceItems
```

Rule:

> Contract-matched evidence needs have higher eligibility priority for control funding. Unexpected evidence may still be admitted when equivalent, necessary, materially useful, or complementary within the available control budget.

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
- phase allocation where applicable;
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
- phase where applicable;
- linked milestone;
- executor controlled or control controlled;
- status.

## Allocation Amount Rule

A program-level rule that defines how a distributed budget is converted into citizen-level allocation amounts.

Attributes:

- public function, program, or budget scope;
- distributed budget amount or percentage;
- eligible population rule;
- formula type: equal for all eligible citizens, contribution-weighted, inverse or redistributive, hybrid, or externally calculated;
- formula version;
- allocation amount provider where applicable;
- update cycle;
- fallback rule if the provider is unavailable;
- citizen-facing explanation;
- audit references;
- status.

Rule:

> The amount formula must be public, versioned, auditable, and explainable. Equal allocation for all eligible citizens should be available as an explicit simple option.

External-provider rule:

> If the formula depends on tax, vulnerability, territorial-priority, or other sensitive external data, the platform should consume only the authorized allocation amount from the competent provider, not the raw sensitive dataset.

## Civic Wallet / Civic Allocation

Represents the citizen's available public allocation right.

Attributes:

- owner;
- period;
- public function, program, or budget scope;
- authorized allocation amount;
- available amount;
- committed amount;
- delegated amount;
- automatic profile amount;
- allocation formula version;
- eligibility status;
- provider audit id or signed balance reference where applicable;
- explanation code where applicable;
- history.

Rule:

> Civic allocation is a public allocation right, not private withdrawable cash.

Citizen-facing rule:

> The citizen should see the available amount and a simple explanation, such as equal allocation for all eligible citizens, hybrid formula, or external authorized amount. The citizen should not need to inspect tax calculations to fund a project.

## Funding Commitment

A citizen's conditional allocation to a project.

Attributes:

- citizen;
- project;
- project phase where applicable;
- amount;
- source: direct, delegated, automatic profile;
- funding target: design phase, execution phase, minimum control, supplemental control where applicable;
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

Phase rule:

> Funding commitments may target a phase-specific lane. Execution-phase commitments may be accepted while a required design phase is pending, but they remain reserved or conditional and cannot be released to execution until the design phase gate is accepted.

## Financial Order

A protocol-authorized instruction for external financial execution.

Attributes:

- order id;
- project;
- project phase where applicable;
- funding commitment or ledger reference;
- amount;
- action: commit, reserve, retain, release, return, reassign, recover, execute guarantee, or close balance;
- milestone, closure, complaint, guarantee, or recovery reference where applicable;
- rule applied;
- evidence or fiscalization reference where applicable;
- destination or ledger account;
- protocol authorization or signature;
- custodian execution status;
- closed rejection cause if execution is refused or suspended;
- timestamp.

Rule:

> The protocol generates valid financial orders. The custodian executes them or reports closed technical/legal execution blocks; it does not decide civic value or project priority.

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
- project phase where applicable;
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
- project phase sequence or phase reference where applicable;
- milestone list;
- release amounts;
- maximum release per milestone;
- partial-release rules;
- retention rules;
- evidence required;
- evidential contract references;
- protected advance-payment rules where applicable;
- validation status;
- critical failures;
- citizen-facing summary.

Rule:

> A project cannot receive execution funding commitments if its disbursement milestone plan has unresolved critical validation failures in the rules that define commitment, release, retention, failure handling, or auditability.

Phase rule:

> Where phases are used, the disbursement milestone plan must distinguish which milestones and release amounts belong to each phase. A pending design gate is not by itself a critical validation failure if the phase plan, minimum public-value baseline, release block, and fund-treatment rule are explicit. A later execution phase cannot release funds until required prior phase gates are accepted.

## Material Information Claim

A statement that can affect funding, execution readiness, disbursement, closure, risk evaluation, beneficiary trust, or reputation.

Attributes:

- project;
- claim text or structured value;
- responsible actor;
- responsible actor role;
- affected object: value thesis, metric, evidence need, beneficiary group, budget line, milestone, evidence item, complaint, fiscalization report, risk, antivalue, or relationship declaration;
- supporting evidence references;
- contradiction, justified objection, complaint, or review references;
- AI anomaly reference where applicable;
- current review status;
- correction history;
- responsibility event references;
- verified discovery references;
- audit trail.

States:

```text
Self-reported
Needs corroboration
Corroborated
Disputed
Contradicted
Corrected
Accepted
Withdrawn
```

Rule:

> Material claims are not hidden technical trivia. They are the accountable statements that connect project promises, evidence, contradictions, review, responsibility, and verified discovery.

## Evidence Item

A piece of material used to verify, contradict, or evaluate a project.

Attributes:

- project;
- project phase where applicable;
- milestone;
- metric;
- evidence need where applicable;
- material claim supported or contradicted where known;
- evidential contract requirement;
- producer;
- producer role;
- type;
- description;
- file or reference;
- timestamp;
- location metadata where allowed;
- privacy classification;
- review status;
- contradiction status;
- independence or source-interest classification;
- corroboration status;
- verified discovery reference where applicable;
- AI anomaly reference where applicable.

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
Used in verified discovery
```

## Verified Discovery

A review-confirmed discovery of material hidden information, false evidence, KPI manipulation, undeclared conflict, material omission, or relevant contradiction.

Attributes:

- project;
- discovering actor;
- discovering actor role;
- protected identity request reference where applicable;
- target material claim or project object;
- discovery description;
- evidence references;
- review process reference;
- materiality finding;
- usefulness finding;
- reward source where applicable;
- reputation effect where applicable;
- related complaint, correction, disbursement, or responsibility event references;
- timestamp;
- audit trail.

States:

```text
Submitted
Under review
Confirmed
Rejected
Duplicate
Reward pending
Rewarded
Closed
```

Rule:

> Discovery is rewardable only after review confirms materiality and usefulness. The system should not reward accusations, unsupported suspicion, or duplicate low-value reports.

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

It may define fiscalization, evidence-production, audit, admissibility review, or other control work.

Attributes:

- parent project;
- control type: primary fiscalization, secondary fiscalization, fiscalization audit, evidence mission, technical review, project admissibility review, extraordinary review;
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

Project admissibility review rule:

> A project admissibility review checks whether required documents or technical assumptions are sufficient for a project to advance to the relevant state. In tutored mode this may be performed by the competent authority under C020; outside tutored authority review it may be modeled as an independent Control Subproject selected under C002/C013 rules.

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
- visible identity mode;
- protected identity request reference where applicable;
- review policy reference;
- required support count;
- support window start and end;
- active support count;
- active objection count;
- reserved review funding amount, hidden from fiscalizer before quote publication;
- fiscalizer quote reference;
- quoted review cost;
- review funding status;
- competent authority referral reference where applicable;
- status;
- blocking status;
- resolution;
- timestamp.

Rule:

> Disbursement may be phase-bound. Design funds may be released against accepted design deliverables, while construction or execution funds remain blocked until the prerequisite design phase gate is accepted.

States:

```text
Submitted
Pending quote
Support window open
Support threshold not reached
Funding pending
Ready for admissibility review
Pending initial review
Needs more information
Sent to executor response
Sent to fiscalizer review
In external authority review
Open
Blocking
Resolved
Rejected
Withdrawn
Reopened
Appealed
```

Rules:

- complaint objections are counter-signals and counterevidence, not numeric vetoes;
- reaching the support threshold creates eligibility for funded review, not proof that the complaint is true;
- review funding remains conditional until the fiscalizer quote is published and the support threshold is reached;
- the fiscalizer should not see reserved review funding totals before submitting the quote;
- regulated project suspension, permit revocation, legal sanction, or operational halt requires a court order, regulator order, or competent authority resolution where applicable.

## Complaint Review Policy

A public, versioned policy defining the ordinary complaint-review trigger.

Attributes:

- policy id;
- scope: project type, public function, operating mode, territory, or risk category;
- required support count;
- support window days;
- quote deadline days;
- quote fallback rule;
- reserved funding visibility rule;
- citizen-facing explanation;
- effective date or version;
- audit references;
- status.

Rule:

> The administrator configures the support count, support window, quote deadline, and fallback rule. Complaint objections do not reduce support count or veto review.

## Complaint Review Quote

A scoped quote for reviewing a complaint.

Attributes:

- complaint;
- fiscalizer or competent reviewer;
- scope of work;
- method;
- deliverables;
- quoted cost;
- timeline;
- conflict declaration;
- quote expiration;
- expert support needed;
- referral preparation needed;
- status;
- timestamp;

States:

```text
Requested
Submitted
Accepted for funding
Expired
Rejected for conflict
Replaced
```

Rule:

> Fiscalizer-quoted review cost is the default cost policy. The quote must be public after submission, scoped, time-limited, conflict-declared, and tied to deliverables.

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
- protected identity is a justified per-comment exception for the comment layer, not an anonymous layer;
- serious claims may be converted to complaints;
- all comments remain subject to narrow legal, safety, privacy, and platform-integrity gates.

## Protected Identity Request

A request to restrict public identity visibility for a specific verified action.

Attributes:

- request id;
- verified actor, restricted from unauthorized viewers;
- protected action or object: comment, complaint, evidence item, testimony, beneficiary confirmation, affected-party report, or other sensitive formal action;
- project or process context;
- justification;
- risk type: retaliation, safety, privacy, beneficiary protection, worker dependency, whistleblower exposure, or other configured risk;
- public contextual display identity;
- AI-assisted recommendation where applicable;
- user acceptance of safer version where applicable;
- authorized-review access rule;
- legal/safety/privacy gate status where applicable;
- audit trail reference;
- timestamp.

Rule:

> Protected identity restricts public visibility for a specific verified action. It does not create anonymous formal power or a permanent anonymous user mode.

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
- report frequency;
- report channels;
- system-generated delegated-action report stream;
- last report generated date;
- last report delivery status;
- represented weight rule;
- represented weight history;
- represented weight cap status, if applicable;
- automatic compensation status: none by default;
- linked participation-support projects, if any;
- base allocation profile or fallback rule at activation, for budget delegation;
- concentration signal at activation;
- concentration signal during reporting;
- concentration trend;
- revocation and resignation trend signals.

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

Concentration visibility rule:

> Concentration visibility should include active delegators, delegated allocation, scopes, territory, represented weight, trend, conflicts, related-party warnings, separate participation-support funding where relevant, and configured cap effects if any.

Delegated-action weight rule:

> If a delegate acts inside an active delegation scope, the action represents the delegate and all delegators covered by that scope by default. The represented weight, scope, and any configured cap effect must be visible in the action record, delegated-action reports, and observability metrics.

Budget delegation rule:

> Budget delegation should not become active unless the citizen has a selected base allocation profile or fallback rule. If delegation ends, that previously selected rule resumes for future allocation.

Delegated-action reporting rule:

> Delegated-action reports should be generated primarily from the audit trail. Delegates may add explanations, but Core v0 should not depend on heavy manual report writing for delegators to understand delegated actions or revoke future authority.

Delegation compensation rule:

> Delegation does not create automatic payment, commission, or a percentage of delegated civic allocation in Core v0. Participation-support work may be funded only as separate transparent projects under ordinary project rules.

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
- responsibility event reference where applicable;
- verified discovery reference where applicable;
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

Project-level states remain simple for citizens. Phase-level states may show more precise internal progress, such as `Design submitted for review`, `Design accepted`, or `Construction funding reserved`.

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
  proposer, modeler, executor if accepted, design-phase reviewer where required

Project phases:
  proposer/modeler defines, executor accepts where executing, fiscalizer or reviewer verifies phase gates

Execution:
  executor

Value metrics:
  project modeler proposes commitments and evidence needs, validator checks, executor accepts where executing

Evidence production:
  evidence producers, beneficiaries, observers, executor self-report where allowed and classified

Fiscalization:
  fiscalizer

Funding:
  funders, delegates, automatic profiles, phase-specific funding lanes where applicable

Disbursement:
  protocol rules, phase gates, fiscalizer review, custody integration

Complaints:
  complainant triggers, executor/fiscalizer/responders answer, review process resolves

Audit trail:
  system records, actors cannot erase history
```

## 6. Key relationship rules

- Project is the central object.
- Project version preserves history.
- Project phase groups phase-specific funding, deliverables, verification, and disbursement gates.
- Value thesis connects project to value verification packages, metrics, evidence needs, and evidence.
- Metrics must connect to evidence needs and review consequences.
- Evidence needs define what should be evidenced without preselecting evidence producers.
- Evidence must connect to phase, milestone, metric, evidence need, material claim, or complaint/review issue where applicable.
- Fiscalization report connects evidence to review outcome.
- Disbursement connects phase, milestone, evidence, fiscalization, and money state.
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
