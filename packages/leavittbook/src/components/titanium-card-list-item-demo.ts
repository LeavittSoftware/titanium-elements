import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { h1, h2, h3, h5, p } from '@leavittsoftware/titanium-styles';

import StoryStyles from '../styles/story-styles';

import '@leavittsoftware/titanium-card';
import '@material/mwc-icon';
import '@leavittsoftware/titanium-card/lib/titanium-card-list-item';
import '../shared/code-block';
import '../shared/story-header';
import '@api-viewer/docs';

@customElement('titanium-card-list-item-demo')
export class TitaniumCardListItemDemoElement extends LitElement {
  static styles = [h1, h2, h3, h5, p, StoryStyles, css``];

  #defaultStory() {
    return html`
      <div>
        <h1>Default</h1>
        <p>Default card list item</p>
        <titanium-card-list-item title="Default">
          <div>Default List Item</div>
          <div spacer></div>
          <mwc-icon>navigate_next</mwc-icon>
        </titanium-card-list-item>
      </div>
    `;
  }

  #disabledStory() {
    return html`
      <div>
        <h1>Disabled</h1>
        <p>Disabled card list item</p>
        <titanium-card-list-item title="Disabled" disabled>
          <div>Disabled List Item</div>
          <div spacer></div>
          <mwc-icon>navigate_next</mwc-icon>
        </titanium-card-list-item>
      </div>
    `;
  }

  render() {
    return html`
      <story-header
        name="Titanium card list item"
        packageName="titanium-card"
        packageName="titanium-card"
        tagName="titanium-card-list-item"
        klass="TitaniumCardListItemElement"
      ></story-header>
      <titanium-card>
        ${this.#defaultStory()}
        <code-block .snippet=${this.#defaultStory()}> </code-block>
      </titanium-card>
      <titanium-card>
        ${this.#disabledStory()}
        <code-block .snippet=${this.#disabledStory()}> </code-block>
      </titanium-card>
      <api-docs src="./custom-elements.json" selected="titanium-card-list-item"></api-docs>
    `;
  }
}
