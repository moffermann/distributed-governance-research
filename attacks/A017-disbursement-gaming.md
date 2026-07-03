# A017 - Disbursement Gaming

## Status

Reviewed in paired Phase 3 review. Improvements integrated in [[83_DISBURSEMENT_GAMING_TESTS_AND_A017_RESOLUTION|docs/83_DISBURSEMENT_GAMING_TESTS_AND_A017_RESOLUTION.md]] and propagated into the core corpus.

## Description

The system releases funds through milestones, evidence, review, blockers, assurance, and financial orders. This attack asks whether actors can design milestones, evidence, guarantees, or phase gates to get money released before real value is delivered.

## Location in current project

- [[03_ROADMAP|docs/03_ROADMAP.md]] Phase 3 priority objection: disbursement gaming.
- [[31_PROJECT_DISBURSEMENT_FLOW|docs/31_PROJECT_DISBURSEMENT_FLOW.md]].
- [[54_DISBURSEMENT_MILESTONE_AI_VALIDATION_AND_C016_RESOLUTION|docs/54_DISBURSEMENT_MILESTONE_AI_VALIDATION_AND_C016_RESOLUTION.md]].
- [[H036-milestone-based-disbursement-and-guarantees|knowledge/hypotheses/H036-milestone-based-disbursement-and-guarantees.md]].
- [[H011-financial-assurance-and-revocability|knowledge/hypotheses/H011-financial-assurance-and-revocability.md]].
- [[v0-funding-commitment-disbursement-state|docs/diagrams/v0-funding-commitment-disbursement-state.md]].

## Problem

Milestone-based disbursement reduces uncontrolled money movement, but it also creates targets to game. Actors may front-load payment, define weak evidence, use ambiguous milestones, split phases strategically, or manipulate partial-release rules.

Example:

```text
The Macul project requests 60 percent release after "site preparation and materials purchase."
The milestone is easy to document but does not prove court usability or public-value delivery.
```

## Recommended resolution path

- Require disbursement milestones to link to phase, budget line, value relevance, evidence need, review basis, retention, and blocker check.
- Validate release amounts against value risk and recoverability.
- Restrict advance payments and require guarantee materialization where applicable.
- Keep retained funds and unused funds visible.
- Treat weak milestone design as modeler/designer responsibility when it causes avoidable release risk.

## Theoretical base and citations

- Bengt Holmstrom, "Moral Hazard and Observability" (1979): payment under imperfect observation creates incentive problems.
- Michael Jensen and William Meckling, "Theory of the Firm" (1976): agents can exploit control gaps.
- Charles Goodhart, "Problems of Monetary Management" (1975): payment milestones can become targets that distort behavior.
- Michael Power, `The Audit Society` (1997): auditability can become formal compliance if substantive risk is missed.
- Aaron Wildavsky, `The Politics of the Budgetary Process` (1964): budget processes create strategic behavior around commitments and releases.

## Social reasons

Disbursement gaming turns citizen trust into unrecoverable payment. It is especially harmful when projects serve vulnerable beneficiaries or involve high sunk costs.

## Conflicts of interest

- Executors prefer early release.
- Designers may define milestones that favor affiliated executors.
- Fiscalizers may accept weak evidence to avoid conflict.
- Custodians may execute valid orders without knowing civic value.

## Inconsistencies to test

- AI milestone validation is required, but AI is not a formal authority.
- Funding can be reserved before design gates pass, but release must be blocked until gates are accepted.
- Guarantee percentage is global in v0, but project risk varies.

## Stress scenario

Funds are released for materials that are later found unsuitable. The executor argues the milestone was fulfilled because purchase receipts exist.

## Review checklist

- Is every release tied to value-relevant evidence?
- Are advance payments protected by guarantee, retention, or recoverability?
- Can weak milestone plans block funding before publication?
- Are phase gates and release blockers enforced?
- Does disbursement failure affect designer, executor, fiscalizer, or reviewer reputation by role?

## Resolution output

The Phase 3 resolution defined disbursement-gaming tests for milestone design, partial release, advance payment, and phase-gate release.
