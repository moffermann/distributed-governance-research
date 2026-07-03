# Core v0 Scope Freeze

## Purpose

This document freezes the first coherent scope of the Distributed Governance System v0.

The goal is to stop uncontrolled conceptual expansion and define what belongs in the first version of the model, what should remain as later extension, what depends on country implementation, and what is out of scope.

## Status

Accepted as Core v0 scope freeze.

This does not mean the system is finished. It means the baseline architecture is bounded enough to formalize, diagram, stress test, and eventually turn into a paper or prototype.

## Core v0 thesis

> Core v0 is a project-based distributed governance system where citizens allocate public resources to verifiable projects, projects declare measurable value, execution is accountable, contextualized evidence is produced, fiscalizers review fulfillment, funds are released by milestones, and the full process remains auditable.

## Scope rule after freeze

New ideas must be classified before entering the architecture:

```text
Core v0
Extension v1+
Country implementation
Out of scope
```

A new idea may enter Core v0 only if it is necessary for the model to work coherently, resolves a contradiction, addresses a serious failure mode, or clarifies an existing v0 element without expanding the architecture.

## Core v0 includes

### 1. Actor model

Core actor types:

```text
Citizen
Organization
```

Organization is a neutral umbrella for eligible collective actors such as companies, nonprofits, universities, clubs, associations, cooperatives, unions, NGOs, local groups, concessionaires, state-owned operators where eligible, and similar entities.

Organization type, ownership, control, and authority relationships are attributes, not separate actor classes by default.

Integrated C007 correction:

```text
Core v0 excludes public authorities from internal roles in any scope where they exercise authority.
State-owned or publicly owned operators may be eligible only when the active C007 boundary is satisfied.
```

Public authorities remain external legal, budgetary, auditing, regulatory, tutored-scope, or infrastructure actors. They do not use authority over a scope to propose, execute, fiscalize, moderate, or compete for distributed project financing inside that same scope. State-owned operators may participate as ordinary eligible organizations only where they disclose control relationships, receive no privileged approval or review path, and accept the same accountability rules as other operators.

### 2. Role model

Core roles:

- proposer;
- modeler / designer;
- executor;
- fiscalizer;
- evidence producer;
- funder;
- follower;
- commenter;
- complainant;
- beneficiary;
- affected party;
- delegator;
- delegate;
- moderator where protocol-defined and not a public authority acting as an internal participant in a scope it controls;
- evaluator where enabled.

Roles are accumulable unless conflict rules prevent it.

Examples:

- executor should not fiscalize its own project;
- fiscalizer should not validate where there is direct conflict;
- delegate acts only inside accepted scope;
- executor responsibility begins when executor accepts the project design.

Related-party relationships do not automatically invalidate a project, but they must be declared and classified. Low or indirect conflicts may proceed with visible warnings; relevant conflicts may require independent control and public-benefit safeguards; severe or hidden conflicts may require reformulation, actor exclusion, disbursement blocking, rejection, or a role-specific responsibility review.

A014 reinforces this as a minimum related-party relationship graph and severity model, not a new Core v0 entity. The graph is observability over declarations already required by `RelatedPartyConflictReview` and the role model, covering ownership and control chains, board or management control, material supplier and subcontractor relationships, repeated fiscalizer/evidence-producer relationships, delegate or funder relationships to project actors, and authority-linked operator status where material; declared proximity stays proportional while hidden or control-relevant relationships escalate to correction, blocking, exclusion, complaint, responsibility, or reputation effects. The same graph serves A018 collusion observability. Core v0 does not require beneficial-ownership verification or corporate-registry integration; verification depth is a country implementation decision and graph analytics remain Extension v1+.

A018 reinforces this further as collusion observability over existing objects, not a detection engine. Because role separation is necessary but not sufficient, Core v0 exposes relationship, repetition, timing, and outcome patterns across project roles and material suppliers: repeated actor-cluster visibility across projects, the same A014 relationship-and-control graph reused across roles and suppliers, timing-anomaly and outcome-pattern review surfaces feeding human review, independent corroboration for critical milestones, the verified-discovery route for hidden coordination, and cross-role responsibility events where collusion is confirmed. Core v0 does not require an automated collusion-detection engine, network-analysis scoring, or investigative capability; pattern surfaces feed human review, complaint, and verified-discovery paths, prosecution remains external law, and the claim is comparative — collusion becomes harder, riskier, and more discoverable than under opaque institutional monopoly, while purely off-platform coordination among formally compliant actors can remain invisible.

A019 adds an Allocation Mandate record on Planning Scope, not mandate-construction machinery. Every active Planning Scope records the democratic mandate that authorized its budget migration and allocation formula — mandate source, authorizing legal instrument, migrated share, formula version with an explicit higher-authorization flag and authority for departures from equal-per-citizen, and version history — distinct from the procedural Administrative Rule Change machinery. Core v0 records and exposes that mandate; it does not create, validate, or adjudicate it, so mandate construction remains external constitutional law and country implementation, and the democratic-deficit critique of substituting atomized allocation for representative appropriation stays a recorded open normative debate.

A020 is bounded as an open limitation, not solved. Whoever constructs Planning Scopes exercises the second face of power, deciding what citizens may fund at all before allocation, support, or fiscalization occurs, and Core v0 adds no scope-construction mechanism. It carries interim observability over existing objects instead: every Planning Scope shows its Allocation Mandate record and versioned definition, scope changes and interpretations surface as Governance Resolutions with timeouts, and out-of-scope demand stays visible as Ideas with per-category volume observability, so agenda-setting power is documented, versioned, and contestable through visibility only. Who constructs the roadmap remains the acknowledged constitutional gap and a blocker for open-mode deployment at scale — deferred, not denied.

A021 adds a Fiscal Commitment Profile on Planning Scope plus fiscal-reliability observability, not a fiscal-enforcement mechanism. The state still controls the fiscal spigot and can strangle the system quietly through late or partial delivery, mid-cycle reduction of the migrated share, zero indexation, or unexecuted valid orders while the platform shows green funding states. Each active Planning Scope carries a public, versioned Fiscal Commitment Profile — migrated percentage, indexation rule, delivery-latency target, and cycle horizon — whose changes are visible governance events with reason, magnitude, affected scopes, and beneficiary impact; delivery and execution reliability surface as public signals attributable to the fiscal authority: expected-versus-actual delivery of signed balances, order-to-execution latency, an unexecuted-valid-order indicator, and a real-value-preservation warning where amounts are not inflation-adjusted, feeding the H054 transition metrics and A016 incumbent-resistance indicators. Core v0 records and surfaces fiscal behavior but enforces nothing — no software can compel a sovereign to pay, so credible commitment stays a matter of law and a determined treasury can still defund the system in full public view.

A033 adds a Duty-of-Care Anchor named before disbursement, not a liability-adjudication mechanism. When harm to a third party results from the interaction of adequately-performed roles, the responsibility matrix can truthfully find no internal breach, C012 forbids blame by association, and P003 assigns responsibility to "the project," which is not a legal person a victim can sue. Every execution-financeable project therefore names, before disbursement, the solvent, reachable legal person or persons answerable to third parties for physical and safety harm — executor, guarantor, insurer, or designated responsible operator — exposed on the citizen-facing sheet; the Financial Assurance and Post-Closure Coverage profiles extend to third-party liability coverage proportionate to physical risk where Threshold Policy requires; versioned documentation records that distributed micro-allocation does not dilute the state's duty of care; the responsibility matrix distinguishes "no role breached its internal obligation" from "no one is liable to the victim"; and the audit trail preserves a court-usable harm-attribution package. Core v0 records the duty-bearer and provisions coverage but does not adjudicate fault or apportionment — that stays external law, and a named anchor guarantees a reachable defendant, not a just outcome.

