# AI Assistance and C008 Resolution v0

## Purpose

This document resolves contradiction C008 from the v0 contradiction checklist.

C008 was originally framed as the tension between using AI to scale the system and preventing AI from becoming an unaccountable authority. The final resolution is simple: AI may assist, detect, summarize, suggest, transform, and warn, but it is not an actor and does not make final civic, financial, reputational, or legal decisions.

## Status

Accepted as the v0 resolution for C008.

## Core principle

> AI assists; the protocol decides.

AI is infrastructure. It is not a civic actor, fiscalizer, executor, citizen, delegate, moderator, or authority.

## The contradiction

AI can be useful in many parts of the system:

- detecting sensitive information in evidence;
- blurring faces or masking documents;
- suggesting duplicate ideas or complaints;
- summarizing evidence;
- summarizing comments;
- suggesting value icons;
- suggesting metrics;
- detecting inconsistencies;
- warning about risk;
- helping users complete forms;
- helping fiscalizers prioritize review.

But if AI becomes the final decision-maker, the system becomes opaque and potentially arbitrary.

The system must avoid this path:

```text
AI prediction → automatic civic consequence
```

## What AI may do

AI may:

- suggest classifications;
- suggest duplicate or related entities;
- detect sensitive content;
- generate safer public versions of evidence;
- remove metadata;
- summarize long evidence sets;
- summarize complaints or comments;
- identify possible inconsistencies;
- flag possible manipulation;
- suggest risk levels;
- suggest value metrics;
- suggest antivalues;
- assist form completion;
- help translate technical states into citizen language;
- prioritize items for review;
- generate warnings;
- assist search and navigation.

## What AI may not do alone

AI may not be the final authority for:

- approving projects;
- rejecting projects;
- approving disbursements;
- rejecting disbursements;
- admitting or dismissing complaints as final decision;
- deciding truth of evidence;
- deleting evidence;
- sanctioning actors;
- assigning negative reputation;
- selecting fiscalizers as final authority;
- blocking citizens;
- closing projects;
- determining final public value;
- overriding citizen funding choices;
- overriding protocol rules.

## Decision authority

Relevant decisions must be grounded in:

- protocol rule;
- citizen action;
- executor responsibility;
- fiscalizer evaluation;
- evidence producer record;
- complaint process;
- financial order;
- legal/country implementation constraint;
- explicit governance process.

AI can support these decisions but does not replace them.

## Example: duplicate complaint

AI may say:

```text
This complaint appears similar to Complaint C-102.
```

The user may still decide:

```text
This is related but not duplicate because it affects a different milestone.
```

The system may suggest grouping, but it should not silently erase or merge the complaint without a visible process.

## Example: privacy assistance

AI may detect faces of minors and generate a blurred public version.

The user decides whether to publish the safer version.

The fiscalizer later evaluates whether the evidence proves anything.

AI does not decide the legal truth of the evidence or the final complaint outcome.

## Example: risk flag

AI may flag a project as high risk because beneficiaries are hard to verify.

That can trigger stronger evidence requirements, review attention, or a warning.

It should not automatically reject the project or sanction the executor.

## Traceability rule

When AI materially influences a workflow, the system should record:

- AI function used;
- output or recommendation;
- confidence or risk level where available;
- user or actor action after recommendation;
- whether the suggestion was accepted, modified, ignored, or appealed;
- final rule or actor decision.

## Visibility rule

AI outputs should be visible as AI assistance where relevant.

Example labels:

```text
AI-suggested duplicate
AI-detected sensitive information
AI-generated anonymized version
AI-suggested metric
AI risk warning
AI-generated summary
```

This avoids confusing AI assistance with official protocol decisions.

## Correction rule

AI outputs should be correctable.

Users and competent actors should be able to:

- accept;
- ignore;
- correct;
- override;
- appeal;
- provide better information;
- mark the AI suggestion as wrong.

## Relationship with C015

C015 uses AI as a privacy assistant for evidence publication.

That use is compatible with C008 because AI does not become a publication authority. It detects risk, generates a safer version, and warns the user. The user publishes under responsibility, and the fiscalizer later evaluates evidentiary value.

## Relationship with value verification

AI may help suggest metrics or detect weak value verification, but the final value assessment belongs to the evidence/fiscalization/closure process.

## C008 final resolution

C008 is resolved as follows:

```text
AI is assistance infrastructure, not a system actor or authority.
```

Final rule:

> AI may assist, detect, summarize, transform, suggest, and warn, but it cannot be the final authority over projects, funds, evidence truth, complaints, sanctions, reputation, fiscalizers, citizen choices, or closure. Material AI suggestions should be visible, traceable, and correctable.

## Documents that should eventually reflect this resolution

This resolution should inform future updates to:

- assisted evidence publication model;
- complaint entity model;
- value verification model;
- project creation flow;
- project dashboard layer;
- fiscalization and control model;
- consolidated entity/object/state map;
- future implementable schema.

## Remaining risks

- AI suggestions may bias users or fiscalizers.
- Users may over-trust AI-generated summaries.
- AI may make mistakes in privacy detection, duplicate detection, or risk classification.
- AI outputs may be difficult to audit if not logged.
- AI may introduce hidden model bias.

## Mitigations

- label AI outputs clearly;
- keep AI non-authoritative;
- record material AI suggestions;
- allow correction and appeal;
- require protocol or actor decision for consequences;
- avoid automatic sanctions or payments based solely on AI;
- prefer simple AI assistance in v0.

## Design rule

> Use AI to reduce friction, not to move power away from citizens, protocol rules, evidence producers, fiscalizers, or accountable actors.
