# Round-3 audit — External-facing surfaces

## Verdict

**No — not publication-ready on this dimension.** The current Markdown metadata has largely adopted Path B, but the repository still ships an unbannered Spanish PDF that makes the withdrawn 2–3×/2–5× claim, and the live concept DOI still resolves to stale Zenodo metadata that presents E7/E8 as recalibrating and confirming the delivered-value headline. The active reviewer packets, the public companion, the Spanish outreach Markdown, the mixed-license deposit metadata, and the preferred citation also retain material pre-Path-B defects.

## Findings

### 1. Critical — the shipped Spanish executive-summary PDF still advertises the withdrawn multiplier as the result

**Locator:** `drafts/paper-resumen-ejecutivo.es.pdf:p.1` (opening claim and companion DOI), `drafts/paper-resumen-ejecutivo.es.pdf:p.2` (first three findings), `drafts/paper-resumen-ejecutivo.es.pdf:p.3` (conclusion and bibliography). PDFs have no source-line addressing, so these are exact page locators; the stale artifact is also explicitly acknowledged at `audits/2026-07-10/remediation-roadmap.md:129-132`.

**What is wrong:** The PDF is not a render of the corrected Markdown now at `drafts/paper-resumen-ejecutivo.es.md:9,25-29`. Visual review and independent text extraction both show that the PDF still says:

- p.1: “entrega entre dos y tres veces más que el sistema actual” and cites companion DOI `10.5281/zenodo.21246089`;
- p.2: “entre 2 y 2.7 veces más”, “Funciona mejor ... cuando participa poca gente”, and a planning advantage that grows “de ~2× ... a más de 5×”;
- p.3: “Este trabajo responde que sí, y lo cuantifica” and again cites `21246089` rather than the companion concept DOI `21246088`.

This is the exact public reassertion the Path-B decision withdrew (`research/claim-and-estimand-contract.md:70-80`). Unlike historical review records, the PDF has no supersession banner and is named as a current outreach deliverable.

**Why it matters:** A reader can download or send this binary without ever seeing the corrected `.md`. It turns the retired effect into the project's most legible public claim and makes the external DOI trail point to the superseded v0.4 companion record.

**Concrete fix:** Regenerate the PDF from the corrected Path-B Markdown and visually/textually verify every page, or remove the binary from the release until it is regenerated. The replacement must say that the gate is selection-only, conditional on a stylized uncalibrated model, positive in 18/18 cells but small, and must cite `10.5281/zenodo.21246088` (or the intended exact current companion version) consistently.

### 2. Major — the live Zenodo record still publicly reasserts the retired headline and stale license/count metadata

**Locator:** `README.md:37`; `docs/03_ROADMAP.md:17-21,39,63`; external record `https://zenodo.org/api/records/21252911` (also returned by concept record `21193846`), read-only verified 2026-07-10.

**What is wrong:** `README.md:37` tells readers the live v1.12 record's only named metadata defect is that its title says “v1.8”. The live API record has several more consequential defects:

- its description says E7 “recalibrat[es] the delivered-value headline” and E8 “confirm[s] it”, with no Path-B retirement;
- it reports **forty** attack briefs across **four** rounds, rather than 43 across five;
- `related_identifiers` points to exact companion v0.4 DOI `10.5281/zenodo.21246089`, not the companion concept DOI `21246088` or current version;
- its notes still say the manuscript/reviewer packets are `CC BY-NC-ND 4.0 pending publication venue`, contradicting the final CC BY decision in `LICENSE.md:5-11`;
- its title says working paper v1.8 while its version field is 1.12.

The roadmap calls the remaining v1.13 deposit a “mechanical author step” (`docs/03_ROADMAP.md:21,39`), but the live public metadata currently tells the withdrawn substantive story. Zenodo permits published metadata to be edited without changing files or DOI.

**Why it matters:** `10.5281/zenodo.21193846` is the concept DOI promoted by the paper, README, CFF, companion, and outreach summary. Until a corrected version is deposited—or the existing record metadata is unmistakably marked superseded—the repository's canonical public identifier contradicts its controlling claim and license state.

