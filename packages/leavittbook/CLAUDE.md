# Leavittbook

Local component gallery for `@leavittsoftware/web`. Not published to npm.

## Purpose

- Live demos of `titanium-*` and `leavitt-*` elements
- CEM-generated API docs via `api-viewer-element` and [`custom-elements.json`](../custom-elements.json)
- [`story-header`](src/shared/story-header.ts) for class/tag metadata

Component APIs live in [`packages/web/CLAUDE.md`](../web/CLAUDE.md).

## Adding a demo

1. Copy an existing demo (e.g. [`src/demos/leavitt-error-page-demo.ts`](src/demos/leavitt-error-page-demo.ts)) → `src/demos/<name>-demo.ts`
2. Register in [`src/my-app.ts`](src/my-app.ts):
   - `page('/route', …)` lazy import
   - `<md-list-item href="…">` in the drawer (`level1Text` must match the nav label)
   - `${this.page === 'route-key' ? html`<…-demo></…-demo>` : nothing}` in `<main-content>`
3. Run `npm start` (CEM watch keeps `custom-elements.json` current)

## Page layout

```
leavitt-app-main-content-container (.pendingStateElement=${this})
  main
    leavitt-app-navigation-header (level1Text matches drawer label, level1Href="/route")
    leavitt-app-width-limiter
      story-header
      …variants…
      api-docs (src="./custom-elements.json" selected="element-tag")
```

- Add `leavitt-app-navigation-footer` **only** when it contains real actions (Save/Cancel, bulk actions, pagination). Do not add empty footers.
- Import shared typography from `@leavittsoftware/web/titanium/styles/styles` before local font rules.

## Routing (intentional divergence from skeleton)

Leavittbook **removes** inactive demo pages from the DOM on navigation (`${this.page === 'x' ? html`…` : nothing}`). Production apps scaffolded from skeleton keep pages mounted with `?hidden` + `.isActive`. The gallery resets demo state on each visit.

Use `connectedCallback` / `disconnectedCallback` for per-visit setup and teardown.

## Auth

The gallery is public. Demos that call **api3** require Leavitt login:

| Demo                  | Route                            |
| --------------------- | -------------------------------- |
| Company select        | `/leavitt-company-select`        |
| Person select         | `/leavitt-person-select`         |
| Person company select | `/leavitt-person-company-select` |
| Person group select   | `/leavitt-person-group-select`   |
| File explorer         | `/leavitt-file-explorer`         |
| Email history viewer  | `/leavitt-email-history-viewer`  |

Drawer links for these demos show a trailing `passkey` icon.

Pattern:

- Gate demo content with `UserManager.identity` inline in `render()` — `${UserManager.identity ? html\`…\` : nothing}` (do not cache in demo state)
- `requires-auth` on `<story-header>` — shows an **Authentication is required for this demo** filled tonal button when not authenticated; calls `UserManager.authenticate()` (redirect handles login)

No Auth0 redirect until the user clicks that button. Shell uses `UserManager.initialize()` only (profile menu, feedback dialogs). No whole-app Auth0 gate.

## Toolbar search

After each route change, `my-app` sets `showSearch` from the active page’s `searchController` (see skeleton pattern). Demos that need the shared toolbar search expose `searchController` (usually via `TitaniumSiteSearchTextFieldController`).

## Demo styling conventions

- Pair `background` / accent tokens with matching `on-*` foreground tokens
- Use `labelStyles` for checkbox/radio/switch labels when present
- Minimum 13px font-size in component-local CSS
- `@property()` / `@state()` use `accessor` (Lit 3)
- `promiseTracking` + `PendingStateEvent` for async work; `ShowSnackbarEvent` for errors

## Scaffolding sync (manual)

When drift-checking against [skeleton.leavitt.com](https://github.com/LeavittSoftware/skeleton.leavitt.com) `develop`:

| Skeleton                                                                                                                        | Leavittbook                                                 |
| ------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| `theme.css`, `theme-custom.css`                                                                                                 | `packages/leavittbook/`                                     |
| `src/styles/my-app-styles.ts`, `form-styles.ts`, `hero-styles.ts`, `input-styles.ts`, `label-styles.ts`, `nice-badge-styles.ts` | `packages/leavittbook/src/styles/` (keep `story-styles.ts`) |
| `.editorconfig`, `.vscode/settings.json`                                                                                        | monorepo root                                               |

Do **not** copy skeleton’s `my-app.ts` routing model wholesale — see routing section above.
