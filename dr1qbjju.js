import{i as t,k as i,c as e,x as n,E as a,_ as l,n as o,H as s,t as c,h as r,p as h}from"./BRwII10n.js";import{S as d}from"./9jYdvRPf.js";import"./PuY7V0q-.js";let p=class extends t{constructor(){super(...arguments),this.href="",this.download="",this.target="",this.#t="close",this.#i=!1,this.#e=!1,this.#n=!1,this.#a=!1}#l;get label(){return this.#l}set label(t){this.#l=t}#o;get selected(){return this.#o}set selected(t){this.#o=t}#s;get inputChip(){return this.#s}set inputChip(t){this.#s=t}#c;get nonInteractive(){return this.#c}set nonInteractive(t){this.#c=t}#t;get inputChipRemoveIcon(){return this.#t}set inputChipRemoveIcon(t){this.#t=t}#i;get disabled(){return this.#i}set disabled(t){this.#i=t}#e;get filled(){return this.#e}set filled(t){this.#e=t}#n;get hasLeadingItems(){return this.#n}set hasLeadingItems(t){this.#n=t}#a;get hasTrailingItems(){return this.#a}set hasTrailingItems(t){this.#a=t}static{this.styles=[i,e`
      :host {
        display: grid;
        height: 32px;
        width: auto;

        font-size: 14px;
        font-weight: 500;
        line-height: 20px;

        text-align: left;
      }

      a,
      button {
        display: grid;
        align-items: center;
        align-content: center;

        position: relative;

        appearance: button;
        cursor: pointer;

        font: inherit;
        margin: 0;
        border: none;

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
        text-decoration: none;

        padding: 0 12px;
      }

      :host([filled]) a,
      :host([filled]) button {
        border: none;
        background-color: var(--titanium-chip-filled-background-color, var(--md-sys-color-surface-container));
        color: var(--titanium-chip-filled-color, var(--md-sys-color-on-surface));
      }

      :host([selected]) button,
      :host([selected]) a,
      :host([has-leading-items]) button,
      :host([has-leading-items]) a {
        grid: 'icon label' / auto 1fr;
        padding-left: 8px;
      }

      :host([input-chip]) button,
      :host([input-chip]) a,
      :host([has-trailing-items]) button,
      :host([has-trailing-items]) a {
        grid: 'label trailing' / 1fr auto;
        padding-right: 4px;
      }

      :host([selected][input-chip]) button,
      :host([selected][input-chip]) a,
      :host([selected][has-leading-items]) button,
      :host([selected][has-leading-items]) a,
      :host([has-leading-items][input-chip]) button,
      :host([has-leading-items][input-chip]) a,
      :host([has-trailing-items][has-leading-items]) button,
      :host([has-trailing-items][has-leading-items]) a {
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
    `]}render(){return n` ${this.href?this.renderLink():this.renderButton()} `}renderContent(){const t=this.href?"link":"button";return n`
      <md-ripple part="focus-ring" for=${t} ?disabled=${this.disabled}></md-ripple>
      <md-focus-ring part="ripple" for=${t}></md-focus-ring>
      ${this.selected?n`<md-icon selected-check>check</md-icon>`:n`<slot name="icon" @slotchange=${()=>this.hasLeadingItems=this.leadingSlotElements.length>0}></slot>`}
      
      <main label ellipsis><slot name="label">${this.label}</slot></main>
      
        ${this.inputChip?n`<md-icon-button
                ?disabled=${this.disabled}
                @click=${t=>{t.stopPropagation(),this.dispatchEvent(new Event("remove"))}}
                ><md-icon>${this.inputChipRemoveIcon}</md-icon></md-icon-button
              >`:n`<slot name="trailing" @slotchange=${()=>this.hasTrailingItems=this.trailingSlotElements.length>0}></slot>`}
      </slot>
    `}renderButton(){return n`<button id="button" part="button" ?inert=${this.nonInteractive} ?disabled=${this.disabled}>${this.renderContent()}</button>`}renderLink(){return n`<a
      id="link"
      tabindex=${this.disabled?-1:a}
      href=${this.href}
      download=${this.download||a}
      target=${this.target||a}
      >${this.renderContent()}
    </a>`}};l([o({type:String})],p.prototype,"label",null),l([o({type:Boolean,reflect:!0})],p.prototype,"selected",null),l([o({type:String})],p.prototype,"href",void 0),l([o()],p.prototype,"download",void 0),l([o()],p.prototype,"target",void 0),l([o({type:Boolean,reflect:!0,attribute:"input-chip"})],p.prototype,"inputChip",null),l([o({type:Boolean,reflect:!0,attribute:"non-interactive"})],p.prototype,"nonInteractive",null),l([o({type:String})],p.prototype,"inputChipRemoveIcon",null),l([o({type:Boolean,reflect:!0})],p.prototype,"disabled",null),l([o({type:Boolean})],p.prototype,"filled",null),l([o({type:Boolean,reflect:!0,attribute:"has-leading-items"})],p.prototype,"hasLeadingItems",null),l([o({type:Boolean,reflect:!0,attribute:"has-trailing-items"})],p.prototype,"hasTrailingItems",null),l([s({slot:"icon"})],p.prototype,"leadingSlotElements",void 0),l([s({slot:"trailing"})],p.prototype,"trailingSlotElements",void 0),p=l([c("titanium-chip")],p);let m=class extends t{static{this.styles=[r,h,e`
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
      <titanium-chip filled label="Jon Stewart"> </titanium-chip>
      <titanium-chip label="Stephen Colbert" input-chip @click=${()=>alert("click!")}> </titanium-chip>

      <titanium-chip label="Jimmy Kimmel" @click=${()=>alert("click!")}>
        <md-icon slot="icon">task_alt</md-icon>
      </titanium-chip>

      <titanium-chip filled label="Jimmy Kimmel" @click=${()=>alert("click!")}>
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

      <titanium-chip selected filled label="Selected" @click=${t=>t.target.selected=!t.target.selected}>
        <profile-picture slot="icon" inert size="24"></profile-picture>
      </titanium-chip>

      <titanium-chip non-interactive label="Non-interactive" title="This is a non-interactive chip"> </titanium-chip>

      <titanium-chip disabled label="Disabled"> </titanium-chip>

      <titanium-chip disabled label="Disabled with remove button" input-chip @remove=${()=>alert("remove!")} @click=${()=>alert("click!")}>
        <md-icon slot="icon">task_alt</md-icon>
      </titanium-chip>

      <titanium-chip disabled filled label="Disabled with remove button" input-chip @remove=${()=>alert("remove!")} @click=${()=>alert("click!")}>
        <md-icon slot="icon">task_alt</md-icon>
      </titanium-chip>

      <titanium-chip href="https://google.com" target="_blank" download="google.xls" label="Href demo"> </titanium-chip>

      <titanium-chip filled label="Filled custom color" style="--titanium-chip-filled-background-color: bisque; --titanium-chip-filled-color: black">
      </titanium-chip>
    `}};m=l([c("titanium-chip-playground")],m);let u=class extends t{static{this.styles=[d,e``]}render(){return n`
      <story-header name="Titanium chip" className="TitaniumChip"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-chip/project.json"
        ><titanium-chip-playground></titanium-chip-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-chip"></api-docs>
    `}};u=l([c("titanium-chip-demo")],u);export{u as TitaniumChipDemo};
