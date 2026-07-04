# A039 - Traceable Allocation Reveals Political Preference: Vote Immunity Without Vote Secrecy

## Status

Manuscript-review round brief. Pending paired review; no accepted resolution yet.

## Description

The A034 resolution characterizes the citizen allocation act with a vote-like pilot default: immunity, no personal accountability for the choice. But the architecture borrowed only half of the electoral bargain. The vote is immune *and secret*; the allocation act is immune and fully traceable — recorded per citizen, versioned, and auditable by design. What a citizen funds is a window into political and ideological preference: allocations to a church roof, a harm-reduction clinic, an LGBTI community center, or a private-school subsidy classify the allocator. That makes the allocation ledger a database of inferred political opinion — sensitive data under the data-protection regimes of every target jurisdiction — and simultaneously rebuilds the verification channel that secret ballots were introduced to destroy: a clientelist machine that can *check* how its clients allocated.

## Location in current project

- [[102_ALLOCATION_ACT_CHARACTERIZATION_AND_A034_RESOLUTION|docs/102_ALLOCATION_ACT_CHARACTERIZATION_AND_A034_RESOLUTION.md]] adopts vote-like immunity while the underlying commitment remains ledger-recorded per citizen.
- [[47_TREASURY_CITIZEN_BALANCE_AND_C006_RESOLUTION|docs/47_TREASURY_CITIZEN_BALANCE_AND_C006_RESOLUTION.md]] defines the per-citizen ledger and custody mechanics that make allocations traceable.
- [[H029-verified-identity-contextual-privacy|knowledge/hypotheses/H029-verified-identity-contextual-privacy.md]] provides contextual identity protection but does not classify allocation history as inferred political opinion.
- [[94_IDENTITY_PROVIDER_FAILURE_MODES_AND_A026_RESOLUTION|docs/94_IDENTITY_PROVIDER_FAILURE_MODES_AND_A026_RESOLUTION.md]] covers the identity provider's failure and purpose-bound access auditing, not the allocation ledger's inferential content.
- [[98_CLIENTELISM_PATTERN_INDICATORS_AND_A030_RESOLUTION|docs/98_CLIENTELISM_PATTERN_INDICATORS_AND_A030_RESOLUTION.md]] detects clientelist allocation patterns statistically — using the same traceability this attack identifies as the clientelist's own verification tool.
- [[paper|drafts/paper.md]] commits to "every consequential act on a public, layered audit trail" without carving out the citizen's allocation from the public layer.

## Problem

Three consequences follow from traceability, and the corpus addresses none of them frontally.

First, sensitive data by inference. Allocation histories permit classification of citizens by political, religious, and moral preference at population scale. Under the data-protection statutes of the target jurisdictions, data revealing political opinion is a special category requiring an explicit lawful basis, strict purpose limitation, and heightened safeguards; several regimes require an impact assessment before processing of this kind exists at all. The corpus's privacy machinery (H029) protects identity contextually but nowhere states the lawful basis for building, retaining, and exposing an inferred-opinion database as the system's core record.

Second, the coercion channel. The secret ballot's historical function was to make clientelist contracts unenforceable: the machine could pay, but it could not verify. Any actor who can see or compel disclosure of a citizen's allocation — an employer, a union, a church, a local boss, an abusive spouse, or the platform's own insiders under A026's failure modes — regains the verification power. A030's pattern indicators detect the aggregate signature *after* the machine works; the traceability that feeds those indicators is what lets the machine work. The corpus is using the disease as the diagnostic.

Third, the chilling effect on the allocation itself. Citizens who know their allocations are recorded and potentially visible will allocate performatively or defensively — toward safe, majoritarian projects and away from stigmatized ones — which distorts exactly the dispersed-preference signal that E4 and the default layer's legitimacy depend on. The manuscript's information argument assumes honest signals; observed signals are not honest signals.

Example:

```text
A municipal employee allocates monthly to a harm-reduction program.
A platform insider with purpose-bound but broad audit access compiles
allocation profiles by workplace; the list of "drug-program funders"
reaches the employee's supervisor during a contract renewal. Nothing
in the corpus makes this compilation impossible, names its lawful
basis, or tells the citizen at onboarding how visible their choice is
and to whom.
```

## Recommended resolution path

