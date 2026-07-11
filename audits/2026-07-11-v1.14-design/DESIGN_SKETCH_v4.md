# v1.14 / E4 design — v4 (supersedes v3) — one unit-consistent model contract

> Closes the v3 critique (`CRITIQUE_v3_SUMMARY.md`, `critique-v3-*.md`). v3's single sharpest fix was: **replace the
> prose §3/§4/§8 stack with ONE unit-consistent, machine-readable model contract** that generates the registry,
> engine config, transport set, result schema, and tests. v4 is that contract. It also integrates the author's
> **three-tier domains** (`THREE-TIER-VARIABLE-DOMAINS.md`) and adds a **capability criterion**: the design must be
> able to surface a strong, defensible result *if the mechanism is real* — neither gerrymandered to a null nor to a
> positive. Everything is on the **mean value scale**. NOT pre-registered — attack until clean.

---
## A. CAPABILITY CRITERION (new, first-class)
A design that can only ever return "indeterminate" is as dishonest as one tuned to a positive. So v4 is judged on
BOTH:
- **Not gerrymandered to a null:** the physically-possible set `D_F` excludes math-only artifacts (sign-reversal of
  a directional mechanism = "negative car speed"); indeterminacy must be *earned within D_F*, not imported from `D_M`.
- **Not gerrymandered to a positive:** the expectable set `R_α` must be a defensible evidence-concentrated band,
  pre-registered, with a coverage family (α∈{.5,.8,.95}); a Codex reviewer must be unable to widen/narrow it to
  flip the headline.
