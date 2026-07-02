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

| Defense | Attack | Title |
|---|---|---|
| `D001` | `A001` | Legitimacy Does Not Follow From Funding |
| `D002` | `A002` | Information Capture and Visibility Control |
| `D003` | `A003` | Fiscalizer Capture or Fiscalization Failure |
| `D004` | `A004` | Metric Manipulation and Goodhart Effects |
| `D005` | `A005` | Neglected Essential Services |
| `D006` | `A006` | Volatile Funding and Underfunded Continuity |
| `D007` | `A007` | Conflicting Reviews and Evaluation Fragmentation |
| `D008` | `A008` | Platform or Algorithmic Capture |
| `D009` | `A009` | Inequality of Participation |
| `D010` | `A010` | Delegation Concentration |
| `D011` | `A011` | Moderation Abuse in Transition Pilots |
| `D012` | `A012` | Scope Creep and Excessive Complexity |
| `D013` | `A013` | False, Incomplete, or Context-Misclassified Evidence |
| `D014` | `A014` | Related-Party Projects and Hidden Control |
| `D015` | `A015` | Common-Good Charter Conflicts |
| `D016` | `A016` | Resistance by Incumbent Institutions |
| `D017` | `A017` | Disbursement Gaming |
| `D018` | `A018` | Collusion Among Project Roles |

## Use

The next Phase 3 work should review each attack-defense pair. Where a defense marks the risk as unresolved or materially founded, the project should either create a formal resolution document, update core documents, or preserve the objection as an explicit unresolved limitation.
