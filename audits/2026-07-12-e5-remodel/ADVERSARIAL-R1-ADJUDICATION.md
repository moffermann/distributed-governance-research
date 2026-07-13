# Adversarial round 1 — pro-Core-v0 auditor adjudication (2026-07-13)

Role: honest but **PRO-Core-v0** arbiter. Verdict on each of the 18 ranked attacks. JUSTIFIED = real technical/
methodological defect → apply. PARTIAL = real but bounded → minimal fix. DEFEND = unfounded / already-handled / does not
threaten a reported result → keep, with reason. **The core thesis is PRESERVED and the adversary itself agrees it should
be:** the fixed-PROBABLE arithmetic (Core v0 wins decisively), the full-stack diagonal holding in ALL named worlds, the
exact Shapley sum, the `nSec=1→E5` reduction, and the "greedy reference, not optimum" qualification all survive.

| # | attack | verdict | reason / action |
|---|---|---|---|
| 1 | [E10] wrong cost estimand (haircut on value vs net budget) | **JUSTIFIED** | Real. Admin cost should shrink the BUDGET before selection, not multiply delivered value. Adversary reproduced ~+0.47pp vs my +2.3pp. Fix: net-budget selection. |
| 2 | [E10] κ_C (IDB 16%) overlaps E5 leakage | **JUSTIFIED** | Real double-count. IDB waste bundles procurement/transfer leakage E5 already removes. Fix: re-anchor κ_C to PURE admin overhead (1–10% band), withdraw the IDB-16% point. Shrinks κ_C. |
| 3 | [E9] "robust selection/delivery" false in own worlds | **JUSTIFIED** | Real over-claim: selection Shapley −2.16 in PRO_CENTRAL, delivery −2.09 in PRO_DIST. Fix: "large in PROBABLE"; publish the named-world table. (The FULL diagonal still wins in every world — preserve that.) |
| 4 | [E10] embargo leak "value ratio (~2.7)" | **JUSTIFIED** | Semantic performance-ratio bypass. Fix: remove; report the κ_C threshold or pp table only. |
| 5 | [cross] closed schema doesn't cover E5/E9/E10 (safeLog only) | **PARTIAL** | Fix the leak + tighten safeLog to catch the ratio class now; full typed closed renderers for 3 experiments = noted follow-up. |
| 6 | [E9] full-stack/Shapley inherit unanchored planning | **JUSTIFIED** | Even at agendaCapture=0 the sector generator (secValSpread/creditCoef/assoc) is live. Fix: quantify standalone selection/delivery from **E5** (clean); label E9's full-stack point conditional/illustrative. |
| 7 | [E9] strict-residual confounded by utilization | **JUSTIFIED (minor)** | Already have `recycle` (removes it). Fix: lead with / co-report recycle; drop the false monotonicity assumption. |
| 8 | [E5] verified zero diversion mechanically saturated | **JUSTIFIED** | deterrent 1.05 > temptation max 1 ⇒ deterministic zero. Olken's audit cut leakage 8pp, didn't eliminate. Fix: add residual diversion to verified (temptation tail / lower deterrent). |
| 9 | [E5] Olken expenditure → signed generic welfare loss | **PARTIAL (labeling)** | Relabel as moment-matched, NOT identified; don't claim the honesty/detection/advance decomposition is identified. |
| 10 | [cross] narrow CIs omit substantive uncertainty | **JUSTIFIED (labeling)** | The CI is inner-MC only. Fix: relabel "conditional Monte-Carlo interval (world/calibration uncertainty excluded)". |
| 11 | [E5] general E4 reduction false (retention differs) | **DEFEND + note** | Exact at tested points (1e-9). Edge: E5 doesn't replicate E4's o_min degeneracy filtering, so degenerate corners differ. Note as limitation; the tested reduction stands. |
| 12 | [E10] asymmetric cost scopes | **JUSTIFIED** | Core v0's verification/audit/recovery/reputation machinery generates E5's verified benefit but is uncharged. Fix: κ_D must include those control costs (narrows the cost advantage). |
| 13 | [E10] PRO_DIST reverses admin contribution | **JUSTIFIED** | Multiplicative haircut on negative status-quo welfare mis-behaves. Fixed by #1 (net budget) + negative-domain tests. |
| 14 | [E5] multiplicative validation tautological | **DEFEND (mostly)** | Already labeled "an accounting identity"; the interaction is the level-effect signature. Tighten test comment; no result change. |
| 15 | [E5] robustness ranges preserve ordering, never cross worlds | **PARTIAL** | Relabel the LHS as a CONDITIONAL delivery-parameter sweep (PROBABLE-fixed, non-overlapping regimes); a joint world×delivery×κ design = follow-up. |
| 16 | [E9] planning anchors incompatible units | **DEFEND (deferred) + note** | Planning is NOT quantified (headline reports no planning figure), so these don't threaten a reported result. Already logged as future work (return-per-cost tilt, softmax share form). |
| 17 | [E9] Chile severity not the modeled treatment | **JUSTIFIED** | Mental health is a health SUBfunction, not a zero-funded top-level COFOG function; agendaCapture=1 is a taxonomic mismatch. Fix: keep Chile as a QUALITATIVE illustration of visibility bias; **remove the +2–4pp numeric mapping**. |
| 18 | [cross] design docs contradictory / historical mixed in | **JUSTIFIED** | Fix: separate current spec from historical changelog; generate tables from code; delete the false "every cell ≤ reference" line + stale visibility-bin text. |
| + | "publication-ready" premature | **JUSTIFIED** | Downgrade to "code/test ready; empirical interpretation pending calibration/model-form review." |
| + | "20-seed" test uses 8 seeds | **JUSTIFIED (minor)** | Run 20 or rename. |

## Summary

**JUSTIFIED (apply): 1,2,3,4,6,7,8,10,12,13,17,18 + status + seed-count.** **PARTIAL (bounded fix + note): 5,9,15.**
**DEFEND (preserve/deferred, with reason): 11,14,16** and the whole core-result set.

**Net effect on the thesis:** the CORE result survives (Core v0 wins decisively in PROBABLE; full advantage holds in
every named world). The honest corrections SHRINK and RE-SCOPE the E10 cost layer (net-budget estimand + de-overlapped,
symmetric, smaller κ), qualify "robust" → "large in PROBABLE" with the named-world table, add residual diversion to
verified, de-quantify the Chile example, relabel CIs/robustness as conditional, and clean the docs. None of this is an
ideological degradation — every change closes a reproduced defect. The defended items are defended on merit.
