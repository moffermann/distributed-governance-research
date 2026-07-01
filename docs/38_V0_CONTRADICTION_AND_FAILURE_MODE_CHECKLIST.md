# v0 Contradiction and Failure-Mode Checklist

## Purpose

This document starts the first systematic attack on the Distributed Governance System v0.

The goal is not to defend the model. The goal is to look for contradictions, hidden authority, unresolved design gaps, abuse paths, failure modes, and places where two parts of the architecture may be pulling in different directions.

## Status

Accepted as v0 contradiction and failure-mode checklist.

This checklist is intentionally unfinished. It should be used as a working instrument: each item can later be marked as resolved, accepted risk, deferred, country implementation, extension, or fatal to v0.

## Review principle

> A good architecture is not the one with no objections. It is the one that makes its objections visible, classifies them honestly, and resolves the ones that threaten the core model.

## Severity labels

```text
Critical
High
Medium
Low
```

## Status labels

```text
Open
Partially resolved
Resolved
Accepted risk
Deferred to v1+
Country implementation
Out of scope
```

## Core contradiction test

For every issue, ask:

```text
1. Does this contradict another part of Core v0?
2. Does this create hidden authority?
3. Does this allow uncontrolled money movement?
4. Does this weaken evidence, fiscalization, or auditability?
5. Does this make citizen simplicity impossible?
6. Does this create incentives for capture or collusion?
7. Does this depend on country law rather than system architecture?
8. Does this belong in v0 or should it be deferred?
```

---

# A. Resolved contradictions and accepted v0 rules

This section preserves the original contradiction checklist as a traceable integration surface. C001-C025 are now resolved through dedicated resolution documents. Remaining work is propagation, stress testing, and identification of residual risks, not reopening the decisions unless explicitly requested.

## C001 — Open project with no executor vs no execution financing without executor

**Severity:** High
**Status:** Resolved
**Resolution document:** `docs/39_IDEA_ENTITY_NAVIGATION_AND_C001_RESOLUTION.md`

### Accepted v0 rule

Do not model executorless public proposals as project states. Model them as a separate `Idea` entity.

> Ideas capture demand. Projects execute responsibility. Financing applies to projects, not ideas.

---

## C002 — Fiscalizer offer flow vs executor cannot choose fiscalizer

**Severity:** High
**Status:** Resolved
**Resolution document:** `docs/40_CONTROL_SUBPROJECTS_AND_C002_RESOLUTION.md`

### Accepted v0 rule

Fiscalization may be structured as a project-like `Control Subproject` with budget, methodology, deliverables, evidence, comments, auditability, and reputation. It is not selected by ordinary popularity or by the executor. Selection follows a protocolized, risk-adjusted process based on eligibility, conflict checks, technical/economic criteria, and auditability.

---

## C003 — Evidence can be produced by interested actors

**Severity:** High
**Status:** Resolved
**Resolution document:** `docs/46_EVIDENCE_PRODUCERS_AND_C003_RESOLUTION.md`

### Accepted v0 rule

Create and use the `Evidence Producer` role. Executor self-report is useful context, but critical milestones, disbursements, and closures require evidence produced or corroborated by evidence producers, fiscalizers, verified beneficiaries, technical records, or other non-executor sources.

---

## C004 — Blocking complaints must block enough, but not too much

**Severity:** High
**Status:** Resolved
**Resolution document:** `docs/41_COMPLAINT_ENTITY_AND_C004_RESOLUTION.md`

### Accepted v0 rule

`Complaint` is a formal review entity with complaint evidence, scope, support, objections, duplicate grouping, review, admission, and resolution. Citizen-submitted complaints must provide complaint evidence or initial supporting material, identify affected scope, and pass admission by the competent reviewer before creating blocking effects. Blocking must be scoped to the affected object. Admissibility may create a scoped systemic pause inside the platform, but material/legal suspension and final responsibility require the applicable competent authority, enforceable obligation, final review, or founded resolution.

---

## C005 — Funding withdrawal, lock, reformulation, and no-response defaults

**Severity:** High
**Status:** Resolved
**Resolution document:** `docs/42_FUNDING_COMMITMENT_AND_C005_RESOLUTION.md`

### Accepted v0 rule

No ordinary withdrawal after financing. Funding is a commitment until project closure. Project failure is handled through traceability, fiscalization, complaints, guarantees, recovery, returned balances, and reputation consequences, not through free withdrawal.

---

## C006 — Treasury is not a civic actor, but custody and disbursement require authority

