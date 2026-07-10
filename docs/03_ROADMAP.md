# Project Roadmap (live)

> **⚠️ CONTROLLING UPDATE (2026-07-10, LATEST).** The working control document is
> **[`audits/2026-07-10/remediation-roadmap.md`](../audits/2026-07-10/remediation-roadmap.md)** — read it
> as authoritative. Governing decision: the pre-registered **symmetry gate returned NO-GO** — the calibrated
> multiplier (~2×/~2.1×/~2.8×) is **retired**; the project is on **Path B** (publish the architecture +
> qualitative mechanism). The opportunity-cost hurdle is **implemented**. The controlling claim spec is
> [`research/claim-and-estimand-contract.md`](../research/claim-and-estimand-contract.md). This page's
> active stack has been **replaced by the pointer below**; its former 2.8×-era body is void.

This page is now a **thin pointer**; the live prioritized stack lives in the remediation roadmap above.
The full pre-restructure history (C/H alignment log, residual-cleanup #1–#122, Phase 0–9 template, superseded
2.2×-era planning) is preserved verbatim in `docs/03_ROADMAP_HISTORY.md`; the doc corpus map is
`docs/04_DOC_INDEX.md`.

The project has moved from discovery → bounded v0 architecture → a **working draft v1.13** (truth-of-claim
reframed on Path B; latest deposited version v1.12, verified live at DOI 10.5281/zenodo.21252911) with a
reproducible simulation and a complete adversarial record (43 attacks, all resolved), and is now in
**publication-readiness remediation** (successive independent audit rounds are logged under `audits/`; the
latest is the authoritative one). **Both author decisions are resolved:** the license is final (**CC BY 4.0**
for all text/content + MIT for code, single record — the earlier dual/NC-ND plan was dropped), and the
deposit state is confirmed (v1.12 live). **The v1.13 re-deposit is not a mechanical step — it is blocked
until the remaining manuscript blockers in the latest audit are cleared and the author-gated deposit-time
actions are done.** See
`audits/2026-07-10/remediation-roadmap.md`.

---

## ACTIVE STACK → moved

**The live control document is now [`audits/2026-07-10/remediation-roadmap.md`](../audits/2026-07-10/remediation-roadmap.md).**
The pre-registered **symmetry gate returned NO-GO**; the calibrated multiplier (~2×/~2.1×/~2.8×) is
**retired** and the project is on **Path B** (publish the architecture + qualitative mechanism). The prior
ACTIVE STACK on this page (a 2.8×-era plan: "opportunity-cost hurdle refinement", "v2 → paper propagation",
"pre-registered v2") is **void** — the hurdle was implemented, the propagation was CANCELLED, and the
number was retired. The controlling claim spec is
[`research/claim-and-estimand-contract.md`](../research/claim-and-estimand-contract.md); the pre-restructure
history is in [`docs/03_ROADMAP_HISTORY.md`](03_ROADMAP_HISTORY.md).

**Current phase:** publication-readiness remediation — successive independent audit rounds (see `audits/`,
latest authoritative). Both author decisions (license, deposit state) are resolved; the v1.13 Zenodo
re-deposit is **deferred until the remaining manuscript blockers in the latest audit are cleared and the
author-gated deposit-time actions are done** — it is not merely mechanical.

The **post-manuscript validation program** (external expert review, empirical calibration / D-lite pilot,
a bounded tutored pilot) remains the standing longer-horizon direction and is carried in the remediation
roadmap's Tier 8.

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
Phase 5-6 Manuscript ................. working draft v1.13 (latest deposit v1.12); multiplier RETIRED (Path B) 2026-07-10
Phase 7 External review .............. v1.10 packets SUPERSEDED/quarantined; v1.13 Path-B packet rewrite pending (R2-10)
Phase 8 Zenodo ....................... v1.12 live (21252911); v1.13 re-deposit BLOCKED until round-3/4 blockers clear (not merely mechanical)
Phase 9 Satellite experiments ........ active (github.com/moffermann/distributed-governance-experiments)
Value model v2 (agenda-capture) ...... RETIRED as calibrated (symmetry gate NO-GO); exploratory apparatus kept for provenance
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
