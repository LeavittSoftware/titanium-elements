import{T as e,L as t,i as s,b as i,M as r,K as n,N as l,C as o,_ as a,r as h,e as d,n as c,t as u}from"./k6PMp29N.js";import"./DZnIGrlr.js";let p=class extends(e(t(s))){constructor(){super(...arguments),this.#e=[],this.#t=[],this.#s="Single select",this.#i=!1,this.#r="Search for a entity",this.#n=null,this.#l=!1,this.#o=!1,this.#a="",this.#h=!1,this.#d=!1,this.#c=!1,this.#u="Name",this.positioning="popover",this.#p=!1,this.#m=null,this.#g=!1,this.#f=!1,this.#x=!1}#y;get searchTerm(){return this.#y}set searchTerm(e){this.#y=e}#e;get suggestions(){return this.#e}set suggestions(e){this.#e=e}#t;get defaultSuggestions(){return this.#t}set defaultSuggestions(e){this.#t=e}#_;get menu(){return this.#_}set menu(e){this.#_=e}#s;get label(){return this.#s}set label(e){this.#s=e}#i;get filled(){return this.#i}set filled(e){this.#i=e}#r;get placeholder(){return this.#r}set placeholder(e){this.#r=e}#n;get selected(){return this.#n}set selected(e){this.#n=e}#l;get disabled(){return this.#l}set disabled(e){this.#l=e}#o;get noAsterisk(){return this.#o}set noAsterisk(e){this.#o=e}#a;get autocomplete(){return this.#a}set autocomplete(e){this.#a=e}#h;get spellcheck(){return this.#h}set spellcheck(e){this.#h=e}#d;get error(){return this.#d}set error(e){this.#d=e}#v;get errorText(){return this.#v}set errorText(e){this.#v=e}#c;get required(){return this.#c}set required(e){this.#c=e}#$;get prefixText(){return this.#$}set prefixText(e){this.#$=e}#T;get suffixText(){return this.#T}set suffixText(e){this.#T=e}#b;get hasLeadingIcon(){return this.#b}set hasLeadingIcon(e){this.#b=e}#S;get hasTrailingIcon(){return this.#S}set hasTrailingIcon(e){this.#S=e}#I;get disableMenuOpenOnFocus(){return this.#I}set disableMenuOpenOnFocus(e){this.#I=e}#k;get supportingText(){return this.#k}set supportingText(e){this.#k=e}#w;get textDirection(){return this.#w}set textDirection(e){this.#w=e}#u;get pathToSelectedText(){return this.#u}set pathToSelectedText(e){this.#u=e}#p;get matchInputWidth(){return this.#p}set matchInputWidth(e){this.#p=e}#O;get menuWidth(){return this.#O}set menuWidth(e){this.#O=e}#m;#B;get count(){return this.#B}set count(e){this.#B=e}#g;get menuOpen(){return this.#g}set menuOpen(e){this.#g=e}#f;get large(){return this.#f}set large(e){this.#f=e}#x;get shaped(){return this.#x}set shaped(e){this.#x=e}getTextField(){return this.filled?this.shadowRoot?.querySelector("md-filled-text-field"):this.shadowRoot?.querySelector("md-outlined-text-field")}async firstUpdated(){const e=this.getTextField();if(e&&this.required){const t=e?.checkValidity;e.checkValidity=()=>!!this.selected&&t.bind(e)}}#W(){this.#m?.disconnect(),this.#m=new ResizeObserver(e=>{for(const t of e)this.menuWidth=t.contentRect.width}),this.#m.observe(this)}#L(){this.#m?.disconnect(),this.#m=null,this.menuWidth=void 0}connectedCallback(){super.connectedCallback(),this.matchInputWidth&&this.#W()}disconnectedCallback(){super.disconnectedCallback(),this.#L()}update(e){e.has("positioning")&&"popover"===this.positioning&&!this.showPopover&&(this.positioning="fixed"),e.has("matchInputWidth")&&(this.matchInputWidth?this.#W():this.#L()),super.update(e)}setCustomValidity(e){this.getTextField()?.setCustomValidity(e)}async reset(){this.softReset(),this.selected=null;const e=this.getTextField();e&&(e.error=!1,e.errorText="",e.reset())}softReset(){this.searchTerm="",this.suggestions=[]}async select(){this.getTextField()?.select()}async focus(){this.getTextField()?.focus()}checkValidity(){return this.getTextField()?.checkValidity()&&this.customCheckValidity()}reportValidity(){return this.getTextField()?.reportValidity()&&this.customReportValidity()}customCheckValidity(){return this.errorText="Please fill out this field",!(!this.selected&&this.getTextField()?.value)&&(!this.required&&!this.selected||!!this.selected)}customReportValidity(){return this.customCheckValidity()?(this.error=!1,this.errorText=""):this.error=!0,!this.error}async setSelected(e){const t=this.selected;this.selected=e,this.selected&&(this.softReset(),setTimeout(()=>{this.reportValidity()},0)),t?.Id!==this.selected?.Id&&this.dispatchEvent(new Event("selected"))}onInputChanged(e){console.log(e)}async showSuggestions(e,t){this.suggestions=e,this.count=t,await this.updateComplete,this.menu.show()}async#z(e){!e&&this.defaultSuggestions.length||this.menu.close(),this.setSelected(null),this.suggestions=e?[]:this.defaultSuggestions,this.count=e?0:this.defaultSuggestions.length,this.searchTerm=e,await this.updateComplete,this.onInputChanged(e)}static{this.styles=[i`
      :host {
        display: block;
        position: relative;
      }

      :host([large]) {
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

      md-filled-text-field,
      md-outlined-text-field {
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

      :host([filled]) {
        --md-filled-text-field-container-shape: 16px;
        --md-filled-field-container-shape: 16px;
        --md-menu-container-shape: 16px;

        --md-filled-text-field-active-indicator-height: 0;
        --md-filled-text-field-error-active-indicator-height: 0;
        --md-filled-text-field-hover-active-indicator-height: 0;
        --md-filled-text-field-focus-active-indicator-height: 0;
        --md-filled-text-field-disabled-active-indicator-height: 0;
      }

      :host([shaped]) {
        --md-outlined-text-field-container-shape: 28px;
        --md-filled-text-field-container-shape: 28px;
      }

      :host([shaped][menu-open][filled]) {
        --md-outlined-text-field-container-shape-start-start: 28px;
        --md-outlined-text-field-container-shape-start-end: 28px;
        --md-outlined-text-field-container-shape-end-end: 0;
        --md-outlined-text-field-container-shape-end-start: 0;

        --md-filled-text-field-container-shape-start-start: 28px;
        --md-filled-text-field-container-shape-start-end: 28px;
        --md-filled-text-field-container-shape-end-end: 0;
        --md-filled-text-field-container-shape-end-start: 0;

        --md-filled-text-field-container-color: var(--md-sys-color-surface-container);
        --md-menu-container-shape: 0 0 28px 28px;
      }

      :host([shaped][menu-open][filled]) md-menu {
        --md-menu-container-color: var(--md-sys-color-inverse-surface);
        color: var(--md-sys-color-inverse-on-surface);

        --md-menu-item-supporting-text-color: var(--md-sys-color-inverse-on-surface);
        --md-menu-item-trailing-supporting-text-color: var(--md-sys-color-inverse-on-surface);
        --md-menu-item-label-text-color: var(--md-sys-color-inverse-on-surface);
        --md-menu-item-hover-state-layer-color: var(--md-sys-color-surface);
      }

      :host([shaped][menu-open][filled]) md-filled-text-field {
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

      :host([shaped][filled]) [summary] {
        color: var(--md-sys-color-inverse-on-surface);
      }

      [hidden] {
        display: none !important;
      }
    `]}renderSuggestion(e){return r`<md-menu-item .item=${e} ?selected=${this.selected?.Id===e.Id}>
      <slot name="trailing-icon" slot="trailing-icon"></slot>
      <span slot="headline">${e.Id}</span>
    </md-menu-item>`}renderSelectedLeadingInputSlot(e){}#A(){return r`<div slot="trailing-icon">
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
    </div>`}renderTrailingInputSlot(){return r``}renderLeadingInputSlot(){return r`<slot name="leading-icon" slot="leading-icon"><md-icon>search</md-icon></slot>`}renderTrailingSlot(){return r``}renderTrailingMenuSlot(){return r``}render(){return r`
      <${this.filled?n`md-filled-text-field`:n`md-outlined-text-field`}
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
        </${this.filled?n`md-filled-text-field`:n`md-outlined-text-field`}>
      <md-menu
        part="menu"
        suggestions
        style=${this.matchInputWidth&&this.menuWidth?`min-width: ${this.menuWidth}px; max-width: ${this.menuWidth}px`:""}
        @opening=${e=>{l(this,e),this.menuOpen=!0}}
        @opened=${e=>l(this,e)}
        @closing=${e=>{l(this,e),this.menuOpen=!1}}
        @closed=${e=>l(this,e)}
        .positioning=${this.positioning}
        id="menu"
        anchor="menu-anchor"
        anchor-corner="end-start"
        default-focus="list-root"
        skip-restore-focus
        @close-menu=${e=>{const t=e.detail.itemPath?.[0]??null;this.setSelected(t?.item)}}
      >
        ${this.searchTerm&&!this.isLoading?r`<div summary>Showing ${this.suggestions.length} of ${this.count} result${1===this.count?"":"s"} for '${this.searchTerm}'</div>`:""}
        ${o(this.suggestions,e=>e?.Id,e=>this.renderSuggestion(e))}
        ${this.renderTrailingMenuSlot()}
      </md-menu>
      ${this.renderTrailingSlot()}
    `}};a([h()],p.prototype,"searchTerm",null),a([h()],p.prototype,"suggestions",null),a([h()],p.prototype,"defaultSuggestions",null),a([d("md-menu[suggestions]")],p.prototype,"menu",null),a([c({type:String})],p.prototype,"label",null),a([c({type:Boolean,attribute:"filled"})],p.prototype,"filled",null),a([c({type:String})],p.prototype,"placeholder",null),a([c({type:Object})],p.prototype,"selected",null),a([c({type:Boolean})],p.prototype,"disabled",null),a([c({type:Boolean,attribute:"no-asterisk"})],p.prototype,"noAsterisk",null),a([c({reflect:!0,type:String})],p.prototype,"autocomplete",null),a([c({reflect:!0,type:Boolean})],p.prototype,"spellcheck",null),a([c({type:Boolean})],p.prototype,"error",null),a([c({type:String})],p.prototype,"errorText",null),a([c({type:Boolean})],p.prototype,"required",null),a([c({type:String})],p.prototype,"prefixText",null),a([c({type:String})],p.prototype,"suffixText",null),a([c({type:Boolean})],p.prototype,"hasLeadingIcon",null),a([c({type:Boolean})],p.prototype,"hasTrailingIcon",null),a([c({type:Boolean,attribute:"disable-menu-open-on-focus"})],p.prototype,"disableMenuOpenOnFocus",null),a([c({type:String})],p.prototype,"supportingText",null),a([c({type:String})],p.prototype,"textDirection",null),a([c({type:String})],p.prototype,"pathToSelectedText",null),a([c()],p.prototype,"positioning",void 0),a([c({type:Boolean,attribute:"match-input-width"})],p.prototype,"matchInputWidth",null),a([h()],p.prototype,"menuWidth",null),a([h()],p.prototype,"count",null),a([c({type:Boolean,attribute:"menu-open",reflect:!0})],p.prototype,"menuOpen",null),a([c({type:Boolean,attribute:"large"})],p.prototype,"large",null),a([c({type:Boolean,attribute:"shaped"})],p.prototype,"shaped",null),p=a([u("titanium-single-select-base")],p);export{p as T};
