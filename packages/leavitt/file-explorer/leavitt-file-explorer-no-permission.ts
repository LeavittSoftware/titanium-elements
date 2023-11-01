import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { p } from '@leavittsoftware/titanium-styles';

@customElement('leavitt-file-explorer-no-permission')
export class LeavittFileExplorerNoPermissionElement extends LitElement {
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
      <mwc-icon>https</mwc-icon>
      <p>Permission denied</p>
    `;
  }
}
