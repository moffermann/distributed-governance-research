# Claim & estimand contract (governs the paper's quantitative claims)

**Date:** 2026-07-10 · **Status:** the controlling specification for what the simulation may and may not
claim. Written after the independent audit (`audits/2026-07-10/`) and the pre-registered **symmetry gate**
(NO-GO). Every quantitative statement in `drafts/paper.md` / `paper.es.md` must conform to this contract.

## 1. Primary estimand (the one actually tested)
For a **fixed candidate-project pool** and a **fixed total budget**, the contrast is the expected
**aggregate realized net public value** of the *distributed* vs *centralized* **selection** of the same
public-resource slice, **holding delivery identical** across arms (the symmetry gate tested selection with
delivery at parity):

> **Δ_selection = ( E[ value(portfolio_D, d₀) ] − E[ value(portfolio_C, d₀) ] ) / O**, both arms under the
> same delivery `d₀`.

"Net public value" of a funded project = its aggregate affected-party value minus an opportunity-cost
hurdle on its resources (`net = S − h·cost`). The **reference benchmark O** is a full-information greedy
value/cost selector on true `net` (renamed from "oracle"); it is a computational reference, **not**
guaranteed optimal nor an upper bound (0/1-knapsack effects).

A **Δ_total** that additionally credits a *delivery* difference is retained only as a **future estimand
requiring an identified, separately-estimated delivery model** — it is not claimed here.

## 2. Symmetry conditions (what both arms must share)
Both arms face: the **same candidate pool, the same true project values and costs, the same total
appraisal/information budget, the same appraisal-error (report-noise) process, the same eligibility logic
(each acts on its OWN noisy estimate — no arm sees ground-truth net), the same greedy budget rule, and the
same delivery resources**. No arm receives oracle access, asymmetric cost knowledge, or different
eligibility rules. This is the condition the symmetry gate enforced.

## 3. Permitted mechanism (the only thing that may differ)
The distributed arm's information is **endogenously routed** — citizens report on the projects they care
about (coverage), and diffusely-harmed minorities under-participate (adverse voice bias, a *cost* borne by
the distributed arm). The central arm reads value competently but spreads a fixed appraisal bandwidth
evenly across projects and carries a **bounded** credit-claiming pressure `λ` on its ranking (never on its
eligibility — no knowingly value-destroying planner). Any advantage must arise from this mechanism alone.

## 4. Diagnostic decompositions
- **Selection effect (the one tested):** compare the selected portfolios holding delivery performance
  constant — this is what the symmetry gate measured.
- **Delivery effect (FUTURE requirement):** compare delivery performance holding the selected portfolio
  constant — requires an identified, separately-estimated delivery model; **not run here**.
(The two are reported separately; they are **not** independently calibrated factors to be multiplied into a
headline.)

## 5. Outcome measure — honest limits
`value(·)` is an **aggregate** (utilitarian-style sum of cardinal affected-party valuations), **not** a
distributionally-weighted welfare measure; it says nothing about redistribution or equity. **The value/cost
units, the opportunity-cost hurdle `h`, and the project-generating distribution are uncalibrated** — chosen
for a stylized world, not estimated from data. The model is **partial-equilibrium**: no strategic
reporting, endogenous proposals, project complementarities, tax incidence, or general-equilibrium effects.
The domain is a **bounded public-investment slice**, most defensibly infrastructure-like capital projects —
**not** the whole budget or "the purpose of the state".
The simulation is a **stylized model of the selection mechanism**, not a validated Core v0 implementation
(its `P` and `S` are abstract correlated scores, not the architecture's visibility/traceability/permanence
constructs).

## 6. Interpretation clause (binding)
Until the project-value distribution, appraisal errors, the sponsor↔public-value relationship, and delivery
effects are **measured from relevant real data**, any Δ reported by this simulation is a **conditional
simulation output, not an estimated real-world multiplier.** The pre-registered symmetry gate found the
selection advantage **positive in every one of the 18 pre-specified primary cells but small within the
simulation grid**: pre-registered pooled **median Δ ≈ 0.025**, below its pre-registered **0.05 materiality
bar**; the pooled ratio-of-sums was **Δ = 0.026 with a world-cluster interval [0.023, 0.029]** — a
**Monte-Carlo interval conditional on the simulated data-generating process, not empirical uncertainty**
(reported separately from the median). So the **mechanism direction is supported** (distributed selects
modestly better net value, more so as credit pressure rises and as credit aligns less with value), **but
the magnitude is small and not a material, calibrated effect.**

## 7. What this contract RETIRES
- The **~2× / ~2.1× / ~2.8× calibrated headline** — withdrawn from title, abstract, and conclusion. The
  earlier figures were artifacts of asymmetries (an oracle-gated distributed arm, a pure-credit `λ=1`
  central, and a stipulated delivery multiplier) plus a scale-unstable hurdle.
- The **Gilens-Page → corr(S,P) ∈ [0.1,0.3] "calibration"** — the correlation is posited, not measured;
  report the full frontier, not a preferred empirical interval.
- The **imposed 1.30× delivery multiplier** and any "selection × delivery" headline product.
- The **"converges on the original ~2.2×" corroboration** — non-independent (different apparatus, and the
  target was known during calibration).
- The **"pre-registered 7/7"** framing — the exercise is post-exploratory (an *exploratory analysis
  specification*); the symmetry gate is the one genuinely pre-registered test.

## 8. Positive claim the paper MAY make
> A concrete architecture (Core v0) for distributed governance of a bounded public-resource domain, and a
> mechanism argument — supported by a pre-registered symmetric simulation — that **credit-pressured central
> selection** mis-allocates relative to coverage-based distributed selection. The simulated advantage is
> **positive in every pre-specified cell but small (~2–3% of the full-information benchmark under matched
> expected appraisal-report budgets)**, larger only under a **matched-budget low-information stress regime**
> (where lowering participation also lowers the matched central appraisal budget, so the larger effect
> shows the value of endogenous allocation under scarce shared bandwidth — **not** resilience to
> participation decay). It is offered as a mechanism demonstration, not a calibrated effect size.
