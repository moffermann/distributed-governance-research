# Independent Evaluation of the Distributed Governance Research Project

**Date:** 2026-07-10

## Executive summary

This is a serious and unusually traceable institutional-design program, but it is not yet a credible quantitative research result. The proposed **~2.1×** headline is not defensible: its load-bearing `corr(S,P)` calibration is a construct substitution, its opportunity-cost calibration changes with the arbitrary simulated population size, and its delivery factor converts unrelated evidence into an assumed multiplier. The deterministic code and explicit correction record make these defects easy to find; they do not make the number valid. My recommendation is **reject in current form / major revisions**, withdraw the multiplier from the paper, and retain the architecture and conditional mechanisms as the publishable core pending symmetric modeling and external empirical validation.

## Audit scope and reproduced results

I read `drafts/paper.md` in full, the E5-SP design, preregistration and propagation notes, both calibration notes, the complete current engine, the research-method and literature-map documents, and the adversarial records most material to allocation, agenda control, salience, participation decay, calibration, implementation capacity, and collusion. The authoritative paper still reports the old harm-blindness/E5-E8 apparatus and ~2.2× result (`drafts/paper.md:29-76`, `drafts/paper.md:592-596`, `drafts/paper.md:743-975`); the propagation note explicitly says the v2 changes are staged and the live master was not edited (`research/e5-sp-paper-propagation.md:1-21`). The repository therefore does not currently contain one coherent authoritative paper supporting the proposed headline.

The canonical and held-out commands reproduce the recorded table. At seed base 5000, realized `corr(S,P)` 0.26 and 0.13 produce 1.93× and 2.29× respectively, matching `research/e5-sp-preregistration.md:93-100`. This establishes deterministic arithmetic only. The following read-only stress runs expose structural fragility; positional `N` and command-line parameter overrides are part of the engine (`scripts/simulation/e5-sp-model.mjs:161-163`).

| Read-only run | Result in the claimed correlation region | Audit implication |
|---|---:|---|
| canonical, `N=5000`, `w=0`, seed 5000 | 1.93× at corr 0.26; 2.29× at corr 0.13 | recorded output reproduces |
| `N=1000`, otherwise identical | 2.71× at corr 0.29; 3.94× at corr 0.15; 71.9% below hurdle | calibration is not population-scale invariant |
| `N=20000`, otherwise identical | 1.89× at corr 0.20; 2.20× at corr 0.08; 11.0% below hurdle | the claimed 35% input disappears with scale |
| `w=0.1`, `N=5000`, seed 5000 | 1.52× at corr 0.26; 1.58× at corr 0.13 | 10% central welfare weight destroys most selection gain |
| `w=0.3`, `N=5000`, seed 5000 | 1.39× at corr 0.26; 1.42× at corr 0.13 | result approaches the assumed 1.30× delivery floor |
| `fVer=0.75`, matching central delivery | 1.49× at corr 0.26; 1.76× at corr 0.13 | 30% of the compound is the stipulated delivery ratio |
| `budgetFrac=0.20`, otherwise canonical | 2.24× at corr 0.26; 2.90× at corr 0.13 | greater scarcity materially enlarges the headline |
| `budgetFrac=0.50`, otherwise canonical | 1.66× at corr 0.26; 1.90× at corr 0.13 | the unswept budget share materially compresses it |

`node scripts/check-anchors.mjs` passed with zero broken anchors, drifted anchors, dead paths, or dead wikilinks. That is useful corpus hygiene, not a scientific validation test.

## Severity-ranked findings

### Critical

#### C1. The opportunity-cost calibration is dimensionally unstable and therefore invalid

The engine defines project social value as a **sum over `N` citizens** (`scripts/simulation/e5-sp-model.mjs:58-75`) but draws project cost on the fixed interval 1–10 (`scripts/simulation/e5-sp-model.mjs:59-66`) and defines net value as `S - h*cost` with fixed `h=2.5` (`scripts/simulation/e5-sp-model.mjs:43-46`, `scripts/simulation/e5-sp-model.mjs:112-115`). Consequently, changing the arbitrary number of simulated citizens changes both the true-harm and below-hurdle shares: the audit runs above move the below-hurdle share from 71.9% at `N=1000`, through the tuned 35.9% at `N=5000`, to 11.0% at `N=20000`. The tornado omits `N` entirely (`scripts/simulation/e5-sp-model.mjs:168-189`). A public-project return distribution cannot legitimately depend on the simulation's population-count unit, so the faithful split and its headline are not identified.

