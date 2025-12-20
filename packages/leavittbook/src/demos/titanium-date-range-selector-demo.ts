import '../shared/story-header';

import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@material/web/button/filled-tonal-button';
import '@api-viewer/docs';

import '@leavittsoftware/web/titanium/date-range-selector/date-range-selector';

import { css, html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { p } from '@leavittsoftware/web/titanium/styles/styles';
import { TitaniumDateRangeSelector } from '@leavittsoftware/web/titanium/date-range-selector/date-range-selector';
import { heroStyles } from '../styles/hero-styles';
import { DOMEvent } from '@leavittsoftware/web/titanium/types/dom-event';

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

      p,
      h1 {
        margin-bottom: 12px;
      }

      event-text,
      event-text[fired] {
        display: block;
        margin-bottom: 12px;
        color: var(--md-sys-color-primary);
        font-weight: 500;
      }

      event-text[fired] {
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
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium date range selector" level1Href="/titanium-date-range-selector" sticky-top>
          </leavitt-app-navigation-header>
          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Titanium date range selector" className="TitaniumDateRangeSelector"></story-header>

            <div>
              <h1>Basic date range selector</h1>

              <titanium-date-range-selector
                events
                .value=${{ startDate: this.startDate, endDate: this.endDate }}
                @change=${(e: DOMEvent<TitaniumDateRangeSelector>) => {
                  console.log('change', e.target);
                  this.startDate = e.target.startDate;
                  this.endDate = e.target.endDate;
                  this.eventFired = true;
                  setTimeout(() => (this.eventFired = false), 1000);
                }}
              ></titanium-date-range-selector>

              <p>Start: ${this.startDate} | End: ${this.endDate}</p>

              <event-text ?fired=${this.eventFired}>${this.eventFired ? 'Event fired!' : 'Waiting for event...'}</event-text>

              <section buttons>
                <md-filled-tonal-button
                  @click=${() => {
                    this.startDate = dayjs().subtract(7, 'days').format('YYYY-MM-DD');
                    this.endDate = dayjs().format('YYYY-MM-DD');
                  }}
                  >Set to last 7 days</md-filled-tonal-button
                >
                <md-filled-tonal-button
                  @click=${() => {
                    this.startDate = dayjs().subtract(30, 'days').format('YYYY-MM-DD');
                    this.endDate = dayjs().format('YYYY-MM-DD');
                  }}
                  >Set to last 30 days</md-filled-tonal-button
                >
              </section>
            </div>

            <div>
              <h1>With preset ranges</h1>
              <titanium-date-range-selector
                .presetRanges=${[
                  { name: 'Today', startDate: dayjs().format('YYYY-MM-DD'), endDate: dayjs().format('YYYY-MM-DD') },
                  { name: 'Yesterday', startDate: dayjs().subtract(1, 'day').format('YYYY-MM-DD'), endDate: dayjs().subtract(1, 'day').format('YYYY-MM-DD') },
                  { name: 'Last 7 days', startDate: dayjs().subtract(6, 'days').format('YYYY-MM-DD'), endDate: dayjs().format('YYYY-MM-DD') },
                  { name: 'Last 30 days', startDate: dayjs().subtract(29, 'days').format('YYYY-MM-DD'), endDate: dayjs().format('YYYY-MM-DD') },
                ]}
              ></titanium-date-range-selector>
            </div>

            <div>
              <h1>Filled</h1>
              <titanium-date-range-selector filled></titanium-date-range-selector>
            </div>

            <api-docs src="./custom-elements.json" selected="titanium-date-range-selector"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `;
  }
}
