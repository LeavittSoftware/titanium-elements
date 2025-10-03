import '@material/web/checkbox/checkbox';
import '@material/web/icon/icon';
import '@material/web/focus/md-focus-ring';
import '@material/web/ripple/ripple';
import './data-table-core-settings-dialog';
import { TitaniumDataTableCoreItemSettings, TitaniumDataTableCoreSettingsDialog } from './data-table-core-settings-dialog';

import { css, CSSResult, CSSResultGroup, html, LitElement, nothing, PropertyValues, TemplateResult } from 'lit';
import { property, customElement, query, state } from 'lit/decorators.js';

import { DOMEvent } from '@leavittsoftware/web/titanium/types/dom-event';
import { MdCheckbox } from '@material/web/checkbox/checkbox';
import { repeat } from 'lit/directives/repeat.js';
import { a } from '@leavittsoftware/web/titanium/styles/a';
import { styleMap } from 'lit/directives/style-map.js';
import { LoadWhile } from '@leavittsoftware/web/titanium/helpers/load-while';

export type TitaniumDataTableCoreMetaData<T extends object> = {
  uniqueKey: (item: T) => string;
  itemLinkUrl?: (item: T) => string;
  itemMetaData: TitaniumDataTableCoreItemMetaData<T>[];
};

export type TitaniumDataTableCoreItemMetaData<T extends object> = {
  key: string;
  render: (item: T) => TemplateResult;
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

  @property({ type: Object }) accessor tableStyles: CSSResult | CSSResultGroup | null = null;

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

  @query('titanium-data-table-core-settings-dialog') private accessor settingsDialog: TitaniumDataTableCoreSettingsDialog<T>;

  @property({ type: Number }) accessor countOfCustomSettingsApplied: number = 0;

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

  showSettingsDialog() {
    this.settingsDialog.show();
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

      :host([selection-mode='none']) table {
        thead {
          button {
            padding-left: 16px;
          }
        }

        tbody {
          tr {
            td:first-of-type {
              content-container {
                padding-left: 16px;
              }
            }
          }
        }
      }

      content-container {
        display: grid;
        height: 100%;
        box-sizing: border-box;
        background-color: var(--titanium-data-table-core-background-color);
      }

      :host([sticky-header]) {
        thead th:not([checkbox]) {
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
          th[checkbox] {
            width: 48px;
            height: 48px;
            padding: 0;
            position: sticky;
            left: 0;
            top: 0;
            z-index: 4;

            content-container {
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

              background-color: var(--titanium-data-table-core-background-color);
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
            content-container {
              padding: 0;

              display: grid;
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

      :host(:not([disabled])) tbody tr:hover td content-container {
        background-color: rgb(from var(--md-sys-color-on-surface, #1d1b20) r g b / 0.08);
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

      image-row {
        display: flex;
        align-items: center;
        gap: 12px;

        img {
          height: 32px;
          width: 32px;
          image-rendering: -webkit-optimize-contrast;
        }

        [supporting-text] {
          font-size: 12px;
          line-height: 14px;
          opacity: 0.8;
        }
      }

      [hidden] {
        display: none !important;
      }
    `,
  ];

  render() {
    return html`
      <style>
        ${this.tableStyles ? this.tableStyles : nothing}
      </style>
      <table part="table" ?has-selected-items=${this.selected.length > 0}>
        <thead>
          <tr>
            ${this.selectionMode !== 'none'
              ? html`
                  <th checkbox>
                    <content-container>
                      ${this.selectionMode === 'multi'
                        ? html` <md-checkbox
                            title="${this.selected.length > 0 ? 'Deselect' : 'Select'} all"
                            ?checked=${this.selected.length > 0}
                            ?indeterminate=${this.selected.length !== 0 && this.selected.length !== this.items.length}
                            ?disabled=${this.items.length === 0}
                            @click=${(e: DOMEvent<MdCheckbox>) => {
                              if (this.selected.length > 0) {
                                this.deselectAll();
                              } else {
                                this.selectAll();
                              }
                              e.target?.focus();
                            }}
                          ></md-checkbox>`
                        : nothing}
                    </content-container>
                  </th>
                `
              : nothing}
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
                    <span>${metaData.friendlyName ?? '-'}</span>
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
                  ${this.selectionMode !== 'none' ? html`<td table-message></td>` : nothing}
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
                  ?link-url=${!!this.tableMetaData?.itemLinkUrl?.(item)}
                  ?selected=${this.selected.includes(item)}
                  @click=${() => {
                    if (this.selected.length === 0) {
                      if (this.tableMetaData?.itemLinkUrl) {
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
                  ${this.selectionMode !== 'none'
                    ? html`<td checkbox>
                        <content-container>
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
                        </content-container>
                      </td>`
                    : nothing}
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
      <titanium-data-table-core-settings-dialog
        ?isLoading=${this.isLoading}
        .tableMetaData=${this.tableMetaData}
        .userSettings=${this.userSettings}
        @custom-sort-applied-change=${(e: DOMEvent<TitaniumDataTableCoreSettingsDialog<T>>) => {
          this.customSortApplied = e.target.customSortApplied;
          this.dispatchEvent(new Event('custom-sort-applied-change'));
        }}
        @custom-columns-applied-change=${(e: DOMEvent<TitaniumDataTableCoreSettingsDialog<T>>) => {
          this.customColumnsApplied = e.target.customColumnsApplied;
          this.dispatchEvent(new Event('custom-columns-applied-change'));
        }}
        .sort=${this.sort}
        @sort-changed=${(e: DOMEvent<TitaniumDataTableCoreSettingsDialog<T>>) => {
          this.sort = structuredClone(e.target.sort);
          this.dispatchEvent(new Event('sort-changed'));
        }}
        @setting-change=${(e: DOMEvent<TitaniumDataTableCoreSettingsDialog<T>>) => (this.userSettings = structuredClone(e.target.userSettings))}
      ></titanium-data-table-core-settings-dialog>
    `;
  }
}

export class DataTableItemsReorderedEvent extends Event {
  static eventType = 'titanium-data-table-items-reorder';
  constructor() {
    super(DataTableItemsReorderedEvent.eventType);
  }
}
