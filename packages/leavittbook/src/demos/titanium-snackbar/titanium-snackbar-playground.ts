/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/titanium-styles';
import '@leavittsoftware/profile-picture';
import '@material/mwc-icon';

/* playground-fold-end */
import '@leavittsoftware/titanium-snackbar';
import { TitaniumSnackbarSingleton } from '@leavittsoftware/titanium-snackbar';

/* playground-fold */
@customElement('titanium-snackbar-playground')
export class TitaniumSnackbarPlayground extends LitElement {
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
    `,
  ];

  render() {
    /* playground-fold-end */
    return html`
      <div>
        <h1>Default</h1>
        <mwc-button @click=${() => TitaniumSnackbarSingleton?.open('Default snackbar')} outlined label="Default"></mwc-button>
      </div>

      <div>
        <h1>Auto-hide</h1>
        <mwc-button @click=${() => TitaniumSnackbarSingleton?.open('Auto-hide snackbar', { autoHide: true })} outlined label="Auto-hide"></mwc-button>
      </div>

      <div>
        <h1>Informational</h1>
        <mwc-button
          @click=${() => TitaniumSnackbarSingleton?.open('Informational snackbar', { style: 'informational' })}
          outlined
          label="Informational"
        ></mwc-button>
      </div>

      <div>
        <h1>Error</h1>
        <mwc-button @click=${() => TitaniumSnackbarSingleton?.open('Error snackbar', { style: 'error' })} outlined label="Error"></mwc-button>
      </div>

      <titanium-snackbar></titanium-snackbar>
    `;
  }
}
