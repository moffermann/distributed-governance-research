# Material Visibility and A002 Resolution v0

## Status

Accepted Phase 3 resolution.

Paired review:

- Attack: `attacks/A002-information-capture-and-visibility-control.md`
- Defense: `defenses/D002-information-capture-and-visibility-control.md`

## Resolution decision

A002 is founded and does not distort the project when it is read as a warning against hidden information control. The project rejects the distorted conclusion that citizens should receive no summaries, discovery assistance, or AI support. The accepted resolution is a minimum material-visibility rule.

## Rule added to Core v0

Every material project claim or interface label that can affect funding, legitimacy, execution readiness, disbursement, trust, closure, complaint review, or reputation should be source-linked and reviewable.

Minimum rules:

- every material project claim has a `MaterialInformationClaim` or equivalent source reference;
- compact project cards surface unresolved material warnings;
- AI-generated summaries list source categories and limitations;
- discovery reasons are preserved where visibility can affect funding;
- verified discovery can correct omitted material information;
- citizen-facing labels distinguish popularity, funding state, evidence sufficiency, fiscalization status, complaint status, design readiness, and legitimacy conditions.

## Macul example

A compact Macul project card may show `almost funded`, but it must not hide material unresolved issues. If bathroom/accessibility evidence is not accepted, if a noise antivalue is under review, or if a design gate is pending, those limitations should appear as compact warnings with drill-down paths.

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
