# Implementable Object Schema Draft v0

## Purpose

This document is the first implementable object schema draft for the Distributed Governance System v0.

It converts the formal entity inventory, diagrams, audit event schema, and responsibility matrix into a structured object model that can later guide:

- database schema design;
- API contracts;
- validation rules;
- event schemas;
- access-control design;
- migration planning;
- prototype implementation.

This is not yet a final database schema, API specification, class model, smart contract, legal implementation, or country-specific data model. ^re7800b2c

## Status

Accepted as the Phase 2 implementable object schema draft.

Source baseline:

- `docs/33_DISTRIBUTED_GOVERNANCE_SYSTEM_V0_BLUEPRINT.md`
- `docs/35_CONSOLIDATED_ENTITY_OBJECT_STATE_MAP.md`
- `docs/64_FORMAL_ENTITY_INVENTORY_V0.md`
- `docs/65_RESPONSIBILITY_MATRIX_BY_ROLE_V0.md`
- `docs/20_PROJECT_TECHNICAL_AUDIT_TRAIL_LAYER.md`
- `docs/diagrams/v0-formal-entity-relationship.md`
- `docs/diagrams/v0-audit-event-schema.md`
- `knowledge/concepts/evidence-context-taxonomy-v0.md`
- `knowledge/concepts/evaluation-context-taxonomy-v0.md`

## Schema principles

### 1. Logical schema before storage schema

The objects below are logical objects. A later implementation may store them in relational tables, document stores, event streams, ledgers, or a hybrid architecture.

### 2. Every material object needs traceability

Objects that carry state, authority, responsibility, funding, review, evidence, reputation, or formal effect should reference `AuditEvent` records. ^r68b92440

### 3. Actor, role, and object references must stay separate

An `Actor` identifies a participant or external actor. A `RoleAssignment` identifies the scoped responsibility context in which that actor acts. An `ObjectRef` identifies the target object affected.

### 4. Evidence requires context

No implementable schema should expose a formal `Evidence` object without `evidence_context`. The technical object is `ContextualizedEvidenceItem`.

### 5. Read models do not create effects

`ReputationSummary`, `PerformanceHistorySurface`, and `AssistedDeliberationContext` are derived surfaces. They read reviewed source records but do not create formal effects by themselves.

### 6. Platform effects and legal effects remain separate

The schema may record external legal references, court orders, regulator orders, permits, or administrative decisions. It does not assume the platform itself creates legal effects unless a country implementation grants that power.

## Common field primitives

These primitives should be reused across object groups.

| Primitive | Minimal fields | Purpose |
|---|---|---|
| `ObjectId` | `object_type`, `object_id` | Stable identifier for any object. |
| `ActorRef` | `actor_id`, `actor_type`, `verification_status` | Identifies a citizen, organization, public authority, custodian, allocation amount provider, or system process. |
| `RoleContextRef` | `role_type`, `actor_id`, `role_assignment_id`, `scope`, `status` | Identifies the role under which an actor acted. |
| `ObjectRef` | `object_type`, `object_id`, `parent_object_ref`, `affected_scope` | Identifies the target object and affected scope. |
| `RuleContextRef` | `rule_id`, `protocol_version_id`, `operating_mode_id`, `policy_ref`, `rule_change_ref` | Identifies why the system allowed, blocked, or routed an effect. |
| `SourceRecordRef` | `source_object_type`, `source_object_id`, `source_version`, `source_status` | Identifies the record used as source for an action, review, or effect. |
| `AuditRef` | `audit_event_id`, `previous_event_ref`, `integrity_ref` | Connects an object or transition to the audit chain. |
| `VisibilityPrivacy` | `visibility_tier`, `privacy_classification`, `protected_identity_ref`, `redaction_rule_ref` | Separates transparency from privacy and safety protection. |
| `EffectRef` | `effect_type`, `effect_scope`, `effect_status`, `effect_object_ref` | Identifies downstream platform, financial, reputation, responsibility, or external-reference effects. |
| `VersionRef` | `version_id`, `version_number`, `supersedes_ref`, `effective_at` | Preserves change history. |

## Common base object

Every primary object should support this minimum structure unless it is explicitly a derived read model.

```text
object_type
object_id
status
created_at
created_by_actor_ref
created_by_role_context_ref where applicable
updated_at
current_version_ref where applicable
scope
visibility_privacy
audit_refs
```

Stateful objects add:

```text
lifecycle_state
previous_state
state_changed_at
state_change_reason
state_change_rule_context_ref
```

Reviewable objects add:

```text
review_status
reviewer_role_context_ref
review_basis_refs
review_limitations
review_result
reviewed_at
```

Effect-bearing objects add:

```text
effect_type
effect_scope
effect_status
effect_refs
```

## Actor and Role Schemas

| Object | Required core fields | Key refs / effects | Notes |
|---|---|---|---|
| `Actor` | `actor_id`, `actor_type`, `verification_status`, `display_name_or_protected_label`, `visibility_privacy`, `status` | May hold many `RoleAssignment` records. | Actor type may be citizen, organization, public authority, state-owned operator where eligible, custodian, allocation amount provider, or system process. |
| `OrganizationProfile` | `organization_id`, `organization_type`, `legal_status`, `ownership_control_refs`, `status` | Connects to role assignments and related-party reviews. | Public/private/publicly owned label is not enough for eligibility. |
| `PublicAuthorityProfile` | `authority_id`, `mandate_scope`, `controlled_scopes`, `authority_type`, `status` | May issue `GovernanceResolution`, external legal references, or infrastructure inputs. | External in controlled scopes under C007. |
| `StateOwnedOperatorDisclosure` | `operator_actor_id`, `public_ownership_basis`, `controlling_authority_refs`, `privilege_refs`, `eligibility_status` | Feeds `RelatedPartyConflictReview` and eligibility checks. | Public ownership alone does not exclude; control/privilege context matters. |
| `RoleAssignment` | `role_assignment_id`, `actor_ref`, `role_type`, `scope`, `accepted_at`, `status`, `conflict_status` | Used by every material `AuditEvent`. | Role reputation and responsibility attach here, not directly to actor identity alone. |

## Core Project and Scope Schemas