The **impressive-but-bulletproof** outcomes this admits: (i) a region where `m_lo>0` over ALL of `D_F` ("distributed
wins even at the edge of the possible, incl. zero transport"); (ii) the **theorem** with magnitude recovered at the
boundary; (iii) a conditional identified magnitude interval over `R_α` ("where expectable, +X–Y% true value").

---
## B. THE MODEL CONTRACT (unit-consistent; mean scale everywhere)
All value quantities are **per-interested-person means**. One scale, one interface for all three arms.

### B.1 Population, reach, projects
```
N                         total population (registered)
K                         number of candidate projects
q_j   ~ Normal(m_q, s_q²)        project quality (latent), sd s_q
r_j   ~ Beta(α_r, β_r)           reach fraction (interested share) of project j
I_ij  ~ Bernoulli(r_j)           person i interested in j    (independent across i)
n_j   = Σ_i I_ij                 interested count;  if n_j = 0 → project j inadmissible in ALL arms (dropped, logged)
c_j   ~ Uniform[c_lo, c_hi]      cost;   B = φ · Σ_j c_j       budget
```
Permitted dependencies (declared, default = independent): `(q_j, r_j, c_j)` may be coupled via a stated Gaussian
copula `Σ_dep` (off by default; `Σ_dep = I`).

### B.2 Individual value and the truth (mean scale)
```
u_ij  = q_j + ε_ij ,   ε_ij ~ Normal(0, σ²)          individual valuation of j (only defined for I_ij = 1)
S_j   = n_j⁻¹ Σ_{i: I_ij=1} u_ij                     TRUTH = interested-population mean value  (→ q_j as n_j→∞)
```
`S_j` is a **synthetic model score under the declared aggregation A = mean** (primary). Alternative `A`
(e.g. median, floor-weighted) are **separate normative estimands**, never randomized into one prior.

### B.3 Distributed estimate — baseline-expanded, MNAR-biased MEAN (not HT)
```
R_ij | I_ij=1 ~ Bernoulli( p )        if u_ij ≥ 0
              ~ Bernoulli( p(1−β) )    if u_ij < 0        (adverse voice bias β)
M^D_j = n_j⁻¹ Σ_{i:I_ij=1} R_ij (u_ij + e_ij) / p ,     e_ij ~ Normal(0, σ_e²)
```
**Conditional expectation (printed in the pre-registration):**
```
E[M^D_j | u_·j] = n_j⁻¹ ( Σ_{u_ij≥0} u_ij + (1−β) Σ_{u_ij<0} u_ij )   =  S_j − (β/n_j)Σ_{u_ij<0} u_ij .
```
So at β=0 it is exactly `S_j` (mean scale, reach-invariant); β is the identified adverse-voice bias, **not** an HT
weight. This is deliberately labeled the **behavioral coverage estimator**, not an unbiased estimator.

### B.4 Central estimate — identified via project-varying planner projection (the stadium fix)
The planner never observes `S_j`. The planner projects a value `v_{p,j}` onto j from **observable category priors**
(the "sports-facility ⇒ 80" prior), which is **wrong** where the true beneficiary population differs (chess users
⇒ `S_j`≈0). `v_{p,j}` varies across projects **independently of `S_j`** — this is what identifies the model:
```
M^C_j = a + b·S_j + w·(v_{p,j} − S_j) + η_j ,   η_j ~ Normal(0, σ_C²)
      = a + (b − w)·S_j + w·v_{p,j} + η_j .
```
- **Identification:** with regressors `S_j` and `v_{p,j}` of **full rank** (Cov(S,v_p) < sd·sd, guaranteed because
  `v_{p,j}` is the planner's category prior, a distinct object from realized `S_j`), `(b−w)`, `w`, and `a` are all
  identified. **Rank condition stated; where transported to reality, `v_{p,j}` = planner forecast and `S_j` = a
  bridge measurement must be jointly observed** (the bridge protocol; §G).
- **Generation of `v_{p,j}`:** `v_{p,j} = v_p0 + γ·g_j + ξ_j`, `g_j` = observable category signal (corr. ζ with
  `q_j`, `ζ<1`), `ξ_j ~ Normal(0, σ_v²)`; `v_p0` = planner's own baseline. (All in `θ_all`.)
- **Format regime (executable):** a toggle `fmt ∈ {point, dist}`; `a = a_res + fmt·a_fmt` where the point regime
  adds the reducible format bias `a_fmt` and the distribution regime removes it (D-L-S: distribution elicitation
  halves the bias). `a_fmt, a_res` are both in `θ_all`; `fmt` activates it, so no parameter is dead.

### B.5 One common selection interface (all three arms)
For arm `k ∈ {C, D, O}` with score signal `X^k_j` (`X^C=M^C`, `X^D=M^D`, `X^O=S` the oracle):
```
eligible:   E^k_j = 1{ X^k_j − h·c_j > 0 }                      opportunity-cost hurdle h (shared)
value rank: R^k_j = z_k( (X^k_j − h·c_j) / c_j )               z over the ELIGIBLE set, pop-sd, fallback sd→1
central credit tilt (C only): R^C_j ← (1−λ)·R^C_j + λ·z_C( P_j / c_j )
fund set:   greedy by R^k_j under budget B, exact residual-budget fill, tie-break by lower j (declared)
delivered:  D_W=Σ_{j∈fund^D} S_j ,  C_W=Σ_{j∈fund^C} S_j ,  O_W=Σ_{j∈fund^O} S_j     (gross, mean scale)
```
Credit law: `P_j = ρ_P·(visible salience of j) + noise`, salience from `(c_j, g_j)`, all declared in `θ_all`.
Every arm uses **its own** signal in its own gate (no oracle leakage); the oracle arm uses true `S_j`.

---
## C. THE FROZEN ESTIMAND + STATE MACHINE
Two co-reported functionals (both frozen), plus a degeneracy share:
```
π_deg(θ)  = Pr( O_W ≤ o_min | θ )                              degenerate-world share (reported, never hidden)
m(θ)      = E_W[ (D_W − C_W) / O_W | θ , O_W > o_min ]         THE estimand (conditional, per-world ratio mean)
```
`o_min` and `δ` are **frozen in mean-value units** (o_min = small positive fraction of median O; δ = a materiality
fraction justified in delivered-value terms, **not** the retired 0.05). Estimation: Monte-Carlo over worlds
(common random numbers across arms), world-cluster bootstrap CI covering **inner** (simulation) variability only.

**Classification state machine (per θ, over the transport/domain sets of §D):**
| state | condition |
|---|---|
| `robust-distributed` | `m_lo(θ) > +δ` |
| `robust-central` | `m_hi(θ) < −δ` |
| `robust-negligible` | `[m_lo, m_hi] ⊆ [−δ, +δ]` |
| `sign-robust-immaterial` | sign of `m` constant over the set but interval straddles ±δ (identified sign, uncertain size) |
| `transport-indeterminate` | sign of `m` flips **within `D_F`** |
| `numerically-unresolved` | MC/bootstrap/root-finder uncertainty exceeds the gap to the nearest boundary |
`π_deg` is always co-reported; a high-`π_deg` cell is flagged regardless of `m`.

---
## D. THREE-TIER DOMAINS replace the single transport set (author's contribution + Codex's machine-readable set)
Per transported/behavioral parameter, declare `R_α ⊆ D_F ⊆ D_M` (`THREE-TIER-VARIABLE-DOMAINS.md`). The frozen,
machine-readable transport object is:
```
Θ_transport = { S_source , R_scale , D_F , R_α(α) }
  S_source   exact source estimands + sampling covariance (B-S, G-B, D-L-S; different scales — declared)
  R_scale    scale/link maps source-units → model-units (stated, not diagonal-by-default; justified)
  D_F        physically-possible set per coeff (w≥0, b∈[0,b_max], g∈[0,g_max], β,p∈[0,1], σ≥0)   ← sign backbone
  R_α(α)     expectable band concentrating mass α, pre-registered, coverage family α∈{.5,.8,.95}  ← magnitude
```
Reports (three nested):
1. **Sign, over `D_F`, measure-free:** `m_lo=min_{D_F} m`, `m_hi=max_{D_F} m` → the state machine. Incorruptible.
2. **Magnitude, over `R_α`, measure-based (pre-registered):** identified interval `[m_lo^{R_α}, m_hi^{R_α}]` — the
   headline where expectable. Conditional-on-measure, labeled as such.
3. **`D_M \ D_F` — EXCLUDED with written justification** (sign-reversal etc.; the negative-speed analog).
**Honesty label (Codex-required):** because bounds rest on assumption, not target observables, they are
**"transport-sensitivity bounds conditional on the declared sets,"** NOT an empirically identified region.

---
## E. ANALYTIC BENCHMARK (joint-normal fixed-threshold) + numerical full frontier
**Theorem (to state + prove + regression-test).** Assume iid `(S, X_C, X_D)` jointly normal, equal costs, no gate,
no credit, common funded share `q`, threshold selection. With `z_q=Φ⁻¹(1−q)`:
```
V_k = q·μ_S + φ(z_q)·Cov(S,X_k)/sd(X_k)            expected delivered value per candidate (arm k)
V_D = V_C  ⇔  Cov(S,X_D)/sd(X_D) = Cov(S,X_C)/sd(X_C)      PARITY (the μ_S and φ(z_q) terms cancel)
```
with, for the central signal `X_C = a+(b−w)S+w·v_p+η` and `Z=v_{p}−S̄` typed as a **distinct** variable,
```
Q_C = Cov(S,X_C)/sd(X_C) = [b·Var(S)+w·Cov(S,Z)] / sqrt[b²Var(S)+w²Var(Z)+2bw·Cov(S,Z)+Var(η)].
```
**`a` is absent from the benchmark frontier** (intercept is rank-invariant under no-gate/fixed-share) — it operates
only in the numerical model (own-estimate gate + heterogeneous `/c_j`). **Large-K corollary** connecting to the
frozen estimand: if `O_K/K → V_O > 0`, `Pr(O_K≤o_min)→0`, and `(D_K−C_K)/O_K` is uniformly integrable, then
`m_K → (V_D−V_C)/V_O`; so parity (2) is the boundary **in the large-project limit** — finite-world `m` is numerical.
**β is not a slope:** under the report rule, `E[X_D|u]=U−(1−β)V` (U,V = pos/neg partial sums); its covariance/variance
follow the MNAR moments (Bernoulli-thinned, value-dependent variance) — stated as a **CLT/reduced-form
approximation**, never as `κ_D=1−β`. The numerical frontier (eligibility, heterogeneous costs, greedy fill, MNAR,
z-scoring, credit) is the object; the theorem is the limiting sanity check.

---
## F. FRESH ENGINE + CLOSED OUTPUT SCHEMA + MECHANICAL EMBARGO
- **One evidence-only command** (`npm run e4:evidence`) backed by a **closed JSON schema** (`additionalProperties:
  false`) whose fields are only: `{theta, pi_deg, m_hat, ci, m_lo_DF, m_hi_DF, m_lo_Ralpha, m_hi_Ralpha, state}`.
  The schema **cannot** express `D/C`, a ratio-with-parity-1, or any `×`/`x` suffix.
- **Every official artifact renders through one tested adapter** that rejects ASCII `x`, Unicode `×`, and bare
  `D/C` tokens in institution-performance context (lint test with both code points).
- **Legacy isolation:** `e4-v4-symmetric-frontier.mjs` and `e5-sp-symmetry-gate.mjs` move behind a `legacy/`
  runtime guard (env-gated), emit to a separate artifact namespace, and **cannot feed v1.14 outputs**; they run
  only as explicit regression checks.
- **Fail-closed config:** the engine loads `θ_all` from the contract; **any unregistered literal or unused field
  throws** (kills the `WP.eta`-style dead parameter and hidden constants).
- **Three test families (replace the "three-zero" slogan):**
  1. *Signal recovery:* `a=w=0,b=1,σ_C=0 ⇒ M^C=S`; `p=1,β=0,σ_e=0 ⇒ M^D=S`.
  2. *Exact joint symmetry:* feed both arms the identical realized signal/gate/score/budget/tie-break ⇒ require
     `D_W=C_W` **world-by-world**, not merely `m≈0`.
  3. *Pathway inactivation (paired worlds):* `λ=0 ⇒ P` has no effect; `w=0 ⇒ v_p` has no effect; `fmt` off ⇒ format
     has no effect; `β=0 ⇒ report prob sign-invariant`. Then add one asymmetry at a time.
  A separate **routing benchmark** (different information allocation, bias-neutral) may have nonzero `m`; that is
  the coverage/allocation effect, **not** a failed symmetry test.

---
## G. BRIDGE MEASUREMENT PROTOCOL (what would move PROXY-INFORMED → identified)
The only honest way to shrink `R_α`/`D_F` to a target-identified region: jointly observe, per project, the planner
forecast `M^C_pj` (= `v_{p,j}` proxy), a citizen value-distribution sample (→ `S_j`, dispersion), and realized
category signal `g_j`. The **optional gamified app** ("rate it + guess others", Prelec instrument) is the only
in-scope instrument (convenience sample → existence + direction of the gap, not population magnitudes). No surveys,
field work, or purchased data (author constraint). Absent bridge data, results stay **transport-sensitivity**, and
we say so.

---
## H. POSITIONING (honest, present-tense only for what exists)
Present contribution: **a proposed joint-normal fixed-threshold parity theorem + a transport-sensitivity atlas +
a bridge-measurement protocol**, for noisy/biased proxy-vs-coverage **budgeted** selection with signed MNAR and a
credit channel. It is NOT "theorem-backed" until the proof + regression tests ship, and NOT an empirical estimate
without bridge data. Differentiate explicitly from prior art (all cited): Böttcher & Klingebiel 2024 (noisy
expert-vs-collective budgeted portfolio selection); Rey & Endriss 2024 (epistemic selection of costly
alternatives); Boehmer et al. 2023 (PB robustness to noisy votes); Liesiö, Mild & Salo 2007 (robust portfolio
project selection over uncertainty sets); Mollick & Nanda 2016 (crowd-vs-expert funding). Our narrow, not-yet-
matched synthesis = transport-set + signed-MNAR coverage + proxy/credit separation + oracle-normalized institutional
parity bounds. "Sometimes the central wins," "robustness atlas," and "noisy expert-vs-crowd" are **not** themselves
novel and are not claimed as such.

---
## I. What to attack next (v4)
- Is the mean-scale contract now fully unit-consistent across truth, both signals, delivery, and oracle?
- Does project-varying `v_{p,j}` (Cov(S,v_p)<1) genuinely identify `(a,b,w)`, or is there a residual collapse?
- Is `R_α` defensible and un-gerrymanderable in BOTH directions (null and positive)?
- Is the state machine complete (no interval mis-routed to `transport-indeterminate`)?
- Theorem: is the joint-normal statement + large-K corollary correct and the β-moment approximation honestly labeled?
- Any remaining path — schema, adapter, legacy guard, ASCII/Unicode — for the multiplier to reappear?
