import { PropertyValues, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import Fuse from 'fuse.js';
import { TitaniumSingleSelectBase } from '../../titanium/single-select-base/single-select-base';
import { MaterialSymbols } from './material-symbols';
import { Debouncer } from '../helpers/debouncer';

export type MaterialIconDatabaseEntry = { Id: number; keywords: string; icon: string; favorite?: boolean };

/**
 * Titanium icon picker - a picker for material icons
 *
 * @element titanium-icon-picker
 *
 */
@customElement('titanium-icon-picker')
export class TitaniumIconPicker extends TitaniumSingleSelectBase<MaterialIconDatabaseEntry> {
  @property({ type: String }) accessor label: string = 'Icons';
  @property({ type: String }) accessor placeholder: string = 'Search for an icon';
  @property({ type: String }) accessor pathToSelectedText: string = 'icon';

  /**
   * Optional:  A string list of icons names that are presented at the top of the suggestion list.
   */
  @property({ type: String }) accessor favorites: string | undefined;

  /**
   * Optional: A string list of icons names to make available to user.  If non provided, all icons will be available
   */
  @property({ type: String }) accessor whitelist: string | undefined;

  @property({ reflect: true, type: String }) accessor autocomplete: string = 'off';

  @property({ reflect: true, type: Boolean }) accessor spellcheck: boolean = false;

  #iconDatabase: MaterialIconDatabaseEntry[] = [];

  async firstUpdated() {
    this.#iconDatabase = this.#generateDatabase();
    this.defaultSuggestions = this.#generateSuggestions();
  }

  update(changed: PropertyValues<this>) {
    if (changed.has('favorites') || changed.has('whitelist')) {
      this.#iconDatabase = this.#generateDatabase();
      this.defaultSuggestions = this.#generateSuggestions();
    }

    super.update(changed);
  }

  #generateDatabase() {
    const whitelist = this.whitelist?.split(',');

    const favoriteIcons = this.favorites?.split(',');
    return MaterialSymbols.filter((icon) => whitelist?.some((w) => icon === w) ?? true)
      .map((icon, i) => ({
        Id: i + 1,
        icon: icon,
        keywords: icon,
        favorite: favoriteIcons?.some((o) => o === icon),
      }))
      .sort((a, b) => (b.favorite ? 1 : 0) - (a.favorite ? 1 : 0) || a.icon.localeCompare(b.icon));
  }

  #generateSuggestions() {
    return this.#iconDatabase?.slice(0, 50);
  }

  #doSearchDebouncer = new Debouncer((searchTerm: string) => this.#doSearch(searchTerm));
  #abortController: AbortController = new AbortController();

  async #doSearch(searchTerm: string) {
    this.#abortController.abort();
    this.#abortController = new AbortController();

    const options = {
      includeScore: true,
      keys: ['keywords'],
      shouldSort: true,
      threshold: 0.3,
    };

    if (this.searchTerm) {
      const fuse = new Fuse(this.#iconDatabase, options as any);
      const fuseResults = fuse.search(searchTerm);
      const results = fuseResults.map((o) => o.item);
      this.showSuggestions(results.slice(0, 75), results.length);
    }
  }

  protected override onInputChanged(searchTerm: string) {
    this.#doSearchDebouncer.debounce(searchTerm);
  }

  protected override renderSelectedLeadingInputSlot(entity: MaterialIconDatabaseEntry) {
    return html` <md-icon slot="leading-icon">${entity.icon}</md-icon> `;
  }

  static styles = [
    ...TitaniumSingleSelectBase.styles,
    css`
      md-menu-item[inert] {
        --md-menu-item-bottom-space: 4px;
        --md-menu-item-top-space: 4px;
        --md-menu-item-two-line-container-height: 50px;
        background-color: var(--md-sys-color-surface-container-high);
        --md-menu-item-supporting-text-size: 12px;
      }
    `,
  ];

  protected override renderSuggestion(entity: MaterialIconDatabaseEntry) {
    const favorites = this.defaultSuggestions.filter((o) => o.favorite);
    const nonFavorites = this.defaultSuggestions.filter((o) => !o.favorite);
    return html`
      ${!this.searchTerm && favorites?.length && favorites.at(0) === entity
        ? html`<md-menu-item inert>
            <md-icon slot="end">favorite</md-icon>
            <div slot="headline">Favorite icon${favorites.length === 1 ? '' : 's'}</div>
            <div slot="supporting-text">${favorites.length} most commonly used icon${favorites.length === 1 ? '' : 's'}</div>
          </md-menu-item>`
        : ''}
      ${!this.searchTerm && nonFavorites.at(0) === entity
        ? html`
            <md-menu-item inert>
              <md-icon slot="end">sort_by_alpha</md-icon>
              <div slot="headline">All icons</div>
              <div slot="supporting-text">Showing ${nonFavorites.length} of ${this.#iconDatabase.length - favorites.length}</div>
            </md-menu-item>
          `
        : ''}

      <md-menu-item .item=${entity} ?selected=${this.selected?.Id === entity.Id}>
        <slot name="trailing-icon" slot="trailing-icon"></slot>
        <span slot="headline">${entity.icon}</span>
        <md-icon slot="start">${entity.icon}</md-icon>
      </md-menu-item>
    `;
  }
}