| Object | Required core fields | Key refs / effects | Notes |
|---|---|---|---|
| `Idea` | `idea_id`, `title`, `problem_or_demand`, `territory`, `status`, `support_count_ref`, `comment_refs`, `source_project_ref`, `continuity_need_ref` | May generate `Project` records. | Not financeable for execution. May be generated or updated by a continuity renewal window. |
| `Project` | `project_id`, `title`, `summary`, `territory`, `current_state`, `current_version_ref`, `planning_scope_ref`, `primary_responsibility_anchor_ref`, `threshold_policy_ref`, `legitimacy_profile_ref`, `active_funding_attempt_ref`, `post_closure_coverage_profile_ref`, `continuity_risk_classification`, `minimum_funded_service_period`, `future_funding_dependency_warning`, `renewal_window_ref`, `wind_down_rule_ref`, `audit_refs` | Parent for phases, funding, evidence, fiscalization, complaints, closure, reputation. | Financeable executable unit; legitimacy profile applies where required by threshold policy. A006 fields apply where the project is recurring, continuity-critical, emergency, or maintenance-dependent. Funding attempt history prevents indefinite commitment lock. Post-closure coverage controls internal post-closure complaint/review eligibility. |
| `ProjectVersion` | `project_version_id`, `project_id`, `version_number`, `changed_fields_ref`, `reason`, `supersedes_ref`, `audit_refs` | Preserves promise and design history. | No silent editing of core promises. |
| `ProjectPhase` | `phase_id`, `project_id`, `phase_type`, `phase_order`, `phase_state`, `deliverables`, `budget_lane_ref`, `gate_requirements`, `successor_phase_refs`, `continuity_period`, `renewal_trigger` | Gates funding release and execution transitions. | Design-and-execution projects use this to reserve later funds without releasing them prematurely. Operational or maintenance phases expose funded period and renewal/wind-down treatment. |
| `PlanningScope` | `scope_id`, `public_function`, `territory`, `operating_mode_ref`, `source`, `eligible_project_types`, `essential_service_protection_status`, `protected_floor_ref`, `planning_continuity_target`, `service_lane_classification`, `underfunding_indicator_ref`, `effective_at`, `status` | Governs project eligibility and publication. | Tutored interpretations and essential-target revisions require visible governance resolution, administrative rule change, or review trace. |
| `PrimaryResponsibilityAnchor` | `anchor_id`, `project_id`, `anchor_statement`, `public_function_or_scope_ref`, `primary_value_family`, `secondary_contributions` | Connects classification, funding, evaluation, fiscalization, closure, and reputation. | Prevents bundled accountability dilution. |
| `ThresholdPolicy` | `policy_id`, `scope`, `source`, `procedural_burden_profile`, `conditions`, `essential_service_conditions`, `funding_lane_treatment`, `post_closure_coverage_rule`, `required_documents`, `reviewer_or_authority_ref`, `effective_version_ref` | Controls publication, funding, execution-ready status, disbursement, closure, review, post-closure coverage, and reformulation. | Proposers/designers/executors cannot self-select lower burden, weaker post-closure coverage, or move protected floors into ordinary assignable funding where obligations decrease. |
| `RequiredEvidencePackage` | `package_id`, `target_object_ref`, `source_policy_ref`, `required_need_refs`, `completeness_status`, `reviewer_or_corrob_path_refs`, `citizen_missing_condition_labels`, `audit_refs` | Lists mandatory evidence before publication, financing, phase acceptance, execution-ready status, disbursement, closure, or responsibility review where policy requires it. | Required for projects/effects where policy applies; optional for idea maturation. |
| `RequiredEvidenceNeed` | `need_id`, `package_ref`, `target_object_ref`, `required_evidence_context`, `requirement_category`, `expected_source_roles`, `corroboration_rule`, `timing_or_deadline`, `missing_effect`, `privacy_rule_ref`, `audit_refs` | Usually satisfied by ContextualizedEvidenceItems with readiness context. | Not fulfillment evidence by default. |
| `ProjectLegitimacyProfile` | `profile_id`, `project_id`, `project_version_ref`, `affected_scope`, `affected_party_map_ref`, `exposure_types`, `required_evidence_package_ref`, `required_need_refs`, `submitted_evidence_refs`, `unresolved_objection_refs`, `review_route_refs`, `citizen_status`, `audit_refs` | Aggregates affected-party mapping, consultation evidence, objections, Planning Scope review, complaint routes, Governance Resolutions, or authority traces where applicable. | Not a vote, veto, popularity score, or proof created by funding. |
| `RelatedPartyConflictReview` | `conflict_review_id`, `target_project_ref`, `actor_role_refs`, `relationship_type`, `severity_classification`, `disclosure_status`, `review_status`, `effect_refs` | May trigger warnings, safeguards, exclusion, blocking, reformulation, rejection, complaint review, or responsibility review. | Applies especially to holding-linked design/execution/control relationships. |

## Value, Evidence, and Evaluation Schemas

