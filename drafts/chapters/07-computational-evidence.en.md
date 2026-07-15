## 6. Computational evidence

We test the three predictions of §5.3 —and, in successive experiments, the
assumptions of Propositions 1–4— in an agent-based simulation. Each experiment
(E1–E10) corresponds to a finding:

| Exp | What it tests | |
|---|---|---|
| E1 | do funding caps raise quality? | Finding 1 |
| E2 | what carries allocation quality? | Finding 2 |
| E3 | what buffers participation decay? | Finding 3 |
| E4 | distributed aggregation vs. central construction (refined by a symmetric-frictions frontier + capture, E4-v4/v5; and a v1.14 harm-myopia four-scenario robustness map, §6) | Finding 4 |
| E5 | delivered value: selection × delivery, at matched budget | Finding 5 |
| E6 | reputational competition and execution standard | Finding 6 |
| E7 | comparison against an audit-parameterized baseline | Finding 7 |
| E8 | robustness under endogenous behavioral participation | Finding 8 |
| E9 | the full stack: planning × selection × delivery (Shapley attribution) | Finding 9 |
| E10 | the administrative-cost layer (net-budget, symmetric) | Finding 10 |

We simulate 10,000 citizens over 24 monthly cycles allocating across a
standing pool of 40 projects with quality *θ*, salience *s* (measured
corr(*θ*, *s*) ≈ 0.24), prioritization need-weights *w* = λ*θ* + (1 − λ)*u*
(where *u* is an idiosyncratic need component independent of quality) with
mixing weight λ ∈ {0.4, 0.8} — measured corr(*θ*, *w*) ≈ 0.55 and ≈ 0.97
respectively — and 3× scarcity (only a minority of projects can
complete). Evaluators (2–10%) fund the best quality they sample; salience
followers see a six-slot discovery surface ranked by salience amplified by
funding progress; default followers' budget fills projects in planning-
priority order. The funding-target closure rule is toggleable. Twenty
seeded runs per condition; the code is dependency-free and deterministic
(`scripts/simulation/allocation-sim.mjs`; full tables in
[simulation-results](../research/simulation-results.md)).

