# Citizen Home / Discovery Layer v0

## Purpose

This document freezes the design of Layer 0: the citizen home and discovery layer.

Layer 0 is the first experience of the citizen. It should not be a complex project feed, a technical dashboard, or a commercial showcase of projects.

Its purpose is to help the citizen choose a path into the system.

## Core principle

> Layer 0 is a navigation surface, not a project feed.

The citizen should not be forced to evaluate many projects immediately. They should first be able to choose how they want to explore:

- by value;
- by territory;
- by project need;
- by urgency;
- by nearby project or affected scope;
- by recommendation;
- by search;
- by delegation or automatic allocation profile.

## Primary question answered by Layer 0

Layer 0 answers:

```text
Where do I want to enter?
```

not:

```text
Which technical project should I audit now?
```

## Recommended structure

Layer 0 should contain these blocks:

```text
A. Citizen allocation / available amount
B. Urgent now, maximum 1 or 2 projects
C. Explore by value
D. Projects that need something
E. Nearby projects / followed scopes
F. Search / filters
G. Delegate or configure automatic profile
```

The citizen may personalize the Home categories without changing project eligibility or public visibility rules.

Allowed personal controls:

- reorder categories;
- pin categories;
- collapse categories;
- hide categories from Home;
- restore the default layout;
- edit declared discovery preferences.
- follow geographic or thematic discovery views such as `near me`.

Hidden categories must remain reachable through Explore, filters, and search.

## A. Citizen allocation / available amount

The first block may show the citizen's available civic allocation for the period.

Example:

```text
You have $42,000 available this month.

You can assign it to projects, delegate it, or let your automatic profile distribute it.

[Assign now]
[Delegate]
[Configure automatic profile]
```

This creates immediate context: the citizen understands that the system is not just informational. They have allocative power.

If the active program includes protected essential scopes, the Home layer may also expose simple signals without turning them into a feed:

```text
Protected scopes:
Older-adult care continuity: underfunded protected scope
Emergency reserve: not civic-assignable
Disability access services: distributed service lane open
```

These labels should link to the relevant Planning Scope, not to hidden algorithmic prioritization.

## B. Urgent now

Layer 0 may show one or two urgent highlighted projects.

This is an exception.

It should not become a general project feed.

### Rules

- maximum one or two highlighted projects;
- only when there is a transparent protocol reason;
- no paid promotion;
- no opaque manual favoritism;
- rotation should be rule-based;
- the reason for urgency should be visible;
- unresolved material warnings should remain visible when they exist;
- the citizen can ignore this block and continue browsing.

### Valid reasons for urgent highlighting

Possible valid reasons:

- funding closes soon;
- project is almost complete and needs a small missing amount;
- project urgently needs a fiscalizer to become execution-ready;
- project urgently needs evidence producers;
- project responds to emergency or time-sensitive need;
- delay would cause meaningful loss of value;
- project has a critical closure condition pending.

### Example

```text
Urgent now

1. Repair community center before heavy rain
Missing $800,000 · closes in 2 days
Shown because: funding closes soon + weather risk
👥 Community · 🧓 Older adults
[View] [Fund]

2. School sports equipment delivery
Needs 1 fiscalizer · closes in 3 days
Shown because: missing fiscalizer + deadline near
⚽ Sports · 👧 Childhood
[View] [Offer help]
```

## C. Explore by value

The main navigation area should allow the citizen to explore projects by value icons.

Examples:

```text
👧 Childhood
📚 Education
❤️ Health
🧓 Older adults
🌳 Nature
⚽ Sports
🎭 Culture
👥 Community
🏠 Housing
♿ Inclusion
```

Clicking a value opens a compact project list filtered by that value.

The values shown should come from the value icon catalog.

## D. Projects that need something

Layer 0 should also allow citizens to enter through system needs, not only thematic interests.

This is important because participation is not only funding.

Examples:

```text
💰 Need funding
🛡 Need fiscalizer
📎 Need evidence producer
👥 Need beneficiary confirmation
🗣 Need affected-party consultation
⏳ Almost execution-ready
📍 Near me
```

This allows different citizens to contribute in different ways.

A citizen who cannot or does not want to fund may still help by:

- offering evidence;
- fiscalizing if eligible;
- confirming beneficiaries;
- observing;
- commenting;
- reporting problems.

## E. Nearby projects / followed scopes

Layer 0 should let a citizen follow geographic or thematic discovery scopes, such as `near me`, a commune, neighborhood, school area, beneficiary group, or public-function scope.

This allows affected citizens to learn about projects asynchronously when they are published or materially changed.

Examples:

```text
Near me

New project: Design and Construction of Multi-court Facility in Macul
Status: community consultation evidence pending
Warning: design gate not accepted yet
Why shown: project territory overlaps your followed area
[View] [Follow] [Submit observation]
```

Following a nearby scope does not fund, approve, vote, block, or fiscalize a project. It only creates a notification and discovery relationship that helps affected people participate without needing to attend one physical meeting at one specific time.

Nearby discovery should not hide material context. If a project is shown because it is close to the citizen, the compact entry should also show source-linked material warnings such as pending consultation evidence, conditional approval, unresolved design gate, active complaint status, or missing public-access condition where applicable.

## F. Search and filters

Layer 0 should include a simple search entry.

Example:

```text
Search by commune, topic, organization, project name, or keyword.
```

Search should lead to the compact project list.

Search is not the main interface, but it should be available for users who know what they want.

## G. Delegate or configure automatic profile

The citizen should be able to avoid manual project selection.

Layer 0 may expose simple actions:

```text
[Delegate]
[Configure automatic profile]
[Use recommended profile]
```

This supports low-friction participation for citizens who do not want to browse many projects every month.

## What Layer 0 should not do

Layer 0 should not:

- show an infinite feed of projects;
- work like a social network timeline;
- display complex project metrics;
- show technical fiscalization details;
- show detailed evidence packages;
- show full project sheets;
- promote projects for payment;
- prioritize projects through opaque manual curation;
- overwhelm the citizen with all possible actions.

## Relationship with Layer 1

Layer 0 leads to Layer 1: compact project lists.

Examples:

- clicking "Childhood" opens childhood-related projects;
- clicking "Need fiscalizer" opens projects needing fiscalizers;
- clicking "Near me" opens projects near the citizen;
- clicking a search result opens a compact list;
- clicking an urgent project opens that project's card or compact detail.

Layer 0 category order is a personal navigation preference. Layer 1 project order is a visible discovery rule and must show which ordering mode is being used.

## Final Layer 0 structure

```text
Layer 0 — Home / Discovery

A. Available civic allocation
B. Urgent now, maximum 2 projects
C. Explore by value
D. Projects that need something
E. Search
F. Delegate / automatic profile
```

User-customized example:

```text
Layer 0 — Home / Discovery

A. Available civic allocation
B. Sports
C. Need fiscalizer
D. Near me
E. Almost ready
F. Search
```

This customization affects only the citizen's Home surface. It does not remove hidden categories from Explore or search.

## Principle

> The home layer should help citizens choose a path, not force them to evaluate projects immediately or accept a hidden platform ordering as neutral.

## Status

Accepted as Citizen Home / Discovery Layer v0.
