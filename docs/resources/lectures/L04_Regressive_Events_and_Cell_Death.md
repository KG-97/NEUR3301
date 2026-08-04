# NEUR3301 Lecture 4 - Regressive Events and Cell Death

**Official timetable:** 28 July 2026 - Dr Stuart Hodgetts - Test 1 (Lectures 1-7)

> Evidence boundary: this note is a mechanism-first compression of the released NEUR3301 Lecture 4 slide deck, visually checked slide by slide. It preserves the lecture's classic apoptosis-versus-necrosis comparison but adds two safeguards: TUNEL is not uniquely diagnostic of apoptosis, and regulated non-canonical pathways should not be assumed to mediate normal developmental death without pathway-specific evidence.

## What you need to know cold

1. Development deliberately overproduces neurons, branches and synapses, then removes elements that fail target, trophic or activity-dependent competition.
2. Target size matters because target-derived survival support is limiting, but afferent input, activity, paracrine signals and possible autocrine signals also affect survival.
3. An axon initially grows before it can receive target-derived support; after target arrival it can acquire trophic dependence. The molecular switch is not fully resolved.
4. Retrograde signals travel from the axon terminal toward the soma. Anterograde influences arrive from afferent inputs and can alter the viability or phenotype of the postsynaptic population.
5. Developmental neuronal death is usually apoptotic: regulated, energy-dependent, caspase-linked, cell-shrinking and relatively non-inflammatory.
6. Classical necrosis involves bioenergetic/osmotic failure, swelling, membrane rupture and inflammation.
7. BCL-2-family proteins set the mitochondrial checkpoint; caspases execute rather than initiate the survival decision.
8. Regression occurs at different anatomical resolutions: whole-cell death -> axon/collateral retraction -> terminal-arbor or spine loss -> individual synapse elimination.
9. Necroptosis, ferroptosis, pyroptosis and parthanatos are regulated non-canonical death pathways. They are especially relevant to injury and neurodegeneration, not automatic substitutes for developmental apoptosis.
10. Autophagy is a lysosomal recycling/stress-response process that can protect cells or interact with death pathways; it does not inevitably initiate apoptosis.

## Core causal maps

### Target-dependent survival competition

```text
Excess neurons reach a limited target field
-> terminals differ in access, activity and trophic capture
-> successful terminals generate retrograde survival signalling
-> somatic survival genes and phenotype are stabilised
-> poorly supported competitors undergo developmental apoptosis
```

### Bidirectional population control

```text
Afferent input and activity alter the target neuron
-> anterograde signals change target state
-> target-derived ligands are captured by efferent terminals
-> signalling endosomes travel retrogradely to the soma
-> final neuronal number and phenotype reflect both sides of the circuit
```

### Intrinsic apoptosis

```text
Trophic withdrawal or pro-apoptotic signal
-> BH3-only proteins such as BIM/BAD outweigh BCL-2/BCL-xL survival restraint
-> BAX/BAK permeabilise the mitochondrial outer membrane
-> cytochrome c and Apaf-1 assemble the apoptosome
-> caspase-9 activates effector caspases such as caspase-3
-> cell shrinks and fragments into phagocytosed apoptotic bodies
```

### Increasingly selective regression

```text
Whole-neuron death
-> branch or collateral retraction
-> terminal-arbor and dendritic-spine loss
-> individual synapse elimination
-> activity and experience stabilise the best-fit pattern
```

## Mechanistic deep dive

### Why limiting trophic support is useful

If every arriving neuron received unlimited survival support, target size and neuronal number could become mismatched. Limiting support makes survival conditional on successful innervation. Removing a limb target increases motor-neuron loss; increasing target territory rescues part of the population. The survival curve therefore reflects competition for a shared resource, not random cellular wastage.

The result is not a one-variable "target size determines everything" rule. Blocking neuromuscular transmission with curare can reduce normal motor-neuron death. Activity changes competitive occupancy and stabilisation, showing that functional use helps select the best-fit connections.

Programmed death also contributes to morphogenesis, system-size matching, removal of inappropriate phenotypes, error correction and elimination of transient populations. The process is destructive at cell level but constructive at circuit level.

### Retrograde, anterograde, paracrine and autocrine influences

- **Retrograde:** target-derived ligand-receptor complexes or regressive signals move from the terminal toward the soma and change transcription, survival or phenotype.
- **Anterograde:** afferent neurons deliver activity or trophic influence to the postsynaptic population. Deafferentation can therefore increase death even when the efferent target remains.
- **Paracrine:** neighbouring cells supply diffusible support.
- **Autocrine:** a neuron may respond to its own released signal; the lecture treats this as a possible additional influence, not the core target-competition mechanism.

### Acquisition of target dependence

The young axon must extend before it can sample factors made by its final target. The lecture model therefore proposes a developmental transition:

early target independence -> outgrowth -> target arrival -> acquired trophic dependence

The switch is better characterised in some PNS systems than in the CNS and should not be presented as one fully solved universal molecular event.

