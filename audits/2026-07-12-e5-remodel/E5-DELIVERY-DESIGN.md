# E5 re-model — Selection × Delivery on the clean E4 engine

**Date:** 2026-07-12. **Code:** `scripts/simulation/e4-v5/e5-delivery.mjs` (+ `-test.mjs`). **Runs:**
`npm run e5:delivery`, `npm run e5:delivery:test`. Author intent this cycle: re-model E5 as the delivered-value
experiment on the E4 base + a delivery layer, well-modeled (it was heavily questioned), **no costs** (costs are the
later E10 dimension). This doc records the model, its anchors, and the honest limits.

## Why a re-model was needed

The legacy E5 (`e5-sp-model.mjs`) collapsed delivery into a **constant fraction tied to the selection arm**
(central → weak `fWeak`, distributed → verified `fVer`). That conflates the two layers: you cannot read a delivery
effect that is independent of who selected. The current `e4-v5/e5-layers.mjs` is a different thing again — a
default-off `κ`/`leak` scalar wrapper that is really the **cost leg (E10)**, not a delivery simulation. Neither gives
the clean, separable measurement the author asked for.

## Design — a four-cell (selection-by-delivery) experiment

Two **independent** regimes, evaluated on the **same** funded portfolios and the **same** executor draws (matched
seeds), on the clean E4 v1.14 engine:

| | opaque delivery | verified delivery |
|---|---|---|
| **central selection** | S (status quo) | A1 (delivery effect, selection held central) |
| **distributed selection** | A3 (selection effect, delivery held weak) | A2 (full architecture) |

- Selection reuses the E4 engine unchanged: central = `M_C` + credit tilt, distributed = `M_D` coverage, oracle =
  true `S`. The engine was given a behaviour-preserving refactor to expose `fundedSet` (the funded index set); E4
  scenarios reproduce identical seeded numbers.
- Everything is normalized by the **oracle at perfect delivery** (the E4 reference `ΣO`). So a cell's value is the
  fraction of the full-information, perfectly-delivered benchmark it achieves — parity at that reference, **no
  compound multiplier, no ×/D-C**.

## Delivery model (micro-founded, one-shot, deterrence ex ante)

