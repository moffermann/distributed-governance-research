# Dimension 7 — anti-value, harm myopia, novelty, and companion alignment

## Verdict

**PARTIAL — blocker 7 is not cleared.** V5 clears the implementation-existence part of this blocker. The engine really does construct `S = S+ - H`, gives adverse reports expected weight `(1-beta)`, and gates the central harm coefficient by `V^s_exp` (`scripts/simulation/e4-v5/engine.mjs:63-78`). The baseline gate is genuinely small: a deterministic seeded probe estimated `E[V^2]=0.04777`, so the default central average harm coefficient is about `0.5*0.04777=0.02388`, versus `1-beta=0.6` for the distributed signal. The negative controls also establish exact signal recovery and an active central-harm pathway.

That is code truth, not empirical identification or novelty. The claim that the aggregate advantage *comes from the low-visibility long tail* is neither isolated by a test nor covered by the evidence sweep. Visibility is independent of harm and controversy in the DGP; the sweep fixes the visibility distribution and anti-value prevalence/intensity at favorable defaults; and the “strong-distributed” fixture remains strongly positive when the explicit opposition shock is removed. The live companion documents are still the same contradictory, superseded documents identified in v4: they retain the project-invariant projection equation, source-to-target anchoring language, and the overclaim that Prelec elicits target `w`. V5 says to align them, but does not align them (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v5.md:95-103`).

## Commands and observed output

```text
$ npm run e4:controls
PASS  C1 signal recovery: M_C=M_D=S => D=C=O  — max|D-C|=0.00e+0, max|D-O|=0.00e+0
PASS  C1 estimand m == 0  — m=0.00e+0
PASS  C4 harm channel active (m falls as central sees harm)  — m(b_H_C=0)=0.4709 -> m(b_H_C=1)=0.1135
Baseline (defaults, SMALL world): m_hat=0.4540 ...
ALL CONTROLS PASSED

$ npm run e4:test
PASS  FIX strong-distributed => m materially > 0  — m=0.462
PASS  FIX strong-central => m < 0 (central wins)  — m=-0.420
PASS  FIX null => |m| negligible  — m=0.0002
PASS  FIX boundary => finite & modest  — m=0.417
ALL TESTS PASSED

$ npm run e4:evidence
m-hat: 45.7%, CI=[44.5%,46.8%]
D_F: [-6.1%,110.0%]
R_0.95: [14.5%,74.7%]
sign:indeterminate, materiality:material
```

A seeded one-million-draw probe of the default `Beta(0.5,3)` visibility and opposition mixture returned:

```text
E_gate=0.0477669
effective_central_harm_weight=0.0238834
distributed_harm_weight=0.6
Pr(V<0.1)=0.554019; median(V)=0.079008; q90(V)=0.386912
shock_rate=0.150138; actual_negative_rate=0.451120
negative_with_shock=0.121136; negative_without_shock=0.329984
```

Further common-seed probes (`N=900,K=120`, 300 worlds unless noted) show that parameters omitted from the evidence box matter materially:

```text
baseline                                      m=0.4540
R_alpha low visibility (a_V=.3,b_V=6)        m=0.4630
R_alpha high visibility (a_V=1,b_V=1.5)      m=0.4098
D_F high visibility (a_V=50,b_V=.05)         m=0.2368
no explicit opposition shock (pi_opp=0)       m=0.2616
R_alpha strong shock (pi_opp=.35,mu_opp=6)   m=11.3001
```

The 500-world “strong-distributed” fixture is `m=0.4625`, but is still `m=0.2754` with `pi_opp=0`. With other central/projection/credit/noise differences switched off, the isolated harm channel gives `m=0.0796` (and `m=0.0170` without the explicit opposition shock). Thus the fixture proves that the complete configured pipeline can emit a positive result; it does **not** prove that its strong positive is caused by anti-value coverage or the visibility tail.

## Implementation assessment

### 1. `S=S+−H` and `(1−beta)` voice are implemented correctly, but “first-class anti-value” needs qualification

For the primary mean estimand, the decomposition is exact by construction: positive parts and negative parts are accumulated separately, divided by the same interested count, and subtracted (`scripts/simulation/e4-v5/engine.mjs:63-74`). The adverse reporting probability is `p(1-beta)`, while every accepted report is divided by `p`; with conditionally mean-zero report noise this gives the printed conditional expectation `S+-(1-beta)H` (`scripts/simulation/e4-v5/engine.mjs:68-74`; `audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v5.md:29-34`). This is a legitimate Horvitz-Thompson-like behavioral signal, not a post-hoc multiplier.

However:

- `pi_opp` is the incidence of an exponential **negative shock**, not the prevalence of actual opponents, despite the contract note (`scripts/simulation/e4-v5/contract.mjs:36-37`). At defaults, the probe found a 15.0% shock rate but a 45.1% negative-valuation rate, with most negative valuations coming from the Gaussian component. Some shocked people also remain positive. Rename it `pi_adverse_shock` or explicitly define opponent status after the realized `u` sign.
- `S=S+-H` still collapses support and harm into a cancellative mean for oracle value and delivered value. It is first-class in the **measurement channels**, but not in the primary normative welfare rule. The contract declares `harm_weighted` as an alternative, while the engine has no aggregation branch (`scripts/simulation/e4-v5/contract.mjs:62`; `scripts/simulation/e4-v5/engine.mjs:71-78,117`). Either implement and separately report that estimand or stop implying that v5 repairs the duty-of-care/cancellation defect identified in `ANTIVALUE-MODELING.md:15-16,71-73`.
- The addendum itself identifies organized adverse mobilization as a distinct regime and proposes split suppression/mobilization parameters (`audits/2026-07-11-v1.14-design/ANTIVALUE-MODELING.md:17-18,69-70`). V5 implements only `beta in [0,1]`, so adverse voice can be equal or suppressed but never louder (`scripts/simulation/e4-v5/contract.mjs:41`; `scripts/simulation/e4-v5/engine.mjs:68`). This is a defensible restricted base model only if labeled as such and accompanied by the mobilization rival.

### 2. The salience gate is coherent code, but the political interpretation outruns the DGP

The central equation matches the design exactly, including project-varying planner position and `s(V)=V^s_exp` (`scripts/simulation/e4-v5/engine.mjs:76-78`; `audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v5.md:36-43`). The default `Beta(0.5,3)` is strongly concentrated near zero, and the seeded probe confirms that default aggregate central harm detection is near-blind.

Three qualifications are necessary:

1. A beta distribution is bounded and therefore is not “heavy-tailed” in the usual probabilistic sense. With `a_V<1` it has a density singularity at the lower endpoint. Say **lower-tail/near-zero concentrated** unless a genuinely heavy-tailed latent salience variable is introduced (`scripts/simulation/e4-v5/contract.mjs:25-26`; `DESIGN_SKETCH_v5.md:14-16`).
2. `V` is drawn independently of `H`, `S+`, and the opposition shock (`scripts/simulation/e4-v5/engine.mjs:54-67`). The prose says visible, **disputed**, on-agenda projects activate opposition, press, courts, and comptroller (`audits/2026-07-11-v1.14-design/ANTIVALUE-MODELING.md:28-38`), but disputedness is not in `V` or the gate. Nor does the implementation use the design's advertised `P=salience(V,g)`; credit is just `rho_P*V` (`DESIGN_SKETCH_v5.md:45-49`; `scripts/simulation/e4-v5/engine.mjs:80`). This is a visibility-only stylization, not yet a model of politically activated harm voice.
3. The coefficient comparison `(1-beta)` versus `b_H_C*s(V)` is correct only as a ceteris-paribus comparison of the two signals' direct loading on `H`. It is not an iff theorem about which arm “dominates” a project or about delivered-value selection: the signals also differ in support response, projection, intercept, noise, participation variance, eligibility, credit tilt, and portfolio interactions (`scripts/simulation/e4-v5/engine.mjs:74-80,92-119`). Rewrite `DESIGN_SKETCH_v5.md:41-43` and `ANTIVALUE-MODELING.md:43-48` as a **direct harm-loading comparison**, then demonstrate any portfolio-level attribution numerically.

### 3. The released evidence holds the thesis-defining quantities fixed

The contract gives `a_V`, `b_V`, `pi_opp`, and `mu_opp` explicit `D_F/R_alpha` ranges (`scripts/simulation/e4-v5/contract.mjs:25-26,36-37`), as the anti-value capability guardrail demanded (`audits/2026-07-11-v1.14-design/ANTIVALUE-MODELING.md:54-57`). But `evidence.mjs` sweeps only `w`, `b_H_C`, `beta`, and `s_exp`; every other quantity is silently held at its base value (`scripts/simulation/e4-v5/evidence.mjs:16,58-62`). Consequently:

- “near-blind aggregate” is true at the chosen base `Beta(0.5,3)`, not established over the registered visibility family;
- the magnitude result does not transport uncertainty about whether the project population actually has an intense opposition component or how severe it is;
- no dependence between visibility and harm is represented, even though that dependence is substantively load-bearing (controversy plausibly raises visibility).

This omission is especially important because the strong-shock R-alpha probe raised `m` from `0.454` to `11.30` as oracle denominators shrank, while changing visibility within its R-alpha endpoints moved `m` from about `0.410` to `0.463`. These are not inert nuisance parameters. A headline “anti-value/harm-myopia” result cannot freeze them outside its uncertainty object.

### 4. Existing tests validate pathways and output capability, not the anti-value causal story

Control C1 is excellent: it proves both signals equal the oracle under exact recovery (`scripts/simulation/e4-v5/controls.mjs:22-35`). C4 proves that increasing central harm detection improves the central arm in the chosen DGP (`scripts/simulation/e4-v5/controls.mjs:54-64`). Neither test locates the distributed advantage in low-visibility projects.

The strong-distributed fixture changes `s_exp`, `b_H_C`, `beta`, and `lambda` against a base central arm that also has nonzero intercept, projection, noise, and credit tilt (`scripts/simulation/e4-v5/test.mjs:17-21`; `scripts/simulation/e4-v5/contract.mjs:46-55`). Its positive result survives removal of the explicit opposition shock. Add mechanism tests that (a) isolate all other arm differences, (b) bin direct harm-loading and selected delivered-value gaps by preregistered visibility bins, (c) compare the salience gate with a constant gate of equal mean, (d) remove the shock mixture, and (e) vary/correlate `V` and `H`. Without those, “the aggregate advantage therefore comes from the long tail” is an interpretation, not a tested output.

## Novelty and companion-document alignment

V5's design-of-record uses the right tense: it calls the normal result a proposed validation benchmark, the atlas a specification, and the bridge proposed; it also says Prelec is an instrument rather than an estimator of target `w` (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v5.md:95-103`). Running code makes the DGP and sensitivity calculation a delivered artifact. It does not make the generic decomposition, beta gate, Gaussian ranking identity, or expert-versus-crowd reversal novel. The defensible candidate contribution remains the **specific synthesis** of signed-MNAR coverage, salience-gated central harm detection, projection/credit, and common portfolio selection, subject to a targeted prior-art comparison and empirical calibration.

