# Dimension 2 — transport-robust partial identification

## Verdict

**PARTIAL; v2 blocker 1 is not yet cleared.** V3 makes the essential conceptual correction: it explicitly says that the published quantities are source-domain results on different outcomes and scales, that they are not coefficients of the target public-project equation, and that target `a`, `w`, `b`, and `κ` remain assumed rather than anchored (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:66-73`). It also chooses the correct *kind* of target—lower and upper values of the one signed functional over a joint transport set, with robust-central, robust-distributed, and indeterminate outcomes all admissible (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:74-81`). This is a substantive closure of v2's source-equals-target rhetoric.

It is not yet an executable identified set. V3 says that normalized source estimates, a rescaling, a bounded set `T`, and target bounds will be defined, but supplies none of their values, supports, joint restrictions, or source-estimate uncertainty. Worse, its registry makes target `a,w` both outputs of `diag(g)·source` and default `θ_surface` axes. As written, an analyst still chooses the scale map and the width, amplification, sign reversals, and dependence in `T`; those choices can determine whether `[m_lo,m_hi]` crosses zero. Pre-registration makes that choice auditable, not identified.

The honest current label is therefore **a proposed transport-sensitivity/partial-identification protocol conditional on a future maintained set `T`**, not a completed transport-robust partial-identification result.

## What v3 genuinely clears

1. **Source and target are separated in the binding sketch.** The statement that source results are not target structural coefficients and that target magnitudes are assumed is exactly the correction requested in v2 (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:66-70`; `audits/2026-07-11-v1.14-design/CRITIQUE_v2_SUMMARY.md:38-42`).
2. **No-transport and adverse transport are admitted in principle.** Requiring zero attenuation and sign reversal for `a` and `w` prevents the source sign from being silently imposed on the target (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:71-73`). This is materially more honest than the companion anchor file's assertion that the mechanism, structural form, and plausible ranges carry over (`audits/2026-07-11-v1.14-design/E4-empirical-anchors.md:5-8,66-70`).
3. **The extremum is aimed at the correct outcome functional.** Conditional on a well-defined admissible target-parameter set, taking the infimum and supremum of the frozen `m(θ)=E_W[(D-C)/O|θ]` is the right sign-robust operation (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:16-30,74-79`). No probability measure over transport discrepancies is needed.
4. **The bridge-study direction is right.** Same-project citizen values, planner own values, and planner forecasts are the observations needed to learn a target mapping rather than reuse political-opinion/task coefficients (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:80-81`; `audits/2026-07-11-v1.14-design/critique-v2-anchored-central-model.md:84-86`).

## Ranked remaining issues

### 1. Blocking — `T` is still a placeholder, so it can still choose the headline

V3 requires a “committed set `T`” but gives no numeric endpoints, topology, joint constraints, or provenance (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:70-78`). “Includes `g=0`” is ambiguous for a vector: it may mean only the joint origin rather than coordinatewise null transport. “Plausible sign reversal” says neither how negative each factor may be nor whether reversals may occur independently. There is no requirement to include amplification (`g>1`), although the prior critique correctly observed that absent target observations an effect can be attenuated, amplified, or reversed (`audits/2026-07-11-v1.14-design/critique-v2-anchored-central-model.md:64-84`).

Merely including one zero point and one mildly negative point does not make a set conservative. A narrow set such as `g_w∈[-0.01,0]` and a broad set such as `g_w∈[-5,5]` both satisfy the prose, but can yield completely different sign classifications. Dependence inside the joint set matters too: allowing `(g_a,g_w)` to be adverse simultaneously can change the lower bound relative to allowing only one adverse channel at a time. Calling the ranges “outcome-blind” does not supply evidence for those choices (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:96-98`).

**Fix:** write `T` as mathematics before exposing any replacement-engine result: define `g=(g_a,g_w,g_b)`, coordinate supports, whether null and reversal are coordinatewise, admissible joint combinations, amplification limits, deterministic constraints, and provenance for every boundary. Report a nested family—at minimum a source-conditional set, a defensible adverse set, and a widest target-support-compatible set—and show all of them. If no target fact supplies a finite credible bound, say that the source data leave transport unbounded or use only declared target-score support to construct a conservative outer set. Do not call a researcher-chosen “plausible” box the identified region.

### 2. Blocking — there is not yet a coherent source coefficient vector or scale map to transport

