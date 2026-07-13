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

---

## AS-BUILT (2026-07-13, commit 0cf22f9) — `scripts/simulation/e4-v5/e9-fullstack.mjs`

**Built ON E5** (author correction): E9 = planning + E5. It reuses E5's delivery machinery (`deliveredCell`, now
exported) and the E4 selection engine; it adds a planning stage.

- **Categories = visibility strata.** Projects are binned by `P` (visibility) into `nCat` categories, so categories
  differ systematically in the dimension the central planner mis-sees. Planning sets per-category budget shares from a
  planner's *perceived* category value: central = Σ`M_C` (harm-myopic + projecting + credit) → **starves** harm-heavy /
  low-visibility categories; distributed = Σ`M_D` (coverage); shares are proportional (base) or **hard-exclusion**
  (fund only the top `keepFrac` — the second face of power).
- **Oracle = the GLOBAL greedy benchmark** (perfect knowledge ignores category boundaries). Every category-constrained
  cell ≤ oracle; **`nCat=1` reduces to E5 exactly** (tested to 1e-9).
- **Selection + delivery** run within each category via `fundedSet` then `deliveredCell` — identical to E5.

**Results (PROBABLE, 1000 worlds, 8 categories, proportional shares):** status quo (all-central) +30.1% of oracle;
Core v0 full (all-distributed) +79.6%; **full-stack gain +49.5% [95% CI +48.8, +50.1]**. Layer main effects:
**planning +3.2%**, selection +50.6%, delivery +6.7%. Hard-exclusion widens planning to **+7.1%**.

**The planning layer is a genuine, positive value contrast** — not the retired ≈1.05× macro factor's near-parity. It
is modest in magnitude here (visibility-stratified categories, soft shares); hard exclusion sharpens it. Honest: the
effect size depends on how strongly categories are stratified on the dimension the central mis-sees — to be pressure-
tested + anchored in E9's friendly Codex round (do not gerrymander it up).

**Tests (11/11):** nCat=1 reduces to E5 (status-quo cell == E5 S, Core-v0 cell == E5 A2, planning effect ~0); planning
effect positive; hard exclusion widens it; Core v0 > status quo; no cell exceeds the oracle; all three layer effects
positive; selection dominant; fail-closed delivery validation reused.

**Open for the friendly round:** is the visibility-stratified category construction the right/most-defensible one, or
should categories be typed by harm/need directly? Anchor the planning-layer magnitude (sectoral misallocation of public
investment). Confirm the global-oracle normalization and the main-effect decomposition are sound.

## Planning-layer calibration (friendly round — calibration agent, 2026-07-13, all web-verified)

**Direction is strongly anchored; the magnitude is DECLARED-but-conservative.** No published source cleanly isolates
"value lost from allocating the budget across the wrong sectors," so the planning effect is a declared modeling
parameter *consistent with, and conservative relative to,* the published efficiency-loss envelope — not a transported
point estimate.

| quantity | anchored band / direction | best citation | status |
|---|---|---|---|
| total public-investment inefficiency | ~30% of returns lost (13% adv / 27% EM / 40% LIC); strong PIM closes ~2/3 | IMF, *Making Public Investment More Efficient* 2015 | ANCHORED (total loss, broader than cross-sector) |
| **pure cross-sector allocative loss** | no canonical scalar exists | World Bank PERs (diagnostic, no scalar) | **DECLARED** (the quantity E9 most needs) |
| political budget cycle → visible spending | pre-election composition shift to visible capital (~0.5–1% of GDP/category) | Drazen & Eslava 2010, *JDE* 92(1) | ANCHORED (direction; composition shift, not value-loss %) |
| pork-barrel / particularistic targeting | allocations follow electoral usefulness, not marginal value (150+ studies) | Golden & Min 2013, *ARPS* 16 | ANCHORED (direction/pervasiveness, qualitative) |
| maintenance / diffuse-cost underinvestment | new-build bias; optimal maintenance ~2% of GDP; deferred maintenance multiplies later cost | Rioja 2003, *JPE* 87(9–10) + World Bank AICD maintenance briefs | ANCHORED for the SIGN (undervisible = underfunded). NB: the "~2/3 new vs 1/3 maintenance" split is NOT in Rioja 2003 — do not attribute it (calibration agent flag) |

Supporting (direction only): Rogoff & Sibert 1988; Rogoff 1990 *AER*; Khemani 2004 *JDE*.

**Agent's read:** the +3–7% planning contrast sits **comfortably inside** the envelope (well below IMF's ~30% total and
Rioja's ~15% single-margin), so it does **not** overclaim — if anything it is conservative. Honest framing to apply:
call it "consistent with and conservative relative to" the IMF/Rioja evidence, NOT "anchored" to a cross-sector estimate
(none exists at that granularity). Flag the pure cross-sector allocative-loss magnitude explicitly DECLARED to reviewers.

## Planning REDESIGN v2 (Codex round-1 + author decision, commit 301d7cc)

Codex round-1: skeleton sound; planning layer NOT publication-ready (the standalone +3.2/+7.1 were one-at-a-time
conditional effects; planning under distributed selection runs the other way). Author decision: **predeclare + sweep**
the need↔visibility association. Redesigned:

