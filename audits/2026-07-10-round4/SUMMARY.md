# Round-4 publication-readiness summary

## Overall verdict

**NOT READY.** The remediation clears most Round-3 correctness and public-surface defects, and the settled Path-B result is now mostly coherent: the pre-registered decision statistic is pooled median `Δ = 0.025`, while `Δ = 0.026 [0.023, 0.029]` is a separate post-hoc ratio-of-sums estimate. The stale Spanish PDF is gone, the five Spanish links work, the three mathematical corrections are in place, the mechanism has a bounded literature bridge, and the main EN/ES manuscripts remain synchronized.

The repository is nevertheless not merely waiting on author-gated deposit work. The newly added self-contained gate paragraph materially misdescribes the frozen experiment, several claim/provenance surfaces remain only partially repaired, E7's mandatory source-verification condition remains open while an E7 claim survives in the conclusion, and the publication-control roadmaps still contradict themselves. These are fix-now manuscript/repository blockers.

Across the 34 Round-3 dimension findings, the final crosswalk is **17 CLEARED / 10 PARTIAL / 7 NOT CLEARED**. The seven `NOT CLEARED` entries include five previously minor editorial/readability findings and two author-gated external-state items; they are not all manuscript blockers.

## Round-3 findings crosswalk

| ID | Round-3 finding | Status |
|---|---|---|
| C1 | Selection-delivery interaction attributed to selection-only gate | **CLEARED** |
| C2 | Universal taxation/redistribution and allocation-institution criterion | **PARTIAL** |
| C3 | E4 invariances misstated as finite-sample properties | **CLEARED** |
| C4 | Poisson approximation presented as exact | **CLEARED** |
| C5 | Recoverable advance omitted from formal collusion mapping | **CLEARED** |
| I1 | Pre-registered 0.025 conflated with post-hoc 0.026 | **PARTIAL** |
| I2 | Roadmap publication states contradicted one another | **PARTIAL** |
| I3 | Companion cross-reference pointed to Section 3, not Section 6 | **CLEARED** |
| I4 | Public summaries called 0.05 a bare materiality gate | **CLEARED** |
| H1 | Gate summaries mislabeled 0.026 and policy materiality | **PARTIAL** |
| H2 | Paper claimed to answer improvement “and by how much” | **CLEARED** |
| H3 | E7 apparatus output stated as a real-world audit effect | **CLEARED** |
| H4 | Universal public-finance and welfare claims | **PARTIAL** |
| H5 | Companion claimed categorical participation resilience | **CLEARED** |
| G1 | Confirmatory gate lacked a self-contained methods account | **PARTIAL** |
| G2 | Credit-versus-coverage mechanism lacked a literature bridge | **CLEARED** |
| G3 | Novelty claimed before a systematic prior-art review | **CLEARED** |
| G4 | E7 sourcing described as exclusive/calibrated despite open verification | **PARTIAL** |
| G5 | Outcome limitation absent while welfare criterion was universalized | **PARTIAL** |
| E1 | Stale Spanish PDF republished the retired multiplier | **CLEARED** |
| E2 | Live Zenodo v1.12 metadata retains stale Path-B/count/license/title data | **NOT CLEARED** — deposit-time |
| E3 | Public companion conflated median and ratio-of-sums | **CLEARED** |
| E4 | Public companion claimed unsupported participation resilience | **CLEARED** |
| E5 | No current sendable reviewer packet | **PARTIAL** — rewrite deposit-time; quarantine incomplete now |
| E6 | Spanish outreach turned conditional outputs into real-system claims | **PARTIAL** |
| E7 | Machine metadata cannot declare the mixed CC-BY/MIT rights | **NOT CLEARED** — deposit-time |
| E8 | Preferred/manual citation used the obsolete title | **CLEARED** |
| K1 | Experiment map does not expose the governing gate | **NOT CLEARED** — editorial |
| K2 | Section 6 remains long and flat | **NOT CLEARED** — editorial |
| K3 | Superseded ratios precede their baseline explanations | **NOT CLEARED** — editorial |
| K4 | Mathematical notation remains overloaded/under-defined | **NOT CLEARED** — editorial |
| K5 | Abstract remains long and syntactically dense | **NOT CLEARED** — editorial |
| K6 | Section 6 ended on a legacy ratio instead of synthesis | **CLEARED** |
| P1 | Five Spanish companion links were non-clickable/wrong-relative | **CLEARED** |

The locator-by-locator evidence and quotes for every row are in `task-1-round3-clearance.md`.

## Remaining fix-now blockers, ranked

### 1. The new symmetry-gate methods block is not faithful to the frozen experiment

This is the decisive regression because the paragraph is supposed to make the paper's only confirmatory computation self-contained.

- It calls `N = 5000` candidate projects and `K = 500` funded projects (`drafts/paper.md:568-569`; Spanish `drafts/paper.es.md:620-622`). The script instead uses `K=500` candidate projects and loops `i<N` over 5,000 citizens/valuation draws; the funded count is endogenous (`scripts/simulation/e5-sp-symmetry-gate.mjs:36-46`, `scripts/simulation/e5-sp-symmetry-gate.mjs:52-57`).
- After defining `net[j]` as truth, it prints the central score as `z(net/cost)` (`drafts/paper.md:570-580`; Spanish `drafts/paper.es.md:622-633`), while the frozen design uses the central arm's noisy `hatNet_C` (`audits/2026-07-10/symmetry-gate-preregistration.md:32-34`; `scripts/simulation/e5-sp-symmetry-gate.mjs:85-90`).
- It says the arms “differ in exactly one way — the coverage mechanism,” then gives the central arm a credit-weighted ranking absent from the distributed arm (`drafts/paper.md:573-584`; Spanish `drafts/paper.es.md:626-637`). The pre-registration describes a composite credit-versus-coverage contrast (`audits/2026-07-10/symmetry-gate-preregistration.md:37-39`).
- It labels `{0, 0.5, 1}` as realized `corr(S,P)` (`drafts/paper.md:588-589`; Spanish `drafts/paper.es.md:642-643`), but those are latent-rho settings; archived realized diagnostics are about `0.00`, `0.30`, and `0.82` (`audits/2026-07-10/symmetry-gate-results.txt:5-14`).
- It says the `λ=0` result proves “no hidden asymmetry” (`drafts/paper.md:598-599`; Spanish `drafts/paper.es.md:652-653`), while the pre-registration only defines a `>0.05` pause guard (`audits/2026-07-10/symmetry-gate-preregistration.md:64-66`).

