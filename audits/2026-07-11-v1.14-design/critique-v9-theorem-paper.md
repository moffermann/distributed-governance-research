# E4 v1.14 (v9) — adversarial theorem, paper, and anchor audit

## Verdict

**NEEDS CHANGES. The theorem/paper package is not publication-ready yet under the stated comparative-institutions
robustness-result bar.** This is not a demand for target-domain calibration. The executable improvements are real,
and the central paper section is close, but the publication surface still contains false arithmetic attribution,
contradictory scenario/slice claims, an unstated production-to-theorem nesting condition, and “plausible” labels for
declared endpoints that are not inside the repository's own expectable bands.

No multiplier relapse appears in the reviewed paper/theorem/anchor prose: it uses signed `m` with parity at zero and
arm levels `D/O`, `C/O`, not a parity-one institution-performance multiplier.

## Baseline and reproduced checks

Audited `master` at `a297ed3246c3c1b9bfc6743c3c2e9fcb7ed1ad95` (the requested fix commit is
`6b86011874d911aef413eb7e28a20ea25dc517d9`). I read the current paper, theorem, anchor ledger, scenario registry,
theorem checker, engine signal, and all v8 critiques. No production file was edited.

| command | exit | result relevant to this review |
|---|---:|---|
| `npm run e4:theorem` | 0 | analytic error `0.00029 = 0.17` MC SE |
| `npm run e4:scenarios` | 0 | `PRO_CENTRAL -29.5%`; `NO_MYOPIA +6.1%`; `MYOPIA_OFF +30.4%`; `PROBABLE +46.6%`; `PRO_DIST +199.8%` |
| `npm run e4:frontier` | 0 | five one-factor slices remain positive; combined path crosses at `t about 0.57` |
| `npm run e4:evidence` | 0 | product box: 399/400 distributed, 0 central, 1 parity; rule-of-three about 1%; targeted central probe 40/40; `sign:indeterminate` |
| `npm run e4:test` | 0 | full scenario ordering pinned; all tests pass |

## Five-change verification

| v8 change | result | exact assessment |
|---|---|---|
| 1. Genuine myopia-only contrast and honest attribution | **PARTIAL / FAIL in publication prose** | `MYOPIA_OFF` really changes only `s_exp,b_H_C` (`scenario-configs.mjs:24-25`) and reproduces `+30.4%`; `NO_MYOPIA` is correctly described in the paper as a competence bundle (`e4-paper-section-draft.md:47,59-62`). But “accounts for most” is false, and the anchor results section still calls `NO_MYOPIA` myopia-isolated and attributes the `+46%` to myopia (`e4-plausible-anchors.md:53-54,67-70`). |
| 2. Honest global evidence | **VERIFIED** | The live evidence output reports 399/400 rather than 100% of the envelope, a nonzero one-sided upper bound, 40/40 targeted central wins, and `sign:indeterminate`. |
| 3. Single source, ordering regression, scenario terminology | **PARTIAL / FAIL** | The duplicated scenario-input values were removed from the knob table and the regression pins `PRO_CENTRAL < NO_MYOPIA < MYOPIA_OFF < PROBABLE < PRO_DIST`. But the paper header still says “three-scenario” (`e4-paper-section-draft.md:3`), the paper says four declared scenarios while displaying five rows (`:12,36,44-50`), the anchors say five (`e4-plausible-anchors.md:86-96`), and `scenario-configs.mjs:5-16` says four while enumerating five. The claim that a sign-only code test prevents narrative divergence (`e4-plausible-anchors.md:29-30`) is disproved by the current narrative divergence. |
| 4. Replace “evidence-anchored” | **VERIFIED** | No live occurrence remains in the current paper, anchors, or E4 v5 scripts; `PROBABLE` is labeled a source-motivated declared reference. Historical v8 audit text is correctly ignored. |
| 5. Exact frontier/theorem/mechanism scope | **PARTIAL / FAIL** | The main paper now says five prespecified slices and explicitly calls the theorem a stylized Gaussian sanity check with extra nesting restrictions (`e4-paper-section-draft.md:29-34,66-71`). It also conditions the long-tail channel on the declared salience proxy (`:19-21`). But the anchor results still generalize five slices to “any ONE assumption” (`e4-plausible-anchors.md:72-75`), the executable frontier prints the same universal claim, and the theorem document itself still says the full engine “reduces to” the benchmark without stating the extra gate/coefficient restriction (`e4-parity-theorem.md:3-6`). |

## Remaining must-fix overclaims and dishonest labels

### 1. HIGH — “harm myopia accounts for most” is arithmetically false, and stale anchor prose restores the rejected attribution

The sequential contrast is:

