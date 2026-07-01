# Fiscalization, Fulfillment Evidence, and Control Model v0

## Purpose

This document consolidates the Core v0 thinking around fiscalization, fulfillment evidence production, control funding, anti-capture protections, and proportional project control.

The central problem is that the executor has strong incentives to weaken, underfund, or capture the control layer. The architecture must therefore separate execution, fulfillment evidence production, complaint evidence submission, and responsible fiscalization.

## Core rule

> The executor executes. The system and protocol define control requirements. Evidence producers collect fulfillment or control evidence. The fiscalizer evaluates. The community can observe, submit complaint evidence, contradict, and denounce.

H015 adds an evaluation-context boundary to this rule:

```text
Evidence capture and formal evaluation are separate functions.
Formal evaluation is valid only for the project dimension and formal effect that the actor is allowed, qualified, or situated to evaluate.
```

This means a neighbor may submit a photo showing that the Macul sports court is closed, incomplete, or different from the accepted design. That submission may become useful fulfillment/control evidence. It does not by itself release funds, close the project, prove breach, assign responsibility, or update reputation until the relevant fiscalizer, reviewer, authority, or protocol path records a formal evaluation for the specific dimension and effect.

H016 frames this as a distributed but protocol-selected fiscalization ecosystem:

```text
many actors may observe, offer fulfillment or control evidence, submit complaint evidence, or compete to fiscalize;
only protocol-selected, conflict-checked, eligible, auditable actors become responsible fiscalizers.
```

## Key distinction

Fiscalization should not be treated as a single undifferentiated role.

The system should distinguish at least four layers:

```text
1. Open observation
2. Fulfillment evidence production
3. Responsible fiscalization
4. Technical or reinforced fiscalization
```

## 1. Open observation

Any citizen or organization may observe, comment, denounce, submit complaint evidence, or submit fulfillment evidence related to a project.

This layer is open by default.

Open observation can include:

- comments;
- complaints;
- photos;
- videos;
- local observations;
- contradictions to submitted evidence;
- warnings about conflict of interest;
- warnings about undeclared risks or antivalues.

Open observation does not necessarily validate project milestones or release funds.

## 2. Fulfillment evidence production

Evidence producers collect fulfillment or control evidence, but do not formally validate project compliance.

Fulfillment evidence production can be voluntary or paid.

Examples:

- georeferenced photos;
- videos;
- beneficiary interviews;
- attendance records;
- on-site visit reports;
- document collection;
- physical verification of goods or infrastructure;
- testimony from affected or benefited parties.

Fulfillment evidence production strengthens fiscalization because the fiscalizer does not depend only on the executor's own reports.

Executor-submitted material is self-reported support unless corroborated. Critical milestones, disbursements, and closures require fulfillment evidence produced or corroborated by evidence producers, fiscalizers, verified beneficiaries, technical records, or other non-executor sources.

## Information reliability incentives

Contextualized evidence and fiscalization are also an incentive architecture for reliable information.

Core v0 should not assume that interested actors will voluntarily publish damaging information. It should make material claims traceable, make concealment costly when proven, and make verified discovery valuable.

Material project claims include statements that can affect funding, execution readiness, disbursement, closure, reputation, risk, or beneficiary trust.

Examples:

```text
This milestone is complete.
This beneficiary count is accurate.
This supplier has no related-party conflict.
This budget line was spent as declared.
This risk was mitigated.
This fulfillment evidence proves attendance.
```

Each material claim should connect to:

- actor responsible;
- actor role;
- affected project object;
- supporting evidence with context;
- contradiction or complaint where applicable;
- review status;
- responsibility event if a role obligation is breached.

Citizen-facing labels may remain simple:

```text
Self-reported
Corroborated
Disputed
Contradicted
Corrected
Accepted
```

The technical audit layer preserves the full claim and contextualized evidence trail.

## Project Evidential Contract

Every project should define a Project Evidential Contract before execution funding.

The contract states how project promises will be evidenced and reviewed. It connects:

- value promises as value floors;
- antivalue constraints as antivalue ceilings;
- metrics and qualitative commitments;
- material information claims;
- milestones and budget lines where relevant;
- risks and declared antivalues;
- fulfillment evidence needs and fulfillment/control evidence types;
- fulfillment evidence source roles;
- corroboration requirements;
- responsible fiscalization or review;
- complaint, correction, disbursement, closure, and responsibility effects.

