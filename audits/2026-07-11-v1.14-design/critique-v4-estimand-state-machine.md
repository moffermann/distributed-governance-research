# Critique v4 — frozen estimand and state machine

## Verdict

**PARTIAL — blocker 3 is materially improved but not cleared for preregistration.** V4 now writes the primary
performance target as the conditional mean of retained per-world ratios and separately reports the probability of
falling outside that target population. That directly repairs v3's equation/exclusion mismatch
(`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v4.md:92-100`; compare the v3 defect at
`audits/2026-07-11-v1.14-design/critique-v3-frozen-estimand.md:19-46`). It also adds the previously missing
`robust-negligible` and `numerically-unresolved` labels (`DESIGN_SKETCH_v4.md:102-111`). Those are real fixes.

It is still not frozen or executable. Neither `o_min` nor `delta` has a value or deterministic calibration rule;
the proposed one-label table is overlapping and non-exhaustive; high degeneracy has no defined cutoff or state;
the numerical rule cannot certify the transport extrema; the companion domain document still prints the old
unconditional estimand; and neither inspected engine implements the v4 functional. The large-`K` link has the right
idea but omits conditions needed to connect the conditional finite-world target and the `D_F` envelope to the
fixed-threshold theorem.

| Question | Assessment |
|---|---|
| Is there one primary performance functional? | **Yes in the v4 sketch:** `m` is a conditional mean of per-world ratios; `pi_deg` is a denominator-domain diagnostic, not a competing performance statistic. |
| Is the two-part target fully frozen? | **No:** its conditioning threshold remains outcome-dependent and unspecified. |
| Are `o_min` and `delta` demonstrably independent of the old `0.05`? | **No recycling is asserted, but not demonstrated:** no replacement values or derivations exist. |
| Is the state machine mutually exclusive and exhaustive? | **No.** There are overlaps, boundary gaps, and no degeneracy precedence. |
| Is numerical versus structural uncertainty separated? | **Named, but not operationally separated.** One `state` field conflates them. |
| Does the large-`K` corollary reach the frozen target? | **Pointwise in spirit, but incompletely stated; it does not establish the transport extrema/state map.** |

## What v4 genuinely fixes

### 1. The primary functional and its analysis population now agree

The binding equation is now

```text
pi_deg(theta) = Pr(O <= o_min | theta)
m(theta) = E[(D-C)/O | theta, O > o_min].
```

Thus reporting `pi_deg` does not create a second institutional-performance estimand. It discloses how much mass the
conditioning event removes, while `m` alone determines the arm comparison (`DESIGN_SKETCH_v4.md:93-100`). This is
the correct two-part target recommended in the v3 review
(`critique-v3-frozen-estimand.md:39-46`). Mean-of-ratios, ratio-of-means, and median are no longer offered as
interchangeable decision targets in the v4 prose.

The sentence introducing the equations nevertheless says "Two co-reported functionals (both frozen), plus a
degeneracy share," although only `m` and the degeneracy share `pi_deg` follow (`DESIGN_SKETCH_v4.md:92-96`). That
wording should be replaced with **"one primary performance functional plus one co-reported degeneracy diagnostic."**
Otherwise it falsely implies that a second performance functional remains available.

### 2. The missing conceptual classes are now recognized

V4 correctly recognizes that an interval wholly inside `[-delta,+delta]` is robustly negligible, that a constant
sign can coexist with uncertain materiality, and that failure to certify a boundary numerically is not itself
transport variation (`DESIGN_SKETCH_v4.md:102-111`). This responds directly to the v3 counterexamples and requested
numerical status (`critique-v3-frozen-estimand.md:48-65,88-103`). The problem is now the formal routing, not the
absence of the concepts.

## Remaining issues, ranked

### 1. Blocking — `o_min` and `delta` are promises, not frozen constants

V4 calls both quantities frozen but gives only prose: `o_min` is a "small positive fraction of median O" and
`delta` is a materiality fraction to be justified later (`DESIGN_SKETCH_v4.md:98-100`). This leaves all of the
following outcome-governing choices open:

