# D013 - Defense Against A013: False, Incomplete, or Context-Misclassified Evidence

## Integration status

Phase 3 paired review completed. Accepted resolution: `docs/79_EVIDENCE_QUALITY_REVIEW_AND_A013_RESOLUTION.md`.

## Attack reference

- Attack file: `attacks/A013-false-incomplete-or-context-misclassified-evidence.md`
- Attack title: `A013 - False, Incomplete, or Context-Misclassified Evidence`
- Roadmap source: Phase 3 priority objections, evidence quality and false, incomplete, or context-misclassified evidence.

## Attack summary

The attack argues that independent evidence is not necessarily true, useful, complete, relevant, authentic, or properly classified. In Macul, a producer may submit real photos that do not prove court dimensions, bathrooms, accessibility, public access, date, location, completion status, or the metric under review.

## Objective evaluation

- Classification: founded and partially unresolved.
- Why it is founded: independence from the executor reduces one conflict but does not validate relevance, authenticity, method, completeness, metadata, or procedural context.
- Why it is not fatal to the architecture: the model already distinguishes evidence contexts, rejects bare evidence as a formal object, requires context review, and marks evidence-quality validation as a Core v0 open question.
- Difference of judgment: low. Evidence quality is a technical and institutional requirement, not a mere preference.
- Editorial distortion risk: low to medium. The attack strengthens the project if handled honestly. It would distort the project only if it leads to over-bureaucratizing ordinary citizen complaint evidence.

## Response

The defense is not that evidence producers are automatically trustworthy. The defense is that produced material becomes useful only after context, sufficiency, quality, and formal-effect review.

The system must preserve the distinction between:

- `Complaint Evidence`: material used in a complaint process;
- `Fulfillment Evidence`: material used to verify value, milestones, phase gates, disbursement, closure, or reputation-relevant obligations;
- `Control Evidence`: material produced through fiscalization, technical review, evidence missions, or another control process.

For Macul, photos may be accepted as contextual material, rejected as insufficient for dimensions, accepted only with corroboration, or used as complaint evidence but not fulfillment evidence. The same image must not silently migrate from "citizen complaint attachment" into "proof of fulfilled construction milestone" without review.

## Project-document basis

- `knowledge/open-questions/evidence-producer-evidence-quality-validation.md:13` asks how the system should validate quality, authenticity, relevance, and usefulness of fulfillment/control evidence.
- `knowledge/open-questions/evidence-producer-evidence-quality-validation.md:17` states that independence from the executor does not automatically make evidence true, useful, or high quality.
- `knowledge/open-questions/evidence-producer-evidence-quality-validation.md:83` through `knowledge/open-questions/evidence-producer-evidence-quality-validation.md:91` list open questions on metadata, quality classification, labels, AI-generated evidence, corroboration, reputation, and later false evidence.
- `knowledge/open-questions/evidence-producer-evidence-quality-validation.md:110` says ordinary complaint evidence should remain easy to submit, while paid or critical fulfillment/control evidence should receive explicit quality review.
- `knowledge/concepts/evidence-context-taxonomy-v0.md:15` prohibits bare `evidence` for system objects with procedural consequences.
- `knowledge/concepts/evidence-context-taxonomy-v0.md:139` states that complaint evidence, fulfillment evidence, control evidence, administrative observability data, and research evidence should not be collapsed into one undifferentiated evidence object.
- `docs/46_EVIDENCE_PRODUCERS_AND_C003_RESOLUTION.md:280` requires evidence items to connect to material claims, carry explicit evidence context, and create formal effects only after review.
- `docs/diagrams/v0-project-evidential-contract-state.md:105` through `docs/diagrams/v0-project-evidential-contract-state.md:110` require quality review for relevance, metadata, authenticity, independence, completeness, and corroboration.
- `docs/diagrams/v0-project-evidential-contract-state.md:191` explicitly keeps evidence-quality validation as an open Core v0 question.
- `docs/66_IMPLEMENTABLE_OBJECT_SCHEMA_DRAFT_V0.md:160` defines `ContextualizedEvidenceItem` with evidence context, metadata, review status, and sufficiency status.
- `docs/66_IMPLEMENTABLE_OBJECT_SCHEMA_DRAFT_V0.md:291` lists evidence authenticity and quality scoring, including AI-generation risk and metadata integrity, as a next schema issue.

## Bibliographic basis

- National Research Council, `Strengthening Forensic Science in the United States` (2009): evidence quality requires standards, validation, and limits.
- Daubert v. Merrell Dow Pharmaceuticals, 509 U.S. 579 (1993): expert evidence must be relevant and reliable.
- NIST SP 800-86, `Guide to Integrating Forensic Techniques into Incident Response` (2006): digital evidence requires disciplined preservation, collection, examination, and reporting.
- ISO/IEC 17025: testing and calibration competence depends on method validity, traceability, and quality systems.
- NIST, `AI Risk Management Framework 1.0` (2023): AI-generated or AI-assisted outputs require risk governance and documentation.

## Proposed improvements

Create an `EvidenceQualityReview` layer or fields inside `ContextualizedEvidenceItem`, `FiscalizationReport`, and `EvaluationRecord`:

- relevance to metric, claim, milestone, phase, or complaint;
- provenance and chain of custody where required;
- independence and conflict status;
- completeness and required metadata;
- method quality and limitations;
- corroboration level;
- AI-generated or AI-assisted status;
- context confirmation;
- sufficiency for the proposed formal effect;
- role-specific reputation effect for repeated low-quality or false evidence.

## Applies to

- ContextualizedEvidenceItem;
- EvidenceContext;
- FulfillmentEvidenceNeed;
- ProjectEvidentialContract;
- Evidence Producer offers;
- FiscalizationReport;
- EvaluationRecord;
- disbursement, closure, reputation, and complaint review.

## Defense strength and residual risk

Defense strength: moderate. The model has the correct conceptual boundary and open question, but the quality-validation model is not complete.

Residual risk: bad evidence can still trigger fund release, closure, or reputation if quality review is weak. This is one of the strongest unresolved Phase 3 risks.

## Decision

The attack is founded and partially unresolved. Phase 3 should not treat final evidence/disbursement schemas as mature until evidence-quality validation is specified.
