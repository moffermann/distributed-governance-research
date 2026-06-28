# Citizen Compact Project List Layer v0

## Purpose

This document freezes Layer 1: the compact project list.

Layer 1 appears after the citizen chooses an entry path from Layer 0, such as a value category, project need, territory, recommendation, or search.

Layer 1 is the first place where the citizen compares multiple projects.

## Core principle

> Layer 1 is for fast comparison, search, and direct action across projects.

It should not be a full project sheet and should not force the citizen into technical details.

## Entry points into Layer 1

Layer 1 can be reached from:

- Layer 0 value categories;
- Layer 0 project-need groups;
- search results;
- urgent project groupings;
- territory filters;
- recommendations;
- the bottom navigation tab for Explore.

Example paths:

```text
Home → Childhood → Compact project list
Home → Need fiscalizer → Compact project list
Home → Near me → Compact project list
Bottom tab → Explore → Compact project list
```

## Bottom navigation access

The application should include a bottom navigation tab that lets citizens reach project exploration directly.

Recommended bottom navigation:

```text
Home
Explore
Assign
Following
Profile
```

### Home

Opens Layer 0: discovery and navigation.

### Explore

Opens Layer 1: compact project list with search, filters, categories, and project cards.

### Assign

Supports direct allocation of the citizen's available civic amount.

### Following

Shows projects the citizen funds, follows, fiscalizes, provides evidence for, commented on, denounced, or otherwise participates in.

### Profile

Shows identity, preferences, delegation, automatic profiles, notifications, and reputation where applicable.

## Search at top

Layer 1 should include a search bar at the top.

Example:

```text
Search projects, commune, topic, organization, or keyword
```

If the citizen entered Layer 1 from a category, the search should default to that context but allow widening the scope.

Example:

```text
Childhood
[Search within Childhood]
[Search all projects]
```

This allows focused exploration without trapping the citizen inside the initial category.

## Quick filters

Below the search bar, Layer 1 may show quick filters.

Examples:

- Near me;
- Almost ready;
- Need funding;
- Need fiscalizer;
- Need evidence;
- New;
- Urgent;
- In execution;
- Open projects;
- Closing soon.

Filters should be simple and citizen-readable.

## Compact project item

Each project in the list should be displayed as a compact card.

It should include:

- project name;
- one-sentence description;
- value icons;
- funding progress;
- missing amount;
- project state;
- missing closure conditions where relevant;
- key signal counts;
- direct action button.

## Example compact project item

```text
Escuela deportiva infantil en Maipú

Entrenamientos gratuitos para 80 niños durante 6 meses.

👧 Infancia · ⚽ Deporte · ❤️ Salud

$7,560,000 of $12,000,000
Missing $4,440,000

State:
Open project

Needs:
🛡 0/1 fiscalizer · 📎 2/4 evidence producers

Signals:
👥 80   💰 1,240   💬 35   🚩 0   📎 12

[Fund]
```

## Click behavior

The compact project item should be a dashboard of access points.

- clicking the project name opens the project card / dashboard;
- clicking a value icon opens value thesis detail;
- clicking funding opens funding detail;
- clicking fiscalizer count opens fiscalizer detail;
- clicking evidence opens evidence detail;
- clicking beneficiary count opens beneficiary detail;
- clicking comments opens discussion;
- clicking complaints opens complaint detail;
- clicking the direct action button begins the relevant action.

## Direct action button

The main button should adapt to the project's current missing condition or the user's selected context.

Examples:

```text
[Fund]
[Offer as fiscalizer]
[Provide evidence]
[Follow]
[View]
```

If the citizen entered from "Need fiscalizer", the primary button may be:

```text
[Offer as fiscalizer]
```

If the citizen entered from "Need funding", the primary button may be:

```text
[Fund]
```

If the citizen entered from "Near me", the primary button may still be funding or following depending on project state.

## List context header

The list should show the citizen where they are.

Examples:

```text
Childhood projects
Projects that need fiscalizers
Projects near you
Search results for: Maipú deporte
```

This avoids confusion when the same list component is reused across different entry paths.

## What Layer 1 should not do

Layer 1 should not:

- show full technical project details;
- show long descriptions;
- show full fiscalization methodology;
- show full evidence packages;
- show every metric;
- show raw audit trails;
- force the citizen into advanced mode;
- overwhelm the citizen with too many actions per project.

Layer 1 should be compact, comparable, and actionable.

## Relationship with other layers

Layer 0 helps the citizen choose a path.

Layer 1 shows the projects inside that path.

Layer 2 opens the project card / dashboard for one project.

Layer 3 opens details for a specific icon or signal.

## Principle

> Layer 1 should let citizens compare projects quickly, search within or beyond a context, and act directly without losing access to deeper details.

## Status

Accepted as Citizen Compact Project List Layer v0.