- the numerical fraction used for `o_min`;
- whether the median is population or Monte Carlo, computed per `theta`, per domain, or once at a reference cell;
- whether a pilot/production split is used if the same simulated worlds estimate the median and `m`;
- the exact `delta`, its decision interpretation, and its sensitivity family; and
- scale and portfolio-size behavior when `K`, the budget, or the score normalization changes.

If `o_min = kappa_o median_theta(O)` is intended, then it is a parameter-dependent functional
`o_min(theta)`, not one fixed threshold in mean-value units. Estimating it from the same worlds also makes the
retained sample and bootstrap random; the quantile-estimation step must be repeated inside each resample or learned
from an independent frozen calibration run. If instead one absolute threshold is intended, the reference cell and
its transformation with `K` and the value scale must be specified.

The unit claim is also wrong for `delta`. Since `(D-C)/O` is dimensionless, `delta` is a dimensionless oracle-share
tolerance, not a quantity in "mean-value units" (`DESIGN_SKETCH_v4.md:95-99`). Saying that it is "not the retired
0.05" prevents literal reuse in prose, but does not prevent selecting another unexplained value after seeing the
surface. The old executable gate still uses `0.05` as a decision threshold
(`scripts/simulation/e5-sp-symmetry-gate.mjs:151-166`), and the old frontier uses `0.05 O` as a denominator filter
(`scripts/simulation/e4-v4-symmetric-frontier.mjs:59-70`). Until the fresh engine and registry contain exact new
values, there is no mechanical evidence that the old threshold is absent.

**Required fix:** before any outcome-bearing replacement-engine run, register either exact constants or exact
outcome-blind calibration functions. A minimal contract is

```text
o_min,K(theta) = kappa_o * population_median_theta(O_K),  exact kappa_o fixed;
delta = exact dimensionless oracle-share tolerance;
```

plus the reference population, calibration sample/hash, `K` rule, rescaling rule, bootstrap treatment, provenance,
and a frozen sensitivity grid. If no defensible material threshold exists, make `delta=0` the primary sign result
and call nonzero values model-score tolerances rather than material welfare thresholds.

### 2. Blocking — the proposed one-label table is neither mutually exclusive nor exhaustive

The conditions at `DESIGN_SKETCH_v4.md:102-110` overlap. Let `delta=0.05` only for illustration:

| interval `[m_lo,m_hi]` | Conditions triggered by the stated table | Defect |
|---|---|---|
| `[-0.02,0.02]` | `robust-negligible` **and** sign flips within `D_F`, hence `transport-indeterminate` | Two states, no precedence. |
| `[0,0.10]` | Not material-distributed, not negligible, no negative-to-positive flip; "sign constant" is undefined at zero | Potentially no state. |
| `[-0.10,0]` | Symmetric boundary gap | Potentially no state. |
| `[0.01,0.10]` | Intended `sign-robust-immaterial` | Label is false: part of the set is material; magnitude is indeterminate. |
| `[-0.10,0.01]` | `transport-indeterminate` | Correct sign diagnosis, but materiality remains a separate fact. |

`transport-indeterminate` should answer only whether admissible transport values produce both signs. It cannot be a
mutually exclusive alternative to `robust-negligible`, because an interval can have an unidentified sign while its
magnitude is uniformly negligible. This is exactly the separation v3 required
(`critique-v3-frozen-estimand.md:48-65`). The new table restores the negligible label but then recreates the same
conflation through overlapping conditions.

`numerically-unresolved` overlaps all structural conditions as well: a cell has an underlying sign/materiality
status and a separate certification status. A one-field output cannot preserve both, and no priority rule says
whether numerical failure replaces or annotates the structural label. The closed schema currently allows only one
`state` and no sign/materiality/numerical subfields (`DESIGN_SKETCH_v4.md:154-157`).

**Required fix:** publish orthogonal fields and only then, if desired, a deterministic display crosswalk:

