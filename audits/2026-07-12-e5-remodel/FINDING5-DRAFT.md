# Finding 5 — re-modeled E5 draft (EN; apply after Codex round-2 confirms; ES mirror after)

Numbers from `npm run e5:delivery` at commit 418c7cd (PROBABLE world). Marked ⟨n⟩ where a round-2 fix could shift them.

---

**Finding 5: delivered value, not allocation, is where the architecture earns its keep — and the two layers
multiply.** A fifth experiment (`scripts/simulation/e4-v5/e5-delivery.mjs`, rebuilt on the clean E4 engine) adds the
execution stage the first four omitted, as an **independent** delivery regime crossed with the two selection regimes —
a four-cell (selection-by-delivery) design so each layer reads separately and jointly on the *same* funded portfolios.
Executors have hidden types: an intrinsically honest share deliver, the rest divert whenever a temptation draw beats the
regime's deterrent `p·[(1−a(1−r)) + γ + R]` (detection `p`, advance exposure `a`, recovery `r`, guarantee `γ`,
reputational stake `R`) — Okun's leaky bucket. The **opaque** regime is a weak-control status quo whose emergent
value-loss reproduces the Olken (2007) missing-expenditure moment (~⟨24⟩%; IMF's ~30% public-investment inefficiency is
a broader process loss, and Reinikka & Svensson's (2004, *QJE* 119(2)) ~87% Ugandan capture is a tail, not the central
case); the **verified** regime is the architecture (a 10% advance plus a ~10% performance guarantee, retention,
recovery, and a reputational stake — magnitudes World-Bank-standard where they exist, otherwise declared).

Every cell is reported as a percentage of the same full-information oracle at perfect delivery (the E4 reference), so
there is **no compound multiplier**. Selection efficiency is exactly the E4 result (distributed ⟨98.2⟩%, central
⟨44.1⟩%); delivery efficiency is ⟨77.5⟩% opaque (diversion incidence ⟨21.7⟩%) versus ⟨95.0⟩% verified (diversion
⟨0.0⟩%). Read as two main effects: the **delivery** layer adds ⟨+7.7⟩ points under central selection and ⟨+17.2⟩ under
distributed; the **selection** layer adds ⟨+41.9⟩ points under opaque delivery and ⟨+51.4⟩ under verified. The
interaction is positive (⟨+9.4⟩ points): the two layers **compose multiplicatively**, not additively — an accounting
identity (delivered value = selected value × delivered fraction, applied per project), of which the positive
interaction is the level-effect signature. The full architecture beats the status quo by ⟨+59.1⟩ points of the oracle
(95% CI ⟨[+58.5, +59.7]⟩); an earlier version summarized this as a single compound value-per-budget multiplier, which
is **retired** — E5 now reports the layers as separate percentages.

Two honest refinements survive scrutiny. First, distributed coverage is not only a selection signal: the citizens who
routed the budget also observe delivery. But community coverage credibly lifts **detection**, not **recovery**
(clawback needs institutional follow-up), so the coverage-only delivery dividend is small (⟨+0.2 to +0.5⟩ points in the
weak-control regime; Björkman & Svensson 2009 with failed replications, Molina et al. 2016); the sizeable delivery gain
comes from the **formal** recovery channel (the verified regime / Core v0's evidence layer), not eyeballs alone — with
institutional linkage the dividend reaches ⟨+3.9⟩ points. Second, the verified regime's near-zero diversion is a
**conditional ex-ante deterrence** result (Olken 2007; Avis, Ferraz & Finan 2018; Becker 1968), not an empirical claim
of zero corruption: the deterrent binds before the act, so no one diverts and there is no one to exclude — reputation
works ex ante.

The result is robust. Value/complexity-correlated delivery risk (bigger projects harder to monitor) barely moves the
gain — the distributed arm funds higher-*value*, not higher-*cost*, projects, so coverage is not undone by delivery
risk. Across 20 seeds the full gain is tight (sd ⟨0.5⟩ points), and a joint Latin-hypercube sweep over eleven delivery
parameters keeps coverage ahead in ⟨100⟩% of the sampled space (median ⟨+59.7⟩, range ⟨[+52.7, +67.0]⟩). All magnitudes
are declared reference points from an identified-set calibration, not target-domain field effects; the administrative
*cost* of running each institution is a separate dimension (deferred to the cost extension), so delivered value here is
measured at **equal budget**.

---

## Notes for application
- Replace paper.md Finding 5 (lines ~904-949) + mirror in paper.es.md.
- Update the §6 E5 table row (line ~524) scope wording if needed; keep the "compound retired" language in the
  "Status of the earlier compound ratios" paragraph (~543-553) — it now also points to e5-delivery.mjs.
- Anchors to add to the reference list if missing: Olken 2007 (already in), IMF 2015, Reinikka & Svensson 2004 QJE,
  Björkman & Svensson 2009, Molina et al. 2016, Afridi & Iversen 2014, Avis Ferraz & Finan 2018, Becker 1968.
- Keep "2×2"/"four-cell" as design notation (allowed); NO ×/D-C performance notation, percentages of oracle only.
- Drop the old legacy-apparatus specifics (29-pt visibility gap, opportunist 0.28→0.21 pool cycling, the default-
  discovery-category sweep) OR move them to the satellite/appendix — the re-modeled E5 is one-shot (no pool cycling).
