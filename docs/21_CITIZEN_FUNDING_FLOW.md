# Citizen Funding Flow v0

## Purpose

This document freezes the citizen funding flow: what happens when a citizen chooses to fund a project.

Funding is one of the central actions of the distributed governance system. The flow must be simple for the citizen but clear about the state of money, release conditions, commitment, failure handling, reformulation, and follow-up.

## Core principle

> Funding is a conditional, traceable commitment until project closure. It is not an immediate transfer of money to the executor and not a freely reversible expression of preference.

For phased projects, funding may be attached to a phase-specific lane. A citizen may fund a design phase, an execution phase, a minimum control package, or supplemental control where allowed.

Execution-phase funding may be accepted while a required design phase is still pending, but it remains reserved or conditional. It cannot be released for construction or execution until the design phase gate is accepted.

## Main question

The flow answers:

```text
What happens when I assign part of my civic allocation to this project?
```

## Entry points

A citizen may enter the funding flow from:

- Layer 1: compact project list;
- Layer 2: project dashboard;
- Layer 3: funding detail;
- Layer 4: full citizen project sheet;
- urgent project highlight;
- search result;
- recommendation.

The visible button may say:

```text
[Financiar]
```

or, where more precise language is needed:

```text
[Asignar fondos]
```

For ordinary citizen use, `Financiar` is the preferred primary label.

## Flow steps

The funding flow has six steps:

```text
1. Entry from the Fund button
2. Amount selection
3. Simple summary before confirmation
4. Funding confirmation
5. Post-confirmation money status
6. Automatic project following
```

If active delegation governs the citizen's allocation, the delegate has priority over automatic allocation rules for that delegated balance or scope. A manual citizen funding action may still be allowed only where the delegated scope or country implementation rules permit it.

## 1. Entry from the Fund button

The citizen clicks a funding action from a project surface.

The flow should preserve context: the citizen should know which project they are funding and where they came from.

## 2. Amount selection

The first screen should be simple.

Example:

```text
Financiar proyecto

Proyecto:
Escuela deportiva infantil en Maipú

Tienes disponible este mes:
$42.000

Este proyecto necesita:
$4.440.000 más para completar financiamiento.

¿Cuánto quieres asignar?

[$5.000] [$10.000] [$20.000]
[Otro monto]

[Continuar]
```

For phased projects, the amount screen should show the funding lane.

Example:

```text
Action:
Financiar proyecto

Project:
Design and Construction of Multi-court Facility in Macul

Phase:
Construction

Status:
Design under review.

Your contribution remains reserved for construction.
It is not released to the executor until the design is accepted.
```

The available amount shown to the citizen comes from the citizen's civic allocation account for the relevant period and program.

That amount may be calculated by different institutional formulas, including:

```text
equal for all eligible citizens;
proportional to declared taxes or validated contribution;
inversely proportional to declared taxes, vulnerability, or priority status;
hybrid formula;
external authorized amount provider.
```

The citizen-facing explanation should remain simple.

Example:

```text
Available this month:
$42,000

Why:
This sports program assigns the same amount to every eligible citizen.
```

If the formula uses sensitive external data, the platform should show only the authorized amount, formula version, provider/audit reference where appropriate, and plain-language explanation. It should not show or store the citizen's full tax declaration or sensitive source record.

## Amount rules

The system should enforce simple rules:

- the citizen cannot assign more than their available civic allocation;
- the citizen cannot assign more than the project still needs, unless the protocol allows controlled overfunding;
- the citizen can assign their full available balance;
- the citizen can cancel before confirming;
- the system should show the remaining citizen balance after the selected amount.
- where phases exist, the system should show which phase or funding lane the contribution affects.

Controlled overfunding should not increase the executor's execution budget by default.

After the execution budget and minimum admissible control package are closed, the project may accept only designated supplemental control contributions when admissible control needs remain.

Supplemental control contributions may fund:

- one secondary fiscalizer or fiscalization auditor;
- distinct additional evidence producers or evidence missions.

