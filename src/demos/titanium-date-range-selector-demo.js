import { __decorate } from "tslib";
import '../shared/story-header';
import '@leavittsoftware/web/leavitt/app/app-main-content-container';
import '@leavittsoftware/web/leavitt/app/app-navigation-header';
import '@leavittsoftware/web/leavitt/app/app-width-limiter';
import '@material/web/button/filled-tonal-button';
import '@api-viewer/docs';
import '@leavittsoftware/web/titanium/date-range-selector/date-range-selector';
import { css, html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import dayjs from 'dayjs/esm';
import StoryStyles from '../styles/story-styles';
let TitaniumDateRangeSelectorDemo = class TitaniumDateRangeSelectorDemo extends LitElement {
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
        StoryStyles,
        css `
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
    `,
    ]; }
    render() {
        return html `
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
                @change=${(e) => {
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
};
__decorate([
    query('titanium-date-range-selector[events]')
], TitaniumDateRangeSelectorDemo.prototype, "eventsDemoInput", null);
__decorate([
    state()
], TitaniumDateRangeSelectorDemo.prototype, "startDate", null);
__decorate([
    state()
], TitaniumDateRangeSelectorDemo.prototype, "endDate", null);
__decorate([
    state()
], TitaniumDateRangeSelectorDemo.prototype, "eventFired", null);
TitaniumDateRangeSelectorDemo = __decorate([
    customElement('titanium-date-range-selector-demo')
], TitaniumDateRangeSelectorDemo);
export { TitaniumDateRangeSelectorDemo };
//# sourceMappingURL=titanium-date-range-selector-demo.js.map