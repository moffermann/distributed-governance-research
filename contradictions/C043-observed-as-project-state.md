# C043 - docs/12 Promotes "Observed" to a Project-Level Exceptional State

## Status

Accepted — corrected in the one-hundred-sixteenth residual cleanup.

## Contradiction

Side A — `docs/12_OPEN_PROJECT_PARALLEL_CLOSURE_MODEL.md:199`: lists "Observed" as a project-level exceptional state (alongside Paused, Reformulation required, Expired, Revoked).

Side B — `docs/101_CORE_V0_MINIMAL_PUBLISHABLE_MODEL.md:458` (exceptional states: paused, reformulated, revoked, expired unfunded — no "Observed") and the state diagrams, where "Observed" and "AdmittedNonBlocking" are evidence/complaint statuses (`v0-contextualized-evidence-item-state.md:47`, `v0-complaint-evidence-and-review-state.md:63`), not project states.

## Why they cannot both be true

A status either belongs to the Project state machine or to the evidence/complaint machines; docs/12 is the only document placing it at project level, and no transition rules exist for a project-level "Observed".

## Author-intent side

Probably Side B (evidence-level status), but the author may intend a project-level "under observation" flag — if so it is undefined everywhere else.

## Proposed treatment

Remove "Observed" from docs/12's project-level list (or, if intended, define it as a project state with entry/exit rules — which would need a small resolution).

## Severity

Low — single-document drift on an exceptional path.
