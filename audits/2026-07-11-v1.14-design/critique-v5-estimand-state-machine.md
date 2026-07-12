# Critique v5 — estimand and state-machine implementation

## Verdict

**PARTIAL — blocker 3 is substantially implemented, but it is not cleared for preregistration.** The replacement
engine now computes the declared retained-world mean, the contract hashes exact values for `delta`, `zero_tol`, and
the `o_min` calibration fraction, and the evidence artifact emits four separate status fields. Those are real
repairs to v4's prose-only and overlapping one-label state machine
(`scripts/simulation/e4-v5/contract.mjs:75-79,90-103`; `scripts/simulation/e4-v5/engine.mjs:148-170`;
`scripts/simulation/e4-v5/evidence.mjs:41-54`).

The implementation nevertheless answers three different questions with three incompatible objects: sign uses the
point extrema over `D_F`, materiality uses only the **base-point bootstrap CI**, and numerical resolution is merely
`base CI width < delta`. The computed `R_alpha` magnitude sets do not enter either materiality or numerical status
at all (`scripts/simulation/e4-v5/evidence.mjs:49-53,60-64`). Worse, all-degenerate and non-finite paths fail open:
the engine returns `NaN`, box search silently discards it, the hand-written schema accepts `NaN`/infinity, and JSON
serialization changes those values to `null` (`scripts/simulation/e4-v5/engine.mjs:152-170`;
`scripts/simulation/e4-v5/evidence.mjs:24-29`; `scripts/simulation/e4-v5/schema.mjs:17-25`). That contradicts the
design-of-record's explicit `pi_deg=1 -> fail-closed` rule
(`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v5.md:56-59`).

## Commands and observed output

Both official happy-path commands exited 0 on 2026-07-11:

```text
> npm run e4:test
PASS  FIX strong-distributed => m materially > 0  — m=0.462
PASS  FIX strong-central => m < 0 (central wins)  — m=-0.420
PASS  FIX null => |m| negligible  — m=0.0002
PASS  FIX boundary => finite & modest  — m=0.417
...
ALL TESTS PASSED

> npm run e4:evidence
m-hat ... 45.7%  CI=[44.5%, 46.8%]
sign backbone over D_F ... [-6.1%, 110.0%]
alpha=0.95: [14.5%, 74.7%] of oracle
status -> sign:indeterminate  materiality:material  degeneracy:ok  numerical:resolved
pi_deg ... 0.0%
```

The current baseline labels happen not to conflict on materiality: its base CI and every printed `R_alpha` interval
are above `delta=.03`. That coincidence does not validate the routing rule. The acceptance tests call `estimand()`
directly and assert only raw `m_hat` thresholds; they never exercise `classify()` or its boundary/failure cases
(`scripts/simulation/e4-v5/test.mjs:11-39`; `scripts/simulation/e4-v5/evidence.mjs:41-54`).

Focused probes against the shipped engine and a literal transcription of the shipped classifier produced:

```text
all-degenerate estimand: {
  m_hat: NaN, ci: [ NaN, NaN ], pi_deg: 1,
  n_kept: 0, n_worlds: 40, o_min: 0
}

non-finite schema errors: []
JSON serialization: {"pi_deg":1,"m_hat":null,"ci":[null,null],
  "m_lo_DF":null,"m_hi_DF":null,"m_Ralpha":{"0.95":[null,null]}, ...}

crosses-material-boundary, CI=[.020,.049], width=.029:
  sign=pos, materiality=uncertain, numerical=resolved
far-and-wide, CI=[.200,.231], width=.031:
  sign=pos, materiality=material, numerical=unresolved
exact-negligible-band, CI=[-.03,.03]:
  sign=zero-touching, materiality=uncertain, numerical=unresolved
```

The all-degenerate configuration was inside `D_F` for the changed parameters
(`N=100,K=20,m_q=-5,s_q=0,sigma=0,pi_opp=1,mu_opp=50`). Thus this is not merely a deliberately invalid `D_M`
input. The other two classifier probes show that CI width is neither necessary nor sufficient for certification
relative to a decision boundary.

A separate empty-world probe (`N=1,K=10`, 1,000 requested worlds) observed 223 wholly empty worlds and 618
nonempty worlds with `O=0`; the engine reported `n_worlds=777` and `pi_deg=0.7954`, rather than counting all 841
zero-oracle worlds (`pi_deg=0.841`). The cause is the pre-filter at `scripts/simulation/e4-v5/engine.mjs:145`.
Although this probe is outside `D_F` for `N`, the mathematical contract admits it and the estimand definition does
not state conditioning on a nonempty generated project set.

## Fixes genuinely achieved since v4

1. **The primary estimator matches its printed algebra on ordinary finite cells.** It forms
   `(D-C)/O` world by world after enforcing `O>o_min`, then averages the retained ratios; it does not revert to a
   ratio of pooled sums (`scripts/simulation/e4-v5/engine.mjs:149-153`). The bootstrap likewise resamples retained
   ratios as clusters (`scripts/simulation/e4-v5/engine.mjs:155-168`).

