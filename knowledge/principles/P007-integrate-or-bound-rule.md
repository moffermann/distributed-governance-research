# P007 — Integrate or Bound Rule

## Principle

A founded attack produces a new Core v0 mechanism only when the failure mode, left unanswered, would defeat a core-thesis claim and cannot be controlled through existing objects. Every other founded attack is answered by bounding: an explicit scope boundary, visible residual risk, and a recorded limitation statement. ^r520eddb3

## Rationale

The research corpus has reached the point where the core thesis — functional layer distribution, separated roles, citizen allocation, conditional disbursement, auditable evidence, layered observability — is fully presented. Past this point, each additional mechanism raises complexity cost (A012) faster than it raises credibility, while each honestly declared limitation raises credibility at near-zero complexity cost.

Academic practice supports bounding: a paper is not expected to resolve every objection. It is expected to integrate objections that threaten the validity of its core claims and to state the rest openly in a limitations section. Unbounded integration is scope creep; unbounded deferral is evasion. This rule draws the line explicitly.

Bounding is not dismissal. A bounded attack remains classified as founded, its residual risk stays visible, and its limitation statement becomes paper material.

## Test

When an accepted resolution is drafted for a founded attack, ask:

1. If this failure mode is left without a mechanism, can a reviewer dismiss a core-thesis claim? If no, bound it.
2. Can the risk be controlled through existing objects — ThresholdPolicy, profiles, reviews, responsibility events, audit trail, administrative observability — without a new primary entity or required field set? If yes, integrate minimally through them.
3. Can one review round produce a decidable rule? If no, bound it and record it as an open limitation.
4. Is the remedy jurisdiction-specific — legal enforcement, registries, admissibility, sanctions? Route it to country implementation.
5. Is the remedy advanced analytics, scoring, or detection machinery? Route it to Extension v1+.

Every bounded resolution must leave three artifacts: an explicit boundary sentence ("Core v0 does not require X"), a visible residual risk, and a one-sentence limitation statement usable in the paper's limitations section.

## Example

Objection:

> Colluding roles can defeat accountability, so Core v0 needs an automated collusion-detection engine.

Integrate-or-bound response:

Collusion attacks the role-separation claim, so it cannot be ignored (test 1). But its control fits existing objects: relationship declarations, repeat-cluster visibility, corroboration requirements, verified discovery, and responsibility events (test 2). Detection engines are analytics machinery (test 5). The resolution therefore integrates observability through existing objects and bounds the rest: Core v0 does not promise collusion detection; off-platform coordination is a recorded limitation.

## Status

Editorial principle governing accepted Phase 3 resolutions and their propagation. Formalizes the complexity-budget discipline of [[78_COMPLEXITY_BUDGET_AND_A012_RESOLUTION|docs/78_COMPLEXITY_BUDGET_AND_A012_RESOLUTION.md]].
