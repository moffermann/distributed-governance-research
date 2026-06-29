# Real Identity Comments and C014 Resolution v0

## Purpose

This document resolves contradiction C014 from the v0 contradiction checklist.

C014 was originally framed as the tension between allowing open comments and questions while avoiding social-media dynamics such as popularity contests, hostility, brigading, harassment, and low-quality debate.

The final v0 resolution is that comments do not require a complex ranking or moderation architecture. The main v0 protection is verified real identity, visible authorship, traceability, and minimal rule-based moderation.

## Status

Accepted as the v0 resolution for C014.

## Core principle

> Comments are civic observations made by accountable actors, not anonymous social-media posts competing for attention.

In v0, every comment, question, suggestion, observation, response, or clarification must be linked to a verified actor.

There are no anonymous comments.

## The contradiction

The system needs comments because projects must be intelligible, contestable, and open to clarification.

Citizens should be able to:

- ask questions;
- request clarification;
- make observations;
- suggest improvements;
- point out ambiguities;
- respond to project updates;
- challenge weak explanations.

But if comments behave like social media, they may produce:

- insults;
- performative outrage;
- brigading;
- popularity contests;
- repetitive low-quality debate;
- harassment;
- attention-seeking behavior;
- buried useful questions;
- pressure campaigns detached from project facts.

The contradiction is:

```text
The system needs open observation,
but it must not become an anonymous hostile social network.
```

## Why this is not primarily a ranking problem in v0

The most important difference from ordinary social media is not the comment-sorting algorithm.

The most important difference is accountability.

In ordinary social media, users can often hide behind weak identity, pseudonyms, throwaway accounts, or follower-driven incentives.

In this system:

```text
comment author = verified actor
comment target = concrete project
comment history = traceable
comment behavior = reputation-relevant when abusive or constructive
```

Therefore, v0 does not need to solve C014 with a complex ranking mechanism.

It should first rely on the structural difference that every comment is attributable to a real actor.

## Resolution

C014 is resolved by requiring verified visible authorship for all comments and keeping the comment layer structurally simple.

Accepted v0 rules:

```text
1. No anonymous comments.
2. Every comment is linked to a verified citizen, organization, or institution.
3. The author's visible identity is shown with the comment, subject to actor-type display rules.
4. Comments are not ranked by popularity.
5. Comments do not create approval, fiscalization, or blocking effects by themselves.
6. Serious claims are routed toward the complaint flow when appropriate.
7. Minimal moderation exists only for rule violations, not for uncomfortable criticism.
```

## Comment actor identity

Every comment should show the responsible actor.

Examples:

```text
María González — verified citizen
Fundación Control Ciudadano — verified organization
Municipality Unit X — verified institution
Executor response — Club Deportivo Los Cóndores
Fiscalizer clarification — Fundación Control Ciudadano
```

The system may use privacy-protecting display rules where legally necessary, but the actor must still be verified to the system.

Responsible project roles should not be anonymous.

## Comment types

The existing v0 comment types remain sufficient:

```text
Question
Observation
Suggestion
Response
Clarification
```

The purpose of the type is organization, not ranking.

A comment can also be related to a project area:

```text
Value
Beneficiaries
Budget
Evidence
Fiscalization
Milestone
Risk
Other
```

## No social ranking in v0

Rejected v0 mechanisms:

```text
most liked
most viral
most controversial
most shared
most replied-to
follower-weighted ranking
paid promotion
opaque manual boosting
```

These mechanisms would create social-media incentives and should not be part of Core v0.

## Basic ordering

The simplest v0 ordering is acceptable:

```text
chronological order
threaded replies where needed
unanswered questions visible
project-role responses visible
```

The system may show simple counters, such as:

```text
12 questions
8 answered
3 pending executor response
1 converted to complaint
```

But these counters should inform citizens, not create a popularity contest.

## Relationship with complaints

A comment is not a complaint by default.

If the comment contains a serious claim, the system may suggest escalation.

Examples:

```text
This evidence is manipulated.
The fiscalizer has a conflict of interest.
The executor is not complying.
The beneficiary list is false.
```

Suggested system response:

```text
This may require formal review. Do you want to file a complaint?
```

The user may still publish a comment, but formal blocking or review effects require the complaint flow.

## Minimal moderation

Moderation should be minimal, rule-based, and auditable when it materially affects the project discussion.

Moderation may apply to:

- insults;
- threats;
- spam;
- harassment;
- illegal content;
- repeated abusive duplication;
- publication of private personal data;
- unsafe disclosure;
- impersonation;
- knowingly false identity claims.

Moderation should not apply merely because a comment is critical, uncomfortable, embarrassing, or inconvenient to an executor, institution, fiscalizer, or funder.

Rejected rule:

```text
Hide criticism because it harms project image.
```

Accepted rule:

```text
Hide or restrict only rule-violating content, and record material moderation decisions.
```

## Reputation effects

Comments are generally low-risk civic participation.

A single ordinary comment should not significantly affect reputation.

However, repeated patterns may matter.

Positive signals:

- useful questions;
- constructive suggestions;
- clarification of ambiguity;
- good-faith correction;
- relevant observations that improve project quality.

Negative signals:

- repeated insults;
- spam;
- bad-faith repetition;
- harassment;
- knowingly false claims;
- publication of private information;
- repeated malicious behavior.

Reputation effects should be pattern-based or severity-based, not automatic after ordinary disagreement.

## Example

A citizen comments:

```text
María González — verified citizen
Question:
How will the 80 children be selected if more than 80 apply?
Related to: Beneficiaries
```

This remains a normal question.

The executor may respond:

```text
Club Deportivo Los Cóndores — executor
Response:
Selection will be by registration order, with a waiting list published in the project file.
```

Another citizen comments:

```text
Pedro Muñoz — verified citizen
Observation:
The beneficiary list appears to contain duplicated names.
```

The system may suggest:

```text
This may require formal review. Do you want to file a complaint with evidence?
```

The citizen may convert it into a complaint if they want review or blocking effects.

## C014 final resolution

C014 is resolved as follows:

```text
Do not build a social-media ranking system in Core v0. Require verified visible authorship for all comments, keep comment ordering simple, route serious claims to the complaint flow, and apply only minimal rule-based moderation for abusive, illegal, private, or spam content.
```

Final rule:

> The primary v0 protection against hostile social-media dynamics is not algorithmic ranking. It is real identity, visible authorship, traceability, and reputation-relevant accountability.

## Documents that should eventually reflect this resolution

This resolution should inform future updates to:

- citizen comment and question flow;
- project technical audit trail layer;
- complaint flow;
- role and reputation model;
- project dashboard layer;
- full citizen project sheet;
- future implementable schema.

## Remaining risks

- Real identity may reduce abuse but not eliminate it.
- Some actors may still perform outrage under their real names.
- Visible identity may discourage legitimate criticism in sensitive contexts.
- Institutions or powerful actors may pressure critics socially.
- Moderation can still be abused if rules are vague.
- High-volume projects may eventually need better grouping or summarization.

## Mitigations

- keep moderation rules narrow and explicit;
- record material moderation decisions;
- distinguish comment from complaint;
- allow serious claims to move into complaint flow;
- avoid popularity ranking in v0;
- use real identity and role visibility;
- treat abusive behavior as pattern-based reputation evidence;
- defer advanced comment ranking, grouping, or anti-brigading mechanisms to v1+ unless proven necessary.

## Design rule

> Civic comments should be accountable enough to discourage abuse, but open enough to preserve criticism.