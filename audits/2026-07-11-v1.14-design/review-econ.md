# Review — economics / mechanism-design / external-validity (adversarial)

Reviewer role: hostile econ referee. Scope: the v1.14 / E4 design-of-record, the anti-value / admin / leakage legs,
the value-estimation foundation, the parity theorem, the paper draft, and how the engine operationalizes the thesis.
Every issue below cites file:line and proposes a concrete fix.

## Overall verdict

**MAJOR REVISIONS.** The architecture is honest in intent and the reporting embargo is genuinely disciplined. The
central-arm estimation form (linear intercept-shift + directional projection) is defensibly literature-motivated,
and keeping the estimand to matched-budget selection-only is the *right* call. But three things stand between this
and an accept:

1. **The empirical result does not test the mechanism's own load-bearing assumptions.** The two levers that
   manufacture the "long-tail advantage" — the heavy-tailed visibility distribution and the convex salience gate —
   are either frozen or swept only on the favorable side. The engine's `envelope()` sweeps 19 of 29 parameters and
   the report literally labels this "the full physically-possible set." That is the strongest objection and it is
   fixable.
2. **The anti-value model is single-signed.** Organized/mobilized opposition (NIMBY, minority veto) is documented as
   a known gap but not built, and its omission is *not* conservative — it biases toward the distributed arm.
3. **Residual transport overclaims** flagged in the v4 novelty critique are still live in the companion docs, and
   the prior-art nearest-neighbor deltas are still not written.

Details, ranked by how much they threaten the headline.

---

## Ranked issues

### 1. [CRITICAL] The D_F "sign backbone" is over a 7-D slice, not the physically-possible set — and the frozen dimensions are exactly the mechanism's levers

`scripts/simulation/e4-v5/evidence.mjs:15,105` builds the sign envelope only over `EVIDENCE.uncertain` (7 params:
`p, beta, sigma_e, s_exp, b_H_C, w, pi_opp`), with a one-at-a-time marginal probe over `EVIDENCE.fixed_check`
(10 params) at `evidence.mjs:62-74`. That leaves **10 of 29 registered θ frozen at their base values and never
perturbed in any sweep**: `m_q, s_q, a_V, b_V, c_lo, c_hi, a_r, b_r, phi, sigma_v` (compare
`contract.mjs:19-57` against `EVIDENCE.uncertain`/`fixed_check` at `contract.mjs:95-96`).

Among the frozen ten are the mechanism's own drivers:
- **`a_V, b_V` (`contract.mjs:25-26`)** — the visibility Beta shape, i.e. *how heavy the long tail is*. The design
  says in bold this must be swept: "do NOT hardcode s≡0 or b_H^C=0. The tail heaviness (distribution of V_j) … are
  all parameters with their own D_M/D_F/R_α. If the tail is less heavy … the boundary moves and we report it"
  (`ANTIVALUE-MODELING.md:54-57`). The contract gives `a_V,b_V` a `df`/`ralpha`, but the evidence run never moves
  them. The "capability guardrail … do not gerrymander" (`DESIGN_SKETCH_v5.md:70-72`) is stated but operationally
  violated: the single lever that most controls the aggregate advantage is pinned at the value that maximizes it
  (`a_V=0.5<1` ⇒ heaviest tail).
- **`phi` (`contract.mjs:32`)** — budget share, i.e. the funded fraction / selection regime. Selection performance
  gaps are budget-dependent; freezing `phi` fixes the regime.
- **`c_lo,c_hi` (`contract.mjs:28-29`)** — cost dispersion, which drives the `(x−h·c)/c` ranking the engine actually
  uses (`engine.mjs:105`). Not a nuisance parameter here.
- **`a_r,b_r` (`contract.mjs:30-31`)** — reach, which sets citizen coverage `n_j`; see issue 2.

