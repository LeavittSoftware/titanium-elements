import{i as t,g as e,b as i,c as o,A as s,_ as a,n,u as r,t as l,U as c,p as d,r as h,h as p}from"./CyOMU7b-.js";import{h as m}from"./D528NSl_.js";let g=class extends t{constructor(){super(...arguments),this.#t="",this.#e=!1,this.href="",this.download="",this.target="",this.#i=!1,this.#o=!1,this.#s="close",this.#a=!1,this.#n=!1,this.#r=!1}#t;get label(){return this.#t}set label(t){this.#t=t}#e;get selected(){return this.#e}set selected(t){this.#e=t}#i;get inputChip(){return this.#i}set inputChip(t){this.#i=t}#o;get nonInteractive(){return this.#o}set nonInteractive(t){this.#o=t}#s;get inputChipRemoveIcon(){return this.#s}set inputChipRemoveIcon(t){this.#s=t}#a;get disabled(){return this.#a}set disabled(t){this.#a=t}#n;get hasLeadingItems(){return this.#n}set hasLeadingItems(t){this.#n=t}#r;get hasTrailingItems(){return this.#r}set hasTrailingItems(t){this.#r=t}static{this.styles=[e,i`
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

        border: none;
        border-radius: 8px;
        --md-focus-ring-shape: 8px;

        background-color: var(--titanium-chip-filled-background-color, var(--md-sys-color-surface-container));
        color: var(--titanium-chip-filled-color, var(--md-sys-color-on-surface));
        width: inherit;

        outline: none;

        font-size: inherit;
        font-weight: inherit;
        line-height: inherit;
        letter-spacing: inherit;
        text-decoration: none;

        padding: 0 12px;
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
    `]}render(){return o` ${this.href?this.renderLink():this.renderButton()} `}renderContent(){const t=this.href?"link":"button";return o`
      <md-ripple part="focus-ring" for=${t} ?disabled=${this.disabled}></md-ripple>
      <md-focus-ring part="ripple" for=${t}></md-focus-ring>
      ${this.selected?o`<md-icon selected-check>check</md-icon>`:o`<slot name="icon" @slotchange=${()=>this.hasLeadingItems=this.leadingSlotElements.length>0}></slot>`}
      
      <main label ellipsis><slot name="label">${this.label}</slot></main>
      
        ${this.inputChip?o`<md-icon-button
                ?disabled=${this.disabled}
                @click=${t=>{t.stopPropagation(),this.dispatchEvent(new Event("remove"))}}
                ><md-icon>${this.inputChipRemoveIcon}</md-icon></md-icon-button
              >`:o`<slot name="trailing" @slotchange=${()=>this.hasTrailingItems=this.trailingSlotElements.length>0}></slot>`}
      </slot>
    `}renderButton(){return o`<button id="button" part="button" ?inert=${this.nonInteractive} ?disabled=${this.disabled}>${this.renderContent()}</button>`}renderLink(){return o`<a
      id="link"
      tabindex=${this.disabled?-1:s}
      href=${this.href}
      download=${this.download||s}
      target=${this.target||s}
      >${this.renderContent()}
    </a>`}};a([n({type:String})],g.prototype,"label",null),a([n({type:Boolean,reflect:!0})],g.prototype,"selected",null),a([n({type:String})],g.prototype,"href",void 0),a([n()],g.prototype,"download",void 0),a([n()],g.prototype,"target",void 0),a([n({type:Boolean,reflect:!0,attribute:"input-chip"})],g.prototype,"inputChip",null),a([n({type:Boolean,reflect:!0,attribute:"non-interactive"})],g.prototype,"nonInteractive",null),a([n({type:String})],g.prototype,"inputChipRemoveIcon",null),a([n({type:Boolean,reflect:!0})],g.prototype,"disabled",null),a([n({type:Boolean,reflect:!0,attribute:"has-leading-items"})],g.prototype,"hasLeadingItems",null),a([n({type:Boolean,reflect:!0,attribute:"has-trailing-items"})],g.prototype,"hasTrailingItems",null),a([r({slot:"icon"})],g.prototype,"leadingSlotElements",void 0),a([r({slot:"trailing"})],g.prototype,"trailingSlotElements",void 0),g=a([l("titanium-chip")],g);class u{#l;#c;constructor(t){this.identity=null,this.#c=t=>{this.identity=t,this.#l.requestUpdate()},this.#l=t,t.addController(this)}hostConnected(){this.identity=c.identity,c.onIdentityUpdated(this.#c)}hostDisconnected(){c.removeOnIdentityUpdated(this.#c)}}let f=null;const b=async t=>{try{const e=await fetch(t,{method:"GET"}),i=await e.text();return i.length?JSON.parse(i):{}}catch(t){console.warn(t)}return null};let x=class extends t{#d="";get name(){return this.#d}set name(t){this.#d=t}#h="";get className(){return this.#h}set className(t){this.#h=t}#p="";get deprecatedReason(){return this.#p}set deprecatedReason(t){this.#p=t}#m=!1;get requiresAuth(){return this.#m}set requiresAuth(t){this.#m=t}#g=null;get customElementDeclaration(){return this.#g}set customElementDeclaration(t){this.#g=t}#u=null;get customElementsJSON(){return this.#u}set customElementsJSON(t){this.#u=t}#f=new u(this);async updated(t){t.has("className")&&this.className&&(this.customElementsJSON=await(async()=>(f||(f=await b("/custom-elements.json")),f))(),this.customElementDeclaration=this.customElementsJSON?.modules.flatMap(t=>t.declarations).find(t=>t.name===this.className)??null)}static{this.styles=[m,d,i`
      :host {
        display: block;
        padding-bottom: 24px;
      }

      [code] {
        font-family: Consolas, monospace;
        font-size: 16px;
      }

      info-container {
        display: flex;
        gap: 6px;
      }

      chip-container {
        display: flex;
        margin-top: 12px;
        gap: 6px;
      }

      @media (max-width: 1150px) {
        info-container {
          flex-direction: column;
        }
      }
    `]}render(){return o`
      <h1>${this.name}</h1>
      <info-container>
        <p code>${this.className}</p>
        ${this.customElementDeclaration?.tagName?o`<p code>${"<"}${this.customElementDeclaration?.tagName}${">"}</p>`:""}
      </info-container>
      <chip-container>
        ${this.requiresAuth&&!this.#f.identity?o`<md-filled-tonal-button @click=${()=>{c.authenticate()}}>Authentication is required for this demo</md-filled-tonal-button>`:s}
        ${this.deprecatedReason?o`<titanium-chip non-interactive label="Deprecated (${this.deprecatedReason})"></titanium-chip>`:s}
      </chip-container>
    `}};a([n({type:String})],x.prototype,"name",null),a([n({type:String})],x.prototype,"className",null),a([n({type:String})],x.prototype,"deprecatedReason",null),a([n({type:Boolean,attribute:"requires-auth"})],x.prototype,"requiresAuth",null),a([h()],x.prototype,"customElementDeclaration",null),a([h()],x.prototype,"customElementsJSON",null),x=a([l("story-header")],x);const y=[m,p,d,i`
    leavitt-app-width-limiter > md-divider {
      margin-bottom: 48px;
    }

    h1 {
      margin-bottom: 0;
    }

    h1:not(:has(+ p)) {
      margin-bottom: 12px;
    }

    p {
      margin-bottom: 24px;
      font-size: 13px;
    }

    h1 + p {
      margin-bottom: 12px;
    }

    api-docs {
      max-width: inherit;
      margin-bottom: 48px;
      margin-top: 48px;
      background-color: var(--md-sys-color-surface-container-low);
      border: none;
      --ave-primary-color: var(--md-sys-color-primary);
      --ave-accent-color: var(--md-sys-color-primary);
      --ave-secondary-color: var(--md-sys-color-primary);
      --ave-item-color: var(--md-sys-color-on-surface);
      --ave-monospace-font: 'Fira Code', monospace;
      --ave-tab-color: var(--md-sys-color-on-surface);
      --ave-tab-selected-color: var(--md-sys-color-primary);
      --ave-header-color: var(--md-sys-color-on-surface);
      --ave-header-background: var(--md-sys-color-surface-variant);
      --ave-tab-indicator-size: 6px;
      font-family: 'Roboto';
      color: inherit;
    }

    api-docs::part(select-label) {
      display: none;
    }

    api-docs::part(docs-value) {
      font-family: var(--titanium-styles-p-font-family, Roboto, Noto, sans-serif);
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      font-size: 14px;
      font-weight: 400;
      letter-spacing: 0.2px;
      line-height: 20px;
      color: var(--md-sys-color-on-surface);
      background: var(--md-sys-color-surface-container-high);
      border: none;
      border-radius: 12px;
      padding: 4px 12px;
      margin: 8px 0;
      min-height: 24px;
    }

    api-docs::part(docs-item) {
      padding: 24px 12px;
    }

    api-docs::part(docs-label) {
      font-family: var(--titanium-styles-h2-font-family, Metropolis, Roboto, Noto, sans-serif);
      -webkit-font-smoothing: antialiased;
      font-size: 13px;
      line-height: 17px;
      font-weight: 700;
      letter-spacing: 0.6px;
      text-transform: uppercase;

      hyphens: auto;
      word-break: break-word;
      word-wrap: break-word;
      color: var(--md-sys-color-on-background);
      margin: 0;
      padding: 0;
    }

    api-docs::part(docs-description) {
      padding: 12px;
    }

    api-docs::part(md-p) {
      font-family: var(--titanium-styles-p-font-family, Roboto, Noto, sans-serif);
      -moz-osx-font-smoothing: grayscale;
      -webkit-font-smoothing: antialiased;
      font-size: 14px;
      font-weight: 400;
      letter-spacing: 0.2px;
      line-height: 20px;
    }

    api-docs::part(header-title) {
      font-size: 15px;
    }

    deprecation-notice {
      background: var(--md-sys-color-surface-container);
      padding: 12px;
      border-radius: 12px;
      margin-bottom: 24px;
      display: flex;
      place-items: center;

      p {
        opacity: 0.8;
        font-size: 13px;
        margin: 0;
      }

      md-icon {
        --md-icon-size: 16px;
        margin-right: 6px;
        color: var(--app-accent-color-orange);
      }

      kbd {
        background: var(--md-sys-color-surface-container-highest);
        padding: 2px 4px;
        border-radius: 28px;
        font-size: 11px;
        font-weight: 600;
        color: var(--md-sys-color-on-surface);
      }
    }

    /* Common demo styles */
    :host {
      display: grid;
    }

    main {
      display: grid;
      align-content: start;
    }

    leavitt-app-width-limiter {
      div {
        background: var(--md-sys-color-surface-container-low);
        border-radius: 24px;
        padding: 24px;

        section[buttons] {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 12px;
        }

        item-row {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
        }

        &:not(:first-of-type) {
          margin-top: 24px;
        }
      }
    }
  `];export{u as A,y as S};
