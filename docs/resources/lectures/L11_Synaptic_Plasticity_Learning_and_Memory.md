# NEUR3301 Lecture 11 - Synaptic Plasticity, Learning and Memory

**Timetable attribution — unconfirmed:** 18 August 2026 · Alex Tang · Test 2 and final exam. Verify the date and lecturer against the LMS or Outlook before treating them as official.

> Evidence boundary: this note is built from the **released lecture slide PDF** (all 23 slides; the file name carries 2026, but the slides carry no year and the PDF metadata gives a creation date in August 2025, so the deck delivered on 18 August 2026 may differ), not the recording, so spoken emphasis, verbal caveats and examples given aloud are not captured. Figures are described from their visible panels. Several panels have no on-slide protocol or species label, so details taken from the cited papers are flagged. The only typographic emphasis is underlining of *timing* (STDP slide) and *threshold* (sliding-threshold slide).

## What this lecture is really about

The deck runs from a **rule** to a **mechanism** to the **controls on that mechanism**. Hebb supplies the rule: a synapse that repeatedly helps fire its target gets stronger. Electrophysiology supplies the readout, at single-cell or network resolution. LTP and LTD are the phenomena, NMDA receptors the trigger and AMPA-receptor number the expressed change. The lecture then scales up to **ensembles** of co-active neurons as Hebbian assemblies, and finishes with the brakes: anti-Hebbian rules, spike timing, a sliding LTP/LTD threshold and metaplasticity, which stop plasticity saturating or tipping into excitotoxicity.

Two separations earn marks. **Induction versus expression:** what triggers the change versus what physically changes. **Measurement versus mechanism:** a bigger field potential is an observation; more AMPA receptors, more release or more excitable cells are explanations. Every experiment shown is animal work (rabbit and mouse are visible on the slides; rat comes from the cited papers). Hebb's postulate and the BCM model are theory. There are no human data.

## What you need to know cold

### Definitions and the Hebbian rule

1. **Plasticity** (Dunlop 2008 definition on the slide): neurons reorganise their anatomical and functional connections in response to input, producing new or altered outputs, i.e. behaviour. Functional plasticity covers excitability, inhibition, conduction velocity and synaptic efficacy. The slide's footnote: the definition leaves out **glia**, which also show structural and functional plasticity.
2. **Where plasticity can act** (pre vs post slide): action potential → calcium influx at the terminal → vesicle fusion and release → transmitter binds receptors and channels open → postsynaptic potential. A change can sit **presynaptically** (how much is released) or **postsynaptically** (how strongly it is detected).
3. **Hebb (1949):** when cell A repeatedly or persistently takes part in firing cell B, some growth or metabolic change makes A more effective at firing B. Slogan: *fire together, wire together*. Key features: timing matters, and near-simultaneous firing strengthens. Implications drawn on the slide: high-frequency activity gives stronger synapses; low-frequency activity gives weaker ones.
4. Read the postulate closely: A *takes part in firing* B, which is causal and implies A fires first. Hebb proposed only strengthening; weakening rules came later (context beyond the slides).

### Measuring plasticity

5. **Patch clamp, single-cell resolution:** evoke a spike in an identified presynaptic cell and record the postsynaptic response; bigger = facilitation/potentiation, smaller = suppression/depression. The example traces are paired responses scaled in **pA**, i.e. currents, although the text says "potential"; the slide does not say what distinguishes the black and red traces.
6. **Field potentials, network resolution:** stimulate CA3 (Schaffer collateral) inputs and record the summed response around CA1 cells; amplitude and slope index synaptic strength. In the Nugent et al. (2008) example, high-frequency stimulation (HFS) at 20 min lifts the field potential from about 0.32 to about 0.40 mV, sustained for the remaining ~55 min. (Context beyond the slides: that trace is from field potentials in rat ventral tegmental area slices (Nugent et al., Neuropsychopharmacology 2008, doi:10.1038/sj.npp.1301561), not the CA3→CA1 pathway drawn beside it, so treat it as a generic LTP readout.)
7. **Time scales:** milliseconds to minutes = short-term potentiation or depression; **more than 30 min** = long-term (LTP/LTD).

### LTP and LTD

