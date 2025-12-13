/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
import '@leavittsoftware/web/leavitt/profile-picture/profile-picture';

import '@material/web/button/outlined-button';
import dayjs from 'dayjs/esm';
import duration from 'dayjs/esm/plugin/duration';
dayjs.extend(duration);

/* playground-fold-end */
import '@leavittsoftware/web/titanium/duration-input/duration-input';
import '@leavittsoftware/web/titanium/duration-input/filled-duration-input';
import '@leavittsoftware/web/titanium/duration-input/outlined-duration-input';
import { TitaniumDurationInput } from '@leavittsoftware/web/titanium/duration-input/duration-input';
import { TitaniumFilledDurationInput } from '@leavittsoftware/web/titanium/duration-input/filled-duration-input';
import { TitaniumOutlinedDurationInput } from '@leavittsoftware/web/titanium/duration-input/outlined-duration-input';
import { DOMEvent } from '@leavittsoftware/web/titanium/types/dom-event';

/* playground-fold */
@customElement('titanium-duration-input-playground')
export class TitaniumDurationInputPlayground extends LitElement {
  @state() private accessor duration: duration.Duration | null = dayjs.duration(14400);
  @state() private accessor filledDuration: duration.Duration | null = dayjs.duration(14400);
  @state() private accessor outlinedDuration: duration.Duration | null = dayjs.duration(14400);

  @query('titanium-duration-input') private accessor input: TitaniumDurationInput;
  @query('titanium-filled-duration-input') private accessor filledInput: TitaniumFilledDurationInput;
  @query('titanium-outlined-duration-input') private accessor outlinedInput: TitaniumOutlinedDurationInput;

  static styles = [
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

      p {
        margin-top: 24px;
      }
    `,
  ];

  render() {
    /* playground-fold-end */
    return html`
      <h1>Titanium duration input (deprecated)</h1>
      <div>
        <titanium-duration-input
          .duration=${this.duration}
          required
          validationMessage="This duration is required"
          label="Duration"
          @duration-change=${(event: DOMEvent<TitaniumFilledDurationInput>) => {
            this.duration = event.target.duration;
          }}
        ></titanium-duration-input>
        <p>Duration is: ${this.duration ? html`${this.duration.asSeconds()} seconds` : String(this.duration)}</p>
        <br />
        <section buttons>
          <md-outlined-button @click=${() => this.input.reset()}>Reset</md-outlined-button>
          <md-outlined-button @click=${() => this.input.reportValidity()}>Report validity</md-outlined-button>
          <md-outlined-button @click=${() => (this.input.required = !this.input.required)}>Toggle required</md-outlined-button>
          <md-outlined-button @click=${() => console.log(this.input.checkValidity())}>Check validity</md-outlined-button>
        </section>
      </div>

      <h1>Outlined duration input</h1>
      <div>
        <titanium-outlined-duration-input
          .duration=${this.outlinedDuration}
          required
          validationMessage="This duration is required"
          label="Duration"
          @duration-change=${(event: DOMEvent<TitaniumFilledDurationInput>) => {
            this.outlinedDuration = event.target.duration;
          }}
        ></titanium-outlined-duration-input>
        <p>Duration is: ${this.outlinedDuration ? html`${this.outlinedDuration.asSeconds()} seconds` : String(this.outlinedDuration)}</p>
        <br />
        <section buttons>
          <md-outlined-button @click=${() => this.outlinedInput.reset()}>Reset</md-outlined-button>
          <md-outlined-button @click=${() => this.outlinedInput.reportValidity()}>Report validity</md-outlined-button>
          <md-outlined-button @click=${() => (this.outlinedInput.required = !this.outlinedInput.required)}>Toggle required</md-outlined-button>
          <md-outlined-button @click=${() => console.log(this.outlinedInput.checkValidity())}>Check validity</md-outlined-button>
        </section>
      </div>

      <h1>Filled duration input</h1>
      <div>
        <titanium-filled-duration-input
          .duration=${this.filledDuration}
          required
          validationMessage="This duration is required"
          label="Duration"
          @duration-change=${(event: DOMEvent<TitaniumFilledDurationInput>) => {
            this.filledDuration = event.target.duration;
          }}
        ></titanium-filled-duration-input>
        <p>Duration is: ${this.filledDuration ? html`${this.filledDuration.asSeconds()} seconds` : String(this.filledDuration)}</p>
        <br />
        <section buttons>
          <md-outlined-button @click=${() => this.filledInput.reset()}>Reset</md-outlined-button>
          <md-outlined-button @click=${() => this.filledInput.reportValidity()}>Report validity</md-outlined-button>
          <md-outlined-button @click=${() => (this.filledInput.required = !this.filledInput.required)}>Toggle required</md-outlined-button>
          <md-outlined-button @click=${() => console.log(this.filledInput.checkValidity())}>Check validity</md-outlined-button>
        </section>
      </div>
    `;
  }
}
