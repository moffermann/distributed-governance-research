# E4 — literature anchoring of the calibration assumptions

**Purpose.** Anchor every E4 calibration assumption to published literature, so the headline rests on empirically-
and theoretically-grounded premises — NOT on idealized concessions. **The load-bearing claim — the central is
near-blind (myopic) to diffuse harm on the low-visibility long tail — is not a strawman; it is the mainstream
consensus of political economy, Austrian economics, and state-capacity scholarship.** Conversely, the assumption that
a central planner *does* see diffuse harm (the "no-myopia" corner that makes the central competitive) is the one that
CONTRADICTS this literature. The burden of idealization is on the central-sees-harm case, not the central-myopic one.

All citations below were verified against their sources (2026-07-12). Magnitudes flagged "stylized" are directional
anchors realized as a declared functional form, not point-measured; they are reported with sensitivity in the code.

---

## 1. THE HEADLINE — central near-blind/myopic to diffuse harm (`s_exp`, `b_H_C`) — ANCHORED (theory + empirics)

The central selector reads a project-level proxy and detects harm only where it is salient/visible; on the
low-visibility long tail (where most projects live — §5) it is near-blind. This is over-determined by the literature:

- **Hayek, F. A. (1945). "The Use of Knowledge in Society." *American Economic Review* 35(4): 519–530.** The
  knowledge problem: the knowledge relevant to allocation is *dispersed, tacit, and context-specific*, never available
  in its totality to any single central mind. A central selector structurally cannot aggregate who is harmed by an
  obscure project — that knowledge lives with the affected individuals.
- **Scott, J. C. (1998). *Seeing Like a State*. Yale University Press.** Legibility: the state perceives only what it
  can simplify and standardize; *local knowledge is invisible* to it, and high-modernist top-down schemes fail
  precisely because officials ignore local conditions (harm). The canonical statement of "the central cannot see the
  diffuse damage it causes."
- **Olson, M. (1965). *The Logic of Collective Action*. Harvard University Press** (with **Schattschneider, E. E.
  (1935). *Politics, Pressures and the Tariff*** — origin of the term; **Wilson, J. Q. (1980). *The Politics of
  Regulation*. Basic Books** — client politics). Concentrated benefits / **diffuse costs**: even when harm is real,
  the diffusely-harmed are unorganized and under-mobilized, so the central systematically UNDER-weights their harm.
- **Bandiera, O., Prat, A., & Valletti, T. (2009). "Active and Passive Waste in Government Spending." *AER* 99(4):
  1278–1308.** Empirical: **passive waste = 83% of total estimated waste** — most government waste is inefficiency
  the decision-maker does not detect or act on (not corruption it benefits from). Direct evidence that most harm is
  UNSEEN by the central, not chosen by it.
- **Bastiat, F. (1850). *Ce qu'on voit et ce qu'on ne voit pas*.** "That which is seen and that which is not seen":
  policy fixates on the visible and misses the diffuse unseen — the salience gate, stated in 1850.
- **Bachrach, P., & Baratz, M. (1962). "Two Faces of Power." *APSR* 56(4).** Non-decision-making / agenda control:
  the second face of power keeps diffuse harms *off the agenda* — the convex salience gate `s(V)=V^s_exp`.

**→ Anchors:** the harm-gate DIRECTION (convex, near-blind on the low-visibility tail; detection rises with
visibility via press/opposition/EIA) is strongly theory+empirically anchored. The exponent's exact magnitude is
stylized and swept (`s_exp∈[1,2.5]`); the conclusion is robust across it (§results). **Assuming the central DOES see
diffuse harm is the unanchored, literature-contradicting move.**

## 2. Central projection / preference misperception (`w`, `a`, `b`) — ANCHORED (empirics)

The central substitutes its own prior for constituents' values (`w·(v_p − S⁺)`) and mis-reads the distribution.

- **Broockman, D., & Skovron, C. (2018). "Bias in Perceptions of Public Opinion among Political Elites." *APSR*
  112(3): 542–563.** Original surveys of **3,765 politicians**: state legislators of both parties **dramatically and
  systematically overestimated** their constituents' conservatism, consistently across methods, districts, states.
  Direct evidence of large, persistent elite misperception of preferences → the projection weight `w`.
