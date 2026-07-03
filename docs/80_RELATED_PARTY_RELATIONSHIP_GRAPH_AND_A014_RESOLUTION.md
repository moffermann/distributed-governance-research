# Related-Party Relationship Graph and A014 Resolution v0

## Status

Accepted Phase 3 resolution.

Paired review:

- Attack: `attacks/A014-related-party-projects-and-hidden-control.md`
- Defense: `defenses/D014-related-party-projects-and-hidden-control.md`

## Resolution decision

A014 is founded and does not distort the project when it targets hidden control rather than declared proximity. The accepted resolution is a minimum related-party relationship graph and severity model.

Under `knowledge/principles/P007-integrate-or-bound-rule.md`, this resolution integrates through existing objects: the graph is observability over declarations already required by `RelatedPartyConflictReview` and the role model, not a new primary entity. The same relationship-and-control graph serves A018 collusion observability (`docs/84_COLLUSION_OBSERVABILITY_AND_A018_RESOLUTION.md`); one graph, two consumers.

## Rule added to Core v0

Related-party status is not automatic invalidity. Hidden, severe, or control-relevant relationships require stronger safeguards, correction, blocking, exclusion, complaint review, responsibility review, or reputation effects. ^rb4b2bf65

Minimum relationship graph:

- ownership and control chain;
- board or management control;
- supplier and subcontractor relationships where material;
- repeated fiscalizer/evidence-producer relationships;
- delegate or funder relationships to project actors; ^r2765ddd6
- authority-linked operator status;
- hidden-conflict escalation rule.

## Macul example

One holding may propose, design, and build a multi-court facility through related firms if the relationships are declared, phase-gated, independently reviewed, and fiscally controlled. It becomes a severe conflict if the holding also controls evidence production or fiscalization, or if supplier/control relationships are hidden.

## Citizen simplicity

Citizens should see simple warnings such as `declared related supplier`, `independent control required`, `hidden conflict under review`, or `severe conflict blocks release`.

## Transparency and accountability effect

The system distinguishes legitimate proximity from hidden capture and makes relationship-based self-dealing harder to hide.

## Scope boundary and limitation

Core v0 does not require beneficial-ownership verification, corporate-registry integration, or investigative discovery of undeclared relationships. Verification depth against external registries is a country implementation decision; graph analytics beyond declared and observed platform relationships remain Extension v1+.

Limitation statement: the relationship graph sees declared relationships and on-platform patterns; deliberately concealed off-platform control can defeat it, and the architecture's answer is to make concealment costly and reviewable, not impossible.

## Residual risks

- Beneficial ownership can be hard to verify.
- Informal dependencies may not appear in declarations.
- Small communities may have unavoidable overlap among roles.

## Integration target

This resolution should inform RelatedPartyConflictReview, project roles, material suppliers, ProjectPhase gates, FiscalizationAssignment, disbursement blockers, responsibility events, and reputation.
