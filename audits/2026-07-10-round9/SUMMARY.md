# Round-9 final confirmation

## Verdict

**NOT-READY.** The four round-8 blockers are cleared, but one non-author-gated repository blocker remains:
the live shipped symmetry-gate script misstates its own NO-GO result. The deposit-time author actions remain
correctly deferred.

## Round-8 blocker confirmation

| Blocker | Status | Current-tree confirmation |
|---|---|---|
| Propagation qualification | **CLEARED** | The companion-materials footer now qualifies propagation as the first four rounds complete and D037-D040 tracked (`drafts/paper.md:1535-1537`; ES `drafts/paper.es.md:1625-1627`), matching the body (`drafts/paper.md:1069-1073`; ES `drafts/paper.es.md:1156-1160`) and all four defense records (`defenses/D037-reserve-of-law-over-allocation-competence.md:5`; `defenses/D038-reputational-exclusion-as-unprocessed-sanction.md:5`; `defenses/D039-allocation-traceability-versus-preference-secrecy.md:5`; `defenses/D040-incumbent-adoption-paradox.md:5`). |
| H018 retired multiplier | **CLEARED** | The Path-B banner retires the multiplier, labels 2.19x/2.22x conditional model-internal outputs, and supersedes the “recalibrated / survives” framing (`knowledge/hypotheses/H018-project-value-thesis-and-measurement.md:3-10`); the detailed paragraph repeats the in-model/conditional/retired qualifications (`knowledge/hypotheses/H018-project-value-thesis-and-measurement.md:243-245`). |
| ES outreach appraisal budget | **CLEARED** | Both outreach drafts now say the appraisal budget is matched in expectation and information routing differs by design (`drafts/paper-resumen-ejecutivo.es.md:25`; `drafts/paper-lectura-simple.es.md:28`), matching the controlling contract (`research/claim-and-estimand-contract.md:24-37`). |
| D036 arbiter | **CLEARED** | The defense index names the symmetry gate (NO-GO) as the current arbiter and E7 as superseded (`defenses/README.md:100`, `defenses/README.md:104`), matching the controlling update (`docs/105_CALIBRATED_BASELINE_EVIDENCE_AND_A036_RESOLUTION.md:3-8`). |

## Remaining manuscript/repository blockers, ranked

1. **Major — the live shipped gate script says the positive advantage “does not survive.”** A fresh run of
   the script reports 18/18 positive primary cells and a pooled median of 0.025 that fails only the
   pre-registered 0.05 rebuild condition (`scripts/simulation/e5-sp-symmetry-gate.mjs:157-159`), but its final
   NO-GO message says “advantage does not survive” (`scripts/simulation/e5-sp-symmetry-gate.mjs:162`). That
   contradicts the binding interpretation — positive in all 18 cells but small, with the mechanism direction
   supported (`research/claim-and-estimand-contract.md:59-70`) — and the EN/ES manuscript
   (`drafts/paper.md:609-617`; `drafts/paper.es.md:667-676`). The same script also retains the imprecise
   paper-facing “adversarial” label (`scripts/simulation/e5-sp-symmetry-gate.mjs:135`,
   `scripts/simulation/e5-sp-symmetry-gate.mjs:145`, `scripts/simulation/e5-sp-symmetry-gate.mjs:160`) where
   the manuscript uses “matched-budget low-information stress regime” (`drafts/paper.md:603-608`). The dated,
   frozen output under `audits/2026-07-10/` is legitimately historical and already has the controlling
   clarification (`audits/2026-07-10/symmetry-gate-diagnostics-notes.md:42-49`); the blocker is the current
   executable's uncaveated runtime wording.

No other blocker was found. Propagation, E7-arbiter, and equal-information sweeps are clean. Current narrative
files bearing 2.19x/2.22x/2.26x carry retirement/supersession framing (including `drafts/paper.md:540-566`,
`drafts/paper.es.md:591-610`, `docs/101_CORE_V0_MINIMAL_PUBLISHABLE_MODEL.md:5-12`,
`research/simulation-results.md:3-9`, `research/e7-calibrated-baseline-design.md:3-8`, and
`research/e8-behavioral-participation-design.md:3-7`). Raw result files are historical provenance artifacts;
`docs/03_ROADMAP_HISTORY.md:1-5`, dated `audits/2026-07-10/` reports, and
`external-review/manuscript-v1.6-round/` are explicitly historical, not live claims. Median 0.025 and post-hoc
ratio-of-sums 0.026 [0.023, 0.029] are correctly distinguished in the contract and EN/ES paper
(`research/claim-and-estimand-contract.md:59-70`; `drafts/paper.md:546-566`; `drafts/paper.es.md:598-610`).

## Author-gated deposit-time checklist

- **Edit the live Zenodo v1.12 metadata directly** for title, Path-B description, E7/E8 narrative,
  attack/round/propagation counts, license note, and companion relation; no new DOI is needed
  (`audits/2026-07-10/remediation-roadmap.md:8-12`, `audits/2026-07-10/remediation-roadmap.md:259-267`;
  `README.md:37`).
- **Declare mixed CC-BY/MIT in machine metadata when depositing v1.13.** The deferral is explicit
  (`audits/2026-07-10/remediation-roadmap.md:52-55`); `.zenodo.json` still has the single CC-BY machine
  license while its note records the text/code split (`.zenodo.json:11`, `.zenodo.json:23`).
- **Rewrite the full v1.13 reviewer packets and cover.** They are deferred and quarantined
  (`audits/2026-07-10/remediation-roadmap.md:52-53`; `external-review/Reviewers/README.md:3-8`;
  `external-review/SENDING_COVER_v1.10.md:1`); every EN/ES profile packet has a do-not-send banner at line 3.
- **Render, deposit, and verify v1.13 only after the repository blocker and prior author actions clear.** The
  required order is explicit (`audits/2026-07-10/remediation-roadmap.md:8-12`; `RELEASING.md:25-32`).

## Verification

- `npm run check-anchors`: `broken=0`, `drifted=0`, `dead-paths=0`, `dead-wikilinks=0`.
- The current gate script reproduced 18/18 positive primary cells, median 0.025, and NO-GO; its post-hoc
  diagnostic reproduced ratio-of-sums 0.0260 with world-cluster interval [0.0233, 0.0288].
- Local v1.13 version metadata is synchronized (`.zenodo.json:2`, `.zenodo.json:12`; `CITATION.cff:7`,
  `CITATION.cff:20`; `README.md:31`, `README.md:37`). EN/ES key claims are aligned.
- Every locator above was re-read against the current tree after the parallel scans completed.
