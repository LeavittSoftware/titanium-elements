import '@material/web/checkbox/checkbox';
import '@material/web/icon/icon';
import '@material/web/focus/md-focus-ring';
import '@material/web/ripple/ripple';

import '@material/web/menu/menu';
import '@material/web/menu/menu-item';
import '@material/web/iconbutton/icon-button';

import './data-table-core-settings-choose-columns-dialog';
import './data-table-core-settings-sort-dialog';
import './data-table-core-reorder-dialog';

import { TitaniumDataTableCoreItemSettings, TitaniumDataTableCoreSettingsChooseColumnsDialog } from './data-table-core-settings-choose-columns-dialog';

import { css, CSSResult, CSSResultGroup, html, LitElement, nothing, PropertyValues, TemplateResult } from 'lit';
import { property, customElement, query, state } from 'lit/decorators.js';

import { DOMEvent } from '@leavittsoftware/web/titanium/types/dom-event';
import { MdCheckbox } from '@material/web/checkbox/checkbox';
import { repeat } from 'lit/directives/repeat.js';
import { a } from '@leavittsoftware/web/titanium/styles/a';
import { styleMap } from 'lit/directives/style-map.js';
import { LoadWhile } from '@leavittsoftware/web/titanium/helpers/load-while';
import { niceBadgeStyles } from '../styles/nice-badge';
import { MdIconButton } from '@material/web/iconbutton/icon-button';
import { CloseMenuEvent, MdMenu, MenuItem } from '@material/web/menu/menu';
import { TitaniumDataTableCoreSettingsSortDialog } from './data-table-core-settings-sort-dialog';
import { mkConfig, generateCsv, download } from 'export-to-csv';
import dayjs from 'dayjs/esm';
import { TitaniumDataTableCoreReorderDialog } from './data-table-core-reorder-dialog';
import { dataTableContentStyles } from './data-table-content-styles';
import { redispatchEvent } from '@material/web/internal/events/redispatch-event';

export type TitaniumDataTableCoreMetaData<T extends object> = {
  uniqueKey: (item: T) => string;
  itemLinkUrl?: (item: T) => string;
  itemClickHandler?: (item: T) => void;
  itemMetaData: TitaniumDataTableCoreItemMetaData<T>[];
  maxCustomSortColumns?: number;
  reorderConfig?: {
    sortPropertyKey: string;
    reorderItemDisplayKey: string;
  };
};

export type TitaniumDataTableCoreItemMetaData<T extends object> = {
  key: string;
  render: (item: T) => TemplateResult;
  csvValue?: (item: T) => string | number | boolean | null | undefined;
  friendlyName?: string;
  hideByDefault?: boolean;
  sortExpression?: string;
  width?: string;
  disableSort?: boolean;
  defaultSort?: TitaniumDataTableCoreDefaultSort;
};

export type TitaniumDataTableCoreDefaultSort = {
  direction: 'asc' | 'desc';
  position: number;
};

export type TitaniumDataTableCoreSortItem = {
  key: string;
  direction: 'asc' | 'desc';
};

export function generateDefaultSortFromMetaData<T extends object>(tableMetaData: TitaniumDataTableCoreMetaData<T> | null) {
  return (
    tableMetaData?.itemMetaData
      .filter((o) => o.defaultSort)
      .sort((a, b) => (a.defaultSort?.position ?? 0) - (b.defaultSort?.position ?? 0))
      .map((o) => {
        return { key: o.key, direction: o.defaultSort?.direction ?? 'asc' };
      }) ?? []
  );
}

@customElement('titanium-data-table-core')
export class TitaniumDataTableCore<T extends object> extends LoadWhile(LitElement) {
  /**
   * Current items displayed on the table.
   */
  @property({ type: Array }) accessor items: Array<T> = [];

  @property({ type: Object }) accessor tableMetaData: TitaniumDataTableCoreMetaData<T> | null = null;

  @property({ type: Object }) accessor supplementalItemStyles: CSSResult | CSSResultGroup | null = null;

  @property({ type: Boolean, reflect: true }) accessor disabled: boolean = false;

  @property({ type: Boolean, attribute: 'sticky-header', reflect: true }) accessor stickyHeader: boolean = false;

