import{a0 as t,x as e,c as r,_ as i,t as o,n as s,a1 as a,z as n,D as c,r as l,e as h,L as d,i as u}from"./Dis8517n.js";import"./DtYO05ZE.js";class g extends t{renderIndicator(){return this.indeterminate?this.renderIndeterminateContainer():this.renderDeterminateContainer()}renderDeterminateContainer(){const t=100*(1-this.value/this.max);return e`
      <svg viewBox="0 0 4800 4800">
        <circle class="track" pathLength="100"></circle>
        <circle
          class="active-track"
          pathLength="100"
          stroke-dashoffset=${t}></circle>
      </svg>
    `}renderIndeterminateContainer(){return e` <div class="spinner">
      <div class="left">
        <div class="circle"></div>
      </div>
      <div class="right">
        <div class="circle"></div>
      </div>
    </div>`}}const p=r`:host{--_active-indicator-color: var(--md-circular-progress-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-width: var(--md-circular-progress-active-indicator-width, 10);--_four-color-active-indicator-four-color: var(--md-circular-progress-four-color-active-indicator-four-color, var(--md-sys-color-tertiary-container, #ffd8e4));--_four-color-active-indicator-one-color: var(--md-circular-progress-four-color-active-indicator-one-color, var(--md-sys-color-primary, #6750a4));--_four-color-active-indicator-three-color: var(--md-circular-progress-four-color-active-indicator-three-color, var(--md-sys-color-tertiary, #7d5260));--_four-color-active-indicator-two-color: var(--md-circular-progress-four-color-active-indicator-two-color, var(--md-sys-color-primary-container, #eaddff));--_size: var(--md-circular-progress-size, 48px);display:inline-flex;vertical-align:middle;width:var(--_size);height:var(--_size);position:relative;align-items:center;justify-content:center;contain:strict;content-visibility:auto}.progress{flex:1;align-self:stretch;margin:4px}.progress,.spinner,.left,.right,.circle,svg,.track,.active-track{position:absolute;inset:0}svg{transform:rotate(-90deg)}circle{cx:50%;cy:50%;r:calc(50%*(1 - var(--_active-indicator-width)/100));stroke-width:calc(var(--_active-indicator-width)*1%);stroke-dasharray:100;fill:rgba(0,0,0,0)}.active-track{transition:stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);stroke:var(--_active-indicator-color)}.track{stroke:rgba(0,0,0,0)}.progress.indeterminate{animation:linear infinite linear-rotate;animation-duration:1568.2352941176ms}.spinner{animation:infinite both rotate-arc;animation-duration:5332ms;animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.left{overflow:hidden;inset:0 50% 0 0}.right{overflow:hidden;inset:0 0 0 50%}.circle{box-sizing:border-box;border-radius:50%;border:solid calc(var(--_active-indicator-width)/100*(var(--_size) - 8px));border-color:var(--_active-indicator-color) var(--_active-indicator-color) rgba(0,0,0,0) rgba(0,0,0,0);animation:expand-arc;animation-iteration-count:infinite;animation-fill-mode:both;animation-duration:1333ms,5332ms;animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.four-color .circle{animation-name:expand-arc,four-color}.left .circle{rotate:135deg;inset:0 -100% 0 0}.right .circle{rotate:100deg;inset:0 0 0 -100%;animation-delay:-666.5ms,0ms}@media(forced-colors: active){.active-track{stroke:CanvasText}.circle{border-color:CanvasText CanvasText Canvas Canvas}}@keyframes expand-arc{0%{transform:rotate(265deg)}50%{transform:rotate(130deg)}100%{transform:rotate(265deg)}}@keyframes rotate-arc{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes linear-rotate{to{transform:rotate(360deg)}}@keyframes four-color{0%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}15%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}25%{border-top-color:var(--_four-color-active-indicator-two-color);border-right-color:var(--_four-color-active-indicator-two-color)}40%{border-top-color:var(--_four-color-active-indicator-two-color);border-right-color:var(--_four-color-active-indicator-two-color)}50%{border-top-color:var(--_four-color-active-indicator-three-color);border-right-color:var(--_four-color-active-indicator-three-color)}65%{border-top-color:var(--_four-color-active-indicator-three-color);border-right-color:var(--_four-color-active-indicator-three-color)}75%{border-top-color:var(--_four-color-active-indicator-four-color);border-right-color:var(--_four-color-active-indicator-four-color)}90%{border-top-color:var(--_four-color-active-indicator-four-color);border-right-color:var(--_four-color-active-indicator-four-color)}100%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}}
`;let m=class extends g{};m.styles=[p],m=i([o("md-circular-progress")],m);const f=t=>{class e extends t{connectedCallback(){super.connectedCallback(),a.subscribe("theme-preference","change",t=>{this.themePreference=t}),this.themePreference="light"===document.firstElementChild?.getAttribute("data-theme")?"light":"dark"}}return i([s({attribute:"theme-preference",reflect:!0})],e.prototype,"themePreference",void 0),e};let v=class extends(f(d(u))){constructor(){super(...arguments),this.#t=[],this.#e=[],this.#r="Single select",this.#i="Search for a entity",this.#o=null,this.#s=!1,this.#a=!1,this.#n="",this.#c=!1,this.#l=!1,this.#h=!1,this.#d="Name",this.positioning="popover"}#u;get searchTerm(){return this.#u}set searchTerm(t){this.#u=t}#t;get suggestions(){return this.#t}set suggestions(t){this.#t=t}#e;get defaultSuggestions(){return this.#e}set defaultSuggestions(t){this.#e=t}#g;get menu(){return this.#g}set menu(t){this.#g=t}#p;get textfield(){return this.#p}set textfield(t){this.#p=t}#r;get label(){return this.#r}set label(t){this.#r=t}#i;get placeholder(){return this.#i}set placeholder(t){this.#i=t}#o;get selected(){return this.#o}set selected(t){this.#o=t}#s;get disabled(){return this.#s}set disabled(t){this.#s=t}#a;get noAsterisk(){return this.#a}set noAsterisk(t){this.#a=t}#n;get autocomplete(){return this.#n}set autocomplete(t){this.#n=t}#c;get spellcheck(){return this.#c}set spellcheck(t){this.#c=t}#l;get error(){return this.#l}set error(t){this.#l=t}#m;get errorText(){return this.#m}set errorText(t){this.#m=t}#h;get required(){return this.#h}set required(t){this.#h=t}#f;get prefixText(){return this.#f}set prefixText(t){this.#f=t}#v;get suffixText(){return this.#v}set suffixText(t){this.#v=t}#x;get hasLeadingIcon(){return this.#x}set hasLeadingIcon(t){this.#x=t}#_;get hasTrailingIcon(){return this.#_}set hasTrailingIcon(t){this.#_=t}#b;get disableMenuOpenOnFocus(){return this.#b}set disableMenuOpenOnFocus(t){this.#b=t}#y;get supportingText(){return this.#y}set supportingText(t){this.#y=t}#T;get textDirection(){return this.#T}set textDirection(t){this.#T=t}#d;get pathToSelectedText(){return this.#d}set pathToSelectedText(t){this.#d=t}#$;get count(){return this.#$}set count(t){this.#$=t}async firstUpdated(){if(this.textfield&&this.required){const t=this.textfield?.checkValidity;this.textfield.checkValidity=()=>!!this.selected&&t.bind(this.textfield)}}update(t){t.has("positioning")&&"popover"===this.positioning&&!this.showPopover&&(this.positioning="fixed"),super.update(t)}setCustomValidity(t){this.textfield?.setCustomValidity(t)}async reset(){this.softReset(),this.selected=null,this.textfield&&(this.textfield.error=!1,this.textfield.errorText="",this.textfield.reset())}softReset(){this.searchTerm="",this.suggestions=[]}async select(){this.textfield?.select()}async focus(){this.textfield?.focus()}checkValidity(){return this.textfield?.checkValidity()&&this.customCheckValidity()}reportValidity(){return this.textfield?.reportValidity()&&this.customReportValidity()}customCheckValidity(){return this.errorText="Please fill out this field",!(!this.selected&&this.textfield?.value)&&(!this.required&&!this.selected||!!this.selected)}customReportValidity(){return this.customCheckValidity()?(this.error=!1,this.errorText=""):this.error=!0,!this.error}async setSelected(t){const e=this.selected;this.selected=t,this.selected&&(this.softReset(),setTimeout(()=>{this.reportValidity()},0)),e?.Id!==this.selected?.Id&&this.dispatchEvent(new Event("selected"))}onInputChanged(t){console.log(t)}async showSuggestions(t,e){this.suggestions=t,this.count=e,await this.updateComplete,this.menu.show()}async#k(t){!t&&this.defaultSuggestions.length||this.menu.close(),this.setSelected(null),this.suggestions=t?[]:this.defaultSuggestions,this.count=t?0:this.defaultSuggestions.length,this.searchTerm=t,await this.updateComplete,this.onInputChanged(t)}static{this.styles=[r`
      :host {
        display: block;
        position: relative;
      }

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

      :host([shaped]) {
        --md-outlined-text-field-container-shape: 28px;
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
    </md-menu-item>`}renderSelectedLeadingInputSlot(t){}#S(){return e`<div slot="trailing-icon">
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
      <md-outlined-text-field
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
        ${this.selected?this.renderSelectedLeadingInputSlot(this.selected):this.renderLeadingInputSlot()} ${this.#S()}
      </md-outlined-text-field>
      <md-menu
        suggestions
        @opening=${t=>n(this,t)}
        @opened=${t=>n(this,t)}
        @closing=${t=>n(this,t)}
        @closed=${t=>n(this,t)}
        .positioning=${this.positioning}
        id="menu"
        anchor="menu-anchor"
        anchor-corner="end-start"
        default-focus="list-root"
        skip-restore-focus
        @close-menu=${t=>{const e=t.detail.itemPath?.[0]??null;this.setSelected(e?.item)}}
      >
        ${this.searchTerm&&!this.isLoading?e`<div summary>Showing ${this.suggestions.length} of ${this.count} result${1===this.count?"":"s"} for '${this.searchTerm}'</div>`:""}
        ${c(this.suggestions,t=>t?.Id,t=>this.renderSuggestion(t))}
        ${this.renderTrailingMenuSlot()}
      </md-menu>
      ${this.renderTrailingSlot()}
    `}};i([l()],v.prototype,"searchTerm",null),i([l()],v.prototype,"suggestions",null),i([l()],v.prototype,"defaultSuggestions",null),i([h("md-menu[suggestions]")],v.prototype,"menu",null),i([h("md-outlined-text-field")],v.prototype,"textfield",null),i([s({type:String})],v.prototype,"label",null),i([s({type:String})],v.prototype,"placeholder",null),i([s({type:Object})],v.prototype,"selected",null),i([s({type:Boolean})],v.prototype,"disabled",null),i([s({type:Boolean,attribute:"no-asterisk"})],v.prototype,"noAsterisk",null),i([s({reflect:!0,type:String})],v.prototype,"autocomplete",null),i([s({reflect:!0,type:Boolean})],v.prototype,"spellcheck",null),i([s({type:Boolean})],v.prototype,"error",null),i([s({type:String})],v.prototype,"errorText",null),i([s({type:Boolean})],v.prototype,"required",null),i([s({type:String})],v.prototype,"prefixText",null),i([s({type:String})],v.prototype,"suffixText",null),i([s({type:Boolean})],v.prototype,"hasLeadingIcon",null),i([s({type:Boolean})],v.prototype,"hasTrailingIcon",null),i([s({type:Boolean,attribute:"disable-menu-open-on-focus"})],v.prototype,"disableMenuOpenOnFocus",null),i([s({type:String})],v.prototype,"supportingText",null),i([s({type:String})],v.prototype,"textDirection",null),i([s({type:String})],v.prototype,"pathToSelectedText",null),i([s()],v.prototype,"positioning",void 0),i([l()],v.prototype,"count",null),v=i([o("titanium-single-select-base")],v);export{v as T,f as a};
