# A032 - Intertemporal Myopia and Long-Term Underinvestment

## Status

Proposed in second-round architecture attack. Pending paired Phase 3 review; no defense brief or resolution yet.

## Description

Monthly allocation cycles reward visible near-term outputs, and renewal windows re-expose long-horizon commitments to each cycle's shifting attention. This attack asks whether the system is structurally biased toward the present: whether hyperbolic discounting causes maintenance, prevention, and intergenerational infrastructure to lose to ribbon-cutting projects, and whether future citizens, who are unrepresented in every funding attempt, systematically lose. Unlike A006, which classifies and makes visible the continuity risk of obligations that already exist, this attack targets the formation bias that operates before any obligation is created: the systematic tilt of new funding away from long-horizon value in the first place, so that long-term projects are rarely proposed, rarely funded, and never accumulate into the obligations A006 would later protect.

## Location in current project

- `knowledge/hypotheses/H038-monthly-use-it-or-allocate-it-cycle.md`, monthly cycle, fallback routing, and near-completion preferences.
- `docs/72_CONTINUITY_RISK_CLASSIFICATION_AND_A006_RESOLUTION.md`, continuity classification of existing obligations.
- `docs/85_FUNDING_WINDOW_EXPIRY_AND_BUDGET_LIQUIDITY_SMOOTHING_RESOLUTION.md`, funding windows and renewal exposure.
- `docs/30_PROJECT_LIFECYCLE_AFTER_PUBLICATION_FLOW.md`, project lifecycle and closure horizon.
- `knowledge/hypotheses/H009-binding-evolutionary-planning.md`, Planning Scope Alignment and the unresolved roadmap horizon.
- `knowledge/hypotheses/H054-functional-transition-maturity-metrics.md`, transition metrics and value-and-results horizon.

## Problem

The allocation mechanism is tuned for flow and responsiveness: funds are assigned monthly so they do not lie dormant, default profiles favor projects close to completion, and each financeable lane must reach closure within a bounded window. These properties keep the system liquid and prevent zombie projects, but they also reward whatever pays off within the horizon of a citizen's attention. Behavioral economics predicts that individuals discount the future hyperbolically, over-weighting immediate, visible gratification and under-weighting deferred, abstract benefit. Aggregated across a monthly civic budget, this produces a strong tilt toward projects with near-term visible outputs and against maintenance, prevention, and infrastructure whose payoff arrives years or decades later. A new court is fundable this month; a thirty-year drainage backbone or a preventive-maintenance endowment is not, because its benefit cannot compete for present attention.

Renewal windows and funding windows deepen the bias. A long-horizon commitment cannot be locked in once; it must survive re-exposure to allocation attention at every renewal, so a project whose value depends on a twenty-year guarantee is hostage to each cycle's mood. And the beneficiaries with the largest stake in long-term investment, future citizens, are represented in no funding attempt at all: they cannot allocate, delegate, object, or complain. The system that promises to aggregate citizen valuations aggregates only present citizens' present valuations, and the future is a diffuse interest with no constituency. A006 protects long-term obligations once they exist, but this attack is that they will rarely come to exist, because the formation stage is biased against them before A006's protections ever attach.

Example:

```text
A commune's stormwater and slope-stabilization needs require a fifteen-year investment whose benefit is a landslide that never happens.
Month after month, citizens fund visible improvements: plazas, courts, lighting.
No one proposes the slope-stabilization project because it cannot close a funding window against such competition, and future residents who would benefit have no vote in any cycle.
A decade later a slope fails; the value that long-horizon investment would have protected is gone, and it was never even a funded obligation to protect.
```

## Recommended resolution path

