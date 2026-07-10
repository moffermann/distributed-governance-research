# Round-2 Audit — Consistency, Honesty of Claim, and Corpus Coherence

**Date:** 2026-07-10 — Round 2

## Executive summary

The corpus does **not** yet tell one coherent, honest story end-to-end. The authoritative EN/ES papers now state the symmetry-gate result accurately and are substantively synchronized, and a fresh run reproduced the frozen NO-GO result exactly; however, the Zenodo-designated “accessible companion” still presents the retired 2.19×/2.22×/2.26× narrative as validated and current. The paper also retains broader mechanism, redistribution, and total-delivered-value claims that exceed or blur the controlling selection-only contract. Roadmap status blocks, several unbannered research notes, and the papers’ five-round narrative show half-applied remediation. The 43 attack files, 43 defense files, and 43 corresponding resolution documents are mechanically present and paired, but architecture-wide semantic propagation is unverified because several defense status lines still say it is pending.

## Ranked findings

### Critical

#### 1. The public “accessible companion” still publishes the retired multiplier as validated and surviving

`.zenodo.json` sends readers to `docs/101_CORE_V0_MINIMAL_PUBLISHABLE_MODEL.md` as “the accessible companion” (`.zenodo.json:5`). That companion says the corpus “was validated three ways before publication” (`docs/101_CORE_V0_MINIMAL_PUBLISHABLE_MODEL.md:746-750`), calls the attention simulation “realistic” and says participation decay is survivable (`docs/101_CORE_V0_MINIMAL_PUBLISHABLE_MODEL.md:761-770`), then states that selection and delivery “compound multiplicatively,” that the architecture delivers **2.19×**, and that the multiplier “survives at 2.22×” (`docs/101_CORE_V0_MINIMAL_PUBLISHABLE_MODEL.md:771-780`). It further says “the headline survives unchanged (2.26 at scale, 2.15–2.9×...)” (`docs/101_CORE_V0_MINIMAL_PUBLISHABLE_MODEL.md:792-801`) and calls the architecture “validated formally, computationally, and adversarially” (`docs/101_CORE_V0_MINIMAL_PUBLISHABLE_MODEL.md:917`).

This directly violates the controlling contract: the simulation is “a stylized model ... not a validated Core v0 implementation” (`research/claim-and-estimand-contract.md:54-56`), its Δ is conditional rather than a real-world multiplier (`research/claim-and-estimand-contract.md:58-68`), and the compound headline is retired (`research/claim-and-estimand-contract.md:70-80`). The same companion still cites the obsolete v1.7 deposit (`docs/101_CORE_V0_MINIMAL_PUBLISHABLE_MODEL.md:9`) and reports only 35 attacks/resolutions through docs 103 (`docs/101_CORE_V0_MINIMAL_PUBLISHABLE_MODEL.md:751-757`). This is not harmless archive material: it is unbannered, reader-facing, and explicitly promoted by the v1.13 deposit metadata.

**Required correction:** treat `docs/101` as publication-blocking. Reframe its computational section to the contract and current 43-record state, or place an unmistakable top-of-file supersession banner and remove it from `.zenodo.json` as the current companion.

### Major

#### 2. The paper has not resolved which qualitative mechanism is current and load-bearing

For the honest tested contrast, the contract permits endogenous coverage/adverse voice on the distributed side versus even-bandwidth appraisal plus bounded credit pressure on the central side (`research/claim-and-estimand-contract.md:31-36`), and authorizes a positive claim specifically about credit-pressured central selection versus coverage-based distributed selection (`research/claim-and-estimand-contract.md:82-90`). The paper’s correction paragraph adopts exactly that story (`drafts/paper.md:69-82`). But the same abstract foregrounds a different current Result 1—central blindness to diffuse harm, with a model range up to 1.8×—and Result 2—roughly 10× capture resistance (`drafts/paper.md:34-57`); Section 6 repeats these as the main allocation account (`drafts/paper.md:775-827`). The underlying analytical note says its magnitudes are retired and explicitly marks harm-blindness as “SUPERSEDED AS PRIMARY MECHANISM” (`research/e4-analytical-backbone.md:3-8,12-24`).

The older mechanisms may remain labeled historical or special-case apparatus results, but they cannot simultaneously occupy the abstract’s primary-result position while the paper says the gate’s credit-pressure/coverage mechanism is load-bearing. This is a hierarchy contradiction, not an EN/ES mismatch; Spanish mirrors it.

