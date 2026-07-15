## Appendix E4: the symmetric gate and the four-scenario robustness map

This appendix gives the full design of the pre-registered symmetric gate (summarized
as "Quantitative status" in §6) and the complete v1.14 four-scenario robustness map
(headlined in §6): the scenario table, the harm-myopia decomposition, the frontier,
the benchmark theorem, and the four limits.

### The symmetric credit-versus-coverage gate (full methods)

Because this is the paper's one confirmatory computation, its design is stated in full
here rather than only by reference. Each world holds K = 500 candidate projects; for
each, N = 5000 potential participants are considered, each interested with a
project-specific probability, so the interested reach is at most N and endogenous.
Both arms then see the
same candidate pool, the same exact costs, the same truth net[j] = S[j] − h·cost[j],
delivery held at **parity**, and the same report noise report = v + Normal(0, τ);
each funds a **greedy** set under a budget of one-third of total project cost, is
eligible to fund a project only where *its own* noisy estimate of net is positive
(no oracle gate), and its delivered value is scored on the projects' *true* net.
The arms are symmetric except for the coverage mechanism and its matched
counterparts. *Distributed (endogenous coverage):* each interested citizen reports
independently with probability p if her value v ≥ 0 and p·(1 − β) if v < 0 (adverse
voice bias), giving ĥS_D = Σreports / p, ranked by estimated net per cost.
*Central (competent value-reader):* an appraisal budget matched to the distributed
arm's *expected* total reports in that world, spread **evenly** across projects as a
rounded fixed per-project bandwidth m_C = round(expected reports / K) (so the two
arms' appraisal totals are equal in expectation up to that rounding); per project it
samples m_C interested citizens, observes v + Normal(0, τ), and forms its own noisy
ĥNet_C = reach·mean(observed) − h·cost. It ranks by score = (1 − λ)·z(ĥNet_C/cost) + λ·z(P/cost) — its **own noisy
estimate**, never the true net — where P is claimable political credit (the
electoral credit-claiming and traceability logic by which visible, attributable
benefits are favoured over diffuse ones; Mayhew 1974; Arnold 1990) and λ is bounded
credit pressure (a *posited* pressure whose real-world magnitude must be measured,
not assumed). Credit moves *ranking*, never eligibility (no knowingly
value-destroying planner). The legitimate asymmetries are therefore only these:
distributed reports self-route to projects citizens care about while negative
stakeholders participate less, and central appraisal is spread evenly while its
ranking carries credit pressure — everything else is shared. The estimand is
**Δ = (D − C)/O** per world, where D, C, O are delivered true net for the
distributed, central, and full-information greedy arms and O is a reference level,
not an optimum. The frozen grid sweeps λ ∈ {0, 0.1, 0.2, 0.3} (λ = 0 a negative
control), a latent-correlation setting ρ ∈ {0, 0.5, 1} (realized corr(S, P) ≈ 0.00,
0.30, 0.82), and h ∈ {1.5, 2.5, 4} over 100 seeded worlds, in a baseline
observation regime (p = .35, β = .30, τ = .5) and a matched-budget low-information
stress regime (p = .15, β = .60, τ = 1.0). The **pre-registered decision rule** —
frozen before running and designed by the independent auditor to be adversarial —
required, for a GO on rebuilding the quantitative engine, at least 15 of the 18
primary cells with mean Δ > 0, a pooled **median Δ ≥ 0.05**, a bootstrap lower
bound > 0, and median Δ ≥ 0 under the stress regime, plus a guard to pause if the
λ = 0 control itself exceeded 0.05. The result was **NO-GO**: the advantage was
positive in all 18 primary cells, but the pre-registered pooled **median Δ = 0.025**,
below the 0.05 rebuild gate; the λ = 0 negative control sat at ≈ 0.016, within the
pause guard (no hidden asymmetry flagged). A **post-hoc** world-cluster
ratio-of-sums estimate was Δ = 0.026 [0.023, 0.029] (Monte-Carlo uncertainty on the
simulated data-generating process, reported separately from the median). The
advantage rises with credit pressure λ and falls as credit aligns with value — the
credit-versus-coverage mechanism. It is small for this estimand, and its pooled median
missed the registered 0.05 bar; under the frozen rule the calibrated multiplier is
therefore retired and the simulation treated as an illustrative frontier, and the
paper rests on the architecture and the mechanism direction, now sharpened by the
robustness map below.

### The four-scenario robustness map (v1.14)

The pre-registered gate above equips the central arm with competent, *harm-aware*
appraisal. A v1.14 extension asks the empirically-grounded question: what happens when
the central is modelled as the evidence describes it — **near-blind to diffuse harm on
the low-visibility long tail**? That near-blindness is over-determined by the
literature: the knowledge problem (Hayek 1945), state legibility (Scott 1998), diffuse
costs politically under-weighted (Olson 1965; Schattschneider 1960; Wilson 1973), 83%
of government waste being *passive* rather than chosen (Bandiera, Prat and Valletti
2009), the seen-versus-unseen (Bastiat 1850), and agenda control (Bachrach and Baratz
1962). The model realizes it as a salience-gated harm term,
M_C = a + b·S⁺ + w·(v_p − S⁺) − b_H·s(V)·H + η, whose harm-detection s(V) rises with a
project's visibility, while the distributed arm registers harm across the whole
distribution. **Net-allocation participation is universal by architecture (p = 1)** —
in Core v0 profiles and delegates allocate on behalf of the passive, so it is a *fact*,
not a low participatory-budgeting turnout. Its *signal quality* is an anchored
composition: ~5% active direct reports (the single-digit turnout figure), ~35%
microdelegation (individual signal, revocable — Kling et al. 2015), and ~60% profile
rules (a high-alignment category default, since people overwhelmingly keep defaults —
Samuelson and Zeckhauser 1988). Full literature anchoring of every calibration knob is
in `research/e4-calibration-literature-anchors.md`. Scoring delivery on true value,
four declared scenarios (plus one diagnostic contrast) map where each institution
stands, as the signed fraction of the full-information greedy benchmark, parity at zero
(`npm run e4:scenarios`):

| scenario (assumptions) | m ± 95% CI | Core v0 | central | winner |
|---|---|---|---|---|
| **Probable — the declared reference scenario** (central myopic to diffuse harm, projecting, credit-tilted; distributed on its anchored coverage composition) | **+54.0%** [+53.2, +54.8] | 98.2% | 44.2% | **Core v0 (decisive)** |
| **Only harm-myopia switched off** (`MYOPIA_OFF`; diagnostic contrast: probable, changing ONLY the two harm-gate coordinates) | **+37.6%** [+37.0, +38.2] | 98.2% | 60.6% | Core v0 |
| **No-myopia bundle** — probable, but the central is granted harm-sight + unbiasedness + precision + no credit | **+13.8%** [+13.5, +14.1] | 98.6% | 84.8% | Core v0 |
| **Distributed's favourable case** | **+205.2%** [+202.9, +208.1] | 95.6% | −109.6% | Core v0 |
| **Central's declared favourable endpoint** (a residually-imperfect reader on a near-harmless world) | **−2.3%** [−2.5, −2.2] | 95.3% | 97.6% | central (narrow model-internal lead) |

**The anchored result is large and robust across the declared space (exploratory).** Under the **declared reference
scenario** the distributed arm delivers ≈ 98.2% of the benchmark and the central
≈ 44.2% — a +54-point gap — and coverage wins across essentially the whole anchored
parameter space. Turning off harm-myopia *alone* (the two harm-gate coordinates)
recovers about **41%** of the gap (16.4 of a 40.2-point decline); granting the central
the *full* competent-but-harm-aware bundle recovers the rest yet still leaves coverage
ahead (**≈ +13.8%**) — so even a central idealized in every way, **harm-sight included**,
still loses. The central pulls narrowly ahead only by
**abandoning the declared premises**: a corrected reader (no myopia — against
Hayek/Scott/Olson/Bandiera; no projection — against Broockman and Skovron 2018) on a
near-harmless world reaches only ≈ −3%, a marginal, anti-empirical corner. That corner
is reported **symmetrically** with the distributed arm's *equally-idealized* corner —
built to mirror the same recipe: perfect distributed signal on a harm-rich world with
the central kept at its *anchored* myopia — which reaches **≈ +118%** (the broader
`PRO_DIST` scenario in the table, +205%, is more favourable still because it *also*
degrades the central below its anchored level). Idealization is wildly asymmetric, and
neither corner is empirically grounded. The one
sensitivity that materially shrinks the anchored gap is **correlated / common-mode
error** on the profile-and-delegation share (a shared platform/recommender, or
delegation concentrated on super-delegates — Kling et al. 2015): it takes ≈ +54% down
to ≈ +44% (modest) and ≈ +26% (strong), crossing parity only at a large shared-error
level (σ_cm ≈ 2.1). No single-factor slice flips the winner over its plausible range;
the combined ceteris-paribus path from the declared reference to the fully-idealized
central endpoint crosses parity only at **t ≈ 0.92 of the declared segment**. This is
local, ceteris-paribus curve evidence — six one-factor slices plus one declared combined
path — not an exhaustive global frontier; a joint Sobol / Latin-hypercube sweep of the
full parameter space is deferred to future work. These magnitudes
are **declared, source-motivated reference points from a stylized comparative-
institutions model — a conditional model contrast, not target-domain calibrated field
effects**. The standing limits are: (i) the harm-gate's exact *magnitude* is a stylized
functional form — its *direction* is strongly anchored, and the result is robust across
the s_exp ∈ [1, 2.5] band (≈ +48% to ≈ +54%); (ii) the central inputs carry an
unpropagated transport gap — the political-opinion evidence identifies elite–constituent
*perception* error, and mapping it to project-level welfare error requires three
unestimated links (opinion misperception → project scoring → portfolio choice → realized
affected-party value), so those inputs are proxy-informed, not calibrated; (iii) the
reported intervals are 95% conditional world-bootstrap intervals at *fixed* scenario
inputs — finite-world simulation uncertainty only, excluding uncertainty in parameter
values, literature transport, functional form, and field implementation; the distributed
arm's independent-plus-common-mode error is its one structural sensitivity (above); and
(iv) delivery and administrative cost are handled in separate experiments — E5 adds
delivery (leakage) at *matched budget*, and E10 adds administrative cost as a *net-budget*
reduction before selection — not folded into this selection map. The
reproducible scenarios, frontier, evidence, theorem, and full literature anchoring are
in `scripts/simulation/e4-v5/`, `research/e4-parity-theorem.md`, and
`research/e4-calibration-literature-anchors.md`.

### E4 calibration targets

The E4-v4/v5 magnitudes are model-internal; the table names, for each parameter, the
real dataset that *could* inform it — making the boundary between model-internal and
empirically-anchored a visible line rather than a caveat buried in prose (details in
`research/e4-calibration-targets.md`). The central %-benchmark is an *output* the
model computes, but mapping it to observed realized-to-appraised ratios is **not a
direct overlay**: the two are different constructs (§6), so it is a **candidate
validation target requiring an explicit construct bridge**, not a one-step
calibration.

| Model quantity | Model value | Real-world proxy | Candidate dataset(s) | Status |
|---|---|---|---|---|
| central %-benchmark | 44–85% | realized ÷ appraised value | World Bank IEG ratings; Flyvbjerg megaproject DB | candidate target; needs an explicit construct mapping |
| η (harm-blindness) | 0–0.5 | passive vs active waste share | Bandiera-Prat-Valletti 2009 (83% passive, setting-specific: Italian standardized-goods procurement) | anchored-direction |
| β (voice inequality) | 0.2–0.5 | PB participation bias | NYC / Paris / Porto Alegre; Decidim / Consul | calibratable |
| q, m (detection) | q ≈ 0.5–1%, m in hundreds | complaint / whistleblowing rates | FTC Consumer Sentinel; NYC 311; Dyck et al. 2010 | calibratable |
| λ threshold | central ≈ 0.10 | procurement rents / bribe depth | Olken 2007; WB Enterprise Surveys | calibratable |
| penalty f | equal both sides | legal sanction scale | held equal (conservative) | scope choice |

The v1.14 four-scenario map (above; headlined in §6) makes the same anchoring explicit for its harm-myopia model: the visibility long
tail is source-motivated by heavy-tailed public procurement (Skuhrovec et al. 2013), participation by
participatory-budgeting turnout, and the harm-detection gate by the agenda-setting/salience literature; the
per-knob anchors and their strength are recorded in `research/e4-plausible-anchors.md`, with the reproducible
scenarios, frontier, and theorem in `scripts/simulation/e4-v5/` and `research/e4-parity-theorem.md`.

