# Round-6 final confirmation — instructions for Codex

Confirmation pass after round-5 remediation. Repository:
`C:/devel/claude-projects/distributed-governance-research`, branch `master`.

## Use subagents / fan out.

## Context (settled — do not re-litigate)
Path B; multiplier retired. Confirmatory test = pre-registered **symmetry gate**: NO-GO, positive in all 18
primary cells but small — pre-registered pooled **median Δ = 0.025** below the **0.05 research-program rebuild
gate**; post-hoc ratio-of-sums 0.026 [0.023, 0.029]. Controlling spec `research/claim-and-estimand-contract.md`.
EN `drafts/paper.md` authoritative; ES mirrors.

## Task 1 — confirm the three round-5 residuals are cleared
Read `audits/2026-07-10-round5/SUMMARY.md`. Verify against the current tree:
1. **Gate-block exactness** (`drafts/paper.md` ~566-610; ES mirror): "N = 5000 potential participants
   considered per project; interested reach at most N and endogenous"; central bandwidth = rounded fixed
   m_C = round(expected reports / K), totals equal in expectation up to rounding. Cross-check against
   `scripts/simulation/e5-sp-symmetry-gate.mjs` and `audits/2026-07-10/symmetry-gate-preregistration.md`.
2. **E7 provenance**: `research/e7-calibrated-baseline-design.md` now reconciles the "queue must clear"
   precondition with E7's demoted Path-B status (figures = conditional apparatus outputs, queue off the
   critical path); the paper no longer uses unqualified "audit-documented" language for E7.
3. **Roadmap single state**: `docs/03_ROADMAP.md` and `audits/2026-07-10/remediation-roadmap.md` no longer
   contradict themselves (no "round-3 in progress", no already-removed-PDF gate, no "materiality bar", no
   "needs a redeposit" for the direct-editable live title).

## Task 2 — final scan for any remaining manuscript/repository blocker
Independently look for anything still publication-blocking at the manuscript/repository level (claim exceeds
evidence; internal contradiction; stale local metadata; dead reference; EN/ES desync; simulation text not
matching the shipped script). Ignore author-gated deposit-time actions (live Zenodo metadata edit, mixed
CC-BY/MIT in `.zenodo.json`, full v1.13 packet rewrite, the v1.13 deposit) — but confirm each is correctly
flagged/deferred.

## Output
Write `audits/2026-07-10-round6/SUMMARY.md`:
- verdict: **MANUSCRIPT-READY** (only author-gated deposit-time actions remain) / NOT-READY;
- confirmation status of the three round-5 residuals;
- any remaining manuscript blocker, ranked (empty if none);
- the author-gated deposit-time checklist (unchanged if so).
Line numbers must be real; re-read every locator. Be concise.
