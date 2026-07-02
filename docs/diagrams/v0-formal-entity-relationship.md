# Diagram - Formal Entity Relationship Baseline v0

## Purpose

Show the primary entity relationships that should guide Phase 2 formal modeling.

This diagram is a conceptual ERD baseline, not a database schema. It focuses on the relationships needed to preserve accountability: actor, contextual role, idea/project boundary, value promise, metrics, evidence context, fiscalization, funding lanes, complaint handling, scoped pause, closure, reputation, governance, and audit traceability.

Source baseline: `docs/64_FORMAL_ENTITY_INVENTORY_V0.md`.

Related sources: `docs/35_CONSOLIDATED_ENTITY_OBJECT_STATE_MAP.md`, H001-H003, H008, H012-H019, H022-H024, C001-C025, A001, A002, A003, A004, A005, A006.

```mermaid
erDiagram
    ACTOR {
        string actor_id
        string actor_type
        string verification_status
    }

    ROLE_ASSIGNMENT {
        string role_assignment_id
        string role_type
        string scope
        string status
    }

    IDEA {
        string idea_id
        string idea_state
        string visibility_status
        string source_project_ref
    }

    PROJECT {
        string project_id
        string current_state
        string operating_scope
        string continuity_risk_classification
    }

    PROJECT_VERSION {
        string project_version_id
        string version_status
    }

    PROJECT_PHASE {
        string project_phase_id
        string phase_type
        string phase_state
        string continuity_period
    }

    PROJECT_VARIATION_RECORD {
        string variation_record_id
        string variation_type
        string effect_scope
    }

    REFORMULATION_PROPOSAL {
        string reformulation_id
        string reformulation_state
        string affected_commitment
    }

    REFORMULATION_POLICY {
        string reformulation_policy_id
        string review_rule
        string transition_rule
    }

    PLANNING_SCOPE {
        string planning_scope_id
        string source
        string essential_service_status
        string service_lane_classification
        string status
    }

    OPERATING_MODE {
        string operating_mode_id
        string mode
    }

    THRESHOLD_POLICY {
        string threshold_policy_id
        string burden_profile
        string source
    }

    REQUIRED_EVIDENCE_PACKAGE {
        string required_package_id
        string target_scope
        string completeness_status
    }

    REQUIRED_EVIDENCE_NEED {
        string required_need_id
        string required_context
        string requirement_category
    }

    PROJECT_LEGITIMACY_PROFILE {
        string legitimacy_profile_id
        string affected_scope
        string citizen_status
    }

    PRIMARY_RESPONSIBILITY_ANCHOR {
        string anchor_id
        string public_function
    }

    VALUE_THESIS {
        string value_thesis_id
        string status
    }

    VALUE_ANTIVALUE_PROFILE {
        string profile_id
        string status
    }

    VALUE_VERIFICATION_PACKAGE {
        string package_id
        string verification_scope
        string coverage_status
    }

    METRIC {
        string metric_id
        string metric_type
        string target_direction
        string coverage_status
    }

    PROJECT_EVIDENTIAL_CONTRACT {
        string contract_id
        string validation_status
    }

    FULFILLMENT_EVIDENCE_NEED {
        string need_id
        string need_context
        string status
    }

    EVIDENCE_PRODUCER_QUALIFICATION_STANDARD {
        string standard_id
        string qualification_basis
        string method_or_protocol_rule
    }

    CONTEXTUALIZED_EVIDENCE_ITEM {
        string evidence_item_id
        string evidence_context
        string review_status
        string sufficiency_status
    }

    EVIDENCE_QUALITY_REVIEW {
        string review_id
        string qualification_result
        string method_fit_result
        string probative_fitness
    }

    EVIDENCE_CONTEXT {
        string context_id
        string context_type
    }

    MATERIAL_INFORMATION_CLAIM {
        string claim_id
        string claim_status
        string source_link_status
        string material_warning_status
    }

    VERIFIED_DISCOVERY {
        string discovery_id
        string materiality_finding
        string visibility_effect
    }

    EVALUATION_RECORD {
        string evaluation_record_id
        string evaluated_dimension
        string formal_effect
    }

    FISCALIZATION_REQUIREMENT {
        string requirement_id
        string control_depth
    }

    CONTROL_SUBPROJECT {
        string control_subproject_id
        string control_type
        string status
    }

    FISCALIZER_OFFER {
        string fiscalizer_offer_id
        string offer_status
        string proposed_method
    }

    FISCALIZATION_ASSIGNMENT {
        string assignment_id
        string assignment_scope
        string status
    }

    FISCALIZER_ELIGIBILITY_REPUTATION_PROFILE {
        string profile_id
        string eligibility_status
        string warning_status
    }

    FISCALIZATION_REPORT {
        string report_id
        string report_status
        string sufficiency_status
    }

    BUDGET {
        string budget_id
        string budget_status
    }

    BUDGET_LINE {
        string budget_line_id
        string line_purpose
        string funding_lane
        string continuity_purpose
    }

    FUNDING_COMMITMENT {
        string commitment_id
        string funding_lane
        string continuity_label
        string commitment_state
    }

    CIVIC_WALLET {
        string wallet_id
        string allocation_scope
        string assignable_lane
    }

    FINANCIAL_ORDER {
        string financial_order_id
        string order_type
        string status
    }

    CUSTODIAN {
        string custodian_id
        string custodian_type
    }

    DISBURSEMENT_MILESTONE_PLAN {
        string plan_id
        string release_rule
        string retention_rule
    }

    DISBURSEMENT {
        string disbursement_id
        string disbursement_state
        string continuity_period_ref
    }

    FINANCIAL_ASSURANCE_PROFILE {
        string assurance_profile_id
        string assurance_rule
        string continuity_protection_rule
    }

    GUARANTEE_MATERIALIZATION_RECORD {
        string guarantee_record_id
        string confirmation_status
    }

    COMPLAINT {
        string complaint_id
        string complaint_state
    }

    COMPLAINT_REVIEW_POLICY {
        string policy_id
        string activation_rule
    }

    COMPLAINT_REVIEW_QUOTE {
        string quote_id
        string quote_status
    }

    COMPLAINT_ADMISSIBILITY_REFERRAL_RECORD {
        string record_id
        string admissibility_status
    }

    SYSTEMIC_PAUSE_RECORD {
        string pause_record_id
        string affected_scope
        string pause_state
    }

    SUPPORT_SIGNAL {
        string support_signal_id
        string target_type
        string signal_state
    }

    JUSTIFIED_OBJECTION_SIGNAL {
        string objection_signal_id
        string target_type
        string signal_state
    }

    COMMENT {
        string comment_id
        string target_type
        string visibility_mode
    }

    PROJECT_CLOSURE_ACCOUNTABILITY_RECORD {
        string closure_record_id
        string closure_status
        string continuity_result
    }

    RESPONSIBILITY_EVENT {
        string responsibility_event_id
        string event_type
    }

    REPUTATION_INPUT {
        string reputation_input_id
        string source_type
    }

    REPUTATION_UPDATE {
        string reputation_update_id
        string role_affected
    }

    REPUTATION_SUMMARY {
        string reputation_summary_id
        string visible_scope
    }

    PERFORMANCE_HISTORY_SURFACE {
        string performance_surface_id
        string role_scope
    }

    DELEGATION {
        string delegation_id
        string delegation_scope
        string status
    }

    AUTOMATIC_ALLOCATION_PROFILE {
        string profile_id
        string profile_status
    }

    GOVERNANCE_RESOLUTION {
        string resolution_id
        string decision_type
    }

    REVIEW_TIMEOUT_RESOLUTION {
        string timeout_resolution_id
        string timeout_effect
    }

    PROTOCOL_VERSION {
        string protocol_version_id
        string effective_status
    }

    ADMINISTRATIVE_RULE_CHANGE {
        string rule_change_id
        string affected_rule
    }

    SYSTEM_IMPLEMENTATION_CHANGE {
        string implementation_change_id
        string affected_component
    }

    AUDIT_EVENT {
        string audit_event_id
        string event_type
        string object_type
    }

    ACTOR ||--o{ ROLE_ASSIGNMENT : holds
    ROLE_ASSIGNMENT }o--o| PROJECT : may_scope_to_project
    ROLE_ASSIGNMENT }o--o| PROJECT_PHASE : may_scope_to_phase
    ROLE_ASSIGNMENT }o--o| CONTROL_SUBPROJECT : may_scope_to_control
    ROLE_ASSIGNMENT }o--o| COMPLAINT : may_scope_to_complaint
    ROLE_ASSIGNMENT }o--o| PLANNING_SCOPE : may_scope_to_scope
    ROLE_ASSIGNMENT ||--o{ AUDIT_EVENT : records

    ACTOR ||--o{ IDEA : may_create
    IDEA ||--o{ PROJECT : may_generate
    PROJECT ||--o{ IDEA : may_generate_continuity_need
    ACTOR ||--o{ SUPPORT_SIGNAL : creates
    ACTOR ||--o{ JUSTIFIED_OBJECTION_SIGNAL : creates
    ACTOR ||--o{ COMMENT : writes
    IDEA ||--o{ SUPPORT_SIGNAL : may_receive
    IDEA ||--o{ JUSTIFIED_OBJECTION_SIGNAL : may_receive
    IDEA ||--o{ COMMENT : may_receive
    PROJECT ||--o{ SUPPORT_SIGNAL : may_receive
    PROJECT ||--o{ JUSTIFIED_OBJECTION_SIGNAL : may_receive
    PROJECT ||--o{ COMMENT : may_receive
    COMPLAINT ||--o{ SUPPORT_SIGNAL : may_receive_activation_support
    COMPLAINT ||--o{ COMMENT : may_receive

    PLANNING_SCOPE ||--o{ PROJECT : governs
    OPERATING_MODE ||--o{ PLANNING_SCOPE : configures
    THRESHOLD_POLICY ||--o{ PROJECT : constrains
    THRESHOLD_POLICY ||--o{ REQUIRED_EVIDENCE_PACKAGE : may_require
    THRESHOLD_POLICY ||--o{ PROJECT_LEGITIMACY_PROFILE : may_require
    PROTOCOL_VERSION ||--o{ THRESHOLD_POLICY : governs
    PROTOCOL_VERSION ||--o{ REFORMULATION_POLICY : governs
    PROJECT ||--|| PRIMARY_RESPONSIBILITY_ANCHOR : has
    PROJECT ||--o| REQUIRED_EVIDENCE_PACKAGE : may_require
    PROJECT ||--o| PROJECT_LEGITIMACY_PROFILE : may_require
    PROJECT ||--o{ PROJECT_VERSION : versions
    PROJECT ||--o{ PROJECT_PHASE : phases
    PROJECT_PHASE ||--o| REQUIRED_EVIDENCE_PACKAGE : may_require
    PROJECT ||--o{ PROJECT_VARIATION_RECORD : records_variation
    PROJECT_PHASE ||--o{ PROJECT_VARIATION_RECORD : may_record_variation
    PROJECT_VARIATION_RECORD ||--o| REFORMULATION_PROPOSAL : may_require
    REFORMULATION_POLICY ||--o{ REFORMULATION_PROPOSAL : governs
    REFORMULATION_PROPOSAL ||--o{ PROJECT_VERSION : may_create_version

    PROJECT ||--|| VALUE_THESIS : declares
    PROJECT ||--|| VALUE_ANTIVALUE_PROFILE : defines
    VALUE_THESIS ||--o{ VALUE_VERIFICATION_PACKAGE : contains
    VALUE_ANTIVALUE_PROFILE ||--o{ VALUE_VERIFICATION_PACKAGE : constrains
    VALUE_VERIFICATION_PACKAGE ||--o{ METRIC : defines
    VALUE_ANTIVALUE_PROFILE ||--o{ METRIC : sets_ceilings
    METRIC ||--o{ FULFILLMENT_EVIDENCE_NEED : requires_evidence
    METRIC ||--o{ EVALUATION_RECORD : evaluated_by
    VALUE_VERIFICATION_PACKAGE ||--o{ FULFILLMENT_EVIDENCE_NEED : defines
    PROJECT ||--|| PROJECT_EVIDENTIAL_CONTRACT : requires
    PROJECT_EVIDENTIAL_CONTRACT ||--o{ FULFILLMENT_EVIDENCE_NEED : defines
    PROJECT_PHASE ||--o{ FULFILLMENT_EVIDENCE_NEED : may_require
    REQUIRED_EVIDENCE_PACKAGE ||--o{ REQUIRED_EVIDENCE_NEED : contains
    REQUIRED_EVIDENCE_NEED ||--o{ CONTEXTUALIZED_EVIDENCE_ITEM : addressed_by_readiness_evidence
    PROJECT_LEGITIMACY_PROFILE ||--o{ REQUIRED_EVIDENCE_NEED : may_require_consultation_need

    PROJECT ||--o{ MATERIAL_INFORMATION_CLAIM : contains
    MATERIAL_INFORMATION_CLAIM ||--o{ CONTEXTUALIZED_EVIDENCE_ITEM : supported_or_contradicted_by
    MATERIAL_INFORMATION_CLAIM ||--o{ VERIFIED_DISCOVERY : may_be_corrected_by
    VERIFIED_DISCOVERY ||--o{ AUDIT_EVENT : records
    FULFILLMENT_EVIDENCE_NEED ||--o{ CONTEXTUALIZED_EVIDENCE_ITEM : addressed_by
    PROJECT_LEGITIMACY_PROFILE ||--o{ CONTEXTUALIZED_EVIDENCE_ITEM : receives_mapping_or_consultation_evidence
    PROJECT_LEGITIMACY_PROFILE ||--o{ JUSTIFIED_OBJECTION_SIGNAL : tracks_unresolved
    PROJECT_LEGITIMACY_PROFILE ||--o{ COMPLAINT : may_route_to
    EVIDENCE_CONTEXT ||--o{ CONTEXTUALIZED_EVIDENCE_ITEM : classifies
    FULFILLMENT_EVIDENCE_NEED }o--o| EVIDENCE_PRODUCER_QUALIFICATION_STANDARD : requires_where_needed
    CONTEXTUALIZED_EVIDENCE_ITEM ||--o{ EVIDENCE_QUALITY_REVIEW : reviewed_by
    EVIDENCE_QUALITY_REVIEW }o--o| EVIDENCE_PRODUCER_QUALIFICATION_STANDARD : checks_against
    EVIDENCE_QUALITY_REVIEW ||--o{ EVALUATION_RECORD : informs
    CONTEXTUALIZED_EVIDENCE_ITEM ||--o{ EVALUATION_RECORD : used_in
    EVALUATION_RECORD ||--o{ RESPONSIBILITY_EVENT : may_create

    PROJECT ||--|| FISCALIZATION_REQUIREMENT : has
    FISCALIZATION_REQUIREMENT ||--o{ CONTROL_SUBPROJECT : may_require
    PROJECT ||--o{ CONTROL_SUBPROJECT : has_control_work
    CONTROL_SUBPROJECT ||--o{ FISCALIZER_OFFER : receives_offer
    FISCALIZATION_REQUIREMENT ||--o{ FISCALIZER_OFFER : invites_offer
    FISCALIZER_OFFER ||--o| FISCALIZATION_ASSIGNMENT : may_be_accepted_as
    FISCALIZER_OFFER ||--o| FISCALIZER_ELIGIBILITY_REPUTATION_PROFILE : informs
    CONTROL_SUBPROJECT ||--o{ FISCALIZATION_ASSIGNMENT : assigns
    ROLE_ASSIGNMENT ||--o{ FISCALIZATION_ASSIGNMENT : performs
    ROLE_ASSIGNMENT ||--o{ FISCALIZER_ELIGIBILITY_REPUTATION_PROFILE : reviewed_for_assignment
    FISCALIZER_ELIGIBILITY_REPUTATION_PROFILE ||--o| FISCALIZATION_ASSIGNMENT : supports_selection
    FISCALIZATION_ASSIGNMENT ||--o{ FISCALIZATION_REPORT : produces
    FISCALIZATION_REPORT ||--o{ EVALUATION_RECORD : supports
    FISCALIZATION_REPORT ||--o{ REPUTATION_INPUT : may_create_for_fiscalizer
    CONTEXTUALIZED_EVIDENCE_ITEM ||--o{ FISCALIZATION_REPORT : considered_by

    PROJECT ||--|| BUDGET : has
    BUDGET ||--o{ BUDGET_LINE : contains
    CIVIC_WALLET ||--o{ FUNDING_COMMITMENT : commits
    FUNDING_COMMITMENT }o--o| PROJECT : may_fund_project
    FUNDING_COMMITMENT }o--o| CONTROL_SUBPROJECT : may_fund_control
    FUNDING_COMMITMENT }o--o| COMPLAINT_REVIEW_QUOTE : may_fund_review
    FUNDING_COMMITMENT }o--o| BUDGET_LINE : may_fund_lane
    PROJECT ||--o{ DISBURSEMENT_MILESTONE_PLAN : plans_release
    PROJECT_PHASE ||--o{ DISBURSEMENT_MILESTONE_PLAN : gates_release
    DISBURSEMENT_MILESTONE_PLAN ||--o{ DISBURSEMENT : gates
    PROJECT ||--o{ DISBURSEMENT : receives
    PROJECT_PHASE ||--o{ DISBURSEMENT : may_gate
    EVALUATION_RECORD ||--o{ DISBURSEMENT : may_authorize_or_block
    DISBURSEMENT ||--o{ FINANCIAL_ORDER : generates
    FINANCIAL_ORDER }o--|| CUSTODIAN : executed_by
    PROJECT ||--|| FINANCIAL_ASSURANCE_PROFILE : may_require
    FINANCIAL_ASSURANCE_PROFILE ||--o{ GUARANTEE_MATERIALIZATION_RECORD : confirmed_by
    GUARANTEE_MATERIALIZATION_RECORD ||--o{ DISBURSEMENT : gates_release

    PROJECT ||--o{ COMPLAINT : may_receive
    ROLE_ASSIGNMENT ||--o{ COMPLAINT : files
    COMPLAINT_REVIEW_POLICY ||--o{ COMPLAINT : governs
    COMPLAINT ||--o{ COMPLAINT_REVIEW_QUOTE : priced_by
    COMPLAINT ||--o{ COMPLAINT_ADMISSIBILITY_REFERRAL_RECORD : reviewed_as
    COMPLAINT ||--o{ CONTEXTUALIZED_EVIDENCE_ITEM : includes_complaint_evidence
    COMPLAINT_ADMISSIBILITY_REFERRAL_RECORD ||--o{ SYSTEMIC_PAUSE_RECORD : may_trigger
    SYSTEMIC_PAUSE_RECORD }o--o| PROJECT : may_affect_project
    SYSTEMIC_PAUSE_RECORD }o--o| PROJECT_PHASE : may_affect_phase
    SYSTEMIC_PAUSE_RECORD }o--o| DISBURSEMENT : may_block_disbursement
    SYSTEMIC_PAUSE_RECORD }o--o| CONTEXTUALIZED_EVIDENCE_ITEM : may_restrict_evidence_use
    SYSTEMIC_PAUSE_RECORD }o--o| ROLE_ASSIGNMENT : may_restrict_actor_action

    PROJECT ||--o{ PROJECT_CLOSURE_ACCOUNTABILITY_RECORD : closes_with
    PROJECT_CLOSURE_ACCOUNTABILITY_RECORD ||--o{ IDEA : may_feed_continuity_need
    PROJECT_CLOSURE_ACCOUNTABILITY_RECORD ||--o{ EVALUATION_RECORD : includes
    PROJECT_CLOSURE_ACCOUNTABILITY_RECORD ||--o{ FISCALIZATION_REPORT : includes
    PROJECT_CLOSURE_ACCOUNTABILITY_RECORD ||--o{ RESPONSIBILITY_EVENT : may_create
    RESPONSIBILITY_EVENT ||--o{ REPUTATION_INPUT : reviewed_as
    REPUTATION_INPUT ||--o{ REPUTATION_UPDATE : applies
    REPUTATION_UPDATE ||--o{ REPUTATION_SUMMARY : summarized_in
    PROJECT_CLOSURE_ACCOUNTABILITY_RECORD ||--o{ PERFORMANCE_HISTORY_SURFACE : feeds
    REPUTATION_SUMMARY ||--o{ PERFORMANCE_HISTORY_SURFACE : informs

    ACTOR ||--o{ DELEGATION : grants_or_accepts
    DELEGATION ||--o{ FUNDING_COMMITMENT : may_authorize
    ACTOR ||--o{ AUTOMATIC_ALLOCATION_PROFILE : owns
    AUTOMATIC_ALLOCATION_PROFILE ||--o{ FUNDING_COMMITMENT : may_generate

    OPERATING_MODE ||--o{ GOVERNANCE_RESOLUTION : produces
    OPERATING_MODE ||--o{ REVIEW_TIMEOUT_RESOLUTION : produces
    GOVERNANCE_RESOLUTION ||--o{ PLANNING_SCOPE : may_interpret
    GOVERNANCE_RESOLUTION ||--o{ PLANNING_SCOPE : may_revise_essential_target
    ADMINISTRATIVE_RULE_CHANGE ||--o{ PLANNING_SCOPE : may_revise_essential_target
    REVIEW_TIMEOUT_RESOLUTION ||--o{ PROJECT : may_affect
    ADMINISTRATIVE_RULE_CHANGE ||--o{ PROTOCOL_VERSION : updates
    SYSTEM_IMPLEMENTATION_CHANGE ||--o{ PROTOCOL_VERSION : implements
    PROTOCOL_VERSION ||--o{ AUDIT_EVENT : referenced_by

    IDEA ||--o{ AUDIT_EVENT : records
    PROJECT ||--o{ AUDIT_EVENT : records
    MATERIAL_INFORMATION_CLAIM ||--o{ AUDIT_EVENT : records
    PROJECT_PHASE ||--o{ AUDIT_EVENT : records
    PROJECT_VARIATION_RECORD ||--o{ AUDIT_EVENT : records
    REFORMULATION_PROPOSAL ||--o{ AUDIT_EVENT : records
    CONTEXTUALIZED_EVIDENCE_ITEM ||--o{ AUDIT_EVENT : records
    EVIDENCE_PRODUCER_QUALIFICATION_STANDARD ||--o{ AUDIT_EVENT : records
    EVIDENCE_QUALITY_REVIEW ||--o{ AUDIT_EVENT : records
    EVALUATION_RECORD ||--o{ AUDIT_EVENT : records
    FISCALIZER_ELIGIBILITY_REPUTATION_PROFILE ||--o{ AUDIT_EVENT : records
    FISCALIZATION_ASSIGNMENT ||--o{ AUDIT_EVENT : records
    FISCALIZATION_REPORT ||--o{ AUDIT_EVENT : records
    COMPLAINT ||--o{ AUDIT_EVENT : records
    COMPLAINT_ADMISSIBILITY_REFERRAL_RECORD ||--o{ AUDIT_EVENT : records
    SYSTEMIC_PAUSE_RECORD ||--o{ AUDIT_EVENT : records
    FUNDING_COMMITMENT ||--o{ AUDIT_EVENT : records
    DISBURSEMENT ||--o{ AUDIT_EVENT : records
    PROJECT_CLOSURE_ACCOUNTABILITY_RECORD ||--o{ AUDIT_EVENT : records
    RESPONSIBILITY_EVENT ||--o{ AUDIT_EVENT : records
    REPUTATION_UPDATE ||--o{ AUDIT_EVENT : records
    GOVERNANCE_RESOLUTION ||--o{ AUDIT_EVENT : records
```

