import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { h1, h2, h3, h5, p } from '@leavittsoftware/titanium-styles';
import StoryStyles from '../styles/story-styles';
import '@leavittsoftware/titanium-card';
import '@leavittsoftware/profile-picture';
import '../shared/code-block';
import '../shared/story-header';
import '@api-viewer/docs';

@customElement('profile-picture-demo')
export class ProfilePictureDemoElement extends LitElement {
  static styles = [h1, h2, h3, h5, p, StoryStyles, css``];

  #defaultStory() {
    return html`
      <div>
        <h1>Default</h1>
        <p>Default profile picture styles</p>
        <profile-picture personId="915608"></profile-picture>
      </div>
    `;
  }

  #squareStory() {
    return html`
      <div>
        <h1>Square</h1>
        <p>Square profile picture styles</p>
        <profile-picture personId="915608" shape="square"></profile-picture>
      </div>
    `;
  }

  #sizesStory() {
    return html`
      <div>
        <h1>Sizes</h1>
        <p>Sizes include 32, 64, 128, 256, and 512px</p>
        <profile-picture personId="915608" size="32"></profile-picture>
        <profile-picture personId="915608" size="64"></profile-picture>
        <profile-picture personId="915608" size="128"></profile-picture>
        <profile-picture personId="915608" size="256"></profile-picture>
      </div>
    `;
  }

  render() {
    return html`
      <story-header name="Profile picture" tagName="profile-picture" klass="ProfilePictureElement"></story-header>
      <titanium-card>
        ${this.#defaultStory()}
        <code-block .snippet=${this.#defaultStory()}> </code-block>
      </titanium-card>

      <titanium-card>
        ${this.#squareStory()}
        <code-block .snippet=${this.#squareStory()}> </code-block>
      </titanium-card>

      <titanium-card>
        ${this.#sizesStory()}
        <code-block .snippet=${this.#sizesStory()}> </code-block>
      </titanium-card>
      <api-docs src="./custom-elements.json" selected="profile-picture"></api-docs>
    `;
  }
}
