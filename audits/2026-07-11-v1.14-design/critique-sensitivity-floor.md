# Critique dimension 4 — sensitivity method and the floor

## Verdict

**Not defensible as written; formalizable only after major changes.** Classical first-order/total-order Sobol indices are not the right primary analysis for a parameter vector whose components are substantively dependent, and the proposed “floor” is not yet a defined estimand. More seriously, the sketch switches silently between two incompatible advantage metrics. It defines \(\Delta=(D-C)/O\), whose parity point is **0**, then asks whether \(\Delta\le 1\) means the central arm wins and offers a conditional “2.2×” output. Those latter statements belong to the retired \(D/C\) ratio, not to the governing estimand. This is not notation polish: it makes the sign, floor, and headline uninterpretable.

An honest analysis must make the **central-win region** a primary output. Existing E4 artifacts already contain central wins in ordinary regions of their own parameter box, and the governing gate supports only a small conditional direction on its frozen grid—not a positive robust floor over an enlarged “plausible” region.

## Severity-ranked issues

### Critical 1 — the design uses the wrong parity threshold and quietly restores the retired ratio

> **Quotable issue:** “The sketch defines parity at \(\Delta=0\), then reasons as if parity were \(\Delta=1\). A ‘2.2×’ value cannot be an output of \((D-C)/O\); it is the retired \(D/C\) ratio returning under the name \(\Delta\).”