```text
sign_status:
  robust-distributed        iff m_lo > 0
  robust-central            iff m_hi < 0
  robust-nonnegative        iff m_lo = 0 < m_hi
  robust-nonpositive        iff m_lo < m_hi = 0
  parity-only               iff m_lo = m_hi = 0
  transport-indeterminate  iff m_lo < 0 < m_hi

materiality_status:
  distributed-material      iff m_lo > delta
  central-material          iff m_hi < -delta
  robust-negligible         iff m_lo >= -delta and m_hi <= delta
  magnitude-indeterminate   otherwise

numerical_status: certified | numerically-unresolved
degeneracy_status: estimable | high-degeneracy | undefined
```

Use tolerance-aware comparisons only for numerical implementation, with the tolerances registered separately from
substantive `delta`. Rename `sign-robust-immaterial` to `sign-robust/magnitude-indeterminate`.

### 3. Blocking — degeneracy can make `m` undefined, but "high" has no rule or routing

V4 says a high-`pi_deg` cell is flagged regardless of `m`, but defines neither "high" nor what happens at
`pi_deg=1` (`DESIGN_SKETCH_v4.md:95-111`). When every world is excluded, the conditional expectation does not exist.
With very few retained worlds, it may exist mathematically but cannot be estimated to the promised precision. A
number in `pi_deg` is not a sufficient state rule, and the closed output schema has no degeneracy flag beyond that
number (`DESIGN_SKETCH_v4.md:154-157`).

**Required fix:** freeze `pi_warn` and a minimum effective retained-world count. Evaluate degeneracy before the
structural classifier: `pi_deg=1` or zero retained worlds must emit `undefined` with `m_hat=null`; a predeclared
high-degeneracy condition must block a comparative headline or visibly qualify it. Define whether `pi_deg` receives
its own Monte Carlo interval, since a point estimate near the cutoff cannot support a deterministic flag.

### 4. Blocking — `numerically-unresolved` is named but not a certification algorithm

"Uncertainty exceeds the gap to the nearest boundary" does not specify which uncertainty or how it is propagated
through minima/maxima over `D_F` and `R_alpha` (`DESIGN_SKETCH_v4.md:99-110,124-127`). The stated world bootstrap
covers only inner simulation variability. Pointwise bootstrap intervals at candidate parameter values do not give a
simultaneous confidence enclosure for optimized extrema, do not certify that the optimizer found the global extrema,
and do not quantify an unbracketed or multiple-root failure. The schema's generic `ci` also does not say whether it
is for one `m(theta)`, a transport endpoint, or a simultaneous enclosure (`DESIGN_SKETCH_v4.md:155-156`).

**Required fix:** define separate estimated transport endpoints and confidence-enclosed endpoints, an optimization
certificate/error bound, simultaneous error control over every searched point, and a preregistered sequential
stopping rule. A structural class is certified only when the confidence enclosure satisfies its inequalities;
otherwise `numerical_status=unresolved` while the provisional structural interval remains visible. Resample world
seeds as paired clusters across arms and parameter points.

### 5. Major — the companion domain contract still defines the old unconditional estimand

The three-tier document calls its object `m(theta)=E_W[(D-C)/O]` with no `O>o_min` condition
(`audits/2026-07-11-v1.14-design/THREE-TIER-VARIABLE-DOMAINS.md:28-35`). V4 instead makes the conditional expectation
the sole estimand (`DESIGN_SKETCH_v4.md:92-100`). Thus the repository currently contains two definitions attached to
the same symbol. The domain document's min/max and sign statements are not formally about the v4 functional until
that equation and its `pi_deg` companion are aligned.

**Required fix:** update the domain document to use the exact conditional definition, indexed threshold rule, and
degeneracy report. State that all `D_F`/`R_alpha` extrema are extrema of that same conditional functional.

### 6. Major — no inspected engine executes the v4 target or state machine

