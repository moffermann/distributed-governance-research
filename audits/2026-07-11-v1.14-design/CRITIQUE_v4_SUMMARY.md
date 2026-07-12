# Adversarial critique summary — E4 design sketch v4

## Overall verdict

**NEEDS CHANGES — viable and materially improved, but not ready to preregister.** V4 fixes the most damaging
conceptual errors in v3. Truth, both institutional signals, delivered value, and the oracle are now expressed on
one project-mean scale; the printed MNAR expectation is algebraically correct under added conditional-independence
assumptions; project-varying `v_{p,j}` removes the old exact coefficient collapse in ideal complete data; the
primary performance functional is now explicitly conditional on a nondegenerate oracle; the fixed-threshold normal
selected-value identity and removal of `a` are correct; and the positioning now rejects both the retired
`beta=1-eta` extension and broad novelty claims
(`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v4.md:24-89,92-100,133-150,184-194`).

Those repairs do not yet make v4 an executable or outcome-blind preregistration. The advertised `theta_all` does
not exist; material laws and edge cases remain prose; the bridge protocol conflates the final central forecast with
its required prior regressor; `o_min` and `delta` are not numerically or procedurally frozen; the state table
overlaps and has gaps; the three-tier domains are marginal sketches rather than frozen joint sets; several alleged
physical exclusions are contestable directional assumptions; and the theorem-to-MNAR/large-`K` bridge is
incomplete. Most decisively, none of the promised engine, schema, adapter, legacy guard, or CI controls exists. The
current tree can still run the old `D/C` engine directly (`package.json:6-8`;
`scripts/simulation/e4-v4-symmetric-frontier.mjs:59-64,73-104`).

**Do not preregister v4 unchanged.** It is a viable design skeleton, not yet the single runnable model contract it
claims to be.

## Seven-blocker clearance table

