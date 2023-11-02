import { html } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import Fuse from 'fuse.js';
import { TitaniumSingleSelectBase } from '../../titanium/single-select-base/single-select-base';
import { MaterialSymbols } from './material-symbols';

export type MaterialIconDatabaseEntry = { Id: number; keywords: string; icon: string };

/**
 * Titanium icon picker - a picker for material icons
 *
 * @element titanium-icon-picker
 *
 */
@customElement('titanium-icon-picker')
export class TitaniumIconPicker extends TitaniumSingleSelectBase<MaterialIconDatabaseEntry> {
  @property({ type: String }) accessor label: string = 'Icons';

  @property({ type: String }) accessor placeholder: string = 'Search for a icon';

  @property({ type: String }) accessor pathToSelectedText: string = 'icon';

  #iconDatabase: MaterialIconDatabaseEntry[];

  async firstUpdated() {
    this.#iconDatabase = MaterialSymbols.map((icon, i) => ({
      Id: i + 1,
      icon: icon,
      keywords: icon,
    }));
  }

  protected override onInputChanged(searchTerm: string) {
    const options = {
      includeScore: true,
      keys: ['keywords'],
      shouldSort: true,
      threshold: 0.3,
    };

    if (this.searchTerm) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const fuse = new Fuse(this.#iconDatabase, options as any);
      const fuseResults = fuse.search(searchTerm);
      const results = fuseResults.map((o) => o.item);
      this.count = results.length;
      this.suggestions = results.slice(0, 75);
    } else {
      this.count = 0;
      this.suggestions = this.#iconDatabase.slice(0, 50);
    }
  }

  protected override renderSelectedLeadingSlot(entity: MaterialIconDatabaseEntry) {
    return html` <md-icon slot="leading-icon">${entity.icon}</md-icon> `;
  }

  protected override renderSuggestion(entity: MaterialIconDatabaseEntry) {
    return html`<md-menu-item .item=${entity} ?selected=${this.selected?.Id === entity.Id}>
      <slot name="trailing-icon" slot="trailing-icon"></slot>
      <span slot="headline">${entity.icon}</span>
      <md-icon slot="start">${entity.icon}</md-icon>
    </md-menu-item>`;
  }
}
