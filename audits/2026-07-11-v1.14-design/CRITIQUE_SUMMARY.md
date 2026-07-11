# Adversarial critique summary — v1.14 design sketch

## Overall verdict

**Formalizable only with major changes; not honest or defensible as-is.** The useful core is a conditional comparison of two information-routing mechanisms and the frontier where their relative performance changes sign. That can become a rigorous model-criticism and research-design contribution. The present proposal instead tries to turn an unmeasured, incomplete structural model into a positive “floor” and named conditional magnitudes. That is not supported.

As written, v1.14 is mathematically executable but not yet a coherent estimand, identified model, empirically grounded uncertainty analysis, or standalone publishable contribution. If the changes below are not made, the design is **not viable as a quantitative reframe**; it should remain an internal robustness appendix to the Path B architecture/mechanism paper.

The decisive evidence is adverse, not ambiguous:

- The sketch defines \(\Delta=(D-C)/O\), whose parity point is **0**, but later treats \(\Delta\le1\) as a central win and proposes “\(2.2\times\)” output (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH.md:30-34,65-70,81-83`). Those latter conventions belong to \(D/C\), the retired ratio. The primary outcome is internally inconsistent before any sensitivity method is chosen.
- The proposed range table contains no numeric ranges and no completed `MEASURED` tags (`DESIGN_SKETCH.md:36-52`). The controlling contract says the value units, hurdle, project generator, appraisal errors, and sponsor–public-value relationship remain uncalibrated (`research/claim-and-estimand-contract.md:47-62`). No empirical positive floor exists to report today.
- The inherited model family already contains central wins. E4-v4 explicitly defines values below one as central wins (`scripts/simulation/e4-v4-symmetric-frontier.mjs:82-85`); 11 of its 25 displayed grid cells are below one (`research/e4-v4-symmetric-frontier-results.txt:6-14`). Its legacy analytic special case has a parity locus and a central-winning side, not a distributed floor (`research/e4-analytical-backbone.md:41-64`).
- The canonical gate rerun reproduces 18/18 positive primary cells but a pooled median \(\Delta=0.025\), below the 0.05 criterion, hence **NO-GO** (`audits/2026-07-11-v1.14-design/canonical-symmetry-gate-rerun.txt:82-90`). The binding interpretation is therefore a small conditional mechanism direction, not authority to search a new assumption surface for a favourable magnitude (`research/claim-and-estimand-contract.md:59-70,84-92`).

## Must-fix issues before pre-registration, ranked

### 1. Fix the estimand and impose a multiplier embargo

Reserve \(\Delta_O=(D-C)/O\) for the primary estimand, with parity at 0, distributed win above 0, and central win below 0. Report it as a signed fraction or percentage points of the full-information greedy reference; never append `×`. If \(R=D/C\) is retained at all, make it a clearly separate secondary diagnostic with parity at 1 and always co-report \(D/O\) and \(C/O\). Do not use `2.2×` as a placeholder, example, profile output, title, or figure annotation.

This is a blocking defect, not editorial polish. The old E4 engine computes \(D/C\), while the controlling gate computes \((D-C)/O\) (`scripts/simulation/e4-v4-symmetric-frontier.mjs:59-64`; `scripts/simulation/e5-sp-symmetry-gate.mjs:102-113`). Calling both `Δ` recreates the retired result through a units error.

### 2. Replace the positive-floor objective with a parity/reversal objective

Make the primary output the sign map

\[
\{\theta:E_W[\Delta_O\mid\theta]<0\},\quad
\{\theta:E_W[\Delta_O\mid\theta]\approx0\},\quad
\{\theta:E_W[\Delta_O\mid\theta]>0\}.
\]

Derive or numerically solve the new credit-versus-coverage parity surface and lead with all central-win regions. Pre-register a practical-equivalence band around zero. A positive “floor” is forbidden unless an empirically justified joint support excludes every central-winning state. A minimum over an assumed box is only a lower envelope of that box; a fifth percentile is a prior-weighted tail statistic and must never be called a floor (`DESIGN_SKETCH.md:56-59`).

The honest headline must allow: **sometimes the status quo wins.** A design that suppresses that result by range choice has simply moved the invented-range trap one level down.

### 3. Rewrite the theory with typed primitives and a defensible welfare scale

The present “no guarantee \(G=F\)” claim is ill-typed: \(F_{ij}\) is an individual valuation, `F` is also reused for its distribution, \(S_j=A(\{F_{ij}\})\) is an aggregate, and \(G_j\) is said to estimate that aggregate (`DESIGN_SKETCH.md:17-28`). Replace these with distinct objects:

- individual welfare change \(u_{ij}\);
- social-value index \(S_j^A=A(u_{1j},\ldots,u_{nj})\);
- central epistemic signal/estimate \(M_j^C\);
- distributed estimate \(M_j^D\);
- separate central ranking objective \(R_j^C=r(M_j^C,P_j;\lambda)\).

Do not put political self-interest inside a “belief.” The contract correctly separates competent value reading from bounded credit pressure in ranking (`research/claim-and-estimand-contract.md:32-37`), and the gate implements that separation (`scripts/simulation/e5-sp-symmetry-gate.mjs:77-90`).

The theory must also state the common unit, zero, admissible transformations, interpersonal comparability assumptions, affected population, counterfactual, and observation model. Stevens, McFadden, and Bollen do not turn Likert responses or latent choice utilities into interpersonally comparable cardinal welfare. If no common-numeraire or validated latent measurement model is available, call \(S_j^A\) a synthetic model score, not “true social value,” and drop real-world magnitude language. Treat alternative aggregation rules as separate normative estimands, not draws from one empirical prior.

### 4. Specify the complete DGP and an identification strategy; do not hide constants outside θ

The proposed “small vector” omits quantities that mechanically govern the output: the credit weight \(\lambda\), opportunity-cost hurdle \(h\), costs, budget share, reach/exposure distribution, project quality location and spread, credit generation, proposal-pool composition, population/project counts, information allocation, and eligibility rule. The current gate fixes or sweeps those objects (`scripts/simulation/e5-sp-symmetry-gate.mjs:29-49,60-65,116-117`). Omitting them does not make the model low-dimensional; it conditions the result on hidden assumptions.

Publish a theory-to-code crosswalk: construct, code symbol, generating/observation equation, unit, support, data source, identifying restriction, and status. Separate:

1. welfare/world generation;
2. distributed exposure, MNAR participation, report error, and strategic/correlated reporting;
3. central proxy measurement, attention, projection, and residual error;
4. ranking/choice, including bounded credit weight;
5. common budgets, costs, eligibility, and portfolio rule.

Preserve the governing symmetry conditions or justify every departure with separately identified evidence (`research/claim-and-estimand-contract.md:24-37`). The old gate does not validate the proposed `ρ_proxy/b/τ_C/τ_D` model: it uses a latent credit correlation, explicit `λ`, shared `τ`, net value \(S-hc\), and matched expected appraisal budgets (`scripts/simulation/e5-sp-symmetry-gate.mjs:60-98`). v1.14 needs a fresh adversarial symmetry gate and negative controls.

### 5. Replace bibliography-shaped provenance with an auditable parameter registry

At present, **no empirical θ input is defensibly `MEASURED`**. `A` is normative; the others are assumed or measurable in principle. In particular:

- PB turnout does not identify project-level affected-party coverage `p`;
- participant demographics do not identify sign-dependent nonresponse `β`;
- participation rates cannot identify report noise `τ_D`;
- Likert dispersion does not identify cardinal `σ_F` or its structural/idiosyncratic split;
- generic false-consensus, elite–mass, or proxy studies do not identify the planner-specific shift `b` or `ρ_proxy` in this simulator.

Before freezing supports, create a registry with the mathematical definition, target population, numeric support, exact source/table/variable, extraction code, sampling and measurement uncertainty, transport argument, dependence structure, and status (`OBSERVED`, `ESTIMATED`, `PROXY-ANCHORED`, `ASSUMED`, or `NORMATIVE`). Range setting must be outcome-blind. Historical gate cells are scenarios, not range evidence.

### 6. Use dependence-aware, two-level sensitivity analysis

Ordinary first-/total-order Sobol indices assume a product input measure for their standard interpretation. Here proxy quality, planner bias, central error, participation, voice bias, report noise, reach, and visibility share common causes. An independent-input Sobol design would generate institutionally incoherent worlds and attribute importance under an invented independence assumption.

Specify a joint distribution or admissible joint set. Make joint scenarios and the parity frontier primary; use dependence-aware Shapley effects only as secondary descriptive variance attribution, with rank stability across plausible dependence structures. Do not call variance shares causal “drivers.”

Separate the outer uncertainty in θ from inner world variability. For each θ, define whether the surface is the conditional mean, median, ratio of expectations, or another risk functional. Use common random numbers and replicated worlds; quantify emulator/optimization and Monte Carlo error. Report separately:

- simulation variability at fixed θ and fixed model;
- uncertainty in measured/elicited θ;
- model-form/specification uncertainty;
- external/transport uncertainty.

A world-cluster interval covers only the first. It can become arbitrarily narrow by simulating more worlds while ignorance about the institution remains unchanged.

### 7. State the publication contribution honestly

Sobol indices, Monte Carlo priors, named scenarios, and output quantiles are standard global-sensitivity practice. Applied to this static stochastic microsimulation, they are useful model criticism, not a new method or mechanism-design result. The existing gate already sweeps the principal mechanism axes and gives the directional result (`scripts/simulation/e5-sp-symmetry-gate.mjs:116-165`). A denser surface mainly adds resolution.

The publishable upgrade is **theorem plus data**: derive sharp or sufficient credit-versus-coverage dominance conditions under matched information budgets; show which boundary moments are identified or partially identified by PB/appraisal data; validate on held-out jurisdictions or projects; and compare against credible deployed alternatives such as adaptive central appraisal, approval/knapsack PB, and hybrid/stratified institutions. Without that upgrade, position v1.14 as a preregistered robustness atlas and pilot-measurement plan in an appendix.

## Single sharpest improvement to the framing

Replace **“the architecture has a floor under plausible/measured assumptions”** with:

> **The model defines a conditional parity surface: coverage-routed appraisal performs better on one side, competent central appraisal performs better on the other, and the location of that boundary—not a multiplier—is the object that requires measurement.**

That framing remains valuable if the central-winning region is large, if no institution dominates robustly, or if current data leave the sign unidentified. It turns an attempted magnitude recovery into a falsifiable comparative-institutions question.

## Does v1.14 risk resurrecting the retired multiplier?

**Yes—explicitly and materially.** The combination of a named real-world-sounding state, an arrow to `2.2×`, brackets that resemble an empirical confidence interval, and a “floor” that sounds like a guarantee recreates the old claim's visual and inferential hierarchy (`DESIGN_SKETCH.md:58-70`). Nearby “model-internal” caveats do not undo that first-order message. The contract retired the ~2× family because it arose from unmeasured asymmetries and forbids treating simulation output as a real-world multiplier (`research/claim-and-estimand-contract.md:59-80`).

The relapse risk becomes acceptable only with a binding reporting rule: **no multiplier notation for \(\Delta_O\), no `2.2×` examples, no state-to-magnitude arrow, no positive-floor headline over assumed supports, and no empirical-effect language without external identification and validation.**

