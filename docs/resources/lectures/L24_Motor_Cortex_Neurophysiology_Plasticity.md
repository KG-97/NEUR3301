# NEUR3301 Lecture 24 - Motor Cortex: Neurophysiology and Plasticity

**Timetable attribution — unconfirmed:** 29 September 2026 · Alex Tang · Final exam. Verify the date and lecturer against the LMS or Outlook before treating them as official.

> Evidence boundary: this note is built from the **released lecture slide PDF** (all 26 slides, deck labelled 2026), not the recording, so spoken emphasis, verbal caveats and examples given aloud are not captured. Figure-only slides are described from their visible panels; one embedded reaching video does not render in the PDF. The only colour-highlighted statement in the deck is that spine plasticity is essential for learning and memory.

## What this lecture is really about

The deck has two halves. The first treats motor cortex as an **output structure embedded in loops**: what leaves it (descending tracts, callosal and subcortical projections), which cells send those outputs (layer 5 pyramidal neurons and their subtypes), and what happens to a skilled reach when it is silenced. The second asks **how motor cortex physically changes when a skill is learned**, at dendritic spines and in myelin.

The thread joining the halves: learning is written into the same layer 5 output neurons that carry the motor command. The safest exam stance is mechanism plus evidence type. Almost every causal experiment in the deck is in **mice**; the human material is lateralisation (head injury, cortical stimulation, the crossing proportion) and the post-stroke excitability pattern.

## What you need to know cold

### Descending pathways and lateralisation

1. Motor control runs through **parallel descending routes and loops**, not one cortex-to-muscle line. Cortex projects directly to the spinal cord (corticospinal) and indirectly through brainstem nuclei. Basal ganglia (initiating and selecting motor programmes) and cerebellum (coordination and correction) return to cortex through the thalamus, and sensory receptors feed back to the cord.
2. **Tract-to-function map:**
   - **Corticobulbar** — upper motor neurons for cranial-nerve muscles of face, head and neck.
   - **Corticospinal (CST)** — cortex to spinal motor circuits for trunk and limbs; skilled movement.
   - **Rubrospinal** — smaller than the CST, ends mainly in cervical cord, supports voluntary limb movement; in some primates it can substitute for the CST.
   - **Tectospinal** — head and neck orienting coordinated with the eyes.
   - **Reticulospinal** — posture and activation of spinal stepping programmes.
   - **Vestibulospinal** — balance and tonic antigravity activity.
3. **Lateralisation:** about **85% of CST axons cross**, so each hemisphere mainly controls the opposite body. Evidence ranges from ancient observations (contralateral spasms after head injury) to stimulation (cortical stimulation evokes contralateral movement). The uncrossed minority is why “strictly contralateral” overclaims.
4. **CST development is a guided axon journey** (mouse timeline in the slide figure): layer 5 specification around E12–13, internal capsule near E14, brainstem near E17, midline crossing and cord entry around birth. Each choice point uses ligand–receptor pairs, such as Slit/Robo at the internal capsule, netrin-1/DCC at the decussation and ephrin-B3/EphA4 in the cord. (Context beyond the slides: mice lacking EphA4 or ephrin-B3 have CST axons that recross the spinal midline and walk with a hopping gait, showing that crossing guidance shapes lateralised control.)

### Layer 5 output neurons

