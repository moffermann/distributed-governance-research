# Paper v1.9 Change Queue — APPLIED

**Status (2026-07-07): applied in v1.9 by author decision** ("registremos todo en el paper maestro… vamos consolidando"). Q1 (extended with the F-3 cascade-coverage dividend), Q2, Q5, and Q6 (extended with the measured panel, evidence-richness, and contraposition) landed in both language versions citing the satellite DOI (10.5281/zenodo.21246089); Q3 satisfied via the docs/110 vocabulary used in the new §9 text; Q4 (title rename) remains venue-gated by its own terms. The former zero-growth constraint was replaced by the consolidation strategy; net growth ≈ 2 pages.

## Original purpose and standing author decision (2026-07-06, superseded)

This file holds manuscript changes that are **drafted and ready but deliberately not applied**. The author's standing decision: the paper must not keep growing — the queued items add robustness, not thesis value, and the strategy under evaluation is to produce further satellite papers that *absorb* content so the master can *cite* instead of contain, shrinking rather than lengthening.

**Apply when one of these moments arrives (author's call):**

1. venue submission (page limits force the editorial decisions anyway);
2. a satellite paper reaches a citable DOI, so a queued item can enter as one sentence plus a reference instead of a paragraph;
3. an explicit author go for a v1.9.

When applied: every item lands in `drafts/paper.md` AND its Spanish mirror, then PDFs/HTMLs, GitHub release, and a Zenodo new-version deposit ride along (established flow; depid in `_backups/zenodo-depid.txt`).

## Queued items

### Q1 — Complements-not-substitutes warning (docs/111)

**Anchor:** Section 5 (formal analysis), immediately after the paragraph deriving the incentive-compatibility condition of Propositions 1–2; alternatively the end of Finding 7's block.

**Ready text (EN):**

> The deterrence terms of this condition are complements, not substitutes. A pre-registered ablation program on the companion experiments (the distributed-governance-experiments repository) measured the consequence: at the designed operating point the inequality holds with slack, so removing any single term costs almost nothing — and a deployment negotiated one defensible concession at a time can cross the threshold invisibly, ending below the status quo it replaced (0.87× verified value with selection quality intact) while looking fully instrumented. The corpus therefore requires every scope to publish its deterrence-inequality margin in its operating configuration, recomputed on every term change, with term reductions classified as material rule changes (docs/111).

**Notes:** ~6 lines net growth; candidate to compress to 2–3 lines plus a citation once the satellite paper carrying the ablation is citable.

### Q2 — The semi-open transition path

**Anchor:** Section 9 (implementation pathway), where gradual deployment is discussed.

**Ready text (EN):**

> The transition between regimes is itself measured. The companion experiments quantify the semi-open regime of the operating-regime ladder (docs/110) — a bounded mandated envelope running on protocol autopilot beside the authority's traditional budget — as a fiscal blend: above a portfolio-granularity floor of roughly ten percent, blended verified value rises monotonically and near-linearly with the envelope share, from break-even near eight to ten percent through 1.5× at half the budget to the full architecture's 2.2× at one hundred percent. The transition from the status quo toward the open regime is a dial, not a leap: adoption can proceed in increments, and every increment pays.

**Notes:** ~7 lines; the natural candidate to become one sentence plus a satellite citation.

### Q3 — Operating-regime vocabulary alignment (light touch)

**Anchor:** wherever Section 4/9 names the operating modes.

**Change:** align mode mentions to the docs/110 canonical vocabulary (tutored regime with mandated agenda / tutored regime with distributed agenda / semi-open regime / open regime) where the current prose says only "closed, tutored, open". Verified 2026-07-06: the paper's *framing* is already correct (centralization attributed to transition modes, not the architecture); this is nomenclature polish only, near-zero growth.

### Q5 — The budget-release rule and the verification ceiling (Experiment E)

**Anchor:** Section 9 (implementation pathway), near the deployment-configuration discussion; pairs with Q1's docs/111 warning.

**Ready text (EN):**

> The companion experiments also measured a variable the corpus had left unregulated: when the authority releases budget into the allocation machinery. The result is a deployment rule: meter release against a work-in-progress ceiling calibrated to the delivery-and-verification pipeline's throughput and cycle time — never against the calendar. Calendar release freezes months of budget in escrow and saturates verification; and when verification capacity is scarce, no release policy compensates — verification capacity is the pipeline's ceiling before it is the anti-fraud instrument.

**Notes:** ~5 lines; compresses to one sentence + citation once the satellite is citable.

### Q6 — AI-assisted verification and the second-instance human layer

**Anchor:** wherever the AI tutor is presented (the citizen-side cost reduction), as its control-side counterpart; alternatively Section 8 future work.

**Ready text (EN):**

> The same technological premise that lowers participation costs on the citizen side applies to the control side: machine verification of protocolizable evidence classes multiplies fiscalization capacity, with humans as the mandatory second instance — sampled re-verification with a published floor, auditing the verifier rather than competing with it — so that the machine's error rate remains measured and the human control profession remains funded from the control budget it relieves.

**Notes:** ~4 lines. The underlying corpus design (verifier-displacement problem, second-instance frontier) lives in the master's verification-throughput note and travels through the pipeline separately; the paper mention stays one breath.

### Q4 — Standing item: title rename at venue submission

"Adversarial Validation" → "Adversarial Review" in the title, flagged since the v1.7 revision (the body already says "adversarial review as method"). Venue-submission decision.

## Explicitly NOT queued for the master (satellite material)

These belong to the satellite papers; the master will at most cite them once they are citable:

- Experiment C (architecture ranking invariant under behaviorally generated populations; no-default participation collapses to zero) — satellite A–D paper.
- The behavioral adoption model, LLM calibration methodology, and panels — satellite A–D paper.
- The full ablation and sensitivity program (beyond Q1's one-paragraph consequence) — satellite A–D paper.
- The planning-vector construction results — satellite A–D paper.
- The full regime-ladder mechanism design (semi-open envelope objects, tutored-distributed conflict admissibility) — the agenda-setting study.

## Shrink candidates (for the same editorial moment)

When a satellite DOI exists, these master sections can compress via reference: Finding 7's E7b bias-sweep detail (cite the satellite's coordinated-signal results), parts of Finding 4's constructor comparisons, and the E8 paragraph itself (added in v1.8) if the satellite absorbs the behavioral bridge. Net goal for v1.9: **zero growth or negative**.
