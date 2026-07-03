# D025 - Defense Against A025: Rational Ignorance and Participation Decay

## Integration status

Second-round paired review draft. No accepted resolution yet; pending Phase 3 review integration.

## Attack reference

- Attack file: `attacks/A025-rational-ignorance-and-participation-decay.md`
- Attack title: `A025 - Rational Ignorance and Participation Decay`
- Source: second-round attack queue, rational ignorance and participation decay.

## Attack summary

The attack argues that each citizen's monthly civic allocation is individually small, so the rational return on carefully evaluating projects is near zero and most citizens will decline the attention the model appears to assume. Following Downsian logic, citizens route their allocation through the cheapest available channel: the public default, a stored profile, or a trusted delegate. The architecture supplies exactly those channels and treats their uptake as success, but each re-concentrates the judgment the model claims to distribute, so visible "distributed control" is exercised by a small, self-selected active core plus a handful of delegates and default rules. Unlike A009, the claim holds even under perfectly equal capacity, because it is the incentive structure of low-stakes individual choice, not the distribution of skills, that drives disengagement.

In the Macul sports pilot, the attack imagines 100,000 residents receiving about $1,000 per month; after launch novelty fades, perhaps 4% still evaluate projects manually, while the rest accept the public default, keep a stored profile, or delegate to a club. The multi-court project is described as "chosen by citizens," but the effective choosers are a few hundred active users, a handful of delegates, and one default rule.

## Objective evaluation

- Classification: founded as a behavioral prediction.
- Why it is founded: rational-ignorance and participatory-budgeting evidence both predict that active evaluation decays after launch, so a shrinking active core is a realistic outcome the architecture does not currently measure.
- Why it is not fatal to the architecture: the architecture never assumed universal active judgment; delegation, automatic profiles, system defaults, and AI-assisted context are designed intermediation that, unlike party machines or ministry discretion, is visible, revocable, and auditable, and low-information rationality through cues is a respected democratic mechanism.
- Difference of judgment: medium. Whether decayed active participation defeats the legitimacy claim depends on what the model promises; the project promises honest, observable intermediation rather than universal deliberation.
- Editorial distortion risk: medium. The attack would distort the project if it treats success as requiring every citizen to be an active evaluator. The project's position is that distributed control tolerates delegated and default judgment, provided the mix is measured and disclosed rather than overstated.

## Response

The defense is that the architecture designed its intermediation channels deliberately and made them visible, revocable, and auditable, so decay produces disclosed intermediation rather than the hidden intermediation of the current baseline.

Under P001, the correct comparison is not an attentive citizenry but today's completely disengaged one, where allocation already flows through party machines, ministry discretion, and opaque budget rules with near-zero observability. H041 frames Core v0 as improving that baseline rather than solving perfect participation, and P006 keeps participation simple precisely so that a cue-following citizen can act without deep study. When a citizen accepts the public default, delegates to a club, or runs an automatic profile, that is not a failure of the model but a use of channels the model built. Crucially, each channel is transparent: the automatic profile is a citizen-configured rule that is explicitly not a hidden system decision, delegation shows represented weight and concentration before and during action, and both generate system-produced reports from the audit trail rather than depending on voluntary disclosure. Low-information citizens who rely on trusted cues are exercising a legitimate democratic shortcut, not abdicating.

For Macul, a pilot where 4% evaluate manually and the rest default or delegate is not automatically illegitimate. What matters is whether the platform can show that mix: how much of the multi-court funding came from deliberate evaluation, how much from stored profiles, how much from delegates, and how much from the untouched public default. If it can, journalists and auditors can judge the real texture of "citizen-allocated," and citizens can revoke a delegate or edit a profile the moment they disagree. The attack is right that this observability is not yet a first-class transition metric.

The concession is genuine. If the active core shrinks far enough, distributed control becomes intermediated control with better bookkeeping. Better bookkeeping is a real improvement over the status quo, but it is not the same as distributed judgment, and the architecture should not present default and profile allocation as considered choice. Engagement decay and active-core concentration are not currently tracked in functional transition maturity, and they should be.

