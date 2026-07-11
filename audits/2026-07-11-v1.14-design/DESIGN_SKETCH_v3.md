# v1.14 / E4 design — v3 (supersedes v2) — transport-robust partial identification of the parity boundary

> Rewrites v2 to close all seven blockers in `CRITIQUE_v2_SUMMARY.md`. The object is no longer "sweep anchored
> ranges" but a **transport-robust partial-identification** of the credit-vs-coverage **parity boundary**, with a
> **single frozen estimand**, a **complete executable DGP**, an **analytic benchmark + numerical frontier**, and a
> **mechanical multiplier embargo**. NOT yet pre-registered — this is the spec to be attacked until clean.

## 0. Object (honest, potentially novel)
Characterize, for a matched-information budgeted-selection problem, the region of institutional/behavioral
conditions where **coverage-routed** selection delivers more true value than **central proxy** selection, where
less, and — crucially — where the **available evidence cannot identify the sign**. The primary output is a
**sign-robust partial-identification map**: `{robust-distributed}` / `{robust-central}` / `{transport-
indeterminate}` / `{materially-negligible}`. No multiplier; "the central wins here" and "the sign is unidentified
here" are first-class results.

## 1. THE FROZEN ESTIMAND (one functional, committed)
Per world `W` (a sampled economy of projects + agents) and parameter vector `θ`:
```
D_W = Σ_{j ∈ fund^D_W} S_j ,   C_W = Σ_{j ∈ fund^C_W} S_j ,   O_W = Σ_{j ∈ fund^O_W} S_j
```
where `S_j` is the project's declared social-value score, `fund^·_W` the greedy funded set of each arm, `O` the
full-information greedy reference. **The single estimand is the per-world-ratio expectation**
```
m(θ) = E_W[ (D_W − C_W) / O_W | θ ] ,   parity at m = 0 .
```
- **Degeneracy rule (frozen):** worlds with `O_W ≤ o_min` (o_min a pre-set small positive floor on total
  reference value) are **excluded from the ratio** and reported as a separate share; `C_W < 0`/`D_W < 0` are
  admissible (they are signed value sums) and do not require special handling because the denominator is `O_W>0`.
- **Estimation:** Monte-Carlo over worlds at fixed `θ`; `m̂(θ)` = sample mean of per-world ratios; world-cluster
  bootstrap CI (covers **inner** simulation variability only).
- **Exact frontier** = `{θ : m(θ)=0}` (a set, computed by root-finding along `θ_surface` axes). **Materiality band**
  `|m(θ)| ≤ δ` is a *separate* overlay; `δ` is fixed **from delivered-value units** (a pre-set fraction of the
  reference `O`, justified in-domain), **not** the retired 0.05 rebuild threshold. States:
  `robust-distributed (m>δ)`, `robust-central (m<−δ)`, `materially-negligible (|m|≤δ)`, and (after §4)
  `transport-indeterminate`.
- **Secondary diagnostics only:** `D/O`, `C/O` may be reported; `R=D/C` is **forbidden by default** (see §9).

## 2. Typed primitives (honest scale)
`u_ij` individual valuation of project `j` (latent random utility), cross-person law `F_j` (mean `μ_j`, dispersion
`σ_j`). `S_j = A(u_·j)` a **synthetic model score** under a **declared** aggregation `A` (primary: mean; other `A`
are **separate normative estimands**, never randomized). `M^C_j`, `M^D_j` the arms' estimates of `S_j`. No claim of
interpersonally-comparable cardinal welfare; scale, zero, and observation model stated in the crosswalk (§6).

## 3. COMPLETE executable DGP (equations, not a TODO)
- **World / projects:** `K` projects; costs `c_j ~ U[c_lo,c_hi]`; reach `ρ_j` (interested population) from a
  stated law; budget `B = φ · Σ_j c_j`.
