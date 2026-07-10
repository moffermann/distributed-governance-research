# Task 3 — Proposed verdict and deposit-time actions

## Proposed verdict: **NOT READY**

The paper is close, and its short-form Path-B result now separates the
pre-registered pooled median `Δ = 0.025` from the post-hoc ratio-of-sums
`Δ = 0.026 [0.023, 0.029]` (`drafts/paper.md:544-552`, “reported separately”).
However, the newly added block that purports to state the confirmatory test “in
full” (`drafts/paper.md:566-568`) does **not** faithfully describe the frozen
experiment; this is the highest-ranked remaining manuscript blocker below. The
closing synthesis does correctly demote every compound ratio
(`drafts/paper.md:1037-1045`, “conditional, model-internal apparatus output”). The
formal mapping is also corrected to `G = 1 − a(1 − r) + γ + R`
(`research/formal-models.md:142-145`). `npm run check-anchors` passed on this tree
with `broken=0`, `drifted=0`, `dead-paths=0`, and `dead-wikilinks=0`.

Those improvements do not yet support **READY-EXCEPT-DEPOSIT-TIME**, because four
fix-now, non-author-gated blockers remain.

## Remaining fix-now blockers

### 1. Blocker — the self-contained gate block is not faithful to the frozen experiment

The English block at `drafts/paper.md:568-600` and its Spanish mirror at
`drafts/paper.es.md:620-655` reproduce five concrete specification errors:

1. It calls `N = 5000` the number of candidate projects and `K = 500` the funded
   count (`drafts/paper.md:568-569`). In the executable, `K` is the candidate-project
   array/loop and `N` is the citizen/valuation loop
   (`scripts/simulation/e5-sp-symmetry-gate.mjs:36-46`); the funded count is
   endogenous to greedy budget fill (`scripts/simulation/e5-sp-symmetry-gate.mjs:52-57`).
2. After defining `net[j]` as truth (`drafts/paper.md:570`), it prints the central
   ranking term as `z(net/cost)` (`drafts/paper.md:577-580`), which reads as oracle
   access despite the adjacent own-noisy-estimate claim. The frozen score is
   `z(hatNet_C/cost)` (`audits/2026-07-10/symmetry-gate-preregistration.md:29-34`),
   exactly as implemented (`scripts/simulation/e5-sp-symmetry-gate.mjs:85-90`).
3. “They differ in exactly one way — the coverage mechanism”
   (`drafts/paper.md:573-574`) is false: the central arm also has bounded credit
   pressure (`drafts/paper.md:577-584`). The preregistration lists the permitted
   composite differences as endogenous routing, adverse voice bias, even central
   bandwidth, **and** bounded central credit pressure
   (`audits/2026-07-10/symmetry-gate-preregistration.md:37-39`). This is a
   credit-versus-coverage composite contrast, not coverage alone.
4. The grid calls `{0, 0.5, 1}` “realized corr(S, P)”
   (`drafts/paper.md:588-589`), but those are the swept **latent** rho values
   (`audits/2026-07-10/symmetry-gate-preregistration.md:44-48`). The script separates
   gate membership by latent `rho` from the realized `corrSP` diagnostic
   (`scripts/simulation/e5-sp-symmetry-gate.mjs:103-113`), and the archived realized
   values are approximately `0.00`, `0.30`, and `0.82`
   (`audits/2026-07-10/symmetry-gate-results.txt:5-14`).
5. A negative-control median near `0.016` is said to indicate “no hidden asymmetry”
   (`drafts/paper.md:596-599`). The frozen guard only required pausing if that median
   exceeded `0.05` (`audits/2026-07-10/symmetry-gate-preregistration.md:64-66`); not
   tripping that guard rules out a **large residual under the pre-set threshold**, not
   every hidden asymmetry.

These errors do not change the stored NO-GO calculation, but they defeat the purpose
of adding a self-contained reviewable methods block. Correct both languages against
the preregistration and executable before publication.

### 2. Major — a universal public-budget criterion survives in both manuscripts

