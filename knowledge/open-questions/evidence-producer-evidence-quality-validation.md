# Evidence Producer Evidence Quality Validation

## Status

Open question.

## Source

Captured during H018/H022 refinement on 2026-06-30.

## Question

How should the system validate the quality, authenticity, relevance, and usefulness of evidence produced by approved or funded evidence producers?

## Why this matters

C003 correctly separates evidence production from execution and avoids relying on executor self-report. However, independence from the executor does not automatically make evidence true, useful, or high quality.

An approved or funded evidence producer may still submit:

- false evidence;
- low-quality evidence;
- manipulated evidence;
- AI-generated or synthetic material;
- evidence that is technically real but irrelevant to the metric;
- evidence that is too partial to support the material claim;
- evidence that duplicates existing evidence without improving verification;
- evidence produced with an undisclosed conflict or weak method.

If fiscalizers rely on weak producer evidence, the system may release funds, close milestones, update reputation, or validate value fulfillment on an unreliable basis.

## Relationship to current v0 model

This question connects to:

- C003, because evidence producers are distinct from executors but may still be unreliable;
- C015, because publication or submission is not the same as evidentiary validation;
- H022, because the Project Evidential Contract defines evidence needs before execution;
- H023, because information reliability depends on claims, evidence, contradictions, review, and responsibility;
- C010, because value verification requires evidence that actually supports the promised value;
- C016, because disbursement depends on milestone evidence and review;
- C018, because reputation may be updated from accepted evidence and value fulfillment;
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

The evidence is independent in form, but weak for the metric. The fiscalizer needs a way to evaluate evidentiary quality rather than merely count the evidence item as submitted.

## Initial framing

Evidence producers should propose which evidence they will produce and identify which metric, value commitment, material claim, milestone, phase, or risk the evidence addresses.

Evidence that matches the Project Evidential Contract should have higher eligibility priority.

Evidence not explicitly listed in the contract may still be admissible, but should have lower eligibility priority unless a fiscalizer, reviewer, or protocol rule accepts it as equivalent, necessary, materially useful, or complementary within the available control budget.

## Open design questions

1. What minimum quality metadata should every evidence item include?
2. Should evidence producer offers be scored before selection for expected evidentiary usefulness?
3. How should fiscalizers classify evidence quality after submission?
4. What labels should distinguish authentic-but-weak evidence from false, manipulated, irrelevant, or insufficient evidence?
5. When should AI-generated or AI-assisted evidence be allowed, disclosed, restricted, or rejected?
6. What corroboration rules are needed for high-risk milestones, disbursements, or closure?
7. How should repeated low-quality evidence affect the evidence producer's reputation?
8. How should useful unexpected evidence be funded or prioritized without consuming control budgets on unrelated material?
9. What happens if the fiscalizer accepted evidence that later proves false or materially weak?

## Possible future resolution direction

A future resolution may need an `Evidence Quality Review` layer or equivalent fields inside `Evidence Item` and `Fiscalization Report`.

Candidate dimensions:

- relevance to metric or claim;
- authenticity or provenance;
- independence;
- completeness;
- method quality;
- corroboration level;
- timeliness;
- privacy and consent safety;
- manipulation or AI-generation risk;
- usefulness for disbursement, closure, complaint, or reputation.

This should not become heavy pre-approval for ordinary citizen evidence. The likely rule is proportional: ordinary evidence may remain easy to submit, while paid or critical evidence used for milestone release, closure, or reputation should receive explicit quality review.

## Classification

Core v0 open question and failure mode.

The issue should be resolved before finalizing implementable evidence, fiscalization, disbursement, and reputation schemas.
