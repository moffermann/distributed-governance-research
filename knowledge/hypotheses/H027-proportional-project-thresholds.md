# H027 — Proportional Project Thresholds

## Hypothesis

Projects should define approval and execution thresholds according to their nature. Not every project should require the same combination of financing, social support, technical validation, legitimacy, or institutional control.

In Core v0, these thresholds should be represented as a visible `Threshold Policy` or policy reference connected to the project, public function, operating mode, and protocol rules. The platform should not impose one universal threshold formula for every project.

## Resolution alignment

This hypothesis is aligned with:

- `docs/12_OPEN_PROJECT_PARALLEL_CLOSURE_MODEL.md`;
- `docs/33_DISTRIBUTED_GOVERNANCE_SYSTEM_V0_BLUEPRINT.md`;
- `docs/34_CORE_V0_SCOPE_FREEZE.md`;
- `docs/35_CONSOLIDATED_ENTITY_OBJECT_STATE_MAP.md`;
- `docs/10_FISCALIZATION_EVIDENCE_AND_CONTROL_MODEL.md`;
- `docs/52_FISCALIZATION_OFFER_COST_AND_C013_RESOLUTION.md`;
- `knowledge/hypotheses/H035-funding-target-closure-rule.md`;
- `knowledge/hypotheses/H040-funding-deadline-and-reformulation-rule.md`;
- `knowledge/hypotheses/H057-public-function-funding-scope-gating.md`;
- `knowledge/hypotheses/H058-operating-modes-for-transition.md`.

H027 defines how applicable thresholds are selected and exposed. H035 defines budget-lane closure. C002 and C013 define control-package closure. H040 defines visible reformulation policy. H057 and H058 define operating-mode and tutored-scope effects where a public authority has configured review power.

H020 defines the procedural depth of those thresholds through a `Procedural Burden Profile`. The same Threshold Policy may therefore say both what conditions apply and how demanding those conditions are.

H011 defines the financial assurance boundary: guarantee requirements, eligible budget basis, and materialization conditions must be defined by the active policy, administrator, protocol, operating mode, or lawful country implementation rule, not by the proposer, designer, or executor.

## Rationale

Different projects fail in different ways.

A puppet show in an empty desert may be cheap but socially meaningless if nobody attends. A national defense satellite may be extremely expensive but require little direct popular participation if it is aligned with defense strategy and placed under the appropriate defense institution.

The system should therefore avoid both extremes:

- a single rigid approval formula for every project;
- hidden ad hoc thresholds that no citizen can inspect.

The right pattern is proportionality plus traceability. A project should show which conditions it must complete to become execution-ready, why those conditions apply, and which protocol, operating mode, or public-function rule selected them.

## Threshold Policy

A `Threshold Policy` should define the applicable requirements for a project or project type.

It may be attached to:

- a project;
- a public function;
- an operating mode;
- a project category;
- a risk class;
- a common-good impact class;
- a tutored-scope review rule;
- a country implementation rule.

The policy should record:

- threshold types that apply;
- procedural burden profile;
- financial assurance rule or Financial Assurance Profile reference;
- global guarantee percentage and eligible budget basis where H011 applies;
- source of authority or protocol reference;
- citizen-facing explanation;
- technical audit reference;
- whether each condition blocks publication, funding, execution-ready status, disbursement, or closure;
- whether the value is fixed, configurable, or country-specific.

The system may help classify the project, but algorithms should not become sovereign deciders. AI or rules may suggest the applicable threshold policy; accountable protocol, operating-mode, or authorized tutored governance defines the binding rule.

The project actor may describe facts that affect threshold selection, but may not self-select a lower threshold, burden profile, risk class, or guarantee requirement.

For Core v0, a global guarantee percentage is the preferred assurance baseline. Future differentiated assurance formulas may use objective parameters, but should be adopted only through visible administrative or protocol rules rather than proposer-selected categories.

## Threshold types

A project may require different thresholds:

- financial threshold;
- social support threshold;
- beneficiary threshold;
- technical threshold;
- legitimacy threshold;
- institutional-control threshold;
- affected-community threshold;
- fiscalization threshold.

Additional v0 threshold dimensions may include:

- control-package threshold;
- evidence threshold;
- financial assurance and guarantee materialization threshold;
- admissibility-review threshold;
- phase-gate threshold where applicable;
- disbursement milestone validation;
- common-good impact declaration;
- related-party safeguard threshold;
- tutored-scope review where an operating mode requires it;
- reformulation or deadline policy.

Not every threshold is an approval vote. Some are completion conditions, visibility requirements, review windows, fulfillment/control evidence requirements, or compatibility checks.

## Examples

### Small cultural project

May require:

- minimum funding;
- minimum expected beneficiaries or attendees;
- basic evidence of execution;
- low procedural burden.

Citizen-facing version:

```text
To become execution-ready:
Funding complete.
Minimum attendance commitment declared.
Basic evidence plan accepted.
No admitted blocking complaint or scoped systemic pause.
```

