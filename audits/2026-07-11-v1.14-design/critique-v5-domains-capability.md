# Dimension 5 — joint `D_F` / `R_alpha` and capability

## Verdict

**PARTIAL — blocker 5 is not cleared. Capability criterion met: NO.** V5 now has executable endpoint tables,
deterministic sweeps, a content hash, and point fixtures that demonstrate that the DGP can produce a distributed win,
a central win, and an exact-ish null. Those are real advances over v4. But the reported “joint” regions are only a
four-parameter Cartesian slice through a 30-parameter contract, the nominal `R_alpha` objects have no probability
measure or verified joint coverage, and the region-construction code is not included in the contract hash. The
acceptance fixtures call the point estimand rather than the evidence pipeline and the alleged boundary is a large
positive effect. They establish DGP expressivity, not the stated outcome-blind capability guardrail.

## Commands run and material output

`npm run e4:test` passed, with:

```text
PASS  FIX strong-distributed => m materially > 0  — m=0.462
PASS  FIX strong-central => m < 0 (central wins)  — m=-0.420
PASS  FIX null => |m| negligible  — m=0.0002
PASS  FIX boundary => finite & modest  — m=0.417
ALL TESTS PASSED
```

`npm run e4:evidence` produced:

```text
m_hat: 45.7%  CI=[44.5%, 46.8%]
sign backbone over D_F: [-6.1%, 110.0%]
R_0.5: [36.5%, 62.0%]
R_0.8: [25.6%, 71.7%]
R_0.95: [14.5%, 74.7%]
sign:indeterminate  materiality:material  degeneracy:ok  numerical:resolved
```

An inline `node --input-type=module -` audit of the registry and omitted one-factor endpoints (300 worlds, frozen
seed) found:

```text
THETA keys=30; swept=4; fixed=26
base               m= 0.4540
p.df.lo (0.001)    m=-0.3758
p.df.hi (1)        m= 0.5367
sigma_e.df.hi (10) m=-0.0635
b.df.lo (0)        m= 1.1399
b.df.hi (3)        m= 0.1161
```

Thus even an omitted single coordinate can change the sign or exceed the published four-coordinate envelope. A
second inline probe used `N=1000`, `K=120` and values entirely within every parameter's declared contract
`ralpha` interval. At 600 worlds it found two points in the nominal full Cartesian `R_.8`:

```text
R8 negative endpoint: m=-0.3351 CI=[-0.3429,-0.3277]
R8 positive endpoint: m= 0.8516 CI=[ 0.8393, 0.8646]
```

The negative point was
`{s_exp:1,b_H_C:1,beta:.7,p:.05,sigma_e:1.5,a:-.3,b:1.1,w:.2,sigma_C:.1,lambda:0,gamma:.2,sigma_v:.1}`;
the positive point used the opposite declared `ralpha` endpoints. Interpolating between them, still inside that box,
gave a near-null at 1,000 worlds:

```text
t=0.135 m=-0.0221 CI=[-0.0276,-0.0168]
t=0.140 m=-0.0137 CI=[-0.0185,-0.0084]
t=0.145 m= 0.0051 CI=[ 0.0004, 0.0110]
```

So the declared per-parameter `R_.8` bands admit a central win, a negligible/null result, and a strong distributed
win. The published all-positive `R_.8=[25.6%,71.7%]` is a property of the selected four-dimensional slice, not of
the contract's stated expectable region.

## Specific issues

### 1. The boxes are joint only in a narrow syntactic sense; they are not the joint contract domains

`SIGN_KEYS` contains only `w`, `b_H_C`, `beta`, and `s_exp`; `dfBox` and `ralphaBox` construct boxes only for the
keys passed to them (`scripts/simulation/e4-v5/evidence.mjs:14-16,32-39`). `boxPoints` does evaluate all 16 joint
corners of that four-dimensional box plus its center, rather than doing four marginal one-at-a-time runs
(`scripts/simulation/e4-v5/evidence.mjs:18-30`). But `buildEvidence` fixes all other parameters at one base point and
sweeps only those four (`scripts/simulation/e4-v5/evidence.mjs:57-63`). In contract terms, this is a 4-D Cartesian
slice through 30 registered dimensions, with 26 fixed, not the promised joint `D_F` or joint `R_alpha` over
`theta_all`.

The omission is substantive, not cosmetic. The focused probes show that omitted `p` and `sigma_e` can reverse the
sign within `D_F`; omitted `a`, `b`, `gamma`, and `lambda` materially move it too. There is no frozen sensitivity
analysis proving that the other 26 coordinates are sign-inert, nor a contract declaration that they are point-known
rather than uncertain. The design-of-record promises a joint set with dependence and a sign minimum/maximum
(`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v5.md:61-72`), while the code itself concedes that corners plus center
only “approximate the extrema” (`scripts/simulation/e4-v5/evidence.mjs:14-15`). The emitted numbers therefore are
neither certified extrema nor the measure-free full-domain backbone.

There is an additional membership error: evidence overrides `N` to 900 (`scripts/simulation/e4-v5/evidence.mjs:10-12`),
but the contract declares `N`'s `ralpha` interval as `[1000,20000]` (`scripts/simulation/e4-v5/contract.mjs:21`).
Consequently, none of the reported magnitude points is even a member of the full per-parameter `R_alpha` product it
purports to summarize. `validateConfig` checks only `D_M`, not membership in `D_F` or `R_alpha`
(`scripts/simulation/e4-v5/contract.mjs:117-130`).

