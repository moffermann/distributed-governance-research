# Beneficiary Privacy, Protected Identity, and C024 Resolution v0

## Purpose

This document resolves contradiction C024 from the v0 contradiction checklist.

C024 was originally framed as the tension between the project's no-anonymous-actors rule and the need to protect beneficiaries, minors, vulnerable groups, or exposed participants from unnecessary public exposure.

The final v0 resolution keeps verified identity as a constitutional rule, but separates identity verification from public visibility. It also clarifies that protected identity is an exception for specific sensitive actions or participation contexts, not a general anonymous layer.

## Status

Accepted as the v0 resolution for C024.

## Core principle

> No anonymous formal power. No unnecessary public exposure where exposure would harm participation, safety, or beneficiary privacy.

The system must know who is acting.

The public does not always need to know every person's full legal identity.

## The contradiction

The project requires verified actors because governance actions can allocate resources, affect reputations, trigger complaints, publish evidence, influence funding, or alter project accountability.

At the same time, some people connected to a project should not be publicly exposed:

- minors;
- vulnerable beneficiaries;
- dependent users;
- people receiving sensitive services;
- affected workers;
- complainants exposed to retaliation;
- family members of beneficiaries;
- people whose location or condition should not become public.

The contradiction is:

```text
The system cannot allow anonymous governance power,
but it must not expose vulnerable people merely because they participate in or benefit from a project.
```

## Resolution

C024 is resolved by distinguishing verified identity from public visibility.

Accepted v0 rules:

```text
1. Formal actors must be verified to the system.
2. Responsible project actors are generally public.
3. Beneficiaries may be verified privately, visible only to authorized reviewers, or represented publicly in aggregate.
4. Public comments are identifiable by default.
5. Protected identity may be requested for a specific sensitive action, including comments, complaints, testimony, evidence, beneficiary confirmations, or affected-party reports.
6. Protected identity does not create an anonymous layer or permanent anonymous user mode.
7. All public-facing submissions, including visible-identity and protected-identity submissions, remain subject to a narrow legal, safety, privacy, and platform-integrity gate.
8. The gate is not tone moderation and must not suppress political criticism or uncomfortable project criticism.
```

## Identity visibility classes

Core v0 should use visibility classes instead of treating identity as either fully public or fully anonymous.

### Public responsible identity

Required for actors who exercise responsibility or power in a project:

- project modelers;
- executors;
- fiscalizers;
- evidence producers where their role is public;
- administrators;
- institutional reviewers;
- delegates where delegation influence is public by protocol;
- legal representatives;
- organizations receiving funds.

These actors should not hide behind protected pseudonyms when exercising formal responsibility.

### Verified private identity

The system knows the actor's real identity, but the public display may be limited.

This may apply to:

- ordinary small funders where individual exposure is unnecessary;
- minor project participants;
- sensitive service users;
- ordinary beneficiaries who confirm participation.

### Protected beneficiary identity

Used when exposing a person's identity could create harm or deter participation.

Examples:

- children in a sports program;
- domestic violence support beneficiaries;
- medical or mental-health service beneficiaries;
- people receiving poverty assistance;
- students in sensitive educational programs.

Public visibility should normally show aggregate information, selection criteria, and verification status, not personal records.

### Fiscalizer-visible or auditor-visible identity

Some private identity data may be available to authorized reviewers when necessary to verify that a project is real, beneficiaries exist, and public resources are not being misused.

Access should be logged and constrained by role, purpose, and applicable law.

### Aggregate-only public visibility

The public sees a count, category, selection rule, confirmation status, and evidence summary, without direct personal identity.

Example:

```text
80 children from Maipu selected through open registration.
Selection criteria published.
Attendance verified by fiscalizer.
Personal beneficiary list restricted.
```

## Beneficiary privacy is not loss of auditability

Beneficiary privacy changes who can see personal data. It does not eliminate verification.

For a sports project serving 80 children, the public should be able to see:

- the beneficiary category;
- the selection criteria;
- the expected number of beneficiaries;
- the confirmation status;
- fiscalizer verification;
- aggregate attendance or participation data;
- privacy classification.

