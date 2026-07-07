# Project Roadmap

## Purpose

This roadmap defines the working path for the Distributed Governance Research project from exploratory conversation into a bounded architecture, then into a rigorous theoretical framework, and later into publishable or implementable outputs.

The project has now moved from broad discovery into v0 consolidation. The primary C001-C025 integration pass has propagated the accepted contradiction resolutions into the main core corpus.

Current working decision, 2026-07-01:

```text
Run a residual audit of diagrams, indexes, and stale references next.
The v0 diagram source format is now Markdown plus Mermaid, with generated SVG outputs treated as secondary artifacts under `docs/diagrams/generated/`.
C020 is resolved: tutored mode may be permanent as an external implementation choice, but tutored decisions and timeouts must be public civic objects.
C021 is resolved: simple user-facing signals and a minimal administrative observability baseline are Core v0, while the full universal institutional observability panel remains Extension v1+.
C022 is resolved: full common-good governance remains Extension v1+, but Core v0 projects must declare relevant common-good impacts through risks, antivalues, affected parties, fulfillment/control evidence, and fiscalization.
C023 is resolved: citizen-chosen delegation concentration is allowed by default, but must be visible through soft warnings, represented-weight disclosure, reporting, and observability; hard caps are configurable, not universal.
C024 is resolved: verified identity remains mandatory, public visibility depends on role and context, beneficiary privacy uses aggregate or restricted visibility where needed, and protected identity is a justified exception for specific sensitive actions rather than an anonymous layer.
C025 is resolved: discovery may organize attention, but Home categories are user-customizable, project-list ordering must be visible and switchable, urgent/recommended visibility must show reasons, and Core v0 excludes paid promotion and opaque manual boosting.
C001-C025 have been propagated into the main core documents, contradiction checklist, citizen flows, and superseded hypotheses.
The v0 diagram index has been converted into a master index, the main v0 diagrams now live as canonical Mermaid sources under `docs/diagrams/`, and Mermaid CLI is installed locally through npm for reproducible SVG generation.
The first Phase 2 formal ERD has completed its relationship audit: it now preserves scoped role assignments, idea/project separation, metric-to-evidence traceability, lane-specific funding targets, fiscalizer offers, reformulation objects, and scoped systemic pause effects.
The Project object state diagram with phase substates has been created: parent `Project` states are separated from operational `ProjectPhase` substates, and phase blockers escalate only through scoped formal records.
The Contextualized Evidence Item state diagram has been created: evidence context, privacy/safety review, sufficiency, corroboration, contradiction, report linkage, formal evaluation use, verified discovery, and no-effect archival are separated.
The Complaint Evidence and Review state diagram has been created: submitted complaint, quote, support, funding, admissibility, scoped systemic pause, referral, external suspension, final resolution, and role-specific consequence paths are separated.
The Funding Commitment and Disbursement state diagram has been created: committed, reserved, paused, blocked, retained, approved-for-release, financial-order-issued, custodian-execution-blocked, released, returned, reassigned, recovered, assurance, guarantee, and closure states are separated.
The Project Evidential Contract state diagram has been created: contract baseline, fulfillment evidence needs, evidence producer offers, contract-match priority, lower-priority out-of-contract evidence, qualification/quality/sufficiency review, and formal effect routing are separated.
The Control Subproject and Fiscalization Assignment state diagram has been created: control requirements, offer windows, eligibility/conflict review, package funding, assignments, reports, secondary audit, replacement, formal-path effects, and reputation review are separated.
The Delegation state diagram has been created: base-rule selection, delegation scope, concentration disclosure, request/acceptance, active authority, delegated action records, represented weight, cap effects, reports, revocation, resignation, expiry, and fallback activation are separated.
The Operating Mode transition state diagram has been created: Closed, Tutored, Semi-open, Open, Suspended, mode-change review, transition rules, tutored review windows, Governance Resolutions, Review Timeout Resolutions, timeout policy effects, and external authority boundaries are separated.
The Governance Resolution sequence diagram has been created: authority decisions, required public fields, timeout records, citizen audit actions, configured clarification/correction/appeal paths, audit events, and aggregate observability effects are separated.
The Audit Event schema diagram has been created: actor/process context, role or authority basis, object reference, transition, source record, rule/version, effect, visibility/privacy treatment, append-only correction pattern, Layer 5 access, and observability projections are separated.
The Responsibility Matrix by Role has been created: role authority, disclosures, prohibited conflicts, evidence or record outputs, formal effects, reputation exposure, and audit references are separated.
The Implementable Object Schema Draft has been created: common field primitives, base object fields, actor/role references, object refs, rule/version refs, source records, visibility/privacy fields, effect refs, AuditEvent refs, and minimum object-group field sets are separated.
The Phase 3 attack queue has been created under `attacks/`: eighteen attack briefs A001-A018 now prepare the next architecture-attack round with description, project location, problem, recommended resolution path, theoretical base, social reasons, conflict-of-interest risks, inconsistencies, stress scenarios, review checklists, and expected resolution outputs.
The Phase 3 defense queue has been created under `defenses/`: eighteen defense briefs D001-D018 are paired with A001-A018 and classify each attack as founded, partially founded, unresolved, a difference of judgment, or an editorial-distortion risk while citing project documents and literature anchors.
The Phase 3 attack-defense review has been integrated into accepted resolution documents `docs/67` through `docs/84`: each founded or partially founded attack now has a proportional accepted improvement that preserves the project's functional editorial line and is cross-referenced from its A00N and D00N files.
A001 propagation is integrated: Project Legitimacy Profile is now represented as a threshold-driven, evidence-fed profile using Required Evidence Package needs, Readiness Evidence for affected-party mapping and consultation, nearby-project asynchronous participation, independent evidence-producer or reviewer corroboration where required, and citizen-facing labels that prevent funding completion from being treated as legitimacy. The correction distinguishes pre-execution readiness evidence from fulfillment evidence.
A008 propagation is integrated as a platform-influence boundary, not a new model layer: Core v0 relies on C008 and C025 controls, visible discovery reasons, user-controlled ordering and Home customization, source-linked AI assistance, material-warning visibility, and rule-change auditability, while per-impression logs, causal exposure-to-funding metrics, ranking-bias dashboards, and a separate `PlatformInfluenceRecord` remain outside Core v0.
A009 propagation is integrated as a participation-equity boundary, not a new indicator layer: Core v0 improves the current low-participation baseline through asynchronous discovery, nearby-project following, protected identity, simple actions, delegation visibility, participation-support projects, required affected-party evidence where Threshold Policy demands it, and auditability. Low participation, missing voices, or concentration are warnings or observability inputs unless a Threshold Policy makes the missing participation evidence a formal condition.
A010 propagation is integrated as delegation-concentration stress thresholds, not a new concentration authority, model layer, or universal hard cap. Core v0 reinforces C023 through represented-weight warnings by scope and action type, report-sufficiency status for high-concentration delegates, related-delegate/support-provider/related-project disclosures, configured cap-effect visibility, delegated-action records, AuditEvents, and administrative observability. Advanced delegation-network analytics, anti-cluster algorithms, and concentration dashboards remain Extension v1+ or implementation-level observability.
A011 propagation is integrated as a tutored-moderation boundary, not a new abuse tribunal or citizen-facing pattern dashboard. Core v0 preserves GovernanceResolution, ReviewTimeoutResolution, scope, rule/version, responsible authority/process, review window, review time, timeout status, reason category where practical, known authority-linked operator context, AuditEvents, and basic administrative observability so moderation patterns can be audited later. Formal abuse tests, automatic possible-abuse findings, rejection-rate comparability, selective-duplicate analytics, and operator-concentration dashboards remain Extension v1+ or country/administrator observability.
Accepted C### resolution documents supersede conflicting older hypotheses and secondary notes unless deliberately reopened.
C007/C020 clarification: public authorities remain excluded from internal project participation in scopes they control, but may perform external tutored-scope moderation for eligibility, duplication, scope, or compatibility where a tutored operating mode grants that authority. Public ownership alone does not exclude a state-owned or publicly owned operator; eligibility depends on operating mode, control relationships, privilege, disclosure, independent fiscalization, and equal accountability rules.
H022 is aligned: every execution-financeable project must define a proportional Project Evidential Contract before execution funding; the contract connects value promises, metrics, milestones, material claims, fulfillment/control evidence source roles, corroboration, fiscalization, disbursement, complaints, closure, privacy, and audit history without creating one universal centralized evidence code.
H023 is aligned: reliable information is handled through accountable material information claims, contextualized evidence and corroboration status, verified discovery incentives, role-specific responsibility events, and AI anomaly assistance that does not decide truth, responsibility, fund release, or legal consequences.
H024 is aligned: complaints use a simplified support-window and fiscalizer-quoted review model; administrators configure required support count, support window days, quote deadline, and fallback rules; citizens may reserve conditional review funding while the fiscalizer quotes without seeing reserved totals; objections are counter-signals rather than vetoes; regulated project suspension requires competent authority or judicial action where applicable.
H025 is aligned: the civic tax wallet is a non-withdrawable public allocation right, citizen-level amounts are defined by public configurable formulas, equal allocation for all eligible citizens is an explicit simple option, and sensitive tax or registry data remains outside the platform through authorized allocation amount providers.
H026 is aligned: project funding, social support, justified objection, and formal complaint are separate signals; support and justified objection are reversible civic signals, while funding remains governed by C005-style commitment rules and complaints remain formal review objects.
H027 is aligned: proportional project thresholds are represented through visible Threshold Policies connected to project type, public function, operating mode, protocol rules, and country implementation where applicable; citizens see simple missing conditions, while the audit layer preserves the policy source and rationale.
H028 is aligned: related-party status does not automatically invalidate a project, but it must be declared, classified, and handled proportionally through warnings, safeguards, independent control, reformulation, blocking, rejection, or responsibility review depending on severity and disclosure.
H021 is aligned: project variation control is a classification layer under C017 and H040, distinguishing minor corrections, operational variations, material value reformulations, and substitutive reformulations while keeping ordinary citizen labels simple and Layer 5 fully auditable.
H020 is aligned: proportional procedural burden is the procedural-depth layer of Threshold Policies; AI may help discover required documents and missing conditions, but document acceptability is validated only by competent authorities, independent reviewers, certifiers, fiscalizers, or protocol-defined review bodies where the active policy requires it.
H019 is aligned: project modeling, execution, and fiscalization remain distinct responsibilities, while integrated design-and-execution projects are represented through Project Phases. Execution-phase funding may be collected while design is pending, but remains reserved and cannot be released until the required design phase gate and control conditions are accepted.
H018 is aligned: every financeable project must declare a value thesis, value floors, proportional value verification package, antivalue ceilings where relevant, and fulfillment/control evidence needs before receiving resources. The evidential contract defines needs rather than preselected producers; independent evidence producers later offer fulfillment/control evidence tied to value floors, antivalue ceilings, metrics, material claims, milestones, phases, risks, or declared antivalues.
H017 is aligned: meta-governance and protocol evolution are Core v0 as a minimum visible rule-change discipline, not as a full constitutional implementation. Core v0 distinguishes Reformulation Proposals, Administrative Rule Changes, System Implementation Changes, and non-tutored Protocol Change Proposals, with public reason, effective date, transition rule, citizen-facing summary, and audit trace where material.
H016 is aligned: fiscalization is distributed in available actors and fulfillment/control evidence sources, but protocol-selected in responsible assignment. Open observation, fulfillment/control evidence production, responsible fiscalization, technical or reinforced fiscalization, and capped secondary fiscalization remain distinct layers; executor-controlled selection, direct payment, unlimited secondary control, and popularity-only fiscalizer selection are excluded.
Evidence-context taxonomy is aligned: Core v0 now distinguishes Complaint Evidence, Fulfillment Evidence, Control Evidence, Contradiction Evidence, Administrative Observability Data, and Research Evidence. Bare Evidence Item remains only as a technical object with required evidence_context.
H015 is aligned: formal evaluation is dimension-scoped and effect-scoped. Citizen observations, beneficiary experience, technical review, fiscalizer conclusions, complaint findings, fulfillment evaluations, and reputation inputs remain distinct evaluation contexts; formal effects such as disbursement, closure, responsibility, or reputation require an EvaluationRecord with observability basis, authority or qualification basis, contextualized evidence used, evaluation type, effect, and review status.
H014 is aligned: reputation moves through a traceable chain from Reputation Signal to reviewed Reputation Input to role-specific Reputation Update to citizen-facing Reputation Summary. Raw opinion, popularity, suspicion, unfounded complaints, unreviewed evidence, AI anomaly flags, proximity to failed projects, corporate-group proximity, and closure labels do not directly update formal reputation.
H013 is aligned: project conflict handling now distinguishes complaint admissibility/referral records, scoped systemic pause, material/legal suspension, final resolution, mitigation/correction, revocation, and role-specific reputation effects. A fiscalizer may trigger system effects inside the platform, but material/legal suspension requires competent external authority, legal rule, or enforceable obligation where applicable.
H012 is aligned: projects now use a Value-Antivalue Profile with value floors and antivalue ceilings. Values are minimum positive commitments to reach; antivalues are maximum negative effects not to exceed. Both connect to metrics, fulfillment/control evidence, fiscalization, disbursement, closure, complaint paths only when explicitly triggered, and reviewed role-specific reputation or responsibility effects.
H011 is aligned: every execution-financeable project now uses a Financial Assurance Profile. Financial assurance is universal across social projects, not construction-specific; Core v0 uses a global guarantee percentage configured by administrator, protocol, operating mode, or lawful country implementation rule; proposers, designers, and executors cannot self-select lower assurance categories; guarantee materialization requires custodian, guarantor, insurer, treasury, bank, escrow, or lawful equivalent confirmation.
H010 is aligned: every financeable project now has one Primary Responsibility Anchor, distinct from its broader value thesis. Secondary contributions are allowed, but formal secondary commitments require proportional metrics, fulfillment/control evidence, and consequences; projects with multiple independently primary outcomes should be split, phased, or represented as composite structures rather than hiding multiple accountability centers in one project.
H009 is aligned: every financeable project must align with an active Planning Scope before execution readiness. Core v0 requires visible, versioned, auditable planning-scope alignment, but does not define the full mechanism for constructing a national, regional, communal, or thematic roadmap. The idea of distributed roadmap construction through votable planning areas is preserved as an Extension v1+ / open question, not lost inside Core v0.
H008 is aligned: distributed accountability is the full project accountability loop from accepted promise to fulfillment/control evidence, formal evaluation, Project Closure Accountability Record, financial closure, role-specific responsibility, reputation, and future financing context. Critical milestones, disbursements, closure, value fulfillment, antivalue compliance, and reputation cannot depend only on self-report by the actor being evaluated.
H007 is aligned: continuous performance evaluation is represented as role-comparable performance visibility. Core v0 includes a lightweight Performance History Surface derived from reviewed closure, evaluation, fiscalization, responsibility, reputation, complaint-status, financial-closure, and evidence-sufficiency records. It does not create a separate public history for every value label declared by past projects, and it is not a universal score, public-value-per-currency ranking, social-credit mechanism, or automatic allocation rule.
H006 is aligned: assisted deliberation is represented as an Assisted Deliberation Context for material citizen actions. It gives citizens concise, source-visible, correctable context before funding, supporting, objecting, delegating, offering control work, funding complaint review, or reviewing material reformulation where applicable. It structures "why consider this", "what to review carefully", and "dissent / alerts / unresolved issues" without deciding, ranking, certifying truth, allocating funds, suppressing dissent, or replacing citizen judgment.
H005 is aligned: full personal AI guides remain Extension v1+, while Core v0 defines compatibility boundaries for any connected guide. A personal guide may summarize, compare, translate, draft, warn, and help configure citizen choices, but it cannot become a civic actor, delegate, automatic allocation profile, fiscalizer, authority, hidden recommender, or source of material civic action without explicit citizen confirmation or a separately configured auditable platform rule.
H004 is aligned: institutional monopoly reduction now targets opaque, non-contestable monopoly power rather than public ownership by label. Core v0 distinguishes public authorities from state-owned operators: authorities cannot be judge and party in scopes they control, while state-owned operators may compete as ordinary eligible organizations in non-conflicted modes under disclosure, equal evidence, fiscalization, assurance, complaint, revocation, and reputation rules.
H003 is aligned: distributed trust is now incentive-compatible distributed trust. Trust does not mean faith in many actors; it emerges when role-specific incentives, material claims, contextualized evidence, corroboration, contradiction, responsible review, payment/disbursement conditions, reputation, responsibility, consequences, and auditability are connected.
H002 is aligned: distributed resource allocation is bounded to the configured assignable public-purpose share, active planning scopes, eligibility rules, threshold policies, phase gates, evidence, fiscalization, audit controls, and non-assignable common-pool protections; funding does not substitute for legitimacy, execution readiness, disbursement approval, or fulfillment proof.
H001 is aligned: functional distribution is now a functional-layer principle rather than a binary judgment over whole institutions or policy sectors; public guarantees, civil rights, standards, accreditation, coercion, rights deprivation, legal recognition, macro fiscal stability, funding, service provision, execution, evidence, fiscalization, evaluation, and accountability may require different central, hybrid, or distributed architectures inside the same public function. Centralized legal frameworks do not imply centralized state service provision, and platform consequences are distinct from legal consequences.
The legacy skills/ path is retired as an active skill location.
```

