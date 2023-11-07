/* playground-fold */
import { LitElement, html, css } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
import '@material/web/button/text-button';

/* playground-fold-end */

import '@leavittsoftware/web/titanium/date-range-selector/date-range-selector';
import { TitaniumDateRangeSelector } from '@leavittsoftware/web/titanium/date-range-selector/date-range-selector';
import dayjs from 'dayjs/esm';
import { DateRanges } from '@leavittsoftware/web/titanium/date-range-selector/types/date-ranges';

/* playground-fold */
@customElement('titanium-date-range-selector-playground')
export class TitaniumDateRangePlaygroundElement extends LitElement {
  @query('titanium-date-range-selector[events]') protected eventsDemoInput!: TitaniumDateRangeSelector;

  @state() protected startDate: string = '2020-01-02';
  @state() protected endDate: string = '2020-01-04';
  @state() eventFired: boolean = false;

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
      md-text-button {
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
          @opening=${() => console.log('opening')}
          @closing=${() => console.log('closing')}
          events
          .startDate=${this.startDate}
          .endDate=${this.endDate}
          @date-range-changed=${() => {
            this.eventFired = true;
            setTimeout(() => (this.eventFired = false), 1000);
          }}
        ></titanium-date-range-selector>
        <span event-text ?event-fired=${this.eventFired}>date-range-changed</span>
        <section buttons>
          <md-text-button
            @click=${() => {
              this.startDate = '';
              this.endDate = '';
            }}
            >Bind to ''</md-text-button
          >
          <md-text-button @click=${() => this.eventsDemoInput.reset()}>reset()</md-text-button>
        </section>
      </div>

      <h1>Default</h1>
      <p>Examples using default, range, startDate, and endDate</p>
      <div>
        <titanium-date-range-selector
          style="width: 850px"
          startDate=${dayjs().format('YYYY-MM-DD')}
          endDate=${dayjs().format('YYYY-MM-DD')}
        ></titanium-date-range-selector>
        <titanium-date-range-selector label="Created date" style="width: 586px"></titanium-date-range-selector>
        <titanium-date-range-selector range="thisWeek" style="width: 512px"></titanium-date-range-selector>
        <titanium-date-range-selector range="thisWeek" style="width: 438px"></titanium-date-range-selector>
        <titanium-date-range-selector endDate="2022-05-17" style="width: 320px"></titanium-date-range-selector>
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

      <h1>Time</h1>
      <p>Examples using enable time</p>
      <div>
        <titanium-date-range-selector label="Created date" ?enableTime=${true}></titanium-date-range-selector>
      </div>
    `;
  }
}
