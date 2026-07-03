# Project Discovery Visibility, User Customization, and C025 Resolution v0

## Purpose

This document resolves contradiction C025 from the v0 contradiction checklist.

C025 was originally framed as the risk that project discovery, urgent highlights, recommendations, and category ordering could bias resource allocation. Even when the system does not directly allocate money, interface visibility can shape citizen attention, and attention can influence funding.

The final v0 resolution is not to remove discovery. A large project system needs discovery. The resolution is to make discovery simple, explainable, user-configurable, non-commercial, and auditable.

## Status

Accepted as the v0 resolution for C025.

## Core principle

> Discovery may organize attention, but it must not become a hidden allocator.

The discovery layer can help citizens find projects.

It must not secretly decide which projects deserve resources.

## The contradiction

The citizen interface needs a home and discovery layer because a national or large-scale project system may contain thousands or millions of projects.

Without discovery, citizens would face an undifferentiated list and participation would become too costly.

But discovery changes visibility:

- projects shown first receive more attention;
- urgent highlights may receive more funding;
- recommended projects may look more legitimate;
- hidden or low-ranked projects may receive less support;
- default category order can quietly shape what citizens see first.

The contradiction is:

```text
The system needs discovery to keep participation usable,
but discovery can become a hidden form of allocation if its criteria are opaque.
```

## Resolution

C025 is resolved by distinguishing personal navigation, project-list ordering, urgent highlighting, and recommendations.

Accepted v0 rules:

```text
1. Layer 0 remains a navigation surface, not a project feed.
2. Home discovery categories may be reordered, pinned, collapsed, or hidden by the user.
3. User customization affects only the user's personal navigation surface.
4. Hidden Home categories remain reachable through search, filters, Explore, or reset controls.
5. Project lists must show their ordering mode.
6. Citizens must be able to change ordering modes.
7. Highlighted or recommended projects must show why they appear.
8. Urgent highlights are limited to one or two projects and require a visible protocol reason.
9. No paid promotion is allowed in Core v0.
10. No opaque manual boosting is allowed in Core v0.
11. Funding still requires explicit citizen action.
12. Material discovery reasons must be visible and auditable, while advanced influence metrics remain optional Extension v1+ or implementation-level observability.
```

## Distinction: Home categories vs project ranking

C025 introduces an important distinction:

```text
Home category order = personal navigation preference.
Project list order = visible discovery rule.
```

These are not the same mechanism.

### Home category order

The Home layer may show categories such as:

```text
Near me
Childhood
Education
Sports
Need fiscalizer
Almost ready
Closing soon
Search
```

The citizen may personalize this surface:

```text
Pin: Sports
Move up: Need fiscalizer
Hide: Culture
Collapse: Education
Reset to default
```

This customization reduces the platform's hidden power over the user's first screen.

However, hiding a Home category does not delete projects, change project eligibility, change public visibility metrics, or remove the category from search and Explore.

### Project list order

When a citizen enters a list, the list must show the ordering mode.

Examples:

```text
Childhood projects
Sorted by: Near me

Projects that need fiscalizers
Sorted by: Closing soon

Sports projects
Sorted by: Almost ready
```

The citizen should be able to switch the ordering mode through simple controls.

Possible v0 ordering modes:

```text
Near me
Closing soon
Almost ready
Need funding
Need fiscalizer
Need evidence producer
New
Most supported
Random rotation
Search relevance
```

Advanced personalized ranking may exist later, but Core v0 should rely first on simple, visible, explainable modes.

Role-performance history may be shown as a visible signal or used as an explicit filter only when it remains role-scoped, explainable, and auditable.

It should not become a hidden default ranking, a universal performance score, a public-value-per-currency ranking, or an automatic allocation rule.

## Layer 0 rule

Layer 0 should remain a navigation surface.

It should not become:

- an infinite feed;
- a commercial showcase;
- a popularity contest;
- a paid promotion area;
- a hidden institutional curation surface;
- a substitute for citizen choice.

The citizen's first experience should be choosing a path, not being silently pushed toward a project.

An Assisted Deliberation Context under H006 may explain why a project deserves consideration or what should be reviewed carefully. It should not become a hidden discovery boost, paid promotion, automatic ranking, or substitute for visible ordering and recommendation reasons.

## Home customization rule

Core v0 should allow citizens to configure the Home categories they see first.

