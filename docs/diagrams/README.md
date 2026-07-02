# Diagram Sources

This folder contains the canonical Mermaid sources for Distributed Governance Research diagrams.

Generated images may be exported for papers, slides, or visual review, but the Markdown Mermaid files remain the editable source of truth.

## Current v0 diagram set

- `v0-citizen-navigation-layers.md`
- `v0-project-creation-publication.md`
- `v0-project-lifecycle-state.md`
- `v0-open-project-parallel-closure.md`
- `v0-funding-disbursement.md`
- `v0-evidence-fiscalization.md`
- `v0-complaint-review.md`
- `v0-delegation-automatic-allocation.md`
- `v0-reformulation-pause-revocation.md`
- `v0-tutored-mode-governance-resolution.md`
- `v0-audit-trail-pattern.md`
- `v0-formal-entity-relationship.md`
- `v0-project-object-state-with-phase-substates.md`
- `v0-contextualized-evidence-item-state.md`
- `v0-complaint-evidence-and-review-state.md`
- `v0-funding-commitment-disbursement-state.md`
- `v0-project-evidential-contract-state.md`
- `v0-control-subproject-fiscalization-assignment-state.md`
- `v0-delegation-state.md`
- `v0-operating-mode-transition-state.md`
- `v0-governance-resolution-sequence.md`
- `v0-audit-event-schema.md`

The formal ERD has completed its first relationship audit. The Project object state diagram with phase substates now separates parent `Project` states from operational `ProjectPhase` substates.
The Contextualized Evidence Item state diagram now separates evidence context, review status, sufficiency, report linkage, formal evaluation use, and no-effect archival.
The Complaint Evidence and Review state diagram now separates filing, quote, support, funding, admissibility, scoped pause, referral, external suspension, and final resolution.
The Funding Commitment and Disbursement state diagram now separates commitment, reservation, pause, blocker, retention, release approval, financial order, custodian execution, return, reassignment, recovery, and guarantee states.
The Project Evidential Contract state diagram now separates contract baseline, A004 evidence coverage, fulfillment evidence needs, evidence producer offers, contract-match priority, A013 qualification/quality/sufficiency review, and formal effect routing.
The Control Subproject and Fiscalization Assignment state diagram now separates control requirements, offer selection, package funding, fiscalizer and evidence mission assignment, reports, secondary audit, replacement, formal effects, and reputation review.
The Delegation state diagram now separates base rules, request/acceptance, active scope, represented weight, cap visibility, reports, revocation, resignation, expiry, and fallback activation.
The Operating Mode transition state diagram now separates mode changes, tutored review, timeout policies, publication effects, suspension effects, and external authority boundaries.
The Governance Resolution sequence diagram now separates authority decision, required public fields, timeout records, citizen audit actions, configured clarification or correction paths, audit events, and observability effects.
The Audit Event schema diagram now separates actor/role context, object reference, transition, source record, rule/version, effect, visibility/privacy, append-only correction, Layer 5 access, and observability projection.

## Format rule

Use Mermaid inside Markdown. Keep diagrams readable in Git diffs. Add generated image files only as secondary artifacts when there is a clear presentation or publication need.

## Generated SVG outputs

Generated SVG files live in `docs/diagrams/generated/`.

They are produced with the project-local Mermaid CLI dependency:

```powershell
npm install
npx mmdc --version
```

To regenerate all SVG outputs from the Markdown sources:

```powershell
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
