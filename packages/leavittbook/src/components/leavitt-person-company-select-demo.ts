/* eslint-disable @typescript-eslint/no-explicit-any */
import { LitElement, html, css } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { h1, h2, h3, h5, p } from '@leavittsoftware/titanium-styles';
import { LeavittPersonCompanySelectElement } from '@leavittsoftware/leavitt-elements/lib/leavitt-person-company-select';

import StoryStyles from '../styles/story-styles';
import api3UserService from '../services/api3-user-service.js';

import '@leavittsoftware/titanium-button';
import '@leavittsoftware/titanium-card';
import '@leavittsoftware/leavitt-elements/lib/leavitt-person-company-select';
import '../shared/code-block';
import '../shared/story-header';
import '@api-viewer/docs';

@customElement('leavitt-person-company-select-demo')
export class LeavittPersonCompanySelectDemoElement extends LitElement {
  @query('leavitt-person-company-select[id="1"]') defaultSelect!: LeavittPersonCompanySelectElement;

  static styles = [h1, h2, h3, h5, p, StoryStyles, css``];

  focus() {
    this.defaultSelect.focus();
  }

  reset() {
    this.defaultSelect.reset();
  }

  #defaultStory() {
    return html`
      <div>
        <h1>Default</h1>
        <p>Default select styles</p>
        <titanium-button raised @click=${this.focus}>Focus</titanium-button>
        <titanium-button raised @click=${this.reset}>Reset</titanium-button>
        <leavitt-person-company-select id="1" .apiService=${api3UserService}></leavitt-person-company-select>
      </div>
    `;
  }

  #requiredStory() {
    return html`
      <div>
        <h1>Required</h1>
        <p>Required select styles</p>
        <leavitt-person-company-select required .apiService=${api3UserService} validationMessage="Select a person or company"></leavitt-person-company-select>
      </div>
    `;
  }

  #shapedStory() {
    return html`
      <div>
        <h1>Shaped</h1>
        <p>Shaped select styles</p>
        <leavitt-person-company-select shaped .apiService=${api3UserService}></leavitt-person-company-select>
      </div>
    `;
  }

  #shallowStory() {
    return html`
      <div>
        <h1>Shallow</h1>
        <p>Shallow select styles</p>
        <leavitt-person-company-select shallow .apiService=${api3UserService}></leavitt-person-company-select>
      </div>
    `;
  }

  #preselectedStory() {
    return html`
      <div>
        <h1>Pre-selected</h1>
        <p>Pre-selected styles</p>
        <leavitt-person-company-select
          .apiService=${api3UserService}
          .selected=${{
            Name: 'Leavitt Group Enterprises',
            type: 'Company',
          } as any}
        ></leavitt-person-company-select>
      </div>
    `;
  }

  #disabledPreselectedStory() {
    return html`
      <div>
        <h1>Disabled pre-selected</h1>
        <p>Disabled pre-selected styles</p>
        <leavitt-person-company-select
          disabled
          .selected=${{
            Name: 'Leavitt Group Enterprises',
            type: 'Company',
          } as any}
          .apiService=${api3UserService}
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
      <titanium-card>
        ${this.#requiredStory()}
        <code-block .snippet=${this.#requiredStory()}> </code-block>
      </titanium-card>
      <titanium-card>
        ${this.#shapedStory()}
        <code-block .snippet=${this.#shapedStory()}> </code-block>
      </titanium-card>
      <titanium-card>
        ${this.#shallowStory()}
        <code-block .snippet=${this.#shallowStory()}> </code-block>
      </titanium-card>
      <titanium-card>
        ${this.#preselectedStory()}
        <code-block .snippet=${this.#preselectedStory()}> </code-block>
      </titanium-card>
      <titanium-card>
        ${this.#disabledPreselectedStory()}
        <code-block .snippet=${this.#disabledPreselectedStory()}> </code-block>
      </titanium-card>
      <api-docs src="./custom-elements.json" selected="leavitt-person-company-select"></api-docs>
    `;
  }
}
