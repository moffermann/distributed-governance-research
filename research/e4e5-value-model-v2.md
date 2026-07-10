# E4/E5 — Value model v2: random noise → systematic agenda-capture (P)

## Status
DESIGN, converged with the author (2026-07-09) through a Socratic dialogue, then corrected from
an over-stated first draft. **Not yet implemented.** This is a *targeted mechanism fix*, not the
full rebuild the first draft implied: harm-blindness is KEPT (real, literature-backed, now
secondary); the inert **random-noise** term is RETIRED; a **systematic** distortion — the central
maximizes political capital **P** — is ADDED as the primary source of misallocation. The delivery
layer and all engineering machinery survive. Related: [[e4e5-analytical-propositions]],
[[e4e5-confirmation-bias-design]], [[e4e5-code-review-synthesis]], [[value-model-core-v0]].

## The shift in one line
We modeled the politician's value-distortion as **random noise**, which averages out over
thousands of citizens and never moves the needle (measured: corr 0.329 with noise vs 0.333
without; the same inertness dogged E4). The real distortion is **systematic**: the central
maximizes **P = the political capital a project yields**, which is structurally misaligned with
social value **S**. Random cancels; systematic does not — that is the whole correction.

## Part 1 — The value distribution is LOPSIDED (context that makes the fix necessary)
Value is subjective and non-monetary (Menger): "how good/bad is it that this exists," cost
stripped out. Author's empirical read (three worked examples — elderly home, stadium, a
net-harmful ideological project — in the dialogue):
- **~95% net-positive** (many strongly so); **<1% net-negative** (rare, ideological, draw broad
  intense rejection); **few genuinely divisive** (Sp≈Sm slivers).
- **Sm/Sp < 10% for most projects → net value is a *thick* fraction of gross, not a 0.7% sliver.**
- **Magnitude = REACH × INTENSITY × PERMANENCE, not sign.** Almost everything is positive; what
  differs is *how much* (stadium: 700k, permanent, visible ≫ elderly home: 1500 direct + diffuse
  approval, transient — both good).

Consequence: `v = mean(0.01) + noise(sd 1.5)` makes every project a coin-flip (Sp≈Sm → sliver
net), which is backwards, and it made harm (Sm) look large when in reality Sm≈0 for most projects.
So harm-blindness, alone, has little to bite on → it cannot be the primary mechanism.

## Part 2 — The fix: retire the random noise, add systematic P
- **Harm-blindness (η) — KEPT, secondary.** Real and literature-backed (Bastiat/Olson/Wilson).
  It bites where harm exists: the minority of projects with real Sm (the stadium's neighbours,
  the <1% net-negatives), and in the *ordering* (over-ranking flashy-but-harmful over clean). It
  stays, but it is not the driver.
- **Random-noise term — RETIRED.** It modeled "the politician sees value imperfectly" as random
  error, which averages out at scale (measured inert) and only produced a finite-N artifact
  (reviewer A2: it inflated the delivery floor 1.43→1.58 at small N for no real reason). Removing
  it both models reality better and kills A2.
- **P (political capital) — ADDED as the PRIMARY distortion.** The central maximizes P, not S.

## Part 3 — P defined: intrinsic credit-claiming (the defensible, transversal choice)
**P is a per-project scalar** — the political capital a project yields — and the politician ranks
projects by P exactly as a citizen ranks by S. Decision (author's criterion: pick what the
literature defends best, because it is attacked first): **P is INTRINSIC to the project (every
politician sees it the same), defined as its credit-claimability = visibility × traceability ×
beneficiary-concentration.** Why intrinsic over coalition-dependent:
- Coalition-dependent P is *partisan* ("my side / your side") → invites the "ideology in
  disguise" attack, and Potrafke shows partisan spending effects are *modest and weakening*
  (attacked with our own literature).
- Intrinsic P is **structural and transversal**: *all* politicians, any ideology, favour the
  visible/traceable/concentrated over the diffuse/invisible-but-valuable. The claim is not
  "politicians are bad" or "one party is worse" — it is that the **electoral reward structure is
  misaligned with diffuse social value.** Uncontestable in political science.
- **`corr(S,P) < 1` is therefore structural, not an assumption I inserted**: what earns credit
  (visible, concentrated) ≠ what creates value (often diffuse, invisible). Olson/Bastiat, now at
  the level of the *incentive*, not the perception.

Grounding (canonical, cross-ideological, heavily cited):
- **Mayhew (1974), *Congress: The Electoral Connection*** — credit-claiming: politicians favour
  visible actions attributable to them. The foundational reference.