**Required correction:** choose one current mechanism hierarchy. Keep the gate-supported credit/coverage direction as the load-bearing claim and label the harm-blindness/capture results explicitly as older, model-internal auxiliary analyses, or amend the controlling contract if the intended claim set is broader.

#### 3. The paper exceeds the contract’s bounded outcome and domain through universal redistribution rhetoric

The contract says the simulated outcome is an uncalibrated utilitarian aggregate that “says nothing about redistribution or equity,” limited to a bounded public-investment slice and “not the whole budget or ‘the purpose of the state’” (`research/claim-and-estimand-contract.md:46-53`). The paper instead opens with “States do not levy taxes in order to redistribute” and asks whether technology can redesign “the architecture of the state” to raise delivered value (`drafts/paper.md:9-13`), calls delivered value per budget “the criterion redistribution exists to satisfy” (`drafts/paper.md:183-191,365-372`), and concludes it is “the right criterion for any allocation institution” (`drafts/paper.md:1311-1318`). These are universal claims about redistribution and state purpose, not bounded claims about an infrastructure-like slice.

**Required correction:** constrain this rhetoric to the project’s bounded public-project domain and state expressly that the aggregate value measure does not evaluate distribution or equity.

#### 4. The paper still claims a total delivered-value answer that the contract reserves for future work

The contract defines the tested estimand as selection with delivery held identical and reserves any `Δ_total` that credits delivery for a future, separately identified delivery model; it is “not claimed here” (`research/claim-and-estimand-contract.md:7-22,38-44`). Nevertheless, the paper says it “answers whether the architecture can be built and whether it delivers more value” (`drafts/paper.md:1207-1209`) and then says “The honest selection effect stands” without limiting the preceding total-effect statement to a stylized apparatus (`drafts/paper.md:1216-1218`). The stale companion repeats the same total-effect assertion (`docs/101_CORE_V0_MINIMAL_PUBLISHABLE_MODEL.md:848`).

**Required correction:** replace the total-effect claim with the contract’s actual result: a small conditional selection effect under matched delivery, while delivery remains a separately unidentified future estimand. Older E5/E7 delivery contrasts may be retained only as clearly bounded apparatus outputs.

#### 5. README and Zenodo metadata omit the binding “stylized, not validated Core v0” caveat

The contract requires any reported Δ to be identified as a conditional simulation output and says the simulated variables are not a validated Core v0 implementation (`research/claim-and-estimand-contract.md:54-65`). `README.md:31` reports pooled ~0.026 as a “real but small” advantage and labels only the earlier figures conditional. `.zenodo.json:5` likewise says the advantage is “real but small” beside the architecture description, without saying that it is conditional on an uncalibrated stylized data-generating process or is not Core v0 validation. The paper itself supplies the necessary caveat (`drafts/paper.md:611-624`; Spanish mirror `drafts/paper.es.md:668-685`), so the omission is confined to the highest-visibility metadata surfaces.

**Required correction:** add the contract’s short caveat wherever the gate is summarized: “conditional stylized-model output, not an empirical effect estimate or validated Core v0 implementation.”

#### 6. The two live roadmaps contradict the resolved version, deposit, and license state

The controlling remediation roadmap’s top status block says the author chose a dual-license, separate-record plan with a CC BY-NC-ND manuscript and that two v1.13 records remain to be deposited (`audits/2026-07-10/remediation-roadmap.md:3-10`). Its later controlling task entry says that choice was reversed: all text is CC BY 4.0, code MIT, and the deposit is a single record (`audits/2026-07-10/remediation-roadmap.md:118-125`). `docs/03_ROADMAP.md` still says license and deposit state are unresolved author decisions (`docs/03_ROADMAP.md:35-37`) even though the remediation roadmap records both as resolved (`audits/2026-07-10/remediation-roadmap.md:118-133`). It also describes the Path-B manuscript as v1.12 (`docs/03_ROADMAP.md:16-20,59`), while the authoritative paper identifies the Path-B working draft as v1.13 and v1.12 only as the latest deposit (`drafts/paper.md:3`).

These are current status blocks, not clearly delimited history. They also invalidate the remediation roadmap’s “publication-ready” claim (`audits/2026-07-10/remediation-roadmap.md:3-11`) while Finding 1 remains.

**Required correction:** rewrite both top/current-status blocks from the final state: v1.13 working draft, v1.12 latest deposit, single CC BY 4.0/MIT record, only the v1.13 redeposit pending.

#### 7. Both papers claim five adversarial rounds but narrate only four and account for only 40 attacks

