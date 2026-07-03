# C044 - C016's AI Red Gate vs C008's Assist-Not-Decide Boundary

## Status

Open — pending author review. Surfaced as a sub-threshold note by the cross-resolution audit (both sides are C-generation rules, a seam no earlier review examined).

## Contradiction

Side A — the boundary rule, `docs/48_AI_ASSISTANCE_AND_C008_RESOLUTION.md:15`: "AI assists; the protocol decides." — with `docs/48:73` listing final decisions AI must not make (e.g., admitting or dismissing complaints as final decision).

Side B — the milestone validator, `docs/54` (C016): "The milestone plan must be reviewed by a specialized AI validator before the project can receive funding… Critical validation failures block financeable publication until corrected" (`docs/54:87-90`), with Red defined as "not financeable until corrected" (`docs/54:201,440`).

## Why they are in tension

An AI whose Red output blocks financeable publication is making a consequential gate decision, not assisting one. The mitigations are real — `docs/54:88` says the validator "does not decide whether the project is valuable," and `docs/54:487` keeps Red blockers "limited to critical non-fiscalizable configurations" — so the defensible reading is compiler-like rule application (the protocol defines what is incoherent; the AI detects it). But C008 never names this exception, and no rule states what a proposer can do against a wrong Red beyond correcting the plan.

## Author-intent side

Unclear — genuine design decision. Both readings are coherent: (a) structural-coherence checking is protocol decision, not AI decision, and C008 should say so explicitly (naming C016's validator as the sanctioned case, with a human review path for contested Reds); or (b) Red should be an escalation to a human/protocol decision rather than an automatic block.

## Proposed treatment

Author chooses (a) or (b). Either way, add the cross-reference in both docs and a contest path for a wrong Red (the A011 moderation-abuse machinery is the natural surface).

## Severity

Medium — a boundary the external-review round's legal reviewer would probe, sitting between two accepted rules.
