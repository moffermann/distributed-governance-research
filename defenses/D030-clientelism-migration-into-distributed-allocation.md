# D030 - Defense Against A030: Clientelism Migration into Distributed Allocation

## Integration status

Second-round paired review completed. Accepted resolution: [[98_CLIENTELISM_PATTERN_INDICATORS_AND_A030_RESOLUTION|docs/98_CLIENTELISM_PATTERN_INDICATORS_AND_A030_RESOLUTION.md]]. Propagated into the core corpus.

## Attack reference

- Attack file: [[A030-clientelism-migration-into-distributed-allocation|attacks/A030-clientelism-migration-into-distributed-allocation.md]]
- Attack title: `A030 - Clientelism Migration into Distributed Allocation`
- Source: second-round attack queue, off-platform clientelist exchange.

## Attack summary

The attack argues that clientelist machines adapt to new institutions rather than dying with the old ones. Brokers can migrate into the system as delegates, participation-support providers, community organizations, or project intermediaries, exchanging allocation behavior for private favors — jobs, goods, cash, access — arranged entirely off the platform. The quid pro quo is invisible by construction: because the exchange happens off-platform, relationship graphs, represented-weight disclosure, and related-party declarations never capture it. The platform can show that a broker holds many delegations and can show its on-platform relationships, but it cannot see the delivered turkey, the promised municipal job, or the withheld favor that produced those delegations.

In the example, a peri-urban neighborhood operator runs a funded participation-support project helping residents use the platform while, off-platform, offering paperwork help, food parcels, and municipal-job referrals to residents who delegate their sports-scope allocation to it. On-platform everything looks like voluntary delegation and legitimate support work; the graph shows concentration but no exchange.

## Objective evaluation

- Classification: founded as an adaptation risk.
- Why it is founded: the architecture's anti-capture instruments are observability instruments that expose on-platform behavior, and the corrupt consideration in clientelism lives on the off-platform side of the exchange, which the related-party graph cannot reach. Participation-support projects are an especially convenient migration vehicle because they legitimately fund a broker to help citizens participate.
- Why it is not fatal to the architecture: off-platform quid pro quo is equally invisible under current clientelism, but today the allocation side is also invisible, whereas the platform makes delegation patterns, funding flows, related-party graphs, and delegated-action reports fully traceable, so machine behavior becomes statistically detectable over time in a way street-level clientelism never was. Under P001, participatory-budgeting evidence shows that institutional design reduced clientelist mediation in several Brazilian cities.
- Difference of judgment: medium. Whether pattern-level detectability is a meaningful check or a false comfort is arguable, but both sides agree the exchange itself is off-platform.
- Editorial distortion risk: medium. The attack would distort the project if it treated all community organization, brokerage, and participation help as clientelism; genuine participation helpers and clientelist machines can look identical on their face, and the platform must not presume the former is the latter.

## Response

The defense is that the platform cannot see the off-platform favor but makes the on-platform half of the exchange — which today is equally invisible — fully traceable, converting a purely relational transaction into a statistically detectable pattern while keeping sanction where it belongs, in external law.

The attack correctly locates the corruption in the off-platform consideration, and the corpus already reserves consequence for exactly the on-platform conditions the platform can observe. Delegation concentration remains allowed by default, but significant concentration triggers visible stress indicators, report sufficiency, and related-delegate checks, and the resolution set explicitly includes delegate-funding-to-related-projects observability. The related-party graph reaches delegate and funder relationships to project actors, and related-party status is not automatic invalidity while hidden, severe, or control-relevant relationships pull stronger safeguards. Where a conflict is hidden or misrepresented, H028 already routes it to complaint or review, possible pause or disbursement block, correction, and a role-specific Responsibility Event when proven. None of this sees the delivered food parcel — but all of it makes the broker's accumulation, its funding of allied projects, and its related-party ties into durable, auditable records. The single street-level exchange stays invisible; the machine that repeats it thousands of times across four neighborhoods leaves a statistical signature the corpus can be extended to surface.

Two on-platform properties blunt the coercion the attack describes. First, delegation concentration must be shown before delegation, during delegated action, in reports, and in administrative observability, and Core v0 imposes no automatic monetization — delegation is non-compensated by default. A broker cannot quietly convert delegated weight into an automatic commission; participation-support work must be a separate transparent project rather than a hidden delegation fee. Second, revocation is immediate for future actions and resumes the citizen's base allocation profile, so a delegator can exit a coercive relationship without the broker controlling the exit at action time. The corpus itself concedes the residual: H043 lists that participation-support projects may become indirect delegation-acquisition tools if not transparent, and that related delegates may split influence across multiple entities to reduce visible concentration. That is the honest boundary — the platform's separation of public support from private benefit (P005) is enforceable only for benefits the platform can observe.

For the peri-urban operator, the defense is not that the platform detects the municipal-job promise; it does not. It is that the operator's participation-support funding, its represented weight across four neighborhoods, its delegated-action pattern, and its related-project funding are all recorded and comparable over time, so an investigator, fiscalizer, or electoral-integrity authority has a traceable pattern to act on — geographically clustered delegations to one broker, synchronized allocation, delegation spikes near local benefit distributions. Under P001, the current baseline offers investigators nothing comparable: neither the favor nor the allocation it bought is visible. The platform cannot make the off-platform act a platform consequence, so credible exchange reports route to complaint, competent-authority, or electoral-integrity channels where the off-platform quid pro quo is a legal matter.

