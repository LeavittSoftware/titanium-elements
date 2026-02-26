import{i as t,b as e,f as i,K as s,M as a,N as n,_ as r,n as o,e as d,r as l,t as h}from"./BkdWKSMI.js";import"./-LEy-2I5.js";import{Q as c,M as u,D as m,d as p}from"./fEBq_QNq.js";p.extend(function(t,e){var i=e.prototype;i.quarter=function(t){return this.$utils().u(t)?Math.ceil((this.month()+1)/3):this.month(this.month()%3+3*(t-1))};var s=i.add;i.add=function(t,e){return t=Number(t),this.$utils().p(e)===c?this.add(3*t,u):s.bind(this)(t,e)};var a=i.startOf;i.startOf=function(t,e){var i=this.$utils(),s=!!i.u(e)||e;if(i.p(t)===c){var n=this.quarter()-1;return s?this.month(3*n).startOf(u).startOf(m):this.month(3*n+2).endOf(u).endOf(m)}return a.bind(this)(t,e)}});const Y="quarter",D=new Map([["allTime",{name:"All time",startDate:()=>"",endDate:()=>"",icon:"watch_later"}],["today",{name:"Today",startDate:()=>p().format("YYYY-MM-DD"),endDate:()=>p().format("YYYY-MM-DD"),icon:"today"}],["thisWeek",{name:"This week",startDate:()=>p().startOf("week").format("YYYY-MM-DD"),endDate:()=>p().endOf("week").format("YYYY-MM-DD"),icon:"calendar_view_week"}],["thisMonth",{name:"This month",startDate:()=>p().startOf("month").format("YYYY-MM-DD"),endDate:()=>p().endOf("month").format("YYYY-MM-DD"),icon:"calendar_month"}],["thisQuarter",{name:"This quarter",startDate:()=>p().startOf(Y).format("YYYY-MM-DD"),endDate:()=>p().endOf(Y).format("YYYY-MM-DD"),icon:"event"}],["thisYear",{name:"This year",startDate:()=>p().startOf("year").format("YYYY-MM-DD"),endDate:()=>p().endOf("year").format("YYYY-MM-DD"),icon:"calendar_today"}],["thisYearToDate",{name:"This year to date",startDate:()=>p().startOf("year").format("YYYY-MM-DD"),endDate:()=>p().format("YYYY-MM-DD"),icon:"calendar_view_day"}],["lastWeek",{name:"Last week",startDate:()=>p().subtract(1,"week").startOf("week").format("YYYY-MM-DD"),endDate:()=>p().subtract(1,"week").endOf("week").format("YYYY-MM-DD"),icon:"calendar_view_week"}],["lastMonth",{name:"Last month",startDate:()=>p().subtract(1,"month").startOf("month").format("YYYY-MM-DD"),endDate:()=>p().subtract(1,"month").endOf("month").format("YYYY-MM-DD"),icon:"calendar_month"}],["lastQuarter",{name:"Last quarter",startDate:()=>p().subtract(1,"quarter").startOf(Y).format("YYYY-MM-DD"),endDate:()=>p().subtract(1,"quarter").endOf(Y).format("YYYY-MM-DD"),icon:"event"}],["lastYear",{name:"Last year",startDate:()=>p().subtract(1,"year").startOf("year").format("YYYY-MM-DD"),endDate:()=>p().subtract(1,"year").endOf("year").format("YYYY-MM-DD"),icon:"calendar_today"}],["last12Months",{name:"Last 12 months",startDate:()=>p().add(-1,"year").format("YYYY-MM-DD"),endDate:()=>p().format("YYYY-MM-DD"),icon:"calendar_today"}],["lastYearToDate",{name:"Last year to date",startDate:()=>p().subtract(1,"year").startOf("year").format("YYYY-MM-DD"),endDate:()=>p().format("YYYY-MM-DD"),icon:"calendar_view_day"}],["yesterday",{name:"Yesterday",startDate:()=>p().subtract(1,"day").format("YYYY-MM-DD"),endDate:()=>p().subtract(1,"day").format("YYYY-MM-DD"),icon:"event_repeat"}]]);function g(t,e,i,s="Created",a=D){return"custom"!==t?`${s} ${a.get(t)?.name?.toLowerCase()??""}`:e&&i?`${s} ${p(e).format("MMM D, YYYY")} to ${p(i).format("MMM D, YYYY")}`:i?`${s} to ${p(i).format("MMM D, YYYY")}`:`${s} from ${p(e).format("MMM D, YYYY")}`}let f=class extends t{#t="custom";get range(){return this.#t}set range(t){this.#t=t}#e="";get startDate(){return this.#e}set startDate(t){this.#e=t}#i="";get endDate(){return this.#i}set endDate(t){this.#i=t}#s="";get label(){return this.#s}set label(t){this.#s=t}#a="date";get type(){return this.#a}set type(t){this.#a=t}#n=!1;get disabled(){return this.#n}set disabled(t){this.#n=t}#r=!1;get filled(){return this.#r}set filled(t){this.#r=t}#o=null;get customDateRanges(){return this.#o}set customDateRanges(t){this.#o=t}#d="";get supportingText(){return this.#d}set supportingText(t){this.#d=t}#l="popover";get positioning(){return this.#l}set positioning(t){this.#l=t}#h;get menu(){return this.#h}set menu(t){this.#h=t}#c;get list(){return this.#c}set list(t){this.#c=t}#u="custom";get proposedRange(){return this.#u}set proposedRange(t){this.#u=t}#m="";get proposedStartDate(){return this.#m}set proposedStartDate(t){this.#m=t}#p="";get proposedEndDate(){return this.#p}set proposedEndDate(t){this.#p=t}#Y;get open(){return this.#Y}set open(t){this.#Y=t}#D=!1;get focused(){return this.#D}set focused(t){this.#D=t}async updated(t){if(t.has("range")||t.has("open")){const t=this.#g(this.range);t&&(this.startDate=t.startDate(),this.endDate=t.endDate())}(t.has("endDate")||t.has("startDate"))&&(this.range=Array.from(this.customDateRanges?this.customDateRanges:D).find(t=>t[1].startDate()===this.startDate&&t[1].endDate()===this.endDate)?.[0]||"custom"),t.has("positioning")&&"popover"===this.positioning&&!this.showPopover&&(this.positioning="fixed")}async reset(){this.range="allTime"}#f(t,e){return!(t&&e&&p(t).isAfter(p(e)))}static{this.styles=e`
    :host {
      display: flex;
      position: relative;
    }

    :host([filled]) {
      --md-menu-container-shape: 16px;

      --md-filled-field-container-shape: 16px;
      --md-filled-field-active-indicator-height: 0;
      --md-filled-field-error-active-indicator-height: 0;
      --md-filled-field-hover-active-indicator-height: 0;
      --md-filled-field-focus-active-indicator-height: 0;
      --md-filled-field-disabled-active-indicator-height: 0;
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
      border-radius: 0 0 4px 4px;
    }

    :host([filled]) menu-actions {
      border-radius: 0 0 16px 16px;
    }

    input-container {
      grid-area: inputs;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 24px;

      margin-right: 16px;
    }

    md-filled-field,
    md-outlined-field {
      width: 100%;
    }

    md-filled-field md-icon,
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
  `}#g(t){return this.customDateRanges?this.customDateRanges.get(t):D.get(t)}#M(t=!1){if(!this.list)return;const e=this.list.items,i=e.find(t=>t.hasAttribute("selected"))||e[0];i&&(this.list.scrollTop=i.offsetTop-10,i.tabIndex=0,t&&i.focus())}render(){return a`
      <${this.filled?s`md-filled-field`:s`md-outlined-field`}
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
        <div>${function(t,e,i,s=D){return"custom"!==t?`${s.get(t)?.name??""}`:e&&i?`${p(e).format("MMM D, YYYY")} to ${p(i).format("MMM D, YYYY")}`:i?`Ending ${p(i).format("MMM D, YYYY")}`:`Starting ${p(e).format("MMM D, YYYY")}`}(this.range,this.startDate,this.endDate,this.customDateRanges?this.customDateRanges:D)||a`&nbsp;`}</div>

        <md-icon slot="start">${this.#g(this.range)?.icon||"date_range"}</md-icon>
        <md-icon slot="end">${this.open?"arrow_drop_up":"arrow_drop_down"}</md-icon>
      </${this.filled?s`md-filled-field`:s`md-outlined-field`}>

      <!-- stay-open-on-focusout -->
      <md-menu
        default-focus="none"
        .positioning=${this.positioning}
        id="menu"
        anchor="field"
        .open=${this.open}
        @closing=${t=>{this.open=!1,n(this,t)}}
        @opening=${async t=>{this.proposedEndDate=this.endDate,this.proposedStartDate=this.startDate,this.proposedRange=this.range,n(this,t),await this.updateComplete,this.#M()}}
      >
        <main>
          <section>
            <md-list>
              <!-- Recompute ranges on menu open -->
              ${this.open?Array.from(this.customDateRanges?this.customDateRanges:D).map(t=>a`<md-list-item
                          type="button"
                          ?selected=${this.proposedRange===t[0]}
                          @click=${()=>{this.proposedRange=t[0];const e=this.#g(t[0]);e&&(this.proposedStartDate=e.startDate()??"",this.proposedEndDate=e.endDate()??"")}}
                          value=${t[0]}
                        >
                          <md-icon slot="start">${t[1].icon}</md-icon>
                          <div slot="headline">${t[1].name}</div>
                        </md-list-item>`):i}
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
                .filled=${this.filled}
                .value=${this.proposedStartDate??""}
                @change=${async t=>{this.proposedStartDate=t.target.value??"",this.proposedRange=Array.from(this.customDateRanges?this.customDateRanges:D).find(t=>t[1].startDate()===this.proposedStartDate&&t[1].endDate()===this.proposedEndDate)?.[0]||"custom",await this.updateComplete,this.#M()}}
              ></titanium-date-input>

              <titanium-date-input
                end-date
                label="To"
                type=${this.type}
                .filled=${this.filled}
                .value=${this.proposedEndDate??""}
                @change=${async t=>{this.proposedEndDate=t.target.value??"",this.proposedRange=Array.from(this.customDateRanges?this.customDateRanges:D).find(t=>t[1].startDate()===this.proposedStartDate&&t[1].endDate()===this.proposedEndDate)?.[0]||"custom",await this.updateComplete,this.#M()}}
              >
              </titanium-date-input>

              <span error ?invisible=${this.#f(this.proposedStartDate,this.proposedEndDate)}>From date cannot start after To date</span>
            </input-container>
          </section>
          <menu-actions
            ><md-text-button @click=${()=>this.open=!1}>Cancel</md-text-button>
            <md-text-button
              ?disabled=${this.startDate===this.proposedStartDate&&this.endDate===this.proposedEndDate&&this.proposedRange===this.range||"datetime-local"===this.type&&"custom"===this.proposedRange&&this.proposedStartDate?.length<16&&this.proposedEndDate?.length<16}
              @click=${()=>{this.#f(this.proposedStartDate,this.proposedEndDate)&&(this.startDate=this.proposedStartDate,this.endDate=this.proposedEndDate,this.range=this.proposedRange,this.dispatchEvent(new Event("change")),this.open=!1)}}
              >Set</md-text-button
            >
          </menu-actions>
        </main>
      </md-menu>
    `}};r([o({type:String})],f.prototype,"range",null),r([o({type:String})],f.prototype,"startDate",null),r([o({type:String})],f.prototype,"endDate",null),r([o({type:String})],f.prototype,"label",null),r([o({type:String})],f.prototype,"type",null),r([o({type:Boolean,reflect:!0})],f.prototype,"disabled",null),r([o({type:Boolean,reflect:!0})],f.prototype,"filled",null),r([o({type:Object})],f.prototype,"customDateRanges",null),r([o({attribute:"supporting-text"})],f.prototype,"supportingText",null),r([o()],f.prototype,"positioning",null),r([d("md-menu")],f.prototype,"menu",null),r([d("md-list")],f.prototype,"list",null),r([l()],f.prototype,"proposedRange",null),r([l()],f.prototype,"proposedStartDate",null),r([l()],f.prototype,"proposedEndDate",null),r([l()],f.prototype,"open",null),r([l()],f.prototype,"focused",null),f=r([h("titanium-date-range-selector")],f);export{D,g as r};
