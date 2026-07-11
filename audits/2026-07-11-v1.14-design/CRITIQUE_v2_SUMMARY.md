# Adversarial critique summary — E4 design sketch v2

## Overall verdict

**NEEDS CHANGES — not ready to preregister.** V2 is a substantial conceptual improvement over v1: it states the correct signed estimand, allows central-win regions, abandons the positive-floor objective, uses typed primitives, separates central value-reading from credit pressure, rejects independent-input Sobol analysis, and narrows the publication claim (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v2.md:6-23,25-35,63-79`). Those are real fixes, not cosmetic edits.

They are not yet operational fixes. The design still lacks one frozen population functional, a complete DGP and executable registry, an identified or bounded transport map, a project-indexed central signal, a distributed observation equation, a defensible joint law/set, and a fresh engine. Neither shipped engine implements `a+b*S+w*(v_p-S_bar)`. One still leads with `D/C` and prints `x`; the other mixes mean per-world ratios, medians, and a ratio-of-sums bootstrap under the same `Delta` label (`scripts/simulation/e4-v4-symmetric-frontier.mjs:59-66,73-82,95-104`; `scripts/simulation/e5-sp-symmetry-gate.mjs:21-23,102-113,140-155`).

The central-arm literature supports a **candidate qualitative model family**, not numeric public-project-value parameters. The supplied foundation itself says the magnitudes do not transport (`research/e4-value-estimation-foundation.md:71-76`), while the design still labels target `a`, `w`, `b`, and the format share `PROXY-ANCHORED` (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v2.md:48-61`). Until target bridge data or explicit transport-discrepancy bounds exist, those target magnitudes are **ASSUMED (proxy-informed)**.

The honest present object is therefore a **proposed theorem-backed benchmark plus a preregistered robustness atlas and measurement plan**. It is not yet an anchored institutional estimate, a full analytic frontier, or a partial-identification result.

## Reproduction and engine inspection

Both named engines were rerun from the current tree. Their outputs match the stored canonical reruns line-for-line.

| Engine | Reproduced result | What it establishes |
|---|---|---|
| `e5-sp-symmetry-gate.mjs` | 18/18 selected cells have positive mean `Delta`, pooled median is `0.025`, and the frozen verdict remains **NO-GO**; the `lambda=0` control remains `0.016` (`audits/2026-07-11-v1.14-design/v2-reproduction-e5-sp-symmetry-gate.txt:82-90`). | Regression evidence for the old sampled-value-plus-credit gate only. Its central arm is reach times a sampled mean plus credit, not the v2 central model (`scripts/simulation/e5-sp-symmetry-gate.mjs:77-90`). |
| `e4-v4-symmetric-frontier.mjs` | The lead table is still `D/C`; it contains central-win cells and later prints `0.95x`, `1.54x`, etc. (`audits/2026-07-11-v1.14-design/v2-reproduction-e4-v4-symmetric-frontier.txt:1-17,47-57`). | Regression evidence for the old harm-weight model. It confirms a live multiplier-shaped reporting path, not v2 compliance. |

## Prior seven must-fixes

