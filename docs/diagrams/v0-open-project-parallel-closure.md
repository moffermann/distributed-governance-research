# Diagram - Open Project Parallel Closure v0

## Purpose

Show that execution readiness depends on the project's applicable threshold policy and multiple closure conditions, including both execution funding and independent control capacity.

Related references: H027, C002, C003, C013, C016.

```mermaid
flowchart TD
    OP[Open Project]

    OP --> TP[Applicable Threshold Policy]
    OP --> F[Execution Funding Commitments]
    OP --> FS[Fiscalizer Offers]
    OP --> EP[Evidence Producer Commitments]
    OP --> CP[Control Subproject or Control Package]
    OP --> B[Beneficiary or Affected-Party Confirmation]
    OP --> D[Required Documents and Permits]
    OP --> C[Comments and Questions]
    OP --> Q[Complaints]
    OP --> MP[Disbursement Milestone Plan Validation]

    TP --> CC
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

> A project becomes execution-ready only when its applicable threshold policy is visible and the required execution funding, control capacity, evidence capacity, documents, complaints, and disbursement-plan validation are coherent.
