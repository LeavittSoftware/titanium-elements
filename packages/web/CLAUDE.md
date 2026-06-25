# @leavittsoftware/web

Component and utility reference for agents consuming this package. Read this before diving into source.

## Package overview

`@leavittsoftware/web` is a collection of Lit 3 web components built on [Material Web](https://github.com/material-components/material-web).

- **`titanium-*`** — general-purpose UI (drawers, tables, inputs, snackbars, loading indicators)
- **`leavitt-*`** — Leavitt Group domain components (selects, file explorer, app shell, email viewer); many require `ApiService` and authentication

**Browser support:** Chrome, Safari, Firefox, Edge

**Install:**

```bash
npm i @leavittsoftware/web
```

## Import and registration

There is no barrel `index.ts` and no `exports` map. Always use deep file paths:

```ts
// Register element (side-effect — required before using the tag in HTML)
import '@leavittsoftware/web/titanium/drawer/drawer.js';

// Import class, types, or styles
import { TitaniumDrawer } from '@leavittsoftware/web/titanium/drawer/drawer.js';
import { h2, p } from '@leavittsoftware/web/titanium/styles/styles.js';
```

- Published builds use `.js` extensions in import paths
- Material Web elements (`md-filled-button`, `md-dialog`, etc.) must be imported separately by the consumer
- Paths mirror source: `titanium/<feature>/<file>` or `leavitt/<feature>/<file>`

## Tag naming caveats

Several elements omit the `titanium-` / `leavitt-` prefix:

`profile-picture`, `profile-picture-menu`, `report-a-problem-dialog`, `provide-feedback-dialog`, `google-address-input`, `manual-address-dialog`, `crop-and-save-image-dialog`, `image-preview-dialog`, `file-list-item`, `folder-list-item`, `data-table-core-settings-sort-item`

## Cross-cutting patterns

### Loading — `promiseTracking`

```ts
import { promiseTracking } from '@leavittsoftware/web/titanium/helpers/promise-tracking';

@promiseTracking('trackSavingPromise')
@state() accessor isSaving = false;
declare trackSavingPromise: (promise: Promise<unknown>) => Promise<void>;

async #save() {
  const post = api.postAsync('...', dto);
  this.trackSavingPromise(post);
  await post;
}
```

Supports multiple independent flags per component (`isSaving` vs `isDeleting`). Re-entrant: flag stays true until all concurrent promises settle.

### Ancestor loading — `PendingStateEvent`

```ts
import { PendingStateEvent } from '@leavittsoftware/web/titanium/types/pending-state-event';

const promise = api.getAsync('...');
this.dispatchEvent(new PendingStateEvent(promise));
await promise;
```

Bubbles and is composed. Wire `.pendingStateElement=${this}` on `leavitt-app-main-content-container` or `titanium-circle-loading-indicator`. The circle indicator calls `stopPropagation()` so drawer events don't light sibling containers.

Use **either** a local spinner **or** `PendingStateEvent` for the same promise — not both unless intentional (e.g. `isLoading` gates empty state while circle shows overlay).

### Toasts — `ShowSnackbarEvent`

```ts
import { ShowSnackbarEvent } from '@leavittsoftware/web/titanium/snackbar/show-snackbar-event';

this.dispatchEvent(new ShowSnackbarEvent('Saved successfully'));
this.dispatchEvent(new ShowSnackbarEvent(httpError)); // HttpError object
```

Place `<titanium-snackbar-stack>` in the app shell; it listens for `show-snackbar` on `document` or a custom `.eventListenerTarget`.

### URL filters — `FilterController`

```ts
import { FilterController } from '@leavittsoftware/web/titanium/data-table/filter-controller';

filterController = new FilterController('my-page-route');
// Register Filter instances; syncs with query string; getActiveFilterOdata() for OData $filter
```

The constructor `path` should match the page's route path.

### Site search — `TitaniumSiteSearchTextFieldController`

```ts
import { TitaniumSiteSearchTextFieldController } from '@leavittsoftware/web/titanium/site-search-text-field-controller/site-search-text-field-controller';

searchController = new TitaniumSiteSearchTextFieldController(this, siteSearchTextFieldContext, {
  placeholder: 'Search...',
  onSearch: () => this.#reload(),
});
```

Page host must expose `isActive: boolean`. Read `this.searchController.searchTerm` when fetching. Toggle `this.searchController.disabled` when search requires a prerequisite (e.g. company selected).

### OData HTTP — `ApiService`

Required by `leavitt-*-select`, `leavitt-file-explorer`, email viewers. Pass a configured singleton:

```ts
import ApiService from '@leavittsoftware/web/leavitt/api-service/api-service';

const result = await apiService.getAsync<Partial<Person>>('People/?$top=25&$count=true');
const items = result.toList();
const total = result.odataCount;
```

### Typography styles

Always import shared text styles before custom font sizing:

```ts
import { h2, h5, p } from '@leavittsoftware/web/titanium/styles/styles.js';

static styles = [h2, h5, p, css`...`];
```

Exports: `h1`–`h5` (aliases `heading1`–`heading5`), `p`/`paragraph`, `a`/`link`, `dataRow`, `ellipsis`, `niceBadgeStyles` (from `titanium/styles/nice-badge`).

### Status pills in data tables

`titanium-data-table-core` injects `data-table-content-styles`. In column `render` functions:

```html
<span indicator>Neutral</span>
<span indicator green>Active</span>
<span indicator red>Inactive</span>
```

Only green / red / neutral-gray — no orange/warning tier.

### Multi-word HTML attributes

Use kebab-case for reflected attributes: `local-storage-key="my-key"`, not `localStorageKey="my-key"`. Use `.localStorageKey=${value}` only for dynamic property binding.

---

## Data tables

Use `titanium-data-table-core` + `titanium-data-table-action-bar` + `titanium-page-control` together for list pages.

Define columns via `TitaniumDataTableCoreMetaData<T>`:

```ts
tableMetaData: TitaniumDataTableCoreMetaData<MyItem> = {
  uniqueKey: (item) => String(item.Id),
  itemLinkUrl: (item) => `/items/${item.Id}`,
  itemMetaData: [
    { key: 'name', friendlyName: 'Name', render: (item) => html`${item.Name}`, getSortExpression: () => 'Name' },
  ],
  reorderConfig: { sortPropertyKey: 'SortOrder', reorderItemDisplayKey: 'Name' },
};
```

- Sort/column prefs persist in `localStorage` under `local-storage-key`
- `friendlyName` values: sentence case
- Reorder: listen `@reorder-save-request`, call `e.detail.resolve()` on success or `e.detail.reject(error)` on failure — the reorder dialog shows errors via its own snackbar; don't snackbar in the save handler
- On refetch: don't clear rows (layout jank); use `trackLoadingPromise` / `disabled` on the table
- Dispatches `change-route` (composed) when row has `itemLinkUrl`; `items-reordered` when reorder dialog applies

## Inheritance bases

| Base | Path | Used by |
|------|------|---------|
| `TitaniumSingleSelectBase` | `titanium/single-select-base/single-select-base` | All `leavitt-*-select`, `titanium-icon-picker`, `google-address-input` |
| `google-address-input` | `titanium/address-input/google-address-input` | `titanium-address-input` |
| `ThemePreference` mixin | `leavitt/theme/theme-preference` | `leavitt-app-logo`, `leavitt-error-page`, `leavitt-service-worker-notifier` |

---

# Components

## App shell

### `leavitt-app-main-content-container`

**Purpose:** Main scrollable content area with loading overlay; adapts layout when main menu is in drawer mode.

**Import:** `import '@leavittsoftware/web/leavitt/app/app-main-content-container.js'`

**Source:** `leavitt/app/app-main-content-container.ts`

| Kind | Name | Type / values | Notes |
|------|------|---------------|-------|
| Attribute | `main-menu-position` | `string` | From `mainMenuPositionContext`; `'drawer'` changes height/border-radius |
| Property | `.pendingStateElement` | `Element \| null` | Host that dispatches `PendingStateEvent` for the circle loader |

**Methods:** —

**Events:** Listens for `pending-state` on `pendingStateElement`

**Slots:** default

**CSS parts:** `loading-indicator`, `scroll-container`

**Usage notes / gotchas:**
- Height is `100dvh`-based; drawer mode removes right margin and border radius
- When kicking off async work in `updated()`, `await this.appMainContentContainer?.updateComplete` first so the loader can appear

**Pairs with:** `titanium-circle-loading-indicator`, `mainMenuPositionContext`

---

### `leavitt-app-navigation-header`

**Purpose:** Sticky app header with up to 5-level breadcrumb trail.

**Import:** `import '@leavittsoftware/web/leavitt/app/app-navigation-header.js'`

**Source:** `leavitt/app/app-navigation-header.ts`

| Kind | Name | Type / values | Notes |
|------|------|---------------|-------|
| Attribute | `sticky-top` | `boolean` | Reflected |
| Property | `scrollable-parent` | `Element \| null` | Auto-detected if unset |
| Property | `level1Text` … `level5Text` | `string \| null` | Breadcrumb labels |
| Property | `level1Href` … `level5Href` | `string \| null` | Breadcrumb links |

**Methods:** —

**Events:** —

**Slots:** `trailing`, `footer`

**CSS parts:** `main`, `trailing`, `footer`

**Usage notes / gotchas:**
- Border appears when scrolled + `sticky-top`
- Top-level nav labels should match page header text (level1 = top nav, level3 = sub-nav)

---

### `leavitt-app-navigation-footer`

**Purpose:** Sticky bottom bar with leading/default/trailing action areas.

**Import:** `import '@leavittsoftware/web/leavitt/app/app-navigation-footer.js'`

**Source:** `leavitt/app/app-navigation-footer.ts`

| Kind | Name | Type / values | Notes |
|------|------|---------------|-------|
| Attribute | `max-width` | `string` | Default `'640px'` |
| Property | `scrollable-parent` | `Element \| null` | |

**Methods:** `isOverflown(element: Element): boolean`

**Events:** —

**Slots:** `leading`, default, `trailing`

**CSS parts:** `main`, `leading`, `trailing`

**Usage notes / gotchas:** Shows top border when scroll parent overflows

---

### `leavitt-app-logo`

**Purpose:** App name + Leavitt Group mark with hover animation; theme-aware CDN mark.

**Import:** `import '@leavittsoftware/web/leavitt/app/app-logo.js'`

**Source:** `leavitt/app/app-logo.ts`

| Kind | Name | Type / values | Notes |
|------|------|---------------|-------|
| Property | `href` | `string` | Default `'/'` |
| Property | `title` | `string` | |
| Attribute | `app-name` | `string \| null` | Title case; acronyms keep casing |

**Methods / events / slots / parts:** —

**Usage notes / gotchas:** Extends `ThemePreference` mixin; mark URL switches for dark theme

---

### `leavitt-app-width-limiter`

**Purpose:** Centers content with configurable max width.

**Import:** `import '@leavittsoftware/web/leavitt/app/app-width-limiter.js'`

**Source:** `leavitt/app/app-width-limiter.ts`

| Kind | Name | Type / values | Notes |
|------|------|---------------|-------|
| Attribute | `max-width` | `string` | Default `'640px'` |

**Slots:** default

**Usage notes / gotchas:** Parent must be `display: grid` or `display: flex` for `justify-self: center` to work (Firefox)

---

## Layout and navigation

### `titanium-drawer`

**Purpose:** Fly-out / inline drawer based on native `<dialog>`.

**Import:** `import '@leavittsoftware/web/titanium/drawer/drawer.js'`

**Source:** `titanium/drawer/drawer.ts`

| Kind | Name | Type / values | Notes |
|------|------|---------------|-------|
| Attribute | `mode` | `inline` \| `flyover` | |
| Attribute | `open` | `boolean` | Read-only; reflected from `isOpen` |
| Attribute | `direction` | `ltr` \| `rtl` | Animation direction |
| Attribute | `fixed` | `boolean` | Content position when closed (with inline) |
| Attribute | `always-show-content` | `boolean` | **Deprecated** — use `mode` |
| Attribute | `keep-open-when-going-to-flyover` | `boolean` | Preserve open state on mode switch |

**Methods:** `open()`, `close()`, `toggle()`, `closeQuick()`

**Events:** `open-change`; redispatches native `close`, `toggle` from dialog

**Slots:** default, `header`, `footer`

**CSS parts:** `dialog`, `header`, `main`, `footer`

**CSS custom properties:** `--md-sys-color-outline-variant`, `--md-sys-color-on-background`

**Usage notes / gotchas:**
- Swipe-left closes; backdrop click closes; `popstate` closes dialog
- Flyover sets `html { overflow: hidden }`
- Switching `mode` from inline→flyover: use `keep-open-when-going-to-flyover` to stay open

---

### `titanium-toolbar`

**Purpose:** Fixed top Material toolbar with scroll-based elevation.

**Import:** `import '@leavittsoftware/web/titanium/toolbar/toolbar.js'`

**Source:** `titanium/toolbar/toolbar.ts`

| Kind | Name | Type / values | Notes |
|------|------|---------------|-------|
| Attribute | `shadow` | `boolean` | Auto-set on document scroll |

**Slots:** default (style slotted `[main-title]`)

**Usage notes / gotchas:** Listens on `document` scroll, not a local container

---

### `titanium-show-hide`

**Purpose:** Collapsible overflow content with optional fade and custom toggle button.

**Import:** `import '@leavittsoftware/web/titanium/show-hide/show-hide.js'`

**Source:** `titanium/show-hide/show-hide.ts`

| Kind | Name | Type / values | Notes |
|------|------|---------------|-------|
| Attribute | `collapse-height` | `number` | Default `120` |
| Attribute | `collapsed` | `boolean` | |
| Attribute | `disable-fade` | `boolean` | |
| Property | `hiddenItemCount` | `number` | Read-only count of clipped items |

**Events:** `collapsed-changed`, `hidden-item-count-changed`

**Slots:** default (direct children), `button`

**CSS parts:** `items-container`, `button`

**Usage notes / gotchas:** ResizeObserver counts clipped children; default button hidden when nothing is hidden

---

### `titanium-collapsible-container`

**Purpose:** Expand/collapse panel with header slot.

**Import:** `import '@leavittsoftware/web/titanium/collapsible-container/collapsible-container.js'`

**Source:** `titanium/collapsible-container/collapsible-container.ts`

| Kind | Name | Type / values | Notes |
|------|------|---------------|-------|
| Attribute | `opened`, `disabled` | `boolean` | Reflected |

**Slots:** `header`, `content`

**CSS parts:** `button`, `main`

**Usage notes / gotchas:** Toggles `opened` on header button click

---

## Data tables

### `titanium-data-table-core`

**Purpose:** Metadata-driven table with sort, column picker, CSV export, selection, and optional reorder.

**Import:** `import '@leavittsoftware/web/titanium/data-table/data-table-core.js'`

**Source:** `titanium/data-table/data-table-core.ts`

| Kind | Name | Type / values | Notes |
|------|------|---------------|-------|
| Property | `items` | `T[]` | Current rows |
| Property | `tableMetaData` | `TitaniumDataTableCoreMetaData<T> \| null` | Column config |
| Property | `selected` | `T[]` | Selected rows |
| Attribute | `selection-mode` | `single` \| `multi` \| `none` | Default `none` |
| Attribute | `local-storage-key` | `string` | Default `'dtc-pref'`; **kebab-case attribute** |
| Attribute | `sticky-header`, `disabled` | `boolean` | |
| Property | `sort` | getter/setter | Persists to `{key}-user-sort` in localStorage |
| Property | `userSettings` | getter/setter | Column visibility prefs |
| Property | `supplementalItemStyles` | `CSSResult \| CSSResultGroup \| null` | Per-row styles |
| State | `isLoading` | `boolean` | Via `promiseTracking` |

**Methods:** `selectAll()`, `deselectAll()`, `resetSort()`, `trackLoadingPromise(promise)`

**Events:**
- `selected-changed` (composed)
- `sort-changed`
- `items-reordered` — `CustomEvent<T[]>`
- `change-route` — `CustomEvent<{ path: string }>` (composed)
- `reorder-save-request` — delegate with `resolve()` / `reject(error)`

**Slots:** `settings-menu-items`

**CSS parts:** `table`

**Exported types:** `TitaniumDataTableCoreMetaData`, `TitaniumDataTableCoreItemMetaData`, `TitaniumDataTableCoreSortItem`, `generateDefaultSortFromMetaData()`

**Usage notes / gotchas:**
- Clears selection when `items` reference changes
- Don't clear rows on refetch (scrollbar jank); disable controls via `disabled` / `isLoading`
- Status columns: use `<span indicator green>` / `red` (see cross-cutting patterns)
- `friendlyName` on column metadata: sentence case

---

### `titanium-data-table-action-bar`

**Purpose:** Filter/add button bar that swaps to bulk selection actions when rows are selected.

**Import:** `import '@leavittsoftware/web/titanium/data-table/data-table-action-bar.js'`

**Source:** `titanium/data-table/data-table-action-bar.ts`

| Kind | Name | Type / values | Notes |
|------|------|---------------|-------|
| Property | `selected` | `Partial<T>[]` | |

**Slots:** `add-button`, `filters`, `selected-actions`

**CSS parts:** `main`, `add-button-container`, `filters-container`, `selected-action-veil`, `selected-action-title`, `action-container`

**Pairs with:** `titanium-data-table-core`

---

### `titanium-page-control`

**Purpose:** Page size selector + prev/next paging control.

**Import:** `import '@leavittsoftware/web/titanium/data-table/page-control.js'`

**Source:** `titanium/data-table/page-control.ts`

| Kind | Name | Type / values | Notes |
|------|------|---------------|-------|
| Property | `pageSizes` | `number[]` | Default `[10,15,20,50]` |
| Attribute | `default-page-size` | `number` | Default `10` |
| Property | `page` | `number` | Zero-based |
| Property | `count` | `number` | Total items |
| Attribute | `local-storage-key` | `string` | **Required** for `take` persistence |
| Property | `label` | `string` | Default `'Items per page'` |
| Property | `disabled` | `boolean` | |
| Property | `take` | getter/setter | Persists to localStorage; resets `page` to 0 |

**Events:** `action` (composed) — fired on page or take change

**Usage notes / gotchas:**
- Unknown `take` values are added to `pageSizes`
- Next disabled when `(page+1)*take >= count`
- Use `local-storage-key` attribute (kebab-case), not `localStorageKey`

---

## Form inputs

### `titanium-date-input`

**Purpose:** Cross-browser date / datetime-local input (form-associated).

**Import:** `import '@leavittsoftware/web/titanium/date-input/date-input.js'`

| Kind | Name | Type / values | Notes |
|------|------|---------------|-------|
| Property | `value`, `label`, `placeholder`, `supporting-text` | `string` | |
| Attribute | `type` | `date` \| `datetime-local` | |
| Attribute | `min`, `max`, `maxLength` | `string` | |
| Property | `required`, `disabled`, `error` | `boolean` | |
| Property | `prefix-text`, `suffix-text` | `string` | |
| Attribute | `has-leading-icon`, `has-trailing-icon`, `no-asterisk` | `boolean` | |

**Methods:** `checkValidity()`, `reportValidity()`, `select()`, `setCustomValidity()`, `reset()`

**Events:** Redispatches `change`, `blur`, `select`, `invalid`

**Slots:** `leading-icon`, `trailing-icon` (default trailing: calendar picker)

**Usage notes / gotchas:** `formAssociated`; after user input, attribute `value` no longer syncs until `reset()`; Safari/iOS/Firefox-specific styling

---

### `titanium-date-range-selector`

**Purpose:** Preset + custom date range picker with popover UI.

**Import:** `import '@leavittsoftware/web/titanium/date-range-selector/date-range-selector.js'`

| Kind | Name | Type / values | Notes |
|------|------|---------------|-------|
| Property | `range` | `string` | Default `'custom'`; presets like `allTime`, `last7Days`, etc. |
| Property | `startDate`, `endDate` | `string` | ISO date strings |
| Property | `label`, `supporting-text`, `type` | `string` | `type`: `date` \| `datetime-local` |
| Property | `customDateRanges` | `Map<string, DateRangeOption> \| null` | Override presets |
| Property | `disabled`, `positioning` | | `positioning`: `popover` \| `fixed` |

**Methods:** `reset()` — sets `range` to `'allTime'`

**Events:** `change` on Set (note: `DateRangeChangedEvent` class exists but component fires `change`)

**CSS parts:** `field`

**Usage notes / gotchas:** Firefox lacks `popover` → falls back to `fixed`; datetime custom requires 16-char values to enable Set

---

### `titanium-filled-duration-input`

**Purpose:** Natural-language duration input (parses strings like "3 hours and 30 minutes").

**Import:** `import '@leavittsoftware/web/titanium/duration-input/filled-duration-input.js'`

**Source:** `titanium/duration-input/filled-duration-input.ts`

| Kind | Name | Type / values | Notes |
|------|------|---------------|-------|
| Property | `duration` | `dayjs.Duration \| null` | Canonical value |
| Property | `label`, `placeholder` | `string` | |

**Events:** `duration-change` — read `event.target.duration`

**Usage notes / gotchas:** `value` is human-readable string; use `duration` property for logic

---

### `titanium-filled-search-input`

**Purpose:** Full-width filled search field with clear button.

**Import:** `import '@leavittsoftware/web/titanium/search-input/filled-search-input.js'`

**Source:** `titanium/search-input/filled-search-input.ts`

| Kind | Name | Type / values | Notes |
|------|------|---------------|-------|
| Property | `value`, `placeholder` | `string` | |
| Property | `disabled`, `autocomplete`, `spellcheck` | | |

**Events:** `input` (composed); redispatches `blur`, `focus`, `change`, `invalid`

---

### `titanium-filled-youtube-input`

**Purpose:** YouTube video key input; strips full URLs to 11-char key; shows thumbnail preview.

**Import:** `import '@leavittsoftware/web/titanium/youtube-input/filled-youtube-input.js'`

**Source:** `titanium/youtube-input/filled-youtube-input.ts`

| Kind | Name | Type / values | Notes |
|------|------|---------------|-------|
| Property | `value`, `label` | `string` | |
| Property | `pattern` | `string` | Default `'^.{11}$'` |

**Methods:** `reset()`

**Usage notes / gotchas:** Shows thumbnail in trailing slot when key length is 11

---

### `titanium-address-input`

**Purpose:** Google Places search with manual address entry fallback.

**Import:** `import '@leavittsoftware/web/titanium/address-input/address-input.js'`

| Kind | Name | Type / values | Notes |
|------|------|---------------|-------|
| Property | `googleMapsApiKey` | `string` | **Required** (inherited) |
| Attribute | `show-street2`, `show-county` | `boolean` | |
| Property | `allow-international` | `boolean` | |
| + | All `TitaniumSingleSelectBase` props | | |

**Events:** `selected` (JSDoc says `location-changed` but base fires `selected`)

**Usage notes / gotchas:** Requires Google Maps API key; opens `manual-address-dialog` for manual entry; US street validation when not international

---

### `google-address-input`

**Purpose:** Google Places autocomplete base (extended by `titanium-address-input`).

**Import:** `import '@leavittsoftware/web/titanium/address-input/google-address-input.js'`

| Kind | Name | Type / values | Notes |
|------|------|---------------|-------|
| Property | `googleMapsApiKey` | `string` | **Required** |
| Property | `pathToSelectedText` | `string` | Default `'primaryDisplayText'` |
| Property | `allow-international` | `boolean` | |

**Events:** `selected`; dispatches `ShowSnackbarEvent` on API errors

---

### `titanium-chip`

**Purpose:** Custom chip (link, filter, or input-chip with remove).

**Import:** `import '@leavittsoftware/web/titanium/chip/chip.js'`

| Kind | Name | Type / values | Notes |
|------|------|---------------|-------|
| Property | `label` | `string` | |
| Property | `selected`, `disabled`, `non-interactive` | `boolean` | |
| Property | `href`, `download`, `target` | `string` | Link chip |
| Attribute | `input-chip` | `boolean` | Enables remove button |

**Events:** `remove` (when `input-chip`)

**Slots:** `icon`, `label`, `trailing`

**CSS parts:** `button`, `ripple`, `focus-ring`

**Usage notes / gotchas:** Use `filled` attribute in consuming apps for design consistency

---

### `titanium-chip-multi-select`

**Purpose:** Filled validator wrapper for slotted chips + add button.

**Import:** `import '@leavittsoftware/web/titanium/chip-multi-select/chip-multi-select.js'`

| Kind | Name | Type / values | Notes |
|------|------|---------------|-------|
| Property | `label`, `noItemsText`, `supportingText`, `errorText` | `string` | |
| Property | `required`, `hasItems`, `error`, `resizable`, `disabled` | `boolean` | |

**Methods:** `checkValidity()`, `reportValidity()`, `reset()`

**Slots:** default — intended: `md-filled-tonal-button` + `md-input-chip` / chips

**Usage notes / gotchas:** `disabled` on host does not auto-disable slotted chips/buttons

---

### `titanium-single-select-base`

**Purpose:** Generic autocomplete single-select base (extended by domain selects).

**Import:** `import '@leavittsoftware/web/titanium/single-select-base/single-select-base.js'`

| Kind | Name | Type / values | Notes |
|------|------|---------------|-------|
| Property | `label`, `placeholder`, `selected` | | `selected`: `T \| null` |
| Property | `required`, `disabled`, `error`, `errorText` | `boolean` / `string` | |
| Property | `prefixText`, `suffixText`, `supportingText` | `string` | |
| Attribute | `no-asterisk`, `has-leading-icon`, `has-trailing-icon` | `boolean` | |
| Property | `pathToSelectedText` | `string` | Key on selected object for display |
| Property | `positioning`, `match-input-width`, `large`, `shaped` | | Menu positioning |
| Attribute | `disable-menu-open-on-focus` | `boolean` | |
| Attribute | `menu-open` | `boolean` | Reflected |
| State | `isLoading` | `boolean` | |

**Methods:** `reset()`, `softReset()`, `select()`, `focus()`, `checkValidity()`, `reportValidity()`, `setCustomValidity()`, `trackLoadingPromise()`

**Events:** `selected`; redispatches menu `opening`/`opened`/`closing`/`closed`

**Slots:** `leading-icon`, `trailing-icon`

**CSS parts:** `menu`

**Usage notes / gotchas:**
- `required` patches `md-filled-text-field.checkValidity`
- Custom validity when typed but not selected
- `positioning='popover'` falls back to `'fixed'` in Firefox

---

### `titanium-icon-picker`

**Purpose:** Material Symbols icon search and select.

**Import:** `import '@leavittsoftware/web/titanium/icon-picker/icon-picker.js'`

| Kind | Name | Type / values | Notes |
|------|------|---------------|-------|
| Property | `favorites` | `string[]` | |
| Property | `whitelist` | `string` | Comma-separated icon names |
| Property | `pathToSelectedText` | `string` | Default `'icon'` |
| + | `TitaniumSingleSelectBase` props | | |

**Events:** `selected`

---

### `titanium-smart-attachment-input`

**Purpose:** File upload with chips, image crop, preview, optional delete confirmation.

**Import:** `import '@leavittsoftware/web/titanium/smart-attachment-input/smart-attachment-input.js'`

| Kind | Name | Type / values | Notes |
|------|------|---------------|-------|
| Property | `accept`, `multiple`, `required`, `disabled` | | |
| Property | `confirmDelete`, `confirmDeleteHeader`, `confirmDeleteText` | | |
| Property | `addButtonLabel`, `label`, `supportingText`, `noItemsText` | `string` | |
| Property | `options` | `CropperOptions` | Cropper.js config |
| Attribute | `force-png` | `boolean` | |

**Methods:** `getFiles()`, `setFiles(...)`, `setFilesFromDatabaseAttachments(...)`, `checkValidity()`, `reportValidity()`, `hasChanges()`, `reset()`, `handleNewFile(files)`

**Events:** `change`

**Usage notes / gotchas:** Uses internal `titanium-chip-multi-select`; revokes blob URLs on `reset()`

---

### `titanium-filled-input-validator`

**Purpose:** Filled MdField wrapper with custom `evaluator` validation function.

**Import:** `import '@leavittsoftware/web/titanium/input-validator/filled-input-validator.js'`

**Source:** `titanium/input-validator/filled-input-validator.ts`

| Kind | Name | Type / values | Notes |
|------|------|---------------|-------|
| Property | `evaluator` | `() => boolean` | Custom validity check |
| Property | `populated` | `boolean` | |
| + | MdField props | `label`, `error`, `error-text`, `supporting-text`, `required` | |

**Methods:** `checkValidity()`, `reportValidity()`, `reset()`

**Slots:** default (wraps slotted input)

---

## Dialogs and confirmations

### `titanium-confirmation-dialog`

**Purpose:** Imperative promise-based confirm/cancel dialog.

**Import:** `import '@leavittsoftware/web/titanium/confirmation-dialog/confirmation-dialog.js'`

| Kind | Name | Type / values | Notes |
|------|------|---------------|-------|
| Property | `headline`, `text` | `string` | |
| Property | `confirmActionText`, `cancelActionText` | `string` | |
| Property | `disableConfirmationAction`, `disableCancelAction` | `boolean` | |

**Methods:** `open(headline, text)` → `Promise<'cancel' | 'confirmed'>`

**Slots:** default (content area)

**CSS parts:** `content-container`

---

### `provide-feedback-dialog`

**Purpose:** Modal to submit user feedback to Issue Tracking API.

**Import:** `import '@leavittsoftware/web/leavitt/user-feedback/provide-feedback-dialog.js'`

| Kind | Name | Type / values | Notes |
|------|------|---------------|-------|
| Property | `.userManager` | `AuthZeroLgUserManager` | **Required** |

**Methods:** `show()`, `reset()`

**Events:** `PendingStateEvent`, `ShowSnackbarEvent`

---

### `report-a-problem-dialog`

**Purpose:** Bug report modal with file attachments.

**Import:** `import '@leavittsoftware/web/leavitt/user-feedback/report-a-problem-dialog.js'`

| Kind | Name | Type / values | Notes |
|------|------|---------------|-------|
| Property | `.userManager` | `AuthZeroLgUserManager` | **Required** |

**Methods:** `show()`, `reset()`

**Uses:** `titanium-smart-attachment-input`, `titanium-snackbar-stack`

---

## Feedback, loading, and error pages

### `titanium-snackbar-stack`

**Purpose:** Stackable snackbar host; listens for `ShowSnackbarEvent`.

**Import:** `import '@leavittsoftware/web/titanium/snackbar/snackbar-stack.js'`

| Kind | Name | Type / values | Notes |
|------|------|---------------|-------|
| Property | `.eventListenerTarget` | `HTMLElement \| Document` | Default `document` |

**Methods:** `open(message, options?)`, `dismissAll()`

**Events listened:** `show-snackbar`

**Usage notes / gotchas:** `display: contents`; place in app shell or dialog (dialogs doing I/O need their own stack)

---

### `titanium-circle-loading-indicator`

**Purpose:** Scoped circular loading overlay on a pending-state element.

**Import:** `import '@leavittsoftware/web/titanium/circle-loading-indicator/circle-loading-indicator.js'`

| Kind | Name | Type / values | Notes |
|------|------|---------------|-------|
| Property | `.pendingStateElement` | `Element \| null` | |

**Events listened:** `pending-state`

**Usage notes / gotchas:**
- Sets parent `inert` while open; 75ms open delay, 400ms min visible
- **Must** dispatch `PendingStateEvent` for work — `isLoading` alone does not drive the overlay
- Calls `stopPropagation()` on the event

---

### `leavitt-error-page`

**Purpose:** Branded error page with particle star background; theme-aware.

**Import:** `import '@leavittsoftware/web/leavitt/error-page/error-page.js'`

| Kind | Name | Type / values | Notes |
|------|------|---------------|-------|
| Property | `heading` | `string \| TemplateResult` | Default `'Hmm...'` |
| Property | `message` | `string \| TemplateResult` | |

**Usage notes / gotchas:** Extends `ThemePreference`; uses `@tsparticles/preset-stars`

---

## Domain selects

All extend `TitaniumSingleSelectBase` and fire `selected`. All require `.apiService` (`ApiService` instance).

### `leavitt-company-select`

**Import:** `import '@leavittsoftware/web/leavitt/company-select/company-select.js'`

| Kind | Name | Type / values | Notes |
|------|------|---------------|-------|
| Property | `.apiService` | `ApiService` | **Required** |
| Property | `apiControllerName` | `string` | Default `'Companies'` |
| Property | `companies` | `Partial<Company>[]` | Preloaded list |
| Property | `odataParts` | `string[]` | Default `orderby=Name,select=...` |
| Property | `disableAutoLoad` | `boolean` | Skip auto-fetch on `firstUpdated` |

**Methods:** `reloadCompanies()`, `reset()` (inherited)

**Usage notes / gotchas:** Local Fuse.js search over preloaded companies; company mark icons in menu items

---

### `leavitt-person-select`

**Import:** `import '@leavittsoftware/web/leavitt/person-select/person-select.js'`

| Kind | Name | Type / values | Notes |
|------|------|---------------|-------|
| Property | `.apiService` | `ApiService` | **Required** |
| Property | `apiControllerName` | `string` | |
| Property | `odataParts` | `string[]` | |
| Property | `searchType` | `local` \| `remote` | Remote uses OData `contains` on `FullName` |
| Property | `enablePeoplePreloading` | `boolean` | |
| Property | `people` | `Partial<Person>[]` | |

---

### `leavitt-person-company-select`

**Import:** `import '@leavittsoftware/web/leavitt/person-company-select/person-company-select.js'`

| Kind | Name | Type / values | Notes |
|------|------|---------------|-------|
| Property | `.apiService` | `ApiService` | **Required** |
| Property | `peopleApiControllerName` | `string` | |
| Property | `companyApiControllerName` | `string` | |

**Usage notes / gotchas:** Combined people + companies in one autocomplete

---

### `leavitt-person-group-select`

**Import:** `import '@leavittsoftware/web/leavitt/person-group-select/person-group-select.js'`

| Kind | Name | Type / values | Notes |
|------|------|---------------|-------|
| Property | `.apiService` | `ApiService` | **Required** |
| Property | `peopleApiControllerName` | `string` | |
| Property | `groupApiControllerName` | `string` | |

**Usage notes / gotchas:** Searches people and people groups

---

## File explorer

### `leavitt-file-explorer`

**Purpose:** Full file/folder browser with grid/list views, upload, and admin actions.

**Import:** `import '@leavittsoftware/web/leavitt/file-explorer/file-explorer.js'`

| Kind | Name | Type / values | Notes |
|------|------|---------------|-------|
| Property | `.apiService` | `ApiService` | **Required** |
| Attribute | `file-explorer-id` | `number` | |
| Attribute | `folder-id` | `number \| null` | |
| Attribute | `local-storage-display-key` | `string` | Persists grid/list preference |
| Attribute | `prevent-navigation-up` | `boolean` | |
| Property | `display` | `grid` \| `list` | Persisted |
| Property | `state` | `no-permission` \| `files` \| `no-files` \| `error` | |

**Methods:** `reload()`

**Events:** `folder-added`, `folder-deleted`, `file-added`, `file-deleted`, `PendingStateEvent`, `ShowSnackbarEvent`

**Usage notes / gotchas:**
- Subscribes to `fileExplorerEvents` bus for live modal sync
- Uses `titanium-confirmation-dialog` for deletes
- Internal modals: `leavitt-file-modal`, `leavitt-folder-modal`, `leavitt-add-folder-modal`

---

## Email history

### `leavitt-email-history-viewer-filled`

**Purpose:** App-shell integrated email log viewer using `titanium-data-table-core`.

**Import:** `import '@leavittsoftware/web/leavitt/email-history-viewer/email-history-viewer-filled.js'`

| Kind | Name | Type / values | Notes |
|------|------|---------------|-------|
| Property | `isActive` | `boolean` | |
| Property | `.apiService` | `ApiService` | **Required** |
| Property | `path`, `apiControllerName` | `string` | |
| Property | `.siteSearchTextFieldContext` | Lit context | Shared search field |
| Property | `toolbarSearchTerm` | `string` | **Deprecated** |

**Uses:** `titanium-page-control`, filter dialogs, `leavitt-view-sent-email-dialog`

---

## Profile and user feedback

### `profile-picture`

**Purpose:** CDN-hosted profile image with optional link and test-user indicator.

**Import:** `import '@leavittsoftware/web/leavitt/profile-picture/profile-picture.js'`

| Kind | Name | Type / values | Notes |
|------|------|---------------|-------|
| Property | `fileName` | `string` | CDN filename |
| Property | `shape` | `circle` \| `square` | |
| Property | `size` | `number` | Pixels |
| Property | `show-ring`, `show-test-user-indicator`, `useIntrinsicImageSize` | `boolean` | |
| Property | `profile-picture-link-person-id` | `number` | Directory link |

**CSS parts:** `test-user-indicator`

---

### `profile-picture-menu`

**Purpose:** User avatar + account menu popover.

**Import:** `import '@leavittsoftware/web/leavitt/profile-picture/profile-picture-menu.js'`

| Kind | Name | Type / values | Notes |
|------|------|---------------|-------|
| Property | `.userManager` | `AuthZeroLgUserManager` | |
| Property | `size`, `profilePictureFileName`, `personId`, `email`, `company`, `name` | | |
| Property | `positioning` | `popover` \| `fixed` | |

**Slots:** `content`

**Usage notes / gotchas:** Auto-syncs from `userManager.onIdentityUpdated`; opens auth if no `personId`

---

### `titanium-profile-picture-stack`

**Purpose:** Overlapping profile picture stack with overflow count.

**Import:** `import '@leavittsoftware/web/titanium/profile-picture-stack/profile-picture-stack.js'`

| Kind | Name | Type / values | Notes |
|------|------|---------------|-------|
| Property | `people` | `Partial<Person>[]` | |
| Property | `max` | `number` | Max visible |
| Property | `size`, `overlap` | `number` | |
| Property | `enable-directory-href`, `show-full-name`, `auto-resize` | `boolean` | |

**CSS parts:** `additional-users`, `additional-users-paragraph`, `name`, `profile-picture`

**Uses:** `profile-picture` internally

---

## Service worker notifier

### `leavitt-service-worker-notifier`

**Purpose:** Themed full-screen popover prompting reload after SW update.

**Import:** `import '@leavittsoftware/web/leavitt/service-worker-notifier/service-worker-notifier.js'`

**Usage notes / gotchas:** Extends `ThemePreference`; auto-registers SW update listeners; click anywhere reloads

---

# Shared utilities

## Events

| Symbol | Import path | Event name | Payload / usage |
|--------|-------------|------------|-----------------|
| `ShowSnackbarEvent` | `titanium/snackbar/show-snackbar-event` | `show-snackbar` | `message: string \| Partial<HttpError>`, optional `SnackbarOptions` |
| `PendingStateEvent` | `titanium/types/pending-state-event` | `pending-state` | `{ promise: Promise<unknown> }`; bubbles, composed |
| `DateRangeChangedEvent` | `titanium/date-range-selector/date-range-change-event` | `date-range-changed` | Class exists; `titanium-date-range-selector` fires `change` instead |
| `ThemePreferenceEvent` | `leavitt/theme/theme-preference-event` | theme preference changes | Subscribe for dark/light switches |
| `DataTableItemsReorderedEvent` | `titanium/data-table/data-table-core` | `titanium-data-table-items-reorder` | Exported from data-table-core; core dispatches `items-reordered` on apply |

## Services

### `ApiService`

**Import:** `leavitt/api-service/api-service`

| Method | Notes |
|--------|-------|
| `getAsync<T>(urlPath)` | Returns `ODataResponse<T>` |
| `postAsync<T>(urlPath, body?)` | JSON POST |
| `putAsync`, `patchAsync`, `deleteAsync` | Standard verbs |
| `uploadFile(urlPath, file, onprogress, options?)` | XHR upload with progress |
| `aggregateResponses(promises)` | Batch multiple async ops |
| `addHeader(key, value)` | e.g. `X-LGAppName` |

**Response helpers:** `ODataResponse.toList()`, `.odataCount`

**Related:** `HttpError`, `BearerTokenProvider`, `objectToFormData`, `BlobResponse`

### `AuthZeroLgUserManager`

**Import:** `leavitt/user-manager/auth-zero-lg-user-manager`

Auth0 integration for `profile-picture-menu`, feedback dialogs. Provides `identity`, `authenticate()`, `onIdentityUpdated`.

## Controllers and buses

| Symbol | Import path | Purpose |
|--------|-------------|---------|
| `FilterController` | `titanium/data-table/filter-controller` | URL query-string filter state for list pages |
| `TitaniumSiteSearchTextFieldController` | `titanium/site-search-text-field-controller/site-search-text-field-controller` | App-level shared search field via Lit context |
| `EventBus` | `titanium/event-bus/event-bus` | Typed pub/sub (`subscribe`, `dispatch`, `unsubscribe`) |
| `fileExplorerEvents` | `leavitt/file-explorer/events/file-explorer-events` | File explorer modal sync bus |

## Contexts

| Context | Import path |
|---------|-------------|
| `mainMenuPositionContext` | `leavitt/app/contexts/main-menu-position-context` |
| `TitaniumTextFieldSearchContext` | `titanium/site-search-text-field-controller/site-search-text-field-controller` |

## Mixins and decorators

| Symbol | Import path | Purpose |
|--------|-------------|---------|
| `promiseTracking` | `titanium/helpers/promise-tracking` | `@promiseTracking('methodName')` decorator for loading flags |
| `PendingStateCatcher` | `titanium/helpers/pending-state-catcher` | Mixin to catch pending-state on host |
| `ThemePreference` | `leavitt/theme/theme-preference` | Dark/light theme mixin |

## Helpers (selected)

| Symbol | Import path | Purpose |
|--------|-------------|---------|
| `Debouncer` | `titanium/helpers/debouncer` | Debounced async calls |
| `delay` | `titanium/helpers/delay` | Promise delay |
| `getCdnDownloadUrl`, `getCdnInlineUrl` | `titanium/helpers/get-cdn-download-url`, `get-cdn-Inline-url` | CDN attachment URLs |
| `getCompanyMarkUrl`, `getCompanyLogoUrl` | `titanium/helpers/get-company-mark-url`, `get-company-logo-url` | Company branding URLs |
| `formatAddress`, address utils | `titanium/helpers/address/*` | Address formatting |
| Phone formatters | `titanium/helpers/phone-numbers/*` | Phone number display |
| `convertArrayToCsv`, `startCsvDownload` | `titanium/helpers/csv/*` | CSV export |
| `getSearchTokens` | `titanium/helpers/get-search-token` | OData search token parsing |
| `escapeTerm` | `titanium/helpers/escape-term` | OData string escaping |
| `groupBy`, `join`, `middleEllipsis` | `titanium/helpers/*` | General utilities |
| `notNull`, `notUndefined`, `notNullOrUndefined` | `titanium/helpers/*` | Type guards |
| `installMediaQueryWatcher` | `titanium/helpers/install-media-query-watcher` | Responsive layout callback |
| `findScrollableParent` | `titanium/helpers/find-scrollable-parent` | Scroll container detection |
| `isDevelopment` | `titanium/helpers/is-development` | Dev environment detection |

## Hacks

| Module | Import path | When to use |
|--------|-------------|-------------|
| `dialogCloseNavigationHack` | `titanium/hacks/dialog-navigation-hack` | Close dialog on SPA navigation without breaking history |
| `dialogZindexHack` | `titanium/hacks/dialog-zindex-hack` | Stacking context issues with nested dialogs |
| `dialogOverflowHacks` | `titanium/hacks/dialog-overflow-hacks` | Body scroll lock with dialogs |
| `reportValidityIfError` | `titanium/hacks/report-validity-if-error` | Form validation helper |
