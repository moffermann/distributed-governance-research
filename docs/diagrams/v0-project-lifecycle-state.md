# Diagram - Project Lifecycle State v0

## Purpose

Show the project lifecycle after publication, including validation, execution readiness, reformulation, review, revocation, and closure.

> **Superseded for parent-state authority:** this diagram models funding and phase-gate stages as parent Project states. The authoritative parent machine is [[v0-project-object-state-with-phase-substates|docs/diagrams/v0-project-object-state-with-phase-substates.md]], which refines this diagram and moves those stages into the ProjectPhase substate machine, consistent with the consolidated entity/state map. Keep this diagram for stage-flow intuition only.

Related resolutions: C005, C016, C017, C018, H008, H011, H019, H040, A001, A002, A003, A006, A007, Funding Window Expiry.

```mermaid
stateDiagram-v2
    [*] --> Draft
    Draft --> InValidation
    InValidation --> RequiresAdjustment
    RequiresAdjustment --> InValidation
    InValidation --> ReadyToPublish
    ReadyToPublish --> OpenProject

    OpenProject --> FundingOpen
    FundingOpen --> ClosureReview: target, assurance, control, fiscalizer profile, and material visibility conditions met
    ClosureReview --> OpenProject: missing closure condition
    FundingOpen --> FundingOpen: bounded policy extension
    FundingOpen --> ExpiredUnfunded: window expires without valid closure
    ClosureReview --> PhaseGateReview: phase gate required
    PhaseGateReview --> OpenProject: gate pending or correction required
    PhaseGateReview --> RequiresReformulation: gate fails material baseline
    PhaseGateReview --> ExecutionReady: gate accepted
    ClosureReview --> ExecutionReady: execution budget and control package closed

    ExecutionReady --> InExecution
    InExecution --> CorrectionRequired
    CorrectionRequired --> InExecution: correction accepted
    CorrectionRequired --> Paused: blocker remains
    InExecution --> Paused
    Paused --> InExecution: blocker resolved

    OpenProject --> RequiresReformulation
    InExecution --> RequiresReformulation
    RequiresReformulation --> InValidation: compatible reformulation
    RequiresReformulation --> ClosureAccountability: value thesis cannot be preserved

    InExecution --> UnderExtraordinaryReview
    UnderExtraordinaryReview --> InExecution: review clears issue
    UnderExtraordinaryReview --> Revoked: severe issue confirmed

    InExecution --> ContinuityRenewalWindow: funded continuity period approaching end
    ContinuityRenewalWindow --> InExecution: current period continues while window open
    ContinuityRenewalWindow --> ClosureAccountability: period ends, wind-down, replacement, or no renewal

    OpenProject --> Revoked
    Paused --> Revoked
    InExecution --> ClosureAccountability
    Revoked --> ClosureAccountability
    ExpiredUnfunded --> ClosureAccountability
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

## Rule

> A project advances through validated conditions and review, not self-declared progress. Execution readiness should not hide unresolved material warnings behind favorable labels. Open funding is bounded by a visible Funding Attempt; if the window expires without valid closure, the project or lane becomes Expired Unfunded unless a bounded extension or reformulation route applies. For continuity-sensitive projects, a renewal window exposes the follow-on need and may generate an Idea, but it does not automatically renew the current executor. Closure requires a Project Closure Accountability Record and, where required, an active or expired Post-Closure Coverage Profile. Closure labels are procedural context; reputation depends on verified fulfillment and responsibility events.