| # | Prior must-fix | Status | V2 assessment |
|---:|---|---|---|
| 1 | Fix the estimand and impose a multiplier embargo | **PARTIAL** | The prose correctly defines per-world `Delta_O=(D-C)/O`, parity at zero, and demotes `D/C` (`DESIGN_SKETCH_v2.md:6-14`). But the population functional is not frozen, `O=0` and small/negative `C` are undefined, E5 mixes three functionals, and E4-v4 still leads with multiplier-shaped output. |
| 2 | Replace the positive floor with a parity/reversal objective | **PARTIAL** | The sign map and central-win headline are correctly primary in prose (`DESIGN_SKETCH_v2.md:12-14,81-84`). But `delta` has no value or decision basis, exact parity is conflated with practical equivalence, there is no unresolved state, and no shipped engine produces the promised central-led categorical map (`critique-v2-parity-objective-floor.md:11-61`). |
| 3 | Use typed primitives and a defensible welfare scale | **PARTIAL** | The notation and synthetic-score disclaimer are materially fixed (`DESIGN_SKETCH_v2.md:16-23`). Still missing are a binding unit/zero/observation model and consistency between mean aggregation in v2 and sum-based delivered value in both engines (`critique-v2-dgp-registry-identification.md:9-31`). |
| 4 | Specify the complete DGP and identification strategy | **NOT CLEARED** | Section 4 is a TODO list, not equations or a crosswalk. The displayed `theta` omits most quantities just declared governing, as well as `eta`, planner/project positions, and the format decomposition (`DESIGN_SKETCH_v2.md:41-61`; `critique-v2-dgp-registry-identification.md:9-42`). The zero controls do not jointly establish symmetry. |
| 5 | Build an auditable parameter registry | **NOT CLEARED** | There are no exact supports, extraction artifacts, uncertainty fields, transport maps, or identifying moments. `lambda` is labeled `POSITED`, outside the declared status vocabulary. Transport makes target numeric `a/w/b` assumed, not anchored (`critique-v2-dgp-registry-identification.md:44-85`). |
| 6 | Use dependence-aware, two-level sensitivity | **PARTIAL** | Rejecting product Sobol, separating inner/outer uncertainty, and demoting Shapley are correct (`DESIGN_SKETCH_v2.md:63-72`). But no law, admissible set, conditional sampler, Shapley game, or nested estimator is specified. Identical marginals can yield 99% distributed-win mass, 1% distributed-win mass, or 100% parity solely by changing the copula (`critique-v2-dependence-sensitivity.md:21-35`). |
| 7 | State the publication contribution honestly | **PARTIAL** | V2 correctly concedes that central misperception/projection is established prior art. But it presents an unimplemented anchored model, an unproved analytic extension, and a nonexistent identified set as contributions already in hand (`DESIGN_SKETCH_v2.md:74-79`; `critique-v2-novelty-positioning.md:9-57`). |

**Clearance count: 0 cleared, 5 partial, 2 not cleared.** The conceptual direction is now viable; the preregistration package is not.

## Remaining blockers, ranked

### 1. The target model is not identified, and transport is not bounded

As written, `v_p-S_bar` is not project-indexed. If it is one scalar, only the composite intercept `a+w*(v_p-S_bar)` is identified; it does not implement project-level projection. If made project-specific, separating `b` from `w` requires observed planner values and citizen project means. The 7–36 point, 0.67 point, and 21–50% source results are on different outcomes and scales; none is a structural coefficient in the target equation (`critique-v2-anchored-central-model.md:18-86`; `critique-v2-dgp-registry-identification.md:69-121`).

**Required fix:** index the model by project/planner, separate source and target parameters, and define an explicit transport-discrepancy set that includes attenuation to zero and plausible sign reversal absent bridge data. Report robust central / indeterminate / robust distributed regions over that set. Prefer a same-project bridge study eliciting citizen distributions, planners' own values, and planner forecasts.

### 2. There is no complete executable v2 DGP

The design names costs, budget, reach, quality, credit, hurdle, information allocation, eligibility, and aggregation but does not give their equations, supports, units, dependencies, or code symbols (`DESIGN_SKETCH_v2.md:41-46`). The old engines implement different worlds and central signals, and E5 even contains an unused `WP.eta` (`scripts/simulation/e5-sp-symmetry-gate.mjs:29-49`).

**Required fix:** create `theta_all` for every fixed/varied/numerical quantity, `theta_surface` for plotted axes, a generated theory-to-code crosswalk, a person-level distributed observation equation, and a fresh v2 engine that fails on unregistered literals and unused parameters. Add pathway-inactivation, signal-recovery, and genuine joint-symmetry tests (`critique-v2-dgp-registry-identification.md:123-164`).

### 3. The parity estimand and classification rule are not frozen

`E_W[(D-C)/O]`, `(E[D]-E[C])/E[O]`, and `median_W((D-C)/O)` can have different signs. E5 currently displays or tests all three families (`scripts/simulation/e5-sp-symmetry-gate.mjs:21-23,102-113,146-155`). A two-world construction flips the sign between mean-of-world-ratios and ratio-of-sums (`critique-v2-multiplier-estimand.md:18-37`).

**Required fix:** bind `m(theta)=E_W[(D_W-C_W)/O_W|theta]` or another justified single functional; make estimation, bootstrap, frontier solving, and classification target it. Define `O=0/near-zero` behavior. Separate the exact frontier `m=0` from materiality surfaces `m=+/-delta`, justify `delta` without recycling the historical 0.05 rebuild threshold, and add an unresolved state.

### 4. The advertised analytic generalization is not valid for the proposed model

