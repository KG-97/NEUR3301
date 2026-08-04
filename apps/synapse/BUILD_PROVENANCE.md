# Repository-hosted Synapse build

The deployable build is published from `docs/study-lab/`.

## Provenance

- Source location recovered from Google Drive: `Synapse_NEUR3301_v3_improved`
- Drive folder ID: `1_nXmghrspSBhvVPjsFLPHYhThEAM6LQJ`
- Alignment review date: 14 July 2026
- Imported to GitHub: 22 July 2026
- Last memory refresh: 4 August 2026 (see "Project memory checkpoint" below)
- Last course-content alignment: 4 August 2026 (released Lectures 3 and 4)
- Curriculum authority: `Handbook and timetable NEUR3301 2026 - 13 July.pdf`

## What this build fixes

- replaces the broken `port/5000/api/progress` dependency with browser `localStorage`;
- adds progress export, import and reset;
- maps all 29 content lectures from the supplied 2026 timetable;
- keeps assessment dates and weights aligned to the handbook;
- incorporates the audit's major scientific corrections and evidence qualifiers;
- runs as static files with no API key, account or backend.

## Important limitation

This is a clean compiled static build, not the maintainable React/TypeScript project. Do not edit the minified bundle as if it were source. The source-consolidation track remains open until the actual project files, package manifest and tests are recovered from the strongest source bundle.

The richer externally hosted Synapse X remains linked from the portal because it adds MCQ, diagram and long-answer systems not established in this recovered static build.

## Project memory checkpoint - 4 August 2026

Verified working state. This supersedes the older `378433a` and `9d5b3b8` checkpoints, which were both real commits but are no longer the head. Issue #12 records the durable handoff.

### Repository

- Verified base before the Lecture 3/4 content branch: `c481a8f`, the merge of PR #11 "Update project memory checkpoint (4 Aug 2026)".
- At that handoff, eleven pull requests had been opened, ten merged and none remained open.
- "Validate course site" run 56 passed on `c481a8f`. Pages correctly did not redeploy because PR #11 changed `apps/`, not `docs/`.
- One open architectural task: Issue #1, recover the canonical React/TypeScript Study Lab source.
- The Lecture 3/4 pass raises the validated required-file set to 17 while retaining five app-registry entries, static-site integrity and the Study Lab bundle-size guard.
- Hub, Exam Lab, Study Lab and Seminar Studio all return HTTP 200.

### Content coverage

- Exam Lab after the released-slide alignment: 54 mechanism-heavy MCQs, 12 long-answer blueprints, 29 retrieval cards and full mechanism briefs for Lectures 1-4.
- Lecture 3 now follows the released PDF emphasis on gradient-versus-hurdle logic, intermediate targets, local translation, CNS growth inhibition and hierarchical target recognition rather than a pre-lecture reconstruction.
- Lecture 4 adds target and afferent survival logic, BCL-2/caspase apoptosis, classical necrosis, four levels of regression, four interpretation studies and bounded non-canonical death pathways. Its 28 July / Hodgetts attribution remains unconfirmed pending LMS or Outlook verification and is labelled accordingly in the brief.
- Study Lab in this repository: 29 taught topics, 176 keywords, 88 concepts, 92 experiment prompts.
- The external Synapse X at `neur3301-synapse.pplx.app` has diverged ahead of this build: 180 keywords, 92 concepts and an auto-graded MCQ Test mode. Treat it as a feature reference, not as the course-fact authority.
- Progress is per-origin `localStorage`. The two deployments never share state, so mastery numbers are not comparable between them.

### Seminar

- Studio deck: 12 slides, exact 15:00 spine, explicit A/B/C evidence tiers. The evidence stamp now reflects the 30 July 2026 content review.
- FDA advisory-committee votes remain spelled out in the deck as two yes to nine no on efficacy and one yes to ten no on benefit–risk. Do not adopt the swapped figures found in the compass artifact markdown.
- Word counts describe different artifacts and should not be forced to match: the studio page reports 1741 words for the on-site script, while the Canva presenter notes were trimmed from 1,683 to 1,474 spoken words.
- Canva deck `MDMA_and_the_Brain_NEUR3301_Seminar_2026.pptx`: no slide above roughly 116 wpm, pointer cues on slides 3, 8 and 9, evidence-tier system explained on slide 1, speaker load balanced near 33/33/34, source blocks marked reference-only, final verdict returned to Speaker 1. The title change to "MDMA and the Brain - NEUR3301 Seminar 2026" is staged and still needs approval.
- The evidence-only seminar pass now records that Young 2015 used mice and a BDNF-neutralising antibody while TrkB remained inferred (slide 6), separates release potency from uptake-inhibition potency (slide 3), and treats 5-HT2A engagement as indirect via serotonin efflux rather than direct classic-psychedelic agonism.

### Twelve-correction ledger

Nine corrections are cleanly represented: chloride current direction, calcium cooperativity, blood-brain barrier structure, D-serine caution, paired-pulse ratio, STDP, BOLD causality, adult-neurogenesis species limits, and the glial scar's dual role.

Two loose ends remain:

- electrical-synapse rectification is not taught;
- Reelin's functions beyond a simple stop signal are not taught.

The Exam Lab complement phrase is now explicit: C1q-driven complement activation deposits iC3b, which can engage microglial CR3. CI rejects regression to the legacy imprecise complement shorthand.

### Source hierarchy

- Authority for dates, weights and the 29-topic map is the 13 July 2026 handbook and timetable.
- The 12 July app audit is historical. Convert its corrections into regression checks rather than re-applying them.
- The secondary UWA planning report is superseded background, not a course-fact source.
- The MDMA deep-dive markdown is background only; its oxytocin and BDNF causal claims are overconfident.

### Next action

Issue #1 remains the standing architectural task: recover the canonical React/TypeScript Study Lab source. Do not hand-edit the minified Study Lab bundle.
