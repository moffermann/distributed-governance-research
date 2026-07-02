# Evidence Producer Evidence Quality Validation

## Status

Resolved for Core v0 by `docs/79_EVIDENCE_QUALITY_REVIEW_AND_A013_RESOLUTION.md`.

Detailed authenticity scoring, AI-generation detection, instrument calibration verification, metadata integrity, fraud detection, and country-specific legal admissibility rules remain future implementation or country-implementation work.

## Source

Captured during H018/H022 refinement on 2026-06-30.

## Question

How should the system validate the quality, authenticity, relevance, and usefulness of fulfillment/control evidence produced by approved or funded evidence producers?

Core v0 answer:

The system should not validate formal fulfillment/control evidence only after submission. It should require each formal evidence need to declare a proportional evidence producer qualification and method standard before the evidence is produced or financed.

Formal fulfillment/control evidence is high quality when:

1. the producer is technically idoneous for the specific evidence need;
2. the method, instrument, protocol, metadata, and report are adequate for the metric or claim;
3. the resulting evidence is fit for the specific formal effect claimed.

## Why this matters

C003 correctly separates fulfillment/control evidence production from execution and avoids relying on executor self-report. However, independence from the executor does not automatically make evidence true, useful, or high quality.

An approved or funded fulfillment/control evidence producer may still submit:

- false fulfillment/control evidence;
- low-quality fulfillment/control evidence;
- manipulated fulfillment/control evidence;
- AI-generated or synthetic material;
- evidence that is technically real but irrelevant to the metric;
- evidence that is too partial to support the material claim;
- evidence that duplicates existing evidence without improving verification;
- evidence produced with an undisclosed conflict or weak method.

If fiscalizers rely on weak producer fulfillment/control evidence, the system may release funds, close milestones, update reputation, or validate value fulfillment on an unreliable basis.

The key risk is not only that submitted evidence may be incomplete. It is that a non-idoneous actor may perform a measurement that looks like evidence but cannot reasonably support the formal metric. A citizen may observe that a court seems short, but a hard dimension KPI should require an eligible technical producer, adequate instruments, documented method, and reviewable report.

## Relationship to current v0 model

This question connects to:

- C003, because evidence producers are distinct from executors but may still be unreliable;
- C015, because publication or submission is not the same as evidentiary validation;
- H022, because the Project Evidential Contract defines fulfillment evidence needs before execution;
- H023, because information reliability depends on claims, evidence, contradictions, review, and responsibility;
- C010, because value verification requires evidence that actually supports the promised value;
- C016, because disbursement depends on milestone evidence and review;
- C018, because reputation may be updated from accepted fulfillment evidence and value fulfillment;
- H024, because complaints or discoveries may challenge weak, false, or manipulated evidence.

## Concrete example

Project:

```text
Design and Construction of Multi-court Facility in Macul.
```

Metric:

```text
The construction phase delivers two usable public multi-courts with accepted dimensions, public-access rules, and required bathroom or accessibility commitments.
```

Evidence producer offer:

```text
Submit photos and a short field report after construction.
```

Possible problem:

```text
The photos are real but show only one angle, do not prove dimensions, do not show bathroom/accessibility commitments, and may have been taken before final correction. The field report may be AI-generated or copied from the executor's own material.
```

The fulfillment evidence is independent in form, but weak for the metric. The fiscalizer needs a way to evaluate evidentiary quality rather than merely count the contextualized evidence item as submitted.

Core v0 resolution:

```text
The evidence need for court dimensions should require an eligible technical producer, such as a qualified topographer, architect, engineer, inspector, certified lab, competent technical institution, or other protocol-eligible professional, using an accepted measurement method and instruments.

Generic photos may remain contextual or corroborating material. They should not release funds for the hard dimension KPI unless the active standard says they are sufficient for that effect.
```

## Initial framing

Evidence producers should propose which fulfillment/control evidence they will produce and identify which metric, value commitment, material claim, milestone, phase, or risk the evidence addresses.

Fulfillment evidence that matches the Project Evidential Contract should have higher eligibility priority.

Evidence not explicitly listed in the contract may still be admissible, but should have lower eligibility priority unless a fiscalizer, reviewer, or protocol rule accepts it as equivalent, necessary, materially useful, or complementary within the available control budget.

Each evidence producer offer should also identify:

- the producer's qualification basis for the evidence need;
- professional title, certification, accreditation, license, institutional competence, or protocol-defined expertise where applicable;
- method and instruments or tools to be used;
- calibration, validation, or methodological references where needed;
- metadata and chain-of-custody treatment where applicable;
- AI-generated or AI-assisted components;
- limitations and scope of the resulting report.

## Remaining design questions

1. What exact metadata fields should each evidence category require by project type, risk, metric, and legal/technical context?
2. How should producer qualification be scored or classified without creating a closed cartel of experts?
3. Which registries, professional licenses, institutional accreditations, or prior-performance records can support eligibility?
4. How should AI-generated or AI-assisted evidence be allowed, disclosed, restricted, or rejected?
5. What corroboration rules are needed for high-risk milestones, disbursements, or closure?
6. How should repeated technically unfit, low-quality, false, or manipulated fulfillment/control evidence affect the evidence producer's reputation, payment, eligibility, and responsibility?
7. How should useful unexpected evidence be funded or prioritized without consuming control budgets on unrelated material?
8. What happens if the fiscalizer accepted fulfillment/control evidence that later proves false, manipulated, or technically unfit?

## Accepted Core v0 resolution direction

Core v0 should use a proportional `EvidenceProducerQualificationStandard`, implemented either as explicit fields inside the evidence need and offer objects or as a reusable standard object where implementation requires it.

Candidate dimensions:

- producer qualification for the specific metric or claim;
- credential, license, accreditation, institutional competence, or protocol-defined expertise;
- independence and conflict status;
- accepted method, protocol, instrument, tool, or survey design;
- calibration, validation, or chain-of-custody requirements where applicable;
- required metadata and raw source records;
- report discipline: object measured, operations performed, results, limitations, conclusions, and responsible producer;
- AI-generation or AI-assistance disclosure;
- corroboration level;
- probative fitness for disbursement, closure, complaint referral, responsibility, reputation, or legal-path support.

This should not become heavy pre-approval for ordinary complaint evidence submitted by citizens. The rule is proportional: ordinary complaint evidence may remain easy to submit, while paid or critical fulfillment/control evidence used for KPI verification, milestone release, closure, reputation, complaint referral, or legal-path support should require qualified producers and reviewable methods.

## Classification

Resolved Core v0 failure mode with residual implementation questions.

The issue should inform final implementable evidence, fiscalization, disbursement, closure, reputation, and complaint-referral schemas.
