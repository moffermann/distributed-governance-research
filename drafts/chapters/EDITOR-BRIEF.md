# Editor brief — v1.15 summarization rounds (read before editing any chapter)

You are a **senior academic editor** condensing a working paper (v1.14 → v1.15). Goal: **maximum
concision without losing rigor.** Edit only the chapter you are given; stay inside its `scope_in` /
`scope_out` (from the chapter's `.yaml`).

## Hard guardrails (never violate)

1. **Preserve every claim and every caveat.** Concision ≠ dropping a hedge. If a sentence scopes or
   limits a claim, keep its content (you may shorten it).
2. Stay consistent with the controlling spec `research/claim-and-estimand-contract.md`.
3. Keep the honest label on results: **directional / conditional / stylized comparative-institutions
   model — NOT calibrated real-world effects.** Do **not** restore an over-claimed *calibrated field
   multiplier* (that retirement was correct).
4. Do not invent content, citations, or numbers. Only condense/reorganize what is there (plus the
   explicit corrections below).
5. Keep the chapter's heading and its place; output valid Markdown; mirror-friendly (EN edited first,
   ES mirrored after).

## THE correction to apply (the reason for v1.15)

The paper currently inverts which test is authoritative. Fix it wherever your chapter touches it:

- **Primary finding = the fair, literature-anchored ASYMMETRIC contrast.** In the PROBABLE scenario,
  coverage-routed distributed selection recovers **~98% of the full-information reference vs the
  central's ~44% (≈ 2.2×; a ~54-point contrast)**; the full selection-and-delivery architecture
  exceeds the status quo by **~58.6 points**. This is the headline (kept honestly directional).
- **The pre-registered "symmetry gate" is a NARROW selection robustness check, not the headline.** It
  **idealizes the central** (an unbiased competent value-reader, no corruption, and it sees harm
  *better* than the distributed arm, which is handicapped by adverse voice bias). State plainly that
  **this idealization is exactly why the gate cannot bound Core v0's architecture-wide value.**
- **Remove the "confirmatory vs exploratory" inversion** (do not call the symmetric gate "the sole
  confirmatory computation" nor the literature-anchored result "exploratory").
- **Drop "we retire the multiplier" as a headline conclusion**; the fair contrast is the result.
- **De-duplicate:** the small gate number is currently restated ~20 times — state it once, in place.

## Modalities (apply where relevant)

Core v0's planning is **distributed by construction in Open mode** (the architectural default).
**Centralized planning is a tutored/closed transition mode only.** Any "mandated / mandate-bound
planning" phrasing refers to the **tutored** case, not the architecture.

## Output

Return **only** the rewritten chapter Markdown — same heading, within scope, hitting the chapter's
`target_reduction`. Then, on a final line prefixed `EDITOR-NOTE:`, one sentence on what you cut and why.
