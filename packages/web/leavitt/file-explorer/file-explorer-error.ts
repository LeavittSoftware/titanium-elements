import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

import { p } from '../../titanium/styles/styles';
import '@material/web/icon/icon';

@customElement('leavitt-file-explorer-error')
export class LeavittFileExplorerError extends LitElement {
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

      md-icon {
        height: 120px;
        width: 130px;
        font-size: 120px;
        color: var(--md-sys-color-surface-variant);
      }
    `,
  ];

  render() {
    return html`
      <md-icon>gpp_bad</md-icon>
      <p>Something went wrong...</p>
    `;
  }
}
