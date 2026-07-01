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
- Planning Scope reference;
- Primary Responsibility Anchor;
- secondary contributions and commitment status;
- value theses;
- value-antivalue profile;
- value verification packages;
- beneficiaries;
- budget;
- phase plan or project phases where applicable;
- milestones;
- disbursement milestone plan;
- Project Evidential Contract;
- fulfillment evidence needs;
- fulfillment evidence obligations;
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
- Financial Assurance Profile;
- closure conditions;
- risks;
- antivalues;
- value floors and antivalue ceilings where applicable;
- current state;
- current version;
- audit trail.

Key relationships:

```text
Project has many ProjectVersions
Project references PlanningScope
Project has many ValueTheses
Project has one ValueAntivalueProfile
Project has many ValueVerificationPackages
Project has many BeneficiaryGroups
Project has one or more Budgets
Project may have many ProjectPhases
Project has many Milestones
Project has DisbursementMilestonePlan
Project has one ProjectEvidentialContract
Project has many FulfillmentEvidenceNeeds
Project has many EvidenceItems
Project has many EvaluationRecords
Project has many ReputationSignals
Project has many ReputationInputs
Project has many ReputationUpdates
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
Project has one FinancialAssuranceProfile where execution funding is allowed
Project has one or more GuaranteeMaterializationRecords where assurance is required
Project has many AuditEvents
Project has one current State
```

## Planning Scope

A public, versioned scope defining what kinds of projects are currently eligible for distributed financing under a public function, operating mode, pilot, protocol, approved roadmap line, or country implementation rule.

Attributes:

- scope id;
- public function or pilot;
- operating mode;
- source: authority, protocol, approved roadmap, country implementation, or future distributed mechanism;
- eligible project types;
- excluded or out-of-scope project types where relevant;
- territorial level;
- related budget or allocation boundary where relevant;
- responsible authority or process;
- effective date;
- review or expiration date where applicable;
- citizen-facing explanation;
- associated Governance Resolutions or Administrative Rule Changes where relevant;
- audit trail.

Relationships:

```text
PlanningScope may govern many Projects
PlanningScope belongs to OperatingMode or ProtocolVersion where applicable
PlanningScope may be configured by AdministrativeRuleChange
PlanningScope may be interpreted by GovernanceResolution in tutored mode
PlanningScope may be referenced by PrimaryResponsibilityAnchor
```

Rule:

> Core v0 requires active planning-scope alignment for financeable projects. It does not define the full distributed construction of national, regional, communal, or thematic roadmaps.

Tutored-mode rule:

> In tutored mode, the authority may define or interpret the active Planning Scope, but material scope decisions must be public, versioned, and auditable under C020.

## Primary Responsibility Anchor

A project attribute defining the main Planning Scope, roadmap goal, public function, or public-value outcome against which the project is primarily classified, compared, funded, evaluated, fiscalized, and held accountable.

Attributes:

- project;
- project version;
- anchor statement;
- Planning Scope, roadmap goal, or public-function reference where applicable;
- territorial or scope level;
- relationship to value thesis;
- primary value floor or commitment family;
- secondary contributions;
- secondary contribution status: formal commitment or expected incidental benefit;
- split, phase, or composite-structure rationale where multiple outcomes appear primary;
- citizen-facing summary;
- audit trail.

Rule:

> A project may have several values, but only one Primary Responsibility Anchor. Formal secondary commitments require proportional metrics, fulfillment/control evidence, and consequence rules. Incidental benefits should not be presented as verified promises.

Splitting test:

```text
If two outcomes each have separable budget, executor responsibility,
beneficiary scope, fulfillment/control evidence, disbursement, closure,
and reputation consequences, they may require separate projects or a
parent/child structure.
```

## Value-Antivalue Profile

A structured project profile defining the positive floors the project must reach and the negative ceilings it must not exceed.

Attributes:

