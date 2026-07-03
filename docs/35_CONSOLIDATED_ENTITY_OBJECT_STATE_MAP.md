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
- concessionaire;
- state-owned or publicly owned operator where eligible under the active C007 boundary;
- other recognized organization.

Core v0 organizations are internal eligible collective actors. Public authorities are external legal, budgetary, auditing, regulatory, tutored-scope, or infrastructure actors for any scope they control. State-owned or publicly owned operators may be internal organizations only when the active rules classify them as eligible, ownership/control relationships are declared, and no authority privilege or judge-and-party conflict exists.

An organization may act as:

- proposer;
- modeler;
- executor;
- fiscalizer;
- evidence producer;
- delegate;
- funder where rules allow;
- technical assistant.

### Public Authority / External Authority

A public authority is external to the internal actor set in Core v0 for any scope in which it exercises legal, budgetary, regulatory, eligibility, admissibility, tutored, fiscal, adjudicative, coercive, or oversight power.

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

### State-Owned Operator / Public Enterprise

A state-owned operator, public enterprise, municipally owned company, public utility, or publicly controlled service company is not automatically the same as a public authority.

It is represented as an `Organization` when eligible.

Additional attributes:

- public ownership percentage or control basis;
- controlling public authority or ownership chain;
- board appointment or management control relationships;
- subsidy, guarantee, treasury, or debt-backstop relationships;
- regulatory privileges, exclusive rights, concession rights, or permit advantages;
- relationship to any authority that defines Planning Scope, eligibility, admissibility, fiscalization, disbursement, sanctions, or tutored review for the same scope.

Rule:

> A state-owned operator may participate internally only when it acts as an ordinary accountable operator under equal rules. In tutored mode, an operator controlled by the same authority that defines scope or admissibility is excluded by default.

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
- source project or expiring continuity project reference where generated from a continuity renewal window;
- continuity need, funding gap, or service-interruption risk where applicable;
- current status;
- audit trail.

Key relationships:

```text
Idea may generate many Projects
Idea may be generated from an expiring Project or ProjectPhase
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
- Project Legitimacy Profile where required;
- active support count;
- active justified objection count;
- funding target;
- funding deadline;
- active FundingAttempt reference;
- funding attempt history;
- reformulation policy or policy reference;
- variation control history;
- threshold policy or policy reference;
- Financial Assurance Profile;
- Post-Closure Coverage Profile where execution funding is allowed;
- Continuity Risk Classification where applicable;
- minimum funded service period where applicable;
- maintenance, staffing, or operation obligation where applicable;
- future funding dependency warning where applicable;
- renewal alert date or trigger where applicable;
- beneficiary protection and wind-down rule where applicable;
- continuity-need Idea reference where generated;
- closure conditions;
- Project Closure Accountability Record where applicable;
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
Project has one RequiredEvidencePackage where required
Project has many RequiredEvidenceNeeds
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
Project has many FundingAttempts
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
Project has one PostClosureCoverageProfile where execution funding is allowed
Project may generate or reference one or more continuity-need Ideas
Project may have one ProjectClosureAccountabilityRecord
Project has many AuditEvents
Project has one current State
```

Continuity-risk rule:

