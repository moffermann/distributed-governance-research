# Round-8 final confirmation — instructions for Codex

Confirmation pass after round-7 remediation. Repo: `C:/devel/claude-projects/distributed-governance-research`, branch `master`. Use subagents / fan out.

## Context (settled — do not re-litigate)
Path B; multiplier retired. Confirmatory test = pre-registered symmetry gate: NO-GO, positive in all 18 primary cells but small — pre-registered pooled median Δ = 0.025 below the 0.05 research-program rebuild gate; post-hoc ratio-of-sums 0.026 [0.023, 0.029]. Controlling spec research/claim-and-estimand-contract.md. EN drafts/paper.md authoritative; ES mirrors.

## Task 1 — confirm the four round-7 blockers are cleared
Read audits/2026-07-10-round7/SUMMARY.md and verify against the current tree:
1. Propagation is no longer overclaimed anywhere: the paper contribution list (drafts/paper.md ~129-135 + ES), README, and .zenodo.json now say the first four rounds are fully propagated with the manuscript-review round D037-D040 tracked; and the four D037-D040 defense files no longer say a bare "Corpus propagation pending" that contradicts the summaries.
2. Appraisal-budget exactness: no surface claims exact "equal/same total appraisal budget" — the roadmap governing-decision line and the gate script comment (scripts/simulation/e5-sp-symmetry-gate.mjs:77) now say "matched in expectation (equal up to per-project rounding)", consistent with the contract and paper.
3. docs/105 banner labels 0.026 as the post-hoc ratio-of-sums and states the pre-registered median 0.025 / rebuild-gate wording.
4. The remediation-roadmap status banner is forward-stable (no hard-coded round enumeration that goes stale).

## Task 2 — final manuscript/repository blocker scan
Independently look for ANY remaining publication-blocker at the manuscript/repository level: claim exceeds evidence; internal contradiction; stale local metadata; dead reference; EN/ES desync; simulation text not matching the shipped script; statistic-provenance slips (median 0.025 pre-registered vs post-hoc 0.026); any surface that still overclaims propagation, appraisal-budget equality, or the retired multiplier. Ignore author-gated deposit-time actions (live Zenodo metadata edit, mixed CC-BY/MIT in .zenodo.json, full v1.13 reviewer-packet rewrite, the v1.13 deposit) — but confirm each is correctly flagged/deferred.

## Output
Write audits/2026-07-10-round8/SUMMARY.md:
- verdict: MANUSCRIPT-READY (only author-gated deposit-time actions remain) / NOT-READY;
- confirmation of the four round-7 blockers;
- any remaining manuscript blocker, ranked (empty if none);
- author-gated deposit-time checklist.
Line numbers must be real; re-read every locator. Be concise; do not pad with nits. If nothing non-author-gated remains, say MANUSCRIPT-READY plainly.