## Current diagnosis

The project now has a first integrated **Distributed Governance System v0 Blueprint** plus detailed documents for citizen interfaces, citizen action flows, project creation, project lifecycle, disbursement, fiscalization, contextualized evidence, complaints, reformulation, pause, revocation, and technical auditability.

The main risk is no longer lack of ideas. The main risk is fragmentation: many good documents must now be connected through maps, diagrams, classifications, contradiction resolutions, and a coherent paper structure.

Contradictions C001-C025 have accepted resolution documents and have been propagated into the main core documents. A residual audit of diagrams, secondary notes, and remaining stale references should follow.

The first residual cleanup updated the diagram format, split the v0 diagram set into canonical Mermaid source files under `docs/diagrams/`, installed Mermaid CLI locally, and generated SVG outputs under `docs/diagrams/generated/`.

The second residual cleanup began reconciling older hypotheses with C005 and C017: funding remains a commitment until project outcome, reformulation does not create a default individual withdrawal window, and the system does not promise full recovery of already released funds.

The third residual cleanup clarified C007/C020 and H057: the state may moderate externally in tutored mode to prevent duplicate public spending or out-of-scope projects, but cannot participate as an internal competitor, executor, fiscalizer, or ordinary project moderator.

The fourth residual cleanup aligned session 07 with C001, C002, C007, C013, and C020 while preserving it as a historical distillation.

The fifth residual cleanup propagated C024/C014 into older identity and complaint documents: anonymous formal alerts remain excluded from Core v0, while sensitive alerts and complaints use protected identity for verified actors.

The sixth residual cleanup aligned C014 with C024 and C007: comments require verified authorship, visible identity remains the default, protected identity is a justified per-comment exception, and public authorities appear only as external authority responses or governance-resolution actors where applicable. Eligible state-owned operators use ordinary project-actor response rules when participating under the refined C007 boundary.

The seventh residual cleanup aligned the fiscalization and evidence control model with C002 and C013: execution funding, fiscalizer offers, evidence-producer offers, and control-cost discovery move in parallel, while execution-ready requires both execution budget closure and minimum admissible control package closure.

The eighth residual cleanup accepted a limited supplemental control rule and aligned the older funding-target rule with it: after minimum control closure, additional control-only funding may support at most one secondary fiscalizer or fiscalization auditor and distinct non-duplicative fulfillment/control evidence needs; it never funds execution, expands project scope, creates unlimited fiscalizers, or blocks execution automatically.

The ninth residual cleanup aligned H050 with C022: common-good governance programs, registry mechanics, charter voting, derogation, subordinate charters, full compatibility rule engines, and formal legal authority relationships remain Extension v1+, while Core v0 only requires lightweight project-level common-good impact declaration, active-charter relationship disclosure where applicable, and public auditability.

The tenth residual cleanup aligned H055 with C021: the universal institutional observability panel remains an advanced administrative and institutional Extension v1+, while Core v0 keeps only simple user-facing signals plus the minimum platform-generated administrative baseline needed to operate, audit, and evaluate the first coherent system.

The eleventh residual cleanup aligned H031 and H032 with C025: Core v0 discovery remains explainable, user-configurable, non-commercial, auditable, and based on visible ordering and urgency/recommendation reasons, while advanced inferred recommender systems remain Extension v1+ unless they are explainable, configurable, correctable, controllable by the user, and auditable.

The twelfth residual cleanup aligned H033, H041, and H042 with C007, C008, and C023: delegation may go to eligible citizens, eligible organizations, or configured allocation profiles, while public authorities remain outside internal delegation in scopes they control and AI remains assistance infrastructure rather than a civic delegate or actor.

The thirteenth residual cleanup aligned H058 with C020 and C007: operating modes remain country-configured technical states, tutored mode may be temporary, indefinite, or permanent, and tutored decisions, review windows, timeout policies, Review Timeout Resolutions, and configured timeout consequences must be public, traceable, and auditable.

The fourteenth residual cleanup aligned H054 with C020, C021, H055, and H058: functional transition maturity metrics remain useful for evaluation, comparison, and public audit, but they do not define mandatory political thresholds, automatic budget migration, automatic exit from tutored mode, or automatic institutional replacement. The platform measures, the country decides, and society audits both.

The fifteenth residual cleanup aligned H053 with C007, C020, H054, and H058: sports remains a plausible early pilot sector, but pilot-sector choice, budget share, operating mode, and expansion pace are country implementation decisions. Sports pilots may use tutored review, but material rejection, reformulation, timeout, or scope decisions must remain public and auditable through Governance Resolutions or Review Timeout Resolutions.

The sixteenth residual cleanup aligned H056 with C007 and C020: public authorities remain excluded from internal project participation in scopes they control, but in a configured tutored operating mode they may moderate eligibility, scope, duplication, or compatibility as institutional tutored authorities. This is moderation in practical terms, but not ordinary internal platform moderation; every material decision or timeout must remain public, reasoned, traceable, and auditable.

The seventeenth residual cleanup aligned H052 with C025 and H031: emergency remains an urgency attribute on ordinary projects, not a separate coordination architecture. Emergency visibility must show its reason, remain limited, follow visible ordering or rotation rules where multiple projects qualify, avoid paid promotion or opaque manual boosting, preserve explicit citizen action, and be measurable through observability.

The eighteenth residual cleanup aligned H051 with C022 and H050: composite programs remain Extension v1+ coordination containers for genuinely interdependent projects. They do not replace project-level accountability, create common-good charters, import full common-good governance, hide child-project funding conditions, or pool responsibility away from executors, fiscalizers, evidence, complaints, reputation, and common-good impact declarations at the child-project level.

The nineteenth residual cleanup aligned H059 with C021 and C025: public value return per peso remains an Extension v2/v3 analytical signal, not Core v0, not a universal moral score, not an automatic funding rule, and not an opaque ranking engine. Any future use must compare within transparent domain limits, expose measured commitments, assumptions, fulfillment evidence quality, comparison sets, and audit traces, and preserve explicit citizen funding decisions.

The twentieth residual cleanup aligned H049 with C011, H033, H034, H038, and the delegation and automatic-allocation flows: budget delegation should not become active until the citizen has selected or acknowledged a base allocation profile or fallback rule. If delegation is revoked, rejected, expired, or resigned, the previously selected base rule resumes; the system does not improvise a hidden fallback after delegate resignation. Citizens who never onboard may still be governed by the public protocol default so civic allocation does not remain dormant indefinitely.

The twenty-first residual cleanup aligned H047 with H049 and the delegation/automatic-allocation diagram: citizen revocation remains immediate, simple, and non-retroactive, but budget delegation revocation must also reactivate the citizen's previously selected base allocation profile or fallback rule. Past delegated funding remains valid, future delegated authority ends, and the system must show which base rule resumed instead of creating a hidden post-revocation default.

The twenty-second residual cleanup aligned H046 with C011, C023, H047, H048, and H049: delegated-action reporting should not become a manual bureaucracy for delegates or a complex audit burden for citizens. Core v0 uses system-generated reports from the delegated-action audit trail, with optional delegate explanations, configurable channels and frequency, represented weight, concentration signals, conflict/abstention visibility, and a clear path to revoke future authority while preserving past valid commitments.

The twenty-third residual cleanup clarified H045 without changing its underlying rule: when a delegate acts inside an active delegated scope, the action represents the delegate and all delegators covered by that scope by default. The represented weight, scope, and any configured cap effect must be visible in the action record, delegated-action reports, concentration signals, and observability metrics. Core v0 does not require per-delegator selection for ordinary in-scope delegated actions.

The twenty-fourth residual cleanup aligned H044 with C023, H045, and H046: delegation remains non-compensated by default in Core v0. Delegates may accumulate visible influence and responsibility when citizens voluntarily trust them, but they do not receive automatic commissions, fees, or percentages of delegated civic allocation. Participation-support work may be funded only as separate transparent projects with ordinary project budget, evidence, fiscalization, and audit rules.

The twenty-fifth residual cleanup aligned H043 with C023, H044, H045, and H046: voluntary delegation concentration remains allowed by default, but it must be visible, reportable, revocable, and auditable. Concentration visibility now includes active delegators, delegated allocation, scopes, territory, represented weight, trends, conflicts, separate participation-support funding where relevant, delegated-action reports, revocation/resignation signals, and configured cap effects if any, while ordinary citizens continue to see a simple warning and detail on demand.

The twenty-sixth residual cleanup aligned H042 as the umbrella Core v0 delegation architecture: delegation remains simple scoped authorization to eligible citizens or eligible organizations, not identity transfer, money ownership transfer, AI authority, internal public-authority power in controlled scopes, automatic allocation, or paid asset management. Budget delegation requires a selected base allocation profile or fallback rule before activation; delegation has priority while active; represented weight, concentration, reports, revocation, delegate resignation, no automatic compensation, and fallback continuity are all part of the stable baseline.

The twenty-seventh residual cleanup aligned H041 as the Core v0 participation-capacity boundary: support for citizens can be distributed and fundable through ordinary transparent projects and assistance layers, but it must not become hidden delegation payment, hidden authority, AI civic agency, automatic allocation authority, or internal public-authority participation in controlled scopes. Direct participation, automatic allocation profiles, scoped delegation, participation-support projects, and AI assistance remain distinct mechanisms.

The twenty-eighth residual cleanup aligned H040 with C005, C017, and the operating-mode configuration principle: projects still need funding deadlines and transparent closure-or-reformulation outcomes, but Core v0 no longer imposes a universal number of reformulations or a universal minimum period between reformulations. Instead, each relevant project, public function, operating mode, or protocol must expose a visible Reformulation Policy. In tutored mode, the administrator or tutored authority may configure concrete parameters such as maximum reformulations, minimum days between reformulations, deadline-extension effects, approval authority, and exhaustion consequences; in non-tutored or open modes, the competent authority, community mechanism, or active protocol defines the strategy.

The twenty-ninth residual cleanup aligned H039 as the Core v0 civic-notification baseline: citizens may configure channels, intensity, frequency, and app-only or silent external notification modes, but material in-app civic records remain visible for affected funding, following, delegation, automatic allocation, reformulation, complaint, fiscalization, governance-resolution, and timeout-resolution events. The system reduces interruption without hiding traceability.

The thirtieth residual cleanup aligned H037 with C006 and C007: public revenue custody, treasury integration, escrow, or other lawful custodians remain external infrastructure, not internal civic actors. Core v0 requires a financial-order boundary: the protocol generates valid financial orders for commitment, retention, release, return, reassignment, recovery, guarantee execution, or balance closure; the custodian executes them or reports closed technical/legal execution blocks. Custody must not become project selection, civic value judgment, fiscalization, complaint resolution, discretionary disbursement authority, or public-authority competition inside the platform.

The thirty-first residual cleanup aligned H036 with C005, C016, C017, H037, and the accepted project disbursement flow: funding completion does not mean full transfer, but controlled execution through validated disbursement milestones, fulfillment evidence, fiscalization where required, blocking-condition checks, guarantees, retentions, and protocol-valid financial orders. The citizen sees simple funding and disbursement states, while the technical layer preserves milestone rules, partial-release conditions, guarantee treatment, custodian execution status, recovery limits, and the distinction between unreleased, retained, justified released, disputed, and non-compliant funds.