Under H012, positive value commitments are evaluated as floors and negative declared effects are evaluated as ceilings. A project may fail because it does not reach a promised value floor, exceeds an accepted antivalue ceiling, or hides a material antivalue. That failure does not automatically become a complaint. It first produces a control finding, correction path, disbursement effect, Responsibility Event, or reviewed Reputation Input as applicable; a formal complaint must still be explicitly filed and processed through the complaint rules.

The contract is project-specific and proportional. It may use value-catalog defaults, project-type templates, threshold policies, operating-mode rules, or country-specific requirements, but it should not become a single centralized evidence code for every domain.

The contract defines fulfillment/control evidence needs, not preselected evidence producers. Evidence producers and technical reviewers may later submit offers tied to specific value floors, antivalue ceilings, material claims, milestones, phases, risks, or declared antivalues. Contract-matched fulfillment/control evidence needs have higher eligibility priority, while unexpected fulfillment/control evidence may still be accepted when equivalent, necessary, materially useful, or complementary within the available control budget.

Examples:

```text
Sports training project:
attendance records, activity photos, beneficiary confirmation, evidence-producer observations, and fiscalizer review.

Technical infrastructure project:
permits, budget-line fulfillment evidence, georeferenced milestones, independent control, technical reception, and public-use evidence.
```

Fiscalizers evaluate fulfillment evidence against the accepted evidential contract. If the contract is materially weakened after support or funding, the change should be versioned and may require reformulation, notification, renewed review, or responsibility analysis depending on severity.

## Discovery incentives

Actors who discover verified hidden information, false or manipulated contextualized evidence, KPI manipulation, undeclared conflict, or material omission may receive reputational credit or compensation only after review confirms materiality and usefulness.

Discovery rewards must not pay for accusations alone.

Recommended rule:

> Reward verified discovery, not suspicion. Penalize proven concealment, not mere error.

Examples:

```text
Verified discovery:
Citizen identifies duplicate invoice used in two milestones.

Not rewardable by itself:
Citizen says the executor is corrupt without complaint evidence or supporting material.
```

Verified discovery may trigger:

- correction;
- complaint review;
- disbursement control;
- guarantee or retention effect where rules allow;
- role-specific Responsibility Event;
- verified-discovery reputation credit;
- reward from a configured fund where allowed.

## AI anomaly assistance

AI may help detect missing fulfillment evidence, duplicate records, inconsistent dates, suspicious budget changes, privacy risks, or contradictions between claims and contextualized evidence.

AI should not decide truth or responsibility by itself.

Allowed:

```text
flag anomaly
suggest related contextualized evidence
summarize contradiction
warn about weak claim
detect possible duplicate file
```

Not allowed:

```text
declare fraud proven
assign responsibility event by itself
release or block funds by itself
replace fiscalizer, regulator, court, or competent authority
```

## 3. Responsible fiscalization

The responsible fiscalizer evaluates whether a project, milestone, or obligation has been fulfilled against the accepted design, KPIs, milestones, fulfillment evidence obligations, guarantees, mitigation commitments, and fiscalization criteria.

Each formal fiscalization conclusion should identify the evaluated dimension, actor role, observability basis, authority or qualification basis, contextualized evidence used, method or limitation, evaluation type, formal effect, and review status. A fiscalizer may rely on many evidence sources, but the formal conclusion should not collapse beneficiary experience, citizen observation, technical review, complaint findings, and value fulfillment into one undifferentiated score.

The responsible fiscalizer may use:

- fulfillment evidence or self-report provided by the executor;
- fulfillment evidence produced by citizens or organizations;
- fulfillment evidence missions;
- beneficiary confirmations;
- funder observations;
- complaints and contradictions;
- its own inspections or analysis.

The responsible fiscalizer is reputationally accountable for the quality, independence, timeliness, and reliability of its fiscalization.

Responsible fiscalization is distributed in supply but not arbitrary in assignment. It should be selected through protocolized eligibility, conflict, independence, risk, budget, methodology, and auditability rules rather than by executor preference, ordinary popularity, first funding, or lowest price alone.

Citizen observation, beneficiary confirmation, fulfillment evidence production, complaint evidence, and complaints can strengthen or challenge the fiscalizer's work, but they do not automatically replace the responsible fiscalizer.

## 4. Technical or reinforced fiscalization

Projects that are larger, more complex, risky, technical, remote, irreversible, or high-impact may require stronger fiscalization.

This may include:

- professional fiscalizers;
- technical reviewers;
- auditors;
- laboratories;
- engineering inspections;
- multiple fiscalization points;
- mandatory site visits;
- stronger guarantees and retention rules.

The fact that any citizen or organization may participate in fiscalization does not mean that any citizen or organization can serve as the sole responsible fiscalizer for any project.

