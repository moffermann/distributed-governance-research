# H059 — Public Value Return per Peso

## Status

Future extension. Not Core v0.

This idea should be considered for a second or third version of the system, after the project card, value icon catalog, metric validator, and basic evidence/fiscalization model are stable.

## Hypothesis

A distributed governance system could estimate a project's public value return per peso by quantifying the size of its measurable value commitments and comparing them against the total cost of the project.

This would allow citizens to discover projects that generate more verifiable public value per unit of public funding.

## Core idea

> Do not measure "the good" in the abstract. Measure verifiable value commitments per peso invested.

A project may generate multiple types of value:

- quantitative value;
- qualitative value;
- direct value;
- indirect value;
- short-term value;
- long-term value;
- value across different domains.

However, each declared value thesis should have measurable commitments.

The system may later use those commitments to estimate value magnitude.

## Example intuition

It is not the same to commit to helping:

```text
5 older adults
500 older adults
3,000 older adults
```

But quantity is not enough.

A project that provides weekly care to 5 older adults for a year may have a different value profile from a project that gives a one-hour talk to 500 older adults.

Therefore the system should consider not only reach, but also intensity and duration.

## Possible value dimensions

A future value estimation model may include:

- reach: number of direct beneficiaries;
- intensity: depth of benefit;
- duration: how long the benefit lasts;
- frequency: how often the benefit occurs;
- vulnerability or priority of beneficiaries;
- probability of execution;
- quality of metrics;
- quality of evidence;
- permanence or sustainability;
- direct versus indirect beneficiaries;
- cost of delivery;
- cost of control.

## Conceptual formula

A future conceptual model could estimate:

```text
public value estimate =
  reach × intensity × duration × priority factor × probability of fulfillment × measurement quality
```

Then:

```text
public value return per peso =
  public value estimate / total project cost
```

The exact formula should not be frozen in Core v0.

## Role of AI

AI may help by:

- reading the value thesis;
- identifying measurable commitments;
- extracting reach, intensity, duration, and evidence quality;
- detecting inflated or vague claims;
- normalizing comparable projects;
- suggesting missing metrics;
- explaining why a project appears to generate more or less value per peso.

However, AI should not secretly decide the moral worth of a project.

The AI should operate over explicit metrics, protocol-defined weights, visible assumptions, and auditable calculations.

## Comparability warning

A universal ranking across all projects may be misleading at first.

It is easier and safer to compare value return within similar value domains.

Examples:

```text
best value per peso in sports projects
best value per peso in adult-care projects
best value per peso in education projects
best value per peso in nature projects
```

Cross-domain comparison may be possible later, but only with transparent assumptions.

## Citizen-facing behavior

The system should not necessarily show a technical score such as:

```text
ROI: 8.7
```

A better citizen-facing expression may be:

```text
High value per peso within similar projects
```

or:

```text
This project reaches more direct beneficiaries per peso than most projects in this value category.
```

Clicking the signal should explain:

- what was counted;
- what was not counted;
- what assumptions were used;
- which projects it was compared against;
- how strong the evidence is.

## Anti-manipulation rules

Only measurable commitments should strongly affect the value-per-peso calculation.

The system should distinguish:

- direct beneficiaries committed;
- indirect beneficiaries estimated;
- potential impact;
- aspirational or non-committed claims.

A vague claim such as:

```text
Improve community wellbeing.
```

should not produce a strong value estimate unless converted into measurable commitments.

A stronger claim would be:

```text
Run 24 community workshops for at least 120 residents, with an average attendance of 60 people, and publish attendance and satisfaction evidence.
```

## Boundary

This idea is powerful but should not be implemented in the first version.

Reasons:

- it requires mature value metrics;
- it requires sufficient historical project data;
- it requires careful weighting rules;
- it can distort incentives if introduced too early;
- it may encourage proponents to inflate value claims;
- it requires explainability and anti-gaming mechanisms.

## Relationship to existing architecture

This future extension depends on:

- value icon catalog;
- mandatory metrics per value;
- metric validator;
- evidence requirements;
- fiscalization outcomes;
- project cost model;
- project completion history;
- reputation and reliability records.

## Principle

> Public value return should estimate the size of verifiable commitments per peso, not the moral worth of a project.

## Status note

Keep as extension v2/v3.

Do not include in Core v0 except as a future research direction.
