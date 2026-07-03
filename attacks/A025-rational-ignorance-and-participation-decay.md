# A025 - Rational Ignorance and Participation Decay

## Status

Reviewed in paired Phase 3 review. Improvements integrated in `docs/93_ENGAGEMENT_DECAY_METRICS_AND_A025_RESOLUTION.md`.

## Description

Each citizen's monthly civic allocation is individually small, so the rational return on carefully evaluating projects is close to zero, and most citizens will decline to invest the attention the model assumes. The architecture's own remedies — delegation, AI context, automatic allocation profiles, and the public system default — resolve this by converting distributed judgment back into intermediated judgment, so the visible "distributed control" is exercised by a small, self-selected active core plus a handful of delegates and default rules. Unlike A009, which attacks unequal capacity to participate, this attack holds even under perfectly equal capacity: it is the incentive structure of low-stakes individual choice, not the distribution of skills, time, or connectivity, that drives disengagement.

## Location in current project

- `knowledge/hypotheses/H041-distributed-participation-capacity.md`, which assumes participation can be distributed and assisted but treats capacity, not incentive to attend, as the binding constraint.
- `knowledge/hypotheses/H038-monthly-use-it-or-allocate-it-cycle.md`, the monthly use-it-or-allocate-it rule that pushes inactive balances into default and profile allocation.
- `docs/28_CITIZEN_AUTOMATIC_ALLOCATION_PROFILE_FLOW.md`, the automatic profile that lets a citizen participate without ever evaluating a project.
- `docs/27_CITIZEN_DELEGATION_FLOW.md`, delegation as a low-friction substitute for direct judgment.
- `docs/15_CITIZEN_HOME_DISCOVERY_LAYER.md`, the discovery surface that concedes most citizens will not evaluate many projects each month.
- `knowledge/principles/P006-layered-complexity-and-citizen-simplicity.md`, the "simple to participate, deep to audit" principle that reduces friction but not the underlying stakes.
- `docs/75_PARTICIPATION_EQUITY_INDICATORS_AND_A009_RESOLUTION.md`, which frames participation gaps as a capacity and observability problem rather than a rational-ignorance problem.

## Problem

The system divides a bounded public budget into many tiny individual allocations. For a rational citizen, the expected influence of a well-researched monthly decision on any outcome is negligible, while the time cost of reading project sheets, evidence, and audit trails is real. Downsian logic predicts that most citizens will therefore remain deliberately uninformed and route their allocation through the cheapest available channel: the public default, a stored profile, or a trusted delegate. The architecture supplies exactly those channels and treats their uptake as success, but each one re-concentrates the judgment the model claims to distribute. The remaining active core who do evaluate projects is small and self-selected, and its choices are then displayed as if they were the aggregated will of the whole eligible population.

Participatory-budgeting and civic-tech experience compounds the concern: engagement typically spikes at launch, when the mechanism is novel, and decays over subsequent cycles, leaving a shrinking cohort whose composition drifts from the general population. A monthly cadence accelerates the fatigue. The danger is not that citizens are incapable, but that a rational citizen correctly concludes that close evaluation is not worth it, so "distributed control" quietly becomes control by defaults, profiles, delegates, and a persistent minority.

Example:

```text
In the Macul sports pilot, 100,000 residents each receive about $1,000/month.
After launch novelty fades, 4% still evaluate projects manually.
The rest accept the public default, keep a stored profile, or delegate to a club.
The multi-court project is "chosen by citizens," but the effective choosers
are a few hundred active users plus a handful of delegates and one default rule.
```

## Recommended resolution path

- Treat active-participation decay as a first-class observability signal: publish per-cycle shares of manual allocation, profile allocation, delegated allocation, and untouched-default allocation, as a versioned public metric rather than an internal dashboard.
- Distinguish, in citizen-facing legitimacy language, allocation produced by deliberate evaluation from allocation produced by defaults and profiles, so distributed judgment is not overstated.
- Consider Core v0 friction-reduction that lowers evaluation cost without hiding stakes: batched review of a small rotating set, salient "your default did X this month" summaries, and easy one-tap correction.
- As an Extension v1+ option, allow reweighting or sampling mechanisms that periodically refresh the active cohort so the same minority does not persist indefinitely, subject to visibility and audit.
- Keep defaults, profiles, and delegation available, but require that the report each produces states plainly that no direct evaluation occurred, preserving the difference between activity and considered choice.
- Frame perfect participation as out of scope (consistent with A009): the goal is honest measurement and disclosure of decay, not a mandate that every citizen evaluate every project.

