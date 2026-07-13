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
session id: 019f5cbd-4505-7782-aded-4841c7651c2f
--------
user
You are convening a HOSTILE ADVERSARIAL REFEREE POOL to attack three linked public-spending simulations — E5, E9, E10 —
BEFORE they are written up. Your job is to find every real defect, over-claim, calibration weakness, and methodological
hole a top-tier skeptical reviewer would raise. Be ruthless and specific. This is NOT a friendly pass. For EACH attack,
give: (a) the precise defect with file:line, (b) severity [blocker / major / minor], (c) a CONCRETE proposed change, and
(d) whether it threatens a RESULT/CLAIM or only presentation. Do NOT propose ideological rewrites of honest results —
attack on rigor, correctness, identification, over-claiming, and embargo, not on taste. An honest, well-supported claim
that you merely dislike is NOT a valid attack; say so if you find nothing wrong.

USE SUBAGENTS: fan out into the SIX adversary roles below IN PARALLEL, then synthesize a single ranked attack list.

READ (repo root C:\devel\claude-projects\distributed-governance-research):
- scripts/simulation/e4-v5/e5-delivery.mjs + e5-delivery-test.mjs   (E5: selection × delivery, delivered value)
- scripts/simulation/e4-v5/e9-fullstack.mjs + e9-fullstack-test.mjs (E9: planning × selection × delivery, Shapley)
- scripts/simulation/e4-v5/e10-costs.mjs + e10-costs-test.mjs       (E10: admin-cost layer, switchable planning)
- scripts/simulation/e4-v5/engine.mjs, contract.mjs, adapter.mjs    (E4 base engine, contract, embargo adapter)
- audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md, E9-FULLSTACK-DESIGN.md, E10-COSTS-DESIGN.md (designs + anchors + verdicts)
Run `npm run e5:delivery`, `e9:fullstack`, `e10:costs` and the three `:test` scripts individually if useful (the full
suite may time out; run scripts separately). Do NOT use rg with brace-globs.

CONTEXT (what they claim — attack these): E5 = delivered value at matched budget, delivery as an independent regime,
multiplicative composition (an accounting identity), full architecture ~+59% [+58.5,+59.7] of a full-information greedy
REFERENCE (not an optimum); delivery leakage anchored to Olken/IMF/Uganda-tail, monitoring split into detection (small,
Björkman-Svensson) + recovery (institutional). E9 = adds planning; Shapley attribution sums exactly to the diagonal;
SELECTION (~+37-43%) and DELIVERY (~+11%) are the large quantified layers; PLANNING is NOT quantified (its dominant
mechanism, agenda capture / second face of power, is not anchorable — direction anchored to COFOG / political budget
cycles / maintenance neglect, magnitude deferred; illustrative Chile mental-health example, severity 1 → planning ~+2-4%).
E10 = admin/machinery cost κ_C=0.15 (IDB Better Spending 16%-of-expenditure) vs κ_D=0.03 (e-procurement run-cost ceiling),
planning switchable OFF, costs widen the gap only above the value ratio (~2.7). Reporting embargo: percentages of the
reference only, NO x/D-C/N-fold multiplier notation, parity at 0.

THE SIX ADVERSARY ROLES (attack HARD, concrete):
1. MECHANISM-DESIGN / SIMULATION SKEPTIC: attack the estimands, the ratio-of-sums normalization, the multiplicative
   "accounting identity" (is it circular / does it smuggle the result?), the Shapley attribution's validity, the
   reductions (nSec=1→E5, costs-off→value stack, layers-off→E4), the bootstrap (does it understate uncertainty?), the
   greedy REFERENCE, and any place a cell can exceed the reference in a way that misleads.
2. CALIBRATION / IDENTIFICATION HAWK: attack every anchored number as a transport/identification failure — the Olken
   value-loss moment, the monitoring split, κ_C=0.15 / κ_D=0.03 (is IDB 16%-of-expenditure a legitimate anchor for a
   budget-share-removed? is κ_D an order of magnitude too high or too low?), the planning params. Where is a "declared"
   value doing load-bearing work it can't support?
3. OVER-CLAIM / SPIN PROSECUTOR: find every sentence in the code output / design docs that says more than the evidence
   supports. Is "+59%%" oversold? Is "publication-ready" premature? Is the Chile example creeping toward a conclusion?
   Is the E10 "costs widen the gap" framing selective (it can also narrow it)? Flag any asymmetric idealization.
4. EMBARGO / REPORTING AUDITOR: try to break the embargo (x/D-C/N-fold, parity-at-1, multiplier smuggling) in the
   emitted text; find any performance-multiplier that leaked; check the parity-at-0 convention holds everywhere.
5. DOUBLE-COUNTING / SCOPE ADVERSARY: does E10's admin cost double-count E5's delivery leakage? Does the monitoring
   coupling double-count the verified regime? Does E9's planning tilt reorder within-sector selection (contaminating
   the layer separation)? Are the layers actually separable or is there hidden leakage between them?
6. ROBUSTNESS / ADVERSARIAL-WORLD REFEREE: attack the single PROBABLE world — do the results survive PRO_CENTRAL,
   PRO_DIST, MYOPIA_OFF worlds? Is the headline cherry-picked to a favorable scenario? What one adversarial parameter
   setting most threatens each experiment's claim, and does it flip anything?

OUTPUT: per role a terse ranked attack list (defect / severity / file:line / concrete change / threatens-result?). Then a
SYNTHESIS: the TOP 12-18 attacks across all three experiments ranked by severity, each marked [E5]/[E9]/[E10]/[cross] and
[blocker]/[major]/[minor], with the concrete change and whether it threatens a result or only presentation. Be honest:
if an experiment is already sound on a dimension, say "no valid attack found." Do NOT edit files — propose; the author's
pro-Core-v0 auditor will adjudicate each attack and apply only the justified ones.
codex
I’m convening the six-role referee pool now. The runtime allows three subagents alongside me, so I’m pairing complementary roles across three parallel tracks while keeping each role’s findings separate; I’ll independently verify citations, execute the targeted scripts, and synthesize only attacks that survive cross-checking.
  → Read repository instructions and map the E5/E9/E10 implementation, tests, designs, and emitted claims
  • Run six adversarial role reviews in parallel tracks and execute targeted simulations/tests
  • Verify every candidate defect against exact file lines and de-duplicate or reject weak attacks
  • Produce per-role ranked findings and a cross-experiment top attack synthesis
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'Get-Content -Raw AGENTS.md; Get-Content -Raw agents/routing-rules-codex-md.md; Get-Content -Raw agents/review-all.md; git status --short; Get-ChildItem scripts/simulation/e4-v5; Get-ChildItem audits/2026-07-12-e5-remodel; Get-Content -Raw package.json' in C:\devel\claude-projects\distributed-governance-research
 succeeded in 377ms:


    Directorio: C:\devel\claude-projects\distributed-governance-research\scripts\simulation\e4-v5


Mode                 LastWriteTime         Length Name                                                                 
----                 -------------         ------ ----                                                                 
-a----        11-07-2026     23:58           4674 adapter.mjs                                                          
-a----        11-07-2026     20:37           4038 atlas-data.json                                                      
-a----        11-07-2026     20:37           3914 atlas.mjs                                                            
-a----        12-07-2026     14:00          18962 contract.mjs                                                         
-a----        11-07-2026     20:55           4035 controls.mjs                                                         
-a----        13-07-2026     11:58           3225 e10-costs-test.mjs                                                   
-a----        13-07-2026     12:54           7270 e10-costs.mjs                                                        
-a----        13-07-2026      6:15           9387 e5-delivery-test.mjs                                                 
-a----        13-07-2026      6:27          28991 e5-delivery.mjs                                                      
-a----        12-07-2026     14:01           4072 e5-layers.mjs                                                        
-a----        13-07-2026     11:03           6729 e9-fullstack-test.mjs                                                
-a----        13-07-2026     11:46          25089 e9-fullstack.mjs                                                     
-a----        12-07-2026     22:27          11577 engine.mjs                                                           
-a----        12-07-2026     12:12           9589 evidence.mjs                                                         
-a----        12-07-2026     12:28           6358 frontier.mjs                                                         
-a----        12-07-2026     12:18           4674 scenario-configs.mjs                                                 
-a----        12-07-2026     12:47           7416 scenarios.mjs                                                        
-a----        12-07-2026     11:58           3244 schema.mjs                                                           
-a----        12-07-2026     14:02          11897 test.mjs                                                             
-a----        11-07-2026     21:13           3536 theorem-check.mjs                                                    


    Directorio: C:\devel\claude-projects\distributed-governance-research\audits\2026-07-12-e5-remodel


Mode                 LastWriteTime         Length Name                                                                 
----                 -------------         ------ ----                                                                 
-a----        13-07-2026      5:20           7800 CODEX-E5-FRIENDLY-VERDICT.md                                         
-a----        13-07-2026      6:11          14345 CODEX-E5-FRIENDLY2-VERDICT.md                                        
-a----        13-07-2026     11:00           7008 CODEX-E9-ANCHOR-PANEL-VERDICT.md                                     
-a----        13-07-2026      6:56          11050 CODEX-E9-FRIENDLY-VERDICT.md                                         
-a----        13-07-2026     10:24           9737 CODEX-E9-FRIENDLY2-VERDICT.md                                        
-a----        13-07-2026     12:55           3703 E10-COSTS-DESIGN.md                                                  
-a----        13-07-2026      6:19          14913 E5-DELIVERY-DESIGN.md                                                
-a----        13-07-2026     14:18          23755 E9-FULLSTACK-DESIGN.md                                               
-a----        13-07-2026      5:36           5296 FINDING5-DRAFT.md                                                    
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



Get-Content : No se encuentra la ruta de acceso 'C:\devel\claude-projects\distributed-governance-research\AGENTS.md' 
porque no existe.
En línea: 2 Carácter: 1
+ Get-Content -Raw AGENTS.md; Get-Content -Raw agents/routing-rules-cod ...
+ ~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : ObjectNotFound: (C:\devel\claude...earch\AGENTS.md:String) [Get-Content], ItemNotFoundEx 
   ception
    + FullyQualifiedErrorId : PathNotFound,Microsoft.PowerShell.Commands.GetContentCommand
 
Get-Content : No se encuentra la ruta de acceso 
'C:\devel\claude-projects\distributed-governance-research\agents\routing-rules-codex-md.md' porque no existe.
En línea: 2 Carácter: 29
+ ...  AGENTS.md; Get-Content -Raw agents/routing-rules-codex-md.md; Get-Co ...
+                 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : ObjectNotFound: (C:\devel\claude...les-codex-md.md:String) [Get-Content], ItemNotFoundEx 
   ception
    + FullyQualifiedErrorId : PathNotFound,Microsoft.PowerShell.Commands.GetContentCommand
 
Get-Content : No se encuentra la ruta de acceso 
'C:\devel\claude-projects\distributed-governance-research\agents\review-all.md' porque no existe.
En línea: 2 Carácter: 80
+ ... ting-rules-codex-md.md; Get-Content -Raw agents/review-all.md; git st ...
+                             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : ObjectNotFound: (C:\devel\claude...s\review-all.md:String) [Get-Content], ItemNotFoundEx 
   ception
    + FullyQualifiedErrorId : PathNotFound,Microsoft.PowerShell.Commands.GetContentCommand
 

codex
The repository does not actually contain the referenced `AGENTS.md` or `agents/` rule files; I’m therefore applying the routing text supplied in your prompt directly. Since this is read-only review work, no code-artifact or commit-time routing is triggered. I’ve begun the six adversarial tracks and am running each simulation and test independently.
2026-07-13T18:29:50.155399Z ERROR codex_core::tools::router: error=Exit code: 1
Wall time: 0.2 seconds
Output:
En línea: 2 Carácter: 65
+ ... /c findstr /n "^" scripts\simulation\e4-v5\e9-fullstack.mjs & cmd /c  ...
+                                                                 ~
No se permite usar el carácter de Y comercial (&). El operador & está reservado para un uso futuro; encierre un 
símbolo de Y comercial entre comillas dobles ("&") para pasarlo como parte de una cadena.
    + CategoryInfo          : ParserError: (:) [], ParentContainsErrorRecordException
    + FullyQualifiedErrorId : AmpersandNotAllowed
 

2026-07-13T18:29:50.155485Z ERROR codex_core::tools::router: error=Exit code: 1
Wall time: 0.2 seconds
Output:
En línea: 2 Carácter: 62
+ ... md /c findstr /n "^" scripts\simulation\e4-v5\e10-costs.mjs & cmd /c  ...
+                                                                 ~
No se permite usar el carácter de Y comercial (&). El operador & está reservado para un uso futuro; encierre un 
símbolo de Y comercial entre comillas dobles ("&") para pasarlo como parte de una cadena.
    + CategoryInfo          : ParserError: (:) [], ParentContainsErrorRecordException
    + FullyQualifiedErrorId : AmpersandNotAllowed
 

2026-07-13T18:29:50.155527Z ERROR codex_core::tools::router: error=Exit code: 1
Wall time: 0.2 seconds
Output:
En línea: 2 Carácter: 64
+ ...  /c findstr /n "^" scripts\simulation\e4-v5\e5-delivery.mjs & cmd /c  ...
+                                                                 ~
No se permite usar el carácter de Y comercial (&). El operador & está reservado para un uso futuro; encierre un 
símbolo de Y comercial entre comillas dobles ("&") para pasarlo como parte de una cadena.
    + CategoryInfo          : ParserError: (:) [], ParentContainsErrorRecordException
    + FullyQualifiedErrorId : AmpersandNotAllowed
 

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npm run e9:fullstack' in C:\devel\claude-projects\distributed-governance-research
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npm run e10:costs:test' in C:\devel\claude-projects\distributed-governance-research
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npm run e9:fullstack:test' in C:\devel\claude-projects\distributed-governance-research
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npm run e10:costs' in C:\devel\claude-projects\distributed-governance-research
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npm run e5:delivery:test' in C:\devel\claude-projects\distributed-governance-research
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npm run e5:delivery' in C:\devel\claude-projects\distributed-governance-research
 succeeded in 14399ms:

> distributed-governance-research@0.0.0 e10:costs
> node scripts/simulation/e4-v5/e10-costs.mjs

E10 — the COST layer on the delivered-value stack (PROBABLE world). Parity at the oracle reference.
PLANNING is OFF by default (its magnitude is deferred); COSTS are administrative/machinery (κ).

