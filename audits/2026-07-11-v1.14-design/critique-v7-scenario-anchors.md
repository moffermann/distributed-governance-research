# Adversarial empirical-identification review — E4 v1.14 v7 scenario anchors

**Audit baseline:** commit `3b41007e71c9e8c1d7494fce1fde271438263dc4`, inspected and executed in the
isolated worktree `C:\devel\claude-projects\distributed-governance-research-v7-audit`. The main worktree briefly
contained a mixed in-progress `contract.mjs`/`evidence.mjs` state, so its transient evidence crash is excluded from
the verdict. On the frozen commit, `npm run e4:scenarios` and `npm run e4:evidence` both exit 0; the latter takes
about 129.5 seconds on this host.

## Verdict

**NOT READY FOR PREREGISTRATION.** The three-scenario device is useful as a sensitivity presentation, but the names
and evidentiary claims are ahead of what has been built. The PROBABLE point is mostly a vector of analyst-selected
model coefficients whose signs are motivated by evidence or theory; it is not an empirically calibrated probable
case. Its reported 95% interval propagates only simulation-world variability, not anchor, measurement, transport,
model-form, or joint-parameter uncertainty. Most decisively, the master table and executable scenario disagree on
the alleged central best case. Running the table's stated PRO-CENTRAL values changes the sign from the code's
`+6.1%` distributed advantage to a **`-29.5%` central advantage**.

The correct current claim is narrower: **at one declared, source-motivated but largely assumed point, the engine
returns `m=+46.6%`; under one selected eight-coordinate central-competence perturbation it returns `+6.1%`.** That
is a legitimate model sensitivity result. It is not yet evidence that the former point is probable, that the latter
is the central's best plausible case, or that reality lies on the distributed side.

## Reproduction and strongest falsification attempts

The official scenario output reproduces exactly:

| executable scenario | `m` | 95% inner MC interval | `D/O` | `C/O` |
|---|---:|---:|---:|---:|
| code `PRO_CENTRAL` | +6.1% | [+5.8%, +6.4%] | 91.2% | 85.2% |
| `PROBABLE` | +46.6% | [+46.0%, +47.4%] | 91.2% | 44.6% |
| `PRO_DIST` | +199.8% | [+197.0%, +202.1%] | 95.8% | -104.0% |

I then attacked the framing with fixed-seed, 800-world runs at `N=1500,K=150`:

| probe | change from executable PROBABLE | `m` | `D/O` | `C/O` | implication |
|---|---|---:|---:|---:|---|
| harm coordinates only | `s_exp=.5,b_H_C=1.3` | +30.4% | 91.2% | 60.8% | The claimed 46.6→6.1 collapse is not caused by the two harm coordinates alone. |
| literal no-myopia gate | `s_exp=0,b_H_C=1` | +13.6% | 91.2% | 77.7% | “Myopia OFF” is not what the code scenario implements, and no-myopia alone does not reproduce 6.1%. |
| code `PRO_CENTRAL` | additionally `w=.1,a=0,b=1,lambda=0,zeta=.85,sigma_C=.35` | +6.1% | 91.2% | 85.2% | This is an eight-coordinate central improvement, not removal of myopia. |
| **documented master-table PRO-CENTRAL** | all stated pro-central values, including participation/reach/voice/noise/tail | **-29.5%** | 68.1% | 97.6% | **The documented “best case” reverses the winner; the official result does not execute the documented case.** |
| truthful central limit | `s_exp=0,b_H_C=1,w=0,a=0,b=1,lambda=0,sigma_C=0` | -8.8% | 91.2% | 100.0% | The executable model contains an obvious central-win region; “fully competent plausible” is an unproved boundary label. |

The full-table probe uses exactly the values printed in `research/e4-plausible-anchors.md`, not values invented for
this review. The sign reversal is far outside MC uncertainty.

## Ranked findings

### 1. CRITICAL — the master scenario table is not the executable scenario contract

`scenario-configs.mjs` says it is the single source used by scenarios/frontier and points to the master table, but
the two objects differ materially:

| field group | master-table PRO-CENTRAL | executable `PRO_CENTRAL` |
|---|---|---|
| visibility | `a_V=1,b_V=1.5` | inherits PROBABLE `.5,3.5` |
| participation/reach | `p=.05,a_r=.8,b_r=14` | inherits `.15,1.5,8` |
| opposition | `pi_opp=.03,mu_opp=1.5` | inherits `.15,3` |
| distributed voice/noise | `beta=.8,sigma_e=1.2` | inherits `.35,.5` |
| harm detection | `s_exp=.5,b_H_C=1.2` | `.5,1.3` |
| projection loading | `gamma=.3` | inherits `.5` |
| central noise | `sigma_C=.2` | `.35` |

The executable object changes only eight PROBABLE coordinates. In particular, it leaves the distributed arm's
inputs unchanged, which mechanically explains the identical `D/O=91.2%` in PROBABLE and PRO-CENTRAL. The prose
then turns that non-change into “Core v0 is robust.” The documented all-knob pro-central case lowers `D/O` to 68.1%
and raises `C/O` to 97.6%.

`PRO_DIST` is also systematically milder than the table (`a_V=.25` vs `.2`, `p=.40` vs `.45`, `pi_opp=.28` vs
`.35`, `s_exp=4` vs `5`, `w=1.1` vs `1.3`, and so on). PROBABLE is the only executable point that substantially
matches its column. A preregistration cannot have two conflicting sources of scenario truth.

### 2. CRITICAL — “PROBABLE (evidence-anchored)” is not supported by the ledger

Immediately above the master table, the document says only `a_V,b_V` are confirmed; `p` is in progress; and
`pi_opp`, `s_exp,b_H_C`, `w`, `a,b`, `a_r,b_r`, `beta`, and scale/noise quantities are TBD, unchecked, or not yet
fixed. The detailed entries for both `p` and visibility still end with “PENDING author confirmation.” The master
table nevertheless supplies point values for every knob and the results section calls the complete vector
“evidence-anchored.” This is a status contradiction inside one file.

Theory can identify a sign or monotonic direction without identifying a magnitude. “Agenda-setting/salience,”
“spiral of silence,” and “clientelism” do not numerically identify `s_exp=2.5`, `b_H_C=.5`, `beta=.35`, or
`lambda=.15`. Declared-scale assumptions do not become probable values by appearing in a scenario named PROBABLE.
At least 13 of the 18 executable overrides lack a target-domain quantitative anchor.

The interval `[46.0%,47.4%]` is a world-cluster MC interval conditional on this exact vector. It gives no coverage
for uncertainty in the vector and therefore must not be presented as “PROBABLE + CI” without the qualifier
**conditional inner simulation interval only**.

### 3. HIGH — the political-opinion → project-value transport gap is acknowledged but not propagated

The source papers support the existence and direction of some elite misperception mechanisms:

- Broockman–Skovron find a strong approximately linear relationship plus issue- and party-dependent intercept
  shifts in politicians' estimates of constituency opinion.
- Dias–Lucas–Sheffer find that a distribution-elicitation task reduces mean conservative over-estimation from
  0.67 to 0.19 ideology-scale points, and that early token placements exhibit projection.
- Bushong–Gagnon-Bartsch find 21–50% prediction distortions in a tiredness/willingness-to-work experiment.

None of those quantities is the coefficient in
`M_C = a + b*Splus + w*(v_p-Splus) - b_H_C*s(V)*H + noise`. The model uses a synthetic mean-value scale; no bridge
function converts opinion percentage points, ideology units, or percentage WTW forecast errors into `a=.2`,
`b=.9`, or `w=.5`. Even the source effects are not one shared estimand: the 50% WTW error includes task uncertainty,
whereas `w` is intended to isolate projection. `a` is issue/direction dependent but is entered as a universally
positive intercept; `b` is called “near-linear,” but the cited qualitative linearity does not estimate a target
slope of `.9`.

The companion documents sometimes state the right caveat (“target magnitude unidentified”), but the scenario
label and headline discard its consequence. Honest handling requires either target-domain bridge data or explicit
transport factors/discrepancy sets—including attenuation to zero and defended dependence—whose uncertainty is
propagated to the scenario result. Current v7 does neither at the named point.