| Object | Required core fields | Key refs / effects | Notes |
|---|---|---|---|
| `ValueThesis` | `value_thesis_id`, `project_version_ref`, `value_statement`, `beneficiary_scope`, `source_role_ref`, `status` | Connects to `ValueAntivalueProfile`, metrics, evidence needs, and closure. | Value is broader than economic return. |
| `ValueAntivalueProfile` | `profile_id`, `project_version_ref`, `value_floor_refs`, `antivalue_ceiling_refs`, `review_method`, `status` | Supports disbursement, closure, mitigation, responsibility, reputation, or complaint paths after review. | Values are floors; antivalues are ceilings. |
| `Metric` | `metric_id`, `project_version_ref`, `dimension`, `target_or_threshold`, `measurement_method`, `timing`, `evidence_need_refs`, `covered_value_or_antivalue_refs`, `coverage_status`, `gaming_risk_note`, `review_consequence` | Must connect to evidence needs and review effects. | Avoids vague or moving targets. A metric is weak when it can be satisfied while leaving the value unverified. |
| `ValueVerificationPackage` | `package_id`, `project_version_ref`, `covered_values`, `metric_refs`, `evidence_need_refs`, `source_role_rules`, `coverage_matrix`, `coverage_status`, `coverage_gap_refs`, `metric_gap_refs`, `status` | Bridges value commitments to the evidential contract and records A004 evidence coverage. | Citizen surface may show a simple verification summary such as strong, coverage gap, metric gap, or under correction. |
| `ProjectEvidentialContract` | `contract_id`, `project_version_ref`, `value_profile_ref`, `evidence_need_refs`, `corroboration_rules`, `privacy_rules`, `effect_rules`, `status` | Governs fulfillment/control evidence eligibility and priority. | Defines needs, not preselected producers. |
| `EvidenceProducerQualificationStandard` | `standard_id`, `target_need_ref`, `required_credentials_or_competence`, `accepted_method_or_protocol`, `instrument_or_tool_standard`, `calibration_or_validation_rule`, `chain_of_custody_rule`, `report_requirements`, `legal_or_professional_basis_ref`, `status` | Defines the producer and method standard required for formal fulfillment/control evidence. | May be embedded in a need or implemented as a reusable object. Country implementations map it to applicable legal, technical, professional, or administrative rules. |
| `FulfillmentEvidenceNeed` | `need_id`, `contract_ref`, `metric_or_claim_ref`, `expected_source_roles`, `producer_qualification_standard_ref`, `required_metadata`, `method_or_protocol_rule`, `review_rule`, `status` | Evidence producers may offer to satisfy it after the relevant work, service, value, antivalue, milestone, or phase deliverable is performed. | Contract-matched offers receive higher priority only when they satisfy the qualification, method, metadata, and report standard; pre-execution readiness evidence is separate. |
| `MaterialInformationClaim` | `claim_id`, `project_or_object_ref`, `claim_text_or_value`, `responsible_role_ref`, `materiality_basis`, `source_record_refs`, `approval_or_criterion_ref`, `approval_scope_or_condition`, `supporting_evidence_refs`, `review_status`, `citizen_visibility_status`, `material_warning_status` | May connect to contradiction, correction, complaint, responsibility, reputation, citizen-facing warning, or visibility correction. | Captures statements, approval labels, conditions, omissions, and limitations that affect funding, legitimacy, readiness, disbursement, closure, complaint review, risk, trust, or reputation. |
| `ContextualizedEvidenceItem` | `evidence_item_id`, `submitted_by_role_ref`, `evidence_context`, `target_object_ref`, `producer_qualification_basis_refs`, `method_or_protocol_used`, `instrument_or_tool_refs`, `metadata`, `privacy_classification`, `review_status`, `sufficiency_status` | May support complaint, readiness, fulfillment, control, contradiction, observability, or research only after context review. | Bare evidence is not a formal object. Formal fulfillment/control use requires qualification and method fit where the evidence need demands it. |
| `EvidenceContext` | `context_id`, `evidence_item_ref`, `proposed_context`, `confirmed_context`, `confirmed_by_role_ref`, `effect_scope`, `status` | Prevents complaint evidence, readiness evidence, fulfillment evidence, and control evidence from being mixed. | Same material may have multiple reviewed contexts. |
| `EvidenceQualityReview` | `review_id`, `evidence_item_ref`, `need_or_standard_ref`, `producer_qualification_result`, `method_fit_result`, `metadata_completeness_result`, `provenance_or_chain_result`, `corroboration_result`, `probative_fitness_result`, `limitations`, `reviewer_role_ref`, `status` | Reviews whether an item can support the claimed formal effect. | Not a generic truth oracle. It classifies fit for a specific need/effect. |
| `EvaluationRecord` | `evaluation_id`, `evaluation_context`, `evaluated_dimension`, `authority_or_qualification_basis`, `evidence_refs`, `evidence_quality_review_refs`, `effect_type`, `effect_scope`, `review_status` | May affect disbursement, closure, correction, responsibility, reputation, or complaint outcome. | Formal effects require scoped evaluation and evidence-quality/qualification fit where applicable. |
| `VerifiedDiscovery` | `discovery_id`, `source_role_ref`, `hidden_issue_ref`, `evidence_refs`, `review_result`, `materiality_finding`, `visibility_effect_refs`, `effect_refs` | May create reward, reputation input, correction, complaint, responsibility, warning, visibility correction, or disbursement effect after review. | AI anomaly flags alone are not discoveries. |

## Funding, Disbursement, and Custody Schemas

| Object | Required core fields | Key refs / effects | Notes |
|---|---|---|---|
| `Budget` | `budget_id`, `project_version_ref`, `total_amount`, `currency_or_unit`, `budget_line_refs`, `status` | Connects to funding targets, control budgets, assurance, and disbursement. | Budget changes require version trace. |
| `BudgetLine` | `budget_line_id`, `budget_ref`, `purpose`, `amount`, `phase_ref`, `funding_lane`, `continuity_purpose`, `disbursement_rule_ref` | Separates execution, control, guarantee, evidence mission, mitigation, continuity, maintenance, renewal, wind-down, or review costs. | Enables lane-specific closure and release rules. |
| `FundingAttempt` | `attempt_id`, `target_object_ref`, `project_version_ref`, `funding_lane`, `attempt_number`, `target_amount`, `window_start`, `window_end`, `extension_policy_ref`, `extension_count`, `max_extension_count`, `progress_snapshot`, `readiness_snapshot`, `state`, `fund_treatment_rule_ref`, `source_attempt_ref`, `audit_refs` | Groups funding commitments inside a bounded funding window and may lead to execution-ready, extension, expiry, reformulation, republication, cloning, return, reassignment, or closure. | Core v0 lifecycle object. `Expired unfunded` is a project/protocol outcome, not ordinary voluntary withdrawal. |
| `AllocationAmountRule` | `rule_id`, `scope`, `formula_version`, `eligibility_basis`, `lane_treatment`, `provider_ref`, `privacy_rule`, `effective_at` | Feeds civic allocation without exposing raw sensitive data. | Equal allocation is an explicit simple option; protected-floor, reserve-backed, default-assigned, and excluded lanes must be distinguishable where applicable. |
| `BudgetLiquidityPolicy` | `policy_id`, `scope`, `authority_basis_ref`, `budget_cap`, `cycle_period`, `base_allocation_rule_ref`, `max_open_commitment_ratio`, `reserve_or_coverage_rule`, `stress_test_rule`, `eligible_completion_buffer_rule`, `cycle_adjustment_rule`, `audit_rule`, `status` | Optional public fiscal policy for smoothing cyclical allocation capacity against authorized annual or period budgets. | Extension v1+ / country implementation. Not hidden virtual money and not Treasury discretion over project priority. |
| `CivicWallet` | `wallet_id`, `actor_ref`, `allocation_amount_rule_ref`, `available_amount`, `committed_amount`, `assignable_scope_refs`, `status` | Supports funding, delegation, and automatic profiles. | Non-withdrawable public allocation right, not private cash; cannot allocate non-assignable protected floors. |
| `FundingCommitment` | `commitment_id`, `wallet_or_actor_ref`, `target_object_ref`, `funding_attempt_ref`, `funding_lane`, `continuity_label`, `post_closure_coverage_label`, `amount`, `state`, `delegation_or_profile_ref` | May reserve funds for project, phase, continuity project, control, complaint review, or mitigation. | Funding is commitment, not proof of legitimacy, readiness, disbursement approval, fulfillment, indefinite continuity, or indefinite post-closure complaint availability. If the attempt expires unfunded, eligible unused commitments return, reassign, or follow default rules. |
| `Disbursement` | `disbursement_id`, `project_or_phase_ref`, `budget_line_ref`, `milestone_or_gate_ref`, `review_refs`, `continuity_period_ref`, `state`, `amount` | Leads to financial order only after review and blockers clear. | May be released, retained, blocked, returned, reassigned, recovered, or closed. Continuity-sensitive release can depend on period, retention, replacement, or wind-down rules. |
| `FinancialOrder` | `financial_order_id`, `order_type`, `source_balance_ref`, `destination_ref`, `amount`, `rule_context_ref`, `custodian_ref`, `coverage_profile_ref`, `execution_status` | Custodian executes release, retention, return, reassignment, recovery, guarantee execution, coverage execution, or reports technical/legal block. | Does not decide value, complaint truth, post-closure responsibility, or reputation. |
| `FinancialAssuranceProfile` | `assurance_profile_id`, `project_ref`, `basis_rule_ref`, `required_percentage_or_formula`, `eligible_budget_basis`, `continuity_replacement_or_wind_down_rule_ref`, `status` | Required where assurance applies before affected funds release. | Applies beyond construction; may protect continuity replacement, retained future service funds, or wind-down. |
| `PostClosureCoverageProfile` | `coverage_profile_id`, `project_ref`, `phase_or_scope_ref`, `threshold_policy_ref`, `window_start`, `window_end`, `coverage_mechanism`, `coverage_provider_ref`, `covered_dimension_refs`, `excluded_dimension_refs`, `response_deadline`, `review_path_ref`, `coverage_amount_or_cap`, `assurance_or_policy_ref`, `state`, `audit_refs` | Governs whether post-closure complaints, contradictory evidence, hidden antivalues, defects, or correction claims may be processed inside the platform after closure. | Core v0 minimum. Coverage mechanism is Executor Direct Warranty or Equivalent Insurance / Bond / Coverage. Outside the window or scope, ordinary claims route to external channels unless a competent external decision is later recorded. |
| `GuaranteeMaterializationRecord` | `guarantee_record_id`, `assurance_profile_ref`, `provider_ref`, `instrument_type`, `confirmed_amount`, `status`, `expiry_or_release_rule` | May block or allow release depending on requirement. | Confirmation comes from lawful custodian/guarantor/insurer/treasury/bank/escrow/equivalent. |

