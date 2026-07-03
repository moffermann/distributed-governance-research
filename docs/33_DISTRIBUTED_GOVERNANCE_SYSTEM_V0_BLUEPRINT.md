# Distributed Governance System v0 Blueprint

## Purpose

This document consolidates a first integrated version of the distributed governance system.

It does not replace the detailed design documents. It provides a coherent v0 blueprint that lets the project move faster: a single operational view of actors, objects, citizen interfaces, project flows, funding, fiscalization, contextualized evidence, lifecycle, and boundaries.

## Core thesis

> Public resources can be allocated and controlled through distributed citizen participation, structured projects, verifiable value commitments, contextualized evidence, accountable fiscalization, and auditable lifecycle rules.

The system does not begin by abolishing every institution. It begins by creating a functional layer where public/social value can be proposed, funded, executed, verified, contested, and improved with less concentration of discretionary power.

## Distributed trust principle

Core v0 does not ask citizens to trust a single authority, executor, platform, AI system, fiscalizer, or crowd signal blindly.

Trust should emerge from role-specific incentive alignment and traceable verification:

```text
Material Claim
→ contextualized evidence
→ corroboration, contradiction, or complaint path
→ responsible review
→ EvaluationRecord where formal effect exists
→ accountability, reputation, payment, correction, or responsibility consequence
→ citizen-facing trust signal
→ audit trail
```

This means each role should have reasons to behave reliably. Evidence producers are paid and reputationally evaluated for technically adequate, useful, traceable evidence, not for favoring the executor. Formal fulfillment/control evidence missions are funded because they require qualified producers, adequate methods, appropriate instruments or tools, and responsibility for the resulting report. Executors receive disbursements only through milestone, evidence, and review rules. Fiscalizers build reputation through independent, complete, and timely review. Delegates retain trust through visible delegated-action reports. Administrators and authorities preserve trust by publishing rule changes, Governance Resolutions, and timeout effects.

The citizen surface may show simple labels such as `Self-reported`, `Corroborated`, `Disputed`, `Contradicted`, `Accepted`, `Insufficient`, `Corrected`, or `Reviewed`. Layer 5 preserves the full chain behind those labels.

## v0 design goal

The v0 goal is not to solve the entire state. It is to create a working architecture for one or more bounded public functions or pilots.

A strong first pilot should have:

- projectizable activities;
- visible outcomes;
- manageable risk;
- distributed local actors;
- clear fulfillment evidence possibilities;
- moderate legal complexity;
- strong citizen understanding.

Sports, especially local sports projects, remains a strong transition pilot candidate.

## What v0 must prove

v0 should prove that the system can:

1. let citizens discover ideas and projects without complexity overload;
2. let actors create projects as measurable public promises;
3. let citizens fund projects conditionally;
4. prevent immediate uncontrolled transfer of money;
5. require execution responsibility;
6. require value metrics and fulfillment evidence;
7. require fiscalization proportional to risk;
8. handle comments, complaints, complaint evidence, fulfillment evidence, and corrections;
9. release funds by milestone, fulfillment evidence, and review;
10. preserve full auditability;
11. close projects through a traceable Project Closure Accountability Record;
12. update role-based reputation;
13. make historical performance visible through role-comparable summaries;
14. support assisted deliberation without algorithmic authority;
15. support transition without pretending the entire system is mature from day one.

## Core actors

The v0 actor model remains simple.

```text
Citizen
Organization
```

An organization may be:

- company;
- nonprofit;
- university;
- club;
- association;
- cooperative;
- union;
- NGO;
- local community group;
- concessionaire;
- state-owned or publicly owned operator where eligible under the active C007 boundary;
- other legal or civic organization.

Organization type, ownership, control, and authority relationships are attributes, not separate actor classes by default.

Core v0 excludes public authorities from the internal actor set for any scope in which they exercise legal, budgetary, regulatory, eligibility, admissibility, tutored, fiscal, or oversight power. Public authorities may define the country framework, provide treasury or identity integration, and issue public Governance Resolutions in tutored modes, but they do not use that authority position to propose, execute, fiscalize, moderate, or compete for distributed project financing inside the same scope.

State-owned or publicly owned operators are not automatically excluded by public ownership alone. They may participate as ordinary eligible organizations only when they disclose ownership/control relationships, receive no privileged approval or review path, and accept the same value, evidence, fiscalization, assurance, disbursement, complaint, revocation, and reputation rules as other operators. In tutored mode, an operator controlled by the same authority that defines scope or admissibility is excluded by default.

## Core roles

Actors can hold roles in specific projects.

Important roles:

- proposer;
- modeler or designer;
- executor;
- fiscalizer;
- evidence producer;
- funder;
- voter where voting applies;
- delegator;
- delegate;
- moderator where protocol-defined and not a public authority acting as an internal participant in a scope it controls;
- complainant;
- evaluator;
- commenter;
- beneficiary;
- affected party;
- technical assistant.

Roles are accumulable unless conflict rules prevent it.

Examples:

- executor should not fiscalize its own project;
- fiscalizer should not validate where it has direct interest;
- delegate acts only inside accepted scope;
- moderator should not approve own or related project;
- executor responsibility starts when executor accepts the project design.

Related-party relationships do not automatically invalidate a project, but they must be declared and classified. Low or indirect conflicts may proceed with visible warnings; relevant conflicts may require independent control and public-benefit safeguards; severe or hidden conflicts may require reformulation, actor exclusion, disbursement blocking, rejection, or a role-specific responsibility review.

Public authorities may not use operating-mode authority to become internal project competitors or to privilege controlled operators. Material tutored decisions should be represented as public governance-resolution objects.

## Core object: idea

An idea is a public expression of civic demand or project possibility.

An idea may be visible, followed, commented on, refined, and associated with future projects.

An idea is not financeable for execution.

Key rule:

> Ideas capture demand. Projects execute responsibility. Financing applies to projects, not ideas.

## Core object: project

A project is the basic financeable and executable unit.

A project must contain:

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
- evidence-coverage status for value floors, formal secondary values, antivalue ceilings, material value claims, and relevant metrics;
- Project Evidential Contract and fulfillment evidence obligations;
- Post-Closure Coverage Profile where execution funding is allowed;
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
- lifecycle state;
- audit trail.

Key rule:

> A project is funded. A common-good charter is approved.

A project draft may exist internally while being prepared. Public executorless demand should be modeled as an `Idea`, not as an open financeable project. A project cannot be published for execution financing without an identified and accepted responsible executor.

Under H002, distributed resource allocation is bounded rather than unconstrained. Citizens, delegates, allocation profiles, and public default rules may assign only the configured assignable share of public-purpose resources, and only to projects or control vehicles that satisfy the active planning, eligibility, threshold, funding, phase, evidence, fiscalization, and audit conditions. The model does not turn every public budget into an individually assignable balance and does not let popularity substitute for execution readiness, disbursement review, or fulfillment evaluation.

Under H009, every financeable project should align with an active `Planning Scope`: a public-function, pilot, operating-mode, protocol, approved roadmap, or authorized planning line that is currently open to distributed financing. Core v0 does not define how a national roadmap is created or voted. It only requires the active scope used for project eligibility to be visible, versioned, and auditable.

A005 adds that Planning Scopes should run an `Essential Service Protection` test where the scope affects essential guarantees, continuity, emergency capacity, redistribution, vulnerable beneficiaries, universal access, or low-visibility groups. The test should distinguish the protected public/legal guarantee floor from the contestable service-provision lane, record any planning-continuity target, classify the funding lane as citizen-assignable, default-assigned, reserve-backed, non-assignable, or excluded, and expose underfunded protected scopes. This protects against both popularity-driven neglect and central political neglect.

