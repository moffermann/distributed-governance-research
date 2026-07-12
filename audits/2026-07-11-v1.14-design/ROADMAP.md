# E4 / v1.14 roadmap — priority-ordered (2026-07-11)

Author directive (2026-07-11): **max priority = finish the formalization + the Codex iteration loop and fold E4 into
the paper.** Everything else (interactive page, extra legs, richer models) waits. Proceed with the Codex-directed
work where it makes sense.

## P0 — NOW: close the formalization (v6), then integrate into the paper
The v5 code critique (`CRITIQUE_v5_SUMMARY.md`) returned NEEDS CHANGES (0 cleared / 7 partial / 0 not),
capability criterion NOT met, multiplier-relapse MATERIAL. Codex's shortest path to preregisterable (adopted):

1. **Resolved+hashed evidence manifest + fail-closed validation.** Hash the *actual* production configuration (world,
   Monte-Carlo budgets, swept keys, coverage factors, optimizer, rival ranges — not just the contract). Validate the
   real executable domain: finiteness, integrality, positive Beta shapes/costs, ordered bounds (`c_lo<c_hi`),
   region membership, registered-parameter liveness. Fail closed. (Codex blocker #2.)
2. **Joint `D_F` + measured nested `R_α`; certified evaluator.** Replace the 4-key corners+center slice with a
   genuinely joint set over the uncertain coordinates (with declared fixed-vs-uncertain split and dependence),
   sampled with stable substreams; report extrema with endpoint (Monte-Carlo) uncertainty; fail closed if
   certification fails. (Codex blocker #1 — the headline fix.)
3. **Repair the state machine.** Pass `m_Ralpha` to `classify`; set-based materiality (per α); all-degenerate/
   insufficient-cell abort; retained-world minimum; whole-world bootstrap that recomputes `o_min`; genuine numerical
   certificate; recursive finite/ordered schema. (Codex blocker #3.)
4. **Fixtures through the FULL pipeline.** Strong-positive / strong-negative / null / true-boundary run through
   evidence→classify→render inside declared domains; add omitted-coordinate + optimizer adversarial fixtures; make
   strong-distributed isolate harm-myopia (must weaken when `pi_opp→0`). (Codex blocker #5 / capability.)
5. **Embargo = release boundary, not a formatter.** Route EVERY output byte (incl. rival + hash lines) through the
   sole adapter; authenticate schema/contract/engine/config hashes + estimand kind; legacy engines behind an
   explicit reproduction-only runtime guard + namespace; a legacy-feed attempt is a FAILING release test.
   (Codex blocker #4 — flips multiplier-relapse to NO.)
6. **Analytic proof + regression; anti-value attribution; companion alignment.** Ship the narrow joint-normal
   fixed-threshold proof + a normal-limit regression test (Codex already matched it within 1.35 MC SE); add harm-
   channel / visibility-bin attribution tests; align or supersede `research/e4-value-estimation-foundation.md`
   (retire the project-invariant projection equation; Prelec = instrument, not target `w`) and `E4-empirical-anchors.md`.

**Then:** re-run the Codex CODE critique (v6). Iterate until ready-to-preregister + capability met + multiplier-
relapse NO. **Then integrate E4 into `drafts/paper.md` (+ `.es.md` mirror)** as the mechanism-governed parity
surface (partial-ID atlas + theorem + honest limits), preserving 13/13 EN↔ES parity.

## P1 — LATER (after P0): improvements, deferred by author
- **Interactive explorer** polish (published proto: claude.ai/code/artifact/f1a500f1…): selectable axes, more
  presets, accessibility passes. Communication tool, NOT formal evidence.
- **Administrative-cost leg** (`ADMIN-COST-LEG.md`) — separate `m_admin` estimand/experiment.
- **Leakage / corruption leg** (`LEAKAGE-CORRUPTION-LEG.md`) — separate `m_leak` estimand/experiment.
- **Richer anti-value** (`ANTIVALUE-MODELING.md`) — signed voice (mobilization as well as suppression), harm-weighted
  aggregation `A` as a separate normative estimand.
- **Country presets** for the explorer — named `R_α` boxes, only once anchored to data.

## P2 — FUTURE
- Bridge-measurement protocol / gamified "rate + guess others" app to elicit target `S⁺, H, v_p` (existence +
  direction only; author constraint: no surveys/field/paid data; app is the only instrument).

## Invariants (do not drift)
- This experiment stays CLEAN: selection quality at MATCHED budget only. Cost and leakage are separate legs.
- No calibrated multiplier; no `×`/`D/C`; parity at 0. Capability guardrail: neither gerrymandered to a null nor to
  a positive. EN↔ES mirror discipline for any paper edit. Zenodo deposit remains author-gated.
