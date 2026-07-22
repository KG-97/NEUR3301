# Repository-hosted Synapse build

The deployable build is published from `docs/study-lab/`.

## Provenance

- Source location recovered from Google Drive: `Synapse_NEUR3301_v3_improved`
- Drive folder ID: `1_nXmghrspSBhvVPjsFLPHYhThEAM6LQJ`
- Alignment review date: 14 July 2026
- Imported to GitHub: 22 July 2026
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