**Quantitative status: channel-separated results, no calibrated multiplier.** The earlier
single value-per-budget ratio conflated selection quality, delivery leakage, and
administrative cost and is **retired as a calibrated effect**. The rebuilt program reports
the channels separately: selection (E4), delivery at matched budget (E5), a conditional
three-layer attribution (E9, leaving planning's standalone magnitude unquantified), and
administrative cost (E10). All are reference-point differences with parity at zero; no
institution-wide multiplier is retained.

**The governing pre-registered decision.** The paper's **sole confirmatory** computation
was a selection-only, symmetry-constrained stress test — not a test of the full
architecture. It matched the candidate pool, costs, budget, report-noise model,
own-estimate eligibility, expected appraisal-report budgets, and delivery at parity. The
distributed arm retained endogenous coverage and its adverse voice bias β; central
appraisal was spread evenly and its ranking retained bounded credit pressure
λ ∈ {0.1, 0.2, 0.3} (the separate λ = 0 control is even smaller, median ≈ 0.016 — the
contrast tracks the central's credit pressure, consistent with credit-versus-coverage).
The implemented central was a **competent, harm-aware value reader** whose sampled-value
signal was unbiased but noisy: the harm-myopia parameter is defined in the world
parameters but **unused by the central estimator**. The gate therefore switches off the
modeled central harm-blindness and holds agenda construction outside its fixed-pool
estimand.

The distributed contrast was **positive in all 18 primary cells**. Three of the four
conjunctive criteria passed, including the bootstrap lower-bound criterion; only C2 failed,
because the pooled median Δ = 0.025 did not clear the registered **0.05 rebuild bar**.
Under the frozen rule the formal verdict was **NO-GO**, with the registered consequence
that the quantitative multiplier is retired and the simulation treated as an illustrative
conditional frontier. **The threshold miss triggered the registered decision; the
construction determines its scope.** The 0.025 is small for the tested selection estimand,
but it is neither an estimate nor a lower bound of Core v0's architecture-wide or
target-domain effect, and it does not establish smallness outside this benchmark. The 0.05
bar is a research-program decision rule, **not** a calibrated policy-materiality threshold.
The hypothesized harm-detection asymmetry is literature-motivated; this study does not
calibrate its prevalence or magnitude. The subsequent four-scenario map uses a different
data-generating process, is **exploratory**, and does not revise this registered result. The test is stylized: its value and credit variables are abstract scores, not measured
visibility, traceability, permanence, or public value. Its frozen pre-registration,
decision rule, results, and diagnostics are in Appendix E4, the
[claim-and-estimand contract](../research/claim-and-estimand-contract.md), and
`scripts/simulation/e5-sp-symmetry-gate.mjs`. The load-bearing contributions are the
architecture and the qualitative credit-versus-coverage mechanism.

**The declared reference scenario (E4 v1.14) — an exploratory robustness map.** When the central selector is
modelled as the evidence describes it — its *direction* on every axis grounded in the
literature (not its magnitude fitted): near-blind to *diffuse harm on the low-visibility
long tail* (Hayek 1945; Scott 1998; Olson 1965; Bandiera, Prat and Valletti 2009, whose
**83% passive waste** in standardized-goods procurement shows most public loss is not
chosen), projecting its own priors and over-rating visible, appraisable benefits
(Broockman and Skovron 2018; Flyvbjerg et al. 2003), and tilted toward claimable credit
(Mayhew 1974; Arnold 1990), in a heavy-tailed low-visibility project space (Skuhrovec et
al. 2013) — **coverage-routed distributed selection recovers about 98% of the model's
full-information greedy reference against the central's ~44%: a 54-point conditional
model contrast**, not an empirical calibration or a field effect (the reference is a
greedy normalization, not a feasible institution or a welfare optimum). It is not a
knife-edge: it holds across the declared parameter space; it survives the realistic
signal degradation of Core v0's universal budget *routing* (a ~5% active-report / ~35%
microdelegation / ~60% profile-rule composition — universal *routing* is architectural,
effective independent *information* is not); and it holds even when the central is
granted the full harm-aware competent bundle the literature would deny it — harm-sight,
unbiasedness, precision, and no credit (~+14%). The central narrowly overtakes coverage only
by **further abandoning the declared premises** — also moving to a near-harmless world
where the diffuse harm the literature documents barely exists; the *mirror* idealization of the
distributed arm (its own recipe reflected: perfect signal, harm-rich world, central kept
at its declared myopia) wins by a landslide (~+118%). The single sensitivity that
materially shrinks the gap — without reversing its sign in the declared range — is
correlated/common-mode error in the coverage arm (a shared platform/recommender or
concentrated delegation), which brings ~+54% to ~+26% at a strong correlation. This is
the mechanism's one architectural condition, not merely a swept parameter: **coverage
without source diversity can reproduce the epistemic bottleneck it is meant to replace.**
Core v0 therefore treats delegate, profile-provider, and recommender concentration as
observable quantities with diversification thresholds (§8), rather than assuming
independence by fiat. The full four-scenario map, the
literature anchoring, the mirror idealized corners, and the common-mode frontier are in
**Appendix E4**. This exploratory map does not revise the registered gate result; the
model locates a frontier, it does not estimate a field effect.

**Finding 1: funding caps are an anti-concentration device, not a quality
device.** With closure ON, concentration falls (funding Gini 0.732 vs
0.759), the most salient 5% of projects absorb less (16.8% vs 19.6% of all
funding), and 15% more projects complete (25.3% vs 21.9%). But quality
selection is unchanged (*sel(θ)*, the Pearson correlation across projects between
latent quality θ and the binary indicator that a project reaches its funding
target, ≈ 0.39 vs 0.41): the truncated surplus
spills to the next most *visible* project, not the next *best* one. The
architecture's claim for the closure rule should be — and in the corpus now
is — bounded accordingly.

**Finding 2: the default anchor, not citizen attention, carries allocation
quality.** A default-anchored mix, with a near-perfectly informed planner (r ≈
0.97), reaches sel(θ) ≈ 0.71 — well above the salience-driven
configurations (≈ 0.35–0.43). Raising citizen attention from 2% to
10%, by contrast, barely moves the needle —at most ≈ 0.08 in salience-driven
regimes, and essentially nothing in default-anchored ones—, while degrading
the vector's informational quality from near-perfect to moderate (r ≈ 0.97 →
0.55) costs ≈ 0.29 of selection. The anchor rules, not attention.

Two qualifications keep the finding honest:

- **By construction.** The default rule is a deterministic θ-correlated
  allocator already holding most of the budget; what is measured is the
  *conditioning* —how much the vector's informational quality determines the
  anchor's value, and how little attention substitutes for it—, not the wisdom
  of the crowd.

- **Robustness.** A sensitivity panel (varying evaluator sample size and
  social-proof strength) shows the regime ordering is robust, except under
  very strong social proof, where the regimes converge within noise because
  strong amplification also propagates the evaluators' quality signal.
  Magnitudes are parameter-dependent and uncalibrated; what survives all
  variations is the ordering and the dominance of the prioritization's
  informational quality.

This finding quantifies the leverage concentrated in whatever constructs the
project prioritization the passive share follows. That prioritization has two
layers —which a companion study (Offermann 2026b) separated for the first
time—: the macro categorization (this corpus's Planning Scope, which frames
eligibility and carries no budget weights) and the aggregated allocation
profiles that route budget within it. The distributed arm is robust to the
quality of that categorization and a central arm is fragile to it, so the
advantage over a central status quo is not fixed: it grows as central planning
worsens — a model-internal direction the companion apparatus illustrates (a
conditional contrast that widens substantially as the central categorization
degrades, not a calibrated multiplier; see the quantitative-status note in this
section).

Two architectural facts scope the statement and forestall a tempting
over-reading. First, the default layer is pluggable, not mandatorily central:
the civic autopilot gives each citizen manual allocation, delegation,
published allocation profiles, a personal automatic rule, or the system
default; an onboarding citizen must explicitly select or acknowledge a base
profile, and only the share who never engage necessarily follows the system
default —which itself operates under a recorded allocation mandate. Second,
centralized construction of scope weights is a property of the closed and
tutored transition modes, not of the architecture: operating modes are
country-configured states, and the designed trajectory is toward open
construction (Finding 4 measures its in-model viability).

