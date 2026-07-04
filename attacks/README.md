# Phase 3 Attack Queue

## Purpose

This folder prepares the next roadmap round: Phase 3, "Attack the Architecture."

The files in this folder are not accepted resolutions. They are attack briefs. Each one defines a failure mode that must be reviewed, challenged, resolved, deferred, or marked as unresolved before the architecture is treated as mature.

The paired defense briefs are in `defenses/`. Each `D00N` file corresponds to the `A00N` attack file with the same number.

The accepted Phase 3 resolutions are in `docs/67` through `docs/103` (first round `docs/67`-`docs/84`; later rounds `docs/86`-`docs/103`). Each attack file now references the resolution that integrated its accepted improvement.

## Review basis

The attack set was derived from a repository-wide review of:

- [[03_ROADMAP|docs/03_ROADMAP.md]];
- [[33_DISTRIBUTED_GOVERNANCE_SYSTEM_V0_BLUEPRINT|docs/33_DISTRIBUTED_GOVERNANCE_SYSTEM_V0_BLUEPRINT.md]];
- [[34_CORE_V0_SCOPE_FREEZE|docs/34_CORE_V0_SCOPE_FREEZE.md]];
- [[35_CONSOLIDATED_ENTITY_OBJECT_STATE_MAP|docs/35_CONSOLIDATED_ENTITY_OBJECT_STATE_MAP.md]];
- [[38_V0_CONTRADICTION_AND_FAILURE_MODE_CHECKLIST|docs/38_V0_CONTRADICTION_AND_FAILURE_MODE_CHECKLIST.md]];
- accepted C001-C025 resolution documents in `docs/39` through `docs/63`;
- [[64_FORMAL_ENTITY_INVENTORY_V0|docs/64_FORMAL_ENTITY_INVENTORY_V0.md]];
- [[65_RESPONSIBILITY_MATRIX_BY_ROLE_V0|docs/65_RESPONSIBILITY_MATRIX_BY_ROLE_V0.md]];
- [[66_IMPLEMENTABLE_OBJECT_SCHEMA_DRAFT_V0|docs/66_IMPLEMENTABLE_OBJECT_SCHEMA_DRAFT_V0.md]];
- citizen flow documents in `docs/21` through `docs/32`;
- diagram source files under `docs/diagrams/`;
- hypotheses, concepts, open questions, principles, and session notes under `knowledge/`;
- the initial literature map under [[literature-map|research/literature-map.md]].

Generated SVG files and `node_modules` were excluded as secondary artifacts or dependencies.

## Attack list