- **Dias, N., Lucas, J., & Sheffer, L. ("Beyond the mean")** + Gagnon-Bartsch: planners mis-estimate the
  *distribution* of preferences via projection (~21–50% directional projection; bias partially reduced by
  distribution-elicitation). Anchors the projection magnitude band.

## 3. Credit-claiming / traceability tilt (`lambda`) — ANCHORED (theory)
- **Mayhew, D. (1974). *Congress: The Electoral Connection*. Yale UP** + **Arnold, R. D. (1990). *The Logic of
  Congressional Action*. Yale UP.** Electoral credit-claiming and traceability: visible, attributable benefits are
  favoured over diffuse ones. Anchors the credit tilt `lambda` (ranking, not eligibility).

## 4. Visibility heavy tail (`a_V`, `b_V`) — ANCHORED (empirics)
- **Skuhrovec, J., et al. (2013). "Exponential and power laws in public procurement markets." arXiv:1309.0218.**
  >40,000 Czech procurements: procurement value is heavy-tailed / power-law → most projects are low-visibility (the
  long tail where the central is blind). Anchors `a_V<1`, heavy `b_V`.

## 5. Universal coverage + participation COMPOSITION (`f_active/f_deleg/f_profile`, `d_bias`, `sigma_cm`) — ANCHORED
Net-allocation participation is universal by architecture (a facto). Its composition and signal quality are anchored:

- **Active share ~5%.** Participatory-budgeting turnout is low single digits (SF District 7 ≈2.5%, Brennan Center;
  a ~280k city ≈0.4–1.4%, Signal Cleveland / PB Project). This is the ACTIVE-report share, NOT total participation.
- **Profile/default share ~60%.** **Samuelson, W., & Zeckhauser, R. (1988). "Status Quo Bias in Decision Making."
  *Journal of Risk and Uncertainty* 1(1): 7–59.** People overwhelmingly stick with defaults/status-quo across real
  decisions (health plans, retirement). Anchors that most citizens' share is allocated by their standing profile
  rule, not an active per-project report — a high-alignment default (they chose the rule) but coarser on project-
  specific harm.
- **Delegation share ~35% + concentration + common-mode `sigma_cm`.** **Kling, C. C., et al. (2015). "Voting
  Behaviour and Power in Online Democracy: A Study of LiquidFeedback in Germany's Pirate Party." arXiv:1503.07723**
  (and **Gölz, Kahng, Mackenzie, Procaccia (2018/2021). "The Fluid Mechanics of Liquid Democracy." arXiv:1808.01906**).
  Liquid-democracy delegation CONCENTRATES on a few super-voters/super-delegates with considerable power → correlated,
  common-mode error across the delegated share (does not average out). Anchors both the delegation channel and the
  common-mode error term `sigma_cm` (the one honest structural sensitivity for the distributed arm).

## 6. Adverse voice bias (`beta`) — ANCHORED (theory)
- **Noelle-Neumann, E. (1974). "The Spiral of Silence: A Theory of Public Opinion." *Journal of Communication*
  24(2).** Perceived-minority opinions self-censor to avoid isolation → opponents/harmed parties under-report in the
  distributed arm (a HANDICAP on distributed harm-catching, conservative, not a flattery). Reinforced by Olson (§1):
  diffuse harmed are under-mobilized.

## 7. Anti-value / opposition prevalence & intensity (`pi_opp`, `mu_opp`) — direction anchored
- NIMBY / intense-minority opposition & local referendum literature: a minority of projects carry concentrated,
  intense opposition (harm). Direction anchored; prevalence swept in `R_alpha`.

---

## What this buys the headline
The **empirically-anchored ("probable") scenario** — a central that is near-blind to diffuse harm (Hayek/Scott/Olson/
Bandiera), projects its own prior (Broockman–Skovron), and is credit-tilted (Mayhew/Arnold), facing a heavy-tailed
low-visibility project space (Skuhrovec), against universal coverage whose composition is anchored (PB turnout +
status-quo-default + liquid-democracy delegation) — is the LITERATURE-GROUNDED case, and there coverage-routed
selection wins decisively. The scenarios in which the central becomes competitive require *contradicting* this
literature (assuming the central sees diffuse harm) and/or a near-harmless world; those are the idealized, unanchored
corners — reported symmetrically with the equally-idealized distributed corner, never as a privileged result.

**No idealist concession is needed for the strong headline: the demolishing result IS the anchored case.**