## Project-document basis

- `knowledge/hypotheses/H041-distributed-participation-capacity.md:19` states that Core v0 should improve the current institutional participation baseline rather than solve perfect participation.
- `knowledge/principles/P006-layered-complexity-and-citizen-simplicity.md:13` formulates participation as simple to do and deep only when the citizen chooses to go deeper, which supports cue-based low-effort participation.
- `docs/28_CITIZEN_AUTOMATIC_ALLOCATION_PROFILE_FLOW.md:13` states that automatic allocation is a citizen-configured rule and explicitly not a hidden system decision.
- `docs/28_CITIZEN_AUTOMATIC_ALLOCATION_PROFILE_FLOW.md:317` requires each profile run to remain visible in-app, forbidding silent modes that would hide allocation history or skipped-rule explanations.
- `docs/27_CITIZEN_DELEGATION_FLOW.md:167` states that concentration is a legitimate voluntary choice but must be shown before delegation, during action, in reports, and in administrative observability.
- `knowledge/hypotheses/H054-functional-transition-maturity-metrics.md:132` already lists the percentage handled by default allocation rules as a budget-migration metric, a hook for decay observability.
- `knowledge/hypotheses/H054-functional-transition-maturity-metrics.md:121` lists direct versus delegated participation as a citizen-adoption metric, the basis for active-core tracking.
- `docs/75_PARTICIPATION_EQUITY_INDICATORS_AND_A009_RESOLUTION.md:31` states that low participation and concentration signals may inform warnings and review without automatically blocking a project.

## Bibliographic basis

- Arthur Lupia and Mathew McCubbins, `The Democratic Dilemma: Can Citizens Learn What They Need to Know?` (1998): citizens who cannot study everything can still make reasoned choices by relying on trustworthy cues, so low-information participation is not the same as incompetent participation.
- Anthony Downs, `An Economic Theory of Democracy` (1957): rational citizens facing low individual influence economize on information, which the defense treats as expected and accommodated by design rather than denied.
- Brian Wampler, `Participatory Budgeting in Brazil: Contestation, Cooperation, and Accountability` (2007): participatory engagement concentrates in a mobilized minority, a pattern the platform should measure rather than assume away.
- Tiago Peixoto and Jonathan Fox, "When Does ICT-Enabled Citizen Voice Lead to Government Responsiveness?" (2016): digital channels attract narrow, self-selected users and decay without sustained incentives, supporting explicit decay observability.
- Mancur Olson, `The Logic of Collective Action` (1965): individually rational actors underinvest in collective goods, which motivates transparent defaults and delegation rather than a coercive participation mandate.

## Proposed improvements

Add engagement-decay and active-core observability to functional transition maturity:

- per-cycle shares of manual, profile-driven, delegated, and untouched-default allocation as a versioned public metric;
- active-core concentration indicators tracking whether the same minority persists across cycles;
- citizen-facing legitimacy language that distinguishes deliberate evaluation from default and profile carry-over;
- cadence-fatigue review that evaluates the monthly cycle for decay effects, not only for preventing dormant balances.

## Applies to

- Automatic allocation profiles;
- delegation;
- system default allocation rule;
- functional transition maturity metrics;
- administrative observability.

## Defense strength and residual risk

Defense strength: strong on the claim that the architecture's intermediation is designed, visible, revocable, and auditable, and strong on the P001 comparison against a zero-observability baseline. It is weaker on the claim that decay leaves distributed judgment intact.

Residual risk: if the active core shrinks enough, distributed control collapses into intermediated control that is merely better documented, and the small active cohort's preferences may be displayed as the aggregated will of the whole. The system can measure and disclose this, but measurement does not by itself reverse decay, and the architecture should not overstate default and profile allocation as considered choice.

## Decision

The attack is founded as a behavioral prediction but comparative in force. Phase 3 should add engagement-decay and active-core concentration metrics to functional transition maturity (H054) and bound citizen-facing legitimacy language, without mandating universal direct participation.