> A project that is recurring, continuity-critical, emergency, or maintenance-dependent should not be treated as a one-time project. It should expose the funded service period, future funding dependency, staffing or maintenance obligation, beneficiary-protection rule, wind-down rule, renewal window, and continuity-need Idea path where applicable. The renewal path creates visibility and competition; it does not automatically extend the current executor.

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
- essential service protection status where relevant;
- protected guarantee floor where relevant;
- planning-continuity target, planning period, and interruption tolerance where relevant;
- service-provision lane classification: citizen-assignable, default-assigned, reserve-backed, non-assignable, or excluded;
- underfunding indicator for protected low-visibility needs where relevant;
- cream-skimming or vulnerable-beneficiary safeguard references where relevant;
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
PlanningScope may be affected by Essential Service Protection rules
```

Rule:

> Core v0 requires active planning-scope alignment for financeable projects. It does not define the full distributed construction of national, regional, communal, or thematic roadmaps.

Essential-service rule:

> Where a scope affects essential guarantees, continuity, emergency capacity, redistribution, vulnerable beneficiaries, universal access, or low-visibility groups, it should separate the protected public/legal guarantee floor from the distributed service-provision lane. The service lane may remain open to eligible providers, but the minimum floor or planning-continuity target should not depend only on monthly popularity.

Tutored-mode rule:

> In tutored mode, the authority may define or interpret the active Planning Scope, but material scope decisions must be public, versioned, and auditable under C020.

Planning-continuity change rule:

> A change in government, authority, protocol, or operating mode may revise an essential planning target only through a public, versioned, auditable Governance Resolution, Administrative Rule Change, or equivalent trace.

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
- producer qualification and method standard where the metric requires formal technical proof;
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
- affected-party visibility, mapping, and consultation;
- essential service protection where the scope affects essential guarantees or continuity;
- protected floor, reserve-backed, default-assigned, non-assignable, or distributed service-lane treatment where applicable;
- tutored-scope review;
- complaint or blocking-condition clearance.

Rule:

> Thresholds are proportional project conditions, not a universal approval formula. The citizen surface shows what is missing; the audit layer shows why the condition applies and who or what rule defined it.

Anti-self-classification rule:

> The proposer, designer, or executor may describe project facts, but must not self-select a lower threshold, burden profile, risk class, or guarantee requirement when that classification reduces obligations.

Document rule:

> AI and rules may help discover required documents, but document acceptability is validated only by the competent authority, independent reviewer, certifier, fiscalizer, or protocol-defined review body where the active policy requires it.

## Required Evidence Package

A project-level or phase-level package listing evidence that must exist before a project effect can occur.

This package is separate from the Project Evidential Contract. The evidential contract defines how promised value and antivalues will be verified. The required evidence package defines what must be submitted, reviewed, or corroborated before publication, financing, phase acceptance, execution-ready status, disbursement, closure, or responsibility review where the active policy requires it.

For `Idea` objects, a required evidence package may be drafted or recommended to help mature the idea into a project, but lack of project-level readiness evidence should not block the existence of the idea itself.

Attributes:

- package id;
- project or project phase;
- idea reference where optional pre-project maturation applies;
- source policy: Threshold Policy, phase gate, public-function rule, common-good exposure, affected-party exposure, legal/technical condition, operating mode, protocol version, or country implementation;
- required evidence need references;
- current completeness status;
- reviewer, fiscalizer, authority, or corroboration path where applicable;
- citizen-facing missing-condition labels;
- audit trail.

Relationships:

```text
RequiredEvidencePackage belongs to Project or ProjectPhase
RequiredEvidencePackage may reference Idea for optional maturation
RequiredEvidencePackage references ThresholdPolicy
RequiredEvidencePackage contains RequiredEvidenceNeeds
RequiredEvidencePackage may affect ProjectLegitimacyProfile
RequiredEvidencePackage may gate publication, funding, phase acceptance, execution-ready status, disbursement, closure, or responsibility review
```

Rule:

> Every project should have the required evidence package selected by its active policy before material project effects apply. Ideas may carry optional readiness drafts, but project-level mandatory evidence applies when an idea becomes a project or project phase.

## Required Evidence Need

A mandatory or conditionally mandatory evidence requirement selected by policy before a project effect can occur.

Attributes:

- need id;
- package reference;
- target object: idea draft, project, project version, project phase, design package, budget line, common-good asset, affected scope, or authority route;
- required evidence context, usually `Readiness Evidence`;
- requirement category: affected-party mapping, community consultation, plan review, technical document, permit/compatibility, common-good safeguard, vulnerable-beneficiary safeguard, risk/antivalue baseline, financial assurance confirmation, or other policy-defined category;
- expected source role or corroboration path;
- whether executor/proposer self-report is enough or independent corroboration is required;
- timing and deadline;
- effect if missing or insufficient;
- privacy or protected-identity constraints;
- audit trail.

Relationships:

```text
RequiredEvidenceNeed belongs to RequiredEvidencePackage
RequiredEvidenceNeed may be satisfied, weakened, contradicted, or left unresolved by ContextualizedEvidenceItems with readiness context
RequiredEvidenceNeed may be reviewed by Fiscalizer, Reviewer, Evidence Producer, Competent Authority, or protocol-defined role
RequiredEvidenceNeed may inform ProjectLegitimacyProfile
```

Rule:

> Required evidence is not automatically fulfillment evidence. A community consultation record, reviewed plan, permit document, affected-party map, or common-good safeguard can block execution-ready status as Readiness Evidence without proving final value fulfillment.

Affected-party rule:

> Where a project has rights, access, vulnerable-beneficiary, territory-wide, common-good, or high affected-party exposure, the active Threshold Policy should require proportional affected-party mapping and consultation evidence. This condition may require nearby-project notification, observation windows, field visits, plan presentation, community meetings, surveys, neighborhood documentation, independent evidence-producer input, fiscalizer review, or competent-authority trace. It is not a universal vote or veto.

## Project Legitimacy Profile

A traceable project profile showing whether funding, support, affected-party mapping, consultation evidence, planning-scope alignment, objections, complaints, and authority or reviewer routes are coherent enough for the project's current stage.

This is not a plebiscite, veto object, popularity score, or source of legal authority. It aggregates and exposes legitimacy-relevant conditions already governed by Threshold Policy, Required Evidence Package, contextualized readiness evidence, affected-party observations, justified objections, complaints, Governance Resolutions, competent-authority traces, and audit events.

Attributes:

- project;
- project version;
- territory and affected scope;
- affected-party map or map reference;
- affected-party basis: beneficiaries, neighbors, users, non-users, vulnerable groups, public-access users, common-good asset users, regulated or legally affected parties;
- rights, access, public guarantee, vulnerable-beneficiary, common-good, or territory-wide exposure;
- required affected-party mapping or consultation Readiness Evidence needs;
- submitted affected-party mapping, consultation, survey, meeting, field-visit, plan-review, or asynchronous observation Readiness Evidence;
- neighborhood-organization evidence producer references where applicable;
- independent corroboration or fiscalizer/reviewer reference where required;
- unresolved legitimacy objections;
- related Planning Scope review, complaint, Governance Resolution, or competent-authority route;
- citizen-facing status label;
- audit trail.

Relationships:

```text
ProjectLegitimacyProfile belongs to Project
ProjectLegitimacyProfile references ThresholdPolicy
ProjectLegitimacyProfile references RequiredEvidencePackage where required
ProjectLegitimacyProfile may reference RequiredEvidenceNeed
ProjectLegitimacyProfile may reference ContextualizedEvidenceItem with readiness context
ProjectLegitimacyProfile may reference JustifiedObjectionSignal
ProjectLegitimacyProfile may reference Complaint
ProjectLegitimacyProfile may reference GovernanceResolution
ProjectLegitimacyProfile may reference AuditEvent
```

Rule:

> Funding complete, support count, delegation weight, or discovery visibility do not establish legitimacy by themselves. A project may be fully funded while its Project Legitimacy Profile still shows affected-party issue pending, community consultation evidence pending, public access condition unresolved, Planning Scope dispute, or competent-authority route required.

Community evidence rule:

> A neighborhood association, community board, or similar local organization may act as an evidence producer where eligible, but it does not automatically represent every affected resident. Its evidence remains contextualized, inspectable, contestable, and complemented by asynchronous individual participation through nearby-project discovery, follow, comments, justified objections, affected-party observations, or complaints.

A009 participation-equity boundary:

> Core v0 does not add a separate participation-equity entity. Low participation, missing voices, or concentration should not be treated as automatic vetoes or proof of illegitimacy unless the active Threshold Policy makes the relevant affected-party mapping, consultation, observation, or readiness evidence a formal condition. Participation gaps are otherwise warnings, assisted-deliberation context, administrative observability, or future policy inputs.

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
- producer qualification standards for formal evidence needs where relevant;
- method, instrument, calibration, validation, chain-of-custody, metadata, and report requirements where relevant;
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
- continuity risk classification where the phase carries ongoing service, maintenance, emergency, or operation obligations;
- phase funded service period and renewal trigger where applicable;
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
ProjectPhase may generate or reference a continuity-need Idea
ProjectPhase may generate AuditEvents
```

