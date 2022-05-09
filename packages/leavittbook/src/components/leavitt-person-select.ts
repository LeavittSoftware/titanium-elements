import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { h1, h2, h3, h5, p } from '@leavittsoftware/titanium-styles';

import StoryStyles from '../styles/story-styles';
import api3UserService from '../services/api3-user-service.js';

import '@leavittsoftware/titanium-card';
import '@leavittsoftware/leavitt-elements/lib/leavitt-person-select';
import '../shared/code-block';
import '../shared/story-header';

@customElement('leavitt-person-select-demo')
export class LeavittPersonSelectDemoElement extends LitElement {
  static styles = [h1, h2, h3, h5, p, StoryStyles, css``];

  #defaultStory() {
    return html`
      <div>
        <h1>Default</h1>
        <p>Default select styles</p>
        <leavitt-person-select
          label="Leavitt person"
          required
          .apiService=${api3UserService}
          helper="Try searching for and selecting a person"
          validationMessage="Select a person"
        ></leavitt-person-select>
      </div>
    `;
  }

  render() {
    return html`
      <story-header name="Leavitt person select" tagName="leavitt-person-select" klass="LeavittPersonSelectElement"></story-header>
      <titanium-card>
        ${this.#defaultStory()}
        <code-block snippet=${this.#defaultStory().strings.join()}> </code-block>
      </titanium-card>
    `;
  }
}
