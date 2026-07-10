# Formal Models of the Core v0 Mechanisms

## Status

Working formal note supporting the paper. Three minimal models formalize the
mechanisms that carry the architecture's core claims: milestone-gated
disbursement (Model 1), protocolized fiscalization against collusion
(Model 2), and attention-constrained citizen allocation (Model 3, the
analytical skeleton behind the agent-based simulation in
[[simulation-results|research/simulation-results.md]]).

The models are deliberately minimal. Each is small enough to be checked by
hand, states its result as a proposition with an explicit proof, and maps its
parameters onto named corpus objects. The goal is not generality; it is to
show that the central design intuitions survive formalization, and to expose
exactly which parameter configurations they depend on.

Notation is self-contained per model. All agents are risk-neutral.

---

## Model 1 — Milestone-gated disbursement as a principal-agent problem

Formalizes: [[31_PROJECT_DISBURSEMENT_FLOW|docs/31_PROJECT_DISBURSEMENT_FLOW.md]],
[[83_DISBURSEMENT_GAMING_TESTS_AND_A017_RESOLUTION|docs/83_DISBURSEMENT_GAMING_TESTS_AND_A017_RESOLUTION.md]],
[[H036-milestone-based-disbursement-and-guarantees|knowledge/hypotheses/H036-milestone-based-disbursement-and-guarantees.md]].

### Setup

A single milestone with budget normalized to 1. The executor privately
chooses to **deliver** (D) at cost `c ∈ (0, 1)`, or to **divert** (V):
collect what has been released and not deliver.

Mechanism parameters, each a named Core v0 object:

- `a ∈ [0, 1]` — advance share released before milestone review
  (protected advance, A017 test 2);
- `r ∈ [0, 1]` — recoverable fraction of the advance on confirmed
  non-delivery (recoverability rule);
- `γ ≥ 0` — guarantee posted by the executor and materialized by an external
  custodian before release (`FinancialAssuranceProfile`,
  `GuaranteeMaterializationRecord`), seized on confirmed non-delivery;
- `κ ∈ [0, 1)` — the executor's carrying cost per unit of guarantee
  (cost of capital of tying up γ);
- `p ∈ [0, 1]` — probability that the review process correctly refuses the
  remainder and confirms non-delivery when the executor diverts. `p` is the
  joint quality of fulfillment-evidence standards (A013), fiscalizer
  independence (A003), and corroboration (A018);
- `R ≥ 0` — reputational continuation value lost on confirmed diversion:
  the present value of future protocol eligibility under role-based
  reputation (H014, H030).

> **Terminology note.** Where this note uses "exclusion", it means **continuation loss** — a *reduced future
> selection probability/value* driven by a visible reputation score — **not** a literal exclusion power. This
> is consistent with the architecture, which states that reputation informs choice and **never excludes**
> (drafts/paper.md). The algebra depends only on the continuation loss `R`, not on any exclusion mechanism.

The remainder `1 − a` is released only on acceptance. If the executor
diverts and review fails (probability `1 − p`), fraudulent evidence is
accepted and the remainder is released.

### Payoffs

- Deliver: `U_D = 1 − c − κγ` (full release, cost incurred, guarantee
  returned net of carrying cost).
- Divert: `U_V = (1 − p) · 1 + p · [a(1 − r) − γ − R] − κγ`.

### Proposition 1 (incentive compatibility of delivery)

Delivery is optimal for the executor if and only if

```
c ≤ p · [ (1 − a(1 − r)) + γ + R ]                    (IC)
```

**Proof.** `U_D ≥ U_V` ⟺ `1 − c ≥ (1 − p) + p·a(1 − r) − p(γ + R)`
⟺ `p − c ≥ p·a(1 − r) − p(γ + R)`
⟺ `c ≤ p[1 − a(1 − r) + γ + R]`. The carrying cost `κγ` appears on both
sides and cancels. ∎

The right-hand side is the **detection probability times the total stake at
risk**: the unreleased remainder net of the unrecoverable advance, plus the
guarantee, plus the reputational bond. Every disbursement-gaming test of
A017 is a lever inside this expression: lowering the advance `a`, raising
recoverability `r`, requiring guarantee materialization `γ`, and protecting
review quality `p`.

### Proposition 2 (weak verification must be priced)

Fix a target: delivery must be IC for every executor with `c ≤ c̄`. The
minimal guarantee satisfying (IC) is

```
γ*(p) = max{ 0 ,  c̄/p − (1 − a(1 − r)) − R }
```

which is decreasing and convex in `p`. In particular `γ* → ∞` as `p → 0`.

**Proof.** Solve (IC) for γ at equality; monotonicity and convexity follow
from `∂γ*/∂p = −c̄/p² < 0` and `∂²γ*/∂p² = 2c̄/p³ > 0`. ∎