#### C2. `corr(S,P)` is not empirically calibrated; the project substitutes one construct for another

The preregistration maps an average-citizen policy-influence coefficient and a claimed mass-policy congruence statistic from Gilens and Page directly into `corr(true project social value, project political credit) ∈ [0.1,0.3]` (`research/e5-sp-preregistration.md:61-64`), then uses that interval to define the headline (`research/e5-sp-preregistration.md:102-108`). Those quantities are not the same: preferences over U.S. policy proposals and binary adoption do not measure project social NPV or credit-claimability. The design note correctly states that `corr(S,P)` must be measured “or we assume the conclusion” (`research/e4e5-value-model-v2.md:108-116`), but no such measurement exists. The implementation is still further removed from the verbal construct: although the note defines `P` as visibility × traceability × beneficiary concentration (`research/e4e5-value-model-v2.md:45-50`), the engine implements it as an exponentiated Gaussian latent correlated with the reach latent (`scripts/simulation/e5-sp-model.mjs:66-75`). Mayhew/Arnold/Gilens-Page support a possible direction of bias, not this numerical axis.

#### C3. The delivery multiplier is assumed, partly double-counted, and unsupported by the cited evidence

The IMF calibration note says PIE-X covers failures in planning, selection, appraisal, procurement, execution, and maintenance (`drafts/public-investment-efficiency-loss-calibration.md:85-100`), and explicitly says the infrastructure-output gap is not identical to social-value loss (`drafts/public-investment-efficiency-loss-calibration.md:139-151`). The engine nevertheless applies `0.75` directly to the net social value of the already selected central portfolio, thereby counting some selection loss again, and assigns the distributed arm `0.975` (`scripts/simulation/e5-sp-model.mjs:50-54`, `scripts/simulation/e5-sp-model.mjs:121-125`). It also computes `f*(S-h*cost)`, scaling down the opportunity cost together with benefits, even though the calibration note defines inefficient output at the **same capital input** (`drafts/public-investment-efficiency-loss-calibration.md:209-223`); an output-loss model would require an explicit welfare equation such as `f*S-h*cost`, not automatic scaling of both terms. The sole bridge to 0.975 is an earlier model's “~10× capture resistance,” even though that note says its magnitudes are model-internal and the literature supports direction, not numbers (`research/e4-v5-capture-design.md:14-19`); its tenfold figure is a rent threshold at one representative parameter setting (`research/e4-v5-capture-design.md:67-79`), not a tenfold reduction in the whole IMF efficiency gap. The new engine contains no execution process: `deliver` is simply a scalar multiplication (`scripts/simulation/e5-sp-model.mjs:88`). Thus 1.30× is an input, not a simulated or empirically estimated delivery result.

#### C4. The comparator hard-codes an extreme central institution and a favorable distributed institution

The canonical central arm gives **zero weight to value** (`w=0`) and ranks only the political-credit proxy (`scripts/simulation/e5-sp-model.mjs:40-42`, `scripts/simulation/e5-sp-model.mjs:118-125`). Giving it only 10% value weight reduced the audit's claimed band to 1.52–1.58×; at 30%, the result was 1.39–1.42×. The project's own tornado records the same collapse, 2.08× to 1.40×, yet incorrectly concludes that every non-correlation knob moves the result only modestly (`research/e5-sp-preregistration.md:124-131`). On the other side, the distributed arm samples honest true valuations and receives a separate gate computed from **true aggregate net value**, excluding every `net<=0` project (`scripts/simulation/e5-sp-model.mjs:95-97`, `scripts/simulation/e5-sp-model.mjs:112-124`). The project admits that modeling the distributed arm as pure `S` is generous to it (`research/e5-sp-preregistration.md:133-136`), while its accepted salience attack says honest atomized choice systematically underfunds preventive and abstract goods and that Core v0 observes rather than eliminates this bias (`docs/92_SALIENCE_BIAS_OBSERVABILITY_AND_A024_RESOLUTION.md:12-16`, `docs/92_SALIENCE_BIAS_OBSERVABILITY_AND_A024_RESOLUTION.md:43-53`). The headline is therefore a comparison of intentionally unequal behavioral models, not an estimate of institutional treatment effects.

### Major

#### M1. The “faithful split” misstates and misapplies the Pohl-Mihaljek evidence

