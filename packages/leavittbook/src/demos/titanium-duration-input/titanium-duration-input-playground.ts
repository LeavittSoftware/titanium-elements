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
import { TitaniumDurationInput } from '@leavittsoftware/web/titanium/duration-input/duration-input';
import '@leavittsoftware/web/titanium/duration-input/duration-input';
import '@leavittsoftware/web/titanium/duration-input/filled-duration-input';
import { DOMEvent } from '@leavittsoftware/web/titanium/types/dom-event';
import { TitaniumFilledDurationInput } from '@leavittsoftware/web/titanium/duration-input/filled-duration-input';

/* playground-fold */
@customElement('titanium-duration-input-playground')
export class TitaniumDurationInputPlayground extends LitElement {
  @state() private accessor duration: duration.Duration | null = dayjs.duration(14400);
  @state() private accessor filledDuration: duration.Duration | null = dayjs.duration(14400);

  @query('titanium-duration-input[demo]') private accessor requiredInput: TitaniumDurationInput;
  @query('titanium-filled-duration-input') private accessor filledInput: TitaniumFilledDurationInput;

  static styles = [
    h1,
    p,
    css`
      :host {
        display: flex;
        flex-direction: column;
        margin: 24px 12px;
      }

      titanium-filled-duration-input {
        --md-filled-text-field-container-shape: 16px;
        --md-filled-text-field-active-indicator-height: 0;
        --md-filled-text-field-error-active-indicator-height: 0;
        --md-filled-text-field-hover-active-indicator-height: 0;
        --md-filled-text-field-focus-active-indicator-height: 0;
        --md-filled-text-field-disabled-active-indicator-height: 0;
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
      <h1>Default</h1>
      <div>
        <titanium-duration-input
          label="Duration"
          helperPersistent
          .duration=${this.duration}
          outlined
          @duration-change=${(event: DOMEvent<TitaniumDurationInput>) => {
            this.duration = event.target.duration;
          }}
        ></titanium-duration-input>
        <p>Duration is: ${this.duration ? html`${this.duration.asSeconds()} seconds` : String(this.duration)}</p>
      </div>

      <h1>Demo</h1>
      <div>
        <titanium-duration-input demo required validationMessage="This duration is required" label="Duration" helperPersistent outlined
          ><md-icon slot="leading-icon"> timer </md-icon>
          <md-icon slot="trailing-icon"> timer </md-icon>
        </titanium-duration-input>
        <br />
        <section buttons>
          <md-outlined-button @click=${() => this.requiredInput.reset()}>Reset</md-outlined-button>
          <md-outlined-button @click=${() => this.requiredInput.reportValidity()}>Report validity</md-outlined-button>
          <md-outlined-button @click=${() => (this.requiredInput.required = !this.requiredInput.required)}>Toggle required</md-outlined-button>
          <md-outlined-button @click=${() => console.log(this.requiredInput.checkValidity())}>Check validity</md-outlined-button>
        </section>
      </div>

      <h1>Filled</h1>
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
