# Project Roadmap (live)

Restructured 2026-07-10 (audit cleanup). This is the **lean, live** roadmap: a single prioritized
ACTIVE STACK at the top, then status, deferred studies, invariants, and conventions. The full
pre-restructure history (C/H alignment log, residual-cleanup #1–#122, Phase 0–9 template, superseded
2.2×-era planning) is preserved verbatim in `docs/03_ROADMAP_HISTORY.md`. The doc corpus map is
`docs/04_DOC_INDEX.md`.

The project has moved from discovery → bounded v0 architecture → a published working paper (v1.12) with
a reproducible simulation and a complete adversarial record (43 attacks, all resolved), and is now in
**post-manuscript consolidation + validation**. Zenodo new-version deposit is PAUSED (git only).

---

## ACTIVE STACK (do in this order)

### 1. Audit cleanup (2026-07-10) — `research/audit-2026-07-10.md`
A 6-agent read-only audit found the corpus fundamentally sound (cross-refs clean, attacks/defenses
complete, paper mirror intact, engine correct) with defects clustered as below. Work top-down:
```text
P0 [DONE] Reconcile the half-applied 3.0x->2.8x correction (self-inflicted): e5-sp-model.mjs header/
          tornado/cats/assertion; regenerate held-out confirmation; de-stale the v2 note body, the
          propagation note ready-text, pre-reg (P1 reworded, P5/P6 retracted), roadmap, memory.
P1 [DONE] Metadata drift v1.8->v1.12 (CITATION.cff/.zenodo.json/README) + MEMORY.md index refresh +
          RELEASING.md anti-recurrence guard (C026).
P2 [IN PROGRESS] Roadmap restructure (this file) + docs/04_DOC_INDEX.md + factual fixes (35/35->43/43,
          v1.6->v1.12, defenses/README:100 intro, resolution ranges ->67-113, attacks header A041-A043).
P3 Corpus organization: banner the ~11 unmarked superseded research notes (pattern: e4-analytical-
          backbone.md's banner -> e4e5-value-model-v2.md); tidy stale outputs (e4e5-pipeline-run.json
          overwrite footgun); optional canonical/e-ladder/archive/results reorg; fix E5 name collision.
P4 Paper mirror: fix the one EN/ES desync ("aggregated allocation profiles, not a central plan" in
          paper.es.md:3/§4/§5.3); fix the stale attack count/round narrative (both langs). [The full
          v2 mechanism propagation to the paper stays AUTHOR-GATED — see stack item 3.]
P5 Minor: verify Rajaram 2014 editor set; add missing bib entries when the E5-SP paper is written up;
          Vickrey/2026b cite polish; ES summary bands pinned to the paper figure.
```

### 2. Opportunity-cost hurdle — mechanism-fidelity refinement
The corrected ~2.8× headline models the ~35% net-negative share (Pohl-Mihaljek) by lowering `mean`,
i.e. as if all 35% were true harm (S<0); the faithful split is **~8% true harm + ~27% below the
opportunity-cost hurdle** (S>0 but wastes capital). Add an explicit hurdle `net = S − h·cost`; the
central selects on credit P (funds below-hurdle → agenda-capture, not harm-blindness); calibrate `h` +
corr(S,P) so the central's *funded* portfolio is ~65% net-positive (Doc 1 is an implemented-project
OUTPUT) and its production efficiency ~0.75 (Doc 2, IMF). Expected: magnitude stays ~2.8×; the mechanism
sharpens (agenda-capture primary, harm-blindness the smaller ~8% co-mechanism). Then re-run + re-confirm
and update `e4e5-value-model-v2.md`, `e5-sp-preregistration.md`, `e5-sp-paper-propagation.md`.

### 3. Value model v2 → paper propagation (AUTHOR-GATED)
The paper (EN+ES) still runs on the harm-blindness / ~2.2× framing. `research/e5-sp-paper-propagation.md`
holds the ready-to-apply reframing (agenda-capture, ~2.8×, selection × delivery, calibration table,
bibliography) with author decision points. Apply EN+ES together at a deliberate version bump; then a
Zenodo go. The same correction is owed to the standalone E4 (backbone already bannered).

