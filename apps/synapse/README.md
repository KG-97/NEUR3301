# Synapse source track

This directory is reserved for the maintainable React/TypeScript source of the full NEUR3301 Synapse app.

## Canonical public builds

- GitHub Pages hub: `docs/`
- Static MDMA Seminar Studio: `docs/seminar/`
- Full currently deployed study app: https://neur3301-synapse.pplx.app

## Import rule

Do not commit a saved Perplexity webpage shell as application source. A portable source import must contain the actual project files, dependencies and build configuration rather than browser-exported platform markup.

The preferred import should preserve:

- the exact 2026 lecture and assessment map;
- MCQ and diagram-question pools;
- long-answer answer maps;
- browser-local progress and JSON backup;
- the evidence-hardened MDMA seminar data;
- no mandatory API key, Firebase project or cloud account for basic study use.

## Next implementation pass

1. Extract the clean project source from the strongest uploaded bundle.
2. Remove platform-specific hosting assumptions.
3. Add deterministic content/data validation.
4. Build with a GitHub Pages-compatible base path.
5. Compare the built output against the current live app before replacing it.