## Modeling notes

- `RoleAssignment` is the ERD bridge between actor identity, contextual role, and operational scope. It may be scoped to a project, phase, control subproject, complaint, planning scope, or another protocol-defined object. It must not imply that every role acts over the whole project.
- `Idea` is separate from `Project`. Ideas may receive support, objections, comments, and followers, but they are not financeable or executable until converted into a valid project.
- `SupportSignal`, `JustifiedObjectionSignal`, and `Comment` are civic signals. They may inform thresholds, deliberation, complaint activation, or review context where policy permits, but they are not funding, complaint evidence, fulfillment evidence, evaluation, or reputation input by themselves.
- `RequiredEvidencePackage` and `RequiredEvidenceNeed` represent mandatory pre-effect evidence, usually with Readiness Evidence context. They are separate from fulfillment evidence needs.
- `ProjectLegitimacyProfile` is a threshold-driven profile, not a vote, veto, popularity score, or legal-authority object. It exposes affected-party mapping, consultation Readiness Evidence, unresolved legitimacy objections, and review routes where funding alone would otherwise be mistaken for approval.
- `MaterialInformationClaim` also covers material approval labels, conditions, omissions, source categories, and unresolved warnings. Existing external approval systems may remain external, but their material outputs should be source-linked where they affect citizen decisions.
- `FiscalizerEligibilityReputationProfile` is contextual to a fiscalization assignment. It explains eligibility criteria, comparable-project reputation, workload, repeat relationships, dependency concentration, warnings, and safeguards; it is not a generic CV, universal score, or automatic selector.
- `Metric` connects value floors and antivalue ceilings to fulfillment evidence needs and evaluation records. A004 requires a coverage status so a narrow metric cannot stand in for unverified value dimensions.
- A005 is represented as fields and state on `PlanningScope`, not as a new ordinary project role. It requires protected floor, distributed service lane, planning-continuity target, funding-lane treatment, and underfunding visibility where a scope affects essential guarantees or continuity.
- A006 is represented as fields and relationships on `Project`, `ProjectPhase`, `BudgetLine`, `FundingCommitment`, `Disbursement`, `FinancialAssuranceProfile`, `ProjectClosureAccountabilityRecord`, and `Idea`. It requires continuity classification, funded period, renewal trigger, continuity-need Idea path, wind-down treatment, and no automatic incumbent renewal where a project has ongoing obligations.
- `FundingCommitment` is lane-specific. It may fund project execution, control work, complaint review, or a budget line, but it does not prove legitimacy, execution readiness, disbursement approval, or fulfillment.
- `SystemicPauseRecord` is scoped. It may affect a project, phase, disbursement, evidence use, or actor action inside the platform, but it is not automatically a material/legal suspension of real-world work.
- `EvidenceProducerQualificationStandard` declares the qualification, method, instrument/tool, metadata, and report basis needed where a fulfillment/control evidence need supports a hard KPI or formal effect.
- `EvidenceQualityReview` records whether a submitted contextualized evidence item fits its declared context, producer qualification standard, method/protocol, metadata/provenance, corroboration, and probative fitness. Detailed scoring and country-specific legal admissibility remain implementation details.
- `ContextualizedEvidenceItem` is the technical evidence record. Formal effects depend on `EvidenceContext`, producer qualification and method fit where required, review status, corroboration, and an effect-specific `EvaluationRecord`.
- `PerformanceHistorySurface`, `ReputationSummary`, and `AssistedDeliberationContext` are derived read models. This ERD shows `PerformanceHistorySurface` only where reviewed records feed it.
- Financial custody is external infrastructure. `Custodian` executes valid `FinancialOrder` records; it does not decide civic value, project priority, or fulfillment.
- Legal consequences remain outside the platform unless a country implementation grants legal effect. The ERD records platform effects and references external authority effects where applicable.

