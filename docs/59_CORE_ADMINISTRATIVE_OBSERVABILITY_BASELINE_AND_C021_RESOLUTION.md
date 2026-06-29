# Core Administrative Observability Baseline and C021 Resolution v0

## Purpose

This document resolves contradiction C021 from the v0 contradiction checklist.

C021 was originally framed as a possible confusion between the full universal observability panel and the metrics that are required in Core v0.

The accepted resolution clarifies that H055 was not designed as an ordinary citizen interface. It was designed as an institutional, administrative, and systemic observability panel for authorities, administrators, auditors, researchers, and other actors evaluating the platform and the transition process.

The v0 task is therefore not to shrink H055 into the citizen interface. The v0 task is to separate user-facing signals, a core administrative observability baseline, and the full universal institutional observability panel.

## Status

Accepted as the v0 resolution for C021.

## Core principle

> Ordinary users need simple signals. Administrators and authorities need a minimal operational baseline. The full universal institutional observability panel remains an advanced administrative and institutional extension.

## The corrected contradiction

Rejected framing:

```text
The universal observability panel is too large for ordinary citizens.
```

Accepted framing:

```text
The universal observability panel was not intended for ordinary citizens.
The real question is which observability functions are required in Core v0 and which belong to an advanced administrative/institutional panel.
```

## Three observability layers

The project should distinguish three layers.

## 1. User-facing observability

This is the ordinary interface signal layer for citizens and organizations using the system.

It should show simple, actionable, project-level signals.

Examples:

```text
project status
funding progress
fiscalization status
evidence status
active complaints
tutored review status
review timeout status
governance resolution available
action needed by the project owner
```

Example for a citizen viewing a sports project:

```text
Status:
Under tutored review.

Funding:
Not open yet.

Review deadline:
12 days remaining.

Governance resolution:
Pending.
```

Example for an organization that submitted the project:

```text
Tutored review:
Pending.

Missing requirements:
One eligibility document.

Timeout policy:
Escalation after 30 days.
```

This layer should not expose the full administrative panel by default.

## 2. Core administrative observability baseline

This is required in Core v0.

It is a minimal set of internal, platform-generated metrics and records needed to operate, audit, and evaluate v0.

It is intended for:

- administrators;
- authorities responsible for the implementation;
- auditors;
- fiscalizers;
- researchers;
- journalists;
- civil society monitors;
- highly engaged citizens.

It is not a political score. It does not decide whether the country should expand or reduce the system.

It provides observable facts that the country and society can interpret.

## 3. Universal institutional observability panel

This is the broader H055 panel.

It remains Extension v1+.

It may include broad institutional, systemic, comparative, transition, user-experience, concentration, common-good, emergency, and cross-function metrics.

The full panel is valuable, but it is not necessary to make Core v0 coherent.

## Core administrative baseline: minimal v0 list

Core v0 should include a minimal administrative baseline across these areas.

## A. Project lifecycle metrics

Minimum records:

```text
projects proposed
projects published
projects rejected before publication, where applicable
projects in funding
projects funded
projects execution-ready
projects in execution
projects paused
projects reformulated
projects revoked
projects closed
projects expired
```

Purpose:

```text
Show whether projects move through the system or get stuck.
```

## B. Funding and custody metrics

Minimum records:

```text
resources committed
resources funded
resources disbursed
resources retained
resources returned or reassigned
projects reaching funding target
projects failing funding deadline
```

Purpose:

```text
Show whether civic allocation becomes real execution or remains only intention.
```

## C. Milestone and execution metrics

Minimum records:

```text
milestones declared
milestones completed
milestones delayed
milestones rejected or observed
projects blocked before disbursement
partial execution cases
completion status
```

Purpose:

```text
Show whether funded projects actually execute their commitments.
```

## D. Evidence and KPI metrics

Minimum records:

```text
value thesis completion
KPIs declared
KPIs fulfilled
evidence submitted
evidence accepted
evidence rejected or observed
incomplete evidence cases
undeclared antivalue detected
```

Purpose:

```text
Show whether project promises are supported by evidence.
```

## E. Fiscalization and control metrics

Minimum records:

```text
active fiscalizers
projects with fiscalization assigned
projects without required fiscalization
fiscalization reports submitted
observations issued
observations resolved
fiscalization challenges
guarantees or retentions executed
```

Purpose:

```text
Show whether distributed control capacity exists and functions.
```

## F. Complaint, incident, and review metrics

Minimum records:

```text
complaints filed
complaints admitted
complaints rejected
complaints resolved
complaint resolution time
projects paused by complaint
projects corrected after complaint
malicious complaints confirmed, where applicable
```

Purpose:

```text
Show whether citizens can activate accountability without turning every disagreement into a blocker.
```

