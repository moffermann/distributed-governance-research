# P006 — Layered Complexity and Citizen Simplicity

## Principle

The architecture may be complex, but ordinary citizen participation must remain simple.

The system should distinguish between protocol complexity, operational complexity, expert complexity, and citizen experience.

The first three can be deep. The last one must be simple.

## Core formulation

> Simple to participate. Deep to audit. Complex only when the citizen chooses to go deeper in a specific context.

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

They should not need to understand every detail of project modeling, fiscalization, evidence missions, guarantees, reputation, protocol evolution, transition modes, or conflict-of-interest logic before taking basic actions.

These details should exist, but they should be layered beneath the user experience.

## Contextual depth, not hard user modes

The system should not force citizens into permanent labels such as basic user, advanced user, expert mode, or professional panel.

A citizen should be able to explore deeper functionality gradually, inside the same interface, as their interest in a specific project, category, territory, or process increases.

The same citizen may:

- fund one project quickly;
- inspect another project deeply;
- provide evidence in a nearby project;
- file a complaint in a project they know;
- delegate decisions in one area;
- model or execute a project in another area.

The citizen is not globally basic or advanced. The citizen goes deeper locally.

## Progressive disclosure model

The default interface shows the simplest useful layer.

Deeper layers appear through natural exploration:

```text
project card
→ citizen project sheet
→ budget details
→ milestones
→ evidence
→ fiscalization
→ complaints
→ audit trail
```

The citizen is not moved into a separate permanent panel. The same interface opens deeper layers only where relevant.

## Depth layers, not user types

The following are levels of interaction depth, not fixed user categories.

### 1. Basic interaction depth

The citizen sees a simple project sheet and simple actions.

Typical actions:

- fund;
- support;
- delegate;
- follow;
- provide evidence if willing;
- report obvious problems.

### 2. Interested interaction depth

The citizen can expand details:

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

### 3. Active participation depth

The citizen may:

- propose projects;
- model projects;
- execute projects;
- produce evidence;
- file structured complaints;
- participate in deliberation;
- act as delegate;
- perform community oversight.

### 4. Technical or professional depth

The citizen or organization may:

- provide technical modeling;
- execute complex projects;
- perform responsible fiscalization;
- produce professional evidence;
- audit project records;
- review risk and control structures;
- participate in protocol improvement.

These depths are navigational and contextual, not permanent user labels.

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

A user does not need to understand internal settlement, risk controls, accounting, identity checks, or interbank protocols to transfer money.

Likewise, a citizen should not need to understand every control layer to assign civic funding or delegate a decision.

## Design implication

The architecture must support:

- progressive disclosure;
- contextual interfaces instead of hard user modes;
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

Some actions may still require eligibility rules such as identity, reputation, authorization, absence of conflict, or technical requirements. But exploration and access to information should not depend on a global advanced-user label.

## Status

Accepted as a core design principle.
