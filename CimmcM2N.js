import{i as t,b as e,c as a,_ as s,e as i,r as n,t as r}from"./BkdWKSMI.js";import{S as o}from"./D21mo-gf.js";import"./z-LiiMbg.js";import"./BXTEaQeD.js";import"./YkYqZkH8.js";import{d}from"./fEBq_QNq.js";import"./-LEy-2I5.js";let l=class extends t{#t;get eventsDemoInput(){return this.#t}set eventsDemoInput(t){this.#t=t}#e="2020-01-02";get startDate(){return this.#e}set startDate(t){this.#e=t}#a="2020-01-04";get endDate(){return this.#a}set endDate(t){this.#a=t}#s=!1;get eventFired(){return this.#s}set eventFired(t){this.#s=t}static{this.styles=[o,e`
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
    `]}render(){return a`
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
                .value=${{startDate:this.startDate,endDate:this.endDate}}
                @change=${t=>{console.log("change",t.target),this.startDate=t.target.startDate,this.endDate=t.target.endDate,this.eventFired=!0,setTimeout(()=>this.eventFired=!1,1e3)}}
              ></titanium-date-range-selector>

              <p>Start: ${this.startDate} | End: ${this.endDate}</p>

              <event-text ?fired=${this.eventFired}>${this.eventFired?"Event fired!":"Waiting for event..."}</event-text>

              <section buttons>
                <md-filled-tonal-button
                  @click=${()=>{this.startDate=d().subtract(7,"days").format("YYYY-MM-DD"),this.endDate=d().format("YYYY-MM-DD")}}
                  >Set to last 7 days</md-filled-tonal-button
                >
                <md-filled-tonal-button
                  @click=${()=>{this.startDate=d().subtract(30,"days").format("YYYY-MM-DD"),this.endDate=d().format("YYYY-MM-DD")}}
                  >Set to last 30 days</md-filled-tonal-button
                >
              </section>
            </div>

            <div>
              <h1>With preset ranges</h1>
              <titanium-date-range-selector
                .presetRanges=${[{name:"Today",startDate:d().format("YYYY-MM-DD"),endDate:d().format("YYYY-MM-DD")},{name:"Yesterday",startDate:d().subtract(1,"day").format("YYYY-MM-DD"),endDate:d().subtract(1,"day").format("YYYY-MM-DD")},{name:"Last 7 days",startDate:d().subtract(6,"days").format("YYYY-MM-DD"),endDate:d().format("YYYY-MM-DD")},{name:"Last 30 days",startDate:d().subtract(29,"days").format("YYYY-MM-DD"),endDate:d().format("YYYY-MM-DD")}]}
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
    `}};s([i("titanium-date-range-selector[events]")],l.prototype,"eventsDemoInput",null),s([n()],l.prototype,"startDate",null),s([n()],l.prototype,"endDate",null),s([n()],l.prototype,"eventFired",null),l=s([r("titanium-date-range-selector-demo")],l);export{l as TitaniumDateRangeSelectorDemo};
