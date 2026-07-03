# Diagram - Delegation State v0

## Purpose

Show how `Delegation` moves from citizen intent into delegate acceptance, active scoped authority, represented-weight actions, reporting, revocation, resignation, expiry, and fallback activation.

Delegation is scoped authorization. It is not a transfer of citizenship, identity, money ownership, unlimited authority, automatic compensation, or automatic allocation.

Source baseline:

- [[27_CITIZEN_DELEGATION_FLOW|docs/27_CITIZEN_DELEGATION_FLOW.md]]
- [[28_CITIZEN_AUTOMATIC_ALLOCATION_PROFILE_FLOW|docs/28_CITIZEN_AUTOMATIC_ALLOCATION_PROFILE_FLOW.md]]
- [[50_DELEGATION_PRIORITY_AND_C011_RESOLUTION|docs/50_DELEGATION_PRIORITY_AND_C011_RESOLUTION.md]]
- [[61_DELEGATION_CONCENTRATION_VISIBILITY_AND_C023_RESOLUTION|docs/61_DELEGATION_CONCENTRATION_VISIBILITY_AND_C023_RESOLUTION.md]]
- [[H042-layered-delegation-architecture|knowledge/hypotheses/H042-layered-delegation-architecture.md]]
- [[H043-transparent-delegation-concentration|knowledge/hypotheses/H043-transparent-delegation-concentration.md]]
- [[H045-delegated-action-weight|knowledge/hypotheses/H045-delegated-action-weight.md]]
- [[H046-delegated-action-reporting|knowledge/hypotheses/H046-delegated-action-reporting.md]]
- [[H047-immediate-delegation-revocation|knowledge/hypotheses/H047-immediate-delegation-revocation.md]]
- [[H048-delegation-request-and-acceptance|knowledge/hypotheses/H048-delegation-request-and-acceptance.md]]
- [[H049-delegate-resignation-and-notification|knowledge/hypotheses/H049-delegate-resignation-and-notification.md]]
- [[64_FORMAL_ENTITY_INVENTORY_V0|docs/64_FORMAL_ENTITY_INVENTORY_V0.md]]

Related sources: C005, C007, C008, C011, C023, H033, H034, H038, H042-H049.

## Delegation State Machine

This state machine tracks a delegation relationship between a delegator and a proposed delegate for a defined scope.

```mermaid
stateDiagram-v2
    [*] --> BaseRuleCheck
    BaseRuleCheck --> BaseRuleRequired: budget delegation without selected base allocation profile or fallback rule
    BaseRuleRequired --> BaseRuleSelected: citizen selects or acknowledges base rule
    BaseRuleCheck --> ScopeSelected: non-budget scope or base rule already selected
    BaseRuleSelected --> ScopeSelected

    ScopeSelected --> DelegateSelected: citizen chooses eligible delegate
    DelegateSelected --> ConcentrationDisclosed: system shows concentration, represented influence, conflicts, and cap effects
    ConcentrationDisclosed --> RequestDraft: citizen reviews scope and authority
    RequestDraft --> RequestSent: citizen sends delegation request

    RequestSent --> AcceptancePending: proposed delegate receives request
    AcceptancePending --> Rejected: delegate rejects
    AcceptancePending --> Expired: request window expires
    AcceptancePending --> Accepted: delegate accepts responsibility

    Accepted --> Active: scoped delegated authority starts
    Active --> DelegatedActionRecorded: delegate acts inside scope
    DelegatedActionRecorded --> ReportQueued: action added to delegated-action report
    ReportQueued --> Active

    Active --> ReportGenerated: periodic or event-based report generated from audit trail
    ReportGenerated --> Active

    Active --> Revoked: delegator revokes future authority
    Active --> Resigned: delegate resigns
    Active --> Expired: configured time or policy expiry where applicable
    Active --> EligibilityLost: delegate loses eligibility or scope becomes invalid

    Revoked --> BaseRuleResumed: future budget allocation resumes prior base rule
    Resigned --> BaseRuleResumed: delegator notified and prior base rule resumes
    Rejected --> BaseRuleResumed: no delegation activates
    Expired --> BaseRuleResumed: future authority ends
    EligibilityLost --> BaseRuleResumed: future authority ends

    BaseRuleResumed --> Closed
    Closed --> [*]
```

## Delegated Action and Priority Routing

This flowchart shows how the system decides whether a future action is governed by delegation, manual choice, or an automatic allocation profile.