## Control funding

Fiscalization and fulfillment evidence costs should be financed as part of the total control cost of the project, but should not be controlled by the executor.

A project budget may include separated control components:

```text
execution budget
responsible fiscalization budget
fulfillment evidence mission budget
contingency / extraordinary review budget
guarantees or retentions, if applicable
```

The executor should not directly pay or appoint the actors responsible for validating its own performance.

Control-cost discovery may proceed in parallel with execution funding. This means that fiscalizers, evidence producers, and technical reviewers may submit lightweight offers while citizens are still funding the execution budget.

Evidence-producer offers should identify which accepted fulfillment/control evidence need, value floor, antivalue ceiling, metric, material claim, milestone, phase, risk, or declared antivalue they address. Offers outside the accepted evidential contract should normally be treated as lower priority unless the fiscalizer, reviewer, or protocol accepts them as useful to the control package.

However, execution funding and control funding remain distinct closures:

```text
execution budget closure
control package closure
```

Execution funding may close before the final control package is selected and funded, but the project does not become execution-ready until the minimum admissible control package is also closed.

## Supplemental control funding

After the minimum admissible control package is accepted, the project may allow additional control-only contributions under strict limits.

Supplemental control funding:

- never goes to the executor;
- does not expand the execution budget;
- does not change the project's promised scope;
- does not automatically block execution;
- must be assigned through the same independence, eligibility, conflict, and auditability rules that govern control selection.

Core v0 should allow at most:

```text
1 primary fiscalizer
1 secondary fiscalizer or fiscalization auditor
non-duplicative additional evidence producers or fulfillment evidence missions within protocol-defined fulfillment evidence needs
```

The secondary fiscalizer does not replace the primary fiscalizer. The secondary role reviews, contrasts, or audits the primary fiscalization and may trigger a complaint, extraordinary review, pause, or blocking path only through the ordinary formal rules.

Additional evidence producers should be funded only when they provide fulfillment evidence that is materially different from or complementary to already accepted fulfillment evidence. The system should reject duplicate, redundant, or low-value fulfillment evidence funding once the protocol-defined fulfillment evidence needs are satisfied.

If new supplemental funding is not enough to fund a secondary fiscalizer but can fund a non-duplicative fulfillment evidence mission, the mission may be accepted. If the project already has enough fulfillment evidence and no distinct evidence offer is admissible, the funding may remain reserved for the secondary fiscalizer. If the project already has both primary and secondary fiscalization and no admissible distinct fulfillment evidence need remains, new supplemental control contributions should be rejected.

## Control subprojects

Fiscalization, fulfillment evidence missions, technical review, admissibility review, or other control work may be modeled as a Control Subproject associated with the parent project.

For phased projects, control work may also verify phase gates. This is especially important when a single parent project combines design and execution.

Example:

```text
Parent project:
Design and Construction of Multi-court Facility in Macul.

Design phase gate:
review whether the design package satisfies dimensions, public access, bathrooms or accessibility commitments where required, budget refinement, fulfillment evidence requirements, and related-party safeguards.

Construction phase:
cannot release construction funds until the design phase gate is accepted.
```

A Control Subproject may contain:

- methodology;
- deliverables;
- control budget;
- eligibility criteria;
- conflict checks;
- assigned actor or actor pool;
- fulfillment evidence requirements;
- comments and objections;
- audit trail;
- reputation effects.

When the control subproject verifies a phase gate, its deliverables should identify whether the phase is accepted, requires correction, rejected, or requires reformulation.

Control subprojects fit the project architecture, but their selection rules must be stronger than ordinary project selection. They are selected through protocolized, risk-adjusted, conflict-checked, and auditable rules, not by the executor or by ordinary popularity.

### Project admissibility review as control work

Some projects require review of submitted documents or technical assumptions before publication, financing, execution-ready status, disbursement, or closure.

This review should be handled as:

```text
Control Subproject: Project Admissibility Review
```

when it requires independent or paid work outside a tutored authority decision.

An admissibility review may check whether required documents are sufficient for the next project state.

Examples:

```text
Macul multi-court facility:
review land-use document, municipal compatibility, public-access condition, duplication risk, and basic construction-feasibility assumptions.

Water-intensive data center:
review whether technical, water-use, environmental, or affected-party documents required by the policy have been submitted and are sufficient for the relevant platform state.
```

The system or AI may identify that these documents are needed, but it does not certify their substantive acceptability by itself.

In tutored mode, the competent authority may perform the review under C020 and issue a public governance decision or review trace.

