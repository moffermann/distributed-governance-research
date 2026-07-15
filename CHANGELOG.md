# Changelog

Version DOIs live in `CITATION.cff` and the Zenodo record; paper headers cite the concept
DOI `10.5281/zenodo.21193846` (see `RELEASING.md`). English (`drafts/paper.md`) is
authoritative; Spanish (`drafts/paper.es.md`) mirrors it at section parity.

## v1.14 — 2026-07-14

Honest reframing and consolidation of how the pre-registered result is reported. No change
to the code's numerical results; the changes are to framing, scope, and length.

- **The pre-registered NO-GO is reported as a scoped calibration decision, not a failure.**
  The symmetric selection-only gate compares coverage against a **competent, harm-aware
  central value reader** (the harm-myopia parameter is defined but unused by the central
  estimator) at delivery parity, with the central retaining only a bounded credit tilt. Its
  pooled median Δ = 0.025 did not clear the pre-set 0.05 rebuild bar → under the frozen rule
  the earlier compound value-per-budget multiplier is retired. The manuscript now states the
  correct causal order (the threshold miss triggered the *registered* decision; the test
  construction only bounds the *scope* of that decision — a calibration decision under that
  comparator, **not** a verdict on the architecture) and no longer describes the benchmark as
  "de-pathologized" or the residual as a lower bound on the real-world gap.
- **Leads with the contribution.** Abstract, introduction, conclusion, and the version banner
  now open with the architecture, the credit-versus-coverage mechanism, and the
  channel-separated findings (selection, verified delivery, administrative cost); the gate
  appears afterward, in scope.
- **Consolidated.** The explicit negative-verdict restatements were reduced from ~9 to the
  minimum honest-disclosure set (full treatment in §6 and Appendix E4; compact pointers in
  the abstract, intro, and conclusion). Net reduction on the order of ~150 lines.
- **E10 cost labels corrected.** "conservative low-spread floor" (the floor is not literally
  symmetric); "declared asymmetric-cost scenario / declared advantage" (not "realistic /
  genuine"); "assumed net-budget difference" (not "direct fiscal saving"); "CAPEX-excluded,
  not amortized"; identical cost perimeters.
- **Scope.** The architecture is general across the project-shaped discretionary domain; the
  empirical anchors are predominantly infrastructure and procurement, with the broader
  generality flagged as a design claim not yet empirically validated.
- **Spanish edition** mirrors all of the above with the technical anglicisms removed
  ("gate" → "prueba de decisión prerregistrada" / "compuerta de oráculo" / "umbral de daño";
  "NO-GO" → "resultado negativo (no continuar)").
- Reviewed across successive adversarial and author panels (integrity-guardian gated).
  EN/ES section parity preserved. Renders: `renders/paper-v1.14-{es,en}.pdf` and the two ES
  short-form editions (`lectura-simple`, `resumen-ejecutivo`).

## Earlier

- **v1.12** — latest *deposited* version (DOI `10.5281/zenodo.21252911`, 2026-07-07).
- **v1.13** — Path B reframe (multiplier retired); held as an unpublished Zenodo draft.