Rule:

> Project phases are used when a project needs phase-specific funding, deliverables, verification, or disbursement gates. Small low-risk projects may have one implicit phase.

Design-and-execution rule:

> If a parent project combines design and execution, execution funding may be collected in parallel but remains reserved or conditionally committed until the required design phase is accepted. Construction or execution disbursement cannot occur against an unaudited design.

Continuity phase rule:

> If a phase is operational, recurring, maintenance-dependent, or continuity-critical, its funding lane should state the service period it covers, whether follow-on financing is required, what happens if no follow-on project closes funding, and whether a renewal Idea should open before the phase ends.

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
- evidence-coverage matrix for value floors, formal secondary values, antivalue ceilings, material value claims, and relevant metrics;
- coverage status: complete, weak, gap, metric gap, or under correction;
- metric-gaming risk notes and unmeasured value dimensions;
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

Rule:

> A value verification package should pass an A004 evidence-coverage check before funding and formal effects. The check asks which fulfillment/control evidence is necessary to verify each declared value floor, formal secondary value, antivalue ceiling, material value claim, and relevant metric. It is not a fixed count of evidence items by project size.

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
- covered value floor, formal secondary value, antivalue ceiling, or material claim;
- coverage status: covered, weakly covered, gap, or under correction;
- gaming risk note: how the metric could be satisfied while defeating the value;
- validation status;
- fulfillment status.

Rule:

> Each core metric should identify what fulfillment evidence need can verify it. The project defines the fulfillment evidence need, source role, producer qualification standard, and method standard where relevant, but should not preselect the independent evidence producer.

Rule:

> A metric is weak when it can be satisfied while leaving an accepted value dimension, beneficiary experience, affected-party impact, or antivalue ceiling unverified.

## Fulfillment Evidence Need

A predefined need for fulfillment/control evidence linked to a value floor, antivalue ceiling, metric, material claim, milestone, phase, risk, or declared antivalue.

A fulfillment evidence need is not the same as an evidence item and is not a preselected evidence producer. It states what must be evidenced, by what kind of source role or corroboration path, with what producer qualification and method standard where relevant, and under what review conditions.

Attributes:

