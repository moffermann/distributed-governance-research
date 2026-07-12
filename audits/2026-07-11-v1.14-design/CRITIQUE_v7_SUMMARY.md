# Adversarial critique summary — E4 v1.14, v7 anchored-scenario state

## Overall verdict

**NOT READY FOR PREREGISTRATION.** V7 contains real engineering progress: all six requested commands pass on the
committed snapshot, the Tier-1 contract fixes are genuine, the ratio-of-sums estimand is coherent, the per-arm
decomposition is exact, and the coded `t≈1.13` root is numerically reproducible on its specified path. Those gains
do not rescue the new empirical framing.

The decisive integrity defect is that the executable scenarios do not implement the master scenario table they cite
as their source. The coded `PRO_CENTRAL` inherits most `PROBABLE` settings and changes only eight coordinates. When
the pro-central values printed in `research/e4-plausible-anchors.md` are actually run, the result changes from a
**+6.1% distributed advantage to a -29.5% central advantage**. Interpolating from PROBABLE to that documented
endpoint crosses parity at **`t≈0.57`**, not `t≈1.13`. The claim that the central wins only if it is better than a
fully competent plausible central is therefore contradicted by the repository's own declared scenario.

The anchor layer is also not a calibrated probable-case model. The ledger still marks most load-bearing variables
TBD, in progress, proxy-informed, or assumed. The cited evidence often supports a mechanism or direction but not the
target-domain magnitude. The political-opinion-to-project-value transport gap for `w,a,b` is named but not modeled
or propagated. The scenario confidence intervals cover inner Monte Carlo variability conditional on a chosen point;
they do not cover source, transport, model-form, or joint-parameter uncertainty.

Accordingly, the honest v7 result is: **the engine returns +46.6% at one declared, source-motivated but mostly
assumed reference point; it returns different signs under other declared plausible configurations.** It is not yet
evidence that the +46.6% point is probable or that reality lies on the distributed side.

Detailed independent reviews:

- [Code and contract review](critique-v7-code-contracts.md)
- [Scenario-anchor review](critique-v7-scenario-anchors.md)
- [Frontier, estimand, and theorem review](critique-v7-frontier-estimand.md)

## Frozen baseline and reproduction

The audit is frozen to commit `3b41007e71c9e8c1d7494fce1fde271438263dc4`, which was `master` when the audit
started, and was executed in an isolated worktree. During the audit, `master` advanced through later commits
`34a929b`, `8e97365`, and `349ae87`, including changes described as global-evidence and H3/M2 hardening. Those
post-freeze commits are outside this v7 review and must be assessed separately; the open-item findings below must not
be automatically imputed to the newer head. A transient mixed-version `e4:evidence` crash is likewise excluded
because it does not reproduce on the frozen commit.

| Command | Result | Salient output |
|---|---:|---|
| `npm run e4:controls` | exit 0 | all controls pass; baseline `m=0.4465`; harm control `0.4632→0.1118` |
| `npm run e4:test` | exit 0 | all tests pass; strong D `+0.454`, strong C `-0.415`, null `0.0001`, alleged boundary `+0.410` |
| `npm run e4:theorem` | exit 0 | Gaussian identity error `0.00029 = 0.17 MC SE` |
| `npm run e4:scenarios` | exit 0 | coded points `+6.1%`, `+46.6%`, `+199.8%` |
| `npm run e4:frontier` | exit 0 | five plotted one-factor slices do not cross; coded combined path `t≈1.13` |
| `npm run e4:evidence` | exit 0 | old v6 seven-key sweep; base `46.4%`; corner-weighted `78/21/2`; `R_.8=[2.5%,191.5%]` |

## What changed: verification matrix

| Claimed fix or open item | V7 result | Assessment |
|---|---|---|
| Latent fail-closed crash | **CLEARED** | Forced insufficiency throws the intended diagnostic, not the old missing-key `TypeError`. |
| `theta_id` folds resolved contract hash | **CLEARED for canonical evidence** | Mutating `THETA.b_H_C.value` changes the reconstructed live ID. Scenario/frontier artifacts still lack a resolved run ID. |
| `validateConfig` rejects `±Infinity` | **CLEARED** | Both signs of infinity are rejected as non-finite. |
| Negative `zeta` accepted | **CLEARED** | `zeta=-0.5` passes scalar and executable-domain validation. |
| `rho_P`, `common_random` removed | **CLEARED** | No matches in `scripts/simulation/e4-v5`. |
| Ratio-of-sums plus `D/O,C/O` | **CLEARED arithmetically** | Same retained set and denominator; `m=D/O-C/O` exactly. Interpretation remains conditional on the model and greedy benchmark. |
| Anchored configs match master table | **NOT CLEARED — BLOCKER** | The documented pro-central point reverses the coded winner. |
| Global sweep | **NOT CLEARED** | The contract explicitly says it is planned; canonical evidence remains a seven-coordinate, corner-dominated development sweep. |
| `R_alpha` coverage | **NOT CLEARED** | The contract explicitly labels the widths as declared sensitivity widths, not verified probability coverage. |
| Universal legacy guard H3 | **NOT CLEARED** | At the audited commit only 2 of 19 top-level simulation engines are guarded. |
| Text-embargo confusables M2 | **NOT CLEARED** | Cyrillic/fullwidth x, `✕`, `N-fold`, `N times`, and word forms pass. |
| Theorem no-myopia scope M1 | **PARTIAL** | Honest-limit language improved; the title/test still do not establish production-engine convergence or parity. |

