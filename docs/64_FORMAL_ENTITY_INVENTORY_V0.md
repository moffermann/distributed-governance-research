# Formal Entity Inventory v0

## Purpose

This document starts Phase 2 formal system modeling for the Distributed Governance System v0.

It converts the consolidated narrative map into a formal inventory of actors, roles, objects, policies, records, stateful entities, read models, and audit objects.

It is not yet a database schema, API contract, class model, or implementation specification. It is the baseline that guides the entity relationship diagram, state diagrams, responsibility matrix, and future schema draft.

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
- Readiness Evidence;
- Fulfillment Evidence;
- Control Evidence;
- Contradiction Evidence;
- Administrative Observability Data;
- Research Evidence.

The same photo, document, testimony, sensor record, or report may be relevant in more than one context, but each formal effect must be separately classified and reviewed.

### Rule 3 - Read models do not create authority

`Performance History Surface`, `Reputation Summary`, and `Assisted Deliberation Context` are citizen-facing or analytical surfaces. They summarize reviewed records. They do not create responsibility, disbursement, suspension, legal effect, or allocation by themselves.

`Project Legitimacy Profile` also does not create authority by itself. It is a threshold-driven project profile that exposes affected-party mapping, consultation evidence, unresolved legitimacy objections, and review routes so funding is not mistaken for approval.

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
| Custodian / Treasury / Financial Custody Provider | External infrastructure actor | Executes protocol-valid financial orders and reports execution blocks. | Country implementation, treasury integration, escrow, bank, insurer, guarantor, or lawful equivalent. | Yes | Executes release, retention, return, reassignment, recovery, guarantee execution, coverage execution, or balance closure. Does not decide civic value, project priority, complaint truth, post-closure responsibility, or reputation. |
| Allocation Amount Provider | External infrastructure actor | Provides authorized assignable public-purpose amounts without exposing raw sensitive tax or registry data. | Country implementation or authorized public formula. | Yes | Feeds civic wallet/account capacity. Risk: privacy, formula opacity, unauthorized data sharing. |

## 2. Roles

Roles are contextual assignments held by actors. They should be modeled separately from actor identity.

| Role | Type | Purpose | Assigned / accepted by | Stateful? | Main relationships / formal effects / risks |
|---|---|---|---|---|---|
| Proposer | Role | Initiates or sponsors a project proposal. | Actor action and eligibility rule. | Yes | Connects to Project, Project Version, value thesis, disclosures. Risk: exaggerated promises, related-party omission. |
| Modeler / Designer | Role | Produces project design, technical model, phases, budget, or deliverable plan. | Role acceptance; may be same actor as proposer or executor where disclosed. | Yes | Connects to Project Phase, Project Evidential Contract, design deliverables, phase gates. Risk: hidden weak design, omitted requirements. |
| Executor | Role | Accepts delivery responsibility for project execution and covered post-closure response where applicable. | Executor acceptance and eligibility checks. | Yes | Connects to milestones, disbursement, closure, Post-Closure Coverage Profile, reputation, responsibility events. Risk: self-report capture, underdelivery, weak post-closure response. |
| Fiscalizer | Role | Performs responsible fiscalization or review, including covered post-closure review where assigned. | Protocol-selected assignment, Control Subproject, or eligible offer acceptance. | Yes | Connects to Fiscalization Assignment, Evidence Items, Evaluation Records, Fiscalization Reports, covered post-closure findings. Risk: capture, collusion, poor review, or mishandled post-closure contradiction. |
| Evidence Producer | Role | Produces fulfillment/control evidence, covered post-closure evidence, or other contextualized material. | Offer, commitment, mission, voluntary submission, or Control Subproject. | Yes | Connects to Fulfillment Evidence Need, producer qualification standard, Contextualized Evidence Item, evidence quality review, reputation. Risk: false, low-quality, AI-generated, technically unfit, or irrelevant evidence. |
| Funder | Role | Commits assignable public-purpose resources. | Citizen, delegate, profile, or allowed organization action. | Yes | Connects to Funding Commitment, Civic Wallet, project funding lane, and post-closure coverage label where surfaced. Funding does not prove legitimacy, readiness, fulfillment, or indefinite platform complaint availability. |
| Follower | Role | Observes a project or idea and receives updates. | Citizen action. | Yes | Connects to notifications and visibility. No direct formal project effect. |
| Commenter | Role | Asks questions or comments under identity/visibility rules. | Verified actor action. | Yes | Connects to Comment, protected identity where justified. Does not equal formal complaint or evaluation. |
| Complainant | Role | Files a formal complaint with support material and legal responsibility. | Verified actor action. | Yes | Connects to Complaint, Complaint Evidence, quote, support, funding, admissibility/referral, and post-closure coverage check where the project is closed. Risk: abuse, retaliation, or confusing expired platform coverage with legal impossibility. |
| Beneficiary | Role / protected subject | Receives intended project value or service. | Project declaration, verified participation, or protected registry where applicable. | Yes | Connects to value thesis, evidence, privacy, feedback, evaluation. Risk: privacy exposure, weak representation. |
| Affected Party | Role / protected subject | May suffer project externalities, antivalues, or common-good impacts. | Project declaration, complaint, observation, or scope rule. | Yes | Connects to Value-Antivalue Profile, complaint, evidence, mitigation. Risk: under-detection. |
| Delegator | Role | Grants scoped action authority to a delegate. | Citizen action. | Yes | Connects to Delegation, civic wallet, reporting. Delegation does not erase citizen identity. |
| Delegate | Role | Acts on delegated participation or allocation scope. | Acceptance and eligibility rule. | Yes | Connects to Delegation, delegated-action reporting, concentration visibility. Risk: capture, opaque influence. |
| Evaluator | Role | Produces or records formal evaluation in a defined context. | Authority, fiscalizer, reviewer, protocol, or qualified role. | Yes | Connects to Evaluation Record. Risk: mixing contexts or effects. |
| Technical Assistant | Role | Helps prepare, validate, translate, or review technical information without becoming decision authority. | Assignment or service relationship. | Yes | Connects to documents, AI assistance, project modeling. Risk: hidden decision power. |

