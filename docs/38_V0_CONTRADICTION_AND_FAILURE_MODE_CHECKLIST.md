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
9. Does this confuse a centralized legal/public guarantee with centralized state service provision?
10. Does this confuse platform consequences with legal consequences?
```

---

# A. Resolved contradictions and accepted v0 rules

This section preserves the original contradiction checklist as a traceable integration surface. C001-C025 are now resolved through dedicated resolution documents. Remaining work is propagation, stress testing, and identification of residual risks, not reopening the decisions unless explicitly requested.

## C001 — Open project with no executor vs no execution financing without executor

**Severity:** High
**Status:** Resolved
**Resolution document:** [[39_IDEA_ENTITY_NAVIGATION_AND_C001_RESOLUTION|docs/39_IDEA_ENTITY_NAVIGATION_AND_C001_RESOLUTION.md]]

### Accepted v0 rule

Do not model executorless public proposals as project states. Model them as a separate `Idea` entity.

> Ideas capture demand. Projects execute responsibility. Financing applies to projects, not ideas.

---

## C002 — Fiscalizer offer flow vs executor cannot choose fiscalizer

**Severity:** High
**Status:** Resolved
**Resolution document:** [[40_CONTROL_SUBPROJECTS_AND_C002_RESOLUTION|docs/40_CONTROL_SUBPROJECTS_AND_C002_RESOLUTION.md]]

### Accepted v0 rule

Fiscalization may be structured as a project-like `Control Subproject` with budget, methodology, deliverables, evidence, comments, auditability, and reputation. It is not selected by ordinary popularity or by the executor. Selection follows a protocolized, risk-adjusted process based on eligibility, conflict checks, technical/economic criteria, and auditability.

---

## C003 — Evidence can be produced by interested actors

**Severity:** High
**Status:** Resolved
**Resolution document:** [[46_EVIDENCE_PRODUCERS_AND_C003_RESOLUTION|docs/46_EVIDENCE_PRODUCERS_AND_C003_RESOLUTION.md]]

### Accepted v0 rule

Create and use the `Evidence Producer` role. Executor self-report is useful context, but critical milestones, disbursements, and closures require evidence produced or corroborated by evidence producers, fiscalizers, verified beneficiaries, technical records, or other non-executor sources.

---

## C004 — Blocking complaints must block enough, but not too much

**Severity:** High
**Status:** Resolved
**Resolution document:** [[41_COMPLAINT_ENTITY_AND_C004_RESOLUTION|docs/41_COMPLAINT_ENTITY_AND_C004_RESOLUTION.md]]

### Accepted v0 rule

`Complaint` is a formal review entity with complaint evidence, scope, support, objections, duplicate grouping, review, admission, and resolution. Citizen-submitted complaints must provide complaint evidence or initial supporting material, identify affected scope, and pass admission by the competent reviewer before creating blocking effects. Blocking must be scoped to the affected object. Admissibility may create a scoped systemic pause inside the platform, but material/legal suspension and final responsibility require the applicable competent authority, enforceable obligation, final review, or founded resolution.

---

## C005 — Funding withdrawal, lock, reformulation, and no-response defaults

**Severity:** High
**Status:** Resolved
**Resolution document:** [[42_FUNDING_COMMITMENT_AND_C005_RESOLUTION|docs/42_FUNDING_COMMITMENT_AND_C005_RESOLUTION.md]]

### Accepted v0 rule

No ordinary withdrawal after financing. Funding is a commitment until project closure. Project failure is handled through traceability, fiscalization, complaints, guarantees, recovery, returned balances, and reputation consequences, not through free withdrawal.

Funding-window expiry is a project/protocol outcome, not ordinary withdrawal. A financeable lane should have a visible Funding Attempt. If it expires unfunded, eligible unused commitments return, reassign, or follow the citizen's default rule.

---

## C006 — Treasury is not a civic actor, but custody and disbursement require authority

**Severity:** Medium
**Status:** Resolved
**Resolution document:** [[47_TREASURY_CITIZEN_BALANCE_AND_C006_RESOLUTION|docs/47_TREASURY_CITIZEN_BALANCE_AND_C006_RESOLUTION.md]]

### Accepted v0 rule

Separate citizen funding capacity from project payment execution. Treasury informs how much each citizen may finance and executes protocol-valid financial orders. It does not choose projects, decide public value, select fiscalizers, validate evidence, or govern civic allocation.

Budget Liquidity Smoothing, if implemented later, must be public, capped, stress-tested, and authorized by country or protocol rules. It must not become hidden virtual money or treasury discretion over project priority.

---

## C007 — Public authority as equal actor vs state-owned operator participation

**Severity:** High
**Status:** Resolved
**Resolution document:** [[43_PUBLIC_INSTITUTION_EXCLUSION_AND_C007_RESOLUTION|docs/43_PUBLIC_INSTITUTION_EXCLUSION_AND_C007_RESOLUTION.md]]

### Accepted v0 rule

Public authorities are external to the internal actor model for any scope in which they exercise legal, budgetary, regulatory, eligibility, admissibility, tutored, fiscal, adjudicative, coercive, or oversight power. They cannot use that authority position to propose, execute, fiscalize, moderate, or compete for distributed project financing inside the same scope.

State-owned or publicly owned operators are not automatically excluded by ownership label alone. They may participate only as ordinary eligible organizations where the active C007 boundary is satisfied: ownership/control relationships are declared, no privileged approval or review path exists, independent fiscalization applies, and no judge-and-party conflict exists. In tutored mode, an operator controlled by the same authority that defines scope or admissibility is excluded by default.

---

## C008 — AI assistance vs protocol authority

**Severity:** Medium
**Status:** Resolved
**Resolution document:** [[48_AI_ASSISTANCE_AND_C008_RESOLUTION|docs/48_AI_ASSISTANCE_AND_C008_RESOLUTION.md]]

### Accepted v0 rule

AI may assist with drafting, validation, warnings, classification, comparison, and explanation. It may not silently replace protocol authority, human responsibility, or review roles. Material AI assistance should be recorded when it affects validation, publication, funding, disbursement, evidence, complaints, or rule changes.

---

## C008a — Assisted deliberation vs algorithmic steering

**Severity:** Medium
**Status:** Resolved
**Related hypothesis:** [[H006-assisted-deliberation|knowledge/hypotheses/H006-assisted-deliberation.md]]

### Accepted v0 rule

Assisted deliberation structures decision context before material citizen action. It does not decide, rank, certify truth, allocate funds, suppress dissent, or replace citizen judgment. Material deliberative items should expose source category, status, unresolved limitations, and AI assistance labels where applicable.

Checklist:

- [ ] Does the citizen-facing context distinguish "Why consider this", "What to review carefully", and "Dissent / alerts / unresolved issues"?
- [ ] Does each material item expose its source category and status?
- [ ] Are AI-generated summaries or warnings labeled as assistance and traceable to underlying sources?
- [ ] Is the context prevented from becoming a hidden ranking, automatic allocation rule, or final truth certification?
- [ ] Are dissenting views, justified objections, complaints, and unresolved issues shown with proper procedural status rather than suppressed or treated as proven?

---

## C008b — Personal AI guides vs civic authority

**Severity:** Medium
**Status:** Resolved
**Related hypothesis:** [[H005-ai-personal-guides|knowledge/hypotheses/H005-ai-personal-guides.md]]

### Accepted v0 rule

Full personal AI guides are Extension v1+. If connected to the platform, they remain assistance infrastructure under C008. They may summarize, compare, translate, draft, warn, and help configure citizen choices, but they are not civic actors, delegates, automatic allocation profiles, fiscalizers, authorities, hidden recommenders, or sources of material civic action without explicit citizen confirmation or a separately configured auditable platform rule.

Checklist:

- [ ] Is the personal AI guide prevented from becoming a delegate, civic actor, fiscalizer, authority, or automatic allocation profile?
- [ ] Are material actions separated into AI suggestion, citizen confirmation, protocol action, and audit record?
- [ ] Does the guide avoid hidden funding, support, objection, complaint, vote, following, fiscalization offer, or evidence submission?
- [ ] Does any connected guide expose source records and label AI-generated content where material?
- [ ] Can the citizen revoke guide access and correct or override recommendations?
- [ ] Are guide recommendations separated from platform discovery, paid promotion, and ordering rules?
- [ ] Are sensitive preferences, identity, complaint, evidence, beneficiary, delegation, and allocation data protected by explicit consent and access scope?

---

## C009 — Citizen simplicity vs too many technical states

**Severity:** Medium
**Status:** Resolved
**Resolution document:** [[49_LAYERED_CITIZEN_STATE_TRANSLATION_AND_C009_RESOLUTION|docs/49_LAYERED_CITIZEN_STATE_TRANSLATION_AND_C009_RESOLUTION.md]]

### Accepted v0 rule

Use a layered translation model: citizens see simple state labels and relevant actions, while the technical layer preserves detailed states, causes, scopes, rules, and audit events.

---

## C010 — Metrics may distort value

**Severity:** High
**Status:** Resolved
**Resolution document:** [[44_VALUE_VERIFICATION_AND_C010_RESOLUTION|docs/44_VALUE_VERIFICATION_AND_C010_RESOLUTION.md]]

### Accepted v0 rule

Replace isolated value metrics with a `Value Verification Package`. Activity metrics alone are insufficient. Each promised value must be verified through metrics, fulfillment evidence needs, accepted fulfillment evidence, qualitative context where relevant, beneficiary signals, fiscalizer judgment, complaints, and contradiction channels. A004 adds that the package must pass an evidence-coverage check for every value floor, formal secondary value, antivalue ceiling, material value claim, and relevant metric.

---

## C011 — Automatic allocation and delegation can conflict

**Severity:** Medium
**Status:** Resolved
**Resolution document:** [[50_DELEGATION_PRIORITY_AND_C011_RESOLUTION|docs/50_DELEGATION_PRIORITY_AND_C011_RESOLUTION.md]]

### Accepted v0 rule

Delegation has priority over automatic allocation. In v0, if a citizen has an active delegate, the delegate governs financing decisions and automatic allocation rules do not execute. In future scoped delegation, the delegate has priority within the delegated scope.

---

## C012 — Reputation by role vs shared responsibility

**Severity:** Medium
**Status:** Resolved
**Resolution document:** [[51_ROLE_REPUTATION_RESPONSIBILITY_AND_C012_RESOLUTION|docs/51_ROLE_REPUTATION_RESPONSIBILITY_AND_C012_RESOLUTION.md]]

### Accepted v0 rule

Reputation updates follow role-specific responsibility events. The system should assign responsibility by the obligation breached, the actor's accepted role, evidence of control or knowledge, and whether the defect was reasonably detectable by that role.

---

## C013 — Fiscalization cost is control cost, but who funds it before project is funded?

**Severity:** Medium
**Status:** Resolved
**Resolution document:** [[52_FISCALIZATION_OFFER_COST_AND_C013_RESOLUTION|docs/52_FISCALIZATION_OFFER_COST_AND_C013_RESOLUTION.md]]

### Accepted v0 rule

Execution funding, fiscalization offers, evidence-producer offers, and control-cost discovery proceed in parallel. Execution readiness requires both execution budget closure and control package closure. Control costs are part of the project, but executor-controlled spending must remain separated from control spending. After minimum control closure, limited supplemental control funding may support at most one secondary fiscalizer or fiscalization auditor and distinct non-duplicative fulfillment/control evidence needs; it does not fund execution or block execution automatically.

---

## C014 — Open comments vs social media dynamics

**Severity:** Medium
**Status:** Resolved
**Resolution document:** [[53_REAL_IDENTITY_COMMENTS_AND_C014_RESOLUTION|docs/53_REAL_IDENTITY_COMMENTS_AND_C014_RESOLUTION.md]]

### Accepted v0 rule

Do not build a social-media ranking system in Core v0. Require verified visible authorship by default, keep ordering simple, route serious claims to the complaint flow, and apply only narrow rule-based moderation for illegal, unsafe, private, spam, or platform-integrity violations.

---

## C015 — Transparency vs privacy

**Severity:** High
**Status:** Resolved
**Resolution document:** [[45_ASSISTED_EVIDENCE_PUBLICATION_AND_C015_RESOLUTION|docs/45_ASSISTED_EVIDENCE_PUBLICATION_AND_C015_RESOLUTION.md]]

### Accepted v0 rule

Evidence publication should not be trapped behind human pre-approval. The system should use AI-assisted privacy detection, redaction, warnings, and safer versions while leaving publication responsibility with the user and evidentiary evaluation with the fiscalizer.

---

## C016 — Partial disbursement criteria are not yet precise

**Severity:** Medium
**Status:** Resolved
**Resolution document:** [[54_DISBURSEMENT_MILESTONE_AI_VALIDATION_AND_C016_RESOLUTION|docs/54_DISBURSEMENT_MILESTONE_AI_VALIDATION_AND_C016_RESOLUTION.md]]

### Accepted v0 rule

Create a structured `Disbursement Milestone` entity and require specialized AI validation before a project is published as financeable. Projects with unresolved critical validation failures cannot begin receiving execution funding commitments. For phased projects, a pending design gate is not itself a critical validation failure if the design baseline, reserved-fund rule, release block, and failure-treatment rule are explicit; it blocks later-phase release until accepted.

---

## C017 — Project reformulation may become a way to escape failure

**Severity:** High
**Status:** Resolved
**Resolution document:** [[55_VALUE_THESIS_REFORMULATION_AND_C017_RESOLUTION|docs/55_VALUE_THESIS_REFORMULATION_AND_C017_RESOLUTION.md]]

### Accepted v0 rule

Reformulation may change implementation, but it must not unilaterally rewrite the value promise that funders and beneficiaries relied on. Material value reformulations require visible cause analysis, preserved history, effect on funds, and potential reputation events when caused by avoidable failure or misleading design.

---

## C018 — Project closure categories need stronger link to reputation

**Severity:** Medium
**Status:** Resolved
**Resolution document:** [[56_VALUE_FULFILLMENT_REPUTATION_AND_C018_RESOLUTION|docs/56_VALUE_FULFILLMENT_REPUTATION_AND_C018_RESOLUTION.md]]

### Accepted v0 rule

Do not calculate reputation directly from closure labels. Use closure category as procedural context, but calculate numeric reputation updates primarily from verified fulfillment of the value thesis and predeclared metrics, adjusted by founded complaints, evidence corrections, and role-specific responsibility events.

---

## C019 — Core v0 includes meta-governance conceptually, but not operationally

**Severity:** Medium
**Status:** Resolved
**Resolution document:** [[57_PROTOCOL_CHANGE_AND_C019_RESOLUTION|docs/57_PROTOCOL_CHANGE_AND_C019_RESOLUTION.md]]

### Accepted v0 rule

Separate project reformulations, administrative configuration changes, system implementation changes, and non-tutored protocol changes. In tutored mode, material configuration changes must be public, versioned, justified, have an effective date, include an adaptation period, and define transition rules. In non-tutored mode, protocol changes require visible proposal, review, sandbox or simulation, approval, implementation, and rollback.

---

## C020 — Operating modes may become permanent discretionary control

**Severity:** High
**Status:** Resolved
**Resolution document:** [[58_TUTORED_MODE_GOVERNANCE_RESOLUTIONS_AND_C020_RESOLUTION|docs/58_TUTORED_MODE_GOVERNANCE_RESOLUTIONS_AND_C020_RESOLUTION.md]]

### Accepted v0 rule

The system does not force a country to leave tutored mode. The contradiction is opaque tutored governance. Material tutored decisions must create public `Governance Resolution` objects, and tutored silence must create public `Review Timeout Resolution` objects under a preconfigured timeout policy.

---

## C021 — Universal observability panel classified as extension, but basic observability is core

**Severity:** Low
**Status:** Resolved
**Resolution document:** [[59_CORE_ADMINISTRATIVE_OBSERVABILITY_BASELINE_AND_C021_RESOLUTION|docs/59_CORE_ADMINISTRATIVE_OBSERVABILITY_BASELINE_AND_C021_RESOLUTION.md]]

### Accepted v0 rule

The full H055 universal institutional observability panel remains Extension v1+. Core v0 requires simple user-facing signals plus a minimal administrative observability baseline covering lifecycle, funding, disbursement, milestones, evidence, fiscalization, complaints, operating modes, governance resolutions, timeouts, rule changes, and basic concentration indicators.

---

## C022 — Common-good governance is extension, but projects may affect common goods

**Severity:** Medium
**Status:** Resolved
**Resolution document:** [[60_COMMON_GOOD_IMPACT_DECLARATION_AND_C022_RESOLUTION|docs/60_COMMON_GOOD_IMPACT_DECLARATION_AND_C022_RESOLUTION.md]]

### Accepted v0 rule

Core v0 does not include full common-good charter governance. However, projects must declare relevant common-good impacts through affected assets, affected parties, risks, antivalues, evidence, and fiscalization. Active charter relationships must be declared where a charter exists, but lack of a charter does not automatically block the project.

---

## C023 — Delegation concentration is visible, but no default cap exists

**Severity:** Medium
**Status:** Resolved
**Resolution document:** [[61_DELEGATION_CONCENTRATION_VISIBILITY_AND_C023_RESOLUTION|docs/61_DELEGATION_CONCENTRATION_VISIBILITY_AND_C023_RESOLUTION.md]]

### Accepted v0 rule

Core v0 does not impose a universal hard cap on delegation concentration. Citizen-chosen concentration is allowed, but it must be visible before delegation, during delegated action, in delegate reports, and in administrative observability. Configurable caps may exist only when public, explicit, and predefined.

---

## C024 — No anonymous actors vs beneficiary privacy

**Severity:** Medium
**Status:** Resolved
**Resolution document:** [[62_BENEFICIARY_PRIVACY_PROTECTED_IDENTITY_AND_C024_RESOLUTION|docs/62_BENEFICIARY_PRIVACY_PROTECTED_IDENTITY_AND_C024_RESOLUTION.md]]

### Accepted v0 rule

Core v0 keeps the no-anonymous-formal-actor rule, but separates verified identity from public visibility. Responsible actors are generally public. Beneficiaries and vulnerable participants may be verified privately, reviewer-visible, or represented publicly in aggregate. Protected identity is a justified exception for specific sensitive actions, including comments, complaints, testimony, evidence, beneficiary confirmations, and affected-party reports. It is not a general anonymous layer.

---

## C025 — Project discovery may bias allocation

**Severity:** Medium
**Status:** Resolved
**Resolution document:** [[63_PROJECT_DISCOVERY_VISIBILITY_USER_CUSTOMIZATION_AND_C025_RESOLUTION|docs/63_PROJECT_DISCOVERY_VISIBILITY_USER_CUSTOMIZATION_AND_C025_RESOLUTION.md]]

### Accepted v0 rule

Core v0 keeps Layer 0 as a navigation surface, not a hidden allocation feed. Citizens may reorder, pin, collapse, or hide Home categories for personal navigation. Project lists must show and allow switching ordering modes. Urgent/recommended visibility must show reasons. Paid promotion and opaque manual boosting are excluded from Core v0.

---

## A001 — Legitimacy does not follow from funding

**Severity:** High
**Status:** Resolved
**Resolution document:** [[67_PROJECT_LEGITIMACY_PROFILE_AND_A001_RESOLUTION|docs/67_PROJECT_LEGITIMACY_PROFILE_AND_A001_RESOLUTION.md]]

### Accepted v0 rule

Funding, support, delegation, and discovery visibility do not establish legitimacy by themselves. Projects with rights, access, vulnerable-beneficiary, territory-wide, common-good, or high affected-party exposure should carry a proportional Project Legitimacy Profile fed by Threshold Policy conditions, Required Evidence Package needs, contextualized Readiness Evidence, affected-party observations, justified objections, complaint paths, fiscalizer/reviewer findings, Governance Resolutions, or competent-authority traces where applicable.

Affected-party mapping and consultation should be required proportionally. Low-risk projects may only need visible publication, nearby-project discovery, and an observation window. Higher-impact design or preparation phases may require field visits, community meetings, plan review, surveys, neighborhood documentation, independent evidence-producer input, or fiscalizer/reviewer corroboration before execution-ready status.

> A project may be fully funded while affected-party review, community-consultation evidence, public-access conditions, Planning Scope disputes, or competent-authority routes remain unresolved.

---

## A002 — Information capture through visibility control

**Severity:** High
**Status:** Resolved
**Resolution document:** [[68_MATERIAL_VISIBILITY_AND_A002_RESOLUTION|docs/68_MATERIAL_VISIBILITY_AND_A002_RESOLUTION.md]]

### Accepted v0 rule

Core v0 does not assume that current public systems lack project approvers or criteria. Existing investment, procurement, municipal, environmental, technical, or sector approvals may remain legally external to the platform. The platform requirement is material visibility: approvals, criteria, pending conditions, omissions, limitations, and review outputs that affect funding, legitimacy, execution readiness, disbursement, trust, closure, complaint review, or reputation must be represented as source-linked `MaterialInformationClaim` records or equivalent source references.

Compact citizen surfaces may use short summaries, AI assistance, project cards, urgency labels, recommendations, and discovery ordering, but those surfaces must not hide unresolved material warnings. Citizen-facing labels should distinguish popularity, funding state, evidence sufficiency, fiscalization status, complaint status, design readiness, legitimacy conditions, and conditional approvals.

> The problem is not that approvals do not exist today. The problem is that approval criteria, conditions, omissions, and compliance traces can be dispersed across technical records while citizens see only a favorable surface label.

---

## A003 — Fiscalizer capture or fiscalization failure

**Severity:** High
**Status:** Resolved
**Resolution document:** [[69_FISCALIZER_QUALITY_CAPTURE_INDICATORS_AND_A003_RESOLUTION|docs/69_FISCALIZER_QUALITY_CAPTURE_INDICATORS_AND_A003_RESOLUTION.md]]

### Accepted v0 rule

Responsible fiscalization remains distributed in available supply but protocol-selected in assignment. Every responsible fiscalizer assignment should expose a project-specific eligibility and reputation profile or equivalent derived surface. This profile is not a generic CV, universal score, or automatic selector; it shows the eligibility criteria for the specific project, whether the fiscalizer meets those criteria, what contextual performance history is relevant, and what relationship, workload, dependency, or capture warnings apply.

Fiscalization reports must expose sufficiency fields: scope, methodology, evidence considered, evidence rejected, limitations, conflicts, and formal effect claimed. Repeat relationships, dependency concentration, delayed corrections, later-confirmed findings, corrected or overturned findings, and insufficient-report history should be visible and formally relevant.

> The system does not need perfect fiscalizers. It needs fiscalizers whose selection, eligibility, conflicts, methods, limitations, repeated patterns, and failures are public, reviewable, and reputationally consequential.

---

## A004 — Metric manipulation and Goodhart effects

**Severity:** High
**Status:** Resolved
**Resolution document:** [[70_METRIC_GAMING_TEST_AND_A004_RESOLUTION|docs/70_METRIC_GAMING_TEST_AND_A004_RESOLUTION.md]]

### Accepted v0 rule

A004 is founded: converting public value into metrics, floors, and ceilings invites actors to satisfy the metric while defeating the value — easy metrics, output counting, excluding hard beneficiaries, and post-funding target reformulation. The accepted resolution is a metric gaming test: every metric must link to a value floor, an antivalue ceiling, a material value claim, an evidence need, and a review consequence, and metric changes are versioned, never silent.

The companion evidence-coverage check asks what evidence is necessary to verify each declared value floor, formal secondary value, antivalue ceiling, and material claim — a distinct question from whether the submitted evidence itself is trustworthy, which is A013's subject. The two checks are deliberately separate: coverage is a design-time property of the evidential contract; submitted-evidence quality is a review-time property of what arrives.

Core v0 does not require detailed scoring systems or metric-calibration registries; those remain future implementation work. Limitation statement: no metric test prevents a well-designed metric from being satisfied in letter while the value erodes in ways the antivalue ceilings did not anticipate — the residual defense is complaint, contradiction evidence, and closure review.

---

## A005 — Neglected essential services

**Severity:** High
**Status:** Resolved
**Resolution document:** [[71_ESSENTIAL_SERVICE_PROTECTION_AND_A005_RESOLUTION|docs/71_ESSENTIAL_SERVICE_PROTECTION_AND_A005_RESOLUTION.md]]

### Accepted v0 rule

Distributed allocation is bounded and should not move essential guarantees into popularity cycles. Planning Scopes that affect essential guarantees, continuity, emergency capacity, redistribution, vulnerable beneficiaries, universal access, or low-visibility groups should expose an Essential Service Protection test: protected guarantee floor, distributed service-provision lane, planning-continuity target where applicable, funding-lane treatment, underfunding indicator, and cream-skimming safeguards.

This is not an argument for central operation of all essential services. Eligible providers may compete or participate in the distributed service lane under equal evidence, fiscalization, continuity, complaint, revocation, replacement, and reputation rules. The protected floor prevents minimum guarantees from depending only on monthly popularity, while the distributed lane lets citizens finance centrally neglected priorities.

> A change in government or operating authority may revise an essential planning target only through a public, versioned, auditable Governance Resolution, Administrative Rule Change, or equivalent trace.

## A006 — Volatile funding and underfunded continuity

**Severity:** High
**Status:** Resolved
**Resolution document:** [[72_CONTINUITY_RISK_CLASSIFICATION_AND_A006_RESOLUTION|docs/72_CONTINUITY_RISK_CLASSIFICATION_AND_A006_RESOLUTION.md]]

### Accepted v0 rule

Projects that create ongoing service, staffing, maintenance, emergency, or beneficiary-dependence obligations should declare a Continuity Risk Classification before funding. They should not be presented as one-time projects when they are recurring, continuity-critical, emergency, or maintenance-dependent.

Where A006 applies, the project or phase should expose the minimum funded service period, future funding dependency warning, staffing or maintenance obligation, beneficiary-protection rule, wind-down rule, renewal trigger, and reserve/retention/guarantee reference where applicable.

Before the funded period ends, a visible Continuity Renewal Window may generate or update a continuity-need Idea. Beneficiaries, citizens, affected parties, fiscalizers, and evidence producers may support the Idea or attach contextual evidence. The current executor and alternative eligible executors may propose follow-on projects, but the renewal window does not renew the current executor automatically.

This compares against real current practice: continuity funding can already be reduced, delayed, or cancelled through political priority changes without public visibility, traceability, mitigation, or result-based review. A006 does not guarantee future funding; it makes the continuity need visible, contestable, financeable, and auditable before interruption.

---

## A007 — Conflicting reviews and post-closure accountability

**Severity:** Medium / High
**Status:** Resolved
**Resolution document:** [[73_CONFLICT_OF_REVIEW_HANDLING_AND_A007_RESOLUTION|docs/73_CONFLICT_OF_REVIEW_HANDLING_AND_A007_RESOLUTION.md]]

### Accepted v0 rule

Formal evaluations must be dimension-scoped and effect-scoped. A fiscalizer report, beneficiary observation, technical measurement, complaint finding, fulfillment evaluation, and reputation input may concern the same project without producing the same formal effect.

Before closure, conflicting evidence or complaints use ordinary complaint, fiscalization, pause, correction, retention, mitigation, disbursement-blocking, and review paths.

After closure, ordinary platform complaints do not remain open forever. Execution-financeable projects that require post-closure accountability should declare a Post-Closure Coverage Profile with either `Executor Direct Warranty` or `Equivalent Insurance / Bond / Coverage`. Covered complaints, contradictory evidence, hidden antivalues, or defect claims may proceed inside the platform only during the declared window and within the covered scope. After expiry or outside scope, the route is external: court, regulator, comptroller, contract enforcement, competent authority, or country-specific path. A final external decision may later be recorded where the active rule allows responsibility, reputation, or historical correction effects.

---

## A008 — Platform or algorithmic capture

**Severity:** Medium
**Status:** Resolved
**Resolution document:** [[74_PLATFORM_INFLUENCE_AUDIT_AND_A008_RESOLUTION|docs/74_PLATFORM_INFLUENCE_AUDIT_AND_A008_RESOLUTION.md]]

### Accepted v0 rule

A008 is founded as a boundary problem, but Core v0 does not add a separate platform-influence entity, universal per-impression ranking logs, causal exposure-to-funding attribution, or a citizen-facing algorithmic audit panel.

The risk is handled through existing C008 and C025 controls: AI remains labeled, source-linked, traceable, correctable assistance; Home and discovery remain user-configurable navigation; project lists show switchable ordering modes; urgent, recommended, nearby, followed-scope, almost-funded, or similar labels expose reasons where material; compact surfaces do not hide unresolved material warnings; paid promotion and opaque manual boosting are excluded.

Material changes to ordering rules, urgent-slot rules, recommendation logic, default Home behavior, AI-summary generation, validation logic, warning suppression, or citizen-facing labels should use the existing SystemImplementationChange, AdministrativeRuleChange, GovernanceResolution, ProtocolChangeProposal, and AuditEvent paths where applicable.

Advanced platform-influence analytics, ranking-bias dashboards, causal exposure-to-funding metrics, and detailed ranking audits remain Extension v1+ or implementation-level observability.

---

## A009 — Inequality of participation

**Severity:** Medium / High
**Status:** Resolved
**Resolution document:** [[75_PARTICIPATION_EQUITY_INDICATORS_AND_A009_RESOLUTION|docs/75_PARTICIPATION_EQUITY_INDICATORS_AND_A009_RESOLUTION.md]]

### Accepted v0 rule

A009 is founded, but it is a participation-equity boundary rather than a new Core v0 entity or mandatory indicator layer. The system should be compared against current institutional practice, where physical meetings, narrow notice channels, working-hour sessions, low attendance, family representation, digital exclusion, disability barriers, and weak traceability already produce unequal participation.

Core v0 improves that baseline through asynchronous discovery, nearby-project following, protected identity, simple citizen actions, delegation visibility, participation-support projects, required affected-party evidence where Threshold Policy demands it, and auditability.

Funding, support, delegation weight, discovery visibility, or meeting attendance must not be presented as full affected-party representation. Low participation, missing voices, or concentration may create warnings, assisted-deliberation context, administrative observability, research inputs, or future policy improvement. They do not automatically veto a project or prove illegitimacy unless the active Threshold Policy already requires the relevant affected-party mapping, consultation, observation window, or readiness evidence for the affected effect.

Participation-support projects remain ordinary transparent projects. Support providers that also receive delegation, recommend projects, receive project funding, or have related-party ties should disclose those relationships where material. Advanced participation-equity metrics remain Extension v1+ or country/administrator observability.

---

## A010 - Delegation concentration

**Severity:** Medium / High
**Status:** Resolved
**Resolution document:** [[76_DELEGATION_CONCENTRATION_STRESS_THRESHOLDS_AND_A010_RESOLUTION|docs/76_DELEGATION_CONCENTRATION_STRESS_THRESHOLDS_AND_A010_RESOLUTION.md]]

### Accepted v0 rule

A010 is founded as a concentration risk, but it is a bounded reinforcement of C023 rather than a new Core v0 entity, authority, or universal hard cap. Voluntary delegation concentration remains allowed by default when citizens choose it, but high concentration should trigger stress indicators through existing delegation, reporting, disclosure, audit, and administrative-observability mechanisms.

Core v0 stress indicators may include represented-weight warnings by scope and action type, report-sufficiency status for high-concentration delegates, related-delegate or support-provider relationship disclosure, delegate funding to related projects observability, cap-effect disclosure where a configured public cap applies, and immediate revocation path visibility.

Advanced delegation-network analytics, anti-cluster algorithms, and concentration dashboards remain Extension v1+ or country/administrator observability unless a specific implementation adopts them.

---

## A011 - Moderation abuse in transition pilots

**Severity:** Medium / High
**Status:** Resolved
**Resolution document:** [[77_TUTORED_MODERATION_ABUSE_TEST_AND_A011_RESOLUTION|docs/77_TUTORED_MODERATION_ABUSE_TEST_AND_A011_RESOLUTION.md]]

### Accepted v0 rule

A011 is founded, but Core v0 handles it as a data-preservation and transparency boundary rather than a new moderation-abuse tribunal. C020 already requires material tutored decisions to become Governance Resolution objects and tutored silence to become Review Timeout Resolution objects. A011 adds that those records should preserve enough structured data for later moderation-pattern audit.

Core v0 should preserve decision result, rejection reason category where practical, Planning Scope, rule/version, responsible authority or process, submission and decision dates, review time, timeout status, suggested next path, AuditEvent reference, and known authority-linked operator relationships. Ordinary citizens should see simple case-level signals such as rejection reason, review delay, timeout recorded, and authority-linked operator present where material.

Formal moderation-abuse dashboards, automatic possible-abuse findings, cross-actor rejection-rate comparisons, duplicate/outside-scope reason comparability analytics, and operator-concentration analytics remain Extension v1+ or country/administrator observability.

---

## A012 - Scope creep and excessive complexity

**Severity:** Medium / High
**Status:** Resolved
**Resolution document:** [[78_COMPLEXITY_BUDGET_AND_A012_RESOLUTION|docs/78_COMPLEXITY_BUDGET_AND_A012_RESOLUTION.md]]

### Accepted v0 rule

A012 is founded, but Core v0 handles it as a complexity-budget and integrate-or-bound editorial discipline rather than a new entity, metric, or procedural layer. The discipline is formalized as [[P007-integrate-or-bound-rule|knowledge/principles/P007-integrate-or-bound-rule.md]]: a founded attack produces a new Core v0 mechanism only when the failure mode would defeat a core-thesis claim and cannot be controlled through existing objects. Every other founded attack is answered by an explicit boundary, a visible residual risk, and a recorded limitation statement.

Every new required object, field, state, or procedural step should name the material failure mode it controls. Low-risk projects keep an explicit minimum viable path, higher burdens trigger through ThresholdPolicy rather than being universalized, new v0 entities pass the cannot-be-safely-derived test before entering the formal inventory, and Extension v1+ ideas do not enter Core v0 by default. Citizen-facing screens remain simple and action-oriented while expert and audit detail stays expandable.

Core v0 does not require a quantitative complexity metric, a formal object-count ceiling, or an implementation-cost model; the complexity budget is a qualitative discipline applied at design and review time. Limitation statement: the architecture's procedural burden has not been validated against real users or a working implementation, so the minimum viable low-risk path remains a design commitment rather than a demonstrated property.

---

## A013 - False, incomplete, or context-misclassified evidence

**Severity:** High
**Status:** Resolved
**Resolution document:** [[79_EVIDENCE_QUALITY_REVIEW_AND_A013_RESOLUTION|docs/79_EVIDENCE_QUALITY_REVIEW_AND_A013_RESOLUTION.md]]

### Accepted v0 rule

A013 is founded: independence from the executor does not make evidence true, and evidence can be authentic-but-irrelevant, incomplete, manipulated, produced by an unqualified actor, or classified under the wrong procedural context. The accepted resolution is a proportional formal evidence producer qualification standard: paid or critical fulfillment/control evidence must specify producer qualification, measurement method, instrument standard, required metadata, report requirements, and probative fitness for the claimed formal effect, with review outcomes and role-specific responsibility effects.

The standard binds only evidence needs the active Threshold Policy marks as formal, paid, or hard-effect; citizen observations, complaint attachments, and low-risk confirmations remain easy to submit and may trigger review without certifying anything. Evidence context is a mandatory gate: material must not silently migrate from complaint attachment to fulfillment proof.

Core v0 does not require authenticity scoring, AI-generation detection, calibration registries, or court-admissibility guarantees; those remain future implementation or country-implementation work. Limitation statement: the qualification standard verifies that the right kind of actor used the right kind of method — it does not verify that the specific measurement is true, so a qualified producer can still submit false or negligent evidence, and discovery may come only after formal effects occurred.

---

## A014 - Related-party projects and hidden control

**Severity:** High
**Status:** Resolved
**Resolution document:** [[80_RELATED_PARTY_RELATIONSHIP_GRAPH_AND_A014_RESOLUTION|docs/80_RELATED_PARTY_RELATIONSHIP_GRAPH_AND_A014_RESOLUTION.md]]

### Accepted v0 rule

A014 is founded and does not distort the project when it targets hidden control rather than declared proximity. Core v0 handles it as a minimum related-party relationship graph and severity model, integrated as observability over declarations already required by `RelatedPartyConflictReview` and the role model rather than as a new primary entity. The same relationship-and-control graph serves A018 collusion observability; one graph, two consumers.

Related-party status is not automatic invalidity. The minimum relationship graph makes ownership and control chains, board or management control, material supplier and subcontractor relationships, repeated fiscalizer/evidence-producer relationships, delegate or funder relationships to project actors, and authority-linked operator status visible where material. Declared proximity is handled proportionally with visible warnings, while hidden, severe, or control-relevant relationships escalate to stronger safeguards, correction, blocking, exclusion, complaint review, responsibility review, or reputation effects.

Core v0 does not require beneficial-ownership verification, corporate-registry integration, or investigative discovery of undeclared relationships. Verification depth against external registries is a country implementation decision, and graph analytics beyond declared and observed platform relationships remain Extension v1+. Limitation statement: the relationship graph sees declared relationships and on-platform patterns; deliberately concealed off-platform control can defeat it, and the architecture's answer is to make concealment costly and reviewable, not impossible.

---

## A015 - Common-good charter conflicts

**Severity:** Medium / High
**Status:** Resolved
**Resolution document:** [[81_COMMON_GOOD_IMPACT_SUFFICIENCY_TEST_AND_A015_RESOLUTION|docs/81_COMMON_GOOD_IMPACT_SUFFICIENCY_TEST_AND_A015_RESOLUTION.md]]

### Accepted v0 rule

A015 is founded but bounded, and does not distort the project when it strengthens project-level common-good disclosure without importing the full Extension v1+ charter system. Core v0 handles it as a minimum common-good impact sufficiency test over the existing C022 common-good impact declaration rather than a charter registry, charter voting, or platform adjudication authority. Under [[P007-integrate-or-bound-rule|knowledge/principles/P007-integrate-or-bound-rule.md]], this integrates a thin disclosure test through existing declaration, evidence, and fiscalization surfaces and bounds everything else.

A project that plausibly affects a common good should not proceed with a vague or unexplained impact declaration. The sufficiency test requires identifying affected assets and affected parties; declaring no impact, uncertain impact, or impact with explanation; requiring evidence and fiscalization where impact is plausible; requiring an active-charter relationship if a charter exists; prohibiting unexplained overuse of `uncertain`; and connecting material omissions to fiscalization, complaint, mitigation, responsibility, and reputation effects.

Core v0 does not require a common-good registry, charter voting, or platform adjudication of common-good compatibility. Full registry and charter mechanics remain Extension v1+, and conflicts requiring legal, environmental, cultural, or scientific authority route to external channels. Limitation statement: without a charter system, the sufficiency test relies on declaration honesty plus affected-party and fiscalizer contestation, so systematically underdeclared impacts in communities with weak contestation capacity remain an open exposure.

---

## A016 - Resistance by incumbent institutions

**Severity:** High
**Status:** Resolved
**Resolution document:** [[82_INCUMBENT_RESISTANCE_INDICATORS_AND_A016_RESOLUTION|docs/82_INCUMBENT_RESISTANCE_INDICATORS_AND_A016_RESOLUTION.md]]

### Accepted v0 rule

A016 is founded and does not distort the project when it is treated as transition realism rather than a refutation of the functional architecture. Core v0 handles it as incumbent-resistance observability: transition pilots should expose whether incumbent institutions preserve control through scope, eligibility, delay, operator privilege, data access, treasury integration, fiscalization, or legal choke points. Under [[P007-integrate-or-bound-rule|knowledge/principles/P007-integrate-or-bound-rule.md]], this is a bounded resolution: it adds no mechanism against resistance itself, only indicators over existing OperatingMode, PlanningScope, GovernanceResolution, and timeout objects, and it records the political limit openly.

The minimum indicators are the scope share opened to distributed financing; approval, rejection, and timeout rates; rejection-reason comparability; authority-linked operator participation; public-operator privileges, subsidies, guarantees, or data access; independent versus controlled fiscalization rates; and pilot outcomes compared with the incumbent baseline. If a ministry opens a narrow pilot, delays independent projects, approves authority-linked operators, and reports the pilot as participatory, the platform should show those patterns rather than treating publication of individual decisions as sufficient.

Core v0 does not require, and cannot provide, any mechanism that compels institutional transition, protects the migrated budget share, or overrides legal authority. Those levers belong to country implementation and ordinary politics, and the related fiscal channel is attacked separately in [[A021-treasury-dependence-and-fiscal-strangulation|attacks/A021-treasury-dependence-and-fiscal-strangulation.md]]. Limitation statement: the architecture makes incumbent resistance measurable and comparable, but a determined incumbent can still strangle a pilot through scope, budget, and legal choke points; this is a declared political limitation of the model, not a solved problem.

---

## A017 - Disbursement gaming

**Severity:** High
**Status:** Resolved
**Resolution document:** [[83_DISBURSEMENT_GAMING_TESTS_AND_A017_RESOLUTION|docs/83_DISBURSEMENT_GAMING_TESTS_AND_A017_RESOLUTION.md]]

### Accepted v0 rule

A017 is founded and does not distort the project when it improves milestone and release discipline rather than abolishing project disbursement. Core v0 handles it as disbursement-gaming tests for milestone design, partial release, advance payment, and phase-gate release. Under [[P007-integrate-or-bound-rule|knowledge/principles/P007-integrate-or-bound-rule.md]], this resolution integrates: disbursement gaming attacks the conditional-disbursement core claim directly, and the tests are linkage and justification checks over existing disbursement objects, not new payment machinery.

Milestone-based disbursement must be reviewed for gaming risk before it can support release. The minimum tests are: every milestone links to budget line, phase, value relevance, evidence need, review basis, blocker check, retention, and release amount; advance payment carries recoverability, retention, direct supplier payment, guarantee, or equivalent protection; weak milestone design can trigger designer/modeler responsibility review where it creates avoidable release risk; the fiscalizer states why the evidence supports release, partial release, retention, or rejection; and citizen-facing summaries separate funding, reservation, release, retained funds, and guarantee status. In Macul, `site preparation and materials purchase` should not justify a large release unless it is tied to value-relevant progress, recoverability, retained funds, and evidence beyond receipts.

Core v0 does not require per-project actuarial guarantee calibration, automated milestone-design scoring, or cost-verification machinery. The global v0 guarantee percentage plus configurable ThresholdPolicy retention remains the Core v0 answer; risk-priced guarantees and milestone-design analytics remain Extension v1+ or country implementation. Limitation statement: milestone quality ultimately depends on human review of milestone design; a formally valid but substantively weak milestone plan approved by a weak reviewer can still release funds early, and the architecture's answer is designer responsibility and retention, not detection.

---

## A018 - Collusion among project roles

**Severity:** High
**Status:** Resolved
**Resolution document:** [[84_COLLUSION_OBSERVABILITY_AND_A018_RESOLUTION|docs/84_COLLUSION_OBSERVABILITY_AND_A018_RESOLUTION.md]]

### Accepted v0 rule

A018 is founded and does not distort the project when it is treated as a systemic stress test rather than a demand for impossible perfect detection. Core v0 handles it as collusion observability across role clusters and response paths for confirmed hidden coordination. Under [[P007-integrate-or-bound-rule|knowledge/principles/P007-integrate-or-bound-rule.md]], this resolution integrates observability through existing objects and bounds detection: the relationship-and-control graph is the same graph defined for A014, timing and outcome patterns are administrative-observability review surfaces rather than an automated detection engine, and the response paths reuse VerifiedDiscovery and ResponsibilityEvent.

Role separation is necessary but not sufficient. The system should expose relationship, repetition, timing, and outcome patterns across project roles and material suppliers. The minimum observability is: repeated actor-cluster visibility across projects; the A014 relationship-and-control graph reused across roles and suppliers; timing-anomaly review for evidence, fiscalizer reports, disbursement requests, and complaints; outcome-pattern review for unusually favorable or fast approvals; independent corroboration requirements for critical milestones; a verified-discovery route for hidden coordination; and cross-role responsibility event handling where collusion is confirmed. In Macul, if a proposer, designer, executor, evidence producer, and fiscalizer are formally separate but repeatedly coordinate reports and releases, the system should make the cluster visible, reopen affected effects where rules allow, create role-specific responsibility events, correct reputation inputs, and block unreleased funds where justified.

Core v0 does not require an automated collusion-detection engine, network-analysis scoring, or investigative capability. Pattern surfaces feed human review, complaint, and verified-discovery paths; automated anomaly scoring remains Extension v1+, and prosecution of confirmed collusion remains external law. Limitation statement: purely off-platform coordination among formally compliant actors can remain invisible to the system; the architecture's claim is comparative — collusion becomes harder, riskier, and more discoverable than under opaque institutional monopoly — not that collusion is eliminated.

---

## A019 - Procedural legitimacy cannot substitute democratic mandate

**Severity:** High
**Status:** Resolved
**Resolution document:** [[86_ALLOCATION_MANDATE_AND_A019_RESOLUTION|docs/86_ALLOCATION_MANDATE_AND_A019_RESOLUTION.md]]

### Accepted v0 rule

A019 is founded as a system-level authorization gap and does not distort the project when it is read as requiring the platform to record the democratic mandate that external law supplies, not to manufacture one. Core v0 handles it as an `Allocation Mandate` record per active Planning Scope. Under [[P007-integrate-or-bound-rule|knowledge/principles/P007-integrate-or-bound-rule.md]], this resolution integrates through an existing object: the mandate is a minimal record attached to the Planning Scope, making the missing authorization inspectable rather than adding a new adjudicating entity.

Every active Planning Scope records the democratic mandate that authorized its budget migration and its allocation formula, distinct from the procedural Administrative Rule Change machinery. The minimum record names the mandate source (statute, ordinance, referendum, or delegated authority); the legal instrument authorizing budget migration; the migrated share; the allocation-amount formula version, with an explicit flag when it departs from equal-per-citizen and the authority that chose the departure; and effective dates with version history. A non-equal allocation formula is a higher-authorization decision than an ordinary parameter edit. In Macul, the 5% sports migration must name the municipal or ministerial instrument that authorized it, and a contribution-weighted formula cannot be presented as neutral configuration: if no instrument exists, the missing record makes the gap visible instead of laundering it through a clean version history.

Core v0 records and exposes the mandate; it does not create, validate, or adjudicate it. Mandate construction remains external constitutional law and country implementation, and verification of the underlying instrument's soundness is outside the platform. Limitation statement: an Allocation Mandate record makes missing authorization visible, but it cannot supply a mandate the law never granted, and the democratic-deficit critique of substituting atomized allocation for representative appropriation remains a recorded open normative debate.

---

## A020 - Agenda-setting capture through planning scope construction

**Severity:** High
**Status:** Resolved (bounded as open limitation)
**Resolution document:** [[87_PLANNING_SCOPE_AGENDA_LIMITATION_AND_A020_RESOLUTION|docs/87_PLANNING_SCOPE_AGENDA_LIMITATION_AND_A020_RESOLUTION.md]]

### Accepted v0 rule

A020 is founded and partially unresolved. Whoever constructs Planning Scopes exercises the second face of power, deciding what citizens may fund at all before any allocation, support, or fiscalization occurs, and the corpus itself classifies roadmap and planning-area construction as an unresolved open question. Under [[P007-integrate-or-bound-rule|knowledge/principles/P007-integrate-or-bound-rule.md]], this is a bounded resolution: Core v0 gains no mechanism that governs who constructs the roadmap; it carries interim observability over existing objects and records the political limit openly rather than claiming to solve roadmap-construction governance.

Agenda-setting power over scope construction is documented, versioned, and contestable through visibility only; it is not distributed by Core v0. The minimum interim observability is: every Planning Scope carries its Allocation Mandate record (A019) and a versioned scope definition; scope changes and interpretations surface as Governance Resolutions with declared review windows and timeout policies (C020); and out-of-scope demand stays visible as Ideas (C001), with volume observability per rejected or out-of-scope category. In Macul, a ministry narrowing the sports scope to exclude skate parks must do it in a versioned, publicly reasoned scope change rather than a silent omission, while skate-park Ideas keep accumulating visibly as unmet demand that a future construction mechanism would consume.

Core v0 does not define who constructs the roadmap or compel any authority to act on unmet demand; full distributed roadmap construction remains Extension v1+, and a first-instance narrow framing produces no removed-category trace because nothing was ever included. Limitation statement: whoever constructs Planning Scopes exercises the second face of power, and Core v0 makes that exercise observable but not distributed — a declared open limitation of the architecture, the acknowledged constitutional gap in [[distributed-roadmap-construction-governance|knowledge/open-questions/distributed-roadmap-construction-governance.md]], a blocker for open-mode deployment at scale, and a primary item for the paper's limitations section.

---

## A021 - Treasury dependence and fiscal strangulation

**Severity:** High
**Status:** Resolved
**Resolution document:** [[88_FISCAL_COMMITMENT_PROFILE_AND_A021_RESOLUTION|docs/88_FISCAL_COMMITMENT_PROFILE_AND_A021_RESOLUTION.md]]

### Accepted v0 rule

A021 is founded. The state still controls the fiscal spigot and can strangle the system without attacking it openly — through late or partial delivery of signed balances, mid-cycle reduction of the migrated share, zero indexation, or valid Financial Orders left unexecuted — while the platform still shows green funding states. Under [[P007-integrate-or-bound-rule|knowledge/principles/P007-integrate-or-bound-rule.md]], this resolution integrates observability through existing objects — the Planning Scope, treasury and custody records, signed Financial Orders, and AuditEvents — rather than adding an enforcement mechanism. It converts fiscal strangulation from invisible to measurable and attributable; enforcement stays external.

The fiscal commitment behind each Planning Scope becomes a public, versioned Fiscal Commitment Profile — migrated percentage, indexation rule, delivery-latency target, and cycle horizon — and changes to it are visible governance events with reason, magnitude, affected scopes, and beneficiary impact, not silent parameter edits. Delivery and execution reliability surface as public signals attributable to the fiscal authority rather than the visible executor: expected-versus-actual delivery of signed balances, order-to-execution latency distribution, an aggregate unexecuted-valid-order indicator, and a real-value-preservation warning where nominal amounts are not inflation-adjusted. Missed windows and systematic delay feed the H054 transition metrics and the A016 incumbent-resistance indicators. In Macul, a mid-year cut from 5% to 2% with two months of late balance files becomes a versioned Profile change with reason and beneficiary impact, alongside reliability alerts showing that funded courts sit unpaid because orders are unexecuted upstream, not because the executor failed.

Core v0 records and surfaces fiscal behavior; it enforces nothing. Limitation statement: no software can compel a sovereign to pay, so credible commitment must come from law and a determined treasury can still defund the system in full public view. Multi-year appropriation locks, statutory indexation, and budget floors remain country implementation.

---

## A033 - The problem of many hands: responsibility vacuum

**Severity:** High
**Status:** Resolved
**Resolution document:** [[89_DUTY_OF_CARE_ANCHOR_AND_A033_RESOLUTION|docs/89_DUTY_OF_CARE_ANCHOR_AND_A033_RESOLUTION.md]]

### Accepted v0 rule

A033 is founded. When harm to a third party results from the interaction of adequately-performed roles, the responsibility matrix can truthfully find that no role breached its internal obligation, C012 forbids blame by association, and P003 assigns responsibility to "the project," which is not a legal person a victim can sue — a responsibility vacuum. Under [[P007-integrate-or-bound-rule|knowledge/principles/P007-integrate-or-bound-rule.md]], this resolution integrates through existing objects — the Financial Assurance Profile, the Post-Closure Coverage Profile, the responsibility matrix, and AuditEvents — rather than adding a liability entity. It names the answerable legal person and provisions coverage; it does not adjudicate liability.

Every execution-financeable project names, before disbursement, the solvent, reachable legal person or persons answerable to third parties for physical and safety harm — a Duty-of-Care Anchor mapping to an executor, guarantor, insurer, or designated responsible operator, exposed on the citizen-facing sheet as a plain statement such as `responsible party: [name] — liability coverage active`. The Financial Assurance and Post-Closure Coverage profiles extend to third-party liability coverage proportionate to physical risk where Threshold Policy requires it; versioned documentation states that distributed micro-allocation does not dilute the state's underlying duty of care and records where residual public responsibility remains; the responsibility matrix distinguishes "no role breached its internal obligation" from "no one is liable to the victim"; and the audit trail preserves a harm-attribution evidence package — roles, versions, gates, evidence — usable by a court. In the Macul collapsed-roof scenario, the family's lawyer finds a named defendant with materialized coverage and a documented chain of who did what, instead of "everyone a little, no one enough."

The platform records the duty-bearer and provisions coverage; it does not adjudicate who is at fault or in what proportion — liability apportionment remains external law. Limitation statement: a named anchor and coverage guarantee a reachable defendant, not a just outcome, and the doctrinal construction of liability in distributed public funding remains untested in any jurisdiction.

---

## A022 - Thin markets for fiscalization and evidence supply

**Severity:** Medium/High
**Status:** Resolved
**Resolution document:** [[90_CONTROL_SUPPLY_OBSERVABILITY_AND_A022_RESOLUTION|docs/90_CONTROL_SUPPLY_OBSERVABILITY_AND_A022_RESOLUTION.md]]

### Accepted v0 rule

A022 is partially founded. The architecture already scales control to project size and risk and reserves the heavy producer-qualification standard for paid, hard, formal-effect evidence, so most thin-market projects carry no infrastructure-grade control bill; but none of that manufactures supply where the qualified market is genuinely empty, and in a small commune or narrow technical domain the admissible set of independent, unrelated, affordable fiscalizers can collapse to a single firm or a handful of people all related to the executor. Core v0 handles it as control-supply density observability by territory and domain plus explicit, disclosed thin-market handling routes chosen as country implementation. Under [[P007-integrate-or-bound-rule|knowledge/principles/P007-integrate-or-bound-rule.md]], this resolution bounds with thin integrated observability: supply-density signals attach to the existing Planning Scope, Control Subproject selection, and fiscalization records rather than a new adjudicating entity, and scarcity is made visible before publication rather than discovered at control-package closure.

Control-supply density is an observable property of each Planning Scope and territory, and thin-market handling is an explicit, disclosed country-implementation choice rather than a silent lowering of standards. The minimum elements are: control-supply density observability by territory and domain (eligible fiscalizers and evidence producers per scope, offer rates, fee levels, and repeat-assignment concentration); a thin-market indicator surfaced before publication so a structural gap is named as such rather than mislabelled as low demand; explicit thin-market handling routes as country choices (remote and documentary evidence, cross-territory and pooled assignment, and relaxed-but-disclosed selection under stronger safeguards and longer observation windows); priced compensation for weak verification per [[formal-models|research/formal-models.md]] Proposition 2, so a package with thin control supply carries a higher guarantee rather than a diluted standard; and an explicit territorial control-cost line funding travel, logistics, and access. In Macul, a rural water committee's chlorination upgrade sits in the light-burden band, and where the only accredited sanitary engineer within reach is the committee president's cousin the thinness indicator names the empty admissible set before publication and the disclosed fallback is chosen openly rather than left to stall silently.

Core v0 records and surfaces control-supply density and handles thin markets through disclosed routes; it cannot conjure qualified verifiers. Supply creation — training, accreditation subsidies, and market building — is country implementation, and treating the thinness indicator and shared-control patterns as expanding the supplier base over time is Extension v1+ work. Limitation statement: in a genuinely empty market a monopolist controller is a real unresolved scenario, and conflict-free selection can be impossible where everyone qualified is related, so observability surfaces the gap and pricing compensates for weak verification, but neither creates suppliers where none exist.

---

## A023 - Meta-governance vacuum in open mode

**Severity:** High
**Status:** Resolved
**Resolution document:** [[91_OPEN_MODE_GATING_AND_A023_RESOLUTION|docs/91_OPEN_MODE_GATING_AND_A023_RESOLUTION.md]]

### Accepted v0 rule

A023 is founded as an admitted deferral. C019 and H017 define the procedural envelope of rule change — change types, versioning, non-surprise, effective dates, transition rules, and rollback — but decline to specify how a non-tutored, open-mode protocol change is decided: who votes, with what weights, under what quorum, and how constitutional-level rules are protected differently from operational parameters. Rule-level capture is the highest-leverage attack surface in any governance system, so an open mode shipped with an unspecified amendment rule invites whoever first proposes a concrete mechanism to entrench themselves. Under [[P007-integrate-or-bound-rule|knowledge/principles/P007-integrate-or-bound-rule.md]], this resolution bounds — it formalizes the gate, not the mechanics: open mode must not deploy until constitutional-level decision mechanics are resolved and published, while C019's procedural shell stays binding in every mode.

Open-mode deployment is gated: no public function may exit into open mode until constitutional-level decision mechanics — who votes on protocol changes, with what weights and quorum, and how constitutional rules differ from operational ones — are resolved and published. The C019 procedural shell remains binding in every mode; tutored and semi-open pilots may run indefinitely under existing Governance Resolution and Review Timeout machinery, where the implementing authority is the decision authority and its acts and silences become public civic objects; when the mechanics are later designed, no proposal may define the mechanism by which it is itself ratified, and identity, allocation authorization, and the amendment rule are entrenched behind the constitutional tier; and participation and concentration metrics attach to any eventual protocol-change vote, since low turnout is the classic capture vector. In Macul, the sports pilot runs in tutored or semi-open mode and cannot exit into open mode by configuration: a delegate bloc proposing both a threshold-lowering change and the mechanism ratifying its own proposal would be attempting exactly the silent self-ratifying amendment C019's non-surprise principle forbids.

Core v0 fixes the gate and keeps the procedural shell binding; it does not define the open-mode amendment mechanics, which remain undefined by design. Tiered protocol-rule levels, a fixed non-self-amending amendment rule, default entrenchment, and vote-participation metrics are future constitutional work, and full constitutional meta-governance remains Extension v1+. Limitation statement: the architecture's mature state is unspecified at its highest-leverage layer, so any premature open-mode deployment would face rule-level capture with no defense, and until the gate is written as an enforced precondition the protection rests on principle rather than on a mechanical check.

---

## A024 - Underprovision of non-salient public goods

**Severity:** Medium
**Status:** Resolved
**Resolution document:** [[92_SALIENCE_BIAS_OBSERVABILITY_AND_A024_RESOLUTION|docs/92_SALIENCE_BIAS_OBSERVABILITY_AND_A024_RESOLUTION.md]]

### Accepted v0 rule

A024 is partially founded. Atomized voluntary allocation inherits the documented biases of charitable giving — identifiable-victim salience, warm glow, and preference for photogenic outputs — so above the protected floor abstract, preventive, statistical-life goods such as drainage, disease prevention, data infrastructure, and routine maintenance can be under-allocated relative to their welfare value even under fully honest participation. But the architecture never routes the whole budget through salience-driven choice: the non-assignable pool and the essential floors (A005) exclude precisely the catastrophic-underprovision goods, and system-defined defaults channel inactive citizens' funds by rule rather than salience. Under [[P007-integrate-or-bound-rule|knowledge/principles/P007-integrate-or-bound-rule.md]], this resolution bounds with observability, exposing the salience gradient through existing objects — Planning Scope, citizen funding and automatic allocation profiles, the default allocation rule, and administrative observability — rather than correcting citizen preferences or imposing a welfare function.

Above the essential floor, the salience gradient in citizen allocation is an observable property, and any default weighting toward under-allocated non-salient categories is a disclosed, versioned public protocol choice rather than a hidden nudge; default allocation rules route inactive budget by planning priority, not salience. The minimum elements are: salience-bias observability above the protected floor (funding per category against declared planning-scope need weights, across salient-versus-non-salient and preventive-versus-remedial lanes); underfunded-need indicators and non-salient-category visibility in the discovery surface; the non-assignable pool and essential floors (A005) kept distinct as the structural answer for catastrophic tails; default allocation rules routing inactive budget by planning priority; a transparent, versioned default-rule weighting toward under-allocated non-salient categories gated by threshold policy; and optional harm-averted and resilience framing so abstract benefits are more legible. In Macul, citizens fund a riverside plaza enthusiastically while a stormwater drainage upgrade attracts almost no allocation, and the portfolio view shows funding per category against declared need so the neighborhood sees the abstract good under-funded before the flood rather than diagnosing it two winters later.

Core v0 exposes the salience gradient and routes inactive budget by planning priority; it does not correct citizen preferences or impose a welfare function. Portfolio-level rebalancing toward non-salient goods beyond defaults and visibility is gated by threshold policy rather than mandated, and treating it as a stronger planning-scope instrument is Extension v1+ work. Limitation statement: above the floor the salience gradient is real, and correcting it beyond defaults and visibility is a political choice for planning-scope governance rather than the platform, so even with observability and a disclosed default weighting honest citizens may keep directing free choice toward salient projects and no view forces the abstract good to win.

---

## A025 - Rational ignorance and participation decay

**Severity:** Medium/High
**Status:** Resolved
**Resolution document:** [[93_ENGAGEMENT_DECAY_METRICS_AND_A025_RESOLUTION|docs/93_ENGAGEMENT_DECAY_METRICS_AND_A025_RESOLUTION.md]]

### Accepted v0 rule

A025 is founded as a behavioral prediction. Each citizen's monthly civic allocation is individually small, so by Downsian logic the rational return on careful evaluation is near zero and most citizens route their allocation through the cheapest channel — the public default, a stored profile, or a trusted delegate — while participatory-budgeting evidence shows active evaluation spiking at launch and decaying over subsequent cycles, leaving a shrinking, self-selected active core whose choices are then displayed as the aggregated will of the whole. The architecture never assumed universal active judgment — its intermediation channels are designed, visible, revocable, and auditable — but engagement decay and active-core concentration are not currently measured. Under [[P007-integrate-or-bound-rule|knowledge/principles/P007-integrate-or-bound-rule.md]], this resolution integrates metrics through the existing H054 transition-maturity object, which already lists the share handled by default allocation and direct-versus-delegated participation.

The mix of manual, profile-driven, delegated, and default allocation is a measured, versioned public property of each cycle, and citizen-facing legitimacy language must distinguish considered choice from default and profile carry-over; engagement decay and active-core concentration are tracked across cycles, not only at launch. The minimum elements are per-cycle shares of manual, profile-driven, delegated, and untouched-default allocation as versioned public metrics; active-core concentration indicators tracking whether the same minority persists across cycles; citizen-facing legitimacy language distinguishing deliberate evaluation from carry-over; cadence-fatigue review of the monthly cycle for decay effects; and these signals fed into H054 functional transition maturity rather than an internal-only dashboard. The simulation ([[simulation-results|research/simulation-results.md]]) vindicates the designed-intermediation position — allocation quality is carried by the institutional default anchor conditioned on the informational quality of the weight vector it follows, while quintupling citizen attention moves quality selection by at most ~0.08 and essentially nothing in default-anchored regimes — so decay must be measured and disclosed, not denied. In Macul, where perhaps 4% evaluate projects manually after launch novelty fades, the multi-court project's funding is decomposed into deliberate evaluation, stored profiles, delegates, and untouched default, so a journalist asking how many people actually evaluated the winners gets a real answer.

Core v0 measures and discloses the participation mix; it does not mandate participation quotas or engagement targets, and cohort-refresh or sampling mechanisms that periodically renew the active core remain Extension v1+ options subject to visibility and audit. Limitation statement: if the active core shrinks enough, distributed control becomes intermediated control with better bookkeeping, and while better bookkeeping is a real improvement over a zero-observability baseline, measurement does not by itself reverse decay and the system must not present default and profile allocation as considered choice.

---

## A026 - Identity infrastructure failure and surveillance

**Severity:** High
**Status:** Resolved
**Resolution document:** [[94_IDENTITY_PROVIDER_FAILURE_MODES_AND_A026_RESOLUTION|docs/94_IDENTITY_PROVIDER_FAILURE_MODES_AND_A026_RESOLUTION.md]]

### Accepted v0 rule

A026 is partially founded. The verified-identity baseline (P004) makes the external identity provider the system's deepest dependency: whoever compromises, coerces, or misconfigures it can mint Sybil identities to capture allocation or silently exclude targeted citizens, so the platform's Sybil resistance collapses to the provider's integrity. The second harm is chilling: binding a real identity to every civic act accumulates a longitudinal record of political behavior, and because the platform and any authority with lawful access can see through contextual protected identity, citizens contemplating complaints against powerful actors self-censor. Contextual protected identity already exists for these cases, its access is gated and auditable, and the provider is pre-existing state infrastructure, so under [[P001-comparative-critique-rule|knowledge/principles/P001-comparative-critique-rule.md]] the marginal delta is the linking of civic acts, not the creation of the dossier. Under [[P007-integrate-or-bound-rule|knowledge/principles/P007-integrate-or-bound-rule.md]], this resolution bounds with minimal records — declared failure modes, compromise-response procedures, and purpose-bound access auditing through the existing verified-identity, protected-identity, complaint, and audit-trail objects rather than adopting anonymity or building a detection engine.

The identity provider is a declared critical dependency with enumerated failure modes and compromise-response procedures, and every access to the linkage between a civic act and a verified identity is itself an audited event with a stated purpose; protected-identity contexts remain the chilling-effect answer, and sensitive act-to-identity linkage carries retention limits where country law allows. The minimum elements are: declared provider failure modes — compromise, coercion, outage, and wrongful exclusion — with response procedures including re-verification windows, action freezes, and retroactive audit; purpose-bound access auditing where every access to act-to-identity linkage is an AuditEvent carrying its purpose, auditable by an independent party rather than only the acceding authority; protected-identity contexts (C014/C024) retained with a heightened, adversarial de-anonymization threshold for complaints against executors, authorities, and the operator; retention limits and data-minimization on sensitive linkage where law allows; and verified identity preserved as the anti-Sybil baseline (P004), not replaced by an anonymous formal layer. In Macul, a worker filing an unsafe-construction complaint against a politically connected executor appears as a verified protected complainant, and piercing that protection requires the heightened adversarial threshold and is itself an audited event checkable by an independent party rather than a routine review an allied official could invoke.

The identity provider is pre-existing state infrastructure — the civil registry, referenced conceptually as a ClaveUnica-style mechanism — and Core v0 neither replaces it nor adopts anonymity. Provider-independent anomaly detection, federation, and substitution that would remove the single point of failure are Extension v1+ work, and the marginal exposure Core v0 governs is the linkage of civic acts, bounded by purpose-limited logged access rather than open display. Limitation statement: platform-side visibility of protected identities plus lawful state access means chilling effects on complaints against powerful actors are reduced, not eliminated, and provider compromise remains a single point of failure whose ultimate mitigation is jurisdictional rather than platform-side.

---

## A027 - Information cascades and allocation herding

**Severity:** Medium/High
**Status:** Resolved
**Resolution document:** [[95_HERDING_OBSERVABILITY_AND_A027_RESOLUTION|docs/95_HERDING_OBSERVABILITY_AND_A027_RESOLUTION.md]]

### Accepted v0 rule

A027 is founded. Visible funding progress, active-support counts, and delegate follower numbers turn each citizen's allocation into a public signal that later, weakly-informed citizens rationally imitate, so early and partly arbitrary advantages compound into cascades and Matthew effects only loosely correlated with underlying value, and the pathology needs no manipulating operator — it is structural to displaying cumulative social proof at all. Under [[P007-integrate-or-bound-rule|knowledge/principles/P007-integrate-or-bound-rule.md]], this resolution integrates herding observability through existing objects — discovery ordering, the support-versus-financing separation, funding-target closure, and administrative observability — and bounds the deeper visibility redesign: cascades attack the discovery-helps-citizens-find-value claim and cannot be ignored, but their control fits existing objects and the residual is a measurement gap, not a missing primary entity.

Herding is measured and made observable, not prevented: funding progress stays visible and the platform surfaces the cumulative-advantage dynamics acting on it. The minimum elements are funding-velocity-versus-evidence-maturity indicators that flag projects whose money outruns their evidence or support breadth; funding-source independence signals including the share of funding arriving after high-visibility exposure; discovery-slot concentration observability so the amplification granted by "most supported" and "almost funded" ordering is itself visible; and funding-target closure (H035) retained as the structural cascade truncator with its claim stated honestly. Per [[simulation-results|research/simulation-results.md]] experiment E1, closure is an anti-concentration and completion-breadth device — Gini and top-salience absorption fall and roughly 15% more projects complete — but it does not by itself improve quality selection, because the truncated surplus spills to the next most visible project rather than the next best one, so quality selection depends on the default anchor, not the cap. In Macul, when two comparable sports projects launch the same week and one crosses its target first on early commitments, closure caps how much it can absorb and the new indicators flag that its velocity outran its evidence and that most of its money arrived after it topped the "almost funded" sort, so an observer sees a herded leader named as such rather than reading a full bar as proof of merit.

Core v0 does not hide funding progress, does not rank exclusively by non-accumulative orderings, and does not adjudicate whether an individual citizen imitated the crowd; advanced de-herding mechanisms — blind early windows, staged reveal, exposure equalization — remain Extension v1+. Limitation statement: visible social proof is intrinsic to a transparent funding surface, so herding is measured and bounded, not prevented, and allocation quality depends on the default anchor rather than on the funding cap — a declared limitation for the paper.

---

## A028 - Spatial and group inequity of allocation outcomes

**Severity:** High
**Status:** Resolved
**Resolution document:** [[96_TERRITORIAL_OUTCOME_OBSERVABILITY_AND_A028_RESOLUTION|docs/96_TERRITORIAL_OUTCOME_OBSERVABILITY_AND_A028_RESOLUTION.md]]

### Accepted v0 rule

A028 is founded. Even with strictly equal per-citizen wallets and equal capacity, allocation outcomes concentrate where social capital, organizational density, and proposal-writing capacity already concentrate, so equal inputs produce unequal territorial and group results; horizontal fiscal equity is not guaranteed by equal individual inputs but requires equalization the model does not contain. Under [[P007-integrate-or-bound-rule|knowledge/principles/P007-integrate-or-bound-rule.md]], this is a bounded resolution with core observability: outcome inequity attacks the fairness claim of equal wallets and cannot be ignored, but the audit trail already makes per-territory outcomes reconstructable and the equalization machinery is representable through existing objects — the H025 formula layer, the H033 default rule, planning-scope lanes, and the non-assignable pool — so Core v0 integrates the observability minimally and bounds the redistribution as a political choice.

Per-territory and per-group allocation outcomes are observable as core administrative observability: Core v0 mandates that the distribution of outcomes be measured, not that outcomes be equalized. The minimum elements are funding per capita by comuna as a standing, versioned public metric; funded-project density against planning-scope need weights; capture share by organized proposers so concentration among high-capacity actors is visible; and an explicit input-equity versus outcome-equity distinction in the model's own language so equal wallets are not presented as evidence of fair outcomes. Equalization capability is documented as available and unmandated — redistributive and hybrid allocation-amount formulas (H025), planning-scope lanes and the A005 floor-and-lane pattern reused for a distinct territorial or group equity target, the H033 default rule's territorial routing, and preferential supply-side funding of proposal, modeling, and fiscalization support in low-capacity territories — each a versioned, publicly authorized, auditable country-implementation choice rather than a silent administrator setting. In Macul, where an organized comuna captures eight times the per-capita allocation of a marginal one of equal size, the architecture now sees the gap from the audit trail as a standing metric and can route against it through a redistributive formula, a territorial floor, or supply-side support, but only if the implementing country configures it.

Core v0 mandates outcome observability, not outcome equality; equalization mechanisms — floors, matching, compensatory routing, redistributive formulas — remain country implementation or Extension v1+, modeled on but distinct from the essential-service floors. Limitation statement: with equal wallets and no equalization configured, organized territories will out-capture marginalized ones by default, and the architecture makes that measurable for the first time but does not prevent it — how much to equalize is a political choice, not an architectural one.

---

## A029 - Program fragmentation and lost complementarities

**Severity:** Medium
**Status:** Resolved
**Resolution document:** [[97_COMPOSITE_PROGRAM_DEPENDENCIES_AND_A029_RESOLUTION|docs/97_COMPOSITE_PROGRAM_DEPENDENCIES_AND_A029_RESOLUTION.md]]

### Accepted v0 rule

A029 is partially founded. Decomposing public action into independently proposed, funded, and closed projects can strand complementarities — cross-project linkages where one component is worthless without another, multi-year coherence, and procurement economies of scale — and although Composite Programs already aggregate interdependent projects, each component still lives or dies by its own funding attempt, so partial funding can produce stranded half-systems. Under [[P007-integrate-or-bound-rule|knowledge/principles/P007-integrate-or-bound-rule.md]], this resolution integrates through the existing Composite Program object (H051) rather than adding a new primary entity: fragmentation threatens the coordinated-delivery claim and cannot be ignored, but the coordination structure already exists — program aggregation, Planning Scope alignment, parallel closure, and funding-window expiry — and the fix is to make cross-project dependencies declarable and program-level coherence visible, while bundled all-or-nothing funding stays bounded to Extension v1+.

A project may declare hard dependencies on other projects inside a Composite Program, and program-level funding coherence is visible before citizens fund; components keep independent funding attempts, and Core v0 does not make funding all-or-nothing across a program. The minimum elements are cross-project dependency declarations inside composite programs, so a component can state that it requires another (X requires Y) visibly before funding; program-level funding-coherence visibility showing which components are funded and unfunded, with stranded-complement warnings when a prerequisite funds and its dependents do not; dependency-aware funding windows, so a dependent component's window can reference its prerequisite's state rather than expiring blindly against it; and open acknowledgement that procurement-scale losses are a real cost of modularity. In Macul, a sports program of four linked projects — multi-court build, night lighting, an access ramp with drainage, and a two-year maintenance plan — where the courts and lighting fund quickly while the drainage expires, now declares and shows the drainage dependency before citizens fund the courts, warns that a funded build is stranding without its complement, and keeps the funded money reserved behind closure rather than paying for a half-system, even though Core v0 still does not make the courts' funding conditional on the drainage.

Components keep independent funding attempts — Core v0 has no all-or-nothing program funding, and conditional or escrowed bundle funding with automatic return, along with shared procurement and shared control packages across linked projects, remains Extension v1+. Limitation statement: complementarities can still strand at the program level when prerequisites fund and dependents do not, and modularity's benefits — smaller blast radius, comparability, exit options — are bought at scale-economy costs the corpus does not hide.

---

## A030 - Clientelism migration into distributed allocation

**Severity:** High
**Status:** Resolved
**Resolution document:** [[98_CLIENTELISM_PATTERN_INDICATORS_AND_A030_RESOLUTION|docs/98_CLIENTELISM_PATTERN_INDICATORS_AND_A030_RESOLUTION.md]]

### Accepted v0 rule

A030 is founded as an adaptation risk. Clientelist machines adapt to new institutions rather than dying with the old ones: brokers migrate in as delegates, participation-support providers, community organizations, or intermediaries, exchanging allocation behavior for private favors arranged entirely off the platform, and the quid pro quo is invisible by construction, so relationship graphs and related-party declarations never capture it. Under [[P007-integrate-or-bound-rule|knowledge/principles/P007-integrate-or-bound-rule.md]], this resolution integrates observability through the A014 related-party relationship graph and the delegation records rather than adding a new entity or a hard anti-broker ban: off-platform clientelism attacks the anti-capture claim and cannot be ignored, but the on-platform half of the exchange — equally invisible today — is already traceable, so the fix is to surface repeated patterns as leads while the off-platform act routes to external law (test 4).

The platform makes the on-platform half of a clientelist exchange traceable and surfaces pattern-level indicators over time; it does not adjudicate the off-platform favor, which is named as a distinct risk with a documented observability boundary. The minimum elements are repeat broker-beneficiary alignments across cycles; geographic delegation blocs correlated with related-project funding; participation-support providers whose assisted citizens' allocations concentrate on related actors; and indicators that feed review, complaint, and verified-discovery paths as leads, never automatic verdicts, with participation-support projects carrying anti-conditioning declarations and independent beneficiary confirmation. In Macul, a funded participation-support operator offering off-platform paperwork help, food parcels, and job referrals to residents who delegate their sports-scope allocation to it is never seen exchanging the food parcel, but its represented weight across four neighborhoods, its delegated-action pattern, and its funding of allied projects are recorded and comparable over time, so a fiscalizer or electoral-integrity authority has a traceable pattern to act on rather than nothing; a citizen can revoke a delegation privately and immediately for future actions, exiting a coercive relationship without the broker observing the exit at action time.

Off-platform quid pro quo remains invisible by construction; sanction of vote-buying-style exchange is external law, routed to complaint, competent-authority, or electoral-integrity channels, and Core v0 imposes no hard anti-broker ban — community organization and brokerage are not treated as clientelism per se. Limitation statement: the platform makes machine-style allocation patterns statistically visible over time — a real improvement over street-level clientelism's full invisibility — but a careful machine trading entirely off-platform favors, and splitting influence across multiple entities, remains undetectable from within.

---

## A031 - Polarization and symbolic capture of allocation

**Severity:** Medium
**Status:** Resolved
**Resolution document:** [[99_MOTIVE_NEUTRALITY_BOUNDARY_AND_A031_RESOLUTION|docs/99_MOTIVE_NEUTRALITY_BOUNDARY_AND_A031_RESOLUTION.md]]

### Accepted v0 rule

A031 is partially founded. Allocation can become an identity battleground: funding and defunding turn into tribal signaling, coordinated brigade-funding and boycott campaigns mobilize around projects, and value/antivalue declarations become culture-war terrain, while aggregate signals cannot by themselves distinguish a broadly legitimate project from a well-mobilized one — yet expressive, identity-driven allocation is legitimate citizen choice, and the platform's job is not to police motive. Under [[P007-integrate-or-bound-rule|knowledge/principles/P007-integrate-or-bound-rule.md]], this is a bounded resolution: polarization threatens the social-sovereignty-over-value claim and cannot be ignored, but the control fits existing objects — antivalue management, affected-party evidence, threshold policies, funding-target closure, and administrative observability — and the residual is a deliberation-quality problem, not a missing mechanism, since a platform that discounted "tribal" support would arrogate to itself exactly the authority over value that P002 denies it.

Citizens' reasons for funding are not platform business, and material effects stay gated identically regardless of motive; the platform does not police motive, moderate viewpoint, or attach effects to any polarization score. The minimum elements are reasons for funding kept outside the platform's authority (P002), so no motive-policing and no viewpoint moderation of allocation; material effects gated identically regardless of motive, so antivalue declarations route through measurement and fiscalization, affected-party evidence and threshold policies bind, and a contested antivalue supports a complaint only if someone files one; funding-bloc correlation observability — synchronized timing, shared origin, reciprocal brigading across paired projects — as research and administrative data only, without discounting either side's signals; and funding-target closure (H035) bounding brigade amplitude on any single project so a faction cannot pour unbounded funding into a favorite to overwhelm a rival. In Macul, where a migrant-run football school and a rival club's facility become proxies in an identity dispute and each faction brigades the other with contested antivalue declarations and counter-mobilized funding, both projects keep their expressive support and objections, but the antivalue claims still route through measurement and fiscalization, so tribal funding buys feasibility, not a waiver from the noise data or the closure rule.

Core v0 does no motive policing, no viewpoint moderation of allocation, and attaches no platform effect to any polarization score; mobilization-pattern indicators are observability only, and deliberation-surface protections and contextual protected identity are supported but do not judge why citizens act. Limitation statement: expressive allocation can still shift aggregate spending toward symbolic battlegrounds and a hostile comment surface can drive out moderates — the architecture guarantees the fights stay materially accountable, not that they stop being fights.

---

## A032 - Intertemporal myopia and long-term underinvestment

**Severity:** Medium/High
**Status:** Resolved
**Resolution document:** [[100_LONG_HORIZON_LANES_AND_A032_RESOLUTION|docs/100_LONG_HORIZON_LANES_AND_A032_RESOLUTION.md]]

### Accepted v0 rule

A032 is partially founded. Monthly allocation cycles reward visible near-term outputs and renewal windows re-expose long-horizon commitments to each cycle's shifting attention, so hyperbolic discounting tilts new funding away from maintenance, prevention, and intergenerational infrastructure, and future citizens are unrepresented in every funding attempt — but the goods most vulnerable to myopia are already shielded structurally, and the sharp edge is new long-horizon value above the floor. Under [[P007-integrate-or-bound-rule|knowledge/principles/P007-integrate-or-bound-rule.md]], this is a bounded resolution built on existing structures: formation-stage myopia threatens the aggregate-citizen-valuation claim and cannot be ignored, but the control fits existing objects — Planning Scopes, the non-assignable pool, continuity-risk classification (A006), and administrative observability — and the residual, an unrepresented future, is a declared limitation, not a mechanism Core v0 can supply.

Planning Scopes may define long-horizon lanes whose need-weights flow into the default allocation, and intertemporal allocation is observable; Core v0 does not discount-correct citizen preferences or force intergenerational weights. The minimum elements are planning-scope long-horizon lanes — maintenance, prevention, infrastructure — whose need-weights flow into default allocation as a transparent, versioned public choice; intertemporal allocation observability — funding share by time-to-benefit horizon, and deferred-maintenance indicators — so under-funding of durable value is measurable before failure; continuity-risk classification (A006) plus the non-assignable pool retained as the structural shields for existing obligations, pulling maintenance and continuity needs into protected renewal paths; and renewal windows made visible before expiry so a long-horizon commitment's re-exposure is surfaced rather than silent. In Macul, a fifteen-year stormwater and slope-stabilization need whose benefit is a landslide that never happens, losing month after month to visible plazas and courts, is pulled into a protected renewal path where it is a continuity obligation, or carried into the default by a planning-scope long-horizon lane where it is genuinely new value, and the funding share by time-to-benefit horizon makes the under-investment arguable before the slope fails rather than diagnosed afterward.

Core v0 does not discount-correct citizen preferences or force intergenerational weights, and future citizens remain unrepresented in funding attempts; multi-cycle or endowment lanes insulated from per-cycle attention remain Extension v1+. Limitation statement: formation bias against new long-horizon value above the floor is real and mitigated only insofar as planning-scope lanes and defaults carry it — which the simulation shows is exactly where allocation quality lives, tying this limitation to the A020 agenda constraint over who sets planning-scope weights.

---

## A034 - Legal characterization of the citizen allocation act

**Severity:** Medium/High
**Status:** Resolved
**Resolution document:** [[102_ALLOCATION_ACT_CHARACTERIZATION_AND_A034_RESOLUTION|docs/102_ALLOCATION_ACT_CHARACTERIZATION_AND_A034_RESOLUTION.md]]

### Accepted v0 rule

A034 is founded as a characterization gap at the legal interface. The citizen allocation act has no settled legal nature — administrative act, sui generis participation act, or mere preference input — and each characterization implies different review rights, liability, and contestability, so an unstated one imports litigation risk the architecture never designed for; read comparatively, though, the act replaces a state official's discretionary allocation, whose formal characterization has never delivered practical per-decision accountability. Under [[P007-integrate-or-bound-rule|knowledge/principles/P007-integrate-or-bound-rule.md]], this integrates a minimal record through the existing Allocation Mandate and bounds the doctrine itself: the platform records the characterization a jurisdiction chooses and discloses it to citizens, while constructing that characterization remains external constitutional and administrative law.

Every active Planning Scope's Allocation Mandate additionally records how the citizen allocation act is legally characterized in that jurisdiction. The minimum elements are a bounded characterization menu — administrative act, sui generis participation act, or preference input, chosen per country implementation; a pilot default of sui generis participation act with vote-like citizen immunity and no individual review right over rule-based reassignments, while the complaint path stays unchanged for rule violations; plain-language disclosure of the characterization on the citizen surface before first allocation; a comparator note documenting how the replaced official allocation act is characterized and reviewed in the pilot jurisdiction; and versioning and audit events on any characterization change, treated as a higher-authorization decision like a formula departure. In Macul, a citizen sees one plain sentence before her first allocation — her act directs public money under the scope's rules, carries no personal liability, and rule-based reassignments are not individually contestable while rule violations always are — and the same screen records which municipal instrument chose that regime.

Core v0 does not construct, adjudicate, or harmonize administrative-law doctrine and does not grant or deny standing: it records the jurisdiction's choice and makes it visible, and characterization menus and their consequences for review rights are country-implementation decisions. Limitation statement: the platform records the characterization law supplies and cannot supply one; no characterization of a citizen allocation act has been tested before any court in any jurisdiction, so the doctrinal construction is untested by definition until a pilot produces a dispute.

---

## A035 - Administrative capacity cost of tutored operation

**Severity:** Medium/High
**Status:** Resolved
**Resolution document:** [[103_ADMINISTRATIVE_CAPACITY_DECLARATION_AND_A035_RESOLUTION|docs/103_ADMINISTRATIVE_CAPACITY_DECLARATION_AND_A035_RESOLUTION.md]]

### Accepted v0 rule

A035 is founded as a deployment precondition. Tutored operation requires human reviewers to decide admissibility, resolutions, and timeouts within declared windows, and an under-resourced authority produces lapse cascades that read as model failure rather than as an unfunded post; read comparatively, though, the review labor already exists — an official approves budgets and projects today, unmeasured — and the model re-platforms that work under declared windows and public attribution rather than creating it. Under [[P007-integrate-or-bound-rule|knowledge/principles/P007-integrate-or-bound-rule.md]], this integrates through existing objects — the Planning Scope carries the declaration as it carries the Allocation Mandate and Fiscal Commitment Profile, timeout policies are already configurable per operating mode, and the C008 AI-assistance boundary already exists — and bounds quantification: no staffing number is empirical until the first pilot measures one, and deployment economics remain country implementation, not an argument this corpus makes.

Every tutored Planning Scope publishes an Administrative Capacity Declaration alongside its mandate and fiscal profile. The minimum elements are expected review volume, staffing assignment, and per-resolution effort assumptions, published and versioned with the scope; timeout policies calibrated to the declared capacity and never copied between scopes with different declarations; authority-side AI assistance for resolution drafting, admissibility checklists, and window tracking inside the existing boundary, where AI assists, the responsible authority decides, and every decision is attributable; review-window performance — decisions in window, lapses, timeout outcomes — joined to the functional transition maturity metrics; and hours-per-resolution measurement by resolution type committed as an explicit first-pilot deliverable, the corpus's first empirical staffing data. In Macul, a commune publishing one assigned reviewer, forty expected reviews per quarter, and visibility-only timeouts, whose reviews then lapse in month two, shows the lapses against a declared one-reviewer capacity, so the corrective discussion is about the staffing line, not the model.

Core v0 does not model staffing economics, prescribe headcounts, or argue implementation costs: operating capacity is absorbed and budgeted by the installing authority as country implementation, and a lapsed deadline never produces an anonymous system action — it produces a public Review Timeout Resolution naming the responsible authority, dates, decision result, and applicable policy, so the software is never the responsible party. Limitation statement: until a pilot measures hours per resolution type, every capacity declaration is an assumption and the corpus contains no empirical basis for sizing one; the declaration's function is to make that assumption public and falsifiable, not to replace the measurement.

---

# B. Checklist by system area

## 1. Actor and role checklist

- [ ] Can every role be traced to an actor?
- [ ] Does every responsibility-heavy role require acceptance?
- [ ] Are role conflicts declared?
- [ ] Can an actor hold conflicting roles in the same project?
- [x] Are public authorities kept external to internal project participation in scopes they control under Core v0?
- [x] Are state-owned operators distinguished from public authorities and checked for control, privilege, and operating-mode conflicts?
- [x] Are material tutored decisions represented as public governance-resolution objects?
- [ ] Is the minimum related-party relationship graph (ownership/control, board control, material suppliers, repeated control relationships, delegate/funder ties, authority-linked operators) visible where material?
- [ ] Is the A014 relationship graph reused for A018 collusion observability rather than duplicated?
- [ ] Are repeated actor clusters across projects visible, reusing the A014 relationship-and-control graph across roles and suppliers rather than a duplicate?
- [ ] Does role-based reputation match actual responsibility?

## 2. Project object checklist

- [ ] Does every project have a responsible executor before execution funding?
- [x] Are Idea, draft project, and open financeable project clearly separated?
- [ ] Does every financeable project reference an active Planning Scope?
- [ ] Does every project have value thesis, beneficiaries, metrics, evidence, fiscalization, risks, and antivalues?
- [ ] Does a project plausibly affecting a common good declare affected assets, affected parties, and either no impact, uncertain impact with explanation, or impact with explanation?
- [ ] Is the full charter system (registry, voting, adjudication) kept out of Core v0 as Extension v1+ while the common-good sufficiency test binds through the existing impact declaration?
- [ ] Does every execution-financeable project have a Financial Assurance Profile?
- [ ] Does every execution-financeable project that requires post-closure accountability have a Post-Closure Coverage Profile?
- [ ] Does the profile state whether coverage is Executor Direct Warranty or Equivalent Insurance / Bond / Coverage?
- [ ] Are the post-closure window, covered dimensions, excluded dimensions, response path, and expiry route defined before closure?
- [ ] Is financial assurance treated as universal across social projects, not only construction or infrastructure?
- [ ] If the project uses phases, are phase deliverables, gates, dependencies, and failure treatment explicit?
- [ ] If the project is recurring, continuity-critical, emergency, or maintenance-dependent, does it expose Continuity Risk Classification, funded service period, renewal trigger, future funding dependency, beneficiary protection, and wind-down rule?
- [ ] If follow-on funding may be required, does the project create or update a continuity-need Idea before interruption rather than hiding the need until service ends?
- [ ] Is the current executor allowed to propose continuity without receiving automatic renewal or privileged selection?
- [x] Are material claims, approval labels, and unresolved conditions source-linked where they affect citizen decisions?
- [ ] Where affected-party legitimacy conditions apply, does the project have a Project Legitimacy Profile tied to Threshold Policy and Required Evidence Package records?
- [ ] Are required affected-party maps, consultation evidence, observation windows, or plan-review records present before execution-ready status where the policy requires them?
- [ ] Is low participation treated as warning/observability unless Threshold Policy makes the missing participation evidence a formal condition?
- [ ] Are pre-execution required evidence records classified as Readiness Evidence rather than Fulfillment Evidence unless they are separately reviewed for a fulfillment effect?
- [ ] Are project versions immutable?
- [ ] Are reformulations visible?
- [ ] Can project history be reconstructed from audit events?
- [ ] If a project is outside the active Planning Scope, is it kept as an Idea, reclassified, reformulated, or routed into future planning-scope governance rather than made execution-financeable by default?
- [ ] Does closure create a Project Closure Accountability Record?
- [ ] Is a project prevented from closing as fulfilled when main commitments lack sufficient, reviewed, traceable fulfillment/control evidence?
- [ ] Does every required object, field, state, or procedural step name the material failure mode it controls?
- [ ] Do new v0 entities pass the cannot-be-safely-derived test before entering the formal inventory?
- [ ] Are Extension v1+ ideas kept out of Core v0 by default under the P007 integrate-or-bound rule?
- [ ] Can a component in a Composite Program declare hard dependencies on other components, visible before citizens fund?
- [ ] Does the program surface funding coherence with stranded-complement warnings when a prerequisite funds and its dependents do not, while components keep independent funding attempts?

## 2a. Public guarantee and service provision checklist

- [ ] Are public/legal guarantees, civil rights, standards, accreditation, coverage duties, and funding rules distinguished from direct state service provision?
- [ ] Can eligible public, private, nonprofit, cooperative, university, concession-like, or state-owned operators provide publicly financed services where the active rules allow it?
- [ ] Are all service providers subject to the same applicable evidence, fiscalization, complaint, payment, reputation, correction, revocation, replacement, and guarantee rules?
- [ ] Are platform consequences such as payment block, retention, reputation effect, correction, revocation, replacement, or guarantee use separated from legal consequences such as administrative sanction, civil liability, license effect, fine, court order, or regulatory intervention?
- [ ] Does the project or operating mode identify which failures require referral to a competent authority, regulator, court, contract path, or enforceable legal obligation?
- [ ] Do payment and eligibility rules prevent cream-skimming, such as serving only easy, profitable, low-risk, or high-visibility beneficiaries?

## 3. Value and metrics checklist

- [ ] Is every value icon linked to metrics?
- [ ] Does the project define a Value-Antivalue Profile where relevant?
- [ ] Are value commitments represented as floors the project must reach?
- [ ] Are relevant antivalues represented as ceilings the project must not exceed?
- [ ] Does every antivalue ceiling identify affected parties, zones, assets, or common goods where applicable?
- [ ] Is unexplained overuse of `uncertain` prevented and does plausible common-good impact trigger evidence and fiscalization needs?
- [ ] Does every antivalue ceiling define measurement or review method, timing/frequency, required fulfillment/control evidence, and review consequence?
- [ ] Is every core value commitment linked to a fulfillment evidence need?
- [ ] Is every metric linked to fulfillment evidence needs and review consequences?
- [ ] Does the Value Verification Package include an A004 evidence-coverage matrix for value floors, formal secondary values, antivalue ceilings, material value claims, and relevant metrics?
- [ ] Are coverage gaps, weak coverage, metric gaps, or under-correction states visible before funding or formal effects?
- [ ] Can the project satisfy a narrow metric while leaving usability, access, beneficiary experience, affected-party impact, continuity, or an antivalue ceiling unverified?
- [ ] Is every formal evaluation scoped to a dimension and formal effect?
- [ ] Are soft public signals distinguished from fulfillment evaluation, technical review, fiscalization conclusions, complaint findings, and reputation inputs?
- [ ] Does every formal evaluation record its actor role, observability basis, authority or qualification basis, and contextualized evidence used where applicable?
- [ ] Are evidence submission, review, correction, and closure deadlines configured before they apply rather than improvised at closure?
- [ ] Are qualitative value claims handled?
- [ ] Are input-only metrics rejected when insufficient?
- [ ] Does the Project Evidential Contract define fulfillment/control evidence needs rather than preselected evidence producers?
- [ ] Can independent evidence producers tie offers to specific value floors, antivalue ceilings, metrics, material claims, milestones, phases, risks, or declared antivalues?
- [ ] Are unexpected or supplemental evidence offers prioritized lower unless accepted as equivalent, necessary, materially useful, or complementary?
- [ ] Are antivalues declared?
- [ ] Is antivalue non-compliance separated from automatic complaint creation?
- [ ] Can projects game easy metrics?
- [ ] Is there a mechanism to challenge weak metrics?
- [ ] Are material effects gated identically regardless of motive — antivalue declarations routed through measurement and fiscalization rather than discounted as "tribal" or amplified by mobilization?
- [ ] Is funding-bloc correlation (synchronized timing, shared origin, reciprocal brigading) observable as research and administrative data only, without attaching any platform effect to a polarization score?

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

## 3b. Performance history checklist

- [ ] Is historical performance shown through generic, role-comparable categories rather than a separate public history for every value label declared by every project?
- [ ] Is the Performance History Surface derived from reviewed records such as Project Closure Accountability Records, EvaluationRecords, FiscalizationReports, Responsibility Events, Reputation Summaries, financial closure outcomes, and final or procedurally classified complaint outcomes?
- [ ] Is the surface prevented from creating formal responsibility, reputation, disbursement, closure, suspension, or allocation effects by itself?
- [ ] Are actors compared only by role and meaningful context, such as public function, project size, risk, regulated status, territory, or operating mode where relevant?
- [ ] Are data sufficiency, small sample size, and comparability limits visible?
- [ ] Are universal public-value-per-currency scores, popularity rankings, social-credit effects, and automatic allocation rules excluded from Core v0 performance history?

## 4. Funding checklist

- [ ] Is funding clearly a conditional commitment?
- [ ] Is distributed allocation bounded to the configured assignable public-purpose share rather than the whole public budget?
- [ ] Does every active Planning Scope carry an Allocation Mandate record naming its mandate source and authorizing instrument?
- [ ] Are departures from equal-per-citizen allocation flagged as higher-authorization decisions naming the authority that chose them?
- [ ] Does the Allocation Mandate record how the citizen allocation act is legally characterized in the jurisdiction, disclosed in plain language on the citizen surface before first allocation?
- [ ] Is a comparator note documenting how the replaced official allocation act is characterized and reviewed in the pilot jurisdiction recorded with the mandate?
- [ ] Are non-assignable common-pool functions protected from popularity, discovery visibility, delegation concentration, and monthly attention effects?
- [ ] Where essential services are involved, does the Planning Scope distinguish protected floor, distributed service lane, planning-continuity target, and funding-lane treatment?
- [ ] Are underfunded protected scopes visible without creating hidden algorithmic allocation?
- [ ] Are ordinary civic-wallet allocations blocked from non-assignable protected floors or excluded lanes?
- [ ] Are citizen allocation, project eligibility, execution readiness, disbursement approval, and fulfillment evaluation kept separate?
- [ ] Is funding completion prevented from being displayed as legitimacy, community approval, or affected-party consent?
- [ ] Is money prevented from going directly to executor before conditions?
- [x] Is funding described as commitment until closure rather than free withdrawal?
- [ ] Does each financeable project, phase, or lane have a visible funding window and Funding Attempt?
- [ ] If a funding attempt expires unfunded, are eligible unused commitments returned, reassigned, or routed through the citizen's default rule?
- [ ] Are funding-window extensions objective, capped, visible, and tied to a policy source?
- [ ] Are republication and cloning histories preserved rather than reset?
- [ ] If Budget Liquidity Smoothing exists, is it public, capped, stress-tested, audited, and separated from treasury discretion over project priority?
- [ ] Does every Planning Scope carry a public, versioned Fiscal Commitment Profile (migrated share, indexation, delivery-latency target, horizon)?
- [ ] Are expected-versus-actual balance delivery, order-to-execution latency, and unexecuted valid orders observable and attributable?
- [ ] Do profile changes surface as governance events with reason, magnitude, affected scopes, and beneficiary impact, feeding H054 and A016 indicators?
- [ ] Are delegated and automatic allocations distinguishable?
- [ ] Are unused funds handled clearly?
- [ ] Are funders notified of material changes?
- [ ] If execution funding is phase-specific, does the citizen see whether funds are reserved pending a phase gate?
- [ ] Does the active policy define the guarantee percentage or assurance requirement instead of the proposer, designer, or executor?
- [ ] Is a required guarantee treated as materialized only after custodian, guarantor, insurer, treasury, bank, escrow, or lawful equivalent confirmation?
- [ ] Does advance payment carry recoverability, retention, direct supplier payment, guarantee, or equivalent protection?
- [ ] Above the essential floor, is the salience gradient observable as funding per category against declared planning-scope need weights across salient-versus-non-salient and preventive-versus-remedial lanes?
- [ ] Is any default weighting toward under-allocated non-salient categories a disclosed, versioned protocol choice, with inactive budget routed by planning priority rather than salience?
- [ ] Are herding indicators observable above the funding surface — funding velocity versus evidence maturity, funding-source independence, and discovery-slot concentration — with funding progress kept visible rather than hidden?
- [ ] Is funding-target closure retained as the structural cascade truncator, with its claim bounded to concentration and completion breadth rather than quality selection?
- [ ] Are per-territory and per-group allocation outcomes observable — funding per capita by comuna, funded-project density against need weights, and capture share by organized proposers?
- [ ] Is the input-equity versus outcome-equity distinction stated so equal wallets are not presented as fair outcomes, with equalization left to authorized country implementation rather than a silent setting?
- [ ] May Planning Scopes define long-horizon lanes whose need-weights flow into the default allocation, with funding share by time-to-benefit horizon and deferred-maintenance indicators observable?
- [ ] Are renewal windows surfaced before expiry, with continuity-risk classification (A006) and the non-assignable pool retained as the structural shields for existing obligations?

## 5. Disbursement checklist

- [ ] Does every disbursement have a milestone?
- [ ] If the project is phased, does every relevant disbursement reference the applicable phase?
- [ ] Does every disbursement have evidence?
- [ ] Does every disbursement have fiscalizer review?
- [ ] Are blocking issues checked before release?
- [ ] Does a complaint-based disbursement block identify affected scope and distinguish systemic pause from material/legal suspension?
- [ ] Do hidden or control-relevant relationships escalate to correction, blocking, exclusion, complaint, responsibility, or reputation effects while declared proximity stays proportional?
- [ ] Is beneficial-ownership verification treated as country implementation rather than a Core v0 promise?
- [ ] Does every milestone link to budget line, phase, value relevance, evidence need, review basis, blocker check, retention, and release amount?
- [ ] Can avoidably weak milestone design trigger designer/modeler responsibility review, and does the fiscalizer state why evidence supports release, partial release, retention, or rejection?
- [ ] Do citizen-facing summaries separate funding, reservation, release, retained funds, and guarantee status?
- [ ] Does every execution-financeable project name a solvent Duty-of-Care Anchor for third-party physical harm before disbursement, exposed on the citizen sheet?
- [ ] Do assurance and post-closure profiles include third-party liability coverage proportionate to physical risk where Threshold Policy requires?
- [ ] Does the responsibility matrix distinguish no-internal-breach from no-one-liable-to-the-victim, and does the audit trail preserve a court-usable harm-attribution package?
- [ ] Are partial releases governed by pre-defined rules?
- [ ] Are retained funds visible?
- [ ] Does release check the Financial Assurance Profile and Guarantee Materialization Record where applicable?
- [ ] Does final release or closure preserve any active post-closure warranty, insurance, bond, guarantee, escrow, retention, or equivalent coverage reference?
- [ ] Is every release auditable?
- [ ] Are later-phase funds blocked when prerequisite phase gates are pending, rejected, or materially reformulated?

## 6. Evidence checklist

- [ ] Is contextualized evidence classified by source and interest?
- [ ] Is every contextualized evidence item linked to an evidence context and to a fulfillment evidence need, metric, material claim, milestone, phase, or complaint issue where applicable?
- [ ] Is contextualized evidence privacy classified?
- [ ] Is contradiction evidence allowed?
- [ ] Are independent fulfillment/control evidence requirements defined for risky projects?
- [ ] Do hard KPI evidence needs define producer qualification and method standards before evidence is financed or used?
- [ ] Is false, manipulated, or low-quality contextualized evidence penalized by role and evidence context?
- [ ] Can insufficient evidence be accepted only as contextual material without proving fulfillment?
- [ ] Are missing credential, accreditation, instrument, calibration, chain-of-custody, timestamp, location, linkage, method, or metadata limitations visible where they matter for the formal effect claimed?
- [ ] Can citizens understand contextualized evidence status without reading raw files?

## 6a. Distributed trust checklist

- [ ] Does each material trust signal trace back to a material claim, actor role, contextualized evidence, and review status?
- [ ] Are the incentives of each role visible enough to explain why the actor would produce reliable behavior?
- [ ] Are evidence producers paid or reputationally rewarded for technically adequate, useful, sufficient, traceable evidence rather than for favoring the executor?
- [ ] Is paid fulfillment/control evidence treated as formal proof work requiring idoneous producers and adequate methods, not as casual material upload?
- [ ] Can submitted evidence be corroborated, contradicted, marked insufficient, corrected, or rejected?
- [ ] Are fiscalizers, reviewers, or competent authorities responsible for formal evaluation rather than raw evidence, AI flags, or popularity?
- [ ] Are payment, disbursement, reputation, correction, revocation, or responsibility effects tied to reviewed findings rather than unsupported trust?
- [ ] Do citizen-facing labels such as self-reported, corroborated, disputed, contradicted, accepted, insufficient, corrected, or reviewed expose a path to Layer 5 source records?
- [ ] Is blockchain-like registry integrity prevented from being treated as truth by itself?

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
- [x] Does each responsible fiscalizer assignment expose project-specific eligibility criteria?
- [x] Does each fiscalizer assignment expose a contextual eligibility and reputation profile rather than a generic score?
- [x] Are repeat relationships, dependency concentration, workload, and comparable-project history visible where material?
- [x] Do fiscalization reports identify scope, methodology, evidence considered, evidence rejected, limitations, conflicts, sufficiency, and formal effect claimed?
- [x] Can quality/capture warnings trigger safeguards, replacement, secondary fiscalization, fiscalization audit, or responsibility review through defined rules?
- [ ] Does final fiscalization feed the Project Closure Accountability Record rather than remain an isolated report?
- [ ] Can fiscalizers resign or be replaced?
- [ ] Are fiscalizer reports public or privacy-filtered?
- [ ] Does fiscalizer reputation update after closure?
- [ ] Do timing-anomaly and outcome-pattern surfaces feed human review, complaint, and verified-discovery paths rather than automated verdicts?
- [ ] Do critical milestones require independent corroboration, and can confirmed hidden coordination produce cross-role responsibility events?
- [ ] Is the comparative claim preserved — collusion made harder, riskier, and more discoverable, never promised eliminated?
- [ ] Is control-supply density observable by territory and domain, with a thin-market indicator surfaced before publication rather than discovered at control-package closure?
- [ ] Where control supply is thin, is any relaxed selection a disclosed country-implementation choice under named safeguards, with priced compensation for weak verification rather than a silent standard drop?

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
- [ ] If the project is closed, does the complaint path first check whether the Post-Closure Coverage Profile is active and covers the issue?
- [ ] Are expired or out-of-scope post-closure complaints routed externally instead of processed as ordinary platform complaints?
- [ ] Can final external decisions be recorded without treating mere external filing as proof or reputation input?
- [ ] Are weak or abusive complaints handled without discouraging good-faith complaints?
- [ ] Do material common-good omissions connect to fiscalization, complaint, mitigation, responsibility, and reputation effects?
- [ ] Does every complaint have a visible status?

## 9. Delegation checklist

- [ ] Is delegation scoped?
- [ ] Does delegate acceptance occur before activation?
- [ ] Can delegation be revoked for future actions?
- [x] Are automatic allocation and delegation separate?
- [x] Is delegation priority over automatic allocation explicit?
- [x] Is concentration visible?
- [x] Are A010 stress warnings represented through existing delegation/reporting/audit records rather than a new concentration authority?
- [ ] Are high-concentration delegated actions linked to represented weight, cap effect where configured, and report-sufficiency status?
- [ ] Are delegate actions reported?
- [ ] Does delegate reputation reflect delegated decisions?
- [x] Are participation-support projects separated from delegation commissions, hidden authority, and automatic citizen allocation?
- [ ] Are material relationships between support providers, delegates, proponents, executors, or recommenders disclosed where relevant?
- [ ] Are related-delegate, support-provider, or related-project relationships visible where material to concentration risk?
- [ ] Are the per-cycle shares of manual, profile-driven, delegated, and untouched-default allocation measured and versioned, with active-core concentration tracked across cycles?
- [ ] Does citizen-facing legitimacy language distinguish deliberate evaluation from default and profile carry-over rather than presenting carry-over as considered choice?
- [ ] Are pattern-level clientelism indicators — repeat broker-beneficiary alignments and geographic delegation blocs correlated with related-project funding — surfaced as leads to review, complaint, and referral paths rather than automatic verdicts?
- [ ] Do participation-support projects carry anti-conditioning declarations and independent beneficiary confirmation, and can a citizen revoke a delegation privately for future actions?

## 10. Interface checklist

- [ ] Is the ordinary citizen view simple?
- [ ] Are signals clickable?
- [ ] Can technical detail be reached when needed?
- [x] Do compact cards surface unresolved material warnings?
- [x] Is project discovery explainable?
- [x] Are urgent/promoted-looking slots rule-based?
- [x] Is A008 handled through existing discovery, AI-assistance, and rule-change controls rather than a new Core v0 entity?
- [x] Is A009 handled as a boundary without requiring perfect participation or a new Core v0 indicator layer?
- [ ] Do low-risk projects keep an explicit minimum viable path, with heavier burdens triggered by ThresholdPolicy rather than universalized?
- [ ] Do citizen surfaces preserve A006 labels such as `funds first six months`, `maintenance not funded`, `renewal window open`, `continuity idea open`, or `wind-down rule declared` where material?
- [x] Can users customize Home categories without changing project eligibility?
- [ ] Are citizen-facing states mapped from technical states?
- [x] Do approval labels expose approving role or authority, criterion source, scope, date or version, and unresolved conditions where material?

## 11. Transition checklist

- [ ] Is operating mode visible?
- [ ] Are active Planning Scopes visible, versioned, and auditable?
- [ ] Do essential or continuity-sensitive Planning Scopes expose protected floors, distributed service lanes, continuity targets, underfunding indicators, and rule-change records?
- [ ] Is tutored mode justified?
- [ ] Is there a review date or maturity condition?
- [ ] Can institutional moderation be audited?
- [ ] Do tutored planning-scope decisions create Governance Resolution or equivalent public review traces where material?
- [ ] Does every Planning Scope change or interpretation surface as a versioned Governance Resolution with a timeout?
- [ ] Is out-of-scope demand preserved as visible Ideas with per-category volume observability rather than silently discarded?
- [x] Does A011 preserve minimum data for later moderation-pattern audit without creating a Core v0 abuse tribunal or dashboard?
- [ ] Do tutored decisions record reason category where practical, rule/version, responsible authority/process, review time, timeout status, and known authority-linked operator context?
- [ ] Does every tutored Planning Scope publish an Administrative Capacity Declaration (expected review volume, staffing assignment, per-resolution effort assumptions) with timeout policies calibrated to it and never copied between scopes with different declarations?
- [ ] Is hours-per-resolution measurement by resolution type committed as an explicit first-pilot deliverable, with review-window performance joined to the functional transition maturity metrics?
- [x] Are public authorities external to internal project competition in scopes they control under Core v0?
- [ ] Are authority-controlled operators blocked by default in tutored scopes where their controlling authority defines scope or admissibility?
- [ ] Do transition pilots expose scope share opened, approval/rejection/timeout rates, and rejection-reason comparability?
- [ ] Is authority-linked operator participation and public-operator privilege (subsidies, guarantees, data access) visible?
- [ ] Are independent versus controlled fiscalization rates and pilot-versus-incumbent-baseline outcomes observable?
- [ ] Is the political limit recorded openly — no Core v0 mechanism compels transition or protects the migrated budget share?
- [ ] Is the roadmap-construction open question kept visible as the architecture's principal open limitation, gating open-mode deployment at scale?
- [ ] Is open-mode deployment gated until constitutional-level decision mechanics are resolved and published, with the C019 procedural shell binding in every mode?
- [ ] Is any eventual protocol-change vote barred from defining the mechanism that ratifies it, with participation and concentration metrics attached?
- [ ] Is transition scope bounded?

## 12. Audit checklist

- [ ] Is every major state change an audit event?
- [ ] Does the audit event name actor, role, object, previous state, new state, and rule?
- [x] Are private details protected without hiding existence of evidence?
- [x] Can project history be reconstructed?
- [x] Are AI-assisted decisions recorded when material?
- [x] Are governance resolutions, review timeouts, and material discovery reasons auditable?
- [x] Are material visibility warnings, approval-source records, and source-linked AI summaries auditable?
- [ ] Is the distinction between visible-and-versioned and democratically-authorized preserved in citizen-facing and audit surfaces?
- [ ] Is the identity provider a declared critical dependency with enumerated failure modes and compromise-response procedures?
- [ ] Is every access to act-to-identity linkage an audited event carrying its purpose and checkable by an independent party, with a heightened de-anonymization threshold for complaints against powerful actors?

# C. Current integration priorities

C001-C025 are resolved through dedicated resolution documents.

The current priority is no longer to decide these contradictions. The priority is to propagate the accepted rules into the core corpus and then run another contradiction pass against the integrated model.

Highest-priority integration checks:

```text
1. Ensure Idea and Project are distinct in all core documents.
2. Ensure public authorities are external actors in scopes they control, while eligible state-owned operators are treated through the C007 control and privilege boundary rather than by ownership label alone.
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
16. Ensure project closure creates an accountability record connecting promise, fulfillment/control evidence, evaluation, financial closure, post-closure coverage, responsibility, reputation, and unresolved issues.
17. Ensure post-closure complaints are accepted inside the platform only within an active covered window and otherwise routed externally.
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
