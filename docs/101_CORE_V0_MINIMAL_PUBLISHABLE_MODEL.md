# Core v0 Minimal Publishable Model

*© 2026 Mauricio Offermann. Licensed CC BY-NC-ND 4.0 — see LICENSE.md. Companion to the working paper (see CITATION.cff for citation).*

## Purpose

This document is the shortest professional entry point into the Distributed Governance System v0.

It does not replace the full repository. It compresses the architecture into a publishable model that can be read by academics, public-sector reformers, civic-tech builders, institutional designers, and potential pilot partners without requiring them to understand every internal object and contradiction resolution first. The full academic manuscript, with formal proofs and simulation results, is [[paper|drafts/paper.md]] (published as v1.6, DOI 10.5281/zenodo.21193847); this document is its accessible companion.

The goal is to answer one question clearly:

```text
What is the minimum coherent version of this model that can be explained, criticized, compared, and piloted?
```

## The model in one example, first

Before any theory, here is the whole idea in one concrete case.

A verified local sports organization proposes a six-month neighborhood
sports school for 100 children, budgeted at $20,000,000, inside a public
scope that a municipal instrument opened for local sports projects. The
project must state, before receiving anything: exactly what it promises
(100 children in structured training, twice a week, six months), how each
promise will be proven (registration lists, attendance records, parent
confirmations, independent observations), who will independently inspect
it (a fiscalizer the executor does not choose and does not pay), and when
money is paid out (monthly, only after the evidence for that month passes
review). If attendance evidence is missing, that month's payment waits.
If a complaint shows 20% of the beneficiaries were false, the verified
score drops, the difference is corrected, and the organization's public
track record carries the result into every future project it proposes.

Everything that follows generalizes this example. (The worked example
later in this document runs the same school under a different, largely
successful scenario — the two sets of numbers describe different runs,
not an inconsistency.) If the example makes sense, the model will too.

## Motivation and guiding question

This project begins from a practical political question, not merely from a technical architecture question.

The motivating question is:

> Can modern technology realign institutional incentives enough to improve citizen participation, reduce corruption, increase accountability, and perform part of the work now monopolized by state institutions, without destroying the existing institutional order?

The project is not motivated by the belief that software alone can replace public authority.

It is motivated by a narrower observation: many public functions are not single indivisible acts of sovereignty. They contain separable layers:

```text
problem discovery
project design
resource allocation
evidence production
execution
fiscalization
disbursement
complaint handling
closure evaluation
reputation
rule-change traceability
```

Some layers may still require legally recognized public authority. Others may be made more distributed, verifiable, contestable, and incentive-aligned using technology.

The political intuition behind the model is that the state should not be analyzed as one block. Some functions require central authority. Some require hybrid governance. Some may benefit from distributed project-based execution and verification.

The project therefore asks whether a bounded governance layer can be built where citizens do not merely vote, complain, or delegate trust upward, but participate inside a structured system of measurable promises, conditional funding, evidence, independent control, and reputational feedback.

The reason this must be framed carefully is that the idea becomes overwhelming when stated as a proposal to redesign the state. A more useful starting point is smaller:

> Can a bounded public project system use technology to make value promises measurable, funding conditional, evidence inspectable, fiscalization independent, failure consequential, and future trust reputation-based?

That is the first publishable claim.

## One-sentence thesis

Public resources can be allocated and controlled through financeable public projects that declare measurable value, receive conditional funding, produce contextualized evidence, undergo independent fiscalization, release funds by verified milestones, and update actor reputation according to verified fulfillment.

## What this model is not

This model is not a proposal to abolish the state.

It is not a proposal to vote on everything.

It is not a claim that popularity should replace planning, legality, expertise, rights protection, or continuity duties.

It is not a blockchain or DAO manifesto.

It is not a theory that every public function can be distributed.

It is not a finished constitutional design.

The model is narrower:

> It proposes a functional architecture for a bounded layer of public project governance: proposal, funding, execution, evidence, fiscalization, disbursement, closure, and reputation.

The state or public authority may still define legal guarantees, eligibility frameworks, planning scopes, budget boundaries, protected service floors, identity rules, treasury custody, sanctions, appeals, and country-specific implementation rules.

The innovation is not the disappearance of public authority.

The innovation is the distribution of project-level allocation, verification, contestation, and accountability inside visible, rule-bound, auditable scopes.

## Problem

Modern public systems often concentrate three things in the same institutional chain:

```text
resource allocation
execution control
performance interpretation
```

This creates familiar failure modes:

- citizens fund services indirectly but cannot easily trace value delivered;
- public promises are often vague, political, or input-based;
- budgets can be allocated before evidence of value is clear;
- service providers may be evaluated by the same institutional system that selected or protects them;
- complaints are hard to connect to disbursement, evidence, closure, or reputation;
- weak performance can remain hidden inside administrative categories;
- reformulations can obscure failure;
- rule changes can be invisible or surprising;
- corruption and related-party conflicts can remain difficult to discover;
- institutional monopolies can preserve control while claiming public accountability.

At the same time, purely open participation models create their own problems:

- popularity can crowd out low-visibility needs;
- active minorities can dominate deliberation;
- citizens may lack time or expertise;
- metrics can be gamed;
- evidence can be weak, staged, or manipulated;
- decentralized decision-making can still be captured;
- vulnerable beneficiaries may be exposed if transparency is not privacy-aware.

The central problem is therefore not simply centralization versus decentralization.

