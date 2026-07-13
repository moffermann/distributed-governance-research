# Who Chooses, Who Delivers, Who Judges? A Functional Architecture for Distributed Public Spending

**Working paper — v1.14 (July 2026; latest deposited version: v1.12, DOI 10.5281/zenodo.21252911). This version retires the earlier compound value-per-budget multiplier as a calibrated effect — a pre-registered symmetric selection-only stress test returned NO-GO (see §6 and the claim & estimand contract) — and rests on the architecture and the qualitative mechanism, now sharpened by a four-scenario robustness map (E4 v1.14): modelling the central as the evidence *directionally* describes it — near-blind to diffuse harm on the low-visibility long tail (Hayek, Scott, Olson, Bandiera–Prat–Valletti) — coverage-routed selection recovers decisively more of the model's full-information reference (~98% vs ~44%) and robustly; the pre-registered gate remains the separate confirmatory result (a NO-GO under a different data-generating process), the central overtakes coverage only by abandoning the declared premises, and the mirror idealization of the distributed arm wins by a landslide; all such magnitudes are declared reference points from a stylized comparative-institutions model, a conditional model contrast, not calibrated impact. Revised through successive adversarial and author review cycles, documented in the repository's roadmap. It consolidates the companion computational program (Offermann 2026b): the deterrence-complementarity rule, the semi-open transition path, the budget-release rule, and machine verification with the human second instance; and the companion's two-layer separation of the macro categorization from the allocation profiles, under which the distributed arm is robust to a bad central categorization while the central arm is fragile to it.**

*© 2026 Mauricio Offermann. Licensed CC BY 4.0 — see LICENSE.md at the repository root. Please cite as indicated in CITATION.cff. DOI (concept, always resolves to the latest version): 10.5281/zenodo.21193846.*

## Abstract

Public spending routinely asks one hierarchy to choose projects, execute them, and certify its own performance — the fusion where waste, capture, and unaccountable failure concentrate. This paper asks whether a bounded, legally authorized share of that machinery can separate those functions — the hand that chooses, the hand that spends, and the hand that certifies — and the information that drives them, while preserving legal authorization and public auditability.

We present **Core v0**, a fully specified, object-level architecture. Within legally authorized planning scopes, citizens direct a non-withdrawable share of an existing public budget to projects that must declare value claims, affected parties, milestones, and evidence contracts up front. Proposing, execution, evidence production, fiscalization, and custody are separated; funds move in tranches against reviewed milestone evidence, with retention and guarantees; executors neither choose nor pay their inspectors; and every consequential state transition is public.

Its animating idea is a **credit-versus-coverage** mechanism: when central ranking rewards claimable political credit, it can systematically underweight the diffuse, low-visibility benefits that a coverage-based distributed process still surfaces, albeit under voice bias. We held this idea to a deliberately hostile test — a pre-registered, symmetric simulation that stripped out the favorable asymmetries an earlier version had relied on, plus a public adversarial review of 43 attacks across five rounds, each integrated into the design or recorded as a bounded limitation. The distributed advantage was positive in all 18 pre-specified cells but small (pooled median Δ = 0.025 of a full-information greedy benchmark, below our pre-set 0.05 threshold); we therefore retire the large multiplier an earlier version reported and state the modest, conditional result plainly. A four-scenario robustness extension then models the central selector as the evidence describes it — its *direction* on every axis grounded in the literature (not its magnitude fitted): near-blind to diffuse harm on the low-visibility long tail (Hayek 1945; Scott 1998; Olson 1965; Bandiera–Prat–Valletti 2009), projecting its own priors and over-rating visible benefits (Broockman–Skovron 2018; Flyvbjerg et al. 2003), and credit-tilted (Mayhew 1974; Arnold 1990). In that **source-motivated declared reference scenario** — not an empirical calibration — coverage-routed distributed selection recovers about 98% of the model's full-information greedy reference against the central's ~44%: a 54-point conditional model contrast, robust across the declared space and the realistic degradation of Core v0's universal budget *routing* (routing is architectural; effective independent information is not). The central overtakes coverage only by abandoning the declared premises (granting it the harm-sight the literature denies it) on a near-harmless world, while the *mirror* idealization of the distributed arm wins by a landslide. These are declared reference points from a stylized comparative-institutions model, not calibrated field effects; the pre-registered gate remains the separate confirmatory result (a NO-GO under a different data-generating process), and the one sensitivity that materially shrinks the gap — never its sign in the declared range — is correlated/common-mode error in the coverage arm. Elementary propositions give sufficient conditions for incentive-compatible disbursement and collusion-proof fiscalization under independence and corroboration assumptions.

This is an architecture-and-mechanism contribution, not an impact evaluation: no pilot has run; the simulation's units are uncalibrated and partial-equilibrium and do not identify delivery effects; and claims are scoped to infrastructure-like public investment. What it offers is a concrete, criticizable, pilotable institutional design — and a disciplined account of exactly what its evidence does and does not yet support.

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
   constraints the model does not represent). In the model, verified delivery and social prioritization
   interact rather than merely add; the earlier agent-based apparatus produced a
   compound value-per-budget ratio against a status-quo baseline parameterized from
   published audit-institution findings (only near-parity at municipal pilot scale). We
   **retire that compound as a calibrated effect**: a pre-registered, symmetric,
   selection-only stress test shrinks the distributed-minus-central selection
   advantage to a pre-registered pooled median Δ = 0.025 of a full-information
   benchmark, below its pre-set 0.05 research-program rebuild gate (NO-GO). The
   load-bearing contribution is the architecture and the qualitative mechanism,
   whose comparative scope the v1.14 robustness map delimits across the no-myopia
   and harm-myopia regimes—not the multiplier.

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
central planning — an earlier-apparatus contrast, subject to the same
magnitude caveat as the compound above, not a calibrated effect).

Section 8 states limitations with the same care as results, because under our
method they are results: each is a named, bounded residual risk.

## 2. The functional distribution principle

We analyze the state as a stack of functional layers rather than a single
institution: (a) rights guarantees and legitimate force; (b) binding
adjudication; (c) rule-making; (d) macro-fiscal management; (e) macro planning
and agenda framing; (f) project prioritization and resource allocation to
concrete projects; (g) execution and service delivery; (h) evidence production
about delivery; and (i) evaluation and accountability. The distribution
principle is:

> A layer is a candidate for distribution when three conditions hold:
> its failures under monopoly are information and incentive failures rather
> than coordination-of-force failures; distributed provision can be made
> *more* observable than monopoly provision; and the layer can be bounded so
> that its failure does not cascade into the non-distributable layers.

Layers (a), (b), and (d) fail the first or third condition and remain central
in our design. Layers (f) through (i) pass all three, and Core v0 distributes them as a block, and must: distributing allocation without verification reproduces the delivery gap of participatory budgeting (PB), and distributing verification without allocation reproduces the audit society.

Layer (e), planning, is the deliberately unresolved case: Core v0 requires
planning scopes to be public, versioned, and mandate-bearing, but does not
distribute their construction — which is why the architecture's promise is
stated with its qualifier built in: what it distributes is allocation
*within mandate-bound, visible, versioned, and contestable planning
scopes*, never allocation over an unframed agenda. Section 6 shows the
qualifier is not a detail: it is the binding constraint of the whole
design, and Section 8 elevates its removal to the research program's next
object.

Two methodological rules govern everything that follows. The **comparative
critique rule** (P001): every objection is evaluated against the current
institutional baseline, not an ideal — a difficulty shared by both systems
is a general problem of governance, not a refutation of the proposal. The
**integrate-or-bound rule** (P007): once the core architecture is complete,
a founded objection produces a new mechanism only if the failure mode would
defeat a core claim and cannot be controlled through existing objects;
otherwise it produces an explicit boundary, a visible residual risk, and a
limitation statement. The first rule disciplines critics; the second
disciplines the designers — a bias toward few, simple, general rules over
proliferating specific machinery in the spirit of Epstein (1995).

## 3. Related work

**Polycentric governance.** Ostrom's demonstration that common-pool
resources can be governed by nested, self-organized regimes without central
monopoly (Ostrom 1990) is the closest intellectual ancestor: her design
principles — bounded scope, monitoring by accountable monitors, graduated
sanctions, cheap conflict resolution — reappear here as software-enforced
objects. The difference is scope and instrument: we target budgeted state
functions rather than natural-resource commons, and encode the regime in a
platform whose rule changes are themselves versioned, auditable objects.

**Participatory budgeting.** Porto Alegre-style PB delegates a share of a
municipal budget to citizen assemblies (Wampler 2007; Baiocchi and Ganuza
2017). Empirically, PB improves some fiscal outcomes but suffers from
engagement decay, capture by organized minorities, and weak links between
allocation and verified delivery (Peixoto and Fox 2016). Core v0 differs on
exactly those margins: allocation is continuous and individual rather than
assembly-based; delivery is bound to allocation through evidential contracts
and conditional disbursement; and the architecture treats low participation
as a design input (Section 6) rather than a failure to be exhorted away —
collective action does not sustain itself at scale (Olson 1965).
The civic wallet itself generalizes the voucher mechanism (Friedman 1962) —
citizen-directed public money — from choosing among service providers to
allocating among verifiable projects, adding the verification lifecycle
that vouchers never carried.

**Fiscal federalism and epistemic democracy.** The formal ancestors of the
functional distribution principle are the decentralization literature —
Oates's (1972) theorem on when decentralized provision dominates, Tiebout
(1956) on preference revelation through jurisdiction choice, and Besley
and Coate (2003) on centralized versus decentralized provision under
political economy — with one deliberate difference: our layers are
functional rather than territorial, so what is distributed is a stage of
the spending process (allocation, execution, verification) rather than a
level of government. On the epistemic side, the aggregation results of
Section 6 belong to the lineage of Condorcet's (1785) jury theorem and its
modern failure conditions (Austen-Smith and Banks 1996) — a debt we make
explicit, because the theorem's failure regime (correlated, strategic, or
biased signals) is exactly what the seventh experiment stress-tests — and
the design conversation with Landemore's (2020) open democracy and Fung
and Wright's (2003) empowered participatory governance is direct: those
programs distribute deliberation and empowerment; this one distributes
allocation, execution, and verification with a mechanism-design and
audit-trail core they do not attempt.

**Liquid democracy.** Transitive or scoped delegation promises flexibility
between direct and representative participation, at the cost of concentration
(Blum and Zuber 2016; Kahng, Mackenzie and Procaccia 2018). Core v0 adopts
scoped, revocable, non-compensated delegation with mandatory concentration
visibility, and — following Michels' (1911) warning rather than dismissing
it — treats delegate concentration as a monitored risk with stress
thresholds, not a solved problem.

**Digital and blockchain governance.** The DAO literature demonstrated both
the feasibility of rule-encoded collective resource allocation and its
characteristic failure: plutocratic token voting and governance capture (De
Filippi and Wright 2018). Core v0 is deliberately not a blockchain design —
identity is verified rather than pseudonymous, and the sovereign state
remains the source of funds and law — but it imports the lesson that
meta-governance is the highest-leverage attack surface (Section 8).

**Mechanism design and audit.** Our formal models are elementary
applications of moral hazard under imperfect observation (Holmström 1979)
and collusion in supervision hierarchies (Laffont and Tirole 1991), with
Goodhart's law (Goodhart 1975; Campbell 1976) as the standing warning
against metric gaming. The closest existing mechanism design for citizen
allocation of public funds is quadratic (or 'plural') funding (Buterin, Hitzig
and Weyl 2019), which prices concentration through matching-fund curvature;
Core v0's funding-target closure rule pursues the same anti-concentration
goal by truncation rather than pricing, and our simulation results
(Section 6, Finding 1) delimit what truncation can and cannot achieve. On
the audit side, Olken's (2007) field experiment on Indonesian road projects
is the canonical empirical anchor for the detection probabilities our
Propositions 1–2 take as parameters — and its finding that top-down audit
outperformed grassroots monitoring for procurement fraud is a caution this
architecture absorbs by making professional fiscalization, not crowd
observation, the release-gating layer. The Brazilian audit-lottery
literature (Ferraz and Finan 2008) supplies the complementary mechanism
evidence — disclosure of audit findings changes political outcomes, and
audit exposure reduces subsequent corruption — and its underlying CGU data
enter the seventh experiment's audit-parameterized baseline directly. The contribution here is not
technical depth but specificity: the models' parameters map one-to-one
onto named architectural objects, so every proposition is an implementable
dial.