The thirty-second residual cleanup aligned H035 with C002, C005, C013, H036, and the parallel closure model: funding target closure is budget-lane-specific, not a single undifferentiated overfunding rule. Execution funding closes the executor's fixed budget, but the project is not execution-ready until the minimum admissible control package is funded, selected, and accepted where required. Supplemental control funding remains separate, limited, and non-expansive: it may support at most the allowed secondary fiscalization or distinct non-duplicative fulfillment/control evidence needs, never increases the execution budget, never expands scope, and should reject new contributions once control coverage and fulfillment/control evidence needs are saturated unless a visible protocol rule defines another lawful destination.

The thirty-third residual cleanup aligned H030 with C012 and C018: reputation remains layered, role-based, transparent, and aggregated upward, but formal reputation updates must be traceable to verified value fulfillment, metric breakdowns, accepted fulfillment evidence, fiscalizer evaluation, founded complaint corrections, and role-specific Responsibility Events. Closure labels are procedural context rather than automatic scores, negative effects require demonstrated role responsibility, and ordinary citizens should see a simple reputation summary with inspectable detail underneath.

The thirty-fourth residual cleanup aligned H029 with C014 and C024: protected identity is the general verified-actor visibility mechanism for specific sensitive actions, not only for comments. Comments keep visible identity by default and may request protected identity per comment; complaints, testimony, contextualized evidence submissions, beneficiary confirmations, worker reports, affected-party observations, and similar sensitive formal actions may also request contextual protected identity when public exposure creates a justified safety, retaliation, privacy, or beneficiary-protection risk. This preserves the no-anonymous-formal-power rule while avoiding unnecessary public exposure.

The thirty-fifth residual cleanup aligned H028 with the v0 control, auditability, role, and project-object model: related-party conflicts are declared and classified proportionally, ordinary declared proximity does not automatically invalidate a project, relevant conflicts require public-benefit safeguards and independent control, and severe or hidden conflicts may trigger reformulation, actor exclusion, disbursement blocking, rejection, complaint review, or role-specific Responsibility Events.

The thirty-sixth residual cleanup aligned H027 with the v0 parallel closure, project-object, citizen-interface, audit, and diagram model: proportional project thresholds are now represented as visible Threshold Policies that define which conditions apply before publication, execution-ready status, disbursement, closure, review, or reformulation. The policy may depend on project type, public function, operating mode, risk, territory, technical complexity, common-good impact, related-party safeguards, tutored-scope review, and protocol or country implementation rules. The citizen surface shows what is missing; the audit layer shows why the condition applies and who or what rule defined it.

The thirty-seventh residual cleanup aligned H026 with the v0 project signal model: financial contribution, social support, justified objection, and formal complaint are separate planes. Support and justified objection are reversible civic signals with active and withdrawn states; funding is a financial commitment governed by funding, reformulation, failure, and closure rules; complaints are formal review objects with complaint evidence, affected scope, and procedural effects. Active counts exclude withdrawn signals, while the audit trail preserves history.

The thirty-eighth residual cleanup aligned H025 with the v0 funding, custody, citizen-balance, and administration model: the civic tax wallet is a personal, non-withdrawable public allocation right rather than private cash; the amount available to each citizen is calculated through a public, versioned, configurable institutional or country-implementation formula; equal allocation for all eligible citizens is an explicit simple option; contribution-weighted, inverse or redistributive, hybrid, and externally calculated formulas remain possible; sensitive tax, vulnerability, registry, or territorial-priority data should stay with an authorized Allocation Amount Provider, while the platform receives only the authorized amount, eligibility status, formula version, explanation code, and audit reference.

The thirty-ninth residual cleanup aligned H024 with the v0 complaint, fiscalization, funding, audit, and diagram model: ordinary complaint review now uses a simple configurable support policy with required support count, support window days, quote deadline, and fallback rules. Complaints are sent immediately to the primary fiscalizer or competent reviewer for a public quote, while citizens may support the complaint and reserve conditional review funding. Reserved funding totals remain hidden from the fiscalizer before quote publication. Objections to complaints are counter-signals and counterevidence, not vetoes. Review starts only after the support threshold, quote, and review funding conditions are met, followed by fiscalizer admissibility review. For legally regulated projects, platform review can create reports, evidence indexes, referral packages, and public traceability, but operational suspension, permit revocation, legal sanction, or construction halt requires the competent authority or court where applicable.

The fortieth residual cleanup aligned H023 with the v0 contextualized evidence, complaint, value-verification, reputation, audit, entity-map, and evidence/fiscalization diagram model: material project statements are now accountable claims connected to contextualized evidence, contradiction, review, correction, and role-specific responsibility. Verified discovery may create reward or reputation effects only after review confirms materiality and usefulness. AI may assist with anomaly, privacy, duplicate, missing-evidence, or contradiction detection, but does not decide truth, fraud, responsibility, fund release, or legal consequences.

The forty-first residual cleanup aligned H022 with the v0 project-object, project-creation, value-catalog, fiscalization, evidence-production, disbursement, lifecycle, audit, entity-map, scope, and project-creation diagram model: every financeable execution project should define a Project Evidential Contract before execution funding. The contract is project-specific and proportional, records how fulfillment will be evidenced, and stays constrained by value-catalog requirements, protocol minimums, threshold policies, operating mode, risk, and competent-authority boundaries. Ordinary citizens see a simple verification summary, while Layer 5 preserves the full versioned contract and any material weakening or change.

The forty-second residual cleanup aligned H021 with C017, H040, and the v0 reformulation, lifecycle, disbursement, audit, entity-map, blueprint, scope, and diagram model: project variation control now classifies changes as minor corrections, operational variations, material value reformulations, or substitutive reformulations. Operational changes preserve the value thesis and follow the active Reformulation Policy; material value changes require a C017 Reformulation Proposal; substitutive changes become new projects or close, fail, or revoke the original under original terms. Citizen-facing labels remain simple, while Layer 5 preserves the full comparison against the accepted base design.

The forty-third residual cleanup aligned H020 with H027, C002, C013, C020, and C008: every project keeps the same conceptual structure, but its required documents, fulfillment/control evidence, guarantees, fiscalization, admissibility review, and technical checks scale through a visible Procedural Burden Profile inside the Threshold Policy. AI may assist requirement discovery and completeness checks, but it does not certify document acceptability. Tutored review belongs to the competent authority and should produce public review traces under C020; non-tutored paid admissibility review may be modeled as a Control Subproject under C002/C013.

The forty-fourth residual cleanup aligned H019 with the v0 project-object, phase, funding, lifecycle, disbursement, control, audit, threshold, related-party, and diagram model: modeler/designer, executor, and fiscalizer remain separate role responsibilities, but a single parent project may combine design and execution through explicit Project Phases. Phase-specific funding lanes allow construction or execution commitments to accumulate while a design phase is pending, but later-phase funds remain reserved and cannot be released until the prerequisite design gate, public-value baseline, control package, and disbursement rules are accepted. Related design-and-build actors or holding-linked companies are allowed only with declaration, proportional safeguards, and independent gate/control where required.

The fulfillment/control evidence-quality open question has been captured and later bounded by A013: independent evidence producers reduce executor self-report risk, but hard KPI fulfillment/control evidence also needs a producer qualification and method-fit standard before it can support disbursement, closure, value fulfillment, or reputation. Detailed scoring, calibration, AI-generation detection, and country-specific legal admissibility remain implementation work.

The forty-fifth residual cleanup aligned H018 with the v0 value-thesis, metric, evidential-contract, fulfillment/control evidence-production, fiscalization, audit, object-map, scope, and creation-flow model: a financeable project must connect its value thesis to core value commitments, proportional value verification packages, fulfillment evidence needs, independent evidence-producer offers, and review consequences. The Project Evidential Contract defines what must be evidenced and through which source roles, but it does not preselect the evidence producers. Contract-matched fulfillment evidence has higher eligibility priority; unexpected fulfillment/control evidence may still be accepted when equivalent, necessary, materially useful, or complementary within the available control budget.

The forty-sixth residual cleanup aligned H017 with the accepted C019 protocol-change governance resolution: Core v0 now treats meta-governance as a minimum rule-change discipline rather than a full constitutional module. It distinguishes Reformulation Proposal from Administrative Rule Change, System Implementation Change, and non-tutored Protocol Change Proposal; material changes require public reason, scope, effective date, adaptation or transition rule where relevant, citizen-facing summary, implementation trace, and Layer 5 auditability. Tutored administrators may configure rules within mandate, but not silently, overnight, or retroactively by default.

The forty-seventh residual cleanup aligned H016 with the v0 control, contextualized evidence, offer, object-map, audit, scope, and checklist model: fiscalization is distributed in available actors and fulfillment/control evidence sources, but responsible fiscalization is assigned through protocolized eligibility, conflict, independence, risk, budget, methodology, and auditability rules. Core v0 distinguishes open observation, fulfillment/control evidence production, responsible fiscalization, technical or reinforced fiscalization, and optional capped secondary fiscalization or fiscalization audit. Fiscalizer offers remain open to eligible actors, but executor choice, direct executor payment, popularity-only selection, first-funded capture, lowest-price-only selection, unlimited secondary fiscalization, and duplicate evidence overfunding are excluded.

The forty-eighth residual cleanup resolved the evidence terminology ambiguity surfaced during H015/H024 discussion: Core v0 now distinguishes Complaint Evidence, Fulfillment Evidence, Control Evidence, Contradiction Evidence, Administrative Observability Data, and Research Evidence. Bare Evidence Item remains only as a technical object with required evidence_context. Complaint filing is not conditioned on observability, while formal fulfillment evaluation requires qualified observability and review. The pass updated core documents, citizen flows, hypotheses, diagrams, generated SVGs, glossary/index entries, and the AGENTS concept-boundary challenge rule.

The forty-ninth residual cleanup aligned H015 with the v0 value-verification, fiscalization, evidence-production, reputation, audit, scope-freeze, classification matrix, object-map, glossary, and checklist model: formal evaluation is now scoped by evaluated dimension and formal effect. Core v0 distinguishes soft public signals, experiential evaluations, fulfillment evaluations, technical or professional reviews, fiscalization conclusions, complaint review findings, and reputation inputs. Ordinary citizens can still report what they saw or experienced, while formal effects require a traceable EvaluationRecord.

The fiftieth residual cleanup aligned H014 with the v0 reputation, evaluation, responsibility, value-fulfillment, audit, scope-freeze, classification matrix, project-object model, object-map, glossary, and checklist model: reputation now moves through Reputation Signal, Reputation Input, Reputation Update, and Reputation Summary. Core v0 rejects direct reputation effects from raw opinion, popularity, suspicion, unfounded complaints, unreviewed evidence, AI anomaly flags, project proximity, corporate-group proximity, or closure labels. Related companies, owners, controllers, directors, and key professionals may be visible, but formal reputation effects require a reviewed role, control, conflict, negligence, direct participation, repeated pattern, or demonstrated responsibility basis.

The fifty-first residual cleanup aligned H013 with the v0 complaint, disbursement, lifecycle, reformulation/pause/revocation, audit, scope-freeze, classification matrix, entity-map, glossary, and reputation model: project conflict handling now separates complaint admissibility/referral records, scoped systemic pause, material/legal suspension, final resolution, mitigation/correction, and revocation. Admissibility can pause affected funding, disbursement, milestones, phase gates, closure, or evidence use inside the platform, while physical halt, permit revocation, legal sanction, or operational suspension requires competent external authority, legal rule, court/regulator order, or enforceable accepted obligation where applicable. Complaint filing, support, quote, funding, admissibility, referral, and pending systemic pause remain procedural signals until final resolution, founded responsibility, confirmed non-compliance, role-specific Responsibility Event, or external decision establishes reputation-relevant responsibility.

The fifty-second residual cleanup aligned H012 with the v0 value thesis, Project Evidential Contract, Value Verification Package, evidence-context, evaluation, reputation, complaint, project-object, creation-flow, audit, scope-freeze, classification matrix, entity-map, and glossary model: projects now define a Value-Antivalue Profile with value floors and antivalue ceilings. Value floors are minimum positive commitments the project must reach. Antivalue ceilings are maximum negative effects the project must not exceed. Both require proportional metrics or qualitative commitments, fulfillment/control evidence, measurement or review method, affected scope, fiscalizer/reviewer handling, and consequences. Failed value floors, exceeded antivalue ceilings, or undeclared antivalues may affect disbursement, correction, mitigation, closure, role-specific reputation, responsibility, pause, or revocation after review, but they do not automatically become complaints; a formal complaint must be explicitly filed and processed under H024/C004.

The fifty-third residual cleanup aligned H011 with the v0 threshold, procedural burden, disbursement, custody, lifecycle, project-object, audit, scope-freeze, classification matrix, entity-map, dashboard, and citizen-funding model: every execution-financeable project now has a Financial Assurance Profile. Assurance is not construction-specific; it applies to care services, school-supply purchases, workshops, food or health support, infrastructure, and other social projects. Core v0 uses a global guarantee percentage configured by the active administrator, protocol, operating mode, or lawful country implementation rule, with future differentiated formulas left to objective parameter-based policy. The proposer, designer, or executor may describe project facts but cannot self-select a lower burden, risk class, guarantee percentage, or assurance requirement. Required guarantees or equivalent instruments become materialized only after confirmation by a lawful custodian, guarantor, insurer, treasury, bank, escrow provider, or equivalent mechanism.

The fifty-fourth residual cleanup aligned H010 with the project object model, project creation flow, citizen layers, funding flow, lifecycle, reformulation path, audit trail, v0 blueprint, scope freeze, classification matrix, entity map, planning concept, glossary, and planning diagram. H010 now defines the Primary Responsibility Anchor: the single main roadmap goal, public function, or public-value outcome against which a project is classified, funded, evaluated, fiscalized, closed, and assigned role-specific reputation effects. The cleanup preserves legitimate multi-value projects by allowing secondary contributions while preventing value inflation, hidden accountability dilution, or bundled unrelated outcomes.

