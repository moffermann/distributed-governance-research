# High-value improvement recommendations

**Date:** 2026-07-10 — **Round 2**

The two transformative moves are to finish the Path-B manuscript pivot and to replace simulated magnitude claims with a staged empirical program that separately identifies selection and delivery. The small symmetry-gate result can be publishable and useful if presented as a successful falsification of the former headline and a narrow mechanism demonstration—not as a diminished policy effect. Engineering credibility can rise quickly through a one-command reproduction target, regression tests, machine-readable provenance, and a genuinely symmetric modular engine. The best immediate return is therefore: rewrite the paper's first and last impressions, test a stronger central comparator, and package the surviving result as a self-verifying artifact before depositing v1.13.

## Errors found while reviewing

### Major

1. **Public-facing Spanish summaries still assert the retired multiplier and participation claims.** The executive summary says the architecture delivers “entre dos y tres veces más” and “2 y 2.7 veces más,” and says it works better when participation is low (`drafts/paper-resumen-ejecutivo.es.md:9,23-29`). The plain-language version repeats “2 a 3 veces” and “2 a 2.7 veces” (`drafts/paper-lectura-simple.es.md:7,26-32`). These directly conflict with the controlling retirement of the calibrated multiplier (`research/claim-and-estimand-contract.md:70-80`). The executive summary also cites `10.5281/zenodo.21246089` (`drafts/paper-resumen-ejecutivo.es.md:5,50-51`), while the current paper identifies the companion concept DOI as `10.5281/zenodo.21246088` (`drafts/paper.md:1467`). Do not circulate either summary until rewritten.

2. **The paper's Path-B pivot remains incomplete.** The abstract still announces three principal results—about 1.8× selection, about 10× capture resistance, and about 43% delivery (`drafts/paper.md:29-69`)—and the conclusion again answers the paper with +43% delivery and +53–54% selection (`drafts/paper.md:1339-1355`). The controlling contract instead permits a bounded architecture plus a small selection-mechanism demonstration and says delivery is a future, separately identified estimand “not claimed here” (`research/claim-and-estimand-contract.md:21-22,38-44,82-90`). Model-internal caveats do not cure the headline hierarchy.

3. **“Adversarial Validation” in the title overstates the method.** The title uses that phrase (`drafts/paper.md:1`), while the paper calls the process “structured self-critique, not external validation” and discloses that it is one team's AI-assisted review without a pilot (`drafts/paper.md:203-210,1240-1250`). “Structured adversarial development” or “failure-mode stress-testing” would be accurate.

4. **The release procedure prescribes a persistent token file.** `RELEASING.md:31` instructs release tooling to use `_backups/zenodo-token.txt`. Whether that file is protected by adequate OS access controls is **unverified**; the documented pattern itself is an avoidable release-account risk. Move the credential to an environment variable, OS credential store, or protected CI secret and rotate the existing token.

5. **The active reviewer cover is stale.** It tells reviewers to read v1.10 and calls `10.5281/zenodo.21246089` the companion concept DOI (`external-review/SENDING_COVER_v1.10.md:1-8`), while the repository says the working draft is v1.13 (`README.md:29-33`) and the paper gives the companion concept DOI as `21246088` (`drafts/paper.md:1467`). This is a dissemination-control error, not archival harmlessness, because the file calls itself the current superseding cover.

### Minor

1. **The gate's verdict gloss says the advantage “does not survive,” although directionality passed 18/18 cells and only the 0.05 rebuild threshold failed** (`audits/2026-07-10/symmetry-gate-results.txt:82-90`; generated at `scripts/simulation/e5-sp-symmetry-gate.mjs:155-163`). Replace it with “direction survives, but the effect misses the pre-registered quantitative-rebuild threshold.”

2. **The central appraisal budget is approximately, not exactly, matched.** The code uses `K × round(expReports/K)` with a one-observation-per-project floor (`scripts/simulation/e5-sp-symmetry-gate.mjs:70-78`), whereas the design describes the expected distributed report total as the central budget (`audits/2026-07-10/symmetry-gate-preregistration.md:29-31`). The numerical effect is **unverified**; exact integer apportionment should remove the discrepancy in the new engine.

