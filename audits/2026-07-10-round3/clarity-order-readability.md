# Clarity, order & readability

## Verdict

**Minor-only — publication-ready on this dimension after editorial improvements.** The paper's central architecture-and-mechanism argument is intelligible, and its governing quantitative caveat is stated plainly. No claim is unintelligible. The main readability cost is concentrated in Section 6: its 4,600-plus words have no navigable subsections, its experiment map does not give the governing symmetry gate a distinct place, and it makes readers encounter superseded ratios before their baselines have been explained.

## Findings

### 1. Minor — the experiment map does not expose the paper's governing test as a distinct experiment

- **Locator:** `drafts/paper.md:501-514` (experiment map); `drafts/paper.md:537-555` (governing symmetry gate); `drafts/paper.md:842-868` (the different, exploratory E5 delivery experiment).
- **What is wrong:** The section opens by saying that experiments “E1–E8” correspond to findings, and the table labels E5 as the selection-and-delivery experiment. The paper's one governing confirmatory result, however, is the separate `e5-sp-symmetry-gate.mjs` test described below the table; it has no row, finding number, or stable reader-facing label. “E5” therefore points to an exploratory delivery factorial while the decisive selection-only gate is visually unnumbered. The table compounds the taxonomy problem by leaving its third column header blank and mapping E8 only to “close of §6,” despite the preceding sentence saying each experiment corresponds to a finding.
- **Why it matters:** A reader scanning the table or table of contents cannot immediately identify which computation governs magnitude inference and which E5 is being discussed. That reverses the desired evidentiary hierarchy at the paper's most consequential qualification, even though the prose itself states the hierarchy correctly.
- **Concrete fix:** Divide the map into “governing confirmatory test” and “exploratory apparatus.” Give the symmetry gate a unique stable label (for example, **E5-SP symmetry gate**) and its own row above E1–E8, add an “Evidence status / result location” header, and label the old E5 explicitly as the “E5 delivery factorial (exploratory; magnitude superseded).” Either give E8 a Finding 8 or stop claiming a one-to-one experiment/finding correspondence.

### 2. Minor — Section 6 is too long and internally flat to navigate

- **Locator:** `drafts/paper.md:499-980`, especially the 184-line Finding 4 block at `drafts/paper.md:657-840`.
- **What is wrong:** Section 6 runs for roughly 4,600 words without a single Markdown subheading. Its main units are bold run-in labels (`Finding 1` through `Finding 7`) and italic run-in labels such as “A fair, symmetric re-examination,” “Capture-resistance,” “Analytical backbone,” “Positioning,” and “Calibration.” Finding 4 alone contains the original E4, two rebuilt models, three closed forms, positioning, calibration, qualifications, and several distinct estimands in one uninterrupted heading level.
- **Why it matters:** The paper's most technical and caveat-heavy section cannot be skimmed from the document outline, linked to at a useful granularity, or revisited efficiently. Readers must remember where each result sits inside a long block, which makes the careful distinction between exploratory results and the governing gate harder to retain.
- **Concrete fix:** Promote the run-in units to real `###`/`####` headings. A workable hierarchy would be: `6.1 Model and evidence-status map`, `6.2 Governing symmetric selection gate`, `6.3 E1–E3 attention and defaults`, `6.4 E4 knowledge, symmetric frontier, and capture`, `6.5 E5 delivery factorial`, `6.6 E6–E8 supplementary apparatus`, and `6.7 What survives`. Preserve the current caveats under their relevant result rather than moving them to a detached limitations list.

### 3. Minor — superseded ratios appear before the reader knows what their baselines mean

- **Locator:** `drafts/paper.md:530-535` (2.19×/2.22×/2.26× status note); definitions arrive only at `drafts/paper.md:842-868` (zero-control/E5), `drafts/paper.md:922-957` (audit-parameterized/E7), and `drafts/paper.md:964-978` (behavioral adoption/E8).
- **What is wrong:** Immediately after the model setup, the section presents three retired ratios keyed to “zero-control,” “audit-parameterized status quo,” and “behavioral adoption.” The first two baselines and the E8 adoption model are not explained until hundreds of lines later. The note correctly says the ratios are superseded, but it asks readers to process unfamiliar baselines and remember three numbers before they have any interpretive frame for them.
- **Why it matters:** The ordering gives the retired headline magnitudes early visual salience while postponing the information needed to understand why they are conditional. It also interrupts the cleaner path from model setup to the governing quantitative-status statement.
- **Concrete fix:** Keep the governing symmetry-gate status immediately after the setup. Move the three-ratio retrospective to a compact synthesis table after E8, where each baseline can be defined in one phrase and marked “exploratory / superseded for magnitude inference.” If historical traceability must remain near the top, replace the three numbers there with a one-sentence forward pointer to that table.

