# NEUR3301 Lecture 3 - Axon Outgrowth, Target Recognition and Maps

**Official timetable:** 27 July 2026 - Dr Stuart Hodgetts - Test 1 (Lectures 1-7)

> Evidence boundary: this note has been reconciled against the released Lecture 3 PDF, visually checked slide by slide. It follows Hodgetts's examples and emphasis; supporting literature extends the mechanism only where it clarifies those slides. Regressive removal and activity-dependent refinement are introduced here but developed in Lectures 4 and 13.

## What you need to know cold

1. Axon guidance is not one chemical compass. Mechanical factors, electrical and chemical gradients, extracellular matrix, adhesion molecules, diffusible cues, other axons and activity interact.
2. Growth cones use filopodia and lamellipodia to sample local cues, then convert receptor and second-messenger asymmetry into local cytoskeletal change.
3. Guidance depends on spatial profile and history. A neurite can cross a gradual proteoglycan rise that reaches a higher concentration than an abrupt inhibitory step.
4. Attractive and repulsive are context-dependent responses. Receptor state, cAMP/cGMP, calcium, substrate and activity can change the sign or strength.
5. Intermediate targets break a long route into solvable segments, but the growth cone must change receptor or adhesion state so it can leave the temporary target.
6. Local translation lets a distal growth cone respond rapidly: attractive cues can favour beta-actin synthesis; repulsive cues can favour RhoA/cofilin-mediated actin breakdown.
7. CNS myelin-associated inhibitors and CSPGs converge strongly on RhoA-ROCK signalling and growth-cone collapse.
8. Target recognition is hierarchical: defasciculate -> enter and stay -> choose topographic location -> layer -> target cell -> correct part of that cell.
9. Graded Eph/ephrin signalling helps position retinal terminals; an appropriate trophic context such as BDNF supports branching before later refinement.

## Core causal maps

### Context-to-turn conversion

```text
Graded or contact cue
-> asymmetric receptor activation plus calcium/cyclic-nucleotide state
-> Rho-family signalling and cue-specific local translation
-> biased actin assembly or depolymerisation
-> traction and turning versus retraction/collapse
```

### Intermediate-target escape

```text
Attraction toward floor plate or another choice point
-> TAG1/N-CAM-associated approach
-> arrival triggers receptor trafficking or expression change
-> TAG1 falls and L1-associated onward growth rises
-> old attraction is overcome and the axon continues
```

### CNS growth inhibition

```text
CSPG step or Nogo/MAG/OMgp contact
-> inhibitory receptor-complex activation
-> RhoA-ROCK signalling
-> growth-cone contraction/collapse
-> extension stops unless signalling is bypassed or blocked
```

### Target-to-map hierarchy

```text
Defasciculate at the target
-> enter and remain
-> graded Eph/ephrin positional signalling
-> select lamina, cell and subcellular site
-> trophic-supported arborisation followed by regressive refinement
```

## Guidance vocabulary

| Signal class | Lecture examples | Exam-safe interpretation |
|---|---|---|
| Mechanical | Tissue geometry and physical constraints | Can bias route and growth without being a ligand-receptor signal |
| Electrical | Applied cathode/anode fields in culture | Strong in-vitro turning evidence; normal in-vivo developmental role is less secure |
| Extracellular matrix | Proteoglycans, fibronectin, collagen | Substrate can be permissive or inhibitory; gradient steepness matters |
| Adhesion | Laminin-integrin, cadherins, TAG1, N-CAM, L1 | Controls traction, fasciculation, defasciculation and choice-point state |
| Diffusible | NGF, neurotrophins, semaphorins | Distance, receptor and second messengers set response |
| Contact inhibition | Oligodendroglial/myelin Nogo, MAG, OMgp | Receptor complexes converge on RhoA-ROCK collapse |
| Positional gradients | Eph receptors and ephrin ligands | Relative graded repulsion helps construct topographic order |

## Mechanistic deep dive

### Gradient versus hurdle

In the Snow/Letourneau proteoglycan assay, DRG neurites stop at a sharp proteoglycan boundary but can extend over a gradual increase that reaches a higher absolute concentration. Therefore:

response = concentration + spatial slope + adaptation history + receptor state