The fifty-fifth residual cleanup aligned H009 with the project object model, project creation flow, open-project closure model, audit trail, v0 blueprint, scope freeze, classification matrix, entity map, tutored-mode governance, planning concept, planning diagram, and open-question index. H009 now defines Planning Scope Alignment as the Core v0 requirement: a financeable project must reference an active public-function, pilot, protocol, operating-mode, approved-roadmap, or country-implementation scope before execution readiness. The cleanup preserves the future idea of a distributed roadmap built through votable planning areas as a separate open question rather than treating it as solved.

The fifty-sixth residual cleanup aligned H008 with the project object model, fiscalization/control model, lifecycle, disbursement, audit trail, v0 blueprint, scope freeze, classification matrix, entity map, and contradiction checklist. H008 now defines the Distributed Accountability Loop and adds the Project Closure Accountability Record: the final traceable object connecting accepted promises, expected and submitted fulfillment/control evidence, evidence sufficiency, EvaluationRecords, FiscalizationReports, financial closure, unresolved issues, Responsibility Events, Reputation Inputs, and citizen-facing closure explanation. The cleanup clarifies that insufficient evidence is not proof of fraud by itself, but it is also not proof of fulfillment.

The fifty-seventh residual cleanup aligned H007 with the v0 blueprint, scope freeze, entity map, citizen layers, audit trail, classification matrix, glossary, index, and contradiction checklist. H007 now defines Continuous Performance Visibility through a lightweight Performance History Surface: a citizen-facing read model over reviewed historical role performance. The cleanup clarifies that performance history should be generic and comparable by role, while source value floors, antivalue ceilings, metrics, evidence items, closure records, complaint outcomes, and financial records remain auditable through detail links. H007 excludes universal rankings, social-credit effects, automatic allocation, and unbounded value-by-value actor histories.

The fifty-eighth residual cleanup aligned H006 with the v0 blueprint, scope freeze, entity map, citizen dashboard, signal detail, full project sheet, funding flow, audit trail, classification matrix, glossary, index, and contradiction checklist. H006 now defines Assisted Deliberation Context as a concise citizen-facing read model for material actions. It separates common deliberative context from H005 personal AI guides, keeps C008's AI-assistance boundary, preserves source labels and dissent, and excludes algorithmic steering, hidden ranking, truth certification, automatic allocation, and suppression of unresolved issues.

The fifty-ninth residual cleanup aligned H005 with C008, H006, H041, the delegation baseline, automatic allocation profiles, the v0 blueprint, scope freeze, entity map, classification matrix, glossary, index, and contradiction checklist. H005 now treats full personal AI guides as Extension v1+, not a Core v0 dependency. Core v0 only preserves compatibility boundaries: connected guides may assist, summarize, compare, translate, draft, warn, and help configure choices, but they do not become civic actors, delegates, automatic allocation profiles, hidden recommenders, fiscalizers, authorities, or sources of material civic action without explicit confirmation or an auditable platform rule.

The sixtieth residual cleanup aligned H004 with the refined C007 public-authority/operator boundary: institutional monopoly reduction now targets opaque, non-contestable monopoly power rather than public ownership by label. The cleanup distinguishes public authorities from state-owned operators, preserves the judge-and-party exclusion in tutored scopes, allows state-owned operators as ordinary eligible organizations only where control/privilege checks pass, and uses utilities/concession-like operation as the primary natural-monopoly example.

The sixty-first residual cleanup aligned H003 with H008, H014, H015, H016, H022, and H023: distributed trust is not blind faith in multiple actors or blockchain-style registry integrity by itself. Core v0 trust is produced by role-specific incentive alignment, verifiable material claims, contextualized evidence, contradiction paths, responsible review, payment/disbursement conditions, reputation and responsibility consequences, simple citizen-facing trust labels, and Layer 5 auditability.

The sixty-second residual cleanup aligned H002 with H009, H025, H026, H027, H033, H034, H038, H008, H016, H022, and H023: distributed resource allocation is bounded rather than unconstrained. Citizens, delegates, allocation profiles, and public default rules may allocate only the configured assignable public-purpose share, only toward eligible projects or protocol-authorized control, complaint-review, mitigation, fiscalization, or planning vehicles inside active scopes. The cleanup preserves a non-assignable common pool for functions that should not depend on popularity, discovery visibility, delegation concentration, or monthly citizen attention, and clarifies that funding does not equal social legitimacy, execution readiness, disbursement approval, or fulfillment proof.

The sixty-third residual cleanup aligned H001 with the v0 functional matrix, functional state architecture, institutional taxonomy, scope, glossary, and repository instructions: functional distribution now applies by functional layer rather than by broad institutional label. A sector such as security, health, justice, education, sports, or culture may contain centralized, hybrid, and distributed layers at the same time. The cleanup adds an explicit layer test for coercion, rights deprivation, emergency command, legal recognition, macro fiscal stability, funding, execution, evidence, fiscalization, evaluation, data custody, service delivery, and accountability.

The sixty-fourth residual cleanup refined H001 after the health/urgent-care objection and added checklist controls: centralizing or legally standardizing public guarantees, rights, coverage duties, accreditation, funding rules, sanctions, and fiscalization does not imply centralized state service provision. Eligible public, private, nonprofit, cooperative, university, concession-like, or state-owned operators may provide publicly financed services under common legal and platform accountability rules. The cleanup also distinguishes platform consequences such as payment blocks, reputation effects, correction, revocation, or replacement from legal consequences such as administrative sanctions, civil liability, license effects, fines, judicial action, or regulatory intervention.

The sixty-fifth residual cleanup audited foundational session notes and the missing-functions addendum for stale H001-H003 language. The cleanup preserves historical discovery notes while adding v0 alignment notes for functional-layer distribution, bounded assignable allocation, incentive-compatible distributed trust, and the complaint-evidence versus fulfillment/control-evidence distinction where old generic evidence language could confuse the reader. It also narrows older funding language from direct citizen allocation of taxes or resources to configured assignable public-purpose shares inside eligibility, planning, fiscalization, phase, and common-pool boundaries.

The sixty-sixth residual cleanup aligned the Phase 2 roadmap, consolidated entity/object/state map, diagram index, scope classification matrix, and knowledge index for formal modeling. The cleanup prevents `Evidence` from appearing as an undifferentiated operational object in the next entity inventory: formal modeling should use `Contextualized Evidence Item` as the technical record with required `evidence_context`, and should separately model Fulfillment Evidence Needs, Project Evidential Contracts, complaint evidence and review, control evidence, contradiction evidence, evaluation records, fiscalization, disbursement, closure, and reputation effects.

The sixty-seventh residual cleanup created [[64_FORMAL_ENTITY_INVENTORY_V0|docs/64_FORMAL_ENTITY_INVENTORY_V0.md]] as the Phase 2 formal entity baseline. The inventory separates actors, contextual roles, project objects, value/evidence/evaluation objects, funding and custody objects, fiscalization/control objects, complaint and pause objects, citizen interaction signals, delegation/allocation objects, reputation/read-model objects, governance/system-change objects, primary state groups, and non-entities. It preserves the rule that `Contextualized Evidence Item` is the technical evidence record and that formal effects require `evidence_context`, review, and effect-specific evaluation.

The sixty-eighth residual cleanup created the first Phase 2 entity relationship diagram at [[v0-formal-entity-relationship|docs/diagrams/v0-formal-entity-relationship.md]] and generated its SVG output. The ERD is a primary relationship baseline rather than a database schema: it connects actors, contextual role assignments, projects, phases, planning scope, value thesis, evidential contracts, fulfillment evidence needs, contextualized evidence items, evaluation records, fiscalization, funding commitments, financial orders, complaints, systemic pause, closure accountability, responsibility, reputation, delegation, operating modes, governance resolutions, protocol versions, and audit events.

The sixty-ninth residual cleanup audited the Phase 2 ERD for missing or misleading relationships. The cleanup added the `Idea` boundary, civic signals, metrics, budget lines, disbursement milestone plans, fiscalizer offers, project variation and reformulation objects, optional role scopes, lane-specific funding targets, and scoped systemic pause targets. It also clarified that complaint-review support is a civic support signal, not complaint evidence, fulfillment evidence, evaluation, or reputation input by itself.

The seventieth residual cleanup created [[v0-project-object-state-with-phase-substates|docs/diagrams/v0-project-object-state-with-phase-substates.md]] and generated two SVG outputs. The diagram separates aggregate parent `Project` states from operational `ProjectPhase` substates, clarifies phase funding reservation and prerequisite gates, and preserves the rule that phase-level correction, pause, rejection, or reformulation affects the whole project only when a scoped formal record declares that broader effect.

The seventy-first residual cleanup created [[v0-contextualized-evidence-item-state|docs/diagrams/v0-contextualized-evidence-item-state.md]] and generated two SVG outputs. The diagram separates contextualized evidence intake, context correction, privacy/safety review, restricted visibility, sufficiency review, observed/contextual/insufficient/corroboration/contradiction states, report linkage, EvaluationRecord use, verified discovery, and archival with or without formal effect. It also updated the formal inventory's evidence item state list.

The seventy-second residual cleanup created [[v0-complaint-evidence-and-review-state|docs/diagrams/v0-complaint-evidence-and-review-state.md]] and generated two SVG outputs. The diagram uses `ContextualizedEvidenceItem` as the complaint-evidence substrate and separates complaint filing, minimum-structure review, quote, support window, review funding, admissibility, non-blocking admission, scoped systemic pause, competent-authority referral, external suspension, final resolution, and role-specific consequence paths. It also updated the formal inventory's complaint state list.

The seventy-third residual cleanup created [[v0-funding-commitment-disbursement-state|docs/diagrams/v0-funding-commitment-disbursement-state.md]] and generated three SVG outputs. The diagram separates citizen funding commitment, reserved phase lanes, paused or blocked scopes, retained amounts, disbursement review, financial orders, custodian execution, partial or full release, return, reassignment, recovery, financial closure, assurance pending, guarantee materialization, guarantee insufficiency, expiry, execution, and release. It also updated the formal inventory's funding, disbursement, and assurance state list.

The seventy-fourth residual cleanup created [[v0-project-evidential-contract-state|docs/diagrams/v0-project-evidential-contract-state.md]] and generated three SVG outputs. The diagram separates the Project Evidential Contract baseline, fulfillment evidence needs, producer offers, contract-matched priority, lower-priority out-of-contract evidence, assignment or funding, contextualized evidence submission, quality/sufficiency review, fiscalization, EvaluationRecord effects, disbursement, closure, responsibility, reputation, correction, reformulation, and the then-unresolved evidence-quality validation risk. That risk is later bounded by A013's producer-qualification and method-fit standard. It also updated the formal inventory's evidential-contract and fulfillment-evidence-need state list.

The seventy-fifth residual cleanup created [[v0-control-subproject-fiscalization-assignment-state|docs/diagrams/v0-control-subproject-fiscalization-assignment-state.md]] and generated three SVG outputs. The diagram separates control requirements, scoped control opportunities, fiscalizer and evidence-producer offers, eligibility and conflict review, control package funding, assignment acceptance, minimum control package closure, active control work, evidence collection, reports, correction requests, secondary fiscalization or fiscalization audit, replacement, formal-path effects, disbursement or execution-ready effects, and role-specific reputation review. It also updated the formal inventory's control-subproject and fiscalization-assignment state list.

The seventy-sixth residual cleanup created [[v0-delegation-state|docs/diagrams/v0-delegation-state.md]] and generated three SVG outputs. The diagram separates base allocation profile or fallback-rule checks, delegation scope selection, delegate selection, concentration disclosure, request, acceptance, active delegation, delegated action records, represented weight, configured cap effects, delegated-action reporting, immediate revocation, delegate resignation, expiry or eligibility loss, fallback activation, and automatic-profile priority effects. It also updated the formal inventory's delegation and allocation state list.

The seventy-seventh residual cleanup created [[v0-operating-mode-transition-state|docs/diagrams/v0-operating-mode-transition-state.md]] and generated three SVG outputs. The diagram separates public-function operating modes, mode-change proposal and review, transition-rule publication, Closed/Tutored/Semi-open/Open/Suspended effects, tutored review windows, Governance Resolutions, Review Timeout Resolutions, timeout policy effects, community override, automatic approval checks, suspension of future activity, and the boundary between platform effects and external public authority decisions. It also updated the formal inventory's governance-mode state list.

The seventy-eighth residual cleanup created [[v0-governance-resolution-sequence|docs/diagrams/v0-governance-resolution-sequence.md]] and generated three SVG outputs. The diagram separates external authority decisions from platform publication, minimum public fields, field-completeness correction, Review Timeout Resolution creation, timeout policy routing, citizen audit actions, configured clarification or correction paths, audit events, and aggregate operating-mode observability. It also updated the formal entity map and inventory with detailed governance-resolution and timeout-resolution fields and states.

The seventy-ninth residual cleanup created [[v0-audit-event-schema|docs/diagrams/v0-audit-event-schema.md]] and generated three SVG outputs. The diagram separates AuditEvent fields, capture sequence, append-only lifecycle, corrective linked events, actor/role or authority context, target object and scope, source record, rule/version, effect, visibility/privacy treatment, Layer 5 access, observability projection, and export/integrity references. It also updated the technical audit trail layer, formal entity map, formal inventory, diagram index, and knowledge index.

The eightieth residual cleanup created [[65_RESPONSIBILITY_MATRIX_BY_ROLE_V0|docs/65_RESPONSIBILITY_MATRIX_BY_ROLE_V0.md]]. The matrix separates actors from roles and defines role authority, required disclosures, prohibited conflicts, records/evidence/outputs, formal effects, reputation or responsibility exposure, and AuditEvent references for project delivery roles, civic participation roles, delegation/allocation roles, public authorities, state-owned operators, custodians, allocation amount providers, and system/protocol automation.

The eighty-first residual cleanup created [[66_IMPLEMENTABLE_OBJECT_SCHEMA_DRAFT_V0|docs/66_IMPLEMENTABLE_OBJECT_SCHEMA_DRAFT_V0.md]]. The draft separates logical schema from storage/API design, defines shared primitives such as ActorRef, RoleContextRef, ObjectRef, RuleContextRef, SourceRecordRef, AuditRef, VisibilityPrivacy, EffectRef, and VersionRef, and defines minimum implementable fields for actor, role, project, scope, value, evidence, funding, custody, fiscalization, complaint, signal, delegation, reputation, governance, rule-change, and audit objects.

