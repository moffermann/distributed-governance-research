# A042 - The Unregulated Release Valve: Calendar Budget Release Freezes the Machinery

## Status

Reviewed in paired review. Resolved in [[112_BUDGET_RELEASE_RULE_AND_A042_RESOLUTION|docs/112_BUDGET_RELEASE_RULE_AND_A042_RESOLUTION.md]] (author verdict 2026-07-07). Originated from the satellite Experiment E-1a (longitudinal engine, doi:10.5281/zenodo.21246089). Paired defense: [[D042-calendar-budget-release|defenses/D042-calendar-budget-release.md]].

## Description

The architecture specifies allocation, milestone-gated disbursement, and verification — but is silent on *when* the implementing authority releases budget into the machinery. That silence is not neutral: it is a load-bearing operational variable the corpus left to accident. Release the whole year on day zero and months of budget freeze in execution escrow while the verification queue saturates; release one-twelfth per calendar month and projects die unfunded in slow months through funding-window expiry. And where fiscalization capacity is scarce, no release schedule recovers delivered value — over-release actively destroys it. A corpus that regulates every downstream act but not the upstream tap ships a pipeline that a well-meaning treasurer can freeze on the first day.

## Location in current project

- [[104_CLOSURE_DEADLINE_EXPIRY_AND_C040_RESOLUTION|docs/104_CLOSURE_DEADLINE_EXPIRY_AND_C040_RESOLUTION.md]] — funding-window expiry, the valve that converts fragmentation into project mortality.
- [[110_OPERATING_REGIME_LADDER_AND_SEMI_OPEN_MODE|docs/110_OPERATING_REGIME_LADDER_AND_SEMI_OPEN_MODE.md]] — the semi-open envelope is the carryforward vehicle a release rule needs.
- Satellite evidence: `adversarial-abm/RUN_2026_07_06_EXPERIMENT_E1A_RESULTS.md`.

## Problem

Verification capacity is the pipeline's ceiling before it is the anti-fraud instrument, and the release schedule interacts with it: releasing faster than the delivery-and-verification pipeline can process inflates committed-but-undelivered capital without raising delivered value. No corpus object told a deployment to meter release to its pipeline; the default behaviors (dump it all, or split by calendar) are exactly the two that freeze it.

## Recommended resolution path

- Add a release-policy field to the operating-mode configuration: meter release against a work-in-progress ceiling calibrated to pipeline throughput and cycle time, not the calendar.
- State the dependency: verification capacity must be sized to the release plan.
- Bind the rule to a carryforward instrument (the semi-open envelope); degrade to within-year metering under strict annuality.

## Theoretical base and citations

- J. D. C. Little (1961), "A Proof for the Queuing Formula: L = λW" — the WIP/throughput identity behind the ceiling.
- Spearman, Woodruff & Hopp (1990), "CONWIP: A Pull Alternative to Kanban" — release-against-completions dominates push under variability.

## Social reasons

A frozen pipeline delivers less than the opaque system it replaced while looking modern — the worst outcome for citizens, and one that discredits the design for a reason that has nothing to do with the architecture and everything to do with an unregulated tap.

## Inconsistencies to test

- The corpus prices control capacity (docs/103) but never related it to the release rate that determines whether that capacity is the binding constraint.

## Stress scenario

A national program funds twenty municipalities and transfers each its full annual allocation in January. Verification queues saturate; escrow swells; year-end evaluations show frozen capital and low delivered value, and the program is judged a failure of the architecture rather than of the release schedule nobody specified.

## Review checklist

- Does the scope configuration carry a release policy metered to the pipeline?
- Is verification capacity sized to the release plan?
- Is the rule bound to a carryforward instrument, degrading gracefully under annuality?

## Resolution output

Resolved in docs/112: pull against a verification-calibrated WIP ceiling, conditioned on the outstanding-commitment stock, bound to a carryforward instrument, with verification capacity made an explicit sizing decision.
