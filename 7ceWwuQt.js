import{i as t,b as e,f as s,c as o,_ as i,n,r,t as a}from"./BkdWKSMI.js";import"./sfbuyCKw.js";let l=class extends t{constructor(){super(...arguments),this.#t=!1,this.#e=!1,this.#s=!1,this.#o=null,this.#i=null,this.mouseEvent=t=>this.#n(t,"mouse"),this.touchEvent=t=>{this.#n(t,"touch")}}#r;get item(){return this.#r}set item(t){this.#r=t}#t;get selected(){return this.#t}set selected(t){this.#t=t}#a;get disableSelect(){return this.#a}set disableSelect(t){this.#a=t}#e;get narrow(){return this.#e}set narrow(t){this.#e=t}#s;get enableDrag(){return this.#s}set enableDrag(t){this.#s=t}#l;get nudgeDown(){return this.#l}set nudgeDown(t){this.#l=t}#d;get nudgeUp(){return this.#d}set nudgeUp(t){this.#d=t}#h;get dragged(){return this.#h}set dragged(t){this.#h=t}#g;get dragging(){return this.#g}set dragging(t){this.#g=t}#c;get nudgeHeight(){return this.#c}set nudgeHeight(t){this.#c=t}#o;get hoverIndex(){return this.#o}set hoverIndex(t){this.#o=t}#i;get originIndex(){return this.#i}set originIndex(t){this.#i=t}async updated(t){t.has("enableDrag")&&(this.enableDrag?(this.addEventListener("mousedown",this.mouseEvent),this.addEventListener("touchstart",this.touchEvent)):(this.removeEventListener("mousedown",this.mouseEvent),this.removeEventListener("touchstart",this.touchEvent)))}firstUpdated(){const t=this.shadowRoot?.querySelector("slot")?.assignedElements();t?.forEach(t=>{const e=t,s=e.getAttribute("width");s&&(e.style.width=s)}),this.addEventListener("dblclick",()=>{this.dispatchEvent(new Event("transitionend")),this.dispatchEvent(new CustomEvent("titanium-data-table-item-navigate",{detail:this.item}))})}updateDragProps(t,e,s,o){const i=this.items.indexOf(this);this.nudgeDown=null!==e&&null!==s&&i<e&&i>=s,this.nudgeUp=null!==e&&null!==s&&i>e&&i<=s,this.dragged=e===i,this.dragging=t,this.nudgeHeight=o}toggleSelected(){this.selected?this.deselect():this.select()}select(){this.selected||this.#u(!0)}deselect(){this.selected&&this.#u(!1)}#u(t){this.selected=t,this.dispatchEvent(new Event("titanium-data-table-item-selected-changed",{bubbles:!0,composed:!0}))}get dataTable(){return this.parentElement}get items(){return this.dataTable.itemsSlot?.assignedElements()??[]}get itemsContainer(){return this.dataTable.itemsContainer}#m(t,e){for(let s=0;s<t.length;s++){if(e<=t[s])return s}return t.length-1}#p(t,e){const s=Math.max(e??0,t??0)+1;let o=Math.min(e??0,t??0)-1;return o=o<0?0:o,[s,o]}#b(t,e,s,o){const i=this.#p(t,e);for(let t=i[1];t<=i[0];t++){const e=this.items?.[t];e?.updateDragProps(s,this.originIndex,this.hoverIndex,o)}}#x(t,e){const s=this.#p(t,e);for(let t=s[1];t<=s[0];t++){const e=this.items?.[t];e?.updateDragProps(!1,null,null,0)}}#n(t,e){if("mouse"===e&&1!==t.which)return;t.preventDefault(),this.dragging=!0,this.originIndex=this.items.indexOf(this);const s="touch"===e?"touchmove":"mousemove",o="touch"===e?"touchend":"mouseup",i=this.itemsContainer?.getBoundingClientRect().top+window.scrollY,n=t.pageY??t.touches[0].pageY,r=this.getBoundingClientRect().height-1;let a=0;const l=this.items.map(t=>(a+=t.getBoundingClientRect().height-1,a)),h=t=>{const e=t.pageY??t.touches[0].pageY,s=t.clientY??t.touches[0].clientY,o=e-i,a=e-n;this.style.transform=`translateY(${a}px)`,this.hoverIndex=this.#m(l,o),this.#b(this.originIndex,this.hoverIndex,this.dragging,r),s<5?scrollBy({top:-window.innerHeight/5,behavior:"smooth"}):s<25&&scrollBy({top:-window.innerHeight/10,behavior:"smooth"}),window.innerHeight-s<5?scrollBy({top:window.innerHeight/5,behavior:"smooth"}):window.innerHeight-s<25&&scrollBy({top:window.innerHeight/10,behavior:"smooth"})},g=()=>{document.removeEventListener(s,h),this.removeEventListener(o,c),this.dragging=!1;const t=()=>{this.#x(this.originIndex,this.hoverIndex),this.originIndex=null,this.hoverIndex=null,this.style.transform="",this.style.transition="",this.removeEventListener("transitionend",t)};this.addEventListener("transitionend",t),this.style.transition="transform 0.1s ease-out",this.style.transform="translate3d(0, 0, 0)",document.removeEventListener("mouseout",g)},c=()=>{this.dragging=!1,this.items.forEach(t=>t.dragging=!1),document.removeEventListener(s,h),document.removeEventListener(o,c),"mouse"===e&&document.removeEventListener("mouseout",g);const t=()=>{null!==this.originIndex&&null!==this.hoverIndex&&this.dispatchEvent(new d(this.originIndex,this.hoverIndex)),this.#x(this.originIndex,this.hoverIndex),this.originIndex=null,this.hoverIndex=null,this.style.transform="",this.style.transition="",this.removeEventListener("transitionend",t)};this.addEventListener("transitionend",t);const i=this.items.filter(t=>t.nudgeUp).map(t=>t.getBoundingClientRect().height>0?t.getBoundingClientRect().height-1:0).reduce((t,e)=>t+e,0),n=this.items.filter(t=>t.nudgeDown).map(t=>-t.getBoundingClientRect().height-1).reduce((t,e)=>t+e,0),r=0!==i?i:n;this.style.transition="transform 0.1s ease-out",this.style.transform=`translate3d(0, ${r}px, 0)`};"mouse"===e&&window.addEventListener("mouseout",g),document.addEventListener(o,c),document.addEventListener(s,h),h(t)}static{this.styles=e`
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
  `}render(){return o`
      <style>
        :host([nudge-down]:not([dragged])) {
          transform: translate3d(0, ${this.nudgeHeight}px, 0);
        }

        :host([nudge-up]:not([dragged])) {
          transform: translate3d(0, -${this.nudgeHeight}px, 0);
        }
      </style>
      <main part="main">
        ${this.disableSelect?s:o`
              <md-checkbox
                .checked=${this.selected}
                @mousedown=${t=>t.stopPropagation()}
                @touchstart=${t=>t.stopPropagation()}
                @dblclick=${t=>t.stopPropagation()}
                @click=${t=>t.stopPropagation()}
                @change=${t=>this.#u(t.target.checked)}
              ></md-checkbox>
            `}

        <slot></slot>
        ${this.enableDrag?o` <md-icon drag>drag_indicator</md-icon>`:s}
      </main>
      <div item-footer part="item-footer-container">
        <slot name="item-footer"></slot>
      </div>
    `}};i([n({type:Object})],l.prototype,"item",null),i([n({reflect:!0,type:Boolean})],l.prototype,"selected",null),i([n({type:Boolean,attribute:"disable-select"})],l.prototype,"disableSelect",null),i([n({type:Boolean,reflect:!0})],l.prototype,"narrow",null),i([n({type:Boolean,reflect:!0,attribute:"enable-dragging"})],l.prototype,"enableDrag",null),i([n({type:Boolean,reflect:!0,attribute:"nudge-down"})],l.prototype,"nudgeDown",null),i([n({type:Boolean,reflect:!0,attribute:"nudge-up"})],l.prototype,"nudgeUp",null),i([n({type:Boolean,reflect:!0,attribute:"dragged"})],l.prototype,"dragged",null),i([n({type:Boolean,reflect:!0,attribute:"dragging"})],l.prototype,"dragging",null),i([r()],l.prototype,"nudgeHeight",null),i([r()],l.prototype,"hoverIndex",null),i([r()],l.prototype,"originIndex",null),l=i([a("titanium-data-table-item")],l);class d extends Event{static{this.eventType="titanium-data-table-item-drop"}constructor(t,e){super(d.eventType,{composed:!0,bubbles:!0}),this.hoverIndex=e,this.originIndex=t}}export{d as D};