**Severity:** Medium
**Status:** Resolved
**Resolution document:** `docs/47_TREASURY_CITIZEN_BALANCE_AND_C006_RESOLUTION.md`

### Accepted v0 rule

Separate citizen funding capacity from project payment execution. Treasury informs how much each citizen may finance and executes protocol-valid financial orders. It does not choose projects, decide public value, select fiscalizers, validate evidence, or govern civic allocation.

---

## C007 — Public institution as equal actor vs tutored moderation by institution

**Severity:** High
**Status:** Resolved
**Resolution document:** `docs/43_PUBLIC_INSTITUTION_EXCLUSION_AND_C007_RESOLUTION.md`

### Accepted v0 rule

Public institutions are external to the system, not internal participants. They cannot propose, execute, fiscalize, moderate, or compete for distributed project financing inside Core v0. They may define the legal framework, allocate or remove budget, audit externally, enforce general law, and provide country-specific infrastructure such as custody or treasury integration where required.

---

## C008 — AI assistance vs protocol authority

**Severity:** Medium
**Status:** Resolved
**Resolution document:** `docs/48_AI_ASSISTANCE_AND_C008_RESOLUTION.md`

### Accepted v0 rule

AI may assist with drafting, validation, warnings, classification, comparison, and explanation. It may not silently replace protocol authority, human responsibility, or review roles. Material AI assistance should be recorded when it affects validation, publication, funding, disbursement, evidence, complaints, or rule changes.

---

## C009 — Citizen simplicity vs too many technical states

**Severity:** Medium
**Status:** Resolved
**Resolution document:** `docs/49_LAYERED_CITIZEN_STATE_TRANSLATION_AND_C009_RESOLUTION.md`

### Accepted v0 rule

Use a layered translation model: citizens see simple state labels and relevant actions, while the technical layer preserves detailed states, causes, scopes, rules, and audit events.

---

## C010 — Metrics may distort value

**Severity:** High
**Status:** Resolved
**Resolution document:** `docs/44_VALUE_VERIFICATION_AND_C010_RESOLUTION.md`

### Accepted v0 rule

Replace isolated value metrics with a `Value Verification Package`. Activity metrics alone are insufficient. Each promised value must be verified through metrics, fulfillment evidence needs, accepted fulfillment evidence, qualitative context where relevant, beneficiary signals, fiscalizer judgment, complaints, and contradiction channels.

---

## C011 — Automatic allocation and delegation can conflict

**Severity:** Medium
**Status:** Resolved
**Resolution document:** `docs/50_DELEGATION_PRIORITY_AND_C011_RESOLUTION.md`

### Accepted v0 rule

Delegation has priority over automatic allocation. In v0, if a citizen has an active delegate, the delegate governs financing decisions and automatic allocation rules do not execute. In future scoped delegation, the delegate has priority within the delegated scope.

---

## C012 — Reputation by role vs shared responsibility

**Severity:** Medium
**Status:** Resolved
**Resolution document:** `docs/51_ROLE_REPUTATION_RESPONSIBILITY_AND_C012_RESOLUTION.md`

### Accepted v0 rule

Reputation updates follow role-specific responsibility events. The system should assign responsibility by the obligation breached, the actor's accepted role, evidence of control or knowledge, and whether the defect was reasonably detectable by that role.

---

## C013 — Fiscalization cost is control cost, but who funds it before project is funded?

**Severity:** Medium
**Status:** Resolved
**Resolution document:** `docs/52_FISCALIZATION_OFFER_COST_AND_C013_RESOLUTION.md`

### Accepted v0 rule

Execution funding, fiscalization offers, evidence-producer offers, and control-cost discovery proceed in parallel. Execution readiness requires both execution budget closure and control package closure. Control costs are part of the project, but executor-controlled spending must remain separated from control spending. After minimum control closure, limited supplemental control funding may support at most one secondary fiscalizer or fiscalization auditor and distinct non-duplicative fulfillment/control evidence needs; it does not fund execution or block execution automatically.

---

## C014 — Open comments vs social media dynamics

**Severity:** Medium
**Status:** Resolved
**Resolution document:** `docs/53_REAL_IDENTITY_COMMENTS_AND_C014_RESOLUTION.md`

### Accepted v0 rule

Do not build a social-media ranking system in Core v0. Require verified visible authorship by default, keep ordering simple, route serious claims to the complaint flow, and apply only narrow rule-based moderation for illegal, unsafe, private, spam, or platform-integrity violations.

---

## C015 — Transparency vs privacy