## Highest-ROI next moves

1. **Complete recommendation 1:** one focused editorial pass can remove the largest publication blocker.
2. **Run recommendation 4:** a 2–4 day stronger-comparator test can reveal whether the surviving mechanism is robust to a competent adaptive central allocator.
3. **Complete recommendation 3:** a 2–4 day canonical reproduction/test package makes every later claim easier to trust and review.

Before any public sharing, also execute recommendation 9's stale-summary and reviewer-cover repair. The empirical program in recommendation 2 has the highest ultimate value, but not the fastest return.

## Prioritized recommendations

### 1. Complete the Path-B rewrite around one bounded architecture-and-mechanism claim

**One-line improvement:** Rewrite the title, abstract, contribution list, novelty statement, Section 6 opening, limitations, and conclusion so the paper leads with Core v0 as a bounded reference architecture and the gate as a small, failed-materiality mechanism test.

**Why it matters:** The paper already contains the defensible claim almost verbatim in the contract: a concrete architecture for a bounded public-resource domain, with a positive but small matched-budget selection mechanism (`research/claim-and-estimand-contract.md:82-90`). That claim currently competes with the abstract's 1.8×/10×/43% triad (`drafts/paper.md:29-86`), the novelty section's “substantive” end-to-end result (`drafts/paper.md:349-384`), and the conclusion's +43%/+53–54% answers (`drafts/paper.md:1339-1355`). Lead instead with the NO-GO decision, then the 18/18 directional result, then the inference boundary; move retired apparatus magnitudes to a clearly marked historical appendix or companion.

**Effort:** 2–4 focused days, plus bilingual mirroring.

**VALUE SCORE: 10/10 — transformative because it resolves the manuscript's main credibility and publication contradiction.**

**Touches:** `drafts/paper.md`, `drafts/paper.es.md`, `docs/101_CORE_V0_MINIMAL_PUBLISHABLE_MODEL.md`.

### 2. Pre-register a staged empirical program that identifies selection and delivery separately

**One-line improvement:** Start with a multi-site, portfolio-level randomized or randomized-encouragement selection study, then add a separate selection × delivery factorial only after the delivery intervention is operationally stable.

**Why it matters:** The contract makes selection the tested estimand and reserves delivery for a separately identified future model (`research/claim-and-estimand-contract.md:7-22,38-44`); the paper admits no pilot has run and currently proposes one municipality (`drafts/paper.md:1240-1250`). A credible design should use the same eligible candidate pool and budget, cluster assignment by municipality/domain × cycle, blinded outcome assessment, common ex-post value measures, pre-specified missingness and spillover rules, and a simulation-based power analysis after a shadow cycle. Because the simulated contrast is small (`research/claim-and-estimand-contract.md:61-68`), a single-municipality sports pilot should be called feasibility work, not confirmatory evidence.

**Effort:** 4–8 weeks for partnerships, protocol, measurement plan, and statistical analysis plan; 12–24 months for credible outcomes.

**VALUE SCORE: 10/10 — transformative because it is the path from an architecture proposal to an estimated real-world effect.**

**Touches:** a new empirical protocol/SAP, `research/claim-and-estimand-contract.md`, `drafts/paper.md`.

### 3. Ship a one-command, self-verifying reproduction package with CI

**One-line improvement:** Add a canonical command that runs the gate and clustered diagnostics, emits temporary artifacts, verifies decision quantities and hashes, and is exercised by regression/property tests in CI.

**Why it matters:** `package.json` exposes only anchor checking and fixing (`package.json:6-12`); the current gate prints console tables (`scripts/simulation/e5-sp-symmetry-gate.mjs:119-164`) and the honest interval lives in a separate post-hoc diagnostic (`audits/2026-07-10/symmetry-gate-diagnostics-notes.md:1-17`). Test PRNG golden vectors, decision-rule logic, denominators/non-finite values, exact budget matching, clustered resampling, parameter validation, and deterministic snapshots. Emit CSV/JSON with schema version, effective configuration, seeds, Node version, git commit, code/preregistration hashes, cell results, pooled statistics, and verdict.

**Effort:** 2–4 days.

