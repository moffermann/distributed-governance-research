# Diagram - Contextualized Evidence and Fiscalization v0

## Purpose

Show how contextualized evidence enters review, how executor self-report is separated from corroborated non-executor evidence, and how material information claims can lead to correction, verified discovery, or responsibility review.

Related resolutions: C002, C003, C015, H023.

```mermaid
flowchart TD
    M[Milestone or claim requires fulfillment/control evidence]
    M --> MC[Material information claim]
    MC --> E1[Executor self-report]
    MC --> E2[Evidence Producer fulfillment/control evidence]
    MC --> E3[Beneficiary or affected-party confirmation]
    MC --> E4[Citizen observation]
    MC --> E5[Technical record or external data]

    E1 --> PR[Privacy and metadata assistance]
    E2 --> PR
    E3 --> PR
    E4 --> PR
    E5 --> PR

    PR --> AI[AI anomaly assistance]
    AI --> ER[Contextualized Evidence Review Set]
    MC --> ER
    ER --> CV{Corroboration sufficient for critical decision?}
    CV -->|No| RQ[Request more contextualized evidence or control action]
    CV -->|Yes| F[Fiscalizer reviews]

    F --> R{Review result}
    R -->|Approved| A[Milestone approved]
    R -->|Approved with observations| AO[Milestone approved with observations]
    R -->|Correction required| C[Correction required]
    R -->|Rejected| RJ[Milestone rejected]
    R -->|Extraordinary review| X[Extraordinary review]
    R -->|Material information issue| IR[Claim correction, verified discovery, or responsibility review]

    A --> AE[Audit event]
    AO --> AE
    C --> AE
    RJ --> AE
    X --> AE
    IR --> AE
    RQ --> AE
```

## Rule

> Evidence producers create verifiable fulfillment/control material. Executor material is self-report unless corroborated. Fiscalizers evaluate compliance after contextualized evidence exists. AI may flag anomalies, but verified discovery, responsibility, and fund effects require review.
