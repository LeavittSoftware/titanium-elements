# CLAUDE.md

## Project Overview

**titanium-elements** is a monorepo that publishes [`@leavittsoftware/web`](packages/web) — Lit 3 + Material Web custom elements used across Leavitt Group front-end applications.

- **`titanium-*`** — general-purpose UI components (drawers, data tables, inputs, snackbars, etc.)
- **`leavitt-*`** — domain-specific components (company/person selects, file explorer, app shell, API helpers); many require authentication and an `ApiService` instance

The package is published to npm and consumed via **deep imports** (no barrel `index.ts` exports).

## Tech Stack

- **Framework:** Lit 3 — web components with Shadow DOM
- **UI base:** Material Web (`@material/web/*`)
- **Language:** TypeScript (strict, decorators enabled)
- **Shared types:** `@leavittsoftware/lg-core-typescript` for OData entity interfaces
- **Monorepo:** npm workspaces + Lerna (independent versioning)
- **Component docs:** Custom Elements Manifest → `packages/leavittbook/custom-elements.json`
- **Peer dependency:** `lit >= 3.0.0`

## Monorepo Structure

```
packages/
  web/           # @leavittsoftware/web — all published elements (titanium/ + leavitt/)
  leavittbook/   # Local component gallery and demos (not published); see packages/leavittbook/CLAUDE.md
```

Within `packages/web`:

```
titanium/   # General-purpose components, helpers, styles, events
leavitt/    # Domain components, app shell, api-service, auth
```

## Key Scripts

```bash
npm start              # tsc watch + web-dev-server + CEM watch
npm run build          # tsc + tests + CEM + leavittbook rollup
npm run lint           # prettier + eslint + lit-analyzer + tsc
npm run lint-fix       # auto-fix formatting and lint issues
npm run cem            # regenerate custom-elements-manifest
npm run lerna:publish  # build + conventional publish to npm
```

Run `npm run lint` after edits and fix issues in changed files before committing.

## Development Workflow

1. `npm i` then `npm start` — browse component demos in leavittbook
2. **New component:** copy an existing folder under `packages/web`, add a leavittbook demo + route, add a tsconfig path
3. **Conventional Commits** required (`feat:`, `fix:`, `chore:`, etc.)
4. CEM output at `packages/leavittbook/custom-elements.json` helps verify APIs but is **not** shipped with `@leavittsoftware/web`

## Import Convention

Consumers register elements with side-effect imports:

```ts
import '@leavittsoftware/web/titanium/drawer/drawer.js';
import { TitaniumDrawer } from '@leavittsoftware/web/titanium/drawer/drawer.js';
import { h2, p } from '@leavittsoftware/web/titanium/styles/styles.js';
```

Paths mirror the source tree under `packages/web/`. Use `.js` extensions when importing from the published package.

## Component Reference

For per-component API (properties, methods, events, slots, CSS parts, and implementation notes), see [`packages/web/CLAUDE.md`](packages/web/CLAUDE.md).

After install, consuming projects find the same file at:

```
node_modules/@leavittsoftware/web/CLAUDE.md
```

## Keeping `packages/web/CLAUDE.md` Up to Date

This is a **required** part of every component change. The web-level `CLAUDE.md` is the primary reference for agents in consuming projects; stale docs are worse than no docs.

Update [`packages/web/CLAUDE.md`](packages/web/CLAUDE.md) in the **same PR** whenever you:

- Add, rename, or remove a component or public utility
- Change a component's public API (properties, attributes, methods, events, slots, CSS parts)
- Change cross-cutting behavior documented there (events, controllers, services, loading/snackbar patterns)
- Add or revise implementation gotchas that affect consumers

**Checklist per change:**

- [ ] Component entry added/updated/removed (primary catalog or internal appendix as appropriate)
- [ ] Cross-cutting section updated if the change affects shared patterns
- [ ] Import path and tag name match the source file

`npm run cem` can help verify property lists against source, but purpose, usage notes, and gotchas must be curated manually.

## Contributing Conventions

- Extend `LitElement`; register with `@customElement('kebab-case-name')` (must include a hyphen)
- Use `@property() accessor` / `@state() accessor` (omit `accessor` on `@provide` / `@consume` context properties)
- Side-effect imports for element registration; deep paths mirror source tree
- Use `promiseTracking` for loading state (`LoadWhile` was removed)
- Pair `ShowSnackbarEvent` with `titanium-snackbar-stack`; `PendingStateEvent` with loading indicators
- Multi-word reflected attributes use **kebab-case** (`local-storage-key`, not `localStorageKey`)

## What NOT to Do

- Don't add barrel `index.ts` exports
- Don't break semver without a conventional commit + `lerna publish`
- Don't duplicate `@leavittsoftware/lg-core-typescript` entity types in components
- Don't merge component API changes without updating `packages/web/CLAUDE.md`
