# Critique v4 — unit consistency and the model contract

## Verdict

**PARTIAL.** V4 clears the central algebraic defect in the v3 DGP: truth, the distributed signal, the central signal,
delivered value, and the oracle are now all expressed on the interested-person **mean-value scale**. The distributed
signal has the missing `1/n_j`, is no longer called Horvitz–Thompson, and the three arms pass through one explicit
gate/rank/budget interface (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v4.md:24-59,79-89`). The v3 mean-versus-sum
blocker is therefore cleared.

The larger v3 blocker, **“no complete executable DGP,” is only partially cleared**. Section B is not yet “one
runnable model contract.” There is no machine-readable or even enumerated `theta_all`; several probability laws and
dependence relations are placeholders; the declared physical domain includes `p=0`, where the distributed equation
divides by zero; the credit and category-signal generators are not equations; and edge cases in z-scoring and greedy
selection are not determined. Neither named engine implements this model. V4 has advanced from an internally
inconsistent inventory to a coherent mean-scale skeleton, but it is not ready to freeze or preregister as executable.

| Question | Answer |
|---|---|
| One unit across `S`, `M^D`, `M^C`, delivery, and oracle? | **Yes**, subject to explicitly interpreting delivery as a sum of project-level mean scores, not population welfare. |
| Printed MNAR conditional expectation correct? | **Yes under missing conditional-independence assumptions.** The formula is algebraically right; the following claim that the realized estimator “is exactly `S_j`” at `beta=0` is not. |
| One runnable stochastic model? | **No.** Material laws, supports, edge cases, and the registry are absent. |
| Any hidden/unregistered law or constant? | **Yes.** In fact `theta_all` is not instantiated, so exhaustiveness cannot be checked. |
| Any dead parameter? | **No new parameter is provably dead at the equation level**, but `fmt` is not arithmetically defined and `rho_P` cannot be checked without a credit law. The only executable engine with a declared dead field still has `WP.eta`. |

## 1. The scale repair is real

V3 defined `S_j` as a mean but its distributed signal as an expanded sum, so even at unbiased reporting the two arms
ranked `S_j` versus approximately `n_j S_j` (`audits/2026-07-11-v1.14-design/critique-v3-complete-dgp.md:26-45`). V4
now defines

```text
S_j   = (1/n_j) sum_i u_ij,
M^D_j = (1/n_j) sum_i R_ij (u_ij + e_ij) / p,
M^C_j = a + b S_j + w(v_pj-S_j) + eta_j.
```

All three quantities have units of mean valuation. Subtracting `h c_j`, dividing by `c_j`, and z-scoring is also
dimensionally coherent provided the registry types `h` as mean-value per cost unit; the selected portfolios are then
evaluated by the same `S_j` in `D_W`, `C_W`, and `O_W` (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v4.md:41-52,61-67,79-89`). The oracle no longer
leaks into the institutional gates: each arm gates on its own signal (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v4.md:79-89`). The signal-recovery
fixtures are logically correct: with `p=1,beta=0,sigma_e=0`, `M^D=S`, and with `a=w=0,b=1,sigma_C=0`, `M^C=S`
(`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v4.md:165-170`).

This is a synthetic project-score estimand, not aggregate beneficiary welfare. A project reaching 10 people and a
project reaching 10,000 people contribute the same `S_j` when their interested-person means match. Summing selected
means remains dimensionally legal and is explicitly declared, but “delivered true value” must always be qualified as
**sum of selected project mean scores**. Otherwise readers will reasonably infer the total-value estimand that the
legacy engines implement (`scripts/simulation/e4-v4-symmetric-frontier.mjs:26-35,50-52` and
`scripts/simulation/e5-sp-symmetry-gate.mjs:43-49,97-99`).

## 2. The MNAR expectation is right only after adding assumptions

Let `r=1-beta`. Conditional on the realized interested-person values, and assuming that `e_ij` is conditionally
mean-zero and independent of `R_ij`,

```text
E[R_ij(u_ij+e_ij)/p | u_ij] = u_ij       when u_ij >= 0,
                              r u_ij     when u_ij < 0.
```

Therefore

```text
E[M^D_j | u_.j]
  = (1/n_j){sum_pos u_ij + (1-beta)sum_neg u_ij}
  = S_j - (beta/n_j)sum_neg u_ij.
```

The equality printed at `audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v4.md:48-57` is correct. Because the negative sum is negative, adverse
nonresponse moves the estimate upward, exactly as intended. It is also correctly described as a behavioral
baseline-expanded estimator rather than HT.

Two qualifications are binding:

1. The model states only the marginal law `e_ij ~ Normal(0,sigma_e^2)`. It never says that report errors are
   independent of response, values, projects, or one another, nor that the Bernoulli responses are conditionally
   independent (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v4.md:48-53`). Without at least `E[e_ij | R_ij,u_ij,I_ij]=0`, the displayed
   expectation does not follow. Without conditional independence across people, its sampling variance is not
   determined.
