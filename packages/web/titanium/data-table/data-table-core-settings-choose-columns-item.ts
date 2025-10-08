import '@material/web/icon/icon';
import '@material/web/switch/switch';
import '@material/web/elevation/elevation';

import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { DraggableItemBase } from './draggable-item-base';

@customElement('titanium-data-table-core-settings-choose-columns-item')
export class TitaniumDataTableCoreSettingsChooseColumnsItem extends DraggableItemBase {
  @property({ type: String }) accessor name: string;
  @property({ type: Boolean }) accessor selected: boolean;
  @property({ type: Boolean }) accessor disabled: boolean;

  override get items() {
    return Array.from(
      this.parentElement?.querySelectorAll<TitaniumDataTableCoreSettingsChooseColumnsItem>('titanium-data-table-core-settings-choose-columns-item') ?? []
    );
  }

  override get itemsContainer() {
    return this.parentElement;
  }

  static styles = [
    DraggableItemBase.styles,
    css`
      :host {
        display: grid;
        grid: 'icon label switch' / auto 1fr auto;
        user-select: none;

        font-size: 15px;
        line-height: 17px;

        align-items: center;
        gap: 8px;
        min-height: 48px;
        border-bottom: 1px solid var(--md-sys-color-outline-variant);

        position: relative;
        box-sizing: border-box;
      }

      :host(:last-of-type) {
        border-bottom: none;
      }

      md-switch {
        --md-switch-track-height: 24px;
        --md-switch-with-icon-handle-height: 20px;
        --md-switch-with-icon-handle-width: 20px;
        --md-switch-track-width: 40px;
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
      <md-icon @mousedown=${this.mouseEvent} @touchstart=${this.touchEvent} drag>drag_indicator</md-icon>
      <span>${this.name}</span>
      <md-switch
        ?selected=${this.selected}
        @change=${() => {
          this.selected = !this.selected;
          this.dispatchEvent(new Event('changed'));
        }}
        icons
        show-only-selected-icon
        ?disabled=${this.disabled}
      ></md-switch>
    `;
  }
}
