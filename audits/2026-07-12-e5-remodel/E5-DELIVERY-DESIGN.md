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
  **divert iff** temptation `t ~ U(0,1)` exceeds the regime deterrent `det = p_det · [(1 − a(1 − r)) + rep]`
  (`a` = up-front advance exposure, `r` = recovery, `rep` = reputational stake).
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

## Result (PROBABLE world, 1200 worlds)

- Selection efficiency (perfect delivery) = **the E4 numbers**: central +44.2%, distributed +98.2%.
- Delivery efficiency: opaque +68.0%, verified +95.0%.
- Four cells (fraction of oracle reference): S +30.1% · A1 +42.0% · A3 +66.7% · A2 +93.3%.
- Main effects (pp of oracle): **delivery** +11.9% (at central) / +26.6% (at distributed); **selection** +36.6% (at
  opaque) / +51.2% (at verified). **Interaction +14.6%** (positive). Full architecture (A2 − S) **+63.2%**.
- **Composition: multiplicative.** Actual A2 +93.3% equals the multiplicative prediction σ_D·δ_verified +93.3%
  exactly; the additive prediction (+78.6%) is short by the interaction. The two layers **multiply**; the positive
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

## Next

- Optionally sweep the opaque band toward the Uganda 87% pessimistic end and report sensitivity.
- E9 (full-stack: planning + selection + delivery, central vs Core v0) and E10 (+costs) per
  `docs/EXPERIMENT-INVENTORY.md`.
- Re-label `e5-layers.mjs` as the E10 cost scaffolding; wire E5 delivery into the paper's Finding 5 with the
  percentage main-effects framing (no compound).
