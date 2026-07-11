# Critique v3 — frozen estimand

## Verdict

**PARTIAL — the functional-choice ambiguity is cleared in prose, but blocker 3 is not fully cleared for pre-registration.** V3 now commits to one population functional, `m(theta) = E_W[(D_W-C_W)/O_W | theta]`, and says that the Monte Carlo estimator is the sample mean of those world-level ratios. That is a real correction: the primary sign can no longer be selected after the run by switching among a mean of ratios, a ratio of sums, or a median (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:16-30`).

The remaining defects are consequential. The displayed estimand is inconsistent with its own exclusion rule; `o_min` and `delta` have neither values nor defensible calibration rules; the transport classification conflates sign identification with materiality and deletes the promised materially-negligible class; and there is no numerical-unresolved state. The only shipped implementation still bootstraps a ratio of sums and combines mean and median criteria, so executable conformance has not yet been demonstrated (`scripts/simulation/e5-sp-symmetry-gate.mjs:21-23,102-113,140-155`).

| Question | Assessment |
|---|---|
| Is there now one declared functional? | **Yes, in the v3 prose.** |
| Is its analysis population frozen? | **No.** The formula averages over all worlds while the rule conditions away low-`O` worlds. |
| Can a ratio of sums or median still determine the primary sign? | **Not under the prose spec, but yes in the only shipped gate.** |
| Is `delta` justified independently of the retired `0.05` gate? | **No.** Recycling is prohibited, but no value or decision basis replaces it. |
| Are frontier, transport indeterminacy, materiality, and Monte Carlo uncertainty coherent? | **No.** They are currently collapsed into one incomplete state machine. |

## Specific issues, ranked

### 1. Blocking — the equation and the `O <= o_min` exclusion define different estimands

The binding equation averages `(D-C)/O` over `W` conditional only on `theta` (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:22-25`). The next bullet excludes every world with `O_W <= o_min` (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:26-28`). Those statements cannot both be the estimand. The implemented object implied by the prose is instead

```text
m_cond(theta) = E[(D-C)/O | theta, O > o_min].
```

That is a conditional-population estimand. It does not describe performance over all sampled economies, and its sign can differ from the unconditional mean whenever opportunity size covaries with the arm difference. Merely reporting the excluded share does not repair the missing conditioning in the definition.

The floor is also only called a “pre-set small positive” value; it has no numerical value, unit-preserving rule, or maximum acceptable exclusion rate. Although `o_min` appears in `theta_all`, the registry is only promised, not supplied (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:26-28,92-98`). Because `S_j` is explicitly a synthetic score whose scale and zero are deferred to a future crosswalk, “small” has no invariant meaning yet (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:38-42`). Rescaling every score changes which worlds are retained unless `o_min` is transformed with the scale.

This is not a theoretical corner case. Under three equally likely worlds,

```text
(O, D-C) = (1, +1), (100, -2), (100, -2),
```

the declared mean of world ratios is `(1 - .02 - .02)/3 = +0.32`, while the ratio of sums is `-3/201 = -0.0149` and the median world ratio is `-0.02`. If `o_min >= 1`, the exclusion rule removes the first world and the conditional estimand becomes `-0.02`. Thus the denominator and floor can reverse the institutional sign even though no underlying arm outcome changes.

**Fix:** replace the displayed definition with an explicit two-part target:

```text
pi_deg(theta) = Pr(O <= o_min | theta)
m_cond(theta) = E[(D-C)/O | theta, O > o_min].
```

Every map and conclusion must say “among nondegenerate worlds.” Freeze an exact `o_min`, its units and rescaling rule, the denominator used for `pi_deg`, and a rule for when the degenerate share is too large to certify a comparative conclusion. Report floor sensitivity over an outcome-blind, predeclared set. Better still, if substantively possible, define the world generator/oracle so that `O` is positive by construction and treat “no positive opportunity” as a separate outcome rather than silently truncating it.

### 2. Blocking — the transport rule confounds sign identification with materiality and drops one of the advertised states

V3 advertises a **sign-robust** four-state map (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:8-14`). At a fixed transported target it first defines `materially-negligible` by `|m| <= delta` (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:31-35`). But after transport it classifies as distributed only when `m_lo > delta`, central only when `m_hi < -delta`, and **everything else** as `transport-indeterminate` (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:74-81`). The materially-negligible class therefore disappears from the actual partial-identification rule.

