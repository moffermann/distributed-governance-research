# Adversarial critique summary — E4 v1.14 (v10), code + paper draft

## Verdict

**NEEDS CHANGES. E4 is not publication-ready yet as a comparative-institutions robustness result.** The numerical
design, evidence correction, Gaussian lemma, and embargo behavior are now substantively viable under the stated
limited bar. The remaining blockers are compact wording, taxonomy, and theorem-scope inconsistencies; they do not
require target-domain calibration or a redesign.

The decisive problem is that the v10 premise is not true across the live publication surface. The executable and
main paper body give the correct sequential attribution (about 40% harm-myopia, about 60% added competence), but both
the anchor and registry header still say the harm channel explains “most”; the anchor additionally calls the bundled
`NO_MYOPIA` result an isolation. The package also retains three/four/five-scenario contradictions, one literal `evidence-anchored`
label, calibrated-sounding “best plausible/where reality sits” language, and an algebraically incomplete statement
of the production-to-benchmark nesting condition.

Detailed independent reviews:

- [Scenario attribution and single-source review](critique-v10-scenario-attribution.md)
- [Evidence and label review](critique-v10-evidence-labels.md)
- [Scope, theorem, and embargo review](critique-v10-scope-embargo.md)

## Audit baseline and required runs

Reviewed `master` at `601263a0e5be484bf6dcbbe74bcbd0a4a4c53fd9`, later than the requested minimum `5a85d27`;
the intervening commit adds only the v10 prompt. The pre-existing untracked `codex-v10-run.log` was preserved.

| command | exit | reproduced result |
|---|---:|---|
| `npm run e4:controls` | 0 | all controls pass; harm control `0.4632 -> 0.1118` |
| `npm run e4:test` | 0 | all tests pass; five-result ordering and current embargo fixtures pass |
| `npm run e4:theorem` | 0 | Gaussian identity error `0.00029 = 0.17` MC SE |
| `npm run e4:scenarios` | 0 | `PRO_CENTRAL -29.5%`, `PROBABLE +46.6%`, `MYOPIA_OFF +30.4%`, `NO_MYOPIA +6.1%`, `PRO_DIST +199.8%`; stdout gives the correct 40/60 sequential attribution |
| `npm run e4:frontier` | 0 | none of five plotted slices crosses; combined path crosses at `t ~= 0.57` |
| `npm run e4:evidence` | 0 | 399 Core-v0 wins, 0 central wins, 1 parity in 400; rule-of-three about 1%; targeted central 40/40; `sign:indeterminate` |

## Five-change verification

| requested change | v10 result | decisive evidence |
|---|---|---|
| **1. Myopia attribution** | **FAILED repository-wide; executable and main paper verified** | `MYOPIA_OFF` changes only `s_exp,b_H_C`; `NO_MYOPIA` is the eight-field bundle; scenarios stdout and the paper correctly report 16.2/40.5 points (~40%) then 24.3/40.5 (~60%). But `e4-plausible-anchors.md:53-54,69-72,94-95` restores the bundled-isolation/full-harm attribution and “most”; `scenario-configs.mjs:8-10` also says “most.” |
| **2. Global evidence honesty** | **VERIFIED** | The live report says finite product-box sample, 399/400 Core-v0 wins with 0 central and 1 parity, a nonzero `3/400` rule-of-three upper bound rounded to about 1%, targeted central wins 40/40, and `sign:indeterminate (region-dependent)` (`evidence.mjs:116-126`). It does not claim exhaustive coverage, zero uncertainty, or a globally positive sign. |
| **3. Single source and ordering/taxonomy** | **FAILED overall; exact-config source and ordering verified** | Named endpoint configs now live only in `scenario-configs.mjs`, and `e4:test` pins `PRO_CENTRAL < NO_MYOPIA < MYOPIA_OFF < PROBABLE < PRO_DIST`. But the paper header still says three-scenario (`e4-paper-section-draft.md:3`), the runner says “THREE” and misidentifies `PRO_CENTRAL` as the continuity anchor (`scenarios.mjs:1-4`), the anchors call all five points scenarios (`e4-plausible-anchors.md:91-100`), and the registry says four while enumerating five (`scenario-configs.mjs:5-16`). The anchor's claim that an ordering test prevents narrative divergence (`:29-30`) exceeds what the test proves. |
| **4. Labels** | **FAILED** | Evidence stdout and the main paper use source-motivated/declared labels, but `e4-plausible-anchors.md:111` still says `evidence-anchored`. The anchors and canonical frontier also retain “full best plausible case,” “plausible scenario/region,” and “where reality sits” (`e4-plausible-anchors.md:52-65,80-95`; `frontier.mjs:52-64`), even though the paper acknowledges that the endpoint is declared and some knobs lie outside registered expectable bands. |
| **5. Frontier/theorem/mechanism scope** | **FAILED narrowly; most elements verified** | The paper and final frontier stdout correctly say five prespecified/plotted slices, not all parameters, and the paper conditions the long-tail mechanism on the declared salience proxy. The theorem is correctly labelled stylized. However, its literal nesting condition is incomplete: for nonzero `H`, equality of the production signal with the displayed net-`S` benchmark requires `b_H^C s(V) = b-w` (plus the other benchmark restrictions), not merely a constant gate plus `S+ -> S` (`e4-parity-theorem.md:58-64`). The anchor's unqualified “no single knob decides it” also generalizes beyond the five slices (`e4-plausible-anchors.md:84-85`). |