- **Persistent sectors with intrinsic visibility** (not visibility bins of project P — homogeneous under random
  membership). **Category-level political credit**: central over-funds visible sectors (`creditCoef`) and is blind to
  the low-visibility sector value tilt; distributed coverage sees a fraction (`covSees`). `assoc` = the predeclared
  need↔visibility lever, swept −1..+1.
- **8-cell factorial + Shapley attribution** that sums exactly to the diagonal gain; plus the conditional simple
  effects that expose the sign flip.
- `validatePlanning` fail-closed; hard exclusion by integer `nKeep` (central/symmetric); oracle relabelled a REFERENCE.
- `nSec=1` reduces to E5 exactly (1e-9). 15/15 tests.

**Honest result (PROBABLE):** full-stack gain ~+49% [+48.3,+49.6]. Shapley attribution (assoc=−0.6): planning +2.1% /
selection +38.3% / delivery +10.8%. Under the **realistic** association (assoc<0, Rioja maintenance bias) planning
Shapley rises to **+1.9% → +6.2%**; at assoc≥0 it is ~0 — the planning layer's value is **real but modest and
context-dependent**, honestly emerging from the predeclared assumption, not gerrymandered. Magnitude DECLARED,
conservative vs the IMF/Rioja envelope. → sent to Codex round-2 for verification.

## Codex round-2 verdict + bounded pass (commit 0749b2d) — architecture sound

Round-2: the factorial/Shapley **architecture is correct and publication-worthy**; verdict NOT-YET pending a bounded
pass, now applied:

- **Genuine fixed-dispersion association** (`need = assoc·z(vis) + √(1−assoc²)·shock`) — the old `assoc` also scaled
  dispersion and `assoc=0` erased it. This exposed that the planning magnitude is driven by the DECLARED
  `secValSpread` (~0 at 0.1, **+3.8% Shapley at 0.3**, +17% at 0.6) — set a moderate declared reference (0.3) and
  report the full **dispersion × association** grid.
- **Residual recycling** mode removes the utilization confound (strict left Core v0 at 90% utilization vs status quo
  96%): planning|distributed-sel goes **−1.2% → +2.1%** with recycling.
- bootstrap **CIs on the gain + all three Shapley values + both planning simple effects**; complete fail-closed
  `validatePlanning`; oracle relabelled a **greedy REFERENCE** (not an upper bound; false invariant dropped).

**Honest final result (PROBABLE, secValSpread=0.3, assoc=−0.6):** full-stack gain **+52.5% [+51.8,+53.1]**.
Shapley: **planning +3.8% [+3.3,+4.2] · selection +37.9% [+37.4,+38.5] · delivery +10.8% [+10.5,+11.1]** (with
recycling, planning +4.8%). **Conclusion: SELECTION and DELIVERY are the robust, large layers; PLANNING is a MODEST,
CONDITIONAL third layer** — positive only under substantial declared sector heterogeneity AND the realistic negative
need↔visibility association, near-zero/negative otherwise. Magnitude DECLARED and numerically modest; **not in obvious
tension with the broader, non-commensurate IMF/Rioja evidence, but NOT anchored to a cross-sector point estimate**.
22/22 tests. → ready for a round-3 confirmation.

## Anchoring round (author: "anclar mejor los parámetros a datos") — data-anchor agent (verified) + AGENDA CAPTURE

**Author question:** was agenda capture modeled in the status-quo category selection? **Answer: no** — only the SOFT
credit distortion was in the headline; hard exclusion was a non-default variant. The author chose to incorporate agenda
capture. Data-anchor agent (all web-verified) mapped E9's declared parameters onto observable moments:

| parameter | observable moment | anchor | status |
|---|---|---|---|
| `nSec` | UN COFOG top-level functions = **10** | UN/Eurostat/OECD COFOG | **ANCHORED** (nSec=10) |
| `creditCoef` (over-fund visible) | pre-election composition shift to visible spending | Drazen–Eslava 2010 *JDE* 92(1); Vergne 2009 *EJPE* 25(1); Katsimi–Sarantides 2012 *Public Choice* 151 | direction ANCHORED, **magnitude modest/single-digit → declared-with-band** |
| `assoc` sign (high-need = low-visibility) | maintenance/prevention underfunded vs new visible capital | Rioja 2003 *JPE* 87(9–10) + WB AICD (optimal maintenance ~2% GDP; new-build bias) | **SIGN anchored**, strength declared |
| `secValSpread` (cross-sector value dispersion) | COFOG share dispersion / sector-return spread / allocative gap | Eurostat COFOG 2023; IMF/CEPR ~11% GDP + 30–40% efficiency-gap **ceiling** | loose/confounded → **upper-bounded, not point-anchored** |

**Data-agent's read:** the honest anchored planning contribution is **SMALL (a few %)** — measured composition shifts are
single-digit, the ~11%/30–40% figures are ceilings bundling far more than cross-sector visibility bias, and the
need↔visibility link is directionally real but weakly measured. This **coheres with the project's own symmetry-gate
NO-GO (~0.026)**: the architecture + mechanism is the contribution; the honest calibrated planning magnitude is small.