Example:

```text
Older-adult care continuity 2026-2030:
  protected floor -> minimum continuity for eligible beneficiaries;
  distributed lane -> eligible care, transport, food, caregiver support, or residence-fiscalization projects;
  observability -> underfunded protected scope if the continuity target is not met.
```

In tutored mode, the planning scope may be authority-defined. This is acceptable only as an external implementation condition under C020: material scope decisions, rejections, or reclassifications should be public Governance Resolution objects or equivalent review traces. An out-of-scope idea should not disappear; it can remain an Idea, be reclassified, be reformulated, or become input for future planning-scope governance.

A change in government or operating authority may revise an essential planning target only through a public, versioned, auditable Governance Resolution, Administrative Rule Change, or equivalent trace. The change should disclose effects on beneficiaries, continuity obligations, existing projects, protected floors, and distributed funding lanes.

Under A006, projects also need a project-level `Continuity Risk Classification` when they create ongoing obligations. This is separate from the A005 Planning Scope floor-and-lane test. A006 classifies a project or phase as one-time, phased, recurring, continuity-critical, emergency, or maintenance-dependent, and requires funding-stability fields where relevant: minimum funded service period, staffing or maintenance obligation, future funding dependency warning, beneficiary-protection rule, wind-down rule, reserve/retention/guarantee reference where applicable, and citizen-facing continuity labels.

When a recurring, continuity-critical, or maintenance-dependent project approaches the end of its funded period, the system should open a visible `Continuity Renewal Window`. The renewal window does not renew the project automatically and does not privilege the current executor. It exposes the ending date, interruption risk, affected service or beneficiary group subject to privacy rules, current-period fulfillment/control evidence, fiscalizer observations, funding gap, and wind-down rule. Where follow-on financing may be needed, the window may generate or update an Idea such as `Continuity need for older-adult home care in Macul 2027`, which can receive support, contextual evidence, comments, justified objections, and associated continuity project proposals from the current executor or alternative eligible executors.

Under H010, every financeable project should declare one `Primary Responsibility Anchor`: the main roadmap goal, public function, or public-value outcome against which the project is primarily classified, compared, funded, evaluated, fiscalized, and held accountable. Secondary contributions are allowed, but they must not dilute the anchor. If a secondary contribution is presented as a formal promise, it needs proportional metrics, fulfillment/control evidence, and review consequences.

Each project should also declare or reference a visible `Threshold Policy` defining which proportional conditions apply before publication, execution-ready status, disbursement, closure, or post-closure coverage where applicable. Thresholds may depend on project type, public function, risk, complexity, territory, operating mode, common-good impact, related-party safeguards, and protocol rules. The policy should include or reference a `Procedural Burden Profile` so small low-risk projects do not receive the same procedural burden as infrastructure, regulated, irreversible, or high-antivalue projects. Thresholds, burden profiles, assurance requirements, and post-closure coverage requirements must not be self-selected by the proposer, designer, or executor when lower classification reduces obligations. The platform should show simple missing conditions to citizens and preserve the policy source in the audit trail.

A014 adds a related-party observability reinforcement, not a new entity: a minimum related-party relationship graph and severity model expressed through the related-party and conflict declarations already required above, `RelatedPartyConflictReview`, role and supplier declarations, and AuditEvents. The graph makes ownership and control chains, board or management control, material supplier and subcontractor relationships, repeated fiscalizer/evidence-producer relationships, delegate or funder relationships to project actors, and authority-linked operator status visible where material. Declared proximity is handled proportionally, while hidden or control-relevant relationships escalate to correction, blocking, exclusion, complaint, responsibility, or reputation effects. The same graph serves A018 collusion observability. Core v0 does not add a separate relationship-graph entity, a categorical related-party ban, beneficial-ownership verification, or corporate-registry integration; verification depth is a country implementation decision and graph analytics remain Extension v1+.

A018 adds collusion observability over existing objects, not a detection engine: role separation is necessary but not sufficient, so the system exposes relationship, repetition, timing, and outcome patterns across project roles and material suppliers through repeated actor-cluster visibility across projects, the same A014 relationship-and-control graph reused across roles and suppliers, timing-anomaly review for evidence, fiscalizer reports, disbursement requests, and complaints, outcome-pattern review for unusually favorable or fast approvals, independent corroboration for critical milestones, the verified-discovery route for hidden coordination, and cross-role responsibility events where collusion is confirmed. Core v0 adds no automated collusion-detection engine, network-analysis scoring, or investigative capability; pattern surfaces feed human review, complaint, and verified-discovery paths, prosecution remains external law, and the claim is comparative — collusion becomes harder, riskier, and more discoverable than under opaque institutional monopoly, not that purely off-platform coordination among formally compliant actors is eliminated.

For projects with rights, access, vulnerable-beneficiary, territory-wide, common-good, or high affected-party exposure, the Threshold Policy should also require a proportional affected-party mapping and consultation condition. This condition is not a vote or veto. It defines what affected-party map, notification path, observation window, field visit, community meeting, plan-review record, survey, neighborhood documentation, independent evidence-producer input, fiscalizer review, or competent-authority trace is needed before publication, execution-ready status, disbursement, or closure where applicable.

This intentionally asks more than many current project processes provide. Affected parties often receive little notice, must attend narrow physical meetings to be heard, or never see whether a project later delivered the values promised. Core v0 raises that accountability floor with lower participation cost, broader reach, greater visibility, and more traceable feedback.

H011 adds a universal Financial Assurance Profile for execution-financeable projects. In Core v0, the guarantee requirement should use a global percentage configured by the active administrator, protocol, operating mode, or lawful country implementation rule. This assurance applies across social projects, including care, supplies, workshops, infrastructure, and services.

A007 adds a `Post-Closure Coverage Profile` for execution-financeable projects where post-closure accountability is required. The profile is related to financial assurance but is not the same object: financial assurance protects execution funds and failure risk, while post-closure coverage defines who responds after closure for covered defects, hidden antivalues, contradictory evidence, correction, mitigation, replacement, or warranty review. The valid Core v0 mechanisms are `Executor Direct Warranty` or `Equivalent Insurance / Bond / Coverage`, with duration and scope defined by Threshold Policy, contract, operating mode, protocol, or country implementation rather than by proposer, designer, or executor discretion.

AI and rules may help discover required documents and suggest a burden profile, but they should not certify document acceptability by themselves. Where the Threshold Policy requires project acceptability review, tutored mode routes review to the competent authority under C020, while non-tutored or open modes may use an independent `Control Subproject: Project Admissibility Review` under C002/C013 rules.

Projects should expose funding, social support, justified objections, and formal complaints as separate signals. Support and justified objection are reversible civic signals. Funding is a financial commitment governed by funding rules. A complaint is a formal review object.

Funding closure is not a legitimacy finding. A project may show `funding complete` while also showing `affected-party issue pending`, `community consultation evidence pending`, or `public access condition unresolved` where the active Threshold Policy requires those conditions.

Projects may also expose phase-specific funding lanes where needed. A design-and-execution project may receive execution-phase funding commitments while the design phase is pending, but those commitments remain reserved and cannot be released until the design phase gate is accepted.

Projects may not wait for financing forever. Each financeable project, phase, or funding lane should expose a visible funding window through a traceable `FundingAttempt`. If the window expires without financing closure, the project or lane becomes `Expired Unfunded` unless the active policy allows a bounded objective extension or routes the project into reformulation. Eligible unused commitments return, reassign, or follow the citizen's selected/default allocation rule. Republication and cloning preserve source-attempt history instead of resetting the record.