### 4. Post-manuscript validation program (the independence the corpus most needs)
- **External expert review** with the prepared packets (v1.10 cover note in `external-review/`); highest-
  value profiles: an adversary-side reviewer (does Experiment G collusion hold) and an evals-methodology
  reviewer (does Finding 7 survive a specialist).
- **Empirical calibration**: the D-lite human pilot of the elicitation instrument (satellite
  `D_LITE_PILOT_PROTOCOL.md`) is the first anchor against the LLM priors; full Experiment D follows.
- **A bounded tutored pilot** with the instrumentation the resolutions already require.

## Deferred / candidate studies (second/third manuscripts)
- **Agenda-setting study** ([[agenda-setting-study-design|knowledge/open-questions/agenda-setting-study-design.md]])
  — parallel-agenda mechanism, semi-open envelope objects, honest elicitation under gaming. A020
  agenda-setting is the architecture's largest remaining intellectual open problem (gates open mode at scale).
- **Collusion-resistance mechanism-design study** (post Experiment G): verified beneficial ownership,
  contributor Sybil-resistance, decentralized assigner/seeder/floor-setter — recorded but unmodeled.
- **Distributional-outcome metric**: the status quo is scored only on verified delivery; an equity metric
  would answer the "value-inert incumbent" objection at the manuscript level.

## Program status (replaces the old Phase 0–9 template; see HISTORY for the detail)
```text
Phase 0 Preserve the brain ........... done (ongoing maintenance)
Phase 1 Contradiction resolution ..... done (C001-C025 propagated)
Phase 2 Formal ERDs / state diagrams . done
Phase 3 Adversarial rounds ........... done — 43/43 attacks resolved (docs/67-113), incl. a manuscript-review round
Phase 4 Literature / framing ......... done for the paper (~80 references); ongoing for the v2/E5-SP material
Phase 5-6 Manuscript ................. published, v1.12 (concept DOI 21193846; last deposit v1.8)
Phase 7 External review .............. packets prepared (v1.10); review = pending human step
Phase 8 Zenodo ....................... deposited (paused at v1.8; v1.12 pending author go)
Phase 9 Satellite experiments ........ active (github.com/moffermann/distributed-governance-experiments)
Value model v2 (agenda-capture) ...... built, pre-registered, correction reconciled; paper propagation staged
```
Maturity (heuristic, not formal): exploratory ~95%; architecture ~85–90%; scope consolidation ~70–75%;
literature/framing ~70–75%; implementable spec ~55–65%.

## Standing boundaries / invariants (guardrails, not next actions)
During any later propagation, PRESERVE the A004–A020 scope boundaries recorded in the accepted
resolutions (docs/67–113): each attack's improvement reuses existing objects and observability rather
than adding Core v0 entities; advanced analytics (collusion/network detection, ranking-bias dashboards,
actuarial calibration, participation-equity/delegation-network analytics, common-good charter mechanics,
beneficial-ownership registry) stay Extension v1+ / country implementation. The full per-attack invariant
list is in `docs/03_ROADMAP_HISTORY.md` ("Immediate next steps" #2–#17). A020 agenda-setting remains a
declared open problem gating open mode at scale.

## Scope-control rule
Every new idea is classified as one of four types:
```text
A. Core v0                — necessary for the first coherent version of the model.
B. Extension v1+          — useful, but not required for the first model.
C. Country implementation — depends on legal/administrative/political choices of an implementing country.
D. Out of scope           — not necessary for the model and should not be solved now.
```
The project should not keep expanding unless a new idea is clearly Core v0 or a serious objection that
threatens the core model.

## Operating rule
After every significant conversation or review round: (1) distill new concepts; (2) create/update
hypotheses/docs; (3) record objections; (4) update open questions; (5) classify new ideas by scope;
(6) communicate with the user in Spanish; (7) write durable repository documents in English; (8) include
concrete examples from the case under review; (9) revise the roadmap before every commit and whenever
the strategy changes.
