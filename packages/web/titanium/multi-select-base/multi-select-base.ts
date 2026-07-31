import '@material/web/icon/icon';
import '@material/web/iconbutton/icon-button';
import '@material/web/menu/menu';
import '@material/web/menu/menu-item';
import '@material/web/progress/circular-progress';

import '../chip/chip';
import '../input-validator/filled-input-validator';

import Fuse from 'fuse.js';

import { css, html, LitElement, nothing, PropertyValues, TemplateResult } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';

import { Debouncer } from '../helpers/debouncer';
import { ellipsis } from '../styles/ellipsis';
import { Identifier } from '../types/identifier-interface';
import { Menu } from '@material/web/menu/internal/menu';
import { promiseTracking } from '../helpers/promise-tracking';
import { redispatchEvent } from '@material/web/internal/events/redispatch-event';
import { TitaniumFilledInputValidator } from '../input-validator/filled-input-validator';

/**
 * A group of items rendered under a header when no search term is entered.
 */
export type TitaniumMultiSelectSection<T> = {
  /**
   *  Unique key of the section. Used for list diffing.
   */
  key: string;

  /**
   *  Header text of the section.
   */
  headline: string;

  /**
   *  Optional second line of the section header.
   */
  supportingText?: string;

  /**
   *  Optional Material Symbols icon name shown before the header text.
   */
  icon?: string;

  /**
   *  Items belonging to the section. Items may appear in more than one section.
   */
  items: Array<T>;
};

/**
 *  Generic multi select combobox. Selected items are displayed as chips inside the field
 *  and the search input lives in the popover above the selectable items.
 *
 *  Use directly for locally searchable lists or extend it to supply remote search results.
 *
 *  @element titanium-multi-select-base
 *
 *  @fires selected-changed - Fired when the user adds or removes an item. Read the new value from `event.target.selected`.
 *
 *  @slot leading-icon - Icon displayed at the start of the field. Requires `has-leading-icon`.
 *
 *  @cssprop --titanium-multi-select-menu-max-height - Max height of the popover. Defaults to 460px.
 *  @cssprop --titanium-multi-select-search-height - Height of the sticky search row. Defaults to 52px.
 */
@customElement('titanium-multi-select-base')
export class TitaniumMultiSelectBase<T extends Identifier = Identifier> extends LitElement {
  @promiseTracking('trackLoadingPromise')
  @state()
  accessor isLoading = false;
  declare trackLoadingPromise: (promise: Promise<unknown>) => Promise<void>;

  /**
   *  Sets floating label value.
   */
  @property({ type: String }) accessor label: string = 'Multi select';

  /**
   *  Text displayed in the field when nothing is selected.
   */
  @property({ type: String }) accessor placeholder: string = 'Select items';

  /**
   *  Placeholder text of the search input inside the popover.
   */
  @property({ type: String, attribute: 'search-placeholder' }) accessor searchPlaceholder: string = 'Search';

  /**
   *  The items selected by the user.
   */
  @property({ type: Array }) accessor selected: Array<T> = [];

  /**
   *  Every selectable item. Searched locally with fuse.js and rendered when `sections` is empty.
   */
  @property({ type: Array }) accessor items: Array<T> = [];

  /**
   *  Optional grouping of items rendered when no search term is entered. Search results are always
   *  rendered as a flat list.
   */
  @property({ type: Array }) accessor sections: Array<TitaniumMultiSelectSection<T>> = [];

  /**
   *  Key on an item holding the text to display in chips and menu items.
   */
  @property({ type: String }) accessor pathToSelectedText: string = 'Name';

  /**
   *  Optional key on an item holding a Material Symbols icon name.
   */
  @property({ type: String }) accessor pathToIcon: string = '';

  /**
   *  Keys searched by the local fuse.js search. Defaults to `[pathToSelectedText]`.
   */
  @property({ type: Array }) accessor searchKeys: Array<string> = [];

