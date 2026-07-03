# D026 - Defense Against A026: Identity Infrastructure as Single Point of Failure and Surveillance

## Integration status

Second-round paired review completed. Accepted resolution: `docs/94_IDENTITY_PROVIDER_FAILURE_MODES_AND_A026_RESOLUTION.md`. Propagated into the core corpus.

## Attack reference

- Attack file: `attacks/A026-identity-infrastructure-failure-and-surveillance.md`
- Attack title: `A026 - Identity Infrastructure as Single Point of Failure and Surveillance`
- Source: second-round attack queue, identity infrastructure failure and surveillance.

## Attack summary

The attack argues that the verified-identity baseline (P004) makes the external identity provider the system's deepest dependency: whoever compromises, coerces, or misconfigures it can manufacture Sybil identities to capture allocation or silently exclude targeted citizens from formal participation, so the platform's Sybil resistance collapses to the provider's integrity. The second harm is chilling: permanently binding a real identity to every civic act accumulates a surveillance-grade dossier of political behavior, and because the platform and any authority with lawful access can see through contextual protected identity, citizens contemplating complaints against powerful actors self-censor.

The Macul example imagines a worker who knows the multi-court executor is politically connected. He wants to report unsafe construction under protected identity displayed publicly as "Verified protected complainant #C-184," but the executor's allies sit in the authority that can lawfully request restricted review, and the platform operator can already see the verified identity behind the pseudonym. Knowing this, the worker files nothing.

## Objective evaluation

- Classification: partially founded.
- Why it is founded: provider compromise or coercion is a concentrated single point of failure the corpus does not model, and platform-side visibility of protected identities plus lawful state access means chilling effects on complaints against powerful actors are not fully answered.
- Why it is not fatal to the architecture: contextual protected identity already exists for exactly the sensitive cases named, its access is gated and auditable, and the identity provider is pre-existing state infrastructure, so under P001 the marginal surveillance delta is the linking of civic actions, not the creation of the dossier; dropping verified identity would reopen the cheaper, more scalable Sybil attack.
- Difference of judgment: medium-high. Anonymity versus accountability is a genuine normative tradeoff, and the corpus deliberately chose accountability with contextual exceptions rather than anonymity.
- Editorial distortion risk: medium. The attack would distort the project if it demands full anonymity, which the architecture rejects by principle. The project's position is verified identity with contextual, gated, auditable protection, not an anonymous formal layer.

## Response

The defense is that the architecture already provides contextual protected identity, restricted-access gating, and audit logging for precisely the retaliation-exposed actors the attack names, while treating verified identity as the anti-Sybil defense it cannot abandon without reopening a cheaper attack.

P004 requires that formal alerts and complaints not be anonymous but permits protected identity when public exposure creates retaliation, safety, privacy, or beneficiary-protection risk, and restricts access to verified identity to authorized reviewers under role, purpose, and access-log rules. H029 and C024 add contextual pseudonyms that deliberately avoid a single stable alias so that sensitive actions cannot be trivially correlated across time. Under P001, the identity provider is not a new dossier the platform invents; civil registry, tax, and electoral infrastructure already constitute the population-legibility apparatus the attack fears, and a Chilean deployment would lean on a pre-existing mechanism such as ClaveUnica. The marginal new exposure is the linkage of specific civic actions to that identity, which is real, but it is bounded by purpose-limited, logged, restricted-review access rather than open display. Verified identity is what makes Sybil capture expensive; removing it to buy anonymity would hand attackers the scalable identity-forgery path the whole design exists to close.

For the Macul worker, the honest defense is partial. The complaint flow lets him file under protected identity with restricted accountability, and only authorized reviewers may pierce it under logged access, which is a real improvement over a regime where he must either speak in the open or not at all. But the corpus itself concedes that context can reveal a protected complainant to a powerful, well-connected respondent, and that visible identity can discourage legitimate criticism in sensitive cases. The platform operator's latent ability to see the verified identity, and lawful state access to restricted review, mean the worker's fear is not fully answered by current mechanisms.

The concession is therefore twofold. First, provider compromise, coercion, or targeted credential denial is a catastrophic-failure mode the corpus does not model and cannot currently detect independently of the provider. Second, protected identity protects display, not the deeper linkage, so complaints against the most powerful actors need a stronger de-anonymization threshold than routine authorized review, together with independently auditable piercing and data-minimization on identity-to-act linkage.

## Project-document basis

