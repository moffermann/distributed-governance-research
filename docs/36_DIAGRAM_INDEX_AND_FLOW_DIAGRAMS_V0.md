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

Conceptual planning diagram:

- `docs/diagrams/distributed-planning-architecture-v1.md`

Generated SVG outputs:

- `docs/diagrams/generated/`

## Resolution coverage

The diagram set now reflects these accepted C001-C025 corrections:

- C001: `Idea` is separate from `Project`; ideas are not financeable.
- H016/C002/C013: fiscalization is distributed in available actors and fulfillment/control evidence sources, but responsible control is protocol-selected, conflict-checked, risk-adjusted, capped, and closed in parallel with execution funding.
- C003/C015: executor material is self-report unless corroborated; contextualized evidence publication is privacy-assisted.
- C004: complaints are formal scoped review objects, not unstructured comments.
- C005/C006: funding is commitment; treasury/custody executes valid orders without governing project value.
- C007/C020: public institutions are external authorities; material tutored decisions become Governance Resolutions or Review Timeout Resolutions.
- C008/C016: AI assists validation; protocol rules and responsible actors remain accountable.
- C009: citizen layers translate complexity progressively.
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

## Diagram refinement backlog

The next diagram refinements should be created as separate Mermaid sources before generated images:

```text
Entity relationship diagram
Project object state diagram with all substates
Funding commitment state diagram
Complaint state diagram
Contextualized evidence item state diagram
Control subproject state diagram
Delegation state diagram
Operating mode transition diagram
Governance resolution sequence diagram
Audit event schema diagram
```

## Design rule

> Diagrams are not decorative. They are tools for detecting missing states, hidden authority, uncontrolled money movement, and weak accountability.