The numbers therefore establish a conditional. The binding constraint on
allocation quality is the informational quality of the **project
prioritization the passive share follows** —the aggregated allocation
profiles, not a macro planning vector—, whoever or whatever supplies it. A
captured or ignorant supplier is the failure mode; a well-informed or
well-aggregated one, the asset. Randomizing that prioritization to escape
capture does not help: it buys neutrality at the price of near-random quality
for the passive share. And because the architecture's designed trajectory
distributes its construction (open mode) and keeps it visible, versioned, and
pluggable, the constraint is met by distribution, not by a central agenda.
This is distinct from the narrower agenda-setting point of Section 8, which
concerns only who frames eligibility.

E1–E3 do not authorize two readings: the prioritization's origin is
unspecified (r is a property of the vector, not of a state office), and the
modeled crowd carries social proof but no knowledge —so these experiments
compare attention against weight quality, not central against distributed
knowledge. Finding 4 makes that comparison properly.

**Finding 3: what buffers participation decay is the anchor's level, not
where the leavers' weight flows — our own prediction failed here.** We
predicted that decaying active evaluation (10% to 2% over 24 cycles) would
degrade allocation gracefully only if the released share flowed to
defaults rather than salience. Exploiting common seeds across conditions,
the paired analysis rejects this: the destination's effect on overall
selection is null at both anchor strengths (mean paired differences 0.001
[−0.031, 0.033] and 0.021 [−0.028, 0.071]), and the only interval
excluding zero is small and opposite-signed (at a strong anchor, the
salience destination preserves late-cycle alignment slightly better —
plausibly because amplified social proof also propagates evaluator
seeding). What governs robustness to decay is the structural share of the
default layer itself, Finding 2's variable. Engagement decay — the
documented fate of civic-tech participation (Hirschman 1970; Peixoto and
Fox 2016) — is a
buffered risk here, but the buffer is the institutional layer's size, and
within-cycle quality alignment still erodes in later cycles under all
conditions, so decay is bought, not free.

**Finding 4: aggregated dispersed signals outperform fixed-bandwidth
central construction of the weight vector — but a fair, symmetric
re-examination resolves the advantage into a conditional frontier and adds a
capture-resistance that guards it.** A fourth, pre-registered experiment
(design and predictions committed before any run;
`research/e4-institutional-knowledge-design.md`) models knowledge
symmetrically instead of endowing it: a planner with fixed bandwidth
(thirty deep inspections; its correlation with latent quality is now
measured output, collapsing 0.81 → 0.37 → 0.17 as the project pool grows
40 → 200 → 1000) against thirty percent of citizens holding four
individually poor local signals each (noise 0.35). Five regimes share the
identical world and signals and differ only in the aggregation
institution. The pre-registered scale-crossover prediction failed in the
informative direction: open construction of the weight vector — a plain
average of citizen signals per project — beats pure central construction
at *every* scale, including the smallest, where the planner inspects
three-quarters of the world (sel(θ) 0.76 vs 0.62 at N = 40; 0.73 vs 0.04
at N = 1000). Twelve thousand noisy signals average into a near-perfect
vector; thirty good inspections cannot compete, and fixed central
bandwidth decays toward randomness as the world grows — a Condorcet
(1785) aggregation logic, and we treat it as such: the jury theorem's
known failure conditions (Austen-Smith and Banks 1996) define exactly
the boundary the seventh experiment tests. Three
qualifications carry the finding's honest weight. First, the same
dispersed knowledge *without* an aggregation institution is wasted: the
uncoordinated regime funds 0.6–15% of projects and selects poorly — the
result vindicates aggregation mechanisms, not the absence of mechanism,
and Core v0's default-plus-closure layer is exactly such a mechanism.
Second, aggregation defeats noise, not bias: signals are unbiased by
construction, and a common-mode bias uncorrelated with quality
(misinformation, expressive allocation) would not average out — only
endogenous social-proof contamination was tested, and proved largely
benign because visible funding progress is itself quality-correlated in a
well-anchored system. Third, elicitation is non-strategic by assumption;
in deployment, signal reporting becomes a gaming and clientelism surface,
and the mechanics of open scope construction remain a gated design
problem. Within those bounds, the finding points in a clear direction: the binding variable is not who holds the pen but how much
dispersed information the scope-construction institution ingests.

The simulation also disciplines rhetoric — in both directions. Nothing in
E1–E3 supports describing Core v0 allocation as "the wisdom of crowds":
the honest description is *inspectable intermediation with a
citizen-correctable default*, which the results show is both realistic and
better than the salience-driven alternative that unstructured platforms
converge to. And nothing in E1–E3 licenses the opposite reading — that
central planning knowledge beats distributed knowledge — because they
never modeled distributed knowledge; when E4 does, aggregation wins
wherever its named preconditions hold. Both discourses lose their slogan;
the design keeps its numbers.

