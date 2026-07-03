# Engagement Decay Metrics and A025 Resolution v0

## Status

Accepted Phase 3 resolution.

Paired review:

- Attack: `attacks/A025-rational-ignorance-and-participation-decay.md`
- Defense: `defenses/D025-rational-ignorance-and-participation-decay.md`

## Resolution decision

A025 is founded as a behavioral prediction. Each citizen's monthly civic allocation is individually small, so by Downsian logic the rational return on careful evaluation is near zero and most citizens route their allocation through the cheapest channel — the public default, a stored profile, or a trusted delegate. Participatory-budgeting evidence compounds the concern: active evaluation spikes at launch and decays over subsequent cycles, leaving a shrinking, self-selected active core whose choices are then displayed as the aggregated will of the whole. The architecture never assumed universal active judgment — its intermediation channels are designed, visible, revocable, and auditable — but engagement decay and active-core concentration are not currently measured. The accepted resolution is engagement-decay and active-core observability integrated into functional transition maturity.

Under `knowledge/principles/P007-integrate-or-bound-rule.md`, this resolution integrates metrics through the existing H054 transition-maturity object, which already lists the share handled by default allocation and direct-versus-delegated participation — hooks the resolution extends rather than a new entity. The simulation vindicates the architecture's designed-intermediation position: `research/simulation-results.md` shows allocation quality is carried by the institutional default anchor conditioned on planner knowledge, while quintupling citizen attention moves quality selection by at most ~0.08 and essentially nothing in default-anchored regimes. Decay must therefore be measured and disclosed, not denied.

## Rule added to Core v0

The mix of manual, profile-driven, delegated, and default allocation is a measured, versioned public property of each cycle, and citizen-facing legitimacy language must distinguish considered choice from default and profile carry-over. Engagement decay and active-core concentration are tracked across cycles, not only at launch.

Minimum elements:

- per-cycle shares of manual, profile-driven, delegated, and untouched-default allocation as versioned public metrics;
- active-core concentration indicators tracking whether the same minority persists across cycles;
- citizen-facing legitimacy language that distinguishes deliberate evaluation from default and profile carry-over, so distributed judgment is not overstated;
- cadence-fatigue review that evaluates the monthly cycle for decay effects, not only for preventing dormant balances;
- these signals fed into H054 functional transition maturity rather than an internal-only dashboard.

## Macul example

In a Macul-scale pilot where perhaps 4% evaluate projects manually after launch novelty fades and the rest default, keep a stored profile, or delegate to a club, the multi-court project's funding is decomposed: how much came from deliberate evaluation, how much from stored profiles, how much from delegates, and how much from the untouched public default. A journalist who asks how many people actually evaluated the winning projects gets a real answer, citizens can revoke a delegate or edit a profile the moment they disagree, and the platform does not present default and profile allocation as considered choice.

## Citizen simplicity

Citizens should see, per cycle, how their allocation was produced, with a plain label such as `this month your funds followed your saved profile — no project was evaluated`, and a public figure for how much of a project's funding reflected deliberate evaluation versus carry-over.

## Transparency and accountability effect

Participation decay becomes a first-class public metric rather than an unstated assumption, the difference between activity and considered choice is preserved in citizen-facing language, and the concentration of effective control in a persistent minority or a handful of delegates and one default rule is made visible rather than displayed as the will of the whole.

## Scope boundary and limitation

Core v0 measures and discloses the participation mix; it does not mandate participation quotas or engagement targets, and cohort-refresh or sampling mechanisms that periodically renew the active core remain Extension v1+ options subject to visibility and audit. Measurement does not by itself reverse decay.

Limitation statement: if the active core shrinks enough, distributed control becomes intermediated control with better bookkeeping, and while better bookkeeping is a real improvement over a zero-observability baseline, the system must not present default and profile allocation as considered choice.

## Residual risks

- Measurement discloses decay but does not reverse it; a shrinking active core may still stand in for the whole.
- The active cohort may remain demographically skewed even where capacity is equal and supported.
- The monthly cadence may itself accelerate fatigue, a hypothesis the cadence-fatigue review can surface but not by itself resolve.

## Integration target

This resolution should inform automatic allocation profiles, delegation, the system default allocation rule, H054 functional transition maturity metrics, and administrative observability.
