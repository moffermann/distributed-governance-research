# Value Icon Catalog and Metric Validator Model v0

## Purpose

This document consolidates the model for representing a project's promised social value through icons, value theses, metrics, evidence, and AI-assisted classification.

The goal is to make value visible and understandable in the citizen-facing project card, while preventing icons from becoming empty marketing labels.

## Core idea

> A value icon is not decoration. It is a visible representation of a measurable promise of value.

Every project must display at least one value icon in the citizen-facing layer.

Each value icon must connect to:

- a value name;
- a value thesis;
- an intended beneficiary or affected group;
- scope;
- mandatory metrics;
- optional metrics if applicable;
- fulfillment evidence needs;
- expected source roles or corroboration requirements;
- verification method;
- status of fulfillment.

## Why value icons are necessary

The project card should not only show participation signals such as funders, beneficiaries, fiscalizers, comments, complaints, and evidence.

It should also show what social value the project promises to generate.

Example:

```text
Escuela deportiva infantil en Maipú

Value promised:
👧 Infancia · ⚽ Deporte · ❤️ Salud
```

This allows citizens to understand the project's public value before reading the full technical design.

## Category versus value thesis

The project category is not the same as the value thesis.

Example:

```text
Category:
  Deporte

Value thesis icons:
  👧 Infancia
  ⚽ Deporte
  ❤️ Salud
  👥 Comunidad
```

A sports project may create value in childhood, health, social integration, safety, or community cohesion.

The value icons represent the benefits promised, not merely the administrative category.

## Icon ambiguity problem

Icons can be interpreted differently by different people.

Example:

```text
🏠
```

could mean:

- housing;
- home;
- family;
- neighborhood;
- construction;
- community.

Therefore, an icon should not appear alone. It should be attached to a named value.

Prefer:

```text
👥 Comunidad
🏠 Vivienda
```

not just:

```text
👥
🏠
```

## Catalog of value icons

The system should maintain a living catalog of value icons.

Each catalog item includes:

- value code;
- value name;
- icon;
- definition;
- when it applies;
- when it does not apply;
- mandatory metrics;
- optional metrics;
- fulfillment evidence requirements;
- examples of correct use;
- examples of incorrect use;
- related values;
- origin: official, AI-generated, project-specific, or later standardized.

## Mandatory metrics

Each value icon carries mandatory metrics.

When a proponent selects or accepts a value icon, the proponent also accepts the metric obligations associated with that value.

Example:

```text
Value:
  ⚽ Deporte

Mandatory metrics:
  - number of participants;
  - number of sessions or activities;
  - attendance or participation rate;
  - duration of the program;
  - continuity or permanence where applicable;
  - evidence of activity;
  - beneficiary confirmation where applicable.
```

This prevents projects from using value icons as marketing symbols without measurable commitments.

## Example: Deporte

```text
Value:
  Deporte

Icon:
  ⚽

Definition:
  Projects that increase, improve, or sustain sports, physical activity, recreation, or sports training.

Mandatory metrics:
  - number of participants;
  - number of sessions or activities performed;
  - attendance or participation;
  - program duration;
  - beneficiary population;
  - evidence of activity.

Fulfillment evidence:
  - attendance records;
  - activity calendar;
  - photos or videos;
  - beneficiary confirmation;
  - execution report.
```

Subtypes may refine metrics:

```text
Deporte / Escuela deportiva:
  - attendance;
  - sessions;
  - permanence.

Deporte / Infraestructura deportiva:
  - infrastructure completed;
  - technical reception;
  - availability for use;
  - maintenance plan;
  - evidence of later use.

Deporte / Campeonato:
  - number of teams;
  - number of matches;
  - attendance;
  - safety measures;
  - completion of schedule.
```

## Example: Educación

```text
Value:
  Educación

Icon:
  📚

Mandatory metrics:
  - number of participants;
  - hours of education or training delivered;
  - attendance;
  - completion or permanence;
  - learning, progress, or skill acquisition where applicable;
  - participant satisfaction where applicable.
```

## Example: Adulto mayor