| # | V4 review dimension | Status | Assessment |
|---:|---|---|---|
| 1 | Unit consistency and model contract | **PARTIAL** | The mean-versus-sum defect is cleared, and the MNAR conditional expectation is correct if report error is conditionally mean-zero and independent. But `beta=0` gives conditional unbiasedness, not realized equality; `theta_all` is absent; `g`, credit/salience, noise and dependence laws are incomplete; `p=0` is admitted although the signal divides by `p`; selection edge cases are open; and neither named engine implements the model (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v4.md:48-59,73-89,114-123,154-170`; `audits/2026-07-11-v1.14-design/critique-v4-unit-contract.md:3-24`). |
| 2 | Identification | **PARTIAL** | Distinct, observed `(M^C,S,v_p)` with a rank-three design and mean-independent error identify `(a,b-w,w)`, hence `(a,b,w)`. The printed condition needs positive variances and `Var(S)Var(v_p)-Cov(S,v_p)^2>0`, not a one-sided covariance inequality. V4 neither guarantees strong rank nor states exogeneity, selection, or measurement-error conditions; §G also calls the final planner forecast its own `v_p` proxy, collapsing outcome and regressor (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v4.md:61-74,175-181`; `audits/2026-07-11-v1.14-design/critique-v4-identification.md:3-23`). |
| 3 | Frozen estimand and state machine | **PARTIAL** | `m=E[(D-C)/O | O>o_min]` plus co-reported `pi_deg` repairs v3's formula/exclusion mismatch. But `o_min` and dimensionless `delta` are only promises; `[-.02,.02]` can be both negligible and sign-indeterminate, zero-touching intervals can be unclassified, numerical failure overlaps every structural state, and `pi_deg=1` has no fail-closed route. The domain companion still defines unconditional `m` (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v4.md:92-111`; `audits/2026-07-11-v1.14-design/THREE-TIER-VARIABLE-DOMAINS.md:28-38`; `audits/2026-07-11-v1.14-design/critique-v4-estimand-state-machine.md:3-26`). |
| 4 | Analytic theorem | **PARTIAL** | The joint-normal population-threshold identity, parity equation, and removal of `a` are correct. The displayed `Q_C` is valid only if `Z:=v_p-S` and `eta` is orthogonal to `(S,v_p)`; v4 instead uses an undefined `Sbar`. The MNAR moment omits mean normalization, and a within-project CLT around a nonlinear quality-dependent mean does not itself produce joint normality across projects. The large-`K` corollary also needs numerator LLNs and threshold/quota distinctions, and no proof/tests ship (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v4.md:133-151`; `audits/2026-07-11-v1.14-design/critique-v4-analytic-theorem.md:3-14`). |
| 5 | Three-tier domains and capability criterion | **PARTIAL** | Sign extrema over a frozen joint `D_F` are measure-free, and magnitude over a frozen measured `R_alpha` is a coherent secondary layer. V4 supplies neither object: endpoints, dependence, joint coverage, nesting, construction rule, and primary-alpha rule are absent. Negative `w`, `b`, or `g` are contestable behavioral/transport alternatives, not physical impossibilities like invalid probabilities. The sets can still be chosen to force indeterminacy or a favorable magnitude (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v4.md:11-21,114-130`; `audits/2026-07-11-v1.14-design/THREE-TIER-VARIABLE-DOMAINS.md:18-38`; `audits/2026-07-11-v1.14-design/critique-v4-domains-capability.md:3-13`). |
| 6 | Mechanical embargo and engine specification | **NOT CLEARED** | The prose now names ASCII `x`, Unicode `×`, and bare `D/C`, and removes the v3 opt-in-ratio wording. No control is implemented. There is no `e4:evidence` command, schema, sole adapter, config enforcement, test/CI boundary, or legacy guard. The old E4 runner remains directly executable, computes `D/C`, leads with parity-one multiplier semantics, and emits ASCII `x`; E5 retains the old `0.05` gate (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v4.md:154-170`; `package.json:6-8`; `scripts/simulation/e4-v4-symmetric-frontier.mjs:59-104`; `scripts/simulation/e5-sp-symmetry-gate.mjs:151-166`; `audits/2026-07-11-v1.14-design/critique-v4-mechanical-embargo.md:3-14`). |
| 7 | Novelty, positioning, and companion alignment | **PARTIAL** | V4's broad positioning is candid and the old `beta=1-eta` extension is retired. The companions still say form/ranges are anchored or transfer with confidence, preserve the project-invariant projection equation, and overstate Prelec as eliciting target `w`. V4 also calls an uncomputed atlas a present contribution and should qualify “not-yet-matched” as the result of a targeted, not systematic, review (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v4.md:184-194`; `research/e4-value-estimation-foundation.md:3-7,18-37,50-54,74-83`; `audits/2026-07-11-v1.14-design/E4-empirical-anchors.md:3-8,18-26,57-75`; `audits/2026-07-11-v1.14-design/critique-v4-novelty-alignment.md:3-7`). |

**Clearance count: 0 cleared, 6 partial, 1 not cleared.** This is stricter than v3's count because the seven rows
here test whether the replacement contract is preregistration-ready, not merely whether an older false claim has
been withdrawn.

## Remaining blockers, ranked

### 1. Blockers 1 and 6 — the claimed contract and mechanical evidence boundary do not exist

