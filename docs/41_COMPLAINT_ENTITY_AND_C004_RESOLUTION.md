# Complaint Entity and C004 Resolution v0

## Purpose

This document resolves contradiction C004 from the v0 contradiction checklist.

C004 was originally framed as the problem of deciding when a complaint should become blocking. The discussion refined the issue: the complaint model must distinguish misunderstanding from real project failure, avoid reputational sabotage, allow citizen evidence, group repeated complaints, and let the competent reviewer admit, reject, or escalate the complaint.

## Status

Accepted as the v0 resolution for C004.

## Core distinction

```text
Presented complaint ≠ Admitted complaint ≠ Founded complaint ≠ Blocking complaint
```

A complaint being presented does not mean the project has a real violation.

A complaint becomes relevant to the project only after it passes a review of minimum evidence, pertinence, scope, and competence.

## Why this matters

Citizens may file complaints for valid reasons, but also because of misunderstandings.

Example:

```text
Citizen belief:
This project promised to build a sports center.

Actual project:
This project promised to design the technical plan for a future sports center.
```

A complaint saying "they did not build the sports center" may be understandable, but it is not necessarily a valid complaint against the project.

Rejected complaints should remain historically traceable, but they should not damage the project's main reputation or appear as active project warnings.

## Definition of Complaint

A `Complaint` is a formal citizen or actor submission that alleges a possible problem in a project, control subproject, evidence item, fiscalization process, disbursement, actor relationship, or declared value commitment.

A complaint must include:

- complainant;
- project or object affected;
- category;
- description;
- affected scope;
- explanation of why it matters;
- evidence or initial supporting material;
- requested review outcome, if any;
- privacy classification where relevant.

## What a complaint is not

A complaint is not:

- a normal comment;
- a dislike;
- a difference of political priority;
- a vote against the project;
- automatic proof of wrongdoing;
- automatic reputational damage;
- automatic blocker.

## Required evidence

A complaint should require evidence or at least initial supporting material.

The system should not accept a complaint as formal if it only says:

```text
I do not like this.
This looks suspicious.
I thought the project was something else.
```

The complaint form should ask:

```text
What are you alleging?
Which part of the project does it affect?
Why do you believe there is a problem?
What evidence do you provide?
What outcome do you request?
```

## Affected scope

Every complaint must identify what it affects.

Possible affected scopes:

- whole project;
- specific project version;
- milestone;
- disbursement;
- budget line;
- evidence item;
- beneficiary declaration;
- fiscalizer;
- executor;
- conflict of interest;
- control subproject;
- value thesis;
- metric;
- risk or antivalue declaration;
- legal or safety condition.

This scope matters because blocking should be targeted, not always total.

## Complaint signals

A complaint may have civic signals similar to an idea.

Possible signals:

- support;
- objection;
- comments;
- followers;
- evidence contributions;
- duplicate or similar reports;
- privacy flags.

However, these signals do not decide whether the complaint is true.

Rule:

> Support for a complaint means citizens think it deserves attention. It does not prove the complaint.

## Supporting a complaint

A citizen may support a complaint when they believe it deserves review.

Support should not automatically make the complaint valid, blocking, or founded.

## Objecting to a complaint

A citizen may object to a complaint when they believe it is mistaken, exaggerated, duplicated, unsupported, or based on misunderstanding.

Objection reasons may include:

- misunderstanding of project scope;
- no evidence;
- duplicate of existing complaint;
- wrong object affected;
- already resolved;
- malicious or abusive framing;
- not a project compliance issue;
- other.

## Complaint evidence module

A complaint should operate as a living review file.

It should have its own evidence list:

```text
Complaint Evidence
```

This is distinct from normal project evidence.

### Project evidence

Project evidence demonstrates execution or fulfillment.

### Complaint evidence

Complaint evidence supports, refutes, clarifies, or contextualizes an alleged problem.

## Evidence contributions to complaints

Citizens and relevant actors may add evidence to an active complaint.

Evidence may include:

- documents;
- photos;
- videos;
- screenshots;
- testimony;
- public records;
- beneficiary confirmations;
- location or site observations;
- comparative lists;
- contradiction of prior evidence;
- executor response;
- fiscalizer response.

Each evidence item should include:

- contributor;
- evidence type;
- description;
- what claim it supports or refutes;
- file or reference;
- date;
- privacy classification;
- review status;
- relation to complaint scope.

## Complaint evidence states

Recommended states:

```text
Submitted
Pending review
Accepted as relevant
Observed
Rejected
Contradicted
Used in resolution
Restricted for privacy
```

An evidence item can be accepted as relevant without proving the complaint.

Example:

```text
A photo is real and relevant, but it may not prove non-compliance if it was taken before execution started.
```

## Duplicate and similar complaint module

Complaints require duplicate detection because many citizens may report the same issue repeatedly.

The system should detect, suggest, and group similar complaints.