In non-tutored or open mode, the admissibility reviewer should be selected through the same independence, eligibility, conflict, budget, deliverable, and auditability rules used for other control subprojects.

The executor cannot privately select, directly pay, or remove the reviewer who determines project admissibility.

The same rule applies to phase-gate review. If the executor also designed the project, it cannot privately approve the design package that unlocks its own construction funds where the Threshold Policy requires independent review.

## Fiscalization offers

For projects that require financed control, the system may open fiscalizer offers, evidence-producer offers, and control-cost discovery in parallel with execution funding.

This is not a prior gate that blocks citizens from funding execution. It is a parallel discovery process that helps the system identify an admissible control package before execution begins.

Fiscalizers can submit offers associated with the project, declaring:

- fiscalizer identity;
- proposed methodology;
- required budget;
- travel and logistics costs;
- technical requirements;
- deliverables;
- timeline;
- fulfillment evidence requirements;
- declared conflicts of interest;
- relevant reputation or qualifications.

The offer helps discover the real cost of fiscalizing a project. Offers are lightweight and unpaid by default. Payment belongs to accepted control work after a fiscalizer, evidence producer, or reviewer becomes part of the selected control package or Control Subproject.

This is especially important for remote or extreme-zone projects, where the true cost of fiscalization may include travel, lodging, time, specialized review, or multiple visits.

## Fiscalization offer admissibility

Not every fiscalization offer should be allowed to become part of the accepted control package.

Fiscalization offers must first satisfy the minimum control requirements defined by protocol for the project's risk, size, location, technical complexity, and possible conflicts.

The winning criterion should not simply be:

```text
the cheapest fiscalizer wins
```

nor:

```text
the first fiscalizer funded wins
```

without protections.

A safer rule is:

> Only admissible fiscalization offers may compete, and projects above a minimum risk level require a competition and observation window before selection.

Possible protections:

- minimum offer window;
- public observation period;
- conflict-of-interest declarations;
- pattern visibility;
- reputation requirements;
- eligibility thresholds;
- independent selection rules;
- reinforced requirements for medium, large, or risky projects.

Execution readiness requires both execution budget closure and control package closure where control is required. A project may be execution-funded while control remains pending, but it may not begin execution until the minimum admissible control package is selected, funded, and accepted.

Supplemental control funding after minimum closure may improve auditability, but it should not reopen execution readiness by default. Its effects become operational only through accepted control assignments, contextualized evidence items, complaints, extraordinary review, pause, blocking, or disbursement rules.

## Fulfillment evidence commitments from funders and beneficiaries

Funders and direct beneficiaries are naturally interested in whether the project is executed well.

When a citizen funds a project, the system may ask:

```text
Would you like to commit to providing fulfillment evidence during execution or after completion?
```

A funder or beneficiary may offer to provide:

- photos;
- videos;
- field observations;
- beneficiary confirmation;
- surveys;
- attendance confirmation;
- local verification;
- contradiction of false or incomplete fulfillment evidence.

This creates a distributed network of potential fulfillment evidence producers around the project.

## Fulfillment evidence commitment object

A fulfillment evidence commitment may include:

- project id;
- actor id;
- relationship to project: funder, beneficiary, neighbor, organization, affected party, other;
- type of fulfillment evidence offered;
- location relevance;
- expected timing;
- delivery status;
- fulfillment evidence submitted;
- whether fulfillment evidence was accepted, contradicted, rejected, or found false;
- reputational effect.

Fulfillment evidence commitments do not replace responsible fiscalization. They complement it.

## Paid fulfillment evidence missions

A paid fulfillment evidence mission is not an ordinary public-value project. It is control work associated with a project, control package, fiscalization process, or Control Subproject.

Example:

```text
Mission:
  Visit project site, take georeferenced photos, record short video, interview beneficiaries, and upload fulfillment evidence.
Payment:
  Fixed amount if fulfillment evidence satisfies the required format and traceability standards.
```

Paid fulfillment evidence missions allow citizens or organizations to professionalize fulfillment evidence collection without creating a new public-value project for every evidence task. When the mission requires budget, methodology, assignment, deliverables, fulfillment evidence standards, reputation effects, and auditability, it may be represented inside a Control Subproject.

## Fulfillment evidence mission funding

Fulfillment evidence missions should be funded from the project's separated control budget, from the accepted control package, from a Control Subproject budget, or from an extraordinary review budget.

Submitting an evidence-producer offer is not itself payable by default. Payment begins only when the actor is selected or assigned to accepted control work under the protocol.

