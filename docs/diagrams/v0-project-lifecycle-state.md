# Diagram - Project Lifecycle State v0

## Purpose

Show the project lifecycle after publication, including validation, execution readiness, reformulation, review, revocation, and closure.

Related resolutions: C005, C016, C017, C018, H019.

```mermaid
stateDiagram-v2
    [*] --> Draft
    Draft --> InValidation
    InValidation --> RequiresAdjustment
    RequiresAdjustment --> InValidation
    InValidation --> ReadyToPublish
    ReadyToPublish --> OpenProject

    OpenProject --> FundingOpen
    FundingOpen --> ClosureReview: target and control conditions met
    ClosureReview --> OpenProject: missing closure condition
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
    RequiresReformulation --> Closed: value thesis cannot be preserved

    InExecution --> UnderExtraordinaryReview
    UnderExtraordinaryReview --> InExecution: review clears issue
    UnderExtraordinaryReview --> Revoked: severe issue confirmed

    FundingOpen --> Expired
    OpenProject --> Revoked
    Paused --> Revoked
    InExecution --> Closed
    Revoked --> Closed
    Expired --> Closed
    Closed --> [*]
```

## Rule

> A project advances through validated conditions and review, not self-declared progress. Closure labels are procedural context; reputation depends on verified fulfillment and responsibility events.
