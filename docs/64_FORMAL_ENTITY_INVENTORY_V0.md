# Formal Entity Inventory v0

## Purpose

This document starts Phase 2 formal system modeling for the Distributed Governance System v0.

It converts the consolidated narrative map into a formal inventory of actors, roles, objects, policies, records, stateful entities, read models, and audit objects.

It is not yet a database schema, API contract, class model, or implementation specification. It is the baseline that should guide the next entity relationship diagram, state diagrams, responsibility matrix, and future schema draft.

## Status

Accepted as the Phase 2 formal entity inventory baseline.

Source documents:

- `docs/33_DISTRIBUTED_GOVERNANCE_SYSTEM_V0_BLUEPRINT.md`
- `docs/35_CONSOLIDATED_ENTITY_OBJECT_STATE_MAP.md`
- `docs/36_DIAGRAM_INDEX_AND_FLOW_DIAGRAMS_V0.md`
- `docs/37_SCOPE_CLASSIFICATION_MATRIX_V0.md`
- `knowledge/concepts/evidence-context-taxonomy-v0.md`
- `knowledge/concepts/evaluation-context-taxonomy-v0.md`

## Modeling rules

### Rule 1 - Do not confuse actors, roles, and objects

A `Citizen` or `Organization` is an actor. `Executor`, `Fiscalizer`, `Evidence Producer`, `Complainant`, or `Delegate` are roles an actor may hold in a specific context.

Example:

```text
Organization A
-> holds Executor role in Project X
-> holds Evidence Producer role in Project Y
-> has different responsibility, reputation, and conflict treatment in each role.
```

### Rule 2 - Evidence is contextual

Formal modeling should not use bare `Evidence` as an operational object. The technical object is `Contextualized Evidence Item`, and each formal use requires `evidence_context`.

Evidence contexts include:

- Complaint Evidence;
- Fulfillment Evidence;
- Control Evidence;
- Contradiction Evidence;
- Administrative Observability Data;
- Research Evidence.

The same photo, document, testimony, sensor record, or report may be relevant in more than one context, but each formal effect must be separately classified and reviewed.

### Rule 3 - Read models do not create authority

`Performance History Surface`, `Reputation Summary`, and `Assisted Deliberation Context` are citizen-facing or analytical surfaces. They summarize reviewed records. They do not create responsibility, disbursement, suspension, legal effect, or allocation by themselves.

### Rule 4 - Policies and rules are objects when they govern effects

`Threshold Policy`, `Reformulation Policy`, `Complaint Review Policy`, `Allocation Amount Rule`, `Protocol Version`, and rule-change objects should be modeled because they explain why a project moved state, why a document was required, why a complaint became active, or why a funding/disbursement action was valid.

### Rule 5 - Public authorities remain external in controlled scopes

Core v0 treats public authorities as external actors in scopes where they exercise legal, budgetary, regulatory, eligibility, admissibility, fiscal, coercive, oversight, or tutored authority. State-owned or publicly owned operators may be internal `Organization` actors only when eligibility, control, privilege, disclosure, fiscalization, and equal-accountability rules permit it.

## Inventory field guide

Each entity should be evaluated through these fields before schema design:

```text
Type
Purpose
Created or recognized by
Modified by
Stateful?
Key states
Main relationships
Formal effects
Scope classification
Open risks
```

The tables below use compact columns so the inventory remains readable. Detailed attributes remain in `docs/35_CONSOLIDATED_ENTITY_OBJECT_STATE_MAP.md`.

## 1. Actors and external actors

