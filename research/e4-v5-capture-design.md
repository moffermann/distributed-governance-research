# E4-v5 — Symmetric Capture: Design, Model, and Results

## Status and honesty disclosure
Design/evidence consolidation for the **capture block** of the E4 line. Built on
top of the E4-v4 symmetric-frictions frontier (`e4-v4-symmetric-frontier.mjs`),
which itself replaced the E4-v3 headline after the four-reviewer adversarial round.
Motivation: the review demanded that **capture be modelled on the distributed side**
(Core v0) — and the author's correct response was that *fairness then demands
modelling capture on the CENTRAL side too*, which E4-v3/v4 (and the original paper)
deliberately left out. When capture is modelled **symmetrically**, the structural
asymmetry favours the distributed institution — the reviewer's objection becomes the
argument.

Scripts: `e4-v5-capture.mjs` (the capture game + sensitivities),
`e4-v5-detection-floor.mjs` (the detection-floor analysis). Results captured in
`research/e4-v5-capture-results.txt` and `research/e4-v5-detection-floor-results.txt`.
Deterministic (mulberry32, seeded). **Magnitudes are model-internal**; the literature
defends the *direction*, the *mechanism*, and the *sign of the asymmetry* — not the
exact numbers.

## The question
An organized group wants a **low-social-value "convenience" project** funded for its
own private rents. Holding the true social value of projects fixed, **how expensive
is it to capture each institution's allocation, and how does the true value delivered
degrade as capture becomes profitable?** The claim under test: distributed allocation
is structurally more capture-resistant, and modelling capture symmetrically *widens*
the distributed advantage rather than closing it.

## The two-layer capture model (Becker 1968)
Capture is not one act but **two layers**, each with its own cost, and they compound.
An organized group captures a targeted project only if it is **profitable**:

> **rent(j)  >  acquisition_cost  +  P(detection) × penalty**   (Becker 1968)

- **Layer 1 — acquisition** (get the project funded).
- **Layer 2 — enforcement evasion** (avoid detection and sanction): the expected
  sanction is **P(detection) × penalty**, and the captor may also pay to suppress
  detection (bribe enforcers, Becker & Stigler 1974).

The **penalty f is modelled EQUAL on both sides** (conservative). Core v0's permanent
reputational persistence (decay of the reputation EMA) is a real but **UNCLAIMED
margin** — left out so the result cannot be accused of stacking the sanction. By
Becker's logic the deterrence asymmetry therefore comes **only from P(detection)**
(same f, different p) and from the acquisition-cost scaling.

### The asymmetry — derived from mechanism, anchored to literature (not chosen)
| | **Central (status quo)** | **Distributed (Core v0)** |
|---|---|---|
| **Acquisition** | Small, ~FIXED: bribe few concentrated deciders (veto-player access, Tsebelis 2002; Stokes 2005 needs no mass monitoring) | Scales with the project: must swing **many** equal-wallet supporters, and **money cannot buy wallets, only persuasion** (the equal quota H025 is the cap) |
| **P(detection)** | **Low & fixed (~0.10):** concentrated official enforcement catches little (Dyck-Morse-Zingales 2010: SEC 6%, auditors 14%); citizen denuncia is costly → under-provided (Olson 1965; Latané & Darley 1968) | **Saturating ~1 (viral):** "takes a village" (Dyck et al: employees 19%, regulators 16%, media 14%); low-cost denuncia + the **defrauded beneficiary's monetary stake** — the incentive Dyck et al find actually drives reporting |
| **Penalty f** | Equal (conservative) | Equal (conservative) — reputational persistence unclaimed |

Two-channel refinement (from the design dialogue): **bribery capture** (paying
deciders) is where the distributed wins decisively (Stokes monitoring problem;
veto-players; equal wallet caps leverage). **Persuasion capture** (advertising)
is a channel BOTH share — direct democracy is demonstrably captured by money
(California ballot measures: US$4.2 bn 2000–2020; Prop 22 US$200 m). But the central
faces **both** channels; the distributed faces mainly the persuasion channel, which
is itself **capped by the equal wallet** (money buys attention, not allocation) and
**policed by the deterrence stack** (which catches non-delivery). The honest residual:
persuasion capture of *legal-but-low-value* projects (opportunity-cost harm, Bastiat)
is the channel the deterrence stack closes least — and it is shared, so it does not
reverse the asymmetry.

## Results

### The capture threshold (the key object)
The natural metric is not a delivered-value multiplier (it breaks when the central
turns net-negative) but the **rent level λ = rent/cost at which each institution is
cheap enough to capture that it delivers NET-NEGATIVE value (active harm)**. At the
representative point (γ=0.25, β=0.30; central acquisition 0.3 + p=0.10, distributed
acquisition 0.3·C + viral p, f=3, 8 seeds):

| institution | turns net-harmful at | organized projects captured |
|---|---|---|
| **Central** | **λ ≈ 0.10** (group pockets 10% of cost) | 32 → 74 of ~75 |
| **Distributed** | **λ ≈ 1.0–1.2** (rent ~100–120% of cost) | 0 until λ≈0.8 |

**≈10× more capture-resistant.** The central collapses 11% → −23% of oracle as rents
rise; the distributed holds 37% until λ≈0.8. From a near-parity frontier point
(γ=0.5, β=0.5) capture *alone* opens the gap (central −21%, distributed +25% at λ=0.3),
confirming the asymmetry is the capture mechanism, not the frictions.