### 4. HIGH — the continuity claim is rhetorical reconciliation, not an executable continuity test

The old `~0.025` result and the new `+0.061` result share a signed oracle-normalized comparison, and the post-hoc old
ratio-of-sums `0.026` is closer in estimand form to v7. That is the extent of the demonstrated continuity.

The old confirmatory gate uses a different DGP: `N=5000,K=500`; project truth is a sum over lognormal-reach citizen
values; the central samples those same values with an expected-report budget matched to the distributed arm; costs
are 1–10; the hurdle is swept over 1.5/2.5/4; and the pre-registered decision statistic is the median of per-world
ratios. V7 uses a support-minus-opposition mixture, parametric central proxy, salience gate, Beta reach/visibility,
costs 1–5, `h=0`, `N=1500,K=150`, and ratio-of-sums. The old `0.026` ratio-of-sums and its interval were explicitly
post hoc.

Worse, the v7 scenario was deliberately “anchored to reproduce” the earlier number after that number was known.
Similarity is therefore calibration, not independent validation. It is also only loose similarity: 6.1% is over
twice 2.6% and exceeds the old 5% research-program rebuild threshold (which was not a policy-materiality threshold).
The prose says “removing harm-myopia” produces 6.1%, but that run changes eight coordinates; changing only the two
harm coordinates produces 30.4%, and literal `s_exp=0,b_H_C=1` produces 13.6%.

Call this a **qualitative reconciliation hypothesis** until there is (a) a same-DGP nested no-myopia path and (b) a
crosswalk that reproduces the old gate's comparator, world, and statistic.

### 5. HIGH — PRO-CENTRAL is under-powered and misnamed

The executable point is accurately described as “PROBABLE civic/reporting environment + selected central
competence improvements.” It is not the central's best plausible case:

- It retains the heavy visibility tail, ordinary citizen participation, ordinary opponent voice, and ordinary
  report noise rather than the master table's central-favouring settings.
- `s_exp=.5` leaves a visibility gate; it does not switch myopia off. `b_H_C=1.3` partly compensates by exceeding a
  truthful unit coefficient, but no evidence shows this composite is “fully competent.”
- `b_H_C=1.3` lies above its declared `R_alpha` upper bound 1.0, while `w=.1` lies below its `R_alpha` lower bound
  .2. “Plausible” is therefore not inherited from the contract's expectable set.
- A genuinely truthful central (`M_C=S`) is exactly representable and wins by 8.8% at the other PROBABLE inputs.
  The documented all-knob pro-central vector wins by 29.5%.

The label “central needs better-than-plausible to tie” is consequently circular: plausibility is defined by a
selected endpoint that was neither empirically bounded nor actually the documented endpoint.

### 6. MEDIUM — the two nominal empirical anchors constrain different objects than claimed

**Visibility.** Kristoufek–Skuhrovec analyze more than 40,000 Czech procurements, but the reported power laws are
for **total revenues of suppliers and total spending of contracting authorities**, with right-tail fits and Zipf
concentration. They do not estimate the cross-project distribution of a bounded visibility variable, much less
`Beta(.5,3.5)`. The chain is authority/supplier spending concentration → project size distribution → public
visibility → Beta shape. Each arrow is a transport assumption. This is useful directional motivation, not a
“strong” magnitude anchor.

**Participation/reach.** The Brennan Center examples do support low whole-population PB turnout (for example,
2,100/84,000 in San Francisco District 7). But turnout identifies at most a joint observable, not `p`, `a_r`, and
`b_r` separately. Under the model's own PROBABLE values, `E[r]*p=2.37%`; after opponent suppression it is roughly
`E[r]*p*(1-beta*pi_opp)=2.24%`. Infinitely many reach/participation/voice triples give that number, and a PB voter
casting a ballot over multiple proposals is not the same observation as a project-level valuation report among an
interested set. The fit is a moment-matching declaration, not separate empirical identification. In the documented
PRO-CENTRAL column it implies only 0.27% before voice adjustment, outside the stated 1–3% empirical target, which
further undermines “plausible best case.”

## Source-to-parameter audit