The proposed input `(â_s, ŵ_s, b̂_s)` does not currently exist (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:67-73`). The supplied evidence contains support-share errors of 7–36 percentage points, an ideology-scale error of 0.67, and relative willingness-to-work forecast errors of roughly 21–50%; these have different outcomes, predictors, denominators, and units (`audits/2026-07-11-v1.14-design/E4-empirical-anchors.md:18-26,39-52`). The anchor file has no numeric source slope for `b` and explicitly says full reads and exact-coefficient confirmation remain pending (`audits/2026-07-11-v1.14-design/E4-empirical-anchors.md:57-71`). In particular, a relative forecast error is not the coefficient on `(v_p-S_bar)` without the source predictor contrast and link function, as the v2 review already established (`audits/2026-07-11-v1.14-design/critique-v2-anchored-central-model.md:38-49`).

A diagonal multiplicative map also silently assumes a through-origin, componentwise bridge. It cannot represent an additive target discrepancy, a target effect with no source analog, cross-loading between source constructs, or uncertainty over which source construct corresponds to `a` versus `w`. The word “normalized” does not solve those estimand differences.

**Fix:** create a source-to-target table before defining `T`, with one row per exact source estimand: formula, population, outcome and predictor scales, coefficient/contrast, sampling covariance, extraction location, and proposed target estimand. Define every scale/link map explicitly and keep its uncertainty in the admissible set. Use a general map such as `θ_T=H_r(θ_S)+d`, with `r` ranging over admissible scale/link maps and `d∈Γ`, unless a diagonal multiplicative restriction is separately justified. Do not pool heterogeneous studies into one source vector by normalization alone.

### 3. Blocking — `[m_lo,m_hi]` omits parts of the uncertainty set and conflicts with the plotted coordinates

Taking extrema of `m` is correct only after defining the full set over which the target is unidentified. V3 minimizes only over `g`, apparently holding one normalized source estimate fixed, even though it later lists source-estimate, model-form, and transport uncertainty as distinct (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:74-78,100-106`). It also says non-transported parameters are held at their “stated laws,” while simultaneously calling the primary map measure-free. Hyperparameters are either fixed coordinates/conditions, integrated as part of the world law already inside `m`, or ranged over an admissible set; those are different operations.

There is a direct coordinate contradiction. The map says target coefficients equal `diag(g)·source`, but the default `θ_surface` axes include target `w,a` (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:70-76,92-98`). If `a,w` are fixed axes, varying `g` cannot also generate them. If `g` generates them, `a,w` are outputs to project onto the atlas, not free axes at the same stage. The design also names target `κ` as transported/assumed but supplies no source `κ` or transport factor for it (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:57,66-73,92-98`).

**Fix:** separate the conditional target atlas from the transport projection. Let `z` contain non-transport surface coordinates such as distributed participation/noise. Define, for each `z`,

```text
I_m(z) = { m(z, H_r(s,g), ν) : s∈S_source, r∈R_scale,
                                  g∈T, ν∈N_admissible }.
m_lo(z) = inf I_m(z),   m_hi(z) = sup I_m(z).
```

Here `S_source` contains source sampling uncertainty/covariance, `R_scale` the admissible estimand conversions, and `N_admissible` any nuisance quantities intended to be robust rather than fixed. Alternatively, show the raw conditional atlas over target `(a,w,b)` and overlay the transported target set, but do not vary `(a,w)` twice. Specify whether `κ` is fixed, swept, or included in the robust set. Report transport-only bounds and all-uncertainty bounds separately so the four uncertainty types remain visible.

### 4. Blocking — the target parameterization being transported is not separately identified

Under the primary aggregation, v3 defines `S_j=mean_i(u_ij)` (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:44-50`) and then describes `S_bar_j` as the project-population mean while `v_p` is fixed per run (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:51-57`). On the natural reading `S_bar_j=S_j`, so

```text
M_Cj = (a + w v_p) + (b - w) S_j + η_j.
```

The claim that project indexing makes `w` separately identified from `a` is therefore false. With one fixed `v_p`, `a` and `w v_p` form one intercept, while `b` and `w` form one slope. Selection nonlinearity does not recover coefficient identities that generate the same signal for every project. A transport box over `(a,b,w)` consequently ranges over redundant labels rather than identified target mechanisms. This is exactly the confounding the v2 critique warned would remain unless project-specific planner valuations varied independently of citizen means (`audits/2026-07-11-v1.14-design/critique-v2-dgp-registry-identification.md:87-111`).