A022 adds control-supply density observability by territory and domain plus disclosed thin-market handling routes, not a mechanism that creates verifiers. Where the admissible set of independent, unrelated, affordable fiscalizers is genuinely thin, supply-density signals — eligible fiscalizers and evidence producers per scope, offer rates, fee levels, and repeat-assignment concentration — attach to the existing Planning Scope, Control Subproject selection, and fiscalization records, and a thin-market indicator names the structural gap before publication rather than at control-package closure. Thin-market handling is an explicit, disclosed country-implementation choice, and priced compensation for weak verification raises the guarantee rather than lowering the standard. Core v0 records and surfaces control-supply density but cannot conjure qualified verifiers; supply creation through training and accreditation subsidies is country implementation, and a genuinely empty market leaves a monopolist controller and unavoidably conflicted selection unresolved.

A023 gates open-mode deployment, it does not define the amendment rule. C019 and H017 fix the procedural envelope of rule change but decline to specify how a non-tutored open-mode protocol change is decided, so no public function may exit into open mode until constitutional-level decision mechanics — who votes, with what weights and quorum, and how constitutional rules differ from operational parameters — are resolved and published. The C019 procedural shell stays binding in every mode, tutored and semi-open pilots run indefinitely under existing Governance Resolution and Review Timeout machinery, no future proposal may define the mechanism that ratifies it, and participation and concentration metrics attach to any protocol-change vote. Core v0 records the gate but leaves the mechanics undefined by design, and full constitutional meta-governance remains Extension v1+.

A024 adds salience-bias observability above the protected floor, not preference correction or a welfare function. Atomized voluntary allocation inherits the salience, warm-glow, and photogenic-output biases of charitable giving, so above the essential floor abstract, preventive, statistical-life goods can be under-allocated, while the non-assignable pool and essential floors (A005) already exclude the catastrophic-underprovision cases. The salience gradient becomes an observable property — funding per category against declared planning-scope need weights across salient-versus-non-salient and preventive-versus-remedial lanes — and default allocation rules route inactive budget by planning priority rather than salience, with any default weighting toward under-allocated non-salient categories a disclosed, versioned protocol choice gated by threshold policy. Core v0 exposes the gradient and routes defaults but does not correct citizen preferences, and portfolio rebalancing beyond defaults is Extension v1+.

A025 adds engagement-decay and active-core observability joined to functional transition maturity, not participation quotas. Each citizen's monthly allocation is individually small, so most route it through the cheapest channel and active evaluation decays after launch, leaving a shrinking, self-selected active core displayed as the will of the whole. The mix of manual, profile-driven, delegated, and untouched-default allocation becomes a measured, versioned public property of each cycle, active-core concentration is tracked across cycles, citizen-facing legitimacy language distinguishes deliberate evaluation from carry-over, and these signals feed H054 functional transition maturity; the simulation vindicates the designed-intermediation position, with allocation quality carried by the institutional default anchor conditioned on planner knowledge. Core v0 measures and discloses the participation mix but does not mandate engagement, and cohort-refresh and sampling remain Extension v1+.

A026 adds declared identity-provider failure modes plus purpose-bound access auditing, not anonymity or a detection engine. The verified-identity baseline (P004) makes the external identity provider the system's deepest dependency, whose compromise, coercion, or misconfiguration can mint Sybil identities or silently exclude citizens, while binding a real identity to every civic act chills complaints against powerful actors. The provider becomes a declared critical dependency with enumerated failure modes and compromise-response procedures, every access to act-to-identity linkage is an AuditEvent carrying its purpose and checkable by an independent party, protected-identity contexts (C014/C024) are retained with a heightened adversarial de-anonymization threshold for complaints against powerful actors, and verified identity is preserved as the anti-Sybil baseline. Core v0 governs the marginal linkage of civic acts through purpose-limited logged access; provider-independent anomaly detection, federation, and substitution remain Extension v1+.

A027 adds herding observability, not a visibility redesign. Visible funding progress, active-support counts, and delegate follower numbers turn each allocation into social proof that later, weakly-informed citizens imitate, so early advantages compound into cascades only loosely correlated with value. Funding progress stays visible while the platform surfaces the cumulative-advantage dynamics — funding-velocity-versus-evidence-maturity indicators, funding-source independence signals, discovery-slot concentration observability, and funding-target closure (H035) retained as the structural cascade truncator with its claim stated honestly. Per the simulation, closure lowers concentration and lifts completion breadth but does not by itself improve quality selection, which lives in the default anchor. Core v0 measures and bounds herding rather than preventing it; blind early windows, staged reveal, and exposure equalization remain Extension v1+, and visible social proof is intrinsic to a transparent funding surface.

A028 adds per-territory and per-group outcome observability, not equalization. Even with equal per-citizen wallets, allocation outcomes concentrate where social capital, organizational density, and proposal-writing capacity already concentrate, and horizontal equity requires equalization the model does not contain. Core v0 mandates that the distribution of outcomes be measured — funding per capita by comuna as a standing versioned metric, funded-project density against need weights, capture share by organized proposers, and an explicit input-equity versus outcome-equity distinction. Equalization capability is documented as available and unmandated — redistributive and hybrid allocation-amount formulas (H025), planning-scope lanes and the A005 floor-and-lane pattern reused for a territorial or group equity target, the H033 default rule's territorial routing, and supply-side support in low-capacity territories — each a versioned, publicly authorized, auditable country-implementation choice. Core v0 makes the gap measurable for the first time but does not close it; how much to equalize is a political choice, not an architectural one.

A029 strengthens Composite Program dependency coordination without abandoning per-project accountability. Decomposing public action into independently funded projects can strand complementarities where one component is worthless without another, and each component still lives or dies by its own funding attempt. A project may declare hard dependencies on other components inside a Composite Program (H051), visible before citizens fund; program-level funding coherence shows funded and unfunded components with stranded-complement warnings when a prerequisite funds and its dependents do not; dependent components' windows can reference their prerequisites' state; and procurement-scale losses are acknowledged as a real cost of modularity. Components keep independent funding attempts — Core v0 makes no all-or-nothing program funding, and conditional or escrowed bundle funding, shared procurement, and shared control packages remain Extension v1+, so complementarities can still strand when prerequisites fund and dependents do not.

A030 adds pattern-level clientelism indicators while keeping sanction in external law. Clientelist machines migrate into new institutions as delegates, participation-support providers, or intermediaries, exchanging allocation behavior for off-platform favors invisible by construction. The platform makes the on-platform half traceable and surfaces repeated patterns over time — repeat broker-beneficiary alignments across cycles, geographic delegation blocs correlated with related-project funding, and participation-support providers whose assisted citizens concentrate on related actors — feeding review, complaint, and verified-discovery paths as leads, never automatic verdicts, through the A014 related-party graph and delegation records rather than a new entity or a hard anti-broker ban. Participation-support projects carry anti-conditioning declarations and independent beneficiary confirmation, and a citizen can revoke a delegation privately for future actions. The off-platform quid pro quo remains invisible and sanction routes to external law; a careful machine trading entirely off-platform and splitting influence across entities remains undetectable from within.

A031 fixes a motive-neutrality boundary and adds mobilization-pattern observability. Allocation can become an identity battleground of tribal signaling, brigade-funding, and boycott campaigns, but expressive, identity-driven allocation is legitimate citizen choice and the platform does not police motive. Citizens' reasons for funding are outside the platform's authority (P002), so no motive-policing and no viewpoint moderation of allocation; material effects stay gated identically regardless of motive — antivalue declarations route through measurement and fiscalization, affected-party evidence and threshold policies bind, and a contested antivalue supports a complaint only if someone files one; funding-bloc correlation (synchronized timing, shared origin, reciprocal brigading) is research and administrative data only; and funding-target closure (H035) bounds brigade amplitude on any single project. A platform that discounted "tribal" support would arrogate exactly the authority over value P002 denies it, so the fight is kept materially accountable, not suppressed; expressive allocation can still shift spending toward symbolic battlegrounds.