**What is new.** We have not run the systematic prior-art review that would
establish field-level priority (our literature map is preliminary), so we claim an
**integrative, object-level synthesis** rather than novelty against all adjacent
work. With that qualification, we are not aware of prior work combining:

- **(i)** a functional decomposition of state activity into distributable and
  non-distributable layers;

- **(ii)** a complete object-level architecture for the allocation layer;

- **(iii)** formal incentive analysis of that architecture's specific
  mechanisms;

- **(iv)** behavioral simulation of its citizen-facing assumptions —including
  what we believe is an early symmetric-knowledge comparison, in simulation, of
  open construction of allocation priorities from aggregated citizen signals
  against bandwidth-constrained central construction (a later pre-registered
  symmetric test finds the distributed advantage consistent but small; see Section 6)—;

- **(v)** a documented adversarial-review method with an explicit stopping
  rule.

And two further contributions concern measurement and method:

- **(vi)** an end-to-end institutional comparison, within a bounded
  public-investment slice, on delivered social value per unit of budget,
  decomposing selection from delivery on matched portfolios (the two layers
  interact within the exploratory apparatus). Separately, a later
  pre-registered symmetric gate — a **selection-only** test with delivery held
  at parity — finds the *selection* advantage positive but small (Section 6);
  it does not test the delivery interaction. This work also introduces the
  visibility gap (officially reported minus real delivery) as a
  measurable accountability deficit of the status quo;

- **(vii)** that comparison against an audit-parameterized baseline built
  from the published findings of supreme audit institutions across
  nine jurisdictions and the European Union (a documented-practice-informed
  scenario whose primary-source verification is still being completed), under a pre-registered
  headline-withdrawal condition.

Participatory-budgeting evaluations measure participation and allocation;
audit studies measure leakage after the fact; we know of none that measures,
within one framework, how much delivered value an allocation institution
produces from the same resources.

## 4. The Core v0 architecture

We summarize the reference architecture at the level needed for the analysis;
the full object model, state machines, and citizen-interface layers are
specified in the public corpus.

**Funding.** An implementing authority migrates a mandated share of an
existing budget into individual civic wallets: periodic, non-withdrawable,
public-purpose allocation capacity, equal per citizen by default. Every active
planning scope carries an *Allocation Mandate* record naming the statute or
instrument that authorized the migration, its legal rank, the organ to which
allocations are imputed, and the allocation formula. The platform records that
external authorization; it does not manufacture it. Binding-mode operation is
gated on an enabling norm of sufficient rank being recorded; otherwise, the
disclosed lawful default is consultative or tutored operation. The allocation act is designed to replicate two guarantees of the vote: secrecy of the preference and coercion-resistance (receipt-freeness). To the extent an enabling norm recognizes it, it can be shielded with protections equivalent to the vote's; until then, these are technical platform guarantees, not a legal status. Individual allocations are pseudonymous at the public layer
and reconcile cryptographically against public per-scope totals — every peso
traceable as money, no citizen traceable as an allocator, and no receipt or
exportable proof of any individual allocation exists, even voluntarily, so
that a patron who demands proof can never get one (the secret ballot's own
defense, applied to the wallet). A *Fiscal Commitment Profile* per scope makes
the migrated percentage, indexation, and delivery latency public and
versioned, so fiscal strangulation by the incumbent treasury is measurable and
attributable rather than silent. Essential services with continuity
obligations are protected by non-assignable floors outside citizen-by-citizen
popularity.

**Projects and roles.** Financeable projects declare a value thesis with
verifiable claims, affected parties, risks and anti-values, a phase and
milestone plan, and an *evidential contract*: what must be proven, by what
class of qualified producer, with what method, for which formal effect. Six
roles are structurally separated — proposer, modeler/designer, executor,
fiscalizer, evidence producer, custodian — with related-party relationships
declared on a severity-classified graph. The load-bearing rule is that the
executor never chooses or pays its own fiscalizers or evidence producers:
control work is financed from a separated control budget and assigned by
protocol.

**Parallel closure and conditional disbursement.** A published project
gathers funding commitments, fiscalizer assignments, evidence commitments,
and beneficiary confirmations concurrently; execution becomes possible only
when all conditions required by its proportional *threshold policy* close.
Committed funds are custodied, not transferred: release happens per
milestone, against reviewed fulfillment evidence, with retention, blocker
checks, and guarantees materialized by external custodians before any
release. A *Duty-of-Care Anchor* names, before disbursement, the solvent legal person civilly answerable to third parties for damages arising from execution, in particular damage to physical integrity.

**Attention infrastructure.** Citizens act through a layered interface:
discovery with user-controlled, reason-visible ordering; compact project
cards; and progressively deeper audit surfaces down to the full trail.
Non-attending citizens are served by configurable automatic allocation
profiles — or a sensible default profile when none is set — and by
scoped, revocable delegation with concentration visibility. The architecture
does not assume attentive citizens; it assumes mostly inattentive ones and
routes their weight through inspectable intermediation (Lupia and McCubbins
1998). This is a design answer to the citizen-competence objection in its
sharpest contemporary form (Brennan 2016): rather than restricting anyone's right to participate, the architecture makes the intermediation that inattention
produces visible, revocable, and auditable.

An apparent objection —that participating via app, wallet, and AI tutor
excludes the non-digital population— dissolves under the comparative
discipline: the non-digital citizen already delegates today, handing their
decision, through the vote, to a distant representative who allocates the
budget for them. Core v0 does not add a barrier: it removes a level of
indirection. Whoever never participates falls to the system default —equal per
citizen, mandate-bound—, not to the attentive minority's preference; and
whoever participates even minimally, including through non-digital channels or
assisted delegation, brings the decision closer to their direct interests
through microdelegation and rules such as "near me" that fund what they can
touch. What appears to exclude, includes more —with the construction of the
planning scope as the only remaining indirection (Section 8).

**Transition.** Deployment proceeds through operating modes — closed,
tutored, semi-open, open — in which a public authority may retain
eligibility review (project admissibility), but every material tutored decision, and every
tutored silence past its deadline, becomes a public governance-resolution
object. Incumbent-resistance indicators (scope share opened, rejection and
timeout rates, operator privilege) make symbolic adoption distinguishable
from real transfer.

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
threshold invisibly, ending below the status quo it replaced (delivering about
87% of the status quo's verified value, with selection quality intact) while
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
Welch 1992; Salganik, Dodds and Watts 2006), or to the architecture's own
default layer, whose routing follows the distributed project prioritization
— the aggregated allocation profiles — not a central plan. The model yields three testable
predictions — caps tame cascades (prediction 1), defaults anchor quality (prediction 2), decay
degrades gracefully only with defaults (prediction 3) — evaluated next.

## 6. Computational evidence

We test the three predictions of §5.3 —and, in successive experiments, the
assumptions of Propositions 1–4— in an agent-based simulation. Each experiment
(E1–E8) corresponds to a finding:

| Exp | What it tests | |
|---|---|---|
| E1 | do funding caps raise quality? | Finding 1 |
| E2 | what carries allocation quality? | Finding 2 |
| E3 | what buffers participation decay? | Finding 3 |
| E4 | distributed aggregation vs. central construction (refined by a symmetric-frictions frontier + capture, E4-v4/v5; and a v1.14 harm-myopia four-scenario robustness map, §6) | Finding 4 |
| E5 | where the architecture gains value (selection and delivery layers) | Finding 5 |
| E6 | reputational competition and execution standard | Finding 6 |
| E7 | comparison against an audit-parameterized baseline | Finding 7 |
| E8 | robustness under endogenous behavioral participation | close of §6 |

We simulate 10,000 citizens over 24 monthly cycles allocating across a
standing pool of 40 projects with quality *θ*, salience *s* (measured
corr(*θ*, *s*) ≈ 0.24), prioritization need-weights *w* = λ*θ* + (1 − λ)*u*
(where *u* is an idiosyncratic need component independent of quality) with
mixing weight λ ∈ {0.4, 0.8} — measured corr(*θ*, *w*) ≈ 0.55 and ≈ 0.97
respectively — and 3× scarcity (only a minority of projects can
complete). Evaluators (2–10%) fund the best quality they sample; salience
followers see a six-slot discovery surface ranked by salience amplified by
funding progress; default followers' budget fills projects in planning-
priority order. The funding-target closure rule is toggleable. Twenty
seeded runs per condition; the code is dependency-free and deterministic
(`scripts/simulation/allocation-sim.mjs`; full tables in
[simulation-results](../research/simulation-results.md)).

**Status of the earlier compound ratios (retired).** An earlier version reported a
single compound value-per-budget ratio against three baselines (a zero control, E5; an
audit-parameterized status quo, E7; behavioral adoption, E8). That single number
**conflated three distinct channels** — selection quality, administrative-machinery
cost, and leakage/diversion — and is **retired as a calibrated effect**. E5 is now
formalized as a transparent multi-layer stack: selection quality at *matched* project
budget (the E4 result above), with administrative cost and leakage as **separate,
declared, parametric channels** — default off, so the central is granted zero cost and
zero leakage, and E5 then reduces exactly to the selection result — each reported
without conflation and, in the cost-and-corruption extension, anchored to real
public-budget and procurement-corruption data (`scripts/simulation/e4-v5/e5-layers.mjs`).

**Quantitative status (governing).** A pre-registered, symmetric, selection-only
stress test — both arms with matched expected appraisal-report budgets, the same
candidate pool, costs and noise, delivery at parity, each acting on its own noisy
estimate rather than ground truth — found the distributed-minus-central selection
advantage **positive in every one of 18 pre-specified cells but small.** The
pre-registered decision statistic is the **pooled median Δ = 0.025**, below the
pre-registered **0.05 research-program rebuild gate**; a **post-hoc** ratio-of-sums estimate is
**Δ = 0.026, with a 95% world-cluster Monte-Carlo interval [0.023, 0.029]**
(reported separately, on the simulated data-generating process). The compound
multiplier is therefore **not** claimed as a calibrated effect. This is a stylized
test of a *selection mechanism*, not a validated implementation of Core v0: its
value and credit variables are abstract scores, not measured visibility,
traceability, permanence, or public value. The **0.05** figure is a
research-program **rebuild threshold** on this uncalibrated scale (a go/no-go rule
for whether to pursue a quantitative rebuild), **not** a calibrated policy-materiality
threshold. The controlling specification is
[claim-and-estimand-contract](../research/claim-and-estimand-contract.md); the test,
its frozen pre-registration, results, and diagnostics are
`scripts/simulation/e5-sp-symmetry-gate.mjs` and `audits/2026-07-10/symmetry-gate-*`.
The load-bearing contributions are the architecture, the mechanism direction, and
the v1.14 comparative robustness map across declared no-myopia and harm-myopia
regimes—not a point multiplier or calibrated impact.

