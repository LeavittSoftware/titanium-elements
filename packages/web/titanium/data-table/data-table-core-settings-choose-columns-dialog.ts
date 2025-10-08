import '@material/web/dialog/dialog';
import '@material/web/button/filled-tonal-button';

import './data-table-core-settings-choose-columns-item';

import { LitElement, PropertyValues, css, html } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { TitaniumDataTableCoreMetaData } from './data-table-core';
import { dialogCloseNavigationHack, dialogOpenNavigationHack } from '../hacks/dialog-navigation-hack';
import { dialogZIndexHack } from '../hacks/dialog-zindex-hack';
import { DOMEvent } from '../types/dom-event';
import { MdDialog } from '@material/web/dialog/dialog';
import { ItemDropEvent } from './draggable-item-base';
import { repeat } from 'lit/directives/repeat.js';
import { TitaniumDataTableCoreSettingsChooseColumnsItem } from './data-table-core-settings-choose-columns-item';

export type TitaniumDataTableCoreItemSettings = {
  key: string;
  show: boolean;
};

@customElement('titanium-data-table-core-settings-choose-columns-dialog')
export class TitaniumDataTableCoreSettingsChooseColumnsDialog<T extends object> extends LitElement {
  @property({ type: Object }) accessor tableMetaData: TitaniumDataTableCoreMetaData<T> | null = null;
  @property({ type: Array }) accessor userSettings: TitaniumDataTableCoreItemSettings[] = [];

  @state() accessor customColumnsApplied: boolean = false;

  @query('md-dialog') private accessor dialog: MdDialog;

  updated(changedProperties: PropertyValues) {
    if (changedProperties.has('tableMetaData')) {
      //make sure all keys in tableMetaData.itemMetaData are in userSettings
      if (this.tableMetaData?.itemMetaData.some((item) => !this.userSettings.some((setting) => setting.key === item.key))) {
        this.resetColumns();
      }
      //check if columns have been removed
      if (this.tableMetaData?.itemMetaData.length !== this.userSettings.length) {
        this.resetColumns();
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

  resetColumns() {
    const _userSettings = this.tableMetaData?.itemMetaData.map((item) => ({ key: item.key, show: !item.hideByDefault })) ?? [];
    if (JSON.stringify(_userSettings) !== JSON.stringify(this.userSettings)) {
      this.userSettings = _userSettings;
      this.dispatchEvent(new Event('setting-change'));
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
    css`
      :host {
        display: grid;
      }

      md-dialog {
        max-width: 450px;
        width: calc(100vw - 24px);
      }

      form {
        display: grid;
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
        if (e.target.returnValue === 'done' || e.target.returnValue === 'navigation-close') {
          dialogCloseNavigationHack(e.target);
          return this.#resolve(e.target.returnValue as 'done');
        }
        e.preventDefault();
      }}
    >
      <div slot="headline">Choose columns</div>

      <form
        slot="content"
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
          (setting) => html`
            <titanium-data-table-core-settings-choose-columns-item
              .name=${this.tableMetaData?.itemMetaData.find((item) => item.key === setting.key)?.friendlyName ?? setting.key}
              .selected=${setting.show}
              ?disabled=${setting.show && this.userSettings.filter((s) => s.show).length === 1}
              ?disable-drag=${this.userSettings.length === 1}
              @changed=${(e: DOMEvent<TitaniumDataTableCoreSettingsChooseColumnsItem>) => {
                setting.show = e.target.selected;
                this.requestUpdate('userSettings');
                this.dispatchEvent(new Event('setting-change'));
              }}
            ></titanium-data-table-core-settings-choose-columns-item>
          `
        )}
      </form>
      <div slot="actions">
        <md-filled-tonal-button @click=${() => this.dialog?.close('done')}>Done</md-filled-tonal-button>
      </div>
    </md-dialog>`;
  }
}
