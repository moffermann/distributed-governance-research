# NOTE for v10: your v9 verdict was NEEDS CHANGES (wording/consistency only, no substance). The five v9 must-fixes are now done at commit 5a85d27:
# (1) attribution corrected to the sequential 40/60 split (harm-myopia alone 16.2/40.5 pts ~40%, added competence ~60%; 'most' removed);
# (2) global evidence already verified; (3) anchor doc no longer duplicates forked values (direction only; single source = scenario-configs.mjs; regression pins ORDERING not exact config); (4) 'evidence-anchored' purged; declared-endpoint labels used; (5) frontier = 'five plotted one-factor slices' in stdout+anchors, theorem doc states the no-harm-gate/net-S nesting restriction; embargo hardened (U+2060/HTML-entity/word N-fold) AND narrowed to tested classes; taxonomy = 4 scenarios + 1 diagnostic contrast.
# Verify these hold and give the decisive publication-ready verdict under the robustness-paper bar.

# Adversarial critique of E4 v1.14 (v10) — is it publication-ready now? — for Codex

Repo: C:/devel/claude-projects/distributed-governance-research (branch master, commit 5a85d27 or later). Your v8
audit (`CRITIQUE_v8_SUMMARY.md`) said NEEDS CHANGES but "viable and close", with FIVE compact changes to reach
publication-ready under the **comparative-institutions robustness result** bar (NOT a calibrated impact estimate;
declared/assumed magnitudes are fine IF honestly labeled). All five are now done. RUN: `npm run e4:controls`,
`e4:test`, `e4:theorem`, `e4:scenarios`, `e4:frontier`, `e4:evidence`.

Read `scripts/simulation/e4-v5/*`, `research/e4-plausible-anchors.md`, `research/e4-paper-section-draft.md`,
`research/e4-parity-theorem.md`, and your prior `CRITIQUE_v8_SUMMARY.md` + `critique-v8-*.md`.

## The five v8 changes to verify
1. **Myopia attribution (v8 #1):** `NO_MYOPIA` is relabeled a harm-aware+competent BUNDLE (not isolation); a new
   `MYOPIA_OFF` = PROBABLE with ONLY `s_exp,b_H_C` changed is the genuine myopia-only contrast (+30.4%). Paper +
   scenarios state: harm-myopia alone moves +46.6%→+30.4% (most, not all); the further →+6.1% is added competence.
2. **Global evidence honesty (v8 #2):** `e4:evidence` no longer says "100% of the plausible envelope / sign:pos /
   ±0% SE". It reports 399/400 box draws with a one-sided rule-of-three upper bound (~1%, NOT zero), PLUS a targeted
   probe 20% inward of PRO_CENTRAL showing the central wins 40/40 there; `sign_status` = INDETERMINATE (region-dep.).
3. **Single source (v8 #3):** the anchor doc no longer duplicates scenario numeric values (gives anchor type +
   direction only; `scenario-configs.mjs` is authoritative); the regression test pins the full ordering
   `PRO_CENTRAL < NO_MYOPIA < MYOPIA_OFF < PROBABLE < PRO_DIST`. Stale "three scenarios" text fixed.
4. **Labels (v8 #4):** "evidence-anchored" purged → "source-motivated declared reference" in draft, anchors, evidence.
5. **Scope (v8 #5):** frontier = "five prespecified one-factor slices" (not "any ONE assumption"); theorem = stylized
   Gaussian benchmark nesting the production signal only under extra restrictions; long-tail mechanism conditioned on
   the declared salience proxy.
Plus embargo hardening: strips zero-width, normalizes hyphen/division-slash/x-confusables, rejects word multipliers
(twice/double/N-fold) and lowercase d/c; scenarios/frontier now route through the embargo (safeLog).

## IMPORTANT — parallel subagents; RUN the code; no rubber-stamp.

## Task
Verify each of the five changes actually holds. Then give the decisive verdict against the stated bar:
**Is E4 (code + paper draft) NOW publication-ready as a comparative-institutions robustness result (mechanism +
stylized theorem + declared scenarios + measurement plan)?** If YES, say so plainly. If not, list ONLY the remaining
must-fix overclaims/dishonest-labels (excluding target-domain data the paper disclaims) — be strict but fair to the
stated, limited claim.

## Output
Each subagent → `audits/2026-07-11-v1.14-design/critique-v10-<dimension>.md`. Then `CRITIQUE_v10_SUMMARY.md`: explicit
verdict (publication-ready / needs-changes), a per-change verified/failed table, any remaining must-fixes ranked,
explicit yes/no on multiplier-relapse and on publication-ready. Say plainly if it is ready.
