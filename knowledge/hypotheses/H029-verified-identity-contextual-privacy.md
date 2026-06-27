# H029 — Verified Identity and Contextual Privacy

## Hypothesis

A distributed governance system should require verified identity for all formal actions, while modulating public visibility of identity according to role, risk, and process stage.

## Rationale

The system cannot allow anonymous formal actors because formal actions can allocate resources, affect reputation, trigger fiscalization, pause projects, or modify governance rules.

However, making every person's real name public in every process can create retaliation risks and discourage legitimate participation, especially for complainants, workers, vulnerable beneficiaries, affected neighbors, or people dependent on the institution being evaluated.

## Core distinction

Verified identity and public identity are not the same thing.

```text
Verified identity = the system can identify and hold the actor accountable.
Public identity = the broader public can see who the actor is.
```

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

### 2. Public institutional identity

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
- family members of beneficiaries.

Their identity is verified but not necessarily exposed publicly.

### 4. Contextual pseudonyms

For sensitive processes, the system may generate contextual pseudonyms that exist only within that process.

This avoids correlation across unrelated actions.

Example:

```text
Complaint A: Verified complainant #A91F
Beneficiary review B: Verified beneficiary #K27B
```

The same person should not necessarily have a single public alias across all sensitive actions, because a stable alias can be correlated over time.

## Visibility by role

The system should expose different levels of identity depending on role:

- executors: public;
- modelers: public;
- fiscalizers: public;
- operators: public;
- beneficiaries vulnerable to retaliation: protected;
- small funders: verified but not necessarily public;
- large funders: higher visibility due to influence;
- complainants: verified, protected at least in early stages;
- whistleblowers: protected with escalation rules.

## Principle

> No anonymity in formal power. No unnecessary exposure where exposure destroys the incentive to participate honestly.

## Status

Core identity and privacy hypothesis. Extends P004.
