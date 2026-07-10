# Task 2 — Regressions introduced by remediation

## Material findings

### BLOCKER — The new self-contained symmetry-gate block does not faithfully describe the frozen experiment

This is the paper's declared “one confirmatory computation,” so errors in the block that is supposed to make it independently reviewable are publication-blocking. The English and Spanish mirrors agree with one another, but they mirror the same errors:

1. **The population, candidate pool, and funded set are misidentified.** `drafts/paper.md:568-569` says “**N = 5000 candidate projects, K = 500 funded**”; the Spanish mirror says the same at `drafts/paper.es.md:620-622` (“**N = 5000 proyectos candidatos, K = 500 financiados**”). In the live script, however, `N=5000` is the citizen/valuation population and `K=500` is the candidate-project count: `scripts/simulation/e5-sp-symmetry-gate.mjs:36` creates arrays of length `K`, `scripts/simulation/e5-sp-symmetry-gate.mjs:39` loops over projects, and `scripts/simulation/e5-sp-symmetry-gate.mjs:46` loops `i<N` to draw interested citizens. The funded count is endogenous to greedy budget fill, not fixed at 500 (`scripts/simulation/e5-sp-symmetry-gate.mjs:52-57`).

2. **The displayed central score uses the truth variable after the block defines it as truth.** The block defines “**truth net[j]**” at `drafts/paper.md:570`, then gives the central score as `z(net/cost)` at `drafts/paper.md:580`; the same mismatch appears at `drafts/paper.es.md:622` and `drafts/paper.es.md:633`. That notation makes the central ranking appear to see true net value, contradicting the block's own “own noisy estimate” statement (`drafts/paper.md:571-573`) and the no-oracle symmetry condition. The frozen specification and code use estimated net: `z(hatNet_C/cost)` (`audits/2026-07-10/symmetry-gate-preregistration.md:32-34`; `scripts/simulation/e5-sp-symmetry-gate.mjs:85-90`).

3. **“They differ in exactly one way — the coverage mechanism” is false or, at minimum, materially misleading.** That claim appears at `drafts/paper.md:573-574` and `drafts/paper.es.md:626-627`, but the next sentences give the central arm a bounded credit term that the distributed arm does not have (`drafts/paper.md:577-584`; Spanish `drafts/paper.es.md:630-637`). The frozen specification explicitly lists the legitimate differences as endogenous routing, adverse voice bias, even central bandwidth, **and** bounded central credit pressure (`audits/2026-07-10/symmetry-gate-preregistration.md:37-39`). The primary result is therefore a test of the permitted composite credit-versus-coverage contrast, not coverage alone.

4. **The swept latent parameter is mislabeled as realized correlation.** `drafts/paper.md:588-589` reports “**realized corr(S, P) ∈ {0, 0.5, 1}**”; Spanish repeats this at `drafts/paper.es.md:642-643`. The pre-registration calls those values `latentRho` (`audits/2026-07-10/symmetry-gate-preregistration.md:45-48`), and the current script warns that the separately computed `corrSP` is only a diagnostic and gate membership uses latent rho (`scripts/simulation/e5-sp-symmetry-gate.mjs:104-113`). The archived realized diagnostics are approximately 0.00, 0.30, and 0.82, not 0, 0.5, and 1 (`audits/2026-07-10/symmetry-gate-results.txt:5-14`).

5. **The negative-control interpretation exceeds the pre-registered guard.** `drafts/paper.md:598-599` says Δ≈0.016 “**indicat[es] no hidden asymmetry**”; Spanish makes the same claim at `drafts/paper.es.md:652-653`. The pre-registration only says to pause if the negative-control median exceeds 0.05 because the arms “should be close” (`audits/2026-07-10/symmetry-gate-preregistration.md:64-66`). A positive 0.016 below that guard shows that the guard did not fire; it does not establish the absence of *any* hidden asymmetry. This should be phrased as “no large residual asymmetry under the pre-set guard,” not as an absence finding.

These errors do not change the stored NO-GO calculation, but they defeat the remediation's purpose: the manuscript's new methods block is not self-contained and correct until it matches the frozen pre-registration and live script.

### MAJOR — The Spanish outreach summaries conflate the uncalibrated gate with the earlier audit-parameterized apparatus

