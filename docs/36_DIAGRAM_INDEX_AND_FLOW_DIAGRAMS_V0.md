# Diagram Index and Flow Diagrams v0

## Purpose

This document is the master index for the Distributed Governance System v0 diagrams.

The diagram source of truth is Markdown plus Mermaid. Raster or SVG images may be generated later for presentations, papers, or review sessions, but generated images are secondary outputs and should not replace the editable Mermaid source.

## Status

Accepted as Diagram Index and Flow Diagrams v0. Updated after propagation of C001-C025.

## Source format rule

```text
Canonical source: Markdown file with Mermaid diagram
Generated outputs: SVG under docs/diagrams/generated/, plus PNG, PDF, or slide images when needed
```

Reasons:

- text diffs remain reviewable in Git;
- diagrams are editable in Obsidian, GitHub, and ordinary editors;
- each diagram can link to the resolutions it implements;
- images can be regenerated without losing traceability.

## Generated output rule

Generated SVG files are committed for visual inspection, but they are not the source of truth. When a Mermaid source changes, regenerate the SVG outputs with the project-local Mermaid CLI dependency:

```powershell
npm install
npx mmdc --version
if (Test-Path docs\diagrams\generated) { Remove-Item -LiteralPath docs\diagrams\generated -Recurse -Force }
New-Item -ItemType Directory -Force docs\diagrams\generated | Out-Null
Get-ChildItem docs\diagrams\*.md |
  Where-Object { $_.Name -ne 'README.md' } |
  Sort-Object Name |
  ForEach-Object {
    $base = [System.IO.Path]::GetFileNameWithoutExtension($_.Name)
    npx mmdc -i $_.FullName -o "docs\diagrams\generated\$base.svg"
  }
```

Mermaid CLI renders Markdown inputs with a numeric suffix such as `-1.svg`, because a Markdown file may contain more than one Mermaid chart.

## Diagram principle

> Every diagram should show which object changes state, which actor or rule triggers the change, and where auditability is preserved.

The diagrams should remain simple enough to reason about but precise enough to expose missing states, weak transitions, hidden authority, uncontrolled money movement, and responsibility gaps.

## Diagram source set v0

Primary Mermaid sources:

1. `docs/diagrams/v0-citizen-navigation-layers.md`
2. `docs/diagrams/v0-project-creation-publication.md`
3. `docs/diagrams/v0-project-lifecycle-state.md`
4. `docs/diagrams/v0-open-project-parallel-closure.md`
5. `docs/diagrams/v0-funding-disbursement.md`
6. `docs/diagrams/v0-evidence-fiscalization.md`
7. `docs/diagrams/v0-complaint-review.md`
8. `docs/diagrams/v0-delegation-automatic-allocation.md`
9. `docs/diagrams/v0-reformulation-pause-revocation.md`
10. `docs/diagrams/v0-tutored-mode-governance-resolution.md`
11. `docs/diagrams/v0-audit-trail-pattern.md`
12. `docs/diagrams/v0-formal-entity-relationship.md`
13. `docs/diagrams/v0-project-object-state-with-phase-substates.md`
14. `docs/diagrams/v0-contextualized-evidence-item-state.md`
15. `docs/diagrams/v0-complaint-evidence-and-review-state.md`
16. `docs/diagrams/v0-funding-commitment-disbursement-state.md`
17. `docs/diagrams/v0-project-evidential-contract-state.md`
18. `docs/diagrams/v0-control-subproject-fiscalization-assignment-state.md`
19. `docs/diagrams/v0-delegation-state.md`
20. `docs/diagrams/v0-operating-mode-transition-state.md`
21. `docs/diagrams/v0-governance-resolution-sequence.md`
22. `docs/diagrams/v0-audit-event-schema.md`

Conceptual planning diagram:

- `docs/diagrams/distributed-planning-architecture-v1.md`

Generated SVG outputs:

- `docs/diagrams/generated/`

## Resolution coverage

The diagram set now reflects these accepted C001-C025 corrections:

