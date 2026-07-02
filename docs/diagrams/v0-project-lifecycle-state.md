# Diagram - Project Lifecycle State v0

## Purpose

Show the project lifecycle after publication, including validation, execution readiness, reformulation, review, revocation, and closure.

Related resolutions: C005, C016, C017, C018, H008, H011, H019, A001, A002, A003.

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

    FundingOpen --> Expired
    OpenProject --> Revoked
    Paused --> Revoked
    InExecution --> ClosureAccountability
    Revoked --> ClosureAccountability
    Expired --> ClosureAccountability
    ClosureAccountability --> Closed: promise, evidence, money, and responsibility recorded
    Closed --> [*]
```

## Rule

> A project advances through validated conditions and review, not self-declared progress. Execution readiness should not hide unresolved material warnings behind favorable labels. Closure requires a Project Closure Accountability Record. Closure labels are procedural context; reputation depends on verified fulfillment and responsibility events.