### BCL-2-family checkpoint and caspase execution

Anti-apoptotic BCL-2-family proteins such as BCL-2 and BCL-xL restrain mitochondrial permeabilisation. Trophic withdrawal increases the influence of BH3-only and pro-apoptotic members such as BIM, BAD, BAX and BAK. Once BAX/BAK create mitochondrial outer-membrane permeabilisation, cytochrome c enters the cytosol, Apaf-1 assembles an apoptosome, caspase-9 is activated and effector caspases dismantle the cell.

The exam-safe distinction is:

- **BCL-2 family:** controls the mitochondrial commitment checkpoint.
- **Initiator caspase-9:** couples the apoptosome to execution.
- **Effector caspases such as caspase-3:** cleave cellular substrates and produce the apoptotic phenotype.

### Apoptosis versus classical necrosis

| Feature | Apoptosis | Classical necrosis |
|---|---|---|
| Regulation | Active, genetically regulated execution | Acute ATP/osmotic failure in the classic comparison |
| Cell size | Shrinks | Swells |
| Nucleus/DNA | Chromatin condensation and organised fragmentation | Disorganisation and relatively random degradation |
| Membrane | Blebs; integrity mostly retained until clearance | Ruptures and releases contents |
| Scale | Often isolated cells | Often groups in an injured region |
| Clearance | Local phagocytosis of apoptotic bodies | Macrophage/microglial clearance after lysis |
| Inflammation | Limited | Prominent |

**TUNEL caveat:** TUNEL labels DNA strand breaks. It supports a death phenotype but is not, by itself, proof of apoptosis; combine it with morphology and pathway markers.

### Non-canonical regulated death

| Pathway | Core diagnostic logic | Exam boundary |
|---|---|---|
| Necroptosis | RIPK1/RIPK3 activation -> MLKL-mediated membrane disruption | Regulated necrotic death, not passive lysis |
| Ferroptosis | Iron-dependent lipid peroxidation when GPX4 protection fails | Oxidative membrane injury; prominent in degeneration models |
| Pyroptosis | Inflammasome-linked gasdermin-D pores | Lytic and inflammatory |
| Parthanatos | DNA damage -> PARP1 overactivation -> AIF-associated death | Regulated and caspase-independent |

Pathways can interact or run in parallel. A pathway label requires pathway-specific evidence, not only a dead neuron.

**Autophagy boundary:** autophagy supplies lysosomal recycling during stress and can delay death, coexist with apoptosis or contribute to a death phenotype in some contexts. Avoid the absolute claim that autophagy always precedes and triggers apoptosis.

### Anatomical levels of pruning

- **Whole-cell death:** removes the soma and every process.
- **Branch/collateral retraction:** examples include transient visual-cortex projections to spinal cord, ipsilateral retinal branches and callosal projections.
- **Terminal-arbor refinement:** retinal axons can withdraw branches from incorrect target layers while preserving the parent neuron.
- **Loss of multiple inputs:** developing skeletal muscle loses polyneuronal innervation; cerebellar Purkinje cells lose excess climbing-fibre inputs.
- **Dendritic-spine and synapse elimination:** experience and activity stabilise selected contacts; microglia can contribute in defined developmental contexts.

Microglia containing synaptic material demonstrate contact/engulfment, not automatically causal necessity. Necessity requires pathway perturbation plus a synaptic or circuit outcome.

## High-value experiment logic

### 1. Target size and motor-neuron survival

- **Manipulation:** Remove an embryonic limb bud or add target tissue; separately block neuromuscular transmission with curare.
- **Result:** Less target increases loss, added target rescues part of the population, and activity blockade can also reduce loss.
- **Inference:** Target-derived support and functional competition jointly determine survival.
- **Limit:** Each manipulation changes many signals; no single trophic molecule is isolated.

### 2. Deafferentation and trophic rescue

- **Manipulation:** Remove afferent input to the developing chick spinal cord, then apply tissue extracts or defined trophic agents.
- **Result:** Motor, interneuron and sensory populations regress; several preparations partly rescue cells.
- **Inference:** Afferents provide activity and/or anterograde trophic support.
- **Limit:** A broad lesion and multi-factor extract cannot identify the necessary endogenous signal.

### 3. BDNF rescue versus BDNF knockout

- **Manipulation:** Ablate a retinal ganglion-cell target, add BDNF, and compare with baseline ganglion-cell counts in BDNF knockout animals.
- **Result:** Target loss kills many cells; added BDNF rescues many, yet baseline number can remain normal in the knockout.
- **Inference:** BDNF is sufficient to support challenged cells, but endogenous control is redundant or compensated.
- **Limit:** Rescue does not prove normal necessity; a developmental knockout can recruit compensation.

### 4. Callosal projection fate mapping

