# NEUR3301 Lecture 27 - Neuroendocrine Control of Fertility

**Timetable attribution — unconfirmed:** 6 October 2026 · Jeremy Smith · Final exam. Verify the date and lecturer against the LMS or Outlook before treating them as official.

> Evidence boundary: this note is built from the **released lecture slide PDF** (deck header "Kisspeptin 2022"), not the lecture recording, so spoken emphasis, verbal caveats and any "this will be examined" signals are not captured. Many slides are figures (in situ hybridisation images, LH traces, optogenetic and metabolic plots) whose data are not in the text layer. Where a direction of effect comes from the cited primary paper rather than the slide text, it is flagged.

## What this lecture is really about

One question runs through the deck: how does the brain convert information about the body — circulating sex steroids, developmental stage, energy stores — into the timing of GnRH release? The answer it builds is that **kisspeptin neurons sit upstream of GnRH neurons and act as the integrating relay**. The four stated outcomes give the structure:

1. Kisspeptin stimulates GnRH release.
2. Kiss1 expression is regulated by sex steroids.
3. Kisspeptin and puberty.
4. Kisspeptin and energy balance.

The argument is cumulative: **anatomy** (where the cells, fibres and receptors are) -> **regulation** (what steroids do to Kiss1 expression) -> **function** (antagonist, explant and optogenetic tests) -> **limits** (ablation and knockout studies that complicate the simple story). Nearly all of the evidence is from **mice, rats and sheep**; human relevance is inferred.

## What you need to know cold

### The axis and the molecule

1. **The HPG axis gains a layer.** Kiss1 neurons -> GnRH neurons -> GnRH into the pituitary portal blood -> LH/FSH from gonadotrophs -> gonadal sex steroids -> feedback drawn onto the **Kiss1 neurons**, not directly onto GnRH neurons.
2. **Gene, peptide, receptor.** The *Kiss1* gene yields a precursor processed into **kisspeptin-54 (metastin)** and shorter fragments (**kisspeptin-14, -13, -10**). All act at **GPR54**, now called **Kiss1r**, a G-protein-coupled receptor (Gottsch et al. 2004).
3. **GnRH neurons carry the receptor.** Double-label in situ hybridisation (GPR54 silver grains over GnRH-labelled cells) shows **more than 90%** of GnRH neurons express GPR54 mRNA (Irwig et al. 2004; Han et al. 2005). Han et al. also showed kisspeptin depolarises nearly all adult GnRH neurons, with the responsive fraction rising across postnatal development (context from the cited paper).

### Where the Kiss1 neurons are and what they reach

4. In the mouse hypothalamus, Kiss1 mRNA sits in two main populations: the **anteroventral periventricular nucleus (AVPV)** and the **arcuate nucleus (ARC)**.
5. **ARC kisspeptin neurons project to the external zone of the median eminence** in sheep. An anterograde tracer (BDA) placed in the ARC labels fibres that co-stain for kisspeptin in the external zone — the zone where GnRH terminals release into portal blood (Smith et al. 2011).
6. **Neurokinin B (NKB)**-immunoreactive fibres also occupy this median-eminence territory.
7. **Functional test:** kisspeptin increased GnRH release from **isolated median-eminence explants**. The explant contains GnRH terminals but no GnRH cell bodies, so this supports a **terminal-to-terminal** action.

### Steroid feedback

8. **Oestradiol regulates the two populations in opposite directions.** Adult female mice were compared as intact (dioestrus), ovariectomised (OVX) or OVX plus oestradiol for 7 days. ARC Kiss1 mRNA **rose after OVX and was suppressed by oestradiol**; AVPV Kiss1 mRNA **fell after OVX and was restored by oestradiol** (Smith et al. 2005 — the slide shows image panels; the directions are stated in the paper).
9. Hence the model: **ARC Kiss1 = negative feedback; AVPV Kiss1 = positive feedback.**
10. **Optogenetics (channelrhodopsin, mouse):** ARC Kiss1 neurons control the negative-feedback-regulated **GnRH pulses**; AVPV Kiss1 neurons control the positive-feedback **GnRH surge** in females. The slide states the conclusions; the source studies are not named in the text layer.
11. **Steroid receptors on Kiss1 cells.** Kiss1 cells co-express ERα, ERβ, androgen receptor and progesterone receptor, at frequencies ranging from about a third to nearly all cells depending on receptor and population. **ERα is the near-universal one**: virtually all ARC and AVPV Kiss1 neurons carry it, and oestradiol's effect on Kiss1 was lost in ERα-deficient but not ERβ-deficient mice (context from Smith et al. 2005). The summary model labels AVPV cells with oestrogen receptors and ARC cells with oestrogen, androgen and progesterone receptors.
12. **Why a relay is needed:** GnRH neurons themselves largely lack ERα (context beyond the slides), so a steroid-sensitive upstream population explains how feedback reaches them.

### KNDy neurons and the pulse generator

