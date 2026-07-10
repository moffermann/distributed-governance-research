# Round-5 final verification

## Verdict

**NOT-READY.** Round 4 repaired most manuscript defects, and no wholly new contradiction was introduced. Three
non-author-gated residuals remain: the self-contained gate block is not fully implementation-exact, E7's
mandatory source-verification condition is still open while formal E7 figures remain in the paper, and the
publication-control roadmaps still contradict the current state. Therefore more than the four excluded
deposit-time author actions remains.

## Round-4 findings

| Round-4 finding | Status | Current-tree verification |
|---|---|---|
| Gate: K/N/funded-set identity | **PARTIAL** | The paper now says “K = 500 candidate projects” and uses a greedy, endogenous funded set (`drafts/paper.md:569-576`; ES `drafts/paper.es.md:621-629`), matching the project loop and greedy fill (`scripts/simulation/e5-sp-symmetry-gate.mjs:30`, `scripts/simulation/e5-sp-symmetry-gate.mjs:39-46`, `scripts/simulation/e5-sp-symmetry-gate.mjs:52-57`). Residual: “up to N = 5000 potential participants” (`drafts/paper.md:570`; ES `drafts/paper.es.md:622`) is not exact: the script runs exactly N potential-participant trials per project, while interested reach is up to N (`scripts/simulation/e5-sp-symmetry-gate.mjs:46`). The claimed “equal” central appraisal total is also implemented only through rounded fixed bandwidth `mC` (`drafts/paper.md:581-584`; `scripts/simulation/e5-sp-symmetry-gate.mjs:77-85`). |
| Gate: central ranked on true net | **CLEARED** | “its own noisy ĥNet_C” and `z(ĥNet_C/cost)` appear at `drafts/paper.md:581-586` (ES `drafts/paper.es.md:635-640`), matching the frozen score (`scripts/simulation/e5-sp-symmetry-gate.mjs:85-90`; `audits/2026-07-10/symmetry-gate-preregistration.md:29-34`). |
| Gate: “differ in exactly one way” | **CLEARED** | The legitimate self-routing, adverse-voice, even-appraisal, and bounded-credit asymmetries are enumerated at `drafts/paper.md:591-594` (ES `drafts/paper.es.md:646-650`), matching the preregistration at `audits/2026-07-10/symmetry-gate-preregistration.md:37-39`. |
| Gate: latent ρ mislabeled realized correlation | **CLEARED** | The text now says latent `ρ ∈ {0, 0.5, 1}` and realized `corr(S,P) ≈ 0.00, 0.30, 0.82` (`drafts/paper.md:597-599`; ES `drafts/paper.es.md:653-655`); the script identifies correlation as a diagnostic and gates on latent rho (`scripts/simulation/e5-sp-symmetry-gate.mjs:103-113`). |
| Gate: λ=0 overinterpreted | **CLEARED** | `≈ 0.016` is “within the pause guard (no hidden asymmetry flagged)” (`drafts/paper.md:605-609`; ES `drafts/paper.es.md:661-666`), not proof of no asymmetry; this matches the frozen guard (`audits/2026-07-10/symmetry-gate-preregistration.md:64-66`). |
| Contract omitted the post-hoc status of 0.026 | **CLEARED** | The contract now says “**post-hoc** pooled ratio-of-sums” and keeps it separate from the preregistered median (`research/claim-and-estimand-contract.md:63-67`). |
| Contribution universalized the public-budget criterion | **CLEARED** | It now says “one relevant criterion for this bounded slice” and names omitted distributional and rights constraints (`drafts/paper.md:115-118`; ES `drafts/paper.es.md:125-128`). |
| ES outreach conflated the gate with materiality/audit calibration | **CLEARED** | The executive summary calls 0.05 a research-decision threshold on an uncalibrated scale, “no un umbral de materialidad de política” (`drafts/paper-resumen-ejecutivo.es.md:25`), and calls the simulated world stylized and uncalibrated (`drafts/paper-resumen-ejecutivo.es.md:39`); the plain-language companion does the same (`drafts/paper-lectura-simple.es.md:37`). |
| E7 source-verification condition | **PARTIAL** | The conclusion is now caveated (`drafts/paper.md:1379-1385`; ES `drafts/paper.es.md:1467-1474`), but E7 still says the queue “must clear” before formal secondary-source use (`research/e7-calibrated-baseline-design.md:52`), all six queue groups remain open (`research/audit-evidence-base.md:81-88`), and the paper still reports exact E7 figures and “audit-documented” intensity/bands (`drafts/paper.md:993-1005`, `drafts/paper.md:1014-1024`). |
| Single roadmap/release state | **NOT CLEARED** | The controlling banner says Round 4 ran (`audits/2026-07-10/remediation-roadmap.md:3-13`), while `docs/03_ROADMAP.md:19-23` and `docs/03_ROADMAP.md:39-42` still say Round 3 is in progress and retain the already-removed PDF as a gate. The phase table instead says Round-3/4 blockers (`docs/03_ROADMAP.md:64-66`). |
| Ten reviewer packets lacked direct quarantine | **CLEARED** | The index is “SUPERSEDED — DO NOT SEND AS-IS” and names the v1.13 rewrite (`external-review/Reviewers/README.md:3-8`); all ten EN/ES packets now carry equivalent line-3 banners (for example `external-review/Reviewers/Systems-Architect/review-packet.md:3` and `external-review/Reviewers/Systems-Architect/review-packet.es.md:3`). |
| Limitation used an unresolvable `§ estimand contract` | **CLEARED** | The limitation now links the contract directly (`drafts/paper.md:1252-1257`; ES `drafts/paper.es.md:1337-1343`). |
| RELEASING universalized attribution | **CLEARED** | It now distinguishes CC-BY attribution for text from MIT notice retention for code (`RELEASING.md:19-23`), matching `LICENSE.md:5`. |