## 3. Core project objects

| Entity | Type | Purpose | Created / modified by | Stateful? | Main relationships / formal effects / risks |
|---|---|---|---|---|---|
| Idea | Object | Public expression of civic demand or project possibility. | Citizen or organization; system-generated renewal signal where configured. | Yes | May generate Projects; has support, comments, objections, followers. Not financeable for execution. A continuity-need Idea may be generated from an expiring continuity-critical or maintenance-dependent project. |
| Project | Core object | Financeable and executable unit of public/social value. | Proposer/modeler; validated by rules. | Yes | Central object connecting phases, value, funding, evidence, fiscalization, complaints, disbursement, closure, post-closure coverage, reputation. Where A006 applies, records continuity risk classification, funded period, future funding dependency, renewal window, wind-down rule, and continuity-need Idea link. Risk: scope creep or hidden ongoing obligations. |
| Project Version | Version record | Preserves historical project commitments and changes. | System on material change. | Yes | Connects to Project, Reformulation Proposal, audit trail. Prevents silent value rewrites. |
| Project Phase | Object | Separates staged funding, deliverables, verification, and disbursement gates. | Project modeler/proposer; accepted by executor where applicable. | Yes | Useful for design-and-execution projects. Execution funds may be reserved but not released until phase gate acceptance. Operational, recurring, or maintenance phases should expose funded period, renewal trigger, and wind-down treatment where applicable. |
| Planning Scope | Policy / eligibility object | Defines what kinds of projects are eligible under a public function, pilot, protocol, operating mode, or roadmap. | Protocol, authority in tutored mode, approved roadmap, or country implementation. | Yes | Project must align before execution readiness. Where essential services are affected, records protected floor, service lane, planning-continuity target, funding-lane treatment, underfunding indicator, and safeguards. Risk: hidden exclusion, discretionary scope control, or silent continuity-target revision. |
| Primary Responsibility Anchor | Project attribute / classification object | Defines the main public-value outcome for accountability. | Proposer/modeler, validated by policy. | Yes | Connects project to scope, value thesis, evaluation, fiscalization, reputation. Prevents bundled accountability dilution. |
| Threshold Policy | Policy object | Defines proportional conditions for publication, funding, execution readiness, disbursement, closure, review, post-closure coverage, and burden. | Protocol, project-type rule, authority configuration, or country implementation. | Yes | Determines required documents, fiscalization, guarantees, post-closure coverage, evidence, support, admissibility, affected-party conditions, and essential-service floor/lane treatment where relevant. Risk: hidden gatekeeping or moving hard obligations into popularity dynamics. |
| Project Variation Record | Change record | Classifies changes as minor correction, operational variation, material value reformulation, or substitutive reformulation. | System/reviewer on change request. | Yes | Connects to project version, reformulation, notifications, responsibility. |
| Reformulation Proposal | Change object | Proposes material modification when original project conditions cannot continue. | Proposer, executor, reviewer, fiscalizer, or protocol path. | Yes | May affect funding, value thesis, evidence, phase, scope, or closure. Risk: weakening promises after support. |
| Reformulation Policy | Policy object | Defines how reformulations are handled. | Protocol, threshold policy, operating mode, or country implementation. | Yes | Controls review, notification, reconfirmation, return, reassignment, rejection. |
| Beneficiary Group | Object | Defines intended beneficiaries and representation/privacy treatment. | Project modeler/proposer; validated where relevant. | Yes | Connects to value thesis, evidence, privacy, evaluation, complaints. |
| Required Evidence Package | Requirement package | Lists mandatory evidence needs before publication, financing, phase acceptance, execution-ready status, disbursement, closure, or responsibility review where policy requires it. | Threshold policy, phase gate, public-function rule, common-good exposure, affected-party exposure, legal/technical condition, operating mode, protocol, or country implementation. | Yes | Applies to projects and phases; may be optionally drafted for ideas. Separate from Project Evidential Contract. Risk: overburdening low-risk projects if not proportional. |
| Required Evidence Need | Requirement object | Defines one mandatory or conditionally mandatory evidence need and its effect if missing. | Required Evidence Package, threshold policy, phase gate, or competent rule source. | Yes | Usually satisfied by Contextualized Evidence Items with Readiness Evidence context. Can gate project effects without proving final fulfillment. |
| Project Legitimacy Profile | Project profile / review surface | Exposes whether a project with affected-party, rights, access, vulnerable-beneficiary, territory-wide, or common-good exposure has required mapping, consultation evidence, unresolved objections, and review routes. | Threshold policy, required evidence package, project modeler input, evidence producers, affected parties, fiscalizer/reviewer, Governance Resolution, or competent authority where applicable. | Yes | Connects to Required Evidence Package, Required Evidence Need, Contextualized Evidence Items with readiness context, Justified Objection Signals, Complaint, Governance Resolution, and Audit Event. Not a vote, veto, popularity score, or proof created by funding. |
| Related-Party Conflict Review | Review object | Records declared, detected, alleged, or hidden related-party conflicts. | System, reviewer, fiscalizer, complaint, or disclosure. | Yes | May create warnings, safeguards, reformulation, blocking, rejection, or responsibility review. |

