import{_ as t,n as e,e as a,r,F as i,c as o,f as s,O as n,Q as l,i as c,b as d,t as h,L as p,A as m,R as v,d as b,P as u,S as y,h as f,p as g,U as x}from"./BkdWKSMI.js";import{S as _}from"./D21mo-gf.js";import"./z-LiiMbg.js";import"./BXTEaQeD.js";import"./BkQUVoFh.js";import"./zNz4s-SF.js";import{n as w}from"./CIHPGdiZ.js";const k=Symbol("isFocusable"),I=Symbol("privateIsFocusable"),T=Symbol("externalTabIndex"),A=Symbol("isUpdatingTabIndex"),$=Symbol("updateTabIndex");const z=Symbol("animateIndicator"),S=function(a){var r,i,o;class s extends a{constructor(){super(...arguments),this[r]=!0,this[i]=null,this[o]=!1}get[k](){return this[I]}set[k](t){this[k]!==t&&(this[I]=t,this[$]())}connectedCallback(){super.connectedCallback(),this[$]()}attributeChangedCallback(t,e,a){if("tabindex"===t){if(this.requestUpdate("tabIndex",Number(e??-1)),!this[A])return this.hasAttribute("tabindex")?void(this[T]=this.tabIndex):(this[T]=null,void this[$]())}else super.attributeChangedCallback(t,e,a)}[(r=I,i=T,o=A,$)](){const t=this[k]?0:-1,e=this[T]??t;this[A]=!0,this.tabIndex=e,this[A]=!1}}return t([e({noAccessor:!0})],s.prototype,"tabIndex",void 0),s}(c);class C extends S{get selected(){return this.active}set selected(t){this.active=t}constructor(){super(),this.isTab=!0,this.active=!1,this.hasIcon=!1,this.iconOnly=!1,this.fullWidthIndicator=!1,this.internals=this.attachInternals(),this.internals.role="tab",this.addEventListener("keydown",this.handleKeydown.bind(this))}render(){const t=o`<div class="indicator"></div>`;return o`<div
      class="button"
      role="presentation"
      @click=${this.handleContentClick}>
      <md-focus-ring part="focus-ring" inward .control=${this}></md-focus-ring>
      <md-elevation part="elevation"></md-elevation>
      <md-ripple .control=${this}></md-ripple>
      <div
        class="content ${n(this.getContentClasses())}"
        role="presentation">
        <slot name="icon" @slotchange=${this.handleIconSlotChange}></slot>
        <slot @slotchange=${this.handleSlotChange}></slot>
        ${this.fullWidthIndicator?s:t}
      </div>
      ${this.fullWidthIndicator?t:s}
    </div>`}getContentClasses(){return{"has-icon":this.hasIcon,"has-label":!this.iconOnly}}updated(){this.internals.ariaSelected=String(this.active)}async handleKeydown(t){await 0,t.defaultPrevented||"Enter"!==t.key&&" "!==t.key||(t.preventDefault(),this.click())}handleContentClick(t){t.stopPropagation(),this.click()}[z](t){if(!this.indicator)return;this.indicator.getAnimations().forEach(t=>{t.cancel()});const e=this.getKeyframes(t);null!==e&&this.indicator.animate(e,{duration:250,easing:l.EMPHASIZED})}getKeyframes(t){const e=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(!this.active)return e?[{opacity:1},{transform:"none"}]:null;const a={},r=t.indicator?.getBoundingClientRect()??{},i=r.left,o=r.width,s=this.indicator.getBoundingClientRect(),n=s.left,l=o/s.width;return e||void 0===i||void 0===n||isNaN(l)?a.opacity=0:a.transform=`translateX(${(i-n).toFixed(4)}px) scaleX(${l.toFixed(4)})`,[a,{transform:"none"}]}handleSlotChange(){this.iconOnly=!1;for(const t of this.assignedDefaultNodes){const e=t.nodeType===Node.TEXT_NODE&&!!t.wholeText.match(/\S/);if(t.nodeType===Node.ELEMENT_NODE||e)return}this.iconOnly=!0}handleIconSlotChange(){this.hasIcon=this.assignedIcons.length>0}}t([e({type:Boolean,reflect:!0,attribute:"md-tab"})],C.prototype,"isTab",void 0),t([e({type:Boolean,reflect:!0})],C.prototype,"active",void 0),t([e({type:Boolean})],C.prototype,"selected",null),t([e({type:Boolean,attribute:"has-icon"})],C.prototype,"hasIcon",void 0),t([e({type:Boolean,attribute:"icon-only"})],C.prototype,"iconOnly",void 0),t([a(".indicator")],C.prototype,"indicator",void 0),t([r()],C.prototype,"fullWidthIndicator",void 0),t([w({flatten:!0})],C.prototype,"assignedDefaultNodes",void 0),t([i({slot:"icon",flatten:!0})],C.prototype,"assignedIcons",void 0);class F extends C{constructor(){super(...arguments),this.inlineIcon=!1}getContentClasses(){return{...super.getContentClasses(),stacked:!this.inlineIcon}}}t([e({type:Boolean,attribute:"inline-icon"})],F.prototype,"inlineIcon",void 0);const D=d`:host{--_active-indicator-color: var(--md-primary-tab-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-height: var(--md-primary-tab-active-indicator-height, 3px);--_active-indicator-shape: var(--md-primary-tab-active-indicator-shape, 3px 3px 0px 0px);--_active-hover-state-layer-color: var(--md-primary-tab-active-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_active-hover-state-layer-opacity: var(--md-primary-tab-active-hover-state-layer-opacity, 0.08);--_active-pressed-state-layer-color: var(--md-primary-tab-active-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_active-pressed-state-layer-opacity: var(--md-primary-tab-active-pressed-state-layer-opacity, 0.12);--_container-color: var(--md-primary-tab-container-color, var(--md-sys-color-surface, #fef7ff));--_container-elevation: var(--md-primary-tab-container-elevation, 0);--_container-height: var(--md-primary-tab-container-height, 48px);--_with-icon-and-label-text-container-height: var(--md-primary-tab-with-icon-and-label-text-container-height, 64px);--_hover-state-layer-color: var(--md-primary-tab-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-primary-tab-hover-state-layer-opacity, 0.08);--_pressed-state-layer-color: var(--md-primary-tab-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-primary-tab-pressed-state-layer-opacity, 0.12);--_active-focus-icon-color: var(--md-primary-tab-active-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_active-hover-icon-color: var(--md-primary-tab-active-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_active-icon-color: var(--md-primary-tab-active-icon-color, var(--md-sys-color-primary, #6750a4));--_active-pressed-icon-color: var(--md-primary-tab-active-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-primary-tab-icon-size, 24px);--_focus-icon-color: var(--md-primary-tab-focus-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-icon-color: var(--md-primary-tab-hover-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_icon-color: var(--md-primary-tab-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-primary-tab-pressed-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_label-text-font: var(--md-primary-tab-label-text-font, var(--md-sys-typescale-title-small-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-primary-tab-label-text-line-height, var(--md-sys-typescale-title-small-line-height, 1.25rem));--_label-text-size: var(--md-primary-tab-label-text-size, var(--md-sys-typescale-title-small-size, 0.875rem));--_label-text-weight: var(--md-primary-tab-label-text-weight, var(--md-sys-typescale-title-small-weight, var(--md-ref-typeface-weight-medium, 500)));--_active-focus-label-text-color: var(--md-primary-tab-active-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_active-hover-label-text-color: var(--md-primary-tab-active-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_active-label-text-color: var(--md-primary-tab-active-label-text-color, var(--md-sys-color-primary, #6750a4));--_active-pressed-label-text-color: var(--md-primary-tab-active-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-label-text-color: var(--md-primary-tab-focus-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-primary-tab-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_label-text-color: var(--md-primary-tab-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-label-text-color: var(--md-primary-tab-pressed-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_container-shape-start-start: var(--md-primary-tab-container-shape-start-start, var(--md-primary-tab-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-start-end: var(--md-primary-tab-container-shape-start-end, var(--md-primary-tab-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-end-end: var(--md-primary-tab-container-shape-end-end, var(--md-primary-tab-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-end-start: var(--md-primary-tab-container-shape-end-start, var(--md-primary-tab-container-shape, var(--md-sys-shape-corner-none, 0px)))}.content.stacked{flex-direction:column;gap:2px}.content.stacked.has-icon.has-label{height:var(--_with-icon-and-label-text-container-height)}
`,N=d`:host{display:inline-flex;align-items:center;justify-content:center;outline:none;padding:0 16px;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:middle;user-select:none;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);color:var(--_label-text-color);z-index:0;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity);--md-elevation-level: var(--_container-elevation)}md-focus-ring{--md-focus-ring-shape: 8px}:host([active]) md-focus-ring{margin-bottom:calc(var(--_active-indicator-height) + 1px)}.button::before{background:var(--_container-color);content:"";inset:0;position:absolute;z-index:-1}.button::before,md-ripple,md-elevation{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start)}.content{position:relative;box-sizing:border-box;display:inline-flex;flex-direction:row;align-items:center;justify-content:center;height:var(--_container-height);gap:8px}.indicator{position:absolute;box-sizing:border-box;z-index:-1;transform-origin:bottom left;background:var(--_active-indicator-color);border-radius:var(--_active-indicator-shape);height:var(--_active-indicator-height);inset:auto 0 0 0;opacity:0}::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;color:var(--_icon-color);font-size:var(--_icon-size);width:var(--_icon-size);height:var(--_icon-size)}:host(:hover){color:var(--_hover-label-text-color);cursor:pointer}:host(:hover) ::slotted([slot=icon]){color:var(--_hover-icon-color)}:host(:focus){color:var(--_focus-label-text-color)}:host(:focus) ::slotted([slot=icon]){color:var(--_focus-icon-color)}:host(:active){color:var(--_pressed-label-text-color)}:host(:active) ::slotted([slot=icon]){color:var(--_pressed-icon-color)}:host([active]) .indicator{opacity:1}:host([active]){color:var(--_active-label-text-color);--md-ripple-hover-color: var(--_active-hover-state-layer-color);--md-ripple-hover-opacity: var(--_active-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_active-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_active-pressed-state-layer-opacity)}:host([active]) ::slotted([slot=icon]){color:var(--_active-icon-color)}:host([active]:hover){color:var(--_active-hover-label-text-color)}:host([active]:hover) ::slotted([slot=icon]){color:var(--_active-hover-icon-color)}:host([active]:focus){color:var(--_active-focus-label-text-color)}:host([active]:focus) ::slotted([slot=icon]){color:var(--_active-focus-icon-color)}:host([active]:active){color:var(--_active-pressed-label-text-color)}:host([active]:active) ::slotted([slot=icon]){color:var(--_active-pressed-icon-color)}:host,::slotted(*){white-space:nowrap}@media(forced-colors: active){.indicator{background:CanvasText}}
`;let P=class extends F{};P.styles=[N,D],P=t([h("md-primary-tab")],P);class j extends c{get activeTab(){return this.tabs.find(t=>t.active)??null}set activeTab(t){t&&this.activateTab(t)}get activeTabIndex(){return this.tabs.findIndex(t=>t.active)}set activeTabIndex(t){const e=()=>{const e=this.tabs[t];e&&this.activateTab(e)};this.slotElement?e():this.updateComplete.then(e)}get focusedTab(){return this.tabs.find(t=>t.matches(":focus-within"))}constructor(){super(),this.autoActivate=!1,this.internals=this.attachInternals(),this.internals.role="tablist",this.addEventListener("keydown",this.handleKeydown.bind(this)),this.addEventListener("keyup",this.handleKeyup.bind(this)),this.addEventListener("focusout",this.handleFocusout.bind(this))}async scrollToTab(t){await this.updateComplete;const{tabs:e}=this;if(t??=this.activeTab,!t||!e.includes(t)||!this.tabsScrollerElement)return;for(const t of this.tabs)await t.updateComplete;const a=t.offsetLeft,r=t.offsetWidth,i=this.scrollLeft,o=a-48,s=a+r-this.offsetWidth+48,n=Math.min(o,Math.max(s,i)),l=this.focusedTab?"auto":"instant";this.tabsScrollerElement.scrollTo({behavior:l,top:0,left:n})}render(){return o`
      <div class="tabs">
        <slot
          @slotchange=${this.handleSlotChange}
          @click=${this.handleTabClick}></slot>
      </div>
      <md-divider part="divider"></md-divider>
    `}async handleTabClick(t){const e=t.target;var a;(await 0,t.defaultPrevented||!((a=e)instanceof HTMLElement&&a.hasAttribute("md-tab"))||e.active)||this.activateTab(e)}activateTab(t){const{tabs:e}=this,a=this.activeTab;if(e.includes(t)&&a!==t){for(const a of e)a.active=a===t;if(a){if(!this.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!0}))){for(const t of e)t.active=t===a;return}t[z](a)}this.updateFocusableTab(t),this.scrollToTab(t)}}updateFocusableTab(t){for(const e of this.tabs)e.tabIndex=e===t?0:-1}async handleKeydown(t){await 0;const e="ArrowLeft"===t.key,a="ArrowRight"===t.key,r="Home"===t.key,i="End"===t.key;if(t.defaultPrevented||!e&&!a&&!r&&!i)return;const{tabs:o}=this;if(o.length<2)return;let s;if(t.preventDefault(),r||i)s=r?0:o.length-1;else{const t="rtl"===getComputedStyle(this).direction?e:a,{focusedTab:r}=this;if(r){const e=this.tabs.indexOf(r);s=t?e+1:e-1,s>=o.length?s=0:s<0&&(s=o.length-1)}else s=t?0:o.length-1}const n=o[s];n.focus(),this.autoActivate?this.activateTab(n):this.updateFocusableTab(n)}handleKeyup(){this.scrollToTab(this.focusedTab??this.activeTab)}handleFocusout(){if(this.matches(":focus-within"))return;const{activeTab:t}=this;t&&this.updateFocusableTab(t)}handleSlotChange(){const t=this.tabs[0];!this.activeTab&&t&&this.activateTab(t),this.scrollToTab(this.activeTab)}}t([i({flatten:!0,selector:"[md-tab]"})],j.prototype,"tabs",void 0),t([e({type:Number,attribute:"active-tab-index"})],j.prototype,"activeTabIndex",null),t([e({type:Boolean,attribute:"auto-activate"})],j.prototype,"autoActivate",void 0),t([a(".tabs")],j.prototype,"tabsScrollerElement",void 0),t([a("slot")],j.prototype,"slotElement",void 0);const E=d`:host{box-sizing:border-box;display:flex;flex-direction:column;overflow:auto;scroll-behavior:smooth;scrollbar-width:none;position:relative}:host([hidden]){display:none}:host::-webkit-scrollbar{display:none}.tabs{align-items:end;display:flex;height:100%;overflow:inherit;scroll-behavior:inherit;scrollbar-width:inherit;justify-content:space-between;width:100%}::slotted(*){flex:1}::slotted([active]){z-index:1}
`;let B=class extends j{};B.styles=[E],B=t([h("md-tabs")],B);let L=class extends(p(c)){#t;get userManager(){return this.#t}set userManager(t){this.#t=t}#e=!1;get isActive(){return this.#e}set isActive(t){this.#e=t}#a=0;get activeIndex(){return this.#a}set activeIndex(t){this.#a=t}#r;get textArea(){return this.#r}set textArea(t){this.#r=t}#i;get imageInput(){return this.#i}set imageInput(t){this.#i=t}async updated(t){t.has("isActive")&&this.isActive&&this.reset()}reset(){this.imageInput?.reset(),this.textArea?.reset()}async#o(){if(!this.textArea.reportValidity()||this.isLoading)return;const t={SiteName:location.hostname,PathName:window.location.pathname+window.location.search,IssueType:"Bug",Description:this.textArea.value,Attachments:(this.imageInput?.getFiles()??[]).map(t=>t.file)};try{const e=new m(this.userManager||new v);e.baseUrl=b?"https://devapi3.leavitt.com/":"https://api3.leavitt.com/",e.addHeader("X-LGAppName","IssueTracking");const a=e.postAsync("Issues/ReportIssue",t,{sendAsFormData:!0});this.dispatchEvent(new u(a)),this.loadWhile(a);if(!(await a).entity)throw new Error("Error submitting problem. Please try again.");this.dispatchEvent(new y("",{overrideTemplate:o`Thank you for bringing this issue to our attention!<br />
              <br />
              Our engineering teams will promptly investigate and address it.`})),this.reset()}catch(t){this.dispatchEvent(new y(t))}}async#s(){if(!this.textArea.reportValidity()||this.isLoading)return;const t={SiteName:location.hostname,PathName:window.location.pathname+window.location.search,IssueType:"Feedback",Description:this.textArea.value,Attachments:[]};try{const e=new m(this.userManager||new v);e.baseUrl=b?"https://devapi3.leavitt.com/":"https://api3.leavitt.com/",e.addHeader("X-LGAppName","IssueTracking");const a=e.postAsync("Issues/ReportIssue",t,{sendAsFormData:!0});this.dispatchEvent(new u(a)),this.loadWhile(a);if(!(await a).entity)throw new Error("Error submitting feedback. Please try again.");this.dispatchEvent(new y("We appreciate your input, and we will promptly conduct a review!")),this.reset()}catch(t){this.dispatchEvent(new y(t))}}static{this.styles=[f,g,d`
      :host {
        display: grid;
        grid-template-columns: minmax(0, 1fr);
        gap: 24px;
      }

      form {
        display: flex;
        flex-direction: column;
        gap: 24px;
        margin: 24px 0;
      }

      titanium-card {
        padding-top: 0;
      }

      md-tabs {
        margin-bottom: 16px;
        --md-primary-tab-container-shape: 12px;
      }

      md-outlined-text-field {
        resize: none;
      }

      [hidden] {
        display: none !important;
      }
    `]}render(){return o`
      <titanium-header header="Report a problem" subHeader="Report bugs and provide feedback for this site" no-nav></titanium-header>

      <titanium-card>
        <md-tabs
          full-width
          @change=${t=>{this.reset(),this.activeIndex=t.target.activeTabIndex}}
        >
          <md-primary-tab
            >Report a problem
            <md-icon slot="icon">person_alert</md-icon>
          </md-primary-tab>
          <md-primary-tab
            >Provide feedback
            <md-icon slot="icon">rate_review</md-icon>
          </md-primary-tab>
        </md-tabs>

        <main>
          ${0===this.activeIndex?o` <form>
                <p full-width>
                  Please be specific and provide screenshots of the issue if possible in your report. Your report goes directly to our engineering teams so it
                  can be addressed as soon as possible.
                </p>
                <md-outlined-text-field type="textarea" problem label="Describe the issue" rows="5" required outlined></md-outlined-text-field>
                <titanium-smart-attachment-input
                  multiple
                  full-width
                  label="Supporting files"
                  noItemsText="No files"
                  addButtonLabel="Add file"
                ></titanium-smart-attachment-input>
              </form>`:o` <form>
                <p full-width>
                  User feedback is a valuable tool that empowers our users to share their thoughts, suggestions, and concerns, helping us improve the overall
                  user experience of our websites and tools. We welcome and appreciate user feedback as it enables us to make informed decisions and enhance our
                  website based on the needs and expectations of our users.
                </p>
                <p full-width>
                  Please be specific and provide as much detail as possible in your feedback. Your feedback goes directly to our development teams so it can be
                  carefully reviewed and planned into the next development cycle.
                </p>
                <md-outlined-text-field type="textarea" feedback label="Feedback" rows="5" required outlined></md-outlined-text-field>
              </form>`}
        </main>
        <span nav card-footer>
          <md-filled-tonal-button @click=${()=>0===this.activeIndex?this.#o():this.#s()} ?disabled=${this.isLoading}
            >Submit</md-filled-tonal-button
          >
        </span>
      </titanium-card>
    `}};t([e({type:Object})],L.prototype,"userManager",null),t([e({type:Boolean})],L.prototype,"isActive",null),t([r()],L.prototype,"activeIndex",null),t([a("md-outlined-text-field")],L.prototype,"textArea",null),t([a("titanium-smart-attachment-input")],L.prototype,"imageInput",null),L=t([h("leavitt-user-feedback")],L);let M=class extends c{#n;get reportAProblemDialog(){return this.#n}set reportAProblemDialog(t){this.#n=t}#l;get provideFeedbackDialog(){return this.#l}set provideFeedbackDialog(t){this.#l=t}static{this.styles=[_]}render(){return o`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Leavitt user feedback" level1Href="/leavitt-user-feedback" sticky-top> </leavitt-app-navigation-header>

          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Leavitt User Feedback" className="LeavittUserFeedback"></story-header>

            <div>
              <h1>Default</h1>
              <p>User feedback components with report problem and provide feedback dialogs</p>
              <item-row>
                <md-filled-tonal-button @click=${()=>this.reportAProblemDialog.show()}>Report a problem</md-filled-tonal-button>
                <md-filled-tonal-button @click=${()=>this.provideFeedbackDialog.show()}>Provide feedback</md-filled-tonal-button>
                <leavitt-user-feedback></leavitt-user-feedback>
              </item-row>
            </div>

            <api-docs src="./custom-elements.json" selected="leavitt-user-feedback"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>

      <report-a-problem-dialog .userManager=${x}></report-a-problem-dialog>
      <provide-feedback-dialog .userManager=${x}></provide-feedback-dialog>
      <titanium-snackbar-stack></titanium-snackbar-stack>
    `}};t([a("report-a-problem-dialog")],M.prototype,"reportAProblemDialog",null),t([a("provide-feedback-dialog")],M.prototype,"provideFeedbackDialog",null),M=t([h("leavitt-user-feedback-demo")],M);export{M as LeavittUserFeedbackDemo};
