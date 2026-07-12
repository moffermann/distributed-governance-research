# E4 v1.14 (v11) — theorem and mechanism audit

## Dimension verdict

**THE THEOREM/MECHANISM DIMENSION PASSES, BUT THE LIVE PACKAGE STILL NEEDS CHANGES.** The v10 theorem-nesting
must-fix is fully implemented: the theorem now gives the exact coefficient condition and expressly says that a
constant gate alone is insufficient. The numerical mechanism, the Gaussian sanity-check limit, the declared-scenario
design, and the measurement plan are mutually coherent under the paper's expressly limited robustness-result bar.

The overall package is nevertheless not publication-ready because the live anchor and canonical frontier runner still
contain the same superseded scenario attribution/taxonomy and calibrated-sounding endpoint labels identified in v10.
These are publication-facing contradictions, not stylistic preferences. No target-domain calibration or impact bar is
being imposed here.

## Baseline and fresh execution

Reviewed `master` at `ecd8018d150005cbd11d6374fa749dd5f5f1b304` (the requested fixes are in the preceding commit; HEAD
adds the v11 prompt). I read every file in `scripts/simulation/e4-v5/`, the three specified research documents, the
v10 summary, and all three v10 dimension reports.

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

## Remaining publication blockers (ranked)

### 1. HIGH — the canonical anchor still restores the superseded myopia attribution

- `research/e4-plausible-anchors.md:51-56` still calls the eight-field `NO_MYOPIA` bundle “myopia isolated.” Replace
  that correction block with:

  > **CORRECTION:** `PRO_CENTRAL` is the central's declared full-favourable endpoint and the central wins there.
  > `NO_MYOPIA` is the harm-aware and otherwise-competent continuity bundle, not a myopia isolation.
  > `MYOPIA_OFF` is the two-harm-coordinate diagnostic contrast. Authoritative configs live in
  > `scenario-configs.mjs`; the regression pins executable outcome ORDERING only, not configs, magnitudes, labels,
  > or prose.

- `research/e4-plausible-anchors.md:61` labels the bundle merely “probable, but central sees harm.” Replace the cell
  label with **`NO-MYOPIA (harm-aware and otherwise-competent continuity bundle)`**.
- `research/e4-plausible-anchors.md:69-72` again says `NO_MYOPIA` isolates harm-myopia and makes the full decline the
  same harm mechanism. Replace that bullet with:

  > **Continuity / reconciliation with the NO-GO:** in this sequential, path-dependent decomposition,
  > `MYOPIA_OFF` changes only `s_exp,b_H_C` and reduces the gap `+46.6% -> +30.4%`, or 16.2 of the 40.5-point
  > decline to `NO_MYOPIA` (~40%). The further move to the harm-aware and otherwise-competent `NO_MYOPIA` bundle
  > reduces it by 24.3 points (~60%). `NO_MYOPIA` is the continuity anchor to the symmetry-gate near-parity regime;
  > this is a qualitative reconciliation hypothesis across different DGPs, not a reproduced limit.

### 2. HIGH — scenario taxonomy and regression scope are still false in the anchor

- `research/e4-plausible-anchors.md:29-30` claims the ordering test prevents code/narrative divergence. Replace the
  second sentence with: **“`npm run e4:test` pins executable outcome ORDERING only; it does not bind exact configs,
  magnitudes, labels, or prose.”**
- `research/e4-plausible-anchors.md:91-100` says “Five named scenarios,” conflating the diagnostic with the four
  substantive scenarios. Replace the heading and introduction with:
  **“## Four substantive declared scenarios + one diagnostic contrast — level the field both ways”** and
  **“The four substantive scenarios are `PRO_CENTRAL`, `NO_MYOPIA`, `PROBABLE`, and `PRO_DIST`; `MYOPIA_OFF` is a
  two-coordinate diagnostic contrast, not a scenario.”** Keep the existing five definitions below after making the
  `PRO_CENTRAL` label replacement in blocker 3.

### 3. MEDIUM — “best plausible/plausible scenario” survives in canonical source and stdout

This directly fails the claimed v10 label purge, and the endpoint includes values outside registered expectable
bands. Apply these exact replacements:

- `scripts/simulation/e4-v5/frontier.mjs:52-54`: replace “central's FULL best plausible case” / “plausible point”
  with **“central's declared full-favourable endpoint” / “declared endpoint.”**
- `scripts/simulation/e4-v5/frontier.mjs:59`: replace the string with
  **`■ probable -> central's declared full-favourable endpoint (combined path; t=1 is the declared endpoint)`**.
- `scripts/simulation/e4-v5/frontier.mjs:64`: replace the string with
  **`t=0 probable scenario -> t=1 central's declared full-favourable endpoint`**.
- `scripts/simulation/e4-v5/scenario-configs.mjs:19` and `scripts/simulation/e4-v5/scenarios.mjs:19`: replace
  **“full best plausible case”** with **“declared full-favourable endpoint.”**
- `research/e4-plausible-anchors.md:52,80-83,93`: replace every endpoint occurrence of **“best plausible case”**
  and **“plausible scenario/segment”** with **“declared full-favourable endpoint”** and
  **“declared interpolation segment,”** respectively. The combined-path bullet should use the already-correct paper
  wording: **“Interpolating from `PROBABLE` toward the declared full-favourable endpoint, parity is at `t ~= 0.57`,
  within the declared interpolation segment.”**

## Direct answers for this dimension

- **Theorem-nesting fix verified? YES.** No theorem-scope blocker remains.
- **Mechanism + stylized theorem + measurement-plan design viable under the stated bar? YES.**
- **Package publication-ready in the live tree? NO — NEEDS CHANGES**, solely because the publication surface still
  contains the three compact, previously identified attribution/taxonomy/label contradictions above.
- **Multiplier relapse observed? NO.** The reviewed outputs retain signed parity-zero `m`; this audit found no
  multiplier result.
