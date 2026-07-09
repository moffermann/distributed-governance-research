# E4 — Theoretical positioning (keystone citations from the constructive round)

## Status
Consolidates the theory-strengthening recommendations of the 6-reviewer
constructive round (see `e4-constructive-review-synthesis.md`), especially the
mechanism-design theorist. Each item positions E4 inside an existing literature so
skeptics take it more seriously without overclaiming. Citations verified. Feeds the
paper's positioning; not yet inserted into `drafts/paper.md`.

## 1. Both institutions are second-best; VCG is the infeasible first-best
The first-best preference-aggregation mechanism is **Groves–Clarke–Vickrey (VCG)**:
dominant-strategy incentive-compatible, extracts true ΣN_i. It is **infeasible** for
public budgets — not budget-balanced (**Green & Laffont 1979**), collusion-vulnerable,
requires cardinal monetary transfers, informationally heavy. So the central planner
*and* Core v0 are both **second-best** mechanisms (**Lipsey & Lancaster 1956**). This
reframes the whole contribution: *a feasible second-best allocation mechanism,
benchmarked against the infeasible VCG first-best and against the incumbent
second-best (the status quo)* — which **lowers the burden of proof** (Core v0 need not
be optimal, only better than the incumbent). Two intro sentences + one paragraph in
the E4 setup.

## 2. The detection floor IS Ostrom's self-monitoring principle
The E4-v5 detection stack — affected users monitor (large m), un-suppressible low-cost
denuncia, graduated sanction via evidence contracts — is almost verbatim **Ostrom
(1990), *Governing the Commons*, design principles**: **P4 monitoring by the
appropriators themselves**, **P5 graduated sanctions**, **P6 low-cost conflict
resolution**. The m·q detection-floor theorem is a *formalization of Principle 4*: the
monitors are the resource users, who report cheaply because they bear the loss (the
`defrauded beneficiary's monetary stake`, Dyck-Morse-Zingales 2010). Ostrom is the
missing **keystone citation** — it moves viral detection from "we assert it" to "the
Nobel-recognized, empirically-validated mechanism of enduring self-governed commons,"
and it is the most left-legible authority available, answering the "smells Chicago"
critique.

## 3. Steelman the central (Wittman), then locate where it fails
γ≈0 is well-defended (Bastiat, Olson, Wilson, Scott) but a fair referee suspects a
strawman. The strongest opposing view is **Wittman (1989), "Why Democracies Produce
Efficient Results," *JPE* 97(6):1395–1424**: political markets, like economic ones,
have correcting mechanisms (elections, competition, reputation) that discipline the
center toward efficiency. **Engage it explicitly** and show the correction is weakest
precisely in **Wilson's client-politics quadrant** (concentrated benefit, diffuse/local
harm, low salience — the modal regime), converting γ≈0 from "chosen pessimism" into
"the regime where the democratic-efficiency correction provably fails." Reinforce with
the modern evidence the correction is weak: **Caplan (2007), *The Myth of the Rational
Voter*; Achen & Bartels (2016), *Democracy for Realists*; Gilens & Page (2014)** on
money-driven capture of the center — the empirical baseline the capture block improves
on. Also: **Bandiera, Prat & Valletti (2009), "Active and Passive Waste," *AER*
99(4):1278–1308** find **83% of procurement waste is *passive* (incompetence), not
active (corruption)** — direct support that the central's loss is mostly *blindness*
(γ), not only theft.

## 4. Condorcet Jury Theorem = the bridge between v4 (frontier) and v5 (capture)
The distributed side's aggregation strength is the **Condorcet Jury Theorem** (1785):
many independent, locally-informed signals beat one central estimate — *conditional on
independence and competence > ½*. Capture and organized coordination are exactly the
**correlated-error violation of CJT independence** (**Austen-Smith & Banks 1996** give
the failure conditions). So the two blocks are one argument: **the capture/integrity
layer exists to defend the one assumption (independence) on which distributed
aggregation's advantage rests.**

## 5. The equal wallet in the intensity-voting family; anti-plutocracy as a bound
The equal-per-citizen wallet is a member of the **intensity-expressing voting family**:
point voting, **storable votes (Casella 2012)**, **quadratic voting (Lalley & Weyl
2018, *AER P&P* 108:33–37)**. The distinction and the novelty: QV priced in real money
is plutocratic (wealth buys credits); the **equal-endowment wallet caps plutocracy by
equal endowment**, not by convex pricing. Formal statement of "money buys attention,
not wallets": under an equal endowment of allocation rights (fixed at 1/N), wealth's
marginal influence runs only through the *shared persuasion channel*, not the
*endowment* — hence capture cost **scales linearly in the number of persuadable
supporters** (the E4-v5 acquisition-scaling k_d), rather than being buyable at a fixed
price. That *is* the anti-plutocracy statement, and it is the same object as the k_d
floor in Proposition 2.

## 6. Claim capture-resistance, not strategy-proofness (own the impossibility results)
Invoke **Gibbard–Satterthwaite** (no non-dictatorial ordinal mechanism is
strategy-proof), **Myerson–Satterthwaite**, and **Hurwicz** (informational
decentralization vs incentive compatibility), and state plainly: *Core v0 does not
claim strategy-proofness — it claims capture-resistance under bounded organized
coordination*, a weaker and more honest property. Claiming less, precisely, disarms the
mechanism-design referee.

## 7. β is the failure of voice (Hirschman); the capture canon it sits inside
β (voice inequality) is literally the failure of **voice** (**Hirschman 1970, *Exit,
Voice, and Loyalty***) — the harmed's cheapest option is often silence or exit, which
grounds β>0 mechanistically and connects to the default/routing layer as voice's
substitute. The capture bibliography should sit *inside* its canon: **Grossman & Helpman
(1994), "Protection for Sale"** (the reference lobbying model — microfoundation for
"center cheap to capture"); **Laffont & Tirole (1993)** (procurement/regulatory capture
— directly relevant to milestone-gated tranche release); **Shleifer & Vishny (1993),
"Corruption"**; **Olken (2007)** (audits vs community monitoring); Bandiera-Prat-Valletti
(2009).

## 8. Value-theory correctness caveat (protect against a Sen-literate referee)
Sen resists collapsing plural capabilities into a single cardinal sum (capabilities are
incommensurable; he refuses fixed weightings). So "ΣN_i in the Sen sense" is in mild
tension with Sen's own position. **Fix:** use **Sen for what the numerator is *about***
(freedoms/functionings, not money-utility) and rest the **aggregation on Samuelson
(1954)**, explicitly acknowledging the incommensurability caveat rather than claiming
Sen licenses the sum. Everything else (Menger subjective value, Buchanan 1969 subjective
opportunity cost, Samuelson 1938 revealed preference + Spence 1973 signaling) is used
correctly — and the Samuelson 1938 ↔ 1954 pairing (the revelation *problem* answered by
costly revealed preference) should be made explicit.
