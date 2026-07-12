# E4 v1.14 (v8) — adversarial code/release review

## Verdict

**NEEDS CHANGES; the code/release layer is not yet publication-ready.** The large v7 defects are genuinely improved:
the current four scenarios execute with the intended winner ordering, the combined frontier is `t≈0.57`, every one
of the 19 top-level legacy engines actually refuses to run without `E4_ALLOW_LEGACY=1`, and the exact M2 strings
named in the change log are rejected. The canonical commands all exit successfully.

The remaining defects are smaller than the v7 fork, but they cross the honesty/release bar in this prompt. The
canonical evidence output still calls PROBABLE “evidence-anchored,” still calls the now decisive `m=-29.5%`
PRO-CENTRAL scenario “≈parity,” and still says there are three named scenarios. Its `sign:pos` classification also
turns a 400/400 finite sample into a categorical global sign even though the code's own combined path demonstrates a
nonzero central-win region inside the same box. Finally, the embargo has ordinary semantic/Unicode bypasses and the
claimed sole-render/schema boundary is not actually exclusive.

**Explicit multiplier-relapse / embargo-bypass answer: YES.** The standard stdout currently uses percentages and
parity zero, so the canonical run has not itself relapsed. But a non-breaking-hyphen `2.2‑fold`, word-form
`twice`, lowercase `d/c`, Unicode division slash, encoded multiplication entity, or zero-width-separated `2​x`
passes the exported adapter. Official scenario/frontier outputs do not pass through that adapter at all.

## Audit baseline and command outcomes

The final inspection and reruns were against `0537ef7ae27af99bf59dfbca979d02dcfd66ff6b` on `master` (later than the
requested minimum). No production file was edited by this review.

| Command | Exit | Salient result |
|---|---:|---|
| `npm run e4:controls` | 0 | all controls passed; C4 `0.4632 → 0.1118` |
| `npm run e4:test` | 0 | all tests passed; 19 reported guarded; scenario signs pinned |
| `npm run e4:theorem` | 0 | Gaussian identity error `0.17` MC SE |
| `npm run e4:scenarios` | 0 | `-29.5%, +6.1%, +46.6%, +199.8%` |
| `npm run e4:frontier` | 0 | combined-path parity at `t≈0.57` |
| `npm run e4:evidence` | 0 | 400/400 resolved; `+46.6%`; sampled shares `100/0/0`; `sign:pos` |

I also directly invoked all 19 top-level `scripts/simulation/*.mjs` files without the environment flag. Every one
exited `2` and emitted `[legacy guard]`. A targeted combined-path run produced `m=+0.0207` at `t=.55`, `-0.0240` at
`.60`, `-0.0939` at `.70`, and `-0.2986` at `1.0` (400 worlds each), confirming that central wins well before the
single endpoint.

## Requested-fix verification

