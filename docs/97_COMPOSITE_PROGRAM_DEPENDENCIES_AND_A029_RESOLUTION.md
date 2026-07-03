# Composite Program Dependencies and A029 Resolution v0

## Status

Accepted Phase 3 resolution.

Paired review:

- Attack: `attacks/A029-program-fragmentation-and-lost-complementarities.md`
- Defense: `defenses/D029-program-fragmentation-and-lost-complementarities.md`

## Resolution decision

A029 is partially founded. Decomposing public action into independently proposed, funded, and closed projects can strand complementarities: cross-project linkages where one component is worthless without another, multi-year coherence, and procurement economies of scale. Composite Programs already aggregate interdependent projects, but each component still lives or dies by its own funding attempt, so partial funding can produce stranded half-systems. This resolution strengthens dependency coordination without abandoning per-project accountability.

Under `knowledge/principles/P007-integrate-or-bound-rule.md`, this resolution integrates through the existing Composite Program object (H051) rather than adding a new primary entity. Fragmentation threatens the coordinated-delivery claim, so it cannot be ignored, but the coordination structure already exists — program aggregation, Planning Scope alignment, parallel closure, and funding-window expiry — and the fix is to make cross-project dependencies declarable and program-level coherence visible. Bundled all-or-nothing funding remains bounded to Extension v1+.

## Rule added to Core v0

A project may declare hard dependencies on other projects inside a Composite Program, and program-level funding coherence is visible before citizens fund. Components keep independent funding attempts; Core v0 does not make funding all-or-nothing across a program.

Minimum composite-program coordination:

- cross-project dependency declarations inside composite programs, so a component can state that it requires another component (X requires Y), visible before funding;
- program-level funding-coherence visibility showing which components are funded and unfunded, with stranded-complement warnings when a prerequisite funds and its dependents do not;
- dependency-aware funding windows, so a dependent component's window can reference its prerequisite's state rather than expiring blindly against it;
- acknowledgement that procurement-scale losses are a real cost of modularity, carried openly rather than hidden.

## Macul example

A Macul sports program needs four linked projects: the multi-court build, night lighting, an access ramp with drainage, and a two-year maintenance plan. The courts and lighting fund quickly while the unglamorous drainage expires and the maintenance plan finds no committed executor. Under this resolution the drainage dependency is declared and shown before citizens fund the courts, the program surface warns that a funded build is stranding without its complement, and the funded money stays reserved behind closure rather than paying for a half-system — even though Core v0 still does not make the courts' funding conditional on the drainage.

## Citizen simplicity

Citizens should see, before funding a component, what it depends on and whether those prerequisites are funded, so a project that only works as part of a bundle does not look self-sufficient on its card.

## Transparency and accountability effect

A coordinated failure becomes visible as such: stranded-complement warnings and program-level coherence replace a row of per-project successes that hide a system that was never assembled, while per-project responsibility stays legible.

## Scope boundary and limitation

Components keep independent funding attempts — Core v0 has no all-or-nothing program funding, and conditional or escrowed bundle funding with automatic return remains Extension v1+. Shared procurement and shared control packages across linked projects also remain Extension v1+.

Limitation statement: complementarities can still strand at the program level when prerequisites fund and dependents do not, and modularity's benefits — smaller blast radius, comparability, exit options — are bought at scale-economy costs the corpus does not hide.

## Residual risks

- Even with declared dependencies, an independent funding attempt can leave a critical complement unfunded and the system delivered in part.
- Procurement scale economies remain partly lost relative to a single large contract, traded for accountability and exit options.
- Promoters can still propose the salient component and under-declare the unglamorous complements it needs.

## Integration target

This resolution should inform Composite Programs (H051), project and phase funding attempts, Planning Scope alignment (H009), procurement and control packaging, and administrative observability.