13. **ARC kisspeptin neurons co-express NKB and dynorphin — "KNDy" neurons** (Goodman et al. 2007, ewe). In that study almost all ARC kisspeptin cells contained dynorphin and over three-quarters contained NKB; preoptic kisspeptin cells did not contain dynorphin (context from the paper).
14. **Working model** (review diagram; Pinilla et al. 2012): NKB is the stimulatory, synchronising signal within the KNDy network, dynorphin is the inhibitory signal that ends each bout, and kisspeptin is the output to GnRH. Treat these specific roles as a model the slides illustrate, not something they test directly.
15. **Central kisspeptin-antagonist infusion inhibits LH pulses in OVX ewes** (slide cites Smith et al., *Endocrinology*).
16. **Central NKB-receptor (NK3R) antagonist MRK-08 inhibits LH pulses in OVX ewes** (Li et al. 2015). The same paper found the oestrogen-induced surge survived NK3R blockade (context from the paper) — NKB is tied to pulse mode, not essential for positive feedback in sheep.
17. **LH is the read-out.** GnRH is rarely measured directly; LH pulses in peripheral blood are used as a proxy for GnRH pulses.

### Puberty

18. Puberty begins with reactivation of GnRH secretion, and kisspeptin was presented as a leading candidate trigger. The deck shows the 2005 *Science* "what don't we know?" issue, which listed the trigger for puberty as open (nutrition, including in utero, implicated), and a 2012 journal cover on kisspeptin turning puberty on.
19. **The complication — Mayer & Boehm (2011).** *Kiss1*-IRES-Cre mice crossed with Cre-activated diphtheria toxin (R26-DTA) mice lose kisspeptin cells from early development. Females still reach puberty and are **fertile, though with smaller ovaries**; mice lacking GPR54-expressing neurons were also fertile. Acute ablation of kisspeptin neurons in adults inhibited fertility, so the authors propose **developmental compensation**.
20. A light-hearted slide uses an animated-film medical scan that "diagnoses" a teenager's puberty with GPR54 and GnRH among the readouts — kisspeptin signalling as popular shorthand for puberty.
21. **Human context (beyond the slides):** loss-of-function mutations in *KISS1R*, and in the NKB gene *TAC3* or its receptor *TACR3*, cause hypogonadotropic hypogonadism with absent or delayed puberty — evidence of necessity in humans that sits uneasily with the mouse compensation result.

### Energy balance

22. **Framework** (Barsh & Schwartz 2002): body weight reflects intake versus expenditure. Orexigenic neuropeptides raise intake and lower expenditure; anorexigenic ones do the reverse. The slide's question: does kisspeptin belong in this circuit?
23. **Kiss1r knockout mice get fat** (Tolson et al. 2014). The paper shows this is chiefly a **female** phenotype; males kept normal body weight (context from the paper).
24. **The obesity persists after ovariectomy**: knockouts still carry more fat than OVX wild types, so missing ovarian oestradiol does not fully explain it.
25. **Energy expenditure is reduced**, most visibly in the dark (active) phase. Tolson et al. also reported lower locomotor activity and that knockout females ate *less* (context from the paper) — so the imbalance is on the expenditure side.
26. **Hypothalamic Pomc expression is higher** in Kiss1r knockouts at 8 and 20 weeks (De Bond et al. 2016). In the full paper the difference vanished after gonadectomy, suggesting it tracks sex-steroid differences and may be compensatory (context beyond the slides).
27. **Brown adipose tissue Ucp1 expression** in knockout versus wild-type mice is plotted (unpublished data) as a pointer to thermogenesis; the direction and pattern of the change are in the figure rather than the text layer, so they are not reconstructed here.

## Mechanism chains

```text
NEGATIVE FEEDBACK (pulse mode)
Low or falling gonadal steroid (e.g. after OVX)
-> less ERα-mediated suppression of ARC Kiss1 neurons
-> ARC Kiss1 expression rises; KNDy network active
   (model: NKB excites/synchronises, dynorphin terminates each bout)
-> episodic kisspeptin release onto GnRH terminals in the median-eminence external zone
-> GnRH pulses into portal blood -> LH pulses
-> returning steroid suppresses ARC Kiss1 again (loop closes)
```

```text
POSITIVE FEEDBACK (surge mode, females)
Sustained high preovulatory oestradiol
-> ERα in AVPV Kiss1 neurons -> AVPV Kiss1 expression increases
-> strong kisspeptin drive to GnRH neurons (optogenetic evidence, mouse)
-> GnRH surge -> LH surge -> ovulation
(kisspeptin antagonist attenuates the oestradiol-induced LH surge in ewes:
 Smith et al. 2011 — context from the paper, not the slide text)
```

```text
SAME HORMONE, OPPOSITE SIGN
Oestradiol
-> ERα in ARC Kiss1 neurons  -> Kiss1 DOWN -> pulses restrained (negative)
-> ERα in AVPV Kiss1 neurons -> Kiss1 UP   -> surge built (positive)
The nucleus, not the hormone, decides the sign.
```

```text
KISS1R LOSS AND BODY WEIGHT (mouse, female-dominant)
Global Kiss1r knockout
-> hypogonadism + loss of any non-reproductive kisspeptin signalling
-> lower energy expenditure and activity; altered BAT Ucp1
-> positive energy balance without eating more
-> obesity that persists after OVX (not oestradiol loss alone)
```

