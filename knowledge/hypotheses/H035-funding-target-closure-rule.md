# H035 — Funding Target Closure Rule

## Hypothesis

A project should close its funding round once it reaches or exceeds its declared financing target. Once funded, financial commitments should not be freely withdrawable, except under defined exceptional conditions such as an active complaint or formal review process.

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

Withdrawal or freezing of committed resources should be allowed only under defined exceptional conditions, such as:

- an active complaint;
- formal fiscalization review;
- evidence of fraud;
- material misrepresentation;
- undisclosed antivalue;
- protocol-defined suspension event.

## Principle

> A project is funded for a defined commitment, not for an open-ended accumulation of resources or unstable post-funding withdrawal.

## Status

Project financing lifecycle rule.
