Reading additional input from stdin...
OpenAI Codex v0.144.1
--------
workdir: C:\devel\claude-projects\distributed-governance-research
model: gpt-5.6-sol
provider: openai
approval: never
sandbox: danger-full-access
reasoning effort: xhigh
reasoning summaries: none
session id: 019f5d68-a809-7de1-b91c-43c9db3e43d0
--------
user
You are a HOSTILE ADVERSARIAL REFEREE POOL doing a SECOND round on three linked public-spending simulations (E5, E9,
E10) after the authors applied fixes from your round 1. Two jobs: (A) VERIFY each round-1 fix was actually applied and is
correct (not cosmetic), and (B) attack the CHANGED code for NEW defects. Be ruthless and specific; for each finding give
file:line, severity [blocker/major/minor], a concrete change, and whether it threatens a RESULT or only presentation. Do
NOT manufacture taste-based objections; if a fix is sound, say "fix verified." An honest claim you merely dislike is not
a valid attack.

USE SUBAGENTS: fan out (mechanism-design skeptic / calibration hawk / over-claim prosecutor / embargo auditor /
double-counting adversary / robustness referee), then synthesize a single ranked list.

READ (repo root C:\devel\claude-projects\distributed-governance-research):
- scripts/simulation/e4-v5/e5-delivery.mjs (+ test), e9-fullstack.mjs (+ test), e10-costs.mjs (+ test)
- scripts/simulation/e4-v5/engine.mjs, contract.mjs, adapter.mjs
- audits/2026-07-12-e5-remodel/ADVERSARIAL-R1-ADJUDICATION.md (the auditor's verdicts on your round-1 attacks)
- audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md, E9-FULLSTACK-DESIGN.md, E10-COSTS-DESIGN.md
Run `npm run e5:delivery`, `e9:fullstack`, `e10:costs` and the `:test` scripts individually. Do NOT use rg brace-globs.

ROUND-1 FIXES TO VERIFY (attack if any is wrong/incomplete/cosmetic):
- [E10] net-budget estimand: admin cost now scales the BUDGET (phi·(1−κ)), not a value haircut; sumO exposed for a
  common full-budget oracle; κ_C=0.08 (pure admin overhead, de-overlapped from E5 leakage), κ_D=0.05 (platform + Core
  v0's own control machinery, symmetric); result ~-0.8pp (roughly neutral). Verify the net-budget math and the
  de-overlap/symmetry claims; check the negative-value domain (PRO_DIST).
- [E5] residual verified diversion: a grand-corruption temptation TAIL (tempt_tail=0.10, t in [1,2]) so verified is no
  longer a mechanical zero (~2.1% incidence). Verify it is genuinely nonzero and not re-saturated; check opaque
  calibration didn't drift; check the R=0 stress.
- [E9] named-world decomposition table (PROBABLE/PRO_CENTRAL/MYOPIA_OFF/PRO_DIST) now printed; "robust" downgraded to
  "large in PROBABLE"; Shapley labelled CONDITIONAL (inherits the planning generator); recycle residual is primary;
  standalone selection/delivery deferred to E5. Verify the table is correct and the claims now match it.
- [E9] Chile example DE-QUANTIFIED (qualitative only, no +2-4pp). Verify no numeric planning mapping remains.
- [cross] embargo filter tightened (RATIO_PHRASE); the 'value ratio (~2.7)' leak removed; CIs relabelled conditional-MC;
  'publication-ready' downgraded to 'code/test-ready'. Verify no performance-multiplier or semantic ratio leaks in any
  emitted stdout; verify the CI/status relabels are consistent across code + docs.

ALSO re-examine the auditor's DEFENDED items and say whether the defense holds: (#11) E4 reduction exact only at tested
points; (#14) multiplicative identity as bookkeeping; (#16) planning anchor unit mismatches given planning is deferred.

OUTPUT: (1) a VERIFICATION table — each round-1 fix: verified / incomplete / cosmetic, with file:line. (2) NEW attacks on
the changed code, ranked, with severity + concrete change + threatens-result?. (3) A publication-readiness verdict per
experiment: publication-ready / code-ready-empirical-pending / not-yet, with the single most important remaining item
each. Be honest: if the fixes resolved the round-1 blockers and no new blocker exists, say so plainly. Do NOT edit files.
codex
I’ll run this as six distinct adversarial passes in two waves—mechanism design, calibration, over-claiming, embargo leakage, double-counting, and robustness—then independently reproduce every requested run and reconcile all claims against exact source lines and stdout. I’ll make no edits.
  → Inspect repository guidance, adjudication/design documents, changed files, and tests
  • Run six adversarial subagent passes and all requested simulations/tests
  • Verify every round-1 fix and re-examine defended items with line evidence
  • Synthesize ranked new findings and publication-readiness verdicts
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$files = @('"'AGENTS.md','agents/routing-rules-codex-md.md','agents/review-all.md','audits/2026-07-12-e5-remodel/ADVERSARIAL-R1-ADJUDICATION.md','audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md','audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md','audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md','scripts/simulation/e4-v5/e5-delivery.mjs','scripts/simulation/e4-v5/e5-delivery.test.mjs','scripts/simulation/e4-v5/e9-fullstack.mjs','scripts/simulation/e4-v5/e9-fullstack.test.mjs','scripts/simulation/e4-v5/e10-costs.mjs','scripts/simulation/e4-v5/e10-costs.test.mjs','scripts/simulation/e4-v5/engine.mjs','scripts/simulation/e4-v5/contract.mjs','scripts/simulation/e4-v5/adapter.mjs'); foreach ("'$f in $files) { if (Test-Path -LiteralPath $f) { $n=(Get-Content -LiteralPath $f).Count; "$f`t$n" } else { "MISSING`t$f" } }; git status --short; git log -5 --oneline' in C:\devel\claude-projects\distributed-governance-research
 succeeded in 260ms:
MISSING	AGENTS.md
MISSING	agents/routing-rules-codex-md.md
MISSING	agents/review-all.md
audits/2026-07-12-e5-remodel/ADVERSARIAL-R1-ADJUDICATION.md	41
audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md	184
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md	288
audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md	50
scripts/simulation/e4-v5/e5-delivery.mjs	376
MISSING	scripts/simulation/e4-v5/e5-delivery.test.mjs
scripts/simulation/e4-v5/e9-fullstack.mjs	334
MISSING	scripts/simulation/e4-v5/e9-fullstack.test.mjs
scripts/simulation/e4-v5/e10-costs.mjs	107
MISSING	scripts/simulation/e4-v5/e10-costs.test.mjs
scripts/simulation/e4-v5/engine.mjs	209
scripts/simulation/e4-v5/contract.mjs	231
scripts/simulation/e4-v5/adapter.mjs	62
2656881 Adversarial R1 fixes — cross batch: tighten embargo filter, downgrade status, fix false invariant
e0b77c6 Adversarial R1 fixes — E9 batch: named-world table, conditional Shapley, recycle primary, Chile de-quantified
cc86ef2 Adversarial R1 fixes — E5 batch: residual verified diversion + honest labels
b313d09 Adversarial R1 fixes — E10 batch: net-budget estimand, de-overlapped symmetric kappa, embargo leak
5733c2e Adversarial round 1: full verdict + pro-Core-v0 auditor adjudication (18 attacks)

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg --files scripts/simulation/e4-v5 | Sort-Object; Get-Content -LiteralPath package.json; git show --stat --oneline b313d09..HEAD' in C:\devel\claude-projects\distributed-governance-research
 succeeded in 349ms:
scripts/simulation/e4-v5\adapter.mjs
scripts/simulation/e4-v5\atlas.mjs
scripts/simulation/e4-v5\contract.mjs
scripts/simulation/e4-v5\controls.mjs
scripts/simulation/e4-v5\e10-costs.mjs
scripts/simulation/e4-v5\e10-costs-test.mjs
scripts/simulation/e4-v5\e5-delivery.mjs
scripts/simulation/e4-v5\e5-delivery-test.mjs
scripts/simulation/e4-v5\e5-layers.mjs
scripts/simulation/e4-v5\e9-fullstack.mjs
scripts/simulation/e4-v5\e9-fullstack-test.mjs
scripts/simulation/e4-v5\engine.mjs
scripts/simulation/e4-v5\evidence.mjs
scripts/simulation/e4-v5\frontier.mjs
scripts/simulation/e4-v5\scenario-configs.mjs
scripts/simulation/e4-v5\scenarios.mjs
scripts/simulation/e4-v5\schema.mjs
scripts/simulation/e4-v5\test.mjs
scripts/simulation/e4-v5\theorem-check.mjs
{
  "name": "distributed-governance-research",
  "version": "0.0.0",
  "private": true,
  "description": "Local tooling for generated diagram artifacts in the Distributed Governance Research project.",
  "scripts": {
    "check-anchors": "node scripts/check-anchors.mjs",
    "fix-anchors": "node scripts/check-anchors.mjs --fix",
    "e4:evidence": "node scripts/simulation/e4-v5/evidence.mjs",
    "e4:controls": "node scripts/simulation/e4-v5/controls.mjs",
    "e4:test": "node scripts/simulation/e4-v5/test.mjs",
    "e4:theorem": "node scripts/simulation/e4-v5/theorem-check.mjs",
    "e4:scenarios": "node scripts/simulation/e4-v5/scenarios.mjs",
    "e4:frontier": "node scripts/simulation/e4-v5/frontier.mjs",
    "e5:layers": "node scripts/simulation/e4-v5/e5-layers.mjs",
    "e5:delivery": "node scripts/simulation/e4-v5/e5-delivery.mjs",
    "e5:delivery:test": "node scripts/simulation/e4-v5/e5-delivery-test.mjs",
    "e9:fullstack": "node scripts/simulation/e4-v5/e9-fullstack.mjs",
    "e9:fullstack:test": "node scripts/simulation/e4-v5/e9-fullstack-test.mjs",
    "e10:costs": "node scripts/simulation/e4-v5/e10-costs.mjs",
    "e10:costs:test": "node scripts/simulation/e4-v5/e10-costs-test.mjs"
  },
  "devDependencies": {
    "@mermaid-js/mermaid-cli": "11.16.0",
    "pdf-lib": "^1.17.1"
  }
}
2656881 Adversarial R1 fixes — cross batch: tighten embargo filter, downgrade status, fix false invariant
 audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md  | 5 ++++-
 audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md | 3 ++-
 scripts/simulation/e4-v5/adapter.mjs                | 2 ++
 3 files changed, 8 insertions(+), 2 deletions(-)
e0b77c6 Adversarial R1 fixes — E9 batch: named-world table, conditional Shapley, recycle primary, Chile de-quantified
 .../2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md   | 23 ++++-----
 scripts/simulation/e4-v5/e9-fullstack.mjs          | 55 +++++++++++++---------
 2 files changed, 43 insertions(+), 35 deletions(-)
cc86ef2 Adversarial R1 fixes — E5 batch: residual verified diversion + honest labels
 scripts/simulation/e4-v5/e5-delivery-test.mjs |  4 ++--
 scripts/simulation/e4-v5/e5-delivery.mjs      | 25 +++++++++++++++++--------
 scripts/simulation/e4-v5/e9-fullstack.mjs     |  4 ++--
 3 files changed, 21 insertions(+), 12 deletions(-)

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$files=@('"'audits/2026-07-12-e5-remodel/ADVERSARIAL-R1-ADJUDICATION.md','audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md'); foreach("'$f in $files){ "===== $f ====="; $i=0; Get-Content -LiteralPath $f | ForEach-Object { $i++; '"'{0,4}: {1}' -f "'$i,$_ } }' in C:\devel\claude-projects\distributed-governance-research
 succeeded in 186ms:
===== audits/2026-07-12-e5-remodel/ADVERSARIAL-R1-ADJUDICATION.md =====
   1: # Adversarial round 1 — pro-Core-v0 auditor adjudication (2026-07-13)
   2: 
   3: Role: honest but **PRO-Core-v0** arbiter. Verdict on each of the 18 ranked attacks. JUSTIFIED = real technical/
   4: methodological defect → apply. PARTIAL = real but bounded → minimal fix. DEFEND = unfounded / already-handled / does not
   5: threaten a reported result → keep, with reason. **The core thesis is PRESERVED and the adversary itself agrees it should
   6: be:** the fixed-PROBABLE arithmetic (Core v0 wins decisively), the full-stack diagonal holding in ALL named worlds, the
   7: exact Shapley sum, the `nSec=1→E5` reduction, and the "greedy reference, not optimum" qualification all survive.
   8: 
   9: | # | attack | verdict | reason / action |
  10: |---|---|---|---|
  11: | 1 | [E10] wrong cost estimand (haircut on value vs net budget) | **JUSTIFIED** | Real. Admin cost should shrink the BUDGET before selection, not multiply delivered value. Adversary reproduced ~+0.47pp vs my +2.3pp. Fix: net-budget selection. |
  12: | 2 | [E10] κ_C (IDB 16%) overlaps E5 leakage | **JUSTIFIED** | Real double-count. IDB waste bundles procurement/transfer leakage E5 already removes. Fix: re-anchor κ_C to PURE admin overhead (1–10% band), withdraw the IDB-16% point. Shrinks κ_C. |
  13: | 3 | [E9] "robust selection/delivery" false in own worlds | **JUSTIFIED** | Real over-claim: selection Shapley −2.16 in PRO_CENTRAL, delivery −2.09 in PRO_DIST. Fix: "large in PROBABLE"; publish the named-world table. (The FULL diagonal still wins in every world — preserve that.) |
  14: | 4 | [E10] embargo leak "value ratio (~2.7)" | **JUSTIFIED** | Semantic performance-ratio bypass. Fix: remove; report the κ_C threshold or pp table only. |
  15: | 5 | [cross] closed schema doesn't cover E5/E9/E10 (safeLog only) | **PARTIAL** | Fix the leak + tighten safeLog to catch the ratio class now; full typed closed renderers for 3 experiments = noted follow-up. |
  16: | 6 | [E9] full-stack/Shapley inherit unanchored planning | **JUSTIFIED** | Even at agendaCapture=0 the sector generator (secValSpread/creditCoef/assoc) is live. Fix: quantify standalone selection/delivery from **E5** (clean); label E9's full-stack point conditional/illustrative. |
  17: | 7 | [E9] strict-residual confounded by utilization | **JUSTIFIED (minor)** | Already have `recycle` (removes it). Fix: lead with / co-report recycle; drop the false monotonicity assumption. |
  18: | 8 | [E5] verified zero diversion mechanically saturated | **JUSTIFIED** | deterrent 1.05 > temptation max 1 ⇒ deterministic zero. Olken's audit cut leakage 8pp, didn't eliminate. Fix: add residual diversion to verified (temptation tail / lower deterrent). |
  19: | 9 | [E5] Olken expenditure → signed generic welfare loss | **PARTIAL (labeling)** | Relabel as moment-matched, NOT identified; don't claim the honesty/detection/advance decomposition is identified. |
  20: | 10 | [cross] narrow CIs omit substantive uncertainty | **JUSTIFIED (labeling)** | The CI is inner-MC only. Fix: relabel "conditional Monte-Carlo interval (world/calibration uncertainty excluded)". |
  21: | 11 | [E5] general E4 reduction false (retention differs) | **DEFEND + note** | Exact at tested points (1e-9). Edge: E5 doesn't replicate E4's o_min degeneracy filtering, so degenerate corners differ. Note as limitation; the tested reduction stands. |
  22: | 12 | [E10] asymmetric cost scopes | **JUSTIFIED** | Core v0's verification/audit/recovery/reputation machinery generates E5's verified benefit but is uncharged. Fix: κ_D must include those control costs (narrows the cost advantage). |
  23: | 13 | [E10] PRO_DIST reverses admin contribution | **JUSTIFIED** | Multiplicative haircut on negative status-quo welfare mis-behaves. Fixed by #1 (net budget) + negative-domain tests. |
  24: | 14 | [E5] multiplicative validation tautological | **DEFEND (mostly)** | Already labeled "an accounting identity"; the interaction is the level-effect signature. Tighten test comment; no result change. |
  25: | 15 | [E5] robustness ranges preserve ordering, never cross worlds | **PARTIAL** | Relabel the LHS as a CONDITIONAL delivery-parameter sweep (PROBABLE-fixed, non-overlapping regimes); a joint world×delivery×κ design = follow-up. |
  26: | 16 | [E9] planning anchors incompatible units | **DEFEND (deferred) + note** | Planning is NOT quantified (headline reports no planning figure), so these don't threaten a reported result. Already logged as future work (return-per-cost tilt, softmax share form). |
  27: | 17 | [E9] Chile severity not the modeled treatment | **JUSTIFIED** | Mental health is a health SUBfunction, not a zero-funded top-level COFOG function; agendaCapture=1 is a taxonomic mismatch. Fix: keep Chile as a QUALITATIVE illustration of visibility bias; **remove the +2–4pp numeric mapping**. |
  28: | 18 | [cross] design docs contradictory / historical mixed in | **JUSTIFIED** | Fix: separate current spec from historical changelog; generate tables from code; delete the false "every cell ≤ reference" line + stale visibility-bin text. |
  29: | + | "publication-ready" premature | **JUSTIFIED** | Downgrade to "code/test ready; empirical interpretation pending calibration/model-form review." |
  30: | + | "20-seed" test uses 8 seeds | **JUSTIFIED (minor)** | Run 20 or rename. |
  31: 
  32: ## Summary
  33: 
  34: **JUSTIFIED (apply): 1,2,3,4,6,7,8,10,12,13,17,18 + status + seed-count.** **PARTIAL (bounded fix + note): 5,9,15.**
  35: **DEFEND (preserve/deferred, with reason): 11,14,16** and the whole core-result set.
  36: 
  37: **Net effect on the thesis:** the CORE result survives (Core v0 wins decisively in PROBABLE; full advantage holds in
  38: every named world). The honest corrections SHRINK and RE-SCOPE the E10 cost layer (net-budget estimand + de-overlapped,
  39: symmetric, smaller κ), qualify "robust" → "large in PROBABLE" with the named-world table, add residual diversion to
  40: verified, de-quantify the Chile example, relabel CIs/robustness as conditional, and clean the docs. None of this is an
  41: ideological degradation — every change closes a reproduced defect. The defended items are defended on merit.
===== audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md =====
   1: # E10 design — the administrative-cost layer (built 2026-07-13)
   2: 
   3: **Code:** `scripts/simulation/e4-v5/e10-costs.mjs` (+ `-test.mjs`). **Runs:** `npm run e10:costs`, `e10:costs:test`.
   4: 
   5: E10 adds the cost dimension E5 (delivered value at equal budget) and E9 (the full stack) left out: the **administrative
   6: / machinery cost** the central runs and Core v0 largely eliminates, minus Core v0's own platform cost.
   7: 
   8: ## Model
   9: 
  10: `V_arm / O = (delivered value_arm / O) · (1 − κ_arm)`, `m10 = V_D/O − V_C/O`. Status quo = central selection × opaque
  11: delivery; Core v0 = distributed selection × verified delivery.
  12: 
  13: **Two switches (author requirement):**
  14: - **PLANNING switchable OFF (default OFF)** — its magnitude is deferred/qualitative (agenda capture is the dominant,
  15:   not-yet-anchorable mechanism), so it must NOT be folded quantitatively into the cost result. OFF ⇒ value base = E5;
  16:   ON ⇒ value base = E9. Tested: OFF reproduces E5's S/A2 cells exactly.
  17: - **COSTS switchable OFF** (κ=0 ⇒ reduces to the value stack). Tested.
  18: 
  19: ## Calibration (verification agent, 2026-07-13 — DIRECTION verified, POINT magnitudes DECLARED-conservative)
  20: 
  21: | param | value | anchor (verified) | status |
  22: |---|---|---|---|
  23: | **κ_C** central machinery Core v0 eliminates | **0.15** | IDB *Better Spending for Better Lives* 2018: LAC public-spending waste = **4.4% of GDP ≈ 16% of government expenditure** (procurement + payroll + transfers). 0.15 = round-down of 16%; band 0.10–0.16. Narrow pure-admin overhead 1–10% (CBPP; SSA <1%; CBO) is a lower floor. | direction ANCHORED; exact point DECLARED |
  24: | **κ_D** Core v0 platform + AI operating cost | **0.03** | Verified e-procurement run-costs are an ORDER OF MAGNITUDE below 0.03 (~0.005–1% of spend managed — JBCA 2023 e-GP CBA; KONEPS; GeM; ProZorro). 0.03 deliberately over-charges the platform → **conservative ceiling** (band 0.005–0.03). | direction ANCHORED; conservative ceiling, DECLARED |
  25: | ratio κ_C/κ_D ≈ **5** | — | verified central machinery cost is **≥10–30×** platform run cost → the modeled 5× **understates** the structural gap | conservative |
  26: 
  27: **Must stay purely DECLARED** (no source maps directly): the exact κ_C=0.15 and κ_D=0.03 points; the IDB three-way
  28: procurement/payroll/transfers split; procurement transaction cost as a share of contract value.
  29: 
  30: ## Result (PROBABLE, planning OFF, κ_C=0.15 / κ_D=0.03)
  31: 
  32: Value-only gap **+59.1%** (status quo +34.2% vs Core v0 +93.3%) → **with admin costs +61.4%** (the cost layer adds
  33: **+2.3%** to the gap). Costs OFF reduces exactly to the value stack.
  34: 
  35: **Honest subtlety (tested):** admin costs WIDEN the Core-v0 gap only when `κ_C/κ_D` exceeds the **value ratio (~2.7)** —
  36: Core v0 delivers more, so a proportional cost removes more absolute value from its base. At the anchored 5× ratio, costs
  37: widen the gap; below ~2.7× they narrow it. The verified evidence (ratio ≥10–30×) sits well above the crossover, so the
  38: widening is robust.
  39: 
  40: ## Not double-counting E5's leakage
  41: 
  42: E5's delivery layer models **leakage/diversion** (value not delivered — Okun's leaky bucket). E10 models a DIFFERENT
  43: thing: the **administrative machinery cost** (budget consumed running the value-proxy/allocation/prioritization/
  44: fiscalization apparatus), which Core v0 replaces with a cheap platform. No overlap with delivery leakage.
  45: 
  46: ## Next
  47: 
  48: - Optional: a full IDB-volume read to pin the procurement-share component (currently declared).
  49: - The E4→E10 program is complete: E4 selection · E5 delivery · E9 planning (qualitative) · E10 admin cost. Then paper
  50:   framing of the whole stack (selection + delivery + cost quantified; planning qualitative via agenda capture).

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'git show --stat --oneline b313d09; git show --format=fuller --no-ext-diff b313d09 -- audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md scripts/simulation/e4-v5/e10-costs.mjs scripts/simulation/e4-v5/e10-costs-test.mjs' in C:\devel\claude-projects\distributed-governance-research
 succeeded in 191ms:
b313d09 Adversarial R1 fixes — E10 batch: net-budget estimand, de-overlapped symmetric kappa, embargo leak
 scripts/simulation/e4-v5/e10-costs-test.mjs |  23 ++++---
 scripts/simulation/e4-v5/e10-costs.mjs      | 102 ++++++++++++++++------------
 scripts/simulation/e4-v5/e5-delivery.mjs    |   1 +
 scripts/simulation/e4-v5/e9-fullstack.mjs   |   2 +-
 4 files changed, 71 insertions(+), 57 deletions(-)
commit b313d09d20262db816ebbb6cf69f33648c73122c
Author:     Mauricio Offermann <mauricio.offermann@gocode.cl>
AuthorDate: Mon Jul 13 16:15:52 2026 -0400
Commit:     Mauricio Offermann <mauricio.offermann@gocode.cl>
CommitDate: Mon Jul 13 16:15:52 2026 -0400

    Adversarial R1 fixes — E10 batch: net-budget estimand, de-overlapped symmetric kappa, embargo leak
    
    Applied the justified E10 attacks (auditor verdict JUSTIFIED):
    - #1/#13 NET-BUDGET estimand: admin cost now reduces the BUDGET (each arm funds at (1-kappa)*budget),
      not the delivered value. Greedy cuts marginal low-value projects first, so the value loss is
      SUB-proportional to kappa. Exposed sumO from delivered2x2/fullStack for a common full-budget oracle.
    - #2 de-overlap kappa_C from E5 leakage: dropped the IDB '16%% of expenditure' anchor (it bundles
      procurement/transfer LEAKAGE E5 already removes) -> kappa_C=0.08, pure administrative overhead band.
    - #12 symmetric cost scopes: kappa_D=0.05 now includes Core v0's own verification/audit/recovery
      control machinery (which earns E5's verified benefit), not just platform+AI.
    - #4 embargo leak: removed the semantic 'value ratio (~2.7)' performance-ratio phrasing.
    - HONEST RESULT: under symmetric net-budget accounting the admin-cost layer is roughly NEUTRAL
      (~-0.8pp at anchored kappa, small either way) -- the Core v0 advantage comes from SELECTION and
      DELIVERY, not an admin-cost saving. (Was a spurious +2.3pp under the value-haircut + oversized
      double-counted kappa_C.) Core value advantage survives (with-costs gain +58.3pp).
    11/11 E10 tests; E5 40/40; E9 26/26 unchanged.
    
    Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>

diff --git a/scripts/simulation/e4-v5/e10-costs-test.mjs b/scripts/simulation/e4-v5/e10-costs-test.mjs
index 3ee4e08..bf61403 100644
--- a/scripts/simulation/e4-v5/e10-costs-test.mjs
+++ b/scripts/simulation/e4-v5/e10-costs-test.mjs
@@ -33,22 +33,23 @@ const NW = 800;
   check('planning on switches the value base to E9', r.planningOn === true && r.via.startsWith('E9'));
 }
 
-// 4) The κ haircut is applied per arm exactly: V_arm = valueOnly_arm · (1 − κ_arm).
+// 4) NET-BUDGET accounting: the value loss from admin cost is SUB-proportional to κ (greedy cuts marginal low-value
+//    projects first), so the arm's value at net budget is ABOVE the naive value·(1−κ) haircut.
 {
   const r = e10(cfg, { nWorlds: NW });
-  check('central value haircut = (1 − κ_C)', approx(r.withCosts.statusQuo, r.valueOnly.statusQuo * (1 - r.kappa_C), 1e-12));
-  check('Core v0 value haircut = (1 − κ_D)', approx(r.withCosts.coreV0, r.valueOnly.coreV0 * (1 - r.kappa_D), 1e-12));
+  check('central net-budget value ≥ naive haircut (sub-proportional)', r.withCosts.statusQuo >= r.valueOnly.statusQuo * (1 - r.kappa_C) - 1e-9, `${r.withCosts.statusQuo} vs ${r.valueOnly.statusQuo * (1 - r.kappa_C)}`);
+  check('Core v0 net-budget value ≥ naive haircut (sub-proportional)', r.withCosts.coreV0 >= r.valueOnly.coreV0 * (1 - r.kappa_D) - 1e-9);
+  check('costs reduce each arm below its full-budget value', r.withCosts.statusQuo < r.valueOnly.statusQuo && r.withCosts.coreV0 < r.valueOnly.coreV0);
 }
 
-// 5) COST DIRECTION: with a κ_C/κ_D ratio above the value ratio, admin costs WIDEN the gap; below it, they narrow it
-//    (an honest subtlety — Core v0 delivers more, so a proportional cost removes more absolute value from its base).
+// 5) COST DIRECTION under net-budget accounting: the admin-cost effect on the gap is SMALL at the anchored κ and grows
+//    (turns clearly positive) only at large κ_C. Monotone in κ_C.
 {
-  const valueRatio = (() => { const v = e10(cfg, { nWorlds: NW }).valueOnly; return v.coreV0 / v.statusQuo; })();
-  const wide = e10(cfg, { nWorlds: NW, costs: { ...COSTS, kappa_C: 0.30, kappa_D: 0.05 } }); // ratio 6 > valueRatio
-  const narrow = e10(cfg, { nWorlds: NW, costs: { ...COSTS, kappa_C: 0.06, kappa_D: 0.05 } }); // ratio ~1.2 < valueRatio
-  check('high κ_C/κ_D ratio widens the gap', wide.adminCostContribution > 0, `contrib ${wide.adminCostContribution}`);
-  check('low κ_C/κ_D ratio narrows the gap', narrow.adminCostContribution < 0, `contrib ${narrow.adminCostContribution}`);
-  check('the crossover is at κ_C/κ_D ≈ the value ratio', valueRatio > 2 && valueRatio < 4, `valueRatio ${valueRatio}`);
+  const base  = e10(cfg, { nWorlds: NW });
+  const large = e10(cfg, { nWorlds: NW, costs: { ...COSTS, kappa_C: 0.30 } });
+  check('admin-cost effect is small at the anchored κ (|·| < 3pp)', Math.abs(base.adminCostContribution) < 0.03, `contrib ${base.adminCostContribution}`);
+  check('a much larger κ_C makes the admin-cost effect more positive', large.adminCostContribution > base.adminCostContribution);
+  check('the core value advantage survives the cost layer (with-costs gain > 0.4)', base.withCosts.gain > 0.4, `gain ${base.withCosts.gain}`);
 }
 
 console.log(`\nE10 costs: ${pass} passed, ${fail} failed.`);
diff --git a/scripts/simulation/e4-v5/e10-costs.mjs b/scripts/simulation/e4-v5/e10-costs.mjs
index 0d37bba..9b3ae97 100644
--- a/scripts/simulation/e4-v5/e10-costs.mjs
+++ b/scripts/simulation/e4-v5/e10-costs.mjs
@@ -9,13 +9,13 @@
 //     result. Planning OFF ⇒ the value base is E5 (selection × delivery). Planning ON ⇒ the value base is E9.
 //   • COSTS are switchable OFF (κ_C = κ_D = 0 ⇒ E10 reduces to the value stack).
 //
-//   V_arm / O = (delivered value_arm / O) · (1 − κ_arm)      [κ = admin/machinery cost share; base κ_D < κ_C]
-//   m10 = V_D/O − V_C/O
+//   Admin cost reduces the BUDGET (net-budget accounting): each arm funds at (1−κ_arm)·budget, and its delivered value
+//   is taken as a fraction of the COMMON full-budget oracle. m10 = V_D − V_C. (Adversarial R1: an earlier version
+//   applied κ as a haircut on delivered VALUE, which over-stated the effect — greedy funding cuts the marginal
+//   low-value projects first, so the value loss is sub-proportional to κ.)
 //
-// κ_C, κ_D are set with DIRECTION anchored and MAGNITUDE declared-and-conservative (κ_C=0.15 central machinery Core v0
-// eliminates, informed by IDB *Better Spending for Better Lives* 2018 + ~10–20% program admin overhead; κ_D=0.03 Core v0
-// platform/AI, informed by low e-government/e-procurement operating costs). Not a transported point calibration.
-// Run: npm run e10:costs
+// κ is the ADMINISTRATIVE MACHINERY cost only, DE-OVERLAPPED from E5 delivery leakage and charged SYMMETRICALLY (Core
+// v0's own control machinery is costed, not free). Magnitudes DECLARED (see COSTS). Run: npm run e10:costs
 
 import { delivered2x2, DELIVERY } from './e5-delivery.mjs';
 import { fullStack, PLANNING } from './e9-fullstack.mjs';
@@ -23,43 +23,53 @@ import { baseConfig, NUM } from './contract.mjs';
 import { safeLog } from './adapter.mjs';
 
 export const COSTS = {
-  // DIRECTION robustly anchored (verified sources), POINT magnitude DECLARED-and-conservative (author-set 2026-07-13).
-  kappa_C:    0.15,   // central admin/machinery cost share Core v0 ELIMINATES (value-proxy studies, allocation,
-                      //     prioritization, AI-fiscalization machinery, delivery mgmt, licenses, travel). ANCHOR: IDB
-                      //     *Better Spending for Better Lives* 2018 — LAC public-spending waste = 4.4% of GDP ≈ **16% of
-                      //     government expenditure** (procurement + payroll + transfers). 0.15 is a round-down of that
-                      //     16%; band 0.10–0.16. (Narrow pure-admin overhead is 1–10% — CBPP/SSA/CBO — a lower floor,
-                      //     since κ_C is broader.) The exact point is DECLARED (no source maps "waste"→"budget share removed").
-  kappa_D:    0.03,   // Core v0's OWN operating cost (platform + AI). ANCHOR: verified e-procurement platform run-costs
-                      //     are an ORDER OF MAGNITUDE below this (~0.005–1% of spend managed — JBCA 2023 e-GP CBA; KONEPS;
-                      //     GeM; ProZorro), so 0.03 deliberately OVER-charges the platform = conservative ceiling (band
-                      //     0.005–0.03). base κ_D ≪ κ_C: verified central-machinery cost is ≥10–30× platform run cost,
-                      //     so the modeled ratio ~5 UNDERSTATES the structural gap. Magnitude DECLARED.
+  // Adversarial-round-1 corrections: κ is the ADMINISTRATIVE MACHINERY cost only, DE-OVERLAPPED from E5's delivery
+  // leakage (the IDB "16% of expenditure" waste bundles procurement/transfer LEAKAGE, which E5 already removes as
+  // non-delivery — using it here double-counted). And costs are charged SYMMETRICALLY: Core v0's own control machinery
+  // (the evidence/verification/recovery layer that earns E5's verified-delivery benefit) is costed, not free.
+  kappa_C:    0.08,   // central allocation / prioritization / value-proxy-study / delivery-management machinery Core v0
+                      //     replaces. Anchor: pure administrative OVERHEAD band 1–10% (CBPP; SSA <1%; CBO 0.3–2.8%),
+                      //     upper part since κ_C is broadly scoped. NOT the IDB waste figure (that overlaps E5 leakage).
+                      //     Magnitude DECLARED.
+  kappa_D:    0.05,   // Core v0's OWN operating cost = digital platform + AI (low, e-GP run-costs <1% of spend — JBCA
+                      //     2023, KONEPS, GeM, ProZorro) PLUS its verification/audit/recovery/reputation control
+                      //     machinery (symmetric charge for the controls that produce the E5 verified benefit). base
+                      //     κ_D < κ_C but the margin is MODEST under symmetric accounting. Magnitude DECLARED.
   planningOn: false,  // author requirement: PLANNING OFF by default (its magnitude is deferred; do not fold into costs)
 };
 
-// The delivered-value base: E5 (selection × delivery) with planning OFF, or E9 (the full stack) with planning ON.
-// Status quo = central selection × opaque delivery; Core v0 = distributed selection × verified delivery.
-function valueBase(cfg, opts, costs, delivery, planning) {
+// Raw delivered value of one arm's cell at a NET budget (phi scaled by 1−κ), and the full-budget oracle sum, sharing the
+// same worlds/seed. Admin cost reduces the BUDGET (fewer projects funded), not the delivered value directly — because
+// the greedy funds highest-value projects first, cutting budget removes the MARGINAL (lowest-value) funded projects, so
+// the value loss is SUB-proportional to κ (Adversarial R1 #1/#13).
+function armValueNet(cfg, opts, costs, delivery, planning, arm, kappa) {
+  const cNet = { ...cfg, phi: cfg.phi * (1 - kappa) };
   if (costs.planningOn) {
-    const v = fullStack(cfg, { ...opts, delivery, planning });
-    return { statusQuo: v.statusQuo, coreV0: v.coreV0, via: 'E9 (planning ON)' };
+    const v = fullStack(cNet, { ...opts, delivery, planning });
+    return (arm === 'C' ? v.statusQuo : v.coreV0) * v.sumO;   // raw arm value at net budget
   }
-  const v = delivered2x2(cfg, { ...opts, delivery });
-  return { statusQuo: v.cells.S, coreV0: v.cells.A2, via: 'E5 (planning OFF)' };
+  const v = delivered2x2(cNet, { ...opts, delivery });
+  return (arm === 'C' ? v.cells.S : v.cells.A2) * v.sumO;
 }
 
 export function e10(cfg, { nWorlds = NUM.n_worlds.value, seed = NUM.seed.value, delivery = DELIVERY, planning = PLANNING, costs = COSTS } = {}) {
-  const base = valueBase(cfg, { nWorlds, seed }, costs, delivery, planning);
   const kC = costs.kappa_C, kD = costs.kappa_D;
-  const V_C = base.statusQuo * (1 - kC), V_D = base.coreV0 * (1 - kD);
-  const valueGain = base.coreV0 - base.statusQuo;
+  const via = costs.planningOn ? 'E9 (planning ON)' : 'E5 (planning OFF)';
+  // full-budget value base (both arms, for value-only) and its oracle — the COMMON normalizer.
+  const full = costs.planningOn ? fullStack(cfg, { nWorlds, seed, delivery, planning }) : delivered2x2(cfg, { nWorlds, seed, delivery });
+  const Ofull = full.sumO;
+  const sq = costs.planningOn ? full.statusQuo : full.cells.S;
+  const cv = costs.planningOn ? full.coreV0 : full.cells.A2;
+  // NET-budget delivered value of each arm, normalized by the COMMON full-budget oracle.
+  const V_C = armValueNet(cfg, { nWorlds, seed }, costs, delivery, planning, 'C', kC) / Ofull;
+  const V_D = armValueNet(cfg, { nWorlds, seed }, costs, delivery, planning, 'D', kD) / Ofull;
+  const valueGain = cv - sq;
   const costGain = V_D - V_C;
   return {
-    planningOn: costs.planningOn, via: base.via, kappa_C: kC, kappa_D: kD,
-    valueOnly: { statusQuo: base.statusQuo, coreV0: base.coreV0, gain: valueGain },
+    planningOn: costs.planningOn, via, kappa_C: kC, kappa_D: kD,
+    valueOnly: { statusQuo: sq, coreV0: cv, gain: valueGain },
     withCosts: { statusQuo: V_C, coreV0: V_D, gain: costGain },
-    adminCostContribution: costGain - valueGain,   // how much the admin-cost layer adds to the Core-v0 − status-quo gap
+    adminCostContribution: costGain - valueGain,   // net-budget admin-cost effect on the Core-v0 − status-quo gap
   };
 }
 
@@ -68,27 +78,29 @@ function main() {
   import('./scenario-configs.mjs').then(({ SCENARIO_WORLD: W, PROBABLE }) => {
     const cfg = { ...baseConfig(), ...W, ...PROBABLE };
     const r = e10(cfg, { nWorlds: 1200 });
-    safeLog('E10 — the COST layer on the delivered-value stack (PROBABLE world). Parity at the oracle reference.');
-    safeLog('PLANNING is OFF by default (its magnitude is deferred); COSTS are administrative/machinery (κ).\n');
-    safeLog(`value base: ${r.via}   ·   κ_C=${r.kappa_C} (central machinery) · κ_D=${r.kappa_D} (Core v0 platform)  [direction anchored, magnitude declared-conservative]`);
+    safeLog('E10 — the ADMINISTRATIVE-COST layer on the delivered-value stack (PROBABLE world). Percentages of the');
+    safeLog('full-information greedy REFERENCE. PLANNING is OFF by default; admin cost reduces the BUDGET (net-budget');
+    safeLog('accounting), charged SYMMETRICALLY across arms.\n');
+    safeLog(`value base: ${r.via}   ·   κ_C=${r.kappa_C} (central allocation/prioritization/study machinery) · κ_D=${r.kappa_D} (Core v0 platform + its control machinery)  [magnitude DECLARED]`);
     safeLog(`VALUE ONLY (costs off):   status quo ${pct(r.valueOnly.statusQuo)} · Core v0 ${pct(r.valueOnly.coreV0)}  → gain ${pct(r.valueOnly.gain)}`);
-    safeLog(`WITH ADMIN COSTS:         status quo ${pct(r.withCosts.statusQuo)} · Core v0 ${pct(r.withCosts.coreV0)}  → gain ${pct(r.withCosts.gain)}`);
-    safeLog(`  the admin-cost layer adds ${pct(r.adminCostContribution)} to the gap (the central's heavier machinery costs more).\n`);
+    safeLog(`WITH ADMIN COSTS (net budget): status quo ${pct(r.withCosts.statusQuo)} · Core v0 ${pct(r.withCosts.coreV0)}  → gain ${pct(r.withCosts.gain)}`);
+    safeLog(`  admin-cost effect on the gap: ${pct(r.adminCostContribution)} (points of the reference).\n`);
+    safeLog('  → Under symmetric net-budget accounting the admin-cost layer is roughly NEUTRAL (small, and can go either');
+    safeLog('    way): because greedy funding cuts marginal low-value projects first, the value loss is sub-proportional,');
+    safeLog('    and Core v0 delivers on a larger base. The Core v0 advantage comes from SELECTION and DELIVERY, NOT from');
+    safeLog('    an admin-cost saving. A decisive cost advantage would need κ_C ≫ κ_D beyond what symmetric accounting supports.\n');
 
-    // costs OFF reduces E10 to the value stack; planning ON uses E9 (folds in the deferred planning layer — NOT the headline).
     const off = e10(cfg, { nWorlds: 1200, costs: { ...COSTS, kappa_C: 0, kappa_D: 0 } });
     safeLog(`switch check — costs OFF (κ=0): with-costs gain ${pct(off.withCosts.gain)} == value-only gain ${pct(off.valueOnly.gain)} (reduces to the value stack).`);
 
-    // κ sensitivity (DECLARED until anchored): how the gap responds to the central's machinery cost.
-    safeLog('\nAdmin-cost sensitivity (κ_D=0.03 fixed; κ_C swept — magnitude declared, direction anchored):');
-    safeLog('   κ_C     with-costs gain     admin-cost contribution');
-    for (const kc of [0.05, 0.10, 0.15, 0.25]) {
+    safeLog('\nAdmin-cost sensitivity (κ_D=0.05 fixed; κ_C swept — magnitude DECLARED):');
+    safeLog('   κ_C     admin-cost effect on the gap (points of reference)');
+    for (const kc of [0.05, 0.08, 0.15, 0.30]) {
       const rk = e10(cfg, { nWorlds: 800, costs: { ...COSTS, kappa_C: kc } });
-      safeLog(`   ${kc.toFixed(2)}      ${pct(rk.withCosts.gain).padStart(7)}              ${pct(rk.adminCostContribution).padStart(7)}`);
+      safeLog(`   ${kc.toFixed(2)}      ${pct(rk.adminCostContribution).padStart(7)}`);
     }
-    safeLog('   → the central runs the value-proxy / allocation / prioritization / AI-fiscalization machinery Core v0');
-    safeLog('     eliminates, so κ_C > κ_D widens the gap once the ratio clears the value ratio (~2.7). Direction anchored');
-    safeLog('     (IDB Better Spending 2018; low e-government platform costs); point magnitudes declared-and-conservative.');
+    safeLog('   → the admin-cost effect is small and only turns clearly positive at large κ_C; magnitudes DECLARED,');
+    safeLog('     direction only (central allocation machinery cost > platform cost — IDB / low e-government platform costs).');
   });
 }
 import { fileURLToPath } from 'node:url';

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$files=@('"'scripts/simulation/e4-v5/e10-costs.mjs','scripts/simulation/e4-v5/e10-costs-test.mjs','scripts/simulation/e4-v5/adapter.mjs'); foreach("'$f in $files){ "===== $f ====="; $i=0; Get-Content -LiteralPath $f | ForEach-Object { $i++; '"'{0,4}: {1}' -f "'$i,$_ } }' in C:\devel\claude-projects\distributed-governance-research
 succeeded in 190ms:
===== scripts/simulation/e4-v5/e10-costs.mjs =====
   1: // E10 — the COST layer on top of the delivered-value stack. Adds ADMINISTRATIVE/MACHINERY COST (κ): the value-proxy
   2: // market studies, allocation, prioritization, AI-fiscalization machinery, delivery management, licenses that the
   3: // central runs and that Core v0 largely eliminates, MINUS Core v0's own operating cost (platform + AI). This is the
   4: // cost dimension E5 (delivered value at equal budget) and E9 (the full stack) deliberately left out.
   5: //
   6: // TWO SWITCHES (author requirement):
   7: //   • PLANNING is switchable OFF (default OFF). Its magnitude is deferred/qualitative (see e9-fullstack.mjs — agenda
   8: //     capture is the dominant, not-yet-anchorable mechanism), so it must NOT be folded quantitatively into the cost
   9: //     result. Planning OFF ⇒ the value base is E5 (selection × delivery). Planning ON ⇒ the value base is E9.
  10: //   • COSTS are switchable OFF (κ_C = κ_D = 0 ⇒ E10 reduces to the value stack).
  11: //
  12: //   Admin cost reduces the BUDGET (net-budget accounting): each arm funds at (1−κ_arm)·budget, and its delivered value
  13: //   is taken as a fraction of the COMMON full-budget oracle. m10 = V_D − V_C. (Adversarial R1: an earlier version
  14: //   applied κ as a haircut on delivered VALUE, which over-stated the effect — greedy funding cuts the marginal
  15: //   low-value projects first, so the value loss is sub-proportional to κ.)
  16: //
  17: // κ is the ADMINISTRATIVE MACHINERY cost only, DE-OVERLAPPED from E5 delivery leakage and charged SYMMETRICALLY (Core
  18: // v0's own control machinery is costed, not free). Magnitudes DECLARED (see COSTS). Run: npm run e10:costs
  19: 
  20: import { delivered2x2, DELIVERY } from './e5-delivery.mjs';
  21: import { fullStack, PLANNING } from './e9-fullstack.mjs';
  22: import { baseConfig, NUM } from './contract.mjs';
  23: import { safeLog } from './adapter.mjs';
  24: 
  25: export const COSTS = {
  26:   // Adversarial-round-1 corrections: κ is the ADMINISTRATIVE MACHINERY cost only, DE-OVERLAPPED from E5's delivery
  27:   // leakage (the IDB "16% of expenditure" waste bundles procurement/transfer LEAKAGE, which E5 already removes as
  28:   // non-delivery — using it here double-counted). And costs are charged SYMMETRICALLY: Core v0's own control machinery
  29:   // (the evidence/verification/recovery layer that earns E5's verified-delivery benefit) is costed, not free.
  30:   kappa_C:    0.08,   // central allocation / prioritization / value-proxy-study / delivery-management machinery Core v0
  31:                       //     replaces. Anchor: pure administrative OVERHEAD band 1–10% (CBPP; SSA <1%; CBO 0.3–2.8%),
  32:                       //     upper part since κ_C is broadly scoped. NOT the IDB waste figure (that overlaps E5 leakage).
  33:                       //     Magnitude DECLARED.
  34:   kappa_D:    0.05,   // Core v0's OWN operating cost = digital platform + AI (low, e-GP run-costs <1% of spend — JBCA
  35:                       //     2023, KONEPS, GeM, ProZorro) PLUS its verification/audit/recovery/reputation control
  36:                       //     machinery (symmetric charge for the controls that produce the E5 verified benefit). base
  37:                       //     κ_D < κ_C but the margin is MODEST under symmetric accounting. Magnitude DECLARED.
  38:   planningOn: false,  // author requirement: PLANNING OFF by default (its magnitude is deferred; do not fold into costs)
  39: };
  40: 
  41: // Raw delivered value of one arm's cell at a NET budget (phi scaled by 1−κ), and the full-budget oracle sum, sharing the
  42: // same worlds/seed. Admin cost reduces the BUDGET (fewer projects funded), not the delivered value directly — because
  43: // the greedy funds highest-value projects first, cutting budget removes the MARGINAL (lowest-value) funded projects, so
  44: // the value loss is SUB-proportional to κ (Adversarial R1 #1/#13).
  45: function armValueNet(cfg, opts, costs, delivery, planning, arm, kappa) {
  46:   const cNet = { ...cfg, phi: cfg.phi * (1 - kappa) };
  47:   if (costs.planningOn) {
  48:     const v = fullStack(cNet, { ...opts, delivery, planning });
  49:     return (arm === 'C' ? v.statusQuo : v.coreV0) * v.sumO;   // raw arm value at net budget
  50:   }
  51:   const v = delivered2x2(cNet, { ...opts, delivery });
  52:   return (arm === 'C' ? v.cells.S : v.cells.A2) * v.sumO;
  53: }
  54: 
  55: export function e10(cfg, { nWorlds = NUM.n_worlds.value, seed = NUM.seed.value, delivery = DELIVERY, planning = PLANNING, costs = COSTS } = {}) {
  56:   const kC = costs.kappa_C, kD = costs.kappa_D;
  57:   const via = costs.planningOn ? 'E9 (planning ON)' : 'E5 (planning OFF)';
  58:   // full-budget value base (both arms, for value-only) and its oracle — the COMMON normalizer.
  59:   const full = costs.planningOn ? fullStack(cfg, { nWorlds, seed, delivery, planning }) : delivered2x2(cfg, { nWorlds, seed, delivery });
  60:   const Ofull = full.sumO;
  61:   const sq = costs.planningOn ? full.statusQuo : full.cells.S;
  62:   const cv = costs.planningOn ? full.coreV0 : full.cells.A2;
  63:   // NET-budget delivered value of each arm, normalized by the COMMON full-budget oracle.
  64:   const V_C = armValueNet(cfg, { nWorlds, seed }, costs, delivery, planning, 'C', kC) / Ofull;
  65:   const V_D = armValueNet(cfg, { nWorlds, seed }, costs, delivery, planning, 'D', kD) / Ofull;
  66:   const valueGain = cv - sq;
  67:   const costGain = V_D - V_C;
  68:   return {
  69:     planningOn: costs.planningOn, via, kappa_C: kC, kappa_D: kD,
  70:     valueOnly: { statusQuo: sq, coreV0: cv, gain: valueGain },
  71:     withCosts: { statusQuo: V_C, coreV0: V_D, gain: costGain },
  72:     adminCostContribution: costGain - valueGain,   // net-budget admin-cost effect on the Core-v0 − status-quo gap
  73:   };
  74: }
  75: 
  76: function main() {
  77:   const pct = (x) => (x >= 0 ? '+' : '') + (100 * x).toFixed(1) + '%';
  78:   import('./scenario-configs.mjs').then(({ SCENARIO_WORLD: W, PROBABLE }) => {
  79:     const cfg = { ...baseConfig(), ...W, ...PROBABLE };
  80:     const r = e10(cfg, { nWorlds: 1200 });
  81:     safeLog('E10 — the ADMINISTRATIVE-COST layer on the delivered-value stack (PROBABLE world). Percentages of the');
  82:     safeLog('full-information greedy REFERENCE. PLANNING is OFF by default; admin cost reduces the BUDGET (net-budget');
  83:     safeLog('accounting), charged SYMMETRICALLY across arms.\n');
  84:     safeLog(`value base: ${r.via}   ·   κ_C=${r.kappa_C} (central allocation/prioritization/study machinery) · κ_D=${r.kappa_D} (Core v0 platform + its control machinery)  [magnitude DECLARED]`);
  85:     safeLog(`VALUE ONLY (costs off):   status quo ${pct(r.valueOnly.statusQuo)} · Core v0 ${pct(r.valueOnly.coreV0)}  → gain ${pct(r.valueOnly.gain)}`);
  86:     safeLog(`WITH ADMIN COSTS (net budget): status quo ${pct(r.withCosts.statusQuo)} · Core v0 ${pct(r.withCosts.coreV0)}  → gain ${pct(r.withCosts.gain)}`);
  87:     safeLog(`  admin-cost effect on the gap: ${pct(r.adminCostContribution)} (points of the reference).\n`);
  88:     safeLog('  → Under symmetric net-budget accounting the admin-cost layer is roughly NEUTRAL (small, and can go either');
  89:     safeLog('    way): because greedy funding cuts marginal low-value projects first, the value loss is sub-proportional,');
  90:     safeLog('    and Core v0 delivers on a larger base. The Core v0 advantage comes from SELECTION and DELIVERY, NOT from');
  91:     safeLog('    an admin-cost saving. A decisive cost advantage would need κ_C ≫ κ_D beyond what symmetric accounting supports.\n');
  92: 
  93:     const off = e10(cfg, { nWorlds: 1200, costs: { ...COSTS, kappa_C: 0, kappa_D: 0 } });
  94:     safeLog(`switch check — costs OFF (κ=0): with-costs gain ${pct(off.withCosts.gain)} == value-only gain ${pct(off.valueOnly.gain)} (reduces to the value stack).`);
  95: 
  96:     safeLog('\nAdmin-cost sensitivity (κ_D=0.05 fixed; κ_C swept — magnitude DECLARED):');
  97:     safeLog('   κ_C     admin-cost effect on the gap (points of reference)');
  98:     for (const kc of [0.05, 0.08, 0.15, 0.30]) {
  99:       const rk = e10(cfg, { nWorlds: 800, costs: { ...COSTS, kappa_C: kc } });
 100:       safeLog(`   ${kc.toFixed(2)}      ${pct(rk.adminCostContribution).padStart(7)}`);
 101:     }
 102:     safeLog('   → the admin-cost effect is small and only turns clearly positive at large κ_C; magnitudes DECLARED,');
 103:     safeLog('     direction only (central allocation machinery cost > platform cost — IDB / low e-government platform costs).');
 104:   });
 105: }
 106: import { fileURLToPath } from 'node:url';
 107: if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) main();
===== scripts/simulation/e4-v5/e10-costs-test.mjs =====
   1: // E10 cost-layer tests — the switches (planning OFF/ON, costs OFF/ON) and the cost composition.
   2: // Run: npm run e10:costs:test
   3: import { e10, COSTS } from './e10-costs.mjs';
   4: import { delivered2x2 } from './e5-delivery.mjs';
   5: import { baseConfig } from './contract.mjs';
   6: import { SCENARIO_WORLD as W, PROBABLE } from './scenario-configs.mjs';
   7: 
   8: let pass = 0, fail = 0;
   9: const approx = (a, b, tol) => Math.abs(a - b) <= tol;
  10: function check(name, cond, detail = '') { if (cond) { pass++; console.log(`  ok   ${name}`); } else { fail++; console.log(`  FAIL ${name}  ${detail}`); } }
  11: 
  12: const cfg = { ...baseConfig(), ...W, ...PROBABLE };
  13: const NW = 800;
  14: 
  15: // 1) COSTS OFF (κ=0) reduces E10 to the value stack.
  16: {
  17:   const r = e10(cfg, { nWorlds: NW, costs: { ...COSTS, kappa_C: 0, kappa_D: 0 } });
  18:   check('costs off: with-costs gain == value-only gain', approx(r.withCosts.gain, r.valueOnly.gain, 1e-12), `${r.withCosts.gain} vs ${r.valueOnly.gain}`);
  19:   check('costs off: admin-cost contribution == 0', approx(r.adminCostContribution, 0, 1e-12));
  20: }
  21: 
  22: // 2) PLANNING OFF (default) uses the E5 value base exactly (status quo = S cell, Core v0 = A2 cell).
  23: {
  24:   const r = e10(cfg, { nWorlds: NW });
  25:   const e5 = delivered2x2(cfg, { nWorlds: NW });
  26:   check('planning off by default (via E5)', r.planningOn === false && r.via.startsWith('E5'));
  27:   check('planning-off value base == E5 S/A2 exactly', approx(r.valueOnly.statusQuo, e5.cells.S, 1e-12) && approx(r.valueOnly.coreV0, e5.cells.A2, 1e-12), `${r.valueOnly.statusQuo} vs ${e5.cells.S}`);
  28: }
  29: 
  30: // 3) PLANNING ON switches the value base to E9 (the full stack).
  31: {
  32:   const r = e10(cfg, { nWorlds: NW, costs: { ...COSTS, planningOn: true } });
  33:   check('planning on switches the value base to E9', r.planningOn === true && r.via.startsWith('E9'));
  34: }
  35: 
  36: // 4) NET-BUDGET accounting: the value loss from admin cost is SUB-proportional to κ (greedy cuts marginal low-value
  37: //    projects first), so the arm's value at net budget is ABOVE the naive value·(1−κ) haircut.
  38: {
  39:   const r = e10(cfg, { nWorlds: NW });
  40:   check('central net-budget value ≥ naive haircut (sub-proportional)', r.withCosts.statusQuo >= r.valueOnly.statusQuo * (1 - r.kappa_C) - 1e-9, `${r.withCosts.statusQuo} vs ${r.valueOnly.statusQuo * (1 - r.kappa_C)}`);
  41:   check('Core v0 net-budget value ≥ naive haircut (sub-proportional)', r.withCosts.coreV0 >= r.valueOnly.coreV0 * (1 - r.kappa_D) - 1e-9);
  42:   check('costs reduce each arm below its full-budget value', r.withCosts.statusQuo < r.valueOnly.statusQuo && r.withCosts.coreV0 < r.valueOnly.coreV0);
  43: }
  44: 
  45: // 5) COST DIRECTION under net-budget accounting: the admin-cost effect on the gap is SMALL at the anchored κ and grows
  46: //    (turns clearly positive) only at large κ_C. Monotone in κ_C.
  47: {
  48:   const base  = e10(cfg, { nWorlds: NW });
  49:   const large = e10(cfg, { nWorlds: NW, costs: { ...COSTS, kappa_C: 0.30 } });
  50:   check('admin-cost effect is small at the anchored κ (|·| < 3pp)', Math.abs(base.adminCostContribution) < 0.03, `contrib ${base.adminCostContribution}`);
  51:   check('a much larger κ_C makes the admin-cost effect more positive', large.adminCostContribution > base.adminCostContribution);
  52:   check('the core value advantage survives the cost layer (with-costs gain > 0.4)', base.withCosts.gain > 0.4, `gain ${base.withCosts.gain}`);
  53: }
  54: 
  55: console.log(`\nE10 costs: ${pass} passed, ${fail} failed.`);
  56: process.exit(fail ? 1 : 0);
===== scripts/simulation/e4-v5/adapter.mjs =====
   1: // E4 v1.14 — the render adapter (mechanical embargo). Official E4 evidence/scenarios/frontier text routes through
   2: // here (renderReport / safeLog). It (a) validates against the closed schema, and (b) rejects the TESTED CLASSES of
   3: // institution-performance multiplier notation (see the NOTE on assertNoEmbargoedTokens and the test suite) — NOT a
   4: // proof against every conceivable obfuscation, and it does not by itself route every repository artifact.
   5: // m_hat is a SIGNED FRACTION of the oracle (parity at 0), never a ratio-with-parity-1 and never suffixed with 'x'.
   6: import { EMBARGO_TOKENS } from './contract.mjs';
   7: import { validateOutput } from './schema.mjs';
   8: 
   9: // Normalize away zero-width chars and map Unicode confusables to ASCII so a Cyrillic 'х', the multiplication/cross
  10: // signs (× ✕ ✖ ⨯), a non-breaking hyphen, a division slash, etc. cannot smuggle a multiplier/ratio past the filter
  11: // (rev-repro M2 + Codex v8 broader bypasses).
  12: const ZERO_WIDTH = /[​‌‍⁠﻿­]/g; // ZWSP/ZWNJ/ZWJ/word-joiner(U+2060)/BOM/soft-hyphen(U+00AD)
  13: const HTML_MULT  = /&times;|&#0*215;|&#x0*d7;/gi;   // HTML-entity multiplication sign → x
  14: const CONF_X = /[×✕✖⨯хХｘＸ]/g;               // → x
  15: const CONF_HYPHEN = /[‐‑‒–—]/g; // various hyphens/dashes → '-'
  16: const CONF_SLASH = /[⁄∕／]/g;   // fraction/division/fullwidth slash → '/'
  17: const NUMWORD = 'one|two|three|four|five|six|seven|eight|nine|ten|twenty|thirty|forty|fifty|hundred|thousand|many|several';
  18: const MULT_SUFFIX = /\d\s*x/i;                 // a number followed by x (after normalization)
  19: const NUM_FOLD    = new RegExp(`(\\d(\\.\\d+)?|\\b(${NUMWORD}))[\\s-]*(fold|times)\\b`, 'i');   // "2.2-fold","two times","fourfold"
  20: const WORD_MULT   = /\b(twice|thrice|double|triple|quadruple)\b/i;   // bare word multipliers
  21: const RATIO_TOKEN = /\b[dc]\s*\/\s*[cd]\b/i;   // D/C or C/D, any case
  22: const RATIO_PHRASE = /\b(value|performance|institution\w*)\s+ratio\b|\bratio\s*\(?~?\s*\d/i;  // "value ratio (~2.7)" semantic multiplier (Adversarial R1 #4/#5)
  23: 
  24: // NOTE: this rejects the TESTED token classes (ASCII/Unicode/confusable/HTML-entity 'x' after a number;
  25: // numeric or number-word N-fold / N-times; bare twice/double/triple/quadruple; D/C or C/D any case; zero-width
  26: // splits). It is not a proof against every conceivable obfuscation — see the test suite for the covered classes.
  27: export function assertNoEmbargoedTokens(text) {
  28:   const norm = text.replace(ZERO_WIDTH, '').replace(HTML_MULT, 'x').replace(CONF_X, 'x').replace(CONF_HYPHEN, '-').replace(CONF_SLASH, '/');
  29:   const hits = [];
  30:   if (MULT_SUFFIX.test(norm)) hits.push('multiplier-suffix (number+x, incl. Unicode/HTML confusables)');
  31:   if (NUM_FOLD.test(norm)) hits.push('N-fold / N-times multiplier phrasing (numeric or word)');
  32:   if (WORD_MULT.test(norm)) hits.push('word multiplier (twice/thrice/double/triple/quadruple)');
  33:   if (RATIO_TOKEN.test(norm)) hits.push('institution ratio (D/C or C/D, any case)');
  34:   if (RATIO_PHRASE.test(norm)) hits.push('semantic performance-ratio phrasing (value/performance ratio, ratio(~N))');
  35:   for (const tok of EMBARGO_TOKENS) if (text.includes(tok)) hits.push(`token '${tok}'`);
  36:   if (hits.length) throw new Error(`[embargo] rendered text contains forbidden performance notation: ${hits.join(', ')}`);
  37:   return true;
  38: }
  39: 
  40: // A print helper that routes every line through the embargo before emitting (for scenarios/frontier that print directly).
  41: export function safeLog(...lines) { const t = lines.join(' '); assertNoEmbargoedTokens(t); console.log(t); }
  42: 
  43: export function renderReport(out) {
  44:   const errs = validateOutput(out);
  45:   if (errs.length) throw new Error(`[embargo] output failed closed schema: ${errs.join('; ')}`);
  46:   const pct = (x) => (100 * x).toFixed(1) + '%';                 // signed fraction of oracle, NOT a multiplier
  47:   const mag = out.m_Ralpha
  48:     ? Object.entries(out.m_Ralpha).map(([al, iv]) => `  α=${al}: [${pct(iv[0])}, ${pct(iv[1])}] of oracle`).join('\n')
  49:     : '  (magnitude layer not computed)';
  50:   const sh = (x) => (100 * x).toFixed(0) + '%';
  51:   const text = [
  52:     `E4 evidence — contract ${out.contract_version} — θ:${out.theta_id}`,
  53:     `  m̂ (signed fraction of full-information oracle, parity at 0): ${pct(out.m_hat)}  CI=[${pct(out.ci[0])}, ${pct(out.ci[1])}]`,
  54:     `  sign backbone over D_F: Core v0 wins ${sh(out.df_dist_share)} of sampled θ-points · central ${sh(out.df_cent_share)} · parity ${sh(out.df_par_share)}  (a COUNT of resolved points, not a probability)`,
  55:     `  magnitude over R_α (declared sensitivity boxes; a value >100% means the losing arm destroys value, so the gap exceeds the oracle):`,
  56:     mag,
  57:     `  status → sign:${out.sign_status}  materiality:${out.materiality_status}  degeneracy:${out.degeneracy_status}  numerical:${out.numerical_status}`,
  58:     `  π_deg (degenerate-world share): ${pct(out.pi_deg)}`,
  59:   ].join('\n');
  60:   assertNoEmbargoedTokens(text);
  61:   return text;
  62: }

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$f='"'scripts/simulation/e4-v5/e5-delivery.mjs'; "'$lines=Get-Content -LiteralPath $f; foreach($range in @(@(1,210),@(211,376))){ "===== $f $($range[0])-$($range[1]) ====="; for($i=$range[0];$i -le [Math]::Min($range[1],$lines.Count);$i++){ '"'{0,4}: {1}' -f "'$i,$lines[$i-1] } }; $f='"'scripts/simulation/e4-v5/e5-delivery-test.mjs'; \"===== "'$f ====="; $i=0; Get-Content -LiteralPath $f | ForEach-Object {$i++; '"'{0,4}: {1}' -f "'$i,$_}' in C:\devel\claude-projects\distributed-governance-research
 succeeded in 214ms:
===== scripts/simulation/e4-v5/e5-delivery.mjs 1-210 =====
   1: // E5 v1.14 — the DELIVERED-VALUE experiment: SELECTION × DELIVERY, rebuilt on the clean E4 engine.
   2: //
   3: // E4 measures SELECTION quality at matched budget assuming perfect delivery (every funded project delivers its full
   4: // value). E5 adds the DELIVERY layer as an INDEPENDENT regime (opaque status-quo vs verified/architecture), so the two
   5: // layers can be read SEPARATELY and jointly on the SAME funded portfolios — a clean 2×2, not the legacy engine that
   6: // tied delivery to the selection arm. No compound multiplier is reported; each layer is a percentage of the oracle
   7: // reference, and the composition (additive vs multiplicative) is READ OFF the experiment, not assumed.
   8: //
   9: //   Selection regime:  central (M_C + credit tilt)   |   distributed (M_D coverage)
  10: //   Delivery regime:   opaque (weak control)         |   verified (milestone-gated + reputation)
  11: //
  12: //   Arm S  = central   × opaque    (status quo)
  13: //   Arm A1 = central   × verified  (delivery effect, selection held central)
  14: //   Arm A3 = distributed × opaque  (selection effect, delivery held weak)
  15: //   Arm A2 = distributed × verified (the full architecture)
  16: //
  17: // Delivery model (micro-founded, one-shot, Okun's leaky bucket; Model-1 incentive condition, deterrence ex ante):
  18: // each funded project draws an executor. A share pi_hon are intrinsically honest (deliver 1−loss). The rest are
  19: // opportunistic and DIVERT iff temptation (mostly U(0,1), plus a grand-corruption tail) exceeds the regime deterrent  det = p_det·[(1−a(1−r)) + rep],
  20: // where a=up-front advance exposure, r=recovery, rep=reputational stake. A diverting executor loses a·(1−r) of the
  21: // budget (the unrecovered advance) → delivers 1 − a(1−r) − loss; an honest/deterred one delivers 1 − loss.
  22: // Delivered value V = Σ_{j∈funded} S_j · f_j. Leakage bands are literature-anchored (see DELIVERY notes).
  23: //
  24: // Run: npm run e5:delivery
  25: 
  26: import { generateWorld, makeRng, fundedSet } from './engine.mjs';
  27: import { baseConfig, NUM } from './contract.mjs';
  28: import { safeLog } from './adapter.mjs';
  29: 
  30: // ---- delivery regimes (module-local; NOT E4 THETA, so the frozen E4 contract/hash is untouched) ----
  31: // Directions anchored to the corpus Models 1–2 and the delivery literature; magnitudes declared, not fitted:
  32: //   opaque  central case ~25% loss (IMF PIE-X public-investment inefficiency 0.20–0.30) with ~24% of executors
  33: //           diverting (Olken 2007 Indonesian roads: 24% missing); pessimistic end reaches the Uganda 87% (Reinikka &
  34: //           Svensson 2004) extreme by raising temptation / lowering pi_hon.
  35: //   verified ~2.5% loss: milestone-gating + retention + recovery + a reputational stake make the deterrent bind ex
  36: //           ante, so few opportunistic executors divert; a grand-corruption tail leaves a small RESIDUAL (not a mechanical zero).
  37: // Calibration (friendly round, 2026-07-12; anchors in audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md).
  38: // ANCHORED: opaque central divert ~24% (Olken 2007 JPE 115(2), Indonesia roads); ex-ante deterrence ⇒ verified ~0
  39: //   diversion (Olken 2007; Avis-Ferraz-Finan 2018 JPE 126(5); Becker 1968). DECLARED (mechanism sound, no citable
  40: //   magnitude): milestone-gating effectiveness, the reputational stake `rep`. Transport rules for the paper: IMF ~30%
  41: //   (Making Public Investment More Efficient 2015) is PROCESS inefficiency, not theft; Reinikka & Svensson 2004 QJE
  42: //   119(2) ~87% is a TAIL, not the central case; monitoring effect sizes are from service-delivery RCTs, not fund
  43: //   tracing (out-of-domain lift).
  44: // Calibration is an IDENTIFIED-SET reference, NOT a field estimate (friendly round convergent view, Codex + agent):
  45: // the opaque case reproduces an Olken-2007-centered ~24–28% VALUE-loss moment (not a claim about executor incidence);
  46: // verified advances/guarantees follow World Bank standard procurement (10% advance, ~10% performance guarantee); the
  47: // verified regime's LOW-but-nonzero residual diversion is a CONDITIONAL ex-ante-deterrence result (Olken 2007; Avis-Ferraz-Finan
  48: // 2018; Becker 1968), not an empirical zero. Community coverage lifts DETECTION only (mon_detect, small/fragile:
  49: // Björkman-Svensson 2009 QJE with failed replications; Molina et al. 2016); RECOVERY needs institutional follow-up, so
  50: // mon_recovery=0 for community-only coverage (Afridi-Iversen 2014 MGNREGA). Report R=0 robustness always.
  51: export const DELIVERY = {
  52:   pi_hon:   0.78,   // honest share; identified so the opaque case hits the Olken-centered value-loss moment (not observed prevalence)
  53:   loss_hon: 0.05,   // ordinary execution loss (Rasul–Rogger supports a substantial upper tail; the scalar is DECLARED)
  54:   tempt_tail: 0.10, // GRAND-CORRUPTION TAIL (Adversarial R1 #8): a fraction of opportunistic executors face temptation
  55:                     //     ABOVE any feasible deterrent, so even the strong verified regime keeps a RESIDUAL diversion —
  56:                     //     it is NOT a mechanical zero. Olken 2007: audits cut missing expenditure ~8pp but did not
  57:                     //     eliminate it. With this tail, verified diversion incidence is small but nonzero (~a few %).
  58:   //                p_det  a(advance) r(recovery) gamma(guarantee) rep(reputation)
  59:   opaque:   { p_det: 0.04, a: 0.80, r: 0.00, gamma: 0.00, rep: 0.00, note: 'weak control: announced-audit-level exposure, unprotected advances, no recovery/guarantee/reputation' },
  60:   verified: { p_det: 0.75, a: 0.20, r: 0.50, gamma: 0.10, rep: 0.40, note: 'architecture: 20% advance exposure (DECLARED reference; World Bank normal advance ~10%) + ~10% performance guarantee + recovery + reputational stake (magnitudes DECLARED)' },
  61:   // MONITORING COUPLING (step 2), SPLIT into two channels (Codex + agent): Core v0's distributed coverage observes
  62:   // delivery, but community coverage credibly lifts only DETECTION (deterrence), not RECOVERY (clawback needs
  63:   // institutional follow-up). p_det_eff = p_det + mon_detect·(1−p_det); r_eff = r + mon_recovery·(1−r).
  64:   mon_detect:   0.0,   // coverage-only detection lift; anchored band 0.0–0.10 (ref 0.05); small + fragile
  65:   mon_recovery: 0.0,   // coverage-only recovery lift; 0 for community-only (formal linkage 0.09–0.36 = the verified regime)
  66:   // VALUE/COMPLEXITY-CORRELATED DELIVERY RISK (robustness, breaks delivery↔value independence): bigger/more complex
  67:   // projects are harder to monitor, so effective detection falls with the project's cost percentile:
  68:   //   p_det_proj = p_det · (1 − val_risk · costPct). Default 0 = delivery independent of project size (the base model).
  69:   //   >0 makes the delivered fraction depend on WHICH projects are funded, so the cross-arm delivery efficiencies can
  70:   //   diverge (a genuine, non-identity interaction between selection and delivery).
  71:   val_risk: 0.0,
  72: };
  73: 
  74: function deterrent(reg, pDet) { return pDet * ((1 - reg.a * (1 - reg.r)) + (reg.gamma || 0) + reg.rep); }
  75: 
  76: // Temptation draw: mostly U(0,1), plus a grand-corruption TAIL in [1,2] with probability tempt_tail — so a strong
  77: // (deterrent>1) verified regime still leaves a residual diversion instead of a mechanical zero (Adversarial R1 #8).
  78: export function sampleTempt(rng, del) { return rng.u() < (del.tempt_tail || 0) ? 1 + rng.u() : rng.u(); }
  79: 
  80: // The selecting arm's effective delivery regime: distributed coverage lifts detection (and, only with institutional
  81: // linkage, recovery). mDet/mRec are the coverage lifts (0 for the central arm).
  82: function coupledRegime(reg, mDet, mRec) {
  83:   if (!mDet && !mRec) return reg;
  84:   return { ...reg, p_det: reg.p_det + mDet * (1 - reg.p_det), r: reg.r + mRec * (1 - reg.r) };
  85: }
  86: 
  87: // Per-project delivered fraction + diversion flag. detMult scales this project's detection (value/complexity risk).
  88: function deliveredFraction(reg, honest, tempt, del, detMult) {
  89:   if (honest) return { f: 1 - del.loss_hon, diverts: false };
  90:   const diverts = tempt > deterrent(reg, reg.p_det * detMult);   // opportunistic: divert iff temptation beats the deterrent
  91:   if (!diverts) return { f: 1 - del.loss_hon, diverts: false };
  92:   const f = 1 - reg.a * (1 - reg.r) - del.loss_hon;  // loses the unrecovered advance (recovery r may be monitoring-lifted)
  93:   return { f: f < 0 ? 0 : f, diverts: true };
  94: }
  95: 
  96: // Delivered value + robustness diagnostics for a funded set under a regime, reusing per-project executor draws (shared
  97: // across all four cells — the design's matched seeds). mDet/mRec = monitoring lifts; cfg gives the cost range for the
  98: // value/complexity risk (bigger projects harder to monitor). Exported so E9 (the full stack) reuses the SAME delivery
  99: // machinery on top of a planning layer — E9 = planning × E5.
 100: export function deliveredCell(projects, funded, reg, exec, del, mDet, mRec, cfg) {
 101:   const eff = coupledRegime(reg, mDet, mRec);
 102:   const vr = del.val_risk || 0, span = cfg.c_hi - cfg.c_lo;
 103:   let v = 0, lost = 0, nDiv = 0;
 104:   for (const j of funded) {
 105:     const costPct = span > 0 ? (projects[j].c - cfg.c_lo) / span : 0;     // 0..1 complexity proxy
 106:     const detMult = 1 - vr * costPct;                                     // harder to monitor when bigger
 107:     const { f, diverts } = deliveredFraction(eff, exec.honest[j], exec.tempt[j], del, detMult);
 108:     v += projects[j].S * f;
 109:     lost += projects[j].S * (1 - f);                 // value not delivered (diversion + ordinary loss)
 110:     if (diverts) nDiv++;
 111:   }
 112:   return { v, lost, nDiv, nFund: funded.length };
 113: }
 114: 
 115: // One world: worlds are drawn from `rng` (identical to the E4 estimand's stream), executors from a SEPARATE `execRng`
 116: // so E5 reduces to E4 EXACTLY on the same seed. Evaluate the oracle (perfect delivery) and the four cells.
 117: function runWorld2x2(cfg, rng, execRng, del) {
 118:   const projects = generateWorld(cfg, rng);
 119:   if (projects.length === 0) return null;
 120:   let totalCost = 0; for (const pr of projects) totalCost += pr.c;
 121:   const budget = cfg.phi * totalCost;
 122: 
 123:   const honest = new Array(projects.length), tempt = new Array(projects.length);
 124:   for (let j = 0; j < projects.length; j++) { honest[j] = execRng.u() < del.pi_hon; tempt[j] = sampleTempt(execRng, del); }
 125:   const exec = { honest, tempt };
 126: 
 127:   const setC = fundedSet(projects, 'M_C', cfg, budget, { creditTilt: true });
 128:   const setD = fundedSet(projects, 'M_D', cfg, budget);
 129:   const setO = fundedSet(projects, 'S',   cfg, budget);
 130: 
 131:   let O = 0; for (const j of setO) O += projects[j].S;      // oracle at PERFECT delivery = the E4 reference
 132:   const selC = (() => { let s = 0; for (const j of setC) s += projects[j].S; return s; })();
 133:   const selD = (() => { let s = 0; for (const j of setD) s += projects[j].S; return s; })();
 134: 
 135:   const mD = del.mon_detect || 0, mR = del.mon_recovery || 0;   // distributed arm's monitoring lifts
 136:   return {
 137:     O, selC, selD,
 138:     S:  deliveredCell(projects, setC, del.opaque,   exec, del, 0,  0,  cfg),   // central: no coverage lift
 139:     A1: deliveredCell(projects, setC, del.verified, exec, del, 0,  0,  cfg),
 140:     A3: deliveredCell(projects, setD, del.opaque,   exec, del, mD, mR, cfg),   // distributed: coverage lifts detection (+recovery if linked)
 141:     A2: deliveredCell(projects, setD, del.verified, exec, del, mD, mR, cfg),
 142:   };
 143: }
 144: 
 145: // Ratio-of-sums estimand over worlds (robust; a tiny-O world cannot dominate). Everything normalized by ΣO. Worlds and
 146: // executors use SEPARATE PRNG streams, so the world stream is identical to the E4 estimand's (exact reduction). Also
 147: // returns diversion incidence, leakage, and a world-cluster bootstrap CI on the full-architecture gain.
 148: export function delivered2x2(cfg, { nWorlds = NUM.n_worlds.value, seed = NUM.seed.value, delivery = DELIVERY } = {}) {
 149:   validateDelivery(delivery);
 150:   const rng = makeRng(seed);
 151:   const execRng = makeRng((seed ^ 0x5bd1e995) >>> 0);      // separate stream ⇒ worlds match the E4 estimand exactly
 152:   const W = [];
 153:   const t = { O: 0, selC: 0, selD: 0 };
 154:   for (const c of ['S', 'A1', 'A3', 'A2']) { t[c + 'v'] = 0; t[c + 'lost'] = 0; t[c + 'div'] = 0; t[c + 'fund'] = 0; }
 155:   for (let w = 0; w < nWorlds; w++) {
 156:     const r = runWorld2x2(cfg, rng, execRng, delivery);
 157:     if (!r || !(r.O > 0)) continue;
 158:     W.push({ O: r.O, Sv: r.S.v, A1v: r.A1.v, A3v: r.A3.v, A2v: r.A2.v });
 159:     t.O += r.O; t.selC += r.selC; t.selD += r.selD;
 160:     for (const c of ['S', 'A1', 'A3', 'A2']) { t[c + 'v'] += r[c].v; t[c + 'lost'] += r[c].lost; t[c + 'div'] += r[c].nDiv; t[c + 'fund'] += r[c].nFund; }
 161:   }
 162:   const O = t.O, eff = (x) => x / O;
 163:   const sC = eff(t.selC), sD = eff(t.selD);                 // SELECTION efficiencies (perfect delivery) = the E4 numbers
 164:   const S = eff(t.Sv), A1 = eff(t.A1v), A3 = eff(t.A3v), A2 = eff(t.A2v);
 165:   const dCol = t.selC ? t.Sv / t.selC : NaN, dCvr = t.selC ? t.A1v / t.selC : NaN;   // per-arm delivered fractions
 166:   const dDop = t.selD ? t.A3v / t.selD : NaN, dDvr = t.selD ? t.A2v / t.selD : NaN;
 167:   const inc = (c) => t[c + 'fund'] ? t[c + 'div'] / t[c + 'fund'] : NaN;             // diversion incidence per cell
 168:   const lk  = (c) => (t[c + 'v'] + t[c + 'lost']) > 0 ? t[c + 'lost'] / (t[c + 'v'] + t[c + 'lost']) : NaN;  // value leakage
 169:   // world-cluster bootstrap CIs (inner MC variability only) for the reported cells AND effects, not just the full gain.
 170:   const B = NUM.bootstrap_reps.value, bRng = makeRng((seed ^ 0x9e3779b9) >>> 0);
 171:   const bs = { S: [], A1: [], A3: [], A2: [], full: [], dEffC: [], dEffD: [], sEffO: [], sEffV: [], inter: [] };
 172:   if (W.length) for (let b = 0; b < B; b++) {
 173:     let o = 0, s = 0, a1 = 0, a3 = 0, a2 = 0;
 174:     for (let k = 0; k < W.length; k++) { const ww = W[Math.floor(bRng.u() * W.length)]; o += ww.O; s += ww.Sv; a1 += ww.A1v; a3 += ww.A3v; a2 += ww.A2v; }
 175:     if (o <= 0) continue;
 176:     const bS = s / o, bA1 = a1 / o, bA3 = a3 / o, bA2 = a2 / o;
 177:     bs.S.push(bS); bs.A1.push(bA1); bs.A3.push(bA3); bs.A2.push(bA2);
 178:     bs.full.push(bA2 - bS); bs.dEffC.push(bA1 - bS); bs.dEffD.push(bA2 - bA3);
 179:     bs.sEffO.push(bA3 - bS); bs.sEffV.push(bA2 - bA1); bs.inter.push(bA2 - bA1 - bA3 + bS);
 180:   }
 181:   const ci = (arr) => { if (!arr.length) return [NaN, NaN]; const a = [...arr].sort((x, y) => x - y); const q = (p) => a[Math.max(0, Math.min(a.length - 1, Math.floor(p * a.length)))]; return [q((1 - NUM.ci_level.value) / 2), q((1 + NUM.ci_level.value) / 2)]; };
 182:   const fullCI = ci(bs.full);
 183:   return {
 184:     n: W.length,
 185:     sumO: O,                                                  // raw oracle sum (for E10 net-budget accounting vs a common full-budget oracle)
 186:     selection: { central: sC, distributed: sD },
 187:     delivery:  { centralOpaque: dCol, centralVerified: dCvr, distributedOpaque: dDop, distributedVerified: dDvr },
 188:     monitoringDividend: { verified: dDvr - dCvr, opaque: dDop - dCol },
 189:     cells: { S, A1, A3, A2 },
 190:     diversionIncidence: { S: inc('S'), A1: inc('A1'), A3: inc('A3'), A2: inc('A2') },
 191:     leakage:            { S: lk('S'),  A1: lk('A1'),  A3: lk('A3'),  A2: lk('A2') },
 192:     deliveryEffect:  { atCentral: A1 - S,  atDistributed: A2 - A3 },
 193:     selectionEffect: { atOpaque:  A3 - S,  atVerified:    A2 - A1 },
 194:     interaction: (A2 - A1 - A3 + S),                         // >0 ⇒ verified delivery AMPLIFIES the selection gain
 195:     full: A2 - S, fullCI,                                    // full architecture vs status quo (pp of oracle) + bootstrap CI
 196:     ci: {                                                    // 95% bootstrap CIs for every reported quantity
 197:       cells: { S: ci(bs.S), A1: ci(bs.A1), A3: ci(bs.A3), A2: ci(bs.A2) },
 198:       deliveryEffect:  { atCentral: ci(bs.dEffC), atDistributed: ci(bs.dEffD) },
 199:       selectionEffect: { atOpaque: ci(bs.sEffO),  atVerified: ci(bs.sEffV) },
 200:       interaction: ci(bs.inter),
 201:     },
 202:     // composition: each cell equals its own selection efficiency times its own delivered fraction (an accounting
 203:     // identity, EXACT by construction — delivery is applied per project). The additive prediction misses by the interaction.
 204:     multiplicativeIdentityA2: sD * dDvr,
 205:     additivePredictionA2: S + (A1 - S) + (A3 - S),
 206:   };
 207: }
 208: 
 209: // Step 1 — SENSITIVITY: sweep the opaque regime from the IMF/Olken central band toward the Uganda 87% pessimistic
 210: // extreme (by lowering detection and the honest share), reporting how the delivery effect and the full-architecture
===== scripts/simulation/e4-v5/e5-delivery.mjs 211-376 =====
 211: // gain respond. Returns rows {leak, deliveryEffectAtDistributed, full}.
 212: export function sweepOpaque(cfg, { nWorlds = 800, points = null } = {}) {
 213:   const grid = points || [
 214:     { p_det: 0.12, pi_hon: 0.75 },   // mild  (~IMF PIE-X 20-25% loss)
 215:     { p_det: 0.10, pi_hon: 0.70 },   // base  (~30% loss; Olken 24% divert)
 216:     { p_det: 0.06, pi_hon: 0.55 },   // heavy (~50% loss)
 217:     { p_det: 0.03, pi_hon: 0.35 },   // severe declared stress
 218:     { p_det: 0.01, pi_hon: 0.20 },   // very severe declared stress (~69% loss; the Uganda ~87% capture is contextual, not this row)
 219:   ];
 220:   const rows = [];
 221:   for (const g of grid) {
 222:     const del = { ...DELIVERY, pi_hon: g.pi_hon, opaque: { ...DELIVERY.opaque, p_det: g.p_det } };
 223:     const r = delivered2x2(cfg, { nWorlds, delivery: del });
 224:     rows.push({ leak: 1 - r.delivery.centralOpaque, deliveryEffectAtDistributed: r.deliveryEffect.atDistributed, full: r.full, A3: r.cells.A3 });
 225:   }
 226:   return rows;
 227: }
 228: 
 229: // Genuinely fail-closed validation of a delivery config (Codex round-2: NaN/Infinity and a MISSING `rep` previously
 230: // slipped through, and a missing rep silently makes the deterrent NaN — classifying every opportunist as deterred).
 231: export function validateDelivery(del) {
 232:   const bad = [];
 233:   const fin  = (k, v) => { if (typeof v !== 'number' || !Number.isFinite(v)) { bad.push(`${k}=${v} must be a finite number`); return false; } return true; };
 234:   const unit = (k, v) => { if (fin(k, v) && (v < 0 || v > 1)) bad.push(`${k}=${v} must be in [0,1]`); };
 235:   unit('pi_hon', del.pi_hon); unit('loss_hon', del.loss_hon);
 236:   unit('mon_detect', del.mon_detect ?? 0); unit('mon_recovery', del.mon_recovery ?? 0); unit('val_risk', del.val_risk ?? 0);
 237:   for (const name of ['opaque', 'verified']) {
 238:     const reg = del[name];
 239:     if (!reg || typeof reg !== 'object') { bad.push(`${name} regime missing`); continue; }
 240:     for (const k of ['p_det', 'a', 'r', 'rep']) unit(`${name}.${k}`, reg[k]);   // rep is REQUIRED + finite (deterrent uses it)
 241:     if (fin(`${name}.gamma`, reg.gamma ?? 0) && (reg.gamma ?? 0) < 0) bad.push(`${name}.gamma must be >= 0`);
 242:   }
 243:   if (bad.length) throw new Error(`[e5-delivery] invalid delivery config: ${bad.join('; ')}`);
 244:   return true;
 245: }
 246: 
 247: // 20-seed replication of the full-architecture gain: across-seed mean and spread (Codex robustness item; complements
 248: // the inner bootstrap CI with between-seed variability).
 249: export function replicateSeeds(cfg, { nSeeds = 20, nWorlds = 400, delivery = DELIVERY } = {}) {
 250:   const vals = [];
 251:   for (let s = 0; s < nSeeds; s++) vals.push(delivered2x2(cfg, { nWorlds, seed: (NUM.seed.value + s * 0x9e3779b1) >>> 0, delivery }).full);
 252:   vals.sort((a, b) => a - b);
 253:   const mean = vals.reduce((a, b) => a + b, 0) / vals.length;
 254:   const sd = Math.sqrt(vals.reduce((a, b) => a + (b - mean) * (b - mean), 0) / vals.length);
 255:   return { mean, sd, min: vals[0], max: vals[vals.length - 1] };
 256: }
 257: 
 258: // Joint Latin-hypercube sweep over the delivery params, reporting the RANGE of the full gain and the coverage-wins
 259: // share — a GLOBAL robustness statement, not the 1-D opaque sweep (Codex robustness item). Deterministic (seeded).
 260: export function jointSweep(cfg, { nSamples = 64, nWorlds = 300 } = {}) {
 261:   const ranges = {
 262:     pi_hon: [0.61, 0.85], loss_hon: [0.0, 0.15], op_pdet: [0.02, 0.15], op_a: [0.75, 1.0],
 263:     ve_pdet: [0.60, 0.90], ve_a: [0.10, 0.40], ve_r: [0.30, 1.0], ve_rep: [0.0, 0.5],
 264:     mon_detect: [0.0, 0.10], mon_recovery: [0.0, 0.36], val_risk: [0.0, 0.6],
 265:   };
 266:   const keys = Object.keys(ranges), rng = makeRng((NUM.seed.value ^ 0x1234abcd) >>> 0), cols = {};
 267:   for (const k of keys) {                                     // stratified + shuffled column per key (LHS)
 268:     const col = []; for (let i = 0; i < nSamples; i++) col.push((i + rng.u()) / nSamples);
 269:     for (let i = col.length - 1; i > 0; i--) { const j = Math.floor(rng.u() * (i + 1)); [col[i], col[j]] = [col[j], col[i]]; }
 270:     cols[k] = col;
 271:   }
 272:   const lerp = (r, u) => r[0] + (r[1] - r[0]) * u, fulls = [], selEff = [];
 273:   for (let i = 0; i < nSamples; i++) {
 274:     const s = {}; for (const k of keys) s[k] = lerp(ranges[k], cols[k][i]);
 275:     const del = {
 276:       pi_hon: s.pi_hon, loss_hon: s.loss_hon,
 277:       opaque:   { p_det: s.op_pdet, a: s.op_a, r: 0.0, gamma: 0.0, rep: 0.0 },
 278:       verified: { p_det: s.ve_pdet, a: s.ve_a, r: s.ve_r, gamma: 0.10, rep: s.ve_rep },
 279:       mon_detect: s.mon_detect, mon_recovery: s.mon_recovery, val_risk: s.val_risk,
 280:     };
 281:     const rr = delivered2x2(cfg, { nWorlds, delivery: del });
 282:     fulls.push(rr.full);                       // A2 − S : the FULL architecture vs the status quo
 283:     selEff.push(rr.selectionEffect.atOpaque);  // A3 − S : the COVERAGE (selection) effect alone, at opaque delivery
 284:   }
 285:   fulls.sort((a, b) => a - b);
 286:   // NOTE: shares are over these 64 LHS draws across the DECLARED ranges (gamma, opaque recovery, temptation held fixed),
 287:   // NOT a global identified-set guarantee. shareArchitectureWins = A2−S>0 (full stack); shareCoverageWins = A3−S>0.
 288:   return { n: fulls.length, min: fulls[0], max: fulls[fulls.length - 1], median: fulls[fulls.length >> 1],
 289:     shareArchitectureWins: fulls.filter((x) => x > 0).length / fulls.length,
 290:     shareCoverageWins: selEff.filter((x) => x > 0).length / selEff.length };
 291: }
 292: 
 293: function main() {
 294:   const pct = (x) => (x >= 0 ? '+' : '') + (100 * x).toFixed(1) + '%';
 295:   const cfgBase = baseConfig();
 296:   // Use the PROBABLE anchored scenario (realistic coverage composition + anchored central handicaps) as the world,
 297:   // so the selection layer matches the E4 headline; delivery is the new layer on top.
 298:   import('./scenario-configs.mjs').then(({ SCENARIO_WORLD: W, PROBABLE }) => {
 299:     const cfg = { ...cfgBase, ...W, ...PROBABLE };
 300:     // (i) the pure four-cell design with the monitoring coupling OFF — the two layers read cleanly.
 301:     const r = delivered2x2(cfg, { nWorlds: 1200 });
 302:     safeLog('E5 — delivered value: SELECTION-by-DELIVERY (four-cell design on the clean E4 engine, PROBABLE world).');
 303:     safeLog('Parity at the oracle reference (perfect-delivery full-information greedy). No compound multiplier; layers reported separately.\n');
 304:     safeLog(`worlds kept: ${r.n}`);
 305:     safeLog(`SELECTION efficiency (perfect delivery, = E4):  central ${pct(r.selection.central)} · distributed ${pct(r.selection.distributed)}`);
 306:     safeLog(`DELIVERY efficiency (delivered/selected):        opaque ${pct(r.delivery.centralOpaque)} · verified ${pct(r.delivery.centralVerified)}\n`);
 307:     safeLog('Four-cell delivered value as a fraction of the oracle reference:');
 308:     safeLog(`                       opaque delivery     verified delivery`);
 309:     safeLog(`  central selection    S  ${pct(r.cells.S).padStart(7)}          A1 ${pct(r.cells.A1).padStart(7)}`);
 310:     safeLog(`  distributed sel.     A3 ${pct(r.cells.A3).padStart(7)}          A2 ${pct(r.cells.A2).padStart(7)}\n`);
 311:     // diversion INCIDENCE = unweighted share of funded projects whose executor diverts; value LEAKAGE = S-weighted
 312:     // undelivered social value. Olken 2007 measured missing EXPENDITURE (closest to value leakage), not executor prevalence.
 313:     safeLog(`diversion incidence (unweighted share of funded projects):     opaque ${pct(r.diversionIncidence.S)} · verified ${pct(r.diversionIncidence.A1)}`);
 314:     safeLog(`value leakage (S-weighted undelivered value; MOMENT-MATCHED to Olken's expenditure loss, NOT identified as welfare):   opaque ${pct(r.leakage.S)} · verified ${pct(r.leakage.A1)}\n`);
 315:     const civ = (iv) => `[${pct(iv[0])}, ${pct(iv[1])}]`;
 316:     safeLog('Main effects (pp of the oracle reference) with 95% CONDITIONAL Monte-Carlo intervals (inner simulation');
 317:     safeLog('variability only — world, model-form and calibration uncertainty are NOT included), read SEPARATELY:');
 318:     safeLog(`  DELIVERY effect:   at central ${pct(r.deliveryEffect.atCentral)} ${civ(r.ci.deliveryEffect.atCentral)} · at distributed ${pct(r.deliveryEffect.atDistributed)} ${civ(r.ci.deliveryEffect.atDistributed)}`);
 319:     safeLog(`  SELECTION effect:  at opaque ${pct(r.selectionEffect.atOpaque)} ${civ(r.ci.selectionEffect.atOpaque)} · at verified ${pct(r.selectionEffect.atVerified)} ${civ(r.ci.selectionEffect.atVerified)}`);
 320:     safeLog(`  INTERACTION:       ${pct(r.interaction)} ${civ(r.ci.interaction)}  (>0 ⇒ verified delivery amplifies the selection gain)`);
 321:     safeLog(`  FULL architecture (A2 − S): ${pct(r.full)}  95% conditional-MC CI ${civ(r.fullCI)}\n`);
 322:     safeLog('Composition — the two layers compose MULTIPLICATIVELY (an accounting identity, delivery applied per project):');
 323:     safeLog(`  actual A2 = ${pct(r.cells.A2)}  ·  identity (selection · delivery) = ${pct(r.multiplicativeIdentityA2)}`);
 324:     safeLog(`  additive prediction (sum of main effects) = ${pct(r.additivePredictionA2)}  → short by the interaction.`);
 325:     safeLog(`  The positive interaction is the level-effect signature of multiplicative composition.\n`);
 326: 
 327:     // (ii) monitoring coupling ON (step 2): distributed coverage lifts DETECTION only (community-only recovery=0).
 328:     // Anchored coverage-only detection band 0.0–0.10 (fragile evidence); headline 0.05.
 329:     const rc = delivered2x2(cfg, { nWorlds: 1200, delivery: { ...DELIVERY, mon_detect: 0.05, mon_recovery: 0.0 } });
 330:     safeLog('Monitoring coupling (step 2) — distributed coverage fiscalizes delivery via DETECTION only (mon_detect=0.05, recovery=0 community-only):');
 331:     safeLog(`  delivered fraction, distributed − central:  opaque ${pct(rc.monitoringDividend.opaque)} · verified ${pct(rc.monitoringDividend.verified)} (saturated)`);
 332:     safeLog(`  weak-control cell A3 rises ${pct(r.cells.A3)} → ${pct(rc.cells.A3)} — SMALL: community detection without institutional recovery barely helps a weak-control regime.`);
 333:     safeLog(`  detection-band sweep (opaque monitoring dividend):`);
 334:     for (const c of [0.0, 0.05, 0.10]) {
 335:       const rr = delivered2x2(cfg, { nWorlds: 700, delivery: { ...DELIVERY, mon_detect: c, mon_recovery: 0.0 } });
 336:       safeLog(`     mon_detect ${c.toFixed(2)}  →  dividend(opaque) ${pct(rr.monitoringDividend.opaque)}  ·  A3 ${pct(rr.cells.A3)}`);
 337:     }
 338:     // with institutional recovery linkage (Core v0's evidence layer), the dividend is larger — reported as a scenario, not the community-only default.
 339:     const rr2 = delivered2x2(cfg, { nWorlds: 700, delivery: { ...DELIVERY, mon_detect: 0.05, mon_recovery: 0.20 } });
 340:     safeLog(`  with institutional recovery linkage (mon_recovery=0.20): opaque dividend ${pct(rr2.monitoringDividend.opaque)} — the delivery gain needs the FORMAL recovery channel, not eyeballs alone.\n`);
 341: 
 342:     // Favorable R=0 robustness (Codex): drop the reputational stake entirely — the verified regime then admits SOME
 343:     // diversion, and the full gain still holds. This is the honest less-favorable-to-Core-v0 disclosure.
 344:     const r0 = delivered2x2(cfg, { nWorlds: 1200, delivery: { ...DELIVERY, verified: { ...DELIVERY.verified, rep: 0.0 } } });
 345:     safeLog(`R=0 robustness (no reputational stake): verified delivery ${pct(r0.delivery.centralVerified)}, verified diversion incidence ${pct(r0.diversionIncidence.A1)}, full ${pct(r0.full)} 95% CI [${pct(r0.fullCI[0])}, ${pct(r0.fullCI[1])}] — the gain survives without the (unanchored) reputation term.\n`);
 346: 
 347:     // (iii) Step 1 — opaque-band sensitivity, coupling OFF so the delivery effect is read cleanly.
 348:     safeLog('Opaque-band sensitivity (delivery effect and full-architecture gain as the status-quo leak worsens):');
 349:     safeLog('   leak(opaque)   delivery-effect@distributed   full (A2−S)');
 350:     for (const row of sweepOpaque(cfg, { nWorlds: 800 })) {
 351:       safeLog(`     ${pct(row.leak).padStart(6)}          ${pct(row.deliveryEffectAtDistributed).padStart(7)}                 ${pct(row.full).padStart(7)}`);
 352:     }
 353:     safeLog('   → coverage still wins across the whole band; a worse status quo only widens the delivery gain.\n');
 354: 
 355:     // (iv) COST/COMPLEXITY-correlated delivery risk (robustness). NOTE: the risk is tied to project COST, and cost is
 356:     // drawn INDEPENDENTLY of true value S in the engine (c ⟂ S), so this bounds cost/size risk, not a value↔delivery
 357:     // correlation. Does it break the per-arm delivery equality (a real selection↔delivery interaction)?
 358:     safeLog('Cost/complexity-correlated delivery risk (bigger projects harder to monitor; cost ⟂ value S in the engine):');
 359:     for (const vr of [0.0, 0.3, 0.6]) {
 360:       const rv = delivered2x2(cfg, { nWorlds: 800, delivery: { ...DELIVERY, val_risk: vr } });
 361:       const armGap = rv.delivery.distributedOpaque - rv.delivery.centralOpaque;   // delivery efficiency difference by arm
 362:       safeLog(`   val_risk ${vr.toFixed(1)}  →  opaque delivery central ${pct(rv.delivery.centralOpaque)} · distributed ${pct(rv.delivery.distributedOpaque)} (arm gap ${pct(armGap)})  ·  full ${pct(rv.full)}`);
 363:     }
 364:     safeLog('   → under c ⟂ S the arm gap stays ~0, so coverage is NOT systematically undone by cost/size delivery risk.\n');
 365: 
 366:     // (v) 20-seed replication + a joint Latin-hypercube sweep over the DECLARED ranges (a sampled-space statement, not a
 367:     // global identified-set guarantee: gamma, opaque recovery and uniform temptation are held fixed).
 368:     const rep = replicateSeeds(cfg, { nSeeds: 20, nWorlds: 400 });
 369:     safeLog(`20-seed replication of the full gain: mean ${pct(rep.mean)} · sd ${pct(rep.sd)} · range [${pct(rep.min)}, ${pct(rep.max)}].`);
 370:     const js = jointSweep(cfg, { nSamples: 64, nWorlds: 300 });
 371:     safeLog(`Joint LHS sweep (${js.n} draws, CONDITIONAL on the PROBABLE world; non-overlapping regime ranges): full gain median ${pct(js.median)}, range [${pct(js.min)}, ${pct(js.max)}];`);
 372:     safeLog(`   full architecture wins in ${(100 * js.shareArchitectureWins).toFixed(0)}% and the coverage/selection effect (A3−S) is positive in ${(100 * js.shareCoverageWins).toFixed(0)}% of the sampled draws.`);
 373:   });
 374: }
 375: import { fileURLToPath } from 'node:url';
 376: if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) main();
===== scripts/simulation/e4-v5/e5-delivery-test.mjs =====
   1: // E5 delivery tests — the invariants that keep the SELECTION × DELIVERY experiment honest and E4-consistent.
   2: // Run: npm run e5:delivery:test
   3: import { delivered2x2, sweepOpaque, replicateSeeds, jointSweep, validateDelivery, DELIVERY } from './e5-delivery.mjs';
   4: import { baseConfig } from './contract.mjs';
   5: import { estimand } from './engine.mjs';
   6: import { SCENARIO_WORLD as W, PROBABLE } from './scenario-configs.mjs';
   7: 
   8: let pass = 0, fail = 0;
   9: const approx = (a, b, tol) => Math.abs(a - b) <= tol;
  10: function check(name, cond, detail = '') { if (cond) { pass++; console.log(`  ok   ${name}`); } else { fail++; console.log(`  FAIL ${name}  ${detail}`); } }
  11: 
  12: const cfg = { ...baseConfig(), ...W, ...PROBABLE };
  13: const NW = 1200;
  14: 
  15: // 1) PERFECT DELIVERY reduces E5 to E4 selection: both regimes deliver 1.0 (pi_hon=1, loss=0) => every cell equals its
  16: //    selection efficiency, delivery effects and interaction vanish, and the cells match the E4 engine's own D/O, C/O.
  17: {
  18:   const perfect = { pi_hon: 1, loss_hon: 0,
  19:     opaque:   { p_det: 0, a: 0, r: 0, rep: 0 },
  20:     verified: { p_det: 0, a: 0, r: 0, rep: 0 } };
  21:   const r = delivered2x2(cfg, { nWorlds: NW, delivery: perfect });
  22:   const e4 = estimand(cfg, { nWorlds: NW });
  23:   check('perfect delivery: opaque efficiency == 1', approx(r.delivery.centralOpaque, 1, 1e-9), `got ${r.delivery.centralOpaque}`);
  24:   check('perfect delivery: verified efficiency == 1', approx(r.delivery.centralVerified, 1, 1e-9), `got ${r.delivery.centralVerified}`);
  25:   check('perfect delivery: delivery effect ~ 0 (central)', approx(r.deliveryEffect.atCentral, 0, 1e-9));
  26:   check('perfect delivery: delivery effect ~ 0 (distributed)', approx(r.deliveryEffect.atDistributed, 0, 1e-9));
  27:   check('perfect delivery: interaction ~ 0', approx(r.interaction, 0, 1e-9), `got ${r.interaction}`);
  28:   // EXACT (same run): every cell equals its own selection efficiency when delivery is perfect.
  29:   check('perfect delivery: distributed cell == its selection efficiency', approx(r.cells.A2, r.selection.distributed, 1e-9), `${r.cells.A2} vs ${r.selection.distributed}`);
  30:   check('perfect delivery: central cell == its selection efficiency', approx(r.cells.S, r.selection.central, 1e-9), `${r.cells.S} vs ${r.selection.central}`);
  31:   // EXACT cross-check: with executors on a SEPARATE PRNG stream, E5's world stream is identical to the E4 estimand's,
  32:   // so the selection efficiencies match the E4 engine's D/O and C/O to full precision (the RNG-separation invariant).
  33:   check('perfect delivery: selection efficiencies == E4 D/O, C/O (exact)', approx(r.selection.distributed, e4.dOverO, 1e-9) && approx(r.selection.central, e4.cOverO, 1e-9), `D ${r.selection.distributed} vs ${e4.dOverO}; C ${r.selection.central} vs ${e4.cOverO}`);
  34: }
  35: 
  36: // 2) DEFAULT regimes: leakage bands are literature-plausible, and the joint cell is EXACTLY multiplicative
  37: //    (delivery fraction is selection-independent by construction => value = selection · delivery, to MC precision).
  38: {
  39:   const r = delivered2x2(cfg, { nWorlds: NW });
  40:   check('opaque delivery in a plausible leaky band [0.5, 0.85]', r.delivery.centralOpaque > 0.5 && r.delivery.centralOpaque < 0.85, `got ${r.delivery.centralOpaque}`);
  41:   check('verified delivery near-complete [0.90, 0.99]', r.delivery.centralVerified > 0.90 && r.delivery.centralVerified < 0.99, `got ${r.delivery.centralVerified}`);
  42:   check('verified delivery > opaque delivery', r.delivery.centralVerified > r.delivery.centralOpaque);
  43:   check('multiplicative identity: A2 == sigma_D * delta_verified', approx(r.cells.A2, r.multiplicativeIdentityA2, 1e-9), `${r.cells.A2} vs ${r.multiplicativeIdentityA2}`);
  44:   check('multiplicative fits better than additive', Math.abs(r.cells.A2 - r.multiplicativeIdentityA2) < Math.abs(r.cells.A2 - r.additivePredictionA2));
  45:   check('positive interaction (verified amplifies selection)', r.interaction > 0, `got ${r.interaction}`);
  46:   // ordering: full architecture is the best cell, status quo the worst
  47:   const { S, A1, A3, A2 } = r.cells;
  48:   check('A2 is the best cell and S the worst', A2 > A1 && A2 > A3 && S < A1 && S < A3, `S=${S} A1=${A1} A3=${A3} A2=${A2}`);
  49:   check('both main effects strictly positive', r.deliveryEffect.atCentral > 0 && r.selectionEffect.atOpaque > 0);
  50:   // with coupling OFF, delivery is selection-independent: distributed and central delivered fractions match.
  51:   check('coupling OFF ⇒ no monitoring dividend', approx(r.monitoringDividend.opaque, 0, 5e-3) && approx(r.monitoringDividend.verified, 0, 5e-3), `op ${r.monitoringDividend.opaque} vr ${r.monitoringDividend.verified}`);
  52: }
  53: 
  54: // 3) MONITORING COUPLING (step 2), SPLIT into detection + recovery: community detection alone gives only a small
  55: //    opaque dividend; adding institutional recovery linkage makes it larger. Never lowers a distributed cell.
  56: {
  57:   const off  = delivered2x2(cfg, { nWorlds: NW });
  58:   const det  = delivered2x2(cfg, { nWorlds: NW, delivery: { ...DELIVERY, mon_detect: 0.05, mon_recovery: 0.0 } });
  59:   const both = delivered2x2(cfg, { nWorlds: NW, delivery: { ...DELIVERY, mon_detect: 0.05, mon_recovery: 0.20 } });
  60:   check('detection-only coupling lifts A3 (small)', det.cells.A3 > off.cells.A3 - 1e-9);
  61:   check('recovery linkage gives a larger opaque dividend than detection alone', both.monitoringDividend.opaque > det.monitoringDividend.opaque + 1e-6, `det ${det.monitoringDividend.opaque} both ${both.monitoringDividend.opaque}`);
  62:   check('coupling does not lower the full-architecture cell A2', both.cells.A2 >= off.cells.A2 - 1e-6);
  63:   check('dividend largest where control is weakest (opaque ≥ verified)', both.monitoringDividend.opaque >= both.monitoringDividend.verified - 1e-9);
  64: }
  65: 
  66: // 4) MONOTONE: strengthening the verified deterrent (more recovery) never lowers verified delivery.
  67: {
  68:   const stronger = { ...DELIVERY, verified: { ...DELIVERY.verified, r: 0.9 } };
  69:   const base = delivered2x2(cfg, { nWorlds: NW });
  70:   const strong = delivered2x2(cfg, { nWorlds: NW, delivery: stronger });
  71:   check('more recovery does not reduce verified delivery', strong.delivery.centralVerified >= base.delivery.centralVerified - 1e-9);
  72: }
  73: 
  74: // 5) SWEEP: a worse opaque status quo widens the delivery effect and the full-architecture gain (monotone).
  75: {
  76:   const rows = sweepOpaque(cfg, { nWorlds: 600 });
  77:   let mono = true;
  78:   for (let i = 1; i < rows.length; i++) if (rows[i].full < rows[i - 1].full - 1e-3) mono = false;
  79:   check('sweep: full-architecture gain grows monotonically as opaque leak worsens', mono);
  80:   check('sweep: coverage wins (full > 0) across the whole opaque band', rows.every((x) => x.full > 0));
  81: }
  82: 
  83: // 6) VALIDATION: fail-closed on out-of-domain delivery params (Codex robustness item).
  84: {
  85:   const throws = (del) => { try { validateDelivery(del); return false; } catch { return true; } };
  86:   check('validateDelivery accepts the default config', validateDelivery(DELIVERY) === true);
  87:   check('validateDelivery rejects pi_hon > 1', throws({ ...DELIVERY, pi_hon: 1.4 }));
  88:   check('validateDelivery rejects negative val_risk', throws({ ...DELIVERY, val_risk: -0.1 }));
  89:   check('validateDelivery rejects NaN val_risk', throws({ ...DELIVERY, val_risk: NaN }));
  90:   check('validateDelivery rejects NaN gamma in a regime', throws({ ...DELIVERY, verified: { ...DELIVERY.verified, gamma: NaN } }));
  91:   check('validateDelivery rejects a MISSING rep (would make the deterrent NaN)', throws({ ...DELIVERY, verified: { p_det: 0.75, a: 0.2, r: 0.5, gamma: 0.1 } }));
  92:   check('validateDelivery rejects a missing regime', throws({ ...DELIVERY, opaque: undefined }));
  93:   check('delivered2x2 validates its delivery arg', (() => { try { delivered2x2(cfg, { nWorlds: 10, delivery: { ...DELIVERY, mon_detect: 2 } }); return false; } catch { return true; } })());
  94: }
  95: 
  96: // 7) VALUE-RISK robustness: value/complexity-correlated delivery risk does not systematically undo coverage — the
  97: //    per-arm delivery gap stays small and the full gain stays clearly positive across the band.
  98: {
  99:   const base = delivered2x2(cfg, { nWorlds: NW });
 100:   const vr   = delivered2x2(cfg, { nWorlds: NW, delivery: { ...DELIVERY, val_risk: 0.6 } });
 101:   check('value risk keeps the per-arm opaque delivery gap small', Math.abs(vr.delivery.distributedOpaque - vr.delivery.centralOpaque) < 0.03);
 102:   check('value risk keeps the full gain clearly positive', vr.full > 0.4, `got ${vr.full}`);
 103:   check('value risk barely moves the full gain vs base', Math.abs(vr.full - base.full) < 0.05);
 104: }
 105: 
 106: // 8) GLOBAL robustness: 20-seed replication is tight; the joint LHS sweep has coverage winning across the space.
 107: {
 108:   const rep = replicateSeeds(cfg, { nSeeds: 8, nWorlds: 200 });
 109:   check('multi-seed replication (8 seeds): between-seed sd is small', rep.sd < 0.03, `sd ${rep.sd}`);
 110:   check('multi-seed replication: mean full gain is materially positive', rep.mean > 0.4, `mean ${rep.mean}`);
 111:   const js = jointSweep(cfg, { nSamples: 24, nWorlds: 150 });
 112:   check('joint LHS sweep: full architecture wins in the large majority of sampled draws', js.shareArchitectureWins > 0.9, `share ${js.shareArchitectureWins}`);
 113:   check('joint LHS sweep: coverage/selection effect (A3−S) positive in the large majority', js.shareCoverageWins > 0.9, `share ${js.shareCoverageWins}`);
 114:   check('joint LHS sweep: even the worst sampled draw keeps the full gain near/above parity', js.min > -0.1, `min ${js.min}`);
 115: }
 116: 
 117: console.log(`\nE5 delivery: ${pass} passed, ${fail} failed.`);
 118: process.exit(fail ? 1 : 0);

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$f='"'scripts/simulation/e4-v5/e5-delivery.mjs'; "'$lines=Get-Content -LiteralPath $f; for($i=225;$i -le 292;$i++){ '"'{0,4}: {1}' -f "'$i,$lines[$i-1] }' in C:\devel\claude-projects\distributed-governance-research
 succeeded in 170ms:
 225:   }
 226:   return rows;
 227: }
 228: 
 229: // Genuinely fail-closed validation of a delivery config (Codex round-2: NaN/Infinity and a MISSING `rep` previously
 230: // slipped through, and a missing rep silently makes the deterrent NaN — classifying every opportunist as deterred).
 231: export function validateDelivery(del) {
 232:   const bad = [];
 233:   const fin  = (k, v) => { if (typeof v !== 'number' || !Number.isFinite(v)) { bad.push(`${k}=${v} must be a finite number`); return false; } return true; };
 234:   const unit = (k, v) => { if (fin(k, v) && (v < 0 || v > 1)) bad.push(`${k}=${v} must be in [0,1]`); };
 235:   unit('pi_hon', del.pi_hon); unit('loss_hon', del.loss_hon);
 236:   unit('mon_detect', del.mon_detect ?? 0); unit('mon_recovery', del.mon_recovery ?? 0); unit('val_risk', del.val_risk ?? 0);
 237:   for (const name of ['opaque', 'verified']) {
 238:     const reg = del[name];
 239:     if (!reg || typeof reg !== 'object') { bad.push(`${name} regime missing`); continue; }
 240:     for (const k of ['p_det', 'a', 'r', 'rep']) unit(`${name}.${k}`, reg[k]);   // rep is REQUIRED + finite (deterrent uses it)
 241:     if (fin(`${name}.gamma`, reg.gamma ?? 0) && (reg.gamma ?? 0) < 0) bad.push(`${name}.gamma must be >= 0`);
 242:   }
 243:   if (bad.length) throw new Error(`[e5-delivery] invalid delivery config: ${bad.join('; ')}`);
 244:   return true;
 245: }
 246: 
 247: // 20-seed replication of the full-architecture gain: across-seed mean and spread (Codex robustness item; complements
 248: // the inner bootstrap CI with between-seed variability).
 249: export function replicateSeeds(cfg, { nSeeds = 20, nWorlds = 400, delivery = DELIVERY } = {}) {
 250:   const vals = [];
 251:   for (let s = 0; s < nSeeds; s++) vals.push(delivered2x2(cfg, { nWorlds, seed: (NUM.seed.value + s * 0x9e3779b1) >>> 0, delivery }).full);
 252:   vals.sort((a, b) => a - b);
 253:   const mean = vals.reduce((a, b) => a + b, 0) / vals.length;
 254:   const sd = Math.sqrt(vals.reduce((a, b) => a + (b - mean) * (b - mean), 0) / vals.length);
 255:   return { mean, sd, min: vals[0], max: vals[vals.length - 1] };
 256: }
 257: 
 258: // Joint Latin-hypercube sweep over the delivery params, reporting the RANGE of the full gain and the coverage-wins
 259: // share — a GLOBAL robustness statement, not the 1-D opaque sweep (Codex robustness item). Deterministic (seeded).
 260: export function jointSweep(cfg, { nSamples = 64, nWorlds = 300 } = {}) {
 261:   const ranges = {
 262:     pi_hon: [0.61, 0.85], loss_hon: [0.0, 0.15], op_pdet: [0.02, 0.15], op_a: [0.75, 1.0],
 263:     ve_pdet: [0.60, 0.90], ve_a: [0.10, 0.40], ve_r: [0.30, 1.0], ve_rep: [0.0, 0.5],
 264:     mon_detect: [0.0, 0.10], mon_recovery: [0.0, 0.36], val_risk: [0.0, 0.6],
 265:   };
 266:   const keys = Object.keys(ranges), rng = makeRng((NUM.seed.value ^ 0x1234abcd) >>> 0), cols = {};
 267:   for (const k of keys) {                                     // stratified + shuffled column per key (LHS)
 268:     const col = []; for (let i = 0; i < nSamples; i++) col.push((i + rng.u()) / nSamples);
 269:     for (let i = col.length - 1; i > 0; i--) { const j = Math.floor(rng.u() * (i + 1)); [col[i], col[j]] = [col[j], col[i]]; }
 270:     cols[k] = col;
 271:   }
 272:   const lerp = (r, u) => r[0] + (r[1] - r[0]) * u, fulls = [], selEff = [];
 273:   for (let i = 0; i < nSamples; i++) {
 274:     const s = {}; for (const k of keys) s[k] = lerp(ranges[k], cols[k][i]);
 275:     const del = {
 276:       pi_hon: s.pi_hon, loss_hon: s.loss_hon,
 277:       opaque:   { p_det: s.op_pdet, a: s.op_a, r: 0.0, gamma: 0.0, rep: 0.0 },
 278:       verified: { p_det: s.ve_pdet, a: s.ve_a, r: s.ve_r, gamma: 0.10, rep: s.ve_rep },
 279:       mon_detect: s.mon_detect, mon_recovery: s.mon_recovery, val_risk: s.val_risk,
 280:     };
 281:     const rr = delivered2x2(cfg, { nWorlds, delivery: del });
 282:     fulls.push(rr.full);                       // A2 − S : the FULL architecture vs the status quo
 283:     selEff.push(rr.selectionEffect.atOpaque);  // A3 − S : the COVERAGE (selection) effect alone, at opaque delivery
 284:   }
 285:   fulls.sort((a, b) => a - b);
 286:   // NOTE: shares are over these 64 LHS draws across the DECLARED ranges (gamma, opaque recovery, temptation held fixed),
 287:   // NOT a global identified-set guarantee. shareArchitectureWins = A2−S>0 (full stack); shareCoverageWins = A3−S>0.
 288:   return { n: fulls.length, min: fulls[0], max: fulls[fulls.length - 1], median: fulls[fulls.length >> 1],
 289:     shareArchitectureWins: fulls.filter((x) => x > 0).length / fulls.length,
 290:     shareCoverageWins: selEff.filter((x) => x > 0).length / selEff.length };
 291: }
 292: 

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$f='"'audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md'; "'$lines=Get-Content -LiteralPath $f; foreach($range in @(@(1,110),@(111,184))){ "===== $f $($range[0])-$($range[1]) ====="; for($i=$range[0];$i -le $range[1];$i++){ '"'{0,4}: {1}' -f "'$i,$lines[$i-1] } }' in C:\devel\claude-projects\distributed-governance-research
 succeeded in 190ms:
===== audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md 1-110 =====
   1: # E5 re-model — Selection × Delivery on the clean E4 engine
   2: 
   3: **Date:** 2026-07-12. **Code:** `scripts/simulation/e4-v5/e5-delivery.mjs` (+ `-test.mjs`). **Runs:**
   4: `npm run e5:delivery`, `npm run e5:delivery:test`. Author intent this cycle: re-model E5 as the delivered-value
   5: experiment on the E4 base + a delivery layer, well-modeled (it was heavily questioned), **no costs** (costs are the
   6: later E10 dimension). This doc records the model, its anchors, and the honest limits.
   7: 
   8: ## Why a re-model was needed
   9: 
  10: The legacy E5 (`e5-sp-model.mjs`) collapsed delivery into a **constant fraction tied to the selection arm**
  11: (central → weak `fWeak`, distributed → verified `fVer`). That conflates the two layers: you cannot read a delivery
  12: effect that is independent of who selected. The current `e4-v5/e5-layers.mjs` is a different thing again — a
  13: default-off `κ`/`leak` scalar wrapper that is really the **cost leg (E10)**, not a delivery simulation. Neither gives
  14: the clean, separable measurement the author asked for.
  15: 
  16: ## Design — a four-cell (selection-by-delivery) experiment
  17: 
  18: Two **independent** regimes, evaluated on the **same** funded portfolios and the **same** executor draws (matched
  19: seeds), on the clean E4 v1.14 engine:
  20: 
  21: | | opaque delivery | verified delivery |
  22: |---|---|---|
  23: | **central selection** | S (status quo) | A1 (delivery effect, selection held central) |
  24: | **distributed selection** | A3 (selection effect, delivery held weak) | A2 (full architecture) |
  25: 
  26: - Selection reuses the E4 engine unchanged: central = `M_C` + credit tilt, distributed = `M_D` coverage, oracle =
  27:   true `S`. The engine was given a behaviour-preserving refactor to expose `fundedSet` (the funded index set); E4
  28:   scenarios reproduce identical seeded numbers.
  29: - Everything is normalized by the **oracle at perfect delivery** (the E4 reference `ΣO`). So a cell's value is the
  30:   fraction of the full-information, perfectly-delivered benchmark it achieves — parity at that reference, **no
  31:   compound multiplier, no ×/D-C**.
  32: 
  33: ## Delivery model (micro-founded, one-shot, deterrence ex ante)
  34: 
  35: Faithful to `research/e5-value-delivery-design.md` (Okun's leaky bucket; the Model-1 incentive condition), adapted to
  36: the one-shot E4 world (no time dimension, so no endogenous pool cycling — the reputational stake enters the incentive
  37: condition statically, which is exactly the corpus finding that **deterrence pre-empts punishment**):
  38: 
  39: - A share `pi_hon` of executors are **intrinsically honest** (deliver `1 − loss_hon`). The rest are opportunistic and
  40:   **divert iff** temptation `t ~ U(0,1)` exceeds the regime deterrent `det = p_det · [(1 − a(1 − r)) + gamma + rep]`
  41:   (`a` = up-front advance exposure, `r` = recovery, `gamma` = performance guarantee, `rep` = reputational stake).
  42: - A diverting executor loses `a(1 − r)` of the budget (the unrecovered advance) → delivers `1 − a(1 − r) − loss_hon`.
  43: - Delivered value `V = Σ_{j∈funded} S_j · f_j`. (A half-built harmful project does half its harm — consistent; the
  44:   **stolen funds' cost is 0 social value here and belongs to E10**, not this value layer.)
  45: 
  46: ### Calibration (declared, not fitted; magnitudes anchored, directions from the corpus)
  47: 
  48: | regime | `p_det` | `a` | `r` | `rep` | emergent delivered fraction | anchor |
  49: |---|---|---|---|---|---|---|
  50: | opaque | 0.10 | 0.90 | 0.00 | 0.00 | ~0.68 (leak ~32%) | IMF PIE-X public-investment inefficiency 0.20–0.30; Olken 2007 Indonesian roads 24% missing; pessimistic end reaches Reinikka & Svensson 2004 Uganda 87% |
  51: | verified | 0.75 | 0.20 | 0.50 | 0.50 | ~0.95 (leak ~5%) | milestone-gating + retention + recovery + reputational stake (corpus Models 1–2); capture-resistance from the E4-v5 capture block |
  52: 
  53: `pi_hon = 0.70`, `loss_hon = 0.05`. These live in the module's `DELIVERY` object (module-local, **not** E4 `THETA`), so
  54: the frozen E4 contract/hash is untouched.
  55: 
  56: ## Result (PROBABLE world, 1200 worlds; post-Codex calibration pi_hon=0.78, separate RNG streams)
  57: 
  58: - Selection efficiency (perfect delivery) = **the E4 numbers**: central +44.1%, distributed +98.2% (**exact** now —
  59:   worlds share the E4 estimand's PRNG stream, executors use a separate one).
  60: - Delivery efficiency: opaque +77.5% (leak 22.5%, Olken value-loss moment), verified +95.0%. Diversion incidence:
  61:   opaque 21.7%, verified 0.0% (ex-ante deterrence).
  62: - Four cells (fraction of oracle reference): S +34.2% · A1 +41.9% · A3 +76.1% · A2 +93.3%.
  63: - Main effects (pp of oracle): **delivery** +7.7% (at central) / +17.2% (at distributed); **selection** +41.9% (at
  64:   opaque) / +51.4% (at verified). **Interaction +9.4%** (positive). **Full architecture (A2 − S) +59.1% [95% CI
  65:   +58.5, +59.7].**
  66: - **Monitoring coupling (SPLIT, post-Codex):** community coverage lifts DETECTION only (mon_detect 0.05, band 0.0–0.10)
  67:   → opaque dividend just **+0.2–0.5 pp** — community eyeballs without institutional recovery barely help a weak-control
  68:   regime. With institutional recovery linkage (mon_recovery 0.20) the dividend is **+3.9 pp**. Honest finding: the
  69:   delivery gain needs the **formal recovery channel** (the verified regime / Core v0's evidence layer), not monitoring
  70:   alone. This replaced the earlier single `mon_coupling=0.35` (recovery was doing most of the work, unanchored).
  71: - **Composition: multiplicative (an accounting identity).** Actual A2 +93.3% equals σ_D·δ_verified +93.3%
  72:   exactly; the additive prediction (+83.8%) is short by the interaction. The two layers **multiply**; the positive
  73:   interaction is the level-effect signature of that composition.
  74: 
  75: ## Honest limits (for the adversarial pass)
  76: 
  77: 1. **Multiplicativity is partly structural.** Delivered fraction here depends on the regime and the executor draw but
  78:    **not** on the project's value or on which arm selected it, so `V/O = selection · delivery` holds by construction and
  79:    the interaction is the pure level term `O·Δσ·Δδ`. This is a defensible modeling choice (a milestone-gate works the
  80:    same whoever picked the project) and it matches the paper's earlier positive-interaction finding — but the
  81:    experiment **confirms and quantifies** multiplicativity under that assumption, it does not independently discover it.
  82:    A genuine super-/sub-multiplicative result would require delivery to correlate with selection (e.g. local monitoring
  83:    that travels with distributed selection) — a future refinement.
  84: 2. **One-shot, no endogenous pool.** The verified regime's reputational exclusion cannot cycle (the E4 world has no time
  85:    axis); `rep` enters statically. This understates the verified regime if anything (no learning), so it is conservative.
  86: 3. **Delivery calibration is declared, not measured.** The regime parameters are anchored in direction and band, not
  87:    fitted to a target domain; the delivered fractions are reference points, not field effects.
  88: 4. **No costs.** Administrative machinery cost (the `κ` that breaks equal-budget) is deliberately absent — that is E10.
  89: 
  90: ## Steps 1 + 2 (added 2026-07-12, commit after 1676e77)
  91: 
  92: **Step 1 — opaque-band sensitivity (`sweepOpaque`).** The status-quo leak is swept from the IMF/Olken central band
  93: (~27%) to the Uganda pessimistic extreme (~77%). Result: the delivery effect at the distributed arm and the
  94: full-architecture gain (A2 − S) grow **monotonically** (+61.6% → +83.3%) and coverage wins across the whole band — a
  95: worse status quo only widens the gain. This resolves the "opaque calibration is a single stipulated number" objection.
  96: 
  97: **Step 2 — monitoring coupling (`mon_coupling`).** Breaks the structural multiplicativity: Core v0's distributed
  98: coverage is not only a selection signal, the same citizens also **observe delivery**, lifting the distributed arm's
  99: effective detection AND recovery (`p_det_eff = p_det + c(1−p_det)`, `r_eff = r + c(1−r)`). At the anchored coverage-only
 100: band (`c = 0.15`, band 0.0–0.20 per Björkman-Svensson / Molina / MGNREGA — small and fragile) the distributed arm
 101: delivers **+4.0 pp** more than central in the OPAQUE regime (A3 +72.0% → +76.0%) — coverage **substitutes for a missing
 102: formal control layer** — and ~0 in the verified regime (already saturated: deterrence holds ex ante). So the
 103: super-multiplicative dividend is **genuine** (delivery depends on the selecting arm) and **largest where formal control
 104: is weakest**. At `c = 0` the model reduces to the exact multiplicative baseline. (Earlier draft used c=0.35, above the
 105: anchored band — corrected in the calibration round.)
 106: 
 107: This turns the honest-limit #1 (multiplicativity is structural) into a **modeled, switchable mechanism**: the
 108: experiment now shows both the pure multiplicative composition (c=0) and the genuine super-multiplicative dividend
 109: (c>0), and localizes it (weak-control regimes).
 110: 
===== audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md 111-184 =====
 111: ## Magnitudes that need literature anchors (for the friendly calibration round)
 112: 
 113: Declared/plausible today; to be anchored to published sources (no field/paid data), directions already fixed:
 114: 
 115: - `mon_coupling` (community-monitoring detection + recovery lift): social-audit / community-monitoring impact evidence
 116:   (e.g. Björkman & Svensson 2009 Uganda community monitoring; Olken 2007 audits vs grassroots monitoring; India social
 117:   audits). Currently 0.35, illustrative.
 118: - opaque regime `{p_det, a, r, rep}` and `pi_hon`: the leak-band anchors (IMF PIE-X 0.20–0.30; Olken 2007 24%;
 119:   Reinikka & Svensson 2004 87%) constrain the emergent delivered fraction, but the split into detection vs advance vs
 120:   honest-share is a modeling choice needing tighter anchoring.
 121: - verified regime `{p_det, a, r, rep}`: milestone-gating / retention / clawback effectiveness; capture-resistance from
 122:   the E4-v5 block. `loss_hon` (honest production loss).
 123: 
 124: ## Verified calibration table (friendly round — calibration agent, 2026-07-12)
 125: 
 126: All citations web-verified by the agent unless marked. **Transport rules to state in the paper:** (1) IMF ~30% is
 127: *process inefficiency*, not diversion — do not equate with theft; (2) monitoring effect sizes are from
 128: health/education/workfare service-delivery RCTs, not capital-project fund tracing — any lift on a construction leaky
 129: bucket is an out-of-domain extrapolation.
 130: 
 131: | model quantity | anchored band | best citation | status |
 132: |---|---|---|---|
 133: | opaque divert share (central case) | **~24%** missing (works theft) | Olken 2007, *JPE* 115(2) — Indonesia roads | **ANCHORED** |
 134: | opaque process loss (broad) | ~30% avg (40% low-income / 27% emerging / 13% advanced) | IMF, *Making Public Investment More Efficient*, 2015 (PIMA/PIE-X) | ANCHORED (process, not theft) |
 135: | opaque tail (worst case) | ~87% leakage (schools got ~13% of grants) | Reinikka & Svensson 2004, **QJE 119(2)** "Local Capture" | ANCHORED as **tail**, not central |
 136: | monitoring lift `mon_coupling` (community-coverage only) | **~0.0–0.20** relative leakage cut (small, fragile) | Björkman & Svensson 2009 QJE (health, **failed replications**); Molina et al. 2016 Campbell (heterogeneous) | ANCHORED but FRAGILE — **widen bands; 0.35 was too high** |
 137: | top-down audit detection/deterrence | ~⅓ relative cut (8pp on 24%) | Olken 2007; Avis, Ferraz & Finan 2018 *JPE* 126(5) (~8% future) | ANCHORED (this is the verified regime's detection, not the coupling) |
 138: | social-audit recovery/clawback | detection + recovery > deterrence | Afridi & Iversen 2014, IZA DP 8095 (MGNREGA, Andhra Pradesh) | ANCHORED (supports coupling recovery channel) |
 139: | ex-ante deterrence ⇒ verified ~0 diversion | announced audit deters before the act | Olken 2007 (ex-ante 4%→100%); Becker 1968 | ANCHORED — validates the "deterrence ex ante" simplification |
 140: | milestone-gating effectiveness magnitude | mechanism sound, **no citable effect size** | World Bank PforR 2012 / OBA; CGD | **DECLARED, not anchored** |
 141: | reputational-exclusion stake | — | none | **DECLARED, no anchor** |
 142: | share of projects net-unsatisfactory | ~25–30% (plausible, unconfirmed) | World Bank IEG / PEFA | **UNVERIFIED — label declared** |
 143: 
 144: **Implied code recalibration:** lower `mon_coupling` default from 0.35 to ~0.15 (coverage-only band 0.0–0.20) and
 145: sweep it; keep opaque central near Olken's ~24% divert; keep verified ~0 diversion (anchored deterrence); label
 146: milestone magnitude and reputational stake as declared. Do NOT map the 33% mortality or 87% capture figures onto the
 147: monitoring lift.
 148: 
 149: ## Friendly Codex round — applied vs deferred (full verdict: `CODEX-E5-FRIENDLY-VERDICT.md`)
 150: 
 151: **Applied (commit 6c0a12c):** split coupling into detection/recovery with community-only recovery = 0; added the
 152: `gamma` guarantee term to the Model-1 incentive condition (verified 0.10, World Bank standard); separate world/executor
 153: PRNG streams (E5 reduces to E4 exactly); reframed opaque as the Olken value-loss moment (pi_hon 0.78); report diversion
 154: incidence + value leakage + a bootstrap CI on the full gain; named the multiplicativity an accounting identity; labelled
 155: verified ~0 diversion as conditional ex-ante deterrence and the whole calibration an identified-set reference.
 156: 
 157: **Second robustness pass — DONE (commit 418c7cd):** value/complexity-correlated delivery risk (`val_risk`); 20-seed
 158: replication; joint Latin-hypercube sweep over the declared delivery ranges (replaces the 1-D sweep); `validateDelivery`
 159: fail-closed. Result: full gain robust — 20-seed sd 0.5 pp; LHS full-architecture wins 100%, coverage effect 100%.
 160: 
 161: ## Friendly Codex round-2 — verification, bounded pass (verdict: `CODEX-E5-FRIENDLY2-VERDICT.md`)
 162: 
 163: Round-2 verified the model + result reproduce (full +59.1 pp [+58.5,+59.7], 36→40 tests) and returned
 164: **PUBLICATION-READY: YES after a bounded pass**, now applied (commit 84332e1): validation genuinely fail-closed
 165: (`Number.isFinite`; `rep` required — a missing rep silently made the deterrent NaN); bootstrap CIs on ALL reported
 166: cells/effects; favorable **R=0 disclosure** (verified delivery 94.4%, verified diversion 5.5%, full +58.6%);
 167: `shareCoverageWins`→`shareArchitectureWins` + a real coverage share; label fixes (Olken = value-weighted non-delivery
 168: not executor share; severe sweep row = declared stress ~69% loss, not the Uganda 87% tail; `val_risk` = cost/size under
 169: `c ⟂ S`; verified `a=0.20` declared). Quantities kept explicitly DECLARED: `loss_hon`, `rep`, milestone effectiveness,
 170: the guarantee→`gamma` mapping, the `p_det/a/r` decomposition, `mon_detect`/recovery mappings, `val_risk`, `U(0,1)`
 171: temptation, `c ⟂ S`, uniform-independent LHS weighting.
 172: 
 173: **Status (post friendly rounds): CODE/TEST-READY.** (Downgraded from "publication-ready" per Adversarial R1: the
 174: empirical interpretation is still pending model-form + calibration review — the calibration is an identified-set
 175: reference not a field estimate, the intervals are conditional-MC only, and the robustness sweep is conditional on
 176: PROBABLE. The mechanism and the PROBABLE arithmetic are sound; the empirical claim is not yet fully identified.)
 177: 
 178: ## Next
 179: 
 180: - Integrate E5 into the paper's Finding 5 (EN+ES) using `FINDING5-DRAFT.md`.
 181: - E9 (full-stack: planning + selection + delivery, central vs Core v0) and E10 (+costs) per
 182:   `docs/EXPERIMENT-INVENTORY.md`.
 183: - Re-label `e5-layers.mjs` as the E10 cost scaffolding; wire E5 delivery into the paper's Finding 5 with the
 184:   percentage main-effects framing (no compound).

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$f='"'scripts/simulation/e4-v5/e9-fullstack.mjs'; "'$lines=Get-Content -LiteralPath $f; foreach($range in @(@(1,175),@(176,334))){ "===== $f $($range[0])-$($range[1]) ====="; for($i=$range[0];$i -le $range[1];$i++){ '"'{0,4}: {1}' -f "'$i,$lines[$i-1] } }' in C:\devel\claude-projects\distributed-governance-research
 succeeded in 201ms:
===== scripts/simulation/e4-v5/e9-fullstack.mjs 1-175 =====
   1: // E9 — the FULL STACK: PLANNING × SELECTION × DELIVERY. Built ON E5 (reuses its delivery machinery) + the E4 engine.
   2: // E4 = selection only; E5 = selection × delivery; E9 adds the third Core-v0 layer, PLANNING (constructing the
   3: // eligibility frame / per-category budget shares) BEFORE selection, so all three layers are compared central-vs-Core-v0.
   4: //
   5: // Planning constructs per-CATEGORY budget shares from a planner's PERCEIVED category value; selection funds projects
   6: // within each category's share (E4 fundedSet); delivery applies the E5 regime (deliveredCell). Everything is normalized
   7: // by the oracle (perfect planning + perfect selection + perfect delivery). No compound multiplier; percentages only.
   8: //
   9: //   Planning regime:   central (perceives category value through harm-myopia + projection + credit → can STARVE whole
  10: //                       harm-heavy / low-visibility categories) | distributed (aggregated coverage category signal)
  11: //   Selection & delivery regimes: exactly as E5.
  12: //
  13: // Sectors are PERSISTENT with intrinsic visibility and a need↔visibility association (assoc): the central planner reads
  14: // visibility as political credit and is blind to low-visibility sector value, so it can starve whole high-need/low-
  15: // visibility sectors — the honest full contrast the near-parity "macro layer" never measured (it compared planning
  16: // options within a shared frame). 2x2x2 = 8 cells; the headline diagonal is all-central (status quo) vs all-distributed
  17: // (Core v0 full), attributed to layers by Shapley. The oracle is a GLOBAL greedy REFERENCE (a heuristic, NOT a
  18: // guaranteed optimum — cells can exceed it). nSec=1 reduces EXACTLY to E5.
  19: //
  20: // Run: npm run e9:fullstack
  21: 
  22: import { generateWorld, makeRng, fundedSet } from './engine.mjs';
  23: import { DELIVERY, deliveredCell, validateDelivery, sampleTempt } from './e5-delivery.mjs';
  24: import { baseConfig, NUM } from './contract.mjs';
  25: import { safeLog } from './adapter.mjs';
  26: 
  27: export const PLANNING = {
  28:   nSec: 10,           // number of persistent SECTORS (anchored: UN COFOG has 10 top-level functions)
  29:   agendaCapture: 0,   // AGENDA CAPTURE (second face of power, Bachrach–Baratz 1962 / Schattschneider): the number of
  30:                       //     its LOWEST-perceived sectors the CENTRAL keeps entirely OFF the menu (share 0; budget
  31:                       //     reallocated to the sectors it does fund). Anchored in DIRECTION (central structurally
  32:                       //     under-provides low-visibility functions — political budget cycles, maintenance neglect);
  33:                       //     the SEVERITY is DECLARED and kept MODEST — measured pre-election composition shifts are
  34:                       //     single-digit (Drazen–Eslava 2010; Vergne 2009; Katsimi–Sarantides 2012), so wholesale
  35:                       //     exclusion of many functions is NOT data-supported. 0 = pure soft credit distortion.
  36:   assoc: -0.6,        // need↔visibility association: <0 = high-need sectors are LOW-visibility (the realistic case per
  37:                       //     Rioja's maintenance-vs-new bias); swept over {-1..+1}. This is the PREDECLARED lever.
  38:   secValSpread: 0.184, // cross-sector TRUE-value dispersion, in units of project value. PROVISIONALLY ANCHORED to the
  39:                       //     between-sector return-per-cost SD (World Bank OED portfolio ≈0.184; anchor round). The
  40:                       //     planning contribution scales with this; NOT a robust large effect. (0.3 is a declared stress.)
  41:   creditCoef: 0.076,  // central planner's POLITICAL-CREDIT weight on sector visibility. PROVISIONALLY ANCHORED to the
  42:                       //     election change in the log visible budget share (Drazen–Eslava 2010: 0.024, SE 0.008 →
  43:                       //     ≈0.076). Direction anchored; the point value is a provisional moment map, not transported.
  44:   covSees: 0.7,       // fraction of the cross-sector value tilt that distributed COVERAGE perceives (central sees 0 —
  45:                       //     it is blind to low-visibility sector value and reads visibility as credit). DECLARED.
  46:   hardExclude: 0,     // 0 = positive-part proportional shares; 1 = fund only the top nKeep sectors (hard exclusion —
  47:                       //     the second face of power, Bachrach–Baratz: keeping a sector off the menu)
  48:   nKeep: 5,           // integer count of sectors kept under hard exclusion (report the realized count; NOT a fraction)
  49:   excludeMode: 'central', // which arm hard-excludes: 'central' | 'symmetric'
  50:   residualMode: 'strict', // 'strict' = unspent sector budget is lost; 'recycle' = a second global pass funds the
  51:                       //     residual with the same arm rule (removes the utilization confound — Codex round-2)
  52: };
  53: 
  54: // Assign projects to nSec PERSISTENT sectors (drawn once per world), impose a controlled need↔visibility association,
  55: // and return per-project TRUE adjusted value + sector membership + per-sector visibility. nSec<=1 ⇒ a single sector
  56: // with zero value tilt ⇒ E9 reduces to E5 EXACTLY.
  57: function buildSectors(projects, plan, pRng) {
  58:   const n = projects.length, nSec = Math.max(1, plan.nSec);
  59:   const sectorOf = new Array(n), cnt = new Array(nSec).fill(0);
  60:   for (let j = 0; j < n; j++) { const s = Math.floor(pRng.u() * nSec) % nSec; sectorOf[j] = s; cnt[s]++; }
  61:   // Sectors have INTRINSIC persistent visibility (evenly spread in (0,1)) — a real sector property, not the mean of
  62:   // their projects' engine visibility (which would be homogeneous under random membership).
  63:   const vis = Array.from({ length: nSec }, (_, s) => (nSec > 1 ? (s + 0.5) / nSec : 0.5));
  64:   const meanVis = vis.reduce((a, b) => a + b, 0) / nSec;
  65:   let sdVis = Math.sqrt(vis.reduce((a, v) => a + (v - meanVis) * (v - meanVis), 0) / nSec);
  66:   if (!(sdVis > 0)) sdVis = 1;
  67:   // GENUINE fixed-dispersion association (Codex round-2): sector NEED = assoc·z(visibility) + sqrt(1−assoc²)·shock,
  68:   // where the shock is an INDEPENDENT unit-variance sector draw. So NEED keeps ~unit dispersion at every `assoc` (only
  69:   // the CORRELATION with visibility changes), fixing the earlier confound where |assoc| also scaled dispersion and
  70:   // assoc=0 erased it. assoc<0 ⇒ low-visibility sectors tend to HIGH need (the Rioja-consistent maintenance-bias case).
  71:   const a = Math.max(-1, Math.min(1, plan.assoc)), aC = Math.sqrt(Math.max(0, 1 - a * a));
  72:   const need = vis.map((v) => (nSec > 1 ? a * ((v - meanVis) / sdVis) + aC * pRng.normal() : 0));
  73:   const valTilt = need.map((x) => plan.secValSpread * x);   // a per-sector CONSTANT true-value shift (cross-sector only)
  74:   const Sadj = new Array(n);
  75:   for (let j = 0; j < n; j++) Sadj[j] = projects[j].S + valTilt[sectorOf[j]];
  76:   return { sectorOf, nSec, vis, valTilt, Sadj, cnt };
  77: }
  78: 
  79: // A planner's perceived value per sector. Oracle sees true adjusted value; the central is BLIND to the low-visibility
  80: // sector value tilt and adds political credit ∝ sector visibility; distributed coverage sees a fraction covSees of the tilt.
  81: function sectorPerceived(projects, sec, plan, who) {
  82:   const nSec = sec.nSec, per = new Array(nSec).fill(0);
  83:   if (who === 'S') { for (let j = 0; j < projects.length; j++) per[sec.sectorOf[j]] += sec.Sadj[j]; return per; }
  84:   const key = who === 'C' ? 'M_C' : 'M_D';
  85:   for (let j = 0; j < projects.length; j++) per[sec.sectorOf[j]] += projects[j][key];    // engine signal (blind to the sector tilt)
  86:   if (who === 'C') for (let s = 0; s < nSec; s++) per[s] += plan.creditCoef * sec.vis[s] * sec.cnt[s];         // political credit on visibility
  87:   else             for (let s = 0; s < nSec; s++) per[s] += plan.covSees * sec.valTilt[s] * sec.cnt[s]; // coverage sees a fraction covSees of the tilt (valTilt already carries secValSpread — no double-count)
  88:   return per;
  89: }
  90: 
  91: // Positive-part proportional budget shares from perceived sector value; hard exclusion keeps only the top nKeep.
  92: function sectorShares(perceived, plan, doExclude) {
  93:   const raw = perceived.map((v) => Math.max(0, v));
  94:   let keptMask = raw.map(() => true);
  95:   if (doExclude) {
  96:     const keep = Math.max(1, Math.min(raw.length, Math.round(plan.nKeep)));
  97:     const kept = new Set(raw.map((v, i) => ({ i, v })).sort((a, b) => b.v - a.v).slice(0, keep).map((x) => x.i));
  98:     keptMask = raw.map((v, i) => kept.has(i));
  99:   }
 100:   const shares = raw.map((v, i) => (keptMask[i] ? v : 0));
 101:   const tot = shares.reduce((a, b) => a + b, 0);
 102:   if (tot > 0) return shares.map((x) => x / tot);
 103:   // all-zero fallback: spread EQUALLY over the KEPT sectors only (so hard exclusion is not silently undone).
 104:   const nKept = keptMask.filter(Boolean).length || perceived.length;
 105:   return keptMask.map((k) => (k ? 1 / nKept : 0));
 106: }
 107: 
 108: // Deliver a single category: select within its budget by `selKey`, deliver under `reg`. Returns {v, spent, funded}
 109: // (funded = GLOBAL project indices) so the caller can report utilization and recycle the unspent residual.
 110: function deliverCategory(projects, catIdx, selKey, cfg, catBudget, exec, reg, del, mDet, mRec, selOpts) {
 111:   if (catIdx.length === 0 || !(catBudget > 0)) return { v: 0, spent: 0, funded: [] };
 112:   const sub = catIdx.map((j) => projects[j]);
 113:   const subExec = { honest: catIdx.map((j) => exec.honest[j]), tempt: catIdx.map((j) => exec.tempt[j]) };
 114:   const fundedSub = fundedSet(sub, selKey, cfg, catBudget, selOpts);
 115:   let spent = 0; const funded = [];
 116:   for (const t of fundedSub) { spent += sub[t].c; funded.push(catIdx[t]); }
 117:   const v = deliveredCell(sub, fundedSub, reg, subExec, del, mDet, mRec, cfg).v;
 118:   return { v, spent, funded };
 119: }
 120: 
 121: // Deliver a whole ARM-cell over sectors: (planning shares, selection key + opts, delivery regime, coverage lift).
 122: // Returns {v, spent}. With residualMode 'recycle', unspent budget makes a SECOND global pass over unfunded projects
 123: // using the same arm-selection rule — so utilization differences don't confound the planning contrast (Codex round-2).
 124: function stackCell(projectsAdj, cats, shares, selKey, selOpts, cfg, budget, exec, reg, del, mDet, mRec, recycle) {
 125:   let v = 0, spent = 0; const fundedAll = new Set();
 126:   for (let s = 0; s < cats.length; s++) {
 127:     const r = deliverCategory(projectsAdj, cats[s], selKey, cfg, shares[s] * budget, exec, reg, del, mDet, mRec, selOpts);
 128:     v += r.v; spent += r.spent; for (const j of r.funded) fundedAll.add(j);
 129:   }
 130:   if (recycle && spent < budget - 1e-9) {
 131:     const unfunded = [];
 132:     for (let j = 0; j < projectsAdj.length; j++) if (!fundedAll.has(j)) unfunded.push(j);
 133:     const r2 = deliverCategory(projectsAdj, unfunded, selKey, cfg, budget - spent, exec, reg, del, mDet, mRec, selOpts);
 134:     v += r2.v; spent += r2.spent;
 135:   }
 136:   return { v, spent };
 137: }
 138: 
 139: // One world: executors (separate stream), persistent sectors (planning stream), then the FULL 2×2×2 = 8 cells over the
 140: // TRUE adjusted value Sadj. Cell key = planning(c/d) _ selection(c/d) _ delivery(op/ve).
 141: function runWorldStack(cfg, rng, execRng, pRng, del, plan) {
 142:   const projects = generateWorld(cfg, rng);
 143:   if (projects.length === 0) return null;
 144:   let totalCost = 0; for (const pr of projects) totalCost += pr.c;
 145:   const budget = cfg.phi * totalCost;
 146: 
 147:   const honest = new Array(projects.length), tempt = new Array(projects.length);
 148:   for (let j = 0; j < projects.length; j++) { honest[j] = execRng.u() < del.pi_hon; tempt[j] = sampleTempt(execRng, del); }
 149:   const exec = { honest, tempt };
 150: 
 151:   const sec = buildSectors(projects, plan, pRng);
 152:   const projectsAdj = projects.map((p, j) => ({ ...p, S: sec.Sadj[j] }));   // TRUE value carries the sector tilt
 153:   const cats = Array.from({ length: sec.nSec }, () => []);
 154:   for (let j = 0; j < projects.length; j++) cats[sec.sectorOf[j]].push(j);
 155: 
 156:   const mD = del.mon_detect || 0, mR = del.mon_recovery || 0;
 157:   const doExC = !!plan.hardExclude, doExD = plan.hardExclude && plan.excludeMode === 'symmetric';
 158:   // central agenda capture: zero the `agendaCapture` lowest-PERCEIVED sectors before proportional shares (they fall off
 159:   // the menu; their budget is reallocated to the funded sectors by the normalization in sectorShares).
 160:   let percC = sectorPerceived(projects, sec, plan, 'C');
 161:   const nCap = Math.max(0, Math.min(sec.nSec - 1, Math.round(plan.agendaCapture || 0)));
 162:   if (nCap > 0) {
 163:     const drop = new Set(percC.map((v, i) => ({ i, v })).sort((a, b) => a.v - b.v).slice(0, nCap).map((x) => x.i));
 164:     percC = percC.map((v, i) => (drop.has(i) ? 0 : v));
 165:   }
 166:   const shC = sectorShares(percC, plan, doExC);                                        // central planning (+ agenda capture)
 167:   const shD = sectorShares(sectorPerceived(projects, sec, plan, 'D'), plan, doExD);   // distributed planning
 168: 
 169:   // Oracle = GLOBAL greedy REFERENCE on the true adjusted value (a heuristic knapsack, NOT a guaranteed optimum, so a
 170:   // feasible cell can exceed it; used as a common normalizer, not an upper bound).
 171:   let O = 0; for (const j of fundedSet(projectsAdj, 'S', cfg, budget)) O += projectsAdj[j].S;
 172: 
 173:   const CT = { creditTilt: true };
 174:   const planShares = { c: shC, d: shD };
 175:   const recycle = plan.residualMode === 'recycle';
===== scripts/simulation/e4-v5/e9-fullstack.mjs 176-334 =====
 176:   const cell = (p, s, d) => {
 177:     const selKey = s === 'c' ? 'M_C' : 'M_D', selOpts = s === 'c' ? CT : {};
 178:     const reg = d === 'op' ? del.opaque : del.verified;
 179:     const useCov = s === 'd';                                    // coverage delivery lift travels with distributed selection
 180:     return stackCell(projectsAdj, cats, planShares[p], selKey, selOpts, cfg, budget, exec, reg, del, useCov ? mD : 0, useCov ? mR : 0, recycle);
 181:   };
 182:   const out = { O, budget };
 183:   for (const p of ['c', 'd']) for (const s of ['c', 'd']) for (const d of ['op', 've']) out[`${p}_${s}_${d}`] = cell(p, s, d);
 184:   return out;
 185: }
 186: 
 187: // Shapley weights for 3 binary layers: |T|=0 → 1/3, |T|=1 → 1/6, |T|=2 → 1/3.
 188: const SH_W = [1 / 3, 1 / 6, 1 / 6, 1 / 3];   // indexed by which (other-two) coalition, in the order below
 189: 
 190: // Compute all reported quantities from per-cell value sums and the oracle sum (used for the point estimate AND each
 191: // bootstrap replicate). Returns { gain, shapley:{planning,selection,delivery}, planCentralSel, planDistSel, cells }.
 192: function quantities(sumV, sumO) {
 193:   const eff = (k) => sumV[k] / sumO;
 194:   const v = (P, S, D) => eff(`${P ? 'd' : 'c'}_${S ? 'd' : 'c'}_${D ? 've' : 'op'}`);
 195:   const planning  = SH_W[0] * (v(1, 0, 0) - v(0, 0, 0)) + SH_W[1] * (v(1, 1, 0) - v(0, 1, 0)) + SH_W[2] * (v(1, 0, 1) - v(0, 0, 1)) + SH_W[3] * (v(1, 1, 1) - v(0, 1, 1));
 196:   const selection = SH_W[0] * (v(0, 1, 0) - v(0, 0, 0)) + SH_W[1] * (v(1, 1, 0) - v(1, 0, 0)) + SH_W[2] * (v(0, 1, 1) - v(0, 0, 1)) + SH_W[3] * (v(1, 1, 1) - v(1, 0, 1));
 197:   const delivery  = SH_W[0] * (v(0, 0, 1) - v(0, 0, 0)) + SH_W[1] * (v(1, 0, 1) - v(1, 0, 0)) + SH_W[2] * (v(0, 1, 1) - v(0, 1, 0)) + SH_W[3] * (v(1, 1, 1) - v(1, 1, 0));
 198:   return {
 199:     gain: v(1, 1, 1) - v(0, 0, 0), statusQuo: v(0, 0, 0), coreV0: v(1, 1, 1),
 200:     shapley: { planning, selection, delivery },
 201:     planCentralSel: v(1, 0, 1) - v(0, 0, 1), planDistSel: v(1, 1, 1) - v(0, 1, 1),
 202:   };
 203: }
 204: 
 205: export function fullStack(cfg, { nWorlds = NUM.n_worlds.value, seed = NUM.seed.value, delivery = DELIVERY, planning = PLANNING } = {}) {
 206:   validateDelivery(delivery);
 207:   validatePlanning(planning);
 208:   const rng = makeRng(seed), execRng = makeRng((seed ^ 0x5bd1e995) >>> 0), pRng = makeRng((seed ^ 0x27d4eb2f) >>> 0);
 209:   const keys = [];
 210:   for (const p of ['c', 'd']) for (const s of ['c', 'd']) for (const d of ['op', 've']) keys.push(`${p}_${s}_${d}`);
 211:   const sumV = Object.fromEntries(keys.map((k) => [k, 0])), sumSpent = Object.fromEntries(keys.map((k) => [k, 0]));
 212:   let sumO = 0, sumBudget = 0;
 213:   const W = [];
 214:   for (let w = 0; w < nWorlds; w++) {
 215:     const r = runWorldStack(cfg, rng, execRng, pRng, delivery, planning);
 216:     if (!r || !(r.O > 0)) continue;
 217:     sumO += r.O; sumBudget += r.budget;
 218:     const wv = {};
 219:     for (const k of keys) { sumV[k] += r[k].v; sumSpent[k] += r[k].spent; wv[k] = r[k].v; }
 220:     W.push({ O: r.O, v: wv });
 221:   }
 222:   const point = quantities(sumV, sumO);
 223:   const utilization = Object.fromEntries(keys.map((k) => [k, sumBudget > 0 ? sumSpent[k] / sumBudget : NaN]));
 224:   // world-cluster bootstrap CIs for the gain, the three Shapley values, and the two planning simple effects.
 225:   const B = NUM.bootstrap_reps.value, bRng = makeRng((seed ^ 0x9e3779b9) >>> 0);
 226:   const bs = { gain: [], planning: [], selection: [], delivery: [], planCentralSel: [], planDistSel: [] };
 227:   if (W.length) for (let b = 0; b < B; b++) {
 228:     const bV = Object.fromEntries(keys.map((k) => [k, 0])); let bO = 0;
 229:     for (let k = 0; k < W.length; k++) { const ww = W[Math.floor(bRng.u() * W.length)]; bO += ww.O; for (const kk of keys) bV[kk] += ww.v[kk]; }
 230:     if (bO <= 0) continue;
 231:     const qy = quantities(bV, bO);
 232:     bs.gain.push(qy.gain); bs.planning.push(qy.shapley.planning); bs.selection.push(qy.shapley.selection);
 233:     bs.delivery.push(qy.shapley.delivery); bs.planCentralSel.push(qy.planCentralSel); bs.planDistSel.push(qy.planDistSel);
 234:   }
 235:   const ci = (arr) => { if (!arr.length) return [NaN, NaN]; const a = [...arr].sort((x, y) => x - y); const q = (p) => a[Math.max(0, Math.min(a.length - 1, Math.floor(p * a.length)))]; return [q((1 - NUM.ci_level.value) / 2), q((1 + NUM.ci_level.value) / 2)]; };
 236:   return {
 237:     n: W.length, sumO, statusQuo: point.statusQuo, coreV0: point.coreV0,
 238:     fullStackGain: point.gain, fullStackCI: ci(bs.gain),
 239:     attribution: point.shapley,
 240:     attributionCI: { planning: ci(bs.planning), selection: ci(bs.selection), delivery: ci(bs.delivery) },
 241:     planningUnderCentralSel: point.planCentralSel, planningUnderDistributedSel: point.planDistSel,
 242:     planningCI: { central: ci(bs.planCentralSel), distributed: ci(bs.planDistSel) },
 243:     cells: Object.fromEntries(keys.map((k) => [k, sumV[k] / sumO])),
 244:     utilization,
 245:   };
 246: }
 247: 
 248: // Fail-closed validation of the planning config (Codex round: planning had no provenance).
 249: export function validatePlanning(plan) {
 250:   const bad = [];
 251:   const fin = (k) => { if (typeof plan[k] !== 'number' || !Number.isFinite(plan[k])) bad.push(`${k}=${plan[k]} must be finite`); };
 252:   ['nSec', 'assoc', 'secValSpread', 'creditCoef', 'covSees', 'nKeep', 'agendaCapture'].forEach(fin);
 253:   if (Number.isFinite(plan.nSec) && (!Number.isInteger(plan.nSec) || plan.nSec < 1)) bad.push('nSec must be an integer >= 1');
 254:   if (Number.isFinite(plan.agendaCapture) && Number.isFinite(plan.nSec) && (!Number.isInteger(plan.agendaCapture) || plan.agendaCapture < 0 || plan.agendaCapture >= plan.nSec)) bad.push('agendaCapture must be an integer in [0, nSec-1]');
 255:   if (Number.isFinite(plan.assoc) && (plan.assoc < -1 || plan.assoc > 1)) bad.push('assoc must be in [-1,1]');
 256:   if (Number.isFinite(plan.covSees) && (plan.covSees < 0 || plan.covSees > 1)) bad.push('covSees must be in [0,1]');
 257:   if (Number.isFinite(plan.secValSpread) && plan.secValSpread < 0) bad.push('secValSpread must be >= 0');
 258:   if (Number.isFinite(plan.creditCoef) && plan.creditCoef < 0) bad.push('creditCoef must be >= 0');
 259:   if (Number.isFinite(plan.nKeep) && (!Number.isInteger(plan.nKeep) || plan.nKeep < 1)) bad.push('nKeep must be an integer >= 1');
 260:   if (plan.hardExclude && Number.isFinite(plan.nKeep) && Number.isFinite(plan.nSec) && plan.nKeep > plan.nSec) bad.push('nKeep must be <= nSec when hardExclude is on');
 261:   if (![0, 1, true, false].includes(plan.hardExclude)) bad.push('hardExclude must be 0/1');
 262:   if (!['central', 'symmetric'].includes(plan.excludeMode)) bad.push("excludeMode must be 'central' or 'symmetric'");
 263:   if (!['strict', 'recycle'].includes(plan.residualMode)) bad.push("residualMode must be 'strict' or 'recycle'");
 264:   if (bad.length) throw new Error(`[e9] invalid planning config: ${bad.join('; ')}`);
 265:   return true;
 266: }
 267: 
 268: function main() {
 269:   const pct = (x) => (x >= 0 ? '+' : '') + (100 * x).toFixed(1) + '%';
 270:   import('./scenario-configs.mjs').then((SC) => {
 271:     const { SCENARIO_WORLD: W, PROBABLE } = SC;
 272:     const cfg = { ...baseConfig(), ...W, ...PROBABLE };
 273:     // Recycle residual is the PRIMARY reporting mode (removes the utilization confound; strict mixes planning with
 274:     // unspent budget — Adversarial R1 #7).
 275:     const r = fullStack(cfg, { nWorlds: 1000, planning: { ...PLANNING, residualMode: 'recycle' } });
 276:     safeLog('E9 — FULL STACK: PLANNING, SELECTION and DELIVERY (built on E5, PROBABLE world). Percentages of a global');
 277:     safeLog('full-information greedy REFERENCE (a heuristic, not a guaranteed optimum). Recycle residual (primary).\n');
 278:     const civ = (iv) => `[${pct(iv[0])}, ${pct(iv[1])}]`;
 279:     safeLog(`worlds kept: ${r.n}   (${PLANNING.nSec} COFOG sectors; assoc=${PLANNING.assoc}, secValSpread=${PLANNING.secValSpread}, creditCoef=${PLANNING.creditCoef}, agendaCapture=${PLANNING.agendaCapture})`);
 280:     safeLog(`STATUS QUO (all-central):   ${pct(r.statusQuo)} of reference   ·   CORE v0 FULL (all-distributed): ${pct(r.coreV0)}`);
 281:     safeLog(`FULL-STACK gain (Core v0 − status quo): ${pct(r.fullStackGain)}  95% conditional-MC CI ${civ(r.fullStackCI)}\n`);
 282:     safeLog('SHAPLEY attribution — CONDITIONAL: every layer value is computed through the (declared) planning sector');
 283:     safeLog('generator, so these are NOT the standalone quantified layers. The standalone SELECTION and DELIVERY figures');
 284:     safeLog('come from E5 (no planning layer); E9 supplies the 3-layer STRUCTURE + attribution METHOD, planning qualitative:');
 285:     safeLog(`  planning ${pct(r.attribution.planning)} ${civ(r.attributionCI.planning)} · selection ${pct(r.attribution.selection)} ${civ(r.attributionCI.selection)} · delivery ${pct(r.attribution.delivery)} ${civ(r.attributionCI.delivery)}  (sums to the gain)\n`);
 286: 
 287:     // Adversarial R1 #3: the layer values are LARGE IN PROBABLE, not "robust" — individual Shapley components reverse
 288:     // sign in extreme worlds (even though the FULL diagonal stays positive in every one). Publish the named-world table.
 289:     safeLog('Named-world decomposition (the full diagonal stays positive everywhere; individual layers can reverse):');
 290:     safeLog('   world         full gain   planning   selection   delivery');
 291:     for (const nm of ['PROBABLE', 'PRO_CENTRAL', 'MYOPIA_OFF', 'PRO_DIST']) {
 292:       const rw = fullStack({ ...baseConfig(), ...W, ...SC[nm] }, { nWorlds: 700, planning: { ...PLANNING, residualMode: 'recycle' } });
 293:       safeLog(`   ${nm.padEnd(12)}  ${pct(rw.fullStackGain).padStart(8)}  ${pct(rw.attribution.planning).padStart(8)}  ${pct(rw.attribution.selection).padStart(9)}  ${pct(rw.attribution.delivery).padStart(8)}`);
 294:     }
 295:     safeLog('   → SELECTION and DELIVERY are LARGE in PROBABLE; selection reverses in PRO_CENTRAL and delivery in PRO_DIST');
 296:     safeLog('     (stronger delivery magnifies harmful portfolios there). The full Core v0 advantage holds in ALL worlds.\n');
 297: 
 298:     safeLog('Planning as a CONDITIONAL simple effect (distributed − central planning), context-dependent:');
 299:     safeLog(`  under central selection: ${pct(r.planningUnderCentralSel)} ${civ(r.planningCI.central)} · under distributed selection: ${pct(r.planningUnderDistributedSel)} ${civ(r.planningCI.distributed)} (Core v0 context)\n`);
 300:     const rr = r;
 301: 
 302:     // The planning magnitude is DECLARED and SENSITIVE to two declared assumptions. Present both, honestly.
 303:     safeLog('Planning Shapley over the DECLARED sector-value dispersion by need↔visibility association (the effect is');
 304:     safeLog('modest and CONDITIONAL — not a robust large positive layer):');
 305:     safeLog('   secValSpread \\ assoc   -1.0     -0.6      0.0     +0.6');
 306:     for (const sv of [0.1, 0.3, 0.6]) {
 307:       const row = [-1.0, -0.6, 0.0, 0.6].map((a) => pct(fullStack(cfg, { nWorlds: 500, planning: { ...PLANNING, secValSpread: sv, assoc: a } }).attribution.planning).padStart(7));
 308:       safeLog(`     ${sv.toFixed(1).padStart(4)}                 ${row.join('  ')}`);
 309:     }
 310:     safeLog('   → the SOFT credit distortion alone makes planning a small, sign-ambiguous contribution.\n');
 311: 
 312:     // AGENDA CAPTURE (the second face of power) is the mechanism that makes planning a robust positive layer: the
 313:     // central keeps its lowest-perceived sectors OFF the menu. Direction anchored (Bachrach–Baratz 1962; political
 314:     // budget cycles Drazen–Eslava 2010); SEVERITY kept MODEST (measured composition shifts are single-digit).
 315:     safeLog('Agenda capture (second face of power — central keeps its lowest-perceived COFOG sectors OFF the menu):');
 316:     safeLog('   sectors captured   planning Shapley   planning|distributed-sel   full-stack gain');
 317:     for (const ac of [0, 1, 2, 3]) {
 318:       const ra = fullStack(cfg, { nWorlds: 600, planning: { ...PLANNING, agendaCapture: ac } });
 319:       safeLog(`   ${String(ac).padStart(2)}/${PLANNING.nSec}              ${pct(ra.attribution.planning).padStart(7)}           ${pct(ra.planningUnderDistributedSel).padStart(7)}            ${pct(ra.fullStackGain).padStart(7)}`);
 320:     }
 321:     safeLog('   → agenda capture is the DOMINANT planning mechanism, and it is NOT anchorable today (no cited universal');
 322:     safeLog('     whole-function-exclusion moment, no worked country example yet), so it is PROPOSED CONTINUATION WORK.\n');
 323: 
 324:     safeLog('FRAMING (author decision): DO NOT report a planning-layer FIGURE. The soft-only slice above (~0–3%) omits');
 325:     safeLog('agenda capture — the mechanism that moves the needle — so it UNDERSTATES the layer; headlining it would read');
 326:     safeLog('as "planning is small," which is not what it means. Quantify SELECTION and DELIVERY from E5 (they are LARGE');
 327:     safeLog('IN PROBABLE — not "robust": each reverses sign in an extreme world, see the named-world table above, though');
 328:     safeLog('the full Core v0 advantage holds in every world); present PLANNING QUALITATIVELY — mechanism identified');
 329:     safeLog('(agenda capture / second face of power), DIRECTION anchored (COFOG; election visible-spending shift;');
 330:     safeLog('maintenance neglect), MAGNITUDE deferred to country-specific continuation (illustrative, not conclusive).');
 331:   });
 332: }
 333: import { fileURLToPath } from 'node:url';
 334: if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) main();

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$f='"'scripts/simulation/e4-v5/e9-fullstack-test.mjs'; "'$i=0; Get-Content -LiteralPath $f | ForEach-Object{$i++; '"'{0,4}: {1}' -f "'$i,$_};' in C:\devel\claude-projects\distributed-governance-research
 succeeded in 173ms:
   1: // E9 full-stack tests — invariants for PLANNING × SELECTION × DELIVERY (persistent sectors, Shapley attribution).
   2: // Run: npm run e9:fullstack:test
   3: import { fullStack, validatePlanning, PLANNING } from './e9-fullstack.mjs';
   4: import { delivered2x2, DELIVERY } from './e5-delivery.mjs';
   5: import { baseConfig } from './contract.mjs';
   6: import { SCENARIO_WORLD as W, PROBABLE } from './scenario-configs.mjs';
   7: 
   8: let pass = 0, fail = 0;
   9: const approx = (a, b, tol) => Math.abs(a - b) <= tol;
  10: function check(name, cond, detail = '') { if (cond) { pass++; console.log(`  ok   ${name}`); } else { fail++; console.log(`  FAIL ${name}  ${detail}`); } }
  11: 
  12: const cfg = { ...baseConfig(), ...W, ...PROBABLE };
  13: const NW = 700;
  14: 
  15: // 1) REDUCES TO E5: one sector ⇒ zero value tilt ⇒ planning is a no-op ⇒ the stack collapses to E5 selection×delivery.
  16: {
  17:   const e9 = fullStack(cfg, { nWorlds: NW, planning: { ...PLANNING, nSec: 1, agendaCapture: 0 } });
  18:   const e5 = delivered2x2(cfg, { nWorlds: NW });
  19:   check('nSec=1: status-quo cell == E5 S cell', approx(e9.cells.c_c_op, e5.cells.S, 1e-9), `${e9.cells.c_c_op} vs ${e5.cells.S}`);
  20:   check('nSec=1: Core-v0 cell == E5 A2 cell', approx(e9.cells.d_d_ve, e5.cells.A2, 1e-9), `${e9.cells.d_d_ve} vs ${e5.cells.A2}`);
  21:   check('nSec=1: planning Shapley ~ 0 (one sector ⇒ no-op)', approx(e9.attribution.planning, 0, 1e-9), `got ${e9.attribution.planning}`);
  22: }
  23: 
  24: // 2) SHAPLEY attribution is exact: the three layer values sum to the full-stack gain.
  25: {
  26:   const r = fullStack(cfg, { nWorlds: NW });
  27:   const sum = r.attribution.planning + r.attribution.selection + r.attribution.delivery;
  28:   check('Shapley attribution sums exactly to the full-stack gain', approx(sum, r.fullStackGain, 1e-9), `sum ${sum} vs gain ${r.fullStackGain}`);
  29: }
  30: 
  31: // 3) PLANNING is a genuine, honest, CONTEXT-DEPENDENT layer:
  32: //    (a) the realistic association (high-need = low-visibility) gives a larger planning contribution than the
  33: //        anti-realistic one; (b) the conditional simple effect flips sign between central and distributed selection.
  34: {
  35:   const real = fullStack(cfg, { nWorlds: NW, planning: { ...PLANNING, assoc: -1.0 } });
  36:   const anti = fullStack(cfg, { nWorlds: NW, planning: { ...PLANNING, assoc: +1.0 } });
  37:   check('planning Shapley is larger under the realistic (assoc<0) association', real.attribution.planning > anti.attribution.planning, `real ${real.attribution.planning} anti ${anti.attribution.planning}`);
  38:   check('realistic association gives a positive planning Shapley', real.attribution.planning > 0, `got ${real.attribution.planning}`);
  39:   check('planning simple effect flips: central-sel > distributed-sel', real.planningUnderCentralSel > real.planningUnderDistributedSel, `${real.planningUnderCentralSel} vs ${real.planningUnderDistributedSel}`);
  40: }
  41: 
  42: // 3b) AGENDA CAPTURE (second face of power): the central keeping sectors off the menu raises the planning
  43: //     contribution monotonically and removes the sign flip (planning becomes positive under distributed selection).
  44: {
  45:   const soft = fullStack(cfg, { nWorlds: NW, planning: { ...PLANNING, agendaCapture: 0 } });
  46:   const cap1 = fullStack(cfg, { nWorlds: NW, planning: { ...PLANNING, agendaCapture: 1 } });
  47:   const cap3 = fullStack(cfg, { nWorlds: NW, planning: { ...PLANNING, agendaCapture: 3 } });
  48:   check('agenda capture raises the planning Shapley vs soft distortion', cap1.attribution.planning > soft.attribution.planning);
  49:   check('more agenda capture raises planning further', cap3.attribution.planning > cap1.attribution.planning);
  50:   // more capture monotonically raises the planning contribution under distributed selection (it turns positive under
  51:   // heavier capture; at the small ANCHORED default params, modest capture alone does not flip it — an honest result).
  52:   check('more agenda capture raises the distributed-selection planning effect', cap3.planningUnderDistributedSel > soft.planningUnderDistributedSel);
  53:   check('validatePlanning rejects agendaCapture >= nSec', (() => { try { validatePlanning({ ...PLANNING, agendaCapture: 10 }); return false; } catch { return true; } })());
  54: }
  55: 
  56: // 4) ORDERING (Core v0 beats the status quo). The oracle is a greedy REFERENCE, NOT an upper bound, so cells are NOT
  57: //    required to stay ≤ 100% — that would be a false invariant (this is a scenario regression, not a math invariant).
  58: {
  59:   const r = fullStack(cfg, { nWorlds: NW });
  60:   check('Core v0 full beats the status quo', r.coreV0 > r.statusQuo);
  61:   check('full-stack gain is materially positive', r.fullStackGain > 0.2, `got ${r.fullStackGain}`);
  62:   check('every reported quantity carries a 95% CI', Array.isArray(r.attributionCI.planning) && Array.isArray(r.planningCI.distributed) && Array.isArray(r.fullStackCI));
  63: }
  64: 
  65: // 5) RESIDUAL RECYCLING removes the utilization confound: recycle drives utilization to ~100% and does not lower the gain.
  66: {
  67:   const strict = fullStack(cfg, { nWorlds: NW, planning: { ...PLANNING, residualMode: 'strict' } });
  68:   const recycle = fullStack(cfg, { nWorlds: NW, planning: { ...PLANNING, residualMode: 'recycle' } });
  69:   check('strict residual leaves some budget unspent (utilization < 100%)', strict.utilization.d_d_ve < 0.999, `util ${strict.utilization.d_d_ve}`);
  70:   check('recycling raises utilization toward ~100%', recycle.utilization.d_d_ve > strict.utilization.d_d_ve + 0.02);
  71:   check('recycling does not lower the full-stack gain', recycle.fullStackGain >= strict.fullStackGain - 1e-6);
  72: }
  73: 
  74: // 6) VALIDATION: fail-closed on bad planning + reused delivery validation.
  75: {
  76:   const throwsP = (p) => { try { validatePlanning(p); return false; } catch { return true; } };
  77:   check('validatePlanning accepts the default', validatePlanning(PLANNING) === true);
  78:   check('validatePlanning rejects nSec < 1', throwsP({ ...PLANNING, nSec: 0 }));
  79:   check('validatePlanning rejects assoc out of [-1,1]', throwsP({ ...PLANNING, assoc: 2 }));
  80:   check('validatePlanning rejects NaN creditCoef', throwsP({ ...PLANNING, creditCoef: NaN }));
  81:   check('validatePlanning rejects negative secValSpread', throwsP({ ...PLANNING, secValSpread: -0.1 }));
  82:   check('validatePlanning rejects fractional nKeep', throwsP({ ...PLANNING, nKeep: 2.5 }));
  83:   check('validatePlanning rejects nKeep > nSec when excluding', throwsP({ ...PLANNING, hardExclude: 1, nKeep: 99 }));
  84:   check('validatePlanning rejects a bad residualMode', throwsP({ ...PLANNING, residualMode: 'nope' }));
  85:   check('fullStack rejects an invalid delivery config (missing rep)', (() => { try { fullStack(cfg, { nWorlds: 10, delivery: { ...DELIVERY, verified: { p_det: 0.75, a: 0.2, r: 0.5, gamma: 0.1 } } }); return false; } catch { return true; } })());
  86: }
  87: 
  88: console.log(`\nE9 full stack: ${pass} passed, ${fail} failed.`);
  89: process.exit(fail ? 1 : 0);

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$files=@('"'scripts/simulation/e4-v5/engine.mjs','scripts/simulation/e4-v5/contract.mjs'); foreach("'$f in $files){ "===== $f ====="; $i=0; Get-Content -LiteralPath $f | ForEach-Object{$i++; '"'{0,4}: {1}' -f "'$i,$_} }' in C:\devel\claude-projects\distributed-governance-research
 succeeded in 199ms:
===== scripts/simulation/e4-v5/engine.mjs =====
   1: // E4 v1.14 — fresh mean-scale engine, driven ONLY by the contract.
   2: // Implements DESIGN_SKETCH_v5 §1-§2: anti-value (S = S+ - H), the behavioral coverage estimator (MNAR mean), and
   3: // the central salience-gated harm-myopia model. All value quantities are per-interested-person means. Every literal
   4: // the engine uses comes from the contract; validateConfig() is called before any run (fail-closed).
   5: 
   6: import { THETA, NUM, CLASSIFY, validateConfig, validateDomain } from './contract.mjs';
   7: 
   8: // ---------------- seeded PRNG (Date.now / Math.random forbidden for reproducibility) ----------------
   9: export function makeRng(seed) {
  10:   let s = seed >>> 0;
  11:   const u = () => { // mulberry32
  12:     s |= 0; s = (s + 0x6D2B79F5) | 0;
  13:     let t = Math.imul(s ^ (s >>> 15), 1 | s);
  14:     t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
  15:     return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  16:   };
  17:   let spare = null;
  18:   const normal = () => { // Box-Muller with cached spare
  19:     if (spare !== null) { const v = spare; spare = null; return v; }
  20:     let a = u(); if (a < 1e-12) a = 1e-12;
  21:     const b = u();
  22:     const r = Math.sqrt(-2 * Math.log(a)), th = 2 * Math.PI * b;
  23:     spare = r * Math.sin(th);
  24:     return r * Math.cos(th);
  25:   };
  26:   const exponential = (mean) => -mean * Math.log(1 - u() + 1e-12);
  27:   const gamma = (k) => { // Marsaglia-Tsang
  28:     if (k < 1) return gamma(k + 1) * Math.pow(u() + 1e-12, 1 / k);
  29:     const d = k - 1 / 3, c = 1 / Math.sqrt(9 * d);
  30:     for (;;) {
  31:       let x, v;
  32:       do { x = normal(); v = 1 + c * x; } while (v <= 0);
  33:       v = v * v * v;
  34:       const uu = u();
  35:       if (uu < 1 - 0.0331 * x * x * x * x) return d * v;
  36:       if (Math.log(uu + 1e-12) < 0.5 * x * x + d * (1 - v + Math.log(v))) return d * v;
  37:     }
  38:   };
  39:   const beta = (a, b) => { const ga = gamma(a), gb = gamma(b); return ga / (ga + gb); };
  40:   const binomialApprox = (n, prob) => {
  41:     if (n <= 0 || prob <= 0) return 0;
  42:     if (prob >= 1) return n;
  43:     const m = n * prob, sd = Math.sqrt(n * prob * (1 - prob));
  44:     return Math.max(0, Math.min(n, Math.round(m + sd * normal())));
  45:   };
  46:   return { u, normal, exponential, gamma, beta, binomialApprox };
  47: }
  48: 
  49: // ---------------- world generation (one economy of projects) ----------------
  50: // Returns an array of admissible projects, each with true net value S, cost c, and the three arms' signals.
  51: export function generateWorld(cfg, rng) {
  52:   const projects = [];
  53:   for (let j = 0; j < cfg.K; j++) {
  54:     const q = cfg.m_q + cfg.s_q * rng.normal();
  55:     const V = rng.beta(cfg.a_V, cfg.b_V);                       // visibility in [0,1], heavy-tailed toward 0
  56:     const qStd = cfg.s_q > 0 ? (q - cfg.m_q) / cfg.s_q : 0;
  57:     const g = cfg.zeta * qStd + Math.sqrt(Math.max(0, 1 - cfg.zeta * cfg.zeta)) * rng.normal();
  58:     const qCat = cfg.m_q + cfg.s_q * g;                         // OBSERVABLE category-value proxy (noisy, shrunk toward
  59:                                                                // the mean by 1-zeta) — what a profile rule/delegate sees;
  60:                                                                // NOT the latent true q (using true q would flatter coverage)
  61:     const cm = cfg.sigma_cm * rng.normal();                    // COMMON-MODE error: ONE per-project shared error on the
  62:                                                                // profile/delegation share (shared platform/recommender;
  63:                                                                // concentrated super-delegates) — does NOT average out
  64:     const c = cfg.c_lo + (cfg.c_hi - cfg.c_lo) * rng.u();
  65:     const r = rng.beta(cfg.a_r, cfg.b_r);
  66:     const n = rng.binomialApprox(cfg.N, r);
  67:     if (n === 0) continue;                                      // inadmissible in ALL arms (dropped, counted below)
  68: 
  69:     let sumPos = 0, sumNeg = 0, sumReport = 0;
  70:     const fProfileStart = cfg.f_active + cfg.f_deleg;           // channel thresholds; rest (=f_profile) = profile rules
  71:     for (let i = 0; i < n; i++) {
  72:       let u = q + cfg.sigma * rng.normal();
  73:       if (rng.u() < cfg.pi_opp) u -= rng.exponential(cfg.mu_opp);   // intense-minority opposition
  74:       if (u >= 0) sumPos += u; else sumNeg += -u;
  75:       const reportProb = u >= 0 ? cfg.p : cfg.p * (1 - cfg.beta);
  76:       if (rng.u() < reportProb) {
  77:         // Signal-quality channel of Core-v0's universal coverage. active: full individual fidelity. microdelegation:
  78:         // individual signal + bounded revocable noise AND a small persistent bias d_bias toward the delegate's category
  79:         // view qCat (the delegate values somewhat differently). profile rule: reverts toward the OBSERVABLE category
  80:         // proxy qCat — high alignment but coarser on the individual's project-specific idiosyncrasy AND harm perception.
  81:         const ch = rng.u();
  82:         let sig;
  83:         if (ch < cfg.f_active)       sig = u + cfg.sigma_e * rng.normal();
  84:         else if (ch < fProfileStart) sig = (1 - cfg.d_bias) * u + cfg.d_bias * qCat + cfg.k_deleg * cfg.sigma_e * rng.normal() + cm;
  85:         else                         sig = cfg.phi_prof * u + (1 - cfg.phi_prof) * qCat + cfg.sigma_e * rng.normal() + cm;
  86:         sumReport += sig / cfg.p;
  87:       }
  88:     }
  89:     const Splus = sumPos / n;                                   // support (mean of positive parts)
  90:     const H = sumNeg / n;                                       // harm (mean opposition intensity)
  91:     const S = Splus - H;                                        // true net value (mean scale)
  92:     const M_D = sumReport / n;                                  // coverage estimator with signal-quality composition
  93:                                                                // (active/microdelegation/profile); pure f_active=1 => E[M_D|u]=S+ -(1-beta)H
  94: 
  95:     const v_pj = cfg.v_p0 + cfg.gamma * g + cfg.sigma_v * rng.normal();
  96:     const sV = Math.pow(Math.max(0, Math.min(1, V)), cfg.s_exp);// harm gate: ~0 on long tail, ~1 when salient
  97:     const M_C = cfg.a + cfg.b * Splus + cfg.w * (v_pj - Splus) - cfg.b_H_C * sV * H + cfg.sigma_C * rng.normal();
  98: 
  99:     const P = V;                                               // visible salience -> credit (linear scale would cancel under z)
 100:     projects.push({ S, c, M_C, M_D, P });
 101:   }
 102:   return projects;
 103: }
 104: 
 105: // ---------------- selection: one common interface for all three arms ----------------
 106: function zscore(vals, fallbackSd) {
 107:   const n = vals.length;
 108:   if (n === 0) return [];
 109:   const mean = vals.reduce((s, x) => s + x, 0) / n;
 110:   let v = 0; for (const x of vals) v += (x - mean) * (x - mean);
 111:   let sd = Math.sqrt(v / n);
 112:   if (!(sd > 0)) sd = fallbackSd;
 113:   return vals.map((x) => (x - mean) / sd);
 114: }
 115: 
 116: // Fund greedily by rank score among the arm's own eligible set, under budget, exact residual fill, tie-break lower j.
 117: // Returns the FUNDED INDEX SET (in funding order). fundedValue sums S over it — E5 (delivery) reuses the set to apply
 118: // per-project delivered fractions, so selection and delivery stay separable on the identical funded portfolio.
 119: export function fundedSet(projects, signalKey, cfg, budget, opts = {}) {
 120:   const idx = [];
 121:   for (let j = 0; j < projects.length; j++) {
 122:     const x = projects[j][signalKey];
 123:     if (x - cfg.h * projects[j].c > 0) idx.push(j);            // own-estimate eligibility gate
 124:   }
 125:   if (idx.length === 0) return [];
 126:   const rawVal = idx.map((j) => (projects[j][signalKey] - cfg.h * projects[j].c) / projects[j].c);
 127:   let score = zscore(rawVal, NUM.z_fallback_sd.value);
 128:   if (opts.creditTilt) {                                        // central credit tilt
 129:     const zP = zscore(idx.map((j) => projects[j].P / projects[j].c), NUM.z_fallback_sd.value);
 130:     score = score.map((s, t) => (1 - cfg.lambda) * s + cfg.lambda * zP[t]);
 131:   }
 132:   const order = idx.map((j, t) => ({ j, s: score[t] }))
 133:     .sort((A, B) => (B.s - A.s) || (A.j - B.j));               // desc score, tie-break lower index
 134:   let spent = 0; const funded = [];
 135:   for (const { j } of order) {
 136:     if (spent + projects[j].c <= budget) { spent += projects[j].c; funded.push(j); }
 137:   }
 138:   return funded;
 139: }
 140: 
 141: function fundedValue(projects, signalKey, cfg, budget, opts = {}) {
 142:   let delivered = 0;
 143:   for (const j of fundedSet(projects, signalKey, cfg, budget, opts)) delivered += projects[j].S;
 144:   return delivered;
 145: }
 146: 
 147: export function runWorld(cfg, rng) {
 148:   const projects = generateWorld(cfg, rng);
 149:   if (projects.length === 0) return { D: 0, C: 0, O: 0, empty: true };
 150:   let totalCost = 0; for (const pr of projects) totalCost += pr.c;
 151:   const budget = cfg.phi * totalCost;
 152:   const O = fundedValue(projects, 'S',   cfg, budget);
 153:   const C = fundedValue(projects, 'M_C', cfg, budget, { creditTilt: true });
 154:   const D = fundedValue(projects, 'M_D', cfg, budget);
 155:   return { D, C, O, empty: false };
 156: }
 157: 
 158: // ---------------- estimand m(theta) = E[(D-C)/O | O>o_min], plus pi_deg ----------------
 159: function median(arr) {
 160:   if (arr.length === 0) return 0;
 161:   const a = [...arr].sort((x, y) => x - y);
 162:   const mid = a.length >> 1;
 163:   return a.length % 2 ? a[mid] : 0.5 * (a[mid - 1] + a[mid]);
 164: }
 165: 
 166: export function estimand(cfg, { nWorlds = NUM.n_worlds.value, seed = NUM.seed.value, oMinAbs = null } = {}) {
 167:   validateConfig(cfg);
 168:   validateDomain(cfg);
 169:   const rng = makeRng(seed);
 170:   const worlds = [];
 171:   for (let wI = 0; wI < nWorlds; wI++) {
 172:     const { D, C, O, empty } = runWorld(cfg, rng);
 173:     if (!empty) worlds.push({ D, C, O });
 174:   }
 175:   const Os = worlds.map((x) => x.O);
 176:   // o_min is an ABSOLUTE floor (default from this config's own median). Passing oMinAbs pins ONE floor across a
 177:   // whole sweep, so degenerate corners (tiny O => exploding (D-C)/O) get most worlds excluded and flagged, rather
 178:   // than injecting divergent ratios into the envelope (Codex: denominator-weighting divergence).
 179:   const o_min = oMinAbs !== null ? oMinAbs : CLASSIFY.o_min_frac.value * median(Os);
 180:   const kept = worlds.filter((x) => x.O > o_min);
 181:   const degCount = worlds.length - kept.length;
 182:   const pi_deg = worlds.length ? degCount / worlds.length : 1;
 183:   // RATIO OF SUMS (robust): m = Σ(D−C)/ΣO over retained worlds. Bounded and stable — a single tiny-O world cannot
 184:   // dominate (as it would in the per-world-ratio mean, Codex's (1,1)/(−1,100) divergence). Interpretation: total
 185:   // true value the arm delivers, as a fraction of the total full-information achievable value.
 186:   const num = kept.reduce((s, x) => s + (x.D - x.C), 0);
 187:   const den = kept.reduce((s, x) => s + x.O, 0);
 188:   const m_hat = den > 0 ? num / den : NaN;
 189: 
 190:   // world-cluster bootstrap CI (inner simulation variability only): resample worlds, recompute the ratio of sums.
 191:   const B = NUM.bootstrap_reps.value;
 192:   const bootRng = makeRng((seed ^ 0x9e3779b9) >>> 0);
 193:   const boots = [];
 194:   if (kept.length) {
 195:     for (let bI = 0; bI < B; bI++) {
 196:       let bn = 0, bd = 0;
 197:       for (let t = 0; t < kept.length; t++) { const w = kept[Math.floor(bootRng.u() * kept.length)]; bn += (w.D - w.C); bd += w.O; }
 198:       if (bd > 0) boots.push(bn / bd);
 199:     }
 200:     boots.sort((a, b) => a - b);
 201:   }
 202:   const lo = boots.length ? boots[Math.floor((1 - NUM.ci_level.value) / 2 * boots.length)] : NaN;
 203:   const hi = boots.length ? boots[Math.floor((1 + NUM.ci_level.value) / 2 * boots.length) - 1] : NaN;
 204: 
 205:   const sumD = kept.reduce((s, x) => s + x.D, 0), sumC = kept.reduce((s, x) => s + x.C, 0);
 206:   const dOverO = den > 0 ? sumD / den : NaN, cOverO = den > 0 ? sumC / den : NaN;  // efficiency of each arm vs oracle
 207:   const enough = kept.length >= Math.max(NUM.min_kept_floor.value, NUM.min_kept_frac.value * worlds.length);
 208:   return { m_hat, ci: [lo, hi], pi_deg, n_kept: kept.length, n_worlds: worlds.length, o_min, enough, dOverO, cOverO };
 209: }
===== scripts/simulation/e4-v5/contract.mjs =====
   1: // E4 v1.14 — MACHINE-READABLE MODEL CONTRACT (single source of truth)
   2: // Codex's single sharpest improvement: one versioned, outcome-blind contract that is the ONLY path to evidence.
   3: // It enumerates theta_all, numerical constants, joint D_F / R_alpha sets, o_min/delta, classification thresholds,
   4: // and the closed output schema. `validate()` throws on unknown or unused fields. Nothing in the engine may use a
   5: // literal that is not registered here.
   6: //
   7: // Param `kind`:
   8: //   physical    — a real quantity with a hard physical domain; D_M\D_F is genuine impossibility (prob in [0,1], sd>=0)
   9: //   directional — a theory-backed sign assumption (w,b,b_H_C,gamma >= 0). NOT a physical law: base case keeps the
  10: //                 sign, but a sign-reversal RIVAL model is reported as sensitivity (author decision 2026-07-11).
  11: //   structural  — a shape/location parameter (means, spreads, counts)
  12: //   numerical   — a solver/Monte-Carlo constant
  13: //   normative   — a declared normative choice (aggregation A); never randomized
  14: 
  15: export const CONTRACT_VERSION = 'e4-v5.0.0';
  16: 
  17: // Each entry: { value, kind, dm:[lo,hi], df:[lo,hi], ralpha:[lo,hi], note }
  18: // dm = mathematical domain; df = physically-possible (sign backbone); ralpha = expectable band (magnitude headline).
  19: export const THETA = {
  20:   // ---- population & projects (structural) ----
  21:   N:      { value: 4000, kind: 'structural', dm: [1, Infinity],   df: [100, 100000], ralpha: [1000, 20000], note: 'population size' },
  22:   K:      { value: 200,  kind: 'structural', dm: [2, Infinity],   df: [20, 5000],    ralpha: [80, 800],     note: 'candidate projects' },
  23:   m_q:    { value: 0.4,  kind: 'structural', dm: [-Infinity, Infinity], df: [-5, 5],  ralpha: [0.0, 1.0],    note: 'mean project quality (mean scale)' },
  24:   s_q:    { value: 1.0,  kind: 'physical',   dm: [0, Infinity],   df: [0, 10],       ralpha: [0.5, 2.0],    note: 'sd of project quality' },
  25:   a_V:    { value: 0.5,  kind: 'physical',   dm: [0, Infinity],   df: [0.05, 50],    ralpha: [0.3, 1.0],    note: 'visibility Beta a (a<1 => heavy tail toward 0)' },
  26:   b_V:    { value: 3.0,  kind: 'physical',   dm: [0, Infinity],   df: [0.05, 50],    ralpha: [1.5, 6.0],    note: 'visibility Beta b (mass on low-visibility long tail)' },
  27:   zeta:   { value: 0.6,  kind: 'physical',   dm: [-1, 1],         df: [0, 1],        ralpha: [0.3, 0.85],   note: 'corr(category signal g, quality q)' },
  28:   c_lo:   { value: 1.0,  kind: 'physical',   dm: [0, Infinity],   df: [0.01, 1e6],   ralpha: [0.5, 2.0],    note: 'min cost' },
  29:   c_hi:   { value: 5.0,  kind: 'physical',   dm: [0, Infinity],   df: [0.01, 1e6],   ralpha: [3.0, 10.0],   note: 'max cost' },
  30:   a_r:    { value: 1.2,  kind: 'physical',   dm: [0, Infinity],   df: [0.05, 50],    ralpha: [0.8, 3.0],    note: 'reach Beta a' },
  31:   b_r:    { value: 8.0,  kind: 'physical',   dm: [0, Infinity],   df: [0.05, 50],    ralpha: [4.0, 20.0],   note: 'reach Beta b (most projects reach a minority)' },
  32:   phi:    { value: 0.35, kind: 'physical',   dm: [0, 1],          df: [0.01, 0.99],  ralpha: [0.2, 0.6],    note: 'budget share of total cost' },
  33: 
  34:   // ---- individual value & ANTI-VALUE (opposition != indifference) ----
  35:   sigma:   { value: 1.0,  kind: 'physical', dm: [0, Infinity], df: [0, 10],   ralpha: [0.5, 2.0],  note: 'sd of idiosyncratic taste eps' },
  36:   pi_opp:  { value: 0.15, kind: 'physical', dm: [0, 1],        df: [0, 1],    ralpha: [0.03, 0.35], note: 'prevalence of intense opponents' },
  37:   mu_opp:  { value: 3.0,  kind: 'physical', dm: [0, Infinity], df: [0, 50],   ralpha: [1.0, 6.0],  note: 'mean opposition intensity (Exponential)' },
  38: 
  39:   // ---- distributed arm (coverage) ----
  40:   p:       { value: 0.25, kind: 'physical', dm: [0, 1], df: [1e-3, 1], ralpha: [0.05, 0.6], note: 'participation prob (report if support)' },
  41:   beta:    { value: 0.40, kind: 'physical', dm: [0, 1], df: [0, 1],    ralpha: [0.1, 0.7],  note: 'adverse-voice suppression of opponents' },
  42:   sigma_e: { value: 0.5,  kind: 'physical', dm: [0, Infinity], df: [0, 10], ralpha: [0.1, 1.5], note: 'sd of report noise' },
  43:   // Signal-quality composition of the UNIVERSAL (p=1) Core-v0 coverage: three channels whose fidelity to the
  44:   // individual's true project-specific value differs. Defaults here are PURE (all active, full fidelity) so controls/
  45:   // theorem benchmark the clean estimator; the scenarios carry the realistic composition (~5% active / ~35%
  46:   // microdelegation / ~60% profile rules). f_profile is derived = 1 - f_active - f_deleg.
  47:   f_active: { value: 1.0, kind: 'physical', dm: [0, 1], df: [0, 1], ralpha: [0.02, 0.10], note: 'share with ACTIVE direct participation (signal fidelity 1.0)' },
  48:   f_deleg:  { value: 0.0, kind: 'physical', dm: [0, 1], df: [0, 1], ralpha: [0.2, 0.5],   note: 'share via MICRODELEGATION (individual signal + modest, revocable noise)' },
  49:   k_deleg:  { value: 1.0, kind: 'physical', dm: [0, Infinity], df: [1, 5], ralpha: [1.2, 2.0], note: 'delegation report-noise multiplier on sigma_e (>=1; bounded, revocable, delegate can ask)' },
  50:   phi_prof: { value: 1.0, kind: 'physical', dm: [0, 1], df: [0, 1], ralpha: [0.7, 0.95], note: 'PROFILE-rule category fidelity: signal = phi_prof*u + (1-phi_prof)*qCat, where qCat is the OBSERVABLE category proxy (m_q+s_q*g), NOT latent true q' },
  51:   d_bias:   { value: 0.0, kind: 'physical', dm: [0, 1], df: [0, 1], ralpha: [0.05, 0.2], note: 'microdelegation BIAS: persistent pull of the delegated signal toward the delegate category view qCat (bounded — revocable, delegate can ask)' },
  52:   sigma_cm: { value: 0.0, kind: 'physical', dm: [0, Infinity], df: [0, 10], ralpha: [0.3, 1.0], note: 'COMMON-MODE error sd on the profile/delegation share: one per-project shared error (shared platform/recommender; concentrated super-delegates) that does NOT average out across reporters. 0 = independent errors (clean reference)' },
  53: 
  54:   // ---- central arm (salience-gated harm myopia) ----
  55:   v_p0:    { value: 0.6,  kind: 'structural',  dm: [-Infinity, Infinity], df: [-5, 5], ralpha: [-0.5, 1.5], note: "planner's own baseline position" },
  56:   gamma:   { value: 0.5,  kind: 'directional', dm: [-Infinity, Infinity], df: [0, 5],  ralpha: [0.2, 1.2],  note: 'loading of planner projection on category signal g' },
  57:   sigma_v: { value: 0.5,  kind: 'physical',    dm: [0, Infinity], df: [0, 10], ralpha: [0.1, 1.5], note: 'sd of projection idiosyncrasy' },
  58:   a:       { value: 0.2,  kind: 'structural',  dm: [-Infinity, Infinity], df: [-5, 5], ralpha: [-0.3, 0.8], note: 'central intercept / systematic level bias' },
  59:   b:       { value: 0.9,  kind: 'directional', dm: [-Infinity, Infinity], df: [0, 3], ralpha: [0.6, 1.1],  note: 'central responsiveness to SUPPORT S+' },
  60:   w:       { value: 0.5,  kind: 'directional', dm: [-Infinity, Infinity], df: [0, 3], ralpha: [0.2, 1.0],  note: 'directional projection weight' },
  61:   b_H_C:   { value: 0.5,  kind: 'directional', dm: [-Infinity, Infinity], df: [0, 3], ralpha: [0.1, 1.0],  note: 'central harm-detection coefficient (myopia; salience-gated)' },
  62:   s_exp:   { value: 2.0,  kind: 'physical',    dm: [0, Infinity], df: [0.2, 10], ralpha: [1.0, 4.0], note: 'harm-gate exponent: s(V)=V^s_exp (>1 => near-blind on long tail)' },
  63:   sigma_C: { value: 0.5,  kind: 'physical',    dm: [0, Infinity], df: [0, 10], ralpha: [0.1, 1.5], note: 'sd of central estimation noise eta' },
  64: 
  65:   // ---- selection ----
  66:   h:       { value: 0.0,  kind: 'physical',    dm: [0, Infinity], df: [0, 10], ralpha: [0, 1.0], note: 'opportunity-cost hurdle (shared across arms)' },
  67:   lambda:  { value: 0.15, kind: 'physical',    dm: [0, 1], df: [0, 1], ralpha: [0, 0.4], note: 'central credit-pressure weight (credit salience P = visibility V; a linear scale on P would cancel under z-scoring, so none is registered)' },
  68: 
  69:   // ---- E5 DELIVERY / BUDGET LAYERS (parametric channels; DEFAULT 0 = OFF => the central is granted zero admin
  70:   //      cost and zero leakage, and E5 reduces EXACTLY to the E4 selection result). Turned on only in the
  71:   //      cost+corruption extension, anchored to real public-budget/corruption data (ADMIN-COST-LEG.md,
  72:   //      LEAKAGE-CORRUPTION-LEG.md). Delivered value per arm = selection · (1-kappa) · (1-leak). ----
  73:   kappa_C: { value: 0.0, kind: 'physical', dm: [0, 1], df: [0, 0.9], ralpha: [0, 0.6], note: 'admin-machinery cost share the CENTRAL consumes (value-proxy studies, allocation, prioritization, AI-fiscalization, delivery mgmt, licenses, travel). OFF=0' },
  74:   kappa_D: { value: 0.0, kind: 'physical', dm: [0, 1], df: [0, 0.9], ralpha: [0, 0.3], note: "Core v0's OWN operating cost share (platform + AI). base: kappa_D < kappa_C. OFF=0" },
  75:   leak_C:  { value: 0.0, kind: 'physical', dm: [0, 1], df: [0, 0.9], ralpha: [0, 0.5], note: 'leakage/diversion fraction of allocated funds under the OPAQUE central process. OFF=0' },
  76:   leak_D:  { value: 0.0, kind: 'physical', dm: [0, 1], df: [0, 0.9], ralpha: [0, 0.3], note: "leakage fraction under Core v0 (auditable; base: leak_D < leak_C but NOT zero — new attack surfaces). OFF=0" },
  77: };
  78: 
  79: // Aggregation A is NORMATIVE and declared, never randomized into a prior.
  80: export const AGGREGATION = { primary: 'mean', alternatives: ['harm_weighted'], note: 'A=mean primary; harm-weighted is a SEPARATE declared estimand' };
  81: 
  82: // ---- numerical / Monte-Carlo constants (nu_all) ----
  83: export const NUM = {
  84:   n_worlds:       { value: 1500, note: 'Monte-Carlo worlds per theta' },
  85:   seed:           { value: 20260711, note: 'base PRNG seed (Date.now/Math.random forbidden)' },
  86:   bootstrap_reps: { value: 400,  note: 'world-cluster bootstrap replications (inner variability only)' },
  87:   ci_level:       { value: 0.95, note: 'bootstrap CI level' },
  88:   z_fallback_sd:  { value: 1.0,  note: 'z-score sd fallback when eligible-set sd=0' },
  89:   min_kept_frac:  { value: 0.5,  note: 'a cell is sufficient only if kept/(simulated) worlds >= this' },
  90:   min_kept_floor: { value: 40,   note: 'and kept worlds >= this absolute floor; else numerically-unresolved/degenerate' },
  91: };
  92: 
  93: // ---- estimand thresholds (frozen, mean-value units; NOT the retired 0.05) ----
  94: export const CLASSIFY = {
  95:   o_min_frac:  { value: 0.05, note: 'o_min = o_min_frac * median(O_W); worlds with O<=o_min excluded from m, counted in pi_deg' },
  96:   delta:       { value: 0.03, note: 'materiality band on m (fraction-of-oracle units); justified in delivered-value terms, NOT the 0.05 rebuild gate' },
  97:   zero_tol:    { value: 0.005, note: 'sign_status=zero-touching when |m|<=zero_tol or CI straddles 0 within this' },
  98:   pi_deg_warn: { value: 0.10, note: 'degeneracy_status=high above this share' },
  99: };
 100: 
 101: // alpha coverage family for the magnitude (R_alpha) layer
 102: export const ALPHA_LEVELS = [0.5, 0.8, 0.95];
 103: 
 104: // ---- EVIDENCE configuration (single source of truth for the evidence run; hashed into theta_id) ----
 105: // NOTE (2026-07-11): a v6.1 redesign is planned — report EVERYTHING via a space-filling sweep over the WHOLE
 106: // uncertain set (incl. thesis levers a_V,b_V,s_exp; NO frozen favourable lever) + ceteris-paribus frontier locators
 107: // (per axis: frontier location, possible values, the declared central-favourable endpoint, probable case ± CI). That rewrite is GATED on
 108: // first anchoring each variable's probable (R_alpha) value to theory/empirics — see research/e4-plausible-anchors.md.
 109: // Current block is the working v6 config; do not treat the swept set below as the final "everything" sweep.
 110: export const EVIDENCE = {
 111:   world:        { N: 1500, K: 150 },   // inside R_alpha for N,K
 112:   probable_nw:  800,                    // worlds for the PROBABLE headline point (with CI)
 113:   sweep_nw:     90,                     // worlds per envelope sample point
 114:   n_env:        400,                    // uniform samples over the ANCHORED scenario envelope (defensible box, not
 115:                                         //   arbitrary raw D_F — sampling uniform over a too-wide D_F would distort the
 116:                                         //   sign fraction). The envelope per knob = [min,max] of the 3 anchored scenarios.
 117:   // Held at base (not varied by the anchored scenarios): computational/cost/value-scale nuisances.
 118:   fixed:        ['N', 'K', 'c_lo', 'c_hi', 'm_q', 's_q', 'sigma', 'sigma_v', 'v_p0', 'phi', 'h'],
 119: };
 120: 
 121: // ---- CLOSED output schema (embargo-critical): additionalProperties:false; cannot express D/C or ratio-parity-1 ----
 122: export const OUTPUT_SCHEMA = {
 123:   $schema: 'http://json-schema.org/draft-07/schema#',
 124:   type: 'object',
 125:   additionalProperties: false,
 126:   required: ['contract_version', 'theta_id', 'pi_deg', 'm_hat', 'ci', 'df_dist_share', 'df_cent_share', 'df_par_share', 'sign_status', 'materiality_status', 'degeneracy_status', 'numerical_status'],
 127:   properties: {
 128:     contract_version:   { type: 'string' },
 129:     theta_id:           { type: 'string' },
 130:     pi_deg:             { type: 'number', minimum: 0, maximum: 1 },
 131:     m_hat:              { type: 'number' },                 // Σ(D-C)/ΣO over kept worlds, a signed fraction of oracle
 132:     ci:                 { type: 'array', items: { type: 'number' }, minItems: 2, maxItems: 2 },
 133:     df_dist_share:      { type: 'number', minimum: 0, maximum: 1 },  // SIGN over D_F: uniform-VOLUME fraction (space-filling
 134:     df_cent_share:      { type: 'number', minimum: 0, maximum: 1 },  //   MC) where each institution wins — a real volume
 135:     df_par_share:       { type: 'number', minimum: 0, maximum: 1 },  //   fraction, not a corner count
 136:     df_dist_share_se:   { type: 'number', minimum: 0, maximum: 1 },  // Monte-Carlo SE of df_dist_share (binomial)
 137:     m_Ralpha:           { type: 'object' },                 // magnitude by alpha level (measured over joint R_alpha)
 138:     sign_status:        { enum: ['pos', 'neg', 'zero-touching', 'indeterminate'] },
 139:     materiality_status: { enum: ['material', 'negligible', 'uncertain'] },
 140:     degeneracy_status:  { enum: ['ok', 'high', 'degenerate'] },
 141:     numerical_status:   { enum: ['resolved', 'unresolved'] },
 142:   },
 143:   // NOTE: there is deliberately NO field able to carry D/C, a ratio with parity 1, or an institution-performance
 144:   // multiplier. The render adapter additionally rejects the tokens 'x'/'×'/'D/C' in performance context.
 145: };
 146: 
 147: // Tokens the sole render adapter must reject in institution-performance context (ASCII x, Unicode multiplication, ratio).
 148: export const EMBARGO_TOKENS = ['×', 'D/C', 'C/D'];
 149: 
 150: // ---------- validation: fail-closed on unknown / unused ----------
 151: export function knownThetaKeys() { return new Set(Object.keys(THETA)); }
 152: 
 153: // Throw if a config carries any key not registered in THETA (unknown), or (optionally) if a registered key is
 154: // missing (unused-required). Engines call this before running.
 155: export function validateConfig(cfg, { requireAll = true } = {}) {
 156:   const known = knownThetaKeys();
 157:   const bad = Object.keys(cfg).filter((k) => !known.has(k));
 158:   if (bad.length) throw new Error(`[contract] unknown parameter(s) not in THETA: ${bad.join(', ')}`);
 159:   if (requireAll) {
 160:     const missing = [...known].filter((k) => !(k in cfg));
 161:     if (missing.length) throw new Error(`[contract] missing required parameter(s): ${missing.join(', ')}`);
 162:   }
 163:   for (const [k, v] of Object.entries(cfg)) {
 164:     if (typeof v !== 'number' || !Number.isFinite(v)) throw new Error(`[contract] ${k} must be a finite number, got ${v}`);
 165:     const { dm } = THETA[k];
 166:     if (v < dm[0] || v > dm[1]) throw new Error(`[contract] ${k}=${v} outside mathematical domain [${dm[0]}, ${dm[1]}]`);
 167:   }
 168:   return true;
 169: }
 170: 
 171: // Executable-domain validation (fail closed): the printed DGP is only defined on a subset of the scalar box.
 172: // validateConfig checks names + scalar bounds; validateDomain checks the constraints that keep the DGP meaningful.
 173: export function validateDomain(cfg) {
 174:   const bad = [];
 175:   const finite = (k) => { if (!Number.isFinite(cfg[k])) bad.push(`${k} not finite`); };
 176:   for (const k of Object.keys(THETA)) finite(k);
 177:   const intPos = (k, min) => { if (!Number.isInteger(cfg[k]) || cfg[k] < min) bad.push(`${k} must be integer >= ${min}`); };
 178:   intPos('N', 1); intPos('K', 2);
 179:   const pos = (k) => { if (!(cfg[k] > 0)) bad.push(`${k} must be > 0`); };
 180:   pos('a_V'); pos('b_V'); pos('a_r'); pos('b_r');           // Beta shapes must be positive
 181:   pos('p');                                                 // engine divides by p
 182:   if (!(cfg.c_lo > 0)) bad.push('c_lo must be > 0');
 183:   if (!(cfg.c_hi > cfg.c_lo)) bad.push('c_hi must be > c_lo');
 184:   if (!(cfg.phi > 0 && cfg.phi < 1)) bad.push('phi must be in (0,1)');
 185:   const unit = (k) => { if (cfg[k] < 0 || cfg[k] > 1) bad.push(`${k} must be in [0,1]`); };
 186:   unit('p'); unit('beta'); unit('pi_opp'); unit('lambda');
 187:   unit('f_active'); unit('f_deleg'); unit('phi_prof'); unit('d_bias');
 188:   unit('kappa_C'); unit('kappa_D'); unit('leak_C'); unit('leak_D');
 189:   if (cfg.f_active + cfg.f_deleg > 1 + 1e-9) bad.push('f_active + f_deleg must be <= 1 (f_profile = 1 - f_active - f_deleg >= 0)');
 190:   if (!(cfg.k_deleg >= 1)) bad.push('k_deleg must be >= 1 (delegation adds noise, never removes it)');
 191:   if (cfg.zeta < -1 || cfg.zeta > 1) bad.push('zeta must be in [-1,1]');   // zeta is a correlation, NOT a unit interval
 192:   const nonneg = (k) => { if (cfg[k] < 0) bad.push(`${k} must be >= 0`); };
 193:   ['s_q', 'sigma', 'mu_opp', 'sigma_e', 'sigma_v', 'sigma_C', 's_exp', 'h', 'sigma_cm'].forEach(nonneg);
 194:   if (bad.length) throw new Error(`[contract] executable-domain violation: ${bad.join('; ')}`);
 195:   return true;
 196: }
 197: 
 198: // Is cfg[k] within its declared expectable band R_alpha? (region membership, for manifests/labels — not fatal)
 199: export function inRalpha(cfg, keys = Object.keys(THETA)) {
 200:   return keys.every((k) => cfg[k] >= THETA[k].ralpha[0] && cfg[k] <= THETA[k].ralpha[1]);
 201: }
 202: 
 203: // FNV-1a hash of an arbitrary JSON-able manifest (no Date/Math.random).
 204: export function resolvedHash(manifest) {
 205:   const s = JSON.stringify(manifest);
 206:   let h = 0x811c9dc5;
 207:   for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; }
 208:   return 'fnv1a-' + h.toString(16).padStart(8, '0');
 209: }
 210: 
 211: // Base config = registered default values.
 212: export function baseConfig() {
 213:   const cfg = {};
 214:   for (const [k, spec] of Object.entries(THETA)) cfg[k] = spec.value;
 215:   return cfg;
 216: }
 217: 
 218: // Deterministic content hash of the frozen sets (so the joint D_F/R_alpha objects and thresholds are pinned before
 219: // any production run). Simple FNV-1a over a canonical JSON — no Date/Math.random.
 220: export function contractHash() {
 221:   const canonical = JSON.stringify({ v: CONTRACT_VERSION, THETA, NUM, CLASSIFY, ALPHA_LEVELS, AGGREGATION, EVIDENCE });
 222:   let h = 0x811c9dc5;
 223:   for (let i = 0; i < canonical.length; i++) {
 224:     h ^= canonical.charCodeAt(i);
 225:     h = Math.imul(h, 0x01000193) >>> 0;
 226:   }
 227:   return 'fnv1a-' + h.toString(16).padStart(8, '0');
 228: }
 229: 
 230: export const directionalKeys = () => Object.entries(THETA).filter(([, s]) => s.kind === 'directional').map(([k]) => k);
 231: export const physicalKeys    = () => Object.entries(THETA).filter(([, s]) => s.kind === 'physical').map(([k]) => k);

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$f='"'scripts/simulation/e4-v5/scenario-configs.mjs'; "'$i=0; Get-Content -LiteralPath $f | ForEach-Object{$i++; '"'{0,4}: {1}' -f "'$i,$_};' in C:\devel\claude-projects\distributed-governance-research
 succeeded in 190ms:
   1: // E4 v1.14 — the anchored scenario configs. SINGLE SOURCE OF TRUTH for the scenario points (the docs reference these,
   2: // they do NOT duplicate the values — this reduces the doc↔code fork risk Codex v7 caught; the sign-ordering test
   3: // pins executable outcome ordering ONLY, not exact configs/labels/prose). Anchors + justification per
   4: // knob: research/e4-plausible-anchors.md.
   5: //
   6: // PARTICIPATION IS A FACTO, NOT A KNOB: in Core v0 net-allocation participation is ~100% by architecture (profiles
   7: // + delegates cover the passive), so p = 1.0 in EVERY scenario — it is NOT anchored to (low) participatory-budgeting
   8: // turnout (that conflation understated the distributed arm). See research/e4-plausible-anchors.md.
   9: // FOUR substantive declared scenarios + ONE diagnostic contrast (do not conflate):
  10: //   PRO_CENTRAL   = a declared central-favourable ENDPOINT (every knob central-favourable; some sit outside the
  11: //                   registered expectable bands). Under faithful universal participation this fully-idealized
  12: //                   endpoint is AT MOST A BARE TIE (~-1.4%), not a win — even 20% inward, coverage wins.
  13: //   NO_MYOPIA     = a harm-aware AND otherwise-competent central BUNDLE (harm sight + unbiased + precise + no credit).
  14: //                   NOT a myopia isolation. A competent harm-aware central still trails coverage under faithful
  15: //                   participation (~+14%); it reconciles in DIRECTION with the frozen symmetry-gate near-parity
  16: //                   (that gate equips the central with harm-aware appraisal under a conservative participation regime).
  17: //   PROBABLE      = the source-motivated declared reference point (~+54.6%).
  18: //   PRO_DIST      = the distributed arm's favourable case (~+206%).
  19: //   MYOPIA_OFF    = a DIAGNOSTIC CONTRAST (not a scenario): PROBABLE with ONLY the two harm-gate coords changed
  20: //                   (s_exp, b_H_C). Sequential, path-dependent attribution: harm-myopia ALONE moves +54.6% → +38.4%
  21: //                   (16.2 of the 40.7-pt decline to +13.9%, ~40%); the further step to the NO_MYOPIA bundle is ~60%.
  22: // SEMANTICS (two distinct things — do not conflate): ARCHITECTURAL COVERAGE is universal (p=1: every citizen's share
  23: // IS allocated, via direct action, delegate, or profile) — a facto. That is SEPARATE from per-channel SIGNAL
  24: // OBSERVATION quality: universal coverage does NOT mean universal full-fidelity project-specific reports. The
  25: // observation quality is the composition below.
  26: // Signal-quality composition of Core v0's universal coverage (a facto split, not a knob to gerrymander):
  27: //   ~5% ACTIVE direct participation (full fidelity; the 3–5% "turnout" figure in the paper is THIS share, not total),
  28: //   ~35% MICRODELEGATION (individual signal + bounded revocable noise + small bias d_bias toward the delegate view),
  29: //   ~60% PROFILE rules (revert toward the OBSERVABLE category proxy qCat; high alignment, coarser on project harm).
  30: //   Same across every scenario (Core v0 architecture).
  31: export const COMPOSITION = { f_active: 0.05, f_deleg: 0.35, k_deleg: 1.5, phi_prof: 0.85, d_bias: 0.1 };
  32: export const PROBABLE = { ...COMPOSITION, a_V: 0.5, b_V: 3.5, p: 1.0, a_r: 1.5, b_r: 8, pi_opp: 0.15, mu_opp: 3.0,
  33:   s_exp: 2.5, b_H_C: 0.5, w: 0.5, a: 0.2, b: 0.9, beta: 0.35, lambda: 0.15, zeta: 0.6, gamma: 0.5,
  34:   sigma_e: 0.5, sigma_C: 0.5 };
  35: // Declared central-favourable endpoint (every knob central-favourable). Under faithful universal participation:
  36: // at most a bare tie (~ −1.4%), NOT a win.
  37: export const PRO_CENTRAL = { ...COMPOSITION, a_V: 1.0, b_V: 1.5, p: 1.0, a_r: 0.8, b_r: 14, pi_opp: 0.03, mu_opp: 1.5,
  38:   s_exp: 0.5, b_H_C: 1.2, w: 0.1, a: 0.0, b: 1.0, beta: 0.8, lambda: 0.0, zeta: 0.85, gamma: 0.3,
  39:   sigma_e: 1.2, sigma_C: 0.2 };
  40: // GENUINE myopia-only contrast: PROBABLE with ONLY the two harm-gate coordinates changed. Winner: Core v0 (~ +38%).
  41: export const MYOPIA_OFF = { ...PROBABLE, s_exp: 0.5, b_H_C: 1.3 };
  42: // Harm-aware AND competent central bundle (NOT myopia-isolation): PROBABLE + harm sight + unbiased + precise + no
  43: // credit. Winner: Core v0 (~ +14%); reconciles in DIRECTION with the frozen symmetry-gate near-parity.
  44: export const NO_MYOPIA = { ...PROBABLE, s_exp: 0.5, b_H_C: 1.3, w: 0.1, a: 0.0, b: 1.0, lambda: 0.0, zeta: 0.85, sigma_C: 0.35 };
  45: // Distributed arm's favourable case (not stacked to catastrophe).
  46: export const PRO_DIST = { ...COMPOSITION, a_V: 0.25, b_V: 4.5, p: 1.0, a_r: 2.5, b_r: 6, pi_opp: 0.28, mu_opp: 3.5,
  47:   s_exp: 4.0, b_H_C: 0.25, w: 1.1, a: 0.4, b: 0.75, beta: 0.12, lambda: 0.30, zeta: 0.4, gamma: 0.8,
  48:   sigma_e: 0.25, sigma_C: 0.7 };
  49: export const SCENARIO_WORLD = { N: 1500, K: 150 };

codex
The first concrete inconsistency is already visible: the E10 implementation has the new net-budget logic and 0.08/0.05 costs, but its design document still specifies the rejected value haircut and old 0.15/0.03 calibration. I’m now checking whether that is isolated documentation debt or part of a wider code/output mismatch.
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npm run e5:delivery' in C:\devel\claude-projects\distributed-governance-research
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npm run e9:fullstack:test' in C:\devel\claude-projects\distributed-governance-research
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npm run e5:delivery:test' in C:\devel\claude-projects\distributed-governance-research
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npm run e9:fullstack' in C:\devel\claude-projects\distributed-governance-research
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npm run e10:costs:test' in C:\devel\claude-projects\distributed-governance-research
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npm run e10:costs' in C:\devel\claude-projects\distributed-governance-research
 succeeded in 21566ms:

> distributed-governance-research@0.0.0 e9:fullstack:test
> node scripts/simulation/e4-v5/e9-fullstack-test.mjs

  ok   nSec=1: status-quo cell == E5 S cell
  ok   nSec=1: Core-v0 cell == E5 A2 cell
  ok   nSec=1: planning Shapley ~ 0 (one sector ⇒ no-op)
  ok   Shapley attribution sums exactly to the full-stack gain
  ok   planning Shapley is larger under the realistic (assoc<0) association
  ok   realistic association gives a positive planning Shapley
  ok   planning simple effect flips: central-sel > distributed-sel
  ok   agenda capture raises the planning Shapley vs soft distortion
  ok   more agenda capture raises planning further
  ok   more agenda capture raises the distributed-selection planning effect
  ok   validatePlanning rejects agendaCapture >= nSec
  ok   Core v0 full beats the status quo
  ok   full-stack gain is materially positive
  ok   every reported quantity carries a 95% CI
  ok   strict residual leaves some budget unspent (utilization < 100%)
  ok   recycling raises utilization toward ~100%
  ok   recycling does not lower the full-stack gain
  ok   validatePlanning accepts the default
  ok   validatePlanning rejects nSec < 1
  ok   validatePlanning rejects assoc out of [-1,1]
  ok   validatePlanning rejects NaN creditCoef
  ok   validatePlanning rejects negative secValSpread
  ok   validatePlanning rejects fractional nKeep
  ok   validatePlanning rejects nKeep > nSec when excluding
  ok   validatePlanning rejects a bad residualMode
  ok   fullStack rejects an invalid delivery config (missing rep)

E9 full stack: 26 passed, 0 failed.

 succeeded in 34004ms:

> distributed-governance-research@0.0.0 e9:fullstack
> node scripts/simulation/e4-v5/e9-fullstack.mjs

E9 — FULL STACK: PLANNING, SELECTION and DELIVERY (built on E5, PROBABLE world). Percentages of a global
full-information greedy REFERENCE (a heuristic, not a guaranteed optimum). Recycle residual (primary).

worlds kept: 1000   (10 COFOG sectors; assoc=-0.6, secValSpread=0.184, creditCoef=0.076, agendaCapture=0)
STATUS QUO (all-central):   +30.6% of reference   ·   CORE v0 FULL (all-distributed): +88.0%
FULL-STACK gain (Core v0 − status quo): +57.4%  95% conditional-MC CI [+56.8%, +58.1%]

SHAPLEY attribution — CONDITIONAL: every layer value is computed through the (declared) planning sector
generator, so these are NOT the standalone quantified layers. The standalone SELECTION and DELIVERY figures
come from E5 (no planning layer); E9 supplies the 3-layer STRUCTURE + attribution METHOD, planning qualitative:
  planning +3.2% [+2.9%, +3.4%] · selection +42.9% [+42.3%, +43.5%] · delivery +11.3% [+11.0%, +11.6%]  (sums to the gain)

Named-world decomposition (the full diagonal stays positive everywhere; individual layers can reverse):
   world         full gain   planning   selection   delivery
   PROBABLE        +57.1%     +3.1%     +42.7%    +11.3%
   PRO_CENTRAL     +14.7%     +1.5%      -2.8%    +16.0%
   MYOPIA_OFF      +44.7%     +2.5%     +29.5%    +12.6%
   PRO_DIST       +172.6%     +4.8%    +169.1%     -1.4%
   → SELECTION and DELIVERY are LARGE in PROBABLE; selection reverses in PRO_CENTRAL and delivery in PRO_DIST
     (stronger delivery magnifies harmful portfolios there). The full Core v0 advantage holds in ALL worlds.

Planning as a CONDITIONAL simple effect (distributed − central planning), context-dependent:
  under central selection: +7.1% [+6.6%, +7.7%] · under distributed selection: +0.1% [-0.1%, +0.3%] (Core v0 context)

Planning Shapley over the DECLARED sector-value dispersion by need↔visibility association (the effect is
modest and CONDITIONAL — not a robust large positive layer):
   secValSpread \ assoc   -1.0     -0.6      0.0     +0.6
      0.1                   -0.3%    -0.6%    -1.1%    -1.1%
      0.3                   +4.3%    +3.7%    +2.9%    +2.6%
      0.6                  +16.7%   +14.4%   +13.0%   +13.0%
   → the SOFT credit distortion alone makes planning a small, sign-ambiguous contribution.

Agenda capture (second face of power — central keeps its lowest-perceived COFOG sectors OFF the menu):
   sectors captured   planning Shapley   planning|distributed-sel   full-stack gain
    0/10                +0.7%             -6.0%             +47.8%
    1/10                +2.2%             -3.5%             +48.4%
    2/10                +4.7%             +0.5%             +49.5%
    3/10                +7.9%             +5.3%             +51.4%
   → agenda capture is the DOMINANT planning mechanism, and it is NOT anchorable today (no cited universal
     whole-function-exclusion moment, no worked country example yet), so it is PROPOSED CONTINUATION WORK.

FRAMING (author decision): DO NOT report a planning-layer FIGURE. The soft-only slice above (~0–3%) omits
agenda capture — the mechanism that moves the needle — so it UNDERSTATES the layer; headlining it would read
as "planning is small," which is not what it means. Quantify SELECTION and DELIVERY from E5 (they are LARGE
IN PROBABLE — not "robust": each reverses sign in an extreme world, see the named-world table above, though
the full Core v0 advantage holds in every world); present PLANNING QUALITATIVELY — mechanism identified
(agenda capture / second face of power), DIRECTION anchored (COFOG; election visible-spending shift;
maintenance neglect), MAGNITUDE deferred to country-specific continuation (illustrative, not conclusive).

 succeeded in 39568ms:

> distributed-governance-research@0.0.0 e10:costs:test
> node scripts/simulation/e4-v5/e10-costs-test.mjs

  ok   costs off: with-costs gain == value-only gain
  ok   costs off: admin-cost contribution == 0
  ok   planning off by default (via E5)
  ok   planning-off value base == E5 S/A2 exactly
  ok   planning on switches the value base to E9
  ok   central net-budget value ≥ naive haircut (sub-proportional)
  ok   Core v0 net-budget value ≥ naive haircut (sub-proportional)
  ok   costs reduce each arm below its full-budget value
  ok   admin-cost effect is small at the anchored κ (|·| < 3pp)
  ok   a much larger κ_C makes the admin-cost effect more positive
  ok   the core value advantage survives the cost layer (with-costs gain > 0.4)

E10 costs: 11 passed, 0 failed.

 succeeded in 41288ms:

> distributed-governance-research@0.0.0 e10:costs
> node scripts/simulation/e4-v5/e10-costs.mjs

E10 — the ADMINISTRATIVE-COST layer on the delivered-value stack (PROBABLE world). Percentages of the
full-information greedy REFERENCE. PLANNING is OFF by default; admin cost reduces the BUDGET (net-budget
accounting), charged SYMMETRICALLY across arms.

value base: E5 (planning OFF)   ·   κ_C=0.08 (central allocation/prioritization/study machinery) · κ_D=0.05 (Core v0 platform + its control machinery)  [magnitude DECLARED]
VALUE ONLY (costs off):   status quo +34.5% · Core v0 +93.1%  → gain +58.6%
WITH ADMIN COSTS (net budget): status quo +33.9% · Core v0 +91.6%  → gain +57.7%
  admin-cost effect on the gap: -0.9% (points of the reference).

  → Under symmetric net-budget accounting the admin-cost layer is roughly NEUTRAL (small, and can go either
    way): because greedy funding cuts marginal low-value projects first, the value loss is sub-proportional,
    and Core v0 delivers on a larger base. The Core v0 advantage comes from SELECTION and DELIVERY, NOT from
    an admin-cost saving. A decisive cost advantage would need κ_C ≫ κ_D beyond what symmetric accounting supports.

switch check — costs OFF (κ=0): with-costs gain +58.6% == value-only gain +58.6% (reduces to the value stack).

Admin-cost sensitivity (κ_D=0.05 fixed; κ_C swept — magnitude DECLARED):
   κ_C     admin-cost effect on the gap (points of reference)
   0.05        -1.1%
   0.08        -0.9%
   0.15        -0.1%
   0.30        +2.3%
   → the admin-cost effect is small and only turns clearly positive at large κ_C; magnitudes DECLARED,
     direction only (central allocation machinery cost > platform cost — IDB / low e-government platform costs).

2026-07-13T21:39:17.516827Z ERROR codex_core::tools::router: error=Exit code: 1
Wall time: 0.2 seconds
Output:

 succeeded in 50662ms:

> distributed-governance-research@0.0.0 e5:delivery:test
> node scripts/simulation/e4-v5/e5-delivery-test.mjs

  ok   perfect delivery: opaque efficiency == 1
  ok   perfect delivery: verified efficiency == 1
  ok   perfect delivery: delivery effect ~ 0 (central)
  ok   perfect delivery: delivery effect ~ 0 (distributed)
  ok   perfect delivery: interaction ~ 0
  ok   perfect delivery: distributed cell == its selection efficiency
  ok   perfect delivery: central cell == its selection efficiency
  ok   perfect delivery: selection efficiencies == E4 D/O, C/O (exact)
  ok   opaque delivery in a plausible leaky band [0.5, 0.85]
  ok   verified delivery near-complete [0.90, 0.99]
  ok   verified delivery > opaque delivery
  ok   multiplicative identity: A2 == sigma_D * delta_verified
  ok   multiplicative fits better than additive
  ok   positive interaction (verified amplifies selection)
  ok   A2 is the best cell and S the worst
  ok   both main effects strictly positive
  ok   coupling OFF ⇒ no monitoring dividend
  ok   detection-only coupling lifts A3 (small)
  ok   recovery linkage gives a larger opaque dividend than detection alone
  ok   coupling does not lower the full-architecture cell A2
  ok   dividend largest where control is weakest (opaque ≥ verified)
  ok   more recovery does not reduce verified delivery
  ok   sweep: full-architecture gain grows monotonically as opaque leak worsens
  ok   sweep: coverage wins (full > 0) across the whole opaque band
  ok   validateDelivery accepts the default config
  ok   validateDelivery rejects pi_hon > 1
  ok   validateDelivery rejects negative val_risk
  ok   validateDelivery rejects NaN val_risk
  ok   validateDelivery rejects NaN gamma in a regime
  ok   validateDelivery rejects a MISSING rep (would make the deterrent NaN)
  ok   validateDelivery rejects a missing regime
  ok   delivered2x2 validates its delivery arg
  ok   value risk keeps the per-arm opaque delivery gap small
  ok   value risk keeps the full gain clearly positive
  ok   value risk barely moves the full gain vs base
  ok   multi-seed replication (8 seeds): between-seed sd is small
  ok   multi-seed replication: mean full gain is materially positive
  ok   joint LHS sweep: full architecture wins in the large majority of sampled draws
  ok   joint LHS sweep: coverage/selection effect (A3−S) positive in the large majority
  ok   joint LHS sweep: even the worst sampled draw keeps the full gain near/above parity

E5 delivery: 40 passed, 0 failed.

codex
All six requested entry points are still running concurrently; the simulations are CPU-heavy but have not errored. In source review, I also found that E9’s “recycle residual is primary” fix is not consistently propagated: the exported default remains `strict`, and later printed sensitivity tables silently fall back to it. I’m quantifying how much that changes the reported values.
 succeeded in 100722ms:

> distributed-governance-research@0.0.0 e5:delivery
> node scripts/simulation/e4-v5/e5-delivery.mjs

E5 — delivered value: SELECTION-by-DELIVERY (four-cell design on the clean E4 engine, PROBABLE world).
Parity at the oracle reference (perfect-delivery full-information greedy). No compound multiplier; layers reported separately.

worlds kept: 1200
SELECTION efficiency (perfect delivery, = E4):  central +44.1% · distributed +98.2%
DELIVERY efficiency (delivered/selected):        opaque +78.2% · verified +94.8%

Four-cell delivered value as a fraction of the oracle reference:
                       opaque delivery     verified delivery
  central selection    S   +34.5%          A1  +41.8%
  distributed sel.     A3  +76.4%          A2  +93.1%

diversion incidence (unweighted share of funded projects):     opaque +21.9% · verified +2.1%
value leakage (S-weighted undelivered value; MOMENT-MATCHED to Olken's expenditure loss, NOT identified as welfare):   opaque +21.8% · verified +5.2%

Main effects (pp of the oracle reference) with 95% CONDITIONAL Monte-Carlo intervals (inner simulation
variability only — world, model-form and calibration uncertainty are NOT included), read SEPARATELY:
  DELIVERY effect:   at central +7.3% [+7.0%, +7.7%] · at distributed +16.7% [+16.4%, +17.0%]
  SELECTION effect:  at opaque +41.9% [+41.3%, +42.5%] · at verified +51.3% [+50.6%, +51.9%]
  INTERACTION:       +9.4% [+9.1%, +9.6%]  (>0 ⇒ verified delivery amplifies the selection gain)
  FULL architecture (A2 − S): +58.6%  95% conditional-MC CI [+58.0%, +59.2%]

Composition — the two layers compose MULTIPLICATIVELY (an accounting identity, delivery applied per project):
  actual A2 = +93.1%  ·  identity (selection · delivery) = +93.1%
  additive prediction (sum of main effects) = +83.7%  → short by the interaction.
  The positive interaction is the level-effect signature of multiplicative composition.

Monitoring coupling (step 2) — distributed coverage fiscalizes delivery via DETECTION only (mon_detect=0.05, recovery=0 community-only):
  delivered fraction, distributed − central:  opaque -0.2% · verified +0.0% (saturated)
  weak-control cell A3 rises +76.4% → +76.5% — SMALL: community detection without institutional recovery barely helps a weak-control regime.
  detection-band sweep (opaque monitoring dividend):
     mon_detect 0.00  →  dividend(opaque) -0.3%  ·  A3 +76.4%
     mon_detect 0.05  →  dividend(opaque) -0.2%  ·  A3 +76.5%
     mon_detect 0.10  →  dividend(opaque) -0.0%  ·  A3 +76.7%
  with institutional recovery linkage (mon_recovery=0.20): opaque dividend +3.4% — the delivery gain needs the FORMAL recovery channel, not eyeballs alone.

R=0 robustness (no reputational stake): verified delivery +94.3%, verified diversion incidence +7.1%, full +58.1% 95% CI [+57.6%, +58.7%] — the gain survives without the (unanchored) reputation term.

Opaque-band sensitivity (delivery effect and full-architecture gain as the status-quo leak worsens):
   leak(opaque)   delivery-effect@distributed   full (A2−S)
     +24.3%           +18.8%                  +59.6%
     +28.3%           +22.8%                  +61.3%
     +40.6%           +34.5%                  +66.6%
     +56.6%           +50.2%                  +73.5%
     +68.7%           +61.9%                  +78.7%
   → coverage still wins across the whole band; a worse status quo only widens the delivery gain.

Cost/complexity-correlated delivery risk (bigger projects harder to monitor; cost ⟂ value S in the engine):
   val_risk 0.0  →  opaque delivery central +78.0% · distributed +77.8% (arm gap -0.2%)  ·  full +58.6%
   val_risk 0.3  →  opaque delivery central +78.0% · distributed +77.8% (arm gap -0.2%)  ·  full +58.4%
   val_risk 0.6  →  opaque delivery central +78.0% · distributed +77.8% (arm gap -0.2%)  ·  full +58.1%
   → under c ⟂ S the arm gap stays ~0, so coverage is NOT systematically undone by cost/size delivery risk.

20-seed replication of the full gain: mean +58.8% · sd +0.4% · range [+58.0%, +59.5%].
Joint LHS sweep (64 draws, CONDITIONAL on the PROBABLE world; non-overlapping regime ranges): full gain median +59.3%, range [+52.3%, +66.2%];
   full architecture wins in 100% and the coverage/selection effect (A3−S) is positive in 100% of the sampled draws.

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$f='"'audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md'; "'$lines=Get-Content -LiteralPath $f; foreach($range in @(@(1,100),@(101,200),@(201,288))){ "===== $f $($range[0])-$($range[1]) ====="; for($i=$range[0];$i -le $range[1];$i++){ '"'{0,4}: {1}' -f "'$i,$lines[$i-1] } }' in C:\devel\claude-projects\distributed-governance-research
 succeeded in 193ms:
===== audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md 1-100 =====
   1: # E9 design sketch — the full-stack comparison (planning × selection × delivery)
   2: 
   3: **Status:** design sketch, written 2026-07-12 while the E5 friendly round runs. **Not** to be built until E5 is
   4: locked (E9 reuses E5's final delivery model). Delivery-layer specifics inherit from `e5-delivery.mjs` after the
   5: friendly-round anchoring.
   6: 
   7: ## Why E9 exists
   8: 
   9: E4 measures **selection** only; E5 adds **delivery**. Neither models the **planning layer** (constructing the
  10: eligibility frame / macro categorization) as a *value* contrast — and the old ≈1.05× macro factor was a
  11: mis-comparison (planning options within a shared frame, not fully-modeled central planning vs open distributed
  12: planning). E9 runs the honest full-stack contrast:
  13: 
  14: > **central planning + central selection + central delivery**  vs  **Core v0: distributed planning + distributed
  15: > allocation + distributed delivery.**
  16: 
  17: This is the comparison whose absence the inventory flagged (`docs/EXPERIMENT-INVENTORY.md`). It is where the planning
  18: layer finally gets measured correctly.
  19: 
  20: ## The planning layer — what makes it a genuine value contrast (not ≈1×)
  21: 
  22: The corpus finding the author insists on: a **fully-modeled central planner** is harm-blind and politically biased, so
  23: its planning (the choice of *which categories/sectors are even eligible*, and their budget shares) can **destroy value
  24: across entire categories** — e.g. starving a high-need but low-visibility sector, or over-funding a credit-rich one.
  25: The distributed planner constructs the frame from aggregated citizen category-signals (open, versioned, contestable).
  26: The contrast is therefore NOT "distributed planning as insurance within a fixed frame" but "central category-level
  27: value destruction vs distributed category-level coverage."
  28: 
  29: Modeling handle (reuse the E4 engine primitives): the E4 world already has a category signal `g` correlated with true
  30: quality (`zeta`), an observable category proxy `qCat`, and central projection/harm-myopia. E9 adds a **planning stage
  31: BEFORE selection** that sets, per category, (a) eligibility (which categories are on the menu) and (b) the budget share
  32: per category. Two planners:
  33: - **Central planning:** allocates category budget shares by the central's *perceived* category value (projection +
  34:   harm-myopia at the CATEGORY level) and credit — so it can zero-out or starve harm-heavy / low-visibility categories.
  35: - **Distributed planning:** allocates category shares by the aggregated coverage category-signal (the same coverage
  36:   composition as E4/E5), open and contestable.
  37: 
  38: Then selection runs WITHIN each category's share (E4 machinery), and delivery runs on the funded set (E5 machinery).
  39: Value = Σ delivered true `S` across the whole stack, normalized by the full-information oracle (perfect planning +
  40: perfect selection + perfect delivery). Parity at the oracle; percentages only; no compound multiplier.
  41: 
  42: ## Design (a 2×2×2, but the headline is the two corners)
  43: 
  44: Three binary layers → 8 cells; the **headline is the diagonal**: all-central (status quo) vs all-distributed (Core v0
  45: full). The 6 mixed cells decompose the three main effects + interactions (same additive-vs-multiplicative reading as
  46: E5). Report each layer's effect as a percentage of the oracle; report whether planning composes multiplicatively with
  47: selection×delivery.
  48: 
  49: | layer | central | distributed |
  50: |---|---|---|
  51: | planning | category shares by perceived value + credit (can starve categories) | category shares by aggregated coverage signal |
  52: | selection | `M_C` + credit tilt (E4) | `M_D` coverage (E4) |
  53: | delivery | opaque (E5) | verified + monitoring coupling (E5) |
  54: 
  55: **Reduces-to check:** with planning perfect (both planners = oracle category shares), E9 reduces to E5; with delivery
  56: perfect too, E9 reduces to E4. These are the invariants the test asserts.
  57: 
  58: ## What to anchor (planning layer)
  59: 
  60: - Central category-level misallocation: the harm-myopia + projection already anchored in E4 (Hayek/Scott/Olson/
  61:   Bandiera; Broockman–Skovron), lifted to the category level; plus evidence on sectoral misallocation of public
  62:   investment (IMF/World Bank sectoral efficiency dispersion). To be gathered in E9's own friendly round.
  63: - The distributed category-signal fidelity reuses E4's coverage composition (already anchored).
  64: 
  65: ## Open modeling questions (decide with the friendly round, after E5)
  66: 
  67: 1. Does central planning **exclude** categories (hard zero) or just **under-weight** them? Hard exclusion is the second
  68:    face of power (Bachrach–Baratz) and gives the sharpest contrast; under-weighting is milder. Likely report both.
  69: 2. Is the planning layer's composition with selection multiplicative too? (Expect yes, plus a monitoring-style coupling
  70:    if distributed planning also improves selection legibility.)
  71: 3. Guardrail: E9 must NOT be gerrymandered to a null nor to a positive — the planner handicaps are directional
  72:    (anchored), magnitudes swept, exactly as E4.
  73: 
  74: ## Sequencing
  75: 
  76: Build only after E5 is publication-ready. Then: contract/params → engine stage → tests (reduces-to-E5/E4) → friendly
  77: Codex round (correct + anchor) → results → paper. Then E10 adds costs on top of E9.
  78: 
  79: ---
  80: 
  81: ## AS-BUILT (2026-07-13, commit 0cf22f9) — `scripts/simulation/e4-v5/e9-fullstack.mjs`
  82: 
  83: **Built ON E5** (author correction): E9 = planning + E5. It reuses E5's delivery machinery (`deliveredCell`, now
  84: exported) and the E4 selection engine; it adds a planning stage.
  85: 
  86: - **Categories = visibility strata.** Projects are binned by `P` (visibility) into `nCat` categories, so categories
  87:   differ systematically in the dimension the central planner mis-sees. Planning sets per-category budget shares from a
  88:   planner's *perceived* category value: central = Σ`M_C` (harm-myopic + projecting + credit) → **starves** harm-heavy /
  89:   low-visibility categories; distributed = Σ`M_D` (coverage); shares are proportional (base) or **hard-exclusion**
  90:   (fund only the top `keepFrac` — the second face of power).
  91: - **Oracle = the GLOBAL greedy benchmark** (perfect knowledge ignores category boundaries). Every category-constrained
  92:   cell ≤ oracle; **`nCat=1` reduces to E5 exactly** (tested to 1e-9).
  93: - **Selection + delivery** run within each category via `fundedSet` then `deliveredCell` — identical to E5.
  94: 
  95: **Results (PROBABLE, 1000 worlds, 8 categories, proportional shares):** status quo (all-central) +30.1% of oracle;
  96: Core v0 full (all-distributed) +79.6%; **full-stack gain +49.5% [95% CI +48.8, +50.1]**. Layer main effects:
  97: **planning +3.2%**, selection +50.6%, delivery +6.7%. Hard-exclusion widens planning to **+7.1%**.
  98: 
  99: **The planning layer is a genuine, positive value contrast** — not the retired ≈1.05× macro factor's near-parity. It
 100: is modest in magnitude here (visibility-stratified categories, soft shares); hard exclusion sharpens it. Honest: the
===== audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md 101-200 =====
 101: effect size depends on how strongly categories are stratified on the dimension the central mis-sees — to be pressure-
 102: tested + anchored in E9's friendly Codex round (do not gerrymander it up).
 103: 
 104: **Tests (11/11):** nCat=1 reduces to E5 (status-quo cell == E5 S, Core-v0 cell == E5 A2, planning effect ~0); planning
 105: effect positive; hard exclusion widens it; Core v0 > status quo; cells are in a sane range (the oracle is a greedy
 106: REFERENCE, NOT an upper bound — cells MAY exceed it, so this is a regression check, not an invariant); all three layer effects
 107: positive; selection dominant; fail-closed delivery validation reused.
 108: 
 109: **Open for the friendly round:** is the visibility-stratified category construction the right/most-defensible one, or
 110: should categories be typed by harm/need directly? Anchor the planning-layer magnitude (sectoral misallocation of public
 111: investment). Confirm the global-oracle normalization and the main-effect decomposition are sound.
 112: 
 113: ## Planning-layer calibration (friendly round — calibration agent, 2026-07-13, all web-verified)
 114: 
 115: **Direction is strongly anchored; the magnitude is DECLARED-but-conservative.** No published source cleanly isolates
 116: "value lost from allocating the budget across the wrong sectors," so the planning effect is a declared modeling
 117: parameter *consistent with, and conservative relative to,* the published efficiency-loss envelope — not a transported
 118: point estimate.
 119: 
 120: | quantity | anchored band / direction | best citation | status |
 121: |---|---|---|---|
 122: | total public-investment inefficiency | ~30% of returns lost (13% adv / 27% EM / 40% LIC); strong PIM closes ~2/3 | IMF, *Making Public Investment More Efficient* 2015 | ANCHORED (total loss, broader than cross-sector) |
 123: | **pure cross-sector allocative loss** | no canonical scalar exists | World Bank PERs (diagnostic, no scalar) | **DECLARED** (the quantity E9 most needs) |
 124: | political budget cycle → visible spending | pre-election composition shift to visible capital (~0.5–1% of GDP/category) | Drazen & Eslava 2010, *JDE* 92(1) | ANCHORED (direction; composition shift, not value-loss %) |
 125: | pork-barrel / particularistic targeting | allocations follow electoral usefulness, not marginal value (150+ studies) | Golden & Min 2013, *ARPS* 16 | ANCHORED (direction/pervasiveness, qualitative) |
 126: | maintenance / diffuse-cost underinvestment | new-build bias; optimal maintenance ~2% of GDP; deferred maintenance multiplies later cost | Rioja 2003, *JPE* 87(9–10) + World Bank AICD maintenance briefs | ANCHORED for the SIGN (undervisible = underfunded). NB: the "~2/3 new vs 1/3 maintenance" split is NOT in Rioja 2003 — do not attribute it (calibration agent flag) |
 127: 
 128: Supporting (direction only): Rogoff & Sibert 1988; Rogoff 1990 *AER*; Khemani 2004 *JDE*.
 129: 
 130: **Agent's read:** the +3–7% planning contrast sits **comfortably inside** the envelope (well below IMF's ~30% total and
 131: Rioja's ~15% single-margin), so it does **not** overclaim — if anything it is conservative. Honest framing to apply:
 132: call it "consistent with and conservative relative to" the IMF/Rioja evidence, NOT "anchored" to a cross-sector estimate
 133: (none exists at that granularity). Flag the pure cross-sector allocative-loss magnitude explicitly DECLARED to reviewers.
 134: 
 135: ## Country-grounded ILLUSTRATIVE example of agenda capture — CHILE, mental health (data agent, 2026-07-13, verified)
 136: 
 137: **Not a conclusion — an illustrative footprint of the model's visibility-bias mechanism in one real budget.**
 138: 
 139: **Chile — mental health.** The public mental-health budget is ~**2% of the health budget** (1.45–2.16% across 2007–2015;
 140: ~4.5% of the health ministry's budget by 2025) against an **OECD average of 6.7%** — despite mental/behavioural
 141: disorders being the **leading cause of disability in Chile** (PAHO), with treatment coverage ~20% vs ~50% typical for
 142: middle-income countries. It is documented as a genuine unmet need, "**una deuda pendiente**": funding never rose to meet
 143: the 2000 National Mental Health Plan's own targets. Sources (verified/triangulated): Errázuriz, Valdés, Vöhringer & Calvo
 144: (2015), *Rev Med Chile* 143(9):1179–1186; IPSUSS; OECD 2025 (via Fact Checking UC); DIPRES sectoral evaluation (2025).
 145: 
 146: **Why this is on-point (and honest about the mechanism):** mental health is a **high-need, LOW-VISIBILITY** function —
 147: diffuse constituency, stigma, no ribbon-cuttings — kept near the floor. That is exactly E9's central mechanism (the
 148: planner reads visibility as credit and starves low-visibility functions). The driver here is **low salience/visibility**,
 149: NOT documented clientelist vote-buying — and Chile is a relatively well-governed OECD country, so the point is if EVEN
 150: Chile floors mental health, the visibility bias is pervasive, not a basket-case artefact. The clientelist variant of the
 151: same mechanism is documented separately (Keefer & Khemani 2005, *WB Research Observer*, "clientelism under-provides
 152: broad public goods like preventive health"; Ban, Jha & Rao on India's "asphalt over sewers"), but without a cleanly
 153: verified single budget-share number — so we cite it as mechanism, not calibration.
 154: 
 155: **QUALITATIVE only — NO numeric mapping (Adversarial R1 #17).** The adversary correctly flagged a **taxonomic
 156: mismatch**: mental health is a *funded health SUBfunction*, not a zero-funded TOP-LEVEL COFOG function, so mapping it to
 157: `agendaCapture=1` (a whole function off the menu) and reporting a simulated "+2–4pp" would over-transport. **We therefore
 158: do NOT attach a simulated planning number to the Chile example.** It stands as a **qualitative illustration** that the
 159: model's visibility-bias mechanism has a real footprint: a high-need (Chile's #1 disability cause, ~20% treatment
 160: coverage), low-visibility function chronically under-provided (~2% of the health budget vs the OECD 6.7% average),
 161: documented as "una deuda pendiente." A quantitative version would require a **partial-share sub-function model** matched
 162: to the COFOG taxonomy — future work. Honest caveats: the mechanism is visibility/salience bias (the model's mechanism),
 163: not documented clientelist vote-buying; and a small share alone is not proof of capture — the need benchmark makes it a
 164: documented gap here, but the illustration is directional, not a calibration.
 165: 
 166: ## Planning REDESIGN v2 (Codex round-1 + author decision, commit 301d7cc)
 167: 
 168: Codex round-1: skeleton sound; planning layer NOT publication-ready (the standalone +3.2/+7.1 were one-at-a-time
 169: conditional effects; planning under distributed selection runs the other way). Author decision: **predeclare + sweep**
 170: the need↔visibility association. Redesigned:
 171: 
 172: - **Persistent sectors with intrinsic visibility** (not visibility bins of project P — homogeneous under random
 173:   membership). **Category-level political credit**: central over-funds visible sectors (`creditCoef`) and is blind to
 174:   the low-visibility sector value tilt; distributed coverage sees a fraction (`covSees`). `assoc` = the predeclared
 175:   need↔visibility lever, swept −1..+1.
 176: - **8-cell factorial + Shapley attribution** that sums exactly to the diagonal gain; plus the conditional simple
 177:   effects that expose the sign flip.
 178: - `validatePlanning` fail-closed; hard exclusion by integer `nKeep` (central/symmetric); oracle relabelled a REFERENCE.
 179: - `nSec=1` reduces to E5 exactly (1e-9). 15/15 tests.
 180: 
 181: **Honest result (PROBABLE):** full-stack gain ~+49% [+48.3,+49.6]. Shapley attribution (assoc=−0.6): planning +2.1% /
 182: selection +38.3% / delivery +10.8%. Under the **realistic** association (assoc<0, Rioja maintenance bias) planning
 183: Shapley rises to **+1.9% → +6.2%**; at assoc≥0 it is ~0 — the planning layer's value is **real but modest and
 184: context-dependent**, honestly emerging from the predeclared assumption, not gerrymandered. Magnitude DECLARED,
 185: conservative vs the IMF/Rioja envelope. → sent to Codex round-2 for verification.
 186: 
 187: ## Codex round-2 verdict + bounded pass (commit 0749b2d) — architecture sound
 188: 
 189: Round-2: the factorial/Shapley **architecture is correct and publication-worthy**; verdict NOT-YET pending a bounded
 190: pass, now applied:
 191: 
 192: - **Genuine fixed-dispersion association** (`need = assoc·z(vis) + √(1−assoc²)·shock`) — the old `assoc` also scaled
 193:   dispersion and `assoc=0` erased it. This exposed that the planning magnitude is driven by the DECLARED
 194:   `secValSpread` (~0 at 0.1, **+3.8% Shapley at 0.3**, +17% at 0.6) — set a moderate declared reference (0.3) and
 195:   report the full **dispersion × association** grid.
 196: - **Residual recycling** mode removes the utilization confound (strict left Core v0 at 90% utilization vs status quo
 197:   96%): planning|distributed-sel goes **−1.2% → +2.1%** with recycling.
 198: - bootstrap **CIs on the gain + all three Shapley values + both planning simple effects**; complete fail-closed
 199:   `validatePlanning`; oracle relabelled a **greedy REFERENCE** (not an upper bound; false invariant dropped).
 200: 
===== audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md 201-288 =====
 201: **Honest final result (PROBABLE, secValSpread=0.3, assoc=−0.6):** full-stack gain **+52.5% [+51.8,+53.1]**.
 202: Shapley: **planning +3.8% [+3.3,+4.2] · selection +37.9% [+37.4,+38.5] · delivery +10.8% [+10.5,+11.1]** (with
 203: recycling, planning +4.8%). **Conclusion: SELECTION and DELIVERY are the robust, large layers; PLANNING is a MODEST,
 204: CONDITIONAL third layer** — positive only under substantial declared sector heterogeneity AND the realistic negative
 205: need↔visibility association, near-zero/negative otherwise. Magnitude DECLARED and numerically modest; **not in obvious
 206: tension with the broader, non-commensurate IMF/Rioja evidence, but NOT anchored to a cross-sector point estimate**.
 207: 22/22 tests. → ready for a round-3 confirmation.
 208: 
 209: ## Anchoring round (author: "anclar mejor los parámetros a datos") — data-anchor agent (verified) + AGENDA CAPTURE
 210: 
 211: **Author question:** was agenda capture modeled in the status-quo category selection? **Answer: no** — only the SOFT
 212: credit distortion was in the headline; hard exclusion was a non-default variant. The author chose to incorporate agenda
 213: capture. Data-anchor agent (all web-verified) mapped E9's declared parameters onto observable moments:
 214: 
 215: | parameter | observable moment | anchor | status |
 216: |---|---|---|---|
 217: | `nSec` | UN COFOG top-level functions = **10** | UN/Eurostat/OECD COFOG | **ANCHORED** (nSec=10) |
 218: | `creditCoef` (over-fund visible) | pre-election composition shift to visible spending | Drazen–Eslava 2010 *JDE* 92(1); Vergne 2009 *EJPE* 25(1); Katsimi–Sarantides 2012 *Public Choice* 151 | direction ANCHORED, **magnitude modest/single-digit → declared-with-band** |
 219: | `assoc` sign (high-need = low-visibility) | maintenance/prevention underfunded vs new visible capital | Rioja 2003 *JPE* 87(9–10) + WB AICD (optimal maintenance ~2% GDP; new-build bias) | **SIGN anchored**, strength declared |
 220: | `secValSpread` (cross-sector value dispersion) | COFOG share dispersion / sector-return spread / allocative gap | Eurostat COFOG 2023; IMF/CEPR ~11% GDP + 30–40% efficiency-gap **ceiling** | loose/confounded → **upper-bounded, not point-anchored** |
 221: 
 222: **Data-agent's read:** the honest anchored planning contribution is **SMALL (a few %)** — measured composition shifts are
 223: single-digit, the ~11%/30–40% figures are ceilings bundling far more than cross-sector visibility bias, and the
 224: need↔visibility link is directionally real but weakly measured. This **coheres with the project's own symmetry-gate
 225: NO-GO (~0.026)**: the architecture + mechanism is the contribution; the honest calibrated planning magnitude is small.
 226: 
 227: **AGENDA CAPTURE mechanism added (commit 790cdc1):** `agendaCapture` = the number of its lowest-perceived COFOG sectors
 228: the central keeps OFF the menu (second face of power, Bachrach–Baratz 1962 / Schattschneider; political budget cycles).
 229: Budget reallocated to funded sectors. This is the mechanism that makes the planning layer **robustly POSITIVE (no sign
 230: flip)**. At the DEFAULT modest, data-consistent severity (**1 of 10** COFOG functions off the menu) the planning Shapley
 231: is **~+7.0% [+6.6,+7.5]** (vs +3.8% and sign-ambiguous under soft distortion alone); severities of 2–3/10 give +10–15%
 232: but are a **declared stress, NOT data-supported** (wholesale exclusion of many functions contradicts the single-digit
 233: measured shifts).
 234: 
 235: ## Codex pro-anchor panel (4 profiles) — CONVERGES with the data agent; applied (commit 3033c2b)
 236: 
 237: The panel (PFM / development / political-economy / methodology) verified sources and mapped E9's parameters onto
 238: observable moments, plus found a real BUG. Applied:
 239: 
 240: - **BUG FIX (blocker):** distributed sector perception multiplied `secValSpread` twice (`valTilt` already carries it).
 241: - **Provisional moment maps:** `creditCoef` 0.6→**0.076** (Drazen–Eslava election log-visible-share shift 0.024,
 242:   SE 0.008); `secValSpread` 0.3→**0.184** (World Bank OED between-sector return-per-cost SD); `nSec`=10 (COFOG);
 243:   **`agendaCapture` default 1→0** — no cited evidence for universal whole-function exclusion, so it stays a DECLARED
 244:   STRESS, not the anchored headline.
 245: - **Result reproduces the panel's independent diagnostic exactly:** planning Shapley **+0.61% strict / +3.21%
 246:   [+2.93,+3.47] recycled**. (My earlier +7% used the unanchored creditCoef=0.6 + agendaCapture=1 + the double-count.)
 247: 
 248: **What the anchoring round found (the SOFT-only slice, mechanism absent):** with `agendaCapture=0` and the moment-mapped
 249: params, the planning contribution is ~+0.6% (strict) to +3.2% (recycled) — the 0–3% range both reviewers converged on.
 250: **But this slice omits agenda capture, the layer's dominant mechanism, so it is NOT the planning result** (see the
 251: framing decision below — do not headline a planning figure). **SELECTION (+37–43%) and DELIVERY (+11%) remain the large,
 252: robust, quantified layers.** 26/26 tests.
 253: 
 254: ## Planning-layer framing — DO NOT report a figure (author decision, 2026-07-13)
 255: 
 256: **Key methodological point (author):** it is misleading to headline a "neutral" small planning number (~0–3%), because
 257: that number is measured with the layer's DOMINANT mechanism — **agenda capture** (the central keeping whole high-need/
 258: low-visibility functions off the menu; the second face of power) — SWITCHED OFF. Reporting it as "the" planning
 259: contribution would falsely read as "we measured planning and it is small," when the honest statement is: **the planning
 260: layer's magnitude hinges on agenda capture, which cannot be anchored today, so we do NOT quantify it.**
 261: 
 262: Therefore the E9 write-up should:
 263: - **Quantify only SELECTION and DELIVERY** (anchored, robust, large layers).
 264: - Present **PLANNING qualitatively**: the mechanism (agenda capture / second face of power) is IDENTIFIED and its
 265:   DIRECTION anchored (COFOG structure; the election-period shift to visible spending; maintenance neglect), but its
 266:   MAGNITUDE requires country-specific budget data (which whole functions a given central actually excludes) and is left
 267:   as **proposed continuation work**. **Do NOT report a planning-layer figure** — not even the 0–3% soft-distortion slice,
 268:   which understates the layer by omitting its dominant mechanism.
 269: - The internal `agendaCapture` sweep and the 0–3% soft-only slice remain in the CODE as analysis, clearly labelled as a
 270:   lower slice that omits the dominant mechanism — not as a headline result.
 271: 
 272: Two concrete continuation items the author wants (agenda capture is the needle-mover, presented as continuation):
 273: 1. **A country-grounded worked example (COUNTRY-AGNOSTIC).** Find real functional-budget data for SOME country with
 274:    accessible data (Chile is a good place to look given the author's context, but the example is NOT tied to Chile — an
 275:    implementer would run it for whatever country they choose) showing structural under-provision / near-exclusion of
 276:    specific COFOG functions (deferred maintenance, environment, prevention, etc.), and present the resulting
 277:    agenda-capture severity as an **ILLUSTRATIVE example, explicitly NOT a conclusive calibration**.
 278: 2. **A country selector in the interactive explorer** — country-agnostic: let the user **choose any country** and set the
 279:    agenda-capture (and related planning) values to that country's budget structure, so the planning contribution is shown
 280:    per-country rather than as one universal number.
 281: 
 282: ## Panel modifications noted as FUTURE WORK (a country-specific, fully-anchored v3): softmax baseline-plus-flexible-
 283: reallocation share form (credit as a share semi-elasticity, not an additive coefficient on the arbitrary `M_C` scale);
 284: return-per-cost value tilt (`Sadj = S + cost·returnTilt`); a per-sector DATA INPUT TABLE (COFOG code, counts, cost/
 285: return distributions, baseline capital share, visibility, need, maintenance share); an inverse-calibration harness that
 286: root-solves the observable moments with held-out validation; a genuine value-maximizing comparator (diminishing returns)
 287: to replace the greedy reference if an actual-vs-optimal allocation gap is the target; and an exclusion HURDLE model
 288: (first whether viable projects exist, then whether the central zero-funds them).

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "rg -n -i \"publication-ready|code/test-ready|code-ready|conditional[- ]MC|conditional Monte-Carlo|95% CI|robust|ratio|[0-9]+(\\.[0-9]+)?[×x]|fold|times|Chile|2.?4pp|2.?4 pp\" -- scripts/simulation/e4-v5/e5-delivery.mjs scripts/simulation/e4-v5/e5-delivery-test.mjs scripts/simulation/e4-v5/e9-fullstack.mjs scripts/simulation/e4-v5/e9-fullstack-test.mjs scripts/simulation/e4-v5/e10-costs.mjs scripts/simulation/e4-v5/e10-costs-test.mjs scripts/simulation/e4-v5/engine.mjs scripts/simulation/e4-v5/contract.mjs scripts/simulation/e4-v5/adapter.mjs audits/2026-07-12-e5-remodel/ADVERSARIAL-R1-ADJUDICATION.md audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md" in C:\devel\claude-projects\distributed-governance-research
 succeeded in 164ms:
scripts/simulation/e4-v5/e5-delivery.mjs:5:// layers can be read SEPARATELY and jointly on the SAME funded portfolios — a clean 2×2, not the legacy engine that
scripts/simulation/e4-v5/e5-delivery.mjs:37:// Calibration (friendly round, 2026-07-12; anchors in audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md).
scripts/simulation/e4-v5/e5-delivery.mjs:44:// Calibration is an IDENTIFIED-SET reference, NOT a field estimate (friendly round convergent view, Codex + agent):
scripts/simulation/e4-v5/e5-delivery.mjs:50:// mon_recovery=0 for community-only coverage (Afridi-Iversen 2014 MGNREGA). Report R=0 robustness always.
scripts/simulation/e4-v5/e5-delivery.mjs:66:  // VALUE/COMPLEXITY-CORRELATED DELIVERY RISK (robustness, breaks delivery↔value independence): bigger/more complex
scripts/simulation/e4-v5/e5-delivery.mjs:96:// Delivered value + robustness diagnostics for a funded set under a regime, reusing per-project executor draws (shared
scripts/simulation/e4-v5/e5-delivery.mjs:117:function runWorld2x2(cfg, rng, execRng, del) {
scripts/simulation/e4-v5/e5-delivery.mjs:145:// Ratio-of-sums estimand over worlds (robust; a tiny-O world cannot dominate). Everything normalized by ΣO. Worlds and
scripts/simulation/e4-v5/e5-delivery.mjs:148:export function delivered2x2(cfg, { nWorlds = NUM.n_worlds.value, seed = NUM.seed.value, delivery = DELIVERY } = {}) {
scripts/simulation/e4-v5/e5-delivery.mjs:151:  const execRng = makeRng((seed ^ 0x5bd1e995) >>> 0);      // separate stream ⇒ worlds match the E4 estimand exactly
scripts/simulation/e4-v5/e5-delivery.mjs:156:    const r = runWorld2x2(cfg, rng, execRng, delivery);
scripts/simulation/e4-v5/e5-delivery.mjs:170:  const B = NUM.bootstrap_reps.value, bRng = makeRng((seed ^ 0x9e3779b9) >>> 0);
scripts/simulation/e4-v5/e5-delivery.mjs:202:    // composition: each cell equals its own selection efficiency times its own delivered fraction (an accounting
scripts/simulation/e4-v5/e5-delivery.mjs:223:    const r = delivered2x2(cfg, { nWorlds, delivery: del });
scripts/simulation/e4-v5/e5-delivery.mjs:247:// 20-seed replication of the full-architecture gain: across-seed mean and spread (Codex robustness item; complements
scripts/simulation/e4-v5/e5-delivery.mjs:251:  for (let s = 0; s < nSeeds; s++) vals.push(delivered2x2(cfg, { nWorlds, seed: (NUM.seed.value + s * 0x9e3779b1) >>> 0, delivery }).full);
scripts/simulation/e4-v5/e5-delivery.mjs:259:// share — a GLOBAL robustness statement, not the 1-D opaque sweep (Codex robustness item). Deterministic (seeded).
scripts/simulation/e4-v5/e5-delivery.mjs:266:  const keys = Object.keys(ranges), rng = makeRng((NUM.seed.value ^ 0x1234abcd) >>> 0), cols = {};
scripts/simulation/e4-v5/e5-delivery.mjs:281:    const rr = delivered2x2(cfg, { nWorlds, delivery: del });
scripts/simulation/e4-v5/e5-delivery.mjs:301:    const r = delivered2x2(cfg, { nWorlds: 1200 });
scripts/simulation/e4-v5/e5-delivery.mjs:316:    safeLog('Main effects (pp of the oracle reference) with 95% CONDITIONAL Monte-Carlo intervals (inner simulation');
scripts/simulation/e4-v5/e5-delivery.mjs:317:    safeLog('variability only — world, model-form and calibration uncertainty are NOT included), read SEPARATELY:');
scripts/simulation/e4-v5/e5-delivery.mjs:321:    safeLog(`  FULL architecture (A2 − S): ${pct(r.full)}  95% conditional-MC CI ${civ(r.fullCI)}\n`);
scripts/simulation/e4-v5/e5-delivery.mjs:329:    const rc = delivered2x2(cfg, { nWorlds: 1200, delivery: { ...DELIVERY, mon_detect: 0.05, mon_recovery: 0.0 } });
scripts/simulation/e4-v5/e5-delivery.mjs:335:      const rr = delivered2x2(cfg, { nWorlds: 700, delivery: { ...DELIVERY, mon_detect: c, mon_recovery: 0.0 } });
scripts/simulation/e4-v5/e5-delivery.mjs:339:    const rr2 = delivered2x2(cfg, { nWorlds: 700, delivery: { ...DELIVERY, mon_detect: 0.05, mon_recovery: 0.20 } });
scripts/simulation/e4-v5/e5-delivery.mjs:342:    // Favorable R=0 robustness (Codex): drop the reputational stake entirely — the verified regime then admits SOME
scripts/simulation/e4-v5/e5-delivery.mjs:344:    const r0 = delivered2x2(cfg, { nWorlds: 1200, delivery: { ...DELIVERY, verified: { ...DELIVERY.verified, rep: 0.0 } } });
scripts/simulation/e4-v5/e5-delivery.mjs:345:    safeLog(`R=0 robustness (no reputational stake): verified delivery ${pct(r0.delivery.centralVerified)}, verified diversion incidence ${pct(r0.diversionIncidence.A1)}, full ${pct(r0.full)} 95% CI [${pct(r0.fullCI[0])}, ${pct(r0.fullCI[1])}] — the gain survives without the (unanchored) reputation term.\n`);
scripts/simulation/e4-v5/e5-delivery.mjs:355:    // (iv) COST/COMPLEXITY-correlated delivery risk (robustness). NOTE: the risk is tied to project COST, and cost is
scripts/simulation/e4-v5/e5-delivery.mjs:360:      const rv = delivered2x2(cfg, { nWorlds: 800, delivery: { ...DELIVERY, val_risk: vr } });
audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:46:### Calibration (declared, not fitted; magnitudes anchored, directions from the corpus)
audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:56:## Result (PROBABLE world, 1200 worlds; post-Codex calibration pi_hon=0.78, separate RNG streams)
audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:64:  opaque) / +51.4% (at verified). **Interaction +9.4%** (positive). **Full architecture (A2 − S) +59.1% [95% CI
audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:86:3. **Delivery calibration is declared, not measured.** The regime parameters are anchored in direction and band, not
audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:95:worse status quo only widens the gain. This resolves the "opaque calibration is a single stipulated number" objection.
audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:105:anchored band — corrected in the calibration round.)
audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:111:## Magnitudes that need literature anchors (for the friendly calibration round)
audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:124:## Verified calibration table (friendly round — calibration agent, 2026-07-12)
audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:144:**Implied code recalibration:** lower `mon_coupling` default from 0.35 to ~0.15 (coverage-only band 0.0–0.20) and
audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:155:verified ~0 diversion as conditional ex-ante deterrence and the whole calibration an identified-set reference.
audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:157:**Second robustness pass — DONE (commit 418c7cd):** value/complexity-correlated delivery risk (`val_risk`); 20-seed
audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:159:fail-closed. Result: full gain robust — 20-seed sd 0.5 pp; LHS full-architecture wins 100%, coverage effect 100%.
audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:164:**PUBLICATION-READY: YES after a bounded pass**, now applied (commit 84332e1): validation genuinely fail-closed
audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:173:**Status (post friendly rounds): CODE/TEST-READY.** (Downgraded from "publication-ready" per Adversarial R1: the
audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:174:empirical interpretation is still pending model-form + calibration review — the calibration is an identified-set
audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:175:reference not a field estimate, the intervals are conditional-MC only, and the robustness sweep is conditional on
audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:183:- Re-label `e5-layers.mjs` as the E10 cost scaffolding; wire E5 delivery into the paper's Finding 5 with the
audits/2026-07-12-e5-remodel/ADVERSARIAL-R1-ADJUDICATION.md:13:| 3 | [E9] "robust selection/delivery" false in own worlds | **JUSTIFIED** | Real over-claim: selection Shapley −2.16 in PRO_CENTRAL, delivery −2.09 in PRO_DIST. Fix: "large in PROBABLE"; publish the named-world table. (The FULL diagonal still wins in every world — preserve that.) |
audits/2026-07-12-e5-remodel/ADVERSARIAL-R1-ADJUDICATION.md:14:| 4 | [E10] embargo leak "value ratio (~2.7)" | **JUSTIFIED** | Semantic performance-ratio bypass. Fix: remove; report the κ_C threshold or pp table only. |
audits/2026-07-12-e5-remodel/ADVERSARIAL-R1-ADJUDICATION.md:15:| 5 | [cross] closed schema doesn't cover E5/E9/E10 (safeLog only) | **PARTIAL** | Fix the leak + tighten safeLog to catch the ratio class now; full typed closed renderers for 3 experiments = noted follow-up. |
audits/2026-07-12-e5-remodel/ADVERSARIAL-R1-ADJUDICATION.md:20:| 10 | [cross] narrow CIs omit substantive uncertainty | **JUSTIFIED (labeling)** | The CI is inner-MC only. Fix: relabel "conditional Monte-Carlo interval (world/calibration uncertainty excluded)". |
audits/2026-07-12-e5-remodel/ADVERSARIAL-R1-ADJUDICATION.md:25:| 15 | [E5] robustness ranges preserve ordering, never cross worlds | **PARTIAL** | Relabel the LHS as a CONDITIONAL delivery-parameter sweep (PROBABLE-fixed, non-overlapping regimes); a joint world×delivery×κ design = follow-up. |
audits/2026-07-12-e5-remodel/ADVERSARIAL-R1-ADJUDICATION.md:27:| 17 | [E9] Chile severity not the modeled treatment | **JUSTIFIED** | Mental health is a health SUBfunction, not a zero-funded top-level COFOG function; agendaCapture=1 is a taxonomic mismatch. Fix: keep Chile as a QUALITATIVE illustration of visibility bias; **remove the +2–4pp numeric mapping**. |
audits/2026-07-12-e5-remodel/ADVERSARIAL-R1-ADJUDICATION.md:29:| + | "publication-ready" premature | **JUSTIFIED** | Downgrade to "code/test ready; empirical interpretation pending calibration/model-form review." |
audits/2026-07-12-e5-remodel/ADVERSARIAL-R1-ADJUDICATION.md:39:symmetric, smaller κ), qualify "robust" → "large in PROBABLE" with the named-world table, add residual diversion to
audits/2026-07-12-e5-remodel/ADVERSARIAL-R1-ADJUDICATION.md:40:verified, de-quantify the Chile example, relabel CIs/robustness as conditional, and clean the docs. None of this is an
scripts/simulation/e4-v5/engine.mjs:12:    s |= 0; s = (s + 0x6D2B79F5) | 0;
scripts/simulation/e4-v5/engine.mjs:49:// ---------------- world generation (one economy of projects) ----------------
scripts/simulation/e4-v5/engine.mjs:178:  // than injecting divergent ratios into the envelope (Codex: denominator-weighting divergence).
scripts/simulation/e4-v5/engine.mjs:183:  // RATIO OF SUMS (robust): m = Σ(D−C)/ΣO over retained worlds. Bounded and stable — a single tiny-O world cannot
scripts/simulation/e4-v5/engine.mjs:184:  // dominate (as it would in the per-world-ratio mean, Codex's (1,1)/(−1,100) divergence). Interpretation: total
scripts/simulation/e4-v5/engine.mjs:190:  // world-cluster bootstrap CI (inner simulation variability only): resample worlds, recompute the ratio of sums.
scripts/simulation/e4-v5/engine.mjs:192:  const bootRng = makeRng((seed ^ 0x9e3779b9) >>> 0);
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:10:eligibility frame / macro categorization) as a *value* contrast — and the old ≈1.05× macro factor was a
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:20:## The planning layer — what makes it a genuine value contrast (not ≈1×)
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:42:## Design (a 2×2×2, but the headline is the two corners)
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:76:Build only after E5 is publication-ready. Then: contract/params → engine stage → tests (reduces-to-E5/E4) → friendly
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:96:Core v0 full (all-distributed) +79.6%; **full-stack gain +49.5% [95% CI +48.8, +50.1]**. Layer main effects:
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:99:**The planning layer is a genuine, positive value contrast** — not the retired ≈1.05× macro factor's near-parity. It
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:113:## Planning-layer calibration (friendly round — calibration agent, 2026-07-13, all web-verified)
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:126:| maintenance / diffuse-cost underinvestment | new-build bias; optimal maintenance ~2% of GDP; deferred maintenance multiplies later cost | Rioja 2003, *JPE* 87(9–10) + World Bank AICD maintenance briefs | ANCHORED for the SIGN (undervisible = underfunded). NB: the "~2/3 new vs 1/3 maintenance" split is NOT in Rioja 2003 — do not attribute it (calibration agent flag) |
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:135:## Country-grounded ILLUSTRATIVE example of agenda capture — CHILE, mental health (data agent, 2026-07-13, verified)
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:139:**Chile — mental health.** The public mental-health budget is ~**2% of the health budget** (1.45–2.16% across 2007–2015;
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:141:disorders being the **leading cause of disability in Chile** (PAHO), with treatment coverage ~20% vs ~50% typical for
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:144:(2015), *Rev Med Chile* 143(9):1179–1186; IPSUSS; OECD 2025 (via Fact Checking UC); DIPRES sectoral evaluation (2025).
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:149:NOT documented clientelist vote-buying — and Chile is a relatively well-governed OECD country, so the point is if EVEN
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:150:Chile floors mental health, the visibility bias is pervasive, not a basket-case artefact. The clientelist variant of the
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:153:verified single budget-share number — so we cite it as mechanism, not calibration.
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:157:`agendaCapture=1` (a whole function off the menu) and reporting a simulated "+2–4pp" would over-transport. **We therefore
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:158:do NOT attach a simulated planning number to the Chile example.** It stands as a **qualitative illustration** that the
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:159:model's visibility-bias mechanism has a real footprint: a high-need (Chile's #1 disability cause, ~20% treatment
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:164:documented gap here, but the illustration is directional, not a calibration.
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:168:Codex round-1: skeleton sound; planning layer NOT publication-ready (the standalone +3.2/+7.1 were one-at-a-time
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:203:recycling, planning +4.8%). **Conclusion: SELECTION and DELIVERY are the robust, large layers; PLANNING is a MODEST,
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:229:Budget reallocated to funded sectors. This is the mechanism that makes the planning layer **robustly POSITIVE (no sign
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:252:robust, quantified layers.** 26/26 tests.
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:263:- **Quantify only SELECTION and DELIVERY** (anchored, robust, large layers).
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:274:   accessible data (Chile is a good place to look given the author's context, but the example is NOT tied to Chile — an
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:277:   agenda-capture severity as an **ILLUSTRATIVE example, explicitly NOT a conclusive calibration**.
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:285:return distributions, baseline capital share, visibility, need, maintenance share); an inverse-calibration harness that
scripts/simulation/e4-v5/adapter.mjs:5:// m_hat is a SIGNED FRACTION of the oracle (parity at 0), never a ratio-with-parity-1 and never suffixed with 'x'.
scripts/simulation/e4-v5/adapter.mjs:10:// signs (× ✕ ✖ ⨯), a non-breaking hyphen, a division slash, etc. cannot smuggle a multiplier/ratio past the filter
scripts/simulation/e4-v5/adapter.mjs:13:const HTML_MULT  = /&times;|&#0*215;|&#x0*d7;/gi;   // HTML-entity multiplication sign → x
scripts/simulation/e4-v5/adapter.mjs:19:const NUM_FOLD    = new RegExp(`(\\d(\\.\\d+)?|\\b(${NUMWORD}))[\\s-]*(fold|times)\\b`, 'i');   // "2.2-fold","two times","fourfold"
scripts/simulation/e4-v5/adapter.mjs:21:const RATIO_TOKEN = /\b[dc]\s*\/\s*[cd]\b/i;   // D/C or C/D, any case
scripts/simulation/e4-v5/adapter.mjs:22:const RATIO_PHRASE = /\b(value|performance|institution\w*)\s+ratio\b|\bratio\s*\(?~?\s*\d/i;  // "value ratio (~2.7)" semantic multiplier (Adversarial R1 #4/#5)
scripts/simulation/e4-v5/adapter.mjs:25:// numeric or number-word N-fold / N-times; bare twice/double/triple/quadruple; D/C or C/D any case; zero-width
scripts/simulation/e4-v5/adapter.mjs:31:  if (NUM_FOLD.test(norm)) hits.push('N-fold / N-times multiplier phrasing (numeric or word)');
scripts/simulation/e4-v5/adapter.mjs:33:  if (RATIO_TOKEN.test(norm)) hits.push('institution ratio (D/C or C/D, any case)');
scripts/simulation/e4-v5/adapter.mjs:34:  if (RATIO_PHRASE.test(norm)) hits.push('semantic performance-ratio phrasing (value/performance ratio, ratio(~N))');
scripts/simulation/e4-v5/contract.mjs:104:// ---- EVIDENCE configuration (single source of truth for the evidence run; hashed into theta_id) ----
scripts/simulation/e4-v5/contract.mjs:121:// ---- CLOSED output schema (embargo-critical): additionalProperties:false; cannot express D/C or ratio-parity-1 ----
scripts/simulation/e4-v5/contract.mjs:143:  // NOTE: there is deliberately NO field able to carry D/C, a ratio with parity 1, or an institution-performance
scripts/simulation/e4-v5/contract.mjs:147:// Tokens the sole render adapter must reject in institution-performance context (ASCII x, Unicode multiplication, ratio).
scripts/simulation/e4-v5/contract.mjs:206:  let h = 0x811c9dc5;
scripts/simulation/e4-v5/contract.mjs:207:  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; }
scripts/simulation/e4-v5/contract.mjs:222:  let h = 0x811c9dc5;
scripts/simulation/e4-v5/contract.mjs:225:    h = Math.imul(h, 0x01000193) >>> 0;
scripts/simulation/e4-v5/e10-costs.mjs:8://     capture is the dominant, not-yet-anchorable mechanism), so it must NOT be folded quantitatively into the cost
scripts/simulation/e4-v5/e10-costs.mjs:20:import { delivered2x2, DELIVERY } from './e5-delivery.mjs';
scripts/simulation/e4-v5/e10-costs.mjs:38:  planningOn: false,  // author requirement: PLANNING OFF by default (its magnitude is deferred; do not fold into costs)
scripts/simulation/e4-v5/e10-costs.mjs:51:  const v = delivered2x2(cNet, { ...opts, delivery });
scripts/simulation/e4-v5/e10-costs.mjs:59:  const full = costs.planningOn ? fullStack(cfg, { nWorlds, seed, delivery, planning }) : delivered2x2(cfg, { nWorlds, seed, delivery });
scripts/simulation/e4-v5/e9-fullstack-test.mjs:4:import { delivered2x2, DELIVERY } from './e5-delivery.mjs';
scripts/simulation/e4-v5/e9-fullstack-test.mjs:18:  const e5 = delivered2x2(cfg, { nWorlds: NW });
scripts/simulation/e4-v5/e9-fullstack-test.mjs:62:  check('every reported quantity carries a 95% CI', Array.isArray(r.attributionCI.planning) && Array.isArray(r.planningCI.distributed) && Array.isArray(r.fullStackCI));
scripts/simulation/e4-v5/e10-costs-test.mjs:4:import { delivered2x2 } from './e5-delivery.mjs';
scripts/simulation/e4-v5/e10-costs-test.mjs:25:  const e5 = delivered2x2(cfg, { nWorlds: NW });
scripts/simulation/e4-v5/e9-fullstack.mjs:16:// options within a shared frame). 2x2x2 = 8 cells; the headline diagonal is all-central (status quo) vs all-distributed
scripts/simulation/e4-v5/e9-fullstack.mjs:40:                      //     planning contribution scales with this; NOT a robust large effect. (0.3 is a declared stress.)
scripts/simulation/e4-v5/e9-fullstack.mjs:139:// One world: executors (separate stream), persistent sectors (planning stream), then the FULL 2×2×2 = 8 cells over the
scripts/simulation/e4-v5/e9-fullstack.mjs:208:  const rng = makeRng(seed), execRng = makeRng((seed ^ 0x5bd1e995) >>> 0), pRng = makeRng((seed ^ 0x27d4eb2f) >>> 0);
scripts/simulation/e4-v5/e9-fullstack.mjs:225:  const B = NUM.bootstrap_reps.value, bRng = makeRng((seed ^ 0x9e3779b9) >>> 0);
scripts/simulation/e4-v5/e9-fullstack.mjs:281:    safeLog(`FULL-STACK gain (Core v0 − status quo): ${pct(r.fullStackGain)}  95% conditional-MC CI ${civ(r.fullStackCI)}\n`);
scripts/simulation/e4-v5/e9-fullstack.mjs:287:    // Adversarial R1 #3: the layer values are LARGE IN PROBABLE, not "robust" — individual Shapley components reverse
scripts/simulation/e4-v5/e9-fullstack.mjs:304:    safeLog('modest and CONDITIONAL — not a robust large positive layer):');
scripts/simulation/e4-v5/e9-fullstack.mjs:312:    // AGENDA CAPTURE (the second face of power) is the mechanism that makes planning a robust positive layer: the
scripts/simulation/e4-v5/e9-fullstack.mjs:327:    safeLog('IN PROBABLE — not "robust": each reverses sign in an extreme world, see the named-world table above, though');
scripts/simulation/e4-v5/e5-delivery-test.mjs:3:import { delivered2x2, sweepOpaque, replicateSeeds, jointSweep, validateDelivery, DELIVERY } from './e5-delivery.mjs';
scripts/simulation/e4-v5/e5-delivery-test.mjs:21:  const r = delivered2x2(cfg, { nWorlds: NW, delivery: perfect });
scripts/simulation/e4-v5/e5-delivery-test.mjs:32:  // so the selection efficiencies match the E4 engine's D/O and C/O to full precision (the RNG-separation invariant).
scripts/simulation/e4-v5/e5-delivery-test.mjs:39:  const r = delivered2x2(cfg, { nWorlds: NW });
scripts/simulation/e4-v5/e5-delivery-test.mjs:57:  const off  = delivered2x2(cfg, { nWorlds: NW });
scripts/simulation/e4-v5/e5-delivery-test.mjs:58:  const det  = delivered2x2(cfg, { nWorlds: NW, delivery: { ...DELIVERY, mon_detect: 0.05, mon_recovery: 0.0 } });
scripts/simulation/e4-v5/e5-delivery-test.mjs:59:  const both = delivered2x2(cfg, { nWorlds: NW, delivery: { ...DELIVERY, mon_detect: 0.05, mon_recovery: 0.20 } });
scripts/simulation/e4-v5/e5-delivery-test.mjs:69:  const base = delivered2x2(cfg, { nWorlds: NW });
scripts/simulation/e4-v5/e5-delivery-test.mjs:70:  const strong = delivered2x2(cfg, { nWorlds: NW, delivery: stronger });
scripts/simulation/e4-v5/e5-delivery-test.mjs:83:// 6) VALIDATION: fail-closed on out-of-domain delivery params (Codex robustness item).
scripts/simulation/e4-v5/e5-delivery-test.mjs:93:  check('delivered2x2 validates its delivery arg', (() => { try { delivered2x2(cfg, { nWorlds: 10, delivery: { ...DELIVERY, mon_detect: 2 } }); return false; } catch { return true; } })());
scripts/simulation/e4-v5/e5-delivery-test.mjs:96:// 7) VALUE-RISK robustness: value/complexity-correlated delivery risk does not systematically undo coverage — the
scripts/simulation/e4-v5/e5-delivery-test.mjs:99:  const base = delivered2x2(cfg, { nWorlds: NW });
scripts/simulation/e4-v5/e5-delivery-test.mjs:100:  const vr   = delivered2x2(cfg, { nWorlds: NW, delivery: { ...DELIVERY, val_risk: 0.6 } });
scripts/simulation/e4-v5/e5-delivery-test.mjs:106:// 8) GLOBAL robustness: 20-seed replication is tight; the joint LHS sweep has coverage winning across the space.
audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md:15:  not-yet-anchorable mechanism), so it must NOT be folded quantitatively into the cost result. OFF ⇒ value base = E5;
audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md:19:## Calibration (verification agent, 2026-07-13 — DIRECTION verified, POINT magnitudes DECLARED-conservative)
audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md:25:| ratio κ_C/κ_D ≈ **5** | — | verified central machinery cost is **≥10–30×** platform run cost → the modeled 5× **understates** the structural gap | conservative |
audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md:35:**Honest subtlety (tested):** admin costs WIDEN the Core-v0 gap only when `κ_C/κ_D` exceeds the **value ratio (~2.7)** —
audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md:36:Core v0 delivers more, so a proportional cost removes more absolute value from its base. At the anchored 5× ratio, costs
audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md:37:widen the gap; below ~2.7× they narrow it. The verified evidence (ratio ≥10–30×) sits well above the crossover, so the
audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md:38:widening is robust.

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "rg -n \"RATIO_PHRASE|value ratio|performance ratio|semantic performance|ratio\\s*\\(?~\" -- scripts audits; rg -n \"publication-ready|PUBLICATION-READY|CODE/TEST-READY|code/test-ready|conditional-MC|CONDITIONAL Monte-Carlo|95% CI\" -- audits/2026-07-12-e5-remodel scripts/simulation/e4-v5" in C:\devel\claude-projects\distributed-governance-research
 succeeded in 1648ms:
scripts\simulation\e5-sp-model.mjs:22:// Scored on delivered NET value (net = S - hurdle*cost). Delivery: central fWeak=0.75, distributed fVer=0.975 (ratio ~1.30x).
scripts\simulation\e5-sp-model.mjs:63:  // Delivery ratio ~1.30x (band 1.23-1.39x). (The old 0.60/0.86 = 1.43x used harsher corruption-specific leakage studies.)
audits\2026-07-12-e5-remodel\ADVERSARIAL-R1-ADJUDICATION.md:14:| 4 | [E10] embargo leak "value ratio (~2.7)" | **JUSTIFIED** | Semantic performance-ratio bypass. Fix: remove; report the κ_C threshold or pp table only. |
scripts\simulation\e4-v5\adapter.mjs:22:const RATIO_PHRASE = /\b(value|performance|institution\w*)\s+ratio\b|\bratio\s*\(?~?\s*\d/i;  // "value ratio (~2.7)" semantic multiplier (Adversarial R1 #4/#5)
scripts\simulation\e4-v5\adapter.mjs:34:  if (RATIO_PHRASE.test(norm)) hits.push('semantic performance-ratio phrasing (value/performance ratio, ratio(~N))');
audits\2026-07-11-v1.14-design\ADMIN-COST-LEG.md:24:- `m_admin` = fractional extra deliverable budget = `(κ_C − κ_D)/(1 − κ_C)` (or the delivered-value ratio it induces).
audits\2026-07-10\remediation-roadmap.md:38:  ratio, not benchmark-normalized (~71% max). Say "distributed/central ratio ~1.8×"; finish oracle→benchmark. *(errors M2; consistency #11)*
audits\2026-07-12-e5-remodel\ADVERSARIAL-R1-VERDICT.md:41:planning switchable OFF, costs widen the gap only above the value ratio (~2.7). Reporting embargo: percentages of the
audits\2026-07-12-e5-remodel\ADVERSARIAL-R1-VERDICT.md:252:     eliminates, so κ_C > κ_D widens the gap once the ratio clears the value ratio (~2.7). Direction anchored
audits\2026-07-12-e5-remodel\ADVERSARIAL-R1-VERDICT.md:269:  ok   the crossover is at κ_C/κ_D ≈ the value ratio
audits\2026-07-12-e5-remodel\ADVERSARIAL-R1-VERDICT.md:2454:  37:                       //     so the modeled ratio ~5 UNDERSTATES the structural gap. Magnitude DECLARED.
audits\2026-07-12-e5-remodel\ADVERSARIAL-R1-VERDICT.md:2507:  90:     safeLog('     eliminates, so κ_C > κ_D widens the gap once the ratio clears the value ratio (~2.7). Direction anchored');
audits\2026-07-12-e5-remodel\ADVERSARIAL-R1-VERDICT.md:2559:  43: // 5) COST DIRECTION: with a κ_C/κ_D ratio above the value ratio, admin costs WIDEN the gap; below it, they narrow it
audits\2026-07-12-e5-remodel\ADVERSARIAL-R1-VERDICT.md:2564:  48:   const narrow = e10(cfg, { nWorlds: NW, costs: { ...COSTS, kappa_C: 0.06, kappa_D: 0.05 } }); // ratio ~1.2 < valueRatio
audits\2026-07-12-e5-remodel\ADVERSARIAL-R1-VERDICT.md:2567:  51:   check('the crossover is at κ_C/κ_D ≈ the value ratio', valueRatio > 2 && valueRatio < 4, `valueRatio ${valueRatio}`);
audits\2026-07-12-e5-remodel\ADVERSARIAL-R1-VERDICT.md:2610:  35: **Honest subtlety (tested):** admin costs WIDEN the Core-v0 gap only when `κ_C/κ_D` exceeds the **value ratio (~2.7)** —
audits\2026-07-12-e5-remodel\ADVERSARIAL-R1-VERDICT.md:2628:The first hard failures are now visible despite all tests passing: E10’s emitted output exposes a bare “value ratio (~2.7),” which is an institutional performance multiplier in substance and bypasses the adapter’s token filter. I’m also testing two result-level risks the current invariants do not cover: negative-value funded projects under the delivery haircut, and whether E9’s “quantified” Shapley layers inherit the unanchored planning model through interaction averaging.
audits\2026-07-12-e5-remodel\ADVERSARIAL-R1-VERDICT.md:2826:"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "rg -n -i \"×|[0-9](\\.[0-9]+)?x|fold|times|D/C|C/D|value ratio|parity\" scripts/simulation/e4-v5/e5-delivery.mjs scripts/simulation/e4-v5/e5-delivery-test.mjs scripts/simulation/e4-v5/e9-fullstack.mjs scripts/simulation/e4-v5/e9-fullstack-test.mjs scripts/simulation/e4-v5/e10-costs.mjs scripts/simulation/e4-v5/e10-costs-test.mjs scripts/simulation/e4-v5/engine.mjs scripts/simulation/e4-v5/contract.mjs scripts/simulation/e4-v5/adapter.mjs audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md" in C:\devel\claude-projects\distributed-governance-research
audits\2026-07-12-e5-remodel\ADVERSARIAL-R1-VERDICT.md:2832:audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md:35:**Honest subtlety (tested):** admin costs WIDEN the Core-v0 gap only when `κ_C/κ_D` exceeds the **value ratio (~2.7)** —
audits\2026-07-12-e5-remodel\ADVERSARIAL-R1-VERDICT.md:2862:scripts/simulation/e4-v5/e10-costs-test.mjs:43:// 5) COST DIRECTION: with a κ_C/κ_D ratio above the value ratio, admin costs WIDEN the gap; below it, they narrow it
audits\2026-07-12-e5-remodel\ADVERSARIAL-R1-VERDICT.md:2863:scripts/simulation/e4-v5/e10-costs-test.mjs:51:  check('the crossover is at κ_C/κ_D ≈ the value ratio', valueRatio > 2 && valueRatio < 4, `valueRatio ${valueRatio}`);
audits\2026-07-12-e5-remodel\ADVERSARIAL-R1-VERDICT.md:2891:scripts/simulation/e4-v5/e10-costs.mjs:90:    safeLog('     eliminates, so κ_C > κ_D widens the gap once the ratio clears the value ratio (~2.7). Direction anchored');
audits\2026-07-12-e5-remodel\ADVERSARIAL-R1-VERDICT.md:2943:for (const s of ['value ratio (~2.7)','Parity at the oracle reference','2.7×','D/C','2.7-fold']) {
audits\2026-07-12-e5-remodel\ADVERSARIAL-R1-VERDICT.md:2949:{"s":"value ratio (~2.7)","accepted":true}
audits\2026-07-12-e5-remodel\ADVERSARIAL-R1-VERDICT.md:2991:scripts/simulation/e4-v5/e10-costs.mjs:90:    safeLog('     eliminates, so κ_C > κ_D widens the gap once the ratio clears the value ratio (~2.7). Direction anchored');
audits\2026-07-12-e5-remodel\ADVERSARIAL-R1-VERDICT.md:3090:audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md:35:**Honest subtlety (tested):** admin costs WIDEN the Core-v0 gap only when `κ_C/κ_D` exceeds the **value ratio (~2.7)** —
audits\2026-07-12-e5-remodel\ADVERSARIAL-R1-VERDICT.md:3247:1. **E10 emits a semantic performance multiplier — [blocker].** Files: [e10-costs.mjs:89–91](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e10-costs.mjs:89), [e10-costs-test.mjs:43–51](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e10-costs-test.mjs:43). The phrase `"value ratio (~2.7)"` is Core-v0/status-quo performance encoded without the prohibited literal token. The embargo filter accepts it. **Change:** remove it; report the permitted κ_C threshold near 8.2% for fixed κ_D=3%, or only the percentage-point table. **Threat:** presentation/embargo.
audits\2026-07-12-e5-remodel\ADVERSARIAL-R1-VERDICT.md:3316:4. **[E10] [blocker] Embargo breach through `"value ratio (~2.7)"`.** [e10-costs.mjs:89](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e10-costs.mjs:89). Remove the semantic multiplier and report a κ threshold or percentage-point table. **Threat:** presentation only.
audits\2026-07-12-e5-remodel\ADVERSARIAL-R1-VERDICT.md:3423:1. **E10 emits a semantic performance multiplier — [blocker].** Files: [e10-costs.mjs:89–91](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e10-costs.mjs:89), [e10-costs-test.mjs:43–51](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e10-costs-test.mjs:43). The phrase `"value ratio (~2.7)"` is Core-v0/status-quo performance encoded without the prohibited literal token. The embargo filter accepts it. **Change:** remove it; report the permitted κ_C threshold near 8.2% for fixed κ_D=3%, or only the percentage-point table. **Threat:** presentation/embargo.
audits\2026-07-12-e5-remodel\ADVERSARIAL-R1-VERDICT.md:3492:4. **[E10] [blocker] Embargo breach through `"value ratio (~2.7)"`.** [e10-costs.mjs:89](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e10-costs.mjs:89). Remove the semantic multiplier and report a κ threshold or percentage-point table. **Threat:** presentation only.
audits\2026-07-10-round6\codex-run.log:737:   29:   ratio, not benchmark-normalized (~71% max). Say "distributed/central ratio ~1.8×"; finish oracle→benchmark. *(errors M2; consistency #11)*
audits\2026-07-10-round6\codex-run.log:1646:   29:   ratio, not benchmark-normalized (~71% max). Say "distributed/central ratio ~1.8×"; finish oracle→benchmark. *(errors M2; consistency #11)*
audits\2026-07-10-round4\codex-run.log:1656:29:  ratio, not benchmark-normalized (~71% max). Say "distributed/central ratio ~1.8×"; finish oracle→benchmark. *(errors M2; consistency #11)*
audits\2026-07-10-round5\codex-run.log:1479:  30:   ratio, not benchmark-normalized (~71% max). Say "distributed/central ratio ~1.8×"; finish oracle→benchmark. *(errors M2; consistency #11)*
audits\2026-07-10-round5\codex-run.log:2118:audits/2026-07-10/remediation-roadmap.md-30-  ratio, not benchmark-normalized (~71% max). Say "distributed/central ratio ~1.8×"; finish oracle→benchmark. *(errors M2; consistency #11)*
audits\2026-07-12-e5-remodel\E10-COSTS-DESIGN.md:35:**Honest subtlety (tested):** admin costs WIDEN the Core-v0 gap only when `κ_C/κ_D` exceeds the **value ratio (~2.7)** —
audits\2026-07-10-round7\codex-run.log:1083:audits/2026-07-10\remediation-roadmap.md-29-  ratio, not benchmark-normalized (~71% max). Say "distributed/central ratio ~1.8×"; finish oracle→benchmark. *(errors M2; consistency #11)*
audits\2026-07-10-round9\codex-run.log:1415:29:  ratio, not benchmark-normalized (~71% max). Say "distributed/central ratio ~1.8×"; finish oracle→benchmark. *(errors M2; consistency #11)*
audits\2026-07-11-v1.14-design\codex-run.log:6538:4. **Ordinal route:** if only ordinal reports are available, use an ordinal social-choice/rank-based estimand and confront Arrow/Gibbard constraints; do not sum codes or report cardinal value ratios.
audits\2026-07-11-v1.14-design\codex-run.log:6674:+4. **Ordinal route:** if only ordinal reports are available, use an ordinal social-choice/rank-based estimand and confront Arrow/Gibbard constraints; do not sum codes or report cardinal value ratios.
audits\2026-07-11-v1.14-design\codex-v11-run.log:721:research\e4e5-value-model-v2.md:179:  block), so its loss ≈ 2.5% → f_ver ≈ **0.975** → **delivery ratio ~1.30× (band 1.23–1.39×)**, DOWN from
audits\2026-07-11-v1.14-design\codex-v11-run.log:1143:research\e4e5-value-model-v2.md:179:  block), so its loss ≈ 2.5% → f_ver ≈ **0.975** → **delivery ratio ~1.30× (band 1.23–1.39×)**, DOWN from
audits\2026-07-11-v1.14-design\codex-v2-run.log:983:scripts/simulation\e5-sp-model.mjs:18:// Scored on delivered NET value (net = S - hurdle*cost). Delivery: central fWeak=0.75, distributed fVer=0.975 (ratio ~1.30x).
audits\2026-07-11-v1.14-design\codex-v2-run.log:987:scripts/simulation\e5-sp-model.mjs:59:  // Delivery ratio ~1.30x (band 1.23-1.39x). (The old 0.60/0.86 = 1.43x used harsher corruption-specific leakage studies.)
audits\2026-07-11-v1.14-design\codex-v2-run.log:1164:research\e4e5-value-model-v2.md:179:  block), so its loss ≈ 2.5% → f_ver ≈ **0.975** → **delivery ratio ~1.30× (band 1.23–1.39×)**, DOWN from
audits\2026-07-11-v1.14-design\codex-v2-run.log:1415:1. No `×`/`x` suffix for any institution-performance ratio in v2 outputs.
audits\2026-07-11-v1.14-design\codex-v3-run.log:1572:   70: 1. No `×`/`x` suffix for any institution-performance ratio in v2 outputs.
audits\2026-07-11-v1.14-design\codex-v3-run.log:4427:V3 says the new engine never emits an institution-performance `×` suffix, and describes E4-v4 as an engine that “prints `×`” (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:108-113`). The actual engine does **not** use that character. It concatenates the ASCII letter `x` after performance ratios in both crossover and capture output (`scripts/simulation/e4-v4-symmetric-frontier.mjs:95-104`). Its reproduced output contains `0.95x`, `0.94x`, `0.83x`, and `1.54x`/`1.46x`/`1.43x` (`audits/2026-07-11-v1.14-design/canonical-e4-v4-frontier-rerun.txt:47-57`). A lint that implements the prose literally by rejecting only U+00D7 would pass the current relapse path.
audits\2026-07-11-v1.14-design\codex-v4-run.log:1256:audits/2026-07-11-v1.14-design\critique-v3-mechanical-embargo.md:31:V3 says the new engine never emits an institution-performance `×` suffix, and describes E4-v4 as an engine that “prints `×`” (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:108-113`). The actual engine does **not** use that character. It concatenates the ASCII letter `x` after performance ratios in both crossover and capture output (`scripts/simulation/e4-v4-symmetric-frontier.mjs:95-104`). Its reproduced output contains `0.95x`, `0.94x`, `0.83x`, and `1.54x`/`1.46x`/`1.43x` (`audits/2026-07-11-v1.14-design/canonical-e4-v4-frontier-rerun.txt:47-57`). A lint that implements the prose literally by rejecting only U+00D7 would pass the current relapse path.
audits\2026-07-11-v1.14-design\codex-v4-run.log:1343:scripts\simulation\e5-sp-model.mjs:18:// Scored on delivered NET value (net = S - hurdle*cost). Delivery: central fWeak=0.75, distributed fVer=0.975 (ratio ~1.30x).
audits\2026-07-11-v1.14-design\codex-v4-run.log:1347:scripts\simulation\e5-sp-model.mjs:59:  // Delivery ratio ~1.30x (band 1.23-1.39x). (The old 0.60/0.86 = 1.43x used harsher corruption-specific leakage studies.)
audits\2026-07-11-v1.14-design\codex-v4-run.log:1396:audits/2026-07-11-v1.14-design\critique-v2-multiplier-estimand.md:70:1. No `×`/`x` suffix for any institution-performance ratio in v2 outputs.
audits\2026-07-11-v1.14-design\codex-v4-run.log:1466:audits/2026-07-11-v1.14-design\critique-theory-primitives.md:45:4. **Ordinal route:** if only ordinal reports are available, use an ordinal social-choice/rank-based estimand and confront Arrow/Gibbard constraints; do not sum codes or report cardinal value ratios.
audits\2026-07-11-v1.14-design\codex-v4-run.log:2103:V3 says the new engine never emits an institution-performance `×` suffix, and describes E4-v4 as an engine that “prints `×`” (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:108-113`). The actual engine does **not** use that character. It concatenates the ASCII letter `x` after performance ratios in both crossover and capture output (`scripts/simulation/e4-v4-symmetric-frontier.mjs:95-104`). Its reproduced output contains `0.95x`, `0.94x`, `0.83x`, and `1.54x`/`1.46x`/`1.43x` (`audits/2026-07-11-v1.14-design/canonical-e4-v4-frontier-rerun.txt:47-57`). A lint that implements the prose literally by rejecting only U+00D7 would pass the current relapse path.
audits\2026-07-11-v1.14-design\critique-theory-primitives.md:45:4. **Ordinal route:** if only ordinal reports are available, use an ordinal social-choice/rank-based estimand and confront Arrow/Gibbard constraints; do not sum codes or report cardinal value ratios.
audits\2026-07-11-v1.14-design\critique-v2-multiplier-estimand.md:70:1. No `×`/`x` suffix for any institution-performance ratio in v2 outputs.
audits\2026-07-11-v1.14-design\critique-v3-mechanical-embargo.md:31:V3 says the new engine never emits an institution-performance `×` suffix, and describes E4-v4 as an engine that “prints `×`” (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:108-113`). The actual engine does **not** use that character. It concatenates the ASCII letter `x` after performance ratios in both crossover and capture output (`scripts/simulation/e4-v4-symmetric-frontier.mjs:95-104`). Its reproduced output contains `0.95x`, `0.94x`, `0.83x`, and `1.54x`/`1.46x`/`1.43x` (`audits/2026-07-11-v1.14-design/canonical-e4-v4-frontier-rerun.txt:47-57`). A lint that implements the prose literally by rejecting only U+00D7 would pass the current relapse path.
audits/2026-07-12-e5-remodel\FINDING5-DRAFT.md:27:(95% CI ⟨[+58.5, +59.7]⟩); an earlier version summarized this as a single compound value-per-budget multiplier, which
audits/2026-07-12-e5-remodel\E9-FULLSTACK-DESIGN.md:76:Build only after E5 is publication-ready. Then: contract/params → engine stage → tests (reduces-to-E5/E4) → friendly
audits/2026-07-12-e5-remodel\E9-FULLSTACK-DESIGN.md:96:Core v0 full (all-distributed) +79.6%; **full-stack gain +49.5% [95% CI +48.8, +50.1]**. Layer main effects:
audits/2026-07-12-e5-remodel\E9-FULLSTACK-DESIGN.md:168:Codex round-1: skeleton sound; planning layer NOT publication-ready (the standalone +3.2/+7.1 were one-at-a-time
scripts/simulation/e4-v5\scenarios.mjs:2:// scenario-configs.mjs). Each is a full config; we report m ± 95% CI. PRO-CENTRAL = declared central-favourable
scripts/simulation/e4-v5\scenarios.mjs:17:  safeLog(`${name.padEnd(16)} m = ${pct(r.m_hat).padStart(8)}  95% CI(MC) [${pct(r.ci[0])}, ${pct(r.ci[1])}]   Core v0 ${pct(r.dOverO)} · central ${pct(r.cOverO)}   π_deg ${(100 * r.pi_deg).toFixed(0)}%`);
audits/2026-07-12-e5-remodel\E5-DELIVERY-DESIGN.md:64:  opaque) / +51.4% (at verified). **Interaction +9.4%** (positive). **Full architecture (A2 − S) +59.1% [95% CI
audits/2026-07-12-e5-remodel\E5-DELIVERY-DESIGN.md:164:**PUBLICATION-READY: YES after a bounded pass**, now applied (commit 84332e1): validation genuinely fail-closed
audits/2026-07-12-e5-remodel\E5-DELIVERY-DESIGN.md:173:**Status (post friendly rounds): CODE/TEST-READY.** (Downgraded from "publication-ready" per Adversarial R1: the
audits/2026-07-12-e5-remodel\E5-DELIVERY-DESIGN.md:175:reference not a field estimate, the intervals are conditional-MC only, and the robustness sweep is conditional on
audits/2026-07-12-e5-remodel\CODEX-E9-FRIENDLY2-VERDICT.md:51:**NOT YET.** The factorial/Shapley redesign is correct and publication-worthy in architecture. The current planning interpretation is not yet publication-ready because the declared association sweep changes dispersion, the final-context sign flip is materially confounded by unspent budget, and the greedy reference is still inconsistently described as an upper bound.
scripts/simulation/e4-v5\evidence.mjs:4:// distort the sign fraction). It reports: the PROBABLE headline point m ± 95% CI, and across the plausible envelope
scripts/simulation/e4-v5\evidence.mjs:126:    `  PROBABLE scenario (source-motivated declared reference) headline: m = ${P(out.m_hat)}  95% CI [${P(out.ci[0])}, ${P(out.ci[1])}]   Core v0 ${P(pt.dOverO)} of oracle · central ${P(pt.cOverO)}`,
audits/2026-07-12-e5-remodel\CODEX-E9-FRIENDLY-VERDICT.md:83:The full-stack architecture is sound enough to continue, and its E5 reduction, matched randomization, delivery reuse, and ratio-of-sums bookkeeping are strong. The planning implementation and interpretation are **not yet publication-ready**.
scripts/simulation/e4-v5\e9-fullstack.mjs:281:    safeLog(`FULL-STACK gain (Core v0 − status quo): ${pct(r.fullStackGain)}  95% conditional-MC CI ${civ(r.fullStackCI)}\n`);
audits/2026-07-12-e5-remodel\CODEX-E5-FRIENDLY2-VERDICT.md:26:After that bounded pass, the panel would support a plain **PUBLICATION-READY: YES**.
audits/2026-07-12-e5-remodel\CODEX-E5-FRIENDLY2-VERDICT.md:31:The core simulation result is credible and reproducible, but the package is **NOT YET publication-ready**. It needs one bounded hardening/reporting pass—not a model redesign.
audits/2026-07-12-e5-remodel\CODEX-E5-FRIENDLY2-VERDICT.md:95:After that bounded pass, the panel would support a plain **PUBLICATION-READY: YES**.
scripts/simulation/e4-v5\e9-fullstack-test.mjs:62:  check('every reported quantity carries a 95% CI', Array.isArray(r.attributionCI.planning) && Array.isArray(r.planningCI.distributed) && Array.isArray(r.fullStackCI));
audits/2026-07-12-e5-remodel\ADVERSARIAL-R1-ADJUDICATION.md:29:| + | "publication-ready" premature | **JUSTIFIED** | Downgrade to "code/test ready; empirical interpretation pending calibration/model-form review." |
audits/2026-07-12-e5-remodel\ADVERSARIAL-R1-VERDICT.md:54:   supports. Is "+59%%" oversold? Is "publication-ready" premature? Is the Chile example creeping toward a conclusion?
audits/2026-07-12-e5-remodel\ADVERSARIAL-R1-VERDICT.md:291:  ok   every reported quantity carries a 95% CI
audits/2026-07-12-e5-remodel\ADVERSARIAL-R1-VERDICT.md:318:FULL-STACK gain (Core v0 − status quo): +48.4%  95% CI [+47.8%, +49.0%]
audits/2026-07-12-e5-remodel\ADVERSARIAL-R1-VERDICT.md:320:SHAPLEY attribution of the full-stack gain to each layer (sums exactly to the gain) with 95% CIs:
audits/2026-07-12-e5-remodel\ADVERSARIAL-R1-VERDICT.md:446:  FULL architecture (A2 − S): +59.1%  95% CI [+58.5%, +59.7%]
audits/2026-07-12-e5-remodel\ADVERSARIAL-R1-VERDICT.md:462:R=0 robustness (no reputational stake): verified delivery +94.4%, verified diversion incidence +5.5%, full +58.6% 95% CI [+57.9%, +59.2%] — the gain survives without the (unanchored) reputation term.
audits/2026-07-12-e5-remodel\ADVERSARIAL-R1-VERDICT.md:1328: 311:     safeLog(`  FULL architecture (A2 − S): ${pct(r.full)}  95% CI ${civ(r.fullCI)}\n`);
audits/2026-07-12-e5-remodel\ADVERSARIAL-R1-VERDICT.md:1352: 335:     safeLog(`R=0 robustness (no reputational stake): verified delivery ${pct(r0.delivery.centralVerified)}, verified diversion incidence ${pct(r0.diversionIncidence.A1)}, full ${pct(r0.full)} 95% CI [${pct(r0.fullCI[0])}, ${pct(r0.fullCI[1])}] — the gain survives without the (unanchored) reputation term.\n`);
audits/2026-07-12-e5-remodel\ADVERSARIAL-R1-VERDICT.md:1573:  64:   opaque) / +51.4% (at verified). **Interaction +9.4%** (positive). **Full architecture (A2 − S) +59.1% [95% CI
audits/2026-07-12-e5-remodel\ADVERSARIAL-R1-VERDICT.md:1673: 164: **PUBLICATION-READY: YES after a bounded pass**, now applied (commit 84332e1): validation genuinely fail-closed
audits/2026-07-12-e5-remodel\ADVERSARIAL-R1-VERDICT.md:1682: 173: **Status: E5 is PUBLICATION-READY.**
audits/2026-07-12-e5-remodel\ADVERSARIAL-R1-VERDICT.md:1977: 279:     safeLog(`FULL-STACK gain (Core v0 − status quo): ${pct(r.fullStackGain)}  95% CI ${civ(r.fullStackCI)}\n`);
audits/2026-07-12-e5-remodel\ADVERSARIAL-R1-VERDICT.md:1978: 280:     safeLog('SHAPLEY attribution of the full-stack gain to each layer (sums exactly to the gain) with 95% CIs:');
audits/2026-07-12-e5-remodel\ADVERSARIAL-R1-VERDICT.md:2092:  62:   check('every reported quantity carries a 95% CI', Array.isArray(r.attributionCI.planning) && Array.isArray(r.planningCI.distributed) && Array.isArray(r.fullStackCI));
audits/2026-07-12-e5-remodel\ADVERSARIAL-R1-VERDICT.md:2199:  76: Build only after E5 is publication-ready. Then: contract/params → engine stage → tests (reduces-to-E5/E4) → friendly
audits/2026-07-12-e5-remodel\ADVERSARIAL-R1-VERDICT.md:2219:  96: Core v0 full (all-distributed) +79.6%; **full-stack gain +49.5% [95% CI +48.8, +50.1]**. Layer main effects:
audits/2026-07-12-e5-remodel\ADVERSARIAL-R1-VERDICT.md:2293: 170: Codex round-1: skeleton sound; planning layer NOT publication-ready (the standalone +3.2/+7.1 were one-at-a-time
audits/2026-07-12-e5-remodel\ADVERSARIAL-R1-VERDICT.md:2686:   2: // scenario-configs.mjs). Each is a full config; we report m ± 95% CI. PRO-CENTRAL = declared central-favourable
audits/2026-07-12-e5-remodel\ADVERSARIAL-R1-VERDICT.md:2701:  17:   safeLog(`${name.padEnd(16)} m = ${pct(r.m_hat).padStart(8)}  95% CI(MC) [${pct(r.ci[0])}, ${pct(r.ci[1])}]   Core v0 ${pct(r.dOverO)} · central ${pct(r.cOverO)}   π_deg ${(100 * r.pi_deg).toFixed(0)}%`);
audits/2026-07-12-e5-remodel\ADVERSARIAL-R1-VERDICT.md:2956:"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n -i "publication-ready|robust|anchor|conservative|dominant|identified|not a conclusion|illustrative|widen|narrow|no overlap|no double|guaranteed optimum|upper bound|exact" audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md scripts/simulation/e4-v5/e5-delivery.mjs scripts/simulation/e4-v5/e9-fullstack.mjs scripts/simulation/e4-v5/e10-costs.mjs' in C:\devel\claude-projects\distributed-governance-research
audits/2026-07-12-e5-remodel\ADVERSARIAL-R1-VERDICT.md:2972:scripts/simulation/e4-v5/e9-fullstack.mjs:280:    safeLog('SHAPLEY attribution of the full-stack gain to each layer (sums exactly to the gain) with 95% CIs:');
audits/2026-07-12-e5-remodel\ADVERSARIAL-R1-VERDICT.md:3014:scripts/simulation/e4-v5/e5-delivery.mjs:335:    safeLog(`R=0 robustness (no reputational stake): verified delivery ${pct(r0.delivery.centralVerified)}, verified diversion incidence ${pct(r0.diversionIncidence.A1)}, full ${pct(r0.full)} 95% CI [${pct(r0.fullCI[0])}, ${pct(r0.fullCI[1])}] — the gain survives without the (unanchored) reputation term.\n`);
audits/2026-07-12-e5-remodel\ADVERSARIAL-R1-VERDICT.md:3023:audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:76:Build only after E5 is publication-ready. Then: contract/params → engine stage → tests (reduces-to-E5/E4) → friendly
audits/2026-07-12-e5-remodel\ADVERSARIAL-R1-VERDICT.md:3048:audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:170:Codex round-1: skeleton sound; planning layer NOT publication-ready (the standalone +3.2/+7.1 were one-at-a-time
audits/2026-07-12-e5-remodel\ADVERSARIAL-R1-VERDICT.md:3128:audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:164:**PUBLICATION-READY: YES after a bounded pass**, now applied (commit 84332e1): validation genuinely fail-closed
audits/2026-07-12-e5-remodel\ADVERSARIAL-R1-VERDICT.md:3129:audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:173:**Status: E5 is PUBLICATION-READY.**
scripts/simulation/e4-v5\e5-delivery.mjs:316:    safeLog('Main effects (pp of the oracle reference) with 95% CONDITIONAL Monte-Carlo intervals (inner simulation');
scripts/simulation/e4-v5\e5-delivery.mjs:321:    safeLog(`  FULL architecture (A2 − S): ${pct(r.full)}  95% conditional-MC CI ${civ(r.fullCI)}\n`);
scripts/simulation/e4-v5\e5-delivery.mjs:345:    safeLog(`R=0 robustness (no reputational stake): verified delivery ${pct(r0.delivery.centralVerified)}, verified diversion incidence ${pct(r0.diversionIncidence.A1)}, full ${pct(r0.full)} 95% CI [${pct(r0.fullCI[0])}, ${pct(r0.fullCI[1])}] — the gain survives without the (unanchored) reputation term.\n`);

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "node --input-type=module -e \"import {e10,COSTS} from './scripts/simulation/e4-v5/e10-costs.mjs'; import {delivered2x2} from './scripts/simulation/e4-v5/e5-delivery.mjs'; import {baseConfig} from './scripts/simulation/e4-v5/contract.mjs'; import * as SC from './scripts/simulation/e4-v5/scenario-configs.mjs'; const run=(name)=>{const cfg={...baseConfig(),...SC.SCENARIO_WORLD,...SC[name]}; const n=500; const r=e10(cfg,{nWorlds:n}); const full=delivered2x2(cfg,{nWorlds:n}); const c=delivered2x2({...cfg,phi:cfg.phi*(1-COSTS.kappa_C)},{nWorlds:n}); const d=delivered2x2({...cfg,phi:cfg.phi*(1-COSTS.kappa_D)},{nWorlds:n}); const manualC=c.cells.S*c.sumO/full.sumO; const manualD=d.cells.A2*d.sumO/full.sumO; console.log(JSON.stringify({name,phi:cfg.phi,kC:r.kappa_C,kD:r.kappa_D,valueOnly:r.valueOnly,withCosts:r.withCosts,contribution:r.adminCostContribution,manual:{C:manualC,D:manualD},deltas:{C:r.withCosts.statusQuo-r.valueOnly.statusQuo,D:r.withCosts.coreV0-r.valueOnly.coreV0}}));}; run('PROBABLE'); run('PRO_DIST');\"" in C:\devel\claude-projects\distributed-governance-research
 succeeded in 20257ms:
{"name":"PROBABLE","phi":0.35,"kC":0.08,"kD":0.05,"valueOnly":{"statusQuo":0.34297122318453943,"coreV0":0.9308123669824078,"gain":0.5878411437978683},"withCosts":{"statusQuo":0.3377179706975127,"coreV0":0.9165361419493925,"gain":0.5788181712518798},"contribution":-0.009022972545988495,"manual":{"C":0.3377179706975127,"D":0.9165361419493925},"deltas":{"C":-0.005253252487026738,"D":-0.014276225033015288}}
{"name":"PRO_DIST","phi":0.35,"kC":0.08,"kD":0.05,"valueOnly":{"statusQuo":-0.8486811223316507,"coreV0":0.9066623461379393,"gain":1.75534346846959},"withCosts":{"statusQuo":-0.7905882832184966,"coreV0":0.9108336254925669,"gain":1.7014219087110636},"contribution":-0.05392155975852653,"manual":{"C":-0.7905882832184966,"D":0.9108336254925669},"deltas":{"C":0.058092839113154104,"D":0.004171279354627577}}

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n -i "o_min|degener|tested point|tested reduction|reduces.*E4|E4.*exact|exact.*E4" -- scripts/simulation/e4-v5/e5-delivery.mjs scripts/simulation/e4-v5/e5-delivery-test.mjs audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md audits/2026-07-12-e5-remodel/ADVERSARIAL-R1-ADJUDICATION.md' in C:\devel\claude-projects\distributed-governance-research
 succeeded in 167ms:
audits/2026-07-12-e5-remodel/ADVERSARIAL-R1-ADJUDICATION.md:21:| 11 | [E5] general E4 reduction false (retention differs) | **DEFEND + note** | Exact at tested points (1e-9). Edge: E5 doesn't replicate E4's o_min degeneracy filtering, so degenerate corners differ. Note as limitation; the tested reduction stands. |
audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:58:- Selection efficiency (perfect delivery) = **the E4 numbers**: central +44.1%, distributed +98.2% (**exact** now —
audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:153:PRNG streams (E5 reduces to E4 exactly); reframed opaque as the Olken value-loss moment (pi_hon 0.78); report diversion
scripts/simulation/e4-v5/e5-delivery-test.mjs:15:// 1) PERFECT DELIVERY reduces E5 to E4 selection: both regimes deliver 1.0 (pi_hon=1, loss=0) => every cell equals its
scripts/simulation/e4-v5/e5-delivery-test.mjs:31:  // EXACT cross-check: with executors on a SEPARATE PRNG stream, E5's world stream is identical to the E4 estimand's,
scripts/simulation/e4-v5/e5-delivery-test.mjs:33:  check('perfect delivery: selection efficiencies == E4 D/O, C/O (exact)', approx(r.selection.distributed, e4.dOverO, 1e-9) && approx(r.selection.central, e4.cOverO, 1e-9), `D ${r.selection.distributed} vs ${e4.dOverO}; C ${r.selection.central} vs ${e4.cOverO}`);
scripts/simulation/e4-v5/e5-delivery.mjs:116:// so E5 reduces to E4 EXACTLY on the same seed. Evaluate the oracle (perfect delivery) and the four cells.
scripts/simulation/e4-v5/e5-delivery.mjs:146:// executors use SEPARATE PRNG streams, so the world stream is identical to the E4 estimand's (exact reduction). Also
scripts/simulation/e4-v5/e5-delivery.mjs:151:  const execRng = makeRng((seed ^ 0x5bd1e995) >>> 0);      // separate stream ⇒ worlds match the E4 estimand exactly

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "node --input-type=module -e \"import {delivered2x2} from './scripts/simulation/e4-v5/e5-delivery.mjs'; import {estimand} from './scripts/simulation/e4-v5/engine.mjs'; import {baseConfig} from './scripts/simulation/e4-v5/contract.mjs'; const perfect={pi_hon:1,loss_hon:0,opaque:{p_det:0,a:0,r:0,rep:0},verified:{p_det:0,a:0,r:0,rep:0}}; for (const q of [{K:20,N:100,m_q:-.5,h:.1,phi:.2},{K:20,N:100,m_q:-1,h:.1,phi:.2},{K:30,N:100,m_q:-.5,h:.5,phi:.2},{K:20,N:100,m_q:0,h:.5,phi:.1}]){const cfg={...baseConfig(),...q}; const e5=delivered2x2(cfg,{nWorlds:500,delivery:perfect}); const e4=estimand(cfg,{nWorlds:500}); console.log(JSON.stringify({q,nE5:e5.n,nE4:e4.n_kept,pi_deg:e4.pi_deg,e5D:e5.selection.distributed,e4D:e4.dOverO,diffD:e5.selection.distributed-e4.dOverO,e5C:e5.selection.central,e4C:e4.cOverO,diffC:e5.selection.central-e4.cOverO}));}\"" in C:\devel\claude-projects\distributed-governance-research
 succeeded in 294ms:
{"q":{"K":20,"N":100,"m_q":-0.5,"h":0.1,"phi":0.2},"nE5":468,"nE4":468,"pi_deg":0.064,"e5D":0.3970344390156865,"e4D":0.3970344390156865,"diffD":0,"e5C":-0.9928208293216443,"e4C":-0.9928208293216443,"diffC":0}
{"q":{"K":20,"N":100,"m_q":-1,"h":0.1,"phi":0.2},"nE5":366,"nE4":366,"pi_deg":0.268,"e5D":0.24784940361567057,"e4D":0.24784940361567057,"diffD":0,"e5C":-3.221617933320087,"e4C":-3.221617933320087,"diffC":0}
{"q":{"K":30,"N":100,"m_q":-0.5,"h":0.5,"phi":0.2},"nE5":272,"nE4":272,"pi_deg":0.456,"e5D":0.7647692875226051,"e4D":0.7647692875226051,"diffD":0,"e5C":-0.42526065291331266,"e4C":-0.42526065291331266,"diffC":0}
{"q":{"K":20,"N":100,"m_q":0,"h":0.5,"phi":0.1},"nE5":376,"nE4":376,"pi_deg":0.248,"e5D":0.6766338696350271,"e4D":0.6766338696350271,"diffD":0,"e5C":0.4110983217671732,"e4C":0.4110983217671732,"diffC":0}

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "node --input-type=module -e \"import {delivered2x2} from './scripts/simulation/e4-v5/e5-delivery.mjs'; import {estimand} from './scripts/simulation/e4-v5/engine.mjs'; import {baseConfig} from './scripts/simulation/e4-v5/contract.mjs'; const perfect={pi_hon:1,loss_hon:0,opaque:{p_det:0,a:0,r:0,rep:0},verified:{p_det:0,a:0,r:0,rep:0}}; for (const m of [-1,-1.5,-2,-2.5]) for(const K of [20,50]){const cfg={...baseConfig(),K,N:100,m_q:m,h:0,phi:.05}; const e5=delivered2x2(cfg,{nWorlds:1000,delivery:perfect}); const e4=estimand(cfg,{nWorlds:1000}); if(e5.n"'!==e4.n_kept || Math.abs(e5.selection.distributed-e4.dOverO)>1e-12) console.log(JSON.stringify({m,K,nE5:e5.n,nE4:e4.n_kept,pi:e4.pi_deg,o:e4.o_min,d:e5.selection.distributed-e4.dOverO,c:e5.selection.central-e4.cOverO}));}"' in C:\devel\claude-projects\distributed-governance-research
 succeeded in 717ms:
{"m":-1,"K":20,"nE5":643,"nE4":636,"pi":0.364,"o":0.013013299833881747,"d":-0.008070042840438219,"c":-0.03724473537235107}
{"m":-1,"K":50,"nE5":996,"nE4":991,"pi":0.009,"o":0.08985850238015931,"d":-0.00531946429115665,"c":-0.013386861926814264}
{"m":-1.5,"K":50,"nE5":911,"nE4":889,"pi":0.111,"o":0.037880764170215075,"d":-0.03230241801368805,"c":-0.15689048619133938}
{"m":-2,"K":50,"nE5":592,"nE4":584,"pi":0.416,"o":0.005643714387944489,"d":-0.04244851218658785,"c":-0.190145395397332}

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'git diff --no-ext-diff 5733c2e..HEAD -- scripts/simulation/e4-v5/e5-delivery.mjs scripts/simulation/e4-v5/e5-delivery-test.mjs scripts/simulation/e4-v5/e9-fullstack.mjs scripts/simulation/e4-v5/e9-fullstack-test.mjs scripts/simulation/e4-v5/e10-costs.mjs scripts/simulation/e4-v5/e10-costs-test.mjs scripts/simulation/e4-v5/adapter.mjs audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md' in C:\devel\claude-projects\distributed-governance-research
 succeeded in 174ms:
diff --git a/audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md b/audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md
index 76b9f09..586feb3 100644
--- a/audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md
+++ b/audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md
@@ -170,7 +170,10 @@ not executor share; severe sweep row = declared stress ~69% loss, not the Uganda
 the guarantee→`gamma` mapping, the `p_det/a/r` decomposition, `mon_detect`/recovery mappings, `val_risk`, `U(0,1)`
 temptation, `c ⟂ S`, uniform-independent LHS weighting.
 
-**Status: E5 is PUBLICATION-READY.**
+**Status (post friendly rounds): CODE/TEST-READY.** (Downgraded from "publication-ready" per Adversarial R1: the
+empirical interpretation is still pending model-form + calibration review — the calibration is an identified-set
+reference not a field estimate, the intervals are conditional-MC only, and the robustness sweep is conditional on
+PROBABLE. The mechanism and the PROBABLE arithmetic are sound; the empirical claim is not yet fully identified.)
 
 ## Next
 
diff --git a/audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md b/audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md
index 01b4f38..248760d 100644
--- a/audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md
+++ b/audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md
@@ -102,7 +102,8 @@ effect size depends on how strongly categories are stratified on the dimension t
 tested + anchored in E9's friendly Codex round (do not gerrymander it up).
 
 **Tests (11/11):** nCat=1 reduces to E5 (status-quo cell == E5 S, Core-v0 cell == E5 A2, planning effect ~0); planning
-effect positive; hard exclusion widens it; Core v0 > status quo; no cell exceeds the oracle; all three layer effects
+effect positive; hard exclusion widens it; Core v0 > status quo; cells are in a sane range (the oracle is a greedy
+REFERENCE, NOT an upper bound — cells MAY exceed it, so this is a regression check, not an invariant); all three layer effects
 positive; selection dominant; fail-closed delivery validation reused.
 
 **Open for the friendly round:** is the visibility-stratified category construction the right/most-defensible one, or
@@ -151,19 +152,16 @@ same mechanism is documented separately (Keefer & Khemani 2005, *WB Research Obs
 broad public goods like preventive health"; Ban, Jha & Rao on India's "asphalt over sewers"), but without a cleanly
 verified single budget-share number — so we cite it as mechanism, not calibration.
 
-**Illustrative severity: 1 function off the menu** (mental health at ~2% vs the OECD 6.7% benchmark). Plugged into E9 on
-the anchored params:
-
-| illustrative severity | planning Shapley (strict) | planning Shapley (recycled) | planning\|distributed-sel (recycled) |
-|---|---|---|---|
-| **1** (mental health at the floor) | +2.2% [+1.8,+2.5] | **+3.9% [+3.6,+4.2]** | +1.0% |
-
-**Honest caveats:** (a) a small share alone is not proof of capture, but here the need benchmark (OECD 6.7%, #1 disability
-cause, 20% coverage) makes the under-provision a documented gap, not efficiency; (b) the mechanism is visibility/salience
-bias, which IS the model's mechanism, though not the clientelist sub-case; (c) I could not verify a credible SECOND
-starved function this pass, so severity stays at 1 (not inflated). → The anchored HEADLINE still reports NO planning
-figure (agendaCapture=0); this is a labelled illustrative example showing the mechanism concretely for one real budget
-(~+2–4% of the reference at one function off the menu).
+**QUALITATIVE only — NO numeric mapping (Adversarial R1 #17).** The adversary correctly flagged a **taxonomic
+mismatch**: mental health is a *funded health SUBfunction*, not a zero-funded TOP-LEVEL COFOG function, so mapping it to
+`agendaCapture=1` (a whole function off the menu) and reporting a simulated "+2–4pp" would over-transport. **We therefore
+do NOT attach a simulated planning number to the Chile example.** It stands as a **qualitative illustration** that the
+model's visibility-bias mechanism has a real footprint: a high-need (Chile's #1 disability cause, ~20% treatment
+coverage), low-visibility function chronically under-provided (~2% of the health budget vs the OECD 6.7% average),
+documented as "una deuda pendiente." A quantitative version would require a **partial-share sub-function model** matched
+to the COFOG taxonomy — future work. Honest caveats: the mechanism is visibility/salience bias (the model's mechanism),
+not documented clientelist vote-buying; and a small share alone is not proof of capture — the need benchmark makes it a
+documented gap here, but the illustration is directional, not a calibration.
 
 ## Planning REDESIGN v2 (Codex round-1 + author decision, commit 301d7cc)
 
diff --git a/scripts/simulation/e4-v5/adapter.mjs b/scripts/simulation/e4-v5/adapter.mjs
index 2719b01..ff8e361 100644
--- a/scripts/simulation/e4-v5/adapter.mjs
+++ b/scripts/simulation/e4-v5/adapter.mjs
@@ -19,6 +19,7 @@ const MULT_SUFFIX = /\d\s*x/i;                 // a number followed by x (after
 const NUM_FOLD    = new RegExp(`(\\d(\\.\\d+)?|\\b(${NUMWORD}))[\\s-]*(fold|times)\\b`, 'i');   // "2.2-fold","two times","fourfold"
 const WORD_MULT   = /\b(twice|thrice|double|triple|quadruple)\b/i;   // bare word multipliers
 const RATIO_TOKEN = /\b[dc]\s*\/\s*[cd]\b/i;   // D/C or C/D, any case
+const RATIO_PHRASE = /\b(value|performance|institution\w*)\s+ratio\b|\bratio\s*\(?~?\s*\d/i;  // "value ratio (~2.7)" semantic multiplier (Adversarial R1 #4/#5)
 
 // NOTE: this rejects the TESTED token classes (ASCII/Unicode/confusable/HTML-entity 'x' after a number;
 // numeric or number-word N-fold / N-times; bare twice/double/triple/quadruple; D/C or C/D any case; zero-width
@@ -30,6 +31,7 @@ export function assertNoEmbargoedTokens(text) {
   if (NUM_FOLD.test(norm)) hits.push('N-fold / N-times multiplier phrasing (numeric or word)');
   if (WORD_MULT.test(norm)) hits.push('word multiplier (twice/thrice/double/triple/quadruple)');
   if (RATIO_TOKEN.test(norm)) hits.push('institution ratio (D/C or C/D, any case)');
+  if (RATIO_PHRASE.test(norm)) hits.push('semantic performance-ratio phrasing (value/performance ratio, ratio(~N))');
   for (const tok of EMBARGO_TOKENS) if (text.includes(tok)) hits.push(`token '${tok}'`);
   if (hits.length) throw new Error(`[embargo] rendered text contains forbidden performance notation: ${hits.join(', ')}`);
   return true;
diff --git a/scripts/simulation/e4-v5/e10-costs-test.mjs b/scripts/simulation/e4-v5/e10-costs-test.mjs
index 3ee4e08..bf61403 100644
--- a/scripts/simulation/e4-v5/e10-costs-test.mjs
+++ b/scripts/simulation/e4-v5/e10-costs-test.mjs
@@ -33,22 +33,23 @@ const NW = 800;
   check('planning on switches the value base to E9', r.planningOn === true && r.via.startsWith('E9'));
 }
 
-// 4) The κ haircut is applied per arm exactly: V_arm = valueOnly_arm · (1 − κ_arm).
+// 4) NET-BUDGET accounting: the value loss from admin cost is SUB-proportional to κ (greedy cuts marginal low-value
+//    projects first), so the arm's value at net budget is ABOVE the naive value·(1−κ) haircut.
 {
   const r = e10(cfg, { nWorlds: NW });
-  check('central value haircut = (1 − κ_C)', approx(r.withCosts.statusQuo, r.valueOnly.statusQuo * (1 - r.kappa_C), 1e-12));
-  check('Core v0 value haircut = (1 − κ_D)', approx(r.withCosts.coreV0, r.valueOnly.coreV0 * (1 - r.kappa_D), 1e-12));
+  check('central net-budget value ≥ naive haircut (sub-proportional)', r.withCosts.statusQuo >= r.valueOnly.statusQuo * (1 - r.kappa_C) - 1e-9, `${r.withCosts.statusQuo} vs ${r.valueOnly.statusQuo * (1 - r.kappa_C)}`);
+  check('Core v0 net-budget value ≥ naive haircut (sub-proportional)', r.withCosts.coreV0 >= r.valueOnly.coreV0 * (1 - r.kappa_D) - 1e-9);
+  check('costs reduce each arm below its full-budget value', r.withCosts.statusQuo < r.valueOnly.statusQuo && r.withCosts.coreV0 < r.valueOnly.coreV0);
 }
 
-// 5) COST DIRECTION: with a κ_C/κ_D ratio above the value ratio, admin costs WIDEN the gap; below it, they narrow it
-//    (an honest subtlety — Core v0 delivers more, so a proportional cost removes more absolute value from its base).
+// 5) COST DIRECTION under net-budget accounting: the admin-cost effect on the gap is SMALL at the anchored κ and grows
+//    (turns clearly positive) only at large κ_C. Monotone in κ_C.
 {
-  const valueRatio = (() => { const v = e10(cfg, { nWorlds: NW }).valueOnly; return v.coreV0 / v.statusQuo; })();
-  const wide = e10(cfg, { nWorlds: NW, costs: { ...COSTS, kappa_C: 0.30, kappa_D: 0.05 } }); // ratio 6 > valueRatio
-  const narrow = e10(cfg, { nWorlds: NW, costs: { ...COSTS, kappa_C: 0.06, kappa_D: 0.05 } }); // ratio ~1.2 < valueRatio
-  check('high κ_C/κ_D ratio widens the gap', wide.adminCostContribution > 0, `contrib ${wide.adminCostContribution}`);
-  check('low κ_C/κ_D ratio narrows the gap', narrow.adminCostContribution < 0, `contrib ${narrow.adminCostContribution}`);
-  check('the crossover is at κ_C/κ_D ≈ the value ratio', valueRatio > 2 && valueRatio < 4, `valueRatio ${valueRatio}`);
+  const base  = e10(cfg, { nWorlds: NW });
+  const large = e10(cfg, { nWorlds: NW, costs: { ...COSTS, kappa_C: 0.30 } });
+  check('admin-cost effect is small at the anchored κ (|·| < 3pp)', Math.abs(base.adminCostContribution) < 0.03, `contrib ${base.adminCostContribution}`);
+  check('a much larger κ_C makes the admin-cost effect more positive', large.adminCostContribution > base.adminCostContribution);
+  check('the core value advantage survives the cost layer (with-costs gain > 0.4)', base.withCosts.gain > 0.4, `gain ${base.withCosts.gain}`);
 }
 
 console.log(`\nE10 costs: ${pass} passed, ${fail} failed.`);
diff --git a/scripts/simulation/e4-v5/e10-costs.mjs b/scripts/simulation/e4-v5/e10-costs.mjs
index 0d37bba..9b3ae97 100644
--- a/scripts/simulation/e4-v5/e10-costs.mjs
+++ b/scripts/simulation/e4-v5/e10-costs.mjs
@@ -9,13 +9,13 @@
 //     result. Planning OFF ⇒ the value base is E5 (selection × delivery). Planning ON ⇒ the value base is E9.
 //   • COSTS are switchable OFF (κ_C = κ_D = 0 ⇒ E10 reduces to the value stack).
 //
-//   V_arm / O = (delivered value_arm / O) · (1 − κ_arm)      [κ = admin/machinery cost share; base κ_D < κ_C]
-//   m10 = V_D/O − V_C/O
+//   Admin cost reduces the BUDGET (net-budget accounting): each arm funds at (1−κ_arm)·budget, and its delivered value
+//   is taken as a fraction of the COMMON full-budget oracle. m10 = V_D − V_C. (Adversarial R1: an earlier version
+//   applied κ as a haircut on delivered VALUE, which over-stated the effect — greedy funding cuts the marginal
+//   low-value projects first, so the value loss is sub-proportional to κ.)
 //
-// κ_C, κ_D are set with DIRECTION anchored and MAGNITUDE declared-and-conservative (κ_C=0.15 central machinery Core v0
-// eliminates, informed by IDB *Better Spending for Better Lives* 2018 + ~10–20% program admin overhead; κ_D=0.03 Core v0
-// platform/AI, informed by low e-government/e-procurement operating costs). Not a transported point calibration.
-// Run: npm run e10:costs
+// κ is the ADMINISTRATIVE MACHINERY cost only, DE-OVERLAPPED from E5 delivery leakage and charged SYMMETRICALLY (Core
+// v0's own control machinery is costed, not free). Magnitudes DECLARED (see COSTS). Run: npm run e10:costs
 
 import { delivered2x2, DELIVERY } from './e5-delivery.mjs';
 import { fullStack, PLANNING } from './e9-fullstack.mjs';
@@ -23,43 +23,53 @@ import { baseConfig, NUM } from './contract.mjs';
 import { safeLog } from './adapter.mjs';
 
 export const COSTS = {
-  // DIRECTION robustly anchored (verified sources), POINT magnitude DECLARED-and-conservative (author-set 2026-07-13).
-  kappa_C:    0.15,   // central admin/machinery cost share Core v0 ELIMINATES (value-proxy studies, allocation,
-                      //     prioritization, AI-fiscalization machinery, delivery mgmt, licenses, travel). ANCHOR: IDB
-                      //     *Better Spending for Better Lives* 2018 — LAC public-spending waste = 4.4% of GDP ≈ **16% of
-                      //     government expenditure** (procurement + payroll + transfers). 0.15 is a round-down of that
-                      //     16%; band 0.10–0.16. (Narrow pure-admin overhead is 1–10% — CBPP/SSA/CBO — a lower floor,
-                      //     since κ_C is broader.) The exact point is DECLARED (no source maps "waste"→"budget share removed").
-  kappa_D:    0.03,   // Core v0's OWN operating cost (platform + AI). ANCHOR: verified e-procurement platform run-costs
-                      //     are an ORDER OF MAGNITUDE below this (~0.005–1% of spend managed — JBCA 2023 e-GP CBA; KONEPS;
-                      //     GeM; ProZorro), so 0.03 deliberately OVER-charges the platform = conservative ceiling (band
-                      //     0.005–0.03). base κ_D ≪ κ_C: verified central-machinery cost is ≥10–30× platform run cost,
-                      //     so the modeled ratio ~5 UNDERSTATES the structural gap. Magnitude DECLARED.
+  // Adversarial-round-1 corrections: κ is the ADMINISTRATIVE MACHINERY cost only, DE-OVERLAPPED from E5's delivery
+  // leakage (the IDB "16% of expenditure" waste bundles procurement/transfer LEAKAGE, which E5 already removes as
+  // non-delivery — using it here double-counted). And costs are charged SYMMETRICALLY: Core v0's own control machinery
+  // (the evidence/verification/recovery layer that earns E5's verified-delivery benefit) is costed, not free.
+  kappa_C:    0.08,   // central allocation / prioritization / value-proxy-study / delivery-management machinery Core v0
+                      //     replaces. Anchor: pure administrative OVERHEAD band 1–10% (CBPP; SSA <1%; CBO 0.3–2.8%),
+                      //     upper part since κ_C is broadly scoped. NOT the IDB waste figure (that overlaps E5 leakage).
+                      //     Magnitude DECLARED.
+  kappa_D:    0.05,   // Core v0's OWN operating cost = digital platform + AI (low, e-GP run-costs <1% of spend — JBCA
+                      //     2023, KONEPS, GeM, ProZorro) PLUS its verification/audit/recovery/reputation control
+                      //     machinery (symmetric charge for the controls that produce the E5 verified benefit). base
+                      //     κ_D < κ_C but the margin is MODEST under symmetric accounting. Magnitude DECLARED.
   planningOn: false,  // author requirement: PLANNING OFF by default (its magnitude is deferred; do not fold into costs)
 };
 
-// The delivered-value base: E5 (selection × delivery) with planning OFF, or E9 (the full stack) with planning ON.
-// Status quo = central selection × opaque delivery; Core v0 = distributed selection × verified delivery.
-function valueBase(cfg, opts, costs, delivery, planning) {
+// Raw delivered value of one arm's cell at a NET budget (phi scaled by 1−κ), and the full-budget oracle sum, sharing the
+// same worlds/seed. Admin cost reduces the BUDGET (fewer projects funded), not the delivered value directly — because
+// the greedy funds highest-value projects first, cutting budget removes the MARGINAL (lowest-value) funded projects, so
+// the value loss is SUB-proportional to κ (Adversarial R1 #1/#13).
+function armValueNet(cfg, opts, costs, delivery, planning, arm, kappa) {
+  const cNet = { ...cfg, phi: cfg.phi * (1 - kappa) };
   if (costs.planningOn) {
-    const v = fullStack(cfg, { ...opts, delivery, planning });
-    return { statusQuo: v.statusQuo, coreV0: v.coreV0, via: 'E9 (planning ON)' };
+    const v = fullStack(cNet, { ...opts, delivery, planning });
+    return (arm === 'C' ? v.statusQuo : v.coreV0) * v.sumO;   // raw arm value at net budget
   }
-  const v = delivered2x2(cfg, { ...opts, delivery });
-  return { statusQuo: v.cells.S, coreV0: v.cells.A2, via: 'E5 (planning OFF)' };
+  const v = delivered2x2(cNet, { ...opts, delivery });
+  return (arm === 'C' ? v.cells.S : v.cells.A2) * v.sumO;
 }
 
 export function e10(cfg, { nWorlds = NUM.n_worlds.value, seed = NUM.seed.value, delivery = DELIVERY, planning = PLANNING, costs = COSTS } = {}) {
-  const base = valueBase(cfg, { nWorlds, seed }, costs, delivery, planning);
   const kC = costs.kappa_C, kD = costs.kappa_D;
-  const V_C = base.statusQuo * (1 - kC), V_D = base.coreV0 * (1 - kD);
-  const valueGain = base.coreV0 - base.statusQuo;
+  const via = costs.planningOn ? 'E9 (planning ON)' : 'E5 (planning OFF)';
+  // full-budget value base (both arms, for value-only) and its oracle — the COMMON normalizer.
+  const full = costs.planningOn ? fullStack(cfg, { nWorlds, seed, delivery, planning }) : delivered2x2(cfg, { nWorlds, seed, delivery });
+  const Ofull = full.sumO;
+  const sq = costs.planningOn ? full.statusQuo : full.cells.S;
+  const cv = costs.planningOn ? full.coreV0 : full.cells.A2;
+  // NET-budget delivered value of each arm, normalized by the COMMON full-budget oracle.
+  const V_C = armValueNet(cfg, { nWorlds, seed }, costs, delivery, planning, 'C', kC) / Ofull;
+  const V_D = armValueNet(cfg, { nWorlds, seed }, costs, delivery, planning, 'D', kD) / Ofull;
+  const valueGain = cv - sq;
   const costGain = V_D - V_C;
   return {
-    planningOn: costs.planningOn, via: base.via, kappa_C: kC, kappa_D: kD,
-    valueOnly: { statusQuo: base.statusQuo, coreV0: base.coreV0, gain: valueGain },
+    planningOn: costs.planningOn, via, kappa_C: kC, kappa_D: kD,
+    valueOnly: { statusQuo: sq, coreV0: cv, gain: valueGain },
     withCosts: { statusQuo: V_C, coreV0: V_D, gain: costGain },
-    adminCostContribution: costGain - valueGain,   // how much the admin-cost layer adds to the Core-v0 − status-quo gap
+    adminCostContribution: costGain - valueGain,   // net-budget admin-cost effect on the Core-v0 − status-quo gap
   };
 }
 
@@ -68,27 +78,29 @@ function main() {
   import('./scenario-configs.mjs').then(({ SCENARIO_WORLD: W, PROBABLE }) => {
     const cfg = { ...baseConfig(), ...W, ...PROBABLE };
     const r = e10(cfg, { nWorlds: 1200 });
-    safeLog('E10 — the COST layer on the delivered-value stack (PROBABLE world). Parity at the oracle reference.');
-    safeLog('PLANNING is OFF by default (its magnitude is deferred); COSTS are administrative/machinery (κ).\n');
-    safeLog(`value base: ${r.via}   ·   κ_C=${r.kappa_C} (central machinery) · κ_D=${r.kappa_D} (Core v0 platform)  [direction anchored, magnitude declared-conservative]`);
+    safeLog('E10 — the ADMINISTRATIVE-COST layer on the delivered-value stack (PROBABLE world). Percentages of the');
+    safeLog('full-information greedy REFERENCE. PLANNING is OFF by default; admin cost reduces the BUDGET (net-budget');
+    safeLog('accounting), charged SYMMETRICALLY across arms.\n');
+    safeLog(`value base: ${r.via}   ·   κ_C=${r.kappa_C} (central allocation/prioritization/study machinery) · κ_D=${r.kappa_D} (Core v0 platform + its control machinery)  [magnitude DECLARED]`);
     safeLog(`VALUE ONLY (costs off):   status quo ${pct(r.valueOnly.statusQuo)} · Core v0 ${pct(r.valueOnly.coreV0)}  → gain ${pct(r.valueOnly.gain)}`);
-    safeLog(`WITH ADMIN COSTS:         status quo ${pct(r.withCosts.statusQuo)} · Core v0 ${pct(r.withCosts.coreV0)}  → gain ${pct(r.withCosts.gain)}`);
-    safeLog(`  the admin-cost layer adds ${pct(r.adminCostContribution)} to the gap (the central's heavier machinery costs more).\n`);
+    safeLog(`WITH ADMIN COSTS (net budget): status quo ${pct(r.withCosts.statusQuo)} · Core v0 ${pct(r.withCosts.coreV0)}  → gain ${pct(r.withCosts.gain)}`);
+    safeLog(`  admin-cost effect on the gap: ${pct(r.adminCostContribution)} (points of the reference).\n`);
+    safeLog('  → Under symmetric net-budget accounting the admin-cost layer is roughly NEUTRAL (small, and can go either');
+    safeLog('    way): because greedy funding cuts marginal low-value projects first, the value loss is sub-proportional,');
+    safeLog('    and Core v0 delivers on a larger base. The Core v0 advantage comes from SELECTION and DELIVERY, NOT from');
+    safeLog('    an admin-cost saving. A decisive cost advantage would need κ_C ≫ κ_D beyond what symmetric accounting supports.\n');
 
-    // costs OFF reduces E10 to the value stack; planning ON uses E9 (folds in the deferred planning layer — NOT the headline).
     const off = e10(cfg, { nWorlds: 1200, costs: { ...COSTS, kappa_C: 0, kappa_D: 0 } });
     safeLog(`switch check — costs OFF (κ=0): with-costs gain ${pct(off.withCosts.gain)} == value-only gain ${pct(off.valueOnly.gain)} (reduces to the value stack).`);
 
-    // κ sensitivity (DECLARED until anchored): how the gap responds to the central's machinery cost.
-    safeLog('\nAdmin-cost sensitivity (κ_D=0.03 fixed; κ_C swept — magnitude declared, direction anchored):');
-    safeLog('   κ_C     with-costs gain     admin-cost contribution');
-    for (const kc of [0.05, 0.10, 0.15, 0.25]) {
+    safeLog('\nAdmin-cost sensitivity (κ_D=0.05 fixed; κ_C swept — magnitude DECLARED):');
+    safeLog('   κ_C     admin-cost effect on the gap (points of reference)');
+    for (const kc of [0.05, 0.08, 0.15, 0.30]) {
       const rk = e10(cfg, { nWorlds: 800, costs: { ...COSTS, kappa_C: kc } });
-      safeLog(`   ${kc.toFixed(2)}      ${pct(rk.withCosts.gain).padStart(7)}              ${pct(rk.adminCostContribution).padStart(7)}`);
+      safeLog(`   ${kc.toFixed(2)}      ${pct(rk.adminCostContribution).padStart(7)}`);
     }
-    safeLog('   → the central runs the value-proxy / allocation / prioritization / AI-fiscalization machinery Core v0');
-    safeLog('     eliminates, so κ_C > κ_D widens the gap once the ratio clears the value ratio (~2.7). Direction anchored');
-    safeLog('     (IDB Better Spending 2018; low e-government platform costs); point magnitudes declared-and-conservative.');
+    safeLog('   → the admin-cost effect is small and only turns clearly positive at large κ_C; magnitudes DECLARED,');
+    safeLog('     direction only (central allocation machinery cost > platform cost — IDB / low e-government platform costs).');
   });
 }
 import { fileURLToPath } from 'node:url';
diff --git a/scripts/simulation/e4-v5/e5-delivery-test.mjs b/scripts/simulation/e4-v5/e5-delivery-test.mjs
index 04e92c0..1894663 100644
--- a/scripts/simulation/e4-v5/e5-delivery-test.mjs
+++ b/scripts/simulation/e4-v5/e5-delivery-test.mjs
@@ -106,8 +106,8 @@ const NW = 1200;
 // 8) GLOBAL robustness: 20-seed replication is tight; the joint LHS sweep has coverage winning across the space.
 {
   const rep = replicateSeeds(cfg, { nSeeds: 8, nWorlds: 200 });
-  check('20-seed replication: between-seed sd is small', rep.sd < 0.03, `sd ${rep.sd}`);
-  check('20-seed replication: mean full gain is materially positive', rep.mean > 0.4, `mean ${rep.mean}`);
+  check('multi-seed replication (8 seeds): between-seed sd is small', rep.sd < 0.03, `sd ${rep.sd}`);
+  check('multi-seed replication: mean full gain is materially positive', rep.mean > 0.4, `mean ${rep.mean}`);
   const js = jointSweep(cfg, { nSamples: 24, nWorlds: 150 });
   check('joint LHS sweep: full architecture wins in the large majority of sampled draws', js.shareArchitectureWins > 0.9, `share ${js.shareArchitectureWins}`);
   check('joint LHS sweep: coverage/selection effect (A3−S) positive in the large majority', js.shareCoverageWins > 0.9, `share ${js.shareCoverageWins}`);
diff --git a/scripts/simulation/e4-v5/e5-delivery.mjs b/scripts/simulation/e4-v5/e5-delivery.mjs
index bd22c19..df7d1b5 100644
--- a/scripts/simulation/e4-v5/e5-delivery.mjs
+++ b/scripts/simulation/e4-v5/e5-delivery.mjs
@@ -16,7 +16,7 @@
 //
 // Delivery model (micro-founded, one-shot, Okun's leaky bucket; Model-1 incentive condition, deterrence ex ante):
 // each funded project draws an executor. A share pi_hon are intrinsically honest (deliver 1−loss). The rest are
-// opportunistic and DIVERT iff temptation t~U(0,1) exceeds the regime deterrent  det = p_det·[(1−a(1−r)) + rep],
+// opportunistic and DIVERT iff temptation (mostly U(0,1), plus a grand-corruption tail) exceeds the regime deterrent  det = p_det·[(1−a(1−r)) + rep],
 // where a=up-front advance exposure, r=recovery, rep=reputational stake. A diverting executor loses a·(1−r) of the
 // budget (the unrecovered advance) → delivers 1 − a(1−r) − loss; an honest/deterred one delivers 1 − loss.
 // Delivered value V = Σ_{j∈funded} S_j · f_j. Leakage bands are literature-anchored (see DELIVERY notes).
@@ -33,7 +33,7 @@ import { safeLog } from './adapter.mjs';
 //           diverting (Olken 2007 Indonesian roads: 24% missing); pessimistic end reaches the Uganda 87% (Reinikka &
 //           Svensson 2004) extreme by raising temptation / lowering pi_hon.
 //   verified ~2.5% loss: milestone-gating + retention + recovery + a reputational stake make the deterrent bind ex
-//           ante, so no opportunistic executor diverts (matches the corpus finding: deterrence pre-empts punishment).
+//           ante, so few opportunistic executors divert; a grand-corruption tail leaves a small RESIDUAL (not a mechanical zero).
 // Calibration (friendly round, 2026-07-12; anchors in audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md).
 // ANCHORED: opaque central divert ~24% (Olken 2007 JPE 115(2), Indonesia roads); ex-ante deterrence ⇒ verified ~0
 //   diversion (Olken 2007; Avis-Ferraz-Finan 2018 JPE 126(5); Becker 1968). DECLARED (mechanism sound, no citable
@@ -44,13 +44,17 @@ import { safeLog } from './adapter.mjs';
 // Calibration is an IDENTIFIED-SET reference, NOT a field estimate (friendly round convergent view, Codex + agent):
 // the opaque case reproduces an Olken-2007-centered ~24–28% VALUE-loss moment (not a claim about executor incidence);
 // verified advances/guarantees follow World Bank standard procurement (10% advance, ~10% performance guarantee); the
-// verified regime's near-zero diversion is a CONDITIONAL ex-ante-deterrence result (Olken 2007; Avis-Ferraz-Finan
+// verified regime's LOW-but-nonzero residual diversion is a CONDITIONAL ex-ante-deterrence result (Olken 2007; Avis-Ferraz-Finan
 // 2018; Becker 1968), not an empirical zero. Community coverage lifts DETECTION only (mon_detect, small/fragile:
 // Björkman-Svensson 2009 QJE with failed replications; Molina et al. 2016); RECOVERY needs institutional follow-up, so
 // mon_recovery=0 for community-only coverage (Afridi-Iversen 2014 MGNREGA). Report R=0 robustness always.
 export const DELIVERY = {
   pi_hon:   0.78,   // honest share; identified so the opaque case hits the Olken-centered value-loss moment (not observed prevalence)
   loss_hon: 0.05,   // ordinary execution loss (Rasul–Rogger supports a substantial upper tail; the scalar is DECLARED)
+  tempt_tail: 0.10, // GRAND-CORRUPTION TAIL (Adversarial R1 #8): a fraction of opportunistic executors face temptation
+                    //     ABOVE any feasible deterrent, so even the strong verified regime keeps a RESIDUAL diversion —
+                    //     it is NOT a mechanical zero. Olken 2007: audits cut missing expenditure ~8pp but did not
+                    //     eliminate it. With this tail, verified diversion incidence is small but nonzero (~a few %).
   //                p_det  a(advance) r(recovery) gamma(guarantee) rep(reputation)
   opaque:   { p_det: 0.04, a: 0.80, r: 0.00, gamma: 0.00, rep: 0.00, note: 'weak control: announced-audit-level exposure, unprotected advances, no recovery/guarantee/reputation' },
   verified: { p_det: 0.75, a: 0.20, r: 0.50, gamma: 0.10, rep: 0.40, note: 'architecture: 20% advance exposure (DECLARED reference; World Bank normal advance ~10%) + ~10% performance guarantee + recovery + reputational stake (magnitudes DECLARED)' },
@@ -69,6 +73,10 @@ export const DELIVERY = {
 
 function deterrent(reg, pDet) { return pDet * ((1 - reg.a * (1 - reg.r)) + (reg.gamma || 0) + reg.rep); }
 
+// Temptation draw: mostly U(0,1), plus a grand-corruption TAIL in [1,2] with probability tempt_tail — so a strong
+// (deterrent>1) verified regime still leaves a residual diversion instead of a mechanical zero (Adversarial R1 #8).
+export function sampleTempt(rng, del) { return rng.u() < (del.tempt_tail || 0) ? 1 + rng.u() : rng.u(); }
+
 // The selecting arm's effective delivery regime: distributed coverage lifts detection (and, only with institutional
 // linkage, recovery). mDet/mRec are the coverage lifts (0 for the central arm).
 function coupledRegime(reg, mDet, mRec) {
@@ -113,7 +121,7 @@ function runWorld2x2(cfg, rng, execRng, del) {
   const budget = cfg.phi * totalCost;
 
   const honest = new Array(projects.length), tempt = new Array(projects.length);
-  for (let j = 0; j < projects.length; j++) { honest[j] = execRng.u() < del.pi_hon; tempt[j] = execRng.u(); }
+  for (let j = 0; j < projects.length; j++) { honest[j] = execRng.u() < del.pi_hon; tempt[j] = sampleTempt(execRng, del); }
   const exec = { honest, tempt };
 
   const setC = fundedSet(projects, 'M_C', cfg, budget, { creditTilt: true });
@@ -174,6 +182,7 @@ export function delivered2x2(cfg, { nWorlds = NUM.n_worlds.value, seed = NUM.see
   const fullCI = ci(bs.full);
   return {
     n: W.length,
+    sumO: O,                                                  // raw oracle sum (for E10 net-budget accounting vs a common full-budget oracle)
     selection: { central: sC, distributed: sD },
     delivery:  { centralOpaque: dCol, centralVerified: dCvr, distributedOpaque: dDop, distributedVerified: dDvr },
     monitoringDividend: { verified: dDvr - dCvr, opaque: dDop - dCol },
@@ -302,13 +311,14 @@ function main() {
     // diversion INCIDENCE = unweighted share of funded projects whose executor diverts; value LEAKAGE = S-weighted
     // undelivered social value. Olken 2007 measured missing EXPENDITURE (closest to value leakage), not executor prevalence.
     safeLog(`diversion incidence (unweighted share of funded projects):     opaque ${pct(r.diversionIncidence.S)} · verified ${pct(r.diversionIncidence.A1)}`);
-    safeLog(`value leakage (S-weighted undelivered value; ~Olken moment):   opaque ${pct(r.leakage.S)} · verified ${pct(r.leakage.A1)}\n`);
+    safeLog(`value leakage (S-weighted undelivered value; MOMENT-MATCHED to Olken's expenditure loss, NOT identified as welfare):   opaque ${pct(r.leakage.S)} · verified ${pct(r.leakage.A1)}\n`);
     const civ = (iv) => `[${pct(iv[0])}, ${pct(iv[1])}]`;
-    safeLog('Main effects (percentage points of the oracle reference) with 95% bootstrap CIs, read SEPARATELY:');
+    safeLog('Main effects (pp of the oracle reference) with 95% CONDITIONAL Monte-Carlo intervals (inner simulation');
+    safeLog('variability only — world, model-form and calibration uncertainty are NOT included), read SEPARATELY:');
     safeLog(`  DELIVERY effect:   at central ${pct(r.deliveryEffect.atCentral)} ${civ(r.ci.deliveryEffect.atCentral)} · at distributed ${pct(r.deliveryEffect.atDistributed)} ${civ(r.ci.deliveryEffect.atDistributed)}`);
     safeLog(`  SELECTION effect:  at opaque ${pct(r.selectionEffect.atOpaque)} ${civ(r.ci.selectionEffect.atOpaque)} · at verified ${pct(r.selectionEffect.atVerified)} ${civ(r.ci.selectionEffect.atVerified)}`);
     safeLog(`  INTERACTION:       ${pct(r.interaction)} ${civ(r.ci.interaction)}  (>0 ⇒ verified delivery amplifies the selection gain)`);
-    safeLog(`  FULL architecture (A2 − S): ${pct(r.full)}  95% CI ${civ(r.fullCI)}\n`);
+    safeLog(`  FULL architecture (A2 − S): ${pct(r.full)}  95% conditional-MC CI ${civ(r.fullCI)}\n`);
     safeLog('Composition — the two layers compose MULTIPLICATIVELY (an accounting identity, delivery applied per project):');
     safeLog(`  actual A2 = ${pct(r.cells.A2)}  ·  identity (selection · delivery) = ${pct(r.multiplicativeIdentityA2)}`);
     safeLog(`  additive prediction (sum of main effects) = ${pct(r.additivePredictionA2)}  → short by the interaction.`);
@@ -358,7 +368,7 @@ function main() {
     const rep = replicateSeeds(cfg, { nSeeds: 20, nWorlds: 400 });
     safeLog(`20-seed replication of the full gain: mean ${pct(rep.mean)} · sd ${pct(rep.sd)} · range [${pct(rep.min)}, ${pct(rep.max)}].`);
     const js = jointSweep(cfg, { nSamples: 64, nWorlds: 300 });
-    safeLog(`Joint LHS sweep (${js.n} draws over the declared delivery ranges): full gain median ${pct(js.median)}, range [${pct(js.min)}, ${pct(js.max)}];`);
+    safeLog(`Joint LHS sweep (${js.n} draws, CONDITIONAL on the PROBABLE world; non-overlapping regime ranges): full gain median ${pct(js.median)}, range [${pct(js.min)}, ${pct(js.max)}];`);
     safeLog(`   full architecture wins in ${(100 * js.shareArchitectureWins).toFixed(0)}% and the coverage/selection effect (A3−S) is positive in ${(100 * js.shareCoverageWins).toFixed(0)}% of the sampled draws.`);
   });
 }
diff --git a/scripts/simulation/e4-v5/e9-fullstack.mjs b/scripts/simulation/e4-v5/e9-fullstack.mjs
index e408376..068788b 100644
--- a/scripts/simulation/e4-v5/e9-fullstack.mjs
+++ b/scripts/simulation/e4-v5/e9-fullstack.mjs
@@ -20,7 +20,7 @@
 // Run: npm run e9:fullstack
 
 import { generateWorld, makeRng, fundedSet } from './engine.mjs';
-import { DELIVERY, deliveredCell, validateDelivery } from './e5-delivery.mjs';
+import { DELIVERY, deliveredCell, validateDelivery, sampleTempt } from './e5-delivery.mjs';
 import { baseConfig, NUM } from './contract.mjs';
 import { safeLog } from './adapter.mjs';
 
@@ -145,7 +145,7 @@ function runWorldStack(cfg, rng, execRng, pRng, del, plan) {
   const budget = cfg.phi * totalCost;
 
   const honest = new Array(projects.length), tempt = new Array(projects.length);
-  for (let j = 0; j < projects.length; j++) { honest[j] = execRng.u() < del.pi_hon; tempt[j] = execRng.u(); }
+  for (let j = 0; j < projects.length; j++) { honest[j] = execRng.u() < del.pi_hon; tempt[j] = sampleTempt(execRng, del); }
   const exec = { honest, tempt };
 
   const sec = buildSectors(projects, plan, pRng);
@@ -234,7 +234,7 @@ export function fullStack(cfg, { nWorlds = NUM.n_worlds.value, seed = NUM.seed.v
   }
   const ci = (arr) => { if (!arr.length) return [NaN, NaN]; const a = [...arr].sort((x, y) => x - y); const q = (p) => a[Math.max(0, Math.min(a.length - 1, Math.floor(p * a.length)))]; return [q((1 - NUM.ci_level.value) / 2), q((1 + NUM.ci_level.value) / 2)]; };
   return {
-    n: W.length, statusQuo: point.statusQuo, coreV0: point.coreV0,
+    n: W.length, sumO, statusQuo: point.statusQuo, coreV0: point.coreV0,
     fullStackGain: point.gain, fullStackCI: ci(bs.gain),
     attribution: point.shapley,
     attributionCI: { planning: ci(bs.planning), selection: ci(bs.selection), delivery: ci(bs.delivery) },
@@ -267,27 +267,37 @@ export function validatePlanning(plan) {
 
 function main() {
   const pct = (x) => (x >= 0 ? '+' : '') + (100 * x).toFixed(1) + '%';
-  import('./scenario-configs.mjs').then(({ SCENARIO_WORLD: W, PROBABLE }) => {
+  import('./scenario-configs.mjs').then((SC) => {
+    const { SCENARIO_WORLD: W, PROBABLE } = SC;
     const cfg = { ...baseConfig(), ...W, ...PROBABLE };
-    const r = fullStack(cfg, { nWorlds: 1000 });
-    safeLog('E9 — FULL STACK: PLANNING, SELECTION and DELIVERY (built on E5, PROBABLE world). Parity at the oracle');
-    safeLog('(a global full-information greedy REFERENCE, not a guaranteed optimum). No compound multiplier.\n');
+    // Recycle residual is the PRIMARY reporting mode (removes the utilization confound; strict mixes planning with
+    // unspent budget — Adversarial R1 #7).
+    const r = fullStack(cfg, { nWorlds: 1000, planning: { ...PLANNING, residualMode: 'recycle' } });
+    safeLog('E9 — FULL STACK: PLANNING, SELECTION and DELIVERY (built on E5, PROBABLE world). Percentages of a global');
+    safeLog('full-information greedy REFERENCE (a heuristic, not a guaranteed optimum). Recycle residual (primary).\n');
     const civ = (iv) => `[${pct(iv[0])}, ${pct(iv[1])}]`;
-    safeLog(`worlds kept: ${r.n}   (${PLANNING.nSec} COFOG sectors; assoc=${PLANNING.assoc}, secValSpread=${PLANNING.secValSpread}, creditCoef=${PLANNING.creditCoef}, agendaCapture=${PLANNING.agendaCapture}, strict residual)`);
-    safeLog(`STATUS QUO (all-central: central planning + selection + opaque delivery):     ${pct(r.statusQuo)} of reference`);
-    safeLog(`CORE v0 FULL (all-distributed: distributed planning + selection + verified):   ${pct(r.coreV0)} of reference`);
-    safeLog(`FULL-STACK gain (Core v0 − status quo): ${pct(r.fullStackGain)}  95% CI ${civ(r.fullStackCI)}\n`);
-    safeLog('SHAPLEY attribution of the full-stack gain to each layer (sums exactly to the gain) with 95% CIs:');
-    safeLog(`  planning ${pct(r.attribution.planning)} ${civ(r.attributionCI.planning)} · selection ${pct(r.attribution.selection)} ${civ(r.attributionCI.selection)} · delivery ${pct(r.attribution.delivery)} ${civ(r.attributionCI.delivery)}`);
-    safeLog('Planning as a CONDITIONAL simple effect (distributed − central planning), context-dependent:');
-    safeLog(`  under central selection:     ${pct(r.planningUnderCentralSel)} ${civ(r.planningCI.central)}`);
-    safeLog(`  under distributed selection: ${pct(r.planningUnderDistributedSel)} ${civ(r.planningCI.distributed)}   (the Core v0 context)`);
-    safeLog(`budget utilization by cell (strict residual): status quo ${pct(r.utilization.c_c_op)} · Core v0 ${pct(r.utilization.d_d_ve)}\n`);
+    safeLog(`worlds kept: ${r.n}   (${PLANNING.nSec} COFOG sectors; assoc=${PLANNING.assoc}, secValSpread=${PLANNING.secValSpread}, creditCoef=${PLANNING.creditCoef}, agendaCapture=${PLANNING.agendaCapture})`);
+    safeLog(`STATUS QUO (all-central):   ${pct(r.statusQuo)} of reference   ·   CORE v0 FULL (all-distributed): ${pct(r.coreV0)}`);
+    safeLog(`FULL-STACK gain (Core v0 − status quo): ${pct(r.fullStackGain)}  95% conditional-MC CI ${civ(r.fullStackCI)}\n`);
+    safeLog('SHAPLEY attribution — CONDITIONAL: every layer value is computed through the (declared) planning sector');
+    safeLog('generator, so these are NOT the standalone quantified layers. The standalone SELECTION and DELIVERY figures');
+    safeLog('come from E5 (no planning layer); E9 supplies the 3-layer STRUCTURE + attribution METHOD, planning qualitative:');
+    safeLog(`  planning ${pct(r.attribution.planning)} ${civ(r.attributionCI.planning)} · selection ${pct(r.attribution.selection)} ${civ(r.attributionCI.selection)} · delivery ${pct(r.attribution.delivery)} ${civ(r.attributionCI.delivery)}  (sums to the gain)\n`);
+
+    // Adversarial R1 #3: the layer values are LARGE IN PROBABLE, not "robust" — individual Shapley components reverse
+    // sign in extreme worlds (even though the FULL diagonal stays positive in every one). Publish the named-world table.
+    safeLog('Named-world decomposition (the full diagonal stays positive everywhere; individual layers can reverse):');
+    safeLog('   world         full gain   planning   selection   delivery');
+    for (const nm of ['PROBABLE', 'PRO_CENTRAL', 'MYOPIA_OFF', 'PRO_DIST']) {
+      const rw = fullStack({ ...baseConfig(), ...W, ...SC[nm] }, { nWorlds: 700, planning: { ...PLANNING, residualMode: 'recycle' } });
+      safeLog(`   ${nm.padEnd(12)}  ${pct(rw.fullStackGain).padStart(8)}  ${pct(rw.attribution.planning).padStart(8)}  ${pct(rw.attribution.selection).padStart(9)}  ${pct(rw.attribution.delivery).padStart(8)}`);
+    }
+    safeLog('   → SELECTION and DELIVERY are LARGE in PROBABLE; selection reverses in PRO_CENTRAL and delivery in PRO_DIST');
+    safeLog('     (stronger delivery magnifies harmful portfolios there). The full Core v0 advantage holds in ALL worlds.\n');
 
-    // Recycle mode removes the utilization confound (Codex round-2): unspent budget makes a second global pass.
-    const rr = fullStack(cfg, { nWorlds: 1000, planning: { ...PLANNING, residualMode: 'recycle' } });
-    safeLog(`With residual RECYCLING (removes the utilization confound): planning Shapley ${pct(rr.attribution.planning)} ${civ(rr.attributionCI.planning)},`);
-    safeLog(`  planning|distributed-sel ${pct(rr.planningUnderDistributedSel)}, full-stack gain ${pct(rr.fullStackGain)} (utilization → ~100% both cells).\n`);
+    safeLog('Planning as a CONDITIONAL simple effect (distributed − central planning), context-dependent:');
+    safeLog(`  under central selection: ${pct(r.planningUnderCentralSel)} ${civ(r.planningCI.central)} · under distributed selection: ${pct(r.planningUnderDistributedSel)} ${civ(r.planningCI.distributed)} (Core v0 context)\n`);
+    const rr = r;
 
     // The planning magnitude is DECLARED and SENSITIVE to two declared assumptions. Present both, honestly.
     safeLog('Planning Shapley over the DECLARED sector-value dispersion by need↔visibility association (the effect is');
@@ -313,10 +323,11 @@ function main() {
 
     safeLog('FRAMING (author decision): DO NOT report a planning-layer FIGURE. The soft-only slice above (~0–3%) omits');
     safeLog('agenda capture — the mechanism that moves the needle — so it UNDERSTATES the layer; headlining it would read');
-    safeLog('as "planning is small," which is not what it means. Report SELECTION and DELIVERY quantitatively (the large,');
-    safeLog('robust, anchored layers); present PLANNING QUALITATIVELY — mechanism identified (agenda capture / second');
-    safeLog('face of power), DIRECTION anchored (COFOG; election visible-spending shift; maintenance neglect), MAGNITUDE');
-    safeLog('deferred to country-specific continuation (e.g. a Chile example — illustrative, not conclusive).');
+    safeLog('as "planning is small," which is not what it means. Quantify SELECTION and DELIVERY from E5 (they are LARGE');
+    safeLog('IN PROBABLE — not "robust": each reverses sign in an extreme world, see the named-world table above, though');
+    safeLog('the full Core v0 advantage holds in every world); present PLANNING QUALITATIVELY — mechanism identified');
+    safeLog('(agenda capture / second face of power), DIRECTION anchored (COFOG; election visible-spending shift;');
+    safeLog('maintenance neglect), MAGNITUDE deferred to country-specific continuation (illustrative, not conclusive).');
   });
 }
 import { fileURLToPath } from 'node:url';

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "node --input-type=module -e \"import {assertNoEmbargoedTokens as a} from './scripts/simulation/e4-v5/adapter.mjs'; for (const s of ['value ratio (~2.7)','performance ratio 2.7','institutional ratio','ratio (~2.7)','2.7x','2.7-fold','D/C','admin-cost effect -0.9%']) {let verdict='allowed'; try { a(s); } catch { verdict='rejected'; } console.log(JSON.stringify({s,verdict}));}\"" in C:\devel\claude-projects\distributed-governance-research
 succeeded in 188ms:
{"s":"value ratio (~2.7)","verdict":"rejected"}
{"s":"performance ratio 2.7","verdict":"rejected"}
{"s":"institutional ratio","verdict":"rejected"}
{"s":"ratio (~2.7)","verdict":"rejected"}
{"s":"2.7x","verdict":"rejected"}
{"s":"2.7-fold","verdict":"rejected"}
{"s":"D/C","verdict":"rejected"}
{"s":"admin-cost effect -0.9%","verdict":"allowed"}

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "rg -n \"assertNoEmbargoedTokens|semantic|value ratio|ratio \\(~\" -- scripts/simulation/e4-v5/test.mjs scripts/simulation/e4-v5; git show --format=fuller --stat 2656881; git status --short" in C:\devel\claude-projects\distributed-governance-research
 succeeded in 225ms:
scripts/simulation/e4-v5/test.mjs:8:import { assertNoEmbargoedTokens } from './adapter.mjs';
scripts/simulation/e4-v5/test.mjs:124:const rejects = (txt) => { try { assertNoEmbargoedTokens(txt); return false; } catch { return true; } };
scripts/simulation/e4-v5\test.mjs:8:import { assertNoEmbargoedTokens } from './adapter.mjs';
scripts/simulation/e4-v5\test.mjs:124:const rejects = (txt) => { try { assertNoEmbargoedTokens(txt); return false; } catch { return true; } };
scripts/simulation/e4-v5\evidence.mjs:28:import { renderReport, assertNoEmbargoedTokens } from './adapter.mjs';
scripts/simulation/e4-v5\evidence.mjs:137:  assertNoEmbargoedTokens(text);
scripts/simulation/e4-v5\adapter.mjs:3:// institution-performance multiplier notation (see the NOTE on assertNoEmbargoedTokens and the test suite) — NOT a
scripts/simulation/e4-v5\adapter.mjs:22:const RATIO_PHRASE = /\b(value|performance|institution\w*)\s+ratio\b|\bratio\s*\(?~?\s*\d/i;  // "value ratio (~2.7)" semantic multiplier (Adversarial R1 #4/#5)
scripts/simulation/e4-v5\adapter.mjs:27:export function assertNoEmbargoedTokens(text) {
scripts/simulation/e4-v5\adapter.mjs:34:  if (RATIO_PHRASE.test(norm)) hits.push('semantic performance-ratio phrasing (value/performance ratio, ratio(~N))');
scripts/simulation/e4-v5\adapter.mjs:41:export function safeLog(...lines) { const t = lines.join(' '); assertNoEmbargoedTokens(t); console.log(t); }
scripts/simulation/e4-v5\adapter.mjs:60:  assertNoEmbargoedTokens(text);
commit 2656881fc1d19a68046cfa056a4c76ebf8d31327
Author:     Mauricio Offermann <mauricio.offermann@gocode.cl>
AuthorDate: Mon Jul 13 16:39:25 2026 -0400
Commit:     Mauricio Offermann <mauricio.offermann@gocode.cl>
CommitDate: Mon Jul 13 16:39:25 2026 -0400

    Adversarial R1 fixes — cross batch: tighten embargo filter, downgrade status, fix false invariant
    
    - #5: added a RATIO_PHRASE guard to the embargo filter to catch the semantic performance-ratio class
      ('value ratio (~2.7)', 'ratio(~N)') that safeLog previously missed. E4/E5/E9/E10 all run clean; E4
      test suite passes (no legitimate output trips it). (Full typed closed renderers for E5/E9/E10 remain
      a noted follow-up.)
    - status: downgraded E5 'PUBLICATION-READY' -> 'CODE/TEST-READY' (empirical interpretation pending
      model-form + calibration review).
    - #18: fixed the false 'no cell exceeds the oracle' invariant statement (the oracle is a greedy
      REFERENCE, not an upper bound; cells may exceed it -> regression check, not invariant).
    
    Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>

 audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md  | 5 ++++-
 audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md | 3 ++-
 scripts/simulation/e4-v5/adapter.mjs                | 2 ++
 3 files changed, 8 insertions(+), 2 deletions(-)

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$f='"'scripts/simulation/e4-v5/test.mjs'; "'$lines=Get-Content -LiteralPath $f; for($i=115;$i -le 165;$i++){ '"'{0,4}: {1}' -f "'$i,$lines[$i-1] }' in C:\devel\claude-projects\distributed-governance-research
 succeeded in 205ms:
 115:   check('E5 admin cost ON (kappa_C>kappa_D) grows the coverage gap (sign preserved)', withCost.m5 > off.m5 && withCost.m_admin > 0,
 116:     `m5 ${off.m5.toFixed(3)} -> ${withCost.m5.toFixed(3)}`);
 117:   const w = layeredEstimand({ ...base, kappa_C: 0.4, kappa_D: 0.1, leak_C: 0.3, leak_D: 0.1 }, { nWorlds: 300 });
 118:   check('E5 channel decomposition is exact (no hidden conflation)',
 119:     Math.abs(w.m5 - (w.m_selection + w.m_admin + w.m_leak + w.interaction)) < 1e-12,
 120:     `resid=${(w.m5 - (w.m_selection + w.m_admin + w.m_leak + w.interaction)).toExponential(1)}`);
 121: }
 122: 
 123: // ---- Embargo: reject multiplier/ratio notation in rendered text ----
 124: const rejects = (txt) => { try { assertNoEmbargoedTokens(txt); return false; } catch { return true; } };
 125: check('EMBARGO rejects "2.2x"', rejects('gain of 2.2x'));
 126: check('EMBARGO rejects Unicode "2.2×"', rejects('gain of 2.2×'));
 127: check('EMBARGO rejects Cyrillic "2.2х"', rejects('gain of 2.2х'));
 128: check('EMBARGO rejects "✕" cross', rejects('gain of 2.2✕'));
 129: check('EMBARGO rejects "2.2-fold"', rejects('a 2.2-fold gain'));
 130: check('EMBARGO rejects "2.2 times"', rejects('2.2 times more value'));
 131: check('EMBARGO rejects word "two-fold"', rejects('a two-fold advantage'));
 132: check('EMBARGO rejects "twice"', rejects('twice as much value'));
 133: check('EMBARGO rejects "double"', rejects('double the delivered value'));
 134: check('EMBARGO rejects lowercase "d/c"', rejects('the d/c ratio'));
 135: check('EMBARGO rejects zero-width-split "2.2​x"', rejects('gain of 2.2​x'));
 136: check('EMBARGO rejects "fourfold"', rejects('a fourfold increase'));
 137: check('EMBARGO rejects "two times"', rejects('two times more value'));
 138: check('EMBARGO rejects HTML "&times;"', rejects('gain of 2.2&times;'));
 139: check('EMBARGO rejects word-joiner-split "2.2⁠x"', rejects('gain of 2.2⁠x'));
 140: check('EMBARGO rejects "D/C"', rejects('ratio D/C = 1.4'));
 141: check('EMBARGO allows clean percent text', !rejects('m̂ is 45.7% of the oracle, parity at 0'));
 142: 
 143: // ---- Closed schema: reject an extra field / missing required ----
 144: const CLEAN = { contract_version: 'x', theta_id: 't', pi_deg: 0, m_hat: 0.1, ci: [0.05, 0.15], df_dist_share: 0.7, df_cent_share: 0.3, df_par_share: 0.0, sign_status: 'indeterminate', materiality_status: 'material', degeneracy_status: 'ok', numerical_status: 'resolved' };
 145: check('SCHEMA rejects extra field (ratio smuggling)', validateOutput({ ...CLEAN, ratio_D_over_C: 2.2 }).length > 0);
 146: check('SCHEMA rejects non-finite m_hat', validateOutput({ ...CLEAN, m_hat: Infinity }).length > 0);
 147: const { df_par_share: _dropPar, ...NO_PAR } = CLEAN;
 148: check('SCHEMA rejects missing df_par_share (renderer field)', validateOutput(NO_PAR).length > 0);
 149: check('SCHEMA rejects inverted ci [lo>hi]', validateOutput({ ...CLEAN, ci: [0.2, 0.1] }).length > 0);
 150: check('SCHEMA rejects win-shares summing > 1', validateOutput({ ...CLEAN, df_dist_share: 0.8, df_cent_share: 0.8 }).length > 0);
 151: check('SCHEMA rejects scalar m_Ralpha (must be object)', validateOutput({ ...CLEAN, m_Ralpha: 5 }).length > 0);
 152: check('SCHEMA accepts a clean output', validateOutput(CLEAN).length === 0);
 153: 
 154: // ---- Fail-closed config: unknown parameter throws ----
 155: {
 156:   let threw = false;
 157:   try { validateConfig({ ...baseConfig(), bogus_param: 1 }); } catch { threw = true; }
 158:   check('CONTRACT fail-closed on unknown parameter', threw);
 159: }
 160: 
 161: console.log(`\n${ok ? 'ALL TESTS PASSED' : 'SOME TESTS FAILED'}`);
 162: process.exit(ok ? 0 : 1);
 163: 
 164: 
 165: 

2026-07-13T21:45:48.061351Z ERROR codex_core::tools::router: error=collab spawn failed: agent thread limit reached
2026-07-13T21:45:53.351171Z ERROR codex_core::tools::router: error=collab tool failed: agent thread limit reached
codex
The executable headline fixes are holding: E5 now produces 2.1% verified diversion and survives the no-reputation stress; E10’s manual recomposition exactly matches its common-oracle net-budget values and yields −0.9pp; E9’s four named-world table reproduces exactly. The serious failures are in propagation—E5’s joint robustness sweep silently drops the new tail, and E9’s later tables silently drop recycling.
All requested mains/tests passed and core arithmetic has been independently reproduced. Six-role adversarial review is in its second wave; synthesis is focusing on propagation defects and stale public contracts rather than inventing new headline failures.
  ✓ Inspect repository guidance, adjudication/design documents, changed files, and tests
  → Run six adversarial subagent passes and all requested simulations/tests
  → Verify every round-1 fix and re-examine defended items with line evidence
  • Synthesize ranked new findings and publication-readiness verdicts
2026-07-13T21:46:32.245666Z ERROR codex_core::tools::router: error=timeout_ms must be at least 10000
collab: Wait
collab: Wait
collab: Wait
collab: Wait
codex
No new blocker has emerged. The most important test failure is conceptual rather than red/green: E10’s 11/11 suite would also pass the rejected value-haircut implementation, so the current correct net-budget code is not actually regression-pinned. A direct PRO_DIST run is finite and coherent, but it also disproves the suite’s generic “costs reduce each arm” wording because trimming harmful projects raises welfare there.
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "node --input-type=module -e \"import {delivered2x2} from './scripts/simulation/e4-v5/e5-delivery.mjs'; import {baseConfig} from './scripts/simulation/e4-v5/contract.mjs'; import * as SC from './scripts/simulation/e4-v5/scenario-configs.mjs'; for(const name of ['PROBABLE','PRO_DIST']){const cfg={...baseConfig(),...SC.SCENARIO_WORLD,...SC[name]}; const f=delivered2x2(cfg,{nWorlds:300}); const c=delivered2x2({...cfg,phi:cfg.phi*.92},{nWorlds:300}); const d=delivered2x2({...cfg,phi:cfg.phi*.95},{nWorlds:300}); console.log(name,JSON.stringify({full:f.n,cnet:c.n,dnet:d.n}));}\"" in C:\devel\claude-projects\distributed-governance-research
 succeeded in 5719ms:
PROBABLE {"full":300,"cnet":300,"dnet":300}
PRO_DIST {"full":300,"cnet":300,"dnet":300}

collab: Wait
collab: Wait
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'git status --short; git diff --check' in C:\devel\claude-projects\distributed-governance-research
 succeeded in 189ms:
All six requested adversarial roles completed, all six requested commands ran, targeted PRO_DIST/sparse-world diagnostics were reconciled, and the repository remains unmodified.
  ✓ Inspect repository guidance, adjudication/design documents, changed files, and tests
  ✓ Run six adversarial subagent passes and all requested simulations/tests
  ✓ Verify every round-1 fix and re-examine defended items with line evidence
  ✓ Synthesize ranked new findings and publication-readiness verdicts
codex
No new blocker invalidates the reported E5, E9, or E10 PROBABLE headline. The core fixes are real, not cosmetic. However, several major propagation and regression defects remain, so none of the three is publication-ready.

All requested commands passed individually:

- E5: 40/40 tests
- E9: 26/26 tests
- E10: 11/11 tests
- All three main simulations exited cleanly
- Working tree remained untouched

## 1. Round-1 verification

| Round-1 fix | Verdict | Evidence |
|---|---|---|
| E10 net-budget rather than value haircut | **Incomplete** | The reported implementation is genuine: `phi·(1−κ)` at [e10-costs.mjs:45](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e10-costs.mjs:45), raw net value reconstruction and full-budget normalization at [e10-costs.mjs:58](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e10-costs.mjs:58). The PROBABLE result is −0.9pp. But sparse worlds can be dropped under the net-budget oracle filter, violating a common retained sample; see attack 2. |
| E10 `sumO` common full-budget oracle | **Verified at the reported PROBABLE/PRO_DIST points** | Full and net runs retained identical worlds in targeted dense-world checks, and direct recomposition matched output exactly. It is not generally correct for sparse/high-cost worlds. |
| E10 κ_C=0.08 de-overlapped from E5 | **Incomplete package-wide; executable fix verified** | The code excludes E5 non-delivery and declares pure overhead at [e10-costs.mjs:25](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e10-costs.mjs:25). No remaining code-level double count was found. The design still uses bundled IDB waste and κ_C=.15 at [E10-COSTS-DESIGN.md:23](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md:23). |
| E10 κ_D=0.05 symmetric platform + control scope | **Fix verified** | Platform plus verification/audit/recovery/reputation machinery is explicitly charged at [e10-costs.mjs:34](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e10-costs.mjs:34). The magnitude remains honestly declared, not empirically decomposed. |
| E10 PRO_DIST negative-value behavior | **Incomplete testing; implementation sound at tested point** | At 800 worlds: value-only C −84.64%, D +90.62%; net-budget C −78.77%, D +91.05%; contribution −5.44pp. This is coherent—lower budgets can remove harmful projects—but no PRO_DIST test exists. |
| E5 residual temptation tail | **Incomplete** | The headline fix is genuine: `tempt_tail=.10` at [e5-delivery.mjs:54](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:54), `[1,2]` sampling at [e5-delivery.mjs:76](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:76), producing 2.1% verified diversion. But the LHS robustness configuration omits the tail at [e5-delivery.mjs:275](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:275), reverting that experiment to zero-tail saturation. |
| E5 opaque calibration | **Fix verified** | Current output is 21.9% diversion and 21.8% leakage, versus the prior roughly 21.7%/22.5%; no material calibration drift. |
| E5 R=0 stress | **Fix verified** | [e5-delivery.mjs:342](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:342) produces 7.1% verified diversion and +58.1pp full gain. It is not re-saturated. |
| E9 named-world decomposition | **Fix verified** | Generated at [e9-fullstack.mjs:287](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:287). Full/planning/selection/delivery: PROBABLE `57.1/3.1/42.7/11.3`; PRO_CENTRAL `14.7/1.5/−2.8/16.0`; MYOPIA_OFF `44.7/2.5/29.5/12.6`; PRO_DIST `172.6/4.8/169.1/−1.4`. |
| “Robust” → “large in PROBABLE” | **Incomplete** | Correct in stdout at [e9-fullstack.mjs:295](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:295). The design still calls selection/delivery robust at [E9-FULLSTACK-DESIGN.md:203](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:203) and [E9-FULLSTACK-DESIGN.md:251](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:251). |
| Conditional Shapley; standalone selection/delivery deferred to E5 | **Incomplete** | Shapley and deferral are correctly stated at [e9-fullstack.mjs:282](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:282). The numeric full-stack point immediately above is not itself labelled an illustrative/conditional estimand. |
| Recycle residual primary | **Incomplete** | Headline and named worlds use recycle at [e9-fullstack.mjs:273](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:273), but later tables revert silently to the strict default. |
| Chile de-quantification | **Fix verified in substance** | [E9-FULLSTACK-DESIGN.md:155](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:155) explicitly rejects the old mapping and requires a subfunction model. The `+2–4pp` literal survives only as a repudiated historical counterexample, not an active result. |
| `RATIO_PHRASE` and stdout embargo | **Fix verified, non-cosmetic** | Enforced at [adapter.mjs:22](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/adapter.mjs:22). Direct probes rejected `value ratio (~2.7)`, `performance ratio 2.7`, and `ratio(~2.7)`. No current stdout leak was found. |
| Conditional-MC CI labels | **Incomplete** | Main E5/E9 intervals are corrected, but E5’s R=0 output still says bare `95% CI` at [e5-delivery.mjs:345](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:345), and the designs retain unqualified historical CIs. |
| Publication-ready downgrade | **Fix verified for E5’s current status; cross-doc cleanup incomplete** | E5 now says `CODE/TEST-READY` at [E5-DELIVERY-DESIGN.md:173](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:173). E9’s header still calls it an unbuilt design sketch; E10 has no current corrected status/specification. |

No fix was merely cosmetic: every executable change that was applied changes behavior as intended.

### Defended items

- **#11 E4 reduction:** the defense holds only as “exact at the tested non-degenerate point.” E4 filters on `o_min` at [engine.mjs:176](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/engine.mjs:176); E5 keeps every `O>0` world at [e5-delivery.mjs:155](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:155). A valid sparse diagnostic produced 643 E5 worlds versus 636 E4 worlds and materially different efficiencies. The required limitation note is still absent.

- **#14 multiplicative identity:** **defense holds.** It is explicitly labelled an accounting identity at [e5-delivery.mjs:202](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:202). No valid new attack.

- **#16 planning-unit mismatch:** the defense holds only for claim scope: planning is deferred and E5 supplies standalone selection/delivery. It does not calibrate E9’s numeric full-stack/Shapley values; those remain conditional illustrations, not publication estimates.

## 2. Ranked new attacks

1. **[major] E9 mixes recycle and strict residual inside one report — RESULT.**  
   [e9-fullstack.mjs:273](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:273) uses recycle, but the dispersion and agenda tables at [e9-fullstack.mjs:303](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:303) and [e9-fullstack.mjs:315](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:315) inherit `strict`. The same agendaCapture=0 case changes from strict planning/full `+0.69/+47.78pp` to recycle `+3.14/+57.03pp`.  
   **Change:** define one primary recycled planning object and use it in every emitted primary table and test; retain strict only as a labelled diagnostic.

2. **[major] E10’s “common oracle” can combine different retained-world samples — RESULT, general estimand.**  
   Net arms are independently rerun at [e10-costs.mjs:45](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e10-costs.mjs:45); E5/E9 then drop worlds using net-budget `O>0` at [e5-delivery.mjs:155](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:155) and [e9-fullstack.mjs:215](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:215). A sparse `K=5` diagnostic biased the gap by −1.17pp. The default dense PROBABLE point is unaffected.  
   **Change:** simulate once, retain worlds using the full-budget oracle once, and accumulate both net-budget arms on every retained world—even when the net-budget oracle funds nothing.

3. **[major] E10’s tests do not distinguish the fix from the rejected haircut and omit PRO_DIST — RESULT assurance.**  
   Every assertion at [e10-costs-test.mjs:36](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e10-costs-test.mjs:36)–52 also passes the old value-haircut implementation. Tests import only PROBABLE.  
   **Change:** independently assert `netCell × netSumO / fullSumO`, require inequality from a naïve haircut in a chosen fixture, and add the signed PRO_DIST case. Scope “costs reduce each arm” to PROBABLE; it is false for harmful portfolios.

4. **[major] E5’s reported LHS robustness uses the pre-fix zero-tail model — RESULT.**  
   The fresh configuration at [e5-delivery.mjs:275](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:275) omits `tempt_tail`; validation at [e5-delivery.mjs:231](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:231) accepts missing, negative, oversized, or NaN tails. Existing tests would pass if verified diversion returned to zero.  
   **Change:** require finite `tempt_tail∈[0,1]`, carry or sweep it in the LHS, and pin default plus R=0 nonzero incidence.

5. **[major] E10 accepts invalid cost configurations — RESULT/API.**  
   [e10-costs.mjs:55](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e10-costs.mjs:55) accepts negative κ, NaN, κ≥1, and non-boolean `planningOn`. Negative κ creates extra project budget; κ=1/NaN produces NaNs.  
   **Change:** add fail-closed validation for finite κ in the supported `[0,1)` domain and a strict boolean planning switch.

6. **[major] Public design contracts describe rejected experiments — presentation only.**  
   E10 still specifies the value haircut, `.15/.03`, +2.3pp, and the forbidden ratio story at [E10-COSTS-DESIGN.md:10](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md:10). E5 still says pure `U(0,1)` and zero verified diversion at [E5-DELIVERY-DESIGN.md:39](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:39). E9 retains obsolete “robust” results. E5 additionally says stolen-funds cost “belongs to E10” at line 43, contradicting the de-overlap fix.  
   **Change:** put a generated current specification/results section first and move historical rounds to a clearly separated changelog. State that diversion already consumes budget while reducing delivered value and is not charged again in E10.

7. **[minor] CI and named-world quantifiers remain overstated — presentation only.**  
   E5’s R=0 CI remains unqualified at [e5-delivery.mjs:345](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:345). E9 says the advantage holds in “ALL worlds” at [e9-fullstack.mjs:296](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:296), but it evaluated four named scenarios.  
   **Change:** use `95% conditional-MC CI` consistently and say “all four named worlds.”

8. **[minor] The Chile example remains qualitative but still infers prevalence — presentation only.**  
   [E9-FULLSTACK-DESIGN.md:146](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:146)–150 says one case shows visibility bias is “pervasive,” while lines 162–164 acknowledge it does not establish capture.  
   **Change:** say the case is compatible with the mechanism; neither causal attribution nor prevalence is identified.

## 3. Publication readiness

| Experiment | Verdict | Single most important remaining item |
|---|---|---|
| E5 | **not-yet** | Make the temptation tail part of the LHS/validation/test contract; the current robustness result runs the wrong DGP. |
| E9 | **not-yet** | Use recycled residual consistently across headline, named worlds, sensitivities, agenda tables, and tests. |
| E10 | **not-yet** | Implement a genuinely shared retained-world net-budget estimand and regression-pin it, including PRO_DIST. |

Plain conclusion: the round-1 executable headline blockers are resolved and there is no new blocker. The remaining defects are majors, not headline refutations: propagation, world-sample consistency, test weakness, invalid-input handling, and public-contract drift.
tokens used
209,189
No new blocker invalidates the reported E5, E9, or E10 PROBABLE headline. The core fixes are real, not cosmetic. However, several major propagation and regression defects remain, so none of the three is publication-ready.

All requested commands passed individually:

- E5: 40/40 tests
- E9: 26/26 tests
- E10: 11/11 tests
- All three main simulations exited cleanly
- Working tree remained untouched

## 1. Round-1 verification

| Round-1 fix | Verdict | Evidence |
|---|---|---|
| E10 net-budget rather than value haircut | **Incomplete** | The reported implementation is genuine: `phi·(1−κ)` at [e10-costs.mjs:45](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e10-costs.mjs:45), raw net value reconstruction and full-budget normalization at [e10-costs.mjs:58](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e10-costs.mjs:58). The PROBABLE result is −0.9pp. But sparse worlds can be dropped under the net-budget oracle filter, violating a common retained sample; see attack 2. |
| E10 `sumO` common full-budget oracle | **Verified at the reported PROBABLE/PRO_DIST points** | Full and net runs retained identical worlds in targeted dense-world checks, and direct recomposition matched output exactly. It is not generally correct for sparse/high-cost worlds. |
| E10 κ_C=0.08 de-overlapped from E5 | **Incomplete package-wide; executable fix verified** | The code excludes E5 non-delivery and declares pure overhead at [e10-costs.mjs:25](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e10-costs.mjs:25). No remaining code-level double count was found. The design still uses bundled IDB waste and κ_C=.15 at [E10-COSTS-DESIGN.md:23](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md:23). |
| E10 κ_D=0.05 symmetric platform + control scope | **Fix verified** | Platform plus verification/audit/recovery/reputation machinery is explicitly charged at [e10-costs.mjs:34](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e10-costs.mjs:34). The magnitude remains honestly declared, not empirically decomposed. |
| E10 PRO_DIST negative-value behavior | **Incomplete testing; implementation sound at tested point** | At 800 worlds: value-only C −84.64%, D +90.62%; net-budget C −78.77%, D +91.05%; contribution −5.44pp. This is coherent—lower budgets can remove harmful projects—but no PRO_DIST test exists. |
| E5 residual temptation tail | **Incomplete** | The headline fix is genuine: `tempt_tail=.10` at [e5-delivery.mjs:54](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:54), `[1,2]` sampling at [e5-delivery.mjs:76](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:76), producing 2.1% verified diversion. But the LHS robustness configuration omits the tail at [e5-delivery.mjs:275](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:275), reverting that experiment to zero-tail saturation. |
| E5 opaque calibration | **Fix verified** | Current output is 21.9% diversion and 21.8% leakage, versus the prior roughly 21.7%/22.5%; no material calibration drift. |
| E5 R=0 stress | **Fix verified** | [e5-delivery.mjs:342](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:342) produces 7.1% verified diversion and +58.1pp full gain. It is not re-saturated. |
| E9 named-world decomposition | **Fix verified** | Generated at [e9-fullstack.mjs:287](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:287). Full/planning/selection/delivery: PROBABLE `57.1/3.1/42.7/11.3`; PRO_CENTRAL `14.7/1.5/−2.8/16.0`; MYOPIA_OFF `44.7/2.5/29.5/12.6`; PRO_DIST `172.6/4.8/169.1/−1.4`. |
| “Robust” → “large in PROBABLE” | **Incomplete** | Correct in stdout at [e9-fullstack.mjs:295](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:295). The design still calls selection/delivery robust at [E9-FULLSTACK-DESIGN.md:203](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:203) and [E9-FULLSTACK-DESIGN.md:251](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:251). |
| Conditional Shapley; standalone selection/delivery deferred to E5 | **Incomplete** | Shapley and deferral are correctly stated at [e9-fullstack.mjs:282](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:282). The numeric full-stack point immediately above is not itself labelled an illustrative/conditional estimand. |
| Recycle residual primary | **Incomplete** | Headline and named worlds use recycle at [e9-fullstack.mjs:273](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:273), but later tables revert silently to the strict default. |
| Chile de-quantification | **Fix verified in substance** | [E9-FULLSTACK-DESIGN.md:155](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:155) explicitly rejects the old mapping and requires a subfunction model. The `+2–4pp` literal survives only as a repudiated historical counterexample, not an active result. |
| `RATIO_PHRASE` and stdout embargo | **Fix verified, non-cosmetic** | Enforced at [adapter.mjs:22](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/adapter.mjs:22). Direct probes rejected `value ratio (~2.7)`, `performance ratio 2.7`, and `ratio(~2.7)`. No current stdout leak was found. |
| Conditional-MC CI labels | **Incomplete** | Main E5/E9 intervals are corrected, but E5’s R=0 output still says bare `95% CI` at [e5-delivery.mjs:345](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:345), and the designs retain unqualified historical CIs. |
| Publication-ready downgrade | **Fix verified for E5’s current status; cross-doc cleanup incomplete** | E5 now says `CODE/TEST-READY` at [E5-DELIVERY-DESIGN.md:173](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:173). E9’s header still calls it an unbuilt design sketch; E10 has no current corrected status/specification. |

No fix was merely cosmetic: every executable change that was applied changes behavior as intended.

### Defended items

- **#11 E4 reduction:** the defense holds only as “exact at the tested non-degenerate point.” E4 filters on `o_min` at [engine.mjs:176](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/engine.mjs:176); E5 keeps every `O>0` world at [e5-delivery.mjs:155](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:155). A valid sparse diagnostic produced 643 E5 worlds versus 636 E4 worlds and materially different efficiencies. The required limitation note is still absent.

- **#14 multiplicative identity:** **defense holds.** It is explicitly labelled an accounting identity at [e5-delivery.mjs:202](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:202). No valid new attack.

- **#16 planning-unit mismatch:** the defense holds only for claim scope: planning is deferred and E5 supplies standalone selection/delivery. It does not calibrate E9’s numeric full-stack/Shapley values; those remain conditional illustrations, not publication estimates.

## 2. Ranked new attacks

1. **[major] E9 mixes recycle and strict residual inside one report — RESULT.**  
   [e9-fullstack.mjs:273](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:273) uses recycle, but the dispersion and agenda tables at [e9-fullstack.mjs:303](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:303) and [e9-fullstack.mjs:315](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:315) inherit `strict`. The same agendaCapture=0 case changes from strict planning/full `+0.69/+47.78pp` to recycle `+3.14/+57.03pp`.  
   **Change:** define one primary recycled planning object and use it in every emitted primary table and test; retain strict only as a labelled diagnostic.

2. **[major] E10’s “common oracle” can combine different retained-world samples — RESULT, general estimand.**  
   Net arms are independently rerun at [e10-costs.mjs:45](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e10-costs.mjs:45); E5/E9 then drop worlds using net-budget `O>0` at [e5-delivery.mjs:155](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:155) and [e9-fullstack.mjs:215](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:215). A sparse `K=5` diagnostic biased the gap by −1.17pp. The default dense PROBABLE point is unaffected.  
   **Change:** simulate once, retain worlds using the full-budget oracle once, and accumulate both net-budget arms on every retained world—even when the net-budget oracle funds nothing.

3. **[major] E10’s tests do not distinguish the fix from the rejected haircut and omit PRO_DIST — RESULT assurance.**  
   Every assertion at [e10-costs-test.mjs:36](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e10-costs-test.mjs:36)–52 also passes the old value-haircut implementation. Tests import only PROBABLE.  
   **Change:** independently assert `netCell × netSumO / fullSumO`, require inequality from a naïve haircut in a chosen fixture, and add the signed PRO_DIST case. Scope “costs reduce each arm” to PROBABLE; it is false for harmful portfolios.

4. **[major] E5’s reported LHS robustness uses the pre-fix zero-tail model — RESULT.**  
   The fresh configuration at [e5-delivery.mjs:275](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:275) omits `tempt_tail`; validation at [e5-delivery.mjs:231](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:231) accepts missing, negative, oversized, or NaN tails. Existing tests would pass if verified diversion returned to zero.  
   **Change:** require finite `tempt_tail∈[0,1]`, carry or sweep it in the LHS, and pin default plus R=0 nonzero incidence.

5. **[major] E10 accepts invalid cost configurations — RESULT/API.**  
   [e10-costs.mjs:55](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e10-costs.mjs:55) accepts negative κ, NaN, κ≥1, and non-boolean `planningOn`. Negative κ creates extra project budget; κ=1/NaN produces NaNs.  
   **Change:** add fail-closed validation for finite κ in the supported `[0,1)` domain and a strict boolean planning switch.

6. **[major] Public design contracts describe rejected experiments — presentation only.**  
   E10 still specifies the value haircut, `.15/.03`, +2.3pp, and the forbidden ratio story at [E10-COSTS-DESIGN.md:10](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md:10). E5 still says pure `U(0,1)` and zero verified diversion at [E5-DELIVERY-DESIGN.md:39](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:39). E9 retains obsolete “robust” results. E5 additionally says stolen-funds cost “belongs to E10” at line 43, contradicting the de-overlap fix.  
   **Change:** put a generated current specification/results section first and move historical rounds to a clearly separated changelog. State that diversion already consumes budget while reducing delivered value and is not charged again in E10.

7. **[minor] CI and named-world quantifiers remain overstated — presentation only.**  
   E5’s R=0 CI remains unqualified at [e5-delivery.mjs:345](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:345). E9 says the advantage holds in “ALL worlds” at [e9-fullstack.mjs:296](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:296), but it evaluated four named scenarios.  
   **Change:** use `95% conditional-MC CI` consistently and say “all four named worlds.”

8. **[minor] The Chile example remains qualitative but still infers prevalence — presentation only.**  
   [E9-FULLSTACK-DESIGN.md:146](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:146)–150 says one case shows visibility bias is “pervasive,” while lines 162–164 acknowledge it does not establish capture.  
   **Change:** say the case is compatible with the mechanism; neither causal attribution nor prevalence is identified.

## 3. Publication readiness

| Experiment | Verdict | Single most important remaining item |
|---|---|---|
| E5 | **not-yet** | Make the temptation tail part of the LHS/validation/test contract; the current robustness result runs the wrong DGP. |
| E9 | **not-yet** | Use recycled residual consistently across headline, named worlds, sensitivities, agenda tables, and tests. |
| E10 | **not-yet** | Implement a genuinely shared retained-world net-budget estimand and regression-pin it, including PRO_DIST. |

Plain conclusion: the round-1 executable headline blockers are resolved and there is no new blocker. The remaining defects are majors, not headline refutations: propagation, world-sample consistency, test weakness, invalid-input handling, and public-contract drift.