5. **Layer 5 is the main output layer for CST neurons** (slide figure: M1/M2 laminae).
6. Two firing classes: **spike-bursting** cells, proposed to amplify and synchronise cortical output, and **regular-firing** cells, proposed to matter more for cortical feedback circuits. The slide says “may” for both: these are functional proposals tied to firing pattern and dendritic shape, not demonstrated divisions of labour.
7. Layer 5 neurons do not only descend. Many send axons across the corpus callosum to the **contralateral cortex**; single-neuron reconstructions and the slides' Allen tracer map show mirror-image motor cortex and striatum labelled on both sides. The tracer injection is mapped to M1 layer 2/3, so callosal projection is not confined to layer 5.
8. **Interhemispheric inhibition (IHI):** callosal motor-to-motor connections let each hemisphere suppress the other, thought to prevent spurious movement of the resting limb. **After stroke** the balance is abnormal: the affected hemisphere is depressed and the unaffected one hyperexcitable. Because cortical excitability shapes plasticity, this imbalance matters for recovery. (Context beyond the slides: in humans IHI is measured with paired-pulse TMS, and therapies that try to rebalance the hemispheres have given mixed results.)
9. **Projection classes** (Gerfen figure): layer 2/3 cortico-cortical; layer 5 **intratelencephalic (IT)** cells to striatum and cortex; layer 5 **pyramidal-tract (PT)** corticofugal cells to thalamus, subthalamic nucleus, substantia nigra, superior colliculus, pons and further down; layer 6 corticothalamic. Basal ganglia direct and indirect pathways close the loop back through thalamus.
10. **PT neurons split in two** (Economo et al., mouse):
    - **PT-upper** project to **thalamus**, avoid medullary motor centres, and are most active during **movement preparation**.
    - **PT-lower** project to **medullary motor nuclei**, avoid thalamus, and are most active at **movement initiation and termination**.

    Rule to remember: *target predicts timing*. Preparatory activity goes into a thalamocortical loop that can hold a plan without moving; the go command goes to the brainstem. (Context beyond the slides: the subtypes were defined with single-cell transcriptomics plus whole-brain axon reconstruction.)

### Motor cortex in a goal-directed reach

11. The slide's division of labour: **basal ganglia generate the motor plan, cerebellum coordinates and corrects, motor cortex executes**. Treat it as a teaching simplification; the loop diagram shows all three interacting.
12. **Forelimb reaching** is the model task, a sequence of start, advance, open, grasp, retract and consume. Head-fixed mice reach for water droplets at several positions, and layer 2/3 neurons show target-selective responses.
13. Mice find the droplet by **chemosensation**, not just sight. Even a “motor” task has a sensory front end that must be controlled for.
14. **Necessity tests:** muscimol (a GABA-A agonist) in motor cortex blocks reach initiation. Optogenetically driving **VGAT** (GABAergic) interneurons silences cortex and both blocks initiation and disrupts ongoing reaches. In this task, motor cortex is needed to start *and* to sustain the movement.

### Structural plasticity: dendritic spines

15. Spines are the postsynaptic structures of most excitatory synapses. They are plastic in **size/volume** and in **formation/removal**; spine changes follow synaptic plasticity, and impaired spine plasticity is reported in Alzheimer's disease and schizophrenia. Highlighted take-home: spine plasticity is **essential for learning and memory**.
16. **Method:** transgenic mice expressing GFP in about 5% of pyramidal neurons, a glass cranial window over motor cortex, and repeated imaging of the **same spines in the same animal** over days to weeks. Sparse labelling is what makes single spines trackable. (Context beyond the slides: the imaged spines are usually on layer 5 apical-tuft dendrites near the surface; the slide figure boxes the tuft.)
17. **Learning remodels circuits structurally:** synapses form, disappear, stabilise and change size, usually **in addition to** changes in synaptic weight rather than instead of them. Learning-related activity tends to add spines in **clusters** on the same dendritic stretch (Caroni schematic; Fu et al. 2012 for repeated training; Frank et al. 2018 for turnover “hotspots”).
18. **Skilled reaching (Xu et al.):** spine formation rises within an hour of training (about 11% on the slide). New spines are **selectively stabilised** with continued practice, and **pre-existing spines are eliminated**, so total spine number rises briefly and then returns toward baseline. The change is confined to the **contralateral forelimb motor cortex**: it is absent in ipsilateral motor cortex, in sensory cortex, more than 500 µm outside the forelimb area, and in mice that trained but **failed to learn**.
19. **From correlation to causation (Hayashi-Takagi et al.):** a probe tags recently potentiated spines and shrinks them when illuminated. Tagged spines shrank and untagged neighbours did not. Shrinking the spines linked to a learned task degraded that skill, while a skill learned with other spines in the same region survived. (In the slide panel, beam performance fell after light while rotarod performance held, and sham-illuminated mice kept both.)

