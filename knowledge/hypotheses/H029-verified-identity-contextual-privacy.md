# H029 — Verified Identity and Contextual Privacy

## Hypothesis

A distributed governance system should require verified identity for all formal actions, while modulating public visibility of identity according to role, risk, and process stage.

Protected identity is a general visibility mechanism for sensitive formal actions. It is not limited to comments.

## Rationale

The system cannot allow anonymous formal actors because formal actions can allocate resources, affect reputation, trigger fiscalization, pause projects, or modify governance rules.

However, making every person's real name public in every process can create retaliation risks and discourage legitimate participation, especially for complainants, workers, vulnerable beneficiaries, affected neighbors, or people dependent on the institution being evaluated.

## Core distinction

Verified identity and public identity are not the same thing.

```text
Verified identity = the system can identify and hold the actor accountable.
Public identity = the broader public can see who the actor is.
```

## C024 alignment

C024 confirms this hypothesis and narrows the rule:

```text
Protected identity is not anonymity.
Protected identity is a role-, action-, and context-specific visibility rule for verified actors.
```

For comments, protected identity is requested per comment.

For complaints, whistleblower-sensitive reports, beneficiary confirmations, exposed affected-party participation, sensitive evidence, worker testimony, or other formal actions where public exposure creates a justified safety, retaliation, privacy, or beneficiary-protection risk, protected identity may apply to the specific action or process.

The public display should use contextual protected identity, while authorized reviewers may verify restricted identity under logged access.

## Protected-identity request

Protected identity should be requested for the specific action that needs protection.

Examples:

- a comment;
- a complaint;
- a testimony;
- a sensitive evidence submission;
- a beneficiary confirmation;
- an affected-party observation;
- a worker report;
- a family-member report;
- another formal contribution where public exposure would create a justified risk.

The request should record:

- actor verified identity, restricted from unauthorized viewers;
- action or object protected;
- justification;
- risk type;
- public contextual display identity;
- authorized-review access rule;
- AI-assisted recommendation where applicable;
- final user choice where applicable;
- legal, safety, privacy, or platform-integrity gate result where applicable;
- timestamp and audit reference.

The system should not create a permanent anonymous mode. It should create contextual protection for a specific formal action.

## Identity layers

### 1. Real verified identity

Always known to the system through a trusted identity mechanism.

This prevents:

- bots;
- duplicate participation;
- fake accounts;
- irresponsible complaints;
- fraudulent funding;
- manipulation.

### 2. Public role and institutional identity

Required for actors who exercise formal institutional or economic roles:

- project modelers;
- executors;
- operators;
- fiscalizers;
- auditors;
- legal representatives;
- economic beneficiaries;
- major project controllers.

### 3. Protected identity

Appropriate for actors exposed to retaliation or vulnerability:

- complainants;
- affected workers;
- vulnerable beneficiaries;
- dependent users;
- whistleblowers;
- family members of beneficiaries;
- evidence contributors in sensitive contexts;
- affected parties in exposed relationships.

Their identity is verified but not necessarily exposed publicly.

### 4. Contextual pseudonyms

For sensitive processes, the system may generate contextual pseudonyms that exist only within that process.

This avoids correlation across unrelated actions.

Example:

```text
Complaint A: Verified protected complainant #A91F
Evidence item B: Verified protected evidence contributor #E77C
Beneficiary review C: Verified beneficiary #K27B
```

The same person should not necessarily have a single public alias across all sensitive actions, because a stable alias can be correlated over time. ^r15fbfc76

Example:

```text
Sports project complaint:
  Verified protected complainant #C-184

Public meaning:
  A verified actor submitted the complaint under protected identity.

Restricted review:
  Authorized reviewer can verify identity under access-log rules.
```

## Visibility by role

The system should expose different levels of identity depending on role:

- executors: public;
- modelers: public;
- fiscalizers: public;
- operators: public;
- beneficiaries vulnerable to retaliation: protected;
- small funders: verified but not necessarily public;
- large funders: higher visibility due to influence;
- complainants: verified, protected when justified by retaliation, safety, privacy, or beneficiary-protection risk;
- whistleblowers: verified, protected with escalation and restricted-review rules;
- sensitive evidence contributors: verified, public or protected according to the evidence type, role, and exposure risk;
- protected commenters: verified, protected only for the specific comment where protection is justified.

## Example

```text
Project:
Multi-court sports complex in Macul.

Public responsible actors:
The executor, fiscalizer, and paid evidence producer are public because they exercise formal responsibility.

Beneficiaries:
Children are verified through restricted records or fiscalizer-visible documentation, but the public sees aggregate participation and verification status.

Protected comment:
A parent asks under protected identity whether children are being pressured not to complain.

Protected complaint:
The same parent files a formal complaint with protected identity because public exposure could affect the child's participation.

Protected evidence:
A worker uploads a document showing unsafe construction practice and requests protected identity because they depend economically on the executor.

System rule:
All three protected actions are verified to the system. None is anonymous. Each has a contextual public display and restricted accountable review.
```

## Principle

> No anonymity in formal power. No unnecessary exposure where exposure destroys the incentive to participate honestly.

> Protected identity is contextual protection for verified action, not anonymous participation.

## Status

Core identity and privacy hypothesis. Extends P004 and is qualified by C014 and C024.
