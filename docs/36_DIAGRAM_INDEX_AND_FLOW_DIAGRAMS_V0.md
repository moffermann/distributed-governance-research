# Diagram Index and Flow Diagrams v0

## Purpose

This document freezes the first diagram set for the Distributed Governance System v0.

The goal is not to create final visual design artifacts. The goal is to make the system legible as flows, states, and transitions before moving into stress testing, scope classification, and paper architecture.

## Status

Accepted as Diagram Index and Flow Diagrams v0.

## Diagram principle

> Every diagram should show which object changes state, which actor or rule triggers the change, and where auditability is preserved.

The diagrams should remain simple enough to reason about but precise enough to expose missing states, weak transitions, and responsibility gaps.

## Diagram set v0

This first set includes:

1. Citizen navigation layers;
2. Project creation and publication;
3. Project lifecycle after publication;
4. Funding and disbursement;
5. Evidence and fiscalization;
6. Complaint and review;
7. Delegation and automatic allocation;
8. Reformulation, pause, and revocation;
9. Audit trail pattern.

## 1. Citizen navigation layers

```mermaid
flowchart TD
    L0[Layer 0: Home / Discovery]
    L1[Layer 1: Compact Project List]
    L2[Layer 2: Project Dashboard]
    L3[Layer 3: Detail by Icon or Signal]
    L4[Layer 4: Full Citizen Project Sheet]
    L5[Layer 5: Technical Audit Trail]

    L0 -->|choose value, need, territory, search| L1
    L1 -->|select project name| L2
    L1 -->|click signal| L3
    L2 -->|click icon, number, condition, alert| L3
    L2 -->|view full details| L4
    L3 -->|see full context| L4
    L4 -->|view audit trail| L5
```

### Rule

> The citizen starts with simple discovery and can progressively reach full auditability by choice.

## 2. Project creation and publication flow

```mermaid
flowchart TD
    A[Idea] --> B[Problem and Solution]
    B --> C[Promised Values]
    C --> D[Beneficiaries]
    D --> E{Responsible Executor Accepted?}
    E -->|No| E1[Draft / Search for Executor]
    E -->|Yes| F[Budget]
    F --> G[Milestones]
    G --> H[Metrics and Evidence]
    H --> I[Fiscalization Requirements]
    I --> J[Risks and Antivalues]
    J --> K[Validation by Rules and AI]
    K -->|Requires adjustment| B
    K -->|Valid| L[Citizen Preview]
    L --> M[Publish as Open Project]
```

### Rule

> Creating a project means converting an idea into a public promise that is verifiable, financeable, fiscalizable, and traceable.

## 3. Project lifecycle after publication

```mermaid
stateDiagram-v2
    [*] --> Draft
    Draft --> InValidation
    InValidation --> RequiresAdjustment
    RequiresAdjustment --> InValidation
    InValidation --> ReadyToPublish
    ReadyToPublish --> OpenProject
    OpenProject --> ExecutionReady: closure conditions complete
    ExecutionReady --> InExecution
    InExecution --> CorrectionRequired
    CorrectionRequired --> InExecution: correction accepted
    InExecution --> Paused
    Paused --> InExecution: blocker resolved
    OpenProject --> RequiresReformulation
    InExecution --> RequiresReformulation
    RequiresReformulation --> InValidation
    InExecution --> UnderExtraordinaryReview
    UnderExtraordinaryReview --> InExecution
    UnderExtraordinaryReview --> Revoked
    OpenProject --> Expired
    OpenProject --> Revoked
    Paused --> Revoked
    InExecution --> Closed
    RequiresReformulation --> Closed
    Revoked --> Closed
    Expired --> Closed
    Closed --> [*]
```

### Rule

> A project advances by completing conditions and passing review, not by self-declared progress.

## 4. Open project parallel closure

```mermaid
flowchart TD
    OP[Open Project]

    OP --> F[Funding Commitments]
    OP --> FS[Fiscalizer Offers]
    OP --> EP[Evidence Producer Commitments]
    OP --> B[Beneficiary Confirmation]
    OP --> D[Required Documents]
    OP --> C[Comments]
    OP --> Q[Complaints]

    F --> CC{Closure Conditions Complete?}
    FS --> CC
    EP --> CC
    B --> CC
    D --> CC
    Q -->|no blocking complaint| CC

    CC -->|No| OP
    CC -->|Yes| ER[Execution Ready]
```

### Rule

> Open projects gather multiple conditions in parallel before becoming execution-ready.

## 5. Funding and disbursement flow

```mermaid
flowchart TD
    A[Citizen Funds Project] --> B[Funding Commitment]
    B --> C[Committed: Not Released]
    C --> D{Project Execution Ready?}
    D -->|No| C
    D -->|Yes| E[Milestone Active]
    E --> F[Evidence Submitted]
    F --> G[Fiscalizer Review]
    G --> H{Blocking Issue?}
    H -->|Yes| I[Pause / Block / Correction]
    H -->|No| J{Review Outcome}
    J -->|Approved| K[Release Milestone Funds]
    J -->|Approved with observations| L[Partial Release / Retention]
    J -->|Correction required| I
    J -->|Rejected| M[No Release]
    K --> N[Audit Event + Citizen Notice]
    L --> N
    I --> N
    M --> N
```

