# Panel review — Neutral Editor (clarity & concision)

**Scope:** FORM-ONLY. No substance/findings changed. Mandate priority: (1) condense without
information loss; (2) clarity; (3) enable an honest BODY headline of the E4 *probable* scenario
with the FULL comparative analysis relocated to an appendix.

**Target:** `drafts/paper.md` §6 E4 block (L540–656), cross-checked against abstract (L13),
"What survives" (L1088–1102), the E4 appendix (L1469–1493), and `research/e4-paper-section-draft.md`.

---

## Headline diagnosis: the block is long because it says the same thing ~6 times

The E4 block is ~116 lines. Two structural problems, both fixable by relocation + tightening, not deletion:

1. **The "not-a-calibrated-effect" hedge is stated ~6× inside the E4 block alone**
   (L544–545 "superseded for magnitude inference"; L556 "not claimed as a calibrated effect";
   L559–562 "not a calibrated policy-materiality threshold"; L566–568 "not a point multiplier or
   calibrated impact"; L618–620 "the calibrated multiplier is retired"; L651–655 "not target-domain
   calibrated bands") — and again in the header (L3), abstract (L13, twice), and "What survives"
   (L1094–1095). This is the 14-honesty-rounds residue. The *content* must stay; the *repetition*
   should collapse to ONE canonical statement per section + cross-reference.

2. **The gate is described twice.** The "Quantitative status (governing)" paragraph (L547–568)
   already summarizes Δ=0.025, the 0.05 gate, the post-hoc 0.026 [0.023,0.029], the "stylized
   selection-mechanism" caveat, the contract pointer, and the file paths. Then the "symmetric
   credit-versus-coverage gate (methods and result)" paragraph (L570–620, ~50 lines) restates ALL
   of it in full — the paragraph even opens by conceding it does so ("its design is stated in full
   here rather than only by reference"). That is exactly the FULL comparative/methods material the
   restructure asks us to move to an appendix.

---

## (A) Concrete FORM / condensation edits (before → after)

### A1 — Tighten "Status of the earlier compound ratios" (L540–545)
No relocation; just cut filler.
- **Before (6 lines):** "Three baselines of the same value-per-budget ratio were produced by this
  agent-based apparatus: **2.19×** … **2.22×** … **2.26×** … They are retained here for traceability
  as **conditional outputs of that apparatus**, but are **superseded for magnitude inference** and are
  no longer offered as the paper's headline."
- **After (3 lines):** "The same apparatus produced three baselines of the value-per-budget ratio —
  **2.19×** vs zero-control (E5), **2.22×** vs the audit-parameterized status quo (E7), **2.26×** under
  behavioral adoption (E8) — retained for traceability as conditional apparatus outputs, superseded for
  magnitude inference, and no longer the paper's headline."

### A2 — RELOCATE the full gate methods to an appendix (L570–620); leave a 3-sentence synopsis in body
This is the single biggest info-preserving win (~45 lines out of the body) and directly serves the
mandate. Move the entire "**The symmetric credit-versus-coverage gate (methods and result)**"
paragraph (K=500, N=5000, the estimand Δ=(D−C)/O, the λ/ρ/h grid, the four-part decision rule, the
NO-GO cells, the λ=0 control at ≈0.016) verbatim to a new **"Appendix: the symmetric selection gate
— pre-registration, design, and results."** Nothing is dropped; it becomes reference material.
- **Body replacement (keep ~4 sentences, after the tightened L547–568 "Quantitative status"
  paragraph):** "The confirmatory computation is a pre-registered, symmetric, selection-only stress
  test: both arms get matched expected appraisal budgets over the same candidate pool, costs and
  noise, delivery at parity, each ranking on its *own* noisy estimate (no oracle). They differ only
  in the coverage mechanism — distributed reports self-route to cared-about projects under voice bias;
  central appraisal spreads evenly and carries credit pressure λ. The pre-registered rule (frozen,
  auditor-designed to be adversarial) demanded a pooled median Δ ≥ 0.05 for a GO; the result was
  **NO-GO** — positive in all 18 cells but median Δ = 0.025, with the λ=0 control clean at ≈0.016.
  Full design, grid, decision rule, and diagnostics are in Appendix [X] and the frozen
  pre-registration (`scripts/simulation/e5-sp-symmetry-gate.mjs`)."

### A3 — Collapse the duplicated Δ figures in "Quantitative status" (L547–568)
The post-hoc "Δ = 0.026 [0.023, 0.029]" appears at L554 AND L615; the "0.05 = rebuild not policy
threshold" clarification runs L559–562. State each once. Suggested tightened body paragraph:
- **After:** "**Quantitative status (governing).** The confirmatory test found the distributed-minus-
  central selection advantage positive in all 18 pre-specified cells but small: the pre-registered
  pooled **median Δ = 0.025**, below the pre-registered **0.05 rebuild gate** (a go/no-go rule for a
  quantitative rebuild on this uncalibrated scale — *not* a policy-materiality threshold); a post-hoc
  ratio-of-sums estimate is Δ = 0.026 [0.023, 0.029] (Monte-Carlo uncertainty on the simulated DGP).
  The compound multiplier is therefore **not** a calibrated effect: this is a stylized test of a
  *selection mechanism*, its value/credit variables abstract scores, not measured Core-v0 quantities.
  The load-bearing contributions are the architecture, the mechanism direction, and the v1.14
  robustness map below — not a point multiplier. Controlling spec:
  [claim-and-estimand-contract](../research/claim-and-estimand-contract.md)."
- Removes ~6 lines and one full duplicate of the interval; every fact survives.

### A4 — Unnest the parentheticals in the central-arm description (L590–596)
(These live in the paragraph relocated by A2, so they land in the appendix — but if any of this stays
in body, unnest it.) The sentence "It ranks by score = … where P is claimable political credit (the
electoral credit-claiming and traceability logic by which visible, attributable benefits are favoured
over diffuse ones; Mayhew 1974; Arnold 1990) and λ is bounded credit pressure (a *posited* pressure
whose real-world magnitude must be measured, not assumed)" carries two nested asides. Split:
"…where P is claimable political credit and λ is bounded credit pressure. Credit here is the
electoral credit-claiming/traceability logic favouring visible, attributable benefits over diffuse
ones (Mayhew 1974; Arnold 1990); λ is a *posited* pressure whose real-world magnitude must be
measured, not assumed."

### A5 — Tighten the closing hedge of the myopia extension (L650–655)
- **Before:** "A stylized joint-normal fixed-threshold benchmark (`…parity-theorem.md`) places the
  parity boundary at the equality of the two selectors' signal-to-noise covariance ratios, and a
  ceteris-paribus path from the probable to the central-favourable scenario crosses parity partway
  along the declared segment. These magnitudes are **source-motivated declared reference and stress
  points, not target-domain calibrated bands** (the intervals cover inner Monte-Carlo variability
  only, and the harm-myopia strength is the load-bearing, least-empirically-pinned assumption); the
  honest object is where each institution wins and how much the answer depends on that assumption, not
  a single number."
- **After:** "A stylized joint-normal benchmark (`research/e4-parity-theorem.md`) puts the parity
  boundary at the equality of the two selectors' signal-to-noise covariance ratios, crossed partway
  along the declared probable→central-favourable segment. All these magnitudes are source-motivated
  declared reference/stress points, not calibrated bands (intervals cover inner Monte-Carlo variance
  only; harm-myopia strength is the load-bearing, least-pinned assumption): the honest object is where
  each institution wins and how sensitive that is, not a single number."

### A6 — Give the myopia four-scenario numbers a small table in the body (form, not new content)
L633–639 narrate five numbers in prose ("≈ 98% … ≈ 68% … ≈ 91% … ≈ 45% … *negative* … ≈ 96%"). The
E4 source draft (`research/e4-paper-section-draft.md` L47–53) already has the clean table. Lifting
that table into the body replaces a hard-to-parse sentence chain with a scannable object and *reduces*
line count while preserving every value. Recommend the 3-row essential form in body (central endpoint,
probable, distributed-favourable) with the full 5-row table + diagnostic contrast in the appendix.

---

## (B) Position on the restructure

**I support it** — moving the full gate methods + full comparative scenario detail to an appendix
while the body leads with the probable result is a clarity win, and A2 alone recovers ~45 lines
without losing a fact. Conditions:

1. **The NO-GO stays visible in the body.** The gate's median Δ = 0.025 / below-0.05 / NO-GO must
   remain in the body synopsis (A2) and in the abstract. Relocating *methods* is fine; relocating the
   *governing negative result* would be spin, which the author premise forbids.
2. **The body headline pairs the probable win with the central's winning region in the same breath**
   (see D). Leading with +46.6% without the "competent harm-aware central reverses it" clause in the
   same sentence would read as the spin we are told to avoid.
3. **One canonical hedge per section, cross-referenced** — not six. This is a readability fix, and it
   makes the remaining hedges actually land instead of numbing the reader.
4. **Appendix is referenced by anchor at each body claim** so the relocation is navigable, not buried.

---

## (C) RED LINES (no information loss)

- **Keep every number:** 2.19/2.22/2.26×; Δ=0.025; Δ=0.026 [0.023,0.029]; λ=0 control ≈0.016; the
  0.05 gate; 98/68/91/45/96/−104%; +46.6%; the ~40% harm-myopia share; t≈0.57 parity frontier.
  Condensation may state each ONCE and cross-reference; it may not drop any.
- **Keep the NO-GO and its "rebuild-not-policy-threshold" meaning** in the body.
- **Keep the reconciliation logic** ("same phenomenon under opposite assumptions") — it is the load-
  bearing move that stops the gate and the map from reading as a contradiction.
- **Keep the honest-limits content** (transport-gap assumption; harm-myopia is the least-pinned knob;
  cost/leakage are separate legs) — relocate to appendix if needed, do not delete.
- Relocation target = the appendix in THIS paper; nothing may be exported to an external file as a way
  of "condensing."

---

## (D) Proposed BODY headline sentence (tight)

**Primary (recommended):**
> Under the probable reference scenario, coverage-routed distributed selection delivers about 91% of a
> full-information benchmark against a credit-pressured central arm's ~45% (a +46.6-point gap) — but a
> competent, harm-aware central reverses the result and wins (~98% to ~68%), so E4 maps *where each
> institution wins* rather than fixing one calibrated number.

**Shorter variant (if a single clause is wanted):**
> Where the central is realistically myopic to harm on the low-visibility long tail, coverage-routed
> selection delivers ~91% of the benchmark to a credit-pressured central's ~45%; where the central is
> competent and harm-aware, the two tie or the central wins — a where-each-wins map, not one effect.

Both foreground the probable result (honest emphasis) while naming the central's real winning region
in the same sentence (no spin), and both close on "map, not a calibrated number," letting the six
scattered hedges collapse into one.
