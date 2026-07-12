# E4 v1.14 (v10) — adversarial evidence and label audit

## Dimension verdict

**NEEDS ONE WORDING CHANGE.** Change #2 is **VERIFIED**: the canonical evidence run now reports a finite
product-box sample, nonzero boundary uncertainty, the deliberately targeted opposite-sign region, and a
region-dependent `indeterminate` global sign. Change #4 is **FAILED narrowly**: the exact phrase
`evidence-anchored` survives once in the live anchor document. I found no other occurrence on the tracked,
non-audit publication/code surface.

This is not a substantive objection and does not require target-domain data. It is, however, a literal failure of
the claimed repository-wide purge and the last must-fix within this review dimension.

## Baseline and execution

Reviewed `master` at `601263a0e5be484bf6dcbbe74bcbd0a4a4c53fd9` (later than the requested `5a85d27`; the
intervening commit only adds the v10 prompt). I read the current evidence implementation, scenario registry, paper
draft, anchor document, theorem scope, and the v8 summary/dimension reports. I did not edit production files.

| command/check | result |
|---|---|
| `npm run e4:evidence` | exit 0; 400/400 resolved, Core v0 399, central 0, parity 1; targeted central wins 40/40; `sign:indeterminate` |
| `npm run e4:test` | exit 0; all tests passed |
| case-insensitive tracked non-audit search for `evidence[- ]anchored` | one hit: `research/e4-plausible-anchors.md:111` |

## Requested-change verification

| v10 change | result | evidence |
|---|---|---|
| #2 — honest global evidence | **VERIFIED** | The executable prints `Core v0 wins 399/400 draws · central 0 · parity 1`, not “100% of the envelope” ([evidence.mjs:120](../../scripts/simulation/e4-v5/evidence.mjs#L120), [evidence.mjs:122](../../scripts/simulation/e4-v5/evidence.mjs#L122)). For zero observed central wins it reports the rule-of-three upper bound `3/400 = 0.75%`, rounded to `≈1%`, explicitly “NOT zero” ([evidence.mjs:116](../../scripts/simulation/e4-v5/evidence.mjs#L116), [evidence.mjs:123](../../scripts/simulation/e4-v5/evidence.mjs#L123)). It separately reports central wins `40/40` in the targeted region and says the global winner is region-dependent ([evidence.mjs:124](../../scripts/simulation/e4-v5/evidence.mjs#L124), [evidence.mjs:125](../../scripts/simulation/e4-v5/evidence.mjs#L125)). The emitted status is `sign:indeterminate` ([evidence.mjs:126](../../scripts/simulation/e4-v5/evidence.mjs#L126)). |
| #4 — purge `evidence-anchored` and use declared/source-motivated labels | **FAILED narrowly** | The canonical evidence headline uses `source-motivated declared reference` ([evidence.mjs:119](../../scripts/simulation/e4-v5/evidence.mjs#L119)); the paper explicitly frames all rows as declared scenarios and calls the probable row source-motivated ([paper draft:12](../../research/e4-paper-section-draft.md#L12), [paper draft:36](../../research/e4-paper-section-draft.md#L36), [paper draft:51](../../research/e4-paper-section-draft.md#L51)); and the scenario overview uses `source-motivated declared reference` ([anchors:99](../../research/e4-plausible-anchors.md#L99)). But the participation section still calls its probable range “the evidence-anchored band” ([anchors:111](../../research/e4-plausible-anchors.md#L111)). The same section says author confirmation is pending ([anchors:112](../../research/e4-plausible-anchors.md#L112)), making a provisional/source-motivated label more consistent. |

## Adversarial assessment of change #2

The runtime claim is supported by the code rather than merely hard-coded prose:

- The box sweep independently samples every scenario-varying coordinate over the coordinatewise minima/maxima of
  `PRO_CENTRAL`, `PROBABLE`, and `PRO_DIST` ([evidence.mjs:32](../../scripts/simulation/e4-v5/evidence.mjs#L32),
  [evidence.mjs:33](../../scripts/simulation/e4-v5/evidence.mjs#L33),
  [evidence.mjs:57](../../scripts/simulation/e4-v5/evidence.mjs#L57)). The report accurately calls this a finite
  product-box sample with independent-uniform knobs; it no longer promotes the sample frequency into exhaustive
  envelope coverage.
- The targeted probe draws each varied coordinate within the first 20% of the segment from `PRO_CENTRAL` toward
  `PROBABLE` ([evidence.mjs:12](../../scripts/simulation/e4-v5/evidence.mjs#L12),
  [evidence.mjs:20](../../scripts/simulation/e4-v5/evidence.mjs#L20),
  [evidence.mjs:21](../../scripts/simulation/e4-v5/evidence.mjs#L21)). Its `40/40` result is therefore a targeted
  stress probe of a coordinated central-favourable neighborhood, not a claim about its product-box probability.
- The ordinary classifier would label a zero-central box sample positive
  ([evidence.mjs:74](../../scripts/simulation/e4-v5/evidence.mjs#L74)), but `buildEvidence` intentionally overrides
  that finite-sample classification when both the targeted central region and box-sampled distributed region exist
  ([evidence.mjs:97](../../scripts/simulation/e4-v5/evidence.mjs#L97),
  [evidence.mjs:100](../../scripts/simulation/e4-v5/evidence.mjs#L100)). The validated and emitted object is thus
  `indeterminate`, matching the paper's limited comparative-institutions claim.

I found no remaining publication-blocking overclaim in the global-evidence output under the stated bar. The probe
does not estimate the central region's volume, but the output does not claim that it does. The rule of three is an
appropriate approximate one-sided 95% boundary statement for 0/400 and is honestly rounded to about 1%.

## Remaining must-fix in this dimension

1. **Replace the single residual phrase** “the evidence-anchored band” at
   [research/e4-plausible-anchors.md:111](../../research/e4-plausible-anchors.md#L111). Given the explicit pending
   confirmation and mapping caveat, “the empirically motivated provisional band” would be precise. Then rerun the
   case-insensitive repository search.

No other evidence/label must-fix was found. Once that single phrase is corrected, changes #2 and #4 pass this
dimension's publication-readiness bar.

