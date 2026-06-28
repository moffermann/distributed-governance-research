# P006 — Layered Complexity and Citizen Simplicity

## Principle

The architecture may be complex, but ordinary citizen participation must remain simple.

The system should distinguish between:

```text
protocol complexity
operational complexity
expert complexity
citizen experience
```

The first three can be deep. The last one must be simple.

## Core formulation

> Simple to participate. Deep to audit. Complex only for those who assume complex roles.

## Rationale

Distributed governance cannot scale nationally if every citizen must understand all protocol layers before participating.

Most citizens should be able to interact with the system through simple actions:

- assign funding;
- support;
- delegate;
- follow;
- provide optional evidence;
- evaluate;
- report a problem.

They should not need to understand every detail of:

- project modeling;
- fiscalization markets;
- evidence missions;
- guarantees;
- retentions;
- anti-capture detection;
- reputation formulas;
- protocol evolution;
- mode transitions;
- conflict-of-interest logic.

These details should exist, but they should be layered beneath the user experience.

## User layers

### 1. Basic citizen

The basic citizen should see a simple project sheet and simple actions.

Typical actions:

- fund;
- support;
- delegate;
- follow;
- provide evidence if willing;
- report obvious problems.

### 2. Interested citizen

The interested citizen can expand details:

- budget;
- milestones;
- evidence;
- fiscalization;
- risks;
- reputation;
- conflicts;
- comments;
- complaints;
- project history.

### 3. Active participant

The active participant may:

- propose projects;
- model projects;
- execute projects;
- produce evidence;
- file structured complaints;
- participate in deliberation;
- act as delegate;
- perform community oversight.

### 4. Expert or professional participant

The expert participant may:

- provide technical modeling;
- execute complex projects;
- perform responsible fiscalization;
- produce professional evidence;
- audit project records;
- review risk and control structures;
- participate in protocol improvement.

## Citizen-facing project sheet

The ordinary citizen should see a simplified project sheet.

Example fields:

- what will be done;
- where;
- who executes;
- who benefits;
- how much it costs;
- current funding status;
- risk level;
- fiscalization included: yes/no;
- evidence required: yes/no;
- executor reputation summary;
- project status;
- simple action buttons.

The deeper technical details should be available, but not forced into the default experience.

## Complexity test

Every new mechanism should pass the simplicity test:

```text
Does the ordinary citizen need to understand this mechanism to participate?
```

If yes, the mechanism may be too complex at the interface level.

If no, it can exist as a technical, professional, or audit layer.

## Analogy

The system should work like a bank app.

A user does not need to understand clearing, settlement, fraud models, internal accounting, KYC architecture, or interbank protocols to transfer money.

Likewise, a citizen should not need to understand every control layer to assign civic funding or delegate a decision.

## Design implication

The architecture must support:

- progressive disclosure;
- role-based interfaces;
- simplified project summaries;
- automatic profiles;
- delegation;
- AI assistance;
- clear warnings and trust signals;
- deep audit trails for those who want them.

## Boundary

This principle does not mean hiding information.

It means not forcing all information into the default interaction.

Transparency remains available through deeper layers.

## Status

Accepted as a core design principle.
