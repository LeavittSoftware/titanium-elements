import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { h1, h2, h3, h5, p } from '@leavittsoftware/titanium-styles';
import StoryStyles from '../styles/story-styles';
import '@leavittsoftware/titanium-card';
import '@leavittsoftware/titanium-input-validator';
import '../shared/code-block';
import '../shared/story-header';
import '@api-viewer/docs';

@customElement('titanium-input-validator-demo')
export class TitaniumInputValidatorDemoElement extends LitElement {
  @state() inputText = '';
  static styles = [h1, h2, h3, h5, p, StoryStyles, css``];

  #defaultStory() {
    return html`
      <div>
        <h1>Default</h1>
        <p>How to use the validator</p>
        <p>The input below should only return valid when the input is 'dog'</p>
        <titanium-input-validator .evaluator=${() => this.inputText === 'dog'} validationMessage="Input must say dog">
          <input
            @input=${event => {
              this.inputText = event.target.value;
            }}
          />
        </titanium-input-validator>
        <button>Validate</button>
      </div>
    `;
  }

  render() {
    return html`
      <story-header name="Titanium chip" tagName="titanium-chip" klass="TitaniumChipElement"></story-header>
      <titanium-card>
        ${this.#defaultStory()}
        <code-block .snippet=${this.#defaultStory()}> </code-block>
      </titanium-card>

      <api-docs src="./custom-elements.json" selected="titanium-chip"></api-docs>
    `;
  }
}