## 4. Value, evidence, and evaluation objects

| Entity | Type | Purpose | Created / modified by | Stateful? | Main relationships / formal effects / risks |
|---|---|---|---|---|---|
| Value Thesis | Project object | Declares what value the project claims to produce, for whom, and how it will be known. | Proposer/modeler; accepted by validation path. | Yes | Connects to Value-Antivalue Profile, metrics, evidence needs, reformulation, closure, reputation. Risk: vague promises. |
| Value-Antivalue Profile | Project object | Defines positive value floors and negative antivalue ceilings. | Proposer/modeler; reviewed by validator/fiscalizer where applicable. | Yes | Connects to metrics, fulfillment/control evidence, mitigation, correction, reputation. Antivalues are not complaints by default. |
| Value Verification Package | Project object | Bridges a value commitment to metrics, qualitative context, evidence needs, source roles, evidence-coverage status, and consequences. | Project modeler/proposer; validated by policy/reviewer. | Yes | Connects Value Thesis to Project Evidential Contract. Must expose A004 coverage complete / weak / gap / metric gap / under correction states. Risk: metric manipulation or insufficient evidence design. |
| Value Icon | Classification / interface object | Citizen-facing value category or icon. | Catalog/rule, project selection. | Usually no | Supports browsing and explanation. Does not prove value fulfillment. |
| Metric | Measurement object | Defines measurable or reviewable commitment dimension. | Project modeler, catalog, reviewer, or policy. | Yes | Must connect to fulfillment evidence need, coverage status, gaming-risk review, and review consequences. |
| Project Evidential Contract | Project object / policy-like commitment | Defines how fulfillment will be evidenced. | Project modeler/proposer; validated before execution funding. | Yes | Defines fulfillment/control evidence needs, source roles, corroboration, privacy, review effects. Does not preselect producers. |
| Fulfillment Evidence Need | Requirement object | States what must be evidenced to verify value, antivalue, metric, milestone, phase deliverable, material claim, or closure condition after the relevant work or service is performed. | Evidential contract, value package, milestone, phase, risk, declared antivalue, or policy. | Yes | Evidence producers may offer to satisfy it. Higher priority when contract-matched and when the producer, method, metadata, and report satisfy the required standard. Pre-execution consultation evidence belongs to Required Evidence Need / Readiness Evidence unless separately used to verify a performed design-phase deliverable. |
| Evidence Producer Qualification Standard | Requirement / field group | Defines the credential, accreditation, competence, method, instrument/tool, metadata, chain-of-custody, and report requirements for formal evidence tied to a need. | Project Evidential Contract, Fulfillment Evidence Need, Control Subproject, Threshold Policy, protocol, or country implementation. | Yes | Determines whether an evidence producer offer is eligible and whether submitted evidence can support hard KPI, disbursement, closure, reputation, responsibility, complaint referral, or legal-path effects. Risk: over-bureaucratization or expert cartel if applied without proportionality. |
| Material Information Claim | Claim record | Traceable claim, approval label, condition, warning, omission, or limitation that can affect funding, legitimacy, execution readiness, disbursement, closure, complaint review, risk, trust, or reputation. | Actor statement, document, project field, approval record, criterion source, system record, fiscalization report, or verified discovery. | Yes | Connects to evidence, contradiction, review, responsibility, citizen-facing warnings, approval source records, and Layer 5. Risk: hidden material claims or favorable labels without source. |
| Contextualized Evidence Item | Technical evidence record | Records material submitted or collected with required evidence context. | Evidence producer, executor self-report, beneficiary, affected party, fiscalizer, technical record, or external register. | Yes | Requires `evidence_context`. May support complaint, fulfillment, control, contradiction, observability, or research effects only after review. Formal hard-KPI use also requires qualification and method fit where the accepted need demands it. Risk: false, low-quality, AI-generated, untraceable, technically unfit, or misclassified evidence. |
| Evidence Context | Required classification | Classifies formal use of a Contextualized Evidence Item. | Submitter proposes; reviewer/fiscalizer/protocol confirms for effect. | Yes | Complaint, fulfillment, control, contradiction, administrative observability, or research. Prevents concept mixing. |
| Evidence Quality Review | Review field group / record | Classifies whether a contextualized evidence item satisfies producer qualification, method, metadata, provenance, corroboration, and probative-fitness requirements for a specific formal effect. | Fiscalizer, reviewer, competent authority, protocol-defined body, or implementation rule. | Yes | May feed Evaluation Record, Fiscalization Report, disbursement, closure, responsibility, reputation, complaint referral, or no-effect archival. Risk: treating a review label as universal truth rather than effect-specific fitness. |
| Evaluation Record | Formal review record | Records an evaluation by context, dimension, observability basis, authority/qualification basis, evidence-quality basis, and effect. | Fiscalizer, reviewer, evaluator, competent authority, or protocol-defined body. | Yes | May affect disbursement, closure, responsibility, reputation, correction, or complaint outcome. Risk: mixing soft opinion with formal effect. |
| Verified Discovery | Review-confirmed discovery | Recognizes useful discovery of hidden material information, misleading visibility, conditional approval hidden from summaries, manipulation, omission, contradiction, or false evidence. | Reviewer/fiscalizer/protocol path after confirmation. | Yes | May create reward, reputation input, correction, complaint, responsibility, warning, visibility correction, or disbursement effects. |