The empirical anchor is approximately 25% of a selected sample of completed World Bank projects below a 10% completion-stage EIRR and 8% with zero or negative EIRR (`drafts/positive-net-social-value-calibration.md:102-152`). The extra ten percentage points producing the 35% claim are an author-chosen adjustment explicitly “not estimated” by the source (`drafts/positive-net-social-value-calibration.md:227-263`). Zero or negative EIRR is not evidence that 8% of projects create active social harm `S<0`; the engine nonetheless labels the entire share “TRUE HARM” (`scripts/simulation/e5-sp-model.mjs:26-34`). The source model is time-indexed social NPV under conventional cash flows (`drafts/positive-net-social-value-calibration.md:15-37`, `drafts/positive-net-social-value-calibration.md:62-98`), whereas `h=2.5` is tuned in arbitrary one-period simulation units to hit a prevalence target. Finally, the calibration describes **implemented** projects, but the engine imposes ~35.9% on the candidate pool (`scripts/simulation/e5-sp-model.mjs:126-129`); the central funded portfolio is only 22–26% net-negative in the claimed region (`research/e5-sp-preregistration.md:93-100`). The model misses the population its own roadmap called the validation target (`docs/03_ROADMAP.md:38-46`).

#### M2. The current document is not a preregistration of the current headline

The file admits that it is post-exploratory (`research/e5-sp-preregistration.md:32-38`), while its nominally locked model and predictions retain the obsolete <1% net-negative and 1.43× delivery calibration (`research/e5-sp-preregistration.md:40-82`). The faithful-split block says it supersedes both the original preregistration and an intermediate post-hoc correction (`research/e5-sp-preregistration.md:3-30`), then reuses seed base 5000 after the model changes (`research/e5-sp-preregistration.md:86-90`). Predictions are reworded, corrected, and “rehabilitated” after results (`research/e5-sp-preregistration.md:102-122`), yet the propagation note calls the exercise “pre-registered 7/7” (`research/e5-sp-paper-propagation.md:16-18`). This is a transparent exploratory revision history, not confirmatory evidence. Fresh PRNG seeds test numerical stability under the chosen data-generating process; they do not provide out-of-model validation.

#### M3. The `--cats` decomposition is not the faithful-split model and the preregistration splices incompatible results

The primary path computes and scores net value using the hurdle (`scripts/simulation/e5-sp-model.mjs:112-125`). By contrast, `evalCat` never creates `net`, never applies the hurdle or net gate, and funds and delivers gross `S` throughout (`scripts/simulation/e5-sp-model.mjs:137-152`). Its “macro” and “allocation” factors therefore cannot decompose the current net-value headline. There is also a numerical identity failure in the recorded table: at realized correlation 0.26, the main ratio 1.93 divided by delivery 1.30 implies allocation 1.48, not the reported 1.58 (`research/e5-sp-preregistration.md:93-100`). The claimed “two layers, macro ≤1×” may be directionally true in that separate gross model, but it is unverified for the faithful-split estimand.

#### M4. The authoritative paper and supporting corpus are materially inconsistent

The paper still presents harm-blindness as the allocation mechanism, reports +43% delivery and 2.22× against E7, and concludes on the old apparatus (`drafts/paper.md:743-890`, `drafts/paper.md:941-975`, `drafts/paper.md:1264-1299`). It also says allocation and delivery are a layer and safeguard “not two independent effects to be multiplied” (`drafts/paper.md:58-65`), whereas the proposed replacement calls them “two independent layers” (`research/e5-sp-paper-propagation.md:39-51`). The paper claims forty attacks and resolutions through docs/109, while the corpus has 43 through docs/113; the propagation note acknowledges the stale count (`research/e5-sp-paper-propagation.md:80-88`). The v2 design note itself opens with “Not yet implemented” despite the implemented engine (`research/e4e5-value-model-v2.md:3-10`), and the live roadmap still predicts the superseded ~2.8× outcome (`docs/03_ROADMAP.md:38-52`). A demanding reader cannot determine which mechanism, estimand, evidence base, or headline is authoritative.

#### M5. The new use of “agenda capture” conflates preference distortion with agenda-setting power

The project's A020 defines agenda capture as controlling the option set before allocation—scope, categories, and eligibility (`attacks/A020-agenda-setting-capture-through-planning-scope-construction.md:21-23`). Its accepted resolution says this power is only made visible, remains undistributed, and blocks open-mode deployment at scale (`docs/87_PLANNING_SCOPE_AGENDA_LIMITATION_AND_A020_RESOLUTION.md:12-27`, `docs/87_PLANNING_SCOPE_AGENDA_LIMITATION_AND_A020_RESOLUTION.md:41-51`). E5-SP instead generates a common project pool and calls ranking it by `P` “agenda capture.” That is political-objective or selection misalignment, not agenda construction. Reusing the label masks rather than solves what the corpus itself calls an unresolved constitutional gap.

