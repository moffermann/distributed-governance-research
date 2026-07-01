# H013 - Pause, Mitigation, and Revocation Governance

## Hypothesis

Distributed project governance should not treat project conflict as a binary choice between continuation and cancellation. It should provide a graduated process: scoped systemic pause, correction, mitigation, verification, continuation, restriction, final resolution, or revocation.

## Rationale

Projects may generate value and antivalue simultaneously. A factory may provide employment while harming nearby residents. A highway may improve connectivity while creating noise. A public program may benefit one group while imposing costs on another.

Current centralized systems often resolve these conflicts through political discretion, administrative decisions, courts, regulators, or pressure. A distributed architecture should make the conflict visible and create structured paths for mitigation without confusing platform control with legal authority.

## Alignment with complaint governance

H024 and C004 define the ordinary complaint path:

```text
verified complaint
-> minimum structure
-> fiscalizer or competent reviewer quote
-> support window
-> conditional review funding
-> admissibility review
-> admitted, rejected, escalated, referred, corrected, mitigated, or resolved
```

H013 governs what happens when a complaint, fiscalization finding, undeclared antivalue, serious contradiction, safety issue, or external authority decision justifies project control.

## Core distinction

```text
Complaint filed != complaint admitted != systemic pause != material/legal suspension != final resolution
```

A complaint can become serious enough to affect the project inside the system before a court or competent authority has issued a final order. That effect must remain scoped, visible, reversible where appropriate, and separate from final legal or reputational consequences.

## Core flow

```text
issue detected
-> complaint, fiscalization finding, authority notice, or other review trigger
-> complaint evidence / fulfillment evidence / control evidence / authority record collected
-> competent reviewer or fiscalizer evaluates admissibility and affected scope
-> Complaint Admissibility / Referral Record is created where applicable
-> scoped systemic pause, correction, mitigation, or non-blocking observation is applied
-> executor and affected actors respond
-> mitigation, correction, redesign, compensation, or referral proceeds
-> independent verification or competent authority review occurs where required
-> pause is lifted, maintained, narrowed, escalated, or converted into final resolution
-> final closure, revocation, recovery, compensation, or reputation input occurs only after reviewed basis
```

## Systemic pause rule

A systemic pause is an internal platform/protocol effect. It may temporarily block:

- release of funds;
- new execution funding for the affected scope;
- advancement to an affected milestone;
- phase gate acceptance;
- closure;
- use of a disputed evidence item;
- action by a conflicted actor;
- continuation under an unresolved legal or safety condition.

The pause must define its affected scope:

- whole project;
- phase;
- milestone;
- disbursement;
- budget line;
- contextualized evidence item;
- actor relationship;
- legal or safety condition.

Rule:

> Pause is temporary control, not silent cancellation and not automatic physical enforcement.

## Funding boundary

A systemic pause may stop new execution funding or disbursement for the affected scope, but it should not automatically stop:

- complaint review funding;
- control funding;
- mitigation funding;
- correction funding;
- authority-referral preparation;
- unaffected phases or milestones where separable.

This prevents the project from advancing on a contested basis while still allowing the system to fund the work needed to verify, correct, or mitigate the issue.

## Material or legal suspension

Material or legal suspension is an external-world effect such as physical construction halt, permit suspension, operational prohibition, legal sanction, or suspension of a legal right.

For legally regulated projects, the platform or fiscalizer should not create that effect by itself. It requires:

- court order;
- regulator order;
- competent authority resolution;
- enforceable legal rule;
- enforceable contract or protocol obligation accepted by the relevant actor.

The fiscalizer may request material measures in a referral package, but the final legal authority remains external where law requires it.

## Complaint admissibility / referral record

When a complaint has passed the configured support, quote, funding, and minimum evidence requirements, the competent reviewer or fiscalizer may create a `Complaint Admissibility / Referral Record`.

This record should identify:

- complaint reference;
- reviewer or fiscalizer;
- admissibility result;
- affected scope;
- blocking or non-blocking classification;
- systemic pause effects, if any;
- funding, disbursement, milestone, or phase effects;
- complaint evidence index;
- actor responses considered;
- referral package reference, if sent to a court, regulator, or competent authority;
- requested material or legal measure, if any;
- rule for lifting or maintaining the systemic pause;
- reputation status.

Rule:

> Admissibility can justify scoped system effects. It does not prove final responsibility by itself.

## Mitigation and correction

Mitigation can be a normal project, a control subproject, a correction task, a guarantee-funded action, a redesign package, a compensation measure, or another protocol-defined corrective path.

Mitigation should define:

- affected antivalue, risk, defect, or non-compliance;
- responsible actor where known;
- funding source;
- deliverables;
- fulfillment or control evidence;
- fiscalizer or reviewer;
- verification condition for lifting the pause or closing the issue.

Mitigation can be financed by the responsible executor, affected community, beneficiaries, society, insurers, guarantee funds, retained funds, or other actors that value preserving the original project.

## Revocation

Revocation is stronger than pause. It should be based on a final or sufficiently reviewed decision that the project should no longer continue under its existing authorization.

Revocation may follow:

- confirmed fraud;
- false beneficiaries;
- manipulated fulfillment or complaint evidence;
- severe non-compliance;
- misuse of funds;
- relevant hidden relationship;
- impossible execution;
- repeated failed milestones;
- severe unmitigated risk;
- court, regulator, or competent authority decision;
- executor abandonment or refusal to correct when classified as breach.

Revocation should define treatment of unreleased funds, released funds, retentions, guarantees, recovery, compensation, closure category, appeal/review path, and role-specific reputation consequences where applicable.

## Reputation boundary

Fiscalizer admissibility, referral to authority, or a pending systemic pause is a procedural signal. It may be visible in the project's public history, but it should not directly become a formal negative reputation update.

Formal reputation effects should arise only from:

- final resolution;
- founded complaint outcome;
- confirmed non-compliance;
- role-specific Responsibility Event;
- verified correction or violation;
- external order or competent authority decision that establishes responsibility;
- abandonment, refusal to correct, or breach under applicable rules.

An interim court or authority order may create an external ordered suspension and a system status, but it should still be classified as pending unless it establishes responsibility.

## Macul example

A proponent presents `Design and Construction of Multi-court Facility in Macul`.

Citizens fund the parent project, including reserved construction funding, but later denounce that the design shows incomplete courts, no bathrooms where required, or incorrect dimensions.

If the complaint reaches support, quote, review-funding, and admissibility requirements:

- the fiscalizer creates a Complaint Admissibility / Referral Record;
- the platform may system-pause the construction phase, affected milestone, or related disbursement;
- new execution funding for that affected scope may stop;
- unreleased construction funds remain reserved or retained;
- complaint review, control, mitigation, correction, or authority-referral funding may continue;
- no final negative reputation update is created yet.

Physical construction stops only if a court, regulator, competent authority, or enforceable accepted obligation requires it.

If a final review or authority decision confirms that the design was materially defective, the system may create role-specific Reputation Inputs or Responsibility Events for the responsible designer, executor, fiscalizer, or other actor according to the obligation breached.

## Important distinction

The executor of the original project may propose, finance, or execute additional mitigation or correction. But it should not control the fiscalizer, reviewer, authority referral, or validation process that determines whether the pause is lifted, narrowed, escalated, or converted into final resolution.

## Principle

> Conflicts should not be resolved only by closure or continuation. They should first create visible opportunities for scoped pause, mitigation, correction, compensation, redesign, review, and final resolution where necessary.

## Status

Core governance hypothesis for project-level conflicts. Aligned with H014, H024, C004, and the systemic-pause/material-suspension distinction.
