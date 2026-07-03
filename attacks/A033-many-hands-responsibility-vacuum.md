# A033 - The Problem of Many Hands: Responsibility Vacuum

## Status

Reviewed in paired Phase 3 review. Improvements integrated in `docs/89_DUTY_OF_CARE_ANCHOR_AND_A033_RESOLUTION.md` and propagated into the core corpus.

## Description

When a project funded by thousands of micro-allocations, scoped by an authority, modeled by one actor, executed by another, fiscalized by a third, and evidenced by a fourth causes real-world harm — a collapsed roof, an injured child — responsibility diffuses across so many hands that no single actor is meaningfully accountable for the outcome. The platform explicitly disclaims legal effects, role-based reputation is an internal currency rather than a remedy, and a victim faces a doctrinal vacuum: whom do they sue, and does distributed allocation dilute the state's duty of care by interposing many partial contributors between the public purse and the harm. Unlike A018, which concerns deliberate collusion among roles, this attack requires no wrongdoing and no coordination: the accountability failure is structural diffusion, arising precisely when every actor performed their narrow role adequately and the harm fell in the gaps between roles.

## Location in current project

- `knowledge/hypotheses/H010-primary-responsibility-principle.md`, whose Primary Responsibility Anchor fixes a project's accountability center but is defined for value delivery, not for third-party harm.
- `knowledge/principles/P003-project-responsibility-for-undeclared-antivalue.md`, which attaches responsibility for undeclared antivalue to "the project" without naming who bears it toward a victim.
- `docs/65_RESPONSIBILITY_MATRIX_BY_ROLE_V0.md`, which partitions authority and reputation by role but disclaims being a legal-liability code.
- `docs/51_ROLE_REPUTATION_RESPONSIBILITY_AND_C012_RESOLUTION.md`, which keeps reputation role-specific and rejects collective penalty, so harm need not land on anyone.
- `docs/43_PUBLIC_INSTITUTION_EXCLUSION_AND_C007_RESOLUTION.md`, which places the public authority external to the internal actor model for scopes it controls, distancing the state from execution.
- `docs/41_COMPLAINT_ENTITY_AND_C004_RESOLUTION.md`, whose complaint machinery produces platform effects and referrals but not a determination of who is liable to a harmed party.

## Problem

The architecture's great strength — decomposing a project into declared, bounded, individually accountable roles — is also the source of the vacuum. Each role is responsible only for its narrow obligation: the modeler for the design's adequacy on paper, the executor for building to the accepted design, the fiscalizer for reviewing against defined scope, the evidence producer for their contextualized items, the funders for committing money, the authority for scoping. When harm results from the interaction of adequately-performed roles — a design that met the gate but was unsafe in a way no role's obligation captured — the responsibility matrix can truthfully find no single role breached its duty, C012 forbids penalizing anyone by mere association, and P003 assigns responsibility to an abstraction, "the project," that is not a legal person a victim can sue. The many hands each did their part; the harm belongs to none of them.

For a victim this is not a reputation question but a remedy question. The platform states it creates no legal effects; role-based reputation, even if it moved, is an internal signal that compensates no one; and the complaint flow, by its own terms, routes real-world harm to external courts and regulators rather than adjudicating liability. Meanwhile, distributing allocation across thousands of citizens and interposing a scoping authority that is "external" to execution may let the state argue its duty of care is diluted or displaced onto the distributed process. The doctrinal question — whom does the injured child's family sue, and can they reach a solvent, responsible party — has no answer inside the model, and the model's design makes the answer harder to construct than under a conventional single-contractor public works regime.

Example:

```text
The Macul multi-court roof collapses, injuring a child.
Design met the accepted gate; the executor built to spec; the fiscalizer reviewed in scope.
Evidence producers documented milestones; 3,000 citizens funded micro-amounts; the ministry scoped it.
Each role performed its declared duty. No responsibility event fits.
The family's lawyer asks who is liable. The platform disclaims legal effect and points to the courts.
The courts ask which defendant bears the duty of care. The design answer is: everyone a little, no one enough.
```

## Recommended resolution path

- Define, as a Core v0 boundary, a Duty-of-Care Anchor distinct from the value-focused Primary Responsibility Anchor: for each execution-financeable project, name the actor(s) who bear legal responsibility to third parties for physical and safety harm, recorded before disbursement.
- Require that this anchor map to a solvent, reachable legal person (executor, guarantor, insurer, or a designated responsible operator), so a victim always has a named defendant, and expose it in the citizen-facing sheet.
- Clarify, in versioned public documentation, that distributed micro-allocation does not dilute the state's underlying duty of care, and record where residual public responsibility remains when no private actor is reachable.
- Extend the Financial Assurance and Post-Closure Coverage profiles to require third-party harm coverage (liability insurance or bond) proportionate to physical risk, so remedy does not depend on tracing fault through many hands.
- Distinguish, in the responsibility matrix, "no role breached its internal obligation" from "no one is liable to the victim," and prevent the former from being read as the latter.
- Keep full liability apportionment to external law (Core v0 boundary), but require the platform to preserve a harm-attribution evidence package — roles, versions, gates, evidence — that a court can use, as an Extension v1+ enrichment of the audit trail.

