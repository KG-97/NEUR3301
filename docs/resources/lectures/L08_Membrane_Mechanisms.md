# NEUR3301 Lecture 8 - Membrane Mechanisms

**Timetable attribution — unconfirmed:** 5 August 2026 · Dr Jamie Beros · Test 2 and final exam. Verify the date and lecturer against the LMS or Outlook before treating them as official.

> Evidence boundary: this note is built from the **released lecture slide PDF** (all 39 slides, deck labelled 2026), not the recording, so spoken emphasis and verbal caveats are not captured. Figures are described from their visible panels. Two purple take-home slides frame the deck: channels and ionotropic receptors are diverse and modulable, and **ion channel diversity underlies firing patterns**. Suggested reading: Purves et al., chapters 3–7.

## What this lecture is really about

The organising question (slide 5): which membrane mechanisms let neurons fire in different temporal patterns? One fast Na⁺ channel plus one delayed-rectifier K⁺ channel makes an action potential, but not the brain's range of regular, adapting, delayed, bursting and rhythmic firing. Pattern comes from **which channels a cell expresses and which of them are available at its current membrane potential**.

Three ideas carry most of the marks:

1. **Availability is a state, not a constant.** Na⁺, A-type K⁺ and T-type Ca²⁺ channels are partly inactivated at rest and recover on hyperpolarisation, so prior voltage decides whether the next depolarisation gives a rebound burst, a delay or a Ca²⁺ burst.
2. **Receptors and channels are modulated** by trace metals, by the Ca²⁺ they admit, and by refractory inactivation.
3. **Fast versus slow signalling.** An ionotropic receptor *is* the channel; a metabotropic receptor acts through a G-protein and often second messengers: slower, but amplified, longer-lasting and able to reach the nucleus.

Evidence type: every trace comes from animal or in-vitro preparations (cultured mouse hippocampal and rat olfactory bulb neurons, oocytes, cat retina) or is a textbook schematic. None is a human recording.

## What you need to know cold

### Firing patterns and channel classes

1. An action potential is an all-or-none rapid voltage change. Firing patterns differ between neurons, and **some cells switch pattern**. Slide 3's clearest case is the thalamic relay cell: **burst mode from about −75 mV, tonic "transfer" mode from about −65 mV**. Same cell and input, different holding potential. The same figure shows regular and bursting cortical pyramidal cells, Purkinje and medial habenular cells.
2. A hippocampal catalogue (slide 4) adds delayed, adapting, non-adapting, stuttering and slow-wave bursting patterns.
3. **Four gating classes:** ligand-gated (a molecule binds), voltage-gated (a built-in voltage sensor), mechanically gated (pressure or membrane stretch), and always-open leak channels whose flux is set by the gradient.
4. **Chemical transmission in four steps:** the AP invades the terminal → voltage-gated Ca²⁺ channels open → vesicles dock and fuse → transmitter diffuses and binds postsynaptic receptors.
5. **Subunit composition sets kinetics.** Nicotinic receptors can be homomeric (α7, α9) or heteromeric (α4β2, α3β4 and others). The receptor, not the transmitter, decides the effect on the target cell.

### Ionotropic glutamate receptors

6. Ionotropic receptors are fast: ions flow down their gradients once the channel opens. Excitatory receptors depolarise mainly via Na⁺ permeability; inhibitory ones hyperpolarise via K⁺ or Cl⁻ permeability.
7. Glutamate, the most abundant vertebrate CNS transmitter, acts on **AMPA, NMDA and kainate** receptors, named after selective agonists.
8. **Non-NMDA (GluA) receptors:** glutamate binding alone opens the channel.
9. **NMDA receptors are both ligand- and voltage-gated.** They need **glutamate plus glycine**, and at rest the pore is plugged by **Mg²⁺**, which depolarisation expels. The open channel admits a large Ca²⁺ influx that drives plasticity. The slide figure also marks separate Zn²⁺ and PCP sites.

### Modulation of receptors and channels

