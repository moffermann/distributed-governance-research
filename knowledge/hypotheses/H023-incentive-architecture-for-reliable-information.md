# H023 — Incentive Architecture for Reliable Information

## Hypothesis

Reliable information in a distributed governance system should not depend on the voluntary honesty of interested actors. It should emerge from an incentive architecture where hiding, distorting, or producing poor information is costly, and discovering relevant information is valuable.

Core v0 should therefore treat material project statements as accountable claims, connect claims to evidence, make claim changes auditable, and connect proven concealment, distortion, or falsehood to role-specific responsibility.

## Rationale

Technologies such as blockchain can verify that information was registered and not altered, but they cannot guarantee that the information was complete, relevant, honest, or produced in good faith.

A perfectly preserved falsehood is still false.

## Resolution alignment

This hypothesis is aligned with:

- `docs/46_EVIDENCE_PRODUCERS_AND_C003_RESOLUTION.md`;
- `docs/44_VALUE_VERIFICATION_AND_C010_RESOLUTION.md`;
- `docs/51_ROLE_REPUTATION_RESPONSIBILITY_AND_C012_RESOLUTION.md`;
- `docs/45_ASSISTED_EVIDENCE_PUBLICATION_AND_C015_RESOLUTION.md`;
- `docs/41_COMPLAINT_ENTITY_AND_C004_RESOLUTION.md`;
- `docs/10_FISCALIZATION_EVIDENCE_AND_CONTROL_MODEL.md`.

C003 already separates executor self-report from corroborated evidence. C010 requires value verification packages instead of isolated metrics. C012 requires role-specific Responsibility Events before reputation penalties. C015 separates evidence publication from evidentiary validation. H023 ties these rules together as an incentive architecture for information reliability.

## Core problem

A project executor may have incentives to hide information that harms its interests:

- undeclared externalities;
- cost overruns;
- KPI manipulation;
- low-quality execution;
- misuse of funds;
- harmful side effects;
- false, manipulated, or low-quality contextualized evidence.

The system should not assume that the executor will produce damaging information voluntarily.

## Material information claims

Any statement that can affect funding, execution readiness, disbursement, project closure, risk evaluation, beneficiary trust, or reputation should be treated as a material information claim.

Examples:

```text
This project will serve 80 children.
This milestone was completed on June 5.
This budget line was spent on equipment.
This evidence shows attendance.
This risk was mitigated.
This supplier is not related to the executor.
This activity did not affect water use.
```

Each material claim should record:

- claim text or structured value;
- actor responsible for the claim;
- actor role at the time of claim;
- affected project object: value thesis, metric, fulfillment evidence need, beneficiary group, budget line, milestone, contextualized evidence item, complaint, fiscalization report, risk, antivalue, or relationship declaration;
- evidence supporting the claim;
- contradiction or complaint references where applicable;
- current review status;
- version history;
- possible role responsibility if the claim is false, incomplete, hidden, or misleading.

This does not mean ordinary citizens must see every claim object. The citizen surface can show simple labels such as:

```text
Verified
Self-reported
Disputed
Needs corroboration
Contradicted
Corrected
```

The technical layer should preserve the full claim, evidence, contradiction, and responsibility trace.

## Distributed information sources

Information should emerge from multiple actors with different incentives:

- executors declare goals, evidence, risks, and progress;
- beneficiaries report value received;
- affected parties report antivalue and harm;
- fiscalizers measure technical compliance;
- auditors review resource use;
- experts review methodology;
- communities raise alerts;
- AI systems detect anomalies and inconsistencies;
- competitors may reveal weaknesses in proposals.

The system should expose the source and role of information because source incentives matter.

Executor material may be useful, but it remains self-report unless corroborated. Beneficiary confirmation, fiscalizer observation, evidence-producer records, technical logs, official documents, and external registers may have different evidentiary weight depending on scope, risk, privacy, independence, and corroboration.

## Cost of hiding

If a project hides, omits, or misrepresents relevant information, the system should activate consequences such as:

- guarantee execution;
- retained fund use;
- pause;
- fiscalization;
- mitigation obligations;
- reputational loss;
- sanctions;
- revocation in severe or unresolved cases.

Costs should not be automatic punishment by suspicion. They should follow review, evidence, severity, and role responsibility.

Recommended consequence chain:

```text
information issue detected
→ claim becomes disputed, incomplete, or contradicted
→ actor is asked to clarify or correct where appropriate
→ fiscalizer, reviewer, complaint process, or closure review evaluates evidence
→ founded issue creates Responsibility Event where role obligation is breached
→ consequence applies proportionally
```

Possible consequences:

```text
Minor incomplete information:
  correction required; no reputation effect if corrected in time.

Misleading claim with project effect:
  correction, visible history, possible disbursement delay, possible Responsibility Event.

Hidden conflict, false contextualized evidence, or beneficiary manipulation:
  complaint review, reviewed role-specific Reputation Input where responsibility is established, guarantee or retention effect, funding release block where rules allow.

Severe fraud or concealment:
  revocation path, recovery, authority referral, sanctions, and durable reputation impact.
```

