import{r as t,l as i,i as e,x as n,_ as a,n as o,a0 as s,t as l,h as r,p as c}from"./BRzihpuF.js";import{S as h}from"./DxTkCELB.js";import"./DpsMy9xV.js";let p=class extends t{#t;get label(){return this.#t}set label(t){this.#t=t}#i;get selected(){return this.#i}set selected(t){this.#i=t}#e;get inputChip(){return this.#e}set inputChip(t){this.#e=t}#n;get nonInteractive(){return this.#n}set nonInteractive(t){this.#n=t}#a="close";get inputChipRemoveIcon(){return this.#a}set inputChipRemoveIcon(t){this.#a=t}#o=!1;get disabled(){return this.#o}set disabled(t){this.#o=t}#s=!1;get hasLeadingItems(){return this.#s}set hasLeadingItems(t){this.#s=t}#l=!1;get hasTrailingItems(){return this.#l}set hasTrailingItems(t){this.#l=t}static{this.styles=[i,e`
      :host {
        display: grid;
        height: 32px;
        width: auto;

        font-size: 14px;
        font-weight: 500;
        line-height: 20px;

        text-align: left;
      }

      button {
        display: grid;
        align-items: center;
        align-content: center;

        position: relative;

        -webkit-appearance: button;
        cursor: pointer;

        font: inherit;
        margin: 0;
        border: 0;

        box-sizing: border-box;
        height: inherit;
        text-align: inherit;

        border: 1px solid var(--titanium-chip-outline-color, var(--md-sys-color-outline));
        border-radius: 8px;
        --md-focus-ring-shape: 8px;

        color: inherit;
        background: inherit;
        width: inherit;

        outline: none;

        font-size: inherit;
        font-weight: inherit;
        line-height: inherit;
        letter-spacing: inherit;

        padding: 0 12px;
      }

      :host([selected]) button,
      :host([has-leading-items]) button {
        grid: 'icon label' / auto 1fr;
        padding-left: 8px;
      }

      :host([input-chip]) button,
      :host([has-trailing-items]) butt on {
        grid: 'label trailing' / 1fr auto;
        padding-right: 4px;
      }

      :host([selected][input-chip]) button,
      :host([selected][has-leading-items]) button,
      :host([has-leading-items][input-chip]) button,
      :host([has-trailing-items][has-leading-items]) button {
        grid: 'icon label trailing' / auto 1fr auto;
      }

      main[label] {
        font-size: inherit;
        font-weight: inherit;
        line-height: inherit;
        letter-spacing: inherit;
        text-align: inherit;

        padding: 6px 0;
      }

      md-icon[selected-check] {
        padding-right: var(--titanium-chip-selected-with-leading-icon-leading-space, 8px);
        --md-icon-size: 18px;
      }

      [name='icon']::slotted(md-icon) {
        color: var(--md-sys-color-primary);
        --md-icon-size: 18px;
        padding-right: var(--titanium-chip-with-leading-icon-leading-space, 8px);
      }

      [name='icon']::slotted(profile-picture) {
        padding-right: var(--titanium-chip-with-leading-icon-leading-space, 8px);
      }

      md-icon-button {
        --md-icon-button-icon-size: 18px;
        --md-icon-button-state-layer-height: 24px;
        --md-icon-button-state-layer-width: 24px;
        margin-left: 4px;
      }

      :host([selected]) button {
        background: var(--titanium-chip-selected-container-color, var(--md-sys-color-secondary-container));
        color: var(--titanium-chip-selected-text-color, var(--md-sys-color-on-secondary-container));
        border-color: var(--titanium-chip-selected-outline-color, var(--md-sys-color-secondary-container));
      }
    `]}render(){return n`<button part="button" ?inert=${this.nonInteractive}>
      <md-ripple ?disabled=${this.disabled}></md-ripple>
      <md-focus-ring ></md-focus-ring>
      ${this.selected?n`<md-icon selected-check>check</md-icon>`:n`<slot name="icon" @slotchange=${()=>this.hasLeadingItems=this.leadingSlotElements.length>0}></slot>`}
      
      <main label ellipsis><slot name="label">${this.label}</slot></main>
      
        ${this.inputChip?n`<md-icon-button
                @click=${t=>{t.stopPropagation(),this.dispatchEvent(new Event("remove"))}}
                ><md-icon>${this.inputChipRemoveIcon}</md-icon></md-icon-button
              >`:n`<slot name="trailing" @slotchange=${()=>this.hasTrailingItems=this.trailingSlotElements.length>0}></slot>`}
      </slot>
    </button>`}};a([o({type:String})],p.prototype,"label",null),a([o({type:Boolean,reflect:!0})],p.prototype,"selected",null),a([o({type:Boolean,reflect:!0,attribute:"input-chip"})],p.prototype,"inputChip",null),a([o({type:Boolean,reflect:!0,attribute:"non-interactive"})],p.prototype,"nonInteractive",null),a([o({type:String})],p.prototype,"inputChipRemoveIcon",null),a([o({type:Boolean,reflect:!0})],p.prototype,"disabled",null),a([o({type:Boolean,reflect:!0,attribute:"has-leading-items"})],p.prototype,"hasLeadingItems",null),a([o({type:Boolean,reflect:!0,attribute:"has-trailing-items"})],p.prototype,"hasTrailingItems",null),a([s({slot:"icon"})],p.prototype,"leadingSlotElements",void 0),a([s({slot:"trailing"})],p.prototype,"trailingSlotElements",void 0),p=a([l("titanium-chip")],p);let d=class extends t{static{this.styles=[r,c,e`
      :host {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        gap: 8px;
        margin: 24px 12px;
      }

      titanium-chip[short] {
        width: 140px;
      }

      img[chip-image] {
        width: 110px;
      }
    `]}render(){return n`
      <titanium-chip label="Jon Stewart"> </titanium-chip>

      <titanium-chip label="Stephen Colbert" input-chip @click=${()=>alert("click!")}> </titanium-chip>

      <titanium-chip label="Jimmy Kimmel" @click=${()=>alert("click!")}>
        <md-icon slot="icon">task_alt</md-icon>
      </titanium-chip>

      <titanium-chip label="All late shows" input-chip @remove=${()=>alert("remove!")} @click=${()=>alert("click!")}>
        <md-icon slot="icon">task_alt</md-icon>
      </titanium-chip>

      <titanium-chip short label="I'm a little long" input-chip @remove=${()=>alert("remove!")} @click=${()=>alert("click!")}>
        <md-icon slot="icon">task_alt</md-icon>
      </titanium-chip>

      <titanium-chip label="Informational" inert> </titanium-chip>

      <titanium-chip selected label="Selected" @click=${t=>t.target.selected=!t.target.selected}>
        <md-icon slot="icon">money</md-icon>
      </titanium-chip>

      <titanium-chip selected label="Selected" @click=${t=>t.target.selected=!t.target.selected}>
        <profile-picture slot="icon" inert size="24"></profile-picture>
      </titanium-chip>

      <titanium-chip non-interactive label="Non-interactive" title="This is a non-interactive chip"> </titanium-chip>
    `}};d=a([l("titanium-chip-playground")],d);let m=class extends t{static{this.styles=[h,e``]}render(){return n`
      <story-header name="Titanium chip" className="TitaniumChip"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-chip/project.json"
        ><titanium-chip-playground></titanium-chip-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-chip"></api-docs>
    `}};m=a([l("titanium-chip-demo")],m);export{m as TitaniumChipDemo};
