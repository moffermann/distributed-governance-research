## 5. Formal analysis

We state the three models and their results; proofs are one-step algebra and
appear in the companion note ([formal-models](../research/formal-models.md)).
All agents are risk-neutral; budgets are normalized to 1. The deterrence
structure throughout is Becker's (1968): a violation is deterred when the
detection probability times the stake at risk exceeds its gain — our
contribution is mapping each term of that inequality onto a named,
configurable architectural object. To avoid notation collisions, *Proposition
N* denotes the formal results of this section; *P001/P007*, the methodological
rules (§2); and *prediction N*, the behavioral predictions of §5.3.

### 5.1 Milestone-gated disbursement

An executor chooses to deliver a milestone at private cost *c* ∈ (0, 1) or
to divert. The mechanism releases an advance *a*, holds the remainder for
reviewed acceptance, recovers a fraction *r* of the advance on confirmed
non-delivery, seizes a posted guarantee *γ* (carrying cost *κ* per unit),
and imposes a reputational continuation loss *R*. Review confirms diversion
with probability *p* — the joint quality of evidence standards, fiscalizer
independence, and corroboration.

**Proposition 1 (incentive compatibility).** Delivery is optimal iff

> *c* ≤ *p* · [ (1 − *a*(1 − *r*)) + *γ* + *R* ].

Delivery must be cheaper than the detection probability times the total
stake at risk. Every disbursement-gaming test in the architecture is a term
in this inequality.

**Proposition 2 (weak verification must be priced).** The minimal guarantee
sustaining delivery for all *c* ≤ *c̄* is *γ\**(*p*) = max{0, *c̄*/*p* −
(1 − *a*(1 − *r*)) − *R*}, decreasing and convex in *p*. Where verification
is weak — thin fiscalization markets, poor evidence quality — the mechanism
must compensate with smaller advances, more recoverability, larger
guarantees, or higher-reputation executors. A single global guarantee
percentage cannot be optimal across heterogeneous verification
environments.

The deterrence terms of this condition are complements, not substitutes. A
pre-registered ablation on the companion experiments (Offermann 2026b)
measured the consequence: at the designed operating point the inequality
holds with slack, so removing any single term costs almost nothing — and a
deployment negotiated one defensible concession at a time can cross the
threshold invisibly, ending below the status quo it replaced (a material
shortfall in verified value, with selection quality intact) while
looking fully instrumented. The
corpus therefore requires every scope to publish its deterrence-inequality
margin in its operating configuration, recomputed on every term change, with
term reductions classified as material rule changes (docs/111). The same
slack, kept intact, buys an unexpected dividend: it absorbs verification-
instrument error — in the companion panel of five real model families, even
a machine verifier passing ~20% of judgment-requiring fraud produced
leakage indistinguishable from pure-human verification, because the cascade
removes the attempts upstream — provided the adversary is not colluding
across the verification layers (Offermann 2026b, docs/113).

**Proposition 3 (participation-deterrence trade-off).** Raising *γ* relaxes
incentive compatibility at rate *p* but lowers honest executors' payoff at
rate *κ*; under a designer objective weighing one unit of incentive slack
equally against one unit of honest-executor payoff, a guarantee increase is
net-beneficial only if *p* > *κ* (other weightings shift the threshold, not
the trade-off's structure). Where detection quality is below the local cost
of capital, piling on guarantees excludes honest low-margin executors
without deterring fraud — the formal content of the architecture's
proportionality discipline.

### 5.2 Collusion-proof fiscalization

A non-delivered milestone is worth *G* to the executor if fraudulently
approved. Release requires approval by *k* protocol-assigned fiscalizers,
each carrying forfeitable stake *W* (future protocol fees plus role
reputation) and facing post-approval discovery probability *q*. Because
assignment is protocolized and repeat pairings are visible, executor and
fiscalizer are strangers: a bribe offer is itself reported with probability
*δ*, costing the executor penalty *P_e*.

**Proposition 4 (collusion-proofness).** Approval fraud is unsustainable if

> *k* · *q* · *W* ≥ *G* − (*δ* / (1 − *δ*)) · *P_e*,

and in particular whenever *kqW* ≥ *G*. Three corollaries carry design weight:

- ***Corroboration substitutes for reputation capital.*** The required stake
  per fiscalizer falls linearly in *k*, so redundant review is exactly what
  makes shallow-reputation fiscalizer pools workable, at linear control cost
  —which is what proportional threshold policies are for.

- ***Repeat relationships are the attack surface.*** The friction term exists
  only while relational contracting is prevented, which is why repeat-pairing
  visibility is load-bearing (we hold the report probability *δ* exogenous to
  *k*; endogenizing it —more approached reviewers, more chances of a report—
  only strengthens the condition).

- ***Thin markets attack both models at once.*** A monopolist fiscalizer that
  cannot credibly be excluded loses its forfeitable stake (*W* → 0) while also
  degrading *p* in Proposition 1: the two conditions identify the same
  environments as fragile, for the same reason.

### 5.3 Attention-constrained allocation

Citizens allocate small individual budgets; the pivotal return to evaluating
projects is negligible, so rational ignorance is the equilibrium (Downs
1957), and the design question is where the *inattentive* majority's weight
flows: to salience amplified by social proof (Bikhchandani, Hirshleifer and
Welch 1992; Noelle-Neumann 1974; Salganik, Dodds and Watts 2006), or to the architecture's own
default layer, whose routing follows the distributed project prioritization
— the aggregated allocation profiles — not a central plan. The model yields three testable
predictions — caps tame cascades (prediction 1), defaults anchor quality (prediction 2), decay
degrades gracefully only with defaults (prediction 3) — evaluated next.

