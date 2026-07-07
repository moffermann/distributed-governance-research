# Operating Regime Ladder and Semi-Open Mode v0

## Status

Accepted design formalization from author direction (recorded 2026-07-06 in
[[distributed-roadmap-construction-governance|knowledge/open-questions/distributed-roadmap-construction-governance.md]]).
This document does not resolve an attack; it formalizes the operating-regime
ladder the corpus had left underdetermined — in particular the **semi-open
regime**, previously named but never fixed, and the **tutored regime with a
distributed agenda**, previously possible in spirit but untreated. It extends,
and does not modify, the tutored-mode governance machinery of
[[58_TUTORED_MODE_GOVERNANCE_RESOLUTIONS_AND_C020_RESOLUTION|docs/58_TUTORED_MODE_GOVERNANCE_RESOLUTIONS_AND_C020_RESOLUTION.md]].

## The defining variable

The regime ladder is not defined by who decides, but by **where the
implementing authority's discretion lives**, across three separable layers of
power:

```text
information  — who constructs the agenda (the planning vector the passive share follows)
decisions    — who governs project entry and lifecycle
rules        — who changes the protocol itself
```

Centralized planning is not part of Core v0's architecture. It appears in the
research program only as the status-quo comparator baseline and as a
transition scaffold inside tutored deployments.

## The four regimes

### 1. Tutored regime — mandated agenda

The authority constructs the Planning Scope's agenda and retains per-project
decision power, exercised visibly: admissibility, duplication, and eligibility
review through reasoned public Governance Resolutions with declared review
windows and configured silence consequences (docs/58). The transition scaffold:
the incumbent's own default vector running inside Core v0's downstream
controls.

### 2. Tutored regime — distributed agenda

The agenda is constructed distributed — attentive citizen planning signals and
delegated planning signals build the vector — while the authority retains the
same per-project decision power as in regime 1. In the author's parallel-agenda
conception, the authority's review narrows to admissibility of **conflicts
between its own agenda and the distributed one**. The information layer is
distributed; decisions and rules remain with the authority under country law.

### 3. Semi-open regime

The authority mandates a **bounded envelope** — a share of the budget over
named category subtrees of the planning ontology — inside which projects are
approved **automatically under protocol**. Structurally identical to the
tutored regime with one difference: nobody sits behind the approval window.
The authority decided once, when configuring; it does not decide each time.

Authority discretion lives only in ex-ante, structural acts:

```text
1. the size of the mandated envelope;
2. the protocol configuration before operation (eligibility criteria,
   validation requirements, evidence contracts, fiscalization requirements);
3. prospective rule changes, under the visibility, versioning, and
   non-retroactivity discipline of docs/57;
4. renewal or reduction of the mandate at period boundaries — a visible
   fiscal act (docs/88, docs/106).
```

### 4. Open regime

The agenda is fully distributed, there is **no parallel authority agenda**,
and the relevant budget is assigned 100% through the architecture. Protocol
governance itself is community-held — which is exactly why this regime remains
gated on the unresolved open-mode constitutional mechanics (docs/91, H058).

## Anti-covert-tutelage rules (semi-open boundary)

Enumerated objection grounds ("the authority may object for cause X") are
rejected as the semi-open boundary: classifying reasons is discretion in
disguise, and an authority stretching "illegality" or "duplication"
reconstructs the merit veto — a covert tutored regime. The boundary is drawn
with three rules instead:

1. **Legality is protocolized as objective preconditions.** Required permits
   are documents attached and verified at validation — an evidence check, not
   a judgment call. A document exists or it does not; a "cause" gets argued.
2. **What cannot be protocolized does not enter the envelope.** Categories
   requiring genuine case-by-case judgment stay tutored or outside the
   envelope. Discretion is demarcated, never infiltrated — and the envelope
   grows as more categories become protocolizable.
