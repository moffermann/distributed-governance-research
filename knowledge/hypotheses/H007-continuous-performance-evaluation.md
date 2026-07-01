# H007 - Continuous Performance Visibility

## Hypothesis

Distributed resource allocation should rely not only on future project promises, but also on historical, reviewed, role-comparable performance.

## Rationale

If citizens or contributors allocate resources directly, they need fast access to past outcomes. Without performance visibility, allocation may be driven by rhetoric, emotional appeal, or incomplete information.

However, Core v0 should not create a long custom historical record for every value ever declared by every project. That would make the system hard to use, hard to compare, and easy to manipulate through value-label inflation.

The relevant unit for ordinary comparison is the actor's role performance:

- executor performance compared with other executors;
- modeler or designer performance compared with other modelers or designers;
- fiscalizer performance compared with other fiscalizers;
- evidence producer performance compared with other evidence producers;
- complainant or discoverer signal quality where the protocol recognizes those roles.

Specific value floors, antivalue ceilings, metrics, evidence items, and closure records remain auditable in detail, but the first citizen-facing history should summarize them through generic role-comparable categories.

## Core v0 mechanism

Core v0 should include a lightweight `Performance History Surface`.

This is not a new source of formal judgment. It is a citizen-facing navigation layer or read model derived from reviewed records, especially:

- Project Closure Accountability Records;
- EvaluationRecords;
- FiscalizationReports;
- Reputation Inputs, Updates, and Summaries;
- Responsibility Events;
- financial closure records, retentions, returned funds, recovered funds, or guarantee execution;
- final or procedurally classified complaint outcomes;
- reviewed fulfillment/control evidence sufficiency patterns;
- verified discovery records where applicable.

The surface should make past performance visible before a citizen funds, supports, delegates, selects, or reviews a new project.

## Role-comparable categories

The dashboard should compare actors through generic categories by role, not through an unbounded list of project-specific value histories.

Examples:

### Executor

- completed, partially fulfilled, unfulfilled, revoked, expired, or reformulated projects;
- milestone completion reliability;
- value-floor fulfillment category;
- antivalue-ceiling compliance category;
- evidence sufficiency pattern;
- budget release, retention, return, recovery, or guarantee execution history;
- correction and mitigation responsiveness;
- severe responsibility events.

### Modeler / Designer

- accepted design deliverables;
- design rework frequency;
- phase-gate approval record;
- material design omissions found after review;
- execution failures traced to design responsibility.

### Fiscalizer

- review timeliness;
- review completeness;
- weak-evidence correction record;
- findings later confirmed, corrected, contradicted, or overturned;
- independence or conflict findings.

### Evidence Producer

- accepted evidence rate;
- insufficient evidence rate;
- corroboration usefulness;
- metadata completeness;
- material corrections after review;
- responsibility events for false, invented, manipulated, or materially misleading evidence.

### Complainant / Discoverer

- admissible complaint ratio where applicable;
- founded or materially useful complaint outcomes where applicable;
- repeated abusive, false, or unsupported filings only after review;
- verified discoveries that corrected material project information.

## Comparison rule

Performance comparison should be constrained by meaningful context:

- same role;
- similar public function or domain where available;
- comparable project size or procedural burden where available;
- comparable risk, irreversibility, regulated status, or operating mode where relevant;
- visible data sufficiency and confidence limits.

Core v0 should not claim that a school-supply executor, an adult-care provider, and a sports-infrastructure executor can be ranked through one universal performance number.

## Boundary with other hypotheses

H008 closes one project through the Distributed Accountability Loop and the Project Closure Accountability Record.

H007 uses those closure records to make future allocation better informed.

H014 defines the formal role-based reputation chain:

```text
Reputation Signal -> Reputation Input -> Reputation Update -> Reputation Summary
```

H007 may display Reputation Summaries, but it should not bypass that chain or convert raw opinion into formal performance.

H015 defines which evaluations can create formal effects. H007 should only aggregate reviewed results and clearly label soft, experiential, unresolved, or procedural signals.

H059 public value return per peso remains Extension v2/v3. H007 must not become a universal public-value-per-currency ranking or automatic allocation rule.

## Citizen-facing rule

The first citizen-facing layer should stay simple:

```text
Actor in this role:
Completed projects: 12
Partial / unfulfilled: 2
Evidence sufficiency: usually sufficient
Serious responsibility events: 1
Recent trend: improving
[See details]
```

The detail layer may open the underlying projects, closure records, EvaluationRecords, fiscalization reports, evidence sufficiency findings, and complaint outcomes.

## Examples

### Macul multi-courts

If a company proposes "Design and Construction of multi-courts in Macul", citizens should not see a separate lifetime history for every prior value label such as sport, childhood, health, neighborhood use, lighting, bathrooms, or accessibility.

They should see generic role history:

- as designer: accepted design deliverables, design omissions, phase-gate approvals, rework;
- as executor: completed works, milestone reliability, budget closure, value-floor fulfillment category, antivalue compliance category, guarantee or retention history;
- as evidence producer only if it also played that role: evidence sufficiency and correction history.

If missing bathrooms came from an accepted but defective design, the designer role should absorb the reviewed responsibility. If execution ignored an approved design, the executor role should absorb it. If the fiscalizer accepted dark photos without metadata as proof, the fiscalizer or evidence producer history may reflect that after review.

### Adult-care provider

An adult-care provider should be compared against other adult-care executors through generic service-delivery categories:

- completed care periods;
- continuity failures;
- beneficiary or family experiential signals;
- reviewed fulfillment evidence sufficiency;
- founded complaint outcomes;
- severe responsibility events.

It should not be reduced to a five-star popularity score or compared through the same indicators used for infrastructure works.

## Anti-gaming rules

- A project should not improve actor history merely by declaring many easy values.
- A project should not escape comparison by inventing highly specific value labels.
- Raw complaints, popularity, suspicion, unreviewed evidence, AI anomaly flags, or proximity to a failed project should not directly become historical performance.
- Performance history should disclose insufficient data rather than pretending to be certain.
- The dashboard may inform discovery or citizen choice, but it should not automatically allocate resources or silently rank actors.

## Status

Aligned Core v0 hypothesis.