value base: E5 (planning OFF)   ·   κ_C=0.15 (central machinery) · κ_D=0.03 (Core v0 platform)  [direction anchored, magnitude declared-conservative]
VALUE ONLY (costs off):   status quo +34.2% · Core v0 +93.3%  → gain +59.1%
WITH ADMIN COSTS:         status quo +29.1% · Core v0 +90.5%  → gain +61.4%
  the admin-cost layer adds +2.3% to the gap (the central's heavier machinery costs more).

switch check — costs OFF (κ=0): with-costs gain +59.1% == value-only gain +59.1% (reduces to the value stack).

Admin-cost sensitivity (κ_D=0.03 fixed; κ_C swept — magnitude declared, direction anchored):
   κ_C     with-costs gain     admin-cost contribution
   0.05       +57.9%                -1.1%
   0.10       +59.6%                +0.6%
   0.15       +61.3%                +2.3%
   0.25       +64.7%                +5.8%
   → the central runs the value-proxy / allocation / prioritization / AI-fiscalization machinery Core v0
     eliminates, so κ_C > κ_D widens the gap once the ratio clears the value ratio (~2.7). Direction anchored
     (IDB Better Spending 2018; low e-government platform costs); point magnitudes declared-and-conservative.

 succeeded in 16527ms:

> distributed-governance-research@0.0.0 e10:costs:test
> node scripts/simulation/e4-v5/e10-costs-test.mjs

  ok   costs off: with-costs gain == value-only gain
  ok   costs off: admin-cost contribution == 0
  ok   planning off by default (via E5)
  ok   planning-off value base == E5 S/A2 exactly
  ok   planning on switches the value base to E9
  ok   central value haircut = (1 − κ_C)
  ok   Core v0 value haircut = (1 − κ_D)
  ok   high κ_C/κ_D ratio widens the gap
  ok   low κ_C/κ_D ratio narrows the gap
  ok   the crossover is at κ_C/κ_D ≈ the value ratio

E10 costs: 10 passed, 0 failed.

 succeeded in 21420ms:

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

 succeeded in 27363ms:

> distributed-governance-research@0.0.0 e9:fullstack
> node scripts/simulation/e4-v5/e9-fullstack.mjs

E9 — FULL STACK: PLANNING, SELECTION and DELIVERY (built on E5, PROBABLE world). Parity at the oracle
(a global full-information greedy REFERENCE, not a guaranteed optimum). No compound multiplier.

worlds kept: 1000   (10 COFOG sectors; assoc=-0.6, secValSpread=0.184, creditCoef=0.076, agendaCapture=0, strict residual)
STATUS QUO (all-central: central planning + selection + opaque delivery):     +29.4% of reference
CORE v0 FULL (all-distributed: distributed planning + selection + verified):   +77.8% of reference
FULL-STACK gain (Core v0 − status quo): +48.4%  95% CI [+47.8%, +49.0%]

SHAPLEY attribution of the full-stack gain to each layer (sums exactly to the gain) with 95% CIs:
  planning +0.6% [+0.3%, +0.9%] · selection +37.0% [+36.5%, +37.5%] · delivery +10.8% [+10.5%, +11.1%]
Planning as a CONDITIONAL simple effect (distributed − central planning), context-dependent:
  under central selection:     +7.9% [+7.4%, +8.5%]
  under distributed selection: -6.2% [-6.5%, -5.8%]   (the Core v0 context)
budget utilization by cell (strict residual): status quo +94.1% · Core v0 +86.8%

With residual RECYCLING (removes the utilization confound): planning Shapley +3.2% [+2.9%, +3.5%],
  planning|distributed-sel +0.1%, full-stack gain +57.8% (utilization → ~100% both cells).

Planning Shapley over the DECLARED sector-value dispersion by need↔visibility association (the effect is
modest and CONDITIONAL — not a robust large positive layer):
   secValSpread \ assoc   -1.0     -0.6      0.0     +0.6
      0.1                   -0.3%    -0.6%    -1.2%    -1.2%
      0.3                   +4.4%    +3.9%    +3.0%    +2.5%
      0.6                  +16.9%   +14.5%   +13.2%   +13.1%
   → the SOFT credit distortion alone makes planning a small, sign-ambiguous contribution.

Agenda capture (second face of power — central keeps its lowest-perceived COFOG sectors OFF the menu):
   sectors captured   planning Shapley   planning|distributed-sel   full-stack gain
    0/10                +0.7%             -6.0%             +48.5%
    1/10                +2.3%             -3.5%             +49.1%
    2/10                +4.7%             +0.5%             +50.2%
    3/10                +7.9%             +5.3%             +51.9%
   → agenda capture is the DOMINANT planning mechanism, and it is NOT anchorable today (no cited universal
     whole-function-exclusion moment, no worked country example yet), so it is PROPOSED CONTINUATION WORK.

FRAMING (author decision): DO NOT report a planning-layer FIGURE. The soft-only slice above (~0–3%) omits
agenda capture — the mechanism that moves the needle — so it UNDERSTATES the layer; headlining it would read
as "planning is small," which is not what it means. Report SELECTION and DELIVERY quantitatively (the large,
robust, anchored layers); present PLANNING QUALITATIVELY — mechanism identified (agenda capture / second
face of power), DIRECTION anchored (COFOG; election visible-spending shift; maintenance neglect), MAGNITUDE
deferred to country-specific continuation (e.g. a Chile example — illustrative, not conclusive).

2026-07-13T18:30:34.563996Z ERROR codex_core::tools::router: error=Exit code: 1
Wall time: 0.2 seconds
Output:
scripts/simulation/e4-v5/scenario-configs.mjs:10://   PRO_CENTRAL   = a declared central-favourable ENDPOINT (every knob central-favourable; some sit outside the
scripts/simulation/e4-v5/scenario-configs.mjs:17://   PROBABLE      = the source-motivated declared reference point (~+54.6%).
scripts/simulation/e4-v5/scenario-configs.mjs:18://   PRO_DIST      = the distributed arm's favourable case (~+206%).
scripts/simulation/e4-v5/scenario-configs.mjs:19://   MYOPIA_OFF    = a DIAGNOSTIC CONTRAST (not a scenario): PROBABLE with ONLY the two harm-gate coords changed
scripts/simulation/e4-v5/scenario-configs.mjs:31:export const COMPOSITION = { f_active: 0.05, f_deleg: 0.35, k_deleg: 1.5, phi_prof: 0.85, d_bias: 0.1 };
scripts/simulation/e4-v5/scenario-configs.mjs:32:export const PROBABLE = { ...COMPOSITION, a_V: 0.5, b_V: 3.5, p: 1.0, a_r: 1.5, b_r: 8, pi_opp: 0.15, mu_opp: 3.0,
scripts/simulation/e4-v5/scenario-configs.mjs:37:export const PRO_CENTRAL = { ...COMPOSITION, a_V: 1.0, b_V: 1.5, p: 1.0, a_r: 0.8, b_r: 14, pi_opp: 0.03, mu_opp: 1.5,
scripts/simulation/e4-v5/scenario-configs.mjs:40:// GENUINE myopia-only contrast: PROBABLE with ONLY the two harm-gate coordinates changed. Winner: Core v0 (~ +38%).
scripts/simulation/e4-v5/scenario-configs.mjs:41:export const MYOPIA_OFF = { ...PROBABLE, s_exp: 0.5, b_H_C: 1.3 };
scripts/simulation/e4-v5/scenario-configs.mjs:42:// Harm-aware AND competent central bundle (NOT myopia-isolation): PROBABLE + harm sight + unbiased + precise + no
scripts/simulation/e4-v5/scenario-configs.mjs:44:export const NO_MYOPIA = { ...PROBABLE, s_exp: 0.5, b_H_C: 1.3, w: 0.1, a: 0.0, b: 1.0, lambda: 0.0, zeta: 0.85, sigma_C: 0.35 };
scripts/simulation/e4-v5/scenario-configs.mjs:46:export const PRO_DIST = { ...COMPOSITION, a_V: 0.25, b_V: 4.5, p: 1.0, a_r: 2.5, b_r: 6, pi_opp: 0.28, mu_opp: 3.5,
scripts/simulation/e4-v5/scenario-configs.mjs:49:export const SCENARIO_WORLD = { N: 1500, K: 150 };
rg: scripts/simulation/e4-v5/*.mjs: El nombre de archivo, el nombre de directorio o la sintaxis de la etiqueta del volumen no son correctos. (os error 123)

 succeeded in 52173ms:

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
  ok   20-seed replication: between-seed sd is small
  ok   20-seed replication: mean full gain is materially positive
  ok   joint LHS sweep: full architecture wins in the large majority of sampled draws
  ok   joint LHS sweep: coverage/selection effect (A3−S) positive in the large majority
  ok   joint LHS sweep: even the worst sampled draw keeps the full gain near/above parity

E5 delivery: 40 passed, 0 failed.

codex
All six commands are still running concurrently; none has failed or produced an early error. While they finish, I’m tracing the estimands and normalization paths directly from the source so that passing tests will not be mistaken for methodological validation.
 succeeded in 94347ms:

> distributed-governance-research@0.0.0 e5:delivery
> node scripts/simulation/e4-v5/e5-delivery.mjs

E5 — delivered value: SELECTION-by-DELIVERY (four-cell design on the clean E4 engine, PROBABLE world).
Parity at the oracle reference (perfect-delivery full-information greedy). No compound multiplier; layers reported separately.

worlds kept: 1200
SELECTION efficiency (perfect delivery, = E4):  central +44.1% · distributed +98.2%
DELIVERY efficiency (delivered/selected):        opaque +77.5% · verified +95.0%

Four-cell delivered value as a fraction of the oracle reference:
                       opaque delivery     verified delivery
  central selection    S   +34.2%          A1  +41.9%
  distributed sel.     A3  +76.1%          A2  +93.3%

diversion incidence (unweighted share of funded projects):     opaque +21.7% · verified +0.0%
value leakage (S-weighted undelivered value; ~Olken moment):   opaque +22.5% · verified +5.0%

Main effects (percentage points of the oracle reference) with 95% bootstrap CIs, read SEPARATELY:
  DELIVERY effect:   at central +7.7% [+7.4%, +8.1%] · at distributed +17.2% [+16.8%, +17.4%]
  SELECTION effect:  at opaque +41.9% [+41.3%, +42.6%] · at verified +51.4% [+50.7%, +52.0%]
  INTERACTION:       +9.4% [+9.2%, +9.7%]  (>0 ⇒ verified delivery amplifies the selection gain)
  FULL architecture (A2 − S): +59.1%  95% CI [+58.5%, +59.7%]

Composition — the two layers compose MULTIPLICATIVELY (an accounting identity, delivery applied per project):
  actual A2 = +93.3%  ·  identity (selection · delivery) = +93.3%
  additive prediction (sum of main effects) = +83.8%  → short by the interaction.
  The positive interaction is the level-effect signature of multiplicative composition.

Monitoring coupling (step 2) — distributed coverage fiscalizes delivery via DETECTION only (mon_detect=0.05, recovery=0 community-only):
  delivered fraction, distributed − central:  opaque +0.2% · verified +0.0% (saturated)
  weak-control cell A3 rises +76.1% → +76.3% — SMALL: community detection without institutional recovery barely helps a weak-control regime.
  detection-band sweep (opaque monitoring dividend):
     mon_detect 0.00  →  dividend(opaque) +0.1%  ·  A3 +76.1%
     mon_detect 0.05  →  dividend(opaque) +0.3%  ·  A3 +76.3%
     mon_detect 0.10  →  dividend(opaque) +0.5%  ·  A3 +76.4%
  with institutional recovery linkage (mon_recovery=0.20): opaque dividend +3.9% — the delivery gain needs the FORMAL recovery channel, not eyeballs alone.

R=0 robustness (no reputational stake): verified delivery +94.4%, verified diversion incidence +5.5%, full +58.6% 95% CI [+57.9%, +59.2%] — the gain survives without the (unanchored) reputation term.

Opaque-band sensitivity (delivery effect and full-architecture gain as the status-quo leak worsens):
   leak(opaque)   delivery-effect@distributed   full (A2−S)
     +24.3%           +19.1%                  +59.8%
     +28.6%           +23.0%                  +61.7%
     +40.1%           +34.9%                  +66.8%
     +56.8%           +50.9%                  +74.2%
     +68.9%           +62.9%                  +79.5%
   → coverage still wins across the whole band; a worse status quo only widens the delivery gain.

Cost/complexity-correlated delivery risk (bigger projects harder to monitor; cost ⟂ value S in the engine):
   val_risk 0.0  →  opaque delivery central +77.6% · distributed +77.6% (arm gap -0.0%)  ·  full +59.0%
   val_risk 0.3  →  opaque delivery central +77.6% · distributed +77.6% (arm gap -0.0%)  ·  full +58.8%
   val_risk 0.6  →  opaque delivery central +77.5% · distributed +77.5% (arm gap -0.0%)  ·  full +58.4%
   → under c ⟂ S the arm gap stays ~0, so coverage is NOT systematically undone by cost/size delivery risk.

20-seed replication of the full gain: mean +59.0% · sd +0.5% · range [+57.6%, +59.8%].
Joint LHS sweep (64 draws over the declared delivery ranges): full gain median +59.7%, range [+52.7%, +67.0%];
   full architecture wins in 100% and the coverage/selection effect (A3−S) is positive in 100% of the sampled draws.

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$files = @('"'scripts/simulation/e4-v5/e5-delivery.mjs','scripts/simulation/e4-v5/e5-delivery-test.mjs','scripts/simulation/e4-v5/e9-fullstack.mjs','scripts/simulation/e4-v5/e9-fullstack-test.mjs','scripts/simulation/e4-v5/e10-costs.mjs','scripts/simulation/e4-v5/e10-costs-test.mjs','scripts/simulation/e4-v5/engine.mjs','scripts/simulation/e4-v5/contract.mjs','scripts/simulation/e4-v5/adapter.mjs','audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md','audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md','audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md'); foreach ("'$f in $files) { $c=(Get-Content $f).Count; $bytes=(Get-Item $f).Length; Write-Output "$f`t$c lines`t$bytes bytes" }' in C:\devel\claude-projects\distributed-governance-research
 succeeded in 218ms:
scripts/simulation/e4-v5/e5-delivery.mjs	366 lines	28991 bytes
scripts/simulation/e4-v5/e5-delivery-test.mjs	118 lines	9387 bytes
scripts/simulation/e4-v5/e9-fullstack.mjs	323 lines	25089 bytes
scripts/simulation/e4-v5/e9-fullstack-test.mjs	89 lines	6729 bytes
scripts/simulation/e4-v5/e10-costs.mjs	95 lines	7270 bytes
scripts/simulation/e4-v5/e10-costs-test.mjs	55 lines	3225 bytes
scripts/simulation/e4-v5/engine.mjs	209 lines	11577 bytes
scripts/simulation/e4-v5/contract.mjs	231 lines	18962 bytes
scripts/simulation/e4-v5/adapter.mjs	60 lines	4674 bytes
audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md	181 lines	14913 bytes
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md	290 lines	23755 bytes
audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md	50 lines	3703 bytes

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content '"'scripts/simulation/e4-v5/engine.mjs' | ForEach-Object { "'$i++; '"'{0,4}: {1}' -f "'$i, $_ }' in C:\devel\claude-projects\distributed-governance-research
 succeeded in 194ms:
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

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content '"'scripts/simulation/e4-v5/contract.mjs' | ForEach-Object { "'$i++; '"'{0,4}: {1}' -f "'$i, $_ }' in C:\devel\claude-projects\distributed-governance-research
 succeeded in 196ms:
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
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content '"'scripts/simulation/e4-v5/adapter.mjs' | ForEach-Object { "'$i++; '"'{0,4}: {1}' -f "'$i, $_ }' in C:\devel\claude-projects\distributed-governance-research
 succeeded in 197ms:
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
  22: 
  23: // NOTE: this rejects the TESTED token classes (ASCII/Unicode/confusable/HTML-entity 'x' after a number;
  24: // numeric or number-word N-fold / N-times; bare twice/double/triple/quadruple; D/C or C/D any case; zero-width
  25: // splits). It is not a proof against every conceivable obfuscation — see the test suite for the covered classes.
  26: export function assertNoEmbargoedTokens(text) {
  27:   const norm = text.replace(ZERO_WIDTH, '').replace(HTML_MULT, 'x').replace(CONF_X, 'x').replace(CONF_HYPHEN, '-').replace(CONF_SLASH, '/');
  28:   const hits = [];
  29:   if (MULT_SUFFIX.test(norm)) hits.push('multiplier-suffix (number+x, incl. Unicode/HTML confusables)');
  30:   if (NUM_FOLD.test(norm)) hits.push('N-fold / N-times multiplier phrasing (numeric or word)');
  31:   if (WORD_MULT.test(norm)) hits.push('word multiplier (twice/thrice/double/triple/quadruple)');
  32:   if (RATIO_TOKEN.test(norm)) hits.push('institution ratio (D/C or C/D, any case)');
  33:   for (const tok of EMBARGO_TOKENS) if (text.includes(tok)) hits.push(`token '${tok}'`);
  34:   if (hits.length) throw new Error(`[embargo] rendered text contains forbidden performance notation: ${hits.join(', ')}`);
  35:   return true;
  36: }
  37: 
  38: // A print helper that routes every line through the embargo before emitting (for scenarios/frontier that print directly).
  39: export function safeLog(...lines) { const t = lines.join(' '); assertNoEmbargoedTokens(t); console.log(t); }
  40: 
  41: export function renderReport(out) {
  42:   const errs = validateOutput(out);
  43:   if (errs.length) throw new Error(`[embargo] output failed closed schema: ${errs.join('; ')}`);
  44:   const pct = (x) => (100 * x).toFixed(1) + '%';                 // signed fraction of oracle, NOT a multiplier
  45:   const mag = out.m_Ralpha
  46:     ? Object.entries(out.m_Ralpha).map(([al, iv]) => `  α=${al}: [${pct(iv[0])}, ${pct(iv[1])}] of oracle`).join('\n')
  47:     : '  (magnitude layer not computed)';
  48:   const sh = (x) => (100 * x).toFixed(0) + '%';
  49:   const text = [
  50:     `E4 evidence — contract ${out.contract_version} — θ:${out.theta_id}`,
  51:     `  m̂ (signed fraction of full-information oracle, parity at 0): ${pct(out.m_hat)}  CI=[${pct(out.ci[0])}, ${pct(out.ci[1])}]`,
  52:     `  sign backbone over D_F: Core v0 wins ${sh(out.df_dist_share)} of sampled θ-points · central ${sh(out.df_cent_share)} · parity ${sh(out.df_par_share)}  (a COUNT of resolved points, not a probability)`,
  53:     `  magnitude over R_α (declared sensitivity boxes; a value >100% means the losing arm destroys value, so the gap exceeds the oracle):`,
  54:     mag,
  55:     `  status → sign:${out.sign_status}  materiality:${out.materiality_status}  degeneracy:${out.degeneracy_status}  numerical:${out.numerical_status}`,
  56:     `  π_deg (degenerate-world share): ${pct(out.pi_deg)}`,
  57:   ].join('\n');
  58:   assertNoEmbargoedTokens(text);
  59:   return text;
  60: }

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content '"'scripts/simulation/e4-v5/e5-delivery.mjs' | ForEach-Object { "'$i++; if ($i -ge 1 -and $i -le 190) { '"'{0,4}: {1}' -f "'$i, $_ } }' in C:\devel\claude-projects\distributed-governance-research
 succeeded in 196ms:
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
  19: // opportunistic and DIVERT iff temptation t~U(0,1) exceeds the regime deterrent  det = p_det·[(1−a(1−r)) + rep],
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
  36: //           ante, so no opportunistic executor diverts (matches the corpus finding: deterrence pre-empts punishment).
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
  47: // verified regime's near-zero diversion is a CONDITIONAL ex-ante-deterrence result (Olken 2007; Avis-Ferraz-Finan
  48: // 2018; Becker 1968), not an empirical zero. Community coverage lifts DETECTION only (mon_detect, small/fragile:
  49: // Björkman-Svensson 2009 QJE with failed replications; Molina et al. 2016); RECOVERY needs institutional follow-up, so
  50: // mon_recovery=0 for community-only coverage (Afridi-Iversen 2014 MGNREGA). Report R=0 robustness always.
  51: export const DELIVERY = {
  52:   pi_hon:   0.78,   // honest share; identified so the opaque case hits the Olken-centered value-loss moment (not observed prevalence)
  53:   loss_hon: 0.05,   // ordinary execution loss (Rasul–Rogger supports a substantial upper tail; the scalar is DECLARED)
  54:   //                p_det  a(advance) r(recovery) gamma(guarantee) rep(reputation)
  55:   opaque:   { p_det: 0.04, a: 0.80, r: 0.00, gamma: 0.00, rep: 0.00, note: 'weak control: announced-audit-level exposure, unprotected advances, no recovery/guarantee/reputation' },
  56:   verified: { p_det: 0.75, a: 0.20, r: 0.50, gamma: 0.10, rep: 0.40, note: 'architecture: 20% advance exposure (DECLARED reference; World Bank normal advance ~10%) + ~10% performance guarantee + recovery + reputational stake (magnitudes DECLARED)' },
  57:   // MONITORING COUPLING (step 2), SPLIT into two channels (Codex + agent): Core v0's distributed coverage observes
  58:   // delivery, but community coverage credibly lifts only DETECTION (deterrence), not RECOVERY (clawback needs
  59:   // institutional follow-up). p_det_eff = p_det + mon_detect·(1−p_det); r_eff = r + mon_recovery·(1−r).
  60:   mon_detect:   0.0,   // coverage-only detection lift; anchored band 0.0–0.10 (ref 0.05); small + fragile
  61:   mon_recovery: 0.0,   // coverage-only recovery lift; 0 for community-only (formal linkage 0.09–0.36 = the verified regime)
  62:   // VALUE/COMPLEXITY-CORRELATED DELIVERY RISK (robustness, breaks delivery↔value independence): bigger/more complex
  63:   // projects are harder to monitor, so effective detection falls with the project's cost percentile:
  64:   //   p_det_proj = p_det · (1 − val_risk · costPct). Default 0 = delivery independent of project size (the base model).
  65:   //   >0 makes the delivered fraction depend on WHICH projects are funded, so the cross-arm delivery efficiencies can
  66:   //   diverge (a genuine, non-identity interaction between selection and delivery).
  67:   val_risk: 0.0,
  68: };
  69: 
  70: function deterrent(reg, pDet) { return pDet * ((1 - reg.a * (1 - reg.r)) + (reg.gamma || 0) + reg.rep); }
  71: 
  72: // The selecting arm's effective delivery regime: distributed coverage lifts detection (and, only with institutional
  73: // linkage, recovery). mDet/mRec are the coverage lifts (0 for the central arm).
  74: function coupledRegime(reg, mDet, mRec) {
  75:   if (!mDet && !mRec) return reg;
  76:   return { ...reg, p_det: reg.p_det + mDet * (1 - reg.p_det), r: reg.r + mRec * (1 - reg.r) };
  77: }
  78: 
  79: // Per-project delivered fraction + diversion flag. detMult scales this project's detection (value/complexity risk).
  80: function deliveredFraction(reg, honest, tempt, del, detMult) {
  81:   if (honest) return { f: 1 - del.loss_hon, diverts: false };
  82:   const diverts = tempt > deterrent(reg, reg.p_det * detMult);   // opportunistic: divert iff temptation beats the deterrent
  83:   if (!diverts) return { f: 1 - del.loss_hon, diverts: false };
  84:   const f = 1 - reg.a * (1 - reg.r) - del.loss_hon;  // loses the unrecovered advance (recovery r may be monitoring-lifted)
  85:   return { f: f < 0 ? 0 : f, diverts: true };
  86: }
  87: 
  88: // Delivered value + robustness diagnostics for a funded set under a regime, reusing per-project executor draws (shared
  89: // across all four cells — the design's matched seeds). mDet/mRec = monitoring lifts; cfg gives the cost range for the
  90: // value/complexity risk (bigger projects harder to monitor). Exported so E9 (the full stack) reuses the SAME delivery
  91: // machinery on top of a planning layer — E9 = planning × E5.
  92: export function deliveredCell(projects, funded, reg, exec, del, mDet, mRec, cfg) {
  93:   const eff = coupledRegime(reg, mDet, mRec);
  94:   const vr = del.val_risk || 0, span = cfg.c_hi - cfg.c_lo;
  95:   let v = 0, lost = 0, nDiv = 0;
  96:   for (const j of funded) {
  97:     const costPct = span > 0 ? (projects[j].c - cfg.c_lo) / span : 0;     // 0..1 complexity proxy
  98:     const detMult = 1 - vr * costPct;                                     // harder to monitor when bigger
  99:     const { f, diverts } = deliveredFraction(eff, exec.honest[j], exec.tempt[j], del, detMult);
 100:     v += projects[j].S * f;
 101:     lost += projects[j].S * (1 - f);                 // value not delivered (diversion + ordinary loss)
 102:     if (diverts) nDiv++;
 103:   }
 104:   return { v, lost, nDiv, nFund: funded.length };
 105: }
 106: 
 107: // One world: worlds are drawn from `rng` (identical to the E4 estimand's stream), executors from a SEPARATE `execRng`
 108: // so E5 reduces to E4 EXACTLY on the same seed. Evaluate the oracle (perfect delivery) and the four cells.
 109: function runWorld2x2(cfg, rng, execRng, del) {
 110:   const projects = generateWorld(cfg, rng);
 111:   if (projects.length === 0) return null;
 112:   let totalCost = 0; for (const pr of projects) totalCost += pr.c;
 113:   const budget = cfg.phi * totalCost;
 114: 
 115:   const honest = new Array(projects.length), tempt = new Array(projects.length);
 116:   for (let j = 0; j < projects.length; j++) { honest[j] = execRng.u() < del.pi_hon; tempt[j] = execRng.u(); }
 117:   const exec = { honest, tempt };
 118: 
 119:   const setC = fundedSet(projects, 'M_C', cfg, budget, { creditTilt: true });
 120:   const setD = fundedSet(projects, 'M_D', cfg, budget);
 121:   const setO = fundedSet(projects, 'S',   cfg, budget);
 122: 
 123:   let O = 0; for (const j of setO) O += projects[j].S;      // oracle at PERFECT delivery = the E4 reference
 124:   const selC = (() => { let s = 0; for (const j of setC) s += projects[j].S; return s; })();
 125:   const selD = (() => { let s = 0; for (const j of setD) s += projects[j].S; return s; })();
 126: 
 127:   const mD = del.mon_detect || 0, mR = del.mon_recovery || 0;   // distributed arm's monitoring lifts
 128:   return {
 129:     O, selC, selD,
 130:     S:  deliveredCell(projects, setC, del.opaque,   exec, del, 0,  0,  cfg),   // central: no coverage lift
 131:     A1: deliveredCell(projects, setC, del.verified, exec, del, 0,  0,  cfg),
 132:     A3: deliveredCell(projects, setD, del.opaque,   exec, del, mD, mR, cfg),   // distributed: coverage lifts detection (+recovery if linked)
 133:     A2: deliveredCell(projects, setD, del.verified, exec, del, mD, mR, cfg),
 134:   };
 135: }
 136: 
 137: // Ratio-of-sums estimand over worlds (robust; a tiny-O world cannot dominate). Everything normalized by ΣO. Worlds and
 138: // executors use SEPARATE PRNG streams, so the world stream is identical to the E4 estimand's (exact reduction). Also
 139: // returns diversion incidence, leakage, and a world-cluster bootstrap CI on the full-architecture gain.
 140: export function delivered2x2(cfg, { nWorlds = NUM.n_worlds.value, seed = NUM.seed.value, delivery = DELIVERY } = {}) {
 141:   validateDelivery(delivery);
 142:   const rng = makeRng(seed);
 143:   const execRng = makeRng((seed ^ 0x5bd1e995) >>> 0);      // separate stream ⇒ worlds match the E4 estimand exactly
 144:   const W = [];
 145:   const t = { O: 0, selC: 0, selD: 0 };
 146:   for (const c of ['S', 'A1', 'A3', 'A2']) { t[c + 'v'] = 0; t[c + 'lost'] = 0; t[c + 'div'] = 0; t[c + 'fund'] = 0; }
 147:   for (let w = 0; w < nWorlds; w++) {
 148:     const r = runWorld2x2(cfg, rng, execRng, delivery);
 149:     if (!r || !(r.O > 0)) continue;
 150:     W.push({ O: r.O, Sv: r.S.v, A1v: r.A1.v, A3v: r.A3.v, A2v: r.A2.v });
 151:     t.O += r.O; t.selC += r.selC; t.selD += r.selD;
 152:     for (const c of ['S', 'A1', 'A3', 'A2']) { t[c + 'v'] += r[c].v; t[c + 'lost'] += r[c].lost; t[c + 'div'] += r[c].nDiv; t[c + 'fund'] += r[c].nFund; }
 153:   }
 154:   const O = t.O, eff = (x) => x / O;
 155:   const sC = eff(t.selC), sD = eff(t.selD);                 // SELECTION efficiencies (perfect delivery) = the E4 numbers
 156:   const S = eff(t.Sv), A1 = eff(t.A1v), A3 = eff(t.A3v), A2 = eff(t.A2v);
 157:   const dCol = t.selC ? t.Sv / t.selC : NaN, dCvr = t.selC ? t.A1v / t.selC : NaN;   // per-arm delivered fractions
 158:   const dDop = t.selD ? t.A3v / t.selD : NaN, dDvr = t.selD ? t.A2v / t.selD : NaN;
 159:   const inc = (c) => t[c + 'fund'] ? t[c + 'div'] / t[c + 'fund'] : NaN;             // diversion incidence per cell
 160:   const lk  = (c) => (t[c + 'v'] + t[c + 'lost']) > 0 ? t[c + 'lost'] / (t[c + 'v'] + t[c + 'lost']) : NaN;  // value leakage
 161:   // world-cluster bootstrap CIs (inner MC variability only) for the reported cells AND effects, not just the full gain.
 162:   const B = NUM.bootstrap_reps.value, bRng = makeRng((seed ^ 0x9e3779b9) >>> 0);
 163:   const bs = { S: [], A1: [], A3: [], A2: [], full: [], dEffC: [], dEffD: [], sEffO: [], sEffV: [], inter: [] };
 164:   if (W.length) for (let b = 0; b < B; b++) {
 165:     let o = 0, s = 0, a1 = 0, a3 = 0, a2 = 0;
 166:     for (let k = 0; k < W.length; k++) { const ww = W[Math.floor(bRng.u() * W.length)]; o += ww.O; s += ww.Sv; a1 += ww.A1v; a3 += ww.A3v; a2 += ww.A2v; }
 167:     if (o <= 0) continue;
 168:     const bS = s / o, bA1 = a1 / o, bA3 = a3 / o, bA2 = a2 / o;
 169:     bs.S.push(bS); bs.A1.push(bA1); bs.A3.push(bA3); bs.A2.push(bA2);
 170:     bs.full.push(bA2 - bS); bs.dEffC.push(bA1 - bS); bs.dEffD.push(bA2 - bA3);
 171:     bs.sEffO.push(bA3 - bS); bs.sEffV.push(bA2 - bA1); bs.inter.push(bA2 - bA1 - bA3 + bS);
 172:   }
 173:   const ci = (arr) => { if (!arr.length) return [NaN, NaN]; const a = [...arr].sort((x, y) => x - y); const q = (p) => a[Math.max(0, Math.min(a.length - 1, Math.floor(p * a.length)))]; return [q((1 - NUM.ci_level.value) / 2), q((1 + NUM.ci_level.value) / 2)]; };
 174:   const fullCI = ci(bs.full);
 175:   return {
 176:     n: W.length,
 177:     selection: { central: sC, distributed: sD },
 178:     delivery:  { centralOpaque: dCol, centralVerified: dCvr, distributedOpaque: dDop, distributedVerified: dDvr },
 179:     monitoringDividend: { verified: dDvr - dCvr, opaque: dDop - dCol },
 180:     cells: { S, A1, A3, A2 },
 181:     diversionIncidence: { S: inc('S'), A1: inc('A1'), A3: inc('A3'), A2: inc('A2') },
 182:     leakage:            { S: lk('S'),  A1: lk('A1'),  A3: lk('A3'),  A2: lk('A2') },
 183:     deliveryEffect:  { atCentral: A1 - S,  atDistributed: A2 - A3 },
 184:     selectionEffect: { atOpaque:  A3 - S,  atVerified:    A2 - A1 },
 185:     interaction: (A2 - A1 - A3 + S),                         // >0 ⇒ verified delivery AMPLIFIES the selection gain
 186:     full: A2 - S, fullCI,                                    // full architecture vs status quo (pp of oracle) + bootstrap CI
 187:     ci: {                                                    // 95% bootstrap CIs for every reported quantity
 188:       cells: { S: ci(bs.S), A1: ci(bs.A1), A3: ci(bs.A3), A2: ci(bs.A2) },
 189:       deliveryEffect:  { atCentral: ci(bs.dEffC), atDistributed: ci(bs.dEffD) },
 190:       selectionEffect: { atOpaque: ci(bs.sEffO),  atVerified: ci(bs.sEffV) },

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content '"'scripts/simulation/e4-v5/e5-delivery.mjs' | ForEach-Object { "'$i++; if ($i -ge 191 -and $i -le 366) { '"'{0,4}: {1}' -f "'$i, $_ } }' in C:\devel\claude-projects\distributed-governance-research
 succeeded in 197ms:
 191:       interaction: ci(bs.inter),
 192:     },
 193:     // composition: each cell equals its own selection efficiency times its own delivered fraction (an accounting
 194:     // identity, EXACT by construction — delivery is applied per project). The additive prediction misses by the interaction.
 195:     multiplicativeIdentityA2: sD * dDvr,
 196:     additivePredictionA2: S + (A1 - S) + (A3 - S),
 197:   };
 198: }
 199: 
 200: // Step 1 — SENSITIVITY: sweep the opaque regime from the IMF/Olken central band toward the Uganda 87% pessimistic
 201: // extreme (by lowering detection and the honest share), reporting how the delivery effect and the full-architecture
 202: // gain respond. Returns rows {leak, deliveryEffectAtDistributed, full}.
 203: export function sweepOpaque(cfg, { nWorlds = 800, points = null } = {}) {
 204:   const grid = points || [
 205:     { p_det: 0.12, pi_hon: 0.75 },   // mild  (~IMF PIE-X 20-25% loss)
 206:     { p_det: 0.10, pi_hon: 0.70 },   // base  (~30% loss; Olken 24% divert)
 207:     { p_det: 0.06, pi_hon: 0.55 },   // heavy (~50% loss)
 208:     { p_det: 0.03, pi_hon: 0.35 },   // severe declared stress
 209:     { p_det: 0.01, pi_hon: 0.20 },   // very severe declared stress (~69% loss; the Uganda ~87% capture is contextual, not this row)
 210:   ];
 211:   const rows = [];
 212:   for (const g of grid) {
 213:     const del = { ...DELIVERY, pi_hon: g.pi_hon, opaque: { ...DELIVERY.opaque, p_det: g.p_det } };
 214:     const r = delivered2x2(cfg, { nWorlds, delivery: del });
 215:     rows.push({ leak: 1 - r.delivery.centralOpaque, deliveryEffectAtDistributed: r.deliveryEffect.atDistributed, full: r.full, A3: r.cells.A3 });
 216:   }
 217:   return rows;
 218: }
 219: 
 220: // Genuinely fail-closed validation of a delivery config (Codex round-2: NaN/Infinity and a MISSING `rep` previously
 221: // slipped through, and a missing rep silently makes the deterrent NaN — classifying every opportunist as deterred).
 222: export function validateDelivery(del) {
 223:   const bad = [];
 224:   const fin  = (k, v) => { if (typeof v !== 'number' || !Number.isFinite(v)) { bad.push(`${k}=${v} must be a finite number`); return false; } return true; };
 225:   const unit = (k, v) => { if (fin(k, v) && (v < 0 || v > 1)) bad.push(`${k}=${v} must be in [0,1]`); };
 226:   unit('pi_hon', del.pi_hon); unit('loss_hon', del.loss_hon);
 227:   unit('mon_detect', del.mon_detect ?? 0); unit('mon_recovery', del.mon_recovery ?? 0); unit('val_risk', del.val_risk ?? 0);
 228:   for (const name of ['opaque', 'verified']) {
 229:     const reg = del[name];
 230:     if (!reg || typeof reg !== 'object') { bad.push(`${name} regime missing`); continue; }
 231:     for (const k of ['p_det', 'a', 'r', 'rep']) unit(`${name}.${k}`, reg[k]);   // rep is REQUIRED + finite (deterrent uses it)
 232:     if (fin(`${name}.gamma`, reg.gamma ?? 0) && (reg.gamma ?? 0) < 0) bad.push(`${name}.gamma must be >= 0`);
 233:   }
 234:   if (bad.length) throw new Error(`[e5-delivery] invalid delivery config: ${bad.join('; ')}`);
 235:   return true;
 236: }
 237: 
 238: // 20-seed replication of the full-architecture gain: across-seed mean and spread (Codex robustness item; complements
 239: // the inner bootstrap CI with between-seed variability).
 240: export function replicateSeeds(cfg, { nSeeds = 20, nWorlds = 400, delivery = DELIVERY } = {}) {
 241:   const vals = [];
 242:   for (let s = 0; s < nSeeds; s++) vals.push(delivered2x2(cfg, { nWorlds, seed: (NUM.seed.value + s * 0x9e3779b1) >>> 0, delivery }).full);
 243:   vals.sort((a, b) => a - b);
 244:   const mean = vals.reduce((a, b) => a + b, 0) / vals.length;
 245:   const sd = Math.sqrt(vals.reduce((a, b) => a + (b - mean) * (b - mean), 0) / vals.length);
 246:   return { mean, sd, min: vals[0], max: vals[vals.length - 1] };
 247: }
 248: 
 249: // Joint Latin-hypercube sweep over the delivery params, reporting the RANGE of the full gain and the coverage-wins
 250: // share — a GLOBAL robustness statement, not the 1-D opaque sweep (Codex robustness item). Deterministic (seeded).
 251: export function jointSweep(cfg, { nSamples = 64, nWorlds = 300 } = {}) {
 252:   const ranges = {
 253:     pi_hon: [0.61, 0.85], loss_hon: [0.0, 0.15], op_pdet: [0.02, 0.15], op_a: [0.75, 1.0],
 254:     ve_pdet: [0.60, 0.90], ve_a: [0.10, 0.40], ve_r: [0.30, 1.0], ve_rep: [0.0, 0.5],
 255:     mon_detect: [0.0, 0.10], mon_recovery: [0.0, 0.36], val_risk: [0.0, 0.6],
 256:   };
 257:   const keys = Object.keys(ranges), rng = makeRng((NUM.seed.value ^ 0x1234abcd) >>> 0), cols = {};
 258:   for (const k of keys) {                                     // stratified + shuffled column per key (LHS)
 259:     const col = []; for (let i = 0; i < nSamples; i++) col.push((i + rng.u()) / nSamples);
 260:     for (let i = col.length - 1; i > 0; i--) { const j = Math.floor(rng.u() * (i + 1)); [col[i], col[j]] = [col[j], col[i]]; }
 261:     cols[k] = col;
 262:   }
 263:   const lerp = (r, u) => r[0] + (r[1] - r[0]) * u, fulls = [], selEff = [];
 264:   for (let i = 0; i < nSamples; i++) {
 265:     const s = {}; for (const k of keys) s[k] = lerp(ranges[k], cols[k][i]);
 266:     const del = {
 267:       pi_hon: s.pi_hon, loss_hon: s.loss_hon,
 268:       opaque:   { p_det: s.op_pdet, a: s.op_a, r: 0.0, gamma: 0.0, rep: 0.0 },
 269:       verified: { p_det: s.ve_pdet, a: s.ve_a, r: s.ve_r, gamma: 0.10, rep: s.ve_rep },
 270:       mon_detect: s.mon_detect, mon_recovery: s.mon_recovery, val_risk: s.val_risk,
 271:     };
 272:     const rr = delivered2x2(cfg, { nWorlds, delivery: del });
 273:     fulls.push(rr.full);                       // A2 − S : the FULL architecture vs the status quo
 274:     selEff.push(rr.selectionEffect.atOpaque);  // A3 − S : the COVERAGE (selection) effect alone, at opaque delivery
 275:   }
 276:   fulls.sort((a, b) => a - b);
 277:   // NOTE: shares are over these 64 LHS draws across the DECLARED ranges (gamma, opaque recovery, temptation held fixed),
 278:   // NOT a global identified-set guarantee. shareArchitectureWins = A2−S>0 (full stack); shareCoverageWins = A3−S>0.
 279:   return { n: fulls.length, min: fulls[0], max: fulls[fulls.length - 1], median: fulls[fulls.length >> 1],
 280:     shareArchitectureWins: fulls.filter((x) => x > 0).length / fulls.length,
 281:     shareCoverageWins: selEff.filter((x) => x > 0).length / selEff.length };
 282: }
 283: 
 284: function main() {
 285:   const pct = (x) => (x >= 0 ? '+' : '') + (100 * x).toFixed(1) + '%';
 286:   const cfgBase = baseConfig();
 287:   // Use the PROBABLE anchored scenario (realistic coverage composition + anchored central handicaps) as the world,
 288:   // so the selection layer matches the E4 headline; delivery is the new layer on top.
 289:   import('./scenario-configs.mjs').then(({ SCENARIO_WORLD: W, PROBABLE }) => {
 290:     const cfg = { ...cfgBase, ...W, ...PROBABLE };
 291:     // (i) the pure four-cell design with the monitoring coupling OFF — the two layers read cleanly.
 292:     const r = delivered2x2(cfg, { nWorlds: 1200 });
 293:     safeLog('E5 — delivered value: SELECTION-by-DELIVERY (four-cell design on the clean E4 engine, PROBABLE world).');
 294:     safeLog('Parity at the oracle reference (perfect-delivery full-information greedy). No compound multiplier; layers reported separately.\n');
 295:     safeLog(`worlds kept: ${r.n}`);
 296:     safeLog(`SELECTION efficiency (perfect delivery, = E4):  central ${pct(r.selection.central)} · distributed ${pct(r.selection.distributed)}`);
 297:     safeLog(`DELIVERY efficiency (delivered/selected):        opaque ${pct(r.delivery.centralOpaque)} · verified ${pct(r.delivery.centralVerified)}\n`);
 298:     safeLog('Four-cell delivered value as a fraction of the oracle reference:');
 299:     safeLog(`                       opaque delivery     verified delivery`);
 300:     safeLog(`  central selection    S  ${pct(r.cells.S).padStart(7)}          A1 ${pct(r.cells.A1).padStart(7)}`);
 301:     safeLog(`  distributed sel.     A3 ${pct(r.cells.A3).padStart(7)}          A2 ${pct(r.cells.A2).padStart(7)}\n`);
 302:     // diversion INCIDENCE = unweighted share of funded projects whose executor diverts; value LEAKAGE = S-weighted
 303:     // undelivered social value. Olken 2007 measured missing EXPENDITURE (closest to value leakage), not executor prevalence.
 304:     safeLog(`diversion incidence (unweighted share of funded projects):     opaque ${pct(r.diversionIncidence.S)} · verified ${pct(r.diversionIncidence.A1)}`);
 305:     safeLog(`value leakage (S-weighted undelivered value; ~Olken moment):   opaque ${pct(r.leakage.S)} · verified ${pct(r.leakage.A1)}\n`);
 306:     const civ = (iv) => `[${pct(iv[0])}, ${pct(iv[1])}]`;
 307:     safeLog('Main effects (percentage points of the oracle reference) with 95% bootstrap CIs, read SEPARATELY:');
 308:     safeLog(`  DELIVERY effect:   at central ${pct(r.deliveryEffect.atCentral)} ${civ(r.ci.deliveryEffect.atCentral)} · at distributed ${pct(r.deliveryEffect.atDistributed)} ${civ(r.ci.deliveryEffect.atDistributed)}`);
 309:     safeLog(`  SELECTION effect:  at opaque ${pct(r.selectionEffect.atOpaque)} ${civ(r.ci.selectionEffect.atOpaque)} · at verified ${pct(r.selectionEffect.atVerified)} ${civ(r.ci.selectionEffect.atVerified)}`);
 310:     safeLog(`  INTERACTION:       ${pct(r.interaction)} ${civ(r.ci.interaction)}  (>0 ⇒ verified delivery amplifies the selection gain)`);
 311:     safeLog(`  FULL architecture (A2 − S): ${pct(r.full)}  95% CI ${civ(r.fullCI)}\n`);
 312:     safeLog('Composition — the two layers compose MULTIPLICATIVELY (an accounting identity, delivery applied per project):');
 313:     safeLog(`  actual A2 = ${pct(r.cells.A2)}  ·  identity (selection · delivery) = ${pct(r.multiplicativeIdentityA2)}`);
 314:     safeLog(`  additive prediction (sum of main effects) = ${pct(r.additivePredictionA2)}  → short by the interaction.`);
 315:     safeLog(`  The positive interaction is the level-effect signature of multiplicative composition.\n`);
 316: 
 317:     // (ii) monitoring coupling ON (step 2): distributed coverage lifts DETECTION only (community-only recovery=0).
 318:     // Anchored coverage-only detection band 0.0–0.10 (fragile evidence); headline 0.05.
 319:     const rc = delivered2x2(cfg, { nWorlds: 1200, delivery: { ...DELIVERY, mon_detect: 0.05, mon_recovery: 0.0 } });
 320:     safeLog('Monitoring coupling (step 2) — distributed coverage fiscalizes delivery via DETECTION only (mon_detect=0.05, recovery=0 community-only):');
 321:     safeLog(`  delivered fraction, distributed − central:  opaque ${pct(rc.monitoringDividend.opaque)} · verified ${pct(rc.monitoringDividend.verified)} (saturated)`);
 322:     safeLog(`  weak-control cell A3 rises ${pct(r.cells.A3)} → ${pct(rc.cells.A3)} — SMALL: community detection without institutional recovery barely helps a weak-control regime.`);
 323:     safeLog(`  detection-band sweep (opaque monitoring dividend):`);
 324:     for (const c of [0.0, 0.05, 0.10]) {
 325:       const rr = delivered2x2(cfg, { nWorlds: 700, delivery: { ...DELIVERY, mon_detect: c, mon_recovery: 0.0 } });
 326:       safeLog(`     mon_detect ${c.toFixed(2)}  →  dividend(opaque) ${pct(rr.monitoringDividend.opaque)}  ·  A3 ${pct(rr.cells.A3)}`);
 327:     }
 328:     // with institutional recovery linkage (Core v0's evidence layer), the dividend is larger — reported as a scenario, not the community-only default.
 329:     const rr2 = delivered2x2(cfg, { nWorlds: 700, delivery: { ...DELIVERY, mon_detect: 0.05, mon_recovery: 0.20 } });
 330:     safeLog(`  with institutional recovery linkage (mon_recovery=0.20): opaque dividend ${pct(rr2.monitoringDividend.opaque)} — the delivery gain needs the FORMAL recovery channel, not eyeballs alone.\n`);
 331: 
 332:     // Favorable R=0 robustness (Codex): drop the reputational stake entirely — the verified regime then admits SOME
 333:     // diversion, and the full gain still holds. This is the honest less-favorable-to-Core-v0 disclosure.
 334:     const r0 = delivered2x2(cfg, { nWorlds: 1200, delivery: { ...DELIVERY, verified: { ...DELIVERY.verified, rep: 0.0 } } });
 335:     safeLog(`R=0 robustness (no reputational stake): verified delivery ${pct(r0.delivery.centralVerified)}, verified diversion incidence ${pct(r0.diversionIncidence.A1)}, full ${pct(r0.full)} 95% CI [${pct(r0.fullCI[0])}, ${pct(r0.fullCI[1])}] — the gain survives without the (unanchored) reputation term.\n`);
 336: 
 337:     // (iii) Step 1 — opaque-band sensitivity, coupling OFF so the delivery effect is read cleanly.
 338:     safeLog('Opaque-band sensitivity (delivery effect and full-architecture gain as the status-quo leak worsens):');
 339:     safeLog('   leak(opaque)   delivery-effect@distributed   full (A2−S)');
 340:     for (const row of sweepOpaque(cfg, { nWorlds: 800 })) {
 341:       safeLog(`     ${pct(row.leak).padStart(6)}          ${pct(row.deliveryEffectAtDistributed).padStart(7)}                 ${pct(row.full).padStart(7)}`);
 342:     }
 343:     safeLog('   → coverage still wins across the whole band; a worse status quo only widens the delivery gain.\n');
 344: 
 345:     // (iv) COST/COMPLEXITY-correlated delivery risk (robustness). NOTE: the risk is tied to project COST, and cost is
 346:     // drawn INDEPENDENTLY of true value S in the engine (c ⟂ S), so this bounds cost/size risk, not a value↔delivery
 347:     // correlation. Does it break the per-arm delivery equality (a real selection↔delivery interaction)?
 348:     safeLog('Cost/complexity-correlated delivery risk (bigger projects harder to monitor; cost ⟂ value S in the engine):');
 349:     for (const vr of [0.0, 0.3, 0.6]) {
 350:       const rv = delivered2x2(cfg, { nWorlds: 800, delivery: { ...DELIVERY, val_risk: vr } });
 351:       const armGap = rv.delivery.distributedOpaque - rv.delivery.centralOpaque;   // delivery efficiency difference by arm
 352:       safeLog(`   val_risk ${vr.toFixed(1)}  →  opaque delivery central ${pct(rv.delivery.centralOpaque)} · distributed ${pct(rv.delivery.distributedOpaque)} (arm gap ${pct(armGap)})  ·  full ${pct(rv.full)}`);
 353:     }
 354:     safeLog('   → under c ⟂ S the arm gap stays ~0, so coverage is NOT systematically undone by cost/size delivery risk.\n');
 355: 
 356:     // (v) 20-seed replication + a joint Latin-hypercube sweep over the DECLARED ranges (a sampled-space statement, not a
 357:     // global identified-set guarantee: gamma, opaque recovery and uniform temptation are held fixed).
 358:     const rep = replicateSeeds(cfg, { nSeeds: 20, nWorlds: 400 });
 359:     safeLog(`20-seed replication of the full gain: mean ${pct(rep.mean)} · sd ${pct(rep.sd)} · range [${pct(rep.min)}, ${pct(rep.max)}].`);
 360:     const js = jointSweep(cfg, { nSamples: 64, nWorlds: 300 });
 361:     safeLog(`Joint LHS sweep (${js.n} draws over the declared delivery ranges): full gain median ${pct(js.median)}, range [${pct(js.min)}, ${pct(js.max)}];`);
 362:     safeLog(`   full architecture wins in ${(100 * js.shareArchitectureWins).toFixed(0)}% and the coverage/selection effect (A3−S) is positive in ${(100 * js.shareCoverageWins).toFixed(0)}% of the sampled draws.`);
 363:   });
 364: }
 365: import { fileURLToPath } from 'node:url';
 366: if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) main();

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content '"'scripts/simulation/e4-v5/e5-delivery-test.mjs' | ForEach-Object { "'$i++; '"'{0,4}: {1}' -f "'$i, $_ }' in C:\devel\claude-projects\distributed-governance-research
 succeeded in 177ms:
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
 109:   check('20-seed replication: between-seed sd is small', rep.sd < 0.03, `sd ${rep.sd}`);
 110:   check('20-seed replication: mean full gain is materially positive', rep.mean > 0.4, `mean ${rep.mean}`);
 111:   const js = jointSweep(cfg, { nSamples: 24, nWorlds: 150 });
 112:   check('joint LHS sweep: full architecture wins in the large majority of sampled draws', js.shareArchitectureWins > 0.9, `share ${js.shareArchitectureWins}`);
 113:   check('joint LHS sweep: coverage/selection effect (A3−S) positive in the large majority', js.shareCoverageWins > 0.9, `share ${js.shareCoverageWins}`);
 114:   check('joint LHS sweep: even the worst sampled draw keeps the full gain near/above parity', js.min > -0.1, `min ${js.min}`);
 115: }
 116: 
 117: console.log(`\nE5 delivery: ${pass} passed, ${fail} failed.`);
 118: process.exit(fail ? 1 : 0);

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content '"'audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md' | ForEach-Object { "'$i++; '"'{0,4}: {1}' -f "'$i, $_ }' in C:\devel\claude-projects\distributed-governance-research
 succeeded in 182ms:
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
 173: **Status: E5 is PUBLICATION-READY.**
 174: 
 175: ## Next
 176: 
 177: - Integrate E5 into the paper's Finding 5 (EN+ES) using `FINDING5-DRAFT.md`.
 178: - E9 (full-stack: planning + selection + delivery, central vs Core v0) and E10 (+costs) per
 179:   `docs/EXPERIMENT-INVENTORY.md`.
 180: - Re-label `e5-layers.mjs` as the E10 cost scaffolding; wire E5 delivery into the paper's Finding 5 with the
 181:   percentage main-effects framing (no compound).

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content '"'scripts/simulation/e4-v5/e9-fullstack.mjs' | ForEach-Object { "'$i++; if ($i -ge 1 -and $i -le 170) { '"'{0,4}: {1}' -f "'$i, $_ } }' in C:\devel\claude-projects\distributed-governance-research
 succeeded in 195ms:
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
  23: import { DELIVERY, deliveredCell, validateDelivery } from './e5-delivery.mjs';
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
 148:   for (let j = 0; j < projects.length; j++) { honest[j] = execRng.u() < del.pi_hon; tempt[j] = execRng.u(); }
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

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content '"'scripts/simulation/e4-v5/e9-fullstack.mjs' | ForEach-Object { "'$i++; if ($i -ge 171 -and $i -le 323) { '"'{0,4}: {1}' -f "'$i, $_ } }' in C:\devel\claude-projects\distributed-governance-research
 succeeded in 211ms:
 171:   let O = 0; for (const j of fundedSet(projectsAdj, 'S', cfg, budget)) O += projectsAdj[j].S;
 172: 
 173:   const CT = { creditTilt: true };
 174:   const planShares = { c: shC, d: shD };
 175:   const recycle = plan.residualMode === 'recycle';
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
 237:     n: W.length, statusQuo: point.statusQuo, coreV0: point.coreV0,
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
 270:   import('./scenario-configs.mjs').then(({ SCENARIO_WORLD: W, PROBABLE }) => {
 271:     const cfg = { ...baseConfig(), ...W, ...PROBABLE };
 272:     const r = fullStack(cfg, { nWorlds: 1000 });
 273:     safeLog('E9 — FULL STACK: PLANNING, SELECTION and DELIVERY (built on E5, PROBABLE world). Parity at the oracle');
 274:     safeLog('(a global full-information greedy REFERENCE, not a guaranteed optimum). No compound multiplier.\n');
 275:     const civ = (iv) => `[${pct(iv[0])}, ${pct(iv[1])}]`;
 276:     safeLog(`worlds kept: ${r.n}   (${PLANNING.nSec} COFOG sectors; assoc=${PLANNING.assoc}, secValSpread=${PLANNING.secValSpread}, creditCoef=${PLANNING.creditCoef}, agendaCapture=${PLANNING.agendaCapture}, strict residual)`);
 277:     safeLog(`STATUS QUO (all-central: central planning + selection + opaque delivery):     ${pct(r.statusQuo)} of reference`);
 278:     safeLog(`CORE v0 FULL (all-distributed: distributed planning + selection + verified):   ${pct(r.coreV0)} of reference`);
 279:     safeLog(`FULL-STACK gain (Core v0 − status quo): ${pct(r.fullStackGain)}  95% CI ${civ(r.fullStackCI)}\n`);
 280:     safeLog('SHAPLEY attribution of the full-stack gain to each layer (sums exactly to the gain) with 95% CIs:');
 281:     safeLog(`  planning ${pct(r.attribution.planning)} ${civ(r.attributionCI.planning)} · selection ${pct(r.attribution.selection)} ${civ(r.attributionCI.selection)} · delivery ${pct(r.attribution.delivery)} ${civ(r.attributionCI.delivery)}`);
 282:     safeLog('Planning as a CONDITIONAL simple effect (distributed − central planning), context-dependent:');
 283:     safeLog(`  under central selection:     ${pct(r.planningUnderCentralSel)} ${civ(r.planningCI.central)}`);
 284:     safeLog(`  under distributed selection: ${pct(r.planningUnderDistributedSel)} ${civ(r.planningCI.distributed)}   (the Core v0 context)`);
 285:     safeLog(`budget utilization by cell (strict residual): status quo ${pct(r.utilization.c_c_op)} · Core v0 ${pct(r.utilization.d_d_ve)}\n`);
 286: 
 287:     // Recycle mode removes the utilization confound (Codex round-2): unspent budget makes a second global pass.
 288:     const rr = fullStack(cfg, { nWorlds: 1000, planning: { ...PLANNING, residualMode: 'recycle' } });
 289:     safeLog(`With residual RECYCLING (removes the utilization confound): planning Shapley ${pct(rr.attribution.planning)} ${civ(rr.attributionCI.planning)},`);
 290:     safeLog(`  planning|distributed-sel ${pct(rr.planningUnderDistributedSel)}, full-stack gain ${pct(rr.fullStackGain)} (utilization → ~100% both cells).\n`);
 291: 
 292:     // The planning magnitude is DECLARED and SENSITIVE to two declared assumptions. Present both, honestly.
 293:     safeLog('Planning Shapley over the DECLARED sector-value dispersion by need↔visibility association (the effect is');
 294:     safeLog('modest and CONDITIONAL — not a robust large positive layer):');
 295:     safeLog('   secValSpread \\ assoc   -1.0     -0.6      0.0     +0.6');
 296:     for (const sv of [0.1, 0.3, 0.6]) {
 297:       const row = [-1.0, -0.6, 0.0, 0.6].map((a) => pct(fullStack(cfg, { nWorlds: 500, planning: { ...PLANNING, secValSpread: sv, assoc: a } }).attribution.planning).padStart(7));
 298:       safeLog(`     ${sv.toFixed(1).padStart(4)}                 ${row.join('  ')}`);
 299:     }
 300:     safeLog('   → the SOFT credit distortion alone makes planning a small, sign-ambiguous contribution.\n');
 301: 
 302:     // AGENDA CAPTURE (the second face of power) is the mechanism that makes planning a robust positive layer: the
 303:     // central keeps its lowest-perceived sectors OFF the menu. Direction anchored (Bachrach–Baratz 1962; political
 304:     // budget cycles Drazen–Eslava 2010); SEVERITY kept MODEST (measured composition shifts are single-digit).
 305:     safeLog('Agenda capture (second face of power — central keeps its lowest-perceived COFOG sectors OFF the menu):');
 306:     safeLog('   sectors captured   planning Shapley   planning|distributed-sel   full-stack gain');
 307:     for (const ac of [0, 1, 2, 3]) {
 308:       const ra = fullStack(cfg, { nWorlds: 600, planning: { ...PLANNING, agendaCapture: ac } });
 309:       safeLog(`   ${String(ac).padStart(2)}/${PLANNING.nSec}              ${pct(ra.attribution.planning).padStart(7)}           ${pct(ra.planningUnderDistributedSel).padStart(7)}            ${pct(ra.fullStackGain).padStart(7)}`);
 310:     }
 311:     safeLog('   → agenda capture is the DOMINANT planning mechanism, and it is NOT anchorable today (no cited universal');
 312:     safeLog('     whole-function-exclusion moment, no worked country example yet), so it is PROPOSED CONTINUATION WORK.\n');
 313: 
 314:     safeLog('FRAMING (author decision): DO NOT report a planning-layer FIGURE. The soft-only slice above (~0–3%) omits');
 315:     safeLog('agenda capture — the mechanism that moves the needle — so it UNDERSTATES the layer; headlining it would read');
 316:     safeLog('as "planning is small," which is not what it means. Report SELECTION and DELIVERY quantitatively (the large,');
 317:     safeLog('robust, anchored layers); present PLANNING QUALITATIVELY — mechanism identified (agenda capture / second');
 318:     safeLog('face of power), DIRECTION anchored (COFOG; election visible-spending shift; maintenance neglect), MAGNITUDE');
 319:     safeLog('deferred to country-specific continuation (e.g. a Chile example — illustrative, not conclusive).');
 320:   });
 321: }
 322: import { fileURLToPath } from 'node:url';
 323: if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) main();

2026-07-13T18:32:35.182608Z ERROR codex_core::tools::router: error=Exit code: 124
Wall time: 124 seconds
Output:
command timed out after 124018 milliseconds

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content '"'scripts/simulation/e4-v5/e9-fullstack-test.mjs' | ForEach-Object { "'$i++; '"'{0,4}: {1}' -f "'$i, $_ }' in C:\devel\claude-projects\distributed-governance-research
 succeeded in 180ms:
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
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content '"'audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md' | ForEach-Object { "'$i++; '"'{0,4}: {1}' -f "'$i, $_ }' in C:\devel\claude-projects\distributed-governance-research
 succeeded in 184ms:
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
 101: effect size depends on how strongly categories are stratified on the dimension the central mis-sees — to be pressure-
 102: tested + anchored in E9's friendly Codex round (do not gerrymander it up).
 103: 
 104: **Tests (11/11):** nCat=1 reduces to E5 (status-quo cell == E5 S, Core-v0 cell == E5 A2, planning effect ~0); planning
 105: effect positive; hard exclusion widens it; Core v0 > status quo; no cell exceeds the oracle; all three layer effects
 106: positive; selection dominant; fail-closed delivery validation reused.
 107: 
 108: **Open for the friendly round:** is the visibility-stratified category construction the right/most-defensible one, or
 109: should categories be typed by harm/need directly? Anchor the planning-layer magnitude (sectoral misallocation of public
 110: investment). Confirm the global-oracle normalization and the main-effect decomposition are sound.
 111: 
 112: ## Planning-layer calibration (friendly round — calibration agent, 2026-07-13, all web-verified)
 113: 
 114: **Direction is strongly anchored; the magnitude is DECLARED-but-conservative.** No published source cleanly isolates
 115: "value lost from allocating the budget across the wrong sectors," so the planning effect is a declared modeling
 116: parameter *consistent with, and conservative relative to,* the published efficiency-loss envelope — not a transported
 117: point estimate.
 118: 
 119: | quantity | anchored band / direction | best citation | status |
 120: |---|---|---|---|
 121: | total public-investment inefficiency | ~30% of returns lost (13% adv / 27% EM / 40% LIC); strong PIM closes ~2/3 | IMF, *Making Public Investment More Efficient* 2015 | ANCHORED (total loss, broader than cross-sector) |
 122: | **pure cross-sector allocative loss** | no canonical scalar exists | World Bank PERs (diagnostic, no scalar) | **DECLARED** (the quantity E9 most needs) |
 123: | political budget cycle → visible spending | pre-election composition shift to visible capital (~0.5–1% of GDP/category) | Drazen & Eslava 2010, *JDE* 92(1) | ANCHORED (direction; composition shift, not value-loss %) |
 124: | pork-barrel / particularistic targeting | allocations follow electoral usefulness, not marginal value (150+ studies) | Golden & Min 2013, *ARPS* 16 | ANCHORED (direction/pervasiveness, qualitative) |
 125: | maintenance / diffuse-cost underinvestment | new-build bias; optimal maintenance ~2% of GDP; deferred maintenance multiplies later cost | Rioja 2003, *JPE* 87(9–10) + World Bank AICD maintenance briefs | ANCHORED for the SIGN (undervisible = underfunded). NB: the "~2/3 new vs 1/3 maintenance" split is NOT in Rioja 2003 — do not attribute it (calibration agent flag) |
 126: 
 127: Supporting (direction only): Rogoff & Sibert 1988; Rogoff 1990 *AER*; Khemani 2004 *JDE*.
 128: 
 129: **Agent's read:** the +3–7% planning contrast sits **comfortably inside** the envelope (well below IMF's ~30% total and
 130: Rioja's ~15% single-margin), so it does **not** overclaim — if anything it is conservative. Honest framing to apply:
 131: call it "consistent with and conservative relative to" the IMF/Rioja evidence, NOT "anchored" to a cross-sector estimate
 132: (none exists at that granularity). Flag the pure cross-sector allocative-loss magnitude explicitly DECLARED to reviewers.
 133: 
 134: ## Country-grounded ILLUSTRATIVE example of agenda capture — CHILE, mental health (data agent, 2026-07-13, verified)
 135: 
 136: **Not a conclusion — an illustrative footprint of the model's visibility-bias mechanism in one real budget.**
 137: 
 138: **Chile — mental health.** The public mental-health budget is ~**2% of the health budget** (1.45–2.16% across 2007–2015;
 139: ~4.5% of the health ministry's budget by 2025) against an **OECD average of 6.7%** — despite mental/behavioural
 140: disorders being the **leading cause of disability in Chile** (PAHO), with treatment coverage ~20% vs ~50% typical for
 141: middle-income countries. It is documented as a genuine unmet need, "**una deuda pendiente**": funding never rose to meet
 142: the 2000 National Mental Health Plan's own targets. Sources (verified/triangulated): Errázuriz, Valdés, Vöhringer & Calvo
 143: (2015), *Rev Med Chile* 143(9):1179–1186; IPSUSS; OECD 2025 (via Fact Checking UC); DIPRES sectoral evaluation (2025).
 144: 
 145: **Why this is on-point (and honest about the mechanism):** mental health is a **high-need, LOW-VISIBILITY** function —
 146: diffuse constituency, stigma, no ribbon-cuttings — kept near the floor. That is exactly E9's central mechanism (the
 147: planner reads visibility as credit and starves low-visibility functions). The driver here is **low salience/visibility**,
 148: NOT documented clientelist vote-buying — and Chile is a relatively well-governed OECD country, so the point is if EVEN
 149: Chile floors mental health, the visibility bias is pervasive, not a basket-case artefact. The clientelist variant of the
 150: same mechanism is documented separately (Keefer & Khemani 2005, *WB Research Observer*, "clientelism under-provides
 151: broad public goods like preventive health"; Ban, Jha & Rao on India's "asphalt over sewers"), but without a cleanly
 152: verified single budget-share number — so we cite it as mechanism, not calibration.
 153: 
 154: **Illustrative severity: 1 function off the menu** (mental health at ~2% vs the OECD 6.7% benchmark). Plugged into E9 on
 155: the anchored params:
 156: 
 157: | illustrative severity | planning Shapley (strict) | planning Shapley (recycled) | planning\|distributed-sel (recycled) |
 158: |---|---|---|---|
 159: | **1** (mental health at the floor) | +2.2% [+1.8,+2.5] | **+3.9% [+3.6,+4.2]** | +1.0% |
 160: 
 161: **Honest caveats:** (a) a small share alone is not proof of capture, but here the need benchmark (OECD 6.7%, #1 disability
 162: cause, 20% coverage) makes the under-provision a documented gap, not efficiency; (b) the mechanism is visibility/salience
 163: bias, which IS the model's mechanism, though not the clientelist sub-case; (c) I could not verify a credible SECOND
 164: starved function this pass, so severity stays at 1 (not inflated). → The anchored HEADLINE still reports NO planning
 165: figure (agendaCapture=0); this is a labelled illustrative example showing the mechanism concretely for one real budget
 166: (~+2–4% of the reference at one function off the menu).
 167: 
 168: ## Planning REDESIGN v2 (Codex round-1 + author decision, commit 301d7cc)
 169: 
 170: Codex round-1: skeleton sound; planning layer NOT publication-ready (the standalone +3.2/+7.1 were one-at-a-time
 171: conditional effects; planning under distributed selection runs the other way). Author decision: **predeclare + sweep**
 172: the need↔visibility association. Redesigned:
 173: 
 174: - **Persistent sectors with intrinsic visibility** (not visibility bins of project P — homogeneous under random
 175:   membership). **Category-level political credit**: central over-funds visible sectors (`creditCoef`) and is blind to
 176:   the low-visibility sector value tilt; distributed coverage sees a fraction (`covSees`). `assoc` = the predeclared
 177:   need↔visibility lever, swept −1..+1.
 178: - **8-cell factorial + Shapley attribution** that sums exactly to the diagonal gain; plus the conditional simple
 179:   effects that expose the sign flip.
 180: - `validatePlanning` fail-closed; hard exclusion by integer `nKeep` (central/symmetric); oracle relabelled a REFERENCE.
 181: - `nSec=1` reduces to E5 exactly (1e-9). 15/15 tests.
 182: 
 183: **Honest result (PROBABLE):** full-stack gain ~+49% [+48.3,+49.6]. Shapley attribution (assoc=−0.6): planning +2.1% /
 184: selection +38.3% / delivery +10.8%. Under the **realistic** association (assoc<0, Rioja maintenance bias) planning
 185: Shapley rises to **+1.9% → +6.2%**; at assoc≥0 it is ~0 — the planning layer's value is **real but modest and
 186: context-dependent**, honestly emerging from the predeclared assumption, not gerrymandered. Magnitude DECLARED,
 187: conservative vs the IMF/Rioja envelope. → sent to Codex round-2 for verification.
 188: 
 189: ## Codex round-2 verdict + bounded pass (commit 0749b2d) — architecture sound
 190: 
 191: Round-2: the factorial/Shapley **architecture is correct and publication-worthy**; verdict NOT-YET pending a bounded
 192: pass, now applied:
 193: 
 194: - **Genuine fixed-dispersion association** (`need = assoc·z(vis) + √(1−assoc²)·shock`) — the old `assoc` also scaled
 195:   dispersion and `assoc=0` erased it. This exposed that the planning magnitude is driven by the DECLARED
 196:   `secValSpread` (~0 at 0.1, **+3.8% Shapley at 0.3**, +17% at 0.6) — set a moderate declared reference (0.3) and
 197:   report the full **dispersion × association** grid.
 198: - **Residual recycling** mode removes the utilization confound (strict left Core v0 at 90% utilization vs status quo
 199:   96%): planning|distributed-sel goes **−1.2% → +2.1%** with recycling.
 200: - bootstrap **CIs on the gain + all three Shapley values + both planning simple effects**; complete fail-closed
 201:   `validatePlanning`; oracle relabelled a **greedy REFERENCE** (not an upper bound; false invariant dropped).
 202: 
 203: **Honest final result (PROBABLE, secValSpread=0.3, assoc=−0.6):** full-stack gain **+52.5% [+51.8,+53.1]**.
 204: Shapley: **planning +3.8% [+3.3,+4.2] · selection +37.9% [+37.4,+38.5] · delivery +10.8% [+10.5,+11.1]** (with
 205: recycling, planning +4.8%). **Conclusion: SELECTION and DELIVERY are the robust, large layers; PLANNING is a MODEST,
 206: CONDITIONAL third layer** — positive only under substantial declared sector heterogeneity AND the realistic negative
 207: need↔visibility association, near-zero/negative otherwise. Magnitude DECLARED and numerically modest; **not in obvious
 208: tension with the broader, non-commensurate IMF/Rioja evidence, but NOT anchored to a cross-sector point estimate**.
 209: 22/22 tests. → ready for a round-3 confirmation.
 210: 
 211: ## Anchoring round (author: "anclar mejor los parámetros a datos") — data-anchor agent (verified) + AGENDA CAPTURE
 212: 
 213: **Author question:** was agenda capture modeled in the status-quo category selection? **Answer: no** — only the SOFT
 214: credit distortion was in the headline; hard exclusion was a non-default variant. The author chose to incorporate agenda
 215: capture. Data-anchor agent (all web-verified) mapped E9's declared parameters onto observable moments:
 216: 
 217: | parameter | observable moment | anchor | status |
 218: |---|---|---|---|
 219: | `nSec` | UN COFOG top-level functions = **10** | UN/Eurostat/OECD COFOG | **ANCHORED** (nSec=10) |
 220: | `creditCoef` (over-fund visible) | pre-election composition shift to visible spending | Drazen–Eslava 2010 *JDE* 92(1); Vergne 2009 *EJPE* 25(1); Katsimi–Sarantides 2012 *Public Choice* 151 | direction ANCHORED, **magnitude modest/single-digit → declared-with-band** |
 221: | `assoc` sign (high-need = low-visibility) | maintenance/prevention underfunded vs new visible capital | Rioja 2003 *JPE* 87(9–10) + WB AICD (optimal maintenance ~2% GDP; new-build bias) | **SIGN anchored**, strength declared |
 222: | `secValSpread` (cross-sector value dispersion) | COFOG share dispersion / sector-return spread / allocative gap | Eurostat COFOG 2023; IMF/CEPR ~11% GDP + 30–40% efficiency-gap **ceiling** | loose/confounded → **upper-bounded, not point-anchored** |
 223: 
 224: **Data-agent's read:** the honest anchored planning contribution is **SMALL (a few %)** — measured composition shifts are
 225: single-digit, the ~11%/30–40% figures are ceilings bundling far more than cross-sector visibility bias, and the
 226: need↔visibility link is directionally real but weakly measured. This **coheres with the project's own symmetry-gate
 227: NO-GO (~0.026)**: the architecture + mechanism is the contribution; the honest calibrated planning magnitude is small.
 228: 
 229: **AGENDA CAPTURE mechanism added (commit 790cdc1):** `agendaCapture` = the number of its lowest-perceived COFOG sectors
 230: the central keeps OFF the menu (second face of power, Bachrach–Baratz 1962 / Schattschneider; political budget cycles).
 231: Budget reallocated to funded sectors. This is the mechanism that makes the planning layer **robustly POSITIVE (no sign
 232: flip)**. At the DEFAULT modest, data-consistent severity (**1 of 10** COFOG functions off the menu) the planning Shapley
 233: is **~+7.0% [+6.6,+7.5]** (vs +3.8% and sign-ambiguous under soft distortion alone); severities of 2–3/10 give +10–15%
 234: but are a **declared stress, NOT data-supported** (wholesale exclusion of many functions contradicts the single-digit
 235: measured shifts).
 236: 
 237: ## Codex pro-anchor panel (4 profiles) — CONVERGES with the data agent; applied (commit 3033c2b)
 238: 
 239: The panel (PFM / development / political-economy / methodology) verified sources and mapped E9's parameters onto
 240: observable moments, plus found a real BUG. Applied:
 241: 
 242: - **BUG FIX (blocker):** distributed sector perception multiplied `secValSpread` twice (`valTilt` already carries it).
 243: - **Provisional moment maps:** `creditCoef` 0.6→**0.076** (Drazen–Eslava election log-visible-share shift 0.024,
 244:   SE 0.008); `secValSpread` 0.3→**0.184** (World Bank OED between-sector return-per-cost SD); `nSec`=10 (COFOG);
 245:   **`agendaCapture` default 1→0** — no cited evidence for universal whole-function exclusion, so it stays a DECLARED
 246:   STRESS, not the anchored headline.
 247: - **Result reproduces the panel's independent diagnostic exactly:** planning Shapley **+0.61% strict / +3.21%
 248:   [+2.93,+3.47] recycled**. (My earlier +7% used the unanchored creditCoef=0.6 + agendaCapture=1 + the double-count.)
 249: 
 250: **What the anchoring round found (the SOFT-only slice, mechanism absent):** with `agendaCapture=0` and the moment-mapped
 251: params, the planning contribution is ~+0.6% (strict) to +3.2% (recycled) — the 0–3% range both reviewers converged on.
 252: **But this slice omits agenda capture, the layer's dominant mechanism, so it is NOT the planning result** (see the
 253: framing decision below — do not headline a planning figure). **SELECTION (+37–43%) and DELIVERY (+11%) remain the large,
 254: robust, quantified layers.** 26/26 tests.
 255: 
 256: ## Planning-layer framing — DO NOT report a figure (author decision, 2026-07-13)
 257: 
 258: **Key methodological point (author):** it is misleading to headline a "neutral" small planning number (~0–3%), because
 259: that number is measured with the layer's DOMINANT mechanism — **agenda capture** (the central keeping whole high-need/
 260: low-visibility functions off the menu; the second face of power) — SWITCHED OFF. Reporting it as "the" planning
 261: contribution would falsely read as "we measured planning and it is small," when the honest statement is: **the planning
 262: layer's magnitude hinges on agenda capture, which cannot be anchored today, so we do NOT quantify it.**
 263: 
 264: Therefore the E9 write-up should:
 265: - **Quantify only SELECTION and DELIVERY** (anchored, robust, large layers).
 266: - Present **PLANNING qualitatively**: the mechanism (agenda capture / second face of power) is IDENTIFIED and its
 267:   DIRECTION anchored (COFOG structure; the election-period shift to visible spending; maintenance neglect), but its
 268:   MAGNITUDE requires country-specific budget data (which whole functions a given central actually excludes) and is left
 269:   as **proposed continuation work**. **Do NOT report a planning-layer figure** — not even the 0–3% soft-distortion slice,
 270:   which understates the layer by omitting its dominant mechanism.
 271: - The internal `agendaCapture` sweep and the 0–3% soft-only slice remain in the CODE as analysis, clearly labelled as a
 272:   lower slice that omits the dominant mechanism — not as a headline result.
 273: 
 274: Two concrete continuation items the author wants (agenda capture is the needle-mover, presented as continuation):
 275: 1. **A country-grounded worked example (COUNTRY-AGNOSTIC).** Find real functional-budget data for SOME country with
 276:    accessible data (Chile is a good place to look given the author's context, but the example is NOT tied to Chile — an
 277:    implementer would run it for whatever country they choose) showing structural under-provision / near-exclusion of
 278:    specific COFOG functions (deferred maintenance, environment, prevention, etc.), and present the resulting
 279:    agenda-capture severity as an **ILLUSTRATIVE example, explicitly NOT a conclusive calibration**.
 280: 2. **A country selector in the interactive explorer** — country-agnostic: let the user **choose any country** and set the
 281:    agenda-capture (and related planning) values to that country's budget structure, so the planning contribution is shown
 282:    per-country rather than as one universal number.
 283: 
 284: ## Panel modifications noted as FUTURE WORK (a country-specific, fully-anchored v3): softmax baseline-plus-flexible-
 285: reallocation share form (credit as a share semi-elasticity, not an additive coefficient on the arbitrary `M_C` scale);
 286: return-per-cost value tilt (`Sadj = S + cost·returnTilt`); a per-sector DATA INPUT TABLE (COFOG code, counts, cost/
 287: return distributions, baseline capital share, visibility, need, maintenance share); an inverse-calibration harness that
 288: root-solves the observable moments with held-out validation; a genuine value-maximizing comparator (diminishing returns)
 289: to replace the greedy reference if an actual-vs-optimal allocation gap is the target; and an exclusion HURDLE model
 290: (first whether viable projects exist, then whether the central zero-funds them).

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content '"'scripts/simulation/e4-v5/e10-costs.mjs' | ForEach-Object { "'$i++; '"'{0,4}: {1}' -f "'$i, $_ }' in C:\devel\claude-projects\distributed-governance-research
 succeeded in 174ms:
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
  12: //   V_arm / O = (delivered value_arm / O) · (1 − κ_arm)      [κ = admin/machinery cost share; base κ_D < κ_C]
  13: //   m10 = V_D/O − V_C/O
  14: //
  15: // κ_C, κ_D are set with DIRECTION anchored and MAGNITUDE declared-and-conservative (κ_C=0.15 central machinery Core v0
  16: // eliminates, informed by IDB *Better Spending for Better Lives* 2018 + ~10–20% program admin overhead; κ_D=0.03 Core v0
  17: // platform/AI, informed by low e-government/e-procurement operating costs). Not a transported point calibration.
  18: // Run: npm run e10:costs
  19: 
  20: import { delivered2x2, DELIVERY } from './e5-delivery.mjs';
  21: import { fullStack, PLANNING } from './e9-fullstack.mjs';
  22: import { baseConfig, NUM } from './contract.mjs';
  23: import { safeLog } from './adapter.mjs';
  24: 
  25: export const COSTS = {
  26:   // DIRECTION robustly anchored (verified sources), POINT magnitude DECLARED-and-conservative (author-set 2026-07-13).
  27:   kappa_C:    0.15,   // central admin/machinery cost share Core v0 ELIMINATES (value-proxy studies, allocation,
  28:                       //     prioritization, AI-fiscalization machinery, delivery mgmt, licenses, travel). ANCHOR: IDB
  29:                       //     *Better Spending for Better Lives* 2018 — LAC public-spending waste = 4.4% of GDP ≈ **16% of
  30:                       //     government expenditure** (procurement + payroll + transfers). 0.15 is a round-down of that
  31:                       //     16%; band 0.10–0.16. (Narrow pure-admin overhead is 1–10% — CBPP/SSA/CBO — a lower floor,
  32:                       //     since κ_C is broader.) The exact point is DECLARED (no source maps "waste"→"budget share removed").
  33:   kappa_D:    0.03,   // Core v0's OWN operating cost (platform + AI). ANCHOR: verified e-procurement platform run-costs
  34:                       //     are an ORDER OF MAGNITUDE below this (~0.005–1% of spend managed — JBCA 2023 e-GP CBA; KONEPS;
  35:                       //     GeM; ProZorro), so 0.03 deliberately OVER-charges the platform = conservative ceiling (band
  36:                       //     0.005–0.03). base κ_D ≪ κ_C: verified central-machinery cost is ≥10–30× platform run cost,
  37:                       //     so the modeled ratio ~5 UNDERSTATES the structural gap. Magnitude DECLARED.
  38:   planningOn: false,  // author requirement: PLANNING OFF by default (its magnitude is deferred; do not fold into costs)
  39: };
  40: 
  41: // The delivered-value base: E5 (selection × delivery) with planning OFF, or E9 (the full stack) with planning ON.
  42: // Status quo = central selection × opaque delivery; Core v0 = distributed selection × verified delivery.
  43: function valueBase(cfg, opts, costs, delivery, planning) {
  44:   if (costs.planningOn) {
  45:     const v = fullStack(cfg, { ...opts, delivery, planning });
  46:     return { statusQuo: v.statusQuo, coreV0: v.coreV0, via: 'E9 (planning ON)' };
  47:   }
  48:   const v = delivered2x2(cfg, { ...opts, delivery });
  49:   return { statusQuo: v.cells.S, coreV0: v.cells.A2, via: 'E5 (planning OFF)' };
  50: }
  51: 
  52: export function e10(cfg, { nWorlds = NUM.n_worlds.value, seed = NUM.seed.value, delivery = DELIVERY, planning = PLANNING, costs = COSTS } = {}) {
  53:   const base = valueBase(cfg, { nWorlds, seed }, costs, delivery, planning);
  54:   const kC = costs.kappa_C, kD = costs.kappa_D;
  55:   const V_C = base.statusQuo * (1 - kC), V_D = base.coreV0 * (1 - kD);
  56:   const valueGain = base.coreV0 - base.statusQuo;
  57:   const costGain = V_D - V_C;
  58:   return {
  59:     planningOn: costs.planningOn, via: base.via, kappa_C: kC, kappa_D: kD,
  60:     valueOnly: { statusQuo: base.statusQuo, coreV0: base.coreV0, gain: valueGain },
  61:     withCosts: { statusQuo: V_C, coreV0: V_D, gain: costGain },
  62:     adminCostContribution: costGain - valueGain,   // how much the admin-cost layer adds to the Core-v0 − status-quo gap
  63:   };
  64: }
  65: 
  66: function main() {
  67:   const pct = (x) => (x >= 0 ? '+' : '') + (100 * x).toFixed(1) + '%';
  68:   import('./scenario-configs.mjs').then(({ SCENARIO_WORLD: W, PROBABLE }) => {
  69:     const cfg = { ...baseConfig(), ...W, ...PROBABLE };
  70:     const r = e10(cfg, { nWorlds: 1200 });
  71:     safeLog('E10 — the COST layer on the delivered-value stack (PROBABLE world). Parity at the oracle reference.');
  72:     safeLog('PLANNING is OFF by default (its magnitude is deferred); COSTS are administrative/machinery (κ).\n');
  73:     safeLog(`value base: ${r.via}   ·   κ_C=${r.kappa_C} (central machinery) · κ_D=${r.kappa_D} (Core v0 platform)  [direction anchored, magnitude declared-conservative]`);
  74:     safeLog(`VALUE ONLY (costs off):   status quo ${pct(r.valueOnly.statusQuo)} · Core v0 ${pct(r.valueOnly.coreV0)}  → gain ${pct(r.valueOnly.gain)}`);
  75:     safeLog(`WITH ADMIN COSTS:         status quo ${pct(r.withCosts.statusQuo)} · Core v0 ${pct(r.withCosts.coreV0)}  → gain ${pct(r.withCosts.gain)}`);
  76:     safeLog(`  the admin-cost layer adds ${pct(r.adminCostContribution)} to the gap (the central's heavier machinery costs more).\n`);
  77: 
  78:     // costs OFF reduces E10 to the value stack; planning ON uses E9 (folds in the deferred planning layer — NOT the headline).
  79:     const off = e10(cfg, { nWorlds: 1200, costs: { ...COSTS, kappa_C: 0, kappa_D: 0 } });
  80:     safeLog(`switch check — costs OFF (κ=0): with-costs gain ${pct(off.withCosts.gain)} == value-only gain ${pct(off.valueOnly.gain)} (reduces to the value stack).`);
  81: 
  82:     // κ sensitivity (DECLARED until anchored): how the gap responds to the central's machinery cost.
  83:     safeLog('\nAdmin-cost sensitivity (κ_D=0.03 fixed; κ_C swept — magnitude declared, direction anchored):');
  84:     safeLog('   κ_C     with-costs gain     admin-cost contribution');
  85:     for (const kc of [0.05, 0.10, 0.15, 0.25]) {
  86:       const rk = e10(cfg, { nWorlds: 800, costs: { ...COSTS, kappa_C: kc } });
  87:       safeLog(`   ${kc.toFixed(2)}      ${pct(rk.withCosts.gain).padStart(7)}              ${pct(rk.adminCostContribution).padStart(7)}`);
  88:     }
  89:     safeLog('   → the central runs the value-proxy / allocation / prioritization / AI-fiscalization machinery Core v0');
  90:     safeLog('     eliminates, so κ_C > κ_D widens the gap once the ratio clears the value ratio (~2.7). Direction anchored');
  91:     safeLog('     (IDB Better Spending 2018; low e-government platform costs); point magnitudes declared-and-conservative.');
  92:   });
  93: }
  94: import { fileURLToPath } from 'node:url';
  95: if (process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]) main();

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content '"'scripts/simulation/e4-v5/e10-costs-test.mjs' | ForEach-Object { "'$i++; '"'{0,4}: {1}' -f "'$i, $_ }' in C:\devel\claude-projects\distributed-governance-research
 succeeded in 169ms:
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
  36: // 4) The κ haircut is applied per arm exactly: V_arm = valueOnly_arm · (1 − κ_arm).
  37: {
  38:   const r = e10(cfg, { nWorlds: NW });
  39:   check('central value haircut = (1 − κ_C)', approx(r.withCosts.statusQuo, r.valueOnly.statusQuo * (1 - r.kappa_C), 1e-12));
  40:   check('Core v0 value haircut = (1 − κ_D)', approx(r.withCosts.coreV0, r.valueOnly.coreV0 * (1 - r.kappa_D), 1e-12));
  41: }
  42: 
  43: // 5) COST DIRECTION: with a κ_C/κ_D ratio above the value ratio, admin costs WIDEN the gap; below it, they narrow it
  44: //    (an honest subtlety — Core v0 delivers more, so a proportional cost removes more absolute value from its base).
  45: {
  46:   const valueRatio = (() => { const v = e10(cfg, { nWorlds: NW }).valueOnly; return v.coreV0 / v.statusQuo; })();
  47:   const wide = e10(cfg, { nWorlds: NW, costs: { ...COSTS, kappa_C: 0.30, kappa_D: 0.05 } }); // ratio 6 > valueRatio
  48:   const narrow = e10(cfg, { nWorlds: NW, costs: { ...COSTS, kappa_C: 0.06, kappa_D: 0.05 } }); // ratio ~1.2 < valueRatio
  49:   check('high κ_C/κ_D ratio widens the gap', wide.adminCostContribution > 0, `contrib ${wide.adminCostContribution}`);
  50:   check('low κ_C/κ_D ratio narrows the gap', narrow.adminCostContribution < 0, `contrib ${narrow.adminCostContribution}`);
  51:   check('the crossover is at κ_C/κ_D ≈ the value ratio', valueRatio > 2 && valueRatio < 4, `valueRatio ${valueRatio}`);
  52: }
  53: 
  54: console.log(`\nE10 costs: ${pass} passed, ${fail} failed.`);
  55: process.exit(fail ? 1 : 0);

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content '"'audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md' | ForEach-Object { "'$i++; '"'{0,4}: {1}' -f "'$i, $_ }' in C:\devel\claude-projects\distributed-governance-research
 succeeded in 173ms:
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

codex
The first hard failures are now visible despite all tests passing: E10’s emitted output exposes a bare “value ratio (~2.7),” which is an institutional performance multiplier in substance and bypasses the adapter’s token filter. I’m also testing two result-level risks the current invariants do not cover: negative-value funded projects under the delivery haircut, and whether E9’s “quantified” Shapley layers inherit the unanchored planning model through interaction averaging.
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content '"'scripts/simulation/e4-v5/scenario-configs.mjs' | ForEach-Object { "'$i++; '"'{0,4}: {1}' -f "'$i, $_ }' in C:\devel\claude-projects\distributed-governance-research
 succeeded in 173ms:
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

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$i=0; Get-Content '"'scripts/simulation/e4-v5/scenarios.mjs' | ForEach-Object { "'$i++; '"'{0,4}: {1}' -f "'$i, $_ }' in C:\devel\claude-projects\distributed-governance-research
 succeeded in 168ms:
   1: // E4 v1.14 — FOUR declared scenarios + ONE diagnostic contrast (research/e4-plausible-anchors.md; values in
   2: // scenario-configs.mjs). Each is a full config; we report m ± 95% CI. PRO-CENTRAL = declared central-favourable
   3: // endpoint (at Core-v0-faithful universal participation, this fully-idealized endpoint is at most a bare tie, not a
   4: // win). NO-MYOPIA (bundle) = a competent harm-aware central. MYOPIA-OFF = diagnostic harm-only contrast.
   5: // PROBABLE = source-motivated reference. PRO-DISTRIBUTED = distributed-favourable. All prose below is COMPUTED
   6: // from the runs (never hardcoded), so it can never drift from the numbers.
   7: import { baseConfig, contractHash, resolvedHash } from './contract.mjs';
   8: import { safeLog } from './adapter.mjs';
   9: import { estimand } from './engine.mjs';
  10: import { PRO_CENTRAL, NO_MYOPIA, MYOPIA_OFF, PROBABLE, PRO_DIST, SCENARIO_WORLD as WORLD } from './scenario-configs.mjs';
  11: 
  12: const NW = 800;
  13: const pct = (x) => (x >= 0 ? '+' : '') + (100 * x).toFixed(1) + '%';
  14: function run(name, over) {
  15:   const r = estimand({ ...baseConfig(), ...WORLD, ...over }, { nWorlds: NW });
  16:   // π_deg shows the low-O gate is INERT here (0% => kept = all worlds => ratio-of-sums target is unbiased by gating).
  17:   safeLog(`${name.padEnd(16)} m = ${pct(r.m_hat).padStart(8)}  95% CI(MC) [${pct(r.ci[0])}, ${pct(r.ci[1])}]   Core v0 ${pct(r.dOverO)} · central ${pct(r.cOverO)}   π_deg ${(100 * r.pi_deg).toFixed(0)}%`);
  18:   return r;
  19: }
  20: 
  21: safeLog(`E4 — anchored scenarios (m = D/O − C/O, signed fraction of full-information oracle, parity at 0) — contract ${contractHash()} (captures the full resolved THETA incl. the coverage composition)\n`);
  22: const rc = run('PRO-CENTRAL', PRO_CENTRAL);      // declared central-favourable endpoint — at faithful participation, ~parity
  23: const rp = run('PROBABLE', PROBABLE);            // source-motivated declared reference
  24: const ro = run('MYOPIA-OFF', MYOPIA_OFF);        // GENUINE myopia-only contrast (only s_exp,b_H_C change) — harm channel ALONE
  25: const rn = run('NO-MYOPIA', NO_MYOPIA);          // harm-aware AND competent central bundle
  26: run('PRO-DISTRIBUTED', PRO_DIST);
  27: const pts = (x) => (100 * x).toFixed(1);
  28: const mp = rp.m_hat, mo = ro.m_hat, mn = rn.m_hat;
  29: const declineTot = mp - mn, myopiaAlone = mp - mo, further = mo - mn;
  30: const outcome = (m) => (m < -0.03 ? 'the central wins (material)' : m > 0.03 ? 'Core v0 wins (material)' : 'an immaterial difference (within the materiality band)');
  31: // SYMMETRY of idealized corners (author's correction): reporting ONLY the central's idealized corner is the
  32: // asymmetric-idealization bias. An equally-idealized corner exists for each arm — and they are wildly asymmetric.
  33: // The central's best corner requires ABANDONING the two anchored central handicaps (harm-myopia — salience/
  34: // agenda-setting; projection — Broockman-Skovron) AND a near-harmless "Narnia" world; the symmetric idealized-
  35: // distributed corner keeps the central at its ANCHORED myopia and still wins by a landslide.
  36: const bestCentral = estimand({ ...baseConfig(), ...WORLD, ...PRO_CENTRAL, w: 0, a: 0, b: 1, lambda: 0, b_H_C: 1, s_exp: 0.2, sigma_C: 0.2 }, { nWorlds: NW }).m_hat;
  37: const bestDist = estimand({ ...baseConfig(), ...WORLD, ...PROBABLE, f_active: 1, f_deleg: 0, beta: 0, sigma_cm: 0, pi_opp: 0.30 }, { nWorlds: NW }).m_hat;
  38: safeLog(`\nSYMMETRY of idealized corners (neither is empirically grounded): the CENTRAL's best corner reaches only m = ${pct(bestCentral)}, and ONLY by abandoning both anchored central handicaps (harm-myopia — vs the salience literature; projection — vs Broockman-Skovron) AND assuming a near-harmless world. The SYMMETRIC idealized-DISTRIBUTED corner (perfect signal on a harm-rich world, central KEPT at its anchored myopia) reaches m = ${pct(bestDist)}. Idealization is wildly asymmetric: the central must contradict the anchored literature to eke out a sliver; the distributed's symmetric idealization wins by a landslide. Reporting only the central's corner would be the asymmetric-idealization bias. Within the EMPIRICALLY-ANCHORED space coverage wins decisively — probable ${pct(rp.m_hat)}, and even a fully-competent-but-still-anchored central loses.`);
  39: safeLog('Sequential attribution (path-dependent, nonlinear model): harm-myopia ALONE (MYOPIA-OFF, only s_exp,b_H_C)');
  40: safeLog(`reduces the probable gap ${pct(mp)} → ${pct(mo)}, i.e. ${pts(myopiaAlone)} of the ${pts(declineTot)}-pt decline to ${pct(mn)} (~${Math.round(100 * myopiaAlone / declineTot)}%); the further step to`);
  41: safeLog(`the NO-MYOPIA bundle (unbiased/precise/no-credit) reduces it ${pts(further)} pts (~${Math.round(100 * further / declineTot)}%). Read C/O < 0 as the central destroying value.`);
  42: // Condition 1 (balanced degradation): both arms carry a signal degradation — the distributed arm the realistic
  43: // coverage composition (active/microdelegation/profile), the central its harm-myopia — and the central's must
  44: // dominate. Measured on PROBABLE: the distributed noise effect vs the harm-myopia effect.
  45: const mPure = estimand({ ...baseConfig(), ...WORLD, ...PROBABLE, f_active: 1.0, f_deleg: 0.0, phi_prof: 1.0, k_deleg: 1.0, d_bias: 0.0 }, { nWorlds: NW }).m_hat;
  46: const noiseEff = mp - mPure, harmGateEff = mp - mo;   // apples-to-apples: each is ONE mechanism's ceteris-paribus effect
  47: safeLog(`Balance (condition 1): distributed signal-noise effect ${pts(noiseEff)} pts vs the central harm-gate-ALONE effect ${pts(harmGateEff)} pts (MYOPIA_OFF — the two harm coordinates only) — the central's harm-myopia dominates the distributed signal degradation. (The full competent-central bundle — harm sight + unbiased + precise + no credit — accounts for ${pts(declineTot)} pts, most of the gap.)`);
  48: // Robustness to CORRELATED / common-mode error — the ONE place the coverage arm is structurally advantaged (the
  49: // composition otherwise treats ~n reports/project as independent, so IID error averages out by LLN). Real profiles
  50: // share a platform/recommender and delegation concentrates on super-delegates => a per-project shared error that does
  51: // NOT average out. The point estimate above is the independent-error reference (sigma_cm=0); here is the stress:
  52: const cmRun = (s) => estimand({ ...baseConfig(), ...WORLD, ...PROBABLE, sigma_cm: s }, { nWorlds: NW }).m_hat;
  53: safeLog(`Common-mode robustness (correlated profile/delegate error): PROBABLE ${pct(cmRun(0))} (independent reference) → ${pct(cmRun(0.5))} (modest) → ${pct(cmRun(1.0))} (strong). Coverage still leads across the range; this right-sizes the robustness claim (it does not flip the sign).`);
  54: // Provenance (Codex #7): a hash of the FULLY-RESOLVED run manifest — merged configs + world + run controls +
  55: // the corrected-reader benchmark — so the identifier uniquely captures the reported inputs (contractHash above
  56: // covers only the contract DEFINITIONS/defaults).
  57: const RESOLVED = { world: WORLD, nWorlds: NW, contract: contractHash(), scenarios: Object.fromEntries(
  58:   [['PRO_CENTRAL', PRO_CENTRAL], ['PROBABLE', PROBABLE], ['MYOPIA_OFF', MYOPIA_OFF], ['NO_MYOPIA', NO_MYOPIA], ['PRO_DIST', PRO_DIST]]
  59:     .map(([k, c]) => [k, { ...baseConfig(), ...WORLD, ...c }])),
  60:   bestCentral: { ...baseConfig(), ...WORLD, ...PRO_CENTRAL, w: 0, a: 0, b: 1, lambda: 0, b_H_C: 1, s_exp: 0.2, sigma_C: 0.2 } };
  61: safeLog(`\nrun manifest hash (fully-resolved inputs, uniquely identifies this run): ${resolvedHash(RESOLVED)}`);

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "@'
import { baseConfig } from './scripts/simulation/e4-v5/contract.mjs';
import { SCENARIO_WORLD as W, PRO_CENTRAL, PROBABLE, MYOPIA_OFF, PRO_DIST } from './scripts/simulation/e4-v5/scenario-configs.mjs';
import { delivered2x2 } from './scripts/simulation/e4-v5/e5-delivery.mjs';
import { fullStack, PLANNING } from './scripts/simulation/e4-v5/e9-fullstack.mjs';
import { e10 } from './scripts/simulation/e4-v5/e10-costs.mjs';
const scenarios={PRO_CENTRAL,PROBABLE,MYOPIA_OFF,PRO_DIST};
for (const [name,over] of Object.entries(scenarios)) {
  const cfg={...baseConfig(),...W,...over};
  const e5=delivered2x2(cfg,{nWorlds:600});
  const e9=fullStack(cfg,{nWorlds:600});
  const e9r=fullStack(cfg,{nWorlds:600,planning:{...PLANNING,residualMode:'recycle'}});
  const e10r=e10(cfg,{nWorlds:600});
  console.log(JSON.stringify({name,e5:{S:e5.cells.S,A2:e5.cells.A2,full:e5.full,selC:e5.selection.central,selD:e5.selection.distributed,delC:e5.delivery.centralOpaque,delD:e5.delivery.distributedVerified},e9:{S:e9.statusQuo,D:e9.coreV0,gain:e9.fullStackGain,planning:e9.attribution.planning,selection:e9.attribution.selection,delivery:e9.attribution.delivery,planDS:e9.planningUnderDistributedSel,utilS:e9.utilization.c_c_op,utilD:e9.utilization.d_d_ve},e9recycle:{gain:e9r.fullStackGain,planning:e9r.attribution.planning,selection:e9r.attribution.selection,delivery:e9r.attribution.delivery},e10:{value:e10r.valueOnly.gain,cost:e10r.withCosts.gain,contrib:e10r.adminCostContribution}}));
}
'@ | node --input-type=module" in C:\devel\claude-projects\distributed-governance-research
 succeeded in 25440ms:
{"name":"PRO_CENTRAL","e5":{"S":0.7589424932353497,"A2":0.9048964768900013,"full":0.14595398365465162,"selC":0.9758927607937667,"selD":0.9525226072526342,"delC":0.7776904632616035,"delD":0.9499999999999987},"e9":{"S":0.6895304836765158,"D":0.8447716845914056,"gain":0.1552412009148898,"planning":0.02379629944359777,"selection":-0.021858812997518812,"delivery":0.15330371446881083,"planDS":0.02616615762537078,"utilS":0.9336190104966566,"utilD":0.940899346033619},"e9recycle":{"gain":0.1463699856724574,"planning":0.01479953861090464,"selection":-0.027789345826691528,"delivery":0.15935979288824428},"e10":{"value":0.14595398365465162,"cost":0.23264846333325406,"contrib":0.08669447967860244}}
{"name":"PROBABLE","e5":{"S":0.3422937204746036,"A2":0.9327853347320718,"full":0.5904916142574682,"selC":0.4434501179389986,"selD":0.9818792997179705,"delC":0.7718877651120387,"delD":0.9499999999999998},"e9":{"S":0.2946045471460033,"D":0.7795534492304351,"gain":0.4849489020844318,"planning":0.0074834760784300396,"selection":0.368749227511824,"delivery":0.10871619849417774,"planDS":-0.06028088737262505,"utilS":0.9405432012909416,"utilD":0.8680446919943107},"e9recycle":{"gain":0.5782826165842816,"planning":0.03252101982652205,"selection":0.4286775778407672,"delivery":0.1170840189169923},"e10":{"value":0.5904916142574682,"cost":0.6138521122866964,"contrib":0.023360498029228238}}
{"name":"MYOPIA_OFF","e5":{"S":0.46763361821393956,"A2":0.9327853347320718,"full":0.46515171651813225,"selC":0.6056956680992608,"selD":0.9818792997179705,"delC":0.7720603643764284,"delD":0.9499999999999998},"e9":{"S":0.41278959911744584,"D":0.7795534492304351,"gain":0.3667638501129893,"planning":-0.0032683317753474297,"selection":0.24940977775884882,"delivery":0.12062240412948785,"planDS":-0.04369327736916995,"utilS":0.9368600770405564,"utilD":0.8680446919943107},"e9recycle":{"gain":0.4532879931907754,"planning":0.025557201046727873,"selection":0.2966993578840728,"delivery":0.13103143425997468},"e10":{"value":0.46515171651813225,"cost":0.5073131992082609,"contrib":0.04216148269012865}}
{"name":"PRO_DIST","e5":{"S":-0.8521666689576114,"A2":0.9088922214851628,"full":1.7610588904427742,"selC":-1.096668605471109,"selD":0.9567286541949072,"delC":0.7770503000690314,"delD":0.9500000000000011},"e9":{"S":-0.8150516441722049,"D":0.42703639438909213,"gain":1.2420880385612971,"planning":0.10218655299047683,"selection":1.16308249999225,"delivery":-0.023181014421429794,"planDS":-0.380419245176818,"utilS":0.9389148927675887,"utilD":0.3785614126644101},"e9recycle":{"gain":1.7399019180564392,"planning":0.05054020079440097,"selection":1.7023618794048216,"delivery":-0.013000162142783434},"e10":{"value":1.7610588904427742,"cost":1.6059671234545774,"contrib":-0.15509176698819682}}

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "@'
import { baseConfig } from './scripts/simulation/e4-v5/contract.mjs';
import { SCENARIO_WORLD as W, PRO_CENTRAL, PROBABLE, MYOPIA_OFF, PRO_DIST } from './scripts/simulation/e4-v5/scenario-configs.mjs';
import { generateWorld, makeRng, fundedSet } from './scripts/simulation/e4-v5/engine.mjs';
const scenarios={PRO_CENTRAL,PROBABLE,MYOPIA_OFF,PRO_DIST};
for (const [name,over] of Object.entries(scenarios)) {
 const cfg={...baseConfig(),...W,...over}, rng=makeRng(20260711);
 const z={C:{n:0,negN:0,pos:0,neg:0,cost:0},D:{n:0,negN:0,pos:0,neg:0,cost:0},O:0};
 for(let w=0;w<600;w++){
  const p=generateWorld(cfg,rng); let tc=0; for(const x of p)tc+=x.c; const b=cfg.phi*tc;
  for(const [arm,key,opts] of [['C','M_C',{creditTilt:true}],['D','M_D',{}]]){
   for(const j of fundedSet(p,key,cfg,b,opts)){const s=p[j].S;z[arm].n++;z[arm].cost+=p[j].c;if(s<0){z[arm].negN++;z[arm].neg+=s}else z[arm].pos+=s}
  }
  for(const j of fundedSet(p,'S',cfg,b,{}))z.O+=p[j].S;
 }
 for(const arm of ['C','D']){z[arm].negShare=z[arm].negN/z[arm].n;z[arm].total=z[arm].pos+z[arm].neg;z[arm].negAbsOverO=-z[arm].neg/z.O;z[arm].posOverO=z[arm].pos/z.O;z[arm].totalOverO=z[arm].total/z.O}
 console.log(JSON.stringify({name,...z}));
}
'@ | node --input-type=module" in C:\devel\claude-projects\distributed-governance-research
 succeeded in 5341ms:
{"name":"PRO_CENTRAL","C":{"n":34710,"negN":495,"pos":44414.50886600651,"neg":-100.91076290314703,"cost":92127.69007362891,"negShare":0.014261019878997408,"total":44313.59810310336,"negAbsOverO":0.0022222994118922777,"posOverO":0.9781150602056589,"totalOverO":0.9758927607937665},"D":{"n":35293,"negN":1010,"pos":43543.26103845033,"neg":-290.8610846060705,"cost":92158.17445978895,"negShare":0.028617572889808176,"total":43252.39995384426,"negAbsOverO":0.006405465568452881,"posOverO":0.9589280728210838,"totalOverO":0.9525226072526309},"O":45408.26603433332}
{"name":"PROBABLE","C":{"n":38376,"negN":13419,"pos":23451.15627738161,"neg":-9090.039971646314,"cost":94152.08461625688,"negShare":0.349671669793621,"total":14361.116305735297,"negAbsOverO":0.28068704491217,"posOverO":0.7241371628511741,"totalOverO":0.4434501179390042},"D":{"n":34191,"negN":969,"pos":31932.87359457456,"neg":-134.74737695269806,"cost":94123.15627209097,"negShare":0.028340791436342896,"total":31798.126217621862,"negAbsOverO":0.004160800520624012,"posOverO":0.9860401002385983,"totalOverO":0.9818792997179743},"O":32384.964452102467}
{"name":"MYOPIA_OFF","C":{"n":36636,"negN":10100,"pos":25146.23704019049,"neg":-5530.804360003273,"cost":94149.51628466882,"negShare":0.27568511846271426,"total":19615.432680187216,"negAbsOverO":0.17078309189387444,"posOverO":0.7764787599931414,"totalOverO":0.605695668099267},"D":{"n":34191,"negN":969,"pos":31932.87359457456,"neg":-134.74737695269806,"cost":94123.15627209097,"negShare":0.028340791436342896,"total":31798.126217621862,"negAbsOverO":0.004160800520624012,"posOverO":0.9860401002385983,"totalOverO":0.9818792997179743},"O":32384.964452102467}
{"name":"PRO_DIST","C":{"n":36801,"negN":25277,"pos":7325.967427203296,"neg":-24706.56916012606,"cost":94238.07000492793,"negShare":0.6868563354256678,"total":-17380.60173292276,"negAbsOverO":1.5589171861344302,"posOverO":0.4622485806633131,"totalOverO":-1.096668605471117},"D":{"n":30045,"negN":5027,"pos":15822.171058570371,"neg":-659.4139393461293,"cost":89617.42183425836,"negShare":0.1673156931269762,"total":15162.757119224241,"negAbsOverO":0.041607222603870536,"posOverO":0.9983358767987799,"totalOverO":0.9567286541949093},"O":15848.544989993801}

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "@'
import { baseConfig } from './scripts/simulation/e4-v5/contract.mjs';
import { SCENARIO_WORLD as W, PROBABLE } from './scripts/simulation/e4-v5/scenario-configs.mjs';
import { fullStack, PLANNING } from './scripts/simulation/e4-v5/e9-fullstack.mjs';
const cfg={...baseConfig(),...W,...PROBABLE};
const cases=[
 ['default',{}],['sec0',{secValSpread:0}],['sec0.1',{secValSpread:.1}],['sec0.6',{secValSpread:.6}],
 ['cov0',{covSees:0}],['cov1',{covSees:1}],['credit0',{creditCoef:0}],['credit0.3',{creditCoef:.3}],
 ['agenda1',{agendaCapture:1}],['agenda3',{agendaCapture:3}],['recycle',{residualMode:'recycle'}],
 ['all-neutral',{secValSpread:0,creditCoef:0,covSees:0,assoc:0}],['hardC',{hardExclude:1,nKeep:5,excludeMode:'central'}]
];
for(const [name,over] of cases){const r=fullStack(cfg,{nWorlds:500,planning:{...PLANNING,...over}});console.log(JSON.stringify({name,gain:r.fullStackGain,p:r.attribution.planning,s:r.attribution.selection,d:r.attribution.delivery,planDS:r.planningUnderDistributedSel,uC:r.utilization.c_c_op,uD:r.utilization.d_d_ve}));}
'@ | node --input-type=module" in C:\devel\claude-projects\distributed-governance-research
 succeeded in 14836ms:
{"name":"default","gain":0.4879094509305031,"p":0.007181907560198819,"s":0.3710403228390815,"d":0.10968722053122276,"planDS":-0.06249923779265354,"uC":0.9411928079150031,"uD":0.8643904726082808}
{"name":"sec0","gain":0.4826991427714108,"p":-0.013762070888625818,"s":0.38498014636555544,"d":0.11148106729448115,"planDS":-0.0756712184432784,"uC":0.9411928079150031,"uD":0.8874584014908043}
{"name":"sec0.1","gain":0.4854143818640855,"p":-0.006328744009616083,"s":0.3812672802901983,"d":0.11047584558350321,"planDS":-0.0706833251196406,"uC":0.9411928079150031,"uD":0.8789217773761266}
{"name":"sec0.6","gain":0.5369627074624446,"p":0.14494094503471716,"s":0.28577368590992125,"d":0.10624807651780616,"planDS":0.05196309949751843,"uC":0.9411928079150031,"uD":0.7724855419150517}
{"name":"cov0","gain":0.4789323131045776,"p":-0.010082679623018112,"s":0.38028754823090427,"d":0.10872744449669144,"planDS":-0.071476375618579,"uC":0.9411928079150031,"uD":0.8874584014908043}
{"name":"cov1","gain":0.4732387581959927,"p":-0.0007749620279640726,"s":0.36599647439613353,"d":0.10801724582782322,"planDS":-0.07716993052716392,"uC":0.9411928079150031,"uD":0.847763967366231}
{"name":"credit0","gain":0.48532200925836755,"p":0.00470895103762627,"s":0.37067747814560903,"d":0.10993558007513217,"planDS":-0.06446962766120845,"uC":0.9412737085568816,"uD":0.8643904726082808}
{"name":"credit0.3","gain":0.4976677012500808,"p":0.016110513001435862,"s":0.3727986897860873,"d":0.1087584984625576,"planDS":-0.05454044179052431,"uC":0.9424200815562493,"uD":0.8643904726082808}
{"name":"agenda1","gain":0.4931057448687988,"p":0.021818518384030622,"s":0.3625752077909485,"d":0.10871201869381969,"planDS":-0.037138602397835285,"uC":0.9472381390686706,"uD":0.8643904726082808}
{"name":"agenda3","gain":0.5209382111012374,"p":0.07830715403229249,"s":0.33913283560692375,"d":0.10349822146202109,"planDS":0.05176210606980969,"uC":0.9557414459072169,"uD":0.8643904726082808}
{"name":"recycle","gain":0.5844082258671,"p":0.03315703388051283,"s":0.43310183136857794,"d":0.11814936061800915,"planDS":0.0017007658048515673,"uC":0.9968842934469732,"uD":0.9964058242770492}
{"name":"all-neutral","gain":0.4821255670048437,"p":-0.014056432213653065,"s":0.3846099357345239,"d":0.11157206348397286,"planDS":-0.07529707323569601,"uC":0.9412737085568816,"uD":0.8874584014908043}
{"name":"hardC","gain":0.582116610109841,"p":0.17973818767238411,"s":0.30821024895776544,"d":0.09416817347969131,"planDS":0.19743687623297856,"uC":0.962022614763765,"uD":0.8643904726082808}

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "rg -n -i \"×|[0-9](\\.[0-9]+)?x|fold|times|D/C|C/D|value ratio|parity\" scripts/simulation/e4-v5/e5-delivery.mjs scripts/simulation/e4-v5/e5-delivery-test.mjs scripts/simulation/e4-v5/e9-fullstack.mjs scripts/simulation/e4-v5/e9-fullstack-test.mjs scripts/simulation/e4-v5/e10-costs.mjs scripts/simulation/e4-v5/e10-costs-test.mjs scripts/simulation/e4-v5/engine.mjs scripts/simulation/e4-v5/contract.mjs scripts/simulation/e4-v5/adapter.mjs audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md" in C:\devel\claude-projects\distributed-governance-research
 succeeded in 170ms:
audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md:10:`V_arm / O = (delivered value_arm / O) · (1 − κ_arm)`, `m10 = V_D/O − V_C/O`. Status quo = central selection × opaque
audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md:11:delivery; Core v0 = distributed selection × verified delivery.
audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md:15:  not-yet-anchorable mechanism), so it must NOT be folded quantitatively into the cost result. OFF ⇒ value base = E5;
audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md:25:| ratio κ_C/κ_D ≈ **5** | — | verified central machinery cost is **≥10–30×** platform run cost → the modeled 5× **understates** the structural gap | conservative |
audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md:35:**Honest subtlety (tested):** admin costs WIDEN the Core-v0 gap only when `κ_C/κ_D` exceeds the **value ratio (~2.7)** —
audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md:36:Core v0 delivers more, so a proportional cost removes more absolute value from its base. At the anchored 5× ratio, costs
audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md:37:widen the gap; below ~2.7× they narrow it. The verified evidence (ratio ≥10–30×) sits well above the crossover, so the
audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:1:# E5 re-model — Selection × Delivery on the clean E4 engine
audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:30:  fraction of the full-information, perfectly-delivered benchmark it achieves — parity at that reference, **no
audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:31:  compound multiplier, no ×/D-C**.
audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:180:- Re-label `e5-layers.mjs` as the E10 cost scaffolding; wire E5 delivery into the paper's Finding 5 with the
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:1:# E9 design sketch — the full-stack comparison (planning × selection × delivery)
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:10:eligibility frame / macro categorization) as a *value* contrast — and the old ≈1.05× macro factor was a
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:20:## The planning layer — what makes it a genuine value contrast (not ≈1×)
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:40:perfect selection + perfect delivery). Parity at the oracle; percentages only; no compound multiplier.
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:42:## Design (a 2×2×2, but the headline is the two corners)
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:47:selection×delivery.
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:99:**The planning layer is a genuine, positive value contrast** — not the retired ≈1.05× macro factor's near-parity. It
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:197:  report the full **dispersion × association** grid.
scripts/simulation/e4-v5/adapter.mjs:5:// m_hat is a SIGNED FRACTION of the oracle (parity at 0), never a ratio-with-parity-1 and never suffixed with 'x'.
scripts/simulation/e4-v5/adapter.mjs:10:// signs (× ✕ ✖ ⨯), a non-breaking hyphen, a division slash, etc. cannot smuggle a multiplier/ratio past the filter
scripts/simulation/e4-v5/adapter.mjs:13:const HTML_MULT  = /&times;|&#0*215;|&#x0*d7;/gi;   // HTML-entity multiplication sign → x
scripts/simulation/e4-v5/adapter.mjs:14:const CONF_X = /[×✕✖⨯хХｘＸ]/g;               // → x
scripts/simulation/e4-v5/adapter.mjs:19:const NUM_FOLD    = new RegExp(`(\\d(\\.\\d+)?|\\b(${NUMWORD}))[\\s-]*(fold|times)\\b`, 'i');   // "2.2-fold","two times","fourfold"
scripts/simulation/e4-v5/adapter.mjs:21:const RATIO_TOKEN = /\b[dc]\s*\/\s*[cd]\b/i;   // D/C or C/D, any case
scripts/simulation/e4-v5/adapter.mjs:24:// numeric or number-word N-fold / N-times; bare twice/double/triple/quadruple; D/C or C/D any case; zero-width
scripts/simulation/e4-v5/adapter.mjs:30:  if (NUM_FOLD.test(norm)) hits.push('N-fold / N-times multiplier phrasing (numeric or word)');
scripts/simulation/e4-v5/adapter.mjs:32:  if (RATIO_TOKEN.test(norm)) hits.push('institution ratio (D/C or C/D, any case)');
scripts/simulation/e4-v5/adapter.mjs:51:    `  m̂ (signed fraction of full-information oracle, parity at 0): ${pct(out.m_hat)}  CI=[${pct(out.ci[0])}, ${pct(out.ci[1])}]`,
scripts/simulation/e4-v5/adapter.mjs:52:    `  sign backbone over D_F: Core v0 wins ${sh(out.df_dist_share)} of sampled θ-points · central ${sh(out.df_cent_share)} · parity ${sh(out.df_par_share)}  (a COUNT of resolved points, not a probability)`,
scripts/simulation/e4-v5/engine.mjs:12:    s |= 0; s = (s + 0x6D2B79F5) | 0;
scripts/simulation/e4-v5/engine.mjs:192:  const bootRng = makeRng((seed ^ 0x9e3779b9) >>> 0);
scripts/simulation/e4-v5/e10-costs-test.mjs:4:import { delivered2x2 } from './e5-delivery.mjs';
scripts/simulation/e4-v5/e10-costs-test.mjs:25:  const e5 = delivered2x2(cfg, { nWorlds: NW });
scripts/simulation/e4-v5/e10-costs-test.mjs:43:// 5) COST DIRECTION: with a κ_C/κ_D ratio above the value ratio, admin costs WIDEN the gap; below it, they narrow it
scripts/simulation/e4-v5/e10-costs-test.mjs:51:  check('the crossover is at κ_C/κ_D ≈ the value ratio', valueRatio > 2 && valueRatio < 4, `valueRatio ${valueRatio}`);
scripts/simulation/e4-v5/e9-fullstack-test.mjs:1:// E9 full-stack tests — invariants for PLANNING × SELECTION × DELIVERY (persistent sectors, Shapley attribution).
scripts/simulation/e4-v5/e9-fullstack-test.mjs:4:import { delivered2x2, DELIVERY } from './e5-delivery.mjs';
scripts/simulation/e4-v5/e9-fullstack-test.mjs:15:// 1) REDUCES TO E5: one sector ⇒ zero value tilt ⇒ planning is a no-op ⇒ the stack collapses to E5 selection×delivery.
scripts/simulation/e4-v5/e9-fullstack-test.mjs:18:  const e5 = delivered2x2(cfg, { nWorlds: NW });
scripts/simulation/e4-v5/e5-delivery-test.mjs:1:// E5 delivery tests — the invariants that keep the SELECTION × DELIVERY experiment honest and E4-consistent.
scripts/simulation/e4-v5/e5-delivery-test.mjs:3:import { delivered2x2, sweepOpaque, replicateSeeds, jointSweep, validateDelivery, DELIVERY } from './e5-delivery.mjs';
scripts/simulation/e4-v5/e5-delivery-test.mjs:21:  const r = delivered2x2(cfg, { nWorlds: NW, delivery: perfect });
scripts/simulation/e4-v5/e5-delivery-test.mjs:39:  const r = delivered2x2(cfg, { nWorlds: NW });
scripts/simulation/e4-v5/e5-delivery-test.mjs:57:  const off  = delivered2x2(cfg, { nWorlds: NW });
scripts/simulation/e4-v5/e5-delivery-test.mjs:58:  const det  = delivered2x2(cfg, { nWorlds: NW, delivery: { ...DELIVERY, mon_detect: 0.05, mon_recovery: 0.0 } });
scripts/simulation/e4-v5/e5-delivery-test.mjs:59:  const both = delivered2x2(cfg, { nWorlds: NW, delivery: { ...DELIVERY, mon_detect: 0.05, mon_recovery: 0.20 } });
scripts/simulation/e4-v5/e5-delivery-test.mjs:69:  const base = delivered2x2(cfg, { nWorlds: NW });
scripts/simulation/e4-v5/e5-delivery-test.mjs:70:  const strong = delivered2x2(cfg, { nWorlds: NW, delivery: stronger });
scripts/simulation/e4-v5/e5-delivery-test.mjs:93:  check('delivered2x2 validates its delivery arg', (() => { try { delivered2x2(cfg, { nWorlds: 10, delivery: { ...DELIVERY, mon_detect: 2 } }); return false; } catch { return true; } })());
scripts/simulation/e4-v5/e5-delivery-test.mjs:99:  const base = delivered2x2(cfg, { nWorlds: NW });
scripts/simulation/e4-v5/e5-delivery-test.mjs:100:  const vr   = delivered2x2(cfg, { nWorlds: NW, delivery: { ...DELIVERY, val_risk: 0.6 } });
scripts/simulation/e4-v5/e5-delivery-test.mjs:114:  check('joint LHS sweep: even the worst sampled draw keeps the full gain near/above parity', js.min > -0.1, `min ${js.min}`);
scripts/simulation/e4-v5/e10-costs.mjs:8://     capture is the dominant, not-yet-anchorable mechanism), so it must NOT be folded quantitatively into the cost
scripts/simulation/e4-v5/e10-costs.mjs:9://     result. Planning OFF ⇒ the value base is E5 (selection × delivery). Planning ON ⇒ the value base is E9.
scripts/simulation/e4-v5/e10-costs.mjs:20:import { delivered2x2, DELIVERY } from './e5-delivery.mjs';
scripts/simulation/e4-v5/e10-costs.mjs:36:                      //     0.005–0.03). base κ_D ≪ κ_C: verified central-machinery cost is ≥10–30× platform run cost,
scripts/simulation/e4-v5/e10-costs.mjs:38:  planningOn: false,  // author requirement: PLANNING OFF by default (its magnitude is deferred; do not fold into costs)
scripts/simulation/e4-v5/e10-costs.mjs:41:// The delivered-value base: E5 (selection × delivery) with planning OFF, or E9 (the full stack) with planning ON.
scripts/simulation/e4-v5/e10-costs.mjs:42:// Status quo = central selection × opaque delivery; Core v0 = distributed selection × verified delivery.
scripts/simulation/e4-v5/e10-costs.mjs:48:  const v = delivered2x2(cfg, { ...opts, delivery });
scripts/simulation/e4-v5/e10-costs.mjs:71:    safeLog('E10 — the COST layer on the delivered-value stack (PROBABLE world). Parity at the oracle reference.');
scripts/simulation/e4-v5/e10-costs.mjs:78:    // costs OFF reduces E10 to the value stack; planning ON uses E9 (folds in the deferred planning layer — NOT the headline).
scripts/simulation/e4-v5/e10-costs.mjs:90:    safeLog('     eliminates, so κ_C > κ_D widens the gap once the ratio clears the value ratio (~2.7). Direction anchored');
scripts/simulation/e4-v5/e5-delivery.mjs:1:// E5 v1.14 — the DELIVERED-VALUE experiment: SELECTION × DELIVERY, rebuilt on the clean E4 engine.
scripts/simulation/e4-v5/e5-delivery.mjs:5:// layers can be read SEPARATELY and jointly on the SAME funded portfolios — a clean 2×2, not the legacy engine that
scripts/simulation/e4-v5/e5-delivery.mjs:12://   Arm S  = central   × opaque    (status quo)
scripts/simulation/e4-v5/e5-delivery.mjs:13://   Arm A1 = central   × verified  (delivery effect, selection held central)
scripts/simulation/e4-v5/e5-delivery.mjs:14://   Arm A3 = distributed × opaque  (selection effect, delivery held weak)
scripts/simulation/e4-v5/e5-delivery.mjs:15://   Arm A2 = distributed × verified (the full architecture)
scripts/simulation/e4-v5/e5-delivery.mjs:91:// machinery on top of a planning layer — E9 = planning × E5.
scripts/simulation/e4-v5/e5-delivery.mjs:109:function runWorld2x2(cfg, rng, execRng, del) {
scripts/simulation/e4-v5/e5-delivery.mjs:140:export function delivered2x2(cfg, { nWorlds = NUM.n_worlds.value, seed = NUM.seed.value, delivery = DELIVERY } = {}) {
scripts/simulation/e4-v5/e5-delivery.mjs:143:  const execRng = makeRng((seed ^ 0x5bd1e995) >>> 0);      // separate stream ⇒ worlds match the E4 estimand exactly
scripts/simulation/e4-v5/e5-delivery.mjs:148:    const r = runWorld2x2(cfg, rng, execRng, delivery);
scripts/simulation/e4-v5/e5-delivery.mjs:162:  const B = NUM.bootstrap_reps.value, bRng = makeRng((seed ^ 0x9e3779b9) >>> 0);
scripts/simulation/e4-v5/e5-delivery.mjs:193:    // composition: each cell equals its own selection efficiency times its own delivered fraction (an accounting
scripts/simulation/e4-v5/e5-delivery.mjs:214:    const r = delivered2x2(cfg, { nWorlds, delivery: del });
scripts/simulation/e4-v5/e5-delivery.mjs:242:  for (let s = 0; s < nSeeds; s++) vals.push(delivered2x2(cfg, { nWorlds, seed: (NUM.seed.value + s * 0x9e3779b1) >>> 0, delivery }).full);
scripts/simulation/e4-v5/e5-delivery.mjs:257:  const keys = Object.keys(ranges), rng = makeRng((NUM.seed.value ^ 0x1234abcd) >>> 0), cols = {};
scripts/simulation/e4-v5/e5-delivery.mjs:272:    const rr = delivered2x2(cfg, { nWorlds, delivery: del });
scripts/simulation/e4-v5/e5-delivery.mjs:292:    const r = delivered2x2(cfg, { nWorlds: 1200 });
scripts/simulation/e4-v5/e5-delivery.mjs:294:    safeLog('Parity at the oracle reference (perfect-delivery full-information greedy). No compound multiplier; layers reported separately.\n');
scripts/simulation/e4-v5/e5-delivery.mjs:319:    const rc = delivered2x2(cfg, { nWorlds: 1200, delivery: { ...DELIVERY, mon_detect: 0.05, mon_recovery: 0.0 } });
scripts/simulation/e4-v5/e5-delivery.mjs:325:      const rr = delivered2x2(cfg, { nWorlds: 700, delivery: { ...DELIVERY, mon_detect: c, mon_recovery: 0.0 } });
scripts/simulation/e4-v5/e5-delivery.mjs:329:    const rr2 = delivered2x2(cfg, { nWorlds: 700, delivery: { ...DELIVERY, mon_detect: 0.05, mon_recovery: 0.20 } });
scripts/simulation/e4-v5/e5-delivery.mjs:334:    const r0 = delivered2x2(cfg, { nWorlds: 1200, delivery: { ...DELIVERY, verified: { ...DELIVERY.verified, rep: 0.0 } } });
scripts/simulation/e4-v5/e5-delivery.mjs:350:      const rv = delivered2x2(cfg, { nWorlds: 800, delivery: { ...DELIVERY, val_risk: vr } });
scripts/simulation/e4-v5/e9-fullstack.mjs:1:// E9 — the FULL STACK: PLANNING × SELECTION × DELIVERY. Built ON E5 (reuses its delivery machinery) + the E4 engine.
scripts/simulation/e4-v5/e9-fullstack.mjs:2:// E4 = selection only; E5 = selection × delivery; E9 adds the third Core-v0 layer, PLANNING (constructing the
scripts/simulation/e4-v5/e9-fullstack.mjs:15:// visibility sectors — the honest full contrast the near-parity "macro layer" never measured (it compared planning
scripts/simulation/e4-v5/e9-fullstack.mjs:16:// options within a shared frame). 2x2x2 = 8 cells; the headline diagonal is all-central (status quo) vs all-distributed
scripts/simulation/e4-v5/e9-fullstack.mjs:139:// One world: executors (separate stream), persistent sectors (planning stream), then the FULL 2×2×2 = 8 cells over the
scripts/simulation/e4-v5/e9-fullstack.mjs:140:// TRUE adjusted value Sadj. Cell key = planning(c/d) _ selection(c/d) _ delivery(op/ve).
scripts/simulation/e4-v5/e9-fullstack.mjs:208:  const rng = makeRng(seed), execRng = makeRng((seed ^ 0x5bd1e995) >>> 0), pRng = makeRng((seed ^ 0x27d4eb2f) >>> 0);
scripts/simulation/e4-v5/e9-fullstack.mjs:225:  const B = NUM.bootstrap_reps.value, bRng = makeRng((seed ^ 0x9e3779b9) >>> 0);
scripts/simulation/e4-v5/e9-fullstack.mjs:273:    safeLog('E9 — FULL STACK: PLANNING, SELECTION and DELIVERY (built on E5, PROBABLE world). Parity at the oracle');
scripts/simulation/e4-v5/contract.mjs:121:// ---- CLOSED output schema (embargo-critical): additionalProperties:false; cannot express D/C or ratio-parity-1 ----
scripts/simulation/e4-v5/contract.mjs:143:  // NOTE: there is deliberately NO field able to carry D/C, a ratio with parity 1, or an institution-performance
scripts/simulation/e4-v5/contract.mjs:144:  // multiplier. The render adapter additionally rejects the tokens 'x'/'×'/'D/C' in performance context.
scripts/simulation/e4-v5/contract.mjs:148:export const EMBARGO_TOKENS = ['×', 'D/C', 'C/D'];
scripts/simulation/e4-v5/contract.mjs:206:  let h = 0x811c9dc5;
scripts/simulation/e4-v5/contract.mjs:207:  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 0x01000193) >>> 0; }
scripts/simulation/e4-v5/contract.mjs:222:  let h = 0x811c9dc5;
scripts/simulation/e4-v5/contract.mjs:225:    h = Math.imul(h, 0x01000193) >>> 0;

web search: 
web search: site:publications.iadb.org Better Spending for Better Lives 2018 4.4% GDP 16% expenditure procurement payroll transfers PDF ...
web search: 
web search: site:openknowledge.worldbank.org e-procurement cost benefit analysis operating cost percentage spend managed KONEPS GeM ProZorro ...
web search: 
web search: Chile mental health budget 2% health budget 6.7 OECD 2025 primary source ...
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "@'
import { assertNoEmbargoedTokens } from './scripts/simulation/e4-v5/adapter.mjs';
for (const s of ['value ratio (~2.7)','Parity at the oracle reference','2.7×','D/C','2.7-fold']) {
 try { assertNoEmbargoedTokens(s); console.log(JSON.stringify({s,accepted:true})); }
 catch(e){ console.log(JSON.stringify({s,accepted:false,error:e.message})); }
}
'@ | node --input-type=module" in C:\devel\claude-projects\distributed-governance-research
 succeeded in 208ms:
{"s":"value ratio (~2.7)","accepted":true}
{"s":"Parity at the oracle reference","accepted":true}
{"s":"2.7×","accepted":false,"error":"[embargo] rendered text contains forbidden performance notation: multiplier-suffix (number+x, incl. Unicode/HTML confusables), token '×'"}
{"s":"D/C","accepted":false,"error":"[embargo] rendered text contains forbidden performance notation: institution ratio (D/C or C/D, any case), token 'D/C'"}
{"s":"2.7-fold","accepted":false,"error":"[embargo] rendered text contains forbidden performance notation: N-fold / N-times multiplier phrasing (numeric or word)"}

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'rg -n -i "publication-ready|robust|anchor|conservative|dominant|identified|not a conclusion|illustrative|widen|narrow|no overlap|no double|guaranteed optimum|upper bound|exact" audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md scripts/simulation/e4-v5/e5-delivery.mjs scripts/simulation/e4-v5/e9-fullstack.mjs scripts/simulation/e4-v5/e10-costs.mjs' in C:\devel\claude-projects\distributed-governance-research
 succeeded in 179ms:
scripts/simulation/e4-v5/e9-fullstack.mjs:11://   Selection & delivery regimes: exactly as E5.
scripts/simulation/e4-v5/e9-fullstack.mjs:18:// guaranteed optimum — cells can exceed it). nSec=1 reduces EXACTLY to E5.
scripts/simulation/e4-v5/e9-fullstack.mjs:28:  nSec: 10,           // number of persistent SECTORS (anchored: UN COFOG has 10 top-level functions)
scripts/simulation/e4-v5/e9-fullstack.mjs:31:                      //     reallocated to the sectors it does fund). Anchored in DIRECTION (central structurally
scripts/simulation/e4-v5/e9-fullstack.mjs:38:  secValSpread: 0.184, // cross-sector TRUE-value dispersion, in units of project value. PROVISIONALLY ANCHORED to the
scripts/simulation/e4-v5/e9-fullstack.mjs:39:                      //     between-sector return-per-cost SD (World Bank OED portfolio ≈0.184; anchor round). The
scripts/simulation/e4-v5/e9-fullstack.mjs:40:                      //     planning contribution scales with this; NOT a robust large effect. (0.3 is a declared stress.)
scripts/simulation/e4-v5/e9-fullstack.mjs:41:  creditCoef: 0.076,  // central planner's POLITICAL-CREDIT weight on sector visibility. PROVISIONALLY ANCHORED to the
scripts/simulation/e4-v5/e9-fullstack.mjs:43:                      //     ≈0.076). Direction anchored; the point value is a provisional moment map, not transported.
scripts/simulation/e4-v5/e9-fullstack.mjs:56:// with zero value tilt ⇒ E9 reduces to E5 EXACTLY.
scripts/simulation/e4-v5/e9-fullstack.mjs:87:  else             for (let s = 0; s < nSec; s++) per[s] += plan.covSees * sec.valTilt[s] * sec.cnt[s]; // coverage sees a fraction covSees of the tilt (valTilt already carries secValSpread — no double-count)
scripts/simulation/e4-v5/e9-fullstack.mjs:169:  // Oracle = GLOBAL greedy REFERENCE on the true adjusted value (a heuristic knapsack, NOT a guaranteed optimum, so a
scripts/simulation/e4-v5/e9-fullstack.mjs:170:  // feasible cell can exceed it; used as a common normalizer, not an upper bound).
scripts/simulation/e4-v5/e9-fullstack.mjs:274:    safeLog('(a global full-information greedy REFERENCE, not a guaranteed optimum). No compound multiplier.\n');
scripts/simulation/e4-v5/e9-fullstack.mjs:280:    safeLog('SHAPLEY attribution of the full-stack gain to each layer (sums exactly to the gain) with 95% CIs:');
scripts/simulation/e4-v5/e9-fullstack.mjs:294:    safeLog('modest and CONDITIONAL — not a robust large positive layer):');
scripts/simulation/e4-v5/e9-fullstack.mjs:302:    // AGENDA CAPTURE (the second face of power) is the mechanism that makes planning a robust positive layer: the
scripts/simulation/e4-v5/e9-fullstack.mjs:303:    // central keeps its lowest-perceived sectors OFF the menu. Direction anchored (Bachrach–Baratz 1962; political
scripts/simulation/e4-v5/e9-fullstack.mjs:311:    safeLog('   → agenda capture is the DOMINANT planning mechanism, and it is NOT anchorable today (no cited universal');
scripts/simulation/e4-v5/e9-fullstack.mjs:317:    safeLog('robust, anchored layers); present PLANNING QUALITATIVELY — mechanism identified (agenda capture / second');
scripts/simulation/e4-v5/e9-fullstack.mjs:318:    safeLog('face of power), DIRECTION anchored (COFOG; election visible-spending shift; maintenance neglect), MAGNITUDE');
scripts/simulation/e4-v5/e9-fullstack.mjs:319:    safeLog('deferred to country-specific continuation (e.g. a Chile example — illustrative, not conclusive).');
scripts/simulation/e4-v5/e10-costs.mjs:8://     capture is the dominant, not-yet-anchorable mechanism), so it must NOT be folded quantitatively into the cost
scripts/simulation/e4-v5/e10-costs.mjs:15:// κ_C, κ_D are set with DIRECTION anchored and MAGNITUDE declared-and-conservative (κ_C=0.15 central machinery Core v0
scripts/simulation/e4-v5/e10-costs.mjs:26:  // DIRECTION robustly anchored (verified sources), POINT magnitude DECLARED-and-conservative (author-set 2026-07-13).
scripts/simulation/e4-v5/e10-costs.mjs:28:                      //     prioritization, AI-fiscalization machinery, delivery mgmt, licenses, travel). ANCHOR: IDB
scripts/simulation/e4-v5/e10-costs.mjs:31:                      //     16%; band 0.10–0.16. (Narrow pure-admin overhead is 1–10% — CBPP/SSA/CBO — a lower floor,
scripts/simulation/e4-v5/e10-costs.mjs:32:                      //     since κ_C is broader.) The exact point is DECLARED (no source maps "waste"→"budget share removed").
scripts/simulation/e4-v5/e10-costs.mjs:33:  kappa_D:    0.03,   // Core v0's OWN operating cost (platform + AI). ANCHOR: verified e-procurement platform run-costs
scripts/simulation/e4-v5/e10-costs.mjs:35:                      //     GeM; ProZorro), so 0.03 deliberately OVER-charges the platform = conservative ceiling (band
scripts/simulation/e4-v5/e10-costs.mjs:73:    safeLog(`value base: ${r.via}   ·   κ_C=${r.kappa_C} (central machinery) · κ_D=${r.kappa_D} (Core v0 platform)  [direction anchored, magnitude declared-conservative]`);
scripts/simulation/e4-v5/e10-costs.mjs:82:    // κ sensitivity (DECLARED until anchored): how the gap responds to the central's machinery cost.
scripts/simulation/e4-v5/e10-costs.mjs:83:    safeLog('\nAdmin-cost sensitivity (κ_D=0.03 fixed; κ_C swept — magnitude declared, direction anchored):');
scripts/simulation/e4-v5/e10-costs.mjs:90:    safeLog('     eliminates, so κ_C > κ_D widens the gap once the ratio clears the value ratio (~2.7). Direction anchored');
scripts/simulation/e4-v5/e10-costs.mjs:91:    safeLog('     (IDB Better Spending 2018; low e-government platform costs); point magnitudes declared-and-conservative.');
scripts/simulation/e4-v5/e5-delivery.mjs:22:// Delivered value V = Σ_{j∈funded} S_j · f_j. Leakage bands are literature-anchored (see DELIVERY notes).
scripts/simulation/e4-v5/e5-delivery.mjs:31:// Directions anchored to the corpus Models 1–2 and the delivery literature; magnitudes declared, not fitted:
scripts/simulation/e4-v5/e5-delivery.mjs:37:// Calibration (friendly round, 2026-07-12; anchors in audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md).
scripts/simulation/e4-v5/e5-delivery.mjs:38:// ANCHORED: opaque central divert ~24% (Olken 2007 JPE 115(2), Indonesia roads); ex-ante deterrence ⇒ verified ~0
scripts/simulation/e4-v5/e5-delivery.mjs:44:// Calibration is an IDENTIFIED-SET reference, NOT a field estimate (friendly round convergent view, Codex + agent):
scripts/simulation/e4-v5/e5-delivery.mjs:50:// mon_recovery=0 for community-only coverage (Afridi-Iversen 2014 MGNREGA). Report R=0 robustness always.
scripts/simulation/e4-v5/e5-delivery.mjs:52:  pi_hon:   0.78,   // honest share; identified so the opaque case hits the Olken-centered value-loss moment (not observed prevalence)
scripts/simulation/e4-v5/e5-delivery.mjs:60:  mon_detect:   0.0,   // coverage-only detection lift; anchored band 0.0–0.10 (ref 0.05); small + fragile
scripts/simulation/e4-v5/e5-delivery.mjs:62:  // VALUE/COMPLEXITY-CORRELATED DELIVERY RISK (robustness, breaks delivery↔value independence): bigger/more complex
scripts/simulation/e4-v5/e5-delivery.mjs:88:// Delivered value + robustness diagnostics for a funded set under a regime, reusing per-project executor draws (shared
scripts/simulation/e4-v5/e5-delivery.mjs:108:// so E5 reduces to E4 EXACTLY on the same seed. Evaluate the oracle (perfect delivery) and the four cells.
scripts/simulation/e4-v5/e5-delivery.mjs:137:// Ratio-of-sums estimand over worlds (robust; a tiny-O world cannot dominate). Everything normalized by ΣO. Worlds and
scripts/simulation/e4-v5/e5-delivery.mjs:138:// executors use SEPARATE PRNG streams, so the world stream is identical to the E4 estimand's (exact reduction). Also
scripts/simulation/e4-v5/e5-delivery.mjs:143:  const execRng = makeRng((seed ^ 0x5bd1e995) >>> 0);      // separate stream ⇒ worlds match the E4 estimand exactly
scripts/simulation/e4-v5/e5-delivery.mjs:194:    // identity, EXACT by construction — delivery is applied per project). The additive prediction misses by the interaction.
scripts/simulation/e4-v5/e5-delivery.mjs:238:// 20-seed replication of the full-architecture gain: across-seed mean and spread (Codex robustness item; complements
scripts/simulation/e4-v5/e5-delivery.mjs:250:// share — a GLOBAL robustness statement, not the 1-D opaque sweep (Codex robustness item). Deterministic (seeded).
scripts/simulation/e4-v5/e5-delivery.mjs:278:  // NOT a global identified-set guarantee. shareArchitectureWins = A2−S>0 (full stack); shareCoverageWins = A3−S>0.
scripts/simulation/e4-v5/e5-delivery.mjs:287:  // Use the PROBABLE anchored scenario (realistic coverage composition + anchored central handicaps) as the world,
scripts/simulation/e4-v5/e5-delivery.mjs:318:    // Anchored coverage-only detection band 0.0–0.10 (fragile evidence); headline 0.05.
scripts/simulation/e4-v5/e5-delivery.mjs:332:    // Favorable R=0 robustness (Codex): drop the reputational stake entirely — the verified regime then admits SOME
scripts/simulation/e4-v5/e5-delivery.mjs:335:    safeLog(`R=0 robustness (no reputational stake): verified delivery ${pct(r0.delivery.centralVerified)}, verified diversion incidence ${pct(r0.diversionIncidence.A1)}, full ${pct(r0.full)} 95% CI [${pct(r0.fullCI[0])}, ${pct(r0.fullCI[1])}] — the gain survives without the (unanchored) reputation term.\n`);
scripts/simulation/e4-v5/e5-delivery.mjs:343:    safeLog('   → coverage still wins across the whole band; a worse status quo only widens the delivery gain.\n');
scripts/simulation/e4-v5/e5-delivery.mjs:345:    // (iv) COST/COMPLEXITY-correlated delivery risk (robustness). NOTE: the risk is tied to project COST, and cost is
scripts/simulation/e4-v5/e5-delivery.mjs:357:    // global identified-set guarantee: gamma, opaque recovery and uniform temptation are held fixed).
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:5:friendly-round anchoring.
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:58:## What to anchor (planning layer)
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:60:- Central category-level misallocation: the harm-myopia + projection already anchored in E4 (Hayek/Scott/Olson/
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:63:- The distributed category-signal fidelity reuses E4's coverage composition (already anchored).
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:72:   (anchored), magnitudes swept, exactly as E4.
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:76:Build only after E5 is publication-ready. Then: contract/params → engine stage → tests (reduces-to-E5/E4) → friendly
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:77:Codex round (correct + anchor) → results → paper. Then E10 adds costs on top of E9.
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:92:  cell ≤ oracle; **`nCat=1` reduces to E5 exactly** (tested to 1e-9).
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:97:**planning +3.2%**, selection +50.6%, delivery +6.7%. Hard-exclusion widens planning to **+7.1%**.
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:102:tested + anchored in E9's friendly Codex round (do not gerrymander it up).
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:105:effect positive; hard exclusion widens it; Core v0 > status quo; no cell exceeds the oracle; all three layer effects
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:106:positive; selection dominant; fail-closed delivery validation reused.
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:109:should categories be typed by harm/need directly? Anchor the planning-layer magnitude (sectoral misallocation of public
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:114:**Direction is strongly anchored; the magnitude is DECLARED-but-conservative.** No published source cleanly isolates
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:116:parameter *consistent with, and conservative relative to,* the published efficiency-loss envelope — not a transported
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:119:| quantity | anchored band / direction | best citation | status |
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:121:| total public-investment inefficiency | ~30% of returns lost (13% adv / 27% EM / 40% LIC); strong PIM closes ~2/3 | IMF, *Making Public Investment More Efficient* 2015 | ANCHORED (total loss, broader than cross-sector) |
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:123:| political budget cycle → visible spending | pre-election composition shift to visible capital (~0.5–1% of GDP/category) | Drazen & Eslava 2010, *JDE* 92(1) | ANCHORED (direction; composition shift, not value-loss %) |
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:124:| pork-barrel / particularistic targeting | allocations follow electoral usefulness, not marginal value (150+ studies) | Golden & Min 2013, *ARPS* 16 | ANCHORED (direction/pervasiveness, qualitative) |
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:125:| maintenance / diffuse-cost underinvestment | new-build bias; optimal maintenance ~2% of GDP; deferred maintenance multiplies later cost | Rioja 2003, *JPE* 87(9–10) + World Bank AICD maintenance briefs | ANCHORED for the SIGN (undervisible = underfunded). NB: the "~2/3 new vs 1/3 maintenance" split is NOT in Rioja 2003 — do not attribute it (calibration agent flag) |
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:130:Rioja's ~15% single-margin), so it does **not** overclaim — if anything it is conservative. Honest framing to apply:
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:131:call it "consistent with and conservative relative to" the IMF/Rioja evidence, NOT "anchored" to a cross-sector estimate
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:134:## Country-grounded ILLUSTRATIVE example of agenda capture — CHILE, mental health (data agent, 2026-07-13, verified)
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:136:**Not a conclusion — an illustrative footprint of the model's visibility-bias mechanism in one real budget.**
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:146:diffuse constituency, stigma, no ribbon-cuttings — kept near the floor. That is exactly E9's central mechanism (the
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:154:**Illustrative severity: 1 function off the menu** (mental health at ~2% vs the OECD 6.7% benchmark). Plugged into E9 on
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:155:the anchored params:
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:157:| illustrative severity | planning Shapley (strict) | planning Shapley (recycled) | planning\|distributed-sel (recycled) |
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:164:starved function this pass, so severity stays at 1 (not inflated). → The anchored HEADLINE still reports NO planning
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:165:figure (agendaCapture=0); this is a labelled illustrative example showing the mechanism concretely for one real budget
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:170:Codex round-1: skeleton sound; planning layer NOT publication-ready (the standalone +3.2/+7.1 were one-at-a-time
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:178:- **8-cell factorial + Shapley attribution** that sums exactly to the diagonal gain; plus the conditional simple
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:181:- `nSec=1` reduces to E5 exactly (1e-9). 15/15 tests.
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:187:conservative vs the IMF/Rioja envelope. → sent to Codex round-2 for verification.
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:201:  `validatePlanning`; oracle relabelled a **greedy REFERENCE** (not an upper bound; false invariant dropped).
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:205:recycling, planning +4.8%). **Conclusion: SELECTION and DELIVERY are the robust, large layers; PLANNING is a MODEST,
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:208:tension with the broader, non-commensurate IMF/Rioja evidence, but NOT anchored to a cross-sector point estimate**.
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:211:## Anchoring round (author: "anclar mejor los parámetros a datos") — data-anchor agent (verified) + AGENDA CAPTURE
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:215:capture. Data-anchor agent (all web-verified) mapped E9's declared parameters onto observable moments:
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:217:| parameter | observable moment | anchor | status |
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:219:| `nSec` | UN COFOG top-level functions = **10** | UN/Eurostat/OECD COFOG | **ANCHORED** (nSec=10) |
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:220:| `creditCoef` (over-fund visible) | pre-election composition shift to visible spending | Drazen–Eslava 2010 *JDE* 92(1); Vergne 2009 *EJPE* 25(1); Katsimi–Sarantides 2012 *Public Choice* 151 | direction ANCHORED, **magnitude modest/single-digit → declared-with-band** |
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:221:| `assoc` sign (high-need = low-visibility) | maintenance/prevention underfunded vs new visible capital | Rioja 2003 *JPE* 87(9–10) + WB AICD (optimal maintenance ~2% GDP; new-build bias) | **SIGN anchored**, strength declared |
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:222:| `secValSpread` (cross-sector value dispersion) | COFOG share dispersion / sector-return spread / allocative gap | Eurostat COFOG 2023; IMF/CEPR ~11% GDP + 30–40% efficiency-gap **ceiling** | loose/confounded → **upper-bounded, not point-anchored** |
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:224:**Data-agent's read:** the honest anchored planning contribution is **SMALL (a few %)** — measured composition shifts are
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:231:Budget reallocated to funded sectors. This is the mechanism that makes the planning layer **robustly POSITIVE (no sign
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:237:## Codex pro-anchor panel (4 profiles) — CONVERGES with the data agent; applied (commit 3033c2b)
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:246:  STRESS, not the anchored headline.
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:247:- **Result reproduces the panel's independent diagnostic exactly:** planning Shapley **+0.61% strict / +3.21%
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:248:  [+2.93,+3.47] recycled**. (My earlier +7% used the unanchored creditCoef=0.6 + agendaCapture=1 + the double-count.)
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:250:**What the anchoring round found (the SOFT-only slice, mechanism absent):** with `agendaCapture=0` and the moment-mapped
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:252:**But this slice omits agenda capture, the layer's dominant mechanism, so it is NOT the planning result** (see the
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:254:robust, quantified layers.** 26/26 tests.
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:259:that number is measured with the layer's DOMINANT mechanism — **agenda capture** (the central keeping whole high-need/
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:262:layer's magnitude hinges on agenda capture, which cannot be anchored today, so we do NOT quantify it.**
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:265:- **Quantify only SELECTION and DELIVERY** (anchored, robust, large layers).
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:266:- Present **PLANNING qualitatively**: the mechanism (agenda capture / second face of power) is IDENTIFIED and its
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:267:  DIRECTION anchored (COFOG structure; the election-period shift to visible spending; maintenance neglect), but its
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:270:  which understates the layer by omitting its dominant mechanism.
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:272:  lower slice that omits the dominant mechanism — not as a headline result.
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:279:   agenda-capture severity as an **ILLUSTRATIVE example, explicitly NOT a conclusive calibration**.
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:284:## Panel modifications noted as FUTURE WORK (a country-specific, fully-anchored v3): softmax baseline-plus-flexible-
audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md:14:- **PLANNING switchable OFF (default OFF)** — its magnitude is deferred/qualitative (agenda capture is the dominant,
audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md:15:  not-yet-anchorable mechanism), so it must NOT be folded quantitatively into the cost result. OFF ⇒ value base = E5;
audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md:16:  ON ⇒ value base = E9. Tested: OFF reproduces E5's S/A2 cells exactly.
audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md:19:## Calibration (verification agent, 2026-07-13 — DIRECTION verified, POINT magnitudes DECLARED-conservative)
audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md:21:| param | value | anchor (verified) | status |
audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md:23:| **κ_C** central machinery Core v0 eliminates | **0.15** | IDB *Better Spending for Better Lives* 2018: LAC public-spending waste = **4.4% of GDP ≈ 16% of government expenditure** (procurement + payroll + transfers). 0.15 = round-down of 16%; band 0.10–0.16. Narrow pure-admin overhead 1–10% (CBPP; SSA <1%; CBO) is a lower floor. | direction ANCHORED; exact point DECLARED |
audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md:24:| **κ_D** Core v0 platform + AI operating cost | **0.03** | Verified e-procurement run-costs are an ORDER OF MAGNITUDE below 0.03 (~0.005–1% of spend managed — JBCA 2023 e-GP CBA; KONEPS; GeM; ProZorro). 0.03 deliberately over-charges the platform → **conservative ceiling** (band 0.005–0.03). | direction ANCHORED; conservative ceiling, DECLARED |
audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md:25:| ratio κ_C/κ_D ≈ **5** | — | verified central machinery cost is **≥10–30×** platform run cost → the modeled 5× **understates** the structural gap | conservative |
audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md:27:**Must stay purely DECLARED** (no source maps directly): the exact κ_C=0.15 and κ_D=0.03 points; the IDB three-way
audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md:33:**+2.3%** to the gap). Costs OFF reduces exactly to the value stack.
audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md:35:**Honest subtlety (tested):** admin costs WIDEN the Core-v0 gap only when `κ_C/κ_D` exceeds the **value ratio (~2.7)** —
audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md:36:Core v0 delivers more, so a proportional cost removes more absolute value from its base. At the anchored 5× ratio, costs
audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md:37:widen the gap; below ~2.7× they narrow it. The verified evidence (ratio ≥10–30×) sits well above the crossover, so the
audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md:38:widening is robust.
audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md:44:fiscalization apparatus), which Core v0 replaces with a cheap platform. No overlap with delivery leakage.
audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:6:later E10 dimension). This doc records the model, its anchors, and the honest limits.
audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:37:condition statically, which is exactly the corpus finding that **deterrence pre-empts punishment**):
audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:46:### Calibration (declared, not fitted; magnitudes anchored, directions from the corpus)
audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:48:| regime | `p_det` | `a` | `r` | `rep` | emergent delivered fraction | anchor |
audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:58:- Selection efficiency (perfect delivery) = **the E4 numbers**: central +44.1%, distributed +98.2% (**exact** now —
audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:70:  alone. This replaced the earlier single `mon_coupling=0.35` (recovery was doing most of the work, unanchored).
audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:72:  exactly; the additive prediction (+83.8%) is short by the interaction. The two layers **multiply**; the positive
audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:85:   axis); `rep` enters statically. This understates the verified regime if anything (no learning), so it is conservative.
audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:86:3. **Delivery calibration is declared, not measured.** The regime parameters are anchored in direction and band, not
audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:95:worse status quo only widens the gain. This resolves the "opaque calibration is a single stipulated number" objection.
audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:99:effective detection AND recovery (`p_det_eff = p_det + c(1−p_det)`, `r_eff = r + c(1−r)`). At the anchored coverage-only
audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:104:is weakest**. At `c = 0` the model reduces to the exact multiplicative baseline. (Earlier draft used c=0.35, above the
audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:105:anchored band — corrected in the calibration round.)
audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:111:## Magnitudes that need literature anchors (for the friendly calibration round)
audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:113:Declared/plausible today; to be anchored to published sources (no field/paid data), directions already fixed:
audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:117:  audits). Currently 0.35, illustrative.
audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:118:- opaque regime `{p_det, a, r, rep}` and `pi_hon`: the leak-band anchors (IMF PIE-X 0.20–0.30; Olken 2007 24%;
audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:120:  honest-share is a modeling choice needing tighter anchoring.
audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:131:| model quantity | anchored band | best citation | status |
audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:133:| opaque divert share (central case) | **~24%** missing (works theft) | Olken 2007, *JPE* 115(2) — Indonesia roads | **ANCHORED** |
audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:134:| opaque process loss (broad) | ~30% avg (40% low-income / 27% emerging / 13% advanced) | IMF, *Making Public Investment More Efficient*, 2015 (PIMA/PIE-X) | ANCHORED (process, not theft) |
audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:135:| opaque tail (worst case) | ~87% leakage (schools got ~13% of grants) | Reinikka & Svensson 2004, **QJE 119(2)** "Local Capture" | ANCHORED as **tail**, not central |
audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:136:| monitoring lift `mon_coupling` (community-coverage only) | **~0.0–0.20** relative leakage cut (small, fragile) | Björkman & Svensson 2009 QJE (health, **failed replications**); Molina et al. 2016 Campbell (heterogeneous) | ANCHORED but FRAGILE — **widen bands; 0.35 was too high** |
audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:137:| top-down audit detection/deterrence | ~⅓ relative cut (8pp on 24%) | Olken 2007; Avis, Ferraz & Finan 2018 *JPE* 126(5) (~8% future) | ANCHORED (this is the verified regime's detection, not the coupling) |
audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:138:| social-audit recovery/clawback | detection + recovery > deterrence | Afridi & Iversen 2014, IZA DP 8095 (MGNREGA, Andhra Pradesh) | ANCHORED (supports coupling recovery channel) |
audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:139:| ex-ante deterrence ⇒ verified ~0 diversion | announced audit deters before the act | Olken 2007 (ex-ante 4%→100%); Becker 1968 | ANCHORED — validates the "deterrence ex ante" simplification |
audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:140:| milestone-gating effectiveness magnitude | mechanism sound, **no citable effect size** | World Bank PforR 2012 / OBA; CGD | **DECLARED, not anchored** |
audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:141:| reputational-exclusion stake | — | none | **DECLARED, no anchor** |
audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:145:sweep it; keep opaque central near Olken's ~24% divert; keep verified ~0 diversion (anchored deterrence); label
audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:153:PRNG streams (E5 reduces to E4 exactly); reframed opaque as the Olken value-loss moment (pi_hon 0.78); report diversion
audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:155:verified ~0 diversion as conditional ex-ante deterrence and the whole calibration an identified-set reference.
audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:157:**Second robustness pass — DONE (commit 418c7cd):** value/complexity-correlated delivery risk (`val_risk`); 20-seed
audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:159:fail-closed. Result: full gain robust — 20-seed sd 0.5 pp; LHS full-architecture wins 100%, coverage effect 100%.
audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:164:**PUBLICATION-READY: YES after a bounded pass**, now applied (commit 84332e1): validation genuinely fail-closed
audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:173:**Status: E5 is PUBLICATION-READY.**

codex
The adversarial-world reruns now overturn several “robust layer” statements without overturning the current PROBABLE diagonal: `PRO_CENTRAL` makes E9 selection Shapley negative, `PRO_DIST` makes delivery Shapley negative, and `PRO_DIST` reverses E10’s admin contribution to −15.5 percentage points. This is a claim-level failure, not evidence that the reported PROBABLE arithmetic is wrong.
collab: Wait
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "@'
import { baseConfig } from './scripts/simulation/e4-v5/contract.mjs';
import { SCENARIO_WORLD as W, PROBABLE } from './scripts/simulation/e4-v5/scenario-configs.mjs';
import { generateWorld, makeRng, fundedSet } from './scripts/simulation/e4-v5/engine.mjs';
import { deliveredCell, DELIVERY } from './scripts/simulation/e4-v5/e5-delivery.mjs';
const cfg={...baseConfig(),...W,...PROBABLE}, rng=makeRng(20260711), er=makeRng((20260711"'^0x5bd1e995)>>>0);
let O=0,C=0,D=0,kept=0;
for(let w=0;w<1200;w++){
 const p=generateWorld(cfg,rng);if(!p.length)continue;let tc=0;for(const x of p)tc+=x.c;const B=.35*tc;
 const so=fundedSet(p,'"'S',cfg,B);let o=0;for(const j of so)o+=p[j].S;if("'!(o>0))continue;
 const honest=[],tempt=[];for(let j=0;j<p.length;j++){honest[j]=er.u()<DELIVERY.pi_hon;tempt[j]=er.u()}
 const ex={honest,tempt};
 const sc=fundedSet(p,'"'M_C',cfg,B*(1-.15),{creditTilt:true});
 const sd=fundedSet(p,'M_D',cfg,B*(1-.03));
 O+=o;C+=deliveredCell(p,sc,DELIVERY.opaque,ex,DELIVERY,0,0,cfg).v;D+=deliveredCell(p,sd,DELIVERY.verified,ex,DELIVERY,0,0,cfg).v;kept++;
}
console.log(JSON.stringify({kept,status:C/O,core:D/O,gain:(D-C)/O}));
'@ | node --input-type=module" in C:\devel\claude-projects\distributed-governance-research
 succeeded in 2427ms:
{"kept":1200,"status":0.32862260451863917,"core":0.9242834319045271,"gain":0.595660827385888}

collab: Wait
All requested scripts/tests pass, but targeted cross-world and counterfactual diagnostics exposed construct, robustness, and embargo failures that the tests do not cover. I am now adjudicating and ranking only reproducible attacks.
  ✓ Read repository instructions and map the E5/E9/E10 implementation, tests, designs, and emitted claims
  ✓ Run six adversarial role reviews in parallel tracks and execute targeted simulations/tests
  → Verify every candidate defect against exact file lines and de-duplicate or reject weak attacks
  • Produce per-role ranked findings and a cross-experiment top attack synthesis
collab: Wait
collab: Wait
collab: Wait
codex
The pool has converged. I’m rejecting several tempting but invalid objections: the current `nSec=1 → E5` and costs-off reductions do pass; the Shapley weights and exact-sum algebra are correct; E9’s current code already admits that its greedy reference is not an optimum; and none of the four named worlds reverses the full E5/E9 diagonal at the present point calibrations. The final list will distinguish those sound facts from the defects that actually survive.
Every retained attack has been checked against source lines and, where quantitative, reproduced with targeted diagnostics. Weak or taste-based objections were removed.
  ✓ Read repository instructions and map the E5/E9/E10 implementation, tests, designs, and emitted claims
  ✓ Run six adversarial role reviews in parallel tracks and execute targeted simulations/tests
  ✓ Verify every candidate defect against exact file lines and de-duplicate or reject weak attacks
  ✓ Produce per-role ranked findings and a cross-experiment top attack synthesis
codex
# Hostile referee verdict

E10 is blocked on construct validity and reporting compliance. E9’s fixed-PROBABLE arithmetic runs, but its “robust quantified layers” and full-stack interpretation are not defensible yet. E5’s +59.1 percentage-point result reproduces for its fixed PROBABLE simulation, but its empirical calibration, uncertainty language, reduction claim, and robustness framing need substantial repair before publication.

All six requested commands completed successfully: E5 40/40 tests, E9 26/26, E10 10/10. Passing tests mostly establish implementation algebra under PROBABLE; they do not validate the estimands or calibrations. No files were edited.

## Role 1 — Mechanism-design / simulation skeptic

1. **Administrative cost is applied to the wrong object — [blocker].** File: [e10-costs.mjs:52–63](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e10-costs.mjs:52). κ is called budget consumed, but the code funds the full-budget portfolio and then scales realized net value by `1−κ`. This assumes linear value in budget and prevents portfolio re-optimization. A budget-first rerun at `.85B` and `.97B` changes the PROBABLE gap from +61.42 to +59.57 percentage points; the claimed cost contribution falls from about +2.3 to +0.47. **Change:** reduce each arm’s selectable budget before `fundedSet`, or redefine κ honestly as a value-equivalent haircut. **Threat:** RESULT.

2. **The claimed exact E5-to-E4 reduction is false generally — [major].** Files: [e5-delivery.mjs:137–154](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:137), [engine.mjs:175–188](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/engine.mjs:175). E5 retains every `O>0` world; E4 requires `O>.05·median(O)`. In an in-band diagnostic, E4 kept 360 worlds and E5 372, with distributed/reference normalizations −26.82 versus −27.77. **Change:** share the E4 retention routine, degeneracy diagnostics, and threshold across experiments; property-test the reduction across the declared region. **Threat:** RESULT/CLAIM outside PROBABLE.

3. **The reported intervals are Monte Carlo integration intervals, not empirical uncertainty — [major].** Files: [e5-delivery.mjs:161–174](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:161), [e9-fullstack.mjs:224–242](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:224). The bootstrap fixes the DGP, calibration, scenario, residual rule, and model form; increasing `nWorlds` mechanically tightens it. E10 reports no interval at all. **Change:** print “conditional Monte Carlo interval”; add outer calibration/scenario/model uncertainty and propagate paired draws through E10. **Threat:** CLAIM about precision.

4. **The multiplicative “validation” is circular — [major].** Files: [e5-delivery.mjs:157–158](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:157), [e5-delivery.mjs:193–196](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:193), [e5-delivery-test.mjs:36–45](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery-test.mjs:36). `dDvr` is defined as `A2/sD`, then `sD·dDvr` is tested against A2. It must pass. A positive level-scale interaction is not evidence of causal complementarity. **Change:** call it bookkeeping; test complementarity using cross-arm delivery fractions or a preregistered independence-null interaction. **Threat:** CLAIM only; the diagonal arithmetic remains.

5. **Signed “leakage” is not an expenditure-leakage share — [major].** Files: [e5-delivery.mjs:100–104](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:100), [e5-delivery.mjs:159–160](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:159). For `S<0`, `S(1−f)` is negative: failure to deliver a harmful project offsets lost benefits. In PROBABLE, about 35% of central-funded projects had negative S. **Change:** separately report expenditure leakage, undelivered benefits, and unrealized harms; retain signed welfare only as a distinct outcome. **Threat:** RESULT/CLAIM for delivery calibration.

6. **Shapley exactness does not identify layer contributions — [major].** Files: [e9-fullstack.mjs:187–202](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:187), [e9-fullstack-test.mjs:24–29](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack-test.mjs:24). Exact summation verifies the Shapley efficiency axiom. It does not validate hybrid institutional cells or make the decomposition causal or unique. Conditional marginals span planning −6.2 to +7.9, selection +27.7 to +48.1, and delivery +6.5 to +15.4 percentage points in the production configuration. **Change:** label it “model-internal symmetric decomposition”; report all conditional marginals or all six ordering paths. **Threat:** layer RESULT/CLAIM, not diagonal gain.

7. **Strict residual is a primary-estimand confound — [major].** Files: [e9-fullstack.mjs:121–136](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:121), [e9-fullstack.mjs:285–290](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:285). The headline lets status quo use 94.1% of budget and Core v0 86.8%. Recycling moves the PROBABLE gain from about +48.4 to +57.8 percentage points—far outside the Monte Carlo interval. **Change:** pre-specify the institutionally correct residual treatment or make strict/recycle co-primary and report the structural range. **Threat:** RESULT magnitude and attribution.

8. **Ratio-of-sums silently selects an oracle-value-weighted policy population — [major].** Files: [e5-delivery.mjs:137–160](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:137), [e9-fullstack.mjs:190–222](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:190). This estimates a value-weighted aggregate, not an equal-world/jurisdiction average. The target unit is never substantively justified. **Change:** declare the weighting estimand and report an equal-world alternative plus weight-concentration diagnostics. **Threat:** RESULT magnitude/transport.

9. **The greedy reference lacks an optimality-gap diagnostic — [major].** Files: [engine.mjs:119–138](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/engine.mjs:119), [E9-FULLSTACK-DESIGN.md:91–92](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:91). Value-per-cost greedy is not an exact binary-knapsack solution; the design still contains the false historical statement that every cell is bounded by it. **Change:** solve or bound the knapsack, or consistently say “greedy normalization reference” and report cell exceedance frequency. **Threat:** CLAIM and normalized magnitude.

10. **Public entry points are not fail-closed — [major].** Files: [e5-delivery.mjs:140–149](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:140), [e9-fullstack.mjs:205–215](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:205), [e10-costs.mjs:52–63](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e10-costs.mjs:52). E5/E9 bypass base-config domain validation; E10 accepts invalid or nonfinite κ values. **Change:** invoke `validateConfig`/`validateDomain` everywhere and validate κ, switches, seeds, and world counts. **Threat:** RESULT correctness for external and sensitivity runs.

**No valid attack found:** the Shapley weights themselves are correct; current `nSec=1 → E5` and costs-off reductions pass; current E9 code explicitly admits the reference is not an optimum.

## Role 2 — Calibration / identification hawk

1. **κ_C is calibrated to the wrong construct — [blocker].** Files: [e10-costs.mjs:25–37](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e10-costs.mjs:25), [E10-COSTS-DESIGN.md:19–28](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md:19). The IDB’s 4.4%-of-GDP estimate combines procurement waste, wage-bill inefficiency, and targeted-transfer leakage; it is not administrative machinery cost or a share Core v0 demonstrably removes. [The IDB source says exactly that](https://publications.iadb.org/publications/english/document/Better-Spending-for-Better-Lives-How-Latin-America-and-the-Caribbean-Can-Do-More-with-Less-%28Executive-Summary%29.pdf). **Change:** calibrate mutually exclusive operating-cost accounts for the exact replaced functions; keep κ_C illustrative until then. **Threat:** RESULT/CLAIM for E10.

2. **κ_D transports procurement-platform cost to an entire institution — [major].** Files: [e10-costs.mjs:33–37](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e10-costs.mjs:33), [E10-COSTS-DESIGN.md:24–25](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md:24). The cited e-procurement cost model covers design, deployment, and operation of procurement software—not universal participation, profiles, delegation, AI, assurance, appeals, recovery, or enforcement. [The underlying CBA’s scope is e-procurement](https://www.cambridge.org/core/services/aop-cambridge-core/content/view/1BC5D35109D488269F4C8F3E95C0B714/S2194588823000106a.pdf/the-investment-case-for-e-government-procurement-a-cost-benefit-analysis.pdf). **Change:** construct symmetric, bottom-up full-system cost inventories. **Threat:** RESULT/CLAIM.

3. **Verified zero diversion is threshold-engineered — [major].** Files: [e5-delivery.mjs:51–56](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:51), [e5-delivery.mjs:70–85](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:70). The default deterrence index is 1.05 while temptation is bounded below 1, making zero diversion deterministic. Olken’s audit treatment reduced missing expenditure by about eight percentage points; it did not eliminate it. [Olken’s paper reports both the 24% baseline moment and eight-point treatment effect](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf). **Change:** calibrate to observed residual leakage with uncertainty and an empirically defensible temptation distribution. **Threat:** RESULT/CLAIM for delivery.

4. **Olken expenditure loss is relabeled as S-weighted social-value loss — [major].** Files: [e5-delivery.mjs:44–56](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:44), [e5-delivery.mjs:302–305](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:302). Missing road inputs/expenditure do not identify proportional loss of generic project welfare, much less the decomposition into honesty, detection, advance, recovery, and ordinary loss. **Change:** use expenditure-weighted leakage for comparable works or estimate a sector-specific expenditure-to-output/value production function. Call the present exercise moment-matched, not identified. **Threat:** RESULT/CLAIM.

5. **E9’s sector-dispersion anchor has the wrong units — [major].** Files: [e9-fullstack.mjs:38–40](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:38), [e9-fullstack.mjs:71–76](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:71). A return-per-cost dispersion is added directly to per-project utility independently of cost. **Change:** implement a cost-scaled return tilt, reproduce the source statistic, and validate against held-out sector moments. **Threat:** planning CLAIM/numerics.

6. **`creditCoef=.076` has no valid bridge to its cited log-share coefficient — [major].** Files: [e9-fullstack.mjs:41–43](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:41), [e9-fullstack.mjs:81–87](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:81). A change in log visible-budget share cannot be inserted additively on the arbitrary `M_C` scale. **Change:** use a baseline-share/softmax model and inverse-calibrate a share semi-elasticity. **Threat:** planning CLAIM/numerics.

7. **Monitoring outcomes are recoded as detection and recovery probabilities without a bridge equation — [major].** Files: [e5-delivery.mjs:57–61](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:57), [e5-delivery.mjs:317–330](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:317). The cited health/workfare evidence does not estimate these model coefficients. **Change:** inverse-calibrate against comparable leakage outcomes or label the entire monitoring range declared. **Threat:** monitoring CLAIM only; baseline coupling is off.

8. **Only the count ten is genuinely COFOG-anchored — [major].** Files: [e9-fullstack.mjs:27–51](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:27), [e9-fullstack.mjs:57–75](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:57). Uniform project assignment, evenly spaced visibility, `assoc=-.6`, and `covSees=.7` are synthetic and jointly load-bearing. **Change:** use country/portfolio sector data or report all planning output as illustrative. **Threat:** planning CLAIM.

9. **The E5 calibration table is stale — [minor].** Files: [E5-DELIVERY-DESIGN.md:46–54](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:46), [e5-delivery.mjs:51–56](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:51). The table lists obsolete opaque, verified, reputation, and honesty parameters. **Change:** generate a single live configuration table from code and move prior calibrations into a changelog. **Threat:** presentation/reproducibility.

**No valid attack found:** using ten as the top-level COFOG count is defensible by itself. It does not anchor the remaining sector generator.

## Role 3 — Over-claim / spin prosecutor

1. **“Selection and delivery are robust” is false in the repository’s own worlds — [blocker].** Files: [e9-fullstack.mjs:314–319](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:314), [E9-FULLSTACK-DESIGN.md:250–270](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:250). Selection Shapley is −2.16 percentage points in `PRO_CENTRAL`; delivery Shapley is −2.09 in `PRO_DIST`. **Change:** say “large in PROBABLE”; print the named-world table and sign reversals. **Threat:** CLAIM, not PROBABLE arithmetic.

2. **E9 reports a full-stack number while declaring planning unquantifiable — [major].** Files: [e9-fullstack.mjs:279–284](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:279), [E9-FULLSTACK-DESIGN.md:256–270](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:256). The diagonal and all Shapley values are computed through a declared planning generator. Deferring the planning figure does not remove those assumptions from selection and delivery attribution. **Change:** suppress the unconditional full-stack point or label it explicitly conditional/illustrative; use E5 for standalone selection/delivery quantities until planning is anchored. **Threat:** RESULT/CLAIM.

3. **“Dominant” and “identified” smuggle an unanchored planning conclusion back in — [major].** Files: [e9-fullstack.mjs:302–319](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:302), [E9-FULLSTACK-DESIGN.md:256–270](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:256). A mechanical sensitivity lever is not empirically dominant or causally identified; zero is the current default. **Change:** say “potentially high-leverage modeled mechanism; prevalence and severity, including zero, are unidentified.” **Threat:** CLAIM.

4. **The Chile example makes an unsupported causal and taxonomic jump — [major].** File: [E9-FULLSTACK-DESIGN.md:134–166](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:134). Mental health is a funded health subfunction, not one zero-funded top-level COFOG function. The OECD does support low relative mental-health spending, but not the visibility-capture cause or `agendaCapture=1` mapping. [OECD data show under-spending, not the proposed causal treatment](https://www.oecd.org/en/publications/a-new-benchmark-for-mental-health-systems_4ed890f6-en/full-report/component-4.html). **Change:** remove the simulated +2–4 percentage-point Chile result or build a taxonomy-matched partial-share model. **Threat:** CLAIM only.

5. **The E5 “global robustness” box preserves the preferred ordering by construction — [major].** Files: [e5-delivery.mjs:249–281](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:249), [e5-delivery-test.mjs:106–114](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery-test.mjs:106). It holds the PROBABLE world fixed and draws from non-overlapping weak-opaque/strong-verified ranges. **Change:** rename it a conditional delivery-parameter sweep; add overlapping regimes, verified failure, competent opaque delivery, parameter dependence, and named worlds. **Threat:** robustness CLAIM.

6. **The one-sided opaque sweep cannot “resolve” calibration criticism — [major].** Files: [e5-delivery.mjs:200–215](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:200), [E5-DELIVERY-DESIGN.md:92–95](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:92). Every row weakens the comparator; naturally the advantage grows. **Change:** run a two-dimensional opaque-versus-verified grid with overlapping uncertainty and a competent status-quo region. **Threat:** CLAIM/magnitude robustness.

7. **“Publication-ready” is premature — [major].** File: [E5-DELIVERY-DESIGN.md:161–173](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:161). The same document records load-bearing declared values, stale specifications, a conditional bootstrap, and one-sided robustness. **Change:** downgrade to “code/test ready; empirical interpretation pending model-form and calibration review.” **Threat:** presentation/status claim.

8. **The design records mix superseded and current models as if all were live — [major].** Files: [E5-DELIVERY-DESIGN.md:48–53](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:48), [E9-FULLSTACK-DESIGN.md:81–110](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:81). E9 retains visibility-bin sectors, obsolete results, and the false statement that every cell is below the reference. **Change:** separate current specification from historical changelog and generate result tables from executable output. **Threat:** presentation/reproducibility.

**No valid attack found:** the fixed PROBABLE E5 +59.1-point arithmetic is reproduced and explicitly labeled PROBABLE. E10 also prints a narrowing case at κ_C=.05, so claiming that narrowing was entirely hidden would be unfair.

## Role 4 — Embargo / reporting auditor

1. **E10 emits a semantic performance multiplier — [blocker].** Files: [e10-costs.mjs:89–91](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e10-costs.mjs:89), [e10-costs-test.mjs:43–51](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e10-costs-test.mjs:43). The phrase `"value ratio (~2.7)"` is Core-v0/status-quo performance encoded without the prohibited literal token. The embargo filter accepts it. **Change:** remove it; report the permitted κ_C threshold near 8.2% for fixed κ_D=3%, or only the percentage-point table. **Threat:** presentation/embargo.

2. **The closed schema does not govern E5/E9/E10 — [blocker].** Files: [contract.mjs:121–145](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/contract.mjs:121), [adapter.mjs:23–59](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/adapter.mjs:23). These experiments use `safeLog`, a lexical filter, rather than the closed renderer. The E10 leak proves semantic bypass. **Change:** create typed closed schemas/renderers for all three experiments and test captured full stdout. **Threat:** presentation/embargo.

3. **All three outputs state parity at the reference rather than parity at zero — [major].** Files: [e5-delivery.mjs:293–294](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:293), [e9-fullstack.mjs:273–274](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:273), [e10-costs.mjs:71](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e10-costs.mjs:71). A cell’s reference level is 100%; institutional equality is zero percentage points. **Change:** state both explicitly and reserve “parity” for zero difference. **Threat:** presentation/embargo.

4. **The E9 design retains prohibited historical performance-multiplier notation — [major].** File: [E9-FULLSTACK-DESIGN.md:9–20](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:9). Retired status does not make public-performance multiplier notation compliant. **Change:** replace it with “retired near-parity macro result” or a signed percentage-point description. **Threat:** presentation only.

5. **E5 emits a delivery-level ratio outside the reference denominator — [minor].** File: [e5-delivery.mjs:296–305](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:296). “Delivered/selected” has a 100% level benchmark and is not a percentage of the common reference. **Change:** move it to a clearly labeled mechanism diagnostic and keep public institutional results in signed reference percentage points. **Threat:** presentation only.

**No valid attack found:** current stdout contains no literal prohibited suffix, prohibited “N-fold” phrasing, or explicit institution-ratio token. Structural factorial notation is not a performance multiplier. The valid failures are semantic bypass, parity wording, and incomplete routing.

## Role 5 — Double-counting / scope adversary

1. **E10’s κ_C anchor overlaps E5 leakage despite the “no overlap” assertion — [blocker].** Files: [e10-costs.mjs:27–32](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e10-costs.mjs:27), [E10-COSTS-DESIGN.md:40–44](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md:40). The IDB aggregate includes procurement waste and transfer leakage; E5 already removes value for diversion/non-delivery. **Change:** create mutually exclusive fiscal ledgers for administration, procurement prices, diversion, ordinary loss, and transfer leakage. **Threat:** RESULT/CLAIM for E10.

2. **Verified controls are free while central delivery management is charged — [major].** Files: [e5-delivery.mjs:35–56](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:35), [e10-costs.mjs:27–37](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e10-costs.mjs:27). Milestone verification, guarantees, auditing, recovery, reputation, and enforcement generate E5’s verified benefit, yet κ_D is scoped largely as platform and AI. **Change:** attach a cost to every modeled control in the same arm, with comparable scope in both regimes. **Threat:** RESULT/CLAIM.

3. **Monitoring contaminates the selection factor when enabled — [major].** Files: [e9-fullstack.mjs:156–180](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:156), [e9-fullstack.mjs:195–197](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:195). `useCov = s === 'd'` means switching selection also changes delivery control. **Change:** make monitoring a fourth factor, attach it to delivery, or rename the factor “coverage selection plus monitoring.” **Threat:** RESULT for coupled runs; no attack on the current default because coupling is zero.

4. **Formal recovery can be counted twice — [major].** Files: [e5-delivery.mjs:55–61](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:55), [e5-delivery.mjs:328–330](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:328). Verified delivery already has recovery `.50`; the institutional-linkage scenario raises the same recovery channel again. **Change:** define distinct observed stages or apply the monitoring recovery increment only where formal recovery is absent. **Threat:** secondary monitoring RESULT.

5. **Two cost/leak namespaces can silently disagree — [major].** Files: [contract.mjs:69–76](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/contract.mjs:69), [e10-costs.mjs:25–38](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e10-costs.mjs:25). The frozen contract exposes κ/leak fields that E10 ignores in favor of module-local values. **Change:** establish one source of truth, reject conflicts, and include E5/E9/E10 parameters in the resolved manifest hash. **Threat:** reproducibility/CLAIM; current defaults do not duplicate arithmetic because contract values are zero and ignored.

6. **The promised fiscal treatment of stolen funds is absent — [major].** Files: [E5-DELIVERY-DESIGN.md:39–44](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:39), [E10-COSTS-DESIGN.md:40–44](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md:40). E5 says stolen-fund cost belongs to E10, but E10 models only an administrative haircut—no opportunity cost, recovery, or reallocation. **Change:** add a fiscal-resource ledger or state that E5’s non-delivery is the program’s complete treatment. **Threat:** scope CLAIM.

**No valid attack found:** planning’s value tilt is constant within a sector and therefore does not reorder within-sector selection. Reusing signals at planning and selection is not inherently duplicate accounting. The valid overlap is the empirical scope of κ_C and the coupling of named factors.

## Role 6 — Robustness / adversarial-world referee

Targeted 800-world reruns:

| World | E5 full gain | E9 full gain | E9 selection | E9 delivery | E10 admin contribution |
|---|---:|---:|---:|---:|---:|
| PROBABLE | +58.97 pp | +48.35 pp | +36.95 pp | +10.75 pp | +2.35 pp |
| PRO_CENTRAL | +14.79 pp | +15.72 pp | **−2.16 pp** | +15.48 pp | +8.64 pp |
| PRO_DIST | +175.93 pp | +125.05 pp | +117.02 pp | **−2.09 pp** | **−15.49 pp** |
| MYOPIA_OFF | +46.30 pp | +36.60 pp | +25.09 pp | +11.93 pp | +4.25 pp |

1. **Every test suite is fixed to PROBABLE — [blocker].** Files: [e5-delivery-test.mjs:12–49](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery-test.mjs:12), [e9-fullstack-test.mjs:12–71](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack-test.mjs:12), [e10-costs-test.mjs:12–51](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e10-costs-test.mjs:12). “Positive interaction,” “A2 best,” positive main effects, recycling monotonicity, and the cost crossover fail in other declared worlds. **Change:** parameterize scenario regressions over every named world and distinguish mathematical invariants from PROBABLE regressions. **Threat:** robustness CLAIM.

2. **E5’s selection layer reverses in PRO_CENTRAL — [major].** Files: [e5-delivery.mjs:284–315](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:284), [scenario-configs.mjs:35–39](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/scenario-configs.mjs:35). Selection effects become approximately −1.8 and −2.2 percentage points; interaction becomes negative; A1 exceeds A2. **Change:** publish the named-world cells and qualify the selection claim. **Threat:** CLAIM; the full sign remains positive under current delivery values.

3. **A null verified-delivery contrast flips E5 in PRO_CENTRAL — [major].** File: [e5-delivery.mjs:35–56](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:35). Setting verified equal to opaque produces about −1.8 percentage points; the R=0 stress is much weaker because detection, advance, recovery, and guarantee remain favorable. **Change:** report the verified-improvement frontier needed for A2 to exceed S in every world. **Threat:** E5 RESULT sign outside PROBABLE.

4. **Both headline E9 layers reverse somewhere — [blocker].** Files: [e9-fullstack.mjs:268–319](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:268), [scenario-configs.mjs:37–48](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/scenario-configs.mjs:37). Selection is negative in PRO_CENTRAL; delivery is negative in PRO_DIST because stronger delivery magnifies harmful portfolios in some coalitions. **Change:** publish coalition values and named-world decompositions; condition layer signs on portfolio-value domain. **Threat:** central E9 CLAIMS.

5. **Residual treatment overwhelms sampling uncertainty and is non-monotone — [major].** Files: [e9-fullstack.mjs:121–136](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:121), [e9-fullstack-test.mjs:65–71](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack-test.mjs:65). PROBABLE moves roughly +48.4 to +57.8; PRO_DIST about +125.1 to +173.9; PRO_CENTRAL moves slightly downward, contradicting the test’s assumed monotonicity. **Change:** co-report/pre-specify residual rules and delete the false invariant. **Threat:** RESULT.

6. **Planning welfare direction is not robust — [major].** Files: [e9-fullstack.mjs:292–319](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:292), [scenario-configs.mjs:40–41](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/scenario-configs.mjs:40). MYOPIA_OFF gives negative planning Shapley; even PROBABLE’s distributed-selection planning effect is about −6.2. **Change:** distinguish the direction of a political-credit mechanism from the sign of planning welfare. **Threat:** planning CLAIM.

7. **E10’s cost contribution reverses in PRO_DIST — [blocker].** Files: [e10-costs.mjs:52–63](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e10-costs.mjs:52), [scenario-configs.mjs:45–48](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/scenario-configs.mjs:45). At the headline κ values, the cost layer narrows the gap by about 15.5 percentage points. Scaling negative status-quo welfare by `1−κ_C` mechanically “improves” it. **Change:** redesign cost accounting and add negative-value-domain tests. **Threat:** E10 RESULT/CLAIM; total Core-v0 advantage remains positive.

8. **World and delivery uncertainty are never crossed — [major].** File: [e5-delivery.mjs:249–281](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:249). Delivery LHS uses PROBABLE only; world runs use point delivery. The threatening combination is precisely a central-favorable world with a small verified-delivery advantage. **Change:** run a joint design across world, delivery, planning, residual, and κ uncertainty; report frontiers and worst cases. **Threat:** cross-experiment robustness CLAIM.

9. **The “20-seed” test uses eight seeds — [minor].** File: [e5-delivery-test.mjs:106–110](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery-test.mjs:106). **Change:** run twenty or rename the assertion. **Threat:** presentation/test coverage.

**Most threatening settings:** E5—PRO_CENTRAL combined with a small/null delivery advantage; E9—PRO_CENTRAL for the diagonal and selection, PRO_DIST for delivery; E10—PRO_DIST, which reverses the cost contribution.

**No valid attack found:** with the current point calibrations, none of the four named worlds reverses the full E5 or E9 diagonal. Shapley still sums exactly. Those facts should be retained.

# Synthesis — ranked top 18

1. **[E10] [blocker] Wrong cost estimand.** [e10-costs.mjs:52](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e10-costs.mjs:52). Rerun selection at net budgets; current +2.3-point cost contribution falls near +0.47. **Threat:** RESULT.

2. **[E10/cross] [blocker] κ_C uses broad waste that overlaps E5 leakage.** [E10-COSTS-DESIGN.md:19](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md:19). Build mutually exclusive fiscal ledgers; withdraw the empirical point until calibrated. **Threat:** RESULT/CLAIM.

3. **[E9] [blocker] “Robust selection and delivery” is false.** [e9-fullstack.mjs:314](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:314). Publish named-world decompositions and qualify signs. **Threat:** CLAIM.

4. **[E10] [blocker] Embargo breach through `"value ratio (~2.7)"`.** [e10-costs.mjs:89](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e10-costs.mjs:89). Remove the semantic multiplier and report a κ threshold or percentage-point table. **Threat:** presentation only.

5. **[cross] [blocker] Closed embargo schema does not cover E5/E9/E10.** [adapter.mjs:23](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/adapter.mjs:23). Add typed schemas/renderers and captured-output tests. **Threat:** presentation/embargo.

6. **[E9] [major] Full-stack and Shapley numbers inherit unanchored planning.** [e9-fullstack.mjs:195](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:195). Suppress unconditional full-stack attribution or label it illustrative; use E5 for standalone quantified layers. **Threat:** RESULT/CLAIM.

7. **[E9] [major] Primary strict-residual result is confounded by unequal utilization.** [e9-fullstack.mjs:121](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:121). Pre-specify or co-report residual rules. **Threat:** RESULT.

8. **[E5] [major] Verified zero diversion is mechanically saturated, not empirically identified.** [e5-delivery.mjs:51](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:51). Calibrate residual leakage and temptation from comparable treatment evidence. **Threat:** RESULT/CLAIM.

9. **[E5] [major] Olken’s expenditure moment is transported into signed generic welfare loss.** [e5-delivery.mjs:302](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:302). Separate expenditure leakage and welfare production. **Threat:** RESULT/CLAIM.

10. **[cross] [major] Narrow intervals omit all substantive uncertainty.** [e5-delivery.mjs:161](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:161). Relabel as conditional Monte Carlo intervals and add an outer uncertainty layer. **Threat:** CLAIM about precision.

11. **[E5] [major] General E4 reduction is false because retention differs.** [e5-delivery.mjs:147](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:147). Share E4’s retention/degeneracy code and test the full declared region. **Threat:** RESULT/CLAIM.

12. **[E10] [major] Cost scopes are asymmetric.** [e10-costs.mjs:27](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e10-costs.mjs:27). Charge Core v0 for every modeled verification, enforcement, assurance, and support function. **Threat:** RESULT/CLAIM.

13. **[E10] [major] PRO_DIST reverses the admin contribution.** [e10-costs.mjs:55](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e10-costs.mjs:55). Replace net-value haircuts with actual resource accounting and test negative-value domains. **Threat:** RESULT/CLAIM.

14. **[E5] [major] Multiplicative validation is tautological and interaction sign is local.** [e5-delivery-test.mjs:36](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery-test.mjs:36). Treat factorization as bookkeeping and test genuine complementarity separately. **Threat:** CLAIM.

15. **[E5/cross] [major] Robustness ranges preserve favorable regime ordering and never cross worlds.** [e5-delivery.mjs:249](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:249). Use overlapping regimes and a joint world-delivery-planning-cost design. **Threat:** robustness CLAIM.

16. **[E9] [major] Planning anchors have incompatible units/scales.** [e9-fullstack.mjs:38](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:38). Implement cost-scaled sector returns and a calibrated share model. **Threat:** planning CLAIM/numerics.

17. **[E9] [major] Chile severity is not the modeled treatment.** [E9-FULLSTACK-DESIGN.md:134](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:134). Remove the numerical mapping or build a health-subfunction partial-share model. **Threat:** CLAIM only.

18. **[cross] [major] Current design documents are internally contradictory and embargo-inconsistent.** [E9-FULLSTACK-DESIGN.md:81](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:81). Separate the operative specification from historical notes and generate current tables from code. **Threat:** presentation/reproducibility.

Bottom line: preserve the fixed-PROBABLE arithmetic and the honest “greedy reference, not optimum” qualification. Do not preserve the current E10 cost result, “robust layer” language, empirical-zero delivery interpretation, narrow CI presentation, or claim of publication readiness.
tokens used
258,542
# Hostile referee verdict

E10 is blocked on construct validity and reporting compliance. E9’s fixed-PROBABLE arithmetic runs, but its “robust quantified layers” and full-stack interpretation are not defensible yet. E5’s +59.1 percentage-point result reproduces for its fixed PROBABLE simulation, but its empirical calibration, uncertainty language, reduction claim, and robustness framing need substantial repair before publication.

All six requested commands completed successfully: E5 40/40 tests, E9 26/26, E10 10/10. Passing tests mostly establish implementation algebra under PROBABLE; they do not validate the estimands or calibrations. No files were edited.

## Role 1 — Mechanism-design / simulation skeptic

1. **Administrative cost is applied to the wrong object — [blocker].** File: [e10-costs.mjs:52–63](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e10-costs.mjs:52). κ is called budget consumed, but the code funds the full-budget portfolio and then scales realized net value by `1−κ`. This assumes linear value in budget and prevents portfolio re-optimization. A budget-first rerun at `.85B` and `.97B` changes the PROBABLE gap from +61.42 to +59.57 percentage points; the claimed cost contribution falls from about +2.3 to +0.47. **Change:** reduce each arm’s selectable budget before `fundedSet`, or redefine κ honestly as a value-equivalent haircut. **Threat:** RESULT.

2. **The claimed exact E5-to-E4 reduction is false generally — [major].** Files: [e5-delivery.mjs:137–154](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:137), [engine.mjs:175–188](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/engine.mjs:175). E5 retains every `O>0` world; E4 requires `O>.05·median(O)`. In an in-band diagnostic, E4 kept 360 worlds and E5 372, with distributed/reference normalizations −26.82 versus −27.77. **Change:** share the E4 retention routine, degeneracy diagnostics, and threshold across experiments; property-test the reduction across the declared region. **Threat:** RESULT/CLAIM outside PROBABLE.

3. **The reported intervals are Monte Carlo integration intervals, not empirical uncertainty — [major].** Files: [e5-delivery.mjs:161–174](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:161), [e9-fullstack.mjs:224–242](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:224). The bootstrap fixes the DGP, calibration, scenario, residual rule, and model form; increasing `nWorlds` mechanically tightens it. E10 reports no interval at all. **Change:** print “conditional Monte Carlo interval”; add outer calibration/scenario/model uncertainty and propagate paired draws through E10. **Threat:** CLAIM about precision.

4. **The multiplicative “validation” is circular — [major].** Files: [e5-delivery.mjs:157–158](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:157), [e5-delivery.mjs:193–196](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:193), [e5-delivery-test.mjs:36–45](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery-test.mjs:36). `dDvr` is defined as `A2/sD`, then `sD·dDvr` is tested against A2. It must pass. A positive level-scale interaction is not evidence of causal complementarity. **Change:** call it bookkeeping; test complementarity using cross-arm delivery fractions or a preregistered independence-null interaction. **Threat:** CLAIM only; the diagonal arithmetic remains.

5. **Signed “leakage” is not an expenditure-leakage share — [major].** Files: [e5-delivery.mjs:100–104](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:100), [e5-delivery.mjs:159–160](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:159). For `S<0`, `S(1−f)` is negative: failure to deliver a harmful project offsets lost benefits. In PROBABLE, about 35% of central-funded projects had negative S. **Change:** separately report expenditure leakage, undelivered benefits, and unrealized harms; retain signed welfare only as a distinct outcome. **Threat:** RESULT/CLAIM for delivery calibration.

6. **Shapley exactness does not identify layer contributions — [major].** Files: [e9-fullstack.mjs:187–202](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:187), [e9-fullstack-test.mjs:24–29](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack-test.mjs:24). Exact summation verifies the Shapley efficiency axiom. It does not validate hybrid institutional cells or make the decomposition causal or unique. Conditional marginals span planning −6.2 to +7.9, selection +27.7 to +48.1, and delivery +6.5 to +15.4 percentage points in the production configuration. **Change:** label it “model-internal symmetric decomposition”; report all conditional marginals or all six ordering paths. **Threat:** layer RESULT/CLAIM, not diagonal gain.

7. **Strict residual is a primary-estimand confound — [major].** Files: [e9-fullstack.mjs:121–136](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:121), [e9-fullstack.mjs:285–290](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:285). The headline lets status quo use 94.1% of budget and Core v0 86.8%. Recycling moves the PROBABLE gain from about +48.4 to +57.8 percentage points—far outside the Monte Carlo interval. **Change:** pre-specify the institutionally correct residual treatment or make strict/recycle co-primary and report the structural range. **Threat:** RESULT magnitude and attribution.

8. **Ratio-of-sums silently selects an oracle-value-weighted policy population — [major].** Files: [e5-delivery.mjs:137–160](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:137), [e9-fullstack.mjs:190–222](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:190). This estimates a value-weighted aggregate, not an equal-world/jurisdiction average. The target unit is never substantively justified. **Change:** declare the weighting estimand and report an equal-world alternative plus weight-concentration diagnostics. **Threat:** RESULT magnitude/transport.

9. **The greedy reference lacks an optimality-gap diagnostic — [major].** Files: [engine.mjs:119–138](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/engine.mjs:119), [E9-FULLSTACK-DESIGN.md:91–92](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:91). Value-per-cost greedy is not an exact binary-knapsack solution; the design still contains the false historical statement that every cell is bounded by it. **Change:** solve or bound the knapsack, or consistently say “greedy normalization reference” and report cell exceedance frequency. **Threat:** CLAIM and normalized magnitude.

10. **Public entry points are not fail-closed — [major].** Files: [e5-delivery.mjs:140–149](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:140), [e9-fullstack.mjs:205–215](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:205), [e10-costs.mjs:52–63](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e10-costs.mjs:52). E5/E9 bypass base-config domain validation; E10 accepts invalid or nonfinite κ values. **Change:** invoke `validateConfig`/`validateDomain` everywhere and validate κ, switches, seeds, and world counts. **Threat:** RESULT correctness for external and sensitivity runs.

**No valid attack found:** the Shapley weights themselves are correct; current `nSec=1 → E5` and costs-off reductions pass; current E9 code explicitly admits the reference is not an optimum.

## Role 2 — Calibration / identification hawk

1. **κ_C is calibrated to the wrong construct — [blocker].** Files: [e10-costs.mjs:25–37](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e10-costs.mjs:25), [E10-COSTS-DESIGN.md:19–28](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md:19). The IDB’s 4.4%-of-GDP estimate combines procurement waste, wage-bill inefficiency, and targeted-transfer leakage; it is not administrative machinery cost or a share Core v0 demonstrably removes. [The IDB source says exactly that](https://publications.iadb.org/publications/english/document/Better-Spending-for-Better-Lives-How-Latin-America-and-the-Caribbean-Can-Do-More-with-Less-%28Executive-Summary%29.pdf). **Change:** calibrate mutually exclusive operating-cost accounts for the exact replaced functions; keep κ_C illustrative until then. **Threat:** RESULT/CLAIM for E10.

2. **κ_D transports procurement-platform cost to an entire institution — [major].** Files: [e10-costs.mjs:33–37](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e10-costs.mjs:33), [E10-COSTS-DESIGN.md:24–25](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md:24). The cited e-procurement cost model covers design, deployment, and operation of procurement software—not universal participation, profiles, delegation, AI, assurance, appeals, recovery, or enforcement. [The underlying CBA’s scope is e-procurement](https://www.cambridge.org/core/services/aop-cambridge-core/content/view/1BC5D35109D488269F4C8F3E95C0B714/S2194588823000106a.pdf/the-investment-case-for-e-government-procurement-a-cost-benefit-analysis.pdf). **Change:** construct symmetric, bottom-up full-system cost inventories. **Threat:** RESULT/CLAIM.

3. **Verified zero diversion is threshold-engineered — [major].** Files: [e5-delivery.mjs:51–56](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:51), [e5-delivery.mjs:70–85](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:70). The default deterrence index is 1.05 while temptation is bounded below 1, making zero diversion deterministic. Olken’s audit treatment reduced missing expenditure by about eight percentage points; it did not eliminate it. [Olken’s paper reports both the 24% baseline moment and eight-point treatment effect](https://economics.mit.edu/sites/default/files/publications/Monitoring%20Corruption%20Evidence%20from%20a%20Field.pdf). **Change:** calibrate to observed residual leakage with uncertainty and an empirically defensible temptation distribution. **Threat:** RESULT/CLAIM for delivery.

4. **Olken expenditure loss is relabeled as S-weighted social-value loss — [major].** Files: [e5-delivery.mjs:44–56](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:44), [e5-delivery.mjs:302–305](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:302). Missing road inputs/expenditure do not identify proportional loss of generic project welfare, much less the decomposition into honesty, detection, advance, recovery, and ordinary loss. **Change:** use expenditure-weighted leakage for comparable works or estimate a sector-specific expenditure-to-output/value production function. Call the present exercise moment-matched, not identified. **Threat:** RESULT/CLAIM.

5. **E9’s sector-dispersion anchor has the wrong units — [major].** Files: [e9-fullstack.mjs:38–40](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:38), [e9-fullstack.mjs:71–76](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:71). A return-per-cost dispersion is added directly to per-project utility independently of cost. **Change:** implement a cost-scaled return tilt, reproduce the source statistic, and validate against held-out sector moments. **Threat:** planning CLAIM/numerics.

6. **`creditCoef=.076` has no valid bridge to its cited log-share coefficient — [major].** Files: [e9-fullstack.mjs:41–43](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:41), [e9-fullstack.mjs:81–87](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:81). A change in log visible-budget share cannot be inserted additively on the arbitrary `M_C` scale. **Change:** use a baseline-share/softmax model and inverse-calibrate a share semi-elasticity. **Threat:** planning CLAIM/numerics.

7. **Monitoring outcomes are recoded as detection and recovery probabilities without a bridge equation — [major].** Files: [e5-delivery.mjs:57–61](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:57), [e5-delivery.mjs:317–330](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:317). The cited health/workfare evidence does not estimate these model coefficients. **Change:** inverse-calibrate against comparable leakage outcomes or label the entire monitoring range declared. **Threat:** monitoring CLAIM only; baseline coupling is off.

8. **Only the count ten is genuinely COFOG-anchored — [major].** Files: [e9-fullstack.mjs:27–51](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:27), [e9-fullstack.mjs:57–75](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:57). Uniform project assignment, evenly spaced visibility, `assoc=-.6`, and `covSees=.7` are synthetic and jointly load-bearing. **Change:** use country/portfolio sector data or report all planning output as illustrative. **Threat:** planning CLAIM.

9. **The E5 calibration table is stale — [minor].** Files: [E5-DELIVERY-DESIGN.md:46–54](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:46), [e5-delivery.mjs:51–56](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:51). The table lists obsolete opaque, verified, reputation, and honesty parameters. **Change:** generate a single live configuration table from code and move prior calibrations into a changelog. **Threat:** presentation/reproducibility.

**No valid attack found:** using ten as the top-level COFOG count is defensible by itself. It does not anchor the remaining sector generator.

## Role 3 — Over-claim / spin prosecutor

1. **“Selection and delivery are robust” is false in the repository’s own worlds — [blocker].** Files: [e9-fullstack.mjs:314–319](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:314), [E9-FULLSTACK-DESIGN.md:250–270](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:250). Selection Shapley is −2.16 percentage points in `PRO_CENTRAL`; delivery Shapley is −2.09 in `PRO_DIST`. **Change:** say “large in PROBABLE”; print the named-world table and sign reversals. **Threat:** CLAIM, not PROBABLE arithmetic.

2. **E9 reports a full-stack number while declaring planning unquantifiable — [major].** Files: [e9-fullstack.mjs:279–284](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:279), [E9-FULLSTACK-DESIGN.md:256–270](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:256). The diagonal and all Shapley values are computed through a declared planning generator. Deferring the planning figure does not remove those assumptions from selection and delivery attribution. **Change:** suppress the unconditional full-stack point or label it explicitly conditional/illustrative; use E5 for standalone selection/delivery quantities until planning is anchored. **Threat:** RESULT/CLAIM.

3. **“Dominant” and “identified” smuggle an unanchored planning conclusion back in — [major].** Files: [e9-fullstack.mjs:302–319](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:302), [E9-FULLSTACK-DESIGN.md:256–270](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:256). A mechanical sensitivity lever is not empirically dominant or causally identified; zero is the current default. **Change:** say “potentially high-leverage modeled mechanism; prevalence and severity, including zero, are unidentified.” **Threat:** CLAIM.

4. **The Chile example makes an unsupported causal and taxonomic jump — [major].** File: [E9-FULLSTACK-DESIGN.md:134–166](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:134). Mental health is a funded health subfunction, not one zero-funded top-level COFOG function. The OECD does support low relative mental-health spending, but not the visibility-capture cause or `agendaCapture=1` mapping. [OECD data show under-spending, not the proposed causal treatment](https://www.oecd.org/en/publications/a-new-benchmark-for-mental-health-systems_4ed890f6-en/full-report/component-4.html). **Change:** remove the simulated +2–4 percentage-point Chile result or build a taxonomy-matched partial-share model. **Threat:** CLAIM only.

5. **The E5 “global robustness” box preserves the preferred ordering by construction — [major].** Files: [e5-delivery.mjs:249–281](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:249), [e5-delivery-test.mjs:106–114](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery-test.mjs:106). It holds the PROBABLE world fixed and draws from non-overlapping weak-opaque/strong-verified ranges. **Change:** rename it a conditional delivery-parameter sweep; add overlapping regimes, verified failure, competent opaque delivery, parameter dependence, and named worlds. **Threat:** robustness CLAIM.

6. **The one-sided opaque sweep cannot “resolve” calibration criticism — [major].** Files: [e5-delivery.mjs:200–215](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:200), [E5-DELIVERY-DESIGN.md:92–95](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:92). Every row weakens the comparator; naturally the advantage grows. **Change:** run a two-dimensional opaque-versus-verified grid with overlapping uncertainty and a competent status-quo region. **Threat:** CLAIM/magnitude robustness.

7. **“Publication-ready” is premature — [major].** File: [E5-DELIVERY-DESIGN.md:161–173](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:161). The same document records load-bearing declared values, stale specifications, a conditional bootstrap, and one-sided robustness. **Change:** downgrade to “code/test ready; empirical interpretation pending model-form and calibration review.” **Threat:** presentation/status claim.

8. **The design records mix superseded and current models as if all were live — [major].** Files: [E5-DELIVERY-DESIGN.md:48–53](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:48), [E9-FULLSTACK-DESIGN.md:81–110](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:81). E9 retains visibility-bin sectors, obsolete results, and the false statement that every cell is below the reference. **Change:** separate current specification from historical changelog and generate result tables from executable output. **Threat:** presentation/reproducibility.

**No valid attack found:** the fixed PROBABLE E5 +59.1-point arithmetic is reproduced and explicitly labeled PROBABLE. E10 also prints a narrowing case at κ_C=.05, so claiming that narrowing was entirely hidden would be unfair.

## Role 4 — Embargo / reporting auditor

1. **E10 emits a semantic performance multiplier — [blocker].** Files: [e10-costs.mjs:89–91](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e10-costs.mjs:89), [e10-costs-test.mjs:43–51](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e10-costs-test.mjs:43). The phrase `"value ratio (~2.7)"` is Core-v0/status-quo performance encoded without the prohibited literal token. The embargo filter accepts it. **Change:** remove it; report the permitted κ_C threshold near 8.2% for fixed κ_D=3%, or only the percentage-point table. **Threat:** presentation/embargo.

2. **The closed schema does not govern E5/E9/E10 — [blocker].** Files: [contract.mjs:121–145](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/contract.mjs:121), [adapter.mjs:23–59](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/adapter.mjs:23). These experiments use `safeLog`, a lexical filter, rather than the closed renderer. The E10 leak proves semantic bypass. **Change:** create typed closed schemas/renderers for all three experiments and test captured full stdout. **Threat:** presentation/embargo.

3. **All three outputs state parity at the reference rather than parity at zero — [major].** Files: [e5-delivery.mjs:293–294](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:293), [e9-fullstack.mjs:273–274](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:273), [e10-costs.mjs:71](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e10-costs.mjs:71). A cell’s reference level is 100%; institutional equality is zero percentage points. **Change:** state both explicitly and reserve “parity” for zero difference. **Threat:** presentation/embargo.

4. **The E9 design retains prohibited historical performance-multiplier notation — [major].** File: [E9-FULLSTACK-DESIGN.md:9–20](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:9). Retired status does not make public-performance multiplier notation compliant. **Change:** replace it with “retired near-parity macro result” or a signed percentage-point description. **Threat:** presentation only.

5. **E5 emits a delivery-level ratio outside the reference denominator — [minor].** File: [e5-delivery.mjs:296–305](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:296). “Delivered/selected” has a 100% level benchmark and is not a percentage of the common reference. **Change:** move it to a clearly labeled mechanism diagnostic and keep public institutional results in signed reference percentage points. **Threat:** presentation only.

**No valid attack found:** current stdout contains no literal prohibited suffix, prohibited “N-fold” phrasing, or explicit institution-ratio token. Structural factorial notation is not a performance multiplier. The valid failures are semantic bypass, parity wording, and incomplete routing.

## Role 5 — Double-counting / scope adversary

1. **E10’s κ_C anchor overlaps E5 leakage despite the “no overlap” assertion — [blocker].** Files: [e10-costs.mjs:27–32](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e10-costs.mjs:27), [E10-COSTS-DESIGN.md:40–44](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md:40). The IDB aggregate includes procurement waste and transfer leakage; E5 already removes value for diversion/non-delivery. **Change:** create mutually exclusive fiscal ledgers for administration, procurement prices, diversion, ordinary loss, and transfer leakage. **Threat:** RESULT/CLAIM for E10.

2. **Verified controls are free while central delivery management is charged — [major].** Files: [e5-delivery.mjs:35–56](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:35), [e10-costs.mjs:27–37](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e10-costs.mjs:27). Milestone verification, guarantees, auditing, recovery, reputation, and enforcement generate E5’s verified benefit, yet κ_D is scoped largely as platform and AI. **Change:** attach a cost to every modeled control in the same arm, with comparable scope in both regimes. **Threat:** RESULT/CLAIM.

3. **Monitoring contaminates the selection factor when enabled — [major].** Files: [e9-fullstack.mjs:156–180](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:156), [e9-fullstack.mjs:195–197](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:195). `useCov = s === 'd'` means switching selection also changes delivery control. **Change:** make monitoring a fourth factor, attach it to delivery, or rename the factor “coverage selection plus monitoring.” **Threat:** RESULT for coupled runs; no attack on the current default because coupling is zero.

4. **Formal recovery can be counted twice — [major].** Files: [e5-delivery.mjs:55–61](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:55), [e5-delivery.mjs:328–330](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:328). Verified delivery already has recovery `.50`; the institutional-linkage scenario raises the same recovery channel again. **Change:** define distinct observed stages or apply the monitoring recovery increment only where formal recovery is absent. **Threat:** secondary monitoring RESULT.

5. **Two cost/leak namespaces can silently disagree — [major].** Files: [contract.mjs:69–76](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/contract.mjs:69), [e10-costs.mjs:25–38](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e10-costs.mjs:25). The frozen contract exposes κ/leak fields that E10 ignores in favor of module-local values. **Change:** establish one source of truth, reject conflicts, and include E5/E9/E10 parameters in the resolved manifest hash. **Threat:** reproducibility/CLAIM; current defaults do not duplicate arithmetic because contract values are zero and ignored.

6. **The promised fiscal treatment of stolen funds is absent — [major].** Files: [E5-DELIVERY-DESIGN.md:39–44](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:39), [E10-COSTS-DESIGN.md:40–44](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md:40). E5 says stolen-fund cost belongs to E10, but E10 models only an administrative haircut—no opportunity cost, recovery, or reallocation. **Change:** add a fiscal-resource ledger or state that E5’s non-delivery is the program’s complete treatment. **Threat:** scope CLAIM.

**No valid attack found:** planning’s value tilt is constant within a sector and therefore does not reorder within-sector selection. Reusing signals at planning and selection is not inherently duplicate accounting. The valid overlap is the empirical scope of κ_C and the coupling of named factors.

## Role 6 — Robustness / adversarial-world referee

Targeted 800-world reruns:

| World | E5 full gain | E9 full gain | E9 selection | E9 delivery | E10 admin contribution |
|---|---:|---:|---:|---:|---:|
| PROBABLE | +58.97 pp | +48.35 pp | +36.95 pp | +10.75 pp | +2.35 pp |
| PRO_CENTRAL | +14.79 pp | +15.72 pp | **−2.16 pp** | +15.48 pp | +8.64 pp |
| PRO_DIST | +175.93 pp | +125.05 pp | +117.02 pp | **−2.09 pp** | **−15.49 pp** |
| MYOPIA_OFF | +46.30 pp | +36.60 pp | +25.09 pp | +11.93 pp | +4.25 pp |

1. **Every test suite is fixed to PROBABLE — [blocker].** Files: [e5-delivery-test.mjs:12–49](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery-test.mjs:12), [e9-fullstack-test.mjs:12–71](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack-test.mjs:12), [e10-costs-test.mjs:12–51](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e10-costs-test.mjs:12). “Positive interaction,” “A2 best,” positive main effects, recycling monotonicity, and the cost crossover fail in other declared worlds. **Change:** parameterize scenario regressions over every named world and distinguish mathematical invariants from PROBABLE regressions. **Threat:** robustness CLAIM.

2. **E5’s selection layer reverses in PRO_CENTRAL — [major].** Files: [e5-delivery.mjs:284–315](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:284), [scenario-configs.mjs:35–39](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/scenario-configs.mjs:35). Selection effects become approximately −1.8 and −2.2 percentage points; interaction becomes negative; A1 exceeds A2. **Change:** publish the named-world cells and qualify the selection claim. **Threat:** CLAIM; the full sign remains positive under current delivery values.

3. **A null verified-delivery contrast flips E5 in PRO_CENTRAL — [major].** File: [e5-delivery.mjs:35–56](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:35). Setting verified equal to opaque produces about −1.8 percentage points; the R=0 stress is much weaker because detection, advance, recovery, and guarantee remain favorable. **Change:** report the verified-improvement frontier needed for A2 to exceed S in every world. **Threat:** E5 RESULT sign outside PROBABLE.

4. **Both headline E9 layers reverse somewhere — [blocker].** Files: [e9-fullstack.mjs:268–319](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:268), [scenario-configs.mjs:37–48](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/scenario-configs.mjs:37). Selection is negative in PRO_CENTRAL; delivery is negative in PRO_DIST because stronger delivery magnifies harmful portfolios in some coalitions. **Change:** publish coalition values and named-world decompositions; condition layer signs on portfolio-value domain. **Threat:** central E9 CLAIMS.

5. **Residual treatment overwhelms sampling uncertainty and is non-monotone — [major].** Files: [e9-fullstack.mjs:121–136](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:121), [e9-fullstack-test.mjs:65–71](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack-test.mjs:65). PROBABLE moves roughly +48.4 to +57.8; PRO_DIST about +125.1 to +173.9; PRO_CENTRAL moves slightly downward, contradicting the test’s assumed monotonicity. **Change:** co-report/pre-specify residual rules and delete the false invariant. **Threat:** RESULT.

6. **Planning welfare direction is not robust — [major].** Files: [e9-fullstack.mjs:292–319](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:292), [scenario-configs.mjs:40–41](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/scenario-configs.mjs:40). MYOPIA_OFF gives negative planning Shapley; even PROBABLE’s distributed-selection planning effect is about −6.2. **Change:** distinguish the direction of a political-credit mechanism from the sign of planning welfare. **Threat:** planning CLAIM.

7. **E10’s cost contribution reverses in PRO_DIST — [blocker].** Files: [e10-costs.mjs:52–63](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e10-costs.mjs:52), [scenario-configs.mjs:45–48](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/scenario-configs.mjs:45). At the headline κ values, the cost layer narrows the gap by about 15.5 percentage points. Scaling negative status-quo welfare by `1−κ_C` mechanically “improves” it. **Change:** redesign cost accounting and add negative-value-domain tests. **Threat:** E10 RESULT/CLAIM; total Core-v0 advantage remains positive.

8. **World and delivery uncertainty are never crossed — [major].** File: [e5-delivery.mjs:249–281](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:249). Delivery LHS uses PROBABLE only; world runs use point delivery. The threatening combination is precisely a central-favorable world with a small verified-delivery advantage. **Change:** run a joint design across world, delivery, planning, residual, and κ uncertainty; report frontiers and worst cases. **Threat:** cross-experiment robustness CLAIM.

9. **The “20-seed” test uses eight seeds — [minor].** File: [e5-delivery-test.mjs:106–110](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery-test.mjs:106). **Change:** run twenty or rename the assertion. **Threat:** presentation/test coverage.

**Most threatening settings:** E5—PRO_CENTRAL combined with a small/null delivery advantage; E9—PRO_CENTRAL for the diagonal and selection, PRO_DIST for delivery; E10—PRO_DIST, which reverses the cost contribution.

**No valid attack found:** with the current point calibrations, none of the four named worlds reverses the full E5 or E9 diagonal. Shapley still sums exactly. Those facts should be retained.

# Synthesis — ranked top 18

1. **[E10] [blocker] Wrong cost estimand.** [e10-costs.mjs:52](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e10-costs.mjs:52). Rerun selection at net budgets; current +2.3-point cost contribution falls near +0.47. **Threat:** RESULT.

2. **[E10/cross] [blocker] κ_C uses broad waste that overlaps E5 leakage.** [E10-COSTS-DESIGN.md:19](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md:19). Build mutually exclusive fiscal ledgers; withdraw the empirical point until calibrated. **Threat:** RESULT/CLAIM.

3. **[E9] [blocker] “Robust selection and delivery” is false.** [e9-fullstack.mjs:314](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:314). Publish named-world decompositions and qualify signs. **Threat:** CLAIM.

4. **[E10] [blocker] Embargo breach through `"value ratio (~2.7)"`.** [e10-costs.mjs:89](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e10-costs.mjs:89). Remove the semantic multiplier and report a κ threshold or percentage-point table. **Threat:** presentation only.

5. **[cross] [blocker] Closed embargo schema does not cover E5/E9/E10.** [adapter.mjs:23](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/adapter.mjs:23). Add typed schemas/renderers and captured-output tests. **Threat:** presentation/embargo.

6. **[E9] [major] Full-stack and Shapley numbers inherit unanchored planning.** [e9-fullstack.mjs:195](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:195). Suppress unconditional full-stack attribution or label it illustrative; use E5 for standalone quantified layers. **Threat:** RESULT/CLAIM.

7. **[E9] [major] Primary strict-residual result is confounded by unequal utilization.** [e9-fullstack.mjs:121](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:121). Pre-specify or co-report residual rules. **Threat:** RESULT.

8. **[E5] [major] Verified zero diversion is mechanically saturated, not empirically identified.** [e5-delivery.mjs:51](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:51). Calibrate residual leakage and temptation from comparable treatment evidence. **Threat:** RESULT/CLAIM.

9. **[E5] [major] Olken’s expenditure moment is transported into signed generic welfare loss.** [e5-delivery.mjs:302](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:302). Separate expenditure leakage and welfare production. **Threat:** RESULT/CLAIM.

10. **[cross] [major] Narrow intervals omit all substantive uncertainty.** [e5-delivery.mjs:161](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:161). Relabel as conditional Monte Carlo intervals and add an outer uncertainty layer. **Threat:** CLAIM about precision.

11. **[E5] [major] General E4 reduction is false because retention differs.** [e5-delivery.mjs:147](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:147). Share E4’s retention/degeneracy code and test the full declared region. **Threat:** RESULT/CLAIM.

12. **[E10] [major] Cost scopes are asymmetric.** [e10-costs.mjs:27](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e10-costs.mjs:27). Charge Core v0 for every modeled verification, enforcement, assurance, and support function. **Threat:** RESULT/CLAIM.

13. **[E10] [major] PRO_DIST reverses the admin contribution.** [e10-costs.mjs:55](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e10-costs.mjs:55). Replace net-value haircuts with actual resource accounting and test negative-value domains. **Threat:** RESULT/CLAIM.

14. **[E5] [major] Multiplicative validation is tautological and interaction sign is local.** [e5-delivery-test.mjs:36](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery-test.mjs:36). Treat factorization as bookkeeping and test genuine complementarity separately. **Threat:** CLAIM.

15. **[E5/cross] [major] Robustness ranges preserve favorable regime ordering and never cross worlds.** [e5-delivery.mjs:249](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e5-delivery.mjs:249). Use overlapping regimes and a joint world-delivery-planning-cost design. **Threat:** robustness CLAIM.

16. **[E9] [major] Planning anchors have incompatible units/scales.** [e9-fullstack.mjs:38](C:/devel/claude-projects/distributed-governance-research/scripts/simulation/e4-v5/e9-fullstack.mjs:38). Implement cost-scaled sector returns and a calibrated share model. **Threat:** planning CLAIM/numerics.

17. **[E9] [major] Chile severity is not the modeled treatment.** [E9-FULLSTACK-DESIGN.md:134](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:134). Remove the numerical mapping or build a health-subfunction partial-share model. **Threat:** CLAIM only.

18. **[cross] [major] Current design documents are internally contradictory and embargo-inconsistent.** [E9-FULLSTACK-DESIGN.md:81](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:81). Separate the operative specification from historical notes and generate current tables from code. **Threat:** presentation/reproducibility.

Bottom line: preserve the fixed-PROBABLE arithmetic and the honest “greedy reference, not optimum” qualification. Do not preserve the current E10 cost result, “robust layer” language, empirical-zero delivery interpretation, narrow CI presentation, or claim of publication readiness.
