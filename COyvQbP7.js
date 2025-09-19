import{L as t,i as e,S as i,c as a,u as s,v as r,w as o,x as l,_ as n,n as d,r as c,e as h,t as m,B as p,y as u,z as v,E as g,D as f,T as b,F as y,P as _,H as w,k as $,b as x,A as D,d as S,h as T,p as j,G as A}from"./CjNQuVkO.js";import{S as R}from"./C1gdeTM2.js";import"./Bje6lWER.js";import{F as E}from"./BWaTkGXi.js";import"./DV5Bk8uf.js";import"./Cofrlnq-.js";import"./DLk4Kl58.js";import"./CG-bcov6.js";import{D as I,r as L}from"./D-sA4sri.js";import{s as k}from"./D4mh-ozs.js";import"./C_VK4tuE.js";import"./CRjaoRMP.js";import{d as C}from"./fEBq_QNq.js";import{D as B}from"./DTS7lhmZ.js";import{g as M}from"./OXmljVLM.js";import{T as N}from"./CjLtNPT3.js";import"./CkQSKr6p.js";import"./CNvBKIG6.js";import"./CAG6wJsV.js";import"./CbI_IG_B.js";import"./Bz8i6eju.js";import"./CX3AVlnI.js";import"./DQLhV9sL.js";let Y=class extends(t(e)){#t;get isActive(){return this.#t}set isActive(t){this.#t=t}#e;get apiService(){return this.#e}set apiService(t){this.#e=t}#i;get filterController(){return this.#i}set filterController(t){this.#i=t}#a=[];get template(){return this.#a}set template(t){this.#a=t}#s;get templateId(){return this.#s}set templateId(t){this.#s=t}#r=!0;#o;get startDate(){return this.#o}set startDate(t){this.#o=t}#l;get endDate(){return this.#l}set endDate(t){this.#l=t}#n;get dialog(){return this.#n}set dialog(t){this.#n=t}#d;get dateRangeSelect(){return this.#d}set dateRangeSelect(t){this.#d=t}async firstUpdated(){this.filterController.subscribeToFilterChange(async()=>{this.#c(),this.requestUpdate("filterController")})}async updated(t){this.isActive&&t.has("isActive")&&this.#c()}async#c(){this.filterController.getValue("template")&&this.#r&&(this.template=await this.#h())}async#h(){if(!this.apiService)return console.warn("No api service provided"),[];const t=["select=Id,Name,IsExpired","orderby=Name"];try{const e=this.apiService.getAsync(`EmailTemplates?${t.join("&")}`);this.loadWhile(e);const i=(await e).toList();return this.#r=!1,i}catch(t){this.dispatchEvent(new i(t))}return[]}async open(){this.#r&&(this.template=await this.#h()),this.templateId=this.filterController.getValue("template")??"";const t=this.filterController.getValue("dateRange");this.startDate=("custom"===t?this.filterController.getValue("startDate"):I.get(t)?.startDate())||"",this.endDate=("custom"===t?this.filterController.getValue("endDate"):I.get(t)?.endDate())||"",this.dialog.show()}static{this.styles=[a`
      :host {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px;
      }

      md-dialog {
        max-width: 550px;
        width: calc(100vw - 24px);

        div[inactive] {
          font-size: 12px;
          line-height: 14px;
          opacity: 0.8;
        }

        md-outlined-select {
          width: 100%;
          margin-top: 24px;
        }
      }

      [hidden] {
        display: none !important;
      }
    `]}render(){return l`
      <md-input-chip
        remove-only
        ?hidden=${!this.filterController.getValue("template")||this.isLoading}
        label="${this.template.find(t=>t.Id===Number(this.filterController.getValue("template")))?.Name??""} template"
        @remove=${t=>{t.preventDefault(),this.filterController.setValue("template",null)}}
      >
        <md-icon slot="icon">content_copy</md-icon>
      </md-input-chip>

      <md-input-chip
        remove-only
        ?hidden=${!this.filterController.getValue("dateRange")||"allTime"===this.filterController.getValue("dateRange")}
        label=${L(this.filterController.getValue("dateRange"),this.filterController.getValue("startDate")??null,this.filterController.getValue("endDate")??null,"Sent")}
        @remove=${t=>{t.preventDefault(),this.filterController.setValue("dateRange",null),this.filterController.setValue("startDate",null),this.filterController.setValue("endDate",null)}}
      >
        <md-icon slot="icon">date_range</md-icon>
      </md-input-chip>

      <md-dialog
        @open=${t=>{s(t.target),r(t.target)}}
        @close=${t=>{o(t.target)}}
      >
        <div slot="headline">Filter logs by</div>
        <form slot="content" method="dialog">
          <titanium-date-range-selector
            label="Sent"
            .startDate=${this.startDate}
            .endDate=${this.endDate}
            @change=${t=>{this.startDate=t.target.startDate||"",this.endDate=t.target.endDate||""}}
          ></titanium-date-range-selector>

          <md-outlined-select
            label="Templates"
            .value=${this.templateId??""}
            @change=${t=>this.templateId=t.target.value}
          >
            <md-icon slot="leading-icon">content_copy</md-icon>
            <md-select-option></md-select-option>
            ${this.template.map(t=>l`<md-select-option ?selected=${t.Id===Number(this.templateId)} value=${t.Id??""}>
                  <div slot="headline">${t.Name}</div>
                  ${t.IsExpired?l`<div inactive slot="supporting-text">Inactive</div>`:""}
                  <md-icon slot="start">content_copy</md-icon>
                </md-select-option>`)}
          </md-outlined-select>
        </form>
        <div slot="actions">
          <md-text-button @click=${()=>this.dialog.close("cancel")}> Close </md-text-button>
          <md-text-button
            @click=${()=>{this.filterController.setValue("template",this.templateId||null),this.filterController.setValue("dateRange","allTime"===this.dateRangeSelect.range?null:this.dateRangeSelect.range),this.filterController.setValue("startDate","custom"===this.dateRangeSelect.range&&this.startDate||null),this.filterController.setValue("endDate","custom"===this.dateRangeSelect.range&&this.endDate||null),this.dialog.close("apply")}}
            >Apply</md-text-button
          >
        </div>
      </md-dialog>
    `}};n([d({type:Boolean})],Y.prototype,"isActive",null),n([d({type:Object})],Y.prototype,"apiService",null),n([c()],Y.prototype,"filterController",null),n([c()],Y.prototype,"template",null),n([c()],Y.prototype,"templateId",null),n([c()],Y.prototype,"startDate",null),n([c()],Y.prototype,"endDate",null),n([h("md-dialog")],Y.prototype,"dialog",null),n([h("titanium-date-range-selector")],Y.prototype,"dateRangeSelect",null),Y=n([m("leavitt-email-history-view-list-filter-dialog")],Y);class z extends p{renderElevationOrOutline(){return l`<md-elevation part="elevation"></md-elevation>`}}const H=a`:host{--_container-color: var(--md-filled-button-container-color, var(--md-sys-color-primary, #6750a4));--_container-elevation: var(--md-filled-button-container-elevation, 0);--_container-height: var(--md-filled-button-container-height, 40px);--_container-shadow-color: var(--md-filled-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_disabled-container-color: var(--md-filled-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-filled-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-filled-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-filled-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-filled-button-focus-container-elevation, 0);--_focus-label-text-color: var(--md-filled-button-focus-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-container-elevation: var(--md-filled-button-hover-container-elevation, 1);--_hover-label-text-color: var(--md-filled-button-hover-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-color: var(--md-filled-button-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-opacity: var(--md-filled-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filled-button-label-text-color, var(--md-sys-color-on-primary, #fff));--_label-text-font: var(--md-filled-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filled-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filled-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-container-elevation: var(--md-filled-button-pressed-container-elevation, 0);--_pressed-label-text-color: var(--md-filled-button-pressed-label-text-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-color: var(--md-filled-button-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-opacity: var(--md-filled-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-filled-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-button-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_hover-icon-color: var(--md-filled-button-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-color: var(--md-filled-button-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-size: var(--md-filled-button-icon-size, 18px);--_pressed-icon-color: var(--md-filled-button-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_container-shape-start-start: var(--md-filled-button-container-shape-start-start, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-filled-button-container-shape-start-end, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-filled-button-container-shape-end-end, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-filled-button-container-shape-end-start, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-filled-button-leading-space, 24px);--_trailing-space: var(--md-filled-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-filled-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-filled-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-filled-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-filled-button-with-trailing-icon-trailing-space, 16px)}
`;let O=class extends z{};O.styles=[u,k,H],O=n([m("md-filled-button")],O);class U extends v{constructor(t){if(super(t),this.it=g,t.type!==f.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===g||null==t)return this._t=void 0,this.it=t;if(t===b)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}U.directiveName="unsafeHTML",U.resultType=1;const G=y(U);let V=class extends(t(e)){#e;get apiService(){return this.#e}set apiService(t){this.#e=t}#m;get emailTemplateLogId(){return this.#m}set emailTemplateLogId(t){this.#m=t}#p;get emailTemplateLog(){return this.#p}set emailTemplateLog(t){this.#p=t}#n;get dialog(){return this.#n}set dialog(t){this.#n=t}#u;async open(t){if(this.emailTemplateLogId=t,this.emailTemplateLog=null,await this.updateComplete,this.emailTemplateLog=await this.#v(t),this.emailTemplateLog)return this.dialog.returnValue="",this.dialog.show(),await new Promise(t=>{this.#u=t})}async#v(t){if(!this.apiService)return console.warn("No api service provided"),null;const e=[];try{const i=this.apiService.getAsync(`EmailTemplateLogs(${t})?${e.join("&")}`);this.loadWhile(i),this.dispatchEvent(new _(i));const a=await i;return a?.entity}catch(t){this.dispatchEvent(new i(t))}return null}static{this.styles=[a`
      md-dialog {
        max-width: 750px;
        width: calc(100vw - 24px);

        height: min-content;
        max-height: calc(100vh - 24px);

        scrollbar-color: var(--md-sys-color-surface-container-highest) transparent;
        scrollbar-width: thin;

        main {
          margin: 12px 24px;
          background-color: #f7f7f7;
          border-radius: 12px;

          overflow-x: auto;
        }
      }

      [hidden] {
        display: none !important;
      }
    `]}render(){return l`
      <md-dialog
        @open=${t=>{r(t.target),s(t.target)}}
        @close=${t=>{if("done"===t.target.returnValue||"navigation-close"===t.target.returnValue)return o(t.target),this.#u(t.target.returnValue);t.preventDefault()}}
      >
        <div slot="headline">Email log</div>

        <main slot="content">${G(this.emailTemplateLog?.EmailBody??"")}</main>
        <div slot="actions">
          <md-filled-button autofocus ?disabled=${this.isLoading} @click=${()=>this.dialog.close("done")}>Done</md-filled-button>
        </div>
      </md-dialog>
    `}};n([d({type:Object})],V.prototype,"apiService",null),n([c()],V.prototype,"emailTemplateLogId",null),n([c()],V.prototype,"emailTemplateLog",null),n([h("md-dialog")],V.prototype,"dialog",null),V=n([m("leavitt-view-sent-email-dialog")],V);let F=class extends(t(e)){#t;get isActive(){return this.#t}set isActive(t){this.#t=t}#e;get apiService(){return this.#e}set apiService(t){this.#e=t}#g;get path(){return this.#g}set path(t){this.#g=t}#f=[];get logs(){return this.#f}set logs(t){this.#f=t}#b=[];get selected(){return this.#b}set selected(t){this.#b=t}#y="";get searchTerm(){return this.#y}set searchTerm(t){this.#y=t}#_=0;get resultTotal(){return this.#_}set resultTotal(t){this.#_=t}#w="desc";get sortDirection(){return this.#w}set sortDirection(t){this.#w=t}#$="SentDate";get sortBy(){return this.#$}set sortBy(t){this.#$=t}#i;get filterController(){return this.#i}set filterController(t){this.#i=t}#x;get dataTable(){return this.#x}set dataTable(t){this.#x=t}#D;get viewDialog(){return this.#D}set viewDialog(t){this.#D=t}#S;get filterModal(){return this.#S}set filterModal(t){this.#S=t}#T=!0;constructor(){super(),this.filterController=new E(""),this.filterController.setFilter("dateRange",()=>""),this.filterController.setFilter("startDate",()=>""),this.filterController.setFilter("endDate",()=>""),this.filterController.setFilter("template",t=>`EmailTemplateId eq ${t}`),this.filterController.subscribeToFilterChange(async()=>{this.isActive?(this.dataTable.resetPage(),this.#j()):this.#T=!0}),this.filterController.loadFromQueryString()}updated(t){this.isActive&&t.has("isActive")&&this.#T&&this.#j(),t.has("path")&&(this.filterController.path=this.path)}#j(){this.#A(this.searchTerm)}#R(t){this.sortDirection=t.detail,this.dataTable.resetPage(),this.#j()}#E(t){this.sortBy=t.detail,this.dataTable.resetPage(),this.#j()}#I=new B(t=>this.#A(t));renderRecipients(t,e=1){const i=t?.split(",").filter(t=>!!t).map(t=>t.trim()).reverse()??[];return i?.length>e?l`${w(i.slice(0,e),t=>t,t=>l`${t} <br />`)} <span more> ${i.length-e} more... </span>`:w(i,t=>t,t=>l`${t} <br />`)}async#A(t){if(!this.apiService)return void console.warn("No api service provided");let e=[];const a=M(t),s=a.map(t=>`(contains(Subject, '${t}') or contains(Recipients, '${t}'))`).join(" and ");a.length>0&&e.push(`${s}`);const r=this.filterController.getValue("dateRange"),o="custom"===r?this.filterController.getValue("startDate"):I.get(r)?.startDate(),l="custom"===r?this.filterController.getValue("endDate"):I.get(r)?.endDate();o&&e.push(`SentDate ge ${C(o).format("YYYY-MM-DD")}`),l&&e.push(`SentDate le ${C(l).format("YYYY-MM-DD")}`),e=[...e,...this.filterController.getActiveFilterOdata()];const n=["select=Id,Recipients,SentDate,Subject","expand=EmailTemplate(select=Id,Name,IsExpired)",`top=${await this.dataTable.getTake()}`,`orderby=${this.sortBy} ${this.sortDirection}`,"skip="+await this.dataTable.getTake()*await this.dataTable.getPage(),"count=true"];e.length>0&&n.push(`filter=${e.join(" and ")}`);try{const t=this.apiService.getAsync(`EmailTemplateLogs/?${n.join("&")}`);this.dataTable.loadWhile(t),this.loadWhile(t);const e=await t;this.resultTotal=e.odataCount,this.logs=e.toList(),this.#T=!1}catch(t){this.dispatchEvent(new i(t))}}static{this.styles=[$,x,a`
      :host {
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: 24px;
      }

      [inactive],
      span[time],
      span[more] {
        font-size: 12px;
        line-height: 14px;
        opacity: 0.8;
      }

      md-filled-tonal-icon-button {
        --md-filled-tonal-icon-button-container-height: 32px;
        --md-filled-tonal-icon-button-icon-size: 21px;
      }

      [hidden] {
        display: none !important;
      }
    `]}render(){return l`
      <titanium-header header="Email history" subHeader="A comprehensive record of email correspondence originating from this tool" no-nav></titanium-header>
      <titanium-data-table
        header="Emails"
        disable-select
        @selected-changed=${t=>{this.selected=[...t.detail]}}
        @paging-changed=${()=>this.#j()}
        .count=${this.resultTotal}
        .items=${this.logs}
        .searchTerm=${this.searchTerm}
      >
        <titanium-search-input
          slot="search-button"
          title="Search by recipients or subject"
          placeholder="Recipients or subject"
          .value=${this.searchTerm}
          @input=${t=>{this.searchTerm=t.target.value,this.dataTable.resetPage(),this.#I.debounce(this.searchTerm)}}
        ></titanium-search-input>

        <div slot="table-actions" style="position:relative;">
          <md-icon-button
            id="menu-anchor"
            aria-haspopup="true"
            aria-controls="menu"
            aria-expanded="false"
            @click=${t=>{const e=t.target.getRootNode().querySelector("#menu");e.open=!e.open}}
          >
            <md-icon>more_vert</md-icon>
          </md-icon-button>

          <md-menu
            id="menu"
            anchor="menu-anchor"
            @close-menu=${t=>{t.detail.itemPath?.[0]?.action?.()}}
          >
            <md-menu-item .action=${()=>this.#j()}>
              <md-icon slot="start">refresh</md-icon>
              Refresh
            </md-menu-item>
          </md-menu>
        </div>

        <leavitt-email-history-view-list-filter-dialog
          .isActive=${this.isActive}
          slot="filters"
          .filterController=${this.filterController}
          .apiService=${this.apiService}
        ></leavitt-email-history-view-list-filter-dialog>

        <md-icon-button slot="filter-button" @click=${async()=>this.filterModal.open()}>
          <md-icon>filter_list</md-icon>
        </md-icon-button>

        <titanium-data-table-header
          width="150px"
          slot="table-headers"
          title="Sent"
          column-name="SentDate"
          @sort-by-changed=${this.#E}
          .sortBy=${this.sortBy}
          .sortDirection=${this.sortDirection}
          @sort-direction-changed=${this.#R}
        ></titanium-data-table-header>

        <titanium-data-table-header
          large
          slot="table-headers"
          column-name="Subject"
          title="Subject"
          @sort-by-changed=${this.#E}
          .sortBy=${this.sortBy}
          .sortDirection=${this.sortDirection}
          @sort-direction-changed=${this.#R}
        ></titanium-data-table-header>

        <titanium-data-table-header
          desktop
          slot="table-headers"
          column-name="Recipients"
          title="Recipients"
          @sort-by-changed=${this.#E}
          .sortBy=${this.sortBy}
          .sortDirection=${this.sortDirection}
          @sort-direction-changed=${this.#R}
        ></titanium-data-table-header>

        <titanium-data-table-header
          desktop
          slot="table-headers"
          column-name="EmailTemplate/Name"
          title="Email template"
          @sort-by-changed=${this.#E}
          .sortBy=${this.sortBy}
          .sortDirection=${this.sortDirection}
          @sort-direction-changed=${this.#R}
        ></titanium-data-table-header>
        <titanium-data-table-header width="50px" no-sort slot="table-headers"></titanium-data-table-header>
        ${w(this.logs??[],t=>t.Id,t=>l`
            <titanium-data-table-item disable-select .item=${t} slot="items">
              <row-item width="150px" ellipsis date
                >${t.SentDate?l`${C(t.SentDate).format("MMM DD, YY")}<br /><span time>${C(t.SentDate).format("h:mm A")}</span>`:"-"}</row-item
              >
              <row-item large>${t.Subject??"-"} </row-item>
              <row-item desktop title=${t.Recipients??""}>${this.renderRecipients(t.Recipients??null)}</row-item>
              <row-item desktop>
                <div>${t.EmailTemplate?.Name}</div>
                ${t.EmailTemplate?.IsExpired?l`<div inactive>Inactive</div>`:""}</row-item
              >
              <row-item width="50px"
                ><md-filled-tonal-icon-button @click=${()=>this.viewDialog.open(t.Id??0)}><md-icon>pageview</md-icon></md-filled-tonal-icon-button>
              </row-item>
            </titanium-data-table-item>
          `)}
      </titanium-data-table>
      <leavitt-view-sent-email-dialog .apiService=${this.apiService}></leavitt-view-sent-email-dialog>
    `}};n([d({type:Boolean})],F.prototype,"isActive",null),n([d({type:Object})],F.prototype,"apiService",null),n([d({type:String})],F.prototype,"path",null),n([c()],F.prototype,"logs",null),n([c()],F.prototype,"selected",null),n([c()],F.prototype,"searchTerm",null),n([c()],F.prototype,"resultTotal",null),n([c()],F.prototype,"sortDirection",null),n([c()],F.prototype,"sortBy",null),n([c()],F.prototype,"filterController",null),n([h("titanium-data-table")],F.prototype,"dataTable",null),n([h("leavitt-view-sent-email-dialog")],F.prototype,"viewDialog",null),n([h("leavitt-email-history-view-list-filter-dialog")],F.prototype,"filterModal",null),F=n([m("leavitt-email-history-viewer")],F);let P=class extends(N(e)){#e;get apiService(){return this.#e}set apiService(t){this.#e=t}#L;get demo1(){return this.#L}set demo1(t){this.#L=t}constructor(){super(),this.apiService=new D(new S),this.apiService.baseUrl="https://devapi3.leavitt.com/",this.apiService.addHeader("X-LGAppName","EducationAdminV2")}static{this.styles=[T,j,a`
      :host {
        display: flex;
        flex-direction: column;

        margin: 24px 12px;
      }

      main {
        border: 1px solid var(--md-sys-color-outline);
        padding: 24px;
        border-radius: 8px;
        display: grid;
        gap: 12px;
        margin: 24px 0 36px 0;

        section[buttons] {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
        }
      }
    `]}render(){return l`
      <user-manager disableAutoload></user-manager>
      <h1>Demo</h1>
      <main row>
        <leavitt-email-history-viewer isActive .apiService=${this.apiService} .path=${"/leavitt-email-history-viewer"}></leavitt-email-history-viewer>
      </main>
    `}};n([c()],P.prototype,"apiService",null),n([h("leavitt-email-history-viewer")],P.prototype,"demo1",null),P=n([m("leavitt-email-history-viewer-playground")],P);let X=class extends e{#k=null;get refreshToken(){return this.#k}set refreshToken(t){this.#k=t}static{this.styles=[R,a``]}async firstUpdated(){const t=await A();await t.authenticateAsync(),this.refreshToken=window.localStorage.getItem("LG-AUTH-RT")}render(){return l`
      <story-header name="Leavitt Email History Viewer" className="LeavittEmailHistoryViewer"></story-header>
      ${this.refreshToken?l`<smart-demo
            html-file=${`index.html?#${encodeURIComponent(this.refreshToken)}`}
            line-numbers
            resizable
            project-src="../src/demos/leavitt-email-history-viewer/project.json"
          >
            <leavitt-email-history-viewer-playground></leavitt-email-history-viewer-playground>
          </smart-demo>`:g}
      <api-docs src="./custom-elements.json" selected="leavitt-email-history-viewer"></api-docs>
    `}};n([c()],X.prototype,"refreshToken",null),X=n([m("leavitt-email-history-viewer-demo")],X);export{X as LeavittEmailHistoryViewerDemo};