*A fair, symmetric re-examination (E4-v4/v5).* This first-pass E4 gave the
central a fixed inspection bandwidth and left citizen signals unbiased — two
idealizations that, an adversarial review showed, tilt the comparison in the
distributed arm's favor. A rebuilt model
(`scripts/simulation/e4-v4-symmetric-frontier.mjs`,
`research/e4-v4-symmetric-frontier-results.txt`, `research/e4-v5-capture-design.md`)
gives *both* institutions a symmetric friction in perceiving true value,
including harm: the central attenuates perceived harm by a coefficient η (0 =
blind to diffuse harm, 1 = a fully accountable planner), while the distributed
reads true valuations but the diffusely harmed under-participate at a rate β
(voice inequality). The result is not a multiplier but a frontier with a
closed-form parity locus (`research/e4-analytical-backbone.md`): both
institutions are biased estimators of the same Samuelson value T = S⁺ − S⁻,
ranking projects by S⁺ − θ·S⁻ with θ_C = η and θ_D = 1 − β, so the distributed
dominates exactly when its coefficient is closer to the true harm-weight of one
— i.e. **β < 1 − η**. The simulation confirms the law (parity on the
anti-diagonal η + β = 1) and quantifies the delivered-value degradation off it
(from parity on the anti-diagonal to a substantial distributed lead across the
plausible box). The advantage
is thus a property of *including the harmed*, not of aggregation per se; it reaches
parity along the anti-diagonal β = 1 − η and turns into a central win below it
(β > 1 − η) — which absorbs the participation-bias objection into the model's own
β axis rather than leaving it external. Neither
extreme is assumed: η is *swept*, not fixed, and a low but non-zero η is a
defended regime, not a premise. The diffuse-harm literature (Bastiat's (1850) unseen
costs; Olson's (1965) asymmetric organization on contested issues; Wilson's (1973)
client-politics quadrant; Scott's (1998) legibility) describes *when* diffuse costs go
unrepresented — each read at its proper scope, not as a claim of global
blindness — while the opposing thesis that political competition disciplines the
centre toward efficiency (Wittman 1989) holds weakest in exactly that
client-politics quadrant. Empirically, most *measured* procurement loss is
passive — incompetence, not theft (Bandiera, Prat and Valletti 2009) —
consistent with a low but non-zero η.

*Capture-resistance guards the advantage (E4-v5).* Modelling organized capture
symmetrically — the review's hardest objection, applied in fairness to the
central planner too — the asymmetry widens rather than closes. A group captures
a low-value project only when its private rent exceeds acquisition cost plus the
expected sanction (Becker 1968); with the deterrence asymmetry carried entirely
by detection probability and acquisition scaling (the penalty held equal,
conservatively), the status quo turns net-harmful at rents near 10% of project
cost while the distributed threshold — floored by the equal-per-citizen wallet,
which money can persuade but cannot buy — sits substantially higher (closed
form in the backbone note). Detection is a snowball p = 1 − (1 − q)^m, so
its floor is an expected m·q ≥ −ln(1 − p_c) ≈ 0.1 reporters drawn from the
transparent affected public — low, but this is a model-internal statement whose
force depends entirely on the stipulated detection gap (central ~0.10 vs
distributed ~1.0), not an empirical burden-of-proof: sensitivity analysis is
decisive here — the distributed advantage narrows and can reverse if distributed
detection is driven down toward ~0.3, so the claim is that organized recapture is
harder under the distributed arm's transparency *given these parameters*, not that
it is ruled out. This ties Finding
4 to the integrity layer of Finding 5: the same fiscalization that makes value
arrive is what keeps the allocation advantage from being bought back by
organized rents, so the two are a layer and its safeguard rather than
independent multipliers. Every magnitude here is model-internal; the literature
(Olson 1965; Wilson 1973; Scott 1998; Bastiat 1850; Becker 1968; Becker and
Stigler 1974; Stokes 2005; Dyck, Morse, and Zingales 2010; Ostrom's 1990
self-monitoring commons) defends the direction,
the mechanism, and the sign of the asymmetry — not the numbers.

*Analytical backbone.* Three closed forms carry the weight, each verified against
the simulation (`research/e4-analytical-backbone.md`); the runs then only confirm
them and quantify the degradation off the clean cases. **(i) The parity law.**
Writing each institution as a biased estimator that ranks projects by S⁺ − θ·S⁻,
the central keeps θ_C = η of perceived harm and the distributed reveals
θ_D = 1 − β (the participation rate cancels from the ranking); since the true
harm-weight is one, the distributed arm delivers more true value **iff
β < 1 − η**, parity on the anti-diagonal. A bias–variance reading would predict
that on the parity line, where the bias cancels, the lower-variance estimator wins —
the distributed's revelation noise is zero (a funder knows her own value), the
central's proxy noise is not. The implemented simulation does **not** bear this out
at the accountable corner: at (η = 1, β = 0) the measured outcome is a slight
**central win** (the distributed falls just short of the central there) — so
the honest reading is the noise-free parity law β = 1 − η, and the bias–variance tilt
toward the distributed is not supported there.
**(ii) The capture
threshold.** From rent > acquisition + P(detect)·penalty, the central's threshold
λ\*_C = (k_c + p_c·f)/C falls toward zero as its detection shrinks, while the
distributed's λ\*_D = k_d + p_d·f/C is *floored* by the equal-wallet acquisition
term k_d; the signed threshold gap δ(C) = λ\*_D − λ\*_C therefore stays positive
across the plausible range, widening as the wallet floor k_d comes to dominate at
higher project cost. **(iii) The detection floor.** With snowball detection
P = 1 − (1 − q)^m, beating a central rate p_c needs, in the small-*q* (Poisson)
approximation (1 − q)^m ≈ e^{−m·q}, only an expected m·q ≥ −ln(1 − p_c) ≈ 0.1
reporters — the exact Bernoulli condition is m ≥ ln(1 − p_c)/ln(1 − q), which
depends on *m* and *q* separately, not only on their product. It is a
model-internal detection floor under the stipulated parameters
(sensitivity-dependent; see Finding 4), not an empirical burden-of-proof inversion.
Three invariances bound the arbitrary-magnitudes worry — as properties of the
noise-free, large-set *expectation*, not of every finite-sample run: the advantage
is invariant to the units of value (scale); in expectation it depends on the
voice-bias β rather than on the participation *level* (though in finite samples
turnout changes sample size, sampling variance, and hence rankings and
portfolios); and, because only the first moments S⁺, S⁻ enter the expected
ranking, the Gaussian valuation draw is a convenience there rather than a
load-bearing assumption (finite-sample tails and valuation shape can still move
rankings). One honest boundary the runs mark: the parity law is the large-set
limit; when a project's interested set is very small — a handful of people — the
distributed's sampling variance dominates and a full-census central regains the
edge. Two further boundaries are honest to state. The comparison is *static* — a
single allocation round — whereas real harms surface over iterated cycles and
feed back through elections and audit, so a persistently blind centre is the
stress case, not an inevitability. And the distributed arm is *scored on the true
value it reveals*, which would be circular were it not that the β voice-bias and
the capture frictions make its revealed signal a biased, contestable estimate of
that value rather than a definitional one.

*Positioning.* The first-best preference-aggregation mechanism —
Vickrey–Clarke–Groves (Vickrey 1961; Green and Laffont 1979) — is infeasible for
public budgets (it is not budget-balanced), so both the central planner and Core v0
are *second-best* institutions (Lipsey and Lancaster 1956); the comparison asks
which second-best delivers more, not whether either is optimal. Core v0
accordingly claims not strategy-proofness — impossible for any non-dictatorial
mechanism (Gibbard 1973; Satterthwaite 1975) — but *capture-resistance under
bounded organized coordination*. The equal-per-citizen wallet places it in the
intensity-expressing voting family (Casella 2012; Lalley and Weyl 2018) with a
sharper anti-plutocratic property: it caps influence by *equal endowment* rather
than by convex pricing, so money can persuade wallet-holders but cannot buy
wallets — exactly the acquisition-cost floor k_d of the capture threshold.
Finally, the aggregation advantage is the Condorcet (1785) jury logic and dies
under its independence condition (Austen-Smith and Banks 1996): organized capture
is the correlated-error violation of that independence, so the integrity layer
exists precisely to defend the assumption on which distributed aggregation rests.
The value primitive follows Sen's (1999) capabilities for *what* is aggregated —
freedoms, not money-utility — while the *summation* rests on Samuelson (1954), an
aggregation Sen himself resists; we invoke each only where it applies.

*Calibration.* The magnitudes are model-internal, and the gap to data defines
calibration targets rather than field estimates. The central's 44–85% of benchmark-achievable value is a
**candidate validation target requiring an explicit construct mapping** — not a
direct check: the ex-post realized-to-appraised ratio (the World Bank's Independent
Evaluation Group ratings; Flyvbjerg, Bruzelius and Rothengatter 2003) is a
*different construct* from central selection relative to a full-information
benchmark, so bridging them needs a stated mapping before either can calibrate the
other; the voice bias β can likewise be anchored to measured
participatory-budgeting demographics, and to the documented over-representation
of motivated, unrepresentative participants in open processes (Einstein, Palmer
and Glick 2019), rather than assumed. And independent field
evidence points the direction the model does: participatory budgeting in Brazil
shifted spending toward sanitation and health and lowered infant mortality at
constant per-capita budget (Gonçalves 2014) — a real-world instance of
citizen-directed allocation delivering more real value, cleanly separable from
any magnitude the model reports. The calibration-targets appendix makes the
model-internal / data boundary a visible line.

**Finding 5: selection and delivery compose multiplicatively — the
architecture's advantage is delivered value, not selection alone.** A
fifth experiment (`scripts/simulation/e4-v5/e5-delivery.mjs`, rebuilt on
the clean E4 engine) adds the execution stage the first four omitted, as
an **independent** delivery regime crossed with the two selection regimes —
a four-cell design so each layer reads separately and jointly on the *same*
funded portfolios. Executors have hidden types: an intrinsically honest
share deliver; the rest divert whenever a temptation draw beats the
regime's deterrent `p·[(1−a(1−r)) + γ + R]` (detection *p*, advance
exposure *a*, recovery *r*, guarantee *γ*, reputational stake *R*) —
Okun's (1975) leaky bucket. The **opaque** status-quo regime's emergent
value loss is moment-matched to Olken's (2007) ~24% missing-expenditure
figure (not identified as welfare); IMF's (2015) ~30% public-investment
inefficiency is a broader process loss, and Reinikka and Svensson's (2004)
~87% Ugandan capture is a tail, not the central case. The **verified**
regime is the architecture: a milestone-gated advance plus a performance
guarantee, retention, recovery, and a reputational stake — magnitudes
declared, directions from Propositions 1–4.

