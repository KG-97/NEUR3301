# NEUR3301 Lecture 25 - Cerebellar Networks: Neurophysiology and Plasticity

**Timetable attribution — unconfirmed:** 30 September 2026 · Alex Tang · Final exam. Verify the date and lecturer against the LMS or Outlook before treating them as official.

> Evidence boundary: this note is built from the **released lecture slide PDF** (27 slides, 2026 deck), not the recording, so spoken emphasis and anything said only aloud is not captured. Four slides carry only a title and a figure (the cerebello-thalamo-cortical loop, the nuclear feedback circuit, and two "newly discovered functions" papers); their content here is read from the figures. Anything marked "(context beyond the slides)" is brief standard background.

## What the lecture is really about

The cerebellar cortex is one circuit motif repeated across a heavily folded sheet. Two very different input streams converge on one neuron type — the **Purkinje cell**, which is **inhibitory** and is the **only exit** from the cortex:

- a **high-bandwidth context stream**: mossy fibres → granule cells → parallel fibres, carrying sensory state and possibly the motor plan;
- a **low-rate, high-impact instruction stream**: inferior olive → climbing fibres, carrying error or teaching signals.

Learning, in this framing, is the climbing fibre changing how strongly parallel-fibre context drives the Purkinje cell. The five stated outcomes follow that logic: motor function and clinical signs; the cerebello-thalamo-cortical loop; layers and cell types; eyeblink conditioning as the model behaviour; and plasticity at the parallel fibre–Purkinje synapse. The deck closes with two 2024 mouse studies arguing that cerebellar output reaches well beyond movement.

## What you need to know cold

### Function and clinical signs

