# Diagram - Complaint and Review v0

## Purpose

Show complaints as scoped formal review objects, distinct from ordinary comments.

Related resolutions: C004, C014, C024.

```mermaid
flowchart TD
    A[Verified actor files complaint] --> B[Complaint Submitted]
    B --> ID[Identity visibility and privacy classification]
    ID --> C[Initial Admission Review]
    C --> D{Needs more information?}
    D -->|Yes| E[Request clarification]
    E --> C
    D -->|No| F{Admissible and scoped?}

    F -->|No| N[Rejected or redirected to comment]
    F -->|Yes| PB{Potentially blocking?}
    PB -->|No| G[Open non-blocking complaint]
    PB -->|Yes| H[Blocking complaint]

    G --> I[Executor, fiscalizer, or actor response]
    H --> I
    H --> J[Pause affected scope only]

    I --> K[Review evidence and responses]
    K --> L{Resolution}
    L -->|Founded| M[Correction, reformulation, pause, revocation, recovery, or responsibility event]
    L -->|Not supported| NS[Rejected as unsupported]
    L -->|Resolved| O[Resolved]

    M --> P[Audit event and notifications]
    NS --> P
    O --> P
    N --> P
```

## Rule

> Complaints must be easy to file, hard to ignore, and structured enough to review fairly. Blocking effects must be scoped to the affected object.
