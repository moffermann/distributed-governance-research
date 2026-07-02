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
- nearby-project or followed-scope discovery view;
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
Basic
Standard
Detailed
App-only / silent
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

### Standard

Includes Basic plus operational updates.

Examples:

- fiscalizer confirmed;
- funding completed;
- affected-party consultation window opened;
- design package or plan presentation published;
- milestone completed;
- important evidence delivered;
- relevant complaint resolved;
- budget or beneficiary change.

### Detailed

Includes Standard plus deeper civic activity.

Examples:

- relevant comments;
- fiscalization reports;
- metric updates;
- evidence review status;
- affected-party observations or unresolved legitimacy issues;
- non-blocking complaints;
- project history updates.

### App-only / silent

No external push or email interruption by default. Critical civic records remain visible inside the app, the Following area, reports, or activity history.

Examples:

- material reformulation;
- pause, revocation, or closure;
- complaint or fiscalization issue requiring attention;
- funding-treatment event;
- Governance Resolution or Review Timeout Resolution affecting the followed project.

## Example UI

```text
What do you want to receive?

[Basic]
Only major changes.

[Standard]
Major changes, progress, and alerts.

[Detailed]
Milestones, evidence, relevant comments, and complaints.

[App-only]
No external interruption; critical records remain in the app.
```

Default recommendation: `Standard`.

Critical in-app records should not be disabled. The citizen can silence interruptions, but the project remains visible where the citizen can inspect what changed.

## 3. Confirmation

After selection:

```text
You are now following this project.

Level:
Standard

You can see it in:
Following

[View following]
[Back to project]
```

## 4. Automatic following after material actions

The system should automatically follow a project when a citizen performs a material action.

Material actions include:

- funding;
- offering as fiscalizer;
- offering as evidence producer;
- submitting evidence;
- submitting an affected-party observation;
- commenting;
- filing a complaint;
- confirming beneficiary participation;
- accepting a role.

Rule:

> Every material action on a project adds it to the citizen's Following area.

The citizen may later silence external notifications, but the project should not disappear from their participation history or from critical in-app civic records.

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

Stopping voluntary following should not erase material-action history. If the citizen funded, complained, submitted evidence, fiscalized, or holds another material relationship to the project, critical in-app records should remain available through that relationship even if ordinary following notifications are muted.

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
