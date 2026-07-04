# A038 - Reputational Exclusion as a Sanction Without Due Process

## Status

Manuscript-review round brief. Pending paired review; no accepted resolution yet.

## Description

The architecture's delivery layer depends on reputational consequences with teeth: Model 1 includes a reputational continuation value R whose loss deters diversion, E5's verified-weak sensitivity shows the pool "cleansing" as detected diverters are excluded, and E6 models executors competing under exclusion risk. Legally, excluding an actor from future public work is not feedback — it is an inhability, a sanction. Sanctions in the continental tradition require a legal basis (no sanction without prior law), a defined procedure with prior hearing, proportionality, and recourse; and where the exclusion follows from scores computed over recorded events, it is additionally an automated decision with legal effects, triggering its own statutory safeguards. The corpus's reputation machinery — signal, reviewed input, role-specific update, appeal status field — is an evidentiary chain, not a sanctionatory procedure, and no document supplies one.

## Location in current project

- [[H014-reputation-architecture|knowledge/hypotheses/H014-reputation-architecture.md]] defines the input chain and records an "appeal or review status" field without defining the procedure behind it.
- [[51_ROLE_REPUTATION_RESPONSIBILITY_AND_C012_RESOLUTION|docs/51_ROLE_REPUTATION_RESPONSIBILITY_AND_C012_RESOLUTION.md]] governs when negative responsibility reaches a role, not what process the affected actor is owed.
- [[56_VALUE_FULFILLMENT_REPUTATION_AND_C018_RESOLUTION|docs/56_VALUE_FULFILLMENT_REPUTATION_AND_C018_RESOLUTION.md]] ties reputation to verified fulfillment rather than closure labels — a fairness rule, not a due-process one.
- [[simulation-results|research/simulation-results.md]] measures exclusion's deterrent and cleansing value (E5) and declares the E6 boundary — reputation informs funders' choices and eligibility rather than auto-assigning — without noticing that *eligibility* is exactly where the sanction lives.
- [[paper|drafts/paper.md]] relies on R and exclusion in Proposition 1, Finding 5, and Finding 6.

## Problem

The attack is that the architecture needs the sanction and has not built the process, and the two halves of that sentence are in tension it cannot wish away.

The deterrence results require exclusion to be credible and consequential: an executor who anticipates that confirmed diversion ends their access to public work behaves differently, and E5's incentive condition prices exactly that. But the more consequential the exclusion, the more clearly it is sanctionatory in the legal sense — comparable to debarment from a public suppliers' registry, which in the pilot jurisdiction carries statutory grounds, a procedure, and judicial review. A platform that produces the same effect through reputation scores does not escape the doctrine by renaming the instrument; it invites courts to find an unregulated parallel sanction regime.

The automated-decision layer compounds it. Where eligibility gates or funder-facing summaries are computed from reputation updates, an excluded executor faces a decision produced by rules over data, with material legal effect. Modern data-protection statutes — including the pilot jurisdiction's new regime — grant rights against solely automated decisions with significant effects: human intervention, expression of views, contestation. The corpus's appeal-status field acknowledges the need and defines nothing: no deadline, no reviewing organ, no suspension effect, no standard of review, no distinction between contesting the underlying finding and contesting the score's computation.

And the fairness rules the corpus does have (time decay, severity weighting, recovery paths, no contamination by proximity) are substantive, not procedural. They constrain what the score may say, not what the affected actor may do about it. A substantively fair sanction imposed without process is still procedurally void in the legal orders the pilot targets.

Example:

```text
A contractor's milestone evidence is rejected, a diversion finding is
confirmed by review, and the resulting reputation update drops it below
the eligibility threshold that scope policy sets for guarantee-backed
work. The firm's counsel asks: under which law was this inhability
created, in which procedure was the firm heard before it took effect,
and before which body is it appealed with what suspension effect?
H014's audit trail answers what happened; no document answers any of
the three questions asked.
```

## Recommended resolution path

