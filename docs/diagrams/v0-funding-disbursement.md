# Diagram - Funding and Disbursement v0

## Purpose

Show that citizen funding is a commitment and that disbursement is conditional release through milestone, fulfillment evidence, fiscalization, and custody rules.

Related resolutions: C005, C006, C016, H019.

```mermaid
flowchart TD
    A[Citizen finances project] --> B[Funding Commitment]
    B --> C[Committed: not released]
    C --> D{Execution-ready conditions met?}
    D -->|No| C
    D -->|Yes| PG{Required phase gate accepted?}
    PG -->|No: pending design or correction| PR[Keep later-phase funds reserved]
    PG -->|Yes or not applicable| MP{Disbursement Milestone Plan valid?}
    MP -->|No: critical failure| BL[Block release or financeable setup]
    MP -->|Yes| E[Milestone Active]

    E --> F[Fulfillment Evidence Submitted]
    F --> G[Corroboration and Fiscalizer Review]
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
```

## Rule

> Funding is commitment. Later-phase funds may be reserved before a phase gate is accepted, but they are not released until the gate passes. A complaint or review blocker must identify affected scope and any systemic pause. Treasury or custody executes protocol-valid orders, but does not decide civic value, project priority, fulfillment evidence validity, or discretionary disbursement.