Instead of showing:

```text
18 complaints
```

when all refer to the same issue, the system should show:

```text
1 active complaint about beneficiary inconsistency
18 similar reports grouped
12 evidence items contributed
24 supports
```

## Complaint grouping states

Recommended grouping labels:

```text
Principal complaint
Related complaint
Duplicate complaint
Merged complaint
Separated as distinct issue
```

Grouping should not silence new evidence. A citizen should be able to attach new evidence to the existing complaint.

## Complaint lifecycle

Recommended states:

```text
Draft
Presented
Pending initial review
Needs more information
Rejected for lack of evidence
Rejected for misunderstanding
Rejected as not applicable to project
Rejected as duplicate
Admitted non-blocking
Preliminary blocking
Confirmed blocking
In executor response
In fiscalizer review
In external review
Resolved founded
Resolved unfounded
Closed
Reopened
Appealed
```

## Admission review

A complaint should be admitted or rejected by the competent reviewer.

For ordinary project execution issues, this may be the fiscalizer.

For complaints against the fiscalizer, the fiscalizer should not judge its own complaint.

Suggested competence rule:

```text
Complaint about execution → project fiscalizer or responsible reviewer.
Complaint about fiscalizer → independent reviewer / second fiscalizer / protocol review.
Complaint about conflict of fiscalizer → independent review.
Complaint about platform or protocol → meta-governance or administrative review path.
```

## Rejected complaints

Rejected complaints remain traceable but should not count as active project complaints.

They should not damage:

- project quick card;
- executor reputation;
- fiscalizer reputation;
- project risk signal;
- disbursement status.

They may still appear in detailed history.

Rule:

> Rejected complaints are history, not active evidence of project failure.

## Project-facing complaint metrics

The project quick view should not show raw total complaints.

Recommended quick metrics:

```text
Active complaints
Blocking complaints
Founded complaints
Complaint evidence items
Grouped similar reports
```

Rejected complaints should appear only in history or expanded detail.

Example:

```text
Active complaints: 2
Blocking complaints: 1
Founded complaints: 0
Similar reports grouped: 18
Rejected complaints: visible in history
```

## Blocking complaints

A complaint should become blocking only when it meets a defined criterion and has an affected scope.

Blocking criteria may include:

- affects current or upcoming disbursement;
- affects beneficiary existence or eligibility;
- affects evidence used to approve a milestone;
- affects independence of fiscalizer;
- alleges material conflict of interest;
- alleges misuse of released funds;
- alleges falsified or manipulated documents;
- indicates serious safety, legality, or feasibility issue;
- provides initial evidence sufficient for urgent review.

Blocking should be scoped.

Possible blocking scope:

- whole project;
- milestone;
- disbursement;
- budget line;
- evidence item;
- fiscalizer assignment;
- control subproject;
- actor role;
- project version.

Rule:

> Blocking should be targeted to the affected object, not automatically total.

## Citizen actions on a complaint

A citizen may:

- support complaint;
- object to complaint;
- follow complaint;
- comment;
- add evidence;
- mark as duplicate;
- suggest related complaint;
- report privacy issue;
- view resolution.

## Complaint detail page

The complaint detail page should include:

1. complaint title;
2. affected project/object;
3. status;
4. affected scope;
5. support and objection counts;
6. evidence list;
7. evidence states;
8. grouped similar complaints;
9. executor response;
10. fiscalizer or reviewer response;
11. resolution;
12. audit trail;
13. privacy notices.

## C004 final resolution

C004 is resolved as follows:

```text
Complaint is a formal review entity with evidence, scope, support, objections, duplicate grouping, review, admission, and resolution.
```

Final rule:

> A complaint presented by a citizen does not automatically count as a real project complaint. It must provide evidence, identify affected scope, and pass admission by the competent reviewer. Rejected complaints remain traceable but do not damage the project. Admitted complaints may be non-blocking or blocking, and blocking must be scoped to the affected object.

## Documents that should eventually reflect this resolution

This resolution should inform future updates to:

- citizen complaint flow;
- consolidated entity/object/state map;
- project dashboard layer;
- technical audit trail layer;
- disbursement flow;
- contradiction checklist;
- future implementable object schema.

## Remaining risks

- Reviewers may reject valid complaints too easily.
- Complaint grouping may incorrectly merge distinct issues.
- Evidence volume may overwhelm fiscalizers.
- Complaint support may become brigading.
- Privacy-sensitive complaint evidence may be mishandled.

## Mitigations

- appeal or reopen path;
- transparent rejection reason;
- ability to separate merged complaints;
- evidence status classification;
- privacy classes;
- independent review for complaints against fiscalizers;
- quick view counts only active/admitted/founded/blocking complaints.

## Design rule

> Complaints should be easy to raise, structured enough to evaluate, difficult to abuse, and fair enough not to punish projects for rejected misunderstandings.