**Why it's fatal as labeled:** `evidence.mjs:134` prints "NOT sign-robust across **the full physically-possible
set**," and the paper draft repeats "the sign over the joint physically-possible set `D_F`"
(`e4-paper-section-draft.md:35`, `:46`). It is not the physically-possible set; it is a 7-D joint box plus a marginal
10-D probe, with 10 dimensions held fixed. A referee who notices this discounts every sign/magnitude headline.

Compounding it: even inside the swept set the favorable side is locked in. `s_exp` (the gate convexity) has
`ralpha:[1.0,4.0]` (`contract.mjs:52`), so the **headline R_α never lets the gate be concave (`s_exp<1`)** — the
central is never allowed to be *better* than linear at detecting tail harm, only worse. With `a_V,b_V` frozen at the
heavy-tail base and `s_exp≥1` in the headline, average central harm detection is ≈`b_H_C·E[V^{s_exp}]` ≈ `0.5·0.05`
≈ 0.024 versus distributed `(1−β)=0.6` — a 25× harm-voice asymmetry baked in before the sweep starts.

**Fix:** (a) Move `a_V, b_V, phi, c_lo, c_hi, a_r, b_r` into `EVIDENCE.uncertain` (or at minimum `fixed_check`) so
the sign backbone and R_α actually span them; if the joint box gets too large for `2^k` corners, replace the corner
enumeration with a Latin-hypercube/Sobol sample (the code already adds `N_RANDOM` interior points, so the machinery
exists). (b) Relabel every "full physically-possible set" string to "the swept UNCERTAIN box (7 of 29 θ jointly;
10 held fixed — listed)" at `evidence.mjs:134` and `e4-paper-section-draft.md:35,46`. (c) Report the headline result
at a `s_exp` band that includes `<1` at the widest α, or justify in text why concave gating is physically excluded.

### 2. [MAJOR] The distributed arm's harm voice is visibility-independent by fiat; V and reach are structurally decorrelated

`engine.mjs:55,59` draws visibility `V ~ Beta(a_V,b_V)` and reach `r ~ Beta(a_r,b_r)` as **independent** draws, and
the distributed conditional mean is `E[M^D|u] = S⁺ − (1−β)H` "independent of V_j" (`ANTIVALUE-MODELING.md:40-42`,
`DESIGN_SKETCH_v5.md:33-34`). That decoupling is the other half of the advantage: the central loses harm voice on
the tail, the distributed keeps *full* harm voice everywhere. But in reality a project is often low-visibility
*because* few people are aware of or affected by it — visibility and citizen reach are positively correlated. If so,
low-`V` projects also have low `r` ⇒ small `n_j` ⇒ high-variance `M^D` built from a possibly unrepresentative
handful, precisely on the long tail that supplies the entire aggregate advantage.

**Why it biases the result:** the model grants the distributed arm noise-free systematic harm detection exactly
where the central is blinded, with no offsetting thinning of citizen coverage. The independence is convenient, not
argued.

**Fix:** add a correlation channel — e.g. make `V` a monotone function of (reach, category salience) plus noise, or
draw `(V, r)` from a copula with a swept dependence parameter (the design already contemplates "copula/dependence"
for `D_F` at `DESIGN_SKETCH_v5.md:64`). Then re-run the tail decomposition and report whether the advantage survives
when low-visibility ⇒ thin, noisy citizen coverage. State the `corr(V,r)` you assume; do not leave it implicitly 0.

### 3. [MAJOR] Anti-value is single-signed: organized/mobilized opposition is documented but not modeled, and omitting it favors the distributed arm

The contract has one opposition-voice parameter, `beta` = "adverse-voice **suppression** of opponents",
`df:[0,1]` (`contract.mjs:41`), and the report rule only ever *thins* opponents' reports
(`engine.mjs:68`, `p·(1−β)` with `β≥0`). The design itself flags this as a real weakness — "Single-signed voice.
`β≥0` = opponents report *less* … The opposite is equally real (organized opposition is *louder*, NIMBY). One
parameter can't carry both regimes" (`ANTIVALUE-MODELING.md:16-18`) — and proposes splitting `β` into suppression
and mobilization (`ANTIVALUE-MODELING.md:70`). That upgrade was **not built**: `θ_all` carries only the suppression
`β`.

