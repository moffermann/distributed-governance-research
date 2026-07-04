# E6 Design — Endogenous Execution Quality Under Reputational Competition

## Status

Pre-registered experiment design. Written before implementation and before any run; the Predictions section is committed in advance, per the corpus's adversarial discipline. Motivated by an author hypothesis that E5 left unmodeled: E5's executors have fixed types — they divert or deliver, but never *improve*. The author's claim is an incentive channel beyond deterrence: **"if you know you can be excluded, you improve your quality to become more competitive in a high-visibility environment."** That is the career-concerns/market-discipline channel: visible reputation plus competitive assignment should make execution quality endogenous — the institution not only filters bad executors (E5's cleansing) but raises the standard of everyone who stays.

## The question

Holding selection fixed and removing diversion entirely (E5 already measured it), does *measured, visible reputation with reputation-weighted assignment* cause executors to invest in execution quality — raising delivered value beyond anything deterrence explains?

## World

- Funded portfolio per seed from the architecture's selection (E4 open-vector regime, d = 0.8), N_p = 200, scarcity 3×, 24 monthly cycles, 20 seeded runs. Executor pool of 120; all honest (no diversion — the E6 channel is quality, isolated from E5's).
- Each executor has fixed **ability** a_i ~ U(0.3, 0.9) and chooses **effort** e_i ∈ [0, 1] each cycle. A delivered milestone's quality is q = 0.25 + 0.45·a_i + 0.30·e_i (bounded to [0,1]). Effort is costly (convex), so absent returns, rational effort decays toward zero.
- **Reputation** R_i = running mean of an executor's verified milestone quality — recorded only where the regime measures delivery.
- **Behavioral rule** (bounded rationality, seeded): each cycle, with probability 0.3, an executor compares itself to a visible high-assignment performer and moves its effort 20% toward that performer's effort (imitation of success — possible only where reputation and assignments are visible); where nothing is visible, effort decays 10% toward zero (cost minimization); small seeded exploration noise (±0.05) throughout.

## Arms (identical world and pool per seed; the institution is the only difference)

| Arm | Quality measured? | Reputation visible? | Assignment rule | Reads as |
|---|---|---|---|---|
| B1 | no | no | random | opaque status quo: quality invisible, work arrives regardless |
| B2 | yes | yes | random | the mirror without the market: visibility with no assignment consequence |
| B3 | yes | yes | reputation-weighted | the architecture: visible track record competing for future assignments |

B2 exists to decompose the author's hypothesis: if effort rises in B3 but not B2, the driver is the *competitive consequence*, not visibility alone.

## Metrics

Per arm, mean ± sd over 20 runs: mean effort trajectory (cycles 1/6/12/24); mean delivered quality trajectory; delivered value V = Σ θ·q·budget per unit budget; corr(ability, assignment share) at cycle 24 (does the market learn who is good?); assignment concentration (Gini) at cycle 24.

## Pre-registered predictions (committed before first run)

1. **The author's hypothesis:** in B3, effort and delivered quality rise cycle over cycle, and delivered value ends materially above B1 — an incentive gain with zero diversion in the model, i.e., not explainable by deterrence.
2. **The mirror is not the market:** B2 shows little or no effort gain over B1 — reputation without assignment consequences does not pay for effort, so it does not buy it.
3. **The market learns ability:** corr(ability, assignment share) rises toward a clearly positive value in B3 and stays near zero in B1/B2.
4. **The declared trade-off:** B3 concentrates assignments (higher Gini) — reputational meritocracy has an A010-flavored concentration cost that the corpus's concentration-visibility machinery exists to watch.

If any prediction fails, the failure is reported as a finding.

## Result-determining assumptions, declared

The effort-to-quality coefficient and effort-cost shape are plausible, not calibrated; the behavioral rule is imitation-of-success rather than explicit optimization (results should be read as directional); ability is fixed (no learning-by-doing channel); the pool is closed (no entry of new executors attracted by a fair market — a channel that would plausibly *strengthen* the author's hypothesis and is left for future work); and reputational esteem (caring about the mirror itself) is deliberately excluded, so B2 is a lower bound on visibility-only effects.

## What E6 changes in the paper if predictions hold

Finding 5 gains its incentive counterpart: the delivery layer's value is not only leak-sealing (E5) but standard-raising — the verified environment makes execution quality a competitive variable. The author's sentence becomes the finding's plain statement: knowing you can be excluded, and that your record wins you the next assignment, makes improving your quality the rational move.
