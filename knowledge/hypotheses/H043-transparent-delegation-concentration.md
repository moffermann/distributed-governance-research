# H043 — Transparent Delegation Concentration

## Status

Core v0 delegation-concentration hypothesis aligned with [[H042-layered-delegation-architecture|H042]], [[../../docs/61_DELEGATION_CONCENTRATION_VISIBILITY_AND_C023_RESOLUTION|C023]], [[H044-non-compensated-delegation-by-default|H044]], [[H045-delegated-action-weight|H045]], [[H046-delegated-action-reporting|H046]], and [[../../docs/76_DELEGATION_CONCENTRATION_STRESS_THRESHOLDS_AND_A010_RESOLUTION|A010]].

The original rule is preserved: voluntary delegation concentration is allowed by default, but it must never be hidden. The clarification is that concentration visibility now includes represented weight, action scopes, delegated budget, territory, trends, conflicts, separate participation-support funding, delegated-action reports, revocation/resignation signals, A010 stress-warning and report-sufficiency status where applicable, and any configured cap effects.

## Hypothesis

Delegation concentration should be allowed, but made fully transparent. The system should not prevent citizens from freely delegating to trusted actors, but society should be able to see how much delegated power each actor accumulates.

## Rationale

If many citizens trust an eligible person, eligible organization, eligible university or expert group, foundation, or local group, the system should not prohibit that delegation merely because it becomes large.

However, delegation creates influence. If a delegate accumulates significant authority over civic allocation, complaints, fiscalization, evaluation, or other delegated actions, that concentration must be visible.

The problem is not concentration itself. The problem is hidden concentration: citizens delegating without knowing how much influence the delegate already holds, observers being unable to audit delegated power, or the platform treating a high-weight delegated action as if it were only one actor's personal action.

## Rule

Delegation remains a voluntary citizen choice by default, but concentration is transparent, reportable, and auditable.

The system should show:

- number of active delegators;
- total delegated civic allocation;
- delegated action scopes;
- public functions or domains affected;
- territorial concentration;
- share of total delegated influence in a scope;
- share of total civic allocation influenced, where relevant;
- represented weight used in delegated actions;
- recent delegated actions;
- system-generated delegated-action reports;
- delegate reputation by role;
- conflicts of interest;
- related-party warnings;
- separate participation-support funding, if any;
- A010 stress-warning status, where applicable;
- report-sufficiency status for high-concentration delegation, where applicable;
- revocation and resignation trends;
- concentration trend over time;
- configured caps and cap effects, if any.

Example:

```text
Delegate:
Macul Sports Association

Current delegation:
2,430 active delegators
28% of delegated sports allocation in Macul

Recent delegated action:
Funded Project A

Represented weight:
1 own action + 2,430 delegated citizens

Separate participation-support funding:
Community Sports Help Desk, if funded as an ordinary project

Citizen choices:
[Delegate anyway]
[View detail]
[Choose another delegate]
```

## No hard cap by default

The system should not impose a hard cap on delegation concentration by default.

A hard cap would override citizen trust and create an artificial limit on voluntary coordination.

Configurable caps may exist by pilot, public function, territory, action type, operating mode, protocol-change process, or country implementation rule. If a cap exists, it must be public before delegation and visible when the delegate acts.

## Transparency indicators

Delegates with significant concentration should be clearly marked.

Examples:

```text
This delegate currently influences 4.2% of the national assignable civic budget.
This delegate has 850,000 active delegators.
This delegate is especially influential in health and education allocation.
This delegate represents 28% of delegated sports allocation in this commune.
```

Warnings should inform. They should not shame the citizen, block voluntary delegation by default, or imply that concentration is automatically illegitimate.

A010 stress thresholds reinforce this rule without creating a new primary entity or universal cap. A stress threshold is a warning, reporting, disclosure, or observability condition derived from existing delegation records, delegated-action records, reports, related-party disclosures, participation-support disclosures, AuditEvents, and administrative observability.

H043 is aligned with [[../../docs/98_CLIENTELISM_PATTERN_INDICATORS_AND_A030_RESOLUTION|A030]]: because a popular delegate can become a de facto political machine trading allocation behavior for off-platform favors, A030 reuses the delegation records and the A014 related-party graph to surface pattern-level clientelism indicators over time — repeat broker-beneficiary alignments across cycles, geographic delegation blocs correlated with related-project funding, and participation-support providers whose assisted citizens concentrate on related actors — feeding review, complaint, and referral paths as leads, never automatic verdicts. The on-platform half of the exchange is made traceable while the off-platform quid pro quo stays invisible and its sanction remains external law, and a citizen can revoke a delegation privately for future actions without the broker observing the exit at action time.

## Citizen visibility

When a citizen chooses a delegate, the interface should show the delegate's existing level of influence.

This allows the citizen to decide whether they are comfortable increasing that concentration.

Concentration should be visible at least:

1. In the delegate profile.
2. Before delegation confirmation.
3. When the delegate acts with represented weight.
4. In delegated-action reports.
5. In administrative observability.
6. In public audit views where appropriate.

## Relationship with non-compensated delegation

Delegation concentration should not become automatically profitable in Core v0.

A delegate may accumulate influence and responsibility when citizens trust them, but they should not receive automatic commissions, fees, or percentages of delegated civic allocation merely because they hold delegations.

Participation-support projects may exist separately, but they must be ordinary transparent projects with their own budget, evidence, fiscalization, and audit trail.

## Relationship with represented weight and reporting

Concentration visibility should connect directly to represented weight and reports.

When a delegate acts inside an accepted delegation scope, the action should show whether it is:

```text
personal-only action
delegated action with represented weight
delegated action with capped represented weight
```

The same represented weight should appear in:

- the action record;
- delegated-action reports;
- concentration signals;
- administrative observability metrics;
- cap-compliance checks where caps exist.

## Remaining risks

- Citizens may ignore concentration warnings.
- Popular delegates may become de facto political machines even without automatic compensation.
- Related delegates may split influence across multiple entities to reduce visible concentration.
- Participation-support projects may become indirect delegation-acquisition tools if not transparent. ^r3063fd6c
- Too many warnings may create fatigue.
- Configurable caps may be used politically or inconsistently.

## Mitigations

- keep warnings short at the citizen-facing layer;
- keep detail available on demand;
- show represented weight when delegates act;
- generate delegated-action reports from the audit trail;
- keep revocation simple and immediate for future actions;
- show separate participation-support funding where relevant;
- show report-sufficiency status for high-concentration delegates where applicable;
- show material related-delegate, support-provider, or related-project ties where applicable;
- exclude automatic delegation commissions from Core v0;
- include concentration metrics in administrative observability;
- make any configured cap public before it affects delegation.

## Principle

> Delegation concentration is not forbidden, but it must never be hidden, automatically monetized, or reported as if high-weight delegated actions were personal-only actions. ^r300d71bb

## Research note

Extension of H042. Superseded where necessary by C023, H044, H045, and H046.