| Attack | Title | Roadmap source | Accepted resolution |
|---|---|---|---|
| `A001` | Legitimacy Does Not Follow From Funding | legitimacy | [[67_PROJECT_LEGITIMACY_PROFILE_AND_A001_RESOLUTION|docs/67_PROJECT_LEGITIMACY_PROFILE_AND_A001_RESOLUTION.md]] |
| `A002` | Information Capture and Visibility Control | information capture | [[68_MATERIAL_VISIBILITY_AND_A002_RESOLUTION|docs/68_MATERIAL_VISIBILITY_AND_A002_RESOLUTION.md]] |
| `A003` | Fiscalizer Capture or Fiscalization Failure | fiscalization failure / fiscalizer capture | [[69_FISCALIZER_QUALITY_CAPTURE_INDICATORS_AND_A003_RESOLUTION|docs/69_FISCALIZER_QUALITY_CAPTURE_INDICATORS_AND_A003_RESOLUTION.md]] |
| `A004` | Metric Manipulation and Goodhart Effects | manipulation of metrics | [[70_METRIC_GAMING_TEST_AND_A004_RESOLUTION|docs/70_METRIC_GAMING_TEST_AND_A004_RESOLUTION.md]] |
| `A005` | Neglected Essential Services | neglected essential services | [[71_ESSENTIAL_SERVICE_PROTECTION_AND_A005_RESOLUTION|docs/71_ESSENTIAL_SERVICE_PROTECTION_AND_A005_RESOLUTION.md]] |
| `A006` | Volatile Funding and Underfunded Continuity | volatile funding | [[72_CONTINUITY_RISK_CLASSIFICATION_AND_A006_RESOLUTION|docs/72_CONTINUITY_RISK_CLASSIFICATION_AND_A006_RESOLUTION.md]] |
| `A007` | Conflicting Reviews and Evaluation Fragmentation | conflicting reviews | [[73_CONFLICT_OF_REVIEW_HANDLING_AND_A007_RESOLUTION|docs/73_CONFLICT_OF_REVIEW_HANDLING_AND_A007_RESOLUTION.md]] |
| `A008` | Platform or Algorithmic Capture | platform or algorithmic capture | [[74_PLATFORM_INFLUENCE_AUDIT_AND_A008_RESOLUTION|docs/74_PLATFORM_INFLUENCE_AUDIT_AND_A008_RESOLUTION.md]] |
| `A009` | Inequality of Participation | inequality of participation | [[75_PARTICIPATION_EQUITY_INDICATORS_AND_A009_RESOLUTION|docs/75_PARTICIPATION_EQUITY_INDICATORS_AND_A009_RESOLUTION.md]] |
| `A010` | Delegation Concentration | delegation concentration | [[76_DELEGATION_CONCENTRATION_STRESS_THRESHOLDS_AND_A010_RESOLUTION|docs/76_DELEGATION_CONCENTRATION_STRESS_THRESHOLDS_AND_A010_RESOLUTION.md]] |
| `A011` | Moderation Abuse in Transition Pilots | moderation abuse in transition pilots | [[77_TUTORED_MODERATION_ABUSE_TEST_AND_A011_RESOLUTION|docs/77_TUTORED_MODERATION_ABUSE_TEST_AND_A011_RESOLUTION.md]] |
| `A012` | Scope Creep and Excessive Complexity | scope creep and excessive complexity | [[78_COMPLEXITY_BUDGET_AND_A012_RESOLUTION|docs/78_COMPLEXITY_BUDGET_AND_A012_RESOLUTION.md]] |
| `A013` | False, Incomplete, or Context-Misclassified Evidence | false, incomplete, or context-misclassified evidence / evidence quality | [[79_EVIDENCE_QUALITY_REVIEW_AND_A013_RESOLUTION|docs/79_EVIDENCE_QUALITY_REVIEW_AND_A013_RESOLUTION.md]] |
| `A014` | Related-Party Projects and Hidden Control | related-party projects | [[80_RELATED_PARTY_RELATIONSHIP_GRAPH_AND_A014_RESOLUTION|docs/80_RELATED_PARTY_RELATIONSHIP_GRAPH_AND_A014_RESOLUTION.md]] |
| `A015` | Common-Good Charter Conflicts | common-good charter conflicts | [[81_COMMON_GOOD_IMPACT_SUFFICIENCY_TEST_AND_A015_RESOLUTION|docs/81_COMMON_GOOD_IMPACT_SUFFICIENCY_TEST_AND_A015_RESOLUTION.md]] |
| `A016` | Resistance by Incumbent Institutions | resistance by incumbent institutions | [[82_INCUMBENT_RESISTANCE_INDICATORS_AND_A016_RESOLUTION|docs/82_INCUMBENT_RESISTANCE_INDICATORS_AND_A016_RESOLUTION.md]] |
| `A017` | Disbursement Gaming | disbursement gaming | [[83_DISBURSEMENT_GAMING_TESTS_AND_A017_RESOLUTION|docs/83_DISBURSEMENT_GAMING_TESTS_AND_A017_RESOLUTION.md]] |
| `A018` | Collusion Among Project Roles | collusion among project roles | [[84_COLLUSION_OBSERVABILITY_AND_A018_RESOLUTION|docs/84_COLLUSION_OBSERVABILITY_AND_A018_RESOLUTION.md]] |

## Second-round attack queue (A019-A033)

A second attack round was proposed after the first queue was reviewed and resolved. These briefs target failure modes not covered by A001-A018, with emphasis on macro-level democratic legitimacy, fiscal and market preconditions, behavioral realism, and aggregate allocation pathologies. They followed the same brief format, completed paired Phase 3 review with defenses D019-D033, and their accepted resolutions (`docs/86` through `docs/100`) are propagated into the core corpus.

