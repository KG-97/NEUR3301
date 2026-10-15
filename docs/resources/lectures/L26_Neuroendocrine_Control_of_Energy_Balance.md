# NEUR3301 Lecture 26 - Neuroendocrine Control of Energy Balance

**Timetable attribution — unconfirmed:** 5 October 2026 · Jeremy Smith · Final exam. Verify the date and lecturer against the LMS or Outlook before treating them as official.

> Evidence boundary: this note is built from the **released lecture slide PDF**, not the lecture recording, so spoken emphasis, verbal caveats and any "this will be examined" cues are not captured. Several slides are figure-only (hypothalamic atlas, lesion schematic, optogenetic panels, Fos and pSTAT3 micrographs, circuit diagrams); only their text labels could be read, so figure details are not reconstructed. The deck carries no year label, and one early title slide is headed "Advanced Reproductive Neuroendocrinology" — apparently a carry-over, not a separate topic.

## What this lecture is really about

One question runs through the deck: how does the brain know how much energy the body has, and how does it turn that knowledge into eating more or eating less? The answer comes in three layers:

1. **Peripheral reporters.** Fat, pancreas, stomach and gut release hormones whose levels track stored and incoming energy.
2. **An arcuate decision pair.** Two intermingled populations in the arcuate nucleus (ARC) read those hormones in opposite directions: **NPY/AgRP neurons push intake up, POMC neurons push it down.**
3. **Downstream convergence.** Both populations project to the paraventricular nucleus (PVN), where their peptides compete at the same receptor (MC4R), while a wider network — VMH, DMH, LH and reward/memory regions — shapes the outcome.

Appetite is a **balance**, but not a symmetric one: the hunger side has a built-in advantage. Most exam-grade reasoning in this lecture follows from that asymmetry.

## What you need to know cold

### The signals and the nuclei

1. **Definition.** Neuroendocrine appetite control = peripheral metabolic hormones informing the brain about available energy, and the brain adjusting appetite to hold body weight steady.
2. **Sources.** Adipose tissue → **leptin**; pancreas → **insulin**; stomach → **ghrelin**; intestine → **CCK, GLP-1, oxyntomodulin and PYY**. The slides develop ghrelin (hunger), leptin and insulin (satiety) in detail; PYY is named on the slides but not developed further. The intestinal peptides are broadly satiety signals (context beyond the slides).
3. **Five nuclei to name:** arcuate (ARC), ventromedial (VMH), lateral hypothalamus (LH), dorsomedial (DMH), paraventricular (PVN).

### From lesions to "centres"

4. Over a century ago, damage to the **hypothalamus — not the pituitary —** was found to cause obesity, separating a brain-circuit cause from an endocrine-gland cause.
5. **1940s–50s electrolytic lesions:** VMH lesions → overeating and obesity (VMH labelled a **satiety centre**); LH lesions → refusal to eat and starvation (LH labelled a **feeding centre**).
6. **Double lesion:** an animal made obese by a VMH lesion and then given an LH lesion stops eating and starves. The LH lesion wins, so the overeating released by VMH damage needs an intact LH to be expressed.

### The arcuate nucleus: two opposing populations

7. **NPY/AgRP neurons increase food intake; POMC neurons suppress it.** POMC (paired with CART on the outcomes slide) is processed to **α-MSH**, the main anorectic peptide.
8. **Optogenetics (Sternson lab, channelrhodopsin):** light-activating AgRP neurons drives eating; light-activating POMC neurons reduces intake. These are **sufficiency** tests.
9. **Ablation:** losing POMC → obesity; ablating AgRP neurons → starvation and death (Gropp et al. 2005, cited on the slide). These are **necessity** tests.
10. **State dependence:** POMC neurons are more active in **positive** energy balance (after a meal, in obesity); AgRP neurons are more active in **negative** energy balance (calorie restriction).
11. **Free-radical hypothesis:** POMC neurons generate more free radicals than AgRP neurons, which may make them more prone to degeneration. Preferential POMC loss over time would weaken satiety drive → more eating → weight gain → **adult-onset obesity**. The slide hedges this ("may"), so present it as a proposed mechanism.
12. **One-way inhibition:** AgRP neurons send **GABAergic** input onto POMC neurons; POMC neurons do not inhibit AgRP neurons. Activating AgRP is "foot off the brake, foot on the accelerator". **Co-activating both populations raises intake about as much as AgRP activation alone.**

### The PVN: where the outputs meet

13. **α-MSH → MC4R** in the PVN suppresses intake.
14. **NPY → Y1 and Y5 receptors** in the PVN increases intake.
15. **AgRP antagonises MC4R**, preventing α-MSH's anorectic effect. AgRP neurons therefore promote eating twice over at the PVN: adding NPY drive and blocking the melanocortin brake.

### Hormonal control of the two ARC populations