  /**
   * Limits table selection mode to single-select.  Default is multi-select.
   */
  @property({ type: String, attribute: 'selection-mode', reflect: true }) accessor selectionMode: 'single' | 'multi' | 'none' = 'none';

  /**
   * Array of currently selected data table objects
   */
  @property({ type: Array }) accessor selected: Array<T> = [];

  @query('titanium-data-table-core-settings-choose-columns-dialog') private accessor chooseColumnsDialog: TitaniumDataTableCoreSettingsChooseColumnsDialog<T>;
  @query('titanium-data-table-core-settings-sort-dialog') private accessor sortDialog: TitaniumDataTableCoreSettingsSortDialog<T>;
  @query('titanium-data-table-core-reorder-dialog') private accessor reorderDialog: TitaniumDataTableCoreReorderDialog<T>;
  /**
   * Local storage key to save user settings for this data table.
   */
  @property({ type: String, attribute: 'local-storage-key' }) accessor localStorageKey: string = 'dtc-pref';

  @state() accessor customSortApplied: boolean = false;
  @state() accessor customColumnsApplied: boolean = false;

  get sort() {
    const value = window.localStorage.getItem(`${this.localStorageKey}-user-sort`);
    if (value === null) {
      return generateDefaultSortFromMetaData(this.tableMetaData);
    }

    return (JSON.parse(value ?? '[]') as TitaniumDataTableCoreSortItem[]) || [];
  }

  @state()
  set sort(val: TitaniumDataTableCoreSortItem[]) {
    localStorage.setItem(`${this.localStorageKey}-user-sort`, JSON.stringify(val));
  }

  get userSettings() {
    return (JSON.parse(window.localStorage.getItem(`${this.localStorageKey}-user-settings`) ?? '[]') as TitaniumDataTableCoreItemSettings[]) || [];
  }

  @state()
  set userSettings(val: TitaniumDataTableCoreItemSettings[]) {
    localStorage.setItem(`${this.localStorageKey}-user-settings`, JSON.stringify(val));
  }

  updated(changedProps: PropertyValues<this>) {
    if (changedProps.has('items') && changedProps.get('items') !== this.items) {
      // Clear selection when items array changes.
      this.deselectAll();
    }

    if (changedProps.has('sort') || changedProps.has('tableMetaData')) {
      const defaultSort = generateDefaultSortFromMetaData(this.tableMetaData);
      const _customSortApplied = JSON.stringify(defaultSort) !== JSON.stringify(this.sort);
      if (this.customSortApplied !== _customSortApplied) {
        this.customSortApplied = _customSortApplied;
      }
    }
  }

  selectAll() {
    if (this.selectionMode === 'multi') {
      this.selected = this.items;
      this.#notifySelectedChanged();
    }
  }

  deselectAll() {
    if (this.selected.length > 0) {
      this.selected = [];
      this.#notifySelectedChanged();
    }
  }

  resetSort() {
    const _sort = generateDefaultSortFromMetaData(this.tableMetaData);
    if (JSON.stringify(_sort) !== JSON.stringify(this.sort)) {
      this.sort = _sort;
      this.dispatchEvent(new Event('sort-changed'));
    }
  }