| model knob(s) | claimed anchor | what the source/theory actually supports | what remains analyst-chosen | status |
|---|---|---|---|---|
| `a_V,b_V` | Czech procurement power law/Zipf | Spending/revenue concentration by authority/supplier; directional heavy-tail proxy | Project visibility construct, bounded Beta family, both shape values, cross-country/portfolio transport | **Proxy only; magnitude not anchored** |
| `p` | PB turnout | Whole-population process turnout in selected PB cases | Reporting among interested people, per-project mapping, separation from reach and voice | **Joint moment only** |
| `a_r,b_r` | `reach*p≈turnout` | One product/moment if mapping accepted | Two Beta shape parameters and reach heterogeneity | **Unidentified separately** |
| `pi_opp` | NIMBY/opposition | Existence and sometimes prevalence of local opposition in domain-specific studies | 15% across the candidate portfolio; definition of “intense opponent”; dependence on visibility/project type | **TBD in ledger** |
| `mu_opp` | declared scale | Nothing empirical | Exponential form and mean 3 | **Assumed** |
| `s_exp,b_H_C` | salience/agenda-setting | Direction: less visible harms may receive less attention | Power gate, zero detection at `V=0`, exponent 2.5, coefficient .5, dependence with harm | **Theory-motivated, not calibrated** |
| `w` | projection studies | Projection can be directional and substantial in source tasks | Mapping source forecast errors to target structural mixture weight .5 | **Transport-unidentified** |
| `a` | elite opinion bias | Systematic, issue/direction-dependent intercept shifts in political-opinion perception | Target utility units, sign across projects, value .2 | **Transport-unidentified** |
| `b` | linear responsiveness | Approximate responsiveness/linearity in source opinion estimates | Target slope .9 and its uncertainty | **Form-motivated only** |
| `gamma` | “tied w” | No separate target measurement | Category-loading .5 and its dependence with `w,zeta` | **Assumed** |
| `v_p0,sigma_v` | declared scale | No target measurement | Position location/spread and Gaussian form | **Assumed** |
| `beta` | spiral of silence | Possible suppression direction | .35 magnitude; single-signed regime; no organized-opposition/mobilization case | **Weak theory, unanchored** |
| `lambda` | clientelism/credit pressure | Possible direction/mechanism | .15 target weight and its distribution | **Theory-motivated, unanchored** |
| `zeta` | category proxy quality | At most a sign story | Correlation .6; joint law with quality and projection | **Assumed** |
| `sigma_e,sigma_C` | declared scale | Nothing empirical | .5/.5 noise magnitudes and Gaussianity | **Assumed** |
| `m_q,s_q,sigma,c_lo,c_hi,phi,h` | declared scales/defaults | Nothing establishing a “probable” target portfolio | All values, shapes, and portfolio/budget regime | **Assumed and held fixed** |
| `N,K` | computational scale | A simulation resolution choice | External target population/portfolio interpretation | **Numerical, not empirical** |

