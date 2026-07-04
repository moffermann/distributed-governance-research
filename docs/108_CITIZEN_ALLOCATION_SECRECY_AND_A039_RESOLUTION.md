# Citizen Allocation Secrecy, the Followed-Projects Feed, and A039 Resolution v0

## Status

Accepted Phase 3 resolution.

Paired review:

- Attack: [[A039-allocation-traceability-versus-preference-secrecy|attacks/A039-allocation-traceability-versus-preference-secrecy.md]]
- Defense: [[D039-allocation-traceability-versus-preference-secrecy|defenses/D039-allocation-traceability-versus-preference-secrecy.md]]

## Resolution decision

A039 is founded as a specification gap, and the author's review resolved it in the strongest available direction: the design never needed the citizen-to-allocation link to be visible to anyone — not to the public, not to third parties, and not even as a ledger view on the citizen's own surface. The system works on aggregated information; the money is fully traceable as money; and the citizen's surface is a *feed of projects*, not a statement of account. The accepted resolution completes the electoral bargain that A034 left half-borrowed: the allocation act is immune **and** secret toward third parties, while every peso remains publicly auditable in the project ledgers.

Under [[P007-integrate-or-bound-rule|knowledge/principles/P007-integrate-or-bound-rule.md]], this integrates a visibility specification over existing objects (citizen balance, project ledgers, audit layers, access auditing) and bounds the residual: coerced self-disclosure cannot be abolished by design, only starved of anything provable.

## Rule added to Core v0

**Citizen allocation secrecy with public money.** The citizen-to-allocation link is secret by default; projects, totals, flows, executors, and role acts are public.

Minimum elements:

- **Public layer:** project balances, funding totals, disbursements, evidence, executors, and every role act remain fully traceable; individual allocators appear only pseudonymously, and per-scope totals reconcile cryptographically against the individual ledgers — every peso verifiable as money, no citizen identifiable as its allocator;
- **No proof, even voluntarily:** the system issues no receipt, certificate, export, or screen state that lets anyone prove to a third party what they allocated. This is deliberate: if proof cannot exist, demanding it is pointless, and paying for allocations becomes unverifiable — the secret ballot's own defense, applied to the wallet. A citizen shown a screen can be shown any screen;
- **The followed-projects feed:** the citizen surface is organized as "my projects" / "projects I follow" — a feed of projects with their progress, evidence, and outcomes — not as an allocation ledger. No "my allocations" view exists, because none is necessary: the citizen sees their remaining balance (capacity, per [[47_TREASURY_CITIZEN_BALANCE_AND_C006_RESOLUTION|docs/47_TREASURY_CITIZEN_BALANCE_AND_C006_RESOLUTION.md]] and [[21_CITIZEN_FUNDING_FLOW|docs/21_CITIZEN_FUNDING_FLOW.md]]) and follows the projects they care about;
- **Automatic-profile reports stay in-app and non-transferable:** the periodic report of [[28_CITIZEN_AUTOMATIC_ALLOCATION_PROFILE_FLOW|docs/28_CITIZEN_AUTOMATIC_ALLOCATION_PROFILE_FLOW.md]] remains — the citizen must know what their profile did — but it is in-app information for the citizen alone, surfaced through the feed, and produces no exportable or verifiable statement;
- **The declared residual indicium:** the categories a citizen follows (for example, rural-education projects) are indirect preference data — following is not allocating and manifests no political affiliation — and are still never public per citizen; they are protected as ordinary profile data;
- **Sensitive-data classification:** per-citizen allocation data is classified as inferred political-opinion data; lawful basis, purpose limitation, retention limits, and an impact assessment are country-implementation preconditions for processing it at all;
- **Enumerated re-linking tiers:** only reviewed fraud investigation may re-link citizen to allocation — purpose-bound, logged, and contestable, extending the access-auditing machinery of [[94_IDENTITY_PROVIDER_FAILURE_MODES_AND_A026_RESOLUTION|docs/94_IDENTITY_PROVIDER_FAILURE_MODES_AND_A026_RESOLUTION.md]] to the allocation ledger explicitly;
- **Aggregate-only indicators, verified:** the clientelism pattern indicators of [[98_CLIENTELISM_PATTERN_INDICATORS_AND_A030_RESOLUTION|docs/98_CLIENTELISM_PATTERN_INDICATORS_AND_A030_RESOLUTION.md]] operate on aggregates and pseudonymous flows and require no per-citizen link;
- **Plain-language disclosure:** before first allocation, the citizen sees one sentence stating that their allocations are secret like a vote, that nobody — including themselves — can prove them to others, and that the money itself is publicly tracked.

## Macul example

A Macul citizen follows "community sports" and the multi-court project appears in her feed with its milestones and evidence. Her employer, who backed a rival project, can see the multi-court raised $40 million and from how many allocators — but not whether she is one of them, and no screen she could be pressured into showing proves it either way. The comptroller, auditing the scope, verifies that the project's public total equals the sum of the committed individual ledgers without opening any of them — the same arithmetic a vote count publishes without opening ballots.

## Citizen simplicity

The citizen experience gets simpler, not more complex: a feed of projects they follow, a remaining balance, and one disclosure sentence. All cryptography lives below the surface; no citizen ever operates it.

## Transparency and accountability effect

Transparency is for power; privacy is for people. Every actor who exercises power in the system — executors, fiscalizers, authorities, delegates, the platform itself — remains fully visible and attributable; the only thing that goes dark is the one link whose visibility served patrons, employers, and machines rather than accountability. The clientelist contract loses its verification channel, which is what historically killed it; and the honest-signal assumption the architecture's information results depend on is protected, because unobserved allocators have no reason to allocate defensively.

## Scope boundary and limitation

Core v0 specifies the visibility regime; cryptographic mechanism selection (commitment schemes, mixing, reconciliation proofs) is implementation, and the data-protection instruments (lawful basis, impact assessment) are country implementation.

Limitation statement: design can refuse to strengthen coercion but cannot abolish it — a household or employer with sustained physical control of a citizen's device defeats any interface, exactly as it defeats the paper ballot's secrecy; and secrecy costs the expressive citizen the ability to prove their own civic generosity, a real loss the design accepts deliberately in exchange for protecting the coercible.

## Residual risks

- The reconciliation layer adds cryptographic and operational complexity to the MVP's thinnest phase; a pilot that shortcuts it with a trusted database re-creates the insider re-linking risk A026 already documents.
- Followed categories, delegation choices, and public comments remain voluntary self-disclosures a determined profiler can aggregate; the resolution bounds the system's records, not the citizen's own speech.
- Timing and amount correlations on small scopes could narrow anonymity sets; minimum-aggregation thresholds before publishing per-project allocator counts are the standing mitigation.

## Integration target

This resolution should inform the citizen balance and funding flows (docs/21, docs/47), the automatic-profile report flow (docs/28 — report retained, recast as in-app, feed-surfaced, non-transferable), citizen navigation layers, the audit-trail layering (Layer 5 access tiers), the A026 access-auditing extension, the A030 indicator certification, the manuscript's audit-trail language ("every consequential act" scoped to role acts and flows, with the citizen allocation link secret by default — v1.7), the publishable model, and country-implementation guidance.