- project;
- project version;
- value floors;
- antivalue ceilings;
- affected beneficiaries, affected parties, assets, zones, or common goods;
- metric or qualitative commitment per floor or ceiling;
- threshold: minimum target for value floors, maximum limit for antivalue ceilings;
- measurement or review method;
- timing and frequency;
- required fulfillment/control evidence;
- accepted evidence source roles;
- fiscalizer or reviewer method;
- mitigation, correction, compensation, reformulation, or closure path where applicable;
- disbursement, retention, closure, responsibility, reputation, pause, or revocation consequences where applicable;
- complaint path reference where an actor explicitly files a complaint;
- audit trail.

States:

```text
Draft
In validation
Accepted
Requires adjustment
Under review
Superseded by reformulation
Closed
```

Rules:

- value floors are minimum positive commitments;
- antivalue ceilings are maximum negative effects;
- antivalue ceilings are not complaints by default;
- fulfillment/control evidence verifies floors and ceilings;
- complaint evidence enters only when a complaint is explicitly filed and processed;
- failure to reach a floor, exceeding a ceiling, or discovering an undeclared antivalue may become a reviewed Reputation Input or Responsibility Event by role.

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
- affected area: value, beneficiaries, budget, fulfillment evidence, fiscalization, duplication, access, common-good impact, related-party concern, scope, other;
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
- financial assurance profile or assurance rule reference;
- global guarantee percentage where H011 applies;
- eligible budget basis for assurance;
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
- financial assurance and guarantee materialization;
- admissibility review;
- common-good impact declaration;
- related-party safeguards;
- affected-party visibility;
- tutored-scope review;
- complaint or blocking-condition clearance.

Rule:

> Thresholds are proportional project conditions, not a universal approval formula. The citizen surface shows what is missing; the audit layer shows why the condition applies and who or what rule defined it.

Anti-self-classification rule:

> The proposer, designer, or executor may describe project facts, but must not self-select a lower threshold, burden profile, risk class, or guarantee requirement when that classification reduces obligations.

Document rule:

> AI and rules may help discover required documents, but document acceptability is validated only by the competent authority, independent reviewer, certifier, fiscalizer, or protocol-defined review body where the active policy requires it.

Example:

```text
Small cultural workshop:
Funding, expected attendees, basic evidence plan, no admitted blocking complaint or scoped systemic pause.

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
- value-antivalue profile reference;
- value promises covered;
- value floors covered;
- antivalue ceilings covered;
- metrics and qualitative commitments covered;
- material information claims covered;
- fulfillment evidence needs;
- milestone fulfillment evidence requirements;
- budget-line fulfillment evidence requirements where relevant;
- risk and antivalue fulfillment evidence requirements where relevant;
- floor/ceiling threshold and measurement method where relevant;
- fulfillment/control evidence types;
- fulfillment/control evidence source roles: executor, beneficiary, affected party, evidence producer, fiscalizer, technical record, external register, or other;
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
ProjectEvidentialContract references ValueAntivalueProfile
ProjectEvidentialContract covers ValueVerificationPackages
ProjectEvidentialContract defines FulfillmentEvidenceNeeds
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
- the contract defines fulfillment evidence needs, not preselected evidence producers;
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
- related contextualized evidence items;
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
  Disbursement: construction milestones, fulfillment evidence, fiscalization
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
- fulfillment evidence needs;
- value verification package;
- status;
- validation result.

Relationships:

```text
ValueThesis belongs to ProjectVersion
ValueThesis uses ValueIcon
ValueThesis has many Metrics
ValueThesis has ValueVerificationPackage
ValueThesis defines FulfillmentEvidenceNeeds
ValueThesis is covered by ProjectEvidentialContract
```

Rule:

> A value thesis is not merely descriptive. It anchors the project's promised public value, core commitments, fulfillment evidence needs, reformulation boundary, closure evaluation, and reputation effects.

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
- fulfillment evidence needs per commitment;
- expected fulfillment evidence source roles or corroboration paths;
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
ValueVerificationPackage defines FulfillmentEvidenceNeeds
ValueVerificationPackage may be supported or contradicted by EvidenceItems with fulfillment context
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
- fulfillment evidence requirements;
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
- fulfillment evidence need;
- evidential contract requirement reference;
- validation status;
- fulfillment status.

Rule:

> Each core metric should identify what fulfillment evidence need can verify it. The project defines the fulfillment evidence need and source role, but should not preselect the independent evidence producer.

## Fulfillment Evidence Need

A predefined need for fulfillment/control evidence linked to a value floor, antivalue ceiling, metric, material claim, milestone, phase, risk, or declared antivalue.

A fulfillment evidence need is not the same as an evidence item and is not a preselected evidence producer. It states what must be evidenced and under what review conditions.

Attributes:

- need id;
- project;
- project version;
- related value thesis or value verification package;
- related value floor, antivalue ceiling, metric, material claim, milestone, phase, risk, or declared antivalue;
- fulfillment evidence type expected;
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
FulfillmentEvidenceNeed belongs to ProjectEvidentialContract
FulfillmentEvidenceNeed may belong to ValueVerificationPackage
FulfillmentEvidenceNeed may reference Metric
FulfillmentEvidenceNeed may reference ProjectPhase
FulfillmentEvidenceNeed may be addressed by EvidenceProducer offers or commitments
FulfillmentEvidenceNeed may be satisfied, weakened, contradicted, or left unresolved by EvidenceItems with fulfillment context
```

