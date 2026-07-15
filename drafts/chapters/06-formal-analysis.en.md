## 5. Formal analysis

We present three models; their one-step-algebra proofs appear in the companion note ([formal-models](../research/formal-models.md)). Agents are risk-neutral and budgets normalized to 1. Following Becker (1968), deterrence requires detection probability times stake at risk to exceed the gain; our contribution maps each term to a named, configurable architectural object. *Proposition N* denotes this section’s formal results, *P001/P007* the methodological rules (§2), and *prediction N* the behavioral predictions of §5.3.

### 5.1 Milestone-gated disbursement

An executor either delivers a milestone at private cost *c* ∈ (0, 1) or diverts. The mechanism advances *a*, withholds the remainder pending reviewed acceptance, recovers fraction *r* of the advance upon confirmed non-delivery, seizes a guarantee *γ* costing *κ* per unit, and imposes reputational continuation loss *R*. Review confirms diversion with probability *p*, jointly reflecting evidence standards, fiscalizer independence, and corroboration.

**Proposition 1 (incentive compatibility).** Delivery is optimal iff

> *c* ≤ *p* · [(1 − *a*(1 − *r*)) + *γ* + *R*].

Delivery must cost no more than detection probability times total stake at risk; every architectural disbursement-gaming test enters this inequality.

**Proposition 2 (weak verification must be priced).** The minimal guarantee sustaining delivery for every *c* ≤ *c̄* is *γ\**(*p*) = max{0, *c̄*/*p* − (1 − *a*(1 − *r*)) − *R*}, decreasing and convex in *p*. Weak verification—thin fiscalization markets or poor evidence—therefore requires smaller advances, greater recoverability or guarantees, or higher-reputation executors. No global guarantee percentage is optimal across heterogeneous verification environments.

These deterrence terms are complements, not substitutes. A pre-registered companion-experiment ablation (Offermann 2026b) found that, at the designed operating point, the inequality has enough slack that removing one term costs almost nothing. Yet successive defensible concessions can invisibly cross the threshold, leaving verified value materially below the replaced status quo despite intact selection quality and apparently complete instrumentation. Each scope must therefore publish its operating deterrence margin, recompute it after every term change, and classify term reductions as material rule changes (docs/111). Preserved slack also absorbs verification-instrument error: across five real model families, leakage remained indistinguishable from pure-human verification even when a machine verifier passed ~20% of judgment-requiring fraud, because the cascade removed attempts upstream—provided adversaries do not collude across verification layers (Offermann 2026b, docs/113).

**Proposition 3 (participation-deterrence trade-off).** Raising *γ* relaxes incentive compatibility at rate *p* but reduces honest-executor payoff at rate *κ*. If the designer weights one unit of incentive slack equally with one unit of honest-executor payoff, an increase is net-beneficial iff *p* > *κ*; other weights shift the threshold, not the trade-off’s structure. When detection quality is below the local cost of capital, larger guarantees exclude honest low-margin executors without deterring fraud—the architecture’s proportionality discipline.

### 5.2 Collusion-proof fiscalization

A fraudulently approved, undelivered milestone gives the executor *G*. Release requires *k* protocol-assigned fiscalizers, each with forfeitable stake *W* (future protocol fees plus role reputation) and post-approval discovery probability *q*. Protocolized assignment and visible repeat pairings keep executor and fiscalizers strangers; a bribe offer is reported with probability *δ*, imposing executor penalty *P_e*.

**Proposition 4 (collusion-proofness).** Approval fraud is unsustainable if

> *k* · *q* · *W* ≥ *G* − (*δ* / (1 − *δ*)) · *P_e*,

and, in particular, whenever *kqW* ≥ *G*. Three corollaries matter:

- ***Corroboration substitutes for reputation capital.*** Required stake per fiscalizer falls linearly in *k*: redundant review enables shallow-reputation pools at linear control cost, motivating proportional threshold policies.

- ***Repeat relationships are the attack surface.*** The friction term requires prevention of relational contracting, making repeat-pairing visibility load-bearing. We hold *δ* exogenous to *k*; endogenizing it—more approached reviewers, hence more reporting chances—only strengthens the condition.

- ***Thin markets attack both models.*** A monopolist fiscalizer that cannot credibly be excluded loses forfeitable stake (*W* → 0) and degrades *p* in Proposition 1; both conditions identify the same fragile environments for the same reason.

### 5.3 Attention-constrained allocation

Citizens allocate small individual budgets, and negligible pivotal returns to evaluating projects make rational ignorance the equilibrium (Downs 1957). The design question is whether the inattentive majority’s weight follows salience amplified by social proof (Bikhchandani, Hirshleifer and Welch 1992; Noelle-Neumann 1974; Salganik, Dodds and Watts 2006) or the architecture’s default layer. In Open mode—the architectural default—planning is distributed by construction. Centralized planning exists only in tutored/closed transition mode; even there, project prioritization remains distributed through aggregated allocation profiles rather than a central plan. The model yields three testable predictions—caps tame cascades (prediction 1), defaults anchor quality (prediction 2), and decay degrades gracefully only with defaults (prediction 3)—evaluated next.