import{i as t,g as e,b as i,A as s,c as o,y as a,K as n,_ as r,d as l,r as c,n as h,e as d,t as u,S as m,a4 as p}from"./B9KYe1CG.js";import{S as g}from"./DryU-tS1.js";import"./_sPLC3CH.js";import"./-AObJhKa.js";import"./DJDEYoX8.js";import{e as v}from"./CUwIGwiH.js";import{D as f}from"./DTS7lhmZ.js";import{w as b,s as x}from"./DvsoDDpw.js";import"./C7xTBR8p.js";import"./ByCLBcve.js";let y=class extends t{#t=!1;get isLoading(){return this.#t}set isLoading(t){this.#t=t}#e="Multi select";get label(){return this.#e}set label(t){this.#e=t}#i="Select items";get placeholder(){return this.#i}set placeholder(t){this.#i=t}#s="Search";get searchPlaceholder(){return this.#s}set searchPlaceholder(t){this.#s=t}#o=[];get selected(){return this.#o}set selected(t){this.#o=t}#a=[];get items(){return this.#a}set items(t){this.#a=t}#n=[];get sections(){return this.#n}set sections(t){this.#n=t}#r="Name";get pathToSelectedText(){return this.#r}set pathToSelectedText(t){this.#r=t}#l="";get pathToIcon(){return this.#l}set pathToIcon(t){this.#l=t}#c=[];get searchKeys(){return this.#c}set searchKeys(t){this.#c=t}#h=0;get maxSelected(){return this.#h}set maxSelected(t){this.#h=t}#d=!1;get required(){return this.#d}set required(t){this.#d=t}#u=!1;get disabled(){return this.#u}set disabled(t){this.#u=t}#m=!1;get error(){return this.#m}set error(t){this.#m=t}#p="Please select at least one item";get errorText(){return this.#p}set errorText(t){this.#p=t}#g="";get supportingText(){return this.#g}set supportingText(t){this.#g=t}#v=!1;get noAsterisk(){return this.#v}set noAsterisk(t){this.#v=t}#f=!1;get hasLeadingIcon(){return this.#f}set hasLeadingIcon(t){this.#f=t}#b="No items";get noItemsText(){return this.#b}set noItemsText(t){this.#b=t}#x="No matches found";get noResultsText(){return this.#x}set noResultsText(t){this.#x=t}#y=!1;get disableClearAll(){return this.#y}set disableClearAll(t){this.#y=t}#w="popover";get positioning(){return this.#w}set positioning(t){this.#w=t}#_=!1;get matchInputWidth(){return this.#_}set matchInputWidth(t){this.#_=t}#$=!1;get menuOpen(){return this.#$}set menuOpen(t){this.#$=t}#k=!1;get opensUp(){return this.#k}set opensUp(t){this.#k=t}#S="";get searchTerm(){return this.#S}set searchTerm(t){this.#S=t}#I=[];get suggestions(){return this.#I}set suggestions(t){this.#I=t}#T=0;get count(){return this.#T}set count(t){this.#T=t}#A;get menuWidth(){return this.#A}set menuWidth(t){this.#A=t}#C;get menuMaxHeight(){return this.#C}set menuMaxHeight(t){this.#C=t}#N;get menu(){return this.#N}set menu(t){this.#N=t}#M;get field(){return this.#M}set field(t){this.#M=t}#z;get searchInput(){return this.#z}set searchInput(t){this.#z=t}#q=null;#B=new f(t=>this.#E(t));get isOpen(){return this.menuOpen}get isAtMaxSelected(){return this.maxSelected>0&&this.selected.length>=this.maxSelected}get visibleItems(){return this.searchTerm?this.suggestions:this.sections.length?this.sections.flatMap(t=>t.items):this.items}get searchPool(){if(this.items.length)return this.items;const t=new Set;return this.sections.flatMap(t=>t.items).filter(e=>{const i=this.getItemKey(e);return!t.has(i)&&(t.add(i),!0)})}connectedCallback(){super.connectedCallback(),this.matchInputWidth&&this.#L()}disconnectedCallback(){super.disconnectedCallback(),this.#P()}update(t){t.has("positioning")&&"popover"===this.positioning&&!this.showPopover&&(this.positioning="fixed"),t.has("matchInputWidth")&&(this.matchInputWidth?this.#L():this.#P()),super.update(t)}updated(t){const e=t;this.menuOpen&&["suggestions","searchTerm","items","sections","selected","isLoading"].some(t=>e.has(t))&&this.menu?.reposition()}#L(){this.#q?.disconnect(),this.#q=new ResizeObserver(t=>{for(const e of t)this.menuWidth=e.contentRect.width}),this.#q.observe(this)}#P(){this.#q?.disconnect(),this.#q=null,this.menuWidth=void 0}async open(){this.disabled||(await b(this),this.#D(),await this.updateComplete,await x(this.menu))}#D(){const t=this.field?.getBoundingClientRect();if(!t)return;const e=window.innerHeight-t.bottom,i=t.top;this.opensUp=e<240&&i>e,this.menuMaxHeight=Math.max(0,Math.floor((this.opensUp?i:e)-16))}#R(){const t=[];return this.matchInputWidth&&this.menuWidth&&t.push(`min-width: ${this.menuWidth}px`,`max-width: ${this.menuWidth}px`),void 0!==this.menuMaxHeight&&t.push(`max-height: min(var(--titanium-multi-select-menu-max-height, 460px), ${this.menuMaxHeight}px)`),t.join("; ")}close(){this.menu?.close()}toggleMenu(){this.menuOpen?this.close():this.open()}async focus(){this.field?.focus()}isSelected(t){const e=this.getItemKey(t);return this.selected.some(t=>this.getItemKey(t)===e)}selectItem(t){this.isSelected(t)||this.isAtMaxSelected||(this.selected=[...this.selected,t],this.#W())}deselectItem(t){const e=this.getItemKey(t);this.isSelected(t)&&(this.selected=this.selected.filter(t=>this.getItemKey(t)!==e),this.#W())}toggleItem(t){this.isSelected(t)?this.deselectItem(t):this.selectItem(t)}clear(){this.selected.length&&(this.selected=[],this.#W())}reset(){this.selected=[],this.softReset(),this.error=!1,this.field?.reset()}softReset(){this.searchTerm="",this.suggestions=[],this.count=0}get hasError(){return this.error||!!this.field?.error}checkValidity(){return this.field?.checkValidity()??!0}reportValidity(){return this.field?.reportValidity()??!0}#W(){this.field?.error&&this.reportValidity(),this.dispatchEvent(new Event("selected-changed",{composed:!0}))}onInputChanged(t){this.#B.debounce(t)}async showSuggestions(t,e){this.suggestions=t,this.count=e,await this.updateComplete,this.shadowRoot?.querySelector("md-menu-item")?.scrollIntoView({block:"nearest"})}async#E(t){if(!this.searchTerm||!t)return;const e=this.searchKeys.length?this.searchKeys:[this.pathToSelectedText],i=new v(this.searchPool,{includeScore:!0,keys:e,shouldSort:!0,ignoreLocation:!0,threshold:.3}).search(t).map(t=>t.item);this.showSuggestions(i,i.length)}async#j(t){this.searchTerm=t,this.suggestions=[],this.count=0,await this.updateComplete,this.onInputChanged(t)}getItemKey(t){return String(t?.Id??this.getItemText(t))}getItemText(t){return String(t?.[this.pathToSelectedText]??"")}getItemIcon(t){return this.pathToIcon?String(t?.[this.pathToIcon]??"").trim():""}#F(t){for(const e of t.composedPath())if(e instanceof HTMLElement&&e.hasAttribute("md-menu-item"))return e.hasAttribute("disabled")?null:e;return null}#K(t){if(!this.disabled&&t.target===this.field){if("ArrowDown"===t.key||"Enter"===t.key||" "===t.key)return t.preventDefault(),void this.open();if("Backspace"===t.key){const e=this.selected.at(-1);e&&(t.preventDefault(),this.deselectItem(e))}}}#O(t){switch(t.stopPropagation(),t.key){case"ArrowDown":t.preventDefault(),this.opensUp||this.menu?.activateNextItem();break;case"ArrowUp":t.preventDefault(),this.opensUp?this.#H():this.menu?.activatePreviousItem();break;case"Enter":{t.preventDefault();const e=this.visibleItems.at(0);e&&this.toggleItem(e);break}case"Escape":t.preventDefault(),this.close(),this.focus();break;case"Tab":this.close();break;case"Backspace":{if(this.searchTerm)break;const t=this.selected.at(-1);t&&this.deselectItem(t);break}}}#U(t){const e=this.#F(t);e?.item&&(this.toggleItem(e.item),this.searchInput?.focus())}#V(t){const e=this.#F(t);if(!e)return;if("Enter"===t.key||" "===t.key)return t.preventDefault(),void(e.item&&this.toggleItem(e.item));(this.opensUp?"ArrowDown"===t.key&&this.#G().at(-1)===e:"ArrowUp"===t.key&&this.menu?.items[0]===e)&&(t.preventDefault(),t.stopPropagation(),this.searchInput?.focus())}#G(){return(this.menu?.items??[]).filter(t=>!t.disabled)}#H(){(this.menu?.items??[]).forEach(t=>t.tabIndex=-1);const t=this.#G().at(-1);t&&(t.tabIndex=0,t.focus())}static{this.styles=[e,i`
      :host {
        display: block;
        position: relative;
        width: 100%;

        --md-filled-field-container-shape: 16px;

        --md-filled-field-active-indicator-height: 0;
        --md-filled-field-error-active-indicator-height: 0;
        --md-filled-field-hover-active-indicator-height: 0;
        --md-filled-field-focus-active-indicator-height: 0;
        --md-filled-field-disabled-active-indicator-height: 0;

        --md-menu-container-shape: 16px;
        --md-menu-top-space: 0;
      }

      titanium-filled-input-validator {
        display: block;
        width: 100%;
        cursor: pointer;
        outline: none;
        --md-filled-field-with-label-bottom-space: 12px;
      }

      :host([disabled]) titanium-filled-input-validator {
        cursor: default;
      }

      chips-container {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px;
        margin-top: 6px;
        min-height: 32px;
      }

      span[placeholder] {
        font-size: 14px;
        line-height: 32px;
        color: var(--md-sys-color-on-surface-variant);
      }

      div[trailing] {
        display: flex;
        align-items: center;
        gap: 4px;
      }

      md-circular-progress {
        --md-circular-progress-size: 24px;
      }

      md-icon-button {
        --md-icon-button-icon-size: 20px;
        --md-icon-button-state-layer-height: 32px;
        --md-icon-button-state-layer-width: 32px;
      }

      md-menu {
        min-width: 280px;
        max-height: var(--titanium-multi-select-menu-max-height, 460px);
      }

      md-menu-item,
      div[section-header] {
        /* Keyboard navigation scrolls items into view — leave room for the sticky search row. */
        scroll-margin-top: var(--titanium-multi-select-search-height, 52px);
      }

      md-menu-item {
        min-width: 280px;
      }

      search-container {
        display: flex;
        align-items: center;
        gap: 12px;
        box-sizing: border-box;
        height: var(--titanium-multi-select-search-height, 52px);
        padding: 0 16px;

        position: sticky;
        top: 0;
        z-index: 2;

        background-color: var(--md-menu-container-color, var(--md-sys-color-surface-container));
        border-bottom: 1px solid var(--md-sys-color-outline-variant);
      }

      search-container md-icon {
        --md-icon-size: 20px;
        color: var(--md-sys-color-on-surface-variant);
      }

      /* Opening upward: the search row sits at the bottom of the popover, next to the field. */
      :host([opens-up]) {
        --md-menu-top-space: 8px;
        --md-menu-bottom-space: 0;
      }

      :host([opens-up]) search-container {
        top: auto;
        bottom: 0;
        border-bottom: none;
        border-top: 1px solid var(--md-sys-color-outline-variant);
      }

      :host([opens-up]) div[section-header] {
        top: 0;
      }

      :host([opens-up]) md-menu-item,
      :host([opens-up]) div[section-header] {
        scroll-margin-top: 0;
        scroll-margin-bottom: var(--titanium-multi-select-search-height, 52px);
      }

      input[search] {
        flex: 1 1 auto;
        min-width: 0;
        appearance: none;
        border: none;
        outline: none;
        background: none;
        padding: 0;
        margin: 0;

        /* md-menu sets user-select: none on its surface. */
        user-select: text;

        font-family: var(--titanium-styles-p-font-family, Roboto, Noto, sans-serif);
        font-size: 14px;
        line-height: 20px;
        color: var(--md-sys-color-on-surface);
      }

      input[search]::placeholder {
        color: var(--md-sys-color-on-surface-variant);
      }

      input[search]::-webkit-search-cancel-button {
        display: none;
      }

      div[section-header] {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 8px 16px;

        position: sticky;
        top: var(--titanium-multi-select-search-height, 52px);
        z-index: 1;

        background-color: var(--md-sys-color-surface-container-high);
        color: var(--md-sys-color-on-surface);
      }

      div[section-header] md-icon {
        --md-icon-size: 18px;
      }

      div[section-header] [headline] {
        font-size: 13px;
        font-weight: 500;
        line-height: 18px;
      }

      div[section-header] [supporting-text] {
        font-size: 12px;
        line-height: 16px;
        color: var(--md-sys-color-on-surface-variant);
      }

      div[summary],
      div[empty] {
        font-family: var(--titanium-styles-p-font-family, Roboto, Noto, sans-serif);
        font-size: 13px;
        line-height: 18px;
        padding: 12px 16px;
        color: var(--md-sys-color-on-surface-variant);
      }

      [hidden] {
        display: none !important;
      }
    `]}renderChip(t){const e=this.getItemIcon(t);return o`<titanium-chip input-chip ?disabled=${this.disabled} label=${this.getItemText(t)} @remove=${()=>this.deselectItem(t)}>
      ${e?o`<md-icon slot="icon">${e}</md-icon>`:s}
    </titanium-chip>`}renderSuggestion(t){const e=this.isSelected(t),i=this.getItemIcon(t);return o`<md-menu-item keep-open .item=${t} ?selected=${e} ?disabled=${!e&&this.isAtMaxSelected}>
      ${i?o`<md-icon slot="start">${i}</md-icon>`:s}
      <span slot="headline" ellipsis>${this.getItemText(t)}</span>
      ${e?o`<md-icon slot="end">check</md-icon>`:s}
    </md-menu-item>`}renderSectionHeader(t){return o`<div section-header>
      ${t.icon?o`<md-icon>${t.icon}</md-icon>`:s}
      <div>
        <div headline>${t.headline}</div>
        ${t.supportingText?o`<div supporting-text>${t.supportingText}</div>`:s}
      </div>
    </div>`}renderTrailingMenuSlot(){return s}#J(){return this.searchTerm?o`${this.isLoading||this.suggestions.length?o`<div summary>Showing ${this.suggestions.length} of ${this.count} result${1===this.count?"":"s"} for '${this.searchTerm}'</div>`:o`<div empty>${this.noResultsText}</div>`}
      ${a(this.suggestions,t=>this.getItemKey(t),t=>this.renderSuggestion(t))}`:this.sections.length?a(this.sections,t=>t.key,t=>o`${this.renderSectionHeader(t)}
          ${a(t.items,t=>this.getItemKey(t),t=>this.renderSuggestion(t))}`):this.items.length?a(this.items,t=>this.getItemKey(t),t=>this.renderSuggestion(t)):o`<div empty>${this.noItemsText}</div>`}render(){return o`
      <titanium-filled-input-validator
        id="field"
        role="combobox"
        aria-haspopup="listbox"
        aria-controls="menu"
        aria-expanded=${this.menuOpen?"true":"false"}
        tabindex=${this.disabled?"-1":"0"}
        populated
        ?has-start=${this.hasLeadingIcon}
        has-end
        ?disabled=${this.disabled}
        ?error=${this.error}
        ?required=${this.required}
        ?no-asterisk=${this.noAsterisk}
        .label=${this.label}
        .errorText=${this.errorText}
        .supportingText=${this.supportingText}
        .evaluator=${()=>!this.required||this.selected.length>0}
        @click=${()=>this.toggleMenu()}
        @keydown=${this.#K}
      >
        ${this.hasLeadingIcon?o`<slot name="leading-icon" slot="start"></slot>`:s}
        <chips-container>
          ${this.selected.length?a(this.selected,t=>this.getItemKey(t),t=>this.renderChip(t)):o`<span placeholder>${this.placeholder}</span>`}
        </chips-container>
        <div slot="end" trailing>
          ${this.isLoading?o`<md-circular-progress indeterminate></md-circular-progress>`:s}
          ${!this.selected.length||this.disableClearAll||this.disabled?s:o`<md-icon-button
                title="Clear selection"
                @click=${t=>{t.preventDefault(),t.stopPropagation(),this.clear(),this.focus()}}
              >
                <md-icon>close</md-icon>
              </md-icon-button>`}
          <md-icon>${this.menuOpen?"arrow_drop_up":"arrow_drop_down"}</md-icon>
        </div>
      </titanium-filled-input-validator>

      <md-menu
        part="menu"
        id="menu"
        anchor="field"
        anchor-corner=${this.opensUp?"start-start":"end-start"}
        menu-corner=${this.opensUp?"end-start":"start-start"}
        no-vertical-flip
        default-focus="none"
        no-navigation-wrap
        stay-open-on-focusout
        skip-restore-focus
        .positioning=${this.positioning}
        style=${this.#R()}
        @click=${this.#U}
        @keydown=${this.#V}
        @opening=${async t=>{this.menuOpen=!0,n(this,t),await this.updateComplete,this.searchInput?.dispatchEvent(new Event("deactivate-typeahead",{bubbles:!0,composed:!0})),this.searchInput?.focus({preventScroll:!0})}}
        @opened=${t=>n(this,t)}
        @closing=${t=>{this.menuOpen=!1,this.softReset(),n(this,t)}}
        @closed=${t=>{this.field?.error&&this.reportValidity(),n(this,t)}}
      >
        ${this.opensUp?s:this.#Q()} ${this.#J()} ${this.renderTrailingMenuSlot()}
        ${this.opensUp?this.#Q():s}
      </md-menu>
    `}#Q(){return o`<search-container>
      <md-icon>search</md-icon>
      <input
        search
        id="search"
        type="search"
        autocomplete="off"
        spellcheck="false"
        aria-label=${this.searchPlaceholder}
        placeholder=${this.searchPlaceholder}
        .value=${this.searchTerm}
        @input=${t=>this.#j(t.target.value)}
        @keydown=${this.#O}
      />
      ${this.isLoading?o`<md-circular-progress indeterminate></md-circular-progress>`:s}
      ${this.searchTerm&&!this.isLoading?o`<md-icon-button
            title="Clear search"
            @click=${()=>{this.#j(""),this.searchInput?.focus()}}
          >
            <md-icon>close</md-icon>
          </md-icon-button>`:s}
    </search-container>`}};r([l("trackLoadingPromise"),c()],y.prototype,"isLoading",null),r([h({type:String})],y.prototype,"label",null),r([h({type:String})],y.prototype,"placeholder",null),r([h({type:String,attribute:"search-placeholder"})],y.prototype,"searchPlaceholder",null),r([h({type:Array})],y.prototype,"selected",null),r([h({type:Array})],y.prototype,"items",null),r([h({type:Array})],y.prototype,"sections",null),r([h({type:String})],y.prototype,"pathToSelectedText",null),r([h({type:String})],y.prototype,"pathToIcon",null),r([h({type:Array})],y.prototype,"searchKeys",null),r([h({type:Number,attribute:"max-selected"})],y.prototype,"maxSelected",null),r([h({type:Boolean})],y.prototype,"required",null),r([h({type:Boolean,reflect:!0})],y.prototype,"disabled",null),r([h({type:Boolean})],y.prototype,"error",null),r([h({type:String})],y.prototype,"errorText",null),r([h({type:String})],y.prototype,"supportingText",null),r([h({type:Boolean,attribute:"no-asterisk"})],y.prototype,"noAsterisk",null),r([h({type:Boolean,attribute:"has-leading-icon"})],y.prototype,"hasLeadingIcon",null),r([h({type:String,attribute:"no-items-text"})],y.prototype,"noItemsText",null),r([h({type:String,attribute:"no-results-text"})],y.prototype,"noResultsText",null),r([h({type:Boolean,attribute:"disable-clear-all"})],y.prototype,"disableClearAll",null),r([h()],y.prototype,"positioning",null),r([h({type:Boolean,attribute:"match-input-width"})],y.prototype,"matchInputWidth",null),r([h({type:Boolean,attribute:"menu-open",reflect:!0})],y.prototype,"menuOpen",null),r([h({type:Boolean,attribute:"opens-up",reflect:!0})],y.prototype,"opensUp",null),r([c()],y.prototype,"searchTerm",null),r([c()],y.prototype,"suggestions",null),r([c()],y.prototype,"count",null),r([c()],y.prototype,"menuWidth",null),r([c()],y.prototype,"menuMaxHeight",null),r([d("md-menu")],y.prototype,"menu",null),r([d("titanium-filled-input-validator")],y.prototype,"field",null),r([d("input[search]")],y.prototype,"searchInput",null),y=r([u("titanium-multi-select-base")],y);const w=["input","change","selected","selected-changed"];function _(t){return t instanceof Element&&"hasError"in t&&"function"==typeof t.checkValidity&&"function"==typeof t.reportValidity}class ${#Y;#X;#Z=null;constructor(t,e={}){this.#Y=t,this.#X=e.events??w,t.addController(this)}hostConnected(){this.#Z=this.#Y.renderRoot??this.#Y;for(const t of this.#X)this.#Z.addEventListener(t,this.#tt,{capture:!0})}hostDisconnected(){for(const t of this.#X)this.#Z?.removeEventListener(t,this.#tt,{capture:!0});this.#Z=null}#tt=t=>{const e=this.#et(t);e&&setTimeout(()=>{e.hasError&&e.checkValidity()&&e.reportValidity()})};#et(t){let e=null;for(const i of t.composedPath()){if(i===this.#Z)break;_(i)&&(e=i)}return e}}const k=[{Id:"walking",Name:"Walking",Icon:"directions_walk"},{Id:"running",Name:"Running",Icon:"directions_run"},{Id:"cycling",Name:"Cycling",Icon:"directions_bike"},{Id:"swimming",Name:"Swimming",Icon:"pool"},{Id:"weights",Name:"Weight training",Icon:"fitness_center"},{Id:"yoga",Name:"Yoga",Icon:"self_improvement"},{Id:"hiking",Name:"Hiking",Icon:"hiking"},{Id:"rowing",Name:"Rowing",Icon:"rowing"},{Id:"skiing",Name:"Skiing",Icon:"downhill_skiing"},{Id:"climbing",Name:"Climbing",Icon:"landscape"}];let S=class extends y{#e="Activities";get label(){return this.#e}set label(t){this.#e=t}#i="Select activities";get placeholder(){return this.#i}set placeholder(t){this.#i=t}#s="Search activities";get searchPlaceholder(){return this.#s}set searchPlaceholder(t){this.#s=t}#l="Icon";get pathToIcon(){return this.#l}set pathToIcon(t){this.#l=t}#it=[];get activities(){return this.#it}set activities(t){this.#it=t}update(t){t.has("activities")&&(this.items=this.activities),super.update(t)}renderTrailingMenuSlot(){return!this.searchTerm&&this.activities.length?o`<div style="padding: 8px 16px; font-size: 12px; color: var(--md-sys-color-on-surface-variant)">
        ${this.activities.length} activities available
      </div>`:s}};r([h({type:String})],S.prototype,"label",null),r([h({type:String})],S.prototype,"placeholder",null),r([h({type:String})],S.prototype,"searchPlaceholder",null),r([h({type:String})],S.prototype,"pathToIcon",null),r([h({type:Array})],S.prototype,"activities",null),S=r([u("activity-multi-select")],S);const I=["Aardvark","Badger","Capybara","Dingo","Echidna","Ferret","Gibbon","Hedgehog","Ibex","Jackal","Kestrel","Lemur","Marmot","Narwhal","Ocelot","Pangolin","Quokka","Raccoon","Serval","Tapir"].map((t,e)=>({Id:e+1,Name:t}));let T=class extends t{constructor(){super(...arguments),this.#u=!1,this.#st=[],this.#ot=[],this.liveValidation=new $(this)}#u;get disabled(){return this.#u}set disabled(t){this.#u=t}#st;get selectedAnimals(){return this.#st}set selectedAnimals(t){this.#st=t}#ot;get selectedActivities(){return this.#ot}set selectedActivities(t){this.#ot=t}#at;get requiredSelect(){return this.#at}set requiredSelect(t){this.#at=t}#nt;get dialog(){return this.#nt}set dialog(t){this.#nt=t}#rt;get dialogFields(){return this.#rt}set dialogFields(t){this.#rt=t}#lt(){[...this.dialogFields].map(t=>t.reportValidity()).every(Boolean)&&(this.dialog.close(),this.dispatchEvent(new m("Saved")))}async#ct(){this.dialogFields.forEach(t=>t.reset()),await this.dialog.show()}static{this.styles=[g,i`
      titanium-multi-select-base,
      activity-multi-select {
        max-width: 480px;
      }

      form[dialog-form] {
        display: grid;
        gap: 16px;
        min-width: min(420px, 80vw);
      }

      form[dialog-form] titanium-multi-select-base {
        max-width: none;
      }

      p[selection] {
        margin: 12px 0 0 0;
        font-size: 13px;
        color: var(--md-sys-color-on-surface-variant);
      }
    `]}render(){return o`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium multi select base" level1Href="/titanium-multi-select-base" sticky-top>
          </leavitt-app-navigation-header>
          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Titanium multi select base" className="TitaniumMultiSelectBase"></story-header>
            <p>
              Selected items are shown as chips inside the field. The search input lives in the popover directly above the selectable items, so the list filters
              without ever leaving the popover.
            </p>

            <div>
              <h1>Direct use — local search</h1>
              <p>A flat list of items searched locally with fuse.js. The popover width follows the field with <code>match-input-width</code>.</p>
              <titanium-multi-select-base
                match-input-width
                label="Animals"
                placeholder="Select animals"
                search-placeholder="Search animals"
                supportingText="Search runs over every item"
                .items=${I}
                .selected=${this.selectedAnimals}
                ?disabled=${this.disabled}
                @selected-changed=${t=>this.selectedAnimals=t.target.selected}
              ></titanium-multi-select-base>
              <p selection>${this.selectedAnimals.length?this.selectedAnimals.map(t=>t.Name).join(", "):"Nothing selected"}</p>
            </div>

            <div>
              <h1>Subclass — icons and trailing content</h1>
              <p>
                <code>activity-multi-select</code> extends <code>TitaniumMultiSelectBase</code>. It sets default labels, wires up its own
                <code>activities</code> property, and overrides <code>renderTrailingMenuSlot()</code>. Copy this pattern for your own domain selects.
              </p>
              <activity-multi-select
                match-input-width
                has-leading-icon
                .activities=${k}
                .selected=${this.selectedActivities}
                ?disabled=${this.disabled}
                @selected-changed=${t=>this.selectedActivities=t.target.selected}
              >
                <md-icon slot="leading-icon">exercise</md-icon>
              </activity-multi-select>
              <p selection>${this.selectedActivities.length?this.selectedActivities.map(t=>t.Name).join(", "):"Nothing selected"}</p>
            </div>

            <div>
              <h1>Required with a selection limit</h1>
              <p>
                Unselected items are disabled once <code>max-selected</code> is reached. The error appears when <code>reportValidity()</code> runs and clears as
                soon as an item is selected.
              </p>
              <titanium-multi-select-base
                id="required"
                required
                match-input-width
                max-selected="3"
                label="Favorite animals"
                placeholder="Pick up to three"
                supportingText="Choose at least one, at most three"
                errorText="Please pick at least one animal"
                .items=${I}
                ?disabled=${this.disabled}
              ></titanium-multi-select-base>

              <section buttons>
                <md-filled-tonal-button @click=${()=>this.disabled=!this.disabled}>${this.disabled?"Enable":"Disable"}</md-filled-tonal-button>
                <md-filled-tonal-button @click=${()=>this.requiredSelect.reportValidity()}>Report validity</md-filled-tonal-button>
                <md-filled-tonal-button @click=${()=>this.dispatchEvent(new m(`Check validity is ${this.requiredSelect.checkValidity()}`))}
                  >Check validity</md-filled-tonal-button
                >
                <md-filled-tonal-button @click=${()=>this.requiredSelect.reset()}>Reset</md-filled-tonal-button>
              </section>
            </div>

            <div>
              <h1>Inside a dialog</h1>
              <p>
                A form in an <code>md-dialog</code>. The popover opens downward when there is room below the field and upward, with the search row at the
                bottom, when the field is near the bottom of the window. Save calls <code>reportValidity()</code>; a <code>LiveValidationController</code> on
                the page clears each error as soon as the field is corrected.
              </p>
              <section buttons>
                <md-filled-tonal-button @click=${()=>this.#ct()}>Open dialog</md-filled-tonal-button>
              </section>
            </div>

            <api-docs src="./custom-elements.json" selected="titanium-multi-select-base"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>

      <md-dialog>
        <div slot="headline">New team</div>
        <form slot="content" id="dialog-form" method="dialog" dialog-form>
          <md-filled-text-field validate label="Team name" required></md-filled-text-field>
          <md-filled-text-field validate label="Description" type="textarea" rows="3"></md-filled-text-field>
          <titanium-multi-select-base validate required label="Animals" placeholder="Pick team animals" .items=${I}></titanium-multi-select-base>
          <titanium-icon-picker validate required label="Team icon"></titanium-icon-picker>
        </form>
        <div slot="actions">
          <md-text-button @click=${()=>this.dialog.close()}>Cancel</md-text-button>
          <md-filled-button @click=${()=>this.#lt()}>Save</md-filled-button>
        </div>
      </md-dialog>
    `}};r([c()],T.prototype,"disabled",null),r([c()],T.prototype,"selectedAnimals",null),r([c()],T.prototype,"selectedActivities",null),r([d("#required")],T.prototype,"requiredSelect",null),r([d("md-dialog")],T.prototype,"dialog",null),r([p("md-dialog [validate]")],T.prototype,"dialogFields",null),T=r([u("titanium-multi-select-base-demo")],T);export{S as ActivityMultiSelect,T as TitaniumMultiSelectBaseDemo};