- Add a `Time Horizon Profile` to projects and Planning Scopes classifying benefit horizon and payoff type (immediate output, maintenance, prevention, intergenerational), making long-horizon categories observable and their under-funding measurable.
- Allow long-horizon commitments to be funded through multi-cycle or endowment-style lanes that are not fully re-exposed to allocation attention every renewal window, reducing hostage-to-the-cycle risk while preserving auditability.
- Let default allocation profiles carry a transparent, versioned weighting toward prevention and maintenance categories, presented as a public protocol choice, so intertemporal bias is corrected in the open rather than left to present-biased attention.
- Introduce an explicit future-interest observability role: expose expected long-run value, deferred-harm-averted estimates, and an intergenerational-impact declaration so future beneficiaries are at least represented as information in each relevant funding attempt.
- Keep monthly liquidity and bounded windows as the Core v0 default, and treat multi-cycle lanes, endowment funding, and horizon-weighted defaults as the Extension v1+ instruments that address formation-stage myopia.
- Distinguish this formation-stage bias from the A006 protection of existing continuity obligations, so one mechanism helps long-horizon projects come into being and the other keeps them alive once they do.

## Theoretical base and citations

- Alan Jacobs, `Governing for the Long Term` (2011): democratic institutions systematically underinvest in policies that impose present costs for future benefits because present constituencies dominate.
- David Laibson, "Golden Eggs and Hyperbolic Discounting" (1997): hyperbolic discounting causes decision-makers to over-weight immediate payoffs and under-save for the future, even against their own long-run interest.
- Ted O'Donoghue and Matthew Rabin, "Doing It Now or Later" (1999): present-biased agents predictably procrastinate on costly actions whose benefits are deferred, such as maintenance and prevention.
- Jonathan Boston, `Governing for the Future` (2016): anticipatory governance requires deliberate institutional commitment devices because ordinary political incentives are biased toward the short term.
- Mancur Olson, `The Logic of Collective Action` (1965): diffuse, unorganized interests, including future beneficiaries, are systematically under-represented against concentrated present ones.

## Social reasons

The people with the greatest stake in maintenance, prevention, and durable infrastructure are often those who cannot advocate for it now: future residents, children, and the not-yet-born. Present-biased allocation converts their interests into an externality that no living constituency defends. When the deferred harm finally arrives, as a flood, a collapse, or an epidemic, it lands on a future community that had no voice in the decision to under-invest, while the present community enjoyed the visible projects that won the cycles.

## Conflicts of interest

- Promoters are rewarded for projects that produce a visible result within a cycle rather than deferred value.
- Executors may reframe long-horizon prevention as a short-term output to make it fundable.
- Authorities may let present-biased citizen funding cover visible works while quietly deferring the maintenance and prevention they should still finance.
- Delegates and profile designers may favor gratifying short-term categories to retain support.
- Incumbent budget-holders benefit when long-horizon obligations never form into competing distributed projects.

## Inconsistencies to test

- Monthly cycles prevent dormant balances, but they also privilege whatever pays off within a citizen's attention span.
- Bounded funding windows prevent zombie projects, but they force long-horizon commitments to re-win attention at every renewal.
- The system aggregates citizen valuations, but only present citizens can allocate, so future beneficiaries are structurally unrepresented.
- A006 protects existing continuity obligations, but nothing ensures long-horizon projects are formed and funded so that such obligations arise.

## Stress scenario

A commune runs the distributed model with strong participation for a decade. Every year, visible projects, courts, plazas, murals, and playgrounds, fund quickly and close on time. Maintenance of prior works, preventive infrastructure, and long-horizon resilience investments consistently fail to close their funding windows, because they cannot compete for monthly attention against gratifying new outputs. Administrators report a decade of high participation and completed projects, while the commune's built stock silently ages past its maintenance thresholds and its exposure to floods and slope failures grows. The eventual failures are attributed to bad luck, not to ten years of intertemporal myopia that the allocation mechanism quietly rewarded.

## Review checklist

- Are projects and scopes classified by benefit horizon and payoff type?
- Can long-horizon commitments be funded through multi-cycle or endowment lanes that are not fully re-exposed every renewal?
- Do default profiles expose any weighting toward prevention and maintenance as a public choice?
- Is expected long-run value and deferred-harm-averted information surfaced in relevant funding attempts?
- Are future beneficiaries represented at least as observable information, given they cannot allocate?
- Is the formation-stage horizon bias addressed distinctly from the A006 protection of existing obligations?

## Expected resolution output

A future Phase 3 review round should define a project time-horizon classification, multi-cycle or endowment funding lanes insulated from per-cycle attention, and horizon-weighted default rules plus future-interest observability that counter the systematic formation bias against long-term value.