2. “So at `beta=0` it is exactly `S_j`” is false for the realized estimator whenever `p<1` or `sigma_e>0`
   (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v4.md:54-59`). What is exact is **conditional unbiasedness**:
   `E[M^D_j|u_.j]=S_j`. Exact equality needs the stronger signal-recovery setting `p=1,sigma_e=0`, which v4 itself
   correctly states later (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v4.md:165-167`).

For a runnable contract, conditional independence would also give the useful variance check

```text
Var(M^D_j | u_.j) = n_j^-2 [
  sum_pos {(1/p-1)u_i^2 + sigma_e^2/p}
  + sum_neg {(r/p-r^2)u_i^2 + r sigma_e^2/p}
].
```

That regression test would catch an implementation that accidentally uses `p(1-beta)` as the expansion weight or
omits the mean normalization.

## 3. Blocking: `theta_all` does not exist as a contract

V4 repeatedly says quantities are “all in `theta_all`” and that a future engine loads `theta_all` “from the
contract,” but it never displays, links, or generates that object (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v4.md:73-77,88,154-164`). A
repository search finds no v4 config/schema/registry. This is a regression even from v3's imperfect explicit
inventory (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v3.md:92-98`). Consequently the assertion that every literal
is registered and every field consumed is presently unfalsifiable.

At minimum, the model contract must type and constrain all of the following:

- population/project generation: `N`, `K`, `m_q`, `s_q`, `alpha_r`, `beta_r`, `sigma`, `c_lo`, `c_hi`, `phi`, and
  the dimension and validity constraints for `Sigma_dep`;
- reporting: `p`, `beta`, `sigma_e`, plus the full response/error dependence declaration;
- central signal: `a_res`, `a_fmt`, `fmt`, `b`, `w`, `sigma_C`, `v_p0`, `gamma`, `sigma_v`, and a complete law for
  `g`, including how the promised correlation `zeta` is constructed;
- credit: `rho_P`, the exact salience function and its coefficients, and the distribution/dependence of credit
  noise;
- selection: `h`, `lambda`, positive-cost constraints, z-score population convention and empty/singleton behavior,
  budget admissibility, greedy skip/fill semantics, and tie behavior;
- computation: seeds, worlds, interval level, bootstrap replications, optimization/root tolerances, and failure
  behavior. These control reported results even if kept in a separate exhaustive `nu_all` registry.

The present prose mentions many names, but a name in an equation is not a recursively validated registry entry with
unit, support, default, source, and analysis role. “Any unregistered literal throws” cannot be implemented until
structural literals (`0`, `1`, sign thresholds, array indices) are distinguished from model-governing literals by a
reviewed allowlist.

## 4. Blocking: the stochastic hierarchy is not fully generated

Several statements do not define a unique joint distribution:

- `q_j`, `r_j`, and `c_j` have marginals and an optional copula, but iid sampling across projects is not explicitly
  stated. `I_ij` is independent “across i” only; dependence across projects and dependence of `epsilon_ij` on
  interest, quality, reach, and cost are absent (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v4.md:27-44`). Those dependencies change the
  covariance of portfolio outcomes.
- Saying that `g_j` has correlation `zeta` with `q_j` does not provide a marginal law for `g`, a scale, or a joint
  generator. Many non-equivalent distributions share one correlation. The restriction `zeta<1` even admits
  `zeta=-1`, a perfectly collinear construction (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v4.md:69-74`).
- Independence or covariance among `xi_j`, `eta_j`, distributed report noise, and the project primitives is not
  declared. In particular, correlated central and distributed errors change `E[(D-C)/O]` even when each arm's
  marginal signal law is unchanged.
- `P_j = rho_P * visible salience + noise` is a template, not a law. “Salience from `(c_j,g_j)`” leaves its function,
  scale, coefficients, noise distribution, and dependence unresolved (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v4.md:79-89`). Because the
  central rank mixes `z(P/c)` with its value score, these choices are outcome-governing, not decoration.

The default-independence sentence applies only to `(q,r,c)` (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v4.md:37-38`); it cannot silently fill
the omissions above. The fix is one explicit structural-equation DAG or joint sampler, with every exogenous draw and
conditional independence named.

## 5. Blocking edge cases make the declared domain non-runnable

1. **`p=0` is physically allowed but mathematically undefined.** Section D declares `p in [0,1]`, while `M^D`
   divides by `p` (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v4.md:48-53,114-123`). Either use `p in (0,1]`, freeze a positive `p_min`, or define
   a separate no-report state. Calling `[0,1]` the physical domain makes the primary `D_F` optimization include an
   undefined point.
2. **Costs must be strictly positive.** The model divides by `c_j` twice, yet it does not require
   `0<c_lo<=c_hi` (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v4.md:35,79-85`).