| Attack | Title | Primary gap attacked | Status |
|---|---|---|---|
| `A019` | Procedural Legitimacy Cannot Substitute Democratic Mandate | system-level democratic authorization (beyond A001's project level) | resolved in `docs/86_ALLOCATION_MANDATE_AND_A019_RESOLUTION.md` |
| `A020` | Agenda-Setting Capture Through Planning Scope Construction | deferred roadmap/scope construction governance | resolved in `docs/87_PLANNING_SCOPE_AGENDA_LIMITATION_AND_A020_RESOLUTION.md` |
| `A021` | Treasury Dependence and Fiscal Strangulation | credible-commitment failure in the fiscal channel | resolved in `docs/88_FISCAL_COMMITMENT_PROFILE_AND_A021_RESOLUTION.md` |
| `A022` | Thin Markets for Fiscalization and Evidence Supply | supply-side control-market failure (beyond A003 capture) | resolved in `docs/90_CONTROL_SUPPLY_OBSERVABILITY_AND_A022_RESOLUTION.md` |
| `A023` | Meta-Governance Vacuum in Open Mode | undefined non-tutored protocol decision mechanics | resolved in `docs/91_OPEN_MODE_GATING_AND_A023_RESOLUTION.md` |
| `A024` | Underprovision of Non-Salient Public Goods by Atomized Choice | aggregate allocation bias above essential floors | resolved in `docs/92_SALIENCE_BIAS_OBSERVABILITY_AND_A024_RESOLUTION.md` |
| `A025` | Rational Ignorance and Participation Decay | incentive structure of low-stakes choice (beyond A009 capacity) | resolved in `docs/93_ENGAGEMENT_DECAY_METRICS_AND_A025_RESOLUTION.md` |
| `A026` | Identity Infrastructure as Single Point of Failure and Surveillance | P004 verified-identity baseline as attack surface | resolved in `docs/94_IDENTITY_PROVIDER_FAILURE_MODES_AND_A026_RESOLUTION.md` |
| `A027` | Information Cascades and Allocation Herding | citizen-on-citizen herding (beyond A008 platform steering) | resolved in `docs/95_HERDING_OBSERVABILITY_AND_A027_RESOLUTION.md` |
| `A028` | Spatial and Group Inequity of Allocation Outcomes | distributive outcome equity (beyond A009 input equity) | resolved in `docs/96_TERRITORIAL_OUTCOME_OBSERVABILITY_AND_A028_RESOLUTION.md` |
| `A029` | Program Fragmentation and Lost Complementarities | cross-sectional coordination and economies of scale | resolved in `docs/97_COMPOSITE_PROGRAM_DEPENDENCIES_AND_A029_RESOLUTION.md` |
| `A030` | Clientelism Migration into Distributed Allocation | off-platform quid pro quo invisible to relationship graphs | resolved in `docs/98_CLIENTELISM_PATTERN_INDICATORS_AND_A030_RESOLUTION.md` |
| `A031` | Polarization and Symbolic Capture of Allocation | expressive, identity-driven allocation dynamics | resolved in `docs/99_MOTIVE_NEUTRALITY_BOUNDARY_AND_A031_RESOLUTION.md` |
| `A032` | Intertemporal Myopia and Long-Term Underinvestment | formation bias against long-horizon value (beyond A006 continuity) | resolved in `docs/100_LONG_HORIZON_LANES_AND_A032_RESOLUTION.md` |
| `A033` | The Problem of Many Hands: Responsibility Vacuum | harm accountability without collusion (beyond A018) | resolved in `docs/89_DUTY_OF_CARE_ANCHOR_AND_A033_RESOLUTION.md` |


## External-review round attack queue (A034-A035)

These briefs originate from the five-profile external-review simulation of [[101_CORE_V0_MINIMAL_PUBLISHABLE_MODEL|docs/101_CORE_V0_MINIMAL_PUBLISHABLE_MODEL.md]] (round 2): reviewer questions that the corpus could not answer with existing anchors were converted into attacks per the standing rule that only serious unresolved objections become formal attack files.

| Attack | Title | Origin | Status |
|---|---|---|---|
| `A034` | Legal Characterization of the Citizen Allocation Act | public-law reviewer, round 2 | resolved in [[102_ALLOCATION_ACT_CHARACTERIZATION_AND_A034_RESOLUTION|docs/102_ALLOCATION_ACT_CHARACTERIZATION_AND_A034_RESOLUTION.md]] |
| `A035` | Administrative Capacity Cost of Tutored Operation | public-sector practitioner reviewer, round 2 | resolved in [[103_ADMINISTRATIVE_CAPACITY_DECLARATION_AND_A035_RESOLUTION|docs/103_ADMINISTRATIVE_CAPACITY_DECLARATION_AND_A035_RESOLUTION.md]] |

## Manuscript-review round attack queue (A036-A040)

These briefs originate from the five-profile external-review simulation of the published manuscript itself ([[paper|drafts/paper.md]] v1.6, DOI 10.5281/zenodo.21193847) — the first round the manuscript faced as a manuscript; the earlier rounds reviewed the companion publishable model. The raw reviews and the round record are preserved in `external-review/manuscript-v1.6-round/`. Reviewer objections that the corpus could not answer with existing anchors were converted into attacks per the standing rule that only serious unresolved objections become formal attack files. The pre-registered E7 experiment ([[e7-calibrated-baseline-design|research/e7-calibrated-baseline-design.md]]) is A036's empirical test.

| Attack | Title | Origin | Status |
|---|---|---|---|
| `A036` | The Opaque Baseline Is a Strawman: The Status Quo Already Contains a Control Regime | academic + systems-architect + practitioner reviewers, manuscript round | resolved in [[105_CALIBRATED_BASELINE_EVIDENCE_AND_A036_RESOLUTION|docs/105_CALIBRATED_BASELINE_EVIDENCE_AND_A036_RESOLUTION.md]]; E7 remains the headline's arbiter |
| `A037` | Reserve of Law and the Non-Delegable Allocation Competence | public-law + practitioner reviewers, manuscript round | resolved in [[106_ENABLING_NORM_RECORD_AND_A037_RESOLUTION|docs/106_ENABLING_NORM_RECORD_AND_A037_RESOLUTION.md]] |
| `A038` | Reputational Exclusion as a Sanction Without Due Process | public-law reviewer, manuscript round | pending paired review |
| `A039` | Traceable Allocation Reveals Political Preference: Vote Immunity Without Vote Secrecy | public-law reviewer, manuscript round | pending paired review |
| `A040` | The Adoption Paradox: The Visibility Gap Punishes Its Natural Adopter | public-sector practitioner reviewer, manuscript round | pending paired review |

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