- H001: diagrams should separate functional layers rather than treating a sector, institution, or public/private label as one block.
- H002: funding and allocation diagrams should show bounded assignable public-purpose resources, not unconstrained public budget allocation.
- H003: trust diagrams should show incentives, accountable claims, evidence context, contradiction, review, consequences, and auditability rather than assuming distributed actors are trustworthy by default.
- C001: `Idea` is separate from `Project`; ideas are not financeable.
- H016/C002/C013: fiscalization is distributed in available actors and fulfillment/control evidence sources, but responsible control is protocol-selected, conflict-checked, risk-adjusted, capped, and closed in parallel with execution funding.
- C003/C015: executor material is self-report unless corroborated; contextualized evidence publication is privacy-assisted.
- C004: complaints are formal scoped review objects, not unstructured comments.
- C005/C006: funding is commitment; treasury/custody executes valid orders without governing project value.
- C007/C020: public authorities are external in scopes they control; state-owned operators require control/privilege checks; material tutored decisions become Governance Resolutions or Review Timeout Resolutions.
- C008/C016: AI assists validation; protocol rules and responsible actors remain accountable.
- H008: the full accountability loop runs from accepted promise through fulfillment/control evidence, formal evaluation, Project Closure Accountability Record, financial closure, and role-specific reputation.
- C009: citizen layers translate complexity progressively.
- H009: financeable projects must align with an active Planning Scope, while full distributed roadmap construction through votable planning areas remains an open extension question.
- H018: project value theses connect to value verification packages, fulfillment evidence needs, and evidential contracts before publication as financeable projects.
- H019: design, execution, and fiscalization remain distinct responsibilities; Project Phases may gate later-phase funding release in integrated design-and-execution projects.
- H020/H027: proportional burden and threshold policies define required documents, admissibility review, and visible missing conditions without turning AI into the binding authority.
- H021/C010/C017/C018: project variation classification, value verification, reformulation, and reputation depend on verified value fulfillment, not labels alone.
- C011/C023: delegation has priority over automatic allocation and concentration must be visible.
- C014/C024/H029: comments use verified identity by default, with justified protected identity as a per-comment exception; the broader protected-identity mechanism may also apply to complaints, contextualized evidence, testimony, beneficiary confirmations, or other sensitive formal actions.
- H017/C019: protocol evolution uses visible rule-change objects for administrative rule changes, system implementation changes, and non-tutored protocol change proposals.
- C021: administrative observability baseline is core; full universal panel remains extension.
- C022: projects declare common-good impacts where relevant.
- C025: discovery is explainable, user-configurable, non-commercial, and auditable.
- A001: funding, support, delegation, and discovery visibility do not establish legitimacy; high affected-party projects use a threshold-driven Project Legitimacy Profile with Required Evidence Package needs, Readiness Evidence for affected-party mapping and consultation, asynchronous nearby-project participation, and review routes where applicable.
- A002: material visibility must be represented where citizen-facing labels, approval status, AI summaries, discovery ordering, urgency, recommendation, or funding progress could hide material conditions. Approval labels should preserve source role or authority, criterion source, scope, date or version, and unresolved conditions where material.

## Evidence diagram rule

Future formal diagrams should not use a bare `Evidence` node as if all evidence had the same meaning. They may use `Contextualized Evidence Item` as the technical object, but process diagrams should identify the relevant context: Complaint Evidence, Fulfillment Evidence, Control Evidence, Contradiction Evidence, Administrative Observability Data, or Research Evidence. Complaint review, fulfillment evaluation, fiscalization, disbursement, closure, reputation, and legal referral should be shown as distinct effects.

## Diagram refinement backlog

The current formal diagram refinement backlog is complete for this pass.

Future diagram refinements should be opened from newly discovered responsibility-matrix, schema, implementation, or review gaps.

## Design rule

> Diagrams are not decorative. They are tools for detecting missing states, hidden authority, uncontrolled money movement, and weak accountability.