## 5. Funding, disbursement, and custody objects

| Entity | Type | Purpose | Created / modified by | Stateful? | Main relationships / formal effects / risks |
|---|---|---|---|---|---|
| Budget | Financial object | Defines project funding needs. | Project modeler/proposer; validated by rules. | Yes | Connects to funding target, budget lines, control budget, disbursement. |
| Budget Line | Financial detail object | Separates purposes such as execution, control, guarantee, evidence mission, mitigation, continuity, maintenance, renewal, replacement, wind-down, or review. | Project modeler/proposer; reviewed where needed. | Yes | Enables lane-specific closure and disbursement. Continuity-sensitive lines should state whether they fund the current period, follow-on period, staffing, maintenance, mitigation, or wind-down. |
| Funding Attempt | Funding lifecycle object | Records one bounded attempt to finance a project, project version, phase, or funding lane. | Project publication process; updated by funding commitments, extension policy, expiry, reformulation, republication, or cloning. | Yes | Prevents indefinite commitment lock. Records window start/end, attempt number, target, extension count, outcome, fund treatment, and source attempt where republished or cloned. |
| Allocation Amount Rule | Policy object | Defines how assignable public-purpose capacity is calculated. | Country implementation, public formula, protocol, or authority configuration. | Yes | Feeds civic wallet without exposing raw sensitive data. May distinguish ordinary assignable, default-assigned, reserve-backed, or excluded lanes where the Planning Scope protects essential floors. |
| Budget Liquidity Policy | Optional fiscal policy object | Smooths cyclical allocation capacity against an authorized annual or period budget where lawful. | Country implementation, protocol, or authorized public finance rule. | Yes | Extension v1+ / country implementation. Requires public formula, budget cap, open-commitment stress test, reserve or coverage rule, cycle adjustment, and audit trail. Does not let Treasury choose projects. |
| Civic Wallet / Civic Allocation | Allocation account / ledger object | Records non-withdrawable assignable public-purpose capacity. | Allocation provider and platform ledger. | Yes | Supports funding, delegation, automatic profiles. Not private cash. |
| Funding Commitment | Commitment object | Reserves assignable resources for eligible project, continuity project, phase, idea-derived project, or control vehicle. | Citizen, delegate, automatic profile, or allowed actor. | Yes | Funding is commitment, not proof of legitimacy, execution readiness, disbursement approval, fulfillment, or indefinite service continuity. |
| Financial Order | Financial instruction | Instructs custodian to release, retain, return, reassign, recover, execute guarantee, or close balance. | Protocol-valid system path after conditions. | Yes | Custodian executes or reports technical/legal block. |
| Financial Assurance Profile | Assurance object | Defines required guarantee or equivalent assurance for execution-financeable project. | Global rule, protocol, admin, operating mode, or lawful implementation. | Yes | Proposer/executor cannot self-select lower guarantee burden. For continuity-critical projects, assurance may support replacement, retained future service funds, beneficiary protection, or wind-down where rules allow. |
| Post-Closure Coverage Profile | Coverage object | Defines the post-closure accountability window and coverage source for covered complaints, defects, hidden antivalues, contradictory evidence, correction, mitigation, replacement, or review. | Threshold policy, protocol, operating mode, contract, or country implementation; accepted by executor through direct warranty or equivalent coverage. | Yes | Core v0 minimum. Coverage may be Executor Direct Warranty or equivalent insurance, bond, guarantee, escrow, retention, or lawful coverage. After expiry, ordinary platform claims route externally unless a competent external decision is later recorded. |
| Guarantee Materialization Record | Confirmation record | Confirms that required guarantee or equivalent assurance was materialized. | Custodian, guarantor, insurer, treasury, bank, escrow, or lawful equivalent. | Yes | Required before affected funds are released where assurance applies. |
| Supplemental Control Contribution | Funding object | Supports capped additional control after minimum control closure. | Citizen/delegate/profile funding action. | Yes | May fund one secondary fiscalizer/fiscalization auditor or distinct non-duplicative evidence mission. Must not fund execution. |
| Disbursement Milestone Plan | Financial/control plan | Defines release points, retention rules, partial releases, evidence, and review requirements. | Project modeler/proposer; accepted by rules/executor. | Yes | Connects milestones, evidence, fiscalization, custody. |
| Disbursement | Financial state object | Records controlled release or retention of funds. | Protocol-valid order and custody execution. | Yes | Depends on phase gates, reviewed evidence, fiscalization, blockers, guarantees, and continuity/wind-down conditions where applicable. |
| Retention | Financial state / amount | Holds back funds pending conditions, correction, closure, or guarantee/recovery rules. | Disbursement policy, fiscalization, complaint, or protocol. | Yes | Protects against incomplete or non-compliant execution. |

## 6. Fiscalization and control objects

