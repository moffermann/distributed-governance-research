# The Value Model of Core v0 — and how it maps to simulation assumptions

## Status
Design note consolidating the value theory agreed with the author, and mapping it
to the assumptions each simulated institution must make. Motivated by the
2nd reviewer round: E4 quietly assumed value was a single exogenous per-project
number θ that everyone senses with noise, which (a) is not what "value" is and
(b) tilted the central-vs-distributed comparison. This note fixes the foundation
before any re-run.

## 1. What value is (the mother metric)

The paper's mother metric is **delivered value per peso spent**. The denominator
is money. The **numerator, N, is NOT money** — it is the improvement in people's
quality of life that a funded project produces. Grounding: **Sen's capabilities**
(quality of life = expansion of people's real freedoms/functionings), aggregated
over people as in **Samuelson (1954)** for public goods.

> **N(project) = Σ_i N_i(project)** over *all* affected people, where
> **N_i = how much person i values the project existing** — its subjective
> usefulness to them (Menger: value is subjective, not intrinsic to the object).

Consequences, each of which the model must respect:

- **N_i can be zero or negative.** The desert pitch: no user benefits → N ≈ 0.
  The chess kid next to the pitch who is only disturbed by the noise: N_i < 0. He
  is a *nominal* beneficiary (age, location) but a *real* dis-valuer. "Beneficiary"
  is the wrong category; the right primitive is each person's own valuation.
- **N is context-dependent:** N_i depends on person-type × project-type × local
  fit. There is no context-free "quality of project #47." A pitch is worth
  `Σ` of the use-value of whoever would actually use it, here, now, against the
  best foregone alternative (Buchanan 1969, opportunity cost is subjective and in
  the mind of the chooser).
- **N is independent of who paid or how much.** A project donated for free that
  raises N helps as much as one overpaid 10×; what we measure is N. Money is the
  denominator, not the value.

## 2. Value is *revealed* by costly voluntary acts — and the wallet democratizes it

We do not observe N_i directly (it is private and subjective). We infer it from
**voluntary, costly actions** — **revealed preference (Samuelson 1938)** and
**costly signalling (Spence 1973)**: what a person will *sacrifice* for reveals
their true valuation; cheap talk does not.

- **Directing your own (equal) wallet share** to a project is a costly choice
  (funding A means not funding B — real opportunity cost). It reveals *your* N_i.
  Spending *other people's* money (the politician) reveals nothing about the
  spender's valuation — the correct, inverted use of Friedman's "other people's
  money" point.
- **The equal-per-citizen quota (H025) turns revealed preference from
  willingness-to-pay (plutocratic — the rich reveal "more") into
  willingness-to-allocate-your-equal-share (egalitarian).** One sincere priority,
  one unit of weight — not one dollar, one vote. This is the anti-capture floor.
- **Negative/objection/denuncia signals are also N-signals** — they reveal
  negative or harmed valuation, and are themselves N-weighted: a person only
  bothers to object/report when their N for the project is low or harmed. This
  correctly targets integrity-enforcement at value-harm, but carries an honest
  residual: **under-reporting of real harm** via the free-rider / bystander effect
  (Latané & Darley 1968, the Kitty Genovese case; Olson 1965). Reporting is a
  public good and is under-provided; the architecture therefore never relies on
  voluntary reporting alone (seeded controls, cross-corroboration, evidence
  contracts).
- **Weight signals by cost.** Funding (costly, opportunity-cost-bearing) is the
  strong value signal; a free up/down vote is expressive and inflatable
  (Brennan & Lomasky 1993) → it modulates *discovery* and *deliberation*, it is
  **not summed into N**.
- **Silent valuers** (benefit but never signal) are captured by the **default
  layer** (equal share + "near me" routing under mandate), not by proxies — which
  is exactly why Finding 2 measures "the anchor carries quality."

## 3. Mapping to the three model roles

### 3a. Distributed institution (Core v0) — reveals N directly
- Each citizen holds a private N_i for the projects they *perceive* (near /
  affected). They reveal it by allocating their equal wallet share (positive N)
  or objecting (negative N).
- Aggregate steering ≈ `Σ` of revealed N_i over participants **+** default-routed
  N for the silent.
- **Strength:** reads the true subjective valuations, including the intensity and
  the negative valuers (the chess kid), where they exist.
- **Real weakness (must be modelled, not assumed away):** (i) only *perceived /
  participating* citizens signal; (ii) **strategic capture** — organized groups
  coordinate funding/objection to inflate their projects, a systematic bias that
  does **not** average out; (iii) perception noise on distant projects.

### 3b. Central institution / status quo (the politician) — estimates N from proxies
- Does **not** observe N_i. Observes **aggregate proxies** correlated with N:
  head-count in the catchment, demographics (age/social structure), existing
  supply. Can therefore rule out the desert (head-count ≈ 0) but cannot see
  intensity, local fit, or negative valuers.
- **Systematic lobby/salience bias (Olson 1965):** organized and visible interests
  inflate the politician's *perceived* value on their projects.
- Spends **others'** money → no revealed-preference discipline on the politician's
  own valuation.
- **Strength:** sees the coarse aggregate structure cheaply.
- **Weakness:** blind to intensity/fit; mis-classifies nominal beneficiaries
  (counts the chess kid as +); skewed to the organized and the visible.

### 3c. How we represent "what the politician sees of the real value"
> **N̂_central(project) = g(head-count, demographics, existing supply)
>   + λ_lobby · organized-interest(project) + ε_p**
where `g(·)` is monotone but coarse in the true `Σ N_i`, `λ_lobby` is the Olson
skew toward organized/visible interests, and `ε_p` is inspection noise reducible
only by spending budget on evaluation (Section on the central planner in the
E4-v2 design). The politician's estimate correlates with true N but
**mis-classifies exactly where subjective/local valuation diverges from the
proxies** — the intensity, the fit, and the sign (the chess kid).

## 4. What this changes for the experiment
The unit being estimated is no longer an invented θ but **the true social value
`Σ N_i`**, a property of project × context × people. The contest is: *which
institution steers scarce budget toward high-`Σ N_i` projects, at equal cost, and
how does the answer depend on scale and on citizen capture?* The answer will be a
**frontier**, not a headline — see `e4-v2-fair-comparison-design.md`.
