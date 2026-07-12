# E4 v1.14 (v11) — code, scenario, and controls audit

## Verdict

**NEEDS CHANGES in this dimension.** The numerical controls, executable scenario attribution/taxonomy, narrowed
embargo contract, and tested multiplier embargo are viable. However, two v10 wording fixes do not hold across the
live code publication surface: canonical frontier stdout still promotes the declared endpoint as “best plausible”
and a “plausible scenario,” and the regression comment still overstates an ordering assertion as preventing
code/document drift. These are compact wording fixes; no calibrated-impact bar or target-domain data are required.

Reviewed `master` at `ecd8018d150005cbd11d6374fa749dd5f5f1b304` (the requested fixes are in parent commit
`0f55d58`). I read all files under `scripts/simulation/e4-v5/` and the relevant v10 summary/dimension audits.
The pre-existing untracked `codex-v11-run.log` was not modified.

## Focused reproduction

| command | result |
|---|---|
| `npm run e4:test` | exit 0; all fixtures pass; ordering is `PRO_CENTRAL < NO_MYOPIA < MYOPIA_OFF < PROBABLE < PRO_DIST`; all registered embargo probes pass |
| `npm run e4:scenarios` | exit 0; `−29.5%, +46.6%, +30.4%, +6.1%, +199.8%`; stdout gives the sequential, path-dependent 40/60 split |
| `npm run e4:frontier` | exit 0; five slices do not cross and the declared interpolation path crosses near `t=0.57`, but its heading still prints the stale plausible/best-plausible labels |

## Assigned v10-fix verification

| fix | status | live evidence |
|---|---|---|
| **1 — attribution** | **VERIFIED in code** | The registry distinguishes four substantive scenarios from `MYOPIA_OFF`, labels `NO_MYOPIA` the continuity bundle, and states the sequential 16.2/40.5 (~40%) then 24.3/40.5 (~60%) decomposition (`scenario-configs.mjs:5-15`). The configs implement it: `MYOPIA_OFF` changes only `s_exp,b_H_C`, while `NO_MYOPIA` adds the competence coordinates (`scenario-configs.mjs:23-27`). Runtime repeats the qualified, path-dependent split (`scenarios.mjs:24-27`). No affirmative “most” or bundled-myopia-isolation claim remains in executable scenario prose. |
| **3 — taxonomy / ordering scope** | **FAILED narrowly** | Taxonomy and continuity identity are correct in the registry and runner headers (`scenario-configs.mjs:5-15`; `scenarios.mjs:1-4`), and the assertion itself pins ordering (`test.mjs:77-82`). But its introduction still says it pins signs “so scenario-configs.mjs can't silently drift from the doc” (`test.mjs:75`), which exceeds what the test proves and is the exact traceability overclaim v10 required removing. |
| **5 — narrowed embargo claim** | **VERIFIED** | The adapter header now limits its guarantee to tested classes, disclaims every conceivable obfuscation, and disclaims routing every repository artifact (`adapter.mjs:1-4`), matching its detailed note (`adapter.mjs:23-25`). Scenario/frontier output routes through `safeLog` (`scenarios.mjs:6,14,18-27`; `frontier.mjs:6,23,41-73`). |

## Multiplier-relapse decision

**NO.** Canonical scenario/frontier output retains the signed parity-zero `m` estimand and permissible `D/O` and
`C/O` oracle-level labels; it emits no institution-performance multiplier. The acceptance suite rejects the tested
ASCII, Unicode/confusable, HTML-entity, zero-width, numeric/word `N-fold`/`N-times`, bare word-multiplier, and
case-insensitive `D/C`/`C/D` classes (`test.mjs:85-103`; `adapter.mjs:12-35`). This is a tested-class conclusion,
not a universal proof against every obfuscation.

## Remaining blockers, ranked

1. **HIGH — stale calibrated-sounding endpoint labels remain in canonical frontier output.**
   `frontier.mjs:59` emits “central's full best plausible case” and “t=1 is a plausible scenario”; `frontier.mjs:64`
   repeats “full best plausible case.” The header asks whether “reality sit[s]” on one side (`frontier.mjs:1-4`),
   and the same stale premise survives in comments at `frontier.mjs:52-54`, `scenario-configs.mjs:19`, and
   `scenarios.mjs:19`. **Exact wording fix:** use “declared central full-favourable endpoint” for `PRO_CENTRAL`,
   “declared interpolation segment” for the path, and “where a measured target configuration would lie” instead of
   the reality/plausibility language. For example, make line 59: `■ probable declared reference → central's declared
   full-favourable endpoint (combined path; t∈[0,1] is the declared interpolation segment)` and line 64:
   `t=0 probable declared reference → t=1 central's declared full-favourable endpoint`; apply the same replacement
   to the cited comments/header.

2. **MEDIUM — regression scope remains overstated.** `test.mjs:75` says the sign regression prevents silent drift
   from the document, while `test.mjs:80-82` checks outcome ordering only. **Exact wording fix:** replace line 75
   with `// ---- Scenario integrity: pin executable outcome ORDERING only; this does not bind configs, magnitudes,
   labels, or prose. ----`.

After those wording-only repairs, I find no code/scenario/controls blocker under the stated comparative-institutions
robustness bar.
