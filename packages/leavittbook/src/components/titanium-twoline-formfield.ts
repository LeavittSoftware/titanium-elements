import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { h1, h2, h3, h5, p } from '@leavittsoftware/titanium-styles';
import { DOMEvent } from '@leavittsoftware/leavitt-elements/lib/dom-event';
import { Checkbox } from '@material/mwc-checkbox';

import StoryStyles from '../styles/story-styles';

import '@leavittsoftware/titanium-card';
import '@leavittsoftware/titanium-twoline-formfield';
import '@material/mwc-checkbox';
import '../shared/code-block';
import '../shared/story-header';

@customElement('titanium-twoline-formfield-demo')
export class TitaniumTwoLineFormFieldDemoElement extends LitElement {
  static styles = [h1, h2, h3, h5, p, StoryStyles, css``];

  #defaultStory() {
    return html`
      <div>
        <h1>Default</h1>
        <p>Default twoline formfield styles</p>
        <titanium-twoline-formfield label="Share template" description="Share this template with your friends">
          <mwc-checkbox checked @change="${(e: DOMEvent<Checkbox>) => console.log(e.target.checked)}}"> </mwc-checkbox>
        </titanium-twoline-formfield>
      </div>
    `;
  }

  render() {
    return html`
      <story-header name="Titanium twoline formfield" tagName="titanium-twoline-formfield" klass="TitaniumTwoLineFormFieldElement"></story-header>
      <titanium-card>
        ${this.#defaultStory()}
        <code-block snippet=${this.#defaultStory().strings.join()}> </code-block>
      </titanium-card>
    `;
  }
}
