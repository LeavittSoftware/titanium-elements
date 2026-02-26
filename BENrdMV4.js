import{i as t,b as e,_ as i,n as s,r as o,c as n,t as a,v as r,u as l,w as d,C as c,e as h,g as m,p as u,j as g,f as p,L as b,S as x,a as f,D as y,N as v,s as w,F as $}from"./BkdWKSMI.js";import"./sfbuyCKw.js";import"./pNeA5_IP.js";import{n as _}from"./Dl2jDuSy.js";import"./ChwwPp1m.js";import{d as k}from"./fEBq_QNq.js";class S extends Event{static{this.eventType="item-drop"}constructor(t,e){super(S.eventType,{composed:!0,bubbles:!0}),this.hoverIndex=e,this.originIndex=t}}class D extends t{constructor(){super(...arguments),this.#t=null,this.#e=null,this.mouseEvent=t=>{if(!this.disableDrag)return this.#i(t,"mouse")},this.touchEvent=t=>{if(!this.disableDrag)return this.#i(t,"touch")}}#s;get nudgeDown(){return this.#s}set nudgeDown(t){this.#s=t}#o;get nudgeUp(){return this.#o}set nudgeUp(t){this.#o=t}#n;get dragged(){return this.#n}set dragged(t){this.#n=t}#a;get dragging(){return this.#a}set dragging(t){this.#a=t}#r;get disableDrag(){return this.#r}set disableDrag(t){this.#r=t}#l;get scrollableContainer(){return this.#l}set scrollableContainer(t){this.#l=t}#d;get nudgeHeight(){return this.#d}set nudgeHeight(t){this.#d=t}#t;get hoverIndex(){return this.#t}set hoverIndex(t){this.#t=t}#e;get originIndex(){return this.#e}set originIndex(t){this.#e=t}static{this.styles=e`
    [drag] {
      cursor: grab;
    }

    md-elevation {
      transition-duration: 250ms;
      transition-timing-function: ease-in-out;
    }

    :host([disable-drag]) [drag] {
      cursor: inherit;
      opacity: 0.2;
    }

    :host([dragged]) md-elevation {
      --md-elevation-level: 3;
    }

    :host([dragged]) {
      transition: none;

      z-index: 5 !important;
      background-color: var(--md-sys-color-surface-container-high);
    }

    /* Only have transition under dragging, because we don't want nudged
     * items to transition into place once dragging is complete */
    :host([dragging]:not([dragged])) {
      transition: transform 0.2s ease-out;
    }
  `}get items(){return[]}get itemsContainer(){return null}updateDragProps(t,e,i,s){const o=this.items.indexOf(this);this.nudgeDown=null!==e&&null!==i&&o<e&&o>=i,this.nudgeUp=null!==e&&null!==i&&o>e&&o<=i,this.dragged=e===o,this.dragging=t,this.nudgeHeight=s}#c(t,e){for(let i=0;i<t.length;i++){if(e<=t[i])return i}return t.length-1}#h(t,e){const i=Math.max(e??0,t??0)+1;let s=Math.min(e??0,t??0)-1;return s=s<0?0:s,[i,s]}#m(t,e,i,s){const o=this.#h(t,e);for(let t=o[1];t<=o[0];t++){const e=this.items?.[t];e?.updateDragProps(i,this.originIndex,this.hoverIndex,s)}}#u(t,e){const i=this.#h(t,e);for(let t=i[1];t<=i[0];t++){const e=this.items?.[t];e?.updateDragProps(!1,null,null,0)}}#g(t,e){return t>10?e?1:2:t>5?e?1.5:4:e?2:6}#i(t,e){const i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);if("mouse"===e&&1!==t.which)return;t.preventDefault();let s=0,o=0;this.dragging=!0,this.originIndex=this.items.indexOf(this);const n="touch"===e?"touchmove":"mousemove",a="touch"===e?"touchend":"mouseup",r=(t.pageY??t.touches[0].pageY)+this.scrollableContainer?.scrollTop,l=this.getBoundingClientRect().height;let d=0;const c=this.items.map(t=>(d+=t.getBoundingClientRect().height,d)),h=t=>{const e=t.pageY??t.touches[0].pageY,n=t.clientY??t.touches[0].clientY,a=t=>{const i=this.itemsContainer?.getBoundingClientRect()?.top??0,s=n-i;this.hoverIndex=this.#c(c,s),this.#m(this.originIndex,this.hoverIndex,this.dragging,l),s<c[c.length-1]&&(this.style.transform=`translateY(${e-r+t}px)`)};if(a(this.scrollableContainer?.scrollTop??0),this.scrollableContainer){const t=this.scrollableContainer?.getBoundingClientRect()?.top+window.scrollY,n=this.scrollableContainer?.getBoundingClientRect()?.bottom+window.scrollY,r=e-t,l=n-e,d=10,c=t=>{const e=performance.now();e-o>=d&&(a(this.scrollableContainer?.scrollTop),this.scrollableContainer.scrollBy(0,t),o=e)};if(r<20){clearInterval(s);const t=this.#g(r,i);c(-t),s=window.setInterval(()=>{c(-t)},d)}else if(l<20){clearInterval(s);const t=this.#g(l,i);c(t),s=window.setInterval(()=>{c(t)},d)}else clearInterval(s)}},m=()=>{clearInterval(s),document.removeEventListener(n,h),this.removeEventListener(a,u),this.dragging=!1;const t=()=>{this.#u(this.originIndex,this.hoverIndex),this.originIndex=null,this.hoverIndex=null,this.style.transform="",this.style.transition="",this.removeEventListener("transitionend",t)};this.addEventListener("transitionend",t),this.style.transition="transform 0.1s ease-out",this.style.transform="translate3d(0, 0, 0)",document.removeEventListener("mouseout",m)},u=()=>{clearInterval(s),s=0,this.dragging=!1,this.items.forEach(t=>t.dragging=!1),document.removeEventListener(n,h),document.removeEventListener(a,u),"mouse"===e&&document.removeEventListener("mouseout",m);const t=()=>{null!==this.originIndex&&null!==this.hoverIndex&&this.dispatchEvent(new S(this.originIndex,this.hoverIndex)),this.#u(this.originIndex,this.hoverIndex),this.originIndex=null,this.hoverIndex=null,this.style.transform="",this.style.transition="",this.removeEventListener("transitionend",t)};this.addEventListener("transitionend",t);const i=this.items.filter(t=>t.nudgeUp).map(t=>t.getBoundingClientRect().height>0?t.getBoundingClientRect().height-1:0).reduce((t,e)=>t+e,0),o=this.items.filter(t=>t.nudgeDown).map(t=>-t.getBoundingClientRect().height-1).reduce((t,e)=>t+e,0),r=0!==i?i:o;this.style.transition="transform 0.1s ease-out",this.style.transform=`translate3d(0, ${r}px, 0)`};"mouse"===e&&window.addEventListener("mouseout",m),document.addEventListener(a,u),document.addEventListener(n,h),h(t)}}i([s({type:Boolean,reflect:!0,attribute:"nudge-down"})],D.prototype,"nudgeDown",null),i([s({type:Boolean,reflect:!0,attribute:"nudge-up"})],D.prototype,"nudgeUp",null),i([s({type:Boolean,reflect:!0,attribute:"dragged"})],D.prototype,"dragged",null),i([s({type:Boolean,reflect:!0,attribute:"dragging"})],D.prototype,"dragging",null),i([s({type:Boolean,attribute:"disable-drag",reflect:!0})],D.prototype,"disableDrag",null),i([s({type:Object})],D.prototype,"scrollableContainer",null),i([o()],D.prototype,"nudgeHeight",null),i([o()],D.prototype,"hoverIndex",null),i([o()],D.prototype,"originIndex",null);let C=class extends D{#p;get name(){return this.#p}set name(t){this.#p=t}#b;get selected(){return this.#b}set selected(t){this.#b=t}#x;get disabled(){return this.#x}set disabled(t){this.#x=t}get items(){return Array.from(this.parentElement?.querySelectorAll("titanium-data-table-core-settings-choose-columns-item")??[])}get itemsContainer(){return this.parentElement}static{this.styles=[D.styles,e`
      :host {
        display: grid;
        grid: 'icon label switch' / auto 1fr auto;
        user-select: none;

        font-size: 15px;
        line-height: 17px;

        align-items: center;
        gap: 8px;
        min-height: 48px;
        border-bottom: 1px solid var(--md-sys-color-outline-variant);

        position: relative;
        box-sizing: border-box;
      }

      :host(:last-of-type) {
        border-bottom: none;
      }

      md-switch {
        --md-switch-track-height: 24px;
        --md-switch-with-icon-handle-height: 20px;
        --md-switch-with-icon-handle-width: 20px;
        --md-switch-track-width: 40px;
      }
    `]}render(){return n`
      <style>
        :host([nudge-down]:not([dragged])) {
          transform: translate3d(0, ${this.nudgeHeight}px, 0);
        }

        :host([nudge-up]:not([dragged])) {
          transform: translate3d(0, -${this.nudgeHeight}px, 0);
        }
      </style>
      <md-elevation></md-elevation>
      <md-icon @mousedown=${this.mouseEvent} @touchstart=${this.touchEvent} drag>drag_handle</md-icon>
      <span>${this.name}</span>
      <md-switch
        ?selected=${this.selected}
        @change=${()=>{this.selected=!this.selected,this.dispatchEvent(new Event("changed"))}}
        icons
        show-only-selected-icon
        ?disabled=${this.disabled}
      ></md-switch>
    `}};i([s({type:String})],C.prototype,"name",null),i([s({type:Boolean})],C.prototype,"selected",null),i([s({type:Boolean})],C.prototype,"disabled",null),C=i([a("titanium-data-table-core-settings-choose-columns-item")],C);let M=class extends t{#f=null;get tableMetaData(){return this.#f}set tableMetaData(t){this.#f=t}#y=[];get userSettings(){return this.#y}set userSettings(t){this.#y=t}#v=!1;get customColumnsApplied(){return this.#v}set customColumnsApplied(t){this.#v=t}#w;get dialog(){return this.#w}set dialog(t){this.#w=t}updated(t){if(t.has("tableMetaData")&&(this.tableMetaData?.itemMetaData.some(t=>!this.userSettings.some(e=>e.key===t.key))&&this.resetColumns(),this.tableMetaData?.itemMetaData.length!==this.userSettings.length&&this.resetColumns()),t.has("userSettings")||t.has("tableMetaData")){const t=this.#$(this.userSettings,this.tableMetaData)>0;this.customColumnsApplied!==t&&(this.customColumnsApplied=t,this.dispatchEvent(new Event("custom-columns-applied-change")))}}#$(t,e){let i=0;for(const s of e?.itemMetaData??[]){const e=t.find(t=>t.key===s.key);e?.show&&s.hideByDefault&&i++,e?.show||s.hideByDefault||i++}return(t.some((t,i)=>t.key!==e?.itemMetaData[i].key)||e?.itemMetaData.some((e,i)=>e.key!==t[i].key))&&i++,i}resetColumns(){const t=this.tableMetaData?.itemMetaData.map(t=>({key:t.key,show:!t.hideByDefault}))??[];JSON.stringify(t)!==JSON.stringify(this.userSettings)&&(this.userSettings=t,this.dispatchEvent(new Event("setting-change")))}async show(){return this.dialog.returnValue="",this.dialog?.show(),await new Promise(t=>{this.#_=t})}#_;static{this.styles=[e`
      :host {
        display: grid;
      }

      md-dialog {
        max-width: 450px;
        width: calc(100dvw - 24px);

        scrollbar-color: var(--md-sys-color-surface-container-highest) transparent;
        scrollbar-width: thin;
      }

      form {
        display: grid;
      }
    `]}render(){return n` <md-dialog
      @open=${t=>{r(t.target),l(t.target)}}
      @close=${t=>{if("done"===t.target.returnValue||"navigation-close"===t.target.returnValue)return d(t.target),this.#_(t.target.returnValue);t.preventDefault()}}
    >
      <div slot="headline">Choose columns</div>

      <form
        slot="content"
        @item-drop=${t=>{t.stopPropagation();const e=this.userSettings??[],i=Math.min(t.hoverIndex,e.length-1);if(i!==t.originIndex){const s=e[t.originIndex];e.splice(t.originIndex,1),e.splice(i,0,s)}this.requestUpdate("userSettings"),this.dispatchEvent(new Event("setting-change"))}}
      >
        ${c(this.userSettings,t=>t.key,t=>n`
            <titanium-data-table-core-settings-choose-columns-item
              .name=${this.tableMetaData?.itemMetaData.find(e=>e.key===t.key)?.friendlyName??t.key}
              .selected=${t.show}
              .scrollableContainer=${this.dialog?.shadowRoot?.querySelector(".scroller")}
              ?disabled=${t.show&&1===this.userSettings.filter(t=>t.show).length}
              ?disable-drag=${1===this.userSettings.length}
              @changed=${e=>{t.show=e.target.selected,this.requestUpdate("userSettings"),this.dispatchEvent(new Event("setting-change"))}}
            ></titanium-data-table-core-settings-choose-columns-item>
          `)}
      </form>
      <div slot="actions">
        <md-filled-tonal-button @click=${()=>this.dialog?.close("done")}>Done</md-filled-tonal-button>
      </div>
    </md-dialog>`}};i([s({type:Object})],M.prototype,"tableMetaData",null),i([s({type:Array})],M.prototype,"userSettings",null),i([o()],M.prototype,"customColumnsApplied",null),i([h("md-dialog")],M.prototype,"dialog",null),M=i([a("titanium-data-table-core-settings-choose-columns-dialog")],M);let z=class extends D{#p;get name(){return this.#p}set name(t){this.#p=t}#k;get sortDirection(){return this.#k}set sortDirection(t){this.#k=t}#S;get index(){return this.#S}set index(t){this.#S=t}#x;get disabled(){return this.#x}set disabled(t){this.#x=t}get items(){return Array.from(this.parentElement?.querySelectorAll("data-table-core-settings-sort-item")??[])}get itemsContainer(){return this.parentElement}static{this.styles=[D.styles,m,u,g,e`
      :host {
        display: grid;
        grid: 'icon header gap select delete' / auto auto 1fr auto auto;
        user-select: none;

        font-size: 15px;
        line-height: 17px;

        align-items: center;
        gap: 8px;
        min-height: 48px;
        border-bottom: 1px solid var(--md-sys-color-outline-variant);

        position: relative;
        box-sizing: border-box;

        padding: 12px 0;

        label[disabled] span {
          opacity: 0.3;
        }
      }

      :host(:last-of-type) {
        border-bottom: none;
      }

      md-icon[drag] {
        grid-area: icon;
      }

      header {
        grid-area: header;

        h5[annotation] {
          opacity: 0.6;

          height: 16px;
          transition:
            opacity 0.2s ease-out,
            height 0.2s ease-out;
          transition-behavior: allow-discrete;
        }
      }

      md-icon-button[remove] {
        grid-area: delete;

        --md-icon-button-icon-color: var(--md-sys-color-error);
        --md-icon-button-pressed-icon-color: var(--md-sys-color-error);
        --md-icon-button-focus-icon-color: var(--md-sys-color-error);
        --md-icon-button-hover-icon-color: var(--md-sys-color-error);
      }

      md-filled-select {
        grid-area: select;
        --md-filled-field-top-space: 4px;
        --md-filled-field-bottom-space: 4px;
        --md-filled-field-content-size: 14px;
        --md-filled-field-label-text-populated-size: 11px;

        --md-filled-select-text-field-container-shape: 8px;
        --md-filled-select-text-field-active-indicator-height: 0;
        --md-filled-select-text-field-error-active-indicator-height: 0;
        --md-filled-select-text-field-hover-active-indicator-height: 0;
        --md-filled-select-text-field-focus-active-indicator-height: 0;
        --md-filled-select-text-field-disabled-active-indicator-height: 0;

        min-width: 142px;

        md-select-option {
          --md-menu-item-top-space: 6px;
          --md-menu-item-bottom-space: 6px;
          --md-menu-item-one-line-container-height: 36px;
          --md-menu-item-label-text-size: 14px;
        }
      }

      :host([dragging]) h5[annotation],
      :host([dragged]) h5[annotation] {
        opacity: 0;
        height: 0;
      }
    `]}render(){return n`
      <style>
        :host([nudge-down]:not([dragged])) {
          transform: translate3d(0, ${this.nudgeHeight}px, 0);
        }

        :host([nudge-up]:not([dragged])) {
          transform: translate3d(0, -${this.nudgeHeight}px, 0);
        }
      </style>
      <md-elevation></md-elevation>
      <md-icon @mousedown=${this.mouseEvent} @touchstart=${this.touchEvent} drag>drag_handle</md-icon>
      <header ellipsis>
        <h5 ellipsis annotation>${0===this.index?n`sort by`:n`then by`}</h5>
        <p ellipsis>${this.name}</p>
      </header>
      <md-filled-select
        ?disabled=${this.disabled}
        .value=${this.sortDirection}
        @change=${t=>{this.sortDirection=t.target.value,this.dispatchEvent(new Event("sort-direction-changed"))}}
      >
        <md-select-option value="asc"><span>Ascending</span></md-select-option>
        <md-select-option value="desc"><span>Descending</span> </md-select-option>
      </md-filled-select>
      <md-icon-button ?disabled=${this.disabled} remove @click=${()=>this.dispatchEvent(new Event("delete"))}><md-icon>close_small</md-icon></md-icon-button>
    `}};i([s({type:String})],z.prototype,"name",null),i([s({type:String,reflect:!0,attribute:"sort-direction"})],z.prototype,"sortDirection",null),i([s({type:Number})],z.prototype,"index",null),i([s({type:Boolean,reflect:!0})],z.prototype,"disabled",null),z=i([a("data-table-core-settings-sort-item")],z);let E=class extends t{#f=null;get tableMetaData(){return this.#f}set tableMetaData(t){this.#f=t}#w;get dialog(){return this.#w}set dialog(t){this.#w=t}#D;get addMenu(){return this.#D}set addMenu(t){this.#D=t}#C=[];get sort(){return this.#C}set sort(t){this.#C=t}#M=[];async show(t){return this.#M=structuredClone(t),this.sort=structuredClone(t),this.dialog.returnValue="",this.dialog?.show(),await new Promise(t=>{this.#_=t})}hasChanges(t,e){return JSON.stringify(t)!==JSON.stringify(e)}#z;#_;static{this.styles=[u,_,e`
      :host {
        display: grid;
      }

      md-dialog {
        max-width: 450px;
        width: calc(100dvw - 24px);

        scrollbar-color: var(--md-sys-color-surface-container-highest) transparent;
        scrollbar-width: thin;
      }

      main {
        display: grid;

        data-table-core-settings-sort-item {
          z-index: 0;
        }

        p[no-sort] {
          opacity: 0.8;
          text-align: center;
        }
      }

      div[slot='headline'] {
        display: grid;
        gap: 0px;

        p {
          font-size: 13px;
          line-height: 14px;
          opacity: 0.8;
        }
      }

      add-container {
        display: grid;
        position: relative;
      }

      md-menu-item {
        --md-menu-item-top-space: 6px;
        --md-menu-item-bottom-space: 6px;
        --md-menu-item-one-line-container-height: 36px;
        --md-menu-item-label-text-size: 14px;
      }

      div[slot='actions'] {
        display: flex;
        justify-content: space-between;
        gap: 8px;
      }
    `]}render(){const t=this.tableMetaData?.itemMetaData.filter(t=>!t.disableSort&&!this.sort.some(e=>e.key===t.key))??[];return n` <md-dialog
      @open=${t=>{r(t.target),l(t.target)}}
      @close=${t=>{if("apply"===t.target.returnValue||"cancel"===t.target.returnValue||"navigation-close"===t.target.returnValue)return d(t.target),this.#_(t.target.returnValue);t.preventDefault()}}
    >
      <div slot="headline">
        <div>Advanced sort</div>
        <p>Max ${this.tableMetaData?.maxCustomSortColumns??4} sort columns</p>
      </div>
      <main slot="content">
        <form
          @item-drop=${t=>{t.stopPropagation();const e=this.sort??[],i=Math.min(t.hoverIndex,e.length-1);if(i!==t.originIndex){const s=e[t.originIndex];e.splice(t.originIndex,1),e.splice(i,0,s)}this.requestUpdate("sort")}}
        >
          ${this.sort.length?c(this.sort,t=>t.key,(t,e)=>n`<data-table-core-settings-sort-item
                    .index=${e}
                    .name=${this.tableMetaData?.itemMetaData.find(e=>e.key===t.key)?.friendlyName??t.key}
                    sort-direction=${t.direction}
                    .scrollableContainer=${this.dialog?.shadowRoot?.querySelector(".scroller")}
                    ?disable-drag=${1===this.sort.length}
                    @sort-direction-changed=${t=>{this.sort[e].direction=t.target.sortDirection,this.requestUpdate("sort")}}
                    @delete=${()=>{this.sort.splice(e,1),this.requestUpdate("sort")}}
                  ></data-table-core-settings-sort-item>`):n`<p no-sort>No sort columns</p>`}
        </form>
      </main>
      <div slot="actions">
        <add-container>
          <md-text-button
            ?disabled=${this.sort.length>=(this.tableMetaData?.maxCustomSortColumns??4)}
            id="menu-anchor"
            leading-icon
            @click=${t=>{t.preventDefault();const e=t.target.getRootNode().querySelector("#menu");e.open=!e.open}}
          >
            <span>Add sort column</span>
            <md-icon slot="icon">add</md-icon>
          </md-text-button>

          <md-menu
            id="menu"
            anchor="menu-anchor"
            @opened=${()=>{this.#z=()=>this.addMenu.reposition(),document.addEventListener("scroll",this.#z,{passive:!0})}}
            @closed=${()=>document.removeEventListener("scroll",this.#z)}
            positioning="popover"
            @close-menu=${t=>{t.detail.itemPath?.[0]?.action?.()}}
          >
            ${c(t,t=>t.key,t=>n`<md-menu-item
                  .action=${()=>{this.sort.push({key:t.key,direction:"asc"}),this.requestUpdate("sort")}}
                >
                  <md-icon slot="start">sort_by_alpha</md-icon>
                  ${t.friendlyName??t.key}
                </md-menu-item>`)}
          </md-menu>
        </add-container>
        <div>
          <md-text-button @click=${()=>this.dialog?.close("cancel")}>Cancel</md-text-button>
          <md-filled-tonal-button
            ?disabled=${!this.hasChanges(this.sort,this.#M)}
            @click=${()=>{this.dialog?.close("apply"),this.dispatchEvent(new Event("sort-changed"))}}
            >Apply</md-filled-tonal-button
          >
        </div>
      </div>
    </md-dialog>`}};i([s({type:Object})],E.prototype,"tableMetaData",null),i([h("md-dialog")],E.prototype,"dialog",null),i([h("md-menu")],E.prototype,"addMenu",null),i([o()],E.prototype,"sort",null),E=i([a("titanium-data-table-core-settings-sort-dialog")],E);const A=e`
  [supporting-text] {
    font-size: 12px;
    line-height: 14px;
    opacity: 0.8;
  }

  two-line {
    display: grid;
    grid-auto-flow: row;
    gap: 0;
  }

  image-row {
    display: grid;
    grid: 'image label' / auto 1fr;
    align-items: center;
    gap: 0 12px;

    md-icon {
      grid-area: image;
      --md-icon-size: 32px;
    }

    img {
      grid-area: image;
      height: 32px;
      width: 32px;
      image-rendering: -webkit-optimize-contrast;
    }

    profile-picture {
      grid-area: image;
    }

    [supporting-text] {
      grid-area: supporting-text;
    }
  }

  image-row:has([supporting-text]) {
    grid:
      'image label'
      'image supporting-text' / auto 1fr;
  }
`;let O=class extends D{#E;get item(){return this.#E}set item(t){this.#E=t}#f=null;get tableMetaData(){return this.#f}set tableMetaData(t){this.#f=t}#A=null;get supplementalItemStyles(){return this.#A}set supplementalItemStyles(t){this.#A=t}get items(){return Array.from(this.parentElement?.querySelectorAll("titanium-data-table-core-reorder-item")??[])}get itemsContainer(){return this.parentElement}static{this.styles=[D.styles,e`
      :host {
        display: grid;
        box-sizing: border-box;
      }

      main {
        display: grid;
        grid: 'label icon' / 1fr 48px;
        user-select: none;

        font-size: 15px;
        line-height: 17px;

        align-items: center;
        gap: 8px;
        min-height: 48px;
        border-bottom: 1px solid var(--md-sys-color-outline-variant);
        border-top: 1px solid var(--md-sys-color-outline-variant);

        padding: 0 8px;

        position: relative;
        box-sizing: border-box;

        margin-bottom: -1px;
      }

      :host(:last-of-type) {
        border-bottom: none;
      }

      md-icon {
        grid-area: icon;
        display: grid;
        place-items: center;
        height: 48px;
        width: 48px;
        animation: wobble 0.4s ease-in-out infinite alternate;
        transform-origin: center center;
      }

      label-container {
        grid-area: label;

        display: grid;
        font-size: 14px;
        line-height: 18px;
        font-weight: 400;
        padding: 6px 0;
        align-items: center;
        margin: 0;
      }

      @keyframes wobble {
        0%,
        100% {
          transform: rotate(0deg);
        }
        25% {
          transform: rotate(1deg) translateX(1px);
        }
        50% {
          transform: rotate(-1deg) translateX(-1px);
        }
        75% {
          transform: rotate(1deg) translateX(1px);
        }
      }

      :host(:nth-child(even)) {
        md-icon {
          animation-delay: 100ms;
        }
      }

      :host(:nth-child(odd)) {
        md-icon {
          animation-delay: 150ms;
        }
      }
      :host([disable-drag]),
      :host(:hover) {
        md-icon {
          animation: none;
        }
      }
    `]}render(){return n`
      <style>
        :host([nudge-down]:not([dragged])) {
          transform: translate3d(0, ${this.nudgeHeight}px, 0);
        }

        :host([nudge-up]:not([dragged])) {
          transform: translate3d(0, -${this.nudgeHeight}px, 0);
        }

        label-container{
          ${this.supplementalItemStyles?this.supplementalItemStyles:p};
          ${A||p};
        }
      </style>
      <main>
        <md-icon @mousedown=${this.mouseEvent} @touchstart=${this.touchEvent} drag>drag_handle</md-icon>
        <label-container
          >${this.tableMetaData?.itemMetaData.find(t=>t.key===this.tableMetaData?.reorderConfig?.reorderItemDisplayKey)?.render(this.item)??""}
        </label-container>
        <md-elevation></md-elevation>
      </main>
    `}};i([s({type:Object})],O.prototype,"item",null),i([s({type:Object})],O.prototype,"tableMetaData",null),i([s({type:Object})],O.prototype,"supplementalItemStyles",null),O=i([a("titanium-data-table-core-reorder-item")],O);let I=class extends(b(t)){#f=null;get tableMetaData(){return this.#f}set tableMetaData(t){this.#f=t}#A=null;get supplementalItemStyles(){return this.#A}set supplementalItemStyles(t){this.#A=t}#w;get dialog(){return this.#w}set dialog(t){this.#w=t}#O;get snackbar(){return this.#O}set snackbar(t){this.#O=t}#I=[];get items(){return this.#I}set items(t){this.#I=t}#j=[];async show(t){const e=structuredClone(t),i=this.tableMetaData?.reorderConfig?.sortPropertyKey;return i&&e.sort((t,e)=>t[i].toString().localeCompare(e[i].toString())),this.items=e,this.#j=structuredClone(e),this.dialog.returnValue="",this.dialog?.show(),await new Promise(t=>{this.#_=t})}hasChanges(t,e){return JSON.stringify(t)!==JSON.stringify(e)}#_;static{this.styles=[e`
      :host {
        display: grid;
      }

      md-dialog {
        max-width: 450px;
        width: calc(100dvw - 24px);

        scrollbar-color: var(--md-sys-color-surface-container-highest) transparent;
        scrollbar-width: thin;
      }

      form {
        display: grid;
        padding: 12px 8px;
      }

      md-circular-progress {
        --md-circular-progress-size: 28px;
      }
    `]}render(){return n` <md-dialog
      @open=${t=>{r(t.target),l(t.target)}}
      @close=${t=>{if("apply"===t.target.returnValue||"cancel"===t.target.returnValue||"navigation-close"===t.target.returnValue)return d(t.target),this.snackbar.dismissAll(),this.#_(t.target.returnValue);t.preventDefault()}}
    >
      <div slot="headline">Reorder items</div>
      <form
        slot="content"
        @item-drop=${t=>{t.stopPropagation();const e=this.items??[],i=Math.min(t.hoverIndex,e.length-1);if(i!==t.originIndex){const s=e[t.originIndex];e.splice(t.originIndex,1),e.splice(i,0,s)}this.requestUpdate("items")}}
      >
        ${c(this.items,t=>this.tableMetaData?.uniqueKey(t),t=>n`
            <titanium-data-table-core-reorder-item
              ?disable-drag=${this.isLoading}
              .item=${t}
              .tableMetaData=${this.tableMetaData}
              .supplementalItemStyles=${this.supplementalItemStyles}
              .scrollableContainer=${this.dialog?.shadowRoot?.querySelector(".scroller")}
            ></titanium-data-table-core-reorder-item>
          `)}
        <titanium-snackbar-stack .eventListenerTarget=${this}></titanium-snackbar-stack>
      </form>
      <div slot="actions">
        <md-text-button @click=${()=>this.dialog?.close("cancel")} ?disabled=${this.isLoading}>Cancel</md-text-button>
        <md-filled-tonal-button
          trailing-icon
          ?disabled=${this.isLoading||!this.hasChanges(this.items,this.#j)}
          @click=${async()=>{let t=()=>{},e=()=>{};const i=new Promise((i,s)=>{t=i,e=s});this.loadWhile(i),this.dispatchEvent(new CustomEvent("reorder-save-request",{detail:{resolve:t,reject:e,items:this.items}}));try{await i,this.dialog?.close("apply")}catch(t){this.dispatchEvent(new x(t))}}}
          >Save
          ${this.isLoading?n`<md-circular-progress slot="icon" indeterminate></md-circular-progress>`:n` <md-icon slot="icon">save</md-icon>`}</md-filled-tonal-button
        >
      </div>
    </md-dialog>`}};var j,B;i([s({type:Object})],I.prototype,"tableMetaData",null),i([s({type:Object})],I.prototype,"supplementalItemStyles",null),i([h("md-dialog")],I.prototype,"dialog",null),i([h("titanium-snackbar-stack")],I.prototype,"snackbar",null),i([o()],I.prototype,"items",null),I=i([a("titanium-data-table-core-reorder-dialog")],I),(B=j||(j={})).csv="text/csv",B.tsv="text/tab-separated-values",B.plain="text/plain";var N=t=>t,H=t=>t,J=N,Y=N,F=N,R=N,T=N,U={fieldSeparator:",",decimalSeparator:".",quoteStrings:!0,quoteCharacter:'"',showTitle:!1,title:"My Generated Report",filename:"generated",showColumnHeaders:!0,useTextFile:!1,fileExtension:"csv",mediaType:j.csv,useBom:!0,columnHeaders:[],useKeysAsHeaders:!1,boolDisplay:{true:"TRUE",false:"FALSE"},replaceUndefinedWith:""},P=t=>Object.assign({},U,t);class K extends Error{constructor(t){super(t),this.name="CsvGenerationError"}}class L extends Error{constructor(t){super(t),this.name="EmptyHeadersError"}}class q extends Error{constructor(t){super(t),this.name="CsvDownloadEnvironmentError"}}class X extends Error{constructor(t){super(t),this.name="UnsupportedDataFormatError"}}var G=t=>R("object"==typeof t?t.key:t),V=t=>T("object"==typeof t?t.displayLabel:t),W=t=>e=>Y(t+e+"\r\n"),Q=t=>(e,i)=>Z(t)(F(e+i)),Z=t=>e=>e+t.fieldSeparator,tt=(t,e)=>{if((t=>+t===t&&(!isFinite(t)||Boolean(t%1)))(e)){if("locale"===t.decimalSeparator)return J(e.toLocaleString());if(t.decimalSeparator)return J(e.toString().replace(".",t.decimalSeparator))}return J(e.toString())},et=(t,e)=>{let i=e;return(t.quoteStrings||t.fieldSeparator&&e.indexOf(t.fieldSeparator)>-1||t.quoteCharacter&&e.indexOf(t.quoteCharacter)>-1||e.indexOf("\n")>-1||e.indexOf("\r")>-1)&&(i=t.quoteCharacter+function(t,e){return'"'==e&&t.indexOf('"')>-1?t.replace(/"/g,'""'):t}(e,t.quoteCharacter)+t.quoteCharacter),J(i)},it=(t,e)=>{if("number"==typeof e)return tt(t,e);if("string"==typeof e)return et(t,e);if("boolean"==typeof e&&t.boolDisplay)return((t,e)=>{const i=e?"true":"false";return J(t.boolDisplay[i])})(t,e);if(null==e)return((t,e)=>void 0===e&&void 0!==t.replaceUndefinedWith?et(t,t.replaceUndefinedWith+""):et(t,null===e?"null":""))(t,e);throw new X(`\n    typeof ${typeof e} isn't supported. Only number, string, boolean, null and undefined are supported.\n    Please convert the data in your object to one of those before generating the CSV.\n    `)},st=t=>e=>{const i=P(t),s=i.useKeysAsHeaders?Object.keys(e[0]):i.columnHeaders;let o=((t,...e)=>e.reduce((t,e)=>e(t),t))(Y(""),(t=>e=>t.useBom?Y(e+"\ufeff"):e)(i),(t=>e=>t.showTitle?W(Y(e+t.title))(F("")):e)(i),((t,e)=>i=>{if(!t.showColumnHeaders)return i;if(e.length<1)throw new L("Option to show headers but none supplied. Make sure there are keys in your collection or that you've supplied headers through the config options.");let s=F("");for(let i=0;i<e.length;i++){const o=V(e[i]);s=Q(t)(s,it(t,H(o)))}return s=F(s.slice(0,-1)),W(i)(s)})(i,s),((t,e,i)=>s=>{let o=s;for(var n=0;n<i.length;n++){let s=F("");for(let o=0;o<e.length;o++){const a=G(e[o]),r=i[n][H(a)];s=Q(t)(s,it(t,r))}s=F(H(s).slice(0,-1)),o=W(o)(s)}return o})(i,s,e));if(o.length<1)throw new K("Output is empty. Is your data formatted correctly?");return o},ot=t=>e=>{if(!window)throw new q("Downloading only supported in a browser environment.");const i=(t=>e=>{const i=P(t),s=e,o=i.useTextFile?"text/plain":i.mediaType;return new Blob([s],{type:`${o};charset=utf8;`})})(t)(e),s=P(t),o=s.useTextFile?"txt":s.fileExtension,n=`${s.filename}.${o}`,a=document.createElement("a");a.download=n,a.href=URL.createObjectURL(i),a.setAttribute("visibility","hidden"),document.body.appendChild(a),a.click(),document.body.removeChild(a)};function nt(t){return t?.itemMetaData.filter(t=>t.defaultSort).sort((t,e)=>(t.defaultSort?.position??0)-(e.defaultSort?.position??0)).map(t=>({key:t.key,direction:t.defaultSort?.direction??"asc"}))??[]}let at=class extends(b(t)){#I=[];get items(){return this.#I}set items(t){this.#I=t}#f=null;get tableMetaData(){return this.#f}set tableMetaData(t){this.#f=t}#A=null;get supplementalItemStyles(){return this.#A}set supplementalItemStyles(t){this.#A=t}#x=!1;get disabled(){return this.#x}set disabled(t){this.#x=t}#B=!1;get stickyHeader(){return this.#B}set stickyHeader(t){this.#B=t}#N="none";get selectionMode(){return this.#N}set selectionMode(t){this.#N=t}#b=[];get selected(){return this.#b}set selected(t){this.#b=t}#H;get chooseColumnsDialog(){return this.#H}set chooseColumnsDialog(t){this.#H=t}#J;get sortDialog(){return this.#J}set sortDialog(t){this.#J=t}#Y;get reorderDialog(){return this.#Y}set reorderDialog(t){this.#Y=t}#F="dtc-pref";get localStorageKey(){return this.#F}set localStorageKey(t){this.#F=t}#R=!1;get customSortApplied(){return this.#R}set customSortApplied(t){this.#R=t}#v=!1;get customColumnsApplied(){return this.#v}set customColumnsApplied(t){this.#v=t}get sort(){const t=window.localStorage.getItem(`${this.localStorageKey}-user-sort`);return null===t?nt(this.tableMetaData):JSON.parse(t??"[]")||[]}set sort(t){localStorage.setItem(`${this.localStorageKey}-user-sort`,JSON.stringify(t))}get userSettings(){return JSON.parse(window.localStorage.getItem(`${this.localStorageKey}-user-settings`)??"[]")||[]}set userSettings(t){localStorage.setItem(`${this.localStorageKey}-user-settings`,JSON.stringify(t))}updated(t){if(t.has("items")&&t.get("items")!==this.items&&this.deselectAll(),t.has("sort")||t.has("tableMetaData")){const t=nt(this.tableMetaData),e=JSON.stringify(t)!==JSON.stringify(this.sort);this.customSortApplied!==e&&(this.customSortApplied=e)}}selectAll(){"multi"===this.selectionMode&&(this.selected=this.items,this.#T())}deselectAll(){this.selected.length>0&&(this.selected=[],this.#T())}resetSort(){const t=nt(this.tableMetaData);JSON.stringify(t)!==JSON.stringify(this.sort)&&(this.sort=t,this.dispatchEvent(new Event("sort-changed")))}#T(){this.dispatchEvent(new Event("selected-changed",{composed:!0}))}orderByUserPreference(t,e){return t.sort((t,i)=>{const s=e.findIndex(e=>e.key===t.key),o=e.findIndex(t=>t.key===i.key);return s-o})}static{this.styles=[f,_,e`
      :host {
        display: grid;

        --titanium-data-table-core-background-color: var(--md-sys-color-surface-container-lowest, #1d1b20);
        background-color: var(--titanium-data-table-core-background-color);
        overflow: auto;
        z-index: 0;
      }

      table {
        border-spacing: 0;
        border-collapse: separate;

        background-color: inherit;
        align-self: start;
      }

      content-container {
        display: grid;
        height: 100%;
        box-sizing: border-box;
        background-color: var(--titanium-data-table-core-background-color);
      }

      :host([sticky-header]) {
        thead th:not([settings]) {
          position: sticky;
          top: 0;
          z-index: 3;
        }
      }

      table[has-selected-items] {
        tr {
          cursor: pointer;
        }
      }

      thead {
        tr {
          th[settings] {
            width: 48px;
            height: 48px;
            padding: 0;
            position: sticky;
            left: 0;
            top: 0;
            z-index: 4;

            content-container {
              nice-badge {
                transition: opacity 250ms ease;
              }
              md-icon-button {
                --md-icon-button-icon-size: 22px;
                --md-icon-button-state-layer-height: 32px;
                --md-icon-button-state-layer-width: 32px;
                padding: 8px;

                md-icon {
                  transition: transform 350ms ease;
                }

                nice-badge {
                  top: initial;
                  top: 2px;
                  right: 2px;
                }
              }

              md-menu[open] + md-icon-button {
                md-icon {
                  transform: rotate(120deg);
                }
                nice-badge {
                  opacity: 0;
                }
              }

              md-menu[open] md-menu-item {
                nice-badge {
                  opacity: 1;
                }
              }

              md-menu-item {
                --md-menu-item-top-space: 6px;
                --md-menu-item-bottom-space: 6px;
                --md-menu-item-one-line-container-height: 36px;
                --md-menu-item-two-line-container-height: 36px;
                --md-menu-item-label-text-size: 14px;
                text-align: left;

                [small] {
                  font-size: 12px;
                  line-height: 12px;
                  opacity: 0.8;
                }

                nice-badge {
                  top: 5px;
                  left: 35px;
                  right: initial;
                  opacity: 0;
                }
              }
            }
          }

          th {
            border-bottom: 1px var(--md-sys-color-outline-variant) solid;
            padding: 0;

            button {
              display: grid;
              grid: 'text icon blank' / auto auto 1fr;
              width: 100%;
              align-items: center;

              position: relative;
              --md-focus-ring-shape: 0;
              border-radius: 0;

              font-family: var(--titanium-data-table-font-family, Roboto, Noto, sans-serif);
              font-size: 14px;

              line-height: 28px;
              font-weight: 500;
              height: 100%;
              padding: 12px 6px 12px 6px;
              margin: 0;

              /* override default button styles */
              text-align: inherit;

              background-color: var(--md-sys-color-surface-container-lowest);
              color: inherit;

              border: none;
              outline: none;
              height: 48px;

              white-space: nowrap;

              icon-container {
                display: grid;
                position: relative;
                margin-left: 4px;
                visibility: hidden;

                height: 18px;
                width: 18px;

                div[sort-number] {
                  font-size: 8px;
                  line-height: 8px;
                  position: absolute;
                  bottom: -2px;
                  right: 0;
                }

                md-icon {
                  display: block;
                  height: 18px;
                  width: 18px;
                  font-size: 18px;

                  transform-origin: center;
                  transition: transform 150ms ease;
                }
              }
            }

            button[active-sort][sort-direction='asc'] md-icon {
              transform: rotate(-180deg);
            }

            button[active-sort] icon-container,
            button[active-sort] icon-container {
              visibility: visible;
            }

            button:not([disabled]) {
              cursor: pointer;
            }

            button:focus,
            button:active {
              outline: none;
              box-shadow: none;
            }
          }
        }
      }

      tbody {
        @-moz-document url-prefix() {
          /* hack: FF to fill 100% in a TD */
          tr {
            height: 1px !important;
          }
        }

        tr {
          @-moz-document url-prefix() {
            /* hack: FF to fill 100% in a TD */
            td {
              height: 100% !important;
            }
          }

          td {
            background-color: var(--titanium-data-table-core-background-color);

            border-bottom: 1px var(--md-sys-color-outline-variant) solid;
            padding: 0;
            box-sizing: border-box;
            /* hack: Chrome/Safari to fill 100% in a TD */
            height: 1px;

            content-container {
              font-size: 14px;
              line-height: 18px;
              font-weight: 400;
              padding: 6px 6px 6px 6px;
              align-items: center;
              margin: 0;
            }
          }

          td[checkbox] {
            width: 48px;
            position: sticky;
            left: 0;

            z-index: 1;

            content-container {
              display: grid;
              padding: 0;

              md-checkbox {
                padding: 15px;
                --md-checkbox-container-shape: 6px;
                --md-focus-ring-shape: 12px;
                --md-checkbox-state-layer-shape: 12px;
                --md-checkbox-state-layer-size: 32px;
              }

              md-checkbox::part(focus-ring) {
                height: 32px;
                width: 32px;
              }
            }
          }
        }

        tr[selected] content-container,
        tr[selected] td {
          background-color: var(--md-sys-color-secondary-container);
        }

        tr[link-url] {
          cursor: pointer;
        }
      }

      :host(:not([disabled])) tbody tr[link-url]:hover td content-container {
        background-color: rgb(from var(--md-sys-color-on-surface, #1d1b20) r g b / 0.08) !important;
      }

      td[table-message]:hover,
      td[table-message] {
        vertical-align: middle;
        border: none !important;
        opacity: 0.8;
        font-size: 14px;
        line-height: 14px;
        padding: 12px 6px;
      }

      tr:last-of-type td {
        border-bottom: none !important;
      }

      [hidden] {
        display: none !important;
      }
    `]}render(){return n`
      <style>
        tbody{
          tr{
            td{
              content-container{
                ${this.supplementalItemStyles?this.supplementalItemStyles:p};
                ${A||p};
              }
            }
          }
        }
      </style>
      <table part="table" ?has-selected-items=${this.selected.length>0}>
        <thead>
          <tr>
            <th settings>
              <content-container>
                <md-menu
                  id="menu"
                  positioning="popover"
                  anchor="menu-anchor"
                  y-offset="-10"
                  x-offset="16"
                  @close-menu=${t=>{t.detail.itemPath?.[0]?.action?.()}}
                >
                  ${"none"===this.selectionMode||"single"===this.selectionMode&&!this.selected.length?p:n` <md-menu-item
                          .action=${()=>{this.selected.length>0?this.deselectAll():this.selectAll()}}
                        >
                          <md-icon slot="start">${this.selected.length>0?"deselect":"select_all"}</md-icon>
                          <div slot="headline">${this.selected.length>0?"Deselect all":"Select all"}</div>
                        </md-menu-item>
                        <md-divider role="separator" tabindex="-1"></md-divider>`}

                  <md-menu-item .action=${()=>this.chooseColumnsDialog.show()}>
                    <md-icon slot="start">table_edit</md-icon>
                    ${this.customColumnsApplied?n`<nice-badge compact slot="start"></nice-badge>`:p}
                    <div slot="headline">Choose columns</div>
                  </md-menu-item>
                  <md-menu-item .action=${()=>this.chooseColumnsDialog.resetColumns()} ?disabled=${!this.customColumnsApplied}>
                    <md-icon style="visibility:hidden" slot="start">reset_settings</md-icon>
                    <div slot="headline">Reset columns</div>
                  </md-menu-item>
                  <md-divider role="separator" tabindex="-1"></md-divider>

                  <md-menu-item
                    .action=${async()=>{"apply"===await this.sortDialog.show(this.sort)&&(this.sort=structuredClone(this.sortDialog.sort),this.dispatchEvent(new Event("sort-changed")))}}
                  >
                    <md-icon slot="start">sort_by_alpha</md-icon>
                    ${this.customSortApplied?n`<nice-badge compact slot="start"></nice-badge>`:p}
                    <div slot="headline">Customize sort</div>
                  </md-menu-item>
                  <md-menu-item .action=${()=>this.resetSort()} ?disabled=${!this.customSortApplied}>
                    <md-icon style="visibility:hidden" slot="start">reset_settings</md-icon>
                    <div slot="headline">Reset sort</div>
                  </md-menu-item>

                  ${this.tableMetaData?.reorderConfig?.reorderItemDisplayKey&&this.tableMetaData?.reorderConfig?.sortPropertyKey?n` <md-divider role="separator" tabindex="-1"></md-divider>
                        <md-menu-item
                          .action=${async()=>{"apply"===await this.reorderDialog.show(this.items)&&(structuredClone(this.reorderDialog.items),this.dispatchEvent(new CustomEvent("items-reordered",{detail:this.items})))}}
                        >
                          <md-icon slot="start">drag_handle</md-icon>
                          <div slot="headline">Reorder items</div>
                        </md-menu-item>`:p}
                  ${this.items.length>0?n`<md-divider role="separator" tabindex="-1"></md-divider>
                        <md-menu-item
                          .action=${()=>{const t=k().format("YYYY-MM-DD HH-mm-ss"),e=P({filename:`web export ${t}`,useKeysAsHeaders:!0}),i=this.orderByUserPreference(this.tableMetaData?.itemMetaData?.filter(t=>!t.hideByDefault&&this.userSettings.find(e=>e.key===t.key)?.show||this.userSettings.find(e=>e.key===t.key)?.show)??[],this.userSettings)??[],s=this.items.map(t=>{const e={};for(const s of i){e[s.friendlyName??s.key]=s.csvValue?s.csvValue(t):t[s.key]}return e})??[],o=st(e)(s);ot(e)(o)}}
                        >
                          <md-icon slot="start">file_save</md-icon>
                          <div slot="headline">Save to CSV</div>
                          <span small slot="supporting-text">${this.items.length} row${1===this.items.length?"":"s"}</span>
                        </md-menu-item>`:p}

                  <slot name="settings-menu-items"></slot>
                </md-menu>
                <md-icon-button
                  id="menu-anchor"
                  ?disabled=${this.isLoading}
                  @click=${t=>{t.preventDefault();const e=t.target.getRootNode().querySelector("#menu");e.open=!e.open}}
                >
                  <md-icon>settings</md-icon>
                  ${this.customSortApplied||this.customColumnsApplied?n`<nice-badge compact></nice-badge>`:p}
                </md-icon-button>
              </content-container>
            </th>
            ${c(this.orderByUserPreference(this.tableMetaData?.itemMetaData?.filter(t=>!t.hideByDefault&&this.userSettings.find(e=>e.key===t.key)?.show||this.userSettings.find(e=>e.key===t.key)?.show)??[],this.userSettings)??[],t=>t.key,t=>{const e=this.sort.find(e=>e.key===t.key),i=this.sort.findIndex(e=>e.key===t.key),s=this.tableMetaData?.itemMetaData?.find(e=>e.key===t.key)?.width;return n`<th style=${s?y({minWidth:s}):p}>
                  <button
                    ?active-sort=${-1!==i}
                    sort-direction=${e?.direction||p}
                    ?disabled=${this.disabled||t.disableSort}
                    @click=${()=>{this.sort=[{key:t.key,direction:"asc"===this.sort?.[0]?.direction?"desc":"asc"}],this.dispatchEvent(new Event("sort-changed"))}}
                  >
                    <span>${t.friendlyName??t.key??"-"}</span>
                    <icon-container
                      ><md-icon>arrow_downward</md-icon>
                      ${-1!==i&&this.sort.length>1?n`<div sort-number>${i+1}</div>`:p}
                    </icon-container>
                    <md-ripple ?disabled=${this.disabled||t.disableSort}></md-ripple>
                    <md-focus-ring inward></md-focus-ring>
                  </button>
                </th>`})}
          </tr>
        </thead>
        <tbody>
          ${this.isLoading||0!==this.items.length?p:n`
                <tr>
                  <td table-message></td>
                  <td table-message colspan=${this.tableMetaData?.itemMetaData?.length??0}>No results</td>
                </tr>
              `}
          ${c(this.items??[],t=>this.tableMetaData?.uniqueKey(t)??"",t=>n`
                <tr
                  ?link-url=${this.tableMetaData?.itemLinkUrl||this.tableMetaData?.itemClickHandler}
                  ?selected=${this.selected.includes(t)}
                  @click=${()=>{0===this.selected.length?this.tableMetaData?.itemClickHandler?this.tableMetaData.itemClickHandler(t):this.tableMetaData?.itemLinkUrl&&this.dispatchEvent(new CustomEvent("change-route",{bubbles:!0,composed:!0,detail:{path:this.tableMetaData?.itemLinkUrl?.(t)??""}})):"single"===this.selectionMode?(this.selected=[t],this.requestUpdate("selected"),this.#T()):"multi"===this.selectionMode&&(this.selected.includes(t)?this.selected.splice(this.selected.indexOf(t),1):this.selected.push(t),this.requestUpdate("selected"),this.#T())}}
                >
                  <td checkbox>
                    <content-container>
                      ${"none"!==this.selectionMode?n`
                            <md-checkbox
                              @click=${t=>t.stopPropagation()}
                              ?checked=${this.selected.includes(t)}
                              @change=${()=>{this.selected.includes(t)?this.selected.splice(this.selected.indexOf(t),1):"single"===this.selectionMode?this.selected=[t]:this.selected.push(t),this.requestUpdate("selected"),this.#T()}}
                              ?disabled=${this.disabled}
                            ></md-checkbox>
                          `:p}
                    </content-container>
                  </td>
                  ${c(this.orderByUserPreference(this.tableMetaData?.itemMetaData?.filter(t=>!t.hideByDefault&&this.userSettings.find(e=>e.key===t.key)?.show||this.userSettings.find(e=>e.key===t.key)?.show)??[],this.userSettings)?.map(t=>t.key)??[],t=>t,e=>n`<td>
                        <content-container>${this.tableMetaData?.itemMetaData?.find(t=>t.key===e)?.render(t)??"-"}</content-container>
                      </td>`)}
                </tr>
              `)}
        </tbody>
      </table>
      <titanium-data-table-core-reorder-dialog
        .tableMetaData=${this.tableMetaData}
        .items=${this.items}
        .supplementalItemStyles=${this.supplementalItemStyles}
        @reorder-save-request=${t=>v(this,t)}
      ></titanium-data-table-core-reorder-dialog>
      <titanium-data-table-core-settings-sort-dialog .tableMetaData=${this.tableMetaData}></titanium-data-table-core-settings-sort-dialog>
      <titanium-data-table-core-settings-choose-columns-dialog
        .tableMetaData=${this.tableMetaData}
        .userSettings=${this.userSettings}
        @custom-columns-applied-change=${t=>this.customColumnsApplied=t.target.customColumnsApplied}
        @setting-change=${t=>this.userSettings=structuredClone(t.target.userSettings)}
      ></titanium-data-table-core-settings-choose-columns-dialog>
    `}};i([s({type:Array})],at.prototype,"items",null),i([s({type:Object})],at.prototype,"tableMetaData",null),i([s({type:Object})],at.prototype,"supplementalItemStyles",null),i([s({type:Boolean,reflect:!0})],at.prototype,"disabled",null),i([s({type:Boolean,attribute:"sticky-header",reflect:!0})],at.prototype,"stickyHeader",null),i([s({type:String,attribute:"selection-mode",reflect:!0})],at.prototype,"selectionMode",null),i([s({type:Array})],at.prototype,"selected",null),i([h("titanium-data-table-core-settings-choose-columns-dialog")],at.prototype,"chooseColumnsDialog",null),i([h("titanium-data-table-core-settings-sort-dialog")],at.prototype,"sortDialog",null),i([h("titanium-data-table-core-reorder-dialog")],at.prototype,"reorderDialog",null),i([s({type:String,attribute:"local-storage-key"})],at.prototype,"localStorageKey",null),i([o()],at.prototype,"customSortApplied",null),i([o()],at.prototype,"customColumnsApplied",null),i([o()],at.prototype,"sort",null),i([o()],at.prototype,"userSettings",null),at=i([a("titanium-data-table-core")],at);class rt extends Event{static{this.eventType="titanium-data-table-items-reorder"}constructor(){super(rt.eventType)}}let lt=class extends t{#b=[];get selected(){return this.#b}set selected(t){this.#b=t}#U=!1;get hasSelected(){return this.#U}set hasSelected(t){this.#U=t}#P;get hasAddButton(){return this.#P}set hasAddButton(t){this.#P=t}#K;get addButtonElements(){return this.#K}set addButtonElements(t){this.#K=t}updated(t){t.has("selected")&&(this.hasSelected=this.selected.length>0)}static{this.styles=[w,g,e`
      :host {
        display: grid;
        padding: 12px 16px;
        background-color: var(--md-sys-color-surface-container-lowest);
        box-sizing: border-box;
      }

      main {
        display: grid;
        grid: 'filters  add-button' / 1fr auto;

        opacity: 1;
        transition-behavior: allow-discrete;
        animation: fade-in-down 0.25s ease;

        div[add-button] {
          grid-area: add-button;
          align-self: end;
        }

        div[filters] {
          grid-area: filters;
          align-self: end;
        }
      }

      :host([has-search][has-add-button]) div[add-button] {
        margin: 0 0 0 12px;
      }

      selected-action-veil {
        display: none;
        grid: 'text buttons' / minmax(min-content, 1fr) auto;
        min-height: 40px;
        align-items: end;

        gap: 6px 12px;

        background-color: inherit;
        opacity: 0;

        animation: fade-in-up 0.25s ease;
        transition-behavior: allow-discrete;

        margin: 0;

        action-container {
          grid-area: buttons;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 6px;
          align-items: center;
          justify-content: flex-end;

          ::slotted(md-filled-button) {
            --md-filled-button-container-height: 32px;
          }
        }
      }

      @starting-style {
        selected-action-veil[style*='display: grid'] {
          opacity: 0;
        }

        main[style*='display: grid'] {
          opacity: 1;
        }
      }

      :host([has-selected]) selected-action-veil {
        display: grid;
        opacity: 1;
        animation: fade-in-up 0.25s ease;
      }

      :host([has-selected]) main {
        animation: fade-out-down 0.25s ease;
        opacity: 0;
        height: 0;
        display: none;
      }

      @media (max-width: 920px) {
        h2 {
          font-size: 14px;
          line-height: 16px;
        }
      }

      @media (max-width: 500px) {
        main {
          grid:
            'filters'
            'add-button';
          gap: 12px;
        }

        selected-action-veil {
          grid:
            'text'
            'buttons';

          gap: 4px;
        }

        div[add-button] {
          justify-self: end;
        }
      }

      @keyframes fade-out-down {
        0% {
          opacity: 1;
          transform: translateY(0);
        }
        100% {
          opacity: 0;
          transform: translateY(-20px);
        }
      }

      @keyframes fade-in-down {
        0% {
          opacity: 0;
          transform: translateY(-20px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes fade-out-up {
        0% {
          opacity: 1;
          transform: translateY(0);
        }
        100% {
          opacity: 0;
          transform: translateY(20px);
        }
      }

      @keyframes fade-in-up {
        0% {
          opacity: 0;
          transform: translateY(20px);
        }
        100% {
          opacity: 1;
          transform: translateY(0);
        }
      }
    `]}render(){return n`
      <main part="main">
        <div add-button part="add-button-container">
          <slot name="add-button" @slotchange=${()=>this.hasAddButton=this.addButtonElements.length>0}></slot>
        </div>
        <div filters part="filters-container"><slot name="filters"></slot></div>
      </main>
      <selected-action-veil part="selected-action-veil">
        <h2 ellipsis part="selected-action-title">${this.selected.length} selected</h2>
        <action-container part="action-container"><slot name="selected-actions"></slot></action-container>
      </selected-action-veil>
    `}};i([s({type:Array})],lt.prototype,"selected",null),i([s({type:Boolean,reflect:!0,attribute:"has-selected"})],lt.prototype,"hasSelected",null),i([s({type:Boolean,reflect:!0,attribute:"has-add-button"})],lt.prototype,"hasAddButton",null),i([$({slot:"add-button"})],lt.prototype,"addButtonElements",null),lt=i([a("titanium-data-table-action-bar")],lt);
