# Concept — Algorithm as Coordinator, Not Decider

A critical distinction in the theory is between an algorithm that decides and an algorithm that coordinates. ^rd5bd6cd6

## Decider model

A central algorithm evaluates all options and determines the outcome. This risks recreating centralized power.

## Coordinator model

The algorithm records, aggregates, and executes millions of individual decisions. The decision remains distributed.

## Social network analogy

A social network algorithm does not decide which post a person will like or comment on. The user decides. The platform coordinates and records millions of interactions.

In a governance analogy:

- posts become projects;
- likes or interactions become resource assignments;
- people decide what they value;
- the system coordinates the resulting allocation.

## Two coordination mechanisms, distinguished

The analogy above holds through two distinct mechanisms, and the simulation evidence separates them. Direct per-citizen choice — each engaged citizen allocating to specific projects — is real but minoritarian: under realistic attention, most citizens route their share through the civic autopilot (defaults, profiles, delegation, per [[H033-system-defined-default-allocation-rule|H033]] and [[../../docs/93_ENGAGEMENT_DECAY_METRICS_AND_A025_RESOLUTION|A025]]), so "each like is an allocation" describes the active layer, not the whole. The coordinator claim survives at the aggregate level: the pre-registered E4 experiment found that dispersed citizen signals, aggregated into the weight vector the passive share follows, outperform fixed-bandwidth central construction at every tested scale — the crowd can supply the coordinates even when individuals do not supply the attention. Two preconditions carry that result: an aggregation institution must exist (the same signals without one are wasted), and signals must remain honest and independent — social-proof cascades ([[../../docs/95_HERDING_OBSERVABILITY_AND_A027_RESOLUTION|A027]]) and strategic reporting are the analogy's failure modes, not central algorithms alone.