The examiner trap is to reduce guidance to "high inhibitor equals stop."

### Local NGF tropism

A local NGF source approximately 20-40 micrometres from a DRG growth cone can attract the neurite. This shows that a molecule classed as trophic can also supply spatial guidance information. The effect is distance- and geometry-dependent; a culture pipette does not define the dominant range in intact tissue.

### Intermediate targets

An intermediate target must solve two opposite problems:

1. attract or permit the axon to arrive;
2. stop attracting it once it has arrived.

The growth cone changes surface receptor, adhesion and signalling state through trafficking, translation, transcription, protein stability or sequestration. In the spinal example, TAG1 is reduced and L1 becomes prominent as commissural axons continue beyond the floor-plate region.

### RhoA-ROCK collapse

Many inhibitory systems use different receptor complexes but converge on Rho-family control of the cytoskeleton. CSPGs, Nogo, MAG, OMgp, semaphorins and other repulsive cues can increase RhoA-ROCK signalling, contract the actin network and collapse the growth cone. Convergence explains why a downstream intervention may affect several inhibitors, but it also predicts broader effects than blocking one ligand.

### Local translation

The growth cone contains thousands of mRNA species and can translate a small local proteome. The lecture's core contrast is:

- **Attractive netrin/BDNF-like cue:** local beta-actin mRNA recruitment and translation -> actin polymerisation toward the source.
- **Repulsive SEMA3A/SLIT2-like cue:** local RhoA/cofilin production or activation -> actin depolymerisation and turning away.

This produces a rapid distal response without routing every decision through the soma.

### Target recognition and map formation

Correct gross arrival is only the first checkpoint. An axon must defasciculate at the correct location, enter and remain in the target, select a topographic location, choose the correct layer, recognise an appropriate cell and innervate the correct compartment.

In the retinocollicular/retinotectal example, graded EphA receptor expression interacts with graded ephrin-A ligands. Temporal retinal axons with higher EphA signalling are more strongly repelled by high caudal/posterior ephrin-A, helping preserve neighbour relations. Single ephrin-A2 loss causes ectopic termination zones; combined ephrin-A2/A5 loss produces a stronger map defect, supporting overlapping positional signals rather than one unique address label per neuron.

## High-value experiment logic

### 1. Proteoglycan gradient versus step

- **Manipulation:** Present the same inhibitory substrate as a sharp boundary or a gradual rise.
- **Result:** The boundary stops neurites; the gradual rise can be crossed at a higher endpoint concentration.
- **Inference:** Growth cones detect spatial rate-of-change and adapt, not just absolute level.
- **Limit:** A two-dimensional culture substrate omits the mixed three-dimensional cue field in vivo.

### 2. NGF micropipette

- **Manipulation:** Place an NGF source 20-40 micrometres from a cultured DRG growth cone.
- **Result:** The neurite turns toward the source.
- **Inference:** NGF can act as a local tropic cue.
- **Limit:** Culture geometry does not establish normal tissue range or necessity.

### 3. Oligodendrocyte contact plus antibody block

- **Manipulation:** Grow neurites across oligodendrocytes, then block a functional inhibitory surface site.
- **Result:** Contact arrests extension; antibody blockade releases part of the inhibition.
- **Inference:** Specific surface signalling contributes to arrest, rather than an unavoidable physical barrier.
- **Limit:** Partial culture rescue does not prove long-distance functional regeneration in vivo.

### 4. Ephrin-A knockout mapping

- **Manipulation:** Compare retinal projections in wild type, ephrin-A2 knockout and ephrin-A2/A5 double knockout.
- **Result:** Single loss causes ectopic zones; double loss causes more severe disorganisation.
- **Inference:** Multiple ephrin gradients cooperate to specify topographic position.
- **Limit:** The experiment does not establish correct laminar, cell-type, synaptic or functional targeting.

## Intervention predictions