A032 adds long-horizon lanes and intertemporal observability while keeping the existing shields. Monthly cycles reward visible near-term outputs and renewal windows re-expose long-horizon commitments to shifting attention, so hyperbolic discounting tilts new funding away from maintenance, prevention, and intergenerational infrastructure, and future citizens are unrepresented in every funding attempt. Planning Scopes may define long-horizon lanes — maintenance, prevention, infrastructure — whose need-weights flow into the default allocation as a transparent versioned choice; intertemporal allocation is observable through funding share by time-to-benefit horizon and deferred-maintenance indicators; continuity-risk classification (A006) and the non-assignable pool are retained as the structural shields; and renewal windows are made visible before expiry. Core v0 does not discount-correct citizen preferences or force intergenerational weights, and multi-cycle or endowment lanes insulated from per-cycle attention remain Extension v1+; formation bias above the floor is mitigated only insofar as planning-scope lanes and defaults carry it, tying this to the A020 agenda constraint.

### 2a. Idea object

Core v0 includes `Idea` as a separate civic-demand object.

An idea may be visible, followed, commented on, refined, and associated with future projects.

An idea is not financeable for execution.

Rule:

> Ideas capture demand. Projects execute responsibility. Financing applies to projects, not ideas.

### 3. Project object

The project is the basic financeable and executable unit.

A project must include:

- problem;
- solution;
- territory;
- Planning Scope reference;
- Primary Responsibility Anchor;
- promised value;
- value icons;
- beneficiaries;
- responsible executor;
- budget;
- project phases where applicable;
- milestones;
- metrics;
- Project Evidential Contract and fulfillment evidence obligations;
- Financial Assurance Profile;
- Post-Closure Coverage Profile where execution funding is allowed;
- Continuity Risk Classification where the project is recurring, continuity-critical, emergency, or maintenance-dependent;
- fiscalization requirements;
- related-party and conflict declarations;
- risks;
- antivalues;
- funding target;
- funding deadline or funding window;
- active Funding Attempt and attempt history;
- reformulation policy or policy reference;
- threshold policy or policy reference;
- social support and justified objection signals;
- closure conditions;
- Project Closure Accountability Record;
- lifecycle state;
- audit trail.

Rule:

> Public executorless demand is an Idea, not an open financeable project. A project cannot be published for execution financing without an identified and accepted responsible executor.

Rule:

> Each project should expose the applicable threshold policy that explains which proportional conditions must be satisfied for publication, execution-ready status, disbursement, or closure. ^r97a50a88

Rule:

> For projects with rights, access, vulnerable-beneficiary, territory-wide, common-good, or high affected-party exposure, the applicable threshold policy should require proportional affected-party mapping and consultation conditions. These conditions may require nearby-project notification, an observation window, field visits, plan presentation, community meetings, surveys, neighborhood documentation, independent evidence-producer input, fiscalizer review, or competent-authority trace. They are not a universal vote or automatic veto.

Continuity rule:

> Projects that create ongoing service, staffing, maintenance, emergency, or beneficiary-dependence obligations should declare a Continuity Risk Classification before funding. The classification should expose whether the project is one-time, phased, recurring, continuity-critical, emergency, or maintenance-dependent, and should include the minimum funded period, future funding dependency warning, beneficiary-protection rule, wind-down rule, and renewal visibility where applicable.

Funding-window rule:

> Projects, phases, and financeable lanes may not hold civic commitments indefinitely. Each financeable lane should have a visible Funding Attempt with window start, window end, target, extension policy, attempt number, and fund-treatment rule. If the attempt expires without financing closure, the outcome is Expired Unfunded unless a bounded objective extension or reformulation path applies. Eligible unused commitments return, reassign, or follow the citizen's default rule.

Comparative accountability rule:

> Core v0 may require more participation and accountability than many current project processes provide. The point is not to replicate current weak practice, but to create lower-cost participation with broader reach, greater visibility, and more traceable feedback.

Rule:

> The applicable threshold policy should include or reference a procedural burden profile. AI may help discover required documents and missing conditions, but document acceptability is validated only by the competent authority, independent reviewer, certifier, fiscalizer, or protocol-defined review body where the active policy requires it. ^r686efce3

Rule:

> Thresholds, procedural burden profiles, assurance requirements, and post-closure coverage requirements must not be self-selected by the proposer, designer, or executor when lower classification reduces guarantees, evidence, fiscalization, documents, review obligations, coverage windows, or coverage scope.

Rule:

> Funding, support, justified objection, and formal complaint are separate project signals. Support and justified objection are reversible; funding and formal complaints follow their own rules.

Rule:

> Funding completion does not establish project legitimacy. Citizen-facing surfaces should distinguish `funding complete` from unresolved affected-party issues, community-consultation evidence, public-access conditions, Planning Scope disputes, complaints, or competent-authority requirements.

Rule:

> Every financeable project must have one Primary Responsibility Anchor. Secondary contributions are allowed, but they cannot hide what the project is primarily funded to deliver. Formal secondary commitments require proportional metrics, fulfillment/control evidence, and consequences.

Rule:

> Every financeable project must align with an active Planning Scope. Core v0 requires the scope used for eligibility to be visible, versioned, and auditable, but it does not define the full mechanism for constructing a national, regional, communal, or thematic roadmap. ^r3ec590bd

Essential service protection rule:

> Where a Planning Scope affects essential guarantees, continuity, emergency capacity, redistribution, vulnerable beneficiaries, universal access, or low-visibility groups, it should identify the protected guarantee floor, service-provision lane, planning-continuity target where applicable, funding-lane treatment, underfunding indicator, and cream-skimming safeguards. Essential service protection does not exclude distributed service provision; it prevents essential floors and continuity targets from being hidden inside popularity cycles or central political discretion.

Rule-change rule:

> A government, authority, protocol, or tutored administrator may revise an essential planning target only through a public, versioned, auditable Governance Resolution, Administrative Rule Change, or equivalent trace that states effects on existing projects, beneficiaries, continuity obligations, protected floors, and distributed funding lanes. ^r6ed8fe0e

Rule:

> Project phases are part of Core v0 where they are needed to keep funding, deliverables, verification, and disbursement coherent. A design-and-execution project may receive execution-phase commitments while design is pending, but execution funds cannot be released until the design phase gate is accepted.

### 4. Value thesis, value icons, and metrics

Each project must declare what public value it promises.

Core rules:

- every published project must have at least one value thesis;
- every financeable project must organize its value thesis around one Primary Responsibility Anchor;
- value icons are not marketing decorations;
- selecting a value creates metric obligations;
- metrics require fulfillment evidence;
- each declared value floor, formal secondary value, antivalue ceiling, material value claim, and relevant metric requires an evidence-coverage check;
- core value commitments should map to fulfillment evidence needs;
- formal fulfillment/control evidence for hard KPIs requires producer qualification and method standards proportional to the metric;
- value commitments are value floors the project must reach;
- relevant antivalues should be declared as ceilings the project must not exceed;
- antivalue ceilings require proportional fulfillment/control evidence, measurement or review method, affected scope, and consequence where applicable;
- each project must define a proportional Project Evidential Contract;
- value verification uses a package of metrics, fulfillment evidence, qualitative context where relevant, beneficiary signals, fiscalizer judgment, complaints, and contradiction channels;
- vague value claims must be reformulated before publication.

### 5. Value catalog and metric validator

Core v0 includes:

- value catalog;
- AI-assisted value search;
- AI-assisted value generation when needed;
- metric validator;
- hard validation rules;
- semantic validation for weak or mismatched metrics;
- fulfillment evidence requirement checks.

Rule:

> Search first. Generate only when necessary. Accept a value only with measurable and verifiable commitments.

### 6. Beneficiary model

Core v0 distinguishes:

- direct beneficiaries;
- indirect beneficiaries;
- estimated beneficiaries;
- confirmed beneficiaries;
- affected parties.

Projects must clarify who benefits and how beneficiaries are counted or confirmed.

### 6a. Project Evidential Contract

Core v0 includes a Project Evidential Contract.

The contract defines how project fulfillment will be evidenced before execution starts. It connects value promises, value floors, formal secondary values, antivalue ceilings, metrics, milestones, material information claims, risk and antivalue declarations, fulfillment/control evidence types, evidence-coverage status, fulfillment evidence source roles, producer qualification standards, measurement/review method standards, corroboration requirements, fiscalizer review, disbursement effects, complaint paths, closure evaluation, responsibility, reputation, and privacy/access rules.

