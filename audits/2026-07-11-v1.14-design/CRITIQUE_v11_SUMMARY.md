# Codex critique v11 — decisive verdict on E4 v1.14

## Verdict

**NEEDS CHANGES. E4 is not publication-ready in the live tree as a comparative-institutions robustness result.**

The substantive result clears the stated limited bar: the numerical design, evidence correction, Gaussian lemma,
mechanism, declared-scenario design, and measurement plan are viable; all six prescribed commands pass; the exact
theorem-nesting condition is fixed; and there is no multiplier relapse. This verdict does **not** impose a calibrated-
impact bar.

The publication-ready answer is nevertheless **NO** because three previously identified wording/traceability defects
remain live: the canonical anchor still gives the superseded bundled-as-myopia-only attribution, the anchor and test
comments still overstate scenario taxonomy/ordering traceability, and canonical frontier output still calls a declared
endpoint the central's “full best plausible case” and a “plausible scenario.” These are contradictory causal/taxonomic
claims and dishonest endpoint labels, not stylistic preferences.

Independent dimension reports:

- [Code, scenarios, controls, and embargo](critique-v11-code-controls.md)
- [Theorem and mechanism](critique-v11-theorem-mechanism.md)
- [Publication language and taxonomy](critique-v11-publication-language.md)

## Baseline and prescribed runs

Reviewed `master` at `ecd8018d150005cbd11d6374fa749dd5f5f1b304`, later than the requested `0f55d58`; the later
commit adds the v11 prompt. The pre-existing untracked `codex-v11-run.log` was preserved. No production source was
changed by this audit.

| command | exit | reproduced result |
|---|---:|---|
| `npm run e4:controls` | 0 | all controls pass; harm control `0.4632 -> 0.1118` |
| `npm run e4:test` | 0 | all tests pass; executable ordering and tested embargo fixtures pass |
| `npm run e4:theorem` | 0 | analytic identity error `0.00029 = 0.17` Monte-Carlo SE |
| `npm run e4:scenarios` | 0 | `-29.5%, +46.6%, +30.4%, +6.1%, +199.8%`; stdout gives the correct sequential 40/60 split |
| `npm run e4:frontier` | 0 | none of five plotted slices crosses; combined path crosses at `t ~= 0.57`; heading retains the stale plausible/best-plausible label |
| `npm run e4:evidence` | 0 | finite box sample 399/0/1; targeted central probe 40/40; `sign:indeterminate` |

## Five-fix verification

| v10 must-fix | v11 result | decisive live evidence |
|---|---|---|
| **1. Sequential attribution** | **FAILED repository-wide; code and paper draft verified** | `scenario-configs.mjs:5-15`, `scenarios.mjs:24-27`, and the paper at `e4-paper-section-draft.md:61-69` correctly give the path-dependent 16.2/40.5 (~40%) harm-gate step and 24.3/40.5 (~60%) competence step. But `e4-plausible-anchors.md:51-54,69-72` still calls bundled `NO_MYOPIA` a myopia isolation and attributes the full `+46.6% -> +6.1%` movement to harm myopia; its table label at `:61` also describes the bundle as merely “probable, but central sees harm.” |
| **2. Theorem nesting** | **VERIFIED** | `e4-parity-theorem.md:59-65` states `b_H^C*s(V) = b-w` (or `H == 0`) and explicitly says a constant gate alone is insufficient. The theorem remains correctly scoped as a stylized Gaussian fixed-threshold sanity check. |
| **3. Taxonomy and ordering scope** | **FAILED narrowly** | The registry, runner, and draft correctly use four substantive scenarios plus one diagnostic contrast and identify `NO_MYOPIA` as the continuity anchor (`scenario-configs.mjs:5-15`; `scenarios.mjs:1-4`; paper draft `:37-39`). The anchor still says “Five named scenarios” (`e4-plausible-anchors.md:91-100`) and claims the ordering test prevents code/narrative divergence (`:29-30`); `test.mjs:75` repeats that overclaim even though `:80-82` pins outcome ordering only. |
| **4. Labels** | **FAILED repository-wide** | `evidence-anchored` is purged, and the paper uses the declared-endpoint, declared-segment, and conditional measured-target wording. But endpoint/path occurrences of “best plausible,” “plausible scenario/segment,” and “does reality sit” remain in `e4-plausible-anchors.md:52,80-83,93`, `scenario-configs.mjs:19`, `scenarios.mjs:19`, and `frontier.mjs:1-4,52-64`. Lines 59 and 64 of `frontier.mjs` emit the stale label in canonical stdout. |
| **5. Embargo disclaimer** | **VERIFIED** | `adapter.mjs:1-4,23-25` limits its guarantee to tested classes, disclaims every conceivable obfuscation, and disclaims routing every repository artifact. Canonical scenario/frontier text passes through `safeLog`; the tested token classes pass. |

