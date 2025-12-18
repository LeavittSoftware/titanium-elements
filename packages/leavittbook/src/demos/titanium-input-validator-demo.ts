import '../shared/story-header';

import '@api-viewer/docs';
import '@leavittsoftware/web/leavitt/profile-picture/profile-picture';
import '@material/web/iconbutton/filled-icon-button';
import '@material/web/button/outlined-button';

import { css, html, LitElement } from 'lit';
import { customElement, queryAll, state } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
import '@leavittsoftware/web/titanium/input-validator/input-validator';
import { TitaniumInputValidator } from '@leavittsoftware/web/titanium/input-validator/input-validator';
import { formStyles } from '../styles/form-styles';
import { ShowSnackbarEvent } from '@leavittsoftware/web/titanium/snackbar/show-snackbar-event';
import StoryStyles from '../styles/story-styles';

@customElement('titanium-input-validator-demo')
export class TitaniumInputValidatorDemo extends LitElement {
  @state() private accessor iconSelected = '';
  @queryAll('titanium-input-validator') private accessor validators: NodeListOf<TitaniumInputValidator>;

  static styles = [
    StoryStyles,
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
        border: 1px solid var(--md-sys-color-outline);
        padding: 24px;
        border-radius: 8px;
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin: 24px 0 36px 0;
      }

      section[buttons] {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 12px;
      }

      button-container {
        padding: 12px;
        display: flex;
        gap: 12px;
      }

      titanium-input-validator {
        width: 299px;
      }
    `,
  ];

  render() {
    return html`
      <story-header name="Titanium input validator" className="TitaniumInputValidator"></story-header>
      <h1>Default</h1>
      <p>A validator example for a custom selectable icon button input</p>
      <div>
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
        <section buttons>
          <md-outlined-button @click=${() => Array.from(this.validators).forEach((v) => v.reportValidity())}>Report Validity</md-outlined-button>
          <md-outlined-button
            @click=${() => this.dispatchEvent(new ShowSnackbarEvent(`Check Validity is ${Array.from(this.validators).map((v) => v.checkValidity())}`))}
          >
            Check Validity</md-outlined-button
          >
          <md-outlined-button @click=${() => Array.from(this.validators).forEach((v) => v.reset())}> Reset</md-outlined-button>
        </section>
      </div>

      <api-docs src="./custom-elements.json" selected="titanium-input-validator"></api-docs>
    `;
  }
}
