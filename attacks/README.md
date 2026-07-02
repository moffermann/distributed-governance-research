# Phase 3 Attack Queue

## Purpose

This folder prepares the next roadmap round: Phase 3, "Attack the Architecture."

The files in this folder are not accepted resolutions. They are attack briefs. Each one defines a failure mode that must be reviewed, challenged, resolved, deferred, or marked as unresolved before the architecture is treated as mature.

The paired defense briefs are in `defenses/`. Each `D00N` file corresponds to the `A00N` attack file with the same number.

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

| Attack | Title | Roadmap source |
|---|---|---|
| `A001` | Legitimacy Does Not Follow From Funding | legitimacy |
| `A002` | Information Capture and Visibility Control | information capture |
| `A003` | Fiscalizer Capture or Fiscalization Failure | fiscalization failure / fiscalizer capture |
| `A004` | Metric Manipulation and Goodhart Effects | manipulation of metrics |
| `A005` | Neglected Essential Services | neglected essential services |
| `A006` | Volatile Funding and Underfunded Continuity | volatile funding |
| `A007` | Conflicting Reviews and Evaluation Fragmentation | conflicting reviews |
| `A008` | Platform or Algorithmic Capture | platform or algorithmic capture |
| `A009` | Inequality of Participation | inequality of participation |
| `A010` | Delegation Concentration | delegation concentration |
| `A011` | Moderation Abuse in Transition Pilots | moderation abuse in transition pilots |
| `A012` | Scope Creep and Excessive Complexity | scope creep and excessive complexity |
| `A013` | False, Incomplete, or Context-Misclassified Evidence | false, incomplete, or context-misclassified evidence / evidence quality |
| `A014` | Related-Party Projects and Hidden Control | related-party projects |
| `A015` | Common-Good Charter Conflicts | common-good charter conflicts |
| `A016` | Resistance by Incumbent Institutions | resistance by incumbent institutions |
| `A017` | Disbursement Gaming | disbursement gaming |
| `A018` | Collusion Among Project Roles | collusion among project roles |

## Standard review routine

For each attack:

1. read the attack file;
2. read the paired defense file under `defenses/`;
3. verify the project locations cited in both files;
4. test the stress scenario against the current architecture;
5. decide whether the defense is enough, whether a formal resolution is needed, or whether the attack remains unresolved;
6. create a resolution document only after the critique is mature;
7. update the roadmap, indexes, and affected core documents;
8. keep unresolved risks visible.

## Design rule

> An attack brief should be strong enough that the architecture has to answer it, but narrow enough that one review round can produce a concrete decision.
