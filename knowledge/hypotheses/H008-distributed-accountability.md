# H008 — Distributed Accountability Loop

## Hypothesis

In a distributed resource allocation system, accountability must also be distributed and must close the full project cycle.

The platform should not merely help citizens decide before funding. It should preserve a traceable accountability loop after execution:

```text
proposal
-> financing
-> execution
-> fulfillment/control evidence
-> formal evaluation
-> closure accountability
-> role-specific responsibility and reputation
-> future financing context
```

## Core problem

Institutions, companies, foundations, schools, hospitals, care homes, clubs, or executors that receive resources have incentives to exaggerate results, manipulate indicators, selectively report evidence, or submit weak proof of fulfillment.

A system that lets the actor being evaluated be the only source of its own success will fail.

Executor self-report may be useful, but critical milestones, disbursements, closure, value fulfillment, antivalue compliance, and reputation should not depend only on self-report by the actor being evaluated.

## Boundary with existing v0 components

H008 is not a new heavy bureaucracy and does not replace the existing evidence, fiscalization, evaluation, complaint, disbursement, or reputation models.

It integrates them into one accountability loop:

- H018 and H022 define the value promises, metrics, value floors, antivalue ceilings, material claims, and Project Evidential Contract.
- H015 defines which actors may formally evaluate each dimension and effect.
- H016 defines distributed but protocol-selected fiscalization.
- H023 defines material information claims, contradiction, verified discovery, and information reliability incentives.
- H014 defines the reputation input chain.
- The fulfillment/control evidence-quality open question remains separate and should later define finer rules for authenticity, manipulation, AI-generation risk, method quality, and usefulness.

H008 answers a different question:

```text
Where does post-execution accountability close, and how does the system connect promises, evidence, review, financial consequences, and reputation?
```

## Accountability layers

Core v0 should treat distributed accountability as five connected layers.

### 1. Commitment layer

Before execution funding, the project defines what will later be evaluated:

- Planning Scope;
- Primary Responsibility Anchor;
- Value-Antivalue Profile;
- Project Evidential Contract;
- metrics or qualitative commitments;
- material information claims;
- milestones;
- disbursement rules;
- closure conditions;
- responsibility and reputation consequences where applicable.

### 2. Information layer

Information may come from many sources:

- executor self-report;
- Readiness Evidence;
- Fulfillment Evidence;
- Control Evidence;
- Complaint Evidence;
- Contradiction Evidence;
- beneficiary confirmations;
- affected-party observations;
- technical records;
- financial traceability;
- documents and system integrations;
- AI anomaly assistance.

The source and interest of each information item matter. Executor material remains self-reported support unless corroborated.

### 3. Review layer

Formal review is dimension-scoped.

Different actors may verify different parts of accountability:

- the platform or AI may check formal completeness, missing metadata, duplicate files, inconsistent dates, privacy risk, or obvious anomalies, but does not decide truth by itself;
- the responsible fiscalizer evaluates whether submitted fulfillment/control evidence is sufficient for the milestone, phase, disbursement, or closure dimension;
- technical reviewers, auditors, certifiers, laboratories, professional reviewers, or competent authorities verify specialized dimensions where required;
- beneficiaries and affected parties may provide experiential evaluation for dimensions they directly experienced;
- complaints, contradiction evidence, and secondary fiscalization or fiscalization-audit findings may challenge weak or false evidence through the applicable review path.

The fiscalizer may integrate the review record, but the fiscalizer does not magically become competent for every specialized domain.

## Project Closure Accountability Record

Core v0 should include a `Project Closure Accountability Record`.

This is the final traceable project object that aggregates what the project promised, what was evidenced, what was reviewed, what remained unproven, what happened to money, and which role-specific consequences followed.

It is not a citizen-facing form. It is a technical and public-audit object that can be translated into a simple closure summary.

Minimum content:

- project and project version;
- project phase where applicable;
- Primary Responsibility Anchor;
- Planning Scope reference;
- Value-Antivalue Profile reference;
- Project Evidential Contract version;
- promised value floors;
- declared antivalue ceilings;
- metrics and qualitative commitments;
- expected fulfillment/control evidence;
- submitted fulfillment/control evidence;
- evidence accepted, rejected, contradicted, insufficient, or accepted only as contextual material;
- evaluation records by dimension;
- fiscalization final report;
- technical, financial, beneficiary, affected-party, or authority reviews where applicable;
- unresolved observations, complaints, contradictions, or systemic pauses;
- financial closure: released, retained, returned, reassigned, recovered, or guarantee-executed funds;
- closure outcome: fulfilled, partially fulfilled, unfulfilled, revoked, expired, or reformulated into new version;
- Responsibility Events where reviewed responsibility is established;
- Reputation Inputs or no-reputation-effect findings;
- citizen-facing explanation;
- audit trail.

