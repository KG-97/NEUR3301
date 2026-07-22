# NEUR3301 — Advanced Neuroscience 1

Public study repository and marks-first command centre for **NEUR3301 Advanced Neuroscience 1** at the University of Western Australia.

## Launch

- **GitHub Pages hub:** https://kg-97.github.io/NEUR3301/
- **Synapse X Exam Lab:** https://kg-97.github.io/NEUR3301/app/
- **Hardened MDMA Seminar Studio:** https://kg-97.github.io/NEUR3301/seminar/
- **Extended Synapse suite:** https://neur3301-synapse.pplx.app
- **Repository:** https://github.com/KG-97/NEUR3301

The two repository-hosted apps are deliberately static: no account, server, Firebase project or API key is required. Study progress is browser-local and can be exported as JSON.

## What is included

### Synapse X Exam Lab

- Exact 2026 sequence of 30 content lectures
- Test 1 and Test 2 boundaries and dates
- Browser-local lecture progress
- Mechanism-heavy MCQs with explanations
- Corrected Glia I active-recall deck
- Misconception/error ledger
- Progress export, import and reset

### MDMA Seminar Studio

- Evidence-hardened 15-minute seminar workspace
- Timed slide map and speaker handoffs
- Rehearsal timer and production checklist
- Evidence-boundary prompts and hostile Q&A bank
- Full seminar script and source track

### Engineering

- GitHub Pages deployment from `docs/`
- Automated validation of required files, app registry, HTML closures, flashcard size and broken localhost/backend dependencies
- Source-consolidation tracks under `apps/`

## Repository structure

```text
.
├── apps/
│   ├── synapse/                # Maintainable source consolidation track
│   └── mdma-seminar/           # Seminar source notes
├── docs/                       # Deployed GitHub Pages site
│   ├── app/index.html          # Repository-hosted Exam Lab
│   ├── seminar/index.html      # Repository-hosted Seminar Studio
│   ├── resources/
│   │   ├── NEUR3301_Study_Playbook_2026.md
│   │   ├── NEUR3301_Glia1_Flashcards.csv
│   │   └── MDMA_Seminar_Full_Script_15min.md
│   ├── apps.json
│   ├── index.html
│   ├── styles.css
│   └── app.js
├── tests/validate.mjs
├── .github/workflows/pages.yml
├── CONTRIBUTING.md
└── README.md
```

## Local preview

```bash
python -m http.server 8000 --directory docs
```

Open `http://localhost:8000`.

Run validation with:

```bash
node tests/validate.mjs
```

## Assessment map

- **Test 1:** 10%, lectures 1–7, 24 August 2026
- **Test 2:** 10%, lectures 8–13, 7 September 2026
- **Seminar:** 30%; video due 18 September 2026 at 11:59 pm
- **Final:** 50%; four long-answer questions in two hours

## Content standard

Use causal explanation, intervention prediction and explicit evidence boundaries. Distinguish:

- endothelial BBB seal from astrocytic/pericytic regulation;
- calcium cooperativity from literal binding stoichiometry;
- canonical STDP from a universal rule;
- rodent adult-neurogenesis findings from settled human facts;
- controlled MDMA from uncontrolled “ecstasy” products;
- animal mechanisms from demonstrated human mediation;
- treatment-package effects from isolated drug effects;
- zero adverse-event reports from proof of zero adverse events.

## Status

- [x] Repository foundation
- [x] Public launch hub
- [x] Repository-hosted Synapse X Exam Lab
- [x] Repository-hosted MDMA Seminar Studio
- [x] Exact lecture and assessment map
- [x] Corrected Glia I deck
- [x] Study playbook and seminar script
- [x] GitHub Pages workflow
- [x] Automated static-site integrity checks
- [ ] Refactor the larger React/TypeScript suite into the canonical maintainable production source
- [ ] Add diagram-question datasets and timed long-answer scoring to the repository-hosted app

> Independent educational project. Verify assessment requirements against current UWA unit materials and consequential scientific claims against primary or official sources.