The cost should attach to the responsible role, not to every actor near the project.

Example:

```text
Executor inflated beneficiary attendance.
Evidence producer and fiscalizer later identify the inconsistency.
If founded, the responsibility event affects executor reputation and may affect disbursement or recovery.
The funders do not lose reputation merely because they funded the project.
```

## Reward for discovery

The system may include reward mechanisms similar to bug bounties. Actors who discover verified fraud, hidden antivalue, false contextualized evidence, or KPI manipulation may be compensated or reputationally rewarded.

The reward should be tied to verified, relevant, review-resistant information, not to accusations alone.

Core v0 may support a lightweight `Verified Discovery` record.

A discovery may qualify only if:

- it identifies a material claim, omission, contradiction, hidden relationship, false contextualized evidence, or relevant risk;
- it is submitted by a verified actor, with protected identity where justified;
- it is reviewed and found relevant;
- it materially improves the project's information quality, prevents loss, corrects false contextualized evidence, reveals a hidden issue, or improves value verification;
- it is not merely an accusation, political disagreement, duplicate low-value report, or unsupported suspicion.

Possible rewards:

- role reputation gain as evidence producer, complainant, fiscalizer, or observer;
- payment from an approved discovery reward pool, complaint review budget, control budget, recovery share where legally allowed, or protocol-defined reward fund;
- visibility as a verified contributor where identity is public;
- protected recognition where identity must remain restricted.

Reward must not create a bounty for harassment. It should be paid or recognized only after review confirms materiality and usefulness.

Example:

```text
A citizen identifies that the same invoice was used in two different milestones.
The fiscalizer confirms the duplicate invoice and the executor corrects the claim before disbursement.
The citizen may receive a verified discovery reputation event or a small protocol-defined reward.
```

## Evidence industry

A distributed system will likely produce an industry of evidence: auditors, analysts, fiscalizers, consultants, expert reviewers, and counter-evidence providers.

The goal is not to prevent this industry from existing. The goal is to make it visible, auditable, contestable, and reputationally traceable.

The system should therefore make the evidence industry transparent:

- who produced evidence;
- who paid or funded the evidence mission;
- what method was used;
- which claim the evidence supports or contradicts;
- whether the evidence was accepted, rejected, contradicted, or used in a report;
- whether the evidence producer has relevant conflicts;
- whether the same actor repeatedly produces weak or useful evidence;
- whether an evidence producer is rewarded for reliable discoveries.

## AI boundary

AI may help detect inconsistencies, weak claims, missing evidence, privacy risks, duplicate evidence, suspicious patterns, or contradictions.

AI should not be the sovereign truth-decider.

Allowed AI functions:

```text
flag missing evidence
detect inconsistent dates, budgets, metrics, or beneficiary counts
suggest related claims or evidence
identify duplicate or possibly manipulated files
warn about privacy risks before evidence publication
summarize contradictions for fiscalizers or citizens
```

Not allowed as final authority:

```text
declare fraud proven
assign role responsibility by itself
release or block funds by itself
decide a complaint's truth by itself
replace fiscalizer, court, regulator, or competent authority
```

AI outputs should be recorded as assistance or anomaly signals. Material consequences require human/process review according to the relevant project, fiscalization, complaint, disbursement, or legal rule.

## Citizen-facing simplicity

The ordinary citizen should not need to understand the full information architecture.

The interface can show:

```text
Evidence status:
Self-reported / corroborated / disputed / contradicted / accepted

Information issue:
Needs clarification / corrected / under review / founded

Reliability signal:
Executor self-report only
Corroborated by beneficiary and evidence producer
Contradicted by complaint review
```

The detailed audit layer should show the full claim, evidence, contradiction, AI-assistance, review, reward, and Responsibility Event chain.

## Examples

### Sports project

```text
Claim:
80 children attended the sports program.

Executor evidence:
Attendance spreadsheet and photos.

Contradiction:
Parents report that only 35 children regularly attended.

Review:
Fiscalizer compares attendance records, beneficiary confirmations, and evidence-producer observations.

If founded:
Claim becomes corrected or contradicted.
Executor may receive a Responsibility Event if the inflated count was material or intentional.
The citizen or parent who submitted useful evidence may receive a verified discovery record.
```

### Regulated infrastructure or mining project

```text
Claim:
Water use remains within the approved baseline.

Complaint:
Affected community alleges undeclared water use.

Platform role:
The platform stores the claim, evidence, contradiction, review status, and referral package where required.

Boundary:
The platform does not prove environmental breach by itself and does not replace the regulator or court.
It makes the information conflict traceable and funds the proper review path.
```

## Principle

> Truthful information does not emerge because every actor is honest. It emerges because the system makes hiding costly and discovering relevant information valuable.

> The platform preserves and connects claims, evidence, contradictions, review, responsibility, and rewards; it does not turn raw accusations, AI flags, or popularity into truth.

## Status

Core hypothesis for information integrity, Ricardo's third question, and the distributed trust architecture. Aligned with C003, C004, C010, C012, C015, H024, and the Core v0 contextualized evidence/fiscalization model.
