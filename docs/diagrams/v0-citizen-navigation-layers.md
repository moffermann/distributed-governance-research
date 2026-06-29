# Diagram - Citizen Navigation Layers v0

## Purpose

Show how citizens move from simple discovery to deeper auditability without making the first screen administratively heavy.

Related resolutions: C009, C021, C024, C025.

```mermaid
flowchart TD
    L0[Layer 0: Home and Discovery]
    HC[User-configurable Home categories]
    UR[Urgent or recommended item with visible reason]
    L1[Layer 1: Compact Project List]
    OM[Visible ordering mode and switch control]
    L2[Layer 2: Project Dashboard]
    L3[Layer 3: Detail by Icon or Signal]
    L4[Layer 4: Full Citizen Project Sheet]
    L5[Layer 5: Technical Audit Trail]

    L0 --> HC
    L0 --> UR
    HC -->|value, need, territory, search, Explore| L1
    UR -->|reason visible| L1
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

> The citizen starts with simple navigation, can customize the Home surface, sees why projects are highlighted or ordered, and can progressively reach full auditability by choice.