The contract is project-specific and proportional, but constrained by value-catalog requirements, protocol minimums, threshold policies, operating mode, risk, and competent-authority boundaries where applicable.

The contract defines fulfillment/control evidence needs, not preselected evidence producers. Each need should state not only what must be evidenced, but also the qualification and method standard required when the evidence has a hard KPI or formal-effect use. Independent evidence producers may later offer fulfillment/control evidence tied to a value floor, antivalue ceiling, metric, material claim, milestone, phase, risk, or declared antivalue. Contract-matched fulfillment/control evidence has higher eligibility priority only when the offer satisfies the required producer qualification, method, metadata, and report standard. Unexpected fulfillment/control evidence may still be accepted when equivalent, necessary, materially useful, or complementary within the available control budget.

The value-verification package should include an A004 evidence-coverage check. It should mark `coverage complete`, `coverage weak`, `coverage gap`, `metric gap`, or `under correction` before funding and before formal effects. Missing coverage means the project has not shown how the promised value or antivalue will be verified; poor submitted evidence is handled later under A013.

Core v0 also includes a `Required Evidence Package`.

The package contains `RequiredEvidenceNeed` records required by threshold policy, phase gates, public-function rules, common-good exposure, affected-party exposure, legal/technical conditions, or country implementation. It applies to projects and project phases. Ideas may carry optional required-evidence drafts when that helps maturation, but an idea should not be blocked merely because it lacks project-level readiness evidence.

Where legitimacy conditions apply, the required package may include design-phase or preparation-phase `Readiness Evidence` needs for affected-party mapping, plan review, community consultation, asynchronous observations, survey records, neighborhood-organization evidence, unresolved objections, and independent corroboration. Pre-execution consultation evidence is not automatically final fulfillment evidence, but it may be required before execution-ready status. Later affected-party observations may become fulfillment/control evidence for declared values or antivalues.

Citizen-facing views should summarize it as "how this project will be verified"; Layer 5 preserves the full versioned contract and changes.

### 7. Contextualized evidence model

Core v0 distinguishes `Complaint Evidence`, `Readiness Evidence`, `Fulfillment Evidence`, `Control Evidence`, `Contradiction Evidence`, `Administrative Observability Data`, and `Research Evidence`.

`Evidence Item` may remain as the generic object only when it records an explicit evidence context.

Fulfillment Evidence can be produced by executor, fiscalizer, evidence producer, beneficiary, funder, open observer, documents, or integrations.

Fulfillment Evidence must be linked to project, milestone, metric, material information claim where applicable, producer, producer qualification basis where formal evidence is required, method or protocol, instrument/tool/calibration reference where applicable, timestamp, status, and privacy classification.

Executor-produced material is self-reported support unless corroborated. Critical milestones, disbursements, and closures require fulfillment evidence produced or corroborated by evidence producers, fiscalizers, verified beneficiaries, technical records, or other non-executor sources.

Fulfillment/control evidence should also record sufficiency status for the claimed formal effect. Material that is unclear, unlinked, missing required traceability metadata, or inadequate for the relevant metric may be accepted only as contextual material, marked insufficient for fulfillment effect, rejected, or sent back for correction.

For hard KPIs, insufficiency may come from the producer or method, not only from the submitted file. A real measurement may be formally insufficient if produced by an actor without the required technical idoneity, using inadequate instruments, omitting calibration or chain-of-custody records where required, or failing to describe operations, results, limitations, and conclusions in a responsible report.

Rule:

> Insufficient evidence is not proof of fraud by itself, but it is also not proof of fulfillment.

> Paid fulfillment/control evidence is funded as formal proof work, not as casual material upload. The system should pay for technically idoneous production of evidence that can support the metric and formal effect claimed.

Complaint Evidence belongs to the complaint file. It supports, refutes, clarifies, or contextualizes an allegation and does not become fulfillment evidence unless accepted for that purpose by a fiscalizer, reviewer, competent authority, or protocol rule.

Core v0 includes material information claims as the accountable statements that connect project promises, contextualized evidence, contradictions, review, correction, responsibility, and verified discovery. Ordinary citizens may see simple reliability labels, while Layer 5 preserves the full trace.

Core v0 does not assume that current public systems lack approvers or criteria. Projects may already be approved through investment, procurement, municipal, environmental, technical, or sector-specific processes. The Core v0 rule is that material approval outputs, criteria, unresolved conditions, and limitations should not remain dispersed only in technical files. Where they affect funding, legitimacy, execution readiness, disbursement, trust, closure, complaint review, or reputation, they should be represented as source-linked material claims or equivalent records.

Rule:

> Citizen-facing labels such as `approved`, `almost funded`, `execution-ready`, `recommended`, or AI-generated summaries must expose material warnings and source categories when unresolved conditions remain.

Verified discovery may be rewarded or recognized only after review confirms materiality and usefulness. AI may assist with anomaly, duplicate, privacy, or contradiction detection, but it does not decide truth, fraud, responsibility, fund release, or legal consequences.

### 7a. Evaluation context model

Core v0 includes `EvaluationRecord` as a technical audit object for formal evaluations. ^rb7d40b09

Formal evaluation is dimension-scoped and effect-scoped. A citizen observation, beneficiary experience, technical review, fiscalization conclusion, complaint finding, fulfillment evaluation, and reputation input may all concern the same project, but they do not have the same authority or effect.

An EvaluationRecord should preserve the evaluation context, evaluated dimension, actor role, observability basis, authority or qualification basis where relevant, contextualized evidence used, evaluation type, formal effect, review status, and audit trace. ^r10f159f2

Ordinary citizen interfaces should remain simple: users report what they saw, experienced, confirmed, contradicted, or complained about. The technical layer records whether that input remains a soft public signal or becomes part of a formal fulfillment, disbursement, closure, complaint, responsibility, or reputation review.

### 7b. Distributed trust principle

Core v0 includes distributed trust as a cross-cutting principle, not as a separate role or bureaucracy.

Distributed trust means that confidence in project information, evidence, fiscalization, disbursement, delegation, reputation, and governance decisions should emerge from:

- role-specific incentive alignment;
- accountable material claims;
- contextualized evidence;
- corroboration and contradiction paths;
- responsible review;
- payment, disbursement, reputation, correction, revocation, or responsibility consequences where applicable;
- auditability.

Rule:

> Trust is not created by believing more actors. It is created when the system aligns incentives and makes claims verifiable, contestable, reviewable, and consequential.

Citizen-facing trust labels may remain simple, such as self-reported, corroborated, disputed, contradicted, accepted, insufficient, corrected, or reviewed. Layer 5 preserves the full claim, evidence, incentive, review, and consequence chain.

### 8. Fiscalization model

Core v0 includes accountable fiscalization.

Fiscalization is distributed in available actors and evidence sources, but protocol-selected in responsible assignment. Open observation, fulfillment evidence production, complaint evidence submission, responsible fiscalization, and technical or reinforced fiscalization remain distinct layers.

```text
Executor executes.
Evidence producers produce fulfillment or control evidence.
Fiscalizers evaluate compliance.
Citizens observe, comment, contradict, and denounce.
```

The executor should not freely appoint or directly control the fiscalizer that validates its own performance.

Fiscalization is proportional to project size, complexity, risk, territory, and beneficiary vulnerability.

Fiscalization, fulfillment evidence missions, technical review, and admissibility review may be modeled as Control Subprojects with budget, methodology, deliverables, fulfillment evidence, producer qualification criteria, comments, auditability, and reputation. Control selection must be protocolized, conflict-checked, risk-adjusted, and auditable.

Responsible fiscalizer assignment should expose a project-specific fiscalizer eligibility and reputation profile. The profile is a contextual read model, not a generic CV, universal score, or automatic selection authority. It should show the applicable eligibility criteria, whether the fiscalizer satisfies this project's expertise, credential, logistics, availability, workload, methodology, budget, and independence requirements, relevant comparable-project performance, and repeat-relationship or capture warnings.

