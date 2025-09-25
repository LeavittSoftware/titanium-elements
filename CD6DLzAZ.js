import{i as t,c as e,E as s,x as i,H as a,_ as n,n as r,e as o,r as d,t as h}from"./CU2mI_nZ.js";import"./BGJk06zy.js";import{Q as l,M as c,D as u,d as p}from"./fEBq_QNq.js";p.extend(function(t,e){var s=e.prototype;s.quarter=function(t){return this.$utils().u(t)?Math.ceil((this.month()+1)/3):this.month(this.month()%3+3*(t-1))};var i=s.add;s.add=function(t,e){return t=Number(t),this.$utils().p(e)===l?this.add(3*t,c):i.bind(this)(t,e)};var a=s.startOf;s.startOf=function(t,e){var s=this.$utils(),i=!!s.u(e)||e;if(s.p(t)===l){var n=this.quarter()-1;return i?this.month(3*n).startOf(c).startOf(u):this.month(3*n+2).endOf(c).endOf(u)}return a.bind(this)(t,e)}});const m="quarter",Y=new Map([["allTime",{name:"All time",startDate:()=>"",endDate:()=>"",icon:"watch_later"}],["today",{name:"Today",startDate:()=>p().format("YYYY-MM-DD"),endDate:()=>p().format("YYYY-MM-DD"),icon:"today"}],["thisWeek",{name:"This week",startDate:()=>p().startOf("week").format("YYYY-MM-DD"),endDate:()=>p().endOf("week").format("YYYY-MM-DD"),icon:"calendar_view_week"}],["thisMonth",{name:"This month",startDate:()=>p().startOf("month").format("YYYY-MM-DD"),endDate:()=>p().endOf("month").format("YYYY-MM-DD"),icon:"calendar_month"}],["thisQuarter",{name:"This quarter",startDate:()=>p().startOf(m).format("YYYY-MM-DD"),endDate:()=>p().endOf(m).format("YYYY-MM-DD"),icon:"event"}],["thisYear",{name:"This year",startDate:()=>p().startOf("year").format("YYYY-MM-DD"),endDate:()=>p().endOf("year").format("YYYY-MM-DD"),icon:"calendar_today"}],["thisYearToDate",{name:"This year to date",startDate:()=>p().startOf("year").format("YYYY-MM-DD"),endDate:()=>p().format("YYYY-MM-DD"),icon:"calendar_view_day"}],["lastWeek",{name:"Last week",startDate:()=>p().subtract(1,"week").startOf("week").format("YYYY-MM-DD"),endDate:()=>p().subtract(1,"week").endOf("week").format("YYYY-MM-DD"),icon:"calendar_view_week"}],["lastMonth",{name:"Last month",startDate:()=>p().subtract(1,"month").startOf("month").format("YYYY-MM-DD"),endDate:()=>p().subtract(1,"month").endOf("month").format("YYYY-MM-DD"),icon:"calendar_month"}],["lastQuarter",{name:"Last quarter",startDate:()=>p().subtract(1,"quarter").startOf(m).format("YYYY-MM-DD"),endDate:()=>p().subtract(1,"quarter").endOf(m).format("YYYY-MM-DD"),icon:"event"}],["lastYear",{name:"Last year",startDate:()=>p().subtract(1,"year").startOf("year").format("YYYY-MM-DD"),endDate:()=>p().subtract(1,"year").endOf("year").format("YYYY-MM-DD"),icon:"calendar_today"}],["last12Months",{name:"Last 12 months",startDate:()=>p().add(-1,"year").format("YYYY-MM-DD"),endDate:()=>p().format("YYYY-MM-DD"),icon:"calendar_today"}],["lastYearToDate",{name:"Last year to date",startDate:()=>p().subtract(1,"year").startOf("year").format("YYYY-MM-DD"),endDate:()=>p().format("YYYY-MM-DD"),icon:"calendar_view_day"}],["yesterday",{name:"Yesterday",startDate:()=>p().subtract(1,"day").format("YYYY-MM-DD"),endDate:()=>p().subtract(1,"day").format("YYYY-MM-DD"),icon:"event_repeat"}]]);function D(t,e,s,i="Created",a=Y){return"custom"!==t?`${i} ${a.get(t)?.name?.toLowerCase()??""}`:e&&s?`${i} ${p(e).format("MMM D, YYYY")} to ${p(s).format("MMM D, YYYY")}`:s?`${i} to ${p(s).format("MMM D, YYYY")}`:`${i} from ${p(e).format("MMM D, YYYY")}`}let g=class extends t{#t="custom";get range(){return this.#t}set range(t){this.#t=t}#e="";get startDate(){return this.#e}set startDate(t){this.#e=t}#s="";get endDate(){return this.#s}set endDate(t){this.#s=t}#i="";get label(){return this.#i}set label(t){this.#i=t}#a="date";get type(){return this.#a}set type(t){this.#a=t}#n=!1;get disabled(){return this.#n}set disabled(t){this.#n=t}#r=null;get customDateRanges(){return this.#r}set customDateRanges(t){this.#r=t}#o="";get supportingText(){return this.#o}set supportingText(t){this.#o=t}#d="popover";get positioning(){return this.#d}set positioning(t){this.#d=t}#h;get menu(){return this.#h}set menu(t){this.#h=t}#l;get list(){return this.#l}set list(t){this.#l=t}#c="custom";get proposedRange(){return this.#c}set proposedRange(t){this.#c=t}#u="";get proposedStartDate(){return this.#u}set proposedStartDate(t){this.#u=t}#p="";get proposedEndDate(){return this.#p}set proposedEndDate(t){this.#p=t}#m;get open(){return this.#m}set open(t){this.#m=t}#Y=!1;get focused(){return this.#Y}set focused(t){this.#Y=t}async updated(t){if(t.has("range")||t.has("open")){const t=this.#D(this.range);t&&(this.startDate=t.startDate(),this.endDate=t.endDate())}(t.has("endDate")||t.has("startDate"))&&(this.range=Array.from(this.customDateRanges?this.customDateRanges:Y).find(t=>t[1].startDate()===this.startDate&&t[1].endDate()===this.endDate)?.[0]||"custom"),t.has("positioning")&&"popover"===this.positioning&&!this.showPopover&&(this.positioning="fixed")}async reset(){this.range="allTime"}#g(t,e){return!(t&&e&&p(t).isAfter(p(e)))}static{this.styles=e`
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
  `}#D(t){return this.customDateRanges?this.customDateRanges.get(t):Y.get(t)}#M(t=!1){if(!this.list)return;const e=this.list.items,s=e.find(t=>t.hasAttribute("selected"))||e[0];s&&(this.list.scrollTop=s.offsetTop-10,s.tabIndex=0,t&&s.focus())}render(){return i`
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
        <div>${function(t,e,s,i=Y){return"custom"!==t?`${i.get(t)?.name??""}`:e&&s?`${p(e).format("MMM D, YYYY")} to ${p(s).format("MMM D, YYYY")}`:s?`Ending ${p(s).format("MMM D, YYYY")}`:`Starting ${p(e).format("MMM D, YYYY")}`}(this.range,this.startDate,this.endDate,this.customDateRanges?this.customDateRanges:Y)||i`&nbsp;`}</div>

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
        @closing=${t=>{this.open=!1,a(this,t)}}
        @opening=${async t=>{this.proposedEndDate=this.endDate,this.proposedStartDate=this.startDate,this.proposedRange=this.range,a(this,t),await this.updateComplete,this.#M()}}
      >
        <main>
          <section>
            <md-list>
              <!-- Recompute ranges on menu open -->
              ${this.open?Array.from(this.customDateRanges?this.customDateRanges:Y).map(t=>i`<md-list-item
                        type="button"
                        ?selected=${this.proposedRange===t[0]}
                        @click=${()=>{this.proposedRange=t[0];const e=this.#D(t[0]);e&&(this.proposedStartDate=e.startDate()??"",this.proposedEndDate=e.endDate()??"")}}
                        value=${t[0]}
                      >
                        <md-icon slot="start">${t[1].icon}</md-icon>
                        <div slot="headline">${t[1].name}</div>
                      </md-list-item>`):s}
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
                @change=${async t=>{this.proposedStartDate=t.target.value??"",this.proposedRange=Array.from(this.customDateRanges?this.customDateRanges:Y).find(t=>t[1].startDate()===this.proposedStartDate&&t[1].endDate()===this.proposedEndDate)?.[0]||"custom",await this.updateComplete,this.#M()}}
              ></titanium-date-input>

              <titanium-date-input
                end-date
                label="To"
                type=${this.type}
                .value=${this.proposedEndDate??""}
                @change=${async t=>{this.proposedEndDate=t.target.value??"",this.proposedRange=Array.from(this.customDateRanges?this.customDateRanges:Y).find(t=>t[1].startDate()===this.proposedStartDate&&t[1].endDate()===this.proposedEndDate)?.[0]||"custom",await this.updateComplete,this.#M()}}
              >
              </titanium-date-input>

              <span error ?invisible=${this.#g(this.proposedStartDate,this.proposedEndDate)}>From date cannot start after To date</span>
            </input-container>
          </section>
          <menu-actions
            ><md-text-button @click=${()=>this.open=!1}>Cancel</md-text-button>
            <md-text-button
              ?disabled=${this.startDate===this.proposedStartDate&&this.endDate===this.proposedEndDate&&this.proposedRange===this.range||"datetime-local"===this.type&&"custom"===this.proposedRange&&this.proposedStartDate?.length<16&&this.proposedEndDate?.length<16}
              @click=${()=>{this.#g(this.proposedStartDate,this.proposedEndDate)&&(this.startDate=this.proposedStartDate,this.endDate=this.proposedEndDate,this.range=this.proposedRange,this.dispatchEvent(new Event("change")),this.open=!1)}}
              >Set</md-text-button
            >
          </menu-actions>
        </main>
      </md-menu>
    `}};n([r({type:String})],g.prototype,"range",null),n([r({type:String})],g.prototype,"startDate",null),n([r({type:String})],g.prototype,"endDate",null),n([r({type:String})],g.prototype,"label",null),n([r({type:String})],g.prototype,"type",null),n([r({type:Boolean,reflect:!0})],g.prototype,"disabled",null),n([r({type:Object})],g.prototype,"customDateRanges",null),n([r({attribute:"supporting-text"})],g.prototype,"supportingText",null),n([r()],g.prototype,"positioning",null),n([o("md-menu")],g.prototype,"menu",null),n([o("md-list")],g.prototype,"list",null),n([d()],g.prototype,"proposedRange",null),n([d()],g.prototype,"proposedStartDate",null),n([d()],g.prototype,"proposedEndDate",null),n([d()],g.prototype,"open",null),n([d()],g.prototype,"focused",null),g=n([h("titanium-date-range-selector")],g);export{Y as D,D as r};
