# Task 1 — Round-3 finding clearance

## Result

I re-read `audits/2026-07-10-round3/SUMMARY.md` and all seven dimension reports, then checked every finding against the current tree. Of the 34 dimension-level findings, **17 are CLEARED, 10 are PARTIAL, and 7 are NOT CLEARED**. Duplicate findings are retained below because the task requires one-to-one traceability to every Round-3 report.

`CLEARED` means the defect identified in Round 3 is no longer present. `PARTIAL` means material remediation is present but some part of that finding remains. `NOT CLEARED` means the finding's central condition remains true. Deposit-time items are classified on their present state here even when they are author-gated; that does not by itself make them manuscript blockers.

## Special-attention checks

| Check | Status | Current evidence |
|---|---|---|
| Statistic provenance across paper, companion, README, and contract | **PARTIAL** | The paper correctly says “pre-registered ... median Δ = 0.025” and then “**post-hoc** ... Δ = 0.026” (`drafts/paper.md:549-551`); the companion does the same (`docs/101_CORE_V0_MINIMAL_PUBLISHABLE_MODEL.md:797-800`), as does README (`README.md:31`). The binding contract separates the figures but still calls 0.026 only “the pooled ratio-of-sums” (`research/claim-and-estimand-contract.md:63-67`), never **post-hoc**. |
| Scope/overreach | **PARTIAL** | The named defects are corrected: the opening now limits itself to project-type investment and preserves redistribution/equity (`drafts/paper.md:30-38`); the conclusion says “For the bounded public-investment allocation problem” (`drafts/paper.md:1344-1348`); “by how much” is expressly unanswered (`drafts/paper.md:1265-1270`); and E7 is locally model-qualified (`drafts/paper.md:1003-1011`). One adjacent universal remains: delivered value is “the criterion public budgets exist to serve” (`drafts/paper.md:116-117`). |
| E7 “exclusively calibrated” / source status | **PARTIAL** | “Exclusively” and calibrated-treatment language are gone; the paper calls E7 a documented-practice-informed scenario with verification ongoing (`drafts/paper.md:983-990`). But the source note says the queue “must clear” (`research/e7-calibrated-baseline-design.md:52`), six groups remain open (`research/audit-evidence-base.md:81-88`), and the conclusion still invokes “audit-documented detection intensity” (`drafts/paper.md:1369-1374`). |
| Detection-floor mathematics | **CLEARED** | The paper labels the expression a “small-*q* (Poisson) approximation” and gives the exact Bernoulli condition (`drafts/paper.md:835-838`). |
| E4 invariances | **CLEARED** | They are now limited to “noise-free, large-set *expectation*, not ... every finite-sample run,” with finite-sample qualifications (`drafts/paper.md:841-849`). |
| Formal-model collusion mapping | **CLEARED** | `G = 1 − a(1 − r) + γ + R` is restored (`research/formal-models.md:144`). |
| Self-contained symmetry-gate methods block | **PARTIAL** | The block is now present and includes the estimand, grid, regimes, rule, and results (`drafts/paper.md:566-605`), but it is not correct. It reverses the roles of `N=5000` and `K=500` and calls `K` the funded count (`drafts/paper.md:568-569`); after defining `net` as truth (`drafts/paper.md:570`), it displays the central score with `net` instead of `hatNet_C` (`drafts/paper.md:580`); “differ in exactly one way” is contradicted by the mechanisms it immediately lists (`drafts/paper.md:573-584`); it calls the swept latent `rho` values realized correlations (`drafts/paper.md:588-589`); and it overreads a positive 0.016 negative control as proving “no hidden asymmetry” (`drafts/paper.md:598-599`). The Spanish mirror repeats all five errors (`drafts/paper.es.md:620-653`). |
| Mechanism literature bridge and novelty | **CLEARED** | Mayhew/Arnold and the operational status of `λ` appear in the mechanism block (`drafts/paper.md:580-584`) with full references (`drafts/paper.md:1428`, `drafts/paper.md:1472`); field-priority novelty is disclaimed in favor of “integrative, object-level synthesis” (`drafts/paper.md:272-275`). |
| Companion participation claim | **CLEARED** | The companion now calls the result conditional, records erosion, and says the gate cannot establish participation-decay resilience (`docs/101_CORE_V0_MINIMAL_PUBLISHABLE_MODEL.md:781-786`). |
| Spanish outreach “real system” wording and DOI | **PARTIAL** | Both summaries now say the architecture was tested in a stylized simulated world, “no medida contra el sistema real” (`drafts/paper-resumen-ejecutivo.es.md:39`; `drafts/paper-lectura-simple.es.md:37`), and the executive summary uses the companion concept DOI `10.5281/zenodo.21246088` (`drafts/paper-resumen-ejecutivo.es.md:5`, `drafts/paper-resumen-ejecutivo.es.md:51`). Other claims from the same Round-3 finding remain over-broad; see External #6. |
| Roadmap single state | **PARTIAL** | The top block is no longer the old “RE-BLOCKED” state, but it says both “ROUND-3 audit in progress” and that Round 3 “ran and returned NOT READY” (`audits/2026-07-10/remediation-roadmap.md:3-6`). The live roadmap also still says Round 3 is in progress (`docs/03_ROADMAP.md:19`, `docs/03_ROADMAP.md:39`) and later calls stale v1.10 packets “prepared” and re-deposit “mechanical” (`docs/03_ROADMAP.md:65-66`). |
| Five Spanish links | **CLEARED** | The Spanish paper now uses working `../research/...` links at all five sites (`drafts/paper.es.md:438`, `drafts/paper.es.md:585`, `drafts/paper.es.md:1597`, `drafts/paper.es.md:1600-1601`). |
| Reviewer-packet supersession | **PARTIAL** | The folder index and source packets now carry “SUPERSEDED — DO NOT SEND AS-IS” banners (`external-review/Reviewers/README.md:3-8`; `external-review/core-v0-review-packet.md:3-8`; `external-review/reviewer-briefs-v0.md:3-8`). Individual profile packets remain unbannered and stale, e.g. `external-review/Reviewers/Systems-Architect/review-packet.md:61`. |
| Stale Spanish PDF | **CLEARED** | The binary is absent; the control record says it “was removed” and must be freshly rendered before dissemination (`audits/2026-07-10/remediation-roadmap.md:130-133`). |
| Citation/license title | **CLEARED** | The obsolete “Adversarial Validation” title has been replaced by the final stress-testing/symmetric-test title in `CITATION.cff:15` and `LICENSE.md:45`. The v1.13 DOI/version switch remains a deposit-time action, not a recurrence of the title defect. |