## New or residual non-author blockers, ranked

1. **E7 provenance is still procedurally incomplete.** The manuscript acknowledges ongoing verification but
   retains exact E7 figures and “audit-documented” language despite the binding must-clear condition and open
   queue cited above. Clear the source crosswalk, or remove/rename the formal documented-source claims and
   reconcile E7's governing status.
2. **Publication control still has no single current state.** Besides the stale Round-3/PDF language above,
   the controlling roadmap calls 0.05 a “materiality bar” (`audits/2026-07-10/remediation-roadmap.md:154-161`),
   contrary to the uncalibrated rebuild rule (`research/claim-and-estimand-contract.md:62-69`), and says the
   live-title fix needs a metadata redeposit (`audits/2026-07-10/remediation-roadmap.md:259-265`), contradicting
   its own direct-edit rule (`audits/2026-07-10/remediation-roadmap.md:61-62`) and `README.md:37`.
3. **The one confirmatory methods block needs two exactness edits.** State exactly N = 5000 potential
   participants per project, with interested reach endogenous, and describe central bandwidth as the rounded
   fixed `mC` implementation rather than an exactly equal realized appraisal total.

No separate new regression was found in the EN/ES mirrors, contribution list, contract, outreach summaries,
license guidance, or the ten new packet-quarantine banners.

## Author-gated deposit-time checklist

- **Edit the live Zenodo v1.12 metadata directly:** title, Path-B correction, E7/E8 narrative, 43/five counts,
  mixed-rights note, and companion relation. It is flagged at
  `audits/2026-07-10/remediation-roadmap.md:10-13`; `README.md:37` correctly says this direct metadata edit
  needs no new version/DOI. The contradictory detailed roadmap instruction at
  `audits/2026-07-10/remediation-roadmap.md:259-265` is a fix-now
  documentation defect, not an additional author action.
- **Declare mixed CC-BY/MIT in machine metadata at deposit:** correctly deferred at
  `audits/2026-07-10/remediation-roadmap.md:55-56`. The local legacy machine field remains CC-BY-only
  (`.zenodo.json:11`) while its note records the split (`.zenodo.json:23`).
- **Rewrite the full v1.13 reviewer packet set and cover:** correctly listed at
  `audits/2026-07-10/remediation-roadmap.md:10-13` and deferred at
  `audits/2026-07-10/remediation-roadmap.md:53-54`; the current set is quarantined at
  `external-review/Reviewers/README.md:3-8` and each packet's line 3.
- **Render, deposit, and verify v1.13:** correctly sequenced after the other author actions at
  `audits/2026-07-10/remediation-roadmap.md:10-13`; the release procedure is `RELEASING.md:25-32`. Do not
  deposit until the three fix-now residuals above are cleared.

## Verification

- `npm run check-anchors`: `broken=0`, `drifted=0`, `dead-paths=0`, `dead-wikilinks=0`.
- `drafts/paper-resumen-ejecutivo.es.pdf` is absent, consistent with its recorded removal at
  `audits/2026-07-10/remediation-roadmap.md:131-134`.
- Every locator above was re-read against the current `master` tree after reconciliation.
