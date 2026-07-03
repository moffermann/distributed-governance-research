# H016 — Distributed Fiscalization Ecosystem

## Hypothesis

Fiscalization should not be a single central monopoly.

It can become a distributed ecosystem of specialized, reputable, auditable fiscalizers, evidence producers, technical reviewers, and observers, but responsible fiscalization must be selected through protocolized independence, eligibility, conflict, risk, budget, contextual reputation, and auditability rules.

The minimum chain is:

```text
open observation
→ evidence production
→ responsible fiscalization
→ technical or reinforced fiscalization where required
→ optional secondary fiscalization or fiscalization audit under protocol caps
→ formal complaint, review, pause, blocking, disbursement, or reputation effects where justified
```

## Rationale

If projects are distributed, oversight must also be scalable and distributed. A single state fiscalizer may lack capacity, specialization, speed, trust, or independence.

Communities affected by a project should be able to support fiscalization by entities they trust, especially when externalities or failures appear.

However, distributed fiscalization cannot mean that any actor can become the responsible fiscalizer for any project merely by popularity, first funding, low price, or executor preference.

The fiscalization ecosystem must solve two problems at once:

```text
Avoid central monopoly.
Avoid captured, unlimited, or executor-controlled fiscalization.
```

## Four-layer fiscalization model

Core v0 should distinguish four layers.

## 1. Open observation

Any verified citizen or organization may observe, comment, contradict evidence, report risks, or file complaints.

Open observation is broad and low-bureaucracy.

It does not by itself validate milestones, release funds, close complaints, or determine fulfillment.

## 2. Fulfillment/control evidence production

Evidence producers collect or submit fulfillment/control evidence linked to a value floor, antivalue ceiling, metric, material claim, milestone, phase, risk, or declared antivalue.

Fulfillment/control evidence production may be voluntary or funded, but paid evidence missions should be tied to accepted fulfillment evidence needs and should not become unlimited evidence overfunding.

Executor self-report may be useful context, but it is not enough by itself for critical milestones, disbursements, or closure.

## 3. Responsible fiscalization

The responsible fiscalizer evaluates whether the project, milestone, phase gate, or obligation complied with the accepted project design, evidential contract, milestone plan, evidence, complaints, and applicable policy.

This role carries responsibility and reputation effects.

The responsible fiscalizer should not be chosen, directly paid, removed, or controlled by the executor being evaluated.

## 4. Technical or reinforced fiscalization

Larger, riskier, more technical, remote, irreversible, or high-impact projects may require stronger review:

- technical reviewers;
- auditors;
- laboratories;
- certifiers;
- engineering inspections;
- multiple fulfillment/control evidence sources;
- stronger guarantees or retentions;
- reinforced observation windows.

The fact that the ecosystem is distributed does not mean every project needs the same heavy burden.

## Fiscalization as a Control Subproject

Fiscalization work can be modeled as a `Control Subproject` attached to a parent project.

The control subproject may include:

- fiscalization scope;
- methodology;
- deliverables;
- budget;
- fulfillment/control evidence requirements;
- review calendar;
- fiscalization reports;
- questions and comments;
- conflict declarations;
- reputation effects;
- audit trail.

It does not deliver the public value of the parent project. It controls whether the parent project is fulfilling its promises.

Example:

```text
Project: fiscalize emissions from a plant.
Primary goal: verify compliance with mitigation commitments.
Funding: affected community, society, protocol-defined control budget, insurers, public funds, or other permitted sources.
KPIs: measurements, visits, fulfillment/control evidence quality, report delivery, traceability.
Evaluator: affected community, experts, peer fiscalizers, evidence review.
```

Control costs may be financed through the protocol-defined budget structure, but the executor should not directly pay, appoint, remove, or control the fiscalizer who validates its own performance.

## Who fiscalizes

Possible fiscalizers include:

- specialized companies;
- universities;
- laboratories;
- professional associations;
- technical institutes;
- auditors;
- expert panels;
- civil society organizations;
- certified independent inspectors.

