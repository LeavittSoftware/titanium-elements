import '../shared/story-header';

import '@api-viewer/docs';
import '@material/web/button/text-button';

import { css, html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
import '@leavittsoftware/web/titanium/date-range-selector/date-range-selector';
import { TitaniumDateRangeSelector } from '@leavittsoftware/web/titanium/date-range-selector/date-range-selector';
import { DateRanges } from '@leavittsoftware/web/titanium/date-range-selector/types/date-ranges';
import dayjs from 'dayjs/esm';
import StoryStyles from '../styles/story-styles';

@customElement('titanium-date-range-selector-demo')
export class TitaniumDateRangeSelectorDemo extends LitElement {
  @query('titanium-date-range-selector[events]') protected accessor eventsDemoInput!: TitaniumDateRangeSelector;

  @state() protected accessor startDate: string = '2020-01-02';
  @state() protected accessor endDate: string = '2020-01-04';
  @state() protected accessor eventFired: boolean = false;

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
      [event-text][fired] {
        color: var(--md-sys-color-primary);
        font-weight: 500;
      }

      [event-text][fired] {
        color: var(--md-sys-color-error);
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
      <story-header name="Titanium date range selector" className="TitaniumDateRangeSelector"></story-header>
      <h1>Basic date range selector</h1>
      <p>Date range selector with preset ranges and custom date selection</p>

      <div>
        <titanium-date-range-selector
          events
          .startDate=${this.startDate}
          .endDate=${this.endDate}
          @date-range-changed=${(e: CustomEvent<{ startDate: string; endDate: string }>) => {
            this.startDate = e.detail.startDate;
            this.endDate = e.detail.endDate;
            this.eventFired = true;
            setTimeout(() => (this.eventFired = false), 1000);
          }}
        ></titanium-date-range-selector>

        <row>
          <p>Start: ${this.startDate} | End: ${this.endDate}</p>
        </row>

        <row>
          <event-text ?fired=${this.eventFired}>${this.eventFired ? 'Event fired!' : 'Waiting for event...'}</event-text>
        </row>

        <section buttons>
          <md-text-button
            @click=${() => {
              this.startDate = dayjs().subtract(7, 'days').format('YYYY-MM-DD');
              this.endDate = dayjs().format('YYYY-MM-DD');
            }}
            >Set to last 7 days</md-text-button
          >
          <md-text-button
            @click=${() => {
              this.startDate = dayjs().subtract(30, 'days').format('YYYY-MM-DD');
              this.endDate = dayjs().format('YYYY-MM-DD');
            }}
            >Set to last 30 days</md-text-button
          >
        </section>
      </div>

      <h1>With preset ranges</h1>
      <div>
        <titanium-date-range-selector
          .presetRanges=${[
            { name: 'Today', startDate: dayjs().format('YYYY-MM-DD'), endDate: dayjs().format('YYYY-MM-DD') },
            { name: 'Yesterday', startDate: dayjs().subtract(1, 'day').format('YYYY-MM-DD'), endDate: dayjs().subtract(1, 'day').format('YYYY-MM-DD') },
            { name: 'Last 7 days', startDate: dayjs().subtract(6, 'days').format('YYYY-MM-DD'), endDate: dayjs().format('YYYY-MM-DD') },
            { name: 'Last 30 days', startDate: dayjs().subtract(29, 'days').format('YYYY-MM-DD'), endDate: dayjs().format('YYYY-MM-DD') },
          ]}
        ></titanium-date-range-selector>
      </div>

      <api-docs src="./custom-elements.json" selected="titanium-date-range-selector"></api-docs>
    `;
  }
}
