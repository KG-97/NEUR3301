# NEUR3301 Lecture 9 - Quantal Transmission

**Timetable attribution — unconfirmed:** 10 August 2026 · Dr Jamie Beros · Test 2 and final exam. Verify the date and lecturer against the LMS or Outlook before treating them as official.

> Evidence boundary: this note is built from the **released lecture slide PDF** (all 25 slides, file labelled 2026), not the recording, so spoken emphasis, examples given aloud and verbal caveats are not captured. Several slides are figure-only (the NMJ schematic, the freeze-fracture diagram, the amplitude histogram) and are described from their visible labels; part of one trace figure is masked by a white box in the PDF. The deck covers chemical quantal transmission only and has no electrical-synapse slides.

## What this lecture is really about

The deck answers three questions in order. **What triggers release?** Presynaptic depolarisation that lets Ca²⁺ in, not the Na⁺ and K⁺ currents of the spike itself. **In what units is transmitter released?** Fixed packets (quanta), because evoked responses come in integer multiples of one unit size. **What is the packet physically?** A synaptic vesicle. The second half turns this into a measurement method, *quantal analysis*, which splits a synaptic response into how many packets were released (m, built from n and p) and how large each packet's effect is (q), then lists where the method becomes unreliable.

The safest exam stance is to keep the **measurement** (a postsynaptic voltage or current, a histogram, a fitted curve) separate from the **mechanism** inferred from it (vesicle number, release probability, vesicle content, receptor number). Every experiment in the deck is in animals: frog neuromuscular junction (NMJ), squid giant synapse and mouse hippocampal slices.

## What you need to know cold

### Calcium couples depolarisation to release

1. **Katz and Miledi (1967), squid giant synapse:** release depends on presynaptic **depolarisation** and does **not** need the Na⁺ and K⁺ channels of the action potential. (Context beyond the slides: they blocked spikes with tetrodotoxin and depolarised the terminal directly; suitably matched pulses evoked normal postsynaptic potentials.) The giant axon (about 800 µm across, versus about 2 µm in mammals) lets electrodes reach both sides of the synapse.
2. **Graded Ca²⁺ current, graded output:** under presynaptic voltage clamp, larger depolarising steps give larger inward Ca²⁺ currents and larger postsynaptic potentials. The slide says the two **correlate**; on its own the figure is a dose–response relationship.
3. **Geometry:** at the NMJ, presynaptic Ca²⁺ channels sit in rows at the **active zones**, directly opposite postsynaptic ACh receptors on the junctional folds (Kandel figure). Ca²⁺ therefore enters where vesicles fuse. (The slide text says the channels align with "Ca²⁺ receptors"; the figure labels show the postsynaptic partners are **ACh receptors**.)

### The NMJ as the model preparation

4. Why the NMJ: it is simple (more presynaptic activity gives more muscle activation), accessible and large; each muscle fibre is usually innervated by **one** motor axon (with several branches); and the transmitter opens **one** receptor-channel type.
5. **Key players (numbered schematic):** motor-neuron action potential → voltage-gated Ca²⁺ channels open → Ca²⁺ enters → ACh vesicles fuse → ACh binds receptor-channels on the motor end plate → non-selective cation channels pass Na⁺ in and K⁺ out → end-plate potential → local current opens voltage-gated Na⁺ channels in neighbouring muscle membrane → muscle action potential. Acetylcholinesterase in the cleft ends the signal.

### MEPPs and the quantal hypothesis

6. **Fatt and Katz** recorded small spontaneous depolarisations at the frog end plate without nerve stimulation: **miniature end-plate potentials (MEPPs)** of about **0.5 mV**, consistent in size and dependent on ACh. (The slide dates this 1954; the original MEPP paper is 1952. The trace shown comes from a muscle treated with prostigmine, an anticholinesterase, which enlarges ACh-dependent events — context beyond the slides.)
7. **Why a fixed size?** Not one channel per MEPP. Citing del Castillo and Katz (1954), the slide states that a MEPP needs roughly **2,000 channels**, opened by about **5,000 ACh molecules**. The unit is a multimolecular packet, not a single molecular event.
8. **Low-Ca²⁺ experiments:** in normal or high Ca²⁺, nerve stimulation fires muscle action potentials that hide the underlying response. Lowering Ca²⁺ (and raising Mg²⁺) keeps the evoked EPP small and subthreshold. Three outcomes then appear: **failures**, **unit** responses the size of a spontaneous MEPP, and responses at **integer multiples** of it (double, triple, quadruple). Fractional steps do not occur.
9. **The quantal hypothesis:** transmitter is released in fixed amounts (quanta), and each quantum gives a fixed postsynaptic response (the quantal amplitude). A **MEPP is one quantum**; a normal EPP is the sum of **many** quanta released almost together.

