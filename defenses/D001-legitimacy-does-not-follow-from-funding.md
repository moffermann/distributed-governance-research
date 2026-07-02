# D001 - Defense Against A001: Legitimacy Does Not Follow From Funding

## Attack reference

- Attack file: `attacks/A001-legitimacy-does-not-follow-from-funding.md`
- Attack title: `A001 - Legitimacy Does Not Follow From Funding`
- Roadmap source: Phase 3 priority objection, legitimacy.

## Attack summary

The attack argues that the system may let funding volume, support, delegation, or discovery visibility be misread as democratic legitimacy. In the Macul multi-court example, a project could be fully funded by organized sports groups while nearby residents, schools, disabled users, or non-participating affected parties never had a meaningful chance to challenge bathrooms, accessibility, noise, access rules, or school-use conflicts.

## Objective evaluation

- Classification: partially founded and important.
- Why it is founded: funding success can create social and political pressure, and real implementations may be tempted to treat "fully funded" as "socially approved."
- Why it is not fatal to the architecture: Core v0 already separates funding from legitimacy, eligibility, execution readiness, disbursement, fulfillment evidence, fiscalization, and complaints.
- Difference of judgment: low. This is not merely a philosophical preference; participation and legitimacy literature supports the warning.
- Editorial distortion risk: high if the attack is used to conclude that only centralized authorities can legitimate public action. The project thesis is more precise: public guarantees, rights, legal authority, distributed funding, service provision, evidence, and accountability are different functional layers.

## Response

The defense is not that funding creates legitimacy. The defense is that the architecture already rejects that claim.

Funding is a financial feasibility signal inside a bounded public-purpose allocation layer. It does not prove social consent, affected-party acceptance, legal validity, public guarantee compliance, design adequacy, disbursement readiness, or value fulfillment.

For the Macul case, full funding of `Design and Construction of Multi-court Facility in Macul` should only mean that the execution or phase lane has enough committed resources. It should not mean that unresolved design omissions, affected-party objections, noise ceilings, accessibility, bathrooms, public access, or legal requirements have been approved.

The correct defense is to make the separation operational:

- funding can close a funding target;
- Planning Scope alignment determines whether a project is eligible for execution financing;
- Threshold Policy and phase gates determine whether it can become execution-ready;
- fulfillment/control evidence and fiscalization determine whether promises are fulfilled;
- complaint and affected-party channels preserve contestation;
- legal or public-authority consequences remain outside platform-only funding dynamics.

## Project-document basis

- `knowledge/hypotheses/H002-distributed-resource-allocation.md:57` separates the assignable civic wallet from the non-assignable common pool.
- `knowledge/hypotheses/H002-distributed-resource-allocation.md:58` requires financeable projects to align with an active `Planning Scope` and applicable `Threshold Policy`.
- `knowledge/hypotheses/H002-distributed-resource-allocation.md:60` states that funding, support, objection, and formal complaint remain separate, and that funding does not buy social legitimacy.
- `docs/33_DISTRIBUTED_GOVERNANCE_SYSTEM_V0_BLUEPRINT.md:190` says popularity does not substitute for execution readiness, disbursement review, or fulfillment evaluation.
- `docs/33_DISTRIBUTED_GOVERNANCE_SYSTEM_V0_BLUEPRINT.md:192` requires every financeable project to align with a visible, versioned, auditable active Planning Scope.
- `docs/34_CORE_V0_SCOPE_FREEZE.md:327` states that distributed allocation does not replace common-pool protection, eligibility review, execution readiness, disbursement review, or fulfillment evaluation.
- `docs/66_IMPLEMENTABLE_OBJECT_SCHEMA_DRAFT_V0.md:173` defines `FundingCommitment` as commitment, not proof of readiness or fulfillment.

## Bibliographic basis

- Jurgen Habermas, `Between Facts and Norms` (1996): legitimacy requires public justification and communicative accountability.
- John Rawls, `Political Liberalism` (1993): public rules affecting plural citizens require public reason, not only preference aggregation.
- Robert Dahl, `Polyarchy` (1971): democratic legitimacy depends on both participation and contestation.
- Sherry Arnstein, "A Ladder of Citizen Participation" (1969): participation can be tokenistic when citizens do not have meaningful influence.
- Archon Fung, "Varieties of Participation in Complex Governance" (2006): participatory designs differ by who participates, how they communicate, and how participation connects to authority.
- Elinor Ostrom, `Governing the Commons` (1990): legitimate shared-resource governance requires boundaries, monitoring, sanctions, and conflict-resolution mechanisms.

## Proposed improvements

Add a lightweight `Project Legitimacy Profile` for projects with rights, vulnerable beneficiaries, common-good, territory-wide, or high affected-party effects. It should not be required for every low-risk project.

Suggested fields:

- affected-party map;
- rights, access, public guarantee, or common-good exposure;
- unresolved legitimacy objections;
- affected-party notification or observation path;
- route to Planning Scope review, complaint, Governance Resolution, or competent authority where applicable;
- citizen-facing warning when funding is complete but legitimacy conditions remain disputed.

## Applies to

- project publication;
- Planning Scope alignment;
- funding target closure;
- execution-ready review;
- design-and-execution phase gates;
- affected-party comments, objections, and complaints;
- tutored Governance Resolutions where eligibility or scope decisions affect legitimacy.

## Defense strength and residual risk

Defense strength: strong as an architectural boundary, moderate as an implementation safeguard.

Residual risk: implementers may still design user interfaces, dashboards, or political communications that imply "fully funded" equals "approved by the community." That risk requires explicit labels and audit traces, not a different core thesis.

## Decision

The attack is valid as a failure-mode warning. It does not defeat the project because the current model explicitly denies the premise that funding creates legitimacy. A Phase 3 resolution should add a proportional legitimacy-profile mechanism for high-impact projects.