- Define a **Reputational Consequence Procedure** for any update that can affect eligibility for public work: notice of the proposed input, a hearing window before effect (except interim measures with their own test), a reasoned decision imputable to a named review role, an appeal path with declared suspension effect, and time limits — all recorded in the audit trail like every other consequential act.
- Split effects into tiers: informational visibility (signals, summaries) may follow review-lite paths; **eligibility-affecting** updates require the full procedure; protocol-level exclusion is reserved to grounds stated in advance in scope policy, mirroring debarment statutes.
- Declare the automated-decision boundary: no eligibility effect may follow from computation alone; a named human role adopts the decision, and the affected actor's contestation rights (against both the finding and the computation) are stated on the citizen-facing and executor-facing surfaces.
- Record in country implementation the mapping between platform exclusion and the jurisdiction's debarment regime, so the platform's consequence and the legal registry's consequence cannot silently diverge.

## Theoretical base and citations

- Alejandro Nieto, `Derecho Administrativo Sancionador` (2005): the canonical doctrine — sanctions require prior legal basis, typified conduct, culpability, and procedure; renamed instruments with punitive effect are judged by effect, not name.
- Danielle Citron, "Technological Due Process" (2008): automated systems that determine rights require notice, audit trails, and meaningful contestation designed into the system, not appended.
- Frank Pasquale, `The Black Box Society` (2015): scoring systems with material consequences and no process migrate power to the scorer.
- Jerry Mashaw, `Bureaucratic Justice` (1983): internal administrative process shapes rights as much as formal adjudication — the platform's internal review chain is where due process will be won or lost.
- Steven Kelman, `Procurement and Public Management` (1990): debarment and supplier-registry sanctions as the existing legal genre for exclusion from public work.

## Social reasons

The executors most exposed to wrongful exclusion are small local providers without counsel — precisely the actors the practitioner review warns are already squeezed by cash-flow gating. An exclusion machine without process concentrates the market toward large firms that can litigate, and turns every false positive into a family business destroyed by a score. Conversely, a well-defined procedure protects the architecture itself: exclusions that survive process are credible, and credibility is what the deterrence result needs.

## Conflicts of interest

- The platform and scope authorities benefit from frictionless exclusion: process is cost and delay on their side of the ledger.
- Incumbent large contractors benefit from a harsh, process-light regime that removes smaller competitors on thin findings.
- Excluded bad actors will exploit any procedural vacuum to litigate reinstatement, converting missing process into impunity.
- The research effort's headline results are prettier when exclusion is instant and costless; procedure would show up in the model as reduced p or delayed R, weakening the numbers.

## Inconsistencies to test

- H014 requires every update to record an "appeal or review status" while no document defines the appeal — a field pointing at a procedure that does not exist.
- The corpus insists closure labels never auto-update reputation (C018) yet allows reputation to auto-gate eligibility, policing the input side of automatism and not the output side.
- The E6 boundary says reputation "informs funders' choices and eligibility" as if the two were equally innocuous; informing choices is speech, gating eligibility is a sanction.
- A011's contestation surface covers moderation acts in tutored mode, and A013's review covers evidence quality, but neither reaches the reputational consequence built on top of them.

## Stress scenario

The first executor excluded in a pilot is a politically connected mid-size firm. Its counsel files for protection arguing an unregulated sanction imposed without hearing by an automated system, and wins an injunction suspending all eligibility effects of platform reputation. Every deterrence mechanism the delivery layer depends on is now judicially frozen; opportunists re-enter the pool; the architecture operates exactly as its opaque baseline until legislation catches up — and the headline that reputational consequences drive delivered value becomes the exhibit against the system.

## Review checklist

- Is every eligibility-affecting reputation update preceded by notice and a hearing window, with a named deciding role?
- Are the grounds for protocol-level exclusion stated in advance in scope policy, mirroring the jurisdiction's debarment statute?
- Does no eligibility effect follow from computation alone, and are contestation rights against finding and computation both declared?
- Are appeal deadlines, reviewing organs, and suspension effects defined and recorded in the audit trail?
- Does country implementation map platform exclusion to the legal debarment regime explicitly?

## Resolution output

None yet. Pending paired defense and review.
