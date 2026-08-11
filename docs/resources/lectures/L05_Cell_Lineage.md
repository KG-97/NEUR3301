# NEUR3301 Lecture 5 - Cell Lineage

**Timetable attribution — unconfirmed:** 29 July 2026 · Dr Stuart Hodgetts · Test 1 (Lectures 1–7). Verify the date and lecturer against the LMS or Outlook before treating them as official.

> Evidence boundary: this note is a mechanism-first compression of the released NEUR3301 Lecture 5 slide deck (27 slides), checked slide by slide. **Scope warning:** the deck teaches inside-out cortical layering as a *phenomenon* demonstrated by birthdating, and never names Reelin, reeler, Cajal–Retzius cells, VLDLR/ApoER2 or DAB1. Those terms appear nowhere in the lecture. Reelin is the correct canonical mechanism and is fair game for the final exam, but do not treat it as required Test 1 content on the strength of this lecture.

## What you need to know cold

1. Potency narrows in one direction: totipotent → pluripotent → multipotent → oligopotent → unipotent. Each step is a *restriction* of options, not a gain of ability.
2. A stem cell is defined by a choice, not a marker: it can self-renew, **or** differentiate into more mature functional cell types. Embryonic stem cells are toti-/pluripotent; adult stem cells are multi-, oligo- or unipotent.
3. The sequence to be able to recite is **multipotency → restriction → specification → differentiation**. The lecture's own learning outcomes are built on it.
4. Fate is set by the intersection of two axes the deck states explicitly: **intrinsic (genetic) versus environmental (epigenetic)**, and **spatial versus temporal**. Most exam-able confusions come from collapsing one into the other.
5. Neural induction works by **inhibiting BMP**, not by adding a "neural" signal. Noggin and chordin are BMP antagonists; losing both nearly abolishes head development, while losing noggin alone gives only mild defects.
6. Position is read from morphogen gradients: **Shh ventralising, Wnt dorsalising, BMP dorsal**. For Shh, distance from source maps to differentiation outcome.
7. **Hox genes are positional memory.** Homeobox transcription factors with a highly conserved homeodomain DNA-binding region; they specify the order of structures along the anterior–posterior axis that earlier genes established, and they *maintain* the body plan rather than initiate it. Hom in flies, Hox in mammals.
8. **Radial glia do two jobs**: they are progenitors *and* the migration scaffold. Disruption gives faulty migration — if radial glia are deformed or adhesion molecules are absent, neurons "fall off."
9. **Not all radial glia are committed, and not at the same time.** Neurons are not all born at once. Birthdating works by label dilution: a nucleus that has just divided retains more label, and label dilutes as division proceeds.
10. **The cortex is assembled inside-out** — birth order predicts laminar position, with the earliest-born neurons ending up deepest and later-born neurons migrating past them.
11. **Two migration routes, two neuron classes.** Radial migration along radial glia from dorsal progenitors yields mainly excitatory neurons. GABAergic interneurons are born in the ganglionic eminence and arrive by tangential migration. The deck explicitly flags that whether the mouse pattern holds in humans is an open question.
12. **A timed competence switch** shifts neural precursor output from neurons to glia. The timing sets the neuron:glia ratio in each brain region. Extrinsic cues include Wnt and Notch; intrinsic cues are epigenetic — decreasing neurogenic and increasing astrogenic competence.
13. **Epigenetics changes access, not sequence.** DNA methylation and histone modification (methylation, acetylation, phosphorylation, ubiquitylation, sumoylation), non-coding RNAs, nucleosome and chromosomal positioning.
14. **Histone acetylation opens chromatin.** HATs acetylate histone tails → loose chromatin → transcription permitted. HDACs reverse it → condensed. Polycomb group (PcG) complexes silence genes. Neurogenin 1/2 (NGN1/2) sit downstream of this regulation.
15. **MicroRNAs act post-transcriptionally**, mediating transitions between whole transcriptional programmes rather than tuning single genes.
16. Glial development is not a late afterthought — it is tied to synapse formation, elimination, circuit development, remodelling and stabilisation, through bidirectional neuron–glia and glia–glia interactions, from embryogenesis into adulthood.

## Core causal maps

### Fate restriction

```text
Progenitor with broad potency
-> reads position from morphogen gradient (Shh / Wnt / BMP)
-> switches on a matching transcription-factor code
-> Hox code stores anterior-posterior identity as positional memory
-> epigenetic state closes off alternative programmes
-> restriction -> specification -> differentiation
```

### Neural induction by inhibition

