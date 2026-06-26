import{T as e,i as t,b as s,c as i,K as r,y as n,_ as o,d as l,r as a,e as h,n as d,t as c}from"./CdKAnjTr.js";import"./Cnadr092.js";let u=class extends(e(t)){constructor(){super(...arguments),this.#e=!1,this.#t="",this.#s=[],this.#i=[],this.#r="Single select",this.#n="Search for a entity",this.#o=null,this.#l=!1,this.#a=!1,this.#h="",this.#d=!1,this.#c=!1,this.#u="",this.#p=!1,this.#m="",this.#g="",this.#f=!1,this.#x=!1,this.#y=!1,this.#_="",this.#v="",this.#$="Name",this.positioning="popover",this.#T=!1,this.#b=null,this.#S=0,this.#I=!1,this.#k=!1,this.#w=!1}#e;get isLoading(){return this.#e}set isLoading(e){this.#e=e}#t;get searchTerm(){return this.#t}set searchTerm(e){this.#t=e}#s;get suggestions(){return this.#s}set suggestions(e){this.#s=e}#i;get defaultSuggestions(){return this.#i}set defaultSuggestions(e){this.#i=e}#O;get menu(){return this.#O}set menu(e){this.#O=e}#r;get label(){return this.#r}set label(e){this.#r=e}#n;get placeholder(){return this.#n}set placeholder(e){this.#n=e}#o;get selected(){return this.#o}set selected(e){this.#o=e}#l;get disabled(){return this.#l}set disabled(e){this.#l=e}#a;get noAsterisk(){return this.#a}set noAsterisk(e){this.#a=e}#h;get autocomplete(){return this.#h}set autocomplete(e){this.#h=e}#d;get spellcheck(){return this.#d}set spellcheck(e){this.#d=e}#c;get error(){return this.#c}set error(e){this.#c=e}#u;get errorText(){return this.#u}set errorText(e){this.#u=e}#p;get required(){return this.#p}set required(e){this.#p=e}#m;get prefixText(){return this.#m}set prefixText(e){this.#m=e}#g;get suffixText(){return this.#g}set suffixText(e){this.#g=e}#f;get hasLeadingIcon(){return this.#f}set hasLeadingIcon(e){this.#f=e}#x;get hasTrailingIcon(){return this.#x}set hasTrailingIcon(e){this.#x=e}#y;get disableMenuOpenOnFocus(){return this.#y}set disableMenuOpenOnFocus(e){this.#y=e}#_;get supportingText(){return this.#_}set supportingText(e){this.#_=e}#v;get textDirection(){return this.#v}set textDirection(e){this.#v=e}#$;get pathToSelectedText(){return this.#$}set pathToSelectedText(e){this.#$=e}#T;get matchInputWidth(){return this.#T}set matchInputWidth(e){this.#T=e}#B;get menuWidth(){return this.#B}set menuWidth(e){this.#B=e}#b;#S;get count(){return this.#S}set count(e){this.#S=e}#I;get menuOpen(){return this.#I}set menuOpen(e){this.#I=e}#k;get large(){return this.#k}set large(e){this.#k=e}#w;get shaped(){return this.#w}set shaped(e){this.#w=e}getTextField(){return this.shadowRoot?.querySelector("md-filled-text-field")}async firstUpdated(){const e=this.getTextField();if(e&&this.required){const t=e?.checkValidity;e.checkValidity=()=>!!this.selected&&t.call(e)}}#L(){this.#b?.disconnect(),this.#b=new ResizeObserver(e=>{for(const t of e)this.menuWidth=t.contentRect.width}),this.#b.observe(this)}#W(){this.#b?.disconnect(),this.#b=null,this.menuWidth=void 0}connectedCallback(){super.connectedCallback(),this.matchInputWidth&&this.#L()}disconnectedCallback(){super.disconnectedCallback(),this.#W()}update(e){e.has("positioning")&&"popover"===this.positioning&&!this.showPopover&&(this.positioning="fixed"),e.has("matchInputWidth")&&(this.matchInputWidth?this.#L():this.#W()),super.update(e)}setCustomValidity(e){this.getTextField()?.setCustomValidity(e)}async reset(){this.softReset(),this.selected=null;const e=this.getTextField();e&&(e.error=!1,e.errorText="",e.reset())}softReset(){this.searchTerm="",this.suggestions=[]}async select(){this.getTextField()?.select()}async focus(){this.getTextField()?.focus()}checkValidity(){return this.getTextField()?.checkValidity()&&this.customCheckValidity()}reportValidity(){return this.getTextField()?.reportValidity()&&this.customReportValidity()}customCheckValidity(){return this.errorText="Please fill out this field",!(!this.selected&&this.getTextField()?.value)&&(!this.required&&!this.selected||!!this.selected)}customReportValidity(){return this.customCheckValidity()?(this.error=!1,this.errorText=""):this.error=!0,!this.error}async setSelected(e){const t=this.selected;this.selected=e,this.selected&&(this.softReset(),setTimeout(()=>{this.reportValidity()},0)),t?.Id!==this.selected?.Id&&this.dispatchEvent(new Event("selected"))}onInputChanged(e){console.log(e)}async showSuggestions(e,t){this.suggestions=e,this.count=t,await this.updateComplete,this.menu.show()}async#z(e){!e&&this.defaultSuggestions.length||this.menu.close(),this.setSelected(null),this.suggestions=e?[]:this.defaultSuggestions,this.count=e?0:this.defaultSuggestions.length,this.searchTerm=e,await this.updateComplete,this.onInputChanged(e)}static{this.styles=[s`
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
        --md-menu-item-hover-state-layer-color: var(--md-sys-color-surface);
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
    </md-menu-item>`}renderSelectedLeadingInputSlot(e){}#A(){return i`<div slot="trailing-icon">
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
        @keydown=${e=>{this.suggestions.length>0&&("Enter"==e.key||"ArrowDown"==e.key||"ArrowUp"==e.key)&&(this.menu.open||this.menu.show(),e.stopPropagation(),this.menu?.activateNextItem()),"Tab"!=e.key&&"Escape"!=e.key||this.menu?.open&&this.menu.close()}}
        @input=${async e=>this.#z(e.target.value)}
        @focus=${()=>{this.selected?this.select():(!this.searchTerm&&this.defaultSuggestions&&(this.suggestions=this.defaultSuggestions),!this.searchTerm&&!this.suggestions.length||this.disableMenuOpenOnFocus||this.menu.show())}}
      >
        ${this.selected?this.renderSelectedLeadingInputSlot(this.selected):this.renderLeadingInputSlot()} ${this.#A()}
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
        ${this.searchTerm&&!this.isLoading?i`<div summary>Showing ${this.suggestions.length} of ${this.count} result${1===this.count?"":"s"} for '${this.searchTerm}'</div>`:""}
        ${n(this.suggestions,e=>e?.Id,e=>this.renderSuggestion(e))}
        ${this.renderTrailingMenuSlot()}
      </md-menu>
      ${this.renderTrailingSlot()}
    `}};o([l("trackLoadingPromise"),a()],u.prototype,"isLoading",null),o([a()],u.prototype,"searchTerm",null),o([a()],u.prototype,"suggestions",null),o([a()],u.prototype,"defaultSuggestions",null),o([h("md-menu[suggestions]")],u.prototype,"menu",null),o([d({type:String})],u.prototype,"label",null),o([d({type:String})],u.prototype,"placeholder",null),o([d({type:Object})],u.prototype,"selected",null),o([d({type:Boolean})],u.prototype,"disabled",null),o([d({type:Boolean,attribute:"no-asterisk"})],u.prototype,"noAsterisk",null),o([d({reflect:!0,type:String})],u.prototype,"autocomplete",null),o([d({reflect:!0,type:Boolean})],u.prototype,"spellcheck",null),o([d({type:Boolean})],u.prototype,"error",null),o([d({type:String})],u.prototype,"errorText",null),o([d({type:Boolean})],u.prototype,"required",null),o([d({type:String})],u.prototype,"prefixText",null),o([d({type:String})],u.prototype,"suffixText",null),o([d({type:Boolean})],u.prototype,"hasLeadingIcon",null),o([d({type:Boolean})],u.prototype,"hasTrailingIcon",null),o([d({type:Boolean,attribute:"disable-menu-open-on-focus"})],u.prototype,"disableMenuOpenOnFocus",null),o([d({type:String})],u.prototype,"supportingText",null),o([d({type:String})],u.prototype,"textDirection",null),o([d({type:String})],u.prototype,"pathToSelectedText",null),o([d()],u.prototype,"positioning",void 0),o([d({type:Boolean,attribute:"match-input-width"})],u.prototype,"matchInputWidth",null),o([a()],u.prototype,"menuWidth",null),o([a()],u.prototype,"count",null),o([d({type:Boolean,attribute:"menu-open",reflect:!0})],u.prototype,"menuOpen",null),o([d({type:Boolean,reflect:!0,attribute:"large"})],u.prototype,"large",null),o([d({type:Boolean,reflect:!0,attribute:"shaped"})],u.prototype,"shaped",null),u=o([c("titanium-single-select-base")],u);export{u as T};
