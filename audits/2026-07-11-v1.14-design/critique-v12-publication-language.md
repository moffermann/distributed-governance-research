# E4 v1.14 critique v12 — publication language and traceability

## Decisive dimension verdict

**NOT PUBLICATION-READY.** Two live traceability/taxonomy contradictions remain in the committed publication surface.
The substantive comparative-institutions robustness framing otherwise clears the stated limited bar; this verdict
does not impose a calibrated-impact requirement. **Multiplier relapse: NO.**

Reviewed the live `master` tree at `9ec82923aaff68921eb11f0bf9dccf9ee70fe43f` (including commit `686a25c`) across
all files in `scripts/simulation/e4-v5/`, the three specified research documents, `CRITIQUE_v11_SUMMARY.md`, and all
three `critique-v11-*.md` reports.

## Verification of the three claimed v11 repairs

| repair | result | live evidence |
|---|---|---|
| `NO_MYOPIA` attribution | **VERIFIED substantively, but its traceability sentence is not repository-clean** | The anchor correction, row, and reconciliation now identify `NO_MYOPIA` as the harm-aware/otherwise-competent bundle, `MYOPIA_OFF` as the two-coordinate diagnostic, and the sequential 16.2/40.5 (~40%) then 24.3/40.5 (~60%) decomposition (`research/e4-plausible-anchors.md:51-55,59,68-72`). The same distinction appears in `scenario-configs.mjs:5-15`, `scenarios.mjs:20-27`, and the draft at `e4-paper-section-draft.md:37-69`. However, the earlier anchor sentence and test comment still falsely imply that an outcome-ordering assertion binds documentation (blocker 2 below). |
| Declared endpoint/segment and neutral frontier wording | **VERIFIED** | The specified surface has zero occurrences of `best plausible`, `full best plausible`, `best case`, `plausible scenario`, `plausible segment`, or `does reality sit`. The endpoint and combined path are declared rather than calibrated (`frontier.mjs:53-74`; `e4-plausible-anchors.md:80-86`; `e4-paper-section-draft.md:71-76`), and the frontier header conditions real-setting interpretation on a measured target (`frontier.mjs:1-5`). |
| Tested-classes adapter and exact theorem nesting | **VERIFIED** | The adapter limits its claim to tested notation classes and disclaims universal obfuscation coverage and repository-wide routing (`adapter.mjs:1-4,23-25`). The theorem states `b_H^C·s(V) = b−w` or `H ≡ 0` and says a constant gate alone is insufficient (`e4-parity-theorem.md:59-65`). |

## Remaining blocking overclaims/dishonest labels

1. **Taxonomy contradiction.** `research/e4-plausible-anchors.md:91-92` introduces “Five named scenarios,” although
   the registry, runner, and paper define four substantive scenarios plus `MYOPIA_OFF` as a diagnostic contrast.
   **Exact fix:** replace lines 91–92 with:

   > ## Four substantive declared scenarios + one diagnostic contrast — level the field both ways
   > The substantive scenarios are `PRO_CENTRAL`, `NO_MYOPIA`, `PROBABLE`, and `PRO_DIST`; `MYOPIA_OFF` is a
   > two-coordinate diagnostic contrast, not a scenario. Values live in `scenario-configs.mjs`; each listed point is
   > a full config reported as `m ± 95% CI` (inner MC only).

2. **Ordering-test traceability overclaim.** `research/e4-plausible-anchors.md:29-30` says the ordering regression
   means code and narrative “cannot silently diverge,” and `scripts/simulation/e4-v5/test.mjs:75` says configs cannot
   silently drift from the document. The assertion at `test.mjs:80-82` pins outcome ordering only.
   **Exact fixes:**

   - Replace the anchor sentence with: “A regression test (`npm run e4:test`) pins executable outcome ordering only;
     it does not bind exact configurations, magnitudes, labels, or prose.”
   - Replace `test.mjs:75` with:
     `// ---- Scenario integrity: pin executable outcome ORDERING only; this does not bind configs, magnitudes, labels, or prose. ----`

## Direct answers

- **Publication-ready as a comparative-institutions robustness result? NO.** The two contradictions above remain
  blocking in the live committed tree. No other publication-language blocker remains under the stated bar.
- **Multiplier relapse? NO.** The reviewed publication surface retains the signed parity-zero `m` estimand and the
  adapter makes only a tested-class embargo claim.
