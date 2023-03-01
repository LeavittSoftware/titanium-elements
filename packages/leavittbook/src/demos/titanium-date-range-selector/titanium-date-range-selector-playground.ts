/* playground-fold */
import { LitElement, html, css } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/titanium-styles';
import '@material/mwc-switch';
import '@material/mwc-formfield';
import '@material/mwc-button';
/* playground-fold-end */

import '@leavittsoftware/titanium-date-range-selector';
import { DateRanges, TitaniumDateRangeSelector } from '@leavittsoftware/titanium-date-range-selector/lib/titanium-date-range-selector';
import dayjs from 'dayjs/esm';

/* playground-fold */
@customElement('titanium-date-range-selector-playground')
export class TitaniumDateRangePlaygroundElement extends LitElement {
  @query('titanium-date-range-selector[events]') protected eventsDemoInput!: TitaniumDateRangeSelector;
  @query('titanium-date-range-selectore[layout-demo]') protected layoutInput!: TitaniumDateRangeSelector;

  @state() protected startDate: string = '2020-01-02';
  @state() protected endDate: string = '2020-01-04';
  @state() protected showLayoutInput: boolean = false;
  @state() eventFired: boolean = false;

  static styles = [
    h1,
    p,
    css`
      :host {
        display: flex;
        flex-direction: column;
        --mdc-icon-font: 'Material Icons Outlined';
        margin: 24px 12px;
      }

      div {
        border: 1px solid var(--app-border-color);
        padding: 24px;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin: 24px 0 36px 0;
      }

      [row] {
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      [event-text],
      titanium-date-range-selector,
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
        <titanium-date-range-selector
          events
          .startDate=${this.startDate}
          .endDate=${this.endDate}
          @date-range-changed=${() => {
            this.eventFired = true;
            setTimeout(() => (this.eventFired = false), 1000);
          }}
        ></titanium-date-range-selector>
        <span event-text ?event-fired=${this.eventFired}>date-range-changed</span>
        <mwc-button
          raised
          @click=${() => {
            this.startDate = '';
            this.endDate = '';
          }}
          >Bind to ''</mwc-button
        >
        <mwc-button
          raised
          @click=${() => {
            this.eventsDemoInput.reset();
          }}
          >reset()</mwc-button
        >
      </div>

      <h1>Default</h1>
      <p>Examples using default, range, startDate, and endDate</p>
      <div>
        <titanium-date-range-selector label="Created date"></titanium-date-range-selector>
        <titanium-date-range-selector range="thisWeek"></titanium-date-range-selector>
        <titanium-date-range-selector startDate=${dayjs().format('YYYY-MM-DD')} endDate=${dayjs().format('YYYY-MM-DD')}></titanium-date-range-selector>
        <titanium-date-range-selector endDate="2022-05-17"></titanium-date-range-selector>
        <titanium-date-range-selector
          label="Custom override"
          .customDateRanges=${new Map([...DateRanges, ['allTime', { name: 'All time, but different', startDate: '', endDate: '', icon: 'dashboard' }]])}
        ></titanium-date-range-selector>
        <titanium-date-range-selector
          label="Completely custom items"
          range="lastWeekend"
          .customDateRanges=${new Map([
            [
              'lastWeekend',
              {
                name: 'Last weekend',
                startDate: dayjs().subtract(1, 'week').endOf('week').subtract(1, 'day').format('YYYY-MM-DD'),
                endDate: dayjs().startOf('week').format('YYYY-MM-DD'),
                icon: 'weekend',
              },
            ],
            ['allTime', { name: 'All time, but different', startDate: '', endDate: '', icon: 'dashboard' }],
          ])}
        ></titanium-date-range-selector>
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
          <titanium-date-range-selector layout-demo label="Reporting date"></titanium-date-range-selector>
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