The old `beta=1-eta` law equates two differential harm weights (`research/e4-analytical-backbone.md:41-60`). The new `a+bS+wZ` signal has no harm-weight parameter and does not nest that model. Under equal costs, a fixed funded share, and elliptical signals, a valid benchmark exists: parity is equality of `Cov(S,X_k)/sd(X_k)` across arms; with project-varying `Z`, this gives an implicit closed-form surface. Eligibility, heterogeneous costs, greedy residual-budget fill, MNAR Bernoulli reports, z-scoring, and credit make the full boundary a numerical expectation over discontinuous selection regions (`critique-v2-parity-boundary-analytic.md:11-170,172-202`).

**Required fix:** claim an analytic benchmark plus numerical full frontier. Either add differential positive/negative valuation loadings that genuinely nest the old law, or retire the “extends `beta=1-eta`” claim.

### 5. The joint law can choose every weighted headline

The conditional frontier does not need a probability law over `theta`; region mass and Shapley effects do. “Joint distribution / admissible set” treats two non-interchangeable objects as alternatives. A set yields robust bounds but no unique Shapley value; a law yields probability-weighted summaries but needs empirical or elicited justification. `A` must not be randomized because v2 itself defines aggregation rules as separate normative estimands (`DESIGN_SKETCH_v2.md:16-20,63-72`).

**Required fix:** make the conditional frontier measure-free and primary. Overlay externally justified admissible sets; report law-specific region mass and Shapley only as secondary. Freeze all candidate dependence structures, conditional samplers, scenario weights, and the exact Shapley value function before exposing replacement-engine outcomes (`critique-v2-dependence-sensitivity.md:35-86`).

### 6. Multiplier quarantine is not enforceable

The written embargo applies `x` specifically to `Delta_O` while retaining `R=D/C`, leaving a formally compliant route to multiplier-first figures. The reproduced legacy engine exercises exactly that route (`v2-reproduction-e4-v4-symmetric-frontier.txt:1-17,47-57`).

**Required fix:** default v2 outputs must not emit `D/C` or any institution-performance `x` suffix. If retained at all, `R` must be a labeled secondary appendix diagnostic after `D/O` and `C/O`, with denominator rules. Mechanically isolate the legacy runner and add output-schema/snapshot checks.

### 7. The standalone novelty claim is premature

Elite misperception, projection, distribution elicitation, and meta-prediction are established. A parity surface also already exists in-repo. Possible genuine novelty is narrower: a sharp theorem for the new matched-information selection problem, a public-project planner/citizen bridge dataset with held-out validation, or a formal identified set. None has yet been delivered (`critique-v2-novelty-positioning.md:9-59`).

**Required fix:** position the current work as a robustness atlas and measurement plan. Upgrade to a standalone comparative-institutions contribution only with theorem and/or target-domain data, after a prior-art search aimed at noisy/bias expert-versus-crowd budgeted selection rather than only F-versus-G perception.

## Single sharpest improvement

Replace **“sweep proxy-anchored target ranges and report the parity surface”** with a **transport-robust partial-identification design**:

1. distinguish source-study coefficients from target project-value coefficients;
2. define a preregistered transport-discrepancy set, with no-transport and adverse cases included;
3. compute lower and upper bounds on the one frozen `m(theta)` over that set; and
4. classify only sign-robust regions as central or distributed, leaving the rest explicitly transport-indeterminate.

This converts the largest current overclaim—calling transported magnitudes anchored—into the paper's most honest and potentially novel object. It also makes “sometimes the central wins” and “the sign is unidentified” equally admissible results.

## Multiplier-relapse risk

**YES — material, despite the improved prose.** The literal `2.2x` claim is gone and `Delta_O` is correctly defined, but the repository still has a named frontier that leads with `D/C`, calls it “advantage,” and emits `x`. E5 also permits estimand drift because different aggregation functionals share one label. Until the v2 runner has a frozen estimand, a `Delta_O`-first schema, no default ratio output, mechanical legacy isolation, and snapshot/lint enforcement, the retired multiplier can return through executable output without violating the current prose narrowly read.

## Dimension files

- `critique-v2-multiplier-estimand.md`
- `critique-v2-parity-objective-floor.md`
- `critique-v2-anchored-central-model.md`
- `critique-v2-parity-boundary-analytic.md`
- `critique-v2-dgp-registry-identification.md`
- `critique-v2-dependence-sensitivity.md`
- `critique-v2-novelty-positioning.md`