The eighty-second residual cleanup created the Phase 3 attack queue in `attacks/` and added Phase 3 attack literature anchors to [[literature-map|research/literature-map.md]]. The queue covers all Phase 3 priority objections from the roadmap: legitimacy, information capture, fiscalization failure, metric manipulation, neglected essential services, volatile funding, conflicting reviews, platform or algorithmic capture, inequality of participation, delegation concentration, moderation abuse in transition pilots, scope creep and excessive complexity, false/incomplete/context-misclassified evidence, related-party projects, common-good charter conflicts, incumbent resistance, disbursement gaming, and collusion among project roles.

The eighty-third residual cleanup created the Phase 3 defense queue in `defenses/`. Each defense D001-D018 is paired with attack A001-A018 and includes attack summary, attack reference, objective evaluation, response, project-document basis, bibliographic basis, proposed improvements, application location, defense strength, and residual risk.

The eighty-fourth residual cleanup reviewed all Phase 3 attack-defense pairs and created accepted resolution documents `docs/67` through `docs/84`: Project Legitimacy Profile, Material Visibility, Fiscalizer Quality and Capture Indicators, Metric Gaming Test, Essential Service Protection, Continuity Risk Classification, Conflict-of-Review Handling, Platform Influence Boundary, Participation Equity Boundary, Delegation Concentration Stress Thresholds, Tutored Moderation Abuse Boundary, Complexity Budget, Evidence Quality Review, Related-Party Relationship Graph, Common-Good Impact Sufficiency Test, Incumbent Resistance Indicators, Disbursement Gaming Tests, and Collusion Observability. Each attack and defense file now references its integrated resolution.

The eighty-fifth residual cleanup propagated A001 / [[67_PROJECT_LEGITIMACY_PROFILE_AND_A001_RESOLUTION|docs/67_PROJECT_LEGITIMACY_PROFILE_AND_A001_RESOLUTION.md]] into the core architecture, scope freeze, entity map, formal inventory, scope matrix, contradiction checklist, implementable schema draft, citizen home/following/dashboard/full-sheet/funding flows, creation/publication and lifecycle flows, Layer 5 audit trail, and affected diagrams. The integration clarifies that affected-party mapping and community consultation are proportional Readiness Evidence conditions represented through Required Evidence Package needs, not votes, vetoes, or fulfillment evidence by default, and that nearby-project discovery enables asynchronous participation with lower participation cost, broader reach, greater visibility, and more traceable feedback.

The eighty-sixth residual cleanup propagated A002 / [[68_MATERIAL_VISIBILITY_AND_A002_RESOLUTION|docs/68_MATERIAL_VISIBILITY_AND_A002_RESOLUTION.md]] into the core architecture, scope freeze, entity map, formal inventory, responsibility matrix, implementable schema draft, contradiction checklist, citizen home/list/dashboard/full-sheet layers, project creation/publication and lifecycle flows, Layer 5 audit trail, and affected diagrams. The integration clarifies that A002 is not a claim that current systems lack approvers or criteria; rather, existing investment, procurement, municipal, environmental, technical, or sector approvals should become source-linked material claims where they affect citizen funding, legitimacy, execution readiness, disbursement, trust, closure, complaint review, or reputation. Compact citizen surfaces may stay simple, but approval, urgency, recommendation, AI-summary, almost-funded, or execution-ready labels must not hide unresolved material warnings.

The eighty-seventh residual cleanup propagated A003 / [[69_FISCALIZER_QUALITY_CAPTURE_INDICATORS_AND_A003_RESOLUTION|docs/69_FISCALIZER_QUALITY_CAPTURE_INDICATORS_AND_A003_RESOLUTION.md]] into the fiscalization model, core architecture, scope freeze, entity map, formal inventory, responsibility matrix, implementable schema draft, contradiction checklist, fiscalizer offer flow, citizen dashboard/full-sheet layers, lifecycle and disbursement flows, H016, Layer 5 audit trail, and affected diagrams. The integration adds a project-specific `Fiscalizer Eligibility and Reputation Profile` as a contextual read model, not a generic CV, universal score, or automatic selector. Responsible fiscalizer assignment now exposes eligibility criteria, comparable-project fiscalizer history, workload, methodology fit, report sufficiency, repeat relationships, dependency concentration, warnings, safeguards, replacement, secondary fiscalization, and fiscalization-audit triggers where material.

The eighty-eighth residual cleanup refined A004 / [[70_METRIC_GAMING_TEST_AND_A004_RESOLUTION|docs/70_METRIC_GAMING_TEST_AND_A004_RESOLUTION.md]] before broad propagation. A004 is now framed as required fulfillment/control evidence coverage by declared value floor, formal secondary value, antivalue ceiling, material value claim, and metric, not as a new evidence layer and not as a fixed numeric evidence count by project size. It explicitly separates A004 coverage from A013 evidence quality/sufficiency: A004 asks which evidence is necessary to verify each value or antivalue, while A013 asks whether submitted evidence is produced by an idoneous actor, uses a fit method/protocol, is relevant, authentic enough, complete, contextualized, corroborated, and sufficient for formal effects.

The eighty-ninth residual cleanup consolidated A013 / [[79_EVIDENCE_QUALITY_REVIEW_AND_A013_RESOLUTION|docs/79_EVIDENCE_QUALITY_REVIEW_AND_A013_RESOLUTION.md]] as a formal evidence producer qualification and method-fit standard. Hard KPI fulfillment/control evidence now requires the evidence need to define the type of qualified or otherwise protocol-idoneous producer, method/protocol, instrument/tool or calibration basis, metadata/provenance, report limitations, and probative fitness needed before the evidence can be financed, accepted, or used for disbursement, closure, responsibility, reputation, or formal fiscalization effects. Ordinary citizen observations, complaint evidence, and contextual material remain easy to submit, but they do not by themselves prove hard technical KPIs. Detailed scoring, calibration registries, AI-generated-material detection, and country-specific legal admissibility remain future implementation or legal-mapping work.

The ninetieth residual cleanup propagated A004 across the core corpus, citizen surfaces, value/metric validator, fiscalization, disbursement, audit trail, object model, schema draft, responsibility matrix, glossary, checklist, and affected diagrams. The accepted implementation is an evidence-coverage matrix inside the `ValueVerificationPackage` and `ProjectEvidentialContract`. It marks `coverage complete`, `coverage weak`, `coverage gap`, `metric gap`, or `under correction` before funding and formal effects. A004 remains separate from A013: coverage asks whether required evidence needs were defined; quality asks whether submitted evidence later satisfies those needs.

The ninety-first residual cleanup propagated A005 / [[71_ESSENTIAL_SERVICE_PROTECTION_AND_A005_RESOLUTION|docs/71_ESSENTIAL_SERVICE_PROTECTION_AND_A005_RESOLUTION.md]] across the core corpus, funding and automatic-allocation flows, citizen surfaces, Planning Scope and Threshold Policy definitions, administrative observability, responsibility matrix, schema draft, glossary, checklist, and affected diagrams. The accepted implementation is an Essential Service Protection floor-and-lane test inside Planning Scopes and funding eligibility: protected essential floor, distributed service lane, planning-continuity target, funding-lane treatment, underfunding indicator, and public rule-change trace. It protects against both popularity-driven neglect and central political neglect while preserving distributed provision of essential services where eligible.

The ninety-second residual cleanup propagated A006 / [[72_CONTINUITY_RISK_CLASSIFICATION_AND_A006_RESOLUTION|docs/72_CONTINUITY_RISK_CLASSIFICATION_AND_A006_RESOLUTION.md]] across the core corpus, project creation, lifecycle, funding, disbursement, automatic allocation, citizen surfaces, audit trail, administrative observability, responsibility matrix, schema draft, glossary, H002/H038, checklist, and affected diagrams. The accepted implementation is a project-level Continuity Risk Classification plus a visible Continuity Renewal Window: funded service period, future funding dependency warning, staffing/maintenance obligation, beneficiary-protection rule, wind-down rule, renewal trigger, continuity-need Idea path, follow-on project route, and no automatic incumbent renewal. It compares the model against real current continuity funding, where renewals can be reduced, delayed, or cancelled through political priority changes without public visibility, mitigation, result evidence, or beneficiary warning.

The ninety-third residual cleanup accepted and propagated [[85_FUNDING_WINDOW_EXPIRY_AND_BUDGET_LIQUIDITY_SMOOTHING_RESOLUTION|docs/85_FUNDING_WINDOW_EXPIRY_AND_BUDGET_LIQUIDITY_SMOOTHING_RESOLUTION.md]] before A007. The accepted implementation adds a Core v0 `FundingAttempt` and `Expired Unfunded` outcome so financeable projects, phases, and lanes cannot hold civic commitments indefinitely while waiting for financing closure. Eligible unused commitments return, reassign, or follow citizen defaults when attempts expire. Republication and cloning preserve attempt history. Budget Liquidity Smoothing is preserved as Extension v1+ / country implementation only: public, capped, stress-tested, audited, tied to authorized budgets, and separated from treasury discretion over project priority.

The ninety-fourth residual cleanup propagated A007 / [[73_CONFLICT_OF_REVIEW_HANDLING_AND_A007_RESOLUTION|docs/73_CONFLICT_OF_REVIEW_HANDLING_AND_A007_RESOLUTION.md]] across the core corpus, fiscalization, complaint flow, funding, disbursement, lifecycle, entity maps, formal inventory, schema draft, responsibility matrix, glossary, checklist, citizen surfaces, Layer 5 audit trail, and affected diagrams. The accepted implementation keeps pre-closure conflicts inside ordinary complaint, fiscalization, pause, correction, retention, mitigation, disbursement-blocking, and review paths, but adds a Core v0 `Post-Closure Coverage Profile` for execution-financeable projects where post-closure accountability is required. Covered post-closure complaints, contradictory evidence, hidden antivalues, or defect claims can proceed inside the platform only during the declared window and within covered scope, through either `Executor Direct Warranty` or `Equivalent Insurance / Bond / Coverage`. After expiry or outside scope, ordinary platform complaints route externally, while final competent external decisions may later be recorded where the active rule allows responsibility, reputation, or historical correction effects.

The ninety-fifth residual cleanup propagated A008 / [[74_PLATFORM_INFLUENCE_AUDIT_AND_A008_RESOLUTION|docs/74_PLATFORM_INFLUENCE_AUDIT_AND_A008_RESOLUTION.md]] as a proportional platform-influence boundary rather than a new Core v0 entity. The cleanup aligns C008 AI assistance, C025 discovery controls, the blueprint, scope freeze, Layer 5 audit trail, schema draft, classification matrix, checklist, knowledge index, and A008/D008 briefs around visible reasons, user-controlled ordering and Home customization, source-linked/correctable AI summaries, material-warning visibility, no paid promotion, no opaque manual boosting, and rule-change auditability. Advanced platform-influence analytics, per-impression ranking logs, causal exposure-to-funding metrics, ranking-bias dashboards, and a separate `PlatformInfluenceRecord` remain Extension v1+ or implementation-level observability.

The ninety-sixth residual cleanup propagated A009 / [[75_PARTICIPATION_EQUITY_INDICATORS_AND_A009_RESOLUTION|docs/75_PARTICIPATION_EQUITY_INDICATORS_AND_A009_RESOLUTION.md]] as a participation-equity boundary rather than a new Core v0 indicator layer. The cleanup aligns H041 participation capacity, citizen interface, funding, delegation, Project Legitimacy Profile handling, Layer 5 audit trail, entity maps, formal inventory, responsibility matrix, schema draft, scope matrix, checklist, and A009/D009 briefs around a comparative standard: Core v0 should improve current weak participation practices through asynchronous visibility, protected identity, delegation transparency, participation-support projects, and threshold-policy participation evidence where required, without demanding perfect representativeness. Advanced participation-equity analytics, demographic gap measurement, accessibility outreach metrics, and inclusion dashboards remain Extension v1+ / country or administrator observability.

The ninety-seventh residual cleanup propagated A010 / [[76_DELEGATION_CONCENTRATION_STRESS_THRESHOLDS_AND_A010_RESOLUTION|docs/76_DELEGATION_CONCENTRATION_STRESS_THRESHOLDS_AND_A010_RESOLUTION.md]] as a bounded reinforcement of C023 rather than a new Core v0 entity, authority, or universal hard cap. The cleanup aligns delegation flows, the blueprint, scope freeze, entity maps, formal inventory, responsibility matrix, schema draft, scope matrix, checklist, diagram guidance, A010/D010 briefs, H043, and H046 around represented-weight warnings, high-concentration report-sufficiency status, related-delegate/support-provider/related-project disclosures, configured cap-effect visibility, delegated-action records, AuditEvents, and administrative observability. Advanced delegation-network analytics, anti-cluster algorithms, and concentration dashboards remain Extension v1+ / country or administrator observability.

The ninety-eighth residual cleanup propagated A011 / [[77_TUTORED_MODERATION_ABUSE_TEST_AND_A011_RESOLUTION|docs/77_TUTORED_MODERATION_ABUSE_TEST_AND_A011_RESOLUTION.md]] as a tutored-moderation data-preservation boundary rather than a new Core v0 abuse tribunal, score, dashboard, or reversal mechanism. The cleanup aligns the C020/C007 boundary, the blueprint, scope freeze, administrative observability baseline, entity map, formal inventory, responsibility matrix, schema draft, scope matrix, checklist, diagram guidance, A011/D011 briefs, H057, and H058 around minimum case-level fields: decision result, reason category where practical, Planning Scope, rule/version, responsible authority/process, dates, review time, timeout status, suggested next path, AuditEvent reference, and known authority-linked operator context. Full moderation-abuse dashboards, automatic possible-abuse findings, rejection-rate comparability, selective duplicate/outside-scope analytics, and operator-concentration analytics remain Extension v1+ / country or administrator observability.

