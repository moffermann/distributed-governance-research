# Diagram - Delegation and Automatic Allocation v0

## Purpose

Show the relationship between delegation and automatic allocation, including base-profile continuity, delegation priority, concentration visibility, and revocation.

Related resolutions: C011, C023. Related hypotheses: H047, H048, H049.

```mermaid
flowchart TD
    A[Citizen wants low-friction participation]
    A --> B[Select or acknowledge base allocation profile]
    B --> C{Choose method}

    C -->|Delegate| D[Select delegate]
    D --> E[Show concentration signal]
    E --> F[Define scope]
    F --> G[Delegate acceptance]
    G -->|Rejected| H[Base profile remains active]
    G -->|Accepted| I[Active delegation]
    I --> J[Delegate acts within scope]
    J --> K[Report, represented weight, and audit trail]
    I --> L[Citizen may revoke future authority]
    L --> M[Base profile resumes]
    M --> N[Choose new delegate, edit profile, or fund manually]

    C -->|Automatic profile only| O[Edit value preferences]
    O --> P[Choose territory and control rules]
    P --> Q[Fallback rule]
    Q --> R[Simulation]
    R --> S[Profile active]
    S --> T{Active delegation governs same balance or scope?}
    T -->|Yes| U[Automatic rule skipped; delegation has priority]
    T -->|No| V[System allocates by citizen-defined rules]
    U --> W[Report and audit trail]
    V --> W
```

## Rule

> Delegation authorizes another actor and has priority within its scope. Budget delegation requires a selected or acknowledged base allocation profile before activation. Automatic allocation applies citizen-defined rules only where no active delegation governs the same balance or scope. If delegation is revoked, rejected, expired, or resigned, the previously selected base rule resumes for future allocation.
