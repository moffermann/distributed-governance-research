# v1.14 / E4 design sketch — v2 (supersedes DESIGN_SKETCH.md) — DRAFT for adversarial critique

> Rewrites v1 per Codex's 7 must-fixes (`CRITIQUE_SUMMARY.md`) and anchors the central arm to the harvested
> literature (`E4-empirical-anchors.md`, `research/e4-value-estimation-foundation.md`). NOT pre-registered.

## 0. Object — a PARITY SURFACE, not a multiplier
- **Primary estimand:** `Δ_O = (D − C)/O` per world. **Parity at 0**; distributed-win `>0`; **central-win `<0`**.
  Reported as a **signed fraction / percentage points** of the full-information greedy reference `O` (a level, not
  an optimum). **Never appended with "×".** A pre-registered practical-equivalence band `[−δ, +δ]` around 0.
- `R = D/C` (parity 1, the retired ratio) appears **only** as a clearly-separate secondary diagnostic, always
  co-reporting `D/O` and `C/O`. **No "2.2×" anywhere** (example, placeholder, profile, title, figure).
- **Primary OUTPUT = the sign/parity map** over the parameter space: `{θ: central wins}` / `{≈ parity}` /
  `{θ: distributed wins}`, **led by the central-win region**. *Sometimes the status quo wins* is an allowed, even
  headline, result. The **location of the boundary** — not a magnitude — is the object.

## 1. Typed primitives (honest scale; no interpersonal cardinal welfare)
- `u_ij` — individual valuation of project `j` (latent random utility); its cross-person distribution `F`, mean
  `μ_j`, dispersion `σ_j`.
- `S_j^A = A(u_·j)` — a **synthetic model score** under a **declared** aggregation `A` (primary: the mean).
  **Not "true social value".** Alternative `A` = **separate normative estimands**, not draws from one prior.
- `M_j^C`, `M_j^D` — central / distributed estimates of `S_j^A`. `R_j^C` — central ranking objective.
- Delivered value scored on `S_j^A`; each arm funds a greedy set under a shared budget; eligibility by each arm's
  **own noisy estimate** (no oracle gate); `O` = full-information greedy reference.

## 2. The central arm — LITERATURE-ANCHORED estimation model (the key change from v1)
Replaces v1's ad-hoc `ρ_proxy/τ_C`:
```
M_j^C  =  a  +  b · S_j^A  +  w · (v_p − S̄)  +  η_j
R_j^C  =  (1 − λ) · z(M_j^C / cost)  +  λ · z(P_j / cost)
```
- `b` responsiveness (near-linear; Broockman–Skovron); `a` **systematic bias intercept** (anchor ~7–36 pts on a
  0–100 scale / ~0.67 on an ideology scale); `w·(v_p − S̄)` **directional projection** signed by the planner's
  own position vs the mean (Gagnon-Bartsch reduced-form ~21–50%; Dias–Lucas–Sheffer); `η` noise. A **reducible
  (format) component** of `a` is separated from the irreducible part (D-L-S: distribution-elicitation halves `a`).
- Competent value-reading `M_j^C` is kept **separate from** bounded credit pressure `λ` (as the contract/gate require).

## 3. The distributed arm
Coverage-routed: aggregates actual citizen reports of `u_ij` with adverse voice bias `β`, participation `p`,
report noise `τ_D` — reads `F` more directly than the central proxy, at the cost of `β` and sampling variance.

## 4. Full DGP + crosswalk (don't hide constants outside θ)
Enumerate **all** governing quantities (do not bury them): `N`, `K`, costs, budget share, reach/exposure
distribution, project-quality location & spread, credit generation `P`, `λ`, opportunity-cost hurdle `h`,
information allocation, eligibility rule, aggregation `A`. Publish a **theory→code crosswalk** (construct, symbol,
generating/observation equation, unit, support, source, status). Build a **fresh adversarial symmetry gate** with
**negative controls**: `λ=0`, `w=0`, `a=0` should each collapse the relevant asymmetry.

## 5. θ and the parameter registry (some now PROXY-ANCHORED)
`θ = (a, w, b, β, σ_F, p, τ_D, λ, A)`. Ranges set **outcome-blind**; status ∈ {OBSERVED, ESTIMATED,
PROXY-ANCHORED, ASSUMED, NORMATIVE}:

| θ | status | anchor / note |
|---|---|---|
| `a` (bias intercept) | PROXY-ANCHORED (range) | B-S ~7–36 pts; D-L-S ~0.67 — **transport to project value UNVERIFIED** |
| `w` (projection) | PROXY-ANCHORED (sizable, directional) | Gagnon-Bartsch ~21–50%; D-L-S directional |
| `b` (responsiveness) | PROXY-ANCHORED (~responsive) | B-S near-linear |
| format/reducible share of `a` | PROXY-ANCHORED (~½) | D-L-S 0.67→0.19 |
| `σ_F`, `F` shape | ASSUMED / app-elicitable | Dias 2025: point-estimates exaggerate dispersion |
| `β, p, τ_D` | ASSUMED / PB-informed | participatory-budgeting demographics |
| `λ` (credit pressure) | POSITED | frontier pending project-level measurement |
| `A` (aggregation) | NORMATIVE (declared) | mean primary; alternatives = separate estimands |

## 6. Method — dependence-aware, two-level
- Specify a **joint distribution / admissible set** over θ that respects known dependence (e.g. `w`'s sign tied to
  `v_p − S̄`; the format component tied to `a`). **Independent-input Sobol is ruled out** (it would fabricate
  incoherent worlds).
- **Primary:** the **parity frontier** + named **institutional scenarios** (state archetypes: high-projection /
  weak-proxy vs low-projection / strong-proxy). **Secondary:** dependence-aware **Shapley effects** for variance
  attribution (not causal "drivers").
- Separate **inner** (world variability at fixed θ) from **outer** (θ) uncertainty; report the four kinds
  (simulation / anchored-θ / model-form / transport). A world-cluster interval covers only simulation variability.
- **Pre-register** the joint/grid, decision rule, parity band, and negative controls **before running**.

## 7. Novelty positioning (honest)
Not "GSA on a toy model". The contribution is (a) a **literature-anchored central-arm estimation model** (the
`a + b·S + w·(v_p−S̄)` form, new *inside* a mechanism-design/institutional-comparison simulation); (b) the
**credit-vs-coverage parity boundary** characterized analytically (extend the E4-v4 law `β = 1−η`) and numerically;
(c) **partial identification** — which boundary parameters are proxy-anchored vs open — with the transport caveat.
Positioned as a **comparative-institutions robustness + measurement-map** paper, not an impact evaluation.

## 8. Reporting embargo (binding)
No "×" notation for `Δ_O`; no "2.2×" example; no state→magnitude arrow; no positive-floor headline over assumed
supports; no empirical-effect language without external identification + validation. Lead with the parity map,
including where the **central wins**.

## 9. What we most want attacked
- Is transporting the **political-opinion** bias magnitudes to **project value** defensible, or does it mis-size
  `a`/`w`? What's the honest way to bound the transport error?
- Can the parity boundary be **derived analytically** for `M_C = a + b·S + w·(v_p−S̄)` vs coverage, or only
  simulated? Is there a closed form generalizing `β = 1−η`?
- Does the **joint-distribution** choice over θ smuggle the answer? How to keep it outcome-blind?
- Is "partial identification" honest given the transport gap, or is everything still ASSUMED once transported?
- Does anything here still relapse into the retired multiplier?
