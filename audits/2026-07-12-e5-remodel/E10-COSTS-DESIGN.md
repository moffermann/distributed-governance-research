# E10 design — the administrative-cost layer (built 2026-07-13)

> **SUPERSEDED IN PART (2026-07-13, post-Adversarial-R1).** The estimand and the point
> figures below are retired. The final model does **not** apply a proportional value
> haircut `(1 − κ)`; it uses a **net-budget** estimand — the admin cost scales each arm's
> *budget before selection* (`φ·(1 − κ)`), so the value loss is sub-proportional (greedy
> funding cuts the marginal projects first), against a common full-budget oracle. The
> declared shares are **κ_C = 0.08** (pure admin overhead, de-overlapped from the delivery
> leakage E5 already removes) and **κ_D = 0.05** (platform **plus** Core v0's own control
> machinery, charged symmetrically) — **not** κ_C = 0.15 / κ_D = 0.03. The result is
> **roughly neutral**: administrative cost moves the modeled gap from +58.6 to +57.7
> reference points, a **−0.9-point** contribution — the advantage is delivered value, not
> overhead, and the old "+2.3-point widening" claim (and the crossover argument that
> depended on a proportional haircut) no longer applies. Authoritative source: the code
> (`scripts/simulation/e4-v5/e10-costs.mjs`) and manuscript Finding 10.

**Code:** `scripts/simulation/e4-v5/e10-costs.mjs` (+ `-test.mjs`). **Runs:** `npm run e10:costs`, `e10:costs:test`.

E10 adds the cost dimension E5 (delivered value at equal budget) and E9 (the full stack) left out: the **administrative
/ machinery cost** the central runs and Core v0 largely eliminates, minus Core v0's own platform cost.

## Model

`V_arm / O = (delivered value_arm / O) · (1 − κ_arm)`, `m10 = V_D/O − V_C/O`. Status quo = central selection × opaque
delivery; Core v0 = distributed selection × verified delivery.

**Two switches (author requirement):**
- **PLANNING switchable OFF (default OFF)** — its magnitude is deferred/qualitative (agenda capture is the dominant,
  not-yet-anchorable mechanism), so it must NOT be folded quantitatively into the cost result. OFF ⇒ value base = E5;
  ON ⇒ value base = E9. Tested: OFF reproduces E5's S/A2 cells exactly.
- **COSTS switchable OFF** (κ=0 ⇒ reduces to the value stack). Tested.

## Calibration (verification agent, 2026-07-13 — DIRECTION verified, POINT magnitudes DECLARED-conservative)

| param | value | anchor (verified) | status |
|---|---|---|---|
| **κ_C** central machinery Core v0 eliminates | **0.15** | IDB *Better Spending for Better Lives* 2018: LAC public-spending waste = **4.4% of GDP ≈ 16% of government expenditure** (procurement + payroll + transfers). 0.15 = round-down of 16%; band 0.10–0.16. Narrow pure-admin overhead 1–10% (CBPP; SSA <1%; CBO) is a lower floor. | direction ANCHORED; exact point DECLARED |
| **κ_D** Core v0 platform + AI operating cost | **0.03** | Verified e-procurement run-costs are an ORDER OF MAGNITUDE below 0.03 (~0.005–1% of spend managed — JBCA 2023 e-GP CBA; KONEPS; GeM; ProZorro). 0.03 deliberately over-charges the platform → **conservative ceiling** (band 0.005–0.03). | direction ANCHORED; conservative ceiling, DECLARED |
| ratio κ_C/κ_D ≈ **5** | — | verified central machinery cost is **≥10–30×** platform run cost → the modeled 5× **understates** the structural gap | conservative |

**Must stay purely DECLARED** (no source maps directly): the exact κ_C=0.15 and κ_D=0.03 points; the IDB three-way
procurement/payroll/transfers split; procurement transaction cost as a share of contract value.

## Result (PROBABLE, planning OFF, κ_C=0.15 / κ_D=0.03)

Value-only gap **+59.1%** (status quo +34.2% vs Core v0 +93.3%) → **with admin costs +61.4%** (the cost layer adds
**+2.3%** to the gap). Costs OFF reduces exactly to the value stack.

**Honest subtlety (RETIRED — depended on the proportional-haircut estimand; see the banner):** under the old
proportional `(1 − κ)` model, admin costs widened the Core-v0 gap only when the arms' cost ratio exceeded the
delivered-value level gap between them. The final **net-budget** estimand replaces this: cost reduces the *budget*
before selection, the value loss is sub-proportional, and the net effect is **roughly neutral** at the declared shares.

## Not double-counting E5's leakage

E5's delivery layer models **leakage/diversion** (value not delivered — Okun's leaky bucket). E10 models a DIFFERENT
thing: the **administrative machinery cost** (budget consumed running the value-proxy/allocation/prioritization/
fiscalization apparatus), which Core v0 replaces with a cheap platform. No overlap with delivery leakage.

## Next

- Optional: a full IDB-volume read to pin the procurement-share component (currently declared).
- The E4→E10 program is complete: E4 selection · E5 delivery · E9 planning (qualitative) · E10 admin cost. Then paper
  framing of the whole stack (selection + delivery + cost quantified; planning qualitative via agenda capture).
