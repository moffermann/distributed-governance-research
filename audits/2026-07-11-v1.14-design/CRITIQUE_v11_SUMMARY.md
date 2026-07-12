# Codex critique v11 — decisive verdict on E4 v1.14

## Verdict

**NEEDS CHANGES. E4 is not publication-ready in the live tree as a comparative-institutions robustness result.**

The substantive result clears the stated limited bar: the numerical design, evidence correction, Gaussian lemma,
mechanism, declared-scenario design, and measurement plan are viable; all six prescribed commands pass; the exact
theorem-nesting condition is fixed; and there is no multiplier relapse. This verdict does **not** impose a calibrated-
impact bar.

The publication-ready answer is nevertheless **NO** because one previously identified traceability/taxonomy defect
remains live: the anchor and test comments still claim an outcome-ordering check prevents document drift, and the
anchor still calls all five results scenarios instead of four substantive scenarios plus one diagnostic contrast.
These are false claims about what the executable test proves and about the declared taxonomy, not stylistic preferences.

Independent dimension reports:

- [Code, scenarios, controls, and embargo](critique-v11-code-controls.md)
- [Theorem and mechanism](critique-v11-theorem-mechanism.md)
- [Publication language and taxonomy](critique-v11-publication-language.md)

## Baseline and prescribed runs

The audit began at `ecd8018d150005cbd11d6374fa749dd5f5f1b304`. While it was running, the live `master` advanced
through the v11 wording fixes to `9ec8292`; those concurrent changes were preserved and re-audited. The full suite
below was rerun against that final live tree. The pre-existing run log was preserved apart from the concurrent runner's
own appended output. No production source was changed by the Codex audit agents.

| command | exit | reproduced result |
|---|---:|---|
| `npm run e4:controls` | 0 | all controls pass; harm control `0.4632 -> 0.1118` |
| `npm run e4:test` | 0 | all tests pass; executable ordering and tested embargo fixtures pass |
| `npm run e4:theorem` | 0 | analytic identity error `0.00029 = 0.17` Monte-Carlo SE |
| `npm run e4:scenarios` | 0 | `-29.5%, +46.6%, +30.4%, +6.1%, +199.8%`; stdout gives the correct sequential 40/60 split |
| `npm run e4:frontier` | 0 | none of five plotted slices crosses; combined path crosses at `t ~= 0.57`; stdout now uses the declared endpoint/interpolation labels |
| `npm run e4:evidence` | 0 | finite box sample 399/0/1; targeted central probe 40/40; `sign:indeterminate` |

## Five-fix verification

| v10 must-fix | v11 result | decisive live evidence |
|---|---|---|
| **1. Sequential attribution** | **VERIFIED** | `scenario-configs.mjs:5-15`, `scenarios.mjs:24-27`, the paper at `e4-paper-section-draft.md:61-69`, and the anchor at `e4-plausible-anchors.md:51-72,95-100` consistently distinguish `MYOPIA_OFF` from the `NO_MYOPIA` bundle and give the path-dependent 16.2/40.5 (~40%) harm-gate step plus 24.3/40.5 (~60%) competence step. |
| **2. Theorem nesting** | **VERIFIED** | `e4-parity-theorem.md:59-65` states `b_H^C*s(V) = b-w` (or `H == 0`) and explicitly says a constant gate alone is insufficient. The theorem remains correctly scoped as a stylized Gaussian fixed-threshold sanity check. |
| **3. Taxonomy and ordering scope** | **FAILED narrowly** | The registry, runner, and draft correctly use four substantive scenarios plus one diagnostic contrast and identify `NO_MYOPIA` as the continuity anchor (`scenario-configs.mjs:5-15`; `scenarios.mjs:1-4`; paper draft `:37-39`). The anchor still says “Five named scenarios” (`e4-plausible-anchors.md:91-100`) and claims the ordering test prevents code/narrative divergence (`:29-30`); `test.mjs:75` repeats that overclaim even though `:80-82` pins outcome ordering only. |
| **4. Labels** | **VERIFIED** | `evidence-anchored`, the endpoint/path uses of “best plausible”/“plausible scenario,” and “does reality sit” are purged from the reviewed live E4 surface. The anchor, paper, registry/runner, and canonical frontier stdout now use the declared-endpoint, declared-interpolation-segment, and conditional measured-target wording. |
| **5. Embargo disclaimer** | **VERIFIED** | `adapter.mjs:1-4,23-25` limits its guarantee to tested classes, disclaims every conceivable obfuscation, and disclaims routing every repository artifact. Canonical scenario/frontier text passes through `safeLog`; the tested token classes pass. |

## Remaining blocking overclaims/dishonest labels, ranked

### 1. HIGH — make taxonomy and the ordering guard say only what is true

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

- **Publication-ready? NO.** E4 **needs changes** in the live tree. The remaining work is limited to the three exact
  taxonomy/ordering-comment repairs above; the code, theorem, attribution, labels, scenarios, and measurement-plan
  design need no substantive redesign under the stated bar.
- **Multiplier relapse? NO.** Canonical outputs retain signed parity-zero `m` and permissible `D/O`, `C/O` benchmark
  levels. All registered ASCII, Unicode/confusable, HTML-entity, zero-width, numeric/word multiplier, and
  case-insensitive institutional-ratio probes pass. This is a tested-class conclusion, not a universal proof.
