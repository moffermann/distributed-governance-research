# E4 — Calibration targets: from model-internal to empirically anchored

> **🛑 SUPERSEDED (2026-07-10; controlling).** This note predates BOTH the value-model-v2 reframe AND its
> retirement; its harm-blindness (beta*=1-eta) framing and all headline multipliers (2.2x/2.09x/1.83x/2.0x)
> are HISTORICAL. **In particular, the "central %-oracle is calibratable now by a simple overlay" claim (rows
> below) is RETIRED:** the realized/appraised ratio and the model's central-vs-benchmark share are *different
> constructs*, so linking them needs an explicit construct bridge — a **candidate validation target**, not a
> one-step overlay (see the paper's calibration appendix and `research/claim-and-estimand-contract.md`).
> Controlling docs: `research/claim-and-estimand-contract.md` + the symmetry gate. Kept for the record.

## Status
From the constructive round's empirical-calibration reviewer. The E4 magnitudes are
honestly labeled "model-internal"; this note makes the *gap* a visible line in a table
and names, for each decisive parameter, the real dataset that could calibrate it. The
highest-ROI move (a decisive axis that is also a directly-checkable model *output*) is
marked ★. Nothing here changes a result; it is a roadmap + convergent field evidence.

## Calibration-targets table
| Model quantity | Model value | Real-world proxy | Candidate dataset(s) | Status |
|---|---|---|---|---|
| ★ **central %-oracle** | 46–68% | realized ÷ appraised project value | **World Bank IEG** outcome ratings; **Flyvbjerg / Oxford Global Projects** megaproject DB (16k+); US GAO / nine-country audit set | *calibratable now* (it is an output) |
| **γ** (harm-blindness) | 0–0.5 (modal ≈0) | oversight effectiveness; passive-vs-active waste share | Bandiera-Prat-Valletti 2009 (**83% waste passive**); audit detection-lag studies | anchored-direction |
| **β** (voice inequality) | 0.2–0.5 swept | PB participation bias (income/age/education) | **NYC PB** (Public Agenda; Kasdan & Cabannes), **Paris/Porto Alegre** (Baiocchi; Wampler), **Decidim/Consul** analyses; Verba-Schlozman-Brady 1995 | calibratable |
| **q** (individual report prob) | 0.5–1% needed | consumer-complaint / whistleblowing base rates | TARP (~4% dissatisfied complain, dated); **FTC Consumer Sentinel**; **NYC 311**; SEC whistleblower volumes | calibratable |
| **m** (affected who can see) | hundreds | transparency-portal reach; active users | open-data portal stats; Decidim/Consul active-user counts | calibratable |
| **central acquisition** k_c | ~0.3 (fixed) | bribe depth (bribe as % of contract) | **WB Enterprise Surveys** bribe-depth; Grossman-Helpman lobbying | anchored-direction |
| **λ threshold** | central ≈0.10 | procurement corruption markup / rents | **Olken 2007** (~24% missing); Bandiera-Prat-Valletti; lobbying returns (Alexander-Mazza-Scholz ~$220/$1 upper bound) | calibratable |
| **penalty f** | equal both sides | legal sanction scale | — (held equal, conservative; reputational persistence unclaimed) | scope choice |

## Highest-ROI: calibrate the central %-oracle (★)
The central's realized/appraised ratio (46–68% of oracle) is the *one output a skeptic
can independently check*, and it targets the axis the result is dominated by (γ). If it
overlaps the observed realized-to-appraised band (World Bank IEG; Flyvbjerg), **γ≈0
graduates from "the position the literature best supports" to "the value the data
selects."** First pass = an overlay plot + a paragraph; no re-simulation. Also: cite
*which nine* audit institutions the status-quo baseline is parameterized from, with the
realized-value numbers, in an appendix table.

## Convergent field evidence for Finding 1 (direction, cleanly separable from magnitude)
A quasi-experimental literature already tests "distributed allocation delivers more real
value" on real municipalities and should be cited as independent corroboration of
*direction*:
- **Gonçalves (2014), "The Effects of Participatory Budgeting on Municipal Expenditures
  and Infant Mortality in Brazil," *World Development* 53:94–110** — PB municipalities
  (1990–2004) shifted spending to sanitation/health and saw **reduced infant mortality**,
  holding per-capita budget constant. Nearly a direct instance of "citizen-directed
  allocation → more delivered value."
- **Touchton & Wampler (2014)**, *Comparative Political Studies*; **Boulding & Wampler
  (2010)**, *World Development* — PB adoption associated with improved well-being.
- **Olken (2007)** — the honest counter to cite as our own condition made empirical:
  top-down audits outperformed grassroots community monitoring in Indonesian roads
  (free-riding + elite capture). This *is* our q≈low residual; citing it (not hiding it)
  buys integrity credit and bounds the detection-floor claim.

## Honest presentation of the gap
Replace the abstract's opaque "(not calibrated to a dataset)" with: *"directions and
parameter ranges are anchored to published findings; magnitudes are model-internal and
not yet fit to a specific dataset — §X gives a calibration roadmap and the falsifiable
predictions it would test."* Naming the gap as a **roadmap** reads as confidence. Add one
abstract clause surfacing the calibratable output ("the central baseline delivers 46–68%
of oracle — checkable against ex-post project-evaluation data") and one clause of field
corroboration (Gonçalves 2014).
