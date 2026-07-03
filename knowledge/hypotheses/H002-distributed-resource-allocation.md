# H002 — Bounded Distributed Resource Allocation

## Hypothesis

When the main problem is identifying, financing, and correcting valuable public-purpose projects, bounded distributed allocation may outperform opaque centralized allocation because it aggregates local knowledge, preferences, observed outcomes, role reputation, and verified project performance while preserving institutional boundaries for eligibility, planning, fiscalization, and essential common funding.

The hypothesis is not that citizens should fund anything they like without constraints. The hypothesis is that a defined assignable share of public-purpose resources can be allocated by many citizens inside visible planning scopes, eligibility rules, value commitments, evidence requirements, fiscalization, and audit controls.

## Value definition

Value is not limited to economic return. Value can include:

- better education;
- better care for the elderly;
- improved health outcomes;
- poverty reduction;
- cultural enrichment;
- community strengthening;
- scientific discovery;
- reduction of suffering;
- increased opportunities.

## Key distinction

A distributed system does not require an algorithm to objectively measure social value. The algorithm can coordinate human valuations. The central question is who expresses value judgments: a small group or millions of people.

However, citizen valuation is not the same thing as project eligibility, legal admissibility, execution readiness, fulfillment verification, or disbursement approval.

Core v0 separates:

```text
allocation judgment = citizen, delegate, allocation profile, or protocol default chooses where assignable civic funds go
eligibility boundary = active Planning Scope, Threshold Policy, and applicable operating mode define what may receive financeable status
execution readiness = project satisfies executor, budget, control, guarantee, phase, evidence, and assurance conditions
disbursement judgment = milestone, fiscalization, fulfillment/control evidence, and review rules govern release
common pool / protected floor = non-assignable, reserve-backed, default-assigned, or equivalent resources protect essential guarantees and continuity targets that cannot depend only on popularity or monthly attention
```

## Mechanism

Citizens allocate a configured, non-withdrawable public allocation right to eligible projects, control packages, complaint-review costs, mitigation work, fiscalization, or other protocol-authorized public-purpose vehicles inside active scopes.

Allocation can happen through:

- direct citizen funding;
- scoped delegation to an eligible actor;
- citizen-selected allocation profiles;
- citizen custom profiles;
- system-defined default rules for inactive or non-onboarded citizens.

Organizations that demonstrate results, maintain role-specific reputation, satisfy evidence requirements, and close projects responsibly should attract future support. Organizations that fail, underperform, produce weak evidence, exceed declared antivalues, or trigger founded complaints should face reduced support, responsibility events, reputation effects, revocation, replacement, guarantee use, or other reviewed consequences.

## Boundary rule

Distributed resource allocation in Core v0 is bounded by seven layers:

1. **Public budget boundary.** The model distinguishes the assignable civic wallet from a non-assignable common pool. Defense, core security, justice guarantees, macro fiscal obligations, emergency reserves, debt service, or other essential functions may remain outside citizen-by-citizen allocation. ^rdf3fe4e3
2. **Planning and eligibility boundary.** Financeable projects must align with an active `Planning Scope` and satisfy the applicable `Threshold Policy`. Out-of-scope proposals may remain Ideas, drafts, reformulation candidates, or planning inputs, but they are not execution-financeable by default. ^rd1bc7414
3. **Citizen allocation layer.** Citizens may allocate directly, delegate, select an allocation profile, configure a custom profile, or rely on a public default rule. These are allocation mechanisms, not hidden project-approval authorities.
4. **Signal separation.** Funding, social support, justified objection, and formal complaint remain separate. Funding improves financial feasibility but does not buy social legitimacy or replace complaint, fiscalization, or review processes. ^r3c4ab89d
5. **Anti-neglect safeguards.** The system must preserve default allocation rules, official profiles, strategic categories, near-completion categories, control/fiscalization lanes, observability of underfunded areas, planning-continuity targets, and non-assignable or reserve-backed protected floors so low-visibility but essential functions are not silently starved. ^r1722756d

