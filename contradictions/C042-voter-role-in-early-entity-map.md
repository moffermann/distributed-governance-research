# C042 - Early Entity Map Carries a "Voter" Role the Consolidated Map Dropped

## Status

Accepted — corrected in the one-hundred-sixteenth residual cleanup.

## Contradiction

Side A — `docs/08_ENTITY_AND_ROLE_MAP.md:28,137`: lists "voter" as a citizen role and a core role.

Side B — `docs/35:36-49,137-160` (consolidated actor/role map): no "voter" role exists; `docs/101:70,87` frames the model as explicitly not voting-based; voting survives only in the narrow protocol-change context (C019).

## Why they cannot both be true

The early map presents a role the consolidated model deliberately does not have — and whose absence is a stated identity marker of the model ("citizens do not merely vote").

## Author-intent side

Side B.

## Proposed treatment

Either update docs/08's role lists (dropping "voter" or renaming to the protocol-change vote context) or mark docs/08 as superseded by docs/35. Small fix.

## Severity

Low — early document, but the term contradicts the model's public identity.