## Project-document basis

- [[76_DELEGATION_CONCENTRATION_STRESS_THRESHOLDS_AND_A010_RESOLUTION#^r5aca18ca|docs/76_DELEGATION_CONCENTRATION_STRESS_THRESHOLDS_AND_A010_RESOLUTION.md]] states significant concentration should trigger visible stress indicators, report sufficiency, and related-delegate checks.
- [[76_DELEGATION_CONCENTRATION_STRESS_THRESHOLDS_AND_A010_RESOLUTION#^r75a529e1|docs/76_DELEGATION_CONCENTRATION_STRESS_THRESHOLDS_AND_A010_RESOLUTION.md]] adds delegate-funding-to-related-projects observability as a minimum indicator.
- [[80_RELATED_PARTY_RELATIONSHIP_GRAPH_AND_A014_RESOLUTION#^rb4b2bf65|docs/80_RELATED_PARTY_RELATIONSHIP_GRAPH_AND_A014_RESOLUTION.md]] states related-party status is not automatic invalidity while hidden or severe relationships require stronger safeguards.
- [[80_RELATED_PARTY_RELATIONSHIP_GRAPH_AND_A014_RESOLUTION#^r2765ddd6|docs/80_RELATED_PARTY_RELATIONSHIP_GRAPH_AND_A014_RESOLUTION.md]] includes delegate or funder relationships to project actors in the on-platform relationship graph.
- [[H028-related-party-conflict-of-interest#Proportional conflict handling|knowledge/hypotheses/H028-related-party-conflict-of-interest.md]] routes hidden or misrepresented conflict to complaint or review, possible pause or disbursement block, correction, and a role-specific Responsibility Event when proven.
- [[H043-transparent-delegation-concentration#^r3063fd6c|knowledge/hypotheses/H043-transparent-delegation-concentration.md]] concedes that participation-support projects may become indirect delegation-acquisition tools if not transparent — the migration vehicle the attack names.
- [[P005-separation-public-support-private-benefit#^rd49010f5|knowledge/principles/P005-separation-public-support-private-benefit.md]] requires distinguishing support for public value from subsidy of the actor's private interest, enforceable only for observable benefit.
- [[27_CITIZEN_DELEGATION_FLOW#^rb47f66a0|docs/27_CITIZEN_DELEGATION_FLOW.md]] requires concentration to be shown before delegation, during delegated action, in reports, and in administrative observability, with no universal hard cap and no automatic delegate payment.

## Bibliographic basis

- Susan Stokes, Thad Dunning, Marcelo Nazareno, and Valeria Brusco, `Brokers, Voters, and Clientelism` (2013): brokers sustain machines through embedded monitored exchange, so the platform's contribution is to make the monitored, repeated allocation side traceable even when the exchange is not.
- Herbert Kitschelt and Steven Wilkinson (eds.), `Patrons, Clients, and Policies` (2007): clientelist linkage adapts to new institutions, which the defense accepts as an adaptation risk rather than a solved problem.
- James C. Scott, "Corruption, Machine Politics, and Political Change" (1969): machines re-embed exchange in whatever arena allocation moves to, so anti-conditioning safeguards must attach to the participation-support vehicle.
- Javier Auyero, `Poor People's Politics` (2000): brokers operate through problem-solving networks citizens experience as help, which is why the platform must not presume all support work is capture.
- Brian Wampler, `Participatory Budgeting in Brazil` (2007): institutional design in participatory budgeting reduced clientelist mediation where rules made allocation transparent and contestable.
- Benjamin Goldfrank, `Deepening Local Democracy in Latin America` (2011): comparative evidence that participatory institutional design weakened clientelist brokerage in several Brazilian cities, supporting pattern-level transparency as a real, if partial, counter.

## Proposed improvements

Add off-platform clientelism as a named risk class with pattern-level indicators:

- name off-platform clientelist exchange as a distinct risk with a documented Core v0 observability boundary;
- strengthen participation-support projects with independent beneficiary confirmation and anti-conditioning declarations;
- add pattern-level clientelism indicators such as repeat broker-beneficiary alignments and geographic delegation blocs correlated with related funding, as signals rather than automatic sanctions;
- preserve and surface frictionless private revocation so a delegator can exit without the broker observing the exit at action time;
- route credible exchange reports to complaint, competent-authority, or electoral-integrity channels;

## Applies to

- Delegation and Delegate role;
- participation-support projects;
- related-party relationship graph;
- delegated-action reports and administrative observability;
- complaint and competent-authority referral paths.

## Defense strength and residual risk

Defense strength: strong on making the on-platform half of the exchange traceable and statistically detectable over time, and honest that this is a large improvement over a baseline where both halves are invisible.

Residual risk: the off-platform favor stays unobservable, brokers can split influence through multiple entities to dampen the pattern, and a genuine participation helper is hard to distinguish from a machine on on-platform data alone. Pattern indicators produce leads, not proof; sanction remains external law.

## Decision

The attack is founded as an adaptation risk. Phase 3 should add pattern-level clientelism indicators, anti-conditioning safeguards for participation-support projects, and a legal-referral path, without pretending the on-platform relationship graph makes the off-platform exchange visible.