The ninety-ninth residual cleanup propagated A012 / [[78_COMPLEXITY_BUDGET_AND_A012_RESOLUTION|docs/78_COMPLEXITY_BUDGET_AND_A012_RESOLUTION.md]] as a complexity-budget and integrate-or-bound discipline rather than a new Core v0 entity, metric, or procedural layer. The cleanup aligns the P007 integrate-or-bound principle, the blueprint, scope freeze, scope classification matrix, formal entity inventory, implementable schema draft, contradiction and failure-mode checklist, A012/D012 briefs, and H020 proportional procedural burden around: every required object, field, state, or step names the material failure mode it controls; low-risk projects keep an explicit minimum viable path; higher burdens trigger through ThresholdPolicy rather than being universalized; new v0 entities pass the cannot-be-safely-derived test; and Extension v1+ ideas do not enter Core v0 by default. Quantitative complexity metrics, object-count ceilings, and implementation-cost models remain future implementation work.

The one-hundredth residual cleanup propagated A014 / [[80_RELATED_PARTY_RELATIONSHIP_GRAPH_AND_A014_RESOLUTION|docs/80_RELATED_PARTY_RELATIONSHIP_GRAPH_AND_A014_RESOLUTION.md]] as a related-party observability reinforcement rather than a new Core v0 entity or categorical ban. The cleanup aligns H028, project object model relationships, the blueprint, scope freeze, entity/state map, scope matrix, formal inventory, responsibility matrix, schema draft, checklist, and A014/D014 briefs around the minimum relationship graph (ownership/control chain, board or management control, material supplier and subcontractor relationships, repeated fiscalizer/evidence-producer relationships, delegate or funder relationships to project actors, authority-linked operator status, hidden-conflict escalation) and the severity model: declared proximity handled proportionally, hidden or control-relevant relationships escalating to correction, blocking, exclusion, complaint, responsibility, or reputation effects. The same graph serves A018 collusion observability. Beneficial-ownership verification and corporate-registry integration remain country implementation; graph analytics remain Extension v1+.

The one-hundred-first residual cleanup propagated A015 / [[81_COMMON_GOOD_IMPACT_SUFFICIENCY_TEST_AND_A015_RESOLUTION|docs/81_COMMON_GOOD_IMPACT_SUFFICIENCY_TEST_AND_A015_RESOLUTION.md]] as a common-good impact sufficiency test over the existing C022 declaration rather than a charter system, registry, or platform adjudication authority. The cleanup aligns C022 / doc 60, H050, the project creation flow, the value-antivalue profile, the blueprint, scope freeze, entity/state map, scope matrix, formal inventory, schema draft, checklist, and A015/D015 briefs around the minimum sufficiency test: affected assets and parties identified; no-impact, uncertain, or impact-with-explanation declarations; evidence and fiscalization where impact is plausible; active-charter relationship where a charter exists; no unexplained overuse of uncertain; and material omissions connected to fiscalization, complaint, mitigation, responsibility, and reputation effects. Full charter registry, charter voting, and platform common-good adjudication remain Extension v1+; conflicts requiring legal, environmental, cultural, or scientific authority route externally.

The one-hundred-second residual cleanup propagated A016 / [[82_INCUMBENT_RESISTANCE_INDICATORS_AND_A016_RESOLUTION|docs/82_INCUMBENT_RESISTANCE_INDICATORS_AND_A016_RESOLUTION.md]] as transition-pilot observability rather than any mechanism that compels institutional transition. The cleanup aligns H054 transition maturity metrics, H058 operating modes, C020 tutored governance, C021 administrative observability baseline, the blueprint, scope freeze, entity/state map, scope matrix, formal inventory, schema draft, checklist, and A016/D016 briefs around the minimum incumbent-resistance indicators: scope share opened to distributed financing; approval, rejection, and timeout rates; rejection-reason comparability; authority-linked operator participation; public-operator privileges, subsidies, guarantees, or data access; independent versus controlled fiscalization rates; and pilot outcomes compared with the incumbent baseline. The platform cannot force institutional transition or protect the migrated budget share; those limits are recorded openly, and the fiscal channel is attacked separately in A021. Resistance-pattern analytics and cross-country comparisons remain Extension v1+ / country or administrator observability.

The one-hundred-third residual cleanup propagated A017 / [[83_DISBURSEMENT_GAMING_TESTS_AND_A017_RESOLUTION|docs/83_DISBURSEMENT_GAMING_TESTS_AND_A017_RESOLUTION.md]] as disbursement-gaming tests over the existing milestone, assurance, and release objects rather than new payment machinery. The cleanup aligns H036 milestone-based disbursement and guarantees, the disbursement flow, the blueprint, scope freeze, entity/state map, scope matrix, formal inventory, responsibility matrix, schema draft, checklist, and A017/D017 briefs around the minimum tests: milestone linkage to budget line, phase, value relevance, evidence need, review basis, blocker check, retention, and release amount; protected advance payment; designer/modeler responsibility review for avoidably weak milestone design; fiscalizer release justification; and citizen-facing separation of funding, reservation, release, retained funds, and guarantee status. Per-project actuarial guarantee calibration and automated milestone-design scoring remain Extension v1+ / country implementation; milestone quality rests on human review backed by designer responsibility and retention.

The one-hundred-fourth residual cleanup propagated A018 / [[84_COLLUSION_OBSERVABILITY_AND_A018_RESOLUTION|docs/84_COLLUSION_OBSERVABILITY_AND_A018_RESOLUTION.md]] as collusion observability over existing objects rather than a detection engine. The cleanup aligns H016 distributed fiscalization ecosystem, the fiscalization/control model, the blueprint, scope freeze, entity/state map, scope matrix, formal inventory, responsibility matrix, schema draft, checklist, and A018/D018 briefs around repeated actor-cluster visibility, the A014 relationship-and-control graph reused across roles and suppliers, timing-anomaly and outcome-pattern review surfaces feeding human review, independent corroboration for critical milestones, the verified-discovery route for hidden coordination, and cross-role responsibility events where collusion is confirmed. Automated collusion detection, network-analysis scoring, and investigative capability remain Extension v1+, and prosecution of confirmed collusion remains external law. This closes core propagation of the first attack round: A001-A018 are now integrated.

The one-hundred-fifth residual cleanup accepted the first four second-round resolutions under the P007 integrate-or-bound rule: A019 / [[86_ALLOCATION_MANDATE_AND_A019_RESOLUTION|docs/86_ALLOCATION_MANDATE_AND_A019_RESOLUTION.md]] (Allocation Mandate record per Planning Scope), A020 / [[87_PLANNING_SCOPE_AGENDA_LIMITATION_AND_A020_RESOLUTION|docs/87_PLANNING_SCOPE_AGENDA_LIMITATION_AND_A020_RESOLUTION.md]] (agenda-setting bounded as a formal open limitation with interim observability), A021 / [[88_FISCAL_COMMITMENT_PROFILE_AND_A021_RESOLUTION|docs/88_FISCAL_COMMITMENT_PROFILE_AND_A021_RESOLUTION.md]] (Fiscal Commitment Profile and fiscal-reliability observability), and A033 / [[89_DUTY_OF_CARE_ANCHOR_AND_A033_RESOLUTION|docs/89_DUTY_OF_CARE_ANCHOR_AND_A033_RESOLUTION.md]] (Duty-of-Care Anchor and third-party coverage). Core-corpus propagation of these four remains pending and follows the refined resolution texts.

The one-hundred-sixth residual cleanup accepted the remaining eleven second-round resolutions under the P007 integrate-or-bound rule, completing the second-round review: A022 / [[90_CONTROL_SUPPLY_OBSERVABILITY_AND_A022_RESOLUTION|docs/90_CONTROL_SUPPLY_OBSERVABILITY_AND_A022_RESOLUTION.md]], A023 / [[91_OPEN_MODE_GATING_AND_A023_RESOLUTION|docs/91_OPEN_MODE_GATING_AND_A023_RESOLUTION.md]], A024 / [[92_SALIENCE_BIAS_OBSERVABILITY_AND_A024_RESOLUTION|docs/92_SALIENCE_BIAS_OBSERVABILITY_AND_A024_RESOLUTION.md]], A025 / [[93_ENGAGEMENT_DECAY_METRICS_AND_A025_RESOLUTION|docs/93_ENGAGEMENT_DECAY_METRICS_AND_A025_RESOLUTION.md]], A026 / [[94_IDENTITY_PROVIDER_FAILURE_MODES_AND_A026_RESOLUTION|docs/94_IDENTITY_PROVIDER_FAILURE_MODES_AND_A026_RESOLUTION.md]], A027 / [[95_HERDING_OBSERVABILITY_AND_A027_RESOLUTION|docs/95_HERDING_OBSERVABILITY_AND_A027_RESOLUTION.md]], A028 / [[96_TERRITORIAL_OUTCOME_OBSERVABILITY_AND_A028_RESOLUTION|docs/96_TERRITORIAL_OUTCOME_OBSERVABILITY_AND_A028_RESOLUTION.md]], A029 / [[97_COMPOSITE_PROGRAM_DEPENDENCIES_AND_A029_RESOLUTION|docs/97_COMPOSITE_PROGRAM_DEPENDENCIES_AND_A029_RESOLUTION.md]], A030 / [[98_CLIENTELISM_PATTERN_INDICATORS_AND_A030_RESOLUTION|docs/98_CLIENTELISM_PATTERN_INDICATORS_AND_A030_RESOLUTION.md]], A031 / [[99_MOTIVE_NEUTRALITY_BOUNDARY_AND_A031_RESOLUTION|docs/99_MOTIVE_NEUTRALITY_BOUNDARY_AND_A031_RESOLUTION.md]], and A032 / [[100_LONG_HORIZON_LANES_AND_A032_RESOLUTION|docs/100_LONG_HORIZON_LANES_AND_A032_RESOLUTION.md]]. All thirty-three attacks now have accepted resolutions. The A025 and A027 resolutions incorporate the simulation evidence ([[simulation-results|research/simulation-results.md]]); several resolutions are bounded per P007 with recorded limitation statements. Core-corpus propagation of docs/86-100 remains pending and follows the resolution texts.

The one-hundred-seventh residual cleanup propagated A019 / [[86_ALLOCATION_MANDATE_AND_A019_RESOLUTION|docs/86_ALLOCATION_MANDATE_AND_A019_RESOLUTION.md]] as an Allocation Mandate record on the existing Planning Scope object rather than any mandate-construction machinery. The cleanup aligns H025 civic tax wallet and distributed allocation, H033 system-defined default allocation rule, the blueprint, scope freeze, entity/state map, scope matrix, formal inventory, schema draft, checklist, and A019/D019 briefs around the minimum record: mandate source, authorizing instrument, migrated share, formula version with an explicit higher-authorization flag for departures from equal-per-citizen, and version history. Mandate construction, validation, and adjudication remain external constitutional law and country implementation; the platform records external authorization and never creates it, and the democratic-deficit critique of substituting atomized allocation for representative appropriation stays a recorded open normative debate.

The one-hundred-eighth residual cleanup propagated A020 / [[87_PLANNING_SCOPE_AGENDA_LIMITATION_AND_A020_RESOLUTION|docs/87_PLANNING_SCOPE_AGENDA_LIMITATION_AND_A020_RESOLUTION.md]] as a formalized open limitation rather than roadmap-construction machinery. The cleanup aligns the distributed-roadmap open question, H009 Planning Scope Alignment, H057 tutored transition moderation, the blueprint, scope freeze, entity/state map, scope matrix, checklist, and A020/D020 briefs around the interim observability set: every scope carries its Allocation Mandate and versioned definition; scope changes and interpretations surface as Governance Resolutions with timeouts; out-of-scope demand accumulates visibly as Ideas with per-category volume observability; and agenda-setting power is documented, versioned, and contestable through visibility only. Whoever constructs Planning Scopes exercises the second face of power; distributing that construction remains the architecture's principal open problem — reinforced by the simulation finding that planner knowledge dominates allocation quality.

The one-hundred-ninth residual cleanup propagated A021 / [[88_FISCAL_COMMITMENT_PROFILE_AND_A021_RESOLUTION|docs/88_FISCAL_COMMITMENT_PROFILE_AND_A021_RESOLUTION.md]] as a Fiscal Commitment Profile on the existing Planning Scope object plus fiscal-reliability observability rather than any enforcement mechanism. The cleanup aligns the C006 treasury and custody boundary, H037 public revenue custody and disbursement, H054 functional transition maturity metrics, H002 distributed resource allocation and the public budget boundary, the blueprint, scope freeze, entity/state map, scope matrix, formal inventory, schema draft, checklist, and A021/D021 briefs around the minimum profile — migrated percentage, indexation rule, delivery-latency target, cycle horizon — and the reliability indicators: expected versus actual delivery of signed balances, order-to-execution latency, and unexecuted valid orders. Profile changes are visible governance events with reason, magnitude, affected scopes, and beneficiary impact; systematic delay feeds transition maturity and incumbent-resistance indicators. Enforcement remains external: multi-year appropriation locks, statutory indexation, and budget floors are country implementation.

The one-hundred-tenth residual cleanup propagated A033 / [[89_DUTY_OF_CARE_ANCHOR_AND_A033_RESOLUTION|docs/89_DUTY_OF_CARE_ANCHOR_AND_A033_RESOLUTION.md]] as a Duty-of-Care Anchor recorded before disbursement rather than any liability adjudication. The cleanup aligns H010 Primary Responsibility Anchor, P003 project responsibility for undeclared antivalue, the financial-assurance concept, the responsibility matrix by role, the blueprint, scope freeze, entity/state map, scope matrix, formal inventory, schema draft, checklist, and A033/D033 briefs around the minimum record: a named solvent legal person answerable for third-party physical harm, exposed on the citizen sheet; third-party liability coverage in the assurance and post-closure profiles where Threshold Policy requires; the internal-obligation versus victim-liability distinction in the responsibility matrix; and a court-usable harm-attribution package in the audit trail. Liability apportionment remains external law. This closes core propagation of docs/86-89; propagation of docs/90-100 remains pending and follows the resolution texts.

