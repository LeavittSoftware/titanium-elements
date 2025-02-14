import{r as e,h as t,l as a,i as s,x as i,_ as r,n as o,e as l,d as n,t as c,a as d,p as h,B as m,D as p,H as u,J as g,K as b,M as f,N as v,O as y,E as w,y as x,Q as k,R as $,U as S,V as _}from"./ELJVH0kr.js";import{S as A}from"./DQSC0k6_.js";import"./EsaUkzTT.js";import{D as C,C as T}from"./BrMxz_L_.js";import"./CdCsZLfZ.js";import"./Bm8-dOLN.js";import{r as z}from"./Dg5-K9m_.js";import"./Cz02syqI.js";import"./tAoYrNBU.js";import"./BO0dBGCG.js";import"./2nGm8kme.js";import{g as N}from"./BX9sNKay.js";import{D as P}from"./Bbv0u4bt.js";import"./ixdsyyZd.js";import"./itOAKGWB.js";let M=class extends e{#e;get header(){return this.#e}set header(e){this.#e=e}#t;get localStorageKey(){return this.#t}set localStorageKey(e){this.#t=e}#a=[10,15,20,50];get pageSizes(){return this.#a}set pageSizes(e){this.#a=e}#s=10;get defaultPageSize(){return this.#s}set defaultPageSize(e){this.#s=e}#i;get count(){return this.#i}set count(e){this.#i=e}#r=[];get items(){return this.#r}set items(e){this.#r=e}#o;get searchTerm(){return this.#o}set searchTerm(e){this.#o=e}#l;get singleSelect(){return this.#l}set singleSelect(e){this.#l=e}#n=!1;get disableSelect(){return this.#n}set disableSelect(e){this.#n=e}#c=!1;get disablePaging(){return this.#c}set disablePaging(e){this.#c=e}#d=[];get selected(){return this.#d}set selected(e){this.#d=e}#h;get itemsContainer(){return this.#h}set itemsContainer(e){this.#h=e}#m;get itemsSlot(){return this.#m}set itemsSlot(e){this.#m=e}#p=!1;get narrow(){return this.#p}set narrow(e){this.#p=e}#u;get hasDragItems(){return this.#u}set hasDragItems(e){this.#u=e}#g=560;get narrowMaxWidth(){return this.#g}set narrowMaxWidth(e){this.#g=e}#b;get isLoading(){return this.#b}set isLoading(e){this.#b=e}#f;get tableHeaders(){return this.#f}set tableHeaders(e){this.#f=e}#v;get checkbox(){return this.#v}set checkbox(e){this.#v=e}#y;get pageControl(){return this.#y}set pageControl(e){this.#y=e}#w=0;async getTake(){return(await this.pageControl)?.take??0}async getPage(){return(await this.pageControl)?.page??0}async setTake(e){const t=await this.pageControl;t&&(t.take=e)}async setPage(e){const t=await this.pageControl;t&&(t.page=e)}async resetPage(){await this.setPage(0)}async firstUpdated(){if("function"==typeof ResizeObserver){new ResizeObserver((e=>{for(const t of e){const e=t.contentRect;this.narrow=e.width<this.narrowMaxWidth,this.updateChildrenIsNarrow()}})).observe(this)}else{const e=window.matchMedia("(max-width: 768px)");e.addEventListener("change",(e=>{this.narrow=e.matches,this.updateChildrenIsNarrow()})),this.narrow=e.matches,this.updateChildrenIsNarrow()}this.addEventListener(C.eventType,(e=>{e.stopPropagation();const t=Math.min(e.hoverIndex,this.items.length-1);if(t!==e.originIndex){const a=this.items[e.originIndex];this.items.splice(e.originIndex,1),this.items.splice(t,0,a),this.dispatchEvent(new D)}})),this.tableHeaders.addEventListener("slotchange",(()=>this.updateChildrenIsNarrow())),this.itemsSlot.addEventListener("slotchange",(()=>this.updateChildrenIsNarrow())),await((await this.pageControl)?.updateComplete)}updateChildrenIsNarrow(){this.hasDragItems=this.itemsSlot.assignedElements().some((e=>e.enableDrag)),this.itemsSlot.assignedElements().forEach((e=>e.narrow=this.narrow)),this.tableHeaders.assignedElements().forEach((e=>e.narrow=this.narrow))}clearSelection(){this.#x(),this.selected.length>0&&(this.selected=[],this.#k())}updated(e){e.has("items")&&e.get("items")!==this.items&&this.clearSelection()}#k(){this.dispatchEvent(new CustomEvent("selected-changed",{composed:!0,detail:this.selected}))}async loadWhile(e){this.isLoading=!0,this.#w++;try{await e}finally{this.#w--,0===this.#w&&(this.isLoading=!1)}}#x(){this.#$().forEach((e=>e.deselect()))}selectAll(){this.singleSelect||this.#$().forEach((e=>e.select()))}#$(){return this.itemsSlot.assignedElements().filter((e=>"function"==typeof e.select&&"function"==typeof e.deselect))}static{this.styles=[t,a,s`
      :host {
        display: flex;
        flex-direction: column;

        border: 1px solid var(--md-sys-color-outline-variant);
        background-color: var(--md-sys-color-surface);
        color: var(--md-sys-color-on-surface);
        border-radius: 8px;
        font-family: var(--titanium-data-table-font-family, Roboto, Noto, sans-serif);
        --titanium-page-control-font-family: var(--titanium-data-table-font-family, Roboto, Noto, sans-serif);
        -webkit-font-smoothing: antialiased;
      }

      header {
        display: flex;
        flex-direction: column;
        padding-bottom: 12px;
        gap: 12px;
        border-bottom: 1px solid var(--md-sys-color-outline-variant);
        position: relative;
      }

      /* HEADER ROW ONE */

      section[row-one] {
        display: grid;
        grid: 'head menu' / 1fr auto;
        gap: 8px;
        padding: 12px 12px 0 12px;
      }

      section[row-one] div[head] {
        grid-area: head;
      }

      section[row-one] div[menu] {
        grid-area: menu;
      }

      div[search] {
        grid-area: search;
      }

      /* HEADER ROW TWO */

      section[row-two] {
        display: grid;
        grid: 'search-filter add' / 1fr auto;
        gap: 8px;
        padding: 0 12px 0 20px;
      }

      :host([narrow]) section[row-two] {
        grid:
          'search-filter '
          'add' / auto;
      }

      section[row-two] div[search-filter] {
        grid-area: search-filter;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px;
      }

      section[row-two] div[add-button] {
        grid-area: add;
        justify-self: end;
        align-self: end;
      }

      h1 {
        padding: 12px 12px 0 12px;
      }

      selected-actions {
        display: grid;
        gap: 6px 24px;
        grid: 'selected-text buttons';
        background-color: var(--md-sys-color-secondary-container);
        position: absolute;
        top: 0px;
        left: 0px;
        right: 0px;
        bottom: 0px;
        margin: 0 !important;
        padding: 0 12px 12px 24px;
        align-content: end;
        z-index: 1;
      }

      selected-actions h2 {
        color: var(--md-sys-color-on-secondary-container);
        font-size: 18px;
        font-weight: 400;
        align-self: end;
      }

      selected-actions div[buttons] {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 0 8px;
        justify-content: flex-end;
      }

      table-header {
        display: flex;
        flex-direction: row;
        gap: 16px;
        min-height: 48px;
        border-bottom: 1px solid var(--md-sys-color-outline-variant);
      }

      table-header ::slotted(titanium-data-table-header:last-of-type) {
        padding-right: 24px;
      }

      :host([has-drag-items]) table-header ::slotted(titanium-data-table-header:last-of-type) {
        padding-right: 40px;
      }

      md-linear-progress {
        width: 100%;
        margin-top: -4px;
      }

      main {
        position: relative;
        min-height: 48px;
      }

      content-veil {
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--md-sys-color-scrim);
        opacity: 0;
        -webkit-transition: opacity 75ms linear;
        -o-transition: opacity 75ms linear;
        transition: opacity 75ms linear;
        z-index: 6;
      }

      content-veil[opened] {
        opacity: 0.12;
        display: block;
      }

      table-message {
        display: flex;
        place-items: center;
        justify-content: center;
        gap: 8px;
        padding: 64px;

        font-size: 14px;
        z-index: 10;
        line-height: 20px;
        border-bottom: 1px solid var(--md-sys-color-outline-variant);
      }

      table-message md-icon {
        align-self: center;
        flex-shrink: 0;
      }

      footer {
        display: grid;
        grid: 'controls footer-slot' / minmax(400px, 1fr) auto;
        gap: 24px;
        padding: 12px;
        align-items: center;
        margin-top: -1px;
        border-top: 1px solid var(--md-sys-color-outline-variant);
      }

      titanium-page-control {
        grid-area: controls;
        margin-left: 12px;
        justify-self: start;
      }

      div[footer] {
        justify-self: end;
      }

      :host([narrow]) footer {
        grid:
          'controls'
          'footer-slot' / auto;
      }

      :host([disable-paging]) footer {
        grid: 'footer-slot' / auto;
      }

      footer-buttons {
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
        align-items: flex-end;
      }

      div[add-button] {
        display: flex;
        align-items: center;
      }

      div[items-slot] {
        position: relative;
      }

      md-checkbox {
        flex-shrink: 0;
        align-self: center;
        margin: 0 14px 0 20px;
      }

      :host([disable-select]) table-header ::slotted(titanium-data-table-header:first-of-type) {
        padding-left: 24px;
      }

      :host(:not([disable-select])[single-select]) table-header {
        padding-left: 68px;
      }

      [hidden] {
        display: none !important;
      }
    `]}render(){return i`
      <header part="header">
        <slot name="header">
          <section row-one>
            <div head ellipsis part="table-header-text-container">
              <slot name="table-header-text"> <h1 ellipsis>${this.header}</h1></slot>
            </div>
            <div menu part="table-actions-container">
              <slot name="table-actions"></slot>
            </div>
          </section>
          <section row-two>
            <div search-filter part="filters-container">
              <slot name="search-button"></slot>
              <slot name="filter-button"></slot>
              <slot name="filters"></slot>
            </div>
            <div add-button part="add-button-container">
              <slot name="add-button"></slot>
            </div>
          </section>
        </slot>

        <selected-actions ?hidden="${0===this.selected.length}">
          <h2 ellipsis>${this.selected.length} item${this.selected.length>1?"s":""} selected</h2>
          <div buttons part="selected-actions-container">
            <slot name="selected-actions"></slot>
          </div>
        </selected-actions>
      </header>

      <table-container
        @titanium-data-table-item-selected-changed=${e=>{e.stopPropagation();const t=e.target;t.selected?(this.singleSelect&&this.#$().filter((e=>e.item!==t.item)).forEach((e=>e.deselect())),this.selected.push(t.item),this.requestUpdate(),this.#k()):(this.selected.splice(this.selected.indexOf(t.item),1),this.requestUpdate(),this.#k())}}
      >
        <table-header part="table-header-container">
          ${this.disableSelect||this.singleSelect?"":i`
                <md-checkbox
                  title="${this.selected.length>0?"Deselect":"Select"} all checkboxes"
                  aria-label="${this.selected.length>0?"Deselect":"Select"} all checkboxes"
                  ?checked=${this.selected.length>0}
                  ?indeterminate=${0!==this.selected.length&&this.selected.length!==this.items.length}
                  ?disabled=${0===this.items.length}
                  @click=${()=>{this.selected.length>0?this.#x():this.selectAll(),this.checkbox.focus()}}
                ></md-checkbox>
              `}
          <slot name="table-headers"></slot>
        </table-header>
        <md-linear-progress ?hidden=${!this.isLoading} ?closed=${!this.isLoading} indeterminate></md-linear-progress>

        <main>
          <div items-slot part="items-container">
            <slot name="items"></slot>
          </div>
          <table-message ?hidden=${this.isLoading||this.items.length>0}>
            <md-icon>info</md-icon>
            ${""===this.searchTerm||void 0===this.searchTerm||null===this.searchTerm?"No results":`Your search of '${this.searchTerm}' did not match any results`}</table-message
          >
          <table-message ?hidden=${!this.isLoading||0!==this.items.length}> Loading data... </table-message>
          <content-veil ?opened=${this.isLoading}></content-veil>
        </main>
      </table-container>
      <footer part="footer-container">
        <slot name="footer">
          ${this.disablePaging?"":i`
                <titanium-page-control
                  label="Rows per page"
                  ?disabled=${this.isLoading}
                  .count=${this.count}
                  .pageSizes=${this.pageSizes}
                  .defaultPageSize=${this.defaultPageSize}
                  .localStorageKey=${this.localStorageKey||`${this.header}-take`}
                  @action=${()=>{this.dispatchEvent(new CustomEvent("paging-changed",{composed:!0}))}}
                ></titanium-page-control>
              `}
          <div footer>
            <footer-buttons><slot name="footer-buttons"></slot></footer-buttons>
          </div>
        </slot>
      </footer>
    `}};r([o({type:String})],M.prototype,"header",null),r([o({type:String})],M.prototype,"localStorageKey",null),r([o({type:Array})],M.prototype,"pageSizes",null),r([o({type:Number,attribute:"default-page-size"})],M.prototype,"defaultPageSize",null),r([o({type:Number})],M.prototype,"count",null),r([o({type:Array})],M.prototype,"items",null),r([o({type:String})],M.prototype,"searchTerm",null),r([o({type:Boolean,attribute:"single-select",reflect:!0})],M.prototype,"singleSelect",null),r([o({type:Boolean,attribute:"disable-select"})],M.prototype,"disableSelect",null),r([o({type:Boolean,attribute:"disable-paging",reflect:!0})],M.prototype,"disablePaging",null),r([o({type:Array})],M.prototype,"selected",null),r([l("div[items-slot]")],M.prototype,"itemsContainer",null),r([l('slot[name="items"]')],M.prototype,"itemsSlot",null),r([o({type:Boolean,reflect:!0,attribute:"narrow"})],M.prototype,"narrow",null),r([o({type:Boolean,attribute:"has-drag-items",reflect:!0})],M.prototype,"hasDragItems",null),r([o({type:Number,attribute:"narrow-max-width",reflect:!0})],M.prototype,"narrowMaxWidth",null),r([n()],M.prototype,"isLoading",null),r([l('slot[name="table-headers"]')],M.prototype,"tableHeaders",null),r([l("md-checkbox")],M.prototype,"checkbox",null),r([z("titanium-page-control")],M.prototype,"pageControl",null),M=r([c("titanium-data-table")],M);class D extends Event{static{this.eventType="titanium-data-table-items-reorder"}constructor(){super(D.eventType)}}let j=class extends e{#S=[];get draggableItems(){return this.#S}set draggableItems(e){this.#S=e}firstUpdated(){this.draggableItems=[{Name:"Model 3",Appearance:"slick"},{Name:"Model X",Appearance:"slick"},{Name:"Model Y",Appearance:"slick"},{Name:"Model S",Appearance:"slick"},{Name:"Cybertruck",Appearance:"ugly"},{Name:"Tesla Semi",Appearance:"ugly"},{Name:"Model X Plaid",Appearance:"plaid"},{Name:"Model S Plaid",Appearance:"plaid"},{Name:"Model S Plaid+",Appearance:"plaid"},{Name:"Gen. 2 Roadster",Appearance:"slick"}]}static{this.styles=[t,d,h,s`
      :host {
        display: flex;
        flex-direction: column;

        margin: 24px 12px;
      }

      div {
        margin: 24px 0 36px 0;
      }

      h2 {
        margin-top: 24px;
      }
    `]}render(){return i`
      <h1>Draggable</h1>
      <p>Table with draggable items</p>
      <div>
        <titanium-data-table
          header="Draggable"
          .items=${this.draggableItems}
          @titanium-data-table-items-reorder=${async()=>{this.draggableItems=structuredClone(this.draggableItems),await this.requestUpdate("draggableItems")}}
        >
          <titanium-data-table-header slot="table-headers" large column-name="Name" no-sort title="Name"></titanium-data-table-header>
          <titanium-data-table-header slot="table-headers" column-name="Appearance" no-sort title="Appearance"></titanium-data-table-header>
          <titanium-data-table-header right slot="table-headers" column-name="Link" no-sort title="Link"></titanium-data-table-header>

          ${m(this.draggableItems??[],(e=>e.Name),(e=>i`
              <titanium-data-table-item enable-dragging .item=${e} slot="items">
                <row-item large ellipsis title=${e.Name??""}>${e.Name??"-"}</row-item>
                <row-item title=${e.Appearance??""}>${e.Appearance??"-"}</row-item>
                <row-item right><a href="#">Learn More</a></row-item>
              </titanium-data-table-item>
            `))}
        </titanium-data-table>
        <h2>Results</h2>
        <p>${this.draggableItems.map((e=>e.Name)).join(",")}</p>
      </div>
    `}};r([n()],j.prototype,"draggableItems",null),j=r([c("draggable-playground")],j);const B=Symbol("dispatchHooks");const I=new WeakMap;const R=p(u(g(b(e))));class E extends R{constructor(){super(),this.selected=!1,this.icons=!1,this.showOnlySelectedIcon=!1,this.required=!1,this.value="on",this.addEventListener("click",(e=>{f(e)&&this.input&&(this.focus(),v(this.input))})),function(e,...t){let a=I.get(e);a||(a=new Set,I.set(e,a));for(const s of t){if(a.has(s))continue;let t=!1;e.addEventListener(s,(a=>{if(t)return;a.stopImmediatePropagation();const s=Reflect.construct(a.constructor,[a.type,a]),i=new EventTarget;s[B]=i,t=!0;const r=e.dispatchEvent(s);t=!1,r||a.preventDefault(),i.dispatchEvent(new Event("after"))}),{capture:!0}),a.add(s)}}(this,"keydown"),this.addEventListener("keydown",(e=>{!function(e,t){const a=e[B];if(!a)throw new Error(`'${e.type}' event needs setupDispatchHooks().`);a.addEventListener("after",t)}(e,(()=>{e.defaultPrevented||"Enter"!==e.key||this.disabled||!this.input||this.input.click()}))}))}render(){return i`
      <div class="switch ${y(this.getRenderClasses())}">
        <input
          id="switch"
          class="touch"
          type="checkbox"
          role="switch"
          aria-label=${this.ariaLabel||w}
          ?checked=${this.selected}
          ?disabled=${this.disabled}
          ?required=${this.required}
          @input=${this.handleInput}
          @change=${this.handleChange} />

        <md-focus-ring part="focus-ring" for="switch"></md-focus-ring>
        <span class="track"> ${this.renderHandle()} </span>
      </div>
    `}getRenderClasses(){return{selected:this.selected,unselected:!this.selected,disabled:this.disabled}}renderHandle(){const e={"with-icon":this.showOnlySelectedIcon?this.selected:this.icons};return i`
      ${this.renderTouchTarget()}
      <span class="handle-container">
        <md-ripple for="switch" ?disabled="${this.disabled}"></md-ripple>
        <span class="handle ${y(e)}">
          ${this.shouldShowIcons()?this.renderIcons():i``}
        </span>
      </span>
    `}renderIcons(){return i`
      <div class="icons">
        ${this.renderOnIcon()}
        ${this.showOnlySelectedIcon?i``:this.renderOffIcon()}
      </div>
    `}renderOnIcon(){return i`
      <slot class="icon icon--on" name="on-icon">
        <svg viewBox="0 0 24 24">
          <path
            d="M9.55 18.2 3.65 12.3 5.275 10.675 9.55 14.95 18.725 5.775 20.35 7.4Z" />
        </svg>
      </slot>
    `}renderOffIcon(){return i`
      <slot class="icon icon--off" name="off-icon">
        <svg viewBox="0 0 24 24">
          <path
            d="M6.4 19.2 4.8 17.6 10.4 12 4.8 6.4 6.4 4.8 12 10.4 17.6 4.8 19.2 6.4 13.6 12 19.2 17.6 17.6 19.2 12 13.6Z" />
        </svg>
      </slot>
    `}renderTouchTarget(){return i`<span class="touch"></span>`}shouldShowIcons(){return this.icons||this.showOnlySelectedIcon}handleInput(e){const t=e.target;this.selected=t.checked}handleChange(e){x(this,e)}[k](){return this.selected?this.value:null}[$](){return String(this.selected)}formResetCallback(){this.selected=this.hasAttribute("selected")}formStateRestoreCallback(e){this.selected="true"===e}[S](){return new T((()=>({checked:this.selected,required:this.required})))}[_](){return this.input}}E.shadowRootOptions={mode:"open",delegatesFocus:!0},r([o({type:Boolean})],E.prototype,"selected",void 0),r([o({type:Boolean})],E.prototype,"icons",void 0),r([o({type:Boolean,attribute:"show-only-selected-icon"})],E.prototype,"showOnlySelectedIcon",void 0),r([o({type:Boolean})],E.prototype,"required",void 0),r([o()],E.prototype,"value",void 0),r([l("input")],E.prototype,"input",void 0);const O=s`@layer styles, hcm;@layer styles{:host{display:inline-flex;outline:none;vertical-align:top;-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer}:host([disabled]){cursor:default}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--md-switch-track-height, 32px))/2) 0px}md-focus-ring{--md-focus-ring-shape-start-start: var(--md-switch-track-shape-start-start, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));--md-focus-ring-shape-start-end: var(--md-switch-track-shape-start-end, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));--md-focus-ring-shape-end-end: var(--md-switch-track-shape-end-end, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));--md-focus-ring-shape-end-start: var(--md-switch-track-shape-end-start, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)))}.switch{align-items:center;display:inline-flex;flex-shrink:0;position:relative;width:var(--md-switch-track-width, 52px);height:var(--md-switch-track-height, 32px);border-start-start-radius:var(--md-switch-track-shape-start-start, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));border-start-end-radius:var(--md-switch-track-shape-start-end, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));border-end-end-radius:var(--md-switch-track-shape-end-end, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));border-end-start-radius:var(--md-switch-track-shape-end-start, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)))}input{appearance:none;height:max(100%,var(--md-switch-touch-target-size, 48px));outline:none;margin:0;position:absolute;width:max(100%,var(--md-switch-touch-target-size, 48px));z-index:1;cursor:inherit;top:50%;left:50%;transform:translate(-50%, -50%)}:host([touch-target=none]) input{display:none}}@layer styles{.track{position:absolute;width:100%;height:100%;box-sizing:border-box;border-radius:inherit;display:flex;justify-content:center;align-items:center}.track::before{content:"";display:flex;position:absolute;height:100%;width:100%;border-radius:inherit;box-sizing:border-box;transition-property:opacity,background-color;transition-timing-function:linear;transition-duration:67ms}.disabled .track{background-color:rgba(0,0,0,0);border-color:rgba(0,0,0,0)}.disabled .track::before,.disabled .track::after{transition:none;opacity:var(--md-switch-disabled-track-opacity, 0.12)}.disabled .track::before{background-clip:content-box}.selected .track::before{background-color:var(--md-switch-selected-track-color, var(--md-sys-color-primary, #6750a4))}.selected:hover .track::before{background-color:var(--md-switch-selected-hover-track-color, var(--md-sys-color-primary, #6750a4))}.selected:focus-within .track::before{background-color:var(--md-switch-selected-focus-track-color, var(--md-sys-color-primary, #6750a4))}.selected:active .track::before{background-color:var(--md-switch-selected-pressed-track-color, var(--md-sys-color-primary, #6750a4))}.selected.disabled .track{background-clip:border-box}.selected.disabled .track::before{background-color:var(--md-switch-disabled-selected-track-color, var(--md-sys-color-on-surface, #1d1b20))}.unselected .track::before{background-color:var(--md-switch-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-track-outline-color, var(--md-sys-color-outline, #79747e));border-style:solid;border-width:var(--md-switch-track-outline-width, 2px)}.unselected:hover .track::before{background-color:var(--md-switch-hover-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-hover-track-outline-color, var(--md-sys-color-outline, #79747e))}.unselected:focus-visible .track::before{background-color:var(--md-switch-focus-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-focus-track-outline-color, var(--md-sys-color-outline, #79747e))}.unselected:active .track::before{background-color:var(--md-switch-pressed-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-pressed-track-outline-color, var(--md-sys-color-outline, #79747e))}.unselected.disabled .track::before{background-color:var(--md-switch-disabled-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-disabled-track-outline-color, var(--md-sys-color-on-surface, #1d1b20))}}@layer hcm{@media(forced-colors: active){.selected .track::before{background:ButtonText;border-color:ButtonText}.disabled .track::before{border-color:GrayText;opacity:1}.disabled.selected .track::before{background:GrayText}}}@layer styles{.handle-container{display:flex;place-content:center;place-items:center;position:relative;transition:margin 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275)}.selected .handle-container{margin-inline-start:calc(var(--md-switch-track-width, 52px) - var(--md-switch-track-height, 32px))}.unselected .handle-container{margin-inline-end:calc(var(--md-switch-track-width, 52px) - var(--md-switch-track-height, 32px))}.disabled .handle-container{transition:none}.handle{border-start-start-radius:var(--md-switch-handle-shape-start-start, var(--md-switch-handle-shape, var(--md-sys-shape-corner-full, 9999px)));border-start-end-radius:var(--md-switch-handle-shape-start-end, var(--md-switch-handle-shape, var(--md-sys-shape-corner-full, 9999px)));border-end-end-radius:var(--md-switch-handle-shape-end-end, var(--md-switch-handle-shape, var(--md-sys-shape-corner-full, 9999px)));border-end-start-radius:var(--md-switch-handle-shape-end-start, var(--md-switch-handle-shape, var(--md-sys-shape-corner-full, 9999px)));height:var(--md-switch-handle-height, 16px);width:var(--md-switch-handle-width, 16px);transform-origin:center;transition-property:height,width;transition-duration:250ms,250ms;transition-timing-function:cubic-bezier(0.2, 0, 0, 1),cubic-bezier(0.2, 0, 0, 1);z-index:0}.handle::before{content:"";display:flex;inset:0;position:absolute;border-radius:inherit;box-sizing:border-box;transition:background-color 67ms linear}.disabled .handle,.disabled .handle::before{transition:none}.selected .handle{height:var(--md-switch-selected-handle-height, 24px);width:var(--md-switch-selected-handle-width, 24px)}.handle.with-icon{height:var(--md-switch-with-icon-handle-height, 24px);width:var(--md-switch-with-icon-handle-width, 24px)}.selected:not(.disabled):active .handle,.unselected:not(.disabled):active .handle{height:var(--md-switch-pressed-handle-height, 28px);width:var(--md-switch-pressed-handle-width, 28px);transition-timing-function:linear;transition-duration:100ms}.selected .handle::before{background-color:var(--md-switch-selected-handle-color, var(--md-sys-color-on-primary, #fff))}.selected:hover .handle::before{background-color:var(--md-switch-selected-hover-handle-color, var(--md-sys-color-primary-container, #eaddff))}.selected:focus-within .handle::before{background-color:var(--md-switch-selected-focus-handle-color, var(--md-sys-color-primary-container, #eaddff))}.selected:active .handle::before{background-color:var(--md-switch-selected-pressed-handle-color, var(--md-sys-color-primary-container, #eaddff))}.selected.disabled .handle::before{background-color:var(--md-switch-disabled-selected-handle-color, var(--md-sys-color-surface, #fef7ff));opacity:var(--md-switch-disabled-selected-handle-opacity, 1)}.unselected .handle::before{background-color:var(--md-switch-handle-color, var(--md-sys-color-outline, #79747e))}.unselected:hover .handle::before{background-color:var(--md-switch-hover-handle-color, var(--md-sys-color-on-surface-variant, #49454f))}.unselected:focus-within .handle::before{background-color:var(--md-switch-focus-handle-color, var(--md-sys-color-on-surface-variant, #49454f))}.unselected:active .handle::before{background-color:var(--md-switch-pressed-handle-color, var(--md-sys-color-on-surface-variant, #49454f))}.unselected.disabled .handle::before{background-color:var(--md-switch-disabled-handle-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-switch-disabled-handle-opacity, 0.38)}md-ripple{border-radius:var(--md-switch-state-layer-shape, var(--md-sys-shape-corner-full, 9999px));height:var(--md-switch-state-layer-size, 40px);inset:unset;width:var(--md-switch-state-layer-size, 40px)}.selected md-ripple{--md-ripple-hover-color: var(--md-switch-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-pressed-color: var(--md-switch-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-hover-opacity: var(--md-switch-selected-hover-state-layer-opacity, 0.08);--md-ripple-pressed-opacity: var(--md-switch-selected-pressed-state-layer-opacity, 0.12)}.unselected md-ripple{--md-ripple-hover-color: var(--md-switch-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-color: var(--md-switch-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-switch-hover-state-layer-opacity, 0.08);--md-ripple-pressed-opacity: var(--md-switch-pressed-state-layer-opacity, 0.12)}}@layer hcm{@media(forced-colors: active){.unselected .handle::before{background:ButtonText}.disabled .handle::before{opacity:1}.disabled.unselected .handle::before{background:GrayText}}}@layer styles{.icons{position:relative;height:100%;width:100%}.icon{position:absolute;inset:0;margin:auto;display:flex;align-items:center;justify-content:center;fill:currentColor;transition:fill 67ms linear,opacity 33ms linear,transform 167ms cubic-bezier(0.2, 0, 0, 1);opacity:0}.disabled .icon{transition:none}.selected .icon--on,.unselected .icon--off{opacity:1}.unselected .handle:not(.with-icon) .icon--on{transform:rotate(-45deg)}.icon--off{width:var(--md-switch-icon-size, 16px);height:var(--md-switch-icon-size, 16px);color:var(--md-switch-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9))}.unselected:hover .icon--off{color:var(--md-switch-hover-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9))}.unselected:focus-within .icon--off{color:var(--md-switch-focus-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9))}.unselected:active .icon--off{color:var(--md-switch-pressed-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9))}.unselected.disabled .icon--off{color:var(--md-switch-disabled-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9));opacity:var(--md-switch-disabled-icon-opacity, 0.38)}.icon--on{width:var(--md-switch-selected-icon-size, 16px);height:var(--md-switch-selected-icon-size, 16px);color:var(--md-switch-selected-icon-color, var(--md-sys-color-on-primary-container, #21005d))}.selected:hover .icon--on{color:var(--md-switch-selected-hover-icon-color, var(--md-sys-color-on-primary-container, #21005d))}.selected:focus-within .icon--on{color:var(--md-switch-selected-focus-icon-color, var(--md-sys-color-on-primary-container, #21005d))}.selected:active .icon--on{color:var(--md-switch-selected-pressed-icon-color, var(--md-sys-color-on-primary-container, #21005d))}.selected.disabled .icon--on{color:var(--md-switch-disabled-selected-icon-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-switch-disabled-selected-icon-opacity, 0.38)}}@layer hcm{@media(forced-colors: active){.icon--off{fill:Canvas}.icon--on{fill:ButtonText}.disabled.unselected .icon--off,.disabled.selected .icon--on{opacity:1}.disabled .icon--on{fill:GrayText}}}
`;let U=class extends E{};U.styles=[O],U=r([c("md-switch")],U);class F{constructor(e,t,a=null){this.key=e,this.oDataFilter=t,this.value=a}getOdataFilter(){return null===this.value?null:this.oDataFilter(this.value)}}function L(e,t){if(e instanceof RegExp)return{keys:!1,pattern:e};var a,s,i,r,o=[],l="",n=e.split("/");for(n[0]||n.shift();i=n.shift();)"*"===(a=i[0])?(o.push(a),l+="?"===i[1]?"(?:/(.*))?":"/(.*)"):":"===a?(s=i.indexOf("?",1),r=i.indexOf(".",1),o.push(i.substring(1,~s?s:~r?r:i.length)),l+=~s&&!~r?"(?:/([^/]+?))?":"/([^/]+?)",~r&&(l+=(~s?"?":"")+"\\"+i.substring(r))):l+="/"+i;return{keys:o,pattern:new RegExp("^"+l+"/?$","i")}}class H{#_=new Map;#A=[];#C;get path(){return this.#C}set path(e){this.#C=e}subscribeToFilterChange(e){this.#A.push(e)}unsubscribeFromFilterChange(e){this.#A=this.#A.filter((t=>t!=e))}#T(){this.#A.forEach((e=>e()))}constructor(e){this.path=e;const t=history.pushState.bind(history);history.pushState=(...e)=>{t(...e);L(this.path).pattern.test(window.location.pathname)&&this.loadFromQueryString()};const a=history.replaceState.bind(history);history.replaceState=(...e)=>{a(...e);L(this.path).pattern.test(window.location.pathname)&&this.loadFromQueryString()}}loadFromQueryString(){const e=new URLSearchParams(location.search);let t=!1;return this.#_.forEach((a=>{let s=null;e.has(a.key)&&(s=e.get(a.key)),a.value!==s&&(a.value=s,t=!0)})),t&&this.#T(),t}get filters(){return Array.from(this.#_.values())}getActiveFilterOdata(){const e=[];return this.filters.forEach((t=>{const a=t.getOdataFilter();a&&e.push(a)})),e}setValue(e,t){if(this.#_.has(e)){const a=this.#_.get(e);a&&a?.value!==t&&(a.value=t,this.#z())}}getValue(e){if(!this.#_.has(e))return null;const t=this.#_.get(e);return t?.value}setFilter(e,t,a=null){this.#_.set(e,new F(e,t,a))}getFilter(e){return this.#_.get(e)}#N;#z(){clearTimeout(this.#N),this.#P(),this.#N=window.setTimeout((()=>{this.#T()}),50)}#P(){const e=new URLSearchParams(location.search);this.#_.forEach((t=>{void 0!==t.value&&null!==t.value?e.set(t.key,String(t.value)):e.has(t.key)&&e.delete(t.key)}));const t=`${location.pathname}?${e}`;window.history.replaceState({path:t},"",t)}}const W=[{Name:"Model 3",Appearance:"Slick"},{Name:"Model X",Appearance:"Slick"},{Name:"Model Y",Appearance:"Slick"},{Name:"Model S",Appearance:"Slick"},{Name:"Cybertruck",Appearance:"Ugly"},{Name:"Tesla Semi",Appearance:"Ugly"},{Name:"Model X Plaid",Appearance:"Plaid"},{Name:"Model S Plaid",Appearance:"Plaid"},{Name:"Model S Plaid+",Appearance:"Plaid"},{Name:"Gen. 2 Roadster",Appearance:"Slick"}];let G=class extends e{#M=[];get allItems(){return this.#M}set allItems(e){this.#M=e}#r=[];get items(){return this.#r}set items(e){this.#r=e}#d=[];get selected(){return this.#d}set selected(e){this.#d=e}#o="";get searchTerm(){return this.#o}set searchTerm(e){this.#o=e}#D=0;get resultTotal(){return this.#D}set resultTotal(e){this.#D=e}#j="asc";get sortDirection(){return this.#j}set sortDirection(e){this.#j=e}#B="Name";get sortBy(){return this.#B}set sortBy(e){this.#B=e}#I;get filterController(){return this.#I}set filterController(e){this.#I=e}#l=!1;get singleSelect(){return this.#l}set singleSelect(e){this.#l=e}#n=!1;get disableSelect(){return this.#n}set disableSelect(e){this.#n=e}#c=!1;get disablePaging(){return this.#c}set disablePaging(e){this.#c=e}#R;get dataTable(){return this.#R}set dataTable(e){this.#R=e}#E;get filterModal(){return this.#E}set filterModal(e){this.#E=e}constructor(){super(),this.filterController=new H("/titanium-data-table"),this.filterController.setFilter("Appearance",(e=>`BasketId eq ${e}`)),this.filterController.subscribeToFilterChange((async()=>{this.dataTable&&(this.dataTable?.resetPage(),this.#O())})),this.filterController.loadFromQueryString()}firstUpdated(){this.#U(),this.items=this.allItems.slice(0)}#O(){this.getItemsAsync(this.searchTerm)}#U(){this.allItems=W.map((e=>({Name:e.Name,Appearance:e.Appearance}))),this.#O()}#F(e){this.sortDirection=e.detail,this.dataTable.resetPage(),this.#O()}#L(e){this.sortBy=e.detail,this.dataTable.resetPage(),this.#O()}#H=new P((e=>this.getItemsAsync(e)));async getItemsAsync(e){const t=N(e),a=await this.dataTable.getTake(),s=await this.dataTable.getPage(),i="asc"===this.sortDirection?1:-1;let r=this.allItems.filter((e=>t.every((t=>e.Name?.trim().toLowerCase()?.includes(t.trim().toLowerCase())))));const o=this.filterController.getValue("Appearance");o&&(r=r.filter((e=>e.Appearance===o))),this.items=r.slice(0).sort(((e,t)=>e[this.sortBy]===t[this.sortBy]?0:(e[this.sortBy]??"")<(t[this.sortBy]??"")?i:-i)).slice(a*s,a*s+a),this.resultTotal=r.length}static{this.styles=[t,d,h,s`
      :host {
        display: flex;
        flex-direction: column;

        margin: 24px 12px;
      }

      titanium-data-table {
        margin: 24px 0 36px 0;
        --titanium-page-control-select-width: 108px;
      }

      div[knobs] {
        display: flex;
        flex-wrap: wrap;
        gap: 24px;
        margin: 12px 0;
      }

      div[knobs] div {
        display: flex;
        align-items: center;
        gap: 8px;
      }
    `]}render(){return i`
      <h1>Full working example</h1>
      <p>Table with items and method controls</p>

      <titanium-data-table
        header="Tesla Motors"
        .pageSizes=${[3,5,10,15,100,2e4]}
        @selected-changed=${e=>{this.selected=[...e.detail]}}
        @paging-changed=${()=>{this.#O()}}
        narrow-max-width="800"
        .count=${this.resultTotal}
        .items=${this.items}
        .searchTerm=${this.searchTerm}
        ?single-select=${this.singleSelect}
        ?disable-select=${this.disableSelect}
        ?disable-paging=${this.disablePaging}
      >
        <titanium-search-input
          slot="search-button"
          placeholder="Search"
          .value=${this.searchTerm}
          @input=${e=>{this.searchTerm=e.target.value,this.dataTable.resetPage(),this.#H.debounce(this.searchTerm)}}
        ></titanium-search-input>

      <md-icon-button
            id="menu-anchor"
            aria-haspopup="true"
            aria-controls="menu"
            aria-expanded="false"
            @click=${e=>{const t=e.target.getRootNode().querySelector("#menu");t.open=!t.open}}
          >
            <md-icon>more_vert</md-icon>
          </md-icon-button>

          <md-menu
            id="menu"
            anchor="menu-anchor"
            @close-menu=${e=>{e.detail.itemPath?.[0]?.action?.()}}
          >
            <md-menu-item headline="Reload list (reset)" .action=${()=>this.#U()}>
              <md-icon refresh slot="start">refresh</md-icon>
              Refresh
            </md-menu-item>
          </md-menu>
        </div>

        <md-filled-tonal-button slot="add-button" 
        @click=${()=>{const e=W[this.allItems.length%W.length],t={Name:e.Name,Appearance:e.Appearance};this.allItems.push(t),this.#O()}}>
          <md-icon slot="icon">add</md-icon>
          Add item
        </md-filled-tonal-button>

        <data-table-demo-filter-modal slot="filters" .filterController=${this.filterController}></data-table-demo-filter-modal>

        <md-icon-button
          slot="filter-button"
          @click=${async()=>{this.filterModal.open()}}
        >
          <md-icon>filter_list</md-icon>
        </md-icon-button>


        <md-icon-button
          slot="selected-actions"
          ?disabled=${this.selected?.length>1}
          @click=${()=>{this.allItems=this.allItems.filter((e=>!this.selected.includes(e))),this.resultTotal=this.resultTotal-this.selected.length,this.#O()}}
        >
          <md-icon>delete</md-icon>
        </md-icon-button>

        <titanium-data-table-header
          slot="table-headers"
          large
          column-name="Name"
          title="Name"
          @sort-by-changed=${this.#L}
          .sortBy=${this.sortBy}
          .sortDirection=${this.sortDirection}
          @sort-direction-changed=${this.#F}
        ></titanium-data-table-header>

        <titanium-data-table-header
          slot="table-headers"
          column-name="Appearance"
          title="Appearance"
          width="90px"
          @sort-by-changed=${this.#L}
          .sortBy=${this.sortBy}
          .sortDirection=${this.sortDirection}
          @sort-direction-changed=${this.#F}
        ></titanium-data-table-header>

        <titanium-data-table-header
          center
          slot="table-headers"
          column-name="Appearance"
          title="Appearance"
          @sort-by-changed=${this.#L}
          .sortBy=${this.sortBy}
          .sortDirection=${this.sortDirection}
          @sort-direction-changed=${this.#F}
        ></titanium-data-table-header>

        <titanium-data-table-header
          right
          slot="table-headers"
          column-name="Appearance"
          title="Appearance"
          @sort-by-changed=${this.#L}
          .sortBy=${this.sortBy}
          .sortDirection=${this.sortDirection}
          @sort-direction-changed=${this.#F}
        ></titanium-data-table-header>

        ${m(this.items??[],(e=>e.Name),(e=>i`
            <titanium-data-table-item
              ?disable-select=${this.disableSelect}
              @titanium-data-table-item-navigate=${()=>{this.dataTable.clearSelection()}}
              .item=${e}
              slot="items"
            >
              <row-item large ellipsis title=${e.Name??""}>${e.Name??"-"}</row-item>
              <row-item width="90px" title=${e.Appearance??""}>${e.Appearance??"-"}</row-item>
              <row-item center title=${e.Appearance??""}>${e.Appearance??"-"}</row-item>
              <row-item right title=${e.Appearance??""}>${e.Appearance??"-"}</row-item>
            </titanium-data-table-item>
          `))}
      </titanium-data-table>

      <h2>Knobs</h2>
      <div knobs>
        <div>
        <md-switch
              id="singleSelectSwitch"
                .selected=${this.singleSelect}
                @click=${()=>{this.dataTable.clearSelection(),this.singleSelect=!this.singleSelect}}
              ></md-switch>
        <label for="singleSelectSwitch">Single Select</label>
              </div>
         
         
              <div>
          <md-switch
          id="disableSelectSwitch"
            .selected=${this.disableSelect}
            @click=${()=>{this.dataTable.clearSelection(),this.disableSelect=!this.disableSelect}}
          ></md-switch>
          <label for="disableSelectSwitch">Disable Select</label>

          </div>
          <div>
          <md-switch
          id="disablePagingSwitch"
            .selected=${this.disablePaging}
            @click=${()=>{this.disablePaging=!this.disablePaging}}
          ></md-switch>
          <label for="disablePagingSwitch">Disable Paging</label>
          </div>

        <md-filled-tonal-button
          raised
          @click=${()=>this.dataTable.resetPage()}
          >Reset page</md-filled-tonal-button>
        <md-filled-tonal-button
          raised
          @click=${()=>this.dataTable.clearSelection()}
          >Clear selection</md-filled-tonal-button >
      </div>
    `}};r([n()],G.prototype,"allItems",null),r([n()],G.prototype,"items",null),r([n()],G.prototype,"selected",null),r([n()],G.prototype,"searchTerm",null),r([n()],G.prototype,"resultTotal",null),r([n()],G.prototype,"sortDirection",null),r([n()],G.prototype,"sortBy",null),r([n()],G.prototype,"filterController",null),r([n()],G.prototype,"singleSelect",null),r([n()],G.prototype,"disableSelect",null),r([n()],G.prototype,"disablePaging",null),r([l("titanium-data-table")],G.prototype,"dataTable",null),r([l("data-table-demo-filter-modal")],G.prototype,"filterModal",null),G=r([c("titanium-data-table-full-playground")],G);let K=class extends e{#I;get filterController(){return this.#I}set filterController(e){this.#I=e}#W;get appearance(){return this.#W}set appearance(e){this.#W=e}#G;get dialog(){return this.#G}set dialog(e){this.#G=e}async firstUpdated(){this.filterController.subscribeToFilterChange((async()=>{this.requestUpdate("filterController")}))}async open(){this.dialog.show()}#K(){const e=this.dialog.shadowRoot?.querySelector("dialog"),t=e?.querySelector(".container"),a=t?.querySelector(".scroller");a&&(a.style.overflow="initial"),t&&(t.style.overflow="initial")}#q(){const e=this.dialog.shadowRoot?.querySelector("dialog"),t=e?.querySelector(".container"),a=t?.querySelector(".scroller");a&&(a.style.overflow=""),t&&(t.style.overflow="")}static{this.styles=[s`
      :host {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 8px;
      }

      md-dialog {
        width: 100%;
      }

      md-dialog form {
        container-type: inline-size;
      }

      md-outlined-select {
        width: 100%;
      }

      [hidden] {
        display: none !important;
      }
    `]}render(){return i`
      <md-input-chip
        remove-only
        ?hidden=${!this.filterController.getValue("Appearance")}
        label="${this.filterController.getValue("Appearance")??""}"
        @remove=${e=>{e.preventDefault(),this.filterController.setValue("Appearance",null),this.requestUpdate("filterController")}}
      >
        <md-icon slot="icon">conditions</md-icon>
      </md-input-chip>

      <md-dialog type="alert">
        <div slot="headline">Filter items by</div>
        <form slot="content" method="dialog">
          <md-outlined-select
            @opening=${()=>this.#K()}
            @closing=${()=>this.#q()}
            label="Appearance"
            hasLeadingIcon
            .value=${this.filterController.getValue("Appearance")??""}
            @request-selection=${e=>{this.appearance=e.target.value}}
          >
            <md-icon slot="leading-icon">conditions</md-icon>

            <md-select-option ?selected=${"Ugly"===this.filterController.getValue("Appearance")} value="Ugly">
              <div slot="headline">Ugly</div>
              <md-icon slot="start" data-variant="icon">conditions</md-icon>
            </md-select-option>
            <md-select-option ?selected=${"Plaid"===this.filterController.getValue("Appearance")} value="Plaid">
              <div slot="headline">Plaid</div>
              <md-icon slot="start" data-variant="icon">conditions</md-icon>
            </md-select-option>
            <md-select-option ?selected=${"Slick"===this.filterController.getValue("Appearance")} value="Slick">
              <div slot="headline">Slick</div>
              <md-icon slot="start" data-variant="icon">conditions</md-icon>
            </md-select-option>
          </md-outlined-select>
        </form>
        <div slot="actions">
          <md-text-button @click=${()=>this.dialog.close("cancel")}> Close </md-text-button>
          <md-filled-tonal-button
            @click=${()=>{this.filterController.setValue("Appearance",this.appearance||null),this.requestUpdate("filterController"),this.dialog.close()}}
            >Apply</md-filled-tonal-button
          >
        </div>
      </md-dialog>
    `}};r([n()],K.prototype,"filterController",null),r([n()],K.prototype,"appearance",null),r([l("md-dialog")],K.prototype,"dialog",null),K=r([c("data-table-demo-filter-modal")],K);let q=class extends e{static{this.styles=[A,s``]}render(){return i`
      <story-header name="Titanium data table" className="TitaniumDataTable"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-data-table/project.json">
        <titanium-data-table-full-playground></titanium-data-table-full-playground>
        <hr />
        <draggable-playground></draggable-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-data-table"></api-docs>
    `}};q=r([c("titanium-data-table-demo")],q);export{q as TitaniumDataTableDemo};