- **Arnold (1990), *The Logic of Congressional Action*** — traceability: financed benefits are
  the ones a politician can trace to his name; diffuse costs/benefits earn no return.
- **Weingast, Shepsle & Johnsen (1981)** — pork barrel: concentrated benefit, diffuse cost.
- **Olson (1965) + Bastiat (1850)** — the visible/concentrated organizes and is seen; the
  diffuse/invisible does not.
- Misalignment magnitude: **Gilens & Page (2014)**, **Achen & Bartels (2016)** — policy tracks
  elite/organized preferences, barely the majority's (the empirical `corr(S,P)`); refutes Downs.
- **Ideological/coalition tilt (`deltaPartisan`) demotes to a MINOR SECONDARY component of P**
  (the "signaling/coalition" slice, bounded by Potrafke) — kept, not lost, but not load-bearing,
  so the result does not rest on anything partisan/attackable.

## Part 4 — The distributed reads S; coverage (Hayek) captures the diffuse tail
Each citizen allocates an equal budget across a portfolio of motives — self-benefit visible to
them, local social benefit they see, and social benefit they *believe is invisible* — by their
own honest S. Each sees only a handful of projects, but **the union of a million partial
coverages spans the S-space, including the high-value/low-P tail** the central's single agenda
ignores. Hayek (1945): dispersed knowledge, aggregated by budgeting. The distributed maximizes S
(not P); its advantage = it funds the high-S-low-P tail the P-maximizing central never reaches.

## Part 5 — New mechanism (for the build)
- **Projects:** true social value S (lopsided-positive; magnitude = reach × intensity ×
  permanence) AND intrinsic credit-claimability P (visibility × traceability × concentration),
  with a structurally imperfect `corr(S,P)` calibrated to Gilens-Page.
- **Central:** ranks by **P** → funds visible/traceable/concentrated (flagships, class-serving),
  neglects diffuse-valuable. Harm-blindness η applies as a *secondary* discount on its read of S.
- **Distributed:** each citizen ranks by their own S over their coverage set → union covers the
  S-tail. Voice bias β → thin coverage of some worthy projects (may not clear threshold).
- **Delivery (~1.30×, band 1.23–1.39×):** regrounded to λ_PI (IMF PIE-X, central production loss ~0.25,
  f_weak=0.75) with the distributed ~10× more capture-resistant (E4-v5, f_ver≈0.975). (Was 1.43× in the
  original leakage-study calibration.)
- **Primary knob:** `corr(S,P)` (agenda↔value misalignment). Secondary: η (harm-blindness),
  the coalition slice of P.

## Part 6 — Relation to committed work (corrected from the first draft's "supersede")
- **KEPT:** harm-blindness (secondary — REVIVED as a co-mechanism under the 35% net-neg correction),
  the delivery layer (~1.30×, regrounded to λ_PI + E4-v5), capture-resistance (Props
  2–3), the metric/CI machinery, all engineering fixes, the value-theory core (Samuelson S).
- **RETIRED:** the random-noise term (inert + A2 artifact).
- **ADDED / RE-CENTERED:** P as the primary systematic distortion; the harm-blindness frontier
  (β*=1−η) becomes the *special case* of the rare divisive/harm-bearing projects, not the
  headline. `deltaPartisan` is reinterpreted as the minor coalition slice of P.
- This is a **targeted mechanism fix**, not a from-scratch rebuild.

## Part 7 — Honest open cabos (show, don't assume)
1. **Tail must clear threshold** — dispersed small wallets must *sum* for niche projects
   (discovery/matching/default layers are load-bearing here).
2. **Distributed also funds self-benefit** (the stadium slice) — it is a *mix*; the advantage is
   comparative, and the private-capture share must be bounded.
3. **Must show citizens actually allocate to the believed-invisible good**, and quantify the share.
4. **`corr(S,P)` must be measured (Gilens-Page), not posited**, or we assume the conclusion.
5. **Quantify against a status quo that still delivers something** — the coverage/P-gap is an
   empirical magnitude, not a foregone win.

## Part 8 — Calibration targets that change
- The **27% net-negative** (World Bank IEG) conflated **execution/cost failure** with
  **net-negative existence value**; pure-value net-negatives are **<1%**. IEG calibrates delivery,
  not the value sign.
- New observables: the **project reach/size distribution** (heavy-tailed); **coverage breadth**
  (projects a citizen can value — PB ballots, attention); **`corr(S,P)`** (Gilens-Page
  elite-vs-mass congruence; share of the agenda on class-internal matters); the **self vs
  social-invisible allocation split** (PB microdata).

