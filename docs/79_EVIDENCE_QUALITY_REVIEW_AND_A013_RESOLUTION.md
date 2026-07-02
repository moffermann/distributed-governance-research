# Evidence Quality Review and A013 Resolution v0

## Status

Accepted Phase 3 resolution.

Paired review:

- Attack: `attacks/A013-false-incomplete-or-context-misclassified-evidence.md`
- Defense: `defenses/D013-false-incomplete-or-context-misclassified-evidence.md`

## Resolution decision

A013 is founded and partly unresolved in the prior corpus. The attack does not distort the project; it identifies a missing trust foundation. The accepted resolution is a proportional `EvidenceQualityReview` baseline. Detailed authenticity scoring remains future implementation work, but Core v0 now requires a quality/sufficiency review path for formal evidence use.

## Rule added to Core v0

Independence from the executor does not make fulfillment/control evidence true, useful, complete, or sufficient. Formal evidence use requires context confirmation and quality/sufficiency review.

Minimum fields:

- relevance to metric, claim, milestone, phase, complaint, or formal effect;
- provenance and chain of custody where required;
- independence and conflict status;
- completeness and required metadata;
- method quality and limitations;
- corroboration level;
- AI-generated or AI-assisted status;
- confirmed evidence context;
- sufficiency for the proposed formal effect;
- role-specific reputation effect for repeated low-quality or false evidence.

## Macul example

Photos of courts may be real but insufficient. If they do not prove dimensions, bathrooms, accessibility, date, location, or completion status, they should not release funds or close a milestone unless corroborated or accepted for a narrower effect.

## Citizen simplicity

Citizen complaint evidence remains easy to submit. Stricter review applies when evidence supports paid control missions, milestone release, closure, formal responsibility, or reputation.

## Transparency and accountability effect

This resolves the core evidence-quality gap without overburdening ordinary complaints.

## Residual risks

- Full authenticity scoring, AI-generation detection, and metadata integrity remain detailed implementation work.
- Reviewers may apply sufficiency inconsistently.
- False evidence may be discovered only after effects occurred.

## Integration target

This resolution should inform ContextualizedEvidenceItem, EvidenceContext, FulfillmentEvidenceNeed, ProjectEvidentialContract, Evidence Producer offers, FiscalizationReport, EvaluationRecord, disbursement, closure, reputation, and complaint review.
