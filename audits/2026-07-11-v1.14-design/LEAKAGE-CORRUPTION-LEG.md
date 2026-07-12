# Leakage / corruption leg — a THIRD separate estimand — design note

> Author's question (2026-07-11): is corruption / "filtraciones" (IDB term: leakage, diversion) in the model?
> Answer: NOT in this experiment, deliberately. This experiment measures selection quality at MATCHED budget with
> full delivery. Leakage is a distinct channel — its own leg, like the administrative-cost leg (`ADMIN-COST-LEG.md`).

## The three separable channels (do not conflate)
1. **Selection quality at matched budget** — `m = (D−C)/O` (this experiment; credit-vs-coverage / harm-myopia).
2. **Administrative machinery cost** — `m_admin` (`ADMIN-COST-LEG.md`): what public-budget machinery Core v0 eliminates.
3. **Leakage / diversion** — `m_leak` (this note): integrity of delivery — the share of allocated funds that never
   reaches the project or is captured.

## Formalization (leakage leg)
Delivered value per arm `= (1 − λ_k)·Σ_{funded} S_j`, with leakage fractions `λ_C` (opaque central process) and
`λ_D` (auditable Core v0), `λ_D < λ_C` **in the base case** because Core v0's observability (signed amounts, visible
allocation/priority patterns, audit trail — cf. defenses D021 fiscal commitment, D030 clientelism) raises the cost
of diversion. `λ_C, λ_D` get their own `D_M/D_F/R_α`.

## Why potentially large AND partly identifiable
The IDB documents substantial public-spending leakage/waste in LAC — on the order of **several % of GDP**
(Izquierdo, Pessino & Vuletin, *Better Spending for Better Lives*, IDB 2018: procurement inefficiency, transfer
targeting errors, payroll). Corruption-in-procurement estimates exist per country. So `λ_C` is anchorable to real
data — no transport gap — like the admin-cost leg. This may be a large, defensible number.

## Honesty caveat (do NOT gerrymander λ_D ≈ 0)
Core v0 opens NEW attack surfaces (platform gaming, Sybil identities, collusion, capture of the AI-appraisal or
credit channel) — exactly what the architecture paper's attack/defense corpus grapples with. So `λ_D` is
**different leakage modes, plausibly lower in net, but not zero**. Model `λ_D` with an honest floor and a
sign-reversal-style rival where Core v0's new modes could exceed the diversion it removes.

## To build later (separate module/experiment; keep THIS one clean)
- `scripts/simulation/e4-v5/leakage.mjs` — delivered value scaled by `(1−λ_k)`, `λ_C,λ_D` with three-tier domains
  and an explicit new-attack-surface floor on `λ_D`.
- Anchor `λ_C` to IDB / country procurement-corruption data; state `λ_D` identification status honestly.
- Combine with `m` and `m_admin` only with explicit decomposition (no double-counting; three named legs).
- Codex dimension: "is the leakage leg separated, honestly floored on Core v0's own new attack surfaces, and free
  of double-counting with admin cost?"