Supplemental fulfillment evidence funding after the minimum control package is accepted should fund only distinct or complementary fulfillment evidence. It should not pay multiple actors to produce the same fulfillment evidence merely because additional money is available.

However, the executor should not define or assign fulfillment evidence missions at its own discretion.

The executor can define project commitments, milestones, and locations, but should not control the evidence producers who verify them.

## Fulfillment evidence mission assignment

Fulfillment evidence missions should be assigned or selected through system rules, not by the executor.

Possible assignment criteria:

- eligibility;
- absence of known conflict of interest;
- reputation;
- location proximity;
- availability;
- specialization;
- random or semi-random selection;
- rotation;
- redundancy for riskier projects.

A simple first-come-first-served rule may be acceptable for low-risk tasks, but it is vulnerable to capture for medium or high-risk projects.

## Anti-capture premise

The system should assume that hidden collusion is possible.

It may be impossible to detect every friendship, informal payment, hidden relationship, or off-platform compensation.

Therefore the architecture should not depend on perfect conflict detection.

Instead, it should make capture harder, riskier, and less sufficient.

## Anti-capture protections

Controls include:

- executor does not choose the responsible fiscalizer;
- executor does not directly pay fiscalizers or evidence producers;
- project and control actors declare related-party relationships;
- contextualized evidence is public and contradictable;
- fiscalizers and evidence producers carry reputational risk;
- contextualized evidence can be challenged by beneficiaries, funders, citizens, and other organizations;
- repeated executor-fiscalizer or executor-evidence-producer relationships are visible;
- suspicious patterns are flagged;
- false or manipulated contextualized evidence can produce strong reputational penalties;
- medium and large projects may require redundant fulfillment evidence sources;
- fiscalizer validation does not close the possibility of later complaint or fraud review.
- supplemental control funding is capped and does not permit unlimited fiscalizers or unlimited evidence producers.

## Related-party conflicts

Related-party conflict is a control input, not an automatic universal rejection rule.

Declared low or indirect conflicts may remain visible as warnings. Relevant conflicts may require stronger independence rules, non-related fiscalization, additional fulfillment evidence, access guarantees, ownership or revenue clarity, or a longer observation window. Severe conflicts may require reformulation, exclusion of the conflicted actor or supplier, disbursement blocking, or rejection. Hidden or misrepresented conflicts may trigger complaint review and a role-specific Responsibility Event if proven.

Example:

```text
A local sports club may propose a public multi-court project in Macul and also use the facility under published public-access rules.

If the executor secretly hires a sibling's construction company, the control package should treat the issue as a hidden related-party conflict and may block release until corrected.
```

## Palos blancos / straw participants

The executor could try to use friends or straw participants as funders, evidence producers, or fiscalizers.

The system cannot perfectly prevent this, but it can reduce usefulness through:

- not weighting evidence by amount financed;
- not allowing executor-controlled assignment;
- making contextualized evidence contradictable;
- exposing patterns;
- requiring multiple fulfillment evidence sources for riskier projects;
- attaching reputational consequences to false or misleading contextualized evidence;
- preserving full audit trails;
- allowing later complaint, review, and sanction.

## Proportionality

Not every project should carry the same control burden.

Suggested proportional model:

```text
Small project:
  executor self-report + open observation + voluntary fulfillment evidence.

Medium project:
  responsible fiscalization + control budget + fulfillment evidence commitments + possible fulfillment evidence missions.

Large or risky project:
  reinforced fiscalization + technical review + multiple fulfillment evidence sources + stronger guarantees and observation windows.
```

## Project lifecycle concern

Adding too many layers can make the process too slow or impossible for ordinary users to understand.

Therefore control mechanisms must be designed with layered complexity:

- simple for ordinary citizens;
- detailed for interested users;
- operational for active participants;
- technical for specialists and auditors.

The existence of fiscalization, contextualized evidence, guarantees, control budgets, missions, and reputation should not force every citizen to understand every layer before participating.

## Citizen-facing simplification

For ordinary citizens, the interface should show a simplified project sheet:

- what will be done;
- where;
- who executes;
- who benefits;
- how much it costs;
- risk level;
- whether fiscalization is included;
- whether fulfillment evidence is required;
- whether guarantees or retentions apply;
- current status;
- simple action buttons: fund, support, delegate, follow, provide fulfillment evidence, report problem.

Deep control details remain available for those who want to audit.

## Principle

> Control should be strong enough to reduce capture but layered enough that ordinary participation remains simple.

## Status

Accepted as Fiscalization, Fulfillment Evidence, and Control Model v0.
