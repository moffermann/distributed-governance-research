# v0 Contradiction and Failure-Mode Checklist

## Purpose

This document starts the first systematic attack on the Distributed Governance System v0.

The goal is not to defend the model. The goal is to look for contradictions, hidden authority, unresolved design gaps, abuse paths, failure modes, and places where two parts of the architecture may be pulling in different directions.

## Status

Accepted as v0 contradiction and failure-mode checklist.

This checklist is intentionally unfinished. It should be used as a working instrument: each item can later be marked as resolved, accepted risk, deferred, country implementation, extension, or fatal to v0.

## Review principle

> A good architecture is not the one with no objections. It is the one that makes its objections visible, classifies them honestly, and resolves the ones that threaten the core model.

## Severity labels

```text
Critical
High
Medium
Low
```

## Status labels

```text
Open
Partially resolved
Resolved
Accepted risk
Deferred to v1+
Country implementation
Out of scope
```

## Core contradiction test

For every issue, ask:

```text
1. Does this contradict another part of Core v0?
2. Does this create hidden authority?
3. Does this allow uncontrolled money movement?
4. Does this weaken evidence, fiscalization, or auditability?
5. Does this make citizen simplicity impossible?
6. Does this create incentives for capture or collusion?
7. Does this depend on country law rather than system architecture?
8. Does this belong in v0 or should it be deferred?
```

---

# A. Initial contradictions and tensions found

## C001 — Open project with no executor vs no execution financing without executor

**Severity:** High  
**Status:** Open

### Tension

The architecture says a project may exist as a draft or design without an executor. It also says a project cannot be published for execution financing without an identified and accepted responsible executor.

This creates ambiguity around whether an executorless project can be public, searchable, followed, commented on, or receive any kind of support.

### Risk

If executorless projects are publicly visible and receive funding, the system may accidentally allow financing without responsibility.

If executorless projects cannot be visible at all, the system loses the ability to call for executors around good ideas.

### Proposed resolution

Create a strict distinction:

```text
Public design / call for executor
Open financeable project
```

A `public design` may be visible, followed, discussed, improved, and used to attract an executor.

An `open financeable project` may receive execution funding only after executor acceptance.

### Decision needed

Should v0 include `Public design` as an explicit pre-project state, or should executorless drafts remain private until executor acceptance?

---

## C002 — Fiscalizer offer flow vs executor cannot choose fiscalizer

**Severity:** High  
**Status:** Open

### Tension

The system allows actors to offer to fiscalize. It also says the executor should not directly choose or control the fiscalizer.

The architecture does not yet fully specify who or what selects among fiscalizer offers.

### Risk

If the executor selects the fiscalizer, control is captured.

If the platform selects without transparent rule, hidden authority is created.

If selection is purely first-come-first-served, low-quality or captured fiscalizers may dominate.

### Proposed resolution

Fiscalizer selection should be rule-based and risk-adjusted:

```text
Eligibility filter
Conflict declaration
Offer window
Reputation / qualification filter
Random or semi-random selection among qualified offers where appropriate
Public selection reason
Audit event
```

For low-risk projects, simple rotation may be enough.

For medium/high-risk projects, independent selection logic must be explicit.

### Decision needed

Define a v0 fiscalizer selection rule simple enough to implement but strong enough to prevent executor capture.

---

## C003 — Evidence can be produced by interested actors

**Severity:** High  
**Status:** Open

### Tension

Evidence may come from executor, beneficiaries, funders, evidence producers, fiscalizers, and observers. Some of these actors may have direct interest in project success.

### Risk

Evidence may be biased, staged, incomplete, or collusive.

### Proposed resolution

Do not ban interested evidence. Classify it.

Evidence should include:

```text
producer role
relationship declaration
interest level
verification strength
independent corroboration status
```

Fiscalizer reports should distinguish:

```text
self-reported evidence
beneficiary evidence
independent evidence
contradictory evidence
```

### Decision needed

