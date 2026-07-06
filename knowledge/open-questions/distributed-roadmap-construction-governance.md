# Distributed Roadmap Construction Governance

## Question

How could a distributed governance system construct, revise, and legitimize a national, regional, communal, or thematic roadmap without recreating a centralized planning monopoly or collapsing into unstructured popularity voting?

## Origin

This question was raised during the H009 consolidation.

Core v0 now requires `Planning Scope Alignment`: projects must attach to an active public-function, pilot, operating-mode, roadmap, or authorized planning line before receiving execution financing.

However, Core v0 does not yet define how the planning scope or national roadmap itself is built. ^r188eeca1

The user proposed a possible future direction:

```text
A national roadmap divided by areas that can be voted on.
```

This idea should be preserved for later design rather than silently dropped or prematurely absorbed into Core v0.

## Possible future architecture

One possible model:

```text
Planning Area
-> Roadmap Goal Proposal
-> deliberation
-> support / voting / delegated participation
-> review and conflict analysis
-> approved planning line
-> financeable project scope
```

Planning areas could be:

- public-function areas: sports, culture, education, health, care, infrastructure;
- territorial areas: national, regional, communal, neighborhood;
- value areas: childhood, older adults, health, environment, culture;
- problem areas: school desertion, chronic disease, water scarcity, public-space deficit;
- hybrid areas combining function, territory, and value.

## Relationship with tutored mode

This future model must account for tutored mode.

In tutored mode, a central authority or authorized implementation administrator may define the planning scope opened to distributed financing.

Example:

```text
Public function:
Sports.

Tutored authority-defined scope:
Local sports infrastructure, child sports programs, club equipment renewal.
```

The future distributed roadmap-construction model must decide whether citizen-created planning areas can:

- only propose future scopes;
- trigger authority review;
- become advisory signals;
- become binding after thresholds;
- coexist with authority-defined tutored scopes;
- override authority-defined scope only in non-tutored modes.

## Design questions

- Who may create a planning area?
- Who may propose a roadmap goal?
- Who may vote or support a planning area?
- Is voting national, territorial, thematic, beneficiary-based, delegated, or hybrid?
- How are territorial conflicts handled?
- How are conflicts between planning areas exposed?
- Can a planning area bind budget, or only project eligibility?
- Can a roadmap goal expire or become inactive?
- How are low-visibility but essential services protected from popularity bias?
- How are expert constraints, legal mandates, and public-function boundaries represented?
- How does the system prevent capture by organized interests?
- How does the system avoid constant roadmap churn?
- What minimum evidence or diagnosis is required before a planning goal becomes financeable?
- How does this interact with H010 Primary Responsibility Anchor and H009 Planning Scope Alignment?
- How does this interact with C020 tutored governance and H058 operating modes?

## Scope classification

Current classification:

```text
Extension v1+ / Country implementation / open question.
```

It is not Core v0 because the first coherent project-based model can operate with authority-defined, protocol-defined, or pilot-defined planning scopes.

It becomes necessary later if the theory wants to explain how planning itself can become distributed rather than merely project execution and resource allocation.

## Working principle

> Core v0 should not pretend that roadmap construction is solved. It should keep projects aligned to visible active scopes while preserving the future possibility of distributed, votable planning areas. ^r35e31a17

## Status note

A020 / [[87_PLANNING_SCOPE_AGENDA_LIMITATION_AND_A020_RESOLUTION|docs/87_PLANNING_SCOPE_AGENDA_LIMITATION_AND_A020_RESOLUTION.md]] formalized this question as the architecture's principal open limitation rather than solving it: whoever constructs Planning Scopes exercises the second face of power, and Core v0 makes that exercise observable — Allocation Mandate records, versioned scope definitions, scope changes as Governance Resolutions with timeouts, and out-of-scope demand visible as Ideas with per-category volume — but not distributed. The simulation quantified the weight of the gap by finding that the informational quality of the scope's weight vector dominates allocation quality, so what constructs the scopes matters more than how citizens allocate within them. The pre-registered E4 experiment then measured the distributed side of the question: a weight vector built from aggregated dispersed citizen signals beats fixed-bandwidth central construction at every tested scale, provided an aggregation institution exists and signals are honest and unbiased — so this question is no longer whether distributed construction can work in principle, but which elicitation mechanism keeps dispersed signals honest, unbiased, and representative under gaming, clientelism, and expressive-allocation pressure. The question remains open and gates open-mode deployment at scale. E7b then quantified the elicitation risk this question turns on: under coordinated signal capture, open construction degrades near-linearly and crosses below a competent full-coverage municipal planner only around a thirty percent coordinated share.

## Author design direction (recorded 2026-07-04)

The author's original conception for this layer, recorded here so the future agenda-setting work starts from it rather than rediscovering it: the implementing authority keeps its own centralized agenda, and the system constructs a **parallel, distributed agenda** alongside it; in tutored mode the authority's control over the distributed agenda narrows to a single function — **admissibility review of conflicts between the two agendas** — rather than general approval power over scope construction. The corpus's current tutored mode is broader than this (docs/58 gives the authority admissibility, duplication, and eligibility review with approve/reject/reclassify powers, all as reasoned public resolutions), and the author has accepted the current design as it stands; the parallel-agenda conception is preserved as the leading candidate architecture for the dedicated agenda-setting study and pilot that the manuscript (v1.7, Section 8) names as the research program's next object.

## Author design direction, sharpened (recorded 2026-07-06)

The author clarified a framing confusion that had been carried through the corpus and experiments:

1. **Centralized planning is not part of Core v0's formal architecture proposal.** It is a vestige of the status quo, and it legitimately appears in the research program in exactly two roles: (a) the **status-quo comparator baseline** in experiments (the S/S′ arms and the representative planning family), and (b) a **transition scaffold** in tutored deployments that inherit the incumbent authority's default vector. Neither role makes it part of the architecture; documents and experiment variants must not attach "Core v0" to central planning as if it were.
2. **The architecture's spirit in semi-open and open regimes is a 100% distributed agenda.** Tutored deployments with **distributed** planning also exist in the design's spirit and are not yet formally addressed in the corpus — the parallel-agenda conception above is the leading candidate for that formalization.
3. **Agenda capture requires a choke point.** Rewriting a published vector presupposes a single publisher who can be corrupted or coerced — a property of the tutored-with-mandated-agenda regime only. In a distributed construction there is no such surface; the corresponding attack is **coordinated signal corruption**, which is measured (E7b in the paper engine; `coordinatedSignalBias` in the adversarial engine) and found robust: near-linear degradation, no collapse, crossover only near a thirty percent coordinated share. The experiments' `agendaCapture` results (satellite repository, ablation program) therefore quantify the **price of keeping the tutored choke point** — up to −13% verified value and −35% selection quality under capture — and read as quantified evidence *for* migrating agenda construction to the distributed form, not as a vulnerability of the architecture's spirit.
