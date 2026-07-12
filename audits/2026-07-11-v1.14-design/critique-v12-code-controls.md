# E4 v1.14 critique v12 — code, controls, and live-label audit

## Verdict

**NEEDS CHANGES. E4 is not publication-ready in the live tree as a comparative-institutions robustness result.**
The numerical/control result clears the stated limited bar, and the three specifically claimed v12 repairs verify:

- `research/e4-plausible-anchors.md:51-72`, `scenario-configs.mjs:5-27`, and `scenarios.mjs:24-27` consistently
  identify `NO_MYOPIA` as the harm-aware and otherwise-competent bundle, `MYOPIA_OFF` as the two-coordinate diagnostic,
  and the sequential, path-dependent split as approximately 40% harm-gate then 60% added competence.
- The retired best-plausible/plausible-scenario/reality-question endpoint labels are gone from the reviewed live
  publication/code surface. `frontier.mjs:1-4,53-74`, `scenario-configs.mjs:19`, `scenarios.mjs:19-24`, and
  `contract.mjs:85-90` use the declared endpoint/segment and conditional measured-target language.
- `adapter.mjs:1-4,23-25` limits its embargo guarantee to tested classes, while
  `research/e4-parity-theorem.md:59-65` states the exact `b_H^C*s(V) = b-w` (or `H == 0`) nesting condition and says
  that a constant gate alone is insufficient.

However, the live tree still contains the two already-identified taxonomy/traceability contradictions below. These
are false publication-facing claims, not stylistic preferences and not a calibrated-impact requirement.

Reviewed `master` at `9ec82923aaff68921eb11f0bf9dccf9ee70fe43f`. I read every file under
`scripts/simulation/e4-v5/`, the three specified research documents, `CRITIQUE_v11_SUMMARY.md`, and all
`critique-v11-*.md` reports. No production source was changed.

## Fresh verification

All six prescribed commands exited 0:

| command | reproduced result |
|---|---|
| `npm run e4:controls` | all controls pass; harm control `0.4632 -> 0.1118` |
| `npm run e4:test` | all fixtures pass; executable ordering and tested embargo classes pass |
| `npm run e4:theorem` | analytic error `0.00029 = 0.17` Monte-Carlo SE |
| `npm run e4:scenarios` | `-29.5%, +46.6%, +30.4%, +6.1%, +199.8%`; correct sequential 40/60 text |
| `npm run e4:frontier` | no crossing on five plotted slices; declared combined path crosses at `t ~= 0.57` |
| `npm run e4:evidence` | box sample `399/0/1`; targeted central probe `40/40`; `sign:indeterminate` |

## Remaining blocking overclaims/dishonest labels

1. **Scenario taxonomy remains false.** `research/e4-plausible-anchors.md:91-100` introduces the five entries as
   “Five named scenarios,” although `MYOPIA_OFF` is a diagnostic contrast and the other live surfaces correctly state
   four substantive scenarios plus one diagnostic. **Exact fix:** replace lines 91-92 with:

   > `## Four substantive declared scenarios + one diagnostic contrast — level the field both ways`
   >
   > `The four substantive scenarios are PRO-CENTRAL, NO-MYOPIA, PROBABLE, and PRO-DISTRIBUTED; MYOPIA-OFF is a`
   > `two-coordinate diagnostic contrast, not a scenario. Each is a full config reported as m +/- 95% CI (inner MC only).`

2. **The ordering regression still claims documentation traceability it does not enforce.**
   `research/e4-plausible-anchors.md:29-30` says the ordering test means code and narrative “cannot silently diverge,”
   and `scripts/simulation/e4-v5/test.mjs:75` says configs cannot silently drift from the document; the assertion at
   `test.mjs:80-82` pins outcome ordering only. **Exact fixes:** replace the anchor sentence with
   **“A regression test (`npm run e4:test`) pins executable outcome ordering only; it does not bind exact
   configurations, magnitudes, labels, or prose.”** Replace `test.mjs:75` with
   **`// ---- Scenario integrity: pin executable outcome ORDERING only; this does not bind configs, magnitudes, labels, or prose. ----`**

## Direct answers

- **Publication-ready? NO.** The live package needs only the two wording repairs above; no numerical, mechanism,
  theorem, scenario-design, evidence, or calibrated-impact redesign is required under the stated bar.
- **Multiplier relapse? NO.** Canonical outputs retain signed parity-zero `m` and permissible `D/O` and `C/O`
  benchmark levels. The acceptance suite passes all registered notation classes; this is a tested-class conclusion,
  not a universal proof against every obfuscation.
