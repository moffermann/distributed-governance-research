# H017 — Meta-Governance and Protocol Evolution

## Hypothesis

A distributed governance system requires rules for changing its own rules. This meta-governance layer should operate as an open, versioned, auditable change-control process rather than as a discretionary central authority.

## Rationale

If the system itself must evolve, someone or something must determine how protocol changes are proposed, reviewed, tested, approved, and deployed.

If that power is concentrated in a small authority, the system may recreate the same concentration of power it tries to avoid.

## Engineering analogy

The governance protocol is similar to the base requirements of a software system.

It defines rules such as:

- what counts as a project;
- how projects receive funding;
- how projects are paused or revoked;
- what guarantees are required;
- how fiscalization works;
- how reputation is calculated;
- how protocol changes are approved.

Changing these rules is not normal governance. It is meta-governance.

## Protocol parameters

Some operational values should be treated as protocol parameters rather than discretionary administrator settings.

Examples:

- reformulation response window;
- maximum reformulation frequency;
- complaint thresholds;
- pause thresholds;
- revocation thresholds;
- guarantee requirements;
- default allocation rules;
- official allocation profiles;
- identity and privacy rules;
- reputation formulas;
- funding closure rules;
- disbursement rules.

These parameters may be edited inside an administration system, but only after the relevant meta-governance process has authorized the change.

## Administration system

The system may have an administrative interface where approved protocol changes are configured and deployed.

However, the administration system should not be a source of discretionary power. It is an execution surface for approved changes.

An operator or administrator may implement a change only if:

- the change has passed the required process;
- the approved version is identifiable;
- the parameter being changed is authorized;
- the change is logged;
- the change is auditable;
- rollback conditions are defined when applicable.

## Change process

A protocol change should follow a structured process:

```text
problem detected
→ protocol-change proposal
→ justification and evidence
→ impact analysis
→ public deliberation
→ technical review
→ sandbox or limited-scope test if needed
→ approval or rejection
→ versioned implementation
→ monitoring
→ rollback if necessary
```

## Approval rule

Approvers should not be able to modify the final proposal directly. They may:

- approve;
- reject;
- return with observations.

If the content changes, it becomes a new version and should return to the relevant review process.

## Core principle

> The power to modify a protocol should be separated from the power to approve a protocol version.

## Operator distinction

The technical operator maintains the system. The protocol defines the rules. Meta-governance defines how the rules change.

The operator can deploy approved changes, but should not decide substantive rules.

## Open-source analogy

The Linux kernel offers a useful analogy: many people can propose changes, changes are reviewed publicly, maintainers assess them, and an official version is eventually integrated.

The distributed governance model should borrow principles such as openness, review, versioning, traceability, testing, and responsibility, while avoiding dependence on a single final benevolent dictator.

## Status

Core hypothesis for Ricardo's first major question on meta-governance.