**Reading.** Where verification is weak — thin fiscalization markets (A022),
low evidence quality, no corroboration — the architecture must compensate
with financial terms: smaller advances, more recoverability, larger
guarantees, or executors with more reputation at stake. This formalizes why
a single global guarantee percentage (the v0 default) cannot be optimal
across heterogeneous verification environments, which the corpus already
concedes as a residual risk of A017.

### Proposition 3 (participation-deterrence trade-off)

Suppose honest participation requires `U_D ≥ ū ≥ 0` (outside option). Then
raising γ relaxes (IC) at rate `p` but tightens participation at rate `κ`.
A guarantee increase is net-beneficial for the mechanism only if `p > κ`.

**Proof.** `∂/∂γ` of the IC slack is `p`; `∂U_D/∂γ = −κ`. If `p ≤ κ`, any
γ-increase excludes honest executors (lowers `U_D` toward `ū`) at least as
fast as it deters diversion. ∎

The comparison assumes a mechanism-designer objective that weighs one unit
of IC slack equally against one unit of honest-executor payoff; under any
other fixed weighting the threshold shifts but the trade-off's structure —
deterrence bought at participation — is unchanged.

**Reading.** In environments where detection quality is below the local cost
of capital, piling on guarantees is a burden that filters out honest
low-margin executors without deterring fraud — the formal footing for the
A012 complexity-budget worry and for ThresholdPolicy proportionality: the
mechanism should spend γ only where `p` is high enough for γ to bite.

---

## Model 2 — Collusion-proof fiscalization with protocol assignment and corroboration

Formalizes: [[10_FISCALIZATION_EVIDENCE_AND_CONTROL_MODEL|docs/10_FISCALIZATION_EVIDENCE_AND_CONTROL_MODEL.md]]
(anti-capture premise and protections),
[[84_COLLUSION_OBSERVABILITY_AND_A018_RESOLUTION|docs/84_COLLUSION_OBSERVABILITY_AND_A018_RESOLUTION.md]],
[[69_FISCALIZER_QUALITY_CAPTURE_INDICATORS_AND_A003_RESOLUTION|docs/69_FISCALIZER_QUALITY_CAPTURE_INDICATORS_AND_A003_RESOLUTION.md]].

### Setup

A milestone is truly non-delivered. Fraudulent approval is worth `G > 0` to
the executor (in Model 1 terms, avoiding confirmed rejection is worth
`G = 1 − a(1 − r) + γ + R`; the recoverable-advance term `a·r` was previously
dropped from this mapping). Release
requires approval by `k ≥ 1` fiscalizers, selected by protocol rule — the
executor neither chooses nor pays them (`ControlSubproject`,
`FiscalizationAssignment`).

Each fiscalizer carries stake `W > 0`: the present value of future
protocol-assigned fees plus role reputation, both forfeited if an approved
fraud is later discovered. Post-approval discovery happens with probability
`q ∈ (0, 1]` — the joint force of open observation, contradicting evidence,
complaints, verified discovery (A018), and post-closure review (A007).

The executor may offer bribes. Because assignment is protocolized and
repeat relationships are visible, executor and fiscalizer are strangers with
no relational contract: a bribe offer to an unknown reviewer is itself
reported with probability `δ ∈ [0, 1)`, costing the executor penalty
`P_e > 0` (responsibility events, exclusion, recovery).

### Proposition 4 (collusion-proofness condition)

Approval fraud is not sustainable in equilibrium if

```
k · q · W  ≥  G − (δ / (1 − δ)) · P_e                 (CP)
```

and in particular whenever `k q W ≥ G`.

**Proof.** A fiscalizer accepts a bribe `b` only if `b ≥ qW`. Buying the
approval therefore costs at least `k · qW` (all `k` must accept; any single
refusal blocks release and, with probability δ, reports the attempt). The
executor's expected gain from attempting collusion is at most
`(1 − δ)(G − k·qW) − δ·P_e`, which is non-positive exactly when (CP) holds. ∎

### Corollaries

1. **Corroboration substitutes for reputation capital.** The stake required
   per fiscalizer falls linearly in `k`: `W ≥ G/(kq)`. Where individual
   fiscalizers are shallow-pocketed or new (no accumulated reputation),
   doubling corroboration halves the required individual stake. This is the
   formal content of A018's "independent corroboration for critical
   milestones", and its cost — `k` control fees — is exactly what
   ThresholdPolicy proportionality is for: `k` should grow with `G`.

