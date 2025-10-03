import{i as t,c as e,_ as i,n as s,r as o,x as a,t as n,j as r,p as d,k as l,L as c,E as h,v as p,u as g,w as u,D as m,e as b,b as f,X as x,a as y,Y as v,h as w,Z as $}from"./CIAkX42C.js";import{S as _}from"./DzDchJdO.js";import"./kwKBK7yw.js";import"./BlDMeqLw.js";import"./D8Gv_ug3.js";import"./D8R5CWm5.js";import"./CiSQrVO9.js";import"./DZ2b-WFt.js";import"./Du-zMnDM.js";import"./BQTebtbQ.js";import"./ARW3F0re.js";import"./DpTDlxJu.js";class k extends Event{static{this.eventType="item-drop"}constructor(t,e){super(k.eventType,{composed:!0,bubbles:!0}),this.hoverIndex=e,this.originIndex=t}}class S extends t{constructor(){super(...arguments),this.#t=null,this.#e=null,this.mouseEvent=t=>{if(!this.disableDrag)return this.#i(t,"mouse")},this.touchEvent=t=>{if(!this.disableDrag)return this.#i(t,"touch")}}#s;get nudgeDown(){return this.#s}set nudgeDown(t){this.#s=t}#o;get nudgeUp(){return this.#o}set nudgeUp(t){this.#o=t}#a;get dragged(){return this.#a}set dragged(t){this.#a=t}#n;get dragging(){return this.#n}set dragging(t){this.#n=t}#r;get disableDrag(){return this.#r}set disableDrag(t){this.#r=t}#d;get nudgeHeight(){return this.#d}set nudgeHeight(t){this.#d=t}#t;get hoverIndex(){return this.#t}set hoverIndex(t){this.#t=t}#e;get originIndex(){return this.#e}set originIndex(t){this.#e=t}static{this.styles=e`
    md-icon[drag] {
      cursor: grab;
    }

    md-elevation {
      transition-duration: 250ms;
      transition-timing-function: ease-in-out;
    }

    :host([disable-drag]) md-icon[drag] {
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
  `}get items(){return[]}get itemsContainer(){return null}updateDragProps(t,e,i,s){const o=this.items.indexOf(this);this.nudgeDown=null!==e&&null!==i&&o<e&&o>=i,this.nudgeUp=null!==e&&null!==i&&o>e&&o<=i,this.dragged=e===o,this.dragging=t,this.nudgeHeight=s}#l(t,e){for(let i=0;i<t.length;i++){if(e<=t[i])return i}return t.length-1}#c(t,e){const i=Math.max(e??0,t??0)+1;let s=Math.min(e??0,t??0)-1;return s=s<0?0:s,[i,s]}#h(t,e,i,s){const o=this.#c(t,e);for(let t=o[1];t<=o[0];t++){const e=this.items?.[t];e?.updateDragProps(i,this.originIndex,this.hoverIndex,s)}}#p(t,e){const i=this.#c(t,e);for(let t=i[1];t<=i[0];t++){const e=this.items?.[t];e?.updateDragProps(!1,null,null,0)}}#i(t,e){if("mouse"===e&&1!==t.which)return;t.preventDefault(),this.dragging=!0,this.originIndex=this.items.indexOf(this);const i="touch"===e?"touchmove":"mousemove",s="touch"===e?"touchend":"mouseup",o=(this.itemsContainer?.getBoundingClientRect()?.top??0)+window.scrollY,a=t.pageY??t.touches[0].pageY,n=this.getBoundingClientRect().height-1;let r=0;const d=this.items.map(t=>(r+=t.getBoundingClientRect().height-1,r)),l=t=>{const e=t.pageY??t.touches[0].pageY,i=t.clientY??t.touches[0].clientY,s=e-o,r=e-a;this.style.transform=`translateY(${r}px)`,this.hoverIndex=this.#l(d,s),this.#h(this.originIndex,this.hoverIndex,this.dragging,n),i<5?scrollBy({top:-window.innerHeight/5,behavior:"smooth"}):i<25&&scrollBy({top:-window.innerHeight/10,behavior:"smooth"}),window.innerHeight-i<5?scrollBy({top:window.innerHeight/5,behavior:"smooth"}):window.innerHeight-i<25&&scrollBy({top:window.innerHeight/10,behavior:"smooth"})},c=()=>{document.removeEventListener(i,l),this.removeEventListener(s,h),this.dragging=!1;const t=()=>{this.#p(this.originIndex,this.hoverIndex),this.originIndex=null,this.hoverIndex=null,this.style.transform="",this.style.transition="",this.removeEventListener("transitionend",t)};this.addEventListener("transitionend",t),this.style.transition="transform 0.1s ease-out",this.style.transform="translate3d(0, 0, 0)",document.removeEventListener("mouseout",c)},h=()=>{this.dragging=!1,this.items.forEach(t=>t.dragging=!1),document.removeEventListener(i,l),document.removeEventListener(s,h),"mouse"===e&&document.removeEventListener("mouseout",c);const t=()=>{null!==this.originIndex&&null!==this.hoverIndex&&this.dispatchEvent(new k(this.originIndex,this.hoverIndex)),this.#p(this.originIndex,this.hoverIndex),this.originIndex=null,this.hoverIndex=null,this.style.transform="",this.style.transition="",this.removeEventListener("transitionend",t)};this.addEventListener("transitionend",t);const o=this.items.filter(t=>t.nudgeUp).map(t=>t.getBoundingClientRect().height>0?t.getBoundingClientRect().height-1:0).reduce((t,e)=>t+e,0),a=this.items.filter(t=>t.nudgeDown).map(t=>-t.getBoundingClientRect().height-1).reduce((t,e)=>t+e,0),n=0!==o?o:a;this.style.transition="transform 0.1s ease-out",this.style.transform=`translate3d(0, ${n}px, 0)`};"mouse"===e&&window.addEventListener("mouseout",c),document.addEventListener(s,h),document.addEventListener(i,l),l(t)}}i([s({type:Boolean,reflect:!0,attribute:"nudge-down"})],S.prototype,"nudgeDown",null),i([s({type:Boolean,reflect:!0,attribute:"nudge-up"})],S.prototype,"nudgeUp",null),i([s({type:Boolean,reflect:!0,attribute:"dragged"})],S.prototype,"dragged",null),i([s({type:Boolean,reflect:!0,attribute:"dragging"})],S.prototype,"dragging",null),i([s({type:Boolean,attribute:"disable-drag",reflect:!0})],S.prototype,"disableDrag",null),i([o()],S.prototype,"nudgeHeight",null),i([o()],S.prototype,"hoverIndex",null),i([o()],S.prototype,"originIndex",null);let D=class extends S{#g;get name(){return this.#g}set name(t){this.#g=t}#u;get selected(){return this.#u}set selected(t){this.#u=t}#m;get disabled(){return this.#m}set disabled(t){this.#m=t}#b;get index(){return this.#b}set index(t){this.#b=t}get items(){return Array.from(this.parentElement?.querySelectorAll("data-table-core-settings-item")??[])}get itemsContainer(){return this.parentElement}static{this.styles=[S.styles,e`
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
    `]}render(){return a`
      <style>
        :host([nudge-down]:not([dragged])) {
          transform: translate3d(0, ${this.nudgeHeight}px, 0);
        }

        :host([nudge-up]:not([dragged])) {
          transform: translate3d(0, -${this.nudgeHeight}px, 0);
        }
      </style>
      <md-elevation></md-elevation>
      <md-icon @mousedown=${this.mouseEvent} @touchstart=${this.touchEvent} drag>drag_indicator</md-icon>
      <span>${this.name}</span>
      <md-switch
        ?selected=${this.selected}
        @change=${()=>{this.selected=!this.selected,this.dispatchEvent(new Event("changed"))}}
        icons
        show-only-selected-icon
        ?disabled=${this.disabled}
      ></md-switch>
    `}};i([s({type:String})],D.prototype,"name",null),i([s({type:Boolean})],D.prototype,"selected",null),i([s({type:Boolean})],D.prototype,"disabled",null),i([s({type:Number})],D.prototype,"index",null),D=i([n("data-table-core-settings-item")],D);let A=class extends S{#g;get name(){return this.#g}set name(t){this.#g=t}#f;get sortDirection(){return this.#f}set sortDirection(t){this.#f=t}#b;get index(){return this.#b}set index(t){this.#b=t}#m;get disabled(){return this.#m}set disabled(t){this.#m=t}get items(){return Array.from(this.parentElement?.querySelectorAll("data-table-core-settings-sort-item")??[])}get itemsContainer(){return this.parentElement}static{this.styles=[S.styles,r,d,l,e`
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

        min-width: 105px;
      }

      :host([dragging]) h5[annotation],
      :host([dragged]) h5[annotation] {
        opacity: 0;
        height: 0;
      }
    `]}render(){return a`
      <style>
        :host([nudge-down]:not([dragged])) {
          transform: translate3d(0, ${this.nudgeHeight}px, 0);
        }

        :host([nudge-up]:not([dragged])) {
          transform: translate3d(0, -${this.nudgeHeight}px, 0);
        }
      </style>
      <md-elevation></md-elevation>
      <md-icon @mousedown=${this.mouseEvent} @touchstart=${this.touchEvent} drag>drag_indicator</md-icon>
      <header ellipsis>
        <h5 ellipsis annotation>${0===this.index?a`sort by`:a`then by`}</h5>
        <p ellipsis>${this.name}</p>
      </header>
      <md-filled-select
        ?disabled=${this.disabled}
        .value=${this.sortDirection}
        @change=${t=>{this.sortDirection=t.target.value,this.dispatchEvent(new Event("sort-direction-changed"))}}
      >
        <md-select-option value="asc"><span>A to Z</span></md-select-option>
        <md-select-option value="desc"><span>Z to A</span> </md-select-option>
      </md-filled-select>
      <md-icon-button ?disabled=${this.disabled} remove @click=${()=>this.dispatchEvent(new Event("delete"))}><md-icon>close_small</md-icon></md-icon-button>
    `}};i([s({type:String})],A.prototype,"name",null),i([s({type:String,reflect:!0,attribute:"sort-direction"})],A.prototype,"sortDirection",null),i([s({type:Number})],A.prototype,"index",null),i([s({type:Boolean,reflect:!0})],A.prototype,"disabled",null),A=i([n("data-table-core-settings-sort-item")],A);const C=e`
  nice-badge {
    box-sizing: border-box;

    background-color: var(--md-sys-color-error);
    color: var(--md-sys-color-on-error);

    display: grid;
    place-content: center;
    border-radius: 16px;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;

    font-family: Metropolis;

    padding: 1px 4px;
    border: 1px solid transparent;
    min-width: 18px;

    position: absolute;
    top: -1px;
    right: -1px;

    height: initial;
    width: initial;
  }

  nice-badge[primary] {
    background-color: var(--md-sys-color-primary);
    color: var(--md-sys-color-on-primary);
  }

  nice-badge[secondary] {
    background-color: var(--md-sys-color-secondary);
    color: var(--md-sys-color-on-secondary);
  }

  nice-badge[compact] {
    padding: 1px 2px;

    font-size: 12px;
    line-height: 12px;
  }
`;let z=class extends(c(t)){#x=null;get tableMetaData(){return this.#x}set tableMetaData(t){this.#x=t}#y=[];get userSettings(){return this.#y}set userSettings(t){this.#y=t}#v=[];get sort(){return this.#v}set sort(t){this.#v=t}#w="Customize";get viewMode(){return this.#w}set viewMode(t){this.#w=t}#$=!1;get customSortApplied(){return this.#$}set customSortApplied(t){this.#$=t}#_=!1;get customColumnsApplied(){return this.#_}set customColumnsApplied(t){this.#_=t}#k;get dialog(){return this.#k}set dialog(t){this.#k=t}updated(t){if(t.has("tableMetaData")&&(this.tableMetaData?.itemMetaData.some(t=>!this.userSettings.some(e=>e.key===t.key))&&this.#S(),this.tableMetaData?.itemMetaData.length!==this.userSettings.length&&this.#S()),t.has("sort")||t.has("tableMetaData")){const t=M(this.tableMetaData),e=JSON.stringify(t)!==JSON.stringify(this.sort);this.customSortApplied!==e&&(this.customSortApplied=e,this.dispatchEvent(new Event("custom-sort-applied-change")))}if(t.has("userSettings")||t.has("tableMetaData")){const t=this.#D(this.userSettings,this.tableMetaData)>0;this.customColumnsApplied!==t&&(this.customColumnsApplied=t,this.dispatchEvent(new Event("custom-columns-applied-change")))}}#D(t,e){let i=0;for(const s of e?.itemMetaData??[]){const e=t.find(t=>t.key===s.key);e?.show&&s.hideByDefault&&i++,e?.show||s.hideByDefault||i++}return(t.some((t,i)=>t.key!==e?.itemMetaData[i].key)||e?.itemMetaData.some((e,i)=>e.key!==t[i].key))&&i++,i}#S(){const t=this.tableMetaData?.itemMetaData.map(t=>({key:t.key,show:!t.hideByDefault}))??[];JSON.stringify(t)!==JSON.stringify(this.userSettings)&&(this.userSettings=t,this.dispatchEvent(new Event("setting-change")))}#A(){const t=M(this.tableMetaData);JSON.stringify(t)!==JSON.stringify(this.sort)&&(this.sort=t,this.dispatchEvent(new Event("sort-changed")))}async show(){return this.dialog.returnValue="",this.dialog?.show(),await new Promise(t=>{this.#C=t})}#C;static{this.styles=[C,e`
      :host {
        display: grid;
      }

      md-dialog {
        max-width: 450px;
        width: calc(100vw - 24px);

        min-height: 400px;
      }

      md-tabs {
        --md-primary-tab-container-color: var(--md-sys-color-surface-container-high);
        --md-primary-tab-with-icon-and-label-text-container-height: 80px;
        --md-primary-tab-icon-size: 32px;
        padding: 0;
        gap: 0;

        md-primary-tab:first-of-type {
          --md-primary-tab-container-shape-start-start: 32px;
          --md-focus-ring-shape-start-start: 32px;
        }

        md-primary-tab:last-of-type {
          --md-primary-tab-container-shape-start-end: 32px;
          --md-focus-ring-shape-start-end: 32px;
        }
      }

      md-primary-tab div[slot='icon'] {
        position: relative;
        nice-badge {
          position: absolute;
          top: 1px;
          right: -10px;
        }
      }

      main {
        padding: 4px 16px 8px 16px;

        p[no-sort] {
          opacity: 0.8;
          text-align: center;
        }

        add-container {
          margin-top: 16px;
          display: grid;
          justify-self: center;
        }
      }

      div[slot='actions'] {
        display: flex;
        justify-content: space-between;
        gap: 8px;
      }
    `]}render(){const t=this.tableMetaData?.itemMetaData.filter(t=>!t.disableSort&&!this.sort.some(e=>e.key===t.key))??[];return a` <md-dialog
      @open=${t=>{p(t.target),g(t.target)}}
      @close=${t=>{if("done"===t.target.returnValue||"navigation-close"===t.target.returnValue)return u(t.target),this.#C(t.target.returnValue);t.preventDefault()}}
    >
      <md-tabs slot="headline" @change=${t=>t.target.activeTab?.onActivate?.()}>
        <md-primary-tab ?disabled=${this.isLoading} .onActivate=${()=>this.viewMode="Customize"}>
          <div slot="icon">
            ${this.customColumnsApplied?a`<nice-badge compact primary>1</nice-badge>`:h}
            <md-icon>tune</md-icon>
          </div>
          Customize columns
        </md-primary-tab>
        <md-primary-tab ?disabled=${this.isLoading} .onActivate=${()=>this.viewMode="Sort"}>
          <div slot="icon">
            ${this.customSortApplied?a`<nice-badge compact primary>1</nice-badge>`:h}
            <md-icon>edit_arrow_down</md-icon>
          </div>
          <div>Advanced Sort</div>
        </md-primary-tab>
      </md-tabs>
      <main slot="content">
        ${"Customize"===this.viewMode?a` <form
              @item-drop=${t=>{t.stopPropagation();const e=this.userSettings??[],i=Math.min(t.hoverIndex,e.length-1);if(i!==t.originIndex){const s=e[t.originIndex];e.splice(t.originIndex,1),e.splice(i,0,s)}this.requestUpdate("userSettings"),this.dispatchEvent(new Event("setting-change"))}}
            >
              ${m(this.userSettings,t=>t.key,(t,e)=>a`
                  <data-table-core-settings-item
                    .index=${e}
                    .name=${this.tableMetaData?.itemMetaData.find(e=>e.key===t.key)?.friendlyName??t.key}
                    .selected=${t.show}
                    ?disabled=${t.show&&1===this.userSettings.filter(t=>t.show).length}
                    ?disable-drag=${1===this.userSettings.length}
                    @changed=${e=>{t.show=e.target.selected,this.requestUpdate("userSettings"),this.dispatchEvent(new Event("setting-change"))}}
                  ></data-table-core-settings-item>
                `)}
            </form>`:a`<form
                @item-drop=${t=>{t.stopPropagation();const e=this.sort??[],i=Math.min(t.hoverIndex,e.length-1);if(i!==t.originIndex){const s=e[t.originIndex];e.splice(t.originIndex,1),e.splice(i,0,s)}this.requestUpdate("sort"),this.dispatchEvent(new Event("sort-changed"))}}
              >
                ${this.sort.length?m(this.sort,t=>t.key,(t,e)=>a`<data-table-core-settings-sort-item
                          .index=${e}
                          .name=${this.tableMetaData?.itemMetaData.find(e=>e.key===t.key)?.friendlyName??t.key}
                          sort-direction=${t.direction}
                          ?disabled=${this.isLoading}
                          ?disable-drag=${this.isLoading||1===this.sort.length}
                          @sort-direction-changed=${t=>{this.sort[e].direction=t.target.sortDirection,this.requestUpdate("sort"),this.dispatchEvent(new Event("sort-changed"))}}
                          @delete=${()=>{this.sort.splice(e,1),this.requestUpdate("sort"),this.dispatchEvent(new Event("sort-changed"))}}
                        ></data-table-core-settings-sort-item>`):a`<p no-sort>No sort columns</p>`}
              </form>
              ${0!==t.length?a` <add-container>
                    <md-text-button
                      id="menu-anchor"
                      aria-haspopup="true"
                      aria-controls="menu"
                      aria-expanded="false"
                      trailing-icon
                      ?disabled=${this.isLoading}
                      @click=${t=>{t.preventDefault();const e=t.target.getRootNode().querySelector("#menu");e.open=!e.open}}
                    >
                      <span>Add sort column</span>
                      <md-icon slot="icon">add</md-icon>
                    </md-text-button>

                    <md-menu
                      id="menu"
                      anchor="menu-anchor"
                      positioning="popover"
                      @close-menu=${t=>{t.detail.itemPath?.[0]?.action?.()}}
                    >
                      ${m(t,t=>t.key,t=>a`<md-menu-item
                            .action=${()=>{this.sort.push({key:t.key,direction:"asc"}),this.requestUpdate("sort"),this.dispatchEvent(new Event("sort-changed"))}}
                          >
                            <md-icon slot="start">sort_by_alpha</md-icon>
                            ${t.friendlyName}
                          </md-menu-item>`)}
                    </md-menu>
                  </add-container>`:h} `}
      </main>
      <div slot="actions">
        <md-text-button
          ?disabled=${this.isLoading||"Customize"===this.viewMode?!this.customColumnsApplied:!this.customSortApplied}
          @click=${()=>"Customize"===this.viewMode?this.#S():this.#A()}
          >Restore to defaults</md-text-button
        >

        <md-filled-tonal-button ?disabled=${this.isLoading} @click=${()=>this.dialog?.close("done")}>Done</md-filled-tonal-button>
      </div>
    </md-dialog>`}};function M(t){return t?.itemMetaData.filter(t=>t.defaultSort).sort((t,e)=>(t.defaultSort?.position??0)-(e.defaultSort?.position??0)).map(t=>({key:t.key,direction:t.defaultSort?.direction??"asc"}))??[]}i([s({type:Object})],z.prototype,"tableMetaData",null),i([s({type:Array})],z.prototype,"userSettings",null),i([s({type:Array})],z.prototype,"sort",null),i([o()],z.prototype,"viewMode",null),i([o()],z.prototype,"customSortApplied",null),i([o()],z.prototype,"customColumnsApplied",null),i([b("md-dialog")],z.prototype,"dialog",null),z=i([n("titanium-data-table-core-settings-dialog")],z);let N=class extends(c(t)){#z=[];get items(){return this.#z}set items(t){this.#z=t}#x=null;get tableMetaData(){return this.#x}set tableMetaData(t){this.#x=t}#M=null;get tableStyles(){return this.#M}set tableStyles(t){this.#M=t}#m=!1;get disabled(){return this.#m}set disabled(t){this.#m=t}#N=!1;get stickyHeader(){return this.#N}set stickyHeader(t){this.#N=t}#E="none";get selectionMode(){return this.#E}set selectionMode(t){this.#E=t}#u=[];get selected(){return this.#u}set selected(t){this.#u=t}#B;get settingsDialog(){return this.#B}set settingsDialog(t){this.#B=t}#Y=0;get countOfCustomSettingsApplied(){return this.#Y}set countOfCustomSettingsApplied(t){this.#Y=t}#j="dtc-pref";get localStorageKey(){return this.#j}set localStorageKey(t){this.#j=t}#$=!1;get customSortApplied(){return this.#$}set customSortApplied(t){this.#$=t}#_=!1;get customColumnsApplied(){return this.#_}set customColumnsApplied(t){this.#_=t}get sort(){const t=window.localStorage.getItem(`${this.localStorageKey}-user-sort`);return null===t?M(this.tableMetaData):JSON.parse(t??"[]")||[]}set sort(t){localStorage.setItem(`${this.localStorageKey}-user-sort`,JSON.stringify(t))}get userSettings(){return JSON.parse(window.localStorage.getItem(`${this.localStorageKey}-user-settings`)??"[]")||[]}set userSettings(t){localStorage.setItem(`${this.localStorageKey}-user-settings`,JSON.stringify(t))}updated(t){t.has("items")&&t.get("items")!==this.items&&this.deselectAll()}selectAll(){"multi"===this.selectionMode&&(this.selected=this.items,this.#O())}deselectAll(){this.selected.length>0&&(this.selected=[],this.#O())}showSettingsDialog(){this.settingsDialog.show()}#O(){this.dispatchEvent(new Event("selected-changed",{composed:!0}))}orderByUserPreference(t,e){return t.sort((t,i)=>e.findIndex(e=>e.key===t.key)-e.findIndex(t=>t.key===i.key))}static{this.styles=[f,e`
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

      :host([selection-mode='none']) table {
        thead {
          button {
            padding-left: 16px;
          }
        }

        tbody {
          tr {
            td:first-of-type {
              content-container {
                padding-left: 16px;
              }
            }
          }
        }
      }

      content-container {
        display: grid;
        height: 100%;
        box-sizing: border-box;
        background-color: var(--titanium-data-table-core-background-color);
      }

      :host([sticky-header]) {
        thead th:not([checkbox]) {
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
          th[checkbox] {
            width: 48px;
            height: 48px;
            padding: 0;
            position: sticky;
            left: 0;
            top: 0;
            z-index: 4;

            content-container {
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

              background-color: var(--titanium-data-table-core-background-color);
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
            content-container {
              padding: 0;

              display: grid;
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

      :host(:not([disabled])) tbody tr:hover td content-container {
        background-color: rgb(from var(--md-sys-color-on-surface, #1d1b20) r g b / 0.08);
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

      image-row {
        display: flex;
        align-items: center;
        gap: 12px;

        img {
          height: 32px;
          width: 32px;
          image-rendering: -webkit-optimize-contrast;
        }

        [supporting-text] {
          font-size: 12px;
          line-height: 14px;
          opacity: 0.8;
        }
      }

      [hidden] {
        display: none !important;
      }
    `]}render(){return a`
      <style>
        ${this.tableStyles?this.tableStyles:h}
      </style>
      <table part="table" ?has-selected-items=${this.selected.length>0}>
        <thead>
          <tr>
            ${"none"!==this.selectionMode?a`
                  <th checkbox>
                    <content-container>
                      ${"multi"===this.selectionMode?a` <md-checkbox
                            title="${this.selected.length>0?"Deselect":"Select"} all"
                            ?checked=${this.selected.length>0}
                            ?indeterminate=${0!==this.selected.length&&this.selected.length!==this.items.length}
                            ?disabled=${0===this.items.length}
                            @click=${t=>{this.selected.length>0?this.deselectAll():this.selectAll(),t.target?.focus()}}
                          ></md-checkbox>`:h}
                    </content-container>
                  </th>
                `:h}
            ${m(this.orderByUserPreference(this.tableMetaData?.itemMetaData?.filter(t=>!t.hideByDefault&&this.userSettings.find(e=>e.key===t.key)?.show||this.userSettings.find(e=>e.key===t.key)?.show)??[],this.userSettings)??[],t=>t.key,t=>{const e=this.sort.find(e=>e.key===t.key),i=this.sort.findIndex(e=>e.key===t.key),s=this.tableMetaData?.itemMetaData?.find(e=>e.key===t.key)?.width;return a`<th style=${s?x({minWidth:s}):h}>
                  <button
                    ?active-sort=${-1!==i}
                    sort-direction=${e?.direction||h}
                    ?disabled=${this.disabled||t.disableSort}
                    @click=${()=>{this.sort=[{key:t.key,direction:"asc"===this.sort?.[0]?.direction?"desc":"asc"}],this.dispatchEvent(new Event("sort-changed"))}}
                  >
                    <span>${t.friendlyName??"-"}</span>
                    <icon-container
                      ><md-icon>arrow_downward</md-icon>
                      ${-1!==i&&this.sort.length>1?a`<div sort-number>${i+1}</div>`:h}
                    </icon-container>
                    <md-ripple ?disabled=${this.disabled||t.disableSort}></md-ripple>
                    <md-focus-ring inward></md-focus-ring>
                  </button>
                </th>`})}
          </tr>
        </thead>
        <tbody>
          ${this.isLoading||0!==this.items.length?h:a`
                <tr>
                  ${"none"!==this.selectionMode?a`<td table-message></td>`:h}
                  <td table-message colspan=${this.tableMetaData?.itemMetaData?.length??0}>No results</td>
                </tr>
              `}
          ${m(this.items??[],t=>this.tableMetaData?.uniqueKey(t)??"",t=>a`
                <tr
                  ?link-url=${!!this.tableMetaData?.itemLinkUrl?.(t)}
                  ?selected=${this.selected.includes(t)}
                  @click=${()=>{0===this.selected.length?this.tableMetaData?.itemLinkUrl&&this.dispatchEvent(new CustomEvent("change-route",{bubbles:!0,composed:!0,detail:{path:this.tableMetaData?.itemLinkUrl?.(t)??""}})):"single"===this.selectionMode?(this.selected=[t],this.requestUpdate("selected"),this.#O()):"multi"===this.selectionMode&&(this.selected.includes(t)?this.selected.splice(this.selected.indexOf(t),1):this.selected.push(t),this.requestUpdate("selected"),this.#O())}}
                >
                  ${"none"!==this.selectionMode?a`<td checkbox>
                        <content-container>
                          <md-checkbox
                            @click=${t=>t.stopPropagation()}
                            ?checked=${this.selected.includes(t)}
                            @change=${()=>{this.selected.includes(t)?this.selected.splice(this.selected.indexOf(t),1):"single"===this.selectionMode?this.selected=[t]:this.selected.push(t),this.requestUpdate("selected"),this.#O()}}
                            ?disabled=${this.disabled}
                          ></md-checkbox>
                        </content-container>
                      </td>`:h}
                  ${m(this.orderByUserPreference(this.tableMetaData?.itemMetaData?.filter(t=>!t.hideByDefault&&this.userSettings.find(e=>e.key===t.key)?.show||this.userSettings.find(e=>e.key===t.key)?.show)??[],this.userSettings)?.map(t=>t.key)??[],t=>t,e=>a`<td>
                        <content-container>${this.tableMetaData?.itemMetaData?.find(t=>t.key===e)?.render(t)??"-"}</content-container>
                      </td>`)}
                </tr>
              `)}
        </tbody>
      </table>
      <titanium-data-table-core-settings-dialog
        ?isLoading=${this.isLoading}
        .tableMetaData=${this.tableMetaData}
        .userSettings=${this.userSettings}
        @custom-sort-applied-change=${t=>{this.customSortApplied=t.target.customSortApplied,this.dispatchEvent(new Event("custom-sort-applied-change"))}}
        @custom-columns-applied-change=${t=>{this.customColumnsApplied=t.target.customColumnsApplied,this.dispatchEvent(new Event("custom-columns-applied-change"))}}
        .sort=${this.sort}
        @sort-changed=${t=>{this.sort=structuredClone(t.target.sort),this.dispatchEvent(new Event("sort-changed"))}}
        @setting-change=${t=>this.userSettings=structuredClone(t.target.userSettings)}
      ></titanium-data-table-core-settings-dialog>
    `}};i([s({type:Array})],N.prototype,"items",null),i([s({type:Object})],N.prototype,"tableMetaData",null),i([s({type:Object})],N.prototype,"tableStyles",null),i([s({type:Boolean,reflect:!0})],N.prototype,"disabled",null),i([s({type:Boolean,attribute:"sticky-header",reflect:!0})],N.prototype,"stickyHeader",null),i([s({type:String,attribute:"selection-mode",reflect:!0})],N.prototype,"selectionMode",null),i([s({type:Array})],N.prototype,"selected",null),i([b("titanium-data-table-core-settings-dialog")],N.prototype,"settingsDialog",null),i([s({type:Number})],N.prototype,"countOfCustomSettingsApplied",null),i([s({type:String,attribute:"local-storage-key"})],N.prototype,"localStorageKey",null),i([o()],N.prototype,"customSortApplied",null),i([o()],N.prototype,"customColumnsApplied",null),i([o()],N.prototype,"sort",null),i([o()],N.prototype,"userSettings",null),N=i([n("titanium-data-table-core")],N);class E extends Event{static{this.eventType="titanium-data-table-items-reorder"}constructor(){super(E.eventType)}}let B=class extends t{#u=[];get selected(){return this.#u}set selected(t){this.#u=t}#I=!1;get hasSelected(){return this.#I}set hasSelected(t){this.#I=t}#J;get hasAddButton(){return this.#J}set hasAddButton(t){this.#J=t}#P;get addButtonElements(){return this.#P}set addButtonElements(t){this.#P=t}updated(t){t.has("selected")&&(this.hasSelected=this.selected.length>0)}static{this.styles=[y,l,e`
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
        grid: 'text buttons' / minmax(40px, 1fr) auto;
        min-height: 40px;
        align-items: end;

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
    `]}render(){return a`
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
    `}};i([s({type:Array})],B.prototype,"selected",null),i([s({type:Boolean,reflect:!0,attribute:"has-selected"})],B.prototype,"hasSelected",null),i([s({type:Boolean,reflect:!0,attribute:"has-add-button"})],B.prototype,"hasAddButton",null),i([v({slot:"add-button"})],B.prototype,"addButtonElements",null),B=i([n("titanium-data-table-action-bar")],B);const Y=[{Id:1,Name:"Model 3",Appearance:"Slick",DragCoefficient:.23,Year:2017},{Id:2,Name:"Model X",Appearance:"Slick",DragCoefficient:.1,Year:2018},{Id:3,Name:"Model Y",Appearance:"Slick",DragCoefficient:.4,Year:2020},{Id:4,Name:"Model S",Appearance:"Slick",DragCoefficient:.2,Year:2009},{Id:5,Name:"Cybertruck",Appearance:"Ugly",DragCoefficient:.3,Year:2024},{Id:6,Name:"Tesla Semi",Appearance:"Ugly",DragCoefficient:.3,Year:2022},{Id:7,Name:"Model X Plaid",Appearance:"Plaid",DragCoefficient:.1,Year:2024},{Id:8,Name:"Model S Plaid",Appearance:"Plaid",DragCoefficient:.1,Year:2020},{Id:9,Name:"Model S Plaid+",Appearance:"Plaid",DragCoefficient:.1,Year:2022},{Id:10,Name:"Gen. 2 Roadster",Appearance:"Slick",DragCoefficient:.23,Year:2025}];let j=class extends t{#v=[];get sort(){return this.#v}set sort(t){this.#v=t}#z=this.sortItems(Y,this.sort);get items(){return this.#z}set items(t){this.#z=t}#u=[];get selected(){return this.#u}set selected(t){this.#u=t}#Y=0;get countOfCustomSettingsApplied(){return this.#Y}set countOfCustomSettingsApplied(t){this.#Y=t}#U;get tableCore(){return this.#U}set tableCore(t){this.#U=t}sortItems(t,e){return[...t].sort((t,i)=>{for(const s of e||[]){const e=t[s.key],o=i[s.key];if(null==e&&null==o)continue;if(null==e)return"asc"===s.direction?1:-1;if(null==o)return"asc"===s.direction?-1:1;let a=0;if(a="string"==typeof e&&"string"==typeof o?e.localeCompare(o):e<o?-1:e>o?1:0,"desc"===s.direction&&(a=-a),0!==a)return a}return 0})}#x={uniqueKey:t=>t.Id?.toString()??"",itemLinkUrl:t=>`/titanium-data-table-core#edit-${t.Id}`,itemMetaData:[{key:"Name",friendlyName:"Name",render:t=>a`${t.Name}`,width:"450px",defaultSort:{direction:"asc",position:2}},{key:"Appearance",friendlyName:"Appearance",sortExpression:"Appearance",render:t=>a`${t.Appearance}`,width:"250px",defaultSort:{direction:"desc",position:1}},{key:"DragCoefficient",friendlyName:"Drag Coefficient",sortExpression:"DragCoefficient",render:t=>a`${t.DragCoefficient}%`,width:"250px"},{key:"Year",friendlyName:"Year",sortExpression:"Year",render:t=>a`${t.Year}`,width:"250px",hideByDefault:!0,disableSort:!0}]};get tableMetaData(){return this.#x}set tableMetaData(t){this.#x=t}static{this.styles=[w,y,C,d,e`
      :host {
        display: grid;
      }

      md-icon-button[table-settings] {
        position: relative;
      }

      nice-badge {
        position: absolute;
        top: -1px;
        right: -1px;
      }

      main {
        overflow-x: auto;
        margin: 24px 0;
        resize: horizontal;
        max-width: 1200px;
      }

      md-filled-tonal-button {
        margin-right: 12px;
      }
    `]}render(){return a`
      <h1>Full working example</h1>
      <p>Table with items and method controls - supports multi-column sorting</p>
      <main>
        <titanium-data-table-action-bar slot="footer" .selected=${this.selected}>
          <md-filled-tonal-button slot="add-button" @click=${()=>alert("add dialog")}>
            <md-icon slot="icon">add</md-icon>
            <span>Add tesla</span>
          </md-filled-tonal-button>
          <md-icon-button table-settings slot="add-button" @click=${()=>this.tableCore.showSettingsDialog()}>
            <md-icon>table_edit</md-icon>
            ${this.countOfCustomSettingsApplied>0?a`<nice-badge compact primary>${this.countOfCustomSettingsApplied}</nice-badge>`:h}
          </md-icon-button>

          <md-filled-button
            slot="selected-actions"
            ?disabled=${this.selected?.length>1}
            @click=${()=>{alert("edit dialog"),this.selected=[]}}
          >
            <md-icon slot="icon">edit</md-icon>
            <span>Edit</span>
          </md-filled-button>

          <md-filled-button slot="selected-actions" ?disabled=${this.selected?.length>1} @click=${()=>alert("delete dialog")}>
            <md-icon slot="icon">delete</md-icon>
            <span>Delete (${this.selected.length})</span>
          </md-filled-button>
        </titanium-data-table-action-bar>
        <titanium-data-table-core
          local-storage-key="test-dtc-pref-tesla-demo"
          @custom-sort-applied-change=${t=>{this.countOfCustomSettingsApplied=(t.target.customSortApplied?1:0)+(t.target.customColumnsApplied?1:0)}}
          @custom-columns-applied-change=${t=>{this.countOfCustomSettingsApplied=(t.target.customSortApplied?1:0)+(t.target.customColumnsApplied?1:0)}}
          selection-mode="multi"
          sticky-header
          @selected-changed=${t=>{this.selected=[...t.target.selected]}}
          @sort-changed=${async t=>{this.sort=t.target.sort;const e=$(300);this.tableCore.loadWhile(e),await e,this.items=this.sortItems(this.items,this.sort),this.requestUpdate("items")}}
          .items=${this.items}
          .tableMetaData=${this.tableMetaData}
          .selected=${this.selected}
        >
        </titanium-data-table-core>
      </main>
    `}};i([o()],j.prototype,"sort",null),i([o()],j.prototype,"items",null),i([o()],j.prototype,"selected",null),i([o()],j.prototype,"countOfCustomSettingsApplied",null),i([b("titanium-data-table-core")],j.prototype,"tableCore",null),i([o()],j.prototype,"tableMetaData",null),j=i([n("data-table-core-playground")],j);let O=class extends t{static{this.styles=[_,e``]}render(){return a`
      <story-header name="Titanium data table core" className="TitaniumDataTableCoreDemo"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-data-table-core/project.json">
        <data-table-core-playground></data-table-core-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-data-table-core"></api-docs>
    `}};O=i([n("titanium-data-table-core-demo")],O);export{O as TitaniumDataTableCoreDemo};
