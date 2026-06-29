# Diagram - Project Creation and Publication v0

## Purpose

Show how an idea becomes a financeable project only after responsibility, value, budget, evidence, fiscalization, common-good impact, and disbursement plan requirements are coherent.

Related resolutions: C001, C002, C008, C010, C016, C022.

```mermaid
flowchart TD
    A[Idea: public civic demand]
    A --> A1[Followers, comments, objections, associated proposals]
    A1 --> E{Executor accepts responsibility?}
    E -->|No| A2[Idea remains public but not financeable]
    E -->|Yes| P[Project Draft]

    P --> B[Problem and solution]
    B --> C[Value thesis and value icons]
    C --> VVP[Value Verification Package]
    VVP --> D[Beneficiaries and affected parties]
    D --> CG[Common-good impact declaration where relevant]
    CG --> F[Execution budget]
    F --> MP[Disbursement Milestone Plan]
    MP --> EV[Metrics, evidence, and corroboration requirements]
    EV --> CTRL[Control package and fiscalization requirements]
    CTRL --> RA[Risks, antivalues, and mitigation]
    RA --> AS[Assisted validation by rules and AI]

    AS -->|critical issue| B
    AS -->|requires adjustment| P
    AS -->|valid| CP[Citizen preview]
    CP --> OP[Publish as Open Project]
```

## Rule

> Ideas capture demand. Projects execute responsibility. AI may assist validation, but publication depends on protocol rules and accountable project roles.
