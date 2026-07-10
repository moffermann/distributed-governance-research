# Round-3 publication-readiness audit — instructions for Codex

You are auditing the repository at the current working tree
(`C:/devel/claude-projects/distributed-governance-research`, branch `master`) to decide
whether the master paper is **publication-ready**. This is round 3; two prior rounds already
ran and were largely remediated.

## IMPORTANT — use subagents / fan out into parallel threads
Do NOT do this in a single linear pass. **Spawn parallel subagents**, one per audit dimension
below, and have each work independently, then synthesize. Explicitly fan out.

## Context you MUST internalize before judging (do not re-litigate these settled decisions)
- The project pivoted to **Path B**: publish the **architecture (Core v0) + the qualitative
  credit-versus-coverage mechanism**, and **retire the calibrated value-per-budget multiplier**
  (the old ~2×/2.1×/2.2×/2.8× headline). This retirement is deliberate and final.
- The one genuinely confirmatory test is the **pre-registered symmetry gate**
  (`scripts/simulation/e5-sp-symmetry-gate.mjs`), which returned **NO-GO**: the distributed
  selection advantage is **positive in all 18 primary cells but small** — pre-registered pooled
  **median Δ = 0.025** of a full-information greedy benchmark, **below the 0.05 materiality/rebuild
  gate**; the post-hoc world-cluster ratio-of-sums is **Δ = 0.026 [0.023, 0.029]**. Keep the
  median (pre-registered) and the ratio-of-sums+CI (post-hoc) distinct.
- The controlling spec is **`research/claim-and-estimand-contract.md`**. It governs every claim:
  selection-only estimand with delivery at parity; Δ_total is future work; "full-information
  greedy benchmark" is NOT an optimum/upper bound; the model is a **stylized selection mechanism,
  not a validated Core v0 implementation**; units are uncalibrated; the 0.05 is a research-rebuild
  threshold, not a policy-materiality threshold.
- The abstract was just rewritten to a value-first structure, and the title/conclusion/novelty and
  the ES outreach summaries were just realigned. Section 6 keeps the exploratory apparatus numbers
  (2.19×/2.22×/2.26×, +43%, +53-54%, ~2×–5×) but they must be **labelled conditional model-internal
  apparatus outputs**, never current calibrated claims.
- **English `drafts/paper.md` is authoritative; `drafts/paper.es.md` must mirror it exactly.**

## The publication-readiness gate (from the roadmap) — judge against ALL of these
1. No claim exceeds what the evidence supports.
2. No internal contradiction between abstract / body / conclusion / notes / roadmap.
3. No stale external metadata (version, DOI, license, attack count).
4. No dead references; every load-bearing citation supports its claim.
5. EN and ES mirror each other exactly.
6. The shipped simulation reproduces what the text says it does.

## Audit dimensions — one subagent each
1. **Correctness & errors** — factual/logical/mathematical errors; sign/denominator mistakes;
   claims contradicting the code or the contract; broken cross-references.
2. **Internal consistency & contradictions** — especially abstract ↔ body ↔ conclusion ↔ Section 6
   ↔ contract ↔ roadmap ↔ README/.zenodo. Any residual reassertion of the retired multiplier as a
   current claim. Numbering, counts (43 attacks, 5 rounds, docs 67-113), DOIs, version strings.
3. **Honesty & overclaiming** — every quantitative/causal claim scoped to what the contract permits;
   the gate's "positive but small / NO-GO" stated correctly wherever cited; "self-critique not
   validation"; no burden-of-proof or resilience claims the model can't support.
4. **Completeness & gaps** — missing pieces a reviewer would demand; unsupported leaps; citations
   that don't support their sentence; limitations that are stated vs missing.
5. **External-facing surfaces** — README.md, .zenodo.json, CITATION.cff, LICENSE.md,
   docs/101_CORE_V0_MINIMAL_PUBLISHABLE_MODEL.md, docs/03_ROADMAP.md, external-review/, the two ES
   outreach summaries. Stale versions/DOIs/license/attack-counts; anything that would publicly
   reassert a withdrawn claim.
6. **Clarity, order & readability** — is the argument findable and followable? abstract length,
   Section 6 structure, undefined notation, navigability. (Report as improvements, not blockers,
   unless a claim is unintelligible.)
7. **EN/ES parity** — every section, claim, number, and caveat present in both, saying the same
   thing. Flag any desync.

## Output format
For EACH dimension, write a file `audits/2026-07-10-round3/<dimension-slug>.md` containing:
- **Verdict**: publication-ready on this dimension? yes / no / minor-only.
- **Findings**, each with: severity (Critical / Major / Minor / Nit), exact `file:line` locator,
  what is wrong, why it matters, and a concrete fix. Prefer precise, verifiable, load-bearing
  findings over volume. If you assert a contradiction, quote both sides.
- If a dimension has **no errors**, propose the **highest-value improvements** instead, each scored
  **1–10** for value, with effort and touched files.
Then write `audits/2026-07-10-round3/SUMMARY.md`: an overall publication-ready verdict
(ready / minor-fixes / not-ready), the must-fix blocker list ranked, and the single highest-value
next move.

Be adversarial and specific. Line numbers must be real. Do not invent findings to pad the list; a
short list of true blockers is more valuable than a long list of nits.
