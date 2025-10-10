import '@material/web/icon/icon';
import '@material/web/switch/switch';
import '@material/web/elevation/elevation';
import '@material/web/select/filled-select';
import '@material/web/select/select-option';

import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { h5 } from '../styles/h5';
import { p } from '../styles/p';
import { ellipsis } from '../styles/ellipsis';
import { DraggableItemBase } from './draggable-item-base';

@customElement('data-table-core-settings-sort-item')
export class TitaniumDataTableCoreSettingsSortItem extends DraggableItemBase {
  @property({ type: String }) accessor name: string;
  @property({ type: String, reflect: true, attribute: 'sort-direction' }) accessor sortDirection: 'asc' | 'desc';
  @property({ type: Number }) accessor index: number;
  @property({ type: Boolean, reflect: true }) accessor disabled: boolean;

  override get items() {
    return Array.from(this.parentElement?.querySelectorAll<TitaniumDataTableCoreSettingsSortItem>('data-table-core-settings-sort-item') ?? []);
  }

  override get itemsContainer() {
    return this.parentElement;
  }

  static styles = [
    DraggableItemBase.styles,
    h5,
    p,
    ellipsis,
    css`
      :host {
        display: grid;
        grid: 'icon header gap select delete' / auto auto 1fr auto auto;
        user-select: none;

        font-size: 15px;
        line-height: 17px;

        align-items: center;
        gap: 8px;
        min-height: 48px;
        border-bottom: 1px solid var(--md-sys-color-outline-variant);

        position: relative;
        box-sizing: border-box;

        padding: 12px 0;

        label[disabled] span {
          opacity: 0.3;
        }
      }

      :host(:last-of-type) {
        border-bottom: none;
      }

      md-icon[drag] {
        grid-area: icon;
      }

      header {
        grid-area: header;

        h5[annotation] {
          opacity: 0.6;

          height: 16px;
          transition:
            opacity 0.2s ease-out,
            height 0.2s ease-out;
          transition-behavior: allow-discrete;
        }
      }

      md-icon-button[remove] {
        grid-area: delete;

        --md-icon-button-icon-color: var(--md-sys-color-error);
        --md-icon-button-pressed-icon-color: var(--md-sys-color-error);
        --md-icon-button-focus-icon-color: var(--md-sys-color-error);
        --md-icon-button-hover-icon-color: var(--md-sys-color-error);
      }

      md-filled-select {
        grid-area: select;
        --md-filled-field-top-space: 4px;
        --md-filled-field-bottom-space: 4px;
        --md-filled-field-content-size: 14px;
        --md-filled-field-label-text-populated-size: 11px;

        --md-filled-select-text-field-container-shape: 8px;
        --md-filled-select-text-field-active-indicator-height: 0;
        --md-filled-select-text-field-error-active-indicator-height: 0;
        --md-filled-select-text-field-hover-active-indicator-height: 0;
        --md-filled-select-text-field-focus-active-indicator-height: 0;
        --md-filled-select-text-field-disabled-active-indicator-height: 0;

        min-width: 142px;

        md-select-option {
          --md-menu-item-top-space: 6px;
          --md-menu-item-bottom-space: 6px;
          --md-menu-item-one-line-container-height: 36px;
          --md-menu-item-label-text-size: 14px;
        }
      }

      :host([dragging]) h5[annotation],
      :host([dragged]) h5[annotation] {
        opacity: 0;
        height: 0;
      }
    `,
  ];

  render() {
    return html`
      <style>
        :host([nudge-down]:not([dragged])) {
          transform: translate3d(0, ${this.nudgeHeight}px, 0);
        }

        :host([nudge-up]:not([dragged])) {
          transform: translate3d(0, -${this.nudgeHeight}px, 0);
        }
      </style>
      <md-elevation></md-elevation>
      <md-icon @mousedown=${this.mouseEvent} @touchstart=${this.touchEvent} drag>drag_handle</md-icon>
      <header ellipsis>
        <h5 ellipsis annotation>${this.index === 0 ? html`sort by` : html`then by`}</h5>
        <p ellipsis>${this.name}</p>
      </header>
      <md-filled-select
        ?disabled=${this.disabled}
        .value=${this.sortDirection}
        @change=${(e) => {
          this.sortDirection = e.target.value as 'asc' | 'desc';
          this.dispatchEvent(new Event('sort-direction-changed'));
        }}
      >
        <md-select-option value="asc"><span>Ascending</span></md-select-option>
        <md-select-option value="desc"><span>Descending</span> </md-select-option>
      </md-filled-select>
      <md-icon-button ?disabled=${this.disabled} remove @click=${() => this.dispatchEvent(new Event('delete'))}><md-icon>close_small</md-icon></md-icon-button>
    `;
  }
}
