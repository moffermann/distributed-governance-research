# Formal Evidence Producer Qualification and A013 Resolution v0

## Status

Accepted Phase 3 resolution.

Paired review:

- Attack: `attacks/A013-false-incomplete-or-context-misclassified-evidence.md`
- Defense: `defenses/D013-false-incomplete-or-context-misclassified-evidence.md`

## Resolution decision

A013 is founded in the prior corpus. The attack does not merely require a generic review of submitted evidence. It identifies a deeper trust foundation: formal fulfillment/control evidence has value only when the producer is technically qualified for the specific measurement or report, the method is adequate for the metric, and the result is fit for the formal effect claimed.

The accepted Core v0 resolution is a proportional formal evidence producer qualification standard. Detailed scoring, fraud detection, AI-generation detection, instrument calibration registries, and country-specific legal admissibility rules remain future implementation or country-implementation work. Core v0 now requires each formal fulfillment/control evidence need to specify the producer qualification, method, and probative fitness expected for the relevant metric, value floor, antivalue ceiling, milestone, phase gate, or closure condition.

Under `knowledge/principles/P007-integrate-or-bound-rule.md`, this is the most mechanism-heavy accepted resolution, and deliberately so: unqualified or unfit formal evidence defeats the auditable-evidence core claim directly, so the field standard is load-bearing rather than elaboration. Its application is proportional by construction — the standard binds only evidence needs that the active Threshold Policy marks as formal, paid, or hard-effect; ordinary observations and low-risk confirmations are untouched.

## Rule added to Core v0

Independence from the executor does not make fulfillment/control evidence technically reliable, legally useful, or sufficient. Paid or critical fulfillment/control evidence must be produced by an actor whose qualifications, method, instruments, independence, and report discipline are adequate for the evidence need.

Minimum formal evidence standard:

- `producer_qualification_standard`: professional title, certification, license, accreditation, experience, institutional competence, or protocol-defined expertise required for the specific evidence need;
- `qualification_basis_refs`: documents, registry references, credentials, prior accepted work, institutional accreditation, or country-implementation authority records supporting eligibility;
- `independence_and_conflict_status`: relationship to proposer, modeler, executor, fiscalizer, beneficiary, affected party, supplier, holding group, or funding source;
- `measurement_method`: protocol, field method, survey method, inspection method, test method, sampling method, or professional rule used;
- `instrument_or_tool_standard`: instrument class, calibration or validation reference, software/tool version, AI-assistance disclosure, or technical limitation where applicable;
- `required_metadata`: date, time, place, target object, metric, phase, milestone, chain of custody, signatures, photos, raw records, sample references, or other required traceability;
- `report_requirements`: description of object measured, operations performed, results, limitations, conclusions, responsible producer, and reviewable source records;
- `probative_fitness`: whether the evidence can support the proposed formal effect, such as phase acceptance, milestone release, closure, reputation input, complaint referral, responsibility event, or legal path support;
- `review_outcome`: accepted for effect, accepted only as contextual material, needs corroboration, insufficient for claimed effect, rejected, contradicted, suspected false/manipulated, or proven false/manipulated after review;
- `role_specific_responsibility_effect`: repeated low-quality, false, manipulated, conflicted, or technically unfit evidence may affect the evidence producer's role reputation, eligibility, payment, or responsibility review.

## Current institutional analogue

Current legal systems usually do not accept technical proof merely because someone uploaded material. They use expert/pericial evidence, professional credentials, objective methods, reports describing operations and conclusions, cross-examination or challenge, chain-of-custody rules for material evidence, and judicial or administrative assessment of seriousness, professionalism, objectivity, idoneity, and technical rigor.

Core v0 should not claim that platform evidence is automatically admissible in every court. Country implementations must map formal evidence standards to the applicable legal, administrative, technical, or professional rules. The platform rule is narrower and necessary: evidence used for formal platform effects should be produced and documented at a standard that can reasonably support legal or administrative review where the project later requires it.

## Boundary with A004

A004 asks what evidence is necessary to verify each declared value floor, formal secondary value, antivalue ceiling, material value claim, and metric.

A013 asks whether the actor and method producing that evidence are technically idoneous for the specific measurement and whether the resulting evidence is fit for the formal effect claimed.

The system should therefore attach qualification and method requirements to `FulfillmentEvidenceNeed`, `EvidenceProducerOffer`, `ControlSubproject`, `FiscalizationAssignment`, `ContextualizedEvidenceItem`, `FiscalizationReport`, and `EvaluationRecord` where material.

## Macul example

For the Macul multi-court project, the Project Evidential Contract may require:

- reviewed plans and regulatory dimension checks for the design phase;
- certified field measurement for court dimensions;
- professional accessibility review where accessibility is promised or legally required;
- georeferenced photo/video records as contextual or corroborating evidence;
- beneficiary or affected-party evaluation for access, use, noise, safety, or service experience;
- noise measurement by an actor with appropriate instrument and method where an antivalue ceiling uses decibels.

A citizen using a school ruler may submit an observation, complaint, or contradiction signal. That material may be useful to trigger review, but it is not formal fulfillment evidence for a hard dimension KPI. A qualified topographer, architect, engineer, inspector, certified lab, competent technical institution, or other protocol-eligible professional may produce the formal measurement if the active evidence need requires that competence.

The fiscalizer should not treat photos or informal measurements as proof of regulatory dimensions, bathrooms, accessibility, or legal compliance. It should verify that the producer, method, instruments, metadata, and report satisfy the required standard before recommending disbursement, phase acceptance, closure, responsibility, reputation, or legal referral effects.

## Citizen simplicity

Citizen observations, complaint evidence, beneficiary feedback, and affected-party reports remain easy to submit. They may alert the system, add context, contradict claims, or trigger formal review. ^re75cdb8c

The higher qualification standard applies when evidence is paid or used for hard formal effects: KPI verification, phase gates, milestone disbursement, closure, formal responsibility, reputation, complaint referral, or legal-path support.

## Transparency and accountability effect

This resolves the core evidence-quality gap by connecting money, proof, and responsibility. Fulfillment/control evidence has a budget because it is not casual upload work; it is formal measurement or documentation performed by qualified actors who accept responsibility for the evidence they produce. The audit trail should show why a producer was eligible, what standard applied, how the measurement was performed, and what formal effects the evidence was allowed to support.

## Scope boundary and limitation

Core v0 does not require authenticity scoring, AI-generation detection, calibration registries, credential-registry integration, or legal admissibility guarantees; those remain Extension v1+ or country implementation, and Core v0 does not claim platform evidence is automatically court-admissible.

Limitation statement: the qualification standard verifies that the right kind of actor used the right kind of method; it does not verify that the specific measurement is true, so a qualified producer can still submit false or negligent evidence, and discovery may come only after formal effects occurred.

## Residual risks

- Full authenticity scoring, AI-generation detection, instrument calibration verification, metadata integrity, and fraud detection remain detailed implementation work.
- Country implementations must translate this standard into local legal, administrative, professional, technical, and evidentiary requirements.
- Low-risk projects should not be burdened with expert-grade procedures where ordinary confirmation is enough.
- Reviewers may apply qualification and method sufficiency inconsistently.
- False or technically weak evidence may be discovered only after effects occurred.

## Integration target

This resolution should inform `FulfillmentEvidenceNeed`, `ProjectEvidentialContract`, `EvidenceProducerOffer`, `ControlSubproject`, `FiscalizationAssignment`, `ContextualizedEvidenceItem`, `EvidenceContext`, `FiscalizationReport`, `EvaluationRecord`, disbursement, closure, reputation, complaint review, and the evidence-producer performance surface.