## Value thesis and value icons

Every public project must declare what value it promises.

The value thesis may contain several values, but it should be organized around the project's Primary Responsibility Anchor. This prevents value inflation while allowing legitimate multi-value projects.

Value icons are the citizen-visible representation of the value thesis.

Examples:

```text
👧 Childhood
⚽ Sports
❤️ Health
📚 Education
🌳 Nature
🧓 Older adults
👥 Community
```

A value icon is not decoration.

Rule:

> No value icon without metrics. No metrics without fulfillment evidence.

H012 extends the value thesis into a `Value-Antivalue Profile`:

```text
Value floors:
  minimum positive commitments the project must reach.

Antivalue ceilings:
  maximum negative effects the project must not exceed.
```

Antivalue ceilings are not complaints. They are declared project constraints verified through fulfillment/control evidence and fiscalization. A formal complaint may later be filed if a ceiling is exceeded, omitted, or misrepresented, but it must follow the complaint process.

The system should first search the value catalog before generating new values. AI may propose a new value only when there is no adequate existing catalog value.

Promised value should be verified through a Value Verification Package, not isolated metrics. Activity metrics alone are insufficient when they do not reasonably demonstrate the promised value.

Each core value commitment should map to fulfillment evidence needs. The project defines what must be evidenced, when, by which source role or corroboration path, with what producer qualification and method standard, and with what review consequence. It should not preselect the independent evidence producers who later verify the project.

A004 adds a metric-gaming / evidence-coverage check: each declared value floor, formal secondary value, antivalue ceiling, material value claim, and relevant metric should identify the fulfillment/control evidence needed to verify it. The check is not a fixed count of evidence items by project size. It asks whether the package covers the dimensions that matter for the promise and whether a narrow metric could be satisfied while the value remains unproven.

## Metrics and fulfillment evidence

For each promised value, the project must define measurable commitments.

Example for a sports training project:

- number of participants;
- age range;
- sessions per week;
- duration;
- attendance target;
- activity fulfillment evidence;
- beneficiary confirmation;
- fiscalizer review.

The metric validator should reject input-only metrics when they do not measure value.

Example:

```text
Buying 100 balls
```

is not enough to measure sports value. The project must measure actual participation, sessions, use, attendance, or equivalent value-relevant output.

The metric validator should also classify evidence coverage:

```text
coverage complete
coverage weak
coverage gap
metric gap
under correction
```

Example:

```text
Macul multi-courts:
`number of courts built` is not enough if the package does not cover dimensions, safety, public access, bathrooms or accessibility commitments where required, actual use, and noise ceilings where declared.
```

Each project should also define a Project Evidential Contract.

The contract states how fulfillment will be evidenced before execution starts. It connects value promises, value floors, formal secondary values, antivalue ceilings, metrics, milestones, material information claims, risk and antivalue declarations, fulfillment/control evidence types, evidence-coverage status, source roles, required producer qualification, accepted measurement or review method, corroboration requirements, fiscalizer review, disbursement effects, complaint paths, closure evaluation, responsibility, reputation, and privacy/access rules.

The contract defines fulfillment/control evidence needs rather than named evidence producers. For each hard KPI or formal effect, the need should declare the required producer qualification and method standard: credential, certification, accreditation, institutional competence, professional experience, instrument or tool class, calibration or validation reference, metadata, chain of custody where required, report discipline, and limitation statement. Evidence producers may later offer fulfillment/control evidence tied to a value floor, antivalue ceiling, metric, material claim, milestone, phase, risk, or declared antivalue. Offers that match the accepted contract and satisfy the required qualification/method standard receive higher eligibility priority; unexpected fulfillment/control evidence can still be admitted when it is equivalent, necessary, materially useful, or complementary within the available control budget.

A004 and A013 remain separate: A004 checks whether the project defined the necessary evidence needs for the promise; A013 checks whether submitted evidence later satisfies those needs with sufficient producer qualification, method fit, traceability, and probative fitness.

Each project should also define a `Required Evidence Package` before publication or execution-readiness effects apply. It contains `RequiredEvidenceNeed` records selected by threshold policy, phase gates, public-function rules, common-good exposure, affected-party exposure, legal/technical conditions, or country implementation.

Where affected-party legitimacy conditions apply, the package may include design-phase or preparation-phase `Readiness Evidence` needs for affected-party mapping, plan presentation, community consultation, asynchronous observations, survey records, neighborhood-organization evidence, unresolved objections, and independent corroboration. Pre-execution consultation evidence does not prove final value fulfillment by itself, but it may block or condition execution readiness when the active policy requires it. During execution or closure, affected-party observations may also become fulfillment/control evidence for values or antivalues such as access, noise, safety, service availability, or public-use commitments.

The contract is proportional:

```text
Small sports workshop:
attendance records, photos, beneficiary confirmation, fiscalizer review.

Technical or regulated project:
permits, baseline measurements, technical records, expert review, affected-party channels, and competent-authority boundaries.
```

Citizens should see a simple "How this will be verified" summary, while Layer 5 preserves the full versioned contract.

## Contextualized evidence model

Core v0 distinguishes evidence by procedural context. It should not use bare `evidence` for system objects when the evidence has procedural consequences.

Minimum evidence contexts:

```text
Complaint Evidence
Readiness Evidence
Fulfillment Evidence
Control Evidence
Contradiction Evidence
Administrative Observability Data
Research Evidence
```

`Evidence Item` may remain as a generic technical object only when it records an evidence context.

Readiness Evidence can come from:

- proposer or designer submissions, when treated as claims to be reviewed;
- independent evidence producers;
- fiscalizers or reviewers;
- verified affected parties or beneficiaries;
- neighborhood organizations where eligible;
- technical documents, permits, plans, compatibility records, or authorized integrations.

Readiness Evidence can block or permit publication, phase gates, execution-ready status, disbursement preconditions, or other configured effects. It does not prove final project fulfillment by itself.

Fulfillment Evidence can come from:

- executor;
- fiscalizer;
- evidence producer;
- beneficiary;
- funder;
- open observer;
- documents;
- system integrations where applicable.

Fulfillment Evidence must be linked to:

- project;
- milestone;
- metric;
- value promise;
- material information claim where applicable;
- producer;
- producer qualification basis where formal evidence is required;
- measurement, inspection, survey, test, or review method where formal evidence is required;
- instrument, tool, calibration, validation, or chain-of-custody reference where applicable;
- timestamp;
- traceability metadata where required;
- report limitations where applicable;
- review status;
- sufficiency status for the claimed formal effect;
- privacy classification.

Executor-submitted material is self-reported support unless corroborated. Critical milestones, disbursements, and closures require fulfillment evidence produced or corroborated by evidence producers, fiscalizers, verified beneficiaries, technical records, or other non-executor sources. Where the metric depends on technical measurement, legal compliance, regulated inspection, laboratory work, survey validity, or specialized professional judgment, the producer must be qualified for that evidence need and the method must be adequate for the formal effect claimed.

Example:

```text
Macul court dimensions:
  citizen observation may trigger contradiction or complaint;
  formal fulfillment evidence should come from a qualified technical producer using an accepted measurement method and traceable report.
```

Complaint Evidence belongs to the complaint file. It supports, refutes, clarifies, or contextualizes an allegation. It may become relevant to fulfillment review only if the responsible fiscalizer, reviewer, competent authority, or protocol rule accepts it for that purpose.

