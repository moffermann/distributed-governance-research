# Phase 3 Attack Queue

## Purpose

This folder prepares the next roadmap round: Phase 3, "Attack the Architecture."

The files in this folder are not accepted resolutions. They are attack briefs. Each one defines a failure mode that must be reviewed, challenged, resolved, deferred, or marked as unresolved before the architecture is treated as mature.

The paired defense briefs are in `defenses/`. Each `D00N` file corresponds to the `A00N` attack file with the same number.

The accepted Phase 3 resolutions are in `docs/67` through `docs/84`. Each attack file now references the resolution that integrated its accepted improvement.

## Review basis

The attack set was derived from a repository-wide review of:

- `OPERATIONS.md`;
- `docs/03_ROADMAP.md`;
- `docs/33_DISTRIBUTED_GOVERNANCE_SYSTEM_V0_BLUEPRINT.md`;
- `docs/34_CORE_V0_SCOPE_FREEZE.md`;
- `docs/35_CONSOLIDATED_ENTITY_OBJECT_STATE_MAP.md`;
- `docs/38_V0_CONTRADICTION_AND_FAILURE_MODE_CHECKLIST.md`;
- accepted C001-C025 resolution documents in `docs/39` through `docs/63`;
- `docs/64_FORMAL_ENTITY_INVENTORY_V0.md`;
- `docs/65_RESPONSIBILITY_MATRIX_BY_ROLE_V0.md`;
- `docs/66_IMPLEMENTABLE_OBJECT_SCHEMA_DRAFT_V0.md`;
- citizen flow documents in `docs/21` through `docs/32`;
- diagram source files under `docs/diagrams/`;
- hypotheses, concepts, open questions, principles, and session notes under `knowledge/`;
- the initial literature map under `research/literature-map.md`.

Generated SVG files and `node_modules` were excluded as secondary artifacts or dependencies.

## Attack list

| Attack | Title | Roadmap source | Accepted resolution |
|---|---|---|---|
| `A001` | Legitimacy Does Not Follow From Funding | legitimacy | `docs/67_PROJECT_LEGITIMACY_PROFILE_AND_A001_RESOLUTION.md` |
| `A002` | Information Capture and Visibility Control | information capture | `docs/68_MATERIAL_VISIBILITY_AND_A002_RESOLUTION.md` |
| `A003` | Fiscalizer Capture or Fiscalization Failure | fiscalization failure / fiscalizer capture | `docs/69_FISCALIZER_QUALITY_CAPTURE_INDICATORS_AND_A003_RESOLUTION.md` |
| `A004` | Metric Manipulation and Goodhart Effects | manipulation of metrics | `docs/70_METRIC_GAMING_TEST_AND_A004_RESOLUTION.md` |
| `A005` | Neglected Essential Services | neglected essential services | `docs/71_ESSENTIAL_SERVICE_PROTECTION_AND_A005_RESOLUTION.md` |
| `A006` | Volatile Funding and Underfunded Continuity | volatile funding | `docs/72_CONTINUITY_RISK_CLASSIFICATION_AND_A006_RESOLUTION.md` |
| `A007` | Conflicting Reviews and Evaluation Fragmentation | conflicting reviews | `docs/73_CONFLICT_OF_REVIEW_HANDLING_AND_A007_RESOLUTION.md` |
| `A008` | Platform or Algorithmic Capture | platform or algorithmic capture | `docs/74_PLATFORM_INFLUENCE_AUDIT_AND_A008_RESOLUTION.md` |
| `A009` | Inequality of Participation | inequality of participation | `docs/75_PARTICIPATION_EQUITY_INDICATORS_AND_A009_RESOLUTION.md` |
| `A010` | Delegation Concentration | delegation concentration | `docs/76_DELEGATION_CONCENTRATION_STRESS_THRESHOLDS_AND_A010_RESOLUTION.md` |
| `A011` | Moderation Abuse in Transition Pilots | moderation abuse in transition pilots | `docs/77_TUTORED_MODERATION_ABUSE_TEST_AND_A011_RESOLUTION.md` |
| `A012` | Scope Creep and Excessive Complexity | scope creep and excessive complexity | `docs/78_COMPLEXITY_BUDGET_AND_A012_RESOLUTION.md` |
| `A013` | False, Incomplete, or Context-Misclassified Evidence | false, incomplete, or context-misclassified evidence / evidence quality | `docs/79_EVIDENCE_QUALITY_REVIEW_AND_A013_RESOLUTION.md` |
| `A014` | Related-Party Projects and Hidden Control | related-party projects | `docs/80_RELATED_PARTY_RELATIONSHIP_GRAPH_AND_A014_RESOLUTION.md` |
| `A015` | Common-Good Charter Conflicts | common-good charter conflicts | `docs/81_COMMON_GOOD_IMPACT_SUFFICIENCY_TEST_AND_A015_RESOLUTION.md` |
| `A016` | Resistance by Incumbent Institutions | resistance by incumbent institutions | `docs/82_INCUMBENT_RESISTANCE_INDICATORS_AND_A016_RESOLUTION.md` |
| `A017` | Disbursement Gaming | disbursement gaming | `docs/83_DISBURSEMENT_GAMING_TESTS_AND_A017_RESOLUTION.md` |
| `A018` | Collusion Among Project Roles | collusion among project roles | `docs/84_COLLUSION_OBSERVABILITY_AND_A018_RESOLUTION.md` |

## Standard review routine

For each attack:

1. read the attack file;
2. read the paired defense file under `defenses/`;
3. verify the project locations cited in both files;
4. test the stress scenario against the current architecture;
5. decide whether the accepted resolution is enough, whether core propagation is needed, or whether residual risk remains unresolved;
6. update the roadmap, indexes, and affected core documents;
7. update formal inventory, schema, or diagrams where the resolution adds objects, fields, tests, or states;
8. keep unresolved risks visible.

## Design rule

> An attack brief should be strong enough that the architecture has to answer it, but narrow enough that one review round can produce a concrete decision.
