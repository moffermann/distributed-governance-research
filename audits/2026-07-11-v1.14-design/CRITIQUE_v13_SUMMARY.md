# Codex critique v13 — final publication-ready verdict on E4 v1.14

## Verdict

**NO — E4 is not yet publication-ready as a comparative-institutions robustness result.**

The substantive result still clears the stated limited bar: mechanism, stylized theorem, four declared scenarios
plus one diagnostic contrast, and measurement plan are viable. This verdict does not impose the calibrated-impact
bar the paper disclaims. All six prescribed commands pass. **Multiplier relapse: NO.**

The taxonomy repair is clean, but the traceability repair is incomplete across the committed tree. One instance of
the exact v12 overclaim remains in the executable test source.

## Verification of the two repairs

- **Scenario taxonomy — VERIFIED.** `research/e4-plausible-anchors.md:93` now says “Four substantive declared
  scenarios + one diagnostic contrast.” `scripts/simulation/e4-v5/scenario-configs.mjs:6-14` agrees and identifies
  `MYOPIA_OFF` as a diagnostic contrast, not a scenario.
- **Ordering-test scope — NOT CLEAN ACROSS THE TREE.** `research/e4-plausible-anchors.md:29-31` correctly says the
  regression pins ordering only and cannot prevent code/narrative divergence. `scenario-configs.mjs:1-3` likewise
  limits the test to executable outcome ordering, not configs, labels, or prose. But
  `scripts/simulation/e4-v5/test.mjs:75` still says the test pins signs so the configs “can't silently drift from the
  doc.” The assertion at lines 80-82 checks outcome ordering only.

## Prescribed runs

All commands exited 0 on `master` at `8a9ea6d50a2d51a03abed69f56b048eed815f622`, which includes `e7e461e`.

| command | reproduced result |
|---|---|
| `npm run e4:controls` | all controls pass; harm control `0.4632 -> 0.1118` |
| `npm run e4:test` | all 35 checks pass; scenario ordering and tested embargo classes pass |
| `npm run e4:theorem` | analytic identity error `0.00029 = 0.17` Monte-Carlo SE |
| `npm run e4:scenarios` | `-29.5%, +46.6%, +30.4%, +6.1%, +199.8%`; correct sequential 40/60 attribution |
| `npm run e4:frontier` | no crossing on five plotted slices; declared combined path crosses at `t ~= 0.57` |
| `npm run e4:evidence` | finite box `399/0/1`; targeted central probe `40/40`; `sign:indeterminate` |

## Remaining blocking overclaims/dishonest labels

1. **False ordering-test traceability — `scripts/simulation/e4-v5/test.mjs:75`.** The comment claims the sign test
   prevents `scenario-configs.mjs` from silently drifting from the document, while the assertion pins executable
   outcome ordering only.

   **Exact fix:** replace line 75 with:

   ```js
   // ---- Scenario integrity: pin executable outcome ORDERING only; this does not bind configs, magnitudes, labels, or prose. ----
   ```

No other blocking overclaim or dishonest label remains under the stated comparative-institutions robustness bar.

## Direct answers

- **Publication-ready? NO.** The one live traceability overclaim above must be removed; no substantive redesign is
  required.
- **Multiplier relapse? NO.**