16. **NPY/AgRP neurons express GHSR (the ghrelin receptor), the leptin receptor and the insulin receptor.** Ghrelin **activates** them; leptin and insulin **inhibit** them.
17. **POMC neurons express leptin and insulin receptors but not GHSR.** Leptin **activates** them. Ghrelin has **no direct** effect; it suppresses POMC **indirectly** by driving AgRP neurons (point 12). The slides do not state the direction of insulin's action on POMC.
18. **Read-outs used on the slides:** **Fos** (an immediate-early gene product that appears in the nucleus of activated cells) — ghrelin given to NPY-GFP mice on chow produces Fos in GFP-labelled NPY neurons. **pSTAT3** marks leptin-responsive neurons and appears in both ARC and VMH.

### Beyond the arcuate ("not the whole story")

19. **ARC LepR/GABA neurons** that are neither AgRP nor POMC appear on a circuit slide as a population whose role is still unresolved (the figure detail could not be checked from the text layer).
20. **VMH:** expresses leptin receptors; leptin signalling here prevents obesity partly by raising POMC activity. Leptin regulates **BDNF**, and VMH BDNF signalling prevents obesity.
21. **DMH:** BDNF prevents hyperphagia and obesity; leptin-responsive neurons regulate intake. **Fasting, lactation and calorie restriction raise DMH NPY**, an adaptive response that restores energy balance — but the same neurons may also drive overeating and contribute to obesity.
22. **LH:** **orexin** neurons acutely increase intake but chronically protect against obesity, and matter more for **arousal**; **MCH** (melanin-concentrating hormone — the slide's "melanocortin" is a slip) increases intake; LH leptin-responsive neurons are **neither orexin nor MCH** but influence POMC.
23. **Extra-hypothalamic modulators:** cortex, nucleus accumbens, amygdala, hippocampus and VTA all feed into hypothalamic control, so reward, emotion and memory can bend homeostatic signals.

## Causal mechanism chains

```text
FED / LEPTIN STATE
More fat mass -> more leptin (plus insulin after a meal)
-> leptin-receptor signalling (pSTAT3) in ARC and VMH
   -> POMC neurons excited -> alpha-MSH in PVN -> MC4R activated
   -> NPY/AgRP neurons inhibited -> less NPY at Y1/Y5,
      less AgRP blockade of MC4R, less GABA onto POMC
   -> VMH leptin/BDNF signalling further supports POMC activity
-> net anorexigenic tone -> reduced intake -> body weight defended
```

```text
FASTED / GHRELIN STATE
Negative energy balance -> ghrelin rises, leptin and insulin fall
-> ghrelin binds GHSR on NPY/AgRP neurons (Fos+); POMC has no GHSR
-> AgRP neurons fire
   -> GABA onto POMC -> POMC silenced (ghrelin's indirect effect)
   -> NPY at PVN Y1/Y5 -> orexigenic drive
   -> AgRP antagonises PVN MC4R -> residual alpha-MSH blocked
   (DMH NPY also rises in fasting, lactation, calorie restriction)
-> net orexigenic tone -> increased intake
```

```text
WHY THE HUNGER SIDE WINS
AgRP -> GABA -> POMC          present
POMC -> inhibition -> AgRP    absent
Co-activate AgRP + POMC
-> POMC output suppressed locally
-> AgRP additionally blocks MC4R downstream
-> intake rises much as with AgRP alone
```

```text
PROPOSED ROUTE TO ADULT-ONSET OBESITY (HYPOTHESIS)
POMC neurons most active in positive balance -> more free radicals
-> oxidative burden may cause preferential POMC degeneration with age
-> weaker satiety drive; AgRP tone relatively unopposed
-> increased intake -> weight gain -> adult-onset obesity
```

Context beyond the slides: in mice, acute eating evoked by AgRP neurons depends mainly on their inhibitory projection to the PVN rather than on the local AgRP→POMC synapse, so the asymmetry operates at more than one site.

## Key experiments

**1. Lesion mapping (rodents, 1940s–50s).** Electrolytic lesions of VMH or LH; then an LH lesion in VMH-obese animals → VMH lesion gives obesity, LH lesion gives starvation, the double lesion gives starvation → opposing hypothalamic regions, with LH drive required to express VMH-lesion overeating. *Limit:* electrolytic lesions destroy every cell type and passing fibre in the zone; "centre" is an anatomical label, not a cell-type mechanism.

**2. Channelrhodopsin photostimulation (mouse).** ChR2 expressed in AgRP or POMC neurons and switched on in behaving animals, singly and together → AgRP drives rapid eating, POMC reduces intake, co-activation drives eating like AgRP alone → each population is sufficient, and AgRP dominates. *Limit:* synchronous artificial drive proves sufficiency, not that natural firing does the same.

**3. Genetic ablation (mouse; Gropp et al. 2005).** Selectively kill AgRP neurons in adults; compare POMC loss → AgRP loss collapses feeding, causing starvation and death; POMC loss causes obesity → AgRP neurons are necessary for feeding and POMC for restraint. *Limit (context beyond the slides):* deleting the NPY or AgRP genes alone barely changes intake, and ablation in neonates is compensated — the whole neuron (including its GABA) matters more than either peptide, and timing matters.

**4. Fos after ghrelin (mouse).** NPY-GFP mice on chow given ghrelin, then stained for Fos → Fos-positive nuclei in GFP-labelled NPY neurons → ghrelin activates NPY neurons; with GHSR on those cells, a direct action is plausible. *Limit:* Fos is a delayed, correlational activity marker; it cannot separate direct receptor action from network input and cannot report inhibition.

**5. pSTAT3 after leptin (mouse).** Leptin, then staining for phosphorylated STAT3 → labelled neurons in ARC and VMH → these neurons carry functional leptin receptors. *Limit:* pSTAT3 reports receptor signalling, not whether firing went up or down — leptin inhibits AgRP neurons even though they also express leptin receptors.

## Evidence-type check

| Claim type | On these slides | How to write it |
|---|---|---|
| Animal vs human | All mechanistic data are rodent: lesions, optogenetics, ablation, Fos, pSTAT3 | Human relevance is motivated by the obesity epidemic, not demonstrated in human circuits |
| Correlation vs causation | Energy-state activity differences and marker staining are correlational; photostimulation and ablation are causal | Say "sufficient" for optogenetics, "necessary" for ablation |
| Measurement vs mechanism | Fos and pSTAT3 measure activation or receptor engagement | They locate responsive cells; they do not prove the synaptic route |
| Established vs proposed | POMC free-radical degeneration is hedged | Call it a hypothesis for adult-onset obesity |

## Examiner traps / common overclaims

1. **"VMH = satiety centre, LH = feeding centre"** taken literally. These are lesion-era labels; modern answers name cell populations and receptors.
2. **"AgRP and POMC are equal and opposite."** The connection is one-way (AgRP → POMC), and AgRP also blocks MC4R, so co-activation favours eating.
3. **"Ghrelin inhibits POMC neurons directly."** POMC neurons lack GHSR; the suppression is relayed through AgRP GABA.
4. **"AgRP activates MC4R."** AgRP is an MC4R antagonist; α-MSH is the agonist. NPY works through Y1/Y5, not MC4R.
5. **"pSTAT3-positive means excited."** pSTAT3 shows leptin-receptor signalling; leptin excites POMC but inhibits NPY/AgRP.
6. **"MCH is a melanocortin."** Melanin-concentrating hormone is an LH orexigenic peptide, not a POMC product (context beyond the slides: it does not act at MC4R).
7. **"Orexin is just a hunger peptide."** Acute intake rises, but chronic orexin action protects against obesity and its larger role is arousal.
8. **"DMH NPY is purely adaptive."** It restores balance in fasting and lactation but may promote overeating and obesity.
9. **"POMC free radicals cause human obesity."** A hedged rodent-based hypothesis, not an established human mechanism. (Context beyond the slides: free radicals can also act as acute activating signals in POMC neurons.)
10. **"Ablating AgRP neurons = deleting the AgRP peptide."** Neuron ablation removes all co-released transmitters; peptide knockouts are mild (context beyond the slides).

## Interrogation prompts

1. Delete the leptin receptor from POMC neurons only. Predict POMC activity, AgRP activity and body weight on a normal diet, and why the phenotype may be milder than whole-body leptin loss.
2. Delete GHSR from AgRP neurons only, then inject ghrelin. Predict the change in Fos in AgRP neurons, in POMC firing and in food intake.
3. Infuse an MC4R antagonist into the PVN, then photostimulate POMC neurons. Predict intake and justify using the PVN receptors.
4. Block PVN Y1/Y5 receptors while photostimulating AgRP neurons. Predict whether eating is abolished or only reduced, and name the remaining routes.
5. Give POMC neurons a lifelong antioxidant boost. What does the free-radical hypothesis predict for body weight in old age, and what result would falsify it?
6. A VMH-lesioned obese rat receives an LH lesion. Predict intake, then explain what a cell-type-specific ablation would add to the inference.
7. A lactating rat is in negative energy balance. Predict DMH NPY and intake, and explain how the same response could become maladaptive.
8. Orexin neurons are lost. Predict acute intake and long-term body weight, and explain why the two predictions point in different directions.
9. Leptin is injected and an ARC neuron becomes pSTAT3-positive. Design a measurement that tells you whether that neuron was excited or inhibited.
10. Context beyond the slides: AgRP neurons are ablated in neonates versus adults. Predict feeding in each case and explain why timing changes the answer.

## Active recall — close the notes

- Name the hormone from each source: fat, pancreas, stomach, and four from the intestine.
- List the five hypothalamic nuclei in this lecture and one role for each.
- What did VMH lesions, LH lesions and the VMH-then-LH double lesion each produce?
- Which ARC population increases intake, which suppresses it, and what is the main anorectic POMC peptide?
- Which receptors do NPY/AgRP neurons express, and how does each hormone act on them? Repeat for POMC.
- How does ghrelin suppress POMC neurons without GHSR?
- Give the three PVN actions: α-MSH, NPY and AgRP — receptor and direction.
- Why does co-activating AgRP and POMC neurons still increase intake?
- In which energy states is each ARC population most active?
- Outline the free-radical route to adult-onset obesity and say why it is a hypothesis.
- What do Fos and pSTAT3 each report, and what can neither prove?
- What do VMH BDNF, DMH NPY, orexin and MCH each do to intake or body weight?
