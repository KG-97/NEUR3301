# NEUR3301 — Advanced Neuroscience 1

Public study repository and marks-first command centre for **NEUR3301 Advanced Neuroscience 1** at the University of Western Australia.

## Launch

- **Course hub:** https://kg-97.github.io/NEUR3301/
- **Synapse Exam Lab:** https://kg-97.github.io/NEUR3301/app/
- **Synapse Study Lab:** https://kg-97.github.io/NEUR3301/study-lab/
- **MDMA Seminar Studio:** https://kg-97.github.io/NEUR3301/seminar/
- **Full external Synapse X:** https://neur3301-synapse.pplx.app

The GitHub tools are static and require no account, backend, Firebase project or API key. Progress stays in the browser and can be exported.

## What is included

- exact 2026 assessment dates, weights and lecture numbering;
- a maintainable Exam Lab with 36 mechanism-heavy MCQs, 12 integrated long-answer prompts covering every taught lecture, 30-minute answer timing, persistent answer plans, 29 due-first spaced-retrieval cards and a resolvable error ledger;
- a deeper recovered Study Lab with 29 taught topics, 174 flashcards, 97 concepts and 93 experiment prompts;
- fixed browser-local progress plus JSON import/export/reset;
- an evidence-hardened 12-slide MDMA seminar studio and exact 15:00 rehearsal timer;
- the complete timed seminar script and marks-first weekly study playbook;
- deterministic link, registry, course-fact and broken-backend checks;
- GitHub Actions validation and Pages deployment.

## Repository structure

```text
.
├── apps/
│   ├── synapse/                # Alignment, provenance and source-consolidation track
│   └── mdma-seminar/           # Seminar evidence/source notes
├── docs/                       # GitHub Pages artifact
│   ├── app/                    # Hand-maintainable Exam Lab
│   ├── study-lab/              # Recovered compiled deep Study Lab
│   ├── seminar/                # MDMA Seminar Studio
│   ├── resources/              # Playbook, script and flashcards
│   ├── index.html
│   └── apps.json
├── scripts/check-site.mjs      # Deep static/course-fact validator
├── tests/validate.mjs          # Required-file smoke tests
└── .github/workflows/
    ├── pages.yml
    └── quality.yml
```

## Local verification

```bash
node tests/validate.mjs
node scripts/check-site.mjs
python -m http.server 8000 --directory docs
```

Open `http://localhost:8000`, then test both `/app/` and `/study-lab/`. Mark progress, reload, export it, and verify the state survives.

## Deployment

A push to `main` that changes the site runs validation before publishing `docs/` to GitHub Pages.

If deployment says Pages is not configured, make the one-time change: **Settings → Pages → Build and deployment → Source → GitHub Actions**.

## Source status

`docs/app/` is intentionally dependency-free, readable and directly maintainable. Its HTML, CSS and JavaScript are separated and validated. `docs/study-lab/` is a clean portable compiled build recovered from Drive—not a saved Perplexity shell—but it is not a substitute for the original React/TypeScript project. The full maintainable source, package manifest and build configuration still need to be recovered before the minified bundle should be treated as editable source.

## Content standard

Use causal explanation, intervention prediction and explicit evidence boundaries. Distinguish controlled MDMA from uncontrolled products, animal mechanisms from demonstrated human mediation, treatment-package effects from isolated drug effects, and “no reports received” from proof that no events occurred.

> Independent educational project. Verify announcements against the LMS and consequential scientific claims against primary or official sources.