Core v0 also treats material project statements as accountable claims. Claims that affect funding, execution readiness, disbursement, closure, risk, beneficiary trust, or reputation should be traceable to actor, role, contextualized evidence, contradiction, review status, correction history, incentives, payment or disbursement effects, and responsibility or verified-discovery effects where applicable.

This does not assume that existing institutions have no approval processes. In current public systems, projects may already be approved through investment, procurement, municipal, environmental, technical, or sector-specific procedures. Core v0 adds a visibility rule: when an approval, criterion, pending condition, omission, or limitation is material to citizen funding, legitimacy, execution readiness, disbursement, trust, closure, complaint review, or reputation, it should become a source-linked `MaterialInformationClaim` or equivalent record visible in citizen surfaces and reconstructable in Layer 5.

Rule:

> An `approved`, `almost funded`, `execution-ready`, `recommended`, or AI-generated project summary must not hide material unresolved conditions. Formal approvals should expose the approving role or authority, criterion source, scope, date or version, and unresolved conditions where material.

Citizen-facing reliability labels may remain simple:

```text
Self-reported
Corroborated
Disputed
Contradicted
Corrected
Accepted
Approved with conditions
Material warning
Source linked
```

Verified discovery may create reputation credit or compensation only after review confirms that the discovered information was material and useful. AI may flag anomalies, duplicates, missing fulfillment evidence, weak producer qualification, privacy risks, or contradictions, but it does not decide truth, fraud, professional idoneity, responsibility, fund release, or legal consequences by itself.

Failure to reach a value floor, exceeding an antivalue ceiling, or discovering an undeclared antivalue can become a reviewed reputation input or responsibility event only through the relevant evaluation, fiscalization, or responsibility path. It does not automatically become a complaint.

Evidence item states:

```text
Expected
Submitted
Pending review
Accepted as evidence
Accepted only as contextual material
Insufficient for fulfillment effect
Needs corroboration
Observed
Rejected
Contradicted
Used in fiscalization report
```

Insufficient evidence is not proof of fraud by itself, but it is also not proof of fulfillment. A dark photo without reliable timestamp, location metadata, or relation to the relevant milestone may remain contextual material, require corroboration, trigger correction, retain funds, or block closure for the affected scope.

## Evaluation context model

H015 requires evaluation to be scoped by dimension and by effect.

Core v0 distinguishes:

```text
Soft Public Signal
Experiential Evaluation
Fulfillment Evaluation
Technical or Professional Review
Fiscalization Conclusion
Complaint Review Finding
Reputation Input
```

Ordinary citizens should not face this as a technical form. They can comment, confirm, object, submit complaint evidence, or file a complaint. The technical layer records what kind of evaluation the input can become, what dimension it concerns, what the actor could observe or experience, and what formal effect it may have.

Example:

```text
Macul multi-court project:
  a resident may complain that bathrooms are missing;
  a beneficiary may confirm whether public access was real;
  a technical reviewer may measure court dimensions;
  a fiscalizer may approve, observe, reject, or require correction;
  reputation changes only after reviewed role-specific responsibility or verified fulfillment.
```

Rule:

> Formal evaluation is not an open popularity vote. It requires observability, experience, assignment, or qualification for the evaluated dimension, and it must state whether it is a soft signal, fulfillment input, disbursement input, closure input, complaint finding, responsibility review, or reputation input.

## Fiscalization model

Fiscalization is the accountable review of project compliance.

H016 treats fiscalization as a distributed but protocol-selected ecosystem. Many actors may observe, produce fulfillment or control evidence, submit complaint evidence, or submit fiscalization offers, but responsible fiscalization must be assigned through eligibility, conflict, independence, risk, budget, methodology, and auditability rules.

Core distinction:

```text
Executor executes.
Evidence producers produce fulfillment or control evidence.
Fiscalizers evaluate compliance.
Citizens observe, comment, contradict, and denounce.
```

The executor should not freely choose or directly control the fiscalizer responsible for validating its own performance.

Fiscalization may be simple for low-risk projects and reinforced for larger, technical, risky, remote, irreversible, or vulnerable-beneficiary projects.

Fiscalization cost is a control cost and should be separated from executor-controlled execution spending.

Fiscalization, fulfillment evidence missions, technical review, and admissibility review may be structured as Control Subprojects associated with the parent project. Control selection must be protocolized, risk-adjusted, conflict-checked, and auditable, not chosen by the executor or ordinary popularity.

Responsible fiscalizer assignment should expose a project-specific fiscalizer eligibility and reputation profile. This profile is a derived surface, not a generic CV, universal score, or automatic selector. It should show the criteria required by the project, phase, threshold policy, or control subproject; whether the fiscalizer satisfies expertise, credential, logistics, availability, workload, methodology, budget, and independence conditions; relevant reviewed performance in comparable project types; and relationship or capture warnings.

Citizen-facing labels may remain simple:

```text
Eligible for this project
Eligibility warning
Limitations declared
Repeat relationship visible
Secondary audit triggered
```

Layer 5 preserves the full eligibility criteria, source records, comparable-performance basis, repeat-relationship indicators, dependency concentration, selection reason, report sufficiency, and subsequent reputation effects.

After the minimum admissible control package is accepted, supplemental control funding may support at most one secondary fiscalizer or fiscalization auditor and distinct additional fulfillment evidence needs. It does not fund execution, expand project scope, create unlimited fiscalization, or block execution automatically.

## Citizen interface layers

v0 uses layered citizen complexity.

```text
Layer 0: Home / discovery
Layer 1: Compact project list
Layer 2: Project dashboard
Layer 3: Detail by icon or signal
Layer 4: Full citizen project sheet
Layer 5: Technical audit trail
```

Principle:

> Simple by default, clickable by signal, deeply auditable by choice.

A012 adds a complexity-budget discipline, not a new Core v0 entity: every required object, field, state, or procedural step should name the material failure mode it controls, low-risk projects keep an explicit minimum viable path, and heavier burdens trigger through ThresholdPolicy rather than being universalized. New v0 entities must pass the cannot-be-safely-derived test and Extension v1+ ideas do not enter Core v0 by default, following the `knowledge/principles/P007-integrate-or-bound-rule.md` integrate-or-bound rule. Core v0 does not require a quantitative complexity metric, object-count ceiling, or implementation-cost model; the budget is a qualitative discipline applied at design and review time.

### Layer 0 — Home / discovery

Layer 0 is not a project feed. It is a navigation surface.

It includes:

- available civic allocation;
- urgent now, maximum one or two projects;
- explore by value;
- nearby projects or scopes the citizen follows;
- projects that need something;
- search;
- delegation or automatic profile.

Home categories may be reordered, pinned, collapsed, followed, or hidden by the citizen for personal navigation. Hidden categories remain reachable through Explore, filters, and search. A citizen may follow a geographic or thematic discovery view such as `near me` so new nearby projects, material design changes, consultation windows, affected-party observation requests, or legitimacy-condition updates can appear asynchronously without requiring attendance at a single neighborhood meeting. Urgent and recommended visibility must show reasons, and Core v0 excludes paid promotion and opaque manual boosting.

Layer 0 may keep the interface short, but it should not let urgency, recommendation, popularity, proximity, or funding progress suppress material warnings. If a highlighted project has a pending design gate, an unresolved required evidence need, a material complaint status, a conditional approval, or a legitimacy-profile issue, the citizen-facing entry point should show a compact warning and a route to the source.

