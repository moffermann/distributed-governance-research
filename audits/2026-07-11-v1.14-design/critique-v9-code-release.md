# E4 v1.14 (v9) — adversarial code and release review

## Verdict

**NEEDS CHANGES.** The executable numerical result is substantially repaired and all six required commands pass,
but the code/release surface is not publication-ready under the stated limited bar. This is not a demand for
target-domain calibration. The blockers are current, checkable contradictions in the public audit inputs:

1. the anchor document still attributes `NO_MYOPIA`'s `+6.1%` to isolated harm myopia even though the executable
   changes eight coordinates and the new genuine isolation contrast is `MYOPIA_OFF` at `+30.4%`;
2. the claimed scenario single source and stale-text purge are incomplete (including named scenario values in the
   anchor document that differ from code, and mutually inconsistent three/four/five-scenario labels); and
3. the canonical frontier output and anchor document still print the exact overclaim that robustness covers “any
   ONE assumption,” although the run searches only five prespecified slices.

The requested embargo hardening works for its named cases and the canonical result output has **not** relapsed to a
parity-one multiplier. A live multiplier-relapse **path nevertheless remains** because the adapter's stronger claim
to reject any multiplier notation is bypassable with ordinary word forms and additional format characters.

No production file was changed by this review.

## Baseline and commands

Final inspection was against `master` at
`a297ed3246c3c1b9bfc6743c3c2e9fcb7ed1ad95` (later than the requested minimum `6b86011`). The only pre-existing
worktree entry was the untracked `audits/2026-07-11-v1.14-design/codex-v9-run.log`; it was preserved.

| Command | Exit | Reproduced result |
|---|---:|---|
| `npm run e4:controls` | 0 | all controls pass; C4 `0.4632 -> 0.1118` |
| `npm run e4:test` | 0 | all tests pass; full scenario ordering and all newly added embargo probes pass |
| `npm run e4:theorem` | 0 | analytic identity error `0.00029 = 0.17` MC SE |
| `npm run e4:scenarios` | 0 | `-29.5%, +46.6%, +30.4%, +6.1%, +199.8%` in runner order |
| `npm run e4:frontier` | 0 | five one-factor slices do not cross; combined path crosses at `t ≈ 0.57` |
| `npm run e4:evidence` | 0 | 399/400 distributed, 0 central, 1 parity; rule-of-three `≈1%`; targeted central 40/40; `sign:indeterminate` |

I also executed every one of the 19 top-level legacy `scripts/simulation/*.mjs` modules with
`E4_ALLOW_LEGACY` absent. All 19 exited `2` and emitted `[legacy guard]` (`checked=19 bad=0`). This independently
confirms the current runtime guard rather than relying on the test's source-substring scan.

## Claimed-change verification

| Change | Result | Code/release evidence |
|---|---|---|
| 1. Genuine myopia-only contrast and honest bundle attribution | **PASS in config, runner, test, and paper body; FAIL in the anchor publication surface** | A direct object diff gives `MYOPIA_OFF diff: s_exp,b_H_C`; `NO_MYOPIA` differs on `s_exp,b_H_C,w,a,b,lambda,zeta,sigma_C`. The runner prints the honest `+46.6 -> +30.4 -> +6.1` attribution. But `research/e4-plausible-anchors.md:53-54` still says `NO_MYOPIA` is “myopia isolated,” and lines 67-70 still call `+6.1%` the isolated harm-myopia result. |
| 2. Honest global evidence | **PASS for canonical output** | The run says finite `399/400`, reports the zero-event upper bound as approximately 1% and explicitly “NOT zero,” probes 20% inward with central `40/40`, and emits `sign:indeterminate (region-dependent)`. It does not print the v8 `100% of envelope`, `sign:pos`, or zero-SE conclusion. |
| 3. Scenario single source, full ordering, stale scenario count | **PASS for the full ordering; FAIL for the claimed single-source/text purge** | `e4:test` pins `PRO_CENTRAL < NO_MYOPIA < MYOPIA_OFF < PROBABLE < PRO_DIST` and passed with `-0.39 < 0.02 < 0.28 < 0.44 < 1.95`. The main anchor table now has type/direction only. However, lower anchor sections still publish named input values: `p` at line 106 and `a_V,b_V` at lines 117-118. They fork from code for PRO_DIST (`p ≈ .45` in Markdown versus `.40` in code; `a_V ≈ .20` versus `.25`). The regression only tests simulated ordering and cannot detect this document/config fork. Scenario metadata also still says three, four, and five; details below. |
| 4. Purge “evidence-anchored” | **PASS in the three requested surfaces** | A case-insensitive search of the paper draft, anchor document, and evidence implementation finds no `evidence-anchored`; canonical evidence says `source-motivated declared reference`. |
| 5. Exact frontier/theorem/mechanism scope | **FAIL on the frontier release surface** | The paper body uses “five prespecified one-factor slices,” the theorem is described as a stylized Gaussian benchmark needing extra restrictions, and the long-tail claim is conditioned on the salience proxy. But canonical `npm run e4:frontier` still prints `robust to any ONE assumption` (`frontier.mjs:70`), and anchors lines 73-75 repeat it. This is the precise v8 overclaim the change claimed to remove. |
| Embargo hardening and routing | **PASS for named fixes/routing; FAIL as a universal guarantee** | `scenarios.mjs` and `frontier.mjs` use `safeLog`; evidence checks its complete joined text through `assertNoEmbargoedTokens`. The adapter rejects the claimed non-breaking hyphen, division slash, x-confusable, zero-width U+200B, `twice`, `double`, `two-fold`, and lowercase `d/c` probes. Common equivalents still pass; see below. |

