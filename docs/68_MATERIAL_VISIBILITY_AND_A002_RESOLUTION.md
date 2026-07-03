# Material Visibility and A002 Resolution v0

## Status

Accepted Phase 3 resolution.

Paired review:

- Attack: [[A002-information-capture-and-visibility-control|attacks/A002-information-capture-and-visibility-control.md]]
- Defense: [[D002-information-capture-and-visibility-control|defenses/D002-information-capture-and-visibility-control.md]]

## Resolution decision

A002 is founded and does not distort the project when it is read as a warning against hidden information control. The project rejects the distorted conclusion that citizens should receive no summaries, discovery assistance, or AI support. The accepted resolution is a minimum material-visibility rule.

## Current-practice comparison

This resolution should not claim that existing public project systems lack approval bodies or criteria.

In current institutional practice, projects may be reviewed through formal investment, procurement, municipal, environmental, technical, or sector-specific procedures. For Chile as a reference case, public investment initiatives may pass through the Sistema Nacional de Inversiones, public procurement may use tender bases and evaluation criteria through ChileCompra, municipal projects may pass through technical and council processes, and environmentally relevant projects may require SEIA review and an RCA with conditions.

Reference examples:

- Sistema Nacional de Inversiones: `https://sni.gob.cl/sistema-nacional-de-inversiones-sni/`
- SNI normative framework: `https://sni.gob.cl/formulacion-de-iniciativas/marco-normativo/`
- ChileCompra bases tipo: `https://www.chilecompra.cl/bases-tipo/`
- SEA / SEIA process: `https://www.sea.gob.cl/que-es-el-seia-0`
- SEA RCA records: `https://www.sea.gob.cl/resoluciones-de-calificacion-ambiental`

The A002 problem is different: these approvals, criteria, conditions, omissions, and later compliance traces are often dispersed across technical files, procurement records, administrative acts, municipal minutes, environmental records, permits, fiscalization reports, and contract documents. The ordinary affected citizen may know that a project was "approved" or "almost funded" without seeing, at the decision surface, what was approved, by whom, under which criteria, what remained pending, and which unresolved conditions could affect funding, execution readiness, disbursement, trust, or reputation.

Core v0 therefore does not replace legal or technical approval systems by default. It translates their material outputs into source-linked, citizen-readable, and audit-preserved claims.

## Rule added to Core v0

Every material project claim or interface label that can affect funding, legitimacy, execution readiness, disbursement, trust, closure, complaint review, or reputation should be source-linked and reviewable.

Minimum rules:

- every material project claim has a `MaterialInformationClaim` or equivalent source reference;
- formal approval labels state the approving role or authority, criterion source, scope, date or version, and unresolved conditions where material;
- compact project cards surface unresolved material warnings;
- AI-generated summaries list source categories and limitations;
- discovery reasons are preserved where visibility can affect funding;
- verified discovery can correct omitted material information;
- citizen-facing labels distinguish popularity, funding state, evidence sufficiency, fiscalization status, complaint status, design readiness, and legitimacy conditions.

## Macul example

A compact Macul project card may show `almost funded`, but it must not hide material unresolved issues. If bathroom/accessibility evidence is not accepted, if a noise antivalue is under review, if a design gate is pending, or if a formal approval covered only a partial design scope, those limitations should appear as compact warnings with drill-down paths.

The point is not to make the citizen read every permit, tender base, plan, meeting minute, or technical appendix. The point is that a citizen should not need to discover later that the visible "approved" or "almost funded" label depended on an approval that did not address bathrooms, accessibility, dimensions, public-access rules, neighborhood consultation, or a material phase gate.

## Citizen simplicity

The citizen sees short labels and warnings first. The technical audit layer preserves sources, material claims, evidence status, AI-assistance traces, discovery reasons, and correction history.

## Transparency and accountability effect

This makes project visibility a governed surface. It prevents favorable summaries from becoming hidden allocation or hidden legitimacy.

## Residual risks

- Visual emphasis and default ordering may still bias attention.
- Advanced recommendation systems remain Extension v1+ unless explainable, configurable, and auditable.
- Materiality judgments can be contested.

## Integration target

This resolution should inform MaterialInformationClaim, AssistedDeliberationContext, VerifiedDiscovery, Home/Discovery, compact cards, full project sheets, and Layer 5 audit trail.
