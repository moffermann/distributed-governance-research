# Round-2 independent audit: errors, contradictions, and gaps

**Date:** 2026-07-10 — round 2

The symmetry-gate decision reproduces exactly and remains NO-GO, but the current repository is not as internally clean as the remediation roadmap claims. I found no Critical defect, yet I found seven Major defects: two E4 interpretation errors in the paper, a conflation of the pre-registered median with a post-hoc ratio-of-sums, incomplete Path-B language, contradictory/stale release controls, an obsolete companion DOI, and incomplete machine-readable mixed-license metadata. The English and Spanish papers are numerically synchronized on the retired multiplier and gate result; their material errors are mostly synchronized rather than translation drift. The local v1.13 paper/license/CFF/version headers are coherent, but the known pending v1.13 deposit means the public concept DOI still resolves to historical v1.12; that expected pending state is not counted below as a fresh defect.

## Critical

None confirmed.

## Major

### M1. The paper reverses the E4 parity boundary in prose and misreads a central win as a distributed win

The abstract gives the correct analytical inequality, `β < 1 − η`, but then says the advantage falls to parity “where a fully accountable planner faces a platform that silences the harmed” (`drafts/paper.md:38-43`; Spanish mirror `drafts/paper.es.md:42-48`). Those words mean `η=1, β=1`; the stated equality is instead `β=1−η`, hence `β=0` when `η=1`. The recorded `(η=1,β=1)` cell is `0.50`, and the results define ratios below one as central wins (`research/e4-v4-symmetric-frontier-results.txt:6-14`).

The later explanation repeats the sign error: it says measured parity lies “inside the distributed's side” and cites `(η=1,β=0) → 0.89×` (`drafts/paper.md:835-840`; Spanish `drafts/paper.es.md:906-912`). The analytical note makes the same claim (`research/e4-analytical-backbone.md:75-80`), although the engine defines advantage as distributed/central (`scripts/simulation/e4-v4-symmetric-frontier.mjs:21-22`) and the result file says `0.89<1` is a central win (`research/e4-v4-symmetric-frontier-results.txt:12-14`). This is a round-1 miss, not an EN/ES desynchronization.

**Correct value/fix:** state theoretical, noise-free parity as `β=1−η`; remove the “accountable plus silenced” description. Qualify the closed-form law as a bias-only result. For the implemented full simulation, say that at `(1,0)` the central arm wins `D/C=0.89`; the current claim that distributed variance is lower is falsified by the reported cell and must be re-derived or removed.

### M2. The paper assigns the E4 `~1.8×` ratio to the wrong denominator

The paper says the E4 frontier ranges from parity to “~1.8× of a full-information oracle” (`drafts/paper.md:785-793`; Spanish mirror `drafts/paper.es.md:853-861`). The engine instead defines `Advantage = distributed / central` (`scripts/simulation/e4-v4-symmetric-frontier.mjs:21-22`), and the stored `1.82` is printed under that distributed/central definition (`research/e4-v4-symmetric-frontier-results.txt:1-14`). The benchmark-normalized table reports the distributed arm at at most about 71% and the central arm at at most about 80%, not 180% of the benchmark (`research/e4-v4-symmetric-frontier-results.txt:19-45`).

**Correct value/fix:** write “a distributed/central ratio from rough parity to about 1.8×.” If benchmark-normalized levels are intended, report the actual `% benchmark` figures. Replace the residual “oracle” label with “full-information benchmark.”

### M3. The Path-B rewrite compares a post-hoc ratio-of-sums to a gate pre-registered on a different estimand

