# Adversarial critique summary — E4 v1.14 (v8), code + paper draft

## Verdict

**NEEDS CHANGES. E4 is viable and close, but it is not publication-ready yet as a comparative-institutions
robustness result.** This verdict applies the requested bar, not a calibrated-impact or preregistration bar. The
remaining blockers do **not** require target-domain data: they are internal contrast-definition, evidence-
interpretation, documentation-integrity, theorem-scope, and release-boundary defects.

The main v7 numerical blockers are genuinely fixed. The current executable has four distinct named points; the
central wins its full central-favourable point; the published scenario levels reproduce; and the combined
PROBABLE-to-PRO_CENTRAL path crosses at `t≈0.57` inside the declared segment. H3 also works at runtime for all 19
legacy engines, and the exact M2 examples named in the change log are blocked.

The paper nevertheless makes one central causal claim that its own contrast does not support: `NO_MYOPIA` changes
eight coordinates, so `+46.6% → +6.1%` does not isolate harm myopia. The canonical evidence output also contradicts
the corrected design by saying “evidence-anchored,” “three named scenarios,” and `PRO_CENTRAL ≈parity`; it converts
400/400 independent box draws into “100% of the plausible envelope,” `sign:pos`, and `±0% SE` even though the same
code locates a central-winning region inside that box. Finally, the advertised code/document single source does not
exist: the Markdown duplicates scenario values and its PRO_DIST column differs from the executable on all 18 varied
fields, while the regression test pins only broad outcome ordering.

Detailed reviews:

- [Code and release review](critique-v8-code-release.md)
- [Scenarios, frontier, and envelope review](critique-v8-scenarios-frontier.md)
- [Theorem and paper review](critique-v8-theorem-paper.md)

## Audit baseline and execution

Final verification was against `master` at `0537ef7ae27af99bf59dfbca979d02dcfd66ff6b`, later than the requested
minimum `6ae8e39`. The branch advanced once during the audit; the intervening commit changed only the boundary
fixture, so the full required suite was rerun at the final HEAD.

| command | exit | current-HEAD result |
|---|---:|---|
| `npm run e4:controls` | 0 | all controls pass; harm control `0.4632 → 0.1118` |
| `npm run e4:test` | 0 | all tests pass; new boundary fixture `m=+0.032`; 19 guards reported |
| `npm run e4:theorem` | 0 | Gaussian identity error `0.00029 = 0.17 MC SE` |
| `npm run e4:scenarios` | 0 | `−29.5%, +6.1%, +46.6%, +199.8%` with the declared winner ordering |
| `npm run e4:frontier` | 0 | combined path crosses parity at `t≈0.57`; `t` called illustrative |
| `npm run e4:evidence` | 0 | 400/400 independent-box draws positive; canonical output retains stale/false labels |

Targeted probes at the published world/run design reproduced:

| contrast | `m` | implication |
|---|---:|---|
| PROBABLE | `+46.6%` | declared reference point |
| change only the two coordinates used as NO_MYOPIA harm settings | `+30.4%` | the two harm changes do not produce `+6.1%` |
| literal nested `s_exp=0,b_H_C=1` | `+13.6%` | literal no-myopia still differs materially from the named row |
| named NO_MYOPIA eight-coordinate bundle | `+6.1%` | harm-aware plus broader central competence bundle |
| PRO_CENTRAL | `−29.5%` | clear central win, not approximate parity |

A local-box probe around PRO_CENTRAL found central wins in 20/20 draws within each 5%, 10%, and 20% inward
neighborhood and 12/20 within a 40% inward neighborhood. This does not estimate the full 18-dimensional volume, but
it directly refutes the interpretation that only the exact zero-measure corner can be central-winning.

## Claimed-fix verification

