import { LitElement, html, css } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { h1, h2, h3, h5, p } from '@leavittsoftware/titanium-styles';
import StoryStyles from '../styles/story-styles';
import '@leavittsoftware/titanium-card';
import '@leavittsoftware/titanium-input-validator';
import '@material/mwc-icon-button';
import '@material/mwc-button';
import '../shared/code-block';
import '../shared/story-header';
import '@api-viewer/docs';
import { TitaniumSnackbarSingleton } from '@leavittsoftware/titanium-snackbar';

@customElement('titanium-input-validator-demo')
export class TitaniumInputValidatorDemoElement extends LitElement {
  @state() iconSelected = '';
  @query('titanium-input-validator') validator;
  static styles = [
    h1,
    h2,
    h3,
    h5,
    p,
    StoryStyles,
    css`
      titanium-input-validator {
        align-items: center;
        border: 1px solid var(--app-border-color);
        border-radius: 12px;
        padding: 8px;
        width: 170px;
        margin-bottom: 12px;
      }

      icon-container {
        display: flex;
        flex-direction: row;
      }

      mwc-icon-button[selected] {
        color: var(--app-accent-color-blue);
      }
    `,
  ];

  #defaultStory() {
    return html`
      <div>
        <h1>Default</h1>
        <p>A validator example for a custom selectable icon button input</p>
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

  render() {
    return html`
      <story-header
        name="Titanium Input Validator"
        packageName="titanium-input-validator"
        tagName="titanium-input-validator"
        klass="TitaniumInputValidatorElement"
      ></story-header>
      <titanium-card>
        ${this.#defaultStory()}
        <code-block .snippet=${this.#defaultStory()}> </code-block>
      </titanium-card>

      <api-docs src="./custom-elements.json" selected="titanium-input-validator"></api-docs>
    `;
  }
}