**VALUE SCORE: 10/10 — the fastest substantial increase in reproducibility and protection against another sign, denominator, or artifact-drift failure.**

**Touches:** `package.json`, new tests/CI workflow, `README.md`, `research/README.md`, canonical result artifacts.

### 4. Test stronger central appraisal policies and isolate the credit-pressure increment

**One-line improvement:** Under the exact same observation budget, compare even, reach-proportional, uncertainty-adaptive/Neyman, and two-stage central appraisal, while decomposing the λ=0 routing gap from `Δ(λ) − Δ(0)`.

**Why it matters:** The current comparator spreads appraisal evenly (`scripts/simulation/e5-sp-symmetry-gate.mjs:77-90`). Post-hoc diagnostics show reach-proportional allocation sharply lowers central RMSE but explicitly do not test its portfolio-value effect (`audits/2026-07-10/symmetry-gate-diagnostics-notes.md:12-23`). The λ=0 negative control already favors distributed by 0.016 (`audits/2026-07-10/symmetry-gate-results.txt:90`), so the paper does not yet identify how much of the positive gap is credit pressure rather than routing. Freeze a held-out analysis before running it and report the slope/interactions, not a preferred point.

**Effort:** 2–4 days.

**VALUE SCORE: 9/10 — a cheap, potentially decisive falsification of the surviving causal story.**

**Touches:** a new frozen analysis specification and post-hoc/held-out result beside the gate artifacts.

### 5. Build one modular symmetric main engine while preserving the frozen gate as history

**One-line improvement:** Implement a pure, parameterized selection core with pluggable observation-routing and ranking policies, versioned configuration, exact budget apportionment, and named RNG streams.

**Why it matters:** World generation and analytical primitives are duplicated between the gate and diagnostics (`scripts/simulation/e5-sp-symmetry-gate.mjs:15-50`; `scripts/simulation/e5-sp-symmetry-gate-diagnostics.mjs:12-42`), while grids and parameters are hard-coded (`scripts/simulation/e5-sp-symmetry-gate.mjs:29-30,102-117`). That structure invites silent divergence and makes calibration awkward. Preserve the pre-registered executable and its hashes unchanged; validate the new engine against it, then use the new engine for future comparators and empirical configurations.

**Effort:** 1–2 weeks.

**VALUE SCORE: 9/10 — foundational for credible extensions without reopening the retired multiplier.**

**Touches:** new `scripts/simulation/selection-engine/`, tests, package commands, result schema.

### 6. Create a current construct map and calibration dataset for the honest engine

**One-line improvement:** Define an empirical data dictionary linking every model input and outcome to observable project, participant, appraisal, political-credit, and delivery variables.

**Why it matters:** The contract says project-value distributions, appraisal errors, sponsor–public-value alignment, and delivery effects remain unmeasured, and that `S` and `P` are abstract rather than Core-v0 constructs (`research/claim-and-estimand-contract.md:46-60`). The paper's appendix lists candidate proxies but concedes the central benchmark needs a construct bridge (`drafts/paper.md:1393-1411`). Minimum data should cover proposed and rejected projects, costs and maintenance liabilities, positive and negative affected-party valuations, reporting propensity by sign/magnitude/demographics, central appraisal errors by project reach/type, observed rankings, a defensible credit proxy, ex-post outcomes, and sector-specific opportunity cost. Hold out validation data so calibration does not chase the desired result.

**Effort:** 2–4 weeks for schema/access protocol; 2–6 months for an initial usable dataset.

**VALUE SCORE: 9/10 — necessary before any simulated magnitude can claim external validity.**

**Touches:** a new current calibration plan replacing the superseded E4 roadmap, paper appendix, engine configuration.

### 7. Complete a systematic prior-art review and publish a closest-work matrix

**One-line improvement:** Run a documented search across participatory budgeting, digital PB, civic vouchers, plural funding, fiscal decentralization, public-investment management, conditional disbursement, audit institutions, agenda setting, and civic-tech reference architectures.

**Why it matters:** The paper admits its literature map is preliminary while asserting that no prior work combines its elements (`drafts/paper.md:349-384`); the literature map itself says it is not a formal review and still lists “find papers” as the task (`research/literature-map.md:1-4,33-39`). Record databases, queries, dates, inclusion criteria, and an element-by-element comparison. Unless the search supports priority, claim integrative specificity rather than field-level novelty.

