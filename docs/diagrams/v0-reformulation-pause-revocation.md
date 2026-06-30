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
    B -->|Temporary blocker| E[Paused]
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

    E --> E1[Resolve blocker]
    E1 -->|Resolved| G
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

> Substitutive reformulation is not the same project; it should become a new project or close, fail, or revoke the original under its original terms.