Eligibility depends on project risk, domain, territory, required competence, conflicts, contextual reputation, repeat relationships, dependency concentration, workload, methodology fit, and operating mode.

Each responsible fiscalizer assignment should expose a project-specific fiscalizer eligibility and reputation profile. This profile is not a generic CV, universal score, or automatic selector. It explains which eligibility criteria apply to this project or phase, whether the fiscalizer satisfies them, what comparable-project performance history is relevant, and what capture or relationship warnings apply.

## Selection rule

Distributed fiscalization is not ordinary popularity selection.

The relevant question is not:

```text
Which fiscalizer received the most likes or fastest funding?
```

The relevant question is:

```text
Which admissible actor is independent, competent, affordable, methodologically adequate,
available, and auditable for this control task?
```

Selection should be risk-adjusted:

```text
Low-risk project:
  eligibility filter + conflict filter + rotation, random, or simple admissible selection.

Medium-risk project:
  eligibility filter + conflict filter + simple technical/economic scoring +
  semi-random selection among top admissible offers.

High-risk project:
  strong eligibility + strong conflict review + detailed technical/economic evaluation +
  possible reinforced or secondary fiscalization + public selection reason.
```

The executor may object to verifiable conflicts, answer requests, and submit self-report evidence. It cannot choose, privately pay, or remove the responsible fiscalizer.

## Who fiscalizes the fiscalizer

There is no perfect fiscalizer. The system should rely on layers:

- technical standards;
- accreditation;
- conflict-of-interest disclosure;
- public methodology;
- evidence traceability;
- peer review;
- competing second opinions;
- historical reputation;
- sanctions for false or negligent reports.

Core v0 may allow at most one secondary fiscalizer or fiscalization auditor after the minimum control package is accepted.

The secondary fiscalizer or fiscalization auditor:

- reviews, contrasts, or audits the primary fiscalization;
- does not replace the primary fiscalizer by default;
- does not automatically block execution or disbursement;
- must enter serious findings through the ordinary complaint, extraordinary review, pause, blocking, or disbursement-control path;
- should be selected through the same independence, eligibility, conflict, budget, and auditability rules.

This creates reviewability without creating unlimited fiscalization.

## Capture risk

A fiscalizer may be captured by whoever funds it or by the group that wants a particular outcome. The system should reduce this through transparency, disclosure, reputation, reviewability, and the possibility of challenge. ^r7ffe1099

The system should assume that hidden collusion is possible.

It cannot perfectly detect every friendship, off-platform payment, repeated relationship, holding-linked dependency, or informal pressure. ^rfdde35b4

Therefore capture protections should not depend on perfect detection.

They should make capture harder, riskier, more visible, and less sufficient:

- executor does not choose the responsible fiscalizer;
- executor does not directly pay fiscalizers or evidence producers;
- related-party relationships are declared and classified;
- repeated executor-fiscalizer or executor-evidence-producer patterns are visible;
- repeat relationships by proposer, modeler/designer, executor, evidence producer, supplier, territory, or holding group are visible where material;
- fiscalizer dependency concentration and workload are visible where material;
- report sufficiency is reviewed through scope, methodology, evidence considered, evidence rejected, limitations, conflicts, and formal effect claimed;
- reports are public or privacy-filtered but auditable;
- evidence is contradictable;
- complaints may challenge fiscalization quality;
- false or negligent fiscalization may create role-specific responsibility events;
- fiscalizer reputation is updated by role, not by generic popularity;
- supplemental control funding is capped.

H016 is aligned with [[../../docs/84_COLLUSION_OBSERVABILITY_AND_A018_RESOLUTION|A018]]: because role separation across proposer, designer, executor, evidence producer, fiscalizer, and suppliers is necessary but not sufficient, Core v0 exposes collusion observability over existing objects rather than a detection engine. Repeated actor clusters become visible across projects through the A014 relationship-and-control graph reused across roles and suppliers, timing-anomaly and outcome-pattern surfaces feed human review, critical milestones require independent corroboration, verified discovery can expose hidden coordination, and confirmed collusion produces cross-role responsibility events. Consistent with the capture-risk position above, the claim is comparative — collusion becomes harder, riskier, and more discoverable than under opaque institutional monopoly — not that purely off-platform coordination among formally compliant actors is eliminated; automated collusion detection, network-analysis scoring, and investigative capability remain Extension v1+, and prosecution remains external law.

