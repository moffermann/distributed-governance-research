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
The Project Evidential Contract state diagram has been created: contract baseline, fulfillment evidence needs, evidence producer offers, contract-match priority, lower-priority out-of-contract evidence, quality/sufficiency review, and formal effect routing are separated.
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
Project-local skills are consolidated under tools/skills/.
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

The fulfillment/control evidence-quality open question has been captured for later resolution: independent evidence producers reduce executor self-report risk, but the system still needs a clear way to validate evidence quality, authenticity, relevance, AI-generation risk, usefulness, and fiscalizer reliance before fulfillment/control evidence can support disbursement, closure, value fulfillment, or reputation.

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

The sixty-seventh residual cleanup created `docs/64_FORMAL_ENTITY_INVENTORY_V0.md` as the Phase 2 formal entity baseline. The inventory separates actors, contextual roles, project objects, value/evidence/evaluation objects, funding and custody objects, fiscalization/control objects, complaint and pause objects, citizen interaction signals, delegation/allocation objects, reputation/read-model objects, governance/system-change objects, primary state groups, and non-entities. It preserves the rule that `Contextualized Evidence Item` is the technical evidence record and that formal effects require `evidence_context`, review, and effect-specific evaluation.

The sixty-eighth residual cleanup created the first Phase 2 entity relationship diagram at `docs/diagrams/v0-formal-entity-relationship.md` and generated its SVG output. The ERD is a primary relationship baseline rather than a database schema: it connects actors, contextual role assignments, projects, phases, planning scope, value thesis, evidential contracts, fulfillment evidence needs, contextualized evidence items, evaluation records, fiscalization, funding commitments, financial orders, complaints, systemic pause, closure accountability, responsibility, reputation, delegation, operating modes, governance resolutions, protocol versions, and audit events.

The sixty-ninth residual cleanup audited the Phase 2 ERD for missing or misleading relationships. The cleanup added the `Idea` boundary, civic signals, metrics, budget lines, disbursement milestone plans, fiscalizer offers, project variation and reformulation objects, optional role scopes, lane-specific funding targets, and scoped systemic pause targets. It also clarified that complaint-review support is a civic support signal, not complaint evidence, fulfillment evidence, evaluation, or reputation input by itself.

The seventieth residual cleanup created `docs/diagrams/v0-project-object-state-with-phase-substates.md` and generated two SVG outputs. The diagram separates aggregate parent `Project` states from operational `ProjectPhase` substates, clarifies phase funding reservation and prerequisite gates, and preserves the rule that phase-level correction, pause, rejection, or reformulation affects the whole project only when a scoped formal record declares that broader effect.

The seventy-first residual cleanup created `docs/diagrams/v0-contextualized-evidence-item-state.md` and generated two SVG outputs. The diagram separates contextualized evidence intake, context correction, privacy/safety review, restricted visibility, sufficiency review, observed/contextual/insufficient/corroboration/contradiction states, report linkage, EvaluationRecord use, verified discovery, and archival with or without formal effect. It also updated the formal inventory's evidence item state list.

The seventy-second residual cleanup created `docs/diagrams/v0-complaint-evidence-and-review-state.md` and generated two SVG outputs. The diagram uses `ContextualizedEvidenceItem` as the complaint-evidence substrate and separates complaint filing, minimum-structure review, quote, support window, review funding, admissibility, non-blocking admission, scoped systemic pause, competent-authority referral, external suspension, final resolution, and role-specific consequence paths. It also updated the formal inventory's complaint state list.

The seventy-third residual cleanup created `docs/diagrams/v0-funding-commitment-disbursement-state.md` and generated three SVG outputs. The diagram separates citizen funding commitment, reserved phase lanes, paused or blocked scopes, retained amounts, disbursement review, financial orders, custodian execution, partial or full release, return, reassignment, recovery, financial closure, assurance pending, guarantee materialization, guarantee insufficiency, expiry, execution, and release. It also updated the formal inventory's funding, disbursement, and assurance state list.

The seventy-fourth residual cleanup created `docs/diagrams/v0-project-evidential-contract-state.md` and generated three SVG outputs. The diagram separates the Project Evidential Contract baseline, fulfillment evidence needs, producer offers, contract-matched priority, lower-priority out-of-contract evidence, assignment or funding, contextualized evidence submission, quality/sufficiency review, fiscalization, EvaluationRecord effects, disbursement, closure, responsibility, reputation, correction, reformulation, and the unresolved evidence-quality validation risk. It also updated the formal inventory's evidential-contract and fulfillment-evidence-need state list.

Next review candidate: draft the Control Subproject and Fiscalization Assignment state diagram, including control package closure, fiscalizer offers, evidence mission assignment, primary and secondary fiscalization, conflict review, auditability, and execution-ready gate effects.

Approximate current maturity:

```text
Exploratory conceptual discovery: 95%
System architecture: 85%–90%
Scope consolidation: 70%–75%
Literature and theoretical framing: 20%
Paper drafting: 10%–15%
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
- responsibility matrix by role.

Candidate entity groups:

```text
Actors:
  citizen, organization, public authority / external authority, state-owned operator where eligible, custodian, allocation amount provider.

Roles:
  proposer, modeler/designer, executor, fiscalizer, evidence producer, funder, follower, commenter, complainant, beneficiary, affected party, delegator, delegate, evaluator, technical assistant.

Objects:
  project, project version, project phase, planning scope, primary responsibility anchor, value thesis, value-antivalue profile, value verification package, project evidential contract, fulfillment evidence need, contextualized evidence item, evidence context, material information claim, evaluation record, metric, milestone, budget, funding commitment, disbursement, retention, financial assurance profile, guarantee materialization record, control subproject, fiscalization offer, fiscalization report, complaint, complaint admissibility/referral record, systemic pause record, comment, justified objection signal, support signal, civic wallet, allocation profile, delegation, related-party conflict review, responsibility event, reputation signal, reputation input, reputation update, reputation summary, performance history surface, assisted deliberation context, governance resolution, review timeout resolution, administrative rule change, system implementation change, protocol version, operating mode, audit event.

States:
  draft, in validation, requires adjustment, ready to publish, open, execution-ready, in execution, correction required, paused, requires reformulation, under review, revoked, closed, expired.
```

Exit criteria:

- the architecture can be explained through diagrams and flows;
- each major object has a definition, lifecycle, and responsibility structure;
- contradictions between modules are identified and resolved.

## Phase 3 — Attack the Architecture

**Status:** active through residual post-integration audit; broader stress testing follows integration.

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

- objection files for each major risk;
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
1. Continue auditing secondary documents and older hypotheses for stale C001-C025 assumptions.
2. Update remaining maps or indexes affected by the integration pass.
3. Identify any residual contradictions introduced by the integrated corpus.
4. Commit and push each accepted cleanup unit.
5. Then resume formal system modeling, literature mapping, and paper architecture.
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
9. use project-local skills from `tools/skills/`;
10. revise the roadmap before every commit and whenever the strategy changes.
