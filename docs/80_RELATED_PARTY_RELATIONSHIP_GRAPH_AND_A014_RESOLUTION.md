# Related-Party Relationship Graph and A014 Resolution v0

## Status

Accepted Phase 3 resolution.

Paired review:

- Attack: `attacks/A014-related-party-projects-and-hidden-control.md`
- Defense: `defenses/D014-related-party-projects-and-hidden-control.md`

## Resolution decision

A014 is founded and does not distort the project when it targets hidden control rather than declared proximity. The accepted resolution is a minimum related-party relationship graph and severity model.

## Rule added to Core v0

Related-party status is not automatic invalidity. Hidden, severe, or control-relevant relationships require stronger safeguards, correction, blocking, exclusion, complaint review, responsibility review, or reputation effects.

Minimum relationship graph:

- ownership and control chain;
- board or management control;
- supplier and subcontractor relationships where material;
- repeated fiscalizer/evidence-producer relationships;
- delegate or funder relationships to project actors;
- authority-linked operator status;
- hidden-conflict escalation rule.

## Macul example

One holding may propose, design, and build a multi-court facility through related firms if the relationships are declared, phase-gated, independently reviewed, and fiscally controlled. It becomes a severe conflict if the holding also controls evidence production or fiscalization, or if supplier/control relationships are hidden.

## Citizen simplicity

Citizens should see simple warnings such as `declared related supplier`, `independent control required`, `hidden conflict under review`, or `severe conflict blocks release`.

## Transparency and accountability effect

The system distinguishes legitimate proximity from hidden capture and makes relationship-based self-dealing harder to hide.

## Residual risks

- Beneficial ownership can be hard to verify.
- Informal dependencies may not appear in declarations.
- Small communities may have unavoidable overlap among roles.

## Integration target

This resolution should inform RelatedPartyConflictReview, project roles, material suppliers, ProjectPhase gates, FiscalizationAssignment, disbursement blockers, responsibility events, and reputation.