**AGENDA CAPTURE mechanism added (commit 790cdc1):** `agendaCapture` = the number of its lowest-perceived COFOG sectors
the central keeps OFF the menu (second face of power, Bachrach–Baratz 1962 / Schattschneider; political budget cycles).
Budget reallocated to funded sectors. This is the mechanism that makes the planning layer **robustly POSITIVE (no sign
flip)**. At the DEFAULT modest, data-consistent severity (**1 of 10** COFOG functions off the menu) the planning Shapley
is **~+7.0% [+6.6,+7.5]** (vs +3.8% and sign-ambiguous under soft distortion alone); severities of 2–3/10 give +10–15%
but are a **declared stress, NOT data-supported** (wholesale exclusion of many functions contradicts the single-digit
measured shifts).

## Codex pro-anchor panel (4 profiles) — CONVERGES with the data agent; applied (commit 3033c2b)

The panel (PFM / development / political-economy / methodology) verified sources and mapped E9's parameters onto
observable moments, plus found a real BUG. Applied:

- **BUG FIX (blocker):** distributed sector perception multiplied `secValSpread` twice (`valTilt` already carries it).
- **Provisional moment maps:** `creditCoef` 0.6→**0.076** (Drazen–Eslava election log-visible-share shift 0.024,
  SE 0.008); `secValSpread` 0.3→**0.184** (World Bank OED between-sector return-per-cost SD); `nSec`=10 (COFOG);
  **`agendaCapture` default 1→0** — no cited evidence for universal whole-function exclusion, so it stays a DECLARED
  STRESS, not the anchored headline.
- **Result reproduces the panel's independent diagnostic exactly:** planning Shapley **+0.61% strict / +3.21%
  [+2.93,+3.47] recycled**. (My earlier +7% used the unanchored creditCoef=0.6 + agendaCapture=1 + the double-count.)

**What the anchoring round found (the SOFT-only slice, mechanism absent):** with `agendaCapture=0` and the moment-mapped
params, the planning contribution is ~+0.6% (strict) to +3.2% (recycled) — the 0–3% range both reviewers converged on.
**But this slice omits agenda capture, the layer's dominant mechanism, so it is NOT the planning result** (see the
framing decision below — do not headline a planning figure). **SELECTION (+37–43%) and DELIVERY (+11%) remain the large,
robust, quantified layers.** 26/26 tests.

## Planning-layer framing — DO NOT report a figure (author decision, 2026-07-13)

**Key methodological point (author):** it is misleading to headline a "neutral" small planning number (~0–3%), because
that number is measured with the layer's DOMINANT mechanism — **agenda capture** (the central keeping whole high-need/
low-visibility functions off the menu; the second face of power) — SWITCHED OFF. Reporting it as "the" planning
contribution would falsely read as "we measured planning and it is small," when the honest statement is: **the planning
layer's magnitude hinges on agenda capture, which cannot be anchored today, so we do NOT quantify it.**

Therefore the E9 write-up should:
- **Quantify only SELECTION and DELIVERY** (anchored, robust, large layers).
- Present **PLANNING qualitatively**: the mechanism (agenda capture / second face of power) is IDENTIFIED and its
  DIRECTION anchored (COFOG structure; the election-period shift to visible spending; maintenance neglect), but its
  MAGNITUDE requires country-specific budget data (which whole functions a given central actually excludes) and is left
  as **proposed continuation work**. **Do NOT report a planning-layer figure** — not even the 0–3% soft-distortion slice,
  which understates the layer by omitting its dominant mechanism.
- The internal `agendaCapture` sweep and the 0–3% soft-only slice remain in the CODE as analysis, clearly labelled as a
  lower slice that omits the dominant mechanism — not as a headline result.

Two concrete continuation items the author wants (agenda capture is the needle-mover, presented as continuation):
1. **A CHILE worked example** — find Chilean budget data (e.g. COFOG/DIPRES functional classification, deferred-
   maintenance / low-visibility-function under-provision) and present the resulting agenda-capture severity as an
   **illustrative example, explicitly NOT a conclusive calibration**. It shows the mechanism concretely for one country.
2. **A country selector in the interactive explorer** — when the panel-calculation page is improved, let the user
   **choose a country** and set the agenda-capture (and related planning) values to that country's budget structure, so
   the planning contribution is shown per-country rather than as one universal number.

## Panel modifications noted as FUTURE WORK (a country-specific, fully-anchored v3): softmax baseline-plus-flexible-
reallocation share form (credit as a share semi-elasticity, not an additive coefficient on the arbitrary `M_C` scale);
return-per-cost value tilt (`Sadj = S + cost·returnTilt`); a per-sector DATA INPUT TABLE (COFOG code, counts, cost/
return distributions, baseline capital share, visibility, need, maintenance share); an inverse-calibration harness that
root-solves the observable moments with held-out validation; a genuine value-maximizing comparator (diminishing returns)
to replace the greedy reference if an actual-vs-optimal allocation gap is the target; and an exclusion HURDLE model
(first whether viable projects exist, then whether the central zero-funds them).
