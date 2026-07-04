# D039 - Defense Against A039: Traceable Allocation Reveals Political Preference

## Integration status

Manuscript-review round paired draft. No accepted resolution yet; pending review integration.

## Attack reference

- Attack file: [[A039-allocation-traceability-versus-preference-secrecy|attacks/A039-allocation-traceability-versus-preference-secrecy.md]]
- Attack title: `A039 - Traceable Allocation Reveals Political Preference: Vote Immunity Without Vote Secrecy`
- Source: manuscript v1.6 review round — public-law reviewer.

## Attack summary

The attack argues that the architecture borrowed half of the electoral bargain: the allocation act received the vote's immunity but not its secrecy. Per-citizen allocation histories permit classification by political, religious, and moral preference — sensitive data under every target jurisdiction's regime — and rebuild the verification channel that secret ballots destroyed: patrons, employers, and machines that can check how their dependents allocated. It adds a chilling-effect corollary: observed allocators allocate defensively, corrupting the very dispersed-preference signal the architecture's information argument depends on.

## Objective evaluation

- Classification: founded as a design gap on the citizen-side visibility regime.
- Why it is founded: no corpus document classifies allocation history as inferred political opinion, states its lawful basis, or designs unlinkability; H029's contextual privacy covers complaint and fiscalization contexts but not the system's most frequent citizen act; and the coercion channel — verification of allocation by patrons — is answered nowhere.
- Why it is not fatal to the architecture: the attack targets a design choice the corpus never actually made. The audit principle was always layered — full auditability in the deep layer, navigation surfaces above — and nothing in the thesis requires the *citizen-to-allocation link* to be public: the money's traceability (project balances, disbursements, executors, roles) carries every accountability claim the manuscript makes, and every simulation result operates on aggregates. Publicity of flows and secrecy of allocators are compatible by construction, which is exactly how the polity already treats votes (secret) and electoral totals (public). The attack therefore forces a clarification and a mechanism, not a retreat.
- Difference of judgment: medium. How much re-linking capacity fraud investigation legitimately needs, and whether the citizen's own ledger view can ever be made coercion-resistant, are genuine design dilemmas with no clean answer anywhere in civic tech.
- Editorial distortion risk: medium. The attack would distort the project if it were read as requiring secrecy of *projects, flows, or role actors* — transparency there is the architecture's point, and the corpus's principle is precisely that transparency is for power and roles, privacy is for citizens.

## Response

The defense concedes the attack's core as a specification the corpus owed and now supplies: the citizen-to-allocation link is sensitive by inference and is not needed publicly for anything the architecture claims. The resolution adopts secrecy-by-default on the citizen side: the public layer shows projects, totals, flows, executors, and role acts; individual allocations are pseudonymized, with cryptographic reconciliation (commitments over per-scope totals) preserving the auditability equation — every peso remains traceable as money while no citizen is traceable as an allocator. Re-linking survives only in enumerated tiers: the citizen's own view, and fraud investigation under reviewed, logged, purpose-bound access extending the A026 machinery to the allocation ledger explicitly. The visibility regime is disclosed in plain language before first allocation, alongside A034's characterization disclosure.

On the coercion channel, the defense accepts Stokes's mechanism as the binding constraint and treats the citizen's own ledger view as the hard case: a patron does not need platform access if he can demand the client's screen. The corpus's honest position is that no civic-tech design fully defeats compelled self-disclosure — neither does the secret ballot defeat a photographed ballot paper — but the design can refuse to *strengthen* the machine: no shareable proof-of-allocation artifacts, no allocation receipts that third parties can verify, and receipt-freeness adopted as an explicit design requirement for the allocation surface, borrowing the property electoral cryptography named for exactly this reason. A030's pattern indicators are then reconciled rather than contradicted: they run on aggregates and pseudonymous flows, and the resolution verifies no indicator requires the per-citizen link — detection of the machine's statistical signature survives; the machine's per-client verification does not.

The chilling-effect corollary the attack raises is, on reflection, an argument *for* the architecture's own evidence stack: E4's honest-signal assumption is best protected precisely by making individual signals unobservable to anyone who could retaliate. The defense also claims the comparative ground, per P001: the status quo's allocation act — the official's memo — is neither secret nor immune nor traced; and where citizens do allocate today (PB assemblies with raised hands), their exposure is worse than anything this attack describes. The architecture, amended by this resolution, would be the first allocation instrument in the space to offer the full electoral bargain: immune, secret toward third parties, and still auditable as money.