## Evidence sufficiency rule

Submitted material does not automatically prove fulfillment.

An evidence item may be:

```text
Submitted
Accepted as evidence
Accepted only as contextual material
Insufficient for fulfillment effect
Needs corroboration
Rejected
Contradicted
```

Rule:

> A project cannot close as fulfilled if its main commitments are not supported by sufficient, reviewed, traceable fulfillment/control evidence.

Insufficient evidence is not proof of fraud by itself. But it is also not proof of compliance.

Example:

```text
Evidence:
A dark photo with no reliable timestamp, location metadata, or relation to the relevant milestone.

Possible classification:
Accepted only as contextual material / insufficient for fulfillment effect.

Effect:
The milestone, value floor, or closure condition remains unproven until adequate evidence or corroboration is submitted.
```

## Deadline and configuration rule

Evidence submission, review, correction, and closure deadlines should be configured publicly before they apply.

The source may be:

- Threshold Policy;
- Project Evidential Contract;
- Disbursement Milestone Plan;
- Operating Mode;
- protocol rule;
- public administrative rule where country implementation requires it.

Example:

```text
Evidence submission deadline:
10 days after milestone completion.

Fiscalizer review deadline:
7 days after evidence submission.

Correction window:
5 days after insufficient-evidence notice.

Final closure review window:
15 days after last milestone review.
```

In tutored mode, an administrator or competent authority may configure these parameters within mandate, but not secretly, retroactively, or case by case after project actors already relied on different rules.

## Consequence layer

Depending on the reviewed result, the accountability loop may create:

- correction requirement;
- additional evidence request;
- disbursement retention;
- partial release;
- milestone rejection;
- systemic pause;
- reformulation;
- revocation;
- Financial Order for release, return, reassignment, recovery, guarantee execution, or balance closure;
- Responsibility Event;
- Reputation Input;
- no-reputation-effect finding when the issue is procedural, unproven, or outside the actor's role.

Consequences must attach to the responsible role and reviewed obligation.

## Macul example

Project:

```text
Design and Construction of Multi-court Facility in Macul.
```

A final closure record should not merely say:

```text
Project completed.
```

It should connect:

- accepted design dimensions;
- public-access commitments;
- bathroom or accessibility commitments where promised or required;
- construction milestones;
- georeferenced fulfillment/control evidence;
- technical measurement or reviewer result where required;
- beneficiary or community access confirmations;
- budget use and retained funds;
- fiscalizer final report;
- unresolved complaints or contradictions;
- role-specific reputation effects.

If the courts have wrong dimensions:

- the designer/modeler may be affected if the accepted design was defective;
- the executor may be affected if it failed to execute the accepted design;
- the technical reviewer or fiscalizer may be affected if it negligently accepted weak evidence or a defective gate;
- related companies or holding-linked actors are affected only when review establishes role, control, conflict, negligence, direct participation, repeated pattern, or responsibility basis;
- funders are not penalized merely for funding the project.

## Citizen-facing simplicity

Ordinary citizens should not need to inspect the full accountability record.

They should see a simple closure summary:

```text
Promised:
Two public-use multi-courts.

Result:
Partially fulfilled.

Evidence:
Technical review accepted court surface.
Public-access evidence accepted.
Bathroom commitment unresolved.

Money:
80% released, 20% retained pending correction.

Reputation:
Executor responsibility review open.
Fiscalizer review accepted with observations.
```

Layer 5 preserves the full technical trace.

## Remaining risks

H008 does not fully resolve the quality, authenticity, relevance, manipulation, or AI-generation risk of fulfillment/control evidence.

That issue remains tracked separately in:

- [[evidence-producer-evidence-quality-validation|knowledge/open-questions/evidence-producer-evidence-quality-validation.md]]

H008 does require the system to preserve the sufficiency status and review effect of evidence so that weak evidence cannot quietly become proof of value fulfillment.

Other residual risks:

- fiscalizer collusion;
- evidence-producer collusion;
- overburdening small projects;
- weak or biased deadline configuration;
- technical reviewers becoming bottlenecks;
- citizens misunderstanding partial or inconclusive closure outcomes.

## Principle

> Accountability is not complete when money is allocated. It is complete only when the system can show what was promised, what was evidenced, what was verified, what remained unproven, what happened to the money, and which actors became responsible for which outcomes.

## Status

Aligned Core v0 hypothesis for the distributed accountability loop and Project Closure Accountability Record.