**Severity:** High
**Status:** Resolved
**Resolution document:** `docs/45_ASSISTED_EVIDENCE_PUBLICATION_AND_C015_RESOLUTION.md`

### Accepted v0 rule

Evidence publication should not be trapped behind human pre-approval. The system should use AI-assisted privacy detection, redaction, warnings, and safer versions while leaving publication responsibility with the user and evidentiary evaluation with the fiscalizer.

---

## C016 — Partial disbursement criteria are not yet precise

**Severity:** Medium
**Status:** Resolved
**Resolution document:** `docs/54_DISBURSEMENT_MILESTONE_AI_VALIDATION_AND_C016_RESOLUTION.md`

### Accepted v0 rule

Create a structured `Disbursement Milestone` entity and require specialized AI validation before a project is published as financeable. Projects with unresolved critical validation failures cannot begin receiving execution funding commitments. For phased projects, a pending design gate is not itself a critical validation failure if the design baseline, reserved-fund rule, release block, and failure-treatment rule are explicit; it blocks later-phase release until accepted.

---

## C017 — Project reformulation may become a way to escape failure

**Severity:** High
**Status:** Resolved
**Resolution document:** `docs/55_VALUE_THESIS_REFORMULATION_AND_C017_RESOLUTION.md`

### Accepted v0 rule

Reformulation may change implementation, but it must not unilaterally rewrite the value promise that funders and beneficiaries relied on. Material value reformulations require visible cause analysis, preserved history, effect on funds, and potential reputation events when caused by avoidable failure or misleading design.

---

## C018 — Project closure categories need stronger link to reputation

**Severity:** Medium
**Status:** Resolved
**Resolution document:** `docs/56_VALUE_FULFILLMENT_REPUTATION_AND_C018_RESOLUTION.md`

### Accepted v0 rule

Do not calculate reputation directly from closure labels. Use closure category as procedural context, but calculate numeric reputation updates primarily from verified fulfillment of the value thesis and predeclared metrics, adjusted by founded complaints, evidence corrections, and role-specific responsibility events.

---

## C019 — Core v0 includes meta-governance conceptually, but not operationally

**Severity:** Medium
**Status:** Resolved
**Resolution document:** `docs/57_PROTOCOL_CHANGE_AND_C019_RESOLUTION.md`

### Accepted v0 rule

Separate project reformulations, administrative configuration changes, system implementation changes, and non-tutored protocol changes. In tutored mode, material configuration changes must be public, versioned, justified, have an effective date, include an adaptation period, and define transition rules. In non-tutored mode, protocol changes require visible proposal, review, sandbox or simulation, approval, implementation, and rollback.

---

## C020 — Operating modes may become permanent discretionary control

**Severity:** High
**Status:** Resolved
**Resolution document:** `docs/58_TUTORED_MODE_GOVERNANCE_RESOLUTIONS_AND_C020_RESOLUTION.md`

### Accepted v0 rule

The system does not force a country to leave tutored mode. The contradiction is opaque tutored governance. Material tutored decisions must create public `Governance Resolution` objects, and tutored silence must create public `Review Timeout Resolution` objects under a preconfigured timeout policy.

---

## C021 — Universal observability panel classified as extension, but basic observability is core

**Severity:** Low
**Status:** Resolved
**Resolution document:** `docs/59_CORE_ADMINISTRATIVE_OBSERVABILITY_BASELINE_AND_C021_RESOLUTION.md`

### Accepted v0 rule

The full H055 universal institutional observability panel remains Extension v1+. Core v0 requires simple user-facing signals plus a minimal administrative observability baseline covering lifecycle, funding, disbursement, milestones, evidence, fiscalization, complaints, operating modes, governance resolutions, timeouts, rule changes, and basic concentration indicators.

---

## C022 — Common-good governance is extension, but projects may affect common goods

**Severity:** Medium
**Status:** Resolved
**Resolution document:** `docs/60_COMMON_GOOD_IMPACT_DECLARATION_AND_C022_RESOLUTION.md`

### Accepted v0 rule

Core v0 does not include full common-good charter governance. However, projects must declare relevant common-good impacts through affected assets, affected parties, risks, antivalues, evidence, and fiscalization. Active charter relationships must be declared where a charter exists, but lack of a charter does not automatically block the project.

---

## C023 — Delegation concentration is visible, but no default cap exists

**Severity:** Medium
**Status:** Resolved
**Resolution document:** `docs/61_DELEGATION_CONCENTRATION_VISIBILITY_AND_C023_RESOLUTION.md`