| Entity | Type | Purpose | Created / recognized by | Stateful? | Main relationships / formal effects / risks |
|---|---|---|---|---|---|
| Citizen | Actor | Verified individual participant. | Identity provider or platform registration rule. | Yes | Holds roles such as funder, complainant, delegate, fiscalizer if eligible, evidence producer, beneficiary, or affected party. Formal effects depend on role and action. Risk: privacy, exclusion, identity misuse. |
| Organization | Actor | Verified collective, legal, civic, or service entity. | Registration, verification, eligibility rule. | Yes | May hold proposer, modeler, executor, fiscalizer, evidence producer, delegate, funder, or technical assistant roles. Risk: conflicts, related-party capture, hidden control. |
| Public Authority / External Authority | External actor | Defines or applies legal, regulatory, budgetary, tutored, coercive, fiscal, or oversight authority. | Country implementation or legal framework. | Yes | Issues Governance Resolutions, performs external review, provides identity/treasury/registry infrastructure, or enforces law. It is not an internal competitor in controlled scopes. Risk: hidden judge-and-party control. |
| State-Owned Operator / Public Enterprise | Actor subtype when eligible | Publicly owned or controlled operator that may provide services under equal rules. | Eligibility and C007 boundary review. | Yes | Modeled as `Organization` when eligible. Must disclose ownership/control, privileges, guarantees, and authority relationships. Risk: authority-controlled operator competing inside its own tutored scope. |
| Custodian / Treasury / Financial Custody Provider | External infrastructure actor | Executes protocol-valid financial orders and reports execution blocks. | Country implementation, treasury integration, escrow, bank, insurer, guarantor, or lawful equivalent. | Yes | Executes release, retention, return, reassignment, recovery, guarantee execution, or balance closure. Does not decide civic value or project priority. |
| Allocation Amount Provider | External infrastructure actor | Provides authorized assignable public-purpose amounts without exposing raw sensitive tax or registry data. | Country implementation or authorized public formula. | Yes | Feeds civic wallet/account capacity. Risk: privacy, formula opacity, unauthorized data sharing. |

## 2. Roles

Roles are contextual assignments held by actors. They should be modeled separately from actor identity.

| Role | Type | Purpose | Assigned / accepted by | Stateful? | Main relationships / formal effects / risks |
|---|---|---|---|---|---|
| Proposer | Role | Initiates or sponsors a project proposal. | Actor action and eligibility rule. | Yes | Connects to Project, Project Version, value thesis, disclosures. Risk: exaggerated promises, related-party omission. |
| Modeler / Designer | Role | Produces project design, technical model, phases, budget, or deliverable plan. | Role acceptance; may be same actor as proposer or executor where disclosed. | Yes | Connects to Project Phase, Project Evidential Contract, design deliverables, phase gates. Risk: hidden weak design, omitted requirements. |
| Executor | Role | Accepts delivery responsibility for project execution. | Executor acceptance and eligibility checks. | Yes | Connects to milestones, disbursement, closure, reputation, responsibility events. Risk: self-report capture, underdelivery. |
| Fiscalizer | Role | Performs responsible fiscalization or review. | Protocol-selected assignment, Control Subproject, or eligible offer acceptance. | Yes | Connects to Fiscalization Assignment, Evidence Items, Evaluation Records, Fiscalization Reports. Risk: capture, collusion, poor review. |
| Evidence Producer | Role | Produces fulfillment/control evidence or other contextualized material. | Offer, commitment, mission, voluntary submission, or Control Subproject. | Yes | Connects to Fulfillment Evidence Need, Contextualized Evidence Item, evidence quality review, reputation. Risk: false, low-quality, AI-generated, or irrelevant evidence. |
| Funder | Role | Commits assignable public-purpose resources. | Citizen, delegate, profile, or allowed organization action. | Yes | Connects to Funding Commitment, Civic Wallet, project funding lane. Funding does not prove legitimacy, readiness, or fulfillment. |
| Follower | Role | Observes a project or idea and receives updates. | Citizen action. | Yes | Connects to notifications and visibility. No direct formal project effect. |
| Commenter | Role | Asks questions or comments under identity/visibility rules. | Verified actor action. | Yes | Connects to Comment, protected identity where justified. Does not equal formal complaint or evaluation. |
| Complainant | Role | Files a formal complaint with support material and legal responsibility. | Verified actor action. | Yes | Connects to Complaint, Complaint Evidence, quote, support, funding, admissibility/referral. Risk: abuse or retaliation. |
| Beneficiary | Role / protected subject | Receives intended project value or service. | Project declaration, verified participation, or protected registry where applicable. | Yes | Connects to value thesis, evidence, privacy, feedback, evaluation. Risk: privacy exposure, weak representation. |
| Affected Party | Role / protected subject | May suffer project externalities, antivalues, or common-good impacts. | Project declaration, complaint, observation, or scope rule. | Yes | Connects to Value-Antivalue Profile, complaint, evidence, mitigation. Risk: under-detection. |
| Delegator | Role | Grants scoped action authority to a delegate. | Citizen action. | Yes | Connects to Delegation, civic wallet, reporting. Delegation does not erase citizen identity. |
| Delegate | Role | Acts on delegated participation or allocation scope. | Acceptance and eligibility rule. | Yes | Connects to Delegation, delegated-action reporting, concentration visibility. Risk: capture, opaque influence. |
| Evaluator | Role | Produces or records formal evaluation in a defined context. | Authority, fiscalizer, reviewer, protocol, or qualified role. | Yes | Connects to Evaluation Record. Risk: mixing contexts or effects. |
| Technical Assistant | Role | Helps prepare, validate, translate, or review technical information without becoming decision authority. | Assignment or service relationship. | Yes | Connects to documents, AI assistance, project modeling. Risk: hidden decision power. |