#### M6. Robustness analysis covers seed noise, not the known institutional failure modes

The headline CI bootstraps only 20 simulated world seeds (`scripts/simulation/e5-sp-model.mjs:157-159`, `scripts/simulation/e5-sp-model.mjs:233-241`), and no CI is reported for the headline ratio itself. The one-at-a-time tornado omits population size, project count, budget share, cost scale, participation rate, the net-gate error rate, strategic reporting, and parameter interactions (`scripts/simulation/e5-sp-model.mjs:168-189`). The unswept `budgetFrac=1/3` is arbitrary (`scripts/simulation/e5-sp-model.mjs:39`): changing it to 0.20 moved the audit's realistic-region ratios to 2.24–2.90×, while 0.50 moved them to 1.66–1.90×. Known material failures also remain outside E5-SP: engagement decay can turn distributed control into intermediated control (`docs/93_ENGAGEMENT_DECAY_METRICS_AND_A025_RESOLUTION.md:42-52`); project complementarities can strand value because Core v0 has no all-or-nothing program funding (`attacks/A029-program-fragmentation-and-lost-complementarities.md:20-24`, `attacks/A029-program-fragmentation-and-lost-complementarities.md:84-86`); and cross-layer collusion is a standing open problem (`defenses/D043-verification-displacement-and-collusion.md:59-67`). Calling the multiplier robust is therefore too strong.

#### M7. The empirical and policy scope is much narrower than the rhetoric

The paper opens by denying redistribution as a state purpose and treats delivered aggregate value as the criterion (`drafts/paper.md:9-13`, `drafts/paper.md:99-106`), but the architecture covers only a bounded assignable budget slice and the model uses interpersonal cardinal sums of Gaussian valuations (`scripts/simulation/e5-sp-model.mjs:68-75`). The corpus itself recognizes that equal wallets can reproduce territorial and group inequity (`attacks/A028-spatial-and-group-inequity-of-allocation-outcomes.md:7-18`) and that the model has no empirical staffing cost before a pilot (`defenses/D035-administrative-capacity-cost-of-tutored-operation.md:70-74`). The paper also acknowledges that no enabling law exists for binding allocation (`drafts/paper.md:1105-1120`) and no pilot or independent validation has occurred (`drafts/paper.md:1176-1185`). The defensible claim is about a candidate architecture for a bounded public-investment domain, not the purpose or general redesign of the state.

### Minor

#### m1. Novelty is asserted before a systematic prior-art review

The literature map says it is an initial map, “not yet a formal literature review,” and still lists finding anticipatory work as a research task (`research/literature-map.md:1-39`). The paper nevertheless makes broad “to our knowledge” and first-of-kind claims (`drafts/paper.md:335-371`). The plausible novelty is the integration of functional decomposition, object-level workflow, and traceable adversarial design—not the familiar claims that credit incentives distort policy or distributed information can outperform a bounded planner.

#### m2. Corpus hygiene is better than statistical provenance

The engine is small, dependency-free, deterministic, and rerunnable (`research/e5-sp-preregistration.md:32-38`), and the anchor checker passes. However, there is no engine test suite in `package.json`, no immutable result artifact for the faithful-split runs, no recorded runtime/version metadata in output, and no prospective commit separating current hypotheses from current results. Reproducibility of arithmetic is high; reproducibility of the research decision process is only moderate.

#### m3. The prose is articulate but overloaded and occasionally advocacy-coded

The 1,440-line paper combines architecture, elementary formal models, eight legacy experiments, four adversarial rounds, implementation, and policy rhetoric. Finding 4 alone accumulates first-pass E4, symmetric re-examination, capture, analytical forms, positioning, and calibration (`drafts/paper.md:693-863`). Phrases such as “uncontestable,” “burden-of-proof inversion,” and “the headline survives the incumbent's own auditors” (`drafts/paper.md:775-794`, `drafts/paper.md:941-970`) read as advocacy when the relevant magnitudes are model-internal. Splitting architecture, computational experiments, and empirical calibration into separate papers would improve reviewability.

## Dimension scores

### 1. Scientific quality & rigor — **4/10**

