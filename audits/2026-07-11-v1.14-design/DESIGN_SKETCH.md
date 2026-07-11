# v1.14 design sketch — E4 as a mechanism-governed surface (DRAFT for adversarial critique; NOT pre-registered)

> Status: **working draft to be attacked**, not a pre-registration and not committed as one. The point of this
> document is to be torn apart by Codex before anything is frozen.

## 0. The reframe

We stop asking "what multiplier does the architecture deliver?" (a fixed number — retired) and instead ask:
**how does the distributed-vs-central delivered-value advantage Δ behave as a surface governed by the
credit-versus-coverage mechanism?** We characterize the surface, report its **floor under plausible/measured
assumptions**, its **sensitivity structure** (which parameters move it), and **conditional intervals for named
"state profiles"**. We lead with the floor; best-case is presented as explicitly optimistic. The deliverable is
**a map (surface + sensitivity + conditional CIs), not a point.**

## 1. Theoretical primitives

- **F_ij** — person *i*'s latent valuation of project *j*, fixed person/instant/context/scale: a **latent random
  utility** (McFadden 1974), latent-variable-estimable (Bollen 2002), on a defined measurement scale (Stevens
  1946). Modeled as a random variable with distribution F (uncertainty about a unique latent value, or genuine
  internal stochasticity — a stated modeling choice).
- **S_j = A({F_ij})** — the project's true social value under a **declared aggregation rule A**.
- **G_j** — the central planner's *belief/estimate* of S_j, built from proxies + judgment + self-interest:
  S_j filtered through **measurement error + systematic bias** (Bollen 2002; Stiglitz 2017 info asymmetry;
  Charité–Fisman–Kuziemko 2015 reference points; false-consensus, Ross et al. 1977).
- **Distributed estimate Ŝ_j^D** — recovered from citizen reports (coverage p, adverse voice bias β, noise τ_D).
- **Central estimate Ŝ_j^C = G_j** — proxy quality ρ_proxy, projection bias b, noise τ_C.
- Key claim to defend: **not provable by definition that F ≠ G** (could coincide), but **without strong
  assumptions (full information, perfect measurement, zero bias) there is no guarantee G = F.**

## 2. Estimand

Per simulated world: **Δ = (D − C)/O**, where D, C are delivered TRUE aggregate value (S) over each arm's
funded set and O is a full-information greedy reference level (not an optimum). The **primary object is the
surface Δ(θ)** and its summaries — NOT a point estimate.

## 3. θ — the governing parameters (interpretable; ranges sourced, not invented)

Do **not** sweep F and G as free distributions (that makes any answer achievable — the "invented range one
floor down" trap). Sweep the small vector θ that governs the F↔G relationship:

| θ_i | governs | plausible-range source |
|---|---|---|
| ρ_proxy | share of structural cross-project value the proxy tracks (μ vs ε) | proxy↔outcome studies; else ASSUMED (flagged) |
| b | projection/false-consensus shift of G toward the planner's own value / claimable credit | elite–mass gap (Broockman–Skovron 2018); Ross et al. 1977 |
| τ_C | central random error | partial / ASSUMED |
| β | adverse voice bias (diffuse-harmed under-participation) | PB participation demographics |
| p, τ_D | distributed coverage / report noise | PB participation rates |
| σ_F, ε-share | dispersion of individual valuations; idiosyncratic vs structural split | **elicitable (Likert dispersion)**; else ASSUMED |
| A (aggregation) | utilitarian sum (PRIMARY, declared) vs distributional-weight variants (ROBUSTNESS scenarios) | normative choice, stated |

Each θ_i is tagged **MEASURED** (with a citation/plan) or **ASSUMED** (flagged), and the sensitivity analysis
must show whether conclusions hinge on the ASSUMED ones.

## 4. Method

1. **Global sensitivity analysis:** Monte-Carlo over a *pre-registered plausibility prior* on θ; variance-based
   **Sobol indices** (first-order + total) to rank the drivers of Δ. This yields "which variables matter most."
2. **Floor:** the load-bearing claim = min (or a low quantile, e.g. 5th percentile) of Δ over the plausible
   region — "under plausible/measured assumptions the architecture does not fall below X vs the status quo."
3. **Conditional profiles:** fix θ to named **state archetypes** (e.g. high-contestation/low-proxy-quality vs
   consensus/high-proxy-quality); report Δ point + **95% world-cluster Monte-Carlo interval**.
4. **Average case:** expectation of Δ over the plausibility prior. **Best case:** favourable corner, labelled optimistic.
5. Grid/prior and decision rules **frozen before running** (pre-registration), same discipline as the symmetry gate.

## 5. Honesty guardrails (load-bearing)

- Δ(θ) is **model-internal / conditional** unless θ is measured; MC intervals are **DGP-conditional, not
  empirical**, and must be labelled so (as in the gate).
- **Lead with the floor + the sensitivity structure**; the conditional "state X → 2.2× [CI]" is a *model output
  conditional on θ for that profile*, not a real-world magnitude; best-case is never a headline.
- Range provenance is explicit: MEASURED (cite) vs ASSUMED (flag); conclusions that depend only on ASSUMED
  parameters are marked as such.
- The **aggregation rule is declared**; the model's silence on redistribution/equity is stated.
- Claim wording: "the magnitude the mechanism produces under stated/measured conditions," never "the
  architecture delivers X×."

## 6. Open questions we most want attacked

- Is the θ parameterization **honest and identifiable**, or does it still smuggle the answer in through the
  choice of ranges? Where exactly?
- Are the "MEASURED" tags defensible, or aspirational? Which parameters are truly measurable pre-deposit?
- Does the **floor** claim survive, or can an adversary drive Δ ≤ 1 (central wins) inside the *plausible* region
  — and if so, is that the honest headline?
- Is variance-based Sobol the right sensitivity tool here, or is something else (e.g. scenario-based, or a
  frontier/parity-locus analytic like E4-v4's β=1−η) more honest given the correlations among θ_i?
- Is this genuinely novel, or a standard global-sensitivity/uncertainty-quantification exercise dressed up?
  What is the actual contribution beyond "we did GSA on a stylized model"?
- Does anything here reopen the retired-multiplier failure mode in a new disguise?
