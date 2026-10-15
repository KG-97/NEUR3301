# NEUR3301 Lecture 12 - Axon Initial Segment (AIS) and Plasticity

**Timetable attribution — unconfirmed:** 19 August 2026 · Alex Tang · Test 2 and final exam. Verify the date and lecturer against the LMS or Outlook before treating them as official.

> Evidence boundary: this note is built from the **released lecture slide PDF** (all 25 slides, file labelled 2026), not the recording, so spoken emphasis, verbal caveats and examples given aloud are not captured. Most of the evidence sits in figure panels; numbers below were read off graphs and are approximate. The deck ends on an open question (how NMDA receptor activation remodels the AIS) that its bullets do not answer.

## What this lecture is really about

Synaptic plasticity changes what a neuron *receives*. AIS plasticity changes how the neuron *converts* what it receives into spikes. The deck's two organising claims: (1) because the AIS is where spikes start, changing its structure or channel content is a strong lever on excitability; and (2) neurons pull that lever in response to **chronic** shifts in activity, in the direction that pushes firing back toward a normal range. That is a homeostatic framing, not a memory-storage framing. The deck's own later data (enrichment, bicuculline or KCl, and bath NMDA) show AIS changes within an hour, so 'chronic' fits the culture experiments rather than being a strict requirement.

The evidence climbs a ladder: dissociated hippocampal culture (where the activity sensor was identified), chick auditory brainstem during development, mouse barrel cortex in juveniles and young adults, then mouse hippocampal slices for the link with synaptic plasticity. There are **no human plasticity data**; the only human material is anatomical (how often axons arise from dendrites).

## What you need to know cold

### AIS structure and function

1. The AIS is the short stretch of axon between the hillock and the first myelin. Synaptic potentials are integrated here and the action potential normally starts here.
2. **Channel density:** voltage-gated sodium (NaV) channels at 5–50 times somatic density; Kv1 channels enriched about tenfold, shaping spike waveform. The Petersen schematic also places Kv7.2/7.3, Kv2.1/2.2, Kv1.4 and T/R/Q/N-type CaV channels there.
3. **Scaffold:** ankyrin-G and βIV-spectrin form a complex that anchors NaV and Kv7 channels and links them to actin. Ankyrin-G labelling (including transgenic labelling in mice) is how the AIS is identified and measured.
4. **Polarity barrier:** the AIS keeps somatodendritic proteins out of the axon.
5. **Dedicated input:** many AIS receive axo-axonic synapses, for example from chandelier cells; the Kole & Stuart electron micrograph shows presynaptic terminals on the AIS.

### Where the axon starts

6. The AIS is always on the axon, but the axon does not always leave the soma. Höfflin et al. sorted cortical pyramidal cells and PV interneurons into three groups: soma origin with a proximal AIS, soma origin with a distal AIS, and **dendrite origin** (axon-carrying dendrite, AcD).
7. **AcD neurons are more excitable** for input on that dendrite: hyperpolarised spike threshold, AIS nearer the synapses, and less exposure to somatic inhibition. In rodent hippocampus about half of CA1 pyramidal cells were AcD cells, more than CA3 (~28%) or subiculum (~20%) (Thome, Kelly et al.).
8. **Species matters:** in grey matter, AcD pyramidal cells were roughly 15–20% in pig, mouse, rat and cat but about 5% in macaque and about 2% in human; white matter values were higher (Wahle et al.). Rodent CA1 rules do not transfer directly to human cortex.

### NaV subtypes along the AIS

9. NaV1.6 dominates. AIS NaV channels activate and inactivate at more negative voltages than somatic ones.
10. **Distal NaV1.6** has the lower activation threshold and does most of the work of initiation. **Proximal NaV1.2** (with NaV1.1) matters more for the spike that propagates back into soma and dendrites. Position along the AIS assigns function.

### In vitro: the AIS moves (Grubb & Burrone)

