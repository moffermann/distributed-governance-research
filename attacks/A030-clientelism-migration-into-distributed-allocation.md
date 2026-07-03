# A030 - Clientelism Migration into Distributed Allocation

## Status

Proposed in second-round architecture attack. Pending paired Phase 3 review; no defense brief or resolution yet.

## Description

Clientelist machines adapt to new institutions rather than dying with the old ones. Brokers can migrate into the system as delegates, participation-support providers, community organizations, or project intermediaries, exchanging allocation behavior for private favors — jobs, goods, cash, access — arranged entirely off the platform. Unlike A010, which addresses visible delegation concentration, and A014, which addresses declared and hidden related-party control, this attack targets an exchange that is invisible by construction: the quid pro quo happens off-platform, so relationship graphs, represented-weight disclosure, and related-party declarations never capture it. The platform can show that a broker holds many delegations and can show that broker's on-platform relationships, but it cannot see the delivered turkey, the promised municipal job, or the withheld favor that produced those delegations.

## Location in current project

- `docs/27_CITIZEN_DELEGATION_FLOW.md` delegation request, acceptance, and base-rule flow that a broker can aggregate.
- `docs/76_DELEGATION_CONCENTRATION_STRESS_THRESHOLDS_AND_A010_RESOLUTION.md` represented-weight and related-delegate observability that stops at the platform boundary.
- `docs/80_RELATED_PARTY_RELATIONSHIP_GRAPH_AND_A014_RESOLUTION.md` related-party graph covering on-platform ownership, control, and supplier links.
- `knowledge/hypotheses/H028-related-party-conflict-of-interest.md` declaration and classification of related-party conflicts.
- `knowledge/hypotheses/H043-transparent-delegation-concentration.md` concentration visibility, reports, and revocation signals.
- `knowledge/principles/P005-separation-public-support-private-benefit.md` separation of public support from private benefit.

## Problem

The architecture's anti-capture instruments are observability instruments: they expose what happens on the platform. Clientelism defeats them by moving the consideration off the platform. A broker builds a real-world exchange relationship — delivering goods, arranging work, mediating access to services — and converts it into on-platform allocation power by accumulating delegations or by steering "supported" citizens' funding toward the broker's preferred projects. Every on-platform action is clean and auditable; the corruption lives in the off-platform side of the exchange, which the relationship graph cannot reach. Participation-support projects are an especially convenient vehicle, because they legitimately fund a broker to "help citizens participate," which is indistinguishable on its face from a machine paying agents to deliver a bloc.

Example:

```text
In a peri-urban commune, a neighborhood operator runs a funded
participation-support project helping residents use the platform.
Off-platform, the operator offers help with paperwork, food parcels, and
municipal-job referrals to residents who delegate their sports-scope
allocation to it.
On-platform, everything looks like voluntary delegation and legitimate
support work; the graph shows concentration but no exchange.
```

## Recommended resolution path

- Name off-platform clientelism as an explicit, distinct risk class rather than assuming the related-party graph covers it, and document its invisibility as a known Core v0 boundary.
- Strengthen participation-support projects with independent beneficiary confirmation and anti-conditioning declarations, since they are the primary migration vehicle.
- Add behavioral anomaly indicators — geographically clustered delegations to one broker, synchronized allocation patterns, delegation spikes near local benefit distributions — as observability signals, not automatic sanctions.
- Preserve and surface frictionless private revocation, so a delegator can exit a coercive relationship without the broker observing the exit at action time.
- Route credible reports of vote-buying-style exchange to complaint, competent-authority, or electoral-integrity channels, since the off-platform act may be a legal matter beyond platform consequence.
- Keep hard anti-broker bans out of Core v0 in favor of visibility, anomaly signals, independent confirmation, and legal referral, consistent with the house philosophy.

## Theoretical base and citations

- Susan Stokes, Thad Dunning, Marcelo Nazareno, and Valeria Brusco, `Brokers, Voters, and Clientelism` (2013): brokers sustain machines through embedded, monitored exchange relationships that formal reforms rarely reach.
- Herbert Kitschelt and Steven Wilkinson (eds.), `Patrons, Clients, and Policies` (2007): clientelist linkage coexists with and adapts to democratic and programmatic institutions rather than disappearing.
- James C. Scott, "Corruption, Machine Politics, and Political Change" (1969): machines survive institutional change by re-embedding exchange in whatever new arenas allocation moves to.
- Javier Auyero, `Poor People's Politics` (2000): brokers operate through problem-solving networks that citizens experience as help, blurring favor and coercion.

## Social reasons

Clientelism thrives on need. Citizens who depend on a broker for food, work, or access to services are least able to refuse the implicit terms of the exchange, and most likely to experience it as legitimate help rather than capture. A system that funds participation support without guarding against conditioning can subsidize the very machines it hoped to displace, at the expense of the people it most wanted to empower.

## Conflicts of interest

- Brokers can profit privately from allocation power obtained through off-platform favors while appearing as ordinary delegates.
- Participation-support providers have an incentive to convert support relationships into steered allocation.
- Local incumbents can fund friendly community organizations as laundering channels for machine influence.
- Project intermediaries can trade access to their pipeline for delegated weight or steered funding.

## Inconsistencies to test

- The related-party graph exposes on-platform relationships, but the corrupt consideration occurs off-platform where the graph is blind.
- Delegation is voluntary by design, but voluntariness cannot be verified when it is purchased with off-platform favors.
- Participation-support projects are meant to widen access, but they can fund the labor of a clientelist machine.
- P005 separates public support from private benefit, but that separation is only enforceable for benefits the platform can observe.

## Stress scenario

A commune shows healthy participation metrics: many residents delegate, several participation-support projects operate, and the related-party graph reveals no hidden control. An investigative report later documents that a single operator delivered goods and municipal-job promises in exchange for delegations across four neighborhoods, steering a large represented weight toward projects run by allied clubs. Every on-platform record is clean and every delegation formally voluntary. The system can display the concentration but has no signal, object, or channel that captures the off-platform exchange that produced it, and no way to distinguish this operator from a genuine participation helper.

## Review checklist

- Is off-platform clientelist exchange named as a distinct risk with a documented observability boundary?
- Do participation-support projects require independent beneficiary confirmation and anti-conditioning declarations?
- Are behavioral anomaly indicators (geographic clustering, synchronized allocation, benefit-timed spikes) surfaced?
- Can a delegator revoke privately without the broker observing the exit at action time?
- Is there a routing path to complaint or competent authority for credible exchange reports?
- Can an observer distinguish a genuine participation helper from a broker without relying only on on-platform data?

## Expected resolution output

A future Phase 3 review round should define off-platform clientelism as a distinct risk class with anti-conditioning safeguards for participation-support projects, behavioral anomaly indicators, and a legal-referral path, without pretending the on-platform relationship graph makes the exchange visible.
