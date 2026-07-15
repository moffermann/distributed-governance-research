# Errata — v1.14

Corrections to the deposited working paper, kept public so they are as findable as the record itself.

- **Record:** v1.14, version DOI [`10.5281/zenodo.21311851`](https://doi.org/10.5281/zenodo.21311851)
  (published 2026-07-14). Concept DOI (always latest): `10.5281/zenodo.21193846`.
- **Applies to:** `drafts/paper.md` (EN, authoritative) and `drafts/paper.es.md` (ES mirror).
- **Status of each item:** **✅ CORRECTED in v1.15** (repository; pending deposit). None of these changed any reported number. This errata remains as the public record of what the deposited v1.14 got wrong.

---

## E-1 — Core v0's planning modalities are never laid out, so the paper reads as centrally planned in
its framing and as distributed in E9

**The issue.** Core v0 has two operating modalities that determine how the *planning layer* (the
eligibility frame and per-sector budget shares) is constructed:

- **Open mode** — planning is **distributed by construction** (citizens/communities build and revise
  the scope; it is visible, versioned, pluggable). This is the architecture's designed default.
- **Tutored (and closed) mode** — **centralized** scope construction is admissible, as a *transition*
  mechanism, with every material tutored decision and every tutored silence becoming a public
  governance-resolution object.

The paper never explains this Open-vs-Tutored distinction as such, early and plainly. As a result the
text is internally inconsistent about whether Core v0 is centrally or distributedly planned:

- **The general framing reads as centralized.** Citizens are described as approving projects within a
  **mandated** planning scope — a "legally mandated share" (§ intro, ~line 58), "a mandated share"
  (§ Case, ~line 337), "mandate-bound … recorded allocation mandate" (§5, ~lines 395, 684) — without
  qualifying the planning as centralized or distributed. Left open and paired with mandate/tutored
  language, it defaults to **centralized** planning, which is only correct in **tutored** mode.
- **E9 assumes distributed.** Finding 9 (`e9-fullstack.mjs`, ~lines 1073-1084) explicitly "compares
  central and distributed versions of all three layers," treating Core v0 as having **distributed**
  planning (the Open-mode default) and attributing a small standalone planning advantage
  (≈ +3 points of the reference; the ~0.025-0.026 figure restated throughout).

So the same object is treated as centrally planned in the narrative and as distributed in the
experiment that isolates planning.

**Why it is not fatal.** The reconciling statements already exist in the formal section — "centralized
construction of scope weights is a property of the closed and tutored transition modes, not of the
architecture" and "the architecture's designed trajectory distributes its construction (open mode)"
(§5, ~lines 685-688, 697-699). The architecture is coherent; the *exposition* is not. The pieces are
buried in §5 and never connected to the framing, while the small planning result is repeated many
times and the **modalities are never explained** — so the apparent contradiction stays in plain view.

**Correction planned for v1.15.**

1. Introduce the **Open / tutored / closed operating modalities** explicitly and early (a short
   dedicated paragraph before the results), stating that Open mode is **distributed planning by
   construction** and that **centralized planning is a transition mode (tutored/closed) only**.
2. Qualify every "mandated / mandate-bound planning" phrasing as the **tutored-mode** case, not the
   architecture, so the default reading is no longer "centralized."
3. Make E9's assumption explicit at the point of use: E9 compares centralized vs **distributed**
   planning **because Core v0's planning is distributed in Open mode**.
4. Pair at least one of the repeated ~0.025-0.026 restatements with the modality it presupposes,
   instead of restating the number without the frame.

This is a clarity/consistency fix. It does not alter the simulations, the Shapley attribution, or any
reported magnitude.