**Concrete fix:** Edit the live record now to add a prominent Path-B correction and correct title/count/license/related-identifier metadata, then publish the v1.13 files as a new version. After publication, query both the version DOI and concept DOI through the API and block release unless title, version, description, rights, notes, relations, and file inventory match the frozen release manifest.

### 3. Major — the public companion confuses the pre-registered primary statistic with a post-hoc statistic

**Locator:** `docs/101_CORE_V0_MINIMAL_PUBLISHABLE_MODEL.md:5-12,785-793`; controlling values at `research/claim-and-estimand-contract.md:58-68`.

**What is wrong:** The correction banner says the result is “a pooled ~0.026 ... below its 0.05 materiality gate” (`docs/101...:8-9`), and the computational section repeats “a pooled ~0.026 ... below its 0.05 materiality gate” (`docs/101...:789-790`). The controlling contract keeps two estimators distinct: the **pre-registered pooled median is ~0.025 and is the statistic judged against the 0.05 gate**, while **0.026 [0.023, 0.029] is a post-hoc world-cluster ratio-of-sums plus Monte Carlo interval** (`research/claim-and-estimand-contract.md:62-66`).

**Why it matters:** This makes a post-hoc estimator appear to be the pre-registered gate statistic on the deposit metadata's designated “accessible companion” (`.zenodo.json:5`). It compromises the project's strongest confirmatory-discipline claim precisely where a nontechnical reader is sent.

**Concrete fix:** In both locations, state separately: “pre-registered pooled median Δ = 0.025, below the pre-registered 0.05 research-rebuild gate; post-hoc pooled ratio-of-sums Δ = 0.026, world-cluster Monte Carlo interval [0.023, 0.029].” Also say the 0.05 threshold is a research-rebuild threshold, not a policy-materiality threshold.

### 4. Major — the public companion still claims participation-resilience that the current test expressly cannot establish

**Locator:** `docs/101_CORE_V0_MINIMAL_PUBLISHABLE_MODEL.md:738-742,773-782,928-935`; controlling prohibition at `research/claim-and-estimand-contract.md:82-90` and `audits/2026-07-10/symmetry-gate-diagnostics-notes.md:24-35`.

**What is wrong:** The companion says “The simulation evidence below shows the design does not depend on citizens becoming full-time evaluators” (`:740-742`), calls participation decay “survivable” (`:777-778`), and answers “Does the model depend on high citizen attention? No” (`:934`). The current diagnostic says the opposite inference is unavailable: reducing participation also reduces the matched central information budget, so the result demonstrates the value of endogenous observation allocation under scarce **shared** bandwidth, “not resilience to participation decay” (`research/claim-and-estimand-contract.md:87-90`). A genuine decay diagnostic must hold central appraisal capacity fixed and has not been run (`audits/2026-07-10/symmetry-gate-diagnostics-notes.md:24-35`).

**Why it matters:** This is a reader-facing institutional-performance claim that survives from the older apparatus despite the explicit controlling caveat. It invites exactly the “works better with low participation” interpretation removed from the two Markdown outreach summaries.

**Concrete fix:** Remove all three resilience answers or label them explicitly as historical, conditional outputs of the earlier apparatus that the symmetry gate does not confirm. Replace them with the matched-budget coupling caveat and identify the fixed-central-capacity participation diagnostic as future work.

### 5. Major — there is no current, sendable reviewer packet; every active packet targets v1.8 and repeats the retired preregistration framing

**Locator:**

