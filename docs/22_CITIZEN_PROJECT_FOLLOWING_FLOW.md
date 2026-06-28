# Citizen Project Following Flow v0

## Purpose

This document freezes the flow for following a project.

Following is a lightweight participation action. It allows a citizen to observe a project, receive notifications, and return to it later without funding it or taking responsibility for it.

## Core principle

> Following a project does not fund, approve, vote, validate, block, or fiscalize it. It only creates an observation and notification relationship between the citizen and the project.

## Main question

```text
How can I keep track of this project without funding or taking another role?
```

## Entry points

A citizen can follow a project from:

- compact project list;
- project dashboard;
- signal detail panel;
- full citizen project sheet;
- urgent project highlight;
- search result;
- recommendation;
- after funding, commenting, denouncing, fiscalizing, or producing evidence.

Visible button:

```text
[Seguir]
```

## Flow steps

```text
1. Citizen clicks Follow
2. System explains what following means
3. Citizen selects notification level
4. Project is added to Following
5. Citizen can adjust notifications or stop following
```

## 1. Follow action

When the citizen clicks `Seguir`, the system should show a short explanation.

Example:

```text
Seguir proyecto

Proyecto:
Escuela deportiva infantil en Maipú

Seguir este proyecto no asigna dinero.
Sólo lo agrega a tu seguimiento y te permite recibir avisos.
```

## 2. Notification level

The citizen should choose a simple notification level.

Recommended levels:

```text
Básico
Normal
Detallado
```

### Basic

Only major changes.

Examples:

- project becomes execution-ready;
- project enters execution;
- project closes;
- project is paused;
- project is reformulated;
- blocking complaint appears.

### Normal

Includes Basic plus operational updates.

Examples:

- fiscalizer confirmed;
- funding completed;
- milestone completed;
- important evidence delivered;
- relevant complaint resolved;
- budget or beneficiary change.

### Detailed

Includes Normal plus deeper civic activity.

Examples:

- relevant comments;
- fiscalization reports;
- metric updates;
- evidence review status;
- non-blocking complaints;
- project history updates.

## Example UI

```text
¿Qué quieres recibir?

[Básico]
Sólo cambios importantes.

[Normal]
Cambios importantes, avances y alertas.

[Detallado]
Hitos, evidencias, comentarios relevantes y denuncias.
```

Default recommendation: `Normal`.

## 3. Confirmation

After selection:

```text
Ahora sigues este proyecto.

Nivel:
Normal

Podrás verlo en:
Seguimiento

[Ver seguimiento]
[Volver al proyecto]
```

## 4. Automatic following after material actions

The system should automatically follow a project when a citizen performs a material action.

Material actions include:

- funding;
- offering as fiscalizer;
- offering as evidence producer;
- submitting evidence;
- commenting;
- filing a complaint;
- confirming beneficiary participation;
- accepting a role.

Rule:

> Every material action on a project adds it to the citizen's Following area.

The citizen may later silence notifications, but the project should not disappear from their participation history.

## 5. Following area

The `Following` tab should include projects that the citizen:

- follows voluntarily;
- funded;
- comments on;
- denounced;
- fiscalizes;
- provides evidence for;
- receives notifications about;
- participates in as beneficiary or affected party where applicable.

Projects should be filterable by relationship:

```text
Following
Funded
Fiscalizing
Evidence
Comments
Complaints
Beneficiary
```

## 6. Stop following

When a citizen stops following:

```text
Dejar de seguir

Ya no recibirás avisos de este proyecto.

Si tienes fondos comprometidos, dejar de seguir no retira tu aporte.
Si tienes una responsabilidad aceptada, dejar de seguir no renuncia a esa responsabilidad.
```

The system must avoid confusion between notification status and substantive action.

## What following should not do

Following should not:

- fund the project;
- count as approval;
- count as a vote;
- validate the project;
- create fiscalization responsibility;
- block the project;
- withdraw previously committed funds;
- resign accepted roles.

## Design rule

> Following is low-friction civic observation. It keeps the project visible without creating substantive responsibility.

## Status

Accepted as Citizen Project Following Flow v0.
