import{z as t,x as r,i as e,_ as i,t as o,r as s,s as a,e as n,n as c}from"./f43924bd.js";import{c as l}from"./35db0734.js";import"./d8fb47ea.js";import"./3d226a42.js";import{L as d}from"./49ad9f2f.js";import{r as h}from"./f42dd0a8.js";class u extends t{renderIndicator(){return this.indeterminate?this.renderIndeterminateContainer():this.renderDeterminateContainer()}renderDeterminateContainer(){const t=100*(1-this.value/this.max);return r`
      <svg viewBox="0 0 4800 4800">
        <circle class="track" pathLength="100"></circle>
        <circle
          class="active-track"
          pathLength="100"
          stroke-dashoffset=${t}></circle>
      </svg>
    `}renderIndeterminateContainer(){return r` <div class="spinner">
      <div class="left">
        <div class="circle"></div>
      </div>
      <div class="right">
        <div class="circle"></div>
      </div>
    </div>`}}const g=e`:host{--_active-indicator-color: var(--md-circular-progress-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-width: var(--md-circular-progress-active-indicator-width, 10);--_four-color-active-indicator-four-color: var(--md-circular-progress-four-color-active-indicator-four-color, var(--md-sys-color-tertiary-container, #ffd8e4));--_four-color-active-indicator-one-color: var(--md-circular-progress-four-color-active-indicator-one-color, var(--md-sys-color-primary, #6750a4));--_four-color-active-indicator-three-color: var(--md-circular-progress-four-color-active-indicator-three-color, var(--md-sys-color-tertiary, #7d5260));--_four-color-active-indicator-two-color: var(--md-circular-progress-four-color-active-indicator-two-color, var(--md-sys-color-primary-container, #eaddff));--_size: var(--md-circular-progress-size, 48px);display:inline-flex;vertical-align:middle;width:var(--_size);height:var(--_size);position:relative;align-items:center;justify-content:center;contain:strict;content-visibility:auto}.progress{flex:1;align-self:stretch;margin:4px}.progress,.spinner,.left,.right,.circle,svg,.track,.active-track{position:absolute;inset:0}svg{transform:rotate(-90deg)}circle{cx:50%;cy:50%;r:calc(50%*(1 - var(--_active-indicator-width)/100));stroke-width:calc(var(--_active-indicator-width)*1%);stroke-dasharray:100;fill:rgba(0,0,0,0)}.active-track{transition:stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);stroke:var(--_active-indicator-color)}.track{stroke:rgba(0,0,0,0)}.progress.indeterminate{animation:linear infinite linear-rotate;animation-duration:1568.2352941176ms}.spinner{animation:infinite both rotate-arc;animation-duration:5332ms;animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.left{overflow:hidden;inset:0 50% 0 0}.right{overflow:hidden;inset:0 0 0 50%}.circle{box-sizing:border-box;border-radius:50%;border:solid calc(var(--_active-indicator-width)/100*(var(--_size) - 8px));border-color:var(--_active-indicator-color) var(--_active-indicator-color) rgba(0,0,0,0) rgba(0,0,0,0);animation:expand-arc;animation-iteration-count:infinite;animation-fill-mode:both;animation-duration:1333ms,5332ms;animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.four-color .circle{animation-name:expand-arc,four-color}.left .circle{rotate:135deg;inset:0 -100% 0 0}.right .circle{rotate:100deg;inset:0 0 0 -100%;animation-delay:-666.5ms,0ms}@media(forced-colors: active){.active-track{stroke:CanvasText}.circle{border-color:CanvasText CanvasText Canvas Canvas}}@keyframes expand-arc{0%{transform:rotate(265deg)}50%{transform:rotate(130deg)}100%{transform:rotate(265deg)}}@keyframes rotate-arc{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes linear-rotate{to{transform:rotate(360deg)}}@keyframes four-color{0%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}15%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}25%{border-top-color:var(--_four-color-active-indicator-two-color);border-right-color:var(--_four-color-active-indicator-two-color)}40%{border-top-color:var(--_four-color-active-indicator-two-color);border-right-color:var(--_four-color-active-indicator-two-color)}50%{border-top-color:var(--_four-color-active-indicator-three-color);border-right-color:var(--_four-color-active-indicator-three-color)}65%{border-top-color:var(--_four-color-active-indicator-three-color);border-right-color:var(--_four-color-active-indicator-three-color)}75%{border-top-color:var(--_four-color-active-indicator-four-color);border-right-color:var(--_four-color-active-indicator-four-color)}90%{border-top-color:var(--_four-color-active-indicator-four-color);border-right-color:var(--_four-color-active-indicator-four-color)}100%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}}
`;let m=class extends u{};m.styles=[g],m=i([o("md-circular-progress")],m);let p=class extends(d(a)){constructor(){super(...arguments),this.#t=[],this.#r=[],this.#e="Single select",this.#i="Search for a entity",this.#o=null,this.#s=!1,this.#a=!1,this.#n=!1,this.#c="Name",this.positioning="popover"}#l;get searchTerm(){return this.#l}set searchTerm(t){this.#l=t}#t;get suggestions(){return this.#t}set suggestions(t){this.#t=t}#r;get defaultSuggestions(){return this.#r}set defaultSuggestions(t){this.#r=t}#d;get menu(){return this.#d}set menu(t){this.#d=t}#h;get textfield(){return this.#h}set textfield(t){this.#h=t}#e;get label(){return this.#e}set label(t){this.#e=t}#i;get placeholder(){return this.#i}set placeholder(t){this.#i=t}#o;get selected(){return this.#o}set selected(t){this.#o=t}#s;get disabled(){return this.#s}set disabled(t){this.#s=t}#a;get error(){return this.#a}set error(t){this.#a=t}#u;get errorText(){return this.#u}set errorText(t){this.#u=t}#n;get required(){return this.#n}set required(t){this.#n=t}#g;get prefixText(){return this.#g}set prefixText(t){this.#g=t}#m;get suffixText(){return this.#m}set suffixText(t){this.#m=t}#p;get hasLeadingIcon(){return this.#p}set hasLeadingIcon(t){this.#p=t}#f;get hasTrailingIcon(){return this.#f}set hasTrailingIcon(t){this.#f=t}#v;get supportingText(){return this.#v}set supportingText(t){this.#v=t}#x;get textDirection(){return this.#x}set textDirection(t){this.#x=t}#c;get pathToSelectedText(){return this.#c}set pathToSelectedText(t){this.#c=t}#_;get count(){return this.#_}set count(t){this.#_=t}async firstUpdated(){if(this.textfield&&this.required){const t=this.textfield?.checkValidity;this.textfield.checkValidity=()=>!!this.selected&&t.bind(this.textfield)}}update(t){t.has("positioning")&&"popover"===this.positioning&&!this.showPopover&&(this.positioning="fixed"),super.update(t)}setCustomValidity(t){this.textfield?.setCustomValidity(t)}async reset(){this.softReset(),this.selected=null,this.textfield&&(this.textfield.error=!1,this.textfield.errorText="",this.textfield.reset())}softReset(){this.searchTerm="",this.suggestions=[]}async select(){this.textfield?.select()}async focus(){this.textfield?.focus()}checkValidity(){return this.textfield?.checkValidity()&&this.customCheckValidity()}reportValidity(){return this.textfield?.reportValidity()&&this.customReportValidity()}customCheckValidity(){return this.errorText="Please fill out this field",!(!this.selected&&this.textfield?.value)&&(!this.required&&!this.selected||!!this.selected)}customReportValidity(){return this.customCheckValidity()?(this.error=!1,this.errorText=""):this.error=!0,!this.error}async setSelected(t){const r=this.selected;this.selected=t,this.selected&&(this.softReset(),setTimeout((()=>{this.reportValidity()}),0)),r?.Id!==this.selected?.Id&&this.dispatchEvent(new Event("selected"))}onInputChanged(t){console.log(t)}async showSuggestions(t,r){this.suggestions=t,this.count=r,await this.updateComplete,this.menu.show()}async#b(t){!t&&this.defaultSuggestions.length||this.menu.close(),this.setSelected(null),this.suggestions=t?[]:this.defaultSuggestions,this.count=t?0:this.defaultSuggestions.length,this.searchTerm=t,await this.updateComplete,this.onInputChanged(t)}static{this.styles=[e`
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
    `]}renderSuggestion(t){return r`<md-menu-item .item=${t} ?selected=${this.selected?.Id===t.Id}>
      <slot name="trailing-icon" slot="trailing-icon"></slot>
      <span slot="headline">${t.Id}</span>
    </md-menu-item>`}renderSelectedLeadingInputSlot(t){}#y(){return r`<div slot="trailing-icon">
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
    </div>`}renderTrailingInputSlot(){return r``}renderLeadingInputSlot(){return r`<slot name="leading-icon" slot="leading-icon"><md-icon>search</md-icon></slot>`}renderTrailingSlot(){return r``}renderTrailingMenuSlot(){return r``}render(){return r`
      <md-outlined-text-field
        id="menu-anchor"
        aria-haspopup="true"
        aria-controls="menu"
        .disabled=${this.disabled}
        .error=${this.error}
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
        .value=${this.selected?.[this.pathToSelectedText]||this.searchTerm||""}
        default-focus="0"
        @keydown=${t=>{this.suggestions.length>0&&("Enter"==t.key||"ArrowDown"==t.key||"ArrowUp"==t.key)&&(t.stopPropagation(),this.menu?.activateNextItem()),"Tab"!=t.key&&"Escape"!=t.key||this.menu?.open&&this.menu.close()}}
        @input=${async t=>this.#b(t.target.value)}
        @focus=${()=>{this.selected?this.select():(!this.searchTerm&&this.defaultSuggestions&&(this.suggestions=this.defaultSuggestions),(this.searchTerm||this.suggestions.length)&&this.menu.show())}}
      >
        ${this.selected?this.renderSelectedLeadingInputSlot(this.selected):this.renderLeadingInputSlot()} ${this.#y()}
      </md-outlined-text-field>
      <md-menu
        suggestions
        @opening=${t=>h(this,t)}
        @opened=${t=>h(this,t)}
        @closing=${t=>h(this,t)}
        @closed=${t=>h(this,t)}
        .positioning=${this.positioning}
        id="menu"
        anchor="menu-anchor"
        anchor-corner="end-start"
        default-focus="list-root"
        skip-restore-focus
        @close-menu=${t=>{const r=t.detail.itemPath?.[0]??null;this.setSelected(r?.item)}}
      >
        ${this.searchTerm&&!this.isLoading?r`<div summary>Showing ${this.suggestions.length} of ${this.count} result${1===this.count?"":"s"} for '${this.searchTerm}'</div>`:""}
        ${l(this.suggestions,(t=>t?.Id),(t=>this.renderSuggestion(t)))}
        ${this.renderTrailingMenuSlot()}
      </md-menu>
      ${this.renderTrailingSlot()}
    `}};i([s()],p.prototype,"searchTerm",null),i([s()],p.prototype,"suggestions",null),i([s()],p.prototype,"defaultSuggestions",null),i([n("md-menu[suggestions]")],p.prototype,"menu",null),i([n("md-outlined-text-field")],p.prototype,"textfield",null),i([c({type:String})],p.prototype,"label",null),i([c({type:String})],p.prototype,"placeholder",null),i([c({type:Object})],p.prototype,"selected",null),i([c({type:Boolean})],p.prototype,"disabled",null),i([c({type:Boolean})],p.prototype,"error",null),i([c({type:String})],p.prototype,"errorText",null),i([c({type:Boolean})],p.prototype,"required",null),i([c({type:String})],p.prototype,"prefixText",null),i([c({type:String})],p.prototype,"suffixText",null),i([c({type:Boolean})],p.prototype,"hasLeadingIcon",null),i([c({type:Boolean})],p.prototype,"hasTrailingIcon",null),i([c({type:String})],p.prototype,"supportingText",null),i([c({type:String})],p.prototype,"textDirection",null),i([c({type:String})],p.prototype,"pathToSelectedText",null),i([c()],p.prototype,"positioning",void 0),i([s()],p.prototype,"count",null),p=i([o("titanium-single-select-base")],p);export{p as T};