| Entity | Type | Purpose | Created / modified by | Stateful? | Main relationships / formal effects / risks |
|---|---|---|---|---|---|
| Fiscalization Requirement | Requirement object | Defines required review/control depth. | Threshold policy, project type, risk, operating mode, protocol. | Yes | Connects to control budget, offers, assignments, evidence needs. |
| Control Subproject | Control object | Models fiscalization, technical review, evidence mission, admissibility review, or other control work. | Protocol or project control package. | Yes | Associated with parent Project. Risk: becoming hidden bureaucracy or executor-captured control. |
| Fiscalizer Offer | Offer object | Discovers cost/methodology for fiscalization or review. | Eligible fiscalizer/reviewer. | Yes | Must be lightweight and unpaid by default until accepted. |
| Fiscalization Assignment | Assignment object | Assigns responsible fiscalization or review work. | Protocol-selected path, accepted offer, Control Subproject. | Yes | Connects actor in fiscalizer role to scope, methodology, budget, deadlines, conflicts, eligibility profile, and capture indicators. |
| Fiscalizer Eligibility and Reputation Profile | Derived read model | Shows why a fiscalizer is eligible, eligible with warning, eligible with safeguards, or not eligible for a specific project/control assignment. | System-generated from eligibility criteria, offers, assignments, reports, reviewed performance, relationship declarations, and audit records. | Yes | Contextual to project type, risk, required competence, territory, workload, methodology, and relationships. Not a generic CV, universal score, or automatic selection engine. |
| Fiscalization Report | Review output | Consolidates evidence, limitations, findings, methodology, sufficiency, and recommended formal effects. | Fiscalizer/reviewer. | Yes | May support Evaluation Records, disbursement, correction, closure, complaint processing, responsibility review, reputation inputs, or fiscalizer-quality review. |

## 7. Complaint, pause, and conflict objects

| Entity | Type | Purpose | Created / modified by | Stateful? | Main relationships / formal effects / risks |
|---|---|---|---|---|---|
| Complaint | Formal review trigger | Identifies alleged issue, affected scope, support material, and complainant responsibility. | Verified complainant. | Yes | Requires support/funding/quote/admissibility rules to activate review. Does not automatically suspend material execution. |
| Complaint Review Policy | Policy object | Defines support threshold, support window, quote deadline, post-closure window rule, funding, fallback, and review rules. | Protocol, admin, operating mode, or lawful implementation. | Yes | Prevents arbitrary complaint activation and indefinite ordinary complaint exposure after project closure. |
| Complaint Review Quote | Quote object | Prices the review work before complaint review starts. | Fiscalizer or competent reviewer. | Yes | Citizens may reserve conditional funding while quote process runs; reserved totals should not bias quote. |
| Complaint Admissibility / Referral Record | Review record | Records whether complaint proceeds after requirements are met and whether referral is needed. | Fiscalizer, reviewer, authority, or court-referral path where applicable. | Yes | May trigger platform-level pauses, blockers, evidence-use restrictions, referral package. Legal/material suspension depends on competent authority where applicable. |
| Systemic Pause Record | Platform effect object | Records scoped pause or blocker inside the system. | Complaint admissibility, fiscalization finding, phase gate failure, authority notice, safety/legal condition, operating-mode suspension, or protocol rule. | Yes | Can affect funding, disbursement, milestones, phase gates, evidence use, closure, or actor actions. Must define scope and lifting/escalation rule. |
| Related-Party Conflict Review | Review object | Also belongs here when conflict is alleged or detected through complaint/control. | Disclosure, system, complaint, reviewer, fiscalizer. | Yes | Can produce safeguards, warnings, independent control, exclusion, blocking, rejection, or responsibility review. |

## 8. Citizen interaction, identity, and signals

| Entity | Type | Purpose | Created / modified by | Stateful? | Main relationships / formal effects / risks |
|---|---|---|---|---|---|
| Support Signal | Civic signal | Reversible positive support for an idea, project, or complaint-review activation where policy permits. | Verified actor. | Yes | Counts as social support where policy uses it. Not funding, complaint evidence, fulfillment evidence, evaluation, or reputation input by itself. Withdrawn support stops counting but remains auditable. |
| Justified Objection Signal | Civic signal | Reversible structured concern that is not a complaint by default. | Verified actor. | Yes | May inform deliberation, review, or later complaint. Active counts exclude withdrawn signals. |
| Comment | Interaction object | Public or protected-identity question/comment. | Verified actor. | Yes | Supports clarification and deliberation. Does not by itself create formal complaint, evaluation, or reputation effect. |
| Protected Identity Request | Privacy/safety object | Requests contextual identity protection for sensitive formal action. | Verified actor, AI-assisted or restricted review where applicable. | Yes | May apply to comments, complaints, evidence, testimony, beneficiary confirmation, affected-party report. Does not create anonymity for formal power. |

## 9. Delegation and allocation objects

