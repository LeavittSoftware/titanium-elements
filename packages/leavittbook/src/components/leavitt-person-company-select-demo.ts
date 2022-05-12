import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { h1, h2, h3, h5, p } from '@leavittsoftware/titanium-styles';

import StoryStyles from '../styles/story-styles';
import api3UserService from '../services/api3-user-service.js';

import '@leavittsoftware/titanium-card';
import '@leavittsoftware/leavitt-elements/lib/leavitt-person-company-select';
import '../shared/code-block';
import '../shared/story-header';

@customElement('leavitt-person-company-select-demo')
export class LeavittPersonCompanySelectDemoElement extends LitElement {
  static styles = [h1, h2, h3, h5, p, StoryStyles, css``];

  #defaultStory() {
    return html`
      <div>
        <h1>Default</h1>
        <p>Default select styles</p>
        <leavitt-person-company-select
          label="Leavitt person or company"
          required
          .apiService=${api3UserService}
          validationMessage="Select a person or company"
        ></leavitt-person-company-select>
      </div>
    `;
  }

  render() {
    return html`
      <story-header name="Leavitt person company select" tagName="leavitt-person-company-select" klass="LeavittPersonCompanySelectElement"></story-header>
      <titanium-card>
        ${this.#defaultStory()}
        <code-block .snippet=${this.#defaultStory()}> </code-block>
      </titanium-card>
    `;
  }
}