## Macul example trace

```text
Idea: build multi-courts in Macul
-> Project: Design and Construction of Multi-Courts in Macul
-> Planning Scope: sports scope eligible for civic allocation
-> A005 check: older-adult care continuity, disability service access, and emergency capacity remain protected planning targets outside the sports popularity cycle
-> A006 check: multi-court maintenance and access management are either funded for a stated period or labeled maintenance not funded; any renewal need becomes an Idea before interruption
-> Project Phases: Design, then Construction
-> Metrics: court dimensions, accessibility, bathrooms, public access, noise ceilings
-> A004 coverage check: dimensions, safety, access, bathrooms/accessibility, public use, and declared noise ceiling each need evidence coverage
-> Project Evidential Contract and Fulfillment Evidence Needs
-> Evidence Producer Qualification Standards for hard KPI evidence
-> Design-phase fiscalization report / evaluation record
-> Execution funding remains committed or reserved until design gate acceptance
-> Complaint about deficient design may trigger a scoped Systemic Pause Record
-> Pause may block construction-phase disbursement without automatically cancelling the whole project
-> Closure, responsibility events, and role-specific reputation depend on reviewed records
```

## Rule

> The first ERD is a primary relationship baseline. It should expose missing accountability relationships before state diagrams are drafted, but it should not become a full database schema or include every derived citizen-facing surface.
