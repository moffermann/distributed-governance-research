Reading additional input from stdin...
OpenAI Codex v0.144.1
--------
workdir: C:\devel\claude-projects\distributed-governance-research
model: gpt-5.6-sol
provider: openai
approval: never
sandbox: danger-full-access
reasoning effort: xhigh
reasoning summaries: none
session id: 019f5d7d-7967-7331-ab91-816ddc040eb6
--------
user
You are convening a FRIENDLY EXPERT WRITING PANEL to make a manuscript PUBLICATION-READY as prose. You are on the
paper's side: your job is clarity, structure, high-quality and impactful phrasing, and catching every consistency error
and missing/contradictory item — NOT to weaken honest results or re-argue the science. The experiments were just
integrated (E5 rewrite + new E9/E10 findings) after an adversarial code review; the numbers are settled. Do NOT propose
changing results or honest caveats; propose better WRITING and flag anything inconsistent or missing.

USE SUBAGENTS: fan out into the FOUR roles below IN PARALLEL, then synthesize.

READ (repo root C:\devel\claude-projects\distributed-governance-research):
- drafts/paper.md  (AUTHORITATIVE English manuscript — read the whole thing, focus §6 Findings 5/9/10 and how they
  cohere with the abstract, §1 intro, §5 formal analysis, §8 limitations, and the "What survives" summary)
- drafts/paper.es.md  (Spanish MIRROR — must stay faithful to the EN)
- audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md, E9-FULLSTACK-DESIGN.md, E10-COSTS-DESIGN.md (the settled findings)
Do NOT use rg with brace-globs.

CONTEXT (the settled, honest results — preserve them, improve only the prose): E5 = delivered value, selection ×
delivery, multiplicative accounting identity, full architecture ≈ +58.6 points of a greedy reference [+58.0,+59.2]
conditional-MC, verified diversion low-but-nonzero, monitoring split (detection small / recovery institutional). E9 =
the full stack; Shapley attribution CONDITIONAL (standalone selection/delivery come from E5); LARGE IN PROBABLE, not
"robust" — layers reverse sign in extreme worlds but the full Core v0 diagonal holds in every world; PLANNING is NOT
quantified (agenda capture / second face of power is the mechanism, direction anchored, magnitude deferred; Chile
mental-health as a qualitative illustration). E10 = admin cost, net-budget + symmetric, roughly NEUTRAL — the advantage
is delivery, not overhead. Reporting embargo: percentages of the reference, parity at zero, NO institution-performance
multiplier (x/D-C/N-fold); structural notation (2×2, ×) in math contexts is fine.

THE FOUR ROLES (each returns concrete, prioritized output — before→after prose where possible):
1. CLASSICAL-LIBERAL INTELLECTUAL (Hayek/Friedman/Buchanan lineage): sharpen the thesis and the framing of the new
   findings in the classical-liberal tradition. Give 6–10 IMPACTFUL, drop-in sentences (verbatim) for the E5/E9/E10
   findings and their tie-in to the credit-versus-coverage spine. Make the "delivered value, not overhead" and "the
   architecture separates the hand that chooses, spends, and certifies" ideas land hard — without over-claiming.
2. SCIENCE COMMUNICATOR / EDITOR: clarity, flow, and readability of Findings 5/9/10. Identify the densest/most
   jargon-heavy passages and rewrite the worst offenders (verbatim before→after). Sharpen topic sentences; make the
   Shapley/attribution and net-budget-cost ideas legible to a non-specialist; cut redundancy; ensure each finding opens
   with its point. Propose 3–5 quotable lines.
3. CONSISTENCY / COMPLETENESS AUDITOR: this is the most important role. Cross-check EVERY number, claim, and cross-
   reference across the manuscript: do the abstract, §1, §5, §6 findings, §8 limitations, and the "What survives"
   summary now agree with the re-modeled E5/E9/E10 (e.g., does the abstract still describe the old compound? does §8
   mention the new layers? are Findings numbered/referenced consistently, E1–E10?). Flag every contradiction, stale
   number, dangling reference, and MISSING item (e.g., E9/E10 absent from the abstract or limitations). Check EN↔ES
   parity for the new content (same claims, same numbers, same structure). Produce a precise checklist of fixes with
   file:line.
4. HONEST-CAVEAT / REFEREE-ANTICIPATION EDITOR: ensure the honest limits are stated crisply and survive a hostile
   read — the conditional-MC intervals, "large in PROBABLE not robust", planning unquantified, cost roughly neutral,
   greedy reference not an optimum, declared calibration. Make sure no sentence over-claims and that the honest framing
   reads as strength, not apology. Propose the crisp limitation sentences to add to §8 for E9/E10.

OUTPUT: per role a prioritized list (idea / before→after / impactful line / consistency-fix with file:line). Then a
SYNTHESIS: (i) the top 12–15 highest-impact edits ranked [framing]/[clarity]/[consistency]/[completeness], with verbatim
wording; (ii) a CONSISTENCY & COMPLETENESS checklist (every contradiction/stale number/missing item, EN and ES); (iii) a
publication-readiness verdict — is the manuscript prose publication-ready, or what must change. Do NOT edit files —
propose; the author's pro-Core-v0 editor will apply the justified improvements.
codex
I’m convening the four-role panel now: three reviewers will run in parallel while I handle the consistency/completeness audit—the most cross-document-intensive role. I’ll read the full English and Spanish manuscripts plus all three settled design records, then reconcile the panel’s recommendations without editing files.
  → Read routing instructions and all authoritative manuscript/design files
  • Run four expert roles in parallel
  • Cross-check EN/ES claims, numbers, numbering, and references
  • Synthesize prioritized verbatim edits and readiness verdict
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$files = @('"'AGENTS.md','agents/routing-rules-codex-md.md','agents/review-all.md','drafts/paper.md','drafts/paper.es.md','audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md','audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md','audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md'); foreach ("'$f in $files) { if (Test-Path -LiteralPath $f) { $n = (Get-Content -LiteralPath $f).Count; "$f`t$n lines" } else { "$f`tMISSING" } }' in C:\devel\claude-projects\distributed-governance-research
 succeeded in 175ms:
AGENTS.md	MISSING
agents/routing-rules-codex-md.md	MISSING
agents/review-all.md	MISSING
drafts/paper.md	1789 lines
drafts/paper.es.md	1889 lines
audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md	184 lines
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md	288 lines
audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md	50 lines

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$files = @('"'drafts/paper.md','drafts/paper.es.md','audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md','audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md','audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md'); foreach ("'$f in $files) { $raw = Get-Content -LiteralPath $f -Raw; $words = ($raw -split '"'\\s+' | Where-Object { "'$_ }).Count; "$f`t$($raw.Length) chars`t$words words" }' in C:\devel\claude-projects\distributed-governance-research
 succeeded in 358ms:
drafts/paper.md	129338 chars	18293 words
drafts/paper.es.md	143475 chars	21683 words
audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md	15173 chars	2173 words
audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md	23769 chars	3307 words
audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md	3628 chars	542 words

codex
The routing files named in the supplied AGENTS instructions are not present in this checkout, so there is no additional local rule text to inspect. I’m proceeding from the rules embedded in your request; since this is a read-only prose review, no artifact-creation or commit routing is triggered.
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Get-Content -LiteralPath 'drafts/paper.md' -Raw" in C:\devel\claude-projects\distributed-governance-research
 succeeded in 167ms:
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
(E1–E10) corresponds to a finding:

| Exp | What it tests | |
|---|---|---|
| E1 | do funding caps raise quality? | Finding 1 |
| E2 | what carries allocation quality? | Finding 2 |
| E3 | what buffers participation decay? | Finding 3 |
| E4 | distributed aggregation vs. central construction (refined by a symmetric-frictions frontier + capture, E4-v4/v5; and a v1.14 harm-myopia four-scenario robustness map, §6) | Finding 4 |
| E5 | delivered value: selection × delivery, at matched budget | Finding 5 |
| E6 | reputational competition and execution standard | Finding 6 |
| E7 | comparison against an audit-parameterized baseline | Finding 7 |
| E8 | robustness under endogenous behavioral participation | close of §6 |
| E9 | the full stack: planning × selection × delivery (Shapley attribution) | Finding 9 |
| E10 | the administrative-cost layer (net-budget, symmetric) | Finding 10 |

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
concentrated delegation), which brings ~+54% to ~+26% at a strong correlation. This is
the mechanism's one architectural condition, not merely a swept parameter: **coverage
without source diversity can reproduce the epistemic bottleneck it is meant to replace.**
Core v0 therefore treats delegate, profile-provider, and recommender concentration as
observable quantities with diversification thresholds (§8), rather than assuming
independence by fiat. The
pre-registered symmetry gate remains the paper's separate **confirmatory** computation (a
NO-GO near-parity under a different data-generating process); this map is a subsequent
scenario analysis, not a reclassification of it. The full four-scenario map, the
literature anchoring, the mirror idealized corners, and the common-mode frontier are in
**Appendix E4**. The model locates a frontier; it does not estimate a field effect.

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
earns its keep — and selection and delivery compose multiplicatively.** A
fifth experiment (`scripts/simulation/e4-v5/e5-delivery.mjs`, rebuilt on
the clean E4 engine) adds the execution stage the first four omitted, as
an **independent** delivery regime crossed with the two selection regimes —
a four-cell design so each layer reads separately and jointly on the *same*
funded portfolios. Executors have hidden types: an intrinsically honest
share deliver; the rest divert whenever a temptation draw beats the
regime's deterrent `p·[(1−a(1−r)) + γ + R]` (detection *p*, advance
exposure *a*, recovery *r*, guarantee *γ*, reputational stake *R*) —
Okun's (1975) leaky bucket. The **opaque** status-quo regime's emergent
value loss is moment-matched to Olken's (2007) ~24% missing-expenditure
figure (not identified as welfare); IMF's (2015) ~30% public-investment
inefficiency is a broader process loss, and Reinikka and Svensson's (2004)
~87% Ugandan capture is a tail, not the central case. The **verified**
regime is the architecture: a milestone-gated advance plus a performance
guarantee, retention, recovery, and a reputational stake — magnitudes
declared, directions from Propositions 1–4.

Every cell is a percentage of the same full-information greedy reference at
perfect delivery (a heuristic normalizer, not an optimum), so no compound
multiplier is reported. Selection efficiency reproduces E4 (distributed
≈ 98%, central ≈ 44% of the reference); delivery efficiency is ≈ 78% opaque
versus ≈ 95% verified. Read as two main effects at the declared world, the
delivery layer adds ≈ 8 points under central selection and ≈ 17 under
distributed; the selection layer adds ≈ 42 points under opaque delivery and
≈ 51 under verified. The interaction is positive: the two layers **compose
multiplicatively** — an accounting identity (delivered value = selected
value × delivered fraction, applied per project), of which the positive
interaction is the level-effect signature, not an independent discovery.
The full architecture beats the status quo by ≈ +58.6 points of the
reference (95% conditional Monte-Carlo interval [+58.0, +59.2], reflecting
inner simulation variability only — world, model-form, and calibration
uncertainty are not included). An earlier version summarized this as a
single compound value-per-budget multiplier; that compound is **retired**,
and E5 reports the layers as separate percentages.

Two refinements survive scrutiny. First, Core v0's distributed coverage is
not only a selection signal: the citizens who routed the budget also
observe delivery. But community coverage credibly lifts *detection*, not
*recovery* (clawback needs institutional follow-up), so the coverage-only
delivery dividend is small (a fraction of a point in the weak-control
regime; Björkman and Svensson 2009, with failed replications; Molina et al.
2016); the sizeable delivery gain comes from the **formal** recovery
channel — the verified regime — not eyeballs alone. Second, the verified
regime's diversion is **low but nonzero** (≈ 2% incidence, ≈ 7% without the
reputational stake): a grand-corruption temptation tail keeps a residual
that strong control does not eliminate, matching Olken's finding that audits
cut leakage without erasing it (2007; Avis, Ferraz, and Finan 2018; Becker
1968) — ex-ante deterrence, not an empirical zero. The result is robust to
value/complexity-correlated delivery risk (the distributed arm funds
higher-*value*, not higher-*cost*, projects) and stable across seeds; a
joint delivery-parameter sweep, conditional on the declared world, keeps
coverage ahead across the sampled space. Delivered value here is measured
at *equal budget*; the administrative *cost* of running each institution is
a separate layer (Finding 10).

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

**Finding 9: the full stack — planning, selection, and delivery — and an
honest accounting of what each layer contributes.** A ninth experiment
(`scripts/simulation/e4-v5/e9-fullstack.mjs`, built on E5) adds the third
architectural layer, **planning** (constructing the eligibility frame and
per-sector budget shares), so all three layers are compared central versus
distributed across a 2×2×2 of persistent sectors (ten, the COFOG count). A
Shapley attribution decomposes the all-distributed-versus-status-quo gap
into layer contributions that sum exactly to it. Two honest qualifications
govern the reading. First, the attribution is *conditional*: every layer
value is computed through the declared planning sector generator, so the
standalone, quantified **selection** and **delivery** figures are the E5
ones (no planning layer); E9 contributes the three-layer *structure* and
the attribution *method*. Second, the layer contributions are *large in the
declared world, not uniformly robust*: the full Core v0 advantage stays
positive in every named world (a modest central-favourable world through a
strongly distributed-favourable one), but the individual selection and
delivery contributions reverse sign in the extreme corners (selection where
central selection is near-random, delivery where a harmful portfolio is
delivered more faithfully) — a fact the paper reports rather than hides.
The **planning** layer's value operates chiefly through **agenda capture**
— the central keeping whole high-need, low-visibility functions off the
menu (the second face of power; Bachrach and Baratz 1962; Schattschneider
1960). That mechanism is real and its *direction* is anchored (the COFOG
taxonomy; the pre-election shift toward visible spending, Drazen and Eslava
2010; the systematic neglect of maintenance and prevention, Rioja 2003),
but its *magnitude* cannot be identified without country-specific budget
data. We therefore **do not report a planning-layer figure**: quantifying
it with the mechanism switched off would understate it, and switched on it
is not yet anchorable. A country-grounded illustration — Chile's
mental-health budget held near 2% against an OECD average of 6.7%, despite
mental disorders being the country's leading cause of disability — shows the
visibility bias has a real footprint, and is offered qualitatively, not as
a calibration.

**Finding 10: administrative cost is roughly neutral once accounted
symmetrically — the advantage is delivered value, not overhead.** A tenth
layer (`scripts/simulation/e4-v5/e10-costs.mjs`) adds the administrative and
machinery cost each institution runs and Core v0 largely replaces — the
value-proxy studies, allocation and prioritization apparatus, and licensing
the central carries, against Core v0's own platform and control machinery.
Modelled honestly — the cost reduces each arm's *budget* before selection
(so the value loss is sub-proportional, because greedy funding cuts the
marginal projects first), charged symmetrically (Core v0's verification and
recovery machinery is costed, not free), and de-overlapped from the delivery
leakage E5 already removes — the administrative layer is **roughly neutral**
(within a point of zero either way at declared cost shares). The Core v0
advantage comes from **selection and delivery**, not from an
administrative-cost saving; a decisive cost advantage would require the
central's overhead to exceed the platform's by more than symmetric
accounting supports. The cost shares are declared, with directions anchored
(IDB 2018; the low operating cost of e-government platforms — KONEPS,
ChileCompra, ProZorro).

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

**Coverage assumes source diversity it must then guarantee.** The distributed
arm's advantage rests on many partly-independent signals; when profile
providers, delegates, and recommenders concentrate onto a shared platform or a
few super-delegates (Kling et al. 2015), their errors correlate and the
common-mode channel — the single sensitivity that materially shrinks the
anchored gap (§6, Appendix E4) — recaptures the very epistemic bottleneck
coverage is meant to replace. Independence is therefore not a modeling
convenience but an architectural obligation: Core v0 must publish delegate,
profile-provider, and recommender concentration as observable quantities and
trigger diversification thresholds when they climb. The residual risk is that a
market converges on one recommender faster than the thresholds bite.

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
central endpoint crosses parity only at **t ≈ 0.92 of the declared segment**. This is
local, ceteris-paribus curve evidence — six one-factor slices plus one declared combined
path — not an exhaustive global frontier; a joint Sobol / Latin-hypercube sweep of the
full parameter space is deferred to future work. These magnitudes
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


exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Select-String -LiteralPath 'drafts/paper.md' -Pattern '"'^#{1,4} '"' | ForEach-Object { '{0}: {1}' -f "'$_.LineNumber, $_.Line }; Select-String -LiteralPath '"'drafts/paper.es.md' -Pattern '"'^#{1,4} '"' | ForEach-Object { '{0}: {1}' -f "'$_.LineNumber, $_.Line }' in C:\devel\claude-projects\distributed-governance-research
 succeeded in 173ms:
1: # Who Chooses, Who Delivers, Who Judges? A Functional Architecture for Distributed Public Spending
7: ## Abstract
17: ## 1. Introduction
151: ## 2. The functional distribution principle
192: ## 3. Related work
322: ## 4. The Core v0 architecture
401: ## 5. Formal analysis
413: ### 5.1 Milestone-gated disbursement
468: ### 5.2 Collusion-proof fiscalization
500: ### 5.3 Attention-constrained allocation
512: ## 6. Computational evidence
1130: ## 7. Adversarial review as method
1197: ## 8. Limitations
1359: ## 9. Implementation pathway
1441: ## 10. Conclusion
1521: ## Appendix E4: the symmetric gate and the four-scenario robustness map
1528: ### The symmetric credit-versus-coverage gate (full methods)
1581: ### The four-scenario robustness map (v1.14)
1661: ### E4 calibration targets
1687: ## References
1: # ¿Quién elige, quién ejecuta, quién juzga? Una arquitectura funcional para el gasto público distribuido
9: ## Resumen
19: ## 1. Introducción
163: ## 2. El principio de distribución funcional
210: ## 3. Trabajo relacionado
348: ## 4. La arquitectura Core v0
439: ## 5. Análisis formal
452: ### 5.1 Desembolso supeditado a hitos
510: ### 5.2 Fiscalización a prueba de colusión
547: ### 5.3 Asignación bajo restricción de atención
559: ## 6. Evidencia computacional
1214: ## 7. La revisión adversarial como método
1281: ## 8. Limitaciones
1446: ## 9. Ruta de implementación
1529: ## 10. Conclusión
1611: ## Apéndice E4: el gate simétrico y el mapa de robustez de cuatro escenarios
1618: ### El gate simétrico de crédito-versus-cobertura (métodos completos)
1677: ### El mapa de robustez de cuatro escenarios (v1.14)
1760: ### Objetivos de calibración de E4
1787: ## Referencias

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$lines = Get-Content -LiteralPath '"'drafts/paper.md'; for ("'$i=0; $i -lt 400; $i++) { '"'{0,4}: {1}' -f ("'$i+1), $lines[$i] }' in C:\devel\claude-projects\distributed-governance-research
 succeeded in 186ms:
   1: # Who Chooses, Who Delivers, Who Judges? A Functional Architecture for Distributed Public Spending
   2: 
   3: **Working paper — v1.14 (July 2026; latest deposited version: v1.12, DOI 10.5281/zenodo.21252911). This version retires the earlier compound value-per-budget multiplier as a calibrated effect — a pre-registered symmetric selection-only stress test returned NO-GO (see §6 and the claim & estimand contract) — and rests on the architecture and the qualitative mechanism, now sharpened by a four-scenario robustness map (E4 v1.14): modelling the central as the evidence *directionally* describes it — near-blind to diffuse harm on the low-visibility long tail (Hayek, Scott, Olson, Bandiera–Prat–Valletti) — coverage-routed selection recovers decisively more of the model's full-information reference (~98% vs ~44%) and robustly; the pre-registered gate remains the separate confirmatory result (a NO-GO under a different data-generating process), the central overtakes coverage only by abandoning the declared premises, and the mirror idealization of the distributed arm wins by a landslide; all such magnitudes are declared reference points from a stylized comparative-institutions model, a conditional model contrast, not calibrated impact. Revised through successive adversarial and author review cycles, documented in the repository's roadmap. It consolidates the companion computational program (Offermann 2026b): the deterrence-complementarity rule, the semi-open transition path, the budget-release rule, and machine verification with the human second instance; and the companion's two-layer separation of the macro categorization from the allocation profiles, under which the distributed arm is robust to a bad central categorization while the central arm is fragile to it.**
   4: 
   5: *© 2026 Mauricio Offermann. Licensed CC BY 4.0 — see LICENSE.md at the repository root. Please cite as indicated in CITATION.cff. DOI (concept, always resolves to the latest version): 10.5281/zenodo.21193846.*
   6: 
   7: ## Abstract
   8: 
   9: Public spending routinely asks one hierarchy to choose projects, execute them, and certify its own performance — the fusion where waste, capture, and unaccountable failure concentrate. This paper asks whether a bounded, legally authorized share of that machinery can separate those functions — the hand that chooses, the hand that spends, and the hand that certifies — and the information that drives them, while preserving legal authorization and public auditability.
  10: 
  11: We present **Core v0**, a fully specified, object-level architecture. Within legally authorized planning scopes, citizens direct a non-withdrawable share of an existing public budget to projects that must declare value claims, affected parties, milestones, and evidence contracts up front. Proposing, execution, evidence production, fiscalization, and custody are separated; funds move in tranches against reviewed milestone evidence, with retention and guarantees; executors neither choose nor pay their inspectors; and every consequential state transition is public.
  12: 
  13: Its animating idea is a **credit-versus-coverage** mechanism: when central ranking rewards claimable political credit, it can systematically underweight the diffuse, low-visibility benefits that a coverage-based distributed process still surfaces, albeit under voice bias. We held this idea to a deliberately hostile test — a pre-registered, symmetric simulation that stripped out the favorable asymmetries an earlier version had relied on, plus a public adversarial review of 43 attacks across five rounds, each integrated into the design or recorded as a bounded limitation. The distributed advantage was positive in all 18 pre-specified cells but small (pooled median Δ = 0.025 of a full-information greedy benchmark, below our pre-set 0.05 threshold); we therefore retire the large multiplier an earlier version reported and state the modest, conditional result plainly. A four-scenario robustness extension then models the central selector as the evidence describes it — its *direction* on every axis grounded in the literature (not its magnitude fitted): near-blind to diffuse harm on the low-visibility long tail (Hayek 1945; Scott 1998; Olson 1965; Bandiera–Prat–Valletti 2009), projecting its own priors and over-rating visible benefits (Broockman–Skovron 2018; Flyvbjerg et al. 2003), and credit-tilted (Mayhew 1974; Arnold 1990). In that **source-motivated declared reference scenario** — not an empirical calibration — coverage-routed distributed selection recovers about 98% of the model's full-information greedy reference against the central's ~44%: a 54-point conditional model contrast, robust across the declared space and the realistic degradation of Core v0's universal budget *routing* (routing is architectural; effective independent information is not). The central overtakes coverage only by abandoning the declared premises (granting it the harm-sight the literature denies it) on a near-harmless world, while the *mirror* idealization of the distributed arm wins by a landslide. These are declared reference points from a stylized comparative-institutions model, not calibrated field effects; the pre-registered gate remains the separate confirmatory result (a NO-GO under a different data-generating process), and the one sensitivity that materially shrinks the gap — never its sign in the declared range — is correlated/common-mode error in the coverage arm. Elementary propositions give sufficient conditions for incentive-compatible disbursement and collusion-proof fiscalization under independence and corroboration assumptions.
  14: 
  15: This is an architecture-and-mechanism contribution, not an impact evaluation: no pilot has run; the simulation's units are uncalibrated and partial-equilibrium and do not identify delivery effects; and claims are scoped to infrastructure-like public investment. What it offers is a concrete, criticizable, pilotable institutional design — and a disciplined account of exactly what its evidence does and does not yet support.
  16: 
  17: ## 1. Introduction
  18: 
  19: Modern states concentrate three things that need not sit together: the
  20: authority to decide what public money is spent on, the capacity to execute
  21: that spending, and the power to certify that it achieved anything. When all
  22: three live inside one hierarchy, accountability comes down to it auditing
  23: itself (Bovens 2007). The consequences are predictable and documented across
  24: political economy — discretionary allocation, self-reported compliance,
  25: capture by concentrated interests, and citizen distrust — from regulatory
  26: capture (Stigler 1971; Laffont and Tirole 1991) to audit turned ritual (Power
  27: 1997) to the distributional coalitions that entrench themselves in stable
  28: political systems (Olson 1982).
  29: 
  30: These failures are not abstract: they are why the value never reaches the
  31: people it was raised for. For the public money that funds concrete projects —
  32: infrastructure, works, local programs — what ultimately matters is not how much
  33: is appropriated but how much effective value reaches people per unit spent: a
  34: project that is never built, or built badly, helps no one, however
  35: well-intentioned the allocation (Okun's (1975) leaky bucket carried water that
  36: never arrived). This is a bounded criterion for project-type public investment,
  37: not a theory of the whole budget or of why states tax: redistribution and equity
  38: are distinct purposes of public finance that this paper does not evaluate (§8).
  39: 
  40: The standard debate responds with quantity: shrink the state or grow it. Both
  41: positions treat it as a single object. This paper argues the tractable
  42: question is architectural, not one of size: *which layers of state activity
  43: still require central monopoly, and which can now be distributed — with better
  44: accountability than the status quo — now that digital coordination has
  45: collapsed the transaction costs that once justified hierarchy?* (Coase 1937;
  46: Hayek 1945; Williamson 1985). It is a question with a lineage — where
  47: decisions should sit when knowledge is dispersed — from the economic
  48: calculation debate (Mises 1920) to Hayek's dispersed knowledge and its
  49: institutional treatment in Sowell (1980): decisions should live where the
  50: knowledge is, disciplined by feedback rather than top-down command. Rights
  51: guarantees, legitimate force, macro-fiscal stability, and enforceable
  52: adjudication plausibly remain central; information processing, project-level
  53: resource allocation, service execution, evidence production, and auditing
  54: plausibly do not.
  55: 
  56: We make the argument as a concrete design, not a manifesto. Core v0 is a
  57: complete reference architecture for distributing one bounded layer — the
  58: allocation, execution, and verification of a legally mandated share of an
  59: existing public budget — developed to the level of named objects, state
  60: machines, and decision rules (a corpus of more than one hundred architecture
  61: documents, fifty-nine designed hypotheses, and forty-three adversarial reviews, all
  62: public). Citizens receive periodic, non-withdrawable allocation capacity in a
  63: civic wallet; projects pass through a parallel-closure lifecycle in which
  64: funding, independent fiscalization, evidence commitments, and beneficiary
  65: confirmation must all close before execution; the executor never selects or
  66: pays its own auditors — which removes the agency cost of self-monitored
  67: compliance (Jensen and Meckling 1976); money moves only on reviewed
  68: milestones, with retention and externally materialized guarantees; and every
  69: consequential state transition is recorded in a citizen-legible,
  70: expert-auditable trail.
  71: 
  72: The *executor* —whoever carries out the project, be it a public work, a
  73: personal-care service, or an educational program— can be a public agency, a
  74: municipality, a foundation, a cooperative, or a firm, as the implementing
  75: authority's rules define, under one condition: non-monopolistic, honest
  76: competition, with bankruptcies and consequences for whoever fails to deliver.
  77: And the share each citizen directs is set by a public, versioned formula the
  78: authority chooses; its simple option is *equal for all eligible citizens*,
  79: under which no one buys more influence with more money.
  80: 
  81: A concrete example. Suppose a municipality funds care programs for vulnerable
  82: elderly people. Today, between the peso allocated and the help that actually
  83: arrives lies a gap where value is lost. Under this architecture, each resident
  84: can direct part of their taxes to the program they prefer; the foundation,
  85: cooperative, or service that carries it out is paid in tranches, and only once
  86: a verifier it did not choose confirms the help arrived; and every step is
  87: public and auditable.
  88: 
  89: What makes a design exercise count as research is the rigor it is put through,
  90: under one transversal discipline: we evaluate every objection comparatively —
  91: feasible Core v0 against the institution that presently performs the same function,
  92: never against an omniscient, benevolent ideal. This blocks the nirvana fallacy in
  93: both directions (Demsetz 1969; Section 2). Our contributions are:
  94: 
  95: 1. **Distributing the allocation layer.** The core design contribution:
  96:    applying the functional-distribution principle to resource allocation —
  97:    citizens direct their share directly, delegate it, or govern it with
  98:    personal rules — instantiated as a complete reference architecture (Core
  99:    v0).
 100: 
 101: 2. **Formalization of the incentive mechanisms** (Section 5). We model
 102:    milestone-gated disbursement as a principal-agent game and derive its
 103:    incentive-compatibility condition; we model bribery of protocol-assigned
 104:    fiscalizers and derive a collusion-proofness condition under
 105:    k-corroboration; and we prove two design-relevant comparative statics: weak
 106:    verification must be compensated with financial terms, and guarantees are
 107:    counterproductive when detection quality falls below the cost of capital.
 108:    Milestones, retention, guarantees, and reputational memory form the
 109:    design's deterrence stack.
 110: 
 111: 3. **Computational evidence** (Section 6). A dependency-free, seeded
 112:    agent-based simulation of 10,000 citizens tests the architecture's
 113:    behavioral assumptions under rational ignorance, limited discovery
 114:    attention, and social-proof cascades. The results discipline the design:
 115:    they support some claims, sharpen others, quantify the leverage
 116:    concentrated in the scope-construction layer, measure a viable open
 117:    construction of it, and carry the comparison end to end: from allocation to
 118:    delivered social value per unit of budget — one relevant criterion for this
 119:    bounded slice of public spending (alongside distributional and rights
 120:    constraints the model does not represent). In the model, verified delivery and social prioritization
 121:    interact rather than merely add; the earlier agent-based apparatus produced a
 122:    compound value-per-budget ratio against a status-quo baseline parameterized from
 123:    published audit-institution findings (only near-parity at municipal pilot scale). We
 124:    **retire that compound as a calibrated effect**: a pre-registered, symmetric,
 125:    selection-only stress test shrinks the distributed-minus-central selection
 126:    advantage to a pre-registered pooled median Δ = 0.025 of a full-information
 127:    benchmark, below its pre-set 0.05 research-program rebuild gate (NO-GO). The
 128:    load-bearing contribution is the architecture and the qualitative mechanism,
 129:    whose comparative scope the v1.14 robustness map delimits across the no-myopia
 130:    and harm-myopia regimes—not the multiplier.
 131: 
 132: 4. **Adversarial review as method** (Section 7). The architecture was attacked
 133:    systematically: forty-three attack briefs grounded in the political-science,
 134:    economics, and law literatures, each answered by a paired defense and
 135:    resolved under an explicit integrate-or-bound rule, with resolutions
 136:    propagated through the corpus (all except the manuscript-review round's
 137:    D037–D040, whose corpus propagation is tracked) and the full review
 138:    record public by construction. The loop is a structured self-critique, not external
 139:    validation, and we say so; we propose it, and its terminating rule—pending independent external validation—as a preliminary methodological proposal for institutional design research.
 140: 
 141: A companion study measures three effects that extend this architecture:
 142: ablation of the deterrence stack (its terms are individually redundant but
 143: jointly indispensable), the feasibility of AI-based fiscalization, and the
 144: effect of separating macro planning from allocation (robustness to poor
 145: central planning — an earlier-apparatus contrast, subject to the same
 146: magnitude caveat as the compound above, not a calibrated effect).
 147: 
 148: Section 8 states limitations with the same care as results, because under our
 149: method they are results: each is a named, bounded residual risk.
 150: 
 151: ## 2. The functional distribution principle
 152: 
 153: We analyze the state as a stack of functional layers rather than a single
 154: institution: (a) rights guarantees and legitimate force; (b) binding
 155: adjudication; (c) rule-making; (d) macro-fiscal management; (e) macro planning
 156: and agenda framing; (f) project prioritization and resource allocation to
 157: concrete projects; (g) execution and service delivery; (h) evidence production
 158: about delivery; and (i) evaluation and accountability. The distribution
 159: principle is:
 160: 
 161: > A layer is a candidate for distribution when three conditions hold:
 162: > its failures under monopoly are information and incentive failures rather
 163: > than coordination-of-force failures; distributed provision can be made
 164: > *more* observable than monopoly provision; and the layer can be bounded so
 165: > that its failure does not cascade into the non-distributable layers.
 166: 
 167: Layers (a), (b), and (d) fail the first or third condition and remain central
 168: in our design. Layers (f) through (i) pass all three, and Core v0 distributes them as a block, and must: distributing allocation without verification reproduces the delivery gap of participatory budgeting (PB), and distributing verification without allocation reproduces the audit society.
 169: 
 170: Layer (e), planning, is the deliberately unresolved case: Core v0 requires
 171: planning scopes to be public, versioned, and mandate-bearing, but does not
 172: distribute their construction — which is why the architecture's promise is
 173: stated with its qualifier built in: what it distributes is allocation
 174: *within mandate-bound, visible, versioned, and contestable planning
 175: scopes*, never allocation over an unframed agenda. Section 6 shows the
 176: qualifier is not a detail: it is the binding constraint of the whole
 177: design, and Section 8 elevates its removal to the research program's next
 178: object.
 179: 
 180: Two methodological rules govern everything that follows. The **comparative
 181: critique rule** (P001): every objection is evaluated against the current
 182: institutional baseline, not an ideal — a difficulty shared by both systems
 183: is a general problem of governance, not a refutation of the proposal. The
 184: **integrate-or-bound rule** (P007): once the core architecture is complete,
 185: a founded objection produces a new mechanism only if the failure mode would
 186: defeat a core claim and cannot be controlled through existing objects;
 187: otherwise it produces an explicit boundary, a visible residual risk, and a
 188: limitation statement. The first rule disciplines critics; the second
 189: disciplines the designers — a bias toward few, simple, general rules over
 190: proliferating specific machinery in the spirit of Epstein (1995).
 191: 
 192: ## 3. Related work
 193: 
 194: **Polycentric governance.** Ostrom's demonstration that common-pool
 195: resources can be governed by nested, self-organized regimes without central
 196: monopoly (Ostrom 1990) is the closest intellectual ancestor: her design
 197: principles — bounded scope, monitoring by accountable monitors, graduated
 198: sanctions, cheap conflict resolution — reappear here as software-enforced
 199: objects. The difference is scope and instrument: we target budgeted state
 200: functions rather than natural-resource commons, and encode the regime in a
 201: platform whose rule changes are themselves versioned, auditable objects.
 202: 
 203: **Participatory budgeting.** Porto Alegre-style PB delegates a share of a
 204: municipal budget to citizen assemblies (Wampler 2007; Baiocchi and Ganuza
 205: 2017). Empirically, PB improves some fiscal outcomes but suffers from
 206: engagement decay, capture by organized minorities, and weak links between
 207: allocation and verified delivery (Peixoto and Fox 2016). Core v0 differs on
 208: exactly those margins: allocation is continuous and individual rather than
 209: assembly-based; delivery is bound to allocation through evidential contracts
 210: and conditional disbursement; and the architecture treats low participation
 211: as a design input (Section 6) rather than a failure to be exhorted away —
 212: collective action does not sustain itself at scale (Olson 1965).
 213: The civic wallet itself generalizes the voucher mechanism (Friedman 1962) —
 214: citizen-directed public money — from choosing among service providers to
 215: allocating among verifiable projects, adding the verification lifecycle
 216: that vouchers never carried.
 217: 
 218: **Fiscal federalism and epistemic democracy.** The formal ancestors of the
 219: functional distribution principle are the decentralization literature —
 220: Oates's (1972) theorem on when decentralized provision dominates, Tiebout
 221: (1956) on preference revelation through jurisdiction choice, and Besley
 222: and Coate (2003) on centralized versus decentralized provision under
 223: political economy — with one deliberate difference: our layers are
 224: functional rather than territorial, so what is distributed is a stage of
 225: the spending process (allocation, execution, verification) rather than a
 226: level of government. On the epistemic side, the aggregation results of
 227: Section 6 belong to the lineage of Condorcet's (1785) jury theorem and its
 228: modern failure conditions (Austen-Smith and Banks 1996) — a debt we make
 229: explicit, because the theorem's failure regime (correlated, strategic, or
 230: biased signals) is exactly what the seventh experiment stress-tests — and
 231: the design conversation with Landemore's (2020) open democracy and Fung
 232: and Wright's (2003) empowered participatory governance is direct: those
 233: programs distribute deliberation and empowerment; this one distributes
 234: allocation, execution, and verification with a mechanism-design and
 235: audit-trail core they do not attempt.
 236: 
 237: **Liquid democracy.** Transitive or scoped delegation promises flexibility
 238: between direct and representative participation, at the cost of concentration
 239: (Blum and Zuber 2016; Kahng, Mackenzie and Procaccia 2018). Core v0 adopts
 240: scoped, revocable, non-compensated delegation with mandatory concentration
 241: visibility, and — following Michels' (1911) warning rather than dismissing
 242: it — treats delegate concentration as a monitored risk with stress
 243: thresholds, not a solved problem.
 244: 
 245: **Digital and blockchain governance.** The DAO literature demonstrated both
 246: the feasibility of rule-encoded collective resource allocation and its
 247: characteristic failure: plutocratic token voting and governance capture (De
 248: Filippi and Wright 2018). Core v0 is deliberately not a blockchain design —
 249: identity is verified rather than pseudonymous, and the sovereign state
 250: remains the source of funds and law — but it imports the lesson that
 251: meta-governance is the highest-leverage attack surface (Section 8).
 252: 
 253: **Mechanism design and audit.** Our formal models are elementary
 254: applications of moral hazard under imperfect observation (Holmström 1979)
 255: and collusion in supervision hierarchies (Laffont and Tirole 1991), with
 256: Goodhart's law (Goodhart 1975; Campbell 1976) as the standing warning
 257: against metric gaming. The closest existing mechanism design for citizen
 258: allocation of public funds is quadratic (or 'plural') funding (Buterin, Hitzig
 259: and Weyl 2019), which prices concentration through matching-fund curvature;
 260: Core v0's funding-target closure rule pursues the same anti-concentration
 261: goal by truncation rather than pricing, and our simulation results
 262: (Section 6, Finding 1) delimit what truncation can and cannot achieve. On
 263: the audit side, Olken's (2007) field experiment on Indonesian road projects
 264: is the canonical empirical anchor for the detection probabilities our
 265: Propositions 1–2 take as parameters — and its finding that top-down audit
 266: outperformed grassroots monitoring for procurement fraud is a caution this
 267: architecture absorbs by making professional fiscalization, not crowd
 268: observation, the release-gating layer. The Brazilian audit-lottery
 269: literature (Ferraz and Finan 2008) supplies the complementary mechanism
 270: evidence — disclosure of audit findings changes political outcomes, and
 271: audit exposure reduces subsequent corruption — and its underlying CGU data
 272: enter the seventh experiment's audit-parameterized baseline directly. The contribution here is not
 273: technical depth but specificity: the models' parameters map one-to-one
 274: onto named architectural objects, so every proposition is an implementable
 275: dial.
 276: 
 277: **What is new.** We have not run the systematic prior-art review that would
 278: establish field-level priority (our literature map is preliminary), so we claim an
 279: **integrative, object-level synthesis** rather than novelty against all adjacent
 280: work. With that qualification, we are not aware of prior work combining:
 281: 
 282: - **(i)** a functional decomposition of state activity into distributable and
 283:   non-distributable layers;
 284: 
 285: - **(ii)** a complete object-level architecture for the allocation layer;
 286: 
 287: - **(iii)** formal incentive analysis of that architecture's specific
 288:   mechanisms;
 289: 
 290: - **(iv)** behavioral simulation of its citizen-facing assumptions —including
 291:   what we believe is an early symmetric-knowledge comparison, in simulation, of
 292:   open construction of allocation priorities from aggregated citizen signals
 293:   against bandwidth-constrained central construction (a later pre-registered
 294:   symmetric test finds the distributed advantage consistent but small; see Section 6)—;
 295: 
 296: - **(v)** a documented adversarial-review method with an explicit stopping
 297:   rule.
 298: 
 299: And two further contributions concern measurement and method:
 300: 
 301: - **(vi)** an end-to-end institutional comparison, within a bounded
 302:   public-investment slice, on delivered social value per unit of budget,
 303:   decomposing selection from delivery on matched portfolios (the two layers
 304:   interact within the exploratory apparatus). Separately, a later
 305:   pre-registered symmetric gate — a **selection-only** test with delivery held
 306:   at parity — finds the *selection* advantage positive but small (Section 6);
 307:   it does not test the delivery interaction. This work also introduces the
 308:   visibility gap (officially reported minus real delivery) as a
 309:   measurable accountability deficit of the status quo;
 310: 
 311: - **(vii)** that comparison against an audit-parameterized baseline built
 312:   from the published findings of supreme audit institutions across
 313:   nine jurisdictions and the European Union (a documented-practice-informed
 314:   scenario whose primary-source verification is still being completed), under a pre-registered
 315:   headline-withdrawal condition.
 316: 
 317: Participatory-budgeting evaluations measure participation and allocation;
 318: audit studies measure leakage after the fact; we know of none that measures,
 319: within one framework, how much delivered value an allocation institution
 320: produces from the same resources.
 321: 
 322: ## 4. The Core v0 architecture
 323: 
 324: We summarize the reference architecture at the level needed for the analysis;
 325: the full object model, state machines, and citizen-interface layers are
 326: specified in the public corpus.
 327: 
 328: **Funding.** An implementing authority migrates a mandated share of an
 329: existing budget into individual civic wallets: periodic, non-withdrawable,
 330: public-purpose allocation capacity, equal per citizen by default. Every active
 331: planning scope carries an *Allocation Mandate* record naming the statute or
 332: instrument that authorized the migration, its legal rank, the organ to which
 333: allocations are imputed, and the allocation formula. The platform records that
 334: external authorization; it does not manufacture it. Binding-mode operation is
 335: gated on an enabling norm of sufficient rank being recorded; otherwise, the
 336: disclosed lawful default is consultative or tutored operation. The allocation act is designed to replicate two guarantees of the vote: secrecy of the preference and coercion-resistance (receipt-freeness). To the extent an enabling norm recognizes it, it can be shielded with protections equivalent to the vote's; until then, these are technical platform guarantees, not a legal status. Individual allocations are pseudonymous at the public layer
 337: and reconcile cryptographically against public per-scope totals — every peso
 338: traceable as money, no citizen traceable as an allocator, and no receipt or
 339: exportable proof of any individual allocation exists, even voluntarily, so
 340: that a patron who demands proof can never get one (the secret ballot's own
 341: defense, applied to the wallet). A *Fiscal Commitment Profile* per scope makes
 342: the migrated percentage, indexation, and delivery latency public and
 343: versioned, so fiscal strangulation by the incumbent treasury is measurable and
 344: attributable rather than silent. Essential services with continuity
 345: obligations are protected by non-assignable floors outside citizen-by-citizen
 346: popularity.
 347: 
 348: **Projects and roles.** Financeable projects declare a value thesis with
 349: verifiable claims, affected parties, risks and anti-values, a phase and
 350: milestone plan, and an *evidential contract*: what must be proven, by what
 351: class of qualified producer, with what method, for which formal effect. Six
 352: roles are structurally separated — proposer, modeler/designer, executor,
 353: fiscalizer, evidence producer, custodian — with related-party relationships
 354: declared on a severity-classified graph. The load-bearing rule is that the
 355: executor never chooses or pays its own fiscalizers or evidence producers:
 356: control work is financed from a separated control budget and assigned by
 357: protocol.
 358: 
 359: **Parallel closure and conditional disbursement.** A published project
 360: gathers funding commitments, fiscalizer assignments, evidence commitments,
 361: and beneficiary confirmations concurrently; execution becomes possible only
 362: when all conditions required by its proportional *threshold policy* close.
 363: Committed funds are custodied, not transferred: release happens per
 364: milestone, against reviewed fulfillment evidence, with retention, blocker
 365: checks, and guarantees materialized by external custodians before any
 366: release. A *Duty-of-Care Anchor* names, before disbursement, the solvent legal person civilly answerable to third parties for damages arising from execution, in particular damage to physical integrity.
 367: 
 368: **Attention infrastructure.** Citizens act through a layered interface:
 369: discovery with user-controlled, reason-visible ordering; compact project
 370: cards; and progressively deeper audit surfaces down to the full trail.
 371: Non-attending citizens are served by configurable automatic allocation
 372: profiles — or a sensible default profile when none is set — and by
 373: scoped, revocable delegation with concentration visibility. The architecture
 374: does not assume attentive citizens; it assumes mostly inattentive ones and
 375: routes their weight through inspectable intermediation (Lupia and McCubbins
 376: 1998). This is a design answer to the citizen-competence objection in its
 377: sharpest contemporary form (Brennan 2016): rather than restricting anyone's right to participate, the architecture makes the intermediation that inattention
 378: produces visible, revocable, and auditable.
 379: 
 380: An apparent objection —that participating via app, wallet, and AI tutor
 381: excludes the non-digital population— dissolves under the comparative
 382: discipline: the non-digital citizen already delegates today, handing their
 383: decision, through the vote, to a distant representative who allocates the
 384: budget for them. Core v0 does not add a barrier: it removes a level of
 385: indirection. Whoever never participates falls to the system default —equal per
 386: citizen, mandate-bound—, not to the attentive minority's preference; and
 387: whoever participates even minimally, including through non-digital channels or
 388: assisted delegation, brings the decision closer to their direct interests
 389: through microdelegation and rules such as "near me" that fund what they can
 390: touch. What appears to exclude, includes more —with the construction of the
 391: planning scope as the only remaining indirection (Section 8).
 392: 
 393: **Transition.** Deployment proceeds through operating modes — closed,
 394: tutored, semi-open, open — in which a public authority may retain
 395: eligibility review (project admissibility), but every material tutored decision, and every
 396: tutored silence past its deadline, becomes a public governance-resolution
 397: object. Incumbent-resistance indicators (scope share opened, rejection and
 398: timeout rates, operator privilege) make symbolic adoption distinguishable
 399: from real transfer.
 400: 

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$lines = Get-Content -LiteralPath '"'drafts/paper.md'; for ("'$i=400; $i -lt 800; $i++) { '"'{0,4}: {1}' -f ("'$i+1), $lines[$i] }' in C:\devel\claude-projects\distributed-governance-research
 succeeded in 197ms:
 401: ## 5. Formal analysis
 402: 
 403: We state the three models and their results; proofs are one-step algebra and
 404: appear in the companion note ([formal-models](../research/formal-models.md)).
 405: All agents are risk-neutral; budgets are normalized to 1. The deterrence
 406: structure throughout is Becker's (1968): a violation is deterred when the
 407: detection probability times the stake at risk exceeds its gain — our
 408: contribution is mapping each term of that inequality onto a named,
 409: configurable architectural object. To avoid notation collisions, *Proposition
 410: N* denotes the formal results of this section; *P001/P007*, the methodological
 411: rules (§2); and *prediction N*, the behavioral predictions of §5.3.
 412: 
 413: ### 5.1 Milestone-gated disbursement
 414: 
 415: An executor chooses to deliver a milestone at private cost *c* ∈ (0, 1) or
 416: to divert. The mechanism releases an advance *a*, holds the remainder for
 417: reviewed acceptance, recovers a fraction *r* of the advance on confirmed
 418: non-delivery, seizes a posted guarantee *γ* (carrying cost *κ* per unit),
 419: and imposes a reputational continuation loss *R*. Review confirms diversion
 420: with probability *p* — the joint quality of evidence standards, fiscalizer
 421: independence, and corroboration.
 422: 
 423: **Proposition 1 (incentive compatibility).** Delivery is optimal iff
 424: 
 425: > *c* ≤ *p* · [ (1 − *a*(1 − *r*)) + *γ* + *R* ].
 426: 
 427: Delivery must be cheaper than the detection probability times the total
 428: stake at risk. Every disbursement-gaming test in the architecture is a term
 429: in this inequality.
 430: 
 431: **Proposition 2 (weak verification must be priced).** The minimal guarantee
 432: sustaining delivery for all *c* ≤ *c̄* is *γ\**(*p*) = max{0, *c̄*/*p* −
 433: (1 − *a*(1 − *r*)) − *R*}, decreasing and convex in *p*. Where verification
 434: is weak — thin fiscalization markets, poor evidence quality — the mechanism
 435: must compensate with smaller advances, more recoverability, larger
 436: guarantees, or higher-reputation executors. A single global guarantee
 437: percentage cannot be optimal across heterogeneous verification
 438: environments.
 439: 
 440: The deterrence terms of this condition are complements, not substitutes. A
 441: pre-registered ablation on the companion experiments (Offermann 2026b)
 442: measured the consequence: at the designed operating point the inequality
 443: holds with slack, so removing any single term costs almost nothing — and a
 444: deployment negotiated one defensible concession at a time can cross the
 445: threshold invisibly, ending below the status quo it replaced (delivering about
 446: 87% of the status quo's verified value, with selection quality intact) while
 447: looking fully instrumented. The
 448: corpus therefore requires every scope to publish its deterrence-inequality
 449: margin in its operating configuration, recomputed on every term change, with
 450: term reductions classified as material rule changes (docs/111). The same
 451: slack, kept intact, buys an unexpected dividend: it absorbs verification-
 452: instrument error — in the companion panel of five real model families, even
 453: a machine verifier passing ~20% of judgment-requiring fraud produced
 454: leakage indistinguishable from pure-human verification, because the cascade
 455: removes the attempts upstream — provided the adversary is not colluding
 456: across the verification layers (Offermann 2026b, docs/113).
 457: 
 458: **Proposition 3 (participation-deterrence trade-off).** Raising *γ* relaxes
 459: incentive compatibility at rate *p* but lowers honest executors' payoff at
 460: rate *κ*; under a designer objective weighing one unit of incentive slack
 461: equally against one unit of honest-executor payoff, a guarantee increase is
 462: net-beneficial only if *p* > *κ* (other weightings shift the threshold, not
 463: the trade-off's structure). Where detection quality is below the local cost
 464: of capital, piling on guarantees excludes honest low-margin executors
 465: without deterring fraud — the formal content of the architecture's
 466: proportionality discipline.
 467: 
 468: ### 5.2 Collusion-proof fiscalization
 469: 
 470: A non-delivered milestone is worth *G* to the executor if fraudulently
 471: approved. Release requires approval by *k* protocol-assigned fiscalizers,
 472: each carrying forfeitable stake *W* (future protocol fees plus role
 473: reputation) and facing post-approval discovery probability *q*. Because
 474: assignment is protocolized and repeat pairings are visible, executor and
 475: fiscalizer are strangers: a bribe offer is itself reported with probability
 476: *δ*, costing the executor penalty *P_e*.
 477: 
 478: **Proposition 4 (collusion-proofness).** Approval fraud is unsustainable if
 479: 
 480: > *k* · *q* · *W* ≥ *G* − (*δ* / (1 − *δ*)) · *P_e*,
 481: 
 482: and in particular whenever *kqW* ≥ *G*. Three corollaries carry design weight:
 483: 
 484: - ***Corroboration substitutes for reputation capital.*** The required stake
 485:   per fiscalizer falls linearly in *k*, so redundant review is exactly what
 486:   makes shallow-reputation fiscalizer pools workable, at linear control cost
 487:   —which is what proportional threshold policies are for.
 488: 
 489: - ***Repeat relationships are the attack surface.*** The friction term exists
 490:   only while relational contracting is prevented, which is why repeat-pairing
 491:   visibility is load-bearing (we hold the report probability *δ* exogenous to
 492:   *k*; endogenizing it —more approached reviewers, more chances of a report—
 493:   only strengthens the condition).
 494: 
 495: - ***Thin markets attack both models at once.*** A monopolist fiscalizer that
 496:   cannot credibly be excluded loses its forfeitable stake (*W* → 0) while also
 497:   degrading *p* in Proposition 1: the two conditions identify the same
 498:   environments as fragile, for the same reason.
 499: 
 500: ### 5.3 Attention-constrained allocation
 501: 
 502: Citizens allocate small individual budgets; the pivotal return to evaluating
 503: projects is negligible, so rational ignorance is the equilibrium (Downs
 504: 1957), and the design question is where the *inattentive* majority's weight
 505: flows: to salience amplified by social proof (Bikhchandani, Hirshleifer and
 506: Welch 1992; Salganik, Dodds and Watts 2006), or to the architecture's own
 507: default layer, whose routing follows the distributed project prioritization
 508: — the aggregated allocation profiles — not a central plan. The model yields three testable
 509: predictions — caps tame cascades (prediction 1), defaults anchor quality (prediction 2), decay
 510: degrades gracefully only with defaults (prediction 3) — evaluated next.
 511: 
 512: ## 6. Computational evidence
 513: 
 514: We test the three predictions of §5.3 —and, in successive experiments, the
 515: assumptions of Propositions 1–4— in an agent-based simulation. Each experiment
 516: (E1–E10) corresponds to a finding:
 517: 
 518: | Exp | What it tests | |
 519: |---|---|---|
 520: | E1 | do funding caps raise quality? | Finding 1 |
 521: | E2 | what carries allocation quality? | Finding 2 |
 522: | E3 | what buffers participation decay? | Finding 3 |
 523: | E4 | distributed aggregation vs. central construction (refined by a symmetric-frictions frontier + capture, E4-v4/v5; and a v1.14 harm-myopia four-scenario robustness map, §6) | Finding 4 |
 524: | E5 | delivered value: selection × delivery, at matched budget | Finding 5 |
 525: | E6 | reputational competition and execution standard | Finding 6 |
 526: | E7 | comparison against an audit-parameterized baseline | Finding 7 |
 527: | E8 | robustness under endogenous behavioral participation | close of §6 |
 528: | E9 | the full stack: planning × selection × delivery (Shapley attribution) | Finding 9 |
 529: | E10 | the administrative-cost layer (net-budget, symmetric) | Finding 10 |
 530: 
 531: We simulate 10,000 citizens over 24 monthly cycles allocating across a
 532: standing pool of 40 projects with quality *θ*, salience *s* (measured
 533: corr(*θ*, *s*) ≈ 0.24), prioritization need-weights *w* = λ*θ* + (1 − λ)*u*
 534: (where *u* is an idiosyncratic need component independent of quality) with
 535: mixing weight λ ∈ {0.4, 0.8} — measured corr(*θ*, *w*) ≈ 0.55 and ≈ 0.97
 536: respectively — and 3× scarcity (only a minority of projects can
 537: complete). Evaluators (2–10%) fund the best quality they sample; salience
 538: followers see a six-slot discovery surface ranked by salience amplified by
 539: funding progress; default followers' budget fills projects in planning-
 540: priority order. The funding-target closure rule is toggleable. Twenty
 541: seeded runs per condition; the code is dependency-free and deterministic
 542: (`scripts/simulation/allocation-sim.mjs`; full tables in
 543: [simulation-results](../research/simulation-results.md)).
 544: 
 545: **Status of the earlier compound ratios (retired).** An earlier version reported a
 546: single compound value-per-budget ratio against three baselines (a zero control, E5; an
 547: audit-parameterized status quo, E7; behavioral adoption, E8). That single number
 548: **conflated three distinct channels** — selection quality, administrative-machinery
 549: cost, and leakage/diversion — and is **retired as a calibrated effect**. E5 is now
 550: formalized as a transparent multi-layer stack: selection quality at *matched* project
 551: budget (the E4 result above), with administrative cost and leakage as **separate,
 552: declared, parametric channels** — default off, so the central is granted zero cost and
 553: zero leakage, and E5 then reduces exactly to the selection result — each reported
 554: without conflation and, in the cost-and-corruption extension, anchored to real
 555: public-budget and procurement-corruption data (`scripts/simulation/e4-v5/e5-layers.mjs`).
 556: 
 557: **Quantitative status (governing).** A pre-registered, symmetric, selection-only
 558: stress test — both arms with matched expected appraisal-report budgets, the same
 559: candidate pool, costs and noise, delivery at parity, each acting on its own noisy
 560: estimate rather than ground truth — found the distributed-minus-central selection
 561: advantage **positive in every one of 18 pre-specified cells but small.** The
 562: pre-registered decision statistic is the **pooled median Δ = 0.025**, below the
 563: pre-registered **0.05 research-program rebuild gate**; a **post-hoc** ratio-of-sums estimate is
 564: **Δ = 0.026, with a 95% world-cluster Monte-Carlo interval [0.023, 0.029]**
 565: (reported separately, on the simulated data-generating process). The compound
 566: multiplier is therefore **not** claimed as a calibrated effect. This is a stylized
 567: test of a *selection mechanism*, not a validated implementation of Core v0: its
 568: value and credit variables are abstract scores, not measured visibility,
 569: traceability, permanence, or public value. The **0.05** figure is a
 570: research-program **rebuild threshold** on this uncalibrated scale (a go/no-go rule
 571: for whether to pursue a quantitative rebuild), **not** a calibrated policy-materiality
 572: threshold. The controlling specification is
 573: [claim-and-estimand-contract](../research/claim-and-estimand-contract.md); the test,
 574: its frozen pre-registration, results, and diagnostics are
 575: `scripts/simulation/e5-sp-symmetry-gate.mjs` and `audits/2026-07-10/symmetry-gate-*`.
 576: The load-bearing contributions are the architecture, the mechanism direction, and
 577: the v1.14 comparative robustness map across declared no-myopia and harm-myopia
 578: regimes—not a point multiplier or calibrated impact.
 579: 
 580: **The declared reference scenario is decisive (E4 v1.14).** When the central selector is
 581: modelled as the evidence describes it — its *direction* on every axis grounded in the
 582: literature (not its magnitude fitted): near-blind to *diffuse harm on the low-visibility
 583: long tail* (Hayek 1945; Scott 1998; Olson 1965; Bandiera, Prat and Valletti 2009, whose
 584: **83% passive waste** in standardized-goods procurement shows most public loss is not
 585: chosen), projecting its own priors and over-rating visible, appraisable benefits
 586: (Broockman and Skovron 2018; Flyvbjerg et al. 2003), and tilted toward claimable credit
 587: (Mayhew 1974; Arnold 1990), in a heavy-tailed low-visibility project space (Skuhrovec et
 588: al. 2013) — **coverage-routed distributed selection recovers about 98% of the model's
 589: full-information greedy reference against the central's ~44%: a 54-point conditional
 590: model contrast**, not an empirical calibration or a field effect (the reference is a
 591: greedy normalization, not a feasible institution or a welfare optimum). It is not a
 592: knife-edge: it holds across the declared parameter space; it survives the realistic
 593: signal degradation of Core v0's universal budget *routing* (a ~5% active-report / ~35%
 594: microdelegation / ~60% profile-rule composition — universal *routing* is architectural,
 595: effective independent *information* is not); and it holds even when the central is
 596: granted every competence *except* harm-sight (~+14%). The central overtakes coverage only
 597: by **abandoning the declared premises** — granting it the harm-sight the literature
 598: denies it — and even then only on a near-harmless world; the *mirror* idealization of the
 599: distributed arm (its own recipe reflected: perfect signal, harm-rich world, central kept
 600: at its declared myopia) wins by a landslide (~+118%). The single sensitivity that
 601: materially shrinks the gap — without reversing its sign in the declared range — is
 602: correlated/common-mode error in the coverage arm (a shared platform/recommender or
 603: concentrated delegation), which brings ~+54% to ~+26% at a strong correlation. This is
 604: the mechanism's one architectural condition, not merely a swept parameter: **coverage
 605: without source diversity can reproduce the epistemic bottleneck it is meant to replace.**
 606: Core v0 therefore treats delegate, profile-provider, and recommender concentration as
 607: observable quantities with diversification thresholds (§8), rather than assuming
 608: independence by fiat. The
 609: pre-registered symmetry gate remains the paper's separate **confirmatory** computation (a
 610: NO-GO near-parity under a different data-generating process); this map is a subsequent
 611: scenario analysis, not a reclassification of it. The full four-scenario map, the
 612: literature anchoring, the mirror idealized corners, and the common-mode frontier are in
 613: **Appendix E4**. The model locates a frontier; it does not estimate a field effect.
 614: 
 615: **Finding 1: funding caps are an anti-concentration device, not a quality
 616: device.** With closure ON, concentration falls (funding Gini 0.732 vs
 617: 0.759), the most salient 5% of projects absorb less (16.8% vs 19.6% of all
 618: funding), and 15% more projects complete (25.3% vs 21.9%). But quality
 619: selection is unchanged (*sel(θ)*, the Pearson correlation across projects between
 620: latent quality θ and the binary indicator that a project reaches its funding
 621: target, ≈ 0.39 vs 0.41): the truncated surplus
 622: spills to the next most *visible* project, not the next *best* one. The
 623: architecture's claim for the closure rule should be — and in the corpus now
 624: is — bounded accordingly.
 625: 
 626: **Finding 2: the default anchor, not citizen attention, carries allocation
 627: quality.** A default-anchored mix, with a near-perfectly informed planner (r ≈
 628: 0.97), reaches sel(θ) ≈ 0.71 — well above the salience-driven
 629: configurations (≈ 0.35–0.43). Raising citizen attention from 2% to
 630: 10%, by contrast, barely moves the needle —at most ≈ 0.08 in salience-driven
 631: regimes, and essentially nothing in default-anchored ones—, while degrading
 632: the vector's informational quality from near-perfect to moderate (r ≈ 0.97 →
 633: 0.55) costs ≈ 0.29 of selection. The anchor rules, not attention.
 634: 
 635: Two qualifications keep the finding honest:
 636: 
 637: - **By construction.** The default rule is a deterministic θ-correlated
 638:   allocator already holding most of the budget; what is measured is the
 639:   *conditioning* —how much the vector's informational quality determines the
 640:   anchor's value, and how little attention substitutes for it—, not the wisdom
 641:   of the crowd.
 642: 
 643: - **Robustness.** A sensitivity panel (varying evaluator sample size and
 644:   social-proof strength) shows the regime ordering is robust, except under
 645:   very strong social proof, where the regimes converge within noise because
 646:   strong amplification also propagates the evaluators' quality signal.
 647:   Magnitudes are parameter-dependent and uncalibrated; what survives all
 648:   variations is the ordering and the dominance of the prioritization's
 649:   informational quality.
 650: 
 651: This finding quantifies the leverage concentrated in whatever constructs the
 652: project prioritization the passive share follows. That prioritization has two
 653: layers —which a companion study (Offermann 2026b) separated for the first
 654: time—: the macro categorization (this corpus's Planning Scope, which frames
 655: eligibility and carries no budget weights) and the aggregated allocation
 656: profiles that route budget within it. The distributed arm is robust to the
 657: quality of that categorization and a central arm is fragile to it, so the
 658: advantage over a central status quo is not fixed: it grows as central planning
 659: worsens — a model-internal direction the companion apparatus illustrates (a
 660: conditional contrast that widens substantially as the central categorization
 661: degrades, not a calibrated multiplier; see the quantitative-status note in this
 662: section).
 663: 
 664: Two architectural facts scope the statement and forestall a tempting
 665: over-reading. First, the default layer is pluggable, not mandatorily central:
 666: the civic autopilot gives each citizen manual allocation, delegation,
 667: published allocation profiles, a personal automatic rule, or the system
 668: default; an onboarding citizen must explicitly select or acknowledge a base
 669: profile, and only the share who never engage necessarily follows the system
 670: default —which itself operates under a recorded allocation mandate. Second,
 671: centralized construction of scope weights is a property of the closed and
 672: tutored transition modes, not of the architecture: operating modes are
 673: country-configured states, and the designed trajectory is toward open
 674: construction (Finding 4 measures its in-model viability).
 675: 
 676: The numbers therefore establish a conditional. The binding constraint on
 677: allocation quality is the informational quality of the **project
 678: prioritization the passive share follows** —the aggregated allocation
 679: profiles, not a macro planning vector—, whoever or whatever supplies it. A
 680: captured or ignorant supplier is the failure mode; a well-informed or
 681: well-aggregated one, the asset. Randomizing that prioritization to escape
 682: capture does not help: it buys neutrality at the price of near-random quality
 683: for the passive share. And because the architecture's designed trajectory
 684: distributes its construction (open mode) and keeps it visible, versioned, and
 685: pluggable, the constraint is met by distribution, not by a central agenda.
 686: This is distinct from the narrower agenda-setting point of Section 8, which
 687: concerns only who frames eligibility.
 688: 
 689: E1–E3 do not authorize two readings: the prioritization's origin is
 690: unspecified (r is a property of the vector, not of a state office), and the
 691: modeled crowd carries social proof but no knowledge —so these experiments
 692: compare attention against weight quality, not central against distributed
 693: knowledge. Finding 4 makes that comparison properly.
 694: 
 695: **Finding 3: what buffers participation decay is the anchor's level, not
 696: where the leavers' weight flows — our own prediction failed here.** We
 697: predicted that decaying active evaluation (10% to 2% over 24 cycles) would
 698: degrade allocation gracefully only if the released share flowed to
 699: defaults rather than salience. Exploiting common seeds across conditions,
 700: the paired analysis rejects this: the destination's effect on overall
 701: selection is null at both anchor strengths (mean paired differences 0.001
 702: [−0.031, 0.033] and 0.021 [−0.028, 0.071]), and the only interval
 703: excluding zero is small and opposite-signed (at a strong anchor, the
 704: salience destination preserves late-cycle alignment slightly better —
 705: plausibly because amplified social proof also propagates evaluator
 706: seeding). What governs robustness to decay is the structural share of the
 707: default layer itself, Finding 2's variable. Engagement decay — the
 708: documented fate of civic-tech participation (Hirschman 1970; Peixoto and
 709: Fox 2016) — is a
 710: buffered risk here, but the buffer is the institutional layer's size, and
 711: within-cycle quality alignment still erodes in later cycles under all
 712: conditions, so decay is bought, not free.
 713: 
 714: **Finding 4: aggregated dispersed signals outperform fixed-bandwidth
 715: central construction of the weight vector — but a fair, symmetric
 716: re-examination resolves the advantage into a conditional frontier and adds a
 717: capture-resistance that guards it.** A fourth, pre-registered experiment
 718: (design and predictions committed before any run;
 719: `research/e4-institutional-knowledge-design.md`) models knowledge
 720: symmetrically instead of endowing it: a planner with fixed bandwidth
 721: (thirty deep inspections; its correlation with latent quality is now
 722: measured output, collapsing 0.81 → 0.37 → 0.17 as the project pool grows
 723: 40 → 200 → 1000) against thirty percent of citizens holding four
 724: individually poor local signals each (noise 0.35). Five regimes share the
 725: identical world and signals and differ only in the aggregation
 726: institution. The pre-registered scale-crossover prediction failed in the
 727: informative direction: open construction of the weight vector — a plain
 728: average of citizen signals per project — beats pure central construction
 729: at *every* scale, including the smallest, where the planner inspects
 730: three-quarters of the world (sel(θ) 0.76 vs 0.62 at N = 40; 0.73 vs 0.04
 731: at N = 1000). Twelve thousand noisy signals average into a near-perfect
 732: vector; thirty good inspections cannot compete, and fixed central
 733: bandwidth decays toward randomness as the world grows — a Condorcet
 734: (1785) aggregation logic, and we treat it as such: the jury theorem's
 735: known failure conditions (Austen-Smith and Banks 1996) define exactly
 736: the boundary the seventh experiment tests. Three
 737: qualifications carry the finding's honest weight. First, the same
 738: dispersed knowledge *without* an aggregation institution is wasted: the
 739: uncoordinated regime funds 0.6–15% of projects and selects poorly — the
 740: result vindicates aggregation mechanisms, not the absence of mechanism,
 741: and Core v0's default-plus-closure layer is exactly such a mechanism.
 742: Second, aggregation defeats noise, not bias: signals are unbiased by
 743: construction, and a common-mode bias uncorrelated with quality
 744: (misinformation, expressive allocation) would not average out — only
 745: endogenous social-proof contamination was tested, and proved largely
 746: benign because visible funding progress is itself quality-correlated in a
 747: well-anchored system. Third, elicitation is non-strategic by assumption;
 748: in deployment, signal reporting becomes a gaming and clientelism surface,
 749: and the mechanics of open scope construction remain a gated design
 750: problem. Within those bounds, the finding points in a clear direction: the binding variable is not who holds the pen but how much
 751: dispersed information the scope-construction institution ingests.
 752: 
 753: The simulation also disciplines rhetoric — in both directions. Nothing in
 754: E1–E3 supports describing Core v0 allocation as "the wisdom of crowds":
 755: the honest description is *inspectable intermediation with a
 756: citizen-correctable default*, which the results show is both realistic and
 757: better than the salience-driven alternative that unstructured platforms
 758: converge to. And nothing in E1–E3 licenses the opposite reading — that
 759: central planning knowledge beats distributed knowledge — because they
 760: never modeled distributed knowledge; when E4 does, aggregation wins
 761: wherever its named preconditions hold. Both discourses lose their slogan;
 762: the design keeps its numbers.
 763: 
 764: *A fair, symmetric re-examination (E4-v4/v5).* This first-pass E4 gave the
 765: central a fixed inspection bandwidth and left citizen signals unbiased — two
 766: idealizations that, an adversarial review showed, tilt the comparison in the
 767: distributed arm's favor. A rebuilt model
 768: (`scripts/simulation/e4-v4-symmetric-frontier.mjs`,
 769: `research/e4-v4-symmetric-frontier-results.txt`, `research/e4-v5-capture-design.md`)
 770: gives *both* institutions a symmetric friction in perceiving true value,
 771: including harm: the central attenuates perceived harm by a coefficient η (0 =
 772: blind to diffuse harm, 1 = a fully accountable planner), while the distributed
 773: reads true valuations but the diffusely harmed under-participate at a rate β
 774: (voice inequality). The result is not a multiplier but a frontier with a
 775: closed-form parity locus (`research/e4-analytical-backbone.md`): both
 776: institutions are biased estimators of the same Samuelson value T = S⁺ − S⁻,
 777: ranking projects by S⁺ − θ·S⁻ with θ_C = η and θ_D = 1 − β, so the distributed
 778: dominates exactly when its coefficient is closer to the true harm-weight of one
 779: — i.e. **β < 1 − η**. The simulation confirms the law (parity on the
 780: anti-diagonal η + β = 1) and quantifies the delivered-value degradation off it
 781: (from parity on the anti-diagonal to a substantial distributed lead across the
 782: plausible box). The advantage
 783: is thus a property of *including the harmed*, not of aggregation per se; it reaches
 784: parity along the anti-diagonal β = 1 − η and turns into a central win below it
 785: (β > 1 − η) — which absorbs the participation-bias objection into the model's own
 786: β axis rather than leaving it external. Neither
 787: extreme is assumed: η is *swept*, not fixed, and a low but non-zero η is a
 788: defended regime, not a premise. The diffuse-harm literature (Bastiat's unseen
 789: costs; Olson's asymmetric organization on contested issues; Wilson's
 790: client-politics quadrant; Scott's legibility) describes *when* diffuse costs go
 791: unrepresented — each read at its proper scope, not as a claim of global
 792: blindness — while the opposing thesis that political competition disciplines the
 793: centre toward efficiency (Wittman 1989) holds weakest in exactly that
 794: client-politics quadrant. Empirically, most *measured* procurement loss is
 795: passive — incompetence, not theft (Bandiera, Prat and Valletti 2009) —
 796: consistent with a low but non-zero η.
 797: 
 798: *Capture-resistance guards the advantage (E4-v5).* Modelling organized capture
 799: symmetrically — the review's hardest objection, applied in fairness to the
 800: central planner too — the asymmetry widens rather than closes. A group captures

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$lines = Get-Content -LiteralPath '"'drafts/paper.md'; for ("'$i=800; $i -lt 1200; $i++) { '"'{0,4}: {1}' -f ("'$i+1), $lines[$i] }' in C:\devel\claude-projects\distributed-governance-research
 succeeded in 221ms:
 801: a low-value project only when its private rent exceeds acquisition cost plus the
 802: expected sanction (Becker 1968); with the deterrence asymmetry carried entirely
 803: by detection probability and acquisition scaling (the penalty held equal,
 804: conservatively), the status quo turns net-harmful at rents near 10% of project
 805: cost while the distributed threshold — floored by the equal-per-citizen wallet,
 806: which money can persuade but cannot buy — sits roughly ten times higher (closed
 807: form ρ(C) in the backbone note). Detection is a snowball p = 1 − (1 − q)^m, so
 808: its floor is an expected m·q ≥ −ln(1 − p_c) ≈ 0.1 reporters drawn from the
 809: transparent affected public — low, but this is a model-internal statement whose
 810: force depends entirely on the stipulated detection gap (central ~0.10 vs
 811: distributed ~1.0), not an empirical burden-of-proof: sensitivity analysis is
 812: decisive here — the distributed advantage narrows and can reverse if distributed
 813: detection is driven down toward ~0.3, so the claim is that organized recapture is
 814: harder under the distributed arm's transparency *given these parameters*, not that
 815: it is ruled out. This ties Finding
 816: 4 to the integrity layer of Finding 5: the same fiscalization that makes value
 817: arrive is what keeps the allocation advantage from being bought back by
 818: organized rents, so the two are a layer and its safeguard rather than
 819: independent multipliers. Every magnitude here is model-internal; the literature
 820: (Olson, Wilson, Scott, Bastiat; Becker, Becker and Stigler, Stokes,
 821: Dyck-Morse-Zingales; Ostrom's self-monitoring commons) defends the direction,
 822: the mechanism, and the sign of the asymmetry — not the numbers.
 823: 
 824: *Analytical backbone.* Three closed forms carry the weight, each verified against
 825: the simulation (`research/e4-analytical-backbone.md`); the runs then only confirm
 826: them and quantify the degradation off the clean cases. **(i) The parity law.**
 827: Writing each institution as a biased estimator that ranks projects by S⁺ − θ·S⁻,
 828: the central keeps θ_C = η of perceived harm and the distributed reveals
 829: θ_D = 1 − β (the participation rate cancels from the ranking); since the true
 830: harm-weight is one, the distributed arm delivers more true value **iff
 831: β < 1 − η**, parity on the anti-diagonal. A bias–variance reading would predict
 832: that on the parity line, where the bias cancels, the lower-variance estimator wins —
 833: the distributed's revelation noise is zero (a funder knows her own value), the
 834: central's proxy noise is not. The implemented simulation does **not** bear this out
 835: at the accountable corner: at (η = 1, β = 0) the measured outcome is a slight
 836: **central win** (the distributed delivers about 89% of the central's value there) — so
 837: the honest reading is the noise-free parity law β = 1 − η, and the bias–variance tilt
 838: toward the distributed is not supported there.
 839: **(ii) The capture
 840: threshold.** From rent > acquisition + P(detect)·penalty, the central's threshold
 841: λ\*_C = (k_c + p_c·f)/C falls toward zero as its detection shrinks, while the
 842: distributed's λ\*_D = k_d + p_d·f/C is *floored* by the equal-wallet acquisition
 843: term k_d; the resistance ratio ρ(C) = (k_d·C + p_d·f)/(k_c + p_c·f) ≈ 6 to 10 in the
 844: plausible range, rising in project cost. **(iii) The detection floor.** With snowball detection
 845: P = 1 − (1 − q)^m, beating a central rate p_c needs, in the small-*q* (Poisson)
 846: approximation (1 − q)^m ≈ e^{−m·q}, only an expected m·q ≥ −ln(1 − p_c) ≈ 0.1
 847: reporters — the exact Bernoulli condition is m ≥ ln(1 − p_c)/ln(1 − q), which
 848: depends on *m* and *q* separately, not only on their product. It is a
 849: model-internal detection floor under the stipulated parameters
 850: (sensitivity-dependent; see Finding 4), not an empirical burden-of-proof inversion.
 851: Three invariances bound the arbitrary-magnitudes worry — as properties of the
 852: noise-free, large-set *expectation*, not of every finite-sample run: the advantage
 853: is invariant to the units of value (scale); in expectation it depends on the
 854: voice-bias β rather than on the participation *level* (though in finite samples
 855: turnout changes sample size, sampling variance, and hence rankings and
 856: portfolios); and, because only the first moments S⁺, S⁻ enter the expected
 857: ranking, the Gaussian valuation draw is a convenience there rather than a
 858: load-bearing assumption (finite-sample tails and valuation shape can still move
 859: rankings). One honest boundary the runs mark: the parity law is the large-set
 860: limit; when a project's interested set is very small — a handful of people — the
 861: distributed's sampling variance dominates and a full-census central regains the
 862: edge. Two further boundaries are honest to state. The comparison is *static* — a
 863: single allocation round — whereas real harms surface over iterated cycles and
 864: feed back through elections and audit, so a persistently blind centre is the
 865: stress case, not an inevitability. And the distributed arm is *scored on the true
 866: value it reveals*, which would be circular were it not that the β voice-bias and
 867: the capture frictions make its revealed signal a biased, contestable estimate of
 868: that value rather than a definitional one.
 869: 
 870: *Positioning.* The first-best preference-aggregation mechanism —
 871: Vickrey–Clarke–Groves — is infeasible for public budgets (it is not
 872: budget-balanced; Green and Laffont 1979), so both the central planner and Core v0
 873: are *second-best* institutions (Lipsey and Lancaster 1956); the comparison asks
 874: which second-best delivers more, not whether either is optimal. Core v0
 875: accordingly claims not strategy-proofness — impossible for any non-dictatorial
 876: mechanism (Gibbard 1973; Satterthwaite 1975) — but *capture-resistance under
 877: bounded organized coordination*. The equal-per-citizen wallet places it in the
 878: intensity-expressing voting family (Casella 2012; Lalley and Weyl 2018) with a
 879: sharper anti-plutocratic property: it caps influence by *equal endowment* rather
 880: than by convex pricing, so money can persuade wallet-holders but cannot buy
 881: wallets — exactly the acquisition-cost floor k_d of the capture threshold.
 882: Finally, the aggregation advantage is the Condorcet (1785) jury logic and dies
 883: under its independence condition (Austen-Smith and Banks 1996): organized capture
 884: is the correlated-error violation of that independence, so the integrity layer
 885: exists precisely to defend the assumption on which distributed aggregation rests.
 886: The value primitive follows Sen's capabilities for *what* is aggregated —
 887: freedoms, not money-utility — while the *summation* rests on Samuelson (1954), an
 888: aggregation Sen himself resists; we invoke each only where it applies.
 889: 
 890: *Calibration.* The magnitudes are model-internal, but the gap to data is a
 891: roadmap, not an apology. The central's 44–85% of benchmark-achievable value is a
 892: **candidate validation target requiring an explicit construct mapping** — not a
 893: direct check: the ex-post realized-to-appraised ratio (the World Bank's Independent
 894: Evaluation Group ratings; Flyvbjerg, Bruzelius and Rothengatter 2003) is a
 895: *different construct* from central selection relative to a full-information
 896: benchmark, so bridging them needs a stated mapping before either can calibrate the
 897: other; the voice bias β can likewise be anchored to measured
 898: participatory-budgeting demographics rather than assumed. And independent field
 899: evidence points the direction the model does: participatory budgeting in Brazil
 900: shifted spending toward sanitation and health and lowered infant mortality at
 901: constant per-capita budget (Gonçalves 2014) — a real-world instance of
 902: citizen-directed allocation delivering more real value, cleanly separable from
 903: any magnitude the model reports. The calibration-targets appendix makes the
 904: model-internal / data boundary a visible line.
 905: 
 906: **Finding 5: delivered value, not allocation, is where the architecture
 907: earns its keep — and selection and delivery compose multiplicatively.** A
 908: fifth experiment (`scripts/simulation/e4-v5/e5-delivery.mjs`, rebuilt on
 909: the clean E4 engine) adds the execution stage the first four omitted, as
 910: an **independent** delivery regime crossed with the two selection regimes —
 911: a four-cell design so each layer reads separately and jointly on the *same*
 912: funded portfolios. Executors have hidden types: an intrinsically honest
 913: share deliver; the rest divert whenever a temptation draw beats the
 914: regime's deterrent `p·[(1−a(1−r)) + γ + R]` (detection *p*, advance
 915: exposure *a*, recovery *r*, guarantee *γ*, reputational stake *R*) —
 916: Okun's (1975) leaky bucket. The **opaque** status-quo regime's emergent
 917: value loss is moment-matched to Olken's (2007) ~24% missing-expenditure
 918: figure (not identified as welfare); IMF's (2015) ~30% public-investment
 919: inefficiency is a broader process loss, and Reinikka and Svensson's (2004)
 920: ~87% Ugandan capture is a tail, not the central case. The **verified**
 921: regime is the architecture: a milestone-gated advance plus a performance
 922: guarantee, retention, recovery, and a reputational stake — magnitudes
 923: declared, directions from Propositions 1–4.
 924: 
 925: Every cell is a percentage of the same full-information greedy reference at
 926: perfect delivery (a heuristic normalizer, not an optimum), so no compound
 927: multiplier is reported. Selection efficiency reproduces E4 (distributed
 928: ≈ 98%, central ≈ 44% of the reference); delivery efficiency is ≈ 78% opaque
 929: versus ≈ 95% verified. Read as two main effects at the declared world, the
 930: delivery layer adds ≈ 8 points under central selection and ≈ 17 under
 931: distributed; the selection layer adds ≈ 42 points under opaque delivery and
 932: ≈ 51 under verified. The interaction is positive: the two layers **compose
 933: multiplicatively** — an accounting identity (delivered value = selected
 934: value × delivered fraction, applied per project), of which the positive
 935: interaction is the level-effect signature, not an independent discovery.
 936: The full architecture beats the status quo by ≈ +58.6 points of the
 937: reference (95% conditional Monte-Carlo interval [+58.0, +59.2], reflecting
 938: inner simulation variability only — world, model-form, and calibration
 939: uncertainty are not included). An earlier version summarized this as a
 940: single compound value-per-budget multiplier; that compound is **retired**,
 941: and E5 reports the layers as separate percentages.
 942: 
 943: Two refinements survive scrutiny. First, Core v0's distributed coverage is
 944: not only a selection signal: the citizens who routed the budget also
 945: observe delivery. But community coverage credibly lifts *detection*, not
 946: *recovery* (clawback needs institutional follow-up), so the coverage-only
 947: delivery dividend is small (a fraction of a point in the weak-control
 948: regime; Björkman and Svensson 2009, with failed replications; Molina et al.
 949: 2016); the sizeable delivery gain comes from the **formal** recovery
 950: channel — the verified regime — not eyeballs alone. Second, the verified
 951: regime's diversion is **low but nonzero** (≈ 2% incidence, ≈ 7% without the
 952: reputational stake): a grand-corruption temptation tail keeps a residual
 953: that strong control does not eliminate, matching Olken's finding that audits
 954: cut leakage without erasing it (2007; Avis, Ferraz, and Finan 2018; Becker
 955: 1968) — ex-ante deterrence, not an empirical zero. The result is robust to
 956: value/complexity-correlated delivery risk (the distributed arm funds
 957: higher-*value*, not higher-*cost*, projects) and stable across seeds; a
 958: joint delivery-parameter sweep, conditional on the declared world, keeps
 959: coverage ahead across the sampled space. Delivered value here is measured
 960: at *equal budget*; the administrative *cost* of running each institution is
 961: a separate layer (Finding 10).
 962: 
 963: **Finding 6: visibility sustains the standard; naive reputation markets
 964: concentrate faster than they select.** A sixth pre-registered experiment
 965: (`research/e6-reputational-competition-design.md`) isolates the incentive
 966: channel from deterrence entirely — a career-concerns setting in
 967: Holmström's (1999) sense: an all-honest executor pool with adjustable
 968: effort and no possibility of diversion (the model prices no explicit
 969: effort cost; cost-minimization is encoded behaviorally as the opaque
 970: regime's decay rule). In the opaque regime,
 971: effort collapses toward cost-minimization (0.49 → 0.24 over twenty-four
 972: cycles) — not through malice, but because effort has no return and no
 973: visible standard exists to imitate. Making verified quality visible
 974: sustains effort near its starting level, and the visible-competitive
 975: regime delivers +11% over the opaque baseline — a pure incentive gain
 976: with zero diversion in the model. Two pre-registered predictions failed
 977: informatively. Visibility alone carries most of the effect: the mirror
 978: precedes the market (the behavioral rule ties imitation to visibility, so
 979: part of this is by construction — but the construction encodes the claim
 980: that opacity erodes professional norms by removing the standard itself).
 981: And naive reputation-weighted assignment concentrates work dramatically
 982: (assignment Gini 0.84 versus 0.34) while tracking true ability only
 983: weakly — early-luck lock-in, the cumulative-advantage dynamic of
 984: information cascades reappearing in the executor market. The design
 985: lesson runs in both directions: verified visibility is where the quality
 986: incentive lives, and any strong reputation weighting — human or
 987: algorithmic — needs the concentration observability, entrant floors, and
 988: opportunity-normalized reputation the corpus prescribes. In Core v0,
 989: reputation informs funders' choices rather than automatic assignment,
 990: with concentration visible by construction — and it never excludes: no
 991: protocol rule bars a funder from choosing any admissible actor on
 992: reputational grounds.
 993: 
 994: **Finding 7: an audit-parameterized baseline — what it does and does not
 995: calibrate.** The manuscript-review round's sharpest attack held that the zero-control
 996: baseline is a caricature — real administrations run audit institutions,
 997: retentions, bonds, and inspection — and the answer was a seventh
 998: pre-registered experiment (`research/e7-calibrated-baseline-design.md`)
 999: with a committed withdrawal condition: if the headline collapsed against
1000: a fair baseline, it would be withdrawn, not requalified. The
1001: audit-parameterized status-quo arm draws its parameters from published
1002: audit-institution findings (a documented-practice-informed scenario;
1003: verification of some primary sources is ongoing) — detection from Chile's comptroller works
1004: studies, retention from documented payment-state practice, recovery from
1005: Mexico's ASF series, leakage anchors category-matched to construction
1006: (Olken 2007; the multi-country evidence base spans the U.S. GAO, the U.K. NAO, the
1007: European Court of Auditors, Brazil's TCU and CGU, and the comptrollers
1008: of Chile, Peru and Colombia; Ferraz and Finan 2008) — with the planner's
1009: inspection bandwidth scaled to scope and coordinated signal bias swept
1010: as the Condorcet failure regime. The withdrawal condition was not
1011: triggered *within this apparatus*: against the audit-parameterized baseline the
1012: earlier compound was substantial at scale but only near-parity at municipal
1013: pilot scale (10-40 projects), where central selection with full coverage is
1014: competitive and the case rests on
1015: delivery and metering. But the audit evidence *parameterizes the baseline's
1016: leak*; it does **not** calibrate the Core v0 institutional treatment effect,
1017: which is governed by the later pre-registered symmetric test (Section 6) whose
1018: pre-registered pooled median selection advantage is Δ = 0.025 of a
1019: full-information benchmark — so these E7 figures are retained as conditional
1020: apparatus outputs, not a surviving headline. Within this apparatus, and
1021: conditional on its stipulated opportunist-cost distribution and no-memory
1022: baseline, one qualitative result is instructive: at the model's audit-reported
1023: detection intensity (primary-source verification ongoing), without reputational
1024: memory, the model deters no diversion — the audit-parameterized regime's incentive threshold lies
1025: below every modelled opportunist's cost, so its leak equals the zero-control
1026: regime's, and in the model the added detection reduces the visibility gap (from
1027: twenty-nine to nineteen points) rather than raising delivered value. These are
1028: model-internal outputs of E7's stipulated apparatus, not an estimated causal
1029: effect of real-world auditing. The audit-parameterized arm's leak lands inside
1030: the audit-reported leakage band (24-48% in works); the model's leak mechanics, fed
1031: audit parameters, are *consistent with* the documented range — this parameterizes
1032: the baseline's leak, it does not calibrate the institutional treatment effect. And the bias
1033: sweep bounds the open-construction claim honestly: distributed
1034: selection degrades near-linearly with coordinated signal capture and
1035: crosses below a competent full-coverage municipal planner only at
1036: roughly a thirty percent coordinated share — it degrades, never
1037: collapses, and remains superior everywhere below ten percent.
1038: 
1039: A pre-registered eighth experiment (E8,
1040: `research/e8-behavioral-participation-design.md`) then replaced the
1041: participation side of these arms — the default share and informed share
1042: the architecture arms had imposed — with adoption trajectories generated
1043: by a companion behavioral study: a Core v0-conformant agent-based model
1044: of awareness, registration, participation modes, and trusted
1045: microdelegation, calibrated with LLM-elicited synthetic priors
1046: (replication package: the distributed-governance-experiments
1047: repository). The earlier apparatus produced a compound at scale under its
1048: synthetic adoption assumptions that varied across three populations and all
1049: scales, including a launch trajectory that begins near zero
1050: participation — which costs 1.7% of the ratio, because the default layer
1051: anchors the thin early cycles by construction. The behavioral study also
1052: independently reproduces the informed-share assumption these experiments
1053: had imposed: 0.309 emergent against the 0.30 assumed.
1054: 
1055: **Finding 9: the full stack — planning, selection, and delivery — and an
1056: honest accounting of what each layer contributes.** A ninth experiment
1057: (`scripts/simulation/e4-v5/e9-fullstack.mjs`, built on E5) adds the third
1058: architectural layer, **planning** (constructing the eligibility frame and
1059: per-sector budget shares), so all three layers are compared central versus
1060: distributed across a 2×2×2 of persistent sectors (ten, the COFOG count). A
1061: Shapley attribution decomposes the all-distributed-versus-status-quo gap
1062: into layer contributions that sum exactly to it. Two honest qualifications
1063: govern the reading. First, the attribution is *conditional*: every layer
1064: value is computed through the declared planning sector generator, so the
1065: standalone, quantified **selection** and **delivery** figures are the E5
1066: ones (no planning layer); E9 contributes the three-layer *structure* and
1067: the attribution *method*. Second, the layer contributions are *large in the
1068: declared world, not uniformly robust*: the full Core v0 advantage stays
1069: positive in every named world (a modest central-favourable world through a
1070: strongly distributed-favourable one), but the individual selection and
1071: delivery contributions reverse sign in the extreme corners (selection where
1072: central selection is near-random, delivery where a harmful portfolio is
1073: delivered more faithfully) — a fact the paper reports rather than hides.
1074: The **planning** layer's value operates chiefly through **agenda capture**
1075: — the central keeping whole high-need, low-visibility functions off the
1076: menu (the second face of power; Bachrach and Baratz 1962; Schattschneider
1077: 1960). That mechanism is real and its *direction* is anchored (the COFOG
1078: taxonomy; the pre-election shift toward visible spending, Drazen and Eslava
1079: 2010; the systematic neglect of maintenance and prevention, Rioja 2003),
1080: but its *magnitude* cannot be identified without country-specific budget
1081: data. We therefore **do not report a planning-layer figure**: quantifying
1082: it with the mechanism switched off would understate it, and switched on it
1083: is not yet anchorable. A country-grounded illustration — Chile's
1084: mental-health budget held near 2% against an OECD average of 6.7%, despite
1085: mental disorders being the country's leading cause of disability — shows the
1086: visibility bias has a real footprint, and is offered qualitatively, not as
1087: a calibration.
1088: 
1089: **Finding 10: administrative cost is roughly neutral once accounted
1090: symmetrically — the advantage is delivered value, not overhead.** A tenth
1091: layer (`scripts/simulation/e4-v5/e10-costs.mjs`) adds the administrative and
1092: machinery cost each institution runs and Core v0 largely replaces — the
1093: value-proxy studies, allocation and prioritization apparatus, and licensing
1094: the central carries, against Core v0's own platform and control machinery.
1095: Modelled honestly — the cost reduces each arm's *budget* before selection
1096: (so the value loss is sub-proportional, because greedy funding cuts the
1097: marginal projects first), charged symmetrically (Core v0's verification and
1098: recovery machinery is costed, not free), and de-overlapped from the delivery
1099: leakage E5 already removes — the administrative layer is **roughly neutral**
1100: (within a point of zero either way at declared cost shares). The Core v0
1101: advantage comes from **selection and delivery**, not from an
1102: administrative-cost saving; a decisive cost advantage would require the
1103: central's overhead to exceed the platform's by more than symmetric
1104: accounting supports. The cost shares are declared, with directions anchored
1105: (IDB 2018; the low operating cost of e-government platforms — KONEPS,
1106: ChileCompra, ProZorro).
1107: 
1108: **What survives.** Stripped to what the governing test supports: (1) under the
1109: pre-registered symmetric gate the distributed selection advantage is *positive but
1110: small* (median Δ = 0.025, below the 0.05 rebuild gate; NO-GO); (1b) a v1.14
1111: four-scenario robustness extension (a *separate, exploratory* analysis under a different
1112: data-generating process, not a reclassification of the NO-GO) models the central as the
1113: evidence *directionally* describes it — *near-blind to diffuse harm on the low-visibility
1114: long tail* (Hayek 1945; Scott 1998; Olson 1965; Bandiera–Prat–Valletti 2009): in that
1115: source-motivated declared reference scenario coverage-routed selection recovers
1116: *decisively* more of the model's greedy reference (≈ 98% vs ≈ 44%), even a central granted
1117: every competence except harm-sight still loses (≈ +14%), and the central pulls narrowly
1118: ahead only by abandoning the declared premises — on a near-harmless world — while the
1119: *mirror* idealization of the distributed arm wins by a landslide, all a conditional model
1120: contrast reported as declared reference points, not calibrated impact; (2) the
1121: load-bearing contributions are the architecture and the qualitative
1122: credit-versus-coverage mechanism — credit-pressured central ranking underweights
1123: diffuse value that coverage-based distributed selection surfaces; (3) every compound
1124: value-per-budget ratio an earlier version reported is retired here as a calibrated
1125: effect — it was a conditional, model-internal apparatus output, not a calibrated field
1126: effect; and (4) any calibrated total delivered-value effect — selection *and* delivery
1127: (administrative cost and leakage), on real data — is future work, developed as separate
1128: declared channels rather than a single conflated number.
1129: 
1130: ## 7. Adversarial review as method
1131: 
1132: The architecture was developed under a documented adversarial loop:
1133: **attack** (a brief stating a failure mode, its location in the corpus, a
1134: stress scenario, and literature anchors) → **paired defense** (an objective
1135: evaluation classifying the attack as founded, partially founded, or a
1136: difference of judgment, with line-anchored citations into the corpus) →
1137: **resolution** (an accepted document that either integrates a mechanism or
1138: bounds the risk) → **propagation** (the resolution's constraints threaded
1139: through every affected architecture document). The loop ran five rounds, all
1140: resolved; every resolution is propagated through the corpus except the
1141: manuscript-review round's four paired defenses (D037–D040), which carry accepted
1142: resolutions whose remaining corpus propagation is tracked in the remediation
1143: roadmap. The first round: eighteen attacks on
1144: the architecture's mechanisms (metric gaming, fiscalizer capture,
1145: disbursement gaming, collusion, related-party control, complexity,
1146: incumbent resistance, among others). The second: fifteen deliberately
1147: deeper attacks on the political and behavioral foundations (democratic
1148: mandate, agenda-setting, fiscal dependence, thin markets, meta-governance
1149: vacuum, rational ignorance, cascades, clientelism, polarization,
1150: intertemporal myopia, the problem of many hands (Thompson 1980)). The
1151: third round emerged
1152: from the method turned outward: a simulated five-profile external review
1153: of this paper's companion document generated reviewer questions the corpus
1154: could not answer with existing anchors, and the standing rule converted
1155: the two serious ones into formal attacks — the legal characterization of
1156: the citizen allocation act, and the administrative capacity cost of
1157: tutored operation — both since resolved and propagated. The fourth round
1158: turned the same instrument on this manuscript itself: five simulated
1159: reviewer profiles (academic, public law, systems architecture,
1160: public-sector practice, educated general reader) attacked the published
1161: v1.6, and their five unanswerable objections became formal attacks, each
1162: now resolved — the zero-control baseline as a calibration strawman
1163: (answered by the seventh experiment and a binding reporting rule), the
1164: reserve of law over the allocation competence (an enabling-norm record
1165: gating binding mode), reputational exclusion as an unprocessed sanction
1166: (reclassified: the design holds no exclusion power to sanction with),
1167: allocation traceability against preference secrecy (resolved as citizen
1168: allocation secrecy with public money), and the adoption paradox (an
1169: adoption layer under an explicit thesis boundary). The fifth round was an
1170: ablation round of three attacks (A041–A043): the piecewise deployment of the
1171: deterrence stack, the unregulated budget-release valve, and the verification
1172: layer under machine-and-ring collusion — each resolved and propagated
1173: (`docs/111`–`docs/113`). The method's
1174: honesty requirement applies to itself: several resolutions answer their
1175: attacks with an explicit "bounded, not solved," and the full review record
1176: is public.
1177: 
1178: The loop terminates by the integrate-or-bound rule (P007). Its output
1179: discipline is what distinguishes it from ordinary threat modeling: every
1180: bounded attack must leave three artifacts — an explicit boundary sentence
1181: ("Core v0 does not require X"), a visible residual risk, and a one-sentence
1182: limitation statement. The limitations section below is therefore not a
1183: gesture of humility; it is the accumulated, adversarially generated output
1184: of the method. Of the forty-three attacks, none was dismissed; nine of
1185: the second round's fifteen were classified founded outright and the other
1186: six partially founded, all five of the manuscript round were classified
1187: founded at least in part, and the corpus's answer to several is an honest
1188: "bounded, not solved."
1189: 
1190: We used the loop with a single design team plus AI assistance — which is
1191: why we call it structured self-critique rather than validation; a
1192: self-administered adversary, however disciplined, cannot substitute for
1193: independent attack. Its obvious next application is with genuinely
1194: independent reviewers, which we identify below as the first item of
1195: future work.
1196: 
1197: ## 8. Limitations
1198: 
1199: Stated per the method's own rule — each is a recorded boundary with a named
1200: residual risk.

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$lines = Get-Content -LiteralPath '"'drafts/paper.md'; for ("'$i=1200; $i -lt $lines.Count; $i++) { '"'{0,4}: {1}' -f ("'$i+1), $lines[$i] }' in C:\devel\claude-projects\distributed-governance-research
 succeeded in 230ms:
1201: 
1202: **Constructing the eligibility frame is centralized in the transition
1203: modes.** In the closed and tutored operating modes Core v0 specifies for
1204: pilots, the implementing authority constructs planning scopes; the
1205: architecture makes that construction public, versioned, mandate-bearing,
1206: and contestable through visibility, but in those modes it does not
1207: distribute it. Constructing the scope means defining the frame — which
1208: purposes, which budget share, which protected floors, which admissibility
1209: rules — not designing or ranking projects: project creation and
1210: prioritization remain distributed even in tutored mode, so this residual
1211: agenda power is the power to decide what *may* be funded, never what *is*
1212: funded. It is important not to misread our own simulation here. What that
1213: simulation shows dominating every other quality margin is the
1214: informational quality of the **project prioritization** — the aggregated
1215: allocation profiles the funded share follows — and that prioritization is
1216: distributed by design, even in tutored mode; the result is therefore an
1217: argument *for* distributing construction, not evidence that a central
1218: agenda governs delivery. The residual centralized power is the narrower
1219: one: constructing the eligibility frame is itself the second face of power
1220: (Bachrach and Baratz 1962; Schattschneider 1960; Lukes 1974) — the power
1221: to keep something off the menu — which the architecture answers, in these
1222: modes, by making the frame public, versioned, mandate-bearing, and
1223: contestable rather than by distributing it. Three things scope the
1224: limitation honestly. It is a property of the transition modes, not of the
1225: architecture: operating modes are country-configured states, and the
1226: designed trajectory is open, socially constructed agenda-setting. It is
1227: narrower than the passive share: engaged citizens allocate manually,
1228: delegate, or adopt configurable profiles, so authority weights fully
1229: govern only the never-engaged share. And it is now measured rather than
1230: assumed: E4 shows open construction of the weights from aggregated citizen
1231: signals is viable and scale-robust in the model, so the constraint is no
1232: longer whether distributed construction can work in principle but whether
1233: an elicitation mechanism can keep dispersed signals honest, unbiased, and
1234: representative under gaming, clientelism, and expressive-allocation
1235: pressure — a design problem the corpus gates rather than assumes away.
1236: The comparative baseline also belongs in this paragraph: under the current
1237: institutional model, the entire budget follows a centrally constructed
1238: vector that is neither published, versioned, pluggable, nor overridable by
1239: any citizen. The transition modes reproduce that centralization visibly
1240: and revocably; the open mode is designed to end it. This remains the
1241: architecture's principal open problem, now with a measured prize attached
1242: to solving it — and for that reason we treat it not as one limitation
1243: among many but as the research program's next object: the design of open
1244: agenda-setting, including the candidate architecture in which a
1245: distributed agenda is constructed in parallel to the authority's own and
1246: the tutored role narrows to admissibility review of conflicts between the
1247: two, is the natural subject of a dedicated follow-up study and pilot.
1248: 
1249: **Procedural legitimacy is not democratic mandate — and the enabling norm
1250: does not yet exist.** The platform records the external authorization for
1251: budget migration and allocation formulas (the Allocation Mandate); it
1252: cannot manufacture authorization the law never granted. In the continental
1253: tradition of the reference jurisdictions, binding citizen allocation
1254: requires an enabling instrument of sufficient rank that no current statute
1255: supplies — the regional precedents (Peru's participatory-budgeting
1256: statute, Brazil's city-statute framework) prove the instrument is
1257: achievable, not that it exists — so the architecture's lawful deployments
1258: today are consultative and tutored, in which every material allocation
1259: decision remains imputed to the competent authority as a reasoned public
1260: resolution; the delivery, metering, and reputational-memory results
1261: operate unchanged under that status, and only the mature open mode
1262: requires binding allocation. The normative debate over substituting
1263: atomized allocation for representative appropriation (Rosanvallon 2008;
1264: Urbinati 2014) remains open.
1265: Under deep evaluative disagreement, the architecture's posture is
1266: procedural in Gaus's (2011) sense: its rules aim to be justifiable from
1267: diverse moral standpoints — which is what mandate records, motive
1268: neutrality, and the comparative-critique discipline provide — without
1269: presupposing a shared comprehensive doctrine. One further objection is
1270: deliberately out of scope: the model takes the coercively raised budget as
1271: given and improves its administration; the libertarian challenge to the
1272: taking itself (Nozick 1974) is neither answered nor begged here.
1273: Contribution-weighted allocation formulas, in particular, are flagged by
1274: the architecture as plutocratic departures requiring explicit higher
1275: authorization.
1276: 
1277: **Fiscal dependence is measurable, not enforceable.** The state controls
1278: the budget spigot. The Fiscal Commitment Profile converts strangulation
1279: from invisible to attributable — delivery latency, unexecuted valid orders,
1280: mid-cycle share cuts all become public data — but no software compels a
1281: sovereign to pay (Kydland and Prescott 1977; North and Weingast 1989). Credible commitment must come
1282: from country-level law.
1283: 
1284: **Verification quality is assumed, then priced.** Propositions 1–4 take
1285: detection and discovery probabilities as parameters. In thin control
1286: markets — credence-good markets where quality is unobservable to the buyer
1287: (Akerlof 1970; Dulleck and Kerschbamer 2006) — both collapse
1288: simultaneously, and the only compensating margins are
1289: financial terms and imported (remote or cross-territory) verification. The
1290: architecture prices weak verification; it cannot conjure verifiers.
1291: 
1292: **Coverage assumes source diversity it must then guarantee.** The distributed
1293: arm's advantage rests on many partly-independent signals; when profile
1294: providers, delegates, and recommenders concentrate onto a shared platform or a
1295: few super-delegates (Kling et al. 2015), their errors correlate and the
1296: common-mode channel — the single sensitivity that materially shrinks the
1297: anchored gap (§6, Appendix E4) — recaptures the very epistemic bottleneck
1298: coverage is meant to replace. Independence is therefore not a modeling
1299: convenience but an architectural obligation: Core v0 must publish delegate,
1300: profile-provider, and recommender concentration as observable quantities and
1301: trigger diversification thresholds when they climb. The residual risk is that a
1302: market converges on one recommender faster than the thresholds bite.
1303: 
1304: **Behavioral realism cuts both ways.** The simulation vindicates designing
1305: for inattentive citizens, but it equally shows that a defaults-weak
1306: deployment degenerates into salience-driven allocation. Off-platform
1307: phenomena — clientelist brokerage, expressive polarization, collusion
1308: conducted entirely outside the system — are made harder and more
1309: discoverable, never impossible; the architecture's claims are comparative
1310: (against opaque monopoly), not absolute.
1311: 
1312: **Meta-governance in open mode is deferred by design.** Rule-change
1313: procedure, versioning, and non-surprise constraints are specified; the
1314: constitutional mechanics — rules for making rules (Buchanan and Tullock
1315: 1962) — of who votes on protocol changes in a mature
1316: open-mode deployment are deliberately not. Open-mode deployment is gated on
1317: resolving them.
1318: 
1319: **Adoption selects, and the thesis does not depend on it.** This paper
1320: addresses whether the architecture can be built and how its *selection*
1321: mechanism behaves under a symmetric, delivery-at-parity test — not whether it
1322: delivers more value in the world (a total delivered-value effect is a separately
1323: identified future estimand, not claimed here), and not whether any authority
1324: wants it. The corpus supplies the
1325: deployment layer for an authority that has decided (prospective
1326: baselines measured from instrumentation onset, credit attribution on
1327: verified delivery, institutional rather than personal timeout attribution
1328: in the first cycle, and a symmetry clause barring any operator from
1329: exempting its own projects), and names the plausible adopter archetypes —
1330: the post-scandal challenger, the mandating higher government, the
1331: conditioned external funder. The honest selection effect stands: the
1332: architecture will plausibly be adopted first by relatively clean or newly
1333: arrived sponsors, in the places that need it least.
1334: 
1335: **The outcome measure is a bounded, non-distributional aggregate.** The value
1336: the model scores is a cardinal utilitarian-style sum over affected parties on a
1337: bounded, infrastructure-like public-investment slice; it is not distributionally
1338: weighted and says nothing about redistribution, equity, or who bears benefits and
1339: harms. A portfolio can score well on this measure while distributing badly.
1340: Applying the criterion across groups, or to the whole budget or the purpose of
1341: taxation, would require a separate social-welfare and incidence specification this
1342: paper does not provide. The model is also partial-equilibrium: strategic
1343: reporting, endogenous proposal supply, project complementarities, tax incidence,
1344: and general-equilibrium effects are outside it (see the
1345: [claim-and-estimand-contract](../research/claim-and-estimand-contract.md)).
1346: 
1347: **Epistemically, this is one team's self-critiqued design.** The
1348: adversarial corpus was produced by the same research effort it attacks,
1349: with AI assistance; the earlier apparatus's status-quo baseline was
1350: audit-parameterized (its parameters drawn item-by-item from published
1351: audit-institution findings, with primary-source verification still in progress), while the current symmetry gate is an uncalibrated
1352: stylized selection test — neither is calibrated to a specific PB dataset,
1353: and the remaining parameters are plausible rather than measured; and no
1354: pilot has been run. The three missing validations — independent expert
1355: attack, calibration to empirical PB data, and a bounded tutored pilot
1356: (sports-sector, one municipality) — are the research program's next
1357: phase, in that order.
1358: 
1359: ## 9. Implementation pathway
1360: 
1361: The architecture is built for gradual, revocable adoption, and this
1362: section is explicit about what it does and does not claim: the paper's
1363: question — can the two-hundred-year-old allocation architecture be
1364: re-architected with today's technology — is answered at the level of a
1365: buildable design and a conditional selection-mechanism *direction*,
1366: independently of whether any authority chooses to deploy. It does **not**
1367: answer *by how much* real-world delivered value would improve: that is a
1368: separately identified estimand left to independent review, empirical
1369: calibration, and a bounded pilot (§8). What follows is the pathway for an
1370: authority that chooses to deploy. A country opens
1371: one public function (the reference pilot is municipal sports
1372: infrastructure), migrates a small budget share under a tutored operating
1373: mode, and retains admissibility review — with every tutored decision and
1374: delay public by construction. The pilot's default framing is prospective:
1375: instrumentation begins at adoption, the visibility gap is published as
1376: the adopter's declared starting line ("measure me from here"), and
1377: pre-adoption figures are reported separately, impersonally, and as
1378: context — the configuration under which exposing instruments have
1379: historically been adopted. Functional maturity metrics (participation
1380: mix, default-flow share, fiscalization independence rates, incumbent-
1381: resistance indicators, fiscal reliability) determine whether the deployment
1382: earns wider scope, and their trajectories, not rhetoric, answer whether
1383: distribution outperforms the local baseline. The exit condition is honest
1384: in both directions: a pilot whose indicators stagnate under incumbent
1385: throttling documents that fact publicly, which is itself information the
1386: current system never yields.
1387: 
1388: The transition between regimes is itself measured. The companion
1389: experiments (Offermann 2026b) quantify the semi-open regime of the
1390: operating-regime ladder (docs/110) — a bounded mandated envelope running on
1391: protocol autopilot beside the authority's traditional budget — as a fiscal
1392: blend: above a portfolio-granularity floor of roughly ten percent, blended
1393: verified value rises monotonically and near-linearly with the envelope
1394: share within that apparatus, from break-even near eight to ten percent
1395: upward — an earlier-apparatus contrast now subject to the retired-multiplier
1396: caveat (Section 6), not a calibrated endpoint. The transition from the status
1397: quo toward the open regime is a dial, not a leap: adoption can proceed in
1398: increments.
1399: 
1400: The same experiments measured a variable this corpus had left unregulated:
1401: *when* the authority releases budget into the allocation machinery. The
1402: resulting deployment rule: meter release against a work-in-progress ceiling
1403: calibrated to the delivery-and-verification pipeline's throughput and cycle
1404: time — never against the calendar. Calendar release freezes months of
1405: budget in escrow and saturates verification; and when verification capacity
1406: is scarce, no release policy compensates — verification capacity is the
1407: pipeline's ceiling before it is the anti-fraud instrument. The rule is
1408: conditional on a carryforward instrument (the semi-open envelope is
1409: precisely such a vehicle); under strict budget annuality it degenerates to
1410: within-year metering.
1411: 
1412: Finally, the technological premise that lowers participation costs on the
1413: citizen side (the AI tutor) applies symmetrically to the control side.
1414: Machine verification of protocolizable evidence classes multiplies
1415: fiscalization capacity, with humans as the permanent second instance —
1416: sampled re-verification with a published floor, seeded known-answer
1417: controls as the calibration and drift-detection instrument, auditing the
1418: verifier rather than competing with it — so that the machine's error rate
1419: remains measured and the human control profession remains funded from the
1420: control budget it relieves. Measured on a five-family panel of real models
1421: (Offermann 2026b), frontier models converge on good specificity and fraud
1422: detection on document-legible evidence while small local models are weaker,
1423: and evidence contracts that include objective comparison references (market
1424: benchmarks, duration bands, thresholds) let a strict verifier judge rather
1425: than guess. The machine layer reaches only document-legible, delivery-phase
1426: fraud — physical quality-below-spec and pre-contract theft remain fully
1427: human, so provenance attestation is tamper-evidence at capture, not
1428: court-grade proof, and evidentiary admissibility still needs custody, contradiction,
1429: and expert testimony. Contraposed citizen evidence — independent producers
1430: with interests opposed to the executor, whose anticipated existence deters
1431: diversion — keeps the watching distributed even as routine
1432: document-verification labor shrinks; but its strength equals the
1433: *independence* of the contributor layer, and a colluding ring that captures
1434: or silences it erases the effect. Cross-layer collusion is in fact the one
1435: adversary that bypasses the per-milestone deterrence and moves leakage by an
1436: order of magnitude (while the delivered-value advantage survives), so
1437: collusion resistance — verified beneficial ownership, contributor
1438: Sybil-resistance, and decentralization of the assigner and the audit-budget
1439: floor — is a first-class requirement ([docs/113](../docs/113_VERIFICATION_PACKAGE_AND_A043_RESOLUTION.md)), not a residual caution.
1440: 
1441: ## 10. Conclusion
1442: 
1443: For the bounded public-investment allocation problem studied here, a
1444: relevant criterion is not how faithfully an institution executes a plan
1445: but how much delivered, verified value it produces per unit of public
1446: resource (Musgrave 1959; Okun 1975) — one criterion alongside the
1447: distributional and rights constraints this model does not represent. This
1448: paper's contribution is an architecture that makes that criterion
1449: operational — and a disciplined account of exactly how far its evidence
1450: reaches. The
1451: architecture's spine is two separable questions anyone can ask. First:
1452: take the same projects, designed identically, and change only who
1453: executes and how they are watched — does the visibly audited regime with
1454: reputational consequences deliver more than the one without them? Second:
1455: hold the control layer fixed and change only which projects get funded,
1456: centrally planned or socially prioritized? In the exploratory simulation
1457: apparatus the answer to both is yes — a verified-delivery gain and a
1458: selection gain that interact rather than merely add — but those
1459: magnitudes are model-internal factorial contrasts, not calibrated
1460: effects, and we do not build the paper on them. The claim the paper
1461: actually stands on is narrower and was tested harder: a pre-registered,
1462: symmetric, selection-only gate finds the distributed-minus-central
1463: advantage positive in every cell but small (a pre-registered pooled median
1464: Δ = 0.025 of a full-information benchmark, below its pre-set 0.05
1465: research-program rebuild gate). The v1.14 robustness map then models the central as the evidence
1466: *directionally* describes it — near-blind to diffuse harm on the low-visibility long tail (Hayek 1945;
1467: Scott 1998; Olson 1965; Bandiera–Prat–Valletti 2009) — and in that source-motivated
1468: declared reference scenario coverage-routed selection recovers *decisively* more of the
1469: model's greedy reference (≈ 98% against ≈ 44%) and robustly. The two are epistemically
1470: distinct, not a reclassification: the pre-registered gate is the sole *confirmatory*
1471: computation (a NO-GO near-parity, granting the central harm-sight under sampled
1472: participation), while the v1.14 map is a subsequent *exploratory* scenario analysis under
1473: a different data-generating process; the central overtakes coverage only by abandoning
1474: the declared premises. We therefore retire the compound multiplier an earlier version
1475: reported and rest on the architecture, the qualitative mechanism, and this conditional
1476: comparative map; its magnitudes are declared reference and stress points, not
1477: calibrated impact. One model-internal result is worth carrying because it is
1478: about the delivery layer, not the multiplier: in the model, at E7's
1479: audit-informed (but not yet fully source-verified) detection intensity,
1480: detection without persistent consequences deters no diversion; what moves delivered value is the
1481: instrument the modelled status quo lacks — consequences that persist. Whether
1482: that holds in a real institution is a hypothesis for a pilot, not a result
1483: here; but the model is unambiguous that accountability without memory is
1484: bookkeeping.
1485: 
1486: The deeper point is Friedman's: a central administration spends other
1487: people's money on other people, the spending category with the least care
1488: for both cost and value (Friedman and Friedman 1980). This architecture
1489: does not answer that problem with exhortation; it re-plumbs the bucket.
1490: Planning remains — as the guiding thread that sets scopes, floors, and
1491: mandates — but the engine of value is the conversion layer: measurable
1492: promises, conditional release, independent verification, consequences that
1493: compound into reputation, and a meter on every leak. The question this
1494: paper answers is therefore not whether states should be bigger or smaller,
1495: but whether the layers of state activity that fail through information and
1496: incentive monopoly can be re-architected to fail less — and to show their
1497: failures when they do. For one such layer we have specified a complete
1498: architecture, proved the incentive conditions its mechanisms depend on,
1499: measured selection, aggregation, and delivery in simulation against a
1500: baseline the incumbent system's own auditors supplied, and subjected
1501: the whole to five rounds of documented adversarial review with an
1502: explicit integrate-or-bound discipline. The result is deliberately modest
1503: in its claims and unusually explicit about their edges: allocation quality
1504: rides on the informational quality of whatever constructs the weight
1505: vector, whose open construction is measured viable but whose honest
1506: elicitation remains the open problem; delivered value rides on
1507: verification whose market conditions must be priced; legitimacy rides on
1508: mandates the platform can record but not create. What distinguishes the
1509: proposal is that these edges are specified, monitored, and attached to
1510: named objects — which is, we argue, what it looks like when institutional
1511: design is treated as an engineering discipline rather than an ideological
1512: one.
1513: 
1514: The comparison is conditional, not ontological. A center with credible
1515: local-information channels, organized representation of diffuse losers, and low
1516: credit pressure can approach parity. Core v0's claim is that those capacities are
1517: institutional accomplishments to be *demonstrated*, not virtues to be presumed —
1518: and that a state less dependent on what its center can see, and less able to
1519: certify its own mistakes, is worth the attempt.
1520: 
1521: ## Appendix E4: the symmetric gate and the four-scenario robustness map
1522: 
1523: This appendix gives the full design of the pre-registered symmetric gate (summarized
1524: as "Quantitative status" in §6) and the complete v1.14 four-scenario robustness map
1525: (headlined in §6): the scenario table, the harm-myopia decomposition, the frontier,
1526: the benchmark theorem, and the four limits.
1527: 
1528: ### The symmetric credit-versus-coverage gate (full methods)
1529: 
1530: Because this is the paper's one confirmatory computation, its design is stated in full
1531: here rather than only by reference. Each world holds K = 500 candidate projects; for
1532: each, N = 5000 potential participants are considered, each interested with a
1533: project-specific probability, so the interested reach is at most N and endogenous.
1534: Both arms then see the
1535: same candidate pool, the same exact costs, the same truth net[j] = S[j] − h·cost[j],
1536: delivery held at **parity**, and the same report noise report = v + Normal(0, τ);
1537: each funds a **greedy** set under a budget of one-third of total project cost, is
1538: eligible to fund a project only where *its own* noisy estimate of net is positive
1539: (no oracle gate), and its delivered value is scored on the projects' *true* net.
1540: The arms are symmetric except for the coverage mechanism and its matched
1541: counterparts. *Distributed (endogenous coverage):* each interested citizen reports
1542: independently with probability p if her value v ≥ 0 and p·(1 − β) if v < 0 (adverse
1543: voice bias), giving ĥS_D = Σreports / p, ranked by estimated net per cost.
1544: *Central (competent value-reader):* an appraisal budget matched to the distributed
1545: arm's *expected* total reports in that world, spread **evenly** across projects as a
1546: rounded fixed per-project bandwidth m_C = round(expected reports / K) (so the two
1547: arms' appraisal totals are equal in expectation up to that rounding); per project it
1548: samples m_C interested citizens, observes v + Normal(0, τ), and forms its own noisy
1549: ĥNet_C = reach·mean(observed) − h·cost. It ranks by score = (1 − λ)·z(ĥNet_C/cost) + λ·z(P/cost) — its **own noisy
1550: estimate**, never the true net — where P is claimable political credit (the
1551: electoral credit-claiming and traceability logic by which visible, attributable
1552: benefits are favoured over diffuse ones; Mayhew 1974; Arnold 1990) and λ is bounded
1553: credit pressure (a *posited* pressure whose real-world magnitude must be measured,
1554: not assumed). Credit moves *ranking*, never eligibility (no knowingly
1555: value-destroying planner). The legitimate asymmetries are therefore only these:
1556: distributed reports self-route to projects citizens care about while negative
1557: stakeholders participate less, and central appraisal is spread evenly while its
1558: ranking carries credit pressure — everything else is shared. The estimand is
1559: **Δ = (D − C)/O** per world, where D, C, O are delivered true net for the
1560: distributed, central, and full-information greedy arms and O is a reference level,
1561: not an optimum. The frozen grid sweeps λ ∈ {0, 0.1, 0.2, 0.3} (λ = 0 a negative
1562: control), a latent-correlation setting ρ ∈ {0, 0.5, 1} (realized corr(S, P) ≈ 0.00,
1563: 0.30, 0.82), and h ∈ {1.5, 2.5, 4} over 100 seeded worlds, in a baseline
1564: observation regime (p = .35, β = .30, τ = .5) and a matched-budget low-information
1565: stress regime (p = .15, β = .60, τ = 1.0). The **pre-registered decision rule** —
1566: frozen before running and designed by the independent auditor to be adversarial —
1567: required, for a GO on rebuilding the quantitative engine, at least 15 of the 18
1568: primary cells with mean Δ > 0, a pooled **median Δ ≥ 0.05**, a bootstrap lower
1569: bound > 0, and median Δ ≥ 0 under the stress regime, plus a guard to pause if the
1570: λ = 0 control itself exceeded 0.05. The result was **NO-GO**: the advantage was
1571: positive in all 18 primary cells, but the pre-registered pooled **median Δ = 0.025**,
1572: below the 0.05 rebuild gate; the λ = 0 negative control sat at ≈ 0.016, within the
1573: pause guard (no hidden asymmetry flagged). A **post-hoc** world-cluster
1574: ratio-of-sums estimate was Δ = 0.026 [0.023, 0.029] (Monte-Carlo uncertainty on the
1575: simulated data-generating process, reported separately from the median). The
1576: advantage rises with credit pressure λ and falls as credit aligns with value — the
1577: credit-versus-coverage mechanism — but it is small, which is why the calibrated
1578: multiplier is retired and the paper rests on the architecture and the mechanism
1579: direction, now sharpened by the robustness map below.
1580: 
1581: ### The four-scenario robustness map (v1.14)
1582: 
1583: The pre-registered gate above equips the central arm with competent, *harm-aware*
1584: appraisal. A v1.14 extension asks the empirically-grounded question: what happens when
1585: the central is modelled as the evidence describes it — **near-blind to diffuse harm on
1586: the low-visibility long tail**? That near-blindness is over-determined by the
1587: literature: the knowledge problem (Hayek 1945), state legibility (Scott 1998), diffuse
1588: costs politically under-weighted (Olson 1965; Schattschneider 1960; Wilson 1973), 83%
1589: of government waste being *passive* rather than chosen (Bandiera, Prat and Valletti
1590: 2009), the seen-versus-unseen (Bastiat 1850), and agenda control (Bachrach and Baratz
1591: 1962). The model realizes it as a salience-gated harm term,
1592: M_C = a + b·S⁺ + w·(v_p − S⁺) − b_H·s(V)·H + η, whose harm-detection s(V) rises with a
1593: project's visibility, while the distributed arm registers harm across the whole
1594: distribution. **Net-allocation participation is universal by architecture (p = 1)** —
1595: in Core v0 profiles and delegates allocate on behalf of the passive, so it is a *fact*,
1596: not a low participatory-budgeting turnout. Its *signal quality* is an anchored
1597: composition: ~5% active direct reports (the single-digit turnout figure), ~35%
1598: microdelegation (individual signal, revocable — Kling et al. 2015), and ~60% profile
1599: rules (a high-alignment category default, since people overwhelmingly keep defaults —
1600: Samuelson and Zeckhauser 1988). Full literature anchoring of every calibration knob is
1601: in `research/e4-calibration-literature-anchors.md`. Scoring delivery on true value,
1602: four declared scenarios (plus one diagnostic contrast) map where each institution
1603: stands, as the signed fraction of the full-information greedy benchmark, parity at zero
1604: (`npm run e4:scenarios`):
1605: 
1606: | scenario (assumptions) | m ± 95% CI | Core v0 | central | winner |
1607: |---|---|---|---|---|
1608: | **Probable — the declared reference scenario** (central myopic to diffuse harm, projecting, credit-tilted; distributed on its anchored coverage composition) | **+54.0%** [+53.2, +54.8] | 98.2% | 44.2% | **Core v0 (decisive)** |
1609: | **Harm-myopia only** (diagnostic contrast: probable, changing ONLY the two harm-gate coordinates) | **+37.6%** [+37.0, +38.2] | 98.2% | 60.6% | Core v0 |
1610: | **No-myopia bundle** — probable, but the central is granted harm-sight + unbiasedness + precision + no credit | **+13.8%** [+13.5, +14.1] | 98.6% | 84.8% | Core v0 |
1611: | **Distributed's favourable case** | **+205.2%** [+202.9, +208.1] | 95.6% | −109.6% | Core v0 |
1612: | **Central's declared favourable endpoint** (a residually-imperfect reader on a near-harmless world) | **−2.3%** [−2.5, −2.2] | 95.3% | 97.6% | central (immaterial) |
1613: 
1614: **The anchored result is decisive and robust.** Under the **declared reference
1615: scenario** the distributed arm delivers ≈ 98.2% of the benchmark and the central
1616: ≈ 44.2% — a +54-point gap — and coverage wins across essentially the whole anchored
1617: parameter space. Turning off harm-myopia *alone* (the two harm-gate coordinates)
1618: recovers about **41%** of the gap (16.4 of a 40.2-point decline); granting the central
1619: the *full* competent-but-harm-aware bundle recovers the rest yet still leaves coverage
1620: ahead (**≈ +13.8%**) — so even a central idealized in every way *except* the harm-sight
1621: the literature denies it still loses. The central pulls narrowly ahead only by
1622: **abandoning the declared premises**: a corrected reader (no myopia — against
1623: Hayek/Scott/Olson/Bandiera; no projection — against Broockman and Skovron 2018) on a
1624: near-harmless world reaches only ≈ −3%, a marginal, anti-empirical corner. That corner
1625: is reported **symmetrically** with the distributed arm's *equally-idealized* corner —
1626: built to mirror the same recipe: perfect distributed signal on a harm-rich world with
1627: the central kept at its *anchored* myopia — which reaches **≈ +118%** (the broader
1628: `PRO-DIST` scenario in the table, +205%, is more favourable still because it *also*
1629: degrades the central below its anchored level). Idealization is wildly asymmetric, and
1630: neither corner is empirically grounded. The one
1631: sensitivity that materially shrinks the anchored gap is **correlated / common-mode
1632: error** on the profile-and-delegation share (a shared platform/recommender, or
1633: delegation concentrated on super-delegates — Kling et al. 2015): it takes ≈ +54% down
1634: to ≈ +44% (modest) and ≈ +26% (strong), crossing parity only at a large shared-error
1635: level (σ_cm ≈ 2.1). No single-factor slice flips the winner over its plausible range;
1636: the combined ceteris-paribus path from the declared reference to the fully-idealized
1637: central endpoint crosses parity only at **t ≈ 0.92 of the declared segment**. This is
1638: local, ceteris-paribus curve evidence — six one-factor slices plus one declared combined
1639: path — not an exhaustive global frontier; a joint Sobol / Latin-hypercube sweep of the
1640: full parameter space is deferred to future work. These magnitudes
1641: are **declared, source-motivated reference points from a stylized comparative-
1642: institutions model — a conditional model contrast, not target-domain calibrated field
1643: effects**. The standing limits are: (i) the harm-gate's exact *magnitude* is a stylized
1644: functional form — its *direction* is strongly anchored, and the result is robust across
1645: the s_exp ∈ [1, 2.5] band (≈ +48% to ≈ +54%); (ii) the central inputs carry an
1646: unpropagated transport gap — the political-opinion evidence identifies elite–constituent
1647: *perception* error, and mapping it to project-level welfare error requires three
1648: unestimated links (opinion misperception → project scoring → portfolio choice → realized
1649: affected-party value), so those inputs are proxy-informed, not calibrated; (iii) the
1650: reported intervals are 95% conditional world-bootstrap intervals at *fixed* scenario
1651: inputs — finite-world simulation uncertainty only, excluding uncertainty in parameter
1652: values, literature transport, functional form, and field implementation; the distributed
1653: arm's independent-plus-common-mode error is its one structural sensitivity (above); and
1654: (iv) administrative cost and leakage are separate *multiplicative* value-preservation
1655: channels (with their interaction reported explicitly), deliberately off here — E5 (the
1656: companion layered framework) turns them on. The
1657: reproducible scenarios, frontier, evidence, theorem, and full literature anchoring are
1658: in `scripts/simulation/e4-v5/`, `research/e4-parity-theorem.md`, and
1659: `research/e4-calibration-literature-anchors.md`.
1660: 
1661: ### E4 calibration targets
1662: 
1663: The E4-v4/v5 magnitudes are model-internal; the table names, for each parameter, the
1664: real dataset that *could* inform it — making the boundary between model-internal and
1665: empirically-anchored a visible line rather than a caveat buried in prose (details in
1666: `research/e4-calibration-targets.md`). The central %-benchmark is an *output* the
1667: model computes, but mapping it to observed realized-to-appraised ratios is **not a
1668: direct overlay**: the two are different constructs (§6), so it is a **candidate
1669: validation target requiring an explicit construct bridge**, not a one-step
1670: calibration.
1671: 
1672: | Model quantity | Model value | Real-world proxy | Candidate dataset(s) | Status |
1673: |---|---|---|---|---|
1674: | central %-benchmark | 44–85% | realized ÷ appraised value | World Bank IEG ratings; Flyvbjerg megaproject DB | candidate target; needs an explicit construct mapping |
1675: | η (harm-blindness) | 0–0.5 | passive vs active waste share | Bandiera-Prat-Valletti 2009 (83% passive, setting-specific: Italian standardized-goods procurement) | anchored-direction |
1676: | β (voice inequality) | 0.2–0.5 | PB participation bias | NYC / Paris / Porto Alegre; Decidim / Consul | calibratable |
1677: | q, m (detection) | q ≈ 0.5–1%, m in hundreds | complaint / whistleblowing rates | FTC Consumer Sentinel; NYC 311; Dyck et al. 2010 | calibratable |
1678: | λ threshold | central ≈ 0.10 | procurement rents / bribe depth | Olken 2007; WB Enterprise Surveys | calibratable |
1679: | penalty f | equal both sides | legal sanction scale | held equal (conservative) | scope choice |
1680: 
1681: The v1.14 four-scenario map (above; headlined in §6) makes the same anchoring explicit for its harm-myopia model: the visibility long
1682: tail is source-motivated by heavy-tailed public procurement (Skuhrovec et al. 2013), participation by
1683: participatory-budgeting turnout, and the harm-detection gate by the agenda-setting/salience literature; the
1684: per-knob anchors and their strength are recorded in `research/e4-plausible-anchors.md`, with the reproducible
1685: scenarios, frontier, and theorem in `scripts/simulation/e4-v5/` and `research/e4-parity-theorem.md`.
1686: 
1687: ## References
1688: 
1689: - Akerlof, G. (1970). "The Market for 'Lemons': Quality Uncertainty and the Market Mechanism." *Quarterly Journal of Economics* 84(3).
1690: - Arnold, R. D. (1990). *The Logic of Congressional Action*. Yale University Press.
1691: - Austen-Smith, D., and J. Banks (1996). "Information Aggregation, Rationality, and the Condorcet Jury Theorem." *American Political Science Review* 90(1).
1692: - Bachrach, P., and M. Baratz (1962). "Two Faces of Power." *American Political Science Review* 56(4).
1693: - Besley, T., and S. Coate (2003). "Centralized versus Decentralized Provision of Local Public Goods: A Political Economy Approach." *Journal of Public Economics* 87(12).
1694: - Baiocchi, G., and E. Ganuza (2017). *Popular Democracy: The Paradox of Participation*. Stanford University Press.
1695: - Bandiera, O., A. Prat, and T. Valletti (2009). "Active and Passive Waste in Government Spending: Evidence from a Policy Experiment." *American Economic Review* 99(4).
1696: - Bastiat, F. (1850). *Ce qu'on voit et ce qu'on ne voit pas* [What Is Seen and What Is Not Seen]. Paris.
1697: - Becker, G. (1968). "Crime and Punishment: An Economic Approach." *Journal of Political Economy* 76(2).
1698: - Becker, G., and G. Stigler (1974). "Law Enforcement, Malfeasance, and Compensation of Enforcers." *Journal of Legal Studies* 3(1).
1699: - Bikhchandani, S., D. Hirshleifer, and I. Welch (1992). "A Theory of Fads, Fashion, Custom, and Cultural Change as Informational Cascades." *Journal of Political Economy* 100(5).
1700: - Brennan, J. (2016). *Against Democracy*. Princeton University Press.
1701: - Broockman, D., and C. Skovron (2018). "Bias in Perceptions of Public Opinion among Political Elites." *American Political Science Review* 112(3).
1702: - Blum, C., and C. I. Zuber (2016). "Liquid Democracy: Potentials, Problems, and Perspectives." *Journal of Political Philosophy* 24(2).
1703: - Bovens, M. (2007). "Analysing and Assessing Accountability: A Conceptual Framework." *European Law Journal* 13(4).
1704: - Buchanan, J., and G. Tullock (1962). *The Calculus of Consent*. University of Michigan Press.
1705: - Buterin, V., Z. Hitzig, and E. G. Weyl (2019). "A Flexible Design for Funding Public Goods." *Management Science* 65(11).
1706: - Campbell, D. (1976). "Assessing the Impact of Planned Social Change." Occasional Paper 8, Dartmouth College.
1707: - Casella, A. (2012). *Storable Votes: Protecting the Minority Voice*. Oxford University Press.
1708: - Coase, R. (1937). "The Nature of the Firm." *Economica* 4(16).
1709: - Condorcet, M. de (1785). *Essai sur l'application de l'analyse à la probabilité des décisions rendues à la pluralité des voix*. Imprimerie Royale.
1710: - De Filippi, P., and A. Wright (2018). *Blockchain and the Law: The Rule of Code*. Harvard University Press.
1711: - Demsetz, H. (1969). "Information and Efficiency: Another Viewpoint." *Journal of Law and Economics* 12(1).
1712: - Downs, A. (1957). *An Economic Theory of Democracy*. Harper.
1713: - Dulleck, U., and R. Kerschbamer (2006). "On Doctors, Mechanics, and Computer Specialists: The Economics of Credence Goods." *Journal of Economic Literature* 44(1).
1714: - Dyck, A., A. Morse, and L. Zingales (2010). "Who Blows the Whistle on Corporate Fraud?" *Journal of Finance* 65(6).
1715: - Epstein, R. (1995). *Simple Rules for a Complex World*. Harvard University Press.
1716: - Ferraz, C., and F. Finan (2008). "Exposing Corrupt Politicians: The Effects of Brazil's Publicly Released Audits on Electoral Outcomes." *Quarterly Journal of Economics* 123(2).
1717: - Flyvbjerg, B., N. Bruzelius, and W. Rothengatter (2003). *Megaprojects and Risk: An Anatomy of Ambition*. Cambridge University Press.
1718: - Friedman, M. (1962). *Capitalism and Freedom*. University of Chicago Press.
1719: - Friedman, M., and R. Friedman (1980). *Free to Choose*. Harcourt.
1720: - Einstein, K. L., M. Palmer, and D. M. Glick (2019). *Neighborhood Defenders: Participatory Politics and America's Housing Crisis*. Cambridge University Press.
1721: - Fung, A., and E. O. Wright (2003). *Deepening Democracy: Institutional Innovations in Empowered Participatory Governance*. Verso.
1722: - Gaus, G. (2011). *The Order of Public Reason*. Cambridge University Press.
1723: - Gibbard, A. (1973). "Manipulation of Voting Schemes: A General Result." *Econometrica* 41(4).
1724: - Gonçalves, S. (2014). "The Effects of Participatory Budgeting on Municipal Expenditures and Infant Mortality in Brazil." *World Development* 53.
1725: - Goodhart, C. (1975). "Problems of Monetary Management: The UK Experience." *Papers in Monetary Economics*, Reserve Bank of Australia.
1726: - Green, J., and J.-J. Laffont (1979). *Incentives in Public Decision-Making*. North-Holland.
1727: - Hayek, F. (1945). "The Use of Knowledge in Society." *American Economic Review* 35(4).
1728: - Hirschman, A. (1970). *Exit, Voice, and Loyalty*. Harvard University Press.
1729: - Holmström, B. (1979). "Moral Hazard and Observability." *Bell Journal of Economics* 10(1).
1730: - Holmström, B. (1999). "Managerial Incentive Problems: A Dynamic Perspective." *Review of Economic Studies* 66(1).
1731: - Jensen, M., and W. Meckling (1976). "Theory of the Firm: Managerial Behavior, Agency Costs and Ownership Structure." *Journal of Financial Economics* 3(4).
1732: - Kahng, A., S. Mackenzie, and A. Procaccia (2018). "Liquid Democracy: An Algorithmic Perspective." *AAAI*.
1733: - Kydland, F., and E. Prescott (1977). "Rules Rather than Discretion: The Inconsistency of Optimal Plans." *Journal of Political Economy* 85(3).
1734: - Kling, C. C., J. Kunegis, H. Hartmann, M. Strohmaier, and S. Staab (2015). "Voting Behaviour and Power in Online Democracy: A Study of LiquidFeedback in Germany's Pirate Party." arXiv:1503.07723.
1735: - Laffont, J.-J., and J. Tirole (1991). "The Politics of Government Decision-Making: A Theory of Regulatory Capture." *Quarterly Journal of Economics* 106(4).
1736: - Lalley, S., and E. G. Weyl (2018). "Quadratic Voting: How Mechanism Design Can Radicalize Democracy." *AEA Papers and Proceedings* 108.
1737: - Landemore, H. (2020). *Open Democracy: Reinventing Popular Rule for the Twenty-First Century*. Princeton University Press.
1738: - Mayhew, D. (1974). *Congress: The Electoral Connection*. Yale University Press.
1739: - Lipsey, R., and K. Lancaster (1956). "The General Theory of Second Best." *Review of Economic Studies* 24(1).
1740: - Lukes, S. (1974). *Power: A Radical View*. Macmillan.
1741: - Lupia, A., and M. McCubbins (1998). *The Democratic Dilemma: Can Citizens Learn What They Need to Know?* Cambridge University Press.
1742: - Musgrave, R. (1959). *The Theory of Public Finance*. McGraw-Hill.
1743: - Michels, R. (1911). *Political Parties: A Sociological Study of the Oligarchical Tendencies of Modern Democracy*.
1744: - Mises, L. von (1920). "Economic Calculation in the Socialist Commonwealth." Translated in F. Hayek, ed., *Collectivist Economic Planning* (1935).
1745: - Noelle-Neumann, E. (1974). "The Spiral of Silence: A Theory of Public Opinion." *Journal of Communication* 24(2).
1746: - Nozick, R. (1974). *Anarchy, State, and Utopia*. Basic Books.
1747: - Oates, W. (1972). *Fiscal Federalism*. Harcourt Brace Jovanovich.
1748: - Offermann, M. (2026b). "Stress-Testing a Distributed Public-Resource Governance Architecture: Adversarial and Behavioral Agent-Based Evidence." Companion computational-experiments paper and repository, concept doi:10.5281/zenodo.21246088 (always resolves to the latest version).
1749: - Okun, A. (1975). *Equality and Efficiency: The Big Tradeoff*. Brookings Institution.
1750: - Olken, B. (2007). "Monitoring Corruption: Evidence from a Field Experiment in Indonesia." *Journal of Political Economy* 115(2).
1751: - North, D., and B. Weingast (1989). "Constitutions and Commitment: The Evolution of Institutions Governing Public Choice in Seventeenth-Century England." *Journal of Economic History* 49(4).
1752: - Olson, M. (1965). *The Logic of Collective Action*. Harvard University Press.
1753: - Olson, M. (1982). *The Rise and Decline of Nations*. Yale University Press.
1754: - Ostrom, E. (1990). *Governing the Commons: The Evolution of Institutions for Collective Action*. Cambridge University Press.
1755: - Peixoto, T., and J. Fox (2016). "When Does ICT-Enabled Citizen Voice Lead to Government Responsiveness?" *IDS Bulletin* 47(1).
1756: - Power, M. (1997). *The Audit Society: Rituals of Verification*. Oxford University Press.
1757: - Reinikka, R., and J. Svensson (2004). "Local Capture: Evidence from a Central Government Transfer Program in Uganda." *Quarterly Journal of Economics* 119(2).
1758: - Rosanvallon, P. (2008). *Counter-Democracy: Politics in an Age of Distrust*. Cambridge University Press.
1759: - Salganik, M., P. Dodds, and D. Watts (2006). "Experimental Study of Inequality and Unpredictability in an Artificial Cultural Market." *Science* 311(5762).
1760: - Samuelson, P. (1954). "The Pure Theory of Public Expenditure." *Review of Economics and Statistics* 36(4).
1761: - Samuelson, W., and R. Zeckhauser (1988). "Status Quo Bias in Decision Making." *Journal of Risk and Uncertainty* 1(1).
1762: - Satterthwaite, M. (1975). "Strategy-Proofness and Arrow's Conditions: Existence and Correspondence Theorems for Voting Procedures and Social Welfare Functions." *Journal of Economic Theory* 10(2).
1763: - Schattschneider, E. E. (1960). *The Semisovereign People*. Holt, Rinehart and Winston.
1764: - Scott, J. (1998). *Seeing Like a State: How Certain Schemes to Improve the Human Condition Have Failed*. Yale University Press.
1765: - Sen, A. (1999). *Development as Freedom*. Oxford University Press.
1766: - Sowell, T. (1980). *Knowledge and Decisions*. Basic Books.
1767: - Skuhrovec, J., et al. (2013). "Exponential and power laws in public procurement markets." arXiv:1309.0218.
1768: - Stigler, G. (1971). "The Theory of Economic Regulation." *Bell Journal of Economics and Management Science* 2(1).
1769: - Stokes, S. (2005). "Perverse Accountability: A Formal Model of Machine Politics with Evidence from Argentina." *American Political Science Review* 99(3).
1770: - Thompson, D. (1980). "Moral Responsibility of Public Officials: The Problem of Many Hands." *American Political Science Review* 74(4).
1771: - Tiebout, C. (1956). "A Pure Theory of Local Expenditures." *Journal of Political Economy* 64(5).
1772: - Urbinati, N. (2014). *Democracy Disfigured: Opinion, Truth, and the People*. Harvard University Press.
1773: - Vickrey, W. (1961). "Counterspeculation, Auctions, and Competitive Sealed Tenders." *Journal of Finance* 16(1).
1774: - Wampler, B. (2007). *Participatory Budgeting in Brazil: Contestation, Cooperation, and Accountability*. Penn State University Press.
1775: - Williamson, O. (1985). *The Economic Institutions of Capitalism*. Free Press.
1776: - Wilson, J. Q. (1973). *Political Organizations*. Basic Books.
1777: - Wittman, D. (1989). "Why Democracies Produce Efficient Results." *Journal of Political Economy* 97(6).
1778: 
1779: ---
1780: 
1781: *Companion materials: formal proofs ([formal-models](../research/formal-models.md)),
1782: simulation code and full result tables
1783: (`scripts/simulation/allocation-sim.mjs`,
1784: [simulation-results](../research/simulation-results.md)), the audit-institution evidence base
1785: ([audit-evidence-base](../research/audit-evidence-base.md)), the architecture corpus (`docs/`,
1786: `knowledge/`), and the complete adversarial record (`attacks/`,
1787: `defenses/`, accepted resolutions `docs/67`–`docs/113`; all forty-three
1788: attacks resolved and propagated, except the manuscript-review round's
1789: D037–D040, whose corpus propagation is tracked).*

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$lines = Get-Content -LiteralPath '"'drafts/paper.md'; for ("'$i=1440; $i -lt 1660; $i++) { '"'{0,4}: {1}' -f ("'$i+1), $lines[$i] }' in C:\devel\claude-projects\distributed-governance-research
 succeeded in 177ms:
1441: ## 10. Conclusion
1442: 
1443: For the bounded public-investment allocation problem studied here, a
1444: relevant criterion is not how faithfully an institution executes a plan
1445: but how much delivered, verified value it produces per unit of public
1446: resource (Musgrave 1959; Okun 1975) — one criterion alongside the
1447: distributional and rights constraints this model does not represent. This
1448: paper's contribution is an architecture that makes that criterion
1449: operational — and a disciplined account of exactly how far its evidence
1450: reaches. The
1451: architecture's spine is two separable questions anyone can ask. First:
1452: take the same projects, designed identically, and change only who
1453: executes and how they are watched — does the visibly audited regime with
1454: reputational consequences deliver more than the one without them? Second:
1455: hold the control layer fixed and change only which projects get funded,
1456: centrally planned or socially prioritized? In the exploratory simulation
1457: apparatus the answer to both is yes — a verified-delivery gain and a
1458: selection gain that interact rather than merely add — but those
1459: magnitudes are model-internal factorial contrasts, not calibrated
1460: effects, and we do not build the paper on them. The claim the paper
1461: actually stands on is narrower and was tested harder: a pre-registered,
1462: symmetric, selection-only gate finds the distributed-minus-central
1463: advantage positive in every cell but small (a pre-registered pooled median
1464: Δ = 0.025 of a full-information benchmark, below its pre-set 0.05
1465: research-program rebuild gate). The v1.14 robustness map then models the central as the evidence
1466: *directionally* describes it — near-blind to diffuse harm on the low-visibility long tail (Hayek 1945;
1467: Scott 1998; Olson 1965; Bandiera–Prat–Valletti 2009) — and in that source-motivated
1468: declared reference scenario coverage-routed selection recovers *decisively* more of the
1469: model's greedy reference (≈ 98% against ≈ 44%) and robustly. The two are epistemically
1470: distinct, not a reclassification: the pre-registered gate is the sole *confirmatory*
1471: computation (a NO-GO near-parity, granting the central harm-sight under sampled
1472: participation), while the v1.14 map is a subsequent *exploratory* scenario analysis under
1473: a different data-generating process; the central overtakes coverage only by abandoning
1474: the declared premises. We therefore retire the compound multiplier an earlier version
1475: reported and rest on the architecture, the qualitative mechanism, and this conditional
1476: comparative map; its magnitudes are declared reference and stress points, not
1477: calibrated impact. One model-internal result is worth carrying because it is
1478: about the delivery layer, not the multiplier: in the model, at E7's
1479: audit-informed (but not yet fully source-verified) detection intensity,
1480: detection without persistent consequences deters no diversion; what moves delivered value is the
1481: instrument the modelled status quo lacks — consequences that persist. Whether
1482: that holds in a real institution is a hypothesis for a pilot, not a result
1483: here; but the model is unambiguous that accountability without memory is
1484: bookkeeping.
1485: 
1486: The deeper point is Friedman's: a central administration spends other
1487: people's money on other people, the spending category with the least care
1488: for both cost and value (Friedman and Friedman 1980). This architecture
1489: does not answer that problem with exhortation; it re-plumbs the bucket.
1490: Planning remains — as the guiding thread that sets scopes, floors, and
1491: mandates — but the engine of value is the conversion layer: measurable
1492: promises, conditional release, independent verification, consequences that
1493: compound into reputation, and a meter on every leak. The question this
1494: paper answers is therefore not whether states should be bigger or smaller,
1495: but whether the layers of state activity that fail through information and
1496: incentive monopoly can be re-architected to fail less — and to show their
1497: failures when they do. For one such layer we have specified a complete
1498: architecture, proved the incentive conditions its mechanisms depend on,
1499: measured selection, aggregation, and delivery in simulation against a
1500: baseline the incumbent system's own auditors supplied, and subjected
1501: the whole to five rounds of documented adversarial review with an
1502: explicit integrate-or-bound discipline. The result is deliberately modest
1503: in its claims and unusually explicit about their edges: allocation quality
1504: rides on the informational quality of whatever constructs the weight
1505: vector, whose open construction is measured viable but whose honest
1506: elicitation remains the open problem; delivered value rides on
1507: verification whose market conditions must be priced; legitimacy rides on
1508: mandates the platform can record but not create. What distinguishes the
1509: proposal is that these edges are specified, monitored, and attached to
1510: named objects — which is, we argue, what it looks like when institutional
1511: design is treated as an engineering discipline rather than an ideological
1512: one.
1513: 
1514: The comparison is conditional, not ontological. A center with credible
1515: local-information channels, organized representation of diffuse losers, and low
1516: credit pressure can approach parity. Core v0's claim is that those capacities are
1517: institutional accomplishments to be *demonstrated*, not virtues to be presumed —
1518: and that a state less dependent on what its center can see, and less able to
1519: certify its own mistakes, is worth the attempt.
1520: 
1521: ## Appendix E4: the symmetric gate and the four-scenario robustness map
1522: 
1523: This appendix gives the full design of the pre-registered symmetric gate (summarized
1524: as "Quantitative status" in §6) and the complete v1.14 four-scenario robustness map
1525: (headlined in §6): the scenario table, the harm-myopia decomposition, the frontier,
1526: the benchmark theorem, and the four limits.
1527: 
1528: ### The symmetric credit-versus-coverage gate (full methods)
1529: 
1530: Because this is the paper's one confirmatory computation, its design is stated in full
1531: here rather than only by reference. Each world holds K = 500 candidate projects; for
1532: each, N = 5000 potential participants are considered, each interested with a
1533: project-specific probability, so the interested reach is at most N and endogenous.
1534: Both arms then see the
1535: same candidate pool, the same exact costs, the same truth net[j] = S[j] − h·cost[j],
1536: delivery held at **parity**, and the same report noise report = v + Normal(0, τ);
1537: each funds a **greedy** set under a budget of one-third of total project cost, is
1538: eligible to fund a project only where *its own* noisy estimate of net is positive
1539: (no oracle gate), and its delivered value is scored on the projects' *true* net.
1540: The arms are symmetric except for the coverage mechanism and its matched
1541: counterparts. *Distributed (endogenous coverage):* each interested citizen reports
1542: independently with probability p if her value v ≥ 0 and p·(1 − β) if v < 0 (adverse
1543: voice bias), giving ĥS_D = Σreports / p, ranked by estimated net per cost.
1544: *Central (competent value-reader):* an appraisal budget matched to the distributed
1545: arm's *expected* total reports in that world, spread **evenly** across projects as a
1546: rounded fixed per-project bandwidth m_C = round(expected reports / K) (so the two
1547: arms' appraisal totals are equal in expectation up to that rounding); per project it
1548: samples m_C interested citizens, observes v + Normal(0, τ), and forms its own noisy
1549: ĥNet_C = reach·mean(observed) − h·cost. It ranks by score = (1 − λ)·z(ĥNet_C/cost) + λ·z(P/cost) — its **own noisy
1550: estimate**, never the true net — where P is claimable political credit (the
1551: electoral credit-claiming and traceability logic by which visible, attributable
1552: benefits are favoured over diffuse ones; Mayhew 1974; Arnold 1990) and λ is bounded
1553: credit pressure (a *posited* pressure whose real-world magnitude must be measured,
1554: not assumed). Credit moves *ranking*, never eligibility (no knowingly
1555: value-destroying planner). The legitimate asymmetries are therefore only these:
1556: distributed reports self-route to projects citizens care about while negative
1557: stakeholders participate less, and central appraisal is spread evenly while its
1558: ranking carries credit pressure — everything else is shared. The estimand is
1559: **Δ = (D − C)/O** per world, where D, C, O are delivered true net for the
1560: distributed, central, and full-information greedy arms and O is a reference level,
1561: not an optimum. The frozen grid sweeps λ ∈ {0, 0.1, 0.2, 0.3} (λ = 0 a negative
1562: control), a latent-correlation setting ρ ∈ {0, 0.5, 1} (realized corr(S, P) ≈ 0.00,
1563: 0.30, 0.82), and h ∈ {1.5, 2.5, 4} over 100 seeded worlds, in a baseline
1564: observation regime (p = .35, β = .30, τ = .5) and a matched-budget low-information
1565: stress regime (p = .15, β = .60, τ = 1.0). The **pre-registered decision rule** —
1566: frozen before running and designed by the independent auditor to be adversarial —
1567: required, for a GO on rebuilding the quantitative engine, at least 15 of the 18
1568: primary cells with mean Δ > 0, a pooled **median Δ ≥ 0.05**, a bootstrap lower
1569: bound > 0, and median Δ ≥ 0 under the stress regime, plus a guard to pause if the
1570: λ = 0 control itself exceeded 0.05. The result was **NO-GO**: the advantage was
1571: positive in all 18 primary cells, but the pre-registered pooled **median Δ = 0.025**,
1572: below the 0.05 rebuild gate; the λ = 0 negative control sat at ≈ 0.016, within the
1573: pause guard (no hidden asymmetry flagged). A **post-hoc** world-cluster
1574: ratio-of-sums estimate was Δ = 0.026 [0.023, 0.029] (Monte-Carlo uncertainty on the
1575: simulated data-generating process, reported separately from the median). The
1576: advantage rises with credit pressure λ and falls as credit aligns with value — the
1577: credit-versus-coverage mechanism — but it is small, which is why the calibrated
1578: multiplier is retired and the paper rests on the architecture and the mechanism
1579: direction, now sharpened by the robustness map below.
1580: 
1581: ### The four-scenario robustness map (v1.14)
1582: 
1583: The pre-registered gate above equips the central arm with competent, *harm-aware*
1584: appraisal. A v1.14 extension asks the empirically-grounded question: what happens when
1585: the central is modelled as the evidence describes it — **near-blind to diffuse harm on
1586: the low-visibility long tail**? That near-blindness is over-determined by the
1587: literature: the knowledge problem (Hayek 1945), state legibility (Scott 1998), diffuse
1588: costs politically under-weighted (Olson 1965; Schattschneider 1960; Wilson 1973), 83%
1589: of government waste being *passive* rather than chosen (Bandiera, Prat and Valletti
1590: 2009), the seen-versus-unseen (Bastiat 1850), and agenda control (Bachrach and Baratz
1591: 1962). The model realizes it as a salience-gated harm term,
1592: M_C = a + b·S⁺ + w·(v_p − S⁺) − b_H·s(V)·H + η, whose harm-detection s(V) rises with a
1593: project's visibility, while the distributed arm registers harm across the whole
1594: distribution. **Net-allocation participation is universal by architecture (p = 1)** —
1595: in Core v0 profiles and delegates allocate on behalf of the passive, so it is a *fact*,
1596: not a low participatory-budgeting turnout. Its *signal quality* is an anchored
1597: composition: ~5% active direct reports (the single-digit turnout figure), ~35%
1598: microdelegation (individual signal, revocable — Kling et al. 2015), and ~60% profile
1599: rules (a high-alignment category default, since people overwhelmingly keep defaults —
1600: Samuelson and Zeckhauser 1988). Full literature anchoring of every calibration knob is
1601: in `research/e4-calibration-literature-anchors.md`. Scoring delivery on true value,
1602: four declared scenarios (plus one diagnostic contrast) map where each institution
1603: stands, as the signed fraction of the full-information greedy benchmark, parity at zero
1604: (`npm run e4:scenarios`):
1605: 
1606: | scenario (assumptions) | m ± 95% CI | Core v0 | central | winner |
1607: |---|---|---|---|---|
1608: | **Probable — the declared reference scenario** (central myopic to diffuse harm, projecting, credit-tilted; distributed on its anchored coverage composition) | **+54.0%** [+53.2, +54.8] | 98.2% | 44.2% | **Core v0 (decisive)** |
1609: | **Harm-myopia only** (diagnostic contrast: probable, changing ONLY the two harm-gate coordinates) | **+37.6%** [+37.0, +38.2] | 98.2% | 60.6% | Core v0 |
1610: | **No-myopia bundle** — probable, but the central is granted harm-sight + unbiasedness + precision + no credit | **+13.8%** [+13.5, +14.1] | 98.6% | 84.8% | Core v0 |
1611: | **Distributed's favourable case** | **+205.2%** [+202.9, +208.1] | 95.6% | −109.6% | Core v0 |
1612: | **Central's declared favourable endpoint** (a residually-imperfect reader on a near-harmless world) | **−2.3%** [−2.5, −2.2] | 95.3% | 97.6% | central (immaterial) |
1613: 
1614: **The anchored result is decisive and robust.** Under the **declared reference
1615: scenario** the distributed arm delivers ≈ 98.2% of the benchmark and the central
1616: ≈ 44.2% — a +54-point gap — and coverage wins across essentially the whole anchored
1617: parameter space. Turning off harm-myopia *alone* (the two harm-gate coordinates)
1618: recovers about **41%** of the gap (16.4 of a 40.2-point decline); granting the central
1619: the *full* competent-but-harm-aware bundle recovers the rest yet still leaves coverage
1620: ahead (**≈ +13.8%**) — so even a central idealized in every way *except* the harm-sight
1621: the literature denies it still loses. The central pulls narrowly ahead only by
1622: **abandoning the declared premises**: a corrected reader (no myopia — against
1623: Hayek/Scott/Olson/Bandiera; no projection — against Broockman and Skovron 2018) on a
1624: near-harmless world reaches only ≈ −3%, a marginal, anti-empirical corner. That corner
1625: is reported **symmetrically** with the distributed arm's *equally-idealized* corner —
1626: built to mirror the same recipe: perfect distributed signal on a harm-rich world with
1627: the central kept at its *anchored* myopia — which reaches **≈ +118%** (the broader
1628: `PRO-DIST` scenario in the table, +205%, is more favourable still because it *also*
1629: degrades the central below its anchored level). Idealization is wildly asymmetric, and
1630: neither corner is empirically grounded. The one
1631: sensitivity that materially shrinks the anchored gap is **correlated / common-mode
1632: error** on the profile-and-delegation share (a shared platform/recommender, or
1633: delegation concentrated on super-delegates — Kling et al. 2015): it takes ≈ +54% down
1634: to ≈ +44% (modest) and ≈ +26% (strong), crossing parity only at a large shared-error
1635: level (σ_cm ≈ 2.1). No single-factor slice flips the winner over its plausible range;
1636: the combined ceteris-paribus path from the declared reference to the fully-idealized
1637: central endpoint crosses parity only at **t ≈ 0.92 of the declared segment**. This is
1638: local, ceteris-paribus curve evidence — six one-factor slices plus one declared combined
1639: path — not an exhaustive global frontier; a joint Sobol / Latin-hypercube sweep of the
1640: full parameter space is deferred to future work. These magnitudes
1641: are **declared, source-motivated reference points from a stylized comparative-
1642: institutions model — a conditional model contrast, not target-domain calibrated field
1643: effects**. The standing limits are: (i) the harm-gate's exact *magnitude* is a stylized
1644: functional form — its *direction* is strongly anchored, and the result is robust across
1645: the s_exp ∈ [1, 2.5] band (≈ +48% to ≈ +54%); (ii) the central inputs carry an
1646: unpropagated transport gap — the political-opinion evidence identifies elite–constituent
1647: *perception* error, and mapping it to project-level welfare error requires three
1648: unestimated links (opinion misperception → project scoring → portfolio choice → realized
1649: affected-party value), so those inputs are proxy-informed, not calibrated; (iii) the
1650: reported intervals are 95% conditional world-bootstrap intervals at *fixed* scenario
1651: inputs — finite-world simulation uncertainty only, excluding uncertainty in parameter
1652: values, literature transport, functional form, and field implementation; the distributed
1653: arm's independent-plus-common-mode error is its one structural sensitivity (above); and
1654: (iv) administrative cost and leakage are separate *multiplicative* value-preservation
1655: channels (with their interaction reported explicitly), deliberately off here — E5 (the
1656: companion layered framework) turns them on. The
1657: reproducible scenarios, frontier, evidence, theorem, and full literature anchoring are
1658: in `scripts/simulation/e4-v5/`, `research/e4-parity-theorem.md`, and
1659: `research/e4-calibration-literature-anchors.md`.
1660: 

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$lines = Get-Content -LiteralPath '"'audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md'; for ("'$i=0; $i -lt $lines.Count; $i++) { '"'{0,4}: {1}' -f ("'$i+1), $lines[$i] }' in C:\devel\claude-projects\distributed-governance-research
 succeeded in 188ms:
   1: # E5 re-model — Selection × Delivery on the clean E4 engine
   2: 
   3: **Date:** 2026-07-12. **Code:** `scripts/simulation/e4-v5/e5-delivery.mjs` (+ `-test.mjs`). **Runs:**
   4: `npm run e5:delivery`, `npm run e5:delivery:test`. Author intent this cycle: re-model E5 as the delivered-value
   5: experiment on the E4 base + a delivery layer, well-modeled (it was heavily questioned), **no costs** (costs are the
   6: later E10 dimension). This doc records the model, its anchors, and the honest limits.
   7: 
   8: ## Why a re-model was needed
   9: 
  10: The legacy E5 (`e5-sp-model.mjs`) collapsed delivery into a **constant fraction tied to the selection arm**
  11: (central → weak `fWeak`, distributed → verified `fVer`). That conflates the two layers: you cannot read a delivery
  12: effect that is independent of who selected. The current `e4-v5/e5-layers.mjs` is a different thing again — a
  13: default-off `κ`/`leak` scalar wrapper that is really the **cost leg (E10)**, not a delivery simulation. Neither gives
  14: the clean, separable measurement the author asked for.
  15: 
  16: ## Design — a four-cell (selection-by-delivery) experiment
  17: 
  18: Two **independent** regimes, evaluated on the **same** funded portfolios and the **same** executor draws (matched
  19: seeds), on the clean E4 v1.14 engine:
  20: 
  21: | | opaque delivery | verified delivery |
  22: |---|---|---|
  23: | **central selection** | S (status quo) | A1 (delivery effect, selection held central) |
  24: | **distributed selection** | A3 (selection effect, delivery held weak) | A2 (full architecture) |
  25: 
  26: - Selection reuses the E4 engine unchanged: central = `M_C` + credit tilt, distributed = `M_D` coverage, oracle =
  27:   true `S`. The engine was given a behaviour-preserving refactor to expose `fundedSet` (the funded index set); E4
  28:   scenarios reproduce identical seeded numbers.
  29: - Everything is normalized by the **oracle at perfect delivery** (the E4 reference `ΣO`). So a cell's value is the
  30:   fraction of the full-information, perfectly-delivered benchmark it achieves — parity at that reference, **no
  31:   compound multiplier, no ×/D-C**.
  32: 
  33: ## Delivery model (micro-founded, one-shot, deterrence ex ante)
  34: 
  35: Faithful to `research/e5-value-delivery-design.md` (Okun's leaky bucket; the Model-1 incentive condition), adapted to
  36: the one-shot E4 world (no time dimension, so no endogenous pool cycling — the reputational stake enters the incentive
  37: condition statically, which is exactly the corpus finding that **deterrence pre-empts punishment**):
  38: 
  39: - A share `pi_hon` of executors are **intrinsically honest** (deliver `1 − loss_hon`). The rest are opportunistic and
  40:   **divert iff** temptation `t ~ U(0,1)` exceeds the regime deterrent `det = p_det · [(1 − a(1 − r)) + gamma + rep]`
  41:   (`a` = up-front advance exposure, `r` = recovery, `gamma` = performance guarantee, `rep` = reputational stake).
  42: - A diverting executor loses `a(1 − r)` of the budget (the unrecovered advance) → delivers `1 − a(1 − r) − loss_hon`.
  43: - Delivered value `V = Σ_{j∈funded} S_j · f_j`. (A half-built harmful project does half its harm — consistent; the
  44:   **stolen funds' cost is 0 social value here and belongs to E10**, not this value layer.)
  45: 
  46: ### Calibration (declared, not fitted; magnitudes anchored, directions from the corpus)
  47: 
  48: | regime | `p_det` | `a` | `r` | `rep` | emergent delivered fraction | anchor |
  49: |---|---|---|---|---|---|---|
  50: | opaque | 0.10 | 0.90 | 0.00 | 0.00 | ~0.68 (leak ~32%) | IMF PIE-X public-investment inefficiency 0.20–0.30; Olken 2007 Indonesian roads 24% missing; pessimistic end reaches Reinikka & Svensson 2004 Uganda 87% |
  51: | verified | 0.75 | 0.20 | 0.50 | 0.50 | ~0.95 (leak ~5%) | milestone-gating + retention + recovery + reputational stake (corpus Models 1–2); capture-resistance from the E4-v5 capture block |
  52: 
  53: `pi_hon = 0.70`, `loss_hon = 0.05`. These live in the module's `DELIVERY` object (module-local, **not** E4 `THETA`), so
  54: the frozen E4 contract/hash is untouched.
  55: 
  56: ## Result (PROBABLE world, 1200 worlds; post-Codex calibration pi_hon=0.78, separate RNG streams)
  57: 
  58: - Selection efficiency (perfect delivery) = **the E4 numbers**: central +44.1%, distributed +98.2% (**exact** now —
  59:   worlds share the E4 estimand's PRNG stream, executors use a separate one).
  60: - Delivery efficiency: opaque +77.5% (leak 22.5%, Olken value-loss moment), verified +95.0%. Diversion incidence:
  61:   opaque 21.7%, verified 0.0% (ex-ante deterrence).
  62: - Four cells (fraction of oracle reference): S +34.2% · A1 +41.9% · A3 +76.1% · A2 +93.3%.
  63: - Main effects (pp of oracle): **delivery** +7.7% (at central) / +17.2% (at distributed); **selection** +41.9% (at
  64:   opaque) / +51.4% (at verified). **Interaction +9.4%** (positive). **Full architecture (A2 − S) +59.1% [95% CI
  65:   +58.5, +59.7].**
  66: - **Monitoring coupling (SPLIT, post-Codex):** community coverage lifts DETECTION only (mon_detect 0.05, band 0.0–0.10)
  67:   → opaque dividend just **+0.2–0.5 pp** — community eyeballs without institutional recovery barely help a weak-control
  68:   regime. With institutional recovery linkage (mon_recovery 0.20) the dividend is **+3.9 pp**. Honest finding: the
  69:   delivery gain needs the **formal recovery channel** (the verified regime / Core v0's evidence layer), not monitoring
  70:   alone. This replaced the earlier single `mon_coupling=0.35` (recovery was doing most of the work, unanchored).
  71: - **Composition: multiplicative (an accounting identity).** Actual A2 +93.3% equals σ_D·δ_verified +93.3%
  72:   exactly; the additive prediction (+83.8%) is short by the interaction. The two layers **multiply**; the positive
  73:   interaction is the level-effect signature of that composition.
  74: 
  75: ## Honest limits (for the adversarial pass)
  76: 
  77: 1. **Multiplicativity is partly structural.** Delivered fraction here depends on the regime and the executor draw but
  78:    **not** on the project's value or on which arm selected it, so `V/O = selection · delivery` holds by construction and
  79:    the interaction is the pure level term `O·Δσ·Δδ`. This is a defensible modeling choice (a milestone-gate works the
  80:    same whoever picked the project) and it matches the paper's earlier positive-interaction finding — but the
  81:    experiment **confirms and quantifies** multiplicativity under that assumption, it does not independently discover it.
  82:    A genuine super-/sub-multiplicative result would require delivery to correlate with selection (e.g. local monitoring
  83:    that travels with distributed selection) — a future refinement.
  84: 2. **One-shot, no endogenous pool.** The verified regime's reputational exclusion cannot cycle (the E4 world has no time
  85:    axis); `rep` enters statically. This understates the verified regime if anything (no learning), so it is conservative.
  86: 3. **Delivery calibration is declared, not measured.** The regime parameters are anchored in direction and band, not
  87:    fitted to a target domain; the delivered fractions are reference points, not field effects.
  88: 4. **No costs.** Administrative machinery cost (the `κ` that breaks equal-budget) is deliberately absent — that is E10.
  89: 
  90: ## Steps 1 + 2 (added 2026-07-12, commit after 1676e77)
  91: 
  92: **Step 1 — opaque-band sensitivity (`sweepOpaque`).** The status-quo leak is swept from the IMF/Olken central band
  93: (~27%) to the Uganda pessimistic extreme (~77%). Result: the delivery effect at the distributed arm and the
  94: full-architecture gain (A2 − S) grow **monotonically** (+61.6% → +83.3%) and coverage wins across the whole band — a
  95: worse status quo only widens the gain. This resolves the "opaque calibration is a single stipulated number" objection.
  96: 
  97: **Step 2 — monitoring coupling (`mon_coupling`).** Breaks the structural multiplicativity: Core v0's distributed
  98: coverage is not only a selection signal, the same citizens also **observe delivery**, lifting the distributed arm's
  99: effective detection AND recovery (`p_det_eff = p_det + c(1−p_det)`, `r_eff = r + c(1−r)`). At the anchored coverage-only
 100: band (`c = 0.15`, band 0.0–0.20 per Björkman-Svensson / Molina / MGNREGA — small and fragile) the distributed arm
 101: delivers **+4.0 pp** more than central in the OPAQUE regime (A3 +72.0% → +76.0%) — coverage **substitutes for a missing
 102: formal control layer** — and ~0 in the verified regime (already saturated: deterrence holds ex ante). So the
 103: super-multiplicative dividend is **genuine** (delivery depends on the selecting arm) and **largest where formal control
 104: is weakest**. At `c = 0` the model reduces to the exact multiplicative baseline. (Earlier draft used c=0.35, above the
 105: anchored band — corrected in the calibration round.)
 106: 
 107: This turns the honest-limit #1 (multiplicativity is structural) into a **modeled, switchable mechanism**: the
 108: experiment now shows both the pure multiplicative composition (c=0) and the genuine super-multiplicative dividend
 109: (c>0), and localizes it (weak-control regimes).
 110: 
 111: ## Magnitudes that need literature anchors (for the friendly calibration round)
 112: 
 113: Declared/plausible today; to be anchored to published sources (no field/paid data), directions already fixed:
 114: 
 115: - `mon_coupling` (community-monitoring detection + recovery lift): social-audit / community-monitoring impact evidence
 116:   (e.g. Björkman & Svensson 2009 Uganda community monitoring; Olken 2007 audits vs grassroots monitoring; India social
 117:   audits). Currently 0.35, illustrative.
 118: - opaque regime `{p_det, a, r, rep}` and `pi_hon`: the leak-band anchors (IMF PIE-X 0.20–0.30; Olken 2007 24%;
 119:   Reinikka & Svensson 2004 87%) constrain the emergent delivered fraction, but the split into detection vs advance vs
 120:   honest-share is a modeling choice needing tighter anchoring.
 121: - verified regime `{p_det, a, r, rep}`: milestone-gating / retention / clawback effectiveness; capture-resistance from
 122:   the E4-v5 block. `loss_hon` (honest production loss).
 123: 
 124: ## Verified calibration table (friendly round — calibration agent, 2026-07-12)
 125: 
 126: All citations web-verified by the agent unless marked. **Transport rules to state in the paper:** (1) IMF ~30% is
 127: *process inefficiency*, not diversion — do not equate with theft; (2) monitoring effect sizes are from
 128: health/education/workfare service-delivery RCTs, not capital-project fund tracing — any lift on a construction leaky
 129: bucket is an out-of-domain extrapolation.
 130: 
 131: | model quantity | anchored band | best citation | status |
 132: |---|---|---|---|
 133: | opaque divert share (central case) | **~24%** missing (works theft) | Olken 2007, *JPE* 115(2) — Indonesia roads | **ANCHORED** |
 134: | opaque process loss (broad) | ~30% avg (40% low-income / 27% emerging / 13% advanced) | IMF, *Making Public Investment More Efficient*, 2015 (PIMA/PIE-X) | ANCHORED (process, not theft) |
 135: | opaque tail (worst case) | ~87% leakage (schools got ~13% of grants) | Reinikka & Svensson 2004, **QJE 119(2)** "Local Capture" | ANCHORED as **tail**, not central |
 136: | monitoring lift `mon_coupling` (community-coverage only) | **~0.0–0.20** relative leakage cut (small, fragile) | Björkman & Svensson 2009 QJE (health, **failed replications**); Molina et al. 2016 Campbell (heterogeneous) | ANCHORED but FRAGILE — **widen bands; 0.35 was too high** |
 137: | top-down audit detection/deterrence | ~⅓ relative cut (8pp on 24%) | Olken 2007; Avis, Ferraz & Finan 2018 *JPE* 126(5) (~8% future) | ANCHORED (this is the verified regime's detection, not the coupling) |
 138: | social-audit recovery/clawback | detection + recovery > deterrence | Afridi & Iversen 2014, IZA DP 8095 (MGNREGA, Andhra Pradesh) | ANCHORED (supports coupling recovery channel) |
 139: | ex-ante deterrence ⇒ verified ~0 diversion | announced audit deters before the act | Olken 2007 (ex-ante 4%→100%); Becker 1968 | ANCHORED — validates the "deterrence ex ante" simplification |
 140: | milestone-gating effectiveness magnitude | mechanism sound, **no citable effect size** | World Bank PforR 2012 / OBA; CGD | **DECLARED, not anchored** |
 141: | reputational-exclusion stake | — | none | **DECLARED, no anchor** |
 142: | share of projects net-unsatisfactory | ~25–30% (plausible, unconfirmed) | World Bank IEG / PEFA | **UNVERIFIED — label declared** |
 143: 
 144: **Implied code recalibration:** lower `mon_coupling` default from 0.35 to ~0.15 (coverage-only band 0.0–0.20) and
 145: sweep it; keep opaque central near Olken's ~24% divert; keep verified ~0 diversion (anchored deterrence); label
 146: milestone magnitude and reputational stake as declared. Do NOT map the 33% mortality or 87% capture figures onto the
 147: monitoring lift.
 148: 
 149: ## Friendly Codex round — applied vs deferred (full verdict: `CODEX-E5-FRIENDLY-VERDICT.md`)
 150: 
 151: **Applied (commit 6c0a12c):** split coupling into detection/recovery with community-only recovery = 0; added the
 152: `gamma` guarantee term to the Model-1 incentive condition (verified 0.10, World Bank standard); separate world/executor
 153: PRNG streams (E5 reduces to E4 exactly); reframed opaque as the Olken value-loss moment (pi_hon 0.78); report diversion
 154: incidence + value leakage + a bootstrap CI on the full gain; named the multiplicativity an accounting identity; labelled
 155: verified ~0 diversion as conditional ex-ante deterrence and the whole calibration an identified-set reference.
 156: 
 157: **Second robustness pass — DONE (commit 418c7cd):** value/complexity-correlated delivery risk (`val_risk`); 20-seed
 158: replication; joint Latin-hypercube sweep over the declared delivery ranges (replaces the 1-D sweep); `validateDelivery`
 159: fail-closed. Result: full gain robust — 20-seed sd 0.5 pp; LHS full-architecture wins 100%, coverage effect 100%.
 160: 
 161: ## Friendly Codex round-2 — verification, bounded pass (verdict: `CODEX-E5-FRIENDLY2-VERDICT.md`)
 162: 
 163: Round-2 verified the model + result reproduce (full +59.1 pp [+58.5,+59.7], 36→40 tests) and returned
 164: **PUBLICATION-READY: YES after a bounded pass**, now applied (commit 84332e1): validation genuinely fail-closed
 165: (`Number.isFinite`; `rep` required — a missing rep silently made the deterrent NaN); bootstrap CIs on ALL reported
 166: cells/effects; favorable **R=0 disclosure** (verified delivery 94.4%, verified diversion 5.5%, full +58.6%);
 167: `shareCoverageWins`→`shareArchitectureWins` + a real coverage share; label fixes (Olken = value-weighted non-delivery
 168: not executor share; severe sweep row = declared stress ~69% loss, not the Uganda 87% tail; `val_risk` = cost/size under
 169: `c ⟂ S`; verified `a=0.20` declared). Quantities kept explicitly DECLARED: `loss_hon`, `rep`, milestone effectiveness,
 170: the guarantee→`gamma` mapping, the `p_det/a/r` decomposition, `mon_detect`/recovery mappings, `val_risk`, `U(0,1)`
 171: temptation, `c ⟂ S`, uniform-independent LHS weighting.
 172: 
 173: **Status (post friendly rounds): CODE/TEST-READY.** (Downgraded from "publication-ready" per Adversarial R1: the
 174: empirical interpretation is still pending model-form + calibration review — the calibration is an identified-set
 175: reference not a field estimate, the intervals are conditional-MC only, and the robustness sweep is conditional on
 176: PROBABLE. The mechanism and the PROBABLE arithmetic are sound; the empirical claim is not yet fully identified.)
 177: 
 178: ## Next
 179: 
 180: - Integrate E5 into the paper's Finding 5 (EN+ES) using `FINDING5-DRAFT.md`.
 181: - E9 (full-stack: planning + selection + delivery, central vs Core v0) and E10 (+costs) per
 182:   `docs/EXPERIMENT-INVENTORY.md`.
 183: - Re-label `e5-layers.mjs` as the E10 cost scaffolding; wire E5 delivery into the paper's Finding 5 with the
 184:   percentage main-effects framing (no compound).

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$lines = Get-Content -LiteralPath '"'audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md'; for ("'$i=0; $i -lt $lines.Count; $i++) { '"'{0,4}: {1}' -f ("'$i+1), $lines[$i] }' in C:\devel\claude-projects\distributed-governance-research
 succeeded in 188ms:
   1: # E9 design sketch — the full-stack comparison (planning × selection × delivery)
   2: 
   3: **Status:** design sketch, written 2026-07-12 while the E5 friendly round runs. **Not** to be built until E5 is
   4: locked (E9 reuses E5's final delivery model). Delivery-layer specifics inherit from `e5-delivery.mjs` after the
   5: friendly-round anchoring.
   6: 
   7: ## Why E9 exists
   8: 
   9: E4 measures **selection** only; E5 adds **delivery**. Neither models the **planning layer** (constructing the
  10: eligibility frame / macro categorization) as a *value* contrast — and the old ≈1.05× macro factor was a
  11: mis-comparison (planning options within a shared frame, not fully-modeled central planning vs open distributed
  12: planning). E9 runs the honest full-stack contrast:
  13: 
  14: > **central planning + central selection + central delivery**  vs  **Core v0: distributed planning + distributed
  15: > allocation + distributed delivery.**
  16: 
  17: This is the comparison whose absence the inventory flagged (`docs/EXPERIMENT-INVENTORY.md`). It is where the planning
  18: layer finally gets measured correctly.
  19: 
  20: ## The planning layer — what makes it a genuine value contrast (not ≈1×)
  21: 
  22: The corpus finding the author insists on: a **fully-modeled central planner** is harm-blind and politically biased, so
  23: its planning (the choice of *which categories/sectors are even eligible*, and their budget shares) can **destroy value
  24: across entire categories** — e.g. starving a high-need but low-visibility sector, or over-funding a credit-rich one.
  25: The distributed planner constructs the frame from aggregated citizen category-signals (open, versioned, contestable).
  26: The contrast is therefore NOT "distributed planning as insurance within a fixed frame" but "central category-level
  27: value destruction vs distributed category-level coverage."
  28: 
  29: Modeling handle (reuse the E4 engine primitives): the E4 world already has a category signal `g` correlated with true
  30: quality (`zeta`), an observable category proxy `qCat`, and central projection/harm-myopia. E9 adds a **planning stage
  31: BEFORE selection** that sets, per category, (a) eligibility (which categories are on the menu) and (b) the budget share
  32: per category. Two planners:
  33: - **Central planning:** allocates category budget shares by the central's *perceived* category value (projection +
  34:   harm-myopia at the CATEGORY level) and credit — so it can zero-out or starve harm-heavy / low-visibility categories.
  35: - **Distributed planning:** allocates category shares by the aggregated coverage category-signal (the same coverage
  36:   composition as E4/E5), open and contestable.
  37: 
  38: Then selection runs WITHIN each category's share (E4 machinery), and delivery runs on the funded set (E5 machinery).
  39: Value = Σ delivered true `S` across the whole stack, normalized by the full-information oracle (perfect planning +
  40: perfect selection + perfect delivery). Parity at the oracle; percentages only; no compound multiplier.
  41: 
  42: ## Design (a 2×2×2, but the headline is the two corners)
  43: 
  44: Three binary layers → 8 cells; the **headline is the diagonal**: all-central (status quo) vs all-distributed (Core v0
  45: full). The 6 mixed cells decompose the three main effects + interactions (same additive-vs-multiplicative reading as
  46: E5). Report each layer's effect as a percentage of the oracle; report whether planning composes multiplicatively with
  47: selection×delivery.
  48: 
  49: | layer | central | distributed |
  50: |---|---|---|
  51: | planning | category shares by perceived value + credit (can starve categories) | category shares by aggregated coverage signal |
  52: | selection | `M_C` + credit tilt (E4) | `M_D` coverage (E4) |
  53: | delivery | opaque (E5) | verified + monitoring coupling (E5) |
  54: 
  55: **Reduces-to check:** with planning perfect (both planners = oracle category shares), E9 reduces to E5; with delivery
  56: perfect too, E9 reduces to E4. These are the invariants the test asserts.
  57: 
  58: ## What to anchor (planning layer)
  59: 
  60: - Central category-level misallocation: the harm-myopia + projection already anchored in E4 (Hayek/Scott/Olson/
  61:   Bandiera; Broockman–Skovron), lifted to the category level; plus evidence on sectoral misallocation of public
  62:   investment (IMF/World Bank sectoral efficiency dispersion). To be gathered in E9's own friendly round.
  63: - The distributed category-signal fidelity reuses E4's coverage composition (already anchored).
  64: 
  65: ## Open modeling questions (decide with the friendly round, after E5)
  66: 
  67: 1. Does central planning **exclude** categories (hard zero) or just **under-weight** them? Hard exclusion is the second
  68:    face of power (Bachrach–Baratz) and gives the sharpest contrast; under-weighting is milder. Likely report both.
  69: 2. Is the planning layer's composition with selection multiplicative too? (Expect yes, plus a monitoring-style coupling
  70:    if distributed planning also improves selection legibility.)
  71: 3. Guardrail: E9 must NOT be gerrymandered to a null nor to a positive — the planner handicaps are directional
  72:    (anchored), magnitudes swept, exactly as E4.
  73: 
  74: ## Sequencing
  75: 
  76: Build only after E5 is publication-ready. Then: contract/params → engine stage → tests (reduces-to-E5/E4) → friendly
  77: Codex round (correct + anchor) → results → paper. Then E10 adds costs on top of E9.
  78: 
  79: ---
  80: 
  81: ## AS-BUILT (2026-07-13, commit 0cf22f9) — `scripts/simulation/e4-v5/e9-fullstack.mjs`
  82: 
  83: **Built ON E5** (author correction): E9 = planning + E5. It reuses E5's delivery machinery (`deliveredCell`, now
  84: exported) and the E4 selection engine; it adds a planning stage.
  85: 
  86: - **Categories = visibility strata.** Projects are binned by `P` (visibility) into `nCat` categories, so categories
  87:   differ systematically in the dimension the central planner mis-sees. Planning sets per-category budget shares from a
  88:   planner's *perceived* category value: central = Σ`M_C` (harm-myopic + projecting + credit) → **starves** harm-heavy /
  89:   low-visibility categories; distributed = Σ`M_D` (coverage); shares are proportional (base) or **hard-exclusion**
  90:   (fund only the top `keepFrac` — the second face of power).
  91: - **Oracle = the GLOBAL greedy benchmark** (perfect knowledge ignores category boundaries). Every category-constrained
  92:   cell ≤ oracle; **`nCat=1` reduces to E5 exactly** (tested to 1e-9).
  93: - **Selection + delivery** run within each category via `fundedSet` then `deliveredCell` — identical to E5.
  94: 
  95: **Results (PROBABLE, 1000 worlds, 8 categories, proportional shares):** status quo (all-central) +30.1% of oracle;
  96: Core v0 full (all-distributed) +79.6%; **full-stack gain +49.5% [95% CI +48.8, +50.1]**. Layer main effects:
  97: **planning +3.2%**, selection +50.6%, delivery +6.7%. Hard-exclusion widens planning to **+7.1%**.
  98: 
  99: **The planning layer is a genuine, positive value contrast** — not the retired ≈1.05× macro factor's near-parity. It
 100: is modest in magnitude here (visibility-stratified categories, soft shares); hard exclusion sharpens it. Honest: the
 101: effect size depends on how strongly categories are stratified on the dimension the central mis-sees — to be pressure-
 102: tested + anchored in E9's friendly Codex round (do not gerrymander it up).
 103: 
 104: **Tests (11/11):** nCat=1 reduces to E5 (status-quo cell == E5 S, Core-v0 cell == E5 A2, planning effect ~0); planning
 105: effect positive; hard exclusion widens it; Core v0 > status quo; cells are in a sane range (the oracle is a greedy
 106: REFERENCE, NOT an upper bound — cells MAY exceed it, so this is a regression check, not an invariant); all three layer effects
 107: positive; selection dominant; fail-closed delivery validation reused.
 108: 
 109: **Open for the friendly round:** is the visibility-stratified category construction the right/most-defensible one, or
 110: should categories be typed by harm/need directly? Anchor the planning-layer magnitude (sectoral misallocation of public
 111: investment). Confirm the global-oracle normalization and the main-effect decomposition are sound.
 112: 
 113: ## Planning-layer calibration (friendly round — calibration agent, 2026-07-13, all web-verified)
 114: 
 115: **Direction is strongly anchored; the magnitude is DECLARED-but-conservative.** No published source cleanly isolates
 116: "value lost from allocating the budget across the wrong sectors," so the planning effect is a declared modeling
 117: parameter *consistent with, and conservative relative to,* the published efficiency-loss envelope — not a transported
 118: point estimate.
 119: 
 120: | quantity | anchored band / direction | best citation | status |
 121: |---|---|---|---|
 122: | total public-investment inefficiency | ~30% of returns lost (13% adv / 27% EM / 40% LIC); strong PIM closes ~2/3 | IMF, *Making Public Investment More Efficient* 2015 | ANCHORED (total loss, broader than cross-sector) |
 123: | **pure cross-sector allocative loss** | no canonical scalar exists | World Bank PERs (diagnostic, no scalar) | **DECLARED** (the quantity E9 most needs) |
 124: | political budget cycle → visible spending | pre-election composition shift to visible capital (~0.5–1% of GDP/category) | Drazen & Eslava 2010, *JDE* 92(1) | ANCHORED (direction; composition shift, not value-loss %) |
 125: | pork-barrel / particularistic targeting | allocations follow electoral usefulness, not marginal value (150+ studies) | Golden & Min 2013, *ARPS* 16 | ANCHORED (direction/pervasiveness, qualitative) |
 126: | maintenance / diffuse-cost underinvestment | new-build bias; optimal maintenance ~2% of GDP; deferred maintenance multiplies later cost | Rioja 2003, *JPE* 87(9–10) + World Bank AICD maintenance briefs | ANCHORED for the SIGN (undervisible = underfunded). NB: the "~2/3 new vs 1/3 maintenance" split is NOT in Rioja 2003 — do not attribute it (calibration agent flag) |
 127: 
 128: Supporting (direction only): Rogoff & Sibert 1988; Rogoff 1990 *AER*; Khemani 2004 *JDE*.
 129: 
 130: **Agent's read:** the +3–7% planning contrast sits **comfortably inside** the envelope (well below IMF's ~30% total and
 131: Rioja's ~15% single-margin), so it does **not** overclaim — if anything it is conservative. Honest framing to apply:
 132: call it "consistent with and conservative relative to" the IMF/Rioja evidence, NOT "anchored" to a cross-sector estimate
 133: (none exists at that granularity). Flag the pure cross-sector allocative-loss magnitude explicitly DECLARED to reviewers.
 134: 
 135: ## Country-grounded ILLUSTRATIVE example of agenda capture — CHILE, mental health (data agent, 2026-07-13, verified)
 136: 
 137: **Not a conclusion — an illustrative footprint of the model's visibility-bias mechanism in one real budget.**
 138: 
 139: **Chile — mental health.** The public mental-health budget is ~**2% of the health budget** (1.45–2.16% across 2007–2015;
 140: ~4.5% of the health ministry's budget by 2025) against an **OECD average of 6.7%** — despite mental/behavioural
 141: disorders being the **leading cause of disability in Chile** (PAHO), with treatment coverage ~20% vs ~50% typical for
 142: middle-income countries. It is documented as a genuine unmet need, "**una deuda pendiente**": funding never rose to meet
 143: the 2000 National Mental Health Plan's own targets. Sources (verified/triangulated): Errázuriz, Valdés, Vöhringer & Calvo
 144: (2015), *Rev Med Chile* 143(9):1179–1186; IPSUSS; OECD 2025 (via Fact Checking UC); DIPRES sectoral evaluation (2025).
 145: 
 146: **Why this is on-point (and honest about the mechanism):** mental health is a **high-need, LOW-VISIBILITY** function —
 147: diffuse constituency, stigma, no ribbon-cuttings — kept near the floor. That is exactly E9's central mechanism (the
 148: planner reads visibility as credit and starves low-visibility functions). The driver here is **low salience/visibility**,
 149: NOT documented clientelist vote-buying — and Chile is a relatively well-governed OECD country, so the point is if EVEN
 150: Chile floors mental health, the visibility bias is pervasive, not a basket-case artefact. The clientelist variant of the
 151: same mechanism is documented separately (Keefer & Khemani 2005, *WB Research Observer*, "clientelism under-provides
 152: broad public goods like preventive health"; Ban, Jha & Rao on India's "asphalt over sewers"), but without a cleanly
 153: verified single budget-share number — so we cite it as mechanism, not calibration.
 154: 
 155: **QUALITATIVE only — NO numeric mapping (Adversarial R1 #17).** The adversary correctly flagged a **taxonomic
 156: mismatch**: mental health is a *funded health SUBfunction*, not a zero-funded TOP-LEVEL COFOG function, so mapping it to
 157: `agendaCapture=1` (a whole function off the menu) and reporting a simulated "+2–4pp" would over-transport. **We therefore
 158: do NOT attach a simulated planning number to the Chile example.** It stands as a **qualitative illustration** that the
 159: model's visibility-bias mechanism has a real footprint: a high-need (Chile's #1 disability cause, ~20% treatment
 160: coverage), low-visibility function chronically under-provided (~2% of the health budget vs the OECD 6.7% average),
 161: documented as "una deuda pendiente." A quantitative version would require a **partial-share sub-function model** matched
 162: to the COFOG taxonomy — future work. Honest caveats: the mechanism is visibility/salience bias (the model's mechanism),
 163: not documented clientelist vote-buying; and a small share alone is not proof of capture — the need benchmark makes it a
 164: documented gap here, but the illustration is directional, not a calibration.
 165: 
 166: ## Planning REDESIGN v2 (Codex round-1 + author decision, commit 301d7cc)
 167: 
 168: Codex round-1: skeleton sound; planning layer NOT publication-ready (the standalone +3.2/+7.1 were one-at-a-time
 169: conditional effects; planning under distributed selection runs the other way). Author decision: **predeclare + sweep**
 170: the need↔visibility association. Redesigned:
 171: 
 172: - **Persistent sectors with intrinsic visibility** (not visibility bins of project P — homogeneous under random
 173:   membership). **Category-level political credit**: central over-funds visible sectors (`creditCoef`) and is blind to
 174:   the low-visibility sector value tilt; distributed coverage sees a fraction (`covSees`). `assoc` = the predeclared
 175:   need↔visibility lever, swept −1..+1.
 176: - **8-cell factorial + Shapley attribution** that sums exactly to the diagonal gain; plus the conditional simple
 177:   effects that expose the sign flip.
 178: - `validatePlanning` fail-closed; hard exclusion by integer `nKeep` (central/symmetric); oracle relabelled a REFERENCE.
 179: - `nSec=1` reduces to E5 exactly (1e-9). 15/15 tests.
 180: 
 181: **Honest result (PROBABLE):** full-stack gain ~+49% [+48.3,+49.6]. Shapley attribution (assoc=−0.6): planning +2.1% /
 182: selection +38.3% / delivery +10.8%. Under the **realistic** association (assoc<0, Rioja maintenance bias) planning
 183: Shapley rises to **+1.9% → +6.2%**; at assoc≥0 it is ~0 — the planning layer's value is **real but modest and
 184: context-dependent**, honestly emerging from the predeclared assumption, not gerrymandered. Magnitude DECLARED,
 185: conservative vs the IMF/Rioja envelope. → sent to Codex round-2 for verification.
 186: 
 187: ## Codex round-2 verdict + bounded pass (commit 0749b2d) — architecture sound
 188: 
 189: Round-2: the factorial/Shapley **architecture is correct and publication-worthy**; verdict NOT-YET pending a bounded
 190: pass, now applied:
 191: 
 192: - **Genuine fixed-dispersion association** (`need = assoc·z(vis) + √(1−assoc²)·shock`) — the old `assoc` also scaled
 193:   dispersion and `assoc=0` erased it. This exposed that the planning magnitude is driven by the DECLARED
 194:   `secValSpread` (~0 at 0.1, **+3.8% Shapley at 0.3**, +17% at 0.6) — set a moderate declared reference (0.3) and
 195:   report the full **dispersion × association** grid.
 196: - **Residual recycling** mode removes the utilization confound (strict left Core v0 at 90% utilization vs status quo
 197:   96%): planning|distributed-sel goes **−1.2% → +2.1%** with recycling.
 198: - bootstrap **CIs on the gain + all three Shapley values + both planning simple effects**; complete fail-closed
 199:   `validatePlanning`; oracle relabelled a **greedy REFERENCE** (not an upper bound; false invariant dropped).
 200: 
 201: **Honest final result (PROBABLE, secValSpread=0.3, assoc=−0.6):** full-stack gain **+52.5% [+51.8,+53.1]**.
 202: Shapley: **planning +3.8% [+3.3,+4.2] · selection +37.9% [+37.4,+38.5] · delivery +10.8% [+10.5,+11.1]** (with
 203: recycling, planning +4.8%). **Conclusion: SELECTION and DELIVERY are the robust, large layers; PLANNING is a MODEST,
 204: CONDITIONAL third layer** — positive only under substantial declared sector heterogeneity AND the realistic negative
 205: need↔visibility association, near-zero/negative otherwise. Magnitude DECLARED and numerically modest; **not in obvious
 206: tension with the broader, non-commensurate IMF/Rioja evidence, but NOT anchored to a cross-sector point estimate**.
 207: 22/22 tests. → ready for a round-3 confirmation.
 208: 
 209: ## Anchoring round (author: "anclar mejor los parámetros a datos") — data-anchor agent (verified) + AGENDA CAPTURE
 210: 
 211: **Author question:** was agenda capture modeled in the status-quo category selection? **Answer: no** — only the SOFT
 212: credit distortion was in the headline; hard exclusion was a non-default variant. The author chose to incorporate agenda
 213: capture. Data-anchor agent (all web-verified) mapped E9's declared parameters onto observable moments:
 214: 
 215: | parameter | observable moment | anchor | status |
 216: |---|---|---|---|
 217: | `nSec` | UN COFOG top-level functions = **10** | UN/Eurostat/OECD COFOG | **ANCHORED** (nSec=10) |
 218: | `creditCoef` (over-fund visible) | pre-election composition shift to visible spending | Drazen–Eslava 2010 *JDE* 92(1); Vergne 2009 *EJPE* 25(1); Katsimi–Sarantides 2012 *Public Choice* 151 | direction ANCHORED, **magnitude modest/single-digit → declared-with-band** |
 219: | `assoc` sign (high-need = low-visibility) | maintenance/prevention underfunded vs new visible capital | Rioja 2003 *JPE* 87(9–10) + WB AICD (optimal maintenance ~2% GDP; new-build bias) | **SIGN anchored**, strength declared |
 220: | `secValSpread` (cross-sector value dispersion) | COFOG share dispersion / sector-return spread / allocative gap | Eurostat COFOG 2023; IMF/CEPR ~11% GDP + 30–40% efficiency-gap **ceiling** | loose/confounded → **upper-bounded, not point-anchored** |
 221: 
 222: **Data-agent's read:** the honest anchored planning contribution is **SMALL (a few %)** — measured composition shifts are
 223: single-digit, the ~11%/30–40% figures are ceilings bundling far more than cross-sector visibility bias, and the
 224: need↔visibility link is directionally real but weakly measured. This **coheres with the project's own symmetry-gate
 225: NO-GO (~0.026)**: the architecture + mechanism is the contribution; the honest calibrated planning magnitude is small.
 226: 
 227: **AGENDA CAPTURE mechanism added (commit 790cdc1):** `agendaCapture` = the number of its lowest-perceived COFOG sectors
 228: the central keeps OFF the menu (second face of power, Bachrach–Baratz 1962 / Schattschneider; political budget cycles).
 229: Budget reallocated to funded sectors. This is the mechanism that makes the planning layer **robustly POSITIVE (no sign
 230: flip)**. At the DEFAULT modest, data-consistent severity (**1 of 10** COFOG functions off the menu) the planning Shapley
 231: is **~+7.0% [+6.6,+7.5]** (vs +3.8% and sign-ambiguous under soft distortion alone); severities of 2–3/10 give +10–15%
 232: but are a **declared stress, NOT data-supported** (wholesale exclusion of many functions contradicts the single-digit
 233: measured shifts).
 234: 
 235: ## Codex pro-anchor panel (4 profiles) — CONVERGES with the data agent; applied (commit 3033c2b)
 236: 
 237: The panel (PFM / development / political-economy / methodology) verified sources and mapped E9's parameters onto
 238: observable moments, plus found a real BUG. Applied:
 239: 
 240: - **BUG FIX (blocker):** distributed sector perception multiplied `secValSpread` twice (`valTilt` already carries it).
 241: - **Provisional moment maps:** `creditCoef` 0.6→**0.076** (Drazen–Eslava election log-visible-share shift 0.024,
 242:   SE 0.008); `secValSpread` 0.3→**0.184** (World Bank OED between-sector return-per-cost SD); `nSec`=10 (COFOG);
 243:   **`agendaCapture` default 1→0** — no cited evidence for universal whole-function exclusion, so it stays a DECLARED
 244:   STRESS, not the anchored headline.
 245: - **Result reproduces the panel's independent diagnostic exactly:** planning Shapley **+0.61% strict / +3.21%
 246:   [+2.93,+3.47] recycled**. (My earlier +7% used the unanchored creditCoef=0.6 + agendaCapture=1 + the double-count.)
 247: 
 248: **What the anchoring round found (the SOFT-only slice, mechanism absent):** with `agendaCapture=0` and the moment-mapped
 249: params, the planning contribution is ~+0.6% (strict) to +3.2% (recycled) — the 0–3% range both reviewers converged on.
 250: **But this slice omits agenda capture, the layer's dominant mechanism, so it is NOT the planning result** (see the
 251: framing decision below — do not headline a planning figure). **SELECTION (+37–43%) and DELIVERY (+11%) remain the large,
 252: robust, quantified layers.** 26/26 tests.
 253: 
 254: ## Planning-layer framing — DO NOT report a figure (author decision, 2026-07-13)
 255: 
 256: **Key methodological point (author):** it is misleading to headline a "neutral" small planning number (~0–3%), because
 257: that number is measured with the layer's DOMINANT mechanism — **agenda capture** (the central keeping whole high-need/
 258: low-visibility functions off the menu; the second face of power) — SWITCHED OFF. Reporting it as "the" planning
 259: contribution would falsely read as "we measured planning and it is small," when the honest statement is: **the planning
 260: layer's magnitude hinges on agenda capture, which cannot be anchored today, so we do NOT quantify it.**
 261: 
 262: Therefore the E9 write-up should:
 263: - **Quantify only SELECTION and DELIVERY** (anchored, robust, large layers).
 264: - Present **PLANNING qualitatively**: the mechanism (agenda capture / second face of power) is IDENTIFIED and its
 265:   DIRECTION anchored (COFOG structure; the election-period shift to visible spending; maintenance neglect), but its
 266:   MAGNITUDE requires country-specific budget data (which whole functions a given central actually excludes) and is left
 267:   as **proposed continuation work**. **Do NOT report a planning-layer figure** — not even the 0–3% soft-distortion slice,
 268:   which understates the layer by omitting its dominant mechanism.
 269: - The internal `agendaCapture` sweep and the 0–3% soft-only slice remain in the CODE as analysis, clearly labelled as a
 270:   lower slice that omits the dominant mechanism — not as a headline result.
 271: 
 272: Two concrete continuation items the author wants (agenda capture is the needle-mover, presented as continuation):
 273: 1. **A country-grounded worked example (COUNTRY-AGNOSTIC).** Find real functional-budget data for SOME country with
 274:    accessible data (Chile is a good place to look given the author's context, but the example is NOT tied to Chile — an
 275:    implementer would run it for whatever country they choose) showing structural under-provision / near-exclusion of
 276:    specific COFOG functions (deferred maintenance, environment, prevention, etc.), and present the resulting
 277:    agenda-capture severity as an **ILLUSTRATIVE example, explicitly NOT a conclusive calibration**.
 278: 2. **A country selector in the interactive explorer** — country-agnostic: let the user **choose any country** and set the
 279:    agenda-capture (and related planning) values to that country's budget structure, so the planning contribution is shown
 280:    per-country rather than as one universal number.
 281: 
 282: ## Panel modifications noted as FUTURE WORK (a country-specific, fully-anchored v3): softmax baseline-plus-flexible-
 283: reallocation share form (credit as a share semi-elasticity, not an additive coefficient on the arbitrary `M_C` scale);
 284: return-per-cost value tilt (`Sadj = S + cost·returnTilt`); a per-sector DATA INPUT TABLE (COFOG code, counts, cost/
 285: return distributions, baseline capital share, visibility, need, maintenance share); an inverse-calibration harness that
 286: root-solves the observable moments with held-out validation; a genuine value-maximizing comparator (diminishing returns)
 287: to replace the greedy reference if an actual-vs-optimal allocation gap is the target; and an exclusion HURDLE model
 288: (first whether viable projects exist, then whether the central zero-funds them).

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$lines = Get-Content -LiteralPath '"'audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md'; for ("'$i=0; $i -lt $lines.Count; $i++) { '"'{0,4}: {1}' -f ("'$i+1), $lines[$i] }' in C:\devel\claude-projects\distributed-governance-research
 succeeded in 183ms:
   1: # E10 design — the administrative-cost layer (built 2026-07-13)
   2: 
   3: **Code:** `scripts/simulation/e4-v5/e10-costs.mjs` (+ `-test.mjs`). **Runs:** `npm run e10:costs`, `e10:costs:test`.
   4: 
   5: E10 adds the cost dimension E5 (delivered value at equal budget) and E9 (the full stack) left out: the **administrative
   6: / machinery cost** the central runs and Core v0 largely eliminates, minus Core v0's own platform cost.
   7: 
   8: ## Model
   9: 
  10: `V_arm / O = (delivered value_arm / O) · (1 − κ_arm)`, `m10 = V_D/O − V_C/O`. Status quo = central selection × opaque
  11: delivery; Core v0 = distributed selection × verified delivery.
  12: 
  13: **Two switches (author requirement):**
  14: - **PLANNING switchable OFF (default OFF)** — its magnitude is deferred/qualitative (agenda capture is the dominant,
  15:   not-yet-anchorable mechanism), so it must NOT be folded quantitatively into the cost result. OFF ⇒ value base = E5;
  16:   ON ⇒ value base = E9. Tested: OFF reproduces E5's S/A2 cells exactly.
  17: - **COSTS switchable OFF** (κ=0 ⇒ reduces to the value stack). Tested.
  18: 
  19: ## Calibration (verification agent, 2026-07-13 — DIRECTION verified, POINT magnitudes DECLARED-conservative)
  20: 
  21: | param | value | anchor (verified) | status |
  22: |---|---|---|---|
  23: | **κ_C** central machinery Core v0 eliminates | **0.15** | IDB *Better Spending for Better Lives* 2018: LAC public-spending waste = **4.4% of GDP ≈ 16% of government expenditure** (procurement + payroll + transfers). 0.15 = round-down of 16%; band 0.10–0.16. Narrow pure-admin overhead 1–10% (CBPP; SSA <1%; CBO) is a lower floor. | direction ANCHORED; exact point DECLARED |
  24: | **κ_D** Core v0 platform + AI operating cost | **0.03** | Verified e-procurement run-costs are an ORDER OF MAGNITUDE below 0.03 (~0.005–1% of spend managed — JBCA 2023 e-GP CBA; KONEPS; GeM; ProZorro). 0.03 deliberately over-charges the platform → **conservative ceiling** (band 0.005–0.03). | direction ANCHORED; conservative ceiling, DECLARED |
  25: | ratio κ_C/κ_D ≈ **5** | — | verified central machinery cost is **≥10–30×** platform run cost → the modeled 5× **understates** the structural gap | conservative |
  26: 
  27: **Must stay purely DECLARED** (no source maps directly): the exact κ_C=0.15 and κ_D=0.03 points; the IDB three-way
  28: procurement/payroll/transfers split; procurement transaction cost as a share of contract value.
  29: 
  30: ## Result (PROBABLE, planning OFF, κ_C=0.15 / κ_D=0.03)
  31: 
  32: Value-only gap **+59.1%** (status quo +34.2% vs Core v0 +93.3%) → **with admin costs +61.4%** (the cost layer adds
  33: **+2.3%** to the gap). Costs OFF reduces exactly to the value stack.
  34: 
  35: **Honest subtlety (tested):** admin costs WIDEN the Core-v0 gap only when `κ_C/κ_D` exceeds the **value ratio (~2.7)** —
  36: Core v0 delivers more, so a proportional cost removes more absolute value from its base. At the anchored 5× ratio, costs
  37: widen the gap; below ~2.7× they narrow it. The verified evidence (ratio ≥10–30×) sits well above the crossover, so the
  38: widening is robust.
  39: 
  40: ## Not double-counting E5's leakage
  41: 
  42: E5's delivery layer models **leakage/diversion** (value not delivered — Okun's leaky bucket). E10 models a DIFFERENT
  43: thing: the **administrative machinery cost** (budget consumed running the value-proxy/allocation/prioritization/
  44: fiscalization apparatus), which Core v0 replaces with a cheap platform. No overlap with delivery leakage.
  45: 
  46: ## Next
  47: 
  48: - Optional: a full IDB-volume read to pin the procurement-share component (currently declared).
  49: - The E4→E10 program is complete: E4 selection · E5 delivery · E9 planning (qualitative) · E10 admin cost. Then paper
  50:   framing of the whole stack (selection + delivery + cost quantified; planning qualitative via agenda capture).

codex
The first major reconciliation issue is already visible: the English manuscript now presents the post-review E5/E9/E10 framing, but the E10 design record still contains an older cost result (+2.3 points) that conflicts with the manuscript and your governing “roughly neutral” result. I’m treating your stated settled result as controlling and will distinguish manuscript defects from stale audit-history text in the final checklist.
exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$lines = Get-Content -LiteralPath '"'drafts/paper.es.md'; for ("'$i=0; $i -lt 450; $i++) { '"'{0,4}: {1}' -f ("'$i+1), $lines[$i] }' in C:\devel\claude-projects\distributed-governance-research
 succeeded in 195ms:
   1: # ¿Quién elige, quién ejecuta, quién juzga? Una arquitectura funcional para el gasto público distribuido
   2: 
   3: **Working paper — v1.14 (julio de 2026; última versión depositada: v1.12, DOI 10.5281/zenodo.21252911). Esta versión retira el multiplicador compuesto de valor por peso como efecto calibrado —una prueba de estrés pre-registrada, simétrica y solo-de-selección, dio NO-GO (véase §6 y el contrato de afirmación y estimando)— y se apoya en la arquitectura y el mecanismo cualitativo, ahora afinada por un mapa de robustez de cuatro escenarios (E4 v1.14): modelando al central como lo describe *direccionalmente* la evidencia —casi ciego al daño difuso en la cola larga de baja visibilidad (Hayek, Scott, Olson, Bandiera–Prat–Valletti)— la selección por cobertura recupera decisivamente más de la referencia de información completa del modelo (~98% frente a ~44%) y de forma robusta; el gate pre-registrado sigue siendo el resultado confirmatorio separado (un NO-GO bajo un proceso generador distinto), el central solo supera a la cobertura abandonando los supuestos declarados, y la idealización espejo del brazo distribuido gana por goleada; todas esas magnitudes son puntos de referencia declarados de un modelo estilizado de instituciones comparadas, un contraste de modelo condicional, no impacto calibrado. Consolida el programa computacional complementario (Offermann 2026b): la regla de complementariedad de la disuasión, la curva de transición semi-abierta, la regla de liberación presupuestaria y la verificación por máquina con segunda instancia humana; y la separación en dos capas del artículo compañero entre la categorización macro y los perfiles de asignación, bajo la cual el brazo distribuido es robusto a una mala categorización central mientras que el brazo central es frágil ante ella. Revisado a través de ciclos sucesivos de revisión adversarial y de autor, documentados en la hoja de ruta del repositorio.**
   4: 
   5: *Traducción al español del working paper v1.14 (drafts/paper.md, versión autoritativa en inglés).*
   6: 
   7: *© 2026 Mauricio Offermann. Licenciado bajo CC BY 4.0 — véase LICENSE.md en la raíz del repositorio. Se ruega citar según se indica en CITATION.cff. DOI (de concepto, siempre resuelve a la última versión): 10.5281/zenodo.21193846.*
   8: 
   9: ## Resumen
  10: 
  11: El gasto público rutinariamente le pide a una sola jerarquía elegir proyectos, ejecutarlos y certificar su propio desempeño — la fusión donde se concentran el despilfarro, la captura y el fracaso sin rendición de cuentas. Este artículo se pregunta si una porción acotada y legalmente autorizada de esa maquinaria puede separar esas funciones —la mano que elige, la mano que gasta y la mano que certifica— y la información que las impulsa, preservando la autorización legal y la auditabilidad pública.
  12: 
  13: Presentamos **Core v0**, una arquitectura a nivel de objetos completamente especificada. Dentro de ámbitos de planificación legalmente autorizados, los ciudadanos dirigen una porción no retirable de un presupuesto público existente hacia proyectos que deben declarar por adelantado sus afirmaciones de valor, partes afectadas, hitos y contratos de evidencia. La proposición, la ejecución, la producción de evidencia, la fiscalización y la custodia están separadas; los fondos se liberan en tramos contra evidencia de hitos revisada, con retención y garantías; los ejecutores no eligen ni pagan a sus fiscalizadores; y toda transición de estado consecuente es pública.
  14: 
  15: Su idea animadora es un mecanismo de **crédito versus cobertura**: cuando el ordenamiento central premia el crédito político reclamable, puede subponderar sistemáticamente los beneficios difusos y de baja visibilidad que un proceso distribuido basado en cobertura todavía logra visibilizar, aunque bajo sesgo de voz. Sometimos esta idea a un test deliberadamente hostil: una simulación pre-registrada y simétrica que eliminó las asimetrías favorables en que se había apoyado una versión anterior, más una revisión adversarial pública de 43 ataques a lo largo de cinco rondas, cada uno integrado al diseño o registrado como una limitación acotada. La ventaja distribuida fue positiva en las 18 celdas pre-especificadas pero pequeña (mediana agrupada Δ = 0.025 de un benchmark voraz de información completa, por debajo de nuestro umbral prefijado de 0.05); por lo tanto retiramos el gran multiplicador que reportó una versión anterior y enunciamos el resultado modesto y condicional con franqueza. Una extensión de robustez de cuatro escenarios modela luego al selector central como lo describe la evidencia —su *dirección* en cada eje anclada en la literatura (no su magnitud ajustada): casi ciego al daño difuso en la cola larga de baja visibilidad (Hayek 1945; Scott 1998; Olson 1965; Bandiera–Prat–Valletti 2009), proyectando sus propios priores y sobreestimando beneficios visibles (Broockman–Skovron 2018; Flyvbjerg et al. 2003), y ladeado hacia el crédito (Mayhew 1974; Arnold 1990). En ese **escenario de referencia declarado y motivado por fuentes** —no una calibración empírica— la selección distribuida basada en cobertura recupera cerca del 98% de la referencia voraz de información completa del modelo frente al ~44% del central: un contraste de modelo condicional de 54 puntos, robusto en todo el espacio declarado y ante la degradación realista del *ruteo* presupuestario universal de Core v0 (el ruteo es arquitectónico; la información independiente efectiva no lo es). El central supera a la cobertura solo abandonando los supuestos declarados (otorgándole la visión del daño que la literatura le niega) en un mundo casi sin daño, mientras la idealización *espejo* del brazo distribuido gana por goleada. Estas son magnitudes de referencia declaradas de un modelo estilizado de instituciones comparadas, no efectos de campo calibrados; el gate pre-registrado sigue siendo el resultado confirmatorio separado (un NO-GO bajo un proceso generador distinto), y la única sensibilidad que reduce materialmente la brecha —nunca su signo en el rango declarado— es el error correlado/de modo común en el brazo de cobertura. Proposiciones elementales dan condiciones suficientes para el desembolso por hitos compatible en incentivos y para la resistencia a la colusión de la fiscalización protocolizada, bajo supuestos de independencia y corroboración.
  16: 
  17: Esta es una contribución de arquitectura-y-mecanismo, no una evaluación de impacto: ningún piloto se ha ejecutado; las unidades de la simulación no están calibradas, son de equilibrio parcial y no identifican efectos de entrega; y las afirmaciones se acotan a inversión pública tipo infraestructura. Lo que ofrece es un diseño institucional concreto, criticable y pilotable —y un relato disciplinado de exactamente qué sí y qué todavía no sostiene su evidencia.
  18: 
  19: ## 1. Introducción
  20: 
  21: Los Estados modernos concentran tres cosas que no necesitan estar juntas: la
  22: autoridad para decidir en qué se gasta el dinero público, la capacidad para
  23: ejecutar ese gasto, y el poder de certificar que sirvió de algo. Cuando las
  24: tres viven dentro de una misma jerarquía, la rendición de cuentas se reduce a
  25: que ella misma se audite (Bovens 2007). Las consecuencias son predecibles y
  26: están documentadas en toda la economía política —asignación discrecional,
  27: cumplimiento autorreportado, captura por intereses concentrados y desconfianza
  28: ciudadana—: desde la captura regulatoria (Stigler 1971; Laffont y Tirole 1991)
  29: hasta la auditoría vuelta ritual (Power 1997) y las coaliciones distributivas
  30: que se atrincheran en los sistemas políticos estables (Olson 1982).
  31: 
  32: Estas fallas no son abstractas: son la razón por la que el valor no llega a
  33: las personas para quienes se recaudó. Para el dinero público que financia obras
  34: concretas —infraestructura, obras, programas locales— lo que en último término
  35: importa no es cuánto se apropia sino cuánto valor efectivo llega a la gente por
  36: peso gastado: una obra que no se construye, o se construye mal, no ayuda a nadie,
  37: por bien intencionada que sea la asignación (el balde agujereado de Okun (1975)
  38: cargó agua que nunca llegó). Este es un criterio acotado para la inversión pública
  39: tipo proyecto, no una teoría de todo el presupuesto ni de por qué los Estados
  40: recaudan: la redistribución y la equidad son propósitos distintos de las finanzas
  41: públicas que este artículo no evalúa (§8).
  42: 
  43: El debate estándar responde con cantidad: encoger el Estado o hacerlo crecer.
  44: Ambas posturas lo tratan como un objeto único. Este artículo sostiene que la
  45: pregunta tratable es arquitectónica, no de tamaño: *¿qué capas de la actividad
  46: estatal aún requieren monopolio central, y cuáles pueden hoy distribuirse —con
  47: mejor rendición de cuentas que el statu quo— ahora que la coordinación digital
  48: ha desplomado los costos de transacción que antes justificaban la jerarquía?*
  49: (Coase 1937; Hayek 1945; Williamson 1985). Es una pregunta con linaje —dónde
  50: deben residir las decisiones cuando el conocimiento está disperso—, del debate
  51: del cálculo económico (Mises 1920) al conocimiento disperso de Hayek y su
  52: tratamiento institucional en Sowell (1980): las decisiones deben vivir donde
  53: está el conocimiento, disciplinadas por la retroalimentación más que por la
  54: orden jerárquica. Las garantías de derechos, la fuerza legítima, la
  55: estabilidad macrofiscal y la adjudicación exigible plausiblemente siguen
  56: siendo centrales; el procesamiento de información, la asignación de recursos a
  57: nivel de proyecto, la ejecución de servicios, la producción de evidencia y la
  58: auditoría, plausiblemente no.
  59: 
  60: Hacemos el argumento como un diseño concreto, no como un manifiesto. Core v0
  61: es una arquitectura de referencia completa para distribuir una capa acotada
  62: —la asignación, ejecución y verificación de una cuota, con mandato legal, de
  63: un presupuesto público existente—, desarrollada hasta el nivel de objetos
  64: nombrados, máquinas de estado y reglas de decisión (un corpus de más de cien
  65: documentos de arquitectura, cincuenta y nueve hipótesis diseñadas y cuarenta y tres
  66: revisiones adversariales, todo público). La ciudadanía recibe una capacidad de
  67: asignación periódica y no retirable en una billetera cívica (civic wallet);
  68: los proyectos atraviesan un ciclo de vida de cierre paralelo, en el que
  69: financiamiento, fiscalización independiente, compromisos de evidencia y
  70: confirmación de beneficiarios deben cerrar todos antes de la ejecución; el
  71: ejecutor nunca elige ni paga a sus propios auditores —lo que elimina el costo
  72: de agencia del cumplimiento auto-supervisado (Jensen y Meckling 1976)—; el
  73: dinero solo se mueve sobre hitos revisados, con retención y garantías
  74: materializadas externamente; y toda transición de estado relevante queda
  75: registrada en un rastro legible por la ciudadanía y auditable por expertos.
  76: 
  77: El *ejecutor* —quien realiza el proyecto, sea una obra, un servicio de cuidado
  78: de personas o un programa educativo— puede ser un servicio público, un
  79: municipio, una fundación, una cooperativa o una empresa, según lo defina la
  80: normativa de la autoridad implementadora, bajo una condición: competencia no
  81: monopólica y honesta, con quiebras y consecuencias para quien incumple. Y la
  82: cuota que cada ciudadano dirige la fija una fórmula pública y versionada que
  83: elige la autoridad; su opción simple es *igual para todos los ciudadanos
  84: elegibles*, bajo la cual nadie compra más influencia con más dinero.
  85: 
  86: Un ejemplo concreto. Supongamos que un municipio destina recursos a programas
  87: de cuidado para adultos mayores en situación de vulnerabilidad. Hoy, entre el
  88: peso que se asigna y la ayuda que efectivamente llega hay una brecha donde se
  89: pierde valor. Bajo esta arquitectura, cada vecino puede dirigir parte de sus
  90: impuestos al programa que prefiere; la fundación, cooperativa o servicio que
  91: lo ejecuta cobra por tramos, y solo cuando un verificador que ella no eligió
  92: confirma que la ayuda llegó; y cada paso queda público y auditable.
  93: 
  94: Lo que vuelve investigación a un ejercicio de diseño es el rigor al que se lo
  95: somete, bajo una disciplina transversal: evaluamos cada objeción comparativamente
  96: —el Core v0 factible contra la institución que hoy cumple la misma función, nunca
  97: contra un ideal omnisciente y benevolente. Esto bloquea la falacia del nirvana en
  98: ambas direcciones (Demsetz 1969; Sección 2). Nuestras contribuciones son:
  99: 
 100: 1. **La distribución de la capa de asignación.** El aporte central de diseño:
 101:    aplicar el principio de distribución funcional a la asignación de recursos
 102:    —los ciudadanos dirigen su cuota directamente, la delegan, o la gobiernan
 103:    con reglas personales—, instanciado como una arquitectura de referencia
 104:    completa (Core v0).
 105: 
 106: 2. **Formalización de los mecanismos de incentivos** (Sección 5). Modelamos el
 107:    desembolso supeditado a hitos como un juego principal-agente y derivamos su
 108:    condición de compatibilidad de incentivos; modelamos el soborno de
 109:    fiscalizadores asignados por protocolo y derivamos una condición a prueba
 110:    de colusión bajo k-corroboración; y demostramos dos estáticas comparativas
 111:    relevantes para el diseño: la verificación débil debe compensarse con
 112:    términos financieros, y las garantías son contraproducentes cuando la
 113:    calidad de detección cae por debajo del costo del capital. Hitos,
 114:    retención, garantías y memoria reputacional forman la pila de disuasión del
 115:    diseño.
 116: 
 117: 3. **Evidencia computacional** (Sección 6). Una simulación basada en agentes,
 118:    sin dependencias y con semilla fija, de 10.000 ciudadanos pone a prueba los
 119:    supuestos conductuales de la arquitectura bajo ignorancia racional,
 120:    atención limitada al descubrimiento y cascadas de prueba social. Los
 121:    resultados disciplinan el diseño: apoyan algunas afirmaciones, afilan
 122:    otras, cuantifican el apalancamiento concentrado en la capa de construcción
 123:    de ámbitos, miden una construcción abierta viable de ella, y llevan la
 124:    comparación de extremo a extremo: desde la asignación hasta el valor social
 125:    entregado por unidad de presupuesto —un criterio relevante para esta porción
 126:    acotada del gasto público (junto a las restricciones distributivas y de derechos
 127:    que el modelo no representa). En el modelo, la entrega verificada y la
 128:    priorización social interactúan en lugar de solo sumarse; el aparato basado
 129:    en agentes anterior produjo un compuesto de valor por unidad de presupuesto frente a
 130:    una línea base del statu quo parametrizada a partir de los hallazgos publicados de
 131:    instituciones de auditoría (solo casi-paridad a escala de piloto municipal).
 132:    **Retiramos ese compuesto como efecto calibrado**: una prueba de estrés pre-registrada, simétrica y
 133:    solo-de-selección reduce la ventaja de selección distribuido-menos-central a
 134:    una mediana agrupada pre-registrada Δ = 0.025 de un benchmark de información
 135:    completa, por debajo de su umbral prefijado de 0.05 de reconstrucción del
 136:    programa de investigación (NO-GO). La contribución que carga el peso es la
 137:    arquitectura y el mecanismo cualitativo, cuyo alcance comparativo el mapa de
 138:    robustez v1.14 delimita entre los regímenes sin miopía y con miopía al daño,
 139:    no el multiplicador.
 140: 
 141: 4. **La revisión adversarial como método** (Sección 7). La arquitectura fue
 142:    atacada sistemáticamente: cuarenta y tres resúmenes de ataque anclados en las
 143:    literaturas de ciencia política, economía y derecho, cada uno respondido
 144:    por una defensa emparejada y resuelto bajo una regla explícita de
 145:    integrar-o-acotar, con las resoluciones propagadas a través del corpus (todas
 146:    salvo las D037–D040 de la ronda de revisión del manuscrito, cuya propagación al
 147:    corpus está rastreada) y el registro completo de revisión
 148:    público por construcción. El bucle es una
 149:    autocrítica estructurada, no validación externa, y así lo decimos; lo proponemos, junto con su regla de terminación y a la espera de validación externa independiente, como una propuesta metodológica preliminar para la investigación en diseño institucional.
 150: 
 151: El estudio complementario mide tres efectos que amplían esta arquitectura: la
 152: ablación de la pila de disuasión (sus términos son individualmente redundantes
 153: pero conjuntamente indispensables), la factibilidad de la fiscalización por
 154: IA, y el efecto de separar la planificación macro de la asignación (robustez
 155: frente a una mala planificación central —un contraste del aparato anterior,
 156: sujeto a la misma salvedad de magnitud que el compuesto anterior, no un efecto
 157: calibrado).
 158: 
 159: La Sección 8 enuncia las limitaciones con el mismo cuidado que los resultados,
 160: porque bajo nuestro método ellas son resultados: cada una es un riesgo
 161: residual nombrado y acotado.
 162: 
 163: ## 2. El principio de distribución funcional
 164: 
 165: Analizamos el Estado como una pila de capas funcionales antes que como una
 166: única institución: (a) garantías de derechos y fuerza legítima; (b)
 167: adjudicación vinculante; (c) creación de reglas; (d) gestión macrofiscal; (e)
 168: planificación macro y enmarcado de agenda; (f) priorización de proyectos y
 169: asignación de recursos a proyectos concretos; (g) ejecución y prestación de
 170: servicios; (h) producción de evidencia sobre la entrega; e (i) evaluación y
 171: rendición de cuentas. El principio de distribución es:
 172: 
 173: > Una capa es candidata a la distribución cuando se cumplen tres condiciones:
 174: > sus fallas bajo monopolio son fallas de información e incentivos antes que
 175: > fallas de coordinación de la fuerza; la provisión distribuida puede hacerse
 176: > *más* observable que la provisión monopólica; y la capa puede acotarse de
 177: > modo que su falla no se propague en cascada hacia las capas no
 178: > distribuibles.
 179: 
 180: Las capas (a), (b) y (d) fallan la primera o la tercera condición y permanecen
 181: centrales en nuestro diseño. Las capas (f) a (i) pasan las tres, y Core v0 las
 182: distribuye como un bloque, y debe hacerlo: distribuir la asignación sin la
 183: verificación reproduce la brecha de entrega del presupuesto participativo
 184: (PP), y distribuir la verificación sin la asignación reproduce la sociedad de
 185: la auditoría.
 186: 
 187: La capa (e), la planificación, es el caso deliberadamente sin resolver: Core v0
 188: requiere que los ámbitos de planificación (Planning Scopes) sean públicos,
 189: versionados y portadores de mandato, pero no distribuye su construcción —razón
 190: por la cual la promesa de la arquitectura se enuncia con su calificador
 191: incorporado: lo que distribuye es la asignación *dentro de ámbitos de
 192: planificación acotados por mandato, visibles, versionados y disputables*, nunca
 193: la asignación sobre una agenda sin enmarcar. La Sección 6 muestra que el
 194: calificador no es un detalle: es la restricción vinculante de todo el diseño, y
 195: la Sección 8 eleva su remoción al siguiente objeto del programa de investigación.
 196: 
 197: Dos reglas metodológicas gobiernan todo lo que sigue. La **regla de crítica
 198: comparativa** (P001): toda objeción se evalúa contra la línea base
 199: institucional actual, no contra un ideal —una dificultad compartida por ambos
 200: sistemas es un problema general de la gobernanza, no una refutación de la
 201: propuesta. La **regla de integrar-o-acotar** (P007): una vez que la
 202: arquitectura central está completa, una objeción fundada produce un nuevo
 203: mecanismo solo si el modo de falla derrotaría una afirmación central y no
 204: puede controlarse mediante objetos existentes; de lo contrario produce una
 205: frontera explícita, un riesgo residual visible y un enunciado de limitación.
 206: La primera regla disciplina a los críticos; la segunda disciplina a los
 207: diseñadores —un sesgo hacia pocas reglas simples y generales por sobre la
 208: proliferación de maquinaria específica, en el espíritu de Epstein (1995).
 209: 
 210: ## 3. Trabajo relacionado
 211: 
 212: **Gobernanza policéntrica.** La demostración de Ostrom de que los recursos de
 213: uso común pueden gobernarse mediante regímenes anidados y autoorganizados sin
 214: monopolio central (Ostrom 1990) es el ancestro intelectual más cercano: sus
 215: principios de diseño —ámbito acotado, monitoreo por monitores responsables,
 216: sanciones graduadas, resolución barata de conflictos— reaparecen aquí como
 217: objetos impuestos por software. La diferencia es el ámbito y el instrumento:
 218: apuntamos a funciones estatales presupuestadas antes que a los comunes de
 219: recursos naturales, y codificamos el régimen en una plataforma cuyos cambios de
 220: reglas son ellos mismos objetos versionados y auditables.
 221: 
 222: **Presupuesto participativo.** El PP al estilo de Porto Alegre delega una cuota
 223: de un presupuesto municipal a asambleas ciudadanas (Wampler 2007; Baiocchi y Ganuza 2017). Empíricamente, el PP mejora algunos resultados fiscales pero
 224: sufre de decaimiento del involucramiento, captura por minorías organizadas y
 225: vínculos débiles entre asignación y entrega verificada (Peixoto y Fox 2016).
 226: Core v0 difiere en exactamente esos márgenes: la asignación es continua e
 227: individual antes que asamblearia; la entrega está ligada a la asignación
 228: mediante contratos probatorios (evidential contracts) y desembolso condicional;
 229: y la arquitectura trata la baja participación como un insumo de diseño (Sección
 230: 6) antes que como una falla a exhortar hasta hacerla desaparecer —la acción
 231: colectiva no se sostiene sola a escala (Olson 1965)—. La billetera
 232: cívica misma generaliza el mecanismo de vouchers (Friedman 1962) —dinero público
 233: dirigido por la ciudadanía— desde la elección entre proveedores de servicios
 234: hasta la asignación entre proyectos verificables, añadiendo el ciclo de vida de
 235: verificación que los vouchers nunca portaron.
 236: 
 237: **Federalismo fiscal y democracia epistémica.** Los ancestros formales del
 238: principio de distribución funcional son la literatura de la descentralización
 239: —el teorema de Oates (1972) sobre cuándo la provisión descentralizada domina,
 240: Tiebout (1956) sobre la revelación de preferencias mediante la elección de
 241: jurisdicción, y Besley y Coate (2003) sobre la provisión centralizada versus
 242: descentralizada bajo economía política— con una diferencia deliberada: nuestras
 243: capas son funcionales antes que territoriales, de modo que lo que se distribuye
 244: es una etapa del proceso de gasto (asignación, ejecución, verificación) antes
 245: que un nivel de gobierno. Del lado epistémico, los resultados de agregación de la
 246: Sección 6 pertenecen al linaje del teorema del jurado de Condorcet (1785) y sus
 247: condiciones modernas de falla (Austen-Smith y Banks 1996) —una deuda que
 248: hacemos explícita, porque el régimen de falla del teorema (señales
 249: correlacionadas, estratégicas o sesgadas) es exactamente lo que el séptimo
 250: experimento pone a prueba— y la conversación de diseño con la democracia abierta
 251: de Landemore (2020) y la gobernanza participativa empoderada de Fung y Wright
 252: (2003) es directa: esos programas distribuyen la deliberación y el
 253: empoderamiento; este distribuye la asignación, la ejecución y la verificación con
 254: un núcleo de diseño de mecanismos y de rastro de auditoría que ellos no intentan.
 255: 
 256: **Democracia líquida.** La delegación transitiva o acotada promete flexibilidad
 257: entre la participación directa y la representativa, al costo de la concentración
 258: (Blum y Zuber 2016; Kahng, Mackenzie y Procaccia 2018). Core v0 adopta
 259: delegación acotada, revocable y no compensada con visibilidad obligatoria de la
 260: concentración, y —siguiendo la advertencia de Michels (1911) antes que
 261: desestimarla— trata la concentración de delegados como un riesgo monitoreado con
 262: umbrales de estrés, no como un problema resuelto.
 263: 
 264: **Gobernanza digital y de blockchain.** La literatura sobre DAOs demostró tanto
 265: la viabilidad de la asignación colectiva de recursos codificada por reglas como
 266: su falla característica: la votación plutocrática por tokens y la captura de la
 267: gobernanza (De Filippi y Wright 2018). Core v0 deliberadamente no es un diseño
 268: de blockchain —la identidad es verificada antes que seudónima, y el Estado
 269: soberano permanece como fuente de fondos y de ley— pero importa la lección de
 270: que la meta-gobernanza es la superficie de ataque de mayor apalancamiento
 271: (Sección 8).
 272: 
 273: **Diseño de mecanismos y auditoría.** Nuestros modelos formales son aplicaciones
 274: elementales del riesgo moral bajo observación imperfecta (Holmström 1979) y de
 275: la colusión en jerarquías de supervisión (Laffont y Tirole 1991), con la ley
 276: de Goodhart (Goodhart 1975; Campbell 1976) como advertencia permanente contra la
 277: manipulación de métricas. El diseño de mecanismos existente más cercano para la
 278: asignación ciudadana de fondos públicos es el financiamiento cuadrático (o «plural»)
 279: (Buterin, Hitzig y Weyl 2019), que tasa la concentración mediante la curvatura
 280: de los fondos de contrapartida; la regla de cierre por meta de financiamiento de
 281: Core v0 persigue la misma meta anticoncentración por truncamiento antes que por
 282: tasación, y nuestros resultados de simulación (Sección 6, Hallazgo 1) delimitan
 283: lo que el truncamiento puede y no puede lograr. Del lado de la auditoría, el
 284: experimento de campo de Olken (2007) sobre proyectos viales indonesios es el
 285: anclaje empírico canónico para las probabilidades de detección que nuestras
 286: Proposiciones 1–2 toman como parámetros —y su hallazgo de que la auditoría de
 287: arriba hacia abajo superó al monitoreo de base para el fraude en compras es una
 288: advertencia que esta arquitectura absorbe al hacer de la fiscalización
 289: profesional, no de la observación de la multitud, la capa que condiciona la
 290: liberación. La literatura brasileña de loterías de auditoría (Ferraz y Finan
 291: 2008) aporta la evidencia complementaria de mecanismo —la divulgación de los
 292: hallazgos de auditoría cambia los resultados políticos, y la exposición a
 293: auditoría reduce la corrupción subsiguiente— y sus datos subyacentes de la CGU
 294: entran directamente en la línea base parametrizada por auditorías del séptimo experimento. La
 295: contribución aquí no es la profundidad técnica sino la especificidad: los parámetros de los modelos mapean uno a uno con objetos
 296: arquitectónicos nombrados, de modo que cada proposición es un dial
 297: implementable.
 298: 
 299: **Qué es nuevo.** No hemos realizado la revisión sistemática de literatura previa
 300: que establecería prioridad a nivel de campo (nuestro mapa de literatura es
 301: preliminar), así que reclamamos una **síntesis integradora a nivel de objetos** más
 302: que novedad frente a todo trabajo adyacente. Con esa salvedad, no tenemos
 303: conocimiento de trabajo previo que combine:
 304: 
 305: - **(i)** una descomposición funcional de la actividad estatal en capas
 306:   distribuibles y no distribuibles;
 307: 
 308: - **(ii)** una arquitectura completa a nivel de objetos para la capa de
 309:   asignación;
 310: 
 311: - **(iii)** un análisis formal de incentivos de los mecanismos específicos de
 312:   esa arquitectura;
 313: 
 314: - **(iv)** simulación conductual de sus supuestos de cara a la ciudadanía
 315:   —incluido lo que creemos es una comparación temprana de conocimiento simétrico,
 316:   en simulación, de la construcción abierta de las prioridades de asignación a
 317:   partir de señales ciudadanas agregadas contra la construcción central de ancho
 318:   de banda finito (una prueba simétrica pre-registrada posterior encuentra la
 319:   ventaja distribuida consistente pero pequeña; Sección 6)—;
 320: 
 321: - **(v)** un método documentado de revisión adversarial con una regla de
 322:   detención explícita.
 323: 
 324: Y dos contribuciones adicionales conciernen a la medición y al método:
 325: 
 326: - **(vi)** una comparación institucional de extremo a extremo, dentro de una
 327:   porción acotada de inversión pública, sobre el valor social entregado por unidad
 328:   de presupuesto, descomponiendo la selección de la entrega sobre carteras
 329:   apareadas (ambas capas interactúan dentro del aparato exploratorio). Por
 330:   separado, un gate simétrico pre-registrado posterior —una prueba **solo-de-
 331:   selección** con la entrega mantenida en paridad— encuentra la ventaja de
 332:   *selección* positiva pero pequeña (Sección 6); no pone a prueba la interacción de
 333:   entrega. Este trabajo también introduce la brecha de
 334:   visibilidad (entrega oficialmente reportada menos entrega real) como un déficit
 335:   de rendición de cuentas medible del statu quo;
 336: 
 337: - **(vii)** esa comparación contra una línea base parametrizada por auditorías,
 338:   construida a partir de los hallazgos publicados de instituciones
 339:   supremas de auditoría de nueve jurisdicciones y la Unión Europea (un escenario
 340:   informado por prácticas documentadas cuya verificación de fuentes primarias aún
 341:   se está completando), bajo una condición preregistrada de retiro del resultado principal.
 342: 
 343: Las evaluaciones de presupuestos participativos miden participación y
 344: asignación; los estudios de auditoría miden fugas después del hecho; no
 345: conocemos ninguno que mida, dentro de un mismo marco, cuánto valor entregado
 346: produce una institución de asignación a partir de los mismos recursos.
 347: 
 348: ## 4. La arquitectura Core v0
 349: 
 350: Resumimos la arquitectura de referencia al nivel necesario para el análisis; el
 351: modelo completo de objetos, las máquinas de estado y las capas de interfaz
 352: ciudadana están especificados en el corpus público.
 353: 
 354: **Financiamiento.** Una autoridad implementadora migra una cuota, con mandato
 355: legal, de un presupuesto existente hacia billeteras cívicas individuales:
 356: capacidad de asignación periódica, no retirable, de propósito público, igual
 357: por ciudadano por defecto. Todo ámbito de planificación activo porta un
 358: registro de *Allocation Mandate* (mandato de asignación) que nombra el
 359: estatuto o instrumento que autorizó la migración, su rango legal, el órgano al
 360: que se imputan las asignaciones y la fórmula de asignación. La plataforma
 361: registra esa autorización externa; no la fabrica. La operación en modo
 362: vinculante está supeditada a que se haya registrado una norma habilitante de
 363: rango suficiente; en caso contrario, el modo predeterminado admisible es la
 364: operación consultiva o tutelada. El acto de asignación se diseña para replicar
 365: dos garantías propias del sufragio: el secreto de la preferencia y la
 366: resistencia a la coacción (receipt-freeness). En la medida en que una norma
 367: habilitante lo reconozca, podrá ampararse con protecciones equivalentes a las
 368: del voto; hasta entonces, son garantías técnicas de la plataforma, no un
 369: estatuto legal. Las asignaciones individuales son seudónimas en la capa
 370: pública y se reconcilian criptográficamente contra los totales públicos por
 371: ámbito —cada peso trazable como dinero, ningún ciudadano trazable como
 372: asignador, y no existe recibo ni prueba exportable de ninguna asignación
 373: individual, ni siquiera voluntariamente, de modo que un patrón que exija
 374: prueba nunca pueda obtenerla (la defensa propia del voto secreto, aplicada a
 375: la billetera). Un *Fiscal Commitment Profile* (perfil de compromiso fiscal)
 376: por ámbito hace públicos y versionados el porcentaje migrado, la indexación y
 377: la latencia de entrega, de modo que el estrangulamiento fiscal por parte de la
 378: tesorería establecida sea medible y atribuible antes que silencioso. Los
 379: servicios esenciales con obligaciones de continuidad quedan protegidos por
 380: pisos no asignables, fuera de la popularidad ciudadano-por-ciudadano.
 381: 
 382: **Proyectos y roles.** Los proyectos financiables declaran una tesis de valor
 383: con afirmaciones verificables, partes afectadas, riesgos y antivalores, un plan
 384: de fases e hitos, y un *contrato probatorio* (evidential contract): qué debe
 385: probarse, por qué clase de productor calificado, con qué método, para qué efecto
 386: formal. Seis roles están estructuralmente separados —proponente, modelador/
 387: diseñador, ejecutor, fiscalizador, productor de evidencia, custodio— con las
 388: relaciones de partes vinculadas declaradas en un grafo clasificado por
 389: severidad. La regla que soporta la carga es que el ejecutor nunca elige ni paga
 390: a sus propios fiscalizadores o productores de evidencia: el trabajo de control se
 391: financia desde un presupuesto de control separado y se asigna por protocolo.
 392: 
 393: **Cierre paralelo y desembolso condicional.** Un proyecto publicado reúne
 394: compromisos de financiamiento, asignaciones de fiscalizadores, compromisos de
 395: evidencia y confirmaciones de beneficiarios de manera concurrente; la ejecución
 396: se vuelve posible solo cuando todas las condiciones requeridas por su *política
 397: de umbrales* (threshold policy) proporcional cierran. Los fondos comprometidos
 398: quedan en custodia, no transferidos: la liberación ocurre por hito, contra
 399: evidencia de cumplimiento revisada, con retención, verificaciones de bloqueadores
 400: y garantías materializadas por custodios externos antes de cualquier liberación.
 401: Un *Duty-of-Care Anchor* (ancla de deber de diligencia) nombra, antes del desembolso, a la persona jurídica solvente que responde civilmente frente a terceros por los daños derivados de la ejecución, en particular los daños a la integridad física.
 402: 
 403: **Infraestructura de atención.** La ciudadanía actúa a través de una interfaz
 404: estratificada: descubrimiento con ordenamiento controlado por el usuario y con
 405: razón visible; tarjetas de proyecto compactas; y superficies de auditoría
 406: progresivamente más profundas hasta el rastro completo. Los ciudadanos que no
 407: prestan atención son servidos por perfiles automáticos de asignación
 408: configurables —o un perfil por defecto sensato cuando no se define ninguno—
 409: y por delegación acotada y revocable con
 410: visibilidad de la concentración. La arquitectura no supone ciudadanos atentos;
 411: supone que en su mayoría son desatentos y enruta su peso a través de una
 412: intermediación inspeccionable (Lupia y McCubbins 1998). Esta es una respuesta
 413: de diseño a la objeción de competencia ciudadana en su forma contemporánea más
 414: aguda (Brennan 2016): antes que restringir el derecho de nadie a participar,
 415: la arquitectura hace que la intermediación que la desatención produce sea
 416: visible, revocable y auditable.
 417: 
 418: Un aparente reproche —que participar por aplicación, billetera y tutor de IA
 419: excluya a la población no digitalizada— se disuelve bajo la disciplina
 420: comparativa: el ciudadano no digital ya delega hoy, entregando su decisión,
 421: vía el voto, a un representante lejano que asigna el presupuesto por él. Core
 422: v0 no agrega una barrera: quita un nivel de indirección. Quien nunca participa
 423: cae en el valor por defecto del sistema —igual por ciudadano, acotado por
 424: mandato—, no en la preferencia de la minoría atenta; y quien participa aunque
 425: sea mínimamente, incluso por vías no digitales o delegación asistida, acerca
 426: la decisión a sus intereses directos mediante la microdelegación y reglas como
 427: «cerca de mí», que financian lo que puede tocar. Lo que aparenta excluir,
 428: incluye más —con la construcción del ámbito de planificación como la única
 429: indirección restante (Sección 8).
 430: 
 431: **Transición.** El despliegue procede a través de modos de operación —cerrado,
 432: tutelado, semiabierto, abierto— en los que una autoridad pública puede retener la revisión de elegibilidad (admisibilidad de proyectos), pero toda decisión tutelada material, y todo
 433: silencio tutelado más allá de su plazo, se convierte en un objeto público de
 434: resolución de gobernanza. Los indicadores de resistencia del sistema
 435: establecido (cuota de ámbito abierta, tasas de rechazo y de vencimiento de
 436: plazos, privilegio del operador) hacen distinguible la adopción simbólica de
 437: la transferencia real.
 438: 
 439: ## 5. Análisis formal
 440: 
 441: Enunciamos los tres modelos y sus resultados; las demostraciones son álgebra
 442: de un paso y aparecen en la nota acompañante ([formal-models](../research/formal-models.md)).
 443: Todos los agentes son neutrales al riesgo; los presupuestos están normalizados
 444: a 1. La estructura de disuasión a lo largo del texto es la de Becker (1968):
 445: una violación se disuade cuando la probabilidad de detección por lo que está
 446: en juego excede su ganancia —nuestra contribución es mapear cada término de
 447: esa desigualdad sobre un objeto arquitectónico nombrado y configurable. Para
 448: evitar colisiones de notación, *Proposición N* designa los resultados formales
 449: de esta sección; *P001/P007*, las reglas metodológicas (§2); y *predicción N*,
 450: las predicciones conductuales de §5.3.

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$lines = Get-Content -LiteralPath '"'drafts/paper.es.md'; for ("'$i=450; $i -lt 900; $i++) { '"'{0,4}: {1}' -f ("'$i+1), $lines[$i] }' in C:\devel\claude-projects\distributed-governance-research
 succeeded in 194ms:
 451: 
 452: ### 5.1 Desembolso supeditado a hitos
 453: 
 454: Un ejecutor elige entregar un hito a costo privado *c* ∈ (0, 1) o desviar. El
 455: mecanismo libera un adelanto *a*, retiene el remanente para la aceptación
 456: revisada, recupera una fracción *r* del adelanto ante la no entrega confirmada,
 457: incauta una garantía depositada *γ* (con costo de mantenimiento *κ* por unidad),
 458: e impone una pérdida reputacional de continuación *R*. La revisión confirma la
 459: desviación con probabilidad *p* —la calidad conjunta de los estándares de
 460: evidencia, la independencia del fiscalizador y la corroboración.
 461: 
 462: **Proposición 1 (compatibilidad de incentivos).** La entrega es óptima si y solo
 463: si
 464: 
 465: > *c* ≤ *p* · [ (1 − *a*(1 − *r*)) + *γ* + *R* ].
 466: 
 467: La entrega debe ser más barata que la probabilidad de detección por el total en
 468: juego. Cada prueba de manipulación de desembolsos en la arquitectura es un
 469: término de esta desigualdad.
 470: 
 471: **Proposición 2 (la verificación débil debe tasarse).** La garantía mínima que
 472: sostiene la entrega para todo *c* ≤ *c̄* es *γ\**(*p*) = max{0, *c̄*/*p* −
 473: (1 − *a*(1 − *r*)) − *R*}, decreciente y convexa en *p*. Allí donde la
 474: verificación es débil —mercados de fiscalización delgados, calidad de evidencia
 475: pobre— el mecanismo debe compensar con adelantos más pequeños, mayor
 476: recuperabilidad, garantías más grandes o ejecutores de mayor reputación. Un único
 477: porcentaje de garantía global no puede ser óptimo a lo largo de entornos de
 478: verificación heterogéneos.
 479: 
 480: Los términos de disuasión de esta condición son complementos, no sustitutos. Un
 481: programa de ablación pre-registrado sobre los experimentos complementarios
 482: (Offermann 2026b) midió la consecuencia: en el punto de operación diseñado la
 483: desigualdad se sostiene con holgura, de modo que quitar cualquier término
 484: individual cuesta casi nada — y un despliegue negociado concesión defendible por
 485: concesión puede cruzar el umbral de forma invisible, terminando por debajo del
 486: status quo que reemplazó (entregando cerca del 87% del valor verificado del status
 487: quo, con la calidad de selección intacta) mientras luce plenamente instrumentado. El corpus exige por ello que
 488: cada ámbito publique su margen de la desigualdad de disuasión en su configuración
 489: operativa, recomputado ante cada cambio de término, con las reducciones de
 490: términos clasificadas como cambios de regla materiales (docs/111). La misma
 491: holgura, mantenida intacta, compra un dividendo inesperado: absorbe el error del
 492: instrumento de verificación — en el panel complementario de cinco familias
 493: reales de modelos, incluso un verificador máquina que deja pasar ~20% del
 494: fraude que exige juicio produjo una fuga indistinguible de la verificación
 495: humana pura, porque la cascada elimina los intentos aguas arriba — siempre que
 496: el adversario no coluda a través de las capas de verificación (Offermann 2026b,
 497: docs/113).
 498: 
 499: **Proposición 3 (compromiso entre participación y disuasión).** Elevar *γ*
 500: relaja la compatibilidad de incentivos a tasa *p* pero reduce el pago de los
 501: ejecutores honestos a tasa *κ*; bajo un objetivo del diseñador que pondera una
 502: unidad de holgura de incentivos por igual contra una unidad de pago del ejecutor
 503: honesto, un incremento de la garantía es netamente beneficioso solo si *p* > *κ*
 504: (otras ponderaciones desplazan el umbral, no la estructura del compromiso). Allí
 505: donde la calidad de detección está por debajo del costo local del capital,
 506: acumular garantías excluye a ejecutores honestos de bajo margen sin disuadir el
 507: fraude —el contenido formal de la disciplina de proporcionalidad de la
 508: arquitectura.
 509: 
 510: ### 5.2 Fiscalización a prueba de colusión
 511: 
 512: Un hito no entregado vale *G* para el ejecutor si es aprobado
 513: fraudulentamente. La liberación requiere la aprobación de *k* fiscalizadores
 514: asignados por protocolo, cada uno portando un capital en juego confiscable *W*
 515: (honorarios futuros del protocolo más reputación de rol) y enfrentando una
 516: probabilidad de descubrimiento posterior a la aprobación *q*. Como la asignación
 517: está protocolizada y los emparejamientos repetidos son visibles, el ejecutor y el
 518: fiscalizador son extraños: una oferta de soborno es en sí misma reportada con
 519: probabilidad *δ*, costándole al ejecutor una penalidad *P_e*.
 520: 
 521: **Proposición 4 (a prueba de colusión).** El fraude de aprobación es insostenible
 522: si
 523: 
 524: > *k* · *q* · *W* ≥ *G* − (*δ* / (1 − *δ*)) · *P_e*,
 525: 
 526: y en particular siempre que *kqW* ≥ *G*. Tres corolarios cargan peso de diseño:
 527: 
 528: - ***La corroboración sustituye al capital reputacional.*** El capital en
 529:   juego requerido por fiscalizador cae linealmente en *k*, de modo que la
 530:   revisión redundante es exactamente lo que hace viables los conjuntos de
 531:   fiscalizadores de reputación superficial, a costo de control lineal —que es
 532:   para lo que sirven las políticas de umbrales proporcionales.
 533: 
 534: - ***Las relaciones repetidas son la superficie de ataque.*** El término de
 535:   fricción existe solo mientras se impida la contratación relacional, razón
 536:   por la cual la visibilidad de los emparejamientos repetidos soporta la carga
 537:   (mantenemos la probabilidad de reporte *δ* exógena a *k*; endogenizarla —más
 538:   revisores abordados, más chances de un reporte— solo fortalece la
 539:   condición).
 540: 
 541: - ***Los mercados delgados atacan ambos modelos a la vez.*** Un fiscalizador
 542:   monopolista que no puede excluirse de manera creíble pierde su capital
 543:   confiscable (*W* → 0) al tiempo que degrada *p* en la Proposición 1: las dos
 544:   condiciones identifican los mismos entornos como frágiles, por la misma
 545:   razón.
 546: 
 547: ### 5.3 Asignación bajo restricción de atención
 548: 
 549: Los ciudadanos asignan pequeños presupuestos individuales; el retorno pivotal de
 550: evaluar proyectos es insignificante, de modo que la ignorancia racional es el
 551: equilibrio (Downs 1957), y la pregunta de diseño es hacia dónde fluye el peso de
 552: la mayoría *desatenta*: hacia la saliencia amplificada por la prueba social
 553: (Bikhchandani, Hirshleifer y Welch 1992; Salganik, Dodds y Watts 2006), o
 554: hacia la capa de reglas por defecto de la propia arquitectura, cuyo
 555: enrutamiento sigue la priorización distribuida de proyectos —los perfiles de asignación agregados—, no un plan central. El modelo arroja tres predicciones verificables —los topes doman
 556: las cascadas (predicción 1), los valores por defecto anclan la calidad (predicción 2), el decaimiento
 557: se degrada con gracia solo con valores por defecto (predicción 3)— evaluadas a continuación.
 558: 
 559: ## 6. Evidencia computacional
 560: 
 561: Ponemos a prueba las tres predicciones de §5.3 —y, en experimentos sucesivos,
 562: los supuestos de las Proposiciones 1–4— en una simulación basada en agentes.
 563: Cada experimento (E1–E10) corresponde a un hallazgo:
 564: 
 565: | Exp | Qué pone a prueba | |
 566: |---|---|---|
 567: | E1 | ¿los topes de financiamiento suben la calidad? | Hallazgo 1 |
 568: | E2 | ¿qué sostiene la calidad de la asignación? | Hallazgo 2 |
 569: | E3 | ¿qué amortigua el decaimiento de la participación? | Hallazgo 3 |
 570: | E4 | agregación distribuida vs. construcción central (refinada por una frontera de fricciones simétricas + captura, E4-v4/v5; y un mapa de robustez de cuatro escenarios de miopía al daño v1.14, §6) | Hallazgo 4 |
 571: | E5 | valor entregado: selección × entrega, a presupuesto igualado | Hallazgo 5 |
 572: | E6 | competencia reputacional y estándar de ejecución | Hallazgo 6 |
 573: | E7 | comparación contra una línea base parametrizada por auditorías | Hallazgo 7 |
 574: | E8 | robustez bajo participación conductual endógena | cierre de §6 |
 575: | E9 | el stack completo: planificación × selección × entrega (atribución de Shapley) | Hallazgo 9 |
 576: | E10 | la capa de costo administrativo (presupuesto neto, simétrica) | Hallazgo 10 |
 577: 
 578: Simulamos 10.000 ciudadanos a lo largo de 24 ciclos mensuales asignando sobre un
 579: conjunto permanente de 40 proyectos con calidad *θ*, saliencia *s* (medida
 580: corr(*θ*, *s*) ≈ 0.24), pesos-necesidad del planificador *w* = λ*θ* + (1 − λ)*u*
 581: (donde *u* es un componente idiosincrático de necesidad independiente de la calidad)
 582: con peso de mezcla λ ∈ {0.4, 0.8} —medida corr(*θ*, *w*) ≈ 0.55 y ≈ 0.97
 583: respectivamente— y escasez de 3× (solo una minoría de proyectos puede
 584: completarse). Los evaluadores (2–10%) financian la mejor calidad que muestrean;
 585: los seguidores de saliencia ven una superficie de descubrimiento de seis ranuras
 586: ordenada por saliencia amplificada por el progreso de financiamiento; el
 587: presupuesto de los seguidores de valores por defecto llena proyectos en orden de
 588: prioridad de planificación. La regla de cierre por meta de financiamiento es
 589: conmutable. Veinte corridas con semilla por condición; el código es sin
 590: dependencias y determinista (`scripts/simulation/allocation-sim.mjs`; tablas
 591: completas en [simulation-results](../research/simulation-results.md)).
 592: 
 593: **Estado de los cocientes compuestos anteriores (retirados).** Una versión anterior
 594: reportó un único cociente compuesto de valor por unidad de presupuesto frente a tres
 595: líneas base (un cero-control, E5; un statu quo parametrizado por auditorías, E7;
 596: adopción conductual, E8). Ese número único **conflacionaba tres canales distintos** —
 597: calidad de selección, costo de maquinaria administrativa y fuga/desvío— y se **retira
 598: como efecto calibrado**. E5 ahora se formaliza como una pila multi-capa transparente:
 599: calidad de selección a presupuesto *igualado* (el resultado de E4 anterior), con el
 600: costo administrativo y la fuga como **canales declarados, separados y paramétricos**
 601: —apagados por defecto, así que al central se le otorga costo cero y fuga cero, y E5 se
 602: reduce exactamente al resultado de selección—, cada uno reportado sin conflación y, en
 603: la extensión de costo-y-corrupción, anclado a datos reales de presupuesto público y
 604: corrupción-en-compras (`scripts/simulation/e4-v5/e5-layers.mjs`).
 605: 
 606: **Estado cuantitativo (rector).** Una prueba de estrés pre-registrada, simétrica y
 607: solo-de-selección —ambos brazos con presupuestos esperados de reportes de tasación
 608: igualados, el mismo pool de proyectos, costos y ruido, entrega en paridad, cada uno
 609: actuando sobre su propia estimación ruidosa y no sobre la verdad— encontró que la
 610: ventaja de selección distribuido-menos-central es **positiva en las 18 celdas
 611: pre-especificadas pero pequeña.** El estadístico de decisión pre-registrado es la
 612: **mediana agrupada Δ = 0.025**, por debajo del **umbral de reconstrucción del
 613: programa de investigación** pre-registrado de **0.05**; una estimación **post-hoc** de ratio-of-sums es
 614: **Δ = 0.026, con un intervalo Monte-Carlo por conglomerado-de-mundos al 95%
 615: [0.023, 0.029]** (reportada por separado, sobre el proceso generador simulado). El
 616: multiplicador compuesto, por lo tanto, **no** se reclama como efecto calibrado. Esta
 617: es una prueba estilizada de un *mecanismo de selección*, no una implementación
 618: validada de Core v0: sus variables de valor y crédito son puntajes abstractos, no
 619: visibilidad, trazabilidad, permanencia o valor público medidos. El **0.05** es un
 620: **umbral de rebuild** del programa de investigación sobre esta escala no calibrada
 621: (una regla go/no-go sobre si perseguir un rebuild cuantitativo), **no** un umbral de
 622: materialidad de política calibrado. La especificación rectora es
 623: [claim-and-estimand-contract](../research/claim-and-estimand-contract.md); la prueba,
 624: su pre-registro congelado, resultados y diagnósticos están en
 625: `scripts/simulation/e5-sp-symmetry-gate.mjs` y `audits/2026-07-10/symmetry-gate-*`.
 626: Las contribuciones que cargan el peso son la arquitectura, la dirección del
 627: mecanismo y el mapa de robustez comparativa v1.14 entre regímenes declarados sin
 628: miopía y con miopía al daño, no un multiplicador puntual ni impacto calibrado.
 629: 
 630: **El escenario de referencia declarado es decisivo (E4 v1.14).** Cuando el selector
 631: central se modela como lo describe la evidencia —su *dirección* en cada eje anclada en la
 632: literatura (no su magnitud ajustada): casi ciego al *daño difuso en la cola larga de baja
 633: visibilidad* (Hayek 1945; Scott 1998; Olson 1965; Bandiera, Prat y Valletti 2009, cuyo
 634: **83% de desperdicio pasivo** en compras de bienes estandarizados muestra que la mayor
 635: parte de la pérdida pública no es elegida), proyectando sus propios priores y
 636: sobreestimando beneficios visibles y tasables (Broockman y Skovron 2018; Flyvbjerg et al.
 637: 2003), y ladeado hacia el crédito reclamable (Mayhew 1974; Arnold 1990), en un espacio de
 638: proyectos de cola pesada y baja visibilidad (Skuhrovec et al. 2013)— **la selección
 639: distribuida basada en cobertura recupera cerca del 98% de la referencia voraz de
 640: información completa del modelo frente al ~44% del central: un contraste de modelo
 641: condicional de 54 puntos**, no una calibración empírica ni un efecto de campo (la
 642: referencia es una normalización voraz, no una institución factible ni un óptimo de
 643: bienestar). Esto no es un filo de cuchillo: es robusto en todo el espacio declarado;
 644: sobrevive a la degradación realista de señal del *ruteo* presupuestario universal de Core
 645: v0 (una composición ~5% reportes activos / ~35% microdelegación / ~60% reglas de perfil
 646: — el *ruteo* universal es arquitectónico, la *información* independiente efectiva no lo
 647: es); y se mantiene incluso otorgándole al central toda competencia *salvo* la visión del
 648: daño (~+14%). El central solo supera a la cobertura **abandonando los supuestos
 649: declarados** —otorgándole la visión del daño que la literatura le niega— y aun así solo
 650: en un mundo casi sin daño; la idealización *espejo* del brazo distribuido (su propia
 651: receta reflejada: señal perfecta, mundo con daño, central en su miopía declarada) gana
 652: por goleada (~+118%). La única sensibilidad que reduce materialmente la brecha —sin
 653: voltear su signo en el rango declarado— es el error correlado/de modo común en el brazo
 654: de cobertura (una plataforma/recomendador compartido o delegación concentrada), que lleva
 655: ~+54% a ~+26% con correlación fuerte. Esta es la única condición *arquitectónica* del
 656: mecanismo, no un mero parámetro barrido: **la cobertura sin diversidad de fuentes puede
 657: reproducir el cuello de botella epistémico que pretende reemplazar.** Core v0 trata por
 658: tanto la concentración de delegados, proveedores de perfil y recomendadores como
 659: cantidades observables con umbrales de diversificación (§8), en vez de suponer
 660: independencia por decreto. El gate de simetría pre-registrado sigue siendo la
 661: computación **confirmatoria** separada del artículo (un NO-GO de casi-paridad bajo un
 662: proceso generador distinto); este mapa es un análisis de escenarios posterior, no una
 663: reclasificación de aquel. El mapa completo de cuatro escenarios, el anclaje literario, los
 664: rincones idealizados espejo y la frontera de modo común están en el **Apéndice E4**. El
 665: modelo localiza una frontera; no estima un efecto de campo.
 666: 
 667: **Hallazgo 1: los topes de financiamiento son un dispositivo anticoncentración,
 668: no un dispositivo de calidad.** Con el cierre ACTIVADO, la concentración cae
 669: (Gini de financiamiento 0.732 vs 0.759), el 5% de proyectos más saliente absorbe
 670: menos (16.8% vs 19.6% de todo el financiamiento), y se completan un 15% más de
 671: proyectos (25.3% vs 21.9%). Pero la selección de calidad no cambia
 672: (*sel(θ)*, la correlación de Pearson entre proyectos entre la calidad latente θ y el
 673: indicador binario de que un proyecto alcanza su meta de financiamiento, ≈ 0.39 vs
 674: 0.41): el excedente truncado se derrama hacia el siguiente
 675: proyecto más *visible*, no hacia el siguiente *mejor*. La afirmación de la
 676: arquitectura respecto de la regla de cierre debería estar —y en el corpus ahora
 677: está— acotada en consecuencia.
 678: 
 679: **Hallazgo 2: el ancla por defecto, no la atención ciudadana, sostiene la
 680: calidad de la asignación.** Una mezcla anclada en valores por defecto, con un
 681: planificador casi perfectamente informado (r ≈ 0.97), alcanza sel(θ) ≈ 0.71 —
 682: muy por encima de las configuraciones impulsadas por saliencia (≈ 0.35–0.43). En
 683: cambio, subir la atención ciudadana de 2% a 10% casi no mueve la
 684: aguja —a lo sumo ≈ 0.08 en los regímenes de saliencia, y prácticamente nada en
 685: los anclados en valores por defecto—, mientras que degradar la calidad
 686: informativa del vector de casi perfecta a moderada (r ≈ 0.97 → 0.55) cuesta ≈
 687: 0.29 de selección. Manda el ancla, no la atención.
 688: 
 689: Dos salvedades mantienen honesto el hallazgo:
 690: 
 691: - **Por construcción.** La regla por defecto es un asignador determinista ya
 692:   correlacionado con θ que retiene la mayor parte del presupuesto; lo que se
 693:   mide es el *condicionamiento* —cuánto determina la calidad informativa del
 694:   vector el valor del ancla, y cuán poco lo sustituye la atención—, no la
 695:   sabiduría de la multitud.
 696: 
 697: - **Robustez.** Un panel de sensibilidad (variando el tamaño de muestra del
 698:   evaluador y la fuerza de la prueba social) muestra que el ordenamiento de
 699:   regímenes es robusto, salvo bajo prueba social muy fuerte, donde los
 700:   regímenes convergen dentro del ruido porque la amplificación fuerte también
 701:   propaga la señal de calidad de los evaluadores. Las magnitudes dependen de
 702:   los parámetros y no están calibradas; lo que sobrevive a todas las
 703:   variaciones es el ordenamiento y el predominio de la calidad informativa de
 704:   la priorización.
 705: 
 706: Este hallazgo cuantifica el apalancamiento concentrado en aquello que
 707: construye la priorización de proyectos que sigue el tramo pasivo. Esa
 708: priorización tiene dos capas —que un estudio complementario (Offermann 2026b)
 709: separó por primera vez—: la categorización macro (el Ámbito de Planificación
 710: de este corpus, que enmarca la elegibilidad y no porta pesos de presupuesto) y
 711: los perfiles de asignación agregados que rutean el presupuesto dentro de ella.
 712: El arreglo distribuido es robusto a la calidad de esa categorización y el
 713: central es frágil a ella, así que la ventaja sobre un status quo central no es
 714: fija: crece a medida que empeora la planificación central —una dirección interna
 715: al modelo que el aparato complementario ilustra (un contraste condicional que se
 716: amplía sustancialmente a medida que se degrada la categorización central, no un
 717: multiplicador calibrado; véase la nota de estado cuantitativo en esta sección).
 718: 
 719: Dos hechos arquitectónicos acotan el enunciado y evitan una
 720: sobreinterpretación tentadora. Primero, la capa por defecto es sustituible, no
 721: obligatoriamente central: el autopiloto cívico ofrece a cada ciudadano
 722: asignación manual, delegación, perfiles publicados, una regla automática
 723: personal, o el valor por defecto del sistema; un ciudadano en incorporación
 724: debe seleccionar o reconocer explícitamente un perfil base, y solo la porción
 725: que nunca se involucra sigue necesariamente el valor por defecto del sistema
 726: —que a su vez opera bajo un mandato de asignación registrado. Segundo, la
 727: construcción centralizada de los pesos de ámbito es propiedad de los modos de
 728: transición cerrado y tutelado, no de la arquitectura: los modos de operación
 729: son estados configurados por país, y la trayectoria diseñada apunta hacia la
 730: construcción abierta (el Hallazgo 4 mide su viabilidad dentro del modelo).
 731: 
 732: Los números establecen, por tanto, un condicional. La restricción vinculante
 733: sobre la calidad de la asignación es la calidad informativa de la
 734: **priorización que sigue la porción pasiva** —los perfiles de asignación
 735: agregados, no un vector de planificación macro—, sea quien sea que la provea.
 736: Un proveedor capturado o ignorante es el modo de falla; uno bien informado o
 737: bien agregado, el activo. Aleatorizar esa priorización para escapar de la
 738: captura no ayuda: compra neutralidad al precio de una calidad casi aleatoria
 739: para la porción pasiva. Y como la trayectoria diseñada distribuye su
 740: construcción (modo abierto) y la mantiene visible, versionada y sustituible,
 741: la restricción se satisface por distribución, no por una agenda central. Esto
 742: es distinto del punto más estrecho de fijación de agenda de la Sección 8, que
 743: concierne solo a quién enmarca la elegibilidad.
 744: 
 745: E1–E3 no autorizan dos lecturas: el origen de la priorización queda sin
 746: especificar (r es una propiedad del vector, no de una oficina estatal), y la
 747: multitud modelada porta prueba social pero ningún conocimiento —de modo que
 748: estos experimentos comparan atención frente a calidad de los pesos, no
 749: conocimiento central frente a distribuido. El Hallazgo 4 hace esa comparación
 750: de manera adecuada.
 751: 
 752: **Hallazgo 3: lo que amortigua el decaimiento de la participación es el nivel del
 753: ancla, no hacia dónde fluye el peso de quienes se van —nuestra propia predicción
 754: falló aquí.** Predijimos que la evaluación activa en decaimiento (10% a 2% a lo
 755: largo de 24 ciclos) degradaría la asignación de manera grácil solo si la cuota
 756: liberada fluía hacia los valores por defecto antes que hacia la saliencia.
 757: Explotando semillas comunes a través de condiciones, el análisis emparejado
 758: rechaza esto: el efecto del destino sobre la selección general es nulo en ambas
 759: fuerzas de ancla (diferencias emparejadas medias 0.001 [−0.031, 0.033] y 0.021
 760: [−0.028, 0.071]), y el único intervalo que excluye el cero es pequeño y de signo
 761: opuesto (con un ancla fuerte, el destino de saliencia preserva la alineación de
 762: ciclo tardío ligeramente mejor —plausiblemente porque la prueba social
 763: amplificada también propaga la siembra de los evaluadores). Lo que gobierna la
 764: robustez frente al decaimiento es la cuota estructural de la propia capa por
 765: defecto, la variable del Hallazgo 2. El decaimiento del involucramiento —el
 766: destino documentado de la participación en tecnología cívica (Hirschman 1970;
 767: Peixoto y Fox
 768: 2016)— es un riesgo amortiguado aquí, pero el amortiguador es el tamaño de la
 769: capa institucional, y la alineación de calidad dentro del ciclo aún se erosiona
 770: en los ciclos más tardíos bajo todas las condiciones, de modo que el decaimiento
 771: se compra, no es gratis.
 772: 
 773: **Hallazgo 4: las señales dispersas agregadas superan a la construcción central
 774: de ancho de banda fijo del vector de pesos —pero una reexaminación justa y
 775: simétrica resuelve la ventaja en una frontera condicional y añade una
 776: resistencia a la captura que la protege.** Un cuarto experimento preregistrado
 777: (diseño y predicciones comprometidos antes de cualquier corrida;
 778: `research/e4-institutional-knowledge-design.md`) modela el conocimiento de manera
 779: simétrica en lugar de dotarlo: un planificador con ancho de banda fijo (treinta
 780: inspecciones profundas; su correlación con la calidad latente es ahora una salida
 781: medida, que se desploma de 0.81 → 0.37 → 0.17 a medida que el conjunto de
 782: proyectos crece de 40 → 200 → 1000) frente a un treinta por ciento de la
 783: ciudadanía que posee cuatro señales locales individualmente pobres cada uno
 784: (ruido 0.35). Cinco regímenes comparten el mismo mundo y las mismas señales y
 785: difieren únicamente en la institución de agregación. La predicción preregistrada
 786: de cruce por escala falló en la dirección informativa: la construcción abierta
 787: del vector de pesos —un promedio simple de las señales ciudadanas por proyecto—
 788: supera a la construcción central pura en *cada* escala, incluida la más pequeña,
 789: donde el planificador inspecciona tres cuartas partes del mundo (sel(θ) 0.76 vs
 790: 0.62 con N = 40; 0.73 vs 0.04 con N = 1000). Doce mil señales ruidosas promedian
 791: en un vector casi perfecto; treinta buenas inspecciones no pueden competir, y el
 792: ancho de banda central fijo decae hacia la aleatoriedad a medida que el mundo
 793: crece —una lógica de agregación de Condorcet (1785), y la tratamos como tal: las
 794: condiciones de falla conocidas del teorema del jurado (Austen-Smith y Banks
 795: 1996) definen exactamente la frontera que el séptimo experimento pone a prueba.
 796: Tres salvedades cargan el peso honesto del hallazgo. Primero, el mismo
 797: conocimiento disperso *sin* una institución de agregación se desperdicia: el
 798: régimen no coordinado financia el 0.6–15% de los proyectos y selecciona mal —el
 799: resultado reivindica los mecanismos de agregación, no la ausencia de mecanismo, y
 800: la capa de valor-por-defecto-más-cierre de Core v0 es exactamente uno de esos
 801: mecanismos. Segundo, la agregación vence al ruido, no al sesgo: las señales son no
 802: sesgadas por construcción, y un sesgo de modo común no correlacionado con la
 803: calidad (desinformación, asignación expresiva) no se promediaría a cero —solo se
 804: probó la contaminación endógena por prueba social, que resultó en gran medida
 805: benigna porque el avance visible del financiamiento está él mismo correlacionado
 806: con la calidad en un sistema bien anclado. Tercero, la elicitación es no
 807: estratégica por supuesto; en el despliegue, el reporte de señales se convierte en
 808: una superficie de manipulación y clientelismo, y la mecánica de la construcción
 809: abierta de ámbitos sigue siendo un problema de diseño supeditado a condiciones.
 810: Dentro de esos límites, el hallazgo apunta en una dirección clara: la variable vinculante no es quién sostiene la pluma sino cuánta
 811: información dispersa ingiere la institución de construcción de ámbitos.
 812: 
 813: La simulación también disciplina la retórica —en ambas direcciones. Nada en
 814: E1–E3 apoya describir la asignación de Core v0 como "la sabiduría de las
 815: multitudes": la descripción honesta es *intermediación inspeccionable con un
 816: valor por defecto corregible por la ciudadanía*, la cual los resultados muestran
 817: que es a la vez realista y mejor que la alternativa impulsada por saliencia hacia
 818: la que convergen las plataformas no estructuradas. Y nada en E1–E3 autoriza la
 819: lectura opuesta —que el conocimiento de la planificación central vence al
 820: conocimiento distribuido— porque nunca modelaron el conocimiento distribuido;
 821: cuando E4 lo hace, la agregación gana allí donde se cumplen sus precondiciones
 822: nombradas. Ambos discursos pierden su eslogan; el diseño conserva sus números.
 823: 
 824: *Una reexaminación justa y simétrica (E4-v4/v5).* Este primer E4 le dio al
 825: central un ancho de banda de inspección fijo y dejó las señales ciudadanas sin
 826: sesgo —dos idealizaciones que, como mostró una revisión adversarial, inclinan la
 827: comparación a favor del brazo distribuido—. Un modelo reconstruido
 828: (`scripts/simulation/e4-v4-symmetric-frontier.mjs`,
 829: `research/e4-v4-symmetric-frontier-results.txt`, `research/e4-v5-capture-design.md`)
 830: le da a *ambas* instituciones una fricción simétrica para percibir el valor
 831: verdadero, incluido el daño: el central atenúa el daño percibido por un
 832: coeficiente η (0 = ciego al daño difuso, 1 = un planificador plenamente
 833: responsable), mientras el distribuido lee valoraciones verdaderas pero los
 834: perjudicados difusos sub-participan a una tasa β (desigualdad de voz). El
 835: resultado no es un multiplicador sino una frontera con un lugar de paridad en
 836: forma cerrada (`research/e4-analytical-backbone.md`): ambas instituciones son
 837: estimadores sesgados del mismo valor de Samuelson T = S⁺ − S⁻, que rankean
 838: proyectos por S⁺ − θ·S⁻ con θ_C = η y θ_D = 1 − β, de modo que el distribuido
 839: domina exactamente cuando su coeficiente está más cerca del peso verdadero del
 840: daño, que es uno —es decir, **β < 1 − η**—. La simulación confirma la ley
 841: (paridad en la anti-diagonal η + β = 1) y cuantifica la degradación del valor
 842: entregado fuera de ella (desde la paridad en la anti-diagonal hasta una ventaja
 843: distribuida sustancial a lo largo de la caja plausible). La ventaja es así una propiedad de
 844: *incluir a los perjudicados*, no de la agregación en sí; alcanza la paridad a lo
 845: largo de la anti-diagonal β = 1 − η y se convierte en una victoria del central por
 846: debajo de ella (β > 1 − η) —lo que absorbe la objeción del sesgo de participación
 847: dentro del propio eje β del modelo en vez de dejarla externa.
 848: Ningún extremo se asume: η se *barre*, no se fija, y un η bajo pero no nulo es un
 849: régimen defendido, no una premisa. La literatura del daño difuso (los costos no
 850: vistos de Bastiat; la organización asimétrica de Olson en temas disputados; el
 851: cuadrante de política clientelar de Wilson; la legibilidad de Scott) describe
 852: *cuándo* los costos difusos quedan sin representar —cada una leída en su alcance
 853: propio, no como un reclamo de ceguera global—, mientras la tesis opuesta de que
 854: la competencia política disciplina al centro hacia la eficiencia (Wittman 1989)
 855: es más débil justo en ese cuadrante clientelar. Empíricamente, la mayor parte de
 856: la pérdida *medida* en compras públicas es pasiva —incompetencia, no robo
 857: (Bandiera, Prat y Valletti 2009)—, consistente con un η bajo pero no nulo.
 858: 
 859: *La resistencia a la captura protege la ventaja (E4-v5).* Modelando la captura
 860: organizada de forma simétrica —la objeción más dura de la revisión, aplicada en
 861: justicia también al planificador central—, la asimetría se ensancha en vez de
 862: cerrarse. Un grupo captura un proyecto de bajo valor solo cuando su renta
 863: privada supera el costo de adquisición más la sanción esperada (Becker 1968);
 864: con la asimetría de disuasión cargada enteramente por la probabilidad de
 865: detección y el escalamiento de la adquisición (la pena mantenida igual, de forma
 866: conservadora), el status quo se vuelve net-dañino con rentas cercanas al 10% del
 867: costo del proyecto mientras el umbral distribuido —con piso en el wallet
 868: igual-por-ciudadano, que el dinero puede persuadir pero no comprar— queda cerca
 869: de diez veces más alto (forma cerrada ρ(C) en la nota del backbone). La
 870: detección es una bola de nieve p = 1 − (1 − q)^m, así que su piso es un valor
 871: esperado m·q ≥ −ln(1 − p_c) ≈ 0.1 denunciantes del público afectado y
 872: transparente —baja, pero esto es una afirmación interna al modelo cuya fuerza
 873: depende enteramente de la brecha de detección estipulada (central ~0.10 vs
 874: distribuido ~1.0), no de una carga de la prueba empírica: el análisis de
 875: sensibilidad es decisivo aquí —la ventaja distribuida se angosta y puede
 876: revertirse si la detección distribuida se lleva hacia ~0.3—, de modo que la
 877: afirmación es que la recompra organizada es más difícil bajo la transparencia del
 878: brazo distribuido *dados estos parámetros*, no que quede descartada. Esto ata el Hallazgo 4 a la
 879: capa de integridad del Hallazgo 5: la misma fiscalización que hace llegar el
 880: valor es la que impide que las rentas organizadas recompren la ventaja de
 881: asignación, de modo que ambos son una capa y su salvaguarda antes que
 882: multiplicadores independientes. Toda magnitud aquí es interna al modelo; la
 883: literatura (Olson, Wilson, Scott, Bastiat; Becker, Becker y Stigler, Stokes,
 884: Dyck-Morse-Zingales; el monitoreo por los propios usuarios de Ostrom) defiende
 885: la dirección, el mecanismo y el signo de la asimetría —no los números.
 886: 
 887: *Backbone analítico.* Tres formas cerradas cargan el peso, cada una verificada
 888: contra la simulación (`research/e4-analytical-backbone.md`); las corridas solo la
 889: confirman y cuantifican la degradación fuera de los casos limpios. **(i) La ley
 890: de paridad.** Escribiendo cada institución como un estimador sesgado que rankea
 891: proyectos por S⁺ − θ·S⁻, el central conserva θ_C = η del daño percibido y el
 892: distribuido revela θ_D = 1 − β (la tasa de participación se cancela del ranking);
 893: como el peso verdadero del daño es uno, el brazo distribuido entrega más valor
 894: verdadero **si y solo si β < 1 − η**, con paridad en la anti-diagonal. Una lectura
 895: sesgo-varianza *predeciría* que sobre la línea de paridad, donde el sesgo se
 896: cancela, gana el estimador de menor varianza —el ruido de revelación del
 897: distribuido es cero (cada quien conoce su propio valor), el ruido de proxy del
 898: central no—. La simulación implementada **no** lo confirma en el rincón
 899: responsable: en (η = 1, β = 0) el resultado medido es una leve **victoria del
 900: central** (el distribuido entrega cerca del 89% del valor del central allí), así que la lectura honesta es la ley de paridad sin ruido

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$lines = Get-Content -LiteralPath '"'drafts/paper.es.md'; for ("'$i=900; $i -lt 1300; $i++) { '"'{0,4}: {1}' -f ("'$i+1), $lines[$i] }' in C:\devel\claude-projects\distributed-governance-research
 succeeded in 185ms:
 901: β = 1 − η, y el ladeo sesgo-varianza hacia el distribuido no se sostiene allí.
 902: **(ii) El umbral de captura.** De renta >
 903: adquisición + P(detección)·pena, el umbral del central λ\*_C = (k_c + p_c·f)/C
 904: tiende a cero al reducirse su detección, mientras el del distribuido λ\*_D = k_d +
 905: p_d·f/C tiene *piso* en el término de adquisición del wallet igual k_d; la razón
 906: de resistencia ρ(C) = (k_d·C + p_d·f)/(k_c + p_c·f) ≈ 6 a 10 en el rango plausible, creciente en el
 907: costo del proyecto. **(iii) El piso de detección.** Con detección de bola de
 908: nieve P = 1 − (1 − q)^m, superar una tasa central p_c requiere, en la aproximación
 909: de *q* pequeño (Poisson) (1 − q)^m ≈ e^{−m·q}, un valor esperado
 910: m·q ≥ −ln(1 − p_c) ≈ 0.1 denunciantes —la condición Bernoulli exacta es
 911: m ≥ ln(1 − p_c)/ln(1 − q), que depende de *m* y *q* por separado, no solo de su
 912: producto. Es un piso de detección interno al modelo bajo los parámetros
 913: estipulados (dependiente de la sensibilidad; véase el Hallazgo 4), no una inversión
 914: empírica de la carga de la prueba. Tres invariancias acotan la inquietud de las magnitudes
 915: arbitrarias —como propiedades de la *esperanza* sin ruido y de conjuntos grandes,
 916: no de cada corrida de muestra finita: la ventaja es invariante a las unidades de
 917: valor (escala); en esperanza depende del sesgo de voz β y no del *nivel* de
 918: participación (aunque en muestras finitas la concurrencia cambia el tamaño de
 919: muestra, la varianza de muestreo y por ende los rankings y las carteras); y, como
 920: solo entran los primeros momentos S⁺, S⁻ en el ranking esperado, el sorteo
 921: gaussiano de valoraciones es allí una conveniencia antes que un supuesto que carga
 922: peso (las colas de muestra finita y la forma de la valoración aún pueden mover
 923: rankings). Un límite
 924: honesto que marcan las corridas: la ley de paridad es el límite de conjuntos
 925: grandes; cuando el conjunto interesado de un proyecto es muy pequeño —un puñado
 926: de personas— la varianza de muestreo del distribuido domina y un central de censo
 927: completo recupera la ventaja. Otros dos límites conviene declarar. La comparación
 928: es *estática* —una sola ronda de asignación—, mientras que los daños reales
 929: emergen a lo largo de ciclos iterados y retroalimentan por elecciones y auditoría,
 930: de modo que un centro persistentemente ciego es el caso de estrés, no una
 931: inevitabilidad. Y el brazo distribuido se *puntúa sobre el valor verdadero que
 932: revela*, lo que sería circular si no fuera porque el sesgo de voz β y las
 933: fricciones de captura hacen de su señal revelada una estimación sesgada y
 934: disputable de ese valor, no una definicional.
 935: 
 936: *Posicionamiento.* El mecanismo de agregación de preferencias de primer óptimo
 937: —Vickrey–Clarke–Groves— es inviable para presupuestos públicos (no es
 938: presupuestariamente balanceado; Green y Laffont 1979), de modo que tanto el
 939: planificador central como Core v0 son instituciones de *segundo óptimo* (Lipsey y
 940: Lancaster 1956); la comparación pregunta qué segundo óptimo entrega más, no si
 941: alguno es óptimo. Core v0 en consecuencia no reclama strategy-proofness —imposible
 942: para cualquier mecanismo no dictatorial (Gibbard 1973; Satterthwaite 1975)— sino
 943: *resistencia a la captura bajo coordinación organizada acotada*. El wallet
 944: igual-por-ciudadano lo ubica en la familia de votación que expresa intensidad
 945: (Casella 2012; Lalley y Weyl 2018) con una propiedad anti-plutocrática más nítida:
 946: acota la influencia por *dotación igual* y no por precio convexo, así que el dinero
 947: puede persuadir a los tenedores de wallet pero no comprar wallets —exactamente el
 948: piso de costo de adquisición k_d del umbral de captura—. Por último, la ventaja de
 949: agregación es la lógica del jurado de Condorcet (1785) y muere bajo su condición de
 950: independencia (Austen-Smith y Banks 1996): la captura organizada es la violación
 951: por error correlacionado de esa independencia, de modo que la capa de integridad
 952: existe precisamente para defender el supuesto sobre el que descansa la agregación
 953: distribuida. El primitivo de valor sigue las capacidades de Sen para *qué* se
 954: agrega —libertades, no utilidad-dinero— mientras la *suma* descansa en Samuelson
 955: (1954), una agregación que el propio Sen resiste; invocamos cada una solo donde
 956: aplica.
 957: 
 958: *Calibración.* Las magnitudes son internas al modelo, pero la brecha con los datos
 959: es una hoja de ruta, no una disculpa. El 44–85% del valor alcanzable por el central
 960: es un **objetivo de validación candidato que requiere un mapeo de constructo
 961: explícito** —no una comprobación directa: la razón ex-post entre valor realizado y
 962: valor tasado (las calificaciones del Grupo de Evaluación Independiente del Banco
 963: Mundial; Flyvbjerg, Bruzelius y Rothengatter 2003) es un *constructo distinto* de la
 964: selección central relativa a un benchmark de información completa, así que unirlos
 965: requiere un mapeo declarado antes de que uno pueda calibrar al otro; el sesgo de voz
 966: β puede anclarse igualmente
 967: a demografías medidas de presupuestos participativos en vez de asumirse. Y evidencia
 968: de campo independiente apunta en la dirección que apunta el modelo: el presupuesto
 969: participativo en Brasil desplazó el gasto hacia saneamiento y salud y redujo la
 970: mortalidad infantil a presupuesto per cápita constante (Gonçalves 2014) —una
 971: instancia real de asignación dirigida por ciudadanos entregando más valor real,
 972: separable de cualquier magnitud que el modelo reporte. El apéndice de objetivos de
 973: calibración vuelve visible la línea entre lo interno al modelo y lo anclado en datos.
 974: 
 975: **Hallazgo 5: el valor entregado, no la asignación, es donde la arquitectura
 976: justifica su valía —y la selección y la entrega se componen de forma
 977: multiplicativa.** Un quinto experimento
 978: (`scripts/simulation/e4-v5/e5-delivery.mjs`, reconstruido sobre el motor
 979: limpio de E4) añade la etapa de ejecución que los primeros cuatro omitieron,
 980: como un régimen de entrega **independiente** cruzado con los dos regímenes de
 981: selección —un diseño de cuatro celdas para leer cada capa por separado y en
 982: conjunto sobre las *mismas* carteras financiadas. Los ejecutores tienen
 983: tipos ocultos: una cuota intrínsecamente honesta entrega; el resto se desvía
 984: cuando una tentación supera el disuasor del régimen `p·[(1−a(1−r)) + γ + R]`
 985: (detección *p*, exposición del adelanto *a*, recuperación *r*, garantía *γ*,
 986: capital reputacional *R*) —el balde con fugas de Okun (1975). La pérdida de
 987: valor del régimen **opaco** de statu quo se ajusta por momento a la cifra de
 988: ~24% de gasto faltante de Olken (2007) (no identificada como bienestar); el
 989: ~30% de ineficiencia de la inversión pública del IMF (2015) es una pérdida de
 990: proceso más amplia, y el ~87% de captura ugandesa de Reinikka y Svensson
 991: (2004) es una cola, no el caso central. El régimen **verificado** es la
 992: arquitectura: adelanto condicionado por hitos más garantía de desempeño,
 993: retención, recuperación y capital reputacional —magnitudes declaradas,
 994: direcciones de las Proposiciones 1–4.
 995: 
 996: Cada celda es un porcentaje de la misma referencia voraz de información
 997: completa a entrega perfecta (un normalizador heurístico, no un óptimo), de
 998: modo que no se reporta multiplicador compuesto. La eficiencia de selección
 999: reproduce E4 (distribuido ≈ 98%, central ≈ 44% de la referencia); la
1000: eficiencia de entrega es ≈ 78% opaca frente a ≈ 95% verificada. Leído como
1001: dos efectos principales en el mundo declarado, la capa de entrega añade ≈ 8
1002: puntos bajo selección central y ≈ 17 bajo distribuida; la capa de selección
1003: añade ≈ 42 puntos bajo entrega opaca y ≈ 51 bajo verificada. La interacción
1004: es positiva: las dos capas **se componen de forma multiplicativa** —una
1005: identidad contable (valor entregado = valor seleccionado × fracción
1006: entregada, aplicada por proyecto), de la cual la interacción positiva es la
1007: firma del efecto de nivel, no un hallazgo independiente. La arquitectura
1008: completa supera al statu quo en ≈ +58.6 puntos de la referencia (intervalo
1009: Monte-Carlo condicional al 95% [+58.0, +59.2], que refleja solo la
1010: variabilidad de simulación interna —la incertidumbre de mundo, forma
1011: funcional y calibración no está incluida). Una versión anterior resumía esto
1012: como un único multiplicador compuesto de valor por presupuesto; ese compuesto
1013: se **retira**, y E5 reporta las capas como porcentajes separados.
1014: 
1015: Dos refinamientos sobreviven al escrutinio. Primero, la cobertura distribuida
1016: de Core v0 no es solo una señal de selección: los ciudadanos que rutearon el
1017: presupuesto también observan la entrega. Pero la cobertura comunitaria eleva
1018: de forma creíble la *detección*, no la *recuperación* (el clawback exige
1019: enganche institucional), de modo que el dividendo de entrega solo-comunitario
1020: es pequeño (una fracción de punto en el régimen de control débil;
1021: Björkman y Svensson 2009, con réplicas fallidas; Molina et al. 2016); la
1022: ganancia de entrega considerable viene del canal **formal** de recuperación
1023: —el régimen verificado—, no de los ojos por sí solos. Segundo, el desvío del
1024: régimen verificado es **bajo pero no nulo** (≈ 2% de incidencia, ≈ 7% sin el
1025: capital reputacional): una cola de gran corrupción deja un residual que el
1026: control fuerte no elimina, coincidiendo con el hallazgo de Olken de que las
1027: auditorías reducen la fuga sin borrarla (2007; Avis, Ferraz y Finan 2018;
1028: Becker 1968) —disuasión ex ante, no un cero empírico. El resultado es robusto
1029: al riesgo de entrega correlacionado con valor/complejidad (el brazo
1030: distribuido financia proyectos de mayor *valor*, no de mayor *costo*) y
1031: estable entre semillas; un barrido conjunto de parámetros de entrega,
1032: condicional al mundo declarado, mantiene a la cobertura adelante en todo el
1033: espacio muestreado. El valor entregado aquí se mide a *presupuesto igual*; el
1034: *costo* administrativo de operar cada institución es una capa separada
1035: (Hallazgo 10).
1036: 
1037: **Hallazgo 6: la visibilidad sostiene el estándar; los mercados reputacionales
1038: ingenuos concentran más rápido de lo que seleccionan.** Un sexto experimento
1039: preregistrado (`research/e6-reputational-competition-design.md`) aísla el canal
1040: de incentivos de la disuasión por completo —un escenario de preocupaciones de
1041: carrera (career concerns) en el sentido de Holmström (1999): un conjunto de
1042: ejecutores enteramente honestos con esfuerzo ajustable y sin posibilidad de
1043: desvío (el modelo no tasa costo de esfuerzo explícito alguno; la minimización de
1044: costos está codificada conductualmente como la regla de decaimiento del régimen
1045: opaco). En el régimen opaco, el esfuerzo se desploma hacia la minimización de
1046: costos
1047: (0.49 → 0.24 a lo largo de veinticuatro ciclos) —no por malicia, sino porque el
1048: esfuerzo no tiene retorno y no existe un estándar visible que imitar. Hacer
1049: visible la calidad verificada sostiene el esfuerzo cerca de su nivel inicial, y
1050: el régimen visible-competitivo entrega un +11% sobre la línea base opaca —una
1051: ganancia de incentivo pura con cero desvío en el modelo. Dos predicciones
1052: preregistradas fallaron de manera informativa. La visibilidad por sí sola porta
1053: la mayor parte del efecto: el espejo precede al mercado (la regla conductual liga
1054: la imitación a la visibilidad, de modo que parte de esto es por construcción
1055: —pero la construcción codifica la afirmación de que la opacidad erosiona las
1056: normas profesionales al eliminar el estándar mismo). Y la asignación ingenua
1057: ponderada por reputación concentra el trabajo de manera dramática (Gini de
1058: asignaciones 0.84 frente a 0.34) mientras rastrea la capacidad verdadera solo
1059: débilmente —bloqueo por suerte temprana, la dinámica de ventaja acumulativa de
1060: las cascadas de información reapareciendo en el mercado de ejecutores. La lección
1061: de diseño corre en ambas direcciones: la visibilidad verificada es donde vive el
1062: incentivo de calidad, y toda ponderación fuerte por reputación —humana o
1063: algorítmica— necesita la observabilidad de la concentración, los pisos para
1064: entrantes y la reputación normalizada por oportunidades que el corpus prescribe.
1065: En Core v0, la reputación informa las elecciones de los financiadores antes que
1066: la asignación automática, con la concentración visible por construcción —y nunca
1067: excluye: ninguna regla de protocolo impide a un financiador elegir a cualquier
1068: actor admisible por motivos reputacionales.
1069: 
1070: **Hallazgo 7: una línea base parametrizada por auditorías — qué calibra y qué
1071: no.** El ataque más agudo de la ronda de revisión del manuscrito
1072: sostuvo que la línea base de cero-control es una caricatura —las administraciones
1073: reales operan instituciones de auditoría, retenciones, fianzas e inspección— y la
1074: respuesta fue un séptimo experimento preregistrado
1075: (`research/e7-calibrated-baseline-design.md`) con una condición de retiro
1076: comprometida: si el resultado principal colapsaba contra una línea base justa,
1077: sería retirado, no requalificado. El brazo del statu quo parametrizado por
1078: auditorías toma sus parámetros de los hallazgos publicados de
1079: instituciones de auditoría (un escenario informado por prácticas documentadas; la
1080: verificación de algunas fuentes primarias está en curso) —detección a partir de los estudios de obras de la
1081: contraloría de Chile, retención a partir de la práctica documentada de estados de
1082: pago, recuperación a partir de la serie de la ASF de México, anclas de fuga
1083: emparejadas por categoría con la construcción (Olken 2007; la base de evidencia
1084: multipaís abarca la GAO estadounidense, la NAO británica, el Tribunal de Cuentas Europeo, el TCU y la CGU
1085: de Brasil, y las contralorías de Chile, Perú y Colombia; Ferraz y Finan 2008)—
1086: con el ancho de banda de inspección del planificador escalado al ámbito y el
1087: sesgo coordinado de señales barrido como el régimen de falla de Condorcet. La
1088: condición de retiro no se activó *dentro de este aparato*: contra la línea base
1089: parametrizada por auditorías el compuesto anterior fue sustancial a escala pero solo
1090: casi-paridad a escala de piloto municipal (10-40 proyectos), donde la selección central
1091: con cobertura plena es competitiva y el caso descansa en la entrega y la medición. Pero la evidencia de auditoría *parametriza la fuga de la
1092: línea base*; **no** calibra el efecto de tratamiento institucional de Core v0, que
1093: está gobernado por la prueba simétrica pre-registrada posterior (Sección 6) cuya
1094: mediana agrupada pre-registrada de ventaja de selección es Δ = 0.025 de un
1095: benchmark de información completa —así que estas cifras de E7 se conservan como
1096: salidas condicionales del aparato, no como un resultado principal sobreviviente.
1097: Dentro de este aparato, y condicional a su distribución estipulada de costos de
1098: oportunistas y a su línea base sin memoria, un resultado cualitativo es
1099: instructivo: a la intensidad de detección reportada por auditorías del modelo
1100: (verificación de fuentes primarias en curso), sin memoria reputacional, el modelo no disuade desvío alguno —el
1101: umbral de incentivos del régimen parametrizado por auditorías queda por debajo del
1102: costo de todo oportunista modelado, de modo que su fuga iguala la del régimen de
1103: cero-control, y en el modelo la detección añadida reduce la brecha de visibilidad
1104: (de veintinueve a diecinueve puntos) en lugar de elevar el valor entregado. Estas
1105: son salidas internas al modelo del aparato estipulado de E7, no un efecto causal
1106: estimado de la auditoría del mundo real. La fuga del brazo parametrizado por
1107: auditorías aterriza dentro de la banda de fuga reportada por auditorías (24-48% en
1108: obras); la mecánica de fuga del modelo, alimentada con parámetros de auditoría, es
1109: *consistente con* el rango documentado —esto parametriza la fuga de la línea base,
1110: no calibra el efecto de tratamiento institucional. Y el barrido de sesgo
1111: acota el reclamo de construcción abierta con honestidad: la selección distribuida
1112: se degrada de manera casi lineal con la captura coordinada de señales y cae por
1113: debajo de un planificador municipal competente de cobertura plena solo con una
1114: cuota coordinada de aproximadamente el treinta por ciento —se degrada, nunca
1115: colapsa, y sigue siendo superior en todas partes por debajo del diez por ciento.
1116: 
1117: Un octavo experimento preregistrado (E8,
1118: `research/e8-behavioral-participation-design.md`) reemplazó luego el lado de
1119: participación de estos brazos —la cuota por defecto y la cuota informada que los
1120: brazos de arquitectura habían impuesto— con trayectorias de adopción generadas
1121: por un estudio conductual compañero: un modelo basado en agentes conforme a Core
1122: v0 de conciencia, registro, modos de participación y microdelegación confiada,
1123: calibrado con priors sintéticos elicitados mediante LLM (paquete de replicación:
1124: el repositorio distributed-governance-experiments). El aparato anterior produjo
1125: un compuesto a escala bajo sus supuestos sintéticos de adopción que varió a
1126: través de tres poblaciones y todas las escalas, incluida una trayectoria de
1127: lanzamiento que comienza con participación cercana a cero —que cuesta el 1.7%
1128: del cociente, porque la capa por defecto ancla por construcción los ciclos
1129: tempranos delgados. El estudio conductual también reproduce de forma
1130: independiente el supuesto de cuota informada que estos experimentos habían
1131: impuesto: 0.309 emergente contra el 0.30 asumido.
1132: 
1133: **Hallazgo 9: el stack completo —planificación, selección y entrega— y una
1134: contabilidad honesta de lo que aporta cada capa.** Un noveno experimento
1135: (`scripts/simulation/e4-v5/e9-fullstack.mjs`, construido sobre E5) añade la
1136: tercera capa arquitectónica, la **planificación** (construir el marco de
1137: elegibilidad y las cuotas de presupuesto por sector), de modo que las tres
1138: capas se comparan central versus distribuido en un 2×2×2 de sectores
1139: persistentes (diez, el número de COFOG). Una atribución de Shapley descompone
1140: la brecha todo-distribuido-versus-statu-quo en contribuciones por capa que
1141: suman exactamente a ella. Dos salvedades honestas rigen la lectura. Primero,
1142: la atribución es *condicional*: cada valor de capa se computa a través del
1143: generador de sectores de planificación declarado, así que las cifras
1144: autónomas y cuantificadas de **selección** y **entrega** son las de E5 (sin
1145: capa de planificación); E9 aporta la *estructura* de tres capas y el *método*
1146: de atribución. Segundo, las contribuciones por capa son *grandes en el mundo
1147: declarado, no uniformemente robustas*: la ventaja completa de Core v0
1148: permanece positiva en todos los mundos nombrados (desde uno moderadamente
1149: favorable al central hasta uno fuertemente favorable al distribuido), pero
1150: las contribuciones individuales de selección y entrega invierten su signo en
1151: los rincones extremos (selección donde la selección central es casi
1152: aleatoria, entrega donde una cartera dañina se entrega con más fidelidad) —un
1153: hecho que el paper reporta en lugar de ocultar. El valor de la capa de
1154: **planificación** opera principalmente a través de la **captura de agenda**
1155: —el central manteniendo funciones enteras de alta necesidad y baja
1156: visibilidad fuera del menú (la segunda cara del poder; Bachrach y Baratz
1157: 1962; Schattschneider 1960). Ese mecanismo es real y su *dirección* está
1158: anclada (la taxonomía COFOG; el giro pre-electoral hacia el gasto visible,
1159: Drazen y Eslava 2010; el descuido sistemático del mantenimiento y la
1160: prevención, Rioja 2003), pero su *magnitud* no puede identificarse sin datos
1161: presupuestarios de un país concreto. Por eso **no reportamos una cifra para
1162: la capa de planificación**: cuantificarla con el mecanismo apagado la
1163: subestimaría, y encendido aún no es anclable. Una ilustración con datos de un
1164: país —el presupuesto de salud mental de Chile mantenido cerca del 2% frente a
1165: un promedio OCDE del 6.7%, pese a ser los trastornos mentales la principal
1166: causa de discapacidad del país— muestra que el sesgo de visibilidad tiene un
1167: footprint real, y se ofrece cualitativamente, no como calibración.
1168: 
1169: **Hallazgo 10: el costo administrativo es aproximadamente neutro una vez
1170: contabilizado de forma simétrica —la ventaja es el valor entregado, no el
1171: overhead.** Una décima capa (`scripts/simulation/e4-v5/e10-costs.mjs`) añade
1172: el costo administrativo y de maquinaria que cada institución opera y que Core
1173: v0 reemplaza en gran medida —los estudios de valor-proxy, el aparato de
1174: asignación y priorización, y las licencias que carga el central, frente a la
1175: propia plataforma y maquinaria de control de Core v0. Modelado honestamente
1176: —el costo reduce el *presupuesto* de cada brazo antes de seleccionar (así la
1177: pérdida de valor es sub-proporcional, porque la financiación voraz corta
1178: primero los proyectos marginales), cobrado simétricamente (la maquinaria de
1179: verificación y recuperación de Core v0 se cobra, no es gratis) y
1180: des-solapado de la fuga de entrega que E5 ya descuenta— la capa
1181: administrativa es **aproximadamente neutra** (dentro de un punto de cero en
1182: cualquier dirección a las cuotas de costo declaradas). La ventaja de Core v0
1183: viene de la **selección y la entrega**, no de un ahorro de costo
1184: administrativo; una ventaja de costo decisiva exigiría que el overhead del
1185: central superara al de la plataforma por más de lo que la contabilidad
1186: simétrica sostiene. Las cuotas de costo son declaradas, con direcciones
1187: ancladas (IDB 2018; el bajo costo operativo de las plataformas de gobierno
1188: digital —KONEPS, ChileCompra, ProZorro).
1189: 
1190: **Qué sobrevive.** Reducido a lo que la prueba rectora sostiene: (1) bajo el gate
1191: simétrico pre-registrado la ventaja de selección distribuida es *positiva pero
1192: pequeña* (mediana Δ = 0.025, por debajo del umbral de rebuild de 0.05; NO-GO); (1b)
1193: una extensión de robustez de cuatro escenarios (v1.14) —un análisis *separado y
1194: exploratorio* bajo un proceso generador distinto, no una reclasificación del NO-GO—
1195: modela al central como lo describe *direccionalmente* la evidencia —*casi ciego al daño
1196: difuso en la cola larga de baja visibilidad* (Hayek 1945; Scott 1998; Olson 1965;
1197: Bandiera–Prat–Valletti 2009): en ese escenario de referencia declarado y motivado por
1198: fuentes la selección por cobertura recupera *decisivamente* más de la referencia voraz
1199: del modelo (≈ 98% frente a ≈ 44%), hasta un central al que se le otorga toda competencia
1200: salvo la visión del daño igual pierde (≈ +14%), y el central se pone apenas adelante solo
1201: abandonando los supuestos declarados —en un mundo casi sin daño— mientras la idealización
1202: *espejo* del brazo distribuido gana por goleada, todo un contraste de modelo condicional
1203: reportado como puntos de referencia declarados, no impacto calibrado; (2)
1204: las contribuciones que cargan el peso son la arquitectura y el mecanismo
1205: cualitativo de crédito-versus-cobertura —el ordenamiento central presionado por
1206: crédito subpondera el valor difuso que la selección distribuida basada en cobertura
1207: sí visibiliza; (3) todo cociente compuesto de valor-por-presupuesto que reportó una
1208: versión anterior se retira aquí como efecto calibrado —fue una salida condicional
1209: interna al modelo, no un efecto de campo calibrado; y (4) cualquier efecto calibrado de
1210: valor total entregado —selección *y* entrega (costo administrativo y fuga), sobre datos
1211: reales— es trabajo futuro, desarrollado como canales declarados separados en vez de un
1212: único número conflacionado.
1213: 
1214: ## 7. La revisión adversarial como método
1215: 
1216: La arquitectura se desarrolló bajo un bucle adversarial documentado: **ataque**
1217: (un resumen que enuncia un modo de falla, su ubicación en el corpus, un escenario
1218: de estrés y anclajes en la literatura) → **defensa emparejada** (una evaluación
1219: objetiva que clasifica el ataque como fundado, parcialmente fundado o diferencia
1220: de criterio, con citas ancladas a líneas dentro del corpus) → **resolución** (un
1221: documento aceptado que o bien integra un mecanismo o bien acota el riesgo) →
1222: **propagación** (las restricciones de la resolución enhebradas a través de cada
1223: documento de arquitectura afectado). El bucle corrió cinco rondas, todas
1224: resueltas; toda resolución está propagada a través del corpus salvo las cuatro
1225: defensas pareadas de la ronda de revisión del manuscrito (D037–D040), que portan
1226: resoluciones aceptadas cuya propagación restante al corpus está
1227: rastreada en el roadmap de remediación. La primera ronda: dieciocho ataques a los
1228: mecanismos de la arquitectura (manipulación de métricas, captura del
1229: fiscalizador, manipulación de desembolsos, colusión, control de partes
1230: vinculadas, complejidad, resistencia del establecido, entre otros). La segunda:
1231: quince ataques deliberadamente más profundos a los fundamentos políticos y
1232: conductuales (mandato democrático, fijación de agenda, dependencia fiscal,
1233: mercados delgados, vacío de meta-gobernanza, ignorancia racional, cascadas,
1234: clientelismo, polarización, miopía intertemporal, el problema de las muchas
1235: manos (Thompson 1980)). La tercera ronda emergió del método vuelto hacia afuera: una revisión
1236: externa simulada de cinco perfiles del documento acompañante de este artículo
1237: generó preguntas de revisor que el corpus no podía responder con los anclajes
1238: existentes, y la regla permanente convirtió las dos serias en ataques formales
1239: —la caracterización legal del acto de asignación ciudadana, y el costo de
1240: capacidad administrativa de la operación tutelada— ambos desde entonces resueltos
1241: y propagados. La cuarta ronda volvió el mismo instrumento sobre este manuscrito
1242: mismo: cinco perfiles de revisor simulados (académico, derecho público,
1243: arquitectura de sistemas, práctica del sector público, lector general instruido)
1244: atacaron la v1.6 publicada, y sus cinco objeciones irresolubles se convirtieron
1245: en ataques formales, cada uno ahora resuelto —la línea base de cero-control como
1246: un hombre de paja de calibración (respondida por el séptimo experimento y una
1247: regla de reporte vinculante), la reserva de ley sobre la competencia de
1248: asignación (un registro de norma habilitante que supedita el modo vinculante), la
1249: exclusión reputacional como una sanción no procesada (reclasificada: el diseño no
1250: posee poder de exclusión con el cual sancionar), la trazabilidad de la asignación
1251: frente al secreto de la preferencia (resuelta como secreto de la asignación
1252: ciudadana con dinero público), y la paradoja de la adopción (una capa de adopción
1253: bajo una frontera de tesis explícita). La quinta ronda fue una ronda de ablación
1254: de tres ataques (A041–A043): el despliegue por partes de la pila de disuasión, la
1255: válvula no regulada de liberación presupuestaria, y la capa de verificación bajo
1256: colusión de máquinas y anillos —cada uno resuelto y propagado (`docs/111`–`docs/113`).
1257: El requisito de honestidad del método se
1258: aplica a sí mismo: varias
1259: resoluciones responden a sus ataques con un explícito "acotado, no resuelto", y
1260: el registro completo de revisión es público.
1261: 
1262: El bucle termina por la regla de integrar-o-acotar (P007). Su disciplina de
1263: salida es lo que lo distingue del modelado de amenazas ordinario: todo ataque
1264: acotado debe dejar tres artefactos —una oración de frontera explícita ("Core v0
1265: no requiere X"), un riesgo residual visible y un enunciado de limitación de una
1266: oración. La sección de limitaciones que sigue no es, por tanto, un gesto de
1267: humildad; es la salida acumulada y adversarialmente generada del método. De los
1268: cuarenta y tres ataques, ninguno fue desestimado; nueve de los quince de la
1269: segunda ronda fueron clasificados como fundados de plano y los otros seis como
1270: parcialmente fundados, los cinco de la ronda del manuscrito fueron clasificados
1271: como fundados al menos en parte, y la respuesta del corpus a varios es un honesto
1272: "acotado, no resuelto".
1273: 
1274: Usamos el bucle con un único equipo de diseño más asistencia de IA —razón por la
1275: cual lo llamamos autocrítica estructurada antes que validación; un adversario
1276: autoadministrado, por disciplinado que sea, no puede sustituir el ataque
1277: independiente. Su siguiente aplicación obvia es con revisores genuinamente
1278: independientes, que identificamos más abajo como el primer punto del trabajo
1279: futuro.
1280: 
1281: ## 8. Limitaciones
1282: 
1283: Enunciadas según la propia regla del método —cada una es una frontera registrada
1284: con un riesgo residual nombrado.
1285: 
1286: **Construir el marco de elegibilidad está centralizado en los modos de
1287: transición.** En los modos de operación cerrado y tutelado que Core v0 especifica
1288: para los pilotos, la autoridad implementadora construye los ámbitos de
1289: planificación; la arquitectura hace esa construcción pública, versionada,
1290: portadora de mandato y disputable mediante la visibilidad, pero en esos modos no
1291: la distribuye. Construir el ámbito significa definir el marco —qué propósitos,
1292: qué porción del presupuesto, qué pisos protegidos, qué reglas de admisibilidad—,
1293: no diseñar ni jerarquizar proyectos: la creación y la priorización de proyectos
1294: siguen distribuidas incluso en modo tutelado, de modo que este poder de agenda
1295: residual es el poder de decidir qué *puede* financiarse, nunca qué *se* financia.
1296: Es importante no malinterpretar aquí nuestra propia simulación. Lo que esa
1297: simulación muestra dominando todo otro margen de calidad es la calidad
1298: informativa de la **priorización de proyectos** —los perfiles de asignación
1299: agregados que sigue la porción financiada—, y esa priorización es distribuida por
1300: diseño, incluso en modo tutelado; el resultado es por tanto un argumento *a favor*

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$lines = Get-Content -LiteralPath '"'drafts/paper.es.md'; for ("'$i=1300; $i -lt 1610; $i++) { '"'{0,4}: {1}' -f ("'$i+1), $lines[$i] }' in C:\devel\claude-projects\distributed-governance-research
 succeeded in 180ms:
1301: de distribuir la construcción, no evidencia de que una agenda central gobierne la
1302: entrega. El poder centralizado residual es el más estrecho: construir el marco de
1303: elegibilidad es en sí mismo la segunda cara del poder (Bachrach y Baratz 1962;
1304: Schattschneider 1960; Lukes 1974) —el poder de dejar algo fuera del menú—, que la
1305: arquitectura responde, en estos modos, haciendo el marco público, versionado,
1306: portador de mandato y disputable en vez de distribuyéndolo. Tres cosas acotan la
1307: limitación con honestidad. Es una propiedad de los modos de transición, no de la
1308: arquitectura: los modos de operación son estados configurados por país, y la
1309: trayectoria diseñada es una fijación de agenda abierta y socialmente construida.
1310: Es más estrecha que la porción pasiva: los ciudadanos involucrados asignan
1311: manualmente, delegan, o adoptan perfiles configurables, de modo que los pesos de
1312: la autoridad gobiernan plenamente solo la porción que nunca se involucra. Y ahora
1313: está medida en lugar de supuesta: E4 muestra que la construcción abierta de los
1314: pesos a partir de señales ciudadanas agregadas es viable y robusta frente a la
1315: escala en el modelo, de modo que la restricción ya no es si la construcción
1316: distribuida puede funcionar en principio sino si un mecanismo de elicitación puede
1317: mantener las señales dispersas honestas, no sesgadas y representativas bajo la
1318: presión de la manipulación, el clientelismo y la asignación expresiva —un problema
1319: de diseño que el corpus supedita a condiciones en lugar de dar por resuelto. La
1320: línea base comparativa también corresponde a este párrafo: bajo el modelo
1321: institucional actual, la totalidad del presupuesto sigue un vector construido
1322: centralmente que no es ni publicado, ni versionado, ni sustituible, ni anulable
1323: por ciudadano alguno. Los modos de transición reproducen esa centralización de
1324: manera visible y revocable; el modo abierto está diseñado para terminarla. Este
1325: sigue siendo el principal problema abierto de la arquitectura, ahora con un premio
1326: medido asociado a resolverlo —y por esa razón lo tratamos no como una limitación
1327: entre muchas sino como el siguiente objeto del programa de investigación: el
1328: diseño de la fijación de agenda abierta, incluida la arquitectura candidata en la
1329: que una agenda distribuida se construye en paralelo a la de la propia autoridad y
1330: el rol tutelado se estrecha a la revisión de admisibilidad de los conflictos entre
1331: ambas, es el tema natural de un estudio de seguimiento y un piloto dedicados.
1332: 
1333: **La legitimidad procedimental no es mandato democrático —y la norma habilitante
1334: aún no existe.** La plataforma registra la autorización externa para la migración
1335: presupuestaria y las fórmulas de asignación (el Allocation Mandate); no puede
1336: fabricar una autorización que la ley nunca otorgó. En la tradición continental de
1337: las jurisdicciones de referencia, la asignación ciudadana vinculante requiere un
1338: norma habilitante de rango suficiente que ningún estatuto actual provee
1339: —los precedentes regionales (el estatuto de presupuesto participativo del Perú,
1340: el marco del estatuto de la ciudad de Brasil) prueban que el instrumento es
1341: alcanzable, no que exista— de modo que los despliegues lícitos de la arquitectura
1342: hoy son consultivos y tutelados, en los que toda decisión de asignación material
1343: permanece atribuida a la autoridad competente como una resolución pública
1344: razonada; los resultados de entrega, medición y memoria reputacional operan sin
1345: cambios bajo ese estatus, y solo el modo abierto maduro requiere asignación
1346: vinculante. El debate normativo sobre sustituir la asignación atomizada por la
1347: apropiación representativa (Rosanvallon 2008; Urbinati 2014) permanece abierto.
1348: Bajo desacuerdo evaluativo profundo, la postura de la arquitectura es
1349: procedimental en el sentido de Gaus (2011): sus reglas apuntan a ser
1350: justificables desde puntos de vista morales diversos —que es lo que proveen los
1351: registros de mandato, la neutralidad de motivos y la disciplina de crítica
1352: comparativa— sin presuponer una doctrina comprehensiva compartida. Una objeción
1353: adicional queda deliberadamente fuera de alcance: el modelo toma como dado el
1354: presupuesto recaudado coercitivamente y mejora su administración; el desafío
1355: libertario a la recaudación misma (Nozick 1974) ni se responde ni se da por
1356: sentado aquí. Las fórmulas de asignación ponderadas por contribución, en
1357: particular, son señaladas por la arquitectura como desviaciones plutocráticas que
1358: requieren autorización superior explícita.
1359: 
1360: **La dependencia fiscal es medible, no exigible.** El Estado controla la llave
1361: del presupuesto. El Fiscal Commitment Profile convierte el estrangulamiento de
1362: invisible a atribuible —la latencia de entrega, las órdenes válidas no
1363: ejecutadas, los recortes de cuota a mitad de ciclo, todos se vuelven datos
1364: públicos— pero ningún software obliga a un soberano a pagar (Kydland y Prescott 1977; North y Weingast
1365: 1989). El compromiso creíble debe provenir de la ley a nivel de país.
1366: 
1367: **La calidad de verificación se supone, luego se tasa.** Las Proposiciones 1–4
1368: toman las probabilidades de detección y descubrimiento como parámetros. En
1369: mercados de control delgados —mercados de bienes de confianza donde la calidad
1370: es inobservable para el comprador (Akerlof 1970; Dulleck y Kerschbamer
1371: 2006)— ambas colapsan simultáneamente, y los únicos
1372: márgenes compensatorios son los términos financieros y la verificación importada
1373: (remota o transterritorial). La arquitectura tasa la verificación débil; no puede
1374: conjurar verificadores.
1375: 
1376: **La cobertura supone una diversidad de fuentes que luego debe garantizar.** La
1377: ventaja del brazo distribuido descansa en muchas señales parcialmente
1378: independientes; cuando los proveedores de perfil, los delegados y los
1379: recomendadores se concentran en una plataforma compartida o en unos pocos
1380: super-delegados (Kling et al. 2015), sus errores se correlacionan y el canal de
1381: modo común —la única sensibilidad que reduce materialmente la brecha anclada
1382: (§6, Apéndice E4)— recaptura el mismo cuello de botella epistémico que la
1383: cobertura pretende reemplazar. La independencia no es, por tanto, una
1384: conveniencia de modelado sino una obligación arquitectónica: Core v0 debe
1385: publicar la concentración de delegados, proveedores de perfil y recomendadores
1386: como cantidades observables y activar umbrales de diversificación cuando
1387: suban. El riesgo residual es que un mercado converja hacia un solo recomendador
1388: más rápido de lo que muerden los umbrales.
1389: 
1390: **El realismo conductual corta en ambos sentidos.** La simulación reivindica
1391: diseñar para ciudadanos desatentos, pero igualmente muestra que un despliegue
1392: débil en valores por defecto degenera en asignación impulsada por saliencia. Los
1393: fenómenos fuera de la plataforma —intermediación clientelar, polarización
1394: expresiva, colusión conducida enteramente fuera del sistema— se hacen más
1395: difíciles y más descubribles, nunca imposibles; las afirmaciones de la
1396: arquitectura son comparativas (contra el monopolio opaco), no absolutas.
1397: 
1398: **La meta-gobernanza en modo abierto se difiere por diseño.** El procedimiento de
1399: cambio de reglas, el versionado y las restricciones de no-sorpresa están
1400: especificados; la mecánica constitucional —reglas para hacer reglas (Buchanan y Tullock
1401: 1962)— de quién vota sobre los cambios de
1402: protocolo en un despliegue maduro en modo abierto deliberadamente no lo está. El
1403: despliegue en modo abierto está supeditado a resolverlos.
1404: 
1405: **La adopción selecciona, y la tesis no depende de ello.** Este artículo aborda
1406: si la arquitectura puede construirse y cómo se comporta su mecanismo de *selección*
1407: bajo una prueba simétrica con entrega en paridad —no si entrega más valor en el
1408: mundo (un efecto de valor total entregado es un estimando futuro identificado por
1409: separado, no reclamado aquí), y no si alguna autoridad la quiere. El corpus provee la capa de despliegue para una autoridad
1410: que ya ha decidido (líneas base prospectivas medidas desde el inicio de la
1411: instrumentación, atribución de crédito sobre la entrega verificada, atribución
1412: institucional antes que personal de los vencimientos de plazo en el primer ciclo,
1413: y una cláusula de simetría que impide a cualquier operador eximir sus propios
1414: proyectos), y nombra los arquetipos de adoptante plausibles —el retador
1415: pos-escándalo, el gobierno superior que lo mandata, el financiador externo que lo
1416: condiciona. El efecto de selección honesto se mantiene: la arquitectura será
1417: plausiblemente adoptada primero por patrocinadores relativamente limpios o recién
1418: llegados, en los lugares que menos la necesitan.
1419: 
1420: **La medida de resultado es un agregado acotado y no distribucional.** El valor
1421: que el modelo puntúa es una suma cardinal de estilo utilitarista sobre las partes
1422: afectadas en una porción acotada de inversión pública tipo infraestructura; no
1423: está ponderada distribucionalmente y no dice nada sobre redistribución, equidad, o
1424: quién soporta beneficios y daños. Una cartera puede puntuar bien en esta medida y
1425: distribuir mal. Aplicar el criterio entre grupos, o a todo el presupuesto o al
1426: propósito de la tributación, requeriría una especificación separada de
1427: bienestar social e incidencia que este artículo no provee. El modelo es además de
1428: equilibrio parcial: el reporte estratégico, la oferta endógena de propuestas, las
1429: complementariedades entre proyectos, la incidencia tributaria y los efectos de
1430: equilibrio general quedan fuera (véase el
1431: [claim-and-estimand-contract](../research/claim-and-estimand-contract.md)).
1432: 
1433: **Epistémicamente, este es el diseño autocriticado de un solo equipo.** El corpus
1434: adversarial fue producido por el mismo esfuerzo de investigación que ataca, con
1435: asistencia de IA; la línea base del statu quo del aparato anterior estaba
1436: parametrizada por auditorías (sus parámetros tomados ítem por ítem a partir de
1437: los hallazgos publicados de instituciones de auditoría, con la verificación de
1438: fuentes primarias aún en curso), mientras que el gate de
1439: simetría actual es una prueba de selección estilizada no calibrada —ninguna está
1440: calibrada a un conjunto de datos de PP específico, y los parámetros restantes son
1441: plausibles antes que medidos; y no se ha realizado ningún piloto. Las tres validaciones faltantes —ataque experto independiente,
1442: calibración a datos empíricos de PP, y un piloto tutelado acotado (sector
1443: deportivo, un municipio)— son la siguiente fase del programa de investigación, en
1444: ese orden.
1445: 
1446: ## 9. Ruta de implementación
1447: 
1448: La arquitectura está construida para una adopción gradual y revocable, y esta
1449: sección es explícita sobre lo que afirma y lo que no: la pregunta del artículo
1450: —si la arquitectura de asignación bicentenaria puede re-arquitecturarse con la
1451: tecnología de hoy— se responde al nivel de un diseño construible y de una
1452: *dirección* condicional del mecanismo de selección, con independencia de si alguna
1453: autoridad elige desplegarla. **No** responde *en cuánto* mejoraría el valor
1454: entregado en el mundo real: ese es un estimando identificado por separado, dejado
1455: a revisión independiente, calibración empírica y un piloto acotado (§8). Lo que
1456: sigue es la ruta para una autoridad que elige desplegarla. Un país abre una función pública (el piloto de
1457: referencia es la infraestructura deportiva municipal), migra una pequeña cuota
1458: presupuestaria bajo un modo de operación tutelado, y retiene la revisión de
1459: admisibilidad —con toda decisión y demora tutelada pública por construcción. El
1460: encuadre por defecto del piloto es prospectivo: la instrumentación comienza en la
1461: adopción, la brecha de visibilidad se publica como la línea de partida declarada
1462: del adoptante ("mídanme desde aquí"), y las cifras previas a la adopción se
1463: reportan por separado, de manera impersonal y como contexto —la configuración
1464: bajo la cual históricamente se han adoptado instrumentos que exponen. Las
1465: métricas de madurez funcional (mezcla de
1466: participación, cuota de flujo por defecto, tasas de independencia de la
1467: fiscalización, indicadores de resistencia del sistema establecido, confiabilidad fiscal)
1468: determinan si el despliegue gana un ámbito más amplio, y sus trayectorias, no la
1469: retórica, responden si la distribución supera a la línea base local. La condición
1470: de salida es honesta en ambas direcciones: un piloto cuyos indicadores se
1471: estancan bajo el ahogamiento del sistema establecido documenta ese hecho públicamente, lo
1472: cual es en sí mismo información que el sistema actual nunca produce.
1473: 
1474: La transición entre regímenes está ella misma medida. Los experimentos
1475: complementarios (Offermann 2026b) cuantifican el régimen semi-abierto de la
1476: escalera de regímenes operativos (docs/110) —un sobre presupuestario acotado y mandatado (envelope) que
1477: corre en piloto automático de protocolo junto al presupuesto tradicional de la
1478: autoridad— como una mezcla fiscal: sobre un piso de granularidad de cartera de
1479: aproximadamente diez por ciento, el valor verificado mezclado sube de forma
1480: monótona y casi lineal con la cuota del sobre dentro de ese aparato, desde el
1481: punto de equilibrio cerca del ocho a diez por ciento hacia arriba —un contraste
1482: del aparato anterior, ahora sujeto a la salvedad del multiplicador retirado
1483: (Sección 6), no un punto final calibrado. La transición desde el status quo hacia
1484: el régimen abierto es una perilla, no un salto: la adopción puede proceder por
1485: incrementos.
1486: 
1487: Los mismos experimentos midieron una variable que este corpus había dejado sin
1488: regular: *cuándo* libera la autoridad el presupuesto hacia la maquinaria de
1489: asignación. La regla de despliegue resultante: medir la liberación contra un
1490: techo de obra-en-proceso calibrado al caudal (throughput) y tiempo de ciclo de la
1491: tubería de entrega-y-verificación —nunca contra el calendario. La liberación
1492: por calendario congela meses de presupuesto en custodia y satura la verificación;
1493: y cuando la capacidad de verificación es escasa, ninguna política de liberación
1494: compensa —la capacidad de verificación es el techo de la tubería antes que su
1495: instrumento anti-fraude. La regla es condicional a un instrumento de arrastre
1496: plurianual (el sobre semi-abierto es precisamente tal vehículo); bajo
1497: anualidad presupuestaria estricta degenera a medición intra-anual.
1498: 
1499: Finalmente, la premisa tecnológica que reduce los costos de participación del
1500: lado ciudadano (el tutor de IA) aplica simétricamente al lado del control. La
1501: verificación por máquina de las clases de evidencia protocolizables multiplica
1502: la capacidad de fiscalización, con humanos como segunda instancia permanente
1503: —re-verificación muestreada con un piso publicado, controles sembrados de
1504: respuesta conocida como instrumento de calibración y detección de deriva,
1505: auditando al verificador en vez de competir con él— de modo que la tasa de
1506: error de la máquina permanece medida y la profesión humana de control sigue
1507: financiada desde el presupuesto de control que ella alivia. Medido sobre un
1508: panel de cinco familias reales de modelos (Offermann 2026b), los modelos
1509: frontera convergen en buena especificidad y detección de fraude sobre
1510: evidencia legible en documentos, mientras los modelos locales pequeños son más
1511: débiles, y los contratos de evidencia que incluyen referencias objetivas de
1512: comparación (precios de mercado, bandas de duración, umbrales) permiten al
1513: verificador estricto juzgar en vez de adivinar. La capa máquina alcanza solo
1514: el fraude legible en documentos de la fase de entrega —la calidad por debajo de la especificación física y el robo previo al contrato quedan enteramente en manos humanas, de modo que
1515: la atestación de procedencia es evidencia de manipulación en la captura, no
1516: prueba de grado judicial, y la admisibilidad probatoria aún requiere custodia, contradicción y
1517: peritaje. La evidencia ciudadana contrapuesta —productores independientes con
1518: intereses opuestos al ejecutor, cuya existencia anticipada disuade el desvío—
1519: mantiene la vigilancia distribuida incluso cuando el trabajo rutinario de
1520: verificación documental se reduce; pero su fuerza equivale a la *independencia*
1521: de la capa de contribuyentes, y un anillo colusivo que la capture o silencie
1522: borra el efecto. La colusión entre capas es, de hecho, el único adversario que
1523: sortea la disuasión por hito y mueve la fuga un orden de magnitud (mientras la
1524: ventaja de valor entregado sobrevive), así que la resistencia a la colusión
1525: —propiedad efectiva verificada, resistencia Sybil de los contribuyentes y
1526: descentralización del asignador y del piso de presupuesto de auditoría— es un
1527: requisito de primera clase ([docs/113](../docs/113_VERIFICATION_PACKAGE_AND_A043_RESOLUTION.md)), no una salvedad residual.
1528: 
1529: ## 10. Conclusión
1530: 
1531: Para el problema acotado de asignación de inversión pública que se estudia aquí,
1532: un criterio relevante no es cuán fielmente una institución ejecuta un plan sino
1533: cuánto valor entregado y verificado produce por unidad de recurso público
1534: (Musgrave 1959; Okun 1975) —un criterio junto a las restricciones distributivas y
1535: de derechos que este modelo no representa. La contribución de este
1536: artículo es una arquitectura que vuelve operativo ese criterio —y un relato
1537: disciplinado de exactamente hasta dónde llega su evidencia. La columna vertebral
1538: de la arquitectura son dos preguntas separables que cualquiera puede hacerse.
1539: Primero: tómense los mismos proyectos, diseñados de manera idéntica, y cámbiese
1540: únicamente quién ejecuta y cómo se lo vigila —¿acaso el régimen visiblemente
1541: auditado con consecuencias reputacionales entrega más que el opaco sin ellas?
1542: Segundo: manténgase fija la capa de control y cámbiese únicamente qué proyectos
1543: se financian, ¿planificados centralmente o priorizados socialmente? En el
1544: aparato exploratorio de simulación la respuesta a ambas es sí —una ganancia de
1545: entrega verificada y una ganancia de selección que interactúan en lugar de solo
1546: sumarse—, pero esas magnitudes son contrastes factoriales internos al modelo, no
1547: efectos calibrados, y no construimos el artículo sobre ellas. La afirmación sobre
1548: la que el artículo realmente se sostiene es más estrecha y se probó con más
1549: dureza: un gate pre-registrado, simétrico y solo-de-selección encuentra la
1550: ventaja distribuido-menos-central positiva en todas las celdas pero pequeña (una
1551: mediana agrupada pre-registrada Δ = 0.025 de un benchmark de información completa,
1552: por debajo de su umbral prefijado de 0.05 de reconstrucción del programa de
1553: investigación). El mapa de robustez v1.14 modela luego al central como lo
1554: describe *direccionalmente* la evidencia —casi ciego al daño difuso en la cola larga de
1555: baja visibilidad (Hayek 1945; Scott 1998; Olson 1965; Bandiera–Prat–Valletti 2009)— y en
1556: ese escenario de referencia declarado y motivado por fuentes la selección por cobertura
1557: recupera *decisivamente* más de la referencia voraz del modelo (≈ 98% frente a ≈ 44%) y de
1558: forma robusta. Los dos son epistémicamente distintos, no una reclasificación: el gate
1559: pre-registrado es la única computación *confirmatoria* (un NO-GO de casi-paridad, que le
1560: otorgó al central la visión del daño bajo participación muestreada), mientras el mapa
1561: v1.14 es un análisis de escenarios *exploratorio* posterior bajo un proceso generador
1562: distinto; el central solo supera a la cobertura abandonando los supuestos declarados. Por lo
1563: tanto retiramos el multiplicador compuesto que reportó una versión anterior y nos
1564: apoyamos en la arquitectura, el mecanismo cualitativo y este mapa comparativo
1565: condicional; sus magnitudes son puntos de referencia y estrés declarados, no
1566: impacto calibrado. Un resultado interno al modelo vale la pena conservar
1567: porque trata de la capa de entrega, no del multiplicador: en el modelo, a la
1568: intensidad de detección informada por auditorías de E7 (aún no plenamente
1569: verificada en sus fuentes), la detección sin consecuencias
1570: persistentes no disuade desvío alguno; lo que mueve el valor entregado es el
1571: instrumento del que el statu quo modelado carece: consecuencias que persisten. Que
1572: eso se sostenga en una institución real es una hipótesis para un piloto, no un
1573: resultado aquí; pero el modelo es inequívoco en que la rendición de cuentas sin
1574: memoria es contabilidad.
1575: 
1576: El punto más profundo es el de Friedman: una administración central gasta el
1577: dinero de otras personas en otras personas, la categoría de gasto con el menor
1578: cuidado tanto por el costo como por el valor (Friedman y Friedman 1980). Esta
1579: arquitectura no responde a ese problema con exhortación; reconecta las cañerías
1580: del balde. La planificación permanece —como el hilo conductor que fija ámbitos,
1581: pisos y mandatos— pero el motor del valor es la capa de conversión: promesas
1582: medibles, liberación condicional, verificación independiente, consecuencias que
1583: se acumulan en reputación, y un medidor en cada fuga. La pregunta que este
1584: artículo responde no es, por tanto, si los Estados deberían ser más grandes o más
1585: pequeños, sino si las capas de la actividad estatal que fallan a través del
1586: monopolio de información e incentivos pueden rearquitecturarse para fallar menos
1587: —y para mostrar sus fallas cuando las tienen. Para una de esas capas hemos
1588: especificado una arquitectura completa, demostrado las condiciones de incentivos
1589: de las que dependen sus mecanismos, medido la selección, la agregación y la
1590: entrega en simulación contra una línea base que los propios auditores del sistema
1591: establecido suministraron, y sometido el conjunto a cinco rondas de revisión
1592: adversarial documentada con una disciplina explícita de integrar-o-acotar. El
1593: resultado es deliberadamente modesto en sus afirmaciones e inusualmente explícito
1594: sobre sus bordes: la calidad de la asignación cabalga sobre la calidad
1595: informativa de aquello que construya el vector de pesos, cuya construcción
1596: abierta se mide viable pero cuya elicitación honesta sigue siendo el problema
1597: abierto; el valor entregado cabalga sobre una verificación cuyas condiciones de
1598: mercado deben tasarse; la legitimidad cabalga sobre mandatos que la plataforma
1599: puede registrar pero no crear. Lo que distingue a la propuesta es que estos
1600: bordes están especificados, monitoreados y adjuntos a objetos nombrados —que es,
1601: sostenemos, cómo se ve cuando el diseño institucional se trata como una
1602: disciplina de ingeniería antes que como una ideológica.
1603: 
1604: La comparación es condicional, no ontológica. Un centro con canales creíbles de
1605: información local, representación organizada de los perjudicados difusos y baja
1606: presión de crédito puede acercarse a la paridad. La afirmación de Core v0 es que
1607: esas capacidades son logros institucionales por *demostrar*, no virtudes por
1608: presumir —y que un Estado menos dependiente de lo que su centro puede ver, y menos
1609: capaz de certificar sus propios errores, vale el intento.
1610: 

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$lines = Get-Content -LiteralPath '"'drafts/paper.es.md'; for ("'$i=1610; $i -lt $lines.Count; $i++) { '"'{0,4}: {1}' -f ("'$i+1), $lines[$i] }' in C:\devel\claude-projects\distributed-governance-research
 succeeded in 182ms:
1611: ## Apéndice E4: el gate simétrico y el mapa de robustez de cuatro escenarios
1612: 
1613: Este apéndice ofrece el diseño completo del gate simétrico pre-registrado (resumido
1614: como "Estado cuantitativo" en §6) y el mapa de robustez de cuatro escenarios v1.14
1615: completo (destacado en §6): la tabla de escenarios, la descomposición de la miopía al
1616: daño, la frontera, el teorema de benchmark y los cuatro límites.
1617: 
1618: ### El gate simétrico de crédito-versus-cobertura (métodos completos)
1619: 
1620: Como esta es la única computación confirmatoria del artículo, su diseño se enuncia aquí
1621: por completo y no solo por referencia. Cada mundo contiene K = 500 proyectos
1622: candidatos; para cada uno se consideran N = 5000 participantes potenciales, cada
1623: uno interesado con una probabilidad específica del proyecto, de modo que el alcance
1624: de interesados es a lo sumo N y endógeno. Ambos brazos ven entonces el mismo pool de candidatos, los
1625: mismos costos exactos, la misma verdad net[j] = S[j] − h·cost[j], la entrega en
1626: **paridad**, y el mismo ruido de reporte report = v + Normal(0, τ); cada uno
1627: financia un conjunto **voraz** bajo un presupuesto de un tercio del costo total de
1628: los proyectos, es elegible para financiar un proyecto solo donde *su propia*
1629: estimación ruidosa de net es positiva (sin gate de oráculo), y su valor entregado se
1630: puntúa sobre el net *verdadero* de los proyectos. Los brazos son simétricos salvo
1631: por el mecanismo de cobertura y sus contrapartes igualadas. *Distribuido (cobertura
1632: endógena):* cada ciudadano interesado reporta de forma independiente con
1633: probabilidad p si su valor v ≥ 0 y p·(1 − β) si v < 0 (sesgo de voz adverso), dando
1634: ĥS_D = Σreportes / p, ordenado por net estimado por costo. *Central (lector de valor
1635: competente):* un presupuesto de tasación ajustado al total *esperado* de reportes del
1636: brazo distribuido en ese mundo, repartido **de manera uniforme** entre proyectos
1637: como un ancho de banda fijo por proyecto redondeado m_C = round(reportes esperados /
1638: K) (de modo que los totales de tasación de ambos brazos son iguales en esperanza
1639: salvo ese redondeo); por proyecto muestrea m_C ciudadanos
1640: interesados, observa v + Normal(0, τ), y forma su propio ĥNet_C ruidoso =
1641: alcance·media(observado) − h·cost. Ordena por score = (1 − λ)·z(ĥNet_C/cost) +
1642: λ·z(P/cost) —su **propia estimación ruidosa**, nunca el net verdadero— donde P es el
1643: crédito político reclamable (la lógica electoral de reclamo de crédito y
1644: trazabilidad por la cual se favorecen los beneficios visibles y atribuibles sobre
1645: los difusos; Mayhew 1974; Arnold 1990) y λ es la presión de crédito acotada (una
1646: presión *postulada* cuya magnitud en el mundo real debe medirse, no suponerse). El
1647: crédito mueve el *orden*, nunca la elegibilidad (sin planificador que destruya valor
1648: a sabiendas). Las asimetrías legítimas son por tanto solo estas: los reportes
1649: distribuidos se auto-enrutan hacia los proyectos que a los ciudadanos les importan
1650: mientras los interesados negativos participan menos, y la tasación central se
1651: reparte de manera uniforme mientras su orden carga presión de crédito —todo lo demás
1652: es compartido. El estimando es **Δ = (D − C)/O** por mundo, donde D, C, O son el net
1653: verdadero entregado por los brazos distribuido, central y voraz de información
1654: completa, y O es un nivel de referencia, no un óptimo. La grilla congelada
1655: barre λ ∈ {0, 0.1, 0.2, 0.3} (λ = 0 un control negativo), un parámetro de
1656: correlación latente ρ ∈ {0, 0.5, 1} (corr(S, P) realizada ≈ 0.00, 0.30, 0.82),
1657: y h ∈ {1.5, 2.5, 4} sobre 100 mundos sembrados, en un régimen de
1658: observación base (p = .35, β = .30, τ = .5) y un régimen de estrés de baja
1659: información con presupuesto igualado (p = .15, β = .60, τ = 1.0). La **regla de
1660: decisión pre-registrada** —congelada antes de correr y diseñada por el auditor
1661: independiente para ser adversarial— exigía, para un GO en reconstruir el motor
1662: cuantitativo, al menos 15 de las 18 celdas primarias con Δ medio > 0, una **mediana
1663: agrupada Δ ≥ 0.05**, un límite inferior de bootstrap > 0, y mediana Δ ≥ 0 bajo el
1664: régimen de estrés, más un guardia para pausar si el propio control λ = 0 excedía
1665: 0.05. El resultado fue **NO-GO**: la ventaja fue positiva en las 18
1666: celdas primarias, pero la **mediana agrupada Δ = 0.025** pre-registrada quedó por
1667: debajo del umbral de rebuild de 0.05; el control negativo λ = 0 se ubicó en
1668: ≈ 0.016, dentro del guardia de pausa (ninguna asimetría oculta señalada).
1669: Una estimación **post-hoc** de ratio-of-sums por conglomerado-de-mundos fue
1670: Δ = 0.026 [0.023, 0.029] (incertidumbre Monte-Carlo sobre el proceso generador
1671: simulado, reportada por separado de la mediana). La ventaja crece con la presión de
1672: crédito λ y cae a medida que el crédito se alinea con el valor —el mecanismo de
1673: crédito-versus-cobertura— pero es pequeña, razón por la cual el multiplicador
1674: calibrado se retira y el artículo se apoya en la arquitectura y la dirección del
1675: mecanismo, ahora afinada por el mapa de robustez a continuación.
1676: 
1677: ### El mapa de robustez de cuatro escenarios (v1.14)
1678: 
1679: El gate pre-registrado anterior dota al brazo central de una tasación competente y
1680: *consciente del daño*. Una extensión v1.14 hace la pregunta empíricamente fundada: qué
1681: ocurre cuando el central se modela como lo describe la evidencia — **casi ciego al daño
1682: difuso en la cola larga de baja visibilidad**. Esa ceguera está sobre-determinada por la
1683: literatura: el problema del conocimiento (Hayek 1945), la legibilidad estatal (Scott
1684: 1998), los costos difusos políticamente sub-ponderados (Olson 1965; Schattschneider 1960;
1685: Wilson 1973), el 83% del desperdicio público que es *pasivo* y no elegido (Bandiera, Prat
1686: y Valletti 2009), lo visible-versus-lo-no-visto (Bastiat 1850) y el control de agenda
1687: (Bachrach y Baratz 1962). El modelo lo realiza como un término de daño gobernado por
1688: saliencia, M_C = a + b·S⁺ + w·(v_p − S⁺) − b_H·s(V)·H + η, cuya detección de daño s(V)
1689: crece con la visibilidad del proyecto, mientras el brazo distribuido registra el daño en
1690: toda la distribución. **La participación de asignación neta es universal por arquitectura
1691: (p = 1)** —en Core v0 los perfiles y delegados asignan en nombre de los pasivos, así que
1692: es un *hecho*, no un turnout bajo de presupuesto participativo. Su *calidad de señal* es
1693: una composición anclada: ~5% reportes activos directos (la cifra de turnout de un
1694: dígito), ~35% microdelegación (señal individual, revocable — Kling et al. 2015) y ~60%
1695: reglas de perfil (un default de categoría de alta alineación, ya que la gente
1696: mayoritariamente conserva los defaults — Samuelson y Zeckhauser 1988). El anclaje
1697: literario completo de cada perilla está en `research/e4-calibration-literature-anchors.md`.
1698: Puntuando la entrega sobre el valor real, cuatro escenarios declarados (más un contraste
1699: diagnóstico) mapean dónde queda cada institución, como la fracción con signo del benchmark
1700: voraz de información completa, paridad en cero (`npm run e4:scenarios`):
1701: 
1702: | escenario (supuestos) | m ± IC 95% | Core v0 | central | ganador |
1703: |---|---|---|---|---|
1704: | **Probable — el escenario de referencia declarado** (central miope al daño difuso, proyectando, credit-tilted; distribuido en su composición de cobertura anclada) | **+54,0%** [+53,2, +54,8] | 98,2% | 44,2% | **Core v0 (decisivo)** |
1705: | **Solo miopía al daño** (contraste diagnóstico: probable, cambiando SOLO las dos coordenadas del gate de daño) | **+37,6%** [+37,0, +38,2] | 98,2% | 60,6% | Core v0 |
1706: | **Paquete sin miopía** — probable, pero al central se le otorga visión del daño + insesgamiento + precisión + sin crédito | **+13,8%** [+13,5, +14,1] | 98,6% | 84,8% | Core v0 |
1707: | **Caso favorable al distribuido** | **+205,2%** [+202,9, +208,1] | 95,6% | −109,6% | Core v0 |
1708: | **Endpoint declarado favorable al central** (un lector residualmente imperfecto en un mundo casi sin daño) | **−2,3%** [−2,5, −2,2] | 95,3% | 97,6% | central (inmaterial) |
1709: 
1710: **El resultado anclado es decisivo y robusto.** Bajo el escenario de **referencia
1711: declarado** el brazo distribuido entrega ≈ 98,2% del benchmark y el central
1712: ≈ 44,2% —una brecha de +54 puntos— y la cobertura gana en esencialmente todo el espacio
1713: de parámetros anclado. Apagar la miopía al daño *sola* (las dos coordenadas del gate)
1714: recupera cerca del **41%** de la brecha (16,4 de un declive de 40,2 puntos); otorgar al
1715: central el paquete *completo* competente-y-consciente-del-daño recupera el resto y aun
1716: así deja a la cobertura adelante (**≈ +13,8%**) —de modo que hasta un central idealizado
1717: en todo *salvo* la visión del daño que la literatura le niega igual pierde. El central
1718: se pone apenas adelante solo **abandonando los supuestos declarados**: un lector corregido
1719: (sin miopía — contra Hayek/Scott/Olson/Bandiera; sin proyección — contra Broockman y
1720: Skovron 2018) en un mundo casi sin daño alcanza apenas ≈ −3%, un rincón marginal y
1721: anti-empírico. Ese rincón se reporta **simétricamente** con el rincón *igualmente
1722: idealizado* del brazo distribuido —construido para reflejar la misma receta: señal
1723: distribuida perfecta en un mundo con daño con el central en su miopía *anclada*—, que
1724: alcanza **≈ +118%** (el escenario más amplio `PRO-DIST` de la tabla, +205%, es aún más
1725: favorable porque *además* degrada al central por debajo de su nivel anclado). La
1726: idealización es salvajemente asimétrica, y ninguno de los dos rincones está empíricamente
1727: fundado. La única sensibilidad que reduce materialmente la
1728: brecha anclada es el **error correlado / de modo común** sobre el tramo de
1729: perfil-y-delegación (una plataforma/recomendador compartido, o delegación concentrada en
1730: super-delegados — Kling et al. 2015): lleva ≈ +54% a ≈ +44% (modesto) y ≈ +26% (fuerte),
1731: cruzando la paridad solo a un nivel grande de error compartido (σ_cm ≈ 2,1). Ninguna
1732: rebanada de un-solo-factor voltea al ganador sobre su rango plausible; el sendero
1733: ceteris-paribus combinado desde la referencia declarada hacia el endpoint del central
1734: plenamente idealizado cruza la paridad solo en **t ≈ 0,92 del segmento declarado**. Esto
1735: es evidencia de curva local, ceteris-paribus —seis rebanadas de un-solo-factor más un
1736: sendero combinado declarado— no una frontera global exhaustiva; un barrido conjunto
1737: Sobol / hipercubo latino de todo el espacio de parámetros queda diferido a trabajo
1738: futuro. Estas
1739: magnitudes son **puntos de referencia declarados y motivados por fuentes, de un modelo
1740: estilizado de instituciones comparadas —un contraste de modelo condicional, no efectos
1741: de campo calibrados al dominio objetivo**. Los límites vigentes son: (i) la *magnitud*
1742: exacta del gate de daño es una forma funcional estilizada —su *dirección* está
1743: fuertemente anclada, y el resultado es robusto en la banda s_exp ∈ [1, 2,5] (≈ +48% a
1744: ≈ +54%); (ii) los insumos del central cargan una brecha de transporte no propagada —la
1745: evidencia de opinión política identifica error de *percepción* élite–constituyente, y
1746: mapearlo a error de bienestar a nivel de proyecto requiere tres enlaces no estimados
1747: (percepción → puntaje del proyecto → elección de cartera → valor realizado del afectado),
1748: así que esos insumos son informados-por-proxy, no calibrados; (iii) los intervalos
1749: reportados son intervalos de bootstrap-por-mundos condicionales al 95% con insumos de
1750: escenario *fijos* —solo incertidumbre de simulación de mundos finitos, excluyendo la
1751: incertidumbre en valores de parámetros, transporte literario, forma funcional e
1752: implementación de campo; el error independiente-más-modo-común del brazo distribuido es su
1753: única sensibilidad estructural (arriba); y (iv) el costo administrativo y la fuga son
1754: canales *multiplicativos* separados de preservación de valor (con su interacción reportada
1755: explícitamente), apagados aquí a propósito —E5 (el marco por capas compañero) los enciende. Los
1756: escenarios, la frontera, la evidencia, el teorema y el anclaje literario completo
1757: reproducibles están en `scripts/simulation/e4-v5/`, `research/e4-parity-theorem.md` y
1758: `research/e4-calibration-literature-anchors.md`.
1759: 
1760: ### Objetivos de calibración de E4
1761: 
1762: Las magnitudes de E4-v4/v5 son internas al modelo; la tabla nombra, para cada
1763: parámetro, el dato real que *podría* informarlo —volviendo la frontera entre lo
1764: interno al modelo y lo anclado empíricamente una línea visible y no un caveat
1765: enterrado en prosa (detalles en `research/e4-calibration-targets.md`). El
1766: %-benchmark del central es un *output* que el modelo computa, pero mapearlo a las
1767: razones observadas realizado/tasado **no es una superposición directa**: son
1768: constructos distintos (§6), así que es un **objetivo de validación candidato que
1769: requiere un puente de constructo explícito**, no una calibración en un paso.
1770: 
1771: | Cantidad del modelo | Valor modelo | Proxy real | Dataset(s) candidato | Estado |
1772: |---|---|---|---|---|
1773: | %-benchmark del central | 44–85% | valor realizado ÷ tasado | calificaciones IEG del Banco Mundial; base de megaproyectos de Flyvbjerg | objetivo candidato; requiere mapeo de constructo explícito |
1774: | η (ceguera al daño) | 0–0.5 | desperdicio pasivo vs activo | Bandiera-Prat-Valletti 2009 (83% pasivo, específico del contexto: compras de bienes estandarizados en Italia) | dirección anclada |
1775: | β (desigualdad de voz) | 0.2–0.5 | sesgo de participación en PP | NYC / París / Porto Alegre; Decidim / Consul | calibrable |
1776: | q, m (detección) | q ≈ 0.5–1%, m en cientos | tasas de queja / denuncia | FTC Consumer Sentinel; NYC 311; Dyck et al. 2010 | calibrable |
1777: | umbral λ | central ≈ 0.10 | rentas de compras / profundidad de soborno | Olken 2007; WB Enterprise Surveys | calibrable |
1778: | pena f | igual en ambos lados | escala de sanción legal | mantenida igual (conservador) | elección de alcance |
1779: 
1780: El mapa de cuatro escenarios v1.14 (arriba; destacado en §6) hace explícito el mismo anclaje para su modelo de miopía al daño: la cola
1781: larga de visibilidad está motivada por fuentes en las compras públicas de cola pesada (Skuhrovec et al. 2013), la
1782: participación por el turnout de presupuestos participativos, y el gate de detección de daño por la literatura de
1783: agenda-setting/saliencia; los anclajes por-perilla y su fuerza están registrados en
1784: `research/e4-plausible-anchors.md`, con los escenarios, la frontera y el teorema reproducibles en
1785: `scripts/simulation/e4-v5/` y `research/e4-parity-theorem.md`.
1786: 
1787: ## Referencias
1788: 
1789: - Akerlof, G. (1970). "The Market for 'Lemons': Quality Uncertainty and the Market Mechanism." *Quarterly Journal of Economics* 84(3).
1790: - Arnold, R. D. (1990). *The Logic of Congressional Action*. Yale University Press.
1791: - Austen-Smith, D., and J. Banks (1996). "Information Aggregation, Rationality, and the Condorcet Jury Theorem." *American Political Science Review* 90(1).
1792: - Bachrach, P., and M. Baratz (1962). "Two Faces of Power." *American Political Science Review* 56(4).
1793: - Besley, T., and S. Coate (2003). "Centralized versus Decentralized Provision of Local Public Goods: A Political Economy Approach." *Journal of Public Economics* 87(12).
1794: - Baiocchi, G., and E. Ganuza (2017). *Popular Democracy: The Paradox of Participation*. Stanford University Press.
1795: - Bandiera, O., A. Prat, and T. Valletti (2009). "Active and Passive Waste in Government Spending: Evidence from a Policy Experiment." *American Economic Review* 99(4).
1796: - Bastiat, F. (1850). *Ce qu'on voit et ce qu'on ne voit pas* [What Is Seen and What Is Not Seen]. Paris.
1797: - Becker, G. (1968). "Crime and Punishment: An Economic Approach." *Journal of Political Economy* 76(2).
1798: - Becker, G., and G. Stigler (1974). "Law Enforcement, Malfeasance, and Compensation of Enforcers." *Journal of Legal Studies* 3(1).
1799: - Bikhchandani, S., D. Hirshleifer, and I. Welch (1992). "A Theory of Fads, Fashion, Custom, and Cultural Change as Informational Cascades." *Journal of Political Economy* 100(5).
1800: - Brennan, J. (2016). *Against Democracy*. Princeton University Press.
1801: - Broockman, D., and C. Skovron (2018). "Bias in Perceptions of Public Opinion among Political Elites." *American Political Science Review* 112(3).
1802: - Blum, C., and C. I. Zuber (2016). "Liquid Democracy: Potentials, Problems, and Perspectives." *Journal of Political Philosophy* 24(2).
1803: - Bovens, M. (2007). "Analysing and Assessing Accountability: A Conceptual Framework." *European Law Journal* 13(4).
1804: - Buchanan, J., and G. Tullock (1962). *The Calculus of Consent*. University of Michigan Press.
1805: - Buterin, V., Z. Hitzig, and E. G. Weyl (2019). "A Flexible Design for Funding Public Goods." *Management Science* 65(11).
1806: - Campbell, D. (1976). "Assessing the Impact of Planned Social Change." Occasional Paper 8, Dartmouth College.
1807: - Casella, A. (2012). *Storable Votes: Protecting the Minority Voice*. Oxford University Press.
1808: - Coase, R. (1937). "The Nature of the Firm." *Economica* 4(16).
1809: - Condorcet, M. de (1785). *Essai sur l'application de l'analyse à la probabilité des décisions rendues à la pluralité des voix*. Imprimerie Royale.
1810: - De Filippi, P., and A. Wright (2018). *Blockchain and the Law: The Rule of Code*. Harvard University Press.
1811: - Demsetz, H. (1969). "Information and Efficiency: Another Viewpoint." *Journal of Law and Economics* 12(1).
1812: - Downs, A. (1957). *An Economic Theory of Democracy*. Harper.
1813: - Dulleck, U., and R. Kerschbamer (2006). "On Doctors, Mechanics, and Computer Specialists: The Economics of Credence Goods." *Journal of Economic Literature* 44(1).
1814: - Dyck, A., A. Morse, and L. Zingales (2010). "Who Blows the Whistle on Corporate Fraud?" *Journal of Finance* 65(6).
1815: - Epstein, R. (1995). *Simple Rules for a Complex World*. Harvard University Press.
1816: - Ferraz, C., and F. Finan (2008). "Exposing Corrupt Politicians: The Effects of Brazil's Publicly Released Audits on Electoral Outcomes." *Quarterly Journal of Economics* 123(2).
1817: - Flyvbjerg, B., N. Bruzelius, and W. Rothengatter (2003). *Megaprojects and Risk: An Anatomy of Ambition*. Cambridge University Press.
1818: - Friedman, M. (1962). *Capitalism and Freedom*. University of Chicago Press.
1819: - Friedman, M., and R. Friedman (1980). *Free to Choose*. Harcourt.
1820: - Einstein, K. L., M. Palmer, and D. M. Glick (2019). *Neighborhood Defenders: Participatory Politics and America's Housing Crisis*. Cambridge University Press.
1821: - Fung, A., and E. O. Wright (2003). *Deepening Democracy: Institutional Innovations in Empowered Participatory Governance*. Verso.
1822: - Gaus, G. (2011). *The Order of Public Reason*. Cambridge University Press.
1823: - Gibbard, A. (1973). "Manipulation of Voting Schemes: A General Result." *Econometrica* 41(4).
1824: - Gonçalves, S. (2014). "The Effects of Participatory Budgeting on Municipal Expenditures and Infant Mortality in Brazil." *World Development* 53.
1825: - Goodhart, C. (1975). "Problems of Monetary Management: The UK Experience." *Papers in Monetary Economics*, Reserve Bank of Australia.
1826: - Green, J., and J.-J. Laffont (1979). *Incentives in Public Decision-Making*. North-Holland.
1827: - Hayek, F. (1945). "The Use of Knowledge in Society." *American Economic Review* 35(4).
1828: - Hirschman, A. (1970). *Exit, Voice, and Loyalty*. Harvard University Press.
1829: - Holmström, B. (1979). "Moral Hazard and Observability." *Bell Journal of Economics* 10(1).
1830: - Holmström, B. (1999). "Managerial Incentive Problems: A Dynamic Perspective." *Review of Economic Studies* 66(1).
1831: - Jensen, M., and W. Meckling (1976). "Theory of the Firm: Managerial Behavior, Agency Costs and Ownership Structure." *Journal of Financial Economics* 3(4).
1832: - Kahng, A., S. Mackenzie, and A. Procaccia (2018). "Liquid Democracy: An Algorithmic Perspective." *AAAI*.
1833: - Kydland, F., and E. Prescott (1977). "Rules Rather than Discretion: The Inconsistency of Optimal Plans." *Journal of Political Economy* 85(3).
1834: - Kling, C. C., J. Kunegis, H. Hartmann, M. Strohmaier, and S. Staab (2015). "Voting Behaviour and Power in Online Democracy: A Study of LiquidFeedback in Germany's Pirate Party." arXiv:1503.07723.
1835: - Laffont, J.-J., and J. Tirole (1991). "The Politics of Government Decision-Making: A Theory of Regulatory Capture." *Quarterly Journal of Economics* 106(4).
1836: - Lalley, S., and E. G. Weyl (2018). "Quadratic Voting: How Mechanism Design Can Radicalize Democracy." *AEA Papers and Proceedings* 108.
1837: - Landemore, H. (2020). *Open Democracy: Reinventing Popular Rule for the Twenty-First Century*. Princeton University Press.
1838: - Mayhew, D. (1974). *Congress: The Electoral Connection*. Yale University Press.
1839: - Lipsey, R., and K. Lancaster (1956). "The General Theory of Second Best." *Review of Economic Studies* 24(1).
1840: - Lukes, S. (1974). *Power: A Radical View*. Macmillan.
1841: - Lupia, A., and M. McCubbins (1998). *The Democratic Dilemma: Can Citizens Learn What They Need to Know?* Cambridge University Press.
1842: - Musgrave, R. (1959). *The Theory of Public Finance*. McGraw-Hill.
1843: - Michels, R. (1911). *Political Parties: A Sociological Study of the Oligarchical Tendencies of Modern Democracy*.
1844: - Mises, L. von (1920). "Economic Calculation in the Socialist Commonwealth." Translated in F. Hayek, ed., *Collectivist Economic Planning* (1935).
1845: - Noelle-Neumann, E. (1974). "The Spiral of Silence: A Theory of Public Opinion." *Journal of Communication* 24(2).
1846: - Nozick, R. (1974). *Anarchy, State, and Utopia*. Basic Books.
1847: - Oates, W. (1972). *Fiscal Federalism*. Harcourt Brace Jovanovich.
1848: - Offermann, M. (2026b). "Stress-Testing a Distributed Public-Resource Governance Architecture: Adversarial and Behavioral Agent-Based Evidence." Companion computational-experiments paper and repository, concept doi:10.5281/zenodo.21246088 (always resolves to the latest version).
1849: - Okun, A. (1975). *Equality and Efficiency: The Big Tradeoff*. Brookings Institution.
1850: - Olken, B. (2007). "Monitoring Corruption: Evidence from a Field Experiment in Indonesia." *Journal of Political Economy* 115(2).
1851: - North, D., and B. Weingast (1989). "Constitutions and Commitment: The Evolution of Institutions Governing Public Choice in Seventeenth-Century England." *Journal of Economic History* 49(4).
1852: - Olson, M. (1965). *The Logic of Collective Action*. Harvard University Press.
1853: - Olson, M. (1982). *The Rise and Decline of Nations*. Yale University Press.
1854: - Ostrom, E. (1990). *Governing the Commons: The Evolution of Institutions for Collective Action*. Cambridge University Press.
1855: - Peixoto, T., and J. Fox (2016). "When Does ICT-Enabled Citizen Voice Lead to Government Responsiveness?" *IDS Bulletin* 47(1).
1856: - Power, M. (1997). *The Audit Society: Rituals of Verification*. Oxford University Press.
1857: - Reinikka, R., and J. Svensson (2004). "Local Capture: Evidence from a Central Government Transfer Program in Uganda." *Quarterly Journal of Economics* 119(2).
1858: - Rosanvallon, P. (2008). *Counter-Democracy: Politics in an Age of Distrust*. Cambridge University Press.
1859: - Salganik, M., P. Dodds, and D. Watts (2006). "Experimental Study of Inequality and Unpredictability in an Artificial Cultural Market." *Science* 311(5762).
1860: - Samuelson, P. (1954). "The Pure Theory of Public Expenditure." *Review of Economics and Statistics* 36(4).
1861: - Samuelson, W., and R. Zeckhauser (1988). "Status Quo Bias in Decision Making." *Journal of Risk and Uncertainty* 1(1).
1862: - Satterthwaite, M. (1975). "Strategy-Proofness and Arrow's Conditions: Existence and Correspondence Theorems for Voting Procedures and Social Welfare Functions." *Journal of Economic Theory* 10(2).
1863: - Schattschneider, E. E. (1960). *The Semisovereign People*. Holt, Rinehart and Winston.
1864: - Scott, J. (1998). *Seeing Like a State: How Certain Schemes to Improve the Human Condition Have Failed*. Yale University Press.
1865: - Sen, A. (1999). *Development as Freedom*. Oxford University Press.
1866: - Sowell, T. (1980). *Knowledge and Decisions*. Basic Books.
1867: - Skuhrovec, J., et al. (2013). "Exponential and power laws in public procurement markets." arXiv:1309.0218.
1868: - Stigler, G. (1971). "The Theory of Economic Regulation." *Bell Journal of Economics and Management Science* 2(1).
1869: - Stokes, S. (2005). "Perverse Accountability: A Formal Model of Machine Politics with Evidence from Argentina." *American Political Science Review* 99(3).
1870: - Thompson, D. (1980). "Moral Responsibility of Public Officials: The Problem of Many Hands." *American Political Science Review* 74(4).
1871: - Tiebout, C. (1956). "A Pure Theory of Local Expenditures." *Journal of Political Economy* 64(5).
1872: - Urbinati, N. (2014). *Democracy Disfigured: Opinion, Truth, and the People*. Harvard University Press.
1873: - Vickrey, W. (1961). "Counterspeculation, Auctions, and Competitive Sealed Tenders." *Journal of Finance* 16(1).
1874: - Wampler, B. (2007). *Participatory Budgeting in Brazil: Contestation, Cooperation, and Accountability*. Penn State University Press.
1875: - Williamson, O. (1985). *The Economic Institutions of Capitalism*. Free Press.
1876: - Wilson, J. Q. (1973). *Political Organizations*. Basic Books.
1877: - Wittman, D. (1989). "Why Democracies Produce Efficient Results." *Journal of Political Economy* 97(6).
1878: 
1879: ---
1880: 
1881: *Materiales acompañantes: demostraciones formales ([formal-models](../research/formal-models.md)),
1882: código de simulación y tablas completas de resultados
1883: (`scripts/simulation/allocation-sim.mjs`,
1884: [simulation-results](../research/simulation-results.md)), la base de evidencia de instituciones de
1885: auditoría ([audit-evidence-base](../research/audit-evidence-base.md)), el corpus de la arquitectura
1886: (`docs/`, `knowledge/`), y el registro adversarial completo (`attacks/`,
1887: `defenses/`, resoluciones aceptadas `docs/67`–`docs/113`; los cuarenta y tres
1888: ataques resueltos y propagados, salvo las D037–D040 de la ronda de revisión del
1889: manuscrito, cuya propagación al corpus está rastreada).*

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Select-String -LiteralPath 'scripts/simulation/e4-v5/e9-fullstack.mjs' -Pattern 'world|EXTREME|PROBABLE|selection|delivery|scenario|CENTRAL|DISTRIBUT' -CaseSensitive:"'$false | Select-Object -First 180 | ForEach-Object { '"'{0}: {1}' -f "'$_.LineNumber, $_.Line }; Select-String -LiteralPath '"'scripts/simulation/e4-v5/e10-costs.mjs' -Pattern 'cost|neutral|result|summary|kappa|gap|budget' -CaseSensitive:"'$false | Select-Object -First 180 | ForEach-Object { '"'{0}: {1}' -f "'$_.LineNumber, $_.Line }' in C:\devel\claude-projects\distributed-governance-research
 succeeded in 214ms:
1: // E9 — the FULL STACK: PLANNING × SELECTION × DELIVERY. Built ON E5 (reuses its delivery machinery) + the E4 engine.
2: // E4 = selection only; E5 = selection × delivery; E9 adds the third Core-v0 layer, PLANNING (constructing the
3: // eligibility frame / per-category budget shares) BEFORE selection, so all three layers are compared central-vs-Core-v0.
5: // Planning constructs per-CATEGORY budget shares from a planner's PERCEIVED category value; selection funds projects
6: // within each category's share (E4 fundedSet); delivery applies the E5 regime (deliveredCell). Everything is normalized
7: // by the oracle (perfect planning + perfect selection + perfect delivery). No compound multiplier; percentages only.
9: //   Planning regime:   central (perceives category value through harm-myopia + projection + credit → can STARVE whole
10: //                       harm-heavy / low-visibility categories) | distributed (aggregated coverage category signal)
11: //   Selection & delivery regimes: exactly as E5.
13: // Sectors are PERSISTENT with intrinsic visibility and a need↔visibility association (assoc): the central planner reads
16: // options within a shared frame). 2x2x2 = 8 cells; the headline diagonal is all-central (status quo) vs all-distributed
22: import { generateWorld, makeRng, fundedSet } from './engine.mjs';
23: import { DELIVERY, deliveredCell, validateDelivery, sampleTempt } from './e5-delivery.mjs';
30:                       //     its LOWEST-perceived sectors the CENTRAL keeps entirely OFF the menu (share 0; budget
31:                       //     reallocated to the sectors it does fund). Anchored in DIRECTION (central structurally
39:                       //     between-sector return-per-cost SD (World Bank OED portfolio ≈0.184; anchor round). The
41:   creditCoef: 0.076,  // central planner's POLITICAL-CREDIT weight on sector visibility. PROVISIONALLY ANCHORED to the
44:   covSees: 0.7,       // fraction of the cross-sector value tilt that distributed COVERAGE perceives (central sees 0 —
49:   excludeMode: 'central', // which arm hard-excludes: 'central' | 'symmetric'
54: // Assign projects to nSec PERSISTENT sectors (drawn once per world), impose a controlled need↔visibility association,
79: // A planner's perceived value per sector. Oracle sees true adjusted value; the central is BLIND to the low-visibility
80: // sector value tilt and adds political credit ∝ sector visibility; distributed coverage sees a fraction covSees of the tilt.
121: // Deliver a whole ARM-cell over sectors: (planning shares, selection key + opts, delivery regime, coverage lift).
123: // using the same arm-selection rule — so utilization differences don't confound the planning contrast (Codex round-2).
139: // One world: executors (separate stream), persistent sectors (planning stream), then the FULL 2×2×2 = 8 cells over the
140: // TRUE adjusted value Sadj. Cell key = planning(c/d) _ selection(c/d) _ delivery(op/ve).
141: function runWorldStack(cfg, rng, execRng, pRng, del, plan) {
142:   const projects = generateWorld(cfg, rng);
158:   // central agenda capture: zero the `agendaCapture` lowest-PERCEIVED sectors before proportional shares (they fall off
166:   const shC = sectorShares(percC, plan, doExC);                                        // central planning (+ agenda capture)
167:   const shD = sectorShares(sectorPerceived(projects, sec, plan, 'D'), plan, doExD);   // distributed planning
179:     const useCov = s === 'd';                                    // coverage delivery lift travels with distributed selection
191: // bootstrap replicate). Returns { gain, shapley:{planning,selection,delivery}, planCentralSel, planDistSel, cells }.
196:   const selection = SH_W[0] * (v(0, 1, 0) - v(0, 0, 0)) + SH_W[1] * (v(1, 1, 0) - v(1, 0, 0)) + SH_W[2] * (v(0, 1, 1) - v(0, 0, 1)) + SH_W[3] * (v(1, 1, 1) - v(1, 0, 1));
197:   const delivery  = SH_W[0] * (v(0, 0, 1) - v(0, 0, 0)) + SH_W[1] * (v(1, 0, 1) - v(1, 0, 0)) + SH_W[2] * (v(0, 1, 1) - v(0, 1, 0)) + SH_W[3] * (v(1, 1, 1) - v(1, 1, 0));
200:     shapley: { planning, selection, delivery },
201:     planCentralSel: v(1, 0, 1) - v(0, 0, 1), planDistSel: v(1, 1, 1) - v(0, 1, 1),
205: export function fullStack(cfg, { nWorlds = NUM.n_worlds.value, seed = NUM.seed.value, delivery = DELIVERY, planning = PLANNING } = {}) {
206:   validateDelivery(delivery);
214:   for (let w = 0; w < nWorlds; w++) {
215:     const r = runWorldStack(cfg, rng, execRng, pRng, delivery, planning);
224:   // world-cluster bootstrap CIs for the gain, the three Shapley values, and the two planning simple effects.
226:   const bs = { gain: [], planning: [], selection: [], delivery: [], planCentralSel: [], planDistSel: [] };
232:     bs.gain.push(qy.gain); bs.planning.push(qy.shapley.planning); bs.selection.push(qy.shapley.selection);
233:     bs.delivery.push(qy.shapley.delivery); bs.planCentralSel.push(qy.planCentralSel); bs.planDistSel.push(qy.planDistSel);
240:     attributionCI: { planning: ci(bs.planning), selection: ci(bs.selection), delivery: ci(bs.delivery) },
241:     planningUnderCentralSel: point.planCentralSel, planningUnderDistributedSel: point.planDistSel,
242:     planningCI: { central: ci(bs.planCentralSel), distributed: ci(bs.planDistSel) },
262:   if (!['central', 'symmetric'].includes(plan.excludeMode)) bad.push("excludeMode must be 'central' or 'symmetric'");
270:   import('./scenario-configs.mjs').then((SC) => {
271:     const { SCENARIO_WORLD: W, PROBABLE } = SC;
272:     const cfg = { ...baseConfig(), ...W, ...PROBABLE };
275:     const r = fullStack(cfg, { nWorlds: 1000, planning: { ...PLANNING, residualMode: 'recycle' } });
276:     safeLog('E9 — FULL STACK: PLANNING, SELECTION and DELIVERY (built on E5, PROBABLE world). Percentages of a global');
279:     safeLog(`worlds kept: ${r.n}   (${PLANNING.nSec} COFOG sectors; assoc=${PLANNING.assoc}, secValSpread=${PLANNING.secValSpread}, creditCoef=${PLANNING.creditCoef}, agendaCapture=${PLANNING.agendaCapture})`);
280:     safeLog(`STATUS QUO (all-central):   ${pct(r.statusQuo)} of reference   ·   CORE v0 FULL (all-distributed): ${pct(r.coreV0)}`);
283:     safeLog('generator, so these are NOT the standalone quantified layers. The standalone SELECTION and DELIVERY figures');
285:     safeLog(`  planning ${pct(r.attribution.planning)} ${civ(r.attributionCI.planning)} · selection ${pct(r.attribution.selection)} ${civ(r.attributionCI.selection)} · delivery ${pct(r.attribution.delivery)} ${civ(r.attributionCI.delivery)}  (sums to the gain)\n`);
287:     // Adversarial R1 #3: the layer values are LARGE IN PROBABLE, not "robust" — individual Shapley components reverse
288:     // sign in extreme worlds (even though the FULL diagonal stays positive in every one). Publish the named-world table.
289:     safeLog('Named-world decomposition (the full diagonal stays positive everywhere; individual layers can reverse):');
290:     safeLog('   world         full gain   planning   selection   delivery');
291:     for (const nm of ['PROBABLE', 'PRO_CENTRAL', 'MYOPIA_OFF', 'PRO_DIST']) {
292:       const rw = fullStack({ ...baseConfig(), ...W, ...SC[nm] }, { nWorlds: 700, planning: { ...PLANNING, residualMode: 'recycle' } });
293:       safeLog(`   ${nm.padEnd(12)}  ${pct(rw.fullStackGain).padStart(8)}  ${pct(rw.attribution.planning).padStart(8)}  ${pct(rw.attribution.selection).padStart(9)}  ${pct(rw.attribution.delivery).padStart(8)}`);
295:     safeLog('   → SELECTION and DELIVERY are LARGE in PROBABLE; selection reverses in PRO_CENTRAL and delivery in PRO_DIST');
296:     safeLog('     (stronger delivery magnifies harmful portfolios there). The full Core v0 advantage holds in ALL worlds.\n');
298:     safeLog('Planning as a CONDITIONAL simple effect (distributed − central planning), context-dependent:');
299:     safeLog(`  under central selection: ${pct(r.planningUnderCentralSel)} ${civ(r.planningCI.central)} · under distributed selection: ${pct(r.planningUnderDistributedSel)} ${civ(r.planningCI.distributed)} (Core v0 context)\n`);
307:       const row = [-1.0, -0.6, 0.0, 0.6].map((a) => pct(fullStack(cfg, { nWorlds: 500, planning: { ...PLANNING, secValSpread: sv, assoc: a } }).attribution.planning).padStart(7));
313:     // central keeps its lowest-perceived sectors OFF the menu. Direction anchored (Bachrach–Baratz 1962; political
315:     safeLog('Agenda capture (second face of power — central keeps its lowest-perceived COFOG sectors OFF the menu):');
316:     safeLog('   sectors captured   planning Shapley   planning|distributed-sel   full-stack gain');
318:       const ra = fullStack(cfg, { nWorlds: 600, planning: { ...PLANNING, agendaCapture: ac } });
319:       safeLog(`   ${String(ac).padStart(2)}/${PLANNING.nSec}              ${pct(ra.attribution.planning).padStart(7)}           ${pct(ra.planningUnderDistributedSel).padStart(7)}            ${pct(ra.fullStackGain).padStart(7)}`);
326:     safeLog('as "planning is small," which is not what it means. Quantify SELECTION and DELIVERY from E5 (they are LARGE');
327:     safeLog('IN PROBABLE — not "robust": each reverses sign in an extreme world, see the named-world table above, though');
328:     safeLog('the full Core v0 advantage holds in every world); present PLANNING QUALITATIVELY — mechanism identified');
1: // E10 — the COST layer on top of the delivered-value stack. Adds ADMINISTRATIVE/MACHINERY COST (κ): the value-proxy
3: // central runs and that Core v0 largely eliminates, MINUS Core v0's own operating cost (platform + AI). This is the
4: // cost dimension E5 (delivered value at equal budget) and E9 (the full stack) deliberately left out.
8: //     capture is the dominant, not-yet-anchorable mechanism), so it must NOT be folded quantitatively into the cost
9: //     result. Planning OFF ⇒ the value base is E5 (selection × delivery). Planning ON ⇒ the value base is E9.
10: //   • COSTS are switchable OFF (κ_C = κ_D = 0 ⇒ E10 reduces to the value stack).
12: //   Admin cost reduces the BUDGET (net-budget accounting): each arm funds at (1−κ_arm)·budget, and its delivered value
13: //   is taken as a fraction of the COMMON full-budget oracle. m10 = V_D − V_C. (Adversarial R1: an earlier version
17: // κ is the ADMINISTRATIVE MACHINERY cost only, DE-OVERLAPPED from E5 delivery leakage and charged SYMMETRICALLY (Core
18: // v0's own control machinery is costed, not free). Magnitudes DECLARED (see COSTS). Run: npm run e10:costs
25: export const COSTS = {
26:   // Adversarial-round-1 corrections: κ is the ADMINISTRATIVE MACHINERY cost only, DE-OVERLAPPED from E5's delivery
28:   // non-delivery — using it here double-counted). And costs are charged SYMMETRICALLY: Core v0's own control machinery
29:   // (the evidence/verification/recovery layer that earns E5's verified-delivery benefit) is costed, not free.
30:   kappa_C:    0.08,   // central allocation / prioritization / value-proxy-study / delivery-management machinery Core v0
34:   kappa_D:    0.05,   // Core v0's OWN operating cost = digital platform + AI (low, e-GP run-costs <1% of spend — JBCA
38:   planningOn: false,  // author requirement: PLANNING OFF by default (its magnitude is deferred; do not fold into costs)
41: // Raw delivered value of one arm's cell at a NET budget (phi scaled by 1−κ), and the full-budget oracle sum, sharing the
42: // same worlds/seed. Admin cost reduces the BUDGET (fewer projects funded), not the delivered value directly — because
43: // the greedy funds highest-value projects first, cutting budget removes the MARGINAL (lowest-value) funded projects, so
45: function armValueNet(cfg, opts, costs, delivery, planning, arm, kappa) {
46:   const cNet = { ...cfg, phi: cfg.phi * (1 - kappa) };
47:   if (costs.planningOn) {
49:     return (arm === 'C' ? v.statusQuo : v.coreV0) * v.sumO;   // raw arm value at net budget
55: export function e10(cfg, { nWorlds = NUM.n_worlds.value, seed = NUM.seed.value, delivery = DELIVERY, planning = PLANNING, costs = COSTS } = {}) {
56:   const kC = costs.kappa_C, kD = costs.kappa_D;
57:   const via = costs.planningOn ? 'E9 (planning ON)' : 'E5 (planning OFF)';
58:   // full-budget value base (both arms, for value-only) and its oracle — the COMMON normalizer.
59:   const full = costs.planningOn ? fullStack(cfg, { nWorlds, seed, delivery, planning }) : delivered2x2(cfg, { nWorlds, seed, delivery });
61:   const sq = costs.planningOn ? full.statusQuo : full.cells.S;
62:   const cv = costs.planningOn ? full.coreV0 : full.cells.A2;
63:   // NET-budget delivered value of each arm, normalized by the COMMON full-budget oracle.
64:   const V_C = armValueNet(cfg, { nWorlds, seed }, costs, delivery, planning, 'C', kC) / Ofull;
65:   const V_D = armValueNet(cfg, { nWorlds, seed }, costs, delivery, planning, 'D', kD) / Ofull;
67:   const costGain = V_D - V_C;
69:     planningOn: costs.planningOn, via, kappa_C: kC, kappa_D: kD,
71:     withCosts: { statusQuo: V_C, coreV0: V_D, gain: costGain },
72:     adminCostContribution: costGain - valueGain,   // net-budget admin-cost effect on the Core-v0 − status-quo gap
81:     safeLog('E10 — the ADMINISTRATIVE-COST layer on the delivered-value stack (PROBABLE world). Percentages of the');
82:     safeLog('full-information greedy REFERENCE. PLANNING is OFF by default; admin cost reduces the BUDGET (net-budget');
84:     safeLog(`value base: ${r.via}   ·   κ_C=${r.kappa_C} (central allocation/prioritization/study machinery) · κ_D=${r.kappa_D} (Core v0 platform + its control machinery)  [magnitude DECLARED]`);
85:     safeLog(`VALUE ONLY (costs off):   status quo ${pct(r.valueOnly.statusQuo)} · Core v0 ${pct(r.valueOnly.coreV0)}  → gain ${pct(r.valueOnly.gain)}`);
86:     safeLog(`WITH ADMIN COSTS (net budget): status quo ${pct(r.withCosts.statusQuo)} · Core v0 ${pct(r.withCosts.coreV0)}  → gain ${pct(r.withCosts.gain)}`);
87:     safeLog(`  admin-cost effect on the gap: ${pct(r.adminCostContribution)} (points of the reference).\n`);
88:     safeLog('  → Under symmetric net-budget accounting the admin-cost layer is roughly NEUTRAL (small, and can go either');
91:     safeLog('    an admin-cost saving. A decisive cost advantage would need κ_C ≫ κ_D beyond what symmetric accounting supports.\n');
93:     const off = e10(cfg, { nWorlds: 1200, costs: { ...COSTS, kappa_C: 0, kappa_D: 0 } });
94:     safeLog(`switch check — costs OFF (κ=0): with-costs gain ${pct(off.withCosts.gain)} == value-only gain ${pct(off.valueOnly.gain)} (reduces to the value stack).`);
96:     safeLog('\nAdmin-cost sensitivity (κ_D=0.05 fixed; κ_C swept — magnitude DECLARED):');
97:     safeLog('   κ_C     admin-cost effect on the gap (points of reference)');
99:       const rk = e10(cfg, { nWorlds: 800, costs: { ...COSTS, kappa_C: kc } });
100:       safeLog(`   ${kc.toFixed(2)}      ${pct(rk.adminCostContribution).padStart(7)}`);
102:     safeLog('   → the admin-cost effect is small and only turns clearly positive at large κ_C; magnitudes DECLARED,');
103:     safeLog('     direction only (central allocation machinery cost > platform cost — IDB / low e-government platform costs).');

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npm run e9:fullstack; npm run e10:costs' in C:\devel\claude-projects\distributed-governance-research
 succeeded in 58810ms:

> distributed-governance-research@0.0.0 e9:fullstack
> node scripts/simulation/e4-v5/e9-fullstack.mjs

E9 — FULL STACK: PLANNING, SELECTION and DELIVERY (built on E5, PROBABLE world). Percentages of a global
full-information greedy REFERENCE (a heuristic, not a guaranteed optimum). Recycle residual (primary).

worlds kept: 1000   (10 COFOG sectors; assoc=-0.6, secValSpread=0.184, creditCoef=0.076, agendaCapture=0)
STATUS QUO (all-central):   +30.6% of reference   ·   CORE v0 FULL (all-distributed): +88.0%
FULL-STACK gain (Core v0 − status quo): +57.4%  95% conditional-MC CI [+56.8%, +58.1%]

SHAPLEY attribution — CONDITIONAL: every layer value is computed through the (declared) planning sector
generator, so these are NOT the standalone quantified layers. The standalone SELECTION and DELIVERY figures
come from E5 (no planning layer); E9 supplies the 3-layer STRUCTURE + attribution METHOD, planning qualitative:
  planning +3.2% [+2.9%, +3.4%] · selection +42.9% [+42.3%, +43.5%] · delivery +11.3% [+11.0%, +11.6%]  (sums to the gain)

Named-world decomposition (the full diagonal stays positive everywhere; individual layers can reverse):
   world         full gain   planning   selection   delivery
   PROBABLE        +57.1%     +3.1%     +42.7%    +11.3%
   PRO_CENTRAL     +14.7%     +1.5%      -2.8%    +16.0%
   MYOPIA_OFF      +44.7%     +2.5%     +29.5%    +12.6%
   PRO_DIST       +172.6%     +4.8%    +169.1%     -1.4%
   → SELECTION and DELIVERY are LARGE in PROBABLE; selection reverses in PRO_CENTRAL and delivery in PRO_DIST
     (stronger delivery magnifies harmful portfolios there). The full Core v0 advantage holds in ALL worlds.

Planning as a CONDITIONAL simple effect (distributed − central planning), context-dependent:
  under central selection: +7.1% [+6.6%, +7.7%] · under distributed selection: +0.1% [-0.1%, +0.3%] (Core v0 context)

Planning Shapley over the DECLARED sector-value dispersion by need↔visibility association (the effect is
modest and CONDITIONAL — not a robust large positive layer):
   secValSpread \ assoc   -1.0     -0.6      0.0     +0.6
      0.1                   -0.3%    -0.6%    -1.1%    -1.1%
      0.3                   +4.3%    +3.7%    +2.9%    +2.6%
      0.6                  +16.7%   +14.4%   +13.0%   +13.0%
   → the SOFT credit distortion alone makes planning a small, sign-ambiguous contribution.

Agenda capture (second face of power — central keeps its lowest-perceived COFOG sectors OFF the menu):
   sectors captured   planning Shapley   planning|distributed-sel   full-stack gain
    0/10                +0.7%             -6.0%             +47.8%
    1/10                +2.2%             -3.5%             +48.4%
    2/10                +4.7%             +0.5%             +49.5%
    3/10                +7.9%             +5.3%             +51.4%
   → agenda capture is the DOMINANT planning mechanism, and it is NOT anchorable today (no cited universal
     whole-function-exclusion moment, no worked country example yet), so it is PROPOSED CONTINUATION WORK.

FRAMING (author decision): DO NOT report a planning-layer FIGURE. The soft-only slice above (~0–3%) omits
agenda capture — the mechanism that moves the needle — so it UNDERSTATES the layer; headlining it would read
as "planning is small," which is not what it means. Quantify SELECTION and DELIVERY from E5 (they are LARGE
IN PROBABLE — not "robust": each reverses sign in an extreme world, see the named-world table above, though
the full Core v0 advantage holds in every world); present PLANNING QUALITATIVELY — mechanism identified
(agenda capture / second face of power), DIRECTION anchored (COFOG; election visible-spending shift;
maintenance neglect), MAGNITUDE deferred to country-specific continuation (illustrative, not conclusive).

> distributed-governance-research@0.0.0 e10:costs
> node scripts/simulation/e4-v5/e10-costs.mjs

E10 — the ADMINISTRATIVE-COST layer on the delivered-value stack (PROBABLE world). Percentages of the
full-information greedy REFERENCE. PLANNING is OFF by default; admin cost reduces the BUDGET (net-budget
accounting), charged SYMMETRICALLY across arms.

value base: E5 (planning OFF)   ·   κ_C=0.08 (central allocation/prioritization/study machinery) · κ_D=0.05 (Core v0 platform + its control machinery)  [magnitude DECLARED]
VALUE ONLY (costs off):   status quo +34.5% · Core v0 +93.1%  → gain +58.6%
WITH ADMIN COSTS (net budget): status quo +33.9% · Core v0 +91.6%  → gain +57.7%
  admin-cost effect on the gap: -0.9% (points of the reference).

  → Under symmetric net-budget accounting the admin-cost layer is roughly NEUTRAL (small, and can go either
    way): because greedy funding cuts marginal low-value projects first, the value loss is sub-proportional,
    and Core v0 delivers on a larger base. The Core v0 advantage comes from SELECTION and DELIVERY, NOT from
    an admin-cost saving. A decisive cost advantage would need κ_C ≫ κ_D beyond what symmetric accounting supports.

switch check — costs OFF (κ=0): with-costs gain +58.6% == value-only gain +58.6% (reduces to the value stack).

Admin-cost sensitivity (κ_D=0.05 fixed; κ_C swept — magnitude DECLARED):
   κ_C     admin-cost effect on the gap (points of reference)
   0.05        -1.1%
   0.08        -0.9%
   0.15        -0.1%
   0.30        +2.3%
   → the admin-cost effect is small and only turns clearly positive at large κ_C; magnitudes DECLARED,
     direction only (central allocation machinery cost > platform cost — IDB / low e-government platform costs).

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command '$names = @('"'IMF','Björkman','Svensson 2009','Molina','Avis','Drazen','Eslava','Rioja','IDB','KONEPS','ChileCompra','ProZorro','COFOG','OECD','Errázuriz','Golden','Vergne','Katsimi','Sarantides'); foreach ("'$n in $names) { $hits = Select-String -LiteralPath '"'drafts/paper.md' -Pattern "'$n -CaseSensitive:$false; "$n`t$($hits.Count)`t$((($hits | ForEach-Object {$_.LineNumber}) -join '"','))\" }" in C:\devel\claude-projects\distributed-governance-research
 succeeded in 198ms:
IMF	1	918
Björkman	1	948
Svensson 2009	1	948
Molina	1	948
Avis	1	954
Drazen	1	1078
Eslava	1	1078
Rioja	1	1079
IDB	1	1105
KONEPS	1	1105
ChileCompra	1	1106
ProZorro	1	1106
COFOG	2	1060,1077
OECD	1	1084
Errázuriz	0	
Golden	0	
Vergne	0	
Katsimi	0	
Sarantides	0	

2026-07-13T22:04:24.532653Z ERROR codex_core::tools::router: error=Exit code: 124
Wall time: 64 seconds
Output:
command timed out after 64029 milliseconds

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command 'npm run e5:delivery' in C:\devel\claude-projects\distributed-governance-research
codex
The manuscript and current simulations agree on the settled headline: E5 +58.6 points with the conditional interval; E9’s full diagonal stays positive while selection reverses in the central-favourable world and delivery reverses in the distributed extreme; E10 contributes −0.9 point at the declared shares, hence “roughly neutral.” The remaining work is prose reconciliation and missing-source/limitation coverage, not scientific revision.
 succeeded in 83649ms:

> distributed-governance-research@0.0.0 e5:delivery
> node scripts/simulation/e4-v5/e5-delivery.mjs

E5 — delivered value: SELECTION-by-DELIVERY (four-cell design on the clean E4 engine, PROBABLE world).
Parity at the oracle reference (perfect-delivery full-information greedy). No compound multiplier; layers reported separately.

worlds kept: 1200
SELECTION efficiency (perfect delivery, = E4):  central +44.1% · distributed +98.2%
DELIVERY efficiency (delivered/selected):        opaque +78.2% · verified +94.8%

Four-cell delivered value as a fraction of the oracle reference:
                       opaque delivery     verified delivery
  central selection    S   +34.5%          A1  +41.8%
  distributed sel.     A3  +76.4%          A2  +93.1%

diversion incidence (unweighted share of funded projects):     opaque +21.9% · verified +2.1%
value leakage (S-weighted undelivered value; MOMENT-MATCHED to Olken's expenditure loss, NOT identified as welfare):   opaque +21.8% · verified +5.2%

Main effects (pp of the oracle reference) with 95% CONDITIONAL Monte-Carlo intervals (inner simulation
variability only — world, model-form and calibration uncertainty are NOT included), read SEPARATELY:
  DELIVERY effect:   at central +7.3% [+7.0%, +7.7%] · at distributed +16.7% [+16.4%, +17.0%]
  SELECTION effect:  at opaque +41.9% [+41.3%, +42.5%] · at verified +51.3% [+50.6%, +51.9%]
  INTERACTION:       +9.4% [+9.1%, +9.6%]  (>0 ⇒ verified delivery amplifies the selection gain)
  FULL architecture (A2 − S): +58.6%  95% conditional-MC CI [+58.0%, +59.2%]

Composition — the two layers compose MULTIPLICATIVELY (an accounting identity, delivery applied per project):
  actual A2 = +93.1%  ·  identity (selection · delivery) = +93.1%
  additive prediction (sum of main effects) = +83.7%  → short by the interaction.
  The positive interaction is the level-effect signature of multiplicative composition.

Monitoring coupling (step 2) — distributed coverage fiscalizes delivery via DETECTION only (mon_detect=0.05, recovery=0 community-only):
  delivered fraction, distributed − central:  opaque -0.2% · verified +0.0% (saturated)
  weak-control cell A3 rises +76.4% → +76.5% — SMALL: community detection without institutional recovery barely helps a weak-control regime.
  detection-band sweep (opaque monitoring dividend):
     mon_detect 0.00  →  dividend(opaque) -0.3%  ·  A3 +76.4%
     mon_detect 0.05  →  dividend(opaque) -0.2%  ·  A3 +76.5%
     mon_detect 0.10  →  dividend(opaque) -0.0%  ·  A3 +76.7%
  with institutional recovery linkage (mon_recovery=0.20): opaque dividend +3.4% — the delivery gain needs the FORMAL recovery channel, not eyeballs alone.

R=0 robustness (no reputational stake): verified delivery +94.3%, verified diversion incidence +7.1%, full +58.1% 95% CI [+57.6%, +58.7%] — the gain survives without the (unanchored) reputation term.

Opaque-band sensitivity (delivery effect and full-architecture gain as the status-quo leak worsens):
   leak(opaque)   delivery-effect@distributed   full (A2−S)
     +24.3%           +18.8%                  +59.6%
     +28.3%           +22.8%                  +61.3%
     +40.6%           +34.5%                  +66.6%
     +56.6%           +50.2%                  +73.5%
     +68.7%           +61.9%                  +78.7%
   → coverage still wins across the whole band; a worse status quo only widens the delivery gain.

Cost/complexity-correlated delivery risk (bigger projects harder to monitor; cost ⟂ value S in the engine):
   val_risk 0.0  →  opaque delivery central +78.0% · distributed +77.8% (arm gap -0.2%)  ·  full +58.6%
   val_risk 0.3  →  opaque delivery central +78.0% · distributed +77.8% (arm gap -0.2%)  ·  full +58.4%
   val_risk 0.6  →  opaque delivery central +78.0% · distributed +77.8% (arm gap -0.2%)  ·  full +58.1%
   → under c ⟂ S the arm gap stays ~0, so coverage is NOT systematically undone by cost/size delivery risk.

20-seed replication of the full gain: mean +58.8% · sd +0.4% · range [+58.0%, +59.5%].
Joint LHS sweep (64 draws, CONDITIONAL on the PROBABLE world; non-overlapping regime ranges): full gain median +59.3%, range [+52.3%, +66.2%];
   full architecture wins in 100% and the coverage/selection effect (A3−S) is positive in 100% of the sampled draws.

exec
"C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe" -Command "Select-String -LiteralPath 'drafts/paper.md','drafts/paper.es.md' -Pattern 'multiplier|multiplicador|ratio|cociente|×|fold|veces|N-fold|D-C|x/' -CaseSensitive:"'$false | ForEach-Object { '"'{0}:{1}: {2}' -f "'$_.Path, $_.LineNumber, $_.Line.Trim() }' in C:\devel\claude-projects\distributed-governance-research
 succeeded in 205ms:
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:3: **Working paper — v1.14 (July 2026; latest deposited version: v1.12, DOI 10.5281/zenodo.21252911). This version retires the earlier compound value-per-budget multiplier as a calibrated effect — a pre-registered symmetric selection-only stress test returned NO-GO (see §6 and the claim & estimand contract) — and rests on the architecture and the qualitative mechanism, now sharpened by a four-scenario robustness map (E4 v1.14): modelling the central as the evidence *directionally* describes it — near-blind to diffuse harm on the low-visibility long tail (Hayek, Scott, Olson, Bandiera–Prat–Valletti) — coverage-routed selection recovers decisively more of the model's full-information reference (~98% vs ~44%) and robustly; the pre-registered gate remains the separate confirmatory result (a NO-GO under a different data-generating process), the central overtakes coverage only by abandoning the declared premises, and the mirror idealization of the distributed arm wins by a landslide; all such magnitudes are declared reference points from a stylized comparative-institutions model, a conditional model contrast, not calibrated impact. Revised through successive adversarial and author review cycles, documented in the repository's roadmap. It consolidates the companion computational program (Offermann 2026b): the deterrence-complementarity rule, the semi-open transition path, the budget-release rule, and machine verification with the human second instance; and the companion's two-layer separation of the macro categorization from the allocation profiles, under which the distributed arm is robust to a bad central categorization while the central arm is fragile to it.**
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:13: Its animating idea is a **credit-versus-coverage** mechanism: when central ranking rewards claimable political credit, it can systematically underweight the diffuse, low-visibility benefits that a coverage-based distributed process still surfaces, albeit under voice bias. We held this idea to a deliberately hostile test — a pre-registered, symmetric simulation that stripped out the favorable asymmetries an earlier version had relied on, plus a public adversarial review of 43 attacks across five rounds, each integrated into the design or recorded as a bounded limitation. The distributed advantage was positive in all 18 pre-specified cells but small (pooled median Δ = 0.025 of a full-information greedy benchmark, below our pre-set 0.05 threshold); we therefore retire the large multiplier an earlier version reported and state the modest, conditional result plainly. A four-scenario robustness extension then models the central selector as the evidence describes it — its *direction* on every axis grounded in the literature (not its magnitude fitted): near-blind to diffuse harm on the low-visibility long tail (Hayek 1945; Scott 1998; Olson 1965; Bandiera–Prat–Valletti 2009), projecting its own priors and over-rating visible benefits (Broockman–Skovron 2018; Flyvbjerg et al. 2003), and credit-tilted (Mayhew 1974; Arnold 1990). In that **source-motivated declared reference scenario** — not an empirical calibration — coverage-routed distributed selection recovers about 98% of the model's full-information greedy reference against the central's ~44%: a 54-point conditional model contrast, robust across the declared space and the realistic degradation of Core v0's universal budget *routing* (routing is architectural; effective independent information is not). The central overtakes coverage only by abandoning the declared premises (granting it the harm-sight the literature denies it) on a near-harmless world, while the *mirror* idealization of the distributed arm wins by a landslide. These are declared reference points from a stylized comparative-institutions model, not calibrated field effects; the pre-registered gate remains the separate confirmatory result (a NO-GO under a different data-generating process), and the one sensitivity that materially shrinks the gap — never its sign in the declared range — is correlated/common-mode error in the coverage arm. Elementary propositions give sufficient conditions for incentive-compatible disbursement and collusion-proof fiscalization under independence and corroboration assumptions.
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:105: k-corroboration; and we prove two design-relevant comparative statics: weak
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:113: behavioral assumptions under rational ignorance, limited discovery
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:122: compound value-per-budget ratio against a status-quo baseline parameterized from
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:130: and harm-myopia regimes—not the multiplier.
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:194: **Polycentric governance.** Ostrom's demonstration that common-pool
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:233: programs distribute deliberation and empowerment; this one distributes
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:238: between direct and representative participation, at the cost of concentration
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:240: scoped, revocable, non-compensated delegation with mandatory concentration
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:242: it — treats delegate concentration as a monitored risk with stress
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:259: and Weyl 2019), which prices concentration through matching-fund curvature;
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:260: Core v0's funding-target closure rule pursues the same anti-concentration
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:332: instrument that authorized the migration, its legal rank, the organ to which
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:334: external authorization; it does not manufacture it. Binding-mode operation is
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:336: disclosed lawful default is consultative or tutored operation. The allocation act is designed to replicate two guarantees of the vote: secrecy of the preference and coercion-resistance (receipt-freeness). To the extent an enabling norm recognizes it, it can be shielded with protections equivalent to the vote's; until then, these are technical platform guarantees, not a legal status. Individual allocations are pseudonymous at the public layer
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:373: scoped, revocable delegation with concentration visibility. The architecture
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:421: independence, and corroboration.
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:449: margin in its operating configuration, recomputed on every term change, with
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:484: - ***Corroboration substitutes for reputation capital.*** The required stake
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:503: projects is negligible, so rational ignorance is the equilibrium (Downs
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:524: | E5 | delivered value: selection × delivery, at matched budget | Finding 5 |
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:528: | E9 | the full stack: planning × selection × delivery (Shapley attribution) | Finding 9 |
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:536: respectively — and 3× scarcity (only a minority of projects can
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:545: **Status of the earlier compound ratios (retired).** An earlier version reported a
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:546: single compound value-per-budget ratio against three baselines (a zero control, E5; an
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:554: without conflation and, in the cost-and-corruption extension, anchored to real
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:563: pre-registered **0.05 research-program rebuild gate**; a **post-hoc** ratio-of-sums estimate is
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:564: **Δ = 0.026, with a 95% world-cluster Monte-Carlo interval [0.023, 0.029]**
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:566: multiplier is therefore **not** claimed as a calibrated effect. This is a stylized
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:573: [claim-and-estimand-contract](../research/claim-and-estimand-contract.md); the test,
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:574: its frozen pre-registration, results, and diagnostics are
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:578: regimes—not a point multiplier or calibrated impact.
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:590: model contrast**, not an empirical calibration or a field effect (the reference is a
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:606: Core v0 therefore treats delegate, profile-provider, and recommender concentration as
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:615: **Finding 1: funding caps are an anti-concentration device, not a quality
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:616: device.** With closure ON, concentration falls (funding Gini 0.732 vs
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:629: configurations (≈ 0.35–0.43). Raising citizen attention from 2% to
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:661: degrades, not a calibrated multiplier; see the quantitative-status note in this
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:774: (voice inequality). The result is not a multiplier but a frontier with a
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:819: independent multipliers. Every magnitude here is model-internal; the literature
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:843: term k_d; the resistance ratio ρ(C) = (k_d·C + p_d·f)/(k_c + p_c·f) ≈ 6 to 10 in the
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:890: *Calibration.* The magnitudes are model-internal, but the gap to data is a
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:893: direct check: the ex-post realized-to-appraised ratio (the World Bank's Independent
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:903: any magnitude the model reports. The calibration-targets appendix makes the
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:927: multiplier is reported. Selection efficiency reproduces E4 (distributed
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:934: value × delivered fraction, applied per project), of which the positive
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:938: inner simulation variability only — world, model-form, and calibration
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:940: single compound value-per-budget multiplier; that compound is **retired**,
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:952: reputational stake): a grand-corruption temptation tail keeps a residual
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:987: algorithmic — needs the concentration observability, entrant floors, and
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:990: with concentration visible by construction — and it never excludes: no
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:996: baseline is a caricature — real administrations run audit institutions,
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:1044: of awareness, registration, participation modes, and trusted
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:1050: participation — which costs 1.7% of the ratio, because the default layer
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:1060: distributed across a 2×2×2 of persistent sectors (ten, the COFOG count). A
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:1083: is not yet anchorable. A country-grounded illustration — Chile's
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:1087: a calibration.
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:1124: value-per-budget ratio an earlier version reported is retired here as a calibrated
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:1149: vacuum, rational ignorance, cascades, clientelism, polarization,
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:1157: tutored operation — both since resolved and propagated. The fourth round
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:1162: now resolved — the zero-control baseline as a calibration strawman
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:1251: budget migration and allocation formulas (the Allocation Mandate); it
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:1271: given and improves its administration; the libertarian challenge to the
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:1280: mid-cycle share cuts all become public data — but no software compels a
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:1300: profile-provider, and recommender concentration as observable quantities and
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:1345: [claim-and-estimand-contract](../research/claim-and-estimand-contract.md)).
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:1355: attack, calibration to empirical PB data, and a bounded tutored pilot
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:1369: calibration, and a bounded pilot (§8). What follows is the pathway for an
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:1378: context — the configuration under which exposing instruments have
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:1395: upward — an earlier-apparatus contrast now subject to the retired-multiplier
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:1417: controls as the calibration and drift-detection instrument, auditing the
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:1424: benchmarks, duration bands, thresholds) let a strict verifier judge rather
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:1449: operational — and a disciplined account of exactly how far its evidence
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:1474: the declared premises. We therefore retire the compound multiplier an earlier version
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:1478: about the delivery layer, not the multiplier: in the model, at E7's
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:1486: The deeper point is Friedman's: a central administration spends other
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:1573: pause guard (no hidden asymmetry flagged). A **post-hoc** world-cluster
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:1574: ratio-of-sums estimate was Δ = 0.026 [0.023, 0.029] (Monte-Carlo uncertainty on the
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:1578: multiplier is retired and the paper rests on the architecture and the mechanism
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:1600: Samuelson and Zeckhauser 1988). Full literature anchoring of every calibration knob is
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:1601: in `research/e4-calibration-literature-anchors.md`. Scoring delivery on true value,
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:1659: `research/e4-calibration-literature-anchors.md`.
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:1661: ### E4 calibration targets
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:1666: `research/e4-calibration-targets.md`). The central %-benchmark is an *output* the
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:1667: model computes, but mapping it to observed realized-to-appraised ratios is **not a
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:1670: calibration.
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:1691: - Austen-Smith, D., and J. Banks (1996). "Information Aggregation, Rationality, and the Condorcet Jury Theorem." *American Political Science Review* 90(1).
C:\devel\claude-projects\distributed-governance-research\drafts\paper.md:1774: - Wampler, B. (2007). *Participatory Budgeting in Brazil: Contestation, Cooperation, and Accountability*. Penn State University Press.
C:\devel\claude-projects\distributed-governance-research\drafts\paper.es.md:3: **Working paper — v1.14 (julio de 2026; última versión depositada: v1.12, DOI 10.5281/zenodo.21252911). Esta versión retira el multiplicador compuesto de valor por peso como efecto calibrado —una prueba de estrés pre-registrada, simétrica y solo-de-selección, dio NO-GO (véase §6 y el contrato de afirmación y estimando)— y se apoya en la arquitectura y el mecanismo cualitativo, ahora afinada por un mapa de robustez de cuatro escenarios (E4 v1.14): modelando al central como lo describe *direccionalmente* la evidencia —casi ciego al daño difuso en la cola larga de baja visibilidad (Hayek, Scott, Olson, Bandiera–Prat–Valletti)— la selección por cobertura recupera decisivamente más de la referencia de información completa del modelo (~98% frente a ~44%) y de forma robusta; el gate pre-registrado sigue siendo el resultado confirmatorio separado (un NO-GO bajo un proceso generador distinto), el central solo supera a la cobertura abandonando los supuestos declarados, y la idealización espejo del brazo distribuido gana por goleada; todas esas magnitudes son puntos de referencia declarados de un modelo estilizado de instituciones comparadas, un contraste de modelo condicional, no impacto calibrado. Consolida el programa computacional complementario (Offermann 2026b): la regla de complementariedad de la disuasión, la curva de transición semi-abierta, la regla de liberación presupuestaria y la verificación por máquina con segunda instancia humana; y la separación en dos capas del artículo compañero entre la categorización macro y los perfiles de asignación, bajo la cual el brazo distribuido es robusto a una mala categorización central mientras que el brazo central es frágil ante ella. Revisado a través de ciclos sucesivos de revisión adversarial y de autor, documentados en la hoja de ruta del repositorio.**
C:\devel\claude-projects\distributed-governance-research\drafts\paper.es.md:15: Su idea animadora es un mecanismo de **crédito versus cobertura**: cuando el ordenamiento central premia el crédito político reclamable, puede subponderar sistemáticamente los beneficios difusos y de baja visibilidad que un proceso distribuido basado en cobertura todavía logra visibilizar, aunque bajo sesgo de voz. Sometimos esta idea a un test deliberadamente hostil: una simulación pre-registrada y simétrica que eliminó las asimetrías favorables en que se había apoyado una versión anterior, más una revisión adversarial pública de 43 ataques a lo largo de cinco rondas, cada uno integrado al diseño o registrado como una limitación acotada. La ventaja distribuida fue positiva en las 18 celdas pre-especificadas pero pequeña (mediana agrupada Δ = 0.025 de un benchmark voraz de información completa, por debajo de nuestro umbral prefijado de 0.05); por lo tanto retiramos el gran multiplicador que reportó una versión anterior y enunciamos el resultado modesto y condicional con franqueza. Una extensión de robustez de cuatro escenarios modela luego al selector central como lo describe la evidencia —su *dirección* en cada eje anclada en la literatura (no su magnitud ajustada): casi ciego al daño difuso en la cola larga de baja visibilidad (Hayek 1945; Scott 1998; Olson 1965; Bandiera–Prat–Valletti 2009), proyectando sus propios priores y sobreestimando beneficios visibles (Broockman–Skovron 2018; Flyvbjerg et al. 2003), y ladeado hacia el crédito (Mayhew 1974; Arnold 1990). En ese **escenario de referencia declarado y motivado por fuentes** —no una calibración empírica— la selección distribuida basada en cobertura recupera cerca del 98% de la referencia voraz de información completa del modelo frente al ~44% del central: un contraste de modelo condicional de 54 puntos, robusto en todo el espacio declarado y ante la degradación realista del *ruteo* presupuestario universal de Core v0 (el ruteo es arquitectónico; la información independiente efectiva no lo es). El central supera a la cobertura solo abandonando los supuestos declarados (otorgándole la visión del daño que la literatura le niega) en un mundo casi sin daño, mientras la idealización *espejo* del brazo distribuido gana por goleada. Estas son magnitudes de referencia declaradas de un modelo estilizado de instituciones comparadas, no efectos de campo calibrados; el gate pre-registrado sigue siendo el resultado confirmatorio separado (un NO-GO bajo un proceso generador distinto), y la única sensibilidad que reduce materialmente la brecha —nunca su signo en el rango declarado— es el error correlado/de modo común en el brazo de cobertura. Proposiciones elementales dan condiciones suficientes para el desembolso por hitos compatible en incentivos y para la resistencia a la colusión de la fiscalización protocolizada, bajo supuestos de independencia y corroboración.
C:\devel\claude-projects\distributed-governance-research\drafts\paper.es.md:139: no el multiplicador.
C:\devel\claude-projects\distributed-governance-research\drafts\paper.es.md:571: | E5 | valor entregado: selección × entrega, a presupuesto igualado | Hallazgo 5 |
C:\devel\claude-projects\distributed-governance-research\drafts\paper.es.md:575: | E9 | el stack completo: planificación × selección × entrega (atribución de Shapley) | Hallazgo 9 |
C:\devel\claude-projects\distributed-governance-research\drafts\paper.es.md:583: respectivamente— y escasez de 3× (solo una minoría de proyectos puede
C:\devel\claude-projects\distributed-governance-research\drafts\paper.es.md:593: **Estado de los cocientes compuestos anteriores (retirados).** Una versión anterior
C:\devel\claude-projects\distributed-governance-research\drafts\paper.es.md:594: reportó un único cociente compuesto de valor por unidad de presupuesto frente a tres
C:\devel\claude-projects\distributed-governance-research\drafts\paper.es.md:613: programa de investigación** pre-registrado de **0.05**; una estimación **post-hoc** de ratio-of-sums es
C:\devel\claude-projects\distributed-governance-research\drafts\paper.es.md:616: multiplicador compuesto, por lo tanto, **no** se reclama como efecto calibrado. Esta
C:\devel\claude-projects\distributed-governance-research\drafts\paper.es.md:623: [claim-and-estimand-contract](../research/claim-and-estimand-contract.md); la prueba,
C:\devel\claude-projects\distributed-governance-research\drafts\paper.es.md:628: miopía y con miopía al daño, no un multiplicador puntual ni impacto calibrado.
C:\devel\claude-projects\distributed-governance-research\drafts\paper.es.md:717: multiplicador calibrado; véase la nota de estado cuantitativo en esta sección).
C:\devel\claude-projects\distributed-governance-research\drafts\paper.es.md:835: resultado no es un multiplicador sino una frontera con un lugar de paridad en
C:\devel\claude-projects\distributed-governance-research\drafts\paper.es.md:869: de diez veces más alto (forma cerrada ρ(C) en la nota del backbone). La
C:\devel\claude-projects\distributed-governance-research\drafts\paper.es.md:882: multiplicadores independientes. Toda magnitud aquí es interna al modelo; la
C:\devel\claude-projects\distributed-governance-research\drafts\paper.es.md:998: modo que no se reporta multiplicador compuesto. La eficiencia de selección
C:\devel\claude-projects\distributed-governance-research\drafts\paper.es.md:1005: identidad contable (valor entregado = valor seleccionado × fracción
C:\devel\claude-projects\distributed-governance-research\drafts\paper.es.md:1012: como un único multiplicador compuesto de valor por presupuesto; ese compuesto
C:\devel\claude-projects\distributed-governance-research\drafts\paper.es.md:1128: del cociente, porque la capa por defecto ancla por construcción los ciclos
C:\devel\claude-projects\distributed-governance-research\drafts\paper.es.md:1138: capas se comparan central versus distribuido en un 2×2×2 de sectores
C:\devel\claude-projects\distributed-governance-research\drafts\paper.es.md:1207: sí visibiliza; (3) todo cociente compuesto de valor-por-presupuesto que reportó una
C:\devel\claude-projects\distributed-governance-research\drafts\paper.es.md:1431: [claim-and-estimand-contract](../research/claim-and-estimand-contract.md)).
C:\devel\claude-projects\distributed-governance-research\drafts\paper.es.md:1482: del aparato anterior, ahora sujeto a la salvedad del multiplicador retirado
C:\devel\claude-projects\distributed-governance-research\drafts\paper.es.md:1563: tanto retiramos el multiplicador compuesto que reportó una versión anterior y nos
C:\devel\claude-projects\distributed-governance-research\drafts\paper.es.md:1567: porque trata de la capa de entrega, no del multiplicador: en el modelo, a la
C:\devel\claude-projects\distributed-governance-research\drafts\paper.es.md:1669: Una estimación **post-hoc** de ratio-of-sums por conglomerado-de-mundos fue
C:\devel\claude-projects\distributed-governance-research\drafts\paper.es.md:1673: crédito-versus-cobertura— pero es pequeña, razón por la cual el multiplicador
C:\devel\claude-projects\distributed-governance-research\drafts\paper.es.md:1697: literario completo de cada perilla está en `research/e4-calibration-literature-anchors.md`.
C:\devel\claude-projects\distributed-governance-research\drafts\paper.es.md:1758: `research/e4-calibration-literature-anchors.md`.
C:\devel\claude-projects\distributed-governance-research\drafts\paper.es.md:1765: enterrado en prosa (detalles en `research/e4-calibration-targets.md`). El
C:\devel\claude-projects\distributed-governance-research\drafts\paper.es.md:1791: - Austen-Smith, D., and J. Banks (1996). "Information Aggregation, Rationality, and the Condorcet Jury Theorem." *American Political Science Review* 90(1).
C:\devel\claude-projects\distributed-governance-research\drafts\paper.es.md:1874: - Wampler, B. (2007). *Participatory Budgeting in Brazil: Contestation, Cooperation, and Accountability*. Penn State University Press.

2026-07-13T22:07:32.032832Z ERROR codex_core::tools::router: error=timeout_ms must be at least 10000
collab: Wait
All four panel roles completed; manuscripts, design records, and current E5/E9/E10 outputs were reconciled. No files were edited.
  ✓ Read routing instructions and all authoritative manuscript/design files
  ✓ Run four expert roles in parallel
  ✓ Cross-check EN/ES claims, numbers, numbering, and references
  ✓ Synthesize prioritized verbatim edits and readiness verdict
codex
Verdict: the results are honestly framed, but the manuscript is not yet prose-publication-ready. The main blockers are stale E5 prose, absent E5/E9/E10 coverage in the abstract/limitations/summary, a wrong E9 sign explanation, an outdated Chile sentence, missing references, and stale public design records. The English and Spanish findings themselves are substantively aligned.

## 1. Classical-liberal intellectual

The strongest framing is functional constitutionalism: Hayek supplies the knowledge problem, Friedman the agency problem, and Buchanan the rule-design problem. Core v0 preserves public authorization while refusing to fuse selection, spending, evidence, and judgment.

Highest-impact drop-ins:

1. After [paper.md:54](C:/devel/claude-projects/distributed-governance-research/drafts/paper.md:54), mirrored after [paper.es.md:58](C:/devel/claude-projects/distributed-governance-research/drafts/paper.es.md:58):

   > Hayek supplies the knowledge problem, Friedman the agency problem, and Buchanan the constitutional question; Core v0 joins them in a single design rule: separate the hand that chooses, the hand that spends, and the hand that certifies.

2. Replace the Finding 5 heading at [paper.md:906](C:/devel/claude-projects/distributed-governance-research/drafts/paper.md:906):

   > **Finding 5: selection determines what value enters the pipeline; delivery determines how much reaches the public — and the two margins compose multiplicatively.**

3. After the E5 design paragraph at [paper.md:923](C:/devel/claude-projects/distributed-governance-research/drafts/paper.md:923):

   > This is the delivery-side complement to credit versus coverage: dispersed information can improve the portfolio, but only independent verification and recovery can convert that informational advantage into delivered value.

4. After the monitoring result at [paper.md:949](C:/devel/claude-projects/distributed-governance-research/drafts/paper.md:949):

   > In the model, community eyes can help reveal a leak; the material delivery gain arrives only when formal recovery makes the leak costly.

5. Replace the Finding 9 heading at [paper.md:1055](C:/devel/claude-projects/distributed-governance-research/drafts/paper.md:1055):

   > **Finding 9: the full stack remains ahead in every named world, but its layer attributions are conditional.**

6. Follow that heading with:

   > Shapley accounting assigns the modeled gap among layers so that the pieces sum to the whole; it does not turn those assignments into standalone or universal effects.

7. Replace the planning core at [paper.md:1074](C:/devel/claude-projects/distributed-governance-research/drafts/paper.md:1074):

   > Planning is power over the menu, not merely over the ranking. Its dominant mechanism is agenda capture — keeping high-need, low-visibility functions outside the eligibility frame — but because the magnitude of that mechanism requires country-specific budget data, this paper anchors its direction and leaves its size unquantified.

8. Replace the Finding 10 heading at [paper.md:1089](C:/devel/claude-projects/distributed-governance-research/drafts/paper.md:1089):

   > **Finding 10: symmetric net-budget accounting leaves administrative cost roughly neutral — the architecture’s advantage lies in what is selected and what is actually delivered, not in an overhead dividend.**

9. Near the conclusion, before [paper.md:1514](C:/devel/claude-projects/distributed-governance-research/drafts/paper.md:1514):

   > Core v0 does not assume a wiser hand; it refuses to let any one hand choose, spend, and certify without independent correction.

10. Final credit-versus-coverage line:

   > Credit pressure favors what is visible and claimable; coverage widens the field of what can count, while verification determines whether what counts ever arrives.

## 2. Science communicator / editor

### Priority rewrites

1. Finding 5 presently opposes delivery to allocation even though selection is the larger modeled contributor.

   Before, [paper.md:906](C:/devel/claude-projects/distributed-governance-research/drafts/paper.md:906):

   > delivered value, not allocation, is where the architecture earns its keep

   After:

   > **Finding 5: delivered value is produced in two stages — selecting valuable projects and making them deliver — and the stages multiply.**

   Spanish:

   > **Hallazgo 5: el valor entregado se produce en dos etapas —elegir proyectos valiosos y lograr que se ejecuten como se prometió— y ambas etapas se multiplican.**

2. Simplify the E5 methods paragraph at [paper.md:908](C:/devel/claude-projects/distributed-governance-research/drafts/paper.md:908):

   > E5 adds execution to E4 by crossing two selection regimes — central and distributed — with two delivery regimes — opaque and verified — in a matched four-cell design. Within each selection arm, both delivery regimes are applied to the same funded portfolio with matched executor draws. Opportunistic executors divert when temptation exceeds the Proposition 1 deterrent created by detection, restrained advances, recovery, guarantees, and reputation. These are declared reference magnitudes with evidence-backed directions, not field-effect estimates.

   The repeated formula can remain in §5 or move to a short parenthesis.

3. Rewrite the result paragraph at [paper.md:925](C:/devel/claude-projects/distributed-governance-research/drafts/paper.md:925):

   > All four cells are percentages of a common full-information greedy reference at perfect delivery; that reference is a heuristic normalizer, not an optimum. Central and distributed selection reach approximately 44% and 98% of the reference, while opaque and verified delivery preserve approximately 78% and 95% of selected value. The effects are larger together because better delivery preserves more value after a more valuable portfolio has been selected. This multiplication is an accounting identity, not an independently discovered synergy. The full selection-and-delivery architecture exceeds the status quo by approximately 58.6 reference points, with a 95% conditional Monte Carlo interval of [+58.0, +59.2].

4. Split the monitoring paragraph at [paper.md:943](C:/devel/claude-projects/distributed-governance-research/drafts/paper.md:943):

   > Community observation and institutional recovery do different jobs. Coverage can raise detection, but it cannot claw back funds or impose consequences; by itself it adds only a fraction of a point in the weak-control regime. The sizeable delivery gain appears when detection is joined to the verified regime’s formal recovery channel.
   >
   > Strong control still does not eliminate diversion. Verified delivery leaves a low but nonzero residual — about 2% incidence, rising to about 7% without the reputational stake. The joint sensitivity evidence is conditional on the declared PROBABLE world.

5. Explain Shapley in ordinary language:

   > A Shapley value asks how much a layer adds on average when introduced first, second, or third. The three averages sum exactly to the total gap, but they inherit the assumptions of the world in which they were calculated; they are not three independent experiments.

6. Explain net-budget cost similarly:

   > Net-budget accounting first makes each institution pay for its own machinery, then lets it fund projects with what remains. “Symmetric” means the same rule applies to both arms, including Core v0’s verification and recovery costs.

Quotable lines:

- “Choosing well creates potential value; verified delivery determines whether it reaches the public.”
- “Coverage can spot a leak; only institutions can recover the money and enforce the consequence.”
- “A Shapley value is an accounting rule, not a standalone experiment.”
- “The full stack is more stable than any single-layer story.”
- “Administrative cost does not explain the modeled advantage; delivered value does.”

## 3. Consistency / completeness auditor

These are the principal manuscript defects, ranked by severity.

1. **Obsolete E5 status block.** [paper.md:545](C:/devel/claude-projects/distributed-governance-research/drafts/paper.md:545) and [paper.es.md:593](C:/devel/claude-projects/distributed-governance-research/drafts/paper.es.md:593) still say E5 is a default-off selection/cost/leakage wrapper that reduces to E4. That directly contradicts rebuilt Finding 5.

2. **Abstract omission.** [paper.md:7](C:/devel/claude-projects/distributed-governance-research/drafts/paper.md:7) and [paper.es.md:9](C:/devel/claude-projects/distributed-governance-research/drafts/paper.es.md:9) contain no E5/E9/E10 result. The sentence “do not identify delivery effects” at EN line 15/ES line 17 now sounds as if E5 does not exist; it should say “do not identify target-domain treatment effects.”

3. **Introduction omission.** Contribution 3 at [paper.md:111](C:/devel/claude-projects/distributed-governance-research/drafts/paper.md:111) and [paper.es.md:117](C:/devel/claude-projects/distributed-governance-research/drafts/paper.es.md:117) still centers the retired compound and does not report the new layered findings.

4. **Missing Finding 8.** [paper.md:516](C:/devel/claude-projects/distributed-governance-research/drafts/paper.md:516) says each E1–E10 experiment corresponds to a finding, but the manuscript jumps from Finding 7 to Finding 9. E8 at EN 1039/ES 1117 needs a heading or the table claim must change.

5. **Embargo-sensitive E8 relic.** [paper.md:1050](C:/devel/claude-projects/distributed-governance-research/drafts/paper.md:1050) and [paper.es.md:1128](C:/devel/claude-projects/distributed-governance-research/drafts/paper.es.md:1128) still report “1.7% of the ratio” from the retired apparatus. Remove it or express an admissible reference-point estimand.

6. **E5 risk label is wrong.** [paper.md:956](C:/devel/claude-projects/distributed-governance-research/drafts/paper.md:956) and [paper.es.md:1029](C:/devel/claude-projects/distributed-governance-research/drafts/paper.es.md:1029) say “value/complexity-correlated delivery risk.” The implemented check is cost/size-correlated risk under cost independent of value.

7. **E9 overgeneralizes “large.”** [paper.md:1067](C:/devel/claude-projects/distributed-governance-research/drafts/paper.md:1067) and [paper.es.md:1146](C:/devel/claude-projects/distributed-governance-research/drafts/paper.es.md:1146) should say selection and delivery are large in PROBABLE. Planning is not a large quantified layer.

8. **E9 sign explanation is backward.** [paper.md:1071](C:/devel/claude-projects/distributed-governance-research/drafts/paper.md:1071) and [paper.es.md:1150](C:/devel/claude-projects/distributed-governance-research/drafts/paper.es.md:1150) attribute the selection reversal to nearly random central selection. The current experiment shows selection turning negative in PRO_CENTRAL; delivery turns negative in PRO_DIST because stronger delivery magnifies a harmful portfolio.

9. **Planning terminology needs reconciliation.** [paper.md:654](C:/devel/claude-projects/distributed-governance-research/drafts/paper.md:654) says the macro Planning Scope carries no budget weights, while [paper.md:1058](C:/devel/claude-projects/distributed-governance-research/drafts/paper.md:1058) defines E9 planning partly through sector budget shares. Distinguish cross-sector envelope shares from within-scope project weights. Also clarify that E9’s all-distributed planning arm is a modeled open-mode endpoint; §2 correctly says planning construction remains unresolved in transition modes.

10. **Ambiguous “full architecture.”** E5 at [paper.md:936](C:/devel/claude-projects/distributed-governance-research/drafts/paper.md:936) calls the selection-and-delivery corner “the full architecture,” while E9 later introduces the “full stack.” Use “full selection-and-delivery architecture” for E5 and reserve “full-stack diagonal” for E9.

11. **Chile illustration is stale and under-cited.** [paper.md:1083](C:/devel/claude-projects/distributed-governance-research/drafts/paper.md:1083) and [paper.es.md:1163](C:/devel/claude-projects/distributed-governance-research/drafts/paper.es.md:1163) use “held near 2%” without years, omit the later approximately 4.5% figure recorded for 2025, and say the example “shows” visibility bias. It is a funded subfunction, not an excluded COFOG function, and can only illustrate a pattern consistent with the mechanism.

12. **E10 hides its declared inputs.** [paper.md:1089](C:/devel/claude-projects/distributed-governance-research/drafts/paper.md:1089) says “at declared cost shares” without giving them. The current executable uses κ_C = 0.08 and κ_D = 0.05 and yields a −0.9-point cost contribution, changing the E5 gap from +58.6 to +57.7. Reporting those values would make “roughly neutral” reproducible.

13. **“A tenth layer” is inaccurate.** EN 1091/ES 1171 should say “a tenth experiment” or “E10.”

14. **“What survives” omits the integrated results.** [paper.md:1108](C:/devel/claude-projects/distributed-governance-research/drafts/paper.md:1108) and [paper.es.md:1190](C:/devel/claude-projects/distributed-governance-research/drafts/paper.es.md:1190) contain no E5/E9/E10 summary. Item 4 also parenthesizes administrative cost and leakage under “selection and delivery,” although administrative cost is a separate channel.

15. **§8 still describes a selection-only paper.** [paper.md:1319](C:/devel/claude-projects/distributed-governance-research/drafts/paper.md:1319) and [paper.es.md:1405](C:/devel/claude-projects/distributed-governance-research/drafts/paper.es.md:1405) say the paper addresses selection under delivery parity. That is now false as a description of the whole paper; it is true only of the confirmatory gate.

16. **§8 lacks all new layered limitations.** There is no explicit treatment of the E5 conditional interval, E9 conditional Shapley attribution/sign reversals, unquantified planning magnitude, or declared E10 shares.

17. **Conclusion omits E9/E10 and misdescribes E5.** [paper.md:1451](C:/devel/claude-projects/distributed-governance-research/drafts/paper.md:1451) and [paper.es.md:1537](C:/devel/claude-projects/distributed-governance-research/drafts/paper.es.md:1537) say the layers “interact rather than merely add” without saying that the multiplication is an accounting identity. The conclusion gives neither the +58.6 interval nor the E9/E10 interpretation.

18. **Appendix assigns cost to the wrong experiment.** [paper.md:1654](C:/devel/claude-projects/distributed-governance-research/drafts/paper.md:1654) and [paper.es.md:1753](C:/devel/claude-projects/distributed-governance-research/drafts/paper.es.md:1753) say E5 turns on both administrative cost and leakage. E5 adds delivery at matched budget; E10 adds net-budget administrative cost.

19. **Missing references in both bibliographies.** New E5/E9/E10 prose cites or relies on sources absent from EN and ES references:

   - IMF 2015
   - Björkman and Svensson 2009
   - Molina et al. 2016
   - Avis, Ferraz, and Finan 2018
   - Drazen and Eslava 2010
   - Rioja 2003
   - IDB 2018
   - a primary COFOG source
   - the Chile mental-health, PAHO, OECD/DIPRES sources
   - an actual platform-cost source for the KONEPS/ChileCompra/ProZorro claim

20. **Public audit records contain superseded results.**

   - [E5-DELIVERY-DESIGN.md:56](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:56) still headlines +59.1 [+58.5, +59.7] and zero verified diversion; mark this block superseded by the final +58.6 [+58.0, +59.2] and low-but-nonzero diversion.
   - [E9-FULLSTACK-DESIGN.md:3](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:3) still calls E9 an unbuilt sketch, followed by several obsolete intermediate magnitudes. Add a governing-status banner pointing to the final “do not report a planning figure” decision at line 254.
   - [E10-COSTS-DESIGN.md:10](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md:10) is materially stale: proportional value haircut, κ_C = .15, κ_D = .03, and +2.3 points. The settled implementation uses symmetric net-budget accounting and is roughly neutral.

EN↔ES parity verdict: Findings 5/9/10 currently carry the same claims, numbers, structure, and caveats. Every proposed substantive correction must be mirrored; there is no current cross-language numerical divergence.

## 4. Honest-caveat / referee-anticipation editor

Required §8 additions:

> **E5 identifies a conditional model contrast, not a field effect.** The +58.6-point selection-and-delivery gain and its 95% interval [+58.0, +59.2] are conditional on the PROBABLE world, the declared executor-and-deterrence model, and fixed calibration inputs. The interval reflects Monte Carlo uncertainty over simulated worlds, not uncertainty about the data-generating process, calibration, functional form, literature transport, or field implementation. The greedy reference is a heuristic normalizer, not an optimum; multiplicative composition is an accounting identity; and verified diversion remains low but nonzero.

> **E9 does not establish three uniformly positive layer effects.** Its Shapley values are conditional attributions through the declared sector generator, not standalone estimates. Selection and delivery are large in PROBABLE, but each reverses sign in an extreme named world even though the full Core v0 diagonal remains positive in all four named worlds. Planning’s agenda-capture mechanism is directionally anchored, but its magnitude remains unquantified.

> **E10 supplies no overhead dividend.** Under symmetric net-budget accounting and the declared reference shares, administrative cost changes the gap by less than one point and can change sign in sensitivity analysis. Those shares are scenario inputs, not measured arm-specific costs; the quantified advantage therefore remains a selection-and-delivery contrast.

Also replace [paper.md:1319](C:/devel/claude-projects/distributed-governance-research/drafts/paper.md:1319) with:

> This paper addresses whether the architecture can be built and reports conditional model contrasts for both selection and delivery. It does not estimate whether Core v0 delivers more value in the world: a target-domain total delivered-value effect remains a separately identified future estimand.

For Chile:

> Chile provides a qualitative illustration only: mental-health spending remained near 2% of health spending over 2007–2015, despite mental disorders being the country’s leading cause of disability. That pattern is consistent with low-salience under-provision, but it neither identifies agenda capture nor calibrates its magnitude; mental health is a funded subfunction, not an excluded top-level COFOG function.

## Synthesis: top 15 edits

1. **[consistency] Replace the obsolete compound-status block.**

   > **Status of the earlier compound ratios (retired).** The earlier single value-per-budget ratio conflated selection quality, delivery leakage, and administrative cost and is retired as a calibrated effect. The rebuilt program separates the channels: E4 measures selection; E5 crosses selection with delivery at matched budget; E9 supplies a conditional three-layer attribution while leaving planning magnitude unquantified; and E10 applies each arm’s administrative cost symmetrically as a net-budget reduction before selection. Results are percentages or reference-point differences, with parity at zero; no institution-performance multiplier is retained.

2. **[completeness] Add the layered findings to the abstract.**

   > A matched four-cell extension crosses selection with delivery: in the declared PROBABLE world, the full selection-and-delivery architecture exceeds the status quo by about 58.6 points of the same greedy reference [95% conditional Monte Carlo interval +58.0, +59.2]. A three-layer factorial leaves the full Core v0 diagonal positive in every named world, although individual layer attributions reverse sign in extreme worlds; planning’s direction is anchored but its magnitude is deferred. Symmetric net-budget accounting makes administrative cost roughly neutral: the modeled advantage lies in selection and delivery, not overhead.

3. **[consistency] Correct the abstract’s scope sentence.**

   > The simulations provide conditional model contrasts for selection, delivery, and administrative cost, but their units are uncalibrated, their models are partial-equilibrium, and they do not identify target-domain treatment effects.

4. **[framing] Add the intellectual synthesis to §1.**

   > Hayek supplies the knowledge problem, Friedman the agency problem, and Buchanan the constitutional question; Core v0 joins them in a single design rule: separate the hand that chooses, the hand that spends, and the hand that certifies.

5. **[clarity] Replace Finding 5’s heading.**

   > **Finding 5: selection determines what value enters the pipeline; delivery determines how much reaches the public — and the two margins compose multiplicatively.**

6. **[clarity] State E5’s result and epistemic status together.**

   > In the declared world, the full selection-and-delivery architecture gains approximately 58.6 points of the common greedy reference, with a 95% conditional Monte Carlo interval of [+58.0, +59.2]. That fixed-input interval captures variation over simulated worlds, not uncertainty about calibration, model form, literature transport, or field implementation.

7. **[clarity] Make the monitoring split memorable.**

   > Coverage can help reveal a leak; only institutional recovery can claw back the money and impose the consequence.

8. **[consistency] Correct the E5 risk description.**

   > Within the PROBABLE world, the result remains stable across seeds and under cost/size-correlated delivery risk, with project cost independent of modeled value.

9. **[clarity] Replace Finding 9’s opening.**

   > **Finding 9: the full stack remains ahead in every named world, but its layer attributions are conditional.** A Shapley value averages what a layer adds when introduced in every possible order; the three averages sum to the total gap, but they are not standalone estimates.

10. **[consistency] Correct the E9 reversal sentence.**

    > Selection and delivery are large in PROBABLE but not robust across the named worlds: selection turns negative in PRO_CENTRAL, while delivery turns negative in PRO_DIST because stronger delivery magnifies a harmful portfolio. Despite those component reversals, the full Core v0 diagonal remains positive in all four named worlds.

11. **[clarity] State the planning boundary without apology.**

    > Planning is power over the menu, not merely over the ranking. The agenda-capture mechanism is directionally anchored, but its magnitude requires country-specific evidence; this paper therefore reports no planning-layer figure.

12. **[clarity] Replace Finding 10.**

    > **Finding 10: symmetric net-budget accounting leaves administrative cost roughly neutral; the modeled advantage comes from delivered value.** At the declared shares κ_C = 0.08 and κ_D = 0.05, administrative cost changes the modeled gap from +58.6 to +57.7 reference points, a −0.9-point contribution. The case for Core v0 therefore does not depend on an overhead dividend.

13. **[completeness] Repair “What survives.”**

    > Taken together, E5–E10 locate the conditional advantage in selection and verified delivery, not overhead: E5 measures those margins separately on matched portfolios; E9 supplies a conditional full-stack attribution whose component signs vary by world; and E10 leaves administrative cost roughly neutral. Planning remains unresolved quantitatively: its agenda-capture mechanism is directionally grounded, but its magnitude is deliberately deferred rather than manufactured from an unanchored scenario.

14. **[completeness] Add the layered §8 limitation.**

    > **The layered magnitudes are conditional, not portable.** E5’s interval holds the declared world, model form, and calibration fixed. E9’s Shapley values are conditional and individual layer signs reverse in extreme worlds, although the full diagonal remains positive. Planning’s direction is anchored but its magnitude is unquantified. E10’s roughly neutral result rests on declared symmetric net-budget shares. None is a field-effect estimate.

15. **[completeness] Update the conclusion.**

    > E9 and E10 sharpen where the modeled advantage comes from. The full diagonal remains positive across the named worlds even when individual Shapley contributions reverse in extreme corners; planning’s dominant mechanism is identified, but its magnitude is left unquantified. Symmetric net-budget accounting leaves administrative cost roughly neutral. In this model, the architecture’s advantage is delivered value, not cheap administration.

## Final consistency and completeness checklist

Before publication:

- [ ] Replace the stale E5 block in both manuscripts.
- [ ] Add E5/E9/E10 to both abstracts.
- [ ] Update Contribution 3 in both introductions.
- [ ] Add or relabel Finding 8 and remove the legacy ratio statement.
- [ ] Correct “value/complexity” to cost/size-correlated risk.
- [ ] Correct E9’s PRO_CENTRAL/PRO_DIST reversal explanation.
- [ ] Restrict “large in PROBABLE” to selection and delivery.
- [ ] Clarify cross-sector planning shares versus within-scope project weights.
- [ ] Distinguish E5’s selection-and-delivery corner from E9’s full-stack diagonal.
- [ ] Date, source, and bound the Chile illustration.
- [ ] State E10’s declared shares and roughly neutral result.
- [ ] Add E5/E9/E10 to “What survives.”
- [ ] Add explicit layered limitations to §8.
- [ ] Rewrite the selection-only adoption limitation.
- [ ] Correct the Appendix’s E5/E10 division.
- [ ] Integrate E9/E10 into the conclusion.
- [ ] Add all missing bibliography entries to EN and ES.
- [ ] Mirror every English correction in Spanish.
- [ ] Mark obsolete E5/E9 audit-history sections as superseded.
- [ ] Replace the stale E10 public design record with the governing net-budget result.

Publication-readiness verdict: **not yet**, but the required pass is bounded and editorial. The settled scientific claims do not need weakening or re-estimation. Once the stale blocks, missing caveats, E9 sign error, Chile sourcing, bibliography, and EN↔ES mirrors are repaired, the manuscript can be publication-ready as prose.
tokens used
188,225
Verdict: the results are honestly framed, but the manuscript is not yet prose-publication-ready. The main blockers are stale E5 prose, absent E5/E9/E10 coverage in the abstract/limitations/summary, a wrong E9 sign explanation, an outdated Chile sentence, missing references, and stale public design records. The English and Spanish findings themselves are substantively aligned.

## 1. Classical-liberal intellectual

The strongest framing is functional constitutionalism: Hayek supplies the knowledge problem, Friedman the agency problem, and Buchanan the rule-design problem. Core v0 preserves public authorization while refusing to fuse selection, spending, evidence, and judgment.

Highest-impact drop-ins:

1. After [paper.md:54](C:/devel/claude-projects/distributed-governance-research/drafts/paper.md:54), mirrored after [paper.es.md:58](C:/devel/claude-projects/distributed-governance-research/drafts/paper.es.md:58):

   > Hayek supplies the knowledge problem, Friedman the agency problem, and Buchanan the constitutional question; Core v0 joins them in a single design rule: separate the hand that chooses, the hand that spends, and the hand that certifies.

2. Replace the Finding 5 heading at [paper.md:906](C:/devel/claude-projects/distributed-governance-research/drafts/paper.md:906):

   > **Finding 5: selection determines what value enters the pipeline; delivery determines how much reaches the public — and the two margins compose multiplicatively.**

3. After the E5 design paragraph at [paper.md:923](C:/devel/claude-projects/distributed-governance-research/drafts/paper.md:923):

   > This is the delivery-side complement to credit versus coverage: dispersed information can improve the portfolio, but only independent verification and recovery can convert that informational advantage into delivered value.

4. After the monitoring result at [paper.md:949](C:/devel/claude-projects/distributed-governance-research/drafts/paper.md:949):

   > In the model, community eyes can help reveal a leak; the material delivery gain arrives only when formal recovery makes the leak costly.

5. Replace the Finding 9 heading at [paper.md:1055](C:/devel/claude-projects/distributed-governance-research/drafts/paper.md:1055):

   > **Finding 9: the full stack remains ahead in every named world, but its layer attributions are conditional.**

6. Follow that heading with:

   > Shapley accounting assigns the modeled gap among layers so that the pieces sum to the whole; it does not turn those assignments into standalone or universal effects.

7. Replace the planning core at [paper.md:1074](C:/devel/claude-projects/distributed-governance-research/drafts/paper.md:1074):

   > Planning is power over the menu, not merely over the ranking. Its dominant mechanism is agenda capture — keeping high-need, low-visibility functions outside the eligibility frame — but because the magnitude of that mechanism requires country-specific budget data, this paper anchors its direction and leaves its size unquantified.

8. Replace the Finding 10 heading at [paper.md:1089](C:/devel/claude-projects/distributed-governance-research/drafts/paper.md:1089):

   > **Finding 10: symmetric net-budget accounting leaves administrative cost roughly neutral — the architecture’s advantage lies in what is selected and what is actually delivered, not in an overhead dividend.**

9. Near the conclusion, before [paper.md:1514](C:/devel/claude-projects/distributed-governance-research/drafts/paper.md:1514):

   > Core v0 does not assume a wiser hand; it refuses to let any one hand choose, spend, and certify without independent correction.

10. Final credit-versus-coverage line:

   > Credit pressure favors what is visible and claimable; coverage widens the field of what can count, while verification determines whether what counts ever arrives.

## 2. Science communicator / editor

### Priority rewrites

1. Finding 5 presently opposes delivery to allocation even though selection is the larger modeled contributor.

   Before, [paper.md:906](C:/devel/claude-projects/distributed-governance-research/drafts/paper.md:906):

   > delivered value, not allocation, is where the architecture earns its keep

   After:

   > **Finding 5: delivered value is produced in two stages — selecting valuable projects and making them deliver — and the stages multiply.**

   Spanish:

   > **Hallazgo 5: el valor entregado se produce en dos etapas —elegir proyectos valiosos y lograr que se ejecuten como se prometió— y ambas etapas se multiplican.**

2. Simplify the E5 methods paragraph at [paper.md:908](C:/devel/claude-projects/distributed-governance-research/drafts/paper.md:908):

   > E5 adds execution to E4 by crossing two selection regimes — central and distributed — with two delivery regimes — opaque and verified — in a matched four-cell design. Within each selection arm, both delivery regimes are applied to the same funded portfolio with matched executor draws. Opportunistic executors divert when temptation exceeds the Proposition 1 deterrent created by detection, restrained advances, recovery, guarantees, and reputation. These are declared reference magnitudes with evidence-backed directions, not field-effect estimates.

   The repeated formula can remain in §5 or move to a short parenthesis.

3. Rewrite the result paragraph at [paper.md:925](C:/devel/claude-projects/distributed-governance-research/drafts/paper.md:925):

   > All four cells are percentages of a common full-information greedy reference at perfect delivery; that reference is a heuristic normalizer, not an optimum. Central and distributed selection reach approximately 44% and 98% of the reference, while opaque and verified delivery preserve approximately 78% and 95% of selected value. The effects are larger together because better delivery preserves more value after a more valuable portfolio has been selected. This multiplication is an accounting identity, not an independently discovered synergy. The full selection-and-delivery architecture exceeds the status quo by approximately 58.6 reference points, with a 95% conditional Monte Carlo interval of [+58.0, +59.2].

4. Split the monitoring paragraph at [paper.md:943](C:/devel/claude-projects/distributed-governance-research/drafts/paper.md:943):

   > Community observation and institutional recovery do different jobs. Coverage can raise detection, but it cannot claw back funds or impose consequences; by itself it adds only a fraction of a point in the weak-control regime. The sizeable delivery gain appears when detection is joined to the verified regime’s formal recovery channel.
   >
   > Strong control still does not eliminate diversion. Verified delivery leaves a low but nonzero residual — about 2% incidence, rising to about 7% without the reputational stake. The joint sensitivity evidence is conditional on the declared PROBABLE world.

5. Explain Shapley in ordinary language:

   > A Shapley value asks how much a layer adds on average when introduced first, second, or third. The three averages sum exactly to the total gap, but they inherit the assumptions of the world in which they were calculated; they are not three independent experiments.

6. Explain net-budget cost similarly:

   > Net-budget accounting first makes each institution pay for its own machinery, then lets it fund projects with what remains. “Symmetric” means the same rule applies to both arms, including Core v0’s verification and recovery costs.

Quotable lines:

- “Choosing well creates potential value; verified delivery determines whether it reaches the public.”
- “Coverage can spot a leak; only institutions can recover the money and enforce the consequence.”
- “A Shapley value is an accounting rule, not a standalone experiment.”
- “The full stack is more stable than any single-layer story.”
- “Administrative cost does not explain the modeled advantage; delivered value does.”

## 3. Consistency / completeness auditor

These are the principal manuscript defects, ranked by severity.

1. **Obsolete E5 status block.** [paper.md:545](C:/devel/claude-projects/distributed-governance-research/drafts/paper.md:545) and [paper.es.md:593](C:/devel/claude-projects/distributed-governance-research/drafts/paper.es.md:593) still say E5 is a default-off selection/cost/leakage wrapper that reduces to E4. That directly contradicts rebuilt Finding 5.

2. **Abstract omission.** [paper.md:7](C:/devel/claude-projects/distributed-governance-research/drafts/paper.md:7) and [paper.es.md:9](C:/devel/claude-projects/distributed-governance-research/drafts/paper.es.md:9) contain no E5/E9/E10 result. The sentence “do not identify delivery effects” at EN line 15/ES line 17 now sounds as if E5 does not exist; it should say “do not identify target-domain treatment effects.”

3. **Introduction omission.** Contribution 3 at [paper.md:111](C:/devel/claude-projects/distributed-governance-research/drafts/paper.md:111) and [paper.es.md:117](C:/devel/claude-projects/distributed-governance-research/drafts/paper.es.md:117) still centers the retired compound and does not report the new layered findings.

4. **Missing Finding 8.** [paper.md:516](C:/devel/claude-projects/distributed-governance-research/drafts/paper.md:516) says each E1–E10 experiment corresponds to a finding, but the manuscript jumps from Finding 7 to Finding 9. E8 at EN 1039/ES 1117 needs a heading or the table claim must change.

5. **Embargo-sensitive E8 relic.** [paper.md:1050](C:/devel/claude-projects/distributed-governance-research/drafts/paper.md:1050) and [paper.es.md:1128](C:/devel/claude-projects/distributed-governance-research/drafts/paper.es.md:1128) still report “1.7% of the ratio” from the retired apparatus. Remove it or express an admissible reference-point estimand.

6. **E5 risk label is wrong.** [paper.md:956](C:/devel/claude-projects/distributed-governance-research/drafts/paper.md:956) and [paper.es.md:1029](C:/devel/claude-projects/distributed-governance-research/drafts/paper.es.md:1029) say “value/complexity-correlated delivery risk.” The implemented check is cost/size-correlated risk under cost independent of value.

7. **E9 overgeneralizes “large.”** [paper.md:1067](C:/devel/claude-projects/distributed-governance-research/drafts/paper.md:1067) and [paper.es.md:1146](C:/devel/claude-projects/distributed-governance-research/drafts/paper.es.md:1146) should say selection and delivery are large in PROBABLE. Planning is not a large quantified layer.

8. **E9 sign explanation is backward.** [paper.md:1071](C:/devel/claude-projects/distributed-governance-research/drafts/paper.md:1071) and [paper.es.md:1150](C:/devel/claude-projects/distributed-governance-research/drafts/paper.es.md:1150) attribute the selection reversal to nearly random central selection. The current experiment shows selection turning negative in PRO_CENTRAL; delivery turns negative in PRO_DIST because stronger delivery magnifies a harmful portfolio.

9. **Planning terminology needs reconciliation.** [paper.md:654](C:/devel/claude-projects/distributed-governance-research/drafts/paper.md:654) says the macro Planning Scope carries no budget weights, while [paper.md:1058](C:/devel/claude-projects/distributed-governance-research/drafts/paper.md:1058) defines E9 planning partly through sector budget shares. Distinguish cross-sector envelope shares from within-scope project weights. Also clarify that E9’s all-distributed planning arm is a modeled open-mode endpoint; §2 correctly says planning construction remains unresolved in transition modes.

10. **Ambiguous “full architecture.”** E5 at [paper.md:936](C:/devel/claude-projects/distributed-governance-research/drafts/paper.md:936) calls the selection-and-delivery corner “the full architecture,” while E9 later introduces the “full stack.” Use “full selection-and-delivery architecture” for E5 and reserve “full-stack diagonal” for E9.

11. **Chile illustration is stale and under-cited.** [paper.md:1083](C:/devel/claude-projects/distributed-governance-research/drafts/paper.md:1083) and [paper.es.md:1163](C:/devel/claude-projects/distributed-governance-research/drafts/paper.es.md:1163) use “held near 2%” without years, omit the later approximately 4.5% figure recorded for 2025, and say the example “shows” visibility bias. It is a funded subfunction, not an excluded COFOG function, and can only illustrate a pattern consistent with the mechanism.

12. **E10 hides its declared inputs.** [paper.md:1089](C:/devel/claude-projects/distributed-governance-research/drafts/paper.md:1089) says “at declared cost shares” without giving them. The current executable uses κ_C = 0.08 and κ_D = 0.05 and yields a −0.9-point cost contribution, changing the E5 gap from +58.6 to +57.7. Reporting those values would make “roughly neutral” reproducible.

13. **“A tenth layer” is inaccurate.** EN 1091/ES 1171 should say “a tenth experiment” or “E10.”

14. **“What survives” omits the integrated results.** [paper.md:1108](C:/devel/claude-projects/distributed-governance-research/drafts/paper.md:1108) and [paper.es.md:1190](C:/devel/claude-projects/distributed-governance-research/drafts/paper.es.md:1190) contain no E5/E9/E10 summary. Item 4 also parenthesizes administrative cost and leakage under “selection and delivery,” although administrative cost is a separate channel.

15. **§8 still describes a selection-only paper.** [paper.md:1319](C:/devel/claude-projects/distributed-governance-research/drafts/paper.md:1319) and [paper.es.md:1405](C:/devel/claude-projects/distributed-governance-research/drafts/paper.es.md:1405) say the paper addresses selection under delivery parity. That is now false as a description of the whole paper; it is true only of the confirmatory gate.

16. **§8 lacks all new layered limitations.** There is no explicit treatment of the E5 conditional interval, E9 conditional Shapley attribution/sign reversals, unquantified planning magnitude, or declared E10 shares.

17. **Conclusion omits E9/E10 and misdescribes E5.** [paper.md:1451](C:/devel/claude-projects/distributed-governance-research/drafts/paper.md:1451) and [paper.es.md:1537](C:/devel/claude-projects/distributed-governance-research/drafts/paper.es.md:1537) say the layers “interact rather than merely add” without saying that the multiplication is an accounting identity. The conclusion gives neither the +58.6 interval nor the E9/E10 interpretation.

18. **Appendix assigns cost to the wrong experiment.** [paper.md:1654](C:/devel/claude-projects/distributed-governance-research/drafts/paper.md:1654) and [paper.es.md:1753](C:/devel/claude-projects/distributed-governance-research/drafts/paper.es.md:1753) say E5 turns on both administrative cost and leakage. E5 adds delivery at matched budget; E10 adds net-budget administrative cost.

19. **Missing references in both bibliographies.** New E5/E9/E10 prose cites or relies on sources absent from EN and ES references:

   - IMF 2015
   - Björkman and Svensson 2009
   - Molina et al. 2016
   - Avis, Ferraz, and Finan 2018
   - Drazen and Eslava 2010
   - Rioja 2003
   - IDB 2018
   - a primary COFOG source
   - the Chile mental-health, PAHO, OECD/DIPRES sources
   - an actual platform-cost source for the KONEPS/ChileCompra/ProZorro claim

20. **Public audit records contain superseded results.**

   - [E5-DELIVERY-DESIGN.md:56](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/E5-DELIVERY-DESIGN.md:56) still headlines +59.1 [+58.5, +59.7] and zero verified diversion; mark this block superseded by the final +58.6 [+58.0, +59.2] and low-but-nonzero diversion.
   - [E9-FULLSTACK-DESIGN.md:3](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/E9-FULLSTACK-DESIGN.md:3) still calls E9 an unbuilt sketch, followed by several obsolete intermediate magnitudes. Add a governing-status banner pointing to the final “do not report a planning figure” decision at line 254.
   - [E10-COSTS-DESIGN.md:10](C:/devel/claude-projects/distributed-governance-research/audits/2026-07-12-e5-remodel/E10-COSTS-DESIGN.md:10) is materially stale: proportional value haircut, κ_C = .15, κ_D = .03, and +2.3 points. The settled implementation uses symmetric net-budget accounting and is roughly neutral.

EN↔ES parity verdict: Findings 5/9/10 currently carry the same claims, numbers, structure, and caveats. Every proposed substantive correction must be mirrored; there is no current cross-language numerical divergence.

## 4. Honest-caveat / referee-anticipation editor

Required §8 additions:

> **E5 identifies a conditional model contrast, not a field effect.** The +58.6-point selection-and-delivery gain and its 95% interval [+58.0, +59.2] are conditional on the PROBABLE world, the declared executor-and-deterrence model, and fixed calibration inputs. The interval reflects Monte Carlo uncertainty over simulated worlds, not uncertainty about the data-generating process, calibration, functional form, literature transport, or field implementation. The greedy reference is a heuristic normalizer, not an optimum; multiplicative composition is an accounting identity; and verified diversion remains low but nonzero.

> **E9 does not establish three uniformly positive layer effects.** Its Shapley values are conditional attributions through the declared sector generator, not standalone estimates. Selection and delivery are large in PROBABLE, but each reverses sign in an extreme named world even though the full Core v0 diagonal remains positive in all four named worlds. Planning’s agenda-capture mechanism is directionally anchored, but its magnitude remains unquantified.

> **E10 supplies no overhead dividend.** Under symmetric net-budget accounting and the declared reference shares, administrative cost changes the gap by less than one point and can change sign in sensitivity analysis. Those shares are scenario inputs, not measured arm-specific costs; the quantified advantage therefore remains a selection-and-delivery contrast.

Also replace [paper.md:1319](C:/devel/claude-projects/distributed-governance-research/drafts/paper.md:1319) with:

> This paper addresses whether the architecture can be built and reports conditional model contrasts for both selection and delivery. It does not estimate whether Core v0 delivers more value in the world: a target-domain total delivered-value effect remains a separately identified future estimand.

For Chile:

> Chile provides a qualitative illustration only: mental-health spending remained near 2% of health spending over 2007–2015, despite mental disorders being the country’s leading cause of disability. That pattern is consistent with low-salience under-provision, but it neither identifies agenda capture nor calibrates its magnitude; mental health is a funded subfunction, not an excluded top-level COFOG function.

## Synthesis: top 15 edits

1. **[consistency] Replace the obsolete compound-status block.**

   > **Status of the earlier compound ratios (retired).** The earlier single value-per-budget ratio conflated selection quality, delivery leakage, and administrative cost and is retired as a calibrated effect. The rebuilt program separates the channels: E4 measures selection; E5 crosses selection with delivery at matched budget; E9 supplies a conditional three-layer attribution while leaving planning magnitude unquantified; and E10 applies each arm’s administrative cost symmetrically as a net-budget reduction before selection. Results are percentages or reference-point differences, with parity at zero; no institution-performance multiplier is retained.

2. **[completeness] Add the layered findings to the abstract.**

   > A matched four-cell extension crosses selection with delivery: in the declared PROBABLE world, the full selection-and-delivery architecture exceeds the status quo by about 58.6 points of the same greedy reference [95% conditional Monte Carlo interval +58.0, +59.2]. A three-layer factorial leaves the full Core v0 diagonal positive in every named world, although individual layer attributions reverse sign in extreme worlds; planning’s direction is anchored but its magnitude is deferred. Symmetric net-budget accounting makes administrative cost roughly neutral: the modeled advantage lies in selection and delivery, not overhead.

3. **[consistency] Correct the abstract’s scope sentence.**

   > The simulations provide conditional model contrasts for selection, delivery, and administrative cost, but their units are uncalibrated, their models are partial-equilibrium, and they do not identify target-domain treatment effects.

4. **[framing] Add the intellectual synthesis to §1.**

   > Hayek supplies the knowledge problem, Friedman the agency problem, and Buchanan the constitutional question; Core v0 joins them in a single design rule: separate the hand that chooses, the hand that spends, and the hand that certifies.

5. **[clarity] Replace Finding 5’s heading.**

   > **Finding 5: selection determines what value enters the pipeline; delivery determines how much reaches the public — and the two margins compose multiplicatively.**

6. **[clarity] State E5’s result and epistemic status together.**

   > In the declared world, the full selection-and-delivery architecture gains approximately 58.6 points of the common greedy reference, with a 95% conditional Monte Carlo interval of [+58.0, +59.2]. That fixed-input interval captures variation over simulated worlds, not uncertainty about calibration, model form, literature transport, or field implementation.

7. **[clarity] Make the monitoring split memorable.**

   > Coverage can help reveal a leak; only institutional recovery can claw back the money and impose the consequence.

8. **[consistency] Correct the E5 risk description.**

   > Within the PROBABLE world, the result remains stable across seeds and under cost/size-correlated delivery risk, with project cost independent of modeled value.

9. **[clarity] Replace Finding 9’s opening.**

   > **Finding 9: the full stack remains ahead in every named world, but its layer attributions are conditional.** A Shapley value averages what a layer adds when introduced in every possible order; the three averages sum to the total gap, but they are not standalone estimates.

10. **[consistency] Correct the E9 reversal sentence.**

    > Selection and delivery are large in PROBABLE but not robust across the named worlds: selection turns negative in PRO_CENTRAL, while delivery turns negative in PRO_DIST because stronger delivery magnifies a harmful portfolio. Despite those component reversals, the full Core v0 diagonal remains positive in all four named worlds.

11. **[clarity] State the planning boundary without apology.**

    > Planning is power over the menu, not merely over the ranking. The agenda-capture mechanism is directionally anchored, but its magnitude requires country-specific evidence; this paper therefore reports no planning-layer figure.

12. **[clarity] Replace Finding 10.**

    > **Finding 10: symmetric net-budget accounting leaves administrative cost roughly neutral; the modeled advantage comes from delivered value.** At the declared shares κ_C = 0.08 and κ_D = 0.05, administrative cost changes the modeled gap from +58.6 to +57.7 reference points, a −0.9-point contribution. The case for Core v0 therefore does not depend on an overhead dividend.

13. **[completeness] Repair “What survives.”**

    > Taken together, E5–E10 locate the conditional advantage in selection and verified delivery, not overhead: E5 measures those margins separately on matched portfolios; E9 supplies a conditional full-stack attribution whose component signs vary by world; and E10 leaves administrative cost roughly neutral. Planning remains unresolved quantitatively: its agenda-capture mechanism is directionally grounded, but its magnitude is deliberately deferred rather than manufactured from an unanchored scenario.

14. **[completeness] Add the layered §8 limitation.**

    > **The layered magnitudes are conditional, not portable.** E5’s interval holds the declared world, model form, and calibration fixed. E9’s Shapley values are conditional and individual layer signs reverse in extreme worlds, although the full diagonal remains positive. Planning’s direction is anchored but its magnitude is unquantified. E10’s roughly neutral result rests on declared symmetric net-budget shares. None is a field-effect estimate.

15. **[completeness] Update the conclusion.**

    > E9 and E10 sharpen where the modeled advantage comes from. The full diagonal remains positive across the named worlds even when individual Shapley contributions reverse in extreme corners; planning’s dominant mechanism is identified, but its magnitude is left unquantified. Symmetric net-budget accounting leaves administrative cost roughly neutral. In this model, the architecture’s advantage is delivered value, not cheap administration.

## Final consistency and completeness checklist

Before publication:

- [ ] Replace the stale E5 block in both manuscripts.
- [ ] Add E5/E9/E10 to both abstracts.
- [ ] Update Contribution 3 in both introductions.
- [ ] Add or relabel Finding 8 and remove the legacy ratio statement.
- [ ] Correct “value/complexity” to cost/size-correlated risk.
- [ ] Correct E9’s PRO_CENTRAL/PRO_DIST reversal explanation.
- [ ] Restrict “large in PROBABLE” to selection and delivery.
- [ ] Clarify cross-sector planning shares versus within-scope project weights.
- [ ] Distinguish E5’s selection-and-delivery corner from E9’s full-stack diagonal.
- [ ] Date, source, and bound the Chile illustration.
- [ ] State E10’s declared shares and roughly neutral result.
- [ ] Add E5/E9/E10 to “What survives.”
- [ ] Add explicit layered limitations to §8.
- [ ] Rewrite the selection-only adoption limitation.
- [ ] Correct the Appendix’s E5/E10 division.
- [ ] Integrate E9/E10 into the conclusion.
- [ ] Add all missing bibliography entries to EN and ES.
- [ ] Mirror every English correction in Spanish.
- [ ] Mark obsolete E5/E9 audit-history sections as superseded.
- [ ] Replace the stale E10 public design record with the governing net-budget result.

Publication-readiness verdict: **not yet**, but the required pass is bounded and editorial. The settled scientific claims do not need weakening or re-estimation. Once the stale blocks, missing caveats, E9 sign error, Chile sourcing, bibliography, and EN↔ES mirrors are repaired, the manuscript can be publication-ready as prose.
