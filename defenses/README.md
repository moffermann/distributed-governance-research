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

The accepted Phase 3 resolutions are in `docs/67` through `docs/103` (first round `docs/67`-`docs/84`; later rounds `docs/86`-`docs/103`). Each defense file now references the resolution that integrated its accepted improvement.

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
| `D001` | `A001` | Legitimacy Does Not Follow From Funding | [[67_PROJECT_LEGITIMACY_PROFILE_AND_A001_RESOLUTION|docs/67_PROJECT_LEGITIMACY_PROFILE_AND_A001_RESOLUTION.md]] |
| `D002` | `A002` | Information Capture and Visibility Control | [[68_MATERIAL_VISIBILITY_AND_A002_RESOLUTION|docs/68_MATERIAL_VISIBILITY_AND_A002_RESOLUTION.md]] |
| `D003` | `A003` | Fiscalizer Capture or Fiscalization Failure | [[69_FISCALIZER_QUALITY_CAPTURE_INDICATORS_AND_A003_RESOLUTION|docs/69_FISCALIZER_QUALITY_CAPTURE_INDICATORS_AND_A003_RESOLUTION.md]] |
| `D004` | `A004` | Metric Manipulation and Goodhart Effects | [[70_METRIC_GAMING_TEST_AND_A004_RESOLUTION|docs/70_METRIC_GAMING_TEST_AND_A004_RESOLUTION.md]] |
| `D005` | `A005` | Neglected Essential Services | [[71_ESSENTIAL_SERVICE_PROTECTION_AND_A005_RESOLUTION|docs/71_ESSENTIAL_SERVICE_PROTECTION_AND_A005_RESOLUTION.md]] |
| `D006` | `A006` | Volatile Funding and Underfunded Continuity | [[72_CONTINUITY_RISK_CLASSIFICATION_AND_A006_RESOLUTION|docs/72_CONTINUITY_RISK_CLASSIFICATION_AND_A006_RESOLUTION.md]] |
| `D007` | `A007` | Conflicting Reviews and Evaluation Fragmentation | [[73_CONFLICT_OF_REVIEW_HANDLING_AND_A007_RESOLUTION|docs/73_CONFLICT_OF_REVIEW_HANDLING_AND_A007_RESOLUTION.md]] |
| `D008` | `A008` | Platform or Algorithmic Capture | [[74_PLATFORM_INFLUENCE_AUDIT_AND_A008_RESOLUTION|docs/74_PLATFORM_INFLUENCE_AUDIT_AND_A008_RESOLUTION.md]] |
| `D009` | `A009` | Inequality of Participation | [[75_PARTICIPATION_EQUITY_INDICATORS_AND_A009_RESOLUTION|docs/75_PARTICIPATION_EQUITY_INDICATORS_AND_A009_RESOLUTION.md]] |
| `D010` | `A010` | Delegation Concentration | [[76_DELEGATION_CONCENTRATION_STRESS_THRESHOLDS_AND_A010_RESOLUTION|docs/76_DELEGATION_CONCENTRATION_STRESS_THRESHOLDS_AND_A010_RESOLUTION.md]] |
| `D011` | `A011` | Moderation Abuse in Transition Pilots | [[77_TUTORED_MODERATION_ABUSE_TEST_AND_A011_RESOLUTION|docs/77_TUTORED_MODERATION_ABUSE_TEST_AND_A011_RESOLUTION.md]] |
| `D012` | `A012` | Scope Creep and Excessive Complexity | [[78_COMPLEXITY_BUDGET_AND_A012_RESOLUTION|docs/78_COMPLEXITY_BUDGET_AND_A012_RESOLUTION.md]] |
| `D013` | `A013` | False, Incomplete, or Context-Misclassified Evidence | [[79_EVIDENCE_QUALITY_REVIEW_AND_A013_RESOLUTION|docs/79_EVIDENCE_QUALITY_REVIEW_AND_A013_RESOLUTION.md]] |
| `D014` | `A014` | Related-Party Projects and Hidden Control | [[80_RELATED_PARTY_RELATIONSHIP_GRAPH_AND_A014_RESOLUTION|docs/80_RELATED_PARTY_RELATIONSHIP_GRAPH_AND_A014_RESOLUTION.md]] |
| `D015` | `A015` | Common-Good Charter Conflicts | [[81_COMMON_GOOD_IMPACT_SUFFICIENCY_TEST_AND_A015_RESOLUTION|docs/81_COMMON_GOOD_IMPACT_SUFFICIENCY_TEST_AND_A015_RESOLUTION.md]] |
| `D016` | `A016` | Resistance by Incumbent Institutions | [[82_INCUMBENT_RESISTANCE_INDICATORS_AND_A016_RESOLUTION|docs/82_INCUMBENT_RESISTANCE_INDICATORS_AND_A016_RESOLUTION.md]] |
| `D017` | `A017` | Disbursement Gaming | [[83_DISBURSEMENT_GAMING_TESTS_AND_A017_RESOLUTION|docs/83_DISBURSEMENT_GAMING_TESTS_AND_A017_RESOLUTION.md]] |
| `D018` | `A018` | Collusion Among Project Roles | [[84_COLLUSION_OBSERVABILITY_AND_A018_RESOLUTION|docs/84_COLLUSION_OBSERVABILITY_AND_A018_RESOLUTION.md]] |

