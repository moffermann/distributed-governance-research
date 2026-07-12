# Administrative-cost leg (leg C) — a SEPARATE, identifiable estimand — design note

> Author's question (2026-07-11): are the machinery costs the state pays to do what Core v0 does in the model?
> Answer: NOT yet, deliberately. The v5 engine measures ONLY selection quality at MATCHED project budget
> (the credit-vs-coverage / harm-myopia mechanism). The administrative saving is a distinct leg (v1.14 plan "leg C").

## Why kept separate from the value estimand m
Folding admin savings into `m=(D−C)/O` would conflate two mechanisms and invite the critique "the distributed
advantage is partly a hidden larger budget, not better selection." Report `m` (value, matched budget) and `m_admin`
(cost) SEPARATELY, plus a combined view with explicit decomposition — never conflated.

## Formalization (budget-accounting leg)
Public budget `B`. Each arm spends an overhead fraction on the machinery it needs; the rest reaches projects:
```
project budget central     = B·(1 − κ_C)
project budget Core v0 (D)  = B·(1 − κ_D) ,   κ_D < κ_C
```
`κ_C` = share consumed by the machinery Core v0 eliminates. **In scope (per author):** value-proxy market studies,
allocation, prioritization, AI-fiscalization machinery, delivery management, software licenses, travel.
**Out of scope (per author):** project DESIGN costs, human fiscalization. `κ_D` = Core v0's own operating cost
(platform + AI), MINUS nothing (it is the subtrahend already).

Two reported quantities:
- `m_admin` = fractional extra deliverable budget = `(κ_C − κ_D)/(1 − κ_C)` (or the delivered-value ratio it induces).
- combined `m_total` = value-selection effect ⊕ budget effect, **with the two legs shown separately** (delivered
  value under central `= f(selection_C) · B(1−κ_C)` vs distributed `= f(selection_D) · B(1−κ_D)`), so double-counting
  is visible and avoided.

## Why this leg is the MORE defensible one
Unlike the value leg (source→target transport is unidentified), `κ_C`, `κ_D` are anchorable to **real public-budget
line items** — no transport problem. This may be where the largest AND best-identified number lives (the author's
">5x" intuition, plausibly here). Its identification status is therefore stronger: PROXY-INFORMED trending to
IDENTIFIED where budget data exist.

## Double-counting caveat (the fine point)
The central's machinery is not pure deadweight — the market studies BUILD the (myopic) proxy that gives `M^C` its
signal. Core v0 replaces that expensive proxy with cheap coverage. The combined story ("pay a lot for a myopic
proxy, or little for coverage") is strong but must not double-count: keep `m` at matched project budget (pure
selection), and `m_admin` as the budget-accounting leg, then combine explicitly.

## To build (separate module; do not disturb the running value engine)
- `scripts/simulation/e4-v5/admin-cost.mjs` — a small, transparent module computing `m_admin` and `m_total` from
  `(κ_C, κ_D, B)` with `D_M/D_F/R_α` on `κ_C, κ_D` (physical: shares in [0,1]).
- Its own closed-schema fields (extend OUTPUT_SCHEMA with `m_admin`, `m_total` decomposition) — still no `×`/D/C.
- Anchor `κ_C, κ_D` to public-budget sources where available; state identification status honestly per component.
- Codex dimension: "is leg C cleanly separated from leg m, correctly scoped (design/human-fiscalization excluded),
  and free of double-counting?"