8. **Bliss and Lømo (1973):** field recordings in anaesthetised rabbit. The bullet says "hippocampus"; the reproduced figure and paper title specify perforant-path stimulation and recording in the **dentate area**, not CA1. Conditioning trains (15/s in the panel) produced a lasting rise in the population EPSP, a larger population spike and a shorter spike latency. Further trains stepped the response up until it **saturated**, while the control pathway stayed near baseline.
9. **LTD:** the slide dates it to 1977 (rabbit hippocampus, field recordings): low-frequency stimulation (LFS) gave lasting depression. The Collingridge et al. (2010) panel shows EPSC amplitude falling to about 60% of baseline for 40+ min. (Context beyond the slides: the 1977 paper usually credited, Lynch and colleagues, used rat slices and described depression of *unstimulated* inputs; the standard input-specific LFS protocol, 900 pulses at 1–3 Hz in CA1, is Dudek and Bear 1992.)
10. **Receptor roles:** NMDA receptors are central to **induction**, and NMDA-receptor blockers prevent plasticity. Synaptic strength is set by the **number/density of AMPA receptors**, and adding or removing them **follows** induction: AMPA receptors express plasticity, they do not trigger it.
11. **Derkach et al. (2007) schematic:** calcium entering through synaptic NMDA receptors fans out to four interacting processes (protein phosphorylation, AMPA-receptor properties and trafficking, cytoskeletal reorganisation, local protein synthesis). Expression is drawn as more AMPA receptors at the postsynaptic density, some arriving from extrasynaptic membrane, plus an enlarged scaffold.
12. **Nabavi et al. (2013) panels** sit beside the "blockers prevent plasticity" bullet, yet show an exception. Without drug, 100 Hz gives lasting potentiation. After a depressing stimulus (protocol not labelled) in **D-APV**, the depression fades back to baseline (NS); in **MK-801** a lasting depression remains (P<0.01). (Context beyond the slides: D-APV competes with glutamate at its binding site, whereas MK-801 plugs the open channel. The authors concluded that glutamate binding without ion flow can induce LTD; Babiec et al. 2014 found MK-801 did block LTD in mouse CA1, so this is contested.)

### Ensembles

13. **Neuronal ensembles** are groups of neurons that fire together and may be the units from which circuits are built. They are common in sensory and motor circuits, where a stimulus or a movement recruits a group that represents it, and are thought to form by Hebbian strengthening among co-active cells.
14. **Carrillo-Reid et al. (2016):** awake head-fixed mice; two-photon photostimulation of a chosen group of visual-cortex neurons (C1V1 opsin) while imaging calcium (GCaMP6s). Targeted cells responded to each population pulse; non-targeted neighbours did not. After repeated co-stimulation the group **recurred spontaneously**, and stimulating **one member recalled the ensemble**, which the same stimulation had not done before training.

### Rules that qualify Hebb