## Remaining blocking overclaims/dishonest labels, ranked

### 1. HIGH — remove the false `NO_MYOPIA` causal isolation from the anchor

- At `research/e4-plausible-anchors.md:51-56`, replace the correction block with:

  > **CORRECTION:** `PRO_CENTRAL` is the central's declared full-favourable endpoint, and the central wins there.
  > `NO_MYOPIA` is the separate harm-aware and otherwise-competent continuity bundle at +6.1%, not a myopia
  > isolation; `MYOPIA_OFF` is the two-harm-coordinate diagnostic contrast at +30.4%. Authoritative configs live in
  > `scenario-configs.mjs`; the regression pins executable outcome ordering only, not exact configs, magnitudes,
  > labels, or prose.

- At `research/e4-plausible-anchors.md:61`, replace `NO-MYOPIA (probable, but central sees harm — continuity anchor)`
  with `NO-MYOPIA (harm-aware and otherwise-competent continuity bundle)`.
- At `research/e4-plausible-anchors.md:69-72`, replace the bullet with:

  > **Continuity / reconciliation with the NO-GO:** in this sequential, path-dependent decomposition,
  > `MYOPIA_OFF` changes only `s_exp,b_H_C` and reduces the gap `+46.6% -> +30.4%`, or 16.2 of the 40.5-point
  > decline to `NO_MYOPIA` (~40%). The further move to the harm-aware and otherwise-competent `NO_MYOPIA` bundle
  > reduces it by 24.3 points (~60%). `NO_MYOPIA` is the continuity anchor to the symmetry-gate near-parity regime;
  > this is a qualitative reconciliation hypothesis across different DGPs, not a reproduced limit.

### 2. HIGH — finish the declared-endpoint/interpolation label purge

- At `research/e4-plausible-anchors.md:52,80-83,93`, replace endpoint uses of “full best plausible
  case” with **“declared full-favourable endpoint”** and replace “PLAUSIBLE segment”/“beyond-realistic” with
  **“the crossing lies within the declared interpolation segment.”** The combined-path sentence should read:
  **“Interpolating from `PROBABLE` toward the declared full-favourable endpoint, parity is at `t ~= 0.57`, within
  the declared interpolation segment.”**
- At `scripts/simulation/e4-v5/scenario-configs.mjs:19` and `scripts/simulation/e4-v5/scenarios.mjs:19`, replace
  “full best plausible case” with **“declared full-favourable endpoint.”**
- At `scripts/simulation/e4-v5/frontier.mjs:1-4`, replace the “does reality sit” question with:
  **“Report the plotted range, the probable reference value, and the result at that value; together with the declared
  combined path, this shows where a measured target configuration would lie relative to the reported frontiers.”**
- At `scripts/simulation/e4-v5/frontier.mjs:52-54`, call `PRO_CENTRAL` the **declared central-favourable endpoint**
  and `t in [0,1]` the **declared interpolation segment**. Replace line 59 with
  `safeLog('■ probable -> declared central-favourable endpoint (combined path; t in [0,1] is the declared interpolation segment)');`
  and line 64 with
  ``safeLog(`    t=0 probable scenario -> t=1 declared central-favourable endpoint`);``.

### 3. MEDIUM — make taxonomy and the ordering guard say only what is true

- At `research/e4-plausible-anchors.md:29-30`, replace the final sentence with:
  **“A regression test (`npm run e4:test`) pins executable outcome ordering only; it does not bind exact
  configurations, magnitudes, labels, or prose.”**
- At `research/e4-plausible-anchors.md:91-92`, replace the heading/introduction with:
  **“## Four substantive declared scenarios + one diagnostic contrast — level the field both ways”** and
  **“The four substantive scenarios are `PRO_CENTRAL`, `NO_MYOPIA`, `PROBABLE`, and `PRO_DIST`; `MYOPIA_OFF` is a
  two-coordinate diagnostic contrast, not a scenario.”**
- At `scripts/simulation/e4-v5/test.mjs:75`, replace the comment with:
  `// ---- Scenario integrity: pin executable outcome ORDERING only; this does not bind configs, magnitudes, labels, or prose. ----`

## Direct answers

- **Publication-ready? NO.** E4 **needs changes** in the live tree. The remaining work is limited to the exact
  attribution/taxonomy/label repairs above; the code, theorem, scenarios, and measurement-plan design need no
  substantive redesign under the stated bar.
- **Multiplier relapse? NO.** Canonical outputs retain signed parity-zero `m` and permissible `D/O`, `C/O` benchmark
  levels. All registered ASCII, Unicode/confusable, HTML-entity, zero-width, numeric/word multiplier, and
  case-insensitive institutional-ratio probes pass. This is a tested-class conclusion, not a universal proof.
