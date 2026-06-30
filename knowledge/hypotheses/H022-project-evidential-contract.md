# H022 — Project Evidential Contract

## Hypothesis

Every project should define ex ante how its fulfillment will be evidenced. This evidential definition should emerge from the project design itself rather than from a single centralized authority defining evidence standards for every domain.

Core v0 should therefore treat the `Project Evidential Contract` as the project-level bridge between value promises, metrics, milestones, material information claims, evidence requirements, fiscalization, disbursement, complaints, and closure.

## Rationale

A distributed governance system cannot rely on a central body that defines, in advance and for all cases, what counts as valid evidence in culture, education, infrastructure, science, health, environment, care, or small community projects.

Instead, each project must declare its own evidential contract: not only what it promises to do, but how society will know whether it did it.

## Resolution alignment

This hypothesis is aligned with:

- `docs/44_VALUE_VERIFICATION_AND_C010_RESOLUTION.md`;
- `docs/46_EVIDENCE_PRODUCERS_AND_C003_RESOLUTION.md`;
- `docs/45_ASSISTED_EVIDENCE_PUBLICATION_AND_C015_RESOLUTION.md`;
- `docs/54_DISBURSEMENT_MILESTONE_AI_VALIDATION_AND_C016_RESOLUTION.md`;
- `knowledge/hypotheses/H023-incentive-architecture-for-reliable-information.md`;
- `docs/10_FISCALIZATION_EVIDENCE_AND_CONTROL_MODEL.md`;
- `docs/09_PROJECT_OBJECT_MODEL.md`.

C010 requires value verification packages instead of isolated metrics. C003 separates executor self-report from corroborated evidence. C015 keeps evidence publication separate from evidentiary validation. H023 connects material claims, evidence, contradictions, verified discovery, and responsibility. H022 defines the ex ante contract that makes those later reviews possible.

## Evidential contract

A project should declare:

- what value it promises to generate;
- its primary goal;
- relevant secondary goals;
- KPIs or success indicators;
- what evidence will demonstrate fulfillment;
- which material information claims must be evidenced;
- which evidence is required for each milestone, metric, budget line, risk, or antivalue where relevant;
- who can observe or verify that evidence;
- what fiscalization profile or control package is required;
- what antivalue or externalities may appear;
- what evidence would trigger correction, complaint review, pause, mitigation, disbursement retention, reformulation, or revocation;
- what evidence privacy, access, redaction, or protected-identity rules apply where relevant.

The contract should be versioned. If the project later weakens or materially changes its evidential contract, the change should be visible, auditable, and handled through the ordinary reformulation or review rules where applicable.

## Minimum v0 contents

A Project Evidential Contract should include at least:

- promised value or value thesis;
- metric or qualitative commitment;
- material information claims created by the promise;
- evidence type required;
- expected evidence producer or source role;
- whether executor self-report is sufficient or corroboration is required;
- timing: before publication, before execution-ready status, per milestone, at closure, or during follow-up;
- review actor or method;
- contradiction or complaint path;
- disbursement, closure, reputation, or responsibility effect where applicable;
- privacy and access classification;
- audit-trail reference.

This does not mean ordinary citizens must read a technical contract. The citizen-facing layer can show:

```text
How this will be verified:
attendance records + beneficiary confirmations + fiscalizer review.

Evidence status:
self-reported / corroborated / disputed / accepted.
```

## Proportionality

The evidential contract should be proportional to the project.

A puppet show may require basic evidence of execution, attendance signals, comments, and social feedback.

An industrial plant may require sensors, technical measurements, independent fiscalizers, audits, environmental evidence, and continuous monitoring.

Proportionality should be explicit in the contract. The system should show why a project needs a light, medium, or reinforced evidence package.

Example:

```text
Small sports workshop:
attendance, activity photos, beneficiary confirmation, and one fiscalizer review may be enough.

Macul multi-court infrastructure:
permit documents, construction milestones, georeferenced evidence, budget-line evidence, independent control, public access evidence, and related-party safeguards may be required.

Regulated mining or water-intensive project:
baseline documents, permits, technical measurements, expert review, affected-party evidence channels, and competent authority or court boundaries may be required.
```

## Evidence quality competition

If a project defines weak evidence, the ecosystem can respond:

- funders may distrust it;
- executors may reject the design;
- fiscalizers may object;
- affected parties may demand stronger evidence;
- competing modelers may propose better designs;
- the modeler's reputation may decline.

Therefore, evidence quality itself becomes part of project competition and reputation.

## Relationship with validation

The system may validate the contract through hard rules, value-catalog defaults, project-type templates, threshold policies, and AI assistance.

Validation should check:

- whether every promised value has evidence;
- whether metrics measure value rather than only inputs;
- whether evidence can realistically be produced;
- whether critical decisions require non-executor corroboration;
- whether disbursement milestones have evidence and review rules;
- whether risk and antivalue claims have evidence or monitoring where relevant;
- whether privacy and protected-identity rules are defined for sensitive evidence;
- whether country, operating-mode, or competent-authority requirements apply.

AI may suggest missing evidence, weak metrics, or contradictions, but it should not become the final authority over evidence truth, responsibility, fund release, or legal consequences.

## Relationship with material information claims

The evidential contract defines which claims matter before the project starts.

Example:

```text
Claim:
80 children will attend regularly.

Contract:
monthly attendance records, beneficiary confirmations, evidence-producer observations, and fiscalizer review.

Later H023 trace:
the claim can become self-reported, corroborated, disputed, corrected, or contradicted.
```

This creates a bridge between ex ante promises and ex post accountability.

## Citizen-facing simplicity

The ordinary citizen should not be forced to audit the full contract before funding or supporting a project.

The user interface should translate it into simple signals:

```text
Verification plan:
Basic / reinforced / technical.

Main evidence:
attendance + photos + beneficiary confirmation.

Control:
fiscalizer required before execution.

Risk evidence:
water-use report required.
```

Detailed evidence requirements remain available in the full project sheet and Layer 5 audit trail.

## Principle

> A project should not merely say what it will do. It must declare how society will know whether it did it.

> The evidential contract is defined by the project and constrained by protocol minimums, value-catalog requirements, risk, operating mode, and competent-authority boundaries. It is not a universal centralized evidence code.

## Status

Core hypothesis for evidence design, project accountability, and Ricardo's evidence-validity question. Aligned with C003, C010, C015, C016, H023, and the Core v0 project/evidence/fiscalization model.