They should be rejected when:

- the project already has a primary and secondary fiscalizer;
- no distinct admissible evidence need remains;
- the contribution would function as ordinary execution overfunding;
- the contribution would create duplicate evidence or unlimited fiscalization.

Phase-specific funding should not silently move between phases. A design contribution should not become construction money, and a construction contribution should not pay design work, unless the active reformulation or failure-treatment rule explicitly allows reassignment and records the change.

## 3. Summary before confirmation

Before confirming, the citizen should see a clear summary.

Example:

```text
Resumen

Vas a asignar:
$10.000

Al proyecto:
Escuela deportiva infantil en Maipú

Tu aporte quedará:
Comprometido, no liberado al ejecutor.

Se liberará sólo si:
- el proyecto completa su financiamiento;
- cumple sus condiciones de cierre;
- si tiene fases, la fase previa requerida fue aprobada;
- tiene fiscalización requerida;
- no tiene denuncias bloqueantes;
- avanza por hitos con evidencia.

[Confirmar aporte]
[Volver]
```

If the contribution is for supplemental control, the summary should say so explicitly:

```text
This contribution funds supplemental control.

It does not increase the executor's budget.
It may fund a secondary fiscalizer, fiscalization audit, or distinct additional evidence if an admissible offer exists.
If no admissible control need remains, the contribution will not be accepted.
```

If the contribution is for a later execution phase while design is pending, the summary should say so explicitly:

```text
This contribution funds the construction phase.

Current gate:
Design phase pending review.

Your contribution is reserved.
It cannot be released for construction unless the design package is accepted.
If the design is rejected or materially changes the promise, the active policy defines whether funds return, reassign, remain reserved after reconfirmation, or follow a reformulation rule.
```

## 4. Funding confirmation

After confirmation, the citizen receives a simple confirmation.

Example:

```text
Aporte confirmado

Asignaste:
$10.000

Estado:
Comprometido, no liberado.

Este proyecto ahora aparece en tu seguimiento.

Te avisaremos cuando:
- complete financiamiento;
- consiga fiscalizador;
- quede listo para ejecutar;
- empiece ejecución;
- entregue evidencia;
- tenga denuncias relevantes;
- cierre, se pause o se reformule.

[Ver proyecto]
[Ver mis seguimientos]
[Seguir explorando]
```

For phase-specific funding, confirmation should preserve the phase status:

```text
Status:
Reserved for construction phase.

Gate:
Design review pending.
```

## 5. Post-confirmation money status

The citizen should always be able to see the status of their contribution.

Possible states:

```text
Comprometido
Reservado
Reservado para fase
Liberado parcialmente
Liberado totalmente
Devuelto
Reasignado
Pausado
En revisión
```

The interface should show the current state and a short explanation.

Example:

```text
Tu aporte:
$10.000

Estado:
Comprometido

Qué significa:
Tu aporte cuenta para financiar el proyecto, pero todavía no se entrega al ejecutor.
```

For supplemental control contributions, the status should distinguish control from execution:

```text
Your contribution:
$10,000

Status:
Reserved for supplemental control

Meaning:
This contribution can fund additional fiscalization or distinct evidence. It cannot be released to the executor.
```

For phase-specific execution commitments, the status should distinguish reservation from release:

```text
Your contribution:
$10,000

Status:
Reserved for construction phase

Meaning:
This contribution counts toward construction funding, but construction funds cannot be released until the design phase is accepted.
```

## 6. Automatic following

Funding a project automatically adds it to the citizen's following area.

```text
Financiar implica seguir automáticamente el proyecto.
```

The citizen may later adjust notification preferences, but the project should not disappear after funding. External interruptions may be muted, but critical in-app records for reformulation, pause, revocation, closure, complaint, fiscalization, or fund-treatment events should remain visible.

Funding should remain separate from civic support.

The system may ask whether the citizen also wants to support the project publicly as a civic signal, but financial amount should not count as extra social legitimacy.

