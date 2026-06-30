# H015 — Observability-Based Evaluation

## Hypothesis

Only actors with a verifiable relationship to a project fulfillment dimension should be able to formally evaluate that dimension.

This hypothesis concerns formal evaluation of fulfillment, not the right to file a complaint.

## Rationale

A distributed system should not become an open popularity poll where anyone can rate anything. If a person cannot observe, measure, or verify a dimension, then their rating would be speculative.

Citizens may always express opinions, alerts, support, criticism, or complaints. But formal fulfillment evaluation should be tied to observability, experience, assignment, or qualification.

## Principle of observability

> If an actor cannot observe, measure, verify, or is not assigned or qualified to review a fulfillment dimension, that actor should not formally score that dimension.

This does not limit complaint filing. A verified actor may submit a complaint and attach `Complaint Evidence` under the complaint model. The complaint is then processed through structure, support, quote, funding, admissibility, review, and competent authority or court referral where applicable.

H015 limits who may transform material into formal fulfillment evaluation, KPI compliance, disbursement support, closure judgment, or reputation-relevant assessment.

## Evaluation-context boundary

H015 also depends on the evaluation-context distinction defined in `knowledge/concepts/evaluation-context-taxonomy-v0.md`.

Formal evaluation is both dimension-scoped and effect-scoped.

Minimum distinction:

- `Soft Public Signal`: opinion, perceived quality, support, objection, or concern without direct formal effect.
- `Experiential Evaluation`: beneficiary, affected-party, worker, local resident, or funder experience of a dimension they directly experienced.
- `Fulfillment Evaluation`: formal assessment of value thesis, metrics, milestones, phase gates, deliverables, disbursement, closure, or reputation-relevant obligations.
- `Technical or Professional Review`: formal review of dimensions requiring specialized competence or assigned authority.
- `Fiscalization Conclusion`: accountable fiscalizer output connecting contextualized evidence to review outcome.
- `Complaint Review Finding`: review of complaint admissibility, relevance, evidence, scope, foundedness, and procedural effect.
- `Reputation Input`: reviewed input to role-specific reputation.

Each formal evaluation record should identify:

```text
evaluated_dimension
actor_role
observability_basis
authority_or_qualification_basis
evidence_context_used
evaluation_type
formal_effect
review_status
```

This is a technical audit rule, not a citizen-form burden.

## Evidence-context boundary

H015 depends on the evidence-context distinction defined in `knowledge/concepts/evidence-context-taxonomy-v0.md`.

- `Complaint Evidence` supports, refutes, clarifies, or contextualizes a complaint.
- `Fulfillment Evidence` verifies value thesis metrics, milestones, phase gates, deliverables, disbursement conditions, closure, or reputation-relevant obligations.

A citizen may submit complaint evidence without being the formal evaluator of the fulfillment dimension.

Example:

```text
A resident may file a complaint that the Macul multi-court project has wrong dimensions or missing bathrooms.

The resident's photos are Complaint Evidence.

Whether the accepted design, dimensions, bathroom commitments, or safety requirements were fulfilled is formally evaluated by the responsible fiscalizer, technical reviewer, competent authority, or other assigned reviewer.
```

## Role examples

### Beneficiaries

Can evaluate:

- received value;
- treatment;
- usefulness;
- perceived outcome;
- service experience.

Their evaluation is strongest for lived experience and beneficiary confirmation. It should not automatically decide technical compliance, disbursement, or reputation unless incorporated through the accepted value verification or review path.

### Affected parties

Can evaluate:

- externalities;
- quality-of-life impacts;
- harms;
- local effects;
- unfulfilled mitigation.

Their evaluation is strongest for directly experienced externalities or mitigation failure. It may support complaints, risk review, antivalue review, or closure evaluation.

### Financial auditors

Can evaluate:

- use of resources;
- traceability;
- deviations;
- financial consistency;
- misuse of funds.

Their evaluation is limited to financial traceability and compliance, unless they also have another assigned review role.

### Technical fiscalizers

Can evaluate:

- technical compliance;
- environmental performance;
- safety;
- engineering standards;
- sanitary standards;
- project-specific KPIs.

Their evaluation is strongest for assigned technical and compliance dimensions. If they also capture evidence, the system should distinguish evidence-capture mode from evaluator mode.

### Experts

Can evaluate:

- methodology;
- technical plausibility;
- design quality;
- risks;
- coherence with fulfillment evidence.

Expert review should state the competence basis, method, and dimension reviewed. Expert opinion outside the expert's competence remains a soft or contextual signal.

### General citizens

Can:

- comment;
- support;
- finance;
- raise alerts;
- request fiscalization;
- file complaints with complaint evidence;
- affect public perception;
- but should not formally score dimensions they cannot observe.

General citizens may be valid evaluators of a directly observed or experienced dimension. For example, they may say that public access was blocked on a specific day. They should not formally decide engineering compliance, budget misuse, or final fulfillment without the relevant evidence, assignment, or qualification.

## Formal effect rule

The system should separate:

```text
input submitted
context classified
review performed where needed
formal effect applied
```

A signal may move from one category to another only through review.

Example:

```text
Resident photo of missing bathrooms:
  starts as Complaint Evidence or citizen observation.

Fiscalizer or technical reviewer accepts it as relevant:
  it may become part of fulfillment review or complaint review.

Formal finding:
  may affect design gate, construction release, correction requirement, complaint outcome, or role-specific responsibility.
```

## Implication

The system should distinguish between:

```text
public opinion
complaint evidence
soft public signal
experiential evaluation
beneficiary evaluation
affected-party evaluation
technical fiscalization
financial audit
expert review
fulfillment evidence review
fiscalization conclusion
complaint review finding
reputation input
```

## Status

Aligned Core v0 evaluation design principle. Clarified by the accepted evidence-context taxonomy.
