# Round-10 final confirmation

## Verdict

**NOT-READY.** Two non-author-gated repository blockers remain: a live propagation overclaim and an
incomplete round-9 display-label correction. The gate computation itself is unchanged and reproduces the
settled NO-GO result. The four deposit-time author actions remain correctly deferred.

## Round-9 blocker confirmation

The substantive wording is cleared: the shipped script now says the result is positive in all 18 cells but
small, does not clear the pre-registered 0.05 rebuild gate, and supports the mechanism direction
(`scripts/simulation/e5-sp-symmetry-gate.mjs:165`). The regime call and code comment use
`matched-budget low-info stress` (`scripts/simulation/e5-sp-symmetry-gate.mjs:138`,
`scripts/simulation/e5-sp-symmetry-gate.mjs:148`). However, the `[C4]` output still abbreviates that required
label to `stress-regime median Delta` (`scripts/simulation/e5-sp-symmetry-gate.mjs:163`), so the exact
three-location condition is not fully cleared.

A fresh run reproduced 18/18 positive primary cells, pooled median 0.025, NO-GO, and negative control 0.016
(`scripts/simulation/e5-sp-symmetry-gate.mjs:160-166`). The round-9 commit changes only comments/display
strings; the frozen parameters remain at `scripts/simulation/e5-sp-symmetry-gate.mjs:103` and
`scripts/simulation/e5-sp-symmetry-gate.mjs:116-117`, and the decision logic at
`scripts/simulation/e5-sp-symmetry-gate.mjs:151-156`.

## Remaining manuscript/repository blockers, ranked

1. **Major — the live propagation statement is internally impossible.** The EN paper says the first four
   rounds are fully propagated while D037-D040 still have propagation tracked
   (`drafts/paper.md:1069-1073`), then identifies the manuscript-review round containing D036-D040 as the
   **fourth** round (`drafts/paper.md:1087-1099`). ES mirrors the contradiction
   (`drafts/paper.es.md:1156-1160`, `drafts/paper.es.md:1174-1186`), and the current D037-D040 records each
   confirm tracked propagation (`defenses/D037-reserve-of-law-over-allocation-competence.md:5`;
   `defenses/D038-reputational-exclusion-as-unprocessed-sanction.md:5`;
   `defenses/D039-allocation-traceability-versus-preference-secrecy.md:5`;
   `defenses/D040-incumbent-adoption-paradox.md:5`). The same overclaim appears in the contribution and footer
   (`drafts/paper.md:129-135`, `drafts/paper.md:1535-1537`; ES `drafts/paper.es.md:140-148`,
   `drafts/paper.es.md:1625-1627`), `README.md:31`, and `.zenodo.json:5`. Resolution status and propagation
   completeness must be stated without the false ordinal claim.
2. **Minor but release-blocking — `[C4]` does not use the required regime label.** The source and fresh
   runtime output say `[C4] stress-regime median Delta` rather than `[C4] matched-budget low-info stress ...`
   (`scripts/simulation/e5-sp-symmetry-gate.mjs:163`), contrary to the exact round-10 confirmation condition.

No other blocker was found. The E7-arbiter, appraisal-budget, materiality-label, retired-multiplier, and 0.026
provenance sweeps are otherwise clean; the pre-registered median 0.025 and post-hoc ratio-of-sums 0.026
[0.023, 0.029] remain correctly separated in the contract and EN/ES paper
(`research/claim-and-estimand-contract.md:59-70`; `drafts/paper.md:546-566`,
`drafts/paper.es.md:598-610`). Dated audit/review material and `docs/03_ROADMAP_HISTORY.md` were treated as
historical, not blockers. `npm run check-anchors` reports `broken=0`, `drifted=0`, `dead-paths=0`, and
`dead-wikilinks=0`; local v1.13 version metadata is synchronized (`.zenodo.json:2`, `.zenodo.json:12`;
`CITATION.cff:7`, `CITATION.cff:20`; `README.md:31`, `README.md:37`).

## Author-gated deposit-time checklist

- **Edit the live Zenodo v1.12 metadata directly** for the stale title and the Path-B/count/license/relation
  description; no new DOI is required (`audits/2026-07-10/remediation-roadmap.md:8-12`,
  `audits/2026-07-10/remediation-roadmap.md:259-267`; `README.md:37`).
- **Declare mixed CC-BY/MIT in machine metadata when depositing v1.13.** The deferral is explicit
  (`audits/2026-07-10/remediation-roadmap.md:52-55`); `.zenodo.json` still has one CC-BY machine license while
  its note records the text/code split (`.zenodo.json:11`, `.zenodo.json:23`).
- **Rewrite the full v1.13 reviewer packets and cover.** They remain quarantined and pending
  (`external-review/Reviewers/README.md:3-8`; `external-review/SENDING_COVER_v1.10.md:1`); all ten EN/ES
  profile packets carry a do-not-send banner at line 3.
- **After the repository blockers and prior author actions clear, render, deposit, and verify v1.13** in the
  prescribed order (`audits/2026-07-10/remediation-roadmap.md:8-12`; `RELEASING.md:25-32`).

Every locator above was re-read against the current tree after the parallel scans completed.
