/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, queryAll, state } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/titanium-styles';
import '@leavittsoftware/profile-picture';
import '@material/web/iconbutton/filled-icon-button';
import '@material/web/button/filled-tonal-button';
import '@material/web/textfield/outlined-text-field';

/* playground-fold-end */
import '@leavittsoftware/titanium-input-validator/lib/input-validator';
import { TitaniumSnackbarSingleton } from '@leavittsoftware/titanium-snackbar/lib/snackbar';
import { TitaniumInputValidator } from '@leavittsoftware/titanium-input-validator/lib/input-validator';
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
        border: 1px solid var(--md-sys-color-surface-variant);
        padding: 24px;
        border-radius: 8px;
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin: 24px 0 36px 0;
      }

      form {
        width: 100%;
      }

      md-outlined-text-field {
        height: 65px;
      }

      button-container {
        padding: 12px;
        display: flex;
        gap: 12px;
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
          <titanium-input-validator label="Bunnies" .evaluator=${() => this.iconSelected === 'cruelty_free'} .errorText=${'Bunny is not selected'}>
            <button-container>
              <md-outlined-icon-button
                type="button"
                @click=${() => (this.iconSelected = 'cruelty_free')}
                toggle
                ?selected=${this.iconSelected === 'cruelty_free'}
              >
                <md-icon>cruelty_free</md-icon>
              </md-outlined-icon-button>
              <md-outlined-icon-button type="button" @click=${() => (this.iconSelected = 'pets')} toggle ?selected=${this.iconSelected === 'pets'}>
                <md-icon>pets</md-icon>
              </md-outlined-icon-button>
              <md-outlined-icon-button type="button" @click=${() => (this.iconSelected = 'person')} toggle ?selected=${this.iconSelected === 'person'}>
                <md-icon>person</md-icon>
              </md-outlined-icon-button>
            </button-container>
          </titanium-input-validator>
        </form>
        <md-filled-tonal-button @click=${() => Array.from(this.validators).forEach((v) => v.reportValidity())}>Report Validity</md-filled-tonal-button>
        <md-filled-tonal-button
          @click=${() => TitaniumSnackbarSingleton.open(`Check Validity is ${Array.from(this.validators).map((v) => v.checkValidity())}`)}
        >
          Check Validity</md-filled-tonal-button
        >
        <md-filled-tonal-button @click=${() => Array.from(this.validators).forEach((v) => v.reset())}> Reset</md-filled-tonal-button>
      </div>
    `;
  }
}
