# E4 v1.14 critique v12 — theorem and mechanism

## Decisive verdict

**The theorem/mechanism dimension clears the stated comparative-institutions robustness bar. The package is still
not publication-ready in the live tree because two v11 traceability/taxonomy contradictions remain.** These are not
demands for calibrated impact and not stylistic edits.

I reviewed the live tree at `9ec82923aaff68921eb11f0bf9dccf9ee70fe43f`, read every file under
`scripts/simulation/e4-v5/`, the three specified research documents, `CRITIQUE_v11_SUMMARY.md`, and all three v11
dimension reports. I also reran all six prescribed commands; all exited 0.

## Verification of the requested live-tree repairs

| repair | verdict | live evidence |
|---|---|---|
| `NO_MYOPIA` attribution | **VERIFIED** | `research/e4-plausible-anchors.md:51-55,59-60,68-72` calls it a harm-aware and otherwise-competent bundle, identifies `MYOPIA_OFF` as the two-coordinate isolation, limits the regression to outcome ordering in the correction block, and gives the sequential 16.2/40.5 (~40%) then 24.3/40.5 (~60%) decomposition. The paper and executable scenario registry/runner agree. |
| Declared endpoint/interpolation labels | **VERIFIED** | `research/e4-plausible-anchors.md:51-86`, `scripts/simulation/e4-v5/scenario-configs.mjs:5-27`, `scripts/simulation/e4-v5/scenarios.mjs:1-27`, and `scripts/simulation/e4-v5/frontier.mjs:1-74` use a declared central-favourable endpoint, a declared interpolation segment, and conditional measured-target wording. Canonical frontier output uses those labels and crosses at `t ~= 0.57`. |
| Adapter scope | **VERIFIED** | `scripts/simulation/e4-v5/adapter.mjs:1-4,23-25` promises rejection only for tested notation classes, disclaims every conceivable obfuscation, and disclaims routing every repository artifact. |
| Exact theorem nesting | **VERIFIED** | `research/e4-parity-theorem.md:59-65` puts the production and benchmark signals side by side and requires exactly `b_H^C*s(V) = b-w`, or the trivial `H == 0`; it explicitly says a constant gate alone is insufficient. |

The nesting algebra is correct. Rewriting production gives
`a + (b-w)S+ + w*v_p - b_H^C*s(V)H + eta`, while the benchmark gives
`a + (b-w)S+ + w*v_p - (b-w)H + eta`; the displayed condition is therefore necessary for equality whenever harm is
nonzero. The Gaussian lemma, covariance expressions, large-`K` corollary, production mechanism, and implementation
remain mutually consistent at their declared scopes. `npm run e4:theorem` reproduces an analytic/simulation error of
`0.00029`, or `0.17` Monte-Carlo SE.

The other prescribed runs also reproduce the reported controls and results: harm control `0.4632 -> 0.1118`, scenario
gaps `-29.5%, +46.6%, +30.4%, +6.1%, +199.8%`, no crossing on the five one-factor slices, combined-path crossing at
`t ~= 0.57`, and evidence counts `399/0/1` plus a `40/40` targeted central-winning probe.

## Remaining blocking overclaims

1. **Ordering-regression traceability remains false in two live locations.**

   - `research/e4-plausible-anchors.md:29-30` says the sign-ordering regression means code and narrative cannot
     silently diverge, and `scripts/simulation/e4-v5/test.mjs:75` says it prevents scenario configs from drifting from
     the document. The assertion at `test.mjs:80-82` checks outcome ordering only; it does not bind configs,
     magnitudes, labels, or prose.
   - **Exact fix:** replace the anchor sentence with: “A regression test (`npm run e4:test`) pins executable outcome
     ordering only; it does not bind exact configurations, magnitudes, labels, or prose.” Replace `test.mjs:75` with
     `// ---- Scenario integrity: pin executable outcome ORDERING only; this does not bind configs, magnitudes, labels, or prose. ----`.

2. **The anchor still misstates the declared taxonomy.**

   - `research/e4-plausible-anchors.md:91-92` introduces “Five named scenarios,” although the registry, runner, paper,
     and the definitions immediately below correctly classify four substantive scenarios plus `MYOPIA_OFF` as one
     diagnostic contrast.
   - **Exact fix:** replace lines 91-92 with: “## Four substantive declared scenarios + one diagnostic contrast —
     level the field both ways” and “The four substantive scenarios are `PRO_CENTRAL`, `NO_MYOPIA`, `PROBABLE`, and
     `PRO_DIST`; `MYOPIA_OFF` is a two-coordinate diagnostic contrast, not a scenario. All five rows are full configs;
     values live in `scenario-configs.mjs` and reported intervals are inner-Monte-Carlo intervals only.”

No other blocking theorem, mechanism, Gaussian-lemma, implementation, scenario-attribution, endpoint-label, or
measurement-plan defect remains under the stated limited bar.

## Direct answers

- **Publication-ready? NO.** The substantive theorem/mechanism result is ready, but the live code-and-paper package is
  not publication-ready until the two exact contradictory claims above are corrected.
- **Multiplier relapse? NO.** Canonical outputs retain signed parity-zero `m` and permissible `D/O` and `C/O` oracle
  levels; all tested embargo classes pass. This is a tested-class conclusion, not a universal proof.
