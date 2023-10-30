/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, queryAll, state } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/titanium-styles';
import '@leavittsoftware/profile-picture';
import '@material/mwc-icon-button';
import '@material/mwc-button';
import '@material/web/textfield/outlined-text-field';

/* playground-fold-end */
import '@leavittsoftware/titanium-input-validator';
import { TitaniumSnackbarSingleton } from '@leavittsoftware/titanium-snackbar';
import { TitaniumInputValidator } from '@leavittsoftware/titanium-input-validator';
import { formStyles } from '../../styles/form-styles';

/* playground-fold */
@customElement('titanium-input-validator-playground')
export class TitaniumInputValidatorPlayground extends LitElement {
  @state() iconSelected = '';
  @queryAll('titanium-input-validator') validators: NodeListOf<TitaniumInputValidator>;

  static styles = [
    h1,
    p,
    formStyles,
    css`
      :host {
        display: flex;
        flex-direction: column;
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
        <form>
          <md-outlined-text-field label="Input example"> </md-outlined-text-field>
          <titanium-input-validator label="Bunnies" .evaluator=${() => this.iconSelected === 'cruelty_free'} validationMessage="Bunny is not selected">
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
        </form>
        <titanium-input-validator .evaluator=${() => this.iconSelected === 'cruelty_free'}>
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
        <mwc-button @click=${() => Array.from(this.validators).forEach((v) => v.reportValidity())} label="Report Validity"></mwc-button>
        <mwc-button
          @click=${() => TitaniumSnackbarSingleton.open(`Check Validity is ${Array.from(this.validators).map((v) => v.checkValidity())}`)}
          label="Check Validity"
        ></mwc-button>
      </div>
    `;
  }
}
