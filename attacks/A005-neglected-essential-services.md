# A005 - Neglected Essential Services

## Status

Reviewed in paired Phase 3 review. Improvements integrated in `docs/71_ESSENTIAL_SERVICE_PROTECTION_AND_A005_RESOLUTION.md`.

## Description

The architecture distributes bounded public-purpose allocation. This attack asks whether essential services, unpopular needs, low-visibility groups, long-term obligations, or emergency capacity may be neglected because they are not attractive to funders or delegates.

## Location in current project

- `docs/03_ROADMAP.md` Phase 3 priority objection: neglected essential services.
- `knowledge/functional-matrix-v0.md`.
- `knowledge/functional-matrix-v0-addendum-missing-functions.md`.
- `knowledge/hypotheses/H002-distributed-resource-allocation.md`.
- `docs/47_TREASURY_CITIZEN_BALANCE_AND_C006_RESOLUTION.md`.
- `knowledge/open-questions/distributed-roadmap-construction-governance.md`.

## Problem

Distributed allocation may favor visible, emotionally salient, local, or low-conflict projects. Essential services often require continuity, universal coverage, risk pooling, or technical standards that cannot depend only on monthly attention.

The comparison baseline is not an ideal central allocator. Existing centralized systems can also underfund continuity needs when a new government changes priorities, packages many unrelated preferences into one electoral mandate, or hides budget tradeoffs inside opaque ministries. A distributed allocation layer may therefore improve visibility and give citizens a direct way to fund neglected priorities, but only if essential floors and planning-continuity targets are protected from both central political neglect and popularity-driven neglect.

Example:

```text
Local sports projects receive enthusiastic funding.
Less visible disability care, high-cost medical support, preventive maintenance, elder-care continuity, or emergency reserves remain underfunded.

In the current institutional model, a new administration may prioritize other policy areas and leave elder-care continuity underfunded for years. In the distributed model, citizens who disagree with that priority can fund elder-care projects directly, but the minimum continuity floor should not be left only to popularity cycles.
```

## Recommended resolution path

- Preserve a non-assignable common pool, reserve-backed baseline, default-assigned lane, or equivalent protection for essential guarantee floors, macro obligations, emergency reserves, and functions that should not depend only on popularity.
- Require Planning Scopes to identify protected essential-service boundaries, service-provision lanes, and planning-continuity targets.
- Add observability for underfunded eligible scopes and low-visibility beneficiary groups.
- Keep public/legal guarantees separate from distributed service provision.
- Treat continuity-critical scopes and projects differently from one-time discretionary projects.
- Require public, versioned, auditable rule-change records when a government, authority, or protocol revises an essential planning target.

## Theoretical base and citations

- Richard Musgrave, `The Theory of Public Finance` (1959): public finance must handle allocation, distribution, and stabilization functions.
- Wallace Oates, `Fiscal Federalism` (1972): local allocation can improve fit, but spillovers and redistribution may require higher-level coordination.
- Mancur Olson, `The Logic of Collective Action` (1965): diffuse groups and public goods are vulnerable to under-provision.
- Aaron Wildavsky, `The Politics of the Budgetary Process` (1964): budgeting is a political process that allocates attention and stability.
- John Rawls, `Political Liberalism` (1993): basic rights and fair terms of cooperation cannot depend only on preference aggregation.

## Social reasons

The people most dependent on essential services may have the least time, power, money, health, or digital capacity to participate. The model must not confuse civic enthusiasm with coverage justice.

At the same time, centralized electoral politics also bundles unrelated preferences and can leave substantial citizen demand unexpressed for years. Distributed funding can make neglected essential-service demand visible when citizens disagree with central political priorities.

## Conflicts of interest

- Organized groups may fund their own visible benefits.
- Providers may prefer easy, high-visibility beneficiaries.
- Delegates may chase popular projects to maintain trust.
- Authorities may move hard obligations into distributed funding to avoid responsibility.
- Authorities may also hide or defund planning-continuity targets for political reasons unless changes are versioned and auditable.

## Inconsistencies to test

- The model supports distributed service provision, but universal guarantees may need centralized or legally recognized coordination.
- Equal civic wallet amounts are simple, but need severity and vulnerability may not be equal.
- Planning Scope Alignment protects eligibility, but roadmap construction remains unresolved.

## Stress scenario

Sports infrastructure receives repeated funding while elder-care continuity projects fail to close funding because beneficiaries are less visible and less digitally active.

Alternative stress scenario:

```text
A new government changes its roadmap and deprioritizes elder-care continuity.
Citizens who still value elder care can fund distributed service projects,
but the minimum continuity target and any change to it remain publicly visible.
```

## Review checklist

- Does the active scope identify essential guarantee floors, distributed service lanes, and planning-continuity targets?
- Does any change to the planning target require a public Governance Resolution, Administrative Rule Change, or equivalent trace?
- Does the active scope identify non-assignable, reserve-backed, default-assigned, or citizen-assignable lanes?
- Are low-visibility needs surfaced without creating hidden algorithmic allocation?
- Are continuity-critical services protected from monthly volatility?
- Are service provision and public guarantee layers separated?
- Are providers prevented from cream-skimming low-risk beneficiaries?

## Expected resolution output

A Phase 3 resolution should define an `Essential Service Protection` test for Planning Scopes and funding eligibility.