Should v0 require at least one independent evidence source for every disbursement, or only for projects above a risk/amount threshold?

---

## C004 — Blocking complaints must block enough, but not too much

**Severity:** High  
**Status:** Open

### Tension

The model says not every complaint blocks. It also says blocking complaints must pause related disbursement or project progress.

The exact threshold for blocking is not yet defined.

### Risk

If blocking is too easy, hostile actors can freeze projects.

If blocking is too hard, serious fraud or false evidence can proceed to disbursement.

### Proposed resolution

A complaint should become blocking only when it meets at least one criterion:

```text
credible evidence attached
directly affects current or next disbursement
concerns beneficiary existence or eligibility
concerns fiscalizer conflict
concerns material false information
concerns misuse of already released funds
concerns safety or legal impossibility
```

Blocking should be scoped:

```text
block project
block milestone
block budget line
block evidence item
block actor assignment
block disbursement only
```

### Decision needed

Define v0 blocking criteria and whether an initial reviewer, fiscalizer, or protocol rule assigns blocking status.

---

## C005 — Funding withdrawal, lock, reformulation, and no-response defaults

**Severity:** High  
**Status:** Open

### Tension

The model allows withdrawal or reassignment before execution-ready. It also says once execution-ready, funds are locked. Reformulation may give funders options to keep, return, or reassign. If a funder does not respond, a default may apply.

### Risk

The model may contradict itself if a project is already execution-ready or in execution and then reformulates.

### Proposed resolution

Separate funder rights by project state:

```text
Open project:
  withdrawal/reassignment allowed unless protocol window says otherwise.

Execution-ready but not started:
  withdrawal not allowed except material reformulation, fraud, or blocking review.

In execution:
  no ordinary withdrawal; reformulation may affect unreleased balance only.

After disbursement:
  no withdrawal of released funds; only review, recovery, complaint, or reputation effects.
```

### Decision needed

Define whether material reformulation reopens exit rights for all funders or only for unreleased balances.

---

## C006 — Treasury is not a civic actor, but custody and disbursement require authority

**Severity:** Medium  
**Status:** Partially resolved

### Tension

The model says treasury or revenue authority is infrastructure, not a civic decision-maker. But custody, settlement, and disbursement still require an actor or integration with authority.

### Risk

The architecture may hide a major decision-maker inside infrastructure.

### Proposed resolution

Clarify:

```text
Protocol decides eligibility and disbursement logic.
Fiscalization provides review.
Custodian executes settlement according to rule.
Custodian does not choose projects, values, fiscalizers, or beneficiaries.
```

### Decision needed

Country implementation must define legal custodian, but v0 should define the custodian as a non-discretionary settlement actor.

---

## C007 — Public institution as equal actor vs tutored moderation by institution

**Severity:** High  
**Status:** Open

### Tension

The model allows public institutions to participate as ordinary actors. It also allows tutored transition modes where an institution may moderate publication.

### Risk

An institution could compete as proposer/executor while also moderating competitors.

### Proposed resolution

In tutored mode, role separation must be explicit:

```text
Institution-as-executor
Institution-as-moderator
Institution-as-fiscalizer
```

The same institutional unit should not moderate its own projects or block competitors without visible reason.

Moderation decisions must be auditable and appealable or reviewable according to transition rules.

### Decision needed

Define whether institutional moderation requires a separate moderation unit or whether public audit of decisions is enough for v0.

---

## C008 — AI assistance vs protocol authority

**Severity:** Medium  
**Status:** Partially resolved

### Tension

AI helps with value search, value generation, metric validation, project creation, and possibly risk detection. But protocol rules should remain authoritative.

### Risk

AI could become an invisible decision-maker.

### Proposed resolution

Core v0 rule:

```text
AI may suggest, warn, classify, and draft.
Protocol rules decide mandatory validity.
Human/role-based review handles accountability where required.
Audit trail records AI-assisted outputs when they affect decisions.
```

### Decision needed

