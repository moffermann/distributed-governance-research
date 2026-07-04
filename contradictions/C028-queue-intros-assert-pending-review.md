# C028 - Second-Round Queue Intros and Rows Assert Present-Tense Pending Review

## Status

Accepted — corrected in the one-hundred-sixteenth residual cleanup.

## Contradiction

Side A — present-tense pending claims:

> They follow the same brief format but are **pending paired Phase 3 review**: no defense briefs or accepted resolutions exist yet. (`attacks/README.md:59`)
> All 15 second-round table rows read `pending paired review` (`attacks/README.md:63-77`)
> They follow the same structure but are **paired review drafts**: no accepted resolution documents exist yet (`defenses/README.md:69`)

Side B — the same files, lines later:

> Note: A019-A033 have since completed paired review; their accepted resolutions are `docs/86` through `docs/100` (`attacks/README.md:79`); every D019-D035 row in `defenses/README.md:73-96` reads "resolved in docs/86...103".

## Why they cannot both be true

The intro paragraphs and status cells assert, in the present tense, a state ("no resolutions exist yet") that the same documents contradict twenty lines later. The correcting note was appended without updating the text it corrects.

## Author-intent side

Side B — everything is resolved and propagated.

## Proposed treatment

Rewrite both intro paragraphs in past tense ("were proposed... and have since completed paired review"), change the 15 status cells to their resolution references (matching the first-round table's format), and drop the now-redundant correcting note. Mechanical fix.

## Severity

Medium — internal-facing; confusing to any new reader of the adversarial record.