Primary-source checks used in this audit: [Kristoufek–Skuhrovec](https://arxiv.org/abs/1309.0218),
[Brennan Center PB cases](https://www.brennancenter.org/our-work/analysis-opinion/making-participatory-budgeting-work-experiences-front-lines),
[Broockman–Skovron](https://doi.org/10.1017/S0003055418000011),
[Dias–Lucas–Sheffer](https://doi.org/10.1017/psrm.2025.10069), and
[Bushong–Gagnon-Bartsch](https://gagnon-bartsch.com/files/projection_experiment.pdf).

## Reassessment of the seven v5 blockers

| # | v5 blocker | v7 anchor-review status | assessment |
|---:|---|---|---|
| 1 | Contract and engine unit consistency | **PARTIAL** | Core mean-scale arithmetic and finiteness fixes stand, but scenario-config/table drift creates two contracts; source-domain quantities still lack mappings into model units. |
| 2 | Identification in practice | **PARTIAL / not cleared empirically** | Latent rank identification is not real-world parameter identification. The anchor exercise does not identify most target coefficients or their joint law. |
| 3 | Estimand and state machine | **PARTIAL** | Ratio-of-sums and `D/O,C/O` are interpretable. Scenario CIs remain conditional inner MC intervals and are rhetorically used as if they summarize “probable” uncertainty. |
| 4 | Analytic theorem | **PARTIAL** | The theorem is a correct no-gate/no-credit Gaussian benchmark, not a validation of the harm-myopia mechanism or of the scenario anchoring. Its no-myopia scope is now stated more honestly, but engine convergence/nesting is not tested. |
| 5 | Joint `D_F/R_alpha` and capability | **NOT CLEARED** | `R_alpha` is still a declared sensitivity width, not verified coverage; the frozen evidence command still says the whole physical set while sweeping seven coordinates. The proposed global anchored sweep is explicitly still under construction. **Capability-met: NO.** |
| 6 | Mechanical embargo | **PARTIAL** | Outside this dimension, but the panel's universal-legacy-guard and Unicode/confusable issues remain open. Scenario prose does not fix them. |
| 7 | Anti-value, novelty, and companion alignment | **PARTIAL / blocker remains** | The mechanism exists, but visibility/reach dependence, mobilized opposition, transport overclaims, and the newly demonstrated scenario-contract mismatch remain. |

## What is honest about `D/O`, `C/O`, and values outside `[0,1]`

The decomposition itself is an improvement. It makes `m=(D-C)/O=D/O-C/O` transparent and shows why `m>100%` is
mathematically possible: if one arm funds net-harmful projects, its delivered value can be negative while the
full-information greedy reference remains positive. `C/O=-104%` and `m=199.8%` are therefore not arithmetic
errors or a multiplier relapse.

They are, however, highly assumption-sensitive model outcomes. In PRO-DISTRIBUTED, the central estimate is stacked
with high projection/credit, weak harm detection, and noise, so negative `C/O` should be described as **conditional
net value destruction in that stress scenario**, not empirical evidence that central allocation destroys 104% of
achievable value. Also retain the existing caveat that `O` is the full-information greedy reference, not the exact
knapsack optimum. The decomposition is honest; the scenario label determines whether its substantive reading is.

## Shortest path to a preregisterable anchor design

1. Make one machine-readable scenario manifest the source of both documentation and execution; add a test asserting
   every printed table cell equals the executable value. Freeze it before examining outcomes.
2. Rename the current points now: `CENTRAL-COMPETENCE PERTURBATION`, `DECLARED REFERENCE`, and `DISTRIBUTED STRESS`.
   Reserve PROBABLE and CENTRAL BEST-PLAUSIBLE until their probability/plausibility constructions exist.
3. For every knob, record target estimand, population, exact source table/variable, extraction, unit conversion,
   sampling/measurement uncertainty, transport map, dependence, and status. Convert unsupported numerical T/P/A
   values to explicitly analyst-declared sensitivity coordinates.
4. Treat PB turnout as one joint moment on reach × participation × voice; do not claim separate identification.
   Treat procurement concentration as a proxy until project-level visibility data or a defensible measurement model
   links spending to `V`.
5. For `w,a,b`, either obtain target-domain bridge data or preregister transport factors/discrepancy sets and propagate
   them. A point chosen from a source-domain percentage is not enough.
6. Separate four uncertainty layers in output: inner MC; source measurement; transport; model form. Do not attach the
   phrase “95% CI” to a probable-case claim when only the first layer is included.
7. Reconcile the old gate with two distinct checks: a same-v7-DGP no-myopia nested limit, and a separately labelled
   historical cross-DGP comparison. Do not tune the continuity point to the known 0.025 result and call the match a
   validation.
8. Complete the whole-uncertain-set space-filling sweep and certify its numerical error/coverage before using
   “under any realistic central,” “no single assumption,” or capability-met language.

## Single sharpest improvement

**Replace the hand-maintained master table with an outcome-blind, machine-readable anchor registry that generates
the scenarios and the prose, and forbid the labels PROBABLE/BEST-PLAUSIBLE unless every numeric field has a target-
domain source or an explicit transport/assumption status whose uncertainty is propagated.** This simultaneously
eliminates the sign-changing table/code mismatch and prevents motivated labels from laundering sensitivity choices
into empirical calibration.

**Plain answer:** the anchored-scenario framing is **not ready**. The code is valuable as a conditional sensitivity
engine, but v7 has not yet located reality well enough to support the advertised probable case or central best case.