Define which AI outputs must be recorded in Layer 5.

---

## C009 — Citizen simplicity vs too many technical states

**Severity:** Medium  
**Status:** Partially resolved

### Tension

The architecture has many technical states: draft, validation, open, execution-ready, in execution, paused, blocking, correction required, reformulation, review, revocation, etc.

The citizen interface must remain simple.

### Risk

The system may become as confusing as the bureaucracy it aims to improve.

### Proposed resolution

Use two state layers:

```text
Citizen-facing state
Technical state
```

Example:

```text
Citizen sees: Paused
Technical state: Paused by blocking complaint on milestone 2 disbursement
```

### Decision needed

Define official v0 citizen-facing states and map technical states to them.

---

## C010 — Metrics may distort value

**Severity:** High  
**Status:** Open

### Tension

The system requires measurable value. But public value can be distorted when only measurable outputs matter.

### Risk

Projects may optimize for easy metrics instead of true value.

Examples:

```text
more sessions but poor quality
more beneficiaries but shallow impact
more evidence but staged evidence
```

### Proposed resolution

Metrics should be paired with:

- declared risks;
- antivalues;
- beneficiary feedback;
- qualitative evidence where appropriate;
- fiscalizer judgment;
- complaint and contradiction channels;
- value-specific metric standards.

### Decision needed

Define whether v0 allows qualitative evidence as supporting evidence, and how it is reviewed without becoming arbitrary.

---

## C011 — Automatic allocation and delegation can conflict

**Severity:** Medium  
**Status:** Open

### Tension

A citizen may have a delegate and an automatic allocation profile. Both can direct allocation.

### Risk

Conflicting instructions may cause unintended allocation.

### Proposed resolution

Define priority order:

```text
1. Direct citizen action
2. Explicit delegation within scope
3. Automatic allocation profile
4. System default fallback
```

Or require the citizen to assign percentage shares:

```text
40% delegate
40% automatic profile
20% manual balance
```

### Decision needed

Choose priority model or percentage model for v0.

---

## C012 — Reputation by role vs shared responsibility

**Severity:** Medium  
**Status:** Partially resolved

### Tension

The model says reputation follows role responsibility. But projects often involve modelers, executors, fiscalizers, evidence producers, and delegates whose responsibilities overlap.

### Risk

Actors may blame each other, or the system may punish the wrong actor.

### Proposed resolution

Core v0 should define responsibility triggers:

```text
Modeler: design quality before executor acceptance.
Executor: execution after accepting design.
Fiscalizer: review quality and independence.
Evidence producer: accuracy and usefulness of evidence.
Delegate: decisions within delegated scope.
```

If the executor accepted a design with reasonably detectable issues, execution responsibility remains with executor.

### Decision needed

Define what counts as a reasonably detectable design problem.

---

## C013 — Fiscalization cost is control cost, but who funds it before project is funded?

**Severity:** Medium  
**Status:** Open

### Tension

Fiscalization cost is part of project control cost, but fiscalizer offers may be needed before project closure. It is unclear whether fiscalizers spend effort making offers before funding is guaranteed.

### Risk

Good fiscalizers may not participate if offer preparation is unpaid.

Bad fiscalizers may flood offers cheaply.

### Proposed resolution

Possible v0 options:

```text
Unpaid lightweight offer for low-risk projects.
Paid pre-assessment budget for higher-risk projects.
Standardized offer templates.
Qualification pools by category.
```

### Decision needed

Should v0 include paid pre-assessment, or defer it to v1+?

---

## C014 — Open comments vs social media dynamics

**Severity:** Medium  
**Status:** Open

### Tension

The system allows comments and questions, but should not become a popularity contest or hostile social network.

### Risk

Comment volume, brigading, harassment, or low-quality debate may bury useful signals.

### Proposed resolution

Comments should be structured by type and relevance:

```text
Question
Observation
Suggestion
Response
Clarification
```

High-risk claims should be routed to complaints rather than endless debate.

