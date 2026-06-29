# Diagram - Funding and Disbursement v0

## Purpose

Show that citizen funding is a commitment and that disbursement is conditional release through milestone, evidence, fiscalization, and custody rules.

Related resolutions: C005, C006, C016.

```mermaid
flowchart TD
    A[Citizen finances project] --> B[Funding Commitment]
    B --> C[Committed: not released]
    C --> D{Execution-ready conditions met?}
    D -->|No| C
    D -->|Yes| MP{Disbursement Milestone Plan valid?}
    MP -->|No: critical failure| BL[Block execution funding]
    MP -->|Yes| E[Milestone Active]

    E --> F[Evidence Submitted]
    F --> G[Corroboration and Fiscalizer Review]
    G --> H{Blocking issue?}
    H -->|Yes| I[Pause, block, or correction]
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
```

## Rule

> Funding is commitment. Treasury or custody executes protocol-valid orders, but does not decide civic value, project priority, evidence validity, or discretionary disbursement.
