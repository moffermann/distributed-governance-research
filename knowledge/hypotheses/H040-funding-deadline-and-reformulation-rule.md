# H040 — Funding Deadline and Reformulation Rule

## Hypothesis

Every project should define a funding deadline. If the project does not reach its funding target by that deadline, it should either close or enter a reformulation process.

## Resolution alignment

This hypothesis is qualified by:

- [[42_FUNDING_COMMITMENT_AND_C005_RESOLUTION|docs/42_FUNDING_COMMITMENT_AND_C005_RESOLUTION.md]];
- [[55_VALUE_THESIS_REFORMULATION_AND_C017_RESOLUTION|docs/55_VALUE_THESIS_REFORMULATION_AND_C017_RESOLUTION.md]].
- [[58_TUTORED_MODE_GOVERNANCE_RESOLUTIONS_AND_C020_RESOLUTION|docs/58_TUTORED_MODE_GOVERNANCE_RESOLUTIONS_AND_C020_RESOLUTION.md]].
- [[85_FUNDING_WINDOW_EXPIRY_AND_BUDGET_LIQUIDITY_SMOOTHING_RESOLUTION|docs/85_FUNDING_WINDOW_EXPIRY_AND_BUDGET_LIQUIDITY_SMOOTHING_RESOLUTION.md]].

Where older wording suggested an individualized funder withdrawal window during reformulation, C005 and C017 are the controlling rules.

```text
Reformulation does not create a default unilateral withdrawal window.
Funding remains a commitment until project closure or protocol-defined project outcome.
Material reformulation is handled through a Reformulation Proposal, not silent editing and not ordinary funder withdrawal.
```

H040 is also qualified by the operating-mode principle: the application should not impose a universal number of allowed reformulations or a universal minimum reformulation period. It should require a visible reformulation policy and execute the policy configured by the competent administrator, authority, community mechanism, or protocol for the active mode.

H040 is further refined by the accepted Funding Window Expiry resolution: a funding deadline should be represented as a visible funding window and lightweight `FundingAttempt` record. Expiry because the project failed to reach financing closure is a project/protocol outcome, not ordinary funder withdrawal.

## Rationale

Projects should not remain open indefinitely. An indefinite funding period creates stale projects, clutters the platform, and keeps committed civic funds locked without execution.

A defined deadline creates clarity for funders, executors, and the project ecosystem.

## Rule

Each project should declare:

- funding target;
- funding window start and end;
- active Funding Attempt number;
- deadline-extension policy or policy reference;
- reformulation policy or policy reference;
- closure conditions;
- whether reformulation is allowed;
- notification rules for funders;
- fund-treatment rule if the funding attempt expires.

## Deadline outcome

When the deadline arrives and the project has not reached its funding target, the project enters one of two paths:

```text
1. Expired unfunded / closure
2. Bounded extension
3. Reformulation
```

The choice between closure and reformulation must follow the visible reformulation policy for the relevant project, public function, operating mode, or protocol. The application records and enforces that policy; it does not create an implicit universal strategy.

Extension is not an indefinite waiting room. It must be visible, objective, and capped where configured. The policy may consider funding percentage, funding velocity, active support growth, continuity risk, essential-service lane, readiness evidence, blocker status, and prior attempt history.

## Closure

If the project closes:

- committed funds are released back to the funders' civic allocation cycle or wallet rules;
- the project becomes inactive;
- the project history remains visible;
- the modeler or proposer may later create a new project if desired.

If the project expires specifically because it failed to reach financing closure, the citizen-facing outcome should be labeled as `Expired Unfunded` or an equivalent simple phrase such as `Did not reach funding`. Eligible unused and unreleased commitments return, reassign, or follow the citizen's selected/default allocation rule. This is not a free withdrawal right; it is the funding attempt outcome.

## Funding attempts, republication, and cloning

Each funding window should be traceable as a `FundingAttempt`.

The attempt records:

- project, project version, phase, or funding lane;
- target amount;
- window start and end;
- attempt number;
- extension count;
- support and funding progress snapshot;
- readiness or blocker snapshot where relevant;
- outcome;
- treatment of eligible unused commitments;
- source attempt or cloned-from reference where applicable.

If a project is republished without material change, it should preserve the project identity and add a new funding attempt. If it is materially changed, it should be cloned or reformulated with source-project and source-attempt references.

Repeated failed funding is not automatically a reputation penalty. It becomes relevant only when reviewed patterns show misleading design, spam, abusive republication, hidden material changes, or avoidable role-specific failure.

## Reformulation

If the project is reformulated:

- funders are notified;
- the new version must explain what changed;
- the project must distinguish operational reformulation from material value reformulation;
- funding effects follow C005 and C017;
- policy parameters such as maximum reformulations, minimum period between reformulations, and deadline-extension rules are applied if configured;
- funders can comment, object, support complaints, follow the reformulation, and change their evaluation of the project.