A008 does not add a separate platform-influence entity to Core v0. Platform influence is bounded through the existing discovery controls, AI-assistance traces, source-linked warnings, and rule-change audit paths. Detailed per-impression ranking logs, causal exposure-to-funding metrics, or algorithmic-bias dashboards are Extension v1+ or implementation-level observability, not a Core v0 citizen burden.

### Layer 1 — Compact project list

Layer 1 lets citizens compare projects quickly.

Each compact item shows:

- name;
- short description;
- value icons;
- funding progress;
- missing conditions;
- unresolved material warnings;
- source-linked approval or review status where material;
- signal counts;
- contextual action button.

### Layer 2 — Project dashboard

Layer 2 is the first project-specific view.

It shows:

- project header;
- value promised;
- who will do it;
- project state;
- conditions needed to become execution-ready;
- assisted deliberation context;
- main actions;
- signal dashboard;
- short summary;
- access to full project sheet.

The assisted deliberation context should remain concise:

```text
Why consider this
What to review carefully
Dissent / alerts / unresolved issues
```

It should expose source labels and link to deeper records, but it should not decide, rank, certify truth, allocate funds, or suppress disagreement.

### Layer 3 — Detail by signal

Every visible icon, number, condition, or alert is clickable.

Layer 3 explains one signal at a time:

```text
meaning
status
why it matters
how it is verified
what the citizen can do
```

### Layer 4 — Full citizen project sheet

Layer 4 lets a citizen understand the full project in accessible language.

It includes:

- summary;
- value promised;
- beneficiaries;
- executor;
- budget;
- closure conditions;
- milestones;
- fulfillment evidence;
- fiscalization;
- risks and antivalues;
- comments;
- complaints;
- change history;
- access to audit trail.

### Layer 5 — Technical audit trail

Layer 5 contains complete traceability:

- project versions;
- project phases and phase gates;
- value thesis history;
- metric history;
- budget history;
- funding and custody trace;
- milestone and disbursement trace;
- project evidential contract history;
- contextualized evidence archive;
- material information claim and verified-discovery trace;
- approval criteria, source records, conditional approvals, and unresolved material warning history;
- fiscalization reports;
- fiscalizer eligibility and contextual reputation profile;
- complaint trace;
- relationship declarations;
- role events;
- moderation decisions;
- notification and civic-inbox records for material events;
- protocol references;
- export and verification tools.

## Citizen action flows

v0 includes these citizen flows:

```text
Funding
Following
Offering as fiscalizer
Producing fulfillment evidence
Commenting / asking
Filing complaint
Delegating
Configuring automatic allocation profile
```

Participation capacity support is also part of Core v0, but only through ordinary transparent project paths and assistance layers. A participation-support project may help citizens understand projects, translate material, produce fulfillment evidence, file comments or complaints, model proposals, or configure profiles and delegation. It does not receive hidden delegation commissions, does not allocate citizen balances without explicit accepted delegation, does not turn AI into a civic actor, and does not make public authorities internal project participants in scopes they control.

A009 adds a boundary, not a new participation-equity entity. Core v0 should improve the current institutional baseline through asynchronous discovery, nearby-project following, protected identity, simple actions, delegation visibility, participation-support projects, and required affected-party evidence where Threshold Policy demands it. It does not require perfect representativeness, universal demographic measurement, or full participation equality before projects proceed. Low participation, missing voices, or concentration may become warnings, assisted-deliberation context, administrative observability, or future policy inputs; they block only when the active Threshold Policy already requires the relevant mapping, consultation, observation, or readiness evidence.

Personal AI guides remain Extension v1+. If a personal guide connects to Core v0, it must stay within the C008 assistance boundary: it may summarize, compare, translate, draft, warn, and help configure citizen choices, but it cannot become a delegate, civic actor, automatic allocation profile, fiscalizer, authority, hidden recommender, or source of material civic action without explicit citizen confirmation or a separately configured auditable platform rule.

### Funding

Funding is a conditional commitment.

It does not immediately transfer money to the executor.

Funds are released only after closure conditions, milestones, fulfillment evidence, and fiscalization rules are satisfied.

Funding is not a freely reversible expression of preference. After financing, ordinary withdrawal is not allowed; failure is handled through traceability, complaints, retentions, guarantees, recovery, returned balances, and reputation consequences.

Financial assurance is not construction-specific. A project that delivers elderly care, school supplies, workshops, food support, health support, or infrastructure may all require the configured assurance before execution-ready status or fund release. The required guarantee is materialized only when confirmed by the relevant custodian, guarantor, insurer, treasury, bank, escrow provider, or lawful equivalent.

### Following

Following is observation and notification only.

It does not fund, approve, validate, or block a project.

Notification interruptions are configurable, but critical in-app civic records should remain visible for material events such as reformulation, pause, revocation, closure, complaint, fiscalization, delegation fallback activation, automatic-profile runs, Governance Resolutions, and Review Timeout Resolutions affecting the citizen's projects or roles.

### Fiscalizer offer

Offering to fiscalize is a role request with responsibility.

It requires eligibility, relationship declaration, methodology, scope, and acceptance.

### Fulfillment evidence production

Fulfillment evidence production creates verifiable material.

It does not by itself validate compliance.

### Comments and questions

Comments support civic observation and clarification.

Serious issues can be escalated into formal complaints.

Public comments are identifiable by default. Protected identity is a justified per-comment exception for the comment layer, not an anonymous comment layer. The broader protected-identity mechanism may also apply to complaints, testimony, complaint evidence, fulfillment evidence, beneficiary confirmations, and other sensitive formal actions when public exposure creates a justified risk. All public-facing submissions remain subject to a narrow legal, safety, privacy, and platform-integrity gate.

### Complaints

A complaint is a formal review trigger.

It may affect status, milestones, disbursement, or reputation depending on severity and review.

The ordinary complaint-review trigger is governed by a simple visible policy:

```text
required_support_count = N
support_window_days = X
quote_deadline_days = Y
```

After minimum structural validation, the complaint is immediately sent to the primary fiscalizer or competent reviewer for a quote. During the support window, citizens may support the complaint and reserve conditional review funding. Reserved funding totals should not be visible to the fiscalizer before the quote is submitted. If the complaint reaches the required support count within the support window and reserved funding reaches the quoted review cost, it proceeds to admissibility review.

Complaint objections are counter-signals and counterevidence, not numeric vetoes. They do not reduce support count or automatically close a complaint.

If admitted, the reviewer or fiscalizer should record the affected scope and any scoped systemic pause. A systemic pause can stop execution funding, disbursement, milestone advancement, phase gate acceptance, closure, or use of disputed evidence for the affected scope.

For legally regulated projects, platform review can create public traceability, a fiscalizer report, a complaint evidence index, a scoped systemic pause, or a referral package. It does not replace a court, regulator, or competent authority for material/legal suspension, operational suspension, permit revocation, legal sanction, or construction halt.

Complaint filing, support, quote, funding, admissibility, referral, and pending systemic pause are procedural signals. Formal negative reputation requires final resolution, founded complaint outcome, confirmed non-compliance, role-specific Responsibility Event, or an external decision that establishes responsibility.

### Delegation

Delegation is scoped authorization to another actor.

It requires explicit scope, delegate acceptance, transparency of concentration, and immediate revocation for future actions.

Delegation concentration is allowed by default when citizens choose it, but it must be visible before delegation, during delegated action, in delegated-action reports, and in administrative observability. Concentration visibility should include active delegators, delegated allocation, scopes, territory, represented weight, trend, conflicts, separate participation-support funding where relevant, and configured cap effects if any.

