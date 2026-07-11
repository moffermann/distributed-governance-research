# E4 empirical anchors — from the established F↔G literature (harvested 2026-07-11)

> The standalone "foundational F-vs-G" paper was dropped (its result is already established — see
> `individual-vs-estimated-value/docs/prior-art-review.md`). The **win**: that literature gives E4's central-arm
> estimation model a **measured, citable** anchor instead of assumed parameters. Below: what each source pins,
> and how it maps to E4's parameter registry. **Caveat:** most of this is political-OPINION perception, not
> public-project VALUE — a transport argument is required; magnitudes may not carry over, but the **mechanism,
> the structural form, and plausible ranges** do.

## 1. Structural form of the central's estimate — LINEAR WITH INTERCEPT SHIFT
**Broockman & Skovron (2018, APSR)**, 3,765 US state politicians, 9 issues: politicians' perceptions of
constituent opinion show *"a strong and strikingly linear relationship"* with reality **plus a substantial
"intercept shift"** — they track reality (responsive slope) but with a **systematic directional bias**.
→ **E4 mapping:** model the central's estimate as `Ĝ = a + b·(true) + noise` — a *responsive* slope `b` and a
**systematic bias intercept `a`**, not random error. This is the honest, data-backed form for the central arm
(replaces the ad-hoc ρ_proxy/τ story the round-8 critique rejected).

## 2. Magnitude of the planner bias — anchored ranges
- **Broockman & Skovron (2018):** overestimation of conservative support by **~7 to ~36 percentage points**
  (issue-dependent; often >10, sometimes >20) on a 0–100 support scale. Welfare example: actual ≈9%, perceived
  ≈32% (~23-pt gap).
- **Dias, Lucas & Sheffer ("Beyond the mean", PSRM 2026):** 1,865 Canadian municipal politicians + 94k citizens;
  point-estimate perceptual error **≈0.53–0.71** on the ideological scale; **~30%** place residents on the wrong
  side of the midpoint. Comparable to the male–female ideological gap (~0.5).
→ **E4 mapping:** the intercept-shift bias `a` is **materially non-zero and large** in real elite estimation —
  a defensible *range*, not a hand-wave. (Transport to project-value context is an explicit assumption.)

## 3. The bias is partly a MEASUREMENT/format artifact — and distributions matter
- **Dias–Lucas–Sheffer:** a **"perceived-distribution" task cuts the bias roughly IN HALF.** Politicians think of
  constituencies as **diverse groups with different preferences, not an "average" constituent**, and elicit more
  accurately when drawing distributions.
- **Dias et al. (2025):** point estimates **exaggerate** perceived polarization; drawing the distribution yields
  far more modest, accurate perceptions.
→ **E4 mapping:** (a) model value as a **distribution F, not a point** — vindicated by how planners actually
  reason; (b) the perceived-vs-actual **dispersion σ** is itself mis-estimated, and *how you elicit it* changes
  the bias by ~2×. Two honest consequences: the central's error has a reducible (format) component and an
  irreducible (projection/information) component.

## 4. The projection weight `w` is real, LARGE, and DIRECTIONAL — sweep it (anti "forced ugliness")
- **Gagnon-Bartsch et al. (interpersonal projection experiment):** a formal model where the prediction of others
  W(m, s_j | s_i, i) loads on **own state `s_i`** iff the projection parameter α>0 (and is constant in `s_i` when
  α=0). Reduced-form magnitudes are **large and directional**: "fresh" predictors **over-estimated** tired
  workers' willingness-to-work by **~50%**; "tired" predictors **under-estimated** fresh workers' by **~21%**
  (the cleaner measure); a within-subject flip (Group I) lowered guesses by ~19% (4.22 tasks, p<.001).
  Interpersonal projection (~50%) **exceeds** the intrapersonal analog (~30%). They decompose the error into
  **projection ≈ task-uncertainty** (roughly equal halves). *(Correction: the `α=0.01` in the paper is the cost
  curvature, not the projection weight — projection here is substantial, not near-zero.)*
- **Dias–Lucas–Sheffer:** projection is directional — politicians **start from constituents near their own
  position** ("self-similar constituents more accessible"), reinforcing conservative bias for right-leaning,
  counterbalancing for left-leaning. So `w > 0`, **signed by the planner's own position vs the population mean**.
→ **E4 mapping:** projection is **materially non-zero, directional, and context-varying in magnitude** (≈20–50%
  in these tasks). E4 should **sweep `w` over a plausible, sizable range** and report the surface — the honesty is
  in the *range and direction*, not in pretending the central is either perfect or horrific. Where good proxies +
  small `w` → central ties/wins; where projection + biased information bite → the distributed arm wins; **the
  boundary is the object.**

## 5. Parameter-registry status after this harvest
> **Correction (2026-07-11, per Codex v3 critique):** the source magnitudes are *different estimands on different
> scales* (political opinion), **not** structural coefficients of the target value-of-project equation. So target
> parameters are **PROXY-INFORMED (source-informed ASSUMED)**, entering only via a declared transport-sensitivity
> set — **not** "anchored". "Anchored" is retired here; see `THREE-TIER-VARIABLE-DOMAINS.md`.

| Param | Was | Now | Source / caveat |
|---|---|---|---|
| central bias form (`a + b·true`) | ASSUMED | **PROXY-INFORMED (structural form)** | Broockman-Skovron linear-intercept-shift; form transports more safely than magnitude |
| central bias magnitude `a` | ASSUMED | **PROXY-INFORMED (source range only)** | B-S ~7–36 pts; D-L-S ~0.5/scale — **target magnitude UNIDENTIFIED**; transport-sensitivity only |
| projection weight `w` | ASSUMED | **PROXY-INFORMED (directional; source ≈20–50% in-task)** | Gagnon-Bartsch reduced-form ~21–50%; D-L-S directional — target size UNIDENTIFIED |
| perceived vs actual dispersion σ | ASSUMED | **PROXY-INFORMED (direction only)** | D-L-S / Dias 2025: format changes it ~2×; value-context UNVERIFIED |
| citizen own-value distribution F | ASSUMED | still ASSUMED / app-measurable | the (optional) gamified app could elicit F's spread for project-value |

## 6. Honest limits
- All magnitudes are **political-opinion** perception; **transport to public-project value is an assumption**, to
  be flagged, not asserted.
- These anchor the **mechanism, structural form, and plausible ranges** — they do **not** yield a real-world
  multiplier, and E4 stays a parity-surface/sensitivity result, reported conditionally.
- Next: full reads of the three papers for exact coefficients + confirm with Codex's scan when its limit resets.

## Sources
- Broockman, D. & Skovron, C. (2018). "Bias in Perceptions of Public Opinion among Political Elites." *APSR* 112(3).
- Dias, N., Lucas, J. & Sheffer, L. (2026). "Beyond the mean: how thinking about the distribution of public opinions reduces politicians' perceptual errors." *Political Science Research and Methods* (Open Access, CC BY 4.0).
- Dias, N. et al. (2025). [drawing the distribution reduces perceived polarization].
- Gagnon-Bartsch, T. et al. "Failures in Forecasting: An Experiment on Interpersonal Projection Bias."
- Prelec, D., Seung, H. S. & McCoy, J. (2017). "A solution to the single-question crowd wisdom problem." *Nature* 541.