The project exposes assumptions, records failed predictions, and expressly calls its adversarial process self-critique rather than validation (`drafts/paper.md:1034-1051`). Those are real strengths. But the current quantitative model has a fatal unit/scale defect, asymmetric institutional arms, a post-hoc “preregistration,” and an algebraic delivery layer rather than an execution model (`scripts/simulation/e5-sp-model.mjs:58-75`, `scripts/simulation/e5-sp-model.mjs:88`, `research/e5-sp-preregistration.md:3-38`). The paper itself calls its formal models elementary and claims specificity rather than technical depth (`drafts/paper.md:311-333`). This is exploratory mechanism design with major-revision potential, not journal-grade causal or quantitative evidence.

### 2. Novelty & contribution — **5/10**

The functional rather than territorial decomposition and the integration of wallets, separated project roles, evidential contracts, tranche release, guarantees, and public state transitions form a concrete design contribution (`drafts/paper.md:276-293`, `drafts/paper.md:373-450`). The adversarial traceability method is also a potentially useful research artifact. However, polycentric governance, PB, vouchers, liquid democracy, fiscal federalism, principal-agent deterrence, political credit-claiming, and distributed knowledge are established components, and the repository admits it lacks a formal literature review (`research/literature-map.md:1-39`). The contribution is integrative architecture, not a new agenda-capture theory or measured institutional law.

### 3. Readability & clarity — **5/10**

Individual passages often explain mechanisms plainly, and the architecture section is concrete (`drafts/paper.md:373-450`). At manuscript level, however, the paper is overlong, Finding 4 is accretive (`drafts/paper.md:693-863`), and the authoritative master, v2 notes, roadmap, and staged propagation contradict each other on mechanism, decomposition, attack count, and headline (`research/e5-sp-paper-propagation.md:1-21`, `research/e5-sp-paper-propagation.md:80-88`). A reader cannot reliably distinguish current findings from superseded ones without repository archaeology.

### 4. Impact & relevance — **6/10**

The question matters to participatory budgeting, digital governance, public-investment management, auditing, and institutional design, and the project is concrete enough to support a bounded pilot. Its relevance is reduced by the absence of an enabling legal instrument (`drafts/paper.md:1105-1120`), empirical staffing costs (`defenses/D035-administrative-capacity-cost-of-tutored-operation.md:70-74`), a pilot, and independent review (`drafts/paper.md:1176-1185`). Policy users could use the object model and risk register now; they should not use the multiplier for appraisal or budgeting.

### 5. Evidence & calibration — **3/10**

The cited Pohl-Mihaljek and IMF anchors are real and the calibration notes are unusually candid that 0.65 and 0.25 are modeling judgments rather than universal estimates (`drafts/positive-net-social-value-calibration.md:249-263`, `drafts/public-investment-efficiency-loss-calibration.md:175-205`). The headline nevertheless depends on invalid cross-construct mappings: Gilens-Page does not measure `corr(S,P)`, PIE-X does not measure arm-specific social-value delivery, a capture-threshold ratio does not imply `fVer=.975`, and the World Bank implemented-project distribution is imposed on a dimensionally unstable candidate pool. Evidence supports mechanism plausibility and direction, not the reported 1.9–2.4× band.

### 6. Reproducibility — **7/10**

The current engine is dependency-free, seeded with explicit RNG code (`scripts/simulation/e5-sp-model.mjs:22-24`), exposes its parameters (`scripts/simulation/e5-sp-model.mjs:26-56`), and reproduces the held-out table quickly. The corpus links are mechanically clean. The score is not higher because the current result has no genuine prospective preregistration, `--cats` uses another estimand, raw faithful-split outputs are not preserved as immutable artifacts, and there are no automated known-answer/property tests in the repository. A third party can rerun the calculation; they cannot reconstruct a clean confirmatory chain.

### 7. Robustness of claims — **3/10**

The headline is stable across the listed random seeds and some one-at-a-time knobs (`research/e5-sp-preregistration.md:124-131`). It does not survive elementary structural scrutiny: changing `N` destroys the hurdle calibration, 10% value weight in the central arm removes most of the selection gain, the delivery factor is stipulated, and the distributed arm omits its own documented salience and strategic frictions. The adversarial corpus records additional unmodeled failure modes rather than demonstrating that the headline survives them (`docs/92_SALIENCE_BIAS_OBSERVABILITY_AND_A024_RESOLUTION.md:43-53`, `docs/93_ENGAGEMENT_DECAY_METRICS_AND_A025_RESOLUTION.md:42-52`).

### 8. Risk / fragility — **3/10 (high fragility)**

