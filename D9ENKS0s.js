import{L as t,i as e,S as i,c as s,u as a,v as r,w as o,x as l,_ as n,n as h,r as c,e as d,t as m,y as p,E as u,z as g,T as v,B as $,P as y,D as b,k as w,b as f,A as _,d as x,h as D,p as S,G as T}from"./BaOkSZ9E.js";import{S as j}from"./DTX2uC6e.js";import"./Bfdw9yPR.js";import{F as A}from"./Cj9DP0Gp.js";import"./LkhadpA-.js";import"./Bm9E6Vcx.js";import"./Bqjt50Bo.js";import"./BgQhyZIr.js";import{D as R,r as L}from"./Dx1HjAfC.js";import"./B4YwcxBg.js";import"./zFqetftP.js";import"./DBxDK9aT.js";import{d as E}from"./fEBq_QNq.js";import{D as I}from"./DTS7lhmZ.js";import{g as k}from"./OXmljVLM.js";import{T as C}from"./D76i8rNO.js";import"./D1Z9sXFM.js";import"./DqvxXBPa.js";import"./CqrrEokL.js";import"./C30R_RXM.js";import"./CriGlZq1.js";import"./BvgVxq44.js";import"./BUsmskmI.js";import"./CMr6s2Be.js";import"./Di0eg4iG.js";let M=class extends(t(e)){#t;get isActive(){return this.#t}set isActive(t){this.#t=t}#e;get apiService(){return this.#e}set apiService(t){this.#e=t}#i;get filterController(){return this.#i}set filterController(t){this.#i=t}#s=[];get template(){return this.#s}set template(t){this.#s=t}#a;get templateId(){return this.#a}set templateId(t){this.#a=t}#r=!0;#o;get startDate(){return this.#o}set startDate(t){this.#o=t}#l;get endDate(){return this.#l}set endDate(t){this.#l=t}#n;get dialog(){return this.#n}set dialog(t){this.#n=t}#h;get dateRangeSelect(){return this.#h}set dateRangeSelect(t){this.#h=t}async firstUpdated(){this.filterController.subscribeToFilterChange(async()=>{this.#c(),this.requestUpdate("filterController")})}async updated(t){this.isActive&&t.has("isActive")&&this.#c()}async#c(){this.filterController.getValue("template")&&this.#r&&(this.template=await this.#d())}async#d(){if(!this.apiService)return console.warn("No api service provided"),[];const t=["select=Id,Name,IsExpired","orderby=Name"];try{const e=this.apiService.getAsync(`EmailTemplates?${t.join("&")}`);this.loadWhile(e);const i=(await e).toList();return this.#r=!1,i}catch(t){this.dispatchEvent(new i(t))}return[]}async open(){this.#r&&(this.template=await this.#d()),this.templateId=this.filterController.getValue("template")??"";const t=this.filterController.getValue("dateRange");this.startDate=("custom"===t?this.filterController.getValue("startDate"):R.get(t)?.startDate())||"",this.endDate=("custom"===t?this.filterController.getValue("endDate"):R.get(t)?.endDate())||"",this.dialog.show()}static{this.styles=[s`
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
        @open=${t=>{a(t.target),r(t.target)}}
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
    `}};n([h({type:Boolean})],M.prototype,"isActive",null),n([h({type:Object})],M.prototype,"apiService",null),n([c()],M.prototype,"filterController",null),n([c()],M.prototype,"template",null),n([c()],M.prototype,"templateId",null),n([c()],M.prototype,"startDate",null),n([c()],M.prototype,"endDate",null),n([d("md-dialog")],M.prototype,"dialog",null),n([d("titanium-date-range-selector")],M.prototype,"dateRangeSelect",null),M=n([m("leavitt-email-history-view-list-filter-dialog")],M);class B extends p{constructor(t){if(super(t),this.it=u,t.type!==g.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===u||null==t)return this._t=void 0,this.it=t;if(t===v)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}B.directiveName="unsafeHTML",B.resultType=1;const N=$(B);let Y=class extends(t(e)){#e;get apiService(){return this.#e}set apiService(t){this.#e=t}#m;get emailTemplateLogId(){return this.#m}set emailTemplateLogId(t){this.#m=t}#p;get emailTemplateLog(){return this.#p}set emailTemplateLog(t){this.#p=t}#n;get dialog(){return this.#n}set dialog(t){this.#n=t}#u;async open(t){if(this.emailTemplateLogId=t,this.emailTemplateLog=null,await this.updateComplete,this.emailTemplateLog=await this.#g(t),this.emailTemplateLog)return this.dialog.returnValue="",this.dialog.show(),await new Promise(t=>{this.#u=t})}async#g(t){if(!this.apiService)return console.warn("No api service provided"),null;const e=[];try{const i=this.apiService.getAsync(`EmailTemplateLogs(${t})?${e.join("&")}`);this.loadWhile(i),this.dispatchEvent(new y(i));const s=await i;return s?.entity}catch(t){this.dispatchEvent(new i(t))}return null}static{this.styles=[s`
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
        @open=${t=>{r(t.target),a(t.target)}}
        @close=${t=>{if("done"===t.target.returnValue||"navigation-close"===t.target.returnValue)return o(t.target),this.#u(t.target.returnValue);t.preventDefault()}}
      >
        <div slot="headline">Email log</div>

        <main slot="content">${N(this.emailTemplateLog?.EmailBody??"")}</main>
        <div slot="actions">
          <md-filled-button autofocus ?disabled=${this.isLoading} @click=${()=>this.dialog.close("done")}>Done</md-filled-button>
        </div>
      </md-dialog>
    `}};n([h({type:Object})],Y.prototype,"apiService",null),n([c()],Y.prototype,"emailTemplateLogId",null),n([c()],Y.prototype,"emailTemplateLog",null),n([d("md-dialog")],Y.prototype,"dialog",null),Y=n([m("leavitt-view-sent-email-dialog")],Y);let z=class extends(t(e)){#t;get isActive(){return this.#t}set isActive(t){this.#t=t}#e;get apiService(){return this.#e}set apiService(t){this.#e=t}#v;get path(){return this.#v}set path(t){this.#v=t}#$=[];get logs(){return this.#$}set logs(t){this.#$=t}#y=[];get selected(){return this.#y}set selected(t){this.#y=t}#b="";get searchTerm(){return this.#b}set searchTerm(t){this.#b=t}#w=0;get resultTotal(){return this.#w}set resultTotal(t){this.#w=t}#f="desc";get sortDirection(){return this.#f}set sortDirection(t){this.#f=t}#_="SentDate";get sortBy(){return this.#_}set sortBy(t){this.#_=t}#i;get filterController(){return this.#i}set filterController(t){this.#i=t}#x;get dataTable(){return this.#x}set dataTable(t){this.#x=t}#D;get viewDialog(){return this.#D}set viewDialog(t){this.#D=t}#S;get filterModal(){return this.#S}set filterModal(t){this.#S=t}#T=!0;constructor(){super(),this.filterController=new A(""),this.filterController.setFilter("dateRange",()=>""),this.filterController.setFilter("startDate",()=>""),this.filterController.setFilter("endDate",()=>""),this.filterController.setFilter("template",t=>`EmailTemplateId eq ${t}`),this.filterController.subscribeToFilterChange(async()=>{this.isActive?(this.dataTable.resetPage(),this.#j()):this.#T=!0}),this.filterController.loadFromQueryString()}updated(t){this.isActive&&t.has("isActive")&&this.#T&&this.#j(),t.has("path")&&(this.filterController.path=this.path)}#j(){this.#A(this.searchTerm)}#R(t){this.sortDirection=t.detail,this.dataTable.resetPage(),this.#j()}#L(t){this.sortBy=t.detail,this.dataTable.resetPage(),this.#j()}#E=new I(t=>this.#A(t));renderRecipients(t,e=1){const i=t?.split(",").filter(t=>!!t).map(t=>t.trim()).reverse()??[];return i?.length>e?l`${b(i.slice(0,e),t=>t,t=>l`${t} <br />`)} <span more> ${i.length-e} more... </span>`:b(i,t=>t,t=>l`${t} <br />`)}async#A(t){if(!this.apiService)return void console.warn("No api service provided");let e=[];const s=k(t),a=s.map(t=>`(contains(Subject, '${t}') or contains(Recipients, '${t}'))`).join(" and ");s.length>0&&e.push(`${a}`);const r=this.filterController.getValue("dateRange"),o="custom"===r?this.filterController.getValue("startDate"):R.get(r)?.startDate(),l="custom"===r?this.filterController.getValue("endDate"):R.get(r)?.endDate();o&&e.push(`SentDate ge ${E(o).format("YYYY-MM-DD")}`),l&&e.push(`SentDate le ${E(l).format("YYYY-MM-DD")}`),e=[...e,...this.filterController.getActiveFilterOdata()];const n=["select=Id,Recipients,SentDate,Subject","expand=EmailTemplate(select=Id,Name,IsExpired)",`top=${await this.dataTable.getTake()}`,`orderby=${this.sortBy} ${this.sortDirection}`,"skip="+await this.dataTable.getTake()*await this.dataTable.getPage(),"count=true"];e.length>0&&n.push(`filter=${e.join(" and ")}`);try{const t=this.apiService.getAsync(`EmailTemplateLogs/?${n.join("&")}`);this.dataTable.loadWhile(t),this.loadWhile(t);const e=await t;this.resultTotal=e.odataCount,this.logs=e.toList(),this.#T=!1}catch(t){this.dispatchEvent(new i(t))}}static{this.styles=[w,f,s`
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
          @input=${t=>{this.searchTerm=t.target.value,this.dataTable.resetPage(),this.#E.debounce(this.searchTerm)}}
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
          @sort-by-changed=${this.#L}
          .sortBy=${this.sortBy}
          .sortDirection=${this.sortDirection}
          @sort-direction-changed=${this.#R}
        ></titanium-data-table-header>

        <titanium-data-table-header
          large
          slot="table-headers"
          column-name="Subject"
          title="Subject"
          @sort-by-changed=${this.#L}
          .sortBy=${this.sortBy}
          .sortDirection=${this.sortDirection}
          @sort-direction-changed=${this.#R}
        ></titanium-data-table-header>

        <titanium-data-table-header
          desktop
          slot="table-headers"
          column-name="Recipients"
          title="Recipients"
          @sort-by-changed=${this.#L}
          .sortBy=${this.sortBy}
          .sortDirection=${this.sortDirection}
          @sort-direction-changed=${this.#R}
        ></titanium-data-table-header>

        <titanium-data-table-header
          desktop
          slot="table-headers"
          column-name="EmailTemplate/Name"
          title="Email template"
          @sort-by-changed=${this.#L}
          .sortBy=${this.sortBy}
          .sortDirection=${this.sortDirection}
          @sort-direction-changed=${this.#R}
        ></titanium-data-table-header>
        <titanium-data-table-header width="50px" no-sort slot="table-headers"></titanium-data-table-header>
        ${b(this.logs??[],t=>t.Id,t=>l`
            <titanium-data-table-item disable-select .item=${t} slot="items">
              <row-item width="150px" ellipsis date
                >${t.SentDate?l`${E(t.SentDate).format("MMM DD, YY")}<br /><span time>${E(t.SentDate).format("h:mm A")}</span>`:"-"}</row-item
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
    `}};n([h({type:Boolean})],z.prototype,"isActive",null),n([h({type:Object})],z.prototype,"apiService",null),n([h({type:String})],z.prototype,"path",null),n([c()],z.prototype,"logs",null),n([c()],z.prototype,"selected",null),n([c()],z.prototype,"searchTerm",null),n([c()],z.prototype,"resultTotal",null),n([c()],z.prototype,"sortDirection",null),n([c()],z.prototype,"sortBy",null),n([c()],z.prototype,"filterController",null),n([d("titanium-data-table")],z.prototype,"dataTable",null),n([d("leavitt-view-sent-email-dialog")],z.prototype,"viewDialog",null),n([d("leavitt-email-history-view-list-filter-dialog")],z.prototype,"filterModal",null),z=n([m("leavitt-email-history-viewer")],z);let H=class extends(C(e)){#e;get apiService(){return this.#e}set apiService(t){this.#e=t}#I;get demo1(){return this.#I}set demo1(t){this.#I=t}constructor(){super(),this.apiService=new _(new x),this.apiService.baseUrl="https://devapi3.leavitt.com/",this.apiService.addHeader("X-LGAppName","EducationAdminV2")}static{this.styles=[D,S,s`
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
    `}};n([c()],H.prototype,"apiService",null),n([d("leavitt-email-history-viewer")],H.prototype,"demo1",null),H=n([m("leavitt-email-history-viewer-playground")],H);let U=class extends e{#k=null;get refreshToken(){return this.#k}set refreshToken(t){this.#k=t}static{this.styles=[j,s``]}async firstUpdated(){const t=await T();await t.authenticateAsync(),this.refreshToken=window.localStorage.getItem("LG-AUTH-RT")}render(){return l`
      <story-header name="Leavitt Email History Viewer" className="LeavittEmailHistoryViewer"></story-header>
      ${this.refreshToken?l`<smart-demo
            html-file=${`index.html?#${encodeURIComponent(this.refreshToken)}`}
            line-numbers
            resizable
            project-src="../src/demos/leavitt-email-history-viewer/project.json"
          >
            <leavitt-email-history-viewer-playground></leavitt-email-history-viewer-playground>
          </smart-demo>`:u}
      <api-docs src="./custom-elements.json" selected="leavitt-email-history-viewer"></api-docs>
    `}};n([c()],U.prototype,"refreshToken",null),U=n([m("leavitt-email-history-viewer-demo")],U);export{U as LeavittEmailHistoryViewerDemo};
