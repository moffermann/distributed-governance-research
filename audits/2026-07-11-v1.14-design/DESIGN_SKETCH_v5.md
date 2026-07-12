# v1.14 / E4 design — v5 (build-spec / design-of-record) — supersedes v4

> v4's critique (`CRITIQUE_v4_SUMMARY.md`) converged conceptually (mean scale, `v_{p,j}` identification, conditional
> estimand, joint-normal theorem, honest positioning all accepted) but returned **0 cleared / 6 partial / 1 not** —
> because the remaining blockers are all **"prose, not code."** Codex's single sharpest improvement (stated twice):
> **ship one versioned, machine-readable, outcome-blind contract that is the ONLY path to evidence.** v5 is the
> design-of-record that this contract + engine + embargo + fixtures implement. It also folds in the author's
> **anti-value thesis** and two author decisions (2026-07-11): sign-reversal handled as **declared sensitivity**
> (not exclusion); build now.

## 1. FINAL model (mean scale; anti-value first-class; salience-gated harm myopia)
Per world `W`, given `θ`. All value quantities are **per-interested-person means**.

**Projects & population.** `q_j~N(m_q,s_q)` quality; `V_j~Beta(a_V,b_V)` visibility (**heavy-tailed toward 0** —
most projects are low-visibility long-tail); `g_j = ζ·z(q_j)+√(1−ζ²)·N(0,1)` observable category signal;
`c_j~U[c_lo,c_hi]`; reach `r_j~Beta(a_r,b_r)`, interested count `n_j~Binomial(N,r_j)` (drop & log `n_j=0`);
`B = φ·Σc_j`.

**Individual value with anti-value (opposition ≠ indifference).**
```
u_ij = q_j + ε_ij − B_ij·d_ij ,   ε_ij~N(0,σ) ,   B_ij~Bernoulli(π_opp) ,   d_ij~Exponential(μ_opp)
```
`B_ij·d_ij` is the **intense-minority opposition** component (heavy negative tail, distinct from indifference).
Decompose true value **by construction**:
```
S_j⁺ = mean_i max(u_ij,0)  (support)   H_j = mean_i max(−u_ij,0)  (harm)   S_j = S_j⁺ − H_j  (true net value)
```

**Distributed arm — behavioral coverage estimator (MNAR mean; has harm voice, attenuated).**
```
report R_ij: Bernoulli(p) if u_ij≥0, Bernoulli(p(1−β)) if u_ij<0
M^D_j = n_j⁻¹ Σ_i R_ij (u_ij+e_ij)/p ,  e_ij~N(0,σ_e)
E[M^D_j|u] = S_j⁺ − (1−β)·H_j          # registers harm at weight (1−β), V-independent
```

**Central arm — salience-gated harm myopia (THE thesis; `research`/`ANTIVALUE-MODELING.md`).**
```
v_{p,j} = v_p0 + γ·g_j + ξ_j ,  ξ_j~N(0,σ_v)                      # planner projection, project-varying
M^C_j = a + b·S_j⁺ + w·(v_{p,j} − S_j⁺) − b_H^C·s(V_j)·H_j + η_j ,  η_j~N(0,σ_C)
```
`s(V_j)` increasing gate, `s(0)≈0` (long tail → central near-blind to harm), `s(1)≈1` (salient → opposition/
comptroller supply harm voice). Central beats-or-loses on harm per project j iff `(1−β) ⋛ b_H^C·s(V_j)`: distributed
dominates the tail, contested on the salient few → **aggregate advantage comes from the long tail.**

**Common selection interface (arms k∈{C,D,O}; X^C=M^C, X^D=M^D, X^O=S).**
```
elig E^k_j = 1{X^k_j − h·c_j > 0} ;  rank R^k_j = z_elig((X^k_j − h·c_j)/c_j) (pop-sd, fallback 1)
central credit tilt: R^C_j ← (1−λ)R^C_j + λ·z_elig(P_j/c_j) ,  P_j = salience(V_j,g_j)
greedy by R^k under B, residual fill, tie-break lower j ; delivered D_W,C_W,O_W = Σ_{fund^k} S_j (true net value)
```

## 2. Frozen estimand + ORTHOGONAL state fields (fix v4's overlapping enum)
```
π_deg(θ)=Pr(O_W≤o_min|θ) ;  m(θ)=E_W[(D_W−C_W)/O_W | O_W>o_min]
```
`o_min`, `δ` frozen numerically in the contract (mean-value units; deterministic calibration; **not** 0.05). Emit
**four orthogonal status fields**, never one overlapping state:
`sign_status∈{pos,neg,zero-touching,indeterminate}`, `materiality_status∈{material,negligible,uncertain}`,
`degeneracy_status∈{ok,high-π_deg,degenerate(π_deg=1→fail-closed)}`, `numerical_status∈{resolved,unresolved}`.

