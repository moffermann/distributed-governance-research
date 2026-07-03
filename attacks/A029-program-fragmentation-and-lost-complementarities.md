# A029 - Program Fragmentation and Lost Complementarities

## Status

Reviewed in paired Phase 3 review. Improvements integrated in [[97_COMPOSITE_PROGRAM_DEPENDENCIES_AND_A029_RESOLUTION|docs/97_COMPOSITE_PROGRAM_DEPENDENCIES_AND_A029_RESOLUTION.md]] and propagated into the core corpus.

## Description

The architecture decomposes public action into independently proposed, independently funded, and independently closed projects, each with its own funding window and closure conditions. This attack asks whether that decomposition destroys complementarities: economies of scale in procurement, cross-project linkages where one project is worthless without another, multi-year program coherence, and portfolio-level risk pooling. Composite programs can group interdependent projects, but each component still lives or dies by its own funding attempt, so partial funding produces stranded half-systems. Unlike A006, which concerns the time dimension of keeping a single service continuous, this attack concerns the cross-sectional coordination dimension: whether a set of projects that only create value together can actually be assembled when each is financed and closed separately.

## Location in current project

- [[H051-composite-programs-as-project-aggregators|knowledge/hypotheses/H051-composite-programs-as-project-aggregators.md]], composite program as coordination container and its dependency logic.
- [[12_OPEN_PROJECT_PARALLEL_CLOSURE_MODEL|docs/12_OPEN_PROJECT_PARALLEL_CLOSURE_MODEL.md]], per-project parallel closure conditions.
- [[H009-binding-evolutionary-planning|knowledge/hypotheses/H009-binding-evolutionary-planning.md]], Planning Scope Alignment without full roadmap construction.
- [[85_FUNDING_WINDOW_EXPIRY_AND_BUDGET_LIQUIDITY_SMOOTHING_RESOLUTION|docs/85_FUNDING_WINDOW_EXPIRY_AND_BUDGET_LIQUIDITY_SMOOTHING_RESOLUTION.md]], per-lane funding windows and Expired Unfunded outcome.
- [[29_PROJECT_CREATION_AND_PUBLICATION_FLOW|docs/29_PROJECT_CREATION_AND_PUBLICATION_FLOW.md]], project as the unit of creation and publication.
- [[H021-project-variation-control|knowledge/hypotheses/H021-project-variation-control.md]], change control bounded to a single accepted base design.

## Problem

The project is the atom of the system: it is created, funded, controlled, and closed on its own. This is a virtue for accountability, because responsibility never dissolves into an abstract program. But many valuable public results are not decomposable into independently valuable atoms. A multi-court facility without a lighting project is unusable after dark; without an access and drainage project it floods; without a maintenance program it decays. The value of each component is contingent on the others, yet each component must independently attract enough allocation, close its own funding window, and assemble its own control package. When one link in the chain expires unfunded while the others succeed, the system finances a stranded half-system that delivers a fraction of the intended value, or none of it.

Composite programs partly acknowledge this by grouping interdependent projects and exposing dependencies, but by design they preserve project-level accountability: each child project still seeks its own funding and can fail on its own. H051 is also explicitly Extension v1+ and optional, so Core v0 coordinates almost nothing across projects. Beyond linkages, fragmentation also forfeits economies of scale, since ten small independently procured projects cannot pool purchasing the way one program could, and it forfeits portfolio risk pooling, since each project bears its own funding and execution risk with no cross-subsidy. The atomization that makes responsibility legible also makes coordinated, complementary, multi-year public action structurally hard to finance.

Example:

```text
A Macul sports program needs four linked projects: the multi-court build, night lighting, an access ramp and drainage, and a two-year maintenance plan.
The court build and lighting fund quickly; the drainage project is unglamorous and expires unfunded; the maintenance plan finds no executor willing to commit for two years.
The commune ends up with lit courts that flood in winter and degrade within a year.
Each project closed or expired correctly on its own; the coordinated result failed.
```

## Recommended resolution path

- Promote a lightweight dependency mechanism into Core v0: let a project declare hard prerequisites and complementary links to other projects, with those dependencies visible to citizens before they fund.
- Support conditional or escrowed funding for interdependent bundles, so allocations to a project can be made contingent on its critical complements also reaching closure, with automatic return or reassignment if the bundle fails.
- Expose an aggregate bundle or program status that shows stranded-value and dependency risk when some components fund and others do not, rather than presenting each project's success in isolation.
- Allow shared procurement and shared control packages across linked projects to recover economies of scale, while keeping per-project responsibility and evidence intact.
- Keep the project as the accountable unit as the Core v0 boundary, and treat conditional bundles, shared procurement, and richer composite-program dependency logic as the Extension v1+ path that H051 anticipates.
- Distinguish this cross-sectional coordination mechanism from the A006 continuity mechanism, since one addresses complementary projects assembled together and the other addresses one service continued over time.

