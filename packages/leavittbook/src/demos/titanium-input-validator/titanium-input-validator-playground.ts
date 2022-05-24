/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/titanium-styles';
import '@leavittsoftware/profile-picture';
import '@material/mwc-icon-button';
import '@material/mwc-button';

/* playground-fold-end */
import '@leavittsoftware/titanium-input-validator';
import { TitaniumSnackbarSingleton } from '@leavittsoftware/titanium-snackbar';

/* playground-fold */
@customElement('titanium-input-validator-playground')
export class TitaniumInputValidatorPlayground extends LitElement {
  @state() iconSelected = '';
  @query('titanium-input-validator') validator;

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

      titanium-input-validator {
        align-items: center;
        border: 1px solid var(--app-border-color);
        padding: 8px;
        width: 170px;
        margin-bottom: 12px;
      }

      icon-container {
        display: flex;
        flex-direction: row;
      }

      mwc-icon-button[selected] {
        color: cornflowerblue;
      }
    `,
  ];

  render() {
    /* playground-fold-end */
    return html`
      <h1>Default</h1>
      <p>A validator example for a custom selectable icon button input</p>
      <div>
        <titanium-input-validator .evaluator=${() => this.iconSelected === 'cruelty_free'} validationMessage="Bunny is not selected">
          <p>Please select the bunny</p>
          <icon-container>
            <mwc-icon-button
              @click=${() => (this.iconSelected = 'cruelty_free')}
              ?selected=${this.iconSelected === 'cruelty_free'}
              icon="cruelty_free"
            ></mwc-icon-button>
            <mwc-icon-button @click=${() => (this.iconSelected = 'pets')} ?selected=${this.iconSelected === 'pets'} icon="pets"></mwc-icon-button>
            <mwc-icon-button @click=${() => (this.iconSelected = 'person')} ?selected=${this.iconSelected === 'person'} icon="person"></mwc-icon-button>
          </icon-container>
        </titanium-input-validator>
        <br />
        <mwc-button @click=${() => this.validator?.reportValidity()} label="Report Validity"></mwc-button>
        <mwc-button @click=${() => TitaniumSnackbarSingleton.open(`Check Validity is ${this.validator?.checkValidity()}`)} label="Check Validity"></mwc-button>
      </div>
    `;
  }
}
