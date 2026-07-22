# Contributing

## Adding an app

1. Add the complete source under `apps/<app-name>/`.
2. Include an app-level README with setup, build, deployment and evidence notes.
3. Add the public app to `docs/apps.json`.
4. Preview the portal locally with `python -m http.server 8000 --directory docs`.
5. Open a focused pull request and describe what was tested.

## Content standard

- Prefer active recall and mechanism-level explanation over passive summaries.
- Mark uncertainty and distinguish established findings from inference.
- Cite primary research or official unit materials for consequential scientific claims.
- Do not upload copyrighted lecture material without permission.
- Never commit API keys, credentials, student records or private health information.

## Commit style

Use direct, scoped messages such as:

- `Add synaptic plasticity MCQ set`
- `Fix diagram rendering on mobile`
- `Update MDMA evidence audit`
