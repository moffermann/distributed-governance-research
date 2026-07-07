# Reviewer cover note — current version and honest framing (2026-07-07)

This note supersedes the version references in the individual reviewer packets under `external-review/` (which were written against earlier drafts). Send it *with* whichever profile packet fits the reviewer.

## What to review

- **Working paper v1.10** — `renders/paper-v1.10-en.pdf` (EN) / `renders/paper-v1.10-es.pdf` (ES), or the screen-reader HTML editions. Concept DOI (always resolves to the latest version): **10.5281/zenodo.21193846**; this version: 10.5281/zenodo.21249063.
- **Companion computational paper v0.5** (Offermann 2026b) — the experiment program the master now cites and consolidates: `distributed-governance-experiments/drafts/paper.pdf`, concept DOI **10.5281/zenodo.21246089**, this version 10.5281/zenodo.21249060.

## What we already know is weak (please attack anyway, but calibrate)

We run our own adversarial review rounds and report them, bugs and all. As of v1.10:

- **The architecture findings (F1–F6)** are the mature core: population-invariant advantage, the existential default layer, structural attentiveness, the complements-not-substitutes deterrence stack, the semi-open dial, and the budget-release/verification-capacity results. These live in fully reproducible deterministic engines and have survived two review rounds.
- **The machine-verification finding (F7)** is the least mature and was *rebuilt* after our second review round caught a construct bug (a label leak in the evidence panel). The corrected result is capability-tiered and partly exploratory (small event counts, disclosed decoding differences). Treat its numbers as directional.
- **The collusive-adversary finding (F8)** is new and pessimistic-by-construction; it scopes the verification claims to a non-colluding adversary and is explicitly a single-author adversary model.
- **All behavioral priors are LLM-elicited**, pending the human instrument (a D-lite pilot is protocolled). **The status quo is audit-calibrated** and does not model the incumbent's non-delivery functions. **The legal layer (procurement, annuality, audit independence) sits beneath the model.** These are declared limitations, not hidden ones.

## The independence we most need

Our review rounds are simulated by the same author ecosystem — process discipline, not independent validation. The single most valuable thing an external reviewer can give us is genuine adversary-side independence: does the collusion analysis (F8) hold, and what does a real fraudster do that our model does not? Second: does the machine-verification methodology (F7) survive an evaluation specialist's scrutiny beyond our own?

## Profile packets

Use the matching brief in `external-review/Reviewers/` (academic, public-law, practitioner, systems-architect, non-expert) or `core-v0-review-packet.md`; this note updates their version pointers and adds the F7/F8 maturity caveat.
