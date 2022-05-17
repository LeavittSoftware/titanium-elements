import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { h1, h2, h3, h5, p } from '@leavittsoftware/titanium-styles';

import StoryStyles from '../styles/story-styles';

import '@leavittsoftware/titanium-card';
import '@leavittsoftware/titanium-error-page';
import '../shared/code-block';
import '../shared/story-header';
import '@api-viewer/docs';

@customElement('titanium-error-page-demo')
export class TitaniumErrorPageDemoElement extends LitElement {
  static styles = [h1, h2, h3, h5, p, StoryStyles, css``];

  #defaultStory() {
    return html`
      <div>
        <titanium-error-page message="You can customize this message"></titanium-error-page>
      </div>
    `;
  }

  render() {
    return html`
      <story-header name="Titanium error page" packageName="titanium-error-page" tagName="titanium-error-page" klass="TitaniumErrorPageElement"></story-header>
      ${this.#defaultStory()}
      <code-block .snippet=${this.#defaultStory()}> </code-block>
      <api-docs src="./custom-elements.json" selected="titanium-error-page"></api-docs>
    `;
  }
}
