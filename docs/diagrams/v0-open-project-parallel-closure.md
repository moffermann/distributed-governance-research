# Diagram - Open Project Parallel Closure v0

## Purpose

Show that execution readiness depends on multiple closure conditions, including both execution funding and independent control capacity.

Related resolutions: C002, C003, C013, C016.

```mermaid
flowchart TD
    OP[Open Project]

    OP --> F[Execution Funding Commitments]
    OP --> FS[Fiscalizer Offers]
    OP --> EP[Evidence Producer Commitments]
    OP --> CP[Control Subproject or Control Package]
    OP --> B[Beneficiary or Affected-Party Confirmation]
    OP --> D[Required Documents and Permits]
    OP --> C[Comments and Questions]
    OP --> Q[Complaints]
    OP --> MP[Disbursement Milestone Plan Validation]

    F --> CC{Closure Conditions Complete?}
    FS --> CC
    EP --> CC
    CP --> CC
    B --> CC
    D --> CC
    MP --> CC
    Q -->|no active blocking complaint| CC

    CC -->|No| OP
    CC -->|Yes| ER[Execution Ready]
```

## Rule

> A project becomes execution-ready only when execution funding, control capacity, evidence capacity, documents, complaints, and disbursement-plan validation are coherent.
