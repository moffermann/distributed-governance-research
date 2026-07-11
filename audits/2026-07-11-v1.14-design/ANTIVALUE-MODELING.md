# Modeling anti-value (opposition ≠ indifference) — design addendum for v5

> Author's question (2026-07-11): strong opposition to a project is not the same as indifference; the domains
> looked like `0..ℝ⁺`. Clarification + upgrade.

## Where anti-value currently lives (v4)
- Value IS signed: `u_ij = q_j + ε_ij`, both Normal ⇒ `u_ij ∈ ℝ`; `S_j = mean_i u_ij` can be negative; a funded
  project with `S_j<0` subtracts true value. The distributed report rule already handles `u_ij<0` (adverse voice
  bias β). The `0..ℝ⁺` domains the author saw are **parameter** domains (σ, w, b, β, p), not the value domain.
- So opposition is *representable* — but *under-modeled* in three ways below.

## Three weaknesses (all real)
1. **Structure.** A symmetric Normal treats opposition as merely the left tail. Real opposition is often an
   **asymmetric, concentrated, intense minority** (heavy negative tail / bimodality) that a Normal cannot represent.
2. **Indifference ≠ opposition.** `A = mean` cancels `+5` and `−5`; `{+10,−10}` ≡ `{0,0}`, hiding the harmed. The
   master paper has a separate antivalue / duty-of-care / third-party-harm gate, but E4's value model flattens it.
3. **Single-signed voice.** `β≥0` = opponents report *less* (suppression). The opposite is equally real (organized
   opposition is *louder*, NIMBY). One parameter can't carry both regimes.

## THE THESIS: no voice for anti-value in the status quo; voice in Core v0 (central is blind to harm)
This is not a modeling detail — it is the mechanism, and it is literature-backed (elite misperception / salience
bias: the planner's channels are biased toward the visible and supportive; opponents have no channel in the status
quo). Formalize it with a **support/harm decomposition** of true value (mean scale, both ≥0):
```
S_j = S_j⁺ − H_j          S_j⁺ = mean of positive valuations (support)
                          H_j  = mean intensity of opposition (harm)
```
**Central is blind to harm** — its harm-detection coefficient is ≈0:
```
M^C_j = a + b·S_j⁺ + w·(v_{p,j} − S_j⁺) − b_H^C·H_j + η_j ,   b_H^C ≈ 0
```
so the central **overvalues harmful projects** (it does not subtract the harm). **Distributed has (attenuated)
voice** — from the report rule, its conditional expectation is
```
E[M^D_j | u] = S_j⁺ − (1−β)·H_j
```
so it registers harm at weight `(1−β)` while the central registers it at weight `b_H^C ≈ 0`. Distributed beats
central on harm detection whenever `(1−β) > b_H^C`, which — if the central is near-blind — holds for **any β<1**:
*some* voice beats *no* voice. The parity boundary moves strongly toward "distributed wins" as harm prevalence/
intensity `H_j` rises and central harm-blindness deepens. This is where an impressive result emerges **legitimately**.

**Capability guardrail (do not gerrymander):** do NOT hardcode `b_H^C = 0`. Give it `D_F = [0, b_H^max]` and an
`R_α` concentrated **near zero but not exactly zero** ("near-blind", per the evidence — not "provably zero"). The
"distributed wins" result must survive as robust under merely-modest blindness, not be manufactured by a hardcoded
zero. If the central actually has decent harm detection, the boundary moves and we report it.

**Identification bonus:** the central now has three separately-varying regressors — `S_j⁺` (support), `v_{p,j}`
(projection), `H_j` (harm) — a project can carry high support AND high opposition (controversial), so `H_j` varies
independently of `S_j⁺`. This helps identify `(b, w, b_H^C)` and names a cleaner bridge measurement: elicit
**support and opposition separately**, not net value (a "rate + guess others" instrument can do this).

## Proposed upgrade (integrate into the v5 model contract)
- **F_j with first-class anti-value:** replace the symmetric Normal with a support/indifference/opposition mixture,
  giving the negative tail its own scale/intensity: e.g. an opposition fraction `π_opp` with a heavier-tailed
  negative component (`σ₋ ≠ σ₊`, or a skew/mixture). New params (`π_opp, σ₋`) enter `θ_all` with their own
  `D_M/D_F/R_α`.
- **Signed voice:** split `β` into adverse-suppression and adverse-mobilization parameters, each with its own `D_F`,
  to sweep both regimes; the distributed estimator's conditional expectation is re-derived accordingly.
- **Harm-aware aggregation as a SEPARATE normative estimand:** keep `A = mean` primary; offer `A_harm` weighting
  negative values ≥1 (harm aversion) as a declared, non-randomized alternative estimand, consistent with the
  "A is normative" stance and the master paper's antivalue gate.

## Affects
`DESIGN_SKETCH_v4.md` §B.2 (F_j), §B.3 (distributed estimator + conditional expectation), the aggregation `A`
discussion, `θ_all`, and the three-tier domain table. Add a Codex critique dimension: "is anti-value modeled richly
enough, and does the design capture the coverage-beats-proxy-on-opposition channel?"