Core v0 also allows limited supplemental control funding after minimum control closure: at most one secondary fiscalizer or fiscalization auditor, plus distinct additional fulfillment evidence needs. Supplemental control never funds execution, expands project scope, creates unlimited fiscalizers, or blocks execution automatically.

### 9. Funding model

Core v0 includes:

- bounded distributed resource allocation;
- assignable civic wallet separated from a non-assignable common pool;
- essential service protection through protected floors, distributed service lanes, and planning-continuity targets where applicable;
- civic wallet or civic allocation right;
- public, versioned allocation amount rules;
- equal allocation for all eligible citizens as a simple explicit formula option;
- externally provided authorized allocation amounts where sensitive data is required;
- conditional project funding;
- phase-specific funding lanes where applicable;
- continuity funding labels and renewal windows where applicable;
- funding target;
- funding window and Funding Attempt history;
- committed funds;
- no immediate release to executor;
- no ordinary withdrawal after financing;
- return, reassignment, recovery, guarantee, or retention handling only through project failure, closure, complaint, or reformulation rules;
- global Core v0 financial assurance percentage configured by administrator, active protocol, operating mode, or lawful country implementation rule;
- Guarantee Materialization Record where assurance is required;
- automatic following after funding.

Rule:

> Funding is a conditional commitment, not immediate payment and not a freely reversible expression of preference.

Distributed allocation boundary: ^r98952864

> Citizens, delegates, allocation profiles, and public default rules allocate only the configured assignable share of public-purpose resources, and only to eligible projects or protocol-authorized control, complaint-review, mitigation, planning, or fiscalization vehicles inside active scopes. Distributed allocation does not replace the non-assignable common pool, project eligibility review, execution readiness, disbursement review, or fulfillment evaluation.

Essential floor boundary:

> A protected essential floor may be non-assignable, reserve-backed, default-assigned, or otherwise protected by the active Planning Scope, while the service-provision lane may still be opened to eligible distributed projects. Ordinary citizen funding can improve, complement, expand, or compete in service delivery, but it should not be the only source of a declared minimum guarantee where the scope defines one.

Phase funding rule:

> A citizen must know whether a contribution funds design, reserved execution, minimum control, or supplemental control. Reserved execution funding may count toward a later phase but cannot be released while a prerequisite phase gate is pending, rejected, or materially reformulated.

Continuity funding rule:

> A citizen must know when funding covers only an initial service period, when maintenance is not funded, when continuity is protected by reserve or guarantee, and when a continuity renewal window or continuity-need Idea is open. A renewal window makes the need visible; it does not renew the project automatically or privilege the current executor.

Funding expiry rule:

> A citizen must know the active funding window, attempt number, extension status, and what happens to eligible unused commitments if the attempt expires unfunded. Expiry is a project/protocol outcome, not ordinary voluntary withdrawal.

Budget liquidity boundary:

> Budget Liquidity Smoothing is optional Extension v1+ or country implementation. It may manage cyclical allocation capacity against authorized annual or period budgets only through public formula, cap, stress test, reserve/coverage rule, cycle adjustment, and audit trail. It is not hidden virtual money and does not give Treasury discretionary project-priority power.

Allocation amount rule:

> The amount available to each citizen is a configurable institutional, protocol, or country-implementation rule. The platform should support equal allocation for all eligible citizens, contribution-weighted formulas, inverse or redistributive formulas, hybrid formulas, and externally calculated formulas. If sensitive tax or registry data is required, the platform should receive only the authorized allocation amount and audit reference, not the raw sensitive data.

### 10. Disbursement model

Every disbursement requires:

- phase gate acceptance where applicable;
- milestone;
- fulfillment evidence;
- fiscalizer review;
- blocking-condition check;
- rule applied;
- financial order where money movement is required;
- audit trace.

Core v0 also requires a coherent Disbursement Milestone plan before execution funding commitments. Specialized validation should check milestone fulfillment evidence, required evidence producer qualifications, measurement/review methods, release amounts, partial-release rules, retentions, advance-payment protections, and phase-gate treatment where applicable. Projects with unresolved critical validation failures cannot begin receiving execution funding commitments.

A017 adds disbursement-gaming tests over these existing milestone and assurance objects, not new payment machinery: every milestone links to budget line, phase, value relevance, evidence need, review basis, blocker check, retention, and release amount; advance payment carries recoverability, retention, direct supplier payment, guarantee, or equivalent protection; avoidably weak milestone design can trigger designer/modeler responsibility review; the fiscalizer states why the evidence supports release, partial release, retention, or rejection; and citizen-facing summaries separate funding, reservation, release, retained funds, and guarantee status. Per-project actuarial guarantee calibration and automated milestone-design scoring are not Core v0; milestone quality rests on human review backed by designer responsibility and retention.

A pending design gate is not itself a critical validation failure if the phase plan, minimum public-value baseline, reserved-fund rule, and fund-treatment rule are explicit. It blocks release, not necessarily funding commitments.

Financial assurance is universal across execution-financeable projects, not construction-specific. Care services, supply purchases, workshops, food support, infrastructure, and other social projects may all require the active global guarantee or equivalent assurance. The proposer, designer, or executor may satisfy the requirement but cannot define the guarantee percentage or self-classify into a lower assurance obligation.

Post-closure coverage is also required for execution-financeable projects where the active Threshold Policy requires it. The project should declare whether covered post-closure accountability will be handled through `Executor Direct Warranty` or `Equivalent Insurance / Bond / Coverage`. The proposer, designer, or executor may provide or pay for the mechanism, but cannot define a weaker window or scope when the policy, contract, operating mode, protocol, or country implementation controls it.

Financial execution/custody is external infrastructure. The platform or protocol may generate financial orders for release, retention, return, reassignment, recovery, guarantee execution, or balance closure. The custodian executes valid orders and reports status; it may confirm guarantee materialization where applicable, but it does not select projects, evaluate civic value, fiscalize milestones, or make discretionary disbursement judgments.

Money states:

```text
Committed
Reserved
Retained
Pending review
Approved for release
Released partially
Released totally
Paused
Blocked
Returned
Reassigned
In recovery
```

### 11. Open project and parallel closure

A published project enters `Open project` state and may gather funding, fiscalizer offers, fulfillment evidence commitments, beneficiary confirmations, comments, complaints, required documents, and control configuration in parallel.

Where project phases exist, `Open project` may also gather phase-specific funding and phase-gate deliverables in parallel.

Rule:

> A project becomes execution-ready when all applicable closure conditions are complete, not because it passed a rigid sequence.

Execution readiness for an execution-financeable project should also confirm the applicable Post-Closure Coverage Profile where required. A project may not treat final disbursement as a release from covered post-closure defects, hidden antivalues, or contradictory evidence discovered inside the declared window.

### 12. Citizen interface layers

Core v0 includes:

```text
Layer 0: Home / discovery
Layer 1: Compact project list
Layer 2: Project dashboard
Layer 3: Detail by icon or signal
Layer 4: Full citizen project sheet
Layer 5: Technical audit trail
```

Rule:

> Simple by default, clickable by signal, deeply auditable by choice.

Discovery rule:

> Citizens may follow geographic or thematic discovery views such as `near me`. Nearby-project discovery should support asynchronous participation in new project publication, design changes, consultation windows, affected-party observations, and legitimacy-condition updates without requiring attendance at a single physical meeting.

### 12a. Assisted deliberation context

Core v0 includes an `Assisted Deliberation Context` for material citizen actions.

It should help citizens understand a decision before funding, supporting, objecting, delegating, configuring allocation profiles, offering control work, funding complaint review, or reviewing material reformulation where applicable.

Citizen-facing structure should remain simple:

```text
Why consider this
What to review carefully
Dissent / alerts / unresolved issues
```

The context may summarize value, cost, risks, antivalues, affected groups, evidence status, fiscalization status, role-performance history, comments, justified objections, complaints, alternatives, related projects, and unresolved limitations.

Rule:

