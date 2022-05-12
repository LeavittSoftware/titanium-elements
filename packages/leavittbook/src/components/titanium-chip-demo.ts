import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { h1, h2, h3, h5, p } from '@leavittsoftware/titanium-styles';
import StoryStyles from '../styles/story-styles';
import '@leavittsoftware/titanium-card';
import '@leavittsoftware/titanium-chip';
import '../shared/code-block';
import '../shared/story-header';
import '@api-viewer/docs';
import '@material/mwc-icon';

@customElement('titanium-chip-demo')
export class TitaniumChipDemoElement extends LitElement {
  static styles = [h1, h2, h3, h5, p, StoryStyles, css``];

  #defaultStory() {
    return html`
      <div>
        <h1>Default</h1>
        <p>Examples using disabled, closeable, and readonly attribute</p>
        <titanium-chip label="Default"></titanium-chip>
        <titanium-chip disabled label="Disabled"></titanium-chip>
        <titanium-chip closeable label="Closeable"></titanium-chip>
        <titanium-chip readonly label="Readonly"></titanium-chip>
      </div>
    `;
  }

  #selectableStory() {
    return html`
      <div>
        <h1>Selectable</h1>
        <p>Chips can be selected with the selectable attribute. To create a selectable group please add a matching name attribute to each chip.</p>
        <div style="display:grid;grid-auto-flow:column;gap:8px;grid-auto-columns: min-content;">
          <titanium-chip name="PayWith" selectable label="Cash"> <mwc-icon slot="chip-icon">money</mwc-icon></titanium-chip>
          <titanium-chip name="PayWith" selectable label="Credit"> <mwc-icon slot="chip-icon">payment</mwc-icon></titanium-chip>
          <titanium-chip name="PayWith" selectable label="Check"> <mwc-icon slot="chip-icon">savings</mwc-icon></titanium-chip>
        </div>
      </div>
    `;
  }

  #imagesStory() {
    return html`
      <div>
        <h1>Images</h1>
        <p>Examples using the image src attribute as well as fallbackSrc</p>
        <titanium-chip label="Image" src="https://cdn.leavitt.com/user-771130-32.jpeg"></titanium-chip>
        <titanium-chip
          label="Fallback image"
          src="https://cdn.leavitt.com/user-77asd0-32.jpeg"
          fallbackSrc="https://www.leavitt.com/application/themes/lg/img/logo/leavitt-group-logo.svg"
        ></titanium-chip>
      </div>
    `;
  }

  #iconsStory() {
    return html`
      <div>
        <h1>Icons</h1>
        <p>Examples using the icon slot to display an mwc-icon inside a chip</p>
        <titanium-chip label="Offline"> <mwc-icon slot="chip-icon">offline_bolt</mwc-icon></titanium-chip>
        <titanium-chip label="Online"> <mwc-icon slot="chip-icon">bolt</mwc-icon></titanium-chip>
      </div>
    `;
  }

  render() {
    return html`
      <story-header name="Titanium chip" tagName="titanium-chip" klass="TitaniumChipElement"></story-header>
      <titanium-card>
        ${this.#defaultStory()}
        <code-block .snippet=${this.#defaultStory()}> </code-block>
      </titanium-card>

      <titanium-card>
        ${this.#imagesStory()}
        <code-block .snippet=${this.#imagesStory()}> </code-block>
      </titanium-card>

      <titanium-card>
        ${this.#iconsStory()}
        <code-block .snippet=${this.#iconsStory()}> </code-block>
      </titanium-card>

      <titanium-card>
        ${this.#selectableStory()}
        <code-block .snippet=${this.#selectableStory()}> </code-block>
      </titanium-card>

      <api-docs src="./custom-elements.json" selected="titanium-chip"></api-docs>
    `;
  }
}
