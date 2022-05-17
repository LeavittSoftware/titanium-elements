import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { h1, h2, h3, h5, p } from '@leavittsoftware/titanium-styles';
import StoryStyles from '../styles/story-styles';
import '@leavittsoftware/titanium-card';
import '@leavittsoftware/titanium-data-table/lib/titanium-page-control';
import '../shared/code-block';
import '../shared/story-header';
import '@api-viewer/docs';

@customElement('titanium-page-control-demo')
export class TitaniumPageControlDemoElement extends LitElement {
  static styles = [h1, h2, h3, h5, p, StoryStyles, css``];

  #defaultStory() {
    return html`
      <div>
        <h1>Default</h1>
        <p>Default page control</p>
        <titanium-page-control></titanium-page-control>
      </div>
    `;
  }

  render() {
    return html`
      <story-header name="Titanium page control" tagName="titanium-page-control" klass="TitaniumPageControlElement"></story-header>
      <titanium-card>
        ${this.#defaultStory()}
        <code-block .snippet=${this.#defaultStory()}> </code-block>
      </titanium-card>

      <api-docs src="./custom-elements.json" selected="titanium-page-control"></api-docs>
    `;
  }
}
