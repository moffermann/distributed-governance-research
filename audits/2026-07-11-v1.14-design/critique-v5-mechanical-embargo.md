# Critique v5 — mechanical embargo

## Verdict

**PARTIAL (blocker 6 is not cleared).** V5 is a real improvement over v4: the normal package path exists, its primary result is rendered through a closed top-level field allowlist, and the four exact adversarial examples in `test.mjs` pass. The standard `npm run e4:evidence` output contains no retired multiplier framing. But the implementation does not establish the stronger claims that the contract is the *only* path to evidence, that the schema cannot express a parity-one ratio, or that legacy engines cannot feed a v1.14 artifact. I produced schema-valid, adapter-accepted parity-one output and ran a live legacy engine that still emits `x` multipliers.

**Multiplier-relapse risk: YES.** It is lower than in v4 because the canonical command is clean, but it remains material until provenance, final-artifact closure, semantic aliases, and legacy isolation are enforced mechanically.

| Acceptance question | Answer |
|---|---|
| Does canonical `2.2x`, `2.2X`, `2.2×`, uppercase `D/C`, or uppercase `C/D` pass `renderReport`? | **NO** for those exact forms. |
| Can a D/C-equivalent reach rendered text? | **YES**: lowercase/mixed case, words, Unicode slashes, and zero-width-separated forms pass. |
| Can ratio-with-parity-1 semantics reach rendered text? | **YES**: a schema-valid forged legacy object rendered `distributed/central=1.40; parity=1` and `D over C ratio, parity 1`. |
| Can an `x`/`×` multiplier variant pass? | **YES**: `2.2 times`, `2.2-fold`, Arabic-digit `٢x`, zero-width `2.2​x`, and Cyrillic `2.2х` pass. Canonical ASCII and `×` do not. |
| Is all official evidence text passed through adapter + schema? | **NO**: rival sensitivity and contract hash are direct `console.log` calls. |
| Are legacy engines mechanically unable to feed v1.14? | **NO**: comments say so, but there is no runtime guard, import/release guard, separate directory, or provenance check. |

## Commands and observed output

`npm run e4:test` exited 0 and printed all tests passing, including the three embargo cases. Those cases cover only `2.2x`, `2.2×`, and uppercase no-space `D/C`; the “clean schema” fixture itself omits `m_lo_DF`, `m_hi_DF`, and `m_Ralpha` and is expected to pass (`scripts/simulation/e4-v5/test.mjs:39-48`).

`npm run e4:evidence` exited 0. Its canonical report was clean and used signed percentages with parity at zero: `m_hat=45.7%`, `D_F=[-6.1%,110.0%]`, and the alpha-0.95 interval `[14.5%,74.7%]`. This establishes that the current happy path does not relapse; it does not establish exclusivity.

A focused call to `assertNoEmbargoedTokens` produced:

```text
ALLOWED  "ratio d/c = 1.4"
ALLOWED  "ratio D / c = 1.4"
ALLOWED  "distributed/central = 1.4; parity is 1"
ALLOWED  "distributed over central = 1.4 (parity 1)"
ALLOWED  "advantage = 1.4; parity at 1"
ALLOWED  "gain of 2.2 times"
ALLOWED  "gain of 2.2-fold"
ALLOWED  "gain of ٢x"
ALLOWED  "gain of 2.2​x"
ALLOWED  "gain of 2.2х"
ALLOWED  "D∕C = 1.4"
ALLOWED  "D／C = 1.4"
ALLOWED  "D​/C = 1.4"
REJECTED "matrix is 2 × 3"
REJECTED "image is 2x"
```

The same probe supplied `renderReport` with an object whose `contract_version` was `legacy`, whose `theta_id` was `distributed/central=1.40; parity=1`, whose numeric fields held parity-one-style values, and whose `m_Ralpha` key was `D over C ratio, parity 1`. `validateOutput` returned `[]`, and the adapter rendered all of that text. A second object with `NaN`, `Infinity`, string/null CI elements, absent `D_F` endpoints, and `m_Ralpha:null` also returned `[]` and rendered `Infinity%`/`NaN%`.

