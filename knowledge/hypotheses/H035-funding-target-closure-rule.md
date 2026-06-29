# H035 — Funding Target Closure Rule

## Hypothesis

A project should close its funding round once it reaches or exceeds its declared financing target. Once funded, financial commitments should not be freely withdrawable.

## Resolution alignment

This hypothesis is qualified by `docs/42_FUNDING_COMMITMENT_AND_C005_RESOLUTION.md`.

Where older wording suggested exceptional funder withdrawal, C005 is the controlling rule:

```text
No ordinary withdrawal after financing.
Funding is a commitment until project closure.
Complaints, reviews, reformulations, pauses, revocations, and failures may change project or fund state, but they do not create a unilateral funder withdrawal right.
```

## Rationale

Keeping the funding rule simple preserves traceability between:

```text
project scope → financing target → execution obligation → KPIs → evaluation
```

If a project continues receiving funds after reaching its target, the relationship between money received and value promised can become ambiguous.

If funders can freely withdraw after a project is funded, execution becomes unstable and executors cannot rely on the financing target being real.

## Rule

When a project reaches or exceeds its declared funding requirement, it moves from funding status to financed status.

```text
In Funding → Funded → Preparation → Execution
```

## No automatic overfunding

The system should not allow indefinite overfunding by default.

If a project wants to expand scope, it should create a new project, new version, or separate expansion phase with its own scope, financing target, KPIs, and evidential contract.

## Withdrawal rule

Once a project is funded, contributors should not be able to withdraw support freely.

Protocol action over committed resources may occur only through defined project states or review outcomes, such as:

- an active complaint;
- formal fiscalization review;
- evidence of fraud;
- material misrepresentation;
- undisclosed antivalue;
- protocol-defined suspension event.

These events may pause, block, retain, return, reassign, recover, or review funds according to project rules. They are not ordinary voluntary withdrawal by the funder.

## Recovery caveat

Core v0 should not promise that all failed-project funds will be recovered.

Like current public projects, funds already released and spent may be partially or totally unrecoverable. The improvement is not zero risk. The improvement is:

- milestone-based release;
- retentions and guarantees where applicable;
- fiscalization;
- complaint review;
- traceability;
- recovery where possible;
- role-based reputation and responsibility events.

## Principle

> A project is funded for a defined commitment, not for an open-ended accumulation of resources or unstable post-funding withdrawal.

## Status

Project financing lifecycle rule. Superseded where necessary by C005.
