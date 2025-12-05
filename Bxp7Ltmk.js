import{L as t,i as e,S as i,c as s,u as a,v as l,w as r,x as o,_ as n,n as c,r as h,e as d,t as m,y as p,E as g,z as u,T as v,B as f,p as b,a as y,D as $,k as x,b as w,h as _,F as D,H as T,P as S,A as k,d as j,G as E}from"./BRwII10n.js";import{S as C}from"./9jYdvRPf.js";import"./PuY7V0q-.js";import{F as I}from"./CnQZtHvy.js";import"./DcepZfUD.js";import"./C_PtdVdd.js";import"./BClF5uaj.js";import"./WNCUOMTT.js";import{D as R,r as A}from"./CJaD0xbj.js";import"./C9unvfR0.js";import"./D9PdaR90.js";import{d as N}from"./fEBq_QNq.js";import{D as L}from"./DTS7lhmZ.js";import{g as M}from"./OXmljVLM.js";import"./DC-licnW.js";import"./BF8jxuqE.js";import"./TMiwMgdF.js";import"./Bqq-1491.js";import"./rQB-Wkx_.js";import{n as H}from"./Dtt5MXMk.js";import{T as z}from"./DG2I01th.js";import"./DdZFQKxf.js";import"./Cpkk_VM2.js";import"./C0wWYPXY.js";import"./DkMGpM_P.js";import"./EHyh_5h0.js";import"./BkmICBhh.js";import"./CKv0GAzC.js";let Y=class extends(t(e)){#t;get isActive(){return this.#t}set isActive(t){this.#t=t}#e;get apiService(){return this.#e}set apiService(t){this.#e=t}#i;get filterController(){return this.#i}set filterController(t){this.#i=t}#s=[];get template(){return this.#s}set template(t){this.#s=t}#a;get templateId(){return this.#a}set templateId(t){this.#a=t}#l=!0;#r;get startDate(){return this.#r}set startDate(t){this.#r=t}#o;get endDate(){return this.#o}set endDate(t){this.#o=t}#n;get dialog(){return this.#n}set dialog(t){this.#n=t}#c;get dateRangeSelect(){return this.#c}set dateRangeSelect(t){this.#c=t}async firstUpdated(){this.filterController.subscribeToFilterChange(async()=>{this.#h(),this.requestUpdate("filterController")})}async updated(t){this.isActive&&t.has("isActive")&&this.#h()}async#h(){this.filterController.getValue("template")&&this.#l&&(this.template=await this.#d())}async#d(){if(!this.apiService)return console.warn("No api service provided"),[];const t=["select=Id,Name,IsExpired","orderby=Name"];try{const e=this.apiService.getAsync(`EmailTemplates?${t.join("&")}`);this.loadWhile(e);const i=(await e).toList();return this.#l=!1,i}catch(t){this.dispatchEvent(new i(t))}return[]}async open(){this.#l&&(this.template=await this.#d()),this.templateId=this.filterController.getValue("template")??"";const t=this.filterController.getValue("dateRange");this.startDate=("custom"===t?this.filterController.getValue("startDate"):R.get(t)?.startDate())||"",this.endDate=("custom"===t?this.filterController.getValue("endDate"):R.get(t)?.endDate())||"",this.dialog.show()}static{this.styles=[s`
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
    `]}render(){return o`
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
        label=${A(this.filterController.getValue("dateRange"),this.filterController.getValue("startDate")??null,this.filterController.getValue("endDate")??null,"Sent")}
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
            ${this.template.map(t=>o`<md-select-option ?selected=${t.Id===Number(this.templateId)} value=${t.Id??""}>
                  <div slot="headline">${t.Name}</div>
                  ${t.IsExpired?o`<div inactive slot="supporting-text">Inactive</div>`:""}
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
    `}};n([c({type:Boolean})],Y.prototype,"isActive",null),n([c({type:Object})],Y.prototype,"apiService",null),n([h()],Y.prototype,"filterController",null),n([h()],Y.prototype,"template",null),n([h()],Y.prototype,"templateId",null),n([h()],Y.prototype,"startDate",null),n([h()],Y.prototype,"endDate",null),n([d("md-dialog")],Y.prototype,"dialog",null),n([d("titanium-date-range-selector")],Y.prototype,"dateRangeSelect",null),Y=n([m("leavitt-email-history-view-list-filter-dialog")],Y);class B extends p{constructor(t){if(super(t),this.it=g,t.type!==u.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===g||null==t)return this._t=void 0,this.it=t;if(t===v)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}B.directiveName="unsafeHTML",B.resultType=1;const O=f(B);let P=class extends(t(e)){#e;get apiService(){return this.#e}set apiService(t){this.#e=t}#m;get emailTemplateLogId(){return this.#m}set emailTemplateLogId(t){this.#m=t}#p;get emailTemplateLog(){return this.#p}set emailTemplateLog(t){this.#p=t}#g;get snackbar(){return this.#g}set snackbar(t){this.#g=t}#n;get dialog(){return this.#n}set dialog(t){this.#n=t}#u;async open(t){return this.emailTemplateLogId=t,this.emailTemplateLog=null,this.dialog.returnValue="",await this.updateComplete,this.dialog.show(),this.emailTemplateLog=await this.#v(t),await new Promise(t=>{this.#u=t})}async#v(t){if(!this.apiService)return console.warn("No api service provided"),null;const e=[];try{const i=this.apiService.getAsync(`EmailTemplateLogs(${t})?${e.join("&")}`);this.loadWhile(i);const s=await i;return s?.entity}catch(t){this.dispatchEvent(new i(t))}return null}static{this.styles=[b,s`
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
    `]}render(){return o`
      <md-dialog
        @open=${t=>{l(t.target),a(t.target)}}
        @close=${t=>{if("done"===t.target.returnValue||"navigation-close"===t.target.returnValue)return r(t.target),this.snackbar.dismissAll(),this.#u(t.target.returnValue);t.preventDefault()}}
      >
        <div slot="headline">Email log</div>

        ${this.isLoading?o`<main slot="content">Loading...</main>`:this.emailTemplateLog?o`<main slot="content" email-body>${O(this.emailTemplateLog?.EmailBody??"")}</main>`:o`<main slot="content">No email template log found</main>`}

        <titanium-snackbar-stack slot="content" .eventListenerTarget=${this}></titanium-snackbar-stack>
        <div slot="actions">
          <md-filled-tonal-button autofocus ?disabled=${this.isLoading} @click=${()=>this.dialog.close("done")}
            >Done ${this.isLoading?o`<md-circular-progress slot="icon" indeterminate></md-circular-progress>`:g}
          </md-filled-tonal-button>
        </div>
      </md-dialog>
    `}};n([c({type:Object})],P.prototype,"apiService",null),n([h()],P.prototype,"emailTemplateLogId",null),n([h()],P.prototype,"emailTemplateLog",null),n([d("titanium-snackbar-stack")],P.prototype,"snackbar",null),n([d("md-dialog")],P.prototype,"dialog",null),P=n([m("leavitt-view-sent-email-dialog")],P);let W=class extends(t(e)){#e;get apiService(){return this.#e}set apiService(t){this.#e=t}#f;get emailTemplates(){return this.#f}set emailTemplates(t){this.#f=t}#g;get snackbar(){return this.#g}set snackbar(t){this.#g=t}#n;get dialog(){return this.#n}set dialog(t){this.#n=t}#u;async open(){return this.emailTemplates=[],this.dialog.returnValue="",await this.updateComplete,this.dialog.show(),this.emailTemplates=await this.#b(),await new Promise(t=>{this.#u=t})}async#b(){if(!this.apiService)return console.warn("No api service provided"),[];const t=["select=Id,Name,IsExpired,Description","orderby=Name","filter=not IsExpired"];try{const e=this.apiService.getAsync(`EmailTemplates?${t.join("&")}`);this.loadWhile(e);const i=await e;return i?.entities}catch(t){this.dispatchEvent(new i(t))}return[]}static{this.styles=[y,b,s`
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
    `]}render(){return o`
      <md-dialog
        @open=${t=>{l(t.target),a(t.target)}}
        @close=${t=>{if("done"===t.target.returnValue||"navigation-close"===t.target.returnValue)return r(t.target),this.snackbar.dismissAll(),this.#u(t.target.returnValue);t.preventDefault()}}
      >
        <div slot="headline">What emails does this tool send?</div>

        ${this.isLoading?g:this.emailTemplates?.length?o`<main slot="content" email-templates>
                ${$(this.emailTemplates,t=>t.Id,t=>o`<h2>${t.Name}</h2>
                      <p>${t.Description??"No description available"}</p>`)}
              </main>`:o`<main slot="content">No email templates found for this site</main>`}

        <titanium-snackbar-stack slot="content" .eventListenerTarget=${this}></titanium-snackbar-stack>
        <div slot="actions">
          <md-filled-tonal-button autofocus ?disabled=${this.isLoading} @click=${()=>this.dialog.close("done")}
            >Done ${this.isLoading?o`<md-circular-progress slot="icon" indeterminate></md-circular-progress>`:g}
          </md-filled-tonal-button>
        </div>
      </md-dialog>
    `}};n([c({type:Object})],W.prototype,"apiService",null),n([h()],W.prototype,"emailTemplates",null),n([d("titanium-snackbar-stack")],W.prototype,"snackbar",null),n([d("md-dialog")],W.prototype,"dialog",null),W=n([m("leavitt-view-email-template-info-dialog")],W);let V=class extends(t(e)){#t;get isActive(){return this.#t}set isActive(t){this.#t=t}#e;get apiService(){return this.#e}set apiService(t){this.#e=t}#y;get path(){return this.#y}set path(t){this.#y=t}#$=[];get logs(){return this.#$}set logs(t){this.#$=t}#x=[];get selected(){return this.#x}set selected(t){this.#x=t}#w="";get searchTerm(){return this.#w}set searchTerm(t){this.#w=t}#_=0;get resultTotal(){return this.#_}set resultTotal(t){this.#_=t}#D="desc";get sortDirection(){return this.#D}set sortDirection(t){this.#D=t}#T="SentDate";get sortBy(){return this.#T}set sortBy(t){this.#T=t}#i;get filterController(){return this.#i}set filterController(t){this.#i=t}#S;get dataTable(){return this.#S}set dataTable(t){this.#S=t}#k;get viewDialog(){return this.#k}set viewDialog(t){this.#k=t}#j;get filterModal(){return this.#j}set filterModal(t){this.#j=t}#E;get viewEmailTemplateInfoDialog(){return this.#E}set viewEmailTemplateInfoDialog(t){this.#E=t}#C=!0;constructor(){super(),this.filterController=new I(""),this.filterController.setFilter("dateRange",()=>""),this.filterController.setFilter("startDate",()=>""),this.filterController.setFilter("endDate",()=>""),this.filterController.setFilter("template",t=>`EmailTemplateId eq ${t}`),this.filterController.subscribeToFilterChange(async()=>{this.isActive?(this.dataTable.resetPage(),this.#I()):this.#C=!0}),this.filterController.loadFromQueryString()}updated(t){this.isActive&&t.has("isActive")&&this.#C&&this.#I(),t.has("path")&&(this.filterController.path=this.path)}#I(){this.#R(this.searchTerm)}#A(t){this.sortDirection=t.detail,this.dataTable.resetPage(),this.#I()}#N(t){this.sortBy=t.detail,this.dataTable.resetPage(),this.#I()}#L=new L(t=>this.#R(t));renderRecipients(t,e=1){const i=t?.split(",").filter(t=>!!t).map(t=>t.trim()).reverse()??[];return i?.length>e?o`${$(i.slice(0,e),t=>t,t=>o`${t} <br />`)} <span more> ${i.length-e} more... </span>`:$(i,t=>t,t=>o`${t} <br />`)}async#R(t){if(!this.apiService)return void console.warn("No api service provided");let e=[];const s=M(t),a=s.map(t=>`(contains(Subject, '${t}') or contains(Recipients, '${t}'))`).join(" and ");s.length>0&&e.push(`${a}`);const l=this.filterController.getValue("dateRange"),r="custom"===l?this.filterController.getValue("startDate"):R.get(l)?.startDate(),o="custom"===l?this.filterController.getValue("endDate"):R.get(l)?.endDate();r&&e.push(`SentDate ge ${N(r).format("YYYY-MM-DD")}`),o&&e.push(`SentDate le ${N(o).format("YYYY-MM-DD")}`),e=[...e,...this.filterController.getActiveFilterOdata()];const n=["select=Id,Recipients,SentDate,Subject","expand=EmailTemplate(select=Id,Name,IsExpired)",`top=${await this.dataTable.getTake()}`,`orderby=${this.sortBy} ${this.sortDirection}`,"skip="+await this.dataTable.getTake()*await this.dataTable.getPage(),"count=true"];e.length>0&&n.push(`filter=${e.join(" and ")}`);try{const t=this.apiService.getAsync(`EmailTemplateLogs/?${n.join("&")}`);this.dataTable.loadWhile(t),this.loadWhile(t);const e=await t;this.resultTotal=e.odataCount,this.logs=e.toList(),this.#C=!1}catch(t){this.dispatchEvent(new i(t))}}static{this.styles=[x,w,s`
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
    `]}render(){return o`
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
          @sort-direction-changed=${this.#A}
        ></titanium-data-table-header>

        <titanium-data-table-header
          large
          slot="table-headers"
          column-name="Subject"
          title="Subject"
          @sort-by-changed=${this.#N}
          .sortBy=${this.sortBy}
          .sortDirection=${this.sortDirection}
          @sort-direction-changed=${this.#A}
        ></titanium-data-table-header>

        <titanium-data-table-header
          desktop
          slot="table-headers"
          column-name="Recipients"
          title="Recipients"
          @sort-by-changed=${this.#N}
          .sortBy=${this.sortBy}
          .sortDirection=${this.sortDirection}
          @sort-direction-changed=${this.#A}
        ></titanium-data-table-header>

        <titanium-data-table-header
          desktop
          slot="table-headers"
          column-name="EmailTemplate/Name"
          title="Email template"
          @sort-by-changed=${this.#N}
          .sortBy=${this.sortBy}
          .sortDirection=${this.sortDirection}
          @sort-direction-changed=${this.#A}
        ></titanium-data-table-header>
        <titanium-data-table-header width="50px" no-sort slot="table-headers"></titanium-data-table-header>
        ${$(this.logs??[],t=>t.Id,t=>o`
            <titanium-data-table-item disable-select .item=${t} slot="items">
              <row-item width="150px" ellipsis date
                >${t.SentDate?o`${N(t.SentDate).format("MMM DD, YY")}<br /><span time>${N(t.SentDate).format("h:mm A")}</span>`:"-"}</row-item
              >
              <row-item large>${t.Subject??"-"} </row-item>
              <row-item desktop title=${t.Recipients??""}>${this.renderRecipients(t.Recipients??null)}</row-item>
              <row-item desktop>
                <div>${t.EmailTemplate?.Name}</div>
                ${t.EmailTemplate?.IsExpired?o`<div inactive>Inactive</div>`:""}</row-item
              >
              <row-item width="50px"
                ><md-filled-tonal-icon-button @click=${()=>this.viewDialog.open(t.Id??0)}><md-icon>pageview</md-icon></md-filled-tonal-icon-button>
              </row-item>
            </titanium-data-table-item>
          `)}
      </titanium-data-table>
      <leavitt-view-sent-email-dialog .apiService=${this.apiService}></leavitt-view-sent-email-dialog>
      <leavitt-view-email-template-info-dialog .apiService=${this.apiService}></leavitt-view-email-template-info-dialog>
    `}};async function F(t){let e=t;for(;e;){await(e?.updateComplete);const t=e.scrollContainer;if(null!=t)return t;e=e.parentElement??null}return null}n([c({type:Boolean})],V.prototype,"isActive",null),n([c({type:Object})],V.prototype,"apiService",null),n([c({type:String})],V.prototype,"path",null),n([h()],V.prototype,"logs",null),n([h()],V.prototype,"selected",null),n([h()],V.prototype,"searchTerm",null),n([h()],V.prototype,"resultTotal",null),n([h()],V.prototype,"sortDirection",null),n([h()],V.prototype,"sortBy",null),n([h()],V.prototype,"filterController",null),n([d("titanium-data-table")],V.prototype,"dataTable",null),n([d("leavitt-view-sent-email-dialog")],V.prototype,"viewDialog",null),n([d("leavitt-email-history-view-list-filter-dialog")],V.prototype,"filterModal",null),n([d("leavitt-view-email-template-info-dialog")],V.prototype,"viewEmailTemplateInfoDialog",null),V=n([m("leavitt-email-history-viewer")],V);let U=class extends e{#M=!1;get stickyTop(){return this.#M}set stickyTop(t){this.#M=t}#H=null;get scrollableParent(){return this.#H}set scrollableParent(t){this.#H=t}#z;get level1Text(){return this.#z}set level1Text(t){this.#z=t}#Y;get level1Href(){return this.#Y}set level1Href(t){this.#Y=t}#B;get level2Text(){return this.#B}set level2Text(t){this.#B=t}#O;get level2Href(){return this.#O}set level2Href(t){this.#O=t}#P;get level3Text(){return this.#P}set level3Text(t){this.#P=t}#W;get level3Href(){return this.#W}set level3Href(t){this.#W=t}#V;get level4Text(){return this.#V}set level4Text(t){this.#V=t}#F;get level4Href(){return this.#F}set level4Href(t){this.#F=t}#U=!1;get isScrolled(){return this.#U}set isScrolled(t){this.#U=t}#q=null;static{this.styles=[_,x,s`
      :host {
        display: grid;
        grid:
          'main gap trailing'
          'footer footer footer'
          / auto 1fr auto;
        align-items: start;

        min-height: 64px;
        background-color: var(--md-sys-color-surface-container-lowest);
        box-sizing: border-box;
        z-index: 2;

        position: relative;
      }

      :host([is-scrolled][sticky-top]) {
        border-bottom: 1px solid var(--md-sys-color-outline-variant);
      }

      :host([sticky-top]) {
        position: sticky;
        top: 0;
      }

      :host(:not([sticky-top])) {
        border-bottom: 1px solid var(--md-sys-color-outline-variant);
      }

      aside {
        grid-area: trailing;
        display: flex;
        flex-direction: row;
        gap: 4px;
        align-items: center;
        padding: 8px 16px 0 0;
      }

      footer {
        display: grid;
        grid-area: footer;
      }

      main {
        grid-area: main;
        display: flex;
        flex-direction: row;

        padding: 20px 8px 0 16px;

        /* position: sticky;
        left: 16px; */
        align-items: center;

        gap: 4px;
      }
      h1 {
        opacity: 0.8;
      }

      h1 > a:visited,
      h1 > a {
        text-decoration: none;
        color: var(--md-sys-color-on-surface);
      }

      h1 > a:hover {
        text-decoration: underline;
      }

      h1:last-child {
        opacity: 1;
      }

      md-icon {
        opacity: 0.8;
      }

      @container (width < 920px) {
        :host {
          min-height: 54px;
        }

        main {
          padding: 16px 8px 0 16px;
        }

        h1 {
          font-size: 16px;
          line-height: 18px;
        }
      }
    `]}async connectedCallback(){super.connectedCallback();const t=await F(this);this.#q=this.scrollableParent||t,this.#q&&this.#q.addEventListener("scroll",this.#G.bind(this),!1)}async disconnectedCallback(){this.#q&&this.#q.removeEventListener("scroll",this.#G.bind(this),!1),super.disconnectedCallback()}async updated(t){if(t.has("scrollableParent")){this.#q?.removeEventListener("scroll",this.#G.bind(this),!1);const t=await F(this);this.#q=this.scrollableParent||t,this.#q&&this.#q.addEventListener("scroll",this.#G.bind(this),!1)}}#G(){this.isScrolled=(this.#q?.scrollTop||0)>0}render(){return o`
      <main ellipsis part="main">
        ${this.level1Text?this.level1Href?o`<h1 ellipsis><a title=${this.level1Text} href=${this.level1Href}>${this.level1Text}</a></h1>`:o`<h1 ellipsis>${this.level1Text}</h1>`:g}
        ${this.level2Text?this.level2Href?o` <md-icon>chevron_right</md-icon>
                <h1 ellipsis><a title=${this.level2Text} href=${this.level2Href}>${this.level2Text}</a></h1>`:o` <md-icon>chevron_right</md-icon>
                <h1 ellipsis>${this.level2Text}</h1>`:g}
        ${this.level3Text?this.level3Href?o`<md-icon>chevron_right</md-icon>
                <h1 ellipsis><a title=${this.level3Text} href=${this.level3Href}>${this.level3Text}</a></h1>`:o`<md-icon>chevron_right</md-icon>
                <h1 ellipsis>${this.level3Text}</h1>`:g}
        ${this.level4Text?this.level4Href?o`<md-icon>chevron_right</md-icon>
                <h1 ellipsis><a title=${this.level4Text} href=${this.level4Href}>${this.level4Text}</a></h1>`:o`<md-icon>chevron_right</md-icon>
                <h1 ellipsis>${this.level4Text}</h1>`:g}
      </main>
      <aside part="trailing"><slot name="trailing"></slot></aside>
      <footer part="footer"><slot name="footer"></slot></footer>
    `}};n([c({type:Boolean,reflect:!0,attribute:"sticky-top"})],U.prototype,"stickyTop",null),n([c({type:Object,attribute:"scrollable-parent"})],U.prototype,"scrollableParent",null),n([c({type:String})],U.prototype,"level1Text",null),n([c({type:String})],U.prototype,"level1Href",null),n([c({type:String})],U.prototype,"level2Text",null),n([c({type:String})],U.prototype,"level2Href",null),n([c({type:String})],U.prototype,"level3Text",null),n([c({type:String})],U.prototype,"level3Href",null),n([c({type:String})],U.prototype,"level4Text",null),n([c({type:String})],U.prototype,"level4Href",null),n([c({type:Boolean,reflect:!0,attribute:"is-scrolled"})],U.prototype,"isScrolled",null),U=n([m("leavitt-app-navigation-header")],U);let q=class extends e{#K=!1;get isOverflowed(){return this.#K}set isOverflowed(t){this.#K=t}#X="640px";get maxWidth(){return this.#X}set maxWidth(t){this.#X=t}#H=null;get scrollableParent(){return this.#H}set scrollableParent(t){this.#H=t}#Z=!1;get hasLeading(){return this.#Z}set hasLeading(t){this.#Z=t}#J=!1;get hasTrailing(){return this.#J}set hasTrailing(t){this.#J=t}#Q;get leadingElements(){return this.#Q}set leadingElements(t){this.#Q=t}#tt;get trailingElements(){return this.#tt}set trailingElements(t){this.#tt=t}#q=null;#et=null;async connectedCallback(){super.connectedCallback();const t=await F(this);this.#q=this.scrollableParent||t,this.#q&&(this.#et=new ResizeObserver(()=>{this.#it()}),this.#et.observe(this.#q))}disconnectedCallback(){this.#q&&this.#et?.disconnect(),super.disconnectedCallback()}async updated(t){if(t.has("scrollableParent")){this.#et?.disconnect();const t=await F(this);this.#q=this.scrollableParent||t,this.#q&&(this.#et=new ResizeObserver(()=>{this.#it()}),this.#et.observe(this.#q))}}isOverflown(t){return t.scrollHeight>t.clientHeight}#it(){this.#q&&(this.isOverflowed=this.isOverflown(this.#q))}static{this.styles=[s`
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

      :host([has-leading][has-trailing]) main {
        gap: 16px;
      }
    `]}render(){return o`
      <main part="main" style=${this.maxWidth?D({maxWidth:this.maxWidth}):g}>
        <section part="leading"><slot @slotchange=${()=>this.hasLeading=this.leadingElements.length>0} name="leading"></slot></section>
        <section part="trailing"><slot @slotchange=${()=>this.hasTrailing=this.trailingElements.length>0} name="trailing"></slot></section>
      </main>
    `}};n([c({type:Boolean,reflect:!0,attribute:"is-overflowed"})],q.prototype,"isOverflowed",null),n([c({type:String,attribute:"max-width"})],q.prototype,"maxWidth",null),n([c({type:Object,attribute:"scrollable-parent"})],q.prototype,"scrollableParent",null),n([c({type:Boolean,reflect:!0,attribute:"has-leading"})],q.prototype,"hasLeading",null),n([c({type:Boolean,reflect:!0,attribute:"has-trailing"})],q.prototype,"hasTrailing",null),n([T({slot:"leading"})],q.prototype,"leadingElements",null),n([T({slot:"trailing"})],q.prototype,"trailingElements",null),q=n([m("leavitt-app-navigation-footer")],q);let G=class extends(t(e)){#t;get isActive(){return this.#t}set isActive(t){this.#t=t}#e;get apiService(){return this.#e}set apiService(t){this.#e=t}#i;get filterController(){return this.#i}set filterController(t){this.#i=t}#s=[];get template(){return this.#s}set template(t){this.#s=t}#a;get templateId(){return this.#a}set templateId(t){this.#a=t}#l=!0;#r;get startDate(){return this.#r}set startDate(t){this.#r=t}#o;get endDate(){return this.#o}set endDate(t){this.#o=t}#n;get dialog(){return this.#n}set dialog(t){this.#n=t}#c;get dateRangeSelect(){return this.#c}set dateRangeSelect(t){this.#c=t}async firstUpdated(){this.filterController.subscribeToFilterChange(async()=>{this.#h(),this.requestUpdate("filterController")})}async updated(t){this.isActive&&t.has("isActive")&&this.#h()}async#h(){this.filterController.getValue("template")&&this.#l&&(this.template=await this.#d())}async#d(){if(!this.apiService)return console.warn("No api service provided"),[];const t=["select=Id,Name,IsExpired","orderby=Name"];try{const e=this.apiService.getAsync(`EmailTemplates?${t.join("&")}`);this.loadWhile(e);const i=(await e).toList();return this.#l=!1,i}catch(t){this.dispatchEvent(new i(t))}return[]}async open(){this.#l&&(this.template=await this.#d()),this.templateId=this.filterController.getValue("template")??"";const t=this.filterController.getValue("dateRange");this.startDate=("custom"===t?this.filterController.getValue("startDate"):R.get(t)?.startDate())||"",this.endDate=("custom"===t?this.filterController.getValue("endDate"):R.get(t)?.endDate())||"",this.dialog.show()}static{this.styles=[s`
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
    `]}render(){return o`
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
        label=${A(this.filterController.getValue("dateRange"),this.filterController.getValue("startDate")??null,this.filterController.getValue("endDate")??null,"Sent")}
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
            ${this.template.map(t=>o`<md-select-option ?selected=${t.Id===Number(this.templateId)} value=${t.Id??""}>
                  <div slot="headline">${t.Name}</div>
                  ${t.IsExpired?o`<div inactive slot="supporting-text">Inactive</div>`:""}
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
    `}};n([c({type:Boolean})],G.prototype,"isActive",null),n([c({type:Object})],G.prototype,"apiService",null),n([h()],G.prototype,"filterController",null),n([h()],G.prototype,"template",null),n([h()],G.prototype,"templateId",null),n([h()],G.prototype,"startDate",null),n([h()],G.prototype,"endDate",null),n([d("md-dialog")],G.prototype,"dialog",null),n([d("titanium-date-range-selector")],G.prototype,"dateRangeSelect",null),G=n([m("leavitt-email-history-viewer-filled-filter-dialog")],G);let K=class extends(t(e)){#t;get isActive(){return this.#t}set isActive(t){this.#t=t}#e;get apiService(){return this.#e}set apiService(t){this.#e=t}#y;get path(){return this.#y}set path(t){this.#y=t}#st="";get toolbarSearchTerm(){return this.#st}set toolbarSearchTerm(t){this.#st=t}#w="";get searchTerm(){return this.#w}set searchTerm(t){this.#w=t}#at=[];get items(){return this.#at}set items(t){this.#at=t}#x=[];get selected(){return this.#x}set selected(t){this.#x=t}#lt={uniqueKey:t=>t.Id?.toString()??"",itemMetaData:[{key:"SentDate",friendlyName:"Sent",render:t=>o`<div>
            ${t.SentDate?o`${N(t.SentDate).format("MMM DD, YY")}<br /><span time>${N(t.SentDate).format("h:mm A")}</span>`:"-"}
          </div>`,width:"150px",defaultSort:{direction:"desc",position:1}},{key:"Subject",friendlyName:"Subject",render:t=>o`${t.Subject??"-"}`,width:"200px"},{key:"Recipients",friendlyName:"Recipients",render:t=>o`${this.renderRecipients(t.Recipients??null)}`,csvValue:t=>t.Recipients??"",width:"150px"},{key:"EmailTemplate",friendlyName:"Email template",sortExpression:"EmailTemplate/Name",render:t=>o`<div>${t.EmailTemplate?.Name}</div>
            ${t.EmailTemplate?.IsExpired?o`<div inactive>Inactive</div>`:""}`,csvValue:t=>t.EmailTemplate?.Name??"",width:"200px"},{key:"Bool1",friendlyName:"",disableSort:!0,render:t=>o`<md-filled-tonal-icon-button @click=${()=>this.viewDialog?.open?.(t?.Id??0)}><md-icon>pageview</md-icon></md-filled-tonal-icon-button>`,csvValue:()=>"",width:"60px"}]};get tableMetaData(){return this.#lt}set tableMetaData(t){this.#lt=t}#_=0;get resultTotal(){return this.#_}set resultTotal(t){this.#_=t}#i;get filterController(){return this.#i}set filterController(t){this.#i=t}#S;get dataTable(){return this.#S}set dataTable(t){this.#S=t}#rt;get filterDialog(){return this.#rt}set filterDialog(t){this.#rt=t}#ot;get pageControl(){return this.#ot}set pageControl(t){this.#ot=t}#nt;get mainContentContainer(){return this.#nt}set mainContentContainer(t){this.#nt=t}#k;get viewDialog(){return this.#k}set viewDialog(t){this.#k=t}#E;get viewEmailTemplateInfoDialog(){return this.#E}set viewEmailTemplateInfoDialog(t){this.#E=t}constructor(){super(),this.filterController=new I(""),this.filterController.setFilter("dateRange",()=>""),this.filterController.setFilter("startDate",()=>""),this.filterController.setFilter("endDate",()=>""),this.filterController.setFilter("template",t=>`EmailTemplateId eq ${t}`),this.filterController.subscribeToFilterChange(async()=>{this.isActive&&(this.pageControl&&(this.pageControl.page=0),this.#I())}),this.filterController.loadFromQueryString()}async updated(t){this.isActive&&t.has("isActive")&&(await(this.mainContentContainer?.updateComplete),this.#I()),this.isActive&&t.has("toolbarSearchTerm")&&this.searchTerm!==this.toolbarSearchTerm&&(this.searchTerm=this.toolbarSearchTerm,this.pageControl&&(this.pageControl.page=0),this.#L.debounce()),t.has("path")&&(this.filterController.path=this.path)}async#I(){const{items:t,odataCount:e}=await this.#ct(this.searchTerm);this.items=t,this.resultTotal=e}#L=new L(()=>this.#I());renderRecipients(t,e=1){const i=t?.split(",").filter(t=>!!t).map(t=>t.trim()).reverse()??[];return i?.length>e?o`${$(i.slice(0,e),t=>t,t=>o`${t} <br />`)} <span more> ${i.length-e} more... </span>`:$(i,t=>t,t=>o`${t} <br />`)}async#ct(t){let e=[];const s=M(t||""),a=s.map(t=>`(contains(Subject, '${t}') or contains(Recipients, '${t}'))`).join(" and ");s.length>0&&e.push(`${a}`);const l=this.filterController.getValue("dateRange"),r="custom"===l?this.filterController.getValue("startDate"):R.get(l)?.startDate(),o="custom"===l?this.filterController.getValue("endDate"):R.get(l)?.endDate();r&&e.push(`SentDate ge ${N(r).format("YYYY-MM-DD")}`),o&&e.push(`SentDate le ${N(o).format("YYYY-MM-DD")}`),e=[...e,...this.filterController.getActiveFilterOdata()];const n=["select=Id,Recipients,SentDate,Subject","expand=EmailTemplate(select=Id,Name,IsExpired)",`top=${this.pageControl?.take}`,"skip="+(this.pageControl?.take??0)*(this.pageControl?.page??0),"count=true"],c=this.dataTable.sort.map(t=>`${this.tableMetaData.itemMetaData.find(e=>e.key===t.key)?.sortExpression??t.key} ${t.direction}`).join(", ");c&&n.push(`orderby=${c}`),e.length>0&&n.push(`filter=${e.join(" and ")}`);try{if(!this.apiService)throw new Error("No api service provided");const t=this.apiService?.getAsync(`EmailTemplateLogs/?${n.join("&")}`);this.loadWhile(t),this.dataTable.loadWhile(t),this.dispatchEvent(new S(t));const e=await t;return{items:e.toList(),odataCount:e.odataCount}}catch(t){this.dispatchEvent(new i(t,{autoHide:7500}))}return{items:[],odataCount:0}}static{this.styles=[H,x,w,s`
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
    `]}render(){return o`
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
    `}};n([c({type:Boolean})],K.prototype,"isActive",null),n([c({type:Object})],K.prototype,"apiService",null),n([c({type:String})],K.prototype,"path",null),n([c({type:String})],K.prototype,"toolbarSearchTerm",null),n([h()],K.prototype,"searchTerm",null),n([h()],K.prototype,"items",null),n([h()],K.prototype,"selected",null),n([h()],K.prototype,"tableMetaData",null),n([h()],K.prototype,"resultTotal",null),n([h()],K.prototype,"filterController",null),n([d("titanium-data-table-core")],K.prototype,"dataTable",null),n([d("leavitt-email-history-viewer-filled-filter-dialog")],K.prototype,"filterDialog",null),n([d("titanium-page-control")],K.prototype,"pageControl",null),n([d("leavitt-app-main-content-container")],K.prototype,"mainContentContainer",null),n([d("leavitt-view-sent-email-dialog")],K.prototype,"viewDialog",null),n([d("leavitt-view-email-template-info-dialog")],K.prototype,"viewEmailTemplateInfoDialog",null),K=n([m("leavitt-email-history-viewer-filled")],K);let X=class extends(z(e)){#e;get apiService(){return this.#e}set apiService(t){this.#e=t}#ht;get demo1(){return this.#ht}set demo1(t){this.#ht=t}#dt;get demo2(){return this.#dt}set demo2(t){this.#dt=t}constructor(){super(),this.apiService=new k(new j),this.apiService.baseUrl="https://devapi3.leavitt.com/",this.apiService.addHeader("X-LGAppName","EducationAdminV2")}static{this.styles=[_,b,s`
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
    `]}render(){return o`
      <user-manager disableAutoload></user-manager>
    
      <h1>Filled</h1>
      <main row>
       <leavitt-email-history-viewer-filled isActive .apiService=${this.apiService} .path=${"/leavitt-email-history-viewer"}></leavitt-email-history-viewer-filled>
      </main>

      <h1>Outlined</h1>
      <main row>
        <leavitt-email-history-viewer isActive .apiService=${this.apiService} .path=${"/leavitt-email-history-viewer"}></leavitt-email-history-viewer>
      </main>
    `}};n([h()],X.prototype,"apiService",null),n([d("leavitt-email-history-viewer")],X.prototype,"demo1",null),n([d("leavitt-email-history-viewer-filled")],X.prototype,"demo2",null),X=n([m("leavitt-email-history-viewer-playground")],X);let Z=class extends e{#mt=null;get refreshToken(){return this.#mt}set refreshToken(t){this.#mt=t}static{this.styles=[C,s``]}async firstUpdated(){const t=await E();await t.authenticateAsync(),this.refreshToken=window.localStorage.getItem("LG-AUTH-RT")}render(){return o`
      <story-header name="Leavitt Email History Viewer" className="LeavittEmailHistoryViewer"></story-header>
      ${this.refreshToken?o`<smart-demo
            html-file=${`index.html?#${encodeURIComponent(this.refreshToken)}`}
            line-numbers
            resizable
            project-src="../src/demos/leavitt-email-history-viewer/project.json"
          >
            <leavitt-email-history-viewer-playground></leavitt-email-history-viewer-playground>
          </smart-demo>`:g}
      <api-docs src="./custom-elements.json" selected="leavitt-email-history-viewer"></api-docs>
    `}};n([h()],Z.prototype,"refreshToken",null),Z=n([m("leavitt-email-history-viewer-demo")],Z);export{Z as LeavittEmailHistoryViewerDemo};