### 4. Minor — mathematical notation is overloaded and several symbols lack a local legend

- **Locator:** `drafts/paper.md:517-520` (θ as latent project quality and λ as a quality/need mixing weight); `drafts/paper.md:714-725` (θ reused as harm weight, with η and β); `drafts/paper.md:767-790` (S⁺, S⁻, λ*_C, λ*_D, k_c, k_d, p_c, p_d, f, C, q, and m).
- **What is wrong:** Within the same section, θ first means latent project quality and later means an institution's harm-weight coefficient; λ first means the mixing weight in `w = λθ + (1 − λ)u` and later means a capture/rent threshold. The analytical-backbone paragraph introduces a dense cluster of subscripted terms without a symbol table; in particular, the manuscript never locally defines the acquisition-cost terms `k_c` and `k_d`, while `S⁺` and `S⁻` are only inferable as positive and negative valuation totals. The notation is recoverable from context and companion notes, but not frictionless in the paper itself.
- **Why it matters:** Readers must continually disambiguate symbols while comparing related models. This creates avoidable cognitive load precisely where the text asks them to distinguish different denominators, estimands, and model generations.
- **Concrete fix:** Add a short notation table at the start of each model generation or one consolidated table before Finding 4. Reserve θ for latent quality; use a different symbol such as ω for harm weight and a non-λ symbol for the capture threshold. Define every analytical-backbone symbol in the manuscript on first use, even when the companion note supplies the derivation.

### 5. Minor — the abstract is longer and syntactically denser than its value-first structure needs

- **Locator:** `drafts/paper.md:9-15`, especially the 141-word sentence at `drafts/paper.md:13`.
- **What is wrong:** The abstract is approximately 339 words, and its evidence paragraph is a single 141-word sentence that carries the mechanism, test design, 43-attack review, 18-cell sign result, median statistic, threshold, retirement decision, and formal propositions. All of those elements are relevant, but placing them in one sentence makes the paper's primary contribution and its evidentiary status compete for working memory.
- **Why it matters:** The abstract is the paper's main discovery surface and may face venue or index length limits. Its current syntax makes the crucial “positive but small / NO-GO” result harder to absorb on first reading than the wording itself warrants.
- **Concrete fix:** Reduce the abstract to roughly 225–250 words and split the evidence paragraph into at least three sentences: qualitative mechanism; governing symmetry-gate result and retirement decision; architecture propositions/adversarial self-critique. Preserve `median Δ = 0.025`, the full-information-greedy denominator, the `0.05` pre-set threshold, and the no-pilot/uncalibrated limitations; move implementation-detail lists and the attack-round count to the body if necessary.

### 6. Nit — Section 6 ends on a legacy apparatus number rather than a reader-oriented synthesis

- **Locator:** `drafts/paper.md:964-980`.
- **What is wrong:** The last paragraph of Section 6 reports E8's superseded 2.26× and 2.15–2.9× outputs and its reproduced informed-share assumption; the document then moves directly to Section 7. There is no closing paragraph that restates which conclusions survive the governing NO-GO gate.
- **Why it matters:** Recency gives the retired ratios the last word in the computational section. A reader who skims beginnings and endings will miss the intended hierarchy even though it is correctly stated near the top.
- **Concrete fix:** Add a brief `What survives` close: (1) positive but small selection direction under the governing gate; (2) architecture and qualitative credit-versus-coverage mechanism as the load-bearing contribution; (3) delivery effects and all large ratios remain exploratory/model-internal; and (4) calibrated total-value effects require future work.

## Verification note

All locators above were re-read against the current working tree immediately before this report was finalized. Word counts are simple whitespace-delimited counts of the Markdown source and are used only to characterize editorial density.
