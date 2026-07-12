# E4 v1.14 (v11) — theorem and mechanism audit

## Dimension verdict

**THE THEOREM/MECHANISM DIMENSION PASSES, BUT THE LIVE PACKAGE STILL NEEDS CHANGES.** The v10 theorem-nesting
must-fix is fully implemented: the theorem now gives the exact coefficient condition and expressly says that a
constant gate alone is insufficient. The numerical mechanism, the Gaussian sanity-check limit, the declared-scenario
design, and the measurement plan are mutually coherent under the paper's expressly limited robustness-result bar.

The overall package is nevertheless not publication-ready because one live anchor section still calls all five rows
scenarios and an earlier anchor sentence overstates what the ordering regression binds. The attribution, endpoint,
interpolation, theorem, and executable labels are now corrected. The two remaining anchor defects are
publication-facing contradictions, not stylistic preferences. No target-domain calibration or impact bar is being
imposed here.

## Baseline and fresh execution

I initially reviewed and ran the suite at `ecd8018d150005cbd11d6374fa749dd5f5f1b304`, then rechecked the live tree at
`686a25c` after the subsequent wording-only fixes. I read every file in `scripts/simulation/e4-v5/`, the three
specified research documents, the v10 summary, and all three v10 dimension reports. The full six-command suite also
passes on the current live state. I did **not** edit any production source file at any point; my only file edits were
to this audit.

All six requested commands exited 0 in one fresh run:

| command | decisive result |
|---|---|
| `npm run e4:controls` | all controls passed; harm channel `0.4632 -> 0.1118` |
| `npm run e4:test` | all tests passed; executable ordering `central < no-myopia < myopia-off < probable < distributed` |
| `npm run e4:theorem` | analytic identity error `0.00029 = 0.17` Monte-Carlo SE |
| `npm run e4:scenarios` | `-29.5%, +46.6%, +30.4%, +6.1%, +199.8%`; stdout gives the correct sequential 40/60 decomposition |
| `npm run e4:frontier` | no crossing in the five plotted slices; combined path crosses at `t ~= 0.57` |
| `npm run e4:evidence` | finite box sample 399/0/1; targeted central probe 40/40; `sign:indeterminate` |

## Verification of v10 must-fix 2

| required theorem repair | result | live evidence |
|---|---|---|
| State the exact nesting condition | **VERIFIED** | `research/e4-parity-theorem.md:59-65` writes the production signal and benchmark side by side and states `b_H^C*s(V) = b-w`, or the trivial `H == 0`. |
| Say a constant gate alone is insufficient | **VERIFIED** | `research/e4-parity-theorem.md:62-64` says this verbatim. |
| Keep the theorem stylized rather than promoting it to the full engine | **VERIFIED** | `research/e4-parity-theorem.md:3-8,49-68` and `research/e4-paper-section-draft.md:30-35` limit the result to the Gaussian, fixed-threshold, equal-cost/no-gate/no-credit benchmark and describe it as a sanity check. |

The algebra is now exact. Production can be rewritten as
`a + (b-w)S+ + w*v_p - b_H^C*s(V)H + eta`; the displayed benchmark is
`a + (b-w)S+ + w*v_p - (b-w)H + eta`. Their equality for nonzero harm therefore requires precisely the condition
now printed. The covariance formula and parity lemma are also correct, and the executable regression tests the lemma
rather than pretending to test the full engine.

## Mechanism, scenarios, and measurement-plan consistency

The production mechanism in `engine.mjs:63-81` matches the paper's equations at
`research/e4-paper-section-draft.md:16-28`: true value is `S+ - H`; the distributed signal has expected harm weight
`1-beta`; and the central signal uses the visibility gate. The paper conditions its long-tail conclusion on that
declared, least-pinned salience proxy (`:20-22,78-84`) and disclaims an impact estimate. The measurement document
separates empirical, theoretical, proxy-informed, and declared-scale anchors and states the transport gaps. Those are
honest ingredients for the claimed measurement plan; incomplete target calibration is not a blocker under this bar.

The live anchor now also gives the correct attribution: `research/e4-plausible-anchors.md:51-55` identifies
`MYOPIA_OFF` as the two-coordinate diagnostic and `NO_MYOPIA` as the harm-aware/otherwise-competent continuity bundle;
`:68-72` reports the sequential, path-dependent 40/60 split. Its scenario table and combined-path paragraph now use
the declared-endpoint and declared-interpolation labels (`:59-64,80-86`). No attribution or endpoint-label blocker
remains.

## Remaining publication blockers (ranked)

### 1. HIGH — the anchor still conflates four scenarios with the diagnostic contrast

- `research/e4-plausible-anchors.md:91-100` says “Five named scenarios,” conflating the diagnostic with the four
  substantive scenarios. Replace the heading and introduction with:
  **“## Four substantive declared scenarios + one diagnostic contrast — level the field both ways”** and
  **“The four substantive scenarios are `PRO_CENTRAL`, `NO_MYOPIA`, `PROBABLE`, and `PRO_DIST`; `MYOPIA_OFF` is a
  two-coordinate diagnostic contrast, not a scenario.”** The five definitions below can remain because they already
  identify `MYOPIA_OFF` as the diagnostic.

### 2. MEDIUM — the anchor overstates the ordering regression's scope

- `research/e4-plausible-anchors.md:29-30` says the ordering test means “code and this narrative cannot silently
  diverge.” Replace that sentence with: **“A regression test (`npm run e4:test`) pins executable outcome ORDERING
  only; it does not bind exact configurations, magnitudes, labels, or prose.”**

## Direct answers for this dimension

- **Theorem-nesting fix verified? YES.** No theorem-scope blocker remains.
- **Mechanism + stylized theorem + measurement-plan design viable under the stated bar? YES.**
- **Package publication-ready in the live tree? NO — NEEDS CHANGES**, solely because the publication surface still
  contains the two compact anchor taxonomy/traceability contradictions above.
- **Multiplier relapse observed? NO.** The reviewed outputs retain signed parity-zero `m`; this audit found no
  multiplier result.