## Key distinction

The executor of a paused project may propose or finance mitigation, but it should not control the fiscalizer whose report determines whether the pause is lifted.

The same rule applies to design-and-execution projects.

If one company designs and executes a project, it may accept both responsibilities, but it cannot privately validate the phase gate that unlocks its own later execution funds where the Threshold Policy requires independent review.

## Example: Macul multi-court facility

For a project such as:

```text
Design and Construction of Multi-court Facility in Macul
```

distributed fiscalization may include:

- citizens observing whether the site is open and usable;
- beneficiaries confirming public access;
- evidence producers submitting georeferenced photos or measurements;
- a responsible fiscalizer reviewing design dimensions, public-access commitments, bathrooms or accessibility commitments where promised or required, construction milestones, and final use evidence;
- a secondary fiscalizer or fiscalization auditor only if the protocol allows it and control funding supports it.

If the executor also designed the project, the design phase gate should not be self-approved where independent review is required.

If a secondary fiscalizer later detects that courts have wrong dimensions or public gates remain locked, that finding does not automatically seize control of the project. It should trigger the relevant formal path: complaint, extraordinary review, correction, pause, disbursement block, reformulation, or responsibility analysis.

## Citizen-facing simplicity

Ordinary citizens should not need to understand every fiscalization offer and selection rule.

Citizen-facing layers should show:

```text
This project requires fiscalization.
The responsible fiscalizer has been selected.
The selection reason is visible.
Required fulfillment/control evidence is defined.
Reports and fulfillment/control evidence status are visible.
Concerns can be submitted as contextualized evidence, comments, or complaints.
Secondary fiscalization exists only under protocol limits.
```

Layer 5 preserves the full selection criteria, eligibility profile, contextual reputation basis, offers, conflicts, methodology, contextualized evidence considered, evidence rejected, fiscalizer reports, report sufficiency, reputation effects, and audit trail.

## Relationship to accepted v0 resolutions

H016 is aligned with:

- C002, because fiscalization can be structured as a Control Subproject selected by protocol rather than by executor choice or ordinary popularity;
- C003, because fiscalization uses fulfillment/control evidence production but should distinguish evidence capture from evaluation;
- C013, because execution funding, fiscalizer offers, evidence-producer offers, and control funding may proceed in parallel, but execution readiness requires the minimum admissible control package;
- H018 and H022, because fiscalizers evaluate against the value thesis, value verification package, fulfillment evidence needs, and Project Evidential Contract;
- H019, because modeler/designer, executor, and fiscalizer responsibilities remain distinct even when design and execution are integrated in one parent project.

## Remaining risks

- eligible fiscalizers may still collude with executors;
- scoring rules may be gamed;
- good fiscalizers may avoid low-paid projects;
- secondary fiscalization may be used to pressure projects if uncapped;
- citizens may misunderstand conflicting fiscalizer conclusions;
- fulfillment/control evidence quality, authenticity, AI-generation risk, and usefulness remain a separate open question;
- small projects may become overburdened if fiscalization rules are not proportional.

These risks do not defeat distributed fiscalization. They require proportional selection, transparent conflict records, contextual eligibility and reputation profiles, capped supplemental control, reviewability, and role-specific reputation.

## Principle

> We do not solve the problem of fiscalization by finding a perfect fiscalizer. We solve it by creating a distributed but protocol-selected ecosystem where fiscalizers are transparent, auditable, reputable, replaceable, and unable to validate the projects they secretly control. ^r8a766959

## Status

Aligned Core v0 oversight hypothesis for distributed but protocol-selected fiscalization, Control Subprojects, evidence production, responsible fiscalization, secondary fiscalization caps, anti-capture safeguards, citizen-facing simplicity, and role-based fiscalizer accountability.