The pre-registration defines per-world `Delta=(D−C)/O` and gates the **pooled median** at `0.05` (`audits/2026-07-10/symmetry-gate-preregistration.md:41-42,52-59`). The frozen gate implements that rule (`scripts/simulation/e5-sp-symmetry-gate.mjs:148-152`) and returns median `0.025` (`audits/2026-07-10/symmetry-gate-results.txt:82-90`). The later diagnostics instead calculate the ratio-of-sums `(ΣD−ΣC)/ΣO=0.0260` and attach the post-hoc world-cluster interval `[0.0233,0.0288]` (`scripts/simulation/e5-sp-symmetry-gate-diagnostics.mjs:78-89`; the diagnostic is explicitly post-hoc at `:2-10`).

The paper reports only `0.026 [0.023,0.029]` and calls it below “its pre-registered 0.05 materiality gate” (`drafts/paper.md:69-79,611-618`; Spanish `drafts/paper.es.md:77-87,668-676`). The contract partially distinguishes median and ratio-of-sums but reuses `Δ` and defines the expectation-level formula with random `O` outside the expectation (`research/claim-and-estimand-contract.md:13-19,58-65`). Thus the remediation conflates two estimands and obscures that the cluster analysis was post-hoc. The numbers and NO-GO verdict are unchanged.

**Correct value/fix:** define `Δ_w=(D_w−C_w)/O_w` and report the pre-registered result `median(Δ_w)=0.025<0.05`. Separately define `Δ_R=(E[D]−E[C])/E[O]` and label the post-hoc estimate `0.0260`, world-cluster interval `[0.0233,0.0288]`. Use these distinct symbols and provenance in the contract and both papers.

### M4. Path B is incomplete in the conclusion and limitations: old component effects still read as surviving effectiveness results

The conclusion locally qualifies `+43%` as “in the model,” but immediately states without the same qualifier that social prioritization delivers `+53-54%`; only the **compound** is then explicitly disclaimed (`drafts/paper.md:1318-1335`; Spanish `drafts/paper.es.md:1402-1421`). The contract permits the tested selection contrast only and says a delivery effect requires a separately identified future model (`research/claim-and-estimand-contract.md:21-22,38-44`). Leaving the old `+53-54%` selection component foregrounded beside the new small symmetric result invites the exact inference Path B retired.

The limitations section also says the paper answers whether the architecture “delivers more value” and calls “the simulation's status-quo baseline” audit-anchored (`drafts/paper.md:1207-1228`; Spanish `drafts/paper.es.md:1290-1312`). Under the controlling state, only the earlier apparatus had the audit-parameterized delivery baseline; the gate is an uncalibrated selection-mechanism test, not a validated Core v0 implementation (`research/claim-and-estimand-contract.md:46-68`). This is a half-applied remediation, not a new simulation result.

**Correct value/fix:** either remove `+43%/+53-54%` from the conclusion or introduce both as “conditional outputs of the earlier, superseded apparatus.” State that real-world delivery superiority is unverified and that the current gate tests only a stylized selection mechanism. Reserve “audit-parameterized baseline” for E7's historical apparatus.

### M5. The current remediation/status/reviewer control surfaces contradict the final licensing and version state

The working remediation roadmap's top banner still says the final choice is Option B, dual licensing, two separate records, and two pending v1.13 deposits (`audits/2026-07-10/remediation-roadmap.md:3-10`). Its operative T3.1 section says the opposite: final full openness, CC BY/MIT, one record, and “No conflict remains” (`audits/2026-07-10/remediation-roadmap.md:117-125`). This contradiction was introduced by the license reversal being applied only to the later section.

The nominal live roadmap says v1.12's live status and the license decision remain pending (`docs/03_ROADMAP.md:16-20,35-37,59-61`), while the paper and README identify v1.13 as the working draft and v1.12/21252911 as verified live (`drafts/paper.md:3-5`; `README.md:29-39`). Reviewer-facing current paths are also stale: the reviewer README says packets “now” target v1.8 (`external-review/Reviewers/README.md:35-45`); the self-described current/superseding cover still instructs reviewers to read v1.10 (`external-review/SENDING_COVER_v1.10.md:1-8`); and the publishable model points the current `drafts/paper.md` path to v1.7/21199738 (`docs/101_CORE_V0_MINIMAL_PUBLISHABLE_MODEL.md:7-10`). The academic EN packet says seven experiments/five pre-registered, while its ES mirror says eight/six (`external-review/Reviewers/Academic/review-packet.md:38-46`; `external-review/Reviewers/Academic/review-packet.es.md:38-46`).

