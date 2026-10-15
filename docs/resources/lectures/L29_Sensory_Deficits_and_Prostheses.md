# NEUR3301 Lecture 29 - Sensory Deficits and Prostheses

**Timetable attribution — unconfirmed:** 12 October 2026 · Dr Jamie Beros · Final exam. Verify the date and lecturer against the LMS or Outlook before treating them as official.

> Evidence boundary: this note is built from the **released lecture slide PDF** (33 slides, 2026 deck), not the lecture recording, so spoken emphasis, verbal caveats and anything said over the figure-only slides are not captured. One slide is a still from an embedded patient-training video that could not be viewed. Numbers read off figures are approximate.

## What the lecture is really about

One rule runs through the deck: **a neuroprosthesis can only replace a stage of a pathway if every stage downstream of it still works.** Because sensory systems are labelled lines, activity injected into the right line is perceived as that modality with no real stimulus — stimulating the auditory nerve gives sound; stimulating retina or occipital cortex gives flashes of light (phosphenes). The case studies test that rule:

- **Cochlear implant** — the success story. Transduction fails, the nerve and central pathway survive, and a multichannel array exploits tonotopy.
- **Visual prostheses** — the cautionary tale: approved, crude, then discontinued. **Optogenetics** is the biological alternative: make surviving retinal ganglion cells respond to light.
- **Brain–computer interfaces (BCIs)** — the reverse direction: read activity out and decode it into commands.

## What you need to know cold

### General features

1. **Prosthesis:** an artificial device that replaces a missing or malfunctioning body part. Prostheses are ancient (cosmetic and functional); the modern shift is from simply replacing a part to **integrating with the nervous system**, peripheral or central.
2. **Neuroprosthesis:** a device that connects directly to the nervous system to restore or enhance function.
3. **Three design features** (a device needs some of them):
   - **Input/stimulation** — deliver electrical stimulation, or otherwise change physiology, to evoke a response. Sensory implants are "write-in" devices.
   - **Record/decode** — capture stimuli or ongoing neural signals and turn them into commands with algorithms. BCIs are "read-out" devices.
   - **Closed loop** — record, decode and adjust stimulation in real time using computational models (neurofeedback).
4. **Generalised sensory pathway:** stimulus → receptor (transduction: stimulus energy converted to an electrical signal) → primary sensory neuron (cell body in a sensory ganglion) → brainstem → thalamic nucleus → primary sensory cortex, with branches to arousal and emotion areas. Pathways **decussate**, which is why the side and level of a deficit help localise the lesion (site-of-lesion testing).
5. **Labelled lines:** each receptor type transduces one form of stimulus energy and feeds an orderly, modality-specific relay to its primary cortex, and activity in that line generates that percept. Corollary: activity arising higher up the line yields a percept with no stimulus — harmful when it arises spontaneously (**phantom pain, tinnitus**), useful when a **prosthesis** drives it.

### Cochlear implant (the "bionic ear")

6. Regarded as the first neuroprosthesis to be successfully developed and sold. Indication: **sensorineural hearing loss** — transduction is impaired but the auditory nerve and central pathway are intact.
7. **Ascending auditory pathway:** cochlea → cochlear nucleus → superior olivary complex → inferior colliculus → medial geniculate body → auditory cortex.
8. **History:** Djourno and Eyriès are credited with stimulating a patient's auditory nerve with an electrode; House and Doyle implanted single-channel electrodes in two patients (1957–1960); Graeme Clark (spelled "Clarke" on the slide) built a **multichannel** prototype. FDA approval: adults 1985, children 1990. ~737,000 recipients by 2019.
9. **Why multichannel?** Sound is coded two ways:
   - **Temporal code** — brainstem neurons fire in phase with the waveform, but only for low frequencies (up to ~1,500–3,000 Hz on the slide).
   - **Place code** — frequency maps onto position along the basilar membrane: **high at the base, low at the apex**.
   Higher frequencies depend on place, so one electrode cannot carry them. Separate contacts must drive fibre groups at different positions.