The one-hundred-eleventh residual cleanup accepted the external-review round resolutions under the P007 integrate-or-bound rule: A034 / [[102_ALLOCATION_ACT_CHARACTERIZATION_AND_A034_RESOLUTION|docs/102_ALLOCATION_ACT_CHARACTERIZATION_AND_A034_RESOLUTION.md]] (allocation-act characterization menu, pilot default of vote-like immunity, disclosure through the Allocation Mandate) and A035 / [[103_ADMINISTRATIVE_CAPACITY_DECLARATION_AND_A035_RESOLUTION|docs/103_ADMINISTRATIVE_CAPACITY_DECLARATION_AND_A035_RESOLUTION.md]] (Administrative Capacity Declaration per tutored scope, capacity-calibrated timeouts, authority-side assistance inside the C008 boundary, hours-per-resolution as a first-pilot deliverable). Both attacks originated from the five-profile external-review simulation of the publishable model and were defended comparatively under P001: the citizen act replaces an official act whose practical accountability is thinner than the attack's implied baseline, and the review labor exists today unmeasured — the model re-platforms and reveals it. Timeout lapses were reaffirmed as attributable public resolutions naming the responsible authority, never anonymous software actions.

The one-hundred-twelfth residual cleanup propagated the first batch of second-round resolutions, A022-A026 / `docs/90` through `docs/94`, into the core corpus as bounded observability per P007: control-supply density observability with thin-market fallbacks as country implementation (A022); open-mode deployment gated on resolving constitutional decision mechanics (A023); salience-bias observability above the protected floor (A024); engagement-decay and active-core metrics joined to functional transition maturity with citizen-facing legitimacy language bounded by the simulation evidence (A025); and declared identity-provider failure modes with purpose-bound access auditing (A026). Each aligned the blueprint, scope freeze, entity/state map, scope matrix, formal inventory, schema draft, checklist, topical hypotheses, and its briefs; none added a primary entity.

The one-hundred-thirteenth residual cleanup propagated the second batch of second-round resolutions, A027-A032 / `docs/95` through `docs/100`, into the core corpus per P007: herding observability with the funding-target closure rule's claim bounded by the simulation evidence (A027); territorial and group outcome observability with equalization as country implementation (A028); cross-project dependency declarations and stranded-complement warnings in composite programs (A029); pattern-level clientelism indicators feeding review paths, never automatic verdicts (A030); the motive-neutrality boundary — motives free, material effects gated (A031); and long-horizon lanes in Planning Scopes with intertemporal allocation observability (A032). Each aligned the blueprint, scope freeze, entity/state map, scope matrix, formal inventory, schema draft, checklist, topical hypotheses, and its briefs; none added a primary entity.

The one-hundred-fourteenth residual cleanup propagated the external-review round resolutions, A034-A035 / [[102_ALLOCATION_ACT_CHARACTERIZATION_AND_A034_RESOLUTION|docs/102]] and [[103_ADMINISTRATIVE_CAPACITY_DECLARATION_AND_A035_RESOLUTION|docs/103]], into the core corpus: the allocation-act characterization menu with its vote-like pilot default recorded in the Allocation Mandate and disclosed on the citizen surface (A034), and the Administrative Capacity Declaration per tutored scope with capacity-calibrated timeouts, bounded authority-side assistance, and hours-per-resolution as a first-pilot deliverable (A035). This closes core propagation of all thirty-five accepted Phase 3 resolutions: nothing accepted remains unintegrated, and no attack remains without a resolution.

The one-hundred-fifteenth residual cleanup corrected the simulation's framing across the corpus after an author methodological review. The E2 finding formerly phrased as "planner knowledge dominates allocation quality" was rescoped to what the model actually shows — the informational quality of the weight vector governing the passively allocated share dominates, whoever or whatever supplies that vector — and the pre-registered E4 experiment ([[e4-institutional-knowledge-design|research/e4-institutional-knowledge-design.md]]) modeled knowledge symmetrically and found open construction of the vector from aggregated dispersed citizen signals viable and scale-robust, beating fixed-bandwidth central construction at every tested scale under declared preconditions (aggregation institution present; signals honest and unbiased; elicitation non-strategic). Derived statements were aligned in the manuscript (v1.3-v1.4), the publishable model's limitation bullet and tested-so-far section, the blueprint's A020 block, the entity/state map blockquote, and the distributed-roadmap open question's status note: agenda-setting centralization is a property of the closed and tutored transition modes, not of the architecture; the default layer is the pluggable civic autopilot of H033; and the open problem is honest elicitation, not the feasibility of distributed construction.

The one-hundred-sixteenth residual cleanup executed the author-accepted corrections from the repository-wide consistency audit ([[README|contradictions/README.md]], C026-C045). Sixteen entries were accepted and corrected: citation metadata bumped to v1.4 (C026); resolution ranges, queue intros, and the fifteen second-round status cells updated to the resolved state (C027-C028); the publishable model's adversarial record updated to thirty-five attacks with docs/102-103 as accepted resolutions carrying residual limits (C029); the manuscript's conclusion aligned to three review rounds in both languages (C030); the reference apparatus resolved by the mixed rule — nine formerly orphaned works cited at natural, non-decorative homes (Bovens, Jensen and Meckling, Olson 1965, Hirschman, Thompson, Kydland and Prescott, Akerlof, Dulleck and Kerschbamer, Buchanan and Tullock) and eleven trimmed, leaving forty-six references all cited, in English and Spanish (C031); the knowledge index completed with H031, H032, H050, and docs/101 (C032); H054 joined by its A025 and A035 metric extensions (C033); H058's open-mode section now carries the A023 deployment gate framed as a maturity requirement on the designed trajectory, with the E4 evidence noted (C034); the repository README updated to the current status and full map (C036); the older project state diagram marked superseded for parent-state authority (C039); citizen-facing status maps aligned to C009's compliant label "Ready for execution" while technical state names stay (C041); the "voter" role and the project-level "Observed" state removed from the early documents that carried them (C042-C043); and A030's delegation citation corrected to C011/C023 (C045). The remaining four verdicts closed the queue in full: the algorithm-as-coordinator card was qualified with the two coordination mechanisms and the E4 preconditions (C035); the project recap was retitled as a preserved historical snapshot (C038); the expiry design was settled by the author as a single outcome — the control package is part of the project, so any unsatisfied closure condition at window end yields Expired Unfunded with a recorded expiry reason, the phantom plain Expired state removed everywhere ([[104_CLOSURE_DEADLINE_EXPIRY_AND_C040_RESOLUTION|docs/104_CLOSURE_DEADLINE_EXPIRY_AND_C040_RESOLUTION.md]]) (C040); and the C016 milestone validator was named in C008 as the sanctioned structural-coherence case, with Red-criteria changes gated by C019 and disputed Reds contestable through the A011 surface (C044). All twenty consistency findings are resolved.

The one-hundred-seventeenth residual cleanup propagated the author-driven value-delivery review that produced manuscript v1.5-v1.6 and its publication. Two further pre-registered experiments extended the simulation from selection to the thesis itself. E5 ([[e5-value-delivery-design|research/e5-value-delivery-design.md]]) added the execution stage — the author's two thought experiments as the main effects of a selection × delivery 2×2 on matched portfolios — and found the layers compound multiplicatively: the verified-delivery layer alone is worth +43% on identical project sets, the full architecture delivers 2.19× the opaque status quo per unit of budget in-model, the opaque regime officially reports about 29 percentage points more delivery than reality, and deterrence arrives ex ante, with reputational cleansing measured as the second line of defense when verification weakens. E6 ([[e6-reputational-competition-design|research/e6-reputational-competition-design.md]]) isolated the author's incentive hypothesis with an all-honest executor pool and found that visible reputational competition sustains executor effort and quality where opacity lets them collapse (+11% delivered value as a pure incentive gain), that the visibility mirror carries most of the effect, and that naive reputation-weighted assignment concentrates work faster than it finds ability. The manuscript was re-centered on delivered social value per unit of budget, translated into Spanish, joined by an essay edition and a plain-language explainer, and published with DOI 10.5281/zenodo.21193847. This cleanup aligned the derived surfaces: the publishable model's tested-so-far section and manuscript pointer, the H018 and H014 simulation-evidence notes, and the external-review packets' manuscript reference and evidence status.

A five-profile review round of the published manuscript itself (2026-07-04; raw reviews preserved in `external-review/manuscript-v1.6-round/`) produced the manuscript-review attack queue A036-A040 — the calibrated-baseline strawman objection, the reserve-of-law threshold question, reputational exclusion as an unprocessed sanction, allocation traceability against preference secrecy, and the incumbent adoption paradox — together with the pre-registered E7 experiment ([[e7-calibrated-baseline-design|research/e7-calibrated-baseline-design.md]]), which tests the headline figures against a calibrated institutional baseline, scaled planner bandwidth, municipal project counts, and adversarially biased citizen signals.

The one-hundred-eighteenth residual cleanup propagated the five manuscript-review resolutions, `docs/105` through `docs/109`, into the core corpus. The docs/105 reporting rule relabeled the E5 opaque arm as the zero-control lower bound across the simulation results, the publishable model, and both audience derivatives, each headline now carrying its in-model qualifier and a pointer to the audit-anchored E7 recalibration; the audit-evidence rule was recorded as a dated pre-run amendment in the E7 design. The docs/106 enabling-norm record and binding-mode gate joined the Allocation Mandate's blueprint and scope-freeze non-goals lines, the entity/state map, and H058's open-mode gate, with consultative or tutored operation as the lawful disclosed default. The docs/107 informs-never-excludes boundary entered H014 (no exclusion power), H016 (control-role admission as the separate protocolized boundary), and the entity/state map, with the audience derivatives' pool-cleansing language recast as funder choice over visible confirmed-diversion records. The docs/108 citizen-allocation secrecy regime entered the C006 treasury resolution (visibility layering), the citizen funding flow (no receipt; the followed-projects feed), and the entity/state map. The docs/109 adoption layer entered H053 (adopter archetypes and pilot defaults), H054 (sponsor-survivability configuration), the publishable model's limitations (adoption selects), and the entity/state map, under the author's thesis boundary: feasibility and delivered value do not depend on any authority's willingness to adopt. The knowledge index, repository README, and attack/defense queues were aligned to the forty-attack record.

The one-hundred-nineteenth residual cleanup executed the E7 program and the manuscript's v1.7 revision. The audit-institution evidence base ([[audit-evidence-base|research/audit-evidence-base.md]]) was assembled per the docs/105 rule from published findings across nine jurisdictions and the European Union; the author approved the S′ parameter mapping; E7 was implemented as a self-contained block (E4-E6 regression byte-identical) and run: the committed headline-withdrawal condition was not triggered — the full architecture delivers 2.22× the audit-calibrated status quo per unit of budget at scale and 1.4-1.6× at municipal pilot scale, audit at documented intensity without reputational memory deters no diversion (it shrinks the reported gap from twenty-nine to nineteen points, never the real one), the calibrated arm's leak lands inside the audit-documented 24-48% works band, and coordinated signal bias degrades open construction near-linearly with a crossover against a competent municipal planner only around a thirty percent coordinated share. The manuscript's v1.7 revision integrated the recalibrated headline, the new Finding 7, the fourth review round, the docs/107 exclusion-wording correction, the docs/106 enabling-norm limitation, the docs/108 allocation-secrecy specification in the architecture section, the docs/109 thesis boundary and adoption framing, the structured-self-critique rename, and ten literature additions closing the round's gaps (Oates, Tiebout, Besley and Coate, Condorcet, Austen-Smith and Banks, Landemore, Fung and Wright, Ferraz and Finan, Holmström 1999, Lukes) — sixty references, all cited, in both languages. Derived surfaces aligned: the publishable model, the repository README, H018 and H058 evidence notes, and both audience derivatives.

The one-hundred-twentieth residual cleanup (2026-07-06) recorded the author's regime doctrine and formalized the operating-regime ladder as [[110_OPERATING_REGIME_LADDER_AND_SEMI_OPEN_MODE|docs/110_OPERATING_REGIME_LADDER_AND_SEMI_OPEN_MODE.md]]: centralized planning is not part of the architecture (comparator baseline and transition scaffold only); the ladder's defining variable is where authority discretion lives across the information, decision, and rule layers; the semi-open regime is tutored with automatic protocol approval inside a bounded mandated envelope (discretion only ex-ante; legality as objective preconditions; what cannot be protocolized stays tutored; remedies external and symmetric); the parallel mutates by layer (informational, fiscal, none); and collisions are prevented by ontological frontier rather than arbitrated. The same doctrine was propagated to the satellite experiments repository's naming and framing. The full mechanism design of tutored-distributed conflict admissibility and semi-open envelope objects is the dedicated agenda-setting study's object.

The one-hundred-twenty-first residual cleanup (2026-07-06) resolved the first ablation-round pair: the satellite ablation program found the deterrence stack individually redundant and jointly indispensable (single terms ≤ 0.003 apparent cost; joint removal −60% verified value, 0.87× against the status quo), formalized as A041 with D041's recommendation accepted by author verdict as [[111_DETERRENCE_STACK_INTEGRITY_AND_A041_RESOLUTION|docs/111_DETERRENCE_STACK_INTEGRITY_AND_A041_RESOLUTION.md]]: the deterrence-stack integrity margin published per scope, term reductions as material rule changes, a positive margin as a semi-open envelope precondition, margin-stratified program evaluation, and the complements-not-substitutes warning propagated to docs/101 (manuscript queued for the next version). The attack record now stands at 41/41 resolved.

Next review candidates: the post-manuscript validation program — external expert review using the prepared packets (now reflecting v1.8), calibration of the simulation to participatory-budgeting data, and a bounded tutored pilot with the instrumentation the resolutions already require; the agenda-setting study formalizing docs/110's two untreated configurations; and the satellite computational paper (Experiments A–D). Manuscript changes are deliberately queued, not applied ([[paper-v1.9-queue|drafts/paper-v1.9-queue.md]]): the author's standing decision is that the paper must not keep growing — satellite papers absorb content so the master can cite instead of contain, and the queue applies at venue submission, at a citable satellite DOI, or on explicit author go, with a zero-or-negative net-growth goal.

Approximate current maturity:

```text
Exploratory conceptual discovery: 95%
System architecture: 85%–90%
Scope consolidation: 70%–75%
Literature and theoretical framing: 70%–75%
Paper drafting: v1.6 published (DOI 10.5281/zenodo.21193847); revisions pending external review
Implementable specification: 55%–65%
```

These percentages are heuristic, not formal metrics.

## Scope-control rule

Every new idea should be classified as one of four types:

```text
A. Core v0
   Necessary for the first coherent version of the model.

B. Extension v1+
   Useful, but not required for the first model.

C. Country implementation
   Depends on legal, administrative, or political choices of an implementing country.

D. Out of scope
   Not necessary for the model and should not be solved now.
```