- **Individual value & aggregate:** `u_ij = q_j + ε_ij`, `q_j` project quality `~ N(m_q, s_q)`, `ε_ij ~ F_ε`
  (dispersion `σ`); `S_j = mean_i(u_ij)` (primary `A`).
- **Distributed observation (person-level):** each interested `i` reports w.p. `p` if `u_ij ≥ 0`, `p(1−β)` if
  `u_ij < 0` (adverse voice bias `β`); report noise `+N(0,τ_D)`; `M^D_j = Σreports/p` (Horvitz–Thompson).
- **Central estimation (project-indexed, the anchored form):**
  ```
  M^C_j = a + b · S_j + w · (v_p − S̄_j) + η_j ,   η_j ~ N(0, τ_C)
  ```
  where `v_p` is the **planner's own position** (fixed per run) and `S̄_j` the project-population mean the planner
  projects away from; `w·(v_p − S̄_j)` is **project-indexed directional projection** (so `w` is separately
  identified from the intercept `a`). A **reducible/format share** `κ ∈ [0,1]` splits `a = κ·a_fmt + (1−κ)·a_irr`.
- **Central ranking:** `R^C_j = (1−λ)·z(M^C_j/c_j) + λ·z(P_j/c_j)`; credit `P_j` from a stated law; `λ` bounded
  credit pressure. Value-reading `M^C_j` is kept **separate** from credit `λ` (per the contract/gate).
- **Selection:** each arm funds greedily by its score among projects its **own** estimate deems eligible
  (`M^·_j > 0`), under budget `B`; delivered value scored on true `S_j`. Opportunity-cost hurdle `h` enters
  eligibility/scoring as `S_j − h·c_j` uniformly across arms.
- **Negative controls (must jointly hold):** at `w=0, a=0, λ=0` and symmetric noise, `m(θ) → 0` within MC error
  (no residual asymmetry); each control isolates one channel.