| Requested fix | Result | Evidence |
|---|---|---|
| Four-scenario fork and winner order | **PASS in computation; FAIL in residual output labels** | All four configs share the same 18 keys and are imported by the scenario runner ([scenario-configs.mjs](../../scripts/simulation/e4-v5/scenario-configs.mjs), [scenarios.mjs:7](../../scripts/simulation/e4-v5/scenarios.mjs#L7)). The run gives the declared four numbers. But the evidence renderer says PRO-CENTRAL is “≈parity” and says “three named scenarios” ([evidence.mjs:101](../../scripts/simulation/e4-v5/evidence.mjs#L101), [evidence.mjs:105](../../scripts/simulation/e4-v5/evidence.mjs#L105)); the scenario file's header also still describes three scenarios and conflates PRO-CENTRAL with the continuity anchor ([scenarios.mjs:1](../../scripts/simulation/e4-v5/scenarios.mjs#L1)). |
| Corrected combined frontier | **PASS** | The endpoint is imported from the single config source, interpolation is explicit, and the output scopes `t` as an illustrative heterogeneous-knob mix ([frontier.mjs:51](../../scripts/simulation/e4-v5/frontier.mjs#L51), [frontier.mjs:71](../../scripts/simulation/e4-v5/frontier.mjs#L71)). Runtime root: `t≈0.57`. |
| H3: all 19 legacy engines require opt-in | **PASS in the current tree** | Direct execution of every top-level engine without the flag exited `2`. The opt-in itself is the documented reproduction path, not an unauthorized bypass. |
| H3 release regression test | **PARTIAL / weak** | The universal test merely searches source text for the substring `E4_ALLOW_LEGACY` ([test.mjs:66](../../scripts/simulation/e4-v5/test.mjs#L66)). A comment containing that token would pass. Only one engine is executed in the test ([test.mjs:59](../../scripts/simulation/e4-v5/test.mjs#L59)). Current runtime state is good; the assertion does not prove or preserve it. |
| M2 listed confusables: Cyrillic `х`, `× ✕ ✖ ⨯` | **PASS** | All listed glyphs are normalized by the character class ([adapter.mjs:8](../../scripts/simulation/e4-v5/adapter.mjs#L8)); direct probes rejected every one. Tests omit `✖` and `⨯`, but the implementation caught them. |
| M2 ordinary numeric `N-fold` / `N times` | **PASS narrowly** | `2.2-fold` and `2.2 times` are rejected by the regex and tests ([adapter.mjs:12](../../scripts/simulation/e4-v5/adapter.mjs#L12), [test.mjs:90](../../scripts/simulation/e4-v5/test.mjs#L90)). Common typographic and semantic equivalents still pass, so the broader “any institution-performance multiplier notation” claim fails. |
| Uniform global evidence over anchored envelope | **PASS as a sampling implementation; FAIL as currently classified/rendered** | It independently samples 18 coordinates uniformly over the coordinate-wise min/max box from PRO-CENTRAL, PROBABLE, and PRO-DIST ([evidence.mjs:15](../../scripts/simulation/e4-v5/evidence.mjs#L15), [evidence.mjs:32](../../scripts/simulation/e4-v5/evidence.mjs#L32)); this is not the retired seven-key corner sweep. The limitations below prevent treating the printed `sign:pos` and `±0% SE` as a certified envelope result. |
| Softened evidence labels | **FAIL in canonical executable output** | `npm run e4:evidence` literally prints `PROBABLE scenario (evidence-anchored)` ([evidence.mjs:97](../../scripts/simulation/e4-v5/evidence.mjs#L97)). This contradicts the requested “source-motivated declared reference” wording. |

## Remaining findings, ranked

### 1. Major — the canonical evidence output contains three false/stale labels

The canonical renderer says PROBABLE is “evidence-anchored,” calls PRO-CENTRAL “≈parity,” and advertises “three
named scenarios” ([evidence.mjs:97](../../scripts/simulation/e4-v5/evidence.mjs#L97),
[evidence.mjs:101](../../scripts/simulation/e4-v5/evidence.mjs#L101),
[evidence.mjs:105](../../scripts/simulation/e4-v5/evidence.mjs#L105)). The same run establishes PRO-CENTRAL at
`-29.5%`, while NO-MYOPIA is the distinct `+6.1%` continuity/mechanism scenario. These are not calibration demands;
they are executable-output contradictions of the paper's declared framing.

### 2. Major — zero observed central wins is misreported as a categorical positive sign with zero uncertainty

The classification assigns `sign_status='pos'` whenever the finite envelope sample has any distributed wins and
exactly zero central wins ([evidence.mjs:53](../../scripts/simulation/e4-v5/evidence.mjs#L53)). The reported standard
error is the plug-in Wald value `sqrt(p(1-p)/n)`, hence exactly zero at 400/400
([evidence.mjs:46](../../scripts/simulation/e4-v5/evidence.mjs#L46)). That does not establish that the central-win
volume is zero. Even under an ideal iid binomial abstraction, zero events needs a one-sided interval, not `0 ± 0`.

More decisively, the same implementation reports a continuous path crossing at `t≈.57`; values from `.60` through
`1.0` were negative in the targeted rerun. Subject to ordinary continuity, a neighborhood around those interior
points has positive measure in the 18-dimensional box. The explanatory sentence correctly notes that the exact
coordinated endpoint has measure zero, but incorrectly turns that into “reaching parity needs that corner”
([evidence.mjs:101](../../scripts/simulation/e4-v5/evidence.mjs#L101)). The 400-draw design simply has too little
resolution to see a small coordinated region. Label the shares as finite-sample estimates, attach a boundary-valid
interval, and make the global sign `indeterminate` when a declared in-envelope scenario has the opposite sign (or
certify the region with a suitable targeted/stratified design).

### 3. Major — the embargo remains bypassable despite the exact M2 fixes

The filter normalizes a useful but finite glyph list, then applies ASCII-digit/context regexes
([adapter.mjs:10](../../scripts/simulation/e4-v5/adapter.mjs#L10)). Direct probes gave:

```text
REJECT 2.2✖        REJECT 2.2⨯       REJECT 2.2-fold    REJECT 2.2 times
ALLOW  2.2‑fold    ALLOW  two-fold   ALLOW  twice       ALLOW  double
ALLOW  ２ｘ         ALLOW  2​x        ALLOW  d/c         ALLOW  D∕C
ALLOW  2&times;     ALLOW  2&#x00D7;
```

The non-breaking hyphen in `2.2‑fold` is ordinary typesetting, not an exotic attack. The case-sensitive ratio check
also still permits a parity-one phrase in lowercase ([adapter.mjs:13](../../scripts/simulation/e4-v5/adapter.mjs#L13)).
A constructive call to exported `renderReport` with schema-valid
`theta_id='twice the value; d/c parity 1'` rendered that text unchanged. Thus the narrow fix passes, but the file's
strong claim to reject *any* institution-performance multiplier notation ([adapter.mjs:1](../../scripts/simulation/e4-v5/adapter.mjs#L1))
does not.

### 4. Major — “sole render adapter” and closed-schema routing are not true release boundaries

`evidence.mjs` imports `renderReport` but never calls it; it hand-builds text containing raw `pt` and `env` fields,
then runs only the token assertion ([evidence.mjs:11](../../scripts/simulation/e4-v5/evidence.mjs#L11),
[evidence.mjs:91](../../scripts/simulation/e4-v5/evidence.mjs#L91)). `scenarios.mjs` and `frontier.mjs` print directly
and do not import the adapter at all ([scenarios.mjs:11](../../scripts/simulation/e4-v5/scenarios.mjs#L11),
[frontier.mjs:22](../../scripts/simulation/e4-v5/frontier.mjs#L22)). These are official declared-result commands, so
“Every official artifact must render through here” is false.

The validator also accepts an inverted CI, `m_Ralpha:null`, and an object omitting `df_par_share`; the latter renders
`parity NaN%`. Object types and CI ordering are not generally enforced ([schema.mjs:13](../../scripts/simulation/e4-v5/schema.mjs#L13),
[schema.mjs:30](../../scripts/simulation/e4-v5/schema.mjs#L30)). This does not corrupt today's canonical numbers, but
it defeats the claimed closed release contract.

### 5. Moderate — the evidence ID does not bind the PROBABLE headline config

The manifest hashes the coordinate-wise envelope but not the `PROBABLE` object itself
([evidence.mjs:21](../../scripts/simulation/e4-v5/evidence.mjs#L21)). Moving a PROBABLE coordinate within the existing
PRO_CENTRAL/PRO_DIST extrema changes the headline estimate at [evidence.mjs:73](../../scripts/simulation/e4-v5/evidence.mjs#L73)
without changing the envelope or `THETA_ID`. Scenario/frontier stdout has no resolved run ID. The current single
source prevents one kind of fork, but the release provenance still cannot prove which declared point produced a
headline.

### 6. Moderate — the legacy guard is real, but its release test and provenance are incomplete

No unauthorized execution/import path was found in the current inventory: all 19 modules terminate before their
simulation bodies when the flag is absent. With the deliberate reproduction flag present, however, legacy stdout
has no mandatory machine-readable `legacy:true` marker or separate artifact namespace. That is not a bypass of H3's
stated opt-in rule, but it leaves an accidental feed path after an authorized reproduction. Combined with the weak
textual regression test and nonexclusive render path, the release boundary is procedural rather than fail-closed.

## Shortest code/release path to publication readiness

1. Correct the canonical evidence strings: “source-motivated declared reference,” four scenarios, and
   PRO-CENTRAL as a central win; remove the false corner/parity sentence.
2. Do not classify 400/400 as a certified globally positive sign with `±0%` uncertainty. Use a boundary-valid
   interval and either targeted/stratified coverage of the known central region or an `indeterminate` global status.
3. Route evidence, scenarios, and frontier through one fixed renderer; fully validate required fields/types/order;
   bind exact scenario configs and engine/contract provenance into every run ID.
4. Normalize Unicode (including dash, slash, digit, and format characters), block semantic word forms/encoded forms
   at the final rendered-byte stage, and turn the M2 examples into a table-driven adversarial suite.
5. Replace the H3 substring scan with execution tests for the enumerated 19-engine inventory; mark all opt-in legacy
   output machine-readably and keep it out of the official artifact namespace.

These are engineering and labeling corrections only. They do not require the target-domain calibration that this
paper explicitly disclaims.
