# Round-7 final confirmation

## Verdict

**NOT-READY.** Two of the four round-6 blockers are cleared, but the propagation and forward-stability
blockers are not. The independent repository scan found two further non-author-gated claim/provenance
defects. The four deposit-time author actions remain correctly deferred, but they are not the only work left.

## Round-6 blocker confirmation

| Blocker | Status | Current-tree confirmation |
|---|---|---|
| Contract §2 appraisal-budget exactness | **CLEARED** | The contract now says the appraisal/information budget is matched in expectation and equal only up to per-project rounding (`research/claim-and-estimand-contract.md:24-30`). This matches the rounded central bandwidth in the shipped gate (`scripts/simulation/e5-sp-symmetry-gate.mjs:68-85`) and the paper's exact account (`drafts/paper.md:582-586`; ES `drafts/paper.es.md:635-640`). |
| Five-round propagation overclaim in the paper | **NOT CLEARED** | Section 7 is now accurate: only the first four rounds are fully propagated, while D037-D040 have remaining propagation (`drafts/paper.md:1068-1072`; ES `drafts/paper.es.md:1154-1158`). But the paper's contribution summary still says **every resolution** was propagated (`drafts/paper.md:129-135`; ES `drafts/paper.es.md:140-146`), contradicting the four live `Corpus propagation pending` records (`defenses/D037-reserve-of-law-over-allocation-competence.md:3-5`, `defenses/D038-reputational-exclusion-as-unprocessed-sanction.md:3-5`, `defenses/D039-allocation-traceability-versus-preference-secrecy.md:3-5`, `defenses/D040-incumbent-adoption-paradox.md:3-5`). |
| Controlling gate label | **CLEARED** | The current controlling surfaces use **research-program rebuild gate**, not materiality gate/bar (`research/README.md:17-21`; `audits/2026-07-10/symmetry-gate-diagnostics-notes.md:8-11`, `audits/2026-07-10/symmetry-gate-diagnostics-notes.md:42-46`). Retirement banners do the same; old wording remains only in archived audit history. |
| Forward-stable roadmap state | **NOT CLEARED** | `docs/03_ROADMAP.md` uses the forward-stable “latest audit” formulation (`docs/03_ROADMAP.md:19-24`, `docs/03_ROADMAP.md:40-43`, `docs/03_ROADMAP.md:67`). The active status banner in the controlling remediation roadmap still says remediation is “in progress” and hard-codes audit coverage as `round2/...round5`, already omitting rounds 6 and 7 (`audits/2026-07-10/remediation-roadmap.md:3-5`). |

## Remaining manuscript/repository blockers, ranked

1. **Propagation is still overclaimed on manuscript and public metadata surfaces.** In addition to the paper
   summary above, `README.md:31` says each accepted resolution was propagated, and `.zenodo.json:5` says all
   were propagated. Both contradict D037-D040's pending status at line 5. This is a local fix-now defect,
   distinct from the author-gated edit of the already-live Zenodo record.
2. **Exact appraisal-budget equality is still claimed outside the corrected contract.** The live governing
   decision says “equal appraisal budget” (`audits/2026-07-10/remediation-roadmap.md:153-158`), and the shipped
   gate's inline description says “same TOTAL appraisal budget” immediately before rounding `mC`
   (`scripts/simulation/e5-sp-symmetry-gate.mjs:77-78`). The implementation and controlling contract establish
   equality only in expectation up to per-project rounding (`research/claim-and-estimand-contract.md:24-30`).
3. **A controlling update conflates the post-hoc statistic with the pre-registered gate statistic.** The
   docs/105 banner reports `~0.026` as the quantity below the `0.05` gate without identifying it as the
   post-hoc ratio-of-sums (`docs/105_CALIBRATED_BASELINE_EVIDENCE_AND_A036_RESOLUTION.md:3-7`). The controlling
   contract assigns the gate to the pre-registered pooled median `0.025` and reports `0.026 [0.023, 0.029]`
   separately as post-hoc (`research/claim-and-estimand-contract.md:59-70`).
4. **The active remediation status is round-stale.** Its `round2/...round5` current-state range and “in
   progress” wording are not forward-stable (`audits/2026-07-10/remediation-roadmap.md:3-5`).

## Author-gated deposit-time checklist

- **Edit the live Zenodo v1.12 metadata directly:** title, Path-B correction, E7/E8 narrative, 43/five counts,
  mixed-rights note, and companion relation; no new version or DOI is needed
  (`audits/2026-07-10/remediation-roadmap.md:8-12`, `audits/2026-07-10/remediation-roadmap.md:259-267`;
  `README.md:37`).
- **Declare mixed CC-BY/MIT in machine metadata at deposit:** correctly deferred as an author action
  (`audits/2026-07-10/remediation-roadmap.md:52-55`); `.zenodo.json` remains CC-BY-only in its machine license
  field while recording the intended split in its note (`.zenodo.json:11`, `.zenodo.json:23`).
- **Rewrite the full v1.13 reviewer packet set and cover:** correctly deferred and quarantined
  (`audits/2026-07-10/remediation-roadmap.md:52-53`; `external-review/Reviewers/README.md:3-8`;
  `external-review/SENDING_COVER_v1.10.md:1`). All ten EN/ES profile packets carry the do-not-send banner at
  line 3.
- **Render, deposit, and verify v1.13 only after blockers and the preceding author actions clear:** the order
  is explicit (`audits/2026-07-10/remediation-roadmap.md:8-12`; `RELEASING.md:25-32`).

## Verification

- `npm run check-anchors`: `broken=0`, `drifted=0`, `dead-paths=0`, `dead-wikilinks=0`.
- No additional substantive EN/ES desynchronization was found; the propagation defect is mirrored in both.
- Every locator above was re-read against the current tree after the parallel scans completed.