**Correct value/fix:** make the remediation banner say one v1.13 record under CC BY/MIT. Update `docs/03` to “v1.13 working draft; v1.12 live; only v1.13 deposit pending; license resolved.” Create a v1.13 Path-B reviewer cover (or banner the v1.10 cover historical), and update `docs/101` and every active packet to the v1.13/v1.12 distinction and the correct experiment counts.

### M6. The paper's companion citation resolves to a superseded version that predates claims the paper relies on

The paper relies on corrected five-family model-panel and cross-layer-collusion results (`drafts/paper.md:502-517,1280-1304`; Spanish `drafts/paper.es.md:549-566,1364-1389`) but its bibliography cites exact DOI `10.5281/zenodo.21246089` (`drafts/paper.md:1446`; Spanish `drafts/paper.es.md:1531`). The current cover identifies v0.5 as exact DOI `21249060` while incorrectly calling `21246089` the concept DOI (`external-review/SENDING_COVER_v1.10.md:7-8`). A read-only Zenodo API check verified `21246089` is v0.4, `21249060` is v0.5, and their actual concept DOI is `10.5281/zenodo.21246088`; the local correction note says the panel was corrected after a construct bug and names the corrected V3 results (`knowledge/open-questions/verification-throughput-design.md:67-69`).

**Correct value/fix:** cite concept DOI `10.5281/zenodo.21246088`, or cite the exact version that contains every relied-on corrected claim (at least v0.5/`21249060` for the correction identified by the current cover). Do not call exact v0.4 DOI `21246089` a concept DOI.

### M7. Prepared v1.13 deposit metadata machine-labels a mixed-license upload only as CC BY

