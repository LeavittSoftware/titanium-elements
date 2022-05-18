import { LitElement, html, css } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/titanium-styles';
import StoryStyles from '../styles/story-styles';
import '@leavittsoftware/titanium-button';
import '@leavittsoftware/titanium-card';
import '@leavittsoftware/titanium-address-input';
import '@api-viewer/docs';
import '../shared/code-block';
import '../shared/story-header';
import { TitaniumAddressInput } from '@leavittsoftware/titanium-address-input';

@customElement('titanium-address-input-demo')
export class TitaniumAddressInputDemoElement extends LitElement {
  @query('titanium-address-input[id="1"]') private defaultAddress!: TitaniumAddressInput;
  static styles = [
    h1,
    p,
    StoryStyles,
    css`
      titanium-button {
        padding-bottom: 16px;
      }
    `,
  ];

  async reset() {
    this.defaultAddress.reset();
  }

  async layout() {
    this.defaultAddress.layout();
  }

  #defaultStory() {
    return html`
      <div>
        <h1>Default</h1>
        <p>Default address input styles</p>
        <titanium-button @click=${this.reset} raised>Reset input</titanium-button>
        <titanium-button @click=${this.layout} raised>Layout input</titanium-button>
        <titanium-address-input id="1" googleMapsApiKey="AIzaSyBO1C4Ek3L3sswvLxCjWIN-xgZayWyhp-k"></titanium-address-input>
      </div>
    `;
  }

  #requiredStory() {
    return html`
      <div>
        <h1>Required</h1>
        <p>Required address input styles</p>
        <titanium-address-input
          googleMapsApiKey="AIzaSyBO1C4Ek3L3sswvLxCjWIN-xgZayWyhp-k"
          required
          validation-message="Please input an address"
        ></titanium-address-input>
      </div>
    `;
  }

  #outlinedStory() {
    return html`
      <div>
        <h1>Outlined</h1>
        <p>Outlined address input styles</p>
        <titanium-address-input outlined googleMapsApiKey="AIzaSyBO1C4Ek3L3sswvLxCjWIN-xgZayWyhp-k"></titanium-address-input>
      </div>
    `;
  }

  #iconStory() {
    return html`
      <div>
        <h1>Icon</h1>
        <p>Icon address input styles</p>
        <titanium-address-input icon="home" googleMapsApiKey="AIzaSyBO1C4Ek3L3sswvLxCjWIN-xgZayWyhp-k"></titanium-address-input>
      </div>
    `;
  }

  #helperStory() {
    return html`
      <div>
        <h1>Helper</h1>
        <p>Address input styles with helper text</p>
        <titanium-address-input googleMapsApiKey="AIzaSyBO1C4Ek3L3sswvLxCjWIN-xgZayWyhp-k" helper="Address for something"></titanium-address-input>
      </div>
    `;
  }

  #helperPersistStory() {
    return html`
      <div>
        <h1>Persistent helper</h1>
        <p>Address input styles with persistent helper text</p>
        <titanium-address-input
          googleMapsApiKey="AIzaSyBO1C4Ek3L3sswvLxCjWIN-xgZayWyhp-k"
          helper="Address for something"
          helperPersistent
        ></titanium-address-input>
      </div>
    `;
  }

  render() {
    return html`
      <story-header name="Titanium address-input" tagName="titanium-address-input" klass="TitaniumAddressInputElement"></story-header>
      <titanium-card>
        ${this.#defaultStory()}
        <code-block .snippet=${this.#defaultStory()}> </code-block>
      </titanium-card>
      <titanium-card>
        ${this.#requiredStory()}
        <code-block .snippet=${this.#requiredStory()}> </code-block>
      </titanium-card>
      <titanium-card>
        ${this.#outlinedStory()}
        <code-block .snippet=${this.#outlinedStory()}> </code-block>
      </titanium-card>
      <titanium-card>
        ${this.#iconStory()}
        <code-block .snippet=${this.#iconStory()}> </code-block>
      </titanium-card>
      <titanium-card>
        ${this.#helperStory()}
        <code-block .snippet=${this.#helperStory()}> </code-block>
      </titanium-card>
      <titanium-card>
        ${this.#helperPersistStory()}
        <code-block .snippet=${this.#helperPersistStory()}> </code-block>
      </titanium-card>
      <api-docs src="./custom-elements.json" selected="titanium-address-input"></api-docs>
    `;
  }
}