| Intervention | Immediate effect | Predicted phenotype |
|---|---|---|
| Replace a gradual CSPG rise with a sharp step | Increases local inhibitory slope | More growth cones stop or turn at the boundary |
| Raise cAMP/cGMP state | Changes cue-response sign and cytoskeletal signalling | A normally repulsive response may weaken or reverse in a defined preparation |
| Block local translation | Removes rapid distal production of cue-specific proteins | Guidance turns are delayed or lost despite receptor detection |
| Express L1 too early/late at a choice point | Alters adhesion and onward responsiveness | Premature exit or failure to leave the intermediate target |
| Block RhoA-ROCK | Reduces convergence of several collapse pathways | More extension across inhibitory substrates, with possible off-target guidance errors |
| Delete ephrin-A2 and A5 | Removes overlapping positional information | Severe ectopic retinal termination zones |
| Supply BDNF at the wrong target position | Permits branching in an inappropriate location | Misplaced arborisation even if long-range pathfinding is intact |

## Examiner traps

- Absolute concentration is not the whole signal; steepness and history matter.
- "Semaphorin repels" is a useful starting rule, not a universal sign across every intracellular state.
- Growth-cone collapse in a dish is not automatic proof of the dominant in-vivo guidance mechanism.
- Applied electrical fields guide cultured cells; normal developmental relevance requires in-vivo evidence.
- Blocking one myelin inhibitor is not equivalent to removing all CNS regeneration barriers.
- Reaching the target is not the same as choosing the correct layer, cell, compartment or functional map.
- Early misrouting and later failed refinement produce different anatomical phenotypes.

## Active recall

1. Why can a neurite cross a gradual proteoglycan gradient but stop at a lower abrupt step?
2. Name the major classes of guidance influence in the lecture.
3. How does local translation differ for an attractive versus repulsive cue?
4. Why must a growth cone change state at an intermediate target?
5. What result makes oligodendrocyte contact inhibition mechanistic rather than purely mechanical?
6. Recite the target-recognition hierarchy after a fasciculated axon reaches the target region.
7. What do ephrin-A2 and ephrin-A2/A5 knockout phenotypes establish?
8. Where does later regressive refinement enter the map-construction sequence?

## Long-answer skeleton

**Prompt:** Explain how a developing axon reaches an appropriate target and establishes a topographically correct terminal arbor.

1. Thesis: route selection emerges from interacting graded, contact and activity-dependent signals interpreted by a stateful growth cone.
2. Classify the cue field: mechanical, electrical, ECM, adhesion, diffusible and axon-axon influences.
3. Explain receptor/second-messenger asymmetry -> local translation/cytoskeleton -> turning.
4. Use the proteoglycan step-versus-gradient assay as evidence that slope/history matter.
5. Explain intermediate-target arrival and receptor/adhesion switching.
6. Explain target-recognition checkpoints beyond gross arrival.
7. Use Eph/ephrin gradients and knockout mapping as topographic evidence.
8. Add trophic-supported branching and explicitly hand later refinement to regressive events.
9. Limit the answer: culture assays simplify the route; no single cue specifies the entire map.

## Evidence

The released NEUR3301 Lecture 3 PDF is the course-emphasis source and is not republished here. Supporting literature:

- Snow DM and Letourneau PC (1992). Neurite outgrowth on a CSPG step gradient. [PubMed](https://pubmed.ncbi.nlm.nih.gov/1624935/)
- Gundersen RW and Barrett JN (1979). Chick dorsal-root axons turn toward NGF. [PubMed](https://pubmed.ncbi.nlm.nih.gov/493992/)
- Brown A et al. (2000). Topographic mapping controlled by relative EphA signalling. [PubMed](https://pubmed.ncbi.nlm.nih.gov/10929715/)
- Ming GL et al. (1997). cAMP-dependent growth-cone guidance by netrin-1. [PubMed](https://pubmed.ncbi.nlm.nih.gov/9331350/)
- Gibson DA and Ma L (2011). Developmental regulation of axon branching. [PubMed](https://pubmed.ncbi.nlm.nih.gov/21177340/)
- Lowery LA and Van Vactor D (2009). Growth-cone machinery. [PubMed](https://pubmed.ncbi.nlm.nih.gov/19513082/)
- de Ramon Francas G et al. (2017). How axons navigate intermediate targets. [PubMed](https://pubmed.ncbi.nlm.nih.gov/27965053/)
- Thiede-Stan NK and Schwab ME (2015). Attractive and repulsive receptor complexes. [PubMed](https://pubmed.ncbi.nlm.nih.gov/26116576/)
