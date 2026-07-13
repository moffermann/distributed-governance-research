# E9 design sketch — the full-stack comparison (planning × selection × delivery)

**Status:** design sketch, written 2026-07-12 while the E5 friendly round runs. **Not** to be built until E5 is
locked (E9 reuses E5's final delivery model). Delivery-layer specifics inherit from `e5-delivery.mjs` after the
friendly-round anchoring.

## Why E9 exists

E4 measures **selection** only; E5 adds **delivery**. Neither models the **planning layer** (constructing the
eligibility frame / macro categorization) as a *value* contrast — and the old ≈1.05× macro factor was a
mis-comparison (planning options within a shared frame, not fully-modeled central planning vs open distributed
planning). E9 runs the honest full-stack contrast:

> **central planning + central selection + central delivery**  vs  **Core v0: distributed planning + distributed
> allocation + distributed delivery.**

This is the comparison whose absence the inventory flagged (`docs/EXPERIMENT-INVENTORY.md`). It is where the planning
layer finally gets measured correctly.

## The planning layer — what makes it a genuine value contrast (not ≈1×)

The corpus finding the author insists on: a **fully-modeled central planner** is harm-blind and politically biased, so
its planning (the choice of *which categories/sectors are even eligible*, and their budget shares) can **destroy value
across entire categories** — e.g. starving a high-need but low-visibility sector, or over-funding a credit-rich one.
The distributed planner constructs the frame from aggregated citizen category-signals (open, versioned, contestable).
The contrast is therefore NOT "distributed planning as insurance within a fixed frame" but "central category-level
value destruction vs distributed category-level coverage."

Modeling handle (reuse the E4 engine primitives): the E4 world already has a category signal `g` correlated with true
quality (`zeta`), an observable category proxy `qCat`, and central projection/harm-myopia. E9 adds a **planning stage
BEFORE selection** that sets, per category, (a) eligibility (which categories are on the menu) and (b) the budget share
per category. Two planners:
- **Central planning:** allocates category budget shares by the central's *perceived* category value (projection +
  harm-myopia at the CATEGORY level) and credit — so it can zero-out or starve harm-heavy / low-visibility categories.
- **Distributed planning:** allocates category shares by the aggregated coverage category-signal (the same coverage
  composition as E4/E5), open and contestable.

Then selection runs WITHIN each category's share (E4 machinery), and delivery runs on the funded set (E5 machinery).
Value = Σ delivered true `S` across the whole stack, normalized by the full-information oracle (perfect planning +
perfect selection + perfect delivery). Parity at the oracle; percentages only; no compound multiplier.

## Design (a 2×2×2, but the headline is the two corners)

Three binary layers → 8 cells; the **headline is the diagonal**: all-central (status quo) vs all-distributed (Core v0
full). The 6 mixed cells decompose the three main effects + interactions (same additive-vs-multiplicative reading as
E5). Report each layer's effect as a percentage of the oracle; report whether planning composes multiplicatively with
selection×delivery.

| layer | central | distributed |
|---|---|---|
| planning | category shares by perceived value + credit (can starve categories) | category shares by aggregated coverage signal |
| selection | `M_C` + credit tilt (E4) | `M_D` coverage (E4) |
| delivery | opaque (E5) | verified + monitoring coupling (E5) |

**Reduces-to check:** with planning perfect (both planners = oracle category shares), E9 reduces to E5; with delivery
perfect too, E9 reduces to E4. These are the invariants the test asserts.

## What to anchor (planning layer)

- Central category-level misallocation: the harm-myopia + projection already anchored in E4 (Hayek/Scott/Olson/
  Bandiera; Broockman–Skovron), lifted to the category level; plus evidence on sectoral misallocation of public
  investment (IMF/World Bank sectoral efficiency dispersion). To be gathered in E9's own friendly round.
- The distributed category-signal fidelity reuses E4's coverage composition (already anchored).

## Open modeling questions (decide with the friendly round, after E5)

1. Does central planning **exclude** categories (hard zero) or just **under-weight** them? Hard exclusion is the second
   face of power (Bachrach–Baratz) and gives the sharpest contrast; under-weighting is milder. Likely report both.
2. Is the planning layer's composition with selection multiplicative too? (Expect yes, plus a monitoring-style coupling
   if distributed planning also improves selection legibility.)
3. Guardrail: E9 must NOT be gerrymandered to a null nor to a positive — the planner handicaps are directional
   (anchored), magnitudes swept, exactly as E4.

## Sequencing

Build only after E5 is publication-ready. Then: contract/params → engine stage → tests (reduces-to-E5/E4) → friendly
Codex round (correct + anchor) → results → paper. Then E10 adds costs on top of E9.