Finally, this direct legacy invocation completed without any opt-in guard:

```text
node scripts/simulation/e5-sp-model.mjs 500 50 1 --tornado
...
baseline ratio = -1.16x
...
beta (voice bias) | 0.3 -> -1.16x | 0.5 -> -1.16x
```

The warning banner is useful disclosure, but it is not isolation. The older E4 frontier is likewise a top-level executable; it computes `r.d/r.c`, prints parity at one, and emits `toFixed(2)+"x"` (`scripts/simulation/e4-v4-symmetric-frontier.mjs:61-70,79-88,93-104`).

## Specific issues

### 1. Blocking — the “closed schema cannot express parity-one ratio” claim is false

The schema closes only top-level property *names*. It permits arbitrary strings in `contract_version` and `theta_id`, arbitrary finite or non-finite numbers in all numeric fields, arbitrary array contents in `ci`, and an unconstrained `m_Ralpha` object (`scripts/simulation/e4-v5/contract.mjs:85-106`). `m_lo_DF`, `m_hi_DF`, and `m_Ralpha` are not required at all (`contract.mjs:90-100`). The hand-written validator checks `typeof` for top-level numbers and strings and array length, but does not enforce array item schemas, object type/nesting, finiteness, interval ordering, the actual contract version/hash, or any provenance (`scripts/simulation/e4-v5/schema.mjs:6-27`). In JavaScript, both `NaN` and `Infinity` have type `number`.

Therefore any legacy scalar, including a D/C ratio centered on one, can be relabeled as `m_hat` and accepted. The adapter formats whatever number it receives as a percentage; it cannot recover the number's estimand or provenance (`scripts/simulation/e4-v5/adapter.mjs:21-38`). My forged object is a constructive counterexample.

### 2. Blocking — legacy exclusion is commentary, not a runtime or release boundary