## 3. Three-tier domains as FROZEN JOINT sets (fix v4's marginal sketches)
Per Codex: marginal α-coverage ≠ joint α-coverage. Freeze & **hash** joint nested objects before any production run:
```
Θ_transport = { S_source, R_scale (source→target maps), D_F (joint, with copula/dependence), R_α(α) (joint, measured) }
```
- **Sign** over joint `D_F`, measure-free (min/max) → `sign_status`. **Magnitude** over joint `R_α`, α∈{.5,.8,.95}.
- **Genuine `D_M\D_F` (physical impossibility):** `β,p∉[0,1]`, `σ<0`, `n_j<0`. Excluded — the true "negative-speed".
- **Directional assumptions (NOT impossibilities): `w,b,g,b_H^C ≥ 0`.** Author decision: **keep the sign as the base
  case (theory-backed) AND report a sign-reversal rival-model sensitivity** where target evidence cannot rule it out.
  Never presented as physical exclusion.
- **Capability guardrail:** `R_α` construction rule frozen + hashed so it can be widened to neither an artificial null
  nor an attractive magnitude; acceptance fixtures (§5) prove a real result is surfaced, not selected-in.

## 4. Analytic benchmark (narrowed, correct) + numerical frontier
Joint-normal fixed-threshold lemma: `V_k = q·μ_S + φ(z_q)·Cov(S,X_k)/sd(X_k)`; parity ⇔ `Cov(S,X_D)/sd(X_D)=
Cov(S,X_C)/sd(X_C)`; **`a` removed** (rank-invariant under no-gate/fixed-share). Define `Z:=v_p−S` (not the
undefined `Sbar`), `η⊥(S,v_p)`, nondegenerate signals; `Q_C=[b·Var(S)+w·Cov(S,Z)]/√[…+Var(η)]`. Label the
signed-MNAR→Gaussian mapping a **moment-matched reduced-form approximation** (a within-project CLT does not give
cross-project joint normality). Large-`K` corollary needs numerator LLN + `O_K/K→V_O>0` + exclusion→0 +
population-threshold-vs-exact-quota distinction. Proof + regression tests ship with the engine.

## 5. Machine-readable contract, engine, embargo, fixtures (the build)
- **`contract.mjs`** — sole source of truth: `θ_all` + numerical constants + joint `D_F/R_α` (+ hash) + `o_min/δ`
  + classification thresholds + output schema. `validate()` throws on unknown/unused fields.
- **`engine.mjs`** — implements §1–§2 on the mean scale, driven by the contract; fail-closed on unregistered literals.
- **Negative controls (must pass):** (i) signal recovery `a=w=0,b=1,σ_C=0,b_H^C=1,s≡1 ⇒ M^C=S`; `p=1,β=0,σ_e=0 ⇒
  M^D=S`; (ii) exact joint symmetry — identical signals ⇒ `D_W=C_W` **world-by-world**; (iii) pathway inactivation
  (`λ=0⇒P` inert; `w=0⇒v_p` inert; `b_H^C=0 or s=0⇒harm` inert; `β=0⇒`report sign-invariant).
- **Acceptance fixtures (prove capability):** synthetic `strong-distributed`, `strong-central`, `null`, `boundary`
  worlds — the pipeline must surface each correctly (a strong result is **surfaced, not washed out or selected in**).
- **Embargo:** closed output schema (`additionalProperties:false`; cannot express `D/C` or ratio-parity-1); one
  render adapter rejecting ASCII `x`, Unicode `×`, bare `D/C`; legacy engines behind a runtime guard + separate
  artifact namespace; exclusive `npm run e4:evidence`.

## 6. Positioning + companions (honest, present-tense only for what exists)
Present deliverables: a **proposed** joint-normal benchmark (validation, not novelty), an **atlas specification**, a
**proposed** three-measurement bridge protocol. Bridge needs three DISTINCT measurements (prior planner position
`v_p`, separate final estimate `M^C`, measured citizen truth `S`); the convenience app establishes existence/
direction only — **not** target magnitudes; absent bridge data, `(a,b,w)` stay transport-sensitivity inputs.
Differentiate from Böttcher–Klingebiel 2024, Rey–Endriss 2024, Boehmer et al. 2023, Liesiö et al. 2007,
Mollick–Nanda 2016 (targeted, not systematic, search). Align/supersede `e4-value-estimation-foundation.md`
(retire the project-invariant projection equation; Prelec elicits an instrument, not target `w`) and
`E4-empirical-anchors.md`.
