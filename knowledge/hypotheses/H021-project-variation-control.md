# H021 — Project Variation Control

## Hypothesis

An executor may introduce project variations only through a transparent and proportionate change-control path. The executor remains accountable to the accepted base design unless the variation is formally classified, recorded, and approved where the active rules require approval.

## Resolution alignment

This hypothesis is now aligned with:

- `docs/55_VALUE_THESIS_REFORMULATION_AND_C017_RESOLUTION.md`;
- `knowledge/hypotheses/H040-funding-deadline-and-reformulation-rule.md`;
- `docs/32_PROJECT_REFORMULATION_PAUSE_REVOCATION_FLOW.md`.

H021 does not create a parallel reformulation regime.

C017 controls the value-thesis boundary: changes that preserve the value thesis and core metrics are operational changes; changes that reduce, alter, or replace them require a separate `Reformulation Proposal`.

H040 controls reformulation limits and timing: maximum reformulations, minimum period between reformulations, deadline-extension effects, approval authority, and exhaustion consequences are policy-configurable. Core v0 requires the active policy to be visible and enforced; it does not impose one universal value.

## Rationale

A project is funded based on a declared design, value thesis, core metrics, evidential contract, risks, budget, expected results, and accepted responsible actors.

If an executor can alter the project unilaterally, the original civic approval loses meaning.

If every small correction requires a heavy public procedure, the system becomes bureaucratic and hard to use.

The purpose of H021 is therefore classification:

```text
minor correction
operational variation
material value reformulation
substitutive reformulation
```

## Base rule

The executor is evaluated against:

- the accepted base design;
- accepted phase deliverables where applicable;
- formally approved variations;
- the active Project Evidential Contract;
- declared value thesis and core metrics;
- milestone and disbursement rules;
- fiscalization requirements;
- risk, antivalue, and related-party commitments.

Unapproved changes do not erase the original responsibility.

## Variation classes

### 1. Minor variation or correction

A minor variation fixes or clarifies something without changing the value thesis, core metrics, beneficiaries, material budget, risk profile, evidential contract, disbursement rules, or fiscalization requirement.

Examples:

```text
correcting a typo in an address;
uploading a missing attendance sheet;
clarifying a milestone date that was already implied;
adding context to an evidence item without weakening the evidence requirement.
```

Treatment:

- record the correction;
- preserve the previous value where relevant;
- notify only affected actors where needed;
- avoid creating a new substantive project version unless the active policy requires it.

### 2. Operational variation / operational reformulation

An operational variation changes implementation while preserving the value thesis and core metrics.

Examples:

```text
same sports workshops, different schedule;
same accessible sports field, bathrooms moved within the same facility with equivalent access;
same beneficiary count and value promise, different supplier;
same deliverable, revised milestone order.
```

Treatment:

- apply the active Reformulation Policy where it governs operational changes;
- create or link the appropriate project version where meaningful;
- record change summary and reason;
- compare original and proposed value thesis and core metrics;
- revalidate if milestones, evidential contract, disbursement, budget, fiscalization, risk, or antivalue declarations change;
- notify affected actors where appropriate.

Operational variation should not require heavy community approval by default, but the active policy may define who approves it.

### 3. Material value reformulation

A material value reformulation reduces, alters, or replaces the value thesis, core metrics, beneficiary scope, promised result, or public utility that funders and beneficiaries relied on.

Examples:

```text
80 children served -> 60 children served;
10 workshops -> 5 workshops;
sports field plus bathrooms -> sports field only;
monthly beneficiary confirmations -> executor photos only;
permanent infrastructure -> temporary activity.
```

Treatment:

- create a separate `Reformulation Proposal`;
- preserve the original project version and promise;
- show beneficiary, budget, milestone, evidence, fiscalization, and funding effects;
- follow C017 approval rules and the active Reformulation Policy;
- if rejected or expired, the project cannot silently redefine itself and must fail, close, or be revoked under original terms.

### 4. Substitutive reformulation

A substitutive reformulation is effectively a different project.

Examples:

```text
community sports infrastructure -> temporary sports events;
health clinic equipment -> public information campaign;
water access improvement -> unrelated community meeting.
```

Treatment:

- generally create a new project proposal; or
- close, fail, or revoke the original project under its original terms before a new proposal proceeds.

The original project should not be converted into another project merely because the substitute also has some value.

## Variation classification test

Before accepting a change, the system or reviewer should ask:

```text
1. Does the change preserve the value thesis?
2. Does it preserve core metrics and beneficiary scope?
3. Does it affect budget, milestones, disbursement, fiscalization, evidence, risk, antivalues, or related-party safeguards?
4. Does it affect any phase gate or prerequisite phase baseline?
5. Does it weaken how fulfillment will be proven?
6. Does the active Reformulation Policy require approval, spacing, maximum count, notification, or deadline effects?
7. Is this still the same project?
```

If the answer to 1 or 2 is no, the change is not an ordinary operational variation.

If the answer to 7 is no, the proposal should become a new project or trigger failure/closure of the original.

## Examples from current v0 use cases

### Macul multi-court project

```text
Original promise:
Build public multi-courts in Macul at location X, with defined access rules and sports-use metrics.
```

Minor correction:

```text
Fixing the street-number format in the project description.
```

Operational variation:

```text
Moving the bathrooms 30 meters inside the same facility while preserving equivalent access.
```

Material value reformulation:

```text
Reducing the promised public access hours or removing the accessible bathroom commitment.
```

Design-phase failure:

```text
The design package submitted for a design-and-construction project omits required bathrooms, changes court dimensions materially, or weakens public-access rules. Construction cannot become execution-ready until the issue is corrected or processed as material reformulation.
```

Substitutive reformulation:

```text
Replacing the multi-court project with temporary sports workshops.
```

### Sports school project

```text
Original promise:
Serve 80 children through weekly sports workshops with monthly attendance records and beneficiary confirmation.
```

Operational variation:

```text
Changing the weekly schedule while preserving 80 children, workshop count, and evidence obligations.
```

Material value reformulation:

```text
Changing the target from 80 children to 60 children after funding because the venue is smaller.
```

Evidence-weakening reformulation:

```text
Replacing attendance records and beneficiary confirmation with executor photos only.
```

## Evaluation rule

Fiscalizers evaluate execution against:

- the accepted base design;
- the current approved project version;
- approved variation records;
- the Project Evidential Contract version active for the evaluated milestone;
- the C017 value-thesis boundary;
- the active Reformulation Policy.

Unapproved deviations remain deviations.

## Citizen simplicity rule

Ordinary citizens should not have to understand all variation categories by default.

Citizen-facing views should show simple labels:

```text
Minor correction
Operational change
Value change proposal
New project required
```

Layer 5 should preserve the full classification, approval path, policy reference, actor responsibility, and audit trace.

## Principle

> A project is not approved as a general intention. It is approved as a specific version with defined value, evidence, budget, and responsibility commitments.

## Status

Aligned Core v0 project execution-control hypothesis.

H021 now functions as the project variation classification layer under C017 and H040. It should not override the C017 rule for material value reformulation or the H040 rule that reformulation limits and timing are configured by the active policy.