- need id;
- project;
- project version;
- related value thesis or value verification package;
- related value floor, antivalue ceiling, metric, material claim, milestone, phase, risk, or declared antivalue;
- evidence coverage role: primary, corroborating, experiential, affected-party, contradiction, or supplemental;
- fulfillment evidence type expected;
- expected source role or corroboration path;
- producer qualification standard: credential, certification, license, accreditation, institutional competence, experience, or protocol-defined expertise where relevant;
- method or protocol required;
- instrument, tool, calibration, validation, or chain-of-custody requirement where applicable;
- required metadata and report discipline;
- probative fitness target: disbursement, phase acceptance, closure, reputation input, responsibility event, complaint referral, legal-path support, or no formal effect;
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
FulfillmentEvidenceNeed may define or reference EvidenceProducerQualificationStandard
FulfillmentEvidenceNeed may be satisfied, weakened, contradicted, or left unresolved by EvidenceItems with fulfillment context
```

Rule:

> A hard KPI is not satisfied by any evidence item merely because the item is independent from the executor. If the need requires technical or professional proof, the evidence producer must be idoneous for that measurement and the method, instruments, metadata, and report must satisfy the accepted standard.

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
- continuity reserve, renewal, maintenance, or wind-down budget where applicable;
- Financial Assurance Profile reference;
- eligible execution budget basis for guarantee calculation;
- current version.

## Budget Line

Attributes:

- category;
- amount;
- justification;
- phase where applicable;
- continuity purpose where applicable: current service period, follow-on period, maintenance, staffing, renewal, replacement, mitigation, or wind-down;
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
- budget lane treatment: assignable, default-assigned, reserve-backed, non-assignable, or excluded where applicable;
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

Essential-service boundary:

> A civic wallet allocates only the assignable lane. Protected floors, reserve-backed continuity needs, and non-assignable common-pool functions remain governed by the active Planning Scope, Allocation Amount Rule, Threshold Policy, or country implementation.

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
- funding lane treatment: ordinary assignable, default-assigned, reserve-backed, protected-floor complement, or excluded where applicable;
- continuity label where the commitment covers only an initial service period, maintenance gap, renewal window, or continuity-need Idea;
- funding attempt reference;
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

Continuity funding rule:

> A funding commitment to a continuity-sensitive project should preserve whether it funds the current period, a follow-on period, a maintenance obligation, a wind-down/mitigation action, or a continuity-need project generated from an Idea. Citizens should not be led to believe they funded indefinite service when the commitment covers only a bounded period.

Funding-window rule:

> A funding commitment should reference the active FundingAttempt where applicable. If the attempt expires unfunded before release, eligible unused commitments return, reassign, or follow the citizen's selected/default rule. This is not ordinary voluntary withdrawal.

## Funding Attempt

A lightweight record for one attempt to finance a project, project phase, project version, or funding lane.

Attributes:

- project;
- project version;
- project phase or funding lane where applicable;
- target amount;
- attempt number;
- window start;
- window end;
- extension policy or policy reference;
- extension count;
- maximum extension count or exhaustion rule where configured;
- support and funding progress snapshot;
- readiness, blocker, and material-warning snapshot where relevant;
- outcome;
- fund-treatment result;
- republished-from, cloned-from, or source-attempt reference where applicable;
- audit trail.

States:

```text
Funding open
Funding target reached
Extended
Expired unfunded
Reformulation required
Republished
Cloned into new project
Closed
```

Relationships:

```text
FundingAttempt belongs to Project, ProjectVersion, ProjectPhase, or funding lane
FundingAttempt has many FundingCommitments
FundingAttempt may reference ReformulationPolicy or extension policy
FundingAttempt may produce FinancialOrders for return, reassignment, or balance closure
FundingAttempt may reference source FundingAttempt when republished or cloned
FundingAttempt records AuditEvents
```

Rule:

> A financeable lane cannot remain open indefinitely. If the active FundingAttempt fails to reach financing closure within its visible window, the project or lane becomes Expired Unfunded unless a bounded extension or reformulation route applies.

Budget-liquidity boundary:

> FundingAttempt expiry is Core v0. Budget Liquidity Smoothing is optional Extension v1+ or country implementation and must use public, capped, stress-tested fiscal rules rather than hidden virtual money.

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
- continuity replacement, wind-down, or beneficiary-protection conditions where applicable;
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

Continuity assurance rule:

> For continuity-critical projects, assurance may support replacement, transition, compensation, retained future service funds, or wind-down protection if the executor abandons service, funding renewal fails, or a follow-on provider is needed under the active rule.

Core v0 guarantee rule:

```text
required guarantee =
eligible execution budget or phase budget * global guarantee percentage
```

The global percentage is configured by the administrator, active protocol, operating mode, or lawful country implementation rule, not by the proposer, designer, or executor.

## Post-Closure Coverage Profile

A project-level or phase-level object defining whether and how post-closure issues can be reviewed, corrected, mitigated, paid for, or routed after project closure.

This is distinct from the Financial Assurance Profile. Financial assurance protects execution funding and recovery. Post-closure coverage defines the accountability window and coverage source after the project has been closed by the responsible fiscalization and closure path.

Attributes:

- profile id;
- project;
- project phase or covered scope where applicable;
- Threshold Policy or policy reference;
- post-closure accountability window start;
- post-closure accountability window end;
- coverage mechanism: Executor Direct Warranty or Equivalent Insurance / Bond / Coverage;
- coverage provider or responsible actor;
- covered dimensions: defects, value floors, antivalue ceilings, public access, safety, service quality, continuity, or other configured dimensions;
- excluded dimensions;
- response deadline;
- review or fiscalization path;
- correction, mitigation, replacement, insurance, guarantee, or external-route rule;
- coverage amount, cap, or limitation where applicable;
- link to FinancialAssuranceProfile, GuaranteeMaterializationRecord, insurance, bond, escrow, retention, or lawful equivalent where applicable;
- status;
- citizen-facing summary;
- audit trail.

States:

```text
Draft
Required
Pending coverage confirmation
Active
Post-closure review active
Correction or mitigation required
Coverage executed
Expired
External route only
Closed
```

Relationships:

```text
PostClosureCoverageProfile belongs to Project
PostClosureCoverageProfile may belong to ProjectPhase
PostClosureCoverageProfile references ThresholdPolicy
PostClosureCoverageProfile may reference FinancialAssuranceProfile
PostClosureCoverageProfile may require GuaranteeMaterializationRecord, insurance, bond, escrow, retention, or equivalent coverage
PostClosureCoverageProfile may generate post-closure ComplaintReviewPolicy effects
PostClosureCoverageProfile may produce EvaluationRecords, ResponsibilityEvents, ReputationInputs, FinancialOrders, or external-route records
PostClosureCoverageProfile records AuditEvents
```

Rule:

> Every execution-financeable project should declare post-closure coverage before execution readiness or final closure. Coverage may be provided as an Executor Direct Warranty or as equivalent insurance, bond, guarantee, escrow, retention, or lawful coverage. The proposer, designer, or executor cannot self-select a weaker warranty period, coverage scope, or coverage mechanism when the active Threshold Policy requires more.

Post-closure complaint rule:

> After project closure, ordinary platform complaints are accepted only within the active post-closure accountability window and only for covered dimensions. After the window expires, ordinary claims should route to external legal, regulatory, contract, court, or competent-authority channels. A final external decision may later be recorded where the active rule allows responsibility, reputation, or historical-correction effects.

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

A statement, approval label, condition, warning, omission, or limitation that can affect funding, legitimacy, execution readiness, disbursement, closure, complaint review, risk evaluation, beneficiary trust, or reputation.

Material information claims may originate in the platform, a project field, a proposer statement, a technical design, a procurement or investment document, a municipal or sector review, an environmental approval, a fiscalization report, a contextualized evidence item, a verified discovery, or another source record. Current institutional approval paths may remain external, but their material outputs should become source-linked claims when they shape citizen-facing decisions.

Attributes:

- project;
- claim text or structured value;
- responsible actor;
- responsible actor role;
- source record, approval record, criterion source, or authority/reviewer reference where applicable;
- approval scope, condition, date, version, or limitation where applicable;
- affected object: value thesis, metric, fulfillment evidence need, beneficiary group, budget line, milestone, contextualized evidence item, complaint, fiscalization report, risk, antivalue, or relationship declaration;
- supporting evidence references with context;
- contradiction, justified objection, complaint, or review references;
- AI anomaly reference where applicable;
- current review status;
- citizen visibility status;
- material warning status;
- incentive or obligation context for the responsible role;
- payment, disbursement, reputation, correction, revocation, or responsibility consequence references where applicable;
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
Approved with conditions
Material warning visible
Source linked
Insufficient for claimed effect
Reviewed for formal effect
Withdrawn
```

