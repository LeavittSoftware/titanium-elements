import{W as e,D as t,H as o,J as i,K as r,r as s,_ as a,n,d,e as c,M as l,N as h,O as u,E as m,x as p,y as g,Q as b,R as v,U as x,V as k,i as f,t as y}from"./ELJVH0kr.js";class w extends e{computeValidity(e){return this.checkboxControl||(this.checkboxControl=document.createElement("input"),this.checkboxControl.type="checkbox"),this.checkboxControl.checked=e.checked,this.checkboxControl.required=e.required,{validity:this.checkboxControl.validity,validationMessage:this.checkboxControl.validationMessage}}equals(e,t){return e.checked===t.checked&&e.required===t.required}copy({checked:e,required:t}){return{checked:e,required:t}}}const _=t(o(i(r(s))));class $ extends _{constructor(){super(),this.checked=!1,this.indeterminate=!1,this.required=!1,this.value="on",this.prevChecked=!1,this.prevDisabled=!1,this.prevIndeterminate=!1,this.addEventListener("click",(e=>{l(e)&&this.input&&(this.focus(),h(this.input))}))}update(e){(e.has("checked")||e.has("disabled")||e.has("indeterminate"))&&(this.prevChecked=e.get("checked")??this.checked,this.prevDisabled=e.get("disabled")??this.disabled,this.prevIndeterminate=e.get("indeterminate")??this.indeterminate),super.update(e)}render(){const e=!this.prevChecked&&!this.prevIndeterminate,t=this.prevChecked&&!this.prevIndeterminate,o=this.prevIndeterminate,i=this.checked&&!this.indeterminate,r=this.indeterminate,s=u({disabled:this.disabled,selected:i||r,unselected:!i&&!r,checked:i,indeterminate:r,"prev-unselected":e,"prev-checked":t,"prev-indeterminate":o,"prev-disabled":this.prevDisabled}),{ariaLabel:a,ariaInvalid:n}=this;return p`
      <div class="container ${s}">
        <input
          type="checkbox"
          id="input"
          aria-checked=${r?"mixed":m}
          aria-label=${a||m}
          aria-invalid=${n||m}
          ?disabled=${this.disabled}
          ?required=${this.required}
          .indeterminate=${this.indeterminate}
          .checked=${this.checked}
          @input=${this.handleInput}
          @change=${this.handleChange} />

        <div class="outline"></div>
        <div class="background"></div>
        <md-focus-ring part="focus-ring" for="input"></md-focus-ring>
        <md-ripple for="input" ?disabled=${this.disabled}></md-ripple>
        <svg class="icon" viewBox="0 0 18 18" aria-hidden="true">
          <rect class="mark short" />
          <rect class="mark long" />
        </svg>
      </div>
    `}handleInput(e){const t=e.target;this.checked=t.checked,this.indeterminate=t.indeterminate}handleChange(e){g(this,e)}[b](){return!this.checked||this.indeterminate?null:this.value}[v](){return String(this.checked)}formResetCallback(){this.checked=this.hasAttribute("checked")}formStateRestoreCallback(e){this.checked="true"===e}[x](){return new w((()=>this))}[k](){return this.input}}$.shadowRootOptions={...s.shadowRootOptions,delegatesFocus:!0},a([n({type:Boolean})],$.prototype,"checked",void 0),a([n({type:Boolean})],$.prototype,"indeterminate",void 0),a([n({type:Boolean})],$.prototype,"required",void 0),a([n()],$.prototype,"value",void 0),a([d()],$.prototype,"prevChecked",void 0),a([d()],$.prototype,"prevDisabled",void 0),a([d()],$.prototype,"prevIndeterminate",void 0),a([c("input")],$.prototype,"input",void 0);const z=f`:host{border-start-start-radius:var(--md-checkbox-container-shape-start-start, var(--md-checkbox-container-shape, 2px));border-start-end-radius:var(--md-checkbox-container-shape-start-end, var(--md-checkbox-container-shape, 2px));border-end-end-radius:var(--md-checkbox-container-shape-end-end, var(--md-checkbox-container-shape, 2px));border-end-start-radius:var(--md-checkbox-container-shape-end-start, var(--md-checkbox-container-shape, 2px));display:inline-flex;height:var(--md-checkbox-container-size, 18px);position:relative;vertical-align:top;width:var(--md-checkbox-container-size, 18px);-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer}:host([disabled]){cursor:default}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--md-checkbox-container-size, 18px))/2)}md-focus-ring{height:44px;inset:unset;width:44px}input{appearance:none;height:48px;margin:0;opacity:0;outline:none;position:absolute;width:48px;z-index:1;cursor:inherit}:host([touch-target=none]) input{height:100%;width:100%}.container{border-radius:inherit;display:flex;height:100%;place-content:center;place-items:center;position:relative;width:100%}.outline,.background,.icon{inset:0;position:absolute}.outline,.background{border-radius:inherit}.outline{border-color:var(--md-checkbox-outline-color, var(--md-sys-color-on-surface-variant, #49454f));border-style:solid;border-width:var(--md-checkbox-outline-width, 2px);box-sizing:border-box}.background{background-color:var(--md-checkbox-selected-container-color, var(--md-sys-color-primary, #6750a4))}.background,.icon{opacity:0;transition-duration:150ms,50ms;transition-property:transform,opacity;transition-timing-function:cubic-bezier(0.3, 0, 0.8, 0.15),linear;transform:scale(0.6)}:where(.selected) :is(.background,.icon){opacity:1;transition-duration:350ms,50ms;transition-timing-function:cubic-bezier(0.05, 0.7, 0.1, 1),linear;transform:scale(1)}md-ripple{border-radius:var(--md-checkbox-state-layer-shape, var(--md-sys-shape-corner-full, 9999px));height:var(--md-checkbox-state-layer-size, 40px);inset:unset;width:var(--md-checkbox-state-layer-size, 40px);--md-ripple-hover-color: var(--md-checkbox-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-checkbox-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-checkbox-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-pressed-opacity: var(--md-checkbox-pressed-state-layer-opacity, 0.12)}.selected md-ripple{--md-ripple-hover-color: var(--md-checkbox-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-hover-opacity: var(--md-checkbox-selected-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-checkbox-selected-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-opacity: var(--md-checkbox-selected-pressed-state-layer-opacity, 0.12)}.icon{fill:var(--md-checkbox-selected-icon-color, var(--md-sys-color-on-primary, #fff));height:var(--md-checkbox-icon-size, 18px);width:var(--md-checkbox-icon-size, 18px)}.mark.short{height:2px;transition-property:transform,height;width:2px}.mark.long{height:2px;transition-property:transform,width;width:10px}.mark{animation-duration:150ms;animation-timing-function:cubic-bezier(0.3, 0, 0.8, 0.15);transition-duration:150ms;transition-timing-function:cubic-bezier(0.3, 0, 0.8, 0.15)}.selected .mark{animation-duration:350ms;animation-timing-function:cubic-bezier(0.05, 0.7, 0.1, 1);transition-duration:350ms;transition-timing-function:cubic-bezier(0.05, 0.7, 0.1, 1)}.checked .mark,.prev-checked.unselected .mark{transform:scaleY(-1) translate(7px, -14px) rotate(45deg)}.checked .mark.short,.prev-checked.unselected .mark.short{height:5.6568542495px}.checked .mark.long,.prev-checked.unselected .mark.long{width:11.313708499px}.indeterminate .mark,.prev-indeterminate.unselected .mark{transform:scaleY(-1) translate(4px, -10px) rotate(0deg)}.prev-unselected .mark{transition-property:none}.prev-unselected.checked .mark.long{animation-name:prev-unselected-to-checked}@keyframes prev-unselected-to-checked{from{width:0}}:where(:hover) .outline{border-color:var(--md-checkbox-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));border-width:var(--md-checkbox-hover-outline-width, 2px)}:where(:hover) .background{background:var(--md-checkbox-selected-hover-container-color, var(--md-sys-color-primary, #6750a4))}:where(:hover) .icon{fill:var(--md-checkbox-selected-hover-icon-color, var(--md-sys-color-on-primary, #fff))}:where(:focus-within) .outline{border-color:var(--md-checkbox-focus-outline-color, var(--md-sys-color-on-surface, #1d1b20));border-width:var(--md-checkbox-focus-outline-width, 2px)}:where(:focus-within) .background{background:var(--md-checkbox-selected-focus-container-color, var(--md-sys-color-primary, #6750a4))}:where(:focus-within) .icon{fill:var(--md-checkbox-selected-focus-icon-color, var(--md-sys-color-on-primary, #fff))}:where(:active) .outline{border-color:var(--md-checkbox-pressed-outline-color, var(--md-sys-color-on-surface, #1d1b20));border-width:var(--md-checkbox-pressed-outline-width, 2px)}:where(:active) .background{background:var(--md-checkbox-selected-pressed-container-color, var(--md-sys-color-primary, #6750a4))}:where(:active) .icon{fill:var(--md-checkbox-selected-pressed-icon-color, var(--md-sys-color-on-primary, #fff))}:where(.disabled,.prev-disabled) :is(.background,.icon,.mark){animation-duration:0s;transition-duration:0s}:where(.disabled) .outline{border-color:var(--md-checkbox-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));border-width:var(--md-checkbox-disabled-outline-width, 2px);opacity:var(--md-checkbox-disabled-container-opacity, 0.38)}:where(.selected.disabled) .outline{visibility:hidden}:where(.selected.disabled) .background{background:var(--md-checkbox-selected-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-checkbox-selected-disabled-container-opacity, 0.38)}:where(.disabled) .icon{fill:var(--md-checkbox-selected-disabled-icon-color, var(--md-sys-color-surface, #fef7ff))}@media(forced-colors: active){.background{background-color:CanvasText}.selected.disabled .background{background-color:GrayText;opacity:1}.outline{border-color:CanvasText}.disabled .outline{border-color:GrayText;opacity:1}.icon{fill:Canvas}}
`;let D=class extends ${};D.styles=[z],D=a([y("md-checkbox")],D);let B=class extends s{constructor(){super(...arguments),this.#e=!1,this.#t=!1,this.#o=!1,this.#i=null,this.#r=null,this.mouseEvent=e=>this.#s(e,"mouse"),this.touchEvent=e=>{this.#s(e,"touch")}}#a;get item(){return this.#a}set item(e){this.#a=e}#e;get selected(){return this.#e}set selected(e){this.#e=e}#n;get disableSelect(){return this.#n}set disableSelect(e){this.#n=e}#t;get narrow(){return this.#t}set narrow(e){this.#t=e}#o;get enableDrag(){return this.#o}set enableDrag(e){this.#o=e}#d;get nudgeDown(){return this.#d}set nudgeDown(e){this.#d=e}#c;get nudgeUp(){return this.#c}set nudgeUp(e){this.#c=e}#l;get dragged(){return this.#l}set dragged(e){this.#l=e}#h;get dragging(){return this.#h}set dragging(e){this.#h=e}#u;get nudgeHeight(){return this.#u}set nudgeHeight(e){this.#u=e}#i;get hoverIndex(){return this.#i}set hoverIndex(e){this.#i=e}#r;get originIndex(){return this.#r}set originIndex(e){this.#r=e}async updated(e){e.has("enableDrag")&&(this.enableDrag?(this.addEventListener("mousedown",this.mouseEvent),this.addEventListener("touchstart",this.touchEvent)):(this.removeEventListener("mousedown",this.mouseEvent),this.removeEventListener("touchstart",this.touchEvent)))}firstUpdated(){const e=this.shadowRoot?.querySelector("slot")?.assignedElements();e?.forEach((e=>{const t=e,o=t.getAttribute("width");o&&(t.style.width=o)})),this.addEventListener("dblclick",(()=>{this.dispatchEvent(new Event("transitionend")),this.dispatchEvent(new CustomEvent("titanium-data-table-item-navigate",{detail:this.item}))}))}updateDragProps(e,t,o,i){const r=this.items.indexOf(this);this.nudgeDown=null!==t&&null!==o&&r<t&&r>=o,this.nudgeUp=null!==t&&null!==o&&r>t&&r<=o,this.dragged=t===r,this.dragging=e,this.nudgeHeight=i}toggleSelected(){this.selected?this.deselect():this.select()}select(){this.selected||this.#m(!0)}deselect(){this.selected&&this.#m(!1)}#m(e){this.selected=e,this.dispatchEvent(new Event("titanium-data-table-item-selected-changed",{bubbles:!0,composed:!0}))}get dataTable(){return this.parentElement}get items(){return this.dataTable.itemsSlot?.assignedElements()??[]}get itemsContainer(){return this.dataTable.itemsContainer}#p(e,t){for(let o=0;o<e.length;o++){if(t<=e[o])return o}return e.length-1}#g(e,t){const o=Math.max(t??0,e??0)+1;let i=Math.min(t??0,e??0)-1;return i=i<0?0:i,[o,i]}#b(e,t,o,i){const r=this.#g(e,t);for(let e=r[1];e<=r[0];e++){const t=this.items?.[e];t?.updateDragProps(o,this.originIndex,this.hoverIndex,i)}}#v(e,t){const o=this.#g(e,t);for(let e=o[1];e<=o[0];e++){const t=this.items?.[e];t?.updateDragProps(!1,null,null,0)}}#s(e,t){if("mouse"===t&&1!==e.which)return;e.preventDefault(),this.dragging=!0,this.originIndex=this.items.indexOf(this);const o="touch"===t?"touchmove":"mousemove",i="touch"===t?"touchend":"mouseup",r=this.itemsContainer?.getBoundingClientRect().top+window.scrollY,s=e.pageY??e.touches[0].pageY,a=this.getBoundingClientRect().height-1;let n=0;const d=this.items.map((e=>(n+=e.getBoundingClientRect().height-1,n))),c=e=>{const t=e.pageY??e.touches[0].pageY,o=e.clientY??e.touches[0].clientY,i=t-r,n=t-s;this.style.transform=`translateY(${n}px)`,this.hoverIndex=this.#p(d,i),this.#b(this.originIndex,this.hoverIndex,this.dragging,a),o<5?scrollBy({top:-window.innerHeight/5,behavior:"smooth"}):o<25&&scrollBy({top:-window.innerHeight/10,behavior:"smooth"}),window.innerHeight-o<5?scrollBy({top:window.innerHeight/5,behavior:"smooth"}):window.innerHeight-o<25&&scrollBy({top:window.innerHeight/10,behavior:"smooth"})},l=()=>{document.removeEventListener(o,c),this.removeEventListener(i,h),this.dragging=!1;const e=()=>{this.#v(this.originIndex,this.hoverIndex),this.originIndex=null,this.hoverIndex=null,this.style.transform="",this.style.transition="",this.removeEventListener("transitionend",e)};this.addEventListener("transitionend",e),this.style.transition="transform 0.1s ease-out",this.style.transform="translate3d(0, 0, 0)",document.removeEventListener("mouseout",l)},h=()=>{this.dragging=!1,this.items.forEach((e=>e.dragging=!1)),document.removeEventListener(o,c),document.removeEventListener(i,h),"mouse"===t&&document.removeEventListener("mouseout",l);const e=()=>{null!==this.originIndex&&null!==this.hoverIndex&&this.dispatchEvent(new I(this.originIndex,this.hoverIndex)),this.#v(this.originIndex,this.hoverIndex),this.originIndex=null,this.hoverIndex=null,this.style.transform="",this.style.transition="",this.removeEventListener("transitionend",e)};this.addEventListener("transitionend",e);const r=this.items.filter((e=>e.nudgeUp)).map((e=>e.getBoundingClientRect().height>0?e.getBoundingClientRect().height-1:0)).reduce(((e,t)=>e+t),0),s=this.items.filter((e=>e.nudgeDown)).map((e=>-e.getBoundingClientRect().height-1)).reduce(((e,t)=>e+t),0),a=0!==r?r:s;this.style.transition="transform 0.1s ease-out",this.style.transform=`translate3d(0, ${a}px, 0)`};"mouse"===t&&window.addEventListener("mouseout",l),document.addEventListener(i,h),document.addEventListener(o,c),c(e)}static{this.styles=f`
    :host {
      display: block;

      -webkit-touch-callout: none;
      user-select: none;
      text-decoration: none;

      font-family: var(--titanium-data-table-font-family, Roboto, Noto, sans-serif);
      -webkit-font-smoothing: antialiased;

      transition: none;
      margin-top: -1px;
      box-sizing: border-box;
      border-bottom: 1px var(--md-sys-color-outline-variant) solid;
      border-top: 1px var(--md-sys-color-outline-variant) solid;
      position: relative;
    }

    :host(:not([disable-select])[selected]) {
      background-color: var(--md-sys-color-secondary-container);
    }

    :host(:not([disable-select]):not([selected]):hover) {
      background-color: rgb(from var(--md-sys-color-on-surface, #1d1b20) r g b / 0.08);
    }

    :host([enable-dragging]) {
      cursor: grab;
    }

    md-icon[drag] {
      position: absolute;
      opacity: 0.3;
      right: 7px;
      color: var(--md-sys-color-outline, #dadce0);
    }

    :host([enable-dragging]:hover) md-icon[drag] {
      opacity: 1;
      display: block;
    }

    :host([dragged]) {
      box-shadow:
        0 3px 6px rgba(0, 0, 0, 0.16),
        0 3px 6px rgba(0, 0, 0, 0.23);
      transition: none;
      overflow: hidden;
      z-index: 1 !important;
    }

    /* Only have transition under dragging, because we don't want nudged
     * items to transition into place once dragging is complete */
    :host([dragging]:not([dragged])) {
      transition: transform 0.2s ease-out;
    }

    :host main {
      display: flex;
      flex-direction: row;
      gap: 16px;
      align-items: center;
      min-height: 48px;
    }

    /* Fallback :hover style for Firefox support */
    @-moz-document url-prefix() {
      :host(:not([disable-select]):not([selected]):hover) {
        background-color: color-mix(in srgb, var(--md-sys-color-on-surface, #1d1b20) 8%, transparent);
      }
    }

    /* Do not apply :hover style on touch devices */
    @media (hover: hover) and (pointer: fine) {
      :host([enable-dragging]) div[item-footer] ::slotted(*) {
        pointer-events: none;
      }
    }

    ::slotted(row-item) {
      display: block;
      font-size: 14px;
      line-height: 18px;
      font-weight: 400;
      padding: 4px 0;
      margin: 0;
      box-sizing: border-box;
    }

    ::slotted(row-item:last-of-type) {
      padding-right: 24px;
    }

    :host([enable-dragging]) ::slotted(row-item:last-of-type) {
      padding-right: 40px;
    }

    ::slotted(row-item:not([width])) {
      -ms-flex: 3;
      -webkit-flex: 3;
      flex: 3;
    }

    ::slotted(row-item:not([width])[large]) {
      -ms-flex: 5;
      -webkit-flex: 5;
      flex: 5;
    }

    ::slotted(row-item[center]) {
      text-align: center;
    }

    ::slotted(row-item[image]) {
      display: inline-flex;
      align-items: center;
      gap: 12px;
    }

    ::slotted(row-item[right]) {
      text-align: right;
    }

    md-checkbox {
      flex-shrink: 0;
      align-self: center;
      margin: 0 14px 0 20px;
    }

    :host([disable-select]) ::slotted(row-item:first-of-type) {
      padding-left: 24px;
    }

    :host([narrow]) ::slotted(row-item[desktop]) {
      display: none;
    }

    [hidden] {
      display: none;
    }
  `}render(){return p`
      <style>
        :host([nudge-down]:not([dragged])) {
          transform: translate3d(0, ${this.nudgeHeight}px, 0);
        }

        :host([nudge-up]:not([dragged])) {
          transform: translate3d(0, -${this.nudgeHeight}px, 0);
        }
      </style>
      <main part="main">
        ${this.disableSelect?m:p`
              <md-checkbox
                .checked=${this.selected}
                @mousedown=${e=>e.stopPropagation()}
                @touchstart=${e=>e.stopPropagation()}
                @dblclick=${e=>e.stopPropagation()}
                @click=${e=>e.stopPropagation()}
                @change=${e=>this.#m(e.target.checked)}
              ></md-checkbox>
            `}

        <slot></slot>
        ${this.enableDrag?p` <md-icon drag>drag_indicator</md-icon>`:m}
      </main>
      <div item-footer part="item-footer-container">
        <slot name="item-footer"></slot>
      </div>
    `}};a([n({type:Object})],B.prototype,"item",null),a([n({reflect:!0,type:Boolean})],B.prototype,"selected",null),a([n({type:Boolean,attribute:"disable-select"})],B.prototype,"disableSelect",null),a([n({type:Boolean,reflect:!0})],B.prototype,"narrow",null),a([n({type:Boolean,reflect:!0,attribute:"enable-dragging"})],B.prototype,"enableDrag",null),a([n({type:Boolean,reflect:!0,attribute:"nudge-down"})],B.prototype,"nudgeDown",null),a([n({type:Boolean,reflect:!0,attribute:"nudge-up"})],B.prototype,"nudgeUp",null),a([n({type:Boolean,reflect:!0,attribute:"dragged"})],B.prototype,"dragged",null),a([n({type:Boolean,reflect:!0,attribute:"dragging"})],B.prototype,"dragging",null),a([d()],B.prototype,"nudgeHeight",null),a([d()],B.prototype,"hoverIndex",null),a([d()],B.prototype,"originIndex",null),B=a([y("titanium-data-table-item")],B);class I extends Event{static{this.eventType="titanium-data-table-item-drop"}constructor(e,t){super(I.eventType,{composed:!0,bubbles:!0}),this.hoverIndex=t,this.originIndex=e}}export{w as C,I as D};