## 3. Core project objects

| Entity | Type | Purpose | Created / modified by | Stateful? | Main relationships / formal effects / risks |
|---|---|---|---|---|---|
| Idea | Object | Public expression of civic demand or project possibility. | Citizen or organization. | Yes | May generate Projects; has support, comments, objections, followers. Not financeable for execution. |
| Project | Core object | Financeable and executable unit of public/social value. | Proposer/modeler; validated by rules. | Yes | Central object connecting phases, value, funding, evidence, fiscalization, complaints, disbursement, closure, reputation. Risk: scope creep. |
| Project Version | Version record | Preserves historical project commitments and changes. | System on material change. | Yes | Connects to Project, Reformulation Proposal, audit trail. Prevents silent value rewrites. |
| Project Phase | Object | Separates staged funding, deliverables, verification, and disbursement gates. | Project modeler/proposer; accepted by executor where applicable. | Yes | Useful for design-and-execution projects. Execution funds may be reserved but not released until phase gate acceptance. |
| Planning Scope | Policy / eligibility object | Defines what kinds of projects are eligible under a public function, pilot, protocol, operating mode, or roadmap. | Protocol, authority in tutored mode, approved roadmap, or country implementation. | Yes | Project must align before execution readiness. Risk: hidden exclusion or discretionary scope control. |
| Primary Responsibility Anchor | Project attribute / classification object | Defines the main public-value outcome for accountability. | Proposer/modeler, validated by policy. | Yes | Connects project to scope, value thesis, evaluation, fiscalization, reputation. Prevents bundled accountability dilution. |
| Threshold Policy | Policy object | Defines proportional conditions for publication, funding, execution readiness, disbursement, closure, review, and burden. | Protocol, project-type rule, authority configuration, or country implementation. | Yes | Determines required documents, fiscalization, guarantees, evidence, support, admissibility. Risk: hidden gatekeeping. |
| Project Variation Record | Change record | Classifies changes as minor correction, operational variation, material value reformulation, or substitutive reformulation. | System/reviewer on change request. | Yes | Connects to project version, reformulation, notifications, responsibility. |
| Reformulation Proposal | Change object | Proposes material modification when original project conditions cannot continue. | Proposer, executor, reviewer, fiscalizer, or protocol path. | Yes | May affect funding, value thesis, evidence, phase, scope, or closure. Risk: weakening promises after support. |
| Reformulation Policy | Policy object | Defines how reformulations are handled. | Protocol, threshold policy, operating mode, or country implementation. | Yes | Controls review, notification, reconfirmation, return, reassignment, rejection. |
| Beneficiary Group | Object | Defines intended beneficiaries and representation/privacy treatment. | Project modeler/proposer; validated where relevant. | Yes | Connects to value thesis, evidence, privacy, evaluation, complaints. |
| Related-Party Conflict Review | Review object | Records declared, detected, alleged, or hidden related-party conflicts. | System, reviewer, fiscalizer, complaint, or disclosure. | Yes | May create warnings, safeguards, reformulation, blocking, rejection, or responsibility review. |