The central problem is how to design a governance layer that uses distributed knowledge and participation without losing planning boundaries, evidence quality, fiscal control, privacy, continuity protection, and accountability.

## Core design claim

The model proposes that many bounded public functions can be governed through a project-based architecture.

In this architecture, a public project is not merely a description or funding request.

A project is a structured public promise.

It must declare:

```text
what value it will produce
for whom
under what scope
with what budget
through which executor
with which milestones
using which evidence
under which fiscalization rules
with what disbursement conditions
with what closure and reputation consequences
```

Funding does not immediately become executor-controlled money.

Funding becomes a conditional commitment governed by the project contract, evidence, fiscalization, and disbursement rules.

The system therefore shifts the center of gravity from institutional trust to traceable fulfillment.

## Minimal object model

The full repository contains many objects. For publication, the minimal model can be explained through seven core objects. Implementers should treat these seven as the didactic surface of a larger specified system: the implementable schema draft ([[66_IMPLEMENTABLE_OBJECT_SCHEMA_DRAFT_V0|docs/66_IMPLEMENTABLE_OBJECT_SCHEMA_DRAFT_V0.md]]), the formal entity inventory ([[64_FORMAL_ENTITY_INVENTORY_V0|docs/64_FORMAL_ENTITY_INVENTORY_V0.md]]), and the consolidated state map ([[35_CONSOLIDATED_ENTITY_OBJECT_STATE_MAP|docs/35_CONSOLIDATED_ENTITY_OBJECT_STATE_MAP.md]]) carry the full object relations and state machines this document compresses.

How the seven didactic objects map to the real schema (`docs/66`):

```text
Planning Scope        → PlanningScope (with Allocation Mandate and
                        Fiscal Commitment records, versioned)
Project               → Project, ProjectPhase, RoleAssignment
Value Thesis          → ValueAntivalueProfile, Metric
Evidential Contract   → ProjectEvidentialContract, FulfillmentEvidenceNeed,
                        ContextualizedEvidenceItem
Funding Attempt       → CivicWallet, FundingAttempt, FundingCommitment,
                        Disbursement, FinancialOrder, FinancialAssuranceProfile
Control Package       → ControlSubproject, FiscalizationOffer,
                        FiscalizationAssignment, FiscalizationReport
Closure / Reputation  → ClosureAccountabilityRecord, PostClosureCoverageProfile,
                        ResponsibilityEvent, reputation input chain
```

Two objects cut across all seven and deserve naming even in the minimal model. **ThresholdPolicy** is the engine of proportionality: it decides which closure conditions, evidence standards, control depth, and guarantees a given project must satisfy — nearly every gate in this document reads its parameters from it. **AuditEvent** is the immutable spine: the schema's standing rule is that no state transition happens without one, which is what makes every claim in this document inspectable after the fact. Reputation, likewise, never attaches to a person in the abstract — it attaches to an actor in a specific RoleAssignment, which is why one organization can be a strong executor and a weak fiscalizer without the scores contaminating each other.

## 1. Planning Scope

A Planning Scope defines what kinds of projects are currently eligible for distributed financing.

It is created by a public authority in a tutored pilot (a supervised mode in which the authority keeps admissibility review — see below) or by an approved roadmap. Every active scope must carry an **Allocation Mandate** record naming the statute, ordinance, referendum, or delegated authority that authorized migrating budget into distributed allocation, the legal instrument behind it, and the allocation formula — with an explicit flag, naming the responsible authority, whenever the formula departs from equal-per-citizen ([[86_ALLOCATION_MANDATE_AND_A019_RESOLUTION|docs/86_ALLOCATION_MANDATE_AND_A019_RESOLUTION.md]]). The platform records that external authorization; it does not manufacture it. Distributed construction of the scopes themselves is a declared open problem, not a solved one ([[87_PLANNING_SCOPE_AGENDA_LIMITATION_AND_A020_RESOLUTION|docs/87_PLANNING_SCOPE_AGENDA_LIMITATION_AND_A020_RESOLUTION.md]]).

It answers:

```text
What public function, territory, pilot, budget lane, or policy area is open to project-based distributed governance?
```

A Planning Scope prevents the system from becoming an unconstrained popularity market. It can define eligible project types, excluded project types, territorial boundaries, essential service protections, protected public floors, funding lanes, threshold policies, review dates, and operating mode.

Example:

```text
Planning Scope:
Local sports and recreation projects in Commune X for 2027.

Eligible:
training programs, local sports equipment, small facility improvements, accessibility improvements, community tournaments.

Excluded:
professional club subsidies, private exclusive facilities, projects without public access, projects requiring unresolved national permits.
```

The Planning Scope is the first boundary of the model. It says: not everything is financeable just because someone wants it.

## 2. Project

A Project is the basic financeable and executable unit.

A project must have an identified responsible executor before it can receive execution funding.

It is not enough to publish an idea. Ideas capture civic demand. Projects execute responsibility.

A minimal project includes:

```text
problem
solution
territory
Planning Scope reference
executor
budget
value thesis
beneficiaries
metrics
milestones
evidence obligations
fiscalization requirements
funding target
closure conditions
reputation consequences
audit trail
```

The project is the object citizens fund, fiscalizers review, evidence producers evidence, executors execute, and the system closes.

## 3. Value Thesis / Value-Antivalue Profile

The Value Thesis declares the positive value the project promises to produce.

The Value-Antivalue Profile adds two important ideas:

```text
value floors
antivalue ceilings
```

