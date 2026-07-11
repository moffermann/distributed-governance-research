# Round-11 final confirmation — instructions for Codex

Confirmation pass after round-10 remediation. Repo: C:/devel/claude-projects/distributed-governance-research, branch master. Use subagents / fan out.

## Context (settled — do not re-litigate)
Path B; multiplier retired. Confirmatory test = pre-registered symmetry gate: NO-GO, positive in all 18 primary cells but small — pre-registered pooled median 0.025 below the 0.05 research-program rebuild gate; post-hoc ratio-of-sums 0.026 [0.023, 0.029]. Controlling spec research/claim-and-estimand-contract.md. EN drafts/paper.md authoritative; ES mirrors.

## Task 1 — confirm the two round-10 blockers are cleared
Read audits/2026-07-10-round10/SUMMARY.md. Verify against the current tree:
1. Propagation: the false "first four rounds fully propagated" ordinal is gone everywhere; all surfaces (paper contribution + body + footer EN/ES, README, .zenodo.json) now say "all resolutions propagated except the manuscript-review round's D037-D040, whose propagation is tracked", consistent with the D037-D040 records and with the fact that the manuscript-review round is the fourth round.
2. The gate script's [C4] line uses the full "matched-budget low-info stress" label (scripts/simulation/e5-sp-symmetry-gate.mjs).

## Task 2 — final manuscript/repository blocker scan
Independently look for ANY remaining publication-blocker at the manuscript/repository level (claim exceeds evidence; internal contradiction; stale local metadata; dead reference; EN/ES desync; simulation text vs shipped script; statistic provenance median 0.025 vs post-hoc 0.026; propagation/E7-arbiter/equal-information/materiality/retired-multiplier overclaims). Treat audits/2026-07-10/ reports, docs/03_ROADMAP_HISTORY.md, and external-review/manuscript-v1.6-round/ as legitimately historical. Ignore author-gated deposit-time actions (live Zenodo metadata edit, mixed CC-BY/MIT in .zenodo.json, full v1.13 reviewer-packet rewrite, the v1.13 deposit) — confirm each is correctly flagged/deferred.

## Output
Write audits/2026-07-10-round11/SUMMARY.md:
- verdict: MANUSCRIPT-READY (only author-gated deposit-time actions remain) / NOT-READY;
- confirmation of the two round-10 blockers;
- any remaining manuscript/repository blocker, ranked (empty if none);
- author-gated deposit-time checklist.
Line numbers must be real; re-read every locator. Be concise. If nothing non-author-gated remains, state MANUSCRIPT-READY plainly. Do not flag dated/historical artifacts.