The two requested companions are **not aligned**:

- The foundation still opens by saying model form and parameter ranges are anchored to published evidence, then later says target coefficients are not anchored (`research/e4-value-estimation-foundation.md:1-7,50-54`). It retains the superseded project-invariant equation `w(v_p-Sbar)` and uses it again in the parity discussion (`research/e4-value-estimation-foundation.md:18-37,65-72`), instead of v5's project-varying `w*(v_pj-Splus_j)` plus separate harm term.
- It still calls Surprisingly Popular “the established instrument for eliciting `w` and the F↔G gap,” which does not identify planner-specific target `w` without the three distinct measurements and transport model (`research/e4-value-estimation-foundation.md:74-78`). It also says target sign and plausible ranges transfer “with confidence” (`research/e4-value-estimation-foundation.md:80-83`).
- The empirical companion still promises a measured anchor “instead of assumed parameters,” labels a section “anchored ranges,” calls target `a` materially nonzero/large, and says target `w` is real/large/directional (`audits/2026-07-11-v1.14-design/E4-empirical-anchors.md:3-8,18-26,39-55`). Its correction later says the opposite—target magnitudes are unidentified and “anchored” is retired—then its honest-limits section again says plausible ranges are anchored (`audits/2026-07-11-v1.14-design/E4-empirical-anchors.md:57-75`).
- Both companions also retain stale or broken pointers to an old `prior-art-review.md`/v4 design (`research/e4-value-estimation-foundation.md:6-7,54,71-72`; `audits/2026-07-11-v1.14-design/E4-empirical-anchors.md:3-4`).