High concentration should trigger A010 stress indicators through existing delegation records, delegated-action records, reports, related-party disclosures, participation-support disclosures, AuditEvents, and administrative observability. These indicators may include represented-weight warnings by scope and action type, report-sufficiency status, related-delegate or support-provider relationships, delegate funding to related projects, and cap effects where configured. Core v0 does not add a separate delegation-concentration entity, universal hard cap, or default veto over voluntary delegation.

When a delegate acts inside an active delegated scope, the action represents the delegate and all delegators covered by that scope by default. The represented weight, scope, and any configured cap effect must be visible in the action record, delegated-action reports, and observability metrics.

Budget delegation also requires a selected base allocation profile or fallback rule before activation. Delegation has priority while active, but the selected base rule resumes if delegation is revoked, rejected, expired, or resigned.

Delegated-action reports should be generated primarily from the audit trail, with simple citizen summaries, detail on demand, represented weight, concentration signals, and optional delegate explanations.

Report channels and frequency may be configured by the citizen, but delegated-action records and fallback activation should remain available in-app.

Delegation is non-compensated by default in Core v0. A delegate does not receive automatic payment, commission, or a percentage of delegated civic allocation merely because citizens delegate to them. Participation-support services may be funded only as separate transparent projects with ordinary budget, fulfillment evidence, fiscalization, and audit rules.

### Automatic allocation profile

Automatic allocation is citizen-configured rule-based distribution.

It is not delegation and not hidden system choice.

On first active use, the citizen should select or acknowledge a base allocation profile. The public system default may be selected as that base profile.

Automatic allocation reports should explain allocations, skipped rules, and fallback activation. Their interruption channel may be configured, but the report history remains available in-app.

## Project creation flow

Creating a project means turning an idea into a structured public promise.

Flow:

```text
Idea
→ problem and solution
→ Primary Responsibility Anchor
→ Planning Scope alignment
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

`Idea` in this flow is the demand or proposal source. It is not a project state and is not financeable until it becomes a project with an accepted executor and validated disbursement milestone plan.

The creator should not start with a giant technical form. The system should assist the creator in making the project financeable, measurable, fiscalizable, and auditable.

Project creation should include lightweight common-good impact declaration where relevant through affected assets, affected parties, risks, antivalues, fulfillment evidence needs, and fiscalization. Full common-good charter governance remains a later extension.

A015 adds a sufficiency test over the existing common-good impact declaration, not a charter system: a project that plausibly affects a common good should identify affected assets and affected parties, declare no impact, uncertain impact with explanation, or impact with explanation, provide evidence and fiscalization where impact is plausible, declare an active-charter relationship where a charter exists, avoid unexplained overuse of `uncertain`, and connect material omissions to fiscalization, complaint, mitigation, responsibility, and reputation effects. Core v0 does not add a common-good registry, charter voting, or platform adjudication of common-good compatibility; those remain Extension v1+, and conflicts requiring legal, environmental, cultural, or scientific authority route to external channels.

When a project combines design and execution, creation should define explicit `Project Phases`. The design phase should produce an auditable design package and a minimum public-value baseline before any later execution phase can release funds.

Example:

```text
Design and Construction of Multi-court Facility in Macul:
  design phase -> dimensions, public access, bathrooms or accessibility commitments where required, budget refinement, fulfillment evidence plan;
  construction phase -> construction milestones, fulfillment evidence, fiscalization, disbursement.
```

## Open project model

When published, the project becomes open.

Open means it can receive:

- funding;
- fiscalizer offers;
- evidence producer commitments;
- comments;
- complaints;
- beneficiary confirmations where applicable;
- community observation.

Open does not mean execution may start.

A project becomes execution-ready only when all applicable closure conditions are complete.

For phased projects, execution-ready may apply to a specific phase. A parent project can be open and receive reserved execution funding while a prior design or preparation phase is pending, but the later execution phase is not execution-ready until the prerequisite phase is accepted and the phase satisfies its threshold, control, assurance, and guarantee-materialization requirements.

## Lifecycle after publication

Lifecycle:

```text
Open project
→ parallel closure of conditions
→ execution-ready
→ in execution
→ milestones
→ fulfillment evidence submission
→ fiscalizer review
→ disbursement decision
→ correction / pause / reformulation / revocation if needed
→ closure
→ final evaluation and reputation effects
```

The project does not advance through a rigid sequential bureaucracy. It advances through condition completion and fulfillment-evidence-based checks.

## Disbursement model

Disbursement is conditional release.

Each release requires:

- phase gate acceptance where applicable;
- milestone;
- fulfillment evidence;
- review;
- blocking check;
- rule applied;
- financial order where money movement is required;
- audit trace.

Before a project can receive execution funding commitments, its disbursement milestone plan should pass specialized validation for milestone coherence, fulfillment evidence requirements, release amounts, partial-release rules, retentions, protected advance-payment rules, and phase-gate treatment where applicable. Unresolved critical validation failures block financing.

Before funds are released, the disbursement check should also confirm the applicable Financial Assurance Profile, any required Guarantee Materialization Record, and any required Post-Closure Coverage Profile or coverage-materialization reference.

A017 adds disbursement-gaming tests over existing milestone and assurance objects, not new payment machinery: every milestone links to budget line, phase, value relevance, evidence need, review basis, blocker check, retention, and release amount; advance payment carries recoverability, retention, direct supplier payment, guarantee, or equivalent protection; avoidably weak milestone design can trigger designer/modeler responsibility review; the fiscalizer states why the evidence supports release, partial release, retention, or rejection; and citizen-facing summaries separate funding, reservation, release, retained funds, and guarantee status. Core v0 does not add per-project actuarial guarantee calibration or automated milestone-design scoring; milestone quality rests on human review backed by designer responsibility and retention.

A pending design gate is not by itself a critical validation failure if the phase plan, public-value baseline, reserved-fund rule, and fund-treatment rule are explicit. It is a release blocker: later-phase execution funds remain reserved until the prerequisite design phase is accepted.

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

Remaining funds do not automatically belong to the executor.

The platform may generate `Financial Orders` for release, retention, return, reassignment, recovery, guarantee execution, or balance closure. Treasury, a custodian, escrow service, bank, or country-specific financial infrastructure executes valid orders and reports status. The same external infrastructure or a lawful guarantor may also confirm guarantee materialization. It does not decide project value, select projects, fiscalize milestones, define guarantee requirements by discretion, or reject payments by civic preference.

Where a covered post-closure finding requires money movement, correction cost coverage, retained amount release, guarantee execution, insurance or bond use, or equivalent response, the platform may generate the valid financial or coverage order. The custodian, insurer, guarantor, escrow provider, or lawful equivalent executes or reports the technical/legal block; it does not decide value fulfillment, complaint truth, or reputation.

Budget Liquidity Smoothing is not required for Core v0. A future or country-specific implementation may use a public, capped, stress-tested policy to manage cyclical allocation capacity against an authorized annual or period budget. It must not become hidden virtual money or treasury discretion. Treasury may report and execute a lawful smoothing rule, but it cannot choose projects, alter civic priorities, validate evidence, select fiscalizers, or approve disbursements by preference.

## Reformulation, pause, and revocation

The system must handle problems proportionally.

Response hierarchy:

```text
Minor problem → correction
Relevant but salvageable change → reformulation
Temporary blocker → pause
Severe non-compliance or impossibility → revocation
```

Rules:

- no silent editing of core promises;
- no erasing old versions;
- no hiding effect on funds;
- no unresolved blockers ignored;
- no revocation without traceable reason;
- no treating every complaint as automatic project destruction.

Pause must distinguish systemic platform effects from material/legal suspension. The platform may pause affected system scope, funding, disbursement, milestone advancement, phase gate acceptance, or closure. Physical construction halt, permit revocation, sanction, or legal-right suspension requires competent external authority, legal rule, court/regulator order, or enforceable accepted obligation where applicable.

Operational reformulations may preserve the value thesis. Material value reformulations cannot unilaterally rewrite what funders financed and beneficiaries expected; they require visible cause analysis, preserved history, funding effects, and role-specific responsibility review.

H021 adds the project variation classification test before the response path is chosen:

```text
Minor variation or correction -> record/correct
Operational variation -> active Reformulation Policy
Material value reformulation -> C017 Reformulation Proposal
Substitutive reformulation -> new project or original-project failure/closure
```

Example:

```text
A sports-school schedule change may be operational if the same 80 children, workshop count, and fulfillment evidence obligations remain.

