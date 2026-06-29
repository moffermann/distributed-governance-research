# Citizen Delegation Flow v0

## Purpose

This document freezes the citizen delegation flow.

Delegation allows a citizen to authorize another actor to act within a defined scope. In Core v0, delegation should be simple, explicit, accepted by the delegate, and immediately revocable for future actions.

## Core principle

> Delegation is scoped authorization, not transfer of citizenship, identity, money ownership, or unlimited power.

Delegation has priority over automatic allocation within the delegated scope.

For budget allocation delegation, the citizen must have a selected base allocation profile or fallback rule before delegation becomes active. The public system default profile may be selected or accepted as that base rule.

If delegation later ends, the system resumes that previously selected base rule for future allocation.

## Main question

```text
How can a citizen let another trusted actor allocate or act for them within a limited scope?
```

## Entry points

The delegation flow can start from:

- home layer;
- bottom navigation tab;
- profile;
- funding flow;
- automatic profile configuration;
- project category;
- prompt shown when the citizen does not want to decide manually.

Visible buttons:

```text
[Delegar]
[Delegar asignación]
[Elegir delegado]
```

## Delegation types for Core v0

Core v0 should keep delegation simple.

Recommended initial delegation scopes:

```text
Funding allocation by value area
Funding allocation by territory
Specific project category
Project following and alerts
Protocol participation, if enabled
```

More complex delegation, subdelegation, time-bound delegation, paid delegation, and multi-delegate portfolios can be future extensions.

## Flow steps

```text
1. Citizen starts delegation
2. System explains what delegation means
3. System verifies or requests a base allocation profile/fallback rule
4. Citizen chooses scope
5. Citizen chooses delegate
6. System shows delegate profile and concentration signal
7. Citizen confirms request
8. Delegate accepts or rejects
9. Delegation becomes active after acceptance
10. Citizen can monitor and revoke
```

## 1. Explanation

Example:

```text
Delegar permite que otra persona u organización actúe por ti dentro de un ámbito definido.

Puedes revocar la delegación para acciones futuras.

Las acciones ya realizadas mientras la delegación estaba activa no se borran.
```

## 2. Scope selection

For budget allocation delegation, the system should first verify that the citizen has a base allocation profile or fallback rule.

If not, the flow should ask the citizen to choose one:

```text
Before delegating, choose what should happen if delegation ends.

[Use public system default]
[Choose an official profile]
[Create my own profile]
[Use manual available-balance fallback, if allowed]
```

This avoids a hidden allocation decision if the delegate later resigns, rejects a renewal, loses eligibility, or is revoked.

The citizen chooses what they are delegating.

Example:

```text
¿Qué quieres delegar?

[Asignación mensual completa]
[Sólo proyectos de infancia]
[Sólo proyectos de mi comuna]
[Sólo proyectos de deporte]
[Participación en cambios de protocolo]
```

Each scope should be understandable and visible later.

## 3. Delegate selection

The citizen may search for a delegate.

Delegate profile should show:

- name;
- actor type: citizen or organization;
- areas of activity;
- role-based reputation;
- previous allocations if public;
- declared interests;
- concentration signal;
- whether the delegate accepts new delegations;
- communication/reporting frequency.

## 4. Concentration signal

Before confirming, the system should show if the delegate already concentrates significant delegated power.

Example:

```text
Este delegado representa actualmente:
2.430 ciudadanos

Áreas principales:
Infancia, deporte, educación

Concentración:
Alta dentro de proyectos deportivos de esta comuna.
```

The system should not hide concentration. It should make it visible.

Core v0 does not impose a universal hard cap on delegation concentration. If citizens voluntarily concentrate delegated authority in a trusted actor, that is a legitimate civic choice. The system must show concentration before delegation, during delegated action, in delegate reports, and in administrative observability.

## 5. Confirmation request

Example:

```text
Solicitud de delegación

Delegas:
Proyectos de infancia

A:
Fundación Vecinos por la Infancia

Qué podrá hacer:
Asignar tu monto disponible dentro de este ámbito.

Qué no podrá hacer:
Actuar fuera del ámbito delegado.
Retirar dinero ya liberado.
Usar tu identidad como propia.

[Enviar solicitud]
```

## 6. Delegate acceptance

Delegation is not active until the delegate accepts.

The delegate should see:

- delegator;
- scope;
- responsibilities;
- reporting expectations;
- whether they accept.

Possible statuses:

```text
Requested
Accepted
Rejected
Active
Revoked
Resigned
Expired, if future extension supports time limits
```

## 7. Active delegation

Once active, the citizen should see:

```text
Delegación activa

Delegado:
Fundación Vecinos por la Infancia

Ámbito:
Proyectos de infancia

Acciones recientes:
- asignó $8.000 a proyecto X
- asignó $12.000 a proyecto Y

[Ver reporte]
[Revocar delegación]
```

## 8. Reporting

The delegate should periodically report or have actions automatically summarized.

Reports may include:

- projects funded;
- reasons for allocation;
- amounts assigned;
- projects followed;
- alerts;
- conflicts or abstentions;
- results of funded projects.

## 9. Revocation

Revocation should be immediate for future actions.

For budget delegation, revocation should also reactivate the citizen's previously selected base allocation profile or fallback rule. This is the same base rule required before delegation becomes active.

Example:

```text
Revoke delegation

From now on, this delegate will not be able to act for you in this scope.

Actions performed while the delegation was active remain part of the history.

Your base profile will become active again:
Public system default.

[Confirm revocation]
```

Revocation affects future delegated decisions only. Funding commitments already made by the delegate remain governed by the ordinary funding commitment and project failure rules.

After revocation, the citizen may choose a new delegate, edit the base profile, or fund manually. The system should not improvise a hidden fallback after revocation.

## 10. Delegate resignation

The delegate may resign.

If a delegate resigns:

- citizen is notified;
- no future actions are authorized;
- previous actions remain valid;
- the citizen's previously selected base allocation profile or fallback rule resumes.

The system should not improvise a new fallback after resignation.

Example:

```text
Delegation inactive: delegate resigned.

Your base profile is active again:
Public system default.

[Choose new delegate]
[Edit base profile]
[Fund manually]
```

## What this flow should not do

The delegation flow should not:

- activate without delegate acceptance;
- activate budget delegation without a selected base allocation profile or fallback rule;
- hide scope;
- hide concentration;
- hide the fallback that resumes if delegation ends;
- make revocation difficult;
- erase past delegated actions after revocation;
- hide which base allocation profile or fallback rule resumes after revocation;
- allow delegate to act outside scope;
- confuse delegation with automatic allocation profile;
- require every citizen to delegate;
- hide that automatic allocation rules are inactive within the delegated scope.

## Design rule

> Delegation should be easy to create, easy to understand, transparent in concentration, and immediately revocable for future actions. For budget delegation, revocation resumes the citizen's previously selected base allocation profile or fallback rule.

## Status

Accepted as Citizen Delegation Flow v0.
