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
  against bandwidth-constrained central construction (see Section 6);

- **(v)** a documented adversarial-review method with an explicit stopping
  rule.

And two further contributions concern measurement and method:

- **(vi)** an end-to-end institutional comparison, within a bounded
  public-investment slice, on delivered social value per unit of budget,
  decomposing selection from delivery on matched portfolios: in the model,
  selection and verified delivery compose multiplicatively (an accounting identity, not
  an independent finding); a matched selection-and-delivery extension gains
  ≈ +58.6 points of a greedy reference in the declared world [95% conditional-MC interval +58.0, +59.2]; a conditional
  three-layer attribution keeps the full Core v0 diagonal positive in every
  named world while planning's standalone magnitude remains unquantified; and net-budget
  accounting leaves administrative cost roughly neutral under a conservative low-spread floor,
  with a declared Core v0 advantage under an asymmetric-cost scenario (the selection
  channel is examined separately under a pre-registered gate; §6). This work also introduces the
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