## 4. Value, evidence, and evaluation objects

| Entity | Type | Purpose | Created / modified by | Stateful? | Main relationships / formal effects / risks |
|---|---|---|---|---|---|
| Value Thesis | Project object | Declares what value the project claims to produce, for whom, and how it will be known. | Proposer/modeler; accepted by validation path. | Yes | Connects to Value-Antivalue Profile, metrics, evidence needs, reformulation, closure, reputation. Risk: vague promises. |
| Value-Antivalue Profile | Project object | Defines positive value floors and negative antivalue ceilings. | Proposer/modeler; reviewed by validator/fiscalizer where applicable. | Yes | Connects to metrics, fulfillment/control evidence, mitigation, correction, reputation. Antivalues are not complaints by default. |
| Value Verification Package | Project object | Bridges a value commitment to metrics, qualitative context, evidence needs, source roles, and consequences. | Project modeler/proposer; validated by policy/reviewer. | Yes | Connects Value Thesis to Project Evidential Contract. Risk: metric manipulation or insufficient evidence design. |
| Value Icon | Classification / interface object | Citizen-facing value category or icon. | Catalog/rule, project selection. | Usually no | Supports browsing and explanation. Does not prove value fulfillment. |
| Metric | Measurement object | Defines measurable or reviewable commitment dimension. | Project modeler, catalog, reviewer, or policy. | Yes | Must connect to fulfillment evidence need and review consequences. |
| Project Evidential Contract | Project object / policy-like commitment | Defines how fulfillment will be evidenced. | Project modeler/proposer; validated before execution funding. | Yes | Defines fulfillment/control evidence needs, source roles, corroboration, privacy, review effects. Does not preselect producers. |
| Fulfillment Evidence Need | Requirement object | States what must be evidenced and under what conditions. | Evidential contract, value package, milestone, phase, risk, or policy. | Yes | Evidence producers may offer to satisfy it. Higher priority when contract-matched. |
| Material Information Claim | Claim record | Traceable claim that can affect funding, execution readiness, disbursement, closure, risk, trust, or reputation. | Actor statement, document, project field, or system record. | Yes | Connects to evidence, contradiction, review, responsibility. Risk: hidden material claims. |
| Contextualized Evidence Item | Technical evidence record | Records material submitted or collected with required evidence context. | Evidence producer, executor self-report, beneficiary, affected party, fiscalizer, technical record, or external register. | Yes | Requires `evidence_context`. May support complaint, fulfillment, control, contradiction, observability, or research effects only after review. Risk: false, low-quality, AI-generated, untraceable, or misclassified evidence. |
| Evidence Context | Required classification | Classifies formal use of a Contextualized Evidence Item. | Submitter proposes; reviewer/fiscalizer/protocol confirms for effect. | Yes | Complaint, fulfillment, control, contradiction, administrative observability, or research. Prevents concept mixing. |
| Evaluation Record | Formal review record | Records an evaluation by context, dimension, observability basis, authority/qualification basis, and effect. | Fiscalizer, reviewer, evaluator, competent authority, or protocol-defined body. | Yes | May affect disbursement, closure, responsibility, reputation, correction, or complaint outcome. Risk: mixing soft opinion with formal effect. |
| Verified Discovery | Review-confirmed discovery | Recognizes useful discovery of hidden material information, manipulation, omission, contradiction, or false evidence. | Reviewer/fiscalizer/protocol path after confirmation. | Yes | May create reward, reputation input, correction, complaint, responsibility, or disbursement effects. |

## 5. Funding, disbursement, and custody objects