11. Adding 15 mM KCl for 48 h (12–14 days in vitro) chronically depolarised cultured hippocampal neurons (rat, per the paper). The ankyrin-G profile shifted **distally** by about 5–7 µm (start ~4 → ~10 µm; end ~38 → ~44 µm) with **length unchanged** (~35 µm). Returning cells to normal medium moved it back.
12. The shift came with a higher **current threshold** (about 310 → 410 pA).
13. **Sensor by pharmacology:** TTX did not stop the shift, so sodium spiking is not required. Nifedipine (L-type), mibefradil (L/T) and Ni²⁺ (R/T) abolished it; SNX (R-type), ω-agatoxin (P/Q) and ω-conotoxin (N) did not. Because selective R-type block failed, the Ni²⁺ effect points to T-type: **L- and T-type Ca²⁺ channels** are the sensors.
14. **Pattern matters:** in sparse ChR2-expressing neurons, 0.2 Hz or unpatterned 1 Hz light did not move the AIS, but **1 Hz bursts** did. Mibefradil blocked the burst effect; with TTX a shift persisted (significant at the peak position), consistent with light-driven depolarisation reaching Ca²⁺ channels without spikes.
15. Summary schematic: chronic or burst depolarisation → T/L-type Ca²⁺ → distal shift → the same somatic current no longer reaches threshold. Interpretation: a **homeostatic** brake.

### Development: chick nucleus magnocellularis (Akter et al.)

16. Avian cochlear nucleus neurons are mapped tonotopically: high-frequency cells rostromedial, low-frequency caudolateral. Synaptic input arrives ~E10, hearing begins ~E12–14, hatching ~E21.
17. AIS length starts near 50 µm in both regions (E15) and **shortens** with maturation, more in high-frequency cells (about 20 vs 25 µm by P3–4). Low-frequency cells keep the longer AIS.
18. NaV content rises as the AIS matures and the subtype changes: NaV1.2 labelling fades by E18–21 while NaV1.6 increases.
19. **Otocyst removal at E2** abolished the tonotopic length difference at E21 (high ~30 vs low ~34 µm, no longer significant), but NaV accumulation and the subtype switch were unaffected. Conclusion: developmental AIS refinement is **only partly activity-dependent**.

### Young adulthood: mouse barrel cortex (Jamann et al.)

20. In layers II/III and V, AIS length rises over roughly the first two postnatal weeks (to ~30 µm), then declines and **stabilises** (~20–22 µm by P180).
21. **Deprivation lengthens:** daily whisker trimming from birth gave a longer AIS at P15, P21 and P45. Letting whiskers regrow after P21 removed the difference by P45 (reversible). Trimming for 16 days in mice older than P100 still lengthened the AIS. The slide stresses that deprivation had to be long; the short-window (P10–P15) group's result is not shown.
22. **Enrichment shortens, fast:** P28 mice had one whisker pad trimmed, then explored a novel enriched cage. The hemisphere driven by intact whiskers had a shorter AIS at 1 h and 3 h, but not at 6 h. c-Fos labelling rose at 1–3 h and was back to baseline by 6 h. Three hours of enrichment then three hours in the home cage gave no difference; a **new** environment after 6 h shortened the AIS again.
23. **Function:** after enrichment, current threshold rose (median ~340 → ~430 pA) with **no change in voltage threshold**. In acute slices kept in bicuculline or high KCl, the AIS was shorter after 1 h of incubation but back near control length at 3 h and 6 h even though incubation continued (context beyond the slides: Jamann et al. used 15 µM bicuculline or 8 mM KCl and report the AIS returning to baseline by 6 h of incubation).

### Overlap with synaptic plasticity (Fréal et al.)

24. Brief bath NMDA (then APV) in hippocampal slices from AnkG-GFP mice depolarised CA1 neurons into a burst of firing, induced chemical LTD (Schaffer-collateral EPSCs down about 30%) and shortened the CA1 AIS over 30–60 min (~31 → ~26 µm), while control AIS stayed constant.
25. Voltage threshold depolarised, about **0.5 mV per µm** of AIS lost.
26. Blocking NMDA receptors during NMDA prevented the AIS change. Electrically induced LTD did not shorten the AIS, and neither did depolarising the cell to fire action potentials.
27. Open question on the final slide: how does NMDA receptor activation do this? The cited paper's title (on slide 24) names **sodium-channel endocytosis** as the driver. (Context beyond the slides: the paper reports clathrin-mediated removal of NaV channels from the distal AIS within minutes.)

