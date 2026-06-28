# H052 — Emergency as Urgency Attribute

## Hypothesis

Emergency or disaster-response projects should not require a separate coordination architecture in the core model. They can operate as normal projects marked with an urgency or emergency attribute that affects discovery, visibility, and prioritization.

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
- default allocation profiles;
- strategic or local relevance;
- time sensitivity indicators.

## Example

After an earthquake:

```text
Project:
  Deliver temporary shelters to affected communities.

Mark:
  Emergency response.

Effect:
  Project is highlighted in emergency/urgent discovery surfaces.
```

The project still follows the ordinary lifecycle, adjusted proportionally to urgency and risk.

## Principle

> Emergency changes visibility and urgency, not the core project architecture.

## Status

Coordination-pattern hypothesis. Keeps the core model simpler by treating emergency as a project attribute rather than a separate architecture.