> Assisted deliberation structures decision context; it does not decide, rank, certify truth, allocate funds, suppress dissent, or replace citizen judgment.

Every material deliberative item should expose its source category, such as proposer statement, executor statement, fiscalizer finding, evidence producer record, beneficiary experience, affected-party observation, expert review, complaint status, Project Closure Accountability Record, Performance History Surface, protocol rule, or AI-generated summary.

AI-generated summaries or warnings must be visibly labeled, traceable, and correctable under C008.

### 13. Citizen action flows

Core v0 includes flows for funding, following, fiscalizer offers, fulfillment evidence production, comments/questions, complaints, delegation, and automatic allocation profiles.

Core v0 also includes participation capacity support through ordinary project rules and assistance layers. Support projects may help citizens understand projects, translate content, produce fulfillment evidence, file comments or complaints, model proposals, or configure profiles and delegation. They do not create hidden authority, automatic delegation commissions, AI civic actors, or public authorities acting as internal project participants in scopes they control.

A009 is a participation-equity boundary over this baseline. Core v0 improves current low-participation practices through asynchronous visibility, nearby-project following, protected identity, delegation transparency, and ordinary participation-support projects, but it does not require perfect representativeness, universal demographic measurement, or a new participation-equity object. Missing voices or concentration are blocking only when the active Threshold Policy requires the relevant affected-party mapping, consultation, observation window, or readiness evidence; otherwise they remain warnings, assisted-deliberation context, administrative observability, or future policy inputs.

Full personal AI guides are Extension v1+. Core v0 only defines the compatibility boundary: a connected personal guide may summarize, compare, translate, draft, warn, and help configure choices, but it cannot become a delegate, civic actor, automatic allocation profile, fiscalizer, authority, hidden recommender, or source of material civic action without explicit citizen confirmation or a separately configured auditable platform rule.

Core v0 includes configurable civic notifications as a simple user-experience baseline: citizens may configure channels, intensity, and frequency for external interruptions, but material in-app civic records should remain visible for affected projects, allocation profiles, delegations, complaints, reformulations, governance resolutions, and timeout resolutions.

### 14. Project creation and publication

Core v0 includes project creation from idea to open project:

```text
Idea
→ problem and solution
→ promised values
→ beneficiaries
→ executor
→ budget
→ phases where relevant
→ milestones
→ metrics and fulfillment evidence
→ fiscalization
→ risks and antivalues
→ validation
→ citizen preview
→ publication as open project
```

`Idea` is the source object for civic demand. It is not a project state and is not financeable until converted into a project with accepted executor responsibility.

Project creation also includes lightweight common-good impact declaration where relevant through affected assets, affected parties, risks, antivalues, fulfillment evidence needs, and fiscalization. Full common-good charter governance remains Extension v1+. ^r922d03d6

A015 reinforces this as a minimum common-good impact sufficiency test over that existing declaration, not a charter system: affected assets and parties identified; no impact, uncertain impact with explanation, or impact with explanation declared; evidence and fiscalization required where impact is plausible; active-charter relationship declared where a charter exists; unexplained overuse of `uncertain` prohibited; and material omissions connected to fiscalization, complaint, mitigation, responsibility, and reputation effects. Core v0 does not add a common-good registry, charter voting, or platform adjudication of common-good compatibility, and conflicts requiring legal, environmental, cultural, or scientific authority route to external channels.

For integrated design-and-execution projects, creation must define the phase baseline and gate before accepting execution-phase commitments. Example: `Design and Construction of Multi-court Facility in Macul` may reserve construction funding while the design is reviewed, but construction cannot become execution-ready if the design omits required bathrooms, changes court dimensions materially, weakens public access, or fails the accepted baseline.

### 15. Project lifecycle after publication

Core v0 includes:

```text
Open project
→ parallel closure of conditions
→ phase gates and execution-ready
→ in execution
→ milestones
→ fulfillment evidence submission
→ fiscalizer review
→ disbursement decision
→ correction / pause / reformulation / revocation if needed
→ closure
→ Project Closure Accountability Record
→ continuity renewal window / continuity-need Idea where applicable
→ final evaluation and reputation effects
```

### 16. Correction, reformulation, pause, revocation

Core v0 includes proportional response to problems:

```text
Minor problem → correction
Relevant but salvageable change → reformulation
Temporary blocker → pause
Severe non-compliance or impossibility → revocation
```

Rule:

> No critical project change should erase history or hide effects on funds, contextualized evidence, reputation, or responsibility.

Core v0 includes H021 project variation control as a classification layer:

```text
Minor variation or correction -> record/correct
Operational variation -> active Reformulation Policy
Material value reformulation -> C017 Reformulation Proposal
Substitutive reformulation -> new project or original-project failure/closure
```

Citizen-facing views should keep this simple with labels such as `Minor correction`, `Operational change`, `Value change proposal`, or `New project required`, while Layer 5 preserves the full comparison against the accepted base design.

Reformulation limits and timing are configurable by the active project, public-function, operating-mode, or protocol policy. Core v0 requires the policy to be visible, traceable, and enforceable; it does not impose one universal maximum number of reformulations or one universal minimum period between reformulations. In tutored mode, the administrator or tutored authority may configure concrete values.

Pause must distinguish systemic platform effects from material/legal suspension. A systemic pause can stop affected execution funding, disbursement, milestone advancement, phase gate acceptance, closure, or disputed evidence use. A material/legal suspension, such as physical construction halt, permit suspension, operational prohibition, sanction, or legal-right suspension, requires competent external authority, legal rule, court/regulator order, or enforceable accepted obligation where applicable.

### 17. Complaint model

Complaints are formal review triggers. Not every complaint blocks a project. Blocking status must be explicit, justified, and reviewable.

Core v0 uses a simplified complaint-review policy:

```text
required_support_count = N
support_window_days = X
quote_deadline_days = Y
```

The administrator configures the required support count, support window, quote deadline, and fallback rule. Complaint objections are counter-signals and counterevidence; they do not reduce support count and do not veto review.

After minimum structural validation, a complaint is immediately sent to the primary fiscalizer or competent reviewer for a review quote. Citizens may support the complaint and reserve conditional review funding while the quote is pending. The fiscalizer should not see reserved funding totals before submitting the quote.

Review starts only after the complaint reaches the configured support threshold within the support window, the fiscalizer quote is published, and reserved or available review funding reaches the quoted review cost.

After admissibility, the competent reviewer or fiscalizer should record affected scope and any scoped systemic pause. System effects may block execution funding, fund release, milestone advancement, phase gate acceptance, closure, or use of disputed evidence for the affected scope. Complaint review, control, correction, mitigation, or referral funding may continue where the applicable rule allows.

For legally regulated projects, such as environmental, mining, energy, infrastructure, water, health, safety, territorial, or permit-based projects, the platform does not replace courts, regulators, or competent authorities. Platform review may create reports, complaint evidence indexes, referral packages, scoped systemic pauses, and public traceability, but material/legal suspension, operational suspension, permit revocation, legal sanction, or construction halt requires a competent authority, regulator, or judicial decision where applicable.

After project closure, the ordinary platform complaint path should not remain open indefinitely. A complaint, contradictory evidence item, hidden antivalue allegation, or defect claim may proceed inside the platform only if the active Post-Closure Coverage Profile is still open and the issue falls within its covered scope. Outside that window or scope, the citizen is routed to an external court, regulator, comptroller, contract, competent authority, or country-specific path. A final external resolution may later be recorded where the active rule allows responsibility, reputation, or historical correction effects.

Complaint filing, support, quote, funding, admissibility, referral, and pending systemic pause are procedural signals. They may be visible in public history, but formal negative reputation requires final resolution, founded responsibility, confirmed non-compliance, a role-specific Responsibility Event, or an external order/resolution that establishes responsibility.

### 18. Delegation model

Core v0 includes simple scoped delegation with explicit scope, delegate acceptance, concentration visibility, reporting, and immediate revocation for future actions.

Delegation has priority over automatic allocation within the delegated scope. Core v0 does not impose a universal hard cap on delegation concentration; it requires concentration visibility and soft warnings, while configurable caps remain protocol, pilot, territory, or country implementation choices.

