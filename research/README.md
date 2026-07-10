# research/ — manifest and reading order

**Updated 2026-07-10.** `research/` accumulates formal models, simulation designs/results, and design
notes across the project's evolution. Many files are **historical** and carry supersession banners. This
manifest names the **current authoritative set** so a reviewer does not have to reverse-engineer it.

## Start here (current, controlling)
| Artifact | Role |
|---|---|
| `claim-and-estimand-contract.md` | **Controlling spec** for what the simulation may/may not claim. Retires the calibrated multiplier; defines the estimand, symmetry conditions, and interpretation. Read this first. |
| `../audits/2026-07-10/remediation-roadmap.md` | The live publication-readiness roadmap (post-audit). |
| `../audits/2026-07-10/` | The independent audit (5 Codex agents) + the pre-registered **symmetry gate** (design, results, diagnostics). |
| `../scripts/simulation/e5-sp-symmetry-gate.mjs` | The **genuinely pre-registered** symmetric selection-only test (NO-GO). The honest selection contrast. |
| `../scripts/simulation/e5-sp-model.mjs` | The v2 (S/P) exploratory engine. **Its headline multiplier is retired** (see the header STATUS block); kept for provenance. |
| `../drafts/paper.md` / `paper.es.md` | The bilingual master paper (Path B: architecture + qualitative mechanism; multiplier retired). |

## Governing result (one line)
A pre-registered symmetric, selection-only stress test found the distributed-minus-central selection
advantage **positive in every pre-specified cell but small** (pre-registered pooled median ~0.025 of a full-information
benchmark, below its 0.05 research-program rebuild gate — not a policy-materiality threshold; post-hoc ratio-of-sums 0.026). The load-bearing contribution is the **architecture + the
mechanism direction**, not a calibrated multiplier.

## Historical / superseded (carry banners; kept for provenance)
- **v2 mechanism design & pre-registration:** `e4e5-value-model-v2.md`, `e5-sp-preregistration.md`
  (post-exploratory), `e5-sp-paper-propagation.md` (**CANCELLED**). Their ~2.0×/~2.8×/~2.1× headlines are retired.
- **E4 analytical/harm-blindness line:** `e4-analytical-backbone.md`, `e4-v3-*`, `e4-v4-*`, `e4-v5-capture-design.md`,
  `e4e5-*` notes, `e4-calibration-targets.md`. Magnitudes are model-internal; the mechanism *direction* stands.
- **Earlier internal audit:** `audit-2026-07-10.md` (6-agent cleanup) — superseded by `../audits/2026-07-10/`.
- **Raw result files** (`*-results*.txt`, `*.json`) are outputs of their named apparatus; not current headlines.

## Conventions
- A file with a `🛑`/`SUPERSEDED`/`RETIRED`/`CANCELLED` banner at the top is **not** current — follow the
  banner's pointer. Cross-references are validated by `../scripts/check-anchors.mjs`.
- Naming note (deferred cleanup, roadmap T6.2): the `e5-value-delivery-*` (paper's E5) and `e5-sp-*`
  (v2 agenda-capture engine) families share the "E5" prefix but are different experiments.
