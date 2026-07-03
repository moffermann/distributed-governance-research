# Layered Citizen Interface Model v0

## Purpose

This document consolidates the citizen-facing interface model for the distributed governance system.

The goal is to preserve deep transparency and auditability while keeping ordinary citizen participation simple. ^re3bcd897

The interface should not force users into a separate advanced mode. Instead, the citizen moves progressively from simple navigation into deeper detail only when interested.

## Core principle

> The first experience is not reading a technical project. It is finding a meaningful path into projects.

The system should support layered exploration:

```text
home / discovery
→ project grouping
→ compact project list
→ project card / dashboard
→ detail by icon or signal
→ full citizen project sheet
→ audit trail
```

## Layer 0 — Home / discovery

Layer 0 is not primarily a project feed.

It is a discovery and navigation surface.

Its purpose is to help the citizen choose a way to find relevant projects.

Possible entries:

- projects near me;
- projects in my commune;
- childhood;
- education;
- health;
- older adults;
- nature;
- sports;
- culture;
- projects almost ready;
- projects that need fiscalizers;
- projects that need evidence producers;
- recommended for me;
- delegated areas;
- search.

Layer 0 may show the citizen's available civic allocation for the current period.

Example:

```text
You have $X available this month.

Explore:
- Projects near you
- Childhood
- Health
- Nature
- Almost ready to execute
- Need fiscalizer
- Need evidence producer
```

The citizen may reorder, pin, collapse, or hide Home categories for personal navigation. Hidden categories remain available through Explore and search.

## Layer 0 exception — urgent highlighted projects

Layer 0 may show one or two ultra-highlighted urgent projects.

This should be the exception, not the default.

Layer 0 must not become a commercial showcase, paid promotion space, or attention feed.

Urgent highlighted projects should appear only when there is a clear protocol reason.

Examples:

- funding closes soon;
- the project is almost complete and needs a small remaining amount;
- the project urgently needs a fiscalizer to become execution-ready;
- the project responds to an emergency or time-sensitive need;
- delay would cause relevant value loss.

Rules:

- maximum one or two highlighted projects;
- transparent reason for highlighting;
- no paid promotion;
- no opaque manual favoritism;
- rotation should be rule-based;
- citizen can ignore and continue browsing categories.

Example:

```text
Urgent now

1. Repair community center before heavy rain
Missing $800,000 · closes in 2 days
[View] [Fund]

2. School sports equipment delivery
Needs 1 fiscalizer · closes in 3 days
Shown because: missing fiscalizer + deadline near
[View] [Offer help]
```

## Layer 1 — Compact project list

After entering a category, grouping, search result, or recommendation path, the citizen sees a compact list of projects.

This is the first place where multiple projects are compared.

Layer 1 should show the current ordering mode and allow the citizen to switch modes such as Near me, Closing soon, Almost ready, Need fiscalizer, New, Random rotation, or Search relevance.

Each compact project item should include:

- project name;
- one-sentence description;
- value icons;
- funding progress;
- missing amount;
- status;
- essential signal counts;
- direct action button.

Example:

```text
Escuela deportiva infantil en Maipú

👧 Infancia · ⚽ Deporte · ❤️ Salud

$7,560,000 of $12,000,000
Missing $4,440,000

👥 80   🛡 1/1   📎 12   💬 35   🚩 0

[Fund]
```

## Compact list click behavior

The compact project item should behave as an access dashboard.

- clicking the project name opens the project card or project sheet;
- clicking a value icon opens the value thesis detail;
- clicking fiscalizers opens fiscalizer detail;
- clicking evidence opens evidence detail;
- clicking complaints opens complaint detail;
- clicking comments opens discussion;
- clicking beneficiaries opens beneficiary detail;
- clicking funding opens funding detail;
- clicking the direct action button performs or begins that action.

This allows users to inspect the specific element they care about without entering a full technical sheet.

## Layer 2 — Project card / dashboard

The project card is the main citizen-facing first layer of a specific project.

It should answer:

- what is promised;
- who will do it;
- what compact role-performance history is available for responsible actors;
- what deliberative context should be considered before acting;
- what value it creates;
- how much funding is missing;
- what conditions are still missing;
- where the citizen can help;
- what signals deserve attention.

Where participation limits are material, the project card should use simple labels rather than demographic dashboards. Examples include `consultation evidence pending`, `affected-party issue pending`, or `participation-support relationship disclosed`. Under A009, low participation is not an automatic veto unless the active Threshold Policy makes the missing affected-party mapping, consultation, observation, or readiness evidence a formal condition.

Example:

