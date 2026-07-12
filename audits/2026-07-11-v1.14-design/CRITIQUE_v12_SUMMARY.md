# Codex critique v12 — decisive verdict on E4 v1.14

## Verdict

**NO — E4 is not publication-ready yet as a comparative-institutions robustness result.**

The substantive result clears the stated limited bar. The numerical design, evidence correction, Gaussian lemma,
mechanism, declared-scenario design, and measurement plan remain viable; all six prescribed commands pass; the
`NO_MYOPIA` attribution, declared endpoint/interpolation labels, neutral frontier framing, tested-classes adapter
scope, and exact theorem-nesting condition are fixed. **Multiplier relapse: NO.** This verdict does not impose a
calibrated-impact bar.

Publication-ready is nevertheless **NO** because two contradictory taxonomy/traceability claims remain in the live
committed tree: the anchor still calls four substantive scenarios plus one diagnostic contrast “Five named
scenarios,” and the anchor/test comment still claim that an outcome-ordering assertion prevents code/document drift.
Those statements are false about the declared taxonomy and what the executable test proves. They are blocking
overclaims, not stylistic preferences.

Independent dimension reports:

- [Code, controls, and live labels](critique-v12-code-controls.md)
- [Theorem and mechanism](critique-v12-theorem-mechanism.md)
- [Publication language and traceability](critique-v12-publication-language.md)

## Live-tree verification

Reviewed `master` at `9ec82923aaff68921eb11f0bf9dccf9ee70fe43f`, which includes `686a25c`. The relevant
committed-tree search is clean for `best plausible`, `full best plausible`, `best case`, `plausible scenario`,
`plausible segment`, `does reality sit`, and `any notation` across `scripts/simulation/e4-v5/` and the three specified
research documents.

| claimed repair | verdict | decisive live evidence |
|---|---|---|
| `NO_MYOPIA` attribution | **VERIFIED** | `research/e4-plausible-anchors.md:51-72` identifies the harm-aware and otherwise-competent bundle, distinguishes the `MYOPIA_OFF` two-coordinate diagnostic, limits the correction-block regression claim to outcome ordering, and gives the sequential 16.2/40.5 (~40%) plus 24.3/40.5 (~60%) decomposition. Code and paper agree. |
| Declared endpoint and interpolation labels | **VERIFIED** | The anchor, `contract.mjs`, `scenario-configs.mjs`, `scenarios.mjs`, and `frontier.mjs` use the declared central-favourable endpoint / declared interpolation segment wording. `frontier.mjs:1-4` uses conditional measured-target language, and canonical stdout does likewise. |
| Adapter scope and theorem nesting | **VERIFIED** | `adapter.mjs:1-4,23-25` limits the embargo claim to tested classes and disclaims universal/repository-wide coverage. `research/e4-parity-theorem.md:59-65` requires exactly `b_H^C·s(V) = b−w` or `H ≡ 0` and says a constant gate alone is insufficient. |

## Prescribed runs

All commands exited 0 in a fresh run against the live tree.

| command | reproduced result |
|---|---|
| `npm run e4:controls` | all controls pass; harm control `0.4632 -> 0.1118` |
| `npm run e4:test` | all fixtures pass; executable ordering and tested embargo classes pass |
| `npm run e4:theorem` | analytic identity error `0.00029 = 0.17` Monte-Carlo SE |
| `npm run e4:scenarios` | `-29.5%, +46.6%, +30.4%, +6.1%, +199.8%`; correct sequential 40/60 attribution text |
| `npm run e4:frontier` | no crossing on five plotted slices; declared combined path crosses at `t ~= 0.57` |
| `npm run e4:evidence` | finite box sample `399/0/1`; targeted central probe `40/40`; `sign:indeterminate` |

## Remaining blocking overclaims/dishonest labels

1. **False scenario taxonomy — `research/e4-plausible-anchors.md:91-92`.** The text says “Five named scenarios,”
   although `MYOPIA_OFF` is a diagnostic contrast and the other live surfaces correctly declare four substantive
   scenarios plus one diagnostic contrast.

   **Exact fix:** replace lines 91-92 with:

   > ## Four substantive declared scenarios + one diagnostic contrast — level the field both ways
   > The four substantive scenarios are `PRO_CENTRAL`, `NO_MYOPIA`, `PROBABLE`, and `PRO_DIST`; `MYOPIA_OFF` is a
   > two-coordinate diagnostic contrast, not a scenario. All five rows are full configs; values live in
   > `scenario-configs.mjs`, and reported intervals are inner-Monte-Carlo intervals only.

2. **False ordering-test traceability — `research/e4-plausible-anchors.md:29-30` and
   `scripts/simulation/e4-v5/test.mjs:75`.** The anchor says the sign-ordering regression means code and narrative
   cannot silently diverge, and the test comment says configs cannot silently drift from the document. The assertion
   at `test.mjs:80-82` pins executable outcome ordering only.

   **Exact fixes:**

   - Replace the anchor sentence with: **“A regression test (`npm run e4:test`) pins executable outcome ordering only;
     it does not bind exact configurations, magnitudes, labels, or prose.”**
   - Replace `test.mjs:75` with:
     **`// ---- Scenario integrity: pin executable outcome ORDERING only; this does not bind configs, magnitudes, labels, or prose. ----`**

No other blocking overclaim or dishonest label remains under the stated comparative-institutions robustness bar.

## Direct answers

- **Publication-ready? NO. E4 is not ready in the live committed tree.** Only the two exact wording repairs above
  remain; no numerical, theorem, mechanism, scenario-design, evidence, measurement-plan, or calibrated-impact
  redesign is required.
- **Multiplier relapse? NO.** Canonical outputs retain signed parity-zero `m` and permissible `D/O` and `C/O`
  benchmark levels. All registered notation-class tests pass; this is a tested-class conclusion, not a universal
  proof against every conceivable obfuscation.
