# Round-4 publication-readiness re-audit — instructions for Codex

You are re-auditing the repository (`C:/devel/claude-projects/distributed-governance-research`, branch
`master`) after a round of remediation that responded to your round-3 findings
(`audits/2026-07-10-round3/`). Decide whether the master paper is now **publication-ready**.

## IMPORTANT — use subagents / fan out
Spawn parallel subagents, one per task area below; do not do this in a single linear pass.

## Context (settled — do not re-litigate)
Path B: publish the architecture (Core v0) + the qualitative credit-versus-coverage mechanism; the
calibrated multiplier is **retired**. The one confirmatory test is the pre-registered **symmetry gate**:
NO-GO, distributed selection advantage positive in all 18 primary cells but small — **pre-registered pooled
median Δ = 0.025** of a full-information greedy benchmark, below the **0.05 research-program rebuild gate**;
**post-hoc** ratio-of-sums Δ = 0.026 [0.023, 0.029] (report the two separately). Controlling spec:
`research/claim-and-estimand-contract.md`. English `drafts/paper.md` is authoritative; `drafts/paper.es.md`
mirrors it.

## Task 1 — verify each round-3 blocker is actually cleared
Re-read `audits/2026-07-10-round3/SUMMARY.md` and each dimension report. For every finding, check the
current tree and classify it: **CLEARED**, **PARTIAL**, or **NOT CLEARED**, with the exact current
`file:line` and a quote. Pay special attention to:
- statistic provenance (median 0.025 pre-registered vs post-hoc 0.026) across intro, Finding 7, conclusion,
  docs/101, README, contract;
- scope/overreach removed (redistribution/"any allocation institution"/"answered by how much"/E7 real-world
  causal language/E7 "exclusively-calibrated");
- the three math fixes (detection-floor Poisson label + exact Bernoulli; E4 expectation-not-finite-sample
  invariances; formal-models G = 1 − a(1−r) + γ + R);
- the self-contained symmetry-gate methods block now present and correct;
- the mechanism literature bridge (Mayhew 1974 / Arnold 1990) and softened novelty;
- docs/101 participation-resilience relabelled; ES outreach "real system" language and DOI;
- roadmap single-state reconciliation; five ES links fixed; reviewer-packet supersession banners; stale PDF
  removed; CITATION/LICENSE title updated.

## Task 2 — catch regressions introduced by the remediation
The edits were extensive. Look for: new internal contradictions, broken cross-references, EN/ES desync
(numbers, claims, caveats, new paragraphs like the self-contained gate block and "What survives"), citations
that don't support their sentence, and any place a fix over-corrected into a new inaccuracy.

## Task 3 — final verdict, separating what is fixable now from author-gated deposit-time items
Some items are **author-gated** and cannot be done before deposit: editing the live Zenodo v1.12 record
metadata, declaring mixed CC-BY/MIT in `.zenodo.json` at deposit, the full v1.13 reviewer-packet rewrite,
and the v1.13 deposit itself. Judge **manuscript + repository publication-readiness** on everything else, and
list the author-gated items separately as "deposit-time actions" rather than counting them as manuscript
blockers — but confirm each is correctly flagged/deferred in the roadmap.

## Output
Write `audits/2026-07-10-round4/<task-slug>.md` per task, and `audits/2026-07-10-round4/SUMMARY.md` with:
- an overall verdict: READY / READY-EXCEPT-DEPOSIT-TIME / NOT-READY;
- a table of round-3 findings × {cleared/partial/not-cleared};
- any new/regressed blockers ranked;
- the remaining author-gated deposit-time checklist.
Line numbers must be real; re-read every locator before reporting. A short list of true remaining blockers is
worth more than a long list of nits.