| Entity | Type | Purpose | Created / modified by | Stateful? | Main relationships / formal effects / risks |
|---|---|---|---|---|---|
| Budget | Financial object | Defines project funding needs. | Project modeler/proposer; validated by rules. | Yes | Connects to funding target, budget lines, control budget, disbursement. |
| Budget Line | Financial detail object | Separates purposes such as execution, control, guarantee, evidence mission, mitigation, or review. | Project modeler/proposer; reviewed where needed. | Yes | Enables lane-specific closure and disbursement. |
| Allocation Amount Rule | Policy object | Defines how assignable public-purpose capacity is calculated. | Country implementation, public formula, protocol, or authority configuration. | Yes | Feeds civic wallet without exposing raw sensitive data. |
| Civic Wallet / Civic Allocation | Allocation account / ledger object | Records non-withdrawable assignable public-purpose capacity. | Allocation provider and platform ledger. | Yes | Supports funding, delegation, automatic profiles. Not private cash. |
| Funding Commitment | Commitment object | Reserves assignable resources for eligible project or control vehicle. | Citizen, delegate, automatic profile, or allowed actor. | Yes | Funding is commitment, not proof of legitimacy, execution readiness, disbursement approval, or fulfillment. |
| Financial Order | Financial instruction | Instructs custodian to release, retain, return, reassign, recover, execute guarantee, or close balance. | Protocol-valid system path after conditions. | Yes | Custodian executes or reports technical/legal block. |
| Financial Assurance Profile | Assurance object | Defines required guarantee or equivalent assurance for execution-financeable project. | Global rule, protocol, admin, operating mode, or lawful implementation. | Yes | Proposer/executor cannot self-select lower guarantee burden. |
| Guarantee Materialization Record | Confirmation record | Confirms that required guarantee or equivalent assurance was materialized. | Custodian, guarantor, insurer, treasury, bank, escrow, or lawful equivalent. | Yes | Required before affected funds are released where assurance applies. |
| Supplemental Control Contribution | Funding object | Supports capped additional control after minimum control closure. | Citizen/delegate/profile funding action. | Yes | May fund one secondary fiscalizer/fiscalization auditor or distinct non-duplicative evidence mission. Must not fund execution. |
| Disbursement Milestone Plan | Financial/control plan | Defines release points, retention rules, partial releases, evidence, and review requirements. | Project modeler/proposer; accepted by rules/executor. | Yes | Connects milestones, evidence, fiscalization, custody. |
| Disbursement | Financial state object | Records controlled release or retention of funds. | Protocol-valid order and custody execution. | Yes | Depends on phase gates, reviewed evidence, fiscalization, blockers, guarantees. |
| Retention | Financial state / amount | Holds back funds pending conditions, correction, closure, or guarantee/recovery rules. | Disbursement policy, fiscalization, complaint, or protocol. | Yes | Protects against incomplete or non-compliant execution. |

## 6. Fiscalization and control objects

| Entity | Type | Purpose | Created / modified by | Stateful? | Main relationships / formal effects / risks |
|---|---|---|---|---|---|
| Fiscalization Requirement | Requirement object | Defines required review/control depth. | Threshold policy, project type, risk, operating mode, protocol. | Yes | Connects to control budget, offers, assignments, evidence needs. |
| Control Subproject | Control object | Models fiscalization, technical review, evidence mission, admissibility review, or other control work. | Protocol or project control package. | Yes | Associated with parent Project. Risk: becoming hidden bureaucracy or executor-captured control. |
| Fiscalizer Offer | Offer object | Discovers cost/methodology for fiscalization or review. | Eligible fiscalizer/reviewer. | Yes | Must be lightweight and unpaid by default until accepted. |
| Fiscalization Assignment | Assignment object | Assigns responsible fiscalization or review work. | Protocol-selected path, accepted offer, Control Subproject. | Yes | Connects actor in fiscalizer role to scope, methodology, budget, deadlines, conflicts. |
| Fiscalization Report | Review output | Consolidates evidence, limitations, findings, and recommended formal effects. | Fiscalizer/reviewer. | Yes | May support Evaluation Records, disbursement, correction, closure, complaint processing, reputation inputs. |

## 7. Complaint, pause, and conflict objects