  /**
   *  Maximum number of items the user is allowed to select. Zero allows an unlimited number.
   */
  @property({ type: Number, attribute: 'max-selected' }) accessor maxSelected: number = 0;

  /**
   *  Displays error state when nothing is selected.
   */
  @property({ type: Boolean }) accessor required: boolean = false;

  /**
   *  Whether or not the input should be disabled.
   */
  @property({ type: Boolean, reflect: true }) accessor disabled: boolean = false;

  /**
   *  Gets or sets whether or not the field is in a visually invalid state.
   */
  @property({ type: Boolean }) accessor error: boolean = false;

  /**
   *  Error message displayed below the field when it is in an invalid state.
   */
  @property({ type: String }) accessor errorText: string = 'Please select at least one item';

  /**
   *  Conveys additional information below the field, such as how it should be used.
   */
  @property({ type: String }) accessor supportingText: string = '';

  /**
   *  Disables the asterisk on the floating label when the field is required.
   */
  @property({ type: Boolean, attribute: 'no-asterisk' }) accessor noAsterisk: boolean = false;

  /**
   *  Renders the `leading-icon` slot at the start of the field.
   */
  @property({ type: Boolean, attribute: 'has-leading-icon' }) accessor hasLeadingIcon: boolean = false;

  /**
   *  Text displayed in the popover when there is nothing to select.
   */
  @property({ type: String, attribute: 'no-items-text' }) accessor noItemsText: string = 'No items';

  /**
   *  Text displayed in the popover when a search returns no results.
   */
  @property({ type: String, attribute: 'no-results-text' }) accessor noResultsText: string = 'No matches found';

  /**
   *  Hides the clear all button that appears in the field once something is selected.
   */
  @property({ type: Boolean, attribute: 'disable-clear-all' }) accessor disableClearAll: boolean = false;

  /**
   *  Positioning strategy of the popover. `popover` falls back to `fixed` in browsers without popover support.
   */
  @property() accessor positioning: 'absolute' | 'fixed' | 'document' | 'popover' = 'popover';

  /**
   *  When enabled, uses a ResizeObserver to keep the popover width in sync with the field width.
   */
  @property({ type: Boolean, attribute: 'match-input-width' }) accessor matchInputWidth: boolean = false;

  @property({ type: Boolean, attribute: 'menu-open', reflect: true }) private accessor menuOpen: boolean = false;

  @state() protected accessor searchTerm: string = '';

  /**
   *  Results of the last search. Rendered instead of `items` / `sections` while a search term is entered.
   */
  @state() protected accessor suggestions: Array<T> = [];

  @state() protected accessor count: number = 0;

  @state() private accessor menuWidth: number | undefined;

  @query('md-menu') protected accessor menu!: Menu | null;
  @query('titanium-filled-input-validator') protected accessor field!: TitaniumFilledInputValidator | null;
  @query('input[search]') protected accessor searchInput!: HTMLInputElement | null;

  #resizeObserver: ResizeObserver | null = null;
  #doSearchDebouncer = new Debouncer((searchTerm: string) => this.#doSearch(searchTerm));

  /**
   *  Whether or not the popover is open.
   */
  get isOpen() {
    return this.menuOpen;
  }

  /**
   *  Whether or not `maxSelected` has been reached.
   */
  get isAtMaxSelected() {
    return this.maxSelected > 0 && this.selected.length >= this.maxSelected;
  }

  /**
   *  Items currently rendered in the popover, flattened across sections.
   */
  protected get visibleItems(): Array<T> {
    if (this.searchTerm) {
      return this.suggestions;
    }

    return this.sections.length ? this.sections.flatMap((section) => section.items) : this.items;
  }

  /**
   *  Items searched by the local search. Falls back to the items of every section when `items` is empty.
   */
  protected get searchPool(): Array<T> {
    if (this.items.length) {
      return this.items;
    }

    const seen = new Set<string>();
    return this.sections
      .flatMap((section) => section.items)
      .filter((item) => {
        const key = this.getItemKey(item);
        if (seen.has(key)) {
          return false;
        }
        seen.add(key);
        return true;
      });
  }