| claimed change | v8 result | assessment |
|---|---|---|
| Four distinct scenarios and corrected winners | **PASS numerically** | PRO_CENTRAL `−29.5%`, NO_MYOPIA `+6.1%`, PROBABLE `+46.6%`, PRO_DIST `+199.8%`; central delivers `97.6%` at PRO_CENTRAL. |
| Decisive `+6.1% = central best case` fork retired | **PASS in operative results; FAIL in residual prose** | Runner/results separate the points, but stale “three scenario” and PRO_CENTRAL-continuity text remains. |
| NO_MYOPIA isolates the mechanism | **FAIL** | It changes `s_exp,b_H_C,w,a,b,lambda,zeta,sigma_C`; the published contrast bundles myopia with several competence improvements. |
| `scenario-configs.mjs` is a doc/code single source and the test prevents forks | **FAIL** | Markdown duplicates values; documented PRO_DIST differs on 18/18 varied fields; the test never parses docs or pins exact configs/magnitudes. |
| Combined frontier corrected to `t≈0.57` | **PASS** | Live output and both result documents agree; parity is within the declared interpolation segment. |
| `t` is illustrative rather than calibrated | **PASS** | Code and paper state this explicitly. |
| H3 guards all 19 top-level legacy engines | **PASS at runtime** | Direct execution without the flag made all 19 exit `2` with the legacy diagnostic. |
| H3 release test guarantees universal behavior | **PARTIAL** | It substring-searches for `E4_ALLOW_LEGACY` and behaviorally executes only one engine; a comment could satisfy the universal check. |
| M2 rejects Cyrillic `х`, `× ✕ ✖ ⨯`, numeric `N-fold`/`N times` | **PASS narrowly** | The named glyphs and ordinary numeric examples are rejected. Semantic, typographic, slash, entity, and zero-width variants still pass. |
| Global evidence is uniform MC over the anchored envelope | **PASS as a declared product-box sampler** | It is an 18-coordinate independent uniform MC, not the old seven-key corner sweep. It uses only PRO_CENTRAL, PROBABLE, and PRO_DIST; NO_MYOPIA is omitted and its `b_H_C=1.3` lies outside the resulting max `1.2`. |
| Independent sampling caveat is honest | **FAIL in interpretation** | Independent draws do miss coordinated regions, but PRO_CENTRAL is not parity, the crossing is at `.57`, and 0/400 does not prove zero central-win volume or zero uncertainty. |
| Anchors/CIs/transport wording softened | **PARTIAL** | The paper's main limitations paragraph is honest, but canonical output and stale prose still say “evidence-anchored”; CIs are correctly described elsewhere as inner MC only. |
| Theorem is the no-myopia Gaussian limit | **PARTIAL** | The Gaussian fixed-threshold identity and parity algebra are correct; production-engine nesting into the displayed central signal is not established without extra coefficient/gate restrictions. |

## Remaining overclaims and dishonest labels, ranked

### 1. HIGH — the named mechanism-isolation result is not an isolation contrast

The current NO_MYOPIA scenario is a useful harm-aware, competent-central bundle, but it is not “PROBABLE, except
that the central sees harm.” It changes projection, intercept, responsiveness, credit pressure, category-signal
correlation, and central noise in addition to the harm gate. The paper's statement that harm myopia alone explains
the full `46.6 → 6.1` collapse is therefore false as written. Rename the row and narrow the attribution, or add a
genuinely nested myopia-only contrast.

### 2. HIGH — the canonical global-evidence conclusion overstates what 400 independent box draws establish

The sampler is legitimate as a declared product-volume sensitivity measure. The output is not legitimate when it
calls 400/400 “100% of the plausible envelope,” assigns categorical `sign:pos`, and prints `±0% SE`. Zero observed
central wins has nonzero sampling uncertainty (the simple one-sided 95% rule-of-three bound is about `0.75%`), and
the named endpoint plus the `.57` path already prove an opposite-sign region exists. Report `400/400 sampled draws`,
use a boundary-valid interval, and combine the product sample with targeted/stratified coverage of the coordinated
region before making a global sign claim.

### 3. HIGH — “single source of truth / cannot fork again” is false

The result rows agree today, but the input specification remains duplicated. The anchor table's PRO_DIST column and
the executable PRO_DIST are different stress points, and old three-scenario/continuity text remains in the paper,
anchors, scenario header, and evidence renderer. Broad sign-order assertions cannot lock documentation to code.
Generate the table from an exact scenario manifest or delete the duplicated values and add exact manifest/config
tests plus provenance hashes.

### 4. HIGH — softened labels are not propagated to the publication/release surface

