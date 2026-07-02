# Diagram - Citizen Navigation Layers v0

## Purpose

Show how citizens move from simple discovery to deeper auditability without making the first screen administratively heavy.

Related resolutions: C009, C021, C024, C025, A001, A002.

```mermaid
flowchart TD
    L0[Layer 0: Home and Discovery]
    HC[User-configurable Home categories]
    NS[Nearby or followed-scope discovery]
    UR[Urgent or recommended item with visible reason]
    MW[Compact material warning with source path]
    L1[Layer 1: Compact Project List]
    OM[Visible ordering mode and switch control]
    L2[Layer 2: Project Dashboard]
    L3[Layer 3: Detail by Icon or Signal]
    L4[Layer 4: Full Citizen Project Sheet]
    L5[Layer 5: Technical Audit Trail]

    L0 --> HC
    L0 --> NS
    L0 --> UR
    NS --> MW
    UR --> MW
    HC -->|value, need, territory, search, Explore| L1
    NS -->|new nearby project, design change, consultation window, affected-party observation request| L1
    UR -->|reason visible| L1
    MW -->|unresolved condition, conditional approval, complaint status, readiness gap| L1
    L1 --> OM
    OM -->|select project| L2
    OM -->|click signal| L3
    L2 -->|click icon, number, condition, alert| L3
    L2 -->|view full details| L4
    L3 -->|see full context| L4
    L4 -->|view audit trail| L5
    L5 -->|privacy-aware trace| L4
```

## Rule

> The citizen starts with simple navigation, can customize the Home surface, follow nearby or thematic scopes, see why projects are highlighted or ordered, see compact material warnings when favorable labels have unresolved conditions, participate asynchronously in affected-party windows, and progressively reach full auditability by choice.