### The detection FLOOR — the ceiling is not knife-edge (answers "how viral?")
Detection is **not a free knob**; it is a snowball. A captured project is caught if
**at least one** of the m affected citizens reports, each with independent
probability q:

> **P(detection) = 1 − (1 − q)^m**   → depends only on the **expected reporters m·q**.

Because this is exponential in m, and m (the transparently-informed affected public)
is large, near-certain detection needs only a handful of expected reporters:

| detection level | expected reporters **m·q** needed |
|---|---|
| beat the central (p=0.10) | **~0.1** |
| p = 0.50 | ~0.7 |
| strong resistance (p=0.90) | ~2.3 |
| near-viral (p=0.99) | ~4.6 |

Endogenous-detection capture model (conservative: only *harmed* v<0 citizens, and only
a fraction, are detectors) confirms the distributed keeps a **real advantage**
(positive %oracle, beats the central's −23%) **down to m·q ≈ 0.6** (detection ~43%),
and only reaches the floor (parity with the central) when **m·q < ~0.1** — i.e. under
near-total apathy or opacity. Translated: with a transparent audit trail (m = hundreds
who can see) and low-cost denuncia + a monetary stake, the required **individual**
report probability q is only **~0.1–1%**. The 10× ceiling holds down to q ≈ 0.5–1%;
the floor needs **fewer than ~1 in 300–1000 affected people to report a fraud that
cost them a benefit they were owed** — implausible. This **inverts the burden of
proof**: the skeptic must argue near-total civic apathy despite low cost and a stake.

### Sensitivities (the honest conditions)
- **Detection** (the strong assumption): at viral p≈1 the distributed captures 0
  (37% delivered); at p≈0.6, 8.6 captured (31%); at **p≈0.3 it collapses to −4%**,
  like the central. The advantage is *conditional on the fiscalization layer working*.
- **Acquisition scaling** kd: needs kd ≥ 0.2 (the equal-wallet / many-supporters cost);
  at kd=0.1 (swinging support is cheap) the distributed captures 21 projects.

## The honest conditions (load-bearing design dependencies)
The distributed's capture-resistance is **conditional**, and the conditions are the
architecture's explicit design targets — not free:
1. **Real transparency** (a visible audit trail) → large m (every affected citizen can
   see the misallocation).
2. **Un-suppressible denuncia** (an automatic channel, not gated by capturable
   enforcers) → the report bites without passing a bribable bottleneck.
3. **Anti-sybil identity** → reporters are real and cannot be drowned in noise; the
   automated/reputational fiscalization cannot be astroturfed.
4. **Low-cost, truthful denuncia** (with a false-report penalty via evidence
   contracts / cross-corroboration) → q is high for the aggrieved without enabling
   weaponized false denuncia.
If any of these fail, m or q collapse and the floor rises toward the central. This is
the honest frontier, the same conditional form as γ (accountability) and β (voice).

## Bibliographic basis
- **Becker, G. (1968), "Crime and Punishment: An Economic Approach," *JPE* 76(2):169–217** — deterrence = P(detection) × penalty; efficient deterrence can raise p instead of f.
- **Becker, G. & Stigler, G. (1974), "Law Enforcement, Malfeasance, and Compensation of Enforcers," *J. Legal Studies* 3(1):1–18** — enforcers themselves are bribable; the cost of capturing the enforcement layer.
- **Dyck, A., Morse, A. & Zingales, L. (2010), "Who Blows the Whistle on Corporate Fraud?," *J. Finance* 65(6):2213–2253** — fraud detection "takes a village" (employees 19%, regulators 16%, media 14%; SEC 6%, auditors 14%); **monetary** (not reputational) incentives drive whistleblowing.
- **Stokes, S. (2005), "Perverse Accountability," *APSR* 99(3):315–325** — vote/support buying requires costly monitoring; the secret aporte lets the bought renege → distributed bribery is expensive and fragile.
- **Olson, M. (1965), *The Logic of Collective Action*** & **Latané, B. & Darley, J. (1968)** — reporting harm is an under-provided public good when costly (raises q's importance).
- **Tsebelis, G. (2002), *Veto Players*** — capturing a system with more independent decision points requires reaching more of them.
- Direct-democracy capture (counter-evidence, honestly cited): California ballot-measure spending — US$4.2 bn (2000–2020), Prop 22 US$200 m — money captures referenda via persuasion, the shared channel.
- Equal-per-citizen quota (H025, this corpus) — the anti-plutocratic cap: money buys attention, not wallets.

## What this changes in the paper
A **new result that unifies the two contributions**: the allocation advantage (E4,
the "+53%" effect) is made *robust* by the integrity layer (the "+43%" deterrence
effect), because capture-resistance is what stops the allocation being reversed by
organized rents. The honest headline is a **conditional capture threshold**, not a
multiplier: *"the status quo turns net-harmful at rents of ~10% of project cost; the
distributed resists ~10× higher rents — conditional on its fiscalization achieving a
low detection floor (an expected ~0.1–2 reporters per captured project, i.e. ~0.1–1%
of a transparent affected public), which the equal wallet, un-suppressible low-cost
denuncia, and anti-sybil identity are designed to deliver."* Placement (master vs the
companion/experiments repo) is open — this bridges E4 and the integrity layer and may
belong with the companion measurements.
