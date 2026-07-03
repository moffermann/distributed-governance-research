# D013 - Defense Against A013: False, Incomplete, or Context-Misclassified Evidence

## Integration status

Phase 3 paired review completed. Accepted resolution: [[79_EVIDENCE_QUALITY_REVIEW_AND_A013_RESOLUTION|docs/79_EVIDENCE_QUALITY_REVIEW_AND_A013_RESOLUTION.md]], already propagated into the core corpus; its scope boundary was clarified under [[P007-integrate-or-bound-rule|knowledge/principles/P007-integrate-or-bound-rule.md]].

## Attack reference

- Attack file: [[A013-false-incomplete-or-context-misclassified-evidence|attacks/A013-false-incomplete-or-context-misclassified-evidence.md]]
- Attack title: `A013 - False, Incomplete, or Context-Misclassified Evidence`
- Roadmap source: Phase 3 priority objections, evidence quality and false, incomplete, or context-misclassified evidence.

## Attack summary

The attack argues that independent evidence is not necessarily true, useful, complete, relevant, authentic, technically idoneous, or properly classified. In Macul, a producer may submit real photos that do not prove court dimensions, bathrooms, accessibility, public access, date, location, completion status, or the metric under review. A citizen's informal measurement may be useful as an observation or contradiction, but it is not formal hard-KPI evidence when the metric requires qualified technical measurement.

## Objective evaluation

- Classification: founded; Core v0 resolution accepted, with implementation risks remaining.
- Why it is founded: independence from the executor reduces one conflict but does not validate producer qualification, relevance, authenticity, method, instruments, completeness, metadata, or procedural context.
- Why it is not fatal to the architecture: the model already distinguishes evidence contexts, rejects bare evidence as a formal object, requires context review, and now adds A013's producer-qualification and method-fit standard for formal hard-KPI evidence.
- Difference of judgment: low. Evidence quality is a technical and institutional requirement, not a mere preference.
- Editorial distortion risk: low to medium. The attack strengthens the project if handled honestly. It would distort the project only if it leads to over-bureaucratizing ordinary citizen complaint evidence.

## Response

The defense is not that evidence producers are automatically trustworthy. The defense is that formal fulfillment/control evidence becomes useful only when the accepted evidence need specifies what must be proven, which producer qualification and method standard applies, and whether the submitted evidence is fit for the claimed formal effect.

The system must preserve the distinction between:

- `Complaint Evidence`: material used in a complaint process;
- `Fulfillment Evidence`: material used to verify value, milestones, phase gates, disbursement, closure, or reputation-relevant obligations;
- `Control Evidence`: material produced through fiscalization, technical review, evidence missions, or another control process.

For Macul, photos may be accepted as contextual material, rejected as insufficient for dimensions, accepted only with corroboration, or used as complaint evidence but not fulfillment evidence. The same image must not silently migrate from "citizen complaint attachment" into "proof of fulfilled construction milestone" without review. A formal dimension KPI should require an eligible technical producer, accepted measurement method, traceable instrument/tool basis, required metadata, and a responsible report.

## Project-document basis

- [[79_EVIDENCE_QUALITY_REVIEW_AND_A013_RESOLUTION|docs/79_EVIDENCE_QUALITY_REVIEW_AND_A013_RESOLUTION.md]] resolves the Core v0 gap by requiring formal evidence producer qualification, method/protocol fit, traceable metadata, report discipline, and effect-specific probative fitness for hard-KPI fulfillment/control evidence.
- [[evidence-producer-evidence-quality-validation|knowledge/open-questions/evidence-producer-evidence-quality-validation.md]] is now resolved for Core v0 and keeps detailed scoring, AI-generation detection, calibration verification, and country-specific legal admissibility as future implementation or country-implementation work.
- [[evidence-context-taxonomy-v0|knowledge/concepts/evidence-context-taxonomy-v0.md]] prohibits bare `evidence` for system objects with procedural consequences and distinguishes complaint evidence, fulfillment evidence, control evidence, administrative observability data, and research evidence.
- [[46_EVIDENCE_PRODUCERS_AND_C003_RESOLUTION|docs/46_EVIDENCE_PRODUCERS_AND_C003_RESOLUTION.md]] now pairs evidence-producer independence with A013's qualification and method standard for formal hard-KPI evidence.
- [[v0-project-evidential-contract-state|docs/diagrams/v0-project-evidential-contract-state.md]] now routes submitted evidence through qualification, method-fit, quality, and sufficiency review before formal effects.
- [[66_IMPLEMENTABLE_OBJECT_SCHEMA_DRAFT_V0|docs/66_IMPLEMENTABLE_OBJECT_SCHEMA_DRAFT_V0.md]] defines `EvidenceProducerQualificationStandard`, `EvidenceQualityReview`, and validation gates that block hard-KPI effects where producer qualification or method fit is missing.
- [[P007-integrate-or-bound-rule#^r520eddb3|knowledge/principles/P007-integrate-or-bound-rule.md]] classifies this as a justified mechanism-heavy integration: unfit formal evidence defeats the auditable-evidence core claim, and the standard binds only Threshold Policy-marked formal, paid, or hard-effect evidence needs.

## Bibliographic basis

- National Research Council, `Strengthening Forensic Science in the United States` (2009): evidence quality requires standards, validation, and limits.
- Daubert v. Merrell Dow Pharmaceuticals, 509 U.S. 579 (1993): expert evidence must be relevant and reliable.
- NIST SP 800-86, `Guide to Integrating Forensic Techniques into Incident Response` (2006): digital evidence requires disciplined preservation, collection, examination, and reporting.
- ISO/IEC 17025: testing and calibration competence depends on method validity, traceability, and quality systems.
- NIST, `AI Risk Management Framework 1.0` (2023): AI-generated or AI-assisted outputs require risk governance and documentation.

## Proposed improvements

Create an `EvidenceProducerQualificationStandard` and `EvidenceQualityReview` layer or equivalent fields inside `FulfillmentEvidenceNeed`, `EvidenceProducerOffer`, `ContextualizedEvidenceItem`, `FiscalizationReport`, and `EvaluationRecord`:

- producer qualification for the specific metric or claim;
- credential, certification, license, accreditation, institutional competence, or protocol-defined expertise;
- relevance to metric, claim, milestone, phase, or complaint;
- provenance and chain of custody where required;
- independence and conflict status;
- completeness and required metadata;
- method quality and limitations;
- instrument/tool, calibration, validation, or survey-design adequacy where relevant;
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
- Evidence producer qualification/payment/eligibility;
- FiscalizationReport;
- EvaluationRecord;
- disbursement, closure, reputation, and complaint review.

## Defense strength and residual risk

Defense strength: stronger after A013 consolidation. The model now has the correct conceptual boundary and a Core v0 producer-qualification rule. Detailed scoring, authenticity validation, calibration checks, credential registry integration, AI-generation detection, and country-specific legal admissibility remain implementation or country-implementation work.

Residual risk: bad evidence can still trigger fund release, closure, or reputation if qualification/method review is weak or if country-specific standards are poorly configured. This remains a strong implementation risk, but no longer an unresolved Core v0 architecture gap.

## Decision

The attack is founded. The accepted Core v0 response is that paid or critical fulfillment/control evidence requires producer qualification, adequate method, traceable metadata, report discipline, and effect-specific quality review before it can support formal effects. The declared limitation is that the standard verifies the right actor and method, not the truth of the specific measurement: a qualified producer can still submit false or negligent evidence, and discovery may come after effects occurred.