15. **Anti-Hebbian plasticity:** the presynaptic cell drives the postsynaptic cell to fire, yet the synapse **weakens**. On the schematic, strength change rises with synchrony for Hebbian synapses and falls for anti-Hebbian ones.
16. **STDP:** the order of pre- and postsynaptic spikes decides the outcome. In the Kampa, Letzkus and Stuart (2007) figure (cited as Stuart), pre-before-post gives potentiation peaking near 165% at the shortest intervals; post-before-pre gives depression to about 75%; both fade toward baseline by ±40 ms. The rules **change with the synapse's position on the dendrite**.
17. **Sliding threshold (BCM 1982;** the slide spells it "Bienstock"): plasticity must stay balanced and able to switch between LTP and LTD. The LTD/LTP crossover (θM) **slides with previous postsynaptic activity**: high prior activity shifts it right (LTP harder), low prior activity shifts it left (LTP easier). Panel (b): the crossover sits near 2 Hz in dark-reared animals and near 5–10 Hz in light-reared ones. (Context beyond the slides: the panel is from Kirkwood, Rioult and Bear 1996, rat visual cortex. Also, "synaptic scaling" usually means homeostatic scaling of all a neuron's synapses after prolonged activity change, which shares the goal but not the mechanism; the slide titles this topic "synaptic weight scaling".)
18. **Metaplasticity:** the plasticity of plasticity, a safeguard against saturation and excitotoxicity. Physiological or biochemical changes alter a synapse's ability to produce later plasticity. Abraham's schematic: priming (transmitters, paracrine signals, hormones) sets up a state lasting **minutes to days**, drawn with **baseline transmission unchanged**, which later alters the response to HFS, LFS or learning. Its mechanisms overlap with ordinary plasticity, blurring the line, and LTP or LTD can itself leave a metaplastic state.
19. **Hulme et al. (2013) trace:** a weak tetanus to pathway S1 gives potentiation that decays over hours to about 110–115%; three strong trains to S2 at 240 min give about 150%, stable to 480 min. The slide does not annotate the comparison.

## Reading the numbers

- **Percent change** = (after − baseline) / baseline × 100. Nugent example: (0.40 − 0.32) / 0.32 = **+25%**. LTD to 60% of baseline = a 40% depression.
- **Bliss and Lømo:** population EPSP about 2 → 4 mV, roughly **+100%**; four trains over ~3 h stepped it to ~300%, where it plateaued for the 6 h record.
- **STDP** (context beyond the slides: Δt = t_post − t_pre). Pre at 0 ms, post at 5 ms → Δt = +5 ms → roughly +50%. Reverse the order → Δt = −5 ms → roughly −20%.
- **BCM** (context beyond the slides): dw/dt = η · x · y · (y − θM), where x and y are pre- and postsynaptic activity and θM tracks the recent average of y². Worked case: θM = 10 and y = 6 gives (6 − 10) < 0, so LTD. After deprivation θM falls to 4; the same y = 6 gives (6 − 4) > 0, so LTP. The slide data match: a 10 Hz train gives about +15% after dark rearing versus about +5% after light rearing.

## Mechanism chains

```text
HEBBIAN LTP AT A GLUTAMATERGIC SYNAPSE
High-frequency presynaptic activity drives the postsynaptic cell
-> glutamate + strong depolarisation activate NMDA receptors
   (context: depolarisation relieves the Mg2+ block)
-> Ca2+ enters the spine
-> phosphorylation | AMPAR trafficking | cytoskeleton | local protein synthesis
-> more AMPA receptors at the postsynaptic density
-> larger EPSC / steeper fEPSP lasting >30 min
```

```text
LTD BY LOW-FREQUENCY STIMULATION
Prolonged low-frequency input
-> weaker NMDA-receptor engagement
   (Nabavi: glutamate binding alone may suffice; contested)
-> AMPA receptors removed from the synapse
-> smaller response lasting >30 min
```

```text
IMPRINTING AN ENSEMBLE (mouse visual cortex)
Repeated simultaneous photostimulation of a chosen group
-> (inferred) connections among co-active cells strengthen
-> group recurs spontaneously as an ensemble
-> stimulating one member recalls the group (pattern completion)
```

```text
KEEPING PLASTICITY IN RANGE
Prior activity or priming signals (transmitters, paracrine, hormones)
-> synapse's state changes, often with baseline unchanged
-> θM slides: up after high activity, down after low activity
-> the same later stimulus yields more LTD or more LTP
-> weights stay usable; saturation and excitotoxicity avoided
```

## Key experiments

| Experiment | Design | Result | Inference and limit |
|---|---|---|---|
| Bliss and Lømo (1973), rabbit in vivo | Perforant-path conditioning trains; field recording in dentate area; unconditioned control pathway | Lasting rise in population EPSP, larger and earlier population spike; repeated trains to saturation; control flat | First description of LTP. Population measures mix synaptic efficacy with granule-cell excitability. |
| Nabavi et al. (2013), slices | Depressing stimulus in D-APV or MK-801; 100 Hz without drug | D-APV blocks lasting depression; MK-801 does not | Ligand binding, not channel flux, may trigger LTD. Disputed in mouse CA1. |
| Carrillo-Reid et al. (2016), awake mouse | Repeated two-photon co-stimulation of a chosen cell group with calcium imaging | Group recurs spontaneously; one cell recalls it, unlike before training | Co-activation builds a pattern-completing ensemble, as Hebb predicts. Synapses not measured; no behaviour. |
| Dark vs light rearing (slide panel b) | Frequency–response curves in dark- vs light-reared animals | Crossover ~2 Hz vs ~5–10 Hz | Experience moves θM, as BCM predicts. |

## Examiner traps and common overclaims

- **"Fire together, wire together" means simultaneity.** Hebb's wording is causal, and STDP shows order sets the sign.
- **"A bigger field potential proves more AMPA receptors."** A field potential is a network measure: alone it cannot separate pre- from postsynaptic expression, and the population spike includes excitability.
- **"AMPA-receptor insertion induces LTP."** NMDA receptors induce; AMPA-receptor change is the expression that follows.
- **"All NMDA blockers prevent all plasticity."** In the slide figure, D-APV blocked LTD and MK-801 did not.
- **"The ensemble study measured potentiated synapses."** It imaged activity; strengthening is inferred.
- **Reversing BCM.** High prior activity raises θM and makes LTP *harder*.
- **"Metaplasticity is just more LTP."** It changes the capacity for later plasticity, often without moving baseline strength.

## Interrogation prompts

1. D-APV is applied during HFS, then washed out and HFS is repeated. Predict both responses and say what this separates.
2. A drug blocks AMPA-receptor delivery to the synapse but spares NMDA receptors. Predict the calcium signal and the fEPSP an hour after HFS.
3. Population-spike amplitude rises after conditioning but the initial fEPSP slope does not. Synaptic or excitability change?
4. An STDP pairing at +10 ms is repeated with the order reversed, then at a distal dendritic synapse. Predict each.
5. LTP has been saturated by repeated trains. Predict the effect of one more HFS, and of LFS.
6. Dark-reared rats get two days of light (context beyond the slides: the 1996 study tested this). Where should θM move?
7. In the ensemble experiment, what result would show that light scatter, not plasticity, explained recall?
8. A priming stimulus leaves the baseline fEPSP flat. How would you show it was metaplastic and not inert?

## Active recall — close the notes

- Paraphrase Hebb's postulate and list its two features and two implications.
- Contrast patch-clamp and field-potential readouts of synaptic strength.
- Where did Bliss and Lømo stimulate and record, and what three parameters changed?
- What duration separates short-term from long-term plasticity?
- Which receptor induces and which expresses NMDA-dependent plasticity?
- What did D-APV and MK-801 each do to LTD in the Nabavi panels?
- Define a neuronal ensemble and describe how one was imprinted and recalled.
- Define anti-Hebbian plasticity and sketch the STDP curve.
- How does previous activity move θM, and what did dark rearing show?
- Define metaplasticity and give its two purposes.

## Sources checked on PubMed

- Bliss and Lømo (1973) J Physiol — [doi:10.1113/jphysiol.1973.sp010273](https://doi.org/10.1113/jphysiol.1973.sp010273)
- Nabavi et al. (2013) PNAS — [doi:10.1073/pnas.1219454110](https://doi.org/10.1073/pnas.1219454110)
- Babiec et al. (2014) J Neurosci — [doi:10.1523/JNEUROSCI.5419-13.2014](https://doi.org/10.1523/JNEUROSCI.5419-13.2014)
- Carrillo-Reid et al. (2016) Science — [doi:10.1126/science.aaf7560](https://doi.org/10.1126/science.aaf7560)
- Kirkwood, Rioult and Bear (1996) Nature — [doi:10.1038/381526a0](https://doi.org/10.1038/381526a0)
- Bienenstock, Cooper and Munro (1982) J Neurosci — [doi:10.1523/JNEUROSCI.02-01-00032.1982](https://doi.org/10.1523/JNEUROSCI.02-01-00032.1982)
- Kampa, Letzkus and Stuart (2007) Trends Neurosci — [doi:10.1016/j.tins.2007.06.010](https://doi.org/10.1016/j.tins.2007.06.010)
- Abraham (2008) Nat Rev Neurosci — [doi:10.1038/nrn2356](https://doi.org/10.1038/nrn2356)
- Lynch, Dunwiddie and Gribkoff (1977) Nature — [doi:10.1038/266737a0](https://doi.org/10.1038/266737a0); Dudek and Bear (1992) PNAS — [doi:10.1073/pnas.89.10.4363](https://doi.org/10.1073/pnas.89.10.4363)