## Project-document basis

- [[H029-verified-identity-contextual-privacy|knowledge/hypotheses/H029-verified-identity-contextual-privacy.md]] supplies the contextual-protection pattern this resolution extends to the allocation context.
- [[94_IDENTITY_PROVIDER_FAILURE_MODES_AND_A026_RESOLUTION|docs/94_IDENTITY_PROVIDER_FAILURE_MODES_AND_A026_RESOLUTION.md]] defines purpose-bound access auditing — the tier machinery the allocation ledger inherits.
- [[47_TREASURY_CITIZEN_BALANCE_AND_C006_RESOLUTION|docs/47_TREASURY_CITIZEN_BALANCE_AND_C006_RESOLUTION.md]] defines the ledger whose public/pseudonymous layering this resolution specifies.
- [[98_CLIENTELISM_PATTERN_INDICATORS_AND_A030_RESOLUTION|docs/98_CLIENTELISM_PATTERN_INDICATORS_AND_A030_RESOLUTION.md]] carries the aggregate indicators the resolution must and does preserve without the per-citizen link.
- [[102_ALLOCATION_ACT_CHARACTERIZATION_AND_A034_RESOLUTION|docs/102_ALLOCATION_ACT_CHARACTERIZATION_AND_A034_RESOLUTION.md]] provides the disclosure surface the visibility regime joins.

## Bibliographic basis

- Susan Stokes, "Perverse Accountability: A Formal Model of Machine Politics with Evidence from Argentina" (2005): the machine lives on verification; unverifiability, not exhortation, is what kills the contract — the resolution's design criterion.
- Bruce Ackerman and Ian Ayres, `Voting with Dollars` (2002): the secret donation booth — engineered unverifiability of money flows as anti-corruption architecture, the direct precedent for secrecy-by-default.
- Josh Benaloh and Dwight Tuinstra, "Receipt-Free Secret-Ballot Elections" (1994): receipt-freeness as a formal property — the requirement the allocation surface adopts against compelled self-disclosure.
- Daniel Solove, `Understanding Privacy` (2008): aggregation as a distinct harm — the doctrinal basis for classifying compiled allocation histories as sensitive regardless of each entry's innocence.
- Alan Westin, `Privacy and Freedom` (1967): observed civic choice is altered civic choice — the chilling-effect mechanism that ties this attack to the corpus's own honest-signal assumptions.

## Proposed improvements

Specify the citizen-side visibility regime the corpus left implicit:

- classification of per-citizen allocation history as inferred political-opinion data, with lawful basis, purpose limitation, retention limits, and a required impact assessment as country-implementation preconditions;
- secrecy-by-default at the public layer: pseudonymous allocators, public flows, cryptographic reconciliation of individual ledgers to per-scope totals;
- enumerated re-linking tiers (citizen's own view; reviewed fraud investigation), purpose-bound, logged, and contestable, extending A026 to the allocation ledger;
- receipt-freeness as a design requirement: no third-party-verifiable proof of any individual allocation;
- plain-language disclosure of the visibility regime before first allocation;
- a verification note on A030: pattern indicators certified to operate on aggregates and pseudonymous flows only.

## Applies to

- citizen balance and allocation ledger;
- public audit-trail layering;
- identity and access-audit machinery;
- clientelism pattern indicators;
- citizen onboarding and disclosure surfaces;
- country implementation.

## Defense strength and residual risk

Defense strength: strong, because the attack strikes a specification gap rather than a load-bearing commitment — publicity of money and secrecy of allocators are compatible, every headline result runs on aggregates, and the amended design dominates both the status quo and existing PB practice on the attack's own criteria. The receipt-freeness requirement imports a hard, well-studied problem rather than hand-waving it.

Residual risk: compelled self-disclosure cannot be fully engineered away — a household or employer with physical access to the citizen defeats any interface; receipt-freeness constrains but complicates the citizen's own transparency features (a citizen who *wants* to prove their allocation publicly now cannot, which some will experience as a loss); and the pseudonymization layer adds real cryptographic and operational complexity to the MVP's thinnest-resource phase.

## Decision

The attack is founded and integrates as a citizen-side secrecy-by-default regime — sensitive-data classification, pseudonymous public layer with cryptographic reconciliation, enumerated re-linking tiers, receipt-freeness, and disclosure — completing the electoral bargain A034 left half-borrowed. The declared limitation is the compelled-disclosure channel, which design can refuse to strengthen but cannot abolish.
