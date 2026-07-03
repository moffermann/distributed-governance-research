# A026 - Identity Infrastructure as Single Point of Failure and Surveillance

## Status

Reviewed in paired Phase 3 review. Improvements integrated in [[94_IDENTITY_PROVIDER_FAILURE_MODES_AND_A026_RESOLUTION|docs/94_IDENTITY_PROVIDER_FAILURE_MODES_AND_A026_RESOLUTION.md]] and propagated into the core corpus.

## Description

The verified-identity baseline (P004) makes the external identity provider the system's deepest dependency: whoever compromises, coerces, or misconfigures it can manufacture Sybil identities to capture allocation or silently exclude targeted citizens from formal participation. At the same time, permanently linking a real, verified identity to every civic act — funding, complaints, comments, delegation, evidence — accumulates a surveillance-grade dossier of political behavior that can chill participation, especially complaints against powerful actors, because the platform itself and any authority with lawful access can see through the contextual protected-identity display. Unlike A002 (information shaping) and A008 (the platform steering attention), this attack targets the identity layer itself: as an attack surface whose failure is catastrophic, and as chilling infrastructure whose mere existence deters honest participation.

## Location in current project

- [[P004-verified-identity-no-anonymous-actors|knowledge/principles/P004-verified-identity-no-anonymous-actors.md]], the constitutional no-anonymous-actors rule and its dependence on a trusted identity mechanism.
- [[H029-verified-identity-contextual-privacy|knowledge/hypotheses/H029-verified-identity-contextual-privacy.md]], which separates verified from public identity but keeps verified identity always known to the system.
- [[53_REAL_IDENTITY_COMMENTS_AND_C014_RESOLUTION|docs/53_REAL_IDENTITY_COMMENTS_AND_C014_RESOLUTION.md]], which makes verified authorship the primary protection and notes it may chill legitimate criticism.
- [[62_BENEFICIARY_PRIVACY_PROTECTED_IDENTITY_AND_C024_RESOLUTION|docs/62_BENEFICIARY_PRIVACY_PROTECTED_IDENTITY_AND_C024_RESOLUTION.md]], the protected-identity mechanism and its restricted-review and legal-gate carve-outs.
- [[26_CITIZEN_COMPLAINT_FLOW|docs/26_CITIZEN_COMPLAINT_FLOW.md]], where complaints against powerful actors are filed under verified identity with authorized-reviewer access.
- [[08_ENTITY_AND_ROLE_MAP|docs/08_ENTITY_AND_ROLE_MAP.md]], which treats identity verification as a baseline and names ClaveUnica-style providers as external infrastructure.

## Problem

P004 requires that every formal actor be verifiable, and the entity map treats the identity provider as external infrastructure the platform trusts. That trust is the system's most concentrated dependency. If the provider is breached, coerced by an authority, or subverted from within, an attacker can mint verified identities at scale and swamp allocation, support, or complaint-support thresholds; or, conversely, can revoke, freeze, or fail to issue credentials for targeted individuals or groups, excluding them from all formal participation without ever touching the platform's own code. The architecture's Sybil resistance is entirely inherited from this one provider, so the platform's integrity is bounded by the provider's integrity and the honesty of whoever controls it.

The second harm is chilling. Because every civic act is bound to a real identity and preserved in an audit trail, the system constructs a longitudinal record of each citizen's political behavior: what they funded, whom they delegated to, what they complained about, whom they criticized. Contextual protected identity limits public display, but H029 and C024 keep the verified identity known to the platform and reachable by authorized reviewers and lawful access, and contextual pseudonyms reduce but do not eliminate correlation. A citizen contemplating a complaint against a powerful executor, a municipal authority, or the platform operator must assume that the entity with the most power over them can, in principle, learn who complained. Rational actors under observation self-censor, so the very completeness that makes the system auditable also makes honest dissent costly.

Example:

```text
A worker in Macul knows the multi-court executor is politically connected.
He wants to file a complaint about unsafe construction and requests protected identity.
The public sees "Verified protected complainant #C-184."
But the executor's allies sit in the authority that can lawfully request restricted review,
and the platform operator can already see the verified identity behind the pseudonym.
Knowing this, the worker files nothing.
```

## Recommended resolution path

- Treat the identity provider as a declared critical dependency with a published threat model: enumerate mass-Sybil, targeted-exclusion, and coercion scenarios and the platform's detection and response for each, as versioned public documentation.
- Add provider-independent anomaly detection (sudden identity-issuance spikes, correlated new-identity allocation, credential-revocation clusters) so provider compromise is observable at the platform layer rather than assumed away.
- Define, as a Core v0 boundary, exactly who can pierce contextual protected identity, under what logged and rule-bound conditions, and make the access log itself auditable to an independent party, not only to the acceding authority.
- Minimize the political-behavior dossier: separate identity verification from behavioral history where possible, apply data-minimization and retention limits to sensitive act linkages, and prefer per-context pseudonyms that resist cross-act correlation.
- Provide a stronger protected-identity tier for complaints against powerful actors (executors, authorities, the operator) where piercing requires an independent, adversarial process rather than routine authorized review.
- Keep provider substitution and federation open as Extension v1+ so no single national provider is an irreplaceable point of failure, while preserving the no-anonymous-actor principle through equivalently verified alternatives.

