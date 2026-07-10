# E4/E5 — Value model v2: from harm-blindness to agenda-capture + coverage

## Status
DESIGN CONSOLIDATION (2026-07-09), from a Socratic dialogue with the author that reshaped the
value model. **Not yet implemented** — this note fixes the terrain before touching code, and is
pending the author conversation that follows. It supersedes the *mechanism* of the current E4/E5
pipeline (`e4e5-pipeline.mjs`, the harm-blindness frontier β*=1−η) while keeping the delivery
layer. Related: [[e4e5-analytical-propositions]], [[e4e5-confirmation-bias-design]],
[[e4e5-code-review-synthesis]], [[value-model-core-v0]].

## The shift in one line
The distributed advantage is **not** that citizens see *harm* the central is blind to (harm is
rare, so η barely bites). It is that the union of a million citizens' **dispersed knowledge
covers the value space** — including the high-value, low-visibility tail — while the central
optimizes **political-class utility**, a narrow agenda nearly orthogonal to social value.

---

## Part 1 — The corrected value distribution (projects are LOPSIDED, not coin-flips)
Value is subjective and non-monetary (Menger): "how good/bad is it that this exists," with the
monetary cost stripped out. Three worked examples (city of 1M, everything free):

| Project | Sp (positive) | Sm (harm) | Net | Shape |
|---|---|---|---|---|
| Elderly home (feeds 1500/yr) | ~850k mild + 15k intense | ≈ 0 | **++ thick** | lopsided-positive, low reach |
| Stadium (40k seats) | ~700k mild (fans) | ~20k intense (neighbours) | **+ thick** | lopsided-positive, high reach/permanence |
| (net-harmful ideological project) | fringe | broad + intense | **−− thick** | lopsided-negative |

Author's empirical read of the real project population:
- **~95% net-positive** (many strongly so); **<1% net-negative** (rare, usually ideological
  pushes that draw broad intense rejection); **few genuinely divisive** (Sp≈Sm slivers —
  ideological, e.g. a contested monument).
- **The net/gross ratio is high: Sm/Sp < 10% for most projects → net value is a *thick*
  fraction of gross, not a 0.7% sliver.**
- **Magnitude is set by REACH × INTENSITY × PERMANENCE, not by sign.** Almost everything is
  positive; what differs is *how much*. Stadium (700k, permanent 30 yr, visible) ≫ elderly home
  (1500 direct + diffuse approval, transient) — both good, very different magnitude.

**What this breaks in the current model.** `v = mean(0.01) + noise(sd 1.5)` makes every project
a coin-flip (Sp≈Sm → tiny-sliver net, ~27–50% net-negative). That is backwards: it lets
personal-taste variance dominate a minuscule consensual signal. Reality has a **large
consensual signal with a clear sign** and smaller idiosyncratic spread. Consequence measured in
`--corr`: at the calibrated cell, project-level corr(central-perceived, true) = 0.33 and even
corr(distributed, true) = 0.42 — both weak, because the true signal was a sliver. Also: proxy
noise (1.5) **averages out** over ~thousands of citizens per project (corr 0.329 vs 0.333 at
noise 0), so noise was never the mechanism.

## Part 2 — The corrected central distortion: AGENDA CAPTURE, not harm-blindness
If Sm ≈ 0 for ~95% of projects, harm-blindness (η) has almost nothing to be blind to → the
central would see ≈ true value → the whole η-advantage collapses. The real distortion is that
the central's **objective function is different**: it optimizes **political-class utility**
(re-election, ideology, self-interest, power games, visible credit-claiming), which is nearly
*orthogonal* to social value. It doesn't merely categorize badly — it **selects** projects that
matter only to the political class (quorum rules, destitutions, salaries, the president's
residence, ideological flagships) while neglecting high-value ones (elderly, children,
maintenance, prevention). **Transversal: class-vs-population, not left-vs-right.**

This is exactly the measured high-bias regime: cranking the ideological/self-interest tilt drove
corr(central-score, true-value) 0.66 → 0.05. The author's claim is that **reality is that
regime**, not the timid 0.3 the pipeline assumed. Grounding (hard): Buchanan & Tullock 1962
(public choice — politicians maximise own utility); Romer & Rosenthal 1978 (agenda control
imposes the setter's preferences); Gilens & Page 2014 + Achen & Bartels 2016 (policy tracks
elite, not majority, preferences — evidence policy ≠ public preference); this **refutes** Downs
1957 (median-voter convergence).

