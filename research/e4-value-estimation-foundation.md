# E4 foundation — value estimation, F vs G, and the central-arm model (literature-anchored)

> The theoretical + empirical backbone for E4 (the parity-surface rework). It replaces the retired multiplier's
> ad-hoc central-arm assumptions with an **estimation model whose form and parameter ranges are anchored to
> published evidence** on how third parties (planners) estimate others' valuations. Companion: the parameter
> harvest in `audits/2026-07-11-v1.14-design/E4-empirical-anchors.md`; the prior-art review that established the
> premise is `prior-art-review.md`. **Nothing here is pre-registered.**

## 1. Primitives (typed; no interpersonal cardinal-welfare claim)
Fix a project `g`, an instant, a context, a common declared response scale.
- `u_ij` — person *i*'s latent valuation of project *j* (latent random utility, McFadden 1974; latent-variable,
  Bollen 2002; scale, Stevens 1946). Its cross-person distribution is **F** with mean `μ_j`, dispersion `σ_j`.
- `S_j^A = A(u_1j,…,u_Nj)` — the project's social value under a **declared** aggregation `A` (primary: the mean;
  alternatives are separate normative estimands). No claim of interpersonally-comparable cardinal welfare.
- `M_j^C` — the **central** (planner) estimate of `S_j^A`. Distribution **G**.
- `M_j^D` — the **distributed** estimate (coverage from citizen reports).

## 2. The central's estimation model — LINEAR INTERCEPT-SHIFT + PROJECTION (the key formalization)
Anchored to the empirical form (Broockman & Skovron 2018: perceptions are *"strongly, strikingly linear"* in
reality **plus a substantial intercept shift**; Dias–Lucas–Sheffer: **directional projection** toward the
planner's own position):

```
M_j^C  =  a  +  b · S_j⁺  +  w · (v_{p,j} − S_j⁺)  −  b_H^C · s(V_j) · H_j  +  η_j
```
> **v1.14 update (superseding the earlier `a + b·S + w·(v_p − S̄)` form):** the projection is **project-varying**
> `v_{p,j}` (identifies `w` separately from `a`/`b`; see DESIGN_SKETCH_v5 §B.4), value splits into support `S⁺` and
> harm `H` (`S = S⁺ − H`), and the central is **myopic to harm, salience-gated**: `−b_H^C·s(V_j)·H_j` with `s(·)`
> increasing in visibility `V_j` (near-blind on the low-visibility long tail — see `ANTIVALUE-MODELING.md`). The
> earlier project-invariant equation is retired.
- **`b` (slope, responsiveness):** the central tracks visible/support value (b>0, near-linear). Real planners are *responsive*.
- **`a` (intercept shift, systematic bias):** a directional bias that does **not** average out (systematic, not
  random error — **not novel in itself**; false-consensus / elite–mass misperception is well established). *Source-
  domain magnitudes (political opinion, NOT project value):* B-S find overestimation of conservative support of
  **~7–36 pts** on a 0–100 scale (often >10, sometimes >20); D-L-S find **0.67** points on the ideology scale
  (point-estimate task). **Transport to project value is unverified — these size the source, not the target.**
- **`w · (v_p − S̄)` (projection):** the planner's estimate loads on **its own value `v_p` relative to the
  population mean `S̄`** — signed by where the planner sits (Gagnon-Bartsch's model: prediction of others is
  non-constant in own state iff projection `w>0`; D-L-S: planners begin from self-similar constituents). *Anchor:*
  Gagnon-Bartsch reduced-form projection is **large and directional** — over/under-prediction of others by
  **~21–50%** in-task, exceeding intrapersonal projection (~30%); it decomposes into **≈½ projection, ≈½
  task-uncertainty**.
- **`η_j` (noise):** idiosyncratic error.

**Format effect (reducible component).** D-L-S: eliciting a **distribution** instead of a point cuts the bias by
**more than half (0.67 → 0.19 points)** — planners reason about constituencies as **diverse groups, not an
average**, and point estimates **exaggerate** perceived dispersion (Dias et al. 2025). ⇒ part of `a` is a
measurement/format artifact; part is irreducible (projection + biased information). E4 should model both.

## 3. The distributed estimate `M_j^D`
Coverage-routed: aggregates actual citizen reports of `u_ij` (with adverse voice bias `β`, participation/report
noise). It reads **F** more directly than the central's proxy `M_j^C`, at the cost of `β`-bias and sampling
variance. (This is the credit-vs-coverage mechanism, now with `M_j^C` given an evidence-based form.)

## 4. Empirical anchors (parameters are PROXY-INFORMED, **not** anchored — source ≠ target)
> The literature gives **source-domain** coefficients (political opinion) on **different outcomes/scales**. They are
> **not** structural coefficients of the target value-of-project equation. Target `(a, w, b)` are therefore
> **ASSUMED, source-informed**, and enter E4 only through a declared **transport-sensitivity set** (see
> `audits/2026-07-11-v1.14-design/THREE-TIER-VARIABLE-DOMAINS.md` and DESIGN_SKETCH_v4 §4), never as point anchors.

| Param | Source-domain value / range | Source |
|---|---|---|
| central form `a + b·S` | linear + systematic intercept shift | Broockman-Skovron 2018 |
| bias `a` | ~7–36 pts (0–100 scale); ~0.67 (ideology scale) | B-S 2018; Dias-Lucas-Sheffer |
| projection `w` | sizable, directional; ~21–50% in-task | Gagnon-Bartsch; D-L-S |
| format/reducible share of `a` | ~½ of the bias (0.67→0.19) | Dias-Lucas-Sheffer |
| dispersion σ (perceived vs true) | point-estimates exaggerate polarization | Dias et al. 2025 |
| citizen value distribution F | still ASSUMED (app-elicitable) | — |

## 5. The parity condition (sketch → E4's object)
Selecting on `M_j^C` vs `M_j^D`, the distributed arm delivers more true value when the central's error (bias `a`,
projection `w·(v_{p,j}−S⁺)`, and **salience-gated harm myopia** `b_H^C·s(V)`) outweighs the distributed's
degradation (voice bias `β`, sampling). The primary object is the **sign backbone over `D_F`** (does the winner
flip across the physically-possible set?) plus the **magnitude over the expectable `R_α`** — reported by the
certified evidence pipeline (`scripts/simulation/e4-v5/evidence.mjs`), never a multiplier. The parity **benchmark**
is proved analytically in `e4-parity-theorem.md` (joint-normal fixed-threshold: parity ⇔ equal `Cov(S,X_k)/sd(X_k)`;
regression `npm run e4:theorem`). (The old E4-v4 harm-weight law `β = 1−η` does **not** generalize and is
**retired**; the legacy nested-harm result lives only behind its legacy runtime guard.)