Rule:

> Material claims are not hidden technical trivia. They are the accountable statements that connect project promises, contextualized evidence, incentives, contradictions, review, responsibility, verified discovery, and consequences.

Visibility rule:

> If an `approved`, `almost funded`, `execution-ready`, `recommended`, or AI-generated summary label depends on a material claim, the citizen-facing surface should expose the source category and unresolved warning state in compact form, while Layer 5 preserves the full record.

## Evidence Item

A piece of material used to verify, contradict, or evaluate a project, complaint, control task, material claim, or administrative observability issue.

For formal modeling, this should be read as a `Contextualized Evidence Item`. A bare evidence item is only a technical record. Its formal use depends on required `evidence_context`, source role, review status, corroboration, and the specific effect being claimed.

Attributes:

- project;
- project phase where applicable;
- evidence context (required): complaint, fulfillment, control, contradiction, administrative observability, or research;
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
- traceability metadata status where relevant;
- sufficiency status for the claimed formal effect;
- limitation statement where relevant;
- verified discovery reference where applicable;
- AI anomaly reference where applicable.

Rule:

> Executor-submitted material is self-reported support unless corroborated. Critical milestones, disbursements, and closures require fulfillment evidence produced or corroborated by evidence producers, fiscalizers, verified beneficiaries, technical records, or other non-executor sources. Where the metric requires technical proof, the producer and method must satisfy the applicable qualification standard. Complaint evidence may trigger or support review, but it does not become fulfillment evidence unless accepted for that purpose by the responsible reviewer, fiscalizer, competent authority, or protocol rule.

Context rule:

> The same material may be relevant in more than one evidence context, but each formal use must be separately classified and reviewed. A photo, document, testimony, sensor record, or report should not produce complaint, fulfillment, control, contradiction, reputation, disbursement, or closure effects merely because it exists in the archive.

States:

```text
Expected
Submitted
Pending review
Accepted for declared context
Accepted only as contextual material
Insufficient for fulfillment effect
Needs corroboration
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
- related Project Closure Accountability Record where applicable;
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
EvaluationRecord may reference ProjectClosureAccountabilityRecord
EvaluationRecord may contribute to ReputationInput after review
```

Rule:

> Formal evaluation is dimension-scoped and effect-scoped. A person may be a valid evaluator for one dimension and not for another. Soft public signals may be visible and useful, but they should not directly release funds, close projects, sanction actors, or update role-specific reputation without the relevant review path.

## Verified Discovery

A review-confirmed discovery of material hidden information, false or manipulated contextualized evidence, KPI manipulation, undeclared conflict, material omission, misleading visibility, conditional approval hidden from citizen-facing summaries, or relevant contradiction.

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
- required evidence producer qualifications and method standards;
- supplemental fulfillment evidence need count or scope where applicable;
- secondary fiscalizer slot: none, open, filled, closed;
- selection model: rotation, random, semi-random among admissible offers, technical/economic scoring, reinforced review, or configured rule;
- observation or offer window where applicable;
- report count;
- control budget;
- expertise needed;
- eligibility criteria for fiscalizer assignment;
- contextual performance criteria where relevant;
- capture indicator rule;
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
- fiscalizer eligibility and reputation profile reference where applicable;
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
- comparable-project experience;
- current workload;
- dependency concentration or repeat-relationship disclosure;
- project-specific eligibility basis;
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
- eligibility and reputation profile reference;
- scope;
- reports required;
- relationship declarations;
- conflict review result;
- capture warning status;
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

## Fiscalizer Eligibility and Reputation Profile

A contextual read model that explains why a fiscalizer is eligible, eligible with warnings, eligible only with safeguards, or not eligible for a specific project, phase, milestone, complaint review, or control subproject.

It is not a generic CV, universal reputation score, or automatic selection engine. It is derived from project-specific eligibility criteria, reviewed fiscalization history, relationship declarations, report quality records, and source-linked audit records.

Attributes:

