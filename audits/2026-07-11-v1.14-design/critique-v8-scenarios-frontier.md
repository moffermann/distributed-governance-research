# E4 v1.14 (v8) — adversarial scenarios, frontier, and envelope audit

## Scope and execution

Audited current `master` at `0537ef7` (later than the requested `6ae8e39`; the intervening change only updates the
boundary fixture and does not alter the findings below). I ran the relevant release paths and a same-world targeted
attribution probe; the live `e4:test` boundary fixture reports `m=.032`:

```text
npm run e4:test       -> exit 0; all tests passed
npm run e4:scenarios  -> exit 0; -29.5%, +6.1%, +46.6%, +199.8%
npm run e4:frontier   -> exit 0; combined-path root t ~= 0.57
npm run e4:evidence   -> exit 0; 400/400 resolved, sampled 100% distributed wins

harm coordinates only (PROBABLE with s_exp=.5, b_H_C=1.3, 800 worlds): +30.4%
literal no-myopia only (PROBABLE with s_exp=0, b_H_C=1, 800 worlds):    +13.6%
declared NO_MYOPIA (eight changed coordinates, 800 worlds):             +6.1%
```

This audit applies the requested comparative-institutions robustness bar. Declared reference and stress points are
acceptable without target-domain calibration if they are labeled as such. The remaining findings are internal
specification, attribution, and reporting defects, not demands for target-domain data.

## Verdict for this dimension

**NEEDS CHANGES.** The decisive winner fork and the numerical frontier correction are real. The four executable
points are distinct and include a genuine central win, so the directional presentation now levels the field. But the
stronger claims that code and documentation have one scenario truth, that NO_MYOPIA isolates harm myopia, and that
the global run establishes a positive sign across the plausible envelope are false in the current tree. These are
publication-facing overclaims with short textual/test fixes.

## Claimed-fix verification

| claimed fix | result | evidence |
|---|---|---|
| Four distinct executable scenarios and correct winners | **PASS** | All four objects are exported separately (`scripts/simulation/e4-v5/scenario-configs.mjs:12-24`) and imported by the runner (`scripts/simulation/e4-v5/scenarios.mjs:7`). The live run reproduces PRO-CENTRAL `m=-29.5%`, `D/O=68.1%`, `C/O=97.6%`; NO_MYOPIA `+6.1%`; PROBABLE `+46.6%`; PRO-DISTRIBUTED `+199.8%`. These match the result tables (`research/e4-plausible-anchors.md:63-68`; `research/e4-paper-section-draft.md:41-46`). |
| Old `+6.1% = central best case` conflation retired from operative results | **PASS, with stale prose** | The executable runner correctly distinguishes PRO-CENTRAL and NO_MYOPIA (`scripts/simulation/e4-v5/scenarios.mjs:18-23`). However its header still says “THREE” and still calls PRO-CENTRAL the continuity anchor (`scripts/simulation/e4-v5/scenarios.mjs:1-3`); the anchor document repeats that conflation (`research/e4-plausible-anchors.md:27-29`, `:93-100`). |
| `scenario-configs.mjs` is the single source and code cannot fork from documentation | **FAIL** | It is the single source for the three executables, but not for the hand-maintained Markdown table. The code itself claims docs do not duplicate values (`scripts/simulation/e4-v5/scenario-configs.mjs:1-3`), while the anchor table does exactly that (`research/e4-plausible-anchors.md:32-52`) and disagrees with executable PRO_DIST on 18/18 fields. The regression checks only broad outcome signs at a different `N,K,nWorlds`; it never reads the table, checks config equality, hashes the scenario manifest, or pins the published magnitudes (`scripts/simulation/e4-v5/test.mjs:75-81`). Therefore it cannot prevent another doc/code fork. |
| Combined PROBABLE -> PRO_CENTRAL frontier corrected to `t ~= 0.57` | **PASS** | The path now interpolates every differing PRO_CENTRAL coordinate (`scripts/simulation/e4-v5/frontier.mjs:51-62`). The live run gives `+47%` at `t=0`, `+5%` at `.50`, `-13%` at `.75`, `-30%` at `1`, and root `.57`, matching both documents (`research/e4-plausible-anchors.md:83-88`; `research/e4-paper-section-draft.md:59-63`). |
| `t` is illustrative, not a calibrated scale | **PASS** | The emitted note says exactly this (`scripts/simulation/e4-v5/frontier.mjs:71`), as does the paper (`research/e4-paper-section-draft.md:61-63`). “57%” is correctly read only as position on this declared linear path. |
| Global evidence is uniform MC over the anchored envelope | **PASS as construction; FAIL as global robustness inference** | The code samples each of 18 coordinates independently and uniformly between the coordinatewise minima/maxima of PRO_CENTRAL, PROBABLE, and PRO_DIST (`scripts/simulation/e4-v5/evidence.mjs:10`, `:14-19`, `:32-45`). This is the declared product-box measure, not the old seven-corner sweep. But it excludes NO_MYOPIA even though the paper now declares four scenarios; notably NO_MYOPIA has `b_H_C=1.3`, outside the three-point envelope maximum `1.2` (`scripts/simulation/e4-v5/scenario-configs.mjs:16-20`). |
| Caveat that independent sampling misses the coordinated central-favourable corner | **PRESENT but materially wrong** | The caveat is printed (`scripts/simulation/e4-v5/evidence.mjs:101-102`), but calls PRO-CENTRAL “approximately parity” despite its `-29.5%` central win and says parity “needs that corner” despite the located root at `t=.57`. The point corner has zero measure, but continuity implies a nonzero-volume central-winning neighborhood because the corner is far below zero. Missing it in 400 draws is not evidence that the true volume is zero. |

