# Diagram - Complaint and Review v0

## Purpose

Show complaints as scoped formal review objects, distinct from ordinary comments.

Related resolutions: C004, C014, C024, H024.

```mermaid
flowchart TD
    A[Verified actor files complaint] --> B[Complaint Submitted]
    B --> ID[Identity visibility and privacy classification]
    ID --> MS{Minimum structure complete?}
    MS -->|No| RF[Request missing scope or complaint evidence]
    RF --> MS
    MS -->|Yes| Q[Send to fiscalizer for quote]
    MS -->|Yes| SW[Open support window]

    Q --> QD{Quote within deadline?}
    QD -->|No| QB[Apply quote fallback]
    QB --> Q
    QD -->|Yes| QC[Quote published]

    SW --> SP[Citizens support complaint]
    SW --> RC[Citizens reserve conditional review funding]
    RC -. hidden before quote .-> Q

    SP --> ST{Required supports reached in window?}
    ST -->|No| CS[Closed - support threshold not reached]
    ST -->|Yes| FC{Quoted cost funded?}
    QC --> FC
    FC -->|No| FP[Funding pending]
    FP --> FC
    FC -->|Yes| AR[Admissibility review]

    AR --> AD{Admissible and scoped?}
    AD -->|No| N[Rejected or redirected to comment or objection]
    AD -->|Yes| ER[Executor, fiscalizer, or actor response]
    ER --> RV[Review complaint evidence and responses]
    RV --> REG{Regulated legal effect needed?}
    REG -->|Yes| REF[Referral package to competent authority or court]
    REG -->|No| IMP[Protocol effect if allowed]

    REF --> L{Resolution or authority order}
    IMP --> L
    L -->|Founded| M[Correction, mitigation, recovery, responsibility event, or authority action]
    L -->|Not supported| NS[Rejected as unsupported]
    L -->|Resolved| O[Resolved]

    M --> P[Audit event and notifications]
    NS --> P
    O --> P
    N --> P
    CS --> P
```

## Rule

> Complaints must be easy to file, hard to ignore, and structured enough to review fairly. Review requires the configured support threshold, fiscalizer quote, and funded review path. Regulated operational effects require the competent authority or court where applicable.