## Control, Fiscalization, and Review Schemas

| Object | Required core fields | Key refs / effects | Notes |
|---|---|---|---|
| `ControlSubproject` | `control_subproject_id`, `target_project_ref`, `scope`, `budget_ref`, `required_by_policy_ref`, `state`, `minimum_package_rule`, `qualification_standard_refs` | Creates fiscalization/evidence/control opportunities. | Minimum package should close before execution readiness where required. Evidence missions are paid proof work, not casual uploads. |
| `FiscalizationOffer` | `offer_id`, `actor_role_ref`, `target_control_ref`, `methodology`, `budget_or_quote`, `conflict_declaration`, `eligibility_status`, `comparable_experience_summary`, `current_workload`, `repeat_relationship_refs` | Can become fiscalization assignment if selected. | Popularity-only selection excluded for responsible control. |
| `FiscalizerEligibilityReputationProfile` | `profile_id`, `target_control_ref`, `fiscalizer_role_ref`, `eligibility_criteria_refs`, `competence_match`, `availability_status`, `workload_status`, `methodology_fit`, `budget_fit`, `independence_status`, `contextual_history_refs`, `repeat_relationship_refs`, `dependency_concentration`, `warning_status`, `safeguard_refs`, `citizen_summary`, `audit_refs` | Informs assignment, safeguards, replacement, secondary audit, and reputation review. | Derived read model; not a generic CV, universal score, or automatic selector. |
| `FiscalizationAssignment` | `assignment_id`, `fiscalizer_role_ref`, `scope`, `methodology`, `deadline`, `budget_line_ref`, `state`, `conflict_status`, `eligibility_profile_ref`, `capture_warning_status` | Produces reports, review findings, corrections, or formal-path triggers. | Protocol-selected or accepted through control subproject. |
| `FiscalizationReport` | `report_id`, `assignment_ref`, `evidence_refs`, `evidence_quality_review_refs`, `evidence_rejected_refs`, `scope`, `methodology`, `findings`, `limitations`, `formal_effect_claimed`, `recommended_effects`, `report_sufficiency_status`, `review_status` | May support EvaluationRecords, disbursement, correction, complaint review, closure, responsibility review, or reputation. | Fiscalization itself must be auditable and must not rely on technically unfit evidence for hard formal effects. |

## Complaint, Pause, and Conflict Schemas

| Object | Required core fields | Key refs / effects | Notes |
|---|---|---|---|
| `Complaint` | `complaint_id`, `complainant_role_ref`, `target_object_ref`, `issue_type`, `affected_scope`, `complaint_evidence_refs`, `post_closure_coverage_ref`, `external_route_ref`, `state` | May enter quote, support, funding, admissibility, review, referral, post-closure coverage review, external routing, or final resolution paths. | Complaint filing alone does not prove responsibility or suspend material execution. Post-closure complaints require active coverage scope or route externally. |
| `ComplaintReviewPolicy` | `policy_id`, `scope`, `required_support_count`, `support_window_days`, `quote_deadline_days`, `post_closure_window_rule`, `funding_rule`, `fallback_rule`, `effective_version_ref` | Governs complaint activation. | Prevents arbitrary complaint processing and indefinite platform exposure after closure. |
| `ComplaintReviewQuote` | `quote_id`, `complaint_ref`, `reviewer_or_fiscalizer_role_ref`, `scope`, `cost`, `deadline`, `conflict_declaration`, `status` | Required before review funding activation where policy requires. | Reserved funding totals should not bias quote. |
| `ComplaintAdmissibilityReferralRecord` | `record_id`, `complaint_ref`, `reviewer_role_ref`, `admissibility_result`, `affected_scope`, `system_effect_refs`, `referral_refs`, `status` | May trigger non-blocking admission, scoped systemic pause, referral, or inadmissibility. | Legal/material suspension depends on competent authority where applicable. |
| `SystemicPauseRecord` | `pause_id`, `trigger_ref`, `affected_scope`, `funding_boundary`, `blocked_actions`, `lifting_rule`, `escalation_rule`, `state` | Platform effect on funding, disbursement, phase gate, closure, evidence use, or actor scope. | Not physical/legal suspension by itself. |

