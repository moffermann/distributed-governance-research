# Citizen Complaint Flow v0

## Purpose

This document freezes the flow for filing a formal complaint about a project.

A complaint is different from a comment. It is a structured claim that something may be false, incomplete, conflicted, non-compliant, harmful, or otherwise relevant to project validity, execution, fiscalization, fulfillment evidence, or funding release.

## Core principle

> A complaint is a formal review trigger. It must be easy to submit, structured enough to evaluate, and traceable enough to prevent arbitrary decisions.

This flow concerns `Complaint Evidence`. Complaint evidence supports, refutes, clarifies, or contextualizes an allegation. It is not automatically `Fulfillment Evidence`, which verifies value thesis metrics, milestones, disbursement, closure, or reputation. Complaint evidence may become relevant to fulfillment review only after a fiscalizer, reviewer, competent authority, or protocol rule accepts it for that purpose.

Complaints are submitted by verified actors. Visible identity is the default where no special risk exists, but a complainant may request protected identity when public exposure creates a retaliation, safety, privacy, or beneficiary-protection risk. Protected identity is not an anonymous complaint: the system retains restricted accountability and authorized reviewers may verify identity under access-log rules.

## Main question

```text
How can a citizen formally alert the system that something may be wrong with a project?
```

## Entry points

The complaint flow can start from:

- project dashboard;
- complaint signal detail;
- full citizen project sheet;
- evidence panel;
- fiscalization panel;
- comment escalation;
- milestone update;
- audit trail.

Visible buttons:

```text
[Presentar denuncia]
[Denunciar problema]
[Reportar información falsa]
```

## Complaint categories

The system should help the citizen classify the complaint.

Recommended categories:

```text
Información falsa o incompleta
Conflicto de interés no declarado
Beneficiarios inexistentes o mal declarados
Evidencia dudosa
Incumplimiento de hito
Mal uso de recursos
Riesgo o antivalue no declarado
Fiscalización deficiente
Otro
```

The category helps routing, but the citizen should not need legal or technical expertise.

A complaint may point to a material information claim, but the citizen should not need to model that claim technically. The interface can ask what statement, contextualized evidence item, budget line, beneficiary count, risk, milestone, or relationship seems false, incomplete, or misleading.

## Flow steps

```text
1. Citizen starts complaint
2. System explains difference from comment
3. Citizen selects category
4. Citizen writes claim and attaches complaint evidence if available
5. System asks project area affected
6. Citizen chooses visible identity or requests protected identity if justified
7. Citizen reviews possible consequences
8. Complaint is submitted
9. System immediately sends complaint to fiscalizer for quote
10. Complaint opens support window
11. Citizens may support and reserve conditional review funding
12. Fiscalizer publishes quote without seeing reserved funding totals
13. If support threshold and quoted review funding are reached, fiscalizer reviews admissibility
14. If admitted, the fiscalizer records affected scope and any scoped systemic pause
15. Project actors may respond where review proceeds
16. Resolution, referral, or final outcome is published and traceable
```

## 1. Explanation

Example:

```text
Una denuncia activa revisión formal.

Úsala si crees que hay información falsa, conflicto no declarado, evidencia dudosa, incumplimiento o riesgo relevante.

Si sólo quieres preguntar o comentar, usa comentarios.
```

## 2. Complaint form

Example:

```text
Presentar denuncia

Categoría:
[Información falsa] [Conflicto de interés] [Evidencia dudosa] [Incumplimiento] [Otro]

¿Qué problema detectaste?
[texto]

¿A qué parte del proyecto afecta?
[Beneficiarios] [Presupuesto] [Evidencia] [Fiscalización] [Ejecución] [Valor prometido]

¿Tienes evidencia de la denuncia?
[Subir archivo] [Agregar enlace] [Describir observación]

Identidad:
[Presentar con identidad visible]
[Solicitar identidad protegida]

[Continuar]
```

If the citizen requests protected identity, the form should ask for a short justification. The request should be stored as part of the complaint trace, but the public complaint page should show only the protected display identity unless disclosure is authorized by the applicable review rules.

Example:

```text
Justification:
My child is still enrolled in the project and I fear retaliation if my name is public.

Public display:
Verified protected complainant #C-184
```

## 3. Consequence notice

Before submission, the system should explain what may happen.

Example:

```text
Tu denuncia puede:
- quedar registrada como observación formal;
- pedir respuesta al ejecutor;
- pedir revisión al fiscalizador;
- bloquear temporalmente avance o desembolso dentro del sistema si es grave y tiene alcance definido;
- ser rechazada si no tiene antecedentes o evidencia suficiente;
- afectar reputación si se demuestra mala fe reiterada.
```

The submission screen should also show the active complaint policy.

Example:

```text
Complaint policy:
100 supports required within 30 days.

Fiscalizer quote:
Requested immediately after submission.
Quote deadline: 7 days.

Funding:
You may reserve a conditional contribution now.
The fiscalizer will not see reserved funding before quoting.

Project effect:
No automatic blocking effect.
```

## 4. Support window, quote, and reserved funding

After minimum structural validation, the system should immediately send the complaint to the primary fiscalizer or competent reviewer for quote.

At the same time, the complaint enters a support window.

The administrator-configured values are:

```text
required_support_count = N
support_window_days = X
quote_deadline_days = Y
```

During the support window, citizens may:

- support the complaint;
- add complaint evidence;
- follow the complaint;
- reserve a conditional review contribution;
- object to the complaint or add counterevidence.

Complaint objections are not a numeric veto. They do not reduce the support count and do not prevent review if the support, quote, funding, and admission requirements are met. They are counter-signals and counterevidence for the fiscalizer or reviewer.

Before the fiscalizer quote is published, reserved contribution totals should not be visible to the fiscalizer.