- Classify per-citizen allocation history explicitly as inferred political-opinion data in the corpus's data model, with a declared lawful basis, purpose limitation, retention limits, and a required impact assessment as country implementation preconditions.
- Adopt a **secrecy-by-default architecture for the citizen side**: public traceability applies to projects, flows, executors, and roles; the citizen-to-allocation link is pseudonymized at the public layer, with unlinkable proofs (commitment or mixing schemes) reconciling individual ledgers to aggregate totals — auditability of the money without observability of the person.
- Define the narrow access tiers that may ever re-link (fraud investigation under review, the citizen's own view), each purpose-bound, logged, and contestable, extending A026's access auditing to the allocation ledger explicitly.
- Disclose the visibility regime in plain language before first allocation, alongside A034's characterization disclosure: who can see what, when, and with what recourse.
- Reconcile A030: state that clientelism pattern indicators operate on aggregates and pseudonymous flows, and verify that no indicator requires the per-citizen link the secrecy layer removes.

## Theoretical base and citations

- Susan Stokes, "Perverse Accountability: A Formal Model of Machine Politics with Evidence from Argentina" (2005): clientelist machines survive on verifying client compliance; secrecy is what breaks the contract.
- Bruce Ackerman and Ian Ayres, `Voting with Dollars` (2002): the secret donation booth — anonymity engineered into money flows precisely to make influence purchases unverifiable.
- Alan Westin, `Privacy and Freedom` (1967): observed choice is altered choice; surveillance of civic acts reshapes them.
- Daniel Solove, `Understanding Privacy` (2008): aggregation and secondary use as distinct harms — each allocation is innocuous, the compiled history is a dossier.
- John Stuart Mill, `Considerations on Representative Government` (1861): the classic case *for* open voting — which mass democracies rejected once dependence and retaliation proved stronger than civic virtue; the corpus should not re-run that experiment unknowingly.

## Social reasons

The citizens most exposed are the dependent and the stigmatized: public employees, welfare recipients, members of minorities funding their own community's projects. They are also the citizens whose honest signals the architecture most needs and whose trust is hardest to win. A system that publishes the poor citizen's priorities to their patron while calling it transparency inverts the accountability the project exists to create: transparency is for power, privacy is for people.

## Conflicts of interest

- The platform's analytics, and the research effort itself, benefit from rich per-citizen data; secrecy layers cost information and engineering.
- Political operators on all sides would pay for allocation profiles — as targeting data or as compliance verification.
- Fraud investigators legitimately want the re-linking power this attack seeks to narrow, and will resist strict tiers.
- Employers, unions, churches, and local machines benefit from visibility into their members' allocations and will frame access as community transparency.

## Inconsistencies to test

- A034 grants vote-like immunity while the ledger denies vote-like secrecy — the two halves of the electoral bargain are split without argument.
- The corpus celebrates a "public, layered audit trail" for every consequential act, and the citizen's allocation is a consequential act; either the audit principle or the citizen's protection must yield, and no document says which.
- A030 relies on traceability to detect clientelism while traceability is the clientelist's verification instrument — the indicator and the vulnerability share one mechanism.
- H029 protects identity in complaint and fiscalization contexts but not in the allocation context, though allocation is the system's most frequent and most revealing citizen act.
- E4's honest-signal assumption is undermined by the corpus's own visibility design: observed allocators are not unbiased signalers.

## Stress scenario

A jurisdiction's data-protection authority reviews the pilot and finds a population-scale database of inferred political opinion with no declared lawful basis, no impact assessment, and insider access paths. It orders per-citizen allocation processing suspended. Simultaneously, a local machine is caught paying for allocations — verified through screenshots of citizens' own ledger views, the mechanism Stokes describes. The pilot dies as a privacy scandal and a vote-buying scandal in the same news cycle, and the headline is not that the architecture failed, but that it was built to enable both.

## Review checklist

- Is per-citizen allocation history classified as sensitive inferred-opinion data with a declared lawful basis and retention limit?
- Is the citizen-to-allocation link pseudonymous at the public layer, with aggregate auditability preserved?
- Are re-linking access tiers enumerated, purpose-bound, logged, and contestable?
- Does onboarding disclose the visibility regime in plain language before first allocation?
- Do the clientelism indicators of A030 operate without requiring the per-citizen link?
- Has the coerced-disclosure channel (employer, patron, household) been analyzed, not just insider access?

## Resolution output

None yet. Pending paired defense and review.
