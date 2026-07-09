# E4/E5 Unified Pipeline — Pre-registration (three-stage O-ring, at scale)

## Status and honesty frame
Pre-registered design + committed predictions, written BEFORE running (honesty
device per corpus discipline). Motivation (author): the current 2.2× is a
**two-layer** compound (allocation × delivery) measured in the OLD E5 agent-based
model; it never included the **macro-planning** layer, and it lives in a different
apparatus than the rebuilt E4 (the matrix world model). This unifies both onto
E4's world model and adds delivery, then adds macro planning as a third stage.

**Framing decision (author-approved):** the deliverable is a **frontier with
confidence intervals (95% / 99%)**, with the realistic-regime *ceiling* highlighted
and a firm *floor* preserved — NOT a bigger bare multiplier. A larger headline
stacks more conditionality (harm-blindness assumed at two planning stages), so its
defense is the CI + the explicit regime, not the magnitude. The two-layer ~2.2×
and the delivery-only ~1.4× floor remain robust sub-cases.

## The pipeline (Farrell 1957 / Kremer 1993 O-ring)
Delivered social value composes multiplicatively across three lossy stages:

> **Delivered value = (macro-planning quality) × (allocation quality) × (delivery fraction)**

Each stage has a distributed-vs-central efficiency ratio. In the realistic regime
(a central that is harm-blind, η low, at both planning stages) all three favour the
distributed arm, so the compound exceeds the two-layer product. As η → 1 (a fully
accountable planner) each planning stage collapses toward parity and the compound
falls toward the delivery floor.

## World model (E4 matrix, at scale)
- **N citizens** (swept 10k → 100k → 1M), **K = 1000 projects**, grouped into
  **A areas** (K/A projects each). Streaming, O(K) memory (no N×K matrix stored).
- Each project j: interested count n_j = frac_j·N (frac_j ~ U(0.1,0.7)); each
  interested citizen's valuation V ~ Normal(mean, sd), can be negative (harm).
  True project value T_j = S⁺_j − S⁻_j. True area value = Σ T_j over the area.
- Costs C_j ~ U(1, 10); total budget P = (1/3)·ΣC.

## The three stages
1. **Macro planning — budget across areas.** Central perceives area value through a
   noisy, harm-blind proxy (η attenuates perceived harm), and splits P across areas
   ∝ perceived positive area value. Distributed perceives area value through a
   β-biased participation sample of TRUE value. Oracle splits by true area value.
2. **Allocation — projects within each area's budget** (this is E4). Central: greedy
   by η-blind perceived value/cost. Distributed: greedy by β-sampled true value/cost.
   Oracle: by true value/cost.
3. **Delivery — fraction of funded value that arrives.** Weak/central regime leaks
   (parameterized inside the documented band: 87% captured, Reinikka-Svensson 2004;
   24% missing, Olken 2007 → f_weak ≈ 0.60). Verified/distributed regime (milestone
   gating + retention + reputation; Propositions 1–4) deters diversion → f_ver ≈ 0.86.
   The f_ver/f_weak ≈ 1.43 is calibrated to the E5 delivery effect (+43%).

## Metrics
- **Two-layer (Part 1):** allocation × delivery only (single-area). Compound =
  distributed delivered / central delivered.
- **Three-layer (Part 2):** full pipeline. Compound = distributed / central.
- Oracle-normalized fractions reported alongside. Regime axes: η (central
  harm-perception 0–1), β (voice bias 0–1). Scale axis: N.
- **Confidence:** many seeds (≥ 40), parallelized across cores; report mean and
  **95% and 99%** CIs (percentile bootstrap over seeds). Compound reported as the
  ratio-of-means with log-scale CI, corroborated by the product-of-margins.

## Pre-registered predictions (committed before first run)
1. **Two-layer reproduces the compound.** Allocation × delivery in the realistic
   regime (η ≈ 0–0.25, β ≈ 0.3) yields ≈ 2× (order of the old E5's 2.2×), with the
   multiplicative structure holding (ratio-of-cells ≈ product-of-margins).
2. **Three-layer is higher in the realistic regime (author's hypothesis).** Adding
   the harm-blind macro stage multiplies further, so the realistic-regime three-layer
   compound **exceeds the two-layer** — predicted with the author's stated >95%
   subjective confidence. If it does NOT, we report that.
3. **It is a frontier, not a constant.** The compound falls toward the two-layer
   result, and then toward the delivery-only floor (~1.4×), as η → 1 (accountable
   planner) and as β → 1 − η (voice bias erodes the distributed edge); parity of the
   planning stages on the anti-diagonal.
4. **Scale-robust.** The compound's central tendency is stable from N = 10k to 1M
   (the β* = 1 − η structure is scale-invariant); only the CIs tighten with N.
5. **Honest boundary.** The three-layer ceiling stacks conditionality (η at two
   stages); the defensible object is the CI-bounded frontier and the floor, not the
   bare ceiling. The delivery factor is the one firm, scale-robust floor.

If a held-out run contradicts a prediction, the contradiction is recorded as the
finding. Scripts: `e4e5-pipeline.mjs` (worker-parallel engine). Supersedes the old
E5 apparatus for Finding 5 if the unified build is cleaner.