Rule:

> Contract-matched fulfillment evidence needs have higher eligibility priority for control funding. Unexpected fulfillment evidence may still be admitted when equivalent, necessary, materially useful, or complementary within the available control budget.

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
- fulfillment evidence cost;
- contingency;
- guarantees;
- retentions;
- Financial Assurance Profile reference;
- eligible execution budget basis for guarantee calculation;
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
- Financial Assurance Profile or Guarantee Materialization Record reference where relevant;
- rule applied;
- fulfillment evidence or fiscalization reference where applicable;
- destination or ledger account;
- protocol authorization or signature;
- custodian execution status;
- closed rejection cause if execution is refused or suspended;
- timestamp.

Rule:

> The protocol generates valid financial orders. The custodian executes them or reports closed technical/legal execution blocks; it does not decide civic value or project priority.

## Financial Assurance Profile

A project-level or phase-level object defining how execution funding is financially protected if the project fails, is abandoned, falls below value floors, exceeds antivalue ceilings, misuses funds, or enters correction, mitigation, revocation, closure, return, reassignment, or recovery.

Attributes:

- profile id;
- project;
- project phase where applicable;
- policy reference;
- protocol version;
- eligible budget basis;
- global guarantee percentage applied;
- required guarantee amount;
- retention rule;
- protected advance-payment rule where applicable;
- financial instrument type;
- responsible actor;
- custodian or guarantor;
- materialization status;
- execution conditions;
- release conditions;
- failure treatment;
- citizen-facing summary;
- audit trail.

Relationships:

```text
FinancialAssuranceProfile belongs to Project
FinancialAssuranceProfile may belong to ProjectPhase
FinancialAssuranceProfile references ThresholdPolicy
FinancialAssuranceProfile may require GuaranteeMaterializationRecord
FinancialAssuranceProfile may be referenced by FinancialOrder
FinancialAssuranceProfile may be affected by AdministrativeRuleChange
```

Rule:

> Financial assurance is not construction-specific. It applies to every execution-financeable social project, including care, supplies, workshops, food support, services, and infrastructure.

Core v0 guarantee rule:

```text
required guarantee =
eligible execution budget or phase budget * global guarantee percentage
```

The global percentage is configured by the administrator, active protocol, operating mode, or lawful country implementation rule, not by the proposer, designer, or executor.

## Guarantee Materialization Record

A record proving that the required guarantee, deposit, insurance, bond, escrow, retention, or equivalent instrument has been confirmed by a lawful custodian, guarantor, insurer, treasury, bank, escrow provider, or country-specific mechanism.

Attributes:

- record id;
- project;
- project phase where applicable;
- Financial Assurance Profile reference;
- responsible actor;
- required guarantee percentage;
- eligible budget basis;
- required guarantee amount;
- instrument type: cash deposit, bond, insurance, escrow, retention, or equivalent;
- custodian or guarantor id;
- custodian confirmation reference;
- amount confirmed;
- validity period;
- execution conditions;
- release conditions;
- status: pending, materialized, insufficient, expired, executed, released;
- timestamp;
- audit reference.

Relationships:

```text
GuaranteeMaterializationRecord belongs to FinancialAssuranceProfile
GuaranteeMaterializationRecord may be referenced by FinancialOrder
GuaranteeMaterializationRecord may be referenced by AuditEvents
```

Rule:

> An executor-uploaded document is not enough by itself. Guarantee materialization requires confirmation by the external custodian, guarantor, insurer, treasury, bank, escrow provider, or lawful equivalent.

## Supplemental Control Contribution

A designated contribution for control after the minimum admissible control package is accepted.

Attributes:

- citizen or funding actor;
- project;
- amount;
- target: secondary fiscalizer / fiscalization auditor, distinct fulfillment evidence mission, extraordinary review reserve where permitted;
- admissibility status;
- reservation status;
- linked control offer or fulfillment evidence mission where assigned;
- rejection reason if no admissible supplemental need remains;
- timestamp.

States:

```text
Offered
Reserved for secondary fiscalization
Assigned to distinct fulfillment evidence mission
Assigned to secondary fiscalizer
Rejected as saturated
Returned
Reassigned
Closed
```

Rule:

> Supplemental control contributions never fund execution. They may fund at most one secondary fiscalizer or fiscalization auditor and distinct additional fulfillment evidence needs under protocol limits.

## Milestone

A verifiable execution step.

Attributes:

- project;
- project phase where applicable;
- name;
- description;
- expected date;
- responsible actor;
- fulfillment evidence required;
- metric links;
- maximum disbursement amount;
- review rule;
- status.

States:

```text
Pending
In progress
Fulfillment evidence submitted
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
- fulfillment evidence required;
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
- affected object: value thesis, metric, fulfillment evidence need, beneficiary group, budget line, milestone, contextualized evidence item, complaint, fiscalization report, risk, antivalue, or relationship declaration;
- supporting evidence references with context;
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

> Material claims are not hidden technical trivia. They are the accountable statements that connect project promises, contextualized evidence, contradictions, review, responsibility, and verified discovery.

## Evidence Item

A piece of material used to verify, contradict, or evaluate a project, complaint, control task, material claim, or administrative observability issue.

Attributes:

- project;
- project phase where applicable;
- evidence context: complaint, fulfillment, control, contradiction, administrative observability, or research;
- milestone;
- metric;
- fulfillment evidence need or complaint evidence relation where applicable;
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

> Executor-submitted material is self-reported support unless corroborated. Critical milestones, disbursements, and closures require fulfillment evidence produced or corroborated by evidence producers, fiscalizers, verified beneficiaries, technical records, or other non-executor sources. Complaint evidence may trigger or support review, but it does not become fulfillment evidence unless accepted for that purpose by the responsible reviewer, fiscalizer, competent authority, or protocol rule.

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

## Evaluation Record

A technical audit record that classifies an evaluation by context, dimension, source role, observability basis, and formal effect.

It is not a new citizen-facing bureaucracy. Ordinary users may comment, confirm, object, or complain through simple interfaces. The system records whether the input is a soft public signal, experiential evaluation, fulfillment evaluation, technical review, fiscalization conclusion, complaint review finding, or reputation input.

Attributes:

- project;
- project phase where applicable;
- related value thesis, metric, milestone, budget line, complaint, evidence item, fiscalization report, reputation input, or reputation update where applicable;
- evaluation context: soft public signal, experiential evaluation, fulfillment evaluation, technical or professional review, fiscalization conclusion, complaint review finding, or reputation input;
- evaluated dimension;
- actor;
- actor role at evaluation time;
- observability basis: direct observation, direct experience, technical measurement, document review, assigned fiscalization, qualified professional review, financial audit, complaint review, or protocol rule;
- authority or qualification basis where formal effect is claimed;
- contextualized evidence used;
- evaluation type: signal, confirmation, contradiction, compliance review, technical finding, financial finding, fiscalization conclusion, complaint finding, or reputation input;
- formal effect: none, soft public context, value verification input, disbursement input, correction requirement, closure input, complaint outcome, responsibility review, reputation input, or referral support;
- confidence or limitation statement where relevant;
- privacy or protected-identity classification;
- review status;
- timestamp;
- audit trail.

Relationships:

```text
EvaluationRecord belongs to Project
EvaluationRecord may reference ValueVerificationPackage
EvaluationRecord may reference Metric
EvaluationRecord may reference Milestone
EvaluationRecord may reference EvidenceItem
EvaluationRecord may reference Complaint
EvaluationRecord may reference FiscalizationReport
EvaluationRecord may contribute to ReputationInput after review
```

Rule:

> Formal evaluation is dimension-scoped and effect-scoped. A person may be a valid evaluator for one dimension and not for another. Soft public signals may be visible and useful, but they should not directly release funds, close projects, sanction actors, or update role-specific reputation without the relevant review path.

## Verified Discovery

A review-confirmed discovery of material hidden information, false or manipulated contextualized evidence, KPI manipulation, undeclared conflict, material omission, or relevant contradiction.

Attributes:

- project;
- discovering actor;
- discovering actor role;
- protected identity request reference where applicable;
- target material claim or project object;
- discovery description;
- evidence references with context;
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
- risk tier;
- required fiscalization layer: open observation, responsible fiscalization, technical review, reinforced fiscalization;
- required fiscalizer count;
- required evidence producer count;
- supplemental fulfillment evidence need count or scope where applicable;
- secondary fiscalizer slot: none, open, filled, closed;
- selection model: rotation, random, semi-random among admissible offers, technical/economic scoring, reinforced review, or configured rule;
- observation or offer window where applicable;
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
- control type: primary fiscalization, secondary fiscalization, fiscalization audit, fulfillment evidence mission, technical review, project admissibility review, extraordinary review;
- fiscalization layer;
- methodology;
- deliverables;
- control budget;
- fulfillment evidence requirements;
- eligibility rule;
- conflict checks;
- selection rule;
- assigned actor or actors;
- status;
- audit trail.

Rule:

> Control subprojects fit the project architecture, but their selection follows independence rules stronger than ordinary project selection.

Fiscalization ecosystem rule:

> Distributed fiscalization means many actors may observe, offer fulfillment evidence, submit complaint evidence, or compete to fiscalize; it does not mean the responsible fiscalizer is chosen by executor preference, ordinary popularity, first funding, or lowest price alone.

Supplemental rule:

> The ordinary supplemental control cap is one secondary fiscalization or fiscalization-audit role plus non-duplicative fulfillment/control evidence work. Additional control must not become unlimited fiscalizer or evidence-producer overfunding.

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
- admissibility result;
- selection reason or non-selection reason;
- conflict review result;
- risk-tier suitability;
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
- control subproject;
- fiscalizer;
- assignment type: primary fiscalizer, secondary fiscalizer, fiscalization auditor;
- selection rule reference;
- selection reason;
- scope;
- reports required;
- relationship declarations;
- conflict review result;
- replacement or resignation condition;
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
- related evaluation records;
- fulfillment evidence considered;
- fulfillment evidence limitations or unresolved contradictions;
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
- fulfillment evidence considered;
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
- complaint evidence attached;
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
- admissibility/referral record references;
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
- complaint admissibility may create scoped systemic effects inside the platform, not final responsibility by itself;
- regulated project suspension, permit revocation, legal sanction, or operational halt requires a court order, regulator order, or competent authority resolution where applicable.

## Complaint Admissibility / Referral Record

A reviewed record of whether a complaint proceeds after support, quote, funding, and minimum complaint-evidence requirements are met.

Attributes:

- complaint;
- reviewer or fiscalizer;
- admissibility result;
- affected scope;
- non-blocking, blocking, or systemic-pause classification;
- system effects: execution funding, disbursement, milestone, phase gate, closure, evidence-use, or actor-scope effects;
- complaint evidence index;
- actor responses considered;
- external authority, court, or regulator referral reference where applicable;
- requested material or legal measure where applicable;
- rule for lifting, narrowing, maintaining, or escalating the system effect;
- reputation status: pending signal, reviewed input, or no reputation effect;
- final resolution reference where applicable;
- timestamp;
- audit trail.

States:

```text
Pending admissibility
Rejected
Admitted non-blocking
Admitted with scoped systemic pause
Referred to competent authority
External suspension ordered
Final resolution pending
Resolved founded
Resolved unfounded
Closed
Appealed
```

Rules:

- admissibility is not final proof of responsibility;
- systemic pause can affect only the identified scope;
- complaint review, control, correction, mitigation, or referral funding may continue where rules allow;
- material/legal suspension requires external authority, legal rule, court/regulator order, or enforceable accepted obligation where applicable;
- formal negative reputation requires final resolution, founded responsibility, confirmed non-compliance, role-specific Responsibility Event, or external decision establishing responsibility.

## Systemic Pause Record

A scoped platform/protocol effect that temporarily restricts project advancement inside the system.

Attributes:

- project;
- affected object: whole project, phase, milestone, disbursement, budget line, contextualized evidence item, actor relationship, legal/safety condition, or closure;
- trigger: complaint admissibility/referral record, fiscalization finding, phase gate failure, contradictory evidence, authority notice, safety/legal condition, operating-mode suspension, or protocol rule;
- systemic effects: stop execution funding, block release, retain funds, prevent milestone advancement, prevent phase gate acceptance, block closure, restrict disputed evidence use, or block actor action;
- funding boundary: execution funding blocked, complaint review funding allowed, control funding allowed, correction funding allowed, mitigation funding allowed, referral funding allowed, or unaffected scope allowed;
- material/legal suspension reference where applicable;
- lifting, narrowing, maintaining, escalation, or conversion rule;
- current status;
- responsible reviewer or rule;
- timestamps;
- audit trail.

States:

```text
Proposed
Active
Narrowed
Maintained
Lifted
Escalated to material/legal authority
Converted to final resolution
Closed
```

Rules:

- systemic pause is temporary control, not silent cancellation;
- systemic pause affects only the defined scope;
- systemic pause does not by itself create physical halt, permit revocation, legal sanction, or legal-right suspension;
- pending systemic pause is procedural context, not a direct negative reputation input.

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
- protected action or object: comment, complaint, contextualized evidence item, testimony, beneficiary confirmation, affected-party report, or other sensitive formal action;
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

Role-specific reputation history container.

Core v0 should not treat reputation as one undifferentiated score. H014 separates the reputation chain into:

```text
Reputation Signal
Reputation Input
Reputation Update
Reputation Summary
```

### Reputation Signal

Visible context without direct formal effect.

Attributes:

- actor or source where known;
- role or relationship context where known;
- project or object;
- signal type: citizen satisfaction, beneficiary experience, funder concern, public criticism, raw complaint, unreviewed evidence, AI anomaly flag, or other soft context;
- related EvaluationRecord or EvidenceItem where applicable;
- privacy or protected-identity status;
- timestamp;
- audit trail.

Rule:

> Signals may be visible, aggregated, contradicted, or routed into review, but they do not directly update formal reputation.

### Reputation Input

Reviewed source that may affect role-specific reputation.

Attributes:

- actor affected;
- role affected;
- project or object;
- source type: value fulfillment score, metric breakdown, EvaluationRecord, founded complaint correction, Responsibility Event, evidence correction, verified discovery, fiscalizer/reviewer finding, or protocol-defined role-performance review;
- source reference;
- obligation or performance dimension;
- review basis;
- severity or weight basis;
- formal reputation effect;
- appeal or review status;
- timestamp;
- audit trail.

### Reputation Update

Formal score or status change applied to an actor in a specific role.

Attributes:

- actor;
- role affected;
- project or object;
- reputation input reference;
- previous reputation;
- new reputation;
- weight used;
- decay or time-weight rule;
- severity rule;
- citizen-facing explanation;
- appeal or review status;
- timestamp;
- audit trail.

### Reputation Summary

Citizen-facing navigation layer over role-specific records.

Attributes:

- actor;
- visible roles;
- role-specific current summaries;
- recent performance;
- severe responsibility events visible separately;
- confidence or data sufficiency status;
- detail links.

Rule:

> Reputation follows reviewed role responsibility and verified role performance. Raw opinion, popularity, suspicion, unfounded complaints, unreviewed evidence, AI anomaly flags, project proximity, corporate-group proximity, or closure labels should not directly update formal reputation.

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
- active planning scopes;
- effective date;
- reason;
- approving authority or process;
- affected project rules;
- administrative rule changes;
- protocol change proposals where applicable;
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

## Protocol Version

A versioned record of the active rule set that governed a decision, project state, operating mode, or system behavior at a given time.

Attributes:

- version id;
- operating mode or public function scope;
- effective date;
- superseded date where applicable;
- source rule-change object;
- active rules or references;
- active planning scopes where applicable;
- transition rules;
- rollback reference where applicable;
- citizen-facing summary for material changes;
- audit trail.

Relationships:

```text
ProtocolVersion may be created or superseded by AdministrativeRuleChange
ProtocolVersion may be created or superseded by ProtocolChangeProposal
ProtocolVersion may be implemented by SystemImplementationChange
ProtocolVersion is referenced by AuditEvents
ProtocolVersion may govern ThresholdPolicy, ReformulationPolicy, ComplaintReviewPolicy, AllocationAmountRule, or OperatingMode
ProtocolVersion may govern PlanningScope
```

Rule:

> Important decisions should record the protocol version or rule version that governed them so later changes do not rewrite the basis of past decisions.

## Administrative Rule Change

A public object recording a material change to a configured parameter, threshold, eligibility rule, review period, guarantee requirement, complaint threshold, funding deadline, or similar operational rule.

Attributes:

- change id;
- operating mode;
- proposing actor or authority;
- rule affected;
- old value or behavior;
- new value or behavior;
- reason;
- scope;
- affected project states;
- affected roles;
- affected future projects;
- affected existing projects if any;
- publication date;
- effective date;
- adaptation period;
- transition rule;
- emergency justification where applicable;
- rollback rule where applicable;
- citizen-facing summary;
- audit trail.

Relationships:

```text
AdministrativeRuleChange belongs to OperatingMode or ProtocolVersion
AdministrativeRuleChange may affect ThresholdPolicy
AdministrativeRuleChange may affect PlanningScope
AdministrativeRuleChange may affect ReformulationPolicy
AdministrativeRuleChange may affect ComplaintReviewPolicy
AdministrativeRuleChange may affect AllocationAmountRule
AdministrativeRuleChange may affect Project states or ProjectVersions through transition rules
AdministrativeRuleChange is referenced by AuditEvents
```

Rule:

> A material administrative rule change must be public, versioned, justified, scoped, and governed by an effective date and transition rule. Tutored authority does not permit silent, overnight, or retroactive rule changes by default.

## System Implementation Change

A public object recording a material software, algorithmic, AI-model, validator, interface, schema, migration, or technical release change.

Attributes:

- change id;
- implementation version;
- affected system component;
- related rule or protocol if applicable;
- old behavior;
- new behavior;
- reason;
- migration plan;
- test, sandbox, or simulation result where required;
- known risks;
- affected project states, roles, or objects;
- monitoring rule;
- rollback version or rollback rule;
- release notes;
- citizen-facing summary where material;
- audit trail.

Relationships:

```text
SystemImplementationChange may implement AdministrativeRuleChange
SystemImplementationChange may implement ProtocolChangeProposal
SystemImplementationChange may affect validators, AI assistance, ranking, fiscalization selection, reputation formulas, or project workflows
SystemImplementationChange is referenced by AuditEvents
```

Rule:

> Software changes must not hide substantive rule changes. When a technical release materially changes governance behavior, the release must reference the governing rule-change object or protocol version.

## Protocol Change Proposal

A visible proposal for changing governing protocol in non-tutored mode.

Attributes:

- proposal id;
- proposing actor or process;
- rule or protocol section affected;
- public reason;
- scope;
- impact analysis;
- review period;
- sandbox or simulation result where required;
- approval method;
- approval result;
- participation record;
- minority objections or dissent summary where relevant;
- implementation date;
- versioned protocol update;
- transition rule;
- rollback path where applicable;
- citizen-facing summary;
- audit trail.

Relationships:

```text
ProtocolChangeProposal may create AdministrativeRuleChange
ProtocolChangeProposal may require SystemImplementationChange
ProtocolChangeProposal updates ProtocolVersion
ProtocolChangeProposal is referenced by AuditEvents
```

Rule:

> Non-tutored protocol change must not be an invisible administrator edit. Core v0 requires a visible proposal, public reason, review, approval path, versioned implementation, and transition rule, while detailed voting mechanics can remain future work.

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
- rule-change object reference where applicable;
- implementation version where applicable;
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
  project modeler proposes commitments and fulfillment evidence needs, validator checks, executor accepts where executing

Fulfillment/control evidence production:
  evidence producers, beneficiaries, observers, executor self-report where allowed and classified by evidence context

Fiscalization:
  fiscalizer

Funding:
  funders, delegates, automatic profiles, phase-specific funding lanes where applicable

Disbursement:
  protocol rules, phase gates, fiscalizer review, custody integration

Complaints:
  complainant triggers, executor/fiscalizer/responders answer, review process resolves

Rule changes:
  tutored authority configures within mandate, non-tutored protocol process approves, technical operator implements approved changes

Audit trail:
  system records, actors cannot erase history
```

