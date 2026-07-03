# D029 - Defense Against A029: Program Fragmentation and Lost Complementarities

## Integration status

Second-round paired review draft. No accepted resolution yet; pending Phase 3 review integration.

## Attack reference

- Attack file: `attacks/A029-program-fragmentation-and-lost-complementarities.md`
- Attack title: `A029 - Program Fragmentation and Lost Complementarities`
- Source: second-round attack queue, program fragmentation and lost complementarities.

## Attack summary

The attack argues that decomposing public action into independently proposed, funded, and closed projects destroys complementarities: economies of scale in procurement, cross-project linkages where one project is worthless without another, multi-year program coherence, and portfolio-level risk pooling. Composite programs can group interdependent projects, but each component still lives or dies by its own funding attempt, so partial funding produces stranded half-systems. Where A006 concerns keeping one service continuous over time, A029 concerns the cross-sectional dimension: whether a set of projects that create value only together can actually be assembled when each is financed and closed separately, especially since H051 is explicitly Extension v1+ and Core v0 coordinates almost nothing across projects.

In the example, a Macul sports program needs four linked projects: the multi-court build, night lighting, an access ramp and drainage, and a two-year maintenance plan. The court build and lighting fund quickly, the unglamorous drainage expires unfunded, and the maintenance plan finds no executor willing to commit for two years. The commune ends up with lit courts that flood in winter and degrade within a year; each project closed or expired correctly on its own, yet the coordinated result failed.

## Objective evaluation

- Classification: partially founded.
- Why it is founded: composite components still face independent funding attempts, so cross-project complementarities can strand at the program level, and procurement scale economies are genuinely lost relative to a single large contract.
- Why it is not fatal to the architecture: the object model is not atomized-only; Composite Programs aggregate projects, projects have phases, and Planning Scope alignment is the coherence layer the attack says is missing, while parallel closure and funding expiry prevent the worst stranding of released money.
- Difference of judgment: medium. Fragmentation is also modularity, with smaller blast radius, comparability, and exit options, so Pressman and Wildavsky's decision-point logic cuts both ways.
- Editorial distortion risk: medium. The attack distorts the project if it treats every independent funding attempt as a coordination failure rather than as a deliberate accountability choice with real offsetting benefits.

## Response

The defense is that the architecture already carries coordination structure, and its worst failure mode is a stranded plan rather than stranded money, while conceding that binding cross-project funding coherence is genuinely thin in Core v0. The object model is not atomized-only: a Composite Program aggregates multiple interdependent projects, can define that a program becomes executable only if all critical child projects are funded, and must expose dependencies to citizens before they fund. Planning Scope alignment situates every financeable project inside a public function, which is exactly the coherence layer that keeps a set of projects legible as one program. Parallel closure ensures a project becomes execution-ready only when all applicable closure conditions complete, and funds committed while a project is open are reserved, not released to the executor, so a component whose complements fail does not silently spend public money on a half-system; expired funding attempts return or reassign eligible commitments rather than leaving paid-for orphans.

Under P001, fragmentation is not purely a loss. The same independence the attack criticizes gives the model a smaller blast radius when one component fails, comparability across executors, and exit options that a single monolithic contract forecloses; project variation control keeps each component accountable to its own accepted base design rather than dissolving responsibility into an abstract program. Pressman and Wildavsky's point that more decision points lower the joint probability of completion is real, but it is the same property that lets a bad component fail alone instead of dragging a whole program down with it.

For the Macul sports program, the honest concession stands: the drainage can expire unfunded and the two-year maintenance plan can find no executor while the courts and lighting fund quickly, and Core v0 does not today make the interdependency binding on those separate funding decisions. What the defense offers is that the money for the funded components need not strand as released cash, that the dependency can be declared and shown before citizens fund, and that the coordinated failure is visible as such. The improvement is to strengthen cross-project dependency declarations and program-level funding-coherence rules so complements can be financed as a bundle, recovering coordination without abandoning the per-project accountability that makes responsibility legible.

## Project-document basis