**Why it biases toward the thesis:** with mobilization (`β<0`, opponents *louder*), the distributed arm does not
simply gain more harm voice — it can *over*-weight a vocal, unrepresentative minority and veto positively-valued
projects (the classic NIMBY / minority-capture failure of participatory allocation). That is the distributed arm's
*characteristic downside*, and the current model structurally cannot express it, so every reported region is drawn
from the half of the opposition-behavior space that flatters coverage.

**Fix:** implement the signed-voice split — either allow `β<0` in the report rule (extend `beta.df` to `[-1,1]` with
a re-derived `E[M^D|u]`) or add a distinct `beta_mob` parameter with its own `D_F/R_α`, and put it in
`EVIDENCE.uncertain`. Report whether the distributed advantage survives an organized-opposition regime. This is the
single most important *substantive* modeling fix.

### 4. [MODERATE] Combining the value leg with the admin-cost leg assumes a separability that the budget constraint breaks

`ADMIN-COST-LEG.md:26-27` proposes `m_total` as delivered-value under central `= f(selection_C)·B(1−κ_C)` vs
distributed `= f(selection_D)·B(1−κ_D)`. But `f(selection_k)` — the matched-budget selection quality `m` — is itself
a function of the project budget, because the funded fraction `phi` changes which projects clear and how the parity
boundary sits (issue 1 notes `phi` is frozen precisely because it moves selection). Multiplying a matched-budget
selection ratio by a different budget factor treats selection-effect and budget-effect as multiplicatively separable
when they interact through the budget constraint. This is not double-counting, but it is a spurious-separability
error that inflates or deflates `m_total` by the unmodeled interaction term.

**Fix:** when combining legs, re-run selection at each arm's *actual* project budget (`phi_k` implied by `κ_k`)
rather than reusing the matched-budget `m`; report `m_total` as the difference of separately-simulated delivered
values, with the interaction shown explicitly. Keep the matched-budget `m` as the clean selection leg for the main
result. The "keep them separate, decompose explicitly" instinct (`ADMIN-COST-LEG.md:8-10`) is right; the arithmetic
in the combine step needs to honor the interaction.

### 5. [MODERATE] Residual transport overclaims in the companion docs (flagged in v4, still live)

The v4 novelty critique required rewriting these (`critique-v4-novelty-alignment.md:17-23`); they are unchanged:
- `research/e4-value-estimation-foundation.md:4-5` still opens "an estimation model whose form **and parameter
  ranges are anchored** to published evidence," directly contradicting its own §4 heading "parameters are
  PROXY-INFORMED, **not anchored**" (`:55`) and §7 (`:87-89`).
- `E4-empirical-anchors.md:18` keeps the heading "**anchored ranges**"; `:24` calls the planner bias "**materially
  non-zero and large**" without the target-domain qualifier in the sentence itself (the caveat only arrives at
  `:57-68`).

Source political-opinion effects do not establish the sign, nonzero magnitude, or plausible *range* of the target
value-of-project coefficients. An econ referee reading the foundation abstract will treat the model as calibrated and
then feel misled by §4.

**Fix (as v4 already specified):** change both openings/headings to "source evidence motivates the mechanism, form,
and sensitivity scenarios; no target sign, magnitude, or range is identified." Credit where due: the Prelec/
Surprisingly-Popular overclaim *was* fixed — `e4-value-estimation-foundation.md:84-85` now says it is "**not** a
measurement of the target structural `w`." Apply the same discipline to the two lines above.

### 6. [MODERATE] Prior-art differentiation names the right neighbors but still states no deltas; the single-rule confound is unaddressed