- source/index: `external-review/Reviewers/README.md:35-45`, `external-review/reviewer-briefs-v0.md:14`, `external-review/core-v0-review-packet.md:21`;
- Academic: `external-review/Reviewers/Academic/review-packet.md:46`, `external-review/Reviewers/Academic/review-packet.es.md:46`;
- Systems Architect: `external-review/Reviewers/Systems-Architect/review-packet.md:61`, `external-review/Reviewers/Systems-Architect/review-packet.es.md:61`;
- Public-Sector Practitioner: `external-review/Reviewers/Public-Sector-Practitioner/review-packet.md:48`, `external-review/Reviewers/Public-Sector-Practitioner/review-packet.es.md:48`;
- Public Law: `external-review/Reviewers/Public-Law/review-packet.md:46`, `external-review/Reviewers/Public-Law/review-packet.es.md:46`;
- Non-Expert Reader: `external-review/Reviewers/Non-Expert-Reader/review-packet.md:61`, `external-review/Reviewers/Non-Expert-Reader/review-packet.es.md:61`;
- superseded cover and roadmap status: `external-review/SENDING_COVER_v1.10.md:1-10`, `docs/03_ROADMAP.md:62`.

**What is wrong:** Every profile packet calls the current path `drafts/paper.md` “v1.8” and describes the old “eight experiments, six pre-registered” story; the Academic English packet instead says seven/five while its Spanish mirror says eight/six. The contract retires the “pre-registered 7/7” family of claims and says the symmetry gate is the one genuinely pre-registered test (`research/claim-and-estimand-contract.md:79-80`). The former v1.10 cover is correctly bannered “DO NOT SEND AS-IS”, but no v1.13 Path-B cover replaces it. The historical `external-review/manuscript-v1.6-round/` files are acceptably dated/raw; these unbannered send packets are not historical records.

**Why it matters:** Sending any currently designated packet gives a reviewer a false version, a false evidence hierarchy, and—in the Academic pair—different facts by language. The roadmap's “packets prepared” status is therefore materially misleading: packets exist, but none is publication-current.

**Concrete fix:** Update the two source packets first, regenerate or mechanically synchronize all ten profile packets, and add a v1.13 cover. Each must identify v1.13 as the current working draft, v1.12 as the latest deposit until superseded, describe the symmetry gate as the one genuinely pre-registered confirmatory test, state its NO-GO/0.025 result and model limits, and remove any current multiplier hierarchy. Run an EN/ES number/version/DOI parity check before marking them sendable.

### 6. Major — the corrected Spanish Markdown summaries still convert conditional simulation outputs into real-system claims

**Locator:** `drafts/paper-resumen-ejecutivo.es.md:9,25,31-39`; `drafts/paper-lectura-simple.es.md:7,24,28-37`; controlling scope at `research/claim-and-estimand-contract.md:46-68`.

**What is wrong:** Both summaries now say the large multiplier was retired, but they still call the small advantage simply “real” (`paper-resumen...:9,25`; `paper-lectura...:7,28`) without the adjacent selection-only, delivery-at-parity, uncalibrated-stylized-model scope. The executive summary concludes that the architecture was “medida contra el sistema real” (`paper-resumen...:39`); the simple version says “medida contra el sistema real en simulación” (`paper-lectura...:37`). Both repeat older apparatus conclusions as current institutional facts—“cada incremento paga” (`paper-resumen...:33`; `paper-lectura...:32`)—without labeling them conditional model-internal outputs. The executive version additionally promises near-zero-cost AI verification and that a neighbor monitors “mejor, y gratis, que cualquier inspector” (`paper-resumen...:35`) without evidence or qualification.

The contract instead says values, appraisal errors, the project distribution, and units are uncalibrated; the simulation is a stylized selection mechanism, not a validated Core v0 implementation; and no delivery effect is identified (`research/claim-and-estimand-contract.md:46-61`).

**Why it matters:** These are the surfaces most likely to reach policymakers and nontechnical readers. Retiring the numeral while preserving “measured against the real system” leaves the same empirical impression in prose.

**Concrete fix:** Put the full caveat at the first gate mention in each summary: conditional stylized-model selection output, fixed pool/budget, delivery at parity, uncalibrated units, not a Core v0 validation, with 0.05 identified as a research-rebuild threshold. Replace “medida contra el sistema real” with “contrastada dentro de un mundo simulado estilizado”, and either remove the adoption/AI apparatus claims or label them locally as exploratory model-internal propositions requiring pilot measurement.

### 7. Major — the prepared single-record Zenodo metadata cannot express the repository's mixed license as written