## Live defects, ranked

### 1. HIGH — NO_MYOPIA does not isolate salience-gated harm myopia

The executable object changes eight PROBABLE coordinates, not only the two harm coordinates: `s_exp`, `b_H_C`, `w`,
`a`, `b`, `lambda`, `zeta`, and `sigma_C` (`scripts/simulation/e4-v5/scenario-configs.mjs:12-20`). The config comment at
least admits “+ is competent” (`:8-9`, `:19-20`), but the release output says merely “probable, but central sees
harm” and “isolates the mechanism” (`scripts/simulation/e4-v5/scenarios.mjs:19`, `:23`). The paper makes the causal
claim twice (`research/e4-paper-section-draft.md:44`, `:53-57`).

The current-code probe above is decisive: the declared harm-coordinate change alone leaves `m=+30.4%`, and literal
no-myopia alone leaves `m=+13.6%`; the advertised `+6.1%` additionally requires favorable changes to projection,
level/responsiveness, credit pressure, proxy quality, and central noise. Thus the row is a **central-competence bundle
with reduced myopia**, not a mechanism isolation. The four-row framing is directionally balanced, but this row's
attribution is not honest until renamed or split into a genuine nested harm-only diagnostic.

### 2. HIGH — the global “100% / sign:pos” conclusion contradicts a known point inside its own box

`npm run e4:evidence` prints “Core v0 wins 100% of the plausible envelope (plus/minus 0% SE)” and classifies
`sign:pos`. Yet ENV is constructed from PRO_CENTRAL itself (`scripts/simulation/e4-v5/evidence.mjs:10`, `:15-19`),
and that endpoint is a stable central win. The classifier treats zero observed negative samples as proof of a
positive sign (`scripts/simulation/e4-v5/evidence.mjs:53-59`), while the plug-in binomial SE collapses to zero at an
observed boundary (`:46-50`). With 0 hits in 400, a simple 95% rule-of-three upper bound is about 0.75%, not zero.

The correct report is “0/400 independently sampled mixtures were central-winning,” with a binomial interval and an
explicit warning that this design is low-power for a coordinated 18-dimensional corner region. It must not say
100% of the envelope or globally positive. At minimum, the known named points/path should enter sign classification,
which would make the envelope result indeterminate rather than positive.

### 3. MEDIUM — the advertised single source is executable-only; published inputs remain forked

