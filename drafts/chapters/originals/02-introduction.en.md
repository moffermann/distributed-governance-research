## 1. Introduction

Modern states concentrate three things that need not sit together: the
authority to decide what public money is spent on, the capacity to execute
that spending, and the power to certify that it achieved anything. When all
three live inside one hierarchy, accountability comes down to it auditing
itself (Bovens 2007). The consequences are predictable and documented across
political economy — discretionary allocation, self-reported compliance,
capture by concentrated interests, and citizen distrust — from regulatory
capture (Stigler 1971; Laffont and Tirole 1991) to audit turned ritual (Power
1997) to the distributional coalitions that entrench themselves in stable
political systems (Olson 1982).

These failures are not abstract: they are why the value never reaches the
people it was raised for. For the public money that funds concrete projects —
infrastructure, works, local programs — what ultimately matters is not how much
is appropriated but how much effective value reaches people per unit spent: a
project that is never built, or built badly, helps no one, however
well-intentioned the allocation (Okun's (1975) leaky bucket carried water that
never arrived). This is a bounded criterion for project-type public investment,
not a theory of the whole budget or of why states tax: redistribution and equity
are distinct purposes of public finance that this paper does not evaluate (§8).

The standard debate responds with quantity: shrink the state or grow it. Both
positions treat it as a single object. This paper argues the tractable
question is architectural, not one of size: *which layers of state activity
still require central monopoly, and which can now be distributed — with better
accountability than the status quo — now that digital coordination has
collapsed the transaction costs that once justified hierarchy?* (Coase 1937;
Hayek 1945; Williamson 1985). It is a question with a lineage — where
decisions should sit when knowledge is dispersed — from the economic
calculation debate (Mises 1920) to Hayek's dispersed knowledge and its
institutional treatment in Sowell (1980): decisions should live where the
knowledge is, disciplined by feedback rather than top-down command. Rights
guarantees, legitimate force, macro-fiscal stability, and enforceable
adjudication plausibly remain central; information processing, project-level
resource allocation, service execution, evidence production, and auditing
plausibly do not.

We make the argument as a concrete design, not a manifesto. Core v0 is a
complete reference architecture for distributing one bounded layer — the
allocation, execution, and verification of a legally mandated share of an
existing public budget — developed to the level of named objects, state
machines, and decision rules (a corpus of more than one hundred architecture
documents, fifty-nine designed hypotheses, and forty-three adversarial reviews, all
public). Citizens receive periodic, non-withdrawable allocation capacity in a
civic wallet; projects pass through a parallel-closure lifecycle in which
funding, independent fiscalization, evidence commitments, and beneficiary
confirmation must all close before execution; the executor never selects or
pays its own auditors — which removes the agency cost of self-monitored
compliance (Jensen and Meckling 1976); money moves only on reviewed
milestones, with retention and externally materialized guarantees; and every
consequential state transition is recorded in a citizen-legible,
expert-auditable trail.

The *executor* —whoever carries out the project, be it a public work, a
personal-care service, or an educational program— can be a public agency, a
municipality, a foundation, a cooperative, or a firm, as the implementing
authority's rules define, under one condition: non-monopolistic, honest
competition, with bankruptcies and consequences for whoever fails to deliver.
And the share each citizen directs is set by a public, versioned formula the
authority chooses; its simple option is *equal for all eligible citizens*,
under which no one buys more influence with more money.

A concrete example. Suppose a municipality funds care programs for vulnerable
elderly people. Today, between the peso allocated and the help that actually
arrives lies a gap where value is lost. Under this architecture, each resident
can direct part of their taxes to the program they prefer; the foundation,
cooperative, or service that carries it out is paid in tranches, and only once
a verifier it did not choose confirms the help arrived; and every step is
public and auditable.

What makes a design exercise count as research is the rigor it is put through,
under one transversal discipline: we evaluate every objection comparatively —
feasible Core v0 against the institution that presently performs the same function,
never against an omniscient, benevolent ideal. This blocks the nirvana fallacy in
both directions (Demsetz 1969; Section 2). Our contributions are:

1. **Distributing the allocation layer.** The core design contribution:
   applying the functional-distribution principle to resource allocation —
   citizens direct their share directly, delegate it, or govern it with
   personal rules — instantiated as a complete reference architecture (Core
   v0).

2. **Formalization of the incentive mechanisms** (Section 5). We model
   milestone-gated disbursement as a principal-agent game and derive its
   incentive-compatibility condition; we model bribery of protocol-assigned
   fiscalizers and derive a collusion-proofness condition under
   k-corroboration; and we prove two design-relevant comparative statics: weak
   verification must be compensated with financial terms, and guarantees are
   counterproductive when detection quality falls below the cost of capital.
   Milestones, retention, guarantees, and reputational memory form the
   design's deterrence stack.

3. **Computational evidence** (Section 6). A dependency-free, seeded
   agent-based simulation of 10,000 citizens tests the architecture's
   behavioral assumptions under rational ignorance, limited discovery
   attention, and social-proof cascades. The results discipline the design:
   they support some claims, sharpen others, quantify the leverage
   concentrated in the scope-construction layer, measure a viable open
   construction of it, and carry the comparison end to end: from allocation to
   delivered social value per unit of budget — one relevant criterion for this
   bounded slice of public spending (alongside distributional and rights
   constraints the model does not represent). In the model, selection and
   verified delivery compose multiplicatively (an accounting identity, not an
   independent finding); a matched selection-and-delivery extension gains
   ≈ +58.6 points of a greedy reference in the declared world [95% conditional-MC
   interval +58.0, +59.2]; a conditional
   three-layer attribution keeps the full Core v0 diagonal positive in every
   named world while planning's standalone magnitude is left unquantified; and net-budget
   accounting leaves administrative cost roughly neutral under a conservative low-spread
   floor, with a declared Core v0 advantage under an asymmetric-cost scenario. These are
   channel-separated, conditional model contrasts, not an institution-wide calibrated
   multiplier. Under the frozen pre-registered rule, a selection-only benchmark that granted
   the central competent, harm-aware appraisal at delivery parity left the distributed
   contrast positive but below the 0.05 rebuild bar; the earlier multiplier is therefore
   retired (§6; Appendix E4). Because that benchmark switches off the modeled central
   harm-blindness and does not test delivery or agenda construction, the decision governs
   calibration under the tested construction, not Core v0's architecture-wide value. The
   load-bearing contribution is the architecture, the qualitative credit-versus-coverage
   mechanism, and the separation of selection, delivery, and cost.

4. **Adversarial review as method** (Section 7). The architecture was attacked
   systematically: forty-three attack briefs grounded in the political-science,
   economics, and law literatures, each answered by a paired defense and
   resolved under an explicit integrate-or-bound rule, with resolutions
   propagated through the corpus (all except the manuscript-review round's
   D037–D040, whose corpus propagation is tracked) and the full review
   record public by construction. The loop is a structured self-critique, not external
   validation, and we say so; we propose it, and its terminating rule—pending independent external validation—as a preliminary methodological proposal for institutional design research.

A companion study measures three effects that extend this architecture:
ablation of the deterrence stack (its terms are individually redundant but
jointly indispensable), the feasibility of AI-based fiscalization, and the
effect of separating macro planning from allocation (robustness to poor
central planning — a conditional, model-internal contrast, not a calibrated effect).

Section 8 states limitations with the same care as results, because under our
method they are results: each is a named, bounded residual risk.

