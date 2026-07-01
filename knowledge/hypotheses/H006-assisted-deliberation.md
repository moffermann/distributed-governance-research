# H006 - Assisted Deliberation Context

## Hypothesis

A distributed governance system should not only coordinate preferences. It should improve the information environment before citizens or funders make material civic decisions.

## Rationale

A common objection to distributed decision-making is that it may reduce public allocation to emotional preference or popularity. This risk is reduced if the platform structures information before decisions are made.

However, assisted deliberation must not become algorithmic authority, hidden ranking, or mandatory bureaucratic reading before participation. It should help citizens understand a decision context, not replace their judgment.

## Core v0 resolution

Core v0 should include an `Assisted Deliberation Context` for material citizen decisions.

This is a citizen-facing context surface, not a new decision authority.

It may be generated through structured data, protocol rules, human contributions, expert review, and AI assistance, but it must remain source-visible, correctable, and non-binding.

## Boundary with neighboring concepts

H006 is not H005.

H005 concerns personal AI guides aligned with an individual citizen's preferences and participation needs.

H006 concerns the common deliberative context that the platform should expose around material civic decisions, even if no advanced personal AI exists.

H006 is also bounded by C008:

```text
AI assists; the protocol decides.
```

An AI-generated summary may help a citizen understand a project, but it cannot approve, reject, rank, certify truth, allocate funds, suppress dissent, or override citizen choice.

H006 is also bounded by C025. Deliberative context may explain why a project deserves attention, but it must not become hidden discovery boosting, paid promotion, or opaque recommendation.

## Decision moments

Assisted deliberation should appear before or during material actions such as:

- funding a project;
- supporting a project;
- creating a justified objection;
- delegating allocation power;
- selecting or configuring an allocation profile;
- offering fiscalization or fulfillment/control evidence;
- funding complaint review;
- approving or objecting to a material reformulation where the protocol allows citizen input.

It should not block ordinary participation by default. The surface should be available and concise, with deeper inspection by click.

## Minimum citizen-facing structure

For ordinary citizens, the context should be simple:

```text
Why consider this
What to review carefully
Dissent / alerts / unresolved issues
```

Each item should link to its source or deeper explanation.

## Context elements

Depending on the decision, the context may summarize:

- the project's Primary Responsibility Anchor;
- promised value and value floors;
- relevant antivalue ceilings;
- budget and missing funding;
- execution-ready conditions;
- design or phase gates where applicable;
- Project Evidential Contract summary;
- fulfillment/control evidence status;
- risks and affected groups;
- material related-party declarations;
- role-comparable performance history;
- comments, justified objections, complaints, and their procedural status;
- expert, fiscalizer, beneficiary, affected-party, or authority views where available;
- alternatives, related projects, duplicates, or overlapping planning scopes where available;
- unresolved limitations or insufficient data.

The surface should not force every citizen to inspect the full audit trail before acting.

## Information-source governance

Every material deliberative item should identify its source category.

Examples:

- proposer statement;
- executor statement;
- modeler or designer deliverable;
- fiscalizer finding;
- evidence producer record;
- beneficiary experience;
- affected-party observation;
- expert review;
- public authority or tutored-mode review;
- citizen comment;
- justified objection;
- complaint status or final outcome;
- Project Closure Accountability Record;
- Performance History Surface;
- AI-generated summary or warning;
- protocol rule.

Source labels should distinguish:

- claimed;
- self-reported;
- corroborated;
- reviewed;
- disputed;
- contradicted;
- insufficient;
- corrected;
- unresolved;
- AI-generated.

## Non-authority rule

Assisted deliberation may structure context, compare sources, summarize disagreement, expose risks, and point to evidence.

It must not:

- decide the citizen's action;
- automatically allocate funds;
- certify project truth;
- approve or reject a project;
- select fiscalizers;
- suppress dissenting views;
- convert popularity into legitimacy;
- convert AI output into formal truth;
- replace fiscalization, complaint review, evaluation, or legal authority;
- hide recommendation or ordering reasons.

## AI traceability rule

When AI materially contributes to a deliberative context, the system should show that the content is AI-assisted and preserve a trace.

The trace should record:

- AI function used;
- source materials summarized;
- output or warning;
- user or reviewer correction where applicable;
- whether the output was accepted, corrected, ignored, or superseded.

This follows C008: AI may assist, but material consequences require protocol rules, citizen action, fiscalizer review, complaint process, legal authority, or another accountable decision path.

## Examples

### Macul multi-courts

For "Design and Construction of multi-courts in Macul", the deliberative context should not say:

```text
Recommended project.
```

It should say something closer to:

```text
Why consider this:
- aligned with an active sports planning scope;
- potential community and youth-sports value.

What to review carefully:
- design phase deliverables are pending;
- execution funding may be collected but cannot be released until design gate approval;
- bathrooms, dimensions, accessibility, lighting, and safety should be visible in the design package.

Dissent / alerts:
- related-party relationship declared between design and execution actors;
- objections about incomplete design should be reviewed through the phase gate, not treated as final proof.
```

The citizen remains free to fund, wait, object, follow, or inspect the project.

### Adult-care project

For an adult-care service, the deliberative context may show:

```text
Why consider this:
- addresses care continuity for older adults;
- execution actor has relevant role history.

What to review carefully:
- beneficiary verification is privacy-sensitive;
- fulfillment evidence should not expose protected personal data;
- continuity failures are a key risk.

Dissent / alerts:
- family feedback is experiential unless reviewed;
- complaints are procedural until founded or resolved.
```

## Bias controls

- show source categories;
- label AI summaries;
- show relevant dissent without treating every unsupported claim as proven;
- expose unresolved information gaps;
- allow correction or contradiction;
- preserve audit links;
- avoid one universal score;
- avoid hidden recommendation effects;
- keep the citizen-facing layer concise.

## Status

Aligned Core v0 hypothesis.