Value floors are minimum positive commitments the project must reach — the least it must deliver to count as keeping its promise.

Antivalue ceilings are maximum negative effects the project must not exceed — in plain words, the harm it must not cause while delivering.

Example:

```text
Value floor:
At least 100 children participate in structured sports activity for six months.

Antivalue ceiling:
The project must not exclude children based on club membership, political affiliation, or ability to pay.
```

The rule is:

> No value without metrics. No metrics without evidence.

This prevents projects from using attractive public-value language without measurable commitments.

## 4. Project Evidential Contract

The Project Evidential Contract defines how the value thesis will be verified.

It links:

```text
value promises
metrics
milestones
required evidence
source roles
producer qualifications
fiscalizer review
disbursement consequences
complaint paths
privacy rules
closure evaluation
reputation effects
```

It is not a pile of documents. It is the verification contract of the project.

Example:

```text
Promise:
100 children participate in sports training for six months.

Evidence required:
registration list
attendance records
session photos or equivalent activity evidence
beneficiary or parent confirmation
evidence-producer observations where required
fiscalizer review
```

The evidential contract does not preselect independent evidence producers. It defines what kind of evidence is needed and what qualifications or methods are required. Evidence producers may later offer to produce evidence that satisfies the accepted contract.

## 5. Funding Attempt / Funding Commitment

A Funding Attempt is a bounded financing window for a project or project phase.

It defines:

```text
funding target
funding window
attempt number
funding status
what happens if funding closes
what happens if funding fails
```

A Funding Commitment is a citizen or actor commitment to fund the project under the stated conditions.

Two clarifications matter here. First, the citizen is not spending personal cash: each citizen periodically receives non-withdrawable allocation capacity over a legally mandated share of the existing public budget — public money whose destination the citizen directs, held by an external custodian, never a personal wallet ([[47_TREASURY_CITIZEN_BALANCE_AND_C006_RESOLUTION|docs/47_TREASURY_CITIZEN_BALANCE_AND_C006_RESOLUTION.md]]). Second, funding is not immediate payment to the executor. It is conditional: funds are released (paid out) only after the project satisfies the relevant milestone, evidence, fiscalization, and disbursement rules.

This separates public support from uncontrolled transfer of resources.

One reality the model does not hide: the state still controls the money's arrival. Each scope therefore carries a public, versioned **Fiscal Commitment Profile** — migrated share, indexation, delivery-latency targets — and the system tracks expected-versus-actual delivery and unexecuted valid orders, so late or partial treasury delivery becomes visible, attributable upstream fiscal delay instead of a green funding screen quietly masking unpaid executors ([[88_FISCAL_COMMITMENT_PROFILE_AND_A021_RESOLUTION|docs/88_FISCAL_COMMITMENT_PROFILE_AND_A021_RESOLUTION.md]]). The platform makes fiscal strangulation measurable; only law can make it impossible.

## 6. Control Package / Fiscalization

Fiscalization means independent inspection: reviewing whether the project delivered what it promised, done by an actor the executor neither chooses nor pays.

The Control Package contains the actors and resources required to verify execution.

It may include:

```text
responsible fiscalizer
evidence producers
evidence missions
extraordinary review reserve
technical review where required
```

Fiscalization is not execution.

Evidence production is not validation.

The basic separation is:

```text
Executor executes.
Evidence producers produce evidence.
Fiscalizers evaluate compliance.
Citizens observe, comment, object, and denounce.
```

The executor should not privately appoint or control the actor responsible for validating its own performance.

Control burden follows an explicit proportionality ladder rather than one-size rules: light for small reversible projects, standard, reinforced, and critical for large, technical, remote, irreversible, or vulnerable-beneficiary projects — the applicable band is set by the project's threshold policy, and proposers cannot self-select a lighter band ([[H020-proportional-procedural-burden|knowledge/hypotheses/H020-proportional-procedural-burden.md]]).

Two honest constraints come with this. In small territories the pool of independent qualified fiscalizers can be thin — sometimes one person, sometimes related to the executor — so the system exposes control-supply density per territory and domain, and thin-market fallbacks (remote review, cross-territory assignment, relaxed-but-disclosed selection) are explicit country-implementation choices, not silent workarounds ([[90_CONTROL_SUPPLY_OBSERVABILITY_AND_A022_RESOLUTION|docs/90_CONTROL_SUPPLY_OBSERVABILITY_AND_A022_RESOLUTION.md]]). And before any money moves, every execution-financeable project must name its **Duty-of-Care Anchor**: the solvent, reachable legal person answerable to third parties if the project physically harms someone, backed by coverage proportionate to physical risk — a grassroots training program needs modest coverage, a construction project needs real insurance — so the requirement protects victims without pricing out exactly the small executors a pilot targets ([[89_DUTY_OF_CARE_ANCHOR_AND_A033_RESOLUTION|docs/89_DUTY_OF_CARE_ANCHOR_AND_A033_RESOLUTION.md]]).

## 7. Project Closure Accountability Record / Reputation Update

A project does not simply end. It closes through an accountability record.

The Project Closure Accountability Record should show:

```text
closure category
value fulfillment score
metric breakdown
evidence considered
fiscalizer evaluation
complaints and founded complaints
corrections
released funds
retained or returned funds
responsibility events
reputation updates
citizen-facing explanation
```

The closure category is descriptive. The reputational core is the verified fulfillment of the value thesis.