English says “The loop ran five rounds” (`drafts/paper.md:1046-1047`) but then narrates 18 attacks in round 1, 15 in round 2, 2 in round 3, and 5 in round 4—40 total (`drafts/paper.md:1047-1073`). Spanish reproduces the same omission (`drafts/paper.es.md:1129-1156`). The missing fifth round is the A041–A043 ablation round (`attacks/README.md:100-108`), paired with D041–D043 (`defenses/README.md:110-116`).

The underlying record is complete: the repository contains sequential A001–A043, D001–D043, and one A-numbered resolution file for each attack; both attack and defense READMEs point to accepted resolutions through docs 113 (`attacks/README.md:11`; `defenses/README.md:18`; `docs/04_DOC_INDEX.md:36-46`). The defect is the paper’s incomplete account of a claimed methodological contribution.

**Required correction:** add the fifth ablation round and its three resolutions to Section 7 in both languages.

#### 8. Additional stale multiplier notes remain unbannered

The required five provenance files are correctly bannered: `research/e4e5-value-model-v2.md:3-11`, `research/e5-sp-preregistration.md:3-7`, `research/e5-sp-paper-propagation.md:3-9`, `research/e4-analytical-backbone.md:3-8`, and `research/audit-2026-07-10.md:3-9`. The retired exploratory engine also warns at runtime (`scripts/simulation/e5-sp-model.mjs:20-24`).

However, `research/simulation-results.md` has no retirement banner and still says “The multiplier survives recalibration nearly intact: 2.22” (`research/simulation-results.md:419-428`), calls the manuscript headline “not an artifact” at 2.15–2.9× (`research/simulation-results.md:535-539`), and says E7’s withdrawal condition was not triggered (`research/simulation-results.md:602-607`). The paper still directs readers to that file for full result tables (`drafts/paper.md:1477-1481`). `research/e7-calibrated-baseline-design.md` is unbannered and predicts that the multiplier “survives recalibration” and becomes the paper’s recalibrated headline (`research/e7-calibrated-baseline-design.md:1-5,24-32,50`). `research/e8-behavioral-participation-design.md` is also unbannered and opens from E7’s 2.224 “headline” (`research/e8-behavioral-participation-design.md:1-19`). This conflicts with the manifest’s convention that historical files carry clear supersession/retirement pointers (`research/README.md:3-5,23-33`).

**Required correction:** add controlling retirement banners to these three files, pointing to the contract and symmetry gate; preserve their bodies as provenance.

#### 9. The A036 attack/defense/resolution bundle still names E7—not the symmetry gate—as the current headline arbiter

The A036 attack says E7 “remains the headline’s arbiter” (`attacks/A036-opaque-baseline-calibration-strawman.md:5,88`), its paired defense repeats that and says corpus propagation is pending (`defenses/D036-opaque-baseline-calibration-strawman.md:5`), and the accepted resolution says E7 results set the v1.7 headline while the v1.6 headline stands until then (`docs/105_CALIBRATED_BASELINE_EVIDENCE_AND_A036_RESOLUTION.md:14,34,57`). The attack and defense READMEs repeat “E7 remains the arbiter” (`attacks/README.md:90-94`; `defenses/README.md:100-104`). These are unbannered, present-tense provenance records that conflict with the later controlling contract and symmetry gate (`research/claim-and-estimand-contract.md:58-80`).

**Required correction:** preserve the original resolution text as dated history, but add a top controlling update to all three records and correct both README table rows: the later symmetry gate is the current arbiter and returned NO-GO.

#### 10. Recent commit messages overstate completion relative to the files now present

Commit `3a00676` says the reviewer-visible surface was publication-ready with no blocker other than two author decisions, but the already reader-facing `docs/101` contradiction in Finding 1 remained, and `.zenodo.json:5` still promotes that file. Commit `6754d96` says “CC BY 4.0 everywhere” and its body says the roadmap T3.1 was updated, yet the roadmap’s top block still states CC BY-NC-ND/separate records (`audits/2026-07-10/remediation-roadmap.md:7-10`). Commit `959a7da` says the live roadmap no longer carries a contradictory body; the current `docs/03` still presents resolved decisions as pending (`docs/03_ROADMAP.md:35-37`). By contrast, `6ef4337`’s narrower claim—43 counts in the EN/ES papers, README, and Zenodo metadata—matches those named files (`drafts/paper.md:84-85`; `drafts/paper.es.md:93-94`; `README.md:31`; `.zenodo.json:5`).

