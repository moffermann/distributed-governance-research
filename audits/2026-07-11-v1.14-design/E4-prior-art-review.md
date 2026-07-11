# Prior-art / state-of-the-art review (P0) — FIRST PASS

> The gate. **Recommendation (first pass): DROP / PIVOT the standalone foundational paper — the core F↔G
> divergence is already well established across several literatures.** This is a lean, not a final verdict:
> confirm with Codex's independent scan (credits permitting) and by reading the closest papers in full.
> Method: web search across the adjacent literatures (2026-07-11); databases/queries logged below.

## The claim, decomposed — and where each piece already lives

Our "foundational" object = *individuals hold private valuations F; a third party / planner estimates them as G;
G diverges from the F-aggregate, driven by self-projection; and this can be measured by asking people to rate
something and guess how others rate it.* Every one of those pieces is established:

| Sub-claim | Closest established work | Verdict |
|---|---|---|
| People overestimate how much others share their values (self-projection) | **False-consensus effect** — Ross, Greene & House (1977) and a large successor literature | **Established** |
| Projecting your own preferences onto others produces forecasting error, *worse* when group info is given | **Interpersonal projection bias** (Gagnon-Bartsch et al.); projection/affective-forecasting lit; food-preference projection | **Established** |
| People/estimators inaccurately estimate what others believe/value (meta-perception inaccuracy) | **Second-order beliefs / meta-perception** lit (misperceived polarization, etc.) | **Established** |
| The "rate it, then guess how others rate it" instrument | **Meta-prediction / "Surprisingly Popular"** — Prelec, Seung & McCoy (2017, *Nature*); hidden-experts meta-prediction (Martinie et al.) | **Established (this IS the app's mechanic)** |
| Planners/officials systematically mis-estimate constituents' preferences | **Elite–mass perception gap** — Broockman & Skovron (2018, *APSR*) | **Established** |
| Planners mis-estimate the **distribution** of preferences, via **projection**, and thinking about the distribution reduces the error | **"Beyond the mean"** — Dias, Lucas & Sheffer (*PSRM*) — *nearly our exact thesis* | **Established — decisive** |
| Presentation/context (3D/VR/live vs description) shifts valuation / WTP | VR & discrete-choice-experiment valuation lit (e.g. immersive VR in stated-preference/WTP studies) | **Established** |
| Eliciting value for public goods; hypothetical bias; consequentiality | **Contingent valuation / stated preference**; WTP–WTA gap & consequentiality (Vossler et al.) | **Established** |

## Honest reading

There is **no room for a novel standalone "F-vs-G divergence" theory+experiment paper.** The theorem would
re-derive false-consensus / meta-prediction results; the app's mechanic is the Surprisingly-Popular instrument;
and the specific "planner mis-estimates the *distribution* via *projection*" claim — the one we thought was our
edge — is essentially **Dias, Lucas & Sheffer, "Beyond the mean."** The elite–mass gap (Broockman–Skovron) already
supplies the planner-misperception result in the civic domain.

## Recommendation

1. **DROP the standalone foundational paper as conceived.** It would be redundant.
2. **Harvest this literature for the architecture paper — this is the real win.** The distributed-governance
   paper's F≠G premise (the credit-vs-coverage / planner-projection mechanism) is **no longer a hand-wave**: it is
   backed by Ross et al. (1977), Broockman & Skovron (2018), Dias–Lucas–Sheffer, Prelec et al. (2017), the
   projection-bias literature, and contingent valuation. **E4 simplifies by *citing* this, not by us proving it.**
3. **Possible narrow salvage (needs deeper confirmation, likely minor):**
   - The **consequentiality** angle — valuations under a *consequential* mechanism (Core v0) vs hypothetical
     survey (WTP–WTA consequentiality lit) — is relevant to the architecture but is itself an existing finding.
   - The **gamified app remains useful as a cheap data instrument** to elicit the architecture's own parameters
     (a projection weight `w` and dispersion `σ` for *public-project* value in citizen-vs-planner context), even
     if that is a measurement tool rather than a novel scientific contribution.
   - Whether the exact combination *public-project value × citizen-context vs planner-information-context ×
     gamified elicitation* is unpublished was **not fully ruled out** here; if a deeper search finds it open, a
     short empirical note (not the grand theorem paper) is the most it could support.

## Caveats on this pass
- Web-search first pass, not an exhaustive systematic review; closest papers not yet read in full.
- Confirm with **Codex's independent prior-art scan** (blocked now by its usage limit) and by reading
  Dias–Lucas–Sheffer, Broockman–Skovron, and Prelec et al. in full before any final drop/keep decision.

## Sources (key)
- Ross, L., Greene, D., & House, P. (1977). "The False Consensus Effect." *J. Exp. Soc. Psych.* 13(3).
- Broockman, D., & Skovron, C. (2018). "Bias in Perceptions of Public Opinion among Political Elites." *APSR* 112(3).
- Dias, N., Lucas, J., & Sheffer, L. "Beyond the mean: how thinking about the distribution of public opinions reduces politicians' perceptual errors." *Political Science Research and Methods.*
- Prelec, D., Seung, H. S., & McCoy, J. (2017). "A solution to the single-question crowd wisdom problem." *Nature* 541.
- Gagnon-Bartsch, T., et al. "Failures in Forecasting: An Experiment on Interpersonal Projection Bias."
- Vossler, C. et al. "Revisiting the Gap between Willingness to Pay and Willingness to Accept for Public Goods." *JAERE.*
- (Contingent valuation / hypothetical-bias meta-analyses; immersive-VR stated-preference WTP studies.)