| Entity | Type | Purpose | Created / modified by | Stateful? | Main relationships / formal effects / risks |
|---|---|---|---|---|---|
| Complaint | Formal review trigger | Identifies alleged issue, affected scope, support material, and complainant responsibility. | Verified complainant. | Yes | Requires support/funding/quote/admissibility rules to activate review. Does not automatically suspend material execution. |
| Complaint Review Policy | Policy object | Defines support threshold, support window, quote deadline, funding, fallback, and review rules. | Protocol, admin, operating mode, or lawful implementation. | Yes | Prevents arbitrary complaint activation. |
| Complaint Review Quote | Quote object | Prices the review work before complaint review starts. | Fiscalizer or competent reviewer. | Yes | Citizens may reserve conditional funding while quote process runs; reserved totals should not bias quote. |
| Complaint Admissibility / Referral Record | Review record | Records whether complaint proceeds after requirements are met and whether referral is needed. | Fiscalizer, reviewer, authority, or court-referral path where applicable. | Yes | May trigger platform-level pauses, blockers, evidence-use restrictions, referral package. Legal/material suspension depends on competent authority where applicable. |
| Systemic Pause Record | Platform effect object | Records scoped pause or blocker inside the system. | Complaint admissibility, fiscalization finding, phase gate failure, authority notice, safety/legal condition, operating-mode suspension, or protocol rule. | Yes | Can affect funding, disbursement, milestones, phase gates, evidence use, closure, or actor actions. Must define scope and lifting/escalation rule. |
| Related-Party Conflict Review | Review object | Also belongs here when conflict is alleged or detected through complaint/control. | Disclosure, system, complaint, reviewer, fiscalizer. | Yes | Can produce safeguards, warnings, independent control, exclusion, blocking, rejection, or responsibility review. |

## 8. Citizen interaction, identity, and signals

| Entity | Type | Purpose | Created / modified by | Stateful? | Main relationships / formal effects / risks |
|---|---|---|---|---|---|
| Support Signal | Civic signal | Reversible positive support for idea or project. | Verified actor. | Yes | Counts as social support where policy uses it. Not funding. Withdrawn support stops counting but remains auditable. |
| Justified Objection Signal | Civic signal | Reversible structured concern that is not a complaint by default. | Verified actor. | Yes | May inform deliberation, review, or later complaint. Active counts exclude withdrawn signals. |
| Comment | Interaction object | Public or protected-identity question/comment. | Verified actor. | Yes | Supports clarification and deliberation. Does not by itself create formal complaint, evaluation, or reputation effect. |
| Protected Identity Request | Privacy/safety object | Requests contextual identity protection for sensitive formal action. | Verified actor, AI-assisted or restricted review where applicable. | Yes | May apply to comments, complaints, evidence, testimony, beneficiary confirmation, affected-party report. Does not create anonymity for formal power. |

## 9. Delegation and allocation objects

| Entity | Type | Purpose | Created / modified by | Stateful? | Main relationships / formal effects / risks |
|---|---|---|---|---|---|
| Delegation | Authority object | Grants scoped participation or allocation authority to a delegate. | Delegator request and delegate acceptance where required. | Yes | Delegation affects action authority, not citizen identity. Risk: concentration, weak reporting, capture. |
| Automatic Allocation Profile | Rule object | Executes predefined allocation preferences for inactive or low-friction participation. | Citizen selection/configuration, protocol default, or eligible profile. | Yes | Must not override active delegation, project eligibility, phase gates, or citizen confirmation rules. |

## 10. Reputation, responsibility, and performance objects