### The vesicle is the quantum

10. Electron micrographs show **synaptic vesicles** clustered at active zones in presynaptic boutons. The slide figure also shows a **reserve pool**, a **recycling pool** and a small **readily releasable pool** docked at the membrane, which is the anatomical reason that not every vesicle is available for release.
11. **One vesicle = one quantum**, confirmed by **freeze-fracture** electron microscopy. Release is evoked, tissue is frozen at set times afterwards, and the membrane is split between its two lipid leaflets. The images show rows of intramembrane particles at active zones, vesicle fusion openings (exocytosis) after stimulation, then **coated pits and coated vesicles** as membrane is retrieved. (The slide cites Heuser and Reese, 1970. The quick-freeze study that matches fusions to quanta is Heuser et al. 1979: raising quantal output with 4-aminopyridine raised the number of captured fusions in proportion — context beyond the slides.)
12. Release is **stochastic**: spontaneous MEPPs occur at random, like coin tosses.

### The quantal variables

13. **p** is the mean release probability. For one release site, the probability of failure is 1 − p.
14. **n** is the number of quanta available for release; not every vesicle qualifies.
15. **q** is the quantal size: the postsynaptic response (usually in mV) to one quantum.
16. **m** is the mean quantal content, the average number of quanta released per stimulus: **m = mean evoked EPP ÷ mean MEPP amplitude**.
17. Estimating these parameters is "doing a quantal analysis".

### Measuring them

18. Record spontaneous MEPPs and evoked EPPs at the NMJ in **low Ca²⁺ / high Mg²⁺**. **Failures must be present**, because they show Ca²⁺ is low enough to resolve single quanta.
19. Plot an **amplitude histogram** (amplitude on the x-axis, number of observations on the y-axis) and fit bell curves or another statistical model to locate the peaks. Biological variability smears the peaks.
20. Reading the histogram: **q** is the mean spontaneous MEPP amplitude, the position of the first peak, or the spacing between peaks. Peaks I, II, III correspond to 1, 2, 3 quanta, and the **width** of each peak reflects variation in transmitter content per vesicle. **p** comes from the fitted model; the NEUR3302 lab analyses spontaneous MEPPs only and does not ask for p.
21. **N is the hard one.** It needs quantitative anatomy, and even its definition is unclear: vesicles near the membrane, vesicles that are always released, or postsynaptic receptor number? It is usually equated with a release-site unit of vesicle cluster, cleft and postsynaptic specialisation.

### Where quantal analysis breaks down

22. **CNS versus NMJ:** q is reliable at the NMJ but hard to measure centrally. Synaptic potentials decay along dendrites through membrane leak, more so with distance; synapses are tiny; inputs are many and hard to stimulate one at a time; and one cell may use several transmitters and receptor types.
23. **What sets MEPP size:** the number of transmitter molecules per vesicle, how quickly transmitter is cleared (reuptake, enzymatic breakdown), and the number of postsynaptic receptors.
24. **CNS example (Riazanski et al. 2011, mouse):** hippocampal slices from mice lacking the chloride channel **CLC-3** show smaller and less frequent **miniature IPSCs**, which the slide headlines as reduced quantal content. The paper locates the cause **presynaptically**: CLC-3 sits with the vesicular GABA transporter, and without it Cl⁻-driven vesicle acidification fails, so vesicles load less GABA (context beyond the slides). In the deck's own variable terms the amplitude change is a fall in **q** caused by vesicle content, not a fall in m.

## Worked example

