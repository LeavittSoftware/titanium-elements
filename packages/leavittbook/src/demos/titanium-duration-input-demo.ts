import '../shared/story-header';

import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@api-viewer/docs';

import '@material/web/button/filled-tonal-button';

import { css, html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import '@leavittsoftware/web/titanium/duration-input/filled-duration-input';
import { TitaniumFilledDurationInput } from '@leavittsoftware/web/titanium/duration-input/filled-duration-input';
import { DOMEvent } from '@leavittsoftware/web/titanium/types/dom-event';
import dayjs from 'dayjs/esm';
import duration from 'dayjs/esm/plugin/duration';

import StoryStyles from '../styles/story-styles';

dayjs.extend(duration);

@customElement('titanium-duration-input-demo')
export class TitaniumDurationInputDemo extends LitElement {
  @state() private accessor filledDuration: duration.Duration | null = dayjs.duration(14400);

  @query('titanium-filled-duration-input[required]') private accessor filledInput!: TitaniumFilledDurationInput;

  static styles = [
    StoryStyles,
    css`
      titanium-filled-duration-input {
        width: 100%;
        margin-bottom: 24px;
      }
    `,
  ];

  render() {
    return html`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium duration input" level1Href="/titanium-duration-input" sticky-top> </leavitt-app-navigation-header>

          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Titanium filled duration input" className="TitaniumFilledDurationInput"></story-header>

            <div>
              <h1>Filled duration input</h1>

              <titanium-filled-duration-input
                required
                label="Filled Duration"
                .duration=${this.filledDuration}
                @change=${(e: DOMEvent<TitaniumFilledDurationInput>) => {
                  this.filledDuration = e.target.duration;
                }}
              ></titanium-filled-duration-input>
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

            <div>
              <h1>With different durations</h1>
              <titanium-filled-duration-input label="1 hour" .duration=${dayjs.duration(3600)}></titanium-filled-duration-input>
              <titanium-filled-duration-input label="30 minutes" .duration=${dayjs.duration(1800)}></titanium-filled-duration-input>
              <titanium-filled-duration-input label="2 hours 30 min" .duration=${dayjs.duration(9000)}></titanium-filled-duration-input>
            </div>

            <api-docs src="./custom-elements.json" selected="titanium-filled-duration-input"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `;
  }
}
