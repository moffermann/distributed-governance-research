# Adversarial peer-review — E4 draft paper section (v1.14)

**Referee:** academic-writing / peer-review panelist (hostile-journal simulation)
**Target:** `research/e4-paper-section-draft.md`
**Grounding read:** `audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v5.md`, `research/e4-parity-theorem.md`,
`scripts/simulation/e4-v5/{evidence,controls,theorem-check}.mjs` (executed), `drafts/paper.md` §6.
**Engine numbers verified by running the code** (`npm run e4:evidence | e4:controls | e4:theorem`), not taken on faith.

---

## Overall verdict: **MAJOR REVISION** (not reject; not minor)

The honest core is defensible and, in places, admirable: it leads with `sign:indeterminate`, it refuses a
multiplier, its negative controls pass, and its analytic lemma actually checks against simulation (0.17 MC SE). But
as drafted it would draw a **major-revision-or-reject** from a hostile referee for two reasons that are *fixable but
currently disqualifying*: (1) an **unreconciled contradiction with the paper's own pre-registered result** in the
same §6, and (2) a **Result paragraph that reports no numbers** while the engine it cites emits very specific ones.
Both read, to a suspicious referee, as selective presentation. Fix those two and this becomes a minor-revision
section.

---

## Ranked issues

### 1. [BLOCKER — integrity] The section silently contradicts the paper's own pre-registered NO-GO result
**Location:** whole draft vs. `drafts/paper.md:546-566` ("Quantitative status (governing)").
**Why:** The governing paragraph already in the master paper states the distributed−central selection advantage is
**"positive in every one of 18 pre-specified cells but small," pooled median Δ = 0.025 / ratio-of-sums Δ = 0.026,
below the pre-registered 0.05 rebuild gate**, and concludes "the compound multiplier is therefore **not** claimed."
The new E4 draft, run live, headlines the *same institutional comparison* as: distributed wins **78%** of sampled
θ-points, central 21%, and delivers a **46.4%-of-oracle** gap (`m̂ = 46.4%`, CI [45.4%, 47.4%]), with the α=0.5
magnitude box at **[25.8%, 120.6%] of oracle**. A referee — and any careful reader — will see a pre-registered test
that returned "small, below our own go/no-go threshold," immediately followed by a differently-parameterized model
that returns a large number, and will read it as **abandoning a pre-registered result the moment it was
inconvenient**. This is the single most likely ground for rejection, and it is an integrity charge, not a technical
one.
**Root cause (verified):** the two objects differ in exactly one thing that the draft never states — the
**salience-gated harm-myopia mechanism** plus an **asymmetric "illustrative-defaults" world**. The symmetry gate is
symmetric-by-construction, so it *necessarily zeroes out* the very mechanism this section is about. Control C4 proves
the point: `m(b_H^C=0)=0.4632 → m(b_H^C=1)=0.1118` — i.e. a central planner that *sees harm* collapses the headline
from 46% to 11% (~76% of the effect is the harm-visibility assumption).
**Concrete fix:** add a short, explicit **continuity paragraph** near the top of E4, e.g.:

> *"§6's confirmatory symmetry gate deliberately holds the two arms symmetric except for coverage; by construction it
> switches **off** the harm-myopia channel that is this section's subject, and correctly returns a small advantage
> (Δ≈0.026). E4 does **not** revisit that magnitude claim. It asks a different, conditional question — *when the
> central proxy is myopic to concentrated harm on the low-visibility tail, who wins and by how much* — and reports a
> sign-map, not a point estimate. The mechanism's load is transparent: a fully harm-aware planner (b_H^C→full)
> nearly erases the gap (m: 46%→11%, control C4)."*

Without this paragraph the section is, to a hostile eye, result-shopping.