### 2. `ALPHA_FACTOR` is an arbitrary width label, not a coverage family

The only alpha-specific construction is the unreferenced map `{.5:.6,.8:1,.95:1.3}` followed by coordinate-wise
midpoint scaling and clipping (`scripts/simulation/e4-v5/evidence.mjs:33-39`). No source distribution, elicited joint
law, copula, draws, or coverage validation supports those factors. “Declared dependence: none” in a comment
(`scripts/simulation/e4-v5/evidence.mjs:14-15`) is not a probability measure. Even if each base interval had 80%
marginal coverage and the four coordinates were independent, their Cartesian intersection would have only
`0.8^4=0.4096` joint coverage, not 0.8. Here, even the marginal 80% premise is not defined.

The factors are also outside the supposedly sole machine-readable contract. `contractHash()` hashes `THETA`, `NUM`,
`CLASSIFY`, `ALPHA_LEVELS`, and `AGGREGATION`, but not `SIGN_KEYS`, `ALPHA_FACTOR`, `WORLD`, sweep budgets, the box
construction, or a joint law (`scripts/simulation/e4-v5/contract.mjs:140-149`; `scripts/simulation/e4-v5/evidence.mjs:10-16,37-39`).
Changing the reported uncertainty regions can therefore leave `theta_id` and the printed contract hash unchanged.
This contradicts the design claim that the joint objects and construction rule are frozen and hashed
(`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v5.md:61-72,82-84`).

**Can `R_alpha` still be gerrymandered to a null or a positive? Yes.** The current four-coordinate slice returns an
all-positive magnitude. The complete declared per-coordinate `ralpha` product contains negative, near-null, and
strong-positive points, as the probes above show. With no outcome-blind joint measure or construction criterion, an
analyst can obtain different headlines by choosing which coordinates to sweep, which to hold fixed, and which
unhashed scaling factors to apply. Reporting three arbitrary nested widths does not remove that freedom.

### 3. The fixtures prove point-model expressivity, not evidence-pipeline capability

The fixture helper calls `estimand(...).m_hat` directly (`scripts/simulation/e4-v5/test.mjs:10-15`). None of the four
fixtures invokes `buildEvidence`, the domain sweep, the classifier, the closed output, or the render adapter. The
assertions test only hand-chosen point thresholds (`scripts/simulation/e4-v5/test.mjs:16-37`). Therefore they show
that the DGP can generate all three signs, but not that the preregistered pipeline would surface a strong result
without the domain construction washing it out or selecting it in.

The strong-central and null fixtures also set `s_exp=0` (`scripts/simulation/e4-v5/test.mjs:22-31`), outside its
declared `D_F=[0.2,10]` and `ralpha=[1,4]` (`scripts/simulation/e4-v5/contract.mjs:52`). A capability fixture outside
the base-case physical domain cannot establish capability of the base-case evidence envelope.

The “boundary” fixture is especially revealing. Its comment promises small magnitude, but the test accepts anything
finite with `|m|<0.5` (`scripts/simulation/e4-v5/test.mjs:33-36`). It returns `m=0.417`, only 0.045 below the strong
distributed fixture's 0.462 and roughly fourteen times `delta=0.03` (`scripts/simulation/e4-v5/contract.mjs:74-79`).
It exercises no sign, materiality, or zero-touching boundary and would pass a very large effect. This is an
under-calibrated smoke test, not the boundary acceptance test promised by the design
(`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v5.md:89-90`).

## Required fixes

1. Put a genuinely joint domain artifact in the contract: explicitly distinguish fixed from uncertain coordinates;
   encode every swept key, cross-parameter constraint or joint law, source-to-target map, alpha-region construction,
   evaluation world, optimization tolerance, and failure rule; include all of it in the content hash. Reject an
   evaluation configuration that is outside the region it claims to evaluate.
2. For `D_F`, optimize over every uncertain parameter that can affect the sign, or provide and test a theorem that
   safely profiles dimensions out. Use a certified global search/enclosure or validated monotonic reduction; do not
   serialize corners-plus-center as extrema when the code calls them approximations.
3. Replace `ALPHA_FACTOR` with an outcome-blind empirical/elicited joint distribution or explicitly named law family.
   Construct nested regions with demonstrated joint coverage (not per-coordinate width labels), validate coverage by
   simulation or exact calculation, and predesignate the headline alpha.
4. Make each capability fixture run the same evidence builder, optimizer, classifier, schema, and adapter used for
   release. Assert the expected sign and materiality statuses and interval placement. Keep all base-case fixtures
   inside their declared domains. Calibrate the boundary fixture to `|m|<=zero_tol` or to a CI/materiality boundary,
   and fail if it returns an effect like 0.417.
5. Add adversarial full-region fixtures using the negative, near-null, and positive `R_.8` points above. The current
   magnitude claim should be withdrawn until the pipeline either encloses those points or narrows the joint region
   with outcome-blind evidence and verified coverage.

## Disposition

V5 clears the narrow question “can this engine numerically produce distributed, central, and null point outcomes?”
It does **not** clear v4 blocker 5: the sign backbone is not over the full frozen joint `D_F`, the magnitude layer is
not a measured joint `R_alpha`, and the fixtures do not prove pipeline capability. **Capability criterion NOW met:
NO.**
