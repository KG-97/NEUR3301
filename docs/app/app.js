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

const questions = [
  { id: 'l1-origin', lecture: 1, block: 'Test 1', topic: 'Glia I', stem: 'Which developmental origin most clearly distinguishes microglia from CNS macroglia?', options: ['Neural crest', 'Early yolk-sac erythromyeloid progenitors', 'Adult bone marrow in the healthy brain', 'Radial glia'], answer: 1, explanation: 'Microglia colonise the embryonic CNS from early yolk-sac macrophage lineages and largely self-renew locally. Astrocytes and oligodendrocyte-lineage cells are neuroectodermal.', trap: 'Do not generalise the neural-crest origin of Schwann cells to CNS glia.' },
  { id: 'l1-myelin', lecture: 1, block: 'Test 1', topic: 'Glia I', stem: 'Which comparison between myelinating cells is correct?', options: ['One Schwann cell myelinates many CNS axons', 'One oligodendrocyte can form internodes on multiple CNS axons', 'Oligodendrocytes are neural-crest derived', 'Microglia form peripheral myelin'], answer: 1, explanation: 'A single oligodendrocyte can myelinate segments on several CNS axons. A myelinating Schwann cell normally forms one internode on one PNS axon.', trap: 'Separate CNS/PNS location from the number of internodes formed per cell.' },
  { id: 'l2-retrograde', lecture: 2, block: 'Test 1', topic: 'Growth and trophic factors', stem: 'Target-derived neurotrophin binds a Trk receptor at an axon terminal. What best supports a long-range survival response?', options: ['The ligand must diffuse through the nucleus', 'A signalling endosome can undergo retrograde axonal transport', 'The receptor is converted into a neurotransmitter', 'The soma passively detects extracellular calcium'], answer: 1, explanation: 'Ligand–Trk complexes can signal locally and from retrogradely transported endosomes, coupling target access to transcriptional survival programmes in the soma.', trap: '“Retrograde” here describes transport toward the soma, not retrograde synaptic transmission.' },
  { id: 'l2-competition', lecture: 2, block: 'Test 1', topic: 'Growth and trophic factors', stem: 'In the classic neurotrophic-factor hypothesis, why do excess developing neurons die?', options: ['Every target releases an unlimited survival signal', 'Neurons compete for limiting target-derived support', 'All immature neurons are intrinsically programmed to die simultaneously', 'Myelin directly selects the surviving soma'], answer: 1, explanation: 'Targets provide limiting trophic support. Neurons that establish effective access activate survival pathways; others undergo programmed cell death.', trap: 'Cell death is regulated and competitive, not random cellular “wastage”.' },
  { id: 'l3-netrin', lecture: 3, block: 'Test 1', topic: 'Axon guidance', stem: 'Why is “netrin is an attractant” an incomplete rule?', options: ['Netrin has no receptors', 'The response depends on receptor state and intracellular context', 'All axons ignore diffusible cues', 'Attraction only occurs after myelination'], answer: 1, explanation: 'The same cue can promote attraction or repulsion depending on receptor combinations, co-receptors and intracellular signalling state.', trap: 'Guidance cues are not permanently assigned one behavioural sign.' },
  { id: 'l3-ephrin', lecture: 3, block: 'Test 1', topic: 'Axon guidance', stem: 'Graded Eph receptor and ephrin expression is especially useful for:', options: ['Generating action potentials', 'Building continuous topographic maps', 'Making cerebrospinal fluid', 'Triggering vesicle fusion'], answer: 1, explanation: 'Complementary molecular gradients provide positional information that helps map neighbouring source neurons onto neighbouring target locations.', trap: 'A map can arise from graded relative signalling, not a unique label for every axon.' },
  { id: 'l4-apoptosis', lecture: 4, block: 'Test 1', topic: 'Regressive events and cell death', stem: 'Loss of trophic support most directly favours which regulated death pathway?', options: ['Mitochondrial outer-membrane permeabilisation and caspase activation', 'Immediate osmotic lysis without signalling', 'Action-potential broadening only', 'Constitutive synaptic potentiation'], answer: 0, explanation: 'Trophic withdrawal can shift BCL-2-family signalling toward mitochondrial permeabilisation, cytochrome-c release and the intrinsic caspase cascade.', trap: 'Programmed developmental death is not equivalent to acute necrotic rupture.' },
  { id: 'l4-pruning', lecture: 4, block: 'Test 1', topic: 'Regressive events and cell death', stem: 'Which statement correctly separates axon pruning from neuronal apoptosis?', options: ['Pruning always kills the soma', 'Pruning can remove selected branches while preserving the neuron', 'Apoptosis only removes synapses', 'They are molecularly and anatomically identical'], answer: 1, explanation: 'Regressive development can be compartment-specific. Axons or synapses may be removed while the parent neuron survives.', trap: 'Do not infer whole-cell death from local structural elimination.' },
  { id: 'l5-notch', lecture: 5, block: 'Test 1', topic: 'Cell lineage', stem: 'High Notch signalling in a neural progenitor most commonly tends to:', options: ['Maintain progenitor identity and suppress premature neuronal differentiation', 'Force immediate axon myelination', 'Convert the cell into microglia', 'Open voltage-gated sodium channels'], answer: 0, explanation: 'Notch–Hes programmes often maintain progenitor state and inhibit proneural differentiation, allowing neighbouring cells with lower Notch activity to differentiate.', trap: 'Notch effects are context-dependent, but “high Notch equals immediate neuron” reverses the usual developmental logic.' },
  { id: 'l5-lineage', lecture: 5, block: 'Test 1', topic: 'Cell lineage', stem: 'A lineage-tracing experiment is designed primarily to determine:', options: ['The membrane potential of every descendant', 'Which cell types descend from a labelled progenitor over time', 'Whether a ligand binds its receptor in vitro', 'The exact number of synaptic vesicles released'], answer: 1, explanation: 'A heritable label marks a progenitor and its descendants, revealing fate relationships across development.', trap: 'Marker co-expression at one time point is not, by itself, proof of ancestry.' },
  { id: 'l6-human', lecture: 6, block: 'Test 1', topic: 'Adult neurogenesis', stem: 'What is the safest claim about adult hippocampal neurogenesis in humans?', options: ['It is absent in every adult', 'It is abundant and methodologically settled', 'Evidence remains disputed and depends strongly on tissue and detection methods', 'The adult SVZ supplies most human olfactory neurons'], answer: 2, explanation: 'Rodent adult neurogenesis is well established, but the extent and persistence of the phenomenon in adult humans remain methodologically contested.', trap: 'Do not transfer the size and certainty of rodent effects directly to humans.' },
  { id: 'l6-stemcell', lecture: 6, block: 'Test 1', topic: 'Adult neurogenesis', stem: 'Which result best demonstrates self-renewal rather than survival alone?', options: ['A labelled cell remains alive for one day', 'A progenitor generates differentiated descendants while preserving progenitor capacity across serial divisions', 'A neuron expresses NeuN once', 'A culture contains growth factor'], answer: 1, explanation: 'Stemness requires both production of differentiated progeny and maintenance of the stem/progenitor pool over repeated divisions.', trap: 'Long survival and marker expression do not establish self-renewal.' },
  { id: 'l7-bbb', lecture: 7, block: 'Test 1', topic: 'Glia II', stem: 'Which cells form the physical paracellular seal of the blood–brain barrier?', options: ['Astrocyte endfeet', 'Brain endothelial cells with tight junctions', 'Microglia', 'Oligodendrocytes'], answer: 1, explanation: 'Specialised brain endothelial tight junctions form the seal. Astrocytes, pericytes and basement-membrane signals regulate barrier development and maintenance.', trap: 'Astrocyte endfeet support and regulate the BBB; they are not the tight-junction seal.' },
  { id: 'l7-states', lecture: 7, block: 'Test 1', topic: 'Glia II', stem: 'Why should simple A1/A2 astrocyte and M1/M2 microglia labels be used cautiously?', options: ['Glia never change state', 'In-vivo states are multidimensional and vary with region, time, disease and method', 'Only neurons express genes', 'The labels describe fixed embryonic lineages'], answer: 1, explanation: 'Glial responses occupy diverse, overlapping state spaces. Binary labels can hide biologically important context and heterogeneity.', trap: 'Convenient shorthand is not a complete ontology.' },

  { id: 'l8-chloride', lecture: 8, block: 'Test 2', topic: 'Membrane mechanisms', stem: 'Vm is −65 mV and ECl is −70 mV. Opening chloride channels initially drives:', options: ['Chloride out and inward conventional current', 'Chloride in and outward conventional current', 'Chloride in and inward conventional current', 'No ion flux'], answer: 1, explanation: 'Vm − ECl = +5 mV. Negative chloride enters, producing outward conventional current and driving Vm toward −70 mV.', trap: 'Ion movement and conventional-current direction are opposite for anions.' },
  { id: 'l8-drivingforce', lecture: 8, block: 'Test 2', topic: 'Membrane mechanisms', stem: 'If a channel conductance is unchanged but Vm moves closer to that ion’s equilibrium potential, the current magnitude should generally:', options: ['Increase because conductance dominates', 'Decrease because electrochemical driving force shrinks', 'Reverse without crossing the equilibrium potential', 'Become independent of voltage'], answer: 1, explanation: 'For an approximately ohmic current, I = g(Vm − Eion). With fixed conductance, current falls as Vm approaches Eion.', trap: 'Open-channel number and driving force are separate determinants of current.' },
  { id: 'l9-minis', lecture: 9, block: 'Test 2', topic: 'Quantal transmission', stem: 'Miniature event frequency rises while mean amplitude is unchanged. What is the best first inference?', options: ['Postsynaptic receptor gain increased', 'Presynaptic spontaneous release increased', 'Quantal size increased', 'The reversal potential shifted'], answer: 1, explanation: 'Frequency usually reflects presynaptic event rate; unchanged amplitude argues that postsynaptic quantal size is broadly intact.', trap: 'This is an inference, not a proof—detection thresholds and synapse number can confound it.' },
  { id: 'l9-binomial', lecture: 9, block: 'Test 2', topic: 'Quantal transmission', stem: 'In a simple binomial release model, mean synaptic response is proportional to:', options: ['n × p × q', 'n + p − q', 'p/q only', 'Membrane resistance only'], answer: 0, explanation: 'The model separates number of release sites n, release probability p and quantal size q. Mean response is n·p·q under its simplifying assumptions.', trap: 'Real synapses may violate independence and uniform-p assumptions.' },
  { id: 'l10-calcium', lecture: 10, block: 'Test 2', topic: 'Neurotransmitter release', stem: 'Halving presynaptic calcium influx reduces release about sixteen-fold over a measured range. What follows?', options: ['Exactly four calcium ions bind', 'The system shows roughly fourth-power effective cooperativity in that range', 'Four vesicles must fuse', 'Every calcium channel has four subunits'], answer: 1, explanation: 'A log–log slope near four describes effective system cooperativity over the tested range; it does not establish literal molecular stoichiometry.', trap: 'A phenomenological exponent is not automatically a count of binding sites.' },
  { id: 'l10-sensor', lecture: 10, block: 'Test 2', topic: 'Neurotransmitter release', stem: 'Which pairing best describes fast synchronous vesicle fusion?', options: ['Synaptotagmin senses calcium; SNAREs provide the fusion machinery', 'AMPA receptors sense calcium; kinesin forms the pore', 'Clathrin triggers exocytosis; dynein cleaves SNAREs', 'PSD-95 transports vesicles down the axon'], answer: 0, explanation: 'Calcium binding to synaptotagmin rapidly promotes SNARE-mediated membrane fusion at release-ready vesicles.', trap: 'Endocytic proteins recycle membrane after release; they are not the fast calcium trigger.' },
  { id: 'l11-ppr', lecture: 11, block: 'Test 2', topic: 'Synaptic plasticity', stem: 'A high paired-pulse ratio most often suggests:', options: ['High initial release probability', 'Low initial release probability with residual-calcium facilitation', 'More postsynaptic AMPA receptors with certainty', 'Long-term depression'], answer: 1, explanation: 'Paired-pulse facilitation often varies inversely with initial release probability because residual calcium boosts the second response.', trap: 'PPR is an index with confounds, not a direct release-probability meter.' },
  { id: 'l11-ltp', lecture: 11, block: 'Test 2', topic: 'Synaptic plasticity', stem: 'In canonical CA1 LTP induction, coincident glutamate binding and postsynaptic depolarisation matter because depolarisation:', options: ['Removes the voltage-dependent Mg²⁺ block of NMDA receptors', 'Closes every AMPA receptor', 'Prevents calcium entry', 'Degrades CaMKII'], answer: 0, explanation: 'Depolarisation relieves NMDA-receptor Mg²⁺ block, allowing calcium entry that activates plasticity signalling when glutamate is present.', trap: 'The NMDA receptor acts as a coincidence detector; glutamate alone is often insufficient at resting voltage.' },
  { id: 'l12-initiation', lecture: 12, block: 'Test 2', topic: 'AIS plasticity', stem: 'Why is the axon initial segment usually the action-potential initiation site?', options: ['It contains no potassium channels', 'Its geometry and high density of voltage-gated sodium channels favour spike initiation', 'It is electrically isolated from the soma', 'It releases trophic factors into blood'], answer: 1, explanation: 'The AIS has specialised scaffolds and high sodium-channel density, making it the lowest-threshold site for regenerative spike initiation in many neurons.', trap: '“Usually” matters: initiation site depends on cell type and state.' },
  { id: 'l12-remodel', lecture: 12, block: 'Test 2', topic: 'AIS plasticity', stem: 'What is the most defensible general claim about structural AIS plasticity?', options: ['AIS movement always increases excitability', 'Changes in AIS position or length can alter excitability, but direction depends on cellular context', 'The AIS cannot remodel after development', 'AIS plasticity changes only neurotransmitter identity'], answer: 1, explanation: 'Activity-dependent changes in AIS geometry and channel organisation can tune excitability, but the functional sign depends on morphology, conductances and measurement conditions.', trap: 'Avoid turning one preparation’s directional effect into a universal rule.' },
  { id: 'l13-complement', lecture: 13, block: 'Test 2', topic: 'Synaptic pruning', stem: 'Which is the most precise simplified complement-pruning sequence?', options: ['C1q/classical pathway → C3 deposition → CR3 recognition of complement-opsonised material', 'CR3 synthesises C1q inside neurons', 'C4 must always act after C3', 'Complement only affects adult peripheral nerves'], answer: 0, explanation: 'Complement tagging can lead to C3-fragment deposition on selected material and recognition by microglial CR3, supporting engulfment in defined developmental contexts.', trap: 'The pathway is context-specific; do not claim it explains every form of pruning.' },
  { id: 'l13-causality', lecture: 13, block: 'Test 2', topic: 'Synaptic pruning', stem: 'Microglia contain synaptic material after a developmental manipulation. What does this observation alone establish?', options: ['Microglia caused all synapse loss', 'Microglia contacted or engulfed synaptic material, but causal necessity needs intervention', 'The material was never neuronal', 'Complement is certainly required'], answer: 1, explanation: 'Imaging supports association and engulfment. Causal necessity requires perturbing the proposed microglial pathway and measuring synapse or circuit outcomes.', trap: 'Presence inside a cell does not by itself prove that pathway caused the phenotype.' },

  { id: 'l14-transduction', lecture: 14, block: 'Final', topic: 'Biophysics of transduction', stem: 'A sensory receptor potential differs from an action potential because it is typically:', options: ['Graded with stimulus strength', 'All-or-none and non-decrementing', 'Independent of ion channels', 'Restricted to myelinated axons'], answer: 0, explanation: 'Transduction channels usually generate graded receptor potentials; these are converted into spike timing or transmitter release downstream.', trap: 'Do not collapse stimulus transduction and action-potential generation into one event.' },
  { id: 'l16-feedback', lecture: 16, block: 'Final', topic: 'Centrifugal control', stem: 'A centrifugal sensory pathway carries signals primarily:', options: ['From peripheral receptors toward the CNS', 'From higher or central regions back toward earlier sensory processing stages', 'Only between spinal motor neurons', 'From muscle to tendon'], answer: 1, explanation: 'Centrifugal or efferent feedback can alter gain, selectivity and signal-to-noise in earlier sensory circuits.', trap: 'The direction is central-to-earlier-stage, not the usual afferent feedforward direction.' },
  { id: 'l18-bold', lecture: 18, block: 'Final', topic: 'Measuring brain activity', stem: 'The fMRI BOLD signal is best described as:', options: ['A direct recording of neuronal action potentials', 'An indirect haemodynamic proxy shaped by neurovascular coupling', 'A measure of one neurotransmitter only', 'A cellular-resolution voltage trace'], answer: 1, explanation: 'BOLD reflects changes in blood oxygenation and flow coupled to local activity. It is spatially and temporally indirect.', trap: 'Activation maps are not literal photographs of neurons firing.' },
  { id: 'l19-contrast', lecture: 19, block: 'Final', topic: 'Vision', stem: 'Centre–surround receptive fields are especially suited to encode:', options: ['Absolute luminance regardless of context', 'Local spatial contrast and edges', 'Eye colour', 'Descending motor commands'], answer: 1, explanation: 'Antagonistic centre–surround organisation suppresses uniform input and emphasises local luminance differences.', trap: 'Early visual neurons prioritise contrast over a raw light-meter representation.' },
  { id: 'l20-haircells', lecture: 20, block: 'Final', topic: 'Peripheral auditory processing', stem: 'Which division of labour in the mammalian cochlea is most accurate?', options: ['Inner hair cells provide most afferent signalling; outer hair cells provide active mechanical amplification', 'Outer hair cells alone carry all auditory afferents', 'Inner hair cells set middle-ear pressure', 'Both cell types are central neurons'], answer: 0, explanation: 'Inner hair cells are the main sensory output to auditory afferents; outer hair-cell electromotility sharpens and amplifies basilar-membrane responses.', trap: 'Amplification and primary afferent transmission are related but distinct jobs.' },
  { id: 'l22-hpa', lecture: 22, block: 'Final', topic: 'HPA axis', stem: 'Under ordinary negative feedback, rising glucocorticoids tend to:', options: ['Increase CRH and ACTH without limit', 'Suppress upstream hypothalamic and pituitary drive', 'Directly open cochlear hair-cell channels', 'Eliminate circadian regulation'], answer: 1, explanation: 'Glucocorticoid receptor signalling feeds back across hypothalamic, pituitary and higher circuits to restrain further HPA activation.', trap: 'Feedback can be altered by context and chronic stress, but the canonical loop is inhibitory.' },
  { id: 'l25-cerebellum', lecture: 25, block: 'Final', topic: 'Cerebellar networks', stem: 'Which statement best distinguishes climbing and mossy fibre input to the cerebellar cortex?', options: ['Climbing fibres strongly contact Purkinje cells; mossy fibres act through granule-cell parallel fibres', 'Mossy fibres arise only from Purkinje cells', 'Climbing fibres never influence plasticity', 'Both inputs bypass the cerebellar cortex'], answer: 0, explanation: 'Inferior-olive climbing fibres provide powerful Purkinje-cell input, while mossy fibres recruit granule cells whose parallel fibres contact Purkinje cells.', trap: 'The two pathways differ in source, convergence and teaching/context roles.' },
  { id: 'l26-energy', lecture: 26, block: 'Final', topic: 'Energy balance', stem: 'Leptin signalling in the arcuate nucleus generally favours which acute pattern?', options: ['Activate AgRP/NPY and inhibit POMC', 'Activate POMC and inhibit AgRP/NPY', 'Silence every hypothalamic neuron', 'Trigger GnRH release only'], answer: 1, explanation: 'Leptin signals energy sufficiency, tending to promote anorexigenic POMC output and restrain orexigenic AgRP/NPY neurons.', trap: 'Obesity can involve leptin resistance despite high circulating leptin.' },
  { id: 'l27-pulses', lecture: 27, block: 'Final', topic: 'Fertility', stem: 'Why does GnRH pulsatility matter?', options: ['Continuous and pulsatile GnRH are always equivalent', 'Pulse pattern regulates gonadotroph responsiveness; continuous exposure can desensitise the axis', 'GnRH acts only on the adrenal gland', 'GnRH is stored in ovarian follicles only'], answer: 1, explanation: 'Pulsatile GnRH sustains and patterns LH/FSH secretion, whereas continuous agonist exposure can downregulate pituitary responsiveness.', trap: 'Frequency is part of the signal, not background noise.' },
  { id: 'l30-scar', lecture: 30, block: 'Final', topic: 'Spinal cord repair', stem: 'Why is “the glial scar only blocks repair” inaccurate?', options: ['CSPGs never inhibit axons', 'Reactive astrocyte borders can also contain inflammation and preserve tissue', 'Astrocytes disappear after injury', 'Only microglia respond to injury'], answer: 1, explanation: 'Scar-associated signals can inhibit axon growth, while reactive borders can limit inflammatory spread and protect surviving tissue. Function depends on time, state and intervention.', trap: 'A structure can have both protective and inhibitory effects.' }
];

