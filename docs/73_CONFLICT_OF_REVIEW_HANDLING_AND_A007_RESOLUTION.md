# Conflict of Review Handling and A007 Resolution v0

## Status

Accepted Phase 3 resolution.

Paired review:

- Attack: `attacks/A007-conflicting-reviews-and-evaluation-fragmentation.md`
- Defense: `defenses/D007-conflicting-reviews-and-evaluation-fragmentation.md`

## Resolution decision

A007 is founded and does not distort the project. The project rejects the distorted conclusion that one central reviewer should collapse all review contexts. The accepted resolution is conflict-of-review handling by dimension, effect, and scope.

## Rule added to Core v0

Every formal evaluation must identify:

- evaluation context;
- evaluated dimension;
- evidence basis;
- authority or qualification basis;
- effect type;
- effect scope;
- limitations;
- review or appeal status.

Conflicting records should be reconciled by formal effect, not by generic reviewer hierarchy.

## Macul example

The construction milestone may be accepted for partial release, while a noise antivalue remains disputed and a complaint about public access is admitted. These are not the same conclusion. The system should show `accepted for construction milestone`, `noise under review`, and `access complaint active` rather than one global pass/fail label.

## Citizen simplicity

Citizens should see scoped labels such as `passed for release`, `not closed`, `antivalue disputed`, `complaint pending`, or `conflict unresolved`.

## Transparency and accountability effect

The rule prevents favorable narrow reviews from being used as total project validation and prevents partial complaints from being misrepresented as total project failure.

## Residual risks

- Citizen-facing labels may still oversimplify.
- Later findings may require corrections to earlier records.
- Some effects may need legal or external authority outside the platform.

## Integration target

This resolution should inform EvaluationRecord, FiscalizationReport, complaint findings, ValueVerificationPackage, Project Closure Accountability Record, disbursement, and reputation inputs.
