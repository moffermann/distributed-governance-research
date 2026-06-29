# Diagram - Distributed Planning Architecture v1

This diagram captures the current conceptual model of binding and evolutionary distributed planning.

```mermaid
flowchart TD
    A[Meta-planning national framework<br/>Common constitutional-like planning layer] --> B1[National branch / goal]
    A --> B2[National branch / goal]
    A --> B3[National branch / goal]

    B1 --> C1[Regional planning branch]
    B1 --> C2[Regional planning branch]
    B2 --> C3[Regional planning branch]

    C1 --> D1[Communal / local planning branch]
    C1 --> D2[Communal / local planning branch]
    C2 --> D3[Communal / local planning branch]

    D1 --> P1[Project]
    D1 --> P2[Project]
    D2 --> P3[Project]
    C2 --> P4[Regional project]
    B3 --> P5[National project]

    P1 --> R1[One primary goal]
    P1 --> R2[Optional secondary goals]

    A --> L[Goal lifecycle]
    L --> L1[Active]
    L1 --> L2[Underfunded]
    L2 --> L3[Under Review]
    L3 --> L4[At Risk]
    L4 --> L5[Reformulated / Suspended / Eliminated]
    L1 --> L6[Completed]

    A --> M[Modification process]
    M --> M1[Proposal by anyone]
    M1 --> M2[Justification / plan elaboration]
    M2 --> M3[Deliberation and review]
    M3 --> M4[Approval / rejection]
    M4 --> M5[Incorporation into roadmap]

    P1 --> E[Execution and evidence]
    E --> F[Evaluation dashboard]
    F --> G[Reputation and future funding]
```

## Key rules represented

1. There is a single national meta-planning framework for coherence.
2. National, regional, communal, and local branches can coexist.
3. A project must attach to the level that corresponds to its scope.
4. A project must declare exactly one primary goal.
5. A project may declare secondary goals, but accountability is tied to the primary goal.
6. Goals are binding but not irreversible.
7. Goals can be added, modified, reformulated, suspended, or eliminated.
8. Planning conflicts should be visible rather than hidden.
9. Evaluation and future funding depend on evidence and performance.

## Current status

This is a conceptual diagram, not an implementation design.
