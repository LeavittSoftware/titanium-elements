import '../shared/story-header';

import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@material/web/divider/divider';
import '@api-viewer/docs';

import '@material/web/button/filled-tonal-button';

import { css, html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { p } from '@leavittsoftware/web/titanium/styles/styles';
import '@leavittsoftware/web/titanium/duration-input/duration-input';
import '@leavittsoftware/web/titanium/duration-input/filled-duration-input';
import '@leavittsoftware/web/titanium/duration-input/outlined-duration-input';
import { TitaniumFilledDurationInput } from '@leavittsoftware/web/titanium/duration-input/filled-duration-input';
import { TitaniumOutlinedDurationInput } from '@leavittsoftware/web/titanium/duration-input/outlined-duration-input';
import { DOMEvent } from '@leavittsoftware/web/titanium/types/dom-event';
import dayjs from 'dayjs/esm';
import duration from 'dayjs/esm/plugin/duration';
import { heroStyles } from '../styles/hero-styles';

import StoryStyles from '../styles/story-styles';

dayjs.extend(duration);

@customElement('titanium-duration-input-demo')
export class TitaniumDurationInputDemo extends LitElement {
  @state() private accessor filledDuration: duration.Duration | null = dayjs.duration(14400);
  @state() private accessor outlinedDuration: duration.Duration | null = dayjs.duration(14400);

  @query('titanium-filled-duration-input') private accessor filledInput: TitaniumFilledDurationInput;
  @query('titanium-outlined-duration-input') private accessor outlinedInput: TitaniumOutlinedDurationInput;

  static styles = [
    StoryStyles,
    heroStyles,
    p,
    css`
      :host {
        display: grid;
      }

      main {
        display: grid;
        align-content: start;
      }

      div {
        background: var(--md-sys-color-surface-container-low);
        border-radius: 24px;
        padding: 24px;

        &:not(:first-of-type) {
          margin-top: 24px;
        }
      }

      titanium-filled-duration-input,
      titanium-outlined-duration-input {
        width: 100%;
        margin-bottom: 24px;
      }

      h1 {
        margin-bottom: 12px;
      }

      section[buttons] {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 12px;
      }
    `,
  ];

  render() {
    return html`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium duration input" level1Href="/titanium-duration-input" sticky-top> </leavitt-app-navigation-header>

          <leavitt-app-width-limiter max-width="1000px">
            <deprecation-notice>
              <md-icon>warning</md-icon>
              <p>
                <kbd>titanium-duration-input</kbd> is deprecated. Use <kbd>titanium-filled-duration-input</kbd> or
                <kbd>titanium-outlined-duration-input</kbd> instead (shown below).
              </p>
            </deprecation-notice>
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

            <api-docs src="./custom-elements.json" selected="titanium-filled-duration-input"></api-docs>

            <md-divider></md-divider>

            <story-header name="Titanium outlined duration input" className="TitaniumOutlinedDurationInput"></story-header>

            <div>
              <h1>Outlined duration input</h1>

              <titanium-outlined-duration-input
                required
                label="Outlined Duration"
                .duration=${this.outlinedDuration}
                @change=${(e: DOMEvent<TitaniumOutlinedDurationInput>) => {
                  this.outlinedDuration = e.target.duration;
                }}
              ></titanium-outlined-duration-input>

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

            <div>
              <h1>With different durations</h1>
              <titanium-outlined-duration-input label="1 hour" .duration=${dayjs.duration(3600)}></titanium-outlined-duration-input>
              <titanium-outlined-duration-input label="30 minutes" .duration=${dayjs.duration(1800)}></titanium-outlined-duration-input>
              <titanium-outlined-duration-input label="2 hours 30 min" .duration=${dayjs.duration(9000)}></titanium-outlined-duration-input>
            </div>

            <api-docs src="./custom-elements.json" selected="titanium-outlined-duration-input"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `;
  }
}