## Citizen Signal, Privacy, and Deliberation Schemas

| Object | Required core fields | Key refs / effects | Notes |
|---|---|---|---|
| `SupportSignal` | `support_id`, `actor_ref`, `target_object_ref`, `status`, `created_at`, `withdrawn_at` | Active counts may feed thresholds where policy uses support. | Not funding, evidence, evaluation, or reputation input by itself. |
| `JustifiedObjectionSignal` | `objection_id`, `actor_ref`, `target_object_ref`, `reason_category`, `explanation`, `status`, `linked_complaint_ref` | May inform deliberation, review, or complaint. | Not a complaint by default. |
| `Comment` | `comment_id`, `actor_ref`, `target_object_ref`, `body_or_summary`, `visibility_privacy`, `protected_identity_ref`, `status` | May trigger clarification or deliberation. | Not formal complaint/evaluation/evidence by itself. |
| `ProtectedIdentityRequest` | `request_id`, `actor_ref`, `target_action_ref`, `risk_basis`, `review_result`, `display_identity`, `access_rule_ref`, `status` | Applies to sensitive comments, complaints, evidence, testimony, beneficiary confirmations, or affected-party reports. | Verified actor remains known to authorized process. |
| `AssistedDeliberationContext` | `context_id`, `target_object_ref`, `decision_context`, `source_item_refs`, `material_warning_refs`, `ai_assistance_ref`, `status`, `citizen_summary` | Helps citizens review material actions and unresolved conditions. | Does not decide, rank, certify truth, allocate funds, suppress dissent, or hide source categories. |

## Delegation and Allocation Schemas

| Object | Required core fields | Key refs / effects | Notes |
|---|---|---|---|
| `Delegation` | `delegation_id`, `delegator_actor_ref`, `delegate_actor_ref`, `scope`, `accepted_at`, `status`, `base_rule_ref`, `cap_rule_ref`, `concentration_signal`, `stress_threshold_rule_ref`, `reporting_preference_ref`, `relationship_disclosure_refs` | Authorizes delegated actions inside scope and feeds concentration visibility. | Revocation is immediate for future actions and non-retroactive for past valid actions. Stress threshold fields are warnings/reporting references, not a new default cap. |
| `DelegatedActionRecord` | `delegated_action_id`, `delegation_ref`, `action_type`, `target_object_ref`, `represented_weight`, `cap_effect`, `stress_warning_ref`, `report_ref`, `resulting_object_ref`, `audit_ref` | Feeds reports, represented-weight visibility, cap-effect visibility, and concentration observability. | Delegate action does not erase citizen identity. Cap effects exist only where a configured public rule applies. |
| `AutomaticAllocationProfile` | `profile_id`, `actor_ref`, `rule_preferences`, `priority_rule`, `status`, `fallback_behavior` | May create funding commitments when no higher-priority delegation or blocker applies. | Cannot override eligibility, phase gates, or citizen confirmation rules. |

## Reputation, Responsibility, and Performance Schemas

| Object | Required core fields | Key refs / effects | Notes |
|---|---|---|---|
| `ResponsibilityEvent` | `responsibility_event_id`, `actor_ref`, `role_context_ref`, `source_record_ref`, `severity`, `review_basis`, `effect_refs`, `status` | May affect reputation, eligibility, disbursement, correction, revocation, or legal referral. | Must be reviewed and role-specific. |
| `ReputationSignal` | `signal_id`, `actor_ref`, `role_context_ref`, `source_type`, `source_ref`, `status` | Soft context only. | Does not directly update formal reputation. |
| `ReputationInput` | `input_id`, `actor_ref`, `role_context_ref`, `reviewed_source_ref`, `obligation_dimension`, `severity_or_weight_basis`, `appeal_status` | Feeds `ReputationUpdate`. | Raw opinion, popularity, suspicion, and unfounded complaints excluded. |
| `ReputationUpdate` | `update_id`, `actor_ref`, `role_context_ref`, `reputation_input_ref`, `previous_value`, `new_value`, `rule_context_ref`, `status` | Updates role-specific reputation. | Must remain explainable and auditable. |
| `ReputationSummary` | `summary_id`, `actor_ref`, `role_type`, `source_update_refs`, `data_sufficiency_status`, `citizen_summary` | Citizen-facing read model. | Does not create reputation by itself. |
| `PerformanceHistorySurface` | `surface_id`, `actor_ref`, `role_type`, `comparison_context`, `source_record_refs`, `data_limitations`, `summary_fields` | Helps citizens inspect reviewed performance. | Not universal score, social credit, or automatic allocation. |

## Governance, Rule Change, and Audit Schemas

| Object | Required core fields | Key refs / effects | Notes |
|---|---|---|---|
| `OperatingMode` | `operating_mode_id`, `public_function`, `territory_or_scope`, `mode`, `effective_at`, `authority_or_process_ref`, `timeout_policy_ref`, `status` | Controls publication/review mode. | Closed, Tutored, Semi-open, Open, Suspended. |
| `GovernanceResolution` | `resolution_id`, `related_project_or_request_ref`, `public_function`, `operating_mode_ref`, `planning_scope_ref`, `decision_type`, `decision_result`, `responsible_authority_or_process`, `rule_applied`, `reason`, `reason_category`, `suggested_next_action`, `decision_date`, `review_time`, `authority_linked_operator_flag`, `status` | Publishes material tutored decisions and preserves minimum data for later moderation-pattern audit. | Citizen audit actions and later pattern analytics do not automatically overturn decision unless configured. |
| `ReviewTimeoutResolution` | `timeout_resolution_id`, `related_project_or_request_ref`, `operating_mode_ref`, `planning_scope_ref`, `submission_date`, `review_deadline`, `days_elapsed`, `configured_timeout_policy`, `automatic_consequence`, `responsible_authority_or_process`, `status` | Records authority silence and configured consequence. | Consequence must be predeclared before submission. |
| `ProtocolVersion` | `protocol_version_id`, `scope`, `effective_at`, `superseded_at`, `source_change_ref`, `active_rule_refs`, `transition_rules`, `status` | Governs decisions and rule references. | Past decisions keep their governing version. |
| `AdministrativeRuleChange` | `change_id`, `operating_mode_ref`, `rule_affected`, `old_value`, `new_value`, `reason`, `effective_at`, `transition_rule`, `status` | Creates or modifies configured rules. | No silent, surprising, or retroactive changes by default. |
| `SystemImplementationChange` | `change_id`, `implementation_version`, `component`, `old_behavior`, `new_behavior`, `related_rule_ref`, `migration_plan`, `rollback_ref`, `status` | Records technical changes with governance relevance. | Software changes must not hide policy changes. |
| `ProtocolChangeProposal` | `proposal_id`, `proposing_actor_or_process`, `rule_or_section_affected`, `reason`, `impact_analysis`, `review_period`, `approval_result`, `implementation_date`, `status` | Non-tutored visible protocol-change path. | Voting mechanics remain future work. |
| `AuditEvent` | `event_id`, `event_type`, `occurred_at`, `recorded_at`, `actor_ref`, `role_context_ref`, `object_ref`, `previous_state_or_value`, `new_state_or_value`, `source_record_ref`, `rule_context_ref`, `effect_ref`, `visibility_privacy`, `previous_event_ref`, `integrity_ref` | Immutable trace of material actions. | Corrections are linked events, not silent edits. |

