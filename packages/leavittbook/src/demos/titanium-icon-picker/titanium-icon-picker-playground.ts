/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';

/* playground-fold-end */
import '@leavittsoftware/web/titanium/icon-picker/icon-picker';
import { TitaniumIconPicker } from '@leavittsoftware/web/titanium/icon-picker/icon-picker';
import { TitaniumSnackbarSingleton } from '@leavittsoftware/web/titanium//snackbar/snackbar';

/* playground-fold */
@customElement('titanium-icon-picker-playground')
export class TitaniumIconPickerPlayground extends LitElement {
  @query('titanium-icon-picker[demo2]') demo2Picker: TitaniumIconPicker;

  static styles = [
    h1,
    p,
    css`
      :host {
        display: flex;
        flex-direction: column;
        --mdc-icon-font: 'Material Symbols Outlined';
        margin: 24px 12px;
      }

      div {
        border: 1px solid var(--md-sys-color-outline);
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
      <h1>Default</h1>
      <p>Icon picker example</p>
      <div>
        <titanium-icon-picker></titanium-icon-picker>
      </div>

      <h1>Default</h1>
      <p>Icon picker example (pre-populated)</p>
      <div>
        <titanium-icon-picker value="add"></titanium-icon-picker>
      </div>

      <h1>Required</h1>
      <p>Icon picker required example</p>
      <div>
        <titanium-icon-picker demo2 required label="Must pick an icon"></titanium-icon-picker>
      </div>

      <mwc-button @click=${() => this.demo2Picker?.reset()} label="Reset"></mwc-button>
      <mwc-button @click=${() => this.demo2Picker?.reportValidity()} label="Report Validity"></mwc-button>
      <mwc-button @click=${() => TitaniumSnackbarSingleton.open(`Check Validity is ${this.demo2Picker?.checkValidity()}`)} label="Check Validity"></mwc-button>
    `;
  }
}