```text
Value:
  Adulto mayor

Icon:
  🧓

Mandatory metrics:
  - number of older adults benefited;
  - frequency of attention or participation;
  - continuity of support;
  - type of support delivered;
  - beneficiary confirmation;
  - wellbeing, satisfaction, or need-addressed indicator where applicable.
```

## Example: Naturaleza

```text
Value:
  Naturaleza

Icon:
  🌳

Mandatory metrics:
  - area intervened or protected;
  - natural elements involved;
  - actions performed;
  - maintenance commitment;
  - territorial evidence;
  - follow-up evidence where applicable.
```

Planting trees, for example, should not be measured only by trees planted. It may also require survival, watering, maintenance, and later verification.

## AI-assisted value classification

The system should use AI to help proponents map their value thesis to the correct value icon.

There should be at least three AI-assisted components:

```text
1. AI value searcher
2. AI value generator
3. Metric validator
```

## 1. AI value searcher

The AI value searcher reads the value thesis and tries to match it to existing catalog values.

It should search first before generating anything new.

Purpose:

- prevent duplicate icons for similar values;
- preserve a common visual language;
- suggest existing value icons with confidence;
- explain why a value icon applies.

Rule:

> If an existing catalog value matches with sufficient confidence, the system should suggest the existing value rather than generating a new one.

This avoids unnecessary duplicates such as:

```text
⚽ Deporte
🏃 Actividad física
🥅 Fútbol formativo
👟 Movimiento infantil
```

when the project may simply belong under Deporte or a Deporte subtype.

## 2. AI value generator

The AI value generator is invoked only when the AI value searcher cannot find a sufficiently confident match in the catalog.

It may propose:

- value name;
- icon;
- definition;
- mandatory metrics;
- optional metrics;
- fulfillment evidence requirements;
- related existing values;
- project-specific scope.

Example:

```text
Project thesis:
  Create an oral archive of local fishers' memories about coastal change.

Generated value:
  Memoria costera

Generated icon:
  🗣️🌊

Mandatory metrics:
  - number of testimonies recorded;
  - hours of audio or video archived;
  - number of participants interviewed;
  - percentage of material cataloged;
  - public access to the archive;
  - validation by participants or local community.
```

Generated values can enter the catalog even if they are used only once.

The problem is not having many icons. The problem is having many different icons for the same or highly similar value.

## No project without a value icon

A published project should not appear without a value icon.

A project without value icons would look incomplete, confusing, or visually inconsistent in the citizen-facing experience.

Therefore:

> Every published project must have at least one value icon, either from the catalog or generated by AI and accepted with metrics.

## Generated icons and catalog entry

If the AI value generator proposes a custom icon and the proponent accepts the associated metrics, the value can enter the catalog as a generated or project-specific value.

It does not need broad use to exist.

Some projects may have rare, specific, or unusual value promises.

The catalog is therefore living and extensible.

## Metric validator

The metric validator determines whether the metrics associated with a value thesis are acceptable.

It should be hybrid:

```text
hard rules + AI semantic evaluation + community observation when needed
```

It should not be a single AI that decides everything.

## Hard-rule validation

Hard rules check minimum structure:

- Does the metric have a number or measurable target?
- Does it define beneficiaries or affected group?
- Does it define a timeframe?
- Does it define a unit of measurement?
- Does it define required evidence?
- Is the evidence possible to verify?

Example of weak metric:

```text
Improve children's lives.
```

Example of stronger metric:

```text
Provide 48 free training sessions for 80 children in Maipú over 6 months, with at least 70% average monthly attendance.
```

## AI semantic validation

The AI component checks whether the metric actually measures the declared value.

Example:

```text
Declared value:
  ⚽ Deporte

Metric:
  Buy 100 balls.
```

The validator should detect that buying balls measures an input, not the sports value itself. It may suggest adding attendance, sessions, use, participation, or beneficiary confirmation.

## Catalog metric validation

If the value already exists in the catalog, the validator compares the project metrics against the mandatory metrics of that value.

If mandatory metrics are missing, the system asks for correction.