## Minimal Validation Gates

An implementable system should reject or block confirmation of material effects when these gates fail.

```text
No state transition without AuditEvent.
No formal evidence use without evidence_context.
No hard-KPI fulfillment/control evidence effect without producer qualification and method fit where the accepted evidence need requires it.
No funding-complete label as legitimacy proof.
No execution-ready transition where required affected-party mapping or consultation evidence remains pending.
No readiness condition satisfied with fulfillment evidence unless the evidence item is also explicitly classified and reviewed as Readiness Evidence for that effect.
No disbursement without funding source, budget line, milestone/phase gate, review basis, and financial order path.
No disbursement for a metric requiring professional or technical proof when the evidence producer qualification, method, instrument/tool, required metadata, or report discipline is missing or insufficient.
No financeable publication, execution funding commitment, disbursement, fulfilled closure, or reputation input for a value dimension that has an unresolved A004 evidence-coverage gap, unless the active policy explicitly treats that dimension as non-formal context and exposes the limitation.
No Planning Scope that affects essential guarantees, continuity, emergency capacity, redistribution, vulnerable beneficiaries, universal access, or low-visibility groups without visible essential-service protection treatment: protected floor or no protected floor, service lane, funding-lane treatment, underfunding indicator where applicable, and rule-change trace for material target revisions.
No ordinary civic-wallet allocation to a non-assignable protected floor or excluded lane.
No financeable project or phase that is recurring, continuity-critical, emergency, or maintenance-dependent without continuity risk classification, minimum funded service period, future funding dependency warning, beneficiary-protection/wind-down rule, and renewal-window or continuity-need Idea treatment where applicable.
No closure as fulfilled without reviewed fulfillment/control evidence or limitation statement.
No reputation update without reviewed ReputationInput.
No responsible fiscalizer assignment without project-specific eligibility criteria, conflict/dependency review, and contextual reputation profile where fiscalization is required.
No public authority moderation without GovernanceResolution or ReviewTimeoutResolution where tutored review applies.
No rule change without version, public reason, effective date, transition rule, and audit trace.
No protected identity without verified actor and protected identity request record.
No AI assistance treated as actor, evaluator, fiscalizer, or truth-decider by default.

No approval, almost-funded, recommended, urgent, execution-ready, or AI-summary label without source-linked material claims and unresolved-condition visibility where material.

No separate PlatformInfluenceRecord required in Core v0. Platform-influence boundaries are represented through existing discovery fields, AssistedDeliberationContext traces, source-linked AI-assistance records, AuditEvents, and the applicable SystemImplementationChange, AdministrativeRuleChange, GovernanceResolution, or ProtocolChangeProposal path.
No separate ParticipationEquityIndicator required in Core v0. Participation-equity boundaries are represented through existing ThresholdPolicy requirements, ProjectLegitimacyProfile status, RequiredEvidencePackage needs, ContextualizedEvidenceItems, Delegation and DelegatedActionRecord concentration fields, ProtectedIdentityRequest records, participation-support project disclosures, AuditEvents, and administrative observability where implemented.
No separate DelegationConcentrationStressThreshold object required in Core v0. A010 stress thresholds are represented through Delegation and DelegatedActionRecord fields, represented-weight warnings, configured cap references, delegated-action report sufficiency, related-party and participation-support disclosures, AuditEvents, and administrative observability. Advanced delegation-network analysis or anti-cluster algorithms remain Extension v1+ or implementation-level observability.
No separate TutoredModerationAbuseTest object required in Core v0. A011 is represented through GovernanceResolution, ReviewTimeoutResolution, OperatingMode, PlanningScope, authority/operator relationship disclosures, AuditEvents, and basic administrative observability. Full moderation-abuse dashboards, automatic possible-abuse findings, cross-actor rejection-rate comparisons, duplicate/outside-scope comparability analytics, and operator-concentration analytics remain Extension v1+ or country/administrator observability.
No separate ComplexityBudget object required in Core v0. A012/P007 is a design-time discipline enforced through the formal entity inventory test, ThresholdPolicy-triggered burden, and this schema's minimalism. Quantitative complexity metrics, object-count ceilings, and implementation-cost models remain Extension v1+ or future implementation.
No separate RelationshipGraph object required in Core v0. A014 relationship graphs are represented through existing `RelatedPartyConflictReview` severity and disclosure fields, `StateOwnedOperatorDisclosure`, role and supplier declarations, ProjectPhase gates, FiscalizationAssignment, disbursement blockers, and AuditEvents, with the same graph serving A018 collusion observability. Beneficial-ownership verification, corporate-registry integration, and relationship-graph analytics remain Extension v1+ or country implementation.
No separate CommonGoodCharter or CommonGoodRegistry object required in Core v0. A015 is represented as a sufficiency test over the existing common-good impact declaration fields, ValueAntivalueProfile affected-asset/affected-party/antivalue fields, RequiredEvidenceNeed records, FiscalizationAssignment, complaint paths, and AuditEvents: affected assets and parties identified; no impact, uncertain impact with explanation, or impact with explanation; active-charter relationship where a charter exists; no unexplained overuse of `uncertain`; and material omissions connected to fiscalization, complaint, mitigation, responsibility, and reputation effects. Charter creation, charter voting, and platform common-good adjudication remain Extension v1+.
No separate IncumbentResistanceRecord required in Core v0. A016 incumbent-resistance indicators are represented as observability over existing OperatingMode, PlanningScope, GovernanceResolution, ReviewTimeoutResolution, FiscalizationAssignment, StateOwnedOperatorDisclosure, authority/operator relationship disclosures, AuditEvents, and administrative observability: scope share opened; approval, rejection, and timeout rates; rejection-reason comparability; authority-linked operator participation; public-operator privileges, subsidies, guarantees, or data access; independent versus controlled fiscalization rates; and pilot outcomes compared with the incumbent baseline. Core v0 adds no mechanism that compels institutional transition or protects the migrated budget share, and resistance-pattern analytics and cross-country transition comparisons remain Extension v1+ or country/administrator observability.
No separate DisbursementGamingTest object required in Core v0. A017 disbursement-gaming tests are represented as linkage and justification checks over existing DisbursementMilestonePlan, Milestone, ProjectPhase, BudgetLine, FinancialAssuranceProfile, GuaranteeMaterializationRecord, FiscalizationReport, and Disbursement objects: every milestone links to budget line, phase, value relevance, evidence need, review basis, blocker check, retention, and release amount; advance payment carries recoverability, retention, direct supplier payment, guarantee, or equivalent protection; avoidably weak milestone design triggers designer/modeler responsibility review; the FiscalizationReport states why the evidence supports release, partial release, retention, or rejection; and citizen-facing summaries separate funding, reservation, release, retained funds, and guarantee status. Per-project actuarial guarantee calibration and automated milestone-design scoring remain Extension v1+ or country implementation.
No separate CollusionDetectionRecord required in Core v0. A018 collusion observability is represented over the existing A014 relationship-and-control graph (RelatedPartyConflictReview severity and disclosure fields, StateOwnedOperatorDisclosure, role and supplier declarations), FiscalizationAssignment history, VerifiedDiscovery, ResponsibilityEvent, and AuditEvents: repeated actor-cluster visibility across projects; timing-anomaly review for evidence, fiscalizer reports, disbursement requests, and complaints; outcome-pattern review for unusually favorable or fast approvals; independent corroboration for critical milestones; the verified-discovery route for hidden coordination; and cross-role responsibility events where collusion is confirmed. Pattern surfaces feed human review, complaint, and verified-discovery paths; automated collusion detection, network-analysis scoring, and investigative capability remain Extension v1+ or country observability, and prosecution remains external law.
No separate AllocationMandate entity required in Core v0. A019 is a versioned record on PlanningScope, which carries mandate_source, authorizing_instrument_ref, migrated_share, formula_version, and equal_per_citizen_departure_flag with the authorizing authority, plus version history, distinct from AdministrativeRuleChange and with AuditEvents on every change. A non-equal formula is a higher-authorization decision than an ordinary parameter edit; the platform records and exposes external authorization, and mandate construction, validation, and adjudication remain external constitutional law and country implementation.
No separate FiscalCommitmentProfile entity required in Core v0. A021 is carried on PlanningScope as migrated_share, indexation_rule, delivery_latency_target, and cycle_horizon with version history, and profile changes record reason, magnitude, affected_scopes, and beneficiary_impact as governance events with AuditEvents. Fiscal-reliability indicators — expected-versus-actual delivery of signed balances, order-to-execution latency, an unexecuted-valid-order indicator, and a real-value-preservation warning — derive from custody and FinancialOrder records rather than a new entity. The platform records and surfaces fiscal behavior; appropriation locks, statutory indexation, and enforceable budget floors remain external law and country implementation.
No separate DutyOfCareAnchor entity required in Core v0. A033 execution-financeable projects carry duty_of_care_anchor_ref — a named solvent, reachable legal person (executor, guarantor, insurer, or designated responsible operator) answerable to third parties for physical and safety harm, with third-party liability coverage references on FinancialAssuranceProfile and Post-Closure Coverage where ThresholdPolicy requires — validated before Disbursement and exposed on the citizen-facing sheet, with AuditEvents. The responsibility matrix distinguishes no-internal-breach from no-one-liable-to-the-victim, and the audit trail preserves a court-usable harm-attribution package. The platform records the duty-bearer and provisions coverage; liability apportionment remains external law.
No separate ControlSupplyDensityRecord required in Core v0. A022 control-supply observability is represented over existing PlanningScope, Control Subproject selection, and FiscalizationAssignment records: eligible fiscalizers and evidence producers per scope, offer rates, fee levels, and repeat-assignment concentration, with a thin_market_indicator surfaced before publication and priced compensation for weak verification carried on the FinancialAssuranceProfile guarantee terms. Thin-market handling routes — remote and documentary evidence, cross-territory and pooled assignment, and relaxed-but-disclosed selection under stronger safeguards — are a disclosed ThresholdPolicy and country-implementation choice; verifier training, accreditation subsidies, and market-building remain Extension v1+ or country implementation.
No separate OpenModeGate entity required in Core v0. A023 is a deployment precondition over OperatingMode and the C019 ProtocolChangeProposal shell: an open_mode_gate bars any public function from exiting into open mode until constitutional-level decision mechanics are resolved and published, while the C019 procedural shell (change types, versioning, non-surprise, effective dates, transition and rollback) stays binding in every mode. Any eventual protocol-change vote carries participation and concentration metrics and may not define the mechanism that ratifies it; tiered protocol-rule levels, a non-self-amending amendment rule, and default entrenchment remain undefined by design as future constitutional work.
No separate SalienceBiasRecord required in Core v0. A024 salience-bias observability is represented above the essential floor over PlanningScope declared need weights, citizen funding and automatic allocation profiles, the system-defined default allocation rule, and the discovery layer: funding per category across salient-versus-non-salient and preventive-versus-remedial lanes, with underfunded-need indicators, and a disclosed, versioned default_weighting toward under-allocated non-salient categories gated by ThresholdPolicy, with inactive budget routed by planning priority. The non-assignable pool and essential floors (A005) remain the structural answer for catastrophic tails; preference correction, welfare functions, and portfolio rebalancing beyond defaults remain Extension v1+ or planning-scope governance.
No separate EngagementDecayMetric entity required in Core v0. A025 is measurement fed into the existing H054 functional transition maturity object: per-cycle shares of manual, profile-driven, delegated, and untouched-default allocation as versioned public metrics, active-core concentration across cycles, and a cadence-fatigue review, derived from automatic allocation profiles, delegation, and the system default allocation rule, with citizen-facing legitimacy language distinguishing considered choice from default and profile carry-over. Participation quotas, engagement targets, cohort-refresh, and sampling remain Extension v1+, and measurement does not by itself reverse decay.
No separate IdentityProviderFailureRecord entity and no detection engine required in Core v0. A026 adds declared failure modes (compromise, coercion, outage, wrongful exclusion), compromise-response procedures (re-verification windows, action freezes, retroactive audit), and purpose-bound access auditing over existing verified identity, contextual protected identity (C014/C024), the complaint and evidence flows, and identity-provider integration: every access to act-to-identity linkage is an AuditEvent carrying access_purpose and checkable by an independent party, with a heightened adversarial de-anonymization threshold for complaints against powerful actors and retention limits on sensitive linkage where law allows. Verified identity is preserved as the anti-Sybil baseline (P004); provider-independent anomaly detection, federation, and substitution remain Extension v1+.
```

