/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { h1, p } from '../@leavittsoftware/web/titanium/styles/styles';
import '@material/mwc-icon';
import '@material/mwc-button';
import '@material/mwc-textfield';
import '@material/mwc-select';
/* playground-fold-end */

import '../@leavittsoftware/web/titanium/dialog/dialog';

/* playground-fold */
@customElement('titanium-dialog-base-playground')
export class TitaniumDialogPlayground extends LitElement {
  @query('titanium-native-dialog-base[default]') defaultDialog;
  @query('titanium-native-dialog-base[focus-trap]') focusTrapDialog;
  @query('titanium-native-dialog-base[allow-events]') allowEventsDialog;

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

      p,
      h1 {
        width: 100%;
      }

      mwc-button {
        align-self: flex-end;
      }
    `,
  ];

  render() {
    /* playground-fold-end */
    return html`
      <div>
        <h1>Default</h1>
        <p>titanium-native-dialog-base with no configuration set</p>
        <mwc-button @click=${async () => alert('Close reason:' + (await this.defaultDialog?.open()))} label="Fake Donation"></mwc-button>

        <titanium-native-dialog-base default>
          <main style="background: aliceblue;padding: 24px;">
            <p>A blank canvas...</p>
            <mwc-button @click=${() => this.defaultDialog?.close()} label="Submit"></mwc-button>
          </main>
        </titanium-native-dialog-base>
      </div>

      <div>
        <h1>Focus Trap</h1>
        <p>titanium-native-dialog-base with the focus-trap attribute applied - this will prevent tabbing outside of the dialog</p>
        <mwc-button @click=${async () => alert('Close reason:' + (await this.focusTrapDialog?.open()))} label="Tarzan of the Apes"></mwc-button>

        <titanium-native-dialog-base focus-trap>
          <custom-container>
            <mwc-button @click=${() => this.focusTrapDialog?.close('button')} label="Only one way to close"></mwc-button>
          </custom-container>
        </titanium-native-dialog-base>
      </div>

      <div
        @click=${() => {
          console.log('click outside modal');
        }}
      >
        <h1>Allow events</h1>
        <p>titanium-native-dialog-base with the allowMouseAndKeyboardEvents property set</p>
        <mwc-button @click=${async () => await this.allowEventsDialog?.open()} label="Allow events"></mwc-button>

        <titanium-native-dialog-base allow-events allow-mouse-and-keyboard-events>
          <custom-container>
            <mwc-button
              @click=${() => {
                console.log('click inside modal');
              }}
              >Click me</mwc-button
            >
            <mwc-button @click=${() => this.allowEventsDialog?.close('button')} label="Close"></mwc-button>
          </custom-container>
        </titanium-native-dialog-base>
      </div>
    `;
  }
}