2. **The substantive tolerances are machine-readable and hashed.** `o_min_frac=.05`, `delta=.03`,
   `zero_tol=.005`, and `pi_deg_warn=.10` are in `CLASSIFY`, which is included in the contract hash
   (`scripts/simulation/e4-v5/contract.mjs:75-79,143-149`). `delta` is correctly described as a
   fraction-of-oracle quantity, hence dimensionless, rather than a raw mean-value unit
   (`scripts/simulation/e4-v5/contract.mjs:77`).

3. **The output shape is orthogonal.** Sign, materiality, degeneracy, and numerical status are separate enum fields,
   and the `if/else` implementation assigns exactly one enum value per field for ordinary finite inputs
   (`scripts/simulation/e4-v5/contract.mjs:100-103`; `scripts/simulation/e4-v5/evidence.mjs:41-54`). The baseline's
   simultaneous `sign=indeterminate` and `materiality=material` is therefore representable rather than forced into
   one overlapping label.

These repairs clear the v4 objections that no executable conditional estimand, numeric thresholds, or orthogonal
schema existed. They do not clear the end-to-end state machine.

## Remaining issues, ranked

### 1. Blocking — materiality is classified from the base point, not from an identified magnitude set

`classify()` receives no `m_Ralpha` argument. It declares materiality solely when the base-point bootstrap CI lies
outside `[-delta,+delta]`, and negligible solely when that CI lies strictly inside the band
(`scripts/simulation/e4-v5/evidence.mjs:41,48-51,64`). Yet the stated architecture assigns magnitude to the joint
`R_alpha` family, which is computed immediately before classification and then ignored by it
(`scripts/simulation/e4-v5/evidence.mjs:60-64`;
`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v5.md:61-68`).

**Answer: yes, materiality is wrongly tied to the base-point CI rather than the sets.** At best the existing field
is a mislabeled `base_point_materiality_status`. A base point can be decisively material while the preregistered
magnitude set crosses `delta`, or vice versa. The code has no headline-alpha rule, no per-alpha materiality fields,
and no simultaneous MC enclosure for an `R_alpha` endpoint. The current 14.5% lower endpoint at alpha=.95 merely
makes the bug latent in this run.

**Minimum fix:** freeze the primary magnitude layer (or report materiality per alpha), classify the confidence-
enclosed joint-set endpoints against inclusive `+/-delta` boundaries, and name a separate base-point status if it
is still wanted. Add counterfixtures where the point CI and set envelope disagree in both directions.

### 2. Blocking — `pi_deg=1` is labeled, not failed closed, and non-finite values pass the schema

With no retained worlds, `estimand()` deliberately returns `NaN` for `m_hat` and both CI endpoints
(`scripts/simulation/e4-v5/engine.mjs:152-170`). `mOverBox()` silently omits every non-finite cell; if all cells are
omitted it returns the inverted pair `[Infinity,-Infinity]` (`scripts/simulation/e4-v5/evidence.mjs:24-30`). The
classifier can then call that sign `pos`, because `Infinity > zero_tol` is true
(`scripts/simulation/e4-v5/evidence.mjs:44`).

The validator checks only `typeof v === 'number'`, so `NaN` and infinities pass; it does not validate array items or
the interior of `m_Ralpha` at all (`scripts/simulation/e4-v5/schema.mjs:17-25`). This is an operational
misclassification and an invalid JSON artifact, not just a cosmetic issue.

**Minimum fix:** count and propagate evaluation failures; require `Number.isFinite` recursively for all numeric
fields; reject inverted/unsorted intervals; and abort classification/rendering when `pi_deg=1`, no retained-world
minimum is met, or any required set endpoint is uncertified. If degenerate results must serialize, make the numeric
fields explicitly nullable and suppress comparative sign/materiality rather than manufacturing them.

### 3. Blocking — `numerical_status` does not certify the claim it annotates

The entire rule is `(ci[1]-ci[0]) < delta` (`scripts/simulation/e4-v5/evidence.mjs:53`). It ignores distance to
zero, distance to `+/-delta`, uncertainty in `o_min`, uncertainty in `D_F`/`R_alpha` endpoints, missing box points,
and whether corners-plus-center found a global extremum. Therefore a narrow CI that crosses a materiality boundary
is called resolved, while a wider CI far from every decision boundary is called unresolved, as the probes above
show. The evidence CI is for the base cell only, while `sign_status` comes from a 300-world sweep with no confidence
enclosure (`scripts/simulation/e4-v5/evidence.mjs:15-29,44-53,57-64`).

**Minimum fix:** define resolution as a certificate on every reported decision: simultaneous MC enclosures for
the relevant set endpoints, an optimization error/failure flag, a minimum retained count, and clearance of the
nearest sign/materiality boundary. `numerical_status=unresolved` whenever any required certificate is absent.