Phase 2 diagrams should use `docs/64_FORMAL_ENTITY_INVENTORY_V0.md` as the formal entity baseline and `docs/35_CONSOLIDATED_ENTITY_OBJECT_STATE_MAP.md` as the detailed narrative source.

The first Phase 2 ERD now lives at `docs/diagrams/v0-formal-entity-relationship.md`. It is a primary relationship baseline, not a database schema.

The first ERD relationship audit has been completed. The ERD now preserves the `Idea` to `Project` boundary, uses scoped role assignments, connects metrics to value and evidence requirements, distinguishes funding targets by lane, includes fiscalizer offers and reformulation objects, treats systemic pause as a scoped platform effect rather than an automatic whole-project or material/legal suspension, and represents Project Legitimacy Profile as a threshold-driven profile rather than a vote, veto, or proof created by funding.

The Project object state diagram with phase substates now lives at `docs/diagrams/v0-project-object-state-with-phase-substates.md`. It separates parent `Project` states from operational `ProjectPhase` substates and preserves the rule that phase blockers escalate to project-level state only when a formal scoped record declares a broader affected scope.

The Contextualized Evidence Item state diagram now lives at `docs/diagrams/v0-contextualized-evidence-item-state.md`. It separates evidence intake, context classification, privacy/safety review, sufficiency review, corroboration, contradiction, report linkage, evaluation use, verified discovery, and archived no-effect states. It preserves the rule that contextualized evidence does not directly create complaint, disbursement, closure, responsibility, reputation, or legal effects.

The Complaint Evidence and Review state diagram now lives at `docs/diagrams/v0-complaint-evidence-and-review-state.md`. It separates submitted complaints, minimum-structure review, quote, support window, review funding, admissibility, non-blocking admission, scoped systemic pause, competent-authority referral, external suspension, final resolution, and role-specific consequence paths.

The Funding Commitment and Disbursement state diagram now lives at `docs/diagrams/v0-funding-commitment-disbursement-state.md`. It separates committed, reserved, paused, blocked, retained, approved-for-release, financial-order-issued, custodian-execution-blocked, released, returned, reassigned, recovered, closure, assurance, and guarantee states.

The Project Evidential Contract state diagram now lives at `docs/diagrams/v0-project-evidential-contract-state.md`. It separates contract baseline states, fulfillment evidence need states, contract-matched producer offers, lower-priority out-of-contract offers, quality/sufficiency review, and effect routing into fiscalization, evaluation, disbursement, closure, responsibility, reputation, correction, or reformulation.

The Control Subproject and Fiscalization Assignment state diagram now lives at `docs/diagrams/v0-control-subproject-fiscalization-assignment-state.md`. It separates control requirements, offer windows, eligibility and conflict review, package funding, assignment acceptance, active control work, evidence collection, fiscalization reports, secondary audit, replacement, formal-path effects, and role-specific reputation review.

The Delegation state diagram now lives at `docs/diagrams/v0-delegation-state.md`. It separates base-rule selection, delegation scope, concentration disclosure, request, acceptance, active delegated authority, delegated action records, represented weight, configured cap effects, reports, revocation, resignation, expiry, and fallback activation.

The Operating Mode transition state diagram now lives at `docs/diagrams/v0-operating-mode-transition-state.md`. It separates Closed, Tutored, Semi-open, Open, Suspended, mode-change review, transition rules, tutored review windows, Governance Resolutions, Review Timeout Resolutions, timeout policy effects, and platform versus external-authority boundaries.

The Governance Resolution sequence diagram now lives at `docs/diagrams/v0-governance-resolution-sequence.md`. It separates authority decision, required public fields, timeout creation, citizen audit actions, configured clarification/correction/appeal paths, audit events, and aggregate observability effects.

The Audit Event schema diagram now lives at `docs/diagrams/v0-audit-event-schema.md`. It separates actor/role context, object reference, state or material-value transition, rule/version context, source records, effects, visibility/privacy treatment, append-only lifecycle, correction events, Layer 5 access, and observability projections.