Closure is also not the end of accountability: execution-financeable projects carry a post-closure coverage window — an executor warranty or equivalent insurance/bond — during which covered defects, contradictory evidence, or hidden harms can still be reviewed inside the platform ([[73_CONFLICT_OF_REVIEW_HANDLING_AND_A007_RESOLUTION|docs/73_CONFLICT_OF_REVIEW_HANDLING_AND_A007_RESOLUTION.md]]).

Example:

```text
Closure category:
Partially fulfilled.

Verified value fulfillment:
99 / 100.

Reputation impact:
Positive, because the missing component was administrative and did not materially reduce the value thesis.
```

Or:

```text
Closure category:
Fulfilled.

Founded complaint:
20% of beneficiaries were false.

Corrected value fulfillment:
80 / 100.

Reputation impact:
Negative adjustment plus responsibility event.
```

The executor's reputation should be numeric, visible, role-specific, and updated over time using a weighted moving average, exponential moving average, or equivalent decay mechanism.

A bad evaluation should matter in future projects, but it should not be eternal if later performance is consistently strong.

## Minimal flow

The minimal model can be described as one chain:

```text
Planning Scope
→ Project
→ Value Thesis
→ Project Evidential Contract
→ Funding Attempt
→ Control Package
→ Milestone Disbursement
→ Closure Accountability
→ Reputation Update
```

One clarification: the arrows show logical dependency, not a waiting line. A published project gathers its funding, its fiscalizer, its evidence commitments, and its beneficiary confirmations **in parallel**, and becomes executable only when all conditions its threshold policy requires have closed — whichever order they close in. The project's actual lifecycle states are Draft → Open → Execution-ready → In execution → Closed, with defined exceptional states (paused, reformulated, revoked, expired unfunded) rather than improvised ones ([[12_OPEN_PROJECT_PARALLEL_CLOSURE_MODEL|docs/12_OPEN_PROJECT_PARALLEL_CLOSURE_MODEL.md]]).

## Step 1 — A scope is opened

A bounded public-function area is opened to project-based distributed governance.

Example:

```text
Local sports and recreation projects for Commune X, 2027.
```

The scope defines eligibility, restrictions, budget boundaries, operating mode, threshold policy, and review rules.

## Step 2 — An executor publishes a project

An eligible executor proposes a project inside the active Planning Scope.

The project must define value, budget, beneficiaries, milestones, evidence, fiscalization, risk, and closure conditions.

Before execution funding opens, the project must pass minimum validation, including milestone and evidence coherence checks.

## Step 3 — Citizens fund conditionally

Citizens or configured allocation profiles commit funds to the project.

Funding commitments are not uncontrolled transfers. They are conditional commitments tied to the project's rules.

## Step 4 — Control is configured

Fiscalizers and evidence producers may offer to participate.

The project requires a control package proportional to its risk and evidential needs.

Execution cannot begin merely because funding exists. Execution requires the relevant funding, evidence, fiscalization, and readiness conditions to be closed.

## Step 5 — Funds are released by milestones

The executor requests milestone review.

Evidence is submitted.

The fiscalizer reviews compliance against the accepted evidential contract.

Funds are released, retained, corrected, or blocked according to milestone rules.

## Step 6 — Citizens observe and denounce

Citizens, beneficiaries, funders, and affected parties may comment, object, provide evidence, or file complaints.

A complaint is a formal review trigger, not a mere opinion.

Founded complaints may correct metrics, alter disbursement, change closure, activate guarantees, or generate responsibility events. Because a founded complaint has real consequences for a named executor, its review is procedural, not summary: complaints follow an admissibility-and-review path with a traceable record, sensitive complainants and beneficiaries can act under protected identity with every identity access itself audited, and the adjudication and appeal rules that country law requires are an explicit country-implementation layer, not something the platform improvises ([[26_CITIZEN_COMPLAINT_FLOW|docs/26_CITIZEN_COMPLAINT_FLOW.md]], [[94_IDENTITY_PROVIDER_FAILURE_MODES_AND_A026_RESOLUTION|docs/94_IDENTITY_PROVIDER_FAILURE_MODES_AND_A026_RESOLUTION.md]]).

## Step 7 — The project closes

At closure, the system calculates verified value fulfillment.

The closure record separates:

```text
what happened procedurally
how much value was verified
which evidence was accepted
which complaints were founded
which funds were justified, disputed, retained, returned, or reassigned
which roles gained or lost reputation
```

## Step 8 — Reputation updates

The executor's reputation is updated according to verified value fulfillment and responsibility events.

Other roles may also update reputation tracks:

```text
fiscalizer reputation
evidence producer reputation
modeler reputation
complainant reputation where relevant
```

Reputation is not collective blame. It is role-specific and evidence-linked.

## Example: six-month neighborhood sports school

```text
Planning Scope:
Local sports and recreation projects, Commune X, 2027.

Project:
Six-month neighborhood sports school.

Executor:
Verified local sports organization.

Budget:
$20,000,000.

Beneficiaries:
100 children aged 8-12.

Duration:
6 months.
```

## Value thesis

The project promises to increase access to structured sports activity for children in the territory.

## Metrics

```text
Metric A — Eligible beneficiaries registered: 30%
Target: 100 children.
Evidence: registration list and eligibility confirmation.

Metric B — Sessions delivered and attended: 50%
Target: two sessions per week for six months, with minimum attendance threshold.
Evidence: attendance records, activity evidence, evidence-producer observations where required.

Metric C — Beneficiary confirmation and satisfaction: 20%
Target: minimum confirmation and satisfaction threshold.
Evidence: beneficiary or parent confirmation, survey, closure review.
```