| Entity | Type | Purpose | Created / modified by | Stateful? | Main relationships / formal effects / risks |
|---|---|---|---|---|---|
| Responsibility Event | Responsibility record | Records reviewed breach, correction, founded complaint, evidence correction, or role-specific accountability event. | Evaluation, fiscalization, complaint, closure, or protocol-defined review. | Yes | May affect reputation, future eligibility, disbursement, correction, revocation, or legal referral where applicable. |
| Reputation Signal | Soft context | Visible raw or soft signal with no direct formal effect. | Citizens, beneficiaries, funders, public criticism, raw complaint, AI anomaly, unreviewed evidence. | Yes | May be visible, aggregated, contradicted, or routed into review. Does not directly update reputation. |
| Reputation Input | Reviewed reputation source | Reviewed source that may affect role-specific reputation. | Evaluation, fiscalization, responsibility event, founded complaint, evidence correction, verified discovery. | Yes | Must identify actor, role, source, review basis, severity, appeal/review status. |
| Reputation Update | Formal reputation change | Applies reviewed reputation effect to actor in role. | Reputation system after valid input. | Yes | Must be role-specific and auditable. |
| Reputation Summary | Citizen-facing read model | Summarizes role-specific reputation for navigation. | System-generated from reviewed records. | Yes | Does not create reputation by itself. Risk: over-simplification. |
| Reputation Record | Historical container | Stores role-specific reputation history. | System. | Yes | Supports Reputation Summary and audit. |
| Performance History Surface | Citizen-facing read model | Shows reviewed historical role performance in comparable categories. | System-generated from closure, evaluation, fiscalization, responsibility, reputation, complaint-status, financial-closure, evidence-sufficiency records. | Yes | Does not create automatic allocation, social credit, or universal public-value ranking. |
| Assisted Deliberation Context | Citizen-facing read model | Structures relevant information before material civic action. | System and AI assistance where applicable, based on source-visible records. | Yes | Helps decision quality without deciding, ranking, certifying truth, allocating funds, or suppressing dissent. |

## 11. Governance, operating mode, and system-change objects

| Entity | Type | Purpose | Created / modified by | Stateful? | Main relationships / formal effects / risks |
|---|---|---|---|---|---|
| Operating Mode | Governance state object | Defines how open or moderated a public function is. | Protocol, authority, or country implementation. | Yes | Modes include Closed, Tutored, Semi-open, Open, Suspended. Controls scope, thresholds, review authority. |
| Governance Resolution | Public tutored decision object | Records material tutored-mode decision and reason. | Public authority in configured tutored mode. | Yes | Prevents silent authority discretion; may approve, reject, request reformulation, or interpret scope. |
| Review Timeout Resolution | Public timeout object | Records effect when configured review window expires without authority decision. | System under predeclared timeout policy. | Yes | Avoids indefinite silent blocking. |
| Protocol Version | Rule-version object | Records active rule set governing decisions and state transitions. | Administrative Rule Change, Protocol Change Proposal, or implementation path. | Yes | Important decisions should reference it. |
| Administrative Rule Change | Rule-change object | Records material parameter, threshold, eligibility, review period, guarantee, complaint, funding deadline, or operational rule change. | Authority/admin/protocol path depending on mode. | Yes | Must include reason, scope, effective date, transition rule, audit trail. |
| System Implementation Change | Technical change object | Records software, AI, validator, schema, migration, interface, or algorithmic release with governance relevance. | Technical operator implementing approved rule or release. | Yes | Must not hide substantive governance changes. |
| Protocol Change Proposal | Non-tutored protocol-change object | Proposes visible rule change in non-tutored mode. | Eligible actor or process. | Yes | Requires public reason, review, approval path, implementation, transition rule. |
| Audit Event | Immutable audit record | Records relevant system activity, state transitions, rule references, and actors. | System. | Yes | Base traceability object for all material actions. |

## 12. Primary state groups for modeling

Phase 2 should not force every entity into the same state machine. The first state diagrams should be built around these state groups.

### Project-level states

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

### Evidence item states

```text
Expected
Submitted
Pending review
Accepted for declared context
Accepted only as contextual material
Insufficient for claimed effect
Needs corroboration
Observed
Rejected
Contradicted
Linked to report
Used in verified discovery
```

### Complaint states

```text
Draft
Submitted
Awaiting quote
Awaiting support / review funding
Ready for admissibility review
Admissible
Inadmissible
Referred to competent authority
Under review
Resolved
Abusive or bad-faith finding where reviewed
Closed
```

### Funding and disbursement states