Every cell is a percentage of the same full-information greedy reference at
perfect delivery (a heuristic normalizer, not an optimum), so no compound
multiplier is reported. Selection efficiency reproduces E4 (distributed
≈ 98%, central ≈ 44% of the reference); delivery efficiency is ≈ 78% opaque
versus ≈ 95% verified. Read as two main effects at the declared world, the
delivery layer adds ≈ 8 points under central selection and ≈ 17 under
distributed; the selection layer adds ≈ 42 points under opaque delivery and
≈ 51 under verified. The interaction is positive: the two layers **compose
multiplicatively** — an accounting identity (delivered value = selected
value × delivered fraction, applied per project), of which the positive
interaction is the level-effect signature, not an independent discovery.
The full **selection-and-delivery** architecture beats the status quo by
≈ +58.6 points of the reference (95% conditional Monte-Carlo interval
[+58.0, +59.2], reflecting
inner simulation variability only — world, model-form, and calibration
uncertainty are not included). An earlier version summarized this as a
single compound value-per-budget multiplier; that compound is **retired**,
and E5 reports the layers as separate percentages.

Two refinements survive scrutiny. First, Core v0's distributed coverage is
not only a selection signal: the citizens who routed the budget also
observe delivery. But community coverage credibly lifts *detection*, not
*recovery* (clawback needs institutional follow-up), so the coverage-only
delivery dividend is small (a fraction of a point in the weak-control
regime; Björkman and Svensson 2009, with failed replications; Molina et al.
2016); the sizeable delivery gain comes from the **formal** recovery
channel — the verified regime — not eyeballs alone. Second, the verified
regime's diversion is **low but nonzero** (≈ 2% incidence, ≈ 7% without the
reputational stake): a grand-corruption temptation tail keeps a residual
that strong control does not eliminate, matching Olken's finding that audits
cut leakage without erasing it (2007; Avis, Ferraz, and Finan 2018; Becker
1968) — ex-ante deterrence, not an empirical zero. Within the PROBABLE world, the
result is stable across seeds and under **cost/size-correlated** delivery
risk (project cost independent of modeled value), and a joint
delivery-parameter sweep, conditional on the declared world, keeps coverage
ahead across the sampled space. Delivered value here is measured
at *equal budget*; the administrative *cost* of running each institution is
a separate layer (Finding 10).