Example:

```text
For Deporte, you must include participation or attendance.
```

## Evidence validation

Metrics must be linked to evidence.

A metric is not enough if there is no way to verify it.

The validator asks:

- What fulfillment evidence need would verify this?
- Which source role could produce or corroborate it?
- When is evidence expected?
- Can the evidence be contradicted or audited?
- Is the evidence proportional to the value claim?

These answers should become part of the Project Evidential Contract.

The validator should not merely ask whether a fulfillment evidence item exists. It should check whether the proposed fulfillment evidence is coherent with the value, metric, beneficiary group, risk, and milestone being claimed.

The validator should not require the proposer to name or control the future evidence producer. The proposer defines the fulfillment evidence need; independent evidence producers later submit offers or commitments tied to specific metrics, claims, milestones, phases, risks, or antivalues.

Evidence-producer offers that satisfy an accepted contract need should receive higher eligibility priority. Unexpected fulfillment evidence may still be admissible if a fiscalizer, reviewer, or protocol rule accepts it as equivalent, necessary, materially useful, or complementary within the available control budget.

Example:

```text
Value:
Sports participation for children.

Metric:
80 children with 70% average monthly attendance.

Weak evidence:
photos of one training day.

Stronger contract:
attendance records, monthly beneficiary confirmation, activity photos, evidence-producer observation, and fiscalizer review.
```

For technical or regulated projects, value-catalog fulfillment evidence requirements may point to external standards, permits, technical measurements, or competent-authority review. The platform should record the requirement and boundary, not pretend that a generic app rule can replace domain-specific review.

## Validator result

The validator should return simple results for the proponent:

```text
Approved
Requires adjustments
Weak or not verifiable
```

With explanations such as:

```text
The metric is clear, but lacks evidence.
The metric measures an input, not the declared value.
The metric is not connected to the selected value.
The metric satisfies the minimum requirements.
```

## Disagreement with generated metrics

If the AI value generator proposes metrics and the proponent disagrees, the proponent should not be allowed to ignore the metrics and keep the value icon as marketing.

The proponent may:

- accept the suggested metrics;
- rewrite the value thesis;
- choose another catalog value;
- propose alternative metrics;
- remove the value from the project.

Alternative metrics are then evaluated by the metric validator.

If they pass, the value can be accepted with the alternative metric set.

If they fail, the system asks for reformulation.

## Rule against unmeasured value

> The proponent may dispute or improve metrics, but cannot declare a value without accepting a reasonable way to measure and verify it.

## Citizen-facing behavior

Citizens do not need to see the internal AI search, generation, validation, or disagreement process.

Citizens see:

```text
Value promised:
👧 Infancia · ⚽ Deporte · 🗣️ Memoria costera
```

When they click a value, they see:

- what value is promised;
- who it benefits;
- the committed scope;
- mandatory metrics;
- project-specific targets;
- how it will be verified;
- current fulfillment status.

## Example citizen detail

```text
Value:
  ⚽ Deporte

What this project promises:
  Free football training for children in Maipú.

Scope:
  80 children between 8 and 13 years old.

Committed targets:
  - 2 sessions per week;
  - 6 months of operation;
  - 70% average monthly attendance.

How it will be verified:
  - attendance records;
  - photos or videos of sessions;
  - beneficiary confirmation;
  - fiscalizer review.
```

## Relationship to project card

The project card should include value icons in the first layer.

Example:

```text
Escuela deportiva infantil en Maipú

Entrenamientos gratuitos para 80 niños durante 6 meses.

Valor prometido:
👧 Infancia · ⚽ Deporte · ❤️ Salud

Financiamiento:
$7.560.000 de $12.000.000
Faltan $4.440.000
```

The icons are entry points into value detail, just as fiscalizers, comments, complaints, evidence, funders, and beneficiaries are entry points into their respective details.

## Principle

> Search first. Generate only when necessary. Accept an icon only with metrics. Allow metric disagreement, but never allow unmeasured value.

## Status

Accepted as Value Icon Catalog and Metric Validator Model v0.
