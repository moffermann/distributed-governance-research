# Diagram - Funding Commitment and Disbursement State v0

## Purpose

Show the formal lifecycles of `FundingCommitment`, `Disbursement`, and `FinancialAssurance` without collapsing them into a single "funded" state.

This diagram refines the older funding-disbursement flow. It separates citizen funding commitment, reserved phase lanes, retained funds, disbursement review, financial orders, custodian execution, guarantee materialization, recovery, return, reassignment, and closure.

Source baseline:

- `docs/21_CITIZEN_FUNDING_FLOW.md`
- `docs/31_PROJECT_DISBURSEMENT_FLOW.md`
- `docs/42_FUNDING_COMMITMENT_AND_C005_RESOLUTION.md`
- `docs/69_FISCALIZER_QUALITY_CAPTURE_INDICATORS_AND_A003_RESOLUTION.md`
- `docs/71_ESSENTIAL_SERVICE_PROTECTION_AND_A005_RESOLUTION.md`
- `docs/72_CONTINUITY_RISK_CLASSIFICATION_AND_A006_RESOLUTION.md`
- `docs/47_TREASURY_CITIZEN_BALANCE_AND_C006_RESOLUTION.md`
- `docs/64_FORMAL_ENTITY_INVENTORY_V0.md`
- `docs/diagrams/v0-project-object-state-with-phase-substates.md`
- `docs/diagrams/v0-complaint-evidence-and-review-state.md`

Related sources: H008, H011, H013, H016, H019, H022, H024, H036, H037, C005, C006, C016, A005, A006.

## Funding Commitment State Machine

This state machine tracks the committed amount or funding lane. It does not decide whether the project has fulfilled its value thesis.

```mermaid
stateDiagram-v2
    [*] --> Available
    Available --> LaneCheck: funder selects target
    LaneCheck --> ContinuityCheck: eligible assignable lane
    LaneCheck --> Closed: protected floor, non-assignable, or excluded lane
    ContinuityCheck --> Committed: period, renewal, and wind-down clear
    ContinuityCheck --> Closed: continuity fields missing for required target

    Committed --> Reserved: eligible target and custody reservation accepted
    Committed --> Returned: target invalid before reservation
    Committed --> Reassigned: default reassignment rule applies

    Reserved --> PendingDisbursementReview: milestone or phase requests release
    Reserved --> Paused: scoped systemic pause affects this funding scope
    Reserved --> Blocked: phase gate, assurance, evidence, legal, or policy blocker

    Paused --> Reserved: pause lifted or narrowed
    Paused --> Blocked: blocker confirmed
    Paused --> Returned: target fails before release
    Paused --> Reassigned: policy or citizen default applies

    Blocked --> Reserved: blocker resolved
    Blocked --> Returned: project, phase, or lane fails before release
    Blocked --> Reassigned: protocol or citizen default applies
    Blocked --> InRecovery: released amount under recovery review

    PendingDisbursementReview --> Reserved: request withdrawn or not mature
    PendingDisbursementReview --> Retained: partial progress or incomplete condition
    PendingDisbursementReview --> ApprovedForRelease: evidence, fiscalization, gate, and assurance pass
    PendingDisbursementReview --> Paused: scoped pause created during review
    PendingDisbursementReview --> Blocked: blocking condition found

    Retained --> PendingDisbursementReview: retained condition corrected
    Retained --> Returned: retained unused amount at closure or failure
    Retained --> Reassigned: retained balance follows default rule
    Retained --> InRecovery: retention tied to recovery process

    ApprovedForRelease --> FinancialOrderIssued: system generates FinancialOrder
    FinancialOrderIssued --> ReleasedPartially: custodian executes partial release
    FinancialOrderIssued --> ReleasedTotally: custodian executes full release
    FinancialOrderIssued --> CustodianExecutionBlocked: closed technical or legal cause

    CustodianExecutionBlocked --> FinancialOrderIssued: order corrected or legal block lifted
    CustodianExecutionBlocked --> Blocked: project-side review required

    ReleasedPartially --> Retained: unreleased balance retained
    ReleasedPartially --> PendingDisbursementReview: next milestone review
    ReleasedPartially --> InRecovery: later failure or guarantee path

    ReleasedTotally --> FinancialClosurePending: final project or phase closure required

    InRecovery --> Recovered: guarantee, enforcement, or repayment succeeds
    InRecovery --> LossRecorded: recovery fails or partial loss accepted
    Recovered --> Returned: returned to available balance
    Recovered --> Reassigned: reassigned under rules

    Returned --> Closed
    Reassigned --> Closed
    FinancialClosurePending --> Closed
    LossRecorded --> Closed
    Closed --> [*]
```

## Disbursement State Machine

This state machine tracks a disbursement request or disbursement decision for a phase, milestone, budget line, or retained amount.

