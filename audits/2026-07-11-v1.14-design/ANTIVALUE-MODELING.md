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

## Why this matters for the capability criterion
The central proxy systematically **misses concentrated opposition**: the projection error `w·(v_{p,j}−S_j)` is
largest exactly where the planner's category prior rates a project high but its real beneficiaries reject it (the
chess-court case). Coverage detects it. **Anti-value is the channel where distributed beats the proxy** — under-
modeling it suppresses the mechanism's best case. So this is honesty AND capability.

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
