# H003 — Incentive-Compatible Distributed Trust

## Status

Core conceptual pillar aligned with [[../concepts/distributed-trust|Distributed Trust]], [[H008-distributed-accountability|H008]], [[H014-reputation-architecture|H014]], [[H015-observability-based-evaluation|H015]], [[H016-distributed-fiscalization-ecosystem|H016]], [[H022-project-evidential-contract|H022]], and [[H023-incentive-architecture-for-reliable-information|H023]].

## Hypothesis

Trust can be distributed through architecture when every material claim is attributable, evidence-linked, contradictable, reviewable, auditable, and connected to role-specific incentives and consequences.

Distributed trust is not faith in many actors. It is confidence produced by incentive alignment, verifiability, contradiction paths, responsible review, payment conditions, reputation effects, and proportional responsibility.

## Core formula

```text
Distributed trust =
  role-specific incentive alignment
  + verifiable material claims
  + independent or corroborated evidence
  + contradiction paths
  + responsible review
  + proportional consequences
  + public auditability
```

## Rationale

A system does not become trustworthy merely because it has many participants.

If participants have incentives to lie, exaggerate, hide defects, approve friends, produce low-quality evidence, or ignore contradictions without cost, then trust is only faith.

Core v0 should therefore make each role's incentives visible and bounded:

- proposers gain future trust by making clear, verifiable promises;
- modelers/designers gain reputation by producing reviewable, executable designs;
- executors receive funds only through milestones, evidence, review, and disbursement rules;
- evidence producers are paid and reputationally evaluated for useful, traceable, methodologically adequate evidence, not for favoring the executor;
- fiscalizers build reputation by reviewing independently, completely, and on time;
- complainants and observers can gain credibility or verified-discovery recognition when they reveal material issues, but unsupported or abusive claims should not create formal effects;
- delegates retain trust through visible delegated-action reports and can lose future authority through revocation;
- administrators or authorities must publish material rule changes, tutored decisions, and timeout effects.

Trust emerges because actors have reasons to produce reliable behavior and because unreliable behavior can be detected, challenged, reviewed, and assigned consequences.

## Material claim chain

The basic trust chain in Core v0 is:

```text
Material Claim
→ contextualized evidence
→ corroboration, contradiction, or complaint path
→ fiscalizer / reviewer / authority / protocol evaluation
→ EvaluationRecord where formal effect exists
→ Project Closure Accountability Record where closure is involved
→ Responsibility Event or Reputation Input where role responsibility is established
→ citizen-facing trust signal
→ Layer 5 audit trail
```

This chain prevents unsupported statements from becoming trusted facts merely because they were published by an authority, executor, platform, AI system, or popular actor.

## What distributed trust is not

Distributed trust is not:

- blind trust in crowds;
- trustless automation;
- blockchain by default;
- popularity as truth;
- AI as truth-decider;
- reputation as a single universal score;
- automatic punishment by accusation;
- fiscalizer authority without evidence;
- evidence publication without quality review;
- complete elimination of legal institutions, courts, regulators, or arbitration.

## Blockchain analogy

Blockchain is a useful analogy because it reduces dependence on a single trusted registry.

But the analogy is limited.

A tamper-resistant registry can preserve a false statement perfectly. It can prove that something was registered, when it was registered, and whether it was altered. It cannot prove that the claim was true, complete, relevant, methodologically sound, or produced under aligned incentives.

Core v0 should therefore treat registry integrity as one possible infrastructure property, not as the source of truth.

## Relation to H023

H003 is the general principle.

H023 is the information-specific implementation.

```text
H003:
  Why trust can be distributed at all.

H023:
  How reliable information emerges from material claims, incentives,
  contextualized evidence, verified discovery, and responsibility events.
```

H003 also connects to:

- H008, because trust requires closure accountability rather than self-report;
- H014, because reputation should follow reviewed role responsibility;
- H015, because formal evaluation must be dimension-scoped and effect-scoped;
- H016, because responsible fiscalization must be independent and protocol-selected;
- H022, because trust needs an evidential contract before execution;
- C004/H024, because complaints are formal contradiction and review paths;
- C005/C006/H037, because money movement must be conditional and auditable.

## Evidence producer example

In a Macul multi-court project, a paid evidence producer visits the site and submits georeferenced photos, measurements, and a short report.

The system does not trust that evidence merely because the producer submitted it.

The producer is provisionally credible because:

- payment depends on delivering evidence that satisfies the required mission or evidential contract conditions;
- future eligibility and reputation depend on evidence quality, metadata completeness, usefulness, and correction history;
- false, manipulated, low-quality, or irrelevant evidence can be rejected, contradicted, or tied to a responsibility review;
- the fiscalizer may accept, reject, request corroboration, or mark it insufficient for the claimed formal effect;
- citizens, affected parties, other evidence producers, or complaint actors may contradict it;
- the audit trail preserves method, timestamp, location, source role, review status, and later corrections.

This is trust with a reason.

## Project example

Claim:

```text
The Macul multi-court facility is complete.
```

Distributed trust requires more than executor assertion.

Relevant trust supports may include:

- accepted design package;
- phase-gate approval;
- fulfillment/control evidence tied to dimensions, public access, accessibility, bathrooms where required, safety, and use commitments;
- fiscalizer report;
- beneficiary or affected-party signals;
- contradiction evidence if someone observes missing or incorrect facilities;
- disbursement records showing what was paid and why;
- closure accountability record;
- role-specific reputation effects where responsibility is established.

A citizen does not need to inspect all raw records before acting, but the system must preserve the chain that explains why a trust signal exists.

## Citizen-facing trust signals

Ordinary citizens should see simple labels, such as:

```text
Self-reported
Corroborated
Disputed
Contradicted
Accepted
Insufficient
Corrected
Reviewed
```

These labels are not final truth by themselves. They are summaries over the underlying trust chain.

Layer 5 should preserve the detailed audit trail for citizens, fiscalizers, auditors, journalists, researchers, authorities, and affected parties who need to inspect the source.

## Application scope

Distributed trust can apply to:

- public information;
- public spending;
- project promises;
- value and antivalue claims;
- fulfillment/control evidence;
- fiscalization;
- complaints;
- delegation;
- reputation;
- custody and disbursement;
- governance resolutions and protocol changes;
- private agreements or arbitration-like systems as a separate application.

## Arbitration boundary

The original H003 included arbitration because the idea also emerged from a possible agreement/contract platform.

For Core v0, arbitration should not become a generic new module.

The current system already has more precise review mechanisms:

- fiscalization;
- EvaluationRecords;
- complaint review;
- Governance Resolutions;
- Review Timeout Resolutions;
- competent authorities, regulators, courts, or legal processes where applicable.

General arbitration remains a related application or future extension, especially for private agreements or contract platforms.

## Remaining risks

- role incentives can be captured by collusion;
- payment incentives may reward volume over quality unless evidence quality is reviewed;
- reputation can become misleading if based on weak or sparse data;
- citizens may overtrust simple labels without inspecting limitations;
- AI anomaly flags may be misread as proof;
- authority or platform operators may shape which evidence is visible;
- evidence producers may optimize for formal metadata rather than substantive truth;
- highly technical evidence may remain hard for ordinary citizens to audit.

## Principle

> Distributed trust is not blind faith in distributed actors. It is confidence produced by aligned incentives, verifiable claims, independent evidence, contradiction, review, consequences, and auditability.
