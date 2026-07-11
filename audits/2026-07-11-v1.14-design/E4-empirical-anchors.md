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

## 4. The projection weight `w` is CONTEXT-DEPENDENT — range it, don't fix it (anti "forced ugliness")
- **Dias–Lucas–Sheffer:** projection is real and directional — politicians **start from constituents near their
  own position** ("self-similar constituents are more accessible"), reinforcing bias for right-leaning,
  counterbalancing for left-leaning. So `w > 0` and *signed by the planner's own position vs the mean*.
- **Gagnon-Bartsch et al. (interpersonal projection experiment):** a formal model where the prediction of others
  loads on **own state `s_i`** iff the projection parameter α>0; **fitted α ≈ 0.01** in their task (i.e. **near
  zero** — predictions matched actual WTW, no large systematic error).
→ **E4 mapping:** the projection weight `w` ranges from **≈0 (Gagnon-Bartsch's clean task)** to **substantial
  (political-opinion estimation)**. This is *measured evidence* that E4 must **sweep `w`** across a plausible
  range and report the surface — NOT assume a "horrific" central. It directly supports the parity-surface frame:
  where the central is near-unbiased (`w≈0`, good proxies) it wins/ties; where projection + biased information
  bite, the distributed arm wins. The location of that boundary is the object.

## 5. Parameter-registry status after this harvest
| Param | Was | Now | Source / caveat |
|---|---|---|---|
| central bias form (`a + b·true`) | ASSUMED | **PROXY-ANCHORED (structural)** | Broockman-Skovron linear-intercept-shift |
| central bias magnitude `a` | ASSUMED | **PROXY-ANCHORED (range)** | B-S ~7–36 pts; D-L-S ~0.5/scale — transport to project-value UNVERIFIED |
| projection weight `w` | ASSUMED | **PROXY-ANCHORED (range ≈0 → substantial)** | Gagnon-Bartsch α≈0.01; D-L-S directional projection |
| perceived vs actual dispersion σ | ASSUMED | **PARTIALLY ANCHORED** | D-L-S / Dias 2025: format changes it ~2×; value-context UNVERIFIED |
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
