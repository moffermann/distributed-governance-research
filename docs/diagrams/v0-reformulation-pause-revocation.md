# Diagram - Reformulation, Pause, and Revocation v0

## Purpose

Show proportional project failure handling while preserving original value commitments and funding traceability.

Related resolutions and hypotheses: C005, C017, C018, H021, H040.

```mermaid
flowchart TD
    A[Problem detected] --> B[Classify variation, severity, and affected scope]

    B -->|Minor problem| C[Correction Required]
    B -->|Operational change preserving value thesis| D[Operational Reformulation]
    B -->|Material value change| MV[Material Reformulation Proposal]
    B -->|Substitutive change| S[Substitutive Reformulation]
    B -->|Temporary blocker| E[Scoped Systemic Pause]
    B -->|Severe issue or impossibility| F[Revoked]

    C --> C1[Submit correction]
    C1 --> C2[Review correction]
    C2 -->|Accepted| G[Continue]
    C2 -->|Rejected| B

    D --> DP[Apply active Reformulation Policy]
    DP --> D1[Create new project version]
    D1 --> D2[Revalidate]
    D2 -->|Accepted| G
    D2 -->|Rejected| E

    MV --> MV1[Preserve original promise and history]
    MV1 --> MV2[Community or rule-defined approval path]
    MV2 -->|Approved| DP
    MV2 -->|Rejected| FF[Fail, close, or revoke under original terms]

    S --> S1[New project or original closure under original terms]
    S1 --> F3

    E --> E0[Define affected scope and funding boundary]
    E0 --> E1[Review, correct, mitigate, or refer]
    E1 -->|Resolved| G
    E1 -->|External material/legal effect needed| EA[Competent authority, court, regulator, or enforceable obligation]
    EA --> E2[Authority order or final resolution]
    E2 -->|Resolved or narrowed| G
    E2 -->|Confirmed severe issue| F
    E1 -->|Unresolved or severe| F

    F --> F1[Block unreleased funds]
    F1 --> F2[Review released funds]
    F2 --> F3[Return, recovery, guarantee, or responsibility event]
    FF --> F3

    G --> H[Audit event and notifications]
    F3 --> H
```

## Rule

> Operational reformulation may preserve the value thesis. Material value reformulation cannot silently rewrite what funders financed and beneficiaries expected.

> A systemic pause is a platform effect with affected scope and funding boundary. Physical halt, permit revocation, legal sanction, or operational suspension requires competent external authority, legal rule, court/regulator order, or enforceable accepted obligation where applicable.

> Substitutive reformulation is not the same project; it should become a new project or close, fail, or revoke the original under its original terms.
