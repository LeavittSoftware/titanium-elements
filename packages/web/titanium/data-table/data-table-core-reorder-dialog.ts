import '@material/web/dialog/dialog';
import '@material/web/button/filled-tonal-button';
import '@material/web/button/text-button';
import '@material/web/icon/icon';
import '@leavittsoftware/web/titanium/snackbar/snackbar-stack';

import '@material/web/progress/circular-progress';

import './data-table-core-reorder-item';

import { CSSResult, CSSResultGroup, LitElement, css, html } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { TitaniumDataTableCoreMetaData } from './data-table-core';
import { dialogCloseNavigationHack, dialogOpenNavigationHack } from '../hacks/dialog-navigation-hack';
import { dialogZIndexHack } from '../hacks/dialog-zindex-hack';
import { DOMEvent } from '../types/dom-event';
import { MdDialog } from '@material/web/dialog/dialog';
import { ItemDropEvent } from './draggable-item-base';
import { repeat } from 'lit/directives/repeat.js';
import { LoadWhile } from '../helpers/load-while';
import { ShowSnackbarEvent } from '../snackbar/show-snackbar-event';
import { SnackbarStack } from '@leavittsoftware/web/titanium/snackbar/snackbar-stack';

export type CloseReason = 'apply' | 'cancel';

@customElement('titanium-data-table-core-reorder-dialog')
export class TitaniumDataTableCoreReorderDialog<T extends object> extends LoadWhile(LitElement) {
  @property({ type: Object }) accessor tableMetaData: TitaniumDataTableCoreMetaData<T> | null = null;
  @property({ type: Object }) accessor supplementalItemStyles: CSSResult | CSSResultGroup | null = null;

  @query('md-dialog') private accessor dialog: MdDialog;
  @query('titanium-snackbar-stack') private accessor snackbar!: SnackbarStack;

  @state() accessor items: Array<T> = [];
  #originalItems: Array<T> = [];

  async show(items: Array<T>) {
    const _items = structuredClone(items);

    const sortPropertyKey = this.tableMetaData?.reorderConfig?.sortPropertyKey;
    if (sortPropertyKey) {
      _items.sort((a, b) => a[sortPropertyKey].toString().localeCompare(b[sortPropertyKey].toString()));
    }

    this.items = _items;
    this.#originalItems = structuredClone(_items);

    this.dialog.returnValue = '';
    this.dialog?.show();
    return await new Promise<CloseReason>((resolve) => {
      this.#resolve = resolve;
    });
  }

  hasChanges(sortA: Array<T>, sortB: Array<T>) {
    return JSON.stringify(sortA) !== JSON.stringify(sortB);
  }

  #resolve: (value: CloseReason) => void;
  static styles = [
    css`
      :host {
        display: grid;
      }

      md-dialog {
        max-width: 450px;
        width: calc(100vw - 24px);

        height: min-content;
        max-height: calc(100vh - 24px);
      }

      form {
        display: grid;
        padding: 8px;
      }

      md-circular-progress {
        --md-circular-progress-size: 28px;
      }
    `,
  ];

  render() {
    return html` <md-dialog
      @open=${(e: DOMEvent<MdDialog>) => {
        dialogOpenNavigationHack(e.target);
        dialogZIndexHack(e.target);
      }}
      @close=${(e: DOMEvent<MdDialog>) => {
        if (e.target.returnValue === 'apply' || e.target.returnValue === 'cancel') {
          dialogCloseNavigationHack(e.target);
          this.snackbar.dismissAll();
          return this.#resolve(e.target.returnValue as CloseReason);
        }
        e.preventDefault();
      }}
    >
      <div slot="headline">Reorder items</div>
      <form
        slot="content"
        @item-drop=${(e: ItemDropEvent) => {
          e.stopPropagation();
          const items = this.items ?? [];
          //HoverIndex cannot be dropped beyond the length of the array
          const hoverIndex = Math.min(e.hoverIndex, items.length - 1);

          //Ignore if item goes back to where it started
          if (hoverIndex !== e.originIndex) {
            const temp = items[e.originIndex];
            items.splice(e.originIndex, 1);
            items.splice(hoverIndex, 0, temp);
          }

          this.requestUpdate('items');
        }}
      >
        ${repeat(
          this.items,
          (item) => this.tableMetaData?.uniqueKey(item),
          (item) => html`
            <titanium-data-table-core-reorder-item
              ?disable-drag=${this.isLoading}
              .item=${item}
              .tableMetaData=${this.tableMetaData}
              .supplementalItemStyles=${this.supplementalItemStyles}
            ></titanium-data-table-core-reorder-item>
          `
        )}
        <titanium-snackbar-stack .eventListenerTarget=${this}></titanium-snackbar-stack>
      </form>
      <div slot="actions">
        <md-text-button @click=${() => this.dialog?.close('cancel')} ?disabled=${this.isLoading}>Cancel</md-text-button>
        <md-filled-tonal-button
          trailing-icon
          ?disabled=${this.isLoading || !this.hasChanges(this.items, this.#originalItems)}
          @click=${async () => {
            let _resolve = () => {};
            let _reject = () => {};
            const saving = new Promise<void>((resolve, reject) => {
              _resolve = resolve;
              _reject = reject;
            });
            this.loadWhile(saving);
            this.dispatchEvent(
              new CustomEvent<{ resolve: () => void; reject: (reason: any) => void; items: Array<T> }>('reorder-save-request', {
                detail: { resolve: _resolve, reject: _reject, items: this.items },
              })
            );

            try {
              await saving;
              this.dialog?.close('apply');
            } catch (error) {
              this.dispatchEvent(new ShowSnackbarEvent(error));
            }
          }}
          >Save
          ${this.isLoading
            ? html`<md-circular-progress slot="icon" indeterminate></md-circular-progress>`
            : html` <md-icon slot="icon">save</md-icon>`}</md-filled-tonal-button
        >
      </div>
    </md-dialog>`;
  }
}
