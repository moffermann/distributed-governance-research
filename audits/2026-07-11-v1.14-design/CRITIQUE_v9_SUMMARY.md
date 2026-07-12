# Adversarial critique summary — E4 v1.14 (v9), code + paper draft

## Verdict

**NEEDS CHANGES. E4 is not publication-ready yet as a comparative-institutions robustness result.** The numerical
and statistical repairs are real, and no target-domain calibration is required for the stated limited claim. The
remaining blockers are compact internal-honesty defects: a false arithmetic attribution, stale contradictory
scenario/source text, two surviving scope overclaims, unsupported calibrated-sounding endpoint labels, and an
overbroad mechanical-embargo guarantee.

Detailed independent reviews:

- [Code and release review](critique-v9-code-release.md)
- [Scenarios, evidence, and frontier review](critique-v9-scenarios-evidence.md)
- [Theorem and paper review](critique-v9-theorem-paper.md)

## Baseline and required runs

Audited `master` at `a297ed3246c3c1b9bfc6743c3c2e9fcb7ed1ad95`, later than the requested minimum `6b86011`.
The pre-existing untracked `codex-v9-run.log` was preserved.

| command | exit | reproduced result |
|---|---:|---|
| `npm run e4:controls` | 0 | all controls pass; harm control `0.4632 -> 0.1118` |
| `npm run e4:test` | 0 | all tests pass; full five-point ordering and new embargo fixtures pass |
| `npm run e4:theorem` | 0 | Gaussian identity error `0.00029 = 0.17` MC SE |
| `npm run e4:scenarios` | 0 | `-29.5%, +46.6%, +30.4%, +6.1%, +199.8%` in runner order |
| `npm run e4:frontier` | 0 | five displayed slices do not cross; combined path crosses at `t about 0.57` |
| `npm run e4:evidence` | 0 | 399 distributed wins, 0 central wins, 1 parity in 400; rule-of-three about 1%; targeted central 40/40; `sign:indeterminate` |

Direct config inspection confirms that `MYOPIA_OFF` differs from `PROBABLE` only on `s_exp,b_H_C`, whereas
`NO_MYOPIA` differs on `s_exp,b_H_C,w,a,b,lambda,zeta,sigma_C`. The test pins
`PRO_CENTRAL < NO_MYOPIA < MYOPIA_OFF < PROBABLE < PRO_DIST` and reproduced
`-0.39 < 0.02 < 0.28 < 0.44 < 1.95` at its test design.

## Five-change verification

| v8 change | v9 result | decisive evidence |
|---|---|---|
| 1. Myopia attribution | **FAILED overall; implementation verified** | The genuine two-coordinate `MYOPIA_OFF` contrast works and `NO_MYOPIA` is structurally a bundle. But `46.6 -> 30.4` is a 16.2-point reduction, only 40% of the total 40.5-point decline to `6.1`; added competence contributes 24.3 points, or 60%. Therefore “myopia accounts for most” is false. The anchors also still call `NO_MYOPIA +6.1%` “myopia isolated.” |
| 2. Global evidence honesty | **VERIFIED** | Canonical output says finite `399/400`, gives a nonzero rule-of-three upper bound (`3/400 = 0.75%`, printed about 1%), reports targeted central wins `40/40`, and assigns `sign:indeterminate (region-dependent)`. The v8 `100%`, `sign:pos`, and zero-uncertainty claims are gone. |
| 3. Single source and stale scenario text | **FAILED overall; ordering verified** | The main knob table no longer duplicates the full configs and the full ordering test passes. But lower anchor prose still gives named endpoint values that already fork from code (`PRO_DIST p .45` vs `.40`; `a_V .20` vs `.25`). Live text variously says three, four, and five scenarios, and the sign-only test cannot prevent Markdown/config divergence. |
| 4. Label replacement | **VERIFIED for the requested phrase** | `evidence-anchored` is absent from the current paper, anchors, and E4 v5 scripts; the canonical reference is `source-motivated declared reference`. Separate `best plausible`/`where reality sits` overclaims remain below. |
| 5. Scope | **FAILED overall; main paper mechanism wording improved** | The paper correctly says five prespecified slices, conditions the long-tail account on the declared salience proxy, and calls the theorem stylized. But the canonical frontier and anchors still say “robust to any ONE assumption.” The theorem document still says the production engine reduces to the displayed benchmark without stating the extra constant-gate/coefficient restriction required for that nesting. |

## Remaining must-fixes, ranked

### 1. HIGH — correct the false myopia attribution everywhere

Replace “most” with the supported statement: the myopia-only step reduces the modeled gap by 16.2 points, about
40% of this sequential decline; the added-competence step reduces it by 24.3 points, about 60%. Because the model is
nonlinear, avoid implying a path-independent decomposition. Delete or rewrite the older anchor block that still
calls `NO_MYOPIA +6.1%` an isolation result and attributes the `+46%` result to harm myopia alone.

### 2. HIGH — make the scenario source and taxonomy claims true

Remove or generate the remaining named input values in the anchor details; they already disagree with the
authoritative config. Reconcile “three,” “four,” and “five” across the paper header/body, anchors, config comments,
and scenario runner. If one point is a diagnostic contrast rather than a substantive declared scenario, define
that taxonomy explicitly. Do not claim that an outcome-order test locks prose to code.

### 3. HIGH — remove both surviving scope overclaims

The frontier result is limited to five prespecified one-factor slices over their plotted ranges, not “any ONE
assumption”; make the anchor and canonical stdout match the paper. The Gaussian identity is correct, but the theorem
document must either state the extra constant-gate/coefficient restriction that maps the harm-gated production
signal to its displayed `X_C`, or remove the claim that the production engine reduces to that benchmark.

### 4. MEDIUM — relabel declared endpoints and paths as declared

“Full best plausible case,” “within the plausible range,” and “where reality sits” imply a jointly calibrated
region that the paper disclaims. Most anchor magnitudes remain TBD/pending, and `PRO_CENTRAL` places
`s_exp,b_H_C,w,beta` outside the contract's registered expectable bands. Use “declared central-favourable endpoint,”
“declared interpolation segment,” and conditional language about where a measured target setting may lie.

### 5. MEDIUM — narrow or complete the embargo's universal guarantee

The canonical outputs are clean and all requested new probes pass. However, the adapter's claim to reject **any**
institution-performance multiplier notation is still false: common variants such as `two times`, `fourfold`, a
U+2060-split numeric suffix, and HTML-entity forms pass direct probes. Either cover the retained universal claim at
the final rendered boundary or narrow it to the tested token classes.

## Direct answers

- **Canonical multiplier relapse? NO.** Required outputs use signed `m` with parity at zero and arm/oracle levels.
- **Multiplier-relapse/bypass path remaining? YES.** The universal mechanical guarantee remains bypassable.
- **Are the five changes all verified? NO.** Changes 2 and 4 pass; changes 1, 3, and 5 remain partial/failed.
- **Publication-ready now? NO.** Verdict: **NEEDS CHANGES**.

The mechanism computation, Gaussian benchmark, declared scenarios, targeted evidence probe, and measurement-plan
framing remain viable. The shortest path to publication readiness is to make the wording and release guarantees
match those now-correct limited objects; no target-domain impact data is required for that repair.