Reducing the target from 80 children to 60 children changes the value promise and must use the material value reformulation path.
```

In a design-and-execution project, a failed design gate may trigger the same hierarchy. If the Macul design removes promised public access, omits required bathrooms, changes court dimensions materially, or weakens fulfillment evidence requirements, construction cannot proceed as if nothing changed. The issue must be corrected or classified as material reformulation, substitutive reformulation, rejection, or closure under the active policy.

Reformulation frequency, minimum spacing, deadline-extension effects, and exhaustion consequences are not universal application constants. They should be defined in a visible reformulation policy for the project, public function, operating mode, or protocol. In tutored mode, the administrator or tutored authority may configure concrete parameters. In non-tutored or open modes, the competent authority, community mechanism, or active protocol defines the strategy.

## Project closure

A project can close as:

```text
fulfilled
partially fulfilled
unfulfilled
revoked
expired
reformulated into new version
```

Closure must show:

- promised value;
- actual delivered value;
- metrics achieved;
- beneficiaries confirmed;
- fulfillment evidence status;
- budget used;
- unused funds;
- complaints status;
- fiscalizer final report;
- post-closure coverage mechanism, active window, covered scope, and expiry route where applicable;
- reputation effects.

Under H008, closure should create a `Project Closure Accountability Record`. This record aggregates the accepted project promises, expected fulfillment/control evidence, submitted evidence, evidence sufficiency status, EvaluationRecords, FiscalizationReports, financial closure, unresolved issues, Responsibility Events, Reputation Inputs, and citizen-facing closure explanation.

The record is the technical place where the system says:

```text
what was promised
what was evidenced
what was reviewed
what remained unproven
what happened to money
which roles became responsible for which outcomes
```

A project cannot close as fulfilled when its main commitments remain unsupported by sufficient, reviewed, traceable fulfillment/control evidence.

Closure also does not mean indefinite internal complaint availability. If the project has an active Post-Closure Coverage Profile, covered complaints, contradictory evidence, hidden antivalues, or defects may be reviewed inside the platform only during the declared window and within the declared scope. After the window expires, or when the issue is outside coverage, the ordinary route is external: court, regulator, comptroller, contract enforcement, competent authority, or another country-specific path. A final external decision may later be recorded where the active rule allows responsibility, reputation, or historical correction effects.

Reputation should not be calculated directly from closure labels alone. Closure category is procedural context; role-specific reputation updates should derive primarily from verified fulfillment of the value thesis, metric breakdown, founded complaints, fulfillment evidence corrections, and responsibility events.

Citizen, beneficiary, funder, and affected-party evaluations may remain visible as soft or experiential signals. They become formal reputation inputs only when the relevant review path connects them to verified fulfillment, founded complaint correction, or role-specific responsibility.

Complaint filing, support, quote, funding, admissibility, referral, and pending systemic pause are procedural signals. They may be visible in project history, but formal negative reputation requires final resolution, founded responsibility, confirmed non-compliance, role-specific Responsibility Event, or an external decision that establishes responsibility.

Verified discovery may create positive role-specific reputation when a reviewed contribution materially improves information reliability, prevents loss, corrects false or manipulated contextualized evidence, or reveals a hidden issue. Raw accusations, AI anomaly flags, and popularity signals do not create reputation effects by themselves.

H014 organizes this as a traceable chain:

```text
Reputation Signal -> Reputation Input -> Reputation Update -> Reputation Summary
```

Signals are visible context. Inputs are reviewed sources that may affect reputation. Updates apply an input to an actor in a specific role. Summaries are citizen-facing navigation layers over the role-specific records.

## Reputation

Reputation must be role-based.

Examples:

- executor reputation: execution performance;
- modeler reputation: design quality;
- fiscalizer reputation: review quality and independence;
- evidence producer reputation: technical adequacy, accuracy, traceability, usefulness, and correction history;
- complainant reputation: good-faith signal quality or abuse patterns.

Rule:

> Reputation follows role responsibility. It should not collapse all participation into one generic score.

Related organizations, holding-linked companies, owners, directors, controllers, project leads, technical leads, and financial leads may be visible in the relationship graph, but reputation effects require a reviewed role-specific basis. Mere proximity to a failed project, raw public criticism, or shared corporate group membership should not automatically alter reputation.

## Performance history visibility

Core v0 should include a lightweight Performance History Surface.

This surface is a citizen-facing navigation layer derived from reviewed records. It should not become a new formal judge, a universal score, a social-credit mechanism, or an automatic allocation rule.

The surface should aggregate:

- Project Closure Accountability Records;
- EvaluationRecords;
- FiscalizationReports;
- Responsibility Events;
- Reputation Summaries;
- financial closure outcomes;
- final or procedurally classified complaint outcomes;
- reviewed fulfillment/control evidence sufficiency patterns.

The first comparison unit is role performance, not every specific value ever declared by a project.

Examples:

- executors: completed projects, partial or unfulfilled projects, milestone reliability, evidence sufficiency pattern, budget closure, correction responsiveness, severe responsibility events;
- modelers/designers: accepted design deliverables, rework, phase-gate approval record, material design omissions found after review;
- fiscalizers: timeliness, review completeness, weak-evidence correction record, findings later confirmed, corrected, contradicted, or overturned;
- evidence producers: qualification-fit rate, accepted evidence rate, insufficient evidence rate, metadata completeness, method adequacy, corroboration usefulness, material corrections after review.

The detailed values, metrics, antivalue ceilings, evidence items, and closure records remain available in Layer 5. The ordinary citizen-facing history should be generic and comparable by role, with drill-down when the user needs to inspect the source.

Performance comparisons should disclose data sufficiency and should be constrained by meaningful context such as role, public function, project size, risk, complexity, regulated status, territory, or operating mode where relevant. Core v0 should not rank all social value through one universal performance number or public-value-per-currency score.

## Operating modes

A public function may operate in different modes during transition:

```text
Closed
Tutored
Semi-open
Open
Suspended
```

Tutored or semi-open modes may require institutional moderation before publication or under defined triggers.

Operating mode decisions should be visible and traceable.

Core v0 does not force a country to leave tutored mode. It requires tutored governance to be visible. Material tutored decisions should create public Governance Resolution objects, and review silence should create Review Timeout Resolution objects under a publicly configured timeout policy.

A011 adds a boundary over this baseline, not a new adjudication layer. Core v0 should preserve structured data needed to audit moderation patterns later: decision result, rejection reason category where practical, scope, rule/version, responsible authority or process, review window, decision date, review time, timeout status, suggested next path, AuditEvent reference, and known authority-linked operator relationships. Formal moderation-abuse dashboards, automatic possible-abuse findings, operator-concentration analytics, and cross-actor rejection-rate comparisons remain Extension v1+ or country/administrator observability.

A016 adds transition-pilot observability, not a transition-forcing mechanism: a pilot should expose whether an incumbent institution preserves control while presenting the pilot as participatory. The minimum incumbent-resistance indicators read from the same OperatingMode, PlanningScope, GovernanceResolution, and timeout objects: scope share opened to distributed financing; approval, rejection, and timeout rates; rejection-reason comparability; authority-linked operator participation; public-operator privileges, subsidies, guarantees, or data access; independent versus controlled fiscalization rates; and pilot outcomes compared with the incumbent baseline. Core v0 adds no mechanism that compels institutional transition, protects the migrated budget share, or overrides legal authority; those levers belong to country implementation and ordinary politics, and the related fiscal channel is attacked separately in A021. The declared limitation is political: a determined incumbent can still strangle a pilot through scope, budget, and legal choke points, and the architecture's claim is only that such strangulation becomes measurable and comparable instead of invisible.

## Protocol change governance

Core v0 includes a minimum meta-governance discipline for changing system rules.

It does not implement a full constitutional meta-governance system, but it must prevent hidden rule changes.

The model distinguishes:

```text
Reformulation Proposal:
  changes one project or project version.

