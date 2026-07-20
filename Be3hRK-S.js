import{T as e,i as t,b as s,c as i,K as r,y as o,_ as n,d as l,r as a,e as h,n as c,t as d}from"./CyOMU7b-.js";import"./DLNvVUrG.js";let u=class extends(e(t)){constructor(){super(...arguments),this.#e=!1,this.#t="",this.#s=[],this.#i=[],this.#r="Single select",this.#o="Search for a entity",this.#n=null,this.#l=!1,this.#a=!1,this.#h="",this.#c=!1,this.#d=!1,this.#u="",this.#m=!1,this.#p="",this.#g="",this.#f=!1,this.#x=!1,this.#y=!1,this.#v="",this.#_="",this.#b="Name",this.positioning="popover",this.#$=!1,this.#T=null,this.#S=0,this.#k=!1,this.#I=!1,this.#w=!1}#e;get isLoading(){return this.#e}set isLoading(e){this.#e=e}#t;get searchTerm(){return this.#t}set searchTerm(e){this.#t=e}#s;get suggestions(){return this.#s}set suggestions(e){this.#s=e}#i;get defaultSuggestions(){return this.#i}set defaultSuggestions(e){this.#i=e}#O;get menu(){return this.#O}set menu(e){this.#O=e}#r;get label(){return this.#r}set label(e){this.#r=e}#o;get placeholder(){return this.#o}set placeholder(e){this.#o=e}#n;get selected(){return this.#n}set selected(e){this.#n=e}#l;get disabled(){return this.#l}set disabled(e){this.#l=e}#a;get noAsterisk(){return this.#a}set noAsterisk(e){this.#a=e}#h;get autocomplete(){return this.#h}set autocomplete(e){this.#h=e}#c;get spellcheck(){return this.#c}set spellcheck(e){this.#c=e}#d;get error(){return this.#d}set error(e){this.#d=e}#u;get errorText(){return this.#u}set errorText(e){this.#u=e}#m;get required(){return this.#m}set required(e){this.#m=e}#p;get prefixText(){return this.#p}set prefixText(e){this.#p=e}#g;get suffixText(){return this.#g}set suffixText(e){this.#g=e}#f;get hasLeadingIcon(){return this.#f}set hasLeadingIcon(e){this.#f=e}#x;get hasTrailingIcon(){return this.#x}set hasTrailingIcon(e){this.#x=e}#y;get disableMenuOpenOnFocus(){return this.#y}set disableMenuOpenOnFocus(e){this.#y=e}#v;get supportingText(){return this.#v}set supportingText(e){this.#v=e}#_;get textDirection(){return this.#_}set textDirection(e){this.#_=e}#b;get pathToSelectedText(){return this.#b}set pathToSelectedText(e){this.#b=e}#$;get matchInputWidth(){return this.#$}set matchInputWidth(e){this.#$=e}#B;get menuWidth(){return this.#B}set menuWidth(e){this.#B=e}#T;#S;get count(){return this.#S}set count(e){this.#S=e}#k;get menuOpen(){return this.#k}set menuOpen(e){this.#k=e}#I;get large(){return this.#I}set large(e){this.#I=e}#w;get shaped(){return this.#w}set shaped(e){this.#w=e}getTextField(){return this.shadowRoot?.querySelector("md-filled-text-field")}async firstUpdated(){const e=this.getTextField();if(e&&this.required){const t=e?.checkValidity;e.checkValidity=()=>!!this.selected&&t.call(e)}}#L(){this.#T?.disconnect(),this.#T=new ResizeObserver(e=>{for(const t of e)this.menuWidth=t.contentRect.width}),this.#T.observe(this)}#W(){this.#T?.disconnect(),this.#T=null,this.menuWidth=void 0}connectedCallback(){super.connectedCallback(),this.matchInputWidth&&this.#L()}disconnectedCallback(){super.disconnectedCallback(),this.#W()}update(e){e.has("positioning")&&"popover"===this.positioning&&!this.showPopover&&(this.positioning="fixed"),e.has("matchInputWidth")&&(this.matchInputWidth?this.#L():this.#W()),super.update(e)}setCustomValidity(e){this.getTextField()?.setCustomValidity(e)}async reset(){this.softReset(),this.selected=null;const e=this.getTextField();e&&(e.error=!1,e.errorText="",e.reset())}softReset(){this.searchTerm="",this.suggestions=[]}async select(){this.getTextField()?.select()}async focus(){this.getTextField()?.focus()}checkValidity(){return this.getTextField()?.checkValidity()&&this.customCheckValidity()}reportValidity(){return this.getTextField()?.reportValidity()&&this.customReportValidity()}customCheckValidity(){return this.errorText="Please fill out this field",!(!this.selected&&this.getTextField()?.value)&&(!this.required&&!this.selected||!!this.selected)}customReportValidity(){return this.customCheckValidity()?(this.error=!1,this.errorText=""):this.error=!0,!this.error}async setSelected(e){const t=this.selected;this.selected=e,this.selected&&(this.softReset(),setTimeout(()=>{this.reportValidity()},0)),t?.Id!==this.selected?.Id&&this.dispatchEvent(new Event("selected"))}onInputChanged(e){console.log(e)}async showSuggestions(e,t){this.suggestions=e,this.count=t,await this.updateComplete,this.menu.show()}async#z(e){!e&&this.defaultSuggestions.length||this.menu.close(),this.setSelected(null),this.suggestions=e?[]:this.defaultSuggestions,this.count=e?0:this.defaultSuggestions.length,this.searchTerm=e,await this.updateComplete,this.onInputChanged(e)}static{this.styles=[s`
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
        ${o(this.suggestions,e=>e?.Id,e=>this.renderSuggestion(e))}
        ${this.renderTrailingMenuSlot()}
      </md-menu>
      ${this.renderTrailingSlot()}
    `}};n([l("trackLoadingPromise"),a()],u.prototype,"isLoading",null),n([a()],u.prototype,"searchTerm",null),n([a()],u.prototype,"suggestions",null),n([a()],u.prototype,"defaultSuggestions",null),n([h("md-menu[suggestions]")],u.prototype,"menu",null),n([c({type:String})],u.prototype,"label",null),n([c({type:String})],u.prototype,"placeholder",null),n([c({type:Object})],u.prototype,"selected",null),n([c({type:Boolean})],u.prototype,"disabled",null),n([c({type:Boolean,attribute:"no-asterisk"})],u.prototype,"noAsterisk",null),n([c({reflect:!0,type:String})],u.prototype,"autocomplete",null),n([c({reflect:!0,type:Boolean})],u.prototype,"spellcheck",null),n([c({type:Boolean})],u.prototype,"error",null),n([c({type:String})],u.prototype,"errorText",null),n([c({type:Boolean})],u.prototype,"required",null),n([c({type:String})],u.prototype,"prefixText",null),n([c({type:String})],u.prototype,"suffixText",null),n([c({type:Boolean})],u.prototype,"hasLeadingIcon",null),n([c({type:Boolean})],u.prototype,"hasTrailingIcon",null),n([c({type:Boolean,attribute:"disable-menu-open-on-focus"})],u.prototype,"disableMenuOpenOnFocus",null),n([c({type:String})],u.prototype,"supportingText",null),n([c({type:String})],u.prototype,"textDirection",null),n([c({type:String})],u.prototype,"pathToSelectedText",null),n([c()],u.prototype,"positioning",void 0),n([c({type:Boolean,attribute:"match-input-width"})],u.prototype,"matchInputWidth",null),n([a()],u.prototype,"menuWidth",null),n([a()],u.prototype,"count",null),n([c({type:Boolean,attribute:"menu-open",reflect:!0})],u.prototype,"menuOpen",null),n([c({type:Boolean,reflect:!0,attribute:"large"})],u.prototype,"large",null),n([c({type:Boolean,reflect:!0,attribute:"shaped"})],u.prototype,"shaped",null),u=n([d("titanium-single-select-base")],u);export{u as T};
