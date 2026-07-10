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
- **Delivery (1.43×):** unchanged.
- **Primary knob:** `corr(S,P)` (agenda↔value misalignment). Secondary: η (harm-blindness),
  the coalition slice of P.

## Part 6 — Relation to committed work (corrected from the first draft's "supersede")
- **KEPT:** harm-blindness (secondary), the delivery layer (+43%), capture-resistance (Props
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

## Next
1. Implement the S/P world + central-max-P in a fresh experiment (keep the pipeline as the v1
   harm-blindness reference until v2 validates).
2. Same correction is owed to **E4** (the standalone allocation experiment) — see roadmap.
