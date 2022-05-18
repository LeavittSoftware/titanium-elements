/* playground-fold */
import { LitElement, html, css } from 'lit';
import { customElement, query, state, queryAll } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/titanium-styles';
import '@material/mwc-switch';
import '@material/mwc-formfield';
import '@material/mwc-button';
/* playground-fold-end */

import '@leavittsoftware/leavitt-elements/lib/leavitt-date-range';
import { LeavittDateRangeElement } from '@leavittsoftware/leavitt-elements/lib/leavitt-date-range';
/* playground-fold */
@customElement('leavitt-date-range-playground')
export class LeavittDateRangePlaygroundElement extends LitElement {
  @query('leavitt-date-range[layout-demo]') private layoutInput!: LeavittDateRangeElement;
  @state() private showLayoutInput: boolean = false;
  @state() eventFired: boolean = false;
  @queryAll('leavitt-date-range:not([layout-demo])') private inputs!: NodeListOf<LeavittDateRangeElement>;

  async firstUpdated() {
    //Fix MWC floating label problem
    requestAnimationFrame(() => {
      Array.from(this.inputs).forEach(async o => {
        o.layout();
      });
    });
  }

  static styles = [
    h1,
    p,
    css`
      div {
        border: 1px solid var(--app-border-color);
        padding: 24px;
        border-radius: 8px;
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin: 24px 0 36px 0;
      }

      [row] {
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      [event-text],
      leavitt-date-range,
      mwc-button,
      mwc-formfield {
        margin: 10px;
      }

      [event-text] {
        opacity: 0;
      }

      @keyframes fade-in {
        0% {
          opacity: 0;
        }
        50% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }

      [event-fired] {
        animation: fade-in 1000ms;
      }

      [hidden] {
        display: none;
      }
    `,
  ];

  render() {
    /* playground-fold-end */
    return html`
      <h1>Events</h1>
      <p>Demonstrates when the date-range-changed event is fired</p>
      <div>
        <leavitt-date-range
          @date-range-changed=${() => {
            this.eventFired = true;
            setTimeout(() => (this.eventFired = false), 1000);
          }}
        ></leavitt-date-range>
        <span event-text ?event-fired=${this.eventFired}>date-range-changed</span>
      </div>

      <h1>Default</h1>
      <p>Examples using default, range, startDate, and endDate</p>
      <div>
        <leavitt-date-range></leavitt-date-range>
        <leavitt-date-range range="thisWeek"></leavitt-date-range>
        <leavitt-date-range startDate="2022-05-17"></leavitt-date-range>
        <leavitt-date-range endDate="2022-05-17"></leavitt-date-range>
      </div>

      <h1>Methods</h1>
      <p>Call layout() on date ranges that are initially hidden to float the label</p>
      <div>
        <mwc-formfield label="Show date range">
          <mwc-switch
            .selected=${this.showLayoutInput}
            @click=${() => {
              this.showLayoutInput = !this.showLayoutInput;
            }}
          ></mwc-switch>
        </mwc-formfield>

        <span row ?hidden=${!this.showLayoutInput}>
          <leavitt-date-range layout-demo></leavitt-date-range>
          <mwc-button
            raised
            @click=${() => {
              this.layoutInput.layout();
            }}
            >layout()</mwc-button
          >
          <mwc-button
            raised
            @click=${() => {
              this.layoutInput.reset();
            }}
            >reset()</mwc-button
          >
        </span>
      </div>
    `;
  }
}
