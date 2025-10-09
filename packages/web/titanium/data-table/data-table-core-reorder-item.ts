import '@material/web/icon/icon';
import '@material/web/elevation/elevation';

import { css, CSSResult, CSSResultGroup, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { DraggableItemBase } from './draggable-item-base';
import { TitaniumDataTableCoreMetaData } from './data-table-core';
import { dataTableContentStyles } from './data-table-content-styles';

@customElement('titanium-data-table-core-reorder-item')
export class TitaniumDataTableCoreReorderItem<T extends object> extends DraggableItemBase {
  @property({ type: Object }) accessor item: T;
  @property({ type: Object }) accessor tableMetaData: TitaniumDataTableCoreMetaData<T> | null = null;
  @property({ type: Object }) accessor supplementalItemStyles: CSSResult | CSSResultGroup | null = null;

  override get items() {
    return Array.from(this.parentElement?.querySelectorAll<TitaniumDataTableCoreReorderItem<T>>('titanium-data-table-core-reorder-item') ?? []);
  }

  override get itemsContainer() {
    return this.parentElement;
  }

  static styles = [
    DraggableItemBase.styles,
    css`
      :host {
        display: grid;
        box-sizing: border-box;
      }

      main {
        display: grid;
        grid: 'label icon' / 1fr auto;
        user-select: none;

        font-size: 15px;
        line-height: 17px;

        align-items: center;
        gap: 8px;
        min-height: 48px;
        border-bottom: 1px solid var(--md-sys-color-outline-variant);
        border-top: 1px solid var(--md-sys-color-outline-variant);

        padding: 0 8px;

        position: relative;
        box-sizing: border-box;

        /* margin-bottom: -1px; */
      }

      :host(:last-of-type) {
        border-bottom: none;
      }

      md-icon {
        grid-area: icon;
        animation: wobble 0.4s ease-in-out infinite alternate;
        transform-origin: center center;
      }

      label-container {
        grid-area: label;

        display: grid;
        font-size: 14px;
        line-height: 18px;
        font-weight: 400;
        padding: 6px 0;
        align-items: center;
        margin: 0;
      }

      @keyframes wobble {
        0%,
        100% {
          transform: rotate(0deg);
        }
        25% {
          transform: rotate(1deg) translateX(1px);
        }
        50% {
          transform: rotate(-1deg) translateX(-1px);
        }
        75% {
          transform: rotate(1deg) translateX(1px);
        }
      }

      :host(:nth-child(even)) {
        md-icon {
          animation-delay: 100ms;
        }
      }

      :host(:nth-child(odd)) {
        md-icon {
          animation-delay: 150ms;
        }
      }
      :host([disable-drag]),
      :host(:hover) {
        md-icon {
          animation: none;
        }
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

        label-container{
          ${this.supplementalItemStyles ? this.supplementalItemStyles : nothing};
          ${dataTableContentStyles ? dataTableContentStyles : nothing};
        }
      </style>
      <main @mousedown=${this.mouseEvent} @touchstart=${this.touchEvent} drag>
        <md-icon>drag_handle</md-icon>
        <label-container
          >${this.tableMetaData?.itemMetaData.find((o) => o.key === this.tableMetaData?.reorderConfig?.reorderItemDisplayKey)?.render(this.item) ?? ''}
        </label-container>
        <md-elevation></md-elevation>
      </main>
    `;
  }
}