2. **Repeat relationships are the attack surface.** The friction term
   `(δ/(1−δ))·P_e` exists only while executor and fiscalizer cannot form a
   relational contract. Repeated pairings collapse δ toward 0 and replace
   one-shot bribery with durable exchange, removing the term entirely and
   reducing collusion-proofness to raw `kqW ≥ G`. This is why
   repeat-relationship visibility (A003) and cluster observability (A018)
   are load-bearing rather than cosmetic.

3. **Thin markets weaken W, not just p.** If exclusion is not credible — the
   only qualified fiscalizer in a territory keeps being selected regardless
   of suspicion — then the forfeitable stake `W` collapses even though fees
   rise. A022's thin-market exposure therefore attacks both models at once:
   it lowers `p` in Model 1 and `W` in Model 2, and the compensating levers
   (remote fiscalization, cross-territory assignment, financial terms) are
   the only margins left.

---

## Model 3 — Attention-constrained allocation (analytical skeleton)

Formalizes: [[H002-distributed-resource-allocation|knowledge/hypotheses/H002-distributed-resource-allocation.md]],
`H025`, `H033`, `H035`, and the behavioral attacks A024/A025/A027. Tested
computationally in [[simulation-results|research/simulation-results.md]].

### Setup

`N` citizens each allocate `m` per cycle across projects `j` with social
value `θ_j` and salience `s_j` (visibility, emotional appeal, social proof).
Project `j` has funding target `T_j`; under the funding-target closure rule
(H035) contributions beyond `T_j` are refused and attention spills to other
projects. Citizens act in one of four modes:

- **Evaluate** (share `α`): pay attention cost `κ_i`, observe `θ` on a
  sample of projects, allocate to the highest-θ eligible project.
- **Follow salience** (share `σ`): allocate proportionally to
  `s_j + η·n_j(t)`, where `n_j(t)` is funding already visible (social
  proof, weight η).
- **Default** (share `d`): allocation follows planning-scope need weights
  `w_j` (system-defined default rule, H033).
- **Delegate**: reduces to one of the above executed by the delegate.

### Rational ignorance is the equilibrium, by design

A citizen's instrumental return to evaluating is her pivotal effect,
bounded by `(m/T_j)·Δθ` — negligible for realistic `m/T`. So `α` is the
share with consumption value of civic attention (`κ_i ≈ 0`), not a
policy variable. The architecture's honest position (D025) is that `α`
will be small and decaying; the design question is where the **residual
allocation** `1 − α` goes. The three regimes differ exactly there:

- pure-salience fallback: funding tracks `s`, not `θ`;
- default fallback: funding tracks `w`; if planning weights correlate with
  need, allocation quality is anchored by the default rule even at small α;
- capped salience: `T_j` truncates cascades, bounding the funding share any
  single high-salience project can absorb and re-routing marginal
  contributions to the next-ranked projects.

### Testable predictions (evaluated in the simulation)

- **P1 (caps tame cascades).** With social proof active (`η > 0`),
  corr(funding, θ) is strictly higher with funding-target closure ON than
  OFF, and the funding Gini across projects is lower.
- **P2 (defaults anchor quality).** For small `α`, corr(funding, θ) under a
  need-weighted default fallback exceeds the pure-salience fallback by a
  wide margin; the default rule, not citizen attention, carries most of the
  allocation quality.
- **P3 (decay degrades gracefully only with defaults).** Letting `α` decay
  across cycles (participation fatigue, A025) degrades corr(funding, θ)
  mildly when the released share flows to defaults, and sharply when it
  flows to salience. *(Adjudication: not supported — the paired analysis in
  the simulation results finds the decay destination second-order at both
  anchor strengths; the protective factor is the anchor level itself.)*

The simulation operationalizes θ, s, w as seeded mixtures — w = λθ + (1−λ)u
with mixing weight λ ∈ {0.4, 0.8}, whose measured Pearson correlations are
≈ 0.55 and ≈ 0.97 respectively (reported at simulation startup) — and
evaluates the three comparisons with effect sizes.

---

## What these models do not show

Stated per P007 discipline, for the paper's limitations section:

- All three models take detection/discovery probabilities (`p`, `q`, `δ`)
  as parameters. Nothing here demonstrates that the platform achieves any
  particular value of them; that is an empirical question for pilots.
- Model 2's bargaining is reduced-form (bribe = expected loss); richer
  bargaining or risk aversion changes constants, not the structure. The
  report probability δ is also held exogenous to k, although approaching
  more fiscalizers should mechanically raise it — endogenizing δ(k) only
  strengthens the collusion-proofness condition.
- Model 3's welfare reading assumes planning weights `w` track need — the
  A020 agenda-setting limitation applies with full force: a captured
  Planning Scope poisons the default anchor precisely because defaults are
  powerful.
- No model addresses macro legitimacy (A019) — a normative question that
  formal mechanism design cannot answer.