### Accepted v0 rule

Core v0 does not impose a universal hard cap on delegation concentration. Citizen-chosen concentration is allowed, but it must be visible before delegation, during delegated action, in delegate reports, and in administrative observability. Configurable caps may exist only when public, explicit, and predefined.

---

## C024 — No anonymous actors vs beneficiary privacy

**Severity:** Medium
**Status:** Resolved
**Resolution document:** `docs/62_BENEFICIARY_PRIVACY_PROTECTED_IDENTITY_AND_C024_RESOLUTION.md`

### Accepted v0 rule

Core v0 keeps the no-anonymous-formal-actor rule, but separates verified identity from public visibility. Responsible actors are generally public. Beneficiaries and vulnerable participants may be verified privately, reviewer-visible, or represented publicly in aggregate. Protected identity is a justified exception for specific sensitive actions, including comments, complaints, testimony, evidence, beneficiary confirmations, and affected-party reports. It is not a general anonymous layer.

---

## C025 — Project discovery may bias allocation

**Severity:** Medium
**Status:** Resolved
**Resolution document:** `docs/63_PROJECT_DISCOVERY_VISIBILITY_USER_CUSTOMIZATION_AND_C025_RESOLUTION.md`

### Accepted v0 rule

Core v0 keeps Layer 0 as a navigation surface, not a hidden allocation feed. Citizens may reorder, pin, collapse, or hide Home categories for personal navigation. Project lists must show and allow switching ordering modes. Urgent/recommended visibility must show reasons. Paid promotion and opaque manual boosting are excluded from Core v0.

---

# B. Checklist by system area

## 1. Actor and role checklist

- [ ] Can every role be traced to an actor?
- [ ] Does every responsibility-heavy role require acceptance?
- [ ] Are role conflicts declared?
- [ ] Can an actor hold conflicting roles in the same project?
- [x] Are public institutions kept external to internal project participation under Core v0?
- [x] Are material tutored decisions represented as public governance-resolution objects?
- [ ] Does role-based reputation match actual responsibility?

## 2. Project object checklist

- [ ] Does every project have a responsible executor before execution funding?
- [x] Are Idea, draft project, and open financeable project clearly separated?
- [ ] Does every financeable project reference an active Planning Scope?
- [ ] Does every project have value thesis, beneficiaries, metrics, evidence, fiscalization, risks, and antivalues?
- [ ] Does every execution-financeable project have a Financial Assurance Profile?
- [ ] Is financial assurance treated as universal across social projects, not only construction or infrastructure?
- [ ] If the project uses phases, are phase deliverables, gates, dependencies, and failure treatment explicit?
- [ ] Are project versions immutable?
- [ ] Are reformulations visible?
- [ ] Can project history be reconstructed from audit events?
- [ ] If a project is outside the active Planning Scope, is it kept as an Idea, reclassified, reformulated, or routed into future planning-scope governance rather than made execution-financeable by default?

## 3. Value and metrics checklist

- [ ] Is every value icon linked to metrics?
- [ ] Does the project define a Value-Antivalue Profile where relevant?
- [ ] Are value commitments represented as floors the project must reach?
- [ ] Are relevant antivalues represented as ceilings the project must not exceed?
- [ ] Does every antivalue ceiling identify affected parties, zones, assets, or common goods where applicable?
- [ ] Does every antivalue ceiling define measurement or review method, timing/frequency, required fulfillment/control evidence, and review consequence?
- [ ] Is every core value commitment linked to a fulfillment evidence need?
- [ ] Is every metric linked to fulfillment evidence needs and review consequences?
- [ ] Is every formal evaluation scoped to a dimension and formal effect?
- [ ] Are soft public signals distinguished from fulfillment evaluation, technical review, fiscalization conclusions, complaint findings, and reputation inputs?
- [ ] Does every formal evaluation record its actor role, observability basis, authority or qualification basis, and contextualized evidence used where applicable?
- [ ] Are qualitative value claims handled?
- [ ] Are input-only metrics rejected when insufficient?
- [ ] Does the Project Evidential Contract define fulfillment/control evidence needs rather than preselected evidence producers?
- [ ] Can independent evidence producers tie offers to specific value floors, antivalue ceilings, metrics, material claims, milestones, phases, risks, or declared antivalues?
- [ ] Are unexpected or supplemental evidence offers prioritized lower unless accepted as equivalent, necessary, materially useful, or complementary?
- [ ] Are antivalues declared?
- [ ] Is antivalue non-compliance separated from automatic complaint creation?
- [ ] Can projects game easy metrics?
- [ ] Is there a mechanism to challenge weak metrics?

