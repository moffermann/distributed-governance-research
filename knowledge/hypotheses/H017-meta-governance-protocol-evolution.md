# H017 — Meta-Governance and Protocol Evolution

## Hypothesis

A distributed governance system requires rules for changing its own rules.

Core v0 should therefore treat meta-governance as a visible, versioned, auditable change-control discipline rather than as discretionary administrative power.

The minimum chain is:

```text
rule-change need
→ classify change type
→ identify operating mode
→ publish reason, scope, impact, and affected objects
→ review, sandbox, simulation, or testing when required
→ approval or rejection through the applicable authority or process
→ versioned implementation
→ effective date, adaptation period, and transition rule
→ monitoring and rollback path where applicable
```

## Rationale

If the system itself must evolve, someone or something must determine how protocol changes are proposed, reviewed, tested, approved, and deployed.

If that power is concentrated in a small authority, the system may recreate the same concentration of power it tries to avoid.

The v0 requirement is not to implement a complete constitutional meta-governance system. The v0 requirement is to prevent silent rule changes, hidden authority, surprise retroactivity, and untraceable software changes. ^ra48a6bed

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

## Relationship with C019

H017 is the conceptual hypothesis. C019 is the accepted v0 resolution that makes it operational enough for Core v0.

The accepted v0 boundary is:

```text
Core v0:
  minimum visible rule-change path.

Extension v1+:
  full constitutional meta-governance implementation,
  detailed non-tutored voting mechanics,
  advanced release governance,
  complex canary or multi-environment rollout rules.
```

Therefore H017 should not be read as requiring a full meta-governance module in the MVP. It requires a clear rule-change discipline that prevents discretionary administrative edits from becoming hidden protocol power.

## Change-type distinction

Core v0 should distinguish at least four objects:

```text
Reformulation Proposal:
  changes one project or project version.

Administrative Rule Change:
  changes a configured parameter, threshold, eligibility rule, review period,
  guarantee requirement, complaint threshold, or similar operational rule.

System Implementation Change:
  changes software, algorithmic behavior, validator logic, AI model,
  interface behavior, schema, migration, or technical release.

Protocol Change Proposal:
  changes governing protocol in non-tutored mode.
```

This distinction prevents project-level reformulations from being confused with system-wide rule changes.

## Protocol parameters

Some operational values should be treated as protocol parameters rather than discretionary administrator settings.

Examples:

- reformulation review, approval, and funding-effect rules;
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

These parameters may be edited inside an administration system, but only after the applicable operating-mode authority or meta-governance process has authorized the change and the rule-change object has been published.

## Operating-mode distinction

The same rule-change discipline applies differently depending on the operating mode.

## Tutored mode

In a tutored operating mode, the implementing ministry, administrator, or authorized public authority may configure rules within its mandate.

That authority is external to ordinary project participation. It does not become an internal proposer, executor, fiscalizer, or ordinary moderator.

Tutored authority may configure parameters, but material changes must be:

- public;
- versioned;
- justified;
- scoped;
- non-surprising by default;
- attached to an effective date;
- supported by an adaptation period where relevant;
- governed by a transition rule;
- auditable in Layer 5.

## Non-tutored mode

In non-tutored or open modes, major protocol changes should follow a visible Protocol Change Proposal path.

The exact approval mechanics may remain future work. Core v0 only requires that protocol changes are not invisible administrator edits. ^rd26475e4

Minimum path:

```text
proposal
public reason
scope definition
impact analysis
review period
sandbox or simulation where required
approval mechanism
implementation date
versioned protocol update
rollback path where applicable
```

## Administration system and operator boundary

The system may have an administrative interface where approved protocol changes are configured and deployed.

However, the administration system should not be a source of discretionary power. It is an execution surface for approved changes.

An operator or administrator may implement a change only if:

- the change has passed the required process;
- the approved version is identifiable;
- the parameter being changed is authorized;
- the change is logged;
- the change is auditable;
- rollback conditions are defined when applicable.

The technical operator maintains the system and deploys approved changes. The operator should not decide substantive rules.

## Environments for protocol evolution

Protocol changes should use separate environments, similar to critical software systems.

Possible environments:

```text
Development:
  design, simulation, and technical implementation of proposed changes.

Sandbox / pilot:
  limited-scope testing with selected projects, categories, territories, or user groups.

Staging / pre-production:
  final validation of the approved version before broad deployment.

Production:
  official protocol version used by the whole system.
```

Not every change needs every environment. The required testing depth should depend on the risk, scope, and reversibility of the change.

## Software quality standards

Protocol and implementation changes should follow high standards from software engineering and critical systems development.

Depending on the risk and scope of the change, this may include:

- unit tests;
- integration tests;
- end-to-end tests;
- regression tests;
- security tests;
- performance tests;
- data migration tests;
- simulation with historical or synthetic data;
- user acceptance testing;
- monitoring plans;
- rollback plans.

The purpose is not to bureaucratize every change, but to prevent untested protocol changes from affecting money, reputation, rights, project continuity, fiscalization, or governance rules.

System Implementation Changes require special care because software changes can hide policy changes. A new validator, ranking rule, fiscalizer-selection algorithm, privacy model, or reputation calculation should record both its technical release and its rule effect.