The public should not need to see:

- children's full names;
- identity numbers;
- home addresses;
- faces in unredacted photos;
- family information;
- sensitive locations;
- medical or social-vulnerability details.

Authorized fiscalizers or auditors may verify restricted records when necessary, subject to access logs and privacy rules.

## Protected action identity rule

Core v0 does not allow anonymous public comments.

Public comments are visible by default with the verified actor's identity.

Protected identity is an exception requested per comment, not a permanent user mode and not a general pseudonymous discussion layer.

The same protected-identity mechanism may apply to other sensitive formal actions when justified:

- complaints;
- whistleblower-sensitive reports;
- worker reports;
- affected-party observations;
- beneficiary confirmations;
- family-member reports;
- sensitive evidence submissions;
- testimony or clarification in a review process.

The action remains verified to the system. Only public visibility is restricted.

## Identity protection request

When a user wants to publish or submit a specific action with protected identity, the user must submit an identity protection request.

The request should include:

- the comment, complaint, contextualized evidence item, testimony, confirmation, or other protected action;
- the user's justification for protected identity;
- the project or process context;
- whether the user is a beneficiary, affected party, worker, complainant, or other exposed actor.

The system uses AI assistance to process the request without creating a human moderation queue.

## AI-assisted protected identity flow

The AI-assisted flow should be narrow and practical:

```text
1. User prepares a comment, complaint, contextualized evidence item, testimony, confirmation, or other formal action.
2. Default option is visible identity when no special risk exists.
3. User requests protected identity for this specific action.
4. User explains why identity protection is needed.
5. AI reviews the action content and justification where AI assistance is appropriate.
6. AI does not suppress publication.
7. AI either marks protected publication as acceptable or proposes a safer protected version with an explanation.
8. User decides whether to accept the safer protected version.
9. If accepted, the action is published or submitted with contextual protected identity.
10. If not accepted, the user may still publish under visible identity, subject to the same legal and safety gate.
```

The AI acts as an assistant and risk filter for protected identity. It is not a sovereign censor and should not become a hidden political decider.

## Contextual protected pseudonyms

When protected identity is granted, the public display should use a contextual pseudonym rather than a stable universal alias.

Example:

```text
Verified protected participant #P-184
```

The pseudonym should be specific to the project, complaint, contextualized evidence item, comment, or review context where possible. This reduces cross-project correlation and protects people who repeatedly participate in sensitive processes.

## Legal, safety, privacy, and platform-integrity gate

Visible identity does not make illegal content acceptable.

All public-facing submissions, including visible-identity and protected-identity submissions, should pass through a narrow publication gate for:

- child sexual abuse material or sexual exploitation content;
- direct threats;
- incitement to violence;
- publication of private third-party personal data;
- unsafe disclosure of minors or protected beneficiaries;
- doxxing;
- impersonation;
- automated spam;
- malicious technical abuse;
- content illegal under the applicable implementation jurisdiction.

This gate is not broad social moderation.

It should not block comments merely because they are:

- angry;
- harsh;
- politically uncomfortable;
- embarrassing to an executor;
- critical of an institution;
- critical of a fiscalizer;
- critical of the platform or protocol.

Example of a visible-identity comment that should remain publishable:

```text
I think the executor is incompetent and handled this project badly.
```

Example of a comment that should not be published as written:

```text
Here is the home address of the executor's child.
```

The first is accountable criticism. The second exposes protected personal data.

## Relationship with C014

C014 established that comments should not become anonymous social-media posts and that real identity, visible authorship, traceability, and accountability are the primary v0 protections against hostile comment dynamics.

C024 refines that rule for comments while also establishing the broader protected-action identity mechanism:

```text
Visible identity remains the default.
For comments, protected identity may exist only as a justified per-comment exception.
Verified identity remains mandatory behind the protection.
Both visible and protected comments remain subject to the narrow legal, safety, privacy, and platform-integrity gate.
```

This does not reopen anonymous comments as a general design option. It also does not limit protected identity only to comments. Complaints, evidence, beneficiary confirmations, testimony, and other sensitive formal actions may use the same verified protected-identity mechanism when justified.