**Finding 6: visibility sustains the standard; naive reputation markets
concentrate faster than they select.** A sixth pre-registered experiment
(`research/e6-reputational-competition-design.md`) isolates the incentive
channel from deterrence entirely — a career-concerns setting in
Holmström's (1999) sense: an all-honest executor pool with adjustable
effort and no possibility of diversion (the model prices no explicit
effort cost; cost-minimization is encoded behaviorally as the opaque
regime's decay rule). In the opaque regime,
effort collapses toward cost-minimization (0.49 → 0.24 over twenty-four
cycles) — not through malice, but because effort has no return and no
visible standard exists to imitate. Making verified quality visible
sustains effort near its starting level, and the visible-competitive
regime produces a material visibility-driven delivery gain over the opaque
baseline — a pure incentive gain with zero diversion in the model. Two pre-registered predictions failed
informatively. Visibility alone carries most of the effect: the mirror
precedes the market (the behavioral rule ties imitation to visibility, so
part of this is by construction — but the construction encodes the claim
that opacity erodes professional norms by removing the standard itself).
And naive reputation-weighted assignment concentrates work dramatically
(assignment Gini 0.84 versus 0.34) while tracking true ability only
weakly — early-luck lock-in, the cumulative-advantage dynamic of
information cascades reappearing in the executor market. The design
lesson runs in both directions: verified visibility is where the quality
incentive lives, and any strong reputation weighting — human or
algorithmic — needs the concentration observability, entrant floors, and
opportunity-normalized reputation the corpus prescribes. In Core v0,
reputation informs funders' choices rather than automatic assignment,
with concentration visible by construction — and it never excludes: no
protocol rule bars a funder from choosing any admissible actor on
reputational grounds.

**Finding 7: an audit-parameterized baseline — what it does and does not
calibrate.** The manuscript-review round's sharpest attack held that the zero-control
baseline is a caricature — real administrations run audit institutions,
retentions, bonds, and inspection — and the answer was a seventh
pre-registered experiment (`research/e7-calibrated-baseline-design.md`)
with a committed withdrawal condition: if the headline collapsed against
a fair baseline, it would be withdrawn, not requalified. The
audit-parameterized status-quo arm draws its parameters from published
audit-institution findings (a documented-practice-informed scenario;
verification of some primary sources is ongoing) — detection from Chile's comptroller works
studies, retention from documented payment-state practice, recovery from
Mexico's ASF series, leakage anchors category-matched to construction
(Olken 2007; the multi-country evidence base spans the U.S. GAO, the U.K. NAO, the
European Court of Auditors, Brazil's TCU and CGU, and the comptrollers
of Chile, Peru and Colombia; Ferraz and Finan 2008) — with the planner's
inspection bandwidth scaled to scope and coordinated signal bias swept
as the Condorcet failure regime. The withdrawal condition was not
triggered *within this apparatus*: against the audit-parameterized baseline the
earlier compound was substantial at scale but only near-parity at municipal
pilot scale (10-40 projects), where central selection with full coverage is
competitive and the case rests on
delivery and metering. But the audit evidence *parameterizes the baseline's
leak*; it does **not** calibrate the Core v0 institutional treatment effect,
which the later pre-registered selection gate did not support recalibrating (Section 6)
— so these E7 figures are retained as conditional
apparatus outputs, not a surviving headline. Within this apparatus, and
conditional on its stipulated opportunist-cost distribution and no-memory
baseline, one qualitative result is instructive: at the model's audit-reported
detection intensity (primary-source verification ongoing), without reputational
memory, the model deters no diversion — the audit-parameterized regime's incentive threshold lies
below every modelled opportunist's cost, so its leak equals the zero-control
regime's, and in the model the added detection reduces the visibility gap (from
twenty-nine to nineteen points) rather than raising delivered value. These are
model-internal outputs of E7's stipulated apparatus, not an estimated causal
effect of real-world auditing. The audit-parameterized arm's leak lands inside
the audit-reported leakage band (24-48% in works); the model's leak mechanics, fed
audit parameters, are *consistent with* the documented range — this parameterizes
the baseline's leak, it does not calibrate the institutional treatment effect. And the bias
sweep bounds the open-construction claim honestly: distributed
selection degrades near-linearly with coordinated signal capture and
crosses below a competent full-coverage municipal planner only at
roughly a thirty percent coordinated share — it degrades, never
collapses, and remains superior everywhere below ten percent.

