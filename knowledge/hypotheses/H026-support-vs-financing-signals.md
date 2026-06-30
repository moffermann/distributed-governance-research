# H026 — Support Versus Financing Signals

## Hypothesis

A distributed allocation system should distinguish between social support and financial contribution. Money can make a project feasible, but it should not automatically count as greater social legitimacy.

It should also distinguish support from justified objection. A project may have active civic support, active justified objections, committed funding, and formal complaints at the same time. These are different signals and should not be collapsed into one approval score.

Support and justified objection are civic signals. They should be reversible by the citizen. Funding is a financial commitment governed by funding and reformulation rules. A formal complaint is a structured review object governed by the complaint process.

## Resolution alignment

This hypothesis is aligned with:

- `docs/39_IDEA_ENTITY_NAVIGATION_AND_C001_RESOLUTION.md`;
- `docs/41_COMPLAINT_ENTITY_AND_C004_RESOLUTION.md`;
- `docs/42_FUNDING_COMMITMENT_AND_C005_RESOLUTION.md`;
- `knowledge/hypotheses/H027-proportional-project-thresholds.md`;
- `docs/12_OPEN_PROJECT_PARALLEL_CLOSURE_MODEL.md`;
- `docs/35_CONSOLIDATED_ENTITY_OBJECT_STATE_MAP.md`.

C001 already rejects simple dislike signals for ideas and uses structured objections instead. H026 extends the same logic to projects while adding the project-specific distinction between civic signals and financial commitments.

## Rationale

A poor citizen may contribute a small amount, while a wealthy citizen may contribute a very large amount. Both may be expressing the same social support:

> I want this project to exist.

The difference is that one contribution creates more financial feasibility. It should not necessarily create more formal legitimacy.

Likewise, an objection should not be a low-information dislike. A citizen may object because the project appears duplicative, has unclear beneficiaries, hides risks, lacks evidence, creates a negative externality, or conflicts with an active public plan. That objection should be structured enough to help the project, other citizens, fiscalizers, and tutored authorities understand the concern.

At the same time, citizens should be able to change their mind. If a project clarifies its beneficiaries, publishes missing evidence, resolves a duplication concern, or changes through reformulation, the citizen should be able to withdraw support or withdraw a justified objection.

## Separate signals

The system should track at least four planes separately:

```text
social support = active positive civic signal
justified objection = active structured negative civic signal
financial feasibility = committed funding or control funding
formal complaint = structured review process with evidence, admissibility, and procedural effects
```

These signals may inform a `Threshold Policy`, visibility, discovery, observation, review priority, or civic legitimacy profile, but they do not automatically substitute for each other.

## Reversible civic signals

Support and justified objection should be revocable by the same citizen who created the signal.

Recommended states:

```text
Active
Withdrawn
Superseded by project version
Converted to complaint where applicable
```

The project surface should count active signals separately from historical withdrawn signals.

Historical changes should remain auditable, but ordinary citizens should see the current active state first.

Example:

```text
Active support:
1,240 citizens

Withdrawn support:
87 historical withdrawals

Active justified objections:
18

Withdrawn justified objections:
7 historical withdrawals
```

Withdrawing support does not withdraw committed funds. Withdrawing a justified objection does not erase a formal complaint already submitted or a review already opened.

## Example

Project A:

```text
1,000 supporters
$10,000,000 raised
```

Project B:

```text
3 supporters
$10,000,000 raised
```

Both may be financially viable, but they do not have the same social legitimacy profile.

Project C:

```text
1,240 active supporters
18 active justified objections
$10,000,000 committed
0 formal complaints
```

This project is financially viable and broadly supported, but the objections may still matter. They may point to missing information, duplication, access rules, common-good impact, or other concerns that should be visible.

Project D:

```text
3 active supporters
0 active justified objections
$10,000,000 committed
0 formal complaints
```

This project may be financially viable, but its social legitimacy profile is narrow. That does not automatically make it illegitimate, but it should remain visible.

## Macul example

```text
Project:
Multi-court facility in Macul.

Funding:
Fully funded by a small number of large commitments.

Support:
640 active supporters from the commune.

Justified objections:
22 active objections alleging possible duplication with an existing municipal or ministry project.

Later event:
The tutored authority publishes a Governance Resolution showing that the project is not duplicative.

Citizen action:
Some objectors withdraw their objections.

System effect:
Active objection count falls. The historical objection trace remains visible. No committed funding is released or withdrawn merely because support or objections changed.
```

## Wealth and influence

Wealthy individuals may be able to fund more projects. This is not necessarily illegitimate, especially if they already contribute more through taxes. However, their financial contribution should be visible, traceable, and separated from broad social support.

Large funding concentration may be relevant to transparency, related-party review, or legitimacy analysis, but it should not become hidden extra civic weight.

## Formal complaints are different

A justified objection can say:

```text
I believe this project is duplicative.
```

A formal complaint must say:

```text
What rule, promise, contextualized evidence item, budget line, conflict, or compliance condition is allegedly false, incomplete, conflicted, harmful, or non-compliant?
What evidence supports that claim?
What review effect is requested?
```

Support or objection signals may help identify where civic attention is needed, but they do not prove the project valid or invalid. Formal review belongs to the complaint, fiscalization, evidence, governance-resolution, pause, disbursement, or revocation flows.

## Citizen-facing simplicity

The ordinary citizen should see simple actions:

```text
Support
Withdraw support
Object with reason
Withdraw objection
Fund
File complaint
```

The interface should explain that:

- support is reversible;
- justified objection is reversible;
- funding is a commitment governed by funding rules;
- complaint is a formal process.

## What the system must not do

H026 rejects:

- treating money as extra social legitimacy;
- treating support as funding;
- treating a justified objection as a formal complaint by default;
- using a simple dislike button for project objections;
- hiding active objections because a project is well funded;
- allowing withdrawn support or withdrawn objections to keep counting as active signals;
- erasing the audit trail when support or objection is withdrawn;
- letting signal withdrawal undo committed funding or erase an already-open formal complaint.

## Principle

> Money helps make projects feasible, but money should not buy social legitimacy.

> Support and justified objection are reversible civic signals. Funding and formal complaints are separate commitments and processes.

## Status

Core financing, legitimacy, and civic-signal hypothesis. Aligned with C001, C004, C005, H027, and the v0 project signal model.
