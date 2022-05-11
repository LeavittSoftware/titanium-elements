import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { h1, h2, h3, h5, p } from '@leavittsoftware/titanium-styles';
import StoryStyles from '../styles/story-styles';
import '@leavittsoftware/titanium-card';
import '@leavittsoftware/titanium-header';
import '@api-viewer/docs';
import '../shared/code-block';
import '../shared/story-header';

@customElement('titanium-header-demo')
export class TitaniumHeaderDemoElement extends LitElement {
  static styles = [h1, h2, h3, h5, p, StoryStyles, css``];

  #defaultStory() {
    return html`
      <div>
        <h1>Default</h1>
        <p>Default style with header, subheader, and navigation</p>
        <titanium-header header="Header" subHeader="Subheader"></titanium-header>
      </div>
    `;
  }

  #noNavStory() {
    return html`
      <div>
        <h1>No nav</h1>
        <p>Header and subheader with no navigation</p>
        <titanium-header no-nav header="Header" subHeader="Subheader"></titanium-header>
      </div>
    `;
  }

  render() {
    return html`
      <story-header name="Titanium header" tagName="titanium-header" klass="TitaniumHeaderElement"></story-header>
      <titanium-card>
        ${this.#defaultStory()}
        <code-block .snippet=${this.#defaultStory()}> </code-block>
      </titanium-card>

      <titanium-card>
        ${this.#noNavStory()}
        <code-block .snippet=${this.#noNavStory()}> </code-block>
      </titanium-card>
      <api-docs src="./custom-elements.json" selected="titanium-header"></api-docs>
    `;
  }
}