### Decision needed

Define whether comment ranking exists in v0, and if so whether it is chronological, relevance-based, or role-weighted.

---

## C015 — Transparency vs privacy

**Severity:** High  
**Status:** Open

### Tension

The system requires public auditability. But evidence may include minors, vulnerable beneficiaries, location data, identity documents, medical or social information.

### Risk

Full transparency could violate privacy or expose vulnerable people.

Over-redaction could weaken auditability.

### Proposed resolution

Create privacy classes:

```text
Public
Public summary with private attachment
Restricted to fiscalizer/reviewer
Aggregated only
Redacted public copy
Sealed unless formal review
```

Layer 5 should show that evidence exists and how it was reviewed, even when raw content is restricted.

### Decision needed

Define v0 privacy classes and who can access each class.

---

## C016 — Partial disbursement criteria are not yet precise

**Severity:** Medium  
**Status:** Open

### Tension

The model allows partial release and retention. But criteria for partial release are not fully defined.

### Risk

Partial release could become arbitrary.

### Proposed resolution

Partial release should require:

```text
separable milestone components
accepted evidence for completed components
explicit retained amount
clear condition for releasing retained amount
fiscalizer explanation
citizen-facing summary
```

### Decision needed

Define whether partial release is allowed by default or only when milestone rules define it in advance.

---

## C017 — Project reformulation may become a way to escape failure

**Severity:** High  
**Status:** Partially resolved

### Tension

Reformulation preserves project value when circumstances change. But it may also let an executor reframe failure as a new version.

### Risk

Executors may avoid reputation damage by repeatedly reformulating.

### Proposed resolution

V0 should define reformulation limits:

- no silent history deletion;
- visible change summary;
- reason required;
- reputation impact when reformulation follows avoidable failure;
- limit frequency or require stronger review after repeated reformulations.

### Decision needed

Should v0 set a default reformulation frequency limit, or leave it protocol-configurable?

---

## C018 — Project closure categories need stronger link to reputation

**Severity:** Medium  
**Status:** Open

### Tension

Closure can be fulfilled, partially fulfilled, unfulfilled, revoked, expired, or reformulated. Reputation effects are role-based but not yet formulaic.

### Risk

Closure may become descriptive but not consequential.

### Proposed resolution

Each closure outcome should generate candidate reputation events by role.

Example:

```text
Closed fulfilled → positive executor event, fiscalizer completion event.
Closed partially fulfilled → mixed executor event, modeler/fiscalizer review depending cause.
Revoked for false evidence → negative executor/evidence producer event.
Expired before funding → no executor penalty unless misleading design.
```

### Decision needed

Define whether v0 uses qualitative reputation events first, rather than numeric scores.

---

## C019 — Core v0 includes meta-governance conceptually, but not operationally

**Severity:** Medium  
**Status:** Open

### Tension

The classification matrix keeps meta-governance as Core v0 conceptual/paper layer but not necessarily MVP implementation.

### Risk

The model may rely on protocol evolution without explaining who can change protocol rules.

### Proposed resolution

For v0 paper:

```text
Meta-governance must be described as protocol-change path.
Full administrative implementation can remain future work.
```

### Decision needed

Define minimum v0 meta-governance diagram: proposal, review, sandbox, approval, implementation, rollback.

---

## C020 — Operating modes may become permanent discretionary control

**Severity:** High  
**Status:** Open

### Tension

Tutored and semi-open modes help transition. But they can also preserve old gatekeeping.

### Risk

The distributed system becomes a front-end for centralized institutional approval.

### Proposed resolution

Operating modes must have:

- public reason;
- scope;
- start date;
- review date;
- mode-change history;
- aggregate reporting;
- criteria for moving toward more openness.

### Decision needed

Should v0 require every tutored mode to have an explicit review date or maturity condition?

---

## C021 — Universal observability panel classified as extension, but basic observability is core

**Severity:** Low  
**Status:** Partially resolved

### Tension