- target project, phase, milestone, complaint, or control subproject;
- fiscalizer actor and role assignment;
- assignment type considered: primary fiscalizer, secondary fiscalizer, fiscalization auditor, technical reviewer, or control reviewer;
- eligibility criteria source: Threshold Policy, Fiscalization Requirement, Control Subproject, protocol rule, operating mode, or country implementation rule;
- required expertise, credentials, competence, territorial/logistics capacity, availability, current workload, methodology fit, budget fit, independence requirement, and risk-tier suitability;
- eligibility result: eligible, eligible with warning, eligible with safeguards, requires secondary audit, or not eligible;
- contextual reputation basis: comparable project type, public function, territory, risk tier, technical domain, actor role reviewed, and data sufficiency status;
- prior comparable assignments;
- report completeness history;
- timeliness history;
- later-confirmed findings;
- corrected, contradicted, overturned, or insufficient reports;
- repeat relationships by proposer, modeler/designer, executor, evidence producer, supplier, territory, and holding group;
- dependency concentration;
- declared conflicts and detected relationship warnings;
- safeguards required: observation window, stronger evidence requirement, secondary fiscalizer, fiscalization audit, non-related reviewer, replacement, or rejection;
- source records: FiscalizationOffers, FiscalizationAssignments, FiscalizationReports, EvaluationRecords, ResponsibilityEvents, ReputationInputs, ReputationSummaries, RelatedPartyConflictReviews, AuditEvents;
- citizen-facing summary;
- audit trail.

States:

```text
Draft
Generated
Needs review
Eligible
Eligible with warning
Eligible with safeguards
Not eligible
Superseded
```

Rule:

> A fiscalizer may be excellent in one domain and ineligible for another. Fiscalizer reputation must be contextual to the assignment, comparable project type, risk tier, and required competence rather than reduced to a generic score.

## Fiscalization Report

A fiscalizer's review output.

Attributes:

- project;
- milestone;
- fiscalizer;
- related evaluation records;
- fulfillment evidence considered;
- evidence producer qualification and method-fit findings where relevant;
- evidence rejected or excluded;
- fulfillment evidence limitations or unresolved contradictions;
- scope;
- methodology;
- conflicts and limitations declared;
- metric evaluation;
- conclusion;
- observations;
- disbursement recommendation;
- formal effect claimed;
- report sufficiency status;
- closure accountability reference where the report supports final closure;
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
- continuity period, renewal window, or wind-down reference where applicable;
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

## Project Closure Accountability Record

The final traceable record that aggregates what the project promised, what was evidenced, what was reviewed, what remained unproven, what happened to the money, and which role-specific consequences followed.

Attributes:

- project;
- project version;
- project phase where applicable;
- Planning Scope reference;
- Primary Responsibility Anchor;
- Value-Antivalue Profile reference;
- Project Evidential Contract version;
- promised value floors;
- declared antivalue ceilings;
- metrics and qualitative commitments;
- expected fulfillment/control evidence;
- submitted fulfillment/control evidence;
- evidence accepted, rejected, contradicted, insufficient, or accepted only as contextual material;
- EvaluationRecords by dimension;
- FiscalizationReport final reference;
- technical, financial, beneficiary, affected-party, or authority reviews where applicable;
- unresolved observations, complaints, contradictions, systemic pauses, or limitation statements;
- financial closure: released, retained, returned, reassigned, recovered, or guarantee-executed funds;
- post-closure coverage result where applicable: executor warranty active, equivalent coverage active, coverage executed, coverage expired, or external route only;
- continuity result where applicable: renewed, follow-on Idea opened, follow-on project linked, replacement pending, wind-down completed, or continuity gap unresolved;
- closure outcome: fulfilled, partially fulfilled, unfulfilled, revoked, expired, or reformulated into new version;
- Responsibility Events where reviewed responsibility is established;
- Reputation Inputs or no-reputation-effect findings;
- citizen-facing explanation;
- audit trail.

Relationships:

```text
ProjectClosureAccountabilityRecord belongs to Project
ProjectClosureAccountabilityRecord references ProjectVersion
ProjectClosureAccountabilityRecord references ValueAntivalueProfile
ProjectClosureAccountabilityRecord references ProjectEvidentialContract
ProjectClosureAccountabilityRecord references EvidenceItems
ProjectClosureAccountabilityRecord references EvaluationRecords
ProjectClosureAccountabilityRecord references FiscalizationReports
ProjectClosureAccountabilityRecord may reference PostClosureCoverageProfile
ProjectClosureAccountabilityRecord may reference Disbursements and FinancialOrders
ProjectClosureAccountabilityRecord may feed continuity renewal Ideas
ProjectClosureAccountabilityRecord may create or reference ResponsibilityEvents
ProjectClosureAccountabilityRecord may create or reference ReputationInputs
ProjectClosureAccountabilityRecord may feed PerformanceHistorySurface
```

Rule:

> A project cannot close as fulfilled if its main commitments are not supported by sufficient, reviewed, traceable fulfillment/control evidence.

Insufficient evidence is not proof of fraud by itself, but it is also not proof of fulfillment. It may be accepted only as contextual material, trigger a correction window, require corroboration, retain funds, block closure for the affected scope, or support a later responsibility review when a role obligation was breached.

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
- concentration stress-warning status, where applicable;
- concentration threshold rule reference, where applicable;
- report-sufficiency status for high-concentration delegation, where applicable;
- material related-delegate, support-provider, or related-project disclosure references;
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

A010 stress-threshold rule:

> Delegation-concentration stress thresholds are derived warning, reporting, disclosure, and observability rules over existing records. High concentration may trigger represented-weight warnings by scope/action type, report-sufficiency status, material related-delegate/support-provider/project disclosures, and cap-effect visibility where configured. Core v0 should not create a separate concentration authority, universal hard cap, or new primary entity for this purpose.