```text
Available
Committed
Reserved
Blocked
Released
Retained
Returned
Reassigned
Recovered
Guarantee executed
Closed
```

### Governance mode states

```text
Closed
Tutored
Semi-open
Open
Suspended
```

## 13. Macul multi-court example

The "Design and Construction of Multi-Courts in Macul" example should map as follows:

| Scenario element | Formal entity treatment |
|---|---|
| The public proposal | `Project` with possible `Project Phases`. |
| Design phase | `Project Phase` with design deliverables, phase gate, accepted reviewer/fiscalizer path, and fulfillment/control evidence requirements. |
| Construction phase funding collected before design approval | `Funding Commitment` or reserved lane; not releasable until design phase gate and control conditions pass. |
| Required public-access rules, dimensions, bathrooms, accessibility, budget | `Value Thesis`, `Value-Antivalue Profile`, `Metric`, `Project Evidential Contract`, `Threshold Policy`, and `Project Phase` requirements. |
| A photo of incomplete courts | `Contextualized Evidence Item` with proposed evidence context. |
| The same photo used in a complaint | `Complaint Evidence` context linked to `Complaint`. |
| The same photo used to verify construction progress | `Fulfillment Evidence` or `Control Evidence` context only after relevant reviewer/fiscalizer accepts it for that effect. |
| Fiscalizer conclusion on design adequacy | `Evaluation Record` and/or `Fiscalization Report`. |
| Complaint admitted after support, quote, and funding | `Complaint Admissibility / Referral Record`, possibly `Systemic Pause Record` inside platform scope. |
| Court-ordered halt | External legal effect; may be referenced by system but is not created by the platform itself unless law grants that power. |
| Final accountability | `Project Closure Accountability Record`, `Responsibility Event`, `Reputation Input`, and `Reputation Update` where reviewed basis exists. |
| Future citizen view of executor | `Performance History Surface` and `Reputation Summary`, derived from reviewed records. |

## 14. Non-entities or non-primary entities in Core v0

The following should not be modeled as primary entities unless a later design step proves they need lifecycle, ownership, state, and formal effects:

| Candidate | Treatment |
|---|---|
| Bare Evidence | Use `Contextualized Evidence Item` with required evidence context. |
| Public/private label | Attribute or eligibility condition, not a sufficient actor classification. |
| Popularity | Signal or aggregate, not proof of value, legitimacy, or fulfillment. |
| AI assistant | Assistance infrastructure or trace; not a civic actor, judge, delegate, fiscalizer, authority, or truth-decider by default. |
| Social support count | Derived aggregate from active `Support Signal` records. |
| Objection count | Derived aggregate from active `Justified Objection Signal` records. |
| Closure label | Procedural state or summary; not automatic reputation effect. |
| Legal sanction or court order | External legal effect; system may record reference and platform consequences but does not create it unless country law grants that power. |
| Universal project score | Out of Core v0. Public value return per peso and advanced benchmarking remain extensions. |

## 15. Open risks for Phase 2

1. Evidence quality validation remains unresolved. The inventory distinguishes evidence context and review effects, but does not yet define a full evidence-quality scoring or authenticity-validation system.
2. Country implementation may add legal entities, appeals, sanctions, or custody details that Core v0 should not over-specify.
3. Formal diagrams may reveal missing intermediate states, especially around complaint review, control assignments, protected identity, and guarantee execution.
4. Read models must remain derived from reviewed records and should not become hidden decision engines.
5. State-owned operators need careful control and privilege modeling in every pilot scope.

## 16. Immediate next use

This inventory should be used to produce:

1. an entity relationship diagram;
2. a project object state diagram with phase substates;
3. a contextualized evidence item state diagram;
4. a complaint evidence and review state diagram;
5. a funding/disbursement state diagram;
6. a control subproject and fiscalization assignment diagram;
7. a responsibility matrix by role.

## Design rule

> A formal entity exists in Core v0 only if it carries responsibility, state, traceability, rule application, formal effect, or necessary citizen-facing explanation that cannot be safely derived from another record.
