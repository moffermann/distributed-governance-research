# A002 - Information Capture and Visibility Control

## Status

Reviewed in paired Phase 3 review. Improvements integrated in [[68_MATERIAL_VISIBILITY_AND_A002_RESOLUTION|docs/68_MATERIAL_VISIBILITY_AND_A002_RESOLUTION.md]].

## Description

The architecture depends on material claims, contextualized evidence, comments, complaints, discovery visibility, assisted deliberation, and audit access. The attack asks whether actors can capture what citizens see, what fiscalizers receive, or what the platform treats as salient.

## Location in current project

- [[03_ROADMAP|docs/03_ROADMAP.md]] Phase 3 priority objection: information capture.
- [[33_DISTRIBUTED_GOVERNANCE_SYSTEM_V0_BLUEPRINT|docs/33_DISTRIBUTED_GOVERNANCE_SYSTEM_V0_BLUEPRINT.md]] sections on distributed trust, contextualized evidence, assisted deliberation, and discovery.
- [[63_PROJECT_DISCOVERY_VISIBILITY_USER_CUSTOMIZATION_AND_C025_RESOLUTION|docs/63_PROJECT_DISCOVERY_VISIBILITY_USER_CUSTOMIZATION_AND_C025_RESOLUTION.md]].
- [[48_AI_ASSISTANCE_AND_C008_RESOLUTION|docs/48_AI_ASSISTANCE_AND_C008_RESOLUTION.md]].
- [[H003-distributed-trust|knowledge/hypotheses/H003-distributed-trust.md]].
- [[H023-incentive-architecture-for-reliable-information|knowledge/hypotheses/H023-incentive-architecture-for-reliable-information.md]].

## Problem

Distributed governance does not eliminate information asymmetry. It may multiply the places where information can be shaped: project summaries, value claims, evidence selection, fiscalizer reports, AI summaries, discovery ordering, and citizen-facing labels.

Example:

```text
The Macul project summary highlights "sports access" and "community value" but hides an unresolved design omission around bathrooms and accessibility.
The project is technically visible in Layer 5, but most citizens only see the short card.
```

## Recommended resolution path

- Define material information claims that must be source-linked.
- Require visibility reasons for promoted, urgent, recommended, or highlighted project states.
- Keep dissent, contradictions, insufficient evidence, and open complaints visible in compact summaries when material.
- Treat AI summaries as source-visible assistance, not as evidence or evaluation.
- Add a verified-discovery path for material omitted information.

## Theoretical base and citations

- Friedrich Hayek, "The Use of Knowledge in Society" (1945): dispersed knowledge is valuable but hard to aggregate centrally.
- George Akerlof, "The Market for Lemons" (1970): information asymmetry can degrade trust and selection quality.
- George Stigler, "The Theory of Economic Regulation" (1971): regulated information environments can be captured by interested actors.
- Douglass North, `Institutions, Institutional Change and Economic Performance` (1990): institutions structure incentives and information.
- Joshua Kroll et al., "Accountable Algorithms" (2017): algorithmic systems require procedural accountability, not blind reliance.
- Frank Pasquale, `The Black Box Society` (2015): opaque information intermediaries can create hidden power.

## Social reasons

Citizens cannot deliberate well if the visible layer hides serious limitations. A system built to reduce institutional opacity must not recreate opacity through interface design, AI summaries, or evidence ordering.

## Conflicts of interest

- Proposers and executors benefit from emphasizing favorable claims.
- Platform operators may prefer high-engagement projects.
- Fiscalizers and evidence producers may hide methodological limits to protect reputation.
- Authorities in tutored mode may hide politically inconvenient rejection patterns.

## Inconsistencies to test

- Citizen simplicity requires short views, but accountability requires nuance.
- AI assistance may improve comprehension while also creating anchoring bias.
- Discovery visibility is explainable in C025, but default design can still shape attention.

## Stress scenario

A project has weak evidence and a pending complaint, but the Home layer shows it as "popular" and "almost funded." Citizens fund it without seeing the unresolved risk.

## Review checklist

- Are material omissions treated as responsibility events when reviewed?
- Can citizens reach source records from every material label?
- Are algorithmic or editorial visibility reasons audit-recorded?
- Are dissent and contradictions preserved in compact views?
- Can verified discovery correct misleading visibility?

## Expected resolution output

A Phase 3 resolution should define minimum material-claim visibility rules and a stronger relation between `MaterialInformationClaim`, `AssistedDeliberationContext`, `VerifiedDiscovery`, and discovery surfaces.