## Remaining must-fixes, ranked

### 1. HIGH — remove the surviving false myopia-isolation attribution

The executable contrast is now well defined, but the anchor document still gives the retired causal reading:

- `research/e4-plausible-anchors.md:53-54` labels the `+6.1%` `NO_MYOPIA` point “myopia isolated”; and
- lines 67-70 say “isolating harm-myopia (NO-MYOPIA...) gives +6.1%” and assign the `+46%` result to that mechanism.

That is contradicted by the direct config diff and by the corrected paper body and runner. Replace this text with
the `MYOPIA_OFF +30.4%` isolation result and reserve `NO_MYOPIA +6.1%` for the harm-aware-plus-competent bundle.

### 2. HIGH — make the scenario source/count claims true across the actual documents

The numerical input table was removed, but the document did not become a numeric single source:

- anchor line 106 still assigns named scenario `p` values/bands and lines 117-118 assign named `a_V,b_V` values;
  the PRO_DIST values already differ from `scenario-configs.mjs` as described above;
- `scenarios.mjs:1-3` still says “THREE,” calls PRO_CENTRAL the near-parity continuity anchor, and calls PROBABLE
  evidence/theory-anchored;
- `research/e4-paper-section-draft.md:3` still says three-scenario framing;
- the paper body and `scenario-configs.mjs:5` say four scenarios while displaying/defining five named rows; and
- the anchor document says five.

Use one accurate taxonomy everywhere, for example “three endpoint scenarios plus two diagnostic contrasts,” and
either remove the lower named input numbers or explicitly separate them as non-canonical measurement-plan candidates
that are not the executable scenario values. An outcome-order test does not enforce document/config identity.

### 3. HIGH — remove the live “any ONE assumption” scope overclaim

The paper's corrected sentence is publication-ready, but the required frontier command and anchor results still
generalize five chosen slices to every assumption. Replace both with the exact demonstrated scope: no crossing on
the five prespecified one-factor slices over their plotted ranges. This is a label-only repair, not a request for
additional sensitivity runs.

### 4. MEDIUM — narrow or complete the embargo's universal claim

The adapter header says it rejects “any institution-performance multiplier notation.” Direct probes show:

```text
REJECT  twice / double / two-fold / 2.2-nonbreaking-hyphen-fold / D-division-slash-C / d/c / U+200B-split 2x
ALLOW   two times / four fold / fourfold / U+2060-split 2x / 2&times; / D&#47;C / 2χ
```

The canonical outputs are clean, so this is not a numerical-estimand relapse. It is a real release-boundary bypass
and makes the adapter's universal guarantee false. Either normalize/block these common remaining forms at the final
rendered boundary or narrow the guarantee to the tested token classes. Table-driven adversarial tests should cover
whichever guarantee is retained.

## Direct answers

- **Do the new contrast and full outcome ordering actually work? YES.**
- **Did the canonical evidence output become statistically honest in the requested way? YES.**
- **Was `evidence-anchored` purged from the requested surfaces? YES.**
- **Is the scenario documentation now a true, non-forking single source? NO.**
- **Was the “any ONE assumption” overclaim removed from the executable/public anchor surface? NO.**
- **Did the canonical result output relapse into multiplier notation? NO.**
- **Does a multiplier-relapse/bypass path remain? YES.**
- **Publication-ready at the stated comparative-institutions robustness bar? NO — NEEDS CHANGES.**

The remaining blockers are compact wording/source-integrity repairs. They do not require the target-domain data the
paper disclaims and do not undermine the viability of the corrected mechanism computation.