## Evidence contract

The project must define how each metric will be evidenced.

Executor self-report may not be enough for all metrics. The contract may require beneficiary confirmation, independent evidence production, and fiscalizer review.

## Funding

Citizens fund the project conditionally.

No money is released to the executor merely because the target is reached.

## Control package

The project requires:

```text
one responsible fiscalizer
periodic evidence-producer observations
monthly milestone reviews
final closure report
```

## Disbursement

Funds are released monthly or by milestone if attendance, session delivery, and evidence requirements are met.

If evidence is missing, the affected milestone payment is retained until corrected.

If a complaint is filed alleging false attendance, the complaint may block the affected disbursement if it meets blocking criteria.

## Closure

Suppose the verified results are:

```text
Metric A: 100%
Metric B: 90%
Metric C: 80%
```

Then:

```text
Value fulfillment score:
(100 * 0.30) + (90 * 0.50) + (80 * 0.20) = 91 / 100
```

The executor's reputation updates from this verified score, adjusted by any founded complaints or responsibility events.

## And year two?

A sports school is not only built — it must survive its second year, and second years are where such projects most often fail. The model treats continuity as a first-class dimension: projects declare whether they are one-time, recurring, or maintenance-dependent; a project that funds six months of training shows citizens `funds first six months` and `maintenance not funded` labels rather than implying permanence; and before a funded period ends, a visible **Continuity Renewal Window** opens so the follow-on need becomes a public Idea competing for funding on its merits — no silent expiry, and no automatic incumbent renewal either ([[72_CONTINUITY_RISK_CLASSIFICATION_AND_A006_RESOLUTION|docs/72_CONTINUITY_RISK_CLASSIFICATION_AND_A006_RESOLUTION.md]]).

## What prevents abuse

## 1. Vague promises are rejected or weakened

A project cannot simply say:

```text
This will help the community.
```

It must define value, metrics, evidence, and review consequences.

## 2. Funding is conditional

Funding does not automatically transfer to the executor.

Funds are released by milestone, evidence, fiscalization, and disbursement rules.

This protection is not just asserted — it is derived. The formal companion note proves the condition under which delivering is more profitable than diverting: the executor's cost of honest delivery must not exceed the detection probability times everything at stake (the unreleased remainder, the recoverable advance, the posted guarantee, and the reputational value of future eligibility). Every disbursement rule in this model — small advances, recoverability, externally held guarantees, retention — is one term of that inequality, and where independent verification is weak the financial terms must tighten to compensate ([[formal-models|research/formal-models.md]], Propositions 1–2).

## 3. Evidence is contextualized

Evidence is linked to a procedural purpose:

```text
readiness evidence
fulfillment evidence
complaint evidence
fiscalization evidence
closure evidence
```

This prevents the system from treating all uploaded documents or photos as equally probative. The context is a mandatory gate, not a label: evidence used for hard formal effects — KPI verification, milestone payment, closure — must additionally come from a producer whose qualifications and methods fit the evidence need, so a citizen's photo can trigger review but cannot, by itself, certify a construction milestone ([[79_EVIDENCE_QUALITY_REVIEW_AND_A013_RESOLUTION|docs/79_EVIDENCE_QUALITY_REVIEW_AND_A013_RESOLUTION.md]]).

## 4. Fiscalization is separated from execution

The executor should not control the actor responsible for validating its performance.

Separation alone is not enough — separate actors can still be bribed. The formal note derives the collusion-proofness condition: buying a fraudulent approval must cost more than the fraud gains, which the model achieves by protocol assignment (strangers cannot form durable corrupt relationships, and a bribe offer to a stranger risks being reported), visible repeat-pairing (so relationships cannot quietly re-form), reputational stakes that are forfeited if approved fraud is later discovered, and — for critical milestones — requiring several independent approvals, which multiplies the price of collusion while the fraud's gain stays fixed (the formal note, Proposition 4).

## 5. Complaints are formal review triggers

Complaints are structured, traceable, and reviewable.

They may affect milestones, disbursements, closure, or reputation if founded.

## 6. Reformulation cannot erase failure

If implementation changes but value remains the same, reformulation may be operational.

If the value thesis changes, the reformulation must be treated as a separate proposal requiring approval.

A project cannot promise 100 beneficiaries, deliver 50, change the metric to 50 after the fact, and claim full success.

## 7. Rule changes are visible

Administrative or protocol rule changes must be public, versioned, justified, and have transition rules.

In tutored mode, an administrator may configure rules within its mandate, but cannot change the rules silently, overnight, or retroactively against actors who planned under a previous rule.

Rule changes are not one undifferentiated category: the corpus distinguishes administrative rule changes (parameters and thresholds), system implementation changes (software, algorithms, schemas), and protocol change proposals (the rules of the game themselves), each with its own visibility, versioning, and adaptation requirements ([[57_PROTOCOL_CHANGE_AND_C019_RESOLUTION|docs/57_PROTOCOL_CHANGE_AND_C019_RESOLUTION.md]]).

## What you, a citizen, actually do

The model asks little of any individual citizen, on purpose.

Your possible actions, all optional (`docs/21`–`docs/28` citizen flows):

```text
direct your allocation to projects you choose
follow projects near you and see their simple status labels
comment or ask questions with your verified identity
file a formal complaint if you see something wrong
delegate your allocation to someone you trust (revocable any time)
or do nothing — your allocation follows the public default rule
```

