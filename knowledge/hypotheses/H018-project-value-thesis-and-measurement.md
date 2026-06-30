# H018 — Project Value Thesis and Measurement

## Hypothesis

Every financeable project should explicitly declare its `Value Thesis` before receiving resources, along with a proportional method for verifying whether the promised value was delivered.

The core chain is:

```text
Value Thesis
→ value commitments or core metrics
→ fulfillment evidence needs
→ independent evidence-producer offers
→ fiscalization or review
→ disbursement, closure, reformulation, or reputation effect
```

## Rationale

A distributed architecture does not discover social value as one objective truth and does not impose one universal theory of value.

Instead, it lets projects propose value theses that citizens, funders, beneficiaries, fiscalizers, evidence producers, and affected parties can support, evaluate, compare, challenge, and revise.

The risk is not only that projects may lack metrics. The deeper risk is that a project may declare attractive value, define weak or input-only metrics, fail to connect those metrics to fulfillment evidence needs, or let the proposer indirectly control the fulfillment-evidence architecture.

## Value thesis

A project should declare:

- what value it claims to generate;
- for whom;
- why that value matters;
- in what time horizon;
- what commitments or core metrics express the promise;
- what fulfillment evidence needs would show fulfillment or progress;
- who or what role can legitimately evaluate it;
- what antivalue it may produce;
- what happens if it fails.

## Value commitments and metrics

Different projects require different metrics. A puppet show, a highway, a hospital, a basic science project, and a heritage preservation project should not be evaluated with the same metric set.

The metric follows the thesis of value.

Metrics should not be only input measures.

Example:

```text
Weak metric:
Buy 100 balls.

Stronger value-linked commitment:
Provide 48 free training sessions for 80 children over 6 months, with attendance, continuity, activity fulfillment evidence, and beneficiary confirmation.
```

## Fulfillment evidence needs, not preselected evidence producers

The `Project Evidential Contract` should define fulfillment evidence needs, not preselected evidence producers.

The proposer, modeler, or executor may declare:

- which value commitments must be verified;
- what type of fulfillment evidence would be useful;
- when fulfillment evidence is needed;
- which source role may produce or corroborate it;
- which consequence follows missing or failed verification.

But the proposer should not preselect the evidence producers who will later verify its own claims.

Evidence producers should submit independent offers or commitments. Each offer should identify:

- which value commitment, metric, material claim, milestone, phase, risk, or antivalue it addresses;
- what fulfillment evidence it will produce;
- how it will produce it;
- when it will produce it;
- whether it is voluntary or requires control funding;
- what relationship or conflict exists, if any;
- what limitations the fulfillment evidence has.

## Evidence priority

Fulfillment evidence that directly satisfies the accepted Project Evidential Contract should have the highest eligibility priority.

Fulfillment evidence not explicitly mentioned in the contract may still be useful, but should normally have lower priority unless a fiscalizer, reviewer, threshold policy, or protocol rule accepts it as:

- equivalent to the expected fulfillment evidence;
- necessary to verify a core value commitment;
- materially useful to a disputed claim;
- complementary and non-duplicative within the available control budget.

This prevents the control budget from being consumed by unrelated fulfillment evidence while still allowing unexpected useful information to enter the review process.

## Relationship with Value Verification Package

For every promised value, the project should define a proportional `Value Verification Package`.

The package may include:

- activity metrics;
- reach metrics;
- continuity metrics;
- quality signals;
- beneficiary confirmation;
- fulfillment evidence needs;
- expected fulfillment evidence source roles;
- fiscalizer or reviewer method;
- contradiction or complaint paths;
- risk and antivalue checks;
- closure and reputation effects.

The package is the value-specific part of the Project Evidential Contract.

It should be visible in simple form to citizens and fully auditable in Layer 5.

## Example: puppet show

If the thesis is recreation and cultural access for children, the verification package may be simple:

- functions performed;
- approximate attendance;
- fulfillment evidence of execution;
- comments from parents or teachers;
- satisfaction signals;
- absence of serious incidents;
- willingness to fund future performances.

If the thesis is educational, the package may include:

- message comprehension;
- teacher evaluation;
- before/after learning signals if proportionate.

If the thesis is heritage or cultural preservation, the package changes again.

## Example: Macul multi-court facility

For a project called:

```text
Design and Construction of Multi-court Facility in Macul
```

the value thesis is not merely:

```text
Build something.
```

It is closer to:

```text
Create usable public sports infrastructure for the community.
```

Core value commitments may include:

- two usable multi-courts;
- declared or regulation-compatible dimensions;
- public access rules;
- bathroom or accessibility commitments where promised or required;
- safety and technical reception;
- construction fulfillment evidence;
- post-completion public-use fulfillment evidence.

Corresponding fulfillment evidence needs may include:

- design package and accepted dimensions;
- reviewer or fiscalizer acceptance of the design phase;
- construction milestone fulfillment evidence;
- georeferenced photos or field records;
- technical reception or equivalent review;
- fulfillment evidence of public access and later use.

If the design phase produces incomplete courts, wrong dimensions, missing required bathrooms or accessibility commitments, or weaker public access, the issue is not a minor metric gap. It may be a failed value commitment, a design-phase failure, or a material value reformulation under C017/H021.

## Formal evaluation and social signals

The model distinguishes:

1. **Formal evaluation of fulfillment:** whether the project did what it promised, according to the value thesis, verification package, accepted fulfillment evidence, and fiscalization.
2. **Distributed signals of perceived value:** comments, recommendations, repeated support, word of mouth, community response, and willingness to finance similar projects.

Not all value should be converted into rigid KPIs.

However, no financeable project should rely on an unverifiable value thesis.

## Relationship to later resolutions

H018 is aligned with:

- C010, because value should be verified through packages, not isolated metrics;
- C017, because the value thesis and core metrics anchor project identity;
- C018, because reputation follows verified value fulfillment rather than closure labels alone;
- H022, because the Project Evidential Contract defines the fulfillment evidence needs that make verification possible;
- H023, because value claims become accountable material information claims when they affect funding, disbursement, trust, or reputation;
- C003 and C015, because independent fulfillment evidence production and publication remain distinct from evidentiary validation.

## Open risk

The quality, authenticity, relevance, AI-generation risk, and usefulness of fulfillment evidence produced by funded or approved evidence producers remains a separate open question:

- `knowledge/open-questions/evidence-producer-evidence-quality-validation.md`

That risk should not be hidden inside H018. H018 defines the value-to-fulfillment-evidence chain; the later evidence-quality resolution should define how submitted fulfillment evidence is evaluated before it supports disbursement, closure, value fulfillment, or reputation.

## Principle

> The system should not force every human experience into hard metrics. It should connect each core value promise to a proportional verification package and fulfillment evidence needs, while preserving independent fulfillment evidence production and distributed social signals of perceived value.

## Status

Aligned Core v0 hypothesis for project value theses, measurable commitments, fulfillment evidence needs, independent evidence-producer offers, and proportional value verification. Read with `knowledge/concepts/evidence-context-taxonomy-v0.md`.