10. **Hardware:** an external microphone and sound processor turn sound into a coded signal (e.g., radio) sent to a receiver implanted under the skin behind the ear. The receiver drives an electrode array inside the cochlea that stimulates auditory nerve fibres at several points along its length.
11. **Outcomes:** useful, not normal, hearing — good in quiet, much worse in noise. In the slide figure implant users score ~80% on sentences in quiet, ~60% at +10 dB signal-to-noise and under 10% at 0 dB, while normal-hearing listeners stay above ~80% at 0 dB. A second figure shows sound processors losing different amounts in noise: **processing strategy changes performance**.
12. **Considerations:** not plug-and-play — users must learn to interpret the signal, with speech pathology support. Current work: better processing for speech and signal-to-noise; **shorter arrays placed in high-frequency (basal) regions** so neighbouring regions stay intact; and a second implant or a hearing aid in the other ear.

### Visual prostheses

13. **Visual pathway recap:** photoreceptors transduce light; signals pass through bipolar cells to **retinal ganglion cells (RGCs)**, with horizontal and amacrine cells acting laterally. RGC axons form the optic nerve. Targets: **lateral geniculate nucleus** (main RGC recipient in humans) → visual cortex; superior colliculus (orienting); pulvinar (visuomotor behaviour).
14. **History:** ~253 million people live with visual impairment. Foerster (1931) stimulated the occipital pole of a patient blind for 8 years and evoked phosphenes: **visual cortex still works after long deprivation**, so the first visual prostheses were cortical. The first retinal-implant patent is attributed to Tassicker (Australia, 1956).
15. **Retinal implants** became the most studied, with suitability depending on the type of deficit. The Argus II and Alpha-IMS were approved in 2013. The slide says FDA for both (context beyond the slides: the Alpha-IMS approval was European, so quote the year but be careful about the agency). Both **need working RGCs and optic nerve** to carry the evoked signal to cortex.
16. **Placement:** **epiretinal** (on the retinal surface) vs **subretinal** (within the retinal layers); the figure also shows a suprachoroidal site. Parts: camera, processor converting the image into a stimulation pattern, transmitter/receiver driving the electrodes.
17. **Devices:** Argus II — **60** independently controlled electrodes held on by a retinal tack (epiretinal). Alpha AMS — subretinal chip with **~1,600 photodiodes**. (Context beyond the slides: a photodiode chip senses light through the eye's own optics, where photoreceptors used to be, and drives the remaining inner retina.)
18. **What patients see:** phosphenes, not a 1:1 image. In principle more electrodes give more resolution; the slide simulates a scene at 16, 64 and 1,000 points beside the original.
19. **Reality check:** the approved devices were later discontinued with little or no support, and some recipients reportedly returned to blindness. No approved visual prosthesis is commercially available; many groups are developing new ones.

### Optogenetic vision restoration

20. **Optogenetics:** genetically modifying neurons to express a light-sensitive protein, so light of a set wavelength drives an electrical response.
21. **Vector:** intravitreal AAV2.7m8 carrying **ChrimsonR** (with a tdTomato reporter). ChrimsonR is a **light-gated cation channel** activated by ~590 nm (amber) light. Expression in **foveal ganglion cells** stabilises over about 2–6 months.
22. **Goggles:** a camera captures the scene, converts it to monochrome images and projects them onto the retina as **~595 nm pulses**.
23. **Course (single patient):** 15 visits over 84 weeks; safety and retained light perception reported; ~7 months of training, stepping up from eye-movement exercises without goggles to daily-life tasks with them (finding furniture, doors, pedestrian crossings).

### Brain–computer interfaces

24. **BCI:** records brain activity and uses algorithms to decode it into intended actions for an external device (computer, limb, wheelchair). Recording ranges from scalp EEG through ECoG to penetrating single- and multi-unit arrays.
25. **Monkey robot-arm study (Wessberg et al., 2000):** microwires (96 in one owl monkey, 32 in another) in premotor and primary motor cortex (the figure also shows posterior parietal recordings); 12–24 months of joystick and reach-to-food tasks. Single neurons were variably correlated with movement; linear and neural-network decoders reproduced the movements in a robot arm, with networks updated over the recording period.
26. **Human ECoG study (Brosler et al., 2026):** an ECoG implant over sensorimotor cortex in **3 people with paralysis**. Speech and gesture were decoded **in real time and at the same time**, driving a full-body avatar in copy and conversation tasks, with roughly **75–100%** accuracy.
27. **Field context:** driven by advances in engineering, materials, batteries, communication and AI, plus investor interest; uses range from restoration to "enhancement", raising ethical, philosophical and privacy concerns.

## Causal mechanism chains

```text
LABELLED-LINE LOGIC
Receptor transduces one energy type -> dedicated relay to primary cortex
-> cortex reads activity in that line as that modality
-> activity injected downstream of the receptor still yields that percept
   -> spontaneous: phantom pain, tinnitus
   -> device-driven: sound from a cochlear implant, phosphenes from a retinal or cortical implant
```

```text
COCHLEAR IMPLANT
Sound -> microphone -> processor splits it into frequency channels
-> coded signal crosses the skin -> implanted receiver
-> intracochlear contacts excite auditory-nerve fibres at specific places
   (basal contacts = high frequency, apical contacts = low frequency)
-> cochlear nucleus -> superior olive / inferior colliculus -> MGB -> auditory cortex
-> coarse but usable percept; learned with training; degrades in noise
FAILURE POINT: no surviving auditory nerve -> nothing downstream to drive
```

```text
RETINAL IMPLANT
Photoreceptors lost; inner retina, RGCs and optic nerve intact
-> camera or photodiodes capture the scene -> stimulation pattern built
-> epiretinal or subretinal electrodes depolarise surviving retinal neurons
-> RGC spikes -> optic nerve -> LGN -> visual cortex
-> phosphenes; resolution capped by electrode number
FAILURE POINT: RGC or optic-nerve loss -> no route to cortex
```

```text
OPTOGENETIC RESTORATION
Intravitreal AAV2.7m8 -> ChrimsonR expressed in foveal RGCs (2-6 months)
-> goggles convert the scene to monochrome images -> ~595 nm pulses on the retina
-> cation channel opens -> RGC depolarises -> spikes
-> optic nerve -> visual cortex -> perception refined by months of training
(lost photoreceptors are bypassed, not repaired)
```

```text
MOTOR BCI (READ-OUT)
Attempted movement or speech -> cortical population activity
-> electrodes record (microwires, ECoG)
-> decoder trained on activity-behaviour pairs (linear, neural network)
-> real-time prediction -> robot arm / avatar / computer
-> user sees the output (feedback); decoder retrained as signals drift
```

## Key experiments (design -> result -> inference)

**1. Foerster's cortical stimulation (1931; single human case).** Stimulate the occipital pole of a long-blind patient → phosphenes → deprived visual cortex can still generate a percept. Causal manipulation, but n = 1 with a subjective readout.

**2. Cochlear-implant speech in noise (human cohorts).** Sentence recognition in implant users vs normal-hearing listeners as signal-to-noise falls, and across sound processors → about 80% of sentences correct in quiet (normal listeners ~100%), ~60% at +10 dB and under 10% at 0 dB, with processors differing → enough spectral detail for speech in quiet but not to separate speech from noise. A behavioural measurement; the mechanism (few effective channels, current spread) is inferred (context beyond the slides).

**3. Ensemble decoding to a robot arm (Wessberg et al., 2000; non-human primates).** Chronic microwire recordings in premotor and motor cortex during trained tasks, fed to linear and neural-network decoders → trajectories predicted well enough to drive a robot arm → movement information is distributed across populations and can be read out. Correlational: decoding shows information content, not that these cells cause the movement.

**4. Optogenetic vision (Sahel et al., 2021; single human case, cited on the slide by the first author's given name).** ChrimsonR in foveal RGCs + 595 nm goggles + 7 months of training → safe, light perception retained, progression to daily-life visual tasks → surviving RGCs can be turned into light sensors. (Context beyond the slides: the paper reports object detection only when the treated eye and goggles were used together.) One patient shows feasibility, not efficacy across a population.

**5. Simultaneous speech and gesture decoding (Brosler et al., 2026; 3 humans with paralysis).** ECoG over sensorimotor cortex; cued attempts at speech, gesture or both; parallel decoders drive an avatar → ~75–100% accuracy, including combined behaviours, and the electrode maps show overlapping speech- and gesture-responsive sites → one implant can support multimodal communication. (Context beyond the slides: training on both isolated and combined attempts improved performance.)

## Examiner traps / common overclaims

- **"The implant restores normal hearing or vision."** It supplies a coarse code that must be learned: poor hearing in noise, phosphene vision.
- **"Any blind patient can have a retinal implant."** Only if RGCs and the optic nerve survive. Retinal implants and RGC optogenetics both rely on them; only a cortical device bypasses them.
- **"More electrodes means proportionally sharper vision."** The slide says resolution rises *theoretically* with electrode count. A photodiode count is not a count of independent percepts.
- **"Approval means the problem is solved."** The approved visual prostheses were discontinued, and some users lost their restored vision.
- **"Optogenetics repairs the retina."** It gives ganglion cells a light-gated channel. Photoreceptors stay lost, and ChrimsonR depolarises the cell (context beyond the slides: native photoreceptors hyperpolarise to light).
- **"Accurate decoding proves the neurons cause the movement."** Decoding is a read-out of correlated activity. Monkey results do not automatically transfer to humans, and decoders need retraining.
- **Tonotopy reversed.** Base = high frequency; apex = low frequency.

## Interrogation prompts

1. A patient's deafness follows destruction of both auditory nerves. Predict the benefit of a cochlear implant, and say which stage a device would need to target instead.
2. A retinal array grows from 60 to 1,000 electrodes, but current from each still spreads widely. Predict the change in perceived resolution, and explain why the slide says "theoretically".
3. Compare a patient with photoreceptor degeneration and one with advanced glaucoma (ganglion-cell loss). For each, predict whether an epiretinal implant, RGC optogenetics or a cortical implant could work.
4. A ChrimsonR-treated patient walks through an ordinarily lit room without goggles. Predict what they perceive, and explain what the goggles add.
5. A short basal array is chosen for someone with good low-frequency hearing. Which frequencies does the implant supply, and what is preserved? What happens if a full-length array damages the apex?
6. A motor decoder trained in month 1 is used unchanged in month 12. Predict performance, then propose how a closed-loop system would cope.
7. Use the labelled-line principle to explain tinnitus after cochlear damage. Where must the abnormal activity arise?
8. A sensory deficit appears on the left side of the body. How does decussation change where you look for the lesion?

## Active recall — close the notes

- Define prosthesis and neuroprosthesis, and list the three general features.
- Draw the generalised sensory pathway and mark where decussation matters.
- What is a labelled line? Give one harmful and one helpful consequence.
- Which hearing loss suits a cochlear implant, and what must be intact?
- Explain temporal vs place coding, give the frequency limit of phase-locking, and say which end of the cochlea codes high frequencies.
- What happens to implant users' speech scores as signal-to-noise falls?
- What did Foerster show in 1931, and why did it matter?
- Epiretinal vs subretinal: placement, example device, electrode or photodiode count.
- What must survive for a retinal implant to work?
- Give the vector, opsin, wavelength, target cell and expression time for the optogenetic case.
- Describe the Wessberg experiment in one sentence each for design, result and inference.
- What was new about the 2026 ECoG speech-and-gesture study?
