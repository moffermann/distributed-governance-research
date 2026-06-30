# Assisted Evidence Publication and C015 Resolution v0

## Purpose

This document resolves contradiction C015 from the v0 contradiction checklist.

C015 was originally framed as a tension between transparency and privacy. The final v0 resolution keeps the flow simple: the system assists the user with privacy protection, but the user who publishes evidence remains responsible for the public content they choose to publish.

## Status

Accepted as the v0 resolution for C015.

## Core principle

> Evidence publication should be fast, user-controlled, and privacy-assisted by default.

The system should not require a human fiscalizer to approve every evidence item before publication. That would create delay, bottlenecks, and risk of arbitrary suppression.

Instead, the system should use an AI-assisted privacy check before publication and show the user a safer version when risks are detected.

## Key distinction

```text
Publishing evidence ≠ Validating evidentiary value
```

A user may publish evidence.

The fiscalizer later evaluates whether that evidence proves anything, is relevant, is sufficient, is weak, or is misleading.

The fiscalizer should not be the gatekeeper who decides whether evidence can exist publicly in the first place.

## Simple v0 flow

A user wants to file a complaint or contribute evidence.

The user uploads an image, video, document, or other evidence.

The system performs an automatic privacy check before publication.

If the system detects sensitive information, it generates or suggests a safer public version.

The system then shows the safer version to the user with a clear warning.

The user reviews and decides whether to publish.

## Example flow

```text
1. User creates a complaint.
2. User uploads a photo.
3. AI detects faces of minors.
4. AI blurs the faces.
5. System shows the blurred version to the user.
6. System warns that minors' faces and sensitive information should not be published.
7. User reviews the safe version.
8. User chooses to publish, edit, cancel, or upload another file.
9. Published evidence becomes visible as user-published evidence.
10. Fiscalizer later evaluates whether it proves anything.
```

## What the AI checks

The AI-assisted privacy check may detect:

- faces;
- possible minors;
- names;
- identity numbers;
- documents;
- phone numbers;
- email addresses;
- addresses;
- license plates;
- medical information;
- financial information;
- visible school or home locations;
- GPS or metadata;
- other sensitive text or visual details.

## What the AI may do

The AI may:

- blur faces;
- blur or mask documents;
- remove metadata;
- remove GPS data;
- mask names;
- mask phone numbers;
- mask email addresses;
- mask addresses;
- mask license plates;
- recommend a safer crop;
- recommend publishing only a summary;
- warn that manual review by the user is necessary.

## User responsibility

The user remains responsible for the evidence they decide to publish.

The system should clearly warn before publication:

```text
This evidence may contain sensitive information.
The system generated a safer version, but you must review it before publishing.
Do not publish faces of minors, private documents, addresses, identity numbers, medical information, or other sensitive data unless you have a lawful basis and permission where required.
You are responsible for the evidence you publish.
```

The wording can be adapted by country implementation and applicable law.

## No human pre-approval for ordinary publication

For v0, ordinary evidence publication should not require prior human approval by the fiscalizer.

Reasons:

- avoids evidence being blocked by bias;
- avoids evidence dying in a pending queue;
- avoids bottlenecks when fiscalizers have too much work;
- keeps complaint and evidence flows usable;
- prevents the fiscalizer from becoming a publication censor;
- keeps responsibility with the user who publishes.

## What the fiscalizer does later

The fiscalizer evaluates the evidentiary value after publication.

The fiscalizer may determine:

```text
Relevant evidence
Weak evidence
Insufficient evidence
Misleading evidence
Duplicated evidence
Contradicted evidence
Evidence unrelated to the project
Evidence useful for complaint review
Evidence not useful for complaint review
```

Example:

```text
User publishes blurred photo of a sports activity.

Fiscalizer conclusion:
The image shows that an activity occurred, but it does not prove that 80 beneficiaries attended.
```

## Responsibility model

### User

Responsible for deciding what to publish after seeing the AI-assisted safe version and privacy warning.

### System

Responsible for assisting with detection, redaction, warnings, and safe-publication tools.

### Fiscalizer

Responsible for evaluating whether the published evidence proves anything relevant.

### Platform/protocol

Responsible for defining the warning, privacy-assistance flow, abuse handling, and country-specific legal adaptation.

## Publication options

After the AI-assisted review, the user may choose:

- publish safer version;
- edit/redact manually;
- upload a new file;
- publish text-only summary;
- cancel publication;
- keep evidence private for later use, if supported;
- request help if the evidence is too sensitive.

## Sensitive evidence warning

The system should make the warning visible before the final publish action.

Recommended warning:

```text
Review before publishing.
We detected possible sensitive information and generated a safer version.
You are responsible for the evidence you publish.
Do not publish personal data, faces of minors, documents, addresses, medical information, or other sensitive information without proper authorization or legal basis.
```

## Public evidence label

Published evidence should show that it was user-published.

Example:

```text
Evidence published by citizen.
Privacy assistance applied: faces blurred, metadata removed.
Evidentiary status: not yet evaluated by fiscalizer.
```

This avoids confusing publication with validation.

## Relationship with information incentives

C015 supports H023 by separating easy publication from later information reliability effects.

When a user publishes evidence, the evidence item may later support, contradict, weaken, or correct a material project claim. The publication flow should record this possible relationship without asking the ordinary user to make a technical legal or evidentiary judgment.

Example:

```text
User action:
Publishes a blurred photo from a sports activity.

Possible later review:
The photo supports that the activity occurred, but does not prove that 80 children attended.

Information effect:
The related attendance claim may remain self-reported, become partially corroborated, or become disputed if other evidence contradicts it.
```

AI assistance in this document is privacy and publication assistance. It may also flag possible metadata issues, duplicates, or missing context, but it does not decide whether a claim is true, whether a discovery is rewardable, or whether an actor is responsible.

Verified-discovery rewards or responsibility effects require later review under the evidence, fiscalization, complaint, reputation, and audit-trail rules.

## C015 final resolution

C015 is resolved as follows:

```text
The system uses AI-assisted privacy review before publication, generates safer versions where possible, warns the user, and lets the user decide whether to publish. The user is responsible for the publication. The fiscalizer evaluates evidentiary value after publication, not before.
```

Final rule:

> Evidence should not be trapped behind human pre-approval. The system should protect privacy through AI-assisted detection, redaction, warnings, and safer versions, while leaving publication responsibility with the user and evidentiary evaluation with the fiscalizer.

## Documents that should eventually reflect this resolution

This resolution should inform future updates to:

- citizen complaint flow;
- citizen evidence production flow;
- technical audit trail layer;
- complaint entity model;
- privacy model;
- project dashboard layer;
- future implementable object schema.

## Remaining risks

- AI may fail to detect sensitive information.
- User may ignore warnings and publish unsafe content.
- User may publish defamatory or misleading evidence.
- Sensitive context may not be visible to AI.
- Some evidence may require stricter country-specific legal handling.

## Mitigations

- clear user responsibility warning;
- AI-assisted redaction by default;
- manual edit before publish;
- report/remove/appeal process for unsafe published evidence;
- abuse reputation effects for irresponsible publication;
- country-specific legal notices;
- fiscalizer evaluation separates publication from proof.

## Design rule

> Make evidence publication as simple as posting to a social platform, but safer: detect risks, generate a safer version, warn the user, and let the user take responsibility for publishing.
