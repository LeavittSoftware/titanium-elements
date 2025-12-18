import '../shared/story-header';

import '@api-viewer/docs';
import '@material/web/button/outlined-button';

import { css, html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
import '@leavittsoftware/web/titanium/duration-input/duration-input';
import '@leavittsoftware/web/titanium/duration-input/filled-duration-input';
import '@leavittsoftware/web/titanium/duration-input/outlined-duration-input';
import { TitaniumDurationInput } from '@leavittsoftware/web/titanium/duration-input/duration-input';
import { TitaniumFilledDurationInput } from '@leavittsoftware/web/titanium/duration-input/filled-duration-input';
import { TitaniumOutlinedDurationInput } from '@leavittsoftware/web/titanium/duration-input/outlined-duration-input';
import { DOMEvent } from '@leavittsoftware/web/titanium/types/dom-event';
import dayjs from 'dayjs/esm';
import duration from 'dayjs/esm/plugin/duration';
import StoryStyles from '../styles/story-styles';

dayjs.extend(duration);

@customElement('titanium-duration-input-demo')
export class TitaniumDurationInputDemo extends LitElement {
  @state() private accessor duration: duration.Duration | null = dayjs.duration(14400);
  @state() private accessor filledDuration: duration.Duration | null = dayjs.duration(14400);
  @state() private accessor outlinedDuration: duration.Duration | null = dayjs.duration(14400);

  @query('titanium-duration-input') private accessor input: TitaniumDurationInput;
  @query('titanium-filled-duration-input') private accessor filledInput: TitaniumFilledDurationInput;
  @query('titanium-outlined-duration-input') private accessor outlinedInput: TitaniumOutlinedDurationInput;

  static styles = [
    StoryStyles,
    h1,
    p,
    css`
      :host {
        display: flex;
        flex-direction: column;
        margin: 24px 12px;
      }

      div {
        border: 1px solid var(--md-sys-color-outline);
        padding: 24px;
        border-radius: 8px;
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin: 24px 0 36px 0;
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
      <story-header name="Titanium duration input" className="TitaniumDurationInput"></story-header>
      <h1>Basic duration inputs</h1>
      <p>Duration input components with different styles</p>

      <div>
        <titanium-duration-input
          label="Duration"
          .value=${this.duration}
          @change=${(e: DOMEvent<TitaniumDurationInput>) => {
            this.duration = e.target.value;
          }}
        ></titanium-duration-input>

        <titanium-filled-duration-input
          label="Filled Duration"
          .value=${this.filledDuration}
          @change=${(e: DOMEvent<TitaniumFilledDurationInput>) => {
            this.filledDuration = e.target.value;
          }}
        ></titanium-filled-duration-input>

        <titanium-outlined-duration-input
          label="Outlined Duration"
          .value=${this.outlinedDuration}
          @change=${(e: DOMEvent<TitaniumOutlinedDurationInput>) => {
            this.outlinedDuration = e.target.value;
          }}
        ></titanium-outlined-duration-input>

        <section buttons>
          <md-outlined-button @click=${() => this.input.reset()}>Reset</md-outlined-button>
          <md-outlined-button @click=${() => this.input.focus()}>Focus</md-outlined-button>
          <md-outlined-button @click=${() => this.input.reportValidity()}>Report validity</md-outlined-button>
        </section>
      </div>

      <h1>With different durations</h1>
      <div>
        <titanium-duration-input label="1 hour" .value=${dayjs.duration(3600)}></titanium-duration-input>
        <titanium-duration-input label="30 minutes" .value=${dayjs.duration(1800)}></titanium-duration-input>
        <titanium-duration-input label="2 hours 30 min" .value=${dayjs.duration(9000)}></titanium-duration-input>
      </div>

      <api-docs src="./custom-elements.json" selected="titanium-duration-input"></api-docs>
    `;
  }
}
