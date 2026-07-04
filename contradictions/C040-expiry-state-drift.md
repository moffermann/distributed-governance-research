# C040 - Expiry-State Drift Across Lifecycle Enumerations

## Status

Accepted (define it) — corrected in the one-hundred-sixteenth residual cleanup: docs/104 defines the closure-deadline Expired outcome with the docs/85 fund-treatment menu, and docs/29 now lists both expiry states.

## Contradiction

Side A — several lifecycle enumerations carry expiry states the resolutions never defined or omit ones they did: both project state diagrams define a plain `Expired` state distinct from `ExpiredUnfunded` (`v0-project-lifecycle-state.md:49`, `v0-project-object-state-with-phase-substates.md:30`, echoed in the exceptional-states list of `docs/12_OPEN_PROJECT_PARALLEL_CLOSURE_MODEL.md`), and `docs/29:1138-1150`'s creator-side state list omits Expired Unfunded entirely.

Side B — `docs/85` (funding-window expiry resolution) defines only the "Expired Unfunded" outcome; no document specifies what a plain "Expired" project state is or how it differs; `docs/101_CORE_V0_MINIMAL_PUBLISHABLE_MODEL.md:458` lists only "expired unfunded" among exceptional states; `docs/30_PROJECT_LIFECYCLE_AFTER_PUBLICATION_FLOW.md:104` and the refined diagram carry Expired Unfunded as a real state.

## Why they cannot both be true

Either "Expired" (deadline expiry with funding complete but closure never achieved?) is a real, distinct state — in which case no resolution defines its rules — or it is not, in which case two diagrams and docs/12 carry a phantom state. And docs/29's list is missing a state every other enumeration includes.

## Author-intent side

Unclear — a plain closure-deadline expiry may be genuinely intended (distinct from funding-window expiry). If so, it needs a definition; if not, it should be removed.

## Proposed treatment

Author decides whether "Expired" (non-funding) is a real state. If yes: define its trigger and fund treatment (possibly a small resolution doc). If no: remove it from both diagrams and docs/12, and in either case add Expired Unfunded to docs/29's list.

## Severity

Low — exceptional-path states, but implementation-facing.