The Zenodo metadata says the upload contains the corpus, working paper, and code (`.zenodo.json:2-5`) but exposes only `"license": "cc-by-4.0"` (`.zenodo.json:11`), while its notes say code is MIT (`.zenodo.json:23`). `LICENSE.md` likewise assigns text to CC BY and scripts to MIT (`LICENSE.md:5-15`). Zenodo's current official guidance explicitly supports declaring all licenses for mixed uploads; a single CC BY machine field does not express the code's MIT license ([Zenodo licenses and rights](https://help.zenodo.org/docs/deposit/describe-records/licenses/)). The exact behavior of this legacy `.zenodo.json` field in a future v1.13 draft is **unverified** because no v1.13 draft was available.

**Correct value/fix:** ensure both CC-BY-4.0 and MIT appear in the v1.13 record's machine-readable rights before publication, using the Zenodo UI/API if `.zenodo.json` cannot encode multiple values. Verify the unpublished record through the API; keep `LICENSE.md` inside the upload.

## Minor

### m1. “Same total appraisal budget” is only approximately true

The contract says both arms have the same total appraisal/information budget (`research/claim-and-estimand-contract.md:24-29`), and the gate runtime says “same ... budget” (`scripts/simulation/e5-sp-symmetry-gate.mjs:119-120`). The code instead gives every central project `round(expReports/K)` observations (`scripts/simulation/e5-sp-symmetry-gate.mjs:68-85`), so the central total is `K×round(expReports/K)`, not the distributed expected count.

A read-only calculation over the 100 frozen worlds found central-minus-distributed-expected differences from −0.60% to +0.55% in baseline and −1.65% to +1.79% in the low-information stress regime. The paper's “matched expected” wording (`drafts/paper.md:70-73,611-614`) is more accurate than the contract/runtime.

**Correct value/fix:** allocate the exact integer count across projects, or say “approximately matched expected report counts, subject to per-project rounding” everywhere.

### m2. The retired exploratory engine still prints an incorrect outcome description

The retirement warning is prominent and adequate (`scripts/simulation/e5-sp-model.mjs:174-186`). Later runtime output nevertheless says the distributed arm and benchmark “max S” and labels columns `%oracle` (`scripts/simulation/e5-sp-model.mjs:251-255`), while the evaluator ranks, gates, and delivers `net=S−h·cost` (`scripts/simulation/e5-sp-model.mjs:118-131`). Its last line asserts `dis %oracle<100` (`scripts/simulation/e5-sp-model.mjs:266`), although the contract correctly says the greedy reference is neither optimal nor an upper bound (`research/claim-and-estimand-contract.md:16-19`).

**Correct value/fix:** describe the full-information greedy **net-value** reference, rename the columns `% benchmark`, and remove the `<100` invariant claim. The multiplier itself is clearly marked retired at runtime; no residual calibrated-runtime claim was found.

### m3. The paper says five review rounds but narrates only four

Section 7 says the loop ran five rounds, then enumerates only first through fourth (`drafts/paper.md:1046-1076`; Spanish `drafts/paper.es.md:1129-1159`). The fifth ablation round is A041-A043 (`attacks/README.md:100-108`). This is a remediation-induced count edit without the matching narrative.

**Correct value/fix:** add a fifth-round sentence for A041-A043 and their resolutions, or stop claiming to enumerate the rounds.

### m4. `check-anchors` passes while current repo-relative code spans remain dead

`node scripts/check-anchors.mjs` returned `anchors: broken=0 drifted=0` and `corpus: dead-paths=0 dead-wikilinks=0`. Its bare-path regex validates only `docs|knowledge|attacks|defenses` (`scripts/check-anchors.mjs:128-158`), so it misses root/drafts/research/scripts references. `LICENSE.md` names two absent files, `drafts/ensayo-divulgacion.md` and `drafts/explicacion-para-todos.md` (`LICENSE.md:9`; both targets absent), and the repository map repeats that absent essay/explainer inventory (`README.md:21-23`). `knowledge/open-questions/verification-throughput-design.md:69` cites `drafts/REVIEW_ROUND_2.md`, which is absent from this repository; the file exists only in the sibling experiments repository, so the repo-relative path is wrong.

**Correct value/fix:** remove or restore the two absent draft artifacts; replace satellite paths with an explicit sibling/URL target; extend the checker to all repository-relative code spans and standard Markdown links.

### m5. README incorrectly says the stale live Zenodo title requires a redeposit

README accurately records that live v1.12's title still says v1.8, but says correcting it “requires a metadata redeposit” (`README.md:35-37`). Zenodo states that a published record's title and other metadata can be edited at any time without changing the DOI ([Zenodo manage records](https://help.zenodo.org/docs/deposit/manage-records/)). Changed files require a new version; the title correction does not.

**Correct value/fix:** edit the live record metadata now and replace the README parenthetical. Keep v1.13 as a new version because its files changed.

## Nits

### n1. Gate `corr(S,P)` uses 8 of 100 worlds

The pre-registration says to report realized `corr(S,P)` (`audits/2026-07-10/symmetry-gate-preregistration.md:45-48`), but the gate concatenates `S/P` only while `i<8` (`scripts/simulation/e5-sp-symmetry-gate.mjs:102-113`). Full-world recomputation changes the printed correlations from approximately `.00/.30/.82` to `−.01/.29/.80` for latent rho `0/.5/1`. Cell membership and the gate do not use this diagnostic, so the verdict is unaffected.

**Correct value/fix:** accumulate streaming covariance over all 100 worlds or label it an eight-world diagnostic.

### n2. The bilingual remediation introduced small prose/link defects

The EN novelty bullet ends `; Section 6)—;` (`drafts/paper.md:356-360`); ES mirrors the punctuation and says the ungrammatical “incluida lo que creemos” (`drafts/paper.es.md:387-392`). ES also has “produjo un compuesto de 2.22× una línea base” without “frente a/contra” (`drafts/paper.es.md:207-212`). Finally, EN links the exact docs/113 file (`drafts/paper.md:1305-1307`) while ES leaves only unlinked `(docs/113)` (`drafts/paper.es.md:1390-1392`).

**Correct value/fix:** recast the novelty bullet, use “incluido lo que creemos” (or restructure it), insert “frente a” before the E7 baseline, and mirror the exact relative docs/113 link in ES.

### n3. “Attribution required for everything” overstates the MIT condition

The repository repeatedly says attribution is required “for everything” (`LICENSE.md:5`; `.zenodo.json:23`; `README.md:37-39`). The embedded MIT text requires retention of the copyright and permission notices (`LICENSE.md:25-30`), which is more specific than a generic CC-style attribution duty.

**Correct value/fix:** say “CC BY attribution is required for text; MIT copyright-and-permission notice retention is required for code.”

## Reproduction, parity, and negative findings

- `node scripts/simulation/e5-sp-symmetry-gate.mjs` exited 0 and reproduced `18/18`, median `0.025`, lower bound `0.025`, stress median `0.092`, negative control `0.016`, and NO-GO exactly (`audits/2026-07-10/symmetry-gate-results.txt:82-90`).
- `node scripts/simulation/e5-sp-symmetry-gate-diagnostics.mjs` exited 0 and reproduced ratio-of-sums `0.0260` and world-cluster interval `[0.0233,0.0288]` exactly (`audits/2026-07-10/symmetry-gate-diagnostics.txt:1-3`). No fresh sign, off-by-one, eligibility, RNG-distribution, greedy-fill, or clustered-bootstrap implementation error was confirmed.
- `node scripts/check-anchors.mjs` exited 0, but m4 documents its coverage gap.
- No current EN/ES passage presents `2.19×`, `2.22×`, or `2.26×` as a calibrated real-world effect. Their detailed occurrences are labelled conditional/model-internal and superseded (`drafts/paper.md:604-626,912-931,980-1005,1025-1033`; Spanish `drafts/paper.es.md:660-685,976-1008,1060-1086,1104-1118`). The `~5×` companion statement is followed by explicit conditional framing (`drafts/paper.md:664-687`; Spanish `drafts/paper.es.md:726-750`). The material residual is M4's conclusion/limitations wording, not an unqualified resurrection of `2.19/2.22/2.26`.
- EN and ES match on all material audited numbers: `0.025/0.026`, `[0.023,0.029]`, `18/18`, `0.05`, `2.19/2.22/2.26`, `+43%`, `+53-54%`, `1.4-1.6×`, and `2.15-2.9×`. No material numerical EN/ES desynchronization was found; M1-M4 are mirrored errors.
- Current local licensing is otherwise coherent: paper headers are CC BY (`drafts/paper.md:5`; `drafts/paper.es.md:7`), `LICENSE.md` assigns text CC BY and code MIT (`LICENSE.md:5-15`), and CFF records CC BY while its note identifies code as MIT (`CITATION.cff:7-12`). No active NC-ND or separate-record instruction remains outside the self-contradictory current remediation banner (M5), historical deposited renders/release history, and explanatory statements that the abandoned option was dropped.
- Version strings are coherent in the authoritative local release set: v1.13 draft in both paper headers, CFF and Zenodo metadata (`drafts/paper.md:3`; `drafts/paper.es.md:3-5`; `CITATION.cff:7,20`; `.zenodo.json:2,12`), with v1.12/21252911 correctly identified as the latest deposit (`README.md:31,37`; `CITATION.cff:20-21`). The known v1.13 deposit remains pending; this audit does not relabel immutable historical v1.12 content as a fresh repository contradiction.