- **Manipulation:** Retrogradely label callosal neurons early and again after maturation; retain the early somatic label.
- **Result:** Early-labelled somata survive even when many are no longer labelled from the mature target.
- **Inference:** The transient projection reached its target and was later pruned without killing the parent neuron.
- **Limit:** Control tracer uptake and transport; failed later labelling alone is not proof of pruning.

## Interpretation table

| Observation | Strongest first inference | What is still missing? |
|---|---|---|
| Added target tissue increases surviving neurons | Target access affects survival | Identity and necessity of the trophic signal |
| Curare reduces normal neuron loss | Activity/competition modifies selection | Whether the effect is pre-, post- or trans-synaptic |
| Added BDNF rescues after target ablation | BDNF can support vulnerable cells | Proof that endogenous BDNF is necessary |
| BDNF knockout has a normal baseline count | Redundancy or compensation is likely | Which ligand/pathway substitutes |
| TUNEL-positive shrunken cells with condensed nuclei | Apoptosis is strongly supported | Caspase/BCL-2-family pathway evidence |
| Swollen cells with membrane rupture and inflammation | Classical necrotic morphology | Whether a regulated necrotic pathway mediates it |
| Early-labelled soma survives after its projection disappears | Branch/collateral pruning | Molecular cause and functional consequence |

## Examiner traps

- "Programmed cell death" is the broad category; apoptosis is one mechanism within it.
- More surviving cells does not automatically mean a better circuit.
- TUNEL is not an apoptosis-only label.
- Exogenous rescue tests capacity or sufficiency, not endogenous necessity.
- A missing projection label can reflect pruning, transport failure or cell death. Pair tracing with cell counts and morphology.
- A branch can disappear while its parent soma survives.
- Autophagy is not a guaranteed one-way prelude to apoptosis.
- Do not call all lytic death "passive necrosis"; necroptosis, pyroptosis and ferroptosis are regulated.
- Do not assign adult neurodegenerative death pathways to normal developmental loss without specific evidence.

## Active recall

1. Why does a limited target-derived survival signal improve population matching?
2. Why does the curare result rule out a target-size-only model?
3. What is the direction and function of a retrograde trophic signal?
4. How can afferent deafferentation increase death in an otherwise intact neuronal population?
5. Recite the BCL-2/BAX -> cytochrome c -> caspase chain.
6. Give three morphological differences between apoptosis and classical necrosis.
7. Why is TUNEL insufficient as a standalone diagnosis?
8. What experiment distinguishes branch pruning from whole-neuron death?
9. What does BDNF rescue establish, and what does a normal BDNF knockout count add?
10. Give one diagnostic node for necroptosis, ferroptosis, pyroptosis and parthanatos.

## Long-answer skeleton

**Prompt:** Explain how trophic support, activity and regulated regression refine a developing neural circuit. Use experimental evidence to distinguish whole-cell death from selective pruning.

1. Thesis: development overproduces neural elements and uses target-, afferent- and activity-dependent signals to retain the best-fit population and connections.
2. Explain limiting target-derived support and retrograde signalling.
3. Add anterograde afferent and activity-dependent influences.
4. Give the intrinsic apoptosis chain from trophic withdrawal through BAX/BAK, apoptosome and effector caspases.
5. Contrast apoptotic morphology with classical necrosis and state the TUNEL limitation.
6. Use limb-target/curare or deafferentation data as causal evidence.
7. Order the anatomical levels of regression.
8. Use callosal fate mapping to distinguish projection pruning from soma death.
9. End with the evidence boundary: non-canonical pathways are regulated but require pathway-specific evidence in each context.

## Evidence

The released NEUR3301 Lecture 4 PDF is the course-emphasis source and is not republished here. Supporting literature:

- Moses C et al. (2015). Acquisition of target dependence by developing rat retinal ganglion cells. [PubMed](https://pubmed.ncbi.nlm.nih.gov/26464991/)
- Taylor AR et al. (2012). Motoneuron programmed cell death in response to proBDNF. [PubMed](https://pubmed.ncbi.nlm.nih.gov/21834083/)
- Yin QW et al. (1994). Cell death after chick spinal deafferentation and trophic rescue. [PubMed](https://pubmed.ncbi.nlm.nih.gov/7996201/)
- Ascano M et al. (2009). Axonal targeting of Trk receptors and neurotrophin sensitivity. [PubMed](https://pubmed.ncbi.nlm.nih.gov/19759314/)
- Gibson DA and Ma L (2011). Developmental regulation of axon branching. [PubMed](https://pubmed.ncbi.nlm.nih.gov/21177340/)
- Pathak A et al. (2021). Long-distance regressive signalling in neural development and disease. [PubMed](https://pubmed.ncbi.nlm.nih.gov/32391977/)
- Yong Y et al. (2019). p75NTR and DR6 regulate distinct phases of axon degeneration. [PubMed](https://pubmed.ncbi.nlm.nih.gov/31628183/)
- Ercin N et al. (2026). Non-canonical cell death in neurodegeneration. [PubMed](https://pubmed.ncbi.nlm.nih.gov/41699331/)
