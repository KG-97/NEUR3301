const lectureGroups = [
  { name: 'Development & Differentiation', block: 'Test 1', lectures: [
    [1, 'Glia I', '21 Jul'], [2, 'Growth and trophic factors', '22 Jul'], [3, 'Axon outgrowth, target recognition and maps', '27 Jul'],
    [4, 'Regressive events and cell death', '28 Jul'], [5, 'Cell lineage', '29 Jul'], [6, 'Adult neurogenesis / stem cells', '3 Aug'], [7, 'Glia II', '4 Aug']
  ]},
  { name: 'Synaptic Physiology & Plasticity', block: 'Test 2', lectures: [
    [8, 'Membrane mechanisms', '5 Aug'], [9, 'Quantal transmission', '10 Aug'], [10, 'Neurotransmitter release', '11 Aug'],
    [11, 'Synaptic plasticity, learning and memory', '18 Aug'], [12, 'Axon initial segment (AIS) and plasticity', '19 Aug'], [13, 'Synaptic development and pruning', '25 Aug']
  ]},
  { name: 'Sensory Systems', block: 'Final', lectures: [
    [14, 'Biophysics of transduction', '26 Aug'], [15, 'Somatosensory processing', '8 Sep'], [16, 'Centrifugal control', '9 Sep'],
    [17, 'Plasticity in adult sensory systems', '14 Sep'], [18, 'Cognition and measuring brain activity', '15 Sep'], [19, 'Vision', '16 Sep']
  ]},
  { name: 'Motor & Integrative Systems', block: 'Final', lectures: [
    [20, 'Peripheral auditory processing', '21 Sep'], [21, 'Central auditory processing', '22 Sep'], [22, 'Early-life stress and the HPA axis in pregnancy', '23 Sep'],
    [24, 'Motor cortex: neurophysiology and plasticity', '29 Sep'], [25, 'Cerebellar networks: neurophysiology and plasticity', '30 Sep'],
    [26, 'Neuroendocrine control of energy balance', '5 Oct'], [27, 'Neuroendocrine control of fertility', '6 Oct']
  ]},
  { name: 'Ageing, Injury & Repair', block: 'Final', lectures: [
    [28, 'Ageing, injury and degeneration', '7 Oct'], [29, 'Sensory deficits and prostheses', '12 Oct'], [30, 'Spinal cord injury and regeneration', '13 Oct']
  ]}
];

const lectureBriefs = [
  {
    id: 1,
    title: 'Glia I',
    date: '21 July 2026',
    lecturer: 'Hodgetts',
    scope: 'Released lecture PDF and recording transcript condensed into an exam-safe mechanism brief; automatic-transcript terminology is normalised and older binary glial-state shorthand is qualified.',
    outcomes: [
      'Classify CNS and PNS glia by developmental origin, location and mechanistic role rather than treating “glia” as one cell class.',
      'Compare how one oligodendrocyte and one myelinating Schwann cell distribute myelin across axons and internodes.',
      'Explain how radial glia, astrocytes and microglia influence development, homeostasis, injury responses and circuit remodelling.',
      'Predict why abolishing a reactive glial response may remove an inhibitory barrier yet worsen tissue damage or inflammatory spread.'
    ],
    chains: [
      {
        name: 'Radial-glial development',
        steps: ['Neural-tube ventricular-zone progenitor', 'radial process spans ventricular-to-pial axis', 'newborn cell uses the scaffold and positional signals', 'migration and lineage progression', 'layered neural tissue']
      },
      {
        name: 'Peripheral nerve repair',
        steps: ['Axon injury and distal degeneration', 'Schwann-cell repair reprogramming', 'myelin/debris clearance plus trophic signalling', 'bands of Büngner guide regrowth', 'target reinnervation if distance and timing permit']
      },
      {
        name: 'Reactive astrocyte trade-off',
        steps: ['CNS injury', 'context-dependent astrocyte-state change', 'lesion border contains inflammation and protects tissue', 'scar-associated signals can restrict later axon extension', 'repair requires timing and state control—not blanket ablation']
      }
    ],
    distinctions: [
      ['CNS macroglia', 'Neuroectoderm / neural tube', 'Astrocytes, oligodendrocytes and ependymal cells do not share microglial ontogeny'],
      ['Microglia', 'Embryonic yolk-sac erythromyeloid lineage', 'Resident immune cells largely self-renew locally; healthy adult microglia are not normally replaced by bone marrow'],
      ['Oligodendrocyte', 'CNS myelin and axonal support', 'One cell can form internodes on multiple axons'],
      ['Schwann cell', 'Neural-crest-derived PNS glia', 'One myelinating cell normally forms one internode on one axon; repair cells also support regeneration'],
      ['Astrocyte / BBB', 'Barrier regulation and homeostasis', 'Endothelial tight junctions form the principal physical seal; astrocytes and pericytes regulate it'],
      ['GFAP or M1/M2/A1/A2 labels', 'Useful but limited markers/shorthand', 'Markers and binary labels do not capture all glia or multidimensional reactive states'],
      ['Astrocyte ion/transmitter buffering', 'Kir4.1, AQP4, EAAT2/GLT-1, glutamine synthetase', 'Spatial K+ siphoning, water coupling and glutamate clearance; failure permits excitotoxicity'],
      ['Node of Ranvier organisation', 'Nav1.6 clustered by ankyrin-G/βIV-spectrin; Caspr–contactin paranodes', 'Saltatory conduction is a molecular-domain property; demyelination disperses nodal channels'],
      ['Microglial complement pruning', 'C1q-driven complement activation deposits iC3b, which can engage microglial CR3; CX3CR1 tunes the window', 'Less-active synapses are engulfed in an activity-dependent window (mouse retinogeniculate); human relevance inferred']
    ],
    experiments: [
      {
        name: 'Microglial fate mapping',
        design: 'Label early yolk-sac macrophage progenitors and trace their descendants into the adult CNS.',
        result: 'Labelled embryonic progenitors contribute persistently to adult microglia.',
        inference: 'Microglia have a mesodermal embryonic origin distinct from neuroectoderm-derived CNS macroglia.',
        limit: 'A lineage label establishes ancestry; it does not by itself specify every adult activation state or function.'
      },
      {
        name: 'Astrocyte-scar perturbation',
        design: 'Prevent or ablate scar-forming astrocytes after spinal cord injury, then measure lesion spread and stimulated axon regrowth.',
        result: 'Removing scar formation does not automatically improve regrowth and can remove tissue-protective functions.',
        inference: 'Reactive astrocyte borders can be both protective and growth-limiting, depending on time and context.',
        limit: 'Genetic ablation perturbs a cell population broadly; one injury model does not define every reactive astrocyte state.'
      },
      {
        name: 'Schwann-cell repair programme',
        design: 'Disrupt injury-induced c-Jun signalling selectively in Schwann cells after peripheral nerve injury.',
        result: 'Repair-cell organisation, trophic support, axon regeneration and functional recovery are impaired.',
        inference: 'Peripheral repair depends on active Schwann-cell reprogramming, not merely the passive absence of CNS inhibitors.',
        limit: 'Rodent nerve distance and recovery time differ substantially from long human peripheral nerves.'
      }
    ],
    traps: [
      '“Glia are support cells” is too vague: name the cell, mechanism, location and predicted consequence of perturbation.',
      'Astrocytic end-feet regulate the blood–brain barrier but are not the endothelial tight-junction seal itself.',
      'GFAP is not a flawless all-astrocyte-and-only-astrocyte identity marker across regions, development and disease.',
      'M1/M2 microglia and A1/A2 astrocytes are historical teaching shorthand, not two exhaustive fixed states.',
      'A glial scar can restrict axon growth and contain damaging inflammation; erasing one function may erase the other.'
    ],
    recall: [
      ['What lineage result separates microglia from CNS macroglia?', 'Microglia descend mainly from embryonic yolk-sac erythromyeloid progenitors, whereas astrocytes and oligodendrocytes are neuroectoderm-derived.'],
      ['How does one oligodendrocyte differ from one myelinating Schwann cell?', 'One oligodendrocyte can form internodes on multiple CNS axons; one myelinating Schwann cell normally forms one PNS internode on one axon.'],
      ['Why could blocking astrocyte scar formation backfire?', 'It might reduce a growth barrier while also weakening lesion containment, inflammatory control and protection of surviving tissue.'],
      ['Why is GFAP positivity insufficient to define an astrocyte population?', 'Expression varies across astrocyte states and regions and is not perfectly exclusive, so anatomy, morphology, additional markers and context are required.'],
      ['What makes the injured PNS more growth-permissive than the injured CNS?', 'Repair Schwann cells clear debris, provide trophic signals and form aligned regeneration tracks, although long distance and chronic denervation still limit recovery.']
    ],
    download: '../resources/lectures/L01_Glia_I.md',
    references: [
      ['Ginhoux et al. (2010) — embryonic origin of adult microglia', 'https://pubmed.ncbi.nlm.nih.gov/20966214/'],
      ['Anderson et al. (2016) — astrocyte-scar functions in CNS regeneration', 'https://pubmed.ncbi.nlm.nih.gov/27027288/'],
      ['Jessen and Mirsky (2016) — the repair Schwann cell', 'https://pubmed.ncbi.nlm.nih.gov/26864683/'],
      ['Raisman and Li (2007) — olfactory ensheathing cells in pathway repair', 'https://pubmed.ncbi.nlm.nih.gov/17342173/'],
      ['Schafer et al. (2012) — complement-dependent microglial synaptic pruning', 'https://pubmed.ncbi.nlm.nih.gov/22632727/'],
      ['Liddelow et al. (2017) — microglia-induced neurotoxic reactive astrocytes', 'https://pubmed.ncbi.nlm.nih.gov/28099414/']
    ]
  },
  {
    id: 2,
    title: 'Growth and Trophic Factors',
    date: '22 July 2026',
    lecturer: 'Hodgetts',
    scope: 'Released lecture PDF and recording transcript integrated with primary evidence; lecturer-emphasised transport, target-dependence, BDNF regulation and repair-delivery examples are separated from broader mechanistic inference.',
    outcomes: [
      'Distinguish a growth factor from a neurotrophic factor and avoid treating every trophic signal as a survival-only signal.',
      'Match NGF, BDNF/NT-4 and NT-3 to their preferred Trk receptors, while recognising that receptor expression and context determine the response.',
      'Explain target-derived competition, Trk signalling endosomes and the survival-versus-apoptosis decision as one causal chain.',
      'Predict how compartment-specific ligand removal, receptor blockade or transport disruption changes neuronal survival and target innervation.'
    ],
    chains: [
      {
        name: 'Target-derived survival',
        steps: ['Limited target-derived neurotrophin', 'Trk binding and dimerisation', 'Receptor autophosphorylation', 'PI3K-Akt / Ras-MAPK / PLCγ signalling', 'pro-survival transcription and metabolism']
      },
      {
        name: 'Long-range signal',
        steps: ['Ligand-Trk complex at distal axon', 'endocytosis into a signalling endosome', 'dynein-dependent retrograde transport', 'somatic nuclear response', 'survival and differentiation programme']
      },
      {
        name: 'Competition failure',
        steps: ['Insufficient trophic capture', 'reduced Trk survival signalling', 'BIM/BAX-dominated mitochondrial permeabilisation', 'caspase activation', 'developmental apoptosis']
      }
    ],
    distinctions: [
      ['NGF', 'TrkA', 'Classically sympathetic and nociceptive sensory development; context matters'],
      ['BDNF / NT-4', 'TrkB', 'Survival, differentiation and synaptic/circuit plasticity'],
      ['NT-3', 'TrkC preferred', 'Proprioceptive and other developmental programmes; cross-activation can occur'],
      ['Mature neurotrophin + Trk', 'Usually trophic/survival signalling', 'Not a universal outcome; cell state and co-receptors matter'],
      ['Proneurotrophin + p75NTR/sortilin context', 'Can favour apoptotic or pruning signals', 'p75NTR is not simply a low-affinity “death receptor” in every context'],
      ['Trk survival branches', 'PI3K-Akt vs Ras-ERK vs PLCγ', 'Akt inactivates BAD/FOXO for survival; sustained ERK drives differentiation; PLCγ feeds Ca2+/PKC plasticity'],
      ['Signalling endosome maturation', 'Rab5 → Rab7; Rab10 sorts TrkB', 'Dynein hauls a catalytically active Trk carrier that delivers a sustained somatic CREB signal'],
      ['Intrinsic apoptotic execution', 'BH3-only (BIM/BAD) → BAX/BAK → Apaf-1/caspase-9 → caspase-3', 'Trophic withdrawal permeabilises mitochondria; this sequence is the developmental death pathway']
    ],
    experiments: [
      {
        name: 'Compartmented NGF-TrkA transport',
        design: 'Supply NGF only to distal sympathetic axons, then track internalised NGF-TrkA and interrupt retrograde transport.',
        result: 'Distal NGF can support somatic survival; blocking the transported signal removes that support.',
        inference: 'A locally captured target signal can be conveyed to the soma by a signalling endosome.',
        limit: 'Culture compartments simplify the target environment and transport blockade may disrupt more than Trk cargo.'
      },
      {
        name: 'Neuronal competition model',
        design: 'Manipulate NGF access and the competition-linked sensitisation programme in developing sympathetic neurons.',
        result: 'Relative trophic access changes survival, rather than survival being set only by a fixed cell-autonomous timer.',
        inference: 'Target competition is an active signalling process that selects appropriately connected neurons.',
        limit: 'Sympathetic neurons are a powerful model, not proof that every CNS population uses the identical mechanism.'
      },
      {
        name: 'Growth-factor repair delivery',
        design: 'Deliver a trophic factor directly, by vector, engineered cell or scaffold after nervous-system injury; measure survival, axon extension and reconnection separately.',
        result: 'A treatment may improve cell survival or local growth without restoring target-specific connectivity or behaviour.',
        inference: 'Dose, location and timing are part of the mechanism, and survival is only one checkpoint in functional repair.',
        limit: 'Delivery vehicles and injury environments introduce effects beyond the named trophic factor.'
      }
    ],
    traps: [
      '“Neurotrophin” is not synonymous with “neurotransmitter,” and retrograde transport is not retrograde synaptic transmission.',
      'Trk activation can promote survival, growth, differentiation or plasticity; the ligand name alone does not specify the phenotype.',
      'Cell survival is not functional innervation. A neuron may remain alive yet fail to reach, map onto or communicate with its target.',
      'p75NTR can modulate affinity, survival, pruning or death depending on ligand form, co-receptors and intracellular context.'
    ],
    recall: [
      ['Why does a target make trophic support limiting?', 'It couples neuronal survival to successful target access, matching neuron number to available target territory.'],
      ['What makes a signalling endosome more than ordinary cargo?', 'It preserves an active ligand-receptor signalling complex during retrograde transport so the distal event can change somatic transcription.'],
      ['What would dynein inhibition predict?', 'Reduced delivery of distal trophic signals to the soma, impaired survival/differentiation signalling and possible distal cargo accumulation.'],
      ['Why is “more BDNF is always better” weak reasoning?', 'Dose, timing, receptor distribution, circuit state and off-target plasticity determine the outcome; trophic signalling is context-dependent.']
    ],
    download: '../resources/lectures/L02_Growth_and_Trophic_Factors.md',
    references: [
      ['Ye et al. (2003) — NGF-TrkA signalling endosomes', 'https://pubmed.ncbi.nlm.nih.gov/12848932/'],
      ['Deppmann et al. (2008) — neuronal competition model', 'https://pubmed.ncbi.nlm.nih.gov/18323418/'],
      ['Lazo et al. (2023) — Rab10 and retrograde TrkB signalling', 'https://pubmed.ncbi.nlm.nih.gov/36897066/'],
      ['Reichardt (2006) — neurotrophin-regulated signalling pathways', 'https://pubmed.ncbi.nlm.nih.gov/16939974/'],
      ['Nykjaer et al. (2004) — sortilin in proNGF-induced neuronal death', 'https://pubmed.ncbi.nlm.nih.gov/14985763/']
    ]
  },
  {
    id: 3,
    title: 'Axon Outgrowth, Target Recognition and Maps',
    date: '27 July 2026',
    lecturer: 'Hodgetts',
    scope: 'Released Lecture 3 PDF checked slide by slide and reconciled with primary evidence. The brief follows Hodgetts\'s emphasis on graded versus abrupt barriers, intermediate targets, local growth-cone translation, myelin-associated inhibition and the hierarchy of target recognition.',
    outcomes: [
      'Classify the mechanical, electrical, extracellular-matrix, adhesion, diffusible and axon-axon influences that shape a growing process.',
      'Explain how a growth cone converts local receptor and second-messenger asymmetry into actin assembly, local translation, traction or collapse.',
      'Use intermediate targets and changing receptor/adhesion states to explain how an axon reaches a choice point and then escapes it.',
      'Separate target entry from topographic, laminar, cell-type and subcellular recognition, then explain how Eph/ephrin gradients and trophic signals support ordered arborisation.'
    ],
    chains: [
      {
        name: 'Context-to-turn conversion',
        steps: ['Graded or contact cue', 'asymmetric receptor plus Ca2+ / cyclic-nucleotide state', 'Rho-family signalling and cue-specific local mRNA translation', 'biased actin assembly or depolymerisation', 'traction and turning versus retraction/collapse']
      },
      {
        name: 'Intermediate-target escape',
        steps: ['Attraction toward floor plate or another choice point', 'arrival while TAG1 / N-CAM support the approach', 'receptor trafficking or transcriptional/translation state change', 'TAG1 falls and L1-associated onward growth rises', 'attraction is overcome and the axon continues']
      },
      {
        name: 'CNS growth inhibition',
        steps: ['CSPG step or myelin-associated Nogo / MAG / OMgp contact', 'inhibitory receptor-complex activation', 'RhoA-ROCK signalling', 'growth-cone contraction/collapse', 'extension stops unless the inhibitory signal is bypassed or blocked']
      },
      {
        name: 'Target-to-map hierarchy',
        steps: ['Defasciculate at the target', 'enter and remain in the target', 'graded Eph/ephrin positional signalling', 'select the correct lamina, cell and cellular compartment', 'BDNF-supported arborisation followed by later regressive refinement']
      }
    ],
    distinctions: [
      ['Abrupt proteoglycan step', 'A sudden high local change', 'Can stop a DRG neurite even when the absolute concentration is below a gradual-gradient maximum'],
      ['Gradual proteoglycan gradient', 'Progressive concentration change', 'A neurite can adapt and cross concentrations that would inhibit when presented as a sharp hurdle'],
      ['Diffusible cue', 'NGF or semaphorin acting over a distance', 'Range, gradient geometry, receptor state and cAMP/cGMP context shape the response'],
      ['Contact / substrate cue', 'Laminin-integrin, cadherin, CSPG or myelin contact', 'Can be permissive, adhesive or inhibitory and can interact with diffusible signals'],
      ['Attraction versus repulsion', 'Growth-cone response, not an immutable cue label', 'Semaphorins are often repulsive, but intracellular state and activity can alter the sign or magnitude'],
      ['Local translation', 'Attractive cues favour local beta-actin synthesis; repulsive cues can favour RhoA/cofilin', 'Gives the distal growth cone a rapid asymmetric response without waiting for the soma'],
      ['Intermediate target', 'Temporary attractive/guidance station plus state switch', 'The growth cone must change surface receptors or adhesion molecules so it can leave rather than remain trapped'],
      ['CNS myelin inhibition', 'Nogo, MAG and OMgp plus CSPG-associated signalling', 'Distinct receptor complexes converge strongly on RhoA-ROCK-mediated collapse; antibody blockade can release contact inhibition'],
      ['Eph / ephrin', 'Contact-mediated gradients with bidirectional-capable signalling', 'Relative receptor-ligand levels help place retinal terminals; ephrin-A2/A5 loss progressively disrupts mapping'],
      ['Recognition hierarchy', 'Target entry -> topographic location -> lamina -> cell -> subcellular site', 'Arrival in the correct gross region is necessary but does not establish specific functional connectivity']
    ],
    experiments: [
      {
        name: 'Proteoglycan gradient versus hurdle',
        design: 'Expose DRG neurites to either an abrupt proteoglycan-coated boundary or a gradually rising proteoglycan gradient that reaches an equal or higher concentration.',
        result: 'The abrupt boundary arrests growth, whereas neurites can extend across the gradual increase.',
        inference: 'Growth cones read spatial rate-of-change and history, not only absolute inhibitor concentration.',
        limit: 'An in-vitro substrate assay simplifies the mixed three-dimensional cue fields present in vivo.'
      },
      {
        name: 'Local NGF tropism',
        design: 'Place an NGF source 20-40 micrometres from a cultured DRG growth cone and track turning.',
        result: 'The neurite bends toward the local NGF gradient within the effective distance range.',
        inference: 'A diffusible trophic factor can act as a short-range tropic guidance cue as well as a survival signal.',
        limit: 'Micropipette geometry and culture conditions do not establish the effective range or dominant cue in intact tissue.'
      },
      {
        name: 'Oligodendrocyte contact inhibition',
        design: 'Co-culture neurites with oligodendrocytes, then block a functional myelin-inhibitor site with an antibody.',
        result: 'Oligodendrocyte contact inhibits extension; functional blockade releases part of that inhibition.',
        inference: 'The arrest is mediated by specific surface signalling rather than an unavoidable mechanical barrier.',
        limit: 'Partial rescue does not identify every inhibitor or show that the same blockade restores long-distance CNS regeneration in vivo.'
      },
      {
        name: 'Ephrin-A map perturbation',
        design: 'Trace retinal projections in wild-type, ephrin-A2 knockout and ephrin-A2/A5 double-knockout animals.',
        result: 'Single loss produces ectopic termination zones; double loss leaves few correctly placed zones.',
        inference: 'Overlapping ephrin gradients cooperate to provide topographic positional information.',
        limit: 'A mapping phenotype does not show that Eph/ephrin alone specifies lamina, partner cell, synapse or later refinement.'
      }
    ],
    traps: [
      'Absolute concentration is not the whole signal: a gradual proteoglycan rise may be crossed even when a lower abrupt step stops growth.',
      'Growth-cone collapse or turning in culture is a mechanistic assay, not automatic proof that the same cue dominates the intact route.',
      'Electrical-field guidance is clear in vitro; its magnitude and causal role during normal in-vivo brain development remain less secure.',
      'Target recognition includes defasciculation, entry, stopping, topography, lamina, cell and subcellular site—not merely arrival.',
      'Initial guidance and later regressive refinement are linked but distinct; do not use pruning to explain an early misrouting phenotype.'
    ],
    recall: [
      ['Why can a neurite cross a gradual proteoglycan gradient but stop at a lower abrupt step?', 'The growth cone responds to spatial change and adaptation history as well as absolute concentration; the sudden hurdle generates a stronger inhibitory transition.'],
      ['How can local translation produce opposite turns?', 'Attractive cues can bias beta-actin synthesis and polymerisation toward the source, whereas repulsive cues can locally increase RhoA/cofilin-driven actin breakdown.'],
      ['Why must an axon change state at an intermediate target?', 'The cues and adhesion state that attract it to the choice point must be reduced or replaced so it can leave and follow the next route segment.'],
      ['What does antibody release of oligodendrocyte contact inhibition establish?', 'A specific surface signalling mechanism contributes to arrest; it does not prove that blocking one ligand is sufficient for functional CNS regeneration.'],
      ['What are the levels of target recognition?', 'Defasciculate at the right place, enter and remain, choose topographic position, lamina, target cell and the correct compartment of that cell.'],
      ['How do Eph/ephrin and BDNF divide labour in the lecture model?', 'Relative Eph/ephrin gradients bias positional termination; appropriate trophic support permits branching/arborisation, with later regressive events refining the map.']
    ],
    download: '../resources/lectures/L03_Axon_Outgrowth_Target_Recognition_Maps.md',
    references: [
      ['Snow and Letourneau (1992) — neurite growth across a CSPG step gradient', 'https://pubmed.ncbi.nlm.nih.gov/1624935/'],
      ['Gundersen and Barrett (1979) — NGF-directed DRG axon turning', 'https://pubmed.ncbi.nlm.nih.gov/493992/'],
      ['Brown et al. (2000) — relative EphA signalling', 'https://pubmed.ncbi.nlm.nih.gov/10929715/'],
      ['Ming et al. (1997) — cAMP sets netrin attraction versus repulsion', 'https://pubmed.ncbi.nlm.nih.gov/9331350/'],
      ['Gibson and Ma (2011) — developmental regulation of axon branching', 'https://pubmed.ncbi.nlm.nih.gov/21177340/'],
      ['Lowery and Van Vactor (2009) — growth cone machinery', 'https://pubmed.ncbi.nlm.nih.gov/19513082/'],
      ['de Ramon Francas et al. (2017) — navigation through intermediate targets', 'https://pubmed.ncbi.nlm.nih.gov/27965053/'],
      ['Thiede-Stan and Schwab (2015) — attractive and repulsive receptor complexes', 'https://pubmed.ncbi.nlm.nih.gov/26116576/']
    ]
  },
  {
    id: 4,
    title: 'Regressive Events and Cell Death',
    date: '28 July 2026',
    lecturer: 'Hodgetts',
    scope: 'Released Lecture 4 PDF checked slide by slide and condensed into an exam-safe mechanism brief. The classic apoptosis-versus-necrosis comparison is retained, while regulated non-canonical pathways and evidence limits are kept distinct from normal developmental apoptosis.',
    outcomes: [
      'Explain how developmental overproduction, limiting target support and activity-dependent competition match neuron number and connectivity to available targets.',
      'Distinguish target-derived retrograde influences from afferent anterograde influences, and explain the proposed acquisition of target dependence after axon arrival.',
      'Compare apoptosis with classical necrosis at the molecular, morphological and inflammatory levels, including BCL-2-family control and the caspase cascade.',
      'Order regressive events from whole-cell death through branch retraction and spine loss to synapse elimination, then identify what evidence distinguishes one level from another.',
      'Recognise necroptosis, ferroptosis, pyroptosis and parthanatos as regulated non-canonical pathways without assuming that each drives normal developmental cell loss.'
    ],
    chains: [
      {
        name: 'Target-dependent survival competition',
        steps: ['Excess neurons reach a limited target field', 'axons differ in target access, activity and trophic capture', 'successful terminals generate retrograde survival signalling', 'survival genes and phenotype are stabilised', 'poorly supported competitors undergo developmental apoptosis']
      },
      {
        name: 'Bidirectional population control',
        steps: ['Afferent input and activity alter the target neuron', 'anterograde signals change target state', 'target-derived ligands are captured at efferent terminals', 'retrograde endosomal signalling reaches the soma', 'final neuronal number and phenotype reflect both sides of the circuit']
      },
      {
        name: 'Intrinsic apoptotic execution',
        steps: ['Trophic withdrawal or pro-apoptotic signal', 'BH3-only proteins such as BIM/BAD outweigh anti-apoptotic BCL-2/BCL-xL', 'BAX/BAK drive mitochondrial outer-membrane permeabilisation', 'cytochrome c plus Apaf-1 assemble the apoptosome', 'caspase-9 activates effector caspases such as caspase-3', 'cell shrinks, fragments and is phagocytosed without membrane rupture']
      },
      {
        name: 'Increasingly selective circuit regression',
        steps: ['Whole-neuron programmed death', 'axon branch or collateral retraction', 'terminal-arbor and dendritic-spine loss', 'individual synapse elimination', 'activity and experience stabilise the best-fit pattern']
      }
    ],
    distinctions: [
      ['Naturally occurring developmental death', 'Normal population matching and error correction', 'Often apoptotic and coordinated with target size, afferents, activity and developmental timing'],
      ['Functions of programmed death', 'Patterning, morphogenesis, system-size matching, error correction and removal of transient or inappropriate phenotypes', 'The outcome can be constructive at circuit level even though individual cells are eliminated'],
      ['Target-derived retrograde influence', 'Signal travels from axon terminal toward soma', 'Links successful target access to somatic survival and phenotype'],
      ['Afferent anterograde influence', 'Input-side signal or activity changes the postsynaptic population', 'Deafferentation can increase death; trophic agents can partly rescue the loss'],
      ['Early target independence -> later dependence', 'Axon initially extends before it can access target-derived factors', 'After arrival, a proposed state switch makes survival sensitive to target support; the switch is not fully resolved'],
      ['Apoptosis', 'Active regulated execution: shrinkage, chromatin condensation, blebbing, apoptotic bodies, caspases', 'Membrane integrity is largely retained until clearance, so inflammation is limited'],
      ['Classical necrosis', 'ATP/osmotic failure: cell and mitochondria swell, membrane lyses, contents spill', 'Usually inflammatory and often affects groups of acutely injured cells'],
      ['Autophagy', 'Lysosomal recycling and stress-adaptation process', 'Can protect or interact with death pathways; do not claim that it inevitably initiates apoptosis'],
      ['TUNEL signal', 'Labels DNA strand breaks', 'Supports cell-death detection but is not uniquely specific for apoptosis without morphology or pathway markers'],
      ['BDNF rescue versus BDNF knockout', 'Exogenous BDNF can rescue vulnerable retinal ganglion cells while a knockout count may remain normal', 'Rescue shows capacity; a normal knockout suggests redundancy/compensation and does not erase BDNF responsiveness'],
      ['Necroptosis', 'RIPK1/RIPK3 -> MLKL membrane disruption', 'Regulated necrotic death, mechanistically distinct from passive osmotic lysis'],
      ['Ferroptosis', 'Iron-dependent lipid peroxidation opposed by GPX4', 'Oxidative membrane damage; prominent in injury/degeneration models rather than the default developmental pathway'],
      ['Pyroptosis', 'Inflammasome-linked gasdermin-D pore formation', 'Lytic and inflammatory'],
      ['Parthanatos', 'DNA damage -> PARP1 overactivation -> AIF-associated death', 'Caspase-independent regulated death pathway'],
      ['Pruning versus apoptosis', 'Selected branch, spine or synapse is removed while the soma survives', 'Loss of a projection label does not prove that its parent neuron died'],
      ['Microglial pruning evidence', 'Microglia can engulf synaptic material in defined developmental contexts', 'Engulfment supports involvement; necessity requires perturbing the pathway and measuring synapse or circuit outcomes']
    ],
    experiments: [
      {
        name: 'Target size and motor-neuron survival',
        design: 'Remove an embryonic limb bud or add target tissue, then count surviving motor neurons across the normal death period; separately block neuromuscular activity with curare.',
        result: 'Less target increases neuronal loss, extra target rescues part of the population, and activity blockade can also reduce normal loss.',
        inference: 'Target availability and functional competition jointly regulate survival; target size is not the only variable.',
        limit: 'Limb and curare manipulations alter many signals and do not identify one molecular trophic factor.'
      },
      {
        name: 'Afferent deafferentation and rescue',
        design: 'Remove descending or local afferent input to the developing chick spinal cord, then test tissue extracts or defined trophic agents.',
        result: 'Deafferentation causes regressive loss across motor, interneuron and sensory populations; several trophic preparations partly rescue cells.',
        inference: 'Afferents can support neuronal viability through activity and/or anterograde trophic influence.',
        limit: 'Broad lesions and multi-factor extracts cannot isolate the necessary endogenous signal or prove a direct synaptic route.'
      },
      {
        name: 'Retinal target ablation and BDNF logic',
        design: 'Ablate the retinal ganglion-cell target, test exogenous BDNF rescue, and compare the result with ganglion-cell number in BDNF knockout animals.',
        result: 'Target loss removes many retinal ganglion cells; added BDNF rescues many, yet baseline number can remain normal in the knockout.',
        inference: 'BDNF is sufficient to support vulnerable cells in that context, while endogenous survival control is redundant or compensated.',
        limit: 'A rescue experiment does not establish that endogenous BDNF is necessary, and a developmental knockout can recruit compensation.'
      },
      {
        name: 'Callosal projection fate mapping',
        design: 'Retrogradely label callosal projection neurons early, label the mature projection later, and ask whether early-labelled somata survive after the projection disappears.',
        result: 'Early-labelled cells remain, but many are no longer back-labelled from the mature target.',
        inference: 'The transient callosal axons reached the target and were later pruned without whole-neuron death.',
        limit: 'Tracer uptake and transport must be controlled; failure of later labelling alone is not enough without showing somatic survival.'
      }
    ],
    traps: [
      'Developmental cell death is normal circuit construction, not evidence that the embryo is pathologically degenerating.',
      'More surviving neurons is not automatically better: excess or poorly matched cells can degrade population matching and circuit specificity.',
      'Apoptosis is one regulated cell-death mechanism; programmed or regulated cell death is the broader category.',
      'TUNEL positivity is not a standalone molecular diagnosis of apoptosis.',
      'Exogenous-factor rescue demonstrates biological capacity, not endogenous necessity; compare rescue, blockade and knockout logic.',
      'Projection loss may reflect branch pruning, transport failure or soma death. Pair tracing with cell counts and morphology.',
      'Autophagy is not a guaranteed one-way prelude to apoptosis; it can be adaptive, harmful or cross-talking depending on context.',
      'Do not import adult neurodegenerative ferroptosis, pyroptosis or parthanatos into normal developmental death without pathway-specific evidence.'
    ],
    recall: [
      ['Why make target-derived support limiting?', 'It couples survival to successful target access and matches the size of a neuronal population to the available target territory.'],
      ['Why can curare reduce developmental motor-neuron death even though it blocks function?', 'Paralysis changes competitive neuromuscular occupancy and activity-dependent selection, showing that survival is not set by target size alone.'],
      ['What is the intrinsic apoptosis chain?', 'Trophic withdrawal -> BH3-only bias -> BAX/BAK mitochondrial permeabilisation -> cytochrome c/Apaf-1 apoptosome -> caspase-9 -> caspase-3 execution.'],
      ['How would histology distinguish apoptosis from classical necrosis?', 'Apoptosis shows shrinkage, condensed/fragmented nuclei and apoptotic bodies with limited inflammation; necrosis shows swelling, membrane rupture, lysis and inflammation.'],
      ['What result proves branch pruning rather than neuron death?', 'The parent soma remains identifiable/alive after its previously labelled branch or target projection disappears.'],
      ['What does a BDNF rescue plus normal BDNF-knockout count teach?', 'BDNF can support cells under challenge, but endogenous control is redundant or developmentally compensated; sufficiency and necessity are different claims.'],
      ['Name one diagnostic node for each non-canonical pathway.', 'Necroptosis: RIPK1/RIPK3-MLKL; ferroptosis: iron/lipid peroxidation with GPX4 failure; pyroptosis: inflammasome-gasdermin D pores; parthanatos: PARP1-AIF.']
    ],
    download: '../resources/lectures/L04_Regressive_Events_and_Cell_Death.md',
    references: [
      ['Moses et al. (2015) — acquisition of target dependence by retinal ganglion cells', 'https://pubmed.ncbi.nlm.nih.gov/26464991/'],
      ['Taylor et al. (2012) — proBDNF and motoneuron programmed death', 'https://pubmed.ncbi.nlm.nih.gov/21834083/'],
      ['Yin et al. (1994) — deafferentation and trophic rescue', 'https://pubmed.ncbi.nlm.nih.gov/7996201/'],
      ['Ascano et al. (2009) — axonal Trk targeting and neurotrophin sensitivity', 'https://pubmed.ncbi.nlm.nih.gov/19759314/'],
      ['Gibson and Ma (2011) — developmental axon-branch regulation', 'https://pubmed.ncbi.nlm.nih.gov/21177340/'],
      ['Pathak et al. (2021) — long-distance regressive signalling', 'https://pubmed.ncbi.nlm.nih.gov/32391977/'],
      ['Yong et al. (2019) — p75NTR/DR6 phases of axon degeneration', 'https://pubmed.ncbi.nlm.nih.gov/31628183/'],
      ['Ercin et al. (2026) — non-canonical death in neurodegeneration', 'https://pubmed.ncbi.nlm.nih.gov/41699331/']
    ]
  },
  {
    id: 24,
    title: 'Motor Cortex: Neurophysiology and Plasticity',
    date: '29 September 2026',
    lecturer: 'Tang',
    scope: 'Released Lecture 24 slide PDF condensed into an exam-safe mechanism brief covering descending pathways, layer 5 output classes, cortical control of reaching, and spine and myelin plasticity in motor learning. Built from all 26 slides without the recording; nearly all causal evidence is from mice, and several slides are figure-only.',
    outcomes: [
      'Map the corticobulbar, corticospinal, rubrospinal, tectospinal, reticulospinal and vestibulospinal tracts to their functions, and explain why about 85% CST crossing gives mainly, but not strictly, contralateral control.',
      'Distinguish layer 5 output classes: bursting versus regular-firing cells, callosal/IT versus pyramidal-tract projections, and thalamus-projecting PT-upper (preparation) versus medulla-projecting PT-lower (initiation and termination) neurons.',
      'Explain how muscimol and VGAT-optogenetic inactivation in head-fixed reaching mice show that motor cortex is needed both to initiate and to sustain a learned reach within basal ganglia and cerebellar loops.',
      'Describe how motor learning remodels contralateral motor-cortex spines through rapid formation, selective stabilisation, elimination of pre-existing spines and clustering, and identify which experiment makes the spine–skill link causal.',
      'Explain the evidence that new oligodendrocytes support motor-skill acquisition, and how interhemispheric inhibition and post-stroke excitability imbalance bear on motor-cortex plasticity.'
    ],
    chains: [
      {
        name: 'Cortical command to the contralateral limb',
        steps: [
          'Layer 5 pyramidal-tract neuron fires',
          'axon descends through internal capsule and brainstem',
          'about 85% of fibres cross at the pyramidal decussation',
          'spinal interneurons and motor neurons on the opposite side are driven',
          'skilled movement of the contralateral limb'
        ]
      },
      {
        name: 'Prepare, then move (mouse PT subtypes)',
        steps: [
          'Cue and plan shaped by basal ganglia–thalamic loops',
          'PT-upper neurons signal thalamus during preparation',
          'thalamocortical loop holds the plan without movement',
          'PT-lower neurons drive medullary motor nuclei',
          'movement is initiated and then terminated'
        ]
      },
      {
        name: 'Learning written into spines',
        steps: [
          'Skilled-reach training',
          'new spines form on contralateral output neurons within about an hour, often in clusters',
          'continued practice selectively stabilises a subset of new spines',
          'pre-existing spines are eliminated, returning net density toward baseline',
          'a durable task-specific synaptic ensemble supports the skill'
        ]
      },
      {
        name: 'Learning written into white matter',
        steps: [
          'Complex motor-skill practice',
          'oligodendrocyte precursors shift toward differentiation while proliferation and death stay unchanged',
          'new oligodendrocytes add or remodel myelin',
          'conduction timing in task circuits is proposed to be adjusted',
          'faster acquisition, whereas blocking new oligodendrocytes slows learning'
        ]
      }
    ],
    distinctions: [
      [
        'Corticospinal tract',
        'Cortex to spinal motor circuits for trunk and limbs',
        'About 85% crosses, so cortical lesions mainly affect the opposite body; the uncrossed minority means control is not strictly unilateral'
      ],
      ['Corticobulbar tract', 'Cortex to cranial-nerve motor nuclei for face, head and neck', 'Upper motor neuron route for cranial muscles, separate from the spinal route'],
      [
        'Rubrospinal tract',
        'Red nucleus to mainly cervical cord; voluntary limb movement',
        'Smaller than the CST; in some primates it can substitute for the CST, making it a candidate recovery route'
      ],
      [
        'Reticulospinal and vestibulospinal tracts',
        'Posture, spinal stepping programmes, balance and antigravity tone',
        'Brainstem routes for postural and stereotyped control rather than fine skilled movement'
      ],
      [
        'Bursting versus regular-firing layer 5 cells',
        'Bursting may amplify and synchronise output; regular firing may serve cortical feedback',
        'Proposed roles inferred from firing pattern and morphology, not demonstrated causal divisions'
      ],
      [
        'PT-upper versus PT-lower',
        'Thalamus-projecting and preparation-active versus medulla-projecting and initiation/termination-active',
        'Projection target predicts activity timing; both are layer 5 pyramidal-tract neurons, shown in mice'
      ],
      [
        'Interhemispheric inhibition',
        'Callosal motor-to-motor projections that suppress spurious movement of the resting limb',
        'After stroke the affected hemisphere is depressed and the unaffected one hyperexcitable; excitability shapes plasticity'
      ],
      [
        'VGAT-ChR2 photostimulation',
        'Drives GABAergic interneurons to silence local cortex',
        'Here stimulation means inactivation; the result shows necessity, not what cortex computes'
      ],
      [
        'Spine formation, stabilisation and elimination',
        'Learning adds spines quickly, practice stabilises them, pre-existing spines are pruned',
        'Net density can return to baseline while the composition of synapses has changed'
      ],
      [
        'AS-PaRac1 optical erasure',
        'Tags recently potentiated spines and shrinks them with light',
        'Task-specific loss of the linked skill is a causal test that goes beyond imaging correlation'
      ]
    ],
    experiments: [
      {
        name: 'Spine imaging during reach learning (Xu et al.)',
        design: 'Repeatedly image the same GFP-labelled dendrites through a cranial window in mouse motor cortex before and during skilled forelimb-reach training, with ipsilateral, sensory, off-target and fail-to-learn controls.',
        result: 'Spine formation rises within an hour of training; new spines are selectively stabilised while pre-existing spines are eliminated, and the change appears only in contralateral forelimb motor cortex of mice that learn.',
        inference: 'Learning rapidly rewires output-neuron synapses in a region- and learning-specific way; the controls tighten the link, but longitudinal imaging remains correlational.'
      },
      {
        name: 'Optical erasure of potentiated spines (Hayashi-Takagi et al.)',
        design: 'Tag recently potentiated motor-cortex spines with the light-activated AS-PaRac1 probe after motor learning, shrink them with light, and compare a second task and sham-illuminated controls.',
        result: 'Tagged spines shrink while untagged spines do not; the linked skill degrades, whereas a skill learned with other spines in the same region and sham controls are preserved.',
        inference: 'A task-specific ensemble of potentiated spines is required to express a newly acquired skill, which moves the spine–memory link from correlation to causation in mice.'
      },
      {
        name: 'Blocking new oligodendrocytes (Xiao et al.)',
        design: 'Delete Myrf from adult oligodendrocyte precursors to block new oligodendrocyte production, then train mice on complex-wheel running and compare them with controls.',
        result: 'Knockout mice run more slowly from within the first few hours and across eight nights, although they still improve.',
        inference: 'New oligodendrocyte production is required for normal motor-skill acquisition, even early on; the deletion is brain-wide, so it does not localise the effect to motor cortex.'
      }
    ],
    traps: [
      'About 85% of CST fibres cross, so “each hemisphere controls only the opposite side” overclaims.',
      'Optogenetically driving VGAT interneurons silences motor cortex; do not read it as exciting motor output.',
      'Learning does not leave a lasting rise in spine density: new spines are offset by elimination of old ones while synapse identity changes.',
      'Imaging new spines after training is correlational; the causal step is perturbation such as optical erasure of tagged spines.',
      'PT-upper (thalamus-projecting) neurons carry preparatory activity; PT-lower (medulla-projecting) neurons are active at initiation and termination, not the reverse.',
      'Spine, PT-subtype and myelin findings are mouse data, whereas the post-stroke IHI pattern is a human excitability observation, not a mechanism.'
    ],
    recall: [
      [
        'Roughly what fraction of corticospinal axons cross, and what follows for a unilateral cortical lesion?',
        'About 85% cross, so the lesion mainly affects the opposite body; the uncrossed minority means control is not strictly contralateral.'
      ],
      [
        'Which PT subtype carries preparatory activity, and where does it project?',
        'PT-upper neurons carry the preparatory activity; they project to thalamus and avoid medullary motor centres. PT-lower neurons project to the medulla and peak at initiation and termination.'
      ],
      [
        'What does VGAT-ChR2 photostimulation of motor cortex do to a mouse reach?',
        'It drives inhibitory interneurons and silences cortex, so reaches fail to start and ongoing reaches are disrupted.'
      ],
      [
        'Why can spine density return to baseline after learning even though learning left a structural trace?',
        'New spines formed during training are stabilised while pre-existing spines are eliminated, so the count normalises but the set of synapses has changed.'
      ],
      [
        'What made the Hayashi-Takagi experiment causal rather than correlational?',
        'Light shrank tagged potentiated spines and only the linked skill was lost, while a second task and sham controls were preserved.'
      ],
      [
        'What is the evidence that new oligodendrocytes support motor learning?',
        'Blocking their production by Myrf deletion in precursors slows complex-wheel learning within hours, and learning increases precursor differentiation without changing proliferation or death.'
      ]
    ],
    download: '../resources/lectures/L24_Motor_Cortex_Neurophysiology_Plasticity.md',
    references: [
      ['Xu et al. (2009) — reach training rapidly forms and selectively stabilises spines in contralateral motor cortex', 'https://pubmed.ncbi.nlm.nih.gov/19946267/'],
      ['Hayashi-Takagi et al. (2015) — optical shrinkage of task-specific potentiated spines erases a newly learned motor skill', 'https://pubmed.ncbi.nlm.nih.gov/26352471/'],
      ['Economo et al. (2018) — thalamus- and medulla-projecting PT neurons carry preparatory and movement signals', 'https://pubmed.ncbi.nlm.nih.gov/30382200/'],
      ['Galiñanes et al. (2018) — motor-cortex inactivation halts reach initiation and diverts ongoing water reaches in mice', 'https://pubmed.ncbi.nlm.nih.gov/29514103/'],
      ['Xiao et al. (2016) — new oligodendrocytes are required in the earliest stages of motor-skill learning', 'https://pubmed.ncbi.nlm.nih.gov/27455109/']
    ]
  },
  {
    id: 25,
    title: 'Cerebellar Networks: Neurophysiology and Plasticity',
    date: '30 September 2026',
    lecturer: 'Tang',
    scope: 'Released Lecture 25 slide PDF condensed into an exam-safe mechanism brief on the cerebello-thalamo-cortical loop, cortical cell types, climbing- versus parallel-fibre signalling, eyeblink conditioning and parallel fibre–Purkinje plasticity. It is built from the slides only, with no recording. The four figure-only slides were read from their figures, and the cellular evidence comes from rabbit, rat, cat and mouse preparations, not from humans.',
    outcomes: [
      'Explain how the cerebellum contributes to motor control through the cerebello-thalamo-cortical loop, and link each classic cerebellar sign to the movement parameter it disrupts (distance, timing, force).',
      'Describe the three-layer cerebellar cortex, its cell types and their transmitter signs, and trace how mossy-fibre and climbing-fibre input reach the Purkinje cell, the sole cortical output.',
      'Contrast simple and complex spikes by origin, rate, waveform and proposed role (sensory context or motor plan versus teaching or error signal).',
      'Map the tone (CS) and air-puff (US) pathways of eyeblink conditioning onto parallel and climbing fibres, and predict the effect of silencing each node.',
      'State the parallel fibre–Purkinje plasticity rules (parallel fibres alone give LTP; paired climbing- and parallel-fibre input gives LTD), explain why the climbing fibre is a powerful gate, and explain why interneuron signalling makes the rule conditional.'
    ],
    chains: [
      {
        name: 'Cerebello-thalamo-cortical loop',
        steps: [
          'Motor and sensory cortex',
          'pontine nuclei relay (afferent limb)',
          'mossy fibres enter the cerebellar cortex',
          'Purkinje cells inhibit the dentate nucleus',
          'dentate output to motor thalamus (efferent limb)',
          'motor cortex, which closes the loop'
        ]
      },
      {
        name: 'Mossy-fibre context route',
        steps: [
          'Mossy-fibre terminal in a Golgi-gated glomerulus',
          'glutamatergic granule cell excited',
          'granule-cell axon ascends and bifurcates into a parallel fibre',
          'many weak synapses on Purkinje dendrites and molecular layer interneurons',
          'simple-spike rate modulated around an intrinsic 50–100 Hz baseline',
          'GABAergic output to the cerebellar and vestibular nuclei'
        ]
      },
      {
        name: 'Climbing-fibre teaching route',
        steps: [
          'Error or unconditioned stimulus reaches the inferior olive',
          'olivary spike leaves the axon as a burst of 1–6 spikes',
          'a single climbing fibre strongly excites its Purkinje cell',
          'complex spike, plus glutamate spillover that recruits nearby interneurons',
          'coincident parallel-fibre synapses undergo LTD (interneuron signalling can switch this to LTP)'
        ]
      },
      {
        name: 'Conditioned eyeblink',
        steps: [
          'Tone CS → pontine nuclei → mossy fibres → parallel fibres',
          'Air-puff US → trigeminal nucleus → inferior olive → climbing fibres',
          'repeated pairing depresses CS-carrying parallel fibre–Purkinje synapses',
          'less Purkinje inhibition of the anterior interpositus at CS time (standard model)',
          'interpositus → red nucleus → facial nucleus → timed conditioned blink'
        ]
      }
    ],
    distinctions: [
      [
        'Mossy fibres',
        'Excitatory afferents from pontine, brainstem and spinal nuclei onto granule cells in glomeruli, with collaterals to the cerebellar nuclei',
        'They reach Purkinje cells only indirectly, through granule cells and parallel fibres, and carry sensory and motor-plan context'
      ],
      [
        'Climbing fibres',
        'Inferior olive axons; one per Purkinje cell, each reaching about 1–10 Purkinje cells',
        'One of the strongest synapses in the brain: triggers the complex spike and carries the teaching or error signal'
      ],
      [
        'Granule cells',
        'Glutamatergic; one of only two excitatory neuron types in the cerebellar cortex',
        'Billions of small cells whose bifurcating axons become parallel fibres that drive simple spikes'
      ],
      [
        'Purkinje cells',
        'GABAergic; fire spontaneously at 50–100 Hz; the sole output of the cerebellar cortex',
        'Firing is intrinsic, and inputs modulate it; the output inhibits the cerebellar and vestibular nuclei with heavy convergence (about 26:1 in cat)'
      ],
      [
        'Basket vs stellate cells',
        'Inhibitory molecular layer interneurons: basket cells target the Purkinje soma and axon initial segment, stellate cells target the dendrites',
        'Where the inhibition lands decides whether it vetoes output or shapes dendritic integration'
      ],
      [
        'Ito cells',
        'Interneuron subclass inhibited by Purkinje-cell feedback; it inhibits basket cells, and the connection runs one way only',
        'Newly defined in 2026. Purkinje → Ito → basket → Purkinje has three inhibitory links (net negative feedback onto the same Purkinje cell), but the slide\'s diagram also shows Ito cells inhibiting a neighbouring Purkinje cell (net disinhibition there), so the overall effect cannot be read off the wiring'
      ],
      [
        'Simple vs complex spike',
        'Simple: ordinary action potential at a high tonic rate, driven by parallel fibres on an intrinsic baseline. Complex: climbing-fibre-triggered, at most about 1 Hz, multi-peaked',
        'What each contributes to motor control is still debated; complex-spike shape reflects the variable olivary burst'
      ],
      [
        'Climbing-fibre glutamate spillover',
        'Activates AMPA and NMDA receptors on molecular layer interneurons without conventional synapses',
        'Volume transmission produces feedforward inhibition and disinhibition of neighbouring Purkinje cells'
      ],
      [
        'Parallel fibre–Purkinje plasticity',
        'Parallel fibres alone give LTP; paired parallel- and climbing-fibre input gives LTD',
        'The climbing fibre gates the sign, but interneuron signalling can switch the paired outcome to LTP'
      ]
    ],
    experiments: [
      {
        name: 'Conjunctive stimulation (Ito and Kano, rabbit)',
        design: 'Stimulate parallel fibres alone, climbing fibres alone, or both together in rabbit cerebellar cortex, and track the parallel-fibre-evoked Purkinje response over time.',
        result: 'Only conjunctive parallel- and climbing-fibre stimulation produced a long-lasting depression of parallel-fibre transmission.',
        inference: 'Climbing-fibre activity that coincides with parallel-fibre input instructs LTD at those synapses, which supports the idea of the climbing fibre as a teaching signal.'
      },
      {
        name: 'Purkinje pacemaking (Häusser and Clark, rat slices)',
        design: 'Record Purkinje-cell firing in control conditions, after blocking synaptic input, and then in tetrodotoxin.',
        result: 'Firing continued without synaptic input but stopped in tetrodotoxin.',
        inference: 'Tonic Purkinje firing is intrinsic and depends on Na⁺ spikes. Synaptic input modulates a baseline rate rather than creating output, so information is coded as changes around that baseline.'
      },
      {
        name: 'Bidirectional Purkinje manipulation and thirst (Mishra et al., mouse)',
        design: 'Express an excitatory (hM3Dq) or inhibitory (hM4Di) DREADD only in Purkinje cells (Pcp2-Cre), give CNO or saline, and measure Purkinje firing, 24-h water intake, drinking bouts and food intake.',
        result: 'Excitation depolarised Purkinje cells, raised their firing and increased drinking with food intake unchanged; inhibition reduced water intake with food intake unchanged.',
        inference: 'Purkinje activity selectively and bidirectionally modulates drinking in mice, a non-motor function. This shows modulation, not a thirst-generating centre, and it does not establish human relevance.'
      }
    ],
    traps: [
      'Purkinje cells are GABAergic. Cortical output inhibits the cerebellar and vestibular nuclei, and the excitatory onward projection comes from nuclear neurons, not from the cortex.',
      'Paired parallel- and climbing-fibre input gives LTD, not LTP, and parallel fibres alone give LTP. Interneuron signalling can switch the paired outcome, so state the rule as conditional.',
      'Do not reverse the convergence. Each Purkinje cell receives one climbing fibre (a fibre reaches about 1–10 Purkinje cells), and many Purkinje cells converge on each nuclear neuron.',
      'A climbing-fibre rate of at most about 1 Hz does not make it a weak input. The complex spike is not uniform either: burst size (1–6 spikes) varies and shapes it.',
      'In eyeblink conditioning, silencing the facial nucleus blocks blink expression but does not identify the teaching route. The US teaching signal runs from the olive through climbing fibres.',
      'The mouse optogenetic and chemogenetic studies show that the cerebellum can modulate dopamine and drinking. They do not make it a thirst centre or explain human disorders.'
    ],
    recall: [
      [
        'Why is the Purkinje cell the key node of the cerebellar cortex?',
        'It is the sole cortical output. It is GABAergic and fires tonically at 50–100 Hz, and it integrates parallel-fibre context, climbing-fibre instruction and interneuron inhibition before inhibiting the cerebellar and vestibular nuclei.'
      ],
      [
        'Trace the cerebello-thalamo-cortical loop.',
        'Motor and sensory cortex → pontine nuclei → mossy fibres to the cerebellar cortex → Purkinje cells → dentate nucleus → motor thalamus → motor cortex. Basal ganglia also converge on the motor thalamus.'
      ],
      [
        'How do climbing-fibre and parallel-fibre inputs differ?',
        'Climbing fibres: one per Purkinje cell, bursts of 1–6 spikes at most about 1 Hz, a very strong synapse, the complex spike and the teaching signal. Parallel fibres: granule-cell axons, many weak inputs, simple spikes and the context or motor-plan signal.'
      ],
      [
        'Which pathways carry the CS and the US in eyeblink conditioning?',
        'Tone CS: cochlear nucleus → pontine nuclei → mossy fibres → granule cells → parallel fibres. Air-puff US: trigeminal nucleus → inferior olive → climbing fibres. Output: Purkinje cell → anterior interpositus → red nucleus → facial nucleus.'
      ],
      [
        'State the parallel fibre–Purkinje plasticity rules.',
        'Parallel-fibre activity alone gives LTP; paired parallel- and climbing-fibre input gives LTD (Ito and Kano, rabbit). Interneuron signalling can convert the paired outcome to LTP, so the rule is conditional.'
      ],
      [
        'What are Ito cells?',
        'A subclass of molecular layer interneurons that, unlike basket and stellate cells, receives inhibitory feedback from Purkinje cells. They in turn inhibit basket cells, and the connection runs one way only.'
      ]
    ],
    download: '../resources/lectures/L25_Cerebellar_Networks_Neurophysiology_Plasticity.md',
    references: [
      [
        'Ito and Kano (1982) — conjunctive parallel- and climbing-fibre stimulation induces long-lasting depression at the parallel fibre–Purkinje synapse',
        'https://pubmed.ncbi.nlm.nih.gov/6298664/'
      ],
      [
        'Häusser and Clark (1997) — cerebellar inhibitory neurons, including Purkinje cells, fire spontaneously without synaptic input, and tonic inhibition shapes their output pattern',
        'https://pubmed.ncbi.nlm.nih.gov/9331356/'
      ],
      ['Mathy et al. (2009) — single olivary spikes become axonal bursts that shape the complex spike and parallel-fibre plasticity', 'https://pubmed.ncbi.nlm.nih.gov/19447094/'],
      ['Kim and Augustine (2026) — a molecular layer interneuron subclass defined by Purkinje-cell feedback inhibition', 'https://pubmed.ncbi.nlm.nih.gov/42536485/'],
      ['Mishra et al. (2024) — Purkinje-cell manipulation bidirectionally changes water intake in mice without changing food intake', 'https://pubmed.ncbi.nlm.nih.gov/38987435/']
    ]
  },
  {
    id: 26,
    title: 'Neuroendocrine Control of Energy Balance',
    date: '5 October 2026',
    lecturer: 'Smith',
    scope: 'Released Lecture 26 slide PDF condensed into an exam-safe mechanism brief centred on the opposing arcuate NPY/AgRP and POMC populations, their hormonal inputs and their convergence on PVN MC4R. Every mechanistic slide rests on rodent data, and several slides are figure-only, so figure details are not reconstructed. Lesion-era \'centres\' and the POMC free-radical route to adult-onset obesity are flagged as models, not settled human mechanisms.',
    outcomes: [
      'Name the peripheral energy signals (leptin, insulin, ghrelin and the gut peptides CCK, GLP-1, oxyntomodulin and PYY), and the five hypothalamic nuclei that integrate them.',
      'Explain how lesion studies produced the VMH-satiety / LH-feeding model, and why the VMH-then-LH double lesion implies that LH drive is needed to express VMH-lesion overeating.',
      'Contrast NPY/AgRP and POMC neurons by receptor complement (GHSR, leptin and insulin receptors), the energy state in which each is active, PVN receptor targets, and responses to leptin, insulin and ghrelin.',
      'Use the one-way AgRP-to-POMC GABA connection and AgRP antagonism of MC4R to predict the outcome of co-activation, ablation and receptor-blockade experiments.',
      'Place VMH and DMH BDNF, DMH NPY, LH orexin and MCH, non-AgRP/POMC leptin-receptor neurons and extra-hypothalamic regions into a distributed circuit beyond the arcuate nucleus.'
    ],
    chains: [
      {
        name: 'Fasting and ghrelin hunger drive',
        steps: [
          'Negative energy balance raises stomach ghrelin while leptin and insulin fall',
          'ghrelin binds GHSR on arcuate NPY/AgRP neurons (Fos-positive)',
          'AgRP neurons release GABA onto POMC neurons, which lack GHSR, silencing them',
          'in the PVN, NPY acts at Y1/Y5 while AgRP antagonises MC4R',
          'net orexigenic drive increases food intake'
        ]
      },
      {
        name: 'Leptin satiety drive',
        steps: [
          'Larger fat mass raises leptin secretion',
          'leptin-receptor signalling (pSTAT3) in ARC and VMH neurons',
          'POMC neurons are excited while NPY/AgRP neurons are inhibited (insulin also inhibits NPY/AgRP)',
          'α-MSH activates PVN MC4R without AgRP opposition, with VMH leptin/BDNF signalling supporting POMC activity',
          'food intake falls and body weight is defended'
        ]
      },
      {
        name: 'Proposed POMC free-radical route to adult-onset obesity',
        steps: [
          'POMC neurons are most active in positive energy balance',
          'they produce more free radicals than AgRP neurons',
          'oxidative burden may make them prone to degeneration with age',
          'preferential POMC loss weakens satiety drive and leaves AgRP tone relatively unopposed',
          'intake and body weight rise, giving adult-onset obesity (hypothesis)'
        ]
      },
      {
        name: 'From lesion centres to defined cell types',
        steps: [
          'Hypothalamic, not pituitary, injury causes obesity',
          'VMH lesions cause hyperphagic obesity; LH lesions cause starvation',
          'a later LH lesion reverses VMH-lesion obesity, so LH drive is needed for that overeating',
          'genetically defined ARC populations replace anatomical \'centres\'',
          'optogenetics tests sufficiency and cell ablation tests necessity'
        ]
      }
    ],
    distinctions: [
      [
        'Leptin',
        'Adipose hormone; leptin receptor on POMC, NPY/AgRP, VMH, DMH and LH neurons',
        'Signals energy sufficiency: excites POMC and inhibits NPY/AgRP. pSTAT3 shows receptor signalling, not the direction of firing'
      ],
      ['Ghrelin', 'Stomach hormone; GHSR on NPY/AgRP but not POMC neurons', 'Orexigenic: activates AgRP neurons directly and suppresses POMC only indirectly, through AgRP GABA'],
      [
        'Insulin',
        'Pancreatic hormone; insulin receptor on both NPY/AgRP and POMC neurons',
        'The slides state that it inhibits NPY/AgRP; they do not specify its direction at POMC'
      ],
      ['α-MSH', 'POMC-derived agonist at PVN MC4R', 'The main anorectic melanocortin; MC4R antagonism removes its effect on intake'],
      ['AgRP peptide', 'MC4R antagonist in the PVN', 'Orexigenic because it blocks the α-MSH brake, not because it activates MC4R'],
      ['NPY', 'Y1 and Y5 receptors in the PVN', 'Orexigenic. DMH NPY also rises in fasting, lactation and calorie restriction and may promote overeating'],
      [
        'AgRP-to-POMC GABA synapse',
        'One-way local inhibition within the ARC',
        'Explains why co-activating both populations still increases intake, much like AgRP activation alone'
      ],
      [
        'Fos',
        'Immediate-early gene product in the nuclei of activated cells',
        'Shows which cells became active after a stimulus; cannot prove a direct action or detect inhibition'
      ],
      [
        'Orexin vs MCH (LH)',
        'Orexin: arousal-dominant, acutely orexigenic, chronically anti-obesity; MCH: increases intake',
        'LH leptin-responsive neurons are a separate third population that influences POMC; MCH is not a melanocortin'
      ],
      ['BDNF (VMH and DMH)', 'Leptin-regulated neurotrophin signalling', 'VMH and DMH BDNF restrains hyperphagia and obesity downstream of leptin']
    ],
    experiments: [
      {
        name: 'Hypothalamic lesion mapping',
        design: 'Electrolytic lesions of the VMH or LH in rodents, followed by a second LH lesion in animals already obese from a VMH lesion.',
        result: 'VMH lesions caused obesity, LH lesions caused starvation, and the later LH lesion reversed VMH-lesion obesity and produced starvation.',
        inference: 'The dual-centre model, in which LH feeding drive is needed to express VMH-lesion overeating. Lesions destroy fibres of passage and mixed cell types, so \'centres\' are anatomical simplifications that cell-type methods later replaced.'
      },
      {
        name: 'Optogenetic sufficiency tests',
        design: 'Express channelrhodopsin-2 selectively in arcuate AgRP or POMC neurons, then photostimulate each population, or both together, in behaving mice.',
        result: 'AgRP stimulation rapidly evoked eating, POMC stimulation suppressed intake, and co-activation increased intake about as much as AgRP stimulation alone.',
        inference: 'Each population is sufficient to shift intake in opposite directions, and the AgRP side dominates through one-way GABAergic inhibition of POMC and MC4R antagonism. Artificial synchronous drive shows sufficiency, not the natural firing pattern.'
      },
      {
        name: 'Adult AgRP-neuron ablation',
        design: 'Genetically ablate AgRP-expressing neurons in adult mice (Gropp et al. 2005, cited on the slides) and compare with loss of POMC.',
        result: 'Loss of AgRP neurons collapsed feeding, leading to starvation and death; POMC loss led to obesity.',
        inference: 'AgRP neurons are necessary for feeding in adults, and POMC neurons are needed for restraint. Ablation removes every co-transmitter, including GABA, so it is not equivalent to deleting the NPY or AgRP peptide genes.'
      }
    ],
    traps: [
      '\'VMH = satiety centre, LH = feeding centre\' are lesion-era labels; electrolytic lesions hit fibres of passage and mixed cell types, so name cell populations and receptors instead.',
      'AgRP and POMC are not symmetric opponents: AgRP neurons inhibit POMC neurons by GABA but not vice versa, so co-activation increases intake.',
      'Ghrelin does not act directly on POMC neurons, which lack GHSR; their suppression is relayed through AgRP neurons.',
      'AgRP is an MC4R antagonist, not an agonist, and NPY acts through Y1/Y5, not MC4R.',
      'Fos and pSTAT3 are measurements of activation or receptor signalling, not proof of a direct mechanism; a pSTAT3-positive neuron may have been inhibited (leptin inhibits AgRP neurons).',
      'The POMC free-radical degeneration route to adult-onset obesity is a hedged, rodent-based hypothesis, not an established human mechanism.'
    ],
    recall: [
      [
        'What did the VMH-then-LH double-lesion experiment show?',
        'A later LH lesion reversed VMH-lesion obesity and caused starvation, so LH feeding drive is needed to express the overeating that VMH damage releases.'
      ],
      [
        'Which hormone receptors do NPY/AgRP and POMC neurons carry, and how does each hormone act?',
        'NPY/AgRP carry GHSR, leptin and insulin receptors: ghrelin activates them, and leptin and insulin inhibit them. POMC carry leptin and insulin receptors but no GHSR: leptin activates them, and ghrelin suppresses them only indirectly.'
      ],
      [
        'What happens at PVN receptors in the fed versus the fasted state?',
        'Fed: α-MSH from POMC neurons activates MC4R to suppress intake. Fasted: AgRP antagonises MC4R and NPY activates Y1/Y5, increasing intake.'
      ],
      [
        'Why does co-activating AgRP and POMC neurons still increase intake?',
        'AgRP neurons inhibit POMC neurons by GABA, but POMC neurons do not inhibit AgRP neurons, and AgRP also blocks MC4R. It is foot off the brake plus foot on the accelerator.'
      ],
      [
        'How might POMC free radicals lead to adult-onset obesity?',
        'POMC neurons produce more free radicals, and the oxidative burden may make them degenerate preferentially. That weakens satiety drive, so intake and body weight rise over time. The slides present this as a possibility.'
      ],
      [
        'What do orexin and MCH neurons in the LH do to intake?',
        'Orexin acutely increases intake but chronically protects against obesity, and its larger role is arousal. MCH increases intake. LH leptin-responsive neurons are a separate population that influences POMC.'
      ]
    ],
    download: '../resources/lectures/L26_Neuroendocrine_Control_of_Energy_Balance.md',
    references: [
      ['Gropp et al. (2005) — ablating AgRP neurons in adult mice acutely reduces feeding (cited on the slides)', 'https://pubmed.ncbi.nlm.nih.gov/16158063/'],
      [
        'Aponte et al. (2011) — photostimulating AgRP neurons evokes feeding; POMC stimulation reduces intake via melanocortin receptors',
        'https://pubmed.ncbi.nlm.nih.gov/21209617/'
      ],
      ['Cowley et al. (2001) — leptin excites POMC neurons directly and by reducing NPY/GABA inhibition', 'https://pubmed.ncbi.nlm.nih.gov/11373681/'],
      ['Atasoy et al. (2012) — inhibitory AgRP output to the PVH accounts for acute AgRP-evoked feeding', 'https://pubmed.ncbi.nlm.nih.gov/22801496/'],
      ['Dhillon et al. (2006) — leptin action on VMH SF1 neurons is required for normal body-weight homeostasis', 'https://pubmed.ncbi.nlm.nih.gov/16423694/']
    ]
  },
  {
    id: 27,
    title: 'Neuroendocrine Control of Fertility',
    date: '6 October 2026',
    lecturer: 'Smith',
    scope: 'Released Lecture 27 slide PDF condensed into an exam-safe mechanism brief on kisspeptin control of the reproductive axis. Several slides are figure-only (Kiss1 in situ panels, optogenetics, the KNDy diagram, metabolic plots), so where the slide text gives no direction of effect it was taken from the cited primary paper. Almost all of the evidence is from rodents and sheep.',
    outcomes: [
      'Place kisspeptin in the HPG axis: Kiss1 neurons signal through GPR54/Kiss1r on GnRH neurons, and gonadal steroids feed back onto Kiss1 neurons rather than mainly onto GnRH neurons.',
      'Explain how oestradiol regulates Kiss1 in opposite directions in the arcuate nucleus and AVPV, and why this maps onto negative-feedback pulses and the positive-feedback surge.',
      'Describe KNDy co-transmission and the tracer, explant and central-antagonist evidence that arcuate kisspeptin and NKB signalling drive pulsatile GnRH/LH secretion, including action at the median eminence.',
      'Weigh kisspeptin as a puberty gatekeeper against developmental compensation after early kisspeptin-neuron ablation.',
      'Interpret Kiss1r-knockout metabolic phenotypes (obesity, reduced energy expenditure, BAT Ucp1, Pomc) without mistaking hypogonadism for a direct metabolic action.'
    ],
    chains: [
      {
        name: 'Kisspeptin drive of the HPG axis',
        steps: [
          'Kiss1 precursor processed to kisspeptin-54 and shorter active fragments',
          'kisspeptin binds GPR54/Kiss1r, expressed by more than 90% of GnRH neurons',
          'GnRH neurons are excited and release GnRH into portal blood at the median eminence',
          'pituitary gonadotrophs secrete LH and FSH',
          'gonadal sex steroids feed back onto Kiss1 neurons'
        ]
      },
      {
        name: 'Negative feedback (pulse mode)',
        steps: [
          'Gonadal steroid falls, e.g. after ovariectomy',
          'less ERα-mediated suppression lets ARC Kiss1 expression rise',
          'KNDy network active (model: NKB excites, dynorphin terminates each bout)',
          'episodic kisspeptin release onto GnRH terminals in the median-eminence external zone',
          'GnRH and LH pulses, restrained again when steroid returns'
        ]
      },
      {
        name: 'Positive feedback (surge mode, females)',
        steps: [
          'Sustained high preovulatory oestradiol',
          'ERα in AVPV Kiss1 neurons increases Kiss1 expression',
          'AVPV kisspeptin strongly drives GnRH neurons (optogenetic evidence, mouse)',
          'GnRH surge then LH surge',
          'ovulation; kisspeptin antagonism attenuates the induced LH surge in ewes'
        ]
      },
      {
        name: 'Kiss1r loss and body weight',
        steps: [
          'Global Kiss1r knockout',
          'hypogonadism plus loss of any non-reproductive kisspeptin signalling',
          'reduced energy expenditure and activity, with altered BAT Ucp1',
          'positive energy balance despite not eating more',
          'female obesity that persists after ovariectomy'
        ]
      }
    ],
    distinctions: [
      [
        'Kisspeptin',
        'Kiss1 gene product: kisspeptin-54 (metastin) and the shorter -14, -13 and -10 fragments, all ligands for GPR54/Kiss1r',
        'A family of potent GnRH secretagogues that act upstream of GnRH, not as pituitary hormones'
      ],
      [
        'GPR54 / Kiss1r',
        'G-protein-coupled receptor co-expressed by more than 90% of GnRH neurons',
        'Co-expression shows GnRH neurons can respond directly; receptor expression alone does not prove the endogenous route'
      ],
      [
        'ARC Kiss1 (KNDy) neurons',
        'Co-express kisspeptin, NKB and dynorphin plus steroid receptors; project to the median-eminence external zone',
        'Suppressed by oestradiol; drive negative-feedback-regulated GnRH pulses'
      ],
      ['AVPV Kiss1 neurons', 'Oestrogen-receptor-positive; Kiss1 increased by oestradiol', 'Drive the positive-feedback GnRH/LH surge in female rodents'],
      [
        'Neurokinin B',
        'Acts via NK3R within the arcuate kisspeptin network',
        'Central NK3R blockade abolishes LH pulses in OVX ewes, but the oestrogen-induced surge survives it in sheep'
      ],
      ['Dynorphin', 'Inhibitory kappa-opioid signal in KNDy neurons', 'Proposed brake that ends each pulse; a model role illustrated on the slides, not directly tested there'],
      [
        'ERα on Kiss1 cells',
        'On virtually all ARC and AVPV Kiss1 neurons; required for oestradiol\'s effects on Kiss1',
        'Explains how steroid feedback reaches GnRH neurons, which largely lack ERα (context beyond the slides)'
      ],
      [
        'Median-eminence action',
        'ARC kisspeptin fibres meet GnRH terminals in the external zone; explants release GnRH',
        'Terminal-level action is possible; this does not rule out action at GnRH somata'
      ],
      ['Kiss1 mRNA by in situ hybridisation', 'Measures gene expression', 'Not a measure of peptide release; pair with antagonist, explant or optogenetic tests'],
      [
        'Early versus acute kisspeptin-cell ablation',
        'Developmental versus adult loss of the same cells',
        'Fertility survives early ablation through compensation but not acute adult ablation, so necessity depends on timing'
      ]
    ],
    experiments: [
      {
        name: 'Steroid regulation of Kiss1',
        design: 'Adult female mice left intact (dioestrus), ovariectomised, or ovariectomised with oestradiol replacement for 7 days; Kiss1 mRNA quantified by in situ hybridisation in the ARC and AVPV.',
        result: 'ARC Kiss1 rose after ovariectomy and was suppressed by oestradiol; AVPV Kiss1 fell after ovariectomy and was restored by oestradiol.',
        inference: 'One steroid regulates the two populations with opposite sign, consistent with ARC in negative and AVPV in positive feedback. Near-universal ERα co-expression suggests a direct action on Kiss1 cells.'
      },
      {
        name: 'Central antagonists and LH pulses in OVX ewes',
        design: 'A kisspeptin antagonist or the NK3R antagonist MRK-08 infused into the brain of ovariectomised ewes, with frequent blood sampling for LH before, during and after infusion.',
        result: 'Both antagonists suppressed LH pulses during infusion.',
        inference: 'Kisspeptin and NKB signalling are needed to generate pulses when steroid feedback is removed, supporting the KNDy pulse-generator model. LH is a downstream proxy for GnRH.'
      },
      {
        name: 'Early kisspeptin-cell ablation',
        design: 'Kiss1-IRES-Cre mice crossed with Cre-activated diphtheria toxin (R26-DTA) mice to remove kisspeptin cells from early development; puberty onset and fertility assessed, and compared with acute ablation in adults.',
        result: 'Females reached puberty and were fertile but had smaller ovaries; mice lacking GPR54-expressing neurons were also fertile; acute adult ablation impaired fertility.',
        inference: 'The developing circuit compensates for early loss, so a normal developmental-ablation phenotype does not show that kisspeptin is dispensable in the intact animal.'
      }
    ],
    traps: [
      'Oestradiol does not simply inhibit kisspeptin: it suppresses ARC Kiss1 but stimulates AVPV Kiss1, so the nucleus sets the sign.',
      'Do not draw steroid feedback straight onto GnRH neurons; the model relays it through ERα-positive Kiss1 neurons.',
      'Kiss1 mRNA levels and GPR54 co-expression are measurements of capacity, not proof of mechanism; antagonist, explant and optogenetic experiments test function.',
      'Normal puberty after early kisspeptin-cell ablation reflects compensation, not dispensability; acute adult ablation impairs fertility, and human KISS1R mutations cause hypogonadism.',
      'In the KNDy model NKB is the accelerator and dynorphin the brake; swapping them inverts every prediction. NK3R blockade removes pulses but spared the sheep surge.',
      'Kiss1r-knockout obesity is not just hypogonadism (it persists after ovariectomy), but a global knockout does not show that kisspeptin acts on fat directly.'
    ],
    recall: [
      [
        'Where are the two main hypothalamic Kiss1 populations, and what does oestradiol do to each?',
        'ARC: suppressed by oestradiol and raised after ovariectomy (negative feedback, pulses). AVPV: stimulated by oestradiol and lowered after ovariectomy (positive feedback, surge in females).'
      ],
      [
        'What does KNDy mean, and why does it matter?',
        'Arcuate kisspeptin neurons co-express kisspeptin, neurokinin B and dynorphin; this network is the proposed GnRH pulse generator.'
      ],
      [
        'What evidence says kisspeptin can act at GnRH terminals?',
        'Anterograde tracing shows ARC kisspeptin fibres in the median-eminence external zone, and kisspeptin raises GnRH release from isolated median-eminence explants that lack GnRH somata.'
      ],
      [
        'What happened to LH pulses in OVX ewes given central kisspeptin or NK3R antagonist?',
        'Both suppressed the pulses, implicating kisspeptin and NKB signalling in pulse generation.'
      ],
      [
        'Why does fertility survive early ablation of kisspeptin cells?',
        'The developing network compensates; acute ablation in adults impairs fertility, so necessity depends on when the loss occurs.'
      ],
      [
        'How do we know Kiss1r-knockout obesity is not just hypogonadism?',
        'Knockout females stay fatter than wild types after both are ovariectomised, and they show reduced energy expenditure despite not overeating.'
      ]
    ],
    download: '../resources/lectures/L27_Neuroendocrine_Control_of_Fertility.md',
    references: [
      ['Smith et al. (2005) — oestradiol suppresses arcuate but stimulates AVPV Kiss1 expression via ERα in female mice', 'https://pubmed.ncbi.nlm.nih.gov/15919741/'],
      [
        'Smith et al. (2011) — kisspeptin antagonist blunts the ovine LH surge; kisspeptin releases GnRH from the isolated median eminence',
        'https://pubmed.ncbi.nlm.nih.gov/21239443/'
      ],
      ['Li et al. (2015) — central NK3R antagonist abolishes LH pulses in ovariectomised ewes but spares oestrogen positive feedback', 'https://pubmed.ncbi.nlm.nih.gov/25677216/'],
      ['Mayer and Boehm (2011) — female puberty and fertility survive early ablation of kisspeptin neurons', 'https://pubmed.ncbi.nlm.nih.gov/21516099/'],
      [
        'Tolson et al. (2014) — Kiss1r knockout females develop obesity with reduced energy expenditure that persists after ovariectomy',
        'https://pubmed.ncbi.nlm.nih.gov/24937427/'
      ]
    ]
  },
  {
    id: 28,
    title: 'Ageing, Injury and Degeneration',
    date: '7 October 2026',
    lecturer: 'Hodgetts',
    scope: 'Released Lecture 28 slide PDF condensed into an exam-safe mechanism brief; built from the 50-slide 2026 deck without the recording, so spoken emphasis is not captured, figure-only slides are read cautiously, and the epidemiology and trial-count figures are slide claims rather than independently checked data.',
    outcomes: [
      'Separate normal brain ageing (region-selective neuron loss, dendritic and synaptic simplification, reduced blood flow, glial and growth-factor-receptor change) from disease-specific degeneration.',
      'Explain Alzheimer\'s, Parkinson\'s and Huntington\'s disease by pathology, neurochemistry and genetics, and match each symptomatic drug to the deficit it compensates for.',
      'Explain multiple sclerosis as immune-mediated demyelination that shifts from inflammation toward neurodegeneration, and predict which phase an immunotherapy can reach.',
      'Distinguish primary from secondary injury events and explain why PNS axons regenerate while CNS axons largely do not.',
      'Judge repair strategies (protection, gene therapy, cell replacement, pathway reconstruction and devices) by keeping animal efficacy, human safety and human efficacy separate.'
    ],
    chains: [
      {
        name: 'Parkinson\'s symptom threshold',
        steps: [
          'α-synuclein/Lewy pathology is thought to begin years before motor signs',
          'SNpc dopaminergic neurons and their striatal axons are lost',
          'caudate and putamen lose dopaminergic input',
          'symptoms appear only after ~50–70% of these neurons are gone',
          'tremor, rigidity, akinesia and postural instability'
        ]
      },
      {
        name: 'L-DOPA to dyskinesia',
        steps: [
          'Oral L-DOPA (dopamine precursor) restores striatal dopamine',
          'dopaminergic neurons keep dying during treatment',
          'intermittent doses give fluctuating dopamine availability',
          'motor fluctuations and dyskinesias in ~80% of patients within 5–8 years'
        ]
      },
      {
        name: 'MS pathomechanism',
        steps: [
          'BBB damage lets immune cells in',
          'T cells release cytokines and recruit immune cells; B cells make demyelinating antibodies',
          'demyelination impairs conduction, with symptoms set by lesion site',
          'early disease: inflammation and repair dominate (relapse and remission)',
          'later: inflammation wanes and neurodegeneration drives progressive disability'
        ]
      },
      {
        name: 'Traumatic CNS injury',
        steps: [
          'Primary mechanical disruption, necrosis and haemorrhage at impact',
          'secondary inflammation, excitotoxicity, oxidative stress and mitochondrial damage',
          'demyelination, cyst formation and transneuronal degeneration',
          'reactive astrocytes seal the lesion, then scar and matrix inhibit regrowth',
          'slow myelin-debris clearance plus inhibitory factors suppress CNS regeneration'
        ]
      }
    ],
    distinctions: [
      [
        'Normal-ageing neuron loss',
        'Region-selective retention after 60: ~50% occipital cortex, ~60% locus coeruleus, ~75% Purkinje cells, ~100% thalamus',
        'Ageing is not uniform cell death; dendritic/synaptic simplification, reduced blood flow and glial change carry much of the effect'
      ],
      [
        'FGF-2 vs its receptors in ageing',
        'Ligand stable; neuronal FGFR1 down, glial FGFR2 up (figure data)',
        'A stable ligand does not guarantee stable signalling; receptor change can alter trophic support'
      ],
      [
        'Amyloid plaques vs neurofibrillary tangles',
        'Aβ aggregates in senile plaques vs tangles; both with neuron and synapse loss',
        'Plaque load does not necessarily track dementia, and both lesions also occur in normal ageing'
      ],
      [
        'APP / presenilins vs apoE',
        'Early-onset (<65) mutations vs the third gene the slide names (context beyond the slides: APOE ε4 is the main late-onset risk allele)',
        'Deterministic mutations explain only a small, mostly early-onset share; late-onset disease is ~90% of AD, and APOE ε4 raises risk without determining it (context beyond the slides)'
      ],
      [
        'Cholinesterase inhibitors vs memantine',
        'Slow ACh breakdown vs NMDA-receptor antagonism of excess glutamate',
        'Both relieve symptoms or slow decline; neither removes the underlying pathology'
      ],
      ['Lewy bodies', 'α-synuclein-rich inclusions; PD hallmark', 'Thought to begin years before motor signs; >90% of PD is sporadic, with genetic, age and environmental risk'],
      [
        'GDNF / neurturin gene therapy',
        'Trophic support for dopaminergic neurons via AAV/LV vectors',
        'Animal efficacy is not human efficacy: AAV2-neurturin was safe but ineffective in 38 patients'
      ],
      [
        'Relapsing–remitting vs progressive MS',
        'Inflammation- and repair-dominant vs neurodegeneration-dominant',
        'Immunotherapies such as natalizumab act on the inflammatory phase more than on progressive disability'
      ],
      [
        'PNS vs CNS axon injury',
        'Macrophages and proliferating Schwann cells clear debris and support regrowth vs slow myelin clearance and astrocyte-associated inhibitory factors',
        'The regenerative environment, not only the neuron, limits CNS repair'
      ],
      [
        'Primary vs secondary injury',
        'Mechanical disruption, necrosis, haemorrhage vs inflammation, excitotoxicity, oxidative stress, mitochondrial damage, demyelination, scarring',
        'Secondary events are the realistic treatment window'
      ]
    ],
    experiments: [
      {
        name: 'Walking and grey-matter volume (slide: Erickson et al., 2011)',
        design: 'Older adults reported their weekly walking, and brain MRI was taken about 9 years later.',
        result: 'More walking predicted greater prefrontal, temporal and hippocampal grey matter, with the largest effect around 6–9 miles per week.',
        inference: 'Physical activity is associated with preserved grey matter in humans. The study is observational, so BDNF mediation remains a hypothesis; the supporting evidence on the slides is rodent running data showing exercise raises BDNF and neurogenesis together.'
      },
      {
        name: 'Dendritic spines and cognitive resilience (Boros et al., 2017)',
        design: 'From the paper (context beyond the slides, which give only the conclusion): dendritic spines on dorsolateral prefrontal pyramidal neurons were compared post mortem across 12 pathology-free controls, 8 cognitively normal people with AD pathology, and 21 people with AD dementia.',
        result: 'Spine density was preserved in the pathology-without-dementia group and reduced in AD dementia.',
        inference: 'Dendritic-spine plasticity is a candidate mechanism of cognitive resilience, so pathology burden alone does not decide clinical outcome. Cross-sectional human tissue cannot show that raising spine density would prevent dementia.'
      },
      {
        name: 'AAV2-neurturin translation in Parkinson\'s disease',
        design: 'A viral vector delivering the trophic factor neurturin was tested in rodent and primate PD models and then in 38 patients.',
        result: 'It was effective and safe in animals. In patients it was safe but showed no efficacy at 1 or 2 years, and the trial was discontinued.',
        inference: 'Animal efficacy does not guarantee human efficacy. One likely reason, beyond the slides, is that trophic rescue needs surviving target neurons, and those are scarce by the time PD is diagnosed.'
      }
    ],
    traps: [
      'Normal ageing is not uniform neuron loss: retention after 60 differs by region (the thalamus is largely spared), and synaptic simplification, blood flow and glial change carry much of the effect.',
      'Plaques and tangles also occur in normal ageing, and plaque load need not track dementia, so do not equate amyloid with Alzheimer\'s disease.',
      'The effect of exercise on BDNF and neurogenesis is experimental in rodents. In humans the walking–grey-matter link is correlational, and BDNF mediation is only possible.',
      'A Parkinson\'s diagnosis comes late in the disease, not early: Lewy pathology and 50–70% nigral loss come before motor signs, so protection started at diagnosis cannot restore what is already gone.',
      'Animal efficacy is not human efficacy: AAV2-neurturin worked in rodents and primates but not in patients, and the mouse stem-cell results in AD are animal evidence.',
      'Associations are not causes: near-universal EBV exposure among patients and the coffee–MS link are observational, and the slides flag the chlamydial hypothesis as criticised and question coffee versus caffeine. (Context beyond the slides: the causal case for EBV rests on prospective cohort data, not on its prevalence among patients.)'
    ],
    recall: [
      [
        'Why is normal ageing not the same as uniform neuron loss?',
        'Retention after 60 is region-specific (about half in occipital cortex, nearly all in thalamus), and much of the change is dendritic and synaptic simplification, reduced blood flow and glial change.'
      ],
      [
        'Which genes separate early-onset from late-onset Alzheimer\'s disease?',
        'Early-onset (<65) cases are linked to APP and presenilin mutations. The slide also names apoE, and late-onset disease accounts for about 90% of cases (context beyond the slides: the APOE ε4 allele is the main genetic risk factor for late-onset AD, raising risk rather than determining it).'
      ],
      [
        'Why do Parkinson\'s motor signs appear late?',
        'About 50–70% of SNpc dopaminergic neurons are lost before symptoms appear, so striatal dopamine deficits only show clinically after extensive deafferentation of caudate and putamen.'
      ],
      [
        'Why does chronic L-DOPA cause dyskinesias?',
        'Dopaminergic neurons keep dying while the drug is available only intermittently, so striatal dopamine fluctuates. About 80% of patients are affected within 5–8 years.'
      ],
      [
        'How do relapsing–remitting and progressive MS differ mechanistically?',
        'Inflammation and repair dominate relapsing–remitting disease. As the disease becomes progressive, inflammation wanes and neurodegeneration drives the accumulating disability.'
      ],
      [
        'Why does a PNS axon regenerate when a CNS axon does not?',
        'In the PNS, macrophages clear myelin debris quickly and proliferating Schwann cells support regrowth. In the CNS, debris clearance is slow and astrocyte-associated inhibitory factors block axon extension.'
      ]
    ],
    download: '../resources/lectures/L28_Ageing_Injury_and_Degeneration.md',
    references: [
      [
        'Erickson et al. (2010) — walking in older adults predicts greater grey-matter volume 9 years later (the study the slide describes, labelled 2011 there)',
        'https://pubmed.ncbi.nlm.nih.gov/20944075/'
      ],
      [
        'Erickson et al. (2011) — randomised aerobic exercise enlarges the hippocampus, and the volume gain is associated with serum BDNF',
        'https://pubmed.ncbi.nlm.nih.gov/21282661/'
      ],
      ['Boros et al. (2017) — preserved dendritic spines distinguish cognitively normal people with AD pathology from AD dementia', 'https://pubmed.ncbi.nlm.nih.gov/28921611/'],
      ['Wirdefeldt et al. (2011) — Parkinson\'s disease is mostly sporadic, with genetic, age and environmental risk factors', 'https://pubmed.ncbi.nlm.nih.gov/21626386/'],
      ['Sofroniew and Vinters (2010) — astrocyte functions, reactive astrogliosis and glial scar formation after CNS injury', 'https://pubmed.ncbi.nlm.nih.gov/20012068/']
    ]
  },
  {
    id: 29,
    title: 'Sensory Deficits and Prostheses',
    date: '12 October 2026',
    lecturer: 'Beros',
    scope: 'Released Lecture 29 slide PDF condensed into an exam-safe mechanism brief covering neuroprosthesis design features and labelled-line logic, cochlear implants, retinal implants, optogenetic vision restoration and brain-computer interfaces. It is built from the 33-slide 2026 deck alone, with no recording, so spoken emphasis is not captured and numbers read from figures are approximate.',
    outcomes: [
      'Describe the general features of a neuroprosthesis (stimulation/write-in, recording and decoding/read-out, closed-loop neurofeedback) and explain why a device can only replace a stage that sits upstream of an intact pathway.',
      'Use the labelled-line principle to explain why stimulating a sensory pathway produces a modality-specific percept, and why phantom pain and tinnitus are the maladaptive face of the same principle.',
      'Explain how a multichannel cochlear implant uses place (tonotopic) and temporal coding to restore hearing in sensorineural loss, and predict where its performance falls short.',
      'Compare cortical, epiretinal, subretinal and optogenetic approaches to restoring vision, including the cells each one needs to survive and the resolution limit of phosphene-based vision.',
      'Interpret BCI experiments in monkeys (ensemble decoding driving a robot arm) and in people with paralysis (ECoG decoding of speech and gesture driving an avatar), keeping decoding accuracy separate from causal evidence.'
    ],
    chains: [
      {
        name: 'Cochlear implant signal path',
        steps: [
          'Microphone and sound processor capture sound and split it into frequency channels',
          'Coded signal crosses the skin to a receiver implanted behind the ear',
          'Receiver drives intracochlear contacts that excite auditory-nerve fibres at specific places',
          'Basal contacts signal high frequencies and apical contacts low frequencies (place code)',
          'Intact cochlear nucleus, superior olive, inferior colliculus, MGB and auditory cortex process the input',
          'Coarse but usable percept: good in quiet, degraded in noise, learned with training'
        ]
      },
      {
        name: 'Retinal implant',
        steps: [
          'Photoreceptors degenerate while the inner retina, RGCs and optic nerve survive',
          'Camera or photodiodes capture the scene and a processor builds a stimulation pattern',
          'Epiretinal (Argus II, 60 electrodes) or subretinal (Alpha AMS, ~1,600 photodiodes) array depolarises surviving retinal neurons',
          'RGC spikes travel along the optic nerve to LGN and visual cortex',
          'Patient perceives phosphenes, with resolution capped by the number of electrodes'
        ]
      },
      {
        name: 'Optogenetic vision restoration',
        steps: [
          'Intravitreal AAV2.7m8 delivers ChrimsonR (with tdTomato reporter) to foveal RGCs',
          'Expression stabilises over roughly 2-6 months',
          'Goggles convert the scene to monochrome images projected as ~595 nm pulses',
          'Light opens the cation channel and depolarises transduced RGCs, bypassing lost photoreceptors',
          'RGC output reaches visual cortex and months of structured training build usable perception'
        ]
      },
      {
        name: 'Motor BCI read-out loop',
        steps: [
          'Implanted microwires or an ECoG grid record cortical activity during attempted movement or speech',
          'Linear or neural-network decoder is trained on paired activity and behaviour',
          'Decoder converts new activity into the intended output in real time',
          'Output drives an external effector such as a robot arm, computer or avatar',
          'User sees the result and the decoder is retrained over time to follow signal drift'
        ]
      }
    ],
    distinctions: [
      [
        'Labelled line',
        'Modality-specific relay from receptor to primary sensory cortex',
        'Activity anywhere along the line is perceived as that modality, which underlies both prosthetic percepts and phantom pain or tinnitus'
      ],
      [
        'Sensorineural hearing loss',
        'Transduction fails while the auditory nerve and central pathway survive',
        'The condition a cochlear implant targets; without a surviving nerve the implant has nothing to drive'
      ],
      [
        'Place code',
        'Frequency mapped along the basilar membrane: high at the base, low at the apex',
        'Why the implant needs a multichannel array: each contact signals a different frequency by its position'
      ],
      [
        'Temporal code',
        'Brainstem neurons phase-lock to low-frequency sound (up to ~1.5-3 kHz)',
        'Cannot carry high frequencies, so stimulating the right place is essential above that range'
      ],
      [
        'Epiretinal implant (Argus II)',
        '60 independently controlled electrodes tacked to the retinal surface and driven by a camera',
        'Needs surviving RGCs and optic nerve, and gives low-resolution phosphene vision'
      ],
      [
        'Subretinal implant (Alpha AMS)',
        'Chip with ~1,600 photodiodes placed within the retinal layers',
        'More sensing elements, but the result is still phosphene vision through the remaining retina; element count is not perceptual resolution'
      ],
      [
        'Cortical visual prosthesis',
        'Stimulates occipital cortex directly to evoke phosphenes',
        'Bypasses the eye and optic nerve; Foerster showed that visual cortex stays excitable after years of blindness'
      ],
      [
        'ChrimsonR optogenetics',
        'Light-gated cation channel (~590 nm) expressed in foveal RGCs via AAV2.7m8',
        'Turns surviving ganglion cells into light sensors; depends on goggles projecting ~595 nm pulses and months of training'
      ],
      [
        'Write-in vs read-out',
        'Sensory implants stimulate; BCIs record and decode',
        'Closed-loop systems do both, adjusting output from decoded activity in real time (neurofeedback)'
      ],
      [
        'Decoding accuracy',
        'How well recorded activity predicts behaviour once converted into commands',
        'Shows the activity carries information and can give practical control, not that the recorded neurons cause the behaviour'
      ]
    ],
    experiments: [
      {
        name: 'Ensemble decoding to a robot arm (Wessberg et al., 2000)',
        design: 'Two owl monkeys had microwire arrays (96 and 32 wires) implanted in premotor and primary motor cortex. They were trained for 12-24 months on a joystick task and a reach-to-food task while ensemble activity was recorded and fed to linear and artificial-neural-network decoders.',
        result: 'Each neuron was only variably correlated with movement, but the decoders predicted hand trajectory closely enough to drive a robot arm in real time. The networks were updated with new data over the recording period.',
        inference: 'Movement information is spread across neuronal populations and can be read out to control an external effector. This is correlational read-out in non-human primates, so it does not show that the recorded neurons cause the movement.'
      },
      {
        name: 'Optogenetic partial vision recovery (Sahel et al., 2021)',
        design: 'A blind patient (retinitis pigmentosa, according to the paper) received an intravitreal AAV2.7m8 vector expressing ChrimsonR-tdTomato in foveal ganglion cells. Once expression had stabilised, goggles turned the scene into monochrome images projected as ~595 nm pulses, followed by about 7 months of graded visual training (the training chart shows visits V1–V19); the slide separately summarises the course as 15 visits over 84 weeks.',
        result: 'The slides report that the treatment was safe and light perception was retained. Training progressed from eye-movement exercises to daily-life tasks with the goggles, such as finding furniture and doors.',
        inference: 'Making surviving ganglion cells sensitive to light can bypass lost photoreceptors. Because this is a single-patient case that depends on goggles plus training, it shows feasibility, not general efficacy.'
      },
      {
        name: 'Simultaneous speech and gesture decoding (Brosler et al., 2026)',
        design: 'Three people with paralysis had a high-density electrocorticography implant over sensorimotor cortex. They attempted speech, gesture or both on cue in copy and conversation tasks, and parallel decoders drove a personalised full-body avatar in real time.',
        result: 'Speech and gestures were decoded together as well as separately, with roughly 75-100% accuracy. Electrode maps showed substantial overlap between speech-responsive and gesture-responsive sites.',
        inference: 'A single cortical implant can support multimodal, multi-effector communication rather than one isolated behaviour. The evidence is human but the sample is small, and decoding accuracy measures read-out performance, not the mechanism of motor planning.'
      }
    ],
    traps: [
      'Cochlear and retinal implants restore useful function, not normal sensation. Implant hearing collapses in noise, implant vision is a pattern of phosphenes, and both need training.',
      'A retinal implant or RGC optogenetics cannot help once retinal ganglion cells or the optic nerve are lost, because a prosthesis only replaces a stage that sits upstream of an intact pathway.',
      'Electrode or photodiode count sets a theoretical ceiling on resolution. It is not the number of separate points a patient can actually see.',
      'Regulatory approval did not make visual prostheses a solved problem: approved devices were later discontinued and some recipients returned to blindness.',
      'Optogenetic therapy does not regenerate photoreceptors. It makes ganglion cells sensitive to light through a cation channel that depolarises them.',
      'Successful BCI decoding reads out activity that correlates with behaviour and does not prove causation. Monkey results also need human validation, and decoders must be retrained over time.'
    ],
    recall: [
      [
        'What three general features can a neuroprosthesis have?',
        'Stimulation to evoke a response; recording and decoding, which turn activity into commands through algorithms; and closed-loop operation that does both in real time (neurofeedback).'
      ],
      [
        'Why does a cochlear implant need multiple channels?',
        'Frequency is place-coded along the basilar membrane (high at the base, low at the apex), so separate contacts must drive fibre groups at different positions. Phase-locking covers only low frequencies.'
      ],
      [
        'What must survive for a retinal implant to work?',
        'Retinal ganglion cells, the optic nerve and the central visual pathway, because the device stimulates retinal cells whose output still has to reach cortex.'
      ],
      [
        'What did Foerster\'s 1931 stimulation show?',
        'Stimulating the occipital cortex of a patient blind for 8 years evoked phosphenes. Visual cortex stays responsive after long deprivation, which made cortical prostheses plausible.'
      ],
      [
        'How was ChrimsonR delivered and activated in the optogenetic vision case?',
        'An intravitreal AAV2.7m8 vector expressed ChrimsonR in foveal RGCs. Goggles turned the scene into monochrome images projected as ~595 nm pulses, which open the cation channel.'
      ],
      [
        'What did the 2026 ECoG study add beyond earlier BCIs?',
        'It decoded speech and gestures simultaneously from one sensorimotor ECoG implant in people with paralysis and used them to drive an avatar, instead of decoding single behaviours in isolation.'
      ]
    ],
    download: '../resources/lectures/L29_Sensory_Deficits_and_Prostheses.md',
    references: [
      ['Wessberg et al. (2000) — real-time decoding of cortical ensembles predicts hand trajectory and drives a robot arm in monkeys', 'https://pubmed.ncbi.nlm.nih.gov/11099043/'],
      [
        'Sahel et al. (2021) — partial recovery of visual function after ChrimsonR optogenetic therapy combined with stimulating goggles',
        'https://pubmed.ncbi.nlm.nih.gov/34031601/'
      ],
      ['Brosler et al. (2026) — simultaneous speech and gesture decoding from one ECoG implant in paralysis', 'https://pubmed.ncbi.nlm.nih.gov/42736415/'],
      ['Spahr et al. (2007) — cochlear-implant sound processors differ most in difficult, noisy listening conditions', 'https://pubmed.ncbi.nlm.nih.gov/17496675/'],
      ['Edwards et al. (2018) — Alpha AMS subretinal implant partially restores vision in end-stage retinitis pigmentosa', 'https://pubmed.ncbi.nlm.nih.gov/29110946/']
    ]
  },
  {
    id: 30,
    title: 'Spinal Cord Injury and Regeneration',
    date: '13 October 2026',
    lecturer: 'Hodgetts',
    scope: 'Released Lecture 30 slide PDF condensed into an exam-safe mechanism brief covering biphasic spinal cord injury, secondary-damage cascades, outcome measurement and repair strategies, with the UWA cell and gene therapy examples. The only available deck is labelled 2025, so the 13 October 2026 delivery may differ.',
    outcomes: [
      'Explain spinal cord injury as biphasic: a mechanical primary insult followed by a spreading secondary cascade of excitotoxicity, oxidative stress, inflammation, oligodendrocyte loss, cysts and scar, which is the phase therapies can target.',
      'Trace the timed immune response (microglia, neutrophils, macrophages, T cells) and argue why macrophage activity can damage or repair depending on phenotype and timing.',
      'Compare human (ASIA and related) and animal (BBB, gait, ladder, forelimb) outcome measures, and identify the species differences that limit translation.',
      'Match each pathological problem to a repair strategy (drugs, hypothermia or exosomes, growth factors, gene therapy, scaffolds, cell transplantation) and state each strategy\'s main limitation.',
      'Interpret the UWA hMPC and AAV-CNTF experiments and the iPSC long-distance-growth result, keeping tissue sparing, axon growth and functional recovery separate.'
    ],
    chains: [
      {
        name: 'Biphasic injury',
        steps: [
          'Contusion compresses the cord inside a closed canal; dura usually intact, cord not cut',
          'Haemorrhage leaves a necrotic epicentre',
          'Glutamate, ROS/NO and cytokines spread outward and along the cord (mm in rodents, cm in humans)',
          'Grey-matter loss, oligodendrocyte apoptosis and demyelination of surviving axons',
          'Chronic cysts in shrunken tissue walled by CSPG-rich glial scar'
        ]
      },
      {
        name: 'Excitotoxic and oxidative damage',
        steps: [
          'Excess extracellular glutamate after injury',
          'NMDA receptor Ca2+ entry -> calmodulin, kinases and calpain -> apoptosis',
          'AMPA receptor Na+ entry -> osmotic swelling -> necrosis',
          'Mitochondrial Ca2+ overload -> ROS beyond superoxide dismutase capacity',
          'Lipid peroxidation, plus NO + superoxide -> peroxynitrite -> further membrane damage'
        ]
      },
      {
        name: 'Timed inflammatory response',
        steps: [
          'Microglia activate within minutes to hours (peak ~24 h); TNF-α mRNA rises within 1 h',
          'Neutrophils infiltrate ~4 h and peak at 24–72 h',
          'Macrophages arrive by day 2, peak at days 5–7 and persist for weeks to months',
          'Early M1-like bystander damage (TNF-α, IL-1, IL-6, ROS, NO, proteases)',
          'Later M2-like debris clearance and protective cytokines support repair'
        ]
      },
      {
        name: 'Transient graft, lasting benefit',
        steps: [
          'hMPCs injected into a contused cord in nude rats',
          'Graft cells are undetectable by about one month',
          'Proposed early actions: immunosuppression, boosted endogenous repair, remyelination, matrix deposition',
          'Healthier lesion environment: more spared tissue, smaller cysts',
          'BBB scores end ~2–3 points above injury-only controls (both groups pass weight support at 9), consistent with environmental rather than replacement effects'
        ]
      }
    ],
    distinctions: [
      [
        'Complete vs incomplete SCI',
        'All ascending and descending tracts cut vs some tracts spared',
        'Complete transection is very rare in humans; spared fibres are the substrate for recovery and therapy'
      ],
      [
        'Primary vs secondary injury',
        'Mechanical contusion and haemorrhage vs delayed biological cascade',
        'Only the secondary phase is a realistic drug target; it spreads mm in rodents but cm in humans'
      ],
      [
        'NMDA vs AMPA excitotoxicity',
        'Ca2+ entry -> calmodulin/kinases/calpain vs Na+ entry -> osmotic swelling',
        'The NMDA route biases toward apoptosis and the AMPA route toward necrosis; blocking one leaves the other'
      ],
      [
        'Superoxide dismutase vs peroxynitrite',
        'ROS-neutralising enzyme vs toxic product of NO + superoxide',
        'Antioxidant defences saturate when ROS are in excess; NO from immune cells adds further damage'
      ],
      [
        'M1-like vs M2-like macrophages',
        'Cytokine, ROS and protease release vs debris clearance and protective cytokines',
        'One cell type, different states over time; blanket depletion removes repair as well as damage'
      ],
      [
        'Riluzole',
        'Na+ channel blocker that reduces glutamate release',
        'Neuroprotective in animals; the human RISCIS trial missed its primary endpoint (context beyond the slides)'
      ],
      [
        'Rho-ROCK inhibitors / anti-Nogo',
        'Block an inhibitory pathway that stops axon regeneration',
        'Aimed at regeneration rather than acute neuroprotection; Cethrin/VX-210 reached phase 2b/3 testing, which (context beyond the slides) was stopped early for futility'
      ],
      ['ASIA grades A–E', 'Human sensorimotor scale anchored on sacral S4–S5 sparing', 'Coarse: misses small changes and ignores pain, bowel, bladder and sexual function'],
      ['BBB score 0–21', 'Rat open-field hindlimb locomotor rating', 'Ranked and non-linear; 9 marks weight support, so equal point gains do not mean equal recovery'],
      [
        'AAV vs lentiviral vector',
        'Lasting local expression after one injection vs permanent genome insertion in dividing and non-dividing cells',
        'AAV spread and dose are hard to control; switchable on/off expression is the flagged next step'
      ]
    ],
    experiments: [
      {
        name: 'Human MPC grafts after contusion (UWA)',
        design: 'Human mesenchymal precursor cells from adult hip-bone (iliac-crest) marrow were purified, labelled and injected into immunodeficient nude rats after a moderate T10 contusion, either acutely (1 week) or chronically (2 months on the design slide, but about 1 month on the tissue-sparing and BBB slides). Outcomes were histology, cyst size and BBB scores, compared with injury-only and medium-injected controls.',
        result: 'No donor cells were detectable one month after grafting. Treated rats nonetheless had more spared tissue and smaller cysts (significant after acute grafts) and finished about 2–3 BBB points above controls (~15 vs ~12–13 after acute grafts; controls also passed weight support at 9), with consistent coordinated plantar stepping. The slides call acute and chronic outcomes similar, though the chronic-graft gain is smaller and significant only at the last two time points.',
        inference: 'The benefit outlasts the graft, so lasting cell replacement is unlikely. Early effects on the lesion environment (immunosuppression, endogenous repair, remyelination, matrix deposition) are the candidate mechanisms; none is proven, and the evidence is from rats only.'
      },
      {
        name: 'Cortical AAV-CNTF to the corticospinal tract (UWA)',
        design: 'AAV encoding CNTF with a fluorescent reporter was injected into motor cortex, so corticospinal neurons expressing CNTF receptor α make the factor, instead of CNTF being applied to the T10 lesion. BDA tracer was injected into the same cortex 2 weeks before tissue collection, and some rats also received rat MPCs.',
        result: 'By about 6 weeks, CNTF rats had better BBB scores, fewer ladder-walk missteps and near-normal Ratwalk stepping. Labelled CST axons reached about 4 mm beyond the lesion and cysts were smaller. CNTF plus viable MPCs increased tissue sparing.',
        inference: 'Transducing the parent neurons can enhance corticospinal repair, and the gene plus cell combination supports translation. Effects are shown in rats only, and the published paper gave the AAV before injury, whereas one slide says just after.'
      },
      {
        name: 'Human iPSC-derived neural stem cell grafts (Lu et al. 2014)',
        design: 'Neural stem cells derived from human induced pluripotent stem cells were grafted into injured spinal cord of immunodeficient rats and examined about 3 months later.',
        result: 'Surviving grafts extended axons over very long distances above and below the lesion and formed synaptic structures, yet function did not improve.',
        inference: 'Axon growth and synapse formation are not enough for recovery. Connections must be appropriately targeted and functional, so histological regeneration cannot stand in for behavioural recovery.'
      }
    ],
    traps: [
      'Do not model typical human SCI as a clean transection: most injuries are contusions inside an intact dura with spared outer white matter, and complete anatomical transection is very rare.',
      'Secondary damage is not just inflammation: excitotoxicity, oxidative and nitric-oxide-driven stress, oligodendrocyte apoptosis, demyelination, cysts and scar all expand the lesion over days to weeks.',
      'Macrophages and microglia are not simply harmful; suppressing them across the whole post-injury window can remove debris clearance and reparative signalling.',
      'Long-distance axon growth or graft survival is not functional recovery, and functional recovery can occur after donor cells have disappeared.',
      'BBB and ASIA are ranked scales with known blind spots; a statistically significant shift is not necessarily a linear or clinically meaningful gain.',
      'Success in acute rodent models does not transfer automatically to chronic human injury; lesion structure differs (mice form dense matrix rather than fluid-filled cysts), and riluzole and methylprednisolone are not proven human cures.'
    ],
    recall: [
      [
        'Why is the secondary phase the main therapeutic target?',
        'The mechanical primary insult is over before treatment can begin, whereas the secondary cascade of excitotoxicity, oxidative stress, inflammation and demyelination expands the lesion over days to weeks and can be modified.'
      ],
      [
        'How do NMDA and AMPA receptor overactivation kill cells differently?',
        'NMDA receptors admit Ca2+, which activates calmodulin, kinases and calpain toward apoptosis. AMPA receptors admit Na+, causing osmotic swelling and necrosis.'
      ],
      [
        'When do neutrophils and macrophages arrive and peak after SCI?',
        'Neutrophils infiltrate by about 4 h and peak at 24–72 h. Macrophages arrive by about day 2, peak at days 5–7 and persist for weeks to months.'
      ],
      [
        'Why is oligodendrocyte loss so damaging?',
        'Oligodendrocytes undergo apoptosis more readily than neurons, and their loss demyelinates axons that survived the primary injury, adding conduction failure to structural loss.'
      ],
      [
        'What does a BBB score of 9 represent?',
        'Weight support on the 21-point rat open-field scale. Higher scores reflect stepping and coordination, so crossing 9 is a qualitative change.'
      ],
      [
        'What is "controlled re-injury" meant to achieve?',
        'Scraping away or enzymatically digesting a chronic glial scar to recreate an acute-like environment, so that strategies proven in acute injury might work. It is a proposal, not an established therapy.'
      ]
    ],
    download: '../resources/lectures/L30_Spinal_Cord_Injury_and_Regeneration.md',
    references: [
      ['Basso et al. (1995) — the BBB open-field locomotor rating scale for rats', 'https://pubmed.ncbi.nlm.nih.gov/7783230/'],
      ['Lu et al. (2014) — long-distance axon growth from human iPSC-derived grafts after SCI', 'https://pubmed.ncbi.nlm.nih.gov/25123310/'],
      ['Hodgetts et al. (2018) — cortical AAV-CNTF plus MPC transplantation improves outcomes after rat SCI', 'https://pubmed.ncbi.nlm.nih.gov/30245710/'],
      ['Harvey et al. (2015) — which, where, how and when to deliver neurotrophic factors for spinal repair', 'https://pubmed.ncbi.nlm.nih.gov/25451132/'],
      ['Fehlings et al. (2023) — RISCIS randomised trial of riluzole in acute cervical SCI', 'https://pubmed.ncbi.nlm.nih.gov/37279301/']
    ]
  }
];

const questions = [
  { id: 'l1-origin', lecture: 1, block: 'Test 1', topic: 'Glia I', stem: 'Which developmental origin most clearly distinguishes microglia from CNS macroglia?', options: ['Neural crest', 'Adult bone marrow in the healthy brain', 'Early yolk-sac erythromyeloid progenitors', 'Radial glia'], answer: 2, explanation: 'Microglia colonise the embryonic CNS from early yolk-sac macrophage lineages and largely self-renew locally. Astrocytes and oligodendrocyte-lineage cells are neuroectodermal.', trap: 'Do not generalise the neural-crest origin of Schwann cells to CNS glia.' },
  { id: 'l1-myelin', lecture: 1, block: 'Test 1', topic: 'Glia I', stem: 'Which comparison between myelinating cells is correct?', options: ['One oligodendrocyte can form internodes on multiple CNS axons', 'One Schwann cell myelinates many CNS axons', 'Oligodendrocytes are neural-crest derived', 'Microglia form peripheral myelin'], answer: 0, explanation: 'A single oligodendrocyte can myelinate segments on several CNS axons. A myelinating Schwann cell normally forms one internode on one PNS axon.', trap: 'Separate CNS/PNS location from the number of internodes formed per cell.' },
  { id: 'l1-radial', lecture: 1, block: 'Test 1', topic: 'Glia I', stem: 'A developmental manipulation disrupts radial-glial processes spanning the ventricular to pial surfaces. What is the strongest predicted consequence?', options: ['Immediate conversion of microglia into oligodendrocytes', 'Loss of all peripheral myelin', 'Selective failure of adult bone-marrow haematopoiesis', 'Impaired migration and positioning of developing cortical cells'], answer: 3, explanation: 'Radial glia act as neural progenitors and provide elongated scaffolds and positional support for migrating cells during cortical development.', trap: 'Radial glia are not just mature structural support; their developmental progenitor and scaffold roles are central.' },
  { id: 'l1-bbb', lecture: 1, block: 'Test 1', topic: 'Glia I', stem: 'Which statement best describes the astrocyte contribution to the blood–brain barrier?', options: ['Astrocyte membranes form the endothelial tight-junction seal', 'Astrocytes regulate barrier development and maintenance while endothelial tight junctions form the principal physical seal', 'Astrocytes replace pericytes and endothelial cells', 'Only microglia determine paracellular permeability'], answer: 1, explanation: 'Astrocytic end-feet and pericytes help regulate and maintain the specialised barrier phenotype, but brain endothelial tight junctions form the principal paracellular seal.', trap: 'Physical proximity to vessels does not make the astrocyte end-foot the sealed endothelial wall.' },
  { id: 'l1-scar-tradeoff', lecture: 1, block: 'Test 1', topic: 'Glia I', stem: 'A therapy completely prevents formation of the reactive astrocyte border after spinal cord injury. Which outcome is most mechanistically plausible?', options: ['Axon regeneration must improve with no downside', 'A growth barrier may fall, but inflammatory spread and secondary tissue damage may worsen', 'Peripheral Schwann-cell myelin must disappear', 'The endothelial blood–brain barrier becomes irrelevant'], answer: 1, explanation: 'Reactive astrocyte borders can contain inflammation and protect surviving tissue while scar-associated signals can also restrict later axon growth. The net effect depends on timing and state.', trap: 'Do not force a context-dependent injury response into “good glia” versus “bad glia”.' },
  { id: 'l1-repair-schwann', lecture: 1, block: 'Test 1', topic: 'Glia I', stem: 'After peripheral nerve injury, what most directly helps Schwann cells support axon regeneration?', options: ['Permanent maintenance of the mature myelin programme', 'Conversion into CNS microglia', 'Formation of endothelial tight junctions', 'Repair-state reprogramming, debris clearance, trophic support and aligned regeneration tracks'], answer: 3, explanation: 'Injured-nerve Schwann cells activate a specialised repair programme, clear myelin, support neuronal survival and form bands of Büngner that guide regrowing axons.', trap: 'PNS repair is an active cellular programme, not merely the absence of CNS inhibitors.' },
  { id: 'l2-retrograde', lecture: 2, block: 'Test 1', topic: 'Growth and trophic factors', stem: 'Target-derived neurotrophin binds a Trk receptor at an axon terminal. What best supports a long-range survival response?', options: ['A signalling endosome can undergo retrograde axonal transport', 'The ligand must diffuse through the nucleus', 'The receptor is converted into a neurotransmitter', 'The soma passively detects extracellular calcium'], answer: 0, explanation: 'Ligand–Trk complexes can signal locally and from retrogradely transported endosomes, coupling target access to transcriptional survival programmes in the soma.', trap: '“Retrograde” here describes transport toward the soma, not retrograde synaptic transmission.' },
  { id: 'l2-competition', lecture: 2, block: 'Test 1', topic: 'Growth and trophic factors', stem: 'In the classic neurotrophic-factor hypothesis, why do excess developing neurons die?', options: ['Every target releases an unlimited survival signal', 'All immature neurons are intrinsically programmed to die simultaneously', 'Neurons compete for limiting target-derived support', 'Myelin directly selects the surviving soma'], answer: 2, explanation: 'Targets provide limiting trophic support. Neurons that establish effective access activate survival pathways; others undergo programmed cell death.', trap: 'Cell death is regulated and competitive, not random cellular “wastage”.' },
  { id: 'l2-receptors', lecture: 2, block: 'Test 1', topic: 'Growth and trophic factors', stem: 'Which preferred mature-neurotrophin receptor pairing is correct?', options: ['NGF–TrkA', 'BDNF–TrkC only', 'NT-3–TrkA only', 'NGF–NMDA receptor'], answer: 0, explanation: 'NGF preferentially activates TrkA; BDNF and NT-4 preferentially activate TrkB; NT-3 preferentially activates TrkC, with context-dependent receptor cross-activation.', trap: 'Learn preferred pairings without pretending ligand–receptor specificity is perfectly exclusive in every preparation.' },
  { id: 'l2-transport-block', lecture: 2, block: 'Test 1', topic: 'Growth and trophic factors', stem: 'NGF is supplied only to distal sympathetic axons. Dynein-dependent retrograde transport is then selectively disrupted. What is the strongest prediction?', options: ['The axon will convert NGF into an action potential', 'TrkA will become a guidance cue receptor at the nucleus', 'Somatic NGF-dependent transcription and survival support will fall', 'Every local axonal NGF effect will increase'], answer: 2, explanation: 'Distal NGF–TrkA signalling must be communicated to the soma. Disrupting retrograde transport should reduce somatic target-derived survival signalling, even though some local axonal signalling may persist.', trap: 'A transport perturbation separates distal signal capture from long-range nuclear response; it does not mean all local signalling stops.' },
  { id: 'l2-p75-context', lecture: 2, block: 'Test 1', topic: 'Growth and trophic factors', stem: 'Why is “p75NTR is simply the neurotrophin death receptor” an unsafe rule?', options: ['p75NTR has no ligands', 'Its effect depends on ligand form, co-receptors and cellular context', 'It is found only in muscle', 'It always activates TrkA kinase directly'], answer: 1, explanation: 'p75NTR can alter neurotrophin binding and participate in survival, pruning or apoptotic signalling. Proneurotrophins, sortilin-family co-receptors and cell state help determine the outcome.', trap: 'A receptor name does not fix one biological sign across every ligand and co-receptor state.' },
  { id: 'l2-function', lecture: 2, block: 'Test 1', topic: 'Growth and trophic factors', stem: 'A treatment prevents developmental neuronal apoptosis but the rescued axons never innervate the correct target. Which conclusion is justified?', options: ['The circuit is functionally repaired', 'Trophic support is irrelevant to development', 'The neurons must form a correct map automatically', 'Survival was rescued, but target recognition and functional integration were not demonstrated'], answer: 3, explanation: 'Survival is only one developmental checkpoint. Correct guidance, target recognition, synapse formation and circuit function require separate evidence.', trap: 'Do not use cell counts as a proxy for connectivity or behaviour.' },
  { id: 'l3-netrin', lecture: 3, block: 'Test 1', topic: 'Axon guidance', stem: 'A DRG neurite stops at an abrupt proteoglycan boundary but crosses a gradual gradient that reaches a higher final concentration. What is the best inference?', options: ['Only the highest absolute inhibitor concentration controls growth', 'Proteoglycans become neurotrophins when presented gradually', 'The neurite cannot detect extracellular-matrix cues', 'Spatial steepness and adaptation history matter as well as absolute concentration'], answer: 3, explanation: 'The same class of inhibitor produces different behaviour when presented as a sudden hurdle versus a gradual rise. Growth cones interpret spatial change and prior exposure as well as concentration.', trap: 'Do not reduce a gradient response to a single concentration threshold.' },
  { id: 'l3-ephrin', lecture: 3, block: 'Test 1', topic: 'Axon guidance', stem: 'Graded Eph receptor and ephrin expression is especially useful for:', options: ['Generating action potentials', 'Building continuous topographic maps', 'Making cerebrospinal fluid', 'Triggering vesicle fusion'], answer: 1, explanation: 'Complementary molecular gradients provide positional information that helps map neighbouring source neurons onto neighbouring target locations.', trap: 'A map can arise from graded relative signalling, not a unique label for every axon.' },
  { id: 'l3-cytoskeleton', lecture: 3, block: 'Test 1', topic: 'Axon guidance', stem: 'A guidance cue activates receptors asymmetrically across a growth cone. What most directly converts that asymmetry into turning?', options: ['Uniform DNA replication in the soma', 'Myelin compaction around the growth cone', 'Biased actin dynamics and microtubule capture', 'Synchronous apoptosis of target cells'], answer: 2, explanation: 'Local receptor signalling biases actin protrusion, adhesion and microtubule invasion or collapse. That spatially asymmetric cytoskeletal response redirects extension.', trap: 'The growth cone is a motile signalling structure; cue detection must be translated into local mechanics.' },
  { id: 'l3-choice-point', lecture: 3, block: 'Test 1', topic: 'Axon guidance', stem: 'Why must a commissural growth cone change receptor or adhesion state after reaching an intermediate target such as the floor plate?', options: ['To overcome the old attraction and become responsive to the next route segment', 'To remain permanently trapped by the approach cue', 'To eliminate every surface receptor at once', 'To begin myelinating before the axon exits'], answer: 0, explanation: 'An intermediate target is temporary. Trafficking, translation or expression changes—including the lecture\'s TAG1-to-L1 transition—allow the axon to leave and continue.', trap: 'The mechanism that gets an axon to a choice point must be reconfigured so it does not hold the axon there.' },
  { id: 'l3-relative-map', lecture: 3, block: 'Test 1', topic: 'Axon guidance', stem: 'Ephrin-A2 knockout produces some ectopic retinal termination zones, whereas ephrin-A2/A5 double knockout leaves few zones correctly placed. What is the best inference?', options: ['One ephrin uniquely labels every target cell', 'Eph/ephrin signalling is freely diffusible over long distances', 'Overlapping ephrin gradients cooperate to provide topographic positional information', 'The phenotype proves laminar and synaptic targeting are normal'], answer: 2, explanation: 'The stronger double-knockout phenotype supports partially overlapping ephrin positional signals acting with graded Eph receptor expression.', trap: 'A topographic termination-zone result does not establish correct layer, partner cell, synapse or function.' },
  { id: 'l3-refinement', lecture: 3, block: 'Test 1', topic: 'Axon guidance', stem: 'Which local-translation pairing best matches the released lecture?', options: ['Attractive cue -> beta-actin synthesis; repulsive cue -> RhoA/cofilin-associated actin breakdown', 'Attractive cue -> membrane lysis; repulsive cue -> DNA replication', 'Attractive cue -> myelin compaction; repulsive cue -> synaptic vesicle fusion', 'Both cues require every new protein to be translated in the soma first'], answer: 0, explanation: 'Attractive cues can bias local beta-actin production and polymerisation, whereas repulsive cues can promote local RhoA/cofilin-associated depolymerisation. This enables rapid distal turning.', trap: 'The growth cone can translate cue-specific mRNAs locally; it is not merely a passive extension of somatic protein supply.' },
  { id: 'l4-apoptosis', lecture: 4, block: 'Test 1', topic: 'Regressive events and cell death', stem: 'Loss of trophic support most directly favours which regulated death pathway?', options: ['Immediate osmotic lysis without signalling', 'Action-potential broadening only', 'Constitutive synaptic potentiation', 'Mitochondrial outer-membrane permeabilisation and caspase activation'], answer: 3, explanation: 'Trophic withdrawal can shift BCL-2-family signalling toward mitochondrial permeabilisation, cytochrome-c release and the intrinsic caspase cascade.', trap: 'Programmed developmental death is not equivalent to acute necrotic rupture.' },
  { id: 'l4-pruning', lecture: 4, block: 'Test 1', topic: 'Regressive events and cell death', stem: 'Which statement correctly separates axon pruning from neuronal apoptosis?', options: ['Pruning always kills the soma', 'Pruning can remove selected branches while preserving the neuron', 'Apoptosis only removes synapses', 'They are molecularly and anatomically identical'], answer: 1, explanation: 'Regressive development can be compartment-specific. Axons or synapses may be removed while the parent neuron survives.', trap: 'Do not infer whole-cell death from local structural elimination.' },
  { id: 'l4-target-size', lecture: 4, block: 'Test 1', topic: 'Regressive events and cell death', stem: 'Removing an embryonic limb target increases motor-neuron loss, whereas adding target tissue preserves extra motor neurons. What is the strongest inference?', options: ['Every motor neuron contains an identical fixed death timer', 'Target access supplies limiting survival support that helps match neuronal number to target territory', 'The target mechanically pulls motor-neuron somata into the spinal cord', 'Only afferent input can regulate motor-neuron survival'], answer: 1, explanation: 'Changing target territory shifts how many neurons survive the normal death period, supporting competition for limiting target-associated trophic support.', trap: 'Target size matters, but activity and afferent influences mean it is not the only survival variable.' },
  { id: 'l4-curare', lecture: 4, block: 'Test 1', topic: 'Regressive events and cell death', stem: 'Curare blocks embryonic neuromuscular transmission yet can reduce normal motor-neuron loss. Which interpretation best fits the lecture?', options: ['Motor-neuron survival is unrelated to targets', 'Curare directly replaces every neurotrophin receptor', 'Apoptosis requires skeletal-muscle contraction as its executioner', 'Activity and competitive target occupancy modify which connections are stabilised'], answer: 3, explanation: 'Paralysis changes neuromuscular competition and occupancy, showing that functional activity helps regulate developmental selection alongside target-derived support.', trap: 'The result challenges a target-size-only model; it does not show that activity or trophic signalling is irrelevant.' },
  { id: 'l4-directionality', lecture: 4, block: 'Test 1', topic: 'Regressive events and cell death', stem: 'Which pairing correctly distinguishes retrograde from anterograde developmental survival influence?', options: ['Target-derived terminal signal to soma = retrograde; afferent input to a neuronal population = anterograde', 'Afferent input to target = retrograde; target signal to soma = anterograde', 'Both terms mean neurotransmitter diffusion across one synapse', 'Both terms describe only movement of the entire axon'], answer: 0, explanation: 'Retrograde signalling carries information from the distal target/terminal toward the soma. Anterograde influence arrives from afferents and can change the viability or phenotype of the postsynaptic population.', trap: 'Transport direction and synaptic transmission direction are related spatial ideas but are not interchangeable labels.' },
  { id: 'l4-tunel', lecture: 4, block: 'Test 1', topic: 'Regressive events and cell death', stem: 'A dying neuron is TUNEL-positive. What additional result most strongly supports apoptosis rather than classical necrosis?', options: ['Cell and mitochondria are swollen and the membrane has ruptured', 'Large groups of cells lyse with marked inflammation', 'The cell shrinks, chromatin condenses and caspase-linked apoptotic bodies are phagocytosed', 'ATP failure produces uncontrolled osmotic swelling'], answer: 2, explanation: 'TUNEL detects DNA strand breaks but is not uniquely apoptotic. Shrinkage, condensed chromatin, apoptotic bodies, retained membrane integrity and caspase evidence make the interpretation stronger.', trap: 'Do not turn one histochemical label into a pathway diagnosis.' },
  { id: 'l4-bdnf-redundancy', lecture: 4, block: 'Test 1', topic: 'Regressive events and cell death', stem: 'Added BDNF rescues many retinal ganglion cells after target ablation, but baseline ganglion-cell number is normal in a BDNF knockout. What is the best conclusion?', options: ['BDNF can support challenged cells, while endogenous survival control is redundant or developmentally compensated', 'BDNF has no survival action', 'The rescue proves endogenous BDNF is the only necessary factor', 'The knockout proves target-derived signalling is irrelevant'], answer: 0, explanation: 'Rescue establishes biological capacity or sufficiency in the challenged context. A normal developmental knockout suggests other ligands or compensatory pathways can preserve baseline number.', trap: 'Sufficiency, necessity and developmental compensation are different causal claims.' },
  { id: 'l4-noncanonical', lecture: 4, block: 'Test 1', topic: 'Regressive events and cell death', stem: 'Which non-canonical death mechanism is paired with its defining molecular logic?', options: ['Necroptosis - Apaf-1 apoptosome and caspase-9 only', 'Pyroptosis - BCL-2-mediated mitochondrial protection', 'Ferroptosis - iron-dependent lipid peroxidation opposed by GPX4', 'Parthanatos - Eph/ephrin topographic repulsion'], answer: 2, explanation: 'Ferroptosis is driven by iron-dependent lipid peroxidation when antioxidant systems such as GPX4 fail. Necroptosis uses RIPK1/RIPK3-MLKL, pyroptosis uses gasdermin pores, and parthanatos involves PARP1/AIF.', trap: 'A dead neuron is not enough to name a pathway; use pathway-specific molecular evidence.' },
  { id: 'l5-notch', lecture: 5, block: 'Test 1', topic: 'Cell lineage', stem: 'High Notch signalling in a neural progenitor most commonly tends to:', options: ['Force immediate axon myelination', 'Maintain progenitor identity and suppress premature neuronal differentiation', 'Convert the cell into microglia', 'Open voltage-gated sodium channels'], answer: 1, explanation: 'Notch–Hes programmes often maintain progenitor state and inhibit proneural differentiation, allowing neighbouring cells with lower Notch activity to differentiate.', trap: 'Notch effects are context-dependent, but “high Notch equals immediate neuron” reverses the usual developmental logic.' },
  { id: 'l5-lineage', lecture: 5, block: 'Test 1', topic: 'Cell lineage', stem: 'A lineage-tracing experiment is designed primarily to determine:', options: ['The membrane potential of every descendant', 'Whether a ligand binds its receptor in vitro', 'The exact number of synaptic vesicles released', 'Which cell types descend from a labelled progenitor over time'], answer: 3, explanation: 'A heritable label marks a progenitor and its descendants, revealing fate relationships across development.', trap: 'Marker co-expression at one time point is not, by itself, proof of ancestry.' },
  { id: 'l5-reelin', lecture: 5, block: 'Test 1', topic: 'Cell lineage', stem: 'In the reeler mouse, cortical layers are assembled in a broadly inverted order. What does this most directly implicate?', options: ['Complete failure of neural progenitors to divide', 'Loss of every radial-glial fibre before migration begins', 'Absence of all voltage-gated sodium channels in cortex', 'Reelin signalling that positions migrating neurons relative to earlier-born cells'], answer: 3, explanation: 'Reelin, secreted largely by Cajal–Retzius cells in the marginal zone, acts through VLDLR/ApoER2 and intracellular DAB1 to control how migrating neurons detach and settle. Losing it disrupts the normal inside-out laminar order rather than abolishing neurogenesis.', trap: 'An inverted cortex is a positioning phenotype; it does not mean neurons were never born or never migrated.' },
  { id: 'l5-inside-out', lecture: 5, block: 'Test 1', topic: 'Cell lineage', stem: 'Birthdating shows that later-born cortical excitatory neurons settle superficial to earlier-born neurons. This inside-out pattern requires that later cells:', options: ['Are generated before the deep layers exist', 'Migrate past previously settled neurons to a more superficial final position', 'Displace earlier-born neurons back into the ventricular zone', 'Reach their layer without any radial-glial guidance'], answer: 1, explanation: 'Deep layers are generated first; later cohorts migrate along radial glia through the existing cortical plate and stop more superficially, giving a birthdate-to-layer relationship read from the inside out.', trap: 'Inside-out describes final laminar position by birthdate, not the direction in which cells physically travel.' },
  { id: 'l5-bmp-induction', lecture: 5, block: 'Test 1', topic: 'Cell lineage', stem: 'Noggin and chordin are secreted by the organiser. How do they promote neural fate in the overlying ectoderm?', options: ['They act as a positive neural instruction that ectoderm cannot produce alone', 'They convert Shh into a dorsalising signal', 'They antagonise BMP signalling, removing a block on neural fate', 'They directly acetylate histones at neural gene promoters'], answer: 2, explanation: 'Neural induction works by inhibition. BMP signalling holds ectoderm in a non-neural state; noggin and chordin antagonise BMP, and neural fate proceeds once that block is lifted.', trap: 'The neural default is revealed by removing a signal, not by adding a neural instruction.' },
  { id: 'l5-noggin-redundancy', lecture: 5, block: 'Test 1', topic: 'Cell lineage', stem: 'Noggin single knockouts show only mild head defects, but noggin/chordin double knockouts nearly abolish head development. What is the best conclusion?', options: ['The two antagonists are functionally redundant, so a single null underestimates pathway importance', 'Noggin is unimportant for head development', 'Chordin acts downstream of noggin in a linear pathway', 'BMP signalling is dispensable for head formation'], answer: 0, explanation: 'A mild single-null phenotype alongside a severe double-null phenotype is the signature of redundancy. Either antagonist can largely substitute for the other, so neither knockout alone reveals how critical BMP inhibition is.', trap: 'A mild single knockout is evidence about redundancy, not about a gene being unimportant.' },
  { id: 'l5-hox-memory', lecture: 5, block: 'Test 1', topic: 'Cell lineage', stem: 'Which statement best captures the role of Hox genes in the developing nervous system?', options: ['They establish the anterior-posterior axis before any other signal acts', 'They act as secreted morphogens forming concentration gradients', 'They store and maintain anterior-posterior positional identity that earlier genes established', 'They determine neuron versus glia fate at the competence switch'], answer: 2, explanation: 'Hox proteins are homeodomain transcription factors that specify the order of structures along an axis already established by earlier developmental genes. They function as positional memory, initiating and then maintaining the body plan.', trap: 'Hox genes maintain and read out positional identity; they are transcription factors, not secreted gradients.' },
  { id: 'l5-radial-glia-dual', lecture: 5, block: 'Test 1', topic: 'Cell lineage', stem: 'A mutation deforms radial glial fibres but leaves radial glial proliferation intact. What is the predicted cortical phenotype?', options: ['Faulty neuronal migration and disordered lamination, because the scaffold function has failed', 'Normal lamination, because progenitor division is unaffected', 'Complete absence of cortical neurons', 'Loss of GABAergic interneurons only, with normal excitatory layering'], answer: 0, explanation: 'Radial glia hold two jobs: they are progenitors and they are the migration scaffold. If fibres are deformed or adhesion molecules are missing, migrating neurons fall off the scaffold, so neurons are still generated but arrive in the wrong places.', trap: 'Separate the progenitor role from the scaffold role - one can fail while the other works.' },
  { id: 'l5-tangential-interneurons', lecture: 5, block: 'Test 1', topic: 'Cell lineage', stem: 'Cortical excitatory neurons are laminated normally but GABAergic interneurons are almost absent. Which developmental process has most likely failed?', options: ['Radial migration along radial glia from dorsal progenitors', 'The neuron-to-glia competence switch', 'BMP antagonism during neural induction', 'Tangential migration from the ganglionic eminence'], answer: 3, explanation: 'Excitatory projection neurons arise from dorsal progenitors and migrate radially along radial glia. GABAergic interneurons are born in the ganglionic eminence and reach cortex by a separate tangential route, so that route can fail independently.', trap: 'Two neuron classes, two birthplaces, two migration routes - a selective loss points to which route failed.' },
  { id: 'l6-human', lecture: 6, block: 'Test 1', topic: 'Adult neurogenesis', stem: 'What is the safest claim about adult hippocampal neurogenesis in humans?', options: ['It is absent in every adult', 'Evidence remains disputed and depends strongly on tissue and detection methods', 'It is abundant and methodologically settled', 'The adult SVZ supplies most human olfactory neurons'], answer: 1, explanation: 'Rodent adult neurogenesis is well established, but the extent and persistence of the phenomenon in adult humans remain methodologically contested.', trap: 'Do not transfer the size and certainty of rodent effects directly to humans.' },
  { id: 'l6-stemcell', lecture: 6, block: 'Test 1', topic: 'Adult neurogenesis', stem: 'Which result best demonstrates self-renewal rather than survival alone?', options: ['A labelled cell remains alive for one day', 'A progenitor generates differentiated descendants while preserving progenitor capacity across serial divisions', 'A neuron expresses NeuN once', 'A culture contains growth factor'], answer: 1, explanation: 'Stemness requires both production of differentiated progeny and maintenance of the stem/progenitor pool over repeated divisions.', trap: 'Long survival and marker expression do not establish self-renewal.' },
  { id: 'l6-gaba-immature', lecture: 6, block: 'Test 1', topic: 'Adult neurogenesis', stem: 'GABA depolarises adult-born dentate granule cells for roughly their first three weeks, then becomes inhibitory. What explains the switch?', options: ['Immature cells express GABA-B rather than GABA-A receptors', 'GABA is converted to glutamate in immature cells', 'Immature cells lack a resting membrane potential', 'Immature cells load chloride to a high internal concentration, so opening the channel drives chloride outward; the transporter is later downregulated'], answer: 3, explanation: 'A transporter loads chloride into immature neurons, raising internal chloride. When GABA opens the channel, chloride leaves the cell, and losing negative charge depolarises it. As the cell matures that transporter is downregulated, internal chloride falls, and GABA becomes hyperpolarising.', trap: 'The receptor does not change - the chloride gradient does. Same channel, opposite driving force.' },
  { id: 'l6-rms', lecture: 6, block: 'Test 1', topic: 'Adult neurogenesis', stem: 'How do newborn cells from the subventricular zone reach the olfactory bulb?', options: ['They migrate through the rostral migratory stream, a tube of astrocyte-like B cells along blood vessels', 'They are carried passively in cerebrospinal fluid through the lateral ventricle', 'They travel along radial glial fibres spanning the cortical wall', 'They cross the corpus callosum and then turn rostrally'], answer: 0, explanation: 'Astrocyte-like B cells cling to blood vessels and form a tube; progenitors inside drag themselves along one another to reach the olfactory bulb. In rodents this is a 2 to 5 mm journey, around a hundred times the cell length, with thousands of cells migrating daily.', trap: 'This is active chain migration through a glial tube, not passive transport or radial-glial guidance.' },
  { id: 'l6-division-modes', lecture: 6, block: 'Test 1', topic: 'Adult neurogenesis', stem: 'A niche shifts from predominantly asymmetric self-renewal to predominantly differentiative division. What happens to the stem-cell pool and the output of new neurons?', options: ['Pool expands, neuron output falls', 'Pool is maintained, neuron output unchanged', 'Pool depletes, with a transient rise in new neurons that cannot be sustained', 'Pool depletes and neuron output stops immediately'], answer: 2, explanation: 'Symmetric self-renewal expands the pool, asymmetric division maintains it, and differentiative division consumes it because both daughters differentiate. Output rises briefly while the pool is spent, then falls as the source is exhausted.', trap: 'More differentiation now can mean less capacity later - read the effect on the pool, not just the immediate output.' },
  { id: 'l6-brdu-timing', lecture: 6, block: 'Test 1', topic: 'Adult neurogenesis', stem: 'A drug is given for five days and post-mortem staining afterwards shows more doublecortin-positive cells. Why is this insufficient to conclude the drug increased neurogenesis, and what fixes it?', options: ['Endpoint staining cannot date cell division, so co-administer BrdU to time-lock which cells were born during dosing', 'Doublecortin is not a real marker; use NeuN instead', 'The sample is too small; simply increase the number of animals', 'Immunohistochemistry cannot detect immature neurons at all'], answer: 0, explanation: 'Post-mortem immunohistochemistry reports the endpoint only. It cannot say when the labelled cells divided, so exercise, stress or other factors could account for the difference. BrdU, EdU, tritiated thymidine or a retrovirus incorporates only into cells dividing during the injection window, time-locking birth date to the intervention.', trap: 'Endpoint counts are correlative; attributing them to an intervention requires a method that dates division.' },
  { id: 'l6-staging-markers', lecture: 6, block: 'Test 1', topic: 'Adult neurogenesis', stem: 'Which marker combination correctly stages adult hippocampal neurogenesis?', options: ['NeuN for stem cells, GFAP for immature neurons, doublecortin for mature neurons', 'Doublecortin for stem cells, NeuN for immature neurons, SOX2 for mature neurons', 'GFAP/SOX2 for stem cells, doublecortin for immature neurons, NeuN for mature neurons', 'Ki67 for mature neurons, NeuN for proliferating cells'], answer: 2, explanation: 'GFAP and SOX2 label the radial glial-like stem population, doublecortin switches on in immature neurons and off as they mature, and NeuN marks mature neurons. Ki67 and ASCL1 report proliferation.', trap: 'Doublecortin is a transient immature marker - present in a cell means recently born, absent does not mean never born.' },
  { id: 'l6-sorrells-critique', lecture: 6, block: 'Test 1', topic: 'Adult neurogenesis', stem: 'A 2018 study reported undetectable adult human hippocampal neurogenesis, while another found it weeks later. Which methodological critique most directly explains a false negative?', options: ['The negative study used too many young subjects', 'Post-mortem delay of up to two days, over which doublecortin and immature-cell markers degrade so antibodies fail to bind', 'BrdU cannot be used in humans under any circumstances', 'MRI volume measures were not included'], answer: 1, explanation: 'The principal critiques are post-mortem delay degrading labile immature-cell markers, unreported fixation duration affecting antibody binding, and use of epileptic tissue as a control when epilepsy itself alters neurogenesis. Most of the field still holds that adult human hippocampal neurogenesis occurs.', trap: 'Failure to detect a marker under conditions that destroy that marker is not evidence the process is absent.' },
  { id: 'l7-bbb', lecture: 7, block: 'Test 1', topic: 'Glia II', stem: 'Which cells form the physical paracellular seal of the blood–brain barrier?', options: ['Astrocyte endfeet', 'Microglia', 'Oligodendrocytes', 'Brain endothelial cells with tight junctions'], answer: 3, explanation: 'Specialised brain endothelial tight junctions form the seal. Astrocytes, pericytes and basement-membrane signals regulate barrier development and maintenance.', trap: 'Astrocyte endfeet support and regulate the BBB; they are not the tight-junction seal.' },
  { id: 'l7-states', lecture: 7, block: 'Test 1', topic: 'Glia II', stem: 'Why should simple A1/A2 astrocyte and M1/M2 microglia labels be used cautiously?', options: ['Glia never change state', 'Only neurons express genes', 'The labels describe fixed embryonic lineages', 'In-vivo states are multidimensional and vary with region, time, disease and method'], answer: 3, explanation: 'Glial responses occupy diverse, overlapping state spaces. Binary labels can hide biologically important context and heterogeneity.', trap: 'Convenient shorthand is not a complete ontology.' },
  { id: 'l7-neurovascular', lecture: 7, block: 'Test 1', topic: 'Glia II', stem: 'Astrocytic calcium rises after glutamate uptake and mobilises arachidonic acid. What determines whether the local vessel dilates or constricts?', options: ['The magnitude of the calcium rise alone', 'Which enzyme handles arachidonic acid: cyclooxygenase gives prostaglandins and vasodilation, cytochrome P450 epoxygenase gives 20-HETE and vasoconstriction', 'Whether the astrocyte expresses aquaporin-4', 'Whether the synapse is excitatory or inhibitory'], answer: 1, explanation: 'The same calcium signal feeds a branch point. Arachidonic acid routed through cyclooxygenase yields prostaglandins and vasodilation, increasing glucose and oxygen delivery; routed through cytochrome P450 epoxygenase it yields 20-HETE and vasoconstriction. Metabotropic glutamate receptors participate, and nitric oxide also modulates vessel diameter.', trap: 'One upstream signal, two opposite vascular outcomes - the enzyme branch decides, not the signal size.' },
  { id: 'l7-glutamate-recycling', lecture: 7, block: 'Test 1', topic: 'Glia II', stem: 'Which sequence correctly describes astrocytic handling of synaptic glutamate?', options: ['Uptake by GLT-1 and GLAST, then direct release as an unchanged gliotransmitter only', 'Degradation to GABA by glutamate decarboxylase within the endothelium', 'Uptake by GLT-1 and GLAST, then conversion to glutamine by glutamine synthetase for recycling to neurons', 'Passive diffusion out of the cleft with no transporter involvement'], answer: 2, explanation: 'Astrocyte-specific transporters GLT-1 and GLAST clear glutamate from the cleft, and glutamine synthetase converts it to glutamine, which is returned to neurons to regenerate transmitter. This clearance both terminates signalling and prevents excitotoxic accumulation.', trap: 'Clearance and recycling are one continuous job - removing transmitter is not the end of the story.' },
  { id: 'l7-k-buffering', lecture: 7, block: 'Test 1', topic: 'Glia II', stem: 'How does astrocytic potassium spatial buffering redistribute potassium away from an active synapse?', options: ['Local extracellular potassium depolarises nearby astrocytic membrane relative to distant membrane, and the resulting potential difference drives current through the gap-junction-coupled syncytium to release sites at the endfeet', 'Potassium is pumped into the cerebrospinal fluid by microglia', 'Potassium is converted to sodium by an astrocytic exchanger', 'Astrocytes phagocytose potassium-rich extracellular fluid'], answer: 0, explanation: 'Neuronal activity raises extracellular potassium. The local astrocytic membrane becomes more positive than distant membrane, setting up a potential difference that drives current flow, and the gap-junction-coupled syncytial network carries potassium to distant sites and to endfeet. Potassium release at the endfoot can also widen the vessel.', trap: 'Spatial buffering is redistribution through a coupled network, not local pumping or destruction.' },
  { id: 'l7-microglia-origin', lecture: 7, block: 'Test 1', topic: 'Glia II', stem: 'Fate-mapping shows microglia originate from yolk-sac myeloid progenitors that enter the CNS before the blood-brain barrier forms. What follows?', options: ['Microglia are continuously replenished from circulating monocytes throughout adult life', 'Microglia are derived from neuroectoderm alongside astrocytes', 'Microglia form a self-renewing population largely independent of circulating macrophages and monocytes', 'Microglia cannot proliferate once resident in the parenchyma'], answer: 2, explanation: 'Early yolk-sac colonisation before barrier closure establishes self-renewing microglial precursors that maintain themselves in the parenchyma independently of the circulating monocyte pool. Border-associated macrophages form a separate extraparenchymal population.', trap: 'Sharing morphology and markers with macrophages does not mean sharing an ongoing source.' },
  { id: 'l7-astrocyte-synapse', lecture: 7, block: 'Test 1', topic: 'Glia II', stem: 'Retinal ganglion cells cultured without glia form few, poor synapses. Adding astrocytes produces which combination?', options: ['Increased mEPSC frequency and amplitude, decreased failure rate, increased synapse number', 'Decreased mEPSC frequency with increased failure rate', 'Increased synapse number with no change in any physiological measure', 'Increased failure rate offset by larger amplitude'], answer: 0, explanation: 'Astrocytes increase the frequency and size of miniature excitatory postsynaptic currents, reduce transmission failure rate and increase synapse number. They also organise synapse distribution and, with microglia, participate in removing synapses.', trap: 'More synapses would raise frequency, but amplitude and failure rate report on individual synapse quality - astrocytes change both count and quality.' },
  { id: 'l7-pruning-molecules', lecture: 7, block: 'Test 1', topic: 'Glia II', stem: 'Which molecule pair is specifically linked to microglial synaptic pruning and neuron-microglia signalling?', options: ['GLT-1 and GLAST', 'Aquaporin-4 and glutamine synthetase', 'IL-10 and TGF-beta', 'TREM2 and CX3CR1, the fractalkine receptor'], answer: 3, explanation: 'TREM2 is implicated in microglial synaptic pruning, and CX3CR1, the fractalkine receptor, mediates bidirectional neuron-microglia signalling that maintains healthy neurons and reports damaged ones. GLT-1/GLAST and aquaporin-4 are astrocytic; IL-10 and TGF-beta are M2 reparative cytokines.', trap: 'Sort molecules by cell type first - astrocytic homeostasis machinery is not microglial pruning machinery.' },
  { id: 'l7-cspg-scar', lecture: 7, block: 'Test 1', topic: 'Glia II', stem: 'Chondroitinase is delivered continuously and indefinitely after CNS injury to digest scar proteoglycans. What is the predicted problem?', options: ['Chondroitin sulphate proteoglycans have no effect on axon growth, so nothing changes', 'Unrestricted degradation removes a response that is partly necessary, and small amounts of these molecules can promote growth - so control, not maximal digestion, is the goal', 'Chondroitinase converts astrocytes into microglia', 'The scar becomes permanent faster'], answer: 1, explanation: 'The glial scar contains astrocytes, microglia, meningeal cells, fibroblasts and OPCs, with chondroitin sulphate proteoglycans as the growth-inhibitory component. Above a threshold the scar becomes permanent, but some reactivity is protective and small amounts of these molecules can be growth-promoting. Inducible systems, such as tetracycline-controlled viral delivery, exist precisely so the enzyme can be switched off.', trap: 'The scar is a trade-off, not a pure obstacle - an intervention that removes all of it removes the useful part too.' },

  { id: 'l8-chloride', lecture: 8, block: 'Test 2', topic: 'Membrane mechanisms', stem: 'Vm is −65 mV and ECl is −70 mV. Opening chloride channels initially drives:', options: ['Chloride out and inward conventional current', 'Chloride in and outward conventional current', 'Chloride in and inward conventional current', 'No ion flux'], answer: 1, explanation: 'Vm − ECl = +5 mV. Negative chloride enters, producing outward conventional current and driving Vm toward −70 mV.', trap: 'Ion movement and conventional-current direction are opposite for anions.' },
  { id: 'l8-drivingforce', lecture: 8, block: 'Test 2', topic: 'Membrane mechanisms', stem: 'If a channel conductance is unchanged but Vm moves closer to that ion’s equilibrium potential, the current magnitude should generally:', options: ['Increase because conductance dominates', 'Reverse without crossing the equilibrium potential', 'Become independent of voltage', 'Decrease because electrochemical driving force shrinks'], answer: 3, explanation: 'For an approximately ohmic current, I = g(Vm − Eion). With fixed conductance, current falls as Vm approaches Eion.', trap: 'Open-channel number and driving force are separate determinants of current.' },
  { id: 'l9-minis', lecture: 9, block: 'Test 2', topic: 'Quantal transmission', stem: 'Miniature event frequency rises while mean amplitude is unchanged. What is the best first inference?', options: ['Presynaptic spontaneous release increased', 'Postsynaptic receptor gain increased', 'Quantal size increased', 'The reversal potential shifted'], answer: 0, explanation: 'Frequency usually reflects presynaptic event rate; unchanged amplitude argues that postsynaptic quantal size is broadly intact.', trap: 'This is an inference, not a proof—detection thresholds and synapse number can confound it.' },
  { id: 'l9-binomial', lecture: 9, block: 'Test 2', topic: 'Quantal transmission', stem: 'In a simple binomial release model, mean synaptic response is proportional to:', options: ['n + p − q', 'p/q only', 'n × p × q', 'Membrane resistance only'], answer: 2, explanation: 'The model separates number of release sites n, release probability p and quantal size q. Mean response is n·p·q under its simplifying assumptions.', trap: 'Real synapses may violate independence and uniform-p assumptions.' },
  { id: 'l9-electrical-delay', lecture: 9, block: 'Test 2', topic: 'Electrical synapses', stem: 'Compared with a chemical synapse, transmission at an electrical synapse is characterised by:', options: ['Essentially no synaptic delay, because current passes directly through intercellular channels', 'A synaptic delay of roughly 0.5–1 ms caused by transmitter diffusion', 'Obligatory amplification of every presynaptic signal', 'Exclusive use of second-messenger cascades'], answer: 0, explanation: 'Gap-junction channels create direct cytoplasmic continuity, so charge spreads electrotonically with almost no delay. Chemical transmission adds delay through calcium entry, vesicle fusion, diffusion and receptor binding.', trap: 'Speed is the gain; electrical synapses generally cannot invert sign or amplify a signal the way chemical synapses can.' },
  { id: 'l9-connexin', lecture: 9, block: 'Test 2', topic: 'Electrical synapses', stem: 'Which structural description of a vertebrate neuronal gap junction is correct?', options: ['A single connexin spans both membranes to form the pore', 'The channel is assembled from SNARE proteins', 'Six connexin subunits form a connexon, and two apposed connexons form the intercellular channel', 'The pore is formed by clustered voltage-gated sodium channels'], answer: 2, explanation: 'Six connexins oligomerise into a connexon (hemichannel); docking of connexons in apposed membranes forms the conducting intercellular channel. Connexin 36 predominates at mammalian neuronal electrical synapses.', trap: 'A connexon is only a hemichannel — the conducting unit needs two, one contributed by each cell.' },
  { id: 'l9-rectifying', lecture: 9, block: 'Test 2', topic: 'Electrical synapses', stem: 'At the crayfish giant motor synapse, depolarising current injected presynaptically passes readily to the postsynaptic cell, but the same current injected postsynaptically does not pass back. What does this demonstrate?', options: ['The junction is chemical rather than electrical', 'A rectifying electrical synapse, in which junctional conductance depends on transjunctional voltage and its polarity', 'Failure of the postsynaptic membrane to conduct any current at all', 'That gap junctions are necessarily bidirectional'], answer: 1, explanation: 'Furshpan and Potter (1959) showed junctional current flowing preferentially in one direction. Asymmetric junctions — in vertebrates typically heterotypic connexin pairings — make junctional conductance a function of transjunctional voltage, so coupling becomes directional.', trap: 'Do not confuse this with inward-rectifier (Kir4.1) or delayed-rectifier K⁺ channels: those rectify current across one membrane, whereas here rectification is a property of the junction between two cells.' },
  { id: 'l10-calcium', lecture: 10, block: 'Test 2', topic: 'Neurotransmitter release', stem: 'Halving presynaptic calcium influx reduces release about sixteen-fold over a measured range. What follows?', options: ['Exactly four calcium ions bind', 'Four vesicles must fuse', 'Every calcium channel has four subunits', 'The system shows roughly fourth-power effective cooperativity in that range'], answer: 3, explanation: 'A log–log slope near four describes effective system cooperativity over the tested range; it does not establish literal molecular stoichiometry.', trap: 'A phenomenological exponent is not automatically a count of binding sites.' },
  { id: 'l10-sensor', lecture: 10, block: 'Test 2', topic: 'Neurotransmitter release', stem: 'Which pairing best describes fast synchronous vesicle fusion?', options: ['AMPA receptors sense calcium; kinesin forms the pore', 'Clathrin triggers exocytosis; dynein cleaves SNAREs', 'PSD-95 transports vesicles down the axon', 'Synaptotagmin senses calcium; SNAREs provide the fusion machinery'], answer: 3, explanation: 'Calcium binding to synaptotagmin rapidly promotes SNARE-mediated membrane fusion at release-ready vesicles.', trap: 'Endocytic proteins recycle membrane after release; they are not the fast calcium trigger.' },
  { id: 'l10-pools', lecture: 10, block: 'Test 2', topic: 'Neurotransmitter release', stem: 'A brief high-frequency train depresses release, which then recovers over seconds. The most parsimonious presynaptic explanation is:', options: ['Permanent loss of every synaptic vesicle in the terminal', 'Depletion of the readily releasable pool with refilling from reserve vesicles', 'Conversion of the terminal into a postsynaptic density', 'An increase in quantal size during the train'], answer: 1, explanation: 'Sustained activity can exhaust the small readily releasable pool faster than it is replenished, producing short-term depression that recovers as vesicles are recruited and re-primed.', trap: 'Depression can also arise postsynaptically through receptor desensitisation; recovery kinetics and quantal analysis are needed to localise it.' },
  { id: 'l11-ppr', lecture: 11, block: 'Test 2', topic: 'Synaptic plasticity', stem: 'A high paired-pulse ratio most often suggests:', options: ['High initial release probability', 'More postsynaptic AMPA receptors with certainty', 'Low initial release probability with residual-calcium facilitation', 'Long-term depression'], answer: 2, explanation: 'Paired-pulse facilitation often varies inversely with initial release probability because residual calcium boosts the second response.', trap: 'PPR is an index with confounds, not a direct release-probability meter.' },
  { id: 'l11-ltp', lecture: 11, block: 'Test 2', topic: 'Synaptic plasticity', stem: 'In canonical CA1 LTP induction, coincident glutamate binding and postsynaptic depolarisation matter because depolarisation:', options: ['Removes the voltage-dependent Mg²⁺ block of NMDA receptors', 'Closes every AMPA receptor', 'Prevents calcium entry', 'Degrades CaMKII'], answer: 0, explanation: 'Depolarisation relieves NMDA-receptor Mg²⁺ block, allowing calcium entry that activates plasticity signalling when glutamate is present.', trap: 'The NMDA receptor acts as a coincidence detector; glutamate alone is often insufficient at resting voltage.' },
  { id: 'l11-ltd', lecture: 11, block: 'Test 2', topic: 'Synaptic plasticity', stem: 'Why can the same postsynaptic ion produce either LTP or LTD at CA1 synapses?', options: ['Calcium is involved only in LTP', 'LTD requires sodium entry rather than calcium', 'The amplitude and time course of the calcium rise recruit different kinase and phosphatase pathways', 'The direction depends solely on the number of stimuli, independent of signalling'], answer: 2, explanation: 'Large, brief calcium transients favour kinase-dominated potentiation (CaMKII), whereas modest, prolonged rises favour phosphatase-dominated depression. The same ion is read through downstream pathways with different sensitivities.', trap: 'Induction protocol and calcium dynamics are correlated but not interchangeable; measure the signal rather than inferring it from the stimulus pattern.' },
  { id: 'l12-initiation', lecture: 12, block: 'Test 2', topic: 'AIS plasticity', stem: 'Why is the axon initial segment usually the action-potential initiation site?', options: ['Its geometry and high density of voltage-gated sodium channels favour spike initiation', 'It contains no potassium channels', 'It is electrically isolated from the soma', 'It releases trophic factors into blood'], answer: 0, explanation: 'The AIS has specialised scaffolds and high sodium-channel density, making it the lowest-threshold site for regenerative spike initiation in many neurons.', trap: '“Usually” matters: initiation site depends on cell type and state.' },
  { id: 'l12-remodel', lecture: 12, block: 'Test 2', topic: 'AIS plasticity', stem: 'What is the most defensible general claim about structural AIS plasticity?', options: ['AIS movement always increases excitability', 'The AIS cannot remodel after development', 'AIS plasticity changes only neurotransmitter identity', 'Changes in AIS position or length can alter excitability, but direction depends on cellular context'], answer: 3, explanation: 'Activity-dependent changes in AIS geometry and channel organisation can tune excitability, but the functional sign depends on morphology, conductances and measurement conditions.', trap: 'Avoid turning one preparation’s directional effect into a universal rule.' },
  { id: 'l13-complement', lecture: 13, block: 'Test 2', topic: 'Synaptic pruning', stem: 'Which is the most precise simplified complement-pruning sequence?', options: ['CR3 synthesises C1q inside neurons', 'C1q/classical pathway → C3 deposition → CR3 recognition of complement-opsonised material', 'C4 must always act after C3', 'Complement only affects adult peripheral nerves'], answer: 1, explanation: 'Complement tagging can lead to C3-fragment deposition on selected material and recognition by microglial CR3, supporting engulfment in defined developmental contexts.', trap: 'The pathway is context-specific; do not claim it explains every form of pruning.' },
  { id: 'l13-causality', lecture: 13, block: 'Test 2', topic: 'Synaptic pruning', stem: 'Microglia contain synaptic material after a developmental manipulation. What does this observation alone establish?', options: ['Microglia caused all synapse loss', 'Microglia contacted or engulfed synaptic material, but causal necessity needs intervention', 'The material was never neuronal', 'Complement is certainly required'], answer: 1, explanation: 'Imaging supports association and engulfment. Causal necessity requires perturbing the proposed microglial pathway and measuring synapse or circuit outcomes.', trap: 'Presence inside a cell does not by itself prove that pathway caused the phenotype.' },
  { id: 'l13-deprivation', lecture: 13, block: 'Test 2', topic: 'Synaptic pruning', stem: 'Monocular deprivation during the critical period shifts cortical responses toward the open eye. Which interpretation is best supported?', options: ['Absolute activity level alone determines which inputs are retained', 'Deprivation physically severs the deprived optic nerve', 'The result proves complement is the sole synapse-elimination mechanism', 'Correlated, competitively advantaged inputs are stabilised while less-correlated inputs are weakened and withdrawn'], answer: 3, explanation: 'Competition depends on relative patterned activity between converging inputs, not simply on how active one pathway is in isolation — which is why balanced binocular deprivation gives a different outcome from monocular deprivation.', trap: 'Ocular-dominance shifts demonstrate competitive stabilisation and withdrawal; they do not by themselves name the molecular elimination pathway.' },

  { id: 'l14-transduction', lecture: 14, block: 'Final', topic: 'Biophysics of transduction', stem: 'A sensory receptor potential differs from an action potential because it is typically:', options: ['Graded with stimulus strength', 'All-or-none and non-decrementing', 'Independent of ion channels', 'Restricted to myelinated axons'], answer: 0, explanation: 'Transduction channels usually generate graded receptor potentials; these are converted into spike timing or transmitter release downstream.', trap: 'Do not collapse stimulus transduction and action-potential generation into one event.' },
  { id: 'l15-pathways', lecture: 15, block: 'Final', topic: 'Somatosensory processing', stem: 'Which pairing of somatosensory pathway and decussation level is correct?', options: ['Both pathways cross in the midbrain', 'Dorsal column–medial lemniscus crosses at segmental level; spinothalamic crosses in the medulla', 'Dorsal column–medial lemniscus crosses in the medulla; spinothalamic crosses near the segmental level of entry', 'Neither pathway crosses the midline'], answer: 2, explanation: 'Fine touch and proprioception ascend ipsilaterally in the dorsal columns and cross in the medulla; pain and temperature cross within a segment or two of entry and ascend contralaterally.', trap: 'The different crossing levels are exactly why a cord hemisection dissociates touch from pain and temperature on opposite sides.' },
  { id: 'l15-acuity', lecture: 15, block: 'Final', topic: 'Somatosensory processing', stem: 'Two-point discrimination is far finer on the fingertip than on the back. Which combination best explains this?', options: ['Small receptive fields, dense innervation and disproportionate cortical representation at the fingertip', 'Larger receptive fields and sparse innervation at the fingertip', 'Faster afferent conduction velocity alone', 'A lower absolute detection threshold alone'], answer: 0, explanation: 'Spatial acuity depends on the grain of the afferent array — receptor density and receptive-field size — and on the cortical territory devoted to that surface, which is what somatotopic distortion represents.', trap: 'Detection threshold (can I feel it?) and spatial acuity (are these two points?) are different measurements.' },
  { id: 'l16-feedback', lecture: 16, block: 'Final', topic: 'Centrifugal control', stem: 'A centrifugal sensory pathway carries signals primarily:', options: ['From peripheral receptors toward the CNS', 'Only between spinal motor neurons', 'From higher or central regions back toward earlier sensory processing stages', 'From muscle to tendon'], answer: 2, explanation: 'Centrifugal or efferent feedback can alter gain, selectivity and signal-to-noise in earlier sensory circuits.', trap: 'The direction is central-to-earlier-stage, not the usual afferent feedforward direction.' },
  { id: 'l17-unmasking', lecture: 17, block: 'Final', topic: 'Adult sensory plasticity', stem: 'Cortical remapping is detectable within hours of a peripheral lesion, then continues over weeks. What does the early phase most likely reflect?', options: ['Completed long-distance axonal sprouting', 'Unmasking of pre-existing subthreshold connections through a changed excitation–inhibition balance', 'Generation of new cortical neurons', 'A change in skull conductance'], answer: 1, explanation: 'Reorganisation within hours is generally too fast for new long-range anatomy and is attributed to release of latent inputs, largely through reduced local inhibition. Slower, larger-scale change can additionally involve structural growth.', trap: 'Timescale is the discriminating evidence; an observed map change alone does not distinguish unmasking from sprouting.' },
  { id: 'l17-phantom', lecture: 17, block: 'Final', topic: 'Adult sensory plasticity', stem: 'After limb amputation, touching the face can evoke sensation referred to the missing hand. Which account fits best?', options: ['The amputated hand has regenerated peripheral receptors', 'The thalamus is bypassed entirely after amputation', 'Referred sensation shows the phantom is purely psychological', 'Deafferented cortex becomes responsive to neighbouring inputs whose representation lies adjacent in the somatotopic map'], answer: 3, explanation: 'Face and hand representations are neighbours in the somatosensory map, so takeover of deprived cortical territory can produce referred sensation. Subcortical reorganisation contributes as well.', trap: 'Adjacency here is topographic, not anatomical adjacency on the body — which is precisely why face-to-hand referral occurs.' },
  { id: 'l18-bold', lecture: 18, block: 'Final', topic: 'Measuring brain activity', stem: 'The fMRI BOLD signal is best described as:', options: ['A direct recording of neuronal action potentials', 'A measure of one neurotransmitter only', 'A cellular-resolution voltage trace', 'An indirect haemodynamic proxy shaped by neurovascular coupling'], answer: 3, explanation: 'BOLD reflects changes in blood oxygenation and flow coupled to local activity. It is spatially and temporally indirect.', trap: 'Activation maps are not literal photographs of neurons firing.' },
  { id: 'l19-contrast', lecture: 19, block: 'Final', topic: 'Vision', stem: 'Centre–surround receptive fields are especially suited to encode:', options: ['Absolute luminance regardless of context', 'Local spatial contrast and edges', 'Eye colour', 'Descending motor commands'], answer: 1, explanation: 'Antagonistic centre–surround organisation suppresses uniform input and emphasises local luminance differences.', trap: 'Early visual neurons prioritise contrast over a raw light-meter representation.' },
  { id: 'l20-haircells', lecture: 20, block: 'Final', topic: 'Peripheral auditory processing', stem: 'Which division of labour in the mammalian cochlea is most accurate?', options: ['Outer hair cells alone carry all auditory afferents', 'Inner hair cells set middle-ear pressure', 'Inner hair cells provide most afferent signalling; outer hair cells provide active mechanical amplification', 'Both cell types are central neurons'], answer: 2, explanation: 'Inner hair cells are the main sensory output to auditory afferents; outer hair-cell electromotility sharpens and amplifies basilar-membrane responses.', trap: 'Amplification and primary afferent transmission are related but distinct jobs.' },
  { id: 'l21-duplex', lecture: 21, block: 'Final', topic: 'Central auditory processing', stem: 'Duplex theory predicts that interaural time differences dominate localisation of:', options: ['Low-frequency sounds, where interaural phase can be compared unambiguously', 'High-frequency sounds, because the head casts an acoustic shadow', 'All frequencies equally', 'Only sounds presented directly overhead'], answer: 0, explanation: 'At low frequencies the wavelength is long relative to head width, so interaural phase is unambiguous and ITDs are usable. At high frequencies the head shadow instead produces reliable interaural level differences.', trap: 'Both cues are physically present across the spectrum; duplex theory is about which cue is reliable where, not which one exists.' },
  { id: 'l21-coincidence', lecture: 21, block: 'Final', topic: 'Central auditory processing', stem: 'A brainstem neuron fires maximally when excitatory inputs from the two ears arrive simultaneously at its soma. This makes it a:', options: ['Pure amplifier of monaural intensity', 'Generator of otoacoustic emissions', 'Coincidence detector that converts interaural delay into a firing-rate code', 'Relay that discards binaural information'], answer: 2, explanation: 'Medial superior olive neurons compare arrival timing of bilateral excitation; combined with axonal conduction delays, coincidence detection maps interaural delay onto neuronal identity and firing rate.', trap: 'Coincidence detection depends on sub-millisecond timing, so anything that jitters conduction — demyelination, for example — degrades it.' },
  { id: 'l22-hpa', lecture: 22, block: 'Final', topic: 'HPA axis', stem: 'Under ordinary negative feedback, rising glucocorticoids tend to:', options: ['Suppress upstream hypothalamic and pituitary drive', 'Increase CRH and ACTH without limit', 'Directly open cochlear hair-cell channels', 'Eliminate circadian regulation'], answer: 0, explanation: 'Glucocorticoid receptor signalling feeds back across hypothalamic, pituitary and higher circuits to restrain further HPA activation.', trap: 'Feedback can be altered by context and chronic stress, but the canonical loop is inhibitory.' },
  { id: 'l24-population', lecture: 24, block: 'Final', topic: 'Motor cortex', stem: 'Individual M1 neurons are broadly tuned to movement direction, yet reach direction can be decoded accurately. What does this support?', options: ['Each neuron encodes exactly one movement with no overlap', 'M1 encodes only muscle length and never direction', 'Accurate decoding requires recording every neuron in the cortex', 'A population code, in which direction is read from the distributed activity of many broadly tuned cells'], answer: 3, explanation: 'Broad, overlapping tuning curves combine across a population so that a vector sum, or a trained decoder, specifies direction far more precisely than any single cell. This principle underpins motor brain–computer interfaces.', trap: 'Broad single-unit tuning is not population-level imprecision; ambiguity per neuron and accuracy per population coexist.' },
  { id: 'l24-tms', lecture: 24, block: 'Final', topic: 'Motor cortex', stem: 'Motor-evoked potentials grow after a period of skill practice. What is the most defensible interpretation?', options: ['The number of corticospinal axons has certainly increased', 'Corticospinal excitability measured by TMS has increased, with the locus not yet specified', 'Muscle fibres have been replaced', 'Learning has been shown to occur entirely within the spinal cord'], answer: 1, explanation: 'A larger MEP indicates greater excitability somewhere along the tested corticospinal route. Cortical, spinal and neuromuscular contributions all sit inside that single measurement and need separate tests to dissociate.', trap: 'The MEP is a compound measure; attributing it to cortex alone silently skips the spinal and peripheral segments of the same path.' },
  { id: 'l24-vgat-silencing', lecture: 24, block: 'Final', topic: 'Motor cortex', stem: 'In head-fixed mice reaching for water, light activates channelrhodopsin in VGAT-expressing motor-cortex neurons, either before a reach begins or partway through one. Which result and interpretation fit the lecture?', options: ['Reaches fail to start and ongoing reaches are disrupted, because silencing cortical output removes a signal needed throughout execution', 'Reaches become faster and larger, because driving VGAT cells adds excitatory drive onto corticospinal output neurons', 'Only reach initiation is blocked, because once the basal ganglia issue the plan the cortex is no longer required', 'Reaching is unaffected, because mice locate the droplet by smell and brainstem circuits then guide the limb'], answer: 0, explanation: 'VGAT marks GABAergic interneurons, so driving them with light suppresses local pyramidal output: the manipulation is an inactivation. Both muscimol and VGAT photostimulation blocked reach initiation, and photostimulation during a reach disrupted the ongoing movement. Motor cortex is therefore necessary to start and to sustain this learned reach, although necessity does not show what the cortex computes.', trap: 'Reading “optogenetic stimulation” as excitation of motor output when the stimulated cells are inhibitory interneurons that silence the cortex.' },
  { id: 'l24-pt-subtype-timing', lecture: 24, block: 'Final', topic: 'Motor cortex', stem: 'Layer 5 pyramidal-tract (PT) neurons are recorded while a mouse waits through a delay before making a cued movement. Which activity pattern matches the two PT subtypes described in the lecture?', options: ['Medulla-projecting cells are most active through the delay, while thalamus-projecting cells fire mainly at movement onset', 'Thalamus-projecting cells are most active during preparation, while medulla-projecting cells peak at movement initiation and termination', 'Both subtypes fire identically, because every PT neuron projects to the same thalamic and medullary targets', 'Neither subtype fires before movement, because preparation is computed entirely within the basal ganglia'], answer: 1, explanation: 'Economo et al. split PT neurons by projection target. PT-upper cells project to thalamus, avoid medullary motor centres and are most active during preparation, feeding a thalamocortical loop that can hold a plan without movement. PT-lower cells project to medullary motor nuclei, avoid thalamus and are most active when movement starts and stops, consistent with carrying the motor command. These are mouse recordings, so the link between subtype and phase is correlational.', trap: 'Swapping the subtypes on the assumption that the brainstem-projecting “lower” cells must carry the early plan.' },
  { id: 'l24-spine-learning-control', lecture: 24, block: 'Final', topic: 'Motor cortex', stem: 'In vivo imaging shows more new dendritic spines in contralateral forelimb motor cortex after skilled-reach training. Which control result most strengthens the claim that the new spines reflect learning rather than simply moving the limb?', options: ['Spine formation rises just as much in the somatosensory cortex of the same trained mice', 'Total spine number stays permanently elevated for weeks after training has ended', 'Mice that trained but failed to learn the task show only control-level spine formation', 'Ipsilateral motor cortex shows a larger rise in spine formation than the contralateral side'], answer: 2, explanation: 'Xu et al. found increased spine formation only in trained contralateral forelimb motor cortex, not in ipsilateral motor cortex, sensory cortex, nearby non-forelimb cortex or mice that practised without improving. The fail-to-learn mice made the movements without acquiring the skill, so their control-level formation separates spine addition from motor activity alone. This strengthens the correlation, but imaging still cannot show causation without a perturbation.', trap: 'Treating a lasting rise in total spine number as the signature of learning, when new spines are offset by elimination of pre-existing ones.' },
  { id: 'l24-optical-spine-erasure', lecture: 24, block: 'Final', topic: 'Motor cortex', stem: 'A probe tags recently potentiated motor-cortex spines and shrinks them when illuminated. After light, the skill linked to the tagged spines is degraded, a second skill learned with other spines in the same region is retained, and sham-illuminated mice keep both. What is the strongest inference?', options: ['Light damages motor cortex non-specifically, so any skill stored in that region is equally impaired', 'Spines are only correlates of learning, because altering spine size has no measurable effect on behaviour', 'Motor skills are stored in myelin rather than synapses, because spine changes are easily reversed', 'Expressing the newly acquired skill requires the specific ensemble of spines potentiated during its learning'], answer: 3, explanation: 'Hayashi-Takagi et al. used AS-PaRac1: tagged spines shrank after light while untagged neighbours did not. Only the skill linked to the tagged spines was lost, and the other task and sham controls were unaffected, so this is a causal, task-specific test rather than an imaging correlation. The conclusion applies to a recently acquired skill in mice.', trap: 'Stopping at “spines correlate with learning” when the experiment perturbs spines directly to test whether they are necessary.' },
  { id: 'l25-cerebellum', lecture: 25, block: 'Final', topic: 'Cerebellar networks', stem: 'Which statement best distinguishes climbing and mossy fibre input to the cerebellar cortex?', options: ['Mossy fibres arise only from Purkinje cells', 'Climbing fibres strongly contact Purkinje cells; mossy fibres act through granule-cell parallel fibres', 'Climbing fibres never influence plasticity', 'Both inputs bypass the cerebellar cortex'], answer: 1, explanation: 'Inferior-olive climbing fibres provide powerful Purkinje-cell input, while mossy fibres recruit granule cells whose parallel fibres contact Purkinje cells.', trap: 'The two pathways differ in source, convergence and teaching/context roles.' },
  { id: 'l25-purkinje-pacemaking', lecture: 25, block: 'Final', topic: 'Cerebellar networks', stem: 'Purkinje cells in a cerebellar slice keep firing at a high tonic rate after all fast synaptic transmission is blocked, but fall silent when tetrodotoxin is added. What is the best inference?', options: ['Tonic firing is generated intrinsically by Na⁺-dependent spiking, and synaptic input modulates rather than creates it', 'Tonic firing depends on ongoing parallel-fibre glutamate release, which tetrodotoxin removes at the presynaptic terminal', 'Tetrodotoxin silences Purkinje cells by enhancing GABA-A inhibition arriving from molecular layer interneurons', 'Climbing-fibre complex spikes set the simple-spike rhythm, so removing them in tetrodotoxin stops the firing'], answer: 0, explanation: 'Firing that survives synaptic blockade cannot be driven by parallel-fibre, climbing-fibre or interneuron input, so it must come from intrinsic pacemaking. Tetrodotoxin blocks voltage-gated Na⁺ channels and so abolishes the spikes themselves. Parallel fibres, climbing fibres and interneurons then carry information by modulating this 50–100 Hz baseline.', trap: 'A high resting firing rate tempts you to assume strong ongoing excitatory drive, but the synaptic-blockade result rules that out.' },
  { id: 'l25-conjunctive-ltd', lecture: 25, block: 'Final', topic: 'Cerebellar networks', stem: 'In a cerebellar preparation, a parallel-fibre bundle is stimulated repeatedly on its own in one condition, and together with its Purkinje cell\'s climbing fibre in another. Which pair of outcomes at the parallel fibre–Purkinje synapse does the lecture predict?', options: ['LTD with parallel fibres alone; LTP when paired with the climbing fibre', 'LTP with parallel fibres alone; LTD when paired with the climbing fibre', 'No change with parallel fibres alone; LTP when paired with the climbing fibre', 'LTP in both conditions, because both inputs release glutamate onto the cell'], answer: 1, explanation: 'Repeated parallel-fibre activity on its own potentiates the synapse, whereas paired parallel- and climbing-fibre activity depresses it. Ito and Kano showed the pairing-induced depression in rabbit; in their study, parallel-fibre stimulation alone did not depress transmission. The climbing fibre therefore acts as a teaching signal that selectively weakens parallel-fibre inputs active at the time of an error. The slide adds that interneuron signalling can switch the paired outcome to LTP, so the rule is conditional.', trap: 'Hebbian intuition says extra coincident excitation should potentiate, which reverses the cerebellar rule.' },
  { id: 'l25-eyeblink-teaching-route', lecture: 25, block: 'Final', topic: 'Cerebellar networks', stem: 'During rabbit eyeblink conditioning (a tone CS paired with an air-puff US), which single intervention would most selectively remove the cerebellar cortex\'s US teaching signal while leaving the tone\'s route into the cortex intact?', options: ['Lesioning the pontine nuclei that give rise to the CS-carrying mossy fibres', 'Silencing granule cells so their parallel fibres stop firing during the tone', 'Silencing the inferior olive so climbing fibres stop signalling the air puff', 'Silencing the facial motor nucleus that drives the eyelid muscles'], answer: 2, explanation: 'The air-puff US reaches the cerebellar cortex through trigeminal input to the inferior olive and then the climbing fibres, which carry the error or teaching signal. The tone CS travels separately, through the pontine nuclei, mossy fibres, granule cells and parallel fibres. Silencing the olive therefore removes the instruction while sparing the context route. Silencing the facial nucleus blocks the motor output, not the teaching signal.', trap: 'It is easy to confuse the motor output limb, or the mossy- and parallel-fibre context limb, with the climbing-fibre teaching limb.' },
  { id: 'l25-cf-spillover', lecture: 25, block: 'Final', topic: 'Cerebellar networks', stem: 'Climbing-fibre stimulation evokes AMPA- and NMDA-receptor currents in nearby molecular layer interneurons, yet there are no conventional climbing fibre–interneuron synapses. Which interpretation fits the lecture?', options: ['Electrical coupling spreads the Purkinje cell\'s complex spike into interneurons through gap junctions', 'Purkinje cells co-release glutamate onto interneurons from axon collaterals after each complex spike', 'Climbing fibres excite granule cells, whose parallel fibres then relay the excitation to interneurons', 'Glutamate spilling from climbing-fibre synapses recruits interneurons that inhibit or disinhibit neighbouring Purkinje cells'], answer: 3, explanation: 'Szapiro and Barbour showed that climbing fibres activate AMPA and NMDA receptors on interneurons purely by glutamate spillover, which is volume transmission rather than a dedicated synapse. The recruited interneurons then produce feedforward inhibition of neighbouring Purkinje cells and, by inhibiting other interneurons, disinhibition. This extends one climbing fibre\'s influence beyond the Purkinje cells it contacts directly.', trap: 'Assuming that every receptor current needs a conventional synapse hides volume transmission as a mechanism.' },
  { id: 'l25-purkinje-thirst', lecture: 25, block: 'Final', topic: 'Cerebellar networks', stem: 'In mice, exciting Purkinje cells chemogenetically raises their firing and increases 24-h water intake without changing food intake, while inhibiting them lowers water intake but not food intake. What is the strongest conclusion?', options: ['Purkinje-cell activity bidirectionally and selectively modulates drinking, a non-motor cerebellar function in mice', 'The cerebellum replaces hypothalamic osmosensing as the brain\'s primary thirst-generating centre in mice', 'The extra drinking is a motor side-effect, since Purkinje cells only coordinate licking movements', 'Human thirst disorders can now be attributed to loss of cerebellar Purkinje-cell activity'], answer: 0, explanation: 'Raising and lowering Purkinje-cell activity moves water intake in opposite directions, which is stronger evidence than either manipulation alone. Unchanged food intake argues against a general change in consummatory movement or appetite, so the effect is selective for drinking. The data show modulation in mice; they do not show that the cerebellum generates thirst or that it explains human disease.', trap: 'A clean bidirectional rodent result tempts overclaiming, such as calling the cerebellum a thirst centre or assuming direct human relevance, beyond what modulation shows.' },
  { id: 'l26-energy', lecture: 26, block: 'Final', topic: 'Energy balance', stem: 'Leptin signalling in the arcuate nucleus generally favours which acute pattern?', options: ['Activate AgRP/NPY and inhibit POMC', 'Silence every hypothalamic neuron', 'Trigger GnRH release only', 'Activate POMC and inhibit AgRP/NPY'], answer: 3, explanation: 'Leptin signals energy sufficiency, tending to promote anorexigenic POMC output and restrain orexigenic AgRP/NPY neurons.', trap: 'Obesity can involve leptin resistance despite high circulating leptin.' },
  { id: 'l26-agrp-pomc-coactivation', lecture: 26, block: 'Final', topic: 'Energy balance', stem: 'Channelrhodopsin is used to photostimulate arcuate AgRP and POMC neurons simultaneously in fed mice. Based on the circuit in this lecture, what is the predicted effect on food intake?', options: ['Intake falls, because α-MSH released by POMC neurons overrides AgRP signalling at PVN MC4R', 'Intake rises much as with AgRP stimulation alone, because AgRP neurons inhibit POMC neurons but not the reverse', 'Intake is unchanged, because orexigenic and anorexigenic outputs cancel each other at the PVN', 'Intake rises only after days, because both populations signal solely through slow neuropeptide release'], answer: 1, explanation: 'AgRP neurons send GABAergic inhibition to POMC neurons, but POMC neurons do not inhibit AgRP neurons. During co-activation, AgRP output therefore suppresses POMC locally. In the PVN, AgRP also antagonises MC4R and NPY acts at Y1/Y5. The slides report that co-activation increases intake much like AgRP activation alone.', trap: 'Treating the two populations as symmetric opponents that either cancel out or let α-MSH win.' },
  { id: 'l26-ghrelin-indirect-pomc', lecture: 26, block: 'Final', topic: 'Energy balance', stem: 'Ghrelin normally activates arcuate AgRP neurons and suppresses POMC neurons. If GHSR is deleted selectively from AgRP neurons, how should ghrelin\'s effect on POMC neurons change?', options: ['Suppression is unchanged, because POMC neurons carry their own GHSR and are inhibited directly', 'Suppression is enhanced, because ghrelin now acts unopposed on GHSR expressed by POMC neurons', 'Suppression is largely lost, because POMC neurons lack GHSR and are inhibited via AgRP GABA input', 'POMC neurons gain pSTAT3, because ghrelin is redirected to signal through the leptin receptor'], answer: 2, explanation: 'POMC neurons express leptin and insulin receptors but not GHSR, so ghrelin cannot act on them directly. Ghrelin suppresses POMC only by activating GHSR on NPY/AgRP neurons, whose GABAergic input then inhibits POMC. Removing GHSR from AgRP neurons breaks the first link of that relay, so POMC suppression, and ghrelin-induced feeding, should be largely lost.', trap: 'Assuming every arcuate neuron that responds to ghrelin must express GHSR itself.' },
  { id: 'l26-double-lesion', lecture: 26, block: 'Final', topic: 'Energy balance', stem: 'A rat made obese by an electrolytic VMH lesion later receives a lateral hypothalamic (LH) lesion. It stops eating and starves. What is the strongest inference?', options: ['The VMH is the true feeding centre, and the LH lesion simply removed compensation for it', 'VMH lesions act by damaging the pituitary, and the second lesion restored pituitary output', 'The two lesions cancel exactly, so intake and body weight return to pre-lesion values', 'The LH is required to express VMH-lesion overeating, so the LH feeding drive is dominant'], answer: 3, explanation: 'VMH lesions release overeating, but the overeating disappears once the LH is destroyed, so it depends on an intact LH. This supports the dual-centre model, in which LH feeding drive sits downstream of, or dominates, VMH satiety signalling. Electrolytic lesions also destroy passing fibres and mixed cell types, so the conclusion concerns regions, not defined neurons.', trap: 'Reading the result as two lesions cancelling out, when the animal actually starved.' },
  { id: 'l26-mc4r-blockade', lecture: 26, block: 'Final', topic: 'Energy balance', stem: 'Photostimulating arcuate POMC neurons reduces food intake. Which manipulation in the paraventricular nucleus (PVN) should most directly prevent that reduction?', options: ['Antagonising MC4R in the PVN, mimicking the action of AgRP peptide', 'Blocking PVN Y1 and Y5 receptors, removing the action of NPY', 'Blocking GHSR on PVN neurons, removing the action of ghrelin', 'Infusing an α-MSH analogue into the PVN to activate MC4R'], answer: 0, explanation: 'POMC neurons suppress intake largely through α-MSH acting on MC4R in the PVN. Blocking MC4R, which is what AgRP peptide does naturally, removes the receptor that reads the POMC signal, so photostimulation should no longer reduce intake. Y1/Y5 and GHSR belong to the orexigenic side and do not carry the POMC signal.', trap: 'Assuming that blocking any appetite-related receptor will cancel the POMC effect, including receptors on the orexigenic side.' },
  { id: 'l26-fos-ghrelin-inference', lecture: 26, block: 'Final', topic: 'Energy balance', stem: 'NPY-GFP mice on chow are injected with ghrelin, and many GFP-labelled arcuate neurons then show Fos-positive nuclei. What is the safest conclusion?', options: ['Ghrelin acts directly on every labelled NPY neuron, since Fos identifies which receptor was activated', 'NPY neurons were activated after ghrelin; their GHSR makes direct action plausible, but Fos cannot prove it', 'Ghrelin silenced the NPY neurons, since Fos protein accumulates in nuclei when firing stops', 'Ghrelin raised NPY release in the PVN, since nuclear Fos measures peptide secretion at terminals'], answer: 1, explanation: 'Fos is an immediate-early gene product that accumulates in the nucleus after a cell is activated, so co-labelling shows that NPY neurons became active after ghrelin. Because NPY/AgRP neurons express GHSR, a direct action is plausible, but Fos alone cannot distinguish direct receptor activation from activation through other inputs. Nor does it report peptide release at distant terminals.', trap: 'Treating an activity marker as proof of a direct mechanism.' },
  { id: 'l27-pulses', lecture: 27, block: 'Final', topic: 'Fertility', stem: 'Why does GnRH pulsatility matter?', options: ['Pulse pattern regulates gonadotroph responsiveness; continuous exposure can desensitise the axis', 'Continuous and pulsatile GnRH are always equivalent', 'GnRH acts only on the adrenal gland', 'GnRH is stored in ovarian follicles only'], answer: 0, explanation: 'Pulsatile GnRH sustains and patterns LH/FSH secretion, whereas continuous agonist exposure can downregulate pituitary responsiveness.', trap: 'Frequency is part of the signal, not background noise.' },
  { id: 'l27-kiss1-steroid-direction', lecture: 27, block: 'Final', topic: 'Fertility', stem: 'Adult female mice are left intact, ovariectomised (OVX), or ovariectomised with oestradiol replacement for 7 days. Arcuate Kiss1 mRNA rises after OVX and is suppressed by oestradiol, whereas AVPV Kiss1 mRNA falls after OVX and is restored by oestradiol. Which interpretation is best supported?', options: ['Oestradiol suppresses Kiss1 transcription everywhere, so both nuclei relay negative feedback', 'Ovariectomy surgery non-specifically disturbs hypothalamic transcription, masking any steroid effect', 'One steroid regulates the two populations in opposite directions, fitting ARC to negative and AVPV to positive feedback', 'The mRNA changes prove AVPV terminals release more kisspeptin onto GnRH neurons in intact mice'], answer: 2, explanation: 'Oestradiol replacement reverses each change, so the steroid, not the surgery, controls Kiss1 in both nuclei, but with opposite sign. ARC Kiss1 being suppressed by oestradiol fits a negative-feedback relay restraining GnRH pulses. AVPV Kiss1 being stimulated by oestradiol fits the positive-feedback drive that builds the preovulatory surge. Near-universal ERα co-expression suggests oestradiol acts directly on the Kiss1 cells.', trap: 'Assuming oestradiol has a single direction of effect on kisspeptin, or reading an mRNA change as proof of altered peptide release.' },
  { id: 'l27-nkb-antagonist-pulses', lecture: 27, block: 'Final', topic: 'Fertility', stem: 'An NK3R (neurokinin B receptor) antagonist, MRK-08, is infused into the brain of ovariectomised ewes while blood is sampled frequently for LH. Which outcome, with its reason, fits the lecture\'s model?', options: ['LH pulses persist unchanged, because NKB acts as a releasing factor only on pituitary gonadotrophs', 'LH pulse frequency rises, because NKB is the signal that normally terminates each GnRH pulse', 'LH pulses persist, because arcuate kisspeptin neurons make kisspeptin but not neurokinin B', 'LH pulses are suppressed, because NKB signalling within the arcuate KNDy network helps drive the pulse generator'], answer: 3, explanation: 'Arcuate kisspeptin neurons co-express NKB and dynorphin (KNDy) and are proposed to generate GnRH pulses, with NKB as the stimulatory, synchronising signal. Central NK3R blockade removes that drive, and the slide shows LH pulses suppressed in OVX ewes, in parallel with central kisspeptin antagonism. LH pulses serve as the read-out of GnRH pulses.', trap: 'Confusing NKB with dynorphin: in the KNDy model dynorphin, not NKB, is the inhibitory signal that ends a pulse.' },
  { id: 'l27-ablation-compensation', lecture: 27, block: 'Final', topic: 'Fertility', stem: 'Kiss1-Cre mice are crossed with Cre-activated diphtheria-toxin mice, killing kisspeptin cells from early development. Females still enter puberty and are fertile, with smaller ovaries, whereas acute ablation of kisspeptin neurons in adults impairs fertility. Which conclusion is best supported?', options: ['The developing circuit compensates for early loss, so the result does not show kisspeptin is unnecessary in normal animals', 'Kisspeptin has no physiological role in GnRH secretion, because puberty proceeds without kisspeptin cells', 'The toxin must have failed to kill most kisspeptin cells, because fertility was preserved after ablation', 'Puberty is timed by the ovaries rather than the brain, because ovaries still matured without kisspeptin'], answer: 0, explanation: 'Removing a cell type before the network matures lets other inputs reorganise to support GnRH output, so a developmental ablation tests the adapted system, not the normal one. Acute adult ablation impairs fertility, which shows that necessity depends on when the loss occurs. The smaller ovaries suggest the compensation is incomplete.', trap: 'Reading a normal phenotype after developmental ablation as proof that the ablated cells are dispensable.' },
  { id: 'l27-kiss1r-ko-ovx-obesity', lecture: 27, block: 'Final', topic: 'Fertility', stem: 'Female Kiss1r knockout mice are obese, but they are also hypogonadal. Both knockout and wild-type females are ovariectomised, and the knockouts still carry more fat mass. What does this ovariectomy comparison add?', options: ['It proves kisspeptin acts directly on adipocytes to limit fat storage in females', 'It shows the obesity is not explained solely by missing ovarian oestradiol, since both groups lack ovaries', 'It shows that residual ovarian oestradiol is what causes the knockout\'s weight gain', 'It shows the knockouts become obese mainly because they eat more than control mice'], answer: 1, explanation: 'Ovariectomy equalises gonadal oestradiol across genotypes, removing the hypogonadism confound. A persisting difference in fat mass means kisspeptin signalling affects energy balance at least partly independently of ovarian steroids. The slides point to reduced energy expenditure, especially in the dark phase, together with altered BAT Ucp1. A global knockout still cannot show whether Kiss1r acts in the brain or the periphery.', trap: 'Jumping from \'not explained by oestradiol loss\' to a specific site of action, or assuming the obesity must come from overeating.' },
  { id: 'l27-median-eminence-terminals', lecture: 27, block: 'Final', topic: 'Fertility', stem: 'An anterograde tracer shows arcuate kisspeptin fibres reaching the external zone of the ovine median eminence, and kisspeptin increases GnRH release from isolated median-eminence explants. Which conclusion does this pair of results best support?', options: ['Kisspeptin acts only on GnRH cell bodies in the preoptic area and never at the median eminence', 'Kisspeptin stimulates gonadotrophs directly, so GnRH is bypassed in the pituitary response', 'Kisspeptin can stimulate GnRH release at nerve terminals in the median eminence, without the GnRH cell bodies', 'Terminal action shows that GPR54 on GnRH cell bodies plays no part in controlling GnRH secretion'], answer: 2, explanation: 'The median-eminence explant contains GnRH axon terminals but no GnRH somata, so increased GnRH release there means kisspeptin can act at or near the terminals. The tracer data provide the anatomical route from arcuate kisspeptin cells to the external zone. This shows sufficiency at one site, alongside evidence that more than 90% of GnRH somata express GPR54.', trap: 'Turning \'can act at terminals\' into \'acts only at terminals\', or only at somata.' },
  { id: 'l28-proteostasis', lecture: 28, block: 'Final', topic: 'Ageing and degeneration', stem: 'Which combination best characterises the ageing brain relative to a young one?', options: ['Massive neuronal loss across all cortical regions as the primary feature', 'Complete failure of synaptic transmission', 'Declining proteostasis and mitochondrial function with synaptic and dendritic change, often without large-scale neuron loss', 'Loss of the ability to form any new memories in every individual'], answer: 2, explanation: 'Normal ageing is dominated by subcellular and synaptic change — impaired protein quality control, mitochondrial dysfunction, oxidative and inflammatory load, white-matter alteration — rather than by widespread neuronal death.', trap: 'The old picture of steady neuron loss from early adulthood overstates it; synaptic and connectivity change carries more of the functional effect.' },
  { id: 'l28-vs-disease', lecture: 28, block: 'Final', topic: 'Ageing and degeneration', stem: 'What most usefully distinguishes neurodegenerative disease from normal ageing?', options: ['Disease shows selective vulnerability of particular cell populations with progression beyond the age-typical range', 'Only disease involves any protein aggregation', 'Ageing is reversible whereas disease is not', 'Ageing spares the brain entirely'], answer: 0, explanation: 'Neurodegenerative disorders target specific networks and cell types and progress beyond what age alone predicts. Age is the strongest risk factor, so the two overlap and are separated by pattern, selectivity and rate.', trap: 'Age-related change and disease lie on overlapping distributions; the boundary is quantitative and regional, not a clean binary.' },
  { id: 'l28-pd-presymptomatic-loss', lecture: 28, block: 'Final', topic: 'Ageing and degeneration', stem: 'A drug that completely halts further loss of substantia nigra dopaminergic neurons is started on the day Parkinson\'s disease is diagnosed from motor signs. Which outcome is most likely?', options: ['Motor signs resolve because surviving neurons regrow their lost striatal projections once degeneration stops', 'Motor signs are unaffected because they arise from Lewy bodies in striatal neurons rather than from dopamine loss', 'Motor signs resolve fully because diagnosis normally occurs when only a small fraction of nigral neurons are lost', 'Further decline may slow, but existing deficits largely persist because half or more of the nigral neurons were already lost'], answer: 3, explanation: 'Motor signs appear only after about 50–70% of SNpc dopaminergic neurons and their striatal projections have been lost, so caudate and putamen are already heavily deafferented at diagnosis. Halting further loss protects what remains but does not replace the dopaminergic input that is gone, so dopamine replacement would still be needed. Lewy pathology and depression often come before motor signs, which is why disease modification would ideally start earlier.', trap: 'Treating the moment of motor diagnosis as the start of the disease, when most of the nigrostriatal loss has already happened.' },
  { id: 'l28-ldopa-dyskinesia', lecture: 28, block: 'Final', topic: 'Ageing and degeneration', stem: 'After 5–8 years of oral L-DOPA, most patients with Parkinson\'s disease develop motor fluctuations and dyskinesias. Which explanation best fits the lecture?', options: ['Ongoing loss of dopaminergic neurons plus intermittent dosing makes striatal dopamine availability swing between doses', 'L-DOPA cannot cross the blood–brain barrier, so escalating doses eventually cause abnormal movements peripherally', 'L-DOPA is converted to acetylcholine in the striatum, creating a cholinergic excess that drives involuntary movement', 'Lewy-body spread into motor cortex causes the dyskinesias, independent of how dopamine is replaced'], answer: 0, explanation: 'L-DOPA is a dopamine precursor that restores striatal dopamine. The slides blame the late complications on two things acting together: continued loss of dopaminergic neurons and intermittent availability of the drug. With fewer neurons left to buffer each dose (context beyond the slides), oral dosing produces peaks and troughs in striatal dopamine, which show up as fluctuations and dyskinesias.', trap: 'Blaming simple drug toxicity or tolerance instead of the interaction between ongoing degeneration and pulsatile replacement.' },
  { id: 'l28-spine-resilience', lecture: 28, block: 'Final', topic: 'Ageing and degeneration', stem: 'Post-mortem prefrontal tissue is compared across pathology-free controls, cognitively normal people whose brains contain Alzheimer pathology, and people with Alzheimer dementia. Spine density is preserved in the cognitively normal pathology group but reduced in dementia. What is the strongest inference?', options: ['Amyloid plaques play no role in Alzheimer\'s disease and should be abandoned as a therapeutic target', 'Preserved dendritic spines may confer cognitive resilience, so pathology burden alone does not decide dementia', 'Plaques directly cause spine loss, because spine density falls in proportion to plaque burden in every group', 'The data prove that drugs raising spine density will prevent dementia in people with Alzheimer pathology'], answer: 1, explanation: 'The design compares two groups with Alzheimer pathology but different clinical outcomes, and dendritic spine density is the structural variable that separates them. That supports spine plasticity as a candidate resilience mechanism, consistent with the slide\'s warning that plaque load does not necessarily track disease. Because the data are cross-sectional post-mortem human tissue, they show an association, not that raising spines would prevent dementia.', trap: 'Turning a post-mortem association into a guarantee that an intervention will work, or swinging to the opposite claim that plaques are irrelevant.' },
  { id: 'l28-ms-inflammation-vs-degeneration', lecture: 28, block: 'Final', topic: 'Ageing and degeneration', stem: 'A drug that blocks immune-cell migration across the blood–brain barrier is tested in relapsing–remitting and in primary progressive multiple sclerosis. Based on the lecture\'s pathomechanism model, which prediction is best?', options: ['Equal benefit in both forms, because all MS disability is caused directly by T-cell cytokine release', 'Greater benefit in primary progressive MS, because inflammation grows steadily as disability accumulates', 'Greater benefit in relapsing–remitting MS, because inflammation dominates early while later disability tracks neurodegeneration', 'No benefit in either form, because MS lesions sit in grey matter beyond the reach of circulating immune cells'], answer: 2, explanation: 'In the slide\'s model, inflammation and repair capacity are highest in relapsing–remitting disease and taper as the disease becomes progressive, while neurodegeneration rises and drives accumulating disability. Blocking lymphocyte entry, as natalizumab does, targets the inflammatory phase in which immune cells cross a damaged barrier. It should therefore reduce relapses more than it slows progressive neurodegeneration.', trap: 'Assuming an immune-mediated disease is equally immune-driven at every stage, so any anti-inflammatory drug should slow all disability.' },
  { id: 'l29-cochlear', lecture: 29, block: 'Final', topic: 'Sensory prostheses', stem: 'Why does a cochlear implant help a patient with severe hair-cell loss when a hearing aid does not?', options: ['It amplifies sound more powerfully than a hearing aid', 'It regenerates inner hair cells', 'It bypasses hair-cell transduction and stimulates surviving spiral ganglion neurons directly', 'It restores middle-ear conduction'], answer: 2, explanation: 'A hearing aid amplifies acoustic input, which still requires working transduction. An implant converts sound into patterned electrical stimulation of the auditory nerve, so it depends on surviving spiral ganglion neurons rather than on hair cells.', trap: 'The implant substitutes for transduction, not for the nerve — outcomes fall when the spiral ganglion population is depleted.' },
  { id: 'l29-limits', lecture: 29, block: 'Final', topic: 'Sensory prostheses', stem: 'Cochlear-implant users typically understand speech in quiet far better than they perceive music. The best mechanistic explanation is:', options: ['Music is processed outside the auditory system', 'A limited electrode count and current spread give coarse spectral resolution, which speech tolerates better than pitch perception does', 'Implants deliberately filter out musical frequencies', 'Speech conveys no temporal information'], answer: 1, explanation: 'Channel interaction and few effective electrodes blur the tonotopic detail needed for fine pitch, while speech in quiet stays intelligible from a coarse spectral envelope plus temporal cues.', trap: 'Good speech scores in quiet do not generalise to music, background noise or talker separation — those failure modes are different.' },
  { id: 'l29-retinal-implant-candidate', lecture: 29, block: 'Final', topic: 'Sensory prostheses', stem: 'Two blind patients are assessed for an Argus II-style epiretinal implant. Patient A has lost photoreceptors but retains retinal ganglion cells; Patient B has lost most retinal ganglion cells and optic-nerve axons. Which prediction is best supported?', options: ['Both benefit equally, because the implant supplies its own camera and image processor', 'Patient B benefits more, because the array can substitute for lost ganglion-cell output', 'Neither benefits, because visual cortex stops responding after several years of blindness', 'Patient A benefits more, because evoked activity must still exit through ganglion cells and optic nerve'], answer: 3, explanation: 'A retinal implant stimulates retinal neurons, and their output still has to travel along ganglion-cell axons in the optic nerve to the LGN and visual cortex. Patient A has lost only the transduction stage, so the downstream route is intact; Patient B has lost that route, so the device has nothing to drive. A prosthesis can only replace a stage that sits upstream of an intact pathway.', trap: 'Assuming the device\'s camera and processor make the patient\'s own retinal output pathway unnecessary, when the implant replaces only the transduction stage.' },
  { id: 'l29-chrimsonr-depolarisation', lecture: 29, block: 'Final', topic: 'Sensory prostheses', stem: 'In the optogenetic vision case, an AAV vector expressed ChrimsonR in foveal retinal ganglion cells of a patient whose photoreceptors had degenerated, and goggles projected ~595 nm pulses onto the retina. What is the immediate effect of a pulse on a transduced ganglion cell?', options: ['The light-gated cation channel opens and the ganglion cell depolarises toward firing', 'Rod and cone opsins are regenerated, restoring the normal phototransduction cascade', 'The channel hyperpolarises the ganglion cell, copying the photoreceptor light response', 'Bipolar cells detect the pulse and release glutamate onto the ganglion cell'], answer: 0, explanation: 'ChrimsonR is a light-gated cation channel activated by amber light (~590 nm). When the pulse opens it, cations flow in and the ganglion cell depolarises and fires. Because the light sensor now sits in the ganglion cell itself, the therapy bypasses the lost photoreceptors, and the resulting spikes travel along the optic nerve as ordinary RGC output.', trap: 'Assuming the gene therapy repairs photoreceptors, or carrying over the photoreceptor\'s hyperpolarising light response, instead of recognising that a downstream cell has been made into the light sensor.' },
  { id: 'l29-short-basal-array', lecture: 29, block: 'Final', topic: 'Sensory prostheses', stem: 'A patient has severe high-frequency hearing loss but useful low-frequency hearing. Surgeons choose a short electrode array that occupies only the basal part of the cochlea. What is the mechanistic rationale?', options: ['Low frequencies are mapped to the base, so a short basal array restores bass sounds', 'High frequencies are mapped to the base, so the array supplies them and spares the apex', 'Above about 3 kHz hearing relies on phase-locking, so electrode position no longer matters', 'A short array bypasses the auditory nerve and drives the cochlear nucleus directly'], answer: 1, explanation: 'The cochlea is tonotopic: high frequencies are coded near the base and low frequencies near the apex. A short basal array can supply the missing high-frequency place information while leaving the apical region, which still supports the patient\'s low-frequency hearing, undisturbed. Phase-locking carries only low frequencies, so high-frequency hearing depends on stimulating the correct place.', trap: 'Reversing the tonotopic map, or assuming temporal coding can stand in for place coding at high frequencies.' },
  { id: 'l29-ensemble-decoding-inference', lecture: 29, block: 'Final', topic: 'Sensory prostheses', stem: 'Owl monkeys performed reaching tasks while ensembles of premotor and primary motor cortex neurons were recorded. Linear and neural-network decoders predicted hand trajectory well enough to drive a robot arm in real time. What does this result most directly establish?', options: ['Each recorded neuron alone encodes the complete trajectory of the reach', 'The recorded neurons are proven to cause the monkey\'s arm movements', 'Population activity carries enough movement information to drive an external device', 'A decoder trained once at the start stays accurate across the whole two years'], answer: 2, explanation: 'Each neuron\'s activity was only variably correlated with movement, but combining many neurons allowed accurate real-time prediction of hand position. That shows the ensemble signal can be decoded and used for control, which is the principle behind motor BCIs. Decoding is a read-out, so it does not show that these neurons cause the movement, and the networks were retrained during the recording period.', trap: 'Treating successful decoding, which is a correlation between activity and movement, as proof that the recorded cells cause the movement.' },
  { id: 'l30-scar', lecture: 30, block: 'Final', topic: 'Spinal cord repair', stem: 'Why is “the glial scar only blocks repair” inaccurate?', options: ['CSPGs never inhibit axons', 'Astrocytes disappear after injury', 'Only microglia respond to injury', 'Reactive astrocyte borders can also contain inflammation and preserve tissue'], answer: 3, explanation: 'Scar-associated signals can inhibit axon growth, while reactive borders can limit inflammatory spread and protect surviving tissue. Function depends on time, state and intervention.', trap: 'A structure can have both protective and inhibitory effects.' },
  { id: 'l30-hmpc-graft-gone', lecture: 30, block: 'Final', topic: 'Spinal cord repair', stem: 'Human mesenchymal precursor cells grafted into contused nude-rat spinal cord are undetectable one month later. Yet treated rats keep higher BBB scores, more spared tissue and smaller cysts than injury-only controls. Which interpretation is best supported?', options: ['Graft cells became neurons that rebuilt the hindlimb locomotor circuitry before disappearing', 'The BBB gain is probably a scoring artefact, because no graft cells remain to explain it', 'Immune rejection of the human cells caused inflammation that happened to benefit recovery', 'Early graft effects on the lesion environment spared tissue, so lasting cell replacement was not required'], answer: 3, explanation: 'A benefit that outlasts the graft argues against cell replacement. The slides propose that the cells act while they are present, by suppressing immune damage, boosting endogenous repair, supporting remyelination and depositing matrix that offsets the inhibitory scar. This fits the increased tissue sparing and smaller cysts. The mechanism is still unresolved, and the evidence is from rats.', trap: 'Assuming that functional benefit from a stem-like cell graft means the graft turned into new neurons.' },
  { id: 'l30-ampa-only-blockade', lecture: 30, block: 'Final', topic: 'Spinal cord repair', stem: 'After a spinal contusion, a drug selectively blocks AMPA receptors at the lesion but leaves NMDA receptors untouched. Based on the excitotoxic chain in the lecture, what is the most likely outcome?', options: ['Less Na⁺-driven swelling and necrosis, while NMDA-mediated Ca²⁺ entry can still drive calpain-linked apoptosis', 'Complete neuroprotection, because all glutamate-triggered cell death runs through AMPA receptors', 'Less calpain-linked apoptosis, but more osmotic swelling because Na⁺ entry is redirected through NMDA receptors', 'Prevention of mitochondrial ROS production, because AMPA receptors are the main route of Ca²⁺ entry'], answer: 0, explanation: 'The slides split glutamate excitotoxicity into two arms. AMPA receptors let Na⁺ in, causing osmotic imbalance, swelling and necrosis. NMDA receptors let Ca²⁺ in, activating calmodulin, kinases and calpain toward apoptosis, and Ca²⁺ overload in mitochondria generates ROS. Blocking only AMPA receptors should blunt the necrotic arm while the Ca²⁺-driven apoptotic and oxidative arms continue.', trap: 'Treating glutamate excitotoxicity as one pathway, so that blocking one receptor class is assumed to block all of it.' },
  { id: 'l30-ipsc-growth-no-function', lecture: 30, block: 'Final', topic: 'Spinal cord repair', stem: 'Human iPSC-derived neural stem cells grafted into injured rat spinal cord survive for months. They extend axons over very long distances above and below the lesion and form synaptic structures, yet locomotor function does not improve. What is the strongest conclusion?', options: ['The graft-derived axons must have stalled at the lesion border instead of growing beyond it', 'Axon growth and synapse formation are not sufficient; recovery also needs correctly targeted, functional circuits', 'Human iPSC-derived cells cannot survive long enough in the injured adult spinal cord to matter', 'The result shows the glial scar blocks all graft-derived axons from reaching host targets'], answer: 1, explanation: 'The anatomical outcome was striking: surviving grafts sent axons over long distances and made synaptic contacts. The lack of functional gain shows that growth alone is not enough. Axons must reach appropriate targets and form working circuits, without harmful miswiring, before behaviour changes.', trap: 'Equating regeneration measured in tissue sections with recovery measured in behaviour.' },
  { id: 'l30-cntf-cortical-targeting', lecture: 30, block: 'Final', topic: 'Spinal cord repair', stem: 'UWA researchers delivered CNTF by injecting an AAV vector into motor cortex, rather than applying CNTF protein to the spinal lesion. What is the main mechanistic rationale for this design?', options: ['The fluorescent CNTF reporter removes the need for separate anterograde tracing of corticospinal axons', 'Cortical injection keeps CNTF away from the spinal cord, so only neurons in the brain are affected', 'CST neurons express CNTF receptor α, so transducing their cell bodies gives sustained, tract-specific support', 'The vector converts reactive astrocytes at the lesion into new corticospinal projection neurons'], answer: 2, explanation: 'CST neurons carry CNTF receptor α, and CNTF supports the survival and long-distance regrowth of injured corticospinal neurons. Transducing the parent neurons means the injured population itself makes the factor for a long time after one injection. This targets the CST rather than bathing the whole lesion. Treated rats had better BBB, ladder and gait scores, with labelled CST axons extending beyond the lesion.', trap: 'Assuming a growth factor must be delivered where the axons are damaged, rather than to the neurons whose growth programme it needs to switch on.' },
  { id: 'l30-macrophage-depletion-timing', lecture: 30, block: 'Final', topic: 'Spinal cord repair', stem: 'A drug that depletes infiltrating macrophages is given continuously from day 2 to week 8 after a rat spinal contusion. Based on the lecture\'s account of the immune response, which prediction is most defensible?', options: ['Uniform benefit, because infiltrating macrophages only release TNF-α, ROS, NO and proteases', 'No effect, because macrophages do not enter the injured cord until months after injury', 'Full oligodendrocyte protection, because resident microglia are removed along with the macrophages', 'Less early bystander damage, offset by poorer debris clearance and loss of later reparative signalling'], answer: 3, explanation: 'Macrophages arrive by day 2, peak at days 5–7 and persist for weeks to months. Early on they cause collateral damage through TNF-α, IL-1, IL-6, ROS, NO and proteases. They also clear debris and release protective cytokines that support wound healing and repair (the M1-to-M2 shift). Depleting them across the whole window trades one effect for the other, which is why the slides stress that timing is critical.', trap: 'Labelling an immune cell type as simply good or bad instead of reasoning about its state and timing.' }
];

// Optional per-question notes on why each distractor is wrong, keyed by
// question id then by the original option index. Used only on a wrong
// answer; questions without an entry degrade to the Examiner trap line.
const distractorNotes = {
  'l1-origin': {
    0: "Neural crest gives rise to PNS Schwann cells and neurons, not CNS microglia — that is the trap being set.",
    1: "In the healthy adult brain microglia self-renew locally; bone-marrow monocytes do not routinely replenish them.",
    3: "Radial glia are neuroectodermal progenitors for neurons and macroglia, not the source of microglia."
  },
  'l1-myelin': {
    1: "Schwann cells are peripheral and normally form one internode on one axon; they do not myelinate CNS axons.",
    2: "Oligodendrocytes are neuroectodermal, not neural-crest derived — neural crest supplies PNS glia.",
    3: "Peripheral myelin is made by Schwann cells; microglia are immune cells and do not myelinate."
  },
  'l2-retrograde': {
    1: "Neurotrophins act through membrane Trk receptors and signalling endosomes, not by diffusing through the nucleus.",
    2: "Trk stays a receptor tyrosine kinase; it is not converted into a neurotransmitter.",
    3: "Survival is driven by target-derived Trk signalling reaching the soma, not passive somatic calcium sensing."
  },
  'l2-competition': {
    0: "Trophic support is limiting, not unlimited — that scarcity is exactly what drives the competition.",
    1: "Developmental death is competitive and target-dependent, not a synchronous intrinsic suicide of every neuron.",
    3: "Survival depends on target-derived neurotrophins, not on myelination selecting which soma lives."
  },
  'l3-netrin': {
    0: "The higher final concentration is crossed, so absolute concentration alone cannot explain the stop.",
    1: "Presentation geometry changes the response, not the molecular identity of the proteoglycan.",
    2: "Stopping at the abrupt boundary shows that the neurite does detect extracellular-matrix guidance information."
  },
  'l3-ephrin': {
    0: "Action potentials come from voltage-gated channels, not from graded guidance-molecule expression.",
    2: "Cerebrospinal fluid is produced by the choroid plexus; ephrin gradients encode position, not fluid.",
    3: "Vesicle fusion is a synaptic release event, unrelated to Eph/ephrin topographic mapping."
  },
  'l4-apoptosis': {
    0: "Osmotic lysis without signalling is necrosis; trophic withdrawal drives regulated, caspase-dependent apoptosis.",
    1: "Action-potential broadening is an excitability change, not a cell-death pathway.",
    2: "Synaptic potentiation is a form of plasticity, not a mechanism of programmed cell death."
  },
  'l4-pruning': {
    0: "Pruning is compartment-specific and can spare the soma; it does not necessarily kill the neuron.",
    2: "Apoptosis removes the whole cell, not just synapses — that is what separates it from pruning.",
    3: "The two differ in scale and mechanism; treating them as identical is the error being tested."
  },
  'l4-target-size': {
    0: "Survival changes when target territory changes, so a fixed cell-autonomous timer cannot be the whole explanation.",
    2: "The target changes trophic access; it does not mechanically pull motor-neuron somata into the spinal cord.",
    3: "Afferents matter, but the limb-target manipulation directly shows a target-associated survival influence."
  },
  'l4-curare': {
    0: "The experiment modifies activity within an intact target relationship; it does not make targets irrelevant.",
    1: "Curare blocks nicotinic neuromuscular transmission; it does not substitute for every neurotrophin receptor.",
    2: "Apoptosis is executed by regulated intracellular pathways, not by muscle contraction itself."
  },
  'l4-directionality': {
    1: "This reverses the directions: target-to-soma signalling is retrograde, while afferent influence travels anterogradely into the population.",
    2: "The terms describe long-range direction in a circuit/axon and are not synonyms for transmitter diffusion across one cleft.",
    3: "Cargo and signals move within axons; the entire axon need not move for either influence."
  },
  'l4-tunel': {
    0: "Swelling and membrane rupture support classical necrosis, not apoptosis.",
    1: "Group lysis with inflammation is the necrotic pattern in the lecture comparison.",
    3: "Uncontrolled osmotic swelling after ATP failure is classical necrosis; TUNEL can occur in more than one death context."
  },
  'l4-bdnf-redundancy': {
    1: "The rescue itself shows that BDNF can support vulnerable cells, so 'no survival action' contradicts the result.",
    2: "Rescue shows capacity in a challenge; it does not prove BDNF is the sole endogenous necessary factor.",
    3: "A normal developmental knockout can reflect redundancy or compensation and does not erase target dependence."
  },
  'l4-noncanonical': {
    0: "Apaf-1 and caspase-9 define intrinsic apoptosis; necroptosis instead centres on RIPK1/RIPK3 and MLKL.",
    1: "BCL-2 restrains mitochondrial apoptosis; pyroptosis is an inflammasome/gasdermin-pore pathway.",
    3: "Eph/ephrin guides topographic mapping; parthanatos involves PARP1 overactivation and AIF-associated death."
  },
  'l5-notch': {
    0: "Notch keeps cells as progenitors; it does not drive myelination, which is a later oligodendrocyte role.",
    2: "Microglia arise from the yolk-sac lineage, not from Notch signalling in neuroectodermal progenitors.",
    3: "Notch is a transcriptional signalling pathway, not a direct gate for sodium channels."
  },
  'l5-lineage': {
    0: "Lineage tracing follows cell descent, not electrophysiology such as membrane potential.",
    1: "Ligand–receptor binding is a biochemistry assay; lineage tracing tracks cell ancestry over time.",
    2: "Vesicle counts are a synaptic measure, unrelated to tracing which cell types a progenitor makes."
  },
  'l6-human': {
    0: "Claiming total absence overstates the negative case; the honest position is that the evidence is contested.",
    2: "Abundant, settled human neurogenesis is exactly what remains disputed — this overclaims certainty.",
    3: "Robust adult SVZ-to-olfactory turnover is a rodent finding; it is not established for adult humans."
  },
  'l6-stemcell': {
    0: "Staying alive for a day shows survival, not the self-renewal the question asks you to demonstrate.",
    2: "A single NeuN-positive snapshot shows differentiation, not maintenance of a progenitor pool.",
    3: "Presence of a growth factor is a culture condition, not evidence of self-renewal."
  },
  'l7-bbb': {
    0: "Astrocyte endfeet regulate and support the barrier but are not the tight-junction seal itself — the classic trap.",
    1: "Microglia are immune cells and play no structural role in the paracellular seal.",
    2: "Oligodendrocytes myelinate axons; they are not part of the blood–brain barrier."
  },
  'l7-states': {
    0: "Glia clearly change state; the problem is that binary labels are too coarse, not that states are fixed.",
    1: "Glia express rich transcriptional programmes — the claim that only neurons express genes is simply false.",
    2: "A1/A2 and M1/M2 describe reactive states, not fixed embryonic lineages."
  },
  'l8-chloride': {
    0: "Driving force Vm − ECl = +5 mV pushes Cl⁻ inward, not outward — you reversed the ion direction.",
    2: "Cl⁻ does enter, but for an anion inward movement is outward conventional current, not inward.",
    3: "Vm and ECl differ by 5 mV, so a driving force exists and net flux does occur."
  },
  'l8-drivingforce': {
    0: "With conductance fixed, current follows the driving force (Vm − Eion); conductance cannot make it rise here.",
    1: "Current only reverses sign when Vm crosses Eion; approaching it just shrinks the current toward zero.",
    2: "For I = g(Vm − Eion), current depends directly on voltage through the driving-force term."
  },
  'l9-minis': {
    1: "Higher postsynaptic gain would raise mini amplitude; amplitude is unchanged here, pointing presynaptic.",
    2: "Quantal size maps to amplitude, which did not change — frequency instead reflects release rate.",
    3: "A reversal-potential shift would alter amplitude or direction, not selectively raise event frequency."
  },
  'l9-binomial': {
    0: "Mean release is a product of n, p and q, not a sum — the model multiplies these terms.",
    1: "Release probability alone is insufficient; site number n and quantal size q also scale the mean.",
    3: "Membrane resistance shapes the postsynaptic response, not the binomial release mean."
  },
  'l10-calcium': {
    0: "A log–log slope near four is phenomenological cooperativity, not proof that exactly four ions bind.",
    1: "The exponent describes the calcium–release relationship, not a fixed number of fusing vesicles.",
    2: "Channel subunit count is unrelated to the measured calcium dependence of release."
  },
  'l10-sensor': {
    0: "AMPA receptors are postsynaptic and kinesin is a transport motor; neither triggers fast fusion.",
    1: "Clathrin and dynein act in endocytosis and transport, not in triggering calcium-evoked exocytosis.",
    2: "PSD-95 is a postsynaptic scaffold; it does not transport presynaptic vesicles."
  },
  'l11-ppr': {
    0: "High initial release probability usually gives depression (low ratio); facilitation implies a low starting p.",
    1: "Paired-pulse ratio is a presynaptic index; it does not certainly report postsynaptic receptor number.",
    3: "The ratio probes short-term dynamics within a pulse pair, not long-term depression."
  },
  'l11-ltp': {
    1: "Depolarisation does not close AMPA receptors; it relieves the NMDA Mg²⁺ block to admit calcium.",
    2: "The point of coincidence is to allow calcium entry through NMDA receptors, not to prevent it.",
    3: "CaMKII is activated downstream of the calcium signal, not degraded by depolarisation."
  },
  'l12-initiation': {
    1: "The AIS does contain K⁺ channels; its low threshold comes from high Na⁺-channel density, not their absence.",
    2: "The AIS is electrically continuous with the soma; isolation would prevent, not cause, initiation.",
    3: "The AIS is a spike-initiation zone, not a neuroendocrine secretory structure."
  },
  'l12-remodel': {
    0: "The direction of the excitability change depends on morphology and conductances; it is not always an increase.",
    1: "The AIS remodels in an activity-dependent way in mature neurons; it is not fixed after development.",
    2: "AIS plasticity tunes excitability and geometry, not the neuron’s transmitter identity."
  },
  'l13-complement': {
    0: "CR3 is a microglial receptor that recognises opsonised material; it does not synthesise C1q inside neurons.",
    2: "In the classical pathway C4 acts before C3, and the sequence is context-specific, not a fixed C3-then-C4 order.",
    3: "Complement-mediated pruning operates in the developing CNS, not only in adult peripheral nerves."
  },
  'l13-causality': {
    0: "Engulfment shows association; it cannot by itself prove microglia caused all of the synapse loss.",
    2: "Finding synaptic material inside microglia shows it was neuronal, which contradicts this option.",
    3: "This observation alone does not establish that complement is required — that needs a perturbation."
  },
  'l14-transduction': {
    1: "All-or-none and non-decrementing propagation describes action potentials, not graded receptor potentials — the classic trap.",
    2: "Receptor potentials depend directly on sensory transduction ion channels opening or closing in response to stimulus energy.",
    3: "Receptor potentials occur in specialised sensory endings or receptor cells, not restricted to myelinated axons."
  },
  'l16-feedback': {
    0: "Signals running from periphery to CNS are centripetal (afferent/feedforward), not centrifugal.",
    1: "Centrifugal control refers to top-down sensory modulation, not motor neuron interconnection.",
    3: "Muscle-to-tendon describes mechanical attachments, not neural feedback pathways."
  },
  'l18-bold': {
    0: "BOLD measures blood oxygenation dynamics, not direct electrical action potentials — activation maps are not literal spikes.",
    1: "BOLD reflects metabolic demand and neurovascular coupling across whole circuits, not a single neurotransmitter.",
    2: "BOLD operates on a millimetre and second timescale, far below single-cell voltage trace resolution."
  },
  'l19-contrast': {
    0: "Uniform illumination stimulates both centre and surround, cancelling out; early visual neurons encode spatial contrast rather than raw light levels.",
    2: "Centre–surround receptive fields analyse incoming visual scenes, not the iris colour of the eye itself.",
    3: "Centre–surround fields are sensory features of retinal ganglion and LGN neurons, not motor outputs."
  },
  'l20-haircells': {
    0: "Inner hair cells drive ~90–95% of auditory nerve afferents; outer hair cells primarily function as mechanical amplifiers.",
    1: "Middle-ear pressure is regulated by the Eustachian tube, not by sensory hair cells in the organ of Corti.",
    3: "Hair cells are specialised neuroepithelial sensory receptors in the inner ear, not central neurons."
  },
  'l22-hpa': {
    1: "Glucocorticoids provide negative feedback to inhibit CRH and ACTH release, preventing uncontrolled axis activation.",
    2: "Glucocorticoids act via nuclear and membrane receptors on neuroendocrine pathways, not by directly gating mechanosensitive hair-cell channels.",
    3: "Glucocorticoid secretion follows a circadian rhythm established by the SCN; negative feedback modulates amplitude rather than destroying the rhythm."
  },
  'l25-cerebellum': {
    0: "Purkinje cells are the sole output neurons of the cerebellar cortex; mossy fibres are afferents arising from brainstem and spinal nuclei.",
    2: "Climbing-fibre complex spikes act as powerful error/teaching signals that drive synaptic plasticity (LTD) at parallel fibre–Purkinje cell synapses.",
    3: "Both climbing and mossy fibres directly project into and synapse within the cerebellar cortex."
  },
  'l26-energy': {
    0: "This pattern is driven by hunger signals like ghrelin; leptin signals satiety and reverses this pattern.",
    1: "Leptin selectively excites anorexigenic (POMC) neurons while inhibiting orexigenic (AgRP/NPY) sub-populations, not global silencing.",
    2: "Leptin acts broadly on metabolic circuitry in the arcuate nucleus to regulate energy intake alongside reproductive permissive signals."
  },
  'l27-pulses': {
    1: "Continuous GnRH downregulates pituitary receptors and suppresses gonadotrophin release, whereas pulsatile release sustains secretion.",
    2: "GnRH is synthesised in the hypothalamus and acts on anterior pituitary gonadotrophs, not the adrenal gland.",
    3: "GnRH is a hypothalamic neuropeptide secreted into the hypophyseal portal circulation, not stored in ovarian follicles."
  },
  'l30-scar': {
    0: "Chondroitin sulphate proteoglycans (CSPGs) are well-established molecular inhibitors of axonal outgrowth.",
    1: "Astrocytes proliferate, hypertrophy, and form a dense reactive border surrounding the injury lesion.",
    2: "Spinal cord injury triggers a multi-cellular response involving astrocytes, microglia, oligodendrocytes, pericytes, and immune cells."
  },
  'l5-noggin-redundancy': {
    1: "A mild phenotype means something compensated, not that the gene does nothing - the double knockout proves noggin contributes.",
    2: "Redundancy is parallel action, not a linear sequence; if chordin were downstream of noggin the single null would already be severe.",
    3: "The severe double-null phenotype shows BMP inhibition is essential, so BMP signalling is very much in play."
  },
  'l6-gaba-immature': {
    0: "The receptor subtype is not what changes - the same GABA-A channel behaves differently because the chloride gradient differs.",
    1: "GABA is not converted to glutamate; the transmitter is unchanged and only the direction of chloride flux differs.",
    2: "Immature neurons do have a resting potential; it sits at a level that makes chloride efflux depolarising."
  },
  'l6-brdu-timing': {
    1: "Doublecortin is a valid immature-neuron marker; the problem is timing, not the marker.",
    2: "More animals gives a tighter endpoint estimate but still cannot date when any cell divided.",
    3: "Immunohistochemistry detects immature neurons well - that is exactly what doublecortin staining does."
  },
  'l7-neurovascular': {
    0: "The size of the calcium signal does not by itself select a direction; the same rise can produce either outcome.",
    2: "Aquaporin-4 handles water and solute exchange at the endfoot and does not set the vasodilation-versus-constriction branch.",
    3: "The branch is decided by astrocytic arachidonic acid metabolism, not by the polarity of the synapse."
  },
  'l7-microglia-origin': {
    0: "Early yolk-sac colonisation before barrier closure is what makes ongoing monocyte replenishment unnecessary.",
    1: "Microglia are myeloid in origin, unlike astrocytes and oligodendrocytes, which are neuroectodermal.",
    3: "Resident microglia proliferate readily - they self-renew and expand at injury sites."
  },
  'l7-cspg-scar': {
    0: "Chondroitin sulphate proteoglycans are the principal growth-inhibitory component of the scar.",
    2: "Chondroitinase digests matrix proteoglycans; it does not convert one glial cell type into another.",
    3: "Digesting proteoglycans reduces scar inhibition - the risk is removing too much, not accelerating permanence."
  },
  'l5-reelin': {
    0: "Reeler cortex contains a broadly normal complement of neurons — proliferation continues; it is their final positioning that is disrupted.",
    1: "Radial glia are present and migration still occurs; Reelin acts on where migrating cells detach and settle, not on whether the scaffold exists.",
    2: "Reelin is a secreted extracellular-matrix glycoprotein acting on migration, with no role in assembling voltage-gated sodium channels."
  },
  'l5-inside-out': {
    0: "Deep layers are generated first, so later-born cells cannot precede them — this reverses the birthdating result.",
    2: "Earlier-born neurons stay in place; later cohorts settle above them rather than pushing them back toward the ventricle.",
    3: "Radial glia provide the migratory scaffold, and disrupting it disorganises laminar position."
  },
  'l9-electrical-delay': {
    1: "That delay is the signature of chemical transmission — calcium entry, vesicle fusion, diffusion and receptor binding all take time.",
    2: "Electrical coupling attenuates signals; the postsynaptic response is typically smaller, not amplified.",
    3: "Current flows directly through the junction; second-messenger cascades are a chemical-synapse feature."
  },
  'l9-connexin': {
    0: "One connexin is a single subunit. Six form a connexon, and the channel needs a connexon from each cell.",
    1: "SNAREs mediate vesicle fusion at chemical synapses; they do not form gap-junction pores.",
    3: "Voltage-gated sodium channels carry current across one membrane; they do not couple two cytoplasms."
  },
  'l9-rectifying': {
    0: "Direct current transfer without transmitter is the defining evidence for an electrical, not a chemical, synapse.",
    2: "The postsynaptic membrane conducts normally — the asymmetry lies in the junction, not in either cell membrane.",
    3: "Most gap junctions are bidirectional, but this experiment is the classic demonstration that some are not."
  },
  'l15-pathways': {
    0: "Neither pathway decussates in the midbrain; this is the level of the colliculi and cerebral peduncles.",
    1: "This reverses the two pathways. Dorsal columns ascend ipsilaterally and cross high, in the medulla.",
    3: "Both pathways cross; that is why cortical representation is contralateral to the stimulated side."
  },
  'l17-unmasking': {
    0: "Sprouting over useful distances takes days to weeks, so it cannot explain change measurable within hours.",
    2: "Adult cortical neurogenesis is not an established mechanism for rapid somatosensory remapping.",
    3: "Skull properties are fixed and would not produce a lesion-specific change in cortical receptive fields."
  },
  'l21-duplex': {
    1: "The head shadow does dominate at high frequencies, but it produces interaural level differences, not time differences.",
    2: "The whole point of duplex theory is that the two cues are not equally reliable across the spectrum.",
    3: "A source directly overhead is on the midline and produces near-zero interaural differences of either kind."
  },
  'l24-tms': {
    0: "Excitability can rise through synaptic and membrane changes; an axon count is not measured by TMS.",
    2: "Skeletal muscle fibres are not replaced by practice on this timescale, and the MEP change is neural.",
    3: "Spinal contributions are real but are not isolated by this measurement — cortical changes are equally consistent with it."
  },
  'l28-vs-disease': {
    1: "Some aggregation occurs in ageing brains too; the distinction is burden, distribution and progression rather than presence.",
    2: "Neither is reversible in any straightforward sense, so this does not separate them.",
    3: "Ageing produces measurable synaptic, metabolic and white-matter change in the brain."
  },
  'l29-cochlear': {
    0: "Amplification cannot help when the transduction step itself has failed; the implant works by bypassing it.",
    1: "Mammalian inner hair cells do not regenerate; the implant substitutes for them rather than restoring them.",
    3: "Middle-ear conduction problems are treated surgically or with amplification, not by cochlear implantation."
  },
  'l24-vgat-silencing': {
    1: "VGAT marks GABAergic interneurons, so activating them inhibits rather than excites corticospinal output.",
    2: "The slides report that inactivation also disrupted ongoing movement, so cortex is needed beyond the initiation step.",
    3: "Chemosensation tells the mouse where the water is; it does not replace the cortical command that silencing removes."
  },
  'l24-pt-subtype-timing': {
    0: "This reverses the finding: thalamus-projecting cells carry preparatory activity and medulla-projecting cells carry movement-related activity.",
    2: "The two subtypes are defined by different targets; each avoids the other's thalamic or medullary destination.",
    3: "Preparatory activity is recorded in PT-upper neurons in motor cortex itself, so cortex is active before movement."
  },
  'l24-spine-learning-control': {
    0: "A matching rise in sensory cortex would point to a non-specific effect of training and weaken the learning-specific claim.",
    1: "Total spine number actually returns toward baseline as pre-existing spines are eliminated; the lasting change is in which spines survive.",
    3: "The changes were confined to contralateral cortex, and a larger ipsilateral rise would conflict with crossed control of the trained limb."
  },
  'l24-optical-spine-erasure': {
    0: "The second skill, encoded in the same region, survived, which rules out non-specific damage.",
    1: "Behaviour did change, because the linked skill degraded, and that change is what takes the evidence beyond correlation.",
    2: "Myelin plasticity also contributes to learning, but this experiment manipulated spines and selectively removed one skill."
  },
  'l25-purkinje-pacemaking': {
    1: "Firing continued after synaptic transmission was blocked, so parallel-fibre glutamate release cannot be what sustains it.",
    2: "Tetrodotoxin blocks voltage-gated Na⁺ channels; it does not enhance GABA-A inhibition, and inhibitory input had already been blocked.",
    3: "Climbing-fibre input is synaptic and was already blocked, and an input of at most about 1 Hz could not pace firing at 50–100 Hz."
  },
  'l25-conjunctive-ltd': {
    0: "This reverses both rules: parallel-fibre activity alone gives LTP, and pairing with the climbing fibre gives LTD.",
    2: "Repeated parallel-fibre activity alone does produce LTP, and pairing with the climbing fibre depresses the synapse rather than potentiating it.",
    3: "Both inputs being glutamatergic does not make the outcomes the same; climbing-fibre coincidence switches the outcome to LTD."
  },
  'l25-eyeblink-teaching-route': {
    0: "The pontine nuclei relay the tone CS as mossy fibres, so lesioning them removes the context route, not the US teaching signal.",
    1: "Granule cells and parallel fibres carry the CS and context signal; silencing them removes the tone's route, not the US instruction.",
    3: "The facial nucleus is the final motor output for both blinks; silencing it blocks blink expression, not the climbing-fibre teaching signal."
  },
  'l25-cf-spillover': {
    0: "The currents pass through AMPA and NMDA glutamate receptors, which gap-junction coupling would not activate.",
    1: "Purkinje cells are GABAergic, so they cannot be the source of a glutamate-receptor current in interneurons.",
    2: "Granule cells are driven by mossy fibres. The lecture describes climbing fibres reaching interneurons by spillover, not through the granule-cell pathway."
  },
  'l25-purkinje-thirst': {
    1: "The experiment shows that the cerebellum can modulate drinking; it does not show that it generates thirst or replaces hypothalamic osmosensing.",
    2: "Food intake, which also needs coordinated mouth movements, was unchanged, so a general motor side-effect does not fit the selective change in drinking.",
    3: "These are mouse chemogenetic results; they do not establish the cause of any human thirst disorder."
  },
  'l26-agrp-pomc-coactivation': {
    0: "α-MSH cannot dominate: AgRP GABA silences POMC output, and the AgRP peptide antagonises the very MC4R that α-MSH needs.",
    2: "The circuit is asymmetric, so the outputs do not cancel; the slides report increased intake on co-activation.",
    3: "Photostimulating AgRP neurons evokes eating within minutes, so the effect does not wait for slow neuropeptide release over days."
  },
  'l26-ghrelin-indirect-pomc': {
    0: "POMC neurons do not express GHSR, so no direct inhibitory route remains to keep suppression unchanged.",
    1: "POMC neurons have no GHSR for ghrelin to act on, unopposed or otherwise.",
    3: "Ghrelin signals through GHSR, not the leptin receptor; pSTAT3 is the slides' marker of leptin-responsive neurons."
  },
  'l26-double-lesion': {
    0: "VMH lesions cause obesity, which marks the VMH as a satiety region; LH loss is what causes starvation.",
    1: "The early work showed that hypothalamic, not pituitary, injury causes obesity, and an LH lesion does not repair the pituitary.",
    2: "The animal did not return to normal: the LH lesion reversed obesity and produced starvation."
  },
  'l26-mc4r-blockade': {
    1: "Y1/Y5 carry NPY's orexigenic signal; blocking them would lower intake further, not prevent the POMC-driven reduction.",
    2: "The slides place GHSR on arcuate NPY/AgRP neurons, and ghrelin is not part of the POMC-to-PVN anorectic pathway.",
    3: "Activating MC4R mimics α-MSH and would add to the reduction in intake, not prevent it."
  },
  'l26-fos-ghrelin-inference': {
    0: "Fos reports that a cell was activated, not which receptor or input activated it.",
    2: "Fos is induced by activation, not silencing, so Fos-positive nuclei indicate increased activity.",
    3: "Fos is a nuclear transcription factor in the cell body; it does not measure peptide secretion at PVN terminals."
  },
  'l27-kiss1-steroid-direction': {
    0: "Uniform suppression would predict AVPV Kiss1 falling with oestradiol, but AVPV expression fell after OVX and was restored by oestradiol.",
    1: "The OVX-plus-oestradiol group had the same surgery yet reversed the changes, so the effect can be attributed to the steroid.",
    3: "In situ hybridisation measures gene expression, not peptide release at GnRH neurons; release needs functional evidence such as antagonist or release assays."
  },
  'l27-nkb-antagonist-pulses': {
    0: "The antagonist was given centrally and suppressed LH pulses; NKB is placed within arcuate kisspeptin neurons upstream of GnRH, not as a pituitary releasing factor.",
    1: "Ending each pulse is the proposed role of dynorphin; NKB is stimulatory, so blocking it should reduce pulses, not increase them.",
    2: "Arcuate kisspeptin neurons co-express NKB and dynorphin, which is why they are called KNDy neurons."
  },
  'l27-ablation-compensation': {
    1: "Acute adult ablation impairs fertility and kisspeptin potently drives GnRH, so a compensated developmental phenotype cannot erase its role.",
    2: "Nothing suggests failed ablation; the authors interpret preserved fertility as compensation, and the smaller ovaries show the manipulation had an effect.",
    3: "Puberty onset is initiated centrally by reactivation of GnRH secretion; ovarian maturation is downstream of that drive."
  },
  'l27-kiss1r-ko-ovx-obesity': {
    0: "Removing a confound does not localise the action; a global knockout leaves central, peripheral (e.g. brown fat) and developmental routes open.",
    2: "Ovariectomised animals have no ovarian oestradiol, and the fat difference persisted, which argues against oestradiol as the explanation.",
    3: "The slides frame the deficit as reduced energy expenditure, and the source study found that knockout females actually ate less."
  },
  'l27-median-eminence-terminals': {
    0: "Explants without GnRH cell bodies still released more GnRH, so kisspeptin's action is not confined to somata.",
    1: "The measured output was GnRH released from median-eminence tissue, which places the effect upstream of the pituitary.",
    3: "An explant shows what is possible at one site; it cannot exclude somatic action, and nearly all GnRH neurons express GPR54 at the soma."
  },
  'l28-pd-presymptomatic-loss': {
    0: "Nothing on the slides suggests lost nigral projections regrow once degeneration stops; protecting neurons does not restore them.",
    1: "Lewy bodies are the pathological hallmark, but the slides attribute the motor signs to reduced striatal dopamine after nigrostriatal deafferentation.",
    2: "Diagnosis comes late, after about 50–70% of these neurons are already gone, not after a small fraction."
  },
  'l28-ldopa-dyskinesia': {
    1: "L-DOPA is used because, unlike dopamine, it reaches the brain; the problem is the pattern of delivery, not access.",
    2: "L-DOPA is converted to dopamine, not acetylcholine; raising acetylcholine is how the Alzheimer's cholinesterase inhibitors work.",
    3: "The slides link these complications directly to chronic L-DOPA use and its intermittent availability, not to cortical Lewy-body spread."
  },
  'l28-spine-resilience': {
    0: "The result shows pathology is not sufficient for dementia, not that it is irrelevant; anti-amyloid antibodies stay on the slides as a strategy to slow decline.",
    2: "The cognitively normal group had pathology yet preserved spines, so spine density does not simply follow plaque burden.",
    3: "Cross-sectional post-mortem data cannot show that experimentally raising spine density would prevent dementia."
  },
  'l28-ms-inflammation-vs-degeneration': {
    0: "Later disability is increasingly driven by neurodegeneration, which an anti-migration drug does not directly target.",
    1: "The model shows inflammation declining, not growing, as the disease becomes progressive.",
    3: "MS lesions are mainly in white matter (grey matter is also affected), and immune cells reach them through a damaged blood–brain barrier."
  },
  'l29-retinal-implant-candidate': {
    0: "The camera and processor replace light capture only; the encoded signal still has to travel through the patient's own ganglion cells and optic nerve.",
    1: "Electrodes on the retina drive retinal cells but cannot create new optic-nerve axons, so ganglion-cell loss removes the output route.",
    2: "Foerster evoked phosphenes by stimulating the occipital cortex of a patient blind for eight years, so long blindness does not silence visual cortex."
  },
  'l29-chrimsonr-depolarisation': {
    1: "The vector delivers a light-gated channel to ganglion cells; it does not rebuild degenerated rods and cones or their transduction cascade.",
    2: "ChrimsonR lets cations flow inward, so it depolarises the cell that expresses it rather than hyperpolarising it.",
    3: "The opsin is expressed in the ganglion cells themselves, so the response does not depend on bipolar cells detecting the light."
  },
  'l29-short-basal-array': {
    0: "This reverses the map: the base codes high frequencies and the apex codes low frequencies.",
    2: "Phase-locking fails above roughly 1.5-3 kHz, so high frequencies depend most on place, which makes electrode position critical.",
    3: "Intracochlear electrodes stimulate auditory-nerve fibres; the implant depends on that nerve rather than bypassing it."
  },
  'l29-ensemble-decoding-inference': {
    0: "Single neurons were only variably related to movement; accurate prediction came from combining the ensemble.",
    1: "Recording and decoding show that activity predicts movement, not that it causes it; a causal claim would need a perturbation.",
    3: "The neural networks were updated over time with data from the 1-2 years of recording, so the decoder was not fixed."
  },
  'l30-hmpc-graft-gone': {
    0: "With no donor cells left at one month they cannot be the replacement circuitry, and the slides list neuron formation by marrow stromal cells as controversial.",
    1: "Independent histology (more spared tissue, smaller cysts) backs up the behavioural gain, so it is not a scoring artefact.",
    2: "Nude rats are immunodeficient hosts chosen to limit rejection, and the slides list immune suppression, not rejection-driven inflammation, as a candidate mechanism."
  },
  'l30-ampa-only-blockade': {
    1: "Ca²⁺ entry through NMDA receptors is a separate route to apoptosis and mitochondrial ROS, so AMPA blockade alone cannot fully protect.",
    2: "This reverses the two arms: AMPA blockade should reduce Na⁺-driven swelling, and the calpain-apoptosis arm belongs to the untouched NMDA receptors.",
    3: "In the lecture's chain Ca²⁺ enters mainly through NMDA receptors, which stay open, so mitochondrial overload and ROS are not prevented."
  },
  'l30-ipsc-growth-no-function': {
    0: "The defining result is that axons extended very long distances both above and below the lesion.",
    2: "The grafts survived for about three months and produced the long axons, so survival was not the limiting step.",
    3: "Axons travelled far beyond the lesion, so the scar did not block them; the failure was in function, not growth."
  },
  'l30-cntf-cortical-targeting': {
    0: "The study still injected BDA tracer into the same cortical regions two weeks before tissue collection to trace CST axons.",
    1: "The aim is the opposite: transduced corticospinal neurons carry the benefit into their spinal axons, which were traced beyond the lesion.",
    3: "Converting astrocytes into neurons is a separate AAV approach mentioned for a clinical programme; the CNTF vector targeted existing cortical neurons."
  },
  'l30-macrophage-depletion-timing': {
    0: "The slides state that macrophages also remove debris and release protective cytokines, so their effects are not purely destructive.",
    1: "Macrophages arrive by about day 2 and peak at days 5–7, well inside the treatment window.",
    2: "Resident microglia are a separate population that a drug targeting infiltrating macrophages does not remove, and microglia themselves release cytokines that kill oligodendrocytes."
  }
};

const answerPrompts = [
  {
    id: 'glia-homeostasis', domain: 'Development & glia', lectures: [1, 7, 28],
    question: 'Explain how astrocytes, oligodendrocyte-lineage cells and microglia support normal circuit function. Predict one circuit consequence of selectively impairing astrocytic potassium clearance or CNS myelination.',
    thesis: 'Glial cell types maintain distinct but interacting homeostatic, metabolic, electrical and immune conditions required for reliable circuit computation.',
    points: ['Separate the developmental origins and core roles of macroglia and microglia.', 'Link astrocytic Kir4.1/uptake and transmitter clearance to extracellular homeostasis.', 'Link oligodendrocyte myelin to conduction velocity, timing and axonal metabolic support.', 'Describe microglial surveillance and context-dependent synapse/injury responses.', 'Carry one selective manipulation from cellular change to circuit and measured behavioural/physiological outcome.'],
    experiment: 'Use a cell-type-specific conditional perturbation, verify target engagement, then combine ion imaging or conduction measures with circuit output and a rescue.',
    limitation: 'Reactive glial states are heterogeneous; a marker or correlation alone does not establish the responsible cell state or causal pathway.'
  },
  {
    id: 'survival-regeneration', domain: 'Development & repair', lectures: [2, 4, 6, 30],
    question: 'Compare developmental neuron survival with adult CNS regeneration. Why can trophic support preserve a neuron without necessarily producing long-distance functional repair?',
    thesis: 'Trophic signalling can regulate survival and growth competence, but adult repair additionally requires overcoming intrinsic, environmental, guidance and circuit-integration constraints.',
    points: ['Explain target-derived trophic competition and retrograde Trk signalling.', 'Distinguish apoptosis, branch pruning, axon regeneration and functional recovery.', 'Contrast the growth-competent developmental neuron with the adult CNS injury environment.', 'Include intrinsic programmes, inhibitory lesion signals, guidance and synaptic integration.', 'Define a functional endpoint beyond cell survival or marker expression.'],
    experiment: 'Combine a growth-promoting intervention with pathway-specific tracing, electrophysiology and a task; use a lesion-only control and test whether recovered output depends on the new pathway.',
    limitation: 'Behavioural recovery may reflect compensation or spared fibres rather than true regeneration across the lesion.'
  },
  {
    id: 'maps-pruning', domain: 'Circuit development', lectures: [3, 4, 13],
    question: 'Explain how molecular guidance, activity and regressive events cooperate to build an ordered neural map. How would you distinguish failed initial targeting from failed refinement?',
    thesis: 'Coarse molecular targeting establishes spatial order, while patterned activity and selective pruning refine connectivity and remove inappropriate branches or synapses.',
    points: ['Describe receptor/context-dependent responses to guidance cues.', 'Use graded Eph/ephrin signalling as a mechanism for topographic mapping.', 'Separate axon pruning and synapse elimination from whole-cell apoptosis.', 'Explain how activity can stabilise correlated inputs and weaken competitors.', 'Predict distinct anatomical or physiological signatures of targeting versus refinement failure.'],
    experiment: 'Image labelled projections before and after the normal refinement period, perturb one cue or activity pattern, and quantify map position, arbor size and functional receptive fields.',
    limitation: 'An endpoint map cannot reveal when the defect arose; developmental time-course data are required.'
  },
  {
    id: 'lineage-neurogenesis', domain: 'Cell lineage', lectures: [5, 6],
    question: 'What evidence is required to show that a neural progenitor is multipotent and self-renewing? Explain why marker expression or cell survival alone is insufficient.',
    thesis: 'Stemness is a functional lineage property demonstrated by durable self-renewal plus generation of multiple differentiated descendants, not by a single marker or snapshot.',
    points: ['Distinguish potency, proliferation, survival and self-renewal.', 'Explain lineage tracing with a heritable, temporally controlled label.', 'Require repeated divisions while progenitor capacity is retained.', 'Use validated identity and function of differentiated descendants, including where each settles — birthdating plus Reelin-dependent inside-out layering separates fate from final position.', 'Qualify species and methodological claims about adult human neurogenesis.'],
    experiment: 'Perform sparse inducible lineage tracing with longitudinal or clonal analysis and serial re-plating/transplantation where appropriate.',
    limitation: 'Labels can be leaky, injury can alter lineage behaviour, and marker panels may not uniquely define cell identity.'
  },
  {
    id: 'synaptic-strength', domain: 'Synaptic physiology', lectures: [8, 9, 10],
    question: 'A manipulation halves the evoked postsynaptic response. Build a strategy to decide whether the cause is altered membrane driving force, release probability, release-site number or quantal size.',
    thesis: 'The same change in mean synaptic amplitude can arise from distinct pre- and postsynaptic mechanisms, so converging measurements are needed to localise the causal step.',
    points: ['Use I = g(Vm − Eion) to separate conductance from driving force.', 'Introduce the simplifying relation mean response ≈ n·p·q.', 'Interpret miniature frequency and amplitude with explicit confounds.', 'Use paired-pulse or variance measures as indices rather than direct proof of p.', 'Relate presynaptic calcium and synaptotagmin/SNARE function to evoked release, and exclude electrical coupling first — a gap-junction component transfers current with no synaptic delay and no quantal structure, so it obeys none of the analysis above.'],
    experiment: 'Combine voltage clamp at multiple holding potentials, miniature events, paired-pulse stimulation and a presynaptic calcium measure.',
    limitation: 'Receptor saturation/desensitisation, detection threshold and non-uniform release sites can violate simple inferences.'
  },
  {
    id: 'plasticity-excitability', domain: 'Plasticity', lectures: [11, 12, 13],
    question: 'Compare synaptic plasticity with intrinsic excitability plasticity. How could each produce a larger postsynaptic response or altered circuit output after repeated activity?',
    thesis: 'Experience can change synaptic transfer and the input-output function of the neuron; similar circuit phenotypes can therefore arise from different plasticity loci.',
    points: ['Explain canonical NMDA-receptor coincidence detection and calcium-dependent induction.', 'Separate induction from expression and pre- from postsynaptic mechanisms.', 'Describe how AIS geometry/channel organisation can tune spike threshold.', 'Include activity-dependent synapse stabilisation or pruning.', 'Propose measurements that distinguish synaptic gain from altered spike initiation.'],
    experiment: 'Pair synaptic recordings with current-clamp input-output curves and AIS imaging before and after induction; selectively block the candidate expression mechanism.',
    limitation: 'Plasticity direction and locus depend on cell type, dendritic location, inhibition and neuromodulatory state.'
  },
  {
    id: 'somatic-transduction', domain: 'Sensory systems', lectures: [14, 15],
    question: 'Trace a mechanical skin stimulus from transduction to a central representation. Explain how intensity and location can be encoded, then predict the effect of a peripheral versus central lesion.',
    thesis: 'Mechanical energy is converted into a graded receptor signal and spike code, then transformed across labelled pathways and central receptive fields into a context-dependent representation.',
    points: ['Separate transduction current, receptor potential and action-potential generation.', 'Explain intensity coding using firing rate, timing and population recruitment.', 'Explain spatial coding using receptive fields and somatotopic organisation.', 'Include adaptation and central gain or inhibition.', 'Contrast peripheral loss with a central processing or map-level deficit.'],
    experiment: 'Record receptor potential, afferent spikes and central responses across controlled stimulus intensity and location before and after a selective lesion.',
    limitation: 'Perception is not a one-to-one readout of one neuron; attention, adaptation and descending control alter the representation.'
  },
  {
    id: 'top-down-plasticity', domain: 'Sensory cognition', lectures: [16, 17, 18],
    question: 'Explain how descending control and adult plasticity can change sensory processing. How would you test whether an fMRI BOLD change reflects altered neural coding rather than vascular coupling alone?',
    thesis: 'Sensory processing is dynamically shaped by central feedback and experience, while BOLD is an indirect haemodynamic measure that requires converging neural evidence.',
    points: ['Define centrifugal feedback and its possible effects on gain/selectivity.', 'Explain an activity-dependent mechanism for adult sensory plasticity.', 'Separate neural activity from the BOLD haemodynamic proxy.', 'Predict receptive-field or behavioural consequences of the manipulation.', 'Include a neural measure and vascular/control condition.'],
    experiment: 'Manipulate a descending pathway while combining electrophysiology or EEG/MEG with fMRI and a sensory discrimination task.',
    limitation: 'Temporal association between a cell signal, blood flow and BOLD does not establish exclusive causation.'
  },
  {
    id: 'vision-audition', domain: 'Vision & audition', lectures: [19, 20, 21],
    question: 'Compare early visual and auditory coding. How do specialised peripheral mechanisms transform physical energy, and how do central circuits extract contrast, frequency or spatial information?',
    thesis: 'Vision and audition use different receptor mechanics but share hierarchical transformations that emphasise informative contrasts and population patterns rather than raw stimulus energy.',
    points: ['Describe photoreceptor or retinal signal flow with centre-surround contrast coding.', 'Describe hair-cell mechanoelectrical transduction and cochlear tonotopy.', 'Separate inner-hair-cell afferent output from outer-hair-cell amplification.', 'Explain at least one central computation for auditory frequency or location.', 'Compare how lesions at receptor, nerve and central levels change function.'],
    experiment: 'Use calibrated stimuli with receptor/nerve and central recordings, then apply a level-specific perturbation and compare coding and behaviour.',
    limitation: 'A single receptive-field or tuning curve does not capture population decoding, attention or natural-scene context.'
  },
  {
    id: 'neuroendocrine-control', domain: 'Neuroendocrinology', lectures: [22, 26, 27],
    question: 'Use the HPA, energy-balance and reproductive axes to explain how feedback, hormonal state and temporal patterning regulate neural-endocrine output.',
    thesis: 'Neuroendocrine systems convert distributed physiological information into patterned hormonal output using feedback loops whose gain and timing change with state and development.',
    points: ['Trace CRH–ACTH–glucocorticoid signalling and negative feedback.', 'Explain how early-life or pregnancy context can programme later HPA regulation.', 'Contrast POMC and AgRP/NPY responses to energy-state signals such as leptin.', 'Explain why GnRH pulsatility changes pituitary responsiveness.', 'Connect one perturbation to hormone, circuit and organism-level outcomes.'],
    experiment: 'Manipulate one feedback receptor or pulse pattern and sample hormones longitudinally while measuring relevant neural activity and behaviour.',
    limitation: 'Circulating hormone concentration alone may miss pulsatility, receptor sensitivity, circadian phase and sex/reproductive state.'
  },
  {
    id: 'motor-learning', domain: 'Motor systems', lectures: [24, 25],
    question: 'Compare the roles of motor cortex and cerebellar circuits in motor learning. Predict how disrupting each system would alter acquisition, execution and error correction.',
    thesis: 'Motor cortex contributes flexible action representation and corticospinal output, while cerebellar circuits use structured mossy- and climbing-fibre signals to update predictive control and error-dependent learning.',
    points: ['Distinguish planning/execution/output from error-driven calibration.', 'Describe mossy fibre–granule–parallel fibre and climbing-fibre inputs to Purkinje cells.', 'Link Purkinje output to deep cerebellar nuclei and movement correction.', 'Include cortical and cerebellar plasticity without assigning all learning to one site.', 'Predict dissociable behavioural and physiological effects of each disruption.'],
    experiment: 'Apply temporally precise perturbation during acquisition versus recall and measure kinematics, adaptation errors and circuit activity.',
    limitation: 'Lesions can impair performance so severely that an apparent learning deficit becomes difficult to interpret.'
  },
  {
    id: 'repair-prostheses', domain: 'Ageing, injury & repair', lectures: [28, 29, 30],
    question: 'Critically compare biological regeneration and neural prostheses as strategies for restoring function after nervous-system damage. What counts as genuine repair?',
    thesis: 'Biological and technological strategies can restore function through different mechanisms, and improvement must be separated into neuroprotection, compensation, sprouting, relay formation and true regeneration.',
    points: ['Describe ageing/injury barriers including inflammation, myelin/ECM inhibition and reduced intrinsic growth.', 'Explain the protective and inhibitory roles of reactive astrocyte borders.', 'Compare remyelination, grafts, growth programmes, stimulation and prosthetic bypass.', 'Use cochlear/retinal implants, spinal stimulation, DBS or BCI as a concrete example.', 'Define structural, physiological and behavioural criteria for functional repair.'],
    experiment: 'Use pathway tracing, electrophysiological connectivity, task performance and a reversible silencing test to show that recovered function depends on the proposed repair route.',
    limitation: 'Better behaviour can arise from training, spared pathways or device compensation without anatomical regeneration.'
  }
];

const cards = [
  ['Macroglia vs microglia origin?', 'Astrocytes and oligodendrocyte-lineage cells arise from neuroectoderm/radial glia; microglia derive predominantly from early yolk-sac erythromyeloid progenitors.'],
  ['OLIG2/SOX10 vs PDGFRα?', 'OLIG1/2 and SOX10 are lineage transcription factors. PDGFRα is a receptor and common oligodendrocyte-progenitor marker.'],
  ['Who forms the physical BBB seal?', 'Specialised endothelial tight junctions. Astrocytes, pericytes and basement membrane regulate barrier development and maintenance.'],
  ['Why avoid simple A1/A2 and M1/M2 labels?', 'In-vivo glial states are heterogeneous and vary with region, disease stage, age, sex and method. Binary shorthand hides this state space.'],
  ['Safest gliotransmission claim?', 'Astrocytes clearly modulate synapses through uptake, ion control, metabolism and ATP/adenosine signalling; routine physiological vesicular glutamate or D-serine release remains context-dependent.'],
  ['Complement-pruning chain?', 'Altered activity → C1q/classical pathway → C3-fragment deposition → CR3 recognition of complement-opsonised material → engulfment, in defined contexts.'],
  ['Dominant adult OPC fate?', 'Primarily oligodendrocytes; other fates are context-specific rather than the normal dominant output.'],
  ['Why is the glial scar dual-role?', 'It can inhibit regrowth through scar-associated signals while also containing inflammation and preserving tissue.'],
  ['Oligodendrocyte vs Schwann cell?', 'One oligodendrocyte can myelinate multiple CNS internodes; one myelinating Schwann cell normally forms one PNS internode.'],
  ['Ependymal function?', 'Ependymal cells line ventricles and the central canal, contribute to ventricular-interface functions and use cilia to help move CSF.'],
  ['Ohmic current equation?', 'I = g(Vm − Eion). With conductance fixed, current shrinks as Vm approaches that ion’s equilibrium potential.'],
  ['Chloride at Vm −65 mV, ECl −70 mV?', 'Driving force is +5 mV, so opening Cl⁻ channels lets Cl⁻ enter (outward conventional current), hyperpolarising Vm toward −70 mV.'],
  ['Mini frequency vs amplitude?', 'Miniature frequency tracks presynaptic spontaneous-release rate; mean amplitude tracks postsynaptic quantal size. Both can be confounded by detection threshold.'],
  ['Binomial release — mean response?', 'Mean ≈ n·p·q (release sites × release probability × quantal size), under independence and uniform-p assumptions.'],
  ['Fourth-power calcium relationship?', 'A log–log slope near four is effective cooperativity over the tested range, not proof that exactly four Ca²⁺ ions bind.'],
  ['Fast fusion — sensor vs machinery?', 'Synaptotagmin is the fast Ca²⁺ sensor; SNAREs are the fusion machinery. Endocytic proteins recycle membrane afterwards.'],
  ['High paired-pulse ratio implies?', 'Usually low initial release probability: residual presynaptic calcium facilitates the second response. PPR is an index, not a direct p meter.'],
  ['NMDA coincidence detection?', 'Postsynaptic depolarisation relieves the voltage-dependent Mg²⁺ block, so calcium enters only when glutamate binding and depolarisation coincide.'],
  ['Why does the AIS initiate spikes?', 'High voltage-gated Na⁺ channel density plus specialised scaffolds give the lowest spike threshold; AIS position/length can remodel to tune excitability (direction is context-dependent).'],
  ['Receptor potential vs action potential?', 'Receptor/generator potentials are graded with stimulus strength; action potentials are all-or-none and non-decrementing.'],
  ['Centrifugal (efferent) sensory control?', 'Signals run from central/higher regions back toward earlier sensory stages, adjusting gain, selectivity and signal-to-noise.'],
  ['What is the fMRI BOLD signal?', 'An indirect haemodynamic proxy shaped by neurovascular coupling — not a direct or cellular-resolution readout of neuronal firing.'],
  ['Centre–surround receptive fields encode?', 'Local spatial contrast and edges. Antagonistic surrounds suppress uniform illumination rather than reporting absolute luminance.'],
  ['Cochlear inner vs outer hair cells?', 'Inner hair cells carry most afferent signalling; outer hair cells are electromotile amplifiers that sharpen basilar-membrane responses.'],
  ['HPA axis negative feedback?', 'Rising glucocorticoids act on pituitary, hypothalamus and higher circuits to restrain further CRH/ACTH drive. Chronic stress can reshape this loop.'],
  ['Climbing vs mossy fibres?', 'Climbing fibres (inferior olive) give powerful direct Purkinje-cell input; mossy fibres drive granule cells whose parallel fibres contact Purkinje cells.'],
  ['Leptin in the arcuate nucleus?', 'Signals energy sufficiency: activates anorexigenic POMC and inhibits orexigenic AgRP/NPY. Obesity often involves leptin resistance despite high leptin.'],
  ['Why must GnRH be pulsatile?', 'Pulses sustain and pattern LH/FSH secretion; continuous agonist exposure desensitises gonadotrophs — the basis of GnRH-agonist therapy.'],
  ['Engulfment vs causation in pruning?', 'Synaptic material inside microglia shows contact/engulfment; proving the pathway is necessary requires perturbing it and measuring synapse or circuit outcomes.'],
  ['Reelin — what does it do?', 'Secreted mainly by Cajal–Retzius cells in the marginal zone; signals through VLDLR/ApoER2 and intracellular DAB1 to control detachment and final positioning of migrating cortical neurons. Loss (reeler) broadly inverts laminar order without abolishing neurogenesis.'],
  ['Inside-out cortical layering?', 'Deep layers are born first; later-born neurons migrate along radial glia past already-settled cells to more superficial positions. Birthdate maps to layer read from the inside out — it is not the direction of travel.'],
  ['Electrical vs chemical synapse?', 'Electrical: gap-junction channels, direct ionic continuity, essentially no delay, usually bidirectional, sign-preserving and non-amplifying. Chemical: ~0.5–1 ms delay, can invert sign, amplify and be modulated.'],
  ['Connexin, connexon, gap junction?', 'Six connexins form one connexon (hemichannel); two apposed connexons form the intercellular channel. Connexin 36 predominates at mammalian neuronal electrical synapses.'],
  ['Rectifying electrical synapse?', 'Furshpan & Potter (1959), crayfish giant motor synapse: junctional current passes far better in one direction. Asymmetric (typically heterotypic) junctions make conductance depend on transjunctional voltage — directional coupling between two cells.'],
  ['Junctional vs channel rectification?', 'Kir4.1 inward-rectifier and delayed-rectifier K⁺ channels rectify current across a single membrane. Electrical-synapse rectification is directional coupling between two cells. Same word, different level — do not conflate them.'],
  ['DCML vs spinothalamic crossing?', 'Dorsal column–medial lemniscus (fine touch, proprioception) crosses in the medulla. Spinothalamic (pain, temperature) crosses within a segment or two of entry — hence the dissociated deficits after cord hemisection.'],
  ['Duplex theory — ITD vs ILD?', 'Low frequencies: interaural time/phase differences, unambiguous because wavelength exceeds head width. High frequencies: interaural level differences from the head shadow. Both cues exist; reliability differs.'],
  ['Unmasking vs sprouting?', 'Hours-to-days remapping = unmasking of latent connections via reduced local inhibition. Weeks-to-months, larger-scale change can add structural sprouting. Timescale is the discriminating evidence.'],
  ['M1 population coding?', 'Single neurons are broadly tuned to movement direction; the distributed population specifies it accurately via vector sum or a trained decoder. This is the basis of motor BCIs.'],
  ['Cochlear implant vs hearing aid?', 'A hearing aid amplifies and still needs working transduction. An implant bypasses hair cells and stimulates surviving spiral ganglion neurons — so it depends on the auditory nerve, not on hair cells.'],
  [
    'Interhemispheric inhibition after stroke?',
    'Callosal motor-to-motor inhibition normally suppresses spurious movement of the resting limb. After stroke, the affected hemisphere is depressed and the unaffected one is hyperexcitable. This matters because cortical excitability shapes plasticity during recovery.'
  ],
  [
    'New oligodendrocytes in motor learning?',
    'Blocking their production by deleting Myrf in precursors slowed complex-wheel learning within hours (mouse). Learning also raised precursor differentiation without changing proliferation or death.'
  ],
  [
    'Simple vs complex spike?',
    'Simple spikes are ordinary Purkinje action potentials at high tonic rates: intrinsic pacemaking modulated by parallel fibres. Complex spikes are rare (at most about 1 Hz), multi-peaked events triggered by the single climbing fibre, and their spikelets reflect the olivary axonal burst.'
  ],
  [
    'PF–Purkinje LTP vs LTD rule?',
    'Repeated parallel-fibre activity alone gives LTP; parallel-fibre activity paired with climbing-fibre input gives LTD. The climbing fibre is the teaching gate, but interneuron signalling can switch the paired outcome to LTP.'
  ],
  [
    'Why does AgRP activity override POMC?',
    'AgRP neurons inhibit POMC neurons by GABA, but POMC neurons do not inhibit AgRP neurons, and AgRP also antagonises MC4R in the PVN. Co-activating both populations therefore increases intake much like AgRP activation alone.'
  ],
  [
    'PVN receptors for α-MSH, AgRP and NPY?',
    'α-MSH activates MC4R to suppress intake. AgRP antagonises MC4R, blocking that brake. NPY acts on Y1 and Y5 receptors to increase intake.'
  ],
  [
    'ARC vs AVPV Kiss1 — which feedback?',
    'ARC Kiss1 (KNDy) neurons are suppressed by oestradiol and drive negative-feedback-regulated GnRH pulses. AVPV Kiss1 neurons are stimulated by oestradiol and drive the preovulatory GnRH/LH surge in females.'
  ],
  [
    'What are KNDy neurons?',
    'Arcuate kisspeptin neurons that co-express neurokinin B and dynorphin, proposed as the GnRH pulse generator. Central kisspeptin or NK3R antagonists suppress LH pulses in ovariectomised ewes.'
  ],
  [
    'Primary vs secondary injury events?',
    'Primary events (mechanical disruption, necrosis, haemorrhage) happen at impact. Secondary events (inflammation, excitotoxicity, oxidative stress, mitochondrial damage, demyelination, cysts, glial scarring) unfold afterwards and are the realistic treatment window.'
  ],
  [
    'What did the AAV2-neurturin Parkinson\'s trial show?',
    'Neurturin gene therapy was effective and safe in rodent and primate PD models. In 38 patients it was safe but showed no efficacy at 1 or 2 years, and the trial was discontinued: animal efficacy did not carry over to patients.'
  ],
  [
    'Labelled lines and prosthetic percepts?',
    'Each modality has a dedicated relay from receptor to primary sensory cortex, and activity anywhere along it is perceived as that modality. Prostheses use this to evoke sound or phosphenes; phantom pain and tinnitus are the maladaptive version.'
  ],
  [
    'Epiretinal vs subretinal implant?',
    'Epiretinal arrays sit on the inner retinal surface (Argus II: 60 electrodes held by a tack). Subretinal devices sit within the retinal layers (Alpha AMS: ~1,600 photodiodes). Both need surviving ganglion cells and an intact optic nerve.'
  ],
  [
    'Primary vs secondary SCI?',
    'Primary injury is the mechanical contusion, haemorrhage and dead tissue core at impact. Secondary injury is the delayed, spreading cascade of excitotoxicity, oxidative stress, inflammation, oligodendrocyte loss, demyelination, cysts and scar, and it is the phase therapies can target.'
  ],
  [
    'Why propose "controlled re-injury" in chronic SCI?',
    'Most proven strategies work only in acute or subacute injury. Scraping away or enzymatically digesting the chronic scar aims to recreate an acute-like state where those strategies could act. It remains a proposal, not a therapy.'
  ]
];

const DAY_MS = 86400000;
const MINUTE_MS = 60000;
const STORAGE_KEY = 'neur3301-exam-lab-v4';
const LEGACY_KEYS = ['neur3301-exam-lab-v3', 'neur3301-exam-lab-v2', 'neur3301-exam-lab-v1'];
const validLectureIds = new Set(lectureGroups.flatMap(group => group.lectures.map(([id]) => id)));
let state = loadState();
let activeQuestion = null;
let questionAnswered = false;
let cardIndex = 0;
let cardRevealed = false;
let answerIndex = 0;
let answerGuideRevealed = false;
let answerRemainingSeconds = 30 * 60;
let answerTimerId = null;
let answerSaveTimer;
let toastTimer;

function defaultState() {
  return { version: 4, done: [], quiz: { correct: 0, attempts: 0, items: {} }, cards: {}, answers: {}, errors: [] };
}

function importValidationError(path, expectation) {
  throw new Error(`${path} ${expectation}`);
}

function requireImportObject(value, path) {
  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    importValidationError(path, 'must be an object.');
  }
  return value;
}

function requireImportKeys(value, expected, path) {
  const actual = Object.keys(value);
  const missing = expected.filter(key => !Object.prototype.hasOwnProperty.call(value, key));
  const unexpected = actual.filter(key => !expected.includes(key));
  if (missing.length) importValidationError(path, `is missing required ${missing.join(', ')} data.`);
  if (unexpected.length) importValidationError(path, `contains unsupported ${unexpected.join(', ')} data.`);
}

function requireImportArray(value, path, maximum) {
  if (!Array.isArray(value)) importValidationError(path, 'must be an array.');
  if (value.length > maximum) importValidationError(path, `must contain no more than ${maximum} entries.`);
  return value;
}

function requireImportInteger(value, path, minimum, maximum) {
  if (!Number.isInteger(value) || value < minimum || value > maximum) {
    importValidationError(path, `must be an integer from ${minimum} to ${maximum}.`);
  }
}

function requireImportNumber(value, path, minimum, maximum) {
  if (!Number.isFinite(value) || value < minimum || value > maximum) {
    importValidationError(path, `must be a finite number from ${minimum} to ${maximum}.`);
  }
}

function requireImportString(value, path, maximum, allowEmpty = false) {
  if (typeof value !== 'string' || value.length > maximum || (!allowEmpty && !value.trim())) {
    importValidationError(path, `must be ${allowEmpty ? 'a' : 'a non-empty'} string of at most ${maximum} characters.`);
  }
}

function requireImportDate(value, path) {
  if (typeof value !== 'string' || !value.trim() || Number.isNaN(Date.parse(value))) {
    importValidationError(path, 'must be a valid date string.');
  }
}

function validateImportedState(input) {
  const imported = requireImportObject(input, 'state');
  requireImportKeys(imported, ['version', 'done', 'quiz', 'cards', 'answers', 'errors'], 'state');
  if (imported.version !== 4) importValidationError('state.version', 'must be 4.');

  const done = requireImportArray(imported.done, 'state.done', validLectureIds.size);
  const seenLectures = new Set();
  done.forEach((id, index) => {
    requireImportInteger(id, `state.done[${index}]`, 1, 30);
    if (!validLectureIds.has(id)) importValidationError(`state.done[${index}]`, 'is not a taught lecture ID.');
    if (seenLectures.has(id)) importValidationError(`state.done[${index}]`, 'duplicates an earlier lecture ID.');
    seenLectures.add(id);
  });

  const quiz = requireImportObject(imported.quiz, 'state.quiz');
  requireImportKeys(quiz, ['correct', 'attempts', 'items'], 'state.quiz');
  requireImportInteger(quiz.correct, 'state.quiz.correct', 0, 1000000);
  requireImportInteger(quiz.attempts, 'state.quiz.attempts', 0, 1000000);
  if (quiz.correct > quiz.attempts) importValidationError('state.quiz.correct', 'cannot exceed attempts.');
  const quizItems = requireImportObject(quiz.items, 'state.quiz.items');
  if (Object.keys(quizItems).length > questions.length) importValidationError('state.quiz.items', 'contains too many question records.');
  const questionIds = new Set(questions.map(question => question.id));
  for (const [id, value] of Object.entries(quizItems)) {
    if (!questionIds.has(id)) importValidationError(`state.quiz.items.${id}`, 'uses an unknown question ID.');
    const record = requireImportObject(value, `state.quiz.items.${id}`);
    requireImportKeys(record, ['attempts', 'correct'], `state.quiz.items.${id}`);
    requireImportInteger(record.attempts, `state.quiz.items.${id}.attempts`, 0, 1000000);
    requireImportInteger(record.correct, `state.quiz.items.${id}.correct`, 0, 1000000);
    if (record.correct > record.attempts) importValidationError(`state.quiz.items.${id}.correct`, 'cannot exceed attempts.');
  }

  const importedCards = requireImportObject(imported.cards, 'state.cards');
  if (Object.keys(importedCards).length > cards.length) importValidationError('state.cards', 'contains too many card records.');
  for (const [index, value] of Object.entries(importedCards)) {
    const numericIndex = Number(index);
    if (!Number.isInteger(numericIndex) || numericIndex < 0 || numericIndex >= cards.length || String(numericIndex) !== index) {
      importValidationError(`state.cards.${index}`, 'uses an unknown card index.');
    }
    const record = requireImportObject(value, `state.cards.${index}`);
    requireImportKeys(record, ['rating', 'due', 'intervalDays', 'ease', 'reviews', 'lapses'], `state.cards.${index}`);
    if (!['again', 'hard', 'good'].includes(record.rating)) importValidationError(`state.cards.${index}.rating`, 'must be again, hard or good.');
    requireImportDate(record.due, `state.cards.${index}.due`);
    requireImportNumber(record.intervalDays, `state.cards.${index}.intervalDays`, 0, 3650);
    requireImportNumber(record.ease, `state.cards.${index}.ease`, 1.3, 3);
    requireImportInteger(record.reviews, `state.cards.${index}.reviews`, 0, 100000);
    requireImportInteger(record.lapses, `state.cards.${index}.lapses`, 0, 100000);
  }

  const importedAnswers = requireImportObject(imported.answers, 'state.answers');
  if (Object.keys(importedAnswers).length > answerPrompts.length) importValidationError('state.answers', 'contains too many answer records.');
  const promptById = new Map(answerPrompts.map(prompt => [prompt.id, prompt]));
  for (const [id, value] of Object.entries(importedAnswers)) {
    const prompt = promptById.get(id);
    if (!prompt) importValidationError(`state.answers.${id}`, 'uses an unknown answer ID.');
    const record = requireImportObject(value, `state.answers.${id}`);
    requireImportKeys(record, ['draft', 'checks', 'rating', 'attempts', 'updated'], `state.answers.${id}`);
    requireImportString(record.draft, `state.answers.${id}.draft`, 8000, true);
    const checks = requireImportArray(record.checks, `state.answers.${id}.checks`, prompt.points.length);
    const seenChecks = new Set();
    checks.forEach((check, index) => {
      requireImportInteger(check, `state.answers.${id}.checks[${index}]`, 0, prompt.points.length - 1);
      if (seenChecks.has(check)) importValidationError(`state.answers.${id}.checks[${index}]`, 'duplicates an earlier blueprint check.');
      seenChecks.add(check);
    });
    if (!['', 'needs-work', 'solid', 'strong'].includes(record.rating)) {
      importValidationError(`state.answers.${id}.rating`, 'must be empty, needs-work, solid or strong.');
    }
    requireImportInteger(record.attempts, `state.answers.${id}.attempts`, 0, 10000);
    requireImportDate(record.updated, `state.answers.${id}.updated`);
  }

  const errors = requireImportArray(imported.errors, 'state.errors', 500);
  errors.forEach((value, index) => {
    const record = requireImportObject(value, `state.errors[${index}]`);
    requireImportKeys(record, ['question', 'type', 'fix', 'date', 'resolved'], `state.errors[${index}]`);
    requireImportString(record.question, `state.errors[${index}].question`, 240);
    if (!['Knowledge gap', 'Mechanism reversal', 'Overclaim/context', 'Question-reading error'].includes(record.type)) {
      importValidationError(`state.errors[${index}].type`, 'is not a supported error type.');
    }
    requireImportString(record.fix, `state.errors[${index}].fix`, 500);
    requireImportDate(record.date, `state.errors[${index}].date`);
    if (typeof record.resolved !== 'boolean') importValidationError(`state.errors[${index}].resolved`, 'must be true or false.');
  });
  return imported;
}

function normaliseState(input) {
  if (!input || typeof input !== 'object' || Array.isArray(input)) throw new Error('Progress file must contain an object.');
  const clean = defaultState();
  clean.done = [...new Set((Array.isArray(input.done) ? input.done : []).map(Number).filter(id => validLectureIds.has(id)))];
  const quiz = input.quiz && typeof input.quiz === 'object' ? input.quiz : {};
  clean.quiz.correct = Math.max(0, Number(quiz.correct ?? quiz.r) || 0);
  clean.quiz.attempts = Math.max(clean.quiz.correct, Number(quiz.attempts ?? quiz.n) || 0);
  if (quiz.items && typeof quiz.items === 'object' && !Array.isArray(quiz.items)) {
    for (const [id, value] of Object.entries(quiz.items)) {
      if (!questions.some(question => question.id === id) || !value || typeof value !== 'object') continue;
      const attempts = Math.max(0, Number(value.attempts) || 0);
      clean.quiz.items[id] = { attempts, correct: Math.min(attempts, Math.max(0, Number(value.correct) || 0)) };
    }
  }
  if (input.cards && typeof input.cards === 'object' && !Array.isArray(input.cards)) {
    for (const [index, value] of Object.entries(input.cards)) {
      const numericIndex = Number(index);
      if (!Number.isInteger(numericIndex) || numericIndex < 0 || numericIndex >= cards.length) continue;
      if (typeof value === 'string' && ['again', 'known'].includes(value)) {
        const known = value === 'known';
        clean.cards[index] = {
          rating: known ? 'good' : 'again',
          due: new Date(Date.now() + (known ? 3 * DAY_MS : 0)).toISOString(),
          intervalDays: known ? 3 : 0,
          ease: known ? 2.5 : 2.3,
          reviews: 1,
          lapses: known ? 0 : 1
        };
        continue;
      }
      if (!value || typeof value !== 'object' || Array.isArray(value)) continue;
      const rating = ['again', 'hard', 'good'].includes(value.rating) ? value.rating : 'good';
      clean.cards[index] = {
        rating,
        due: validDate(value.due),
        intervalDays: Math.min(3650, Math.max(0, Number(value.intervalDays) || 0)),
        ease: Math.min(3, Math.max(1.3, Number(value.ease) || 2.5)),
        reviews: Math.min(100000, Math.max(0, Math.floor(Number(value.reviews) || 0))),
        lapses: Math.min(100000, Math.max(0, Math.floor(Number(value.lapses) || 0)))
      };
    }
  }
  if (input.answers && typeof input.answers === 'object' && !Array.isArray(input.answers)) {
    for (const [id, value] of Object.entries(input.answers)) {
      const prompt = answerPrompts.find(item => item.id === id);
      if (!prompt || !value || typeof value !== 'object' || Array.isArray(value)) continue;
      const checks = [...new Set((Array.isArray(value.checks) ? value.checks : []).map(Number)
        .filter(index => Number.isInteger(index) && index >= 0 && index < prompt.points.length))];
      clean.answers[id] = {
        draft: String(value.draft ?? '').slice(0, 8000),
        checks,
        rating: ['needs-work', 'solid', 'strong'].includes(value.rating) ? value.rating : '',
        attempts: Math.min(10000, Math.max(0, Math.floor(Number(value.attempts) || 0))),
        updated: validDate(value.updated)
      };
    }
  }
  clean.errors = (Array.isArray(input.errors) ? input.errors : []).slice(0, 500).map(item => ({
    question: String(item.question ?? item.q ?? '').slice(0, 240),
    type: String(item.type ?? item.t ?? 'Knowledge gap').slice(0, 80),
    fix: String(item.fix ?? item.f ?? '').slice(0, 500),
    date: validDate(item.date ?? item.d),
    resolved: Boolean(item.resolved)
  })).filter(item => item.question && item.fix);
  return clean;
}

function validDate(value) {
  const parsed = new Date(value || Date.now());
  return Number.isNaN(parsed.getTime()) ? new Date().toISOString() : parsed.toISOString();
}

function loadState() {
  try {
    const sourceKey = [STORAGE_KEY, ...LEGACY_KEYS].find(key => localStorage.getItem(key));
    if (!sourceKey) return defaultState();
    const clean = normaliseState(JSON.parse(localStorage.getItem(sourceKey)));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(clean));
    LEGACY_KEYS.forEach(key => localStorage.removeItem(key));
    return clean;
  } catch (error) {
    console.warn('Progress recovery failed; starting with a clean state.', error);
    return defaultState();
  }
}

function persist(message) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    LEGACY_KEYS.forEach(key => localStorage.removeItem(key));
  } catch (error) {
    console.error('Unable to save progress.', error);
    showToast('Progress could not be saved in this browser.');
  }
  renderDashboard();
  if (message) showToast(message);
}

function showToast(message) {
  const toast = document.querySelector('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}

function switchView(id) {
  document.querySelectorAll('.view').forEach(view => view.classList.toggle('active', view.id === id));
  document.querySelectorAll('.tab').forEach(tab => {
    const active = tab.dataset.view === id;
    tab.classList.toggle('active', active);
    tab.setAttribute('aria-selected', String(active));
    tab.tabIndex = active ? 0 : -1;
  });
  if (id === 'quiz' && !activeQuestion) nextQuestion();
  if (id === 'answers') renderAnswer();
  if (id === 'cards') focusReadyCard();
  if (id === 'errors') renderLedger();
  document.querySelector(`#${id}`).scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderCountdowns() {
  const now = Date.now();
  document.querySelectorAll('[data-countdown]').forEach(element => {
    const target = new Date(element.dataset.countdown).getTime();
    const remaining = target - now;
    const days = Math.ceil(remaining / 86400000);
    element.textContent = remaining < 0 ? 'Date passed' : remaining < 86400000 ? 'Under 24 hours' : `${days} days remaining`;
  });
}

function weakQuestions() {
  return questions.filter(question => {
    const item = state.quiz.items[question.id];
    return item && item.attempts > 0 && item.correct / item.attempts < .8;
  });
}

function reviewedDueCards(now = Date.now()) {
  return Object.entries(state.cards).filter(([, record]) => new Date(record.due).getTime() <= now).map(([index]) => Number(index));
}

function readyCardIndexes(now = Date.now()) {
  return cards.map((_, index) => index).filter(index => !state.cards[index] || new Date(state.cards[index].due).getTime() <= now);
}

function renderDashboard() {
  const openErrors = state.errors.filter(error => !error.resolved).length;
  const accuracy = state.quiz.attempts ? Math.round(state.quiz.correct / state.quiz.attempts * 100) : 0;
  const taughtCount = validLectureIds.size;
  document.querySelector('#lecture-stat').textContent = `${state.done.length}/${taughtCount}`;
  document.querySelector('#lecture-progress').style.width = `${Math.min(100, state.done.length / taughtCount * 100)}%`;
  document.querySelector('#accuracy-stat').textContent = `${accuracy}%`;
  document.querySelector('#answered-stat').textContent = `${state.quiz.attempts} ${state.quiz.attempts === 1 ? 'attempt' : 'attempts'}`;
  document.querySelector('#weak-stat').textContent = String(weakQuestions().length);
  document.querySelector('#card-due-stat').textContent = String(reviewedDueCards().length);
  const attemptedAnswers = answerPrompts.filter(prompt => state.answers[prompt.id]?.attempts > 0).length;
  const strongAnswers = answerPrompts.filter(prompt => state.answers[prompt.id]?.rating === 'strong').length;
  document.querySelector('#answer-stat').textContent = `${attemptedAnswers}/${answerPrompts.length}`;
  document.querySelector('#answer-detail').textContent = `${strongAnswers} rated strong`;
  document.querySelector('#error-stat').textContent = String(openErrors);

  const nextLecture = lectureGroups.flatMap(group => group.lectures).find(([id]) => !state.done.includes(id));
  const title = document.querySelector('#next-action');
  const detail = document.querySelector('#next-action-detail');
  const action = document.querySelector('#next-action-button');
  if (weakQuestions().length) {
    title.textContent = `Retest ${weakQuestions().length} weak MCQ ${weakQuestions().length === 1 ? 'item' : 'items'}.`;
    detail.textContent = 'MCQ Forge will open in “Weak items” mode. Retrieve the mechanism before reading the options.';
    action.dataset.go = 'quiz';
    action.textContent = 'Retest weak items';
  } else if (openErrors) {
    title.textContent = `Close ${openErrors} misconception ${openErrors === 1 ? 'loop' : 'loops'}.`;
    detail.textContent = 'Re-answer each failed claim closed-book, then mark it resolved only after a clean retest.';
    action.dataset.go = 'errors';
    action.textContent = 'Open error ledger';
  } else if (reviewedDueCards().length) {
    title.textContent = `Retrieve ${reviewedDueCards().length} due mechanism ${reviewedDueCards().length === 1 ? 'card' : 'cards'}.`;
    detail.textContent = 'Answer before revealing, then grade the retrieval honestly so the next interval is earned.';
    action.dataset.go = 'cards';
    action.textContent = 'Review due cards';
  } else if (nextLecture) {
    title.textContent = `Process Lecture ${nextLecture[0]}: ${nextLecture[1]}.`;
    detail.textContent = 'Compress the causal chain, retrieve it closed-book, then predict one intervention.';
    action.dataset.go = 'map';
    action.textContent = 'Open lecture map';
  } else if (strongAnswers < answerPrompts.length) {
    title.textContent = `Build final-exam answer ${strongAnswers + 1} of ${answerPrompts.length}.`;
    detail.textContent = 'Plan it closed-book under the 30-minute constraint, then reveal the practice blueprint and repair omissions.';
    action.dataset.go = 'answers';
    action.textContent = 'Open Long Answer Lab';
  } else {
    title.textContent = 'All lectures processed. Shift to cumulative retrieval.';
    detail.textContent = 'Mix blocks, practise long-answer plans and keep repairing errors.';
    action.dataset.go = 'quiz';
    action.textContent = 'Start cumulative practice';
  }
}

function answerRecord(prompt = answerPrompts[answerIndex]) {
  return state.answers[prompt.id] || { draft: '', checks: [], rating: '', attempts: 0, updated: new Date().toISOString() };
}

function populateAnswerSelect() {
  const select = document.querySelector('#answer-prompt-select');
  if (select.options.length) return;
  answerPrompts.forEach((prompt, index) => {
    const option = document.createElement('option');
    option.value = prompt.id;
    option.textContent = `${index + 1}. ${prompt.domain} · L${prompt.lectures.join(', ')}`;
    select.append(option);
  });
}

function renderAnswer() {
  populateAnswerSelect();
  const prompt = answerPrompts[answerIndex];
  const record = answerRecord(prompt);
  document.querySelector('#answer-prompt-select').value = prompt.id;
  document.querySelector('#answer-meta').textContent = `${prompt.domain} · Lectures ${prompt.lectures.join(', ')} · integrated final practice`;
  document.querySelector('#answer-question').textContent = prompt.question;
  document.querySelector('#answer-draft').value = record.draft;
  document.querySelector('#answer-guide').hidden = !answerGuideRevealed;
  document.querySelector('#reveal-answer-guide').textContent = answerGuideRevealed ? 'Hide self-check blueprint' : 'Reveal self-check blueprint';
  document.querySelector('#answer-thesis').textContent = prompt.thesis;
  document.querySelector('#answer-experiment').textContent = prompt.experiment;
  document.querySelector('#answer-limitation').textContent = prompt.limitation;
  const points = document.querySelector('#answer-points');
  points.replaceChildren(...prompt.points.map((point, index) => {
    const label = document.createElement('label');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = record.checks.includes(index);
    checkbox.addEventListener('change', () => toggleAnswerPoint(index));
    const copy = document.createElement('span');
    copy.textContent = point;
    label.append(checkbox, copy);
    return label;
  }));
  const rating = record.rating ? record.rating.replace('-', ' ') : 'not yet rated';
  document.querySelector('#answer-progress').textContent = `${record.checks.length}/${prompt.points.length} blueprint elements checked · ${record.attempts} rated ${record.attempts === 1 ? 'attempt' : 'attempts'} · ${rating}`;
  document.querySelectorAll('.answer-rating').forEach(button => {
    const active = button.dataset.rating === record.rating;
    button.setAttribute('aria-pressed', String(active));
  });
  renderAnswerTimer();
}

function saveAnswerDraft(message = 'Draft saved. Rate it to count an attempt.') {
  const prompt = answerPrompts[answerIndex];
  const record = answerRecord(prompt);
  state.answers[prompt.id] = {
    ...record,
    draft: document.querySelector('#answer-draft').value.slice(0, 8000),
    updated: new Date().toISOString()
  };
  persist(message);
}

function queueAnswerSave() {
  clearTimeout(answerSaveTimer);
  answerSaveTimer = setTimeout(() => saveAnswerDraft(null), 500);
}

function selectAnswerPrompt(id) {
  clearTimeout(answerSaveTimer);
  saveAnswerDraft(null);
  answerIndex = Math.max(0, answerPrompts.findIndex(prompt => prompt.id === id));
  answerGuideRevealed = false;
  resetAnswerTimer();
  renderAnswer();
}

function toggleAnswerGuide() {
  clearTimeout(answerSaveTimer);
  saveAnswerDraft(null);
  answerGuideRevealed = !answerGuideRevealed;
  renderAnswer();
}

function toggleAnswerPoint(index) {
  const prompt = answerPrompts[answerIndex];
  const record = answerRecord(prompt);
  const checks = record.checks.includes(index) ? record.checks.filter(value => value !== index) : [...record.checks, index].sort((a, b) => a - b);
  state.answers[prompt.id] = { ...record, checks, updated: new Date().toISOString() };
  persist();
  renderAnswer();
}

function rateAnswer(rating) {
  saveAnswerDraft(null);
  const prompt = answerPrompts[answerIndex];
  const record = answerRecord(prompt);
  state.answers[prompt.id] = { ...record, rating, attempts: record.attempts + 1, updated: new Date().toISOString() };
  persist(`Answer rated ${rating.replace('-', ' ')}.`);
  renderAnswer();
}

function renderAnswerTimer() {
  const minutes = Math.floor(answerRemainingSeconds / 60);
  const seconds = answerRemainingSeconds % 60;
  document.querySelector('#answer-timer').textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  document.querySelector('#answer-timer-toggle').textContent = answerTimerId ? 'Pause timer' : answerRemainingSeconds < 30 * 60 ? 'Resume timer' : 'Start 30-minute timer';
}

function toggleAnswerTimer() {
  if (answerTimerId) {
    clearInterval(answerTimerId);
    answerTimerId = null;
    renderAnswerTimer();
    return;
  }
  if (answerRemainingSeconds <= 0) answerRemainingSeconds = 30 * 60;
  answerTimerId = setInterval(() => {
    answerRemainingSeconds -= 1;
    if (answerRemainingSeconds <= 0) {
      answerRemainingSeconds = 0;
      clearInterval(answerTimerId);
      answerTimerId = null;
      showToast('Thirty minutes. Stop writing and self-check the answer you produced.');
    }
    renderAnswerTimer();
  }, 1000);
  renderAnswerTimer();
}

function resetAnswerTimer() {
  clearInterval(answerTimerId);
  answerTimerId = null;
  answerRemainingSeconds = 30 * 60;
  renderAnswerTimer();
}

function renderLectureMap() {
  const root = document.querySelector('#lecture-groups');
  root.replaceChildren(...lectureGroups.map(group => {
    const section = document.createElement('section');
    section.className = 'group';
    const heading = document.createElement('h3');
    heading.textContent = `${group.name} · ${group.block}`;
    const list = document.createElement('div');
    list.className = 'lectures';
    group.lectures.forEach(([id, topic, date]) => {
      const label = document.createElement('label');
      label.className = `lecture${state.done.includes(id) ? ' complete' : ''}`;
      const input = document.createElement('input');
      input.type = 'checkbox';
      input.checked = state.done.includes(id);
      input.setAttribute('aria-label', `Mark Lecture ${id}, ${topic}, processed`);
      input.addEventListener('change', () => toggleLecture(id));
      const copy = document.createElement('span');
      const strong = document.createElement('b');
      strong.textContent = `${id}. ${topic}`;
      const small = document.createElement('small');
      small.textContent = `${date} · ${group.block}`;
      copy.append(strong, small);
      label.append(input, copy);
      list.append(label);
    });
    section.append(heading, list);
    return section;
  }));
}

function textList(items, ordered = false) {
  const list = document.createElement(ordered ? 'ol' : 'ul');
  list.replaceChildren(...items.map(item => {
    const entry = document.createElement('li');
    entry.textContent = item;
    return entry;
  }));
  return list;
}

function lectureBlock(id) {
  const group = lectureGroups.find(candidate => candidate.lectures.some(([lectureId]) => lectureId === id));
  return group ? (group.block === 'Final' ? 'Final exam' : group.block) : '';
}

function renderLectureBriefs() {
  const root = document.querySelector('#lecture-brief-list');
  root.replaceChildren(...lectureBriefs.map(brief => {
    const article = document.createElement('article');
    article.className = 'lecture-brief';

    const head = document.createElement('header');
    head.className = 'brief-head';
    const eyebrow = document.createElement('p');
    eyebrow.className = 'eyebrow';
    eyebrow.textContent = `Lecture ${brief.id} · ${brief.date} · ${brief.lecturer} · ${lectureBlock(brief.id)}`;
    const title = document.createElement('h3');
    title.textContent = brief.title;
    const scope = document.createElement('p');
    scope.textContent = brief.scope;
    head.append(eyebrow, title, scope);

    const body = document.createElement('div');
    body.className = 'brief-body';

    const outcomes = document.createElement('section');
    const outcomesTitle = document.createElement('h4');
    outcomesTitle.textContent = 'You should be able to';
    outcomes.append(outcomesTitle, textList(brief.outcomes));

    const mechanisms = document.createElement('section');
    const mechanismsTitle = document.createElement('h4');
    mechanismsTitle.textContent = 'Mechanism maps';
    const chainGrid = document.createElement('div');
    chainGrid.className = 'chain-grid';
    chainGrid.replaceChildren(...brief.chains.map(chain => {
      const card = document.createElement('article');
      card.className = 'mechanism-chain';
      const chainTitle = document.createElement('h5');
      chainTitle.textContent = chain.name;
      card.append(chainTitle, textList(chain.steps, true));
      return card;
    }));
    mechanisms.append(mechanismsTitle, chainGrid);

    const distinctions = document.createElement('section');
    const distinctionsTitle = document.createElement('h4');
    distinctionsTitle.textContent = 'Know the distinctions';
    const tableWrap = document.createElement('div');
    tableWrap.className = 'distinction-wrap';
    const table = document.createElement('table');
    table.className = 'distinction-table';
    const tableHead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    ['Signal / concept', 'Receptor or role', 'Exam-safe interpretation'].forEach(label => {
      const th = document.createElement('th');
      th.scope = 'col';
      th.textContent = label;
      headerRow.append(th);
    });
    tableHead.append(headerRow);
    const tableBody = document.createElement('tbody');
    tableBody.replaceChildren(...brief.distinctions.map(row => {
      const tr = document.createElement('tr');
      row.forEach(value => {
        const td = document.createElement('td');
        td.textContent = value;
        tr.append(td);
      });
      return tr;
    }));
    table.append(tableHead, tableBody);
    tableWrap.append(table);
    distinctions.append(distinctionsTitle, tableWrap);

    const experiments = document.createElement('section');
    const experimentsTitle = document.createElement('h4');
    experimentsTitle.textContent = 'Experiment → inference';
    const experimentGrid = document.createElement('div');
    experimentGrid.className = 'experiment-grid';
    experimentGrid.replaceChildren(...brief.experiments.map(experiment => {
      const card = document.createElement('article');
      card.className = 'experiment-card';
      const experimentTitle = document.createElement('h5');
      experimentTitle.textContent = experiment.name;
      const details = document.createElement('dl');
      for (const [label, value] of [['Design', experiment.design], ['Result', experiment.result], ['Inference', experiment.inference], ['Limit', experiment.limit]]) {
        const dt = document.createElement('dt');
        dt.textContent = label;
        const dd = document.createElement('dd');
        dd.textContent = value;
        details.append(dt, dd);
      }
      card.append(experimentTitle, details);
      return card;
    }));
    experiments.append(experimentsTitle, experimentGrid);

    const traps = document.createElement('section');
    const trapsTitle = document.createElement('h4');
    trapsTitle.textContent = 'Examiner traps';
    traps.append(trapsTitle, textList(brief.traps));

    const recall = document.createElement('section');
    const recallTitle = document.createElement('h4');
    recallTitle.textContent = 'Active recall — answer before opening';
    const recallList = document.createElement('div');
    recallList.className = 'recall-list';
    recallList.replaceChildren(...brief.recall.map(([question, answer]) => {
      const details = document.createElement('details');
      const summary = document.createElement('summary');
      summary.textContent = question;
      const response = document.createElement('p');
      response.textContent = answer;
      details.append(summary, response);
      return details;
    }));
    recall.append(recallTitle, recallList);

    const references = document.createElement('section');
    const referencesTitle = document.createElement('h4');
    referencesTitle.textContent = 'Primary evidence and printable note';
    const referenceList = document.createElement('ul');
    referenceList.className = 'reference-list';
    referenceList.replaceChildren(...brief.references.map(([label, url]) => {
      const item = document.createElement('li');
      const link = document.createElement('a');
      link.href = url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = label;
      item.append(link);
      return item;
    }));
    const actions = document.createElement('div');
    actions.className = 'brief-actions';
    const download = document.createElement('a');
    download.className = 'button';
    download.href = brief.download;
    download.textContent = `Open Lecture ${brief.id} printable note`;
    const practice = document.createElement('button');
    practice.className = 'button primary';
    practice.type = 'button';
    practice.textContent = `Practise Lecture ${brief.id} MCQs`;
    practice.addEventListener('click', () => {
      document.querySelector('#quiz-block').value = `Lecture ${brief.id}`;
      activeQuestion = questions.find(question => question.lecture === brief.id);
      questionAnswered = false;
      switchView('quiz');
      renderQuestion();
    });
    actions.append(download, practice);
    references.append(referencesTitle, referenceList, actions);

    body.append(outcomes, mechanisms, distinctions, experiments, traps, recall, references);
    article.append(head, body);
    return article;
  }));
}

function toggleLecture(id) {
  state.done = state.done.includes(id) ? state.done.filter(value => value !== id) : [...state.done, id].sort((a, b) => a - b);
  persist();
  renderLectureMap();
}

function shuffle(array) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function currentPool() {
  const filter = document.querySelector('#quiz-block').value;
  if (filter === 'All') return questions;
  if (filter === 'Weak') return weakQuestions();
  if (filter.startsWith('Lecture ')) {
    const lecture = Number(filter.replace('Lecture ', ''));
    return questions.filter(question => question.lecture === lecture);
  }
  return questions.filter(question => question.block === filter);
}

function nextQuestion() {
  const pool = currentPool();
  if (!pool.length) {
    activeQuestion = null;
    questionAnswered = false;
    document.querySelector('#question-number').textContent = 'No weak items yet';
    document.querySelector('#question-meta').textContent = '';
    document.querySelector('#question-stem').textContent = 'Answer questions first, or choose another question set.';
    document.querySelector('#question-options').replaceChildren();
    document.querySelector('#question-explanation').replaceChildren();
    return;
  }
  const candidates = pool.length > 1 && activeQuestion ? pool.filter(question => question.id !== activeQuestion.id) : pool;
  activeQuestion = candidates[Math.floor(Math.random() * candidates.length)];
  questionAnswered = false;
  renderQuestion();
}

function renderQuestion() {
  const pool = currentPool();
  const item = state.quiz.items[activeQuestion.id];
  const hasHistory = item && item.attempts > 0;
  document.querySelector('#question-number').textContent = `${pool.length}-item practice set`;
  document.querySelector('#question-meta').textContent = `Lecture ${activeQuestion.lecture} · ${activeQuestion.topic} · ${activeQuestion.block}${hasHistory ? ` · personal accuracy ${Math.round(item.correct / item.attempts * 100)}%` : ''}`;
  document.querySelector('#question-stem').textContent = activeQuestion.stem;
  document.querySelector('#question-explanation').replaceChildren();
  const options = document.querySelector('#question-options');
  const order = shuffle([...activeQuestion.options.keys()]);
  options.replaceChildren(...order.map((originalIndex, displayIndex) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'option';
    button.dataset.index = String(originalIndex);
    button.textContent = `${displayIndex + 1}. ${activeQuestion.options[originalIndex]}`;
    button.addEventListener('click', () => answerQuestion(originalIndex));
    return button;
  }));
}

function answerQuestion(index) {
  if (questionAnswered || !activeQuestion) return;
  questionAnswered = true;
  const correct = index === activeQuestion.answer;
  state.quiz.attempts += 1;
  state.quiz.correct += correct ? 1 : 0;
  const item = state.quiz.items[activeQuestion.id] || { attempts: 0, correct: 0 };
  item.attempts += 1;
  item.correct += correct ? 1 : 0;
  state.quiz.items[activeQuestion.id] = item;

  document.querySelectorAll('.option').forEach(button => {
    button.disabled = true;
    const optionIndex = Number(button.dataset.index);
    if (optionIndex === activeQuestion.answer) button.classList.add('correct');
    else if (optionIndex === index) button.classList.add('incorrect');
  });

  const explanation = document.createElement('div');
  explanation.className = 'explanation';
  const result = document.createElement('b');
  result.textContent = correct ? 'Correct.' : 'Not yet.';
  const mechanism = document.createElement('p');
  mechanism.textContent = activeQuestion.explanation;
  explanation.append(result, mechanism);
  if (!correct) {
    const note = distractorNotes[activeQuestion.id]?.[index];
    if (note) {
      const why = document.createElement('p');
      why.innerHTML = '<strong>Why your choice is wrong:</strong> ';
      why.append(document.createTextNode(note));
      explanation.append(why);
    }
  }
  const trap = document.createElement('p');
  trap.innerHTML = '<strong>Examiner trap:</strong> ';
  trap.append(document.createTextNode(activeQuestion.trap));
  explanation.append(trap);
  if (!correct) {
    const log = document.createElement('button');
    log.type = 'button';
    log.className = 'button';
    log.textContent = 'Send miss to error ledger';
    log.addEventListener('click', () => logQuestionError(log));
    explanation.append(log);
  }
  document.querySelector('#question-explanation').append(explanation);
  persist();
}

function logQuestionError(button) {
  if (!activeQuestion) return;
  state.errors.unshift({ question: activeQuestion.stem, type: 'Knowledge gap', fix: activeQuestion.explanation, date: new Date().toISOString(), resolved: false });
  persist('Miss added to the error ledger.');
  button.disabled = true;
  button.textContent = 'Added to ledger';
}

function resetQuiz() {
  if (!confirm('Reset all MCQ attempts and item diagnostics? Lecture, flashcard and error data will stay intact.')) return;
  state.quiz = { correct: 0, attempts: 0, items: {} };
  activeQuestion = null;
  persist('MCQ history reset.');
  nextQuestion();
}

function formatCardDue(record) {
  if (!record) return 'new';
  const remaining = new Date(record.due).getTime() - Date.now();
  if (remaining <= 0) return 'due now';
  if (remaining < 60 * MINUTE_MS) return `due in ${Math.max(1, Math.ceil(remaining / MINUTE_MS))} min`;
  if (remaining < DAY_MS) return `due in ${Math.ceil(remaining / (60 * MINUTE_MS))} h`;
  if (remaining < 7 * DAY_MS) return `due in ${Math.ceil(remaining / DAY_MS)} d`;
  return `due ${new Date(record.due).toLocaleDateString('en-AU', { day: 'numeric', month: 'short' })}`;
}

function nextReadyIndex(afterIndex = cardIndex) {
  const ready = readyCardIndexes();
  return ready.find(index => index > afterIndex) ?? ready[0] ?? -1;
}

function earliestScheduledIndex() {
  return Object.entries(state.cards).sort(([, a], [, b]) => new Date(a.due) - new Date(b.due))[0]?.[0];
}

function focusReadyCard() {
  const ready = readyCardIndexes();
  if (ready.length && !ready.includes(cardIndex)) {
    cardIndex = ready[0];
    cardRevealed = false;
  }
  renderCard();
}

function renderCard() {
  const [front, back] = cards[cardIndex];
  const record = state.cards[cardIndex];
  const readyCount = readyCardIndexes().length;
  const reviewedCount = Object.keys(state.cards).length;
  document.querySelector('#card-side').textContent = cardRevealed ? 'Answer' : 'Question';
  document.querySelector('#card-front').textContent = front;
  document.querySelector('#card-front').hidden = cardRevealed;
  document.querySelector('#card-back').textContent = back;
  document.querySelector('#card-back').hidden = !cardRevealed;
  document.querySelector('#again-card').hidden = !cardRevealed;
  document.querySelector('#hard-card').hidden = !cardRevealed;
  document.querySelector('#good-card').hidden = !cardRevealed;
  document.querySelector('#card-progress').textContent = `Card ${cardIndex + 1}/${cards.length} · ${readyCount} ready · ${reviewedCount} reviewed · this card: ${formatCardDue(record)}`;
}

function revealCard() { cardRevealed = !cardRevealed; renderCard(); }
function moveCard(step) { cardIndex = (cardIndex + step + cards.length) % cards.length; cardRevealed = false; renderCard(); }
function rateCard(rating) {
  const now = Date.now();
  const prior = state.cards[cardIndex] || { intervalDays: 0, ease: 2.5, reviews: 0, lapses: 0 };
  let intervalDays = prior.intervalDays;
  let ease = prior.ease;
  let lapses = prior.lapses;
  let due;
  if (rating === 'again') {
    intervalDays = 0;
    ease = Math.max(1.3, ease - .2);
    lapses += 1;
    due = new Date(now + 10 * MINUTE_MS);
  } else if (rating === 'hard') {
    intervalDays = prior.intervalDays < 1 ? 1 : Math.max(1, Math.round(prior.intervalDays * 1.2));
    ease = Math.max(1.3, ease - .05);
    due = new Date(now + intervalDays * DAY_MS);
  } else {
    intervalDays = prior.intervalDays < 1 ? 2 : prior.intervalDays < 3 ? 5 : Math.max(3, Math.round(prior.intervalDays * ease));
    ease = Math.min(3, ease + .05);
    due = new Date(now + intervalDays * DAY_MS);
  }
  state.cards[cardIndex] = { rating, due: due.toISOString(), intervalDays, ease, reviews: prior.reviews + 1, lapses };
  persist(`Card scheduled: ${formatCardDue(state.cards[cardIndex])}.`);
  const next = nextReadyIndex(cardIndex);
  cardIndex = next >= 0 ? next : Number(earliestScheduledIndex() ?? cardIndex);
  cardRevealed = false;
  renderCard();
}

function addError(event) {
  event.preventDefault();
  const questionField = document.querySelector('#error-question');
  const fixField = document.querySelector('#error-fix');
  const validation = document.querySelector('#error-validation');
  const question = questionField.value.trim();
  const fix = fixField.value.trim();
  if (!question || !fix) {
    validation.textContent = !question && !fix
      ? 'Add the failed claim or question and the corrected mechanism before saving.'
      : !question
        ? 'Add the failed claim or question before saving.'
        : 'Add the corrected mechanism before saving.';
    validation.hidden = false;
    questionField.setAttribute('aria-invalid', String(!question));
    fixField.setAttribute('aria-invalid', String(!fix));
    (!question ? questionField : fixField).focus();
    announce(validation.textContent);
    return;
  }
  validation.hidden = true;
  questionField.removeAttribute('aria-invalid');
  fixField.removeAttribute('aria-invalid');
  state.errors.unshift({
    question,
    type: document.querySelector('#error-type').value,
    fix,
    date: new Date().toISOString(),
    resolved: false
  });
  event.currentTarget.reset();
  persist('Error added.');
  renderLedger();
}

function renderLedger() {
  const ledger = document.querySelector('#error-ledger');
  if (!state.errors.length) {
    const empty = document.createElement('p');
    empty.className = 'muted';
    empty.textContent = 'No errors logged. Either perfect, or not testing hard enough.';
    ledger.replaceChildren(empty);
    return;
  }
  ledger.replaceChildren(...state.errors.map((error, index) => {
    const entry = document.createElement('article');
    entry.className = `entry${error.resolved ? ' resolved' : ''}`;
    const copy = document.createElement('div');
    const title = document.createElement('b');
    title.textContent = error.question;
    const meta = document.createElement('small');
    meta.textContent = `${error.type} · ${new Date(error.date).toLocaleDateString('en-AU')} · ${error.resolved ? 'resolved' : 'open'}`;
    const fix = document.createElement('p');
    fix.textContent = error.fix;
    copy.append(title, meta, fix);
    const actions = document.createElement('div');
    actions.className = 'entry-actions';
    const resolve = document.createElement('button');
    resolve.type = 'button';
    resolve.textContent = error.resolved ? 'Reopen' : 'Resolve';
    resolve.addEventListener('click', () => toggleError(index));
    const remove = document.createElement('button');
    remove.type = 'button';
    remove.className = 'delete';
    remove.textContent = 'Delete';
    remove.addEventListener('click', () => deleteError(index));
    actions.append(resolve, remove);
    entry.append(copy, actions);
    return entry;
  }));
}

function toggleError(index) { state.errors[index].resolved = !state.errors[index].resolved; persist(); renderLedger(); }
function deleteError(index) { state.errors.splice(index, 1); persist('Ledger entry deleted.'); renderLedger(); }

const EXPORT_APP = 'neur3301-exam-lab';
const EXPORT_SCHEMA = 1;

function exportData() {
  const envelope = { app: EXPORT_APP, schemaVersion: EXPORT_SCHEMA, exportedAt: new Date().toISOString(), state };
  const url = URL.createObjectURL(new Blob([JSON.stringify(envelope, null, 2)], { type: 'application/json' }));
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = `NEUR3301-exam-lab-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.append(anchor);
  anchor.click();
  anchor.remove();
  setTimeout(() => URL.revokeObjectURL(url), 0);
  showToast('Progress exported.');
}

// Accept the versioned envelope, and stay backward-compatible with the
// pre-envelope exports that were just the raw state object.
function unwrapEnvelope(parsed) {
  const envelopeMarkers = parsed && typeof parsed === 'object' && !Array.isArray(parsed)
    ? ['app', 'schemaVersion', 'state'].filter(key => Object.prototype.hasOwnProperty.call(parsed, key))
    : [];
  if (envelopeMarkers.length) {
    if (envelopeMarkers.length !== 3) throw new Error('versioned export envelope is incomplete');
    if (parsed.app !== EXPORT_APP) throw new Error(`this file is for “${parsed.app}”, not the Exam Lab`);
    if (!Number.isInteger(parsed.schemaVersion) || parsed.schemaVersion < 1) throw new Error('schemaVersion must be a positive integer');
    if (parsed.schemaVersion > EXPORT_SCHEMA) throw new Error(`file schema v${parsed.schemaVersion} is newer than this app supports (v${EXPORT_SCHEMA})`);
    return parsed.state;
  }
  return parsed;
}

function importData(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const importedState = normaliseState(validateImportedState(unwrapEnvelope(JSON.parse(reader.result))));
      state = importedState;
      persist('Progress imported and validated.');
      renderAll();
    } catch (error) {
      showToast(`Import rejected: ${error.message}`);
    } finally {
      event.target.value = '';
    }
  };
  reader.onerror = () => showToast('The selected file could not be read.');
  reader.readAsText(file);
}

function resetAll() {
  if (!confirm('Reset lectures, MCQs, answer plans, cards and the error ledger? Export first if you may want this data later.')) return;
  state = defaultState();
  activeQuestion = null;
  cardIndex = 0;
  cardRevealed = false;
  answerIndex = 0;
  answerGuideRevealed = false;
  resetAnswerTimer();
  persist('All local progress reset.');
  renderAll();
}

function renderAll() {
  renderCountdowns();
  renderDashboard();
  renderLectureMap();
  renderLectureBriefs();
  renderAnswer();
  renderCard();
  renderLedger();
  if (document.querySelector('#quiz').classList.contains('active')) nextQuestion();
}

function followDataGo(button) {
  if (button.id === 'next-action-button' && button.dataset.go === 'quiz' && weakQuestions().length) {
    document.querySelector('#quiz-block').value = 'Weak';
    activeQuestion = null;
    questionAnswered = false;
  }
  switchView(button.dataset.go);
}

const tabButtons = [...document.querySelectorAll('.tab')];
tabButtons.forEach(tab => tab.addEventListener('click', () => switchView(tab.dataset.view)));
document.querySelector('.tabs').addEventListener('keydown', event => {
  const current = tabButtons.indexOf(document.activeElement);
  if (current === -1) return;
  let next = null;
  if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = (current + 1) % tabButtons.length;
  else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = (current - 1 + tabButtons.length) % tabButtons.length;
  else if (event.key === 'Home') next = 0;
  else if (event.key === 'End') next = tabButtons.length - 1;
  if (next === null) return;
  event.preventDefault();
  switchView(tabButtons[next].dataset.view);
  tabButtons[next].focus();
});
document.querySelectorAll('[data-go]').forEach(button => button.addEventListener('click', () => followDataGo(button)));
document.querySelector('#quiz-block').addEventListener('change', () => { activeQuestion = null; nextQuestion(); });
document.querySelector('#next-question').addEventListener('click', nextQuestion);
document.querySelector('#reset-quiz').addEventListener('click', resetQuiz);
document.querySelector('#answer-prompt-select').addEventListener('change', event => selectAnswerPrompt(event.target.value));
document.querySelector('#answer-draft').addEventListener('input', queueAnswerSave);
document.querySelector('#save-answer').addEventListener('click', () => saveAnswerDraft());
document.querySelector('#reveal-answer-guide').addEventListener('click', toggleAnswerGuide);
document.querySelector('#answer-timer-toggle').addEventListener('click', toggleAnswerTimer);
document.querySelector('#answer-timer-reset').addEventListener('click', resetAnswerTimer);
document.querySelectorAll('.answer-rating').forEach(button => button.addEventListener('click', () => rateAnswer(button.dataset.rating)));
document.querySelector('#flashcard').addEventListener('click', revealCard);
document.querySelector('#reveal-card').addEventListener('click', revealCard);
document.querySelector('#previous-card').addEventListener('click', () => moveCard(-1));
document.querySelector('#next-card').addEventListener('click', () => moveCard(1));
document.querySelector('#again-card').addEventListener('click', () => rateCard('again'));
document.querySelector('#hard-card').addEventListener('click', () => rateCard('hard'));
document.querySelector('#good-card').addEventListener('click', () => rateCard('good'));
document.querySelector('#error-form').addEventListener('submit', addError);
document.querySelectorAll('#error-question, #error-fix').forEach(field => field.addEventListener('input', () => {
  document.querySelector('#error-validation').hidden = true;
  field.removeAttribute('aria-invalid');
}));
document.querySelector('#export-data').addEventListener('click', exportData);
document.querySelector('#import-data').addEventListener('change', importData);
document.querySelector('#reset-all').addEventListener('click', resetAll);
document.addEventListener('keydown', event => {
  if (/INPUT|SELECT|TEXTAREA/.test(event.target.tagName)) return;
  if (document.querySelector('#quiz').classList.contains('active')) {
    if (/^[1-4]$/.test(event.key) && !questionAnswered) document.querySelectorAll('.option')[Number(event.key) - 1]?.click();
    if (event.key.toLowerCase() === 'n') nextQuestion();
  } else if (document.querySelector('#cards').classList.contains('active')) {
    if (event.key === ' ' || event.key === 'Enter') { event.preventDefault(); revealCard(); }
    else if (event.key === 'ArrowRight') moveCard(1);
    else if (event.key === 'ArrowLeft') moveCard(-1);
    else if (cardRevealed && event.key.toLowerCase() === 'a') rateCard('again');
    else if (cardRevealed && event.key.toLowerCase() === 'h') rateCard('hard');
    else if (cardRevealed && event.key.toLowerCase() === 'g') rateCard('good');
  }
});

renderAll();
setInterval(renderCountdowns, 3600000);

function announce(msg) {
  const el = document.querySelector('#a11y-status');
  if (el) { el.textContent = ''; setTimeout(() => { el.textContent = msg; }, 50); }
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('../sw.js').catch(() => {});
  });
}
