# Value-Antivalue Profile v0

## Purpose

The `Value-Antivalue Profile` is the project-level structure that records both:

```text
value floors
antivalue ceilings
```

It prevents a project from declaring only the value it hopes to create while hiding, ignoring, or vaguely describing the negative effects it may create.

## Value Floors

A `Value Floor` is a minimum positive commitment the project must reach.

Examples:

- number of usable courts delivered;
- minimum public access hours;
- minimum beneficiary reach;
- minimum continuity of service;
- minimum safety or quality condition;
- minimum public-use evidence after completion.

Each value floor should define:

- value commitment;
- metric or qualitative commitment;
- target or minimum threshold;
- fulfillment evidence needed;
- timing or frequency;
- source role that may produce or corroborate evidence;
- fiscalizer or reviewer method;
- consequence if not reached.

## Antivalue Ceilings

An `Antivalue Ceiling` is a maximum negative effect the project must not exceed.

Examples:

- maximum noise level;
- maximum exclusion or displacement effect;
- maximum environmental impact;
- maximum safety incident level;
- maximum maintenance burden;
- maximum public-access restriction.

Each antivalue ceiling should define:

- negative effect controlled;
- affected parties, assets, or zones;
- threshold or qualitative ceiling;
- measurement method;
- timing or frequency;
- required fulfillment or control evidence;
- source role that may produce or corroborate evidence;
- fiscalizer or reviewer method;
- mitigation, correction, compensation, or reformulation path if exceeded;
- disbursement, closure, reputation, pause, or revocation consequence where applicable.

## Evidence Context

Value floors and antivalue ceilings are normally verified through `Fulfillment Evidence` or `Control Evidence`, not through `Complaint Evidence`.

Complaint Evidence enters only if a formal complaint is explicitly filed under the complaint process. A failed value floor or exceeded antivalue ceiling may support a complaint, but it does not automatically become a complaint.

## Reputation Boundary

Failure to reach a value floor, exceeding an antivalue ceiling, or discovering an undeclared antivalue may become a reviewed `Reputation Input` or `Responsibility Event`.

The effect should be role-specific:

- executor, when execution caused the failure or excess;
- modeler/designer, when the project design, mitigation, metrics, or evidence architecture was defective;
- fiscalizer, when review quality or independence failed;
- evidence producer, when evidence was false, low quality, or misleading;
- proposer or other responsible actor, where a reasonably foreseeable antivalue was omitted or misrepresented.

## Complaint Boundary

A complaint may be filed when an actor alleges that:

- a value floor was not reached;
- an antivalue ceiling was exceeded;
- mitigation was not performed;
- fulfillment or control evidence is false or insufficient;
- an undeclared antivalue appeared;
- a declared antivalue was materially understated.

The complaint must still follow the ordinary H024/C004 complaint process: filing, support, quote, review funding, admissibility, affected scope, and resolution. The system should not silently convert every metric failure into a formal complaint.

## Example

Project:

```text
Neighborhood plaza renovation.
```

Value floor:

```text
The plaza must remain publicly usable after renovation.
```

Antivalue ceiling:

```text
Noise must not exceed:
08:00 - 30 dB
14:00 - 40 dB
18:00 - 40 dB
00:00 - 25 dB
```

Evidence need:

```text
Noise map by defined measurement zones,
four measurement times,
five days per week,
declared measurement method,
reviewed by the fiscalizer.
```

Citizen-facing summary:

```text
Promised value:
usable public plaza.

Impact limit:
night noise below the declared ceiling.

Verification:
scheduled noise measurements in defined zones.
```

## Status

Core v0 concept aligned with H012, H018, H022, H013, H014, H015, H024, and C010.