## New-work attacks

### Scenario anchoring honesty

The **PROBABLE bands are not genuinely calibrated probable bands**. Procurement concentration and PB turnout supply
useful directional or joint-moment information, but they do not identify the chosen Beta visibility shapes,
project-level reporting probability, reach distribution, or their dependence. Most other magnitudes—opposition,
harm-gate shape, detection, voice suppression, credit, category correlation, and noise—remain theoretical or scale
assumptions. The file's own status ledger says so, then the master table and result prose overrule that uncertainty.

For `w,a,b`, the transport caveat is verbally honest but operationally incomplete. Political-opinion and forecasting
studies do not estimate coefficients in the engine's project-value equation. No bridge converts source percentage
points, ideology units, or task forecast errors into `w=.5,a=.2,b=.9`; no transport discrepancy allows attenuation
to zero; and no outer uncertainty is propagated. Calling the resulting point “evidence-anchored” is too strong.

The executable **PRO-CENTRAL is not a fair central best case**. It retains PROBABLE participation, reach, opponent
voice, report noise, tail shape, opposition prevalence, and several other values. That is why `D/O` is identical
between coded PROBABLE and coded PRO-CENTRAL. The master-table pro-central case gives `D/O=68.1%`, `C/O=97.6%`, and
`m=-29.5%`; the coded case gives `D/O=91.2%`, `C/O=85.2%`, and `m=+6.1%`.

The **continuity claim is not sound as stated**. Changing only the coded harm coordinates leaves `m≈+30.4%`;
literal no-myopia settings (`s_exp=0,b_H_C=1`) leave about `+13.6%`. Reaching `+6.1%` also changes projection,
intercept, responsiveness, credit, category correlation, and central noise. The old `~0.025` gate uses a different
DGP and a known result to which the new point was deliberately anchored. This is a qualitative reconciliation
hypothesis, not a reproduced limit or independent continuity check.

### Frontier methodology

Ceteris-paribus-from-PROBABLE is valid for a **local conditional question**. The starting point does not bias the
computed curve; it determines which curve is being computed. The error is promoting five hand-selected, clipped
slices into “robust to any one assumption.” From PROBABLE, the omitted registered endpoint `p=.001` produces a
strong negative point estimate (`m≈-30.9%`); `sigma_e=10` also produces a weak negative point estimate (`m≈-1.9%`)
that needs more Monte Carlo resolution before being called a certified crossing. Interactions flip the result well
before the coded combined endpoint.

The reported `t≈1.13` is stable across seeds and larger Monte Carlo budgets **on the coded eight-coordinate path**.
It is not robust to the endpoint definition: the documented full pro-central path crosses around `t≈0.57`. Nor is
`t` a calibrated competence scale; it linearly mixes heterogeneous parameters, extrapolates them, and clamps them at
different boundaries. “Better than realistic” is therefore an unsupported semantic label, not a numerical result.

### `D/O,C/O`, values above 100%, and negative values

The decomposition is honest and useful. In the coded pro-distributed run, all 800 probed worlds were retained,
`pi_deg=0`, and the summed oracle denominator was substantial. `m≈199.8%` arises because `D/O≈95.8%` while
`C/O≈-104.0%`; it is not a tiny-denominator explosion or an institutional multiplier relapse. A negative arm level
means that the selected portfolio has negative signed net value inside this DGP.

Two labels need discipline. `O` is the same-rule full-information **greedy** benchmark, not an optimal knapsack or
population-welfare maximum, so “efficiency” suggests guarantees the implementation does not provide. Also, the
engine sums project-level per-interested-person means rather than population totals. Describe these as relative
delivered-value levels and treat negative values as conditional stress-scenario outputs, not empirical claims about
real institutions.

## Seven v5 blockers re-checked

