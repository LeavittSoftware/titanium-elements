import '../shared/story-header';

import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@material/web/divider/divider';
import '@api-viewer/docs';
import '@material/web/button/filled-tonal-button';

import { html, LitElement } from 'lit';
import { customElement, query, queryAll } from 'lit/decorators.js';
import '@leavittsoftware/web/titanium/youtube-input/youtube-input';
import { TitaniumYouTubeInput } from '@leavittsoftware/web/titanium/youtube-input/youtube-input';
import { DOMEvent } from '@leavittsoftware/web/titanium/types/dom-event';

import StoryStyles from '../styles/story-styles';

@customElement('titanium-youtube-input-demo')
export class TitaniumYoutubeInputDemo extends LitElement {
  @queryAll('titanium-youtube-input') protected accessor inputs!: NodeListOf<TitaniumYouTubeInput>;
  @query('titanium-youtube-input[required]') protected accessor requiredInput: TitaniumYouTubeInput;

  static styles = [StoryStyles];

  render() {
    return html`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium youtube input" level1Href="/titanium-youtube-input" sticky-top> </leavitt-app-navigation-header>

          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Titanium youtube input" className="TitaniumYoutubeInput"></story-header>

            <div>
              <h1>Default</h1>
              <p>YouTube video input with URL validation</p>
              <titanium-youtube-input label="Video" value="SYmmXDTHx6Q"></titanium-youtube-input>
            </div>

            <div>
              <h1>Disabled</h1>
              <p>Disabled YouTube input</p>
              <titanium-youtube-input disabled label="Video" value="SYmmXDTHx6Q"></titanium-youtube-input>
            </div>

            <div>
              <h1>Methods</h1>
              <p>Demonstrates public methods like reset and reportValidity</p>
              <titanium-youtube-input
                required
                label="Video"
                @input=${(e: DOMEvent<TitaniumYouTubeInput>) => console.log(e.target.value)}
              ></titanium-youtube-input>
              <br />
              <section buttons>
                <md-filled-tonal-button @click=${() => this.requiredInput.reset()}>Reset</md-filled-tonal-button>
                <md-filled-tonal-button @click=${() => this.requiredInput.reportValidity()}>Report validity</md-filled-tonal-button>
              </section>
            </div>

            <api-docs src="./custom-elements.json" selected="titanium-youtube-input"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `;
  }
}
