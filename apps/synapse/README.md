# Synapse source track

## Public builds

- Fast, maintainable Exam Lab: `docs/app/`
- Deep recovered Study Lab: `docs/study-lab/`
- Full external Synapse X: https://neur3301-synapse.pplx.app
- Course portal: `docs/`

## Exam Lab

The Exam Lab is a source-controlled, dependency-free static app. It provides the exact taught-topic numbering (29 taught topics across official lecture numbers 1–30, with number 23 correctly treated as a no-class public-holiday slot), 36 mechanism-heavy MCQs, Test 1/Test 2 targeting, per-item weakness diagnostics, 29 due-first spaced-retrieval mechanism cards, a resolvable misconception ledger and validated portable local progress.

## Study Lab

The recovered Study Lab is a real portable compiled app, not a saved Perplexity wrapper. It provides:

- all 29 taught topics from the 13 July 2026 timetable;
- 176 keywords, 88 concepts and 92 experiment prompts;
- progress under `synapse-neur3301-progress-v1`;
- progress export, import and reset;
- handbook assessment mapping;
- the July audit's major scientific corrections.

See `ALIGNMENT.md` for the verified curriculum map and `BUILD_PROVENANCE.md` for recovery history and limitations.

## Source-consolidation rule

The files in `docs/study-lab/assets/` are compiled output. Do not hand-edit minified JavaScript as routine source work.

The final source import must contain the React/TypeScript files, dependency manifest, content schema, tests and build configuration. It should preserve the exact 2026 map, MCQ and diagram pools, long-answer maps, local progress/backup, evidence-hardened seminar data, and a GitHub Pages-compatible base path without requiring cloud credentials for basic study.

## Verification

```bash
node tests/validate.mjs
node scripts/check-site.mjs
python -m http.server 8000 --directory docs
```

Open `http://localhost:8000/app/` and `http://localhost:8000/study-lab/`. Confirm progress survives reload in each app.
