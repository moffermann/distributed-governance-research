# E4/E5 — Confirmation bias as the central's third (and missing) mechanism

## Status
DESIGN PROPOSAL (2026-07-09), pending (a) the bug-hunt pool's verdict that the small macro
effect is not a code bug, and (b) author approval. Motivated by the author's observation that
the pipeline's macro stage is "too weak": an ideologically-driven planner should mis-select
*whole categories*, dropping truly net-positive but ideologically-uncomfortable sectors — a
mechanism the current model does **not** capture.

## The author's claim (motivated reasoning at the macro stage)
Politicians do not merely fail to *see* harm (that is η, harm-blindness). They perceive value
through an **ideological lens**: they *minimize/ignore* value signals that clash with their
ideology and *amplify* signals that confirm it. "Politicians see another world, disguised by
how they think." So strong that, facing the same reality, one camp rates the government
excellent and the other terrible. Consequence: the central's macro **category** selection is
systematically distorted — sometimes right, sometimes wrong, but **never** coincident with the
true-value optimum, and it drops entire net-positive categories. The distributed does not
suffer this: a small but *statistically representative* sample, each reading its own true
value, still lands on the best categories.

## Why the current model doesn't capture it
The central today has two biases, **neither** of which is confirmation bias:
- **η (harm-blindness):** attenuates *perceived harm* at the cell level (`cen=cPos+η·cNeg`).
  It is ideologically *symmetric* — blind to harm everywhere, not tilted by category.
- **`deltaPartisan` (partisan tilt):** an **additive** boost to a sector's macro score,
  `ptilt[a]=δ·σ_true·gov·pos[a]`, scaled to the true inter-sector spread and kept *modest*
  (Potrafke: real but small). We **measured it inert** — because it is additive and small, it
  is dominated by sector size and proxy noise and washes out of the ranking.

**The key structural distinction.** An *additive* tilt washes out; a **multiplicative
ideological lens does not** — it scales with each sector's magnitude and systematically
re-weights the cross-sector ranking. That is exactly why the additive `deltaPartisan` was
immaterial and why confirmation bias, modeled multiplicatively, will be load-bearing. It is
also a *different* non-neutrality from the world's net-harm structure (sectors that are truly
net-negative, `sectorTilt`): this one is a non-neutrality in the **central's perception**, by
ideological alignment, independent of true value.

## Proposed mechanism (a per-sector multiplicative lens)
Let the governing bloc's ideology be `gov ∈ {−1,+1}` (already in the world) and each sector's
ideological position `pos[a] ∈ [−1,1]` (already Beta-polarized). Define the **alignment**
`align_a = gov·pos[a] ∈ [−1,1]` (>0 aligned/congenial, <0 misaligned/uncomfortable). The
central perceives each sector's value through a confirmation-bias factor:

> **sScore_central[a] = (Σ_{j∈a} cen[j]) · (1 + κ·align_a)** ,  κ ≥ 0 = confirmation-bias strength.

Aligned sectors (align>0) are inflated, misaligned (align<0) deflated; at κ=1 a maximally
misaligned sector's perceived value is *halved*, at κ→large it can flip sign and be dropped
from the top-k regardless of true value. The distributed and oracle carry **no** lens (κ=0):
a representative sample reads true sector value.

**Why it is naturally a macro mechanism.** The factor `(1+κ·align_a)` is *constant within a
sector*, so it cancels from the within-sector allocation ranking (stage 2) and distorts only
the **cross-sector macro comparison** (stage 1) — precisely where the author locates it. (A
stronger variant applies the lens to the full perceived matrix `cen_biased[j] =
cen[j]·(1+κ·align_{a(j)})`; because the factor is per-sector-constant it has the same effect —
macro-only — so the per-sector form is the parsimonious choice. If we later want the lens to
also bias *within-sector* choices, we would make κ vary by project ideology, a separate step.)

**Replaces or complements `deltaPartisan`.** The additive `ptilt` becomes redundant (the
multiplicative lens subsumes "the governing party favors aligned sectors"); recommend
demoting `deltaPartisan` to 0 by default and letting κ carry the partisan/ideological channel,
with `deltaPartisan` retained only as an additive-robustness ablation.

## Literature (verified)
- **Kunda (1990), "The Case for Motivated Reasoning," *Psychological Bulletin* 108(3):480-498**
  — directional goals bias which beliefs people arrive at; the foundational statement.
- **Taber & Lodge (2006), "Motivated Skepticism in the Evaluation of Political Beliefs,"
  *AJPS* 50(3):755-769** — the *prior-attitude effect* (congruent arguments rated stronger),
  *disconfirmation bias* (incongruent evidence counter-argued), and *confirmation bias*
  (congenial sources self-selected) → attitude polarization, **strongest among those with the
  strongest priors.** The direct empirical warrant for a large κ among committed ideologues.
- **Nickerson (1998), "Confirmation Bias: A Ubiquitous Phenomenon in Many Guises," *Review of
  General Psychology* 2(2):175-220** — breadth/robustness of the phenomenon.
- **Redlawsk (2002), "Hot Cognition or Cool Consideration?" *JOP* 64(4):1021-1044** — motivated
  reasoning in real voter/decision evaluation (dynamic, not just lab).
- **Bénabou (2013), "Groupthink: Collective Delusions in Organizations and Markets," *REStud*
  80(2):429-462** — motivated beliefs at the *organizational* level (a governing bloc), i.e.
  the lens is collective, not merely individual — apt for a *planner*.
- Calibration honesty: **Potrafke (2011/2017)** bounds the *realized-spending* partisan tilt as
  modest, but that is the post-check **outcome**, not the **perception**; motivated-reasoning
  perception distortion (κ) is upstream of budget checks and can be larger than the realized
  δ — the institutional dampening is what shrinks perception (κ) down to realized spending (δ).

## Predictions (to pre-register before running)
1. As **κ rises 0→large**, the central's macro sector-selection degrades — it drops
   net-positive *misaligned* sectors and over-funds aligned ones — so the **macro gap (3L/2L)
   grows** and the central's %oracle **falls**, while the distributed is unchanged.
2. The effect is **multiplicative and does not wash out** (unlike additive `deltaPartisan`):
   even a modest κ moves the macro ranking, because it scales with sector magnitude.
3. Report a **κ-frontier**, not a point (κ is a swept regime like η and β): honest headline =
   "the macro advantage is small when the planner is ideologically even-handed (κ≈0) and grows
   with ideological motivated reasoning (κ>0)," with the operating band grounded in Taber-Lodge
   effect sizes where possible.
4. It should **not** revive the null polarization/partisan sweeps' magnitude by artifact: κ
   distorts the *central's perception by category*, orthogonal to *citizen* polarization
   (`polar`) which remains net-neutral (Prop A). Verify they stay separable.

## Scope / honesty guards
- κ is the central's **perception** distortion; the realized allocation still passes through
  the same delivery and (optional) capture layers. Do not double-count κ with `deltaPartisan`.
- Keep the distributed lens at 0 by construction (its claim is that a representative sample
  reads true value); flag this as the modeling assumption a critic will attack, and pair it
  with the participation-bias β already in the model (the distributed's *own* friction).
- Calibratable target: the spread between co-partisan and out-partisan *evaluations of the same
  government performance* (ANES/CSES "how good a job is the government doing" by partisanship)
  bounds κ empirically — a real, checkable observable, like net-negative share and %oracle.