3. **Empty eligibility is not handled.** “z over the eligible set, pop-sd, fallback sd to 1” handles zero variance,
   not the mean of an empty set. The contract must say that an arm with no eligible projects funds none, without
   evaluating z. A singleton is computable under pop-SD plus the fallback but should be regression-tested.
4. **Budget and greedy semantics remain prose.** `B=phi sum_j c_j` does not say whether the sum includes projects
   dropped for `n_j=0`, and “exact residual-budget fill” does not say whether an unaffordable high-ranked project is
   skipped while scanning later projects (`audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v4.md:34-35,83-86`). Both choices can alter the funded set.
5. **Supports needed by arithmetic are absent.** At least `N,K` positive integers, Beta shapes positive,
   `sigma,sigma_e,sigma_C,sigma_v>=0`, `lambda in [0,1]`, and an admissible range for `h` and `phi` must be binding
   schema constraints rather than inferred conventions.

## 6. Format and parameter-liveness audit

The v3 dead format share is conceptually repaired: using separate `a_res` and `a_fmt` with a regime intervention can
make both pathways live (`audits/2026-07-11-v1.14-design/critique-v3-complete-dgp.md:83-91`; `audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v4.md:75-77`). But
`fmt in {point,dist}` is categorical, so `a=a_res+fmt*a_fmt` is not executable arithmetic. It must be

```text
a(fmt) = a_res + 1{fmt = point} a_fmt.
```

Under that definition, no newly declared structural parameter is algebraically dead: `p` affects distributed
sampling variance; `r_j` and `N` affect finite interested counts; `v_p0`, `gamma`, `zeta`, `sigma_v`, and `w` affect
the central signal; and the credit parameters affect ranks when `lambda>0`. Parameters being intentionally inactive
at `w=0` or `lambda=0` is a pathway test, not deadness.

However, liveness cannot be certified from prose. `rho_P` may or may not affect `z(P/c)` depending on how its
unspecified noise is scaled, and no engine consumes any v4 fields. The active E5 engine still declares unused
`WP.eta` (`scripts/simulation/e5-sp-symmetry-gate.mjs:29-49`), exactly the defect the new contract promises to kill.
The right acceptance test is behavioral: perturb every registered field away from an inactivation boundary and
show that it changes only its declared downstream node; then require exact invariance when that pathway is switched
off.

## 7. There is still more than one live model in the package

Neither specified engine implements v4. E4-v4 uses total interested-person value, harm attenuation `gamma`, and a
`D/C` frontier (`scripts/simulation/e4-v4-symmetric-frontier.mjs:26-50,55-85`). E5 uses total value, an expected-report
matched appraisal budget, and a sampled central value-reader rather than `a+bS+w(v_p-S)`
(`scripts/simulation/e5-sp-symmetry-gate.mjs:68-99`). They are legitimate legacy comparators, but they cannot
reproduce the mean-scale contract or validate its recovery and symmetry claims.

The foundation document also still prints the old fixed-`v_p`, fixed-`Sbar` equation and defines aggregation over
`u_1j,...,u_Nj`, while v4 defines value only among interested people and makes `v_pj` project-varying
(`research/e4-value-estimation-foundation.md:9-16,18-38`; `audits/2026-07-11-v1.14-design/DESIGN_SKETCH_v4.md:27-44,61-74`). V4 says it supersedes
v3, not this companion. Until the companion is explicitly superseded or rewritten and a replacement engine is the
only evidence path, the repository does not have “ONE model contract” in operational fact.

## Prioritized fixes

1. **Ship the actual contract, not another inventory.** Add one versioned machine-readable `theta_all`/`nu_all`
   schema with units, strict supports, defaults, provenance, dependency DAG, and generated theory-to-code crosswalk.
2. **Complete the joint sampler.** Specify iid/project dependence; all exogenous-noise independences; a full
   distributional construction for `(q,g,v_p)`; and an exact credit/salience law.
3. **Make the declared domain executable.** Exclude `p=0` (or define it separately), require positive costs, and
   freeze empty-eligible, dropped-project budget, z-score, and greedy-skip semantics.
4. **Correct the two misleading/executable expressions.** Replace “exactly `S` at `beta=0`” with “conditionally
   unbiased,” and replace categorical multiplication by `1{fmt=point}`.
5. **Implement and test the fresh engine.** Required tests are the printed MNAR mean and variance, signal recovery,
   exact common-signal portfolio equality, parameter consumption/liveness, `p -> p_min`, empty eligibility,
   singleton z-score, and legacy-engine isolation.
6. **Align or supersede the companion contract.** The foundation and both total-scale engines must be unmistakably
   nonbinding for v4 evidence.

## Bottom line

V4 has fixed the **unit inconsistency** that made v3's institutional comparison uninterpretable. That is substantial
and should be retained. It has not yet delivered the promised **model contract**: the registry is absent, the joint
law is incomplete, a declared physical endpoint is undefined, selection edge cases are open, and there is no
conforming engine. The correct blocker status is **PARTIAL**, not cleared.
