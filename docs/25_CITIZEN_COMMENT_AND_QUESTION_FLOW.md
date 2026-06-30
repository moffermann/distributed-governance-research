# Citizen Comment and Question Flow v0

## Purpose

This document freezes the citizen flow for commenting, asking questions, and making non-complaint observations on a project.

Comments are part of open civic observation. They help clarify, improve, and challenge projects without necessarily triggering a formal complaint process.

## Core principle

> Commenting is civic observation, not project approval, funding, fiscalization, or complaint by default.

Comments are linked to verified actors. Visible identity is the default. Protected identity is a justified per-comment exception, not a general anonymous comment layer.

This per-comment rule governs only the comment layer. The broader H029/C024 protected-identity mechanism may also apply to complaints, evidence, testimony, beneficiary confirmations, or other sensitive formal actions when justified.

## Main question

```text
How can a citizen ask, observe, or discuss without escalating into a formal complaint?
```

## Entry points

The flow can start from:

- project dashboard;
- comments signal detail;
- full citizen project sheet;
- compact project card;
- notification about an update;
- evidence or fiscalization panel.

Visible buttons:

```text
[Comentar]
[Preguntar]
[Responder]
[Ver conversación]
```

## Comment types

The system should help classify comments without making the process heavy.

Recommended types:

```text
Pregunta
Observación
Sugerencia
Respuesta
Aclaración
Justified objection
```

A formal issue should be redirected to the complaint flow.

Examples:

```text
This looks like false information.
This fiscalizer has a direct conflict.
This evidence is manipulated.
The executor is not complying.
```

These should prompt:

```text
This may be a complaint. Do you want to file it as a formal complaint?
```

## Flow steps

```text
1. Citizen opens comments
2. System shows existing discussion summary
3. Citizen chooses comment type
4. Citizen writes comment
5. System detects if complaint path is more appropriate
6. Citizen submits
7. Comment receives status and visibility
8. Relevant actors may respond
```

## 1. Discussion summary

Before commenting, the citizen should see a useful summary.

Example:

```text
Comentarios

35 comentarios
4 pendientes de respuesta
18 respondidos por el ejecutor

Temas principales:
- selección de beneficiarios
- uso del recinto
- continuidad del programa
```

## 2. Comment form

Example:

```text
Nuevo comentario

Tipo:
[Pregunta] [Observación] [Sugerencia]

Comentario:
[texto]

Relacionado con:
[Valor] [Beneficiarios] [Presupuesto] [Evidencia] [Fiscalización] [Otro]

[Publicar con identidad visible]
[Solicitar identidad protegida]
```

The relationship field helps organize comments by project area.

If the user requests protected identity for this specific comment, the system should ask for a short justification and use AI assistance to either mark protected publication as acceptable or propose a safer protected version with explanation. The AI should not suppress publication; if the user does not accept the protected version, the user may publish under visible identity subject to the same legal and safety gate.

## 3. Escalation suggestion

If the comment appears to describe a serious issue, the system should suggest the complaint flow.

Example:

```text
Tu comentario parece describir un posible incumplimiento o información falsa.

Puedes publicarlo como comentario, pero si quieres que active revisión formal, debes presentarlo como denuncia.

[Presentar denuncia]
[Publicar como comentario]
```

The system should not force all critical comments into complaints, but it should make the difference clear.

## Justified objection signal

A justified objection is a structured civic signal attached to a project.

It should capture:

- objection reason;
- affected project area;
- short explanation;
- whether the citizen wants only civic visibility or wants to start a formal complaint;
- current status: active or withdrawn.

Example:

```text
Reason:
Possible duplication.

Explanation:
The ministry already announced a multi-court project in the same location.

Current effect:
Counts as active justified objection.
Does not block the project by itself.
```

The citizen may withdraw a justified objection at any time. Withdrawal removes it from active objection counts but preserves the historical audit trail.

If the citizen wants review, blocking, correction, fiscalization, or formal response, the system should offer the complaint flow.

Rule:

> Justified objection is reversible civic signal. Complaint is formal review.

## 4. Visibility, identity, and narrow publication gate

Comments should generally be visible with the author's verified identity.

The system should not moderate tone merely because criticism is harsh, uncomfortable, embarrassing, or politically inconvenient.

All comments, including visible-identity comments and protected-identity comments, remain subject to a narrow legal, safety, privacy, and platform-integrity gate against:

- spam;
- private personal data;
- illegal content;
- unsafe disclosure.
- direct threats;
- incitement to violence;
- doxxing;
- impersonation;
- automated abuse.

Moderation should be recorded in Layer 5 if it affects the project discussion.

## 5. Response expectations

Some comments may require executor response.

Possible statuses:

```text
Published
Pending executor response
Responded
Marked as relevant
Converted to complaint
Hidden by moderation
Resolved
```

The system can highlight unanswered relevant questions.

## 6. Automatic following

Commenting automatically adds the project to Following.

The citizen may mute notifications later.

## 7. Reputation effects

Comments are generally low-risk, but repeated constructive participation can improve civic observation reputation.

Negative behavior can affect reputation or moderation standing.

Possible positive signals:

- useful questions;
- detected ambiguity;
- relevant project improvement suggestion;
- respectful clarification.

Possible negative signals:

- spam;
- bad-faith repetition;
- knowingly false claims;
- posting private information.
- illegal or unsafe content.

## What this flow should not do

The comment flow should not:

- replace the complaint flow;
- count as fiscalization;
- count as approval;
- bury important unanswered questions;
- become a social-media popularity contest;
- create anonymous public comments;
- hide critical comments merely because they are uncomfortable;
- expose private information without rules.

## Design rule

> Comments should make projects more intelligible and contestable without turning every observation into a formal dispute.

## Status

Accepted as Citizen Comment and Question Flow v0.
