import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { h1, h2, h3, h5, p } from '@leavittsoftware/titanium-styles';
import { repeat } from 'lit/directives/repeat.js';
import StoryStyles from '../styles/story-styles';
import '@leavittsoftware/titanium-card';
import '@leavittsoftware/titanium-tab-control';
import '@leavittsoftware/titanium-tab-control/lib/titanium-tab-control-item';
import '@api-viewer/docs';

import '../shared/code-block';
import '../shared/story-header';

@customElement('titanium-tab-control-demo')
export class TitaniumTabControlDemoElement extends LitElement {
  static styles = [
    h1,
    h2,
    h3,
    h5,
    p,
    StoryStyles,
    css`
      [small-container] {
        width: 300px;
      }
    `,
  ];

  #defaultStory() {
    return html`
      <div>
        <h1>Default</h1>
        <p>Default tab control</p>
        <titanium-tab-control>
          <titanium-tab-control-item href="/titanium-tab-control/#1">One</titanium-tab-control-item>
          <titanium-tab-control-item href="/titanium-tab-control/#2">Two</titanium-tab-control-item>
        </titanium-tab-control>
      </div>
    `;
  }

  #scrollStory() {
    return html`
      <div small-container>
        <h1>Scrolling</h1>
        <p>Scrolling tab control</p>
        <titanium-tab-control>
          ${repeat(
            [...Array(20).keys()],
            i => i,
            i => html` <titanium-tab-control-item href="/titanium-tab-control/#${i}">${i}</titanium-tab-control-item> `
          )}
        </titanium-tab-control>
      </div>
    `;
  }

  render() {
    return html`
      <story-header name="Titanium tab control" tagName="titanium-tab-control" klass="TitaniumTabControlElement"></story-header>
      <titanium-card>
        ${this.#defaultStory()}
        <code-block .snippet=${this.#defaultStory()}> </code-block>
      </titanium-card>
      <titanium-card>
        ${this.#scrollStory()}
        <code-block .snippet=${this.#scrollStory()}> </code-block>
      </titanium-card>
      <api-docs src="./custom-elements.json" selected="titanium-tab-control"></api-docs>
    `;
  }
}