**The declared reference scenario is decisive (E4 v1.14).** When the central selector is
modelled as the evidence describes it — its *direction* on every axis grounded in the
literature (not its magnitude fitted): near-blind to *diffuse harm on the low-visibility
long tail* (Hayek 1945; Scott 1998; Olson 1965; Bandiera, Prat and Valletti 2009, whose
**83% passive waste** in standardized-goods procurement shows most public loss is not
chosen), projecting its own priors and over-rating visible, appraisable benefits
(Broockman and Skovron 2018; Flyvbjerg et al. 2003), and tilted toward claimable credit
(Mayhew 1974; Arnold 1990), in a heavy-tailed low-visibility project space (Skuhrovec et
al. 2013) — **coverage-routed distributed selection recovers about 98% of the model's
full-information greedy reference against the central's ~44%: a 54-point conditional
model contrast**, not an empirical calibration or a field effect (the reference is a
greedy normalization, not a feasible institution or a welfare optimum). It is not a
knife-edge: it holds across the declared parameter space; it survives the realistic
signal degradation of Core v0's universal budget *routing* (a ~5% active-report / ~35%
microdelegation / ~60% profile-rule composition — universal *routing* is architectural,
effective independent *information* is not); and it holds even when the central is
granted every competence *except* harm-sight (~+14%). The central overtakes coverage only
by **abandoning the declared premises** — granting it the harm-sight the literature
denies it — and even then only on a near-harmless world; the *mirror* idealization of the
distributed arm (its own recipe reflected: perfect signal, harm-rich world, central kept
at its declared myopia) wins by a landslide (~+118%). The single sensitivity that
materially shrinks the gap — without reversing its sign in the declared range — is
correlated/common-mode error in the coverage arm (a shared platform/recommender or
concentrated delegation), which brings ~+54% to ~+26% at a strong correlation. The
pre-registered symmetry gate remains the paper's separate **confirmatory** computation (a
NO-GO near-parity under a different data-generating process); this map is a subsequent
scenario analysis, not a reclassification of it. The full four-scenario map, the
literature anchoring, the mirror idealized corners, and the common-mode frontier are in
**Appendix E4**.

**Finding 1: funding caps are an anti-concentration device, not a quality
device.** With closure ON, concentration falls (funding Gini 0.732 vs
0.759), the most salient 5% of projects absorb less (16.8% vs 19.6% of all
funding), and 15% more projects complete (25.3% vs 21.9%). But quality
selection is unchanged (*sel(θ)*, the Pearson correlation across projects between
latent quality θ and the binary indicator that a project reaches its funding
target, ≈ 0.39 vs 0.41): the truncated surplus
spills to the next most *visible* project, not the next *best* one. The
architecture's claim for the closure rule should be — and in the corpus now
is — bounded accordingly.

**Finding 2: the default anchor, not citizen attention, carries allocation
quality.** A default-anchored mix, with a near-perfectly informed planner (r ≈
0.97), reaches sel(θ) ≈ 0.71 — well above the salience-driven
configurations (≈ 0.35–0.43). Raising citizen attention from 2% to
10%, by contrast, barely moves the needle —at most ≈ 0.08 in salience-driven
regimes, and essentially nothing in default-anchored ones—, while degrading
the vector's informational quality from near-perfect to moderate (r ≈ 0.97 →
0.55) costs ≈ 0.29 of selection. The anchor rules, not attention.

Two qualifications keep the finding honest:

- **By construction.** The default rule is a deterministic θ-correlated
  allocator already holding most of the budget; what is measured is the
  *conditioning* —how much the vector's informational quality determines the
  anchor's value, and how little attention substitutes for it—, not the wisdom
  of the crowd.

- **Robustness.** A sensitivity panel (varying evaluator sample size and
  social-proof strength) shows the regime ordering is robust, except under
  very strong social proof, where the regimes converge within noise because
  strong amplification also propagates the evaluators' quality signal.
  Magnitudes are parameter-dependent and uncalibrated; what survives all
  variations is the ordering and the dominance of the prioritization's
  informational quality.

This finding quantifies the leverage concentrated in whatever constructs the
project prioritization the passive share follows. That prioritization has two
layers —which a companion study (Offermann 2026b) separated for the first
time—: the macro categorization (this corpus's Planning Scope, which frames
eligibility and carries no budget weights) and the aggregated allocation
profiles that route budget within it. The distributed arm is robust to the
quality of that categorization and a central arm is fragile to it, so the
advantage over a central status quo is not fixed: it grows as central planning
worsens — a model-internal direction the companion apparatus illustrates (a
conditional contrast that widens substantially as the central categorization
degrades, not a calibrated multiplier; see the quantitative-status note in this
section).

Two architectural facts scope the statement and forestall a tempting
over-reading. First, the default layer is pluggable, not mandatorily central:
the civic autopilot gives each citizen manual allocation, delegation,
published allocation profiles, a personal automatic rule, or the system
default; an onboarding citizen must explicitly select or acknowledge a base
profile, and only the share who never engage necessarily follows the system
default —which itself operates under a recorded allocation mandate. Second,
centralized construction of scope weights is a property of the closed and
tutored transition modes, not of the architecture: operating modes are
country-configured states, and the designed trajectory is toward open
construction (Finding 4 measures its in-model viability).

The numbers therefore establish a conditional. The binding constraint on
allocation quality is the informational quality of the **project
prioritization the passive share follows** —the aggregated allocation
profiles, not a macro planning vector—, whoever or whatever supplies it. A
captured or ignorant supplier is the failure mode; a well-informed or
well-aggregated one, the asset. Randomizing that prioritization to escape
capture does not help: it buys neutrality at the price of near-random quality
for the passive share. And because the architecture's designed trajectory
distributes its construction (open mode) and keeps it visible, versioned, and
pluggable, the constraint is met by distribution, not by a central agenda.
This is distinct from the narrower agenda-setting point of Section 8, which
concerns only who frames eligibility.

E1–E3 do not authorize two readings: the prioritization's origin is
unspecified (r is a property of the vector, not of a state office), and the
modeled crowd carries social proof but no knowledge —so these experiments
compare attention against weight quality, not central against distributed
knowledge. Finding 4 makes that comparison properly.

**Finding 3: what buffers participation decay is the anchor's level, not
where the leavers' weight flows — our own prediction failed here.** We
predicted that decaying active evaluation (10% to 2% over 24 cycles) would
degrade allocation gracefully only if the released share flowed to
defaults rather than salience. Exploiting common seeds across conditions,
the paired analysis rejects this: the destination's effect on overall
selection is null at both anchor strengths (mean paired differences 0.001
[−0.031, 0.033] and 0.021 [−0.028, 0.071]), and the only interval
excluding zero is small and opposite-signed (at a strong anchor, the
salience destination preserves late-cycle alignment slightly better —
plausibly because amplified social proof also propagates evaluator
seeding). What governs robustness to decay is the structural share of the
default layer itself, Finding 2's variable. Engagement decay — the
documented fate of civic-tech participation (Hirschman 1970; Peixoto and
Fox 2016) — is a
buffered risk here, but the buffer is the institutional layer's size, and
within-cycle quality alignment still erodes in later cycles under all
conditions, so decay is bought, not free.

**Finding 4: aggregated dispersed signals outperform fixed-bandwidth
central construction of the weight vector — but a fair, symmetric
re-examination resolves the advantage into a conditional frontier and adds a
capture-resistance that guards it.** A fourth, pre-registered experiment
(design and predictions committed before any run;
`research/e4-institutional-knowledge-design.md`) models knowledge
symmetrically instead of endowing it: a planner with fixed bandwidth
(thirty deep inspections; its correlation with latent quality is now
measured output, collapsing 0.81 → 0.37 → 0.17 as the project pool grows
40 → 200 → 1000) against thirty percent of citizens holding four
individually poor local signals each (noise 0.35). Five regimes share the
identical world and signals and differ only in the aggregation
institution. The pre-registered scale-crossover prediction failed in the
informative direction: open construction of the weight vector — a plain
average of citizen signals per project — beats pure central construction
at *every* scale, including the smallest, where the planner inspects
three-quarters of the world (sel(θ) 0.76 vs 0.62 at N = 40; 0.73 vs 0.04
at N = 1000). Twelve thousand noisy signals average into a near-perfect
vector; thirty good inspections cannot compete, and fixed central
bandwidth decays toward randomness as the world grows — a Condorcet
(1785) aggregation logic, and we treat it as such: the jury theorem's
known failure conditions (Austen-Smith and Banks 1996) define exactly
the boundary the seventh experiment tests. Three
qualifications carry the finding's honest weight. First, the same
dispersed knowledge *without* an aggregation institution is wasted: the
uncoordinated regime funds 0.6–15% of projects and selects poorly — the
result vindicates aggregation mechanisms, not the absence of mechanism,
and Core v0's default-plus-closure layer is exactly such a mechanism.
Second, aggregation defeats noise, not bias: signals are unbiased by
construction, and a common-mode bias uncorrelated with quality
(misinformation, expressive allocation) would not average out — only
endogenous social-proof contamination was tested, and proved largely
benign because visible funding progress is itself quality-correlated in a
well-anchored system. Third, elicitation is non-strategic by assumption;
in deployment, signal reporting becomes a gaming and clientelism surface,
and the mechanics of open scope construction remain a gated design
problem. Within those bounds, the finding points in a clear direction: the binding variable is not who holds the pen but how much
dispersed information the scope-construction institution ingests.

The simulation also disciplines rhetoric — in both directions. Nothing in
E1–E3 supports describing Core v0 allocation as "the wisdom of crowds":
the honest description is *inspectable intermediation with a
citizen-correctable default*, which the results show is both realistic and
better than the salience-driven alternative that unstructured platforms
converge to. And nothing in E1–E3 licenses the opposite reading — that
central planning knowledge beats distributed knowledge — because they
never modeled distributed knowledge; when E4 does, aggregation wins
wherever its named preconditions hold. Both discourses lose their slogan;
the design keeps its numbers.

