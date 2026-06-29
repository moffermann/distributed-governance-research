# H059 — Public Value Return per Peso

## Status

Extension v2/v3 analytical hypothesis aligned with [[../../docs/59_CORE_ADMINISTRATIVE_OBSERVABILITY_BASELINE_AND_C021_RESOLUTION|C021]] and [[../../docs/63_PROJECT_DISCOVERY_VISIBILITY_USER_CUSTOMIZATION_AND_C025_RESOLUTION|C025]]. Not Core v0.

This idea should be considered for a second or third version of the system, after the project card, value icon catalog, metric validator, and basic evidence/fiscalization model are stable.

H059 must not become a single moral score, a universal ranking of all projects, an automatic funding rule, or an opaque recommendation engine. It may become a future explainable comparison signal only when the measured commitments, assumptions, evidence quality, comparison set, and limits are visible and auditable.

## Hypothesis

A distributed governance system could estimate a project's public value return per peso by quantifying the size of its measurable value commitments and comparing them against the total cost of the project.

This could help citizens, auditors, researchers, and administrators compare projects that generate more verifiable public value per unit of public funding within comparable domains.

It should not claim to measure the moral worth of a project or decide which project deserves funding.

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

Even in a future version, the formula should remain decomposable. Users and auditors should be able to see which variables contributed to the signal and which assumptions were applied.

Rejected pattern:

```text
Project score:
  8.7 / 10

Interpretation:
  This is objectively better than all other projects.
```

Accepted pattern:

```text
Signal:
  High verifiable value per peso within comparable sports projects.

Explanation:
  Based on declared direct beneficiaries, duration, evidence quality,
  comparable project costs, control costs, and execution probability.
```

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

AI may assist comparison, but it should not become the sovereign ranking authority.

Required AI boundaries:

- explain which commitments were extracted;
- separate committed value from aspirational claims;
- show the comparison group used;
- expose confidence and evidence-quality limits;
- preserve human and civic auditability;
- allow users to ignore, inspect, or disable value-per-peso recommendations where implemented.

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

Example of safer comparison:

```text
Project A:
  Sports equipment for 20 local clubs.

Project B:
  Sports equipment for 5 local clubs.

Comparison:
  Same value domain, similar deliverable type,
  comparable cost and evidence requirements.
```

Example of risky comparison:

```text
Project A:
  Sports equipment for local clubs.

Project B:
  Weekly care for older adults.

Project C:
  River restoration.

Risk:
  Reducing these to one universal value-per-peso rank
  hides value judgments across very different domains.
```

The system should prefer domain-scoped comparison before attempting cross-domain analysis.

## Discovery and recommendation boundary

If H059 is later used in discovery, it must follow C025.

Allowed:

```text
Shown because:
  high verifiable value per peso within similar adult-care projects.

User action:
  the citizen can inspect the explanation, ignore the signal,
  change ordering mode, search manually, or disable/reduce
  this recommendation type where implemented.
```

Not allowed:

```text
The platform silently ranks every project by hidden value score.

The value-per-peso signal automatically allocates funding.

Projects can pay to improve value-per-peso visibility.

An administrator manually boosts a project by citing value return
without a visible protocol reason and audit trail.
```

Discovery remains discovery. Funding still requires explicit citizen action, delegation, or a citizen-configured automatic profile.

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

It should also explain:

- whether the comparison is within the same value domain;
- whether beneficiaries are direct, indirect, or estimated;
- whether evidence has been verified, self-reported, or only promised;
- whether control costs are included;
- whether the project is new or has historical completion data.

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

The model should also discount or flag:

- unusually inflated reach claims;
- weak evidence requirements;
- missing control costs;
- low execution probability;
- unclear beneficiary definitions;
- non-comparable project categories;
- claims that cannot be verified after execution.

## Boundary

This idea is powerful but should not be implemented in the first version.

Reasons:

- it requires mature value metrics;
- it requires sufficient historical project data;
- it requires careful weighting rules;
- it can distort incentives if introduced too early;
- it may encourage proponents to inflate value claims;
- it requires explainability and anti-gaming mechanisms.

Additional boundary:

- it should not be part of Core v0 project eligibility;
- it should not be required on the ordinary citizen project card;
- it should not replace simple user-facing signals;
- it should not replace the C021 administrative observability baseline;
- it should not become a single hidden platform success score;
- it should not define political thresholds for budget migration or institutional transition.

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

> Public value return should estimate the size of verifiable commitments per peso within transparent comparison limits, not the moral worth of a project or a universal ranking of public value.

## Research note

Keep as extension v2/v3.

Do not include in Core v0 except as a future research direction.

Future work should define domain-specific comparison rules, evidence-quality weights, anti-gaming tests, privacy constraints, audit exports, user controls, and clear separation between analytical signals, discovery ordering, and explicit citizen funding decisions.