## MAJOR CORRECTION (2026-07-10, author) — headline ~2.0× → ~2.8×; harm-blindness revives
Two literature-grounded calibrations from the author (`drafts/positive-net-social-value-calibration.md`,
`drafts/public-investment-efficiency-loss-calibration.md`) correct two numbers below:
- **GROSS ERROR (net-negative share).** The earlier "<1% net-negative / lopsided-positive world" was
  wrong — it used *pure existence value*, ignoring the **opportunity cost of capital**. Net of the
  social hurdle rate, only **p_U+ ≈ 0.65** of implemented public projects have positive net social
  value (**~35% net-negative**; Pohl-Mihaljek 1992, 1,015 World Bank projects, ~75% EIRR ≥ 10% adjusted
  to 0.65; band 0.50–0.75).
- **MISSING VARIABLE (production efficiency).** Public-investment **efficiency loss λ_PI ≈ 0.25** (IMF
  PIE-X, 134 countries, band 0.20–0.30) — a *production* dimension distinct from selection (must NOT be
  multiplied naively with p_U+; model them separately, which v2 does). This grounds the delivery layer:
  central f_weak = 1−0.25 = **0.75**; the distributed is **~10× more capture-resistant** (E4-v5 capture
  block), so its loss ≈ 2.5% → f_ver ≈ **0.975** → **delivery ratio ~1.30× (band 1.23–1.39×)**, DOWN from
  the old 1.43× (which used harsher corruption-specific leakage studies, not the IMF cross-country gap).