**Fix:** use measured project-specific planner own values `v_pj` and define a citizen target `μ_j` explicitly; require variation in `v_pj` conditional on `μ_j`, or reparameterize the model to the identified composites `(α=a+w v_p, q=b-w)` and stop interpreting `w` separately. The bridge study must estimate direct forecasts and own values on the same projects and scale before it can shrink a mechanism-specific `T`.

### 5. Major — `PROXY-INFORMED via T` improves the label but does not fully stop the anchored overclaim

The strongest v3 sentence is correct: target parameters are “ASSUMED (source-informed), not anchored” (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:66-70`). The later single registry status `PROXY-INFORMED(bounded via T)` is weaker because it again merges source evidence, target identification, and transport validity into one badge (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:96-98`). It is also premature while `T` has no bounds.

The surrounding authoritative artifacts still say “literature-anchored,” that parameter ranges are anchored, and that the target moves from assumed to proxy-anchored (`research/e4-value-estimation-foundation.md:1-5,48-63`). The empirical-anchor file calls the model a measured anchor and labels target `a,w` proxy-anchored despite conceding unverified transport (`audits/2026-07-11-v1.14-design/E4-empirical-anchors.md:3-8,57-70`). V3 itself retains the phrase “the anchored form” for the central equation (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:51-57`). Those are live relapse paths for the overclaim.

**Fix:** use separate registry columns, not one status: `source_status=ESTIMATED/TO-BE-EXTRACTED`, `target_status=ASSUMED`, `transport_status=UNVALIDATED`, `analysis_role=BOUNDED/SWEPT`. Reserve `PROXY-INFORMED` for a plain-language note, never an identification status. Replace “anchored form” with “source-motivated candidate form” and align the foundation and empirical-anchor documents with v3 before preregistration.

### 6. Major — the classification rule conflates negligible-within-transport with transport-indeterminate

V3 defines four headline states, including `materially-negligible`, but the transport rule sends every interval not wholly above `+δ` or below `-δ` to `transport-indeterminate` (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:8-14,31-35,74-80`). If `[m_lo,m_hi]⊂[-δ,δ]`, the result is robustly negligible across `T`, not transport-indeterminate. Conversely, an interval crossing a materiality boundary is genuinely indeterminate. Monte Carlo inability to certify an extremum is a separate `unresolved` state, not evidence about transport.

**Fix:** classify `robust-negligible` when the entire identified interval lies inside `[-δ,δ]`; use `transport-indeterminate` when the set spans substantively different classes; and add an orthogonal numerical-certification flag for Monte Carlo/optimization uncertainty. Keep the exact `m=0` frontier separate from all materiality labels.

## Engine inspection

Neither shipped engine can test the proposed transport bounds. E5's central arm is a reach-scaled sample mean combined with credit and has no target `a,b,w` or transport layer (`scripts/simulation/e5-sp-symmetry-gate.mjs:77-90`). E4-v4 implements harm attenuation `gamma` against voice bias `beta`, not the source-target central equation (`scripts/simulation/e4-v4-symmetric-frontier.mjs:36-50,55-64`). They remain useful legacy regressions only. Thus there is currently no executable evidence that `diag(g)·source`, the extrema, or the classifications can be computed as specified.

## Minimum acceptance test for this dimension

This dimension is cleared only when all of the following are present in the preregistration package:

1. exact extracted source estimands and their uncertainty/covariance;
2. an explicit source-to-target estimand/scale map, not merely “normalized” values;
3. a numeric, joint, provenance-backed `T` with coordinatewise nulls, adverse reversals, amplification treatment, and nested robustness sets;
4. a non-duplicated coordinate system separating conditional target axes from transport-generated target sets;
5. bounds over every uncertainty component claimed by the sign classification, with transport-only and wider bounds distinguished;
6. an identified or honestly reparameterized target central model;
7. registry and companion-document language that consistently says target magnitudes are assumed and transport-unvalidated; and
8. executable fixtures showing a robust-central case, robust-distributed case, robust-negligible case, and genuinely transport-indeterminate case.

## Single sharpest improvement

Replace the undefined `diag(g)·source` sentence with one complete, machine-readable identified-set object—`S_source × R_scale × T × N_admissible`—and project that set through the frozen `m` without also treating target `a,w` as free axes. That one change would make it visible exactly which assumptions, rather than which source papers, locate each robust or indeterminate region.

**Bottom line:** v3 has finally adopted the right honesty principle, but not yet the set that makes the principle operational. Source-target separation is cleared in prose; transport identification remains **partial/not cleared** until `T`, the scale map, the target parameterization, and the full extremization domain are explicit and executable.
