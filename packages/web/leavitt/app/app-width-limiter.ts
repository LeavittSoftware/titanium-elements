import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('leavitt-app-width-limiter')
export class LeavittAppWidthLimiter extends LitElement {
  @property({ type: String, attribute: 'max-width' }) accessor maxWidth: string = '640px';

  static styles = [
    css`
      :host {
        display: grid;
        padding: 12px 16px 0 16px;
        width: 100%;
        justify-self: center;
        box-sizing: border-box;
      }
    `,
  ];

  render() {
    return html`
      <style>
        :host {
          max-width: ${this.maxWidth};
        }
      </style>
      <slot></slot>
    `;
  }
}
