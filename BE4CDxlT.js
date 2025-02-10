import{r as t,i as e,x as a,E as s,y as i,_ as n,n as r,e as o,d,t as l,h as c,p as m}from"./jlnXwjN8.js";import{S as h}from"./B3_5_T76.js";import"./CZXsZd7R.js";import"./ckMuSq3f.js";import{Q as u,M as p,D as g,d as D}from"./PxkcVQni.js";D.extend((function(t,e){var a=e.prototype;a.quarter=function(t){return this.$utils().u(t)?Math.ceil((this.month()+1)/3):this.month(this.month()%3+3*(t-1))};var s=a.add;a.add=function(t,e){return t=Number(t),this.$utils().p(e)===u?this.add(3*t,p):s.bind(this)(t,e)};var i=a.startOf;a.startOf=function(t,e){var a=this.$utils(),s=!!a.u(e)||e;if(a.p(t)===u){var n=this.quarter()-1;return s?this.month(3*n).startOf(p).startOf(g):this.month(3*n+2).endOf(p).endOf(g)}return i.bind(this)(t,e)}}));const Y="quarter",y=new Map([["allTime",{name:"All time",startDate:()=>"",endDate:()=>"",icon:"watch_later"}],["today",{name:"Today",startDate:()=>D().format("YYYY-MM-DD"),endDate:()=>D().format("YYYY-MM-DD"),icon:"today"}],["thisWeek",{name:"This week",startDate:()=>D().startOf("week").format("YYYY-MM-DD"),endDate:()=>D().endOf("week").format("YYYY-MM-DD"),icon:"calendar_view_week"}],["thisMonth",{name:"This month",startDate:()=>D().startOf("month").format("YYYY-MM-DD"),endDate:()=>D().endOf("month").format("YYYY-MM-DD"),icon:"calendar_month"}],["thisQuarter",{name:"This quarter",startDate:()=>D().startOf(Y).format("YYYY-MM-DD"),endDate:()=>D().endOf(Y).format("YYYY-MM-DD"),icon:"event"}],["thisYear",{name:"This year",startDate:()=>D().startOf("year").format("YYYY-MM-DD"),endDate:()=>D().endOf("year").format("YYYY-MM-DD"),icon:"calendar_today"}],["thisYearToDate",{name:"This year to date",startDate:()=>D().startOf("year").format("YYYY-MM-DD"),endDate:()=>D().format("YYYY-MM-DD"),icon:"calendar_view_day"}],["lastWeek",{name:"Last week",startDate:()=>D().subtract(1,"week").startOf("week").format("YYYY-MM-DD"),endDate:()=>D().subtract(1,"week").endOf("week").format("YYYY-MM-DD"),icon:"calendar_view_week"}],["lastMonth",{name:"Last month",startDate:()=>D().subtract(1,"month").startOf("month").format("YYYY-MM-DD"),endDate:()=>D().subtract(1,"month").endOf("month").format("YYYY-MM-DD"),icon:"calendar_month"}],["lastQuarter",{name:"Last quarter",startDate:()=>D().subtract(1,"quarter").startOf(Y).format("YYYY-MM-DD"),endDate:()=>D().subtract(1,"quarter").endOf(Y).format("YYYY-MM-DD"),icon:"event"}],["lastYear",{name:"Last year",startDate:()=>D().subtract(1,"year").startOf("year").format("YYYY-MM-DD"),endDate:()=>D().subtract(1,"year").endOf("year").format("YYYY-MM-DD"),icon:"calendar_today"}],["last12Months",{name:"Last 12 months",startDate:()=>D().add(-1,"year").format("YYYY-MM-DD"),endDate:()=>D().format("YYYY-MM-DD"),icon:"calendar_today"}],["lastYearToDate",{name:"Last year to date",startDate:()=>D().subtract(1,"year").startOf("year").format("YYYY-MM-DD"),endDate:()=>D().format("YYYY-MM-DD"),icon:"calendar_view_day"}],["yesterday",{name:"Yesterday",startDate:()=>D().subtract(1,"day").format("YYYY-MM-DD"),endDate:()=>D().subtract(1,"day").format("YYYY-MM-DD"),icon:"event_repeat"}]]);let M=class extends t{#t="custom";get range(){return this.#t}set range(t){this.#t=t}#e="";get startDate(){return this.#e}set startDate(t){this.#e=t}#a="";get endDate(){return this.#a}set endDate(t){this.#a=t}#s="";get label(){return this.#s}set label(t){this.#s=t}#i="date";get type(){return this.#i}set type(t){this.#i=t}#n=!1;get disabled(){return this.#n}set disabled(t){this.#n=t}#r=null;get customDateRanges(){return this.#r}set customDateRanges(t){this.#r=t}#o="";get supportingText(){return this.#o}set supportingText(t){this.#o=t}#d="popover";get positioning(){return this.#d}set positioning(t){this.#d=t}#l;get menu(){return this.#l}set menu(t){this.#l=t}#c;get list(){return this.#c}set list(t){this.#c=t}#m="custom";get proposedRange(){return this.#m}set proposedRange(t){this.#m=t}#h="";get proposedStartDate(){return this.#h}set proposedStartDate(t){this.#h=t}#u="";get proposedEndDate(){return this.#u}set proposedEndDate(t){this.#u=t}#p;get open(){return this.#p}set open(t){this.#p=t}#g=!1;get focused(){return this.#g}set focused(t){this.#g=t}async updated(t){if(t.has("range")||t.has("open")){const t=this.#D(this.range);t&&(this.startDate=t.startDate(),this.endDate=t.endDate())}(t.has("endDate")||t.has("startDate"))&&(this.range=Array.from(this.customDateRanges?this.customDateRanges:y).find((t=>t[1].startDate()===this.startDate&&t[1].endDate()===this.endDate))?.[0]||"custom"),t.has("positioning")&&"popover"===this.positioning&&!this.showPopover&&(this.positioning="fixed")}async reset(){this.range="allTime"}#Y(t,e){return!(t&&e&&D(t).isAfter(D(e)))}static{this.styles=e`
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
  `}#D(t){return this.customDateRanges?this.customDateRanges.get(t):y.get(t)}#y(t=!1){if(!this.list)return;const e=this.list.items,a=e.find((t=>t.hasAttribute("selected")))||e[0];a&&(this.list.scrollTop=a.offsetTop-10,a.tabIndex=0,t&&a.focus())}render(){return a`
      <md-outlined-field
        part="field"
        aria-haspopup="listbox"
        role="combobox"
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
        <div>${function(t,e,a,s=y){return"custom"!==t?`${s.get(t)?.name??""}`:e&&a?`${D(e).format("MMM D, YYYY")} to ${D(a).format("MMM D, YYYY")}`:a?`Ending ${D(a).format("MMM D, YYYY")}`:`Starting ${D(e).format("MMM D, YYYY")}`}(this.range,this.startDate,this.endDate,this.customDateRanges?this.customDateRanges:y)||a`&nbsp;`}</div>

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
        @closing=${t=>{this.open=!1,i(this,t)}}
        @opening=${async t=>{this.proposedEndDate=this.endDate,this.proposedStartDate=this.startDate,this.proposedRange=this.range,i(this,t),await this.updateComplete,this.#y()}}
      >
        <main>
          <section>
            <md-list>
              <!-- Recompute ranges on menu open -->
              ${this.open?Array.from(this.customDateRanges?this.customDateRanges:y).map((t=>a`<md-list-item
                        type="button"
                        ?selected=${this.proposedRange===t[0]}
                        @click=${()=>{this.proposedRange=t[0];const e=this.#D(t[0]);e&&(this.proposedStartDate=e.startDate()??"",this.proposedEndDate=e.endDate()??"")}}
                        value=${t[0]}
                      >
                        <md-icon slot="start">${t[1].icon}</md-icon>
                        <div slot="headline">${t[1].name}</div>
                      </md-list-item>`)):s}
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
                @change=${async t=>{this.proposedStartDate=t.target.value??"",this.proposedRange=Array.from(this.customDateRanges?this.customDateRanges:y).find((t=>t[1].startDate()===this.proposedStartDate&&t[1].endDate()===this.proposedEndDate))?.[0]||"custom",await this.updateComplete,this.#y()}}
              ></titanium-date-input>

              <titanium-date-input
                end-date
                label="To"
                type=${this.type}
                .value=${this.proposedEndDate??""}
                @change=${async t=>{this.proposedEndDate=t.target.value??"",this.proposedRange=Array.from(this.customDateRanges?this.customDateRanges:y).find((t=>t[1].startDate()===this.proposedStartDate&&t[1].endDate()===this.proposedEndDate))?.[0]||"custom",await this.updateComplete,this.#y()}}
              >
              </titanium-date-input>

              <span error ?invisible=${this.#Y(this.proposedStartDate,this.proposedEndDate)}>From date cannot start after To date</span>
            </input-container>
          </section>
          <menu-actions
            ><md-text-button @click=${()=>this.open=!1}>Cancel</md-text-button>
            <md-text-button
              ?disabled=${this.startDate===this.proposedStartDate&&this.endDate===this.proposedEndDate&&this.proposedRange===this.range||"datetime-local"===this.type&&"custom"===this.proposedRange&&this.proposedStartDate?.length<16&&this.proposedEndDate?.length<16}
              @click=${()=>{this.#Y(this.proposedStartDate,this.proposedEndDate)&&(this.startDate=this.proposedStartDate,this.endDate=this.proposedEndDate,this.range=this.proposedRange,this.dispatchEvent(new Event("change")),this.open=!1)}}
              >Set</md-text-button
            >
          </menu-actions>
        </main>
      </md-menu>
    `}};n([r({type:String})],M.prototype,"range",null),n([r({type:String})],M.prototype,"startDate",null),n([r({type:String})],M.prototype,"endDate",null),n([r({type:String})],M.prototype,"label",null),n([r({type:String})],M.prototype,"type",null),n([r({type:Boolean,reflect:!0})],M.prototype,"disabled",null),n([r({type:Object})],M.prototype,"customDateRanges",null),n([r({attribute:"supporting-text"})],M.prototype,"supportingText",null),n([r()],M.prototype,"positioning",null),n([o("md-menu")],M.prototype,"menu",null),n([o("md-list")],M.prototype,"list",null),n([d()],M.prototype,"proposedRange",null),n([d()],M.prototype,"proposedStartDate",null),n([d()],M.prototype,"proposedEndDate",null),n([d()],M.prototype,"open",null),n([d()],M.prototype,"focused",null),M=n([l("titanium-date-range-selector")],M);let x=class extends t{#M;get eventsDemoInput(){return this.#M}set eventsDemoInput(t){this.#M=t}#e="2020-01-02";get startDate(){return this.#e}set startDate(t){this.#e=t}#a="2020-01-04";get endDate(){return this.#a}set endDate(t){this.#a=t}#x=!1;get eventFired(){return this.#x}set eventFired(t){this.#x=t}static{this.styles=[c,m,e`
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
        <titanium-date-range-selector startDate=${D().format("YYYY-MM-DD")} endDate=${D().format("YYYY-MM-DD")}></titanium-date-range-selector>
        <titanium-date-range-selector label="Reporting date"></titanium-date-range-selector>
        <titanium-date-range-selector range="thisWeek"></titanium-date-range-selector>
        <titanium-date-range-selector range="thisWeek"></titanium-date-range-selector>
        <titanium-date-range-selector endDate="2022-05-17"></titanium-date-range-selector>
        <titanium-date-range-selector startDate="2023-09-01"></titanium-date-range-selector>
        <titanium-date-range-selector
          label="Custom override"
          .customDateRanges=${new Map([...y,["allTime",{name:"All time, but different",startDate:()=>"",endDate:()=>"",icon:"dashboard"}]])}
        ></titanium-date-range-selector>
        <titanium-date-range-selector
          label="Completely custom items"
          range="lastWeekend"
          .customDateRanges=${new Map([["lastWeekend",{name:"Last weekend",startDate:()=>D().subtract(1,"week").endOf("week").subtract(1,"day").format("YYYY-MM-DD"),endDate:()=>D().startOf("week").format("YYYY-MM-DD"),icon:"weekend"}],["allTime",{name:"All time, but different",startDate:()=>"",endDate:()=>"",icon:"dashboard"}]])}
        ></titanium-date-range-selector>
      </div>

      <h1>Time</h1>
      <p>Examples using enable time</p>
      <div>
        <titanium-date-range-selector
          type="datetime-local"
          label="Created date"
          range="lastTen"
          .customDateRanges=${new Map([["lastTen",{name:"Last ten minutes",startDate:()=>D().subtract(10,"minutes").format("YYYY-MM-DDTHH:mm"),endDate:()=>D().format("YYYY-MM-DDTHH:mm"),icon:"timer"}],["allTime",{name:"All time, but different",startDate:()=>"",endDate:()=>"",icon:"dashboard"}],["lastThirty",{name:"Last thirty minutes",startDate:()=>D().subtract(30,"minutes").format("YYYY-MM-DDTHH:mm"),endDate:()=>D().format("YYYY-MM-DDTHH:mm"),icon:"timer"}],["lastHour",{name:"Last hour",startDate:()=>D().subtract(1,"hour").format("YYYY-MM-DDTHH:mm"),endDate:()=>D().format("YYYY-MM-DDTHH:mm"),icon:"alarm"}]])}
        ></titanium-date-range-selector>
      </div>
    `}};n([o("titanium-date-range-selector[events]")],x.prototype,"eventsDemoInput",null),n([d()],x.prototype,"startDate",null),n([d()],x.prototype,"endDate",null),n([d()],x.prototype,"eventFired",null),x=n([l("titanium-date-range-selector-playground")],x);let v=class extends t{static{this.styles=[h,e``]}render(){return a`
      <story-header name="Titanium date range selector" className="TitaniumDateRangeSelector"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-date-range-selector/project.json"
        ><titanium-date-range-selector-playground></titanium-date-range-selector-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-date-range-selector"></api-docs>
    `}};v=n([l("titanium-date-range-selector-demo")],v);export{v as TitaniumDateRangeSelectorDemo};
