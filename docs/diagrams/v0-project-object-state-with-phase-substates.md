# Diagram - Project Object State with Phase Substates v0

## Purpose

Show the formal `Project` state machine together with the operational substates of each `ProjectPhase`.

This diagram refines the older project lifecycle diagram. It separates the parent project state from phase-level gates, funding reservation, evidence review, and scoped blockers. It should guide future object modeling, schema drafting, and state transition rules.

Source baseline:

- `docs/64_FORMAL_ENTITY_INVENTORY_V0.md`
- `docs/35_CONSOLIDATED_ENTITY_OBJECT_STATE_MAP.md`
- `docs/diagrams/v0-formal-entity-relationship.md`

Related sources: H008, H011, H013, H016, H018, H019, H021, H022, H040, C005, C016, C017, C018, C024, A006, A007, Funding Window Expiry.

## Parent Project State Machine

```mermaid
stateDiagram-v2
    [*] --> Draft
    Draft --> InValidation: proposer/modeler submits package
    InValidation --> RequiresAdjustment: missing or weak condition
    RequiresAdjustment --> InValidation: adjustment submitted
    InValidation --> ReadyToPublish: publication requirements accepted
    ReadyToPublish --> OpenProject: published

    OpenProject --> ExecutionReady: all applicable project or first-phase gates complete
    OpenProject --> RequiresReformulation: material issue before execution
    OpenProject --> Expired: deadline expires without valid closure
    OpenProject --> ExpiredUnfunded: funding attempt expires unfunded
    OpenProject --> Revoked: severe pre-execution failure

    ExecutionReady --> InExecution: controlled execution starts
    ExecutionReady --> Paused: scoped blocker prevents start

    InExecution --> CorrectionRequired: correctable project-level issue
    CorrectionRequired --> InExecution: correction accepted
    CorrectionRequired --> Paused: blocker remains unresolved

    InExecution --> Paused: systemic pause affects project scope
    Paused --> InExecution: pause lifted or narrowed
    Paused --> RequiresReformulation: baseline cannot continue unchanged
    Paused --> Revoked: severe issue confirmed

    InExecution --> RequiresReformulation: material project change required
    RequiresReformulation --> InValidation: compatible reformulation submitted
    RequiresReformulation --> ClosureAccountability: value thesis cannot be preserved

    InExecution --> UnderExtraordinaryReview: serious contradiction or control finding
    UnderExtraordinaryReview --> InExecution: issue cleared
    UnderExtraordinaryReview --> CorrectionRequired: correction path accepted
    UnderExtraordinaryReview --> RequiresReformulation: material change required
    UnderExtraordinaryReview --> Revoked: severe issue confirmed

    InExecution --> ContinuityRenewalWindow: funded continuity period nearing end
    ContinuityRenewalWindow --> InExecution: current period continues while renewal visible
    ContinuityRenewalWindow --> ClosureAccountability: period ends, wind-down, replacement, or no renewal

    InExecution --> ClosureAccountability: execution complete or final outcome reached
    Revoked --> ClosureAccountability: final accountability required
    Expired --> ClosureAccountability: final accountability required
    ExpiredUnfunded --> ClosureAccountability: funding attempt and fund treatment recorded
    ClosureAccountability --> PostClosureCoverageActive: coverage window active
    ClosureAccountability --> Closed: no platform coverage window
    PostClosureCoverageActive --> PostClosureReview: covered complaint or contradiction admitted
    PostClosureReview --> PostClosureCoverageActive: no effect or correction complete
    PostClosureReview --> ClosureAccountability: correction, mitigation, responsibility, or coverage effect recorded
    PostClosureCoverageActive --> Closed: coverage window expires
    Closed --> ExternalDecisionRecorded: competent external decision later recorded
    ExternalDecisionRecorded --> Closed: historical, responsibility, or reputation effect recorded where allowed
    Closed --> [*]
```

## Project Phase Substate Machine

Each explicit `ProjectPhase` has its own operational state. The parent project may contain one or many phase instances.