## Theoretical base and citations

- Dennis Thompson, "Moral Responsibility of Public Officials: The Problem of Many Hands" (1980): when many contribute to an outcome, responsibility diffuses and no individual can be held fully accountable unless the design fixes it.
- Mark Bovens, `The Quest for Responsibility: Accountability and Citizenship in Complex Organisations` (1998): complex multi-actor structures create accountability deficits that require deliberate allocation of responsibility, not emergent role division.
- H.L.A. Hart, `Punishment and Responsibility: Essays in the Philosophy of Law` (1968): distinguishing role-, causal-, liability-, and capacity-responsibility shows that internal role performance does not settle who is answerable to a victim.
- Helen Nissenbaum, "Accountability in a Computerized Society" (1996): computerized, many-hands systems systematically erode accountability, producing barriers of "many hands," bugs, and blaming the computer.
- Iris Marion Young, `Responsibility for Justice` (2011): structural processes can produce harm for which a purely individual, fault-based liability model leaves victims without redress.

## Social reasons

Victims of public-works harm are usually ordinary people who cannot absorb the loss and cannot fund years of litigation to trace fault through a diffuse chain. A conventional public project at least offers a single contractor and a public authority as identifiable defendants; a design that atomizes both the funding and the responsibility risks leaving the injured worse off than the system it replaces. Public trust depends on the assurance that when public money builds something that hurts someone, a named party answers for it. A model that cannot name that party invites the perception that distributed governance distributes blame into nothing.

## Conflicts of interest

- Executors and operators benefit if diffusion lets them escape liability that a single-contractor regime would concentrate on them.
- The scoping authority benefits from being "external" to execution if that distances the state from its duty of care.
- The platform operator benefits from the no-legal-effects disclaimer, which shifts remedy entirely to external courts.
- Insurers and guarantors benefit if the model never requires third-party harm coverage, sparing them exposure.
- Well-resourced actors in the chain benefit from complexity that raises a victim's cost of identifying the responsible party.

## Inconsistencies to test

- H010 fixes a single accountability center for value delivery, but no equivalent anchor fixes responsibility for third-party harm.
- P003 makes "the project" responsible for undeclared antivalue, but "the project" is not a legal person a victim can sue.
- C012 rightly rejects blame by association, but combined with narrow role duties it can leave real harm attributable to no one.
- The complaint flow disclaims legal effect and refers harm outward, but the model offers courts no pre-assigned responsible defendant to receive that referral.

## Stress scenario

A distributed pilot funds a sports facility whose roof later fails, injuring a child during a school session. Investigation finds no clean breach: the design passed its gate under the standards in force, the executor built to the accepted design, the fiscalizer reviewed within the scope assigned, and the evidence producers documented what they were asked to. The failure arose from an interaction between a design assumption and a site condition that fell outside every role's declared obligation. The family sues. The executor points to the accepted design; the modeler points to the fiscalizer's approval; the fiscalizer points to the scope limits; the authority argues it merely scoped a distributed process funded by thousands of citizens and is external to execution; the platform reiterates it creates no legal effects. The audit trail is complete and shows exactly what each hand did, yet it contains no record of who owed the child a duty of care, no coverage earmarked for third-party harm, and no anchor a court can attach liability to without inventing one.

## Review checklist

- Does each execution-financeable project name an actor legally responsible to third parties for physical and safety harm before disbursement?
- Does that responsibility anchor map to a solvent, reachable legal person a victim could sue?
- Is third-party harm coverage (liability insurance or bond) required in proportion to physical risk?
- Does the model state, in versioned documentation, whether distributed allocation dilutes the state's duty of care, and where residual public responsibility lies?
- Can the audit trail produce a harm-attribution package usable by an external court?
- Is "no role breached its internal obligation" prevented from being treated as "no one is liable to the victim"?

## Resolution output

Resolved in `docs/89_DUTY_OF_CARE_ANCHOR_AND_A033_RESOLUTION.md`: a `Duty-of-Care Anchor` distinct from the value-focused Primary Responsibility Anchor (H010), plus third-party-harm coverage in the assurance profiles, integrated through existing objects (Financial Assurance Profile, Post-Closure Coverage Profile, responsibility matrix). Every execution-financeable project names, before disbursement, the actor(s) legally responsible to third parties for physical and safety harm, mapped to a solvent reachable legal person and exposed on the citizen-facing sheet; the assurance profiles extend to proportionate third-party liability coverage where Threshold Policy requires it; versioned documentation states that distributed micro-allocation does not dilute the state's duty of care; the responsibility matrix distinguishes "no role breached its internal obligation" from "no one is liable to the victim"; and the audit trail preserves a court-usable harm-attribution package. Liability apportionment remains external law: the platform records and provisions but does not adjudicate. A named anchor and coverage guarantee a reachable defendant, not a just outcome, and the doctrinal construction of liability in distributed public funding remains untested in any jurisdiction.
