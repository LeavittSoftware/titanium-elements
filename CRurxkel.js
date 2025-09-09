import{i as e,h as t,a,p as i,c as r,N as s,x as o,_ as l,r as c,t as d,V as n,W as h,X as m,Y as p,n as u,e as b,Z as g,$ as v,a0 as f,E as w,R as y,a1 as k,a2 as x,a3 as $,a4 as S}from"./DozyzFHA.js";import{S as A}from"./BfdpRqvS.js";import"./BDVeJ6T9.js";import{C as _}from"./VPzvqXk3.js";import"./Ry_JZalX.js";import{F as T}from"./BQ6RhUiu.js";import"./CSoX8agM.js";import"./CNNP0CmB.js";import"./b8T_fkgV.js";import"./DoQo2N7-.js";import{g as N}from"./OXmljVLM.js";import{D as C}from"./DTS7lhmZ.js";import"./C7tTmled.js";import"./DxcHwl2T.js";import"./D7wu7nX5.js";import"./B0JQ5Use.js";import"./Dv1n3xXv.js";let j=class extends e{#e=[];get draggableItems(){return this.#e}set draggableItems(e){this.#e=e}firstUpdated(){this.draggableItems=[{Name:"Model 3",Appearance:"slick"},{Name:"Model X",Appearance:"slick"},{Name:"Model Y",Appearance:"slick"},{Name:"Model S",Appearance:"slick"},{Name:"Cybertruck",Appearance:"ugly"},{Name:"Tesla Semi",Appearance:"ugly"},{Name:"Model X Plaid",Appearance:"plaid"},{Name:"Model S Plaid",Appearance:"plaid"},{Name:"Model S Plaid+",Appearance:"plaid"},{Name:"Gen. 2 Roadster",Appearance:"slick"}]}static{this.styles=[t,a,i,r`
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
    `]}render(){return o`
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

          ${s(this.draggableItems??[],e=>e.Name,e=>o`
              <titanium-data-table-item enable-dragging .item=${e} slot="items">
                <row-item large ellipsis title=${e.Name??""}>${e.Name??"-"}</row-item>
                <row-item title=${e.Appearance??""}>${e.Appearance??"-"}</row-item>
                <row-item right><a href="#">Learn More</a></row-item>
              </titanium-data-table-item>
            `)}
        </titanium-data-table>
        <h2>Results</h2>
        <p>${this.draggableItems.map(e=>e.Name).join(",")}</p>
      </div>
    `}};l([c()],j.prototype,"draggableItems",null),j=l([d("draggable-playground")],j);const M=Symbol("dispatchHooks");const z=new WeakMap;const B=n(h(m(p(e))));class D extends B{constructor(){super(),this.selected=!1,this.icons=!1,this.showOnlySelectedIcon=!1,this.required=!1,this.value="on",this.addEventListener("click",e=>{g(e)&&this.input&&(this.focus(),v(this.input))}),function(e,...t){let a=z.get(e);a||(a=new Set,z.set(e,a));for(const i of t){if(a.has(i))continue;let t=!1;e.addEventListener(i,a=>{if(t)return;a.stopImmediatePropagation();const i=Reflect.construct(a.constructor,[a.type,a]),r=new EventTarget;i[M]=r,t=!0;const s=e.dispatchEvent(i);t=!1,s||a.preventDefault(),r.dispatchEvent(new Event("after"))},{capture:!0}),a.add(i)}}(this,"keydown"),this.addEventListener("keydown",e=>{!function(e,t){const a=e[M];if(!a)throw new Error(`'${e.type}' event needs setupDispatchHooks().`);a.addEventListener("after",t)}(e,()=>{e.defaultPrevented||"Enter"!==e.key||this.disabled||!this.input||this.input.click()})})}render(){return o`
      <div class="switch ${f(this.getRenderClasses())}">
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
    `}getRenderClasses(){return{selected:this.selected,unselected:!this.selected,disabled:this.disabled}}renderHandle(){const e={"with-icon":this.showOnlySelectedIcon?this.selected:this.icons};return o`
      ${this.renderTouchTarget()}
      <span class="handle-container">
        <md-ripple for="switch" ?disabled="${this.disabled}"></md-ripple>
        <span class="handle ${f(e)}">
          ${this.shouldShowIcons()?this.renderIcons():o``}
        </span>
      </span>
    `}renderIcons(){return o`
      <div class="icons">
        ${this.renderOnIcon()}
        ${this.showOnlySelectedIcon?o``:this.renderOffIcon()}
      </div>
    `}renderOnIcon(){return o`
      <slot class="icon icon--on" name="on-icon">
        <svg viewBox="0 0 24 24">
          <path
            d="M9.55 18.2 3.65 12.3 5.275 10.675 9.55 14.95 18.725 5.775 20.35 7.4Z" />
        </svg>
      </slot>
    `}renderOffIcon(){return o`
      <slot class="icon icon--off" name="off-icon">
        <svg viewBox="0 0 24 24">
          <path
            d="M6.4 19.2 4.8 17.6 10.4 12 4.8 6.4 6.4 4.8 12 10.4 17.6 4.8 19.2 6.4 13.6 12 19.2 17.6 17.6 19.2 12 13.6Z" />
        </svg>
      </slot>
    `}renderTouchTarget(){return o`<span class="touch"></span>`}shouldShowIcons(){return this.icons||this.showOnlySelectedIcon}handleInput(e){const t=e.target;this.selected=t.checked}handleChange(e){y(this,e)}[k](){return this.selected?this.value:null}[x](){return String(this.selected)}formResetCallback(){this.selected=this.hasAttribute("selected")}formStateRestoreCallback(e){this.selected="true"===e}[$](){return new _(()=>({checked:this.selected,required:this.required}))}[S](){return this.input}}D.shadowRootOptions={mode:"open",delegatesFocus:!0},l([u({type:Boolean})],D.prototype,"selected",void 0),l([u({type:Boolean})],D.prototype,"icons",void 0),l([u({type:Boolean,attribute:"show-only-selected-icon"})],D.prototype,"showOnlySelectedIcon",void 0),l([u({type:Boolean})],D.prototype,"required",void 0),l([u()],D.prototype,"value",void 0),l([b("input")],D.prototype,"input",void 0);const I=r`@layer styles, hcm;@layer styles{:host{display:inline-flex;outline:none;vertical-align:top;-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer}:host([disabled]){cursor:default}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--md-switch-track-height, 32px))/2) 0px}md-focus-ring{--md-focus-ring-shape-start-start: var(--md-switch-track-shape-start-start, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));--md-focus-ring-shape-start-end: var(--md-switch-track-shape-start-end, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));--md-focus-ring-shape-end-end: var(--md-switch-track-shape-end-end, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));--md-focus-ring-shape-end-start: var(--md-switch-track-shape-end-start, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)))}.switch{align-items:center;display:inline-flex;flex-shrink:0;position:relative;width:var(--md-switch-track-width, 52px);height:var(--md-switch-track-height, 32px);border-start-start-radius:var(--md-switch-track-shape-start-start, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));border-start-end-radius:var(--md-switch-track-shape-start-end, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));border-end-end-radius:var(--md-switch-track-shape-end-end, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));border-end-start-radius:var(--md-switch-track-shape-end-start, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)))}input{appearance:none;height:max(100%,var(--md-switch-touch-target-size, 48px));outline:none;margin:0;position:absolute;width:max(100%,var(--md-switch-touch-target-size, 48px));z-index:1;cursor:inherit;top:50%;left:50%;transform:translate(-50%, -50%)}:host([touch-target=none]) input{display:none}}@layer styles{.track{position:absolute;width:100%;height:100%;box-sizing:border-box;border-radius:inherit;display:flex;justify-content:center;align-items:center}.track::before{content:"";display:flex;position:absolute;height:100%;width:100%;border-radius:inherit;box-sizing:border-box;transition-property:opacity,background-color;transition-timing-function:linear;transition-duration:67ms}.disabled .track{background-color:rgba(0,0,0,0);border-color:rgba(0,0,0,0)}.disabled .track::before,.disabled .track::after{transition:none;opacity:var(--md-switch-disabled-track-opacity, 0.12)}.disabled .track::before{background-clip:content-box}.selected .track::before{background-color:var(--md-switch-selected-track-color, var(--md-sys-color-primary, #6750a4))}.selected:hover .track::before{background-color:var(--md-switch-selected-hover-track-color, var(--md-sys-color-primary, #6750a4))}.selected:focus-within .track::before{background-color:var(--md-switch-selected-focus-track-color, var(--md-sys-color-primary, #6750a4))}.selected:active .track::before{background-color:var(--md-switch-selected-pressed-track-color, var(--md-sys-color-primary, #6750a4))}.selected.disabled .track{background-clip:border-box}.selected.disabled .track::before{background-color:var(--md-switch-disabled-selected-track-color, var(--md-sys-color-on-surface, #1d1b20))}.unselected .track::before{background-color:var(--md-switch-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-track-outline-color, var(--md-sys-color-outline, #79747e));border-style:solid;border-width:var(--md-switch-track-outline-width, 2px)}.unselected:hover .track::before{background-color:var(--md-switch-hover-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-hover-track-outline-color, var(--md-sys-color-outline, #79747e))}.unselected:focus-visible .track::before{background-color:var(--md-switch-focus-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-focus-track-outline-color, var(--md-sys-color-outline, #79747e))}.unselected:active .track::before{background-color:var(--md-switch-pressed-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-pressed-track-outline-color, var(--md-sys-color-outline, #79747e))}.unselected.disabled .track::before{background-color:var(--md-switch-disabled-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-disabled-track-outline-color, var(--md-sys-color-on-surface, #1d1b20))}}@layer hcm{@media(forced-colors: active){.selected .track::before{background:ButtonText;border-color:ButtonText}.disabled .track::before{border-color:GrayText;opacity:1}.disabled.selected .track::before{background:GrayText}}}@layer styles{.handle-container{display:flex;place-content:center;place-items:center;position:relative;transition:margin 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275)}.selected .handle-container{margin-inline-start:calc(var(--md-switch-track-width, 52px) - var(--md-switch-track-height, 32px))}.unselected .handle-container{margin-inline-end:calc(var(--md-switch-track-width, 52px) - var(--md-switch-track-height, 32px))}.disabled .handle-container{transition:none}.handle{border-start-start-radius:var(--md-switch-handle-shape-start-start, var(--md-switch-handle-shape, var(--md-sys-shape-corner-full, 9999px)));border-start-end-radius:var(--md-switch-handle-shape-start-end, var(--md-switch-handle-shape, var(--md-sys-shape-corner-full, 9999px)));border-end-end-radius:var(--md-switch-handle-shape-end-end, var(--md-switch-handle-shape, var(--md-sys-shape-corner-full, 9999px)));border-end-start-radius:var(--md-switch-handle-shape-end-start, var(--md-switch-handle-shape, var(--md-sys-shape-corner-full, 9999px)));height:var(--md-switch-handle-height, 16px);width:var(--md-switch-handle-width, 16px);transform-origin:center;transition-property:height,width;transition-duration:250ms,250ms;transition-timing-function:cubic-bezier(0.2, 0, 0, 1),cubic-bezier(0.2, 0, 0, 1);z-index:0}.handle::before{content:"";display:flex;inset:0;position:absolute;border-radius:inherit;box-sizing:border-box;transition:background-color 67ms linear}.disabled .handle,.disabled .handle::before{transition:none}.selected .handle{height:var(--md-switch-selected-handle-height, 24px);width:var(--md-switch-selected-handle-width, 24px)}.handle.with-icon{height:var(--md-switch-with-icon-handle-height, 24px);width:var(--md-switch-with-icon-handle-width, 24px)}.selected:not(.disabled):active .handle,.unselected:not(.disabled):active .handle{height:var(--md-switch-pressed-handle-height, 28px);width:var(--md-switch-pressed-handle-width, 28px);transition-timing-function:linear;transition-duration:100ms}.selected .handle::before{background-color:var(--md-switch-selected-handle-color, var(--md-sys-color-on-primary, #fff))}.selected:hover .handle::before{background-color:var(--md-switch-selected-hover-handle-color, var(--md-sys-color-primary-container, #eaddff))}.selected:focus-within .handle::before{background-color:var(--md-switch-selected-focus-handle-color, var(--md-sys-color-primary-container, #eaddff))}.selected:active .handle::before{background-color:var(--md-switch-selected-pressed-handle-color, var(--md-sys-color-primary-container, #eaddff))}.selected.disabled .handle::before{background-color:var(--md-switch-disabled-selected-handle-color, var(--md-sys-color-surface, #fef7ff));opacity:var(--md-switch-disabled-selected-handle-opacity, 1)}.unselected .handle::before{background-color:var(--md-switch-handle-color, var(--md-sys-color-outline, #79747e))}.unselected:hover .handle::before{background-color:var(--md-switch-hover-handle-color, var(--md-sys-color-on-surface-variant, #49454f))}.unselected:focus-within .handle::before{background-color:var(--md-switch-focus-handle-color, var(--md-sys-color-on-surface-variant, #49454f))}.unselected:active .handle::before{background-color:var(--md-switch-pressed-handle-color, var(--md-sys-color-on-surface-variant, #49454f))}.unselected.disabled .handle::before{background-color:var(--md-switch-disabled-handle-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-switch-disabled-handle-opacity, 0.38)}md-ripple{border-radius:var(--md-switch-state-layer-shape, var(--md-sys-shape-corner-full, 9999px));height:var(--md-switch-state-layer-size, 40px);inset:unset;width:var(--md-switch-state-layer-size, 40px)}.selected md-ripple{--md-ripple-hover-color: var(--md-switch-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-pressed-color: var(--md-switch-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-hover-opacity: var(--md-switch-selected-hover-state-layer-opacity, 0.08);--md-ripple-pressed-opacity: var(--md-switch-selected-pressed-state-layer-opacity, 0.12)}.unselected md-ripple{--md-ripple-hover-color: var(--md-switch-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-color: var(--md-switch-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-switch-hover-state-layer-opacity, 0.08);--md-ripple-pressed-opacity: var(--md-switch-pressed-state-layer-opacity, 0.12)}}@layer hcm{@media(forced-colors: active){.unselected .handle::before{background:ButtonText}.disabled .handle::before{opacity:1}.disabled.unselected .handle::before{background:GrayText}}}@layer styles{.icons{position:relative;height:100%;width:100%}.icon{position:absolute;inset:0;margin:auto;display:flex;align-items:center;justify-content:center;fill:currentColor;transition:fill 67ms linear,opacity 33ms linear,transform 167ms cubic-bezier(0.2, 0, 0, 1);opacity:0}.disabled .icon{transition:none}.selected .icon--on,.unselected .icon--off{opacity:1}.unselected .handle:not(.with-icon) .icon--on{transform:rotate(-45deg)}.icon--off{width:var(--md-switch-icon-size, 16px);height:var(--md-switch-icon-size, 16px);color:var(--md-switch-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9))}.unselected:hover .icon--off{color:var(--md-switch-hover-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9))}.unselected:focus-within .icon--off{color:var(--md-switch-focus-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9))}.unselected:active .icon--off{color:var(--md-switch-pressed-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9))}.unselected.disabled .icon--off{color:var(--md-switch-disabled-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9));opacity:var(--md-switch-disabled-icon-opacity, 0.38)}.icon--on{width:var(--md-switch-selected-icon-size, 16px);height:var(--md-switch-selected-icon-size, 16px);color:var(--md-switch-selected-icon-color, var(--md-sys-color-on-primary-container, #21005d))}.selected:hover .icon--on{color:var(--md-switch-selected-hover-icon-color, var(--md-sys-color-on-primary-container, #21005d))}.selected:focus-within .icon--on{color:var(--md-switch-selected-focus-icon-color, var(--md-sys-color-on-primary-container, #21005d))}.selected:active .icon--on{color:var(--md-switch-selected-pressed-icon-color, var(--md-sys-color-on-primary-container, #21005d))}.selected.disabled .icon--on{color:var(--md-switch-disabled-selected-icon-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-switch-disabled-selected-icon-opacity, 0.38)}}@layer hcm{@media(forced-colors: active){.icon--off{fill:Canvas}.icon--on{fill:ButtonText}.disabled.unselected .icon--off,.disabled.selected .icon--on{opacity:1}.disabled .icon--on{fill:GrayText}}}
`;let P=class extends D{};P.styles=[I],P=l([d("md-switch")],P);const R=[{Name:"Model 3",Appearance:"Slick"},{Name:"Model X",Appearance:"Slick"},{Name:"Model Y",Appearance:"Slick"},{Name:"Model S",Appearance:"Slick"},{Name:"Cybertruck",Appearance:"Ugly"},{Name:"Tesla Semi",Appearance:"Ugly"},{Name:"Model X Plaid",Appearance:"Plaid"},{Name:"Model S Plaid",Appearance:"Plaid"},{Name:"Model S Plaid+",Appearance:"Plaid"},{Name:"Gen. 2 Roadster",Appearance:"Slick"}];let U=class extends e{#t=[];get allItems(){return this.#t}set allItems(e){this.#t=e}#a=[];get items(){return this.#a}set items(e){this.#a=e}#i=[];get selected(){return this.#i}set selected(e){this.#i=e}#r="";get searchTerm(){return this.#r}set searchTerm(e){this.#r=e}#s=0;get resultTotal(){return this.#s}set resultTotal(e){this.#s=e}#o="asc";get sortDirection(){return this.#o}set sortDirection(e){this.#o=e}#l="Name";get sortBy(){return this.#l}set sortBy(e){this.#l=e}#c;get filterController(){return this.#c}set filterController(e){this.#c=e}#d=!1;get singleSelect(){return this.#d}set singleSelect(e){this.#d=e}#n=!1;get disableSelect(){return this.#n}set disableSelect(e){this.#n=e}#h=!1;get disablePaging(){return this.#h}set disablePaging(e){this.#h=e}#m;get dataTable(){return this.#m}set dataTable(e){this.#m=e}#p;get filterModal(){return this.#p}set filterModal(e){this.#p=e}constructor(){super(),this.filterController=new T("/titanium-data-table"),this.filterController.setFilter("Appearance",e=>`BasketId eq ${e}`),this.filterController.subscribeToFilterChange(async()=>{this.dataTable&&(this.dataTable?.resetPage(),this.#u())}),this.filterController.loadFromQueryString()}firstUpdated(){this.#b(),this.items=this.allItems.slice(0)}#u(){this.getItemsAsync(this.searchTerm)}#b(){this.allItems=R.map(e=>({Name:e.Name,Appearance:e.Appearance})),this.#u()}#g(e){this.sortDirection=e.detail,this.dataTable.resetPage(),this.#u()}#v(e){this.sortBy=e.detail,this.dataTable.resetPage(),this.#u()}#f=new C(e=>this.getItemsAsync(e));async getItemsAsync(e){const t=N(e),a=await this.dataTable.getTake(),i=await this.dataTable.getPage(),r="asc"===this.sortDirection?1:-1;let s=this.allItems.filter(e=>t.every(t=>e.Name?.trim().toLowerCase()?.includes(t.trim().toLowerCase())));const o=this.filterController.getValue("Appearance");o&&(s=s.filter(e=>e.Appearance===o)),this.items=s.slice(0).sort((e,t)=>e[this.sortBy]===t[this.sortBy]?0:(e[this.sortBy]??"")<(t[this.sortBy]??"")?r:-r).slice(a*i,a*i+a),this.resultTotal=s.length}static{this.styles=[t,a,i,r`
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
    `]}render(){return o`
      <h1>Full working example</h1>
      <p>Table with items and method controls</p>

      <titanium-data-table
        header="Tesla Motors"
        .pageSizes=${[3,5,10,15,100,2e4]}
        @selected-changed=${e=>{this.selected=[...e.detail]}}
        @paging-changed=${()=>{this.#u()}}
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
          @input=${e=>{this.searchTerm=e.target.value,this.dataTable.resetPage(),this.#f.debounce(this.searchTerm)}}
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
            <md-menu-item headline="Reload list (reset)" .action=${()=>this.#b()}>
              <md-icon refresh slot="start">refresh</md-icon>
              Refresh
            </md-menu-item>
          </md-menu>
        </div>

        <md-filled-tonal-button slot="add-button" 
        @click=${()=>{const e=R[this.allItems.length%R.length],t={Name:e.Name,Appearance:e.Appearance};this.allItems.push(t),this.#u()}}>
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
          @click=${()=>{this.allItems=this.allItems.filter(e=>!this.selected.includes(e)),this.resultTotal=this.resultTotal-this.selected.length,this.#u()}}
        >
          <md-icon>delete</md-icon>
        </md-icon-button>

        <titanium-data-table-header
          slot="table-headers"
          large
          column-name="Name"
          title="Name"
          @sort-by-changed=${this.#v}
          .sortBy=${this.sortBy}
          .sortDirection=${this.sortDirection}
          @sort-direction-changed=${this.#g}
        ></titanium-data-table-header>

        <titanium-data-table-header
          slot="table-headers"
          column-name="Appearance"
          title="Appearance"
          width="90px"
          @sort-by-changed=${this.#v}
          .sortBy=${this.sortBy}
          .sortDirection=${this.sortDirection}
          @sort-direction-changed=${this.#g}
        ></titanium-data-table-header>

        <titanium-data-table-header
          center
          slot="table-headers"
          column-name="Appearance"
          title="Appearance"
          @sort-by-changed=${this.#v}
          .sortBy=${this.sortBy}
          .sortDirection=${this.sortDirection}
          @sort-direction-changed=${this.#g}
        ></titanium-data-table-header>

        <titanium-data-table-header
          right
          slot="table-headers"
          column-name="Appearance"
          title="Appearance"
          @sort-by-changed=${this.#v}
          .sortBy=${this.sortBy}
          .sortDirection=${this.sortDirection}
          @sort-direction-changed=${this.#g}
        ></titanium-data-table-header>

        ${s(this.items??[],e=>e.Name,e=>o`
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
          `)}
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
    `}};l([c()],U.prototype,"allItems",null),l([c()],U.prototype,"items",null),l([c()],U.prototype,"selected",null),l([c()],U.prototype,"searchTerm",null),l([c()],U.prototype,"resultTotal",null),l([c()],U.prototype,"sortDirection",null),l([c()],U.prototype,"sortBy",null),l([c()],U.prototype,"filterController",null),l([c()],U.prototype,"singleSelect",null),l([c()],U.prototype,"disableSelect",null),l([c()],U.prototype,"disablePaging",null),l([b("titanium-data-table")],U.prototype,"dataTable",null),l([b("data-table-demo-filter-modal")],U.prototype,"filterModal",null),U=l([d("titanium-data-table-full-playground")],U);let G=class extends e{#c;get filterController(){return this.#c}set filterController(e){this.#c=e}#w;get appearance(){return this.#w}set appearance(e){this.#w=e}#y;get dialog(){return this.#y}set dialog(e){this.#y=e}async firstUpdated(){this.filterController.subscribeToFilterChange(async()=>{this.requestUpdate("filterController")})}async open(){this.dialog.show()}#k(){const e=this.dialog.shadowRoot?.querySelector("dialog"),t=e?.querySelector(".container"),a=t?.querySelector(".scroller");a&&(a.style.overflow="initial"),t&&(t.style.overflow="initial")}#x(){const e=this.dialog.shadowRoot?.querySelector("dialog"),t=e?.querySelector(".container"),a=t?.querySelector(".scroller");a&&(a.style.overflow=""),t&&(t.style.overflow="")}static{this.styles=[r`
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
    `]}render(){return o`
      <md-input-chip
        remove-only
        ?hidden=${!this.filterController.getValue("Appearance")}
        label=${this.filterController.getValue("Appearance")??""}
        @remove=${e=>{e.preventDefault(),this.filterController.setValue("Appearance",null),this.requestUpdate("filterController")}}
      >
        <md-icon slot="icon">conditions</md-icon>
      </md-input-chip>

      <md-dialog type="alert">
        <div slot="headline">Filter items by</div>
        <form slot="content" method="dialog">
          <md-outlined-select
            @opening=${()=>this.#k()}
            @closing=${()=>this.#x()}
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
    `}};l([c()],G.prototype,"filterController",null),l([c()],G.prototype,"appearance",null),l([b("md-dialog")],G.prototype,"dialog",null),G=l([d("data-table-demo-filter-modal")],G);let X=class extends e{static{this.styles=[A,r``]}render(){return o`
      <story-header name="Titanium data table" className="TitaniumDataTable"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-data-table/project.json">
        <titanium-data-table-full-playground></titanium-data-table-full-playground>
        <hr />
        <draggable-playground></draggable-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-data-table"></api-docs>
    `}};X=l([d("titanium-data-table-demo")],X);export{X as TitaniumDataTableDemo};