H002 is aligned with [[../../docs/92_SALIENCE_BIAS_OBSERVABILITY_AND_A024_RESOLUTION|A024]]: the anti-neglect safeguards already exclude the catastrophic-underprovision cases through the non-assignable pool and essential floors, and above that floor A024 makes the salience gradient observable — funding per category against declared planning-scope need weights — so abstract, preventive goods that lose the salience contest are seen before a shock rather than after. Default allocation rules route inactive budget by planning priority rather than salience, and any default weighting toward under-allocated non-salient categories is a disclosed, versioned protocol choice rather than a hidden nudge.
6. **Essential service floor-and-lane rule.** Essential or continuity-sensitive scopes should distinguish the public/legal guarantee floor from the contestable service-provision lane. The floor may require common-pool, reserve-backed, default-assigned, or excluded treatment; the service lane may still be open to eligible distributed providers under evidence, fiscalization, continuity, complaint, revocation, replacement, and reputation rules.
7. **Continuity project rule.** Recurring, continuity-critical, emergency, or maintenance-dependent projects should expose the funded service period, future funding dependency, renewal trigger, beneficiary-protection rule, wind-down rule, and continuity-need Idea path where applicable. Allocation may support follow-on projects, but it should not imply indefinite service or automatic renewal of the current executor. ^rb5ee5d09

## Macul example

A citizen may fund `Design and Construction of Multi-court Facility in Macul` only if the project is inside an active sports or communal planning scope and is financeable under the applicable threshold policy.

If the project has design and execution phases, citizens may reserve execution-phase funding while the design is pending. Those reserved funds cannot be released to execution until the design gate is accepted. If the design later shows incomplete courts, no bathrooms where required, materially wrong dimensions, weakened public access, or a failure against the accepted baseline, the execution funds remain blocked, returned, reassigned, or handled through the configured reformulation/failure rule.

The citizen experience can still remain simple:

```text
You can fund this project.
Execution funds are reserved until the design gate is approved.
This project still needs minimum control funding.
There are active objections about court dimensions.
```

The audit layer preserves the detailed planning-scope rule, threshold policy, phase gate, evidence needs, fiscalization package, objections, complaints, and funding-status records.

Older-adult care example:

A Planning Scope may define `Older-adult care continuity 2026-2030` with a minimum continuity floor, annual coverage target, interruption tolerance, and underfunding indicator. The protected floor should not disappear because the government of the day has a different agenda, and a later authority should revise it only through a public, versioned, auditable rule-change path.

The same scope may still open a distributed service lane for eligible home-care providers, transport services, food support, residence fiscalization, caregiver support, or complementary care projects. This lets citizens finance care priorities that are neglected by centralized politics while preventing the minimum continuity guarantee from depending only on monthly popularity.

A six-month home-care project inside that lane should still disclose that it funds only six months, when a renewal window opens, what evidence from the current period supports continuation, what wind-down rule protects beneficiaries if follow-on financing fails, and whether the current provider or alternative eligible providers may present follow-on projects. The continuity need may become an Idea before interruption rather than a hidden budget request.

## Relationship to later hypotheses

H002 is the parent allocation hypothesis. Later hypotheses specify its components:

- `H025` defines the civic tax wallet and non-withdrawable public allocation right.
- `H026` separates funding, social support, justified objection, and formal complaint.
- `H027` defines proportional threshold policies.
- `H033`, `H034`, and `H038` define default rules, allocation profiles, and monthly allocation cycles.
- `H009` defines Planning Scope Alignment.
- `H008`, `H016`, `H022`, and `H023` connect allocation to accountability, fiscalization, evidential contracts, and reliable information.

## What H002 does not claim

H002 does not claim that:

- all public budgets should become citizen-assignable;
- the most popular project is necessarily the most valuable project;
- funding alone proves legitimacy;
- algorithms should decide public value;
- citizen allocation replaces fiscalization, evidence, courts, regulators, or competent authorities;
- low-visibility services or essential floors should depend entirely on citizen attention;
- distributed allocation will outperform centralized allocation without good information, role incentives, evidence, fiscalization, and accountability.

## Status

Core framing hypothesis aligned with the v0 civic wallet, planning-scope, threshold, funding, delegation, automatic-allocation, fiscalization, evidence, accountability, and reputation model.

Remaining country implementation questions include what budget percentage becomes assignable, what remains in the non-assignable common pool, which population is eligible, which formula determines citizen allocation amounts, and which public functions or pilots are opened first. ^rc0fbbe90