## 3a. Reputation checklist

- [ ] Are Reputation Signals separated from formal Reputation Inputs?
- [ ] Does every Reputation Input identify actor, role, source, reviewed basis, severity or weight basis, and formal effect?
- [ ] Does every Reputation Update reference a reviewed input, previous reputation, new reputation, weight or decay rule, severity rule, and appeal/review status?
- [ ] Are Reputation Summaries treated as citizen-facing navigation layers rather than the source of formal judgment?
- [ ] Are raw comments, popularity, suspicion, unfounded complaints, unreviewed evidence, AI anomaly flags, project proximity, corporate-group proximity, and closure labels prevented from directly updating formal reputation?
- [ ] Are related companies, owners, controllers, directors, and key professionals affected only when review establishes role, control, conflict, negligence, direct participation, repeated pattern, or demonstrated responsibility?
- [ ] Are complaint filing, support, quote, funding, admissibility, referral, and pending systemic pause treated as procedural signals rather than direct negative reputation inputs?
- [ ] Can failed value floors, exceeded antivalue ceilings, or undeclared antivalues become reviewed role-specific Reputation Inputs or Responsibility Events?
- [ ] Are severe events kept visibly inspectable even when aggregate scores recover over time?

## 4. Funding checklist

- [ ] Is funding clearly a conditional commitment?
- [ ] Is money prevented from going directly to executor before conditions?
- [x] Is funding described as commitment until closure rather than free withdrawal?
- [ ] Are delegated and automatic allocations distinguishable?
- [ ] Are unused funds handled clearly?
- [ ] Are funders notified of material changes?
- [ ] If execution funding is phase-specific, does the citizen see whether funds are reserved pending a phase gate?
- [ ] Does the active policy define the guarantee percentage or assurance requirement instead of the proposer, designer, or executor?
- [ ] Is a required guarantee treated as materialized only after custodian, guarantor, insurer, treasury, bank, escrow, or lawful equivalent confirmation?

## 5. Disbursement checklist

- [ ] Does every disbursement have a milestone?
- [ ] If the project is phased, does every relevant disbursement reference the applicable phase?
- [ ] Does every disbursement have evidence?
- [ ] Does every disbursement have fiscalizer review?
- [ ] Are blocking issues checked before release?
- [ ] Does a complaint-based disbursement block identify affected scope and distinguish systemic pause from material/legal suspension?
- [ ] Are partial releases governed by pre-defined rules?
- [ ] Are retained funds visible?
- [ ] Does release check the Financial Assurance Profile and Guarantee Materialization Record where applicable?
- [ ] Is every release auditable?
- [ ] Are later-phase funds blocked when prerequisite phase gates are pending, rejected, or materially reformulated?

## 6. Evidence checklist

- [ ] Is contextualized evidence classified by source and interest?
- [ ] Is every contextualized evidence item linked to an evidence context and to a fulfillment evidence need, metric, material claim, milestone, phase, or complaint issue where applicable?
- [ ] Is contextualized evidence privacy classified?
- [ ] Is contradiction evidence allowed?
- [ ] Are independent fulfillment/control evidence requirements defined for risky projects?
- [ ] Is false, manipulated, or low-quality contextualized evidence penalized by role and evidence context?
- [ ] Can citizens understand contextualized evidence status without reading raw files?

## 7. Fiscalization checklist

- [x] Who selects fiscalizers?
- [x] Is executor control over fiscalizer selection excluded?
- [x] Are conflicts of interest declared?
- [x] Is fiscalization cost separated from execution budget?
- [x] Is responsible fiscalization distinguished from open observation and evidence production?
- [x] Are fiscalizer assignments protocol-selected rather than popularity-selected, first-funded, executor-selected, or lowest-price-only?
- [x] Are supplemental fiscalization and evidence missions capped against unlimited control overfunding?
- [ ] Are fiscalizer evidence-capture functions distinguished from fiscalizer evaluation functions?
- [ ] Do fiscalization conclusions identify the evaluated dimension, evidence considered, limitations, and formal effect?
- [ ] Can fiscalizers resign or be replaced?
- [ ] Are fiscalizer reports public or privacy-filtered?
- [ ] Does fiscalizer reputation update after closure?

## 8. Complaint checklist