The single weakness most likely to sink the project is the **pure-credit central arm (`w=0`) presented as empirically calibrated reality**. The project says `corr(S,P)` is the dominant uncertainty, but the audit and the project's own tornado show that a minimally value-responsive central collapses the result toward the assumed delivery floor (`research/e5-sp-preregistration.md:124-131`). Because no evidence calibrates `w=0`, a reviewer can reject the multiplier without disputing the architecture, political-credit mechanism, or deterministic code. The unit instability and invalid delivery mapping make the quantitative claim still more fragile.

## Overall assessment

**OVERALL: 4/10.** **Verdict:** a potentially publishable institutional-design and research-infrastructure contribution buried under an indefensible headline number; reject the quantitative claim and invite a substantially rebuilt submission.

## Three greatest strengths

1. The repository preserves retractions, failed predictions, limitations, and attack/defense provenance instead of silently overwriting them (`research/e5-sp-preregistration.md:3-38`, `drafts/paper.md:1034-1051`).
2. Core v0 is specified as objects, roles, state transitions, and control rules rather than as a political slogan (`drafts/paper.md:373-450`).
3. The current calculation is compact, deterministic, inspectable, and cheap for an external reviewer to rerun (`scripts/simulation/e5-sp-model.mjs:22-56`).

## Three greatest weaknesses

1. The headline converts unrelated empirical constructs into calibrated parameters and then reports the resulting scenario as an evidence-grounded magnitude (`research/e5-sp-preregistration.md:61-64`, `scripts/simulation/e5-sp-model.mjs:50-54`).
2. The engine's opportunity-cost result changes with the arbitrary citizen count, and its comparator gives a pure-credit central arm against an oracle-assisted, honest-value distributed arm (`scripts/simulation/e5-sp-model.mjs:58-75`, `scripts/simulation/e5-sp-model.mjs:112-125`).
3. The research sequence is exploratory and self-reviewed but is labeled as preregistered confirmation despite post-hoc corrections, reused seeds, and no independent pilot (`research/e5-sp-preregistration.md:3-38`, `drafts/paper.md:1176-1185`).

## Would I stake my reputation on the headline number?

**No.** The ~2.1× is a conditional output of a unit-unstable toy model dominated by an unmeasured pure-credit assumption and an unsupported delivery scalar, not an externally valid estimate.

## Concrete next steps ranked by leverage

1. **Withdraw ~2.1× from the abstract, conclusion, and propagation plan now.** Report only a qualitative mechanism and an explicitly uncalibrated scenario frontier until the steps below are complete.
2. **Fix the units and target population.** Define project NPV and cost on scale-invariant units; ensure changing `N` changes Monte Carlo precision rather than the project-return distribution; separately model candidate, appraised, approved, implemented, and completed projects.
3. **Build a symmetric comparator.** Give both arms the same candidate pool, noisy appraisal technology, opportunity-cost screen, strategic/salience errors, implementation constraints, and access to cost/value information; estimate or sweep both arms' political-credit/value mixture rather than hard-code `w=0`.
4. **Remove the PIE-X/10× shortcut.** Separate allocative from technical/implementation efficiency, estimate central and Core-v0 delivery independently, and do not infer closure of 90% of an aggregate efficiency gap from a capture-rent threshold.
5. **Collect construct-matched project data.** For a bounded sector and jurisdiction, independently code ex-ante social NPV/EIRR, visibility, traceability, beneficiary concentration, political sponsorship/credit, selection, cost, delay, verified completion, and realized outcomes; estimate `corr(S,P)` rather than borrowing it from mass-policy influence.
6. **Run a genuinely prospective test.** Freeze model, estimands, failure criteria, seeds/data split, and analysis commit before any run; use untouched validation data; have an external methods reviewer sign the preregistration; preserve raw outputs and environment metadata.
7. **Use global robustness, not a one-factor tornado.** Include joint uncertainty and interactions over `N`, `K`, costs, budget share, participation, `w`, appraisal error, salience, strategic reporting, delivery, collusion, and program complementarities; report uncertainty for the ratio and for policy-relevant absolute value.
8. **Pilot the architecture before making effectiveness claims.** Measure participation decay, delegation concentration, equity, administrative hours, verifier supply/accuracy, collusion, project complementarities, and full operating cost in one bounded tutored pilot.
9. **Only then reconcile the bilingual paper and corpus.** Produce one clean methods/results narrative, split the architecture from the computational/empirical paper if necessary, remove superseded numbers from live documents, and obtain genuinely independent review before a new archival release.
