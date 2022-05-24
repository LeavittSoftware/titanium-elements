/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/titanium-styles';
import '@leavittsoftware/profile-picture';
import '@material/mwc-select';
import '@material/mwc-list/mwc-check-list-item';

/* playground-fold-end */
import '@leavittsoftware/titanium-icon';

/* playground-fold */
@customElement('titanium-icon-playground')
export class TitaniumIconPlayground extends LitElement {
  static styles = [
    h1,
    p,
    css`
      :host {
        display: flex;
        flex-direction: column;
        --mdc-icon-font: 'Material Icons Outlined';
        margin: 24px 12px;
      }

      div {
        border: 1px solid var(--app-border-color);
        padding: 24px;
        border-radius: 8px;
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin: 24px 0 36px 0;
      }

      mwc-select {
        min-width: 400px;
      }
    `,
  ];

  render() {
    /* playground-fold-end */
    return html`
      <h1>Default</h1>
      <p>Icon example</p>
      <div>
        <titanium-icon icon="folder"></titanium-icon>
      </div>

      <h1>Demo of use in mwc-select</h1>
      <p>Use a titanium-icon vs a mwc-icon in a mwc-select to prevent icon name from showing as selected text</p>
      <div>
        <mwc-select outlined label="Use case demo">
          <mwc-list-item></mwc-list-item>
          <mwc-list-item graphic="avatar" value="1">
            <span>Broken</span>
            <mwc-icon slot="graphic">folder</mwc-icon>
          </mwc-list-item>
          <mwc-list-item graphic="avatar" value="2">
            <span>Fixed</span>
            <titanium-icon slot="graphic" icon="folder"></titanium-icon>
          </mwc-list-item>
        </mwc-select>
      </div>
    `;
  }
}
