# NEUR3301 — Advanced Neuroscience 1

Central repository and public study portal for **NEUR3301 Advanced Neuroscience 1** at the University of Western Australia.

## Live resources

- **Synapse — NEUR3301 Study Lab:** https://neur3301-synapse.pplx.app
- **GitHub Pages portal:** https://kg-97.github.io/NEUR3301/
- **Repository:** https://github.com/KG-97/NEUR3301

Synapse is the main marks-first study app, with mechanism-focused revision, MCQ and long-answer practice, diagrams, spaced-repetition support, and the MDMA seminar studio.

## Repository structure

```text
.
├── apps/                     # Imported source apps
├── docs/                     # Static GitHub Pages portal
│   ├── index.html
│   ├── styles.css
│   ├── app.js
│   └── apps.json
├── .github/workflows/        # Pages deployment
├── CONTRIBUTING.md
└── README.md
```

## Local preview

```bash
python -m http.server 8000 --directory docs
```

Open `http://localhost:8000`.

## Deployment

Pushes to `main` that modify `docs/` deploy through GitHub Actions. In repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions** if required.

## Status

- [x] Repository initialized
- [x] Public course landing page
- [x] Synapse app registered
- [x] GitHub Pages workflow
- [ ] Import the complete Synapse source bundle into `apps/synapse/`
- [ ] Add future lecture tools and seminar apps

> Educational project. Verify assessment requirements and scientific claims against current UWA materials and primary sources.
