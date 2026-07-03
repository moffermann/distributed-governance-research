# C039 - Two Project State Diagrams Define Incompatible Parent Machines, Both Listed as Current

## Status

Open — pending author review.

## Contradiction

Side A — `docs/diagrams/v0-project-lifecycle-state.md:18,23-24`: models `FundingOpen`, `ClosureReview`, and `PhaseGateReview` as parent-level Project states ("OpenProject --> FundingOpen … ClosureReview --> PhaseGateReview").

Side B — `docs/diagrams/v0-project-object-state-with-phase-substates.md:28-32,82-84` (which states it "refines the older project lifecycle diagram"): the parent machine is OpenProject → ExecutionReady / RequiresReformulation / Expired / ExpiredUnfunded / Revoked, with funding and phase-gate states existing only inside the ProjectPhase substate machine — consistent with `docs/12:187-193` and `docs/101:458`.

## Why they cannot both be true

An implementer building from diagram A creates parent states the consolidated model rejects. `docs/36` lists both diagrams as current primary sources (#3 and #13) without marking #3 superseded, so nothing tells the reader which machine is authoritative.

## Author-intent side

Side B — the refined diagram matches the consolidated entity/state map and the publishable model.

## Proposed treatment

Mark `v0-project-lifecycle-state.md` as superseded by the refined diagram (header note + docs/36 annotation), or delete it from the primary list. Do not redraw it — the refined diagram already exists.

## Severity

Medium — implementation-facing ambiguity in the diagram set.