```mermaid
flowchart TD
    A[Future civic action or allocation opportunity]
    D{Active delegation covers this scope?}
    DA[Delegate action path]
    M{Citizen manual action available and chosen?}
    AP[Automatic allocation profile or base rule path]
    SCOPE{Action inside delegated scope?}
    OOS[Reject or route outside delegation]
    RW[Calculate represented weight]
    CAP{Configured cap applies?}
    FULL[Use full represented weight]
    CAPPED[Use capped represented weight and show excess as visible but not counted]
    DAR[DelegatedActionRecord]
    FC[FundingCommitment, support signal, complaint-review support, protocol vote, follow, or other allowed action]
    AUD[AuditEvent]
    REP[Delegated-action report]
    REV[Later revocation or resignation]
    HIST[Past delegated actions remain valid]

    A --> D
    D -->|Yes| DA
    D -->|No| M
    M -->|Yes| FC
    M -->|No| AP

    DA --> SCOPE
    SCOPE -->|No| OOS
    SCOPE -->|Yes| RW
    RW --> CAP
    CAP -->|No| FULL
    CAP -->|Yes| CAPPED
    FULL --> DAR
    CAPPED --> DAR
    DAR --> FC
    FC --> AUD
    AUD --> REP

    REV --> HIST
    DAR --> HIST
```

## Concentration, Reporting, and Fallback Routing

This flowchart shows the accountability loop around delegation concentration and termination.

```mermaid
flowchart TD
    DP[Delegate profile]
    CS[Concentration signal]
    CR[Configured cap disclosure where applicable]
    DR[Delegation request]
    ACC[Delegate acceptance]
    AD[Active delegation]
    ACT[Delegated action]
    RW[Represented weight visible]
    AR[Audit record]
    RPT[System-generated delegated-action report]
    EXPL[Optional delegate explanation]
    RV[Revocation by delegator]
    RS[Resignation by delegate]
    EXP[Expiry or eligibility loss]
    BR[Previously selected base allocation profile or fallback rule resumes]
    FUT[Future action uses manual choice or automatic profile if no active delegation]

    DP --> CS
    CS --> CR
    CR --> DR
    DR --> ACC
    ACC --> AD
    AD --> ACT
    ACT --> RW
    RW --> AR
    AR --> RPT
    EXPL --> RPT
    RPT --> RV
    AD --> RS
    AD --> EXP
    RV --> BR
    RS --> BR
    EXP --> BR
    BR --> FUT
```

## State Rules

- Delegation is voluntary and scoped.
- Budget delegation cannot become active until the citizen has selected or acknowledged a base allocation profile or fallback rule.
- Delegation requires delegate acceptance. A pending request creates no authority.
- Active delegation has priority over automatic allocation within the delegated scope.
- Automatic allocation profiles remain stored but inactive or skipped where active delegation governs the same scope.
- Delegated actions must record scope, represented weight, delegate identity, delegated action type, cap effects where applicable, and audit reference.
- Delegation concentration is allowed by default, but it must be visible before delegation, during delegated action, in reports, and in observability.
- A010 stress thresholds are warning, report-sufficiency, disclosure, and observability conditions over existing delegation records, not new delegation states or a universal cap.
- Core v0 does not impose a universal hard cap. If a cap exists, it must be configured and visible before it affects delegation.
- Revocation is immediate for future authority and non-retroactive.
- Delegate resignation is allowed and affects only future authority.
- Rejection, revocation, resignation, expiry, or eligibility loss resumes the citizen's previously selected base rule for future budget allocation.
- Valid delegated funding actions remain funding commitments under ordinary funding rules; revoking delegation does not create a free withdrawal right.
- Core v0 has no separate pause state for delegation. The simple path is revoke and later create a new delegation if desired.
- Delegation does not create automatic delegate compensation. Participation-support projects, if any, must be ordinary transparent projects.
- AI assistance is not a delegate, and public authorities are not internal delegates in scopes they control.

## Macul Sports Example Trace

```text
Citizen:
Ana

Base rule:
Public system default profile accepted.

Delegation scope:
Sports allocation in Macul.

Delegate:
Macul Sports Association.

Before request:
The system shows that the association represents 2,430 citizens and 28% of delegated sports allocation in Macul.

Request:
Ana sends delegation request.

Acceptance:
The association accepts.

Active effect:
Automatic allocation is inactive for Ana's sports allocation in Macul while the delegation remains active.

Delegated action:
The association funds a Macul sports project.

Action record:
represented weight = association's own action + covered delegators.
scope = sports allocation in Macul.
cap effect = shown if any protocol cap applies.

Report:
Ana receives a system-generated delegated-action summary.

Revocation:
Ana revokes delegation.
Future sports allocation returns to the public system default profile.
Past valid delegated funding remains governed by funding commitment, project failure, return, reassignment, recovery, and closure rules.
```

## Boundary With Other State Machines

This diagram does not replace:

- the automatic allocation profile flow;
- the funding commitment and disbursement state diagram;
- the project state diagram;
- the governance or protocol-change state diagrams.

It defines when delegated authority exists and how delegated action records feed those other objects.

## Rule

> Delegation increases participation capacity only if authority remains scoped, accepted, visible, reportable, concentration-aware, immediately revocable for future actions, and backed by an explicit fallback rule when budget allocation is delegated.