The contribution still calls delivered social value per budget “the criterion
public budgets exist to serve” (`drafts/paper.md:115-117`). The Spanish mirror makes
the same claim: “el criterio que los presupuestos públicos existen para servir”
(`drafts/paper.es.md:125-127`). This directly outruns the paper's own controlling
boundary: its measure is a “bounded, infrastructure-like public-investment slice,”
is not distributionally weighted, and “says nothing about redistribution, equity”
(`drafts/paper.md:1237-1244`). It is therefore a surviving piece of the round-3
public-finance overreach, not a deposit-time metadata issue. Narrow it to one relevant
criterion for the bounded domain, alongside distributional, rights, and incidence
constraints.

### 3. Major — the E7 primary-source condition remains open while E7 remains in the conclusion

The governing E7 design says its verification queue “must clear before the E7
write-up cites any secondary-sourced figure formally”
(`research/e7-calibrated-baseline-design.md:52`). The current evidence base still
labels a “Verification queue (before formal citation in the E7 write-up)” and lists
unresolved CGU, TCU, Peru, Colombia, and Chile checks
(`research/audit-evidence-base.md:81-87`). The paper is candid that “primary-source
verification [is] still in progress” (`drafts/paper.md:1248-1253`), but it still
carries the “audit-documented detection intensity” result into the conclusion
(`drafts/paper.md:1369-1374`). That is only partial clearance of round 3's source-
verification blocker. Before publication, either clear and document the queue or
remove the conclusion-facing E7 claim and consistently identify E7 as a partially
verified, documented-practice-informed scenario.

### 4. Major release-control defect — the two roadmaps still do not state one current state

The document labelled “single current state” says both “ROUND-3 audit in progress”
and that round 3 “then ran and returned NOT READY”
(`audits/2026-07-10/remediation-roadmap.md:3-6`). The live roadmap repeats “round-3
audit is in progress” and continues to gate on already-removed stale-PDF work
(`docs/03_ROADMAP.md:19-23`, `docs/03_ROADMAP.md:39-42`), even though the controlling
roadmap records that PDF as “removed” (`audits/2026-07-10/remediation-roadmap.md:130-133`).
It then calls the v1.13 deposit both “not merely mechanical”
(`docs/03_ROADMAP.md:39-42`) and a “mechanical author step”
(`docs/03_ROADMAP.md:65-66`). This is a fix-now control-surface contradiction, not an
author-gated deposit action. Replace both status blocks with the round-4 verdict and
one explicit gate-to-deposit transition.

A small licensing inconsistency should be repaired in that same pass: the roadmap
marks the “attribution required for everything” overstatement done
(`audits/2026-07-10/remediation-roadmap.md:66-67`), but `RELEASING.md:19-23` still says
exactly “Attribution is required for everything.” The accurate rule is already at
`README.md:39`: CC-BY attribution for text, MIT notice retention for code.

The appropriate target verdict after these four Task-3 fixes is
**READY-EXCEPT-DEPOSIT-TIME**. The overall synthesis must also carry Task 2's
separately reported Spanish outreach-summary provenance regression until it is
cleared (`audits/2026-07-10-round4/task-2-regressions.md:21-25`).

## Are all four author-gated deferrals correctly flagged?

| Author-gated item | Roadmap status | Audit judgment |
|---|---|---|
| Edit the live Zenodo v1.12 metadata | The top gate names “live Zenodo record metadata” as author-gated (`audits/2026-07-10/remediation-roadmap.md:9-11`), and the detailed entry calls the stale title an “author action” (`audits/2026-07-10/remediation-roadmap.md:263-264`). | **PARTIAL.** It is correctly deferred, but “needs a metadata redeposit” at line 264 is wrong. `README.md:37` correctly says the published record can be edited directly “without a new version/DOI.” |
| Declare mixed CC-BY/MIT machine metadata | R2-12 is explicitly `[DEFER]` to the v1.13 Zenodo UI/API author action (`audits/2026-07-10/remediation-roadmap.md:54-55`). | **CORRECT.** The current local mismatch is visible: `.zenodo.json:11` has only `"license": "cc-by-4.0"`, while `.zenodo.json:23` assigns code to MIT. |
| Rewrite all reviewer packets and the cover for v1.13 | The top gate puts “v1.13 reviewer packets” at deposit time (`audits/2026-07-10/remediation-roadmap.md:9-11`), while R2-10 says “refresh at the next review cycle” (`audits/2026-07-10/remediation-roadmap.md:52-53`). The current packet index is safely bannered “SUPERSEDED — DO NOT SEND AS-IS” (`external-review/Reviewers/README.md:3-8`), as is the old cover (`external-review/SENDING_COVER_v1.10.md:1`). | **PARTIAL.** The deferral and quarantine are clear, but the roadmap should choose one trigger: complete the v1.13 rewrite before the deposit package is frozen and before any reviewer circulation. |
| Make the v1.13 deposit | The controlling gate says “Do NOT deposit v1.13” until blockers clear and the author actions are done (`audits/2026-07-10/remediation-roadmap.md:9-11`). | **PARTIAL.** The gating is right, but `docs/03_ROADMAP.md:65-66` prematurely calls it a pending “mechanical author step,” and there is no single explicit deposit checklist/status entry. |