The classification matrix places the full universal observability panel as extension with a core baseline.

### Risk

Readers may be confused about which metrics are core.

### Proposed resolution

Separate:

```text
Core audit metrics: required in v0.
Universal institutional observability panel: extension v1+.
```

### Decision needed

Create a minimal v0 observability list.

---

## C022 — Common-good governance is extension, but projects may affect common goods

**Severity:** Medium  
**Status:** Open

### Tension

Common-good governance charters are classified as extension. But v0 projects may affect rivers, parks, plazas, schools, cultural assets, or shared infrastructure.

### Risk

v0 may ignore conflicts with common goods.

### Proposed resolution

Core v0 should not include full common-good charter governance, but should require projects to declare common-good impact where relevant.

This can be handled through risks, antivalues, affected parties, and required evidence.

### Decision needed

Add `common-good impact declaration` to Core v0 project fields, or defer entirely?

---

## C023 — Delegation concentration is visible, but no default cap exists

**Severity:** Medium  
**Status:** Open

### Tension

The model makes delegation concentration transparent but avoids hard caps by default.

### Risk

A few delegates may accumulate large influence.

### Proposed resolution

v0 should at least show concentration warnings:

```text
This delegate controls X allocation / Y citizens / Z projects in this scope.
```

No hard cap is required unless the pilot protocol defines one.

### Decision needed

Should v0 include soft warnings only, or configurable concentration caps?

---

## C024 — No anonymous actors vs beneficiary privacy

**Severity:** Medium  
**Status:** Open

### Tension

The model requires verified identity and no anonymous actors. But beneficiaries, especially minors or vulnerable groups, may require privacy.

### Risk

The system may expose beneficiaries or exclude sensitive projects.

### Proposed resolution

Separate:

```text
Verified to system
Visible to public
Visible to fiscalizer
Visible only as aggregate
```

Actors with responsibility should be verified. Beneficiaries can be privacy-protected while still confirmable.

### Decision needed

Define identity visibility classes for beneficiaries vs responsible actors.

---

## C025 — Project discovery may bias allocation

**Severity:** Medium  
**Status:** Open

### Tension

Layer 0 includes urgent projects and discovery categories. Visibility can influence funding.

### Risk

The interface itself becomes a hidden allocator.

### Proposed resolution

Layer 0 visibility must be rule-based and explainable:

- urgent slots limited;
- reason displayed;
- rotation visible;
- no paid promotion;
- no opaque manual boosting.

### Decision needed

Define the v0 ranking/visibility rule for discovery lists.

---

# B. Checklist by system area

## 1. Actor and role checklist

- [ ] Can every role be traced to an actor?
- [ ] Does every responsibility-heavy role require acceptance?
- [ ] Are role conflicts declared?
- [ ] Can an actor hold conflicting roles in the same project?
- [ ] Are institutional actors treated equally or privileged?
- [ ] Can a public institution moderate competitors?
- [ ] Does role-based reputation match actual responsibility?

## 2. Project object checklist

- [ ] Does every project have a responsible executor before execution funding?
- [ ] Are draft, public design, and open financeable project clearly separated?
- [ ] Does every project have value thesis, beneficiaries, metrics, evidence, fiscalization, risks, and antivalues?
- [ ] Are project versions immutable?
- [ ] Are reformulations visible?
- [ ] Can project history be reconstructed from audit events?

## 3. Value and metrics checklist

- [ ] Is every value icon linked to metrics?
- [ ] Is every metric linked to evidence?
- [ ] Are qualitative value claims handled?
- [ ] Are input-only metrics rejected when insufficient?
- [ ] Are antivalues declared?
- [ ] Can projects game easy metrics?
- [ ] Is there a mechanism to challenge weak metrics?

## 4. Funding checklist

- [ ] Is funding clearly a conditional commitment?
- [ ] Is money prevented from going directly to executor before conditions?
- [ ] Are withdrawal and lock rules state-specific?
- [ ] Are delegated and automatic allocations distinguishable?
- [ ] Are unused funds handled clearly?
- [ ] Are funders notified of material changes?

