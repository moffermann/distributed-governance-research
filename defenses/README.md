# Phase 3 Defense Queue

## Purpose

This folder contains defense briefs paired with the Phase 3 attack queue in `attacks/`.

Each defense file answers the corresponding attack file with the same number:

```text
attacks/A001-[slug].md -> defenses/D001-[slug].md
attacks/A002-[slug].md -> defenses/D002-[slug].md
...
attacks/A018-[slug].md -> defenses/D018-[slug].md
```

These files are not promotional rebuttals. They are structured defense briefs. A valid defense may conclude that an attack is founded, partially unresolved, or strong enough to require a future resolution before the model is treated as mature.

The accepted Phase 3 resolutions are in `docs/67` through `docs/84`. Each defense file now references the resolution that integrated its accepted improvement.

## Required defense structure

Each defense includes:

- attack reference;
- attack summary;
- objective evaluation;
- response;
- project-document basis;
- bibliographic basis;
- proposed improvements;
- location where the defense applies;
- residual risks and defense strength.

## Evaluation categories

The defense files use these evaluation dimensions:

- `Founded`: the attack identifies a real failure mode in the architecture or implementation.
- `Partially founded`: the risk is real, but the current model already contains substantial controls.
- `Unresolved`: the current model recognizes the issue but has not yet completed the required resolution.
- `Difference of judgment`: the attack depends mainly on institutional preference or political philosophy rather than demonstrated failure.
- `Editorial distortion risk`: the attack may push the project away from its functional architecture into a different thesis, such as centralized institutional monopoly, anti-institutional maximalism, or platform technocracy.

## Defense list

| Defense | Attack | Title | Accepted resolution |
|---|---|---|---|
| `D001` | `A001` | Legitimacy Does Not Follow From Funding | `docs/67_PROJECT_LEGITIMACY_PROFILE_AND_A001_RESOLUTION.md` |
| `D002` | `A002` | Information Capture and Visibility Control | `docs/68_MATERIAL_VISIBILITY_AND_A002_RESOLUTION.md` |
| `D003` | `A003` | Fiscalizer Capture or Fiscalization Failure | `docs/69_FISCALIZER_QUALITY_CAPTURE_INDICATORS_AND_A003_RESOLUTION.md` |
| `D004` | `A004` | Metric Manipulation and Goodhart Effects | `docs/70_METRIC_GAMING_TEST_AND_A004_RESOLUTION.md` |
| `D005` | `A005` | Neglected Essential Services | `docs/71_ESSENTIAL_SERVICE_PROTECTION_AND_A005_RESOLUTION.md` |
| `D006` | `A006` | Volatile Funding and Underfunded Continuity | `docs/72_CONTINUITY_RISK_CLASSIFICATION_AND_A006_RESOLUTION.md` |
| `D007` | `A007` | Conflicting Reviews and Evaluation Fragmentation | `docs/73_CONFLICT_OF_REVIEW_HANDLING_AND_A007_RESOLUTION.md` |
| `D008` | `A008` | Platform or Algorithmic Capture | `docs/74_PLATFORM_INFLUENCE_AUDIT_AND_A008_RESOLUTION.md` |
| `D009` | `A009` | Inequality of Participation | `docs/75_PARTICIPATION_EQUITY_INDICATORS_AND_A009_RESOLUTION.md` |
| `D010` | `A010` | Delegation Concentration | `docs/76_DELEGATION_CONCENTRATION_STRESS_THRESHOLDS_AND_A010_RESOLUTION.md` |
| `D011` | `A011` | Moderation Abuse in Transition Pilots | `docs/77_TUTORED_MODERATION_ABUSE_TEST_AND_A011_RESOLUTION.md` |
| `D012` | `A012` | Scope Creep and Excessive Complexity | `docs/78_COMPLEXITY_BUDGET_AND_A012_RESOLUTION.md` |
| `D013` | `A013` | False, Incomplete, or Context-Misclassified Evidence | `docs/79_EVIDENCE_QUALITY_REVIEW_AND_A013_RESOLUTION.md` |
| `D014` | `A014` | Related-Party Projects and Hidden Control | `docs/80_RELATED_PARTY_RELATIONSHIP_GRAPH_AND_A014_RESOLUTION.md` |
| `D015` | `A015` | Common-Good Charter Conflicts | `docs/81_COMMON_GOOD_IMPACT_SUFFICIENCY_TEST_AND_A015_RESOLUTION.md` |
| `D016` | `A016` | Resistance by Incumbent Institutions | `docs/82_INCUMBENT_RESISTANCE_INDICATORS_AND_A016_RESOLUTION.md` |
| `D017` | `A017` | Disbursement Gaming | `docs/83_DISBURSEMENT_GAMING_TESTS_AND_A017_RESOLUTION.md` |
| `D018` | `A018` | Collusion Among Project Roles | `docs/84_COLLUSION_OBSERVABILITY_AND_A018_RESOLUTION.md` |

## Use

The next Phase 3 work should review each attack-defense pair. Where a defense marks the risk as unresolved or materially founded, the project should either create a formal resolution document, update core documents, or preserve the objection as an explicit unresolved limitation.