```text
Ectoderm default is held non-neural by BMP signalling
-> organiser secretes noggin and chordin
-> these antagonise BMP at the receptor level
-> BMP signalling falls
-> neural fate proceeds
-> loss of both antagonists nearly abolishes head development
```

### Cortical assembly

```text
Neuroepithelial cells give rise to radial glia
-> radial glia divide at the ventricular surface AND span the wall as scaffold
-> newborn neurons migrate outward along that scaffold
-> later-born neurons migrate past earlier-born ones
-> cortex is built inside-out, birth order predicting layer
-> GABAergic interneurons arrive separately, tangentially, from the ganglionic eminence
```

### The neuron-to-glia switch

```text
Early precursors expand the progenitor pool, then generate neurons
-> extrinsic Wnt/Notch signalling plus intrinsic epigenetic change accumulate
-> neurogenic competence decreases, astrogenic competence increases
-> output shifts from neurons to glia
-> switch timing sets the regional neuron:glia ratio
```

## States versus fates — the subtlety the deck flags

Two competing pictures of differentiation are presented, and the distinction is exactly the kind of thing an MCQ can turn on:

- **Scenario A** — progenitors transition toward specification through discrete, stepwise stages.
- **Scenario B** — different cell *states* emerge within a single cell *fate*, revealed as continuous gradations by RNA-seq, ATAC-seq and single-cell sequencing.

The methods drive the picture. Bulk, marker-based methods make development look like a staircase; single-cell transcriptomics makes it look like a landscape. A cell in a different *state* has not necessarily changed *fate*.

## Experiment logic worth being able to reproduce

| Question | Method in the deck | What it can and cannot show |
|---|---|---|
| When was this neuron born? | Label-dilution birthdating — label is retained by recently divided nuclei and dilutes with further division | Gives birth date and, combined with position, reveals inside-out order. Does **not** show what signal set the fate. |
| Where did this cell come from? | Chick–quail chimera — graft donor tissue and track it by nuclear marker | Definitive lineage origin and migration route. Cross-species grafting is a caveat on normal context. |
| Is this factor required? | Knockout, single versus double (noggin / chordin) | Double-knockout severity versus mild single-knockout demonstrates redundancy — a single null returning a mild phenotype is not evidence the gene is unimportant. |
| Is fate intrinsic or environmental? | Isolate individual cells in culture and analyse inductive signals | Removing the environment tests intrinsic capacity, but culture is not the in-vivo niche. |

## Interrogation prompts

1. Block the BMP receptor in ectoderm. Predict the fate outcome, and explain why the answer involves *removing* a signal rather than adding one.
2. Noggin single knockout is mild; noggin/chordin double knockout nearly abolishes the head. What does the difference tell you about the pathway, and what would you wrongly conclude from the single knockout alone?
3. Radial glia are deformed by a mutation but still divide normally. Predict the consequence for cortical lamination, and state which of the radial glial cell's two jobs has failed.
4. A birthdating experiment shows heavily labelled neurons in deep layers and lightly labelled neurons superficially. What does this demonstrate, and what does it *not* tell you about how those positions were achieved?
5. A drug delays the neuron-to-glia competence switch. Predict the effect on regional neuron:glia ratio and on final circuit composition.
6. An HDAC inhibitor is applied to neural precursors. Predict the direction of the chromatin change and why that biases transcription, then state why "more transcription" is not the same as "correct fate."
7. Single-cell sequencing reveals a continuum of transcriptional states where marker staining showed three discrete populations. Has fate changed? Justify.
8. GABAergic interneurons are absent from cortex, but excitatory neurons are laminated normally. Which migration route has failed, and where were the missing cells born?

## Active recall — close the notes

- Name the potency series in order, and say what changes at each step.
- State the two things a stem cell can do.
- Give the four-word sequence from multipotency to differentiation.
- Which signals are ventralising, which dorsalising?
- What do Hox genes store, and do they initiate or maintain the body plan?
- Name the two jobs of a radial glial cell, and the phenotype when each fails.
- Explain inside-out layering in one sentence, and name the experiment that demonstrates it.
- Which neuron class migrates tangentially, and from where?
- What sets the neuron:glia ratio in a region?
- Does epigenetic regulation change DNA sequence? What does it change?
- What level of control do microRNAs act at?

## Deck-scope caution

Reelin, reeler, Cajal–Retzius cells, VLDLR/ApoER2 and DAB1 are **absent from this lecture**. Inside-out layering is taught, and its molecular mechanism is not. Learn the phenomenon and the birthdating evidence for Test 1; treat the Reelin pathway as final-exam enrichment.
