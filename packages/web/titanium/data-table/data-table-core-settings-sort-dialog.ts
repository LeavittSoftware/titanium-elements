import '@material/web/dialog/dialog';
import '@material/web/button/text-button';
import '@material/web/button/filled-tonal-button';
import '@material/web/icon/icon';
import '@material/web/menu/menu';
import '@material/web/menu/menu-item';

import './data-table-core-settings-sort-item';

import { LitElement, css, html } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { TitaniumDataTableCoreMetaData, TitaniumDataTableCoreSortItem } from './data-table-core';
import { dialogCloseNavigationHack, dialogOpenNavigationHack } from '../hacks/dialog-navigation-hack';
import { dialogZIndexHack } from '../hacks/dialog-zindex-hack';
import { DOMEvent } from '../types/dom-event';
import { MdDialog } from '@material/web/dialog/dialog';
import { ItemDropEvent } from './draggable-item-base';
import { repeat } from 'lit/directives/repeat.js';
import { MdIconButton } from '@material/web/iconbutton/icon-button';
import { MdMenu, CloseMenuEvent, MenuItem } from '@material/web/menu/menu';
import { niceBadgeStyles } from '../styles/nice-badge';
import { p } from '../styles/p';

export type CloseReason = 'apply' | 'cancel' | 'navigation-close';

@customElement('titanium-data-table-core-settings-sort-dialog')
export class TitaniumDataTableCoreSettingsSortDialog<T extends object> extends LitElement {
  @property({ type: Object }) accessor tableMetaData: TitaniumDataTableCoreMetaData<T> | null = null;
  @query('md-dialog') private accessor dialog: MdDialog;
  @query('md-menu') private accessor addMenu: MdMenu;

  @state() accessor sort: TitaniumDataTableCoreSortItem[] = [];
  #originalSort: TitaniumDataTableCoreSortItem[] = [];

  async show(sort: TitaniumDataTableCoreSortItem[]) {
    this.#originalSort = structuredClone(sort);
    this.sort = structuredClone(sort);

    this.dialog.returnValue = '';
    this.dialog?.show();
    return await new Promise<CloseReason>((resolve) => {
      this.#resolve = resolve;
    });
  }

  hasChanges(sortA: TitaniumDataTableCoreSortItem[], sortB: TitaniumDataTableCoreSortItem[]) {
    return JSON.stringify(sortA) !== JSON.stringify(sortB);
  }

  #repositionMenu: EventListener;
  #resolve: (value: CloseReason) => void;
  static styles = [
    p,
    niceBadgeStyles,
    css`
      :host {
        display: grid;
      }

      md-dialog {
        max-width: 450px;
        width: calc(100dvw - 24px);
      }

      main {
        display: grid;

        data-table-core-settings-sort-item {
          z-index: 0;
        }

        p[no-sort] {
          opacity: 0.8;
          text-align: center;
        }
      }

      div[slot='headline'] {
        display: grid;
        gap: 0px;

        p {
          font-size: 13px;
          line-height: 14px;
          opacity: 0.8;
        }
      }

      add-container {
        display: grid;
        position: relative;
      }

      md-menu-item {
        --md-menu-item-top-space: 6px;
        --md-menu-item-bottom-space: 6px;
        --md-menu-item-one-line-container-height: 36px;
        --md-menu-item-label-text-size: 14px;
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
        if (e.target.returnValue === 'apply' || e.target.returnValue === 'cancel' || e.target.returnValue === 'navigation-close') {
          dialogCloseNavigationHack(e.target);
          return this.#resolve(e.target.returnValue as CloseReason);
        }
        e.preventDefault();
      }}
    >
      <div slot="headline">
        <div>Advanced sort</div>
        <p>Max ${this.tableMetaData?.maxCustomSortColumns ?? 4} sort columns</p>
      </div>
      <main slot="content">
        <form
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
                    ?disable-drag=${this.sort.length === 1}
                    @sort-direction-changed=${(e) => {
                      this.sort[index].direction = e.target.sortDirection as 'asc' | 'desc';
                      this.requestUpdate('sort');
                    }}
                    @delete=${() => {
                      this.sort.splice(index, 1);
                      this.requestUpdate('sort');
                    }}
                  ></data-table-core-settings-sort-item>`
              )}
        </form>
      </main>
      <div slot="actions">
        <add-container>
          <md-text-button
            ?disabled=${this.sort.length >= (this.tableMetaData?.maxCustomSortColumns ?? 4)}
            id="menu-anchor"
            leading-icon
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
            @opened=${() => {
              this.#repositionMenu = () => this.addMenu.reposition();
              document.addEventListener('scroll', this.#repositionMenu, { passive: true });
            }}
            @closed=${() => document.removeEventListener('scroll', this.#repositionMenu)}
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
                  }}
                >
                  <md-icon slot="start">sort_by_alpha</md-icon>
                  ${column.friendlyName ?? column.key}
                </md-menu-item>`
            )}
          </md-menu>
        </add-container>
        <div>
          <md-text-button @click=${() => this.dialog?.close('cancel')}>Cancel</md-text-button>
          <md-filled-tonal-button
            ?disabled=${!this.hasChanges(this.sort, this.#originalSort)}
            @click=${() => {
              this.dialog?.close('apply');
              this.dispatchEvent(new Event('sort-changed'));
            }}
            >Apply</md-filled-tonal-button
          >
        </div>
      </div>
    </md-dialog>`;
  }
}
