# E5 Design — Delivered Social Value Under a Common World: Selection × Delivery

## Status

Pre-registered experiment design. Written before implementation and before any run; the Predictions section is committed in advance, per the corpus's adversarial discipline. Motivated by an author review of the paper's conclusions: E1-E4 measured *selection* quality (whether funding reached high-θ projects) and stopped there, but the project's thesis is about *delivered* value — states collect taxes to improve social welfare, and a redistribution after which society is no better off was pointless. The canonical frame is Okun's leaky bucket (1975): redistribution carries water in a bucket that leaks, and the question that matters is how much water arrives. This architecture claims to seal and, for the first time, *meter* the leaks; E5 measures both claims against the status quo.

## The two author thought experiments this design operationalizes

1. **Same projects, different control layer.** Identical project designs in both schemes; only the executor regime and the control layer differ. Which delivers more social value — the visibly audited, verified one with reputational consequences, or the opaque one without them?
2. **Same control layer, different projects.** Identical executors and verification; only the funded portfolio differs — socially prioritized versus centrally planned toward different objectives. Which delivers more social value?

These are the two main effects of a 2×2 factorial: selection regime × delivery regime.

## World (common to all arms)

- Projects with latent quality θ ~ U(0,1), salience, targets, and scarcity 3× as in E1-E4; 10,000 citizens; 24 monthly cycles; caps ON.
- **Execution stage (new).** Each funded project draws an executor from a pool. Executors have a hidden type: honest (delivers at private cost c drawn from a distribution) or opportunistic (diverts whenever the Model 1 incentive-compatibility condition fails: c > p·[(1−a(1−r)) + γ + R]). A funded project's outcome is its delivered fraction; **delivered social value** is V = Σ θ_j · delivered_fraction_j · budget_j. The leak is the budget-weighted undelivered share.
- **Two delivery regimes parameterize the Model 1 terms:**
  - **Opaque (status-quo layer):** low detection (p ∈ 0.05-0.15), large unprotected advances (a ≈ 0.7-1.0 — payment against paper certification), no recovery (r ≈ 0), no reputational stake or memory (R = 0; failed or diverting executors stay in the pool and keep winning assignments). Diversion and non-delivery are mostly recorded as officially complete.
  - **Verified (architecture layer):** milestone-gated release with protected advances (a ≈ 0.2), retention, partial recovery (r ≈ 0.5), detection from the evidence/fiscalization layer (p ∈ 0.6-0.9), reputational continuation value (R > 0) with exclusion after confirmed diversion — so the executor pool improves endogenously across cycles.
  - Status-quo leakage priors are literature-informed, not invented: Reinikka and Svensson (2004) measured 87% leakage in Uganda's education capitation grants; Olken (2007) measured ~24% missing expenditures in Indonesian road projects. E5 uses this as the plausible band for opaque-regime outcomes and reports sensitivity across it; the architecture side's parameters come from the corpus's own Models 1-2. All bands declared uncalibrated-but-anchored.
- **Two selection regimes** reuse E4 machinery: central (bandwidth-constrained planner, E4-R1) and distributed (open weight-vector construction from aggregated citizen signals, E4-R4).

## Arms (the 2×2 plus the author's exact controls)

| Arm | Selection | Delivery | Reads as |
|---|---|---|---|
| S | central | opaque | status quo |
| A1 | central (same portfolio as S, matched seeds) | verified | thought experiment 1: delivery effect, planning held identical |
| A3 | distributed | opaque | thought experiment 2 counterpart: selection effect, delivery held weak |
| A2 | distributed | verified | the full architecture |

Delivery effect = V(A1)−V(S) and V(A2)−V(A3); selection effect = V(A3)−V(S) and V(A2)−V(A1); interaction = whether verified delivery amplifies selection gains.

## Participation realism (author question 1)

Direct-participation share α is swept across real-world-anchored bands instead of assumed low: pessimistic 3-8% monthly-active (participatory-budgeting turnout; Porto Alegre peaked near 8%), central 10-20% (active-contributor rates on social platforms under the 90-9-1 pattern, boosted by real monetary stakes and legal mandate), and a voting-anchored 30-50% annual-touch scenario. Separately, the **self-configured share** is split from the protocol default: H033 requires onboarding citizens to select or acknowledge a base profile, so configured-preference coverage (40-70%) is modeled as its own dial, distinct from monthly-active allocation — passive-but-self-configured is not planner-governed.

## Distributional signatures of default discovery categories (author question 2; E5b)

The scope planner does not design or prioritize projects; the operative constructor for the non-configured share is the default discovery/allocation category, a configuration choice with a measurable distributional signature. E5b runs the author's category list as alternative constructors under verified delivery: near-funding-closure (herding amplifier), near-me (population-density weighting), rural (inverse), extreme zones, social-risk populations, primary education — reporting each category's concentration and coverage signature rather than assuming a single planner vector.

## Metrics

Per arm, mean ± sd over 20 seeded runs: delivered value V per unit budget; leak fraction; **visibility gap** = officially-reported completion minus real delivered fraction (the opaque regime's paper success vs actual value — the "formally rich, practically thin" accountability gap, quantified); executor-pool composition over cycles; sel(θ) at funding for continuity with E1-E4; distributional signatures for E5b.

## Pre-registered predictions (committed before first run)

1. **The delivery layer dominates the selection layer:** V(A1)−V(S) > V(A3)−V(S). The paper's strongest conclusion is expected to be about converting budget into delivered, verified value — planning quality matters, but as the guiding thread, not the engine.
2. **Positive interaction:** verified delivery preserves or amplifies selection gains; under opaque delivery, selection gains partially evaporate (well-chosen projects still leak).
3. **Endogenous pool improvement:** delivered fractions in verified arms rise across cycles as reputation excludes diverters; opaque arms stay flat or decay.
4. **The visibility gap is the status quo's signature:** official completion in S overstates real delivery by a wide margin, while the verified regimes' gap is near zero by construction — the metered bucket.
5. **Robustness to pessimistic participation:** V(A2) holds across the full α band because the anchor layer carries the passive share (per E2/E3), so the architecture's value does not depend on optimistic engagement assumptions.

If any prediction fails, the failure is reported as a finding.

## What E5 changes in the paper

The conclusions re-center on delivered social value per unit of resource — the Okun bucket, measured — with the selection results (E1-E4) as the supporting layer. The two thought experiments become the expository frame of the conclusions. New literature anchors enter through the map first: Musgrave (1959, the allocation branch — why states collect to allocate), Okun (1975, the leaky bucket), Friedman and Friedman (1980, the four ways of spending money — the central planner spends other people's money on other people), Reinikka and Svensson (2004, leakage measurement).