## 4. SOURCE ≠ TARGET, and the transport-discrepancy set (the core honesty move)
The literature gives **source-domain** coefficients on **different outcomes/scales** (Broockman–Skovron
7–36 pts; Dias–Lucas–Sheffer 0.67; Gagnon-Bartsch ~21–50%). They are **NOT** structural coefficients of the target
value-of-project equation. So the target `(a, w, b, κ)` are **ASSUMED (source-informed), not anchored.**
- Define normalized source estimates `(â_s, ŵ_s, b̂_s)` (rescaled to the model's units, with the rescaling stated).
- Define a **pre-registered transport map**: target `= diag(g) · source`, with **transport factors `g` ranging over
  a committed set `T`** that INCLUDES **attenuation to zero** (`g=0`, "no transport") and **plausible sign
  reversal** (`g<0`) for `w` and `a`, and a stated bounded range for `b` (responsiveness is the most transportable).
- **Partial identification:** for each `θ_surface` point, compute
  ```
  m_lo(θ_s) = min_{g∈T} m(θ_s, g) ,   m_hi(θ_s) = max_{g∈T} m(θ_s, g)
  ```
  (over the transport set, holding non-transported parameters at their stated laws). Classify:
  `robust-distributed` if `m_lo > δ`; `robust-central` if `m_hi < −δ`; else **`transport-indeterminate`**.
  → The paper's honest headline is this **map of sign-robust vs indeterminate regions**, with a same-project bridge
  study (planner value `v_p`, citizen distributions, planner forecasts) named as the only way to shrink `T`.

## 5. Analytic benchmark (scoped) + numerical full frontier — retire the β=1−η claim
The old `β = 1−η` law equates two **harm weights** and does **not** nest `M^C = a+bS+w(v_p−S̄)`. **Retired.** Instead:
- **Analytic benchmark (stated assumptions):** equal costs, fixed funded share, elliptical signals, no eligibility
  gate, no credit → arm-`k` selection value ∝ `Cov(S, X_k)/sd(X_k)`; **parity ⇔ equality of that ratio across
  arms**, giving an **implicit closed-form surface** in `(a,b,w,β,σ,…)`. Derivation to be written and checked.
- **Numerical full frontier:** with eligibility, heterogeneous costs, greedy residual-budget fill, MNAR reports,
  z-scoring, and credit, the boundary is a **numerical expectation over discontinuous selection regions**; the
  analytic benchmark is the sanity check / limiting case, not the claim.

## 6. θ registry + theory→code crosswalk (auditable)
- `θ_all` — **every** fixed/varied/numeric quantity: `K, c_lo, c_hi, φ, m_q, s_q, F_ε, σ, p, β, τ_D, v_p, τ_C, a,
  b, w, κ, λ, P-law, ρ-law, h, o_min, δ, T (transport set), A, seed, n_worlds`.
- `θ_surface` — the plotted axes (default: the transport-critical `w, a` and the distributed weakness `β, σ`).
- **Crosswalk** (generated): construct → code symbol → generating/observation equation → unit → support → source →
  status ∈ {OBSERVED, ESTIMATED, PROXY-INFORMED(bounded via `T`), ASSUMED, NORMATIVE}. **`λ` = ASSUMED (posited).**
  Target `a,w,b` = **PROXY-INFORMED via `T`** (bounded, not point). Ranges set **outcome-blind**.

## 7. Sensitivity — measure-free frontier primary; law/set secondary
- **Primary:** the conditional frontier and the partial-ID map are **measure-free** (no probability law over `θ`).
- **Secondary (only):** region-mass and dependence-aware **Shapley effects** require an *externally justified*
  **admissible set** (for bounds) or **law** (for weighted mass); both, plus the conditional samplers and the exact
  Shapley value function, are **frozen before running**. `A` is **not** randomized (normative). Report **inner**
  (world) vs **outer** (θ / transport) uncertainty separately, and the four kinds (simulation / source-estimate /
  model-form / transport).

## 8. Fresh v3 engine (spec) + mechanical embargo
- New engine implements §1–§3 exactly; **fails on any unregistered literal or unused parameter**; emits a
  **`Δ_O`-first output schema** (per-cell `m̂`, `[m_lo,m_hi]`, class); **never emits `D/C` or any institution-
  performance `×` suffix** by default. Snapshot + schema/lint tests in CI.
- **Legacy isolation:** `e4-v4-symmetric-frontier.mjs` (leads with `D/C`, prints `×`) and the old gate are moved
  behind a `legacy/` guard, run only as explicit regression checks, never as v1.14 evidence.
- Negative-control tests (§3) and estimand-consistency test (one functional only) are part of CI.

## 9. Reporting embargo (binding + mechanical)
No `×` for any institution-performance quantity; no `2.2×` example; no state→magnitude arrow; no positive-floor
headline; no empirical-effect language without target-domain identification/validation. Lead with the
partial-ID map, including `robust-central` and `transport-indeterminate` regions. Enforced by the output schema.

## 10. Positioning (honest)
This is a **theorem-backed benchmark + a pre-registered transport-robust robustness atlas + a measurement plan** —
not an anchored institutional estimate. Standalone comparative-institutions novelty requires the analytic theorem
**and/or** target-domain bridge data. Prior-art to run: **noisy/biased expert-vs-crowd *budgeted selection*** (not
only F-vs-G perception).

## 11. What to attack next
- Is `m(θ)=E_W[(D−C)/O]` the right single functional, or does the `O_W` denominator + exclusion bias the sign?
- Is the transport set `T` (incl. 0 and sign-reversal) the honest identified region, or still a hidden choice?
- Does the project-indexed `w·(v_p−S̄_j)` actually separate `w` from `a` under the selection nonlinearity?
- Is the analytic-benchmark derivation correct, and are its assumptions clearly the *limiting case* not the claim?
- Any remaining path for the multiplier to reappear through output?