The design requires “legacy engines behind a runtime guard + separate artifact namespace” (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v5.md:82-93`). Neither exists. `e4-v4-symmetric-frontier.mjs` says in comments that it “CANNOT feed v1.14 artifacts” but immediately executes and retains the retired computation/output (`scripts/simulation/e4-v4-symmetric-frontier.mjs:1-6,61-110`). `e5-sp-symmetry-gate.mjs` makes the same comment-only claim (`scripts/simulation/e5-sp-symmetry-gate.mjs:1-6`). `e5-sp-model.mjs` is also directly runnable and prints retired ratios and `x` suffixes after only an informational banner (`scripts/simulation/e5-sp-model.mjs:167-194`). All remain under `scripts/simulation/`, not a separate legacy namespace.

The new package alias correctly points to `e4-v5/evidence.mjs` (`package.json:6-11`), and that file imports only the new engine. That proves the happy path is new; it does not make the alias exclusive. There is no release collector, output manifest, CI rule, import graph check, required `legacy:false`, engine hash, or recomputation of `theta_id`. A human or script can take a legacy number and pass it to the exported `renderReport`, as the probe did.

### 3. Major — the blacklist has both false negatives and false positives

The suffix regex is ASCII-digit plus optional whitespace plus ASCII `x`/`X` or `×`, ending at a word boundary; the ratio regex is uppercase `D`/`C` with ASCII slash (`scripts/simulation/e4-v5/adapter.mjs:8-16`). `EMBARGO_TOKENS` adds unconditional, case-sensitive substring checks for `×`, `D/C`, and `C/D` (`scripts/simulation/e4-v5/contract.mjs:109-110`). Despite comments saying “in institution-performance context,” no context test exists.

False negatives include case variation (`d/c`, `D/c`), written aliases (`D over C`, `distributed/central`, `distributed-to-central`, `times`, `-fold`), parity-one prose without a ratio token, Unicode division/fullwidth slashes, zero-width separators, non-ASCII digits, and Cyrillic `х`. HTML/Markdown-escaped forms can also pass source scanning and become a forbidden token after downstream rendering.

False positives include any legitimate multiplication sign anywhere (`2 × 3`) and numeric `x` text with no performance meaning (`image 2x`). Thus the implementation is simultaneously weaker and broader than its stated institution-performance embargo.

### 4. Major — the canonical evidence artifact itself bypasses the sole adapter

`evidence.mjs` validates and renders `out`, then appends the rival sensitivity and contract hash with two direct `console.log` calls (`scripts/simulation/e4-v5/evidence.mjs:65-89`). Those lines are clean today, but they directly contradict “Everything renders through the sole embargo adapter” (`evidence.mjs:1-4`). The final serialized stdout stream is never scanned as one artifact. In addition, `buildEvidence()` exports raw `{out,rival}` (`evidence.mjs:79-83`), so consumers can serialize it without the adapter.

### 5. Major — tests prove only exact spellings, not the claimed boundary

The test suite asserts three blacklist examples and one clean percentage (`scripts/simulation/e4-v5/test.mjs:39-44`). It does not test `2.2X`, `C/D`, spacing, case folding, words, Unicode confusables, zero-width characters, HTML/Markdown transformations, parity-one semantics, final stdout, raw-object serialization, forged provenance, or legacy imports/feeds. It also encodes the schema weakness as success by accepting an object missing all sensitivity fields (`test.mjs:46-48`). Passing these fixtures therefore cannot support the strong embargo claim.

## Minimum fixes

1. Make legacy isolation real: move old runners under a distinct `legacy/` tree and artifact directory; require an explicit reproduction-only environment token before execution; emit a mandatory legacy marker; reject imports from legacy into v1.14; and make the release collector accept only a manifest produced by the canonical command. Add a test that attempts a legacy feed and must fail.
2. Replace estimand-by-convention with verified provenance. Require exact/constant `schema_version`, `contract_version`, `contract_hash`, `engine_hash`, `config_hash`, `legacy:false`, and an enum such as `estimand_kind:'signed_difference_over_oracle_parity_zero'`. Recompute or verify them at render/release time rather than trusting strings supplied by the caller.
3. Fully close the schema: require the D_F and R-alpha fields; allow only the frozen alpha keys; recursively reject extra keys; require finite numeric values and ordered two-element intervals; reject `NaN`/`Infinity`; and constrain or remove all caller-controlled text from the rendered artifact.
4. Render the *entire* evidence report—including rival sensitivity and hashes—through one fixed-template adapter, then scan the final bytes after every Markdown/HTML/SVG/CSV transformation. Do not export an unguarded raw artifact writer.
5. Prefer structural prevention over an ever-growing token blacklist: only signed-difference primitives with parity fixed at zero should enter the renderer, and no institutional arm-ratio operation should exist in the v1.14 import graph. Supplement that with Unicode normalization/confusable handling and table-driven adversarial tests for case, spacing, words, zero-width characters, division symbols, encoded markup, and benign math/context false positives.

## Explicit answers

- **Can literal uppercase `D/C` reach the current `renderReport` output? NO.** The exact token and ordinary spaced uppercase variant are rejected. **Can its semantics or orthographic variants reach a v1.14-looking artifact? YES.**
- **Can a ratio with parity one reach a v1.14-looking artifact? YES.** The schema and renderer do not authenticate the estimand; the forged legacy object demonstrates it.
- **Can exact ordinary `2.2x`, `2.2X`, or any literal `×` reach current `renderReport` output? NO.** **Can multiplier suffix/word/confusable variants reach it? YES.**
- **Are legacy engines truly unable to feed v1.14 output? NO.** The canonical package command does not import them, but there is no mechanical guard or provenance boundary.
- **Multiplier-relapse risk: YES — MATERIAL.** The canonical report is currently clean, but blocker 6 remains only partial.
