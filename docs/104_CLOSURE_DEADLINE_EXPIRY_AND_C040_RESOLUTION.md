# Closure Deadline Expiry and C040 Resolution v0

## Purpose

Resolve the undefined plain `Expired` project state that the project state diagrams and [[12_OPEN_PROJECT_PARALLEL_CLOSURE_MODEL|docs/12_OPEN_PROJECT_PARALLEL_CLOSURE_MODEL.md]] carried — the consistency-audit finding [[C040-expiry-state-drift|contradictions/C040-expiry-state-drift.md]] — by the author's design decision: there is no second expiry state.

## Status

Accepted resolution for C040. This document removes a phantom state rather than adding one; it reuses the expiry machinery of [[85_FUNDING_WINDOW_EXPIRY_AND_BUDGET_LIQUIDITY_SMOOTHING_RESOLUTION|docs/85_FUNDING_WINDOW_EXPIRY_AND_BUDGET_LIQUIDITY_SMOOTHING_RESOLUTION.md]] unchanged.

## Resolution decision

The control package is part of the project. Under the parallel-closure model, a project is operatively funded only when its whole closure package assembles — financing, independent fiscalization assignment, evidence commitments, beneficiary confirmation, and required guarantees. Financing closure alone does not make a project funded: committed money that can never convert into an executable project was never operative funding.

Therefore the corpus defines exactly one expiry outcome:

- **`Expired Unfunded`** is the project outcome whenever the closure window ends with *any* closure condition unsatisfied and no approved reformulation or extension active — whether the unmet condition was the financing itself or any other part of the package.
- The former plain `Expired` state is removed from both project state diagrams, docs/12's exceptional-state list, and every lifecycle enumeration.
- All committed, unreleased funds follow the docs/85 treatment menu unchanged: return to citizen available balance, reassignment under the citizen's automatic allocation profile, reassignment under active delegation where valid, or the protocol fallback. No funds have been disbursed by construction, since disbursement requires execution readiness.
- The `Expired Unfunded` record carries a recorded **expiry reason** distinguishing which closure condition failed (financing shortfall; fiscalization assignment never completed; evidence commitments unmet; beneficiary confirmation missing; guarantees not materialized). One state, visible reasons.

## Why the reason field matters

The two failure paths are diagnostically different even though the outcome is one: financing shortfall means the funding market declined the project; a control-package shortfall with financing closed means the market accepted it but the scope's control preconditions never assembled. Repeated cases of the second reason feed the control-supply density indicators of [[90_CONTROL_SUPPLY_OBSERVABILITY_AND_A022_RESOLUTION|A022]] — they signal thin verification supply or unrealistic closure conditions, not weak demand.

## Boundary: projects in execution never expire

Once disbursement has begun, deadline and delivery failures follow the execution machinery — milestone retention and recovery (A017), reformulation (C017), pause and material suspension, revocation, and closure evaluation (C018) — never expiry, because expiry without accounting would be an escape from live obligations.

## Macul example

The sports school closes its financing in week three, but no eligible fiscalizer accepts assignment within the closure window and no reformulation is approved. The project moves to `Expired Unfunded` with reason "fiscalization assignment never completed"; every funder's committed share follows their configured treatment; the scope's control-supply indicators record the case.

## Citizen simplicity

The citizen sees one sentence: "This project did not complete all its conditions in time; your contribution followed your configured rule." The reason is visible on the expanded record, not on the default surface.

## Scope boundary and limitation

Core v0 defines the single outcome, the reason field, and the fund treatment; window lengths and extension policies remain Threshold Policy and country-implementation configuration. Limitation statement: the boundary between a justified extension and a strategic one is procedural (a visible Governance Resolution), not substantive — a captured authority can extend indefinitely in full public view, which is A016 observability territory, not a solved problem.

## Residual risks

- Aggressive windows convert thin control markets into expiry cascades (mitigated by A022 observability and capacity-calibrated configuration).
- Serial extensions can keep zombie projects alive visibly; the record makes the pattern auditable but does not prevent it.

## Integration target

This resolution should inform both project state diagrams (plain `Expired` removed; the `Expired Unfunded` transition label covers any unsatisfied closure condition), docs/12's exceptional-state list, docs/29/30/35's state enumerations, and the expiry-reason field on the Funding Attempt / project expiry record in the schema draft.