Allowed personal controls:

- reorder categories;
- pin categories;
- collapse categories;
- hide categories from Home;
- restore the default layout;
- edit declared discovery preferences;
- disable or reduce personalized recommendations where implemented.

Constraints:

- customization affects only the user's personal Home;
- hidden categories remain available through Explore and search;
- personalization must not change project state;
- personalization must not change funding rules;
- personalization must not change eligibility for urgent highlighting;
- personalization must not hide public audit metrics.

## Urgent highlight rule

Urgent highlights are allowed only as a narrow exception.

Core v0 constraints:

```text
Maximum: one or two highlighted projects.
Reason: visible protocol reason required.
Rotation: rule-based.
Payment: no paid promotion.
Manual boosting: no opaque manual favoritism.
Citizen choice: the citizen can ignore the block and continue browsing.
```

Valid urgent reasons include:

- funding closes soon;
- project is almost complete and needs a small missing amount;
- project urgently needs a fiscalizer to become execution-ready;
- project urgently needs evidence producers;
- project responds to an emergency or time-sensitive need;
- delay would cause meaningful value loss;
- project has a critical closure condition pending.

Example:

```text
Urgent now

School sports equipment delivery
Needs 1 fiscalizer - closes in 3 days
Shown because: missing fiscalizer + deadline near

[View] [Offer help]
```

## Recommendation rule

Recommendations may exist, but they must explain why a project appears.

Examples:

```text
Shown because: near your commune.
Shown because: matches Sports and Childhood preferences.
Shown because: close to funding completion.
Shown because: needs fiscalizer and you are eligible.
Shown because: matches a roadmap branch you follow.
```

Core v0 should prefer declared preferences and visible filters over complex inferred ranking.

Hybrid inferred personalization remains compatible with the project, but detailed recommender systems should be treated as Extension v1+ unless they are explainable, configurable, and auditable.

## No paid promotion

Core v0 excludes paid visibility.

Projects should not buy:

- Home placement;
- urgent slots;
- category priority;
- recommendation priority;
- search rank;
- list rank;
- visual prominence.

Projects should compete through value thesis, evidence, relevance, fiscalization, support, reputation, urgency, and explicit citizen preference, not through attention purchase.

## No opaque manual boosting

Core v0 also excludes opaque manual boosting.

If a project receives special visibility because of a protocol condition, the condition must be visible.

Rejected rule:

```text
The platform team secretly boosts a favored project.
```

Accepted rule:

```text
The project appears in an urgent slot because it meets the published urgent-slot rule.
```

If an implementation has a tutored or administrative mode, visibility decisions that materially affect project discovery should be traceable through the governance-resolution or audit-trail mechanisms defined elsewhere in the project.

## Funding remains explicit

Discovery is not funding.

A project appearing first, appearing in an urgent slot, or appearing as recommended does not allocate money.

The citizen must still take an explicit funding, delegation, automatic-profile, fiscalization, evidence-production, following, or comment action.

This preserves the distinction:

```text
Discovery layer:
  helps the citizen find projects.

Decision layer:
  citizen action, delegation, or citizen-configured automatic profile allocates support.
```

## Observability rule

Because discovery influences attention, the system should preserve enough visibility for review without turning Core v0 into a ranking-surveillance system.

Core v0 observability should include the material reasons and settings that explain discovery surfaces:

- list-ordering mode used before funding;
- filters used where material;
- urgent-slot reason;
- recommendation reason;
- nearby or followed-scope reason;
- protocol version or rule source;
- share of users customizing Home categories;
- share of users hiding or pinning categories.

Privacy-preserving aggregate metrics such as funding paths from search, category navigation, urgent highlights, recommendations, delegation, or automatic profiles may be added where implementation capacity exists. Causal exposure-to-funding attribution, per-impression ranking logs, and ranking-bias dashboards are Extension v1+ or implementation-level observability, not Core v0 gates.

## Technical audit rule

Material discovery decisions should be reconstructable.

The audit trail does not need to expose every low-level ranking calculation to ordinary citizens, but it should preserve enough information for review:

- ordering mode;
- filters used;
- urgent-slot reason;
- recommendation reason;
- protocol version;
- personalization setting used where relevant;
- timestamp;
- user action after exposure in aggregate or privacy-preserving form.