Thus the author-gated actions are recognizable and should not be counted as manuscript
blockers, but the roadmap does **not** yet flag all four with internally consistent,
operational wording.

## Precise deposit-time checklist

Perform these only after the four fix-now blockers above and Task 2's Spanish
outreach-summary regression are cleared.

1. **Correct the already-published v1.12 record directly.** Edit record `21252911`
   without creating a new DOI: change the title suffix from v1.8 to v1.12; add a
   prominent Path-B correction; replace the E7-recalibration/E8-confirmation story;
   change 40 attacks/four rounds to 43/five; replace the stale NC-ND license note
   with CC BY 4.0 for text/research plus MIT for code; and change the companion
   relation from version DOI `10.5281/zenodo.21246089` to the companion concept DOI
   `10.5281/zenodo.21246088`. The repository itself acknowledges the live-title
   defect and direct-edit mechanism at `README.md:37`.
2. **Finish the v1.13 review package.** Rewrite the five EN/ES profile pairs and
   create a v1.13 cover. Each must use Path B, identify the symmetry gate as the one
   confirmatory pre-registered test, separate median `0.025` from post-hoc `0.026`,
   state NO-GO and the uncalibrated selection-only limit, and remove the retired
   multiplier hierarchy. The stale set is explicitly quarantined at
   `external-review/Reviewers/README.md:3-8`.
3. **Freeze and render the release set.** Synchronize final v1.13 title, version, and
   date across the manuscript, `.zenodo.json`, `CITATION.cff`, README, and license
   citation; run the clean reference check; render EN/ES PDF plus accessible HTML;
   and visually inspect them. These are the codified pre-release steps at
   `RELEASING.md:27-30`.
4. **Create the Zenodo v1.13 new-version draft.** Use the v1.12 deposition lineage,
   upload the frozen corpus, manuscript renders, and code, and set version/publication
   date. If an exact version DOI will appear inside an artifact, obtain the draft's
   pre-reserved DOI before final rendering (`RELEASING.md:7-11`).
5. **Declare both licenses in machine-readable Zenodo metadata.** Do not rely on the
   single local `license` value at `.zenodo.json:11`; set CC BY 4.0 for text/research
   and MIT for code through the v1.13 UI/API as already deferred at
   `audits/2026-07-10/remediation-roadmap.md:54-55`. Keep the accurate explanatory
   note at `.zenodo.json:23` and include `LICENSE.md` in the archive.
6. **Publish v1.13 and verify before announcing it.** Query both the new version DOI
   and concept DOI and confirm: v1.13 is latest; title/version/date are final;
   description says Path B and the median/post-hoc statistics correctly; both rights
   are represented; notes and companion relation are correct; and the uploaded file
   inventory matches the frozen manifest. Follow the credential discipline and
   new-version sequence at `RELEASING.md:31` and `RELEASING.md:34-39`.
7. **Sweep post-publication identifiers.** Put the new version DOI/date in the
   preferred citation, README, license citation, release notes, and any v1.13 packet
   references while leaving manuscript headers on the concept DOI. The required
   post-deposit sweep is `RELEASING.md:32`.

## Verification note

The stale Spanish executive-summary PDF is absent from the current tree, and every
file locator quoted above was re-read against the current tree immediately before
this revision was finalized. Live Zenodo record `21252911` was also queried read-only on
2026-07-10: it still reports version `1.12` with a title ending in v1.8, the retired
E7/E8 description, 40 attacks/four rounds, the old NC-ND note, CC-BY-only machine
license, and companion DOI `21246089`. Those live defects are included only in the
author-gated checklist, not in the manuscript-blocker count.