**Corrected headline: ~2.8× (honest band ~2.4–3.3× over corr(S,P)∈[0.1,0.3] and λ_PI∈[0.20,0.30]; the
low-corr / independent-influence reading reaches ~3.3–4.2×).** Confirmed on a fresh held-out run
(seed base 5000) with the corrected defaults; see `e5-sp-preregistration.md`.
**= selection ~2.2–2.5× (net-neg avoidance + agenda-capture) × delivery ~1.30× (production, IMF + E4-v5 10×).**
(The earlier "~3.0× / 2.6–3.6×" floor was optimistic — the corr=0.3 endpoint is ~2.2–2.4×.)
Consequences: **(1) "bounded / best-vs-mediocre" is RETRACTED** — with 35% net-negative the central funds
value-destroying projects (delivers 33–41% of oracle), so it is good-vs-value-destroying. **(2) The
"agenda-capture is the SOLE driver" pivot over-corrected** — harm-blindness was declared inert on the wrong
<1%; at 35% net-negative it **revives as a co-mechanism** (a harm-blind central funds harm it can't see).
Both mechanisms now operate; agenda-capture remains the more defensible/transversal framing but is no longer
the only motor. Open refinement: model the opportunity-cost hurdle explicitly so the ~8% true-harm (EIRR≤0)
and ~27% below-opportunity-cost split is faithful (magnitude ~3× is robust to it).

## Build results & calibration (2026-07-10, `scripts/simulation/e5-sp-model.mjs`)
> **SUPERSEDED by the MAJOR CORRECTION above (2026-07-10).** The numbers in THIS section are the
> *pre-correction* calibration (<1% net-neg, delivery 1.43×, headline ~2.0×, "harm-blindness inert",
> "best-vs-mediocre"). They were the honest state at the time but are retracted: the net-negative share
> is ~35% (Doc 1), delivery is ~1.30× (Doc 2 + E4-v5), the headline is ~2.8×, harm-blindness revives,
> and "bounded/best-vs-mediocre" is gone. Read this section as the pre-correction record; the corrected
> state is the MAJOR CORRECTION block + `e5-sp-preregistration.md`.

The v2 core is built ON E4-v4's coverage (interested sets + participation sample + β), changing
ONLY the central's objective to P = credit-claiming. It NESTS E4: `central = (1−w)·credit·P +
w·harm-blind-value`, so w=1 reproduces E4 and w=0 is pure agenda-capture. Value heterogeneity was
decoupled from the net-negative share (heavy-tailed REACH carries the spread; high quality-mean
keeps net-neg <1%), so the world matches the author's (huge value spread, ~all positive).

- **The frontier survives and is strong.** At 0.5% net-neg, β=0.3: parity at ρ=1 (1.48×,
  ≈delivery floor) → **2.54× at ρ=0** (central delivers 56% of oracle). The advantage grows as the
  agenda misaligns, driven by agenda-capture, not harm.
- **Harm-blindness is inert when harm is rare (confirms the whole pivot).** The w=1 sanity (E4,
  harm-blind central) delivers **99% of oracle at <1% net-neg** — i.e. harm-blindness cannot be the
  driver; agenda-capture (56–96%) is.
- **Calibration to Gilens & Page (2014).** Their finding: the average citizen's *independent*
  influence on policy ≈ 0.03 (near zero); the *raw* mass-policy congruence ≈ 0.3 (inflated by
  elite-mass agreement). Our realized corr(S,P) sits in that band → **calibrated headline ≈ 2.0×,
  band 1.8–2.4×** for corr(S,P) ∈ [0.1, 0.3]. This RECOVERS the old ~2.2× magnitude on firmer,
  transversal public-choice ground. Report as a **band/frontier, not a point** (the honest caveat is
  the raw-vs-independent reading of Gilens-Page).
- **Layer decomposition (the ~2.0x is TWO layers, not three).** At the calibrated corr(S,P) ~= 0.26:
  **2.0x = selection 1.37x x delivery 1.43x** (roughly equal contributors). The band moves only in the
  selection layer (delivery fixed at 1.43x): selection 1.37x (corr 0.26) -> 1.64x (corr 0.10), so the
  headline's uncertainty = how captured the agenda is (Gilens-Page), NOT delivery. Within selection:
  distributed 97% of oracle (loses 3% to voice bias beta), central 71% (loses 29% to agenda-capture).
  **There is NO positive third (macro/category) layer** -- the `--cats` decomposition (categories +
  top-k gate + category-level agenda capture) gives a **macro factor <= 1x (0.76-0.99x)**: the coarse
  category gate RESCUES the credit-driven central (concentrates its budget into better-than-average
  categories, cen %oracle 64%->74%), helping it more than the already-good distributed -- the same
  forgiving-gate finding as the old harm-blindness pipeline. The three-layer view collapses to two:
  selection x delivery.
- **Why the advantage is BOUNDED (~2x, not 5-10x).** Even a fully value-blind central (corr(S,P)~=0)
  delivers **~49% of oracle**, because the world is lopsided-positive (~98% net-positive -> funding
  almost anything captures value). So the selection advantage is a **best-vs-mediocre gap (~1.4-2x),
  not good-vs-catastrophic**. A big multiplier would need many net-NEGATIVE projects (central funds
  harm -> delivers ~0), but those are <1%. Same root cause as harm-blindness being inert: rare harm
  bounds the selection advantage. Honest claim: "the central funds the mediocre-but-visible, we fund
  the best, times better delivery" -- not "the central funds disasters."
- **The lumpiness threshold is a NON-ISSUE in Core v0 (author correction).** The naive worry — a
  lumpy niche project can't get built if its funders don't pool the cost — assumes *free-riding*
  (people withhold, hoping others pay). That does NOT apply to Core v0: the funding money is
  **earmarked multi-use vouchers** (Friedman-style; tax money that *must* go to some project, cannot
  be withdrawn → **no opportunity cost → no strategic withholding**), and a **90-day return-and-
  reallocate rule** (if a project doesn't reach funding the money returns to the wallet → funding
  what you value has **no downside** → the money recycles until it funds something). So beneficiaries
  fund by genuine value and can **concentrate** their full voucher (budget/N) on what they value.
  Modeled faithfully (`--sweepL --concentrate=1`): the threshold barely bites — the advantage holds
  at its full **2.43× up to L≈4** (only ~2% of oracle value gated at break-even L=1, ~12% at L=4);
  it only erodes at implausible lumpiness (L=8→2.22×, L=16→1.80×). Contrast the wrong *spread /
  free-riding* model, which collapsed to 1.43× at L=1 — that is not Core v0. **The coordination is
  built INTO the mechanism (the return rule IS an assurance contract), so the ~2× is robust, not
  fragile.** Residual: only genuinely tiny-reach lumpy projects (<~30 beneficiaries), handled by
  matching-funds. (Earlier draft's "conditional on fragile coordination layers" was based on the
  free-riding model and is retracted.)

## Next
1. DONE (first build): S/P world + central-max-P (`e5-sp-model.mjs`), nests E4, decoupled value/net-neg,
   Gilens-Page calibration (~2×), lumpiness scope condition. The v1 harm-blindness pipeline stays as
   reference.
2. Same correction is owed to **E4** (the standalone allocation experiment) — see roadmap.
3. Open: pre-register v2 predictions; propagate to the paper (decide headline framing: ~2× conditional
   on coordination layers, grounded in agenda-capture); the self-benefit motive is deliberately NOT
   modeled (author: individual portfolios aren't extrapolable/measurable).