Three questions citizens always ask:

**Is it my money?** No cash leaves your pocket. You receive periodic
allocation capacity over a share of the existing public budget — you
direct where public money goes; you cannot withdraw it.

**Who do I complain to, and does it matter?** Complaints go into the
project's formal review path, not a suggestion box: they are traceable,
they must be reviewed, and if founded they can block payments, correct
scores, and mark responsibility. Sensitive complaints can be filed under
protected identity.

**What if I have no time?** Your allocation then follows the public
default rule (which tracks published planning priorities), or a delegate
you chose. The simulation evidence below shows the design does not
depend on citizens becoming full-time evaluators; inattention is a
designed-for condition, not a failure mode.

**Who pays the independent inspectors?** Not the executor. Control work
is financed from a separated control budget attached to the project — a
distinct line citizens fund alongside execution — and inspectors are
assigned by protocol rule, so the money that pays verification never
passes through the hands being verified ([[40_CONTROL_SUBPROJECTS_AND_C002_RESOLUTION|docs/40_CONTROL_SUBPROJECTS_AND_C002_RESOLUTION.md]], [[52_FISCALIZATION_OFFER_COST_AND_C013_RESOLUTION|docs/52_FISCALIZATION_OFFER_COST_AND_C013_RESOLUTION.md]]).

The interface follows the same principle in layers: a simple card with
plain status labels for everyone, expandable detail for the curious, and
the full audit trail for experts ([[11_CITIZEN_PROJECT_CARD|docs/11_CITIZEN_PROJECT_CARD.md]],
[[14_LAYERED_CITIZEN_INTERFACE_MODEL|docs/14_LAYERED_CITIZEN_INTERFACE_MODEL.md]]).

## How this model has been tested so far

This document's claims do not rest on enthusiasm. The underlying corpus
was validated three ways before publication:

- **Adversarially.** Thirty-five attack briefs grounded in the political
  science and economics literature — from metric gaming and fiscalizer
  capture to clientelism, polarization, and fiscal strangulation — each
  answered by a paired defense and an accepted resolution under an
  explicit integrate-or-bound rule; none was dismissed, several are
  honestly answered "bounded, not solved" (`attacks/`, `defenses/`,
  resolutions `docs/67`–`docs/103`, rule `knowledge/principles/P007`).
- **Formally.** The disbursement and anti-collusion mechanisms are proven
  as incentive-compatibility and collusion-proofness conditions, with the
  design levers appearing as explicit terms (the formal companion note).
- **Computationally.** A 10,000-agent simulation of realistic citizen
  attention found that funding caps curb concentration but not quality,
  that allocation quality is carried by the informational quality of the
  weight vector the default layer follows, and that participation decay is
  survivable exactly where that anchor is strong. A pre-registered fourth
  experiment then modeled knowledge symmetrically and found that building
  the weight vector from aggregated dispersed citizen signals beats
  fixed-bandwidth central construction at every tested scale — provided an
  aggregation institution exists and signals are honest. Two further
  pre-registered experiments measured the thesis itself. The fifth (E5)
  added the execution stage and found that project selection and verified
  delivery compound multiplicatively: on matched portfolios the
  verified-delivery layer alone is worth +43%, the full architecture
  delivers 2.19× the zero-control opaque lower bound per unit of budget
  in-model — a bound the seventh pre-registered experiment then
  recalibrated against a status quo parameterized from published
  audit-institution findings across nine jurisdictions: the multiplier
  survives at 2.22× at scale and 1.4-1.6× at municipal pilot scale, and
  the recalibration's own finding is that audit at its documented
  intensity, without reputational memory, deters no diversion — it
  shrinks the reported gap (twenty-nine to nineteen points), never the
  real one — and
  the opaque regime officially reports about 29 percentage points more
  delivery than reality — a visibility gap the verified regime closes by
  construction. The sixth (E6) isolated the incentive channel with an
  all-honest executor pool and found that visible reputational
  competition sustains executor effort and quality where opacity lets
  them collapse, while warning that naive reputation-weighted assignment
  concentrates work faster than it finds ability — evidence for the
  concentration-observability machinery this model already prescribes.
  These results discipline this document's claims rather than decorate
  them ([[simulation-results|research/simulation-results.md]]).

Every critique of the model is evaluated against how the current
institutional system solves the same problem — not against an ideal
([[P001-comparative-critique-rule|knowledge/principles/P001-comparative-critique-rule.md]]). What no
internal process can supply — independent expert review, calibration to
real participatory-budgeting data, and a live pilot — is the declared
next phase.

## What remains centralized, tutored, or country-specific

This model does not eliminate the need for public authority.

In a tutored pilot the public authority's control surface is concrete, not rhetorical: it defines the Planning Scope, reviews admissibility, duplication, and eligibility, and can approve, reject, or reclassify projects — but every material decision must be issued as a public **Governance Resolution** with reasons and a declared review window, and silence past the deadline automatically produces a public **Review Timeout Resolution** under a pre-configured timeout policy ([[58_TUTORED_MODE_GOVERNANCE_RESOLUTIONS_AND_C020_RESOLUTION|docs/58_TUTORED_MODE_GOVERNANCE_RESOLUTIONS_AND_C020_RESOLUTION.md]]). The authority keeps its veto; it loses only the ability to exercise it invisibly. What silence produces is not left to doctrine: the consequence of a lapsed deadline — from visibility-only through escalation to community override or automatic approval — is configured publicly at the operating-mode level before any project is submitted, so neither applicants nor the authority discover the direction of administrative silence after the fact.

