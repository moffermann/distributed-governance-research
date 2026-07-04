# Closure Deadline Expiry and C040 Resolution v0

## Purpose

Define the plain `Expired` project state that the project state diagrams and [[12_OPEN_PROJECT_PARALLEL_CLOSURE_MODEL|docs/12_OPEN_PROJECT_PARALLEL_CLOSURE_MODEL.md]] carried without a defining rule — the consistency-audit finding [[C040-expiry-state-drift|contradictions/C040-expiry-state-drift.md]].

## Status

Accepted resolution for C040. This document formalizes an outcome the diagrams already drew ("deadline expires without valid closure"); it adds no new entity and reuses the fund-treatment machinery of [[85_FUNDING_WINDOW_EXPIRY_AND_BUDGET_LIQUIDITY_SMOOTHING_RESOLUTION|docs/85_FUNDING_WINDOW_EXPIRY_AND_BUDGET_LIQUIDITY_SMOOTHING_RESOLUTION.md]].

## Problem

The corpus defined one expiry outcome precisely — `Expired Unfunded`, when the funding window closes without financing closure (docs/85) — but the lifecycle surfaces also showed a second, undefined expiry: a project that *did* close its funding yet never satisfied its remaining closure conditions (fiscalization assignment, evidence commitments, beneficiary confirmation, guarantees) within its declared deadline, and obtained no approved reformulation. Without a rule, committed funds in that limbo had no defined treatment and the state had no defined trigger.

## Core v0 resolution

`Expired` is the project outcome for closure-deadline expiry after funding closure.

Minimum rule:

- trigger: the project's declared closure deadline passes with funding closed but at least one other closure condition unsatisfied, and no approved reformulation or extension is active;
- the transition is automatic and recorded, like every lifecycle transition — it is a project/protocol outcome, not a withdrawal, and creates no ordinary voluntary-withdrawal right (consistent with C005, [[42_FUNDING_COMMITMENT_AND_C005_RESOLUTION|docs/42_FUNDING_COMMITMENT_AND_C005_RESOLUTION.md]]);
- no funds have been disbursed in this state by construction (disbursement requires execution readiness), so all committed, unreleased funds follow the same configured treatment menu as `Expired Unfunded` (docs/85): return to citizen available balance, reassignment under the citizen's automatic allocation profile, reassignment under active delegation where valid, or the protocol fallback;
- the expired project remains historically visible with its reason, and republication or cloning follows the docs/85 republication rules;
- deadline configuration and any extension are visible Threshold Policy / Governance Resolution matters, never silent edits;
- projects already in execution never expire: once disbursement has begun, deadline and delivery failures follow the execution machinery — milestone retention and recovery (A017), reformulation (C017), pause and material suspension, revocation, and closure evaluation (C018) — because expiry without accounting would be an escape from live obligations.

## Distinction from Expired Unfunded

`Expired Unfunded` ends a project the funding market declined; `Expired` ends a project the funding market accepted but whose control preconditions never assembled. The second is rarer and more informative: repeated `Expired` outcomes in a scope signal thin control supply ([[90_CONTROL_SUPPLY_OBSERVABILITY_AND_A022_RESOLUTION|A022]]) or unrealistic closure conditions, not weak demand.

## Macul example

The sports school closes its funding in week three, but no eligible fiscalizer accepts assignment within the 90-day closure deadline and no reformulation is approved. The project moves to `Expired`; every funder's committed share follows their configured treatment; the project page shows "Expired: fiscalization assignment never completed," and the scope's control-supply indicators record the case.

## Citizen simplicity

The citizen sees one sentence: "This project's funding was complete, but its independent-control setup did not finish in time; your contribution followed your configured rule." No new concept is introduced on the citizen surface.

## Scope boundary and limitation

Core v0 defines the trigger, the fund treatment, and the visibility; deadline lengths and extension policies are Threshold Policy and country-implementation configuration. Limitation statement: the boundary between a justified extension and a strategic one is procedural (a visible Governance Resolution), not substantive — a captured authority can extend indefinitely in full public view, which is the A016 observability territory, not a solved problem.

## Residual risks

- Aggressive deadlines convert thin control markets into expiry cascades (mitigated by A022 observability and capacity-calibrated configuration).
- Serial extensions can keep zombie projects alive visibly; the record makes the pattern auditable but does not prevent it.

## Integration target

This resolution should inform the project state diagrams (both carry `Expired` already), docs/12's exceptional-state list, docs/29/30's state enumerations, the entity/state map, and the schema draft's project lifecycle states.