Example:

```text
You funded this project.

Do you also want to show civic support?

[Support project]
[Not now]
```

If the citizen later withdraws support, the funding commitment remains governed by the funding, reformulation, failure, and closure rules.

## Release rule

Funds are not released to the executor just because a citizen funds the project.

Funds can be released only after the applicable project conditions are met and according to the milestone, evidence, and fiscalization rules.

For phased projects:

```text
Design funds:
  release only against accepted design deliverables.

Execution funds:
  release only after required prior phase gates are accepted
  and the execution phase satisfies its threshold, control, evidence, and milestone rules.
```

## Withdrawal and reassignment rule

Ordinary withdrawal is not available after the citizen finances a project.

Recommended rule:

```text
After funding:
  the contribution remains committed until project closure or a protocol-defined failure/reformulation outcome.

If the project fails before release:
  unused committed funds may return, reassign, or follow the citizen's default rule.

If the phase gate fails before release:
  phase-specific unused funds may return, reassign, remain reserved after reconfirmation, or follow the citizen's default rule according to the active policy.

If the project enters material reformulation:
  unreleased balances may return, reassign, or stay with the reformulated version according to the reformulation rule.

Once funds are released by milestones:
  they cannot be withdrawn; the citizen can audit, complain, trigger review, or benefit from recovery/guarantee mechanisms where applicable.
```

This prevents arbitrary withdrawals from destabilizing projects while preserving citizen protection through traceability, fiscalization, complaints, retentions, guarantees, recovery, returned balances, and reputation consequences.

The same rule applies to integrated design-and-execution projects. A citizen does not receive a free withdrawal right merely because the design is pending. But if the design phase fails the public baseline or requires material reformulation, unreleased execution-phase balances follow the policy-defined failure or reformulation treatment.

## Reformulation rule

If a project fails to complete conditions, expires, or requires reformulation, the citizen must be notified.

Depending on the active reformulation policy and C005/C017 rules, eligible unreleased, unused, retained, guaranteed, or recovered funds may:

- remain committed to the reformulated version;
- return to available balance;
- reassign to another project;
- follow the citizen's automatic profile or default rule.

Released funds cannot be freely withdrawn because of reformulation. They remain subject to evidence, fiscalization, guarantee, recovery, sanction, and reputation rules.

If the citizen has a response right and does not respond within the protocol-defined response window, the system applies the citizen's default rule.

Possible default rules:

- keep support;
- return to balance;
- reassign automatically.

## Trust rule

> The citizen must always know whether their money is committed, reserved, released, paused, returned, or reassigned.

The citizen must also know whether the contribution funds execution, the minimum control package, or supplemental control.

For phased projects, the citizen must also know whether the contribution funds design, execution reserved pending design, construction ready for release, or another phase-specific lane.

## Summary flow

```text
Citizen clicks Fund
→ sees available balance
→ chooses amount
→ sees clear summary
→ confirms
→ contribution becomes committed
→ if phase-specific, contribution is attached to the selected phase or funding lane
→ project is added to following
→ funds are released only by phase gates, conditions, milestones, evidence, and fiscalization
→ if project fails, expires, or is reformulated, the citizen receives policy-defined notice and fund-treatment information
```

## What this flow should not do

The funding flow should not:

- imply that money is immediately transferred to the executor;
- imply that a larger amount creates more social support;
- hide release conditions;
- present funding as freely withdrawable after confirmation;
- require technical understanding before funding;
- let the citizen lose track of a funded project;
- hide what happens if a project fails, expires, or is reformulated.
- accept unlimited post-closure control contributions;
- present supplemental control funding as money for the executor;
- fund duplicate evidence or unlimited fiscalizers.
- hide that construction funding is reserved while the design phase is pending;
- move funds between phases without a visible rule and audit trail.

## Design rule

> Funding must feel simple, but the custody and release logic must remain explicit.

## Status

Accepted as Citizen Funding Flow v0.
