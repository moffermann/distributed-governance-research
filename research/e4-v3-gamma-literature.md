# E4-v3 — Literature defense of γ≈0 (the central's blindness to diffuse harm)

## Status
Design/evidence note. Anchors the single decisive parameter of E4-v3 — γ, how
much of a project's *anti-value* (diffuse harm) the central institution perceives
— to the published literature, so the headline range is defended by citation, not
by parameter choice. Feeds the E4-v3 pre-registration and the Finding-4 rewrite.
See `e4-v3-value-matrix.mjs`, `e4-v3-sensitivity.mjs`, `e4-v3-variance.mjs`,
`e4-v3-scenarios.mjs`.

## The claim to defend
In E4-v3 the status-quo central maximizes *perceived* value but attenuates the
negatives it perceives by a factor γ ∈ [0,1] (γ=0 = fully blind to harm; γ=1 =
perceives harm fully). The result is dominated by γ. We claim **γ≈0 is the modal
case**, because the harm of an ordinary public project — a football pitch, a road,
a library, a poverty-relief program — is **not evident**: it is diffuse, subjective,
deferred, and unorganized, so a process that reads *visible demand* has no signal
to perceive it. Being "generous" with γ up to ~0.25 already concedes more than the
literature requires.

## Why the harm of ordinary projects is not evident (γ≈0), by mechanism

1. **The harm is unseen (opportunity cost).** Bastiat's *What Is Seen and What Is
   Not Seen* (1850): decision-makers weigh the visible benefit of an intervention
   and are "blind to the bulk of the consequences" — the foregone alternative, the
   diffuse cost. The pitch is seen; the clinic not built with the same money, and
   the chess-kid's lost quiet, are not. γ≈0 **is** Bastiat's thesis restated.

2. **The harmed do not organize; the beneficiaries do.** Olson, *The Logic of
   Collective Action* (1965): concentrated benefits generate organized advocacy;
   diffuse costs are borne by an unorganized many who each have too little stake to
   act → the process hears *demand*, not *harm*.

3. **Ordinary public goods are exactly the low-visibility, low-conflict case.**
   Wilson's policy typology (*Political Organizations*, 1973): **client politics** =
   concentrated benefits + diffuse costs → "little visibility, little political
   conflict," dominated by attentive beneficiaries while the cost-bearers remain
   "inattentive publics." A pitch/road/library/aid program is the textbook client
   good: no organized opposition, so no harm signal reaches the centre.

4. **The centre sees only what it renders legible — proxies, not value.** Scott,
   *Seeing Like a State* (1998): the state perceives through **legibility**
   (head-counts, cadastres, maps, demographics) and is structurally blind to local,
   practical knowledge (**mētis**); its schemes "generate harms because they lack
   access to local experiential knowledge." This grounds BOTH the proxy-noise and
   the γ≈0 blindness — and does so from a left/anarchist author, not the Austrian
   tradition. Complements Hayek (1945) on dispersed knowledge and Samuelson (1954)
   on the public-good preference-revelation problem.

5. **Harm reporting is itself an under-provided public good.** Latané & Darley
   (1968, the bystander effect) + Olson: even where harm exists, voluntarily
   reporting it is costly and diffusely beneficial, so it is under-supplied → the
   little harm signal that could reach the centre largely does not.

## Positive evidence that the centre overstates value and funds net-negative projects
- **Robinson & Torvik, "White Elephants," *Journal of Public Economics* 89 (2005),
  197–210:** politicians deliberately choose *inefficient* (net-negative) projects
  precisely because the inefficiency makes a clientelist promise credible. Direct
  evidence that projects with negative true value are funded **structurally, not by
  accident** — i.e., the negative-mean regime of the sensitivity analysis is real.
- **Flyvbjerg (megaprojects; *Megaprojects and Risk* 2003; "Survival of the
  Unfittest," 2009):** systematic **optimism bias** and **strategic
  misrepresentation** inflate benefits and understate costs — ~90% of megaprojects
  overrun (dams +96% cost / −11% demand; rail +40% / −34% demand). The centre's
  value estimate is biased *upward* — γ low plus an optimistic proxy — as an
  empirical regularity, not a modeling convenience.

## γ as three literature-grounded scenarios (replaces a single blended number)
Measured over the plausible box (world mean 0..+0.02, heterogeneity σ 1–2, proxy
noise 1–2, participation 0.2–0.5; deterministic, 6 seeds). Advantage = true value
delivered by distributed ÷ by the status quo, where the status quo delivers
positive value.

| Scenario | γ | status quo (% oracle) | distributed (% oracle) | advantage (median; IQR) |
|---|---|---|---|---|
| **A. Normal politics** (diffuse harm, client goods) | 0–0.1 | 46% | 69% | **+68% (1.68×)**; 1.28–6.21× |
| **B. Contested** (salient externalities) | 0.25–0.5 | 48% | 69% | +60% (1.60×); 1.23–3.86× |
| **C. Evident harm** (institutional crisis, revolt) | 0.75–1.0 | 68% | 69% | +5% (1.05×); 0.87–1.30× |

Reading: in the **modal** regime the literature supports (A), distributed
allocation delivers on the order of **~1.7× (+68%)** the status quo's true value
per budget; the advantage only collapses to parity in the **rare** regime where
harm is so evident the centre cannot miss it (C). This is the honest inverse of
the E4 sin: the result now *degrades gracefully and is disclosed*, and γ≈0 — the
axis that drives it — is the position the literature best supports.

## Honest residual
Magnitudes remain model-internal (parameterized): the literature defends the
**direction** and the **regime** (γ≈0 realistic; centre overstates value; net-
negative projects get funded), not the exact 1.68×. The abstract must therefore
frame it as "in the model, ~1.7× in the normal-politics regime," conditional, with
the scenario ladder shown — not a bare multiplier.
