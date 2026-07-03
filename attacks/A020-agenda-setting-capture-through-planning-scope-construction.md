# A020 - Agenda-Setting Capture Through Planning Scope Construction

## Status

Reviewed in paired Phase 3 review. Improvements integrated in `docs/87_PLANNING_SCOPE_AGENDA_LIMITATION_AND_A020_RESOLUTION.md` and propagated into the core corpus.

## Description

Whoever constructs Planning Scopes exercises the second face of power: they decide what citizens may fund at all, before any allocation, support, or fiscalization occurs. Core v0 requires every financeable project to align with an active Planning Scope but explicitly defers the governance of scope construction itself to an open question, leaving the largest gatekeeping power in the system undefended. Unlike A011, which targets discretionary moderation of individual projects already inside a scope, this attack targets the prior act of drawing the scope boundaries, category definitions, and eligibility framing that pre-shape every downstream allocation. Agenda control needs no visible veto: a scope that never lists an option makes that option unfundable and its absence invisible.

## Location in current project

- `knowledge/open-questions/distributed-roadmap-construction-governance.md` explicit deferral of distributed roadmap and planning-area construction to Extension v1+.
- `knowledge/hypotheses/H009-binding-evolutionary-planning.md` Planning Scope Alignment requirement versus unresolved Roadmap Construction Governance.
- `knowledge/hypotheses/H057-public-function-funding-scope-gating.md` tutored authority defining or interpreting the active scope and eligibility.
- `docs/03_ROADMAP.md` H009 alignment note preserving roadmap construction as an open question, not solved in Core v0.
- `docs/07_CORE_V0_SCOPE.md` Core v0 scope boundaries and planning-scope dependence.
- `docs/58_TUTORED_MODE_GOVERNANCE_RESOLUTIONS_AND_C020_RESOLUTION.md` tutored decisions as public Governance Resolutions.
- `docs/34_CORE_V0_SCOPE_FREEZE.md` classification of new ideas and scope-freeze rule.

## Problem

The architecture treats Planning Scope Alignment as a downstream check — a project must attach to an active scope before execution financing — while the construction of those scopes is acknowledged as unresolved and pushed to Extension v1+. This inverts the risk. By the time moderation, allocation, and fiscalization operate, the decisive choice has already been made: which public functions are open, how categories are defined, what counts as eligible. An actor who controls scope definition can suppress an entire class of demand without ever rejecting a single project, and the suppression leaves no complaint, objection, or Governance Resolution because nothing was ever proposed inside a scope that excluded it.

Example:

```text
The Macul sports pilot opens a scope defined as "local sports infrastructure,
child sports programs, and club equipment renewal."
Residents who want funding for women's leagues, disability-access retrofits, or
informal street-sport spaces find no eligible category.
No project is rejected; the demand simply has nowhere to attach, and the
scope's framing looks neutral and complete on the citizen surface.
```

## Recommended resolution path

- Make scope construction a visible, versioned governance object rather than an unresolved gap: record who defined each scope, its category set, its eligibility framing, and the reason for each boundary.
- Require a public "what this scope excludes" statement alongside "what this scope includes," so omission becomes inspectable rather than invisible.
- Add a citizen path to propose a scope, category, or eligibility change, even where such proposals are only advisory in tutored mode, so unmet demand leaves a trace.
- Expose observability metrics on scope churn, category concentration, and rejected-at-the-boundary demand to detect agenda narrowing.
- Treat category definitions and eligibility framing as higher-scrutiny changes than ordinary parameter edits, since they determine the option set.
- Keep full distributed roadmap construction as Extension v1+, but require Core v0 to represent the scope-construction authority and its boundaries rather than leaving them silent.

## Theoretical base and citations

- Peter Bachrach and Morton Baratz, "Two Faces of Power" (1962): power includes the capacity to confine decision-making to safe issues by keeping others off the agenda.
- E. E. Schattschneider, `The Semisovereign People` (1960): the definition of alternatives is the supreme instrument of power; organization mobilizes some conflicts in and others out.
- Steven Lukes, `Power: A Radical View` (1974): the third dimension of power shapes preferences and perceptions so that certain demands never form.
- William Riker, `The Art of Political Manipulation` (1986): heresthetics — structuring the choice set and dimensions — determines outcomes without changing anyone's preferences.
- Richard McKelvey, "Intransitivities in Multidimensional Voting Models" (1976): whoever controls the agenda can drive majority outcomes almost anywhere, so agenda control is decisive.

## Social reasons

Citizens experience a scope as the natural, complete list of what public money can do, not as a curated selection. When the framing quietly excludes their concern, they do not perceive a denial; they perceive that their concern is not a public matter. This is the most durable form of exclusion because it never announces itself, and it falls hardest on demands that lack an organized constituency to name them.

## Conflicts of interest

- The scope-constructing authority can define categories that favor its own programs, allies, or suppliers.
- Incumbent institutions can keep contested functions in closed mode or narrow their categories to blunt distributed competition.
- Organized interests can lobby scope definitions upstream, where there is far less scrutiny than on individual projects.
- Platform operators may prefer clean, narrow scopes that reduce moderation load over broad scopes that surface conflict.

## Inconsistencies to test

- Core v0 requires projects to align to an active scope, but it leaves the construction of scopes as an unresolved open question.
- Tutored decisions on individual projects become public Governance Resolutions, but the prior decision of how to frame the scope produces no comparable public object.
- The model rejects opaque gatekeeping in moderation, but the largest gatekeeping act — defining the option set — is undefended.
- H057 lets the authority interpret the active scope, but scope interpretation can silently reclassify or exclude whole classes of demand.

## Stress scenario

An implementing authority opens three public functions in tutored mode and defines each scope's categories narrowly, keeping a politically sensitive function in closed mode. Over a year, distributed allocation runs transparently within those scopes, and the pilot reports high satisfaction and low conflict. A researcher observes that the reported success reflects a pre-filtered agenda: the demands most likely to challenge incumbents were never expressible. The system has full records of every project decision but no record of the scope-construction choices that bounded the whole exercise, and no metric on demand that had nowhere to attach.

## Review checklist

- Is each Planning Scope's category set and eligibility framing a versioned, attributable governance object?
- Does every scope publish what it excludes as well as what it includes?
- Can citizens propose scope, category, or eligibility changes and leave a visible trace when they do?
- Are scope-construction changes held to higher scrutiny than ordinary parameter edits?
- Are metrics exposed for scope churn, category concentration, and boundary-rejected demand?
- Can an observer distinguish "no demand" from "no eligible category for the demand"?

## Resolution output

Resolved in `docs/87_PLANNING_SCOPE_AGENDA_LIMITATION_AND_A020_RESOLUTION.md` as a bounded resolution under P007: the attack is founded and partially unresolved, and Core v0 formalizes the open limitation rather than solving roadmap-construction governance. Interim observability carries the harm — every Planning Scope carries its Allocation Mandate record and versioned scope definition, scope changes and interpretations surface as Governance Resolutions with timeouts (C020), and out-of-scope demand stays visible as Ideas (C001) with volume observability per rejected or out-of-scope category. The open question `knowledge/open-questions/distributed-roadmap-construction-governance.md` remains the acknowledged constitutional gap and a blocker for open-mode scale deployment. Core v0 does not define who constructs the roadmap; agenda-setting power is documented, versioned, and contestable through visibility only, and full distributed roadmap construction remains Extension v1+. This is a declared open limitation of the architecture and a primary item for the paper's limitations section.