V4 repeatedly treats `theta_all`, a closed schema, a sole adapter, a legacy guard, and fail-closed validation as
properties of the design (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v4.md:73-77,154-170`). They are future requirements, not repository
facts. There is no enumerated registry, complete joint sampler, replacement engine, evidence command, or CI path.
The live legacy runner can reproduce the forbidden frame with a direct Node invocation. This alone prevents
preregistration and keeps multiplier-relapse risk material.

**Required fix:** ship one versioned machine-readable contract as the sole source of model, transport, numerical,
classification, and artifact configuration. Generate the engine crosswalk and schemas from it; reject unknown and
unused fields; test parameter effects/inactivation; expose one exclusive `npm run e4:evidence` release path; and
mechanically isolate all legacy code and artifacts.

### 2. The joint uncertainty domain can still choose the result

`D_F` and `R_alpha` currently consist of per-parameter prose, not joint mathematical objects. Marginal
`alpha`-coverage does not imply joint `alpha`-coverage, and an unspecified copula or cross-parameter restriction can
change both extrema. The negative-speed analogy also incorrectly treats possible sign reversal in projection,
responsiveness, or transport as structural impossibility. This leaves room to widen a Cartesian box until every
sign is indeterminate, or select an equal-mass region that yields an attractive magnitude.

**Required fix:** freeze and hash joint nested sets and their construction before production output, including all
endpoints, dependence, source-to-target maps, coverage verification, and headline rule. Separate invalid values
from substantive one-sided assumptions, and report a sign-reversal rival-model sensitivity where target evidence
does not rule reversal out.

### 3. The estimand's thresholds and classifier are not frozen

V4 has selected the correct *type* of functional but not its full definition. `o_min` is an unspecified fraction of
an unspecified median, while `delta` is described in the wrong units and has no outcome-blind calibration. One
state field cannot represent sign, materiality, degeneracy, and numerical certification without overlap or loss.
The large-`K` statement cannot repair the finite-world classifier.

**Required fix:** register exact values or deterministic calibration functions, including their `K` scaling and
bootstrap treatment. Serialize orthogonal `sign_status`, `materiality_status`, `degeneracy_status`, and
`numerical_status`; define zero-touching boundaries, `pi_deg=1`, minimum retained worlds, simultaneous endpoint
enclosures, and optimization failure.

### 4. The bridge does not yet identify the transported central mechanism

The algebraic stadium fix is sound in ideal data, but §G does not specify three distinct measurements. Identifying
`w` requires a prior planner position/category prior `v_p`, a separate final central estimate `M^C`, and measured
citizen truth `S`, plus rank, residual, selection, and errors-in-variables conditions. A convenience app that can
only establish existence/direction cannot identify population magnitudes, which v4 otherwise admits.

**Required fix:** freeze a timed three-measurement bridge and its target population. If the data constraint rules
that out, retain `(a,b,w)` as transport-sensitivity inputs and stop describing the bridge as a path to target
identification.

### 5. The analytic benchmark is correct only after separating it from the full DGP

The normal threshold lemma is useful validation, but the full signed-MNAR signal is not jointly normal merely
because within-project sampling noise has a CLT. The theorem needs an explicit moment-matched Gaussian reduced
form (or a bounded approximation), an unambiguous `Z:=v_p-S`, orthogonal `eta`, nondegenerate signals, numerator
LLNs, and separate population-threshold versus exact-quota statements.

**Required fix:** state and prove that narrower theorem, label the Gaussian mapping as an approximation, and ship
analytic, MNAR-moment, finite-`K`, quota, and denominator-conditioning regression tests.

### 6. Live companion documents still outrun the design

The present-tense section is much better, but the cited foundation and anchor documents still mix “not anchored”
corrections with anchored-range and confident-transfer language. The foundation's fixed projection equation is the
model v4 was written to replace. These are active contradictions, not archival phrasing.

**Required fix:** align the companions with v4 or mark them superseded. Call the current deliverables a proposed
benchmark, an atlas specification, and a proposed bridge protocol; call the Gaussian identity validation rather
than novelty; and describe the no-exact-match conclusion as targeted-search evidence only.

## Single sharpest improvement

**Ship one versioned, machine-readable, outcome-blind contract and make it the only path to evidence.** That one
artifact should enumerate `theta_all` and numerical inputs, define the complete joint sampler, freeze the joint
`D_F`/`R_alpha` objects and threshold rules, generate the orthogonal output schemas, drive the fresh engine, and
power adversarial tests and the exclusive release adapter. It would turn v4's strongest conceptual repairs into
falsifiable controls and close the largest number of remaining blockers at once.

## Explicit answers

- **Multiplier-relapse risk: YES — MATERIAL.** The specification is better, but the current repository can still
  compute and publish `D/C` and parity-one multiplier output directly. The answer becomes **NO** only after the new
  evidence path is exclusive and tested against ASCII, Unicode, bare-ratio, suffix-free parity-one, and legacy-feed
  fixtures.
- **Capability criterion met: NO, not as specified.** The mathematical architecture can represent a strong
  distributed result, a strong central result, or a null. But without frozen joint domains, an outcome-blind
  `R_alpha` construction, rival signed models, and a running engine, it cannot demonstrate that a strong result
  would be surfaced rather than selected into or washed out by analyst-chosen sets. Synthetic strong-positive,
  strong-negative, null, and boundary fixtures should be mandatory acceptance tests.