## 6. Key relationship rules

- Project is the central object.
- Project version preserves history.
- Project phase groups phase-specific funding, deliverables, verification, and disbursement gates.
- Value thesis connects project to value verification packages, metrics, fulfillment evidence needs, and contextualized evidence.
- Metrics must connect to fulfillment evidence needs and review consequences.
- Fulfillment evidence needs define what should be evidenced without preselecting evidence producers.
- Contextualized evidence items must connect to evidence context and to phase, milestone, metric, fulfillment evidence need, material claim, complaint, or review issue where applicable.
- Fiscalization report connects contextualized evidence to review outcome.
- Responsible fiscalization is assigned through protocol-selected Control Subprojects or fiscalization assignments, while open observation and contextualized evidence production remain broader participation layers.
- Disbursement connects phase, milestone, fulfillment evidence, fiscalization, and money state.
- Complaint can affect project state, milestone state, contextualized evidence state, or disbursement state through a scoped complaint status, admissibility/referral record, blocking condition, systemic pause, competent-authority decision, or final resolution.
- Systemic Pause Record connects an affected scope, trigger, funding boundary, system effect, lifting/escalation rule, and material/legal suspension reference where applicable.
- Administrative Rule Changes, System Implementation Changes, and Protocol Change Proposals must reference affected rules, project states, effective dates, transition rules, and audit events where material.
- Delegation affects funding action authority, not citizen identity.
- Automatic profile affects allocation rule, not delegation.
- Reputation connects signals, reviewed inputs, actors, roles, updates, summaries, and outcomes.
- Audit event records all significant transitions.

## 7. Next use

This map should be used to create:

- entity relationship diagram;
- project lifecycle state diagram;
- funding/disbursement state diagram;
- contextualized evidence/fiscalization diagram;
- complaint resolution diagram;
- delegation diagram;
- role responsibility matrix;
- implementable object schema draft.

## Design rule

> Every important system decision should be expressible as: actor in role performs event on object, causing a state change recorded as audit event.