## Reformulation decision path

Reformulation should not open a default individualized withdrawal window.

Instead:

```text
Operational reformulation:
  visible change, notification where appropriate, validation, audit trail, no default funder withdrawal.

Material value reformulation:
  Reformulation Proposal, preserved original version, community or protocol-defined approval, funding effects by approval outcome.

Rejected or expired material reformulation:
  project fails, closes, or is revoked under the original terms; unreleased, unused, retained, guaranteed, or recovered funds return or reassign according to protocol and citizen configuration.
```

The relevant response period is for review, comment, objection, complaint, approval, or protocol-defined decision, not for ordinary voluntary withdrawal.

## Reformulation policy

Core v0 should not hard-code a universal reformulation frequency.

Instead, each relevant project, public function, operating mode, or protocol should expose a `Reformulation Policy` that may define:

- maximum number of reformulations;
- minimum period between reformulations;
- whether reformulation can extend the funding deadline;
- who may approve operational reformulation;
- who may approve material value reformulation;
- what happens when reformulation limits are exhausted;
- what happens if a reformulation expires without decision.

In tutored mode, the administrator or tutored authority may configure concrete parameters.

Example:

```text
Public function:
Sports pilot in Macul

Operating mode:
Tutored

Maximum reformulations:
2

Minimum period between reformulations:
30 days

Material reformulation approval:
Tutored authority plus public Governance Resolution

If limits are exhausted:
Close, revoke, or require exceptional public resolution.
```

In a non-tutored or open mode, the competent authority, community mechanism, or protocol active at that time defines the correct strategy. The application should not impose a universal reformulation count or period on that mode.

This preserves flexibility without allowing silent instability: citizens can see the active policy, the project history, the deadline effects, and the authority or rule responsible for each reformulation.

## Reformulated visibility label

A reformulated project should not appear as a new project.

It should keep its identity and history, but be clearly labeled as reformulated.

Possible label:

```text
Reformulated recently
```

This helps funders who missed the reformulation notification understand that the project they originally supported has changed and should be reviewed again.

Funders who do not respond remain governed by the project outcome and their configured return/reassignment rules where those rules apply.

## History and reputation

A reformulated project should preserve its history.

Reformulation is not necessarily a negative event. It may indicate that the project team is improving design, scope, KPIs, cost structure, communication, or feasibility.

The project should not reset reputation by reformulating. Its prior attempt, changes, support history, and funder reactions remain visible.

## Default continuity rule

When a project is reformulated, existing funding remains committed unless the project reaches a protocol-defined outcome that returns or reassigns unreleased, unused, retained, guaranteed, or recovered funds.

This prevents reformulation from automatically destroying partial support while still preserving citizen protection through traceability, complaints, fiscalization, retentions, guarantees, recovery where possible, and return/reassignment of eligible balances.

## Budget liquidity smoothing boundary

Funding-window expiry reduces locked commitments by returning or reassigning resources when attempts fail. A separate future mechanism may smooth budget liquidity across cycles.

The correct framing is `Budget Liquidity Smoothing`, not unrestricted leverage. It may allow a lawful implementation to accelerate limited allocation capacity for near-funded eligible projects when annual or period budget execution, open commitment ratios, and stress tests allow it.

This is not necessary for Core v0. Core v0 should only preserve compatibility with such a policy. Any implementation requires public formula, annual or period budget cap, maximum open commitment ratio, stress testing, conservative reserve or coverage rule, cycle adjustment, and audit trail. Treasury or a custodian may report and execute the lawful policy, but must not choose projects or alter civic priorities by discretion.

## Recovery caveat

Core v0 should not promise full recovery after failure or reformulation.

If funds were legitimately or illegitimately released and spent, they may not be fully recoverable, just as current public projects do not always recover spent funds when a contractor fails. The system improves the situation by making losses visible, slowing release through milestones, preserving evidence, activating guarantees or recovery where possible, and assigning responsibility.

## Principle

> A project that fails to reach funding by its visible funding window must either expire unfunded, receive a bounded policy-defined extension, or reformulate transparently while preserving history. Expiry releases eligible unused commitments according to protocol or citizen defaults; it does not create ordinary individual withdrawal. Funding effects follow project outcome, C005, C017, and the accepted funding-window policy.

> Reformulation frequency and deadline-extension parameters are policy-configurable by operating mode, administrator, competent authority, community mechanism, or protocol. Core v0 requires visibility, traceability, and enforcement of the configured policy, not a universal application-imposed number.

> Budget Liquidity Smoothing is future/country implementation, not Core v0 money creation. It may only operate through public, capped, stress-tested fiscal rules tied to authorized budgets.

## Status

Project funding lifecycle rule. Extends H035. Superseded where necessary by C005 and C017, and aligned with the C020 operating-mode configuration principle.