This supports auditability without turning the ordinary citizen interface into a technical dashboard.

A008 later narrows this rule: platform influence must remain bounded by visible reasons, user controls, source-linked warnings, AI-assistance traces, and rule-change auditability, but Core v0 should not add a separate platform-influence entity or dedicated citizen-facing algorithmic audit panel.

## Example: customized Home

A citizen is mainly interested in sports projects and fiscalization opportunities.

Default Home:

```text
Near me
Childhood
Education
Health
Sports
Need fiscalizer
Almost ready
Search
```

User-customized Home:

```text
Sports
Need fiscalizer
Near me
Almost ready
Search
```

Hidden from Home:

```text
Culture
Housing
Nature
```

These hidden categories remain available through Explore and search. The user has changed their personal navigation, not the system's public project rules.

## Example: project list ordering

The citizen opens Sports projects.

The list shows:

```text
Sports projects
Sorted by: Almost ready

[Change sort]
```

Available modes:

```text
Near me
Closing soon
Almost ready
Need fiscalizer
New
Random rotation
```

If the citizen chooses `Need fiscalizer`, the same project list is reorganized by a visible rule.

## Example: recommendation transparency

A project appears as recommended:

```text
Escuela deportiva infantil en Maipu
Shown because: Sports + Childhood + near your commune + needs fiscalizer.
```

The user can still ignore it, change recommendation settings, search manually, or sort lists differently.

## Relationship with H031

H031 established that the discovery layer is not a decision layer.

C025 makes that principle operational:

```text
Discovery can organize attention, but it must show why projects appear and must not sell or hide visibility.
```

## Relationship with H032

H032 allows hybrid explicit and inferred preference discovery, but requires explainability, configurability, and auditability.

C025 classifies simple category customization and visible ordering modes as Core v0.

Advanced inferred recommender systems remain Extension v1+ unless their behavior can be explained, corrected, disabled, and audited.

## C025 final resolution

C025 is resolved as follows:

```text
Core v0 keeps Layer 0 as a navigation surface, not a hidden allocation feed. Citizens may reorder, pin, collapse, or hide Home categories as a personal navigation preference, while hidden categories remain available through Explore and search. Project lists must show their ordering mode and allow citizens to switch ordering modes. Urgent highlights are limited, rule-based, and explained. Recommendations must show why a project appears. Paid promotion and opaque manual boosting are excluded from Core v0. Discovery influence must be bounded through visible reasons, user controls, source-linked warnings, AI-assistance traces, and audit mechanisms because visibility can affect funding even when funding remains an explicit citizen action.
```

Final rule:

> The platform may help citizens find projects, but it must not secretly choose which projects deserve attention, legitimacy, or resources.

## Documents that should eventually reflect this resolution

This resolution should inform the integration pass for:

- Layered citizen interface model;
- Citizen Home / Discovery Layer;
- Citizen Compact Project List Layer;
- Citizen Funding Flow;
- Citizen Project Following Flow;
- Automatic Allocation Profile Flow;
- Transparent Project Discovery Layer hypothesis;
- Hybrid Explicit and Inferred Preference Discovery hypothesis;
- Universal observability baseline;
- technical audit trail;
- contradiction checklist;
- future implementable schema.

## Remaining risks

- Visual design may still bias attention even when the rule is visible.
- Default Home ordering may still influence citizens who never customize it.
- Users may hide categories and then miss projects they would have valued.
- Urgency labels may be gamed by project proponents.
- Recommendations may become opaque if advanced inferred ranking is added too early.
- Observability metrics may reveal influence after the fact but not prevent every bias.
- Country implementations may be tempted to add manual boosting under administrative language.

## Mitigations

- keep Layer 0 category-based rather than feed-based;
- allow Home reordering, hiding, pinning, and reset;
- keep Explore and search always available;
- show ordering modes in project lists;
- explain recommendations and urgent highlights;
- exclude paid promotion from Core v0;
- exclude opaque manual boosting from Core v0;
- limit urgent highlights to one or two projects;
- use rule-based rotation for urgent slots;
- preserve material discovery reasons and optional aggregate discovery observability;
- preserve audit traces for material discovery decisions;
- defer advanced recommender systems to Extension v1+ unless explainability and auditability are strong enough.

## Design rule

> Discovery should reduce cognitive cost without transferring hidden allocation power to the interface.