**Effort:** 1–2 weeks.

**VALUE SCORE: 9/10 — high publishability payoff because it turns an acknowledged novelty gap into a defensible contribution claim.**

**Touches:** `research/literature-map.md`, `drafts/paper.md`, supplementary comparison matrix.

### 8. Secure and verify the release pipeline

**One-line improvement:** Remove file-based secret handling, generate checksums from a clean tag, validate metadata/archive contents before upload, and verify the published Zenodo record against a manifest.

**Why it matters:** The current release cycle is manual and depends on a token file (`RELEASING.md:25-32`); the document also records that version drift has already recurred (`RELEASING.md:13-15`). Use protected secret storage, rotate the current token, validate CFF/Zenodo schemas and license fields, pin the Node LTS version, and record hashes for code, preregistration, outputs, and rendered papers.

**Effort:** 4–8 hours for credential rotation and checksums; 1–2 days for full validation automation.

**VALUE SCORE: 9/10 — high credibility and account-integrity return for modest effort.**

**Touches:** `RELEASING.md`, release scripts/workflow, `package.json`, artifact manifest.

### 9. Repair every outward-facing surface, then deposit a coherent v1.13

**One-line improvement:** After freezing the Path-B paper, replace the stale Spanish summaries and reviewer cover, sweep metadata/DOIs/claims, render and inspect bilingual outputs, then publish one verified v1.13 record.

**Why it matters:** Current outreach documents still advertise the retired 2–3× result (`drafts/paper-resumen-ejecutivo.es.md:9,23-29`; `drafts/paper-lectura-simple.es.md:7,26-32`) and the reviewer cover targets v1.10 (`external-review/SENDING_COVER_v1.10.md:1-8`). Meanwhile the authoritative status remains v1.13 working draft versus v1.12 deposited (`drafts/paper.md:3`). Releasing before the editorial pivot would merely make the present contradiction citable.

**Effort:** 1–2 days after recommendation 1.

**VALUE SCORE: 9/10 — prevents the project from publicly reasserting the exact claim it has responsibly withdrawn.**

**Touches:** both Spanish outreach files, reviewer cover/packets, `README.md`, `.zenodo.json`, `CITATION.cff`, renders and release record.

### 10. Reorganize the paper around an evidence hierarchy and an inspectable architecture

**One-line improvement:** Put the gate and its decision table first, move retired E1–E8 magnitudes to a supplement, and add two architecture diagrams plus a claim-to-object readiness matrix.

**Why it matters:** Section 6 lists E1–E8, states the governing gate, and then returns for hundreds of lines to exploratory apparatus findings (`drafts/paper.md:583-635,637-1048`). The architecture itself is compressed into prose while directing readers outward for the object model (`drafts/paper.md:386-463`). Add a system/context diagram, lifecycle/state diagram, and a matrix distinguishing “specified,” “formally analyzed,” “simulated,” “externally reviewed,” and “empirically tested.”

**Effort:** 4–7 days.

**VALUE SCORE: 8/10 — materially improves clarity and makes Path B visible rather than merely declared.**

**Touches:** Sections 4 and 6, technical supplement, figure assets.

### 11. Add adversarial tests that can reverse, not merely perturb, the result

**One-line improvement:** Stress strategic reporting, coordinated/common-mode bias, endogenous proposal supply, agenda exclusion, project complements/substitutes, fixed-central-capacity participation decay, and distributional harm.

**Why it matters:** Strategic reporting, endogenous proposals, project dependence, and broader equilibrium effects are explicitly absent (`research/claim-and-estimand-contract.md:46-56`). The participation diagnostic also says current `p` changes reduce both arms' information budgets and therefore cannot show resilience to disengagement (`audits/2026-07-10/symmetry-gate-diagnostics-notes.md:24-35`). Report territorial/group incidence, worst-decile value, harmful-project shares, both arms' regret, budget use, portfolio overlap, and sign changes—not another preferred multiplier.

**Effort:** 2–4 weeks.

**VALUE SCORE: 8/10 — exposes the failure conditions policymakers and reviewers will care about most.**