The executive summary still calls 0.05 an a-priori “**umbral de materialidad**” at `drafts/paper-resumen-ejecutivo.es.md:25`. It then describes the stylized simulation as “**parametrizado por auditorías**” at `drafts/paper-resumen-ejecutivo.es.md:39`; the plain-language companion repeats that description at `drafts/paper-lectura-simple.es.md:37`. In context, both passages are summarizing the small selection advantage from the governing symmetry gate, not merely the retired E7 baseline.

Those descriptions contradict the governing manuscript and contract. The paper says the gate's value and credit scores are abstract and unmeasured and that 0.05 is a research-program rebuild threshold, “**not a calibrated policy-materiality threshold**” (`drafts/paper.md:553-559`). The contract likewise says the generating distribution is uncalibrated (`research/claim-and-estimand-contract.md:46-55`) and labels 0.05 a rebuild rule rather than policy materiality (`research/claim-and-estimand-contract.md:63-69`). “Audit-parameterized” applies only to the superseded E7 status-quo apparatus, not the governing selection gate. Because these are public-facing summaries, the conflation materially recreates the provenance problem the remediation was meant to remove.

### MAJOR — The newly reconciled roadmap still presents a stale and internally contradictory “single current state”

The remediation roadmap labels its banner the “**single current state**” and says “**ROUND-3 audit in progress**” at `audits/2026-07-10/remediation-roadmap.md:3-4`, even though the next line says that audit “**ran and returned NOT READY**” (`audits/2026-07-10/remediation-roadmap.md:5`). It also keeps removal/regeneration of the stale outreach PDF as an unmet deposit condition at `audits/2026-07-10/remediation-roadmap.md:9-10`, while the same file records the PDF as **removed** at `audits/2026-07-10/remediation-roadmap.md:130-133`.

The public roadmap repeats both stale conditions: `docs/03_ROADMAP.md:19-23` and `docs/03_ROADMAP.md:39-42` say the round-3 audit is still in progress and deposit remains blocked until the already-removed PDF is “regenerated or removed.” This is a regression in the batch intended to establish one current roadmap state. It should describe round-3 as completed, round-4 as the current audit, and treat removal of the stale PDF as satisfied; any optional future re-render should not remain an unresolved deposit gate.

### MINOR — The new outcome-measure caveat ends in an unresolvable section reference

The remediation-added limitation ends “**outside it (§ estimand contract)**” at `drafts/paper.md:1244-1246`; the Spanish mirror ends “**fuera (§ contrato de estimando)**” at `drafts/paper.es.md:1327-1329`. Neither manuscript contains a section with that name. The intended target is the external controlling file `research/claim-and-estimand-contract.md`, so this should be an explicit link rather than a `§` reference. This is non-blocking by itself, but it is a real cross-reference regression in a newly added, load-bearing scope caveat.

### MINOR — Release guidance overstates the MIT condition as universal attribution

`RELEASING.md:19-23` correctly names the mixed CC BY/MIT split but then says “**Attribution is required for everything**.” The controlling license distinguishes the obligations: CC BY attribution for text, but retention of the copyright-and-permission notice for code (`LICENSE.md:5`; `LICENSE.md:27-30`). `README.md:39` states the same distinction. The release guide should use that precise wording rather than recast MIT notice retention as a universal CC-style attribution requirement.

## Useful verified non-findings

- **No EN/ES numerical or caveat desynchronization was found in the newly added gate and “What survives” passages.** The gate errors above are mirrored rather than language-specific. “What survives” carries the same median 0.025, 0.05 rebuild gate, retired ratio list, and future delivered-value estimand in English (`drafts/paper.md:1037-1045`) and Spanish (`drafts/paper.es.md:1119-1128`).
- **No mechanical link regression was found.** `npm run check-anchors` reports `broken=0`, `drifted=0`, `dead-paths=0`, and `dead-wikilinks=0` against the current tree.
- **No unsupported-citation regression was found in the new mechanism bridge.** The sentence uses Mayhew for electoral credit-claiming and Arnold for traceability, while explicitly labeling λ posited rather than measured (`drafts/paper.md:581-584`; Spanish `drafts/paper.es.md:634-637`); both bibliography entries are present in English (`drafts/paper.md:1428`; `drafts/paper.md:1472`) and Spanish (`drafts/paper.es.md:1513`; `drafts/paper.es.md:1557`).
