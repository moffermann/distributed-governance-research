# E4 v1.14 critique v11 — publication-language and taxonomy audit

## Dimension verdict

**NEEDS CHANGES. This publication-language dimension is not publication-ready.** The main paper draft now states the
correct limited result, and the requested embargo disclaimer is fixed, but the live anchor document still contains a
false bundled-as-myopia-only attribution and a five-scenarios taxonomy. Canonical code comments and frontier stdout
also retain the expressly retired “full best plausible case” / “plausible scenario” calibration labels. These are
blocking contradictions and dishonest labels, not stylistic preferences and not a demand for calibrated impact.

Reviewed `master` at `ecd8018d150005cbd11d6374fa749dd5f5f1b304`. I preserved the pre-existing untracked
`audits/2026-07-11-v1.14-design/codex-v11-run.log` and did not alter source files.

## Verification of the assigned v10 fixes

| v10 fix | result | live evidence |
|---|---|---|
| 1 — sequential attribution and isolation labels | **FAILED repository-wide** | The registry header gives the correct sequential 16.2/40.5 (~40%) harm-gate step and ~60% added-competence step, with `MYOPIA_OFF` as the diagnostic and `NO_MYOPIA` as the bundle ([scenario-configs.mjs:5](../../scripts/simulation/e4-v5/scenario-configs.mjs#L5), [scenario-configs.mjs:13](../../scripts/simulation/e4-v5/scenario-configs.mjs#L13)). The paper also gives the correct path-dependent decomposition ([paper draft:61](../../research/e4-paper-section-draft.md#L61)). But the anchor still says `NO_MYOPIA` has “myopia isolated” and then says “isolating harm-myopia (NO-MYOPIA)” accounts for the entire +46% to +6.1% movement ([anchors:51](../../research/e4-plausible-anchors.md#L51), [anchors:69](../../research/e4-plausible-anchors.md#L69)). |
| 3 — four substantive scenarios plus one diagnostic contrast | **FAILED** | The registry, runner, and paper now use the requested taxonomy and identify `NO_MYOPIA` as the continuity anchor ([scenario-configs.mjs:5](../../scripts/simulation/e4-v5/scenario-configs.mjs#L5), [scenarios.mjs:1](../../scripts/simulation/e4-v5/scenarios.mjs#L1), [paper draft:37](../../research/e4-paper-section-draft.md#L37)). The anchor nevertheless says “Five named scenarios” ([anchors:91](../../research/e4-plausible-anchors.md#L91)). It also says the ordering regression means “code and this narrative cannot silently diverge” ([anchors:29](../../research/e4-plausible-anchors.md#L29)); that is false because the test binds executable outcome ordering only. The accurate later disclaimer at lines 54–56 does not cure this earlier overclaim. |
| 4 — declared labels and calibrated-sounding language | **FAILED repository-wide** | `evidence-anchored` is purged, and the paper uses “declared full-favourable endpoint,” “declared interpolation segment,” and the conditional measured-target formulation ([paper draft:49](../../research/e4-paper-section-draft.md#L49), [paper draft:71](../../research/e4-paper-section-draft.md#L71)). The anchor, registry comment, runner comment, and canonical frontier output still use “full best plausible case”; frontier also prints “plausible scenario” and asks whether “reality” sits on one side ([anchors:51](../../research/e4-plausible-anchors.md#L51), [scenario-configs.mjs:19](../../scripts/simulation/e4-v5/scenario-configs.mjs#L19), [scenarios.mjs:19](../../scripts/simulation/e4-v5/scenarios.mjs#L19), [frontier.mjs:1](../../scripts/simulation/e4-v5/frontier.mjs#L1), [frontier.mjs:52](../../scripts/simulation/e4-v5/frontier.mjs#L52), [frontier.mjs:59](../../scripts/simulation/e4-v5/frontier.mjs#L59)). The anchor's final measured-target/five-slice sentence itself is correctly narrowed ([anchors:84](../../research/e4-plausible-anchors.md#L84)). |
| 5 — tested-classes embargo disclaimer | **VERIFIED** | The adapter header now limits the claim to the tested notation classes, disclaims proof against every obfuscation, and disclaims routing every repository artifact ([adapter.mjs:1](../../scripts/simulation/e4-v5/adapter.mjs#L1)). This matches its detailed note ([adapter.mjs:23](../../scripts/simulation/e4-v5/adapter.mjs#L23)). No publication-language multiplier relapse was found. |

## Remaining blocking wording fixes, ranked

### 1. HIGH — remove the false `NO_MYOPIA` causal isolation from the anchor

At [research/e4-plausible-anchors.md:51](../../research/e4-plausible-anchors.md#L51), replace lines 51–56 with:

> **CORRECTION (Codex v7):** the earlier “PRO-CENTRAL = +6.1%” conflated two distinct scenarios. Fixed. The central's
> declared full-favourable endpoint is `PRO_CENTRAL` in `scenario-configs.mjs` (the single source of truth), and the
> central wins there. `NO_MYOPIA` is the separate harm-aware and otherwise-competent continuity bundle at +6.1%, not
> a myopia isolation; `MYOPIA_OFF` is the two-coordinate myopia-only diagnostic contrast at +30.4%. Authoritative
> values live in `scenario-configs.mjs`; the regression pins outcome ordering only
> (`PRO_CENTRAL < NO_MYOPIA < MYOPIA_OFF < PROBABLE < PRO_DIST`), not exact configurations, magnitudes, labels, or prose.

At [research/e4-plausible-anchors.md:69](../../research/e4-plausible-anchors.md#L69), replace lines 69–72 with:

> - **Continuity / reconciliation with the NO-GO:** `MYOPIA_OFF`, which changes only the two harm-gate coordinates,
>   reduces the probable gap from +46.6% to +30.4%: 16.2 of the 40.5-point sequential decline to `NO_MYOPIA` (~40%).
>   The further move to the harm-aware and otherwise-competent `NO_MYOPIA` bundle reduces it by 24.3 points (~60%)
>   and reaches the same near-parity regime as the symmetry gate. This is a qualitative reconciliation hypothesis,
>   not a reproduced limit.

### 2. HIGH — finish the declared-endpoint label purge on canonical source and stdout

Apply these exact substitutions:

- [research/e4-plausible-anchors.md:80](../../research/e4-plausible-anchors.md#L80): replace “the central's FULL best
  plausible case” with “the declared central-favourable endpoint”; at line 82 replace “That is a PLAUSIBLE segment”
  with “That crossing lies within the declared interpolation segment.”
- [research/e4-plausible-anchors.md:93](../../research/e4-plausible-anchors.md#L93): replace “the central's FULL best
  plausible case” with “the central's declared full-favourable endpoint.”
- [scripts/simulation/e4-v5/scenario-configs.mjs:19](../../scripts/simulation/e4-v5/scenario-configs.mjs#L19): replace
  “Central's full best plausible case” with “Central's declared full-favourable endpoint.”
- [scripts/simulation/e4-v5/scenarios.mjs:19](../../scripts/simulation/e4-v5/scenarios.mjs#L19): replace “central's FULL
  best plausible case” with “central's declared full-favourable endpoint.”
- [scripts/simulation/e4-v5/frontier.mjs:52](../../scripts/simulation/e4-v5/frontier.mjs#L52): replace lines 52–54
  with `// ---- combined scenario-path frontier: interpolate PROBABLE -> PRO_CENTRAL (the declared central-favourable endpoint), locate m=0. t=0 and t=1 delimit the declared interpolation segment. ----`.
- [scripts/simulation/e4-v5/frontier.mjs:59](../../scripts/simulation/e4-v5/frontier.mjs#L59): replace the emitted
  heading with `safeLog('■ probable → declared central-favourable endpoint (combined path; t∈[0,1] is the declared interpolation segment)');`.
- [scripts/simulation/e4-v5/frontier.mjs:64](../../scripts/simulation/e4-v5/frontier.mjs#L64): replace the emitted
  label with ``safeLog(`    t=0 probable scenario → t=1 declared central-favourable endpoint`);``.
- [scripts/simulation/e4-v5/frontier.mjs:1](../../scripts/simulation/e4-v5/frontier.mjs#L1): replace lines 1–4 with
  `// E4 v1.14 — ceteris-paribus FRONTIER locators. Hold all knobs at the PROBABLE scenario, sweep ONE axis across its plotted range, and locate whether m = D/O − C/O crosses 0. Report the plotted range, the probable reference value, and the result at that value. Together with the declared combined path, this shows where a measured target configuration would lie relative to the reported frontiers.`

### 3. MEDIUM — correct the anchor's remaining five-scenarios taxonomy

At [research/e4-plausible-anchors.md:91](../../research/e4-plausible-anchors.md#L91), replace lines 91–92 with:

> ## Declared scenarios and diagnostic contrast (author framing 2026-07-11) — level the field both ways
> Four substantive declared scenarios plus one diagnostic contrast (values in `scenario-configs.mjs`), each a full
> config → `m ± 95% CI` (inner MC only):

The five following entries may remain, because `MYOPIA_OFF` is already explicitly marked as the diagnostic contrast.

### 4. MEDIUM — narrow the anchor's earlier ordering-regression guarantee

At [research/e4-plausible-anchors.md:29](../../research/e4-plausible-anchors.md#L29), replace the final sentence across
lines 29–30 with:

> A regression test (`npm run e4:test`) pins executable outcome ordering only; it does not bind exact configurations,
> magnitudes, labels, or prose.

The proposed replacement for anchor lines 51–56 above accurately describes the guard in that later paragraph, but it
does not repair this independent overclaim at lines 29–30; both edits are required.

## Decisive answer for this dimension

**No: the live publication-language surface is not publication-ready yet.** The paper draft itself is correctly
scoped, but the contradictory anchor and canonical stdout labels prevent a publication-ready verdict. After the exact
repairs above, this dimension clears the stated comparative-institutions robustness bar. **Multiplier relapse: NO.**
