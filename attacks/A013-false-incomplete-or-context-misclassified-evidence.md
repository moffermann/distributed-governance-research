# A013 - False, Incomplete, or Context-Misclassified Evidence

## Status

Prepared for Phase 3 review. Not resolved.

## Description

The model distinguishes complaint evidence, fulfillment evidence, control evidence, contradiction evidence, administrative observability data, and research evidence. This attack asks whether evidence can still be false, low quality, AI-generated, irrelevant, incomplete, or used in the wrong procedural context.

## Location in current project

- `docs/03_ROADMAP.md` Phase 3 priority objections: evidence quality and false, incomplete, or context-misclassified evidence.
- `knowledge/open-questions/evidence-producer-evidence-quality-validation.md`.
- `knowledge/concepts/evidence-context-taxonomy-v0.md`.
- `docs/46_EVIDENCE_PRODUCERS_AND_C003_RESOLUTION.md`.
- `docs/45_ASSISTED_EVIDENCE_PUBLICATION_AND_C015_RESOLUTION.md`.
- `docs/diagrams/v0-project-evidential-contract-state.md`.

## Problem

Independence from the executor does not make evidence true. A funded evidence producer may submit material that is authentic but irrelevant, technically real but incomplete, copied, AI-generated, manipulated, or classified under the wrong evidence context.

Example:

```text
The Macul evidence producer submits photos of courts.
The photos do not prove dimensions, bathrooms, accessibility, public access, date, location, or completion status.
The evidence is independent but insufficient for the claimed metric.
```

## Recommended resolution path

- Add an `EvidenceQualityReview` layer or equivalent fields in `ContextualizedEvidenceItem`, `FiscalizationReport`, and `EvaluationRecord`.
- Review relevance, provenance, independence, completeness, method, corroboration, timeliness, metadata, AI-generation risk, and usefulness.
- Keep citizen complaint evidence easy to submit, but apply stricter quality review to paid or critical fulfillment/control evidence.
- Require context confirmation before formal use.
- Penalize repeated low-quality or false fulfillment/control evidence by role and context.

## Theoretical base and citations

- National Research Council, `Strengthening Forensic Science in the United States` (2009): evidence quality requires validated methods, standards, and limits.
- Daubert v. Merrell Dow Pharmaceuticals, 509 U.S. 579 (1993): expert evidence must be relevant and reliable.
- NIST SP 800-86, `Guide to Integrating Forensic Techniques into Incident Response` (2006): digital evidence handling requires preservation, collection, examination, and reporting discipline.
- ISO/IEC 17025: testing and calibration competence depends on method validity, traceability, and quality systems.
- NIST, `AI Risk Management Framework 1.0` (2023): AI-generated or AI-assisted outputs require risk governance and documentation.

## Social reasons

Bad evidence can release money, close projects, damage reputations, or dismiss valid complaints. Evidence quality is therefore not a technical detail; it is a trust foundation.

## Conflicts of interest

- Evidence producers may be paid for volume, not usefulness.
- Fiscalizers may over-rely on easy evidence.
- Executors may coordinate with independent-looking producers.
- AI tools can generate plausible but false reports.

## Inconsistencies to test

- C003 creates independent evidence producers, but quality validation remains open.
- C015 separates publication from proof, but citizen-facing labels may still imply proof.
- The schema includes sufficiency status, but not yet a full authenticity model.

## Stress scenario

Construction funds are released after fiscalizer acceptance of photos and a short report. Later measurement shows court dimensions were wrong and the report was copied from executor material.

## Review checklist

- Does every formal evidence use have confirmed evidence context?
- Are required metadata fields proportional to the claimed effect?
- Can authentic-but-insufficient evidence be labeled without implying fraud?
- Are AI-generated or AI-assisted materials disclosed?
- Does poor evidence affect the evidence producer's role reputation?

## Expected resolution output

A Phase 3 resolution should resolve the open evidence-quality validation question before final implementable evidence and disbursement schemas are treated as complete.