Concentration visibility includes active delegators, delegated allocation, scopes, territory, represented weight, trend, conflicts, separate participation-support funding where relevant, and configured cap effects if any.

A010 adds stress indicators as bounded reinforcement, not a new model layer. High concentration may require represented-weight warnings by scope/action type, report-sufficiency status, related-delegate or support-provider relationship disclosure, delegate funding to related projects observability, and cap-effect visibility where configured. These signals are derived from existing delegation, report, disclosure, audit, and administrative-observability records; Core v0 does not add a universal anti-concentration cap or a separate concentration authority.

Delegation is non-compensated by default. Delegates do not receive automatic commissions, fees, or percentages of delegated civic allocation. Participation-support services may be funded only as separate transparent projects under ordinary project rules.

Budget delegation requires a selected base allocation profile or fallback rule before activation. If delegation later ends, that previously selected rule resumes for future allocation.

### 19. Automatic allocation profile

Core v0 includes citizen-configured automatic allocation. It is not delegation and not hidden system choice.

Automatic allocation rules do not execute where an active delegation governs the same balance or scope.

On first active use, the citizen should select or acknowledge a base allocation profile. The public system default may be one selectable profile, but the platform should not leave an onboarded citizen without a fallback rule before delegation.

### 20. Technical audit trail

Core v0 requires Layer 5 auditability for project versions, value history, metrics, Project Evidential Contract history, budget, custody trace, milestones, disbursements, contextualized evidence, EvaluationRecords, Project Closure Accountability Records, Post-Closure Coverage Profiles, Assisted Deliberation Context source traces, material information claims, verified discoveries, fiscalization, fiscalizer eligibility and contextual reputation profiles, complaints, reputation signals, reputation inputs, reputation updates, role events, relationship declarations, moderation decisions, and protocol references.

Layer 5 should also preserve project phases, phase gates, phase funding lanes, design-gate decisions, reserved execution funding status, and phase failure or reformulation treatment.

Layer 5 should also preserve material AI-assisted outputs, governance resolutions, review timeout resolutions, protocol-change records, discovery visibility reasons where material, and privacy-aware access/redaction traces.

Layer 5 should also preserve notification or civic-inbox records for material events so muted push notifications do not erase traceability.

### 21. Operating modes

Core v0 includes public-function operating modes:

```text
Closed
Tutored
Semi-open
Open
Suspended
```

Core v0 does not force countries to exit tutored mode. It requires material tutored decisions and tutored silence to become public civic objects through Governance Resolution and Review Timeout Resolution mechanisms. ^r2dfe7183

In tutored mode, a competent authority or authorized implementation administrator may define the active Planning Scope for the public function opened to distributed financing. This is a country implementation or tutored operating-mode condition, not a solved distributed roadmap-construction mechanism. The scope and material scope decisions must be public, versioned, and auditable.

A011 is a boundary over tutored moderation, not a new Core v0 abuse tribunal. Core v0 preserves structured case-level data needed for later audit of moderation patterns, including decision result, rejection reason category where practical, scope, rule/version, responsible authority/process, review window, decision date, review time, timeout status, suggested next path, AuditEvent reference, and known authority-linked operator relationships. Full moderation-abuse tests, dashboards, automatic warnings, and operator-concentration analytics remain Extension v1+ or country/administrator observability.

A016 is incumbent-resistance observability over these same operating-mode, planning-scope, governance-resolution, and timeout objects, not a transition-forcing mechanism. Transition pilots should expose the scope share opened to distributed financing; approval, rejection, and timeout rates; rejection-reason comparability; authority-linked operator participation; public-operator privileges, subsidies, guarantees, or data access; independent versus controlled fiscalization rates; and pilot outcomes compared with the incumbent baseline, so symbolic adoption cannot hide real gatekeeping. Core v0 does not require, and cannot provide, any mechanism that compels institutional transition, protects the migrated budget share, or overrides legal authority; those levers belong to country implementation and ordinary politics, and the related fiscal channel is attacked separately in A021. This political limitation is recorded openly: a determined incumbent can still strangle a pilot through scope, budget, and legal choke points.

### 22. Protocol change governance

Core v0 includes a minimum protocol-change discipline.

It does not require a full constitutional meta-governance implementation, but it does require that material rule changes are not silent, surprising, or retroactive by default.

Core v0 distinguishes:

```text
Reformulation Proposal
Administrative Rule Change
System Implementation Change
Protocol Change Proposal
```

Tutored mode may allow an administrator or implementing ministry to configure rules within its mandate. Material changes still require public reason, versioning, scope, effective date, adaptation period where relevant, transition rule, and audit trail.

Non-tutored mode requires visible Protocol Change Proposals for major protocol changes, with review, sandbox or simulation where required, approval, versioned implementation, and rollback path where applicable.

Citizen-facing layers summarize what changed, why, when it takes effect, and which projects or actions are affected. Layer 5 preserves the full rule-change object and implementation trace.

### 22a. Project closure accountability

Core v0 includes a `Project Closure Accountability Record`.

This record aggregates:

- accepted project promise;
- Planning Scope and Primary Responsibility Anchor;
- Value-Antivalue Profile;
- Project Evidential Contract version;
- expected fulfillment/control evidence;
- submitted fulfillment/control evidence;
- evidence accepted, rejected, contradicted, insufficient, or accepted only as contextual material;
- EvaluationRecords and FiscalizationReports;
- unresolved complaints, contradictions, observations, or systemic pauses;
- financial closure;
- post-closure coverage mechanism, window, covered scope, and expiry route where applicable;
- closure outcome;
- Responsibility Events;
- Reputation Inputs or no-reputation-effect findings;
- citizen-facing explanation.

Rule:

> A project cannot close as fulfilled if its main commitments are not supported by sufficient, reviewed, traceable fulfillment/control evidence.

Evidence submission, producer qualification, measurement/review method, review, correction, and closure deadlines should be configured through Threshold Policy, Project Evidential Contract, Disbursement Milestone Plan, Operating Mode, protocol rule, or public administrative rule. They should not be improvised after project actors already relied on different rules.

Post-closure accountability should be configured before closure through the Post-Closure Coverage Profile. During the active window, covered complaints or contradictory evidence may trigger review, correction, mitigation, warranty response, insurance/bond/coverage execution, responsibility events, reputation inputs, or no-effect findings. After expiry or outside scope, ordinary platform complaint review closes and the proper route is external unless a competent external decision later becomes recordable under the active rule.

### 23. Role-based reputation

Core v0 includes reputation by role: executor, modeler, fiscalizer, evidence producer, complainant, delegate, and other relevant roles.

Rule:

> Reputation follows role responsibility. It is not one generic social score.

Closure labels are procedural context, not automatic reputation scores. Reputation should be updated through verified value fulfillment, metric breakdown, founded complaints, fulfillment evidence corrections, producer qualification/method failures where reviewed, verified discoveries, and responsibility events by role.

Core v0 uses the H014 reputation input chain:

```text
Reputation Signal -> Reputation Input -> Reputation Update -> Reputation Summary
```

Raw opinion, popularity, suspicion, unfounded complaints, unreviewed evidence, AI anomaly flags, project proximity, and closure labels do not directly update formal reputation. Related organizations or holding-linked companies may be visible, but formal effects require a reviewed role, control, conflict, negligence, direct participation, repeated pattern, or responsibility basis.

### 23a. Performance history visibility

Core v0 includes a lightweight Performance History Surface.

This is a citizen-facing read model derived from reviewed records, not a new formal decision object.

It may summarize:

- Project Closure Accountability Records;
- EvaluationRecords;
- FiscalizationReports;
- Responsibility Events;
- Reputation Summaries;
- financial closure outcomes;
- final or procedurally classified complaint outcomes;
- reviewed fulfillment/control evidence sufficiency patterns.

Rule:

> Historical performance should be visible through generic, role-comparable categories, not through an unbounded history for every value a project declared.