## Quantitative anchor

Threshold scales with AIS shortening in the Fréal data:

```text
ΔV_threshold ≈ k × (−ΔL_AIS),   k ≈ 0.5 mV per µm
```

Worked example: NMDA shortens an AIS from 31 to 26 µm, so ΔL = −5 µm and ΔV_threshold ≈ 0.5 × 5 = **+2.5 mV** (for instance −46 → about −43.5 mV). The cell needs more depolarisation to fire. Two cautions: control cells also drifted by ~1–2 mV over the hour, so compare against control; and the relation is a cross-cell correlation, not a measured mechanism.

Current-threshold version (Grubb): rheobase 310 → 410 pA is a rise of about a third. A synaptic drive equivalent to 350 pA would fire the cell before the shift and fail after it.

## Mechanism chains

```text
CHRONIC DEPOLARISATION -> AIS RELOCATION (culture)
+15 mM K+ for 48 h, or 1 Hz optogenetic bursts
-> sustained depolarisation opens L-type and T-type Ca2+ channels
   (NaV spiking not required: TTX ineffective)
-> Ca2+-dependent signal moves the ankyrin-G scaffold and channels distally
-> length unchanged, position ~5-7 um further out
-> current threshold rises -> firing pushed back toward set point
-> normal medium -> AIS returns
```

```text
TONOTOPIC AIS REFINEMENT (chick embryo)
Afferent input after hearing onset
-> AIS shortens from ~50 um in every region (much of this still happens without otocysts);
   afferent input adds extra shortening in high-frequency cells
-> tonotopic length difference (low-frequency AIS longer)
   [otocyst removal abolishes this step]
Parallel, input-independent:
-> NaV channels accumulate; NaV1.2 fades, NaV1.6 rises
```

```text
SENSORY DRIVE -> AIS LENGTH (mouse barrel cortex)
Weeks of whisker trimming -> less input -> AIS lengthens -> more excitable
   (reverses on regrowth; still inducible after P100)
Hours of novel enrichment -> more input (c-Fos up)
-> AIS shortens at 1-3 h -> current threshold up
-> novelty fades -> activity and AIS back to baseline by 6 h
```

```text
NMDA RECEPTORS LINK SYNAPTIC AND AIS PLASTICITY (mouse slices)
Bath NMDA -> NMDA receptor activation
-> chemical LTD at Schaffer-collateral synapses
-> AIS shortens over 30-60 min (APV blocks it)
-> voltage threshold up ~0.5 mV/um
-> input and output gain both reduced
(electrical LTD or firing alone: no AIS change)
```

## Key experiments

| Experiment | Design | Result | Inference and limit |
|---|---|---|---|
| Grubb & Burrone 2010 (culture) | 48 h +15 mM K⁺; blocker panel; ChR2 light at different patterns | Distal shift, length unchanged, reversible; current threshold up; L/T blockers stop it, TTX does not; only bursts work | Activity sets AIS **position** through Ca²⁺ entry. Culture; the threshold link is correlational. |
| Akter et al. 2020 (chick) | Track AIS length and NaV subtypes E15–P4 across tonotopic regions; remove otocysts at E2 | Shortening, larger in high-frequency cells; lesion removes the length difference but not the NaV changes | Development combines input-dependent and input-independent steps. |
| Jamann et al. 2021 (mouse) | Chronic trimming (juvenile, regrowth, adult); unilateral trimming plus 1–6 h enrichment; recordings | Deprivation lengthens; enrichment shortens within hours and recovers; current threshold up | Bidirectional, reversible AIS plasticity **in vivo**, persisting past P100. |
| Fréal et al. 2023 (mouse slices) | NMDA-induced LTD with AIS imaging; NMDA-receptor block, electrical LTD and firing controls | AIS shortens, voltage threshold up (~0.5 mV/µm); controls negative | NMDA receptor activation is the shared trigger; the slides leave the mechanism as a question. |

## Examiner traps and common overclaims

