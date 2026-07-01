# Citizen Project Dashboard Layer v0

## Purpose

This document defines Layer 2: the first view of one specific project.

Layer 2 opens when the citizen selects a project from a compact list, urgent item, search result, recommendation, or direct link.

It is not the full technical project sheet. It is a citizen-facing dashboard.

## Core principle

> Layer 2 should let the citizen understand one project quickly, see what it promises, see what it still needs, and choose how to participate.

## Main question

Layer 2 answers:

```text
What does this project promise, what does it need, and what can I do now?
```

## Recommended order

```text
1. Project header
2. Value promised
3. Who will do it
4. Project state
5. Conditions required to become execution-ready
6. Main actions
7. Signal dashboard
8. Short summary
9. Access to full project sheet
```

This order starts with public value and then shows the operational state.

## 1. Project header

Show:

- project name;
- one-sentence explanation;
- location or territory.

Example:

```text
Escuela deportiva infantil en Maipú

Entrenamientos gratuitos para 80 niños durante 6 meses.

Maipú, Región Metropolitana
```

## 2. Value promised

Show value icons near the top.

Example:

```text
Valor prometido:
👧 Infancia · ⚽ Deporte · ❤️ Salud
```

Each icon opens the value detail layer.

## 3. Who will do it

Use citizen language.

Prefer:

```text
Lo hará:
Club Deportivo Los Cóndores
```

instead of technical labels.

## 4. Project state

Show a simple state.

Examples:

- Proyecto abierto;
- Diseño en revisión;
- Construcción reservada;
- Listo para ejecutar;
- En ejecución;
- Cerrado;
- Pausado;
- Requiere reformulación.

## 5. Conditions required to become execution-ready

For open projects, show what is complete and what is missing.

Example:

```text
Para quedar listo necesita:

💰 Financiamiento
$7.560.000 de $12.000.000
Faltan $4.440.000

🛡 Fiscalización
0 de 1 fiscalizador requerido

📎 Evidencia
2 de 4 productores de evidencia comprometidos
```

Only show conditions that apply to the specific project.

Possible conditions:

- funding;
- phase gate accepted, where applicable;
- executor confirmed;
- fiscalizer required;
- evidence producers required;
- beneficiary confirmation;
- financial protection / guarantee status;
- moderation completed, if applicable;
- required documents complete.

For phased projects, show the relevant phase condition in simple language.

Example:

```text
Design phase
Under review.

Construction phase
Funding reserved.
Funds are not released until design is accepted.
```

Each condition is clickable.

The dashboard should also expose the applicable threshold policy in simple language.

Example:

```text
Threshold policy:
Medium public sports project.

Why these conditions apply:
This project builds a physical facility, uses public funding, needs public access rules, and requires independent control.

Full policy and audit trail available.
```

The citizen should see what is missing first. The deeper view can explain the policy source, operating mode, protocol version, and tutored review rule if applicable.

## 6. Main actions

Actions should be direct and contextual.

Examples:

```text
[Financiar]
[Ofrecerme como fiscalizador]
[Aportar evidencia]
[Seguir]
```

The primary action may change based on project need or entry path.

## 7. Signal dashboard

Show concrete signals as clickable numbers.

Example:

```text
👥 Beneficiarios: 80
💰 Financiadores: 1.240
👍 Supporters: 1,180
⚠ Justified objections: 18
🛡 Fiscalizadores: 0
📎 Evidencias: 12
💬 Comentarios: 35
🚩 Denuncias: 0
```

Do not show abstract judgments as the main signal. Show concrete counts and entry points.

Support and justified objections should be shown separately from funding.

Rules:

- funding shows financial feasibility;
- support shows active positive civic signal;
- justified objections show active reasoned negative civic signal;
- complaints show formal review objects.

Support and justified objection are reversible by the citizen who created them. Withdrawn signals may remain visible in detail or audit layers, but they should not count as active support or active objection.

## 8. Short summary

Layer 2 may include a very brief citizen summary.

Example:

```text
Este proyecto busca financiar una escuela deportiva gratuita para niños de Maipú. Todavía necesita completar financiamiento y confirmar fiscalización antes de estar listo para ejecutarse.
```

## 9. Full project sheet

Layer 2 should include a deliberate entry to the full citizen project sheet.

Example:

```text
[Ver ficha completa]
```

The full project sheet should not be the default first project view.

## Important alerts

Important alerts can appear in Layer 2 when they affect project status or trust.

Examples:

- falta fiscalizador confirmado;
- faltan condiciones de cierre;
- el proyecto requiere reformulación;
- existen alertas relevantes sobre el proyecto.

Alerts should be concise and clickable.

## Example full Layer 2 view

```text
Escuela deportiva infantil en Maipú

Entrenamientos gratuitos para 80 niños durante 6 meses.

Valor prometido:
👧 Infancia · ⚽ Deporte · ❤️ Salud

Lo hará:
Club Deportivo Los Cóndores

Estado:
Proyecto abierto

Para quedar listo necesita:

💰 Financiamiento
$7.560.000 de $12.000.000
Faltan $4.440.000

🛡 Fiscalización
0 de 1 fiscalizador requerido

📎 Evidencia
2 de 4 productores de evidencia comprometidos

Acciones:
[Financiar]
[Ofrecerme como fiscalizador]
[Aportar evidencia]
[Seguir]

Dashboard:
👥 Beneficiarios: 80
💰 Financiadores: 1.240
🛡 Fiscalizadores: 0
📎 Evidencias: 12
💬 Comentarios: 35
🚩 Denuncias: 0

[Ver ficha completa]
```

## Design rule

> Layer 2 is the citizen's project dashboard: value first, missing conditions second, actions third, signals always clickable.

## Status

Accepted as Citizen Project Dashboard Layer v0.