```mermaid
stateDiagram-v2
    [*] --> NotEligible
    NotEligible --> PendingPhaseGate: later phase or prerequisite check required
    NotEligible --> MilestoneActive: execution-ready and no prerequisite gate

    PendingPhaseGate --> MilestoneActive: required gate accepted
    PendingPhaseGate --> BlockedByPhaseGate: gate pending, rejected, or requires correction
    BlockedByPhaseGate --> PendingPhaseGate: correction or new gate review submitted

    MilestoneActive --> FulfillmentEvidenceSubmitted: executor, producer, or control actor submits material
    FulfillmentEvidenceSubmitted --> FiscalizationReview: eligible fiscalizer or reviewer starts review

    FiscalizationReview --> ReviewApproved: profile, report, evidence, and effect sufficient
    FiscalizationReview --> ApprovedWithObservations: partial or conditional approval
    FiscalizationReview --> CorrectionRequired: evidence, deliverable, report, or profile safeguard insufficient
    FiscalizationReview --> Rejected: milestone fails
    FiscalizationReview --> ExtraordinaryReview: serious contradiction or control finding

    CorrectionRequired --> FiscalizationReview: correction submitted
    ExtraordinaryReview --> FiscalizationReview: extraordinary review resolved
    Rejected --> NoRelease: no releasable amount

    ReviewApproved --> BlockerCheck
    ApprovedWithObservations --> BlockerCheck

    BlockerCheck --> BlockedByComplaintPause: admitted scoped complaint pause affects this scope
    BlockerCheck --> BlockedByPhaseGate: prerequisite gate not accepted
    BlockerCheck --> BlockedByAssurance: guarantee, retention, insurance, escrow, or equivalent not materialized
    BlockerCheck --> BlockedByContinuityRule: continuity period, renewal, replacement, or wind-down condition missing
    BlockerCheck --> BlockedByEvidenceContradiction: fulfillment or control evidence contradicted
    BlockerCheck --> ReleaseDecisionReady: no relevant blocker

    BlockedByComplaintPause --> BlockerCheck: pause lifted or narrowed
    BlockedByAssurance --> BlockerCheck: assurance materialized or corrected
    BlockedByContinuityRule --> BlockerCheck: continuity condition corrected
    BlockedByEvidenceContradiction --> FiscalizationReview: contradiction resolved or corroboration added

    ReleaseDecisionReady --> FullReleaseApproved: all releasable conditions met
    ReleaseDecisionReady --> PartialReleaseApproved: separable component approved
    ReleaseDecisionReady --> RetainDecision: retain pending condition

    FullReleaseApproved --> FinancialOrderGenerated: release action
    PartialReleaseApproved --> FinancialOrderGenerated: release and retain actions
    RetainDecision --> FinancialOrderGenerated: retention action where money movement is required

    FinancialOrderGenerated --> CustodianExecuted: valid order executed
    FinancialOrderGenerated --> CustodianRejectedClosedCause: invalid signature, duplicate, insufficient funds, legal freeze, or ledger mismatch
    CustodianRejectedClosedCause --> FinancialOrderGenerated: corrected order generated
    CustodianRejectedClosedCause --> BlockedByAssurance: legal or custody block requires review

    CustodianExecuted --> ReleasedTotally
    CustodianExecuted --> ReleasedPartially
    CustodianExecuted --> Retained
    CustodianExecuted --> Returned
    CustodianExecuted --> Reassigned
    CustodianExecuted --> Recovered

    ReleasedTotally --> AuditNotice
    ReleasedPartially --> AuditNotice
    Retained --> AuditNotice
    Returned --> AuditNotice
    Reassigned --> AuditNotice
    Recovered --> AuditNotice
    NoRelease --> AuditNotice

    AuditNotice --> [*]
```

## Financial Assurance and Guarantee State Machine

This state machine tracks the assurance instrument. It is not construction-specific; the same pattern can apply to care services, school-supply purchases, workshops, health support, infrastructure, or any execution-financeable social project.

