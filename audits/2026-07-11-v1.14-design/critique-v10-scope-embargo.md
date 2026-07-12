# E4 v1.14 (v10) — adversarial scope, theorem, and embargo review

## Bottom line

**Change #5 is only PARTLY VERIFIED and therefore FAILED as a complete publication-surface fix.** The paper's main
frontier paragraph and the final frontier stdout interpretation now correctly limit the result to **five
prespecified/plotted one-factor slices**, and the long-tail mechanism is explicitly conditional on the declared
salience-gating proxy. However, the same canonical frontier stdout still calls `PRO_CENTRAL` the central's “full best
plausible case” and a “plausible scenario,” while the anchor document still concludes “no single knob decides it.”
Those phrases restore precisely the calibration/universal-single-factor implications that the narrower wording was
supposed to remove.

The theorem is correctly and prominently labelled a **stylized Gaussian fixed-threshold benchmark**, not a proof
about the full engine. Its exact nesting sentence is nevertheless algebraically incomplete: a constant gate alone
does not turn the production signal into the displayed net-`S` benchmark. This is a wording/equation-scope defect,
not a defect in the Gaussian lemma itself.

**Multiplier relapse: NO in the reviewed canonical outputs and tested token classes.** Both scenarios and frontier
route every emitted line through `safeLog`, all requested adversarial token probes were rejected, and the canonical
runs contain only the signed parity-zero estimand plus `D/O` and `C/O` level labels. The actual embargo works for the
classes claimed in the detailed note. There is still a source-level overclaim in the adapter header (“rejects any
institution-performance multiplier notation”) that conflicts with the later, honest tested-class disclaimer.

Under this dimension alone, the package remains **NEEDS CHANGES (wording/consistency only)**. The required repairs
are compact and require no target-domain data.

## Baseline and runs

Reviewed `master` at `601263a` (the code/doc changes under audit are commits `20e5fad` and `5a85d27`; current HEAD is
later only because it adds the v10 prompt). Fresh executions all exited 0:

| command | salient result |
|---|---|
| `npm run e4:controls` | all controls pass; harm control `0.4632 -> 0.1118` |
| `npm run e4:test` | all tests pass, including current embargo fixtures and scenario ordering |
| `npm run e4:theorem` | analytic identity error `0.00029 = 0.17 MC SE`; PASS |
| `npm run e4:frontier` | all five plotted slices remain positive; combined path crosses at `t ~= 0.57` |
| `npm run e4:scenarios` | canonical five-row output completes through `safeLog`; no embargo exception |

## Change #5 verification

| requested element | result | evidence |
|---|---|---|
| Frontier limited to five plotted/prespecified one-factor slices | **VERIFIED in the main paper paragraph and final stdout interpretation; FAILED globally** | `e4-paper-section-draft.md:70-75` says five named slices and “not all parameters.” `frontier.mjs:70-73` says five plotted slices and “NOT over all parameters,” reproduced verbatim at runtime. But `e4-plausible-anchors.md:84-85` still promotes this to “no single knob decides it,” which is not established for the other coordinates. |
| Combined path labelled declared/illustrative rather than calibrated | **FAILED on canonical stdout and anchors** | The final frontier sentence correctly says “declared interpolation segment” and calls `t` illustrative (`frontier.mjs:68,70-73`), but the heading and path label still print “central's full best plausible case” and “t=1 is a plausible scenario” (`frontier.mjs:52-64`; reproduced by `npm run e4:frontier`). The anchor repeats “full best plausible,” “PLAUSIBLE region,” and “where reality sits” (`e4-plausible-anchors.md:52,60,65,80-85,92`). These contradict the declared-endpoint framing and matter because some endpoint knobs lie outside registered expectable bands. |
| Theorem scoped as a stylized Gaussian benchmark | **VERIFIED** | The theorem opening and honest-scope section say it is not a reduction/proof of the full engine and identify eligibility, heterogeneous costs, residual fill, MNAR, z-scoring, credit, the salience-gated harm term, finite-reach non-normality, and the large-`K` mapping (`e4-parity-theorem.md:3-8,49-68`). The paper repeats the limitation (`e4-paper-section-draft.md:29-34`). The executable regression checks only the joint-normal fixed-threshold lemma and passes. |
| Production-signal nesting restriction stated accurately | **FAILED narrowly** | The document states that nesting requires `s(V) == const` (or `H == 0`) and `S+ -> S` (`e4-parity-theorem.md:58-64`). But production is `a+(b-w)S+ + w v_p - b_H^C s(V)H + eta`, whereas the benchmark is `a+(b-w)(S+-H)+w v_p+eta`. For nonzero `H`, equality requires the coefficient restriction `b_H^C s(V) == b-w` (a constant gate **and** coefficient match), or an explicit structural replacement that removes the separate harm term. Merely saying the gate is constant while replacing `S+` by `S` leaves `-b_H^C sH`. `H == 0` is a valid special case. The benchmark conclusion remains sound; the claimed nesting condition needs one exact algebraic sentence. |
| Long-tail mechanism conditioned on declared salience proxy | **VERIFIED** | The paper says “Under the declared salience-gating proxy ... the aggregate advantage comes from the long tail” and identifies it as load-bearing and least empirically pinned (`e4-paper-section-draft.md:16-21`); the honest limits repeat that status (`:77-83`). This is appropriately conditional for the stated robustness/measurement-plan bar. |