  connectedCallback() {
    super.connectedCallback();
    if (this.matchInputWidth) {
      this.#observeInputWidth();
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.#stopObservingInputWidth();
  }

  update(changed: PropertyValues<this>) {
    // Firefox does not support popover. Fall-back to using fixed.
    if (changed.has('positioning') && this.positioning === 'popover' && !this.showPopover) {
      this.positioning = 'fixed';
    }

    if (changed.has('matchInputWidth')) {
      if (this.matchInputWidth) {
        this.#observeInputWidth();
      } else {
        this.#stopObservingInputWidth();
      }
    }

    super.update(changed);
  }

  updated(changed: PropertyValues<this>) {
    // md-menu measures its surface once when it opens. Filtering the list or adding a chip
    // (which grows the anchor) changes those measurements, so ask it to measure again.
    const affectsLayout = ['suggestions', 'searchTerm', 'items', 'sections', 'selected', 'isLoading'];
    const changedProperties = changed as Map<string, unknown>;
    if (this.menuOpen && affectsLayout.some((property) => changedProperties.has(property))) {
      this.menu?.reposition();
    }
  }

  #observeInputWidth() {
    this.#resizeObserver?.disconnect();
    this.#resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        this.menuWidth = entry.contentRect.width;
      }
    });
    this.#resizeObserver.observe(this);
  }

  #stopObservingInputWidth() {
    this.#resizeObserver?.disconnect();
    this.#resizeObserver = null;
    this.menuWidth = undefined;
  }

  /**
   *  Opens the popover and focuses the search input.
   */
  open() {
    if (this.disabled) {
      return;
    }
    this.menu?.show();
  }

  /**
   *  Closes the popover.
   */
  close() {
    this.menu?.close();
  }

  /**
   *  Opens the popover when closed, closes it when open.
   */
  toggleMenu() {
    if (this.menuOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  /**
   *  Sets focus on the field.
   */
  async focus() {
    this.field?.focus();
  }

  /**
   *  Returns true when the given item is selected.
   */
  isSelected(item: T) {
    const key = this.getItemKey(item);
    return this.selected.some((selected) => this.getItemKey(selected) === key);
  }

  /**
   *  Adds an item to the selection. Does nothing when it is already selected or `maxSelected` is reached.
   */
  selectItem(item: T) {
    if (this.isSelected(item) || this.isAtMaxSelected) {
      return;
    }

    this.selected = [...this.selected, item];
    this.#notifySelectedChanged();
  }

  /**
   *  Removes an item from the selection.
   */
  deselectItem(item: T) {
    const key = this.getItemKey(item);
    if (!this.isSelected(item)) {
      return;
    }

    this.selected = this.selected.filter((selected) => this.getItemKey(selected) !== key);
    this.#notifySelectedChanged();
  }

  /**
   *  Adds the item when it is not selected, removes it when it is.
   */
  toggleItem(item: T) {
    if (this.isSelected(item)) {
      this.deselectItem(item);
    } else {
      this.selectItem(item);
    }
  }

  /**
   *  Removes every selected item.
   */
  clear() {
    if (!this.selected.length) {
      return;
    }

    this.selected = [];
    this.#notifySelectedChanged();
  }

  /**
   *  Clears the selection, the search term and the validity state.
   */
  reset() {
    this.selected = [];
    this.softReset();
    this.error = false;
    this.field?.reset();
  }

  /**
   *  Clears the search term and its results.
   */
  softReset() {
    this.searchTerm = '';
    this.suggestions = [];
    this.count = 0;
  }

  /**
   *  Returns true if the field passes validity checks.
   */
  checkValidity() {
    return this.field?.checkValidity() ?? true;
  }

  /**
   *  Runs checkValidity() method, and if it returns false, then it reports to the user that the field is invalid.
   */
  reportValidity() {
    return this.field?.reportValidity() ?? true;
  }

  #notifySelectedChanged() {
    // Only re-run validation once the field is already complaining so a required
    // field does not error before the user has interacted with it.
    if (this.field?.error) {
      this.reportValidity();
    }

    this.dispatchEvent(new Event('selected-changed', { composed: true }));
  }

  /**
   *  Called with the current search term after every keystroke. Override to supply remote results
   *  and call `showSuggestions()` when they arrive.
   */
  protected onInputChanged(searchTerm: string) {
    this.#doSearchDebouncer.debounce(searchTerm);
  }

  /**
   *  Renders the given search results in the popover.
   */
  protected async showSuggestions(suggestions: Array<T>, totalSuggestionCount: number) {
    this.suggestions = suggestions;
    this.count = totalSuggestionCount;
    await this.updateComplete;

    // Results replace the list in place, so bring the top of it back into view.
    this.shadowRoot?.querySelector('md-menu-item')?.scrollIntoView({ block: 'nearest' });
  }

  async #doSearch(searchTerm: string) {
    // The base may have been cleared while the search was debouncing.
    if (!this.searchTerm || !searchTerm) {
      return;
    }

    const keys = this.searchKeys.length ? this.searchKeys : [this.pathToSelectedText];
    const fuse = new Fuse(this.searchPool, { includeScore: true, keys, shouldSort: true, ignoreLocation: true, threshold: 0.3 } as never);
    const results = fuse.search(searchTerm).map((result) => result.item);

    this.showSuggestions(results, results.length);
  }

  async #onSearchInput(searchTerm: string) {
    this.searchTerm = searchTerm;
    this.suggestions = [];
    this.count = 0;
    await this.updateComplete;

    this.onInputChanged(searchTerm);
  }

  /**
   *  Unique key of an item. Used for list diffing and selection comparisons.
   */
  protected getItemKey(item: T): string {
    return String(item?.Id ?? this.getItemText(item));
  }

  /**
   *  Text of an item shown in its chip and menu item.
   */
  protected getItemText(item: T): string {
    return String(item?.[this.pathToSelectedText] ?? '');
  }

  /**
   *  Material Symbols icon name of an item, or an empty string when it has none.
   */
  protected getItemIcon(item: T): string {
    return this.pathToIcon ? String(item?.[this.pathToIcon] ?? '').trim() : '';
  }

  #menuItemFromEvent(event: Event) {
    for (const target of event.composedPath()) {
      if (target instanceof HTMLElement && target.hasAttribute('md-menu-item')) {
        return target.hasAttribute('disabled') ? null : (target as HTMLElement & { item?: T });
      }
    }

    return null;
  }

  #onFieldKeydown(event: KeyboardEvent) {
    // Chips and the clear button live inside the field. Let them handle their own keys.
    if (this.disabled || event.target !== this.field) {
      return;
    }

    if (event.key === 'ArrowDown' || event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.open();
      return;
    }

    if (event.key === 'Backspace') {
      const last = this.selected.at(-1);
      if (last) {
        event.preventDefault();
        this.deselectItem(last);
      }
    }
  }

  #onSearchKeydown(event: KeyboardEvent) {
    // md-menu listens for keydown on itself to drive list navigation. Stop text
    // editing keys from moving focus out of the search input.
    event.stopPropagation();

    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        this.menu?.activateNextItem();
        break;
      case 'ArrowUp':
        event.preventDefault();
        this.menu?.activatePreviousItem();
        break;
      case 'Enter': {
        event.preventDefault();
        const first = this.visibleItems.at(0);
        if (first) {
          this.toggleItem(first);
        }
        break;
      }
      case 'Escape':
        event.preventDefault();
        this.close();
        this.focus();
        break;
      case 'Tab':
        this.close();
        break;
      case 'Backspace': {
        if (this.searchTerm) {
          break;
        }
        const last = this.selected.at(-1);
        if (last) {
          this.deselectItem(last);
        }
        break;
      }
      default:
        break;
    }
  }

  #onMenuClick(event: MouseEvent) {
    const menuItem = this.#menuItemFromEvent(event);
    if (!menuItem?.item) {
      return;
    }

    this.toggleItem(menuItem.item);
    this.searchInput?.focus();
  }

  #onMenuKeydown(event: KeyboardEvent) {
    const menuItem = this.#menuItemFromEvent(event);
    if (!menuItem) {
      return;
    }

    // Menu items are rendered with `keep-open` so md-menu-item swallows the selection
    // keys instead of closing the menu. Toggle from here so subclasses only render markup.
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (menuItem.item) {
        this.toggleItem(menuItem.item);
      }
      return;
    }

    if (event.key === 'ArrowUp' && (this.menu?.items[0] as unknown) === menuItem) {
      event.preventDefault();
      event.stopPropagation();
      this.searchInput?.focus();
    }
  }

  static styles = [
    ellipsis,
    css`
      :host {
        display: block;
        position: relative;
        width: 100%;

        --md-filled-field-container-shape: 16px;

        --md-filled-field-active-indicator-height: 0;
        --md-filled-field-error-active-indicator-height: 0;
        --md-filled-field-hover-active-indicator-height: 0;
        --md-filled-field-focus-active-indicator-height: 0;
        --md-filled-field-disabled-active-indicator-height: 0;

        --md-menu-container-shape: 16px;
        --md-menu-top-space: 0;
      }

      titanium-filled-input-validator {
        display: block;
        width: 100%;
        cursor: pointer;
        outline: none;
        --md-filled-field-with-label-bottom-space: 12px;
      }

      :host([disabled]) titanium-filled-input-validator {
        cursor: default;
      }

      chips-container {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px;
        margin-top: 6px;
        min-height: 32px;
      }

      span[placeholder] {
        font-size: 14px;
        line-height: 32px;
        color: var(--md-sys-color-on-surface-variant);
      }

      div[trailing] {
        display: flex;
        align-items: center;
        gap: 4px;
      }

      md-circular-progress {
        --md-circular-progress-size: 24px;
      }

      md-icon-button {
        --md-icon-button-icon-size: 20px;
        --md-icon-button-state-layer-height: 32px;
        --md-icon-button-state-layer-width: 32px;
      }

      md-menu {
        min-width: 280px;
        max-height: var(--titanium-multi-select-menu-max-height, 460px);
      }

      md-menu-item,
      div[section-header] {
        /* Keyboard navigation scrolls items into view — leave room for the sticky search row. */
        scroll-margin-top: var(--titanium-multi-select-search-height, 52px);
      }

      md-menu-item {
        min-width: 280px;
      }

      search-container {
        display: flex;
        align-items: center;
        gap: 12px;
        box-sizing: border-box;
        height: var(--titanium-multi-select-search-height, 52px);
        padding: 0 16px;

        position: sticky;
        top: 0;
        z-index: 2;

        background-color: var(--md-menu-container-color, var(--md-sys-color-surface-container));
        border-bottom: 1px solid var(--md-sys-color-outline-variant);
      }

      search-container md-icon {
        --md-icon-size: 20px;
        color: var(--md-sys-color-on-surface-variant);
      }

      input[search] {
        flex: 1 1 auto;
        min-width: 0;
        appearance: none;
        border: none;
        outline: none;
        background: none;
        padding: 0;
        margin: 0;

        /* md-menu sets user-select: none on its surface. */
        user-select: text;

        font-family: var(--titanium-styles-p-font-family, Roboto, Noto, sans-serif);
        font-size: 14px;
        line-height: 20px;
        color: var(--md-sys-color-on-surface);
      }

      input[search]::placeholder {
        color: var(--md-sys-color-on-surface-variant);
      }

      input[search]::-webkit-search-cancel-button {
        display: none;
      }

      div[section-header] {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 8px 16px;

        position: sticky;
        top: var(--titanium-multi-select-search-height, 52px);
        z-index: 1;

        background-color: var(--md-sys-color-surface-container-high);
        color: var(--md-sys-color-on-surface);
      }

      div[section-header] md-icon {
        --md-icon-size: 18px;
      }

      div[section-header] [headline] {
        font-size: 13px;
        font-weight: 500;
        line-height: 18px;
      }

      div[section-header] [supporting-text] {
        font-size: 12px;
        line-height: 16px;
        color: var(--md-sys-color-on-surface-variant);
      }

      div[summary],
      div[empty] {
        font-family: var(--titanium-styles-p-font-family, Roboto, Noto, sans-serif);
        font-size: 13px;
        line-height: 18px;
        padding: 12px 16px;
        color: var(--md-sys-color-on-surface-variant);
      }

      [hidden] {
        display: none !important;
      }
    `,
  ];

  /**
   *  Renders the chip of a selected item. Override to customize.
   */
  protected renderChip(item: T) {
    const icon = this.getItemIcon(item);
    return html`<titanium-chip input-chip ?disabled=${this.disabled} label=${this.getItemText(item)} @remove=${() => this.deselectItem(item)}>
      ${icon ? html`<md-icon slot="icon">${icon}</md-icon>` : nothing}
    </titanium-chip>`;
  }

  /**
   *  Renders a selectable item. Override to customize. Bind the item to the `item` property of the
   *  `md-menu-item` and keep `keep-open` so the popover stays open on selection.
   */
  protected renderSuggestion(item: T) {
    const isSelected = this.isSelected(item);
    const icon = this.getItemIcon(item);

    return html`<md-menu-item keep-open .item=${item} ?selected=${isSelected} ?disabled=${!isSelected && this.isAtMaxSelected}>
      ${icon ? html`<md-icon slot="start">${icon}</md-icon>` : nothing}
      <span slot="headline" ellipsis>${this.getItemText(item)}</span>
      ${isSelected ? html`<md-icon slot="end">check</md-icon>` : nothing}
    </md-menu-item>`;
  }

  /**
   *  Renders the header of a section. Override to customize.
   */
  protected renderSectionHeader(section: TitaniumMultiSelectSection<T>) {
    return html`<div section-header>
      ${section.icon ? html`<md-icon>${section.icon}</md-icon>` : nothing}
      <div>
        <div headline>${section.headline}</div>
        ${section.supportingText ? html`<div supporting-text>${section.supportingText}</div>` : nothing}
      </div>
    </div>`;
  }

  /**
   *  Renders content at the bottom of the popover, below the selectable items.
   */
  protected renderTrailingMenuSlot(): TemplateResult | typeof nothing {
    return nothing;
  }

  #renderSuggestions() {
    if (this.searchTerm) {
      return html`${this.isLoading || this.suggestions.length
        ? html`<div summary>Showing ${this.suggestions.length} of ${this.count} result${this.count === 1 ? '' : 's'} for '${this.searchTerm}'</div>`
        : html`<div empty>${this.noResultsText}</div>`}
      ${repeat(
        this.suggestions,
        (item) => this.getItemKey(item),
        (item) => this.renderSuggestion(item)
      )}`;
    }

    if (this.sections.length) {
      return repeat(
        this.sections,
        (section) => section.key,
        (section) =>
          html`${this.renderSectionHeader(section)}
          ${repeat(
            section.items,
            (item) => this.getItemKey(item),
            (item) => this.renderSuggestion(item)
          )}`
      );
    }

    if (!this.items.length) {
      return html`<div empty>${this.noItemsText}</div>`;
    }

    return repeat(
      this.items,
      (item) => this.getItemKey(item),
      (item) => this.renderSuggestion(item)
    );
  }

  render() {
    return html`
      <titanium-filled-input-validator
        id="field"
        role="combobox"
        aria-haspopup="listbox"
        aria-controls="menu"
        aria-expanded=${this.menuOpen ? 'true' : 'false'}
        tabindex=${this.disabled ? '-1' : '0'}
        populated
        ?has-start=${this.hasLeadingIcon}
        has-end
        ?disabled=${this.disabled}
        ?error=${this.error}
        ?required=${this.required}
        ?no-asterisk=${this.noAsterisk}
        .label=${this.label}
        .errorText=${this.errorText}
        .supportingText=${this.supportingText}
        .evaluator=${() => !this.required || this.selected.length > 0}
        @click=${() => this.toggleMenu()}
        @keydown=${this.#onFieldKeydown}
      >
        ${this.hasLeadingIcon ? html`<slot name="leading-icon" slot="start"></slot>` : nothing}
        <chips-container>
          ${this.selected.length
            ? repeat(
                this.selected,
                (item) => this.getItemKey(item),
                (item) => this.renderChip(item)
              )
            : html`<span placeholder>${this.placeholder}</span>`}
        </chips-container>
        <div slot="end" trailing>
          ${this.isLoading ? html`<md-circular-progress indeterminate></md-circular-progress>` : nothing}
          ${this.selected.length && !this.disableClearAll && !this.disabled
            ? html`<md-icon-button
                title="Clear selection"
                @click=${(e: MouseEvent) => {
                  e.preventDefault();
                  e.stopPropagation();
                  this.clear();
                  this.focus();
                }}
              >
                <md-icon>close</md-icon>
              </md-icon-button>`
            : nothing}
          <md-icon>${this.menuOpen ? 'arrow_drop_up' : 'arrow_drop_down'}</md-icon>
        </div>
      </titanium-filled-input-validator>

      <md-menu
        part="menu"
        id="menu"
        anchor="field"
        anchor-corner="end-start"
        default-focus="none"
        no-navigation-wrap
        stay-open-on-focusout
        .positioning=${this.positioning}
        style=${this.matchInputWidth && this.menuWidth ? `min-width: ${this.menuWidth}px; max-width: ${this.menuWidth}px` : ''}
        @click=${this.#onMenuClick}
        @keydown=${this.#onMenuKeydown}
        @opening=${async (e: Event) => {
          this.menuOpen = true;
          redispatchEvent(this, e);
          await this.updateComplete;

          // md-menu drives typeahead from its own keydown listener which would steal
          // keystrokes meant for the search input.
          this.searchInput?.dispatchEvent(new Event('deactivate-typeahead', { bubbles: true, composed: true }));

          // The menu surface is still growing into place; scrolling the sticky search
          // row into view here would leave the list scrolled under it.
          this.searchInput?.focus({ preventScroll: true });
        }}
        @opened=${(e: Event) => redispatchEvent(this, e)}
        @closing=${(e: Event) => {
          this.menuOpen = false;
          this.softReset();
          redispatchEvent(this, e);
        }}
        @closed=${(e: Event) => {
          this.reportValidity();
          redispatchEvent(this, e);
        }}
      >
        <search-container>
          <md-icon>search</md-icon>
          <input
            search
            id="search"
            type="search"
            autocomplete="off"
            spellcheck="false"
            aria-label=${this.searchPlaceholder}
            placeholder=${this.searchPlaceholder}
            .value=${this.searchTerm}
            @input=${(e: Event) => this.#onSearchInput((e.target as HTMLInputElement).value)}
            @keydown=${this.#onSearchKeydown}
          />
          ${this.isLoading ? html`<md-circular-progress indeterminate></md-circular-progress>` : nothing}
          ${this.searchTerm && !this.isLoading
            ? html`<md-icon-button
                title="Clear search"
                @click=${() => {
                  this.#onSearchInput('');
                  this.searchInput?.focus();
                }}
              >
                <md-icon>close</md-icon>
              </md-icon-button>`
            : nothing}
        </search-container>
        ${this.#renderSuggestions()} ${this.renderTrailingMenuSlot()}
      </md-menu>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'titanium-multi-select-base': TitaniumMultiSelectBase;
  }
}
