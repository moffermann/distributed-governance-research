# Round-10 final confirmation — instructions for Codex

Confirmation pass after round-9 remediation. Repo: `C:/devel/claude-projects/distributed-governance-research`, branch `master`. Use subagents / fan out.

## Context (settled — do not re-litigate)
Path B; multiplier retired. Confirmatory test = pre-registered symmetry gate: NO-GO, positive in all 18 primary cells but small — pre-registered pooled median Δ = 0.025 below the 0.05 research-program rebuild gate; post-hoc ratio-of-sums 0.026 [0.023, 0.029]. Controlling spec research/claim-and-estimand-contract.md. EN drafts/paper.md authoritative; ES mirrors.

## Task 1 — confirm the single round-9 blocker is cleared
Read audits/2026-07-10-round9/SUMMARY.md. Verify against the current tree that the shipped gate script `scripts/simulation/e5-sp-symmetry-gate.mjs` now:
- prints a NO-GO verdict that says "positive in all 18 cells but small: does NOT clear the 0.05 rebuild gate ... mechanism direction supported" (not "advantage does not survive");
- uses "matched-budget low-info stress" (not "adversarial") in its regime label, [C4] line, and comment;
- still computes/reproduces the same result (18/18 positive, median 0.025, NO-GO, negative control 0.016) — i.e., only display strings changed, decision logic/parameters unchanged.

## Task 2 — final manuscript/repository blocker scan
Independently look for ANY remaining publication-blocker at the manuscript/repository level. The recurring patterns from earlier rounds were swept repo-wide (propagation overclaims, "E7 as current arbiter", "equal information budget", unbannered retired multipliers 2.19x/2.22x/2.26x, "materiality gate/bar", 0.026-mislabeling); re-verify they are genuinely clean, treating audits/2026-07-10/ reports, docs/03_ROADMAP_HISTORY.md, and external-review/manuscript-v1.6-round/ as legitimately historical. Also check: any claim exceeding evidence; internal contradiction; stale local metadata; dead reference; EN/ES desync; simulation text vs shipped script. Ignore author-gated deposit-time actions (live Zenodo metadata edit, mixed CC-BY/MIT in .zenodo.json, full v1.13 reviewer-packet rewrite, the v1.13 deposit) — confirm each is correctly flagged/deferred.

## Output
Write audits/2026-07-10-round10/SUMMARY.md:
- verdict: MANUSCRIPT-READY (only author-gated deposit-time actions remain) / NOT-READY;
- confirmation of the round-9 blocker;
- any remaining manuscript/repository blocker, ranked (empty if none);
- author-gated deposit-time checklist.
Line numbers must be real; re-read every locator. Be concise. If nothing non-author-gated remains, state **MANUSCRIPT-READY** plainly. Do not flag dated/historical audit/review artifacts as blockers.