The reported outcome rows now agree, but the table that claims to specify their inputs does not. Executable PRO_DIST
uses
`(.25,4.5,.40,2.5,6,.28,3.5,4,.25,1.1,.4,.75,.12,.30,.4,.8,.25,.7)`
(`scripts/simulation/e4-v5/scenario-configs.mjs:22-24`), whereas the Markdown pro-distributed column gives
`(.2,5,.45,3,5,.35,5,5,.2,1.3,.6,.7,.1,.35,.35,.9,.2,.8)` in the same field order
(`research/e4-plausible-anchors.md:34-51`). These are systematically different stress points, even though the
`+199.8%` table result was generated from the code point.

The regression's broad inequalities permit large configuration and magnitude drift. For example its own live output
is `PRO_CENTRAL=-39%`, `NO_MYOPIA=+2%`, `PROBABLE=+44%`, `PRO_DIST=+195%` because it uses `N=800,K=120,nWorlds=300`,
not the published run design (`scripts/simulation/e4-v5/test.mjs:77-81`). The claim that the test pins doc and code so
they “cannot fork again” is therefore false. Generate the table from a machine-readable manifest or add an exact
manifest/config equality test.

### 4. MEDIUM — “robust to any ONE assumption” exceeds the frontier actually searched

The frontier program searches only five selected axes (`s_exp,b_H_C,p,beta,a_V`) and over explicitly clipped plotting
ranges (`scripts/simulation/e4-v5/frontier.mjs:12-19`). It does not search the other 13 scenario coordinates. The
anchor document is mostly precise—“no single axis” followed by the five names (`research/e4-plausible-anchors.md:79-82`)—but then
promotes this to “any ONE assumption”; the runner makes the same universal statement
(`scripts/simulation/e4-v5/frontier.mjs:69-70`), and the paper omits the five-axis qualifier entirely
(`research/e4-paper-section-draft.md:59-60`). Say “none of the five prespecified one-factor slices crosses parity”;
the combined-path result can remain unchanged.

### 5. MEDIUM — scenario counts and evidentiary labels are still stale

The paper correctly acknowledges that most magnitudes are declared reference/stress points and that its intervals
are inner MC only (`research/e4-paper-section-draft.md:33-38`). Nevertheless its opening still says “three
evidence-anchored scenarios” (`:12-13`) before presenting four, and the evidence renderer still prints
“evidence-anchored” and “three named scenarios” (`scripts/simulation/e4-v5/evidence.mjs:97`, `:105`). The anchor
document likewise has a three-scenario master section and calls PROBABLE “evidence-anchored expectable”
(`research/e4-plausible-anchors.md:93-100`). These directly undo the softened label.

Also, “full best plausible case” is stronger than the declared-stress-point disclaimer: PRO_CENTRAL deliberately
places `beta=.8`, `w=.1`, `b_H_C=1.2`, and `s_exp=.5` outside the contract's registered `R_alpha` ranges
(`scripts/simulation/e4-v5/contract.mjs:41`, `:50-52`; `scripts/simulation/e4-v5/scenario-configs.mjs:16-18`). No new
target data is required to fix this—call it the **declared all-knob central-favourable stress point**. The genuine
central-winning region and the balanced comparison survive that honest relabeling.

## Shortest path for this dimension

1. Rename NO_MYOPIA as a reduced-myopia/central-competence bundle, or add a true nested harm-only row and reserve
   “isolates the mechanism” for it. Do not attribute `46.6 -> 6.1` to harm myopia alone.
2. Make the scenario table generated from (or exactly tested against) the config manifest; synchronize PRO_DIST and
   all “three/four” text. Pin the manifest/hash and published run outputs, not only broad signs.
3. Render the envelope result as `0/400 sampled mixtures`, attach a nondegenerate binomial interval, incorporate the
   known central-winning point/path into global sign status, and delete “approximately parity / reaching parity needs
   that corner.” Explicitly define whether NO_MYOPIA belongs to the envelope.
4. Narrow “any one assumption” to the five plotted axes and relabel uncalibrated “best plausible” endpoints as
   declared central/distributed stress points.

After these short changes, the scenario/frontier package is publishable as a conditional comparative-institutions
robustness and measurement-plan result. As checked, it is not yet publication-ready because its live mechanism and
global-sign claims are stronger than its own code establishes.