**Required correction:** do not rely on the completion commits as audit evidence. Reopen publication readiness until the reader-visible companion and current-status blocks pass the contract.

### Minor

#### 11. One retired benchmark term remains in the authoritative papers

The contract renames “oracle” to a full-information greedy reference and warns that it is neither guaranteed optimal nor an upper bound (`research/claim-and-estimand-contract.md:16-19`). The English paper still says “~1.8× of a full-information oracle” (`drafts/paper.md:790-792`), mirrored in Spanish as “oráculo de información completa” (`drafts/paper.es.md:855-857`). This also contradicts the roadmap’s claim that oracle-to-benchmark standardization is complete (`audits/2026-07-10/remediation-roadmap.md:107-114`).

#### 12. One material EN/ES wording mismatch remains in the conclusion

English says “This paper’s central experiments” apply the criterion (`drafts/paper.md:1315-1319`); Spanish says “El experimento final de este artículo” (`drafts/paper.es.md:1400-1404`). The following +43% and +53–54% contrasts are E5 results, while E7 and E8 follow E5, so “final experiment” is factually misleading rather than a translation-style choice. No other material EN/ES mismatch was found: Path-B status, gate numbers and caveats, sections, formulas, Findings E1–E8, limitations, appendix, and the same 80 bibliography entries are synchronized.

#### 13. Mechanical A/D/resolution pairing passes, but the claim of complete propagation is unverified

The paper claims all five rounds are “fully resolved and propagated” (`drafts/paper.md:1046-1047`), and README says every accepted resolution was propagated (`README.md:31`). Yet D036–D040 each retain “Corpus propagation pending” status lines (`defenses/D036-opaque-baseline-calibration-strawman.md:5`; `defenses/D037-reserve-of-law-over-allocation-competence.md:5`; `defenses/D038-reputational-exclusion-as-unprocessed-sanction.md:5`; `defenses/D039-allocation-traceability-versus-preference-secrecy.md:5`; `defenses/D040-incumbent-adoption-paradox.md:5`), while D041 says its manuscript warning is “queued for the next version” (`defenses/D041-partial-deterrence-stack-deployment.md:5`). Some accepted changes now do appear in the paper, so these may be stale status fields; a complete semantic trace through every affected architecture document is nevertheless **unverified**. The mechanical existence, numbering, reciprocal links, and unique resolution pairing do pass.

#### 14. Attack/defense README workflow language is obsolete

The defense index lists accepted resolutions through docs 113 (`defenses/README.md:18`) but ends by saying the “next Phase 3 work” is to review each pair and create resolutions where needed (`defenses/README.md:120`). The attack index similarly says the folder “prepares the next roadmap round” (`attacks/README.md:5`). These statements contradict the same indexes’ completed 43-record state.

## Reproduction and record checks

A fresh read-only run of `node scripts/simulation/e5-sp-symmetry-gate.mjs` reproduced the frozen record: 18/18 primary cells positive, pooled median Δ = 0.025 below the 0.05 gate, and NO-GO. These match `audits/2026-07-10/symmetry-gate-results.txt:83-90`; the corrected world-cluster estimate remains Δ = 0.0260 [0.0233, 0.0288] (`audits/2026-07-10/symmetry-gate-diagnostics-notes.md:8-10`). The main EN/ES quantitative-status paragraphs correctly report the rounded cluster interval 0.023–0.029 and explicitly say the test is stylized rather than validated Core v0 (`drafts/paper.md:611-624`; `drafts/paper.es.md:668-685`).

Read-only enumeration found exactly 43 attack files, 43 defense files, and 43 uniquely numbered A-resolution documents, with no missing A001–A043 or D001–D043 number and with each attack and defense brief referencing its corresponding resolution. The indexes’ stated ranges agree with that filesystem record (`attacks/README.md:11`; `defenses/README.md:18`; `docs/04_DOC_INDEX.md:36-46`).

## Verdict

The central Path-B correction is real: the authoritative bilingual paper now reports the small conditional gate effect, retires the calibrated multiplier, and keeps EN/ES quantitative claims in lockstep. But the **whole corpus does not yet tell a single honest story**, because the deposit metadata directs readers to an unbannered companion that asserts the superseded multiplier as validated, while the paper and live roadmaps retain additional contract and status contradictions. Publication should remain blocked until `docs/101`, the public metadata caveat, the mechanism hierarchy, and the current roadmap status are reconciled; the remaining mirror, banner, and terminology defects are secondary.
