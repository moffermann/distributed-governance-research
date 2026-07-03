# A010 - Delegation Concentration

## Status

Reviewed in paired Phase 3 review. Improvements integrated in [[76_DELEGATION_CONCENTRATION_STRESS_THRESHOLDS_AND_A010_RESOLUTION|docs/76_DELEGATION_CONCENTRATION_STRESS_THRESHOLDS_AND_A010_RESOLUTION.md]] and propagated into the core corpus.

## Description

The architecture permits citizen-chosen delegation concentration with visibility, warnings, reports, and configurable caps. This attack asks whether visible concentration is enough or whether delegates become new power centers.

## Location in current project

- [[03_ROADMAP|docs/03_ROADMAP.md]] Phase 3 priority objection: delegation concentration.
- [[61_DELEGATION_CONCENTRATION_VISIBILITY_AND_C023_RESOLUTION|docs/61_DELEGATION_CONCENTRATION_VISIBILITY_AND_C023_RESOLUTION.md]].
- [[H043-transparent-delegation-concentration|knowledge/hypotheses/H043-transparent-delegation-concentration.md]].
- [[H046-delegated-action-reporting|knowledge/hypotheses/H046-delegated-action-reporting.md]].
- [[27_CITIZEN_DELEGATION_FLOW|docs/27_CITIZEN_DELEGATION_FLOW.md]].
- [[v0-delegation-state|docs/diagrams/v0-delegation-state.md]].

## Problem

Delegation reduces participation burden but can create de facto political machines, especially if citizens ignore warnings, reports are weak, related delegates split influence, or participation-support projects acquire delegations indirectly.

Example:

```text
A local sports federation receives delegation from many citizens.
It funds projects designed by related clubs and suppliers while reports remain formally complete but not meaningful.
```

## Recommended resolution path

- Keep concentration warnings before delegation and represented-weight disclosure when delegates act.
- Add proportional related-delegate indicators through existing delegation, related-party disclosure, participation-support, and audit records.
- Require system-generated delegated-action reports with meaningful summaries.
- Preserve immediate revocation for future actions.
- Treat hard caps as configurable and public, not default universal rules.
- Avoid creating a new concentration authority, universal veto, or heavy mandatory network-analysis layer for Core v0.

## Theoretical base and citations

- Robert Michels, `Political Parties` (1911): organized representation can drift toward oligarchy.
- Christian Blum and Christina Isabel Zuber, "Liquid Democracy: Potentials, Problems, and Perspectives" (2016): liquid delegation creates flexibility but also concentration risks.
- Anson Kahng, Simon Mackenzie, and Ariel Procaccia, "Liquid Democracy: An Algorithmic Perspective" (2018): delegation networks can produce structural concentration and algorithmic issues.
- Mancur Olson, `The Logic of Collective Action` (1965): organized groups can dominate diffuse citizens.
- Robert Dahl, `Who Governs?` (1961): power distribution must be empirically visible, not assumed.

## Social reasons

Delegation can include citizens who lack time, but it can also replace direct participation with a new intermediary class. The model must preserve delegation as assistance, not political asset management.

## Conflicts of interest

- Delegates may favor organizations that support them.
- Related delegates may split influence to avoid visible concentration.
- Participation-support projects may become acquisition channels.
- High-concentration delegates may pressure fiscalizers or project actors informally.

## Inconsistencies to test

- Citizen choice supports delegation concentration, but concentration may reduce distributed control.
- Reports preserve accountability, but citizens may ignore them.
- Caps can reduce concentration, but configurable caps can be politically abused.

## Stress scenario

A delegate controls enough represented weight to fund most projects in a planning scope. The platform shows warnings, but citizens keep delegation active because revocation requires attention.

## Review checklist

- Is represented weight visible at action time?
- Are related delegate clusters detected or declared?
- Are reports concise and source-linked?
- Can citizens revoke easily?
- Are cap rules public, versioned, and non-retroactive by default?

## Expected resolution output

A Phase 3 resolution should define delegation-concentration stress thresholds, related-delegate observability, and report sufficiency as reinforcement of existing delegation/reporting/audit mechanisms, not as a new Core v0 primary entity or universal cap.