- [[P004-verified-identity-no-anonymous-actors#^r84f588a2|knowledge/principles/P004-verified-identity-no-anonymous-actors.md]] establishes that alerts and complaints are not anonymous but may use protected identity where exposure creates retaliation or safety risk.
- [[P004-verified-identity-no-anonymous-actors#^r1f6776b9|knowledge/principles/P004-verified-identity-no-anonymous-actors.md]] names a pre-existing state identity mechanism such as ClaveUnica as the conceptual reference, confirming the provider is external infrastructure rather than a new platform dossier.
- [[H029-verified-identity-contextual-privacy#^r15fbfc76|knowledge/hypotheses/H029-verified-identity-contextual-privacy.md]] states that a person should not carry a single public alias across sensitive actions because a stable alias can be correlated over time.
- [[62_BENEFICIARY_PRIVACY_PROTECTED_IDENTITY_AND_C024_RESOLUTION#^ref0cf684|docs/62_BENEFICIARY_PRIVACY_PROTECTED_IDENTITY_AND_C024_RESOLUTION.md]] limits restricted-record access to authorized fiscalizers or auditors, subject to access logs and privacy rules.
- [[62_BENEFICIARY_PRIVACY_PROTECTED_IDENTITY_AND_C024_RESOLUTION#^rc9ff97fd|docs/62_BENEFICIARY_PRIVACY_PROTECTED_IDENTITY_AND_C024_RESOLUTION.md]] concedes that powerful actors may retaliate against critics even when identity is protected if context reveals them.
- [[53_REAL_IDENTITY_COMMENTS_AND_C014_RESOLUTION#^r6e98111a|docs/53_REAL_IDENTITY_COMMENTS_AND_C014_RESOLUTION.md]] records that visible identity may discourage legitimate criticism in sensitive contexts, acknowledging the chilling risk.
- [[26_CITIZEN_COMPLAINT_FLOW#^r48b61e1f|docs/26_CITIZEN_COMPLAINT_FLOW.md]] states that protected identity for complaints is not anonymity: restricted accountability is retained and authorized reviewers may verify identity under access-log rules.

## Bibliographic basis

- John Douceur, "The Sybil Attack" (2002): without a trusted identity authority a single entity forges many identities, so the verified-identity baseline is the defense the attack would have the system discard.
- James C. Scott, `Seeing Like a State` (1998): legibility infrastructures make populations both administrable and controllable, which is why the platform must minimize the marginal linkage it adds to pre-existing state legibility.
- Daniel Solove, "A Taxonomy of Privacy" (2006): aggregation and identification create distinct harms, supporting data-minimization and purpose-bound access on identity-linked civic records.
- David Lyon, `Surveillance Studies: An Overview` (2007): systematic recording shapes conduct even under restricted access, which is why piercing must be independently auditable rather than routine.
- Bruce Schneier, `Data and Goliath: The Hidden Battles to Collect Your Data and Control Your World` (2015): behavioral records outlast their purpose, motivating retention limits on sensitive act-to-identity linkage.

## Proposed improvements

Add identity-infrastructure resilience and anti-chilling controls:

- a published provider threat model enumerating mass-Sybil, targeted-exclusion, and coercion scenarios with platform-side detection and response;
- provider-independent anomaly detection for issuance spikes, correlated new-identity allocation, and credential-revocation clusters;
- purpose-bound access auditing of identity-linked civic records, with piercing logs auditable by an independent party rather than only the acceding authority;
- a heightened de-anonymization threshold for complaints against executors, authorities, and the operator, requiring an adversarial rather than routine review;
- data-minimization and retention limits on the linkage between identity and sensitive civic acts.

## Applies to

- Verified identity principle;
- contextual protected identity;
- complaint and evidence flows;
- identity provider integration;
- administrative observability and audit trail.

## Defense strength and residual risk

Defense strength: strong on the Sybil-resistance rationale and on the P001 point that the dossier pre-exists the platform, and strong that gated, logged, contextual protection already covers the named sensitive cases better than the status quo.

Residual risk: provider compromise or coercion remains an unmodeled catastrophic dependency, and protected identity guards display rather than the underlying linkage, so chilling effects on complaints against powerful actors persist where context or lawful access can reveal the complainant. These are the parts the attack correctly identifies as unanswered.

## Decision

The attack is partially founded. Phase 3 should add identity-provider failure modes and compromise-response procedures, provider-independent anomaly detection, independently auditable purpose-bound piercing, and a heightened threshold for complaints against powerful actors, while preserving verified identity as the anti-Sybil baseline.