**Locator:** `.zenodo.json:5,11,23`; `LICENSE.md:5-15`.

**What is wrong:** The planned upload explicitly contains the manuscript, corpus, and code (`.zenodo.json:5`) and the notes assign text to CC BY and scripts to MIT (`:23`), but its only machine-readable field is `"license": "cc-by-4.0"` (`:11`). Zenodo's current official guidance says mixed uploads may and should declare all applicable licenses: `https://help.zenodo.org/docs/deposit/describe-records/licenses/`. The live v1.12 API record likewise exposes only CC BY in its machine license field, while its notes and embedded paper license differ.

**Why it matters:** The human-readable license is locally coherent, but repository/discovery clients will classify the code under CC BY rather than MIT. This fails the explicit “no stale external license metadata” gate and creates avoidable reuse ambiguity.

**Concrete fix:** If the legacy `.zenodo.json` format cannot encode multiple rights, treat it as insufficient rather than authoritative. Add both CC-BY-4.0 and MIT in the v1.13 Zenodo UI/API, keep `LICENSE.md` in the archive, and verify the unpublished draft and published record through the records API before release.

### 8. Major — the preferred/manual citation still uses the superseded “Adversarial Validation” title

**Locator:** current authoritative title at `drafts/paper.md:1`; stale titles at `CITATION.cff:13-21`, `LICENSE.md:41-45`, and `drafts/paper-resumen-ejecutivo.es.md:50`.

**What is wrong:** The current paper is titled “Mechanism Design, **Adversarial Stress-Testing, and a Symmetric Computational Test** ...” (`drafts/paper.md:1`). The CFF preferred citation and the manual license citation still say “Mechanism Design, **Adversarial Validation, and Computational Evidence** ...”; the Spanish executive reference uses an even older “Distributed Resource Governance ... with Adversarial Validation” title. “Validation” is not just editorial drift: the current paper expressly treats the internal review as stress-testing/self-critique rather than external validation.

`CITATION.cff:20-21` deliberately points its preferred citation to the exact v1.12 DOI while the top-level CFF declares v1.13, but the hybrid leaves users no correct ready-to-copy citation for the v1.13 manuscript.

**Why it matters:** This creates a stale bibliographic identity and publicly restores the methodological overclaim the title rewrite removed. Citation harvesters use `preferred-citation`, so the obsolete title will propagate automatically.

**Concrete fix:** At the v1.13 deposit, update `preferred-citation.title`, DOI, version/date, the manual `LICENSE.md` citation, and both outreach references to the final frozen v1.13 title and version DOI. Until that DOI exists, distinguish an exact v1.12 deposited citation from a separate v1.13 working-draft citation rather than mixing their title/version metadata.

## Surfaces that passed the targeted stale-value sweep

- `README.md:18,31` and `.zenodo.json:5,12` locally report 43 attacks/five rounds, v1.13 working state, Path B, and the conditional small gate result correctly; the live archive caveat in Finding 2 remains.
- `LICENSE.md:5-15` is internally coherent about CC BY for text and MIT for code; the defect is propagation into machine/deposited metadata.
- `docs/03_ROADMAP.md:16-21,29-39,59-65` correctly records Path B, 43/43, v1.13 working versus v1.12 deposited, and the final local license decision. Its “mechanical” characterization and reviewer status are not accurate enough given Findings 2, 5, 7, and 8.
- `external-review/manuscript-v1.6-round/` consistently identifies itself as a dated v1.6/raw review record, so its quotations of the then-current 2.19× claim are provenance rather than current endorsement. `external-review/SENDING_COVER_v1.10.md:1` also has an effective supersession warning; the problem is the absence of a replacement.

## Release-blocking order

1. Remove/regenerate the stale Spanish PDF.
2. Correct the live Zenodo metadata and publish a verified v1.13 record only after the package is frozen.
3. Correct the companion's statistic split and participation claims.
4. Produce a v1.13 reviewer packet set and cover.
5. Re-scope both Spanish Markdown summaries.
6. Verify mixed rights and synchronize the final citation title/DOI across CFF, license, outreach, and Zenodo.