## Part 3 — The corrected distributed advantage: COVERAGE (Hayek), not harm-perception
When individuals allocate their own equal budget, they spread it across a **portfolio of
motives** (author's own decomposition): (a) self-benefit visible to them (the stadium — "I love
football"), (b) local social benefit they can see (a nearby elderly home), (c) social benefit
they *believe is invisible to everyone else* (a small rural school). Each person sees only a
handful of projects — but **across a million people, every worthy-but-invisible project has
someone who sees it and funds a slice.** The union of dispersed partial knowledge **covers the
value space, including the low-visibility tail**, which no single central agenda can enumerate.
This is Hayek 1945 (the use of dispersed knowledge) operationalised as a budgeting mechanism.

**So the advantage is COVERAGE, not perception.** Distributed = union of coverages ≈ spans the
tail. Central = one narrow self-serving agenda ≈ covers almost none of the tail. The knob is no
longer η (harm-blindness); it is **agenda↔value misalignment × coverage-breadth** (central
narrow, swarm broad).

## Part 4 — New mechanism sketch (for the rebuild)
- **Projects:** true social value lopsided-positive; magnitude = reach × intensity ×
  permanence; a heavy-tailed size distribution (few large-reach, a long tail of small-reach).
- **Citizens:** each has a **coverage set** (projects they can perceive/value: self + local +
  a few niche), and values honestly what they see (no harm-blindness needed — people know if a
  thing helps them). Coverage is partial and heterogeneous.
- **Distributed:** each citizen splits an equal budget across their coverage set by valuation →
  the aggregate funds every project someone sees-and-values → covers the tail (subject to
  thresholds).
- **Central:** allocates by its agenda set — narrow, weakly correlated with true value (the g
  function; corr ≈ measured 0.05–0.3) → funds its flagships, misses the tail.
- **Advantage:** the delivered-value gap = the high-value tail the distributed covers and the
  central's agenda ignores. Old η → agenda misalignment; old β (voice bias) → **thin coverage**
  of some worthy projects (few people see them → may not clear a funding threshold).
- **Delivery layer (1.43×) survives unchanged** — it is downstream of selection and independent
  of this rebuild.

## Part 5 — Relation to the committed work (what survives / what is superseded)
- **Superseded as the primary mechanism:** the harm-blindness frontier (β*=1−η, Prop 1), because
  harm is rare. The *algebra* was correct but modelled the wrong dominant friction. Keep it as a
  documented special case (the divisive-project minority where Sp≈Sm and harm matters).
- **Reinterpreted, not lost:** the confirmation-bias/`deltaPartisan` work IS the agenda-capture
  channel; the Sign-Flip proposition becomes a minority case; Non-circularity (scored on true,
  decides on covered/agenda) still holds and is *strengthened* (coverage ≠ scoring).
- **Kept intact:** the delivery layer (+43%, 1.43×), the capture-resistance block (Props 2–3),
  the metric/CI machinery, all engineering fixes.
- **This is a mechanism REBUILD of E4/E5, not a parameter tweak.** Decide: does v2 *supersede*
  the harm-blindness pipeline as the headline, or run as a *parallel* coverage model that the
  paper presents alongside (harm-blindness = the rare-divisive regime; coverage = the modal
  regime)?

## Part 6 — Honest open cabos (must be shown, not assumed)
1. **Tail must clear threshold.** If a rural school is seen by 50 people with small wallets, do
   their slices *sum* to fund it? The coverage advantage needs dispersed wallets to aggregate —
   thresholds, matching, and the discovery/default layers are load-bearing here, not decoration.
2. **The distributed also funds self-benefit** (the stadium slice). It is a *mix*, not a pure
   social-value maximiser; the advantage is **comparative**, and the private-capture share must
   be bounded (how much goes to "mine" vs "socially-invisible-good").
3. **Must demonstrate people actually allocate to (c)** — the believed-invisible social good —
   and quantify the share. If people spend ~all on self/visible, coverage of the tail collapses.
4. **Non-circularity of the central's misalignment.** Defining the central as "optimises
   political-class utility orthogonal to value" risks assuming the conclusion; the misalignment
   must be *measured* (Gilens-Page supplies it), not posited.
5. **Does the status quo really do this badly?** The advantage must be quantified against a
   central that still delivers *something*; coverage-gap is an empirical magnitude.

## Part 7 — Calibration targets that change
- The **27% net-negative** target (World Bank IEG "moderately unsatisfactory+") conflated
  **execution/cost failure** with **net-negative existence value**. Pure-value net-negatives are
  **<1%** (author). The IEG failure rate calibrates *delivery/execution*, not the value sign.
- New observables to calibrate v2: the **project size/reach distribution** (heavy-tailed —
  budget concentration data); **coverage breadth** (how many projects a citizen can meaningfully
  value — PB ballot data, attention studies); **agenda↔value misalignment** (Gilens-Page
  elite-vs-mass congruence; the share of the legislative agenda on political-class-internal
  matters); the **self vs social-invisible allocation split** (PB microdata: how citizens
  actually spread a participatory budget).

## Decision needed (for the conversation)
1. Supersede vs parallel: does the coverage model replace the harm-blindness headline, or sit
   beside it as the modal-vs-divisive pair?
2. Scope discipline (author's stated worry — "no dispersarse"): v2 is a bigger rebuild than the
   remaining Tier-3/4 calibration. Confirm before building, and freeze the pending v1 items
   (projSpread=0.010 calibration, A2 noise decision) as either folded-in or shelved.
