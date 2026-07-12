# E4 v1.14 (v9) — adversarial scenarios, evidence, frontier, and anchor audit

## Scope and baseline

Audited `master` at `a297ed3246c3c1b9bfc6743c3c2e9fcb7ed1ad95` (the substantive five-fix commit is
`6b86011`, later than the requested minimum). I inspected the executable scenario configs, scenario runner, evidence
sampler/probe, frontier runner, embargo adapter/tests, anchor document, and paper draft. I did not edit production
files.

This review applies the requested limited bar: a comparative-institutions robustness result with declared scenarios,
not a calibrated impact estimate. None of the failures below asks for target-domain data.

## Decisive verdict for this dimension

**NEEDS CHANGES; not publication-ready yet.** The evidence correction is real and unusually clear, the embargo
hardening works on the checked executable paths, and the new nested myopia contrast is correctly implemented.
However, the publication package still makes an arithmetically false attribution (“most”), retains the old false
myopia-isolation claim in the anchor document, repeats the overbroad “any ONE assumption” frontier claim in both the
anchor and live output, and still has scenario-value/count forks despite claiming a single source. These are compact
internal honesty fixes, not a rejection of the design.

## Commands and live results

| command/probe | exit | result |
|---|---:|---|
| `npm run e4:scenarios` | 0 | PRO-CENTRAL `-29.5%`; NO-MYOPIA `+6.1%`; MYOPIA-OFF `+30.4%`; PROBABLE `+46.6%`; PRO-DISTRIBUTED `+199.8%` |
| `npm run e4:frontier` | 0 | five displayed one-factor slices do not cross; combined path crosses at `t ~= 0.57`; live conclusion still says “robust to any ONE assumption” |
| `npm run e4:evidence` | 0 | 400/400 resolved: Core v0 wins 399, central 0, parity 1; rule-of-three bound displayed as approximately 1%; targeted central probe 40/40; `sign:indeterminate` |
| `npm run e4:test` | 0 | full scenario ordering passes; all new Unicode/word/lowercase embargo fixtures pass |
| exact config-diff probe | 0 | MYOPIA_OFF changes only `s_exp:2.5->0.5` and `b_H_C:0.5->1.3`; NO_MYOPIA changes those plus `w,a,b,lambda,zeta,sigma_C` |

The live full ordering at the test design is also pinned exactly as requested:
`PRO_CENTRAL=-0.39 < NO_MYOPIA=0.02 < MYOPIA_OFF=0.28 < PROBABLE=0.44 < PRO_DIST=1.95`.

## Per-change verification

| v8 requested change | result | adversarial finding |
|---|---|---|
| 1. Genuine myopia-only contrast and honest bundle attribution | **FAILED overall (implementation passes)** | `MYOPIA_OFF` is exactly the requested two-coordinate nested contrast and produces `+30.4%`; `NO_MYOPIA` is correctly an eight-coordinate harm-aware/competent bundle and produces `+6.1%`. The paper correctly assigns the further fall to competence, but incorrectly says myopia accounts for **most** of the fall. Numerically, myopia removes `46.6-30.4=16.2` points while competence removes `30.4-6.1=24.3`; myopia is only `16.2/(46.6-6.1)=40%` of this sequential collapse (and 35% of the original `46.6` advantage), not most. Worse, the anchor still says `NO_MYOPIA` is “myopia isolated” and that isolating myopia yields `+6.1%` (`e4-plausible-anchors.md:51-54,67-70`). |
| 2. Honest global evidence | **VERIFIED** | The canonical output says a **finite product-box sample**, reports 399/400 distributed wins, 0 central and 1 parity, gives the one-sided zero-event rule-of-three upper bound as approximately 1% (the unrounded approximation is `3/400=0.75%`), reports 40/40 central wins in the declared 20%-inward targeted box, and overrides the box-only classifier to `sign:indeterminate (region-dependent)`. It no longer reports 100% of an envelope, zero uncertainty, or a globally positive sign. |
| 3. Single source, full ordering, stale scenario count | **FAILED overall (ordering test passes)** | The main knob table no longer duplicates the full numeric config and `scenario-configs.mjs` drives the executables. But the same anchor later duplicates named endpoint values and already disagrees with code: it proposes PRO-DISTRIBUTED `p~=0.45` vs code `0.40` (`anchors:106`; config:29), and `a_V~=0.2` vs code `0.25` (`anchors:117-118`; config:29). The claim that the ordering test prevents narrative divergence is false: it does not parse Markdown, and the Markdown is currently divergent. Stale counts also remain: the paper metadata says “three-scenario,” the paper body says **four** while its table has **five** rows, `scenario-configs.mjs` says “Four named scenarios” while listing five, and `scenarios.mjs` still opens with “the THREE anchored scenarios.” |
| 4. Replace “evidence-anchored” with declared-reference labels | **VERIFIED in the requested publication/output surfaces, with a residual label issue** | The exact `evidence-anchored` label is gone from the current paper, anchor, and evidence output; evidence and anchors use `source-motivated declared reference`. The paper row shortens this to `source-motivated reference`, but its enclosing section explicitly calls all points declared. The separate repeated labels “best plausible case,” “plausible range,” and “where reality sits” remain stronger than the mostly-declared/pending anchor ledger warrants; see must-fix 4 below. |
| 5. Exact frontier/theorem/mechanism scope | **FAILED in frontier/anchor; paper mechanism wording passes** | The paper now correctly says **five prespecified one-factor slices**, and it conditions the long-tail account on the declared salience proxy. But the anchor still concludes “robust to any ONE assumption” (`anchors:72-75`) and the live `e4:frontier` output emits the same overclaim (`frontier.mjs:70`). Five selected slices cannot support that universal wording. The theorem portion is reviewed separately; the paper text does use the requested stylized-benchmark/extra-restrictions scope. |