### Myelin plasticity

20. **New oligodendrocytes are needed for fast skill acquisition (Xiao et al.):** deleting Myrf, a transcription factor needed for oligodendrocyte differentiation, from oligodendrocyte precursors blocks new oligodendrocyte production. These mice learn complex-wheel running more slowly. The gap opens within the first few hours and persists over eight nights, although they still improve. (Context beyond the slides: new oligodendrocytes appear within about 2.5–4 h of wheel exposure, too soon for much new myelin, so the early mechanism is unresolved.)
21. **Learning shifts precursor fate (Bacmeister et al.):** in vivo imaging of oligodendrocyte precursors shows that **differentiation** rises in the week after reach training, while proliferation and death are unchanged. The paper's headline is that learning also boosts **remyelination** after demyelinating injury, through new and surviving oligodendrocytes.

## Mechanism chains

```text
CORTICAL COMMAND TO THE CONTRALATERAL LIMB
Layer 5 PT neuron fires
-> axon descends through internal capsule and brainstem
-> ~85% cross at the pyramidal decussation
-> spinal interneurons / motor neurons on the opposite side
-> skilled movement of the contralateral limb
   (uncrossed minority + brainstem tracts = residual ipsilateral and axial control)
```

```text
PREPARE, THEN MOVE (mouse)
Cue + plan (basal ganglia influence via thalamus)
-> PT-upper neurons signal thalamus during preparation
-> thalamocortical loop holds the plan without movement
-> PT-lower neurons drive medullary motor nuclei
-> movement initiated ... and terminated
```

```text
LEARNING WRITTEN INTO SPINES
Skilled-reach training
-> new spines on contralateral output neurons within ~1 h (often clustered)
-> continued practice stabilises a subset of new spines
-> pre-existing spines eliminated -> net density back toward baseline
-> durable, task-specific synaptic ensemble
-> light-induced shrinkage of that ensemble removes the skill
```

```text
LEARNING WRITTEN INTO WHITE MATTER
Complex motor practice
-> precursors shift toward differentiation (proliferation and death unchanged)
-> new oligodendrocytes -> new or remodelled myelin
-> (proposed) adjusted conduction timing in task circuits
-> faster acquisition; block new oligodendrocytes -> slower learning
```

```text
STROKE AND THE INTERHEMISPHERIC SEESAW
Lesion depresses the affected motor cortex
-> balance of interhemispheric inhibition is disturbed
-> unaffected hemisphere becomes hyperexcitable
-> (model, context beyond the slides) extra inhibition onto the damaged side
-> altered excitability constrains plasticity during recovery
```

## Key experiments

| Experiment (all mouse) | Design | Result | Inference and limit |
|---|---|---|---|
| Reaching for water (Galiñanes et al., 2018) | Head-fixed reach to droplets; silence motor cortex with muscimol or VGAT optogenetics | Initiation blocked; ongoing reaches halted or diverted | Cortex is **necessary** for this learned reach. Necessity does not reveal what cortex computes. |
| PT subtypes (Economo et al., 2018) | Classify layer 5 PT cells by projection target; record during movement | Thalamus-projecting cells lead in preparation; medulla-projecting cells at initiation/termination | Preparation and execution use different output channels. Activity timing alone is correlational. |
| Spine imaging (Xu et al., 2009; cited on the slide as 2010) | Repeated imaging of the same dendrites before and during reach training | Rapid formation, selective stabilisation, elimination of old spines; contralateral and learning-specific | Learning rewires synapses. Controls tighten the link, but imaging is still correlation. |
| Optical erasure (Hayashi-Takagi et al., 2015) | Tag potentiated spines with a light-activated probe, then shrink them | Linked skill degraded; second task and sham controls intact | **Causal**, task-specific spine ensembles. Shown for recently acquired skills. |
| Myrf deletion (Xiao et al., 2016) | Block new oligodendrocytes in adult precursors; complex-wheel running | Slower learning within hours and over days | New oligodendrocytes are **required** for normal acquisition. Deletion is not confined to motor cortex. |
| Precursor fate imaging (Bacmeister et al., 2020) | Track individual precursors before and after reach learning | Differentiation up a week after learning; proliferation and death unchanged | Learning shifts fate toward differentiation. Observational. |