## Theoretical base and citations

- John Douceur, "The Sybil Attack" (2002): without a trusted identity authority, a single entity can forge many identities; with one, the system's integrity collapses to that authority's integrity.
- James C. Scott, `Seeing Like a State` (1998): legibility infrastructures built to make populations administrable also make them controllable, with effects their designers did not intend.
- Daniel Solove, "A Taxonomy of Privacy" (2006): aggregation and identification of dispersed acts create distinct harms, including chilling effects, beyond any single disclosure.
- David Lyon, `Surveillance Studies: An Overview` (2007): routine, systematic recording of behavior constitutes surveillance that shapes conduct even when access is nominally restricted.
- Bruce Schneier, `Data and Goliath: The Hidden Battles to Collect Your Data and Control Your World` (2015): comprehensive behavioral records become instruments of power that outlast the purpose for which they were collected.

## Social reasons

Real-identity requirements raise the personal cost of dissent. People who depend economically or socially on the actors they would criticize — workers, beneficiaries, tenants, patients — are precisely those whose complaints the system most needs and who have the most to lose from being identifiable. A permanent political-behavior record also disadvantages the already vulnerable, who cannot absorb retaliation, and it advantages the powerful, who can obtain or infer access. A system that presents verified identity as pure accountability, without acknowledging its chilling and surveillance dimensions, asks the weak to trust that the strong will never look.

## Conflicts of interest

- The controlling authority for the identity provider gains a lever over who may participate and, potentially, over who complained about it.
- The platform operator holds a comprehensive behavioral dataset whose analytic or commercial value creates an incentive to retain rather than minimize it.
- Powerful executors and institutions benefit when the fear of de-anonymization suppresses complaints against them.
- Whoever administers restricted-review access can trade or leak identity for political or economic advantage.
- Vendors of the identity infrastructure benefit from deep, irreplaceable integration that discourages provider substitution.

## Inconsistencies to test

- The system distributes power to resist capture, but it centralizes Sybil resistance in one external provider whose compromise defeats the whole design.
- Protected identity is offered to encourage sensitive complaints, but the platform and lawful authorities retain the ability to see through it, weakening the very protection offered.
- The audit trail is defended as accountability, but the same trail is a durable dossier of political behavior available to whoever gains access.
- C024 promises no unnecessary exposure, but permanent identity-to-act linkage maximizes latent exposure even when public display is minimized.

## Stress scenario

A national deployment relies on a single state-operated identity provider. During a contested electoral period, the agency controlling the provider is pressured to act. Two things happen quietly: a batch of newly issued identities begins concentrating support behind a favored set of projects and complaint-suppression objections, and a cluster of activists find their credentials flagged "pending re-verification," blocking their formal participation. Separately, a complaint against a well-connected executor is filed under protected identity; an allied official invokes a routine review to obtain the restricted record, and within days the complainant faces workplace retaliation. The platform's audit trail faithfully records every civic act, but has no independent way to detect the identity-issuance manipulation, no adversarial check on the review access, and no measure of how many complaints were never filed because citizens assumed exactly this outcome.

## Review checklist

- Is the identity provider documented as a critical dependency with an explicit, versioned threat model?
- Can the platform detect mass-Sybil issuance or targeted-exclusion patterns without trusting the provider's own reporting?
- Is every act of piercing protected identity logged and auditable by an independent party, not only by the authority that requested it?
- Are complaints against powerful actors given a stronger de-anonymization threshold than ordinary authorized review?
- Are retention limits and data-minimization applied to the linkage between identity and sensitive civic acts?
- Is there a substitution or federation path so that no single provider is an irreplaceable point of failure?

## Resolution output

Resolved in [[94_IDENTITY_PROVIDER_FAILURE_MODES_AND_A026_RESOLUTION|docs/94_IDENTITY_PROVIDER_FAILURE_MODES_AND_A026_RESOLUTION.md]]: classified partially founded and bounded with minimal records under P007. Core v0 gained declared identity-provider failure modes (compromise, coercion, outage, wrongful exclusion) with compromise-response procedures — re-verification windows, action freezes, retroactive audit — and purpose-bound access auditing of identity-linked civic records, where every access to act-to-identity linkage is itself an AuditEvent with a stated purpose, independently auditable and, for complaints against executors, authorities, and the operator, gated behind a heightened adversarial de-anonymization threshold; protected-identity contexts (C014/C024) remain the chilling-effect answer and sensitive linkage carries retention limits where country law allows. The identity provider is pre-existing state infrastructure that Core v0 neither replaces nor supplants with anonymity — the anti-Sybil baseline (P004) stands. Platform-side visibility of protected identities plus lawful state access means chilling effects on complaints against powerful actors are reduced, not eliminated, and provider compromise remains a single point of failure whose ultimate mitigation is jurisdictional.
