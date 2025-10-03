import '@material/web/dialog/dialog';
import '@material/web/button/text-button';
import '@material/web/tabs/tabs';
import '@material/web/tabs/primary-tab';
import '@material/web/button/filled-tonal-button';
import '@material/web/icon/icon';
import '@material/web/menu/menu';
import '@material/web/menu/menu-item';

import './data-table-core-settings-item';
import './data-table-core-settings-sort-item';

import { LitElement, PropertyValues, css, html, nothing } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { generateDefaultSortFromMetaData, TitaniumDataTableCoreMetaData, TitaniumDataTableCoreSortItem } from './data-table-core';
import { dialogCloseNavigationHack, dialogOpenNavigationHack } from '../hacks/dialog-navigation-hack';
import { dialogZIndexHack } from '../hacks/dialog-zindex-hack';
import { DOMEvent } from '../types/dom-event';
import { MdDialog } from '@material/web/dialog/dialog';
import { ItemDropEvent } from './draggable-item-base';
import { repeat } from 'lit/directives/repeat.js';
import { TitaniumDataTableCoreSettingsItem } from './data-table-core-settings-item';
import { MdIconButton } from '@material/web/iconbutton/icon-button';
import { MdMenu, CloseMenuEvent, MenuItem } from '@material/web/menu/menu';
import { niceBadgeStyles } from '../styles/nice-badge';
import { LoadWhile } from '../helpers/load-while';

export type TitaniumDataTableCoreItemSettings = {
  key: string;
  show: boolean;
};

@customElement('titanium-data-table-core-settings-dialog')
export class TitaniumDataTableCoreSettingsDialog<T extends object> extends LoadWhile(LitElement) {
  @property({ type: Object }) accessor tableMetaData: TitaniumDataTableCoreMetaData<T> | null = null;
  @property({ type: Array }) accessor userSettings: TitaniumDataTableCoreItemSettings[] = [];
  @property({ type: Array }) accessor sort: TitaniumDataTableCoreSortItem[] = [];

  @state() private accessor viewMode: 'Customize' | 'Sort' = 'Customize';

  @state() accessor customSortApplied: boolean = false;
  @state() accessor customColumnsApplied: boolean = false;

  @query('md-dialog') private accessor dialog: MdDialog;

  updated(changedProperties: PropertyValues) {
    if (changedProperties.has('tableMetaData')) {
      //make sure all keys in tableMetaData.itemMetaData are in userSettings
      if (this.tableMetaData?.itemMetaData.some((item) => !this.userSettings.some((setting) => setting.key === item.key))) {
        this.#resetUserSettings();
      }
      //check if columns have been removed
      if (this.tableMetaData?.itemMetaData.length !== this.userSettings.length) {
        this.#resetUserSettings();
      }
    }

    if (changedProperties.has('sort') || changedProperties.has('tableMetaData')) {
      const defaultSort = generateDefaultSortFromMetaData(this.tableMetaData);
      const _customSortApplied = JSON.stringify(defaultSort) !== JSON.stringify(this.sort);
      if (this.customSortApplied !== _customSortApplied) {
        this.customSortApplied = _customSortApplied;
        this.dispatchEvent(new Event('custom-sort-applied-change'));
      }
    }

    if (changedProperties.has('userSettings') || changedProperties.has('tableMetaData')) {
      const _customColumnsApplied = this.#getNumberOfCustomSettingsApplied(this.userSettings, this.tableMetaData) > 0;
      if (this.customColumnsApplied !== _customColumnsApplied) {
        this.customColumnsApplied = _customColumnsApplied;
        this.dispatchEvent(new Event('custom-columns-applied-change'));
      }
    }
  }

  #getNumberOfCustomSettingsApplied(userSettings: TitaniumDataTableCoreItemSettings[], tableMetaData: TitaniumDataTableCoreMetaData<T> | null) {
    let settingsCount = 0;
    for (const metaData of tableMetaData?.itemMetaData ?? []) {
      const setting = userSettings.find((setting) => setting.key === metaData.key);

      if (setting?.show && metaData.hideByDefault) {
        settingsCount++;
      }

      if (!setting?.show && !metaData.hideByDefault) {
        settingsCount++;
      }
    }

    //check if items are re-ordered by index, if so count as one change
    if (
      userSettings.some((setting, index) => setting.key !== tableMetaData?.itemMetaData[index].key) ||
      tableMetaData?.itemMetaData.some((metaData, index) => metaData.key !== userSettings[index].key)
    ) {
      settingsCount++;
    }