### 2. [BLOCKER — presentation] The "Result" paragraph reports no numbers; the engine reports precise ones
**Location:** draft lines 45-51 ("Result (illustrative defaults)").
**Why:** The paragraph says "robustly positive at the 50–80% sensitivity boxes… central-possible only at the widest
95% box" and "roughly half the advantage" — but omits **every** figure the engine actually produces: `m̂=46.4%`, the
78/21/2 sign split, and the three R_α intervals ([25.8%,120.6%], [2.5%,191.5%], [−73.2%,267.2%]). A section that goes
vague exactly where its engine is precise invites the inference that the numbers were withheld because they are
awkward (the 46% collides with issue #1; the 120–267% upper magnitudes look wild). Hiding them is worse than
explaining them.
**Concrete fix:** report them, with interpretation. E.g.:

> *"Over the sampled physically-possible set (193 resolved corners of the D_F box) the distributed arm wins 78% of
> points, the central proxy 21%, with 2% at parity — so the winner is **not sign-robust**. Restricting to the
> declared expectable boxes R_α, the (D−C)/O gap is [25.8%, 120.6%] of oracle at α=0.5, [2.5%, 191.5%] at α=0.8, and
> [−73.2%, 267.2%] at α=0.95 — positive except at the widest box. (Magnitudes above 100% are not a coding error: when
> the losing arm actively **destroys** value, D−C exceeds the oracle level O; see estimand definition.) At the
> illustrative operating point m̂=46.4% (CI [45.4, 47.4]), reported as a **locator for the mechanism, not an
> estimate**."*

### 3. [MAJOR] The estimand `m = Σ(D−C)/ΣO` is under-explained and counter-intuitive
**Location:** draft lines 31-37; the ">100% means the losing arm destroys value" fact never appears in the draft
(it is in the engine's own render string, `evidence.mjs:22`).
**Why:** A referee meeting "fraction of the full-information oracle value" will expect something in [0,1]. This
quantity divides a **contrast between two arms** (D−C) by a **benchmark level** (O), so it can exceed 1 and go
negative. That is defensible (scale-free, and the theorem's large-K corollary lands on `(V_D−V_C)/V_O`), but it is
not self-evidently "a fraction of the oracle," and leaving the >100% behavior unexplained looks like an artifact.
**Concrete fix:** define it in one sentence as "the delivered-value **gap** between arms, expressed as a share of the
full-information oracle **level**," explicitly note the range is unbounded when an arm destroys value, and — strongly
recommended — report the underlying levels (D, C, O in mean-value units) once so the ratio is anchored.

### 4. [MAJOR] "Benchmark theorem" is over-billed relative to your own positioning
**Location:** draft lines 5, 39-43, 59 (headline object "…+ a benchmark theorem + …"); vs.
`DESIGN_SKETCH_v5.md:96-97` which calls it "a **proposed** joint-normal benchmark (validation, not novelty)."
**Why:** The lemma (`V = q·μ_S + φ(z_q)·Cov(S,X)/σ_X`) is the standard truncated-normal selection identity; it is a
correct and useful **internal check**, not a contribution. Headlining it as "a benchmark theorem" (one of three
pillars) invites a referee to Google it, find it is textbook, and discount the section's novelty judgment. Your own
design doc already concedes this.
**Concrete fix:** demote in the framing to "a closed-form **selection identity** we use to validate the simulator (it
matches within 0.17 Monte-Carlo SE)"; keep the proof in an appendix; make the three pillars "mechanism model +
robustness map + measurement plan." Do not sell a textbook identity as a theorem contribution.

### 5. [MAJOR] Assumption vs. result is blurred in the mechanism paragraph
**Location:** draft lines 15-21.
**Why:** The prose slides from a modeling **assumption** ("`s(0)≈0`", harm gate increasing in visibility) to an
apparent **finding** ("the planner is near-blind on the tail… holds for any β<1… the aggregate advantage comes from
the long tail"). The claim that oversight "reaches only the visible, disputed few" is asserted as fact about how
central planners behave, unreferenced in-section. A referee will object that the headline mechanism is *assumed into
existence*, then reported as if demonstrated.
**Concrete fix:** separate the two explicitly: "We **assume** a salience gate `s(V)` with `s(0)≈0` (motivated by
[cite]); **given** that assumption, coverage dominates the tail wherever `(1−β) > b_H^C·s(V)`. Whether real planners
are in fact tail-blind is exactly what the measurement plan (§bridge) is designed to test — it is a premise here, not
a result." Add at least one citation for the salience-gate premise or flag it as a stylized assumption.

### 6. [MAJOR] Prior-art differentiation is absent from the section body
**Location:** differentiators live only in the integration checklist (draft lines 64-66), not in the prose.
**Why:** For a serious venue the section itself must say how it differs from Böttcher–Klingebiel 2024, Rey–Endriss
2024, Boehmer et al. 2023, Liesiö et al. 2007, Mollick–Nanda 2016. A checklist note is invisible to the referee
reading the paper.
**Concrete fix:** add one or two sentences positioning E4 against portfolio-decision-under-uncertainty (Liesiö) and
axiomatic participatory budgeting (Rey–Endriss / Boehmer): "Unlike axiomatic PB, which fixes preferences and studies
aggregation rules, E4 fixes the rule (greedy-under-budget) and studies **estimation error under two institutions**;
unlike robust portfolio selection, the object is a comparative-institutions sign-map, not an optimal portfolio."

### 7. [MINOR] Register/tone mismatch with the master paper
**Location:** throughout; contrast draft's "proxy-informed, not identified", "measure-free", "sign backbone",
"physically-possible set" with `paper.md` §6's narrative prose.
**Why:** The draft reads as an internal build-spec, not journal copy. Terms like "sign backbone," "measure-free,"
"physically-possible set," and "R_α boxes" are jargon that will slow a referee.
**Concrete fix:** on integration, translate: "sign backbone" → "the sign of the winner"; "measure-free" → "we report
the count/fraction of sampled points and make no claim about a probability measure over parameters"; "physically-
possible set" → "the set of parameter values not ruled out on physical grounds (probabilities in [0,1], variances
≥0)". Add a compact notation table (S⁺, H, M^C, M^D, v_{p,j}, b_H^C, s(V), β, m, D_F, R_α) — the section introduces
~a dozen symbols with no glossary.

### 8. [MINOR] MNAR→Gaussian caveat is 15 lines downstream of the claim it qualifies
**Location:** benchmark paragraph (lines 39-43) states the parity boundary as if it governs the real object; the
"the distributed signal is not jointly normal → moment-matched approximation" caveat only lands in Honest limits
(line 53+) and the theorem doc (`e4-parity-theorem.md:56-59`).
**Why:** The lemma is exact only for a jointly-normal signal, which the actual MNAR distributed estimator is **not**.
Stating the boundary first and caveating much later reads as burying the limitation.
**Concrete fix:** attach the caveat inline: "…the parity boundary is the equality of covariance-to-noise ratios (for
the central signal exactly; for the distributed MNAR signal this is a **moment-matched approximation**, since
thresholded non-response breaks joint normality — hence the numerical frontier, not the lemma, is the object)."

### 9. [MINOR] "Atlas" over-promises what the artifact delivers
**Location:** draft lines 5, 59 ("robustness atlas"); realized as a 193-corner sign-share + 3 R_α intervals; Honest
limit (3) already concedes it is "a sampled bound… which may under-cover interior extrema."
**Why:** "Atlas" implies a mapped surface; the deliverable is a coarse sampled envelope with no figure. A referee who
reads "atlas" and finds no map will mark it down.
**Concrete fix:** either add one real 2-D slice figure (e.g. m over β × b_H^C, which C4 shows is the live axis) — this
would materially strengthen the paper — or downgrade the word to "sign-and-magnitude robustness **map**."

### 10. [MINOR] "roughly half the advantage" is imprecise and undersells your own control
**Location:** draft line 49.
**Why:** The section never says which counterfactual gives "half." The one attribution I can run, C4
(`b_H^C: 0→full`), collapses m from 46.3% to 11.2% — ~76% of the effect, not half. If "half" refers to a different
lever (removing opposition, π_opp→0), cite that run's number explicitly; do not leave a vague fraction the reader
cannot reconcile with the published control.
**Concrete fix:** replace with the exact figure and lever: "A fully harm-aware central planner nearly erases the gap
(m: 46%→11%; control C4); removing opposition entirely reduces it by [exact %] — the harm channel is the dominant
driver." Report the actual attribution number from `controls.mjs`, not a round adjective.

### 11. [HOUSEKEEPING] Strip draft scaffolding on integration
**Location:** title "DRAFT, pending Codex v6 confirmation" (line 1); "Result (illustrative defaults)" as a heading;
integration checklist (lines 61-69).
**Fix:** remove before it lands in `paper.md`; the checklist is workflow, not paper.

---

## The single change most likely to get it past a hostile referee

**Add the continuity paragraph (Issue #1) and put the real numbers in the Result (Issue #2).** The paper already,
honestly and in the same §6, tells the reader the pre-registered advantage was *small and below the go/no-go gate*.
Unless E4 explicitly says "different question, mechanism deliberately switched off in that test, and this is a
conditional sign-map not a magnitude claim — a harm-aware planner takes 46%→11%," a suspicious referee will conclude
the authors swapped models to manufacture a bigger number after their own pre-registration said stop. That single
reconciliation converts the section's biggest liability (looks like result-shopping) into its biggest credibility
asset (a team that pre-registered a NO-GO, honored it, and then transparently studied the mechanism the NO-GO test
had to exclude).

---

## What's genuinely strong (keep, and lean on it)

- **Leads with `sign:indeterminate`.** Opening the Result with "the winner is *not* sign-robust across the full set"
  is the opposite of overclaiming — rare and disarming. Preserve it verbatim.
- **The negative controls actually pass**, including exact world-by-world symmetry (`D=C` when signals are identical)
  and pathway-inactivation checks. This is a real integrity signal a referee can rerun; cite it in-section.
- **The analytic lemma is verified, not asserted** (0.17 MC SE against simulation). Even demoted to a check (Issue
  #4), that it *matches* is a genuine credibility point.
- **The transport-unidentified honesty + bridge-data measurement plan** is exactly the right register: it says what
  would falsify/identify the claim and admits it is not yet measured.
- **The harm-myopia thesis is a crisp, defensible mechanism** clearly distinct from the retired multiplier — the
  section has a real idea, not just a robustness table.
- **The embargo** (parity at 0, no ×, no bare D/C, closed output schema) is disciplined and worth one sentence of
  methods credit.
