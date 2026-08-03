# Repository-hosted Synapse build

The deployable build is published from `docs/study-lab/`.

## Provenance

- Source location recovered from Google Drive: `Synapse_NEUR3301_v3_improved`
- Drive folder ID: `1_nXmghrspSBhvVPjsFLPHYhThEAM6LQJ`
- Alignment review date: 14 July 2026
- Imported to GitHub: 22 July 2026
- Last memory refresh: 4 August 2026 (see "Project memory checkpoint" below)
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

Verified working state. This supersedes the older `378433a` and `9d5b3b8` checkpoints, which were both real commits but are no longer the head.

### Repository

- `main` head is `ad6897e` (31 July 2026), the merge of PR #10 "CI: bundle-size checks & PR reports".
- Ten pull requests opened, nine merged, none open.
- Green on `ad6897e`: "Validate course site" run 54 and "Validate and deploy GitHub Pages" run 48.
- One open architectural task: Issue #1, recover the canonical React/TypeScript Study Lab source.
- Local checks pass: 16 required files, five app-registry entries, static-site integrity, Study Lab bundle-size guard.
- Hub, Exam Lab, Study Lab and Seminar Studio all return HTTP 200.

### Content coverage

- Exam Lab: 48 mechanism-heavy MCQs, 12 long-answer blueprints, 29 retrieval cards, but full mechanism briefs for Lectures 1-3 only.
- Study Lab in this repository: 29 taught topics, 176 keywords, 88 concepts, 92 experiment prompts.
- The external Synapse X at `neur3301-synapse.pplx.app` has diverged ahead of this build: 180 keywords, 92 concepts and an auto-graded MCQ Test mode. Treat it as a feature reference, not as the course-fact authority.
- Progress is per-origin `localStorage`. The two deployments never share state, so mastery numbers are not comparable between them.

### Seminar

- Studio deck: 12 slides, exact 15:00 spine, explicit A/B/C evidence tiers. The evidence stamp still reads 24 July 2026 although seminar content changed on 30 July, so a small evidence-refresh pass is due.
- FDA advisory-committee votes are correct in the current deck: 2-9 on efficacy and 1-10 on benefit-risk. Do not adopt the swapped figures found in the compass artifact markdown.
- Word counts describe different artifacts and should not be forced to match: the studio page reports 1741 words for the on-site script, while the Canva presenter notes were trimmed from 1,683 to 1,474 spoken words.
- Canva deck `MDMA_and_the_Brain_NEUR3301_Seminar_2026.pptx`: no slide above roughly 116 wpm, pointer cues on slides 3, 8 and 9, evidence-tier system explained on slide 1, speaker load balanced near 33/33/34, source blocks marked reference-only, final verdict returned to Speaker 1. The title change to "MDMA and the Brain - NEUR3301 Seminar 2026" is staged and still needs approval.
- Deck corrections still to fold in: Young 2015 used mice rather than rats, with a BDNF antibody and TrkB inferred (slide 6); separate release potency from uptake inhibition (slide 3); MDMA engages 5-HT2A indirectly via serotonin efflux rather than acting as a classic direct psychedelic agonist.

### Twelve-correction ledger

Nine corrections are cleanly represented: chloride current direction, calcium cooperativity, blood-brain barrier structure, D-serine caution, paired-pulse ratio, STDP, BOLD causality, adult-neurogenesis species limits, and the glial scar's dual role.

Three loose ends remain:

- the Exam Lab still contains one legacy "C1q/C3b tag engaged by CR3" phrase, where iC3b-CR3 is more precise;
- electrical-synapse rectification is not taught;
- Reelin's functions beyond a simple stop signal are not taught.

### Source hierarchy

- Authority for dates, weights and the 29-topic map is the 13 July 2026 handbook and timetable.
- The 12 July app audit is historical. Convert its corrections into regression checks rather than re-applying them.
- The secondary UWA planning report is superseded background, not a course-fact source.
- The MDMA deep-dive markdown is background only; its oxytocin and BDNF causal claims are overconfident.

### Next action

One tightly scoped pull request should reconcile Lecture 3 against the released slides, add a full Lecture 4 mechanism brief covering trophic competition, retrograde and anterograde influences, apoptosis versus necrosis, BCL-2 and caspases, pruning levels and non-canonical death pathways, expand Lecture 4 MCQs and experimental-interpretation prompts, fix the remaining complement wording, and update provenance and validators. The MDMA evidence refresh should be a separate, evidence-only pass afterward.
