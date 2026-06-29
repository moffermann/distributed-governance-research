# Diagram - Evidence and Fiscalization v0

## Purpose

Show how evidence enters review and how executor self-report is separated from corroborated non-executor evidence.

Related resolutions: C002, C003, C015.

```mermaid
flowchart TD
    M[Milestone requires evidence]
    M --> E1[Executor self-report]
    M --> E2[Evidence Producer evidence]
    M --> E3[Beneficiary or affected-party confirmation]
    M --> E4[Citizen observation]
    M --> E5[Technical record or external data]

    E1 --> PR[Privacy and metadata assistance]
    E2 --> PR
    E3 --> PR
    E4 --> PR
    E5 --> PR

    PR --> ER[Evidence Review Set]
    ER --> CV{Corroboration sufficient for critical decision?}
    CV -->|No| RQ[Request more evidence or control action]
    CV -->|Yes| F[Fiscalizer reviews]

    F --> R{Review result}
    R -->|Approved| A[Milestone approved]
    R -->|Approved with observations| AO[Milestone approved with observations]
    R -->|Correction required| C[Correction required]
    R -->|Rejected| RJ[Milestone rejected]
    R -->|Extraordinary review| X[Extraordinary review]

    A --> AE[Audit event]
    AO --> AE
    C --> AE
    RJ --> AE
    X --> AE
    RQ --> AE
```

## Rule

> Evidence producers create verifiable material. Executor material is self-report unless corroborated. Fiscalizers evaluate compliance after evidence exists.