| # | V5 blocker | V7 status | Current assessment |
|---:|---|---|---|
| 1 | Contract and engine unit consistency | **PARTIAL** | Finiteness, `zeta`, dead parameters, contract hashing, and primary arithmetic improved. Stale per-world estimand language, approximate count law, split scenario provenance, and sign-changing table/code drift remain. |
| 2 | Identification in practice | **PARTIAL** | Latent algebra remains identified, but named target coefficients and their joint law are not. Source-domain evidence is not target-domain identification. |
| 3 | Estimand and state machine | **PARTIAL** | Ratio-of-sums and decomposition are coherent; set-based materiality improved. Cell-specific floors, frozen-threshold bootstrap, incomplete schema, and uncertified envelope/root status remain. |
| 4 | Analytic theorem | **PARTIAL** | Proof and synthetic regression now ship. Production harm gating, MNAR, eligibility, costs, credit, two-arm parity, and engine-to-limit convergence remain outside the result. |
| 5 | Joint `D_F/R_alpha` and capability | **PARTIAL** | More sensitivity machinery exists, but no global joint sweep, verified coverage, certified optimizer, or full-pipeline true-boundary fixture exists. **Capability criterion: NO.** |
| 6 | Mechanical embargo | **PARTIAL** | Closed schema and exact-token checks help. Universal quarantine and semantic/confusable normalization remain absent. **Multiplier-relapse risk: YES — MATERIAL at process level.** |
| 7 | Anti-value, novelty, and companion alignment | **PARTIAL** | The mechanism is executable, but scenario drift, visibility-reach independence, single-signed opposition, and unpropagated transport keep the result conditional. |

**Clearance count: 0 cleared, 7 partial, 0 not-cleared at the full-blocker level.** Several Tier-1 subdefects are
cleared; no complete v5 blocker is discharged.

## Remaining blockers, ranked

1. **Scenario specification integrity:** Markdown and code define different scenarios and opposite winners. This
   invalidates the central-best-case and `t≈1.13` realism claims before any statistical debate begins.
2. **Anchor/transport identification:** most PROBABLE magnitudes are analyst choices; source, transport, model-form,
   and dependence uncertainty are not propagated.
3. **Global robustness and coverage:** the promised whole-uncertain-set space-filling sweep is not the canonical
   evidence path; `R_alpha` has no verified coverage; envelope and root errors are uncertified.
4. **Frontier semantics:** five local slices and one arbitrary correlated path do not locate a global frontier or a
   realistic competence threshold.
5. **Release integrity:** 17 of 19 top-level legacy engines remain unguarded at the audited commit, and known textual
   embargo bypasses remain live.
6. **Validation chain:** capability fixtures bypass the evidence-to-schema-to-render path; the alleged boundary is
   `m=+0.410`; the theorem tests a synthetic identity rather than the production limit.

## Single sharpest improvement

**Replace the duplicated master table and JavaScript objects with one outcome-blind, machine-readable, hashed anchor
registry that generates the documentation, scenarios, frontier endpoints, and run provenance.** Every coordinate
must carry its target estimand, source or theory status, unit conversion, transport rule, uncertainty, and dependence
status. Add an equality test so prose and execution cannot fork. Then rerun and report the documented pro-central
winner reversal unless the registry is prospectively changed and justified.

This is sharper than adding more Monte Carlo: the current fatal result is specification drift, not simulation noise.

## Explicit answers

- **Multiplier-relapse risk: YES — MATERIAL at the process/release level.** The ratio-of-sums decomposition itself
  is not a relapse, and the closed object schema is useful; unguarded legacy emitters and textual bypasses keep the
  release boundary open.
- **Capability criterion met: NO.** Positive, negative, and null point fixtures exist, but they do not traverse the
  full evidence pipeline, the “boundary” fixture is not near parity, and the global joint evaluator is unfinished.
- **Ready to preregister: NO.** The code is a valuable conditional sensitivity engine, not a calibrated or
  preregistration-ready anchored comparison.

## Shortest path to preregisterable

1. Unify and hash the scenario/anchor registry; make documentation and execution identical; freeze it before
   rerunning outcomes.
2. Rename current points as declared reference/stress scenarios until target-domain probability or plausibility is
   constructed. Separate inner MC intervals from source, transport, and model-form uncertainty.
3. For every load-bearing knob, either obtain target-domain bridge data or preregister a transport/discrepancy set
   and dependence model. Treat PB turnout as a joint moment and procurement concentration as a proxy, not separate
   coefficient identification.
4. Complete the global space-filling sweep, define the joint measure, verify or rename `R_alpha`, attach simultaneous
   endpoint/root uncertainty, and gate `numerical:resolved` on those errors.
5. Rebuild local and correlated frontiers from the corrected registry; report multiple predeclared paths and remove
   realism claims from an uncalibrated `t`.
6. Route positive/negative/null/true-boundary fixtures through the full release pipeline; harden schema completeness,
   scenario provenance, universal legacy quarantine, and confusable/semantic embargo checks.
7. Recast the theorem as the Gaussian no-myopia selection identity unless and until an engine-to-limit proposition
   and regression are added.

Only after these steps should E4 be described as preregistration-ready.