## Second-round defense queue (D019-D033)

These defenses are paired with the second-round attack queue `A019`-`A033` in `attacks/`. They followed the same structure, completed paired review, and every accepted resolution (`docs/86` through `docs/103`) is propagated into the core corpus, and each brief records its own classification honestly, including where the attack is founded and the architecture has no answer beyond observability or explicit deferral.

| Defense | Attack | Title | Classification |
|---|---|---|---|
| `D019` | `A019` | Procedural Legitimacy Cannot Substitute Democratic Mandate | Founded (system-level authorization gap) — resolved in [[86_ALLOCATION_MANDATE_AND_A019_RESOLUTION|docs/86_ALLOCATION_MANDATE_AND_A019_RESOLUTION.md]] |
| `D020` | `A020` | Agenda-Setting Capture Through Planning Scope Construction | Founded, partially unresolved — resolved in [[87_PLANNING_SCOPE_AGENDA_LIMITATION_AND_A020_RESOLUTION|docs/87_PLANNING_SCOPE_AGENDA_LIMITATION_AND_A020_RESOLUTION.md]] |
| `D021` | `A021` | Treasury Dependence and Fiscal Strangulation | Founded — resolved in [[88_FISCAL_COMMITMENT_PROFILE_AND_A021_RESOLUTION|docs/88_FISCAL_COMMITMENT_PROFILE_AND_A021_RESOLUTION.md]] |
| `D022` | `A022` | Thin Markets for Fiscalization and Evidence Supply | Partially founded — resolved in [[90_CONTROL_SUPPLY_OBSERVABILITY_AND_A022_RESOLUTION|docs/90_CONTROL_SUPPLY_OBSERVABILITY_AND_A022_RESOLUTION.md]] |
| `D023` | `A023` | Meta-Governance Vacuum in Open Mode | Founded (admitted deferral) — resolved in [[91_OPEN_MODE_GATING_AND_A023_RESOLUTION|docs/91_OPEN_MODE_GATING_AND_A023_RESOLUTION.md]] |
| `D024` | `A024` | Underprovision of Non-Salient Public Goods by Atomized Choice | Partially founded — resolved in [[92_SALIENCE_BIAS_OBSERVABILITY_AND_A024_RESOLUTION|docs/92_SALIENCE_BIAS_OBSERVABILITY_AND_A024_RESOLUTION.md]] |
| `D025` | `A025` | Rational Ignorance and Participation Decay | Founded (behavioral prediction) — resolved in [[93_ENGAGEMENT_DECAY_METRICS_AND_A025_RESOLUTION|docs/93_ENGAGEMENT_DECAY_METRICS_AND_A025_RESOLUTION.md]] |
| `D026` | `A026` | Identity Infrastructure as Single Point of Failure and Surveillance | Partially founded — resolved in [[94_IDENTITY_PROVIDER_FAILURE_MODES_AND_A026_RESOLUTION|docs/94_IDENTITY_PROVIDER_FAILURE_MODES_AND_A026_RESOLUTION.md]] |
| `D027` | `A027` | Information Cascades and Allocation Herding | Founded — resolved in [[95_HERDING_OBSERVABILITY_AND_A027_RESOLUTION|docs/95_HERDING_OBSERVABILITY_AND_A027_RESOLUTION.md]] |
| `D028` | `A028` | Spatial and Group Inequity of Allocation Outcomes | Founded — resolved in [[96_TERRITORIAL_OUTCOME_OBSERVABILITY_AND_A028_RESOLUTION|docs/96_TERRITORIAL_OUTCOME_OBSERVABILITY_AND_A028_RESOLUTION.md]] |
| `D029` | `A029` | Program Fragmentation and Lost Complementarities | Partially founded — resolved in [[97_COMPOSITE_PROGRAM_DEPENDENCIES_AND_A029_RESOLUTION|docs/97_COMPOSITE_PROGRAM_DEPENDENCIES_AND_A029_RESOLUTION.md]] |
| `D030` | `A030` | Clientelism Migration into Distributed Allocation | Founded (adaptation risk) — resolved in [[98_CLIENTELISM_PATTERN_INDICATORS_AND_A030_RESOLUTION|docs/98_CLIENTELISM_PATTERN_INDICATORS_AND_A030_RESOLUTION.md]] |
| `D031` | `A031` | Polarization and Symbolic Capture of Allocation | Partially founded — resolved in [[99_MOTIVE_NEUTRALITY_BOUNDARY_AND_A031_RESOLUTION|docs/99_MOTIVE_NEUTRALITY_BOUNDARY_AND_A031_RESOLUTION.md]] |
| `D032` | `A032` | Intertemporal Myopia and Long-Term Underinvestment | Partially founded — resolved in [[100_LONG_HORIZON_LANES_AND_A032_RESOLUTION|docs/100_LONG_HORIZON_LANES_AND_A032_RESOLUTION.md]] |
| `D033` | `A033` | The Problem of Many Hands: Responsibility Vacuum | Founded — resolved in [[89_DUTY_OF_CARE_ANCHOR_AND_A033_RESOLUTION|docs/89_DUTY_OF_CARE_ANCHOR_AND_A033_RESOLUTION.md]] |

