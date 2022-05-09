import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { h1, h2, h3, h5, p } from '@leavittsoftware/titanium-styles';
import StoryStyles from '../styles/story-styles';
import '@leavittsoftware/titanium-card';
import '@leavittsoftware/titanium-button';
import '../shared/code-block';
import '../shared/story-header';

@customElement('titanium-button-demo')
export class TitaniumButtonDemoElement extends LitElement {
  static styles = [h1, h2, h3, h5, p, StoryStyles, css``];

  #defaultStory() {
    return html`
      <div>
        <h1>Default</h1>
        <p>Default button styles</p>
        <titanium-button>Default</titanium-button>
        <titanium-button disabled>Disabled</titanium-button>
        <titanium-button dense>Dense</titanium-button>
        <titanium-button shaped>Shaped</titanium-button>
      </div>
    `;
  }

  #raisedStory() {
    return html`
      <div>
        <h1>Raised</h1>
        <p>Outlined button styles</p>
        <titanium-button raised>Raised</titanium-button>
        <titanium-button raised disabled>Disabled</titanium-button>
        <titanium-button raised dense>Dense</titanium-button>
        <titanium-button raised shaped>Shaped</titanium-button>
      </div>
    `;
  }

  #outlinedStory() {
    return html`
      <div>
        <h1>Outlined</h1>
        <p>Outlined button styles</p>
        <titanium-button outlined>Outlined</titanium-button>
        <titanium-button outlined disabled>Disabled</titanium-button>
        <titanium-button outlined dense>Dense</titanium-button>
        <titanium-button outlined shaped>Shaped</titanium-button>
      </div>
    `;
  }

  #unelevatedStory() {
    return html`
      <div>
        <h1>Unelevated</h1>
        <p>Unelevated button styles</p>
        <titanium-button unelevated>Unelevated</titanium-button>
        <titanium-button unelevated disabled>Disabled</titanium-button>
        <titanium-button unelevated dense>Dense</titanium-button>
        <titanium-button unelevated shaped>Shaped</titanium-button>
      </div>
    `;
  }

  render() {
    return html`
      <story-header name="Titanium button" tagName="titanium-button" klass="TitaniumButtonElement"></story-header>
      <titanium-card>
        ${this.#defaultStory()}
        <code-block .snippet=${this.#defaultStory()}> </code-block>
      </titanium-card>

      <titanium-card>
        ${this.#raisedStory()}
        <code-block .snippet=${this.#raisedStory()}> </code-block>
      </titanium-card>

      <titanium-card>
        ${this.#outlinedStory()}
        <code-block .snippet=${this.#outlinedStory()}> </code-block>
      </titanium-card>

      <titanium-card>
        ${this.#unelevatedStory()}
        <code-block .snippet=${this.#unelevatedStory()}> </code-block>
      </titanium-card>
    `;
  }
}