```mermaid
stateDiagram-v2
    [*] --> Planned
    Planned --> FundingOpen: phase funding lane opens
    FundingOpen --> FundingReserved: target reached or later-phase funds reserved
    FundingOpen --> PhaseExpired: phase funding deadline expires
    FundingOpen --> PhaseExpiredUnfunded: funding attempt expires unfunded

    FundingReserved --> PrerequisitePending: prior gate, document, control, or assurance missing
    PrerequisitePending --> GatePendingReview: prerequisite package submitted
    GatePendingReview --> GateAccepted: reviewer or fiscalizer accepts phase gate
    GatePendingReview --> PhaseCorrectionRequired: correctable gate issue
    GatePendingReview --> PhaseRejected: gate fails accepted baseline
    GatePendingReview --> PhaseRequiresReformulation: material baseline change required

    PhaseCorrectionRequired --> GatePendingReview: correction submitted
    PhaseRejected --> PhaseRequiresReformulation: project may still preserve value
    PhaseRejected --> PhaseClosed: phase cannot continue under accepted terms

    GateAccepted --> PhaseExecutionReady: funding, control, assurance, and release rules ready
    PhaseExecutionReady --> PhaseInExecution: phase starts
    PhaseExecutionReady --> PhasePaused: scoped blocker prevents start

    PhaseInExecution --> EvidenceSubmitted: milestone or phase evidence submitted
    PhaseInExecution --> PhaseContinuityRenewalWindow: operational period nearing end
    PhaseContinuityRenewalWindow --> PhaseInExecution: current period continues while renewal visible
    PhaseContinuityRenewalWindow --> PhaseClosed: period ends, wind-down, replacement, or no renewal
    EvidenceSubmitted --> UnderReview: fiscalizer or reviewer evaluates
    UnderReview --> PhaseCompleted: evidence and gate accepted
    UnderReview --> PhaseCorrectionRequired: evidence or deliverable insufficient
    UnderReview --> PhasePaused: scoped blocker active
    UnderReview --> PhaseRequiresReformulation: phase cannot meet baseline
    UnderReview --> PhaseRejected: severe or uncorrected failure

    PhasePaused --> PhaseInExecution: pause lifted or narrowed
    PhasePaused --> PhaseRequiresReformulation: baseline cannot continue unchanged
    PhasePaused --> PhaseRejected: severe issue confirmed

    PhaseRequiresReformulation --> Planned: accepted reformulated phase version
    PhaseRequiresReformulation --> PhaseClosed: reformulation rejected or value not preserved

    PhaseCompleted --> PhaseClosed: phase accountability recorded
    PhaseExpired --> PhaseClosed: unused funds handled
    PhaseExpiredUnfunded --> PhaseClosed: unused commitments returned or reassigned
    PhaseClosed --> [*]
```

## State Interpretation Rules

- `Project` state is the aggregate and citizen-facing state. It should not hide phase-specific blockers, but it should not automatically inherit every phase substate as a whole-project state.
- `ProjectPhase` state is operational and gate-specific. It controls phase readiness, prerequisite gates, phase evidence, and phase disbursement.
- A phase-level pause, rejection, correction, or review escalates to the parent `Project` only when the related `SystemicPauseRecord`, `EvaluationRecord`, `ComplaintAdmissibilityReferralRecord`, `ProjectVariationRecord`, or `ReformulationProposal` declares a project-level affected scope.
- `ExecutionReady` may apply to the parent project, a specific phase, or both. A later phase can remain `FundingReserved` or `PrerequisitePending` while an earlier phase is `PhaseInExecution`.
- `ClosureAccountability` is a parent project state because final accountability must summarize promises, phases, evidence, fiscalization, money treatment, responsibility events, and reputation inputs.
- `PostClosureCoverageActive` is a parent project state for the declared post-closure accountability window. Covered issues may be reviewed inside the platform only while the window is active and within covered scope.
- `ContinuityRenewalWindow` and `PhaseContinuityRenewalWindow` are visibility states for A006. They may generate or update a continuity-need Idea and allow follow-on proposals, but they do not automatically renew the current executor.
- `ExpiredUnfunded` and `PhaseExpiredUnfunded` mean the relevant FundingAttempt failed to reach financing closure within its visible window. Eligible unused commitments return, reassign, or follow default rules; attempt history remains visible.
- Phase closure does not equal project closure unless all required phases and final project accountability conditions are complete.

## Macul Example Trace

```text
Project:
Design and Construction of Multi-Courts in Macul

Parent project:
OpenProject -> ExecutionReady -> InExecution

Design phase:
FundingReserved -> GatePendingReview -> PhaseInExecution -> UnderReview

Construction phase while design is pending:
FundingReserved -> PrerequisitePending

If design evidence is insufficient:
Design phase -> PhaseCorrectionRequired
Construction phase -> PrerequisitePending
Construction disbursement -> blocked by phase gate
Parent project -> remains InExecution unless the review record declares project-level reformulation or pause

If design removes required bathrooms, changes court dimensions, or weakens public access:
Design phase -> PhaseRequiresReformulation
Parent project -> RequiresReformulation if the accepted public-value baseline cannot be preserved

If maintenance or access management is funded for only twelve months:
Operational phase -> PhaseContinuityRenewalWindow before period end
Continuity need -> Idea for follow-on maintenance or replacement provider
Current executor -> may propose follow-on project, but has no automatic renewal
```

## Boundary With Other State Machines

This diagram does not replace the future diagrams for:

- contextualized evidence item states;
- complaint evidence and complaint review states;
- funding and disbursement states;
- control subproject and fiscalization assignment states.

Those objects affect `Project` and `ProjectPhase` through explicit records and scoped formal effects. They should not be collapsed into the parent project state machine.

## Rule

> A project can be public, funded, executing, paused, reformulating, or closed only through traceable state transitions. Phase blockers remain phase-scoped unless a formal record declares a broader affected scope.
