import{$ as t,x as e,i as r,_ as i,t as o,L as s,y as a,B as c,d as n,e as l,n as h,r as d}from"./B87LNoAb.js";import"./vnz40oES.js";class u extends t{renderIndicator(){return this.indeterminate?this.renderIndeterminateContainer():this.renderDeterminateContainer()}renderDeterminateContainer(){const t=100*(1-this.value/this.max);return e`
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
    </div>`}}const g=r`:host{--_active-indicator-color: var(--md-circular-progress-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-width: var(--md-circular-progress-active-indicator-width, 10);--_four-color-active-indicator-four-color: var(--md-circular-progress-four-color-active-indicator-four-color, var(--md-sys-color-tertiary-container, #ffd8e4));--_four-color-active-indicator-one-color: var(--md-circular-progress-four-color-active-indicator-one-color, var(--md-sys-color-primary, #6750a4));--_four-color-active-indicator-three-color: var(--md-circular-progress-four-color-active-indicator-three-color, var(--md-sys-color-tertiary, #7d5260));--_four-color-active-indicator-two-color: var(--md-circular-progress-four-color-active-indicator-two-color, var(--md-sys-color-primary-container, #eaddff));--_size: var(--md-circular-progress-size, 48px);display:inline-flex;vertical-align:middle;width:var(--_size);height:var(--_size);position:relative;align-items:center;justify-content:center;contain:strict;content-visibility:auto}.progress{flex:1;align-self:stretch;margin:4px}.progress,.spinner,.left,.right,.circle,svg,.track,.active-track{position:absolute;inset:0}svg{transform:rotate(-90deg)}circle{cx:50%;cy:50%;r:calc(50%*(1 - var(--_active-indicator-width)/100));stroke-width:calc(var(--_active-indicator-width)*1%);stroke-dasharray:100;fill:rgba(0,0,0,0)}.active-track{transition:stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);stroke:var(--_active-indicator-color)}.track{stroke:rgba(0,0,0,0)}.progress.indeterminate{animation:linear infinite linear-rotate;animation-duration:1568.2352941176ms}.spinner{animation:infinite both rotate-arc;animation-duration:5332ms;animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.left{overflow:hidden;inset:0 50% 0 0}.right{overflow:hidden;inset:0 0 0 50%}.circle{box-sizing:border-box;border-radius:50%;border:solid calc(var(--_active-indicator-width)/100*(var(--_size) - 8px));border-color:var(--_active-indicator-color) var(--_active-indicator-color) rgba(0,0,0,0) rgba(0,0,0,0);animation:expand-arc;animation-iteration-count:infinite;animation-fill-mode:both;animation-duration:1333ms,5332ms;animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.four-color .circle{animation-name:expand-arc,four-color}.left .circle{rotate:135deg;inset:0 -100% 0 0}.right .circle{rotate:100deg;inset:0 0 0 -100%;animation-delay:-666.5ms,0ms}@media(forced-colors: active){.active-track{stroke:CanvasText}.circle{border-color:CanvasText CanvasText Canvas Canvas}}@keyframes expand-arc{0%{transform:rotate(265deg)}50%{transform:rotate(130deg)}100%{transform:rotate(265deg)}}@keyframes rotate-arc{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes linear-rotate{to{transform:rotate(360deg)}}@keyframes four-color{0%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}15%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}25%{border-top-color:var(--_four-color-active-indicator-two-color);border-right-color:var(--_four-color-active-indicator-two-color)}40%{border-top-color:var(--_four-color-active-indicator-two-color);border-right-color:var(--_four-color-active-indicator-two-color)}50%{border-top-color:var(--_four-color-active-indicator-three-color);border-right-color:var(--_four-color-active-indicator-three-color)}65%{border-top-color:var(--_four-color-active-indicator-three-color);border-right-color:var(--_four-color-active-indicator-three-color)}75%{border-top-color:var(--_four-color-active-indicator-four-color);border-right-color:var(--_four-color-active-indicator-four-color)}90%{border-top-color:var(--_four-color-active-indicator-four-color);border-right-color:var(--_four-color-active-indicator-four-color)}100%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}}
`;let p=class extends u{};p.styles=[g],p=i([o("md-circular-progress")],p);let m=class extends(s(d)){constructor(){super(...arguments),this.#t=[],this.#e=[],this.#r="Single select",this.#i="Search for a entity",this.#o=null,this.#s=!1,this.#a=!1,this.#c="",this.#n=!1,this.#l="",this.#h=!1,this.#d=!1,this.#u="Name",this.positioning="popover"}#g;get searchTerm(){return this.#g}set searchTerm(t){this.#g=t}#t;get suggestions(){return this.#t}set suggestions(t){this.#t=t}#e;get defaultSuggestions(){return this.#e}set defaultSuggestions(t){this.#e=t}#p;get menu(){return this.#p}set menu(t){this.#p=t}#m;get textfield(){return this.#m}set textfield(t){this.#m=t}#r;get label(){return this.#r}set label(t){this.#r=t}#i;get placeholder(){return this.#i}set placeholder(t){this.#i=t}#o;get selected(){return this.#o}set selected(t){this.#o=t}#s;get disabled(){return this.#s}set disabled(t){this.#s=t}#a;get noAsterisk(){return this.#a}set noAsterisk(t){this.#a=t}#c;get autocomplete(){return this.#c}set autocomplete(t){this.#c=t}#n;get spellcheck(){return this.#n}set spellcheck(t){this.#n=t}#l;get autocorrect(){return this.#l}set autocorrect(t){this.#l=t}#h;get error(){return this.#h}set error(t){this.#h=t}#f;get errorText(){return this.#f}set errorText(t){this.#f=t}#d;get required(){return this.#d}set required(t){this.#d=t}#v;get prefixText(){return this.#v}set prefixText(t){this.#v=t}#_;get suffixText(){return this.#_}set suffixText(t){this.#_=t}#x;get hasLeadingIcon(){return this.#x}set hasLeadingIcon(t){this.#x=t}#b;get hasTrailingIcon(){return this.#b}set hasTrailingIcon(t){this.#b=t}#y;get disableMenuOpenOnFocus(){return this.#y}set disableMenuOpenOnFocus(t){this.#y=t}#T;get supportingText(){return this.#T}set supportingText(t){this.#T=t}#$;get textDirection(){return this.#$}set textDirection(t){this.#$=t}#u;get pathToSelectedText(){return this.#u}set pathToSelectedText(t){this.#u=t}#k;get count(){return this.#k}set count(t){this.#k=t}async firstUpdated(){if(this.textfield&&this.required){const t=this.textfield?.checkValidity;this.textfield.checkValidity=()=>!!this.selected&&t.bind(this.textfield)}}update(t){t.has("positioning")&&"popover"===this.positioning&&!this.showPopover&&(this.positioning="fixed"),super.update(t)}setCustomValidity(t){this.textfield?.setCustomValidity(t)}async reset(){this.softReset(),this.selected=null,this.textfield&&(this.textfield.error=!1,this.textfield.errorText="",this.textfield.reset())}softReset(){this.searchTerm="",this.suggestions=[]}async select(){this.textfield?.select()}async focus(){this.textfield?.focus()}checkValidity(){return this.textfield?.checkValidity()&&this.customCheckValidity()}reportValidity(){return this.textfield?.reportValidity()&&this.customReportValidity()}customCheckValidity(){return this.errorText="Please fill out this field",!(!this.selected&&this.textfield?.value)&&(!this.required&&!this.selected||!!this.selected)}customReportValidity(){return this.customCheckValidity()?(this.error=!1,this.errorText=""):this.error=!0,!this.error}async setSelected(t){const e=this.selected;this.selected=t,this.selected&&(this.softReset(),setTimeout((()=>{this.reportValidity()}),0)),e?.Id!==this.selected?.Id&&this.dispatchEvent(new Event("selected"))}onInputChanged(t){console.log(t)}async showSuggestions(t,e){this.suggestions=t,this.count=e,await this.updateComplete,this.menu.show()}async#S(t){!t&&this.defaultSuggestions.length||this.menu.close(),this.setSelected(null),this.suggestions=t?[]:this.defaultSuggestions,this.count=t?0:this.defaultSuggestions.length,this.searchTerm=t,await this.updateComplete,this.onInputChanged(t)}static{this.styles=[r`
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
    </md-menu-item>`}renderSelectedLeadingInputSlot(t){}#w(){return e`<div slot="trailing-icon">
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
        .autocorrect=${this.autocorrect}
        .value=${this.selected?.[this.pathToSelectedText]||this.searchTerm||""}
        default-focus="0"
        @keydown=${t=>{this.suggestions.length>0&&("Enter"==t.key||"ArrowDown"==t.key||"ArrowUp"==t.key)&&(this.menu.open||this.menu.show(),t.stopPropagation(),this.menu?.activateNextItem()),"Tab"!=t.key&&"Escape"!=t.key||this.menu?.open&&this.menu.close()}}
        @input=${async t=>this.#S(t.target.value)}
        @focus=${()=>{this.selected?this.select():(!this.searchTerm&&this.defaultSuggestions&&(this.suggestions=this.defaultSuggestions),!this.searchTerm&&!this.suggestions.length||this.disableMenuOpenOnFocus||this.menu.show())}}
      >
        ${this.selected?this.renderSelectedLeadingInputSlot(this.selected):this.renderLeadingInputSlot()} ${this.#w()}
      </md-outlined-text-field>
      <md-menu
        suggestions
        @opening=${t=>a(this,t)}
        @opened=${t=>a(this,t)}
        @closing=${t=>a(this,t)}
        @closed=${t=>a(this,t)}
        .positioning=${this.positioning}
        id="menu"
        anchor="menu-anchor"
        anchor-corner="end-start"
        default-focus="list-root"
        skip-restore-focus
        @close-menu=${t=>{const e=t.detail.itemPath?.[0]??null;this.setSelected(e?.item)}}
      >
        ${this.searchTerm&&!this.isLoading?e`<div summary>Showing ${this.suggestions.length} of ${this.count} result${1===this.count?"":"s"} for '${this.searchTerm}'</div>`:""}
        ${c(this.suggestions,(t=>t?.Id),(t=>this.renderSuggestion(t)))}
        ${this.renderTrailingMenuSlot()}
      </md-menu>
      ${this.renderTrailingSlot()}
    `}};i([n()],m.prototype,"searchTerm",null),i([n()],m.prototype,"suggestions",null),i([n()],m.prototype,"defaultSuggestions",null),i([l("md-menu[suggestions]")],m.prototype,"menu",null),i([l("md-outlined-text-field")],m.prototype,"textfield",null),i([h({type:String})],m.prototype,"label",null),i([h({type:String})],m.prototype,"placeholder",null),i([h({type:Object})],m.prototype,"selected",null),i([h({type:Boolean})],m.prototype,"disabled",null),i([h({type:Boolean,attribute:"no-asterisk"})],m.prototype,"noAsterisk",null),i([h({reflect:!0,type:String})],m.prototype,"autocomplete",null),i([h({reflect:!0,type:Boolean})],m.prototype,"spellcheck",null),i([h({reflect:!0,type:String})],m.prototype,"autocorrect",null),i([h({type:Boolean})],m.prototype,"error",null),i([h({type:String})],m.prototype,"errorText",null),i([h({type:Boolean})],m.prototype,"required",null),i([h({type:String})],m.prototype,"prefixText",null),i([h({type:String})],m.prototype,"suffixText",null),i([h({type:Boolean})],m.prototype,"hasLeadingIcon",null),i([h({type:Boolean})],m.prototype,"hasTrailingIcon",null),i([h({type:Boolean,attribute:"disable-menu-open-on-focus"})],m.prototype,"disableMenuOpenOnFocus",null),i([h({type:String})],m.prototype,"supportingText",null),i([h({type:String})],m.prototype,"textDirection",null),i([h({type:String})],m.prototype,"pathToSelectedText",null),i([h()],m.prototype,"positioning",void 0),i([n()],m.prototype,"count",null),m=i([o("titanium-single-select-base")],m);export{m as T};