## Embargo hardening and routing

### What is genuinely fixed

- `scenarios.mjs` imports `safeLog` and uses it for every output line (`:6,14,18,24-27`); there is no direct
  `console.log` in that runner.
- `frontier.mjs` imports `safeLog` and uses it for every output line (`:6,23,41-50,59,64-73`); there is no direct
  `console.log` in that runner.
- `safeLog` calls `assertNoEmbargoedTokens` before emission (`adapter.mjs:37-38`).
- Normalization strips ZWSP/ZWNJ/ZWJ/U+2060/BOM/soft hyphen, decodes the tested multiplication HTML entities, maps
  multiplication/cross/Cyrillic/fullwidth-x confusables, maps typographic hyphens and division/fraction/fullwidth
  slashes, and applies case-insensitive numeric/number-word `N-fold`/`N-times`, bare word multiplier, and `D/C`/`C/D`
  checks (`adapter.mjs:8-33`).

In addition to the repository tests, direct probes against the exported assertion rejected every requested class:

```text
REJECT U+2060-split 2.2x
REJECT &times; / &#215; / &#xD7;
REJECT non-breaking-hyphen 2.2-fold
REJECT division-slash d/c and fraction-slash D/C
REJECT Cyrillic x, multiplication sign, cross glyphs U+2715/U+2716/U+2A2F, fullwidth x
REJECT two-fold, fourfold, two times, twice, double
REJECT lowercase d/c and c/d
```

Thus the v8 concrete bypasses are closed. I found **no multiplier relapse** in scenarios/frontier or in the tested
embargo classes.

### Residual honesty mismatch

The narrow disclaimer at `adapter.mjs:22-24` is good: it expressly limits the guarantee to tested token classes and
disclaims proof against every obfuscation. But `adapter.mjs:1-3` still calls this the “SOLE render adapter,” says every
official artifact must pass through it, and claims it “rejects any institution-performance multiplier notation.”
That universal claim is false by the file's own later disclaimer (and controls/test/theorem still print directly).
This is not evidence of a current numerical multiplier relapse; it is a remaining release-contract overclaim.

## Remaining must-fix overclaims, ranked

1. **HIGH (theorem exactness):** replace the current production-nesting condition with the actual algebraic condition
   `b_H^C s(V) == b-w` for nonzero harm (plus the theorem's other normality/selection restrictions), or say the
   benchmark is a deliberately modified net-`S`, no-separate-harm-term model and does not literally nest the
   production signal except at `H == 0`.
2. **MEDIUM (frontier/endpoint scope):** replace all remaining “full best plausible,” “plausible scenario/region,”
   “where reality sits,” and unqualified “no single knob decides it” phrases in canonical frontier stdout and the
   anchor document with “declared central-favourable endpoint/interpolation segment” and “none of the five plotted
   slices.”
3. **MEDIUM (embargo claim only):** change the adapter header's “any ... notation”/“every official artifact” guarantee
   to the tested-class/final-output boundary actually implemented, matching lines 22-24.

After these wording-level corrections, this dimension would be publication-ready under the stated limited
comparative-institutions robustness bar.
