# Citizen Project Card v0

## Purpose

This document defines the first citizen-facing layer of a project.

The goal is not to expose the full technical project object. The goal is to give ordinary citizens a simple, concrete, and clickable dashboard of the most relevant project signals.

## Core decision

The first layer should not show abstract system labels such as:

```text
risk: medium
complexity: normal
fiscalization: included
```

These labels require interpretation and may confuse ordinary citizens.

Instead, the first layer should show concrete, countable, and explorable signals:

```text
beneficiaries
funders
supporters
justified objections
fiscalizers
comments
complaints
evidence
funding progress
```

Each signal acts as a direct access point into the deeper layer.

## Design principle

> The first project layer should be a dashboard of concrete signals, not a summary of technical judgments.

The citizen should not need to understand technical categories before deciding whether to inspect, fund, follow, delegate, or report a problem.

## Citizen project card

A project card should include:

- project name;
- one-sentence explanation;
- main responsibility;
- location;
- who will do it;
- compact role-performance history for the responsible actor where available;
- funding progress;
- remaining amount;
- closing deadline;
- visible warnings where relevant;
- signal dashboard;
- primary action button;
- secondary detail action.

## Example card

```text
Escuela deportiva infantil en Maipú

Entrenamientos gratuitos para 80 niños durante 6 meses.

Responsabilidad principal:
Actividad deportiva gratuita y sostenida para 80 niños.

Lo hará:
Club Deportivo Los Cóndores

Historial como ejecutor:
12 proyectos cerrados, 2 parciales o incumplidos, evidencia usualmente suficiente.

Financiamiento:
$7.560.000 reunidos de $12.000.000
Faltan $4.440.000
Cierra en 8 días

Dashboard:
👥 Beneficiarios: 80
💰 Financiadores: 1.240
👍 Supporters: 1.180
⚠ Justified objections: 18
🛡 Fiscalizadores: 2
💬 Comentarios: 35
🚩 Denuncias: 0
📎 Evidencias: 12

Warnings:
Declared relationship: the executing club will also use the facility under public access rules.

[Financiar]
[Ver detalle]
```

## Dashboard signals

### Beneficiaries

Shows how many people or organizations are declared as direct beneficiaries.

Clicking opens:

- beneficiary description;
- beneficiary count;
- territory;
- selection criteria;
- confirmation status;
- beneficiary evidence or feedback if available.

### Funders

Shows how many citizens or organizations have funded the project.

Clicking opens:

- number of funders;
- funding distribution;
- amount funded;
- average contribution where useful;
- delegated versus direct funding where useful;
- number of funders who offered to provide evidence.

Funding is a financial signal. It should not be treated as a larger social-support vote merely because the amount is larger.

### Supporters

Shows active civic support for the project.

Clicking opens:

- active support count;
- withdrawn support count as historical context where useful;
- supporter diversity summary where appropriate;
- whether support is a threshold condition for this project;
- action to support or withdraw support.

Support is reversible. Withdrawing support does not withdraw committed funding.

### Justified objections

Shows active structured objections to the project.

Clicking opens:

- active objection count;
- withdrawn objection count as historical context where useful;
- objection categories;
- whether any objection has been converted into a formal complaint;
- current response or resolution status;
- action to object with reason or withdraw an objection.

A justified objection is not a simple dislike and is not a formal complaint by default. It is a reversible civic signal that identifies a reasoned concern.

### Fiscalizers

Shows how many responsible fiscalizers are associated with the project.

Clicking opens:

- who fiscalizes;
- fiscalizer reputation;
- declared independence;
- scope of fiscalization;
- reports;
- pending reviews;
- conflict declarations if any.

### Related-party warnings

Shows whether the project has declared, alleged, or unresolved related-party conflict signals.

Clicking opens:

- relationship summary;
- severity classification;
- required safeguards;
- independent control requirement;
- objections or complaint links if any;
- current effect: warning, safeguards required, reformulation, blocked, rejected, or under responsibility review.

Example:

```text
Related-party warning:
Declared low or indirect conflict.

Reason:
The local sports club proposing the project will also use the facility.

Safeguards:
Public access rules and independent control required.
```

### Comments

Shows number of comments or observations.

Clicking opens:

- citizen comments;
- questions;
- observations;
- executor responses;
- highlighted unresolved issues;
- community discussion.

### Complaints

Shows number of complaints or denunciations.

Clicking opens:

- open complaints;
- resolved complaints;
- rejected complaints;
- current status;
- severity where applicable;
- effects on project state if any.

### Fulfillment evidence

Shows number of fulfillment evidence items associated with the project.

Clicking opens:

- evidence committed;
- evidence delivered;
- evidence reviewed;
- executor evidence;
- beneficiary evidence;
- funder evidence;
- paid evidence missions;
- fiscalizer reports;
- disputed evidence.

## Evidence by project stage

The meaning of the evidence count may vary by stage.

Before execution:

```text
evidence commitments
```

During execution:

```text
evidence delivered
```

After execution:

```text
evidence reviewed or final evidence
```

The first layer may simply show "Evidence" with a count, while the detail layer explains the status.

## Funding display

The first layer should show:

- total required amount;
- amount already funded;
- amount remaining;
- deadline or time remaining;
- funding progress bar.

Example:

```text
$7.560.000 reunidos de $12.000.000
Faltan $4.440.000
Cierra en 8 días
```

This is clearer than showing only a percentage.

## First-layer language

Use citizen language rather than technical system language.

Prefer:

```text
Lo hará
Cómo va el financiamiento
Faltan
Beneficiarios
Fiscalizadores
Comentarios
Denuncias
Evidencias
```

Avoid in the first layer:

```text
executor
risk level
project complexity
fiscalization regime
evidence architecture
control package
protocol status
```

These may appear in deeper layers.

## Why this works

This design gives direct access to the most important project elements without forcing the citizen to understand technical abstractions.

The citizen can immediately inspect:

- who benefits;
- who funds;
- who controls;
- what people are saying;
- whether there are complaints;
- what evidence exists;
- how much funding is still needed.

The card is simple, but each number opens a deeper layer.

## Principle

> The first layer should not tell the citizen what to think. It should expose concrete signals that the citizen can inspect.

## Status

Accepted as Citizen Project Card v0 foundation.
