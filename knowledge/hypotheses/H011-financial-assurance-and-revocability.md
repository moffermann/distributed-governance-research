# H011 - Financial Assurance and Project Revocability

## Hypothesis

Every execution-financeable project should have a visible `Financial Assurance Profile` before it can become execution-ready or receive disbursement.

Financial assurance is not construction-specific. It applies to any project that receives public-value execution funding: elderly care, school-supply purchases, workshops, food delivery, sports programs, infrastructure, health support, culture, training, environmental mitigation, or any other social project.

Transparency, reputation, and fiscalization reduce risk, but they are not enough. A project also needs predeclared financial protection, external custody or guarantee confirmation, controlled disbursement, and explicit failure treatment.

## Resolution alignment

H011 is the umbrella financial-risk rule. It should be read with:

- H020, which defines proportional procedural burden;
- H027, which defines visible Threshold Policies;
- H036, which defines milestone-based disbursement, retentions, and guarantee execution;
- H037, which defines the custody and financial-order boundary;
- H013, which distinguishes pause, material/legal suspension, and revocation;
- H012, which connects value floors and antivalue ceilings to consequences;
- C005, which establishes that funding is a commitment, not ordinary withdrawal;
- C016, which validates disbursement milestones before financeable publication;
- C017/H021, which govern reformulation and variation control;
- C019/H017, which govern material changes to guarantee requirements.

H011 should not duplicate those mechanisms. It defines the minimum assurance profile that must exist so those mechanisms can operate coherently.

## Core v0 rule

Core v0 uses a simple baseline:

```text
required_guarantee_amount =
eligible_execution_budget_or_phase_budget * global_guarantee_percentage
```

The `global_guarantee_percentage` is configured by the administrator, active protocol, operating mode, or lawful country implementation rule.

The proposer, designer, or executor must not choose the guarantee percentage, project risk category, procedural burden profile, or guarantee requirement that applies to its own project.

The proposer may describe project facts:

```text
budget
location
beneficiaries
service duration
delivery model
advance payment needs
vulnerable participants
related-party relationships
antivalue ceilings
required documents
phase structure
```

But the binding assurance requirement comes from the active policy, not from the project actor's preferred classification.

## Anti-self-classification rule

Core v0 should not rely on proposer-selected categories such as:

```text
small
medium
large
low risk
high risk
simple service
minor purchase
```

when those categories reduce required assurance, fiscalization, documents, evidence, or guarantees.

If later versions use differentiated guarantee percentages, the categories should be derived from objective parameters and policy rules, not from self-declaration.

Possible future parameters:

- execution budget;
- advance-payment percentage;
- duration;
- reversibility;
- difficulty of verification;
- vulnerable beneficiaries;
- affected parties;
- territorial or common-good impact;
- regulated activity;
- related-party relationship;
- history of executor performance;
- declared antivalue ceilings;
- phase-gate dependency;
- need for external permits or professional certification.

For v0, the preferred rule is simpler: use a global guarantee percentage and keep differentiated assurance formulas as later protocol or country implementation work.

## Financial Assurance Profile

The `Financial Assurance Profile` records how the project is financially protected if execution fails, value floors are not reached, antivalue ceilings are exceeded, funds are misused, the executor abandons the project, or the project must be corrected, mitigated, revoked, closed, returned, reassigned, or recovered.

Minimum fields:

```text
profile id
project id
phase id, if applicable
policy reference
protocol version
eligible budget basis
global guarantee percentage applied
required guarantee amount
retention rule
protected advance-payment rule, if any
financial instrument type
responsible actor
custodian or guarantor
materialization status
execution conditions
release conditions
failure treatment
citizen-facing summary
audit trail
```

The profile must be defined or referenced before financeable publication. It must be satisfied where required before the affected project or phase becomes execution-ready and before funds are released.

## Guarantee Requirement Policy

The guarantee requirement is external to the executor.

In tutored mode, an administrator or competent tutored authority may configure the global guarantee percentage as part of the active operating-mode or Threshold Policy.

In non-tutored or open modes, the active protocol or authorized rule-change mechanism defines the requirement.

Any material change to guarantee percentage, eligible budget basis, transition rule, affected project states, or effective date should be handled as an Administrative Rule Change or Protocol Change Proposal under H017/C019.

Rule:

> The executor may satisfy a guarantee requirement, but cannot define the guarantee requirement that applies to itself.

## Guarantee Materialization Record

A guarantee is not materialized because the executor uploads a document.

A guarantee is materialized only when a lawful custodian, guarantor, insurer, treasury, escrow provider, bank, or equivalent country-specific mechanism confirms that the required deposit or instrument exists.

Minimum fields:

```text
record id
project id
phase id, if applicable
Financial Assurance Profile reference
responsible actor
required guarantee percentage
eligible budget basis
required guarantee amount
instrument type: cash deposit, bond, insurance, escrow, retention, or equivalent
custodian or guarantor id
custodian confirmation reference
amount confirmed
validity period
execution conditions
release conditions
status: pending, materialized, insufficient, expired, executed, released
timestamp
audit reference
```