The E5 engine computes per-world ratios and their mean, but its bootstrap computes a ratio of resampled sums
(`scripts/simulation/e5-sp-symmetry-gate.mjs:21-23,102-113`). Its final decision mixes a cell-count condition, a
median of world ratios, and that ratio-of-sums interval (`scripts/simulation/e5-sp-symmetry-gate.mjs:140-166`). The E4 frontier first
averages `D`, `C`, and `O` over seeds and then reports `D/C`, `C/O`, and `D/O`; it has no per-world conditional mean,
`pi_deg`, or state machine (`scripts/simulation/e4-v4-symmetric-frontier.mjs:36-64,73-100`). Neither engine has an
`O<=o_min` branch.

V4 correctly proposes isolating both as legacy artifacts, but uses future tense: they "move" behind a guard and a
fresh evidence engine is only specified, not present (`DESIGN_SKETCH_v4.md:154-164`). Accordingly the prose now
chooses one functional, while executable conformance remains unshown.

**Required fix:** the replacement engine must bootstrap the mean of retained per-world ratios, jointly estimate
`pi_deg`, serialize the orthogonal statuses, and pass fixtures for floor equality, zero-touching intervals, the
overlap example above, all-degenerate samples, and estimator identity. None of the old gate's pooled decision code
may feed the v4 classification.

## Large-`K` linkage

The corollary adds the essential positive-oracle concentration and uniform-integrability ideas requested in v3
(`DESIGN_SKETCH_v4.md:145-147`; `critique-v3-analytic-benchmark.md:48-70`). Under the fixed-threshold theorem's iid
assumptions, the intended proof is short: establish

```text
D_K/K -> V_D,  C_K/K -> V_C,  O_K/K -> V_O > 0;
```

then the continuous-mapping theorem gives `(D_K-C_K)/O_K -> (V_D-V_C)/V_O`. Uniform integrability upgrades this to
mean convergence, and `Pr(O_K>o_min,K)->1` makes conditioning asymptotically irrelevant. Hence `pi_deg,K->0` and the
conditional `m_K` has the displayed limit.

V4 states only the oracle convergence explicitly, however. Its conclusion also requires the two numerator LLNs,
and uniform integrability must apply to a well-defined retained/extended ratio rather than an expression that may
divide by zero (`DESIGN_SKETCH_v4.md:145-147`). More importantly, the threshold language is inconsistent with the
corollary: if `o_min` is a fraction of median `O_K`, it generally grows with `K`, so it must be indexed and satisfy
`o_min,K/K -> omega < V_O`; it cannot be treated as an unindexed fixed constant. If the theorem is meant to justify
the extrema over `D_F`, pointwise convergence at each `theta` is insufficient: uniform convergence (and uniform
integrability/denominator separation) over the searched set is needed before exchanging `K->infinity` with
`inf`/`sup`.

Thus the large-`K` result supports the pointwise zero-parity intuition after these repairs. It does **not yet**
validate the finite-world conditional state map or its transport envelope, and it says nothing by itself about the
`+/-delta` materiality boundaries.

## Minimum acceptance test for blocker 3

Mark this blocker cleared only when all of the following are in the immutable preregistration and replacement
engine:

1. One exact conditional `m` and one clearly labeled `pi_deg` diagnostic are used in every companion document.
2. `o_min` and `delta` have exact values/functions, units, reference populations, `K`/scale rules, and outcome-blind
   provenance; no old `0.05` decision enters the evidence namespace.
3. Sign, materiality, numerical certification, and degeneracy are orthogonal, exhaustive, and boundary-complete.
4. `pi_deg=1`, high degeneracy, and insufficient retained worlds have deterministic fail-closed behavior.
5. Transport extrema have simultaneous numerical enclosures and optimization/root-finding failure rules.
6. The fresh engine targets the retained-world mean only and passes deterministic counterexample fixtures.
7. The large-`K` corollary states numerator and denominator LLNs, the indexed floor condition, and either remains
   explicitly pointwise or adds the uniform conditions needed for `D_F` extrema.

V4 has frozen the **type** of functional and repaired the formula. It has not yet frozen the thresholds or produced
a valid state machine, so the correct blocker status is **PARTIAL**, not cleared.
