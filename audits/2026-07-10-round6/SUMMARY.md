# Round-6 final confirmation

## Verdict

**NOT-READY.** The gate-block and E7 residuals are cleared, but the roadmap residual is not, and the final
repository scan found three further non-author-gated contradictions. The four deposit-time author actions remain
correctly deferred, but they are not the only work left.

## Round-5 residual confirmation

| Residual | Status | Current-tree confirmation |
|---|---|---|
| Gate-block exactness | **CLEARED** | EN now says K = 500, exactly N = 5000 potential participants considered per project, and interested reach at most N and endogenous (`drafts/paper.md:567-571`); ES mirrors it (`drafts/paper.es.md:619-624`). The central arm is the rounded fixed `m_C = round(expected reports / K)`, with totals equal in expectation up to rounding (`drafts/paper.md:582-586`; ES `drafts/paper.es.md:635-640`). This matches N/K and the exactly-N interest loop (`scripts/simulation/e5-sp-symmetry-gate.mjs:30`, `scripts/simulation/e5-sp-symmetry-gate.mjs:39-46`) plus expected-report accumulation and rounded even bandwidth (`scripts/simulation/e5-sp-symmetry-gate.mjs:68-85`); the frozen design specifies the same expected-total/even-bandwidth comparator (`audits/2026-07-10/symmetry-gate-preregistration.md:19-34`). |
| E7 provenance | **CLEARED** | E7 is explicitly superseded, its figures are conditional apparatus outputs, and its incomplete source queue is off the Path-B publication critical path unless E7 is later cited as verified/calibrated (`research/e7-calibrated-baseline-design.md:3-15`); the six open checks remain visible (`research/audit-evidence-base.md:81-88`). EN qualifies ongoing verification and model-internal scope (`drafts/paper.md:995-1026`, `drafts/paper.md:1381-1387`); ES mirrors it (`drafts/paper.es.md:1077-1111`, `drafts/paper.es.md:1469-1476`). No unqualified `audit-documented` wording remains. |
| Roadmap single state | **NOT CLEARED** | The main current-state prose is forward-looking (`docs/03_ROADMAP.md:16-24`, `docs/03_ROADMAP.md:40-43`; `audits/2026-07-10/remediation-roadmap.md:3-12`), and the removed PDF, rebuild-gate terminology, and direct live-metadata edit are now correctly handled (`audits/2026-07-10/remediation-roadmap.md:130-133`, `audits/2026-07-10/remediation-roadmap.md:153-161`, `audits/2026-07-10/remediation-roadmap.md:259-267`). But the active Phase 8 row still blocks v1.13 on “round-3/4 blockers” (`docs/03_ROADMAP.md:67`). |

## Remaining manuscript/repository blockers, ranked

1. **The controlling contract still overstates exact appraisal-budget symmetry.** It says both arms share the
   “same total appraisal/information budget” and that the gate enforced this (`research/claim-and-estimand-contract.md:24-29`), while the script sets central total capacity through rounded `m_C`, so equality is only up to rounding
   (`scripts/simulation/e5-sp-symmetry-gate.mjs:68-85`). The paper is now exact, but the live roadmap itself
   acknowledges that the contract/runtime wording remains deferred (`audits/2026-07-10/remediation-roadmap.md:73-75`).
2. **The claimed completed propagation conflicts with four defense records.** The paper says all five rounds are
   fully resolved and propagated (`drafts/paper.md:1061-1069`; ES `drafts/paper.es.md:1147-1155`), while D037,
   D038, D039, and D040 each still say “Corpus propagation pending” (`defenses/D037-reserve-of-law-over-allocation-competence.md:3-5`, `defenses/D038-reputational-exclusion-as-unprocessed-sanction.md:3-5`, `defenses/D039-allocation-traceability-versus-preference-secrecy.md:3-5`, `defenses/D040-incumbent-adoption-paradox.md:3-5`). This non-author defect is expressly deferred at `audits/2026-07-10/remediation-roadmap.md:70-72`.
3. **Current repository summaries still misname 0.05 as a materiality gate/bar.** The binding interpretation is a
   research-program rebuild gate on an uncalibrated scale, not policy materiality (`research/claim-and-estimand-contract.md:58-69`), but the current research manifest says “materiality gate” (`research/README.md:17-21`) and the controlling diagnostic note says “materiality bar/gate” (`audits/2026-07-10/symmetry-gate-diagnostics-notes.md:8-11`, `audits/2026-07-10/symmetry-gate-diagnostics-notes.md:42-46`).
4. **The publication roadmap is still round-stale.** Its Phase 8 row names round-3/4 blockers
   (`docs/03_ROADMAP.md:67`) rather than the latest audit, contradicting the current-state rule above.

## Author-gated deposit-time checklist

- **Edit the live Zenodo v1.12 metadata directly:** title, Path-B correction, E7/E8 narrative, 43/five counts,
  mixed-rights note, and companion relation; no new version or DOI is needed (`audits/2026-07-10/remediation-roadmap.md:8-12`, `audits/2026-07-10/remediation-roadmap.md:259-267`; `README.md:37`).
- **Declare mixed CC-BY/MIT in machine metadata at deposit:** correctly deferred at
  `audits/2026-07-10/remediation-roadmap.md:52-55`; the legacy machine field is CC-BY-only while its note records
  the split (`.zenodo.json:11`, `.zenodo.json:23`).
- **Rewrite the full v1.13 reviewer packet set and cover:** correctly deferred at
  `audits/2026-07-10/remediation-roadmap.md:8-12` and `audits/2026-07-10/remediation-roadmap.md:52-53`; the
  existing set is quarantined (`external-review/Reviewers/README.md:3-8`, and all ten packets at line 3).
- **Render, deposit, and verify v1.13 after the preceding actions and all blockers clear:** the ordering is
  explicit at `audits/2026-07-10/remediation-roadmap.md:8-12`; the release sequence is `RELEASING.md:25-32`.

## Verification

- `npm run check-anchors`: `broken=0`, `drifted=0`, `dead-paths=0`, `dead-wikilinks=0`.
- No substantive EN/ES desynchronization was found in the governing blocks above.
- Every locator above was re-read against the current `master` tree.