### 4. Major — the `o_min` rule is frozen, but its estimation and bootstrap treatment are not coherent

The contract freezes the function `o_min=.05*median(O_W)`, not one numerical threshold
(`scripts/simulation/e4-v5/contract.mjs:76`). The engine estimates that median from the same production worlds used
for `m`, changes it at every theta/seed, and then bootstraps only the already-retained ratios
(`scripts/simulation/e4-v5/engine.mjs:147-168`). Consequently the CI is conditional on the realized floor and
retained membership; it omits threshold and selection uncertainty. This also makes the design sketch's description
of `o_min` as simply frozen "in mean-value units" incomplete
(`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v5.md:53-56`).

The literal `.05` is hashed and therefore outcome-blind as a rule, but it is numerically the same value highlighted
in the prior audit. Calling it distinct from the retired `.05` requires substantive provenance, not just the note
that `delta=.03` is different (`scripts/simulation/e4-v5/contract.mjs:74-79`).

**Minimum fix:** declare whether `o_min(theta)` is a population functional, an independent calibration estimate,
or an in-sample statistic. For the current in-sample rule, resample whole `{D,C,O}` triples and recompute the median,
floor, retained set, `m`, and `pi_deg` in each bootstrap draw. Freeze a minimum retained-world rule and document the
reason for `.05`.

### 5. Major — degeneracy excludes wholly empty worlds and lacks finite-sample uncertainty

`runWorld()` marks a world with no admissible projects as empty, and `estimand()` drops it before computing either
the median or `pi_deg` (`scripts/simulation/e4-v5/engine.mjs:133-145`). The printed target is
`Pr(O<=o_min|theta)`, not that probability conditional on a nonempty generated project list. A whole-empty world has
`O=0` and should count unless the conditioning event is explicitly added. No confidence interval is emitted for
`pi_deg`, and the strict `pi_deg>.10` warning rule can flip from `ok` to `high` on Monte Carlo noise
(`scripts/simulation/e4-v5/evidence.mjs:52`).

**Minimum fix:** include empty worlds as `{D:0,C:0,O:0}` in the degeneracy denominator, or amend the estimand and
contract to declare the extra conditioning. Add a binomial/cluster uncertainty rule around the warning boundary.

### 6. Major — exact materiality boundaries and the `zero_tol` contract are inconsistent

The negligible condition uses strict inequalities, so a CI exactly `[-delta,+delta]` is `uncertain`, not
`negligible` (`scripts/simulation/e4-v5/evidence.mjs:49-51`). V4's requested set rule was inclusive, and v5 never
declares otherwise. Separately, the `zero_tol` note says zero-touching depends on `m` or a CI, but the classifier
uses only `D_F` extrema and never reads `m_hat` for sign (`scripts/simulation/e4-v5/contract.mjs:78`;
`scripts/simulation/e4-v5/evidence.mjs:41-47`). The unused `m_hat` classifier argument is direct evidence of this
contract/code drift.

**Minimum fix:** freeze inclusive/exclusive boundary semantics and test exact `-delta`, `+delta`, `-zero_tol`, and
`+zero_tol`. Rewrite the contract note to say the sign field is set-level, or implement the promised point/CI rule
as a separately named field; remove the unused argument.

### 7. Major — the companion domain document still defines a different estimand

`THREE-TIER-VARIABLE-DOMAINS.md` still calls the target `m(theta)=E_W[(D-C)/O]`, without the `O>o_min` condition or
the `pi_deg` diagnostic (`audits/2026-07-11-v1.14-design/THREE-TIER-VARIABLE-DOMAINS.md:28-38`). The executable
contract instead uses the conditional retained-world mean (`scripts/simulation/e4-v5/engine.mjs:148-153`). Thus the
repository still has two definitions attached to the same symbol, and its prose about `D_F`/`R_alpha` extrema is
not formally about the executable estimand.

**Minimum fix:** update the companion equation to the exact conditional functional and state that every set
endpoint and state field refers to that same target.

## Disposition and minimum path to clearance

Keep blocker 3 **PARTIAL**. The shortest defensible repair is:

1. make all-degenerate/non-finite states fail closed and strengthen recursive finite schema validation;
2. classify materiality from a frozen primary `R_alpha` set (or per alpha), not the base-point CI;
3. replace CI-width resolution with endpoint/boundary and optimization certification;
4. bootstrap whole worlds while recomputing the in-sample `o_min`, or move the floor to an independent frozen
   calibration;
5. count empty worlds, add a retained-world minimum, freeze equality behavior, and add direct state-machine tests;
6. align `THREE-TIER-VARIABLE-DOMAINS.md` with the executable conditional estimand.

After those changes, the four-field architecture is suitable for preregistration. In the present code, it is a
sound structural improvement with blocking semantic and failure-path defects, not a cleared state machine.