Delegated-action weight rule:

> If a delegate acts inside an active delegation scope, the action represents the delegate and all delegators covered by that scope by default. The represented weight, scope, and any configured cap effect must be visible in the action record, delegated-action reports, and observability metrics.

Budget delegation rule:

> Budget delegation should not become active unless the citizen has a selected base allocation profile or fallback rule. If delegation ends, that previously selected rule resumes for future allocation.

Delegated-action reporting rule:

> Delegated-action reports should be generated primarily from the audit trail. Delegates may add explanations, but Core v0 should not depend on heavy manual report writing for delegators to understand delegated actions or revoke future authority.

Delegation compensation rule:

> Delegation does not create automatic payment, commission, or a percentage of delegated civic allocation in Core v0. Participation-support work may be funded only as separate transparent projects under ordinary project rules.

Personal AI guide boundary:

> A personal AI guide is not a delegate, cannot accept delegation, cannot hold represented weight, and cannot act as a civic actor. It may help a citizen understand or prepare delegation choices only as assistance.

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

Personal AI guide boundary:

> A personal AI guide may help the citizen configure, understand, or revise an automatic allocation profile, but the executed allocation rule is the profile. The AI guide is not itself an automatic allocation profile or hidden allocation authority.

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

## Performance History Surface

Citizen-facing read model over reviewed historical performance.

This is not a new formal decision object. It does not create responsibility, reputation, disbursement, closure, suspension, or allocation effects by itself. It summarizes reviewed records so citizens can inspect an actor's past role performance before funding, supporting, delegating, selecting, or reviewing a project.

Attributes:

- actor;
- visible role;
- comparison context: role, public function or domain where available, project size or procedural burden where available, risk or regulated status where relevant, territory or operating mode where relevant;
- completed projects count;
- partially fulfilled, unfulfilled, revoked, expired, or reformulated project counts;
- milestone reliability category;
- value-floor fulfillment category;
- antivalue-ceiling compliance category;
- evidence sufficiency pattern;
- financial closure pattern: released, retained, returned, recovered, reassigned, or guarantee-executed funds where applicable;
- correction or mitigation responsiveness;
- severe responsibility events visible separately;
- Reputation Summary reference;
- data sufficiency or confidence status;
- source links.

Role-specific category examples:

- executor: completion outcomes, milestone reliability, budget closure, correction responsiveness, severe responsibility events;
- modeler or designer: accepted design deliverables, rework, phase-gate approval record, material design omissions found after review;
- fiscalizer: timeliness, review completeness, weak-evidence correction record, findings later confirmed, corrected, contradicted, or overturned;
- fiscalizer contextual profile: eligibility result, comparable-project history, report sufficiency, repeat relationships, dependency concentration, and safeguard history for a specific assignment;
- evidence producer: qualification-fit rate, accepted evidence rate, insufficient evidence rate, metadata completeness, method adequacy, corroboration usefulness, material corrections after review.

Relationships:

```text
PerformanceHistorySurface belongs to Actor
PerformanceHistorySurface is scoped by Role
PerformanceHistorySurface reads ProjectClosureAccountabilityRecords
PerformanceHistorySurface reads EvaluationRecords
PerformanceHistorySurface reads FiscalizationReports
PerformanceHistorySurface reads ResponsibilityEvents
PerformanceHistorySurface reads ReputationSummaries
PerformanceHistorySurface reads final or procedurally classified Complaint outcomes
PerformanceHistorySurface may link to Layer 5 source records
```

Rule:

> Performance history is generic and comparable by role. It should not create an unbounded public history for every value label declared by every project.

Specific value floors, antivalue ceilings, metrics, fulfillment/control evidence items, and closure records remain auditable through source links. The ordinary citizen-facing surface should expose compact comparable categories and visible data limits. It should not become a universal public-value-per-currency score, a popularity ranking, a social-credit mechanism, or an automatic allocation rule.

## Assisted Deliberation Context

Citizen-facing read model that structures context before a material civic action.

This is not a decision object, ranking object, truth-certification object, moderation object, or allocation object. It does not create formal effects by itself. It summarizes relevant project information, source categories, dissent, risk, and unresolved limitations so citizens can decide with better context.

Typical trigger actions:

- funding a project;
- supporting a project;
- creating a justified objection;
- delegating allocation power;
- selecting or configuring an allocation profile;
- offering fiscalization or fulfillment/control evidence;
- funding complaint review;
- reviewing material reformulation where citizen review is applicable.

Attributes:

- project or civic object;
- decision context: funding, support, objection, delegation, complaint review funding, reformulation review, control offer, or other material action;
- why consider this items;
- what to review carefully items;
- dissent, alerts, or unresolved issue items;
- source category for each material item;
- source record references;
- AI-generated summary or warning flag where applicable;
- correction, contradiction, or supersession status;
- data limitations;
- citizen-facing explanation;
- audit trail.

Relationships:

```text
AssistedDeliberationContext belongs to Project or other civic object
AssistedDeliberationContext may reference ValueAntivalueProfile
AssistedDeliberationContext may reference ProjectEvidentialContract
AssistedDeliberationContext may reference EvidenceItems
AssistedDeliberationContext may reference EvaluationRecords
AssistedDeliberationContext may reference FiscalizationReports
AssistedDeliberationContext may reference Complaints
AssistedDeliberationContext may reference ProjectClosureAccountabilityRecords
AssistedDeliberationContext may reference PerformanceHistorySurface
AssistedDeliberationContext may reference Comments or JustifiedObjectionSignals
AssistedDeliberationContext may reference RelatedPartyDeclarations
AssistedDeliberationContext may reference AI assistance traces
```

