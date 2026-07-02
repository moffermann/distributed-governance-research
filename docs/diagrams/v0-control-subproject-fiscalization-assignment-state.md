# Diagram - Control Subproject and Fiscalization Assignment State v0

## Purpose

Show how a `Control Subproject` and its `Fiscalization Assignment` move from required control into offers, selection, funding, assignment, evidence production, fiscalization reports, and formal effects.

This diagram separates:

- open observation;
- lightweight fiscalizer or evidence-producer offers;
- selected control work;
- responsible fiscalization;
- supplemental or secondary fiscalization;
- evidence production;
- fiscalization reports;
- formal evaluation effects.

A control subproject is project-like, but it is not an ordinary public-value project and is not selected by ordinary popularity or by the executor being reviewed.

Source baseline:

- `docs/40_CONTROL_SUBPROJECTS_AND_C002_RESOLUTION.md`
- `knowledge/hypotheses/H016-distributed-fiscalization-ecosystem.md`
- `docs/52_FISCALIZATION_OFFER_COST_AND_C013_RESOLUTION.md`
- `docs/23_CITIZEN_FISCALIZER_OFFER_FLOW.md`
- `docs/10_FISCALIZATION_EVIDENCE_AND_CONTROL_MODEL.md`
- `docs/24_CITIZEN_EVIDENCE_PRODUCTION_FLOW.md`
- `docs/64_FORMAL_ENTITY_INVENTORY_V0.md`
- `docs/diagrams/v0-project-evidential-contract-state.md`
- `docs/diagrams/v0-funding-commitment-disbursement-state.md`

Related sources: C002, C003, C013, C016, H008, H013, H015, H016, H018, H019, H022, H023, A003.

## Control Subproject State Machine

This state machine tracks the control package or control subproject for a parent project, phase, milestone, evidence mission, admissibility review, extraordinary review, or secondary fiscalization.

```mermaid
stateDiagram-v2
    [*] --> NotRequired
    NotRequired --> RequiredByPolicy: threshold, risk, phase gate, evidence need, complaint, or protocol requires control

    RequiredByPolicy --> ScopeBudgetDraft: scope, methodology, deliverables, budget lane, and requirements drafted
    ScopeBudgetDraft --> OpportunityOpen: control opportunity published
    OpportunityOpen --> OfferWindowOpen: fiscalizer, reviewer, auditor, or evidence-producer offers open

    OfferWindowOpen --> EligibilityConflictReview: offer window closes or package can be evaluated
    EligibilityConflictReview --> NoAdmissibleOffer: no offer satisfies eligibility, conflict, method, or budget floor
    NoAdmissibleOffer --> OfferWindowOpen: extend or reopen offer window
    NoAdmissibleOffer --> ScopeBudgetDraft: reformulate control scope or budget
    NoAdmissibleOffer --> ControlFailed: deadline or policy failure

    EligibilityConflictReview --> EligibilityProfileGenerated: fiscalizer eligibility and contextual reputation profile created
    EligibilityProfileGenerated --> PackagePendingFunding: admissible package exists but funding incomplete
    EligibilityProfileGenerated --> PackageSelectable: admissible package is fundable
    EligibilityProfileGenerated --> NoAdmissibleOffer: eligibility, profile warning, or safeguard cannot be satisfied

    PackagePendingFunding --> ControlFundingOpen: control budget contributions open
    ControlFundingOpen --> PackageSelectable: budget sufficient for admissible package
    ControlFundingOpen --> ControlFundingFailed: funding window expires
    ControlFundingFailed --> OfferWindowOpen: seek lower-cost admissible package
    ControlFundingFailed --> ScopeBudgetDraft: reformulate control burden
    ControlFundingFailed --> ControlFailed: project expires, cancels, or fund treatment applies

    PackageSelectable --> PackageSelected: risk-adjusted selection rule applied
    PackageSelected --> AssignmentAcceptance: selected actors accept responsibilities
    AssignmentAcceptance --> MinimumControlPackageClosed: primary control package funded, selected, and accepted
    AssignmentAcceptance --> PackageSelectable: selected actor declines or cannot accept

    MinimumControlPackageClosed --> ActiveControl: project or phase may proceed where other gates pass
    ActiveControl --> EvidenceCollection: evidence capture, review requests, field work, or document review
    EvidenceCollection --> ReportDraft: fiscalizer or reviewer drafts report
    ReportDraft --> ReportSubmitted: report delivered

    ReportSubmitted --> ReportSufficiencyReview: scope, method, evidence considered, evidence rejected, limits, conflict, formal effect
    ReportSufficiencyReview --> ReportAccepted: report complete enough for formal use
    ReportSufficiencyReview --> CorrectionRequested: missing method, weak evidence, unclear finding, or incomplete scope
    CorrectionRequested --> EvidenceCollection: correction or additional evidence requested

    ReportAccepted --> ControlCompleted: control deliverable accepted
    ReportAccepted --> ExtraordinaryReviewTriggered: serious contradiction or control failure detected
    ReportAccepted --> SecondaryAuditOpen: protocol permits one secondary fiscalizer or fiscalization audit

    SecondaryAuditOpen --> OfferWindowOpen: supplemental control selection begins
    ExtraordinaryReviewTriggered --> ActiveControl: issue cleared or narrowed
    ExtraordinaryReviewTriggered --> ControlFailed: serious control failure confirmed

    ActiveControl --> ReplacementRequired: conflict, resignation, capture risk, missed duty, or removal for cause
    ReplacementRequired --> PackageSelectable: replacement selected from admissible offers
    ReplacementRequired --> OfferWindowOpen: no replacement available

    ControlCompleted --> Closed
    ControlFailed --> Closed
    Closed --> [*]
```

