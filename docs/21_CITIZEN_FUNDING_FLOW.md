# Citizen Funding Flow v0

## Purpose

This document freezes the citizen funding flow: what happens when a citizen chooses to fund a project.

Funding is one of the central actions of the distributed governance system. The flow must be simple for the citizen but clear about the state of money, release conditions, reversibility, reformulation, and follow-up.

## Core principle

> Funding is a conditional, traceable, and reversible commitment before closure. It is not an immediate transfer of money to the executor.

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

## Amount rules

The system should enforce simple rules:

- the citizen cannot assign more than their available civic allocation;
- the citizen cannot assign more than the project still needs, unless the protocol allows controlled overfunding;
- the citizen can assign their full available balance;
- the citizen can cancel before confirming;
- the system should show the remaining citizen balance after the selected amount.

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
- tiene fiscalización requerida;
- no tiene denuncias bloqueantes;
- avanza por hitos con evidencia.

[Confirmar aporte]
[Volver]
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

## 5. Post-confirmation money status

The citizen should always be able to see the status of their contribution.

Possible states:

```text
Comprometido
Reservado
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

## 6. Automatic following

Funding a project automatically adds it to the citizen's following area.

```text
Financiar implica seguir automáticamente el proyecto.
```

The citizen may later adjust notification preferences, but the project should not disappear after funding.

## Release rule

Funds are not released to the executor just because a citizen funds the project.

Funds can be released only after the applicable project conditions are met and according to the milestone, evidence, and fiscalization rules.

## Withdrawal and reassignment rule

Withdrawal depends on project state.

Recommended rule:

```text
While the project is open and has not completed closure conditions:
  the citizen may withdraw or reassign the contribution, unless a protocol rule limits withdrawal near closure.

Once the project becomes execution-ready:
  the contribution is locked for execution.

Once funds are released by milestones:
  they cannot be withdrawn; the citizen can only audit, complain, or trigger review mechanisms.
```

This prevents arbitrary late withdrawals from destabilizing projects that are ready to execute.

## Reformulation rule

If a project fails to complete conditions, expires, or requires reformulation, the citizen must be notified.

Possible citizen options:

- keep the contribution in the reformulated version;
- return the contribution to available balance;
- reassign the contribution to another project;
- allow the automatic profile to decide.

If the citizen does not respond within the protocol-defined response window, the system applies the citizen's default rule.

Possible default rules:

- keep support;
- return to balance;
- reassign automatically.

## Trust rule

> The citizen must always know whether their money is committed, reserved, released, paused, returned, or reassigned.

## Summary flow

```text
Citizen clicks Fund
→ sees available balance
→ chooses amount
→ sees clear summary
→ confirms
→ contribution becomes committed
→ project is added to following
→ funds are released only by conditions, milestones, evidence, and fiscalization
→ if project fails, expires, or is reformulated, the citizen receives options
```

## What this flow should not do

The funding flow should not:

- imply that money is immediately transferred to the executor;
- hide release conditions;
- make withdrawal rules ambiguous;
- require technical understanding before funding;
- let the citizen lose track of a funded project;
- hide what happens if a project fails, expires, or is reformulated.

## Design rule

> Funding must feel simple, but the custody and release logic must remain explicit.

## Status

Accepted as Citizen Funding Flow v0.