Citizen-facing message:

```text
Your support and reserved contribution have been recorded.

They will activate only if:
- the fiscalizer publishes a review quote;
- this complaint reaches 100 supports within 30 days;
- enough reserved funding is gathered for the quoted review cost.

Until then, no review is started and no project effect is triggered.
```

If the complaint does not reach the required support count within the support window, it closes as:

```text
Closed - support threshold not reached
```

This is not a finding that the complaint was false. The complaint remains traceable in history, and reserved contributions return or follow the applicable funding-return/default-allocation rule.

If the fiscalizer does not quote within the configured deadline, the policy may:

- notify a secondary fiscalizer;
- request a quote from an eligible reviewer pool;
- keep the complaint pending quote;
- close the complaint as quote not received after the support window expires.

## 5. Statuses

Possible complaint statuses:

```text
Submitted
Pending quote
Support window open
Support threshold not reached
Funding pending
Ready for admissibility review
In admissibility review
Needs more information
Admitted non-blocking
Admitted with scoped systemic pause
Sent to executor response
Sent to fiscalizer review
Referred to competent authority
In external authority review
External suspension ordered
Final resolution pending
Open
Blocking
Resolved
Rejected
Withdrawn
Reopened
Appealed
```

Citizen-facing language can be simpler:

```text
Recibida
Esperando cotización
Juntando apoyos
Juntando financiamiento
En revisión
Necesita más información
Abierta
Bloqueante
Resuelta
Rechazada
Reabierta
```

## 6. Blocking complaints

Some complaints may block execution, funding release, milestone approval, or project closure.

Blocking should be rule-based and visible.

Examples of potentially blocking issues:

- alleged false beneficiaries;
- serious fulfillment-evidence dispute;
- undeclared relation affecting fiscalization;
- suspected non-compliance with a milestone;
- budget change not declared;
- relevant risk or antivalue omitted.

Rule:

> Not every complaint blocks a project. Blocking status must be explicit, justified, and reviewable.

A blocking complaint creates a scoped systemic effect inside the platform. It may pause execution funding, disbursement, milestone approval, phase gate acceptance, closure, or use of disputed evidence for the affected scope.

It should not automatically stop complaint review funding, control funding, mitigation funding, correction funding, referral preparation, or separable unaffected scopes.

For legally regulated projects, including environmental, mining, energy, infrastructure, water, health, safety, territorial, or permit-based projects, the platform should not stop operations, revoke permits, halt construction, impose sanctions, or suspend legal rights by itself.

For those cases, the platform may fund review, create a fiscalizer report, prepare a complaint evidence index, and generate a referral package. Operational suspension requires a court order, regulator order, or competent authority resolution.

Complaint filing, support, review funding, fiscalizer quote, admissibility, referral, or pending systemic pause should be visible as procedural status. They should not directly become a formal negative reputation input unless a final resolution, founded complaint outcome, confirmed non-compliance, or role-specific Responsibility Event establishes responsibility.

## 7. Actor response

Relevant actors may be asked to respond.

Possible responders:

- executor;
- fiscalizer;
- evidence producer;
- proposer;
- moderator, if in tutored or semi-open mode;
- complainant;
- beneficiary or affected party where appropriate.

Responses should be visible according to privacy rules.

## 8. Resolution

A resolution should include:

- complaint summary;
- category;
- material information claim or project object affected where applicable;
- complaint evidence considered;
- actor responses;
- conclusion;
- effect on project;
- required correction if any;
- sanctions or reputation effects if any;
- whether appeal or reopening is possible.

## 9. Automatic following

Filing a complaint automatically adds the project to Following.

The complainant should receive updates about status changes.

## 10. Complaint traceability

Layer 3 should show complaint status in citizen language.

Layer 4 should summarize relevant complaints.

Layer 5 should contain the full complaint and review trace, subject to privacy and safety rules.

The trace should include:

- applicable complaint policy;
- support threshold;
- support window dates;
- quote deadline;
- fiscalizer quote and deliverables;
- reserved funding status after quote publication;
- support and objection counts as separate signals;
- reviewer/fiscalizer admission result;
- affected scope and any scoped systemic pause;
- referral package where applicable;
- authority or court order where legal effect occurs.

If the complaint reveals a verified material information problem, Layer 5 should also link the complaint to the affected claim, correction, verified discovery, responsibility event, and any reward or reputation effect where the protocol allows.

## 11. Protection against misuse

The system must allow complaints, including critical ones, without making them impossible for ordinary citizens.

At the same time, repeated bad-faith complaints can have consequences.

Possible safeguards:

- structured categories;
- evidence prompts;
- request for clarification;
- review stages;
- visibility of status;
- reputation effects for repeated abuse;
- protection for good-faith complainants;
- protected identity requests for verified complainants exposed to retaliation or safety risks.

## What this flow should not do

The complaint flow should not:

- confuse complaints with comments;
- require legal expertise;
- hide complaint effects;
- allow anonymous formal complaints;
- block projects automatically without rule-based justification;
- treat objections as a numeric veto against complaint review;
- show reserved review funding totals to the fiscalizer before quote publication;
- let the platform replace courts, regulators, or competent authorities for regulated project suspension;
- treat complaint admissibility or referral as final responsibility;
- turn a pending systemic pause directly into a negative reputation update;
- expose sensitive complainant information without rules;
- allow unresolved blocking complaints to disappear silently;
- punish good-faith complaints just because they are rejected.
- reward unsupported accusations as verified discoveries.

## Design rule

> Complaints must be easy to file, hard to ignore, and structured enough to review fairly. They may reveal material information problems, but only review-confirmed discoveries create responsibility, reward, or reputation effects.

## Status

Accepted as Citizen Complaint Flow v0.
