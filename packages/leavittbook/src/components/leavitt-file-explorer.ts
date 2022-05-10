import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { h1, h2, h3, h5, p } from '@leavittsoftware/titanium-styles';

import StoryStyles from '../styles/story-styles';
import fileExplorerService from '../services/file-explorer-service.js';

import '@leavittsoftware/titanium-card';
import '../../../leavitt-file-explorer/lib/leavitt-file-explorer';
import '../shared/code-block';
import '../shared/story-header';

@customElement('leavitt-file-explorer-demo')
export class LeavittFileExplorerDemoElement extends LitElement {
  static styles = [h1, h2, h3, h5, p, StoryStyles, css``];

  #defaultStory() {
    return html`
      <div>
        <h1>Default</h1>
        <p>Default</p>
        <leavitt-file-explorer file-explorer-id="1" folder-id="1635" .apiService=${fileExplorerService}></leavitt-file-explorer>
      </div>
    `;
  }

  #restrictedStory() {
    return html`
      <div>
        <h1>Restricted</h1>
        <p>Restricted navigation up</p>
        <leavitt-file-explorer file-explorer-id="1" folder-id="1637" prevent-navigation-up .apiService=${fileExplorerService}></leavitt-file-explorer>
      </div>
    `;
  }

  render() {
    return html`
      <story-header name="Leavitt file explorer" tagName="leavitt-file-explorer" klass="LeavittFileExplorerElement"></story-header>
      <titanium-card>
        ${this.#defaultStory()}
        <code-block .snippet=${this.#defaultStory()}> </code-block>
      </titanium-card>
      <titanium-card>
        ${this.#restrictedStory()}
        <code-block .snippet=${this.#restrictedStory()}> </code-block>
      </titanium-card>
    `;
  }
}