## 6. The meta-prediction instrument (Prelec)
The "rate + guess others" method (Prelec, Seung & McCoy 2017): each person gives a vote and a **meta-prediction**
of others' answers; the **surprisingly popular** answer (actual frequency > average predicted frequency) provably
recovers truth in the large-crowd limit. It is an established instrument for **measuring the F↔G gap / projection
direction** (and a candidate bridge instrument to elicit `S⁺, H, v_{p,j}` separately) — **not** a measurement of the
target structural `w` in the value-of-project equation, which stays PROXY-INFORMED absent target-domain bridge data.

## 7. Honest scope
- The magnitudes are from **political-opinion** perception; **transport to public-project value is an assumption**
  to be flagged, not asserted. What transfers with confidence is the **structural form, the mechanism, and the
  sign/plausible ranges** — not point magnitudes.
- No interpersonal cardinal welfare; aggregation declared; E4 outputs a conditional parity surface, not a
  real-world multiplier.

## Sources
- Broockman, D. & Skovron, C. (2018). "Bias in Perceptions of Public Opinion among Political Elites." *APSR* 112(3).
- Dias, N., Lucas, J. & Sheffer, L. (2026). "Beyond the mean…" *Political Science Research and Methods* (CC BY 4.0).
- Dias, N. et al. (2025). Drawing distributions reduces perceived polarization.
- Gagnon-Bartsch, T. et al. "Failures in Forecasting: An Experiment on Interpersonal Projection Bias."
- Prelec, D., Seung, H. S. & McCoy, J. (2017). "A solution to the single-question crowd wisdom problem." *Nature* 541.
- Stevens (1946); Bollen (2002); McFadden (1974, 2001); Stiglitz (2017); Ross, Greene & House (1977).
