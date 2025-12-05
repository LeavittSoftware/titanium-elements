import{c as t,M as e,N as s,D as i,K as r,_ as n,r as o,e as l,n as h,t as a,L as c,i as d}from"./BRwII10n.js";import"./C9unvfR0.js";import"./CTC26hdX.js";import"./EHyh_5h0.js";import{T as u}from"./DG2I01th.js";let g=class extends(u(c(d))){constructor(){super(...arguments),this.#t=[],this.#e=[],this.#s="Single select",this.#i=!1,this.#r="Search for a entity",this.#n=null,this.#o=!1,this.#l=!1,this.#h="",this.#a=!1,this.#c=!1,this.#d=!1,this.#u="Name",this.positioning="popover"}#g;get searchTerm(){return this.#g}set searchTerm(t){this.#g=t}#t;get suggestions(){return this.#t}set suggestions(t){this.#t=t}#e;get defaultSuggestions(){return this.#e}set defaultSuggestions(t){this.#e=t}#p;get menu(){return this.#p}set menu(t){this.#p=t}#s;get label(){return this.#s}set label(t){this.#s=t}#i;get filled(){return this.#i}set filled(t){this.#i=t}#r;get placeholder(){return this.#r}set placeholder(t){this.#r=t}#n;get selected(){return this.#n}set selected(t){this.#n=t}#o;get disabled(){return this.#o}set disabled(t){this.#o=t}#l;get noAsterisk(){return this.#l}set noAsterisk(t){this.#l=t}#h;get autocomplete(){return this.#h}set autocomplete(t){this.#h=t}#a;get spellcheck(){return this.#a}set spellcheck(t){this.#a=t}#c;get error(){return this.#c}set error(t){this.#c=t}#m;get errorText(){return this.#m}set errorText(t){this.#m=t}#d;get required(){return this.#d}set required(t){this.#d=t}#f;get prefixText(){return this.#f}set prefixText(t){this.#f=t}#x;get suffixText(){return this.#x}set suffixText(t){this.#x=t}#_;get hasLeadingIcon(){return this.#_}set hasLeadingIcon(t){this.#_=t}#T;get hasTrailingIcon(){return this.#T}set hasTrailingIcon(t){this.#T=t}#$;get disableMenuOpenOnFocus(){return this.#$}set disableMenuOpenOnFocus(t){this.#$=t}#y;get supportingText(){return this.#y}set supportingText(t){this.#y=t}#S;get textDirection(){return this.#S}set textDirection(t){this.#S=t}#u;get pathToSelectedText(){return this.#u}set pathToSelectedText(t){this.#u=t}#b;get count(){return this.#b}set count(t){this.#b=t}getTextField(){return this.filled?this.shadowRoot?.querySelector("md-filled-text-field"):this.shadowRoot?.querySelector("md-outlined-text-field")}async firstUpdated(){const t=this.getTextField();if(t&&this.required){const e=t?.checkValidity;t.checkValidity=()=>!!this.selected&&e.bind(t)}}update(t){t.has("positioning")&&"popover"===this.positioning&&!this.showPopover&&(this.positioning="fixed"),super.update(t)}setCustomValidity(t){this.getTextField()?.setCustomValidity(t)}async reset(){this.softReset(),this.selected=null;const t=this.getTextField();t&&(t.error=!1,t.errorText="",t.reset())}softReset(){this.searchTerm="",this.suggestions=[]}async select(){this.getTextField()?.select()}async focus(){this.getTextField()?.focus()}checkValidity(){return this.getTextField()?.checkValidity()&&this.customCheckValidity()}reportValidity(){return this.getTextField()?.reportValidity()&&this.customReportValidity()}customCheckValidity(){return this.errorText="Please fill out this field",!(!this.selected&&this.getTextField()?.value)&&(!this.required&&!this.selected||!!this.selected)}customReportValidity(){return this.customCheckValidity()?(this.error=!1,this.errorText=""):this.error=!0,!this.error}async setSelected(t){const e=this.selected;this.selected=t,this.selected&&(this.softReset(),setTimeout(()=>{this.reportValidity()},0)),e?.Id!==this.selected?.Id&&this.dispatchEvent(new Event("selected"))}onInputChanged(t){console.log(t)}async showSuggestions(t,e){this.suggestions=t,this.count=e,await this.updateComplete,this.menu.show()}async#k(t){!t&&this.defaultSuggestions.length||this.menu.close(),this.setSelected(null),this.suggestions=t?[]:this.defaultSuggestions,this.count=t?0:this.defaultSuggestions.length,this.searchTerm=t,await this.updateComplete,this.onInputChanged(t)}static{this.styles=[t`
      :host {
        display: block;
        position: relative;
      }

      md-filled-text-field,
      md-outlined-text-field {
        width: 100%;
      }

      md-circular-progress {
        --md-circular-progress-size: 40px;
        margin-right: 6px;
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

      [hidden] {
        display: none !important;
      }
    `]}renderSuggestion(t){return e`<md-menu-item .item=${t} ?selected=${this.selected?.Id===t.Id}>
      <slot name="trailing-icon" slot="trailing-icon"></slot>
      <span slot="headline">${t.Id}</span>
    </md-menu-item>`}renderSelectedLeadingInputSlot(t){}#v(){return e`<div slot="trailing-icon">
      <md-circular-progress ?indeterminate=${this.isLoading} ?hidden=${!this.isLoading}></md-circular-progress>
      <md-icon-button
        ?hidden=${this.isLoading||!this.selected}
        ?disabled=${this.disabled}
        title="Clear selection"
        @click=${async t=>{t.preventDefault(),this.setSelected(null),this.focus()}}
      >
        <md-icon>close</md-icon>
      </md-icon-button>
      ${this.renderTrailingInputSlot()}
    </div>`}renderTrailingInputSlot(){return e``}renderLeadingInputSlot(){return e`<slot name="leading-icon" slot="leading-icon"><md-icon>search</md-icon></slot>`}renderTrailingSlot(){return e``}renderTrailingMenuSlot(){return e``}render(){return e`
      <${this.filled?r`md-filled-text-field`:r`md-outlined-text-field`}
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
        @keydown=${t=>{this.suggestions.length>0&&("Enter"==t.key||"ArrowDown"==t.key||"ArrowUp"==t.key)&&(this.menu.open||this.menu.show(),t.stopPropagation(),this.menu?.activateNextItem()),"Tab"!=t.key&&"Escape"!=t.key||this.menu?.open&&this.menu.close()}}
        @input=${async t=>this.#k(t.target.value)}
        @focus=${()=>{this.selected?this.select():(!this.searchTerm&&this.defaultSuggestions&&(this.suggestions=this.defaultSuggestions),!this.searchTerm&&!this.suggestions.length||this.disableMenuOpenOnFocus||this.menu.show())}}
      >
        ${this.selected?this.renderSelectedLeadingInputSlot(this.selected):this.renderLeadingInputSlot()} ${this.#v()}
        </${this.filled?r`md-filled-text-field`:r`md-outlined-text-field`}>
      <md-menu
        suggestions
        @opening=${t=>s(this,t)}
        @opened=${t=>s(this,t)}
        @closing=${t=>s(this,t)}
        @closed=${t=>s(this,t)}
        .positioning=${this.positioning}
        id="menu"
        anchor="menu-anchor"
        anchor-corner="end-start"
        default-focus="list-root"
        skip-restore-focus
        @close-menu=${t=>{const e=t.detail.itemPath?.[0]??null;this.setSelected(e?.item)}}
      >
        ${this.searchTerm&&!this.isLoading?e`<div summary>Showing ${this.suggestions.length} of ${this.count} result${1===this.count?"":"s"} for '${this.searchTerm}'</div>`:""}
        ${i(this.suggestions,t=>t?.Id,t=>this.renderSuggestion(t))}
        ${this.renderTrailingMenuSlot()}
      </md-menu>
      ${this.renderTrailingSlot()}
    `}};n([o()],g.prototype,"searchTerm",null),n([o()],g.prototype,"suggestions",null),n([o()],g.prototype,"defaultSuggestions",null),n([l("md-menu[suggestions]")],g.prototype,"menu",null),n([h({type:String})],g.prototype,"label",null),n([h({type:Boolean,attribute:"filled"})],g.prototype,"filled",null),n([h({type:String})],g.prototype,"placeholder",null),n([h({type:Object})],g.prototype,"selected",null),n([h({type:Boolean})],g.prototype,"disabled",null),n([h({type:Boolean,attribute:"no-asterisk"})],g.prototype,"noAsterisk",null),n([h({reflect:!0,type:String})],g.prototype,"autocomplete",null),n([h({reflect:!0,type:Boolean})],g.prototype,"spellcheck",null),n([h({type:Boolean})],g.prototype,"error",null),n([h({type:String})],g.prototype,"errorText",null),n([h({type:Boolean})],g.prototype,"required",null),n([h({type:String})],g.prototype,"prefixText",null),n([h({type:String})],g.prototype,"suffixText",null),n([h({type:Boolean})],g.prototype,"hasLeadingIcon",null),n([h({type:Boolean})],g.prototype,"hasTrailingIcon",null),n([h({type:Boolean,attribute:"disable-menu-open-on-focus"})],g.prototype,"disableMenuOpenOnFocus",null),n([h({type:String})],g.prototype,"supportingText",null),n([h({type:String})],g.prototype,"textDirection",null),n([h({type:String})],g.prototype,"pathToSelectedText",null),n([h()],g.prototype,"positioning",void 0),n([o()],g.prototype,"count",null),g=n([a("titanium-single-select-base")],g);export{g as T};