| Entity | Type | Purpose | Created / modified by | Stateful? | Main relationships / formal effects / risks |
|---|---|---|---|---|---|
| Delegation | Authority object | Grants scoped participation or allocation authority to a delegate. | Delegator request and delegate acceptance where required. | Yes | Delegation affects action authority, not citizen identity. Risk: concentration, weak reporting, capture. |
| Automatic Allocation Profile | Rule object | Executes predefined allocation preferences for inactive or low-friction participation. | Citizen selection/configuration, protocol default, or eligible profile. | Yes | Must not override active delegation, project eligibility, phase gates, citizen confirmation rules, or non-assignable protected floors. Official/default profiles may route assignable funds toward underfunded protected scopes only where the lane and reasons are public. |

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
| Governance Resolution | Public tutored decision object | Records a material tutored-mode decision, rule, reason, reason category where practical, suggested next action, and audit reference. | Public authority or authorized process in configured tutored mode. | Yes | Prevents silent authority discretion and preserves data for later moderation-pattern audit; may approve, reject, request reformulation, require information, interpret scope, or route a configured correction path. |
| Review Timeout Resolution | Public timeout object | Records that a configured review window expired without authority decision and applies the predeclared timeout policy. | System under predeclared timeout policy. | Yes | Avoids indefinite silent blocking; may route to visibility only, escalation, community override, or automatic approval check where configured. |
| Protocol Version | Rule-version object | Records active rule set governing decisions and state transitions. | Administrative Rule Change, Protocol Change Proposal, or implementation path. | Yes | Important decisions should reference it. |
| Administrative Rule Change | Rule-change object | Records material parameter, threshold, eligibility, review period, guarantee, complaint, funding deadline, or operational rule change. | Authority/admin/protocol path depending on mode. | Yes | Must include reason, scope, effective date, transition rule, audit trail. |
| System Implementation Change | Technical change object | Records software, AI, validator, schema, migration, interface, or algorithmic release with governance relevance. | Technical operator implementing approved rule or release. | Yes | Must not hide substantive governance changes. |
| Protocol Change Proposal | Non-tutored protocol-change object | Proposes visible rule change in non-tutored mode. | Eligible actor or process. | Yes | Requires public reason, review, approval path, implementation, transition rule. |
| Audit Event | Immutable audit record | Records actor/process, role context, object, scope, transition, source, rule/version, effect, visibility/privacy treatment, and integrity reference for material activity. | System. | Yes | Base traceability object for all material actions; corrections are linked events, not silent edits. |

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
Expired unfunded
```

### Funding Attempt states

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

### Post-Closure Coverage Profile states

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

### Evidence item states

```text
Expected
Submitted
Context check
Context correction required
Privacy / safety review
Restricted visibility
Pending review
Accepted for declared context
Accepted only as contextual material
Insufficient for claimed effect
Needs corroboration
Observed
Rejected
Contradicted
Linked to report
Used in evaluation record
Used in verified discovery
Archived with no formal effect
Archived with formal effect
```

### Project evidential contract and fulfillment evidence need states

```text
Draft
Completeness check
Needs completion
Under validation
Requires adjustment
Accepted baseline
Published with project
Funding baseline locked
Active for execution
Change proposed
Minor correction
Operational variation
Material reformulation required
Superseded
Closure review
Archived
Closed
Need draft
Need accepted
Open for offers
Contract-matched offer
Out-of-contract offer
Lower-priority eligible
Eligibility / conflict review
Budget pending
Assigned or accepted
Expected evidence
Evidence submitted
Quality review required
Producer qualification/method review required where relevant
Satisfied
Partially satisfied
Needs corroboration
Insufficient
Contradicted
Missed or late
Closed satisfied
Closed rejected
Closed unfunded
Closed with effect
```

### Complaint states

```text
Draft
Submitted
Needs more information
Pending quote
Quote fallback
Support window open
Support threshold not reached
Funding pending
Ready for admissibility review
In admissibility review
Inadmissible
Admitted non-blocking
Admitted with scoped systemic pause
Referred to competent authority
Under review
Actor response
External authority review
External suspension ordered
Correction or mitigation
Final resolution pending
Resolved founded
Resolved unfounded
Resolved partially founded
Closed with no finding
Reopened
Appealed
Abusive or bad-faith finding where reviewed
Closed
```

### Funding and disbursement states

```text
Available
Committed
Reserved
Pending review
Approved for release
Financial order issued
Custodian execution blocked
Paused
Blocked
Retained
Released partially
Released totally
Returned
Reassigned
In recovery
Recovered
Loss recorded
Financial closure pending
Assurance pending
Guarantee materialized
Guarantee insufficient
Guarantee expired
Guarantee executed
Guarantee released
Closed
```

### Control subproject and fiscalization assignment states

```text
Not required
Required by policy
Scope / budget draft
Opportunity open
Offer window open
Eligibility / conflict review
No admissible offer
Package pending funding
Control funding open
Control funding failed
Package selectable
Package selected
Assignment acceptance
Minimum control package closed
Active control
Evidence collection
Report draft
Report submitted
Report accepted
Correction requested
Secondary audit open
Extraordinary review triggered
Replacement required
Control completed
Control failed
Offer draft
Offer submitted
Eligibility check
Rejected eligibility
Conflict review
Rejected conflict
Flagged conflict
Admissible offer
Admissible with safeguards
Selection review
Not selected
Selected primary fiscalizer
Selected secondary auditor
Selected evidence mission
Acceptance pending
Active assignment
Evidence capture
Contextualized evidence submitted
Review work
Report correction required
Finding no blocking effect
Finding requires formal path
Formal path opened
Resigned or removed
Assignment completed
Reputation review
Closed
```

### Delegation and allocation states

```text
Base rule check
Base rule required
Base rule selected
Scope selected
Delegate selected
Concentration disclosed
Request draft
Request sent
Acceptance pending
Accepted
Active
Delegated action recorded
Report queued
Report generated
Rejected
Revoked
Resigned
Expired
Eligibility lost
Base rule resumed
Closed
Automatic profile active
Automatic profile inactive under delegation
Automatic profile skipped by delegation priority
Configured cap disclosed
Full represented weight used
Capped represented weight used
```

### Governance mode states

```text
Closed
Tutored
Semi-open
Open
Suspended
Mode change proposed
Mode change under review
Mode change rejected
Mode change resolution issued
Transition rule published
Submitted for tutored review
Review window open
Governance resolution issued
Review timeout resolution issued
Timeout policy effect pending
Visibility only
Escalated
Community override open
Automatic approval check
Approved for publication
Rejected
Reformulation requested
Additional information required
Outside scope
Closed with no opening
```

### Governance resolution and review timeout resolution states

```text
Decision expected
Draft resolution package
Field completeness check
Needs correction
Published governance resolution
Timeout detected
Timeout completeness check
Published timeout resolution
Timeout policy effect pending
Citizen audit open
Clarification requested
Clarification answered
Appeal or correction path open
Correction or reversal issued
Escalated
Community override open
Automatic approval check
Closed
Aggregated for observability
```

### Audit event schema and lifecycle states

```text
Capture requested
Context resolved
Rule attached
Source and effect attached
Visibility / privacy assigned
Completeness check
Capture incomplete
Append ready
Appended immutable
Citizen projection generated
Layer 5 available
Observability updated
Export snapshot linked
Corrective event linked
Capture abandoned
```

## 13. Macul multi-court example

The "Design and Construction of Multi-Courts in Macul" example should map as follows:

| Scenario element | Formal entity treatment |
|---|---|
| The public proposal | `Project` with possible `Project Phases`. |
| Design phase | `Project Phase` with design deliverables, phase gate, accepted reviewer/fiscalizer path, Required Evidence Package, and fulfillment/control evidence requirements where the design phase itself has deliverables to fulfill. |
| Construction phase funding collected before design approval | `Funding Commitment` or reserved lane; not releasable until design phase gate and control conditions pass. |
| Required public-access rules, dimensions, bathrooms, accessibility, budget | `Value Thesis`, `Value-Antivalue Profile`, `Metric`, `Project Evidential Contract`, `Threshold Policy`, Required Evidence Package, and `Project Phase` requirements. |
| Required neighbor consultation, affected-party map, plan presentation, permits, or compatibility documents before construction | `RequiredEvidenceNeed` satisfied by `Contextualized Evidence Item` with `Readiness Evidence` context. |
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
| Participation-equity indicator | Not a Core v0 primary entity. A009 is handled through Threshold Policy requirements, Project Legitimacy Profile status, Required Evidence Package needs, protected identity, delegation concentration visibility, participation-support project disclosures, AuditEvents, and optional administrative observability. Advanced participation-gap or inclusion analytics remain Extension v1+ or country implementation. |
| Delegation-concentration stress threshold | Not a Core v0 primary entity. A010 is handled through existing Delegation and DelegatedActionRecord fields, represented-weight warnings, configured cap references, delegated-action reports, related-party and participation-support disclosures, AuditEvents, and administrative observability. Advanced delegation-network analysis, anti-cluster detection, or concentration dashboards remain Extension v1+ or country/administrator observability. |
| Tutored moderation abuse test | Not a Core v0 primary entity. A011 is handled through GovernanceResolution, ReviewTimeoutResolution, OperatingMode, PlanningScope, authority/operator relationship disclosures, AuditEvents, and basic administrative observability. Formal abuse tests, citizen-facing moderation-pattern dashboards, automatic possible-abuse findings, and advanced operator-concentration analytics remain Extension v1+ or country/administrator observability. |
| Complexity budget | Not an entity. A012/P007 is an editorial discipline applied at design and review time, enforced through this inventory's cannot-be-safely-derived test, ThresholdPolicy-triggered proportional burden, and minimum viable low-risk paths. Quantitative complexity metrics, object-count ceilings, and implementation-cost models remain Extension v1+ or future implementation. |
| Related-party relationship graph | Not a Core v0 primary entity. A014 is expressed through existing `RelatedPartyConflictReview`, role and supplier declarations, ProjectPhase gates, FiscalizationAssignment, disbursement blockers, responsibility events, reputation, and AuditEvents, with severity-based escalation for hidden or control-relevant relationships; the same graph serves A018 collusion observability. Beneficial-ownership verification, corporate-registry integration, and relationship-graph analytics remain Extension v1+ or country implementation. |
| Common-good charter / registry | Not a Core v0 entity. A015 is handled through the existing common-good impact declaration, ValueAntivalueProfile, evidence needs, and fiscalization as a minimum sufficiency test rather than a charter entity or registry; charter creation, charter voting, and platform common-good adjudication remain Extension v1+, and expert conflicts route externally. |
| Incumbent-resistance indicator | Not an entity. A016 is read from existing OperatingMode, PlanningScope, GovernanceResolution, ReviewTimeoutResolution, and administrative observability records as minimum incumbent-resistance indicators rather than a resistance entity or enforcement authority; Core v0 adds no mechanism that compels institutional transition or protects the migrated budget share, and resistance-pattern analytics and cross-country comparisons remain Extension v1+ or country/administrator observability. |
| Disbursement-gaming test | Not an entity; a validation discipline over existing disbursement objects. A017 binds through DisbursementMilestonePlan, ProjectPhase, BudgetLine, FinancialAssuranceProfile, GuaranteeMaterializationRecord, FiscalizationReport, and Disbursement: milestone linkage, protected advance payment, designer/modeler responsibility review for avoidably weak milestone design, fiscalizer release justification, and citizen-facing separation of funding, reservation, release, retained funds, and guarantee status. Per-project actuarial guarantee calibration and automated milestone-design scoring remain Extension v1+ or country implementation. |
| Collusion pattern indicator | Not an entity; observability over the A014 relationship-and-control graph and existing review objects. A018 reads from the same A014 graph reused across roles and suppliers, FiscalizationAssignment history, VerifiedDiscovery, ResponsibilityEvent, and AuditEvents: repeated actor-cluster visibility across projects, timing-anomaly and outcome-pattern review surfaces feeding human review, independent corroboration for critical milestones, and cross-role responsibility events where collusion is confirmed. Automated collusion detection, network-analysis scoring, and investigative capability remain Extension v1+ or country observability, and off-platform coordination can remain invisible. |
| Allocation Mandate | Not a Core v0 primary entity. A019 is a versioned record on `PlanningScope` naming the mandate source (statute, ordinance, referendum, or delegated authority), the legal instrument authorizing budget migration, the migrated share, the allocation-amount formula version with an explicit flag and authority when it departs from equal-per-citizen, and effective dates with version history, distinct from `AdministrativeRuleChange` and with AuditEvents on every change. The platform records and exposes external authorization; mandate construction, validation, and adjudication remain external constitutional law and country implementation. |
| Fiscal Commitment Profile | Not a Core v0 primary entity. A021 is a versioned record on `PlanningScope` carrying migrated percentage, indexation rule, delivery-latency target, and cycle horizon, whose changes are governance events with reason, magnitude, affected scopes, and beneficiary impact and carry AuditEvents. Fiscal-reliability indicators — expected-versus-actual delivery of signed balances, order-to-execution latency, an unexecuted-valid-order indicator, and a real-value-preservation warning — are read from custody and `FinancialOrder` records rather than a new entity. The platform records and surfaces fiscal behavior; appropriation locks, statutory indexation, and enforceable budget floors remain external law and country implementation. |
| Duty-of-Care Anchor | Not a Core v0 primary entity. A033 is a pre-disbursement record on the execution-financeable project naming the solvent, reachable legal person or persons answerable to third parties for physical and safety harm (executor, guarantor, insurer, or designated responsible operator), exposed on the citizen-facing sheet and validated before Disbursement. It ties to `FinancialAssuranceProfile` and Post-Closure Coverage third-party liability coverage where Threshold Policy requires, to the responsibility matrix's internal-obligation versus victim-liability distinction, and to a court-usable harm-attribution package in AuditEvents rather than a new liability entity. The platform records the duty-bearer and provisions coverage; liability apportionment and doctrinal construction remain external law and country implementation. |
| Control-supply density indicator | Not a Core v0 primary entity. A022 is observability over existing objects: eligible fiscalizers and evidence producers per scope, offer rates, fee levels, and repeat-assignment concentration read from `PlanningScope`, Control Subproject selection, and `FiscalizationAssignment` records, with a thin-market indicator surfaced before publication and priced compensation for weak verification through existing guarantee terms. Thin-market handling routes are a disclosed country-implementation choice; verifier training, accreditation subsidies, and market-building remain Extension v1+ or country implementation, and the platform cannot conjure suppliers where none exist. |
| Open-mode deployment gate | Not an entity. A023 is a deployment precondition over `OperatingMode` and the C019 `ProtocolChangeProposal` procedural shell rather than a meta-governance object: no public function may exit into open mode until constitutional-level decision mechanics are resolved and published, while the C019 shell stays binding in every mode. The open-mode amendment mechanics — tiered protocol-rule levels, a non-self-amending amendment rule, default entrenchment, and vote-participation metrics — remain undefined by design and are future constitutional work. |
| Salience-bias indicator | Not a Core v0 primary entity. A024 is observability above the essential floor: funding per category against declared `PlanningScope` need weights across salient-versus-non-salient and preventive-versus-remedial lanes, read from citizen funding and automatic allocation profiles, the default allocation rule, and the discovery surface, with underfunded-need indicators. The non-assignable pool and essential floors (A005) remain the structural answer for catastrophic tails; preference correction, welfare functions, and portfolio rebalancing beyond a disclosed default weighting remain Extension v1+ or planning-scope governance. |
| Engagement-decay metric | Not a Core v0 primary entity. A025 is measurement fed into the existing H054 functional transition maturity object: per-cycle shares of manual, profile-driven, delegated, and untouched-default allocation as versioned public metrics, active-core concentration across cycles, and a cadence-fatigue review, read from automatic allocation profiles, delegation, and the default allocation rule, with citizen-facing legitimacy language distinguishing considered choice from carry-over. Participation quotas, engagement targets, cohort-refresh, and sampling remain Extension v1+, and measurement does not by itself reverse decay. |
| Identity-provider failure-mode record | Not a Core v0 primary entity and not a detection engine. A026 adds declared failure modes (compromise, coercion, outage, wrongful exclusion), compromise-response procedures, and purpose-bound access auditing over existing verified identity, protected identity (C014/C024), the complaint flow, and AuditEvents on every act-to-identity access, with a heightened adversarial de-anonymization threshold for complaints against powerful actors. Verified identity is preserved as the anti-Sybil baseline (P004); provider-independent anomaly detection, federation, and substitution remain Extension v1+, and the residual single-point-of-failure risk's ultimate mitigation is jurisdictional. |

## 15. Open risks for Phase 2

1. Evidence producer qualification and method fit are now required for formal hard-KPI evidence, but detailed quality scoring, authenticity validation, AI-generation detection, credential registry integration, calibration checks, and fraud detection remain future implementation or country-implementation work.
2. Country implementation may add legal entities, appeals, sanctions, or custody details that Core v0 should not over-specify.
3. Formal diagrams may reveal missing intermediate states, especially around complaint review, control assignments, protected identity, and guarantee execution.
4. Read models must remain derived from reviewed records and should not become hidden decision engines.
5. State-owned operators need careful control and privilege modeling in every pilot scope.

## 16. Immediate next use

This inventory has now produced:

1. the Phase 2 entity relationship and state/sequence/schema diagram set;
2. the responsibility matrix by role;
3. the implementable object schema draft.

The next use is Phase 3 architecture attack and stress testing, not another automatic expansion of Core v0.

## Design rule

> A formal entity exists in Core v0 only if it carries responsibility, state, traceability, rule application, formal effect, or necessary citizen-facing explanation that cannot be safely derived from another record.