## Theoretical base and citations

- Anthony Downs, `An Economic Theory of Democracy` (1957): rational citizens facing low individual influence choose to remain uninformed, producing rational ignorance.
- Albert Hirschman, `Exit, Voice, and Loyalty` (1970): the costliness of voice relative to its return shapes whether members engage or default to passivity.
- Brian Wampler, `Participatory Budgeting in Brazil: Contestation, Cooperation, and Accountability` (2007): participatory-budgeting engagement is uneven and concentrated in a mobilized minority rather than the general population.
- Tiago Peixoto and Jonathan Fox, "When Does ICT-Enabled Citizen Voice Lead to Government Responsiveness?" (2016): digital participation channels frequently attract narrow, self-selected users and decay without sustained incentives.
- Mancur Olson, `The Logic of Collective Action` (1965): in large groups, individually rational actors underinvest in collective goods absent selective incentives.

## Social reasons

Ordinary people have finite attention and many competing demands. When a decision is both individually low-stakes and cognitively costly, disengagement is not apathy or incapacity but a reasonable allocation of scarce attention. A system that offers frictionless defaults will see most citizens take them, and a monthly cycle makes sustained evaluation feel like an unpaid recurring chore. The social risk is that the model markets itself as distributed citizen control while, in practice, most control flows through a few intermediaries and one protocol default that the majority never revisits.

## Conflicts of interest

- Delegates and large support organizations benefit from citizen disengagement, since it enlarges their represented weight without contest.
- Platform operators may prefer high default-uptake because it produces continuous allocation flow and usage metrics that signal adoption.
- Whoever authors the public default allocation rule gains outsized influence over the passive majority's share.
- Incumbent institutions that dislike genuine distributed control may quietly prefer a decayed, minority-driven system that is easier to predict and lobby.
- Active-core participants may entrench their preferences as "the citizens' choice" and resist mechanisms that would dilute their standing.

## Inconsistencies to test

- The model claims distributed judgment, but its remedies for disengagement (defaults, profiles, delegation) re-intermediate that judgment.
- The monthly cycle is defended as preventing dormant funds, but frequent low-stakes decisions may accelerate the very fatigue that pushes citizens to defaults.
- P006 promises that participation is simple, but reducing friction lowers cost without raising the individual stakes that would justify attention.
- A009's resolution treats missing participation as a capacity and observability issue, but rational ignorance predicts persistent non-participation even where capacity is equal and fully supported.

## Stress scenario

A national program runs distributed allocation across a full public function for two years. Launch participation is high, and press coverage celebrates citizen control. By the sixth monthly cycle, manual evaluation has fallen below five percent of eligible citizens; the rest are carried by the public default and stored profiles, and a small set of delegates concentrates most of the remaining active weight. The active core is demographically skewed toward younger, more connected, more organized residents. The platform's public reports still describe outcomes as citizen-allocated, and no surface distinguishes considered choices from default carry-over. When a journalist asks how many people actually evaluated the winning projects, the system can show total allocation but cannot show how little of it reflected deliberate judgment.

## Review checklist

- Does the system publish, per cycle, the share of allocation that was manual, profile-driven, delegated, or untouched default?
- Can a citizen and an observer distinguish allocation produced by evaluation from allocation produced by defaults?
- Is participation decay tracked over successive cycles rather than only at launch?
- Are citizen-facing legitimacy claims bounded so that default and profile allocation are not presented as considered distributed judgment?
- Is there any mechanism to refresh or sample the active cohort so a persistent minority does not stand in for the whole?
- Does the monthly cadence get evaluated for fatigue effects, not only for preventing dormant balances?

## Resolution output

Resolved in `docs/93_ENGAGEMENT_DECAY_METRICS_AND_A025_RESOLUTION.md`: classified founded as a behavioral prediction and integrated through H054 functional transition maturity under P007. Core v0 gained per-cycle shares of manual, profile-driven, delegated, and untouched-default allocation as versioned public metrics, active-core concentration indicators tracking whether the same minority persists across cycles, citizen-facing legitimacy language distinguishing deliberate evaluation from default and profile carry-over, and cadence-fatigue review of the monthly cycle. The simulation (`research/simulation-results.md`) vindicates the designed-intermediation position quantitatively: allocation quality is carried by the institutional default anchor conditioned on planner knowledge, and citizen attention adds little, so decay must be measured and disclosed rather than denied. Core v0 does not mandate participation quotas or engagement targets; if the active core shrinks enough, distributed control becomes intermediated control with better bookkeeping, and the system must not present default and profile allocation as considered choice.