*A fair, symmetric re-examination (E4-v4/v5).* This first-pass E4 gave the
central a fixed inspection bandwidth and left citizen signals unbiased — two
idealizations that, an adversarial review showed, tilt the comparison in the
distributed arm's favor. A rebuilt model
(`scripts/simulation/e4-v4-symmetric-frontier.mjs`,
`research/e4-v4-symmetric-frontier-results.txt`, `research/e4-v5-capture-design.md`)
gives *both* institutions a symmetric friction in perceiving true value,
including harm: the central attenuates perceived harm by a coefficient η (0 =
blind to diffuse harm, 1 = a fully accountable planner), while the distributed
reads true valuations but the diffusely harmed under-participate at a rate β
(voice inequality). The result is not a multiplier but a frontier with a
closed-form parity locus (`research/e4-analytical-backbone.md`): both
institutions are biased estimators of the same Samuelson value T = S⁺ − S⁻,
ranking projects by S⁺ − θ·S⁻ with θ_C = η and θ_D = 1 − β, so the distributed
dominates exactly when its coefficient is closer to the true harm-weight of one
— i.e. **β < 1 − η**. The simulation confirms the law (parity on the
anti-diagonal η + β = 1) and quantifies the delivered-value degradation off it
(from parity on the anti-diagonal to a substantial distributed lead across the
plausible box). The advantage
is thus a property of *including the harmed*, not of aggregation per se; it reaches
parity along the anti-diagonal β = 1 − η and turns into a central win below it
(β > 1 − η) — which absorbs the participation-bias objection into the model's own
β axis rather than leaving it external. Neither
extreme is assumed: η is *swept*, not fixed, and a low but non-zero η is a
defended regime, not a premise. The diffuse-harm literature (Bastiat's unseen
costs; Olson's asymmetric organization on contested issues; Wilson's
client-politics quadrant; Scott's legibility) describes *when* diffuse costs go
unrepresented — each read at its proper scope, not as a claim of global
blindness — while the opposing thesis that political competition disciplines the
centre toward efficiency (Wittman 1989) holds weakest in exactly that
client-politics quadrant. Empirically, most *measured* procurement loss is
passive — incompetence, not theft (Bandiera, Prat and Valletti 2009) —
consistent with a low but non-zero η.

*Capture-resistance guards the advantage (E4-v5).* Modelling organized capture
symmetrically — the review's hardest objection, applied in fairness to the
central planner too — the asymmetry widens rather than closes. A group captures
a low-value project only when its private rent exceeds acquisition cost plus the
expected sanction (Becker 1968); with the deterrence asymmetry carried entirely
by detection probability and acquisition scaling (the penalty held equal,
conservatively), the status quo turns net-harmful at rents near 10% of project
cost while the distributed threshold — floored by the equal-per-citizen wallet,
which money can persuade but cannot buy — sits roughly ten times higher (closed
form ρ(C) in the backbone note). Detection is a snowball p = 1 − (1 − q)^m, so
its floor is an expected m·q ≥ −ln(1 − p_c) ≈ 0.1 reporters drawn from the
transparent affected public — low, but this is a model-internal statement whose
force depends entirely on the stipulated detection gap (central ~0.10 vs
distributed ~1.0), not an empirical burden-of-proof: sensitivity analysis is
decisive here — the distributed advantage narrows and can reverse if distributed
detection is driven down toward ~0.3, so the claim is that organized recapture is
harder under the distributed arm's transparency *given these parameters*, not that
it is ruled out. This ties Finding
4 to the integrity layer of Finding 5: the same fiscalization that makes value
arrive is what keeps the allocation advantage from being bought back by
organized rents, so the two are a layer and its safeguard rather than
independent multipliers. Every magnitude here is model-internal; the literature
(Olson, Wilson, Scott, Bastiat; Becker, Becker and Stigler, Stokes,
Dyck-Morse-Zingales; Ostrom's self-monitoring commons) defends the direction,
the mechanism, and the sign of the asymmetry — not the numbers.

*Analytical backbone.* Three closed forms carry the weight, each verified against
the simulation (`research/e4-analytical-backbone.md`); the runs then only confirm
them and quantify the degradation off the clean cases. **(i) The parity law.**
Writing each institution as a biased estimator that ranks projects by S⁺ − θ·S⁻,
the central keeps θ_C = η of perceived harm and the distributed reveals
θ_D = 1 − β (the participation rate cancels from the ranking); since the true
harm-weight is one, the distributed arm delivers more true value **iff
β < 1 − η**, parity on the anti-diagonal. A bias–variance reading would predict
that on the parity line, where the bias cancels, the lower-variance estimator wins —
the distributed's revelation noise is zero (a funder knows her own value), the
central's proxy noise is not. The implemented simulation does **not** bear this out
at the accountable corner: at (η = 1, β = 0) the measured outcome is a slight
**central win** (the distributed delivers about 89% of the central's value there) — so
the honest reading is the noise-free parity law β = 1 − η, and the bias–variance tilt
toward the distributed is not supported there.
**(ii) The capture
threshold.** From rent > acquisition + P(detect)·penalty, the central's threshold
λ\*_C = (k_c + p_c·f)/C falls toward zero as its detection shrinks, while the
distributed's λ\*_D = k_d + p_d·f/C is *floored* by the equal-wallet acquisition
term k_d; the resistance ratio ρ(C) = (k_d·C + p_d·f)/(k_c + p_c·f) ≈ 6 to 10 in the
plausible range, rising in project cost. **(iii) The detection floor.** With snowball detection
P = 1 − (1 − q)^m, beating a central rate p_c needs, in the small-*q* (Poisson)
approximation (1 − q)^m ≈ e^{−m·q}, only an expected m·q ≥ −ln(1 − p_c) ≈ 0.1
reporters — the exact Bernoulli condition is m ≥ ln(1 − p_c)/ln(1 − q), which
depends on *m* and *q* separately, not only on their product. It is a
model-internal detection floor under the stipulated parameters
(sensitivity-dependent; see Finding 4), not an empirical burden-of-proof inversion.
Three invariances bound the arbitrary-magnitudes worry — as properties of the
noise-free, large-set *expectation*, not of every finite-sample run: the advantage
is invariant to the units of value (scale); in expectation it depends on the
voice-bias β rather than on the participation *level* (though in finite samples
turnout changes sample size, sampling variance, and hence rankings and
portfolios); and, because only the first moments S⁺, S⁻ enter the expected
ranking, the Gaussian valuation draw is a convenience there rather than a
load-bearing assumption (finite-sample tails and valuation shape can still move
rankings). One honest boundary the runs mark: the parity law is the large-set
limit; when a project's interested set is very small — a handful of people — the
distributed's sampling variance dominates and a full-census central regains the
edge. Two further boundaries are honest to state. The comparison is *static* — a
single allocation round — whereas real harms surface over iterated cycles and
feed back through elections and audit, so a persistently blind centre is the
stress case, not an inevitability. And the distributed arm is *scored on the true
value it reveals*, which would be circular were it not that the β voice-bias and
the capture frictions make its revealed signal a biased, contestable estimate of
that value rather than a definitional one.

*Positioning.* The first-best preference-aggregation mechanism —
Vickrey–Clarke–Groves — is infeasible for public budgets (it is not
budget-balanced; Green and Laffont 1979), so both the central planner and Core v0
are *second-best* institutions (Lipsey and Lancaster 1956); the comparison asks
which second-best delivers more, not whether either is optimal. Core v0
accordingly claims not strategy-proofness — impossible for any non-dictatorial
mechanism (Gibbard 1973; Satterthwaite 1975) — but *capture-resistance under
bounded organized coordination*. The equal-per-citizen wallet places it in the
intensity-expressing voting family (Casella 2012; Lalley and Weyl 2018) with a
sharper anti-plutocratic property: it caps influence by *equal endowment* rather
than by convex pricing, so money can persuade wallet-holders but cannot buy
wallets — exactly the acquisition-cost floor k_d of the capture threshold.
Finally, the aggregation advantage is the Condorcet (1785) jury logic and dies
under its independence condition (Austen-Smith and Banks 1996): organized capture
is the correlated-error violation of that independence, so the integrity layer
exists precisely to defend the assumption on which distributed aggregation rests.
The value primitive follows Sen's capabilities for *what* is aggregated —
freedoms, not money-utility — while the *summation* rests on Samuelson (1954), an
aggregation Sen himself resists; we invoke each only where it applies.

*Calibration.* The magnitudes are model-internal, but the gap to data is a
roadmap, not an apology. The central's 44–85% of benchmark-achievable value is a
**candidate validation target requiring an explicit construct mapping** — not a
direct check: the ex-post realized-to-appraised ratio (the World Bank's Independent
Evaluation Group ratings; Flyvbjerg, Bruzelius and Rothengatter 2003) is a
*different construct* from central selection relative to a full-information
benchmark, so bridging them needs a stated mapping before either can calibrate the
other; the voice bias β can likewise be anchored to measured
participatory-budgeting demographics rather than assumed. And independent field
evidence points the direction the model does: participatory budgeting in Brazil
shifted spending toward sanitation and health and lowered infant mortality at
constant per-capita budget (Gonçalves 2014) — a real-world instance of
citizen-directed allocation delivering more real value, cleanly separable from
any magnitude the model reports. The calibration-targets appendix makes the
model-internal / data boundary a visible line.

**Finding 5: delivered value, not allocation, is where the architecture
earns its keep — and selection and delivery interact.** A fifth,
pre-registered experiment (`research/e5-value-delivery-design.md`) adds
the execution stage the first four omitted: executors with hidden types
whose diversion decision follows Proposition 1's incentive condition,
under an opaque delivery regime — a zero-control lower bound (low
detection, unprotected advances, no recovery, no reputational memory),
with parameters inside the empirically documented leakage band: 87% in
Uganda's capitation grants (Reinikka and Svensson 2004), 24% in
Indonesian roads (Olken 2007) — versus the verified regime built from
Propositions 1-4 (milestone gating, retention, recovery, evidence-layer
detection, and a reputational stake: a visible confirmed-diversion record
that costs future selection by funders).
Crossing delivery with the two E4 selection regimes yields a 2×2 whose
main effects are two plain questions. Same projects, different control
layer: the verified (milestone-gated) regime delivers +43% on identical
portfolios (paired ΔV = 0.168 [0.143, 0.193]) over a zero-control regime
whose official completion overstates its real delivery by twenty-nine
percentage points. Same control layer, different projects: social
prioritization delivers +53-54% under either regime. The interaction is
positive and significant (+0.085 [0.053, 0.117]): the two layers **interact
rather than merely add**. An earlier version summarized this as a single
compound value-per-budget output; that compound is **retired** as a
model-internal factorial contrast, not a calibrated effect — E5 now reports
selection, administrative cost, and leakage as **separate declared channels**
(Section 6). Two pre-registered predictions failed honestly.
The expected dominance of delivery over selection did not hold at this
scale — central selection at two hundred projects is near-random (E4),
inflating the selection margin — so within this apparatus the robust pattern is
the *interaction* of the two layers, not their ranking (the compound magnitude
itself is retired as a calibrated effect; see Section 6). And the expected
reputational cleansing never fired
under the strong verification parameters, for the best possible reason:
the incentive condition holds for every executor, so no one diverts and
there is no one to exclude — deterrence pre-empts punishment, Becker's
enforcement working ex ante. A labeled post-hoc sensitivity with weakened
verification shows the second line of defense: partial deterrence,
active detection, and an executor pool that measurably improves as
funders stop selecting confirmed diverters, whose records are visible
(opportunist share 0.28 → 0.21 over twenty-four cycles) — pool exit by
lost preference, not by any platform exclusion power; reputation informs
choices, it never excludes. A companion sweep of default discovery categories
shows each carries a large, measurable distributional signature —
near-me concentrates 71% of budget in the densest quintile, rural
inverts it — so the default is a visible, configurable distributional
policy lever, not an inherent planner bias.

**Finding 6: visibility sustains the standard; naive reputation markets
concentrate faster than they select.** A sixth pre-registered experiment
(`research/e6-reputational-competition-design.md`) isolates the incentive
channel from deterrence entirely — a career-concerns setting in
Holmström's (1999) sense: an all-honest executor pool with adjustable
effort and no possibility of diversion (the model prices no explicit
effort cost; cost-minimization is encoded behaviorally as the opaque
regime's decay rule). In the opaque regime,
effort collapses toward cost-minimization (0.49 → 0.24 over twenty-four
cycles) — not through malice, but because effort has no return and no
visible standard exists to imitate. Making verified quality visible
sustains effort near its starting level, and the visible-competitive
regime delivers +11% over the opaque baseline — a pure incentive gain
with zero diversion in the model. Two pre-registered predictions failed
informatively. Visibility alone carries most of the effect: the mirror
precedes the market (the behavioral rule ties imitation to visibility, so
part of this is by construction — but the construction encodes the claim
that opacity erodes professional norms by removing the standard itself).
And naive reputation-weighted assignment concentrates work dramatically
(assignment Gini 0.84 versus 0.34) while tracking true ability only
weakly — early-luck lock-in, the cumulative-advantage dynamic of
information cascades reappearing in the executor market. The design
lesson runs in both directions: verified visibility is where the quality
incentive lives, and any strong reputation weighting — human or
algorithmic — needs the concentration observability, entrant floors, and
opportunity-normalized reputation the corpus prescribes. In Core v0,
reputation informs funders' choices rather than automatic assignment,
with concentration visible by construction — and it never excludes: no
protocol rule bars a funder from choosing any admissible actor on
reputational grounds.

**Finding 7: an audit-parameterized baseline — what it does and does not
calibrate.** The manuscript-review round's sharpest attack held that the zero-control
baseline is a caricature — real administrations run audit institutions,
retentions, bonds, and inspection — and the answer was a seventh
pre-registered experiment (`research/e7-calibrated-baseline-design.md`)
with a committed withdrawal condition: if the headline collapsed against
a fair baseline, it would be withdrawn, not requalified. The
audit-parameterized status-quo arm draws its parameters from published
audit-institution findings (a documented-practice-informed scenario;
verification of some primary sources is ongoing) — detection from Chile's comptroller works
studies, retention from documented payment-state practice, recovery from
Mexico's ASF series, leakage anchors category-matched to construction
(Olken 2007; the multi-country evidence base spans the U.S. GAO, the U.K. NAO, the
European Court of Auditors, Brazil's TCU and CGU, and the comptrollers
of Chile, Peru and Colombia; Ferraz and Finan 2008) — with the planner's
inspection bandwidth scaled to scope and coordinated signal bias swept
as the Condorcet failure regime. The withdrawal condition was not
triggered *within this apparatus*: against the audit-parameterized baseline the
earlier compound was substantial at scale but only near-parity at municipal
pilot scale (10-40 projects), where central selection with full coverage is
competitive and the case rests on
delivery and metering. But the audit evidence *parameterizes the baseline's
leak*; it does **not** calibrate the Core v0 institutional treatment effect,
which is governed by the later pre-registered symmetric test (Section 6) whose
pre-registered pooled median selection advantage is Δ = 0.025 of a
full-information benchmark — so these E7 figures are retained as conditional
apparatus outputs, not a surviving headline. Within this apparatus, and
conditional on its stipulated opportunist-cost distribution and no-memory
baseline, one qualitative result is instructive: at the model's audit-reported
detection intensity (primary-source verification ongoing), without reputational
memory, the model deters no diversion — the audit-parameterized regime's incentive threshold lies
below every modelled opportunist's cost, so its leak equals the zero-control
regime's, and in the model the added detection reduces the visibility gap (from
twenty-nine to nineteen points) rather than raising delivered value. These are
model-internal outputs of E7's stipulated apparatus, not an estimated causal
effect of real-world auditing. The audit-parameterized arm's leak lands inside
the audit-reported leakage band (24-48% in works); the model's leak mechanics, fed
audit parameters, are *consistent with* the documented range — this parameterizes
the baseline's leak, it does not calibrate the institutional treatment effect. And the bias
sweep bounds the open-construction claim honestly: distributed
selection degrades near-linearly with coordinated signal capture and
crosses below a competent full-coverage municipal planner only at
roughly a thirty percent coordinated share — it degrades, never
collapses, and remains superior everywhere below ten percent.

A pre-registered eighth experiment (E8,
`research/e8-behavioral-participation-design.md`) then replaced the
participation side of these arms — the default share and informed share
the architecture arms had imposed — with adoption trajectories generated
by a companion behavioral study: a Core v0-conformant agent-based model
of awareness, registration, participation modes, and trusted
microdelegation, calibrated with LLM-elicited synthetic priors
(replication package: the distributed-governance-experiments
repository). The earlier apparatus produced a compound at scale under its
synthetic adoption assumptions that varied across three populations and all
scales, including a launch trajectory that begins near zero
participation — which costs 1.7% of the ratio, because the default layer
anchors the thin early cycles by construction. The behavioral study also
independently reproduces the informed-share assumption these experiments
had imposed: 0.309 emergent against the 0.30 assumed.

**What survives.** Stripped to what the governing test supports: (1) under the
pre-registered symmetric gate the distributed selection advantage is *positive but
small* (median Δ = 0.025, below the 0.05 rebuild gate; NO-GO); (1b) a v1.14
four-scenario robustness extension (a *separate, exploratory* analysis under a different
data-generating process, not a reclassification of the NO-GO) models the central as the
evidence *directionally* describes it — *near-blind to diffuse harm on the low-visibility
long tail* (Hayek 1945; Scott 1998; Olson 1965; Bandiera–Prat–Valletti 2009): in that
source-motivated declared reference scenario coverage-routed selection recovers
*decisively* more of the model's greedy reference (≈ 98% vs ≈ 44%), even a central granted
every competence except harm-sight still loses (≈ +14%), and the central pulls narrowly
ahead only by abandoning the declared premises — on a near-harmless world — while the
*mirror* idealization of the distributed arm wins by a landslide, all a conditional model
contrast reported as declared reference points, not calibrated impact; (2) the
load-bearing contributions are the architecture and the qualitative
credit-versus-coverage mechanism — credit-pressured central ranking underweights
diffuse value that coverage-based distributed selection surfaces; (3) every compound
value-per-budget ratio an earlier version reported is retired here as a calibrated
effect — it was a conditional, model-internal apparatus output, not a calibrated field
effect; and (4) any calibrated total delivered-value effect — selection *and* delivery
(administrative cost and leakage), on real data — is future work, developed as separate
declared channels rather than a single conflated number.

## 7. Adversarial review as method

The architecture was developed under a documented adversarial loop:
**attack** (a brief stating a failure mode, its location in the corpus, a
stress scenario, and literature anchors) → **paired defense** (an objective
evaluation classifying the attack as founded, partially founded, or a
difference of judgment, with line-anchored citations into the corpus) →
**resolution** (an accepted document that either integrates a mechanism or
bounds the risk) → **propagation** (the resolution's constraints threaded
through every affected architecture document). The loop ran five rounds, all
resolved; every resolution is propagated through the corpus except the
manuscript-review round's four paired defenses (D037–D040), which carry accepted
resolutions whose remaining corpus propagation is tracked in the remediation
roadmap. The first round: eighteen attacks on
the architecture's mechanisms (metric gaming, fiscalizer capture,
disbursement gaming, collusion, related-party control, complexity,
incumbent resistance, among others). The second: fifteen deliberately
deeper attacks on the political and behavioral foundations (democratic
mandate, agenda-setting, fiscal dependence, thin markets, meta-governance
vacuum, rational ignorance, cascades, clientelism, polarization,
intertemporal myopia, the problem of many hands (Thompson 1980)). The
third round emerged
from the method turned outward: a simulated five-profile external review
of this paper's companion document generated reviewer questions the corpus
could not answer with existing anchors, and the standing rule converted
the two serious ones into formal attacks — the legal characterization of
the citizen allocation act, and the administrative capacity cost of
tutored operation — both since resolved and propagated. The fourth round
turned the same instrument on this manuscript itself: five simulated
reviewer profiles (academic, public law, systems architecture,
public-sector practice, educated general reader) attacked the published
v1.6, and their five unanswerable objections became formal attacks, each
now resolved — the zero-control baseline as a calibration strawman
(answered by the seventh experiment and a binding reporting rule), the
reserve of law over the allocation competence (an enabling-norm record
gating binding mode), reputational exclusion as an unprocessed sanction
(reclassified: the design holds no exclusion power to sanction with),
allocation traceability against preference secrecy (resolved as citizen
allocation secrecy with public money), and the adoption paradox (an
adoption layer under an explicit thesis boundary). The fifth round was an
ablation round of three attacks (A041–A043): the piecewise deployment of the
deterrence stack, the unregulated budget-release valve, and the verification
layer under machine-and-ring collusion — each resolved and propagated
(`docs/111`–`docs/113`). The method's
honesty requirement applies to itself: several resolutions answer their
attacks with an explicit "bounded, not solved," and the full review record
is public.

The loop terminates by the integrate-or-bound rule (P007). Its output
discipline is what distinguishes it from ordinary threat modeling: every
bounded attack must leave three artifacts — an explicit boundary sentence
("Core v0 does not require X"), a visible residual risk, and a one-sentence
limitation statement. The limitations section below is therefore not a
gesture of humility; it is the accumulated, adversarially generated output
of the method. Of the forty-three attacks, none was dismissed; nine of
the second round's fifteen were classified founded outright and the other
six partially founded, all five of the manuscript round were classified
founded at least in part, and the corpus's answer to several is an honest
"bounded, not solved."

We used the loop with a single design team plus AI assistance — which is
why we call it structured self-critique rather than validation; a
self-administered adversary, however disciplined, cannot substitute for
independent attack. Its obvious next application is with genuinely
independent reviewers, which we identify below as the first item of
future work.

## 8. Limitations

Stated per the method's own rule — each is a recorded boundary with a named
residual risk.

**Constructing the eligibility frame is centralized in the transition
modes.** In the closed and tutored operating modes Core v0 specifies for
pilots, the implementing authority constructs planning scopes; the
architecture makes that construction public, versioned, mandate-bearing,
and contestable through visibility, but in those modes it does not
distribute it. Constructing the scope means defining the frame — which
purposes, which budget share, which protected floors, which admissibility
rules — not designing or ranking projects: project creation and
prioritization remain distributed even in tutored mode, so this residual
agenda power is the power to decide what *may* be funded, never what *is*
funded. It is important not to misread our own simulation here. What that
simulation shows dominating every other quality margin is the
informational quality of the **project prioritization** — the aggregated
allocation profiles the funded share follows — and that prioritization is
distributed by design, even in tutored mode; the result is therefore an
argument *for* distributing construction, not evidence that a central
agenda governs delivery. The residual centralized power is the narrower
one: constructing the eligibility frame is itself the second face of power
(Bachrach and Baratz 1962; Schattschneider 1960; Lukes 1974) — the power
to keep something off the menu — which the architecture answers, in these
modes, by making the frame public, versioned, mandate-bearing, and
contestable rather than by distributing it. Three things scope the
limitation honestly. It is a property of the transition modes, not of the
architecture: operating modes are country-configured states, and the
designed trajectory is open, socially constructed agenda-setting. It is
narrower than the passive share: engaged citizens allocate manually,
delegate, or adopt configurable profiles, so authority weights fully
govern only the never-engaged share. And it is now measured rather than
assumed: E4 shows open construction of the weights from aggregated citizen
signals is viable and scale-robust in the model, so the constraint is no
longer whether distributed construction can work in principle but whether
an elicitation mechanism can keep dispersed signals honest, unbiased, and
representative under gaming, clientelism, and expressive-allocation
pressure — a design problem the corpus gates rather than assumes away.
The comparative baseline also belongs in this paragraph: under the current
institutional model, the entire budget follows a centrally constructed
vector that is neither published, versioned, pluggable, nor overridable by
any citizen. The transition modes reproduce that centralization visibly
and revocably; the open mode is designed to end it. This remains the
architecture's principal open problem, now with a measured prize attached
to solving it — and for that reason we treat it not as one limitation
among many but as the research program's next object: the design of open
agenda-setting, including the candidate architecture in which a
distributed agenda is constructed in parallel to the authority's own and
the tutored role narrows to admissibility review of conflicts between the
two, is the natural subject of a dedicated follow-up study and pilot.

**Procedural legitimacy is not democratic mandate — and the enabling norm
does not yet exist.** The platform records the external authorization for
budget migration and allocation formulas (the Allocation Mandate); it
cannot manufacture authorization the law never granted. In the continental
tradition of the reference jurisdictions, binding citizen allocation
requires an enabling instrument of sufficient rank that no current statute
supplies — the regional precedents (Peru's participatory-budgeting
statute, Brazil's city-statute framework) prove the instrument is
achievable, not that it exists — so the architecture's lawful deployments
today are consultative and tutored, in which every material allocation
decision remains imputed to the competent authority as a reasoned public
resolution; the delivery, metering, and reputational-memory results
operate unchanged under that status, and only the mature open mode
requires binding allocation. The normative debate over substituting
atomized allocation for representative appropriation (Rosanvallon 2008;
Urbinati 2014) remains open.
Under deep evaluative disagreement, the architecture's posture is
procedural in Gaus's (2011) sense: its rules aim to be justifiable from
diverse moral standpoints — which is what mandate records, motive
neutrality, and the comparative-critique discipline provide — without
presupposing a shared comprehensive doctrine. One further objection is
deliberately out of scope: the model takes the coercively raised budget as
given and improves its administration; the libertarian challenge to the
taking itself (Nozick 1974) is neither answered nor begged here.
Contribution-weighted allocation formulas, in particular, are flagged by
the architecture as plutocratic departures requiring explicit higher
authorization.

**Fiscal dependence is measurable, not enforceable.** The state controls
the budget spigot. The Fiscal Commitment Profile converts strangulation
from invisible to attributable — delivery latency, unexecuted valid orders,
mid-cycle share cuts all become public data — but no software compels a
sovereign to pay (Kydland and Prescott 1977; North and Weingast 1989). Credible commitment must come
from country-level law.

**Verification quality is assumed, then priced.** Propositions 1–4 take
detection and discovery probabilities as parameters. In thin control
markets — credence-good markets where quality is unobservable to the buyer
(Akerlof 1970; Dulleck and Kerschbamer 2006) — both collapse
simultaneously, and the only compensating margins are
financial terms and imported (remote or cross-territory) verification. The
architecture prices weak verification; it cannot conjure verifiers.

**Behavioral realism cuts both ways.** The simulation vindicates designing
for inattentive citizens, but it equally shows that a defaults-weak
deployment degenerates into salience-driven allocation. Off-platform
phenomena — clientelist brokerage, expressive polarization, collusion
conducted entirely outside the system — are made harder and more
discoverable, never impossible; the architecture's claims are comparative
(against opaque monopoly), not absolute.

**Meta-governance in open mode is deferred by design.** Rule-change
procedure, versioning, and non-surprise constraints are specified; the
constitutional mechanics — rules for making rules (Buchanan and Tullock
1962) — of who votes on protocol changes in a mature
open-mode deployment are deliberately not. Open-mode deployment is gated on
resolving them.

**Adoption selects, and the thesis does not depend on it.** This paper
addresses whether the architecture can be built and how its *selection*
mechanism behaves under a symmetric, delivery-at-parity test — not whether it
delivers more value in the world (a total delivered-value effect is a separately
identified future estimand, not claimed here), and not whether any authority
wants it. The corpus supplies the
deployment layer for an authority that has decided (prospective
baselines measured from instrumentation onset, credit attribution on
verified delivery, institutional rather than personal timeout attribution
in the first cycle, and a symmetry clause barring any operator from
exempting its own projects), and names the plausible adopter archetypes —
the post-scandal challenger, the mandating higher government, the
conditioned external funder. The honest selection effect stands: the
architecture will plausibly be adopted first by relatively clean or newly
arrived sponsors, in the places that need it least.

**The outcome measure is a bounded, non-distributional aggregate.** The value
the model scores is a cardinal utilitarian-style sum over affected parties on a
bounded, infrastructure-like public-investment slice; it is not distributionally
weighted and says nothing about redistribution, equity, or who bears benefits and
harms. A portfolio can score well on this measure while distributing badly.
Applying the criterion across groups, or to the whole budget or the purpose of
taxation, would require a separate social-welfare and incidence specification this
paper does not provide. The model is also partial-equilibrium: strategic
reporting, endogenous proposal supply, project complementarities, tax incidence,
and general-equilibrium effects are outside it (see the
[claim-and-estimand-contract](../research/claim-and-estimand-contract.md)).

**Epistemically, this is one team's self-critiqued design.** The
adversarial corpus was produced by the same research effort it attacks,
with AI assistance; the earlier apparatus's status-quo baseline was
audit-parameterized (its parameters drawn item-by-item from published
audit-institution findings, with primary-source verification still in progress), while the current symmetry gate is an uncalibrated
stylized selection test — neither is calibrated to a specific PB dataset,
and the remaining parameters are plausible rather than measured; and no
pilot has been run. The three missing validations — independent expert
attack, calibration to empirical PB data, and a bounded tutored pilot
(sports-sector, one municipality) — are the research program's next
phase, in that order.

## 9. Implementation pathway

The architecture is built for gradual, revocable adoption, and this
section is explicit about what it does and does not claim: the paper's
question — can the two-hundred-year-old allocation architecture be
re-architected with today's technology — is answered at the level of a
buildable design and a conditional selection-mechanism *direction*,
independently of whether any authority chooses to deploy. It does **not**
answer *by how much* real-world delivered value would improve: that is a
separately identified estimand left to independent review, empirical
calibration, and a bounded pilot (§8). What follows is the pathway for an
authority that chooses to deploy. A country opens
one public function (the reference pilot is municipal sports
infrastructure), migrates a small budget share under a tutored operating
mode, and retains admissibility review — with every tutored decision and
delay public by construction. The pilot's default framing is prospective:
instrumentation begins at adoption, the visibility gap is published as
the adopter's declared starting line ("measure me from here"), and
pre-adoption figures are reported separately, impersonally, and as
context — the configuration under which exposing instruments have
historically been adopted. Functional maturity metrics (participation
mix, default-flow share, fiscalization independence rates, incumbent-
resistance indicators, fiscal reliability) determine whether the deployment
earns wider scope, and their trajectories, not rhetoric, answer whether
distribution outperforms the local baseline. The exit condition is honest
in both directions: a pilot whose indicators stagnate under incumbent
throttling documents that fact publicly, which is itself information the
current system never yields.

The transition between regimes is itself measured. The companion
experiments (Offermann 2026b) quantify the semi-open regime of the
operating-regime ladder (docs/110) — a bounded mandated envelope running on
protocol autopilot beside the authority's traditional budget — as a fiscal
blend: above a portfolio-granularity floor of roughly ten percent, blended
verified value rises monotonically and near-linearly with the envelope
share within that apparatus, from break-even near eight to ten percent
upward — an earlier-apparatus contrast now subject to the retired-multiplier
caveat (Section 6), not a calibrated endpoint. The transition from the status
quo toward the open regime is a dial, not a leap: adoption can proceed in
increments.

The same experiments measured a variable this corpus had left unregulated:
*when* the authority releases budget into the allocation machinery. The
resulting deployment rule: meter release against a work-in-progress ceiling
calibrated to the delivery-and-verification pipeline's throughput and cycle
time — never against the calendar. Calendar release freezes months of
budget in escrow and saturates verification; and when verification capacity
is scarce, no release policy compensates — verification capacity is the
pipeline's ceiling before it is the anti-fraud instrument. The rule is
conditional on a carryforward instrument (the semi-open envelope is
precisely such a vehicle); under strict budget annuality it degenerates to
within-year metering.

Finally, the technological premise that lowers participation costs on the
citizen side (the AI tutor) applies symmetrically to the control side.
Machine verification of protocolizable evidence classes multiplies
fiscalization capacity, with humans as the permanent second instance —
sampled re-verification with a published floor, seeded known-answer
controls as the calibration and drift-detection instrument, auditing the
verifier rather than competing with it — so that the machine's error rate
remains measured and the human control profession remains funded from the
control budget it relieves. Measured on a five-family panel of real models
(Offermann 2026b), frontier models converge on good specificity and fraud
detection on document-legible evidence while small local models are weaker,
and evidence contracts that include objective comparison references (market
benchmarks, duration bands, thresholds) let a strict verifier judge rather
than guess. The machine layer reaches only document-legible, delivery-phase
fraud — physical quality-below-spec and pre-contract theft remain fully
human, so provenance attestation is tamper-evidence at capture, not
court-grade proof, and evidentiary admissibility still needs custody, contradiction,
and expert testimony. Contraposed citizen evidence — independent producers
with interests opposed to the executor, whose anticipated existence deters
diversion — keeps the watching distributed even as routine
document-verification labor shrinks; but its strength equals the
*independence* of the contributor layer, and a colluding ring that captures
or silences it erases the effect. Cross-layer collusion is in fact the one
adversary that bypasses the per-milestone deterrence and moves leakage by an
order of magnitude (while the delivered-value advantage survives), so
collusion resistance — verified beneficial ownership, contributor
Sybil-resistance, and decentralization of the assigner and the audit-budget
floor — is a first-class requirement ([docs/113](../docs/113_VERIFICATION_PACKAGE_AND_A043_RESOLUTION.md)), not a residual caution.

## 10. Conclusion

For the bounded public-investment allocation problem studied here, a
relevant criterion is not how faithfully an institution executes a plan
but how much delivered, verified value it produces per unit of public
resource (Musgrave 1959; Okun 1975) — one criterion alongside the
distributional and rights constraints this model does not represent. This
paper's contribution is an architecture that makes that criterion
operational — and a disciplined account of exactly how far its evidence
reaches. The
architecture's spine is two separable questions anyone can ask. First:
take the same projects, designed identically, and change only who
executes and how they are watched — does the visibly audited regime with
reputational consequences deliver more than the one without them? Second:
hold the control layer fixed and change only which projects get funded,
centrally planned or socially prioritized? In the exploratory simulation
apparatus the answer to both is yes — a verified-delivery gain and a
selection gain that interact rather than merely add — but those
magnitudes are model-internal factorial contrasts, not calibrated
effects, and we do not build the paper on them. The claim the paper
actually stands on is narrower and was tested harder: a pre-registered,
symmetric, selection-only gate finds the distributed-minus-central
advantage positive in every cell but small (a pre-registered pooled median
Δ = 0.025 of a full-information benchmark, below its pre-set 0.05
research-program rebuild gate). The v1.14 robustness map then models the central as the evidence
*directionally* describes it — near-blind to diffuse harm on the low-visibility long tail (Hayek 1945;
Scott 1998; Olson 1965; Bandiera–Prat–Valletti 2009) — and in that source-motivated
declared reference scenario coverage-routed selection recovers *decisively* more of the
model's greedy reference (≈ 98% against ≈ 44%) and robustly. The two are epistemically
distinct, not a reclassification: the pre-registered gate is the sole *confirmatory*
computation (a NO-GO near-parity, granting the central harm-sight under sampled
participation), while the v1.14 map is a subsequent *exploratory* scenario analysis under
a different data-generating process; the central overtakes coverage only by abandoning
the declared premises. We therefore retire the compound multiplier an earlier version
reported and rest on the architecture, the qualitative mechanism, and this conditional
comparative map; its magnitudes are declared reference and stress points, not
calibrated impact. One model-internal result is worth carrying because it is
about the delivery layer, not the multiplier: in the model, at E7's
audit-informed (but not yet fully source-verified) detection intensity,
detection without persistent consequences deters no diversion; what moves delivered value is the
instrument the modelled status quo lacks — consequences that persist. Whether
that holds in a real institution is a hypothesis for a pilot, not a result
here; but the model is unambiguous that accountability without memory is
bookkeeping.

The deeper point is Friedman's: a central administration spends other
people's money on other people, the spending category with the least care
for both cost and value (Friedman and Friedman 1980). This architecture
does not answer that problem with exhortation; it re-plumbs the bucket.
Planning remains — as the guiding thread that sets scopes, floors, and
mandates — but the engine of value is the conversion layer: measurable
promises, conditional release, independent verification, consequences that
compound into reputation, and a meter on every leak. The question this
paper answers is therefore not whether states should be bigger or smaller,
but whether the layers of state activity that fail through information and
incentive monopoly can be re-architected to fail less — and to show their
failures when they do. For one such layer we have specified a complete
architecture, proved the incentive conditions its mechanisms depend on,
measured selection, aggregation, and delivery in simulation against a
baseline the incumbent system's own auditors supplied, and subjected
the whole to five rounds of documented adversarial review with an
explicit integrate-or-bound discipline. The result is deliberately modest
in its claims and unusually explicit about their edges: allocation quality
rides on the informational quality of whatever constructs the weight
vector, whose open construction is measured viable but whose honest
elicitation remains the open problem; delivered value rides on
verification whose market conditions must be priced; legitimacy rides on
mandates the platform can record but not create. What distinguishes the
proposal is that these edges are specified, monitored, and attached to
named objects — which is, we argue, what it looks like when institutional
design is treated as an engineering discipline rather than an ideological
one.

The comparison is conditional, not ontological. A center with credible
local-information channels, organized representation of diffuse losers, and low
credit pressure can approach parity. Core v0's claim is that those capacities are
institutional accomplishments to be *demonstrated*, not virtues to be presumed —
and that a state less dependent on what its center can see, and less able to
certify its own mistakes, is worth the attempt.

## Appendix E4: the symmetric gate and the four-scenario robustness map

This appendix gives the full design of the pre-registered symmetric gate (summarized
as "Quantitative status" in §6) and the complete v1.14 four-scenario robustness map
(headlined in §6): the scenario table, the harm-myopia decomposition, the frontier,
the benchmark theorem, and the four limits.

### The symmetric credit-versus-coverage gate (full methods)

Because this is the paper's one confirmatory computation, its design is stated in full
here rather than only by reference. Each world holds K = 500 candidate projects; for
each, N = 5000 potential participants are considered, each interested with a
project-specific probability, so the interested reach is at most N and endogenous.
Both arms then see the
same candidate pool, the same exact costs, the same truth net[j] = S[j] − h·cost[j],
delivery held at **parity**, and the same report noise report = v + Normal(0, τ);
each funds a **greedy** set under a budget of one-third of total project cost, is
eligible to fund a project only where *its own* noisy estimate of net is positive
(no oracle gate), and its delivered value is scored on the projects' *true* net.
The arms are symmetric except for the coverage mechanism and its matched
counterparts. *Distributed (endogenous coverage):* each interested citizen reports
independently with probability p if her value v ≥ 0 and p·(1 − β) if v < 0 (adverse
voice bias), giving ĥS_D = Σreports / p, ranked by estimated net per cost.
*Central (competent value-reader):* an appraisal budget matched to the distributed
arm's *expected* total reports in that world, spread **evenly** across projects as a
rounded fixed per-project bandwidth m_C = round(expected reports / K) (so the two
arms' appraisal totals are equal in expectation up to that rounding); per project it
samples m_C interested citizens, observes v + Normal(0, τ), and forms its own noisy
ĥNet_C = reach·mean(observed) − h·cost. It ranks by score = (1 − λ)·z(ĥNet_C/cost) + λ·z(P/cost) — its **own noisy
estimate**, never the true net — where P is claimable political credit (the
electoral credit-claiming and traceability logic by which visible, attributable
benefits are favoured over diffuse ones; Mayhew 1974; Arnold 1990) and λ is bounded
credit pressure (a *posited* pressure whose real-world magnitude must be measured,
not assumed). Credit moves *ranking*, never eligibility (no knowingly
value-destroying planner). The legitimate asymmetries are therefore only these:
distributed reports self-route to projects citizens care about while negative
stakeholders participate less, and central appraisal is spread evenly while its
ranking carries credit pressure — everything else is shared. The estimand is
**Δ = (D − C)/O** per world, where D, C, O are delivered true net for the
distributed, central, and full-information greedy arms and O is a reference level,
not an optimum. The frozen grid sweeps λ ∈ {0, 0.1, 0.2, 0.3} (λ = 0 a negative
control), a latent-correlation setting ρ ∈ {0, 0.5, 1} (realized corr(S, P) ≈ 0.00,
0.30, 0.82), and h ∈ {1.5, 2.5, 4} over 100 seeded worlds, in a baseline
observation regime (p = .35, β = .30, τ = .5) and a matched-budget low-information
stress regime (p = .15, β = .60, τ = 1.0). The **pre-registered decision rule** —
frozen before running and designed by the independent auditor to be adversarial —
required, for a GO on rebuilding the quantitative engine, at least 15 of the 18
primary cells with mean Δ > 0, a pooled **median Δ ≥ 0.05**, a bootstrap lower
bound > 0, and median Δ ≥ 0 under the stress regime, plus a guard to pause if the
λ = 0 control itself exceeded 0.05. The result was **NO-GO**: the advantage was
positive in all 18 primary cells, but the pre-registered pooled **median Δ = 0.025**,
below the 0.05 rebuild gate; the λ = 0 negative control sat at ≈ 0.016, within the
pause guard (no hidden asymmetry flagged). A **post-hoc** world-cluster
ratio-of-sums estimate was Δ = 0.026 [0.023, 0.029] (Monte-Carlo uncertainty on the
simulated data-generating process, reported separately from the median). The
advantage rises with credit pressure λ and falls as credit aligns with value — the
credit-versus-coverage mechanism — but it is small, which is why the calibrated
multiplier is retired and the paper rests on the architecture and the mechanism
direction, now sharpened by the robustness map below.

### The four-scenario robustness map (v1.14)

The pre-registered gate above equips the central arm with competent, *harm-aware*
appraisal. A v1.14 extension asks the empirically-grounded question: what happens when
the central is modelled as the evidence describes it — **near-blind to diffuse harm on
the low-visibility long tail**? That near-blindness is over-determined by the
literature: the knowledge problem (Hayek 1945), state legibility (Scott 1998), diffuse
costs politically under-weighted (Olson 1965; Schattschneider 1960; Wilson 1973), 83%
of government waste being *passive* rather than chosen (Bandiera, Prat and Valletti
2009), the seen-versus-unseen (Bastiat 1850), and agenda control (Bachrach and Baratz
1962). The model realizes it as a salience-gated harm term,
M_C = a + b·S⁺ + w·(v_p − S⁺) − b_H·s(V)·H + η, whose harm-detection s(V) rises with a
project's visibility, while the distributed arm registers harm across the whole
distribution. **Net-allocation participation is universal by architecture (p = 1)** —
in Core v0 profiles and delegates allocate on behalf of the passive, so it is a *fact*,
not a low participatory-budgeting turnout. Its *signal quality* is an anchored
composition: ~5% active direct reports (the single-digit turnout figure), ~35%
microdelegation (individual signal, revocable — Kling et al. 2015), and ~60% profile
rules (a high-alignment category default, since people overwhelmingly keep defaults —
Samuelson and Zeckhauser 1988). Full literature anchoring of every calibration knob is
in `research/e4-calibration-literature-anchors.md`. Scoring delivery on true value,
four declared scenarios (plus one diagnostic contrast) map where each institution
stands, as the signed fraction of the full-information greedy benchmark, parity at zero
(`npm run e4:scenarios`):

| scenario (assumptions) | m ± 95% CI | Core v0 | central | winner |
|---|---|---|---|---|
| **Probable — the declared reference scenario** (central myopic to diffuse harm, projecting, credit-tilted; distributed on its anchored coverage composition) | **+54.0%** [+53.2, +54.8] | 98.2% | 44.2% | **Core v0 (decisive)** |
| **Harm-myopia only** (diagnostic contrast: probable, changing ONLY the two harm-gate coordinates) | **+37.6%** [+37.0, +38.2] | 98.2% | 60.6% | Core v0 |
| **No-myopia bundle** — probable, but the central is granted harm-sight + unbiasedness + precision + no credit | **+13.8%** [+13.5, +14.1] | 98.6% | 84.8% | Core v0 |
| **Distributed's favourable case** | **+205.2%** [+202.9, +208.1] | 95.6% | −109.6% | Core v0 |
| **Central's declared favourable endpoint** (a residually-imperfect reader on a near-harmless world) | **−2.3%** [−2.5, −2.2] | 95.3% | 97.6% | central (immaterial) |

**The anchored result is decisive and robust.** Under the **declared reference
scenario** the distributed arm delivers ≈ 98.2% of the benchmark and the central
≈ 44.2% — a +54-point gap — and coverage wins across essentially the whole anchored
parameter space. Turning off harm-myopia *alone* (the two harm-gate coordinates)
recovers about **41%** of the gap (16.4 of a 40.2-point decline); granting the central
the *full* competent-but-harm-aware bundle recovers the rest yet still leaves coverage
ahead (**≈ +13.8%**) — so even a central idealized in every way *except* the harm-sight
the literature denies it still loses. The central pulls narrowly ahead only by
**abandoning the declared premises**: a corrected reader (no myopia — against
Hayek/Scott/Olson/Bandiera; no projection — against Broockman and Skovron 2018) on a
near-harmless world reaches only ≈ −3%, a marginal, anti-empirical corner. That corner
is reported **symmetrically** with the distributed arm's *equally-idealized* corner —
built to mirror the same recipe: perfect distributed signal on a harm-rich world with
the central kept at its *anchored* myopia — which reaches **≈ +118%** (the broader
`PRO-DIST` scenario in the table, +205%, is more favourable still because it *also*
degrades the central below its anchored level). Idealization is wildly asymmetric, and
neither corner is empirically grounded. The one
sensitivity that materially shrinks the anchored gap is **correlated / common-mode
error** on the profile-and-delegation share (a shared platform/recommender, or
delegation concentrated on super-delegates — Kling et al. 2015): it takes ≈ +54% down
to ≈ +44% (modest) and ≈ +26% (strong), crossing parity only at a large shared-error
level (σ_cm ≈ 2.1). No single-factor slice flips the winner over its plausible range;
the combined ceteris-paribus path from the declared reference to the fully-idealized
central endpoint crosses parity only at **t ≈ 0.92 of the declared segment**. These magnitudes
are **declared, source-motivated reference points from a stylized comparative-
institutions model — a conditional model contrast, not target-domain calibrated field
effects**. The standing limits are: (i) the harm-gate's exact *magnitude* is a stylized
functional form — its *direction* is strongly anchored, and the result is robust across
the s_exp ∈ [1, 2.5] band (≈ +48% to ≈ +54%); (ii) the central inputs carry an
unpropagated transport gap — the political-opinion evidence identifies elite–constituent
*perception* error, and mapping it to project-level welfare error requires three
unestimated links (opinion misperception → project scoring → portfolio choice → realized
affected-party value), so those inputs are proxy-informed, not calibrated; (iii) the
reported intervals are 95% conditional world-bootstrap intervals at *fixed* scenario
inputs — finite-world simulation uncertainty only, excluding uncertainty in parameter
values, literature transport, functional form, and field implementation; the distributed
arm's independent-plus-common-mode error is its one structural sensitivity (above); and
(iv) administrative cost and leakage are separate *multiplicative* value-preservation
channels (with their interaction reported explicitly), deliberately off here — E5 (the
companion layered framework) turns them on. The
reproducible scenarios, frontier, evidence, theorem, and full literature anchoring are
in `scripts/simulation/e4-v5/`, `research/e4-parity-theorem.md`, and
`research/e4-calibration-literature-anchors.md`.

### E4 calibration targets

The E4-v4/v5 magnitudes are model-internal; the table names, for each parameter, the
real dataset that *could* inform it — making the boundary between model-internal and
empirically-anchored a visible line rather than a caveat buried in prose (details in
`research/e4-calibration-targets.md`). The central %-benchmark is an *output* the
model computes, but mapping it to observed realized-to-appraised ratios is **not a
direct overlay**: the two are different constructs (§6), so it is a **candidate
validation target requiring an explicit construct bridge**, not a one-step
calibration.

| Model quantity | Model value | Real-world proxy | Candidate dataset(s) | Status |
|---|---|---|---|---|
| central %-benchmark | 44–85% | realized ÷ appraised value | World Bank IEG ratings; Flyvbjerg megaproject DB | candidate target; needs an explicit construct mapping |
| η (harm-blindness) | 0–0.5 | passive vs active waste share | Bandiera-Prat-Valletti 2009 (83% passive, setting-specific: Italian standardized-goods procurement) | anchored-direction |
| β (voice inequality) | 0.2–0.5 | PB participation bias | NYC / Paris / Porto Alegre; Decidim / Consul | calibratable |
| q, m (detection) | q ≈ 0.5–1%, m in hundreds | complaint / whistleblowing rates | FTC Consumer Sentinel; NYC 311; Dyck et al. 2010 | calibratable |
| λ threshold | central ≈ 0.10 | procurement rents / bribe depth | Olken 2007; WB Enterprise Surveys | calibratable |
| penalty f | equal both sides | legal sanction scale | held equal (conservative) | scope choice |

The v1.14 four-scenario map (above; headlined in §6) makes the same anchoring explicit for its harm-myopia model: the visibility long
tail is source-motivated by heavy-tailed public procurement (Skuhrovec et al. 2013), participation by
participatory-budgeting turnout, and the harm-detection gate by the agenda-setting/salience literature; the
per-knob anchors and their strength are recorded in `research/e4-plausible-anchors.md`, with the reproducible
scenarios, frontier, and theorem in `scripts/simulation/e4-v5/` and `research/e4-parity-theorem.md`.

## References

- Akerlof, G. (1970). "The Market for 'Lemons': Quality Uncertainty and the Market Mechanism." *Quarterly Journal of Economics* 84(3).
- Arnold, R. D. (1990). *The Logic of Congressional Action*. Yale University Press.
- Austen-Smith, D., and J. Banks (1996). "Information Aggregation, Rationality, and the Condorcet Jury Theorem." *American Political Science Review* 90(1).
- Bachrach, P., and M. Baratz (1962). "Two Faces of Power." *American Political Science Review* 56(4).
- Besley, T., and S. Coate (2003). "Centralized versus Decentralized Provision of Local Public Goods: A Political Economy Approach." *Journal of Public Economics* 87(12).
- Baiocchi, G., and E. Ganuza (2017). *Popular Democracy: The Paradox of Participation*. Stanford University Press.
- Bandiera, O., A. Prat, and T. Valletti (2009). "Active and Passive Waste in Government Spending: Evidence from a Policy Experiment." *American Economic Review* 99(4).
- Bastiat, F. (1850). *Ce qu'on voit et ce qu'on ne voit pas* [What Is Seen and What Is Not Seen]. Paris.
- Becker, G. (1968). "Crime and Punishment: An Economic Approach." *Journal of Political Economy* 76(2).
- Becker, G., and G. Stigler (1974). "Law Enforcement, Malfeasance, and Compensation of Enforcers." *Journal of Legal Studies* 3(1).
- Bikhchandani, S., D. Hirshleifer, and I. Welch (1992). "A Theory of Fads, Fashion, Custom, and Cultural Change as Informational Cascades." *Journal of Political Economy* 100(5).
- Brennan, J. (2016). *Against Democracy*. Princeton University Press.
- Broockman, D., and C. Skovron (2018). "Bias in Perceptions of Public Opinion among Political Elites." *American Political Science Review* 112(3).
- Blum, C., and C. I. Zuber (2016). "Liquid Democracy: Potentials, Problems, and Perspectives." *Journal of Political Philosophy* 24(2).
- Bovens, M. (2007). "Analysing and Assessing Accountability: A Conceptual Framework." *European Law Journal* 13(4).
- Buchanan, J., and G. Tullock (1962). *The Calculus of Consent*. University of Michigan Press.
- Buterin, V., Z. Hitzig, and E. G. Weyl (2019). "A Flexible Design for Funding Public Goods." *Management Science* 65(11).
- Campbell, D. (1976). "Assessing the Impact of Planned Social Change." Occasional Paper 8, Dartmouth College.
- Casella, A. (2012). *Storable Votes: Protecting the Minority Voice*. Oxford University Press.
- Coase, R. (1937). "The Nature of the Firm." *Economica* 4(16).
- Condorcet, M. de (1785). *Essai sur l'application de l'analyse à la probabilité des décisions rendues à la pluralité des voix*. Imprimerie Royale.
- De Filippi, P., and A. Wright (2018). *Blockchain and the Law: The Rule of Code*. Harvard University Press.
- Demsetz, H. (1969). "Information and Efficiency: Another Viewpoint." *Journal of Law and Economics* 12(1).
- Downs, A. (1957). *An Economic Theory of Democracy*. Harper.
- Dulleck, U., and R. Kerschbamer (2006). "On Doctors, Mechanics, and Computer Specialists: The Economics of Credence Goods." *Journal of Economic Literature* 44(1).
- Dyck, A., A. Morse, and L. Zingales (2010). "Who Blows the Whistle on Corporate Fraud?" *Journal of Finance* 65(6).
- Epstein, R. (1995). *Simple Rules for a Complex World*. Harvard University Press.
- Ferraz, C., and F. Finan (2008). "Exposing Corrupt Politicians: The Effects of Brazil's Publicly Released Audits on Electoral Outcomes." *Quarterly Journal of Economics* 123(2).
- Flyvbjerg, B., N. Bruzelius, and W. Rothengatter (2003). *Megaprojects and Risk: An Anatomy of Ambition*. Cambridge University Press.
- Friedman, M. (1962). *Capitalism and Freedom*. University of Chicago Press.
- Friedman, M., and R. Friedman (1980). *Free to Choose*. Harcourt.
- Einstein, K. L., M. Palmer, and D. M. Glick (2019). *Neighborhood Defenders: Participatory Politics and America's Housing Crisis*. Cambridge University Press.
- Fung, A., and E. O. Wright (2003). *Deepening Democracy: Institutional Innovations in Empowered Participatory Governance*. Verso.
- Gaus, G. (2011). *The Order of Public Reason*. Cambridge University Press.
- Gibbard, A. (1973). "Manipulation of Voting Schemes: A General Result." *Econometrica* 41(4).
- Gonçalves, S. (2014). "The Effects of Participatory Budgeting on Municipal Expenditures and Infant Mortality in Brazil." *World Development* 53.
- Goodhart, C. (1975). "Problems of Monetary Management: The UK Experience." *Papers in Monetary Economics*, Reserve Bank of Australia.
- Green, J., and J.-J. Laffont (1979). *Incentives in Public Decision-Making*. North-Holland.
- Hayek, F. (1945). "The Use of Knowledge in Society." *American Economic Review* 35(4).
- Hirschman, A. (1970). *Exit, Voice, and Loyalty*. Harvard University Press.
- Holmström, B. (1979). "Moral Hazard and Observability." *Bell Journal of Economics* 10(1).
- Holmström, B. (1999). "Managerial Incentive Problems: A Dynamic Perspective." *Review of Economic Studies* 66(1).
- Jensen, M., and W. Meckling (1976). "Theory of the Firm: Managerial Behavior, Agency Costs and Ownership Structure." *Journal of Financial Economics* 3(4).
- Kahng, A., S. Mackenzie, and A. Procaccia (2018). "Liquid Democracy: An Algorithmic Perspective." *AAAI*.
- Kydland, F., and E. Prescott (1977). "Rules Rather than Discretion: The Inconsistency of Optimal Plans." *Journal of Political Economy* 85(3).
- Kling, C. C., J. Kunegis, H. Hartmann, M. Strohmaier, and S. Staab (2015). "Voting Behaviour and Power in Online Democracy: A Study of LiquidFeedback in Germany's Pirate Party." arXiv:1503.07723.
- Laffont, J.-J., and J. Tirole (1991). "The Politics of Government Decision-Making: A Theory of Regulatory Capture." *Quarterly Journal of Economics* 106(4).
- Lalley, S., and E. G. Weyl (2018). "Quadratic Voting: How Mechanism Design Can Radicalize Democracy." *AEA Papers and Proceedings* 108.
- Landemore, H. (2020). *Open Democracy: Reinventing Popular Rule for the Twenty-First Century*. Princeton University Press.
- Mayhew, D. (1974). *Congress: The Electoral Connection*. Yale University Press.
- Lipsey, R., and K. Lancaster (1956). "The General Theory of Second Best." *Review of Economic Studies* 24(1).
- Lukes, S. (1974). *Power: A Radical View*. Macmillan.
- Lupia, A., and M. McCubbins (1998). *The Democratic Dilemma: Can Citizens Learn What They Need to Know?* Cambridge University Press.
- Musgrave, R. (1959). *The Theory of Public Finance*. McGraw-Hill.
- Michels, R. (1911). *Political Parties: A Sociological Study of the Oligarchical Tendencies of Modern Democracy*.
- Mises, L. von (1920). "Economic Calculation in the Socialist Commonwealth." Translated in F. Hayek, ed., *Collectivist Economic Planning* (1935).
- Noelle-Neumann, E. (1974). "The Spiral of Silence: A Theory of Public Opinion." *Journal of Communication* 24(2).
- Nozick, R. (1974). *Anarchy, State, and Utopia*. Basic Books.
- Oates, W. (1972). *Fiscal Federalism*. Harcourt Brace Jovanovich.
- Offermann, M. (2026b). "Stress-Testing a Distributed Public-Resource Governance Architecture: Adversarial and Behavioral Agent-Based Evidence." Companion computational-experiments paper and repository, concept doi:10.5281/zenodo.21246088 (always resolves to the latest version).
- Okun, A. (1975). *Equality and Efficiency: The Big Tradeoff*. Brookings Institution.
- Olken, B. (2007). "Monitoring Corruption: Evidence from a Field Experiment in Indonesia." *Journal of Political Economy* 115(2).
- North, D., and B. Weingast (1989). "Constitutions and Commitment: The Evolution of Institutions Governing Public Choice in Seventeenth-Century England." *Journal of Economic History* 49(4).
- Olson, M. (1965). *The Logic of Collective Action*. Harvard University Press.
- Olson, M. (1982). *The Rise and Decline of Nations*. Yale University Press.
- Ostrom, E. (1990). *Governing the Commons: The Evolution of Institutions for Collective Action*. Cambridge University Press.
- Peixoto, T., and J. Fox (2016). "When Does ICT-Enabled Citizen Voice Lead to Government Responsiveness?" *IDS Bulletin* 47(1).
- Power, M. (1997). *The Audit Society: Rituals of Verification*. Oxford University Press.
- Reinikka, R., and J. Svensson (2004). "Local Capture: Evidence from a Central Government Transfer Program in Uganda." *Quarterly Journal of Economics* 119(2).
- Rosanvallon, P. (2008). *Counter-Democracy: Politics in an Age of Distrust*. Cambridge University Press.
- Salganik, M., P. Dodds, and D. Watts (2006). "Experimental Study of Inequality and Unpredictability in an Artificial Cultural Market." *Science* 311(5762).
- Samuelson, P. (1954). "The Pure Theory of Public Expenditure." *Review of Economics and Statistics* 36(4).
- Samuelson, W., and R. Zeckhauser (1988). "Status Quo Bias in Decision Making." *Journal of Risk and Uncertainty* 1(1).
- Satterthwaite, M. (1975). "Strategy-Proofness and Arrow's Conditions: Existence and Correspondence Theorems for Voting Procedures and Social Welfare Functions." *Journal of Economic Theory* 10(2).
- Schattschneider, E. E. (1960). *The Semisovereign People*. Holt, Rinehart and Winston.
- Scott, J. (1998). *Seeing Like a State: How Certain Schemes to Improve the Human Condition Have Failed*. Yale University Press.
- Sen, A. (1999). *Development as Freedom*. Oxford University Press.
- Sowell, T. (1980). *Knowledge and Decisions*. Basic Books.
- Skuhrovec, J., et al. (2013). "Exponential and power laws in public procurement markets." arXiv:1309.0218.
- Stigler, G. (1971). "The Theory of Economic Regulation." *Bell Journal of Economics and Management Science* 2(1).
- Stokes, S. (2005). "Perverse Accountability: A Formal Model of Machine Politics with Evidence from Argentina." *American Political Science Review* 99(3).
- Thompson, D. (1980). "Moral Responsibility of Public Officials: The Problem of Many Hands." *American Political Science Review* 74(4).
- Tiebout, C. (1956). "A Pure Theory of Local Expenditures." *Journal of Political Economy* 64(5).
- Urbinati, N. (2014). *Democracy Disfigured: Opinion, Truth, and the People*. Harvard University Press.
- Vickrey, W. (1961). "Counterspeculation, Auctions, and Competitive Sealed Tenders." *Journal of Finance* 16(1).
- Wampler, B. (2007). *Participatory Budgeting in Brazil: Contestation, Cooperation, and Accountability*. Penn State University Press.
- Williamson, O. (1985). *The Economic Institutions of Capitalism*. Free Press.
- Wilson, J. Q. (1973). *Political Organizations*. Basic Books.
- Wittman, D. (1989). "Why Democracies Produce Efficient Results." *Journal of Political Economy* 97(6).

---

*Companion materials: formal proofs ([formal-models](../research/formal-models.md)),
simulation code and full result tables
(`scripts/simulation/allocation-sim.mjs`,
[simulation-results](../research/simulation-results.md)), the audit-institution evidence base
([audit-evidence-base](../research/audit-evidence-base.md)), the architecture corpus (`docs/`,
`knowledge/`), and the complete adversarial record (`attacks/`,
`defenses/`, accepted resolutions `docs/67`–`docs/113`; all forty-three
attacks resolved and propagated, except the manuscript-review round's
D037–D040, whose corpus propagation is tracked).*
