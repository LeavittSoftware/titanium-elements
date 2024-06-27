import{s as t,i as e,x as a,_ as s,r as i,n,e as r,t as o,h as d,p as l}from"./d0ace671.js";import{S as c}from"./9e8552c1.js";import"./41178c5b.js";import"./62698f2c.js";import"./afe306ba.js";import{Q as m,M as h,D as u,d as p}from"./5f341198.js";import{r as D}from"./f42dd0a8.js";import"./ec341a4d.js";import"./663a7052.js";import"./ec5758e0.js";import"./725c256f.js";p.extend((function(t,e){var a=e.prototype;a.quarter=function(t){return this.$utils().u(t)?Math.ceil((this.month()+1)/3):this.month(this.month()%3+3*(t-1))};var s=a.add;a.add=function(t,e){return t=Number(t),this.$utils().p(e)===m?this.add(3*t,h):s.bind(this)(t,e)};var i=a.startOf;a.startOf=function(t,e){var a=this.$utils(),s=!!a.u(e)||e;if(a.p(t)===m){var n=this.quarter()-1;return s?this.month(3*n).startOf(h).startOf(u):this.month(3*n+2).endOf(h).endOf(u)}return i.bind(this)(t,e)}}));const g="quarter",Y=new Map([["allTime",{name:"All time",startDate:()=>"",endDate:()=>"",icon:"watch_later"}],["today",{name:"Today",startDate:()=>p().format("YYYY-MM-DD"),endDate:()=>p().format("YYYY-MM-DD"),icon:"today"}],["thisWeek",{name:"This week",startDate:()=>p().startOf("week").format("YYYY-MM-DD"),endDate:()=>p().endOf("week").format("YYYY-MM-DD"),icon:"calendar_view_week"}],["thisMonth",{name:"This month",startDate:()=>p().startOf("month").format("YYYY-MM-DD"),endDate:()=>p().endOf("month").format("YYYY-MM-DD"),icon:"calendar_month"}],["thisQuarter",{name:"This quarter",startDate:()=>p().startOf(g).format("YYYY-MM-DD"),endDate:()=>p().endOf(g).format("YYYY-MM-DD"),icon:"event"}],["thisYear",{name:"This year",startDate:()=>p().startOf("year").format("YYYY-MM-DD"),endDate:()=>p().endOf("year").format("YYYY-MM-DD"),icon:"calendar_today"}],["thisYearToDate",{name:"This year to date",startDate:()=>p().startOf("year").format("YYYY-MM-DD"),endDate:()=>p().format("YYYY-MM-DD"),icon:"calendar_view_day"}],["lastWeek",{name:"Last week",startDate:()=>p().subtract(1,"week").startOf("week").format("YYYY-MM-DD"),endDate:()=>p().subtract(1,"week").endOf("week").format("YYYY-MM-DD"),icon:"calendar_view_week"}],["lastMonth",{name:"Last month",startDate:()=>p().subtract(1,"month").startOf("month").format("YYYY-MM-DD"),endDate:()=>p().subtract(1,"month").endOf("month").format("YYYY-MM-DD"),icon:"calendar_month"}],["lastQuarter",{name:"Last quarter",startDate:()=>p().subtract(1,"quarter").startOf(g).format("YYYY-MM-DD"),endDate:()=>p().subtract(1,"quarter").endOf(g).format("YYYY-MM-DD"),icon:"event"}],["lastYear",{name:"Last year",startDate:()=>p().subtract(1,"year").startOf("year").format("YYYY-MM-DD"),endDate:()=>p().subtract(1,"year").endOf("year").format("YYYY-MM-DD"),icon:"calendar_today"}],["last12Months",{name:"Last 12 months",startDate:()=>p().add(-1,"year").format("YYYY-MM-DD"),endDate:()=>p().format("YYYY-MM-DD"),icon:"calendar_today"}],["lastYearToDate",{name:"Last year to date",startDate:()=>p().subtract(1,"year").startOf("year").format("YYYY-MM-DD"),endDate:()=>p().format("YYYY-MM-DD"),icon:"calendar_view_day"}],["yesterday",{name:"Yesterday",startDate:()=>p().subtract(1,"day").format("YYYY-MM-DD"),endDate:()=>p().subtract(1,"day").format("YYYY-MM-DD"),icon:"event_repeat"}]]);let y=class extends t{constructor(){super(...arguments),this.#t="custom",this.#e="",this.#a="",this.#s="",this.#i="date",this.#n=!1,this.#r=null,this.#o="",this.positioning="popover",this.#d="custom",this.#l="",this.#c="",this.#m=!1}#t;get range(){return this.#t}set range(t){this.#t=t}#e;get startDate(){return this.#e}set startDate(t){this.#e=t}#a;get endDate(){return this.#a}set endDate(t){this.#a=t}#s;get label(){return this.#s}set label(t){this.#s=t}#i;get type(){return this.#i}set type(t){this.#i=t}#n;get disabled(){return this.#n}set disabled(t){this.#n=t}#r;get customDateRanges(){return this.#r}set customDateRanges(t){this.#r=t}#o;get supportingText(){return this.#o}set supportingText(t){this.#o=t}#h;get menu(){return this.#h}set menu(t){this.#h=t}#u;get list(){return this.#u}set list(t){this.#u=t}#d;get proposedRange(){return this.#d}set proposedRange(t){this.#d=t}#l;get proposedStartDate(){return this.#l}set proposedStartDate(t){this.#l=t}#c;get proposedEndDate(){return this.#c}set proposedEndDate(t){this.#c=t}#p;get open(){return this.#p}set open(t){this.#p=t}#m;get focused(){return this.#m}set focused(t){this.#m=t}async updated(t){if(t.has("range")||t.has("open")){const t=this.#D(this.range);t&&(this.startDate=t.startDate(),this.endDate=t.endDate())}(t.has("endDate")||t.has("startDate"))&&(this.range=Array.from(this.customDateRanges?this.customDateRanges:Y).find((t=>t[1].startDate()===this.startDate&&t[1].endDate()===this.endDate))?.[0]||"custom"),t.has("positioning")&&"popover"===this.positioning&&!this.showPopover&&(this.positioning="fixed")}async reset(){this.range="allTime"}#g(t,e){return!(t&&e&&p(t).isAfter(p(e)))}static{this.styles=e`
    :host {
      display: flex;
      position: relative;
    }

    main {
      display: flex;
      flex-direction: column;
    }

    section {
      display: grid;
      grid: 'list inputs'/ 220px minmax(300px, 1fr);
      gap: 0 24px;
      margin: 0;
      padding-bottom: 57px;

      overflow-y: auto;

      position: relative;
    }

    menu-actions {
      display: flex;
      background-color: var(--md-sys-color-surface-container);
      z-index: 1;

      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      border-top: 1px solid var(--md-sys-color-outline-variant);

      flex-direction: row;
      justify-content: flex-end;

      gap: 12px;
      padding: 12px;
    }

    input-container {
      grid-area: inputs;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 24px;

      margin-right: 16px;
    }

    md-outlined-field {
      width: 100%;
    }

    md-outlined-field md-icon {
      margin: 0 12px;
    }

    md-list {
      grid-area: list;
      --md-list-container-color: --md-sys-color-surface-container;

      max-height: 260px;
      overflow-y: auto;
      border-right: 1px solid var(--md-sys-color-outline-variant);
    }

    md-list-item[selected] {
      background-color: rgb(from var(--md-sys-color-primary) r g b / 0.18);
    }

    @-moz-document url-prefix() {
      md-list-item[selected] {
        background-color: var(--md-sys-color-outline-variant);
      }
    }

    span[error] {
      font-size: 12px;
      margin-top: -18px;
      color: var(--md-sys-color-error, #b3261e);
    }

    [invisible] {
      visibility: hidden;
    }

    @media (max-width: 450px) {
      section {
        grid:
          'inputs'
          'list'
          'buttons' / 1fr;
        min-width: 280px;
      }

      input-container {
        margin: 24px 24px 0 24px;
      }

      md-list {
        max-height: unset;
        border-top: 1px solid var(--md-sys-color-outline-variant);
      }
    }
  `}#D(t){return this.customDateRanges?this.customDateRanges.get(t):Y.get(t)}#Y(t=!1){if(!this.list)return;const e=this.list.items,a=e.find((t=>t.hasAttribute("selected")))||e[0];a&&(this.list.scrollTop=a.offsetTop-10,a.tabIndex=0,t&&a.focus())}render(){return a`
      <md-outlined-field
        part="field"
        aria-haspopup="listbox"
        role="combobox"
        part="field"
        id="field"
        tabindex=${this.disabled?"-1":"0"}
        aria-describedby="description"
        aria-controls="listbox"
        label=${this.label}
        .focused=${this.focused||this.open}
        populated
        .disabled=${this.disabled}
        has-end
        supporting-text=${this.supportingText}
        @keydown=${t=>{if(this.open||this.disabled||!this.menu)return;return"Space"===t.code||"ArrowDown"===t.code||"Enter"===t.code?(t.preventDefault(),void(this.open=!0)):void 0}}
        @click=${()=>this.open=!0}
        @focus=${()=>this.focused=!0}
        @blur=${()=>this.focused=!1}
      >
        <!--  need to render &nbsp; so that line-height can apply and give it a
      non-zero height -->
        <!-- prettier-ignore -->
        <div>${function(t,e,a,s=Y){return"custom"!==t?`${s.get(t)?.name??""}`:e&&a?`${p(e).format("MMM D, YYYY")} to ${p(a).format("MMM D, YYYY")}`:a?`Ending ${p(a).format("MMM D, YYYY")}`:`Starting ${p(e).format("MMM D, YYYY")}`}(this.range,this.startDate,this.endDate,this.customDateRanges?this.customDateRanges:Y)||a`&nbsp;`}</div>

        <md-icon slot="start">${this.#D(this.range)?.icon||"date_range"}</md-icon>
        <md-icon slot="end">${this.open?"arrow_drop_up":"arrow_drop_down"}</md-icon>
      </md-outlined-field>

      <!-- stay-open-on-focusout -->
      <md-menu
        default-focus="none"
        .positioning=${this.positioning}
        id="menu"
        anchor="field"
        .open=${this.open}
        @closing=${t=>{this.open=!1,D(this,t)}}
        @opening=${async t=>{this.proposedEndDate=this.endDate,this.proposedStartDate=this.startDate,this.proposedRange=this.range,D(this,t),await this.updateComplete,this.#Y()}}
      >
        <main>
          <section>
            <md-list>
              <!-- Recompute ranges on menu open -->
              ${this.open&&Array.from(this.customDateRanges?this.customDateRanges:Y).map((t=>a`<md-list-item
                    type="button"
                    ?selected=${this.proposedRange===t[0]}
                    @click=${()=>{this.proposedRange=t[0];const e=this.#D(t[0]);e&&(this.proposedStartDate=e.startDate()??"",this.proposedEndDate=e.endDate()??"")}}
                    value=${t[0]}
                  >
                    <md-icon slot="start">${t[1].icon}</md-icon>
                    <div slot="headline">${t[1].name}</div>
                  </md-list-item>`))}
              <md-list-item type="button" ?selected=${"custom"===this.proposedRange} @click=${()=>this.proposedRange="custom"} value="custom">
                <md-icon slot="start">date_range</md-icon>
                <div slot="headline">Custom range</div>
              </md-list-item>
            </md-list>
            <input-container>
              <titanium-date-input
                start-date
                label="From"
                type=${this.type}
                .value=${this.proposedStartDate??""}
                @change=${async t=>{this.proposedStartDate=t.target.value??"",this.proposedRange=Array.from(this.customDateRanges?this.customDateRanges:Y).find((t=>t[1].startDate()===this.proposedStartDate&&t[1].endDate()===this.proposedEndDate))?.[0]||"custom",await this.updateComplete,this.#Y()}}
              ></titanium-date-input>

              <titanium-date-input
                end-date
                label="To"
                type=${this.type}
                .value=${this.proposedEndDate??""}
                @change=${async t=>{this.proposedEndDate=t.target.value??"",this.proposedRange=Array.from(this.customDateRanges?this.customDateRanges:Y).find((t=>t[1].startDate()===this.proposedStartDate&&t[1].endDate()===this.proposedEndDate))?.[0]||"custom",await this.updateComplete,this.#Y()}}
              >
              </titanium-date-input>

              <span error ?invisible=${this.#g(this.proposedStartDate,this.proposedEndDate)}>From date cannot start after To date</span>
            </input-container>
          </section>
          <menu-actions
            ><md-text-button @click=${()=>this.open=!1}>Cancel</md-text-button>
            <md-text-button
              ?disabled=${this.startDate===this.proposedStartDate&&this.endDate===this.proposedEndDate&&this.proposedRange===this.range}
              @click=${()=>{this.#g(this.proposedStartDate,this.proposedEndDate)&&(this.startDate=this.proposedStartDate,this.endDate=this.proposedEndDate,this.range=this.proposedRange,this.dispatchEvent(new Event("change")),this.open=!1)}}
              >Set</md-text-button
            >
          </menu-actions>
        </main>
      </md-menu>
    `}};s([n({type:String})],y.prototype,"range",null),s([n({type:String})],y.prototype,"startDate",null),s([n({type:String})],y.prototype,"endDate",null),s([n({type:String})],y.prototype,"label",null),s([n({type:String})],y.prototype,"type",null),s([n({type:Boolean,reflect:!0})],y.prototype,"disabled",null),s([n({type:Object})],y.prototype,"customDateRanges",null),s([n({attribute:"supporting-text"})],y.prototype,"supportingText",null),s([n()],y.prototype,"positioning",void 0),s([r("md-menu")],y.prototype,"menu",null),s([r("md-list")],y.prototype,"list",null),s([i()],y.prototype,"proposedRange",null),s([i()],y.prototype,"proposedStartDate",null),s([i()],y.prototype,"proposedEndDate",null),s([i()],y.prototype,"open",null),s([i()],y.prototype,"focused",null),y=s([o("titanium-date-range-selector")],y);let M=class extends t{#y;get eventsDemoInput(){return this.#y}set eventsDemoInput(t){this.#y=t}#e="2020-01-02";get startDate(){return this.#e}set startDate(t){this.#e=t}#a="2020-01-04";get endDate(){return this.#a}set endDate(t){this.#a=t}#M=!1;get eventFired(){return this.#M}set eventFired(t){this.#M=t}static{this.styles=[d,l,e`
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
    `]}render(){return a`
      <h1>Events</h1>
      <p>Demonstrates when the date-range-changed event is fired</p>
      <div>
        <titanium-date-range-selector
          @opening=${()=>console.log("opening")}
          @closing=${()=>console.log("closing")}
          events
          .startDate=${this.startDate}
          .endDate=${this.endDate}
          @change=${()=>{this.eventFired=!0,setTimeout((()=>this.eventFired=!1),1e3)}}
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
        <titanium-date-range-selector startDate=${p().format("YYYY-MM-DD")} endDate=${p().format("YYYY-MM-DD")}></titanium-date-range-selector>
        <titanium-date-range-selector label="Reporting date"></titanium-date-range-selector>
        <titanium-date-range-selector range="thisWeek"></titanium-date-range-selector>
        <titanium-date-range-selector range="thisWeek"></titanium-date-range-selector>
        <titanium-date-range-selector endDate="2022-05-17"></titanium-date-range-selector>
        <titanium-date-range-selector startDate="2023-09-01"></titanium-date-range-selector>
        <titanium-date-range-selector
          label="Custom override"
          .customDateRanges=${new Map([...Y,["allTime",{name:"All time, but different",startDate:()=>"",endDate:()=>"",icon:"dashboard"}]])}
        ></titanium-date-range-selector>
        <titanium-date-range-selector
          label="Completely custom items"
          range="lastWeekend"
          .customDateRanges=${new Map([["lastWeekend",{name:"Last weekend",startDate:()=>p().subtract(1,"week").endOf("week").subtract(1,"day").format("YYYY-MM-DD"),endDate:()=>p().startOf("week").format("YYYY-MM-DD"),icon:"weekend"}],["allTime",{name:"All time, but different",startDate:()=>"",endDate:()=>"",icon:"dashboard"}]])}
        ></titanium-date-range-selector>
      </div>

      <h1>Time</h1>
      <p>Examples using enable time</p>
      <div>
        <titanium-date-range-selector
          type="datetime-local"
          label="Created date"
          range="lastTen"
          .customDateRanges=${new Map([["lastTen",{name:"Last ten minutes",startDate:()=>p().subtract(10,"minutes").format("YYYY-MM-DDTHH:mm"),endDate:()=>p().format("YYYY-MM-DDTHH:mm"),icon:"timer"}],["allTime",{name:"All time, but different",startDate:()=>"",endDate:()=>"",icon:"dashboard"}],["lastThirty",{name:"Last thirty minutes",startDate:()=>p().subtract(30,"minutes").format("YYYY-MM-DDTHH:mm"),endDate:()=>p().format("YYYY-MM-DDTHH:mm"),icon:"timer"}],["lastHour",{name:"Last hour",startDate:()=>p().subtract(1,"hour").format("YYYY-MM-DDTHH:mm"),endDate:()=>p().format("YYYY-MM-DDTHH:mm"),icon:"alarm"}]])}
        ></titanium-date-range-selector>
      </div>
    `}};s([r("titanium-date-range-selector[events]")],M.prototype,"eventsDemoInput",null),s([i()],M.prototype,"startDate",null),s([i()],M.prototype,"endDate",null),s([i()],M.prototype,"eventFired",null),M=s([o("titanium-date-range-selector-playground")],M);let x=class extends t{static{this.styles=[c,e``]}render(){return a`
      <story-header name="Titanium date range selector" className="TitaniumDateRangeSelector"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-date-range-selector/project.json"
        ><titanium-date-range-selector-playground></titanium-date-range-selector-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-date-range-selector"></api-docs>
    `}};x=s([o("titanium-date-range-selector-demo")],x);export{x as TitaniumDateRangeSelectorDemo};
