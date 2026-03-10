import '../shared/story-header';

import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@material/web/divider/divider';
import '@material/web/icon/icon';
import '@api-viewer/docs';
import '@material/web/button/filled-tonal-button';

import { css, html, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import '@leavittsoftware/web/titanium/youtube-input/youtube-input';
import '@leavittsoftware/web/titanium/youtube-input/filled-youtube-input';
import { TitaniumYouTubeInput } from '@leavittsoftware/web/titanium/youtube-input/youtube-input';
import { TitaniumFilledYouTubeInput } from '@leavittsoftware/web/titanium/youtube-input/filled-youtube-input';
import { DOMEvent } from '@leavittsoftware/web/titanium/types/dom-event';

import StoryStyles from '../styles/story-styles';

@customElement('titanium-youtube-input-demo')
export class TitaniumYoutubeInputDemo extends LitElement {
  @query('titanium-filled-youtube-input') private accessor filledInput: TitaniumFilledYouTubeInput;
  @query('titanium-youtube-input[required]') private accessor outlinedInput: TitaniumYouTubeInput;

  static styles = [
    StoryStyles,
    css`
      titanium-filled-youtube-input,
      titanium-youtube-input {
        width: 100%;
        margin-bottom: 24px;
      }
    `,
  ];

  render() {
    return html`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium youtube input" level1Href="/titanium-youtube-input" sticky-top> </leavitt-app-navigation-header>

          <leavitt-app-width-limiter max-width="1000px">
            <deprecation-notice>
              <md-icon>warning</md-icon>
              <p><kbd>titanium-youtube-input</kbd> is deprecated. Use <kbd>titanium-filled-youtube-input</kbd> instead (shown below).</p>
            </deprecation-notice>
            <story-header name="Titanium filled youtube input" className="TitaniumFilledYouTubeInput"></story-header>

            <div>
              <h1>Filled youtube input</h1>
              <p>YouTube video input with URL validation</p>

              <titanium-filled-youtube-input
                required
                label="Video"
                value="SYmmXDTHx6Q"
                @input=${(e: DOMEvent<TitaniumFilledYouTubeInput>) => console.log(e.target.value)}
              ></titanium-filled-youtube-input>
              <br />

              <section buttons>
                <md-filled-tonal-button
                  @click=${() => {
                    this.filledInput.reset();
                  }}
                  >Reset</md-filled-tonal-button
                >
                <md-filled-tonal-button
                  @click=${() => {
                    this.filledInput.focus();
                  }}
                  >Focus</md-filled-tonal-button
                >
                <md-filled-tonal-button
                  @click=${() => {
                    this.filledInput.reportValidity();
                  }}
                  >Report validity</md-filled-tonal-button
                >
              </section>
            </div>

            <api-docs src="./custom-elements.json" selected="titanium-filled-youtube-input"></api-docs>

            <md-divider></md-divider>

            <story-header name="Titanium youtube input" className="TitaniumYouTubeInput"></story-header>

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
                <md-filled-tonal-button
                  @click=${() => {
                    this.outlinedInput.reset();
                  }}
                  >Reset</md-filled-tonal-button
                >
                <md-filled-tonal-button
                  @click=${() => {
                    this.outlinedInput.focus();
                  }}
                  >Focus</md-filled-tonal-button
                >
                <md-filled-tonal-button
                  @click=${() => {
                    this.outlinedInput.reportValidity();
                  }}
                  >Report validity</md-filled-tonal-button
                >
              </section>
            </div>

            <api-docs src="./custom-elements.json" selected="titanium-youtube-input"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `;
  }
}
