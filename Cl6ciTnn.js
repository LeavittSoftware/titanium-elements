import{i as e,h as t,p as a,c as n,x as i,_ as s,e as r,r as d,t as o}from"./BRwII10n.js";import{S as m}from"./9jYdvRPf.js";import"./PuY7V0q-.js";import{D as l}from"./CJaD0xbj.js";import{d as c}from"./fEBq_QNq.js";import"./DkMGpM_P.js";let u=class extends e{#e;get eventsDemoInput(){return this.#e}set eventsDemoInput(e){this.#e=e}#t="2020-01-02";get startDate(){return this.#t}set startDate(e){this.#t=e}#a="2020-01-04";get endDate(){return this.#a}set endDate(e){this.#a=e}#n=!1;get eventFired(){return this.#n}set eventFired(e){this.#n=e}static{this.styles=[t,a,n`
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
    `]}render(){return i`
      <h1>Events</h1>
      <p>Demonstrates when the date-range-changed event is fired</p>
      <div>
        <titanium-date-range-selector
          @opening=${()=>console.log("opening")}
          @closing=${()=>console.log("closing")}
          events
          .startDate=${this.startDate}
          .endDate=${this.endDate}
          @change=${()=>{this.eventFired=!0,setTimeout(()=>this.eventFired=!1,1e3)}}
        ></titanium-date-range-selector>
        <span event-text ?event-fired=${this.eventFired}>date-range-changed</span>
        <section buttons>
          <md-text-button
            @click=${()=>{this.startDate="",this.endDate=""}}
            >Bind to ''</md-text-button
          >
          <md-text-button @click=${()=>this.eventsDemoInput.reset()}>reset()</md-text-button>
        </section>
      </div>

      <h1>Default</h1>
      <p>Examples using default, range, startDate, and endDate</p>
      <div>
        <titanium-date-range-selector startDate=${c().format("YYYY-MM-DD")} endDate=${c().format("YYYY-MM-DD")}></titanium-date-range-selector>
        <titanium-date-range-selector label="Reporting date"></titanium-date-range-selector>
        <titanium-date-range-selector range="thisWeek"></titanium-date-range-selector>
        <titanium-date-range-selector range="thisWeek"></titanium-date-range-selector>
        <titanium-date-range-selector endDate="2022-05-17"></titanium-date-range-selector>
        <titanium-date-range-selector startDate="2023-09-01"></titanium-date-range-selector>
        <titanium-date-range-selector
          label="Custom override"
          .customDateRanges=${new Map([...l,["allTime",{name:"All time, but different",startDate:()=>"",endDate:()=>"",icon:"dashboard"}]])}
        ></titanium-date-range-selector>
        <titanium-date-range-selector
          label="Completely custom items"
          range="lastWeekend"
          .customDateRanges=${new Map([["lastWeekend",{name:"Last weekend",startDate:()=>c().subtract(1,"week").endOf("week").subtract(1,"day").format("YYYY-MM-DD"),endDate:()=>c().startOf("week").format("YYYY-MM-DD"),icon:"weekend"}],["allTime",{name:"All time, but different",startDate:()=>"",endDate:()=>"",icon:"dashboard"}]])}
        ></titanium-date-range-selector>
      </div>

      <h1>Time</h1>
      <p>Examples using enable time</p>
      <div>
        <titanium-date-range-selector
          type="datetime-local"
          label="Created date"
          range="lastTen"
          .customDateRanges=${new Map([["lastTen",{name:"Last ten minutes",startDate:()=>c().subtract(10,"minutes").format("YYYY-MM-DDTHH:mm"),endDate:()=>c().format("YYYY-MM-DDTHH:mm"),icon:"timer"}],["allTime",{name:"All time, but different",startDate:()=>"",endDate:()=>"",icon:"dashboard"}],["lastThirty",{name:"Last thirty minutes",startDate:()=>c().subtract(30,"minutes").format("YYYY-MM-DDTHH:mm"),endDate:()=>c().format("YYYY-MM-DDTHH:mm"),icon:"timer"}],["lastHour",{name:"Last hour",startDate:()=>c().subtract(1,"hour").format("YYYY-MM-DDTHH:mm"),endDate:()=>c().format("YYYY-MM-DDTHH:mm"),icon:"alarm"}]])}
        ></titanium-date-range-selector>
      </div>

      <h1>Filled</h1>
      <p>Examples using filled</p>
      <div>
        <titanium-date-range-selector filled startDate=${c().format("YYYY-MM-DD")} endDate=${c().format("YYYY-MM-DD")}></titanium-date-range-selector>
      </div>
    `}};s([r("titanium-date-range-selector[events]")],u.prototype,"eventsDemoInput",null),s([d()],u.prototype,"startDate",null),s([d()],u.prototype,"endDate",null),s([d()],u.prototype,"eventFired",null),u=s([o("titanium-date-range-selector-playground")],u);let g=class extends e{static{this.styles=[m,n``]}render(){return i`
      <story-header name="Titanium date range selector" className="TitaniumDateRangeSelector"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-date-range-selector/project.json"
        ><titanium-date-range-selector-playground></titanium-date-range-selector-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-date-range-selector"></api-docs>
    `}};g=s([o("titanium-date-range-selector-demo")],g);export{g as TitaniumDateRangeSelectorDemo};