## Theoretical base and citations

- Albert Hirschman, `The Strategy of Economic Development` (1958): development proceeds through backward and forward linkages, and investments that ignore complementarities strand their own value.
- Paul Rosenstein-Rodan, "Problems of Industrialisation of Eastern and South-Eastern Europe" (1943): complementary investments must be made together in a coordinated big push because each is unprofitable or valueless alone.
- Jeffrey Pressman and Aaron Wildavsky, `Implementation` (1973): the more independent decision points a joint program requires, the lower the probability that all of them succeed and the whole is delivered.
- Tibor Scitovsky, "Two Concepts of External Economies" (1954): investment decisions generate pecuniary external economies that decentralized, independently taken decisions fail to internalize.
- Elinor Ostrom, `Governing the Commons` (1990): sustained collective outcomes depend on nested, coordinated rules rather than fully independent actions.

## Social reasons

Communities experience public value as working systems, not as disconnected projects. A facility that is built but unusable, or lit but flooded, is experienced as a failure regardless of how correctly each component closed. Fragmentation shifts the burden of coordination onto citizens and beneficiaries, who must somehow ensure that all the necessary complements independently attract funding, and it punishes them when the least salient link in a chain fails while the rest succeed.

## Conflicts of interest

- Promoters may propose the salient, fundable component and quietly omit the unglamorous complements it depends on.
- Executors may declare a project self-sufficient to avoid disclosing dependencies that would deter funders.
- Suppliers benefit from many small separate procurements rather than one competitive bulk procurement.
- Authorities may present a funded flagship component as a delivered program while its complements languish.
- Delegates may concentrate support on visible components, starving the linkages that make them work.

## Inconsistencies to test

- Project-level accountability keeps responsibility legible, but it also prevents the system from guaranteeing that complementary projects are financed together.
- Composite programs expose dependencies, but each child still lives or dies by its own funding attempt.
- Per-lane funding windows prevent indefinite locks, but independent expiry of one link can strand the value of the others.
- Planning Scope Alignment situates a project in a public function, but it does not coordinate the bundle of projects a function's result requires.

## Stress scenario

A rural potable-water program requires a source-protection project, a treatment upgrade, a distribution-network project, and a household-connection project. The distribution network and treatment upgrade fund quickly because they are visible and attributable. The source-protection project, whose benefit is abstract, expires unfunded, and the household-connection project finds no executor because margins are thin. The commune now has a treatment plant and pipes that deliver contaminated water to households that cannot connect. Every project honored its own closure rules; the program as a system was never assembled, and no mechanism ever made the interdependency binding on the funding decisions.

## Review checklist

- Can a project declare hard prerequisites and complementary links that are visible to citizens before funding?
- Can funding be made conditional on a critical complement also reaching closure, with automatic return if the bundle fails?
- Is stranded-value and dependency risk exposed at the bundle or program level rather than hidden by per-project success?
- Are shared procurement and shared control available to recover economies of scale across linked projects?
- Is portfolio-level risk pooling possible, or does every project bear its risk in isolation?
- Is the cross-sectional coordination mechanism distinct from the A006 continuity-over-time mechanism?

## Resolution output

Resolved in [[97_COMPOSITE_PROGRAM_DEPENDENCIES_AND_A029_RESOLUTION|docs/97_COMPOSITE_PROGRAM_DEPENDENCIES_AND_A029_RESOLUTION.md]] as a partially founded attack under P007: the resolution integrates through the existing Composite Program object (H051). Core v0 now supports cross-project dependency declarations inside composite programs (component X requires component Y, visible before funding), program-level funding-coherence visibility with stranded-complement warnings, and dependency-aware funding windows that can reference a prerequisite's state, while acknowledging procurement-scale losses as a cost of modularity. Components keep independent funding attempts — there is no all-or-nothing program funding in Core v0, and conditional or bundled program-level funding remains Extension v1+. Complementarities can still strand at the program level when prerequisites fund and dependents do not; modularity's benefits — smaller blast radius, comparability, exit options — are bought at scale-economy costs the corpus does not hide, a declared limitation for the paper.