These errors do not change the stored NO-GO result, but they must be corrected before the manuscript is reviewable.

### 2. The claim-and-provenance boundary is not yet coherent on all current surfaces

Three bounded but publication-facing remnants should be fixed together:

- The binding contract separates the estimates but never calls `0.026` **post-hoc** (`research/claim-and-estimand-contract.md:63-67`).
- The contribution list still calls delivered value “the criterion public budgets exist to serve” (`drafts/paper.md:115-117`; Spanish `drafts/paper.es.md:125-127`), exceeding the paper's bounded, non-distributional outcome definition (`drafts/paper.md:1237-1244`).
- The Spanish executive summary still says “umbral de materialidad” (`drafts/paper-resumen-ejecutivo.es.md:25`), and both outreach summaries call the stylized world “parametrizado por auditorías” (`drafts/paper-resumen-ejecutivo.es.md:39`; `drafts/paper-lectura-simple.es.md:37`). That conflates the uncalibrated governing gate with the earlier E7 apparatus.

### 3. E7's declared source-verification condition remains open

The E7 design says its verification queue “must clear” before formal citation (`research/e7-calibrated-baseline-design.md:52`), and the evidence base still lists unresolved groups (`research/audit-evidence-base.md:81-88`). The paper now supplies substantial scenario/model caveats, but the conclusion still carries an “audit-documented detection intensity” result (`drafts/paper.md:1369-1374`). Either clear the queue with a source crosswalk or remove that conclusion-facing formulation and label E7 consistently as partially verified.

### 4. Release control still has no single current state

The “single current state” banner says Round 3 is both “in progress” and already returned `NOT READY` (`audits/2026-07-10/remediation-roadmap.md:3-6`). The public roadmap repeats the stale in-progress/PDF gates and calls deposit both non-mechanical and a “mechanical author step” (`docs/03_ROADMAP.md:19-23`, `docs/03_ROADMAP.md:39-42`, `docs/03_ROADMAP.md:65-66`). It also records v1.10 packets as prepared even though the packet indexes say not to send them. The indexes are bannered, but directly openable profile packets remain unbannered and stale (`external-review/Reviewers/Systems-Architect/review-packet.md:61`). The full rewrite is deposit-time; safe quarantine and one accurate roadmap state are fix-now.

Two additional non-blocking regressions should be repaired in the same pass: the new limitation's `§ estimand contract` is not a resolvable section/link (`drafts/paper.md:1244-1246`; Spanish `drafts/paper.es.md:1327-1329`), and `RELEASING.md` says “Attribution is required for everything” despite MIT requiring notice retention rather than CC-style attribution (`RELEASING.md:19-23`; correct wording at `LICENSE.md:5`).

## Author-gated deposit-time actions

These actions are real and still open, but they are not counted as manuscript blockers:

1. **Edit the live v1.12 Zenodo record metadata directly.** Correct the v1.8 title suffix, add the Path-B correction, replace the E7/E8 headline story, update 40/four to 43/five, replace the old NC-ND note, and correct the companion relation. The roadmap recognizes the author action but wrongly says it needs a metadata redeposit (`audits/2026-07-10/remediation-roadmap.md:258-264`); `README.md:37` correctly says the published metadata can be edited without a new DOI.
2. **Finish the v1.13 reviewer packet and cover rewrite.** Rewrite the five EN/ES packet pairs and cover around Path B, the one confirmatory gate, NO-GO, median `0.025`, separate post-hoc `0.026`, and the selection-only/uncalibrated limit. The old set is quarantined at index level (`external-review/Reviewers/README.md:3-8`), and the roadmap defers the rewrite (`audits/2026-07-10/remediation-roadmap.md:52-53`).
3. **Declare both licenses in Zenodo's machine metadata.** The local legacy JSON has only CC-BY in its machine field while its note assigns code to MIT (`.zenodo.json:11`, `.zenodo.json:23`); the UI/API action is deferred at `audits/2026-07-10/remediation-roadmap.md:54-55`.
4. **Freeze, deposit, and verify v1.13.** Render and inspect EN/ES release artifacts, create the new-version draft, upload the frozen package, publish, verify the version and concept records, and then sweep the v1.13 version DOI/date through citation and release surfaces. Do not deposit until the fix-now blockers above are cleared (`audits/2026-07-10/remediation-roadmap.md:9-11`).

## Verification

- `npm run check-anchors` passes: `broken=0`, `drifted=0`, `dead-paths=0`, `dead-wikilinks=0`.
- `drafts/paper-resumen-ejecutivo.es.pdf` is absent from the current tree.
- English and Spanish carry the same newly added gate and “What survives” paragraphs; the errors in the gate block are mirrored rather than an EN/ES desynchronization.
- Every file locator in the three task reports and this summary was re-read against the current tree after the reports were reconciled.