## Fiscalization Offer and Assignment State Machine

This state machine tracks an actor's offer and possible assignment. Submitting an offer does not make the actor responsible and does not create payment by itself.

```mermaid
stateDiagram-v2
    [*] --> OfferDraft
    OfferDraft --> OfferSubmitted: actor submits scope, method, cost, availability, credentials, and conflict declaration

    OfferSubmitted --> EligibilityCheck
    EligibilityCheck --> RejectedEligibility: actor type, competence, reputation, capacity, or form requirement fails
    EligibilityCheck --> EligibilityProfileReview: project-specific criteria and contextual history evaluated
    EligibilityProfileReview --> RejectedEligibility: profile does not meet assignment criteria
    EligibilityProfileReview --> ConflictReview: eligibility passes or safeguards possible

    ConflictReview --> RejectedConflict: severe conflict or hidden relationship risk
    ConflictReview --> FlaggedConflict: declared or detected conflict needs visible treatment
    ConflictReview --> AdmissibleOffer: no disqualifying conflict

    FlaggedConflict --> AdmissibleWithSafeguards: protocol allows stronger safeguards
    FlaggedConflict --> RejectedConflict: conflict too strong

    AdmissibleOffer --> SelectionReview: risk-adjusted selection rule applies
    AdmissibleWithSafeguards --> SelectionReview

    SelectionReview --> NotSelected: another admissible offer selected or budget insufficient
    SelectionReview --> SelectedPrimaryFiscalizer: responsible fiscalizer selected
    SelectionReview --> SelectedSecondaryAuditor: secondary fiscalizer or fiscalization auditor selected under cap
    SelectionReview --> SelectedEvidenceMission: distinct evidence mission selected

    SelectedPrimaryFiscalizer --> AcceptancePending
    SelectedSecondaryAuditor --> AcceptancePending
    SelectedEvidenceMission --> AcceptancePending

    AcceptancePending --> ActiveAssignment: actor accepts responsibility and auditability
    AcceptancePending --> SelectionReview: actor declines or acceptance deadline expires

    ActiveAssignment --> EvidenceCapture: evidence production or field observation where assigned
    ActiveAssignment --> ReviewWork: responsible fiscalization, audit, technical review, or report work

    EvidenceCapture --> ContextualizedEvidenceSubmitted: fulfillment or control evidence submitted
    ContextualizedEvidenceSubmitted --> ReviewWork: fiscalizer or reviewer evaluates evidence where assigned

    ReviewWork --> ReportSubmitted: report, audit, review, or mission deliverable submitted
    ReportSubmitted --> ReportAccepted: deliverable accepted for formal use
    ReportSubmitted --> ReportCorrectionRequired: incomplete, late, weak, or unclear deliverable
    ReportCorrectionRequired --> ReviewWork: correction submitted

    ReportAccepted --> FindingNoBlockingEffect: finding recorded without blocker
    ReportAccepted --> FindingRequiresFormalPath: complaint, extraordinary review, pause, blocking, or disbursement-control path needed

    FindingRequiresFormalPath --> FormalPathOpened
    FindingNoBlockingEffect --> AssignmentCompleted
    FormalPathOpened --> AssignmentCompleted: formal path records effect

    ActiveAssignment --> ResignedOrRemoved: resignation, conflict, missed duty, or removal for cause
    ResignedOrRemoved --> ReplacementRequired

    AssignmentCompleted --> ReputationReview: timeliness, independence, quality, and accuracy reviewed
    ReplacementRequired --> Closed
    NotSelected --> Closed
    RejectedEligibility --> Closed
    RejectedConflict --> Closed
    ReputationReview --> Closed
    Closed --> [*]
```

## Control Effect Routing

This flowchart shows how control work affects project state, funding, closure, and reputation without giving uncontrolled veto power to offers, secondary reviewers, or raw evidence.