## Macul Multi-Court Schema Trace

```text
Project:
Project + ProjectVersion + ProjectPhase records.

Continuity:
Project records `one-time` unless maintenance or operation is included.
If maintenance is funded for a bounded period, the Project or ProjectPhase records the period, renewal trigger, continuity label, and wind-down rule.

Design phase:
ProjectPhase with design deliverables, ProjectEvidentialContract, FulfillmentEvidenceNeeds, and phase-gate requirements.

Construction funding:
FundingCommitments attached to execution budget lane; release blocked until design phase gate is accepted.

Design review:
FiscalizationAssignment or competent tutored review creates FiscalizationReport / EvaluationRecord.

Evidence:
Photos, measurements, attendance/access records, and affected-party observations enter as ContextualizedEvidenceItems with evidence_context.

Court dimensions:
Formal dimension evidence references an accepted qualification standard, such as a qualified topographer, architect, engineer, inspector, certified lab, competent technical institution, or other protocol-eligible professional using accepted measurement methods and traceable instruments.

Citizen observation:
A neighbor's informal measurement may support contradiction or complaint review, but it does not satisfy the hard dimension KPI unless a reviewer accepts it only for a narrower effect.

Complaint:
Complaint uses Complaint Evidence context and ComplaintReviewPolicy. It does not automatically become fulfillment evidence.

Disbursement:
Disbursement references phase, milestone/gate, reviewed evidence, EvaluationRecord/FiscalizationReport, assurance status, and FinancialOrder.

Governance resolution:
If tutored authority rejects as duplicate, GovernanceResolution records decision, reason, rule, and suggested next path.

Audit:
AuditEvents connect each role action, object transition, rule version, source record, effect, and visibility/privacy treatment.
```