// Optional per-question notes on why each distractor is wrong, keyed by
// question id then by the original option index. Used only on a wrong
// answer; questions without an entry degrade to the Examiner trap line.
const distractorNotes = {
  'l1-origin': {
    0: "Neural crest gives rise to PNS Schwann cells and neurons, not CNS microglia — that is the trap being set.",
    2: "In the healthy adult brain microglia self-renew locally; bone-marrow monocytes do not routinely replenish them.",
    3: "Radial glia are neuroectodermal progenitors for neurons and macroglia, not the source of microglia."
  },
  'l1-myelin': {
    0: "Schwann cells are peripheral and normally form one internode on one axon; they do not myelinate CNS axons.",
    2: "Oligodendrocytes are neuroectodermal, not neural-crest derived — neural crest supplies PNS glia.",
    3: "Peripheral myelin is made by Schwann cells; microglia are immune cells and do not myelinate."
  },
  'l2-retrograde': {
    0: "Neurotrophins act through membrane Trk receptors and signalling endosomes, not by diffusing through the nucleus.",
    2: "Trk stays a receptor tyrosine kinase; it is not converted into a neurotransmitter.",
    3: "Survival is driven by target-derived Trk signalling reaching the soma, not passive somatic calcium sensing."
  },
  'l2-competition': {
    0: "Trophic support is limiting, not unlimited — that scarcity is exactly what drives the competition.",
    2: "Developmental death is competitive and target-dependent, not a synchronous intrinsic suicide of every neuron.",
    3: "Survival depends on target-derived neurotrophins, not on myelination selecting which soma lives."
  },
  'l3-netrin': {
    0: "Netrin signals through receptors such as DCC and UNC5; it is receptor state, not their absence, that sets the sign.",
    2: "Axons clearly respond to diffusible cues — guidance is the whole point of netrin.",
    3: "Guidance operates during outgrowth, well before myelination, and is independent of it."
  },
  'l3-ephrin': {
    0: "Action potentials come from voltage-gated channels, not from graded guidance-molecule expression.",
    2: "Cerebrospinal fluid is produced by the choroid plexus; ephrin gradients encode position, not fluid.",
    3: "Vesicle fusion is a synaptic release event, unrelated to Eph/ephrin topographic mapping."
  },
  'l4-apoptosis': {
    1: "Osmotic lysis without signalling is necrosis; trophic withdrawal drives regulated, caspase-dependent apoptosis.",
    2: "Action-potential broadening is an excitability change, not a cell-death pathway.",
    3: "Synaptic potentiation is a form of plasticity, not a mechanism of programmed cell death."
  },
  'l4-pruning': {
    0: "Pruning is compartment-specific and can spare the soma; it does not necessarily kill the neuron.",
    2: "Apoptosis removes the whole cell, not just synapses — that is what separates it from pruning.",
    3: "The two differ in scale and mechanism; treating them as identical is the error being tested."
  },
  'l5-notch': {
    1: "Notch keeps cells as progenitors; it does not drive myelination, which is a later oligodendrocyte role.",
    2: "Microglia arise from the yolk-sac lineage, not from Notch signalling in neuroectodermal progenitors.",
    3: "Notch is a transcriptional signalling pathway, not a direct gate for sodium channels."
  },
  'l5-lineage': {
    0: "Lineage tracing follows cell descent, not electrophysiology such as membrane potential.",
    2: "Ligand–receptor binding is a biochemistry assay; lineage tracing tracks cell ancestry over time.",
    3: "Vesicle counts are a synaptic measure, unrelated to tracing which cell types a progenitor makes."
  },
  'l6-human': {
    0: "Claiming total absence overstates the negative case; the honest position is that the evidence is contested.",
    1: "Abundant, settled human neurogenesis is exactly what remains disputed — this overclaims certainty.",
    3: "Robust adult SVZ-to-olfactory turnover is a rodent finding; it is not established for adult humans."
  },
  'l6-stemcell': {
    0: "Staying alive for a day shows survival, not the self-renewal the question asks you to demonstrate.",
    2: "A single NeuN-positive snapshot shows differentiation, not maintenance of a progenitor pool.",
    3: "Presence of a growth factor is a culture condition, not evidence of self-renewal."
  },
  'l7-bbb': {
    0: "Astrocyte endfeet regulate and support the barrier but are not the tight-junction seal itself — the classic trap.",
    2: "Microglia are immune cells and play no structural role in the paracellular seal.",
    3: "Oligodendrocytes myelinate axons; they are not part of the blood–brain barrier."
  },
  'l7-states': {
    0: "Glia clearly change state; the problem is that binary labels are too coarse, not that states are fixed.",
    2: "Glia express rich transcriptional programmes — the claim that only neurons express genes is simply false.",
    3: "A1/A2 and M1/M2 describe reactive states, not fixed embryonic lineages."
  },
  'l8-chloride': {
    0: "Driving force Vm − ECl = +5 mV pushes Cl⁻ inward, not outward — you reversed the ion direction.",
    2: "Cl⁻ does enter, but for an anion inward movement is outward conventional current, not inward.",
    3: "Vm and ECl differ by 5 mV, so a driving force exists and net flux does occur."
  },
  'l8-drivingforce': {
    0: "With conductance fixed, current follows the driving force (Vm − Eion); conductance cannot make it rise here.",
    2: "Current only reverses sign when Vm crosses Eion; approaching it just shrinks the current toward zero.",
    3: "For I = g(Vm − Eion), current depends directly on voltage through the driving-force term."
  },
  'l9-minis': {
    0: "Higher postsynaptic gain would raise mini amplitude; amplitude is unchanged here, pointing presynaptic.",
    2: "Quantal size maps to amplitude, which did not change — frequency instead reflects release rate.",
    3: "A reversal-potential shift would alter amplitude or direction, not selectively raise event frequency."
  },
  'l9-binomial': {
    1: "Mean release is a product of n, p and q, not a sum — the model multiplies these terms.",
    2: "Release probability alone is insufficient; site number n and quantal size q also scale the mean.",
    3: "Membrane resistance shapes the postsynaptic response, not the binomial release mean."
  },
  'l10-calcium': {
    0: "A log–log slope near four is phenomenological cooperativity, not proof that exactly four ions bind.",
    2: "The exponent describes the calcium–release relationship, not a fixed number of fusing vesicles.",
    3: "Channel subunit count is unrelated to the measured calcium dependence of release."
  },
  'l10-sensor': {
    1: "AMPA receptors are postsynaptic and kinesin is a transport motor; neither triggers fast fusion.",
    2: "Clathrin and dynein act in endocytosis and transport, not in triggering calcium-evoked exocytosis.",
    3: "PSD-95 is a postsynaptic scaffold; it does not transport presynaptic vesicles."
  },
  'l11-ppr': {
    0: "High initial release probability usually gives depression (low ratio); facilitation implies a low starting p.",
    2: "Paired-pulse ratio is a presynaptic index; it does not certainly report postsynaptic receptor number.",
    3: "The ratio probes short-term dynamics within a pulse pair, not long-term depression."
  },
  'l11-ltp': {
    1: "Depolarisation does not close AMPA receptors; it relieves the NMDA Mg²⁺ block to admit calcium.",
    2: "The point of coincidence is to allow calcium entry through NMDA receptors, not to prevent it.",
    3: "CaMKII is activated downstream of the calcium signal, not degraded by depolarisation."
  },
  'l12-initiation': {
    0: "The AIS does contain K⁺ channels; its low threshold comes from high Na⁺-channel density, not their absence.",
    2: "The AIS is electrically continuous with the soma; isolation would prevent, not cause, initiation.",
    3: "The AIS is a spike-initiation zone, not a neuroendocrine secretory structure."
  },
  'l12-remodel': {
    0: "The direction of the excitability change depends on morphology and conductances; it is not always an increase.",
    2: "The AIS remodels in an activity-dependent way in mature neurons; it is not fixed after development.",
    3: "AIS plasticity tunes excitability and geometry, not the neuron’s transmitter identity."
  },
  'l13-complement': {
    1: "CR3 is a microglial receptor that recognises opsonised material; it does not synthesise C1q inside neurons.",
    2: "In the classical pathway C4 acts before C3, and the sequence is context-specific, not a fixed C3-then-C4 order.",
    3: "Complement-mediated pruning operates in the developing CNS, not only in adult peripheral nerves."
  },
  'l13-causality': {
    0: "Engulfment shows association; it cannot by itself prove microglia caused all of the synapse loss.",
    2: "Finding synaptic material inside microglia shows it was neuronal, which contradicts this option.",
    3: "This observation alone does not establish that complement is required — that needs a perturbation."
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
    points: ['Distinguish potency, proliferation, survival and self-renewal.', 'Explain lineage tracing with a heritable, temporally controlled label.', 'Require repeated divisions while progenitor capacity is retained.', 'Use validated identity and function of differentiated descendants.', 'Qualify species and methodological claims about adult human neurogenesis.'],
    experiment: 'Perform sparse inducible lineage tracing with longitudinal or clonal analysis and serial re-plating/transplantation where appropriate.',
    limitation: 'Labels can be leaky, injury can alter lineage behaviour, and marker panels may not uniquely define cell identity.'
  },
  {
    id: 'synaptic-strength', domain: 'Synaptic physiology', lectures: [8, 9, 10],
    question: 'A manipulation halves the evoked postsynaptic response. Build a strategy to decide whether the cause is altered membrane driving force, release probability, release-site number or quantal size.',
    thesis: 'The same change in mean synaptic amplitude can arise from distinct pre- and postsynaptic mechanisms, so converging measurements are needed to localise the causal step.',
    points: ['Use I = g(Vm − Eion) to separate conductance from driving force.', 'Introduce the simplifying relation mean response ≈ n·p·q.', 'Interpret miniature frequency and amplitude with explicit confounds.', 'Use paired-pulse or variance measures as indices rather than direct proof of p.', 'Relate presynaptic calcium and synaptotagmin/SNARE function to evoked release.'],
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
  ['Engulfment vs causation in pruning?', 'Synaptic material inside microglia shows contact/engulfment; proving the pathway is necessary requires perturbing it and measuring synapse or circuit outcomes.']
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
    detail.textContent = 'Select “Weak items” in MCQ Forge and retrieve the mechanism before reading the options.';
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
  document.querySelector('#answer-progress').textContent = `${record.checks.length}/${prompt.points.length} blueprint elements checked · ${record.attempts} ${record.attempts === 1 ? 'attempt' : 'attempts'} · ${rating}`;
  document.querySelectorAll('.answer-rating').forEach(button => {
    const active = button.dataset.rating === record.rating;
    button.setAttribute('aria-pressed', String(active));
  });
  renderAnswerTimer();
}

function saveAnswerDraft(message = 'Answer plan saved.') {
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
  state.errors.unshift({
    question: document.querySelector('#error-question').value.trim(),
    type: document.querySelector('#error-type').value,
    fix: document.querySelector('#error-fix').value.trim(),
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
  if (parsed && typeof parsed === 'object' && !Array.isArray(parsed) && 'app' in parsed && 'state' in parsed) {
    if (parsed.app !== EXPORT_APP) throw new Error(`this file is for “${parsed.app}”, not the Exam Lab`);
    if (Number(parsed.schemaVersion) > EXPORT_SCHEMA) throw new Error(`file schema v${parsed.schemaVersion} is newer than this app supports (v${EXPORT_SCHEMA})`);
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
      state = normaliseState(unwrapEnvelope(JSON.parse(reader.result)));
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
  renderAnswer();
  renderCard();
  renderLedger();
  if (document.querySelector('#quiz').classList.contains('active')) nextQuestion();
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
document.querySelectorAll('[data-go]').forEach(button => button.addEventListener('click', () => switchView(button.dataset.go)));
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