    return settingsCount;
  }

  #resetUserSettings() {
    const _userSettings = this.tableMetaData?.itemMetaData.map((item) => ({ key: item.key, show: !item.hideByDefault })) ?? [];
    if (JSON.stringify(_userSettings) !== JSON.stringify(this.userSettings)) {
      this.userSettings = _userSettings;
      this.dispatchEvent(new Event('setting-change'));
    }
  }

  #resetSort() {
    const _sort = generateDefaultSortFromMetaData(this.tableMetaData);
    if (JSON.stringify(_sort) !== JSON.stringify(this.sort)) {
      this.sort = _sort;
      this.dispatchEvent(new Event('sort-changed'));
    }
  }

  async show() {
    this.dialog.returnValue = '';
    this.dialog?.show();
    return await new Promise<'done'>((resolve) => {
      this.#resolve = resolve;
    });
  }

  #resolve: (value: 'done') => void;
  static styles = [
    niceBadgeStyles,
    css`
      :host {
        display: grid;
      }

      md-dialog {
        max-width: 450px;
        width: calc(100vw - 24px);

        min-height: 400px;
      }

      md-tabs {
        --md-primary-tab-container-color: var(--md-sys-color-surface-container-high);
        --md-primary-tab-with-icon-and-label-text-container-height: 80px;
        --md-primary-tab-icon-size: 32px;
        padding: 0;
        gap: 0;

        md-primary-tab:first-of-type {
          --md-primary-tab-container-shape-start-start: 32px;
          --md-focus-ring-shape-start-start: 32px;
        }

        md-primary-tab:last-of-type {
          --md-primary-tab-container-shape-start-end: 32px;
          --md-focus-ring-shape-start-end: 32px;
        }
      }

      md-primary-tab div[slot='icon'] {
        position: relative;
        nice-badge {
          position: absolute;
          top: -4px;
          right: -10px;
        }
      }

      main {
        display: grid;
        padding: 4px 16px 8px 16px;

        p[no-sort] {
          opacity: 0.8;
          text-align: center;
        }

        add-container {
          margin-top: 16px;
          display: grid;
          justify-self: center;
        }
      }

      div[slot='actions'] {
        display: flex;
        justify-content: space-between;
        gap: 8px;
      }
    `,
  ];

  render() {
    const columnsNotInSort = this.tableMetaData?.itemMetaData.filter((item) => !item.disableSort && !this.sort.some((sort) => sort.key === item.key)) ?? [];
    return html` <md-dialog
      @open=${(e: DOMEvent<MdDialog>) => {
        dialogOpenNavigationHack(e.target);
        dialogZIndexHack(e.target);
      }}
      @close=${(e: DOMEvent<MdDialog>) => {
        if (e.target.returnValue === 'done' || e.target.returnValue === 'navigation-close') {
          dialogCloseNavigationHack(e.target);
          return this.#resolve(e.target.returnValue as 'done');
        }
        e.preventDefault();
      }}
    >
      <md-tabs slot="headline" @change=${(e) => e.target.activeTab?.onActivate?.()}>
        <md-primary-tab ?disabled=${this.isLoading} .onActivate=${() => (this.viewMode = 'Customize')}>
          <div slot="icon">
            ${this.customColumnsApplied ? html`<nice-badge green>1</nice-badge>` : nothing}
            <md-icon>tune</md-icon>
          </div>
          Customize columns
        </md-primary-tab>
        <md-primary-tab ?disabled=${this.isLoading} .onActivate=${() => (this.viewMode = 'Sort')}>
          <div slot="icon">
            ${this.customSortApplied ? html`<nice-badge green>1</nice-badge>` : nothing}
            <md-icon>edit_arrow_down</md-icon>
          </div>
          <div>Advanced Sort</div>
        </md-primary-tab>
      </md-tabs>
      <main slot="content">
        ${this.viewMode === 'Customize'
          ? html` <form
              @item-drop=${(e: ItemDropEvent) => {
                e.stopPropagation();
                const items = this.userSettings ?? [];
                //HoverIndex cannot be dropped beyond the length of the array
                const hoverIndex = Math.min(e.hoverIndex, items.length - 1);

                //Ignore if item goes back to where it started
                if (hoverIndex !== e.originIndex) {
                  const temp = items[e.originIndex];
                  items.splice(e.originIndex, 1);
                  items.splice(hoverIndex, 0, temp);
                }

                this.requestUpdate('userSettings');
                this.dispatchEvent(new Event('setting-change'));
              }}
            >
              ${repeat(
                this.userSettings,
                (setting) => setting.key,
                (setting, index) => html`
                  <data-table-core-settings-item
                    .index=${index}
                    .name=${this.tableMetaData?.itemMetaData.find((item) => item.key === setting.key)?.friendlyName ?? setting.key}
                    .selected=${setting.show}
                    ?disabled=${setting.show && this.userSettings.filter((s) => s.show).length === 1}
                    ?disable-drag=${this.userSettings.length === 1}
                    @changed=${(e: DOMEvent<TitaniumDataTableCoreSettingsItem>) => {
                      setting.show = e.target.selected;
                      this.requestUpdate('userSettings');
                      this.dispatchEvent(new Event('setting-change'));
                    }}
                  ></data-table-core-settings-item>
                `
              )}
            </form>`
          : html`<form
                @item-drop=${(e: ItemDropEvent) => {
                  e.stopPropagation();
                  const items = this.sort ?? [];
                  //HoverIndex cannot be dropped beyond the length of the array
                  const hoverIndex = Math.min(e.hoverIndex, items.length - 1);

                  //Ignore if item goes back to where it started
                  if (hoverIndex !== e.originIndex) {
                    const temp = items[e.originIndex];
                    items.splice(e.originIndex, 1);
                    items.splice(hoverIndex, 0, temp);
                  }

                  this.requestUpdate('sort');
                  this.dispatchEvent(new Event('sort-changed'));
                }}
              >
                ${!this.sort.length
                  ? html`<p no-sort>No sort columns</p>`
                  : repeat(
                      //sort by sort order in this.sort
                      this.sort,
                      (sort) => sort.key,
                      (sort, index) =>
                        html`<data-table-core-settings-sort-item
                          .index=${index}
                          .name=${this.tableMetaData?.itemMetaData.find((item) => item.key === sort.key)?.friendlyName ?? sort.key}
                          sort-direction=${sort.direction}
                          ?disabled=${this.isLoading}
                          ?disable-drag=${this.isLoading || this.sort.length === 1}
                          @sort-direction-changed=${(e) => {
                            this.sort[index].direction = e.target.sortDirection as 'asc' | 'desc';
                            this.requestUpdate('sort');
                            this.dispatchEvent(new Event('sort-changed'));
                          }}
                          @delete=${() => {
                            this.sort.splice(index, 1);
                            this.requestUpdate('sort');
                            this.dispatchEvent(new Event('sort-changed'));
                          }}
                        ></data-table-core-settings-sort-item>`
                    )}
              </form>
              ${columnsNotInSort.length !== 0
                ? html` <add-container>
                    <md-text-button
                      id="menu-anchor"
                      aria-haspopup="true"
                      aria-controls="menu"
                      aria-expanded="false"
                      trailing-icon
                      ?disabled=${this.isLoading}
                      @click=${(e: DOMEvent<MdIconButton>) => {
                        e.preventDefault();
                        const root = (e.target as HTMLElement).getRootNode() as ShadowRoot;
                        const menu = root.querySelector('#menu') as MdMenu;
                        menu.open = !menu.open;
                      }}
                    >
                      <span>Add sort column</span>
                      <md-icon slot="icon">add</md-icon>
                    </md-text-button>

                    <md-menu
                      id="menu"
                      anchor="menu-anchor"
                      positioning="popover"
                      @close-menu=${(e: CloseMenuEvent) => {
                        (e.detail.itemPath?.[0] as MenuItem & { action?: () => void })?.action?.();
                      }}
                    >
                      ${repeat(
                        columnsNotInSort,
                        (column) => column.key,
                        (column) =>
                          html`<md-menu-item
                            .action=${() => {
                              this.sort.push({ key: column.key, direction: 'asc' });
                              this.requestUpdate('sort');
                              this.dispatchEvent(new Event('sort-changed'));
                            }}
                          >
                            <md-icon slot="start">sort_by_alpha</md-icon>
                            ${column.friendlyName}
                          </md-menu-item>`
                      )}
                    </md-menu>
                  </add-container>`
                : nothing} `}
      </main>
      <div slot="actions">
        <md-text-button
          ?disabled=${this.isLoading || this.viewMode === 'Customize' ? !this.customColumnsApplied : !this.customSortApplied}
          @click=${() => (this.viewMode === 'Customize' ? this.#resetUserSettings() : this.#resetSort())}
          >Restore to defaults</md-text-button
        >

        <md-filled-tonal-button ?disabled=${this.isLoading} @click=${() => this.dialog?.close('done')}>Done</md-filled-tonal-button>
      </div>
    </md-dialog>`;
  }
}
