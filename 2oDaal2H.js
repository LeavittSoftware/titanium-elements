import{i as t,b as e,A as i,s,c as a,_ as l,n,u as r,t as o,S as h,v as c,w as d,x as m,d as p,r as g,e as u,q as v,p as f,y as b,z as w,B as y,C as x,D as _,F as $,G as T,P as S,g as k,a as D,T as C,H as L}from"./D_imZRq6.js";import{A as E,S as N}from"./Cp0ERCaT.js";import{f as j}from"./Cr5T8rNp.js";import"./BrugqwTk.js";import{n as I}from"./CZn-9Agd.js";import"./BdNhM9Md.js";import{D as A,r as R}from"./yeJOHQKw.js";import"./Bzz7vt2X.js";import"./CvJhmu97.js";import"./DTCF_Trb.js";import{g as M}from"./OXmljVLM.js";import{D as F}from"./DTS7lhmZ.js";import{d as P}from"./CuDVc1pF.js";import{a as O}from"./Dd-al2T7.js";import"./DP0o14fc.js";import"./B4dJ93Bs.js";import"./B-WXJukW.js";import"./DdkIVHWD.js";let z=class extends t{#t=!1;get isOverflowed(){return this.#t}set isOverflowed(t){this.#t=t}#e="640px";get maxWidth(){return this.#e}set maxWidth(t){this.#e=t}#i=null;get scrollableParent(){return this.#i}set scrollableParent(t){this.#i=t}#s=!1;get hasLeading(){return this.#s}set hasLeading(t){this.#s=t}#a=!1;get hasTrailing(){return this.#a}set hasTrailing(t){this.#a=t}#l=!1;get hasMain(){return this.#l}set hasMain(t){this.#l=t}#n;get leadingElements(){return this.#n}set leadingElements(t){this.#n=t}#r;get trailingElements(){return this.#r}set trailingElements(t){this.#r=t}#o;get mainElements(){return this.#o}set mainElements(t){this.#o=t}#h=null;#c=null;async connectedCallback(){super.connectedCallback();const t=await j(this);this.#h=this.scrollableParent||t,this.#h&&(this.#c=new ResizeObserver(()=>{this.#d()}),this.#c.observe(this.#h))}disconnectedCallback(){this.#h&&this.#c?.disconnect(),super.disconnectedCallback()}async updated(t){if(t.has("scrollableParent")){this.#c?.disconnect();const t=await j(this);this.#h=this.scrollableParent||t,this.#h&&(this.#c=new ResizeObserver(()=>{this.#d()}),this.#c.observe(this.#h))}}isOverflown(t){return t.scrollHeight>t.clientHeight}#d(){this.#h&&(this.isOverflowed=this.isOverflown(this.#h))}static{this.styles=[e`
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
    `]}render(){return a`
      <main part="main" style=${this.maxWidth?s({maxWidth:this.maxWidth}):i}>
        <section part="leading"><slot @slotchange=${()=>this.hasLeading=this.leadingElements.length>0} name="leading"></slot></section>
        <section part="main"><slot @slotchange=${()=>this.hasMain=this.mainElements.length>0}></slot></section>
        <section part="trailing"><slot @slotchange=${()=>this.hasTrailing=this.trailingElements.length>0} name="trailing"></slot></section>
      </main>
    `}};l([n({type:Boolean,reflect:!0,attribute:"is-overflowed"})],z.prototype,"isOverflowed",null),l([n({type:String,attribute:"max-width"})],z.prototype,"maxWidth",null),l([n({type:Object,attribute:"scrollable-parent"})],z.prototype,"scrollableParent",null),l([n({type:Boolean,reflect:!0,attribute:"has-leading"})],z.prototype,"hasLeading",null),l([n({type:Boolean,reflect:!0,attribute:"has-trailing"})],z.prototype,"hasTrailing",null),l([n({type:Boolean,reflect:!0,attribute:"has-main"})],z.prototype,"hasMain",null),l([r({slot:"leading"})],z.prototype,"leadingElements",null),l([r({slot:"trailing"})],z.prototype,"trailingElements",null),l([r({slot:"main"})],z.prototype,"mainElements",null),z=l([o("leavitt-app-navigation-footer")],z);let Y=class extends t{#m=!1;get isLoading(){return this.#m}set isLoading(t){this.#m=t}#p=!1;get isActive(){return this.#p}set isActive(t){this.#p=t}#g=null;get apiService(){return this.#g}set apiService(t){this.#g=t}#u;get filterController(){return this.#u}set filterController(t){this.#u=t}#v=[];get template(){return this.#v}set template(t){this.#v=t}#f="";get templateId(){return this.#f}set templateId(t){this.#f=t}#b=!0;#w="";get startDate(){return this.#w}set startDate(t){this.#w=t}#y="";get endDate(){return this.#y}set endDate(t){this.#y=t}#x;get dialog(){return this.#x}set dialog(t){this.#x=t}#_;get dateRangeSelect(){return this.#_}set dateRangeSelect(t){this.#_=t}async firstUpdated(){this.filterController.subscribeToFilterChange(async()=>{this.#$(),this.requestUpdate("filterController")})}async updated(t){this.isActive&&t.has("isActive")&&this.#$()}async#$(){this.filterController.getValue("template")&&this.#b&&(this.template=await this.#T())}async#T(){if(!this.apiService)return console.warn("No api service provided"),[];const t=["select=Id,Name,IsExpired","orderby=Name"];try{const e=this.apiService.getAsync(`EmailTemplates?${t.join("&")}`);this.trackLoadingPromise(e);const i=(await e).toList();return this.#b=!1,i}catch(t){this.dispatchEvent(new h(t))}return[]}async open(){this.#b&&(this.template=await this.#T()),this.templateId=this.filterController.getValue("template")??"";const t=this.filterController.getValue("dateRange");this.startDate=("custom"===t?this.filterController.getValue("startDate"):A.get(t)?.startDate())||"",this.endDate=("custom"===t?this.filterController.getValue("endDate"):A.get(t)?.endDate())||"",this.dialog.show()}static{this.styles=[e`
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
    `]}render(){return a`
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
        label=${R(this.filterController.getValue("dateRange"),this.filterController.getValue("startDate")??null,this.filterController.getValue("endDate")??null,"Sent")}
        @remove=${t=>{t.preventDefault(),this.filterController.setValue("dateRange",null),this.filterController.setValue("startDate",null),this.filterController.setValue("endDate",null)}}
      >
        <md-icon slot="icon">date_range</md-icon>
      </md-input-chip>

      <md-dialog
        @open=${t=>{c(t.target),d(t.target)}}
        @close=${t=>{m(t.target)}}
      >
        <div slot="headline">Filter logs by</div>
        <form slot="content" method="dialog">
          <titanium-date-range-selector
            label="Sent"
            .startDate=${this.startDate}
            .endDate=${this.endDate}
            @change=${t=>{this.startDate=t.target.startDate||"",this.endDate=t.target.endDate||""}}
          ></titanium-date-range-selector>

          <md-filled-select label="Templates" .value=${this.templateId??""} @change=${t=>this.templateId=t.target.value}>
            <md-icon slot="leading-icon">content_copy</md-icon>
            <md-select-option></md-select-option>
            ${this.template.map(t=>a`<md-select-option ?selected=${t.Id===Number(this.templateId)} value=${t.Id??""}>
                  <div slot="headline">${t.Name}</div>
                  ${t.IsExpired?a`<div inactive slot="supporting-text">Inactive</div>`:""}
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
    `}};l([p("trackLoadingPromise"),g()],Y.prototype,"isLoading",null),l([n({type:Boolean})],Y.prototype,"isActive",null),l([n({type:Object})],Y.prototype,"apiService",null),l([g()],Y.prototype,"filterController",null),l([g()],Y.prototype,"template",null),l([g()],Y.prototype,"templateId",null),l([g()],Y.prototype,"startDate",null),l([g()],Y.prototype,"endDate",null),l([u("md-dialog")],Y.prototype,"dialog",null),l([u("titanium-date-range-selector")],Y.prototype,"dateRangeSelect",null),Y=l([o("leavitt-email-history-viewer-filled-filter-dialog")],Y);let B=class extends t{#m=!1;get isLoading(){return this.#m}set isLoading(t){this.#m=t}#g=null;get apiService(){return this.#g}set apiService(t){this.#g=t}#S=null;get emailTemplates(){return this.#S}set emailTemplates(t){this.#S=t}#k;get snackbar(){return this.#k}set snackbar(t){this.#k=t}#x;get dialog(){return this.#x}set dialog(t){this.#x=t}#D;async open(){return this.emailTemplates=[],this.dialog.returnValue="",await this.updateComplete,this.dialog.show(),this.emailTemplates=await this.#C(),await new Promise(t=>{this.#D=t})}async#C(){if(!this.apiService)return console.warn("No api service provided"),[];const t=["select=Id,Name,IsExpired,Description","orderby=Name","filter=not IsExpired"];try{const e=this.apiService.getAsync(`EmailTemplates?${t.join("&")}`);this.trackLoadingPromise(e);const i=await e;return i?.entities}catch(t){this.dispatchEvent(new h(t))}return[]}static{this.styles=[v,f,e`
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
    `]}render(){return a`
      <md-dialog
        @open=${t=>{d(t.target),c(t.target)}}
        @close=${t=>{if("done"===t.target.returnValue||"navigation-close"===t.target.returnValue)return m(t.target),this.snackbar.dismissAll(),this.#D(t.target.returnValue);t.preventDefault()}}
      >
        <div slot="headline">What emails does this tool send?</div>

        ${this.isLoading?i:this.emailTemplates?.length?a`<main slot="content" email-templates>
                ${b(this.emailTemplates,t=>t.Id,t=>a`<h2>${t.Name}</h2>
                      <p>${t.Description??"No description available"}</p>`)}
              </main>`:a`<main slot="content">No email templates found for this site</main>`}

        <titanium-snackbar-stack slot="content" .eventListenerTarget=${this}></titanium-snackbar-stack>
        <div slot="actions">
          <md-filled-tonal-button autofocus ?disabled=${this.isLoading} @click=${()=>this.dialog.close("done")}
            >Done ${this.isLoading?a`<md-circular-progress slot="icon" indeterminate></md-circular-progress>`:i}
          </md-filled-tonal-button>
        </div>
      </md-dialog>
    `}};l([p("trackLoadingPromise"),g()],B.prototype,"isLoading",null),l([n({type:Object})],B.prototype,"apiService",null),l([g()],B.prototype,"emailTemplates",null),l([u("titanium-snackbar-stack")],B.prototype,"snackbar",null),l([u("md-dialog")],B.prototype,"dialog",null),B=l([o("leavitt-view-email-template-info-dialog")],B);class V extends w{constructor(t){if(super(t),this.it=i,t.type!==y.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===i||null==t)return this._t=void 0,this.it=t;if(t===x)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}V.directiveName="unsafeHTML",V.resultType=1;const H=_(V);let W=class extends t{#m=!1;get isLoading(){return this.#m}set isLoading(t){this.#m=t}#g=null;get apiService(){return this.#g}set apiService(t){this.#g=t}#L=null;get emailTemplateLogId(){return this.#L}set emailTemplateLogId(t){this.#L=t}#E=null;get emailTemplateLog(){return this.#E}set emailTemplateLog(t){this.#E=t}#k;get snackbar(){return this.#k}set snackbar(t){this.#k=t}#x;get dialog(){return this.#x}set dialog(t){this.#x=t}#D;async open(t){return this.emailTemplateLogId=t,this.emailTemplateLog=null,this.dialog.returnValue="",await this.updateComplete,this.dialog.show(),this.emailTemplateLog=await this.#N(t),await new Promise(t=>{this.#D=t})}async#N(t){if(!this.apiService)return console.warn("No api service provided"),null;const e=[];try{const i=this.apiService.getAsync(`EmailTemplateLogs(${t})?${e.join("&")}`);this.trackLoadingPromise(i);const s=await i;return s?.entity}catch(t){this.dispatchEvent(new h(t))}return null}static{this.styles=[f,e`
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
    `]}render(){return a`
      <md-dialog
        @open=${t=>{d(t.target),c(t.target)}}
        @close=${t=>{if("done"===t.target.returnValue||"navigation-close"===t.target.returnValue)return m(t.target),this.snackbar.dismissAll(),this.#D(t.target.returnValue);t.preventDefault()}}
      >
        <div slot="headline">Email log</div>

        ${this.isLoading?a`<main slot="content">Loading...</main>`:this.emailTemplateLog?a`<main slot="content" email-body>${H(this.emailTemplateLog?.EmailBody??"")}</main>`:a`<main slot="content">No email template log found</main>`}

        <titanium-snackbar-stack slot="content" .eventListenerTarget=${this}></titanium-snackbar-stack>
        <div slot="actions">
          <md-filled-tonal-button autofocus ?disabled=${this.isLoading} @click=${()=>this.dialog.close("done")}
            >Done ${this.isLoading?a`<md-circular-progress slot="icon" indeterminate></md-circular-progress>`:i}
          </md-filled-tonal-button>
        </div>
      </md-dialog>
    `}};l([p("trackLoadingPromise"),g()],W.prototype,"isLoading",null),l([n({type:Object})],W.prototype,"apiService",null),l([g()],W.prototype,"emailTemplateLogId",null),l([g()],W.prototype,"emailTemplateLog",null),l([u("titanium-snackbar-stack")],W.prototype,"snackbar",null),l([u("md-dialog")],W.prototype,"dialog",null),W=l([o("leavitt-view-sent-email-dialog")],W);class U{constructor(t,e,i=null){this.key=t,this.oDataFilter=e,this.value=i}getOdataFilter(){return null===this.value?null:this.oDataFilter(this.value)}}class q{#j=new Map;#I=[];#A;get path(){return this.#A}set path(t){this.#A=t}subscribeToFilterChange(t){this.#I.push(t)}unsubscribeFromFilterChange(t){this.#I=this.#I.filter(e=>e!=t)}#R(){this.#I.forEach(t=>t())}constructor(t){this.path=t,window.navigation?.addEventListener("currententrychange",()=>{const t=function(t){if(t instanceof RegExp)return{keys:!1,pattern:t};var e,i,s,a,l=[],n="",r=t.split("/");for(r[0]||r.shift();s=r.shift();)"*"===(e=s[0])?(l.push(e),n+="?"===s[1]?"(?:/(.*))?":"/(.*)"):":"===e?(i=s.indexOf("?",1),a=s.indexOf(".",1),l.push(s.substring(1,~i?i:~a?a:s.length)),n+=~i&&!~a?"(?:/([^/]+?))?":"/([^/]+?)",~a&&(n+=(~i?"?":"")+"\\"+s.substring(a))):n+="/"+s;return{keys:l,pattern:new RegExp("^"+n+"/?$","i")}}(this.path);t.pattern.test(window.location.pathname)&&this.loadFromQueryString()})}loadFromQueryString(){const t=new URLSearchParams(location.search);let e=!1;return this.#j.forEach(i=>{let s=null;t.has(i.key)&&(s=t.get(i.key)),i.value!==s&&(i.value=s,e=!0)}),e&&this.#R(),e}get filters(){return Array.from(this.#j.values())}getActiveFilterOdata(){const t=[];return this.filters.forEach(e=>{const i=e.getOdataFilter();i&&t.push(i)}),t}setValue(t,e){if(this.#j.has(t)){const i=this.#j.get(t);i&&i?.value!==e&&(i.value=e,this.#M())}}getValue(t){if(!this.#j.has(t))return null;const e=this.#j.get(t);return e?.value}setFilter(t,e,i=null){this.#j.set(t,new U(t,e,i))}getFilter(t){return this.#j.get(t)}#F;#M(){clearTimeout(this.#F),this.#P(),this.#F=window.setTimeout(()=>{this.#R()},50)}#P(){const t=new URLSearchParams(location.search);this.#j.forEach(e=>{void 0!==e.value&&null!==e.value?t.set(e.key,String(e.value)):t.has(e.key)&&t.delete(e.key)});const e=`${location.pathname}?${t}`;window.history.replaceState({path:e},"",e)}}class G{#O;#z;#Y;#B;#V;#H;#W;get disabled(){return this.#W}set disabled(t){this.#W=t,this.#Y&&(this.#Y.disabled=t)}constructor(t,e,i){if(this.#Y=null,this.#V=!1,this.#H=null,this.#W=!1,this.searchTerm="",this.#U=()=>{this.searchTerm=this.#Y.value,this.#O.requestUpdate(),this.#z()},this.#O=t,this.#B=i.placeholder,this.#W=i.disabled??!1,0!==i.debounceDelay){const t=new F(()=>this.#O.isActive?i.onSearch():Promise.resolve(),i.debounceDelay);this.#z=()=>t.debounce()}else this.#z=()=>{this.#O.isActive&&i.onSearch()};new $(t,{context:e,subscribe:!0,callback:t=>this.#q(t)}),t.addController(this)}#q(t){this.#Y=t,this.#O.isActive&&this.#G()}#G(){this.#Q(),this.#Y&&(this.#H=new AbortController,this.#Y.addEventListener("input",this.#U,{signal:this.#H.signal}),this.#Y.value=this.searchTerm,this.#Y.placeholder=this.#B,this.#Y.disabled=this.#W)}#Q(){this.#H?.abort(),this.#H=null}#U;clearSearch(){this.searchTerm="",this.#Y&&(this.#Y.value=""),this.#O.requestUpdate()}hostUpdated(){const t=this.#O.isActive;t&&!this.#V?this.#G():!t&&this.#V&&this.#Q(),this.#V=t}hostDisconnected(){this.#Q(),this.#Y=null,this.#V=!1}}let Q=class extends t{#m=!1;get isLoading(){return this.#m}set isLoading(t){this.#m=t}#p=!1;get isActive(){return this.#p}set isActive(t){this.#p=t}#g=null;get apiService(){return this.#g}set apiService(t){this.#g=t}#A="";get path(){return this.#A}set path(t){this.#A=t}#K;get siteSearchTextFieldContext(){return this.#K}set siteSearchTextFieldContext(t){this.#K=t}#X="EmailTemplateLogs";get apiControllerName(){return this.#X}set apiControllerName(t){this.#X=t}#J=[];get items(){return this.#J}set items(t){this.#J=t}#Z=[];get selected(){return this.#Z}set selected(t){this.#Z=t}#tt={uniqueKey:t=>t.Id?.toString()??"",itemMetaData:[{key:"SentDate",friendlyName:"Sent",render:t=>a`<div>
            ${t.SentDate?a`${P(t.SentDate).format("MMM DD, YY")}<br /><span time>${P(t.SentDate).format("h:mm A")}</span>`:"-"}
          </div>`,width:"150px",defaultSort:{direction:"desc",position:1}},{key:"Subject",friendlyName:"Subject",render:t=>a`${t.Subject??"-"}`,width:"200px"},{key:"Recipients",friendlyName:"Recipients",render:t=>a`${this.renderRecipients(t.Recipients??null)}`,csvValue:t=>t.Recipients??"",width:"150px"},{key:"EmailTemplate",friendlyName:"Email template",getSortExpression:()=>"EmailTemplate/Name",render:t=>a`<div>${t.EmailTemplate?.Name}</div>
            ${t.EmailTemplate?.IsExpired?a`<div inactive>Inactive</div>`:""}`,csvValue:t=>t.EmailTemplate?.Name??"",width:"150px"},{key:"Bool1",friendlyName:"Preview",disableSort:!0,render:t=>a`<md-filled-tonal-icon-button @click=${()=>this.viewDialog?.open?.(t?.Id??0)}><md-icon>pageview</md-icon></md-filled-tonal-icon-button>`,omitFromCsv:!0,width:"60px"}]};get tableMetaData(){return this.#tt}set tableMetaData(t){this.#tt=t}#et=0;get resultTotal(){return this.#et}set resultTotal(t){this.#et=t}#u;get filterController(){return this.#u}set filterController(t){this.#u=t}#it;get dataTable(){return this.#it}set dataTable(t){this.#it=t}#st;get filterDialog(){return this.#st}set filterDialog(t){this.#st=t}#at;get pageControl(){return this.#at}set pageControl(t){this.#at=t}#lt;get mainContentContainer(){return this.#lt}set mainContentContainer(t){this.#lt=t}#nt;get viewDialog(){return this.#nt}set viewDialog(t){this.#nt=t}#rt;get viewEmailTemplateInfoDialog(){return this.#rt}set viewEmailTemplateInfoDialog(t){this.#rt=t}constructor(){super(),this.filterController=new q(""),this.filterController.setFilter("dateRange",()=>""),this.filterController.setFilter("startDate",()=>""),this.filterController.setFilter("endDate",()=>""),this.filterController.setFilter("template",t=>`EmailTemplateId eq ${t}`),this.filterController.subscribeToFilterChange(async()=>{this.isActive&&(this.pageControl&&(this.pageControl.page=0),this.#ot())}),this.filterController.loadFromQueryString()}async updated(t){this.isActive&&(t.has("isActive")||t.has("apiControllerName"))&&(await(this.mainContentContainer?.updateComplete),this.#ot()),t.has("path")&&(this.filterController.path=this.path)}firstUpdated(){if(this.searchController=new G(this,this.siteSearchTextFieldContext,{placeholder:"Search by subject or recipient",onSearch:()=>(this.pageControl&&(this.pageControl.page=0),this.#ot())}),T){const t=this.tableMetaData.itemMetaData.length-1;this.tableMetaData.itemMetaData.splice(t,0,{key:"IsTestMessage",friendlyName:"Test",getSortExpression:()=>"IsTestMessage",render:t=>a`<div>${t.IsTestMessage?"Yes":"No"}</div>`,csvValue:t=>t.IsTestMessage?"Yes":"No",width:"50px"})}}async#ot(){const{items:t,odataCount:e}=await this.#ht(this.searchController?.searchTerm??null);this.items=t,this.resultTotal=e}renderRecipients(t,e=1){const i=t?.split(",").filter(t=>!!t).map(t=>t.trim()).reverse()??[];return i?.length>e?a`${b(i.slice(0,e),t=>t,t=>a`${t} <br />`)} <span more> ${i.length-e} more... </span>`:b(i,t=>t,t=>a`${t} <br />`)}async#ht(t){let e=[];const i=M(t||""),s=i.map(t=>`(contains(Subject, '${t}') or contains(Recipients, '${t}'))`).join(" and ");i.length>0&&e.push(`${s}`);const a=this.filterController.getValue("dateRange"),l="custom"===a?this.filterController.getValue("startDate"):A.get(a)?.startDate(),n="custom"===a?this.filterController.getValue("endDate"):A.get(a)?.endDate();l&&e.push(`SentDate ge ${P(l).format("YYYY-MM-DD")}`),n&&e.push(`SentDate le ${P(n).format("YYYY-MM-DD")}`),e=[...e,...this.filterController.getActiveFilterOdata()];const r=["select=Id,Recipients,SentDate,Subject"+(T?",IsTestMessage":""),"expand=EmailTemplate(select=Id,Name,IsExpired)",`top=${this.pageControl?.take}`,"skip="+(this.pageControl?.take??0)*(this.pageControl?.page??0),"count=true"],o=this.dataTable.sort.map(t=>`${this.tableMetaData.itemMetaData.find(e=>e.key===t.key)?.getSortExpression?.()??t.key} ${t.direction}`).join(", ");o&&r.push(`orderby=${o}`),T||e.push("IsTestMessage eq false"),e.length>0&&r.push(`filter=${e.join(" and ")}`);try{if(!this.apiService)throw new Error("No api service provided");const t=this.apiService?.getAsync(`${this.apiControllerName}/?${r.join("&")}`);this.trackLoadingPromise(t),this.dataTable.trackLoadingPromise(t),this.dispatchEvent(new S(t));const e=await t;return{items:e.toList(),odataCount:e.odataCount}}catch(t){this.dispatchEvent(new h(t,{autoHide:7500}))}return{items:[],odataCount:0}}static{this.styles=[I,k,D,e`
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
    `]}render(){return a`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Email history">
            <md-icon-button slot="trailing" @click=${async()=>this.filterDialog.open()}>
              <md-icon>filter_list</md-icon>
            </md-icon-button>

            <md-icon-button slot="trailing" @click=${async()=>this.#ot()}>
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
            @sort-changed=${()=>{this.pageControl&&(this.pageControl.page=0),this.#ot()}}
            local-storage-key="email-history-list-preferences"
            .supplementalItemStyles=${e`
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
              slot="leading"
              ?disabled=${this.isLoading}
              .count=${this.resultTotal}
              .pageSizes=${[25,50,100,200]}
              local-storage-key="email-history-list-user-take"
              @action=${()=>this.#ot()}
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
    `}};l([p("trackLoadingPromise"),g()],Q.prototype,"isLoading",null),l([n({type:Boolean})],Q.prototype,"isActive",null),l([n({type:Object})],Q.prototype,"apiService",null),l([n({type:String})],Q.prototype,"path",null),l([n({type:Object})],Q.prototype,"siteSearchTextFieldContext",null),l([n({type:String})],Q.prototype,"apiControllerName",null),l([g()],Q.prototype,"items",null),l([g()],Q.prototype,"selected",null),l([g()],Q.prototype,"tableMetaData",null),l([g()],Q.prototype,"resultTotal",null),l([g()],Q.prototype,"filterController",null),l([u("titanium-data-table-core")],Q.prototype,"dataTable",null),l([u("leavitt-email-history-viewer-filled-filter-dialog")],Q.prototype,"filterDialog",null),l([u("titanium-page-control")],Q.prototype,"pageControl",null),l([u("leavitt-app-main-content-container")],Q.prototype,"mainContentContainer",null),l([u("leavitt-view-sent-email-dialog")],Q.prototype,"viewDialog",null),l([u("leavitt-view-email-template-info-dialog")],Q.prototype,"viewEmailTemplateInfoDialog",null),Q=l([o("leavitt-email-history-viewer-filled")],Q);let K=class extends(C(t)){constructor(){super(...arguments),this.isActive=!0,this.#ct=new E(this)}#dt;get viewer(){return this.#dt}set viewer(t){this.#dt=t}#ct;get searchController(){return this.viewer?.searchController??null}connectedCallback(){super.connectedCallback(),O.addHeader("X-LGAppName","EducationAdminV2")}disconnectedCallback(){super.disconnectedCallback(),"EducationAdminV2"===O.headers["X-LGAppName"]&&O.addHeader("X-LGAppName","Testing")}static{this.styles=[N,e`
      div[row] {
        display: grid;
        gap: 12px;
      }
    `]}render(){return a`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Leavitt email history viewer" level1Href="/leavitt-email-history-viewer" sticky-top>
          </leavitt-app-navigation-header>

          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Leavitt Email History Viewer Filled" className="LeavittEmailHistoryViewerFilled" requires-auth></story-header>

            ${this.#ct.identity?a`
                  <div>
                    <div row>
                      <leavitt-email-history-viewer-filled
                        isActive
                        .siteSearchTextFieldContext=${L}
                        .apiService=${O}
                        .path=${"/leavitt-email-history-viewer"}
                      ></leavitt-email-history-viewer-filled>
                    </div>
                  </div>
                `:i}

            <api-docs src="./custom-elements.json" selected="leavitt-email-history-viewer-filled"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `}};l([u("leavitt-email-history-viewer-filled")],K.prototype,"viewer",null),K=l([o("leavitt-email-history-viewer-demo")],K);export{K as LeavittEmailHistoryViewerDemo};