**Finding 8: the architecture ranking survives endogenous behavioral
participation.** A pre-registered eighth experiment (E8,
`research/e8-behavioral-participation-design.md`) then replaced the
participation side of these arms — the default share and informed share
the architecture arms had imposed — with adoption trajectories generated
by a companion behavioral study: a Core v0-conformant agent-based model
of awareness, registration, participation modes, and trusted
microdelegation, calibrated with LLM-elicited synthetic priors
(replication package: the distributed-governance-experiments
repository). The architecture ranking is invariant across the three
synthetic populations and all scales, including a launch trajectory that
begins near zero participation — where the default layer anchors the thin
early cycles by construction. The behavioral study also independently reproduces the
informed-share assumption these experiments had imposed: 0.309 emergent
against the 0.30 assumed.

**Finding 9: the full stack — planning, selection, and delivery — and an
honest accounting of what each layer contributes.** A ninth experiment
(`scripts/simulation/e4-v5/e9-fullstack.mjs`, built on E5) adds the third
architectural layer, **planning** (constructing the eligibility frame and
per-sector budget shares): E9 compares central and distributed versions of all
three layers in a 2×2×2 factorial applied across ten persistent sectors, the
COFOG count (United Nations 1999). A
Shapley attribution decomposes the all-distributed-versus-status-quo gap
into layer contributions that sum exactly to it. In the declared PROBABLE
world the full stack beats the status quo by ≈ +57 points of the reference
[95% conditional Monte-Carlo interval +56.8, +58.1], and the conditional
Shapley split is planning ≈ +3, selection ≈ +43, and delivery ≈ +11 points.
Two honest qualifications govern the reading. First, the attribution is *conditional*: every layer
value is computed through the declared planning sector generator, so the
standalone, quantified **selection** and **delivery** figures are the E5
ones (no planning layer); E9 contributes the three-layer *structure* and
the attribution *method*. Second, **selection and delivery are large in
PROBABLE but not robust across the four named worlds** (PROBABLE, PRO_CENTRAL,
MYOPIA_OFF, and PRO_DIST): selection turns negative in
PRO_CENTRAL, and delivery turns negative in PRO_DIST because stronger delivery
magnifies a harmful portfolio. Despite those component reversals, the full
Core v0 diagonal remains positive in all four — a fact the paper
reports rather than hides. The named-world decomposition (conditional Shapley
attributions through the declared sector generator, points of the reference):