## Every Round-3 finding

### Correctness & errors

| R3 finding | Status | Current locator and quote |
|---|---|---|
| C1. Selection-delivery interaction attributed to a selection-only gate | **CLEARED** | The two claims are now explicitly separated: “the two layers interact within the exploratory apparatus” and the gate “is a **selection-only** test with delivery held at parity ... it does not test the delivery interaction” (`drafts/paper.md:296-302`). |
| C2. Universal taxation/redistribution claim and “any allocation institution” | **PARTIAL** | The opening and conclusion are bounded (`drafts/paper.md:30-38`, `drafts/paper.md:1344-1348`), but the contribution list still calls delivered value “the criterion public budgets exist to serve” (`drafts/paper.md:116-117`). |
| C3. E4 turnout/distribution-shape invariances asserted as finite-sample properties | **CLEARED** | The statement is now restricted to “noise-free, large-set *expectation*, not ... every finite-sample run” and admits turnout, tails, and shape can change rankings (`drafts/paper.md:841-849`). |
| C4. Poisson approximation presented as an exact detection floor | **CLEARED** | “small-*q* (Poisson) approximation” is followed by “the exact Bernoulli condition is `m ≥ ln(1 − p_c)/ln(1 − q)`” (`drafts/paper.md:835-838`). |
| C5. Formal collusion mapping omitted recoverable advance | **CLEARED** | The current mapping is “`G = 1 − a(1 − r) + γ + R`” (`research/formal-models.md:144`). |

### Internal consistency & contradictions