## G. Operating mode and governance-resolution metrics

C020 adds a required baseline for tutored governance.

Minimum records:

```text
public functions by operating mode
governance resolutions issued
projects approved under tutored review
projects rejected under tutored review
rejection reasons
review windows
review time
review timeouts
timeout policy used
community override triggers, if enabled
automatic approvals after timeout, if enabled
```

Purpose:

```text
Show whether tutored governance is operating transparently or becoming silent gatekeeping.
```

## H. Rule-change and protocol trace metrics

C019 adds a required baseline for governance of rule changes.

Minimum records:

```text
administrative rule changes
system implementation changes
protocol change proposals, where applicable
effective dates
adaptation periods
transition rules
rollback records
emergency changes
```

Purpose:

```text
Show whether the rules of the system change visibly and predictably.
```

## I. Basic concentration and capture indicators

Core v0 should include basic platform-generated concentration indicators when the underlying data exists.

Minimum records:

```text
funding concentration
executor concentration
fiscalizer concentration
delegation concentration
related-party project declarations
territorial concentration, where lawful and available
```

Purpose:

```text
Show whether distributed governance is becoming concentrated in practice.
```

These are indicators, not automatic judgments.

## J. Data export and audit access

Core v0 should support export or public inspection of the baseline records, subject to privacy and safety rules.

Minimum capabilities:

```text
project audit trail access
public metric summaries
exportable baseline reports
versioned snapshots
privacy-aware redaction
stable references for audit
```

Purpose:

```text
Allow external review without forcing every citizen to use a technical interface.
```

## Relationship with H055

H055 remains valid as a broader institutional observability hypothesis.

Its purpose is administrative and systemic evaluation, not ordinary user interaction.

The H055 panel may later expand the core baseline with:

- deeper adoption metrics;
- broad resource-allocation metrics;
- advanced execution metrics;
- full concentration and capture analysis;
- reputation distribution analytics;
- delegation analytics;
- user-experience metrics;
- transparency metrics;
- composite program metrics;
- common-good program metrics;
- urgency and emergency metrics;
- cross-domain transition metrics.

Those are valuable, but they are not all required for the first coherent v0.

## Relationship with the citizen interface

The citizen interface should remain simple.

Citizen-facing layers should expose signals and entry points, not an administrative dashboard.

Example:

```text
Citizen signal:
Fiscalizers: 0/1 required.

Administrative baseline:
Number of projects currently lacking required fiscalization by public function, territory, budget range, and operating mode.
```

Both are observability, but they serve different audiences.

## No single success score

Core v0 and H055 should both reject a single hidden success score.

Rejected pattern:

```text
System success: 87/100.
```

Accepted pattern:

```text
The platform shows multiple observable metrics.
Authorities, citizens, auditors, and researchers interpret them.
```

This preserves transparency and avoids hiding political judgments inside a number.

## C021 final resolution

C021 is resolved as follows:

```text
The full universal institutional observability panel is not an ordinary user interface and is not fully required in Core v0. Core v0 requires simple user-facing signals plus a minimal administrative observability baseline generated by the platform itself. The baseline must cover project lifecycle, funding, disbursement, milestones, evidence, fiscalization, complaints, operating-mode decisions, governance resolutions, timeouts, rule changes, and basic concentration indicators. The broader H055 panel remains an advanced administrative/institutional Extension v1+ for evaluating system performance, transition quality, and institutional outcomes.
```

Final rule:

> H055 is an institutional observability ambition. Core v0 only needs the observability baseline required to operate and audit the first coherent system.

## Documents that should eventually reflect this resolution

This resolution should inform future updates to:

- contradiction checklist;
- scope classification matrix;
- universal institutional observability panel hypothesis;
- technical audit trail layer;
- citizen project dashboard;
- compact project list layer;
- distributed governance system blueprint;
- consolidated entity/object/state map;
- future implementable schema.

## Remaining risks

- The core baseline may expand until it becomes the full H055 panel.
- Administrative dashboards may be mistaken for ordinary citizen interfaces.
- Metrics may be interpreted as policy thresholds even when the platform does not define thresholds.
- Concentration indicators may be treated as automatic proof of capture.
- Privacy constraints may limit public access to some baseline data.
- A single score may be reintroduced later for convenience.

## Mitigations

- keep user-facing observability separate from administrative observability;
- define a minimal baseline rather than importing all H055 metrics into Core v0;
- mark full H055 as Extension v1+;
- show multiple metrics rather than one aggregate score;
- include privacy-aware access and redaction rules;
- state clearly that the platform measures, while the country and society interpret;
- preserve raw auditability through Layer 5 and exportable records.

## Design rule

> Observability should make the system legible to each audience at the right depth: simple signals for users, baseline metrics for administration, and advanced institutional analysis as an extension.