The main paper correctly says most magnitudes are declared reference/stress points, CIs are inner MC only, and the
transport gap is not propagated. That honesty is undone by “evidence-anchored” in the paper opening, anchor legacy
section, and canonical evidence output, and by “best plausible”/“where reality sits” language for uncalibrated joint
endpoints. Consistently use “source-motivated declared reference,” “declared central-favourable endpoint,” and
“declared endpoint box.”

### 5. MEDIUM — theorem and robustness scopes remain broader than the demonstrated objects

The theorem is a correct stylized Gaussian fixed-threshold benchmark, not yet a demonstrated production no-myopia
limit. State the extra nesting restrictions and test them, or rename it accordingly. Likewise, the shipped frontier
program searches five prespecified one-factor slices; say that, rather than “any ONE assumption.” Condition the
long-tail/no-voice mechanism prose on its declared proxy assumptions. The current empirical follow-up is a
measurement agenda unless observables, samples, mappings, dependence estimation, and uncertainty propagation are
specified operationally.

### 6. MEDIUM — the multiplier embargo and release boundary remain bypassable

The signed `m` estimand and current canonical numbers have **not** relapsed into a parity-one multiplier. The process
guard is still incomplete: ordinary variants such as a non-breaking-hyphen `2.2‑fold`, `two-fold`, `twice`, `double`,
lowercase `d/c`, Unicode division slash, HTML entities, and zero-width-separated suffixes pass. `e4:evidence` imports
but does not use `renderReport`; scenarios/frontier print directly; schema-valid strings can carry semantic ratio
language. Thus the claim that every official artifact crosses one fail-closed renderer is false.

## Direct answers

- **Is the four-scenario framing genuinely balanced? YES, in the relevant limited sense.** It now exhibits a real
  central-winning declared endpoint and distributed-winning reference/stress points, so it levels the field by
  showing winning regions for both institutions. It is not symmetric or probabilistic, and it need not be; the
  endpoint labels must not imply equal likelihood, equal extremity, or calibration.
- **Is the theorem correct? YES as a Gaussian fixed-threshold selection identity; NO as a demonstrated production
  no-myopia limit.** Its stylized benchmark role is publishable after that scope is made exact.
- **Did H3 pass? YES at current runtime.** All 19 engines refused unflagged execution. The release regression is
  weaker than the claim and should become behavioral.
- **Did the named M2 patch pass? YES narrowly.** All requested glyphs and ordinary numeric fold/times forms are
  rejected. Broader embargo bypasses remain.
- **Multiplier-relapse path remaining? YES — at the process/release level.** The estimand itself is not a relapse,
  but semantic/Unicode bypasses and official outputs outside the sole renderer leave a live path.
- **Publication-ready as a comparative-institutions robustness result? NO.** Verdict: **NEEDS CHANGES**, not
  “not viable.”

## Shortest path to publication-ready

1. Rename NO_MYOPIA as a harm-aware/competent-central bundle, or add a true nested myopia-only contrast; remove the
   unsupported attribution of the entire `46.6 → 6.1` change to harm myopia.
2. Make one exact scenario manifest generate the code-facing table and publication table; reconcile PRO_DIST,
   define NO_MYOPIA's envelope membership, purge all stale three-scenario/continuity/evidence-anchored text, and pin
   exact configs plus provenance rather than broad signs.
3. Recast global evidence as a finite product-volume sample: report `400/400` with a boundary-valid interval, remove
   “PRO_CENTRAL ≈parity / corner required,” and include the known correlated path or targeted stratification before
   assigning a global sign.
4. Scope claims exactly: five prespecified one-factor slices; stylized Gaussian benchmark unless nesting is proved;
   declared proxy assumptions for the low-visibility mechanism; measurement agenda unless the plan is operational.
5. Close the release boundary: route evidence/scenarios/frontier and publication text through one validated final-
   byte renderer, harden semantic/Unicode embargo tests, bind exact scenario configs into run IDs, and behaviorally
   test the enumerated 19-engine legacy inventory.

After those five compact changes and rerunning the existing suite, E4 would be publication-ready under the stated
comparative-institutions robustness/measurement-plan bar without waiting for target-domain calibration.
