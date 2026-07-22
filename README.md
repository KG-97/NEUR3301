# NEUR3301 — Advanced Neuroscience 1

Public study repository and marks-first command centre for **NEUR3301 Advanced Neuroscience 1** at the University of Western Australia.

## Launch

- **GitHub Pages hub:** https://kg-97.github.io/NEUR3301/
- **Hardened MDMA Seminar Studio:** https://kg-97.github.io/NEUR3301/seminar/
- **Full Synapse study app:** https://neur3301-synapse.pplx.app
- **Repository:** https://github.com/KG-97/NEUR3301

The public GitHub build is deliberately static: no account, server, Firebase project or API key is required to launch it. The larger Synapse app remains the full browser study system while its maintainable source is consolidated under `apps/`.

## What is included

- NEUR3301 assessment-first launch hub
- Exact course assessment map and marks-first study loop
- Evidence-hardened 12-slide MDMA seminar studio
- Exact 15:00 rehearsal timer and browser-local checklist
- Full seminar script with speaker handoffs and pacing
- Hostile Q&A bank and evidence-boundary prompts
- Marks-first weekly study playbook
- GitHub Pages deployment workflow

## Repository structure

```text
.
├── apps/
│   ├── synapse/                # Source consolidation track
│   └── mdma-seminar/           # Seminar source notes
├── docs/                       # Deployed GitHub Pages site
│   ├── index.html
│   ├── styles.css
│   ├── app.js
│   ├── apps.json
│   ├── seminar/index.html
│   └── resources/
│       ├── NEUR3301_Study_Playbook_2026.md
│       └── MDMA_Seminar_Full_Script_15min.md
├── .github/workflows/pages.yml
├── CONTRIBUTING.md
└── README.md
```

## Local preview

```bash
python -m http.server 8000 --directory docs
```

Open `http://localhost:8000`.

## Deployment

Every push to `main` that changes `docs/` triggers `.github/workflows/pages.yml`. The workflow uploads `docs/` as the Pages artifact and deploys it to the `github-pages` environment.

If the workflow reports that Pages is not configured, set **Settings → Pages → Build and deployment → Source → GitHub Actions** once.

## Content standard

Use causal explanation, intervention prediction and explicit evidence boundaries. Distinguish:

- controlled MDMA from uncontrolled “ecstasy” products;
- animal mechanisms from demonstrated human mediation;
- treatment-package effects from isolated drug effects;
- zero adverse-event reports from proof of zero adverse events.

## Status

- [x] Repository initialized
- [x] Public course landing page
- [x] App directory
- [x] Hardened MDMA Seminar Studio
- [x] Full 15-minute seminar script
- [x] Marks-first study playbook
- [x] GitHub Pages workflow
- [ ] Consolidate the complete maintainable Synapse React/TypeScript source under `apps/synapse/`
- [ ] Add automated HTML link and data-integrity checks

> Independent educational project. Verify assessment requirements against current UWA unit materials and consequential scientific claims against primary or official sources.