- **"AIS plasticity needs action potentials."** TTX did not prevent the K⁺-induced shift; Ca²⁺ entry via L/T-type channels is the signal.
- **"Plasticity always means shortening" (or lengthening).** The culture shift changed position, not length; deprivation lengthened; enrichment and NMDA shortened. Sign depends on preparation and stimulus.
- **"Any extra activity moves the AIS."** Unpatterned 1 Hz light failed where 1 Hz bursts worked: pattern matters.
- **"Development is entirely activity-driven."** Otocyst removal spared NaV accumulation and the NaV1.2 → NaV1.6 switch.
- **"AIS plasticity stops after development."** It persisted past P100, but needed long deprivation.
- **"Any LTD remodels the AIS."** Only the NMDA bath did; electrical LTD did not.
- **"c-Fos drives shortening."** c-Fos is an activity readout; it tracks the change but is not shown to cause it.
- **"Current threshold and voltage threshold are interchangeable."** Enrichment raised current threshold with voltage threshold unchanged; NMDA raised voltage threshold.
- **Species slip.** Culture is rodent (rat), development is chick, adult and slice work is mouse; the human data are only AcD counts.

## Interrogation prompts

1. Neurons sit in +15 mM K⁺ for 48 h with nifedipine. Predict AIS position and current threshold. Repeat with TTX instead.
2. ChR2 neurons receive the same mean frequency as unpatterned pulses or as bursts. Which shifts the AIS, and what does that imply about how the sensor reads activity?
3. Otocysts are removed at E2. Predict AIS length in high- and low-frequency neurons at E21, and NaV1.6 labelling.
4. A mouse is trimmed from P0 to P21, then whiskers regrow until P45. Predict AIS length. Would you expect the same reversal in a mouse older than P100? (The slides do not test it.)
5. After 6 h of enrichment the AIS is back to control length. What manipulation distinguishes "activity has fallen" from "the AIS stopped responding"?
6. NMDA is applied with APV throughout. Predict EPSC amplitude and AIS length.
7. An AIS shortens by 8 µm after NMDA. Estimate the voltage-threshold change and its direction.
8. A CA1 AcD neuron receives strong perisomatic inhibition. Is input on the axon-carrying dendrite or on a regular basal dendrite more likely to trigger a spike, and why?

## Active recall — close the notes

- Name the two AIS scaffold proteins and what they anchor.
- Give the NaV density ratio (AIS vs soma) and the Kv1 enrichment.
- Where do NaV1.6 and NaV1.2 sit along the AIS, and what does each do?
- List three reasons AcD neurons are more excitable, and how AcD frequency differs between rodents and humans.
- What did 48 h of high K⁺ do to AIS position, length and current threshold?
- Which blockers did and did not prevent the shift, and how does that identify L/T-type channels?
- Which light pattern moved the AIS?
- How does AIS length differ between high- and low-frequency neurons, and what did otocyst removal change and spare?
- Describe the deprivation and enrichment effects on barrel-cortex AIS length, with timescales.
- What happens to the AIS and voltage threshold after NMDA-induced LTD, and which two manipulations fail to reproduce it?

## Sources checked on PubMed

- Kole & Stuart (2012) Neuron — [doi:10.1016/j.neuron.2012.01.007](https://doi.org/10.1016/j.neuron.2012.01.007)
- Thome et al. (2014) Neuron — [doi:10.1016/j.neuron.2014.08.013](https://doi.org/10.1016/j.neuron.2014.08.013)
- Höfflin et al. (2017) Front Cell Neurosci — [doi:10.3389/fncel.2017.00332](https://doi.org/10.3389/fncel.2017.00332)
- Wahle et al. (2022) eLife — [doi:10.7554/eLife.76101](https://doi.org/10.7554/eLife.76101)
- Grubb & Burrone (2010) Nature — [doi:10.1038/nature09160](https://doi.org/10.1038/nature09160)
- Akter et al. (2020) J Neurosci — [doi:10.1523/JNEUROSCI.3068-19.2020](https://doi.org/10.1523/JNEUROSCI.3068-19.2020)
- Jamann et al. (2021) Nat Commun — [doi:10.1038/s41467-020-20232-x](https://doi.org/10.1038/s41467-020-20232-x)
- Fréal et al. (2023) Sci Adv — [doi:10.1126/sciadv.adf3885](https://doi.org/10.1126/sciadv.adf3885)
