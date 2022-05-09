import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { h1, h2, h3, h5, p } from '@leavittsoftware/titanium-styles';

import StoryStyles from '../styles/story-styles';

import '@leavittsoftware/titanium-card';
import '@leavittsoftware/titanium-access-denied-page';
import '../shared/code-block';
import '../shared/story-header';

@customElement('titanium-access-denied-page-demo')
export class TitaniumAccessDeniedDemoElement extends LitElement {
  static styles = [h1, h2, h3, h5, p, StoryStyles, css``];

  #defaultStory() {
    return html`
      <div>
        <titanium-access-denied-page message="You can customize this message"></titanium-access-denied-page>
      </div>
    `;
  }

  render() {
    return html`
      <story-header name="Titanium access denied page" tagName="titanium-access-denied-page" klass="TitaniumAccessDeniedPageElement"></story-header>
      ${this.#defaultStory()}
      <code-block .snippet=${this.#defaultStory()}> </code-block>
    `;
  }
}