```mermaid
flowchart TD
    PP[Parent Project or Project Phase]
    CR[Control Requirement]
    CS[Control Subproject]
    FO[Fiscalizer Offer]
    FERP[Fiscalizer Eligibility and Reputation Profile]
    EO[Evidence Producer Offer]
    TR[Technical Reviewer or auditor offer]
    ECR[Eligibility and conflict review]
    CPS[Control Package Selection]
    FA[Fiscalization Assignment]
    EMA[Evidence Mission Assignment]
    CEI[Contextualized Evidence Item]
    FR[Fiscalization Report]
    ER[EvaluationRecord]
    DIS[Disbursement decision]
    GATE[Execution-ready or phase-gate status]
    CL[Project Closure Accountability Record]
    SPR[SystemicPauseRecord where scoped blocker applies]
    COMP[Complaint or extraordinary review path]
    RE[ResponsibilityEvent]
    RI[ReputationInput]
    AUD[AuditEvent]

    PP --> CR
    CR --> CS
    CS --> FO
    CS --> EO
    CS --> TR
    FO --> ECR
    EO --> ECR
    TR --> ECR
    ECR --> FERP
    FERP --> CPS
    CPS --> FA
    CPS --> EMA
    FA --> FR
    EMA --> CEI
    CEI --> FR
    FR --> ER
    ER --> DIS
    ER --> GATE
    ER --> CL
    ER --> RE
    RE --> RI
    FR --> COMP
    COMP --> SPR
    SPR --> DIS
    CS --> AUD
    CPS --> AUD
    FERP --> AUD
    FA --> AUD
    FR --> AUD
    ER --> AUD

    FO -. offer alone has no control effect .-> DIS
    EO -. submitted evidence alone has no formal effect .-> ER
    TR -. secondary review is not automatic veto .-> COMP
```

## State Rules

- A `Control Subproject` is attached to a parent `Project`, `ProjectPhase`, milestone, evidence need, complaint review, admissibility review, extraordinary review, or supplemental control need.
- Control work may be project-like, but it is selected under stronger independence rules than ordinary public-value projects.
- Execution funding, fiscalizer offers, evidence-producer offers, and control-cost discovery may proceed in parallel.
- The project does not become execution-ready until the execution budget and the minimum admissible control package are both closed where control is required.
- The executor may object to verifiable conflicts and respond to requests, but it cannot privately appoint, directly pay, remove, or control the fiscalizer or evidence producer who validates its own performance.
- Lightweight offers are unpaid by default. Payment begins only when an actor is selected or assigned to accepted control work under protocol rules.
- Low-risk projects may use simple admissible selection; medium-risk projects may use simple technical/economic scoring plus semi-random selection; high-risk projects may require stronger eligibility, conflict review, technical evaluation, and public justification.
- Responsible fiscalizer selection should expose a project-specific eligibility and reputation profile. This profile is contextual to the assignment and should not become a generic CV, universal score, or automatic selector.
- Core v0 permits at most one primary responsible fiscalizer and, where protocol permits and funding supports it, one secondary fiscalizer or fiscalization auditor.
- Secondary fiscalization audits the primary fiscalization. It does not replace the primary fiscalizer and does not automatically block execution or disbursement.
- Serious findings from control work must enter a formal path: complaint, extraordinary review, correction, scoped pause, disbursement block, reformulation, responsibility review, or closure effect.

## Macul Example Trace

```text
Parent project:
Design and Construction of Multi-Courts in Macul

Required control:
Design phase gate review and construction milestone fiscalization.

Control subproject:
Review design package against declared dimensions, public access, bathrooms or accessibility commitments where promised or required, budget refinement, and construction evidence needs.

Offer process:
Fiscalizers submit methodology, cost, availability, credentials, workload, comparable-project experience, repeat relationships, and conflict declarations.

Selection:
The executor may disclose concerns but cannot choose the fiscalizer.
Protocol selects an admissible independent fiscalizer after the project-specific eligibility and reputation profile is reviewed.

Execution-ready effect:
Construction funding may be reserved, but construction execution and release remain blocked until the design gate and the minimum control package are accepted.

Secondary fiscalizer:
If later funded and allowed, it may audit the primary fiscalizer's conclusion.
If it detects wrong dimensions or locked public-access gates, that finding must enter a formal path before blocking funds or creating reputation consequences.
```

## Boundary With Other State Machines

This diagram does not replace:

- the project and phase state diagram;
- the Project Evidential Contract and Fulfillment Evidence Need state diagram;
- the contextualized evidence item state diagram;
- the complaint evidence and review state diagram;
- the funding and disbursement state diagram.

It defines how control actors are selected and assigned before their reports can affect those other objects.

## Rule

> Fiscalization is distributed in supply but protocol-selected in responsibility. Control work must be independent enough to matter, simple enough to operate, capped enough to avoid harassment, and auditable enough to create consequences when fiscalization itself fails.
