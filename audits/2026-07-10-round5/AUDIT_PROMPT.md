# Round-5 final verification — instructions for Codex

Re-audit the repository (`C:/devel/claude-projects/distributed-governance-research`, branch `master`) after
the round-4 remediation. This is a focused verification pass, not a fresh full audit.

## IMPORTANT — use subagents / fan out
Spawn parallel subagents for the task areas below; do not go linear.

## Context (settled — do not re-litigate)
Path B; multiplier retired. The one confirmatory test is the pre-registered **symmetry gate**: NO-GO,
selection advantage positive in all 18 primary cells but small — pre-registered pooled **median Δ = 0.025**
below the **0.05 research-program rebuild gate**; post-hoc ratio-of-sums Δ = 0.026 [0.023, 0.029]. Controlling
spec `research/claim-and-estimand-contract.md`. English `drafts/paper.md` authoritative; ES mirrors.

## Task 1 — verify the round-4 fixes are correct and faithful
Re-read `audits/2026-07-10-round4/SUMMARY.md` and `task-2-regressions.md`. For each round-4 finding, confirm
it is now CLEARED against the current tree (quote current file:line). In particular, verify the rewritten
self-contained gate block (`drafts/paper.md` ~566-605 and ES mirror) now matches the frozen script
`scripts/simulation/e5-sp-symmetry-gate.mjs` and `audits/2026-07-10/symmetry-gate-preregistration.md`:
- K = 500 candidate projects; N = 5000 potential participants per project; endogenous reach and funded set;
- central ranks on its OWN noisy z(ĥNet_C/cost) + λ·z(P/cost), not true net;
- the legitimate asymmetries are correctly enumerated (not "differ in exactly one way");
- {0,0.5,1} labelled latent-ρ with realized corr(S,P) ≈ 0.00/0.30/0.82;
- λ=0 control ≈0.016 described as within the pause guard, not "proof of no asymmetry".
Flag any residual inaccuracy.

## Task 2 — catch any NEW regression from the round-4 edits
The gate block, contribution list, conclusion, contract, ES outreach, roadmaps, RELEASING, and 10 reviewer
packets changed. Look for new contradictions, EN/ES desync, broken cross-references, or over-corrections.

## Task 3 — final manuscript/repository readiness verdict
Judge readiness of the **manuscript + repository** on everything that is NOT an author-gated deposit-time
action. Author-gated (exclude from the manuscript verdict, but confirm each is correctly flagged/deferred in
the roadmap): editing the live Zenodo v1.12 record metadata; declaring mixed CC-BY/MIT in `.zenodo.json` at
deposit; the full v1.13 reviewer-packet rewrite; and the v1.13 deposit itself.

## Output
Write `audits/2026-07-10-round5/SUMMARY.md`:
- verdict: MANUSCRIPT-READY (only author-gated deposit-time actions remain) / NOT-READY;
- a table of round-4 findings × cleared/partial/not-cleared;
- any new/residual manuscript blockers ranked (empty if none);
- the author-gated deposit-time checklist.
Also write per-task files if useful. Line numbers must be real; re-read every locator. Be concise: a short
list of true remaining blockers beats a long list of nits.