3. **Remedies are external and symmetric.** A genuinely unlawful project that
   passed protocol is challenged where any administrative act is challenged:
   ordinary courts and comptrollers. Inside the platform the authority may
   file formal complaints like any actor — triggering review, never vetoing —
   and is never judge and party
   ([[43_PUBLIC_INSTITUTION_EXCLUSION_AND_C007_RESOLUTION|docs/43_PUBLIC_INSTITUTION_EXCLUSION_AND_C007_RESOLUTION.md]]).

## The parallel mutates by layer

```text
tutored    — informational parallel: two agendas; the tutor arbitrates conflicts
semi-open  — fiscal parallel: two budgets; the traditional one and the
             mandated envelope on protocol autopilot
open       — no parallel: 100% of the relevant budget, no authority agenda
```

## Collisions are prevented by ontology, not arbitrated

Parallel agendas are possible when they have a clear ontological frontier: the
semi-open envelope is defined as **named category subtrees** of the planning
ontology, and the authority operates outside them. The domains are disjoint by
construction, so no authority-versus-distributed project collision can arise.

One residual must stay objective: **classification of a project into the
ontology at the frontier** must itself be protocol-checkable and contestable
through the ordinary complaint path — otherwise frontier classification
becomes the new home of discretion.

## Macul example

The municipality mandates: five percent of the investment budget runs
semi-open over `Sports → Tennis` and `Sports → Football`; `Sports →
Gymnastics` remains closed. A small firm proposes resurfacing the
neighborhood tennis court. The protocol verifies automatically — eligible
category, standard permit attached, evidence contract complete, fiscalizer
assignable — and the project is approved. Nobody at the municipality reviewed
it, and there is no administrative act to stretch. If the mayor dislikes the
project, the lawful options are: change the rules forward (visible, versioned,
never retroactive), shrink the envelope at the next renewal (a visible fiscal
decision), or file a formal complaint like any neighbor. Rejecting this
project is not among them.

## Canonical vocabulary

For use across the corpus, the manuscript, and the experiment repositories,
so that experiment variant names anchor to these concepts without
reinterpretation:

```text
tutored regime, mandated agenda      (transition scaffold when the vector is the incumbent's)
tutored regime, distributed agenda
semi-open regime
open regime
```

## Legal gates carried forward

Automatic approval that binds public spending is a binding-mode feature: it
inherits the enabling-norm gate of
[[106_ENABLING_NORM_RECORD_AND_A037_RESOLUTION|docs/106_ENABLING_NORM_RECORD_AND_A037_RESOLUTION.md]]
(consultative deployments do not need it; binding ones do). A semi-open
envelope additionally requires a **positive published deterrence-inequality
margin** in its operating configuration
([[111_DETERRENCE_STACK_INTEGRITY_AND_A041_RESOLUTION|docs/111_DETERRENCE_STACK_INTEGRITY_AND_A041_RESOLUTION.md]]):
where approval is automatic, the configuration itself must prove the incentive
floor holds. The open regime
additionally remains gated on the open-mode constitutional mechanics (docs/91,
H058). The allocation act's legal characterization per jurisdiction
([[102_ALLOCATION_ACT_CHARACTERIZATION_AND_A034_RESOLUTION|docs/102_ALLOCATION_ACT_CHARACTERIZATION_AND_A034_RESOLUTION.md]])
applies unchanged in every regime.

## Scope boundary and residual risks

- This document formalizes the ladder's definitions and boundary rules; the
  full mechanism design of the two previously untreated configurations
  (tutored-distributed conflict admissibility; semi-open envelope objects and
  their lifecycle) is the dedicated agenda-setting study the manuscript names
  as the program's next object.
- Residual risks, declared: frontier-classification gaming (mitigated by
  protocol-checkable classification and the complaint path, not eliminated);
  envelope starvation as covert defection (the authority renews ever-smaller
  envelopes — visible by construction, but only country law can bind it,
  docs/88); and ontology design itself as an agenda-setting act (choosing
  which subtrees exist is upstream power — inside the docs/87 open problem,
  not solved here).
