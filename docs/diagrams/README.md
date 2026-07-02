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

The formal ERD has completed its first relationship audit. The Project object state diagram with phase substates now separates parent `Project` states from operational `ProjectPhase` substates.

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