The primary estimand is explicitly \(\Delta=(D-C)/O\) in the sketch (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH.md:30-34`) and in the binding contract (`research/claim-and-estimand-contract.md:7-18`). Therefore:

- distributed wins iff \(\Delta>0\);
- parity is \(\Delta=0\);
- central wins iff \(\Delta<0\).

But the open question calls \(\Delta\le1\) a central win (`DESIGN_SKETCH.md:82-83`), and the guardrail offers “state X → 2.2×” as a conditional \(\Delta\) output (`DESIGN_SKETCH.md:67-70`). The old E4-v4 engine really did use \(D/C\), explicitly defining advantage as distributed/central (`scripts/simulation/e4-v4-symmetric-frontier.mjs:21-22`) and interpreting values below 1 as central wins (`scripts/simulation/e4-v4-symmetric-frontier.mjs:82-85`). That is a different metric. The contract retired the ~2× family as artifacts of asymmetry and a stipulated delivery multiplier (`research/claim-and-estimand-contract.md:72-80`) and limits current claims to a small oracle-normalized difference (`research/claim-and-estimand-contract.md:59-70`).

This confusion also contaminates “does not fall below X vs the status quo” (`DESIGN_SKETCH.md:58-59`). Under the binding estimand, a robust non-inferiority claim is a lower bound relative to **zero**, in units of the computational reference \(O\); it is not an “X×” claim. Nor can one repair it by printing \(1+\Delta\): because \(\Delta=(D-C)/O\), \(1+\Delta\neq D/C\) in general.

**Concrete fix:** Freeze one primary metric everywhere: \(\Delta_O=(D-C)/O\), parity 0. Delete every “×” rendering and every threshold of 1 for this estimand. If \(R=D/C\) is retained as a secondary diagnostic, name it `R`, state parity 1, give it no headline role, and report it only alongside \(D/O\) and \(C/O\). Add automated assertions that exchangeable arms yield \(\Delta_O\approx0\) and \(R\approx1\), and reject any report template that appends “×” to \(\Delta_O\).

### Critical 2 — a positive floor is contradicted by the model family unless the “plausible” support is chosen to exclude central wins

> **Quotable issue:** “If the plausible set contains both a competent, high-quality central estimator and materially adverse distributed voice bias, it contains central wins. A positive floor can then be obtained only by defining those states away.”

The old symmetric-frictions frontier is direct counterevidence to any generic positive floor. Its stored results show \(D/C<1\) at 11 of the 25 displayed \((\gamma,\beta)\) cells, including 0.94 at \((0.50,0.75)\), 0.83 at \((0.75,0.50)\), and 0.89 at \((1.00,0.00)\) (`research/e4-v4-symmetric-frontier-results.txt:6-14`). The metric-honest table likewise shows whole subregions where zero of 54 box points favor the distributed arm (`research/e4-v4-symmetric-frontier-results.txt:19-45`). Tiny interested sets reverse even a nominally pro-distributed point: at the “very tiny 3–12” setting, only 2/8 runs favor distributed, and several parity-law cells have negative oracle-normalized gaps (`research/e4-v4-robustness-results.txt:3-8,21-28`).

The bias-only analytical special case identifies the reason: distributed dominates only for \(\beta<1-\gamma\), with parity at \(\beta=1-\gamma\) (`research/e4-analytical-backbone.md:41-64`). The full stochastic simulation does not obey that locus exactly because variance matters; notably \((\gamma=1,\beta=0)\) produces \(D/C=0.89\), a **central** win despite the analytical parity prediction (`research/e4-v4-symmetric-frontier-results.txt:8-14`; the project's prior audit corrects the reversed reading at `audits/2026-07-10-round2/errors-and-contradictions.md:13-19`). Thus the parity locus is valuable as a falsification benchmark, not as proof of a universal boundary.

That old proposition is also explicitly superseded as the primary mechanism and retained only as a rare-divisive/harmful special case (`research/e4-analytical-backbone.md:12-23`). The new credit-versus-coverage engine therefore needs its own parity surface. But any honest parameter support that permits \(\rho_{proxy}\) near 1, \(b\) near 0, low \(\tau_C\), and nonzero \(\beta\) or \(\tau_D\) has an obvious candidate central-win region. Excluding that region requires evidence, not a “plausibility prior.”

The symmetry gate does not rescue the floor claim. It tested a narrow frozen grid with \(\lambda\in\{.1,.2,.3\}\), latent \(\rho\in\{0,.5\}\) in its primary domain, and only two bundled observation regimes (`audits/2026-07-10/symmetry-gate-preregistration.md:44-59`). It found a pooled median \(\Delta\approx0.025\), below the 0.05 rebuild criterion (`research/claim-and-estimand-contract.md:59-70`). The contract’s permitted claim is correspondingly “positive in every pre-specified cell but small” and mechanism-demonstrative (`research/claim-and-estimand-contract.md:84-92`). That evidence cannot establish a positive minimum over a broader v1.14 region.

**Concrete fix:** Make the sign frontier primary. Solve and plot the set \(\{\theta:E_W[\Delta_O\mid\theta]=0\}\); report the regions where central wins, parity is practically unresolved, and distributed wins. Pre-register a substantively meaningful equivalence band \(|\Delta_O|<\epsilon\), not merely a zero crossing. The headline must be “which institution wins under which conditions.” If a defensible joint region intersects \(\Delta_O<0\), say **“the status quo wins in part of the admissible region”**; do not market a positive floor.

### High 3 — classical Sobol indices answer the wrong question under dependent inputs

> **Quotable issue:** “First-order and total-order Sobol indices are unique variance shares under a product measure. Here, changing one parameter while holding the others’ marginal distributions fixed creates institutionally incoherent worlds and makes the ranking a property of an invented independence assumption.”

The sketch specifies first-order and total Sobol indices (`DESIGN_SKETCH.md:54-57`) while acknowledging that correlations may make a frontier or scenario analysis more honest (`DESIGN_SKETCH.md:84-85`). Classical Sobol/functional-ANOVA decomposition relies on mutually independent inputs. Here dependence is structural, not incidental: proxy quality, central error, and projection/credit bias are likely linked; participation coverage, adverse voice, and report noise are linked; world heterogeneity affects both information channels. Under dependence, conventional pick-freeze estimators can generate impossible combinations, and first-/total-order terms no longer have their usual orthogonal decomposition or “main effect versus interaction” interpretation.

Even with a valid dependence-aware estimator, “which variables matter most” is too causal (`DESIGN_SKETCH.md:56-57`). A variance attribution ranks predictors under one chosen joint distribution. It does not show that intervening on the parameter would move institutional performance by that amount, and a correlated proxy can receive importance for information carried about another variable.

**Concrete fix:**

1. Specify a **joint** distribution or admissible joint set, not marginal ranges plus implicit independence. Preserve posterior/copula dependence where measured; where dependence is unidentified, pre-register several defensible dependence structures and partial-order conclusions that survive all of them.
2. Use dependence-aware **Shapley effects** only as descriptive variance attribution. Report uncertainty and state that correlated inputs share credit according to the Shapley allocation; do not call the result causal “drivers.”
3. Make structured joint scenarios and the sign/parity frontier primary. Retain ordinary Sobol indices, if desired, only as an explicitly artificial independent-input stress test.
4. Report rank stability across joint priors. If the “most important” input changes with a plausible correlation specification, that instability is the finding.

### High 4 — “minimum” and “5th percentile” are not interchangeable floors

> **Quotable issue:** “A minimum is a support-wise robustness bound; a 5th percentile is a prior-weighted tail summary that permits failure in up to five percent of the chosen probability mass. Calling either one ‘the floor’ conceals the difference.”

The method defines the floor as “min (or a low quantile, e.g. 5th percentile)” (`DESIGN_SKETCH.md:58-59`). These support different claims:

- \(\inf_{\theta\in\Theta}E_W[\Delta_O\mid\theta]\) asks whether the sign survives every admissible state and depends on the geometry of \(\Theta\), not prior density.
- \(Q_{.05}\{E_W[\Delta_O\mid\theta]\}\) depends on the entire plausibility prior and can coexist with a nontrivial central-win region.
- \(Q_{.05}\{\Delta_O(\theta,W)\}\) is different again: it mixes uncertainty about conditions with ordinary simulated-world variability.

A finite Monte Carlo sample minimum is not the true minimum and is strongly affected by search coverage and simulator noise. A box minimum under independent marginal ranges may occur at an impossible corner; a minimum over a fitted joint distribution has no robust meaning if the distribution has unbounded or arbitrarily thin support. Meanwhile “average case” (`DESIGN_SKETCH.md:62`) has no population-frequency interpretation when the plausibility prior is an elicited epistemic distribution.

**Concrete fix:** Use distinct names and estimands:

- **robust lower envelope** \(L=\inf_{\theta\in\Theta_{joint}}\mu(\theta)\), where \(\mu(\theta)=E_W[\Delta_O\mid\theta]\);
- **prior-predictive 5th percentile** of \(\mu(\theta)\), never called a floor;
- **central-win probability** \(P_{\theta}[\mu(\theta)<0]\), reported for every admissible joint prior;
- **world-risk distribution** conditional on named \(\theta\), reported separately.

Give optimization error or emulator-validation bounds for \(L\). If the admissible set is not sufficiently grounded to support a worst-case statement, omit the floor rather than replacing it with a quantile.

### High 5 — the proposed GSA conflates parameter uncertainty with world/Monte Carlo noise

> **Quotable issue:** “Sobol analysis of one noisy world-level \(\Delta\) ranks parameters partly by how much Monte Carlo noise happens to remain. A sample minimum then selects the noisiest unlucky run, not the worst institutional state.”

The sketch defines \(\Delta\) “per simulated world” (`DESIGN_SKETCH.md:30-34`), proposes Monte Carlo over \(\theta\), and separately proposes world-cluster intervals for fixed profiles (`DESIGN_SKETCH.md:54-63`). It never defines whether the surface is the conditional mean \(\mu(\theta)=E_W[\Delta\mid\theta]\), a median over worlds, or a raw stochastic response. The existing gate makes the nesting visible: it uses 100 worlds per cell, stores per-world \(\Delta\), and bootstraps the world clusters (`scripts/simulation/e5-sp-symmetry-gate.mjs:102-113,140-155`). The binding contract carefully distinguishes the pre-registered pooled median from the post-hoc ratio-of-sums interval (`research/claim-and-estimand-contract.md:63-68`). v1.14 would erase that discipline if it runs GSA directly on noisy world outcomes.

**Concrete fix:** Pre-register a two-level design. For each outer \(\theta\) draw, use common-random-number world seeds across comparisons and enough inner worlds to estimate \(\mu(\theta)\). Fit/validate a stochastic emulator or use replicated estimators that separate epistemic input variance from aleatory world variance. Give Monte Carlo uncertainty for Shapley/Sobol estimates and for the sign frontier. Define whether the primary functional is conditional mean, median, or a risk measure; do not switch among them after seeing results.

### Medium 6 — Shapley effects are an improvement, not a cure; the analytic frontier should precede any attribution ranking

> **Quotable issue:** “Dependence-aware attribution cannot repair an ungrounded joint distribution. Before asking which input explains variance, ask where the sign changes and whether the result nests the known parity/null cases.”

Shapley effects can allocate explained variance with dependent inputs, but their values still depend on conditional distributions that must be estimated or assumed. They can also split credit in ways that look precise while substantive dependence remains unidentified. Scenario analysis is more honest when only a few joint institutional states are defensible. The E4-v4 parity law demonstrates the right order of operations: derive the sign boundary in a transparent special case, then quantify how finite-sample noise and silent constants deform it (`research/e4-analytical-backbone.md:41-78`; `research/e4-v4-robustness-results.txt:21-28`).

**Concrete fix:** Require this hierarchy before preregistration:

1. nested exchangeable-arm null and unit tests;
2. analytical or numerically solved parity surface for the simplest credit-versus-coverage model;
3. scenario/frontier maps under substantively coherent joint states;
4. robust lower envelope and central-win mass;
5. dependence-aware Shapley attribution as a secondary summary;
6. optional independent-input Sobol benchmark.

## Recommended reframing

The sharpest honest headline is not “a floor above the status quo.” It is:

> **“The model identifies a conditional parity surface: endogenous citizen coverage outperforms evenly spread central appraisal only on one side of that surface; a competent central planner wins on the other. The location of the boundary, not a multiplier, is the estimand requiring measurement.”**

That framing preserves a formalizable contribution even if central wins occupy much of the admissible region. It also respects Path B: the current gate supports a small, conditional mechanism direction, while the magnitude remains uncalibrated and the previous multiplier is retired.
