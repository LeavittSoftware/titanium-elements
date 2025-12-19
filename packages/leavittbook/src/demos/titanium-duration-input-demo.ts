import '../shared/story-header';

import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@api-viewer/docs';

import '@material/web/button/filled-tonal-button';

import { css, html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { p } from '@leavittsoftware/web/titanium/styles/styles';
import '@leavittsoftware/web/titanium/duration-input/duration-input';
import '@leavittsoftware/web/titanium/duration-input/filled-duration-input';
import '@leavittsoftware/web/titanium/duration-input/outlined-duration-input';
import { TitaniumDurationInput } from '@leavittsoftware/web/titanium/duration-input/duration-input';
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
  @state() private accessor duration: duration.Duration | null = dayjs.duration(14400);
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
        margin-bottom: 48px;

        &:last-of-type {
          margin-bottom: 0;
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
            <story-header name="Titanium duration input" className="TitaniumDurationInput"></story-header>
            <deprecation-notice>
              <md-icon>warning</md-icon>
              <p>
                <kbd>titanium-duration-input</kbd> is deprecated. Use <kbd>titanium-filled-duration-input</kbd> or
                <kbd>titanium-outlined-duration-input</kbd> instead (shown below).
              </p>
            </deprecation-notice>
            <div>
              <h1>Basic duration inputs</h1>

              <titanium-filled-duration-input
                label="Filled Duration"
                .value=${this.filledDuration}
                @change=${(e: DOMEvent<TitaniumFilledDurationInput>) => {
                  this.filledDuration = e.target.value;
                }}
              ></titanium-filled-duration-input>
              <br />

              <titanium-outlined-duration-input
                label="Outlined Duration"
                .value=${this.outlinedDuration}
                @change=${(e: DOMEvent<TitaniumOutlinedDurationInput>) => {
                  this.outlinedDuration = e.target.value;
                }}
              ></titanium-outlined-duration-input>

              <section buttons>
                <md-filled-tonal-button
                  @click=${() => {
                    this.filledInput.reset();
                    this.outlinedInput.reset();
                  }}
                  >Reset</md-filled-tonal-button
                >
                <md-filled-tonal-button
                  @click=${() => {
                    this.filledInput.focus();
                    this.outlinedInput.focus();
                  }}
                  >Focus</md-filled-tonal-button
                >
                <md-filled-tonal-button
                  @click=${() => {
                    this.filledInput.reportValidity();
                    this.outlinedInput.reportValidity();
                  }}
                  >Report validity</md-filled-tonal-button
                >
              </section>
            </div>

            <div>
              <h1>With different durations</h1>
              <titanium-outlined-duration-input label="1 hour" .value=${dayjs.duration(3600)}></titanium-outlined-duration-input>
              <titanium-outlined-duration-input label="30 minutes" .value=${dayjs.duration(1800)}></titanium-outlined-duration-input>
              <titanium-outlined-duration-input label="2 hours 30 min" .value=${dayjs.duration(9000)}></titanium-outlined-duration-input>
            </div>

            <api-docs src="./custom-elements.json" selected="titanium-filled-duration-input"></api-docs>
            <api-docs src="./custom-elements.json" selected="titanium-outlined-duration-input"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `;
  }
}
