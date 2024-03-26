import { __decorate } from "tslib";
/* playground-fold */
import { LitElement, html, css } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
import '@material/web/button/text-button';
/* playground-fold-end */
import '@leavittsoftware/web/titanium/date-range-selector/date-range-selector';
import dayjs from 'dayjs/esm';
import { DateRanges } from '@leavittsoftware/web/titanium/date-range-selector/types/date-ranges';
/* playground-fold */
let TitaniumDateRangePlayground = class TitaniumDateRangePlayground extends LitElement {
    #eventsDemoInput_accessor_storage;
    get eventsDemoInput() { return this.#eventsDemoInput_accessor_storage; }
    set eventsDemoInput(value) { this.#eventsDemoInput_accessor_storage = value; }
    #startDate_accessor_storage = '2020-01-02';
    get startDate() { return this.#startDate_accessor_storage; }
    set startDate(value) { this.#startDate_accessor_storage = value; }
    #endDate_accessor_storage = '2020-01-04';
    get endDate() { return this.#endDate_accessor_storage; }
    set endDate(value) { this.#endDate_accessor_storage = value; }
    #eventFired_accessor_storage = false;
    get eventFired() { return this.#eventFired_accessor_storage; }
    set eventFired(value) { this.#eventFired_accessor_storage = value; }
    static { this.styles = [
        h1,
        p,
        css `
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
    ]; }
    render() {
        /* playground-fold-end */
        return html `
      <h1>Events</h1>
      <p>Demonstrates when the date-range-changed event is fired</p>
      <div>
        <titanium-date-range-selector
          @opening=${() => console.log('opening')}
          @closing=${() => console.log('closing')}
          events
          .startDate=${this.startDate}
          .endDate=${this.endDate}
          @change=${() => {
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
        <titanium-date-range-selector startDate=${dayjs().format('YYYY-MM-DD')} endDate=${dayjs().format('YYYY-MM-DD')}></titanium-date-range-selector>
        <titanium-date-range-selector label="Reporting date"></titanium-date-range-selector>
        <titanium-date-range-selector range="thisWeek"></titanium-date-range-selector>
        <titanium-date-range-selector range="thisWeek"></titanium-date-range-selector>
        <titanium-date-range-selector endDate="2022-05-17"></titanium-date-range-selector>
        <titanium-date-range-selector startDate="2023-09-01"></titanium-date-range-selector>
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
};
__decorate([
    query('titanium-date-range-selector[events]')
], TitaniumDateRangePlayground.prototype, "eventsDemoInput", null);
__decorate([
    state()
], TitaniumDateRangePlayground.prototype, "startDate", null);
__decorate([
    state()
], TitaniumDateRangePlayground.prototype, "endDate", null);
__decorate([
    state()
], TitaniumDateRangePlayground.prototype, "eventFired", null);
TitaniumDateRangePlayground = __decorate([
    customElement('titanium-date-range-selector-playground')
], TitaniumDateRangePlayground);
export { TitaniumDateRangePlayground };
//# sourceMappingURL=titanium-date-range-selector-playground.js.map