The platform records the confirmation and audit reference. The external custodian or guarantor holds, validates, or executes the financial instrument according to the applicable law and protocol-valid financial orders.

## Lifecycle rule

The project lifecycle should treat assurance as a condition, not as a promise.

```text
proposal
-> value thesis and Value-Antivalue Profile
-> Project Evidential Contract
-> disbursement milestone plan
-> Financial Assurance Profile
-> financeable publication if structural requirements are satisfied
-> funding commitments
-> guarantee materialization where required
-> execution-ready only after applicable assurance, control, phase, and threshold conditions are complete
-> milestone execution
-> fulfillment/control evidence
-> fiscalization
-> controlled release, retention, return, reassignment, recovery, guarantee execution, or closure
```

For phased projects, the assurance profile may apply by phase. A later execution phase may collect reserved funding while a prior phase is pending, but its funds cannot be released until the required phase gate, control package, and guarantee materialization conditions are satisfied.

## Failure treatment

If a project fails, is abandoned, is revoked, or cannot satisfy its accepted baseline:

- unreleased funds remain blocked;
- unused or retained funds may return or reassign according to citizen and protocol rules;
- guarantees, retentions, insurance, or recovery mechanisms may activate where allowed;
- released funds are classified as justified, disputed, or non-compliant;
- correction, mitigation, continuity replacement, compensation, or recovery may be funded from retained or guaranteed resources where the active rule allows;
- role-specific Responsibility Events and Reputation Inputs may be created only after reviewed basis.

The system should not promise full recovery of already released and spent funds.

## Examples

### Elderly care

Project:

```text
Weekly care visits for 20 dependent older adults during six months.
```

Possible failures:

- visits not performed;
- care workers not assigned;
- beneficiary records false;
- service abandoned after two months;
- vulnerable beneficiaries harmed by discontinuity.

Financial assurance may:

- block future releases;
- retain unpaid service-period funds;
- activate a guarantee for continuity replacement or compensation where the rule allows;
- classify released funds as justified, disputed, or non-compliant;
- create role-specific responsibility for the executor, modeler, fiscalizer, or evidence producer where reviewed.

### School supplies

Project:

```text
Purchase and deliver 500 school-supply kits.
```

Possible failures:

- kits not purchased;
- kits incomplete;
- related supplier hidden;
- delivery evidence false;
- beneficiary list manipulated.

Financial assurance may:

- require direct supplier payment, invoice path, retention, guarantee, or later receipt verification;
- block release for undelivered kits;
- use retained or guaranteed funds to complete delivery or recover value where possible.

### Social workshop

Project:

```text
Run 24 educational workshops for 120 residents.
```

Possible failures:

- sessions not held;
- attendance inflated;
- content materially different from the accepted value thesis;
- executor attempts to reformulate after failure.

Financial assurance may:

- release by verified service periods;
- retain funds for missing sessions;
- block retrospective success through reformulation;
- activate recovery or reputation consequences after reviewed non-compliance.

### Infrastructure

Project:

```text
Design and Construction of Multi-court Facility in Macul.
```

Infrastructure is only one case, not the model's default.

Construction funds may be reserved while design is pending, but cannot be released until the design gate, control package, guarantee materialization, and disbursement rules are satisfied.

## Citizen-facing simplification

Citizens should not need to inspect the full profile by default.

Simple display:

```text
Financial protection:
Funds are released by verified milestones.
Required guarantee: materialized / pending.
Retention applies until closure.
Unused or recovered funds return or reassign by rule.
```

Detailed audit remains available in Layer 5.

## Remaining risks

- A global guarantee percentage may be too high for some small projects or too low for some complex projects.
- Administrators may configure the percentage poorly.
- Future parameter-based formulas may become gameable if not based on objective data.
- Some harms cannot be repaired financially.
- Recovery depends on legal enforceability and country-specific custody infrastructure.
- Excessive assurance requirements may discourage small social projects.

## Mitigations

- use a simple global v0 rule before differentiated formulas;
- keep guarantee requirements public and versioned;
- prevent proposer-selected risk categories from reducing assurance;
- require custodian or guarantor confirmation, not executor self-report;
- keep ordinary citizens' view simple;
- preserve full auditability;
- allow future objective parameter-based assurance policies only through visible protocol or administrative rule changes.

## Principle

> Financial assurance is universal across social projects, not a construction-only control. The executor may provide the guarantee, but the system, protocol, administrator, or lawful policy defines the requirement and the custodian confirms materialization.

## Status

Aligned Core v0 financial assurance hypothesis. H011 defines the Financial Assurance Profile, global v0 guarantee rule, anti-self-classification rule, and Guarantee Materialization Record. It is implemented through H020, H027, H036, H037, H013, C005, C016, C017, and H017/C019.
