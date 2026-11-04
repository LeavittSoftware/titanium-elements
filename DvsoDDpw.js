import{T as e,i as t,b as s,c as i,K as r,y as n,_ as o,d as l,r as a,e as c,n as h,t as d}from"./B9KYe1CG.js";import"./DJDEYoX8.js";function u(e){const t=e.effect?.getComputedTiming().endTime;return"number"==typeof t&&Number.isFinite(t)}function m(e){const t=[];for(const s of function*(e){let t=e;for(;t;)t instanceof Element&&(yield t),t=t instanceof Element&&t.assignedSlot?t.assignedSlot:t.parentNode?t.parentNode:t instanceof ShadowRoot?t.host:null}(e))for(const e of s.getAnimations())"running"===e.playState&&u(e)&&t.push(e);return t}async function p(e,t=1e3){const s=m(e);if(!s.length)return;let i=0;await Promise.race([Promise.all(s.map(e=>e.finished.catch(()=>{}))),new Promise(e=>i=window.setTimeout(e,t))]),clearTimeout(i)}function g(e){return e.shadowRoot?.querySelector(".menu")??null}function f(e){const t=g(e);return!t||"none"===getComputedStyle(t).display}function x(e){return new Promise(t=>{const s=()=>{clearTimeout(i),e.removeEventListener("closed",s),t()},i=window.setTimeout(s,1e3);e.addEventListener("closed",s)})}const y=new WeakMap;function v(e){if(!e)return Promise.resolve();const t=y.get(e);if(t)return t;const s=async function(e){await p(e);const t=g(e);!e.open&&t?.classList.contains("animating")&&await x(e);if(e.open&&f(e)&&(await e.updateComplete,await new Promise(e=>requestAnimationFrame(e)),e.open&&f(e))){const t=e.quick,s=x(e);e.quick=!0,e.close(),await s,e.quick=t}e.show()}(e).finally(()=>y.delete(e));return y.set(e,s),s}let _=class extends(e(t)){constructor(){super(...arguments),this.#e=!1,this.#t="",this.#s=[],this.#i=[],this.#r="Single select",this.#n="Search for a entity",this.#o=null,this.#l=!1,this.#a=!1,this.#c="",this.#h=!1,this.#d=!1,this.#u="",this.#m=!1,this.#p="",this.#g="",this.#f=!1,this.#x=!1,this.#y=!1,this.#v="",this.#_="",this.#T="Name",this.positioning="popover",this.#b=!1,this.#$=null,this.#w=0,this.#S=!1,this.#k=!1,this.#I=!1,this.#O=!1}#e;get isLoading(){return this.#e}set isLoading(e){this.#e=e}#t;get searchTerm(){return this.#t}set searchTerm(e){this.#t=e}#s;get suggestions(){return this.#s}set suggestions(e){this.#s=e}#i;get defaultSuggestions(){return this.#i}set defaultSuggestions(e){this.#i=e}#L;get menu(){return this.#L}set menu(e){this.#L=e}#r;get label(){return this.#r}set label(e){this.#r=e}#n;get placeholder(){return this.#n}set placeholder(e){this.#n=e}#o;get selected(){return this.#o}set selected(e){this.#o=e}#l;get disabled(){return this.#l}set disabled(e){this.#l=e}#a;get noAsterisk(){return this.#a}set noAsterisk(e){this.#a=e}#c;get autocomplete(){return this.#c}set autocomplete(e){this.#c=e}#h;get spellcheck(){return this.#h}set spellcheck(e){this.#h=e}#d;get error(){return this.#d}set error(e){this.#d=e}#u;get errorText(){return this.#u}set errorText(e){this.#u=e}#m;get required(){return this.#m}set required(e){this.#m=e}#p;get prefixText(){return this.#p}set prefixText(e){this.#p=e}#g;get suffixText(){return this.#g}set suffixText(e){this.#g=e}#f;get hasLeadingIcon(){return this.#f}set hasLeadingIcon(e){this.#f=e}#x;get hasTrailingIcon(){return this.#x}set hasTrailingIcon(e){this.#x=e}#y;get disableMenuOpenOnFocus(){return this.#y}set disableMenuOpenOnFocus(e){this.#y=e}#v;get supportingText(){return this.#v}set supportingText(e){this.#v=e}#_;get textDirection(){return this.#_}set textDirection(e){this.#_=e}#T;get pathToSelectedText(){return this.#T}set pathToSelectedText(e){this.#T=e}#b;get matchInputWidth(){return this.#b}set matchInputWidth(e){this.#b=e}#W;get menuWidth(){return this.#W}set menuWidth(e){this.#W=e}#$;#w;get count(){return this.#w}set count(e){this.#w=e}#S;get awaitingResults(){return this.#S}set awaitingResults(e){this.#S=e}#k;get menuOpen(){return this.#k}set menuOpen(e){this.#k=e}#I;get large(){return this.#I}set large(e){this.#I=e}#O;get shaped(){return this.#O}set shaped(e){this.#O=e}getTextField(){return this.shadowRoot?.querySelector("md-filled-text-field")}async firstUpdated(){const e=this.getTextField();if(e&&this.required){const t=e?.checkValidity;e.checkValidity=()=>!!this.selected&&t.call(e)}}#B(){this.#$?.disconnect(),this.#$=new ResizeObserver(e=>{for(const t of e)this.menuWidth=t.contentRect.width}),this.#$.observe(this)}#R(){this.#$?.disconnect(),this.#$=null,this.menuWidth=void 0}connectedCallback(){super.connectedCallback(),this.matchInputWidth&&this.#B()}disconnectedCallback(){super.disconnectedCallback(),this.#R()}update(e){e.has("positioning")&&"popover"===this.positioning&&!this.showPopover&&(this.positioning="fixed"),e.has("matchInputWidth")&&(this.matchInputWidth?this.#B():this.#R()),super.update(e);const t=e;this.menuOpen&&(t.has("suggestions")||t.has("awaitingResults"))&&this.menu?.reposition()}setCustomValidity(e){this.getTextField()?.setCustomValidity(e)}async reset(){this.softReset(),this.selected=null;const e=this.getTextField();e&&(e.error=!1,e.errorText="",e.reset())}softReset(){this.searchTerm="",this.suggestions=[],this.awaitingResults=!1}async select(){this.getTextField()?.select()}async focus(){this.getTextField()?.focus()}checkValidity(){return this.getTextField()?.checkValidity()&&this.customCheckValidity()}get hasError(){const e=this.getTextField();return this.error||!!e?.hasError}reportValidity(){return this.getTextField()?.reportValidity()&&this.customReportValidity()}customCheckValidity(){return this.errorText="Please fill out this field",!(!this.selected&&this.getTextField()?.value)&&(!this.required&&!this.selected||!!this.selected)}customReportValidity(){return this.customCheckValidity()?(this.error=!1,this.errorText=""):this.error=!0,!this.error}async setSelected(e){const t=this.selected;this.selected=e,this.selected&&(this.softReset(),setTimeout(()=>{this.reportValidity()},0)),t?.Id!==this.selected?.Id&&this.dispatchEvent(new Event("selected"))}onInputChanged(e){console.log(e)}async showSuggestions(e,t){this.selected&&!this.searchTerm||(this.suggestions=e,this.count=t,this.awaitingResults=!1,await this.updateComplete,await v(this.menu))}async#z(e){e||this.defaultSuggestions.length||this.menu.close(),this.setSelected(null),e||(this.suggestions=this.defaultSuggestions,this.count=this.defaultSuggestions.length),this.awaitingResults=!!e,this.searchTerm=e,this.hasError&&(await this.updateComplete,this.checkValidity()&&this.reportValidity()),await this.updateComplete,this.onInputChanged(e)}static{this.styles=[s`
      :host {
        display: block;
        position: relative;

        --md-filled-text-field-container-shape: 16px;
        --md-filled-field-container-shape: 16px;
        --md-menu-container-shape: 16px;

        --md-filled-text-field-active-indicator-height: 0;
        --md-filled-text-field-error-active-indicator-height: 0;
        --md-filled-text-field-hover-active-indicator-height: 0;
        --md-filled-text-field-focus-active-indicator-height: 0;
        --md-filled-text-field-disabled-active-indicator-height: 0;

        --md-filled-text-field-input-text-size: 1.125rem;
        --md-filled-text-field-input-text-line-height: 1.75rem;
        --md-filled-text-field-label-text-size: 1.125rem;
        --md-filled-text-field-top-space: 20px;
        --md-filled-text-field-bottom-space: 20px;
        --md-filled-text-field-leading-icon-size: 36px;
        --md-icon-size: 26px;

        --md-filled-text-field-with-leading-icon-leading-space: 18px;
        --md-filled-text-field-with-trailing-icon-trailing-space: 20px;
      }

      md-filled-text-field {
        width: 100%;
      }

      md-circular-progress {
        --md-circular-progress-size: 40px;
        margin-right: 6px;
      }

      md-menu {
        max-height: 500px;
      }

      md-menu-item {
        min-width: 300px;
      }

      :host([large]) {
        --md-filled-text-field-container-shape: 28px;
      }

      :host([shaped][menu-open]) {
        --md-filled-text-field-container-shape-start-start: 28px;
        --md-filled-text-field-container-shape-start-end: 28px;
        --md-filled-text-field-container-shape-end-end: 0;
        --md-filled-text-field-container-shape-end-start: 0;

        --md-filled-text-field-container-color: var(--md-sys-color-surface-container);
        --md-menu-container-shape: 0 0 28px 28px;
      }

      :host([shaped][menu-open]) md-menu {
        --md-menu-container-color: var(--md-sys-color-inverse-surface);
        color: var(--md-sys-color-inverse-on-surface);

        --md-menu-item-supporting-text-color: var(--md-sys-color-inverse-on-surface);
        --md-menu-item-trailing-supporting-text-color: var(--md-sys-color-inverse-on-surface);
        --md-menu-item-label-text-color: var(--md-sys-color-inverse-on-surface);
        --md-menu-item-leading-icon-color: var(--md-sys-color-inverse-on-surface);
        --md-menu-item-trailing-icon-color: var(--md-sys-color-inverse-on-surface);
        --md-menu-item-hover-state-layer-color: var(--md-sys-color-surface);
      }

      md-menu-item[inert] {
        --md-menu-item-bottom-space: 4px;
        --md-menu-item-top-space: 4px;
        --md-menu-item-two-line-container-height: 50px;
        --md-menu-item-supporting-text-size: 12px;
        background-color: var(--md-sys-color-surface-container-high);
        color: var(--md-sys-color-on-surface);
        --md-menu-item-label-text-color: var(--md-sys-color-on-surface);
        --md-menu-item-supporting-text-color: var(--md-sys-color-on-surface);
        --md-menu-item-trailing-supporting-text-color: var(--md-sys-color-on-surface);
      }

      :host([shaped]) md-menu-item[inert] {
        background-color: color-mix(in srgb, var(--md-sys-color-inverse-on-surface) 16%, var(--md-sys-color-inverse-surface));
        color: var(--md-sys-color-inverse-on-surface);
        --md-menu-item-label-text-color: var(--md-sys-color-inverse-on-surface);
        --md-menu-item-supporting-text-color: var(--md-sys-color-inverse-on-surface);
        --md-menu-item-trailing-supporting-text-color: var(--md-sys-color-inverse-on-surface);
      }

      :host([shaped][menu-open]) md-filled-text-field {
        --md-filled-text-field-container-color: var(--md-sys-color-inverse-surface);
        --md-filled-text-field-input-text-color: var(--md-sys-color-inverse-on-surface);
        --md-filled-text-field-hover-input-text-color: var(--md-sys-color-inverse-on-surface);
        --md-filled-text-field-focus-input-text-color: var(--md-sys-color-inverse-on-surface);
        --md-filled-text-field-leading-icon-color: var(--md-sys-color-inverse-on-surface);
        --md-filled-text-field-focus-leading-icon-color: var(--md-sys-color-inverse-on-surface);
        --md-filled-text-field-hover-leading-icon-color: var(--md-sys-color-inverse-on-surface);
        border-radius: 28px 28px 0 0;

        --md-filled-text-field-input-text-placeholder-color: var(--md-sys-color-inverse-on-surface);
      }

      img[leading] {
        width: 24px;
        height: 24px;
      }

      img[company-mark] {
        width: 40px;
        height: 40px;
      }

      [summary] {
        padding: 0px 16px 4px 16px;
        font-family: Roboto, Arial, sans-serif;
        line-height: 18px;
        font-size: 13px;
        color: var(--md-sys-color-on-surface);
      }

      :host([shaped]) [summary] {
        color: var(--md-sys-color-inverse-on-surface);
      }

      [hidden] {
        display: none !important;
      }
    `]}renderSuggestion(e){return i`<md-menu-item .item=${e} ?selected=${this.selected?.Id===e.Id}>
      <slot name="trailing-icon" slot="trailing-icon"></slot>
      <span slot="headline">${e.Id}</span>
    </md-menu-item>`}renderSelectedLeadingInputSlot(e){}#A(){return!(this.selected||this.disableMenuOpenOnFocus||!this.searchTerm&&!this.suggestions.length)}async#C(){this.selected?this.select():(!this.searchTerm&&this.defaultSuggestions&&(this.suggestions=this.defaultSuggestions),this.#A()&&(await new Promise(e=>setTimeout(e)),!m(this).length&&this.matches(":focus-within")&&v(this.menu)))}#P(e){e.composedPath().some(e=>e instanceof HTMLElement&&"trailing-icon"===e.slot)||!this.menu?.open&&this.#A()&&v(this.menu)}#E(){return i`<div slot="trailing-icon">
      <md-circular-progress ?indeterminate=${this.isLoading} ?hidden=${!this.isLoading}></md-circular-progress>
      <md-icon-button
        ?hidden=${this.isLoading||!this.selected}
        ?disabled=${this.disabled}
        title="Clear selection"
        @click=${async e=>{e.preventDefault(),this.setSelected(null),this.focus()}}
      >
        <md-icon>close</md-icon>
      </md-icon-button>
      ${this.renderTrailingInputSlot()}
    </div>`}renderTrailingInputSlot(){return i``}renderLeadingInputSlot(){return i`<slot name="leading-icon" slot="leading-icon"><md-icon>search</md-icon></slot>`}renderTrailingSlot(){return i``}renderTrailingMenuSlot(){return i``}render(){return i`
      <md-filled-text-field
        id="menu-anchor"
        aria-haspopup="true"
        aria-controls="menu"
        .disabled=${this.disabled}
        ?error=${this.error}
        .errorText=${this.errorText}
        .label=${this.label}
        .required=${this.required}
        .prefixText=${this.prefixText}
        .suffixText=${this.suffixText}
        .hasLeadingIcon=${this.hasLeadingIcon}
        .hasTrailingIcon=${this.hasTrailingIcon}
        .supportingText=${this.supportingText}
        .textDirection=${this.textDirection}
        .placeholder=${this.placeholder}
        .autocomplete=${this.autocomplete}
        .spellcheck=${this.spellcheck}
        .noAsterisk=${this.noAsterisk}
        .value=${this.selected?.[this.pathToSelectedText]||this.searchTerm||""}
        default-focus="0"
        @keydown=${e=>{this.suggestions.length>0&&("Enter"==e.key||"ArrowDown"==e.key||"ArrowUp"==e.key)&&(this.menu.open||v(this.menu),e.stopPropagation(),this.menu?.activateNextItem()),"Tab"!=e.key&&"Escape"!=e.key||this.menu?.open&&this.menu.close()}}
        @input=${async e=>this.#z(e.target.value)}
        @focus=${()=>this.#C()}
        @click=${e=>this.#P(e)}
      >
        ${this.selected?this.renderSelectedLeadingInputSlot(this.selected):this.renderLeadingInputSlot()} ${this.#E()}
      </md-filled-text-field>
      <md-menu
        part="menu"
        suggestions
        style=${this.matchInputWidth&&this.menuWidth?`min-width: ${this.menuWidth}px; max-width: ${this.menuWidth}px`:""}
        @opening=${e=>{r(this,e),this.menuOpen=!0}}
        @opened=${e=>r(this,e)}
        @closing=${e=>{r(this,e),this.menuOpen=!1}}
        @closed=${e=>r(this,e)}
        .positioning=${this.positioning}
        id="menu"
        anchor="menu-anchor"
        anchor-corner="end-start"
        default-focus="list-root"
        skip-restore-focus
        @close-menu=${e=>{const t=e.detail.itemPath?.[0]??null;this.setSelected(t?.item)}}
      >
        ${this.searchTerm?this.awaitingResults||this.isLoading?i`<div summary>Searching for '${this.searchTerm}'…</div>`:i`<div summary>Showing ${this.suggestions.length} of ${this.count} result${1===this.count?"":"s"} for '${this.searchTerm}'</div>`:""}
        ${n(this.suggestions,e=>e?.Id,e=>this.renderSuggestion(e))}
        ${this.renderTrailingMenuSlot()}
      </md-menu>
      ${this.renderTrailingSlot()}
    `}};o([l("trackLoadingPromise"),a()],_.prototype,"isLoading",null),o([a()],_.prototype,"searchTerm",null),o([a()],_.prototype,"suggestions",null),o([a()],_.prototype,"defaultSuggestions",null),o([c("md-menu[suggestions]")],_.prototype,"menu",null),o([h({type:String})],_.prototype,"label",null),o([h({type:String})],_.prototype,"placeholder",null),o([h({type:Object})],_.prototype,"selected",null),o([h({type:Boolean})],_.prototype,"disabled",null),o([h({type:Boolean,attribute:"no-asterisk"})],_.prototype,"noAsterisk",null),o([h({reflect:!0,type:String})],_.prototype,"autocomplete",null),o([h({reflect:!0,type:Boolean})],_.prototype,"spellcheck",null),o([h({type:Boolean})],_.prototype,"error",null),o([h({type:String})],_.prototype,"errorText",null),o([h({type:Boolean})],_.prototype,"required",null),o([h({type:String})],_.prototype,"prefixText",null),o([h({type:String})],_.prototype,"suffixText",null),o([h({type:Boolean})],_.prototype,"hasLeadingIcon",null),o([h({type:Boolean})],_.prototype,"hasTrailingIcon",null),o([h({type:Boolean,attribute:"disable-menu-open-on-focus"})],_.prototype,"disableMenuOpenOnFocus",null),o([h({type:String})],_.prototype,"supportingText",null),o([h({type:String})],_.prototype,"textDirection",null),o([h({type:String})],_.prototype,"pathToSelectedText",null),o([h()],_.prototype,"positioning",void 0),o([h({type:Boolean,attribute:"match-input-width"})],_.prototype,"matchInputWidth",null),o([a()],_.prototype,"menuWidth",null),o([a()],_.prototype,"count",null),o([a()],_.prototype,"awaitingResults",null),o([h({type:Boolean,attribute:"menu-open",reflect:!0})],_.prototype,"menuOpen",null),o([h({type:Boolean,reflect:!0,attribute:"large"})],_.prototype,"large",null),o([h({type:Boolean,reflect:!0,attribute:"shaped"})],_.prototype,"shaped",null),_=o([d("titanium-single-select-base")],_);export{_ as T,v as s,p as w};