| R3 finding | Status | Current locator and quote |
|---|---|---|
| I1. Introduction/conclusion/companion conflated pre-registered 0.025 and post-hoc 0.026 | **PARTIAL** | The named public surfaces are fixed: introduction `drafts/paper.md:121-126`, Finding 7 `drafts/paper.md:997-1002`, conclusion `drafts/paper.md:1362-1367`, companion `docs/101_CORE_V0_MINIMAL_PUBLISHABLE_MODEL.md:797-800`, and README `README.md:31`. The binding contract still says merely “the pooled ratio-of-sums was Δ = 0.026” (`research/claim-and-estimand-contract.md:65-67`) without the required **post-hoc** label. |
| I2. Roadmap had mutually incompatible publication states | **PARTIAL** | The old blocked narrative is superseded, but the current banner still says both “ROUND-3 audit in progress” and “ran and returned NOT READY” (`audits/2026-07-10/remediation-roadmap.md:3-6`); the thin roadmap repeats “round-3 audit is in progress” (`docs/03_ROADMAP.md:19`, `docs/03_ROADMAP.md:39`) and contradicts its own non-mechanical warning with “mechanical author step” (`docs/03_ROADMAP.md:66`). |
| I3. Companion pointed to Section 3 for computational evidence | **CLEARED** | The minimum-contribution paragraph now points to “manuscript Section 6” (`docs/101_CORE_V0_MINIMAL_PUBLISHABLE_MODEL.md:928`). |
| I4. Bare “0.05 materiality gate” on public summaries | **CLEARED** | README calls it a “research-program rebuild gate — not a policy-materiality threshold” (`README.md:31`); companion uses “research-program rebuild gate” (`docs/101_CORE_V0_MINIMAL_PUBLISHABLE_MODEL.md:798-800`); contract gives the same non-policy interpretation (`research/claim-and-estimand-contract.md:63-65`). |

### Honesty & overclaiming

| R3 finding | Status | Current locator and quote |
|---|---|---|
| H1. Gate summaries substituted 0.026 for the pre-registered statistic and called 0.05 policy-materiality | **PARTIAL** | All named summaries now use median 0.025 and the rebuild-only interpretation (`drafts/paper.md:121-126`, `drafts/paper.md:1362-1367`; `docs/101_CORE_V0_MINIMAL_PUBLISHABLE_MODEL.md:797-800`; `README.md:31`). The contract's 0.026 sentence remains unlabeled as post-hoc (`research/claim-and-estimand-contract.md:65-67`). |
| H2. Paper claimed it answered whether architecture improves outcomes “and by how much” | **CLEARED** | It now says the question is answered only at “a buildable design and a conditional selection-mechanism *direction*” and “does **not** answer *by how much* real-world delivered value would improve” (`drafts/paper.md:1262-1270`). |
| H3. E7 converted a stipulated apparatus output into a real-world audit claim | **CLEARED** | The body says the result is “conditional on its stipulated ... distribution and no-memory baseline” and “not an estimated causal effect of real-world auditing” (`drafts/paper.md:1003-1011`). The conclusion calls real-world applicability “a hypothesis for a pilot, not a result here” (`drafts/paper.md:1369-1374`). |
| H4. Universal taxation/redistribution/“any allocation institution” claims | **PARTIAL** | The named opening and conclusion claims are bounded (`drafts/paper.md:30-38`, `drafts/paper.md:1344-1348`), and the limitation is explicit (`drafts/paper.md:1237-1246`), but “the criterion public budgets exist to serve” remains at `drafts/paper.md:116-117`. |
| H5. Companion claimed categorical participation survivability | **CLEARED** | It now reports the tested 10%-to-2% range, erosion, and says this is “not evidence of deployment resilience” (`docs/101_CORE_V0_MINIMAL_PUBLISHABLE_MODEL.md:781-786`); the FAQ is conditional and leaves a fixed-central-capacity test to future work (`docs/101_CORE_V0_MINIMAL_PUBLISHABLE_MODEL.md:944`). |

### Completeness & gaps