10. **Zinc and NMDA receptors.** In cultured mouse hippocampal neurons, 50 µM zinc reversibly shrinks the NMDA current; in oocytes, zinc stepped from 3 nM to 1 µM progressively reduces the glutamate/glycine current. Whether this protects against excitotoxicity is posed on the slide as a question. (Context beyond the slides: zinc inhibits non-competitively at a site distinct from the Mg²⁺ site, largely independent of voltage, and NR2A-containing receptors are sensitive to nanomolar zinc.)
11. **Zinc and copper at Ca²⁺ channels.** In cultured rat olfactory bulb neurons, 100 µM zinc and 30 µM copper reduce voltage-gated Ca²⁺ currents and repetitive firing from −50 mV. (Context beyond the slides: the source paper shows both metals also act on Na⁺ and K⁺ channels, and zinc's effect on firing depends on holding potential.)
12. **Ca²⁺-dependent inactivation (self-limiting).** Ca²⁺ entering through a channel can bind the channel's inner face and shut it, or activate the phosphatase **calcineurin**, which dephosphorylates the channel and inactivates it. Both are negative feedback.
13. **Refractory periods are channel states.** A Na⁺ channel cycles resting (closed, available) → open (fast activation gate) → inactivated (slower inactivation gate) → resting only after repolarisation. **Absolute** refractory period: no stimulus fires the cell. **Relative**: some channels have recovered, so a larger stimulus can.

### Availability and post-inhibitory rebound

14. At a resting potential of about −65 mV only about **60%** of Na⁺ channels are available. Hyperpolarising by about 40 mV makes nearly all available; depolarising by 40 mV makes almost none available.
15. **Post-inhibitory rebound:** when inhibition ends, the enlarged pool makes a burst more likely. The slide's example is retinal ganglion cells (Purves Fig. 11.14): an on-centre cell bursts when a dark central spot ends, an off-centre cell when a light central spot ends, and the slide attributes the burst to more available Na⁺ channels. (Context beyond the slides: retinal circuitry also shapes these off-responses, so treat the RGC as an illustration, not a mechanistic dissection.)

### Potassium channels

16. **Voltage clamp** (a 56 mV step from −65 mV) shows a capacitive blip, a transient **inward Na⁺** current, then a **delayed outward K⁺** current that lasts as long as the step.
17. **Pharmacological dissection:** TTX blocks voltage-gated Na⁺ channels, leaving only the sustained outward K⁺ current. TEA blocks voltage-gated K⁺ channels, leaving the inward Na⁺ current, which switches itself off because Na⁺ channels inactivate. Classical axonal (delayed-rectifier) K⁺ channels do not inactivate.
18. **A-type K⁺ channels do inactivate.** With Na⁺ current blocked, 200 ms steps from −70 mV evoke an outward current that peaks fast and decays over tens of milliseconds.
19. **Interspike interval:** A-type channels are inactivated at about −50 mV and above, recover during the afterhyperpolarisation, then pass outward current during the next climb to threshold. This lengthens the interval between spikes and **widens the range of firing rates**.
20. **Delayed firing:** from −55 mV a current step evokes an immediate train; from −75 mV the same step gives a transient A-current and a **delay** before the first spike.
21. **Pathology:** Kv1.4 inactivates fast through its own N-terminal domain (Kvβ1 confers the same on Kv1.1/1.2) and sits in soma and axon. In **animal models of neuropathic pain**, Kv1.2 and Kv1.4 function and expression fall, which may raise nociceptor firing; the slide marks hypersensitivity with a question mark.

### Adaptation and bursting

22. **Firing-rate adaptation:** Ca²⁺-activated K⁺ channels are gated by intracellular Ca²⁺, not voltage (context beyond the slides: true of the SK type behind slow afterhyperpolarisations; BK-type channels are also voltage-sensitive). Spikes admit Ca²⁺ through voltage-gated Ca²⁺ channels; the K⁺ channels open and a late hyperpolarisation slows firing.
23. **Bidirectional evidence:** blocking Ca²⁺ entry with 5 mM Cd²⁺ abolishes adaptation (steady firing through the step). **1-EBIO**, which enhances these channels, enlarges the afterhyperpolarisation currents and cuts a train to about one spike, reversing on wash.
24. **T-type (low-threshold) Ca²⁺ channels** are inactivated at rest and become available near −75 mV. From rest a small depolarising step gives a subthreshold bump; from a hyperpolarised level the same step triggers a Ca²⁺-driven depolarisation crowned by a burst of Na⁺ spikes.
25. **H-type channels** open on hyperpolarisation (about −70 mV) and carry mixed Na⁺/K⁺ current that slowly depolarises the cell. This opens T-type channels and then Na⁺ channels, giving a burst. The strong depolarisation closes h- and Ca²⁺ channels, hyperpolarisation redevelops, and the cycle repeats as **rhythmic bursting**.

### Metabotropic receptors and other messengers

26. **G-proteins** are active when bound to **GTP** and inactive when bound to **GDP**. Agonist binding to a GPCR switches Gα to the GTP form and separates it from Gβγ.
27. **Shortcut pathway:** some GPCRs act on a G-protein-gated channel directly, without a cytoplasmic messenger.
28. **Multi-step pathway:** noradrenaline → β receptor → G-protein → adenylyl cyclase → cAMP (from ATP) → protein kinase → K⁺ channel. (Context beyond the slides: in rat CA1 pyramidal cells this β-receptor/cAMP route reduces the Ca²⁺-activated K⁺ afterhyperpolarisation and so reduces adaptation, linking neuromodulation to point 22.)
29. **PLC pathway:** activated G-protein → phospholipase C splits PIP₂ into **DAG** (activates PKC) and **IP₃** (releases Ca²⁺ from smooth ER). Such cascades can drive plasticity or cell death.
30. **Gene regulation and amplification:** Gα families (s, i/o, q/11, 12/13) signal downstream to transcription factors and gene expression in the nucleus (the figure draws Gβγ signalling as a separate branch), and each cascade stage multiplies the signal (worked below).
31. **Fast versus slow EPSPs:** one presynaptic spike releasing ACh produces a fast EPSP through an ionotropic receptor and a slow EPSP through a metabotropic receptor acting on an **M-type K⁺ channel**. The two classes differ in time course, short- versus long-term effects, and effects on excitability. (Context beyond the slides: muscarinic signalling suppresses this resting K⁺ current, so the cell depolarises slowly.)
32. **Other messengers:** NGF, BDNF, NT-3, CNTF, EGF and FGF act on neurons and glia, often via **tyrosine kinase** receptors, shaping growth, development and death.

## Quantitative anchors

The deck has no equations, but it gives numbers you can reason with.

- **Na⁺ availability.** The curve's left axis scales availability to the resting pool: 1.0 at rest (about 60% of channels), about 1.7 at full availability. Worked example: of 10,000 Na⁺ channels, about 6,000 are available at −65 mV; after a 40 mV hyperpolarisation nearly all are, so 10,000 / 6,000 ≈ **1.7 times** as much Na⁺ conductance can be recruited when inhibition ends: the arithmetic of rebound.
- **Amplification:** adrenaline at 10⁻¹⁰ M yields cAMP at 10⁻⁶ M, a **10⁴-fold** rise in concentration before the kinase and enzyme stages add more.
- **Direction of the A-current** (context beyond the slides): I = g(Vm − E_K). At Vm = −60 mV with E_K ≈ −90 mV the driving force is +30 mV, so current is outward and opposes the climb to threshold.

## Mechanism chains

```text
POST-INHIBITORY REBOUND
Inhibitory input hyperpolarises the membrane
-> Na+ channel inactivation is removed (available pool ~60% -> ~100%)
-> inhibition ends; membrane relaxes toward threshold
-> more Na+ channels open for the same depolarisation
-> rebound burst of spikes
```

```text
A-TYPE CURRENT AND SPIKE TIMING
Spike + afterhyperpolarisation
-> A-type K+ channels recover from inactivation
-> next depolarisation activates a transient outward K+ current
-> slower climb to threshold
-> longer interspike interval (or an initial delay from -75 mV)
```

```text
FIRING-RATE ADAPTATION
Sustained depolarisation -> spikes
-> Ca2+ enters through voltage-gated Ca2+ channels
-> Ca2+-activated K+ channels open (voltage-insensitive)
-> late hyperpolarisation builds
-> firing slows   [Cd2+ removes it; 1-EBIO exaggerates it]
```

```text
RHYTHMIC BURSTING (h + T)
Hyperpolarisation (~ -70 mV) opens h channels
-> mixed Na+/K+ inward current slowly depolarises
-> T-type Ca2+ channels (available after hyperpolarisation) open
-> Ca2+ depolarisation triggers a burst of Na+ spikes
-> strong depolarisation closes h and Ca2+ channels
-> membrane re-hyperpolarises -> cycle repeats
```

```text
SLOW METABOTROPIC SIGNALLING
Transmitter -> GPCR -> G-protein (GDP -> GTP)
-> direct channel gating | AC -> cAMP -> kinase | PLC -> IP3 + DAG
-> slow EPSP, amplification, plasticity, death or gene expression
```

## Key experiments

| Experiment | Design | Result | Inference and limit |
|---|---|---|---|
| Voltage clamp with TTX and TEA | Step from −65 to −9 mV; block Na⁺ or K⁺ channels | TTX leaves sustained outward K⁺; TEA leaves self-terminating inward Na⁺ | Separable currents; Na⁺ inactivates, delayed rectifier does not (classic textbook axon recordings, not mammalian neurons; context beyond the slides) |
| A-current isolation and delayed firing | Na⁺ blocked; steps from −70 mV; current steps from −55 vs −75 mV | Transient, decaying outward current; delay only from −75 mV | Inactivating K⁺ channels set first-spike latency and ISI, depending on prior voltage |
| Zinc on NMDA receptors (mouse hippocampal culture; oocytes) | Apply NMDA or glutamate/glycine with and without zinc | Reversible current suppression, graded from nanomolar zinc | A modulatory zinc site exists; excitotoxicity protection is untested on the slide |
| Trace metals in olfactory bulb (rat culture) | Ca²⁺ currents and spike trains ± zinc or copper | Smaller Ca²⁺ currents, fewer spikes | Metals tune several channels at once; in vitro doses |
| Adaptation pharmacology | Current steps ± Cd²⁺ or 1-EBIO | Cd²⁺ abolishes adaptation; 1-EBIO strengthens it | Loss- and gain-of-function both implicate Ca²⁺-activated K⁺ channels; Cd²⁺ blocks all Ca²⁺ channels |

## Examiner traps and common overclaims

- **"Hyperpolarisation always reduces excitability."** Not afterwards, and not always in the same direction: recovery of Na⁺ and T-type channels favours a rebound burst, whereas recovery of A-type channels delays the next spike.
- **"K⁺ channels don't inactivate."** Delayed rectifiers don't; A-type channels do and need hyperpolarisation to recover.
- **"A-type current slows firing at rest."** It is largely inactivated at −55 mV; the delay appears from −75 mV.
- **"Cd²⁺ stops adaptation by blocking K⁺ channels."** It removes the Ca²⁺ trigger; the K⁺ channels are Ca²⁺-gated, not voltage-gated.
- **"Glutamate alone opens NMDA receptors at rest."** Glycine is also needed, and Mg²⁺ blocks the pore until depolarisation. Zinc acts at a different site.
- **"Zinc protects against excitotoxicity."** The slide poses it as a question.
- **"Metabotropic means a cytoplasmic second messenger."** Some GPCRs gate channels directly via the G-protein.
- **Preparation slip.** Kv changes in neuropathic pain come from animal models; zinc, copper and adaptation data are in vitro.

## Interrogation prompts

1. A target cell stops receiving rhythmic IPSPs. Predict the effect on rebound bursting via Na⁺ availability.
2. A thalamic relay cell is moved from −65 to −75 mV. Predict its response to the same depolarising input and name the channel responsible.
3. A drug selectively blocks A-type K⁺ channels. Predict the first-spike latency from −75 mV and the range of achievable firing rates.
4. 1-EBIO is applied during a sustained current step. Predict spike count; then predict the effect of Cd²⁺ and explain why the two are complementary.
5. Zinc is chelated near glutamatergic synapses. Predict NMDA current, and name the experiment needed before claiming zinc is neuroprotective.
6. A GTPase-dead Gα keeps GTP bound. Predict the duration of a slow EPSP and whether the fast EPSP changes.

## Active recall — close the notes

- What two conditions must coincide to open an NMDA receptor, and which ion makes it voltage-dependent?
- Give the two Ca²⁺-dependent routes to channel inactivation.
- About what fraction of Na⁺ channels is available at −65 mV, and what happens after a 40 mV hyperpolarisation?
- What do TTX and TEA each reveal under voltage clamp?
- At what voltage are A-type channels inactivated, and how do they lengthen the interspike interval?
- What abolishes and what exaggerates firing-rate adaptation?
- How do h and T-type channels generate rhythmic bursts?
- Describe the GTP/GDP switch and the two second-messenger routes.
- Contrast fast and slow EPSPs, and name the K⁺ channel behind the slow one.

## Sources checked on PubMed

- Hodgkin & Huxley (1952) J Physiol — [doi:10.1113/jphysiol.1952.sp004719](https://doi.org/10.1113/jphysiol.1952.sp004719)
- Westbrook & Mayer (1987) Nature — [doi:10.1038/328640a0](https://doi.org/10.1038/328640a0)
- Paoletti, Ascher & Neyton (1997) J Neurosci — [doi:10.1523/JNEUROSCI.17-15-05711.1997](https://doi.org/10.1523/JNEUROSCI.17-15-05711.1997)
- Horning & Trombley (2001) J Neurophysiol — [doi:10.1152/jn.2001.86.4.1652](https://doi.org/10.1152/jn.2001.86.4.1652)
- Stocker (2004) Nat Rev Neurosci — [doi:10.1038/nrn1516](https://doi.org/10.1038/nrn1516)
- Brown & Adams (1980) Nature — [doi:10.1038/283673a0](https://doi.org/10.1038/283673a0)
- Madison & Nicoll (1986) J Physiol — [doi:10.1113/jphysiol.1986.sp016007](https://doi.org/10.1113/jphysiol.1986.sp016007)
