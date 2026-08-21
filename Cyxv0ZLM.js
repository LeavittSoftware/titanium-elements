import{i as e,g as t,b as i,A as s,c as r,y as n,K as a,_ as o,d as l,r as c,n as h,e as d,t as u,S as p}from"./DKsLgDqX.js";import{S as m}from"./Ca4KNdIV.js";import"./BT2CkEzc.js";import"./mM2aJDzu.js";import"./CJg7i_Pn.js";import{e as g}from"./CUwIGwiH.js";import{D as v}from"./DTS7lhmZ.js";import"./BVGLb68V.js";let b=class extends e{#e=!1;get isLoading(){return this.#e}set isLoading(e){this.#e=e}#t="Multi select";get label(){return this.#t}set label(e){this.#t=e}#i="Select items";get placeholder(){return this.#i}set placeholder(e){this.#i=e}#s="Search";get searchPlaceholder(){return this.#s}set searchPlaceholder(e){this.#s=e}#r=[];get selected(){return this.#r}set selected(e){this.#r=e}#n=[];get items(){return this.#n}set items(e){this.#n=e}#a=[];get sections(){return this.#a}set sections(e){this.#a=e}#o="Name";get pathToSelectedText(){return this.#o}set pathToSelectedText(e){this.#o=e}#l="";get pathToIcon(){return this.#l}set pathToIcon(e){this.#l=e}#c=[];get searchKeys(){return this.#c}set searchKeys(e){this.#c=e}#h=0;get maxSelected(){return this.#h}set maxSelected(e){this.#h=e}#d=!1;get required(){return this.#d}set required(e){this.#d=e}#u=!1;get disabled(){return this.#u}set disabled(e){this.#u=e}#p=!1;get error(){return this.#p}set error(e){this.#p=e}#m="Please select at least one item";get errorText(){return this.#m}set errorText(e){this.#m=e}#g="";get supportingText(){return this.#g}set supportingText(e){this.#g=e}#v=!1;get noAsterisk(){return this.#v}set noAsterisk(e){this.#v=e}#b=!1;get hasLeadingIcon(){return this.#b}set hasLeadingIcon(e){this.#b=e}#f="No items";get noItemsText(){return this.#f}set noItemsText(e){this.#f=e}#y="No matches found";get noResultsText(){return this.#y}set noResultsText(e){this.#y=e}#x=!1;get disableClearAll(){return this.#x}set disableClearAll(e){this.#x=e}#_="popover";get positioning(){return this.#_}set positioning(e){this.#_=e}#$=!1;get matchInputWidth(){return this.#$}set matchInputWidth(e){this.#$=e}#w=!1;get menuOpen(){return this.#w}set menuOpen(e){this.#w=e}#k="";get searchTerm(){return this.#k}set searchTerm(e){this.#k=e}#S=[];get suggestions(){return this.#S}set suggestions(e){this.#S=e}#I=0;get count(){return this.#I}set count(e){this.#I=e}#T;get menuWidth(){return this.#T}set menuWidth(e){this.#T=e}#A;get menu(){return this.#A}set menu(e){this.#A=e}#N;get field(){return this.#N}set field(e){this.#N=e}#C;get searchInput(){return this.#C}set searchInput(e){this.#C=e}#z=null;#B=new v(e=>this.#P(e));get isOpen(){return this.menuOpen}get isAtMaxSelected(){return this.maxSelected>0&&this.selected.length>=this.maxSelected}get visibleItems(){return this.searchTerm?this.suggestions:this.sections.length?this.sections.flatMap(e=>e.items):this.items}get searchPool(){if(this.items.length)return this.items;const e=new Set;return this.sections.flatMap(e=>e.items).filter(t=>{const i=this.getItemKey(t);return!e.has(i)&&(e.add(i),!0)})}connectedCallback(){super.connectedCallback(),this.matchInputWidth&&this.#R()}disconnectedCallback(){super.disconnectedCallback(),this.#q()}update(e){e.has("positioning")&&"popover"===this.positioning&&!this.showPopover&&(this.positioning="fixed"),e.has("matchInputWidth")&&(this.matchInputWidth?this.#R():this.#q()),super.update(e)}updated(e){const t=e;this.menuOpen&&["suggestions","searchTerm","items","sections","selected","isLoading"].some(e=>t.has(e))&&this.menu?.reposition()}#R(){this.#z?.disconnect(),this.#z=new ResizeObserver(e=>{for(const t of e)this.menuWidth=t.contentRect.width}),this.#z.observe(this)}#q(){this.#z?.disconnect(),this.#z=null,this.menuWidth=void 0}open(){this.disabled||this.menu?.show()}close(){this.menu?.close()}toggleMenu(){this.menuOpen?this.close():this.open()}async focus(){this.field?.focus()}isSelected(e){const t=this.getItemKey(e);return this.selected.some(e=>this.getItemKey(e)===t)}selectItem(e){this.isSelected(e)||this.isAtMaxSelected||(this.selected=[...this.selected,e],this.#L())}deselectItem(e){const t=this.getItemKey(e);this.isSelected(e)&&(this.selected=this.selected.filter(e=>this.getItemKey(e)!==t),this.#L())}toggleItem(e){this.isSelected(e)?this.deselectItem(e):this.selectItem(e)}clear(){this.selected.length&&(this.selected=[],this.#L())}reset(){this.selected=[],this.softReset(),this.error=!1,this.field?.reset()}softReset(){this.searchTerm="",this.suggestions=[],this.count=0}checkValidity(){return this.field?.checkValidity()??!0}reportValidity(){return this.field?.reportValidity()??!0}#L(){this.field?.error&&this.reportValidity(),this.dispatchEvent(new Event("selected-changed",{composed:!0}))}onInputChanged(e){this.#B.debounce(e)}async showSuggestions(e,t){this.suggestions=e,this.count=t,await this.updateComplete,this.shadowRoot?.querySelector("md-menu-item")?.scrollIntoView({block:"nearest"})}async#P(e){if(!this.searchTerm||!e)return;const t=this.searchKeys.length?this.searchKeys:[this.pathToSelectedText],i=new g(this.searchPool,{includeScore:!0,keys:t,shouldSort:!0,ignoreLocation:!0,threshold:.3}).search(e).map(e=>e.item);this.showSuggestions(i,i.length)}async#W(e){this.searchTerm=e,this.suggestions=[],this.count=0,await this.updateComplete,this.onInputChanged(e)}getItemKey(e){return String(e?.Id??this.getItemText(e))}getItemText(e){return String(e?.[this.pathToSelectedText]??"")}getItemIcon(e){return this.pathToIcon?String(e?.[this.pathToIcon]??"").trim():""}#M(e){for(const t of e.composedPath())if(t instanceof HTMLElement&&t.hasAttribute("md-menu-item"))return t.hasAttribute("disabled")?null:t;return null}#E(e){if(!this.disabled&&e.target===this.field){if("ArrowDown"===e.key||"Enter"===e.key||" "===e.key)return e.preventDefault(),void this.open();if("Backspace"===e.key){const t=this.selected.at(-1);t&&(e.preventDefault(),this.deselectItem(t))}}}#K(e){switch(e.stopPropagation(),e.key){case"ArrowDown":e.preventDefault(),this.menu?.activateNextItem();break;case"ArrowUp":e.preventDefault(),this.menu?.activatePreviousItem();break;case"Enter":{e.preventDefault();const t=this.visibleItems.at(0);t&&this.toggleItem(t);break}case"Escape":e.preventDefault(),this.close(),this.focus();break;case"Tab":this.close();break;case"Backspace":{if(this.searchTerm)break;const e=this.selected.at(-1);e&&this.deselectItem(e);break}}}#j(e){const t=this.#M(e);t?.item&&(this.toggleItem(t.item),this.searchInput?.focus())}#O(e){const t=this.#M(e);if(t)return"Enter"===e.key||" "===e.key?(e.preventDefault(),void(t.item&&this.toggleItem(t.item))):void("ArrowUp"===e.key&&this.menu?.items[0]===t&&(e.preventDefault(),e.stopPropagation(),this.searchInput?.focus()))}static{this.styles=[t,i`
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
    `]}renderChip(e){const t=this.getItemIcon(e);return r`<titanium-chip input-chip ?disabled=${this.disabled} label=${this.getItemText(e)} @remove=${()=>this.deselectItem(e)}>
      ${t?r`<md-icon slot="icon">${t}</md-icon>`:s}
    </titanium-chip>`}renderSuggestion(e){const t=this.isSelected(e),i=this.getItemIcon(e);return r`<md-menu-item keep-open .item=${e} ?selected=${t} ?disabled=${!t&&this.isAtMaxSelected}>
      ${i?r`<md-icon slot="start">${i}</md-icon>`:s}
      <span slot="headline" ellipsis>${this.getItemText(e)}</span>
      ${t?r`<md-icon slot="end">check</md-icon>`:s}
    </md-menu-item>`}renderSectionHeader(e){return r`<div section-header>
      ${e.icon?r`<md-icon>${e.icon}</md-icon>`:s}
      <div>
        <div headline>${e.headline}</div>
        ${e.supportingText?r`<div supporting-text>${e.supportingText}</div>`:s}
      </div>
    </div>`}renderTrailingMenuSlot(){return s}#D(){return this.searchTerm?r`${this.isLoading||this.suggestions.length?r`<div summary>Showing ${this.suggestions.length} of ${this.count} result${1===this.count?"":"s"} for '${this.searchTerm}'</div>`:r`<div empty>${this.noResultsText}</div>`}
      ${n(this.suggestions,e=>this.getItemKey(e),e=>this.renderSuggestion(e))}`:this.sections.length?n(this.sections,e=>e.key,e=>r`${this.renderSectionHeader(e)}
          ${n(e.items,e=>this.getItemKey(e),e=>this.renderSuggestion(e))}`):this.items.length?n(this.items,e=>this.getItemKey(e),e=>this.renderSuggestion(e)):r`<div empty>${this.noItemsText}</div>`}render(){return r`
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
        @keydown=${this.#E}
      >
        ${this.hasLeadingIcon?r`<slot name="leading-icon" slot="start"></slot>`:s}
        <chips-container>
          ${this.selected.length?n(this.selected,e=>this.getItemKey(e),e=>this.renderChip(e)):r`<span placeholder>${this.placeholder}</span>`}
        </chips-container>
        <div slot="end" trailing>
          ${this.isLoading?r`<md-circular-progress indeterminate></md-circular-progress>`:s}
          ${!this.selected.length||this.disableClearAll||this.disabled?s:r`<md-icon-button
                title="Clear selection"
                @click=${e=>{e.preventDefault(),e.stopPropagation(),this.clear(),this.focus()}}
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
        anchor-corner="end-start"
        default-focus="none"
        no-navigation-wrap
        stay-open-on-focusout
        .positioning=${this.positioning}
        style=${this.matchInputWidth&&this.menuWidth?`min-width: ${this.menuWidth}px; max-width: ${this.menuWidth}px`:""}
        @click=${this.#j}
        @keydown=${this.#O}
        @opening=${async e=>{this.menuOpen=!0,a(this,e),await this.updateComplete,this.searchInput?.dispatchEvent(new Event("deactivate-typeahead",{bubbles:!0,composed:!0})),this.searchInput?.focus({preventScroll:!0})}}
        @opened=${e=>a(this,e)}
        @closing=${e=>{this.menuOpen=!1,this.softReset(),a(this,e)}}
        @closed=${e=>{this.reportValidity(),a(this,e)}}
      >
        <search-container>
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
            @input=${e=>this.#W(e.target.value)}
            @keydown=${this.#K}
          />
          ${this.isLoading?r`<md-circular-progress indeterminate></md-circular-progress>`:s}
          ${this.searchTerm&&!this.isLoading?r`<md-icon-button
                title="Clear search"
                @click=${()=>{this.#W(""),this.searchInput?.focus()}}
              >
                <md-icon>close</md-icon>
              </md-icon-button>`:s}
        </search-container>
        ${this.#D()} ${this.renderTrailingMenuSlot()}
      </md-menu>
    `}};o([l("trackLoadingPromise"),c()],b.prototype,"isLoading",null),o([h({type:String})],b.prototype,"label",null),o([h({type:String})],b.prototype,"placeholder",null),o([h({type:String,attribute:"search-placeholder"})],b.prototype,"searchPlaceholder",null),o([h({type:Array})],b.prototype,"selected",null),o([h({type:Array})],b.prototype,"items",null),o([h({type:Array})],b.prototype,"sections",null),o([h({type:String})],b.prototype,"pathToSelectedText",null),o([h({type:String})],b.prototype,"pathToIcon",null),o([h({type:Array})],b.prototype,"searchKeys",null),o([h({type:Number,attribute:"max-selected"})],b.prototype,"maxSelected",null),o([h({type:Boolean})],b.prototype,"required",null),o([h({type:Boolean,reflect:!0})],b.prototype,"disabled",null),o([h({type:Boolean})],b.prototype,"error",null),o([h({type:String})],b.prototype,"errorText",null),o([h({type:String})],b.prototype,"supportingText",null),o([h({type:Boolean,attribute:"no-asterisk"})],b.prototype,"noAsterisk",null),o([h({type:Boolean,attribute:"has-leading-icon"})],b.prototype,"hasLeadingIcon",null),o([h({type:String,attribute:"no-items-text"})],b.prototype,"noItemsText",null),o([h({type:String,attribute:"no-results-text"})],b.prototype,"noResultsText",null),o([h({type:Boolean,attribute:"disable-clear-all"})],b.prototype,"disableClearAll",null),o([h()],b.prototype,"positioning",null),o([h({type:Boolean,attribute:"match-input-width"})],b.prototype,"matchInputWidth",null),o([h({type:Boolean,attribute:"menu-open",reflect:!0})],b.prototype,"menuOpen",null),o([c()],b.prototype,"searchTerm",null),o([c()],b.prototype,"suggestions",null),o([c()],b.prototype,"count",null),o([c()],b.prototype,"menuWidth",null),o([d("md-menu")],b.prototype,"menu",null),o([d("titanium-filled-input-validator")],b.prototype,"field",null),o([d("input[search]")],b.prototype,"searchInput",null),b=o([u("titanium-multi-select-base")],b);const f=[{Id:"walking",Name:"Walking",Icon:"directions_walk"},{Id:"running",Name:"Running",Icon:"directions_run"},{Id:"cycling",Name:"Cycling",Icon:"directions_bike"},{Id:"swimming",Name:"Swimming",Icon:"pool"},{Id:"weights",Name:"Weight training",Icon:"fitness_center"},{Id:"yoga",Name:"Yoga",Icon:"self_improvement"},{Id:"hiking",Name:"Hiking",Icon:"hiking"},{Id:"rowing",Name:"Rowing",Icon:"rowing"},{Id:"skiing",Name:"Skiing",Icon:"downhill_skiing"},{Id:"climbing",Name:"Climbing",Icon:"landscape"}];let y=class extends b{#t="Activities";get label(){return this.#t}set label(e){this.#t=e}#i="Select activities";get placeholder(){return this.#i}set placeholder(e){this.#i=e}#s="Search activities";get searchPlaceholder(){return this.#s}set searchPlaceholder(e){this.#s=e}#l="Icon";get pathToIcon(){return this.#l}set pathToIcon(e){this.#l=e}#F=[];get activities(){return this.#F}set activities(e){this.#F=e}update(e){e.has("activities")&&(this.items=this.activities),super.update(e)}renderTrailingMenuSlot(){return!this.searchTerm&&this.activities.length?r`<div style="padding: 8px 16px; font-size: 12px; color: var(--md-sys-color-on-surface-variant)">
        ${this.activities.length} activities available
      </div>`:s}};o([h({type:String})],y.prototype,"label",null),o([h({type:String})],y.prototype,"placeholder",null),o([h({type:String})],y.prototype,"searchPlaceholder",null),o([h({type:String})],y.prototype,"pathToIcon",null),o([h({type:Array})],y.prototype,"activities",null),y=o([u("activity-multi-select")],y);const x=["Aardvark","Badger","Capybara","Dingo","Echidna","Ferret","Gibbon","Hedgehog","Ibex","Jackal","Kestrel","Lemur","Marmot","Narwhal","Ocelot","Pangolin","Quokka","Raccoon","Serval","Tapir"].map((e,t)=>({Id:t+1,Name:e}));let _=class extends e{#u=!1;get disabled(){return this.#u}set disabled(e){this.#u=e}#H=[];get selectedAnimals(){return this.#H}set selectedAnimals(e){this.#H=e}#U=[];get selectedActivities(){return this.#U}set selectedActivities(e){this.#U=e}#V;get requiredSelect(){return this.#V}set requiredSelect(e){this.#V=e}static{this.styles=[m,i`
      titanium-multi-select-base,
      activity-multi-select {
        max-width: 480px;
      }

      p[selection] {
        margin: 12px 0 0 0;
        font-size: 13px;
        color: var(--md-sys-color-on-surface-variant);
      }
    `]}render(){return r`
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
                .items=${x}
                .selected=${this.selectedAnimals}
                ?disabled=${this.disabled}
                @selected-changed=${e=>this.selectedAnimals=e.target.selected}
              ></titanium-multi-select-base>
              <p selection>${this.selectedAnimals.length?this.selectedAnimals.map(e=>e.Name).join(", "):"Nothing selected"}</p>
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
                .activities=${f}
                .selected=${this.selectedActivities}
                ?disabled=${this.disabled}
                @selected-changed=${e=>this.selectedActivities=e.target.selected}
              >
                <md-icon slot="leading-icon">exercise</md-icon>
              </activity-multi-select>
              <p selection>${this.selectedActivities.length?this.selectedActivities.map(e=>e.Name).join(", "):"Nothing selected"}</p>
            </div>

            <div>
              <h1>Required with a selection limit</h1>
              <p>Unselected items are disabled once <code>max-selected</code> is reached. Validity is reported when the popover closes.</p>
              <titanium-multi-select-base
                id="required"
                required
                match-input-width
                max-selected="3"
                label="Favorite animals"
                placeholder="Pick up to three"
                supportingText="Choose at least one, at most three"
                errorText="Please pick at least one animal"
                .items=${x}
                ?disabled=${this.disabled}
              ></titanium-multi-select-base>

              <section buttons>
                <md-filled-tonal-button @click=${()=>this.disabled=!this.disabled}>${this.disabled?"Enable":"Disable"}</md-filled-tonal-button>
                <md-filled-tonal-button @click=${()=>this.requiredSelect.reportValidity()}>Report validity</md-filled-tonal-button>
                <md-filled-tonal-button @click=${()=>this.dispatchEvent(new p(`Check validity is ${this.requiredSelect.checkValidity()}`))}
                  >Check validity</md-filled-tonal-button
                >
                <md-filled-tonal-button @click=${()=>this.requiredSelect.reset()}>Reset</md-filled-tonal-button>
              </section>
            </div>

            <api-docs src="./custom-elements.json" selected="titanium-multi-select-base"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `}};o([c()],_.prototype,"disabled",null),o([c()],_.prototype,"selectedAnimals",null),o([c()],_.prototype,"selectedActivities",null),o([d("#required")],_.prototype,"requiredSelect",null),_=o([u("titanium-multi-select-base-demo")],_);export{y as ActivityMultiSelect,_ as TitaniumMultiSelectBaseDemo};