## Open Implementation Questions

1. Whether implementation should use event sourcing, relational tables, document collections, or a hybrid model.
2. Exact enumerations for statuses, effect types, privacy tiers, and procedural burden profiles.
3. Detailed evidence authenticity and quality scoring, including AI-generation risk, metadata integrity, instrument calibration verification, producer credential verification, and fraud detection.
4. Country-specific legal integrations for identity, treasury, permits, registries, courts, and sanctions.
5. Access-control mapping from the responsibility matrix to actual permissions.
6. Data retention, export, redaction, and public snapshot rules.
7. Whether later implementations should add advanced platform-influence analytics, causal exposure-to-funding metrics, ranking-bias dashboards, or per-impression logs without making them Core v0 requirements.
8. Whether later implementations should add privacy-aware participation-equity analytics, demographic participation-gap measurement, accessibility outreach metrics, or authority-facing inclusion dashboards without making perfect participation a Core v0 requirement.
9. Whether later implementations should add beneficial-ownership verification, corporate-registry integration, or relationship-graph analytics against the A014 related-party graph without making them Core v0 requirements.
10. Whether later implementations should add a common-good registry, charter creation and voting, or platform common-good compatibility adjudication beyond the A015 sufficiency test without making them Core v0 requirements.
11. Whether later implementations should add resistance-pattern analytics or cross-country transition comparisons over the A016 incumbent-resistance indicators without making them Core v0 requirements or adding any mechanism that compels institutional transition.
12. Whether later implementations should add per-project actuarial guarantee calibration or automated milestone-design scoring over the A017 disbursement-gaming tests without making them Core v0 requirements, keeping milestone quality on human review backed by designer responsibility and retention.
13. Whether later implementations should add automated collusion detection, network-analysis scoring, or investigative capability over the A018 collusion observability surfaces without making them Core v0 requirements, keeping pattern surfaces on human review, complaint, and verified-discovery paths and prosecution external.
14. Whether later implementations should add mandate-construction, referendum, or formula-adjudication machinery beyond the A019 Allocation Mandate record without making them Core v0 requirements, keeping the platform's role to record and expose external authorization rather than generate it.
15. Whether later implementations should add fiscal enforcement — multi-year appropriation locks, statutory indexation, or enforceable budget floors — beyond the A021 Fiscal Commitment Profile and fiscal-reliability observability without making them Core v0 requirements, keeping the platform's role to record and surface fiscal behavior rather than compel a sovereign to pay.
16. Whether later implementations should add liability adjudication or doctrinal apportionment beyond the A033 Duty-of-Care Anchor and third-party coverage without making them Core v0 requirements, keeping the platform's role to name the answerable legal person before disbursement and provision coverage rather than decide who is at fault or in what proportion.
17. Whether later implementations should add verifier supply creation — training, accreditation subsidies, or market-building — beyond the A022 control-supply density observability and disclosed thin-market handling routes without making them Core v0 requirements, keeping the platform's role to surface scarcity and price weak verification rather than create suppliers.
18. Whether later implementations should define the open-mode amendment mechanics — tiered protocol-rule levels, a non-self-amending amendment rule, default entrenchment, and vote-participation metrics — beyond the A023 open-mode deployment gate without making them Core v0 requirements, keeping open mode barred until the mechanics are resolved and published.
19. Whether later implementations should add preference correction, welfare functions, or portfolio rebalancing toward non-salient goods beyond the A024 salience-bias observability and disclosed default weighting without making them Core v0 requirements, keeping the platform's role to expose the gradient and route defaults rather than correct citizen preferences.
20. Whether later implementations should add participation quotas, engagement targets, cohort-refresh, or sampling beyond the A025 engagement-decay and active-core metrics without making them Core v0 requirements, keeping the platform's role to measure and disclose the participation mix rather than mandate engagement.
21. Whether later implementations should add provider-independent anomaly detection, identity-provider federation, or substitution beyond the A026 declared failure modes and purpose-bound access auditing without making them Core v0 requirements, keeping verified identity as the anti-Sybil baseline and the residual single-point-of-failure risk's mitigation jurisdictional.
7. Performance implications of reconstructing read models from audit/event history.

## Boundary With Phase 3

This schema draft completes the current Phase 2 formalization pass. It does not attack the architecture yet.

The next roadmap step is Phase 3: identify where the architecture breaks, becomes unsafe, becomes unfair, or creates new power concentration.

## Design rule

> The implementable schema should preserve the model's accountability chain: actor in role acts on object under rule/version, producing source records, state transitions, effects, and immutable audit trace.
