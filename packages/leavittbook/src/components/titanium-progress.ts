import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { h1, h2, h3, h5, p } from '@leavittsoftware/titanium-styles';
import StoryStyles from '../styles/story-styles';
import '@leavittsoftware/titanium-card';
import '../shared/code-block';
import '../shared/story-header';
import '@api-viewer/docs';

@customElement('titanium-progress-demo')
export class TitaniumProgressDemoElement extends LitElement {
  static styles = [h1, h2, h3, h5, p, StoryStyles, css``];

  #defaultStory() {
    return html`
      <div>
        <h1>Default</h1>
        <p>Default titanium progress styles</p>
        <titanium-progress></titanium-progress>
      </div>
    `;
  }

  #disabledStory() {
    return html`
      <div>
        <h1>Disabled</h1>
        <p>Disabled titanium progress styles</p>
        <titanium-progress disabled></titanium-progress>
      </div>
    `;
  }

  render() {
    return html`
      <story-header name="Titanium progress" packageName="titanium-progress" tagName="titanium-progress" klass="TitaniumProgressElement"></story-header>
      <titanium-card>
        ${this.#defaultStory()}
        <code-block .snippet=${this.#defaultStory()}> </code-block>
      </titanium-card>

      <titanium-card>
        ${this.#disabledStory()}
        <code-block .snippet=${this.#disabledStory()}> </code-block>
      </titanium-card>

      <api-docs src="./custom-elements.json" selected="titanium-progress"></api-docs>
    `;
  }
}