## Testing principle

A protocol change should not be promoted to production merely because it was approved conceptually. It must also demonstrate that it can operate safely in the system.

## Pilot principle

A protocol change should not affect the entire system immediately when its impact is uncertain.

It can first be tested in a bounded setting:

- one project category;
- one region;
- one type of fiscalization;
- a subset of users;
- a simulated historical dataset;
- a temporary experimental environment.

Pilot results should be documented before production deployment.

## Change process

A protocol change should follow a structured process:

```text
problem detected
→ protocol-change proposal
→ justification and evidence
→ impact analysis
→ public deliberation
→ technical review
→ testing / simulation / sandbox when required
→ approval or rejection
→ versioned implementation
→ monitoring
→ rollback if necessary
```

## Rule-change fields

Every material rule-change object should contain:

```text
change id
change type
operating mode
proposing actor or authority
rule affected
old value or behavior
new value or behavior
reason
scope
affected project states
affected roles
affected future projects
affected existing projects, if any
publication date
effective date
adaptation period
transition rule
rollback rule where applicable
implementation version where applicable
citizen-facing summary
audit trail reference
```

## Approval rule

Approvers should not be able to modify the final proposal directly. They may:

- approve;
- reject;
- return with observations.

If the content changes, it becomes a new version and should return to the relevant review process.

## Core principle

> The power to implement a protocol change should be separated from the power to approve a protocol version.

## Operator distinction

The technical operator maintains the system. The protocol defines the rules. Meta-governance defines how the rules change.

The operator can deploy approved changes, but should not decide substantive rules.

## No silent or surprise rule change

Every material rule change should be visible, versioned, justified, and traceable.

Relevant changes should include an effective date, adaptation period, and transition rule. Advanced project states should not normally be invalidated by surprise.

Protected or sensitive states may include:

```text
published as financeable
funding in progress
execution-funded
control-funded
execution-ready
in execution
under milestone review
```

Emergency exceptions may exist for fraud vulnerability, legal prohibition, security issue, privacy risk, systemic exploit, court or authority order, or critical safety risk.

Even then, the change should record:

- emergency reason;
- scope;
- why ordinary adaptation is impossible;
- affected projects;
- temporary or permanent status;
- review date;
- appeal or review path where applicable.

## Example: guarantee change

Rejected pattern:

```text
Yesterday guarantee was 5%.
Today it is 20%.
All projects must comply immediately.
```

Accepted pattern:

```text
Administrative Rule Change:
Guarantee requirement increases from 5% to 20%.

Reason:
High failure rate in high-risk projects.

Publication date:
1 July.

Effective date:
1 October.

Transition rule:
Applies to projects published after 1 October.
Projects already published or already holding guarantees under the 5% rule
remain under the previous rule unless materially reformulated.
```

## Example: Macul multi-court facility

If the active Threshold Policy changes the design-review requirement for projects such as:

```text
Design and Construction of Multi-court Facility in Macul
```

the change cannot silently rewrite the rules for every project already in funding or execution.

A valid Administrative Rule Change should say whether the stronger design-review rule applies to:

- future drafts only;
- drafts not yet submitted for validation;
- projects not yet published as financeable;
- materially reformulated projects;
- already funded projects only under emergency, legal, or safety justification.

This protects actors who planned under prior rules while still allowing the protocol to evolve.

## Citizen-facing simplicity

Ordinary citizens should not need to inspect the full release process before taking basic actions.

Citizen-facing layers should summarize:

```text
What changed.
Why it changed.
When it takes effect.
Which projects or actions it affects.
Whether existing projects are protected, transitioned, or reviewed.
Where to inspect the full audit trail.
```

Layer 5 preserves the full rule-change object, review history, implementation version, and rollback or transition path.

## Open-source analogy

The Linux kernel offers a useful analogy: many people can propose changes, changes are reviewed publicly, maintainers assess them, and an official version is eventually integrated.

The distributed governance model should borrow principles such as openness, review, versioning, traceability, testing, and responsibility, while avoiding dependence on a single final benevolent dictator.

## Relationships

H017 is aligned with:

- C019, because C019 defines the accepted minimum protocol-change governance rule;
- C020, because tutored mode can configure rules only with visible governance and timeout objects;
- H020 and H027, because procedural burden and threshold policies are protocol-configurable but must not become hidden discretionary settings;
- H040, because reformulation policies are configurable but must be public and traceable;
- H058, because operating modes determine who can configure or approve changes.

## Remaining risks

- administrators may abuse emergency exceptions;
- transition rules may become too complex;
- software releases may hide substantive policy changes;
- non-tutored approval mechanisms may be captured or underparticipated;
- excessive change-control burden may slow urgent safety fixes.

These risks should remain visible rather than being solved by pretending rule changes can be apolitical or automatic.

## Principle

> A system that replaces discretionary authority must not hide discretion inside rule changes.

## Status

Aligned Core v0 conceptual hypothesis for minimum protocol-change governance, administrative rule changes, system implementation changes, operating-mode authority, transition rules, citizen-facing summaries, and auditability.