The rule also misstates what is identified. With `delta=.05`:

- `[m_lo,m_hi]=[.01,.10]` has an identified positive sign, but v3 labels it transport-indeterminate because materiality is not uniform.
- `[-.02,.02]` has an unidentified sign, but the effect is uniformly inside the declared negligible band; v3 again labels it transport-indeterminate.
- `[.06,.10]` is robustly positive and material under the band, which is the only positive case the current label handles correctly.

Calling all three failures “the sign is unidentified” contradicts the stated object. Sign identification is determined at zero; materiality identification is determined at `+/-delta`. They are separate questions.

**Fix:** report two axes rather than forcing one label:

1. **Sign status:** robust-central if `m_hi < 0`; robust-distributed if `m_lo > 0`; parity-compatible if `0 in [m_lo,m_hi]`.
2. **Materiality status:** robust-central-material if `m_hi < -delta`; robust-distributed-material if `m_lo > delta`; robust-negligible if `[m_lo,m_hi]` is contained in `[-delta,+delta]`; magnitude-indeterminate otherwise.

If a single display class is required, publish an explicit precedence/crosswalk from those two axes. Reserve `transport-indeterminate` for uncertainty caused by variation over `T`, not for every result that fails a materiality inequality.

### 3. Blocking — `delta` is still an ungrounded threshold, not an honestly justified materiality margin

V3 correctly separates the exact frontier `m=0` from the `+/-delta` overlay and expressly rejects borrowing the retired `0.05` rebuild threshold (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:31-35`). That closes the conceptual overlap defect in v2. It does **not** supply a materiality justification. No numerical `delta`, elicitation protocol, measurement-resolution argument, or decision loss is given. “Fixed from delivered-value units” is also imprecise: `m` is already dimensionless because each world difference is divided by `O`, so `delta` is a fraction of the reference, not a delivered-value unit. And the underlying `S_j` scale is a synthetic model score with no cardinal-welfare claim (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:38-42`).

A different unexplained constant would not be more honest than `0.05`. Without a target-domain consequence attached to the margin, “materially negligible” overclaims what the score can establish.

**Fix:** before pre-registration, either:

- derive one exact `delta` from an outcome-blind decision-loss or measurement-resolution analysis on the declared score scale; or
- rename it a **model-score tolerance**, make `delta=0` the primary sign analysis, and report a frozen sensitivity set of nonzero tolerances without selecting among them after seeing the atlas.

The registry must include the exact value, provenance, unit/scale transformation, and frozen decision rule, not merely the statement that it will be “justified in-domain” later (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:92-98`).

### 4. Major — the mean of world ratios is one coherent choice, but its welfare/risk weighting is not justified

The three-world example above does not prove that the mean of ratios is biased. Bias is defined relative to a target, and v3 is free to choose an equal-world, scale-normalized target. It does prove that the choice embeds a substantive weighting rule: each retained world receives equal probability weight after its arm difference is amplified by `1/O`. A small-opportunity world can therefore dominate many high-opportunity worlds. A ratio of expectations instead weights worlds in proportion to `O`; a median asks about the typical retained world. None is mechanically correct.

V3 commits to the mean of ratios but gives no reason why equal-world normalized regret is the decision-relevant object for the stated budgeted-selection problem (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:16-25,127-128`). Its truncation rule makes the implicit weighting sharper, because it changes discontinuously from `1/O` to zero at `o_min`.

**Fix:** retain exactly one primary functional, but add a short decision interpretation: for example, “the target is expected relative arm advantage for a randomly drawn nondegenerate jurisdiction-world, giving jurisdictions equal weight rather than weighting by opportunity volume.” Pre-register the world-sampling measure. Report the ratio of expectations and median only as named **estimand-sensitivity diagnostics**, never as alternative classification rules. Include the denominator distribution, tail/influence diagnostics, and the floor-sensitivity map so readers can see whether a few near-floor worlds determine the primary sign.

### 5. Major — there is no `numerically-unresolved` state, and the transport interval is conflated with Monte Carlo uncertainty

