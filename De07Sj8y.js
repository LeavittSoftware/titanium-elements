import{i as t,h as e,j as s,b as i,c as a,_ as o,n as r,e as n,r as l,t as h}from"./BkdWKSMI.js";import"./D6K90XK6.js";import"./sfbuyCKw.js";import"./wYCSt_jS.js";import{r as d}from"./yhgryvfy.js";import{D as c}from"./7ceWwuQt.js";import{n as g}from"./Dl2jDuSy.js";let p=class extends t{#t;get header(){return this.#t}set header(t){this.#t=t}#e;get localStorageKey(){return this.#e}set localStorageKey(t){this.#e=t}#s=[10,15,20,50];get pageSizes(){return this.#s}set pageSizes(t){this.#s=t}#i=10;get defaultPageSize(){return this.#i}set defaultPageSize(t){this.#i=t}#a;get count(){return this.#a}set count(t){this.#a=t}#o=[];get items(){return this.#o}set items(t){this.#o=t}#r;get searchTerm(){return this.#r}set searchTerm(t){this.#r=t}#n;get singleSelect(){return this.#n}set singleSelect(t){this.#n=t}#l=!1;get disableSelect(){return this.#l}set disableSelect(t){this.#l=t}#h=!1;get disablePaging(){return this.#h}set disablePaging(t){this.#h=t}#d=[];get selected(){return this.#d}set selected(t){this.#d=t}#c;get itemsContainer(){return this.#c}set itemsContainer(t){this.#c=t}#g;get itemsSlot(){return this.#g}set itemsSlot(t){this.#g=t}#p=!1;get narrow(){return this.#p}set narrow(t){this.#p=t}#u;get hasDragItems(){return this.#u}set hasDragItems(t){this.#u=t}#m=560;get narrowMaxWidth(){return this.#m}set narrowMaxWidth(t){this.#m=t}#f;get isLoading(){return this.#f}set isLoading(t){this.#f=t}#b;get tableHeaders(){return this.#b}set tableHeaders(t){this.#b=t}#x;get checkbox(){return this.#x}set checkbox(t){this.#x=t}#y;get pageControl(){return this.#y}set pageControl(t){this.#y=t}#w=0;async getTake(){return(await this.pageControl)?.take??0}async getPage(){return(await this.pageControl)?.page??0}async setTake(t){const e=await this.pageControl;e&&(e.take=t)}async setPage(t){const e=await this.pageControl;e&&(e.page=t)}async resetPage(){await this.setPage(0)}async firstUpdated(){if("function"==typeof ResizeObserver){new ResizeObserver(t=>{for(const e of t){const t=e.contentRect;this.narrow=t.width<this.narrowMaxWidth,this.updateChildrenIsNarrow()}}).observe(this)}else{const t=window.matchMedia("(max-width: 768px)");t.addEventListener("change",t=>{this.narrow=t.matches,this.updateChildrenIsNarrow()}),this.narrow=t.matches,this.updateChildrenIsNarrow()}this.addEventListener(c.eventType,t=>{t.stopPropagation();const e=Math.min(t.hoverIndex,this.items.length-1);if(e!==t.originIndex){const s=this.items[t.originIndex];this.items.splice(t.originIndex,1),this.items.splice(e,0,s),this.dispatchEvent(new u)}}),this.tableHeaders.addEventListener("slotchange",()=>this.updateChildrenIsNarrow()),this.itemsSlot.addEventListener("slotchange",()=>this.updateChildrenIsNarrow()),await((await this.pageControl)?.updateComplete)}updateChildrenIsNarrow(){this.hasDragItems=this.itemsSlot.assignedElements().some(t=>t.enableDrag),this.itemsSlot.assignedElements().forEach(t=>t.narrow=this.narrow),this.tableHeaders.assignedElements().forEach(t=>t.narrow=this.narrow)}clearSelection(){this.#v(),this.selected.length>0&&(this.selected=[],this.#_())}updated(t){t.has("items")&&t.get("items")!==this.items&&this.clearSelection()}#_(){this.dispatchEvent(new CustomEvent("selected-changed",{composed:!0,detail:this.selected}))}async loadWhile(t){this.isLoading=!0,this.#w++;try{await t}finally{this.#w--,0===this.#w&&(this.isLoading=!1)}}#v(){this.#S().forEach(t=>t.deselect())}selectAll(){this.singleSelect||this.#S().forEach(t=>t.select())}#S(){return this.itemsSlot.assignedElements().filter(t=>"function"==typeof t.select&&"function"==typeof t.deselect)}static{this.styles=[e,s,g,i`
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
    `]}render(){return a`
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

        <selected-actions ?hidden=${0===this.selected.length}>
          <h2 ellipsis>${this.selected.length} item${this.selected.length>1?"s":""} selected</h2>
          <div buttons part="selected-actions-container">
            <slot name="selected-actions"></slot>
          </div>
        </selected-actions>
      </header>

      <table-container
        @titanium-data-table-item-selected-changed=${t=>{t.stopPropagation();const e=t.target;e.selected?(this.singleSelect&&this.#S().filter(t=>t.item!==e.item).forEach(t=>t.deselect()),this.selected.push(e.item),this.requestUpdate(),this.#_()):(this.selected.splice(this.selected.indexOf(e.item),1),this.requestUpdate(),this.#_())}}
      >
        <table-header part="table-header-container">
          ${this.disableSelect||this.singleSelect?"":a`
                <md-checkbox
                  title="${this.selected.length>0?"Deselect":"Select"} all checkboxes"
                  aria-label="${this.selected.length>0?"Deselect":"Select"} all checkboxes"
                  ?checked=${this.selected.length>0}
                  ?indeterminate=${0!==this.selected.length&&this.selected.length!==this.items.length}
                  ?disabled=${0===this.items.length}
                  @click=${()=>{this.selected.length>0?this.#v():this.selectAll(),this.checkbox.focus()}}
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
          ${this.disablePaging?"":a`
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
    `}};o([r({type:String})],p.prototype,"header",null),o([r({type:String,attribute:"local-storage-key"})],p.prototype,"localStorageKey",null),o([r({type:Array})],p.prototype,"pageSizes",null),o([r({type:Number,attribute:"default-page-size"})],p.prototype,"defaultPageSize",null),o([r({type:Number})],p.prototype,"count",null),o([r({type:Array})],p.prototype,"items",null),o([r({type:String})],p.prototype,"searchTerm",null),o([r({type:Boolean,attribute:"single-select",reflect:!0})],p.prototype,"singleSelect",null),o([r({type:Boolean,attribute:"disable-select"})],p.prototype,"disableSelect",null),o([r({type:Boolean,attribute:"disable-paging",reflect:!0})],p.prototype,"disablePaging",null),o([r({type:Array})],p.prototype,"selected",null),o([n("div[items-slot]")],p.prototype,"itemsContainer",null),o([n('slot[name="items"]')],p.prototype,"itemsSlot",null),o([r({type:Boolean,reflect:!0,attribute:"narrow"})],p.prototype,"narrow",null),o([r({type:Boolean,attribute:"has-drag-items",reflect:!0})],p.prototype,"hasDragItems",null),o([r({type:Number,attribute:"narrow-max-width",reflect:!0})],p.prototype,"narrowMaxWidth",null),o([l()],p.prototype,"isLoading",null),o([n('slot[name="table-headers"]')],p.prototype,"tableHeaders",null),o([n("md-checkbox")],p.prototype,"checkbox",null),o([d("titanium-page-control")],p.prototype,"pageControl",null),p=o([h("titanium-data-table")],p);class u extends Event{static{this.eventType="titanium-data-table-items-reorder"}constructor(){super(u.eventType)}}class m{constructor(t,e,s=null){this.key=t,this.oDataFilter=e,this.value=s}getOdataFilter(){return null===this.value?null:this.oDataFilter(this.value)}}function f(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var s,i,a,o,r=[],n="",l=t.split("/");for(l[0]||l.shift();a=l.shift();)"*"===(s=a[0])?(r.push(s),n+="?"===a[1]?"(?:/(.*))?":"/(.*)"):":"===s?(i=a.indexOf("?",1),o=a.indexOf(".",1),r.push(a.substring(1,~i?i:~o?o:a.length)),n+=~i&&!~o?"(?:/([^/]+?))?":"/([^/]+?)",~o&&(n+=(~i?"?":"")+"\\"+a.substring(o))):n+="/"+a;return{keys:r,pattern:new RegExp("^"+n+"/?$","i")}}class b{#$=new Map;#k=[];#z;get path(){return this.#z}set path(t){this.#z=t}subscribeToFilterChange(t){this.#k.push(t)}unsubscribeFromFilterChange(t){this.#k=this.#k.filter(e=>e!=t)}#C(){this.#k.forEach(t=>t())}constructor(t){this.path=t;const e=history.pushState.bind(history);history.pushState=(...t)=>{e(...t);f(this.path).pattern.test(window.location.pathname)&&this.loadFromQueryString()};const s=history.replaceState.bind(history);history.replaceState=(...t)=>{s(...t);f(this.path).pattern.test(window.location.pathname)&&this.loadFromQueryString()}}loadFromQueryString(){const t=new URLSearchParams(location.search);let e=!1;return this.#$.forEach(s=>{let i=null;t.has(s.key)&&(i=t.get(s.key)),s.value!==i&&(s.value=i,e=!0)}),e&&this.#C(),e}get filters(){return Array.from(this.#$.values())}getActiveFilterOdata(){const t=[];return this.filters.forEach(e=>{const s=e.getOdataFilter();s&&t.push(s)}),t}setValue(t,e){if(this.#$.has(t)){const s=this.#$.get(t);s&&s?.value!==e&&(s.value=e,this.#P())}}getValue(t){if(!this.#$.has(t))return null;const e=this.#$.get(t);return e?.value}setFilter(t,e,s=null){this.#$.set(t,new m(t,e,s))}getFilter(t){return this.#$.get(t)}#j;#P(){clearTimeout(this.#j),this.#R(),this.#j=window.setTimeout(()=>{this.#C()},50)}#R(){const t=new URLSearchParams(location.search);this.#$.forEach(e=>{void 0!==e.value&&null!==e.value?t.set(e.key,String(e.value)):t.has(e.key)&&t.delete(e.key)});const e=`${location.pathname}?${t}`;window.history.replaceState({path:e},"",e)}}export{b as F};
