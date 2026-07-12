# Adversarial critique of E4 v1.14 (v8) — the CODE + paper draft — for Codex

Repo: C:/devel/claude-projects/distributed-governance-research (branch master, commit 6ae8e39 or later). Your v7
audit (`CRITIQUE_v7_SUMMARY.md`) was frozen to an OLDER commit and found real issues since fixed. RUN the code:
`npm run e4:controls`, `e4:test`, `e4:theorem`, `e4:scenarios`, `e4:frontier`, `e4:evidence`.

Read `scripts/simulation/e4-v5/*` (esp. `scenario-configs.mjs`, `scenarios.mjs`, `frontier.mjs`, `evidence.mjs`,
`test.mjs`), `research/e4-plausible-anchors.md`, `research/e4-paper-section-draft.md`, `research/e4-parity-theorem.md`,
and your prior `CRITIQUE_v7_SUMMARY.md` + `critique-v7-*.md`. Do NOT re-derive settled points.

## THE BAR (judge against this, not a calibrated impact estimate)
The paper does NOT claim a calibrated, preregistration-ready impact estimate. It claims a **comparative-institutions
robustness result**: a mechanism (salience-gated harm myopia), a benchmark theorem (no-myopia Gaussian limit), FOUR
declared scenarios that level the field both ways, a located frontier, and a measurement plan. Under this bar,
"most magnitudes are declared reference/stress points, not target-domain calibrated bands" is ACCEPTABLE **iff
honestly labeled** and not over-claimed. Judge publication-readiness of E4 as such a paper. Flag remaining OVERCLAIMS
and DISHONEST labels; do not require target-domain data the paper explicitly says it lacks.

## What changed since v7 (verify each)
1. **Decisive fork FIXED:** `scenario-configs.mjs` is now the single source; four DISTINCT scenarios — `PRO_CENTRAL`
   = central's FULL best plausible case (central WINS, m=−29.5%, delivers 98% of the benchmark); `NO_MYOPIA` =
   probable but central sees harm (isolates the mechanism, +6.1%, the continuity anchor); `PROBABLE` (+46.6%);
   `PRO_DIST` (+199.8%). The earlier "+6.1% = central best case" conflation is gone. A regression test pins the
   sign ordering so doc and code cannot fork again. Verify code==doc and the winners.
2. **Frontier CORRECTED:** combined path PROBABLE→PRO_CENTRAL crosses parity at **t≈0.57** (WITHIN the plausible
   range); the wrong "t≈1.13 / beyond realistic" claim is retired; `t` labeled an illustrative mix, not a scale.
3. **H3 universal legacy guard:** all 19 top-level sim engines now require `E4_ALLOW_LEGACY=1`; a release test
   asserts it. **M2 embargo:** adapter normalizes confusables (Cyrillic х, × ✕ ✖ ⨯) and rejects "N-fold"/"N times".
4. **Global evidence** = uniform MC over the anchored scenario envelope (not the old 7-key corner sweep); honest
   caveat that independent sampling never draws the coordinated central-favourable corner.
5. **Anchors softened:** "evidence-anchored" → "source-motivated declared reference"; CIs = inner MC only; transport
   gap named as NOT-yet-propagated.

## Task (parallel subagents; RUN the code; no rubber-stamp)
- Verify the fork fix, the frontier correction, H3, M2, and the softened labels actually hold in the current tree.
- Attack what remains: is anything STILL over-claimed or dishonestly labeled? Is the four-scenario framing genuinely
  balanced? Is the theorem correctly scoped as the no-myopia limit? Any remaining multiplier-relapse path or embargo
  bypass? Is the paper draft honest and publication-ready as a robustness/measurement-plan paper (EN; an ES mirror
  will follow)?
- Give an explicit verdict: **is E4 (code + paper draft) publication-ready as a comparative-institutions robustness
  result?** If not, the SHORTEST remaining list to get there (excluding target-domain data the paper disclaims).

## Output
Each subagent → `audits/2026-07-11-v1.14-design/critique-v8-<dimension>.md`. Then `CRITIQUE_v8_SUMMARY.md`: verdict
(publication-ready / needs-changes / not-viable as a robustness paper), remaining overclaims/dishonest-labels ranked,
explicit yes/no on multiplier-relapse and on publication-ready, and the shortest path. Say plainly if it is ready.