## Relationship with C015

C015 established AI-assisted privacy review for evidence publication.

C024 applies the same logic to protected identity:

- the system assists before publication;
- the user remains responsible for choosing what to publish;
- AI may propose a safer version;
- AI does not replace human civic agency;
- fiscalization and complaint flows remain separate from ordinary comments.

## Example: sports project with child beneficiaries

A community sports project proposes training sessions for 80 children in Maipu.

Public project sheet:

```text
Beneficiaries: 80 children from Maipu
Selection: open registration with waiting list
Verification: fiscalizer-confirmed attendance records
Privacy: individual beneficiary list restricted
```

Restricted audit layer:

```text
Authorized fiscalizer verifies attendance records and consent documentation.
Access is logged.
Public report shows aggregate confirmation only.
```

Ordinary comment:

```text
Maria Gonzalez - verified citizen:
How were the 80 spots assigned if more children applied?
```

Protected identity request:

```text
Original comment:
The coordinator told me my child would lose the spot if I complained.

Justification:
My child is still attending the program and I fear retaliation.
```

Possible AI result:

```text
Protected identity acceptable.
Suggested safer text:
I report that a participant was allegedly warned that raising complaints could affect continued participation. I request that the fiscalizer review whether beneficiaries are being pressured.
```

The user may accept the safer protected version, or publish under visible identity if they prefer.

Protected complaint request:

```text
Complaint:
The coordinator is allegedly pressuring parents not to file complaints.

Justification:
My child is still enrolled and I fear retaliation.

Public display:
Verified protected complainant #C-184
```

Protected evidence request:

```text
Protected contextualized evidence:
A worker submits a document showing unsafe construction practice.

Justification:
The worker depends economically on the executor.

Public display:
Verified protected evidence contributor #E-77C
```

## C024 final resolution

C024 is resolved as follows:

```text
Core v0 keeps the no-anonymous-formal-actor rule, but separates verified identity from public visibility. Responsible actors must be verified and generally public. Beneficiaries and vulnerable participants may be verified privately, reviewer-visible, or represented publicly in aggregate. Public comments are identifiable by default. Protected identity is a justified exception for specific sensitive actions, including comments, complaints, testimony, evidence, beneficiary confirmations, and affected-party reports. It is processed through AI assistance or restricted-review rules where appropriate, and it does not create a general anonymous layer. Public-facing submissions remain subject to a narrow legal, safety, privacy, and platform-integrity gate.
```

Final rule:

> Verified identity is mandatory for formal participation. Public visibility is role- and context-dependent. Protected identity protects vulnerable participation without creating anonymous power.

## Documents that should eventually reflect this resolution

This resolution should inform future updates to:

- verified identity principle;
- contextual privacy hypothesis;
- citizen comment and question flow;
- complaint flow;
- evidence publication flow;
- full project sheet;
- technical audit trail layer;
- role and reputation model;
- future implementable schema;
- contradiction checklist.

## Remaining risks

- AI may be too permissive or too cautious when suggesting protected versions.
- Users may attempt to abuse protected identity to make bad-faith claims.
- Visible-identity insults may still degrade discussion quality.
- Protected pseudonyms may become correlatable if implemented poorly.
- Some beneficiary privacy rules will depend on country law.
- Powerful actors may retaliate against critics even when identity is protected if context reveals them.
- A narrow legal gate may be expanded improperly into political moderation by a future implementation.

## Mitigations

- keep visible identity as the default for comments and other public-facing actions where no special risk exists;
- require justification for protected identity;
- use contextual pseudonyms instead of stable universal aliases;
- record that protected identity was granted through an AI-assisted process;
- keep AI as assistant, not sovereign censor;
- define the publication gate narrowly;
- log material restriction decisions;
- preserve complaint and fiscalization flows for serious claims;
- make responsible project actors public by default;
- keep beneficiary data public only in aggregate unless lawful visibility is necessary.

## Design rule

> Privacy should protect vulnerable participation and beneficiary safety, not create anonymous public power.
