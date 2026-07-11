# Round-11 final confirmation

## Verdict

**MANUSCRIPT-READY (only author-gated deposit-time actions remain).**

## Round-10 blocker confirmation

1. **Propagation — CLEARED.** Every named live surface now says that resolutions are propagated except the
   manuscript-review round's D037–D040, whose remaining corpus propagation is tracked: EN contribution,
   body, and footer (`drafts/paper.md:129-135`, `drafts/paper.md:1068-1073`,
   `drafts/paper.md:1533-1537`); ES mirrors (`drafts/paper.es.md:140-147`,
   `drafts/paper.es.md:1155-1160`, `drafts/paper.es.md:1623-1627`); and public metadata
   (`README.md:31`, `.zenodo.json:5`). The manuscript review is explicitly the fourth round
   (`drafts/paper.md:1087-1099`; ES `drafts/paper.es.md:1174-1186`), while every D037–D040 record says its
   accepted resolution's corpus propagation is tracked
   (`defenses/D037-reserve-of-law-over-allocation-competence.md:5`;
   `defenses/D038-reputational-exclusion-as-unprocessed-sanction.md:5`;
   `defenses/D039-allocation-traceability-versus-preference-secrecy.md:5`;
   `defenses/D040-incumbent-adoption-paradox.md:5`). A live-tree sweep found no remaining false
   “first four rounds fully propagated” ordinal outside dated/historical material.
2. **Gate display label — CLEARED.** The regime call, pool comment, and `[C4]` output all use
   `matched-budget low-info stress` (`scripts/simulation/e5-sp-symmetry-gate.mjs:138`,
   `scripts/simulation/e5-sp-symmetry-gate.mjs:148`, `scripts/simulation/e5-sp-symmetry-gate.mjs:163`). A
   fresh run reproduced 18/18 positive primary cells, pooled median 0.025, `[C4]` 0.092, NO-GO, and negative
   control 0.016; the decision and verdict code is unchanged
   (`scripts/simulation/e5-sp-symmetry-gate.mjs:151-166`).

## Remaining manuscript/repository blockers, ranked

None. The controlling contract keeps matched appraisal budgets qualified as equal only in expectation up to
rounding (`research/claim-and-estimand-contract.md:24-30`) and separates the pre-registered median 0.025 from
the post-hoc ratio-of-sums 0.026 [0.023, 0.029], while denying policy-materiality or calibrated-effect status
(`research/claim-and-estimand-contract.md:59-70`). EN and ES reproduce those boundaries
(`drafts/paper.md:546-566`, `drafts/paper.md:568-618`; `drafts/paper.es.md:598-619`,
`drafts/paper.es.md:621-677`). E7 is expressly superseded as arbiter
(`docs/105_CALIBRATED_BASELINE_EVIDENCE_AND_A036_RESOLUTION.md:3-8`), and earlier multiplier results are
expressly retired provenance (`research/simulation-results.md:3-9`). `npm run check-anchors` reports
`broken=0`, `drifted=0`, `dead-paths=0`, and `dead-wikilinks=0`. The designated dated/historical artifacts
were not treated as current claims.

## Author-gated deposit-time checklist

- [ ] **Edit the live Zenodo v1.12 metadata directly** for the stale title and the count/license/relation/Path-B
  description; this does not require a new DOI (`audits/2026-07-10/remediation-roadmap.md:8-12`,
  `audits/2026-07-10/remediation-roadmap.md:259-267`; `README.md:37`).
- [ ] **Declare the CC-BY/MIT split in machine metadata when depositing v1.13.** The author-action deferral is
  explicit (`audits/2026-07-10/remediation-roadmap.md:54-55`); the current single machine-license field and
  explanatory text/code note remain at `.zenodo.json:11` and `.zenodo.json:23`.
- [ ] **Rewrite the full v1.13 reviewer packets and cover.** The work is explicitly deferred
  (`audits/2026-07-10/remediation-roadmap.md:52-53`), and the existing packets/cover are quarantined as
  superseded (`external-review/Reviewers/README.md:3-8`; `external-review/SENDING_COVER_v1.10.md:1`).
- [ ] **Render, deposit, and verify v1.13 only after the preceding actions.** The umbrella hold and order are
  explicit (`audits/2026-07-10/remediation-roadmap.md:8-12`), with the release sequence at
  `RELEASING.md:25-32`.