```mermaid
stateDiagram-v2
    [*] --> AssurancePending
    AssurancePending --> GuaranteeMaterialized: custodian or guarantor confirms instrument
    AssurancePending --> GuaranteeInsufficient: confirmed amount or coverage below requirement

    GuaranteeInsufficient --> AssurancePending: new or corrected instrument requested
    GuaranteeInsufficient --> GuaranteeMaterialized: corrected instrument accepted

    GuaranteeMaterialized --> GuaranteeExpired: term expires before renewal or release
    GuaranteeExpired --> GuaranteeMaterialized: renewal accepted
    GuaranteeExpired --> DisbursementBlocked: renewal missing

    DisbursementBlocked --> AssurancePending: replacement required

    GuaranteeMaterialized --> GuaranteeExecutionRequested: failure, abandonment, recovery, or sanction path
    GuaranteeExecutionRequested --> GuaranteeExecuted: valid execution order completed
    GuaranteeExecutionRequested --> CustodianExecutionBlocked: closed technical or legal cause
    CustodianExecutionBlocked --> GuaranteeExecutionRequested: order corrected or legal block lifted

    GuaranteeExecuted --> InRecovery: recovered amount routed
    InRecovery --> Recovered
    Recovered --> ReturnedOrReassigned: protocol and citizen rules apply

    GuaranteeMaterialized --> GuaranteeReleased: project, phase, or obligation closes cleanly
    GuaranteeReleased --> Closed
    ReturnedOrReassigned --> Closed
    Closed --> [*]
```

## State Rules

- `Committed` means the funder made a serious funding commitment. It is not ordinary support and is not freely withdrawable.
- `LaneCheck` means the system verifies that the target is an eligible assignable lane. Ordinary civic-wallet funding cannot enter non-assignable protected floors or excluded lanes.
- `ContinuityCheck` means the system verifies A006 labels where the target is recurring, continuity-critical, emergency, or maintenance-dependent. A funding commitment should not imply indefinite service when it funds only a bounded period, and a renewal window should not automatically renew the current executor.
- `Reserved` means the amount is held for a project, phase lane, control package, complaint-review cost, mitigation activity, or other eligible public-purpose vehicle. It is not released to the executor.
- `Paused` means a scoped systemic pause affects the relevant funding, disbursement, milestone, phase, budget line, evidence item, or actor relationship. It is platform scope, not necessarily material or legal suspension.
- `Blocked` means a release cannot proceed until a named blocker is resolved.
- `Retained` means funds remain held after partial progress, incomplete evidence, correction need, guarantee rule, complaint-linked risk, or closure condition.
- `ApprovedForRelease` means the platform may generate a `FinancialOrder`; it does not mean the custodian has executed the payment.
- `CustodianExecutionBlocked` is limited to closed technical or legal causes. The custodian does not decide civic value, project priority, evidence validity, fiscalization, or discretionary disbursement.
- `ReleasedPartially` is allowed only when the disbursement milestone plan defines separable components, accepted evidence for completed components, retained amount, release condition, fiscalizer explanation, and citizen-facing summary.
- `Returned`, `Reassigned`, and `Recovered` are protocol/citizen-rule outcomes for unused, unreleased, retained, guaranteed, or recovered funds. They are not ordinary withdrawal by personal regret.
- `GuaranteeMaterialized` requires external confirmation by a custodian, guarantor, insurer, treasury, bank, escrow provider, or lawful equivalent. An uploaded executor document is not enough.

## Macul Example Trace

```text
Project:
Design and Construction of Multi-Courts in Macul

Citizen funds construction while design is pending:
Available -> Committed -> Reserved

Construction disbursement:
NotEligible -> PendingPhaseGate -> BlockedByPhaseGate

Reason:
The design phase gate has not been accepted.

If the design is accepted and financial assurance is materialized:
BlockedByPhaseGate -> PendingPhaseGate -> MilestoneActive -> FiscalizationReview -> ReleaseDecisionReady

If the design omits bathrooms, changes court dimensions, or materially weakens public access:
BlockedByPhaseGate remains active, or the project/phase enters correction, reformulation, return, reassignment, or reconfirmation under the active policy. Construction funds are not freely withdrawable, but they also cannot be released for construction while the design baseline fails.

If an admitted complaint affects only the disputed construction budget line:
Reserved -> Paused or Blocked only for that affected scope.
Unrelated scopes continue if their gates, evidence, assurance, and fiscalization conditions are satisfied.

Continuity example:
An older-adult home-care project funds months 1-6.
Before month 6, the continuity renewal window may generate an Idea for a follow-on service period.
Funding the follow-on project passes through LaneCheck and ContinuityCheck again.
The current provider may apply, but no state transition grants automatic renewal.
```

## Boundary With Other State Machines

This diagram does not replace:

- the project and phase state diagram;
- the contextualized evidence item state diagram;
- the complaint evidence and review state diagram;
- the future control subproject and fiscalization assignment diagram.

Funding and disbursement states change only through explicit records: phase gates, fulfillment/control evidence review, fiscalization reports, evaluation records, systemic pause records, financial assurance confirmation, financial orders, custodian execution status, closure accountability, recovery records, and audit events.

## Rule

> Funding is commitment, reservation is not release, release requires evidence, eligible fiscalization, sufficient report basis, and A006 continuity treatment where applicable; guarantees require external materialization, custodian execution is technical/legal rather than civic judgment, and unused or recovered funds follow protocol and citizen rules instead of ordinary withdrawal.
