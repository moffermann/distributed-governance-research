# Round-8 final confirmation

## Verdict

**NOT-READY.** Two round-7 blockers are fully cleared, but propagation and appraisal-budget exactness still
have live residuals. The independent repository scan found two further non-author-gated contradictions. The
four deposit-time author actions remain correctly deferred.

## Round-7 blocker confirmation

| Blocker | Status | Current-tree confirmation |
|---|---|---|
| Propagation overclaim | **NOT CLEARED** | The contribution summaries and public metadata now accurately say that the first four rounds are fully propagated and D037-D040 propagation is tracked (`drafts/paper.md:130-135`; ES `drafts/paper.es.md:142-147`; `README.md:31`; `.zenodo.json:5`). D037-D040 likewise say tracking remains (`defenses/D037-reserve-of-law-over-allocation-competence.md:5`; `defenses/D038-reputational-exclusion-as-unprocessed-sanction.md:5`; `defenses/D039-allocation-traceability-versus-preference-secrecy.md:5`; `defenses/D040-incumbent-adoption-paradox.md:5`). But the manuscript companion-materials footer still says all forty-three attacks are resolved **and propagated** (`drafts/paper.md:1533-1536`; ES `drafts/paper.es.md:1623-1626`), contradicting the accurate body account (`drafts/paper.md:1069-1073`; ES `drafts/paper.es.md:1156-1160`). |
| Appraisal-budget exactness | **NOT CLEARED** | The contract, governing decision, shipped script, and detailed EN/ES methods now say matched in expectation, equal only up to per-project rounding (`research/claim-and-estimand-contract.md:24-30`; `audits/2026-07-10/remediation-roadmap.md:153-158`; `scripts/simulation/e5-sp-symmetry-gate.mjs:77-78`; `drafts/paper.md:579-587`; ES `drafts/paper.es.md:633-642`). Two public-facing Spanish derivatives still say the test equalized both sides' information budget, or their information itself, without the expectation/rounding qualification (`drafts/paper-resumen-ejecutivo.es.md:25`; `drafts/paper-lectura-simple.es.md:28`). |
| docs/105 statistic provenance | **CLEARED** | The banner identifies pre-registered pooled median 0.025 below the 0.05 research-program rebuild gate and separately labels 0.026 [0.023, 0.029] as the post-hoc ratio-of-sums (`docs/105_CALIBRATED_BASELINE_EVIDENCE_AND_A036_RESOLUTION.md:3-8`), matching the controlling contract (`research/claim-and-estimand-contract.md:59-70`). |
| Forward-stable roadmap banner | **CLEARED** | The active banner refers to round 2 and successively numbered folders, with the highest-numbered round authoritative; it no longer hard-codes a terminal round (`audits/2026-07-10/remediation-roadmap.md:3-5`). |

## Remaining manuscript/repository blockers, ranked

1. **The live EN/ES manuscript footer overclaims full propagation.** It says all forty-three attacks were
   propagated (`drafts/paper.md:1533-1536`; `drafts/paper.es.md:1623-1626`) while the manuscript body and
   D037-D040 records say that round's remaining propagation is tracked (`drafts/paper.md:1069-1073`;
   `drafts/paper.es.md:1156-1160`; `defenses/D037-reserve-of-law-over-allocation-competence.md:5`;
   `defenses/D038-reputational-exclusion-as-unprocessed-sanction.md:5`;
   `defenses/D039-allocation-traceability-versus-preference-secrecy.md:5`;
   `defenses/D040-incumbent-adoption-paradox.md:5`).
2. **H018 still presents the retired compound multiplier as current hypothesis evidence.** Its unbannered
   simulation section says the architecture delivers 2.19× and that the E7 multiplier “survives” at 2.22×
   (`knowledge/hypotheses/H018-project-value-thesis-and-measurement.md:234-236`), while its status still calls
   the hypothesis aligned Core v0 (`knowledge/hypotheses/H018-project-value-thesis-and-measurement.md:242-244`).
   This conflicts with the retirement of the stipulated delivery multiplier and headline product
   (`research/claim-and-estimand-contract.md:59-80`) and the manuscript's non-identification bound
   (`drafts/paper.md:15`, `drafts/paper.md:539-566`).
3. **The Spanish audience derivatives overstate symmetry.** The executive summary asserts equal information
   budgets and the plain-language version asserts equal information (`drafts/paper-resumen-ejecutivo.es.md:25`;
   `drafts/paper-lectura-simple.es.md:28`). The design matches only the appraisal budget in expectation up to
   rounding and intentionally gives the arms different information-routing mechanisms
   (`research/claim-and-estimand-contract.md:24-35`).
4. **The defense index still names E7 as D036's current empirical arbiter.** `defenses/README.md:100`
   contradicts its own corrected row at `defenses/README.md:104` and the controlling docs/105 update
   (`docs/105_CALIBRATED_BASELINE_EVIDENCE_AND_A036_RESOLUTION.md:3-8`).

## Author-gated deposit-time checklist

- **Edit the live Zenodo v1.12 metadata directly** for the stale title, Path-B description, E7/E8 narrative,
  attack/round/propagation counts, license note, and companion relation; no new DOI is needed
  (`audits/2026-07-10/remediation-roadmap.md:8-12`, `audits/2026-07-10/remediation-roadmap.md:259-267`;
  `README.md:37`).
- **Declare mixed CC-BY/MIT in machine metadata when depositing v1.13.** The deferral is explicit
  (`audits/2026-07-10/remediation-roadmap.md:52-55`); `.zenodo.json` still has a CC-BY-only machine license
  while its note records the intended text/code split (`.zenodo.json:11`, `.zenodo.json:23`).
- **Rewrite the full v1.13 reviewer packet set and cover.** The work is deferred and quarantined
  (`audits/2026-07-10/remediation-roadmap.md:52-53`; `external-review/Reviewers/README.md:3-8`;
  `external-review/SENDING_COVER_v1.10.md:1`); all ten EN/ES profile packets carry a do-not-send banner at
  line 3.
- **Render, deposit, and verify v1.13 only after the blockers and prior author actions clear.** The required
  order is explicit (`audits/2026-07-10/remediation-roadmap.md:8-12`; `RELEASING.md:25-32`).

## Verification

- `npm run check-anchors`: `broken=0`, `drifted=0`, `dead-paths=0`, `dead-wikilinks=0`.
- Local v1.13 metadata is synchronized; the stale live v1.12 Zenodo metadata is explicitly author-gated.
- Every locator above was re-read against the current tree after the parallel scans completed.