Procedural burden profile:

```text
Light.
The system checks completeness and basic coherence. No independent admissibility review unless a special risk appears.
```

### Macul sports facility

May require:

- execution funding;
- accepted design phase if design and construction are integrated;
- accepted executor responsibility;
- permits or venue documentation;
- independent control package;
- beneficiary or affected-party visibility;
- related-party declaration if a local sports club will also use the facility;
- tutored duplication or scope review if the sports function is operating under a ministry-controlled tutored mode.

Citizen-facing version:

```text
To become execution-ready:
Funding: complete.
Design phase: accepted, if applicable.
Fiscalization: one primary fiscalizer required.
Documents: municipal permit pending.
Tutored review: no duplicate public project detected / pending authority resolution.
```

Procedural burden profile:

```text
Reinforced.
The system or AI may require land-use documents, public-access commitments, construction milestones, and control-package definition. If the sports function is in tutored mode, the competent authority reviews duplication or scope. If not tutored, an independent admissibility reviewer or certifier may be required by policy.
```

If the project is `Design and Construction of Multi-court Facility in Macul`, the threshold policy should also define the design gate that blocks construction release until the design package satisfies the minimum public-value baseline.

### Strategic defense asset

May require:

- funding;
- compatibility with the defense roadmap;
- approval by the defense institution;
- central operational control;
- limited popular operational governance.

This does not mean the platform makes defense strategy by popularity. It means that if such a project is represented in the system at all, the threshold policy must expose that competent institutional control and strategic compatibility are required.

### Environmental project

May require:

- declared antivalue;
- fiscalization;
- affected-community visibility;
- mitigation and guarantees.

The affected-community threshold may require visibility, comment windows, evidence, mitigation, or complaint channels. It does not necessarily mean a universal veto unless the applicable legal or protocol rule says so.

Procedural burden profile:

```text
Reinforced or critical depending on impact.
The platform may require environmental or technical documents, but document acceptability belongs to the competent authority, independent reviewer, certifier, or protocol-defined review body where the active policy requires it.
```

## Requirement discovery and admissibility review

Threshold Policies may include required-document discovery and admissibility review.

The system and AI may help identify required documents, missing fields, possible project class, risk signals, and under-classification or over-classification concerns.

Binding validation should follow the active policy:

```text
Completeness:
  automatic or rule-based check that required fields and documents were submitted.

Acceptability:
  authority, independent reviewer, fiscalizer, certifier, or protocol-defined review body checks whether submitted documents are sufficient where the policy requires it.
```

In tutored mode, admissibility review may be performed by the competent authority and should produce a public governance decision or review trace under C020.

In non-tutored or open mode, paid project admissibility review may be modeled as a `Control Subproject: Project Admissibility Review` under C002/C013 rules.

## Core distinction

Funding, support, legitimacy, and control are different signals.

A project may be financially viable but socially weak. It may be popular but technically unworkable. It may be privately financed but require public control because it affects a common function.

Execution-ready status should mean that the applicable threshold policy has been satisfied, not merely that one funding number was reached.

## Citizen-facing simplicity

Ordinary citizens should not need to read the full threshold policy before participating.

The surface should show simple project-specific conditions:

```text
This project still needs:
Funding.
One fiscalizer.
Permit document.
No unresolved admitted blocking complaint or scoped systemic pause.
```

The deeper layers should show why those conditions apply:

```text
Threshold policy:
Medium public sports infrastructure.

Source:
Current protocol + tutored sports operating mode.

Reason:
Physical construction, public access, control cost, and possible duplication with existing public projects.
```

## No universal political thresholds

H027 should not be used to define universal thresholds for country adoption, budget migration, exit from tutored mode, institutional replacement, or constitutional legitimacy.

Those decisions remain country implementation or political decisions. The platform can expose evidence, completion conditions, audit traces, and operating-mode rules, but it does not decide that a country must open, close, expand, or abandon a public function.

## What the system must not do

H027 rejects:

- one universal approval formula for every project;
- hidden threshold changes after citizens have funded or followed a project;
- proposer-selected categories that reduce guarantee, fiscalization, evidence, or document obligations;
- treating funding as the only legitimacy signal;
- treating popularity as a substitute for technical feasibility or lawful authority;
- forcing heavy technical review on every small project;
- hiding tutored-mode review thresholds from citizens;
- allowing document requirements or admissibility review to become hidden discretionary gates;
- allowing AI to silently decide binding thresholds without protocol or accountable authority.

## Principle

> The thresholds required for a project should be proportional to the type of project and the function it affects.

> Thresholds should be simple at the citizen surface, explicit in the project record, and auditable in the technical layer.

> Proportional thresholds are policy-selected, not self-selected by the actor seeking funding.

## Status

Core project-classification and execution-readiness hypothesis. Aligned with the v0 parallel closure, control-package, operating-mode, financial assurance, and citizen-simplicity rules.