| R3 finding | Status | Current locator and quote |
|---|---|---|
| G1. Confirmatory gate lacked self-contained methods | **PARTIAL** | The requested block is present, but five material descriptions are inaccurate. **(1)** “N = 5000 candidate projects, K = 500 funded” (`drafts/paper.md:568-569`) reverses the implementation: `N=5000` is citizens and `K=500` is candidate projects (`scripts/simulation/e5-sp-symmetry-gate.mjs:29-37`); funded count is endogenous to the one-third budget. **(2)** The block defines `net` as truth (`drafts/paper.md:570`) and then prints central `score = ... z(net/cost)` (`drafts/paper.md:580`), but the code ranks with `hatNetC/cost` (`scripts/simulation/e5-sp-symmetry-gate.mjs:79-90`). **(3)** “They differ in exactly one way” (`drafts/paper.md:573`) is false: the frozen design names endogenous coverage, asymmetric negative reporting, even central appraisal, and central credit pressure as legitimate differences (`audits/2026-07-10/symmetry-gate-preregistration.md:37-39`). **(4)** “realized corr(S,P) ∈ {0, 0.5, 1}” (`drafts/paper.md:588-589`) confuses the swept `latentRho` grid with the separately reported realized correlation (`audits/2026-07-10/symmetry-gate-preregistration.md:45-48`; `scripts/simulation/e5-sp-symmetry-gate.mjs:109-117`). **(5)** A negative-control median of 0.016 does not establish “no hidden asymmetry” (`drafts/paper.md:598-599`); the frozen code only flags a suspected *material* asymmetry above 0.05 (`scripts/simulation/e5-sp-symmetry-gate.mjs:146-163`). Spanish repeats the same claims at `drafts/paper.es.md:620-653`. |
| G2. Credit-versus-coverage mechanism lacked literature bridge | **CLEARED** | `P` is tied to “electoral credit-claiming and traceability” with Mayhew and Arnold, while `λ` is explicitly posited and awaiting measurement (`drafts/paper.md:580-584`); full entries are present at `drafts/paper.md:1428` and `drafts/paper.md:1472`. |
| G3. Novelty claimed before systematic prior-art review | **CLEARED** | The paper now says the review has not been run and claims “integrative, object-level synthesis rather than novelty against all adjacent work” (`drafts/paper.md:272-275`). This implements Round 3's alternative of removing field-priority language. |
| G4. E7 claimed exclusive/calibrated sourcing despite an open verification queue | **PARTIAL** | E7 is now “a documented-practice-informed scenario; verification of some primary sources is ongoing” (`drafts/paper.md:983-990`) and says it does not calibrate the treatment effect (`drafts/paper.md:997-1014`). However, the governing source note says the verification queue “must clear” before formal citation (`research/e7-calibrated-baseline-design.md:52`), six groups remain open (`research/audit-evidence-base.md:81-88`), and the conclusion still carries the result at “audit-documented detection intensity” (`drafts/paper.md:1369-1374`). |
| G5. Outcome-measure limitation absent while welfare criterion was universalized | **PARTIAL** | The limitation now states the measure is “bounded, non-distributional,” can distribute badly, and omits incidence and equilibrium channels (`drafts/paper.md:1237-1246`); opening/conclusion are bounded (`drafts/paper.md:30-38`, `drafts/paper.md:1344-1348`). The universal contribution phrase at `drafts/paper.md:116-117` remains. |

### External-facing surfaces