- [[H051-composite-programs-as-project-aggregators#^rf8fdc534|knowledge/hypotheses/H051-composite-programs-as-project-aggregators.md]] defines the composite program as a coordination container aggregating multiple interdependent projects.
- [[H051-composite-programs-as-project-aggregators#Approval and financing logic|knowledge/hypotheses/H051-composite-programs-as-project-aggregators.md]] allows a program to require that it becomes executable only if all critical child projects are funded.
- [[H051-composite-programs-as-project-aggregators#^rf76c7bb4|knowledge/hypotheses/H051-composite-programs-as-project-aggregators.md]] requires that a project's dependency on other projects be visible to citizens before they fund it.
- [[H009-binding-evolutionary-planning#^r96b47655|knowledge/hypotheses/H009-binding-evolutionary-planning.md]] defines the Planning Scope that situates each financeable project inside a public function, providing the coherence layer.
- [[12_OPEN_PROJECT_PARALLEL_CLOSURE_MODEL#^r5e4c60cd|docs/12_OPEN_PROJECT_PARALLEL_CLOSURE_MODEL.md]] states that a project becomes executable only when it completes all applicable closure conditions, not through a rigid sequence.
- [[85_FUNDING_WINDOW_EXPIRY_AND_BUDGET_LIQUIDITY_SMOOTHING_RESOLUTION#^r7a8e9ff1|docs/85_FUNDING_WINDOW_EXPIRY_AND_BUDGET_LIQUIDITY_SMOOTHING_RESOLUTION.md]] makes Expired Unfunded a protocol outcome that returns or reassigns eligible unreleased commitments rather than stranding paid money.
- [[H051-composite-programs-as-project-aggregators#^r9ab52738|knowledge/hypotheses/H051-composite-programs-as-project-aggregators.md]] concedes that composite programs are Extension v1+, not a Core v0 requirement, so cross-project coordination is thin by default.
- [[H021-project-variation-control#^r0c67837c|knowledge/hypotheses/H021-project-variation-control.md]] states that a project is approved as a specific version with defined commitments, which is the accountability benefit fragmentation preserves.

## Bibliographic basis

- Albert Hirschman, `The Strategy of Economic Development` (1958): development proceeds through backward and forward linkages, which the strengthened dependency declaration is meant to make visible before funding rather than after stranding.
- Paul Rosenstein-Rodan, "Problems of Industrialisation of Eastern and South-Eastern Europe" (1943): complementary investments must be made together, which program-level funding-coherence rules and conditional bundles are designed to approximate.
- Jeffrey Pressman and Aaron Wildavsky, `Implementation` (1973): more independent decision points lower joint completion probability, but the same property gives the model a smaller blast radius and exit options, so the citation cuts both ways.
- Tibor Scitovsky, "Two Concepts of External Economies" (1954): decentralized decisions fail to internalize pecuniary external economies, which shared procurement across linked projects is meant to partially recover.
- Elinor Ostrom, `Governing the Commons` (1990): sustained outcomes depend on nested, coordinated rules, which Composite Programs and Planning Scope alignment supply above the atomized project layer.

## Proposed improvements

Strengthen cross-project coordination while preserving per-project accountability:

- promote a lightweight dependency declaration into Core v0 so a project can declare hard prerequisites and complementary links visible before funding;
- support conditional or escrowed funding for interdependent bundles, with automatic return or reassignment if the bundle fails;
- expose an aggregate bundle or program status showing stranded-value and dependency risk rather than presenting each component's success in isolation;
- allow shared procurement and shared control packages across linked projects to recover economies of scale while keeping evidence and responsibility per project.

## Applies to

- Composite Programs;
- project and phase funding attempts;
- Planning Scope alignment;
- procurement and control packaging;
- administrative observability.

## Defense strength and residual risk

Defense strength: strong against the claim that the model is atomized-only and that funded components strand as released money; moderate against the claim that complements can fail to assemble, which remains true where dependencies are not made binding.

Residual risk: even with dependency declarations, independent funding attempts can leave a critical complement unfunded, and conditional bundles are Extension v1+ rather than Core v0 today. Procurement scale economies remain partly lost relative to a single large contract, traded for accountability and exit options.

## Decision

The attack is partially founded. Phase 3 should strengthen cross-project dependency declarations and program-level funding coherence in Composite Programs, while noting that fragmentation is also deliberate modularity and that parallel closure already prevents the worst stranding of released public money.
