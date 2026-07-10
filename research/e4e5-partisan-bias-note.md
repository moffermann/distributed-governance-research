# E4/E5 — Partisan sector bias: literature, model, and the (honest) finding

> **SUPERSEDED (2026-07-10 audit).** This note predates the value-model-v2 agenda-capture reframe; its
> harm-blindness (beta*=1-eta) framing and any headline multipliers (2.2x/2.09x/1.83x/2.0x) are
> HISTORICAL. Current state: `research/e4e5-value-model-v2.md` + `research/e5-sp-preregistration.md`.
> Kept for the record.

## Question
Should the central macro planner's ideological/political bias in sector selection be
modelled as symmetric Normal noise, and does it drive the three-layer macro advantage?
Author's intuition (correct): partisan bias is **concentrated in specific sectors**
(issue ownership), not symmetric — likely a skewed/Beta shape, not Normal.

## Literature (verified)
- **Petrocik (1996), "Issue Ownership in Presidential Elections," *AJPS* 40:825-850** —
  each party "owns" a set of issues/sectors: the left owns welfare, education, health,
  social/cultural protection; the right owns defence, security, crime, the economy.
  Grounds "the bias is concentrated in specific, party-aligned sectors."
- **Hibbs (1977), "Political Parties and Macroeconomic Policy," *APSR*** — partisan
  theory: left governments weight social policy, right governments fiscal restraint/order.
- **Potrafke (2011), "Does Government Ideology Influence Budget Composition?"; (2017)
  OECD review** — the calibration anchor: partisan effects on spending *composition* are
  **real but modest** (a few points of budget shares) and have **weakened since ~1990**.
  So a *modest* tilt is the defensible magnitude.
- **Comparative Manifesto Project (Budge, Klingemann et al.)** — parties concentrate
  emphasis on their owned domains (salience), supporting a concentrated (non-Normal) shape.

## Model
Each sector `a` gets an ideological position `pos_a ∈ [-1,1]` drawn **Beta-polarized**
(Beta(0.5,0.5), U-shaped → sectors strongly owned by one side). A governing party `gov ∈
{-1,+1}` (per seed) boosts aligned sectors, independent of value: the central's sector
score gets `+ δ · σ_true · gov · pos_a`, where **σ_true = the std of TRUE inter-sector
value (the signal)** — so `δ` is the tilt as a fraction of the real value spread
(calibrated to the signal, not the level). Distributed/oracle carry no partisan tilt.

## The finding (honest)
Sweeping `δ` (with a worker-propagation **bug fixed** — earlier sweeps had silently run at
the default): the partisan bias is **negligible at literature-modest levels** (δ ≤ 2 is
within seed noise; realistic 3-layer stays ~2.1–2.3×) and only bites at **implausibly
large** magnitudes (δ≈15 → 2.40×, δ≈50 → 2.52×). Reason: the central's *perceived*
sector-ranking spread is dominated by sector size and proxy noise — roughly an order of
magnitude larger than the true value spread — so a modest partisan tilt is lost in it.

**Conclusion:** the three-layer macro advantage rests on **harm-blindness** (the central
cannot see which sectors are net-harmful; the distributed reads true sector value), **not
on partisan capture.** This is *more* defensible — the result does not require assuming
political capture; the partisan bias is real (per the literature) but not load-bearing.
Honest caveat: whether a partisan tilt is "modest" depends on the comparison; relative to
true value differences a literature-modest tilt (δ≈0.3) is small and inert here.
