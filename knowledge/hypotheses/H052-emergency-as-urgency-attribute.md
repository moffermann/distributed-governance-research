# H052 — Emergency as Urgency Attribute

## Status

Core v0 coordination-pattern hypothesis aligned with [[../../docs/63_PROJECT_DISCOVERY_VISIBILITY_USER_CUSTOMIZATION_AND_C025_RESOLUTION|C025]] and [[H031-transparent-project-discovery-layer|H031]].

Emergency remains an urgency attribute on ordinary projects, not a separate coordination architecture. Any discovery effect created by that attribute must be explainable, limited, non-commercial, user-visible, and auditable.

## Hypothesis

Emergency or disaster-response projects should not require a separate coordination architecture in the core model. They can operate as normal projects marked with an urgency or emergency attribute that affects discovery, visibility, and prioritization under the C025 discovery constraints.

## Rationale

A natural disaster, earthquake, flood, fire, or other emergency may require rapid response. However, the basic project architecture can still apply:

- value thesis;
- requested resources;
- executor identity;
- evidence;
- fiscalization proportional to risk;
- reputation;
- guarantees where applicable.

Creating a separate emergency architecture may add unnecessary complexity to the system.

The emergency attribute should therefore change attention signals, time sensitivity, and proportional review urgency. It should not bypass identity, value thesis, evidence, proportional fiscalization, public traceability, or explicit citizen action.

## Emergency marking

A project may be marked as:

```text
urgent
emergency
critical response
```

This mark can affect:

- visibility in the discovery layer;
- notification priority;
- eligibility for user-configured allocation-profile rules where the user explicitly enabled urgent or emergency preferences;
- strategic or local relevance;
- time sensitivity indicators.

The mark should not silently allocate money, redirect a citizen's balance, or override a user's declared preferences.

## C025 discovery constraints

Emergency visibility is allowed only as a narrow and explainable discovery effect.

Core v0 constraints:

- emergency highlights must show the visible reason for urgency;
- urgent or emergency slots should remain limited;
- if several emergency projects qualify, the ordering or rotation rule must be visible;
- emergency visibility must not be sold, sponsored, or manually boosted without a visible protocol reason;
- appearing in an urgent slot does not allocate funds by itself;
- citizens must still take an explicit funding, delegation, automatic-profile, fiscalization, evidence-production, following, or comment action;
- material administrative visibility decisions in tutored or administrative modes should leave an audit trail or governance-resolution trace where applicable;
- discovery influence should be measured through observability metrics.

Valid urgent reasons may include:

```text
Emergency response.
Affected area.
Time-sensitive shelter, food, health, safety, infrastructure,
or continuity need.
Delay would cause meaningful value loss.
Critical fiscalizer or evidence-producer gap blocks execution readiness.
```

Invalid emergency visibility:

```text
The project appears first because an administrator manually boosted it
without a visible protocol reason.

The project buys an emergency slot.

The system silently redirects automatic allocations
to an emergency project that the user did not opt into.
```

## Example

After an earthquake:

```text
Project:
  Deliver temporary shelters to affected communities.

Mark:
  Emergency response.

Effect:
  Project is highlighted in emergency/urgent discovery surfaces
  with a visible reason:
  emergency response, affected area, time-sensitive shelter need.
```

The project still follows the ordinary lifecycle, adjusted proportionally to urgency and risk.

If ten emergency shelter projects qualify at the same time, the system should not always show the same project first without explanation. It should apply a visible ordering or rotation rule, such as locality relevance, time to funding closure, fiscalizer gap, evidence readiness, or declared user preference.

## Citizen-facing simplicity

The citizen interface should not expose a separate emergency bureaucracy by default.

Example citizen signal:

```text
Emergency
Temporary shelters for affected communities
Reason: earthquake response, time-sensitive shelter need
Needs: 1 fiscalizer, 2 evidence producers, CLP X remaining
```

The citizen can still ignore the highlight, search manually, change list ordering, fund another project, follow the project, or participate through a role.

## Principle

> Emergency changes visibility and urgency, not the core project architecture. Emergency visibility must be visible, rule-based, limited, and auditable; it must not become opaque boosting or silent allocation.

## Research note

Coordination-pattern hypothesis. Keeps the core model simpler by treating emergency as a project attribute rather than a separate architecture, while aligning urgent discovery behavior with C025.