### Rule

> Funding is commitment. Disbursement is conditional release after milestone, evidence, review, rule, and traceability.

## 6. Evidence and fiscalization flow

```mermaid
flowchart TD
    M[Milestone Requires Evidence] --> E1[Executor Evidence]
    M --> E2[Evidence Producer Evidence]
    M --> E3[Beneficiary Confirmation]
    M --> E4[Citizen Observation]

    E1 --> ER[Evidence Review Set]
    E2 --> ER
    E3 --> ER
    E4 --> ER

    ER --> F[Fiscalizer Reviews]
    F --> R{Review Result}

    R -->|Approved| A[Milestone Approved]
    R -->|Approved with observations| AO[Milestone Approved with Observations]
    R -->|Correction required| C[Correction Required]
    R -->|Rejected| RJ[Milestone Rejected]
    R -->|Extraordinary review| X[Extraordinary Review]

    A --> AE[Audit Event]
    AO --> AE
    C --> AE
    RJ --> AE
    X --> AE
```

### Rule

> Evidence producers create verifiable material. Fiscalizers evaluate compliance.

## 7. Complaint and review flow

```mermaid
flowchart TD
    A[Citizen Files Complaint] --> B[Complaint Submitted]
    B --> C[Initial Review]
    C --> D{Needs More Information?}
    D -->|Yes| E[Request Clarification]
    E --> C
    D -->|No| F{Potentially Blocking?}
    F -->|No| G[Open Non-Blocking Complaint]
    F -->|Yes| H[Blocking Complaint]

    G --> I[Executor / Fiscalizer Response]
    H --> I
    H --> J[Pause Related Disbursement or State]

    I --> K[Review Evidence and Responses]
    K --> L{Resolution}
    L -->|Valid| M[Correction / Reformulation / Pause / Revocation]
    L -->|Not supported| N[Rejected]
    L -->|Resolved| O[Resolved]

    M --> P[Audit Event + Notifications]
    N --> P
    O --> P
```

### Rule

> Complaints must be easy to file, hard to ignore, and structured enough to review fairly.

## 8. Delegation and automatic allocation

```mermaid
flowchart TD
    A[Citizen Wants Low-Friction Participation]
    A --> B{Choose Method}

    B -->|Delegate| C[Select Delegate]
    C --> D[Define Scope]
    D --> E[Delegate Acceptance]
    E -->|Accepted| F[Active Delegation]
    E -->|Rejected| G[No Delegation]
    F --> H[Delegate Acts Within Scope]
    H --> I[Report + Audit Trail]
    F --> J[Citizen May Revoke Future Authority]

    B -->|Automatic Profile| K[Choose Value Preferences]
    K --> L[Choose Territory / Control Rules]
    L --> M[Fallback Rule]
    M --> N[Simulation]
    N --> O[Profile Active]
    O --> P[System Allocates by Citizen Rules]
    P --> Q[Report + Audit Trail]
```

### Rule

> Delegation authorizes another actor. Automatic allocation applies citizen-defined rules. They are not the same mechanism.

## 9. Reformulation, pause, and revocation flow

```mermaid
flowchart TD
    A[Problem Detected] --> B[Classify Severity]

    B -->|Minor problem| C[Correction Required]
    B -->|Relevant but salvageable change| D[Requires Reformulation]
    B -->|Temporary blocker| E[Paused]
    B -->|Severe issue or impossibility| F[Revoked]

    C --> C1[Submit Correction]
    C1 --> C2[Review Correction]
    C2 -->|Accepted| G[Continue]
    C2 -->|Rejected| B

    D --> D1[Create New Project Version]
    D1 --> D2[Revalidate]
    D2 -->|Accepted| G
    D2 -->|Rejected| E

    E --> E1[Resolve Blocker]
    E1 -->|Resolved| G
    E1 -->|Unresolved / Severe| F

    F --> F1[Block Unreleased Funds]
    F1 --> F2[Review Released Funds]
    F2 --> F3[Close / Recovery / Reputation Effects]

    G --> H[Audit Event + Notifications]
    F3 --> H
```

### Rule

> Project failure handling must be proportional, visible, reversible where possible, final where necessary, and always auditable.

## 10. Audit trail pattern

```mermaid
flowchart LR
    A[Actor] --> B[Role]
    B --> C[Event]
    C --> D[Object]
    D --> E[State Change]
    E --> F[Audit Event]
    F --> G[Citizen View]
    F --> H[Technical Audit Trail]
```

### Rule

> Every important system decision should be expressible as: actor in role performs event on object, causing a state change recorded as audit event.

## Diagram index for next refinements

The next diagram refinements should be created as separate files or subsections:

```text
Project lifecycle state diagram
Funding and disbursement state diagram
Evidence and fiscalization sequence diagram
Complaint resolution sequence diagram
Delegation state diagram
Project creation sequence diagram
Operating mode transition diagram
Audit event schema diagram
```

## Design rule

> Diagrams are not decorative. They are tools for detecting missing states, hidden authority, uncontrolled money movement, and weak accountability.