## 5. Disbursement checklist

- [ ] Does every disbursement have a milestone?
- [ ] Does every disbursement have evidence?
- [ ] Does every disbursement have fiscalizer review?
- [ ] Are blocking issues checked before release?
- [ ] Are partial releases governed by pre-defined rules?
- [ ] Are retained funds visible?
- [ ] Is every release auditable?

## 6. Evidence checklist

- [ ] Is evidence classified by source and interest?
- [ ] Is evidence privacy classified?
- [ ] Is contradictory evidence allowed?
- [ ] Are independent evidence requirements defined for risky projects?
- [ ] Is false evidence penalized by role?
- [ ] Can citizens understand evidence status without reading raw files?

## 7. Fiscalization checklist

- [ ] Who selects fiscalizers?
- [ ] Can the executor influence fiscalizer selection?
- [ ] Are conflicts of interest declared?
- [ ] Is fiscalization cost separated from execution budget?
- [ ] Can fiscalizers resign or be replaced?
- [ ] Are fiscalizer reports public or privacy-filtered?
- [ ] Does fiscalizer reputation update after closure?

## 8. Complaint checklist

- [ ] Can a complaint be filed easily?
- [ ] Is the difference between comment and complaint clear?
- [ ] Are blocking criteria explicit?
- [ ] Can complaints be scoped to a milestone, budget line, evidence item, or actor?
- [ ] Are weak or abusive complaints handled without discouraging good-faith complaints?
- [ ] Does every complaint have a visible status?

## 9. Delegation checklist

- [ ] Is delegation scoped?
- [ ] Does delegate acceptance occur before activation?
- [ ] Can delegation be revoked for future actions?
- [ ] Are automatic allocation and delegation separate?
- [ ] Is concentration visible?
- [ ] Are delegate actions reported?
- [ ] Does delegate reputation reflect delegated decisions?

## 10. Interface checklist

- [ ] Is the ordinary citizen view simple?
- [ ] Are signals clickable?
- [ ] Can technical detail be reached when needed?
- [ ] Is project discovery explainable?
- [ ] Are urgent/promoted-looking slots rule-based?
- [ ] Are citizen-facing states mapped from technical states?

## 11. Transition checklist

- [ ] Is operating mode visible?
- [ ] Is tutored mode justified?
- [ ] Is there a review date or maturity condition?
- [ ] Can institutional moderation be audited?
- [ ] Can institutions participate without privilege?
- [ ] Is transition scope bounded?

## 12. Audit checklist

- [ ] Is every major state change an audit event?
- [ ] Does the audit event name actor, role, object, previous state, new state, and rule?
- [ ] Are private details protected without hiding existence of evidence?
- [ ] Can project history be reconstructed?
- [ ] Are AI-assisted decisions recorded when material?

# C. Current highest-priority unresolved issues

The following should be resolved first because they affect Core v0 coherence:

```text
1. C001 — Public design vs open financeable project.
2. C002 — Fiscalizer selection rule.
3. C004 — Blocking complaint criteria.
4. C005 — Funding withdrawal/lock/reformulation rules.
5. C007 — Public institution as actor vs tutored moderator.
6. C010 — Metric distortion and qualitative evidence.
7. C015 — Transparency vs privacy.
8. C016 — Partial disbursement criteria.
9. C020 — Operating modes becoming permanent gatekeeping.
10. C025 — Discovery layer as hidden allocator.
```

## Proposed next working method

Resolve one issue at a time using this template:

```text
Issue:
Decision:
Rule added to v0:
Documents to update:
Remaining risk:
```

## Suggested first issue to resolve

Start with **C001 — Public design vs open financeable project**, because it affects project creation, publication, funding, discovery, and lifecycle states.

## Design rule

> The checklist should not be treated as criticism from outside the model. It is part of the model's quality-control system.