| R3 finding | Status | Current locator and quote |
|---|---|---|
| E1. Stale Spanish PDF republishes retired multiplier | **CLEARED** | `drafts/paper-resumen-ejecutivo.es.pdf` is absent. The roadmap records that it “was removed” and requires a fresh render before dissemination (`audits/2026-07-10/remediation-roadmap.md:130-133`). |
| E2. Live Zenodo record retains the retired headline, stale counts/license/title/relation | **NOT CLEARED** | The repository itself still records that the live title says v1.8 and is “pending author” (`README.md:37`). A read-only API recheck on 2026-07-10 also still returned the old E7/E8-confirmation description, forty attacks/four rounds, CC-BY-NC-ND note, exact companion v0.4 relation, and title/version mismatch. This is an author-gated deposit-time action, but the current external state is unchanged. |
| E3. Companion conflated the primary and post-hoc gate statistics | **CLEARED** | Its correction banner now says “median Δ = 0.025” and separately “a post-hoc ratio-of-sums ... Δ = 0.026 [0.023, 0.029]” (`docs/101_CORE_V0_MINIMAL_PUBLISHABLE_MODEL.md:8-10`), repeated at `docs/101_CORE_V0_MINIMAL_PUBLISHABLE_MODEL.md:797-800`. |
| E4. Companion claimed participation resilience the test cannot establish | **CLEARED** | The text now says the result is conditional, records within-cycle erosion, and states the matched-budget gate “cannot establish participation-decay resilience” (`docs/101_CORE_V0_MINIMAL_PUBLISHABLE_MODEL.md:781-786`); FAQ qualification is at `docs/101_CORE_V0_MINIMAL_PUBLISHABLE_MODEL.md:944`. |
| E5. No current sendable reviewer packet; all packets target v1.8 | **PARTIAL** | Index/source files are now quarantined with “SUPERSEDED — DO NOT SEND AS-IS” (`external-review/Reviewers/README.md:3-8`; `external-review/core-v0-review-packet.md:3-8`; `external-review/reviewer-briefs-v0.md:3-8`). No v1.13 packet exists, and individual packets remain directly unbannered and stale, e.g. “v1.8 ... eight-experiment ... six ... pre-registered” (`external-review/Reviewers/Systems-Architect/review-packet.md:61`). Full rewrite is correctly deferred at `audits/2026-07-10/remediation-roadmap.md:52-53`. |
| E6. Spanish outreach made conditional simulation outputs into real-system claims | **PARTIAL** | The “measured against the real system” wording is fixed (`drafts/paper-resumen-ejecutivo.es.md:39`; `drafts/paper-lectura-simple.es.md:37`) and the DOI is corrected (`drafts/paper-resumen-ejecutivo.es.md:5`, `drafts/paper-resumen-ejecutivo.es.md:51`). But both caveats call the whole stylized world “parametrizado por auditorías” (`drafts/paper-resumen-ejecutivo.es.md:39`; `drafts/paper-lectura-simple.es.md:37`), conflating E7's partially verified baseline inputs with the uncalibrated symmetry gate. The first gate result also says “real” without the selection-only/uncalibrated caveat and uses “umbral de materialidad” (`drafts/paper-resumen-ejecutivo.es.md:25`); “cada incremento paga” and broad control/AI claims remain (`drafts/paper-resumen-ejecutivo.es.md:31-35`). The simple version likewise retains “cada incremento paga” (`drafts/paper-lectura-simple.es.md:32`). |
| E7. `.zenodo.json` cannot machine-declare mixed CC-BY/MIT rights | **NOT CLEARED** | It still has one machine license, `"license": "cc-by-4.0"` (`.zenodo.json:11`), while its prose says code is MIT (`.zenodo.json:23`). The roadmap explicitly defers the multi-license declaration to deposit time (`audits/2026-07-10/remediation-roadmap.md:54-55`). |
| E8. Preferred/manual citation used obsolete “Adversarial Validation” title | **CLEARED** | Both now use “Adversarial Stress-Testing, and a Symmetric Computational Test” (`CITATION.cff:15`; `LICENSE.md:45`). `CITATION.cff:20-21` transparently distinguishes deposited v1.12 from working v1.13; changing to the future v1.13 version DOI remains a deposit-time action. |

### Clarity, order & readability

| R3 finding | Status | Current locator and quote |
|---|---|---|
| K1. Experiment map does not expose the governing gate distinctly | **NOT CLEARED** | The map still says “(E1–E8) corresponds to a finding,” has a blank third header, maps E5 only to the delivery factorial, and sends E8 to “close of §6” (`drafts/paper.md:510-521`). The governing gate remains outside the table at `drafts/paper.md:544-605`. |
| K2. Section 6 is too long and flat | **NOT CLEARED** | Section 6 still runs from `drafts/paper.md:506` to `drafts/paper.md:1046` with no Markdown subheadings; all findings remain bold run-ins, beginning at `drafts/paper.md:607`, while Section 7 starts at `drafts/paper.md:1047`. |
| K3. Superseded ratios appear before their baselines | **NOT CLEARED** | The three ratios are still presented at `drafts/paper.md:537-542`, before E5 at `drafts/paper.md:896-944`, E7 at `drafts/paper.md:976-1020`, and E8 at `drafts/paper.md:1021-1035`. |
| K4. Mathematical notation is overloaded/under-defined | **NOT CLEARED** | `θ` is latent project quality and `λ` a need-mixing weight at `drafts/paper.md:524-527`, while `θ` is reused as a harm weight at `drafts/paper.md:767-768` and `λ*` as a capture threshold at `drafts/paper.md:831-833`; no local legend was added. |
| K5. Abstract remains long and syntactically dense | **NOT CLEARED** | The abstract still contains the long all-in-one evidence sentence beginning “Its animating idea...” and carrying mechanism, test, review count, 18 cells, median, retirement, and propositions on one source line (`drafts/paper.md:13`). |
| K6. Section 6 ended on a legacy ratio instead of synthesis | **CLEARED** | It now ends with “**What survives**,” explicitly listing the small 0.025 result, architecture/mechanism, conditional status of all large ratios, and future total-value work (`drafts/paper.md:1037-1045`). |