```text
Escuela deportiva infantil en Maipú

Entrenamientos gratuitos para 80 niños during 6 months.

Value promised:
👧 Infancia · ⚽ Deporte · ❤️ Salud

Lo hará:
Club Deportivo Los Cóndores

State:
Proyecto abierto

To become execution-ready it needs:

💰 Funding
$7,560,000 of $12,000,000
Missing $4,440,000

🛡 Fiscalizers
0 of 1 required

📎 Evidence producers
2 of 4 required

Dashboard:
👥 Beneficiaries: 80
💰 Funders: 1,240
💬 Comments: 35
🚩 Complaints: 0
📎 Fulfillment evidence: 12

[Fund]
[Offer as fiscalizer]
[Provide evidence]
[Follow]
[View details]
```

## Layer 3 — Detail by icon or signal

Layer 3 opens when the citizen clicks a concrete signal.

The citizen is not moved into an advanced mode. The interface simply opens the specific detail requested.

### Value icon detail

Clicking a value icon shows:

- value name;
- what the project promises;
- who it benefits;
- scope;
- mandatory metrics;
- project-specific targets;
- evidence required;
- current fulfillment status.

### Fiscalizer detail

Clicking fiscalizers shows:

- who fiscalizes;
- role: responsible fiscalizer, evidence producer, or other relevant control role;
- what they review;
- reports delivered;
- declared independence;
- alerts or conflicts;
- profile and history.

### Evidence detail

Clicking evidence shows:

- evidence committed;
- evidence delivered;
- evidence reviewed;
- evidence disputed;
- who produced the evidence;
- whether evidence is from executor, fiscalizer, beneficiary, funder, or evidence producer.

### Beneficiary detail

Clicking beneficiaries shows:

- who benefits;
- number of beneficiaries;
- direct versus indirect beneficiaries;
- selection criteria;
- territory;
- confirmation status;
- beneficiary feedback if available;
- privacy classification where personal identity is restricted.

For minors or vulnerable beneficiaries, the citizen-facing view should normally show aggregate counts, selection criteria, confirmation status, and fiscalizer verification rather than exposing names, identity numbers, addresses, or unredacted faces.

### Funding detail

Clicking funding shows:

- required amount;
- amount committed;
- amount missing;
- deadline;
- number of funders;
- direct versus delegated funding where useful;
- whether funding is reserved, committed, or released.

### Support and justified objection detail

Clicking support or justified objections shows:

- active support count;
- active justified objection count;
- withdrawn support or objection as historical context where useful;
- main objection reasons;
- whether any objection was converted into a complaint;
- the citizen's current support or objection state.

Support and justified objection are reversible civic signals. Funding remains a separate financial commitment, and complaints remain formal review objects.

### Comments detail

Clicking comments shows:

- questions;
- observations;
- executor responses;
- highlighted unresolved issues;
- community discussion;
- visible or protected identity status where applicable.

Comments are identifiable by default. Protected identity is a justified per-comment exception and does not create an anonymous comment layer.

The same verified protected-identity mechanism may appear in complaint, evidence, beneficiary, testimony, or affected-party layers when a specific action requires protection. The public interface should show that the actor is verified and protected without exposing restricted identity.

### Complaint detail

Clicking complaints shows:

- open complaints;
- resolved complaints;
- rejected complaints;
- blocking complaints;
- complaint status;
- effects on project state.

## Layer 4 — Full citizen project sheet

This layer is for citizens who want to understand the whole project, but still in accessible language.

Possible sections:

- project summary;
- value theses;
- committed goals;
- funding and budget;
- open conditions;
- execution milestones;
- fiscalization;
- evidence;
- beneficiaries;
- risks and declared antivalues;
- comments and responses;
- complaints;
- project history.

This layer is reached through a deliberate action such as:

```text
[View full details]
```

It should not be the first screen by default.

## Layer 5 — Audit trail

Layer 5 contains deep transparency and technical traceability.

Possible content:

- versions of the project;
- project edits;
- value thesis changes;
- metric changes;
- evidence history;
- fiscalization reports;
- financial traceability;
- complaints and resolutions;
- moderation logs where applicable;
- conflict-of-interest declarations;
- reputation events;
- system decisions;
- protocol references.

This layer supports journalists, auditors, fiscalizers, researchers, institutions, and highly engaged citizens.

## Navigation principle

Each layer answers a different question:

```text
Layer 0:
  What paths can I use to find projects, and how have I configured my Home navigation?

Layer 1:
  Which projects are available in this path, and why are they ordered this way?

Layer 2:
  What does this project promise and what does it need?

Layer 3:
  What does this specific icon, number, or signal mean?

Layer 4:
  How is the whole project structured?

Layer 5:
  Can I audit everything that happened?
```

## Design rule

> The interface should be simple by default, clickable by signal, and deeply auditable by choice.

## Status

Accepted as Layered Citizen Interface Model v0.
