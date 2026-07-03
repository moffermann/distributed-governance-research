# Identity Provider Failure Modes and A026 Resolution v0

## Status

Accepted Phase 3 resolution.

Paired review:

- Attack: `attacks/A026-identity-infrastructure-failure-and-surveillance.md`
- Defense: `defenses/D026-identity-infrastructure-failure-and-surveillance.md`

## Resolution decision

A026 is partially founded. The verified-identity baseline (P004) makes the external identity provider the system's deepest dependency: whoever compromises, coerces, or misconfigures it can mint Sybil identities to capture allocation or silently exclude targeted citizens, so the platform's Sybil resistance collapses to the provider's integrity. The second harm is chilling: binding a real identity to every civic act accumulates a longitudinal record of political behavior, and because the platform and any authority with lawful access can see through contextual protected identity, citizens contemplating complaints against powerful actors self-censor. Contextual protected identity already exists for exactly these sensitive cases, its access is gated and auditable, and the provider is pre-existing state infrastructure, so under P001 the marginal delta is the linking of civic acts, not the creation of the dossier. The accepted resolution is declared provider failure modes plus minimal purpose-bound records.

Under `knowledge/principles/P007-integrate-or-bound-rule.md`, this resolution bounds with minimal records. It adds declared failure modes, compromise-response procedures, and purpose-bound access auditing through the existing verified-identity, protected-identity, complaint, and audit-trail objects rather than adopting anonymity or building a detection engine as a new primary entity. Verified identity is what makes Sybil capture expensive; abandoning it to buy anonymity would reopen the cheaper, scalable identity-forgery path the whole design exists to close, so the anti-Sybil baseline (P004) stands.

## Rule added to Core v0

The identity provider is a declared critical dependency with enumerated failure modes and compromise-response procedures, and every access to the linkage between a civic act and a verified identity is itself an audited event with a stated purpose. Protected-identity contexts remain the chilling-effect answer, and sensitive act-to-identity linkage carries retention limits where country law allows.

Minimum elements:

- declared identity-provider failure modes — compromise, coercion, outage, and wrongful exclusion — with compromise-response procedures including re-verification windows, action freezes, and retroactive audit;
- purpose-bound access auditing of identity-linked civic records: every access to act-to-identity linkage is itself an AuditEvent carrying its purpose, and piercing logs are auditable by an independent party rather than only the acceding authority;
- protected-identity contexts (C014/C024) retained as the chilling-effect answer, with a heightened, adversarial de-anonymization threshold for complaints against executors, authorities, and the operator;
- retention limits and data-minimization on sensitive act-to-identity linkage where country law allows;
- verified identity preserved as the anti-Sybil baseline (P004), not replaced by an anonymous formal layer.

## Macul example

A worker who knows the multi-court executor is politically connected files an unsafe-construction complaint under protected identity, displayed publicly as a verified protected complainant. The complaint flow retains restricted accountability and only authorized reviewers may pierce it under logged, purpose-bound access — a real improvement over a regime where he must speak in the open or not at all. Because the respondent is a powerful, well-connected actor, piercing his complaint requires the heightened adversarial threshold rather than a routine review an allied official could invoke, and the access itself is an audited event checkable by an independent party. The corpus concedes this reduces the worker's exposure without eliminating it.

## Citizen simplicity

Citizens should see that complaints and sensitive acts can be filed under protected identity, that any attempt to reveal the identity behind a protected act is logged and independently auditable, and a plain assurance such as `revealing who filed this requires an adversarial review, not a routine request` for complaints against powerful actors.

## Transparency and accountability effect

Provider compromise becomes a declared, response-governed scenario rather than an assumed-away dependency, every piercing of act-to-identity linkage becomes a purpose-stamped audited event visible to an independent party, and the strongest-actor complaints gain a de-anonymization threshold distinct from ordinary authorized review.

## Scope boundary and limitation

The identity provider is pre-existing state infrastructure — the civil registry, referenced conceptually as a ClaveUnica-style mechanism — and Core v0 neither replaces it nor adopts anonymity. Provider-independent anomaly detection, federation, and substitution that would remove the single point of failure are Extension v1+ work, and the marginal exposure Core v0 governs is the linkage of civic acts, bounded by purpose-limited logged access rather than open display.

Limitation statement: platform-side visibility of protected identities plus lawful state access means chilling effects on complaints against powerful actors are reduced, not eliminated, and provider compromise remains a single point of failure whose ultimate mitigation is jurisdictional rather than platform-side.

## Residual risks

- Provider compromise, coercion, or targeted credential denial remains an unmodeled catastrophic dependency Core v0 cannot detect independently of the provider.
- Protected identity guards display, not the underlying linkage, so context or lawful access can still reveal a complainant.
- The platform operator's latent ability to see verified identity behind a pseudonym remains a concentrated risk pending federation.

## Integration target

This resolution should inform the verified-identity principle, contextual protected identity, the complaint and evidence flows, identity-provider integration, and administrative observability and the audit trail.
