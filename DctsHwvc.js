import{i as t,j as i,b as e,c as n,f as s,_ as o,n as a,F as r,t as l}from"./BkdWKSMI.js";let h=class extends t{constructor(){super(...arguments),this.href="",this.download="",this.target="",this.#t="close",this.#i=!1,this.#e=!1,this.#n=!1,this.#s=!1}#o;get label(){return this.#o}set label(t){this.#o=t}#a;get selected(){return this.#a}set selected(t){this.#a=t}#r;get inputChip(){return this.#r}set inputChip(t){this.#r=t}#l;get nonInteractive(){return this.#l}set nonInteractive(t){this.#l=t}#t;get inputChipRemoveIcon(){return this.#t}set inputChipRemoveIcon(t){this.#t=t}#i;get disabled(){return this.#i}set disabled(t){this.#i=t}#e;get filled(){return this.#e}set filled(t){this.#e=t}#n;get hasLeadingItems(){return this.#n}set hasLeadingItems(t){this.#n=t}#s;get hasTrailingItems(){return this.#s}set hasTrailingItems(t){this.#s=t}static{this.styles=[i,e`
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
      tabindex=${this.disabled?-1:s}
      href=${this.href}
      download=${this.download||s}
      target=${this.target||s}
      >${this.renderContent()}
    </a>`}};o([a({type:String})],h.prototype,"label",null),o([a({type:Boolean,reflect:!0})],h.prototype,"selected",null),o([a({type:String})],h.prototype,"href",void 0),o([a()],h.prototype,"download",void 0),o([a()],h.prototype,"target",void 0),o([a({type:Boolean,reflect:!0,attribute:"input-chip"})],h.prototype,"inputChip",null),o([a({type:Boolean,reflect:!0,attribute:"non-interactive"})],h.prototype,"nonInteractive",null),o([a({type:String})],h.prototype,"inputChipRemoveIcon",null),o([a({type:Boolean,reflect:!0})],h.prototype,"disabled",null),o([a({type:Boolean})],h.prototype,"filled",null),o([a({type:Boolean,reflect:!0,attribute:"has-leading-items"})],h.prototype,"hasLeadingItems",null),o([a({type:Boolean,reflect:!0,attribute:"has-trailing-items"})],h.prototype,"hasTrailingItems",null),o([r({slot:"icon"})],h.prototype,"leadingSlotElements",void 0),o([r({slot:"trailing"})],h.prototype,"trailingSlotElements",void 0),h=o([l("titanium-chip")],h);