Two honest costs are declared rather than hidden, and both now carry accepted resolutions. Operating a tutored scope consumes real administrative capacity — issuing reasoned resolutions within review windows, running admissibility review, coordinating control — governed by a published Administrative Capacity Declaration per scope, with capacity-calibrated timeouts and hours-per-resolution as an explicit first-pilot deliverable ([[103_ADMINISTRATIVE_CAPACITY_DECLARATION_AND_A035_RESOLUTION|docs/103_ADMINISTRATIVE_CAPACITY_DECLARATION_AND_A035_RESOLUTION.md]]); the staffing number itself remains empirical until a pilot measures it. And the legal characterization of the citizen's allocation act is recorded per jurisdiction through a bounded menu on the Allocation Mandate, with a vote-like pilot default disclosed to citizens before first use ([[102_ALLOCATION_ACT_CHARACTERIZATION_AND_A034_RESOLUTION|docs/102_ALLOCATION_ACT_CHARACTERIZATION_AND_A034_RESOLUTION.md]]); the doctrine itself remains external law, untested in any jurisdiction. One boundary is absolute: an authority may not be judge and party — it cannot compete as an operator inside a scope it controls ([[43_PUBLIC_INSTITUTION_EXCLUSION_AND_C007_RESOLUTION|docs/43_PUBLIC_INSTITUTION_EXCLUSION_AND_C007_RESOLUTION.md]]).

Several elements may remain centralized, tutored, or country-specific:

- legal rights and guarantees;
- official identity requirements;
- treasury custody;
- tax authority integration;
- sanctions and recovery;
- appeals and due process;
- protected essential service floors;
- national or regional planning scopes;
- permits and legally required documents;
- emergency or security exclusions;
- pilot scope and operating mode.

The architecture is therefore hybrid.

It distributes what can be made projectizable, evidentiary, contestable, and auditable.

It preserves centralized or legally recognized authority where coercion, rights deprivation, macro-fiscal stability, universal guarantees, national security, or formal legal adjudication require it.

## Limitations, stated as limitations

Under the project's own editorial rule ([[P007-integrate-or-bound-rule|knowledge/principles/P007-integrate-or-bound-rule.md]]), what the model does not solve is declared with its residual risk attached, not hidden in scope language. The principal declared limitations:

- **Agenda-setting is centralized in the transition modes, and it matters most.** In the closed and tutored operating modes used for pilots, the implementing authority constructs Planning Scopes, and whoever constructs them shapes everything downstream; the simulation shows the informational quality of the scope's weight vector dominates allocation quality, whoever supplies it. This is a property of the transition modes, not of the architecture: engaged citizens allocate manually, delegate, or configure profiles, and a pre-registered experiment (E4) found that constructing the weights from aggregated citizen signals is viable and scale-robust in the model. The remaining open problem is the elicitation mechanism that keeps dispersed signals honest under gaming and clientelism pressure (`docs/87`, `docs/91`).
- **Fiscal dependence is measurable, not enforceable.** A determined treasury can still defund the system in full public view; only country law can bind it (`docs/88`).
- **Open-mode constitutional mechanics are deferred by design.** Who votes on protocol changes in a mature open deployment is unresolved, and open-mode deployment is gated on resolving it (`docs/91`).
- **Verification cannot be conjured.** In thin markets the model prices weak verification through financial terms and disclosure; it cannot create qualified verifiers (`docs/90`).
- **Adoption selects.** The model answers whether the architecture can be built and whether it delivers more value — not whether any authority wants it. Deployment configuration for an authority that has decided exists (prospective baselines, credit attribution, official protection, a symmetry clause: `docs/109`), but the architecture will plausibly be adopted first by relatively clean or newly arrived sponsors, in the places that need it least.
- **Off-platform misconduct is made harder and more discoverable, never impossible.** Collusion, clientelism, and expressive polarization conducted entirely outside the system remain the comparative claim's boundary (`docs/98`, `docs/99`, resolutions of A018/A030/A031).
- Beyond these, the minimal model does not attempt: full constitutional replacement, full national budgeting, coercive security, criminal justice, monetary policy, full administrative law, universal moral ranking, perfect participation equity, perfect evidence verification, or the elimination of all fraud.

Its claim is more modest:

> For bounded public project domains, a project-based architecture can improve traceability, accountability, evidence quality, disbursement discipline, and reputational feedback compared with opaque institutional allocation alone.

## Where this sits in the literature

The model builds on known ground and says so. The civic wallet generalizes Friedman's voucher intuition — citizen-directed public money — from choosing service providers to allocating verifiable projects. Ostrom's design principles for self-governed commons — bounded scope, accountable monitoring, graduated sanctions — reappear here as software-enforced objects. Participatory budgeting (Wampler's Brazilian evidence and its successors) established citizen allocation but documented engagement decay and a weak link between allocation and verified delivery — precisely the two margins this model redesigns. The DAO literature demonstrated rule-encoded collective funding and its plutocratic failure modes, which this model avoids by rejecting token voting and anonymous actors. And the field-experimental audit literature (Olken's Indonesian road projects) cautions that professional verification outperforms crowd monitoring for procurement fraud — a caution this architecture absorbs by making professional fiscalization, not crowd observation, the payment-gating layer. Full citations and positioning are in the companion manuscript (Section 2 of the manuscript).