V3 promises a world-cluster bootstrap interval for inner simulation variability (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:29-30`) but defines every state using the unknown population values `m`, `m_lo`, and `m_hi` (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:31-35,74-81`). It gives no certification rule when the Monte Carlo interval crosses zero or `+/-delta`, no simultaneous error control while optimizing over `T`, and no frontier-location error. The output schema then places `m_hat`, `[m_lo,m_hi]`, and one class in the same record without specifying whether the brackets are transport extrema, confidence limits, or confidence-enclosed transport extrema (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:108-114`).

Failure to establish a sign numerically is not transport indeterminacy. More worlds can shrink the former; only evidence or assumptions can shrink the latter.

**Fix:** use separate fields and labels, for example:

```text
transport_interval = [t_lo, t_hi]
mc_enclosure_of_transport_interval = [L_t, U_t]
structural_status = ...
numerical_status = certified | numerically-unresolved
```

Certify a class only when the confidence enclosure satisfies the relevant strict inequality. Otherwise emit `numerically-unresolved`, increase worlds under a preregistered stopping rule, and report the residual uncertainty. Resample a world seed as a paired cluster across every evaluated `g` and nearby frontier point so optimization and root-finding preserve common-random-number dependence.

### 6. Major — the core estimand is not yet executable; the shipped gate still targets multiple functionals

V3 describes a future engine and estimand-consistency test, not an implementation (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:108-114`). The shipped E5 gate does store world-level `(D-C)/O` and its sample mean, but its bootstrap resamples `D`, `C`, and `O` and returns `(sum D-sum C)/sum O`, a ratio-of-sums functional (`scripts/simulation/e5-sp-symmetry-gate.mjs:21-23,102-113`). Its final decision also combines the pooled median of world ratios with that ratio-of-sums lower bound (`scripts/simulation/e5-sp-symmetry-gate.mjs:140-155`). It has no `O <= o_min` branch. Therefore the tree contains no executable evidence that v3's frozen estimand, exclusion, transport extrema, and state machine work together.

**Fix:** the replacement engine's bootstrap must resample the stored retained-world ratios and take their mean. Add deterministic fixtures for:

- the three-world sign-flip example above;
- `O=o_min` and values just above/below it;
- a transport interval wholly positive but crossing `delta`;
- a transport interval wholly inside `[-delta,+delta]`;
- an MC interval crossing a structural threshold; and
- equivalence between the reported class and the serialized fields.

The old gate may remain a historical regression artifact, but none of its interval or pooled-decision code can be reused for v3 evidence.

## Frontier coherence

For a fixed complete target parameter vector, including a fixed `g`, `{theta:m(theta)=0}` is a coherent exact frontier. Under transport partial identification, however, there is not one target frontier. There is a family `B_g={theta_s:m(theta_s,g)=0}` and its projection. The measure-free parity-compatible region is

```text
{theta_s : 0 in [m_lo(theta_s), m_hi(theta_s)]}.
```

That region is not the same as `transport-indeterminate` under the present `+/-delta` rule. V3 should name the fixed-`g` exact frontier, the projected parity-compatible set, and the two materiality boundaries separately. Root-finding must search for multiple roots and report unbracketed/discontinuous slices rather than assuming one crossover (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:31-35,74-90`).

## Minimum acceptance test for this dimension

Blocker 3 can be marked cleared only when all of the following are true:

1. The formula explicitly conditions on `O > o_min`, and the degenerate-world share is a co-primary reported object.
2. `o_min` and `delta` have exact frozen values, units, scale rules, and outcome-blind justifications.
3. Sign status at zero is separated from materiality status at `+/-delta`.
4. `materially-negligible`, `transport-indeterminate`, and `numerically-unresolved` are all reachable under explicit, non-overlapping rules.
5. The fixed-transport frontier and the projected partial-ID parity-compatible region are named separately.
6. The replacement engine and bootstrap target the mean of retained per-world ratios only, with the counterexample fixtures passing.

V3 has made the most important commitment: **one functional now determines the primary sign.** It is not yet safe to pre-register that functional until its conditioning event, threshold semantics, uncertainty states, and executable estimator are made equally explicit.