These are live contradictions, not cosmetic wording. A preregistration cannot simultaneously claim that target ranges are unanchored transport sensitivities and that the same ranges/signs transfer confidently from political-opinion tasks.

## Required fixes and disposition

1. **Align or explicitly supersede both companions before preregistration.** Replace the old central equation with the v5 support/harm/project-varying equation; describe source evidence as mechanism motivation only; retract target-sign/range anchoring; make Prelec one candidate measurement component; and repair pointers.
2. **Put the thesis-defining uncertainty into the evidence object.** Include `a_V`, `b_V`, `pi_opp`, and `mu_opp`, plus a preregistered `V-H` dependence family, in the joint sensitivity/coverage construction. If computational limits require profiling, label the current four-key output conditional rather than “over D_F/R_alpha.”
3. **Add an attribution suite.** Report visibility-bin harm loading and portfolio contribution, isolate the harm channel, compare equal-mean gated/ungated counterfactuals, and test no-shock and mobilized-opposition rivals. Rename the current strong-distributed fixture or make it genuinely mechanism-isolating.
4. **Narrow the claims to the implemented object.** Use “near-zero-concentrated visibility,” call the coefficient inequality a direct harm-loading comparison, and distinguish measurement-channel anti-value from harm-weighted normative aggregation.
5. **Either implement the declared harm-weighted alternative and adverse-mobilization rival or remove present-tense suggestions that v5 already contains them.**

**Disposition: PARTIAL.** The mechanism is now real, reproducible code and its baseline near-blindness is numerically honest. Blocker 7 remains open because the tail attribution is untested and conditional on fixed favorable primitives, the implementation covers only suppression and mean aggregation, and the public companion claims still contradict the v5 contract.
