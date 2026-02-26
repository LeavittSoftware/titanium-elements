import{L as t,i as e,S as i,b as s,u as a,v as l,w as r,c as n,_ as o,n as h,r as c,e as d,t as m,x as p,f as g,y as u,z as v,B as b,p as f,s as y,C as w,j as $,a as _,D as x,F as D,G as S,P as T,T as k,A as E,U as j,H as C}from"./BkdWKSMI.js";import{S as I}from"./D21mo-gf.js";import{f as A}from"./z-LiiMbg.js";import"./BXTEaQeD.js";import{F as R}from"./De07Sj8y.js";import"./7ceWwuQt.js";import"./CwzpXQ52.js";import"./BkQUVoFh.js";import"./DrOQemLA.js";import{D as N,r as L}from"./YkYqZkH8.js";import"./Bl0xVEGl.js";import{d as M}from"./fEBq_QNq.js";import{D as Y}from"./DTS7lhmZ.js";import{g as B}from"./OXmljVLM.js";import"./BENrdMV4.js";import"./D6K90XK6.js";import"./ChwwPp1m.js";import"./k8TuYmOd.js";import{n as O}from"./Dl2jDuSy.js";import"./sfbuyCKw.js";import"./wYCSt_jS.js";import"./yhgryvfy.js";import"./Co12Lg7Y.js";import"./-LEy-2I5.js";import"./pNeA5_IP.js";import"./CIHPGdiZ.js";import"./DbnfmX2U.js";import"./Crvvf7pv.js";let z=class extends(t(e)){#t;get isActive(){return this.#t}set isActive(t){this.#t=t}#e;get apiService(){return this.#e}set apiService(t){this.#e=t}#i;get filterController(){return this.#i}set filterController(t){this.#i=t}#s=[];get template(){return this.#s}set template(t){this.#s=t}#a;get templateId(){return this.#a}set templateId(t){this.#a=t}#l=!0;#r;get startDate(){return this.#r}set startDate(t){this.#r=t}#n;get endDate(){return this.#n}set endDate(t){this.#n=t}#o;get dialog(){return this.#o}set dialog(t){this.#o=t}#h;get dateRangeSelect(){return this.#h}set dateRangeSelect(t){this.#h=t}async firstUpdated(){this.filterController.subscribeToFilterChange(async()=>{this.#c(),this.requestUpdate("filterController")})}async updated(t){this.isActive&&t.has("isActive")&&this.#c()}async#c(){this.filterController.getValue("template")&&this.#l&&(this.template=await this.#d())}async#d(){if(!this.apiService)return console.warn("No api service provided"),[];const t=["select=Id,Name,IsExpired","orderby=Name"];try{const e=this.apiService.getAsync(`EmailTemplates?${t.join("&")}`);this.loadWhile(e);const i=(await e).toList();return this.#l=!1,i}catch(t){this.dispatchEvent(new i(t))}return[]}async open(){this.#l&&(this.template=await this.#d()),this.templateId=this.filterController.getValue("template")??"";const t=this.filterController.getValue("dateRange");this.startDate=("custom"===t?this.filterController.getValue("startDate"):N.get(t)?.startDate())||"",this.endDate=("custom"===t?this.filterController.getValue("endDate"):N.get(t)?.endDate())||"",this.dialog.show()}static{this.styles=[s`
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
    `]}render(){return n`
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
        @open=${t=>{a(t.target),l(t.target)}}
        @close=${t=>{r(t.target)}}
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
            ${this.template.map(t=>n`<md-select-option ?selected=${t.Id===Number(this.templateId)} value=${t.Id??""}>
                  <div slot="headline">${t.Name}</div>
                  ${t.IsExpired?n`<div inactive slot="supporting-text">Inactive</div>`:""}
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
    `}};o([h({type:Boolean})],z.prototype,"isActive",null),o([h({type:Object})],z.prototype,"apiService",null),o([c()],z.prototype,"filterController",null),o([c()],z.prototype,"template",null),o([c()],z.prototype,"templateId",null),o([c()],z.prototype,"startDate",null),o([c()],z.prototype,"endDate",null),o([d("md-dialog")],z.prototype,"dialog",null),o([d("titanium-date-range-selector")],z.prototype,"dateRangeSelect",null),z=o([m("leavitt-email-history-view-list-filter-dialog")],z);class F extends p{constructor(t){if(super(t),this.it=g,t.type!==u.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===g||null==t)return this._t=void 0,this.it=t;if(t===v)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}F.directiveName="unsafeHTML",F.resultType=1;const P=b(F);let H=class extends(t(e)){#e;get apiService(){return this.#e}set apiService(t){this.#e=t}#m;get emailTemplateLogId(){return this.#m}set emailTemplateLogId(t){this.#m=t}#p;get emailTemplateLog(){return this.#p}set emailTemplateLog(t){this.#p=t}#g;get snackbar(){return this.#g}set snackbar(t){this.#g=t}#o;get dialog(){return this.#o}set dialog(t){this.#o=t}#u;async open(t){return this.emailTemplateLogId=t,this.emailTemplateLog=null,this.dialog.returnValue="",await this.updateComplete,this.dialog.show(),this.emailTemplateLog=await this.#v(t),await new Promise(t=>{this.#u=t})}async#v(t){if(!this.apiService)return console.warn("No api service provided"),null;const e=[];try{const i=this.apiService.getAsync(`EmailTemplateLogs(${t})?${e.join("&")}`);this.loadWhile(i);const s=await i;return s?.entity}catch(t){this.dispatchEvent(new i(t))}return null}static{this.styles=[f,s`
      md-dialog {
        max-width: 750px;
        width: calc(100vw - 24px);

        height: min-content;
        max-height: calc(100vh - 24px);

        scrollbar-color: var(--md-sys-color-surface-container-highest) transparent;
        scrollbar-width: thin;

        main[email-body] {
          margin: 12px 24px;
          background-color: #f7f7f7;
          border-radius: 12px;
          overflow-x: auto;

          interpolate-size: allow-keywords;
          transition: all 0.25s;
          @starting-style {
            height: 0px;
          }
        }
      }

      [hidden] {
        display: none !important;
      }
    `]}render(){return n`
      <md-dialog
        @open=${t=>{l(t.target),a(t.target)}}
        @close=${t=>{if("done"===t.target.returnValue||"navigation-close"===t.target.returnValue)return r(t.target),this.snackbar.dismissAll(),this.#u(t.target.returnValue);t.preventDefault()}}
      >
        <div slot="headline">Email log</div>

        ${this.isLoading?n`<main slot="content">Loading...</main>`:this.emailTemplateLog?n`<main slot="content" email-body>${P(this.emailTemplateLog?.EmailBody??"")}</main>`:n`<main slot="content">No email template log found</main>`}

        <titanium-snackbar-stack slot="content" .eventListenerTarget=${this}></titanium-snackbar-stack>
        <div slot="actions">
          <md-filled-tonal-button autofocus ?disabled=${this.isLoading} @click=${()=>this.dialog.close("done")}
            >Done ${this.isLoading?n`<md-circular-progress slot="icon" indeterminate></md-circular-progress>`:g}
          </md-filled-tonal-button>
        </div>
      </md-dialog>
    `}};o([h({type:Object})],H.prototype,"apiService",null),o([c()],H.prototype,"emailTemplateLogId",null),o([c()],H.prototype,"emailTemplateLog",null),o([d("titanium-snackbar-stack")],H.prototype,"snackbar",null),o([d("md-dialog")],H.prototype,"dialog",null),H=o([m("leavitt-view-sent-email-dialog")],H);let V=class extends(t(e)){#e;get apiService(){return this.#e}set apiService(t){this.#e=t}#b;get emailTemplates(){return this.#b}set emailTemplates(t){this.#b=t}#g;get snackbar(){return this.#g}set snackbar(t){this.#g=t}#o;get dialog(){return this.#o}set dialog(t){this.#o=t}#u;async open(){return this.emailTemplates=[],this.dialog.returnValue="",await this.updateComplete,this.dialog.show(),this.emailTemplates=await this.#f(),await new Promise(t=>{this.#u=t})}async#f(){if(!this.apiService)return console.warn("No api service provided"),[];const t=["select=Id,Name,IsExpired,Description","orderby=Name","filter=not IsExpired"];try{const e=this.apiService.getAsync(`EmailTemplates?${t.join("&")}`);this.loadWhile(e);const i=await e;return i?.entities}catch(t){this.dispatchEvent(new i(t))}return[]}static{this.styles=[y,f,s`
      md-dialog {
        max-width: 750px;
        width: calc(100vw - 24px);

        height: min-content;
        max-height: calc(100vh - 24px);

        scrollbar-color: var(--md-sys-color-surface-container-highest) transparent;
        scrollbar-width: thin;

        main[email-templates] {
          display: block;
          padding-top: 0;

          h2 {
            margin: 24px 0 8px 0;
            font-size: 16px;
            line-height: 18px;
            margin-left: 3px;
          }

          p {
            padding: 8px;
            background-color: var(--md-sys-color-surface-container-highest);
            border-radius: 10px;
            white-space: pre-wrap;
          }

          interpolate-size: allow-keywords;
          transition: all 0.25s;
          @starting-style {
            height: 0px;
          }
        }
      }

      [hidden] {
        display: none !important;
      }
    `]}render(){return n`
      <md-dialog
        @open=${t=>{l(t.target),a(t.target)}}
        @close=${t=>{if("done"===t.target.returnValue||"navigation-close"===t.target.returnValue)return r(t.target),this.snackbar.dismissAll(),this.#u(t.target.returnValue);t.preventDefault()}}
      >
        <div slot="headline">What emails does this tool send?</div>

        ${this.isLoading?g:this.emailTemplates?.length?n`<main slot="content" email-templates>
                ${w(this.emailTemplates,t=>t.Id,t=>n`<h2>${t.Name}</h2>
                      <p>${t.Description??"No description available"}</p>`)}
              </main>`:n`<main slot="content">No email templates found for this site</main>`}

        <titanium-snackbar-stack slot="content" .eventListenerTarget=${this}></titanium-snackbar-stack>
        <div slot="actions">
          <md-filled-tonal-button autofocus ?disabled=${this.isLoading} @click=${()=>this.dialog.close("done")}
            >Done ${this.isLoading?n`<md-circular-progress slot="icon" indeterminate></md-circular-progress>`:g}
          </md-filled-tonal-button>
        </div>
      </md-dialog>
    `}};o([h({type:Object})],V.prototype,"apiService",null),o([c()],V.prototype,"emailTemplates",null),o([d("titanium-snackbar-stack")],V.prototype,"snackbar",null),o([d("md-dialog")],V.prototype,"dialog",null),V=o([m("leavitt-view-email-template-info-dialog")],V);let W=class extends(t(e)){#t;get isActive(){return this.#t}set isActive(t){this.#t=t}#e;get apiService(){return this.#e}set apiService(t){this.#e=t}#y;get path(){return this.#y}set path(t){this.#y=t}#w=[];get logs(){return this.#w}set logs(t){this.#w=t}#$=[];get selected(){return this.#$}set selected(t){this.#$=t}#_="";get searchTerm(){return this.#_}set searchTerm(t){this.#_=t}#x=0;get resultTotal(){return this.#x}set resultTotal(t){this.#x=t}#D="desc";get sortDirection(){return this.#D}set sortDirection(t){this.#D=t}#S="SentDate";get sortBy(){return this.#S}set sortBy(t){this.#S=t}#i;get filterController(){return this.#i}set filterController(t){this.#i=t}#T;get dataTable(){return this.#T}set dataTable(t){this.#T=t}#k;get viewDialog(){return this.#k}set viewDialog(t){this.#k=t}#E;get filterModal(){return this.#E}set filterModal(t){this.#E=t}#j;get viewEmailTemplateInfoDialog(){return this.#j}set viewEmailTemplateInfoDialog(t){this.#j=t}#C=!0;constructor(){super(),this.filterController=new R(""),this.filterController.setFilter("dateRange",()=>""),this.filterController.setFilter("startDate",()=>""),this.filterController.setFilter("endDate",()=>""),this.filterController.setFilter("template",t=>`EmailTemplateId eq ${t}`),this.filterController.subscribeToFilterChange(async()=>{this.isActive?(this.dataTable.resetPage(),this.#I()):this.#C=!0}),this.filterController.loadFromQueryString()}updated(t){this.isActive&&t.has("isActive")&&this.#C&&this.#I(),t.has("path")&&(this.filterController.path=this.path)}#I(){this.#A(this.searchTerm)}#R(t){this.sortDirection=t.detail,this.dataTable.resetPage(),this.#I()}#N(t){this.sortBy=t.detail,this.dataTable.resetPage(),this.#I()}#L=new Y(t=>this.#A(t));renderRecipients(t,e=1){const i=t?.split(",").filter(t=>!!t).map(t=>t.trim()).reverse()??[];return i?.length>e?n`${w(i.slice(0,e),t=>t,t=>n`${t} <br />`)} <span more> ${i.length-e} more... </span>`:w(i,t=>t,t=>n`${t} <br />`)}async#A(t){if(!this.apiService)return void console.warn("No api service provided");let e=[];const s=B(t),a=s.map(t=>`(contains(Subject, '${t}') or contains(Recipients, '${t}'))`).join(" and ");s.length>0&&e.push(`${a}`);const l=this.filterController.getValue("dateRange"),r="custom"===l?this.filterController.getValue("startDate"):N.get(l)?.startDate(),n="custom"===l?this.filterController.getValue("endDate"):N.get(l)?.endDate();r&&e.push(`SentDate ge ${M(r).format("YYYY-MM-DD")}`),n&&e.push(`SentDate le ${M(n).format("YYYY-MM-DD")}`),e=[...e,...this.filterController.getActiveFilterOdata()];const o=["select=Id,Recipients,SentDate,Subject","expand=EmailTemplate(select=Id,Name,IsExpired)",`top=${await this.dataTable.getTake()}`,`orderby=${this.sortBy} ${this.sortDirection}`,"skip="+await this.dataTable.getTake()*await this.dataTable.getPage(),"count=true"];e.length>0&&o.push(`filter=${e.join(" and ")}`);try{const t=this.apiService.getAsync(`EmailTemplateLogs/?${o.join("&")}`);this.dataTable.loadWhile(t),this.loadWhile(t);const e=await t;this.resultTotal=e.odataCount,this.logs=e.toList(),this.#C=!1}catch(t){this.dispatchEvent(new i(t))}}static{this.styles=[$,_,s`
      :host {
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: 24px;
      }

      header {
        display: grid;
        gap: 12px;
        md-text-button {
          justify-self: center;
        }
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

      md-text-button {
        text-wrap: auto;
      }

      [hidden] {
        display: none !important;
      }
    `]}render(){return n`
      <header>
        <titanium-header header="Email history" subHeader="A comprehensive record of email correspondence originating from this tool" no-nav></titanium-header>

        <md-text-button @click=${()=>this.viewEmailTemplateInfoDialog.open()}>
          <md-icon slot="icon">chat_info</md-icon>
          <span>What emails does this tool send?</span>
        </md-text-button>
      </header>
      <titanium-data-table
        header="Emails"
        disable-select
        @selected-changed=${t=>{this.selected=[...t.detail]}}
        @paging-changed=${()=>this.#I()}
        .count=${this.resultTotal}
        .items=${this.logs}
        .searchTerm=${this.searchTerm}
      >
        <titanium-search-input
          slot="search-button"
          title="Search by recipients or subject"
          placeholder="Recipients or subject"
          .value=${this.searchTerm}
          @input=${t=>{this.searchTerm=t.target.value,this.dataTable.resetPage(),this.#L.debounce(this.searchTerm)}}
        ></titanium-search-input>

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
          @sort-by-changed=${this.#N}
          .sortBy=${this.sortBy}
          .sortDirection=${this.sortDirection}
          @sort-direction-changed=${this.#R}
        ></titanium-data-table-header>

        <titanium-data-table-header
          large
          slot="table-headers"
          column-name="Subject"
          title="Subject"
          @sort-by-changed=${this.#N}
          .sortBy=${this.sortBy}
          .sortDirection=${this.sortDirection}
          @sort-direction-changed=${this.#R}
        ></titanium-data-table-header>

        <titanium-data-table-header
          desktop
          slot="table-headers"
          column-name="Recipients"
          title="Recipients"
          @sort-by-changed=${this.#N}
          .sortBy=${this.sortBy}
          .sortDirection=${this.sortDirection}
          @sort-direction-changed=${this.#R}
        ></titanium-data-table-header>

        <titanium-data-table-header
          desktop
          slot="table-headers"
          column-name="EmailTemplate/Name"
          title="Email template"
          @sort-by-changed=${this.#N}
          .sortBy=${this.sortBy}
          .sortDirection=${this.sortDirection}
          @sort-direction-changed=${this.#R}
        ></titanium-data-table-header>
        <titanium-data-table-header width="50px" no-sort slot="table-headers"></titanium-data-table-header>
        ${w(this.logs??[],t=>t.Id,t=>n`
            <titanium-data-table-item disable-select .item=${t} slot="items">
              <row-item width="150px" ellipsis date
                >${t.SentDate?n`${M(t.SentDate).format("MMM DD, YY")}<br /><span time>${M(t.SentDate).format("h:mm A")}</span>`:"-"}</row-item
              >
              <row-item large>${t.Subject??"-"} </row-item>
              <row-item desktop title=${t.Recipients??""}>${this.renderRecipients(t.Recipients??null)}</row-item>
              <row-item desktop>
                <div>${t.EmailTemplate?.Name}</div>
                ${t.EmailTemplate?.IsExpired?n`<div inactive>Inactive</div>`:""}</row-item
              >
              <row-item width="50px"
                ><md-filled-tonal-icon-button @click=${()=>this.viewDialog.open(t.Id??0)}><md-icon>pageview</md-icon></md-filled-tonal-icon-button>
              </row-item>
            </titanium-data-table-item>
          `)}
      </titanium-data-table>
      <leavitt-view-sent-email-dialog .apiService=${this.apiService}></leavitt-view-sent-email-dialog>
      <leavitt-view-email-template-info-dialog .apiService=${this.apiService}></leavitt-view-email-template-info-dialog>
    `}};o([h({type:Boolean})],W.prototype,"isActive",null),o([h({type:Object})],W.prototype,"apiService",null),o([h({type:String})],W.prototype,"path",null),o([c()],W.prototype,"logs",null),o([c()],W.prototype,"selected",null),o([c()],W.prototype,"searchTerm",null),o([c()],W.prototype,"resultTotal",null),o([c()],W.prototype,"sortDirection",null),o([c()],W.prototype,"sortBy",null),o([c()],W.prototype,"filterController",null),o([d("titanium-data-table")],W.prototype,"dataTable",null),o([d("leavitt-view-sent-email-dialog")],W.prototype,"viewDialog",null),o([d("leavitt-email-history-view-list-filter-dialog")],W.prototype,"filterModal",null),o([d("leavitt-view-email-template-info-dialog")],W.prototype,"viewEmailTemplateInfoDialog",null),W=o([m("leavitt-email-history-viewer")],W);let U=class extends e{#M=!1;get isOverflowed(){return this.#M}set isOverflowed(t){this.#M=t}#Y="640px";get maxWidth(){return this.#Y}set maxWidth(t){this.#Y=t}#B=null;get scrollableParent(){return this.#B}set scrollableParent(t){this.#B=t}#O=!1;get hasLeading(){return this.#O}set hasLeading(t){this.#O=t}#z=!1;get hasTrailing(){return this.#z}set hasTrailing(t){this.#z=t}#F=!1;get hasMain(){return this.#F}set hasMain(t){this.#F=t}#P;get leadingElements(){return this.#P}set leadingElements(t){this.#P=t}#H;get trailingElements(){return this.#H}set trailingElements(t){this.#H=t}#V;get mainElements(){return this.#V}set mainElements(t){this.#V=t}#W=null;#U=null;async connectedCallback(){super.connectedCallback();const t=await A(this);this.#W=this.scrollableParent||t,this.#W&&(this.#U=new ResizeObserver(()=>{this.#q()}),this.#U.observe(this.#W))}disconnectedCallback(){this.#W&&this.#U?.disconnect(),super.disconnectedCallback()}async updated(t){if(t.has("scrollableParent")){this.#U?.disconnect();const t=await A(this);this.#W=this.scrollableParent||t,this.#W&&(this.#U=new ResizeObserver(()=>{this.#q()}),this.#U.observe(this.#W))}}isOverflown(t){return t.scrollHeight>t.clientHeight}#q(){this.#W&&(this.isOverflowed=this.isOverflown(this.#W))}static{this.styles=[s`
      :host {
        display: grid;

        position: sticky;
        bottom: 0;
        min-height: 64px;

        background-color: var(--md-sys-color-surface-container-lowest);
        z-index: 2;
      }

      :host([is-overflowed]) {
        border-top: 1px solid var(--md-sys-color-outline-variant);
      }

      main {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        justify-self: center;
        padding: 12px 16px;
        width: 100%;
        box-sizing: border-box;
      }

      section {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 12px;
      }

      :host([has-leading][has-main]) main,
      :host([has-main][has-trailing]) main,
      :host([has-leading][has-trailing]) main {
        gap: 16px;
      }
    `]}render(){return n`
      <main part="main" style=${this.maxWidth?x({maxWidth:this.maxWidth}):g}>
        <section part="leading"><slot @slotchange=${()=>this.hasLeading=this.leadingElements.length>0} name="leading"></slot></section>
        <section part="main"><slot @slotchange=${()=>this.hasMain=this.mainElements.length>0}></slot></section>
        <section part="trailing"><slot @slotchange=${()=>this.hasTrailing=this.trailingElements.length>0} name="trailing"></slot></section>
      </main>
    `}};o([h({type:Boolean,reflect:!0,attribute:"is-overflowed"})],U.prototype,"isOverflowed",null),o([h({type:String,attribute:"max-width"})],U.prototype,"maxWidth",null),o([h({type:Object,attribute:"scrollable-parent"})],U.prototype,"scrollableParent",null),o([h({type:Boolean,reflect:!0,attribute:"has-leading"})],U.prototype,"hasLeading",null),o([h({type:Boolean,reflect:!0,attribute:"has-trailing"})],U.prototype,"hasTrailing",null),o([h({type:Boolean,reflect:!0,attribute:"has-main"})],U.prototype,"hasMain",null),o([D({slot:"leading"})],U.prototype,"leadingElements",null),o([D({slot:"trailing"})],U.prototype,"trailingElements",null),o([D({slot:"main"})],U.prototype,"mainElements",null),U=o([m("leavitt-app-navigation-footer")],U);let q=class extends(t(e)){#t;get isActive(){return this.#t}set isActive(t){this.#t=t}#e;get apiService(){return this.#e}set apiService(t){this.#e=t}#i;get filterController(){return this.#i}set filterController(t){this.#i=t}#s=[];get template(){return this.#s}set template(t){this.#s=t}#a;get templateId(){return this.#a}set templateId(t){this.#a=t}#l=!0;#r;get startDate(){return this.#r}set startDate(t){this.#r=t}#n;get endDate(){return this.#n}set endDate(t){this.#n=t}#o;get dialog(){return this.#o}set dialog(t){this.#o=t}#h;get dateRangeSelect(){return this.#h}set dateRangeSelect(t){this.#h=t}async firstUpdated(){this.filterController.subscribeToFilterChange(async()=>{this.#c(),this.requestUpdate("filterController")})}async updated(t){this.isActive&&t.has("isActive")&&this.#c()}async#c(){this.filterController.getValue("template")&&this.#l&&(this.template=await this.#d())}async#d(){if(!this.apiService)return console.warn("No api service provided"),[];const t=["select=Id,Name,IsExpired","orderby=Name"];try{const e=this.apiService.getAsync(`EmailTemplates?${t.join("&")}`);this.loadWhile(e);const i=(await e).toList();return this.#l=!1,i}catch(t){this.dispatchEvent(new i(t))}return[]}async open(){this.#l&&(this.template=await this.#d()),this.templateId=this.filterController.getValue("template")??"";const t=this.filterController.getValue("dateRange");this.startDate=("custom"===t?this.filterController.getValue("startDate"):N.get(t)?.startDate())||"",this.endDate=("custom"===t?this.filterController.getValue("endDate"):N.get(t)?.endDate())||"",this.dialog.show()}static{this.styles=[s`
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

        md-filled-select {
          width: 100%;
          margin-top: 24px;
          --md-filled-select-text-field-container-shape: 16px;
          --md-filled-select-text-field-active-indicator-height: 0;
          --md-filled-select-text-field-error-active-indicator-height: 0;
          --md-filled-select-text-field-hover-active-indicator-height: 0;
          --md-filled-select-text-field-focus-active-indicator-height: 0;
          --md-filled-select-text-field-disabled-active-indicator-height: 0;
        }
      }

      md-input-chip {
        background: var(--md-sys-color-surface-container);
        --md-sys-color-outline: transparent;
      }

      [hidden] {
        display: none !important;
      }
    `]}render(){return n`
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
        @open=${t=>{a(t.target),l(t.target)}}
        @close=${t=>{r(t.target)}}
      >
        <div slot="headline">Filter logs by</div>
        <form slot="content" method="dialog">
          <titanium-date-range-selector
            filled
            label="Sent"
            .startDate=${this.startDate}
            .endDate=${this.endDate}
            @change=${t=>{this.startDate=t.target.startDate||"",this.endDate=t.target.endDate||""}}
          ></titanium-date-range-selector>

          <md-filled-select label="Templates" .value=${this.templateId??""} @change=${t=>this.templateId=t.target.value}>
            <md-icon slot="leading-icon">content_copy</md-icon>
            <md-select-option></md-select-option>
            ${this.template.map(t=>n`<md-select-option ?selected=${t.Id===Number(this.templateId)} value=${t.Id??""}>
                  <div slot="headline">${t.Name}</div>
                  ${t.IsExpired?n`<div inactive slot="supporting-text">Inactive</div>`:""}
                  <md-icon slot="start">content_copy</md-icon>
                </md-select-option>`)}
          </md-filled-select>
        </form>
        <div slot="actions">
          <md-text-button @click=${()=>this.dialog.close("cancel")}> Close </md-text-button>
          <md-filled-tonal-button
            @click=${()=>{this.filterController.setValue("template",this.templateId||null),this.filterController.setValue("dateRange","allTime"===this.dateRangeSelect.range?null:this.dateRangeSelect.range),this.filterController.setValue("startDate","custom"===this.dateRangeSelect.range&&this.startDate||null),this.filterController.setValue("endDate","custom"===this.dateRangeSelect.range&&this.endDate||null),this.dialog.close("apply")}}
            >Apply</md-filled-tonal-button
          >
        </div>
      </md-dialog>
    `}};o([h({type:Boolean})],q.prototype,"isActive",null),o([h({type:Object})],q.prototype,"apiService",null),o([c()],q.prototype,"filterController",null),o([c()],q.prototype,"template",null),o([c()],q.prototype,"templateId",null),o([c()],q.prototype,"startDate",null),o([c()],q.prototype,"endDate",null),o([d("md-dialog")],q.prototype,"dialog",null),o([d("titanium-date-range-selector")],q.prototype,"dateRangeSelect",null),q=o([m("leavitt-email-history-viewer-filled-filter-dialog")],q);class G{#G;#K;#X;#J;#Q;#Z;constructor(t,e,i){if(this.#X=null,this.#Q=!1,this.#Z=null,this.searchTerm="",this.#tt=()=>{this.searchTerm=this.#X.value,this.#G.requestUpdate(),this.#K()},this.#G=t,this.#J=i.placeholder,0!==i.debounceDelay){const t=new Y(()=>this.#G.isActive?i.onSearch():Promise.resolve(),i.debounceDelay);this.#K=()=>t.debounce()}else this.#K=()=>{this.#G.isActive&&i.onSearch()};new S(t,{context:e,subscribe:!0,callback:t=>this.#et(t)}),t.addController(this)}#et(t){this.#X=t,this.#G.isActive&&this.#it()}#it(){this.#st(),this.#X&&(this.#Z=new AbortController,this.#X.addEventListener("input",this.#tt,{signal:this.#Z.signal}),this.#X.value=this.searchTerm,this.#X.placeholder=this.#J)}#st(){this.#Z?.abort(),this.#Z=null}#tt;clearSearch(){this.searchTerm="",this.#X&&(this.#X.value=""),this.#G.requestUpdate()}hostUpdated(){const t=this.#G.isActive;t&&!this.#Q?this.#it():!t&&this.#Q&&this.#st(),this.#Q=t}hostDisconnected(){this.#st(),this.#X=null,this.#Q=!1}}let K=class extends(t(e)){#t;get isActive(){return this.#t}set isActive(t){this.#t=t}#e;get apiService(){return this.#e}set apiService(t){this.#e=t}#y;get path(){return this.#y}set path(t){this.#y=t}#at;get siteSearchTextFieldContext(){return this.#at}set siteSearchTextFieldContext(t){this.#at=t}#lt="";get toolbarSearchTerm(){return this.#lt}set toolbarSearchTerm(t){this.#lt=t}#_="";get searchTerm(){return this.#_}set searchTerm(t){this.#_=t}#rt=[];get items(){return this.#rt}set items(t){this.#rt=t}#$=[];get selected(){return this.#$}set selected(t){this.#$=t}#nt={uniqueKey:t=>t.Id?.toString()??"",itemMetaData:[{key:"SentDate",friendlyName:"Sent",render:t=>n`<div>
            ${t.SentDate?n`${M(t.SentDate).format("MMM DD, YY")}<br /><span time>${M(t.SentDate).format("h:mm A")}</span>`:"-"}
          </div>`,width:"150px",defaultSort:{direction:"desc",position:1}},{key:"Subject",friendlyName:"Subject",render:t=>n`${t.Subject??"-"}`,width:"200px"},{key:"Recipients",friendlyName:"Recipients",render:t=>n`${this.renderRecipients(t.Recipients??null)}`,csvValue:t=>t.Recipients??"",width:"150px"},{key:"EmailTemplate",friendlyName:"Email template",sortExpression:"EmailTemplate/Name",render:t=>n`<div>${t.EmailTemplate?.Name}</div>
            ${t.EmailTemplate?.IsExpired?n`<div inactive>Inactive</div>`:""}`,csvValue:t=>t.EmailTemplate?.Name??"",width:"200px"},{key:"Bool1",friendlyName:"Preview",disableSort:!0,render:t=>n`<md-filled-tonal-icon-button @click=${()=>this.viewDialog?.open?.(t?.Id??0)}><md-icon>pageview</md-icon></md-filled-tonal-icon-button>`,csvValue:()=>"",width:"60px"}]};get tableMetaData(){return this.#nt}set tableMetaData(t){this.#nt=t}#x=0;get resultTotal(){return this.#x}set resultTotal(t){this.#x=t}#i;get filterController(){return this.#i}set filterController(t){this.#i=t}#T;get dataTable(){return this.#T}set dataTable(t){this.#T=t}#ot;get filterDialog(){return this.#ot}set filterDialog(t){this.#ot=t}#ht;get pageControl(){return this.#ht}set pageControl(t){this.#ht=t}#ct;get mainContentContainer(){return this.#ct}set mainContentContainer(t){this.#ct=t}#k;get viewDialog(){return this.#k}set viewDialog(t){this.#k=t}#j;get viewEmailTemplateInfoDialog(){return this.#j}set viewEmailTemplateInfoDialog(t){this.#j=t}constructor(){super(),this.filterController=new R(""),this.filterController.setFilter("dateRange",()=>""),this.filterController.setFilter("startDate",()=>""),this.filterController.setFilter("endDate",()=>""),this.filterController.setFilter("template",t=>`EmailTemplateId eq ${t}`),this.filterController.subscribeToFilterChange(async()=>{this.isActive&&(this.pageControl&&(this.pageControl.page=0),this.#I())}),this.filterController.loadFromQueryString()}async updated(t){this.isActive&&t.has("isActive")&&(await(this.mainContentContainer?.updateComplete),this.#I()),this.isActive&&t.has("toolbarSearchTerm")&&this.searchTerm!==this.toolbarSearchTerm&&(this.searchTerm=this.toolbarSearchTerm,this.pageControl&&(this.pageControl.page=0),this.#L.debounce()),t.has("path")&&(this.filterController.path=this.path)}firstUpdated(){this.siteSearchTextFieldController=new G(this,this.siteSearchTextFieldContext,{placeholder:"Search by subject or recipient",onSearch:()=>(this.pageControl&&(this.pageControl.page=0),this.#I())})}async#I(){const{items:t,odataCount:e}=await this.#dt(this.siteSearchTextFieldContext?this.siteSearchTextFieldController?.searchTerm??null:this.searchTerm??null);this.items=t,this.resultTotal=e}#L=new Y(()=>this.#I());renderRecipients(t,e=1){const i=t?.split(",").filter(t=>!!t).map(t=>t.trim()).reverse()??[];return i?.length>e?n`${w(i.slice(0,e),t=>t,t=>n`${t} <br />`)} <span more> ${i.length-e} more... </span>`:w(i,t=>t,t=>n`${t} <br />`)}async#dt(t){let e=[];const s=B(t||""),a=s.map(t=>`(contains(Subject, '${t}') or contains(Recipients, '${t}'))`).join(" and ");s.length>0&&e.push(`${a}`);const l=this.filterController.getValue("dateRange"),r="custom"===l?this.filterController.getValue("startDate"):N.get(l)?.startDate(),n="custom"===l?this.filterController.getValue("endDate"):N.get(l)?.endDate();r&&e.push(`SentDate ge ${M(r).format("YYYY-MM-DD")}`),n&&e.push(`SentDate le ${M(n).format("YYYY-MM-DD")}`),e=[...e,...this.filterController.getActiveFilterOdata()];const o=["select=Id,Recipients,SentDate,Subject","expand=EmailTemplate(select=Id,Name,IsExpired)",`top=${this.pageControl?.take}`,"skip="+(this.pageControl?.take??0)*(this.pageControl?.page??0),"count=true"],h=this.dataTable.sort.map(t=>`${this.tableMetaData.itemMetaData.find(e=>e.key===t.key)?.sortExpression??t.key} ${t.direction}`).join(", ");h&&o.push(`orderby=${h}`),e.length>0&&o.push(`filter=${e.join(" and ")}`);try{if(!this.apiService)throw new Error("No api service provided");const t=this.apiService?.getAsync(`EmailTemplateLogs/?${o.join("&")}`);this.loadWhile(t),this.dataTable.loadWhile(t),this.dispatchEvent(new T(t));const e=await t;return{items:e.toList(),odataCount:e.odataCount}}catch(t){this.dispatchEvent(new i(t,{autoHide:7500}))}return{items:[],odataCount:0}}static{this.styles=[O,$,_,s`
      :host {
        display: grid;
      }

      main {
        display: grid;
        grid:
          'header'
          'table' 1fr
          'footer';

        overflow: hidden;
      }

      md-text-button {
        text-wrap: auto;
      }

      titanium-data-table-core {
        grid-area: table;
      }
    `]}render(){return n`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Email history">
            <md-icon-button slot="trailing" @click=${async()=>this.filterDialog.open()}>
              <md-icon>filter_list</md-icon>
            </md-icon-button>

            <md-icon-button slot="trailing" @click=${async()=>this.#I()}>
              <md-icon>refresh</md-icon>
            </md-icon-button>

            <titanium-data-table-action-bar slot="footer" .selected=${this.selected}>
              <leavitt-email-history-viewer-filled-filter-dialog
                .apiService=${this.apiService}
                .isActive=${this.isActive}
                slot="filters"
                .filterController=${this.filterController}
              ></leavitt-email-history-viewer-filled-filter-dialog>
            </titanium-data-table-action-bar>
          </leavitt-app-navigation-header>

          <titanium-data-table-core
            selection-mode="none"
            sticky-header
            .items=${this.items}
            .tableMetaData=${this.tableMetaData}
            .selected=${this.selected}
            @selected-changed=${t=>this.selected=[...t.target.selected]}
            @sort-changed=${()=>{this.pageControl&&(this.pageControl.page=0),this.#I()}}
            local-storage-key="email-history-list-preferences"
            .supplementalItemStyles=${s`
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
            `}
          >
          </titanium-data-table-core>
          <leavitt-app-navigation-footer max-width="initial" .scrollableParent=${this.dataTable}>
            <titanium-page-control
              filled
              slot="leading"
              ?disabled=${this.isLoading}
              .count=${this.resultTotal}
              .pageSizes=${[25,50,100,200]}
              local-storage-key="email-history-list-user-take"
              @action=${()=>this.#I()}
            ></titanium-page-control>

            <md-text-button slot="trailing" @click=${()=>this.viewEmailTemplateInfoDialog?.open()}>
              <md-icon slot="icon">chat_info</md-icon>
              <span>What emails does this tool send?</span>
            </md-text-button>
          </leavitt-app-navigation-footer>
        </main>
      </leavitt-app-main-content-container>
      <leavitt-view-sent-email-filled-dialog .apiService=${this.apiService}></leavitt-view-sent-email-filled-dialog>
      <leavitt-view-sent-email-dialog .apiService=${this.apiService}></leavitt-view-sent-email-dialog>
      <leavitt-view-email-template-info-dialog .apiService=${this.apiService}></leavitt-view-email-template-info-dialog>
    `}};o([h({type:Boolean})],K.prototype,"isActive",null),o([h({type:Object})],K.prototype,"apiService",null),o([h({type:String})],K.prototype,"path",null),o([h({type:Object})],K.prototype,"siteSearchTextFieldContext",null),o([h({type:String})],K.prototype,"toolbarSearchTerm",null),o([c()],K.prototype,"searchTerm",null),o([c()],K.prototype,"items",null),o([c()],K.prototype,"selected",null),o([c()],K.prototype,"tableMetaData",null),o([c()],K.prototype,"resultTotal",null),o([c()],K.prototype,"filterController",null),o([d("titanium-data-table-core")],K.prototype,"dataTable",null),o([d("leavitt-email-history-viewer-filled-filter-dialog")],K.prototype,"filterDialog",null),o([d("titanium-page-control")],K.prototype,"pageControl",null),o([d("leavitt-app-main-content-container")],K.prototype,"mainContentContainer",null),o([d("leavitt-view-sent-email-dialog")],K.prototype,"viewDialog",null),o([d("leavitt-view-email-template-info-dialog")],K.prototype,"viewEmailTemplateInfoDialog",null),K=o([m("leavitt-email-history-viewer-filled")],K);let X=class extends(k(e)){#e;get apiService(){return this.#e}set apiService(t){this.#e=t}#mt;get demo1(){return this.#mt}set demo1(t){this.#mt=t}#pt;get demo2(){return this.#pt}set demo2(t){this.#pt=t}constructor(){super(),this.apiService=new E(j),this.apiService.baseUrl="https://devapi3.leavitt.com/",this.apiService.addHeader("X-LGAppName","EducationAdminV2")}static{this.styles=[I,s`
      div[row] {
        display: grid;
        gap: 12px;
      }
    `]}render(){return n`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Leavitt email history viewer" level1Href="/leavitt-email-history-viewer" sticky-top>
          </leavitt-app-navigation-header>

          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Leavitt Email History Viewer Filled" className="LeavittEmailHistoryViewerFilled"></story-header>

            <div>
              <h1>Filled</h1>
              <div row>
                <leavitt-email-history-viewer-filled
                  isActive
                  .siteSearchTextFieldContext=${C}
                  .apiService=${this.apiService}
                  .path=${"/leavitt-email-history-viewer"}
                ></leavitt-email-history-viewer-filled>
              </div>
            </div>

            <api-docs src="./custom-elements.json" selected="leavitt-email-history-viewer-filled"></api-docs>

            <md-divider></md-divider>
            <story-header name="Leavitt Email History Viewer" className="LeavittEmailHistoryViewer"></story-header>

            <div>
              <h1>Outlined</h1>
              <div row>
                <leavitt-email-history-viewer isActive .apiService=${this.apiService} .path=${"/leavitt-email-history-viewer"}></leavitt-email-history-viewer>
              </div>
            </div>

            <api-docs src="./custom-elements.json" selected="leavitt-email-history-viewer"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `}};o([c()],X.prototype,"apiService",null),o([d("leavitt-email-history-viewer")],X.prototype,"demo1",null),o([d("leavitt-email-history-viewer-filled")],X.prototype,"demo2",null),X=o([m("leavitt-email-history-viewer-demo")],X);export{X as LeavittEmailHistoryViewerDemo};