## Examiner traps and common overclaims

- **“Each hemisphere controls only the opposite side.”** About 85% of CST fibres cross; the remainder and the brainstem tracts give some ipsilateral and axial control.
- **“Optogenetic stimulation excited motor cortex.”** Light drove VGAT inhibitory interneurons, so the manipulation **silenced** output.
- **“Learning increases spine density.”** New spines are offset by pruning of old ones; the count returns toward baseline while the **identity** of synapses changes.
- **“Spine imaging proves spines store the skill.”** Imaging is correlational. The erasure experiment is the causal step, and it concerns recently acquired skills in mice.
- **“Structural change replaces synaptic-weight change.”** The slides say structure usually changes **in addition to** weight.
- **“Myelin plasticity is a slow, late consolidation process.”** Blocking new oligodendrocytes impaired learning within hours. Don't overclaim the other way either: knockout mice still improved.
- **“PT-lower carries the plan because it reaches the brainstem.”** The reverse holds: thalamus-projecting PT-upper cells carry preparation.
- **Species slip.** PT subtypes, spines and myelin are mouse data; the stroke IHI pattern is a human excitability measurement, not a mechanism.

## Interrogation prompts

1. VGAT-expressing interneurons in forelimb motor cortex are driven with light midway through a reach. Predict the movement outcome and explain why “stimulation” here means inactivation.
2. You could silence only PT-lower neurons, either during the delay or at the go cue. Predict the effect of each from their projection targets and activity timing.
3. At day 16 of training, total spine number in trained mice matches controls. Does this mean training left no structural trace? What measurement would show the trace?
4. A mouse practises reaching for days but never improves. Predict its spine formation and say what this control rules out.
5. Spines tagged during learning of task A are shrunk by light; task B was learned with other spines in the same region. Predict performance on both, and say what a non-specific lesion would have looked like instead.
6. Myrf is deleted from precursors either before training or only after a skill is fully learned. Predict each outcome and say which result would separate acquisition from performance.
7. After a stroke, inhibitory stimulation is applied to the unaffected hemisphere. Using the IHI model, predict the intended effect and give one reason it might not help.
8. A primate loses its CST on one side. Which descending tract could support some recovery, and why would fine finger control likely stay impaired?

## Active recall — close the notes

- Name the six descending tracts on the slide and give one function each.
- What proportion of the CST crosses, and what two observations support contralateral control?
- Which layer holds the main CST output neurons, and what are its two firing classes?
- Define IHI and describe the post-stroke hemispheric pattern.
- Contrast PT-upper and PT-lower by target and by timing of activity.
- What did muscimol and VGAT optogenetics each do to reaching?
- Give four results from Xu et al., including the anatomical and learning controls.
- Why is the Hayashi-Takagi experiment causal rather than correlational?
- What did Myrf deletion in precursors do to learning, and on what timescale?
- Which oligodendrocyte-precursor fate changed after learning, and which two did not?

## Sources checked on PubMed

- Galiñanes, Bonardi & Huber (2018) Cell Rep — [doi:10.1016/j.celrep.2018.02.042](https://doi.org/10.1016/j.celrep.2018.02.042)
- Economo et al. (2018) Nature — [doi:10.1038/s41586-018-0642-9](https://doi.org/10.1038/s41586-018-0642-9)
- Xu et al. (2009) Nature — [doi:10.1038/nature08389](https://doi.org/10.1038/nature08389)
- Hayashi-Takagi et al. (2015) Nature — [doi:10.1038/nature15257](https://doi.org/10.1038/nature15257)
- Xiao et al. (2016) Nat Neurosci — [doi:10.1038/nn.4351](https://doi.org/10.1038/nn.4351)
- Bacmeister et al. (2020) Nat Neurosci — [doi:10.1038/s41593-020-0637-3](https://doi.org/10.1038/s41593-020-0637-3)