The surface should compare executors with executors, modelers or designers with modelers or designers, fiscalizers with fiscalizers, evidence producers with evidence producers, and other actors only in the role actually reviewed.

Specific value floors, antivalue ceilings, metrics, evidence items, producer qualification findings, method limitations, and closure findings remain auditable in the detail and technical layers. The citizen-facing layer should show compact categories such as completed projects, partial or unfulfilled outcomes, evidence sufficiency pattern, budget closure, correction responsiveness, serious responsibility events, review quality, or evidence usefulness according to role.

The surface must disclose data sufficiency and comparison limits. It must not become a universal public-value-per-currency score, a popularity ranking, a social-credit mechanism, or an automatic allocation rule.

### 24. Discovery visibility and customization

Core v0 includes transparent discovery controls:

- Layer 0 remains navigation, not a feed;
- Home categories may be reordered, pinned, collapsed, or hidden by the user;
- hidden categories remain available through Explore and search;
- project lists must show ordering mode;
- urgent and recommended projects must show why they appear;
- urgent, recommended, popular, almost-funded, or nearby project surfaces must not hide unresolved material warnings;
- material approval labels should expose approving role or authority, criterion source, scope, date or version, and unresolved conditions where material;
- paid promotion and opaque manual boosting are excluded.

A008 is handled as a boundary over these existing controls, not as a separate Core v0 object. Core v0 does not require a `PlatformInfluenceRecord`, universal per-impression ranking logs, causal exposure-to-funding attribution, or a dedicated citizen-facing algorithmic audit panel.

### 25. Basic observability baseline

Core v0 includes simple user-facing signals plus a minimal administrative observability baseline. The full universal institutional observability panel remains Extension v1+.

A012 governs what enters this frozen scope, not a new Core v0 object. Under the `knowledge/principles/P007-integrate-or-bound-rule.md` integrate-or-bound rule, a founded attack adds a new Core v0 mechanism only when the failure mode would defeat a core-thesis claim and cannot be controlled through existing objects; otherwise it is answered by an explicit boundary, a visible residual risk, and a recorded limitation. Every required object, field, state, or step names the material failure mode it controls, low-risk projects keep an explicit minimum viable path, heavier burdens trigger through ThresholdPolicy, and new v0 entities pass the cannot-be-safely-derived test. Core v0 does not require a quantitative complexity metric, object-count ceiling, or implementation-cost model.

## Extension v1+ concepts

These should not be part of Core v0 unless later shown necessary:

- public value return per peso / public ROI;
- advanced delegation markets;
- paid delegation;
- subdelegation;
- time-bound delegation;
- complex delegation portfolios;
- full personal AI guides;
- advanced cross-project benchmarking;
- full common-good subordinate charter system;
- complex canary releases;
- full constitutional meta-governance implementation;
- detailed non-tutored protocol voting mechanics; ^r0bcc0e34
- distributed national roadmap construction or votable planning-area governance;
- advanced capture-prediction scoring;
- advanced inferred recommender systems;
- advanced platform-influence analytics, causal exposure-to-funding metrics, and ranking-bias dashboards;
- advanced participation-equity analytics, demographic gap measurement, accessibility outreach metrics, and inclusion dashboards;
- quantitative complexity metric, object-count ceiling, or implementation-cost model;
- beneficial-ownership registry verification and relationship-graph analytics;
- detailed sector-specific KPI libraries beyond pilot needs;
- full common-good charter governance;
- common-good registry, charter voting, and platform common-good adjudication beyond the A015 sufficiency test;
- transition enforcement, migrated-budget protection, resistance-pattern analytics, and cross-country transition comparisons beyond the A016 incumbent-resistance indicators;
- per-project actuarial guarantee calibration and automated milestone-design scoring beyond the A017 disbursement-gaming tests;
- automated collusion-detection engines, network-analysis scoring, and investigative capability beyond the A018 collusion observability surfaces;
- mandate construction, referendum machinery, and formula adjudication beyond the A019 Allocation Mandate record, which the platform records but does not generate;
- distributed roadmap-construction governance beyond the A020 interim observability — deferred, not denied: agenda-setting power stays visible and versioned, while who constructs Planning Scopes remains an open question and a prerequisite for open mode at scale;
- fiscal enforcement — multi-year appropriation locks, statutory indexation, and enforceable budget floors — beyond the A021 Fiscal Commitment Profile and fiscal-reliability observability, which make fiscal strangulation measurable and attributable but cannot compel a sovereign to pay;
- liability adjudication and doctrinal construction of who is at fault for third-party harm beyond the A033 Duty-of-Care Anchor and third-party coverage, which name the answerable legal person and provision coverage before disbursement but leave apportionment to external law;
- supply creation — verifier training, accreditation subsidies, and market-building — beyond the A022 control-supply density observability and disclosed thin-market handling routes, which surface scarcity and price weak verification but do not create qualified verifiers;
- open-mode voting mechanics until the A023 gate is resolved and published, with open-mode deployment barred and the C019 procedural shell binding in every mode meanwhile;
- preference correction, welfare functions, and mandated portfolio rebalancing toward non-salient goods beyond the A024 salience-bias observability and disclosed default weighting;
- participation quotas, engagement targets, and cohort-refresh or sampling mechanisms beyond the A025 engagement-decay and active-core metrics, which measure and disclose the participation mix but do not reverse decay;
- anonymity and identity-provider replacement — provider-independent anomaly detection, federation, and substitution — beyond the A026 declared failure modes and purpose-bound access auditing, which keep verified identity as the anti-Sybil baseline;
- staged-visibility de-herding — blind early windows, staged reveal, and exposure equalization — beyond the A027 herding observability and funding-target closure, which measure and bound cascades but keep funding progress visible;
- outcome equalization — territorial or group floors, matching, compensatory routing, and redistributive formulas — beyond the A028 per-territory and per-group outcome observability, which makes concentration measurable but leaves how much to equalize to authorized country implementation;
- all-or-nothing program funding — conditional or escrowed bundle funding, shared procurement, and shared control packages — beyond the A029 cross-project dependency declarations and stranded-complement warnings, which keep components' funding attempts independent;
- automated clientelism verdicts and hard anti-broker bans beyond the A030 pattern-level indicators, which surface repeated broker patterns as leads to review and external law but do not adjudicate the off-platform favor;
- motive policing, viewpoint moderation of allocation, and polarization scores with attached platform effects beyond the A031 motive-neutrality boundary and mobilization-pattern observability, which keep material effects gated identically regardless of motive;
- discount-correcting citizen preferences, forced intergenerational weights, and multi-cycle or endowment lanes insulated from per-cycle attention beyond the A032 long-horizon lanes and intertemporal observability, which carry planner-set horizon weights into defaults but do not override citizen choice;
- full multi-sector implementation.

## Country implementation decisions

These depend on the implementing jurisdiction:

- legal custody of funds;
- tax authority / treasury integration;
- enforceability of disbursement rules;
- legal identity requirements;
- privacy standards;
- procurement compatibility;
- institutional moderation authority;
- any departure from the Core v0 rule that public authorities remain external to internal project participation in scopes they control;
- eligibility rules for state-owned or publicly owned operators where they are not exercising authority;
- sector chosen for pilot;
- official budget percentage migrated to the system; ^rb0cac211
- sanctions and recovery mechanisms;
- appeal and administrative review rules.

## Out of scope for Core v0

Core v0 does not solve:

- full replacement of the state;
- national deployment across every public function;
- detailed legal drafting for a country;
- complete welfare-state transition;
- all macroeconomic effects;
- final constitutional design;
- universal moral ranking of all public values.
- public authorities or authority-controlled operators as internal competitors for distributed project financing in the same controlled scope under the Core v0 baseline.

## Immediate next use of this freeze

This scope freeze should be used to:

1. build the consolidated entity-object-state map;
2. create lifecycle and flow diagrams;
3. classify hypotheses and documents;
4. build the contradiction and failure-mode checklist;
5. create the paper outline v1.

## Design rule

> Core v0 is small enough to reason about, strict enough to be trustworthy, and complete enough to demonstrate distributed project governance from idea to closure.