### EN/ES parity

| R3 finding | Status | Current locator and quote |
|---|---|---|
| P1. Five Spanish companion links were non-clickable/wrong-relative-path code spans | **CLEARED** | All are now live Markdown links using `../research/...`: formal models at `drafts/paper.es.md:438` and `drafts/paper.es.md:1597`, simulation results at `drafts/paper.es.md:585` and `drafts/paper.es.md:1600`, and audit evidence at `drafts/paper.es.md:1601`. |

## Remaining items by kind

### Manuscript/repository items still fixable now

1. Correct the self-contained gate block's `N/K` semantics, central `hatNet_C` score, arm-difference description, latent-versus-realized correlation label, and negative-control interpretation in both languages (`drafts/paper.md:568-599`; `drafts/paper.es.md:620-653`).
2. Add **post-hoc** to the 0.026 ratio-of-sums in the binding contract (`research/claim-and-estimand-contract.md:65-67`).
3. Remove or bound “the criterion public budgets exist to serve” (`drafts/paper.md:116-117`).
4. Reconcile roadmap state to Round 4 and remove the lower “packets prepared” / “mechanical author step” contradictions (`docs/03_ROADMAP.md:19`, `docs/03_ROADMAP.md:39`, `docs/03_ROADMAP.md:65-66`; `audits/2026-07-10/remediation-roadmap.md:3-6`).
5. Put a supersession banner on every directly openable stale profile packet, or move them under an unmistakably historical namespace; the full v1.13 rewrite remains deposit-time (`external-review/Reviewers/Systems-Architect/review-packet.md:61` is representative).
6. Finish scoping the Spanish outreach result and apparatus claims, including the whole-world “parametrizado por auditorías” conflation (`drafts/paper-resumen-ejecutivo.es.md:25`, `drafts/paper-resumen-ejecutivo.es.md:31-39`; `drafts/paper-lectura-simple.es.md:32-37`).
7. Either clear E7's mandatory primary-source queue or remove its remaining conclusion-level “audit-documented” formulation (`research/e7-calibrated-baseline-design.md:52`; `research/audit-evidence-base.md:81-88`; `drafts/paper.md:1369-1374`).
8. The five clarity findings K1–K5 remain editorial improvements rather than unintelligible-claim blockers.

### Author-gated deposit-time items still open

1. Correct the live Zenodo v1.12 metadata, then verify the v1.13 deposited record (`README.md:37`; deferral at `audits/2026-07-10/remediation-roadmap.md:9-11`).
2. Declare both CC-BY-4.0 and MIT in machine metadata at deposit (`.zenodo.json:11`, `.zenodo.json:23`; deferral at `audits/2026-07-10/remediation-roadmap.md:54-55`).
3. Produce the full v1.13 reviewer packet/cover set (`audits/2026-07-10/remediation-roadmap.md:52-53`).
4. Switch citation/version DOI fields to the actual v1.13 deposit once it exists (`CITATION.cff:20-21`; `LICENSE.md:45`).

## Locator verification

After drafting this report, I re-opened every cited current-tree file and checked every locator against the current line numbering. The Zenodo statement was also rechecked read-only through the live record API on 2026-07-10; it is supported in-tree by the current pending-author disclosure at `README.md:37`.