- myopia-only step: `46.6 - 30.4 = 16.2` percentage points;
- added-competence step: `30.4 - 6.1 = 24.3` percentage points;
- total decline: `46.6 - 6.1 = 40.5` percentage points.

Thus myopia-only is about **40%** of the total modeled decline, while added competence is about **60%**. It is also
only about 35% of the original `+46.6%` advantage. The paper's statement that the harm channel accounts for “most”
(`e4-paper-section-draft.md:60-62`), plus the same claim in `scenario-configs.mjs:8-10` and scenario stdout, is not a
permissible qualitative gloss on these numbers. Replace “most” with “a substantial minority/about 40% of this
sequential decline,” or report only the two changes without an additive share claim.

More seriously, the anchor's earlier results block still says `NO_MYOPIA` is “myopia isolated” and that `+46%` is
the harm-myopia mechanism (`e4-plausible-anchors.md:53-54,67-70`), directly contradicting its own corrected block at
lines 90-94 and the executable definition. Delete or correct the stale block.

### 2. HIGH — the theorem document still claims a production nesting it neither states nor checks

The Gaussian lemma and parity algebra are correct. The checker faithfully verifies only a synthetic
`X = alpha + b*S + noise` joint-normal identity (`theorem-check.mjs:22-43`). The production signal is

`M_C = a + (b-w)Splus + w*v_p - b_H_C*s(V)*H + noise`

(`engine.mjs:71-78`). The theorem's displayed
`X_C = a + (b-w)S + w*v_p + noise` (`e4-parity-theorem.md:40-45`) is obtained only with an additional constant-gate
coefficient restriction such as `b_H_C*s(V) = b-w`, along with the theorem's Gaussian reduced-form restrictions.
Those conditions are not among the theorem setup assumptions at lines 8-14. Therefore its opening claim that the
full engine “reduces to” this “limiting-case theorem” under stated assumptions (`e4-parity-theorem.md:3-6`) remains
unsupported.

Make the theorem document match the already-honest paper: call it a stylized Gaussian fixed-threshold benchmark, and
either state the exact constant-gate/coefficient restriction or remove the production-reduction claim. No new data
or larger theorem is required.

### 3. HIGH — “best plausible” and “within the plausible range” mislabel declared stress points

The paper honestly admits that most magnitudes are declared reference/stress points rather than target-domain bands
(`e4-paper-section-draft.md:36-41`). It then calls `PRO_CENTRAL` the “full best plausible case,” says the combined
frontier is reached within “the plausible range,” and says the winner depends on “where reality sits” between the
points (`:46,52-53,68-71`). The anchors and frontier stdout repeat these labels.

That language is stronger than the declared design. The anchor ledger still marks most variables `TBD`/pending, and
`PRO_CENTRAL` places at least `beta=0.8`, `w=0.1`, `b_H_C=1.2`, and `s_exp=0.5` outside the contract's registered
expectable `R_alpha` bands (`contract.mjs:41,50-52`; `scenario-configs.mjs:21-23`). This does not invalidate the
scenario or its real central-winning region; it means the honest terms are **declared central-favourable endpoint**
and **declared interpolation segment**, not an empirically supported plausible range or a claim about where reality
sits.

### 4. MEDIUM — scenario counts and five-slice scope remain internally contradictory

Choose and define one taxonomy: either five named scenario points, or four substantive declared scenarios plus one
nested diagnostic contrast. Then use it consistently. At present the paper says three, four, and (by row count) five;
the anchors say five; and the config comment says four while listing five. Likewise replace the stale anchor and
frontier-output statement “robust to any ONE assumption” with the exact demonstrated statement: none of the five
prespecified one-factor slices crosses parity over its plotted range.

These are small edits, but publication-facing contradictions are must-fix because the claimed sign-only regression
does not and cannot validate prose.

## Direct answers

- **Myopia attribution fixed? NO, only structurally.** The nested contrast is correct; “most” and the stale anchor
  attribution are not.
- **Global evidence honesty fixed? YES.** The current finite-sample, rule-of-three, targeted-probe, and indeterminate
  labels are honest.
- **Single-source/count terminology fixed? NO.** Input values are single-sourced and ordering is pinned, but the live
  prose visibly diverges.
- **Evidence-anchored wording purged? YES.**
- **Theorem/frontier/mechanism scope fixed? NO overall.** The main paper and salience condition are substantially
  corrected; the theorem document and anchor/frontier claims are not.
- **Multiplier relapse in this review dimension? NO.**
- **Publication-ready now? NO. Verdict: NEEDS CHANGES.** Fixing the four items above would require wording and
  theorem-scope edits only, not target-domain calibration.