## Remaining publication must-fixes, ranked

### 1. HIGH — replace the false “most” attribution and remove the old isolation paragraph

The nested contrast supports: myopia alone reduces the result by **16.2 points**, and the added competence bundle
reduces it by another **24.3 points**. Under the paper's own sequential decomposition, those are approximately 40%
and 60% of the `46.6 -> 6.1` fall. Therefore “most, not all” is false in `scenario-configs.mjs:9-10`,
`scenarios.mjs:25-26`, `e4-paper-section-draft.md:60-62`, and `e4-plausible-anchors.md:90-91`. Say “some” or
“about 40% of this sequential fall,” with the usual warning that nonlinear decomposition is path/order dependent.
Also delete or rewrite the contradictory old anchor result text at lines 51-54 and 67-70, which still assigns the
whole fall to myopia.

### 2. HIGH — narrow the live frontier conclusion to the five prespecified slices

The paper is correctly scoped, but readers running the canonical frontier command are told the result is “robust to
any ONE assumption,” and the anchor repeats it. Replace that with “none of these five prespecified one-factor slices
flips the winner over its plotted range.” This is a demonstrated robustness result; the universal form is not.

### 3. HIGH — finish the claimed single-source conversion

Delete the remaining named endpoint numerics in the variable-detail prose or generate them from the config. The
current `p` and `a_V` PRO-DISTRIBUTED values already disagree with executable values, proving the fork remains.
Remove the false statement that an outcome-ordering test prevents Markdown divergence, or add a real generated/
parsed contract. Reconcile all scenario counts to five (or explicitly distinguish point types in a way that totals
correctly).

### 4. MEDIUM — label the joint endpoint/path as declared rather than established “plausible reality”

The paper honestly admits that most magnitudes are declared reference/stress points and many anchor-ledger entries
remain TBD/pending. Against that admission, “full best plausible case,” “within the plausible range,” and “where
reality sits” imply more joint calibration than exists. “Declared central-favourable endpoint,” “within the declared
interpolation segment,” and “where the target setting lies, once measured” preserve the result without overstating
the evidence.

## Embargo / multiplier-relapse answer

**Multiplier relapse: NO in the checked executable scenario/evidence/frontier paths.** The hardened normalization and
new word/lowercase fixtures all pass. Every scenario/frontier emission goes through `safeLog`; evidence checks its
complete composed text with `assertNoEmbargoedTokens` before printing. The live artifacts report signed `m` with
parity at zero and arm/oracle levels, not a parity-one institution multiplier.

## Publication-ready answer

**NO. E4 is not publication-ready yet under the stated comparative-institutions robustness bar.** It is close: the
substantive evidence and scenario machinery now support the limited result, but the four internal honesty defects
above must be corrected before the code-plus-paper package can be called publication-ready.
