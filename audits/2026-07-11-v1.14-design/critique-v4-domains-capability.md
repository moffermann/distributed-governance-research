# Dimension 5 — three-tier domains and capability criterion

## Verdict

**PARTIAL.** The separation of a measure-free sign envelope from a measure-based magnitude envelope is coherent
*conditional on fully frozen joint sets*, and it is a real improvement over treating probability mass as the primary
result. But v4 supplies only marginal domain sketches, not those joint sets or their measure. Several exclusions
called “physically impossible” are actually contestable sign-invariance assumptions. Therefore the construction can
still be tuned either to indeterminacy or to a favorable result.

**V3 blocker 5: PARTIAL, not cleared.** **Capability criterion met: NO as specified.** The reporting architecture
could display a strong real effect, but the current contract cannot establish that such a result was surfaced without
outcome-sensitive domain construction.

## What is sound

At a frozen **joint** `D_F`, extrema of `m` are genuinely measure-free; no copula or weighting can change them. At a
frozen `R_alpha`, reporting magnitude conditionally and alongside the `D_F` result is also a defensible hierarchy.
V4 correctly says the bounds are conditional transport-sensitivity bounds rather than an empirical identified region
(`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v4.md:124-130`). It also explicitly permits a strong outcome instead
of making indeterminacy the only acceptable conclusion (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v4.md:11-21`).

## Specific issues

### 1. There is no joint `D_F`, joint measure, or executable `R_alpha`

`Theta_transport` names `D_F` and `R_alpha`, but defines them only “per coeff”
(`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v4.md:114-123`). The companion table supplies unquantified marginal
phrases such as `w_max`, `b_max`, a “scale-bounded interval,” and “near a defensible central attenuation”
(`audits/2026-07-11-v1.14-design/THREE-TIER-VARIABLE-DOMAINS.md:18-26`). It does not say whether the joint set is a
Cartesian product, encode deterministic/behavioral constraints, or specify dependence. Cartesian corners can be
jointly impossible and manufacture indeterminacy; favorable joint constraints can manufacture robustness.

Likewise, per-coordinate `P(X in R_alpha) >= alpha` does not make their intersection an alpha-coverage joint region
(`audits/2026-07-11-v1.14-design/THREE-TIER-VARIABLE-DOMAINS.md:8-16`). No probability law, source-to-target
construction, copula, or conditional sampler is given. Nor is `R_.5 subset R_.8 subset R_.95` required. Many sets
with the same mass have different extrema, and v4 does not designate which alpha is primary. Thus the demand that a
reviewer be unable to widen or narrow the band to flip the headline is an aspiration, not a test
(`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v4.md:16-18`). Calling the resulting interval “identified” is also too
strong (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v4.md:126-130`).

### 2. `D_M minus D_F` mixes impossibility with an unverified directional hypothesis

Excluding probabilities outside `[0,1]` and negative dispersion is structural. Negative `w`, `b`, or `g` is
different: anti-projection/reactance, a negatively informative proxy, or target-context reversal may be behaviorally
possible. “Not a competent estimator” does not make `b<0` physically impossible, and “does NOT reverse” simply
assumes the disputed transport invariance (`audits/2026-07-11-v1.14-design/THREE-TIER-VARIABLE-DOMAINS.md:21-26`).
The negative-speed analogy therefore does not justify all exclusions. For `beta`, `p`, and a standard-deviation
parameter, invalid values should not even be in the model's mathematical domain; for signed mechanisms, the
one-sided restriction should be labeled and defended as a substantive model assumption. Otherwise excluding
sign-reversal can smuggle a directional answer into the “incorruptible” backbone
(`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v4.md:121-128`).

### 3. The capability safeguard remains bidirectionally gameable

The design can force a null/indeterminate result by taking a Cartesian `D_F` with extreme, mutually incompatible
corners; including `g=0` in every sign claim can also defeat robust sign even when a substantial mechanism operates
through positive transport in the target population. Conversely, one can force a positive-looking magnitude by
choosing among equal-coverage `R_alpha` regions, dependence structures, or the three alpha levels after seeing the
surface. Reporting all three helps but does not solve this unless construction and headline selection are frozen.
The proposed examples of impressive outcomes show logical possibility, not an outcome-blind capability audit
(`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v4.md:19-21`).

## Prioritized fixes

1. Freeze machine-readable **joint** `D_F` and nested joint `R_.5`, `R_.8`, `R_.95`, with every endpoint,
   cross-parameter constraint, source/elicitation provenance, scale map, full probability law or law family, and
   validation/sampling procedure. State whether all alpha levels are co-primary or designate one before output.
2. Split structural invalidity from directional identifying assumptions. Put invalid values outside the model domain;
   for `w`, `b`, and `g`, either supply evidence for one-sided target-population support or report a separately labeled
   sign-reversal rival-model sensitivity analysis.
3. Make gerrymandering resistance executable: freeze the region-construction rule before any production run, hash the
   artifact, report every frozen alpha and rival directional model, and add synthetic strong-positive, strong-negative,
   null, and boundary fixtures demonstrating that the pipeline recovers each without changing domains.

**Single sharpest improvement:** replace the per-parameter table with a frozen joint-domain-and-measure artifact whose
region-construction algorithm is outcome-blind and whose signed exclusions are explicitly treated as assumptions.