Faithful to `research/e5-value-delivery-design.md` (Okun's leaky bucket; the Model-1 incentive condition), adapted to
the one-shot E4 world (no time dimension, so no endogenous pool cycling — the reputational stake enters the incentive
condition statically, which is exactly the corpus finding that **deterrence pre-empts punishment**):

- A share `pi_hon` of executors are **intrinsically honest** (deliver `1 − loss_hon`). The rest are opportunistic and
  **divert iff** temptation `t ~ U(0,1)` exceeds the regime deterrent `det = p_det · [(1 − a(1 − r)) + gamma + rep]`
  (`a` = up-front advance exposure, `r` = recovery, `gamma` = performance guarantee, `rep` = reputational stake).
- A diverting executor loses `a(1 − r)` of the budget (the unrecovered advance) → delivers `1 − a(1 − r) − loss_hon`.
- Delivered value `V = Σ_{j∈funded} S_j · f_j`. (A half-built harmful project does half its harm — consistent; the
  **stolen funds' cost is 0 social value here and belongs to E10**, not this value layer.)

### Calibration (declared, not fitted; magnitudes anchored, directions from the corpus)

| regime | `p_det` | `a` | `r` | `rep` | emergent delivered fraction | anchor |
|---|---|---|---|---|---|---|
| opaque | 0.10 | 0.90 | 0.00 | 0.00 | ~0.68 (leak ~32%) | IMF PIE-X public-investment inefficiency 0.20–0.30; Olken 2007 Indonesian roads 24% missing; pessimistic end reaches Reinikka & Svensson 2004 Uganda 87% |
| verified | 0.75 | 0.20 | 0.50 | 0.50 | ~0.95 (leak ~5%) | milestone-gating + retention + recovery + reputational stake (corpus Models 1–2); capture-resistance from the E4-v5 capture block |

`pi_hon = 0.70`, `loss_hon = 0.05`. These live in the module's `DELIVERY` object (module-local, **not** E4 `THETA`), so
the frozen E4 contract/hash is untouched.

## Result (PROBABLE world, 1200 worlds; post-Codex calibration pi_hon=0.78, separate RNG streams)

- Selection efficiency (perfect delivery) = **the E4 numbers**: central +44.1%, distributed +98.2% (**exact** now —
  worlds share the E4 estimand's PRNG stream, executors use a separate one).
- Delivery efficiency: opaque +77.5% (leak 22.5%, Olken value-loss moment), verified +95.0%. Diversion incidence:
  opaque 21.7%, verified 0.0% (ex-ante deterrence).
- Four cells (fraction of oracle reference): S +34.2% · A1 +41.9% · A3 +76.1% · A2 +93.3%.
- Main effects (pp of oracle): **delivery** +7.7% (at central) / +17.2% (at distributed); **selection** +41.9% (at
  opaque) / +51.4% (at verified). **Interaction +9.4%** (positive). **Full architecture (A2 − S) +59.1% [95% CI
  +58.5, +59.7].**
- **Monitoring coupling (SPLIT, post-Codex):** community coverage lifts DETECTION only (mon_detect 0.05, band 0.0–0.10)
  → opaque dividend just **+0.2–0.5 pp** — community eyeballs without institutional recovery barely help a weak-control
  regime. With institutional recovery linkage (mon_recovery 0.20) the dividend is **+3.9 pp**. Honest finding: the
  delivery gain needs the **formal recovery channel** (the verified regime / Core v0's evidence layer), not monitoring
  alone. This replaced the earlier single `mon_coupling=0.35` (recovery was doing most of the work, unanchored).
- **Composition: multiplicative (an accounting identity).** Actual A2 +93.3% equals σ_D·δ_verified +93.3%
  exactly; the additive prediction (+83.8%) is short by the interaction. The two layers **multiply**; the positive
  interaction is the level-effect signature of that composition.

## Honest limits (for the adversarial pass)

1. **Multiplicativity is partly structural.** Delivered fraction here depends on the regime and the executor draw but
   **not** on the project's value or on which arm selected it, so `V/O = selection · delivery` holds by construction and
   the interaction is the pure level term `O·Δσ·Δδ`. This is a defensible modeling choice (a milestone-gate works the
   same whoever picked the project) and it matches the paper's earlier positive-interaction finding — but the
   experiment **confirms and quantifies** multiplicativity under that assumption, it does not independently discover it.
   A genuine super-/sub-multiplicative result would require delivery to correlate with selection (e.g. local monitoring
   that travels with distributed selection) — a future refinement.
2. **One-shot, no endogenous pool.** The verified regime's reputational exclusion cannot cycle (the E4 world has no time
   axis); `rep` enters statically. This understates the verified regime if anything (no learning), so it is conservative.
3. **Delivery calibration is declared, not measured.** The regime parameters are anchored in direction and band, not
   fitted to a target domain; the delivered fractions are reference points, not field effects.
4. **No costs.** Administrative machinery cost (the `κ` that breaks equal-budget) is deliberately absent — that is E10.

## Steps 1 + 2 (added 2026-07-12, commit after 1676e77)

**Step 1 — opaque-band sensitivity (`sweepOpaque`).** The status-quo leak is swept from the IMF/Olken central band
(~27%) to the Uganda pessimistic extreme (~77%). Result: the delivery effect at the distributed arm and the
full-architecture gain (A2 − S) grow **monotonically** (+61.6% → +83.3%) and coverage wins across the whole band — a
worse status quo only widens the gain. This resolves the "opaque calibration is a single stipulated number" objection.

**Step 2 — monitoring coupling (`mon_coupling`).** Breaks the structural multiplicativity: Core v0's distributed
coverage is not only a selection signal, the same citizens also **observe delivery**, lifting the distributed arm's
effective detection AND recovery (`p_det_eff = p_det + c(1−p_det)`, `r_eff = r + c(1−r)`). At the anchored coverage-only
band (`c = 0.15`, band 0.0–0.20 per Björkman-Svensson / Molina / MGNREGA — small and fragile) the distributed arm
delivers **+4.0 pp** more than central in the OPAQUE regime (A3 +72.0% → +76.0%) — coverage **substitutes for a missing
formal control layer** — and ~0 in the verified regime (already saturated: deterrence holds ex ante). So the
super-multiplicative dividend is **genuine** (delivery depends on the selecting arm) and **largest where formal control
is weakest**. At `c = 0` the model reduces to the exact multiplicative baseline. (Earlier draft used c=0.35, above the
anchored band — corrected in the calibration round.)

This turns the honest-limit #1 (multiplicativity is structural) into a **modeled, switchable mechanism**: the
experiment now shows both the pure multiplicative composition (c=0) and the genuine super-multiplicative dividend
(c>0), and localizes it (weak-control regimes).

## Magnitudes that need literature anchors (for the friendly calibration round)

Declared/plausible today; to be anchored to published sources (no field/paid data), directions already fixed:

- `mon_coupling` (community-monitoring detection + recovery lift): social-audit / community-monitoring impact evidence
  (e.g. Björkman & Svensson 2009 Uganda community monitoring; Olken 2007 audits vs grassroots monitoring; India social
  audits). Currently 0.35, illustrative.
- opaque regime `{p_det, a, r, rep}` and `pi_hon`: the leak-band anchors (IMF PIE-X 0.20–0.30; Olken 2007 24%;
  Reinikka & Svensson 2004 87%) constrain the emergent delivered fraction, but the split into detection vs advance vs
  honest-share is a modeling choice needing tighter anchoring.
- verified regime `{p_det, a, r, rep}`: milestone-gating / retention / clawback effectiveness; capture-resistance from
  the E4-v5 block. `loss_hon` (honest production loss).

## Verified calibration table (friendly round — calibration agent, 2026-07-12)

All citations web-verified by the agent unless marked. **Transport rules to state in the paper:** (1) IMF ~30% is
*process inefficiency*, not diversion — do not equate with theft; (2) monitoring effect sizes are from
health/education/workfare service-delivery RCTs, not capital-project fund tracing — any lift on a construction leaky
bucket is an out-of-domain extrapolation.

| model quantity | anchored band | best citation | status |
|---|---|---|---|
| opaque divert share (central case) | **~24%** missing (works theft) | Olken 2007, *JPE* 115(2) — Indonesia roads | **ANCHORED** |
| opaque process loss (broad) | ~30% avg (40% low-income / 27% emerging / 13% advanced) | IMF, *Making Public Investment More Efficient*, 2015 (PIMA/PIE-X) | ANCHORED (process, not theft) |
| opaque tail (worst case) | ~87% leakage (schools got ~13% of grants) | Reinikka & Svensson 2004, **QJE 119(2)** "Local Capture" | ANCHORED as **tail**, not central |
| monitoring lift `mon_coupling` (community-coverage only) | **~0.0–0.20** relative leakage cut (small, fragile) | Björkman & Svensson 2009 QJE (health, **failed replications**); Molina et al. 2016 Campbell (heterogeneous) | ANCHORED but FRAGILE — **widen bands; 0.35 was too high** |
| top-down audit detection/deterrence | ~⅓ relative cut (8pp on 24%) | Olken 2007; Avis, Ferraz & Finan 2018 *JPE* 126(5) (~8% future) | ANCHORED (this is the verified regime's detection, not the coupling) |
| social-audit recovery/clawback | detection + recovery > deterrence | Afridi & Iversen 2014, IZA DP 8095 (MGNREGA, Andhra Pradesh) | ANCHORED (supports coupling recovery channel) |
| ex-ante deterrence ⇒ verified ~0 diversion | announced audit deters before the act | Olken 2007 (ex-ante 4%→100%); Becker 1968 | ANCHORED — validates the "deterrence ex ante" simplification |
| milestone-gating effectiveness magnitude | mechanism sound, **no citable effect size** | World Bank PforR 2012 / OBA; CGD | **DECLARED, not anchored** |
| reputational-exclusion stake | — | none | **DECLARED, no anchor** |
| share of projects net-unsatisfactory | ~25–30% (plausible, unconfirmed) | World Bank IEG / PEFA | **UNVERIFIED — label declared** |

**Implied code recalibration:** lower `mon_coupling` default from 0.35 to ~0.15 (coverage-only band 0.0–0.20) and
sweep it; keep opaque central near Olken's ~24% divert; keep verified ~0 diversion (anchored deterrence); label
milestone magnitude and reputational stake as declared. Do NOT map the 33% mortality or 87% capture figures onto the
monitoring lift.

## Friendly Codex round — applied vs deferred (full verdict: `CODEX-E5-FRIENDLY-VERDICT.md`)

**Applied (commit 6c0a12c):** split coupling into detection/recovery with community-only recovery = 0; added the
`gamma` guarantee term to the Model-1 incentive condition (verified 0.10, World Bank standard); separate world/executor
PRNG streams (E5 reduces to E4 exactly); reframed opaque as the Olken value-loss moment (pi_hon 0.78); report diversion
incidence + value leakage + a bootstrap CI on the full gain; named the multiplicativity an accounting identity; labelled
verified ~0 diversion as conditional ex-ante deterrence and the whole calibration an identified-set reference.

**Second robustness pass — DONE (commit 418c7cd):** value/complexity-correlated delivery risk (`val_risk`); 20-seed
replication; joint Latin-hypercube sweep over the declared delivery ranges (replaces the 1-D sweep); `validateDelivery`
fail-closed. Result: full gain robust — 20-seed sd 0.5 pp; LHS full-architecture wins 100%, coverage effect 100%.

## Friendly Codex round-2 — verification, bounded pass (verdict: `CODEX-E5-FRIENDLY2-VERDICT.md`)

Round-2 verified the model + result reproduce (full +59.1 pp [+58.5,+59.7], 36→40 tests) and returned
**PUBLICATION-READY: YES after a bounded pass**, now applied (commit 84332e1): validation genuinely fail-closed
(`Number.isFinite`; `rep` required — a missing rep silently made the deterrent NaN); bootstrap CIs on ALL reported
cells/effects; favorable **R=0 disclosure** (verified delivery 94.4%, verified diversion 5.5%, full +58.6%);
`shareCoverageWins`→`shareArchitectureWins` + a real coverage share; label fixes (Olken = value-weighted non-delivery
not executor share; severe sweep row = declared stress ~69% loss, not the Uganda 87% tail; `val_risk` = cost/size under
`c ⟂ S`; verified `a=0.20` declared). Quantities kept explicitly DECLARED: `loss_hon`, `rep`, milestone effectiveness,
the guarantee→`gamma` mapping, the `p_det/a/r` decomposition, `mon_detect`/recovery mappings, `val_risk`, `U(0,1)`
temptation, `c ⟂ S`, uniform-independent LHS weighting.

**Status (post friendly rounds): CODE/TEST-READY.** (Downgraded from "publication-ready" per Adversarial R1: the
empirical interpretation is still pending model-form + calibration review — the calibration is an identified-set
reference not a field estimate, the intervals are conditional-MC only, and the robustness sweep is conditional on
PROBABLE. The mechanism and the PROBABLE arithmetic are sound; the empirical claim is not yet fully identified.)

## Next

- Integrate E5 into the paper's Finding 5 (EN+ES) using `FINDING5-DRAFT.md`.
- E9 (full-stack: planning + selection + delivery, central vs Core v0) and E10 (+costs) per
  `docs/EXPERIMENT-INVENTORY.md`.
- Re-label `e5-layers.mjs` as the E10 cost scaffolding; wire E5 delivery into the paper's Finding 5 with the
  percentage main-effects framing (no compound).