| world | full-stack gain | planning | selection | delivery |
|---|---|---|---|---|
| PROBABLE | +57.1% | +3.1% | +42.7% | +11.3% |
| PRO_CENTRAL | +14.7% | +1.5% | −2.8% | +16.0% |
| MYOPIA_OFF | +44.7% | +2.5% | +29.5% | +12.6% |
| PRO_DIST | +172.6% | +4.8% | +169.1% | −1.4% |
The **planning** layer's value operates chiefly through **agenda capture**
— the central keeping whole high-need, low-visibility functions off the
menu (the second face of power; Bachrach and Baratz 1962; Schattschneider
1960). That mechanism is real and its *direction* is anchored (the COFOG
taxonomy; the pre-election shift toward visible spending, Drazen and Eslava
2010; the systematic neglect of maintenance and prevention, Rioja 2003),
but its *magnitude* cannot be identified without country-specific budget
data. We therefore report planning only as the **conditional** Shapley
contribution in the table above (≈ +3 points, small and positive across the
named worlds), **not as a standalone anchored figure**: quantifying it as a
standalone effect with the mechanism switched off would understate it, and
switched on it is not yet anchorable. Chile provides a qualitative illustration only:
mental-health spending remained near 2% of health spending over 2007–2015,
despite mental disorders being the country's leading cause of disability
(Errázuriz et al. 2015). That pattern is
consistent with low-salience under-provision, but it neither identifies
agenda capture nor calibrates its magnitude; mental health is a funded
subfunction, not an excluded top-level COFOG function.

**Finding 10: administrative cost favors Core v0 — roughly neutral only under a
conservative low-spread floor, a declared advantage under an asymmetric-cost scenario.** A tenth
experiment (`scripts/simulation/e4-v5/e10-costs.mjs`) adds the administrative
and machinery costs each institution operates and Core v0 largely replaces — the
value-proxy studies, allocation and prioritization apparatus, and licensing
the central carries, against Core v0's own platform and control machinery.
The model handles these costs in three ways. It subtracts them from each
arm's *budget* before selection, so the value loss is sub-proportional
because greedy funding cuts the marginal projects first; it charges Core v0's
own verification and recovery machinery rather than treating it as free; and
it avoids double-counting the delivery leakage already modeled in E5. We report
two **declared** scenarios over identical cost perimeters (steady-state régime costs
only — one-time implementation is **CAPEX-excluded, not amortized**). Under a
**conservative low-spread floor** (κ_C = 0.08, κ_D = 0.05, both inside a 1–10%
administrative-overhead band) the layer is roughly neutral: administrative cost moves the
modeled gap from +58.6 to +57.7 reference points, a −0.9-point contribution. But that
low spread is a deliberate floor, not the only defensible case. In steady state the
central's machinery — appraisal and value-proxy studies, the prioritization and
allocation bureaucracy, approvals, and the salaries that run them — is plausibly a large
recurring overhead, while Core v0 runs on a digital platform plus AI-assisted and
citizen-sourced fiscalization at near-zero-marginal cost. A second, **asymmetric-cost
scenario** (κ_C ≫ κ_D) is therefore declared, and it splits into two statements. First,
an **assumed net-budget difference**: under a declared κ_C = 0.12 versus κ_D = 0.02 the
central's modeled steady-state operating cost exceeds Core v0's by about a tenth of the
budget — a declared scenario input, not a measured saving (and κ_C = 0.12 reads as
recurring operating cost broadly — appraisal, prioritization, salaried bureaucracy — not
pure overhead, since it sits just above that 1–10% band). Second, its **delivered-value
effect** is smaller (about +0.4 reference points on the gap) because that freed budget
funds marginal, low-value projects (the net-budget sub-proportionality). So the honest
reading is not "no cost difference": the **direction favors Core v0**; "roughly neutral"
holds only under the conservative low-spread floor; and the declared asymmetric-cost
scenario is a declared — though welfare-modest and unquantified — cost advantage. The
cost shares are declared scenario inputs, not measured arm-specific costs: the
central-machinery direction reflects the large, recurring appraisal/prioritization
bureaucracy documented in public-administration cost accounts; the platform side reflects
the low operating cost of established public e-procurement systems (KONEPS, ChileCompra,
ProZorro) and near-zero marginal AI/citizen fiscalization.

**What the computational program establishes.** Stripped to essentials: (1) the
load-bearing contributions are the architecture and the qualitative credit-versus-coverage
mechanism — credit-pressured central ranking underweights diffuse value that
coverage-based distributed selection surfaces; (2) taken together, E5–E10 locate the
conditional advantage in selection and verified delivery, not overhead: E5 measures those
margins separately on matched portfolios; E9 supplies a conditional full-stack attribution
whose component signs vary by world while the full diagonal stays positive; and E10 leaves
administrative cost roughly neutral under a conservative low-spread floor, with the
direction favoring Core v0 (a declared advantage under an asymmetric-cost scenario); (3) a
v1.14 four-scenario robustness extension (a *separate, exploratory* analysis under a
different data-generating process) models the central as the evidence *directionally*
describes it — *near-blind to diffuse harm on the low-visibility long tail* (Hayek 1945;
Scott 1998; Olson 1965; Bandiera–Prat–Valletti 2009): coverage-routed selection recovers
≈ 98% of the model's greedy reference against the central's ≈ 44%, a conditional model
contrast reported as declared reference points, not calibrated impact; and (4) the earlier
compound value-per-budget multiplier is retired here as a calibrated effect — under the
frozen pre-registered rule the sole confirmatory selection gate did not clear the 0.05
rebuild bar (§6, Appendix E4). Planning remains unresolved quantitatively — its
agenda-capture mechanism is directionally grounded, but its standalone magnitude is
deliberately deferred rather than manufactured from an unanchored scenario. Any calibrated
total delivered-value effect on real data remains future work.

