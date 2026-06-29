# Diagram - Delegation and Automatic Allocation v0

## Purpose

Show the relationship between delegation and automatic allocation, including delegation priority and concentration visibility.

Related resolutions: C011, C023.

```mermaid
flowchart TD
    A[Citizen wants low-friction participation]
    A --> B{Choose method}

    B -->|Delegate| C[Select delegate]
    C --> CS[Show concentration signal]
    CS --> D[Define scope]
    D --> E[Delegate acceptance]
    E -->|Rejected| G[No delegation]
    E -->|Accepted| F[Active delegation]
    F --> H[Delegate acts within scope]
    H --> I[Report, represented weight, and audit trail]
    F --> J[Citizen may revoke future authority]

    B -->|Automatic profile| K[Choose value preferences]
    K --> L[Choose territory and control rules]
    L --> M[Fallback rule]
    M --> N[Simulation]
    N --> O[Profile active]
    O --> P{Active delegation governs same balance or scope?}
    P -->|Yes| S[Automatic rule skipped; delegation has priority]
    P -->|No| Q[System allocates by citizen-defined rules]
    Q --> R[Report and audit trail]
    S --> R
```

## Rule

> Delegation authorizes another actor and has priority within its scope. Automatic allocation applies citizen-defined rules only where no active delegation governs the same balance or scope.