  #notifySelectedChanged() {
    this.dispatchEvent(new Event('selected-changed', { composed: true }));
  }

  orderByUserPreference(itemMetaData: TitaniumDataTableCoreItemMetaData<T>[], userSettings: TitaniumDataTableCoreItemSettings[]) {
    return itemMetaData.sort((a, b) => {
      const aIndex = userSettings.findIndex((s) => s.key === a.key);
      const bIndex = userSettings.findIndex((s) => s.key === b.key);
      return aIndex - bIndex;
    });
  }

  static styles = [
    a,
    niceBadgeStyles,
    css`
      :host {
        display: grid;

        --titanium-data-table-core-background-color: var(--md-sys-color-surface-container-lowest, #1d1b20);
        background-color: var(--titanium-data-table-core-background-color);
        overflow: auto;
        z-index: 0;
      }

      table {
        border-spacing: 0;
        border-collapse: separate;

        background-color: inherit;
        align-self: start;
      }

      content-container {
        display: grid;
        height: 100%;
        box-sizing: border-box;
        background-color: var(--titanium-data-table-core-background-color);
      }

      :host([sticky-header]) {
        thead th:not([settings]) {
          position: sticky;
          top: 0;
          z-index: 3;
        }
      }

      table[has-selected-items] {
        tr {
          cursor: pointer;
        }
      }

      thead {
        tr {
          th[settings] {
            width: 48px;
            height: 48px;
            padding: 0;
            position: sticky;
            left: 0;
            top: 0;
            z-index: 4;

            content-container {
              nice-badge {
                transition: opacity 250ms ease;
              }
              md-icon-button {
                --md-icon-button-icon-size: 22px;
                --md-icon-button-state-layer-height: 32px;
                --md-icon-button-state-layer-width: 32px;
                padding: 8px;

                md-icon {
                  transition: transform 350ms ease;
                }

                nice-badge {
                  top: initial;
                  top: 2px;
                  right: 2px;
                }
              }

              md-menu[open] + md-icon-button {
                md-icon {
                  transform: rotate(120deg);
                }
                nice-badge {
                  opacity: 0;
                }
              }

              md-menu[open] md-menu-item {
                nice-badge {
                  opacity: 1;
                }
              }

              md-menu-item {
                --md-menu-item-top-space: 6px;
                --md-menu-item-bottom-space: 6px;
                --md-menu-item-one-line-container-height: 36px;
                --md-menu-item-two-line-container-height: 36px;
                --md-menu-item-label-text-size: 14px;
                text-align: left;

                [small] {
                  font-size: 12px;
                  line-height: 12px;
                  opacity: 0.8;
                }

                nice-badge {
                  top: 5px;
                  left: 35px;
                  right: initial;
                  opacity: 0;
                }
              }
            }
          }

          th {
            border-bottom: 1px var(--md-sys-color-outline-variant) solid;
            padding: 0;

            button {
              display: grid;
              grid: 'text icon blank' / auto auto 1fr;
              width: 100%;
              align-items: center;

              position: relative;
              --md-focus-ring-shape: 0;
              border-radius: 0;

              font-family: var(--titanium-data-table-font-family, Roboto, Noto, sans-serif);
              font-size: 14px;

              line-height: 28px;
              font-weight: 500;
              height: 100%;
              padding: 12px 6px 12px 6px;
              margin: 0;

              /* override default button styles */
              text-align: inherit;

              background-color: var(--md-sys-color-surface-container-lowest);
              color: inherit;

              border: none;
              outline: none;
              height: 48px;

              white-space: nowrap;

              icon-container {
                display: grid;
                position: relative;
                margin-left: 4px;
                visibility: hidden;

                height: 18px;
                width: 18px;

                div[sort-number] {
                  font-size: 8px;
                  line-height: 8px;
                  position: absolute;
                  bottom: -2px;
                  right: 0;
                }

                md-icon {
                  display: block;
                  height: 18px;
                  width: 18px;
                  font-size: 18px;

                  transform-origin: center;
                  transition: transform 150ms ease;
                }
              }
            }

            button[active-sort][sort-direction='asc'] md-icon {
              transform: rotate(-180deg);
            }

            button[active-sort] icon-container,
            button[active-sort] icon-container {
              visibility: visible;
            }

            button:not([disabled]) {
              cursor: pointer;
            }

            button:focus,
            button:active {
              outline: none;
              box-shadow: none;
            }
          }
        }
      }

      tbody {
        @-moz-document url-prefix() {
          /* hack: FF to fill 100% in a TD */
          tr {
            height: 1px !important;
          }
        }

        tr {
          @-moz-document url-prefix() {
            /* hack: FF to fill 100% in a TD */
            td {
              height: 100% !important;
            }
          }

          td {
            background-color: var(--titanium-data-table-core-background-color);

            border-bottom: 1px var(--md-sys-color-outline-variant) solid;
            padding: 0;
            box-sizing: border-box;
            /* hack: Chrome/Safari to fill 100% in a TD */
            height: 1px;

            content-container {
              font-size: 14px;
              line-height: 18px;
              font-weight: 400;
              padding: 6px 6px 6px 6px;
              align-items: center;
              margin: 0;
            }
          }

          td[checkbox] {
            width: 48px;
            position: sticky;
            left: 0;

            z-index: 1;

            content-container {
              display: grid;
              padding: 0;

              md-checkbox {
                padding: 15px;
                --md-checkbox-container-shape: 6px;
                --md-focus-ring-shape: 12px;
                --md-checkbox-state-layer-shape: 12px;
                --md-checkbox-state-layer-size: 32px;
              }

              md-checkbox::part(focus-ring) {
                height: 32px;
                width: 32px;
              }
            }
          }
        }

        tr[selected] content-container,
        tr[selected] td {
          background-color: var(--md-sys-color-secondary-container);
        }

        tr[link-url] {
          cursor: pointer;
        }
      }

      :host(:not([disabled])) tbody tr[link-url]:hover td content-container {
        background-color: rgb(from var(--md-sys-color-on-surface, #1d1b20) r g b / 0.08) !important;
      }

      td[table-message]:hover,
      td[table-message] {
        vertical-align: middle;
        border: none !important;
        opacity: 0.8;
        font-size: 14px;
        line-height: 14px;
        padding: 12px 6px;
      }

      tr:last-of-type td {
        border-bottom: none !important;
      }

      [hidden] {
        display: none !important;
      }
    `,
  ];

  render() {
    return html`
      <style>
        tbody{
          tr{
            td{
              content-container{
                ${this.supplementalItemStyles ? this.supplementalItemStyles : nothing};
                ${dataTableContentStyles ? dataTableContentStyles : nothing};
              }
            }
          }
        }
      </style>
      <table part="table" ?has-selected-items=${this.selected.length > 0}>
        <thead>
          <tr>
            <th settings>
              <content-container>
                <md-menu
                  id="menu"
                  positioning="popover"
                  anchor="menu-anchor"
                  y-offset="-10"
                  x-offset="16"
                  @close-menu=${(e: CloseMenuEvent) => {
                    (e.detail.itemPath?.[0] as MenuItem & { action?: () => void })?.action?.();
                  }}
                >
                  ${this.selectionMode !== 'none' && !(this.selectionMode === 'single' && !this.selected.length)
                    ? html` <md-menu-item
                          .action=${() => {
                            if (this.selected.length > 0) {
                              this.deselectAll();
                            } else {
                              this.selectAll();
                            }
                          }}
                        >
                          <md-icon slot="start">${this.selected.length > 0 ? 'deselect' : 'select_all'}</md-icon>
                          <div slot="headline">${this.selected.length > 0 ? 'Deselect all' : 'Select all'}</div>
                        </md-menu-item>
                        <md-divider role="separator" tabindex="-1"></md-divider>`
                    : nothing}

                  <md-menu-item .action=${() => this.chooseColumnsDialog.show()}>
                    <md-icon slot="start">table_edit</md-icon>
                    ${this.customColumnsApplied ? html`<nice-badge compact slot="start"></nice-badge>` : nothing}
                    <div slot="headline">Choose columns</div>
                  </md-menu-item>
                  <md-menu-item .action=${() => this.chooseColumnsDialog.resetColumns()} ?disabled=${!this.customColumnsApplied}>
                    <md-icon style="visibility:hidden" slot="start">reset_settings</md-icon>
                    <div slot="headline">Reset columns</div>
                  </md-menu-item>
                  <md-divider role="separator" tabindex="-1"></md-divider>

                  <md-menu-item
                    .action=${async () => {
                      const result = await this.sortDialog.show(this.sort);
                      if (result === 'apply') {
                        this.sort = structuredClone(this.sortDialog.sort);
                        this.dispatchEvent(new Event('sort-changed'));
                      }
                    }}
                  >
                    <md-icon slot="start">sort_by_alpha</md-icon>
                    ${this.customSortApplied ? html`<nice-badge compact slot="start"></nice-badge>` : nothing}
                    <div slot="headline">Customize sort</div>
                  </md-menu-item>
                  <md-menu-item .action=${() => this.resetSort()} ?disabled=${!this.customSortApplied}>
                    <md-icon style="visibility:hidden" slot="start">reset_settings</md-icon>
                    <div slot="headline">Reset sort</div>
                  </md-menu-item>

                  ${this.tableMetaData?.reorderConfig?.reorderItemDisplayKey && this.tableMetaData?.reorderConfig?.sortPropertyKey
                    ? html` <md-divider role="separator" tabindex="-1"></md-divider>
                        <md-menu-item
                          .action=${async () => {
                            const result = await this.reorderDialog.show(this.items);
                            if (result === 'apply') {
                              structuredClone(this.reorderDialog.items);
                              this.dispatchEvent(new CustomEvent<Array<T>>('items-reordered', { detail: this.items }));
                            }
                          }}
                        >
                          <md-icon slot="start">drag_handle</md-icon>
                          <div slot="headline">Reorder items</div>
                        </md-menu-item>`
                    : nothing}

                  <md-divider role="separator" tabindex="-1"></md-divider>
                  <md-menu-item
                    .action=${() => {
                      const fileFriendlyTimestamp = dayjs().format('YYYY-MM-DD HH-mm-ss');
                      const csvConfig = mkConfig({ filename: `web export ${fileFriendlyTimestamp}`, useKeysAsHeaders: true });
                      const currentlyShownColumnMetaData =
                        this.orderByUserPreference(
                          this.tableMetaData?.itemMetaData?.filter(
                            (o) =>
                              (!o.hideByDefault && this.userSettings.find((s) => s.key === o.key)?.show) || this.userSettings.find((s) => s.key === o.key)?.show
                          ) ?? [],
                          this.userSettings
                        ) ?? [];
                      const items =
                        this.items.map((item) => {
                          const itemData = {};
                          for (const metaData of currentlyShownColumnMetaData) {
                            itemData[metaData.key] = metaData.csvValue ? metaData.csvValue(item) : item[metaData.key];
                          }
                          return itemData;
                        }) ?? [];

                      const csv = generateCsv(csvConfig)(items);
                      download(csvConfig)(csv);
                    }}
                  >
                    <md-icon slot="start">file_save</md-icon>
                    <div slot="headline">Save to CSV</div>
                    <span small slot="supporting-text">${this.items.length} rows</span>
                  </md-menu-item>
                  <slot name="settings-menu-items"></slot>
                </md-menu>
                <md-icon-button
                  id="menu-anchor"
                  ?disabled=${this.isLoading}
                  @click=${(e: DOMEvent<MdIconButton>) => {
                    e.preventDefault();
                    const root = (e.target as HTMLElement).getRootNode() as ShadowRoot;
                    const menu = root.querySelector('#menu') as MdMenu;
                    menu.open = !menu.open;
                  }}
                >
                  <md-icon>settings</md-icon>
                  ${this.customSortApplied || this.customColumnsApplied ? html`<nice-badge compact></nice-badge>` : nothing}
                </md-icon-button>
              </content-container>
            </th>
            ${repeat(
              this.orderByUserPreference(
                this.tableMetaData?.itemMetaData?.filter(
                  (o) => (!o.hideByDefault && this.userSettings.find((s) => s.key === o.key)?.show) || this.userSettings.find((s) => s.key === o.key)?.show
                ) ?? [],
                this.userSettings
              ) ?? [],
              (metaData) => metaData.key,
              (metaData) => {
                const sortSpecification = this.sort.find((s) => s.key === metaData.key);
                const sortIndex = this.sort.findIndex((s) => s.key === metaData.key);
                const width = this.tableMetaData?.itemMetaData?.find((o) => o.key === metaData.key)?.width;

                return html`<th style=${width ? styleMap({ minWidth: width }) : nothing}>
                  <button
                    ?active-sort=${sortIndex !== -1}
                    sort-direction=${sortSpecification?.direction || nothing}
                    ?disabled=${this.disabled || metaData.disableSort}
                    @click=${() => {
                      this.sort = [{ key: metaData.key, direction: this.sort?.[0]?.direction === 'asc' ? 'desc' : 'asc' }];
                      this.dispatchEvent(new Event('sort-changed'));
                    }}
                  >
                    <span>${metaData.friendlyName ?? metaData.key ?? '-'}</span>
                    <icon-container
                      ><md-icon>arrow_downward</md-icon>
                      ${sortIndex !== -1 && this.sort.length > 1 ? html`<div sort-number>${sortIndex + 1}</div>` : nothing}
                    </icon-container>
                    <md-ripple ?disabled=${this.disabled || metaData.disableSort}></md-ripple>
                    <md-focus-ring inward></md-focus-ring>
                  </button>
                </th>`;
              }
            )}
          </tr>
        </thead>
        <tbody>
          ${!this.isLoading && this.items.length === 0
            ? html`
                <tr>
                  <td table-message></td>
                  <td table-message colspan=${this.tableMetaData?.itemMetaData?.length ?? 0}>No results</td>
                </tr>
              `
            : nothing}
          ${repeat(
            this.items ?? [],
            (item) => this.tableMetaData?.uniqueKey(item) ?? '',
            (item) => {
              return html`
                <tr
                  ?link-url=${this.tableMetaData?.itemLinkUrl || this.tableMetaData?.itemClickHandler}
                  ?selected=${this.selected.includes(item)}
                  @click=${() => {
                    if (this.selected.length === 0) {
                      if (this.tableMetaData?.itemClickHandler) {
                        this.tableMetaData.itemClickHandler(item);
                      } else if (this.tableMetaData?.itemLinkUrl) {
                        this.dispatchEvent(
                          new CustomEvent<{ path: string }>('change-route', {
                            bubbles: true,
                            composed: true,
                            detail: { path: this.tableMetaData?.itemLinkUrl?.(item) ?? '' },
                          })
                        );
                      }
                    } else if (this.selectionMode === 'single') {
                      this.selected = [item];
                      this.requestUpdate('selected');
                      this.#notifySelectedChanged();
                    } else if (this.selectionMode === 'multi') {
                      if (this.selected.includes(item)) {
                        this.selected.splice(this.selected.indexOf(item), 1);
                      } else {
                        this.selected.push(item);
                      }
                      this.requestUpdate('selected');
                      this.#notifySelectedChanged();
                    }
                  }}
                >
                  <td checkbox>
                    <content-container>
                      ${this.selectionMode !== 'none'
                        ? html`
                            <md-checkbox
                              @click=${(e: DOMEvent<MdCheckbox>) => e.stopPropagation()}
                              ?checked=${this.selected.includes(item)}
                              @change=${() => {
                                if (this.selected.includes(item)) {
                                  this.selected.splice(this.selected.indexOf(item), 1);
                                } else if (this.selectionMode === 'single') {
                                  this.selected = [item];
                                } else {
                                  this.selected.push(item);
                                }
                                this.requestUpdate('selected');
                                this.#notifySelectedChanged();
                              }}
                              ?disabled=${this.disabled}
                            ></md-checkbox>
                          `
                        : nothing}
                    </content-container>
                  </td>
                  ${repeat(
                    this.orderByUserPreference(
                      this.tableMetaData?.itemMetaData?.filter(
                        (o) =>
                          (!o.hideByDefault && this.userSettings.find((s) => s.key === o.key)?.show) || this.userSettings.find((s) => s.key === o.key)?.show
                      ) ?? [],
                      this.userSettings
                    )?.map((o) => o.key) ?? [],
                    (key) => key,
                    (key) => {
                      return html`<td>
                        <content-container>${this.tableMetaData?.itemMetaData?.find((o) => o.key === key)?.render(item) ?? '-'}</content-container>
                      </td>`;
                    }
                  )}
                </tr>
              `;
            }
          )}
        </tbody>
      </table>
      <titanium-data-table-core-reorder-dialog
        .tableMetaData=${this.tableMetaData}
        .items=${this.items}
        .supplementalItemStyles=${this.supplementalItemStyles}
        @reorder-save-request=${(e: CustomEvent<{ resolve: () => void; reject: (reason: any) => void; items: Array<T> }>) => redispatchEvent(this, e)}
      ></titanium-data-table-core-reorder-dialog>
      <titanium-data-table-core-settings-sort-dialog .tableMetaData=${this.tableMetaData}></titanium-data-table-core-settings-sort-dialog>
      <titanium-data-table-core-settings-choose-columns-dialog
        .tableMetaData=${this.tableMetaData}
        .userSettings=${this.userSettings}
        @custom-columns-applied-change=${(e: DOMEvent<TitaniumDataTableCoreSettingsChooseColumnsDialog<T>>) =>
          (this.customColumnsApplied = e.target.customColumnsApplied)}
        @setting-change=${(e: DOMEvent<TitaniumDataTableCoreSettingsChooseColumnsDialog<T>>) => (this.userSettings = structuredClone(e.target.userSettings))}
      ></titanium-data-table-core-settings-choose-columns-dialog>
    `;
  }
}

export class DataTableItemsReorderedEvent extends Event {
  static eventType = 'titanium-data-table-items-reorder';
  constructor() {
    super(DataTableItemsReorderedEvent.eventType);
  }
}