- [ ] Can a complaint be filed easily?
- [ ] Is the difference between comment and complaint clear?
- [ ] Is complaint evidence distinguished from formal fulfillment evaluation?
- [ ] Are complaint review findings separated from the complainant's own evaluation?
- [ ] Are blocking criteria explicit?
- [ ] Can complaints be scoped to a milestone, budget line, contextualized evidence item, or actor?
- [ ] Does admissibility create a Complaint Admissibility / Referral Record before any scoped systemic pause?
- [ ] Are complaint review/control/correction/mitigation/referral funds distinguished from execution funds during a pause?
- [ ] Does the model require court, regulator, competent authority, legal rule, or enforceable obligation before claiming material/legal suspension?
- [ ] Are weak or abusive complaints handled without discouraging good-faith complaints?
- [ ] Does every complaint have a visible status?

## 9. Delegation checklist

- [ ] Is delegation scoped?
- [ ] Does delegate acceptance occur before activation?
- [ ] Can delegation be revoked for future actions?
- [x] Are automatic allocation and delegation separate?
- [x] Is delegation priority over automatic allocation explicit?
- [x] Is concentration visible?
- [ ] Are delegate actions reported?
- [ ] Does delegate reputation reflect delegated decisions?

## 10. Interface checklist

- [ ] Is the ordinary citizen view simple?
- [ ] Are signals clickable?
- [ ] Can technical detail be reached when needed?
- [x] Is project discovery explainable?
- [x] Are urgent/promoted-looking slots rule-based?
- [x] Can users customize Home categories without changing project eligibility?
- [ ] Are citizen-facing states mapped from technical states?

## 11. Transition checklist

- [ ] Is operating mode visible?
- [ ] Are active Planning Scopes visible, versioned, and auditable?
- [ ] Is tutored mode justified?
- [ ] Is there a review date or maturity condition?
- [ ] Can institutional moderation be audited?
- [ ] Do tutored planning-scope decisions create Governance Resolution or equivalent public review traces where material?
- [x] Are public institutions external to internal project competition under Core v0?
- [ ] Is transition scope bounded?

## 12. Audit checklist

- [ ] Is every major state change an audit event?
- [ ] Does the audit event name actor, role, object, previous state, new state, and rule?
- [x] Are private details protected without hiding existence of evidence?
- [x] Can project history be reconstructed?
- [x] Are AI-assisted decisions recorded when material?
- [x] Are governance resolutions, review timeouts, and material discovery reasons auditable?

# C. Current integration priorities

C001-C025 are resolved through dedicated resolution documents.

The current priority is no longer to decide these contradictions. The priority is to propagate the accepted rules into the core corpus and then run another contradiction pass against the integrated model.

Highest-priority integration checks:

```text
1. Ensure Idea and Project are distinct in all core documents.
2. Ensure public institutions are external actors, not ordinary internal participants.
3. Ensure funding is described as commitment until project closure, not free withdrawal.
4. Ensure fiscalization and evidence production are distinct control roles.
5. Ensure complaints are formal entities with admission, scope, blocking status, admissibility/referral records, scoped systemic pause, and material/legal boundary.
6. Ensure value verification uses packages, not isolated metrics, and maps core value commitments to fulfillment evidence needs.
7. Ensure disbursement milestones require coherent pre-funding validation.
8. Ensure project phases prevent release of later-phase execution funds before prerequisite phase gates are accepted.
9. Ensure tutored mode decisions and timeouts become public civic objects.
10. Ensure beneficiary privacy does not create anonymous formal power.
11. Ensure discovery visibility is explainable and user-customizable.
12. Ensure Project Evidential Contracts define fulfillment/control evidence needs rather than preselected evidence producers.
13. Ensure material rule changes are classified as Administrative Rule Change, System Implementation Change, or Protocol Change Proposal, with public reason, effective date, transition rule, and audit trace.
14. Ensure distributed fiscalization remains protocol-selected, conflict-checked, risk-adjusted, auditable, and capped against unlimited secondary fiscalization or duplicate evidence funding.
15. Ensure every financeable project aligns with an active Planning Scope while keeping full distributed roadmap construction as an explicit open question.
```

## Proposed next working method

Integrate one coherent document group at a time using this template:

```text
Document group:
Resolutions propagated:
Conflicts removed:
Residual risks:
Files updated:
```

## Suggested first integration area

Start with actor/entity and object documents, because C001, C002, C003, C006, C007, C020, C024, and C025 all depend on clean actor, role, object, and visibility definitions.

## Design rule

> The checklist should not be treated as criticism from outside the model. It is part of the model's quality-control system.