Invented numbers, shaped like the textbook histogram:

```text
Low-Ca2+ / high-Mg2+ frog NMJ, 200 stimuli
Mean spontaneous MEPP              = 0.40 mV   -> q
Mean evoked EPP (failures counted) = 0.92 mV
Failures                           = 20 of 200

Direct method:    m = mean EPP / mean MEPP = 0.92 / 0.40 = 2.3 quanta per stimulus
Failures method:  m = ln(trials / failures) = ln(200 / 20) = ln 10 = 2.3
Binomial view:    m = n x p; if n = 100 available quanta, p = 2.3 / 100 = 0.023
                  mean EPP = n x p x q = 100 x 0.023 x 0.40 = 0.92 mV
Expected peaks:   0.4, 0.8, 1.2, 1.6 mV  (1, 2, 3, 4 quanta)
```

The failures method and the binomial view are context beyond the slides. When the two estimates of m agree, release is behaving like independent random events, the check del Castillo and Katz used. For one site P(failure) = 1 − p; for n independent sites it is (1 − p)ⁿ (here 0.977¹⁰⁰ ≈ 0.098, about 20 failures in 200, matching the count; with n = 10 and p = 0.23 it would be 0.77¹⁰ ≈ 0.073, only about 15); in the Poisson limit P(k quanta) = e⁻ᵐ mᵏ / k!, so P(0) = e⁻ᵐ. Lowering Ca²⁺ further would lower p and so m: more failures, fewer multi-quantal events, and the peaks keep their 0.4 mV spacing.

## Mechanism chains

```text
CALCIUM TRIGGER (squid giant synapse)
Presynaptic depolarisation (a spike, or an injected pulse with Na+ channels blocked)
-> voltage-gated Ca2+ channels open at active zones
-> inward Ca2+ current, graded with depolarisation
-> more vesicles fuse per stimulus (higher p, higher m)
-> postsynaptic potential graded with presynaptic Ca2+ current
```

```text
NMJ TRANSMISSION
Motor-neuron action potential reaches the terminal
-> Ca2+ enters at active zones aligned with ACh receptors
-> many ACh vesicles fuse (EPP = many quanta)
-> ACh opens non-selective cation channels at the end plate
-> end-plate potential -> muscle Na+ channels -> muscle action potential
-> acetylcholinesterase ends the signal
```

```text
FROM ONE VESICLE TO ONE MEPP
One vesicle fuses spontaneously (stochastic)
-> ~5,000 ACh molecules released
-> ~2,000 receptor-channels open
-> one MEPP of ~0.5 mV = one quantum (q)
-> size set by vesicle content, clearance and receptor number
```

```text
QUANTAL ANALYSIS LOGIC
Lower Ca2+, raise Mg2+ -> p falls -> few quanta per stimulus
-> failures + unit + integer-multiple responses
-> amplitude histogram, fitted peaks
-> q = first-peak position = peak spacing = mean MEPP
-> m = mean EPP / q ; p from the model ; N needs anatomy
```

## Key experiments

| Experiment (all animal) | Design | Result | Inference and limit |
|---|---|---|---|
| Katz & Miledi 1967, squid giant synapse | Block spikes; depolarise the terminal directly | Postsynaptic potentials still evoked, graded with depolarisation | Depolarisation plus Ca²⁺ entry triggers release; spike Na⁺/K⁺ currents are not required |
| Presynaptic voltage clamp, squid (Kandel figure; cf. Llinás et al. 1981) | Step presynaptic voltage; record Ca²⁺ current and PSP | Larger Ca²⁺ current, larger PSP | Release scales with Ca²⁺ influx; the slide frames this as correlation |
| Fatt & Katz, frog NMJ | Record the end plate without stimulation | Spontaneous ~0.5 mV MEPPs of consistent size, ACh-dependent | Transmitter is released in unit packets even at rest |
| del Castillo & Katz 1954, frog NMJ in low Ca²⁺/high Mg²⁺ | Repeated nerve stimulation; compare evoked with spontaneous amplitudes | Failures, units and integer multiples only | Release is quantal and the EPP is a sum of quanta |
| Heuser et al. 1979, frog NMJ quick-freeze | Stimulate, freeze within milliseconds, freeze-fracture | Vesicle fusions at active zones; count rises with quantal output | One vesicle = one quantum; fusions are independent |
| Riazanski et al. 2011, mouse hippocampal slices | Compare mIPSCs in Clcn3⁻/⁻ and wild-type mice | mIPSC amplitude and frequency both fall | Vesicle filling, a presynaptic factor, sets quantal size; global knockout, so the mechanism is inferred |

