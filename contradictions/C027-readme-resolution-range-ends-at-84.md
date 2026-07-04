# C027 - Both Queue READMEs Assert Resolutions End at docs/84

## Status

Accepted — corrected in the one-hundred-sixteenth residual cleanup.

## Contradiction

Side A — the stale range claims:

> The accepted Phase 3 resolutions are in `docs/67` through `docs/84`. (`attacks/README.md:11`)
> The accepted Phase 3 resolutions are in `docs/67` through `docs/84`. (`defenses/README.md:18`)

Side B — the actual state, asserted later in the same files:

> attacks/README.md:79 notes A019-A033 resolutions are `docs/86` through `docs/100`; the external-review table (attacks/README.md:87-88) references `docs/102`-`docs/103`; the defenses table (defenses/README.md:73-96) references resolutions through `docs/103`.

## Why they cannot both be true

The purpose statements say the resolution set ends at docs/84; the tables in the same documents reference nineteen accepted resolutions beyond it (docs/85-103). A reader of the purpose paragraph alone gets a false picture of the corpus.

## Author-intent side

Side B — all 35 resolutions are accepted and propagated (roadmap, one-hundred-fourteenth cleanup).

## Proposed treatment

Update both purpose paragraphs to "docs/67 through docs/103" (or "docs/67 through docs/84 for the first round, docs/86 through docs/103 for the later rounds"). Mechanical fix.

## Severity

Medium — internal-facing, but these are the entry documents for the adversarial record.
