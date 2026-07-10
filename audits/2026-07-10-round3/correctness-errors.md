# Correctness & errors

## Verdict

**No — not publication-ready on this dimension.** The confirmatory symmetry-gate result is reported with the correct sign and denominator in the governing passages, but the paper still contains two load-bearing claim errors and three concrete mathematical/model-mapping errors. None changes the gate's NO-GO result; all are bounded fixes.

## Findings

### 1. Major — the novelty section attributes a selection–delivery interaction to a test that held delivery fixed

- **Locator:** `drafts/paper.md:292-296` (claim); `research/claim-and-estimand-contract.md:8-22,38-44` and `scripts/simulation/e5-sp-symmetry-gate.mjs:2-13` (contradiction).
- **What is wrong:** The paper says the exploratory apparatus found that selection and delivery “interact” and calls that interaction “a direction a later pre-registered symmetric gate finds positive but small.” The gate cannot find the direction of an interaction involving delivery: it is expressly a **selection-only** test with delivery fixed at `d0`/parity. The controlling contract says a delivery-inclusive `Delta_total` is future work and that the delivery effect was “not run here.”
- **Why it matters:** This incorrectly upgrades an exploratory delivery interaction into something supported by the repository's one genuinely confirmatory test, violating the controlling estimand at the point where the paper states its novelty.
- **Concrete fix:** End the parenthesis after “exploratory apparatus.” In a separate sentence say only that the later gate finds the **selection advantage** positive but small. Do not connect the gate to the interaction or to a delivery direction.

### 2. Major — the paper makes a false universal claim about taxation/redistribution and then universalizes an outcome measure that explicitly excludes distribution

- **Locator:** `drafts/paper.md:30-37` and `drafts/paper.md:1262-1265`; controlling limitation at `research/claim-and-estimand-contract.md:46-53`.
- **What is wrong:** The introduction asserts, “States do not tax to redistribute” and “taking from the rich does not make the most vulnerable person better off.” That is both factually and logically false: redistribution is a recognized fiscal purpose, and a transfer to a worse-off recipient can itself improve that recipient's position. The conclusion then calls delivered value per resource “the right criterion for **any** allocation institution.” The contract says the modeled outcome is an uncalibrated utilitarian sum that “says nothing about redistribution or equity” and applies only to a bounded, infrastructure-like public-investment slice, “not” the whole budget or purpose of the state.
- **Why it matters:** These sentences substitute a partial-equilibrium project-selection metric for a general theory of public finance. They are not supported by the model or by the cited leaky-bucket analogy and directly contradict the paper's controlling scope.
- **Concrete fix:** Replace the introduction passage with a claim limited to the bounded investment slice: spending that is authorized for a project creates value only to the extent that useful delivery occurs. Change the conclusion to “For the bounded public-investment allocation problem studied here, one relevant criterion is…” and explicitly retain equity/distribution as separate criteria.

### 3. Major — the claimed turnout and distribution-shape “invariances” are not properties of the implemented E4 model

- **Locator:** `drafts/paper.md:791-797`; implementation at `scripts/simulation/e4-v4-symmetric-frontier.mjs:36-50`.
- **What is wrong:** The paper says the advantage is invariant to participation level and that, “by the central-limit theorem,” only first moments enter, making the Gaussian valuation draw a convenience rather than an assumption. In the code, `p` is a Bernoulli inclusion probability for every valuation (`:45-47`), so changing turnout changes sample size, sampling variance, the sign gate, rankings, and portfolios; it is not merely a common scalar multiplier in finite samples. Likewise, the CLT does not erase variance or tail assumptions: its limiting distribution depends at least on the second moment, while the implemented sign attenuation, finite interested sets, ranking, and eligibility depend on the distribution around zero. The paper itself concedes sampling-variance effects immediately afterward (`drafts/paper.md:795-797`).
- **Why it matters:** These are asserted robustness results used to “bound the arbitrary-magnitudes worry,” but they were neither proved nor established by the code. They overstate how broadly the E4 frontier generalizes beyond its Gaussian, finite-sample data-generating process.
- **Concrete fix:** Recast them as properties of the **noise-free expectation/large-set approximation** only. State that finite-sample turnout and valuation shape can affect portfolio rankings. Either remove the Gaussian-irrelevance claim or add explicit alternative-distribution and turnout sweeps before making it.

### 4. Minor — the detection floor treats a Poisson approximation as an exact closed form

- **Locator:** `drafts/paper.md:786-790`; source implementation and approximation at `scripts/simulation/e4-v5-detection-floor.mjs:5-16,30-35`.
- **What is wrong:** From the exact Bernoulli formula `P = 1 - (1-q)^m`, the paper states a floor in terms of `m*q >= -ln(1-p_c)`. The script itself reveals that this uses `(1-q)^m ~= exp(-m*q)` (`:34`). Exact detection does **not** depend only on `m*q`: for the same `m*q = 1`, `(m=1,q=1)` gives `P=1`, while `(m=100,q=.01)` gives `P≈0.634`. The exact threshold is `m[-ln(1-q)] >= -ln(1-p_c)` (equivalently `m >= ln(1-p_c)/ln(1-q)`).
- **Why it matters:** The numerical approximation is close in the paper's small-`q` regime, so it does not overturn the reported sensitivity direction, but calling it one of “three closed forms” makes the derivation mathematically false outside that regime.
- **Concrete fix:** Label `m*q >= -ln(1-p_c)` explicitly as the small-`q`/Poisson approximation, report the exact Bernoulli inequality, and replace every “depends only on expected reporters” statement with “is approximately summarized by expected reporters when `q` is small.”

### 5. Minor — the formal collusion model omits recoverable advance `a*r` when mapping fraud gain `G` from Model 1

- **Locator:** `research/formal-models.md:142-144`, contradicted by the same note's payoffs and IC derivation at `research/formal-models.md:58-78`.
- **What is wrong:** Model 2 maps the value of fraudulent approval to `G = 1 - a + gamma + R`. From Model 1's stated payoffs, avoiding confirmed rejection is worth
  `1 - [a(1-r) - gamma - R] = 1 - a + a*r + gamma + R`.
  The mapping drops the recovery term `a*r`.
- **Why it matters:** Proposition 4 is algebraically valid for an abstract `G`, but using the printed mapping understates the executor's gain from corrupt approval whenever any advance is recoverable (`r>0`) and therefore understates the fiscalizer stake/corroboration needed for collusion-proofness.
- **Concrete fix:** Change the mapping to `G = 1 - a(1-r) + gamma + R` and propagate that expression to any worked examples or architectural parameter mappings. The proposition itself need not change.

## Verification notes

- `npm run check-anchors` passes (`broken=0`, `drifted=0`, `dead-paths=0`, `dead-wikilinks=0`).
- The current gate and diagnostics scripts have not changed since the prior reproduced NO-GO/cluster-diagnostic work except for later labeling/comment maintenance; the manuscript's governing `median Delta = 0.025` and separate post-hoc ratio-of-sums `0.026 [0.023, 0.029]` agree with the archived outputs. I found no new sign, denominator, eligibility, or clustered-bootstrap error in those governing quantities.
- Every locator above was re-read against the current working tree immediately before this report was written.
