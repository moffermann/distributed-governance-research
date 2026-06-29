# H024 — Complaint as Fiscalization Trigger

## Hypothesis

Complaints should be treated as formal, identity-linked, evidence-seeking processes that can trigger fiscalization when enough support, evidence, or resources are gathered.

## Rationale

Any open system can be abused by false accusations, personal conflicts, malicious complaints, ideological attacks, or sabotage. This already happens in existing legal systems.

The solution is not to prevent complaints, but to require identity, evidence, thresholds, and process before a complaint produces formal consequences.

## C024 alignment

Earlier versions left open whether whistleblower information could enter the system without verified identity if later validated by verified actors.

C024 resolves this direction for Core v0:

```text
No anonymous formal complaints.
Sensitive complaints may use protected identity when submitted by verified actors.
```

Protected identity means the public display can hide the complainant's legal identity when exposure creates a retaliation, safety, privacy, or beneficiary-protection risk. It does not mean the system loses accountability. Authorized reviewers, fiscalizers, or auditors may verify restricted identity under role, purpose, and access-log rules.

## Basic structure

A complaint process may follow this sequence:

```text
verified actor files complaint, with protected identity if justified
→ evidence or claim is stated
→ other actors can support or add evidence
→ resources are gathered for review/fiscalization
→ fiscalizer evaluates evidence
→ complaint is admitted, rejected, or escalated
→ possible review, pause, mitigation, sanction, or revocation
```

## Complaint funding

A complaint may require resources because someone must evaluate evidence, inspect facts, or conduct fiscalization.

Supporters may fund the complaint process. Funding does not buy truth or voting power; it funds the cost of verification.

## Fiscalizer role

A fiscalizer or specialized reviewer may determine whether the complaint has enough evidence to proceed.

The fiscalizer does not necessarily decide final revocation. It evaluates whether the claim is credible, relevant, and supported enough to trigger the next stage.

## False complaints

False or malicious complaints should create reputational and possibly financial consequences for those who file or support them in bad faith.

## Principle

> Anyone with verified identity can raise an alert, but formal consequences require evidence, support, resources, and fiscalization. Protected identity may limit public exposure; it does not create anonymous formal power.

## Example

A parent in a sports project for children reports that the executor threatened to remove children from the program if their families complain.

The parent should file as a verified actor and request protected identity. The public complaint page may show a contextual protected complainant, the evidence, the affected scope, the review status, and the resolution. The authorized reviewer may verify the complainant's identity under restricted access.

## Open questions

- What threshold activates review?
- What threshold activates pause?
- How are frivolous or malicious complaints sanctioned?
- What restricted-access and audit-log rules should protect verified whistleblowers while preserving accountability?
- Who selects the fiscalizer for complaint review?
- How are complaint supporters protected from retaliation?

## Status

Core hypothesis for incident governance and complaint handling.