## Why this is not just participatory budgeting

Participatory budgeting usually focuses on citizen selection or prioritization of projects.

This model goes further. It asks:

```text
What exactly was promised?
What evidence will prove it?
Who executes?
Who fiscalizes?
When is money released?
What happens if evidence is weak?
How do complaints affect payment and closure?
How does performance affect future trust?
```

The model is therefore not merely participatory allocation. It is participatory allocation plus evidential contract, fiscalization, conditional disbursement, closure accountability, and role-specific reputation.

## Why this is not just procurement

Traditional procurement often begins from institutional planning, technical specifications, and supplier selection.

This model begins from public value commitments inside an eligible Planning Scope and makes value verification, evidence, citizen contestation, and reputation central to the lifecycle.

Procurement asks:

```text
Was the contracted thing delivered?
```

This model also asks:

```text
Was the promised public value verified?
```

## Why this is not just a DAO

The model does not assume that token voting, smart contracts, or decentralized consensus are sufficient for public governance.

It requires verified actors, public scopes, evidence obligations, fiscalization, privacy rules, complaint paths, legal and country-specific boundaries, protected floors for essential services, non-retroactive protocol changes, and role-based reputation.

The architecture may use digital infrastructure, but it is not reducible to on-chain voting or automatic execution.

## Minimum publishable contribution

This is a working paper in institutional design, at the intersection of public administration, mechanism design, and civic technology. Its central theoretical contribution is the functional distribution principle, stated precisely in the companion manuscript: a layer of state activity is a candidate for distribution only when three conditions hold together —

```text
its failures under monopoly are information and incentive failures,
not coordination-of-force failures;
distributed provision can be made more observable than monopoly provision;
and the layer can be bounded so its failure does not cascade into
the non-distributable layers.
```

The principle is made concrete in a complete architecture and validated formally, computationally, and adversarially (manuscript Section 3). The minimum contribution can be stated as follows:

```text
This paper proposes a functional architecture for distributed public project governance. It decomposes public-resource allocation into a project lifecycle governed by Planning Scopes, Value Theses, Evidential Contracts, Conditional Funding, Control Packages, Milestone Disbursement, Closure Accountability, and Reputation Updates. The model shows how bounded public projects can be opened to distributed participation without relying on popularity alone, executor self-reporting, or uncontrolled transfer of funds.
```

## Open research questions

Honesty requires separating what the corpus has already answered from what remains genuinely open.

Already answered inside the corpus (with pointers, so reviewers do not re-litigate them blind):

- *Which public function first?* Local sports and recreation — argued below and in [[H053-sports-as-transition-pilot|knowledge/hypotheses/H053-sports-as-transition-pilot.md]].
- *How much burden for small projects?* The proportional burden ladder, set by threshold policy, never self-selected (`knowledge/hypotheses/H020`, `docs/78`).
- *How are fiscalizers selected in high-risk cases?* Protocol assignment plus independent corroboration for critical milestones, with the collusion-proofness condition derived formally (the collusion-observability resolution and the formal note).
- *How do tutored modes transition?* Through published operating modes with maturity metrics, and open mode is gated on resolving constitutional mechanics (`knowledge/hypotheses/H058`, `docs/91`).
- *Does the model depend on high citizen attention?* No — the simulation shows the default anchor carries allocation quality and decay is buffered where the anchor is strong (the simulation results).

Genuinely open:

- How should metric weights be calibrated across project types — and against which participatory-budgeting datasets?
- What is the best decay mechanism and window for role reputation?
- How should affected-party participation be balanced against project feasibility in high-exposure projects?
- How should legal recovery, guarantees, sanctions, and complaint appeals integrate with each country's administrative law?
- Who should operate the platform — public authority, independent civic body, or hybrid — and under which accountability regime?
- Who should construct Planning Scopes once pilots mature — the architecture's declared open problem, and by the simulation's evidence, its most consequential one?

## Recommended first pilot

The best first pilot should not be the entire state.

It should be a bounded domain with visible outcomes, manageable risk, local actors, and clear evidence possibilities.

A strong candidate is:

```text
local sports and recreation projects
```

Reasons:

- outcomes are visible;
- beneficiaries can be identified with privacy protections;
- attendance and participation can be evidenced;
- projects are relatively small;
- local organizations can execute;
- fiscalization can be proportional;
- citizens understand the value;
- failure modes are real but manageable.

Technically, a pilot's preconditions are already specified rather than improvised: the schema draft defines the minimal validation gates any implementation must enforce (no publication without a coherent evidential contract, no disbursement without review basis and financial-order path, no state transition without an audit event), and it names the integrations that remain external by design — identity provider, treasury custody, and legal registries (the schema draft, referenced above).

## Final summary

This model proposes a bounded, project-based governance layer for public resources.

It does not ask citizens to blindly trust a ministry, a contractor, a platform, an AI model, or a crowd.

It asks each project to make a measurable value promise, define how that promise will be evidenced, receive conditional funding, submit to independent control, release funds by verified milestones, preserve a full audit trail, and update role-specific reputation according to verified fulfillment.

The deeper motivation is political: to test whether technology can help realign incentives, expand meaningful citizen participation, reduce corruption opportunities, and distribute parts of public governance without requiring the destruction of existing institutions.

In one sentence:

> The model turns public funding from a one-time act of allocation into a traceable lifecycle of promised value, evidence, control, disbursement, closure, and reputation.
