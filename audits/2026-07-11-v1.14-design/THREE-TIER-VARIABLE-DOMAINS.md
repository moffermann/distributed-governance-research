# Three-tier variable domains — the formal backbone for v4 partial identification

> Author's methodological contribution (2026-07-11). Every model variable is declared at three nested levels; this
> replaces the v3 "one wide transport set T" (which, by including sign-reversal, treated the *mathematical* domain
> as the identified region and thereby manufactured indeterminacy — the analog of assigning probability to negative
> car speeds). This is the "no forced ugliness" principle, formalized.

## The hierarchy
For each variable `X`:
- `D_M` — **mathematical domain** where the model is defined (e.g. ℝ). Values here can be mathematically valid yet
  physically impossible (negative speed under a Normal(100) speed model).
- `D_F ⊆ D_M` — **physically/behaviorally possible** subset. Values here are realizable but may be improbable.
- `R_α ⊆ D_F` — **probabilistically expectable** range, concentrating proportion `α` of the mass:
  `P(X ∈ R_α) ≥ α`. `α` is pre-registered; report a family (α = 0.5 / 0.8 / 0.95).

A value may be in `D_M` and not physical; in `D_F` and improbable; in `R_α` and both possible and expectable.

## Per-parameter declaration (E4)
| θ | `D_M` | `D_F` (physically possible) | `R_α` (expectable) | why `D_M\D_F` excluded |
|---|---|---|---|---|
| `w` directional projection | ℝ | `[0, w_max]` | lit band (~21–50% reduced-form) | projection is directionally signed toward own position (Ross 1977; Gagnon-Bartsch); `w<0` anti-projection has no behavioral basis |
| `b` responsiveness | ℝ | `[0, b_max]` | ~`[0.7, 1.1]` near-linear (Broockman-Skovron) | `b<0` = proxy falls as true value rises → not a competent estimator |
| `a` systematic level bias | ℝ | scale-bounded interval | 7–36 pts rescaled (elite-mass gap) | unbounded / off-scale shifts impossible |
| `g` transport factor (source→target) | ℝ (incl. sign flip) | `[0, g_max]` | near a defensible central attenuation | transport attenuates/mildly amplifies but does NOT reverse a directional mechanism's sign; `g=0` = "no transport" is the possible worst case |
| `β,p` (voice bias, participation) | ℝ | `[0,1]` | PB-informed bands | probabilities outside [0,1] impossible |
| `σ` dispersion | ℝ | `≥0` | elicitation-informed band | negative dispersion impossible |

## Three nested reports of the estimand `m(θ)=E_W[(D−C)/O]`
1. **Over `R_α` — the HEADLINE (magnitude allowed).** Identified interval `[m_lo, m_hi]` where the evidence
   concentrates: "where expectable, distributed delivers m ∈ [X,Y] more true value." This is the original
   "under these conditions, ~X ± CI" vision, made legitimate because `R_α` is pre-registered and justified.
2. **Over `D_F` — the ROBUSTNESS envelope (sign only).** Computed **measure-free** (min/max over the set, no
   probability law): "the sign is robust across everything physically possible, including g=0 / no transport."
   This is the incorruptible backbone — it survives the exact attack that retired the 2.2×.
3. **`D_M \ D_F` — EXCLUDED, explicitly, with justification.** Sign-reversal lives here; it is named and excluded
   on physical/behavioral grounds (the negative-speed analog), never silently swept in or out.

`transport-indeterminate` is defined at the `D_F` level: genuine indeterminacy = the sign flips *within* the
physically possible set. That is an honest finding; manufacturing it by admitting physically-impossible values is not.

## Why this harmonizes with the Codex rigor track
- **Sign** is reported measure-free over `D_F` → no probability law can choose it (answers v2 blocker #5).
- **Magnitude** is reported over `R_α`, which requires a measure — but pre-registered, with a coverage family, and
  clearly labeled conditional-on-measure. The measure enters only the magnitude headline, never the sign backbone.

## To integrate into v4
- Add `D_M / D_F / R_α` columns to the θ registry / crosswalk.
- Replace §4's single transport set `T` with the nested `R_α ⊆ D_F ⊆ D_M` structure per transported coefficient.
- Replace §1's single-level classification with the three nested reports above.
- Add a Codex check: "is R_α defensibly narrow (honest expectable range) rather than gerrymandered to force a
  positive?" — the mirror of the "not gerrymandered to force a null" check.
