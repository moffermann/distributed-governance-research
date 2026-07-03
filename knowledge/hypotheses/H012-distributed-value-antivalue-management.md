# H012 - Distributed Value and Antivalue Management

## Hypothesis

Projects in a distributed governance architecture should define both the positive value they commit to produce and the negative effects they commit not to exceed.

Core v0 should therefore require every financeable project to include a `Value-Antivalue Profile`:

```text
Value Floors + Antivalue Ceilings
```

This profile is part of the project's `Project Evidential Contract`. It connects value commitments, antivalue constraints, metrics, fulfillment/control evidence, fiscalization, disbursement, closure, complaints, and role-specific reputation.

## Definitions

**Value** is any positive social contribution perceived or validated by society: employment, education, health, dignity, connectivity, knowledge, care, cultural enrichment, security, opportunity, public access, community strength, or reduced suffering.

**Antivalue** is any negative social effect generated or risked by a project: pollution, noise, health damage, environmental degradation, exclusion, safety risk, abuse, fraud, social harm, displacement, quality-of-life loss, excessive maintenance burden, or other cost transferred to affected parties.

Antivalue is related to negative externalities, but the term is broader because it connects directly to the theory's concept of social value.

## Core distinction

```text
Value Commitment = floor the project must reach
Antivalue Constraint = ceiling the project must not exceed
```

The system should not treat an antivalue as a complaint by default. An antivalue is a declared or discovered negative dimension of the project. It is normally managed through measurement, fulfillment/control evidence, fiscalization, correction, mitigation, disbursement effects, closure effects, and role-specific responsibility. ^r5baf4f5e

A complaint is a later explicit procedural action. It may use evidence of a failed value floor, exceeded antivalue ceiling, false evidence, missing mitigation, or undeclared antivalue, but it must still follow the ordinary H024/C004 complaint process.

## Value floors

A `Value Floor` is a minimum positive commitment the project must reach.

Examples:

- minimum number of usable facilities delivered;
- minimum public access hours;
- minimum beneficiary reach;
- minimum continuity of service;
- minimum quality, safety, or usability condition;
- minimum post-completion use evidence.

Each value floor should define, proportionally:

- value commitment;
- metric or qualitative commitment;
- target or minimum threshold;
- fulfillment evidence needed;
- timing or frequency;
- source role that may produce or corroborate evidence;
- fiscalizer or reviewer method;
- consequence if not reached.

## Antivalue ceilings

An `Antivalue Ceiling` is a maximum negative effect the project must not exceed.

Examples:

- maximum noise level;
- maximum environmental impact;
- maximum exclusion or displacement effect;
- maximum safety incident level;
- maximum public-access restriction;
- maximum maintenance burden transferred to affected parties.

Each antivalue ceiling should define, proportionally:

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

## Evidence rule

Value floors and antivalue ceilings should be verified through `Fulfillment Evidence` or `Control Evidence`, not through `Complaint Evidence` by default.

The evidence answers:

```text
Did the project reach the promised value floor?
Did the project stay below the declared antivalue ceiling?
```

The evidence can later support a complaint, but only if someone explicitly files a complaint and the complaint follows the H024/C004 process. ^rf0e403dd

## Complaint boundary

The system should not silently convert every value failure or antivalue excess into a formal complaint.

Correct path:

```text
fulfillment/control evidence shows value floor not reached
or antivalue ceiling exceeded
-> fiscalizer/reviewer evaluates
-> disbursement, correction, mitigation, closure, or reputation effects may follow
-> an actor may explicitly file a complaint if formal complaint review is sought
-> complaint follows support, quote, review funding, admissibility, scope, and resolution rules
```

Incorrect path:

```text
metric failure
-> automatic complaint
```

## Reputation and responsibility

Failure to reach a value floor, exceeding an antivalue ceiling, or discovering an undeclared antivalue may create a reviewed `Reputation Input` or `Responsibility Event`.

The effect must be role-specific:

- executor, when execution caused the failure or excess;
- modeler/designer, when design, mitigation, metrics, or evidence architecture was defective;
- fiscalizer, when review quality, independence, or diligence failed;
- evidence producer, when evidence was false, low quality, or misleading;
- proposer or other responsible actor, where a reasonably foreseeable antivalue was omitted or misrepresented.

This follows H014: reputation should not update from raw suspicion, popularity, or unreviewed claims. It should update only after reviewed role-specific basis.

## Undeclared antivalues

An undeclared antivalue is not just an ordinary metric miss. It may be a material information failure.

If a reasonably foreseeable antivalue was omitted, understated, or hidden, the system may create:

- correction requirement;
- mitigation or compensation path;
- disbursement retention;
- systemic pause where scope and severity justify it;
- reformulation or revocation path;
- role-specific Responsibility Event;
- reviewed Reputation Input;
- complaint path if a formal complaint is explicitly filed.

The project does not need to prove bad faith before responsibility can be considered. The relevant question is whether the actor responsible for the proposal, design, execution, fiscalization, or evidence could reasonably have declared, controlled, or detected the antivalue.

## Net social value

A project can be understood as producing:

```text
positive value generated - negative value generated = perceived net social value
```

Core v0 should not create a universal centralized `net value score` that decides legitimacy for all domains.

Instead, Core v0 should make value floors and antivalue ceilings visible, evidence-backed, and auditable so citizens, funders, beneficiaries, affected parties, fiscalizers, and reviewers can evaluate the tradeoff.

## Macul / plaza noise example

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

Measurement scope:

```text
Defined residential measurement points around the plaza.
```

Evidence needed:

```text
Noise map by zones,
four measurement times,
five days per week,
declared measurement method and device,
evidence producer or technical record,
fiscalizer review.
```

If the evidence shows values below the ceiling, the antivalue constraint is fulfilled.

If the evidence shows repeated excess:

- the project has an antivalue non-compliance finding;
- mitigation may be required, such as acoustic panels or use-hour restrictions;
- disbursement or closure may be affected;
- role-specific reputation may be affected after reviewed responsibility;
- a complaint may be filed, but it is not automatic.

If the project never declared the foreseeable noise impact, the issue may become an undeclared-antivalue responsibility event.

## Relationship to other v0 components

H012 is the value-antivalue framing layer. It should not duplicate the detailed mechanisms already defined elsewhere:

- H018 defines the value thesis, core value commitments, metrics, and fulfillment evidence needs.
- H022 defines the Project Evidential Contract.
- C010 defines Value Verification Packages.
- H015 defines formal evaluation context and EvaluationRecords.
- H014 defines the reputation input chain.
- H013 defines correction, mitigation, systemic pause, final resolution, and revocation.
- H024/C004 define the complaint process.
- C022 defines common-good impact declaration.
- P003 defines responsibility for undeclared antivalue.

## Principle

> A project should not only declare what good it promises to create. It should also declare the maximum harm, cost, risk, exclusion, or burden it promises not to exceed.

## Status

Aligned Core v0 hypothesis for value floors, antivalue ceilings, fulfillment/control evidence, complaint boundaries, and role-specific responsibility.