`e4-paper-section-draft.md:66` lists Böttcher–Klingebiel 2024, Rey–Endriss 2024, Boehmer et al. 2023, Liesiö et al.
2007, Mollick–Nanda 2016 as "differentiators" but states no operative delta — the exact gap the v4 critique flagged
and asked to fix with a nearest-neighbor table (`critique-v4-novelty-alignment.md:31-35`). Böttcher–Klingebiel is the
closest neighbor (budgeted noisy selection) and needs an explicit delta. Separately, Boehmer et al. make the
*selection rule* load-bearing, and E4's result comes from **one** greedy rule for both arms; without saying so, a
referee reads "institutional effect" where it could be "greedy-rule effect."

**Fix:** (a) add the compact nearest-neighbor table (prior object | E4 delta | required external benchmark); name the
surviving delta as *signed-MNAR coverage + transported central projection/credit on an oracle-normalized
institutional contrast*. (b) Turn the single-rule fact into a *strength*: the engine uses the identical selection
interface for both arms (`engine.mjs:98-118`, one `fundedValue`), so the contrast isolates the *signal*, not the
rule — state this explicitly to preempt the confound, and ideally show one robustness run with a second rule.

### 7. [MINOR] The "myopia magnitude" is asserted, and `s(V)=V^{s_exp}` is a strong functional choice

`s(V)=V^{s_exp}` (`engine.mjs:77`) forces `s(0)=0` exactly — the central is *perfectly* blind at zero visibility, not
merely attenuated. Combined with the heavy-tail base this drives average detection to ≈0.024 (issue 1). The gate
shape is a modeling convenience; a referee will ask why not `s(V)=V/(V+c)` (bounded away from 0) or a logistic with a
floor.

**Fix:** add a small detection floor `s(V)=s_min+(1−s_min)·V^{s_exp}` with `s_min` swept from 0, so "near-blind" is a
measured limit rather than a hardcoded zero; this also makes the `b_H^C=0/s=0 ⇒ harm inert` negative control
(`DESIGN_SKETCH_v5.md:88`) a genuine corner rather than the default neighborhood.

---

## The strongest objection a hostile referee would raise

**"You assumed the answer."** The aggregate advantage is generated by exactly two assumptions — a heavy-tailed
visibility distribution (`a_V=0.5`) and a convex, zero-at-zero salience gate (`s_exp≥1`, `s(0)=0`) — and *neither is
in the joint sweep that produces your headline*: `a_V,b_V` are frozen (`EVIDENCE` omits them, `contract.mjs:95-96`)
and `s_exp`'s headline band is `[1.0,4.0]` (`contract.mjs:52`), never concave. So when the report says "NOT
sign-robust across the full physically-possible set" (`evidence.mjs:134`), it has not varied the physics that
matters; it has varied seven downstream coefficients around a pinned mechanism. The result "distributed wins on the
long tail" is therefore close to a restatement of "we assumed the planner is blind on the long tail," and the one
sweep that could rebut that reading was not run. Everything else (transport caveats, embargo, honest limits) is well
done, which makes this gap more conspicuous, not less.

## Single highest-value recommendation

**Put the mechanism's own levers into the sweep, then relabel.** Add `a_V, b_V, phi, a_r, b_r` (and let `s_exp` reach
`<1` at the widest α) to `EVIDENCE.uncertain`, switch the corner enumeration to a space-filling design so the joint
box stays tractable, and re-derive the sign backbone and R_α over that genuinely-joint set. If the distributed
advantage survives a *lighter* tail, a *concave* gate, and *correlated* visibility/reach, the thesis is real and the
paper is strong; if it does not, you have found the true boundary and can report it honestly. Either way, correct the
"full physically-possible set" language to match what is actually swept. This one change converts the headline from
"assumption-driven" to "robustness-tested" and directly discharges the strongest objection above.