Rule:

> Assisted deliberation structures decision context. It should not decide, rank, certify truth, allocate funds, suppress dissent, or replace citizen judgment.

Every material item should expose whether it is claimed, self-reported, corroborated, reviewed, disputed, contradicted, insufficient, corrected, unresolved, or AI-generated where applicable.

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
- minimum moderation-audit data for tutored decisions;
- history.

## Governance Resolution

A public civic object recording a material tutored-mode decision.

Attributes:

- resolution id;
- related project or request;
- public function;
- operating mode;
- decision type;
- decision result;
- responsible authority or authorized process;
- responsible official or role, where legally publishable;
- decision date;
- rule or eligibility criterion applied;
- plain-language reason;
- standardized rejection reason category, where practical;
- suggested next action;
- appeal or correction path, if configured;
- citizen-facing summary;
- public comments, support, objections, follows, or clarification requests;
- status;
- audit trail reference.

A011 boundary:

> Governance Resolution and Review Timeout Resolution should preserve the data needed for later tutored-moderation pattern audit: decision result, reason category where practical, Planning Scope, rule/version, responsible authority/process, dates, review time, timeout status, suggested next path, AuditEvent reference, and known authority-linked operator relationships. Core v0 does not create a separate `TutoredModerationAbuseTest`, abuse score, citizen-facing pattern dashboard, or platform-level reversal authority.

## Review Timeout Resolution

A public civic object created when a tutored review window expires without authority decision.

Attributes:

- timeout resolution id;
- related project or request;
- public function;
- operating mode;
- submission date;
- review deadline;
- days elapsed;
- responsible authority or process;
- configured timeout policy;
- automatic consequence, if any;
- citizen-facing summary;
- public comments, support, objections, follows, or clarification requests;
- status;
- audit trail reference.

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

- event id;
- event type;
- occurred timestamp;
- recorded timestamp;
- actor or system process;
- role, delegation basis, authority context, or automatic-process basis;
- object type;
- object id;
- affected scope;
- previous state or previous material value, where applicable;
- new state or new material value, where applicable;
- transition label;
- changed fields reference where applicable;
- source record reference;
- rule, threshold policy, operating mode, or protocol version applied;
- rule-change object reference where applicable;
- implementation version where applicable;
- material AI assistance reference where applicable;
- contextualized evidence item and evidence context where applicable;
- material information claim reference where applicable;
- governance resolution or review timeout resolution reference where applicable;
- financial, responsibility, or reputation effect reference where applicable;
- discovery visibility reason where applicable;
- effect type;
- effect scope;
- effect status;
- visibility tier;
- privacy classification;
- protected identity request reference where applicable;
- previous event or integrity reference where applicable.

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
Expired unfunded
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
Open project → Expired unfunded
Open project → Revoked
Paused → Revoked
Requires reformulation → Closed
Expired unfunded → Closed
```

## 5. Responsibility matrix summary

The dedicated responsibility matrix baseline lives at `docs/65_RESPONSIBILITY_MATRIX_BY_ROLE_V0.md`.

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
  evidence producers, beneficiaries, observers, executor self-report where allowed and classified by evidence context; hard KPI evidence requires qualified producers and adequate methods where the accepted need requires it

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
- Fulfillment evidence needs define what should be evidenced, which source roles may produce or corroborate it, and what producer qualification/method standard applies where relevant, without preselecting named evidence producers.
- Contextualized evidence items must connect to evidence context and to phase, milestone, metric, fulfillment evidence need, material claim, complaint, or review issue where applicable.
- Fiscalization report connects contextualized evidence to review outcome.
- Responsible fiscalization is assigned through protocol-selected Control Subprojects or fiscalization assignments, while open observation and contextualized evidence production remain broader participation layers.
- Disbursement connects phase, milestone, reviewed fulfillment/control evidence, fiscalization, and money state.
- Complaint can affect project state, milestone state, contextualized evidence state, or disbursement state through a scoped complaint status, admissibility/referral record, blocking condition, systemic pause, competent-authority decision, or final resolution.
- Systemic Pause Record connects an affected scope, trigger, funding boundary, system effect, lifting/escalation rule, and material/legal suspension reference where applicable.
- Administrative Rule Changes, System Implementation Changes, and Protocol Change Proposals must reference affected rules, project states, effective dates, transition rules, and audit events where material.
- Delegation affects funding action authority, not citizen identity.
- Automatic profile affects allocation rule, not delegation.
- Reputation connects signals, reviewed inputs, actors, roles, updates, summaries, and outcomes.
- Audit event records all significant transitions.

## 7. Next use

This map has been used to create the current Phase 2 formalization baseline:

- formal entity inventory;
- entity relationship diagram;
- project lifecycle state diagram;
- funding/disbursement state diagram;
- contextualized evidence item state diagram;
- project evidential contract / fulfillment evidence need diagram;
- fiscalization and control subproject diagram;
- complaint evidence and complaint resolution diagram;
- delegation diagram;
- responsibility matrix baseline;
- implementable object schema draft.

The next use is Phase 3 stress testing: attack the architecture for failure modes, capture vectors, weak incentives, and unresolved objections.

## Design rule

> Every important system decision should be expressible as: actor in role performs event on object, causing a state change recorded as audit event.
