# Diagram - Funding and Disbursement v0

## Purpose

Show that citizen funding is a commitment and that disbursement is conditional release through milestone, fulfillment evidence, fiscalization, and custody rules.

Related resolutions: C005, C006, C016, H011, H019, A003, A005, A006.

```mermaid
flowchart TD
    A[Citizen finances project] --> L{Eligible assignable lane?}
    L -->|No: protected floor or excluded lane| LN[Do not accept ordinary funding; show scope reason]
    L -->|Yes| B[Funding Commitment]
    B --> CR{Continuity risk fields complete where applicable?}
    CR -->|No: period, renewal, or wind-down unclear| CB[Block funding setup or require correction]
    CR -->|Yes or not applicable| C[Committed: not released]
    C --> D{Execution-ready conditions met?}
    D -->|No| C
    D -->|Yes| AS{Financial assurance materialized if required?}
    AS -->|No| AR[Keep funds reserved: assurance pending]
    AS -->|Yes| PG{Required phase gate accepted?}
    PG -->|No: pending design or correction| PR[Keep later-phase funds reserved]
    PG -->|Yes or not applicable| MP{Disbursement Milestone Plan valid?}
    MP -->|No: critical failure| BL[Block release or financeable setup]
    MP -->|Yes| E[Milestone Active]

    E --> F[Fulfillment Evidence Submitted]
    F --> FP[Assigned fiscalizer profile and report sufficiency checked]
    FP --> G[Corroboration and Fiscalizer Review]
    G --> H{Blocking issue?}
    H -->|Yes| I[Scoped systemic pause, block, or correction]
    H -->|No| J{Review outcome}

    J -->|Approved| K[Generate valid financial order]
    J -->|Approved with observations| L[Partial release or retention]
    J -->|Correction required| I
    J -->|Rejected| M[No release]

    K --> T[Treasury or custodian executes order]
    L --> T
    T --> N[Audit event and citizen notice]
    I --> N
    M --> N
    BL --> N
    PR --> N
    AR --> N
    CB --> N
    LN --> N
```

## Rule

> Funding is commitment. Ordinary civic-wallet funding applies only to eligible assignable lanes; protected essential floors, reserve-backed common-pool obligations, or excluded lanes require their own visible rule. For continuity-sensitive projects, funding must show whether it covers a bounded service period, follow-on period, maintenance, replacement, mitigation, or wind-down, and a renewal window does not automatically renew the current executor. Later-phase funds may be reserved before a phase gate is accepted, but they are not released until the gate passes, required financial assurance is materialized, and the responsible fiscalizer is eligible for the assigned scope with a sufficient report for the claimed effect. A complaint or review blocker must identify affected scope and any systemic pause. Treasury or custody executes protocol-valid orders and may confirm guarantee materialization, but does not decide civic value, project priority, fulfillment evidence validity, or discretionary disbursement.