The project should not keep expanding unless the new idea is clearly Core v0 or a serious objection that threatens the core model.

## Phase 0 — Preserve the Brain

**Status:** mostly complete; ongoing as maintenance.

Completed or active deliverables:

- repository initialized;
- research philosophy and method documented;
- session distillations created;
- hypotheses created and indexed;
- review rounds incorporated;
- delegation, transition, and observability concepts documented;
- interface layers and citizen/project flows documented;
- integrated v0 blueprint created.

Exit criteria:

- every major idea has a home in the repository;
- new sessions are regularly distilled;
- the knowledge index remains updated.

## Phase 1 — Stabilize Core Architecture v0

**Status:** scope frozen; final contradiction resolution and integration pass active.

Goal: define the bounded architecture of the first coherent model.

Core v0 modules now include:

- project object model;
- entity and role map;
- project lifecycle;
- planning scope alignment;
- value thesis, value icons, metrics, and fulfillment/control evidence needs;
- project creation and publication;
- open-project and parallel closure model;
- fiscalization and contextualized evidence production;
- complaints and review triggers;
- milestone-based disbursement and retentions;
- reformulation, pause, revocation, and closure controls;
- project closure accountability records;
- role-based reputation;
- role-comparable performance history;
- assisted deliberation context;
- civic wallet and distributed allocation;
- funding, following, delegation, and automatic allocation flows;
- layered citizen interface;
- technical audit trail;
- transition modes and tutored pilots.

Likely extensions v1+:

- public value return per peso;
- advanced delegation rules;
- time-bound delegation;
- paid delegation markets;
- advanced common-good sub-charters;
- granular operating modes;
- distributed roadmap construction through votable planning areas;
- full personal AI guides;
- full country-specific implementation details;
- advanced cross-project benchmarking.

Remaining deliverables before closing Phase 1:

- continue auditing secondary documents and older hypotheses for stale C001-C025 assumptions;
- update remaining maps or indexes affected by the integration pass;
- identify any residual contradictions that remain after integration;
- then prepare Phase 2 formal system modeling.

Exit criteria:

- a reader can understand what the system is and what it is not;
- the model has a bounded first version;
- new ideas no longer automatically become core architecture.

## Phase 2 — Formalize the System Model

**Status:** ready after remaining contradiction resolution and integration pass.

Goal: convert the v0 blueprint and detailed flows into a coherent analytical model.

Deliverables:

- system entity inventory baseline;
- object model with attributes and relationships;
- state diagrams for projects, delegations, complaints, contextualized evidence items, fiscalization, funding, and operating modes;
- funding and disbursement flow diagrams;
- fiscalization and complaint flow diagrams;
- delegation flow diagram;
- project creation and publication flow diagram;
- project lifecycle diagram;
- meta-governance flow;
- transition flow;
- observability panel specification;
- responsibility matrix by role;
- implementable object schema draft.

Candidate entity groups:

```text
Actors:
  citizen, organization, public authority / external authority, state-owned operator where eligible, custodian, allocation amount provider.

Roles:
  proposer, modeler/designer, executor, fiscalizer, evidence producer, funder, follower, commenter, complainant, beneficiary, affected party, delegator, delegate, evaluator, technical assistant.

Objects:
  project, project version, project phase, planning scope, primary responsibility anchor, value thesis, value-antivalue profile, value verification package, project evidential contract, fulfillment evidence need, contextualized evidence item, evidence context, material information claim, evaluation record, metric, milestone, budget, funding commitment, disbursement, retention, financial assurance profile, guarantee materialization record, control subproject, fiscalization offer, fiscalizer eligibility and reputation profile, fiscalization report, complaint, complaint admissibility/referral record, systemic pause record, comment, justified objection signal, support signal, civic wallet, allocation profile, delegation, related-party conflict review, responsibility event, reputation signal, reputation input, reputation update, reputation summary, performance history surface, assisted deliberation context, governance resolution, review timeout resolution, administrative rule change, system implementation change, protocol version, operating mode, audit event.

States:
  draft, in validation, requires adjustment, ready to publish, open, execution-ready, in execution, correction required, paused, requires reformulation, under review, revoked, closed, expired.
```

Exit criteria:

- the architecture can be explained through diagrams and flows;
- each major object has a definition, lifecycle, and responsibility structure;
- contradictions between modules are identified and resolved.

## Phase 3 — Attack the Architecture

**Status:** attack and defense queues prepared; paired review integrated into accepted resolutions; first-round core propagation complete. A001-A018 and the accepted Funding Window Expiry / Budget Liquidity Smoothing interstitial resolution have been propagated into the core corpus, closing the first attack round.

Goal: identify where the architecture breaks, becomes unsafe, becomes unfair, or creates new power concentration.

Priority objections:

- legitimacy;
- information capture;
- fiscalization failure;
- manipulation of metrics;
- neglected essential services;
- volatile funding;
- conflicting reviews;
- platform or algorithmic capture;
- inequality of participation;
- delegation concentration;
- moderation abuse in transition pilots;
- scope creep and excessive complexity;
- false, incomplete, or context-misclassified evidence;
- related-party projects;
- common-good charter conflicts;
- resistance by incumbent institutions;
- disbursement gaming;
- collusion among project roles.

Deliverables:

- attack briefs / objection files for each major risk;
- defense briefs paired to each attack brief;
- accepted Phase 3 resolution documents for founded non-distorting attacks;
- failure-mode catalog;
- contradiction resolution documents;
- updated contradiction checklist;
- stress-test scenarios;
- unresolved-objections document.

Exit criteria:

- every major objection has a serious response or is explicitly marked unresolved;
- unresolved objections are visible, not hidden.

## Phase 4 — Literature Review and Theoretical Grounding

**Status:** low maturity; begin after v0 scope is frozen and diagrams are in progress.

Goal: locate the project inside existing academic and institutional work.

Research areas:

- institutional economics;
- public choice theory;
- polycentric governance;
- commons governance;
- network governance;
- participatory budgeting;
- liquid democracy and delegation;
- mechanism design;
- reputation systems;
- public administration reform;
- fiscal federalism and decentralized budgeting;
- digital government;
- algorithmic accountability;
- civic tech and platform governance;
- audit, assurance, and evidence systems.

Deliverables:

- annotated bibliography;
- literature matrix;
- what already exists document;
- what appears original document;
- theory map connecting project modules to literature.

Exit criteria:

- the project can state what it borrows, what it extends, and what may be original;
- the paper does not present known ideas as if they were invented here.

## Phase 5 — Build the Paper Architecture

**Status:** early.

Goal: convert the system into a publishable argument.

Candidate working title:

**Functional Architecture for Distributed Governance: A Project-Based Framework for Institutional Transition**

Candidate structure:

1. Introduction
2. Problem: institutional concentration, information failure, and allocation opacity
3. Existing literatures and related models
4. Core proposal: project-based distributed governance
5. Value thesis, contextualized evidence, and fiscalization
6. Distributed allocation and civic tax wallets
7. Delegation, reputation, and participation capacity
8. Meta-governance and protocol evolution
9. Transition model: tutored pilots, operating modes, and observability
10. Failure modes and objections
11. Limitations and scope boundaries
12. Conclusion

Exit criteria:

- the paper presents a clear research question;
- it identifies related literature;
- it states a contribution;
- it distinguishes hypothesis from evidence;
- it acknowledges limitations honestly.

## Phase 6 — Draft the First Working Paper

**Status:** not started.

Goal: produce a serious first draft.

Deliverables:

- abstract;
- introduction;
- conceptual framework;
- architecture section;
- transition section;
- objection section;
- conclusion;
- appendix with system entities and metrics.

Exit criteria:

- a reader can understand the model without needing the chat history;
- the paper is coherent enough to send to external reviewers.

## Phase 7 — External Review

**Status:** informal review started; formal review later.

Goal: expose the framework to serious critique before publication.

Deliverables:

- review feedback log;
- response-to-reviewers document;
- revised working paper.

Exit criteria:

- the strongest external objections have been incorporated or answered.

## Phase 8 — Publication Strategy

**Status:** later.

Goal: decide how to publish based on maturity and audience.

Possible paths:

- working paper;
- preprint;
- long-form essay;
- academic journal submission;
- conference paper;
- public-facing explainer;
- book-length project later.

Exit criteria:

- target format chosen;
- audience defined;
- manuscript adapted to that audience.

## Phase 9 — Practical Experiments or Prototypes

**Status:** later; not required for the first theory paper.

Goal: identify small systems that test parts of the theory.

Candidate experiments:

- project accountability dashboard;
- allocation profile simulator;
- delegation prototype;
- fiscalization workflow prototype;
- common-good charter workflow;
- observability dashboard;
- sports-transition pilot simulation;
- project lifecycle simulator;
- disbursement and evidence review simulator.

Exit criteria:

- at least one testable prototype or case study is defined.

## Immediate next steps

The next working sequence should be:

```text
1. Phase 3 is fully propagated (35/35). Begin the post-manuscript validation program: external expert review, simulation calibration, bounded tutored pilot. The satellite computational-experiments program (Experiments A-D: adversarial architecture ABM, behavioral adoption ABM, planning-vector construction, LLM behavioral calibration) was extracted on 2026-07-06 to its own repository (github.com/moffermann/distributed-governance-experiments) as the working home of a planned second paper; E8 (behavioral participation bridge) remains part of this repository's evidence suite.
2. Preserve the docs/86-89 records during later propagation: Allocation Mandate and Fiscal Commitment Profile are versioned records on Planning Scope; the A020 agenda limitation stays a declared open problem gating open mode at scale; the Duty-of-Care Anchor is named before disbursement and never adjudicates liability.
3. Preserve the A018 boundary during later work: collusion observability reuses the A014 relationship graph and existing corroboration, verified-discovery, and responsibility objects; automated collusion detection and network-analysis scoring remain Extension v1+, and off-platform coordination is a recorded limitation.
4. Preserve the A017 boundary during later propagation: disbursement-gaming tests are linkage and justification checks over existing DisbursementMilestonePlan, FinancialAssuranceProfile, and release objects; per-project actuarial guarantee calibration and automated milestone-design scoring remain Extension v1+ / country implementation.
5. Preserve the A016 boundary during later propagation: incumbent resistance is answered with pilot observability over existing OperatingMode, PlanningScope, GovernanceResolution, and timeout objects; nothing in Core v0 compels transition or protects the migrated budget share, and that political limitation stays recorded openly.
6. Preserve the A015 boundary during later propagation: the common-good impact sufficiency test binds through existing declaration, evidence, and fiscalization surfaces; full charter registry, charter voting, and platform common-good adjudication remain Extension v1+, and expert conflicts route externally.
7. Preserve the A014 boundary during later propagation: the related-party relationship graph is observability over existing declarations and RelatedPartyConflictReview — one graph shared with A018 — with beneficial-ownership verification and registry integration remaining country implementation and graph analytics remaining Extension v1+.
8. Preserve the A012 boundary during later propagation: the complexity budget is the P007 integrate-or-bound discipline — new mechanisms only where a core-thesis claim would otherwise fail and existing objects cannot control the risk; boundaries, residual risks, and limitation statements otherwise; quantitative complexity metrics and implementation-cost models remain future work.
9. Preserve the A011 boundary during later propagation: Core v0 preserves minimum tutored-moderation audit data through GovernanceResolution, ReviewTimeoutResolution, OperatingMode, PlanningScope, authority/operator relationship disclosures, AuditEvents, and basic observability, while full abuse tests, pattern dashboards, automatic possible-abuse findings, rejection-rate comparisons, and operator-concentration analytics remain Extension v1+ / country or administrator observability.
10. Preserve the A010 boundary during later propagation: delegation-concentration stress thresholds reinforce C023 through existing delegation/reporting/disclosure/audit mechanisms, not through a new Core v0 entity, universal hard cap, or concentration authority; advanced delegation-network analytics remain Extension v1+ / country or administrator observability.
11. Preserve the A009 boundary during later propagation: Core v0 improves current weak participation practices but does not require perfect representativeness, universal demographic measurement, or a new participation-equity object; missing voices block only when Threshold Policy makes the missing participation evidence a formal condition.
12. Preserve the A008 boundary during later propagation: platform influence is controlled through visible reasons, user customization, source-linked AI assistance, material-warning visibility, and rule-change auditability; per-impression logs, causal exposure-to-funding metrics, ranking-bias dashboards, and a separate `PlatformInfluenceRecord` remain outside Core v0.
13. Preserve the A007 boundary during later propagation: pre-closure conflicts use ordinary complaint/fiscalization paths; post-closure platform review requires an active covered Post-Closure Coverage Profile; expired or out-of-scope claims route externally.
14. Preserve the A005/A006 boundary during later propagation: essential-service protection is a Planning Scope floor-and-lane test, while continuity-risk classification governs projects that carry ongoing obligations and may generate continuity-need Ideas before funded periods expire.
15. Preserve the Funding Window Expiry boundary: FundingAttempt and Expired Unfunded are Core v0, while Budget Liquidity Smoothing remains Extension v1+ / country implementation.
16. Preserve the A004/A013 boundary during later propagation: evidence coverage and submitted-evidence quality are separate checks.
17. Keep detailed scoring, calibration registries, AI-generated-material detection, country-specific legal admissibility, post-closure insurance/warranty enforcement mechanics, Budget Liquidity Smoothing implementation details, advanced platform-influence analytics, advanced participation-equity analytics, advanced delegation-network analytics, advanced tutored-moderation pattern analytics, resistance-pattern analytics, automated collusion-detection scoring, per-project actuarial guarantee calibration, quantitative complexity metrics, full common-good charter mechanics, and beneficial-ownership registry verification as future implementation or legal-mapping work unless reopened explicitly.
18. Then continue the post-manuscript validation program: external expert review, calibration of the simulation to participatory-budgeting data, and a bounded tutored pilot.
```

## Operating rule

After every significant conversation or review round:

1. distill new concepts;
2. create or update hypotheses/docs;
3. record objections;
4. update open questions;
5. classify new ideas by scope;
6. communicate with the user in Spanish;
7. write durable repository documents in English;
8. include concrete examples from the case under review when explaining issues or proposing resolutions;
9. revise the roadmap before every commit and whenever the strategy changes.
