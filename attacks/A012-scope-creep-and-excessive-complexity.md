# A012 - Scope Creep and Excessive Complexity

## Status

Reviewed in paired Phase 3 review. Improvements integrated in `docs/78_COMPLEXITY_BUDGET_AND_A012_RESOLUTION.md`.

## Description

The architecture has grown from project funding into planning scopes, value packages, evidence contracts, fiscalization, complaints, reputation, guarantees, delegation, operating modes, and audit events. This attack asks whether the model is becoming too complex to implement, govern, or use.

## Location in current project

- `docs/03_ROADMAP.md` Phase 3 priority objection: scope creep and excessive complexity.
- `docs/34_CORE_V0_SCOPE_FREEZE.md`.
- `knowledge/principles/P006-layered-complexity-and-citizen-simplicity.md`.
- `docs/49_LAYERED_CITIZEN_STATE_TRANSLATION_AND_C009_RESOLUTION.md`.
- `docs/64_FORMAL_ENTITY_INVENTORY_V0.md`.
- `docs/66_IMPLEMENTABLE_OBJECT_SCHEMA_DRAFT_V0.md`.

## Problem

Each safeguard solves a real failure mode, but the combined system may become a procedural maze. Complexity can exclude ordinary citizens, create implementation delays, or give experts and administrators new control.

Example:

```text
A small school-supplies project faces value thesis, evidence contract, fiscalization, guarantee, threshold policy, related-party review, and complaint-readiness rules that cost more than the project risk justifies.
```

## Recommended resolution path

- Enforce proportional procedural burden through `ThresholdPolicy`.
- Keep ordinary citizen actions simple and expandable.
- Define a minimum viable v0 path for low-risk projects.
- Create escalation tiers rather than universal heavy procedure.
- Treat new architecture additions as attacks or extensions unless they protect a core failure mode.

## Theoretical base and citations

- Herbert Simon, `Administrative Behavior` (1947): bounded rationality limits what actors can process.
- Charles Perrow, `Normal Accidents` (1984): tightly coupled complex systems can fail in unexpected ways.
- Michael Power, `The Audit Society` (1997): control systems can expand into ritualized bureaucracy.
- Oliver Williamson, `The Economic Institutions of Capitalism` (1985): governance structures must account for transaction costs.
- Sherry Arnstein, "A Ladder of Citizen Participation" (1969): procedural participation can become symbolic if ordinary people cannot meaningfully influence it.

## Social reasons

If only professionals can navigate the system, the project fails its own democratic premise. Complexity must live in audit layers and professional workflows, not in ordinary citizen participation.

## Conflicts of interest

- Experts may benefit from procedural complexity.
- Administrators may use complexity to slow unwanted projects.
- Large organizations can absorb burden better than small community groups.
- Platform vendors may prefer feature expansion over institutional clarity.

## Inconsistencies to test

- The project values transparency and auditability, but full audit detail can overwhelm citizens.
- Proportional burden exists, but exact status profiles remain implementation work.
- The schema is implementable as a logical model, but not yet a database/API design.

## Stress scenario

A low-risk cultural workshop cannot publish because it gets stuck satisfying controls designed for infrastructure projects.

## Review checklist

- Does every required step correspond to a material risk?
- Is there a low-risk fast path?
- Can citizens understand project status without learning every object?
- Are expert layers hidden enough for usability but visible enough for audit?
- Are Extension v1+ ideas prevented from entering Core v0 by default?

## Expected resolution output

A Phase 3 resolution should define a complexity budget or procedural-burden test for new v0 requirements.