## Examiner traps and common overclaims

- **"A smaller mini means a postsynaptic change."** Mini amplitude is measured postsynaptically, but it falls when vesicles carry less transmitter, as in the CLC-3 knockout.
- **"Low Ca²⁺ makes each quantum smaller."** Ca²⁺ and Mg²⁺ change how many quanta are released (p, m), not the size of each (q). Histogram peaks keep their spacing.
- **"One MEPP is one channel opening."** One quantum opens about 2,000 channels.
- **"Failure probability is always 1 − p."** That holds for one release site; with n independent sites it is (1 − p)ⁿ.
- **"m or n is the number of vesicles in the terminal."** m is the mean number released per stimulus and n the number available; reserve and recycling pools are not immediately releasable.
- **"Quantal analysis transfers easily to the CNS."** Dendritic attenuation, tiny multi-input synapses and mixed transmitters make q and N uncertain centrally.
- **Species slip.** The data are from frog, squid and mouse; no human quantal recordings are shown.

## Interrogation prompts

1. Spikes are blocked at a squid giant synapse and the terminal is depolarised by current injection. Predict the postsynaptic response, then predict it again with Ca²⁺ removed from the bath.
2. Bath Ca²⁺ is lowered further in a low-Ca²⁺ NMJ experiment. Predict the failure rate, the histogram peak positions, the mean EPP and m.
3. An anticholinesterase is added. Predict MEPP amplitude and time course, and say whether q or m changes.
4. A drug blocks half the end-plate ACh receptors without affecting release. Predict MEPP amplitude, EPP amplitude, and m calculated as EPP ÷ MEPP.
5. A different drug halves vesicular ACh loading. Which variable changes? Can postsynaptic recordings alone tell this apart from prompt 4?
6. In a CNS slice, minis from distal dendritic synapses look smaller at the soma than minis from proximal synapses. Is quantal size different? What confound explains the result?
7. Clcn3⁻/⁻ mIPSCs are smaller and rarer. Give one presynaptic explanation and one detection-based explanation for the fall in frequency.

## Active recall — close the notes

- What two conclusions did Katz and Miledi draw about release at the squid giant synapse?
- Give five reasons the NMJ is the preparation of choice.
- What is a MEPP, how large is it at the frog NMJ, and what does it depend on?
- Roughly how many channels and ACh molecules make one MEPP?
- Why are low-Ca²⁺/high-Mg²⁺ conditions used, and why must failures appear?
- Define p, n, q and m, and give the formula for m.
- Name three ways to read q from an amplitude histogram.
- Why is N hard to define?
- What evidence shows that one vesicle is one quantum?
- What happens to mIPSCs without CLC-3, and why?

## Sources checked on PubMed

- Fatt & Katz (1952) J Physiol — [PMID 14946732](https://pubmed.ncbi.nlm.nih.gov/14946732/)
- del Castillo & Katz (1954) J Physiol — [doi:10.1113/jphysiol.1954.sp005129](https://doi.org/10.1113/jphysiol.1954.sp005129)
- Katz & Miledi (1967) J Physiol — [doi:10.1113/jphysiol.1967.sp008307](https://doi.org/10.1113/jphysiol.1967.sp008307)
- Llinás, Steinberg & Walton (1981) Biophys J — [doi:10.1016/S0006-3495(81)84899-0](https://doi.org/10.1016/S0006-3495(81)84899-0)
- Heuser et al. (1979) J Cell Biol — [doi:10.1083/jcb.81.2.275](https://doi.org/10.1083/jcb.81.2.275)
- Riazanski et al. (2011) Nat Neurosci — [doi:10.1038/nn.2775](https://doi.org/10.1038/nn.2775)