## Key experiments

1. **Steroid regulation of Kiss1 (mouse).** Intact vs OVX vs OVX + oestradiol for 7 days; Kiss1 mRNA by in situ hybridisation -> ARC up after OVX and down with oestradiol; AVPV the reverse -> each population is steroid-regulated with opposite sign, matching negative and positive feedback. *Limit:* mRNA measures expression, not peptide release.
2. **Kisspeptin at the median eminence (sheep).** Anterograde tracing from ARC plus kisspeptin immunostaining; kisspeptin applied to isolated median-eminence explants -> ARC kisspeptin fibres reach the external zone; kisspeptin raises GnRH release from explants -> kisspeptin can act directly at GnRH terminals. *Limit:* shows sufficiency at one site, not that somatic action is irrelevant.
3. **Central antagonists in OVX ewes.** Kisspeptin antagonist or NK3R antagonist (MRK-08) infused into the brain, LH sampled frequently -> LH pulses suppressed by both -> kisspeptin and NKB signalling are needed for pulse generation when steroid feedback is removed. *Limit:* LH is a downstream proxy for GnRH; OVX animals lack normal feedback.
4. **Early kisspeptin-cell ablation (mouse).** Kiss1-Cre x R26-DTA -> puberty and fertility preserved, smaller ovaries; acute adult ablation impairs fertility -> developmental compensation masks necessity.
5. **Kiss1r knockout plus OVX (mouse).** Fat mass compared in OVX knockout vs OVX wild type -> knockout still fatter -> kisspeptin signalling affects energy balance partly independently of ovarian steroids. *Limit:* a global knockout cannot locate the site of action.

## Examiner traps / common overclaims

- **"Oestradiol inhibits kisspeptin."** Only in the ARC. In the AVPV oestradiol increases Kiss1 — nucleus decides sign.
- **"GnRH neurons sense oestradiol directly."** The model routes feedback through ERα-positive Kiss1 neurons.
- **Expression is not mechanism.** Kiss1 mRNA levels and GPR54 co-expression show capacity; antagonist, explant and optogenetic experiments test function.
- **"Normal puberty after ablation means kisspeptin is dispensable."** Compensation after early loss differs from necessity in the intact animal; adult ablation impairs fertility, and human mutations cause hypogonadism.
- **"NKB drives everything KNDy does."** NK3R blockade abolished pulses but spared the oestrogen-induced surge in sheep.
- **Dynorphin versus NKB.** In the model, dynorphin is the brake and NKB the accelerator; swapping them inverts every prediction.
- **Kiss1r-knockout obesity is "just hypogonadism"** — refuted by the OVX comparison. But do not overcorrect to "kisspeptin acts on fat cells"; the site of action is unresolved.
- **Species.** The AVPV-surge / ARC-pulse split is cleanest in rodents; sheep data on the slides concern ARC neurons and the median eminence.

## Interrogation prompts

1. Ovariectomise a female mouse and replace oestradiol. Predict ARC and AVPV Kiss1 mRNA in each group, and explain why the replacement group is the critical control.
2. An ERα knockout female is ovariectomised and given oestradiol. Predict the Kiss1 response in each nucleus, and say what that implies about the receptor route.
3. Infuse a kisspeptin antagonist centrally into an OVX ewe. Predict LH pulses and justify using LH rather than GnRH as the read-out.
4. Block NK3R in a ewe given an oestradiol challenge that normally induces a surge. Predict pulses versus surge.
5. Hypothetically block kappa-opioid receptors within the ARC. Using the KNDy model, predict pulse duration and frequency.
6. Isolated median-eminence explants release more GnRH with kisspeptin. Why does this support terminal action, and what can it *not* tell you?
7. Optogenetically drive AVPV Kiss1 neurons in a female with low oestradiol. What might be produced, and why might the response differ from that of a pro-oestrous female?
8. Kisspeptin cells are ablated at birth versus in adulthood. Predict fertility in each case and explain the difference.
9. A Kiss1r knockout female is obese. Design one experiment to separate a central from a peripheral (e.g. brown-fat) site of action.
10. Pomc is higher in intact knockouts but not after gonadectomy. What does this say about cause versus consequence?

## Active recall — close the notes

- Name the Kiss1 gene product, its longest form and its receptor (two names).
- What percentage of GnRH neurons express GPR54, and how was it shown?
- Name the two hypothalamic Kiss1 populations and the feedback mode each serves.
- State the direction of Kiss1 change in each nucleus after OVX and after oestradiol replacement.
- Which steroid receptor is on virtually all Kiss1 neurons, and why does that matter for GnRH neurons?
- What does KNDy stand for, and what role does each peptide play in the model?
- Give the tracer and explant evidence for kisspeptin action at the median eminence.
- What did central kisspeptin and NK3R antagonists do to LH pulses in OVX ewes?
- Why can early kisspeptin-cell ablation leave fertility intact?
- Give three features of the Kiss1r-knockout metabolic phenotype and the experiment showing it is not only hypogonadism.
