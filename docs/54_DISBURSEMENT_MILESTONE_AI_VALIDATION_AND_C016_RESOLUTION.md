# Disbursement Milestone AI Validation and C016 Resolution v0

## Purpose

This document resolves contradiction C016 from the v0 contradiction checklist.

C016 was originally framed as the problem that the model allows partial release and retention, but the criteria for partial release were not precise enough. That creates a risk that partial disbursement becomes arbitrary, manipulable, or dependent on subjective judgment after funding.

The final v0 resolution is to make disbursement milestones a structured entity and require a specialized AI validation before a project is published as financeable. The AI does not approve the social value of the project. It validates whether the milestone, metric, evidence, release amount, retention, and risk protections are coherent enough for funding and later fiscalization.

## Status

Accepted as the v0 resolution for C016.

## Core principle

> A project must not begin receiving funding until its disbursement milestones have been structurally validated as coherent, evidence-linked, and fiscalizable.

Partial disbursement is not an improvised decision during execution. It is a preconfigured rule attached to a validated milestone.

## The contradiction

The system needs partial releases because many projects cannot or should not receive all funds at once.

Partial release allows:

- payment by milestone;
- retention for incomplete work;
- correction before final release;
- lower risk to funders;
- staged accountability;
- protection against executor failure.

But partial release can become arbitrary if the project does not define in advance:

- what milestone was completed;
- what evidence proves completion;
- what amount may be released;
- what amount remains retained;
- what happens if the milestone is only partially fulfilled;
- how the fiscalizer should evaluate the milestone.

The contradiction is:

```text
The model needs partial disbursement,
but partial disbursement cannot depend on subjective judgment after the fact.
```

## Why simple milestone categories are not enough

A purely manual category system is fragile.

If the executor must choose from technical categories such as:

```text
unit-based payment
advance payment
certification milestone
physical progress milestone
service-period payment
```

then two problems appear:

```text
1. A good-faith proposer may not understand which category applies.
2. A bad-faith proposer may choose the category that unlocks the most favorable payment behavior.
```

Therefore, v0 should not depend on the proposer selecting the perfect category.

The proposer should describe the milestone in operational language.

The system should structure it and validate it through a specialized AI.

## Resolution

C016 is resolved by creating a structured Disbursement Milestone entity and requiring AI validation before financeable publication.

Accepted v0 rules:

```text
1. Every project seeking execution funding must define disbursement milestones before publication as financeable.
2. Every disbursement milestone must link payment, metric, evidence, and release condition.
3. The milestone plan must be reviewed by a specialized AI validator before the project can receive funding.
4. The AI validator does not decide whether the project is valuable.
5. The AI validator checks whether the payment structure is coherent, evidence-linked, fiscalizable, and risk-protected.
6. Critical validation failures block financeable publication until corrected.
7. Partial release is allowed only when the milestone contains a validated partial-release rule.
```

## Disbursement Milestone entity

A project may contain one or more disbursement milestones.

Minimum fields:

```text
milestone id
project id
name
description
linked value thesis component
linked project metric, if applicable
milestone-specific metric
verifiable result
measurement method
required evidence
evidence acceptance rule
responsible executor
responsible fiscalizer or fiscalization method
maximum releasable amount
percentage of execution budget
partial release allowed
partial release formula, if allowed
retention rule
condition to release retained amount
advance payment protections, if applicable
correction rule
rejection rule
citizen-facing summary
```

The milestone is not just a calendar item.

It is a payment-control object.

## Specialized AI validator

The AI validator is a system function, not a new human role.

Possible name:

```text
Milestone Configuration Validator AI
```

Its purpose is to review the coherence of the project's milestone plan before the project starts receiving funds.

The validator checks questions such as:

```text
Does every milestone describe a verifiable result?
Does the evidence actually support the claimed result?
Is the payment tied to the evidence?
Is partial release supported by a formula?
Is a supposedly divisible milestone actually measurable by parts?
Does the milestone release significant funds before meaningful evidence exists?
Is the payment better treated as an advance payment rather than completed progress?
If there is advance payment, are protections defined?
Is there adequate retention?
Can a fiscalizer reasonably evaluate this milestone?
Can a citizen understand what is being paid and why?
```

The AI should not pretend to know the exact economic value of every milestone.

It should classify disbursement risk and detect incoherent or non-fiscalizable structures.

## Validation timing

Validation must happen before the project is published as financeable.

A project may exist as a draft or design object while its milestones are being configured.

However:

```text
No validated milestone plan → no financeable publication.
No financeable publication → no execution funding.
```

This prevents citizens from funding a project whose payment structure is still unresolved.

The system may still let the proposer iterate privately or in draft mode with AI assistance.

But the project should not begin receiving execution funding until the milestone plan has passed validation.

## Validation outcome

The AI validator should classify each milestone and the overall milestone plan.

Recommended v0 outcomes:

```text
Green  — structurally coherent and financeable
Yellow — financeable only with visible warning, justification, or protection
Red    — not financeable until corrected
```

Examples of Red issues:

```text
milestone has no evidence
payment is not linked to a verifiable result
partial release is allowed but no formula exists
high early payment with only executor declaration
advance payment without protection
milestone is too vague to fiscalize
final retention is absent in a high-risk project
```

Examples of Yellow issues:

```text
large early purchase, but supplier and invoice path are identified
advance payment exists, but with guarantee or escrow
partial release depends on field verification
milestone is fiscalizable but citizen explanation needs improvement
```

Examples of Green issues:

```text
unit-based delivery with formula and evidence
service-period payment with attendance or delivery records
certification milestone with required certificate
purchase milestone with direct supplier payment and later receipt evidence
```

## Partial release rule

Partial release is allowed only if the milestone is explicitly structured for it.

Required fields:

```text
partial release allowed = true
unit or component basis
partial release formula
accepted evidence per unit or component
maximum releasable amount
retention rule
condition for remaining release
```

Example:

```text
Milestone:
Deliver 100 school kits.

Maximum releasable amount:
$10,000,000

Partial release formula:
$100,000 per verified kit.

Required evidence:
beneficiary receipt + photo or equivalent evidence + delivery list.

Result:
70 verified kits → release $7,000,000.
30 pending kits → retain $3,000,000.
```

If these fields do not exist, the milestone is not partially releasable.

## Indivisible milestone rule

Some milestones are not meaningfully divisible.

Example:

```text
Milestone:
Electrical system installed and certified.

Required evidence:
technical certificate + fiscalizer confirmation.
```

If the certificate is missing, partial release should not occur unless the project defined separable subcomponents in advance.

Accepted rule:

```text
No validated partial-release formula → no partial release.
```

## Advance payment treatment

Some projects legitimately require money before visible execution progress.

Examples:

- materials;
- equipment;
- licenses;
- permits;
- deposits;
- supplier reservations;
- logistics;
- insurance.

These should not be treated as ordinary completed-progress milestones.

They should be classified internally as protected advance payments.

A protected advance payment may require:

```text
supplier identification
quote, invoice, or purchase order
payment directly to supplier
escrow or custody
guarantee or bond
retention
receipt evidence
later verification milestone
citizen-facing justification
```

Example accepted pattern:

```text
Milestone:
Purchase 100 computers.

Release:
60% of budget.

Protection:
payment direct to supplier + invoice + later receipt verification.
```

Example rejected pattern:

```text
Milestone:
Start project.

Release:
60% of budget.

Evidence:
executor declaration.

Protection:
none.
```

The AI validator does not need to know whether the 60% amount is exactly economically correct.

It only needs to detect that the payment is early and high-risk, and therefore requires protection or reformulation.

## Relationship with project publication

There are two different states:

```text
Draft / design project
Financeable published project
```

A project may be drafted before validation.

A project may be improved through AI-assisted milestone configuration before publication.

But a project should not be published as financeable until:

```text
value thesis exists
budget exists
milestones exist
milestone metrics exist
required evidence exists
release rules exist
AI milestone validation has no unresolved Red issues
citizen-facing disbursement summary exists
```

This avoids creating a funding campaign for a project whose payment rules are still incomplete.

## Relationship with fiscalization

The AI validator does not replace fiscalization.

It validates the configuration before funding starts.

The fiscalizer later verifies execution against the validated milestone plan.

```text
AI validator → checks whether the plan is coherent before funding.
Fiscalizer → checks whether execution complied with the plan after funding.
```

The AI therefore protects funders before they commit funds, while fiscalization protects the execution process after funds exist.

## Citizen-facing explanation

The citizen should not see the full technical validation unless they choose to open details.

Simple summary:

```text
This project has passed milestone validation.
Funds will be released by verified milestones, not all at once.
```

Example milestone summary:

```text
Milestone 1 — Beneficiary registration
Releases: 20% maximum
Evidence: registration list and beneficiary confirmation
Partial release: no

Milestone 2 — Monthly service delivery
Releases: 10% per month
Evidence: attendance records and evidence producer confirmation
Partial release: yes, by month

Milestone 3 — Final report and closure
Releases: remaining retention
Evidence: fiscalizer report and closure evidence
```

For Yellow cases:

```text
This project includes an early protected payment for materials.
The payment is protected by direct supplier payment and later receipt verification.
```

For Red cases, the project should not be financeable yet.

## C016 final resolution

C016 is resolved as follows:

```text
Create a structured Disbursement Milestone entity and require specialized AI validation before a project is published as financeable. The AI does not approve the project's social value and does not estimate the exact economic value of every milestone. It checks whether milestones, evidence, release amounts, partial-release rules, retentions, and advance-payment protections are coherent enough for funding and later fiscalization. Projects with unresolved critical validation failures cannot begin receiving funding.
```

Final rule:

> No project may receive execution funding until its disbursement milestone plan has passed specialized AI validation with no unresolved critical failures.

## Documents that should eventually reflect this resolution

This resolution should inform future updates to:

- project object model;
- project creation and publication flow;
- project disbursement flow;
- project lifecycle after publication flow;
- consolidated entity/object/state map;
- AI assistance model;
- citizen funding flow;
- citizen project sheet;
- future implementable schema.

## Remaining risks

- AI validation may be wrong or overly conservative.
- Proposers may learn to game the validator.
- Some legitimate projects may be hard to express in milestone form.
- Complex projects may require domain-specific validation rules.
- Yellow cases may confuse citizens if not explained simply.
- AI validation could become a hidden bureaucratic gate if not constrained.

## Mitigations

- AI validates structure, not political or social merit;
- keep validation reasons visible to the proposer;
- allow iterative correction before publication;
- avoid requiring proposers to choose technical categories manually;
- use plain-language questions and infer internal structure;
- expose citizen-facing disbursement summaries;
- keep Red blockers limited to critical non-fiscalizable configurations;
- treat high-risk early payments as protected advances, not ordinary progress;
- update validator rules from real failure cases over time.

## Design rule

> Funding should not begin until the system can explain what will be paid, when it will be paid, what evidence proves it, and what happens if it is only partially fulfilled.