## Remaining must-fix overclaims and dishonest labels, ranked

### 1. HIGH — remove the live superseded causal attribution

Make the anchors and `scenario-configs.mjs` header match the already-correct paper/stdout: `MYOPIA_OFF` is the
two-coordinate diagnostic; harm-myopia accounts for about 40% of this sequential, path-dependent decline; the added
competence bundle accounts for about 60%. Delete every statement that `NO_MYOPIA +6.1%` isolates myopia or that the
harm channel explains “most.”

### 2. HIGH — state the theorem's exact nesting restriction

For nonzero harm, a constant visibility gate is insufficient. State the coefficient match
`b_H^C s(V) = b-w` together with the Gaussian/fixed-threshold restrictions, or say explicitly that the benchmark is
a modified net-`S`, no-separate-harm-term model that does not literally nest the production signal except in a valid
special case such as `H=0`. The lemma and regression need no substantive change.

### 3. HIGH — make the scenario taxonomy and traceability claim consistent

Use **four substantive declared scenarios plus one diagnostic contrast** everywhere. Remove the live “THREE,” “five
named scenarios,” and internally inconsistent “four” labels, and identify `NO_MYOPIA`—not `PRO_CENTRAL`—as the
continuity bundle. Say only that the regression pins executable outcome ordering; it cannot prevent prose, labels,
configs, or magnitudes from diverging.

### 4. MEDIUM — finish the declared-label/scope sweep and narrow the embargo guarantee

Replace the remaining `evidence-anchored`, “best plausible,” “plausible scenario/region,” “where reality sits,” and
unqualified “no single knob decides it” phrases with the already-adopted declared-endpoint/five-slice language. Also
make `adapter.mjs:1-3` match its honest tested-class disclaimer at `:22-24`: it does not prove rejection of *any*
conceivable multiplier notation or route every repository artifact through one renderer.

## Direct answers

- **Multiplier relapse? NO.** The reviewed canonical outputs retain the signed parity-zero `m` estimand, and all
  requested U+2060, HTML-entity, hyphen/slash/x-confusable, numeric/word `N-fold`, `twice`/`double`, and lowercase
  `d/c` probes are rejected. Scenarios and frontier emit through `safeLog`. The remaining adapter issue is an
  overbroad guarantee, not an observed multiplier result.
- **Are all five changes verified? NO.** Change 2 passes; changes 1, 3, and 4 fail repository-wide; change 5 is
  mostly implemented but fails on the literal nesting condition and one residual frontier generalization.
- **Publication-ready now? NO. E4 still NEEDS CHANGES.** The work is substantively close and can clear the stated
  bar with the compact wording/consistency repairs above; no disclaimed target-domain data are required.
