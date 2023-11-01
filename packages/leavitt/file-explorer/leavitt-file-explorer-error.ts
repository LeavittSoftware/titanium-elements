import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { p } from '@leavittsoftware/titanium-styles';

@customElement('leavitt-file-explorer-error')
export class LeavittFileExplorerErrorElement extends LitElement {
  static styles = [
    p,
    css`
      :host {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        padding: 48px 24px;
      }

      mwc-icon {
        --mdc-icon-size: 120px;
        color: #b3b3b3;
      }

      p {
        color: var(--app-light-text-color, #80868b);
      }
    `,
  ];

  render() {
    return html`
      <mwc-icon>gpp_bad</mwc-icon>
      <p>Something went wrong...</p>
    `;
  }
}