**Touches:** canonical engine, a new adversarial preregistration, contract and paper evidence section.

### 12. Obtain independent expert attack before presenting self-review as validation

**One-line improvement:** Commission structured reviews from a public-administration scholar, participatory-budgeting practitioner, public procurement/audit specialist, causal-inference methodologist, and municipal legal/operations lead.

**Why it matters:** The paper accurately admits that the adversarial corpus is one team's AI-assisted self-critique and names independent attack as missing (`drafts/paper.md:1240-1250`). Give reviewers the estimand contract, architecture diagrams, gate artifact, and a response matrix; publish disagreements and unresolved issues. This is more valuable than another internally generated attack round.

**Effort:** 2–6 weeks of coordination and revision; reviewer time external.

**VALUE SCORE: 8/10 — changes the epistemic status of the architecture review, though it cannot substitute for field evidence.**

**Touches:** new v1.13 reviewer packet/cover, external-review log, manuscript limitations.

### 13. Choose a venue consistent with the evidence stage

**One-line improvement:** Target a digital-governance architecture venue now; reserve top public-administration empirical venues for the pilot paper.

**Why it matters:** With no pilot and preliminary prior art (`drafts/paper.md:349-384,1240-1250`), the present manuscript is a poor fit for venues demanding the strongest theoretical or empirical contribution. After recommendations 1, 7, and 10, **Government Information Quarterly** is the best initial fit because its official scope includes significant theoretical/practical contributions at the government–technology–public intersection, transparent/accountable government, and participatory decision-making ([official scope](https://www.sciencedirect.com/journal/government-information-quarterly)). **Policy & Internet** is a plausible alternative if the paper emphasizes how digital infrastructure reshapes participation, power, and governance ([official scope](https://onlinelibrary.wiley.com/page/journal/19442866/homepage/productinformation.html)). A later causal pilot could credibly aim at **JPART**, whose stated standard is the highest-quality theoretical and empirical public-administration work ([official journal page](https://academic.oup.com/jpart)).

**Effort:** 1–2 days for a venue matrix and venue-specific abstract/cover letter after the paper is stable.

**VALUE SCORE: 7/10 — meaningful reach payoff, but venue selection cannot repair weak positioning or missing evidence.**

### 14. Publish a bilingual policy brief and honest companion explainer

**One-line improvement:** Create a two-page policy brief for municipal decision-makers and an 800–1,200-word public explainer that lead with the bounded pilot proposition and the failed quantitative gate.

**Why it matters:** The current Spanish summaries are concise but scientifically obsolete (`drafts/paper-resumen-ejecutivo.es.md:7-41`; `drafts/paper-lectura-simple.es.md:5-37`). The replacement should answer: what Core v0 changes, what remains central, what the gate found, what it did not estimate, what a feasibility pilot would measure, and what would stop expansion. Include a one-page system diagram and a “known / unknown / next test” box; omit all retired multipliers.

**Effort:** 2–4 days after recommendation 1.

**VALUE SCORE: 7/10 — strong reach and pilot-recruitment value once the scientific framing is stable.**

**Touches:** replace both stale Spanish summaries; add matched English versions and pilot-partner handout.

### 15. Add automated bilingual parity and archive separation

**One-line improvement:** Check EN/ES versions, headings, numeric tokens, DOI/status strings, claim labels, and links in CI, and physically separate current evidence from historical/retired artifacts.

**Why it matters:** The manifest must currently explain that many colocated research files are historical (`research/README.md:23-35`), and the paper's large synchronized rewrite will create fresh regression risk. Keep immutable redirects/manifests so old citations remain resolvable; human review is still required for modality and scope.

**Effort:** 1–2 days.

**VALUE SCORE: 6/10 — useful maintenance insurance, but secondary to the argument, evidence, and canonical engine.**

**Nice-to-have:** yes; do after recommendations 1–12.

## Bottom line

Do not spend the next month polishing the retired engine or adding more conditional multipliers. First make the paper say one defensible thing, then try to falsify that thing with a stronger central comparator and a reproducible canonical artifact. In parallel, build the partnerships and construct map required for the empirical study; that is the only route to a credible claim about real delivered public value.