1. The cerebellum is **essential for motor control, coordination and motor learning**: human lesions and hereditary or acquired degeneration impair all three. This is lesion–deficit evidence — it shows necessity, not how the computation works.
2. A **growing literature links the cerebellum to cognition, language and mood**. Treat this as expanding and largely correlational in humans.
3. **Classic signs, each tied to one movement parameter:**
   - **Dysmetria** — misjudged **distance**, overshooting (finger-to-nose).
   - **Dysdiadochokinesia** — poor **timing** of rapid sequential movements.
   - **Dyssynergia** — poorly graded, disjointed **force**.
   - **Ataxia** — overall incoordination, the umbrella for all three.
   - The slide list also includes **clonus** (rhythmic contraction triggered by stretch) and **paresis** (weakness). (Context beyond the slides: many texts treat these as upper-motor-neuron signs and list hypotonia and intention tremor among core cerebellar signs — don't present clonus as the hallmark of cerebellar damage.)

### The loop

4. **Cerebello-thalamo-cortical loop:** motor and sensory cortex → **pontine nuclei** → cerebellar cortex (**afferent** limb, arriving as mossy fibres) → **dentate nucleus** → **motor thalamus** → motor cortex (**efferent** limb).
5. The **motor thalamus is a convergence hub**: cortex contributes motor programme and movement parameters; **basal ganglia** (dopamine-modulated) contribute motivation, action selection and habit; the **cerebellum** (fed by spinal sensory input) contributes proprioception, temporal patterning and error signalling.

### Gross anatomy and layers

6. Highly **foliated**; estimated to hold **more than half of all brain cells**. Midline **vermis**, lateral **hemispheres**.
7. **Three layers**, deep to superficial:
   - **Granular** — granule cells, mossy-fibre terminals, Golgi cells.
   - **Purkinje cell layer** — a single row (monolayer) of Purkinje somata.
   - **Molecular** — molecular layer interneurons (MLIs), parallel fibres, Purkinje dendrites and climbing-fibre terminals.

### Cell types

8. **Granule cells**: billions of them, tiny somata (6–9 µm), **glutamatergic** — one of only **two excitatory neuron types** in the cerebellar cortex (context beyond the slides: the other is the unipolar brush cell). Every afferent to the cortex passes through this layer. The **glomerulus** is a glia-capsuled complex where a mossy-fibre terminal meets granule-cell dendrites and Golgi-cell axons: excitation and its inhibitory gate in one structure.
9. **Basket cells** sit low in the molecular layer, wrap the Purkinje soma and also contact the **axon initial segment** — inhibition at the spike-initiation site. **Stellate cells** sit higher and inhibit **dendrites**. Same transmitter, different veto point.
10. **Ito cells** (named in 2026 work by Kim and Augustine): an MLI subset that receives **inhibitory feedback from Purkinje cells**. In paired recordings a Purkinje spike evokes a current in Ito cells but not in basket or stellate cells; an Ito-cell spike evokes a current in a basket cell, but not the reverse. They are proposed to supply forward inhibition onto basket cells. The slide's circuit diagram also draws an Ito-cell output onto a neighbouring Purkinje cell, and the source paper reports that Ito cells mainly inhibit Purkinje and basket cells (context beyond the slides).
11. **Purkinje cells**: **GABAergic**; huge planar dendritic tree; soma 30–70 µm; inhibited by MLIs, excited by parallel and climbing fibres; **sole output of the cerebellar cortex**.
12. Purkinje cells **fire spontaneously at 50–100 Hz**. Firing continues when synaptic input is blocked and stops in tetrodotoxin, so it is **intrinsic pacemaking**. Output goes to the **cerebellar (and vestibular) nuclei** with heavy **convergence** (~26 Purkinje cells per nuclear cell, measured in cat) — so how each Purkinje cell codes information matters greatly.

### The two input streams

13. **Parallel fibres**: granule-cell axons ascend into the molecular layer and **bifurcate**. Their input drives **simple spikes** — ordinary action potentials. The slide phrases the divergence as one parallel fibre reaching a vast number of Purkinje cells. (Context beyond the slides: the figure usually quoted runs the other way — each Purkinje cell receives on the order of 10⁵ parallel-fibre synapses, while one parallel fibre contacts hundreds of Purkinje cells. The core point — massive convergence of individually weak inputs — is unchanged.)
14. **Climbing fibres** are axons of **inferior olive** neurons. **Each Purkinje cell gets exactly one climbing fibre**; one fibre can reach roughly 1–10 Purkinje cells. The synapse is among the **strongest in the brain** and triggers the **complex spike**.
15. Climbing fibres fire at **about 1 Hz at most**, and each olivary event leaves the axon as a **burst of 1–6 spikes**, visible as spikelets in the complex-spike waveform. The instruction signal is graded, not uniform.
16. **Spillover**: climbing fibres excite nearby MLIs not through conventional synapses but by **glutamate escaping the climbing-fibre synapse** (volume transmission). The recruited MLIs give **feedforward inhibition** of neighbouring Purkinje cells and **disinhibition** of others.

### Integration and feedback

17. The Purkinje cell **integrates sensory and motor information**. Working model: climbing fibres carry a **teaching/error** signal; parallel fibres carry **sensory context and possibly the motor plan**. What simple versus complex spikes each contribute to motor control is **still debated**.
18. The nuclear circuit is loop-rich: mossy- and climbing-fibre **collaterals excite the nuclei** directly; Purkinje cells inhibit them; glutamatergic nuclear neurons project to brainstem and thalamus; **GABAergic nucleo-olivary axons inhibit the contralateral inferior olive**, whose neurons are gap-junction coupled. The teaching signal is itself regulated by cerebellar output.

### Eyeblink conditioning (rabbit circuit)

19. Popular because the circuit is mapped:
   - **CS (tone)** → cochlear nucleus → pontine nuclei → mossy fibres → granule cells → **parallel fibres** = context/motor-plan signal.
   - **US (air puff)** → trigeminal nucleus → inferior olive → **climbing fibres** = error/teaching signal.
   - Output: Purkinje cell → **anterior interpositus nucleus** → red nucleus → facial motor nucleus → **conditioned blink**. The unconditioned blink runs trigeminal → facial nucleus, bypassing the cerebellar cortex.

### Parallel fibre–Purkinje plasticity

20. Changes in this synapse are thought central to motor learning:
   - **Repeated parallel-fibre activity alone → LTP.**
   - **Parallel + climbing fibre together → LTD.**
   - The climbing fibre is therefore a powerful gate — but the slide flags recent evidence that **MLI signalling can switch the paired outcome to LTP**. The rule is conditional.

### Newly discovered functions (mouse)

21. **Cerebellum → dopamine** (Washburn et al., 2024): optogenetically driving cerebellar-nuclear axons in the substantia nigra pars compacta raised **striatal dopamine** (dLight photometry) and **running speed**; trains worked, single pulses barely did.
22. **Cerebellum → thirst** (Mishra et al., 2024): chemogenetically **exciting** Purkinje cells raised their firing and **24-h water intake and drinking bouts** with **no change in food intake**; **inhibiting** them lowered water but not food intake.

## Causal mechanism chains

```text
Context route
Mossy fibre (pons / brainstem / spinal cord)
-> glomerulus, gated by Golgi-cell inhibition
-> granule cell (glutamate) -> axon ascends and bifurcates -> parallel fibre
-> many weak synapses on Purkinje dendrites (and on MLIs)
-> modulates simple-spike rate around an intrinsic 50-100 Hz baseline
-> GABAergic Purkinje output -> cerebellar / vestibular nuclei
```

```text
Teaching route
Error or unexpected event (e.g. air puff via trigeminal input)
-> inferior olive spike -> axonal burst of 1-6 spikes
-> single climbing fibre -> very strong synapse on its Purkinje cell
-> complex spike (burst visible as spikelets)
   + glutamate spillover -> MLIs -> feedforward inhibition / disinhibition nearby
-> coincidence with active parallel fibres -> PF-PC LTD
```

```text
Learning the conditioned blink (standard model)
Tone CS -> pons -> mossy fibre -> granule cell -> parallel fibre --+
Air-puff US -> trigeminal -> inferior olive -> climbing fibre -----+-> Purkinje cell
Repeated pairing -> LTD at CS-carrying PF synapses
-> less Purkinje inhibition of anterior interpositus at CS time
-> interpositus -> red nucleus -> facial nucleus -> timed eyeblink
```

The "less Purkinje inhibition" step is the standard interpretation (context beyond the slides); the slides give the circuit and the plasticity rule, not that step explicitly.

```text
Loop
Motor + sensory cortex -> pontine nuclei -> cerebellar cortex
-> Purkinje cells inhibit dentate nucleus -> dentate -> motor thalamus -> motor cortex
(basal ganglia also converge on motor thalamus)
```

## Key experiments

1. **Conjunctive stimulation — Ito and Kano (1982), rabbit.** Stimulate parallel fibres, climbing fibres, or both together → only pairing produces a long-lasting depression of parallel-fibre-evoked transmission → the climbing fibre instructs LTD at co-active synapses. Limit: a field-potential readout pools many cells.
2. **Pacemaking — Häusser and Clark (1997), rat slices.** Record Purkinje firing in control, with synaptic input blocked, then in tetrodotoxin → firing persists without input, stops in TTX → output is intrinsic and Na⁺-spike dependent; inputs **modulate** a baseline rather than create it.
3. **Olivary bursts — Mathy et al. (2009), rat.** Record olivary soma and axon, then Purkinje responses to climbing-fibre bursts → one somatic spike becomes a variable axonal burst that reshapes the complex spike → the climbing fibre carries graded information.
4. **Spillover — Szapiro and Barbour (2007), rat slices.** Climbing-fibre stimulation evokes AMPA/NMDA currents in MLIs without conventional synapses → glutamate volume transmission recruits local inhibition.
5. **Ito cells — Kim and Augustine (2026).** Paired recordings plus morphology → Purkinje spikes reach only one MLI subclass, which inhibits basket cells one-way → a dedicated feedback route from cortical output into the interneuron network.
6. **Thirst — Mishra et al. (2024), mouse.** Purkinje-specific excitatory or inhibitory DREADDs vs saline → water intake rises or falls; food intake unchanged → Purkinje activity selectively and bidirectionally modulates drinking. Limit: it shows modulation, not that the cerebellum generates thirst. (Context beyond the slides: CNO-only controls in non-DREADD mice are needed to exclude off-target drug effects; the slide shows saline controls.)
7. **Dopamine — Washburn et al. (2024), mouse.** Stimulate cerebellar-nuclear terminals in SNc while measuring striatal dopamine on a wheel → dopamine and speed rise with trains. Measurement ≠ mechanism: photometry shows dopamine changed; calling the route direct needs anatomical and synaptic evidence, which the paper reports separately (monosynaptic glutamatergic cerebellar synapses onto SNc neurons; context beyond the slides).

## Examiner traps

- **Purkinje cells are inhibitory.** Cortical output is GABAergic onto the nuclei; excitatory onward projection comes from glutamatergic nuclear neurons (alongside the inhibitory nucleo-olivary output), not from the cortex.
- **Plasticity direction.** Paired PF + CF → **LTD**; PF alone → **LTP**. The Hebbian instinct "more coincident excitation → potentiation" gets this backwards — and the MLI footnote means even LTD is conditional.
- **Convergence direction.** One climbing fibre per Purkinje cell (a fibre may reach ~1–10 cells); many Purkinje cells converge on each nuclear cell.
- **Low rate ≠ weak.** Climbing fibres fire ≤ ~1 Hz yet form one of the strongest synapses in the brain.
- **The complex spike is not uniform.** Burst size (1–6 spikes) varies and shapes the waveform.
- **Teaching route vs output route.** Silencing the facial nucleus blocks the blink, not the learning signal; the US teaching signal is olive → climbing fibre.
- **Ito-cell loop sign.** Count the inhibitory links. Purkinje ⊣ Ito ⊣ basket ⊣ Purkinje has three, which nets to negative feedback onto the Purkinje cell that started it. The slide's circuit diagram also draws Ito-cell output onto a neighbouring Purkinje cell, and that route (Purkinje ⊣ Ito ⊣ neighbour) has two links, which nets to disinhibition. Because both routes exist, the effect on cortical output cannot be read off the wiring, so don't call it simple negative feedback without data.
- **Over-reading new functions.** Mouse chemogenetic/optogenetic results show the cerebellum *can modulate* thirst and dopamine, not that it is a thirst centre or explains human disorders.

## Interrogation prompts

1. A Purkinje cell is bathed in blockers of all fast synaptic transmission. Predict its firing, then predict the effect of adding TTX, and say what each result shows.
2. The inferior olive is silenced throughout tone–air-puff training. Predict acquisition of the conditioned blink and the fate of the unconditioned blink.
3. Pontine nuclei are lesioned instead. Which signal is lost, and why is the result different from (2)?
4. Parallel and climbing fibres are paired while MLIs are optogenetically activated. Using the slide's footnote, predict the plasticity outcome and explain why the classic rule is conditional.
5. Olivary bursts are shortened from five spikes to one. Predict the complex-spike waveform and the strength of the teaching signal.
6. Glutamate spillover from climbing fibres is abolished. Predict the change in inhibition of Purkinje cells neighbouring the active one.
7. Ito cells are selectively silenced. Predict basket-cell activity and inhibition of the Purkinje soma, and explain why the net effect on Purkinje output is hard to call.
8. A patient overshoots the finger-to-nose target and cannot perform rapid alternating hand movements. Name both signs and the movement parameter each disrupts.
9. The dentate nucleus is lesioned. Which limb of the loop is cut, and what input does motor thalamus lose?
10. In the thirst experiment, food intake was unchanged. Why does this matter for interpreting the drinking result as non-motor?

## Active recall — close the notes

- Name the three cortical layers and what sits in each.
- Which two cerebellar cortical neurons are excitatory, and which is the sole output?
- Trace the cerebello-thalamo-cortical loop from motor cortex back to motor cortex.
- Distinguish dysmetria, dysdiadochokinesia and dyssynergia by movement parameter.
- How many climbing fibres does one Purkinje cell receive? How many Purkinje cells can one climbing fibre reach?
- Compare simple and complex spikes: source, rate, proposed role.
- What does the glomerulus contain, and why is it a gate?
- Where do basket and stellate cells inhibit the Purkinje cell?
- What defines an Ito cell, and which cell does it inhibit?
- What is climbing-fibre glutamate spillover, and what two effects does it have on nearby Purkinje cells?
- In eyeblink conditioning, which fibres carry the CS and which carry the US?
- State the PF-alone and PF + CF plasticity rules and the caveat.
- Give the two "newly discovered" cerebellar functions and the species tested.
