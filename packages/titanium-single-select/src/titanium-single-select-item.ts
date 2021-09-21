import { css, html, LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('titanium-single-select-item')
export class TitaniumSingleSelectItemElement<T> extends LitElement {
  @property({ attribute: false }) value: T;
  @property({ type: Number, reflect: true }) tabindex: number = 0;

  firstUpdated() {
    this.addEventListener('keydown', e =>
      this.dispatchEvent(
        new CustomEvent<{ event: KeyboardEvent; value: T }>('titanium-single-select-item-keydown', {
          detail: { event: e, value: this.value },
          composed: true,
          bubbles: true,
        })
      )
    );
    this.addEventListener('blur', e =>
      this.dispatchEvent(
        new CustomEvent<FocusEvent>('titanium-single-select-item-blur', {
          detail: e,
          composed: true,
          bubbles: true,
        })
      )
    );
    this.addEventListener('click', e =>
      this.dispatchEvent(
        new CustomEvent<{ event: MouseEvent; value: T }>('titanium-single-select-item-click', {
          detail: { event: e, value: this.value },
          composed: true,
          bubbles: true,
        })
      )
    );
  }

  render() {
    return html` <slot></slot> `;
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: row;

      position: relative;
      padding: 0 16px;
      cursor: default;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      font-family: Roboto, Arial, sans-serif;
      color: var(--app-text-color, #5f6368);
      line-height: 26px;
      font-size: 16px;
    }

    :host(:hover),
    :host(:focus) {
      background-color: var(--app-hover-color, #f9f9f9);
      outline: none;
    }
  `;
}
