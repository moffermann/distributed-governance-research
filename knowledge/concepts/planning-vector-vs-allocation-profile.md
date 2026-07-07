# Terminology: Planning Vector vs Allocation Profile — and what governs delivery

Canonical terminology note (2026-07-07). Author-fixed after a repeated conflation: the word *vector* had been glued to two different objects, and *default* had been used for the governing driver in a way that read as something fixed and centrally set. This note is the reference every paper, doc, and engine label must conform to. Both language editions and both repositories (master corpus and the companion experiments) follow it.

## The three concepts, kept distinct

### 1. Planning vector (*vector de planificación*) `[central | distributed]`

A **static** vector of priorities over broad public **themes / needs / territories / functions** — the roadmap ("improve public-health quality", "rural coverage"). It is genuinely vector-like (fixed weights over categories at a given time).

Its **construction** moves along the operating-regime ladder ([[../../docs/110_OPERATING_REGIME_LADDER_AND_SEMI_OPEN_MODE|docs/110]]): **central** in the tutored-mandated transition scaffold; **distributed** in the tutored-distributed regime; and **fully distributed** in the semi-open and open regimes. Being a vector is intrinsic; being centrally built is *not* — it is a regime property. Therefore always qualify it: *planning vector (central)* or *planning vector (distributed)*.

**This is not what governs delivery.** It frames priorities over themes; it does not decide which concrete projects get funded.

### 2. Allocation profile (*perfil de asignación*) — per citizen

Each citizen's set of **weighted rules** for routing their own budget share to concrete **eligible projects** — "projects near me", "projects pending funding", "rural schools", "elderly health" — with a weight per rule. Personal, configurable, **private**, revocable. Canonical corpus anchor: [[../../docs/28_CITIZEN_AUTOMATIC_ALLOCATION_PROFILE_FLOW|docs/28]].

It is **dynamic**: the same profile yields a different concrete allocation as the live project set changes (projects appear, get funded, close). Its per-rule weights *can* be written as a numeric weight vector, but the profile is **never called "the vector"** — that glue is exactly the confusion this note removes.

On the word **"default"**: it is admissible **only** in one precise sense — *a citizen's default allocation profile*, the sensible profile applied when the citizen configures nothing. Even then it is a **personal, rule-based profile**, not a fixed central rule and not a static vector, and any use must say so. "Default" must **never** be used as the name of the thing that governs delivery (see #3), because it reads as fixed and authority-set, which it is not.

### 3. What governs delivery — the **aggregation of the inattentive layer's allocation profiles**

At any moment most citizens are inattentive. Their budget share is **not lost and not centrally captured**: it flows through each one's allocation profile (configured, or their default profile). The driver of delivery performance is the **aggregation of all those allocation profiles across the inattentive-citizen layer** — a distributed, emergent prioritization over concrete projects.

It is **neither a single profile nor a central default rule nor the macro planning vector**. It is what the simulations represent, at an instant, as a per-project weight (a snapshot proxy of this aggregate).

## Engine verification (what the model's governing weight actually is)

Checked in the companion engine (2026-07-07): the adversarial engine's default/passive allocation ranks projects by a **per-project** weight — `planningScore(p) = p.centralPlanningWeight` or `p.distributedPlanningWeight`, selected by `planningSource: central|distributed` (`adversarial-abm/src/index.mjs:339-347`), applied in `allocateDefault` (`:457-467`).

So the engine's governing weight is a **per-project prioritization** (the priority ordering the inattentive share follows) — concept #3's aggregate, at project granularity — **not** the macro category-level planning vector (#1). The "central vs distributed" knob is *how that aggregate prioritization is constructed*. Consequently the finding **"distributed construction out-informs central construction"** is about constructing the **distributed project prioritization** (the aggregated allocation profiles), **not** about the macro planning vector. The engine's current `planning*` labels are the misnomer this note corrects.

## Usage rules (binding)

- **"Planning vector" / bare "vector"** → reserved for #1 (the macro theme vector) and for the model's numerical snapshot. Always qualify #1 as `central` or `distributed` by regime.
- **"Allocation profile" / "perfil de asignación"** → #2, the per-citizen weighted rule set. For its numbers say "the profile's rule weights", never "the vector".
- **"Default"** → only as "a citizen's default allocation profile", always explained as personal and rule-based. Never as the driver of delivery, never as a fixed central rule over the whole passive share.
- **What governs delivery** → "the aggregation of the inattentive layer's allocation profiles" (a distributed project prioritization). Never "the planning vector", never "the default rule".

## Consequence for the manuscripts (to apply against this note)

- Finding 2 / master §5: "the informational quality of the **planning vector** dominates" → "the informational quality of the **distributed project prioritization** — the aggregated allocation profiles the inattentive share follows — dominates" (the engine measures it on a per-project snapshot).
- Master §8: must **not** reattribute that dominance to macro agenda-setting / scope construction (#1); the scope bounds eligibility only.
- Rename `planning-vector-construction`, `planningSource`, `planning_mode`, `core_v0_planning_vector` toward prioritization / allocation-profile terms; keep "planning vector" only where the referent is genuinely the macro #1.