## External-review round defense queue (D034-D035)

Paired with the external-review round attacks in `attacks/`; both defenses apply the P001 comparative rule to the status-quo comparator the attacks omit (the state official's allocation act; the pre-existing approval labor).

| Defense | Attack | Title | Classification |
|---|---|---|---|
| `D034` | `A034` | Legal Characterization of the Citizen Allocation Act | Founded (characterization gap) — resolved in [[102_ALLOCATION_ACT_CHARACTERIZATION_AND_A034_RESOLUTION|docs/102_ALLOCATION_ACT_CHARACTERIZATION_AND_A034_RESOLUTION.md]] |
| `D035` | `A035` | Administrative Capacity Cost of Tutored Operation | Founded (deployment precondition, comparatively bounded) — resolved in [[103_ADMINISTRATIVE_CAPACITY_DECLARATION_AND_A035_RESOLUTION|docs/103_ADMINISTRATIVE_CAPACITY_DECLARATION_AND_A035_RESOLUTION.md]] |

## Manuscript-review round defense queue (D036-D040)

Paired with the manuscript-review round attacks in `attacks/` (five-profile review of the published v1.6 manuscript; raw reviews in `external-review/manuscript-v1.6-round/`). No accepted resolutions yet; each pair awaits author review. D036's empirical arbiter is the pre-registered E7 experiment ([[e7-calibrated-baseline-design|research/e7-calibrated-baseline-design.md]]).

| Defense | Attack | Title | Classification |
|---|---|---|---|
| `D036` | `A036` | The Opaque Baseline Is a Strawman | Founded in presentation and calibration; partially founded in substance — resolved in [[105_CALIBRATED_BASELINE_EVIDENCE_AND_A036_RESOLUTION|docs/105_CALIBRATED_BASELINE_EVIDENCE_AND_A036_RESOLUTION.md]]; E7 remains the arbiter |
| `D037` | `A037` | Reserve of Law and the Non-Delegable Allocation Competence | Founded (threshold gap) — resolved in [[106_ENABLING_NORM_RECORD_AND_A037_RESOLUTION|docs/106_ENABLING_NORM_RECORD_AND_A037_RESOLUTION.md]] |
| `D038` | `A038` | Reputational Exclusion as a Sanction Without Due Process | Reclassified partially founded by author review — resolved in [[107_REPUTATION_INFORMS_NEVER_EXCLUDES_AND_A038_RESOLUTION|docs/107_REPUTATION_INFORMS_NEVER_EXCLUDES_AND_A038_RESOLUTION.md]]; the proposed sanction procedure was not adopted (no exclusion power exists to regulate) |
| `D039` | `A039` | Traceable Allocation Reveals Political Preference | Founded (specification gap) — resolved in [[108_CITIZEN_ALLOCATION_SECRECY_AND_A039_RESOLUTION|docs/108_CITIZEN_ALLOCATION_SECRECY_AND_A039_RESOLUTION.md]] (secrecy-by-default, receipt-free, followed-projects feed) |
| `D040` | `A040` | The Adoption Paradox | Founded (missing deployment layer, thesis-bounded) — resolved in [[109_ADOPTION_LAYER_AND_A040_RESOLUTION|docs/109_ADOPTION_LAYER_AND_A040_RESOLUTION.md]] |

## Use

The next Phase 3 work should review each attack-defense pair. Where a defense marks the risk as unresolved or materially founded, the project should either create a formal resolution document, update core documents, or preserve the objection as an explicit unresolved limitation.