Administrative Rule Change:
  changes a configured parameter, threshold, eligibility rule, review period,
  guarantee requirement, complaint threshold, or similar operational rule.

System Implementation Change:
  changes software, algorithmic behavior, validator logic, AI model,
  interface behavior, schema, migration, or technical release.

Protocol Change Proposal:
  changes governing protocol in non-tutored mode.
```

In tutored mode, an administrator or implementing ministry may configure rules within its mandate, but every material change must be public, versioned, justified, scoped, non-surprising by default, attached to an effective date, and governed by a transition rule.

In non-tutored mode, major protocol changes require a visible Protocol Change Proposal with public reason, scope, impact analysis, review, sandbox or simulation where required, approval, implementation date, versioned update, and rollback path where applicable.

Citizen-facing layers should summarize what changed, why, when it takes effect, what it affects, and whether existing projects are protected, transitioned, or reviewed. Layer 5 preserves the full rule-change object and implementation trace.

Material changes to ordering rules, urgent-slot rules, recommendation logic, default Home behavior, AI-summary generation, validation logic, warning suppression, or citizen-facing labels should not be shipped as invisible product tuning when they may affect funding, legitimacy, evidence use, disbursement, reputation, closure, or complaint paths. They belong in the applicable SystemImplementationChange, AdministrativeRuleChange, GovernanceResolution, ProtocolChangeProposal, and AuditEvent trail.

Example:

```text
If the guarantee requirement increases from 5% to 20%, the rule change must
state whether it applies only to future projects, unpublished drafts,
materially reformulated projects, or already active projects under an
exceptional emergency rule.
```

## Treasury / public revenue authority

In v0, treasury or revenue authority is treated as infrastructure integration, not a civic decision-maker.

It may support:

- collection;
- custody;
- signed citizen allocation amount reporting;
- settlement;
- disbursement integration;
- compliance with country implementation.

Citizen-level allocation amounts may be calculated through a public, versioned formula configured by the competent authority, institutional administrator, protocol, or country implementation. The simplest supported formula should be equal allocation for all eligible citizens. Other formulas may be contribution-weighted, inverse or redistributive, hybrid, or externally calculated.

Core v0 distinguishes the assignable civic wallet from a non-assignable common pool. The assignable side can fund eligible projects, phase-specific funding lanes, minimum control packages, supplemental control where allowed, complaint-review costs, mitigation, and other protocol-authorized public-purpose vehicles. The non-assignable side may remain for defense, core security, justice guarantees, macro fiscal obligations, emergency reserves, debt service, protected essential floors, or other functions that should not depend only on popularity, discovery visibility, delegation concentration, or monthly citizen attention.

Essential service protection does not require centralized state service provision. A protected floor may coexist with a distributed service lane where eligible public, private, nonprofit, cooperative, concession-like, state-owned where eligible, or community operators compete to provide service under the same value, evidence, fiscalization, continuity, complaint, revocation, replacement, and reputation rules.

For continuity-sensitive projects, funding should not hide the difference between initial service financing and future service continuity. A six-month care service may be financeable in the distributed lane, but the project should disclose `funds first six months`, the renewal alert date, the wind-down rule, and whether a continuity-need Idea will be opened before expiration. This makes the funding gap visible earlier than many current public budgeting processes, where continuity requests may be reduced, delayed, or cancelled without public trace.

If the formula depends on sensitive tax, vulnerability, territorial-priority, or registry data, the platform should not receive the raw dataset. It should consume only an authorized allocation amount from an `Allocation Amount Provider`, such as treasury, tax authority, social registry, ministry system, lawful custodian, or signed batch file.

It may execute protocol-valid financial orders and reject or suspend them only for closed technical or legal causes, such as invalid signature, duplicated order, insufficient real funds, invalid destination account, legal freeze, required compliance block, malformed order, or ledger mismatch.

It does not decide project value, select ordinary projects, approve milestones by discretion, fiscalize by default, resolve complaints, or use custody power to override citizen allocation choices.

## Out of scope for v0

v0 should not attempt to solve everything.

Out of scope or future extension:

- universal cross-domain public value ROI ranking;
- full national transition of all public functions;
- full distributed construction of a national roadmap;
- complex subdelegation and paid delegation markets;
- universal replacement of public institutions;
- public authorities or authority-controlled operators as internal project competitors in the same controlled scope;
- full legal implementation by country;
- advanced macro-budget balancing;
- full common-good charter governance;
- common-good registry, charter voting, and platform common-good adjudication beyond the A015 sufficiency test;
- resistance-pattern analytics, cross-country transition comparisons, and any mechanism that compels institutional transition or protects the migrated budget share beyond the A016 indicators;
- per-project actuarial guarantee calibration and automated milestone-design scoring beyond the A017 disbursement-gaming tests;
- automated collusion-detection engines, network-analysis scoring, and investigative capability beyond the A018 collusion observability surfaces;
- full personal AI guides;
- advanced inferred recommender systems;
- advanced participation-equity analytics, demographic gap measurement, and inclusion dashboards;
- quantitative complexity metrics, object-count ceilings, and implementation-cost models;
- beneficial-ownership registry verification and relationship-graph analytics;
- deep predictive scoring as a decision authority.

## Future extensions

Potential later versions:

- distributed roadmap construction through votable planning areas;
- public value return per peso;
- richer reputation models;
- more advanced delegation;
- common-good governance programs;
- composite programs;
- institutional observability dashboards;
- participation-equity and accessibility outreach observability;
- transition maturity metrics;
- AI-assisted project generation and catalog governance;
- advanced fraud and capture detection;
- cross-project benchmarking.

## v0 success criteria

A v0 pilot is successful if it can demonstrate:

- citizens can understand projects quickly;
- projects can be created as verifiable public promises;
- funds remain conditional and traceable;
- fulfillment evidence and fiscalization actually affect disbursement;
- complaints can pause or correct serious problems;
- project history cannot be erased;
- executors cannot self-validate;
- citizens can follow outcomes;
- closure explains value delivered and money used;
- reputation effects align with role responsibility.

## Design rule

> v0 should be small enough to implement, strict enough to be trustworthy, and open enough to evolve.

## Status

Accepted as Distributed Governance System v0 Blueprint.
