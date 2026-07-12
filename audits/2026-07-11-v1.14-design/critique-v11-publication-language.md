# E4 v1.14 critique v11 — publication-language and taxonomy audit

## Dimension verdict

**NEEDS CHANGES. This publication-language dimension is not publication-ready in the current live tree.** The causal
attribution and declared-endpoint language are now corrected across the anchor, code, canonical frontier output, and
paper draft. Two traceability/taxonomy overclaims remain: the anchor calls all five points scenarios, and both the
anchor and regression-test comment imply that an outcome-ordering test binds documentation. These are blocking false
claims, not stylistic preferences and not a demand for calibrated impact.

This audit was refreshed against `master` at `9ec82923aaff68921eb11f0bf9dccf9ee70fe43f` after the source changed during
the review. I made **no source edits**; I changed only this audit file.

## Verification of the assigned v10 fixes

| v10 fix | result | live evidence |
|---|---|---|
| 1 — sequential attribution and isolation labels | **VERIFIED** | The registry header gives the sequential 16.2/40.5 (~40%) harm-gate step and ~60% added-competence step, with `MYOPIA_OFF` as the diagnostic and `NO_MYOPIA` as the bundle ([scenario-configs.mjs:5](../../scripts/simulation/e4-v5/scenario-configs.mjs#L5), [scenario-configs.mjs:13](../../scripts/simulation/e4-v5/scenario-configs.mjs#L13)). The anchor correction, table label, and reconciliation paragraph now say the same thing ([anchors:51](../../research/e4-plausible-anchors.md#L51), [anchors:59](../../research/e4-plausible-anchors.md#L59), [anchors:68](../../research/e4-plausible-anchors.md#L68)). The paper gives the same path-dependent decomposition ([paper draft:61](../../research/e4-paper-section-draft.md#L61)). |
| 3 — four substantive scenarios plus one diagnostic contrast and ordering scope | **FAILED** | The registry, runner, and paper use the requested taxonomy and identify `NO_MYOPIA` as the continuity anchor ([scenario-configs.mjs:5](../../scripts/simulation/e4-v5/scenario-configs.mjs#L5), [scenarios.mjs:1](../../scripts/simulation/e4-v5/scenarios.mjs#L1), [paper draft:37](../../research/e4-paper-section-draft.md#L37)). The anchor nevertheless says “Five named scenarios” ([anchors:91](../../research/e4-plausible-anchors.md#L91)). It also says the ordering regression means “code and this narrative cannot silently diverge” ([anchors:29](../../research/e4-plausible-anchors.md#L29)), and the test comment similarly says configs cannot drift from the doc ([test.mjs:75](../../scripts/simulation/e4-v5/test.mjs#L75)). The test at lines 80–82 binds executable outcome ordering only. |
| 4 — declared labels and calibrated-sounding language | **VERIFIED** | `evidence-anchored` and the retired “best plausible”/“plausible scenario”/“does reality sit” formulations are absent from the non-audit publication/code surface. The anchor uses declared full-favourable endpoint, declared interpolation segment, conditional measured-target, and five-slice language ([anchors:51](../../research/e4-plausible-anchors.md#L51), [anchors:80](../../research/e4-plausible-anchors.md#L80)); the registry and runner use declared-endpoint labels ([scenario-configs.mjs:19](../../scripts/simulation/e4-v5/scenario-configs.mjs#L19), [scenarios.mjs:19](../../scripts/simulation/e4-v5/scenarios.mjs#L19)); and canonical frontier comments/stdout use the conditional target and declared endpoint/segment ([frontier.mjs:1](../../scripts/simulation/e4-v5/frontier.mjs#L1), [frontier.mjs:53](../../scripts/simulation/e4-v5/frontier.mjs#L53), [frontier.mjs:60](../../scripts/simulation/e4-v5/frontier.mjs#L60)). |
| 5 — tested-classes embargo disclaimer | **VERIFIED** | The adapter header limits the claim to tested notation classes, disclaims proof against every obfuscation, and disclaims routing every repository artifact ([adapter.mjs:1](../../scripts/simulation/e4-v5/adapter.mjs#L1)). This matches its detailed note ([adapter.mjs:23](../../scripts/simulation/e4-v5/adapter.mjs#L23)). No publication-language multiplier relapse was found. |

## Remaining blocking wording fixes, ranked

### 1. HIGH — make the scenario taxonomy truthful

At [research/e4-plausible-anchors.md:91](../../research/e4-plausible-anchors.md#L91), replace lines 91–92 with:

> ## Declared scenarios and diagnostic contrast (author framing 2026-07-11) — level the field both ways
> Four substantive declared scenarios plus one diagnostic contrast (values in `scenario-configs.mjs`), each a full
> config → `m ± 95% CI` (inner MC only):

The five following entries may remain because `MYOPIA_OFF` is already explicitly labelled as the diagnostic contrast.

### 2. MEDIUM — narrow both ordering-regression guarantees

At [research/e4-plausible-anchors.md:29](../../research/e4-plausible-anchors.md#L29), replace the final sentence across
lines 29–30 with:

> A regression test (`npm run e4:test`) pins executable outcome ordering only; it does not bind exact configurations,
> magnitudes, labels, or prose.

At [scripts/simulation/e4-v5/test.mjs:75](../../scripts/simulation/e4-v5/test.mjs#L75), replace the comment with:

> `// ---- Scenario integrity: pin executable outcome ORDERING only; this does not bind configs, magnitudes, labels, or prose. ----`

## Decisive answer for this dimension

**No: the current live publication-language surface is not publication-ready yet.** Only the taxonomy and
ordering-traceability wording above remains blocking; the attribution and declared-label fixes now verify. After those
two exact repairs, this dimension clears the stated comparative-institutions robustness bar. **Multiplier relapse: NO.**
