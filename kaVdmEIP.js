import{ap as e,c as t,_ as a,n as o,aq as r,E as i,x as s,ar as n,t as l,i as c,h as d,p as h,r as p,e as v,X as m,a4 as b,as as u,at as g}from"./C3FxRHaz.js";function y(t){return(a,o)=>{const{slot:r}=t??{},i="slot"+(r?`[name=${r}]`:":not([name])");return e(a,o,{get(){const e=this.renderRoot?.querySelector(i);return e?.assignedNodes(t)??[]}})}}const f=t`
  titanium-card {
    margin-bottom: 36px;
  }

  h1 {
    margin-bottom: 0;
  }

  p {
    margin-bottom: 24px;
    font-size: 13px;
  }

  api-docs {
    max-width: inherit;
    margin-bottom: 48px;
    margin-top: 48px;
    background-color: var(--md-sys-color-background);
    border: 1px solid var(--md-sys-color-outline);
    --ave-primary-color: var(--md-sys-color-primary);
    --ave-header-color: #f5f5f5;
    --ave-accent-color: var(--md-sys-color-primary);
    --ave-secondary-color: var(--md-sys-color-primary);
    --ave-item-color: var(--md-sys-color-on-background);
    --ave-monospace-font: 'Fira Code', monospace;
    --ave-tab-color: var(--md-sys-color-on-background);
    --ave-tab-selected-color: var(--md-sys-color-primary);
    --ave-header-color: var(--md-sys-color-on-background);
    --ave-header-background: var(--md-sys-color-surface-variant);
    font-family: 'Roboto';
    color: inherit;
  }

  api-docs::part(select-label) {
    display: none;
  }

  api-docs::part(docs-value) {
    color: var(--md-sys-color-on-background);
    font-size: 13px;
    background: var(--md-sys-color-background);
    border: 1px solid var(--md-sys-color-outline);
    border-radius: 8px;
    padding: 2px 8px;
    margin: 12px 0;
    min-height: 24px;
  }

  api-docs::part(docs-item) {
    padding: 24px 12px;
  }

  api-docs::part(docs-label) {
    letter-spacing: 0.07272727em;
    font-size: 11px;
    font-weight: 500;
    line-height: 13px;
    text-transform: uppercase;
    hyphens: auto;
    word-break: break-word;
    word-wrap: break-word;
    color: #5f6368;
    color: var(--md-sys-color-on-background);
    margin: 0;
    padding: 0;
  }

  api-docs::part(docs-description) {
    padding: 12px;
  }

  api-docs::part(md-p) {
    -webkit-font-smoothing: antialiased;
    font-size: 13px;
    font-weight: 400;
    color: var(--md-sys-color-on-background);
    letter-spacing: 0.2px;
    line-height: 20px;
    margin: 0px;
    padding: 12px 0;
  }

  api-docs::part(header-title) {
    font-size: 16px;
  }
`,x=t`.elevated{--md-elevation-level: var(--_elevated-container-elevation);--md-elevation-shadow-color: var(--_elevated-container-shadow-color)}.elevated::before{background:var(--_elevated-container-color)}.elevated:hover{--md-elevation-level: var(--_elevated-hover-container-elevation)}.elevated:focus-within{--md-elevation-level: var(--_elevated-focus-container-elevation)}.elevated:active{--md-elevation-level: var(--_elevated-pressed-container-elevation)}.elevated.disabled{--md-elevation-level: var(--_elevated-disabled-container-elevation)}.elevated.disabled::before{background:var(--_elevated-disabled-container-color);opacity:var(--_elevated-disabled-container-opacity)}@media(forced-colors: active){.elevated md-elevation{border:1px solid CanvasText}.elevated.disabled md-elevation{border-color:GrayText}}
`;class _ extends r{constructor(){super(...arguments),this.elevated=!1,this.href="",this.download="",this.target=""}get primaryId(){return this.href?"link":"button"}get rippleDisabled(){return!this.href&&(this.disabled||this.softDisabled)}getContainerClasses(){return{...super.getContainerClasses(),disabled:!this.href&&(this.disabled||this.softDisabled),elevated:this.elevated,link:!!this.href}}renderPrimaryAction(e){const{ariaLabel:t}=this;return this.href?s`
        <a
          class="primary action"
          id="link"
          aria-label=${t||i}
          href=${this.href}
          download=${this.download||i}
          target=${this.target||i}
          >${e}</a
        >
      `:s`
      <button
        class="primary action"
        id="button"
        aria-label=${t||i}
        aria-disabled=${this.softDisabled||i}
        ?disabled=${this.disabled&&!this.alwaysFocusable}
        type="button"
        >${e}</button
      >
    `}renderOutline(){return this.elevated?s`<md-elevation part="elevation"></md-elevation>`:super.renderOutline()}}a([o({type:Boolean})],_.prototype,"elevated",void 0),a([o()],_.prototype,"href",void 0),a([o()],_.prototype,"download",void 0),a([o()],_.prototype,"target",void 0);class w extends _{}const k=t`:host{--_container-height: var(--md-suggestion-chip-container-height, 32px);--_disabled-label-text-color: var(--md-suggestion-chip-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-suggestion-chip-disabled-label-text-opacity, 0.38);--_elevated-container-color: var(--md-suggestion-chip-elevated-container-color, var(--md-sys-color-surface-container-low, #f7f2fa));--_elevated-container-elevation: var(--md-suggestion-chip-elevated-container-elevation, 1);--_elevated-container-shadow-color: var(--md-suggestion-chip-elevated-container-shadow-color, var(--md-sys-color-shadow, #000));--_elevated-disabled-container-color: var(--md-suggestion-chip-elevated-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_elevated-disabled-container-elevation: var(--md-suggestion-chip-elevated-disabled-container-elevation, 0);--_elevated-disabled-container-opacity: var(--md-suggestion-chip-elevated-disabled-container-opacity, 0.12);--_elevated-focus-container-elevation: var(--md-suggestion-chip-elevated-focus-container-elevation, 1);--_elevated-hover-container-elevation: var(--md-suggestion-chip-elevated-hover-container-elevation, 2);--_elevated-pressed-container-elevation: var(--md-suggestion-chip-elevated-pressed-container-elevation, 1);--_focus-label-text-color: var(--md-suggestion-chip-focus-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-label-text-color: var(--md-suggestion-chip-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-suggestion-chip-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-opacity: var(--md-suggestion-chip-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-suggestion-chip-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-suggestion-chip-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-suggestion-chip-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-suggestion-chip-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-suggestion-chip-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-label-text-color: var(--md-suggestion-chip-pressed-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-color: var(--md-suggestion-chip-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-opacity: var(--md-suggestion-chip-pressed-state-layer-opacity, 0.12);--_disabled-outline-color: var(--md-suggestion-chip-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-suggestion-chip-disabled-outline-opacity, 0.12);--_focus-outline-color: var(--md-suggestion-chip-focus-outline-color, var(--md-sys-color-on-surface-variant, #49454f));--_outline-color: var(--md-suggestion-chip-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-suggestion-chip-outline-width, 1px);--_disabled-leading-icon-color: var(--md-suggestion-chip-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-suggestion-chip-disabled-leading-icon-opacity, 0.38);--_focus-leading-icon-color: var(--md-suggestion-chip-focus-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-leading-icon-color: var(--md-suggestion-chip-hover-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-icon-color: var(--md-suggestion-chip-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_pressed-leading-icon-color: var(--md-suggestion-chip-pressed-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-suggestion-chip-icon-size, 18px);--_container-shape-start-start: var(--md-suggestion-chip-container-shape-start-start, var(--md-suggestion-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-start-end: var(--md-suggestion-chip-container-shape-start-end, var(--md-suggestion-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-end-end: var(--md-suggestion-chip-container-shape-end-end, var(--md-suggestion-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-end-start: var(--md-suggestion-chip-container-shape-end-start, var(--md-suggestion-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_leading-space: var(--md-suggestion-chip-leading-space, 16px);--_trailing-space: var(--md-suggestion-chip-trailing-space, 16px);--_icon-label-space: var(--md-suggestion-chip-icon-label-space, 8px);--_with-leading-icon-leading-space: var(--md-suggestion-chip-with-leading-icon-leading-space, 8px)}@media(forced-colors: active){.link .outline{border-color:ActiveText}}
`;let $=class extends w{};$.styles=[n,x,k],$=a([l("md-suggestion-chip")],$);let z=null;const S=async e=>{try{const t=await fetch(e,{method:"GET"}),a=await t.text();return a.length?JSON.parse(a):{}}catch(e){console.warn(e)}return null};let T=class extends c{#e;get name(){return this.#e}set name(e){this.#e=e}#t;get className(){return this.#t}set className(e){this.#t=e}#a;get deprecatedReason(){return this.#a}set deprecatedReason(e){this.#a=e}#o=null;get customElementDeclaration(){return this.#o}set customElementDeclaration(e){this.#o=e}#r=null;get customElementsJSON(){return this.#r}set customElementsJSON(e){this.#r=e}async updated(e){e.has("className")&&this.className&&(this.customElementsJSON=await(async()=>(z||(z=await S("/custom-elements.json")),z))(),this.customElementDeclaration=this.customElementsJSON?.modules.flatMap(e=>e.declarations).find(e=>e.name===this.className)??null)}static{this.styles=[d,h,t`
      :host {
        display: block;
        padding-bottom: 48px;
      }

      [code] {
        font-family: Consolas, monospace;
        font-size: 16px;
      }

      p[desc] {
        margin-top: 12px;
      }

      h1 {
        font-size: 36px;
        line-height: 44px;
        font-weight: 400;
        padding: 0;
        margin: 0;
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
    `]}render(){return s`
      <h1>${this.name}</h1>
      <info-container>
        <p code>${this.className}</p>
        ${this.customElementDeclaration?.tagName?s`<p code>${"<"}${this.customElementDeclaration?.tagName}${">"}</p>`:""}
      </info-container>
      <p desc>${this.customElementDeclaration?.description}</p>
      <chip-container>
        ${this.deprecatedReason?s`<md-suggestion-chip disabled label="Deprecated (${this.deprecatedReason})"></md-suggestion-chip>`:i}
      </chip-container>
    `}};a([o({type:String})],T.prototype,"name",null),a([o({type:String})],T.prototype,"className",null),a([o({type:String})],T.prototype,"deprecatedReason",null),a([p()],T.prototype,"customElementDeclaration",null),a([p()],T.prototype,"customElementsJSON",null),T=a([l("story-header")],T);const C=Symbol("isFocusable"),N=Symbol("privateIsFocusable"),E=Symbol("externalTabIndex"),I=Symbol("isUpdatingTabIndex"),j=Symbol("updateTabIndex");const B=Symbol("animateIndicator"),F=function(e){var t,r,i;class s extends e{constructor(){super(...arguments),this[t]=!0,this[r]=null,this[i]=!1}get[C](){return this[N]}set[C](e){this[C]!==e&&(this[N]=e,this[j]())}connectedCallback(){super.connectedCallback(),this[j]()}attributeChangedCallback(e,t,a){if("tabindex"===e){if(this.requestUpdate("tabIndex",Number(t??-1)),!this[I])return this.hasAttribute("tabindex")?void(this[E]=this.tabIndex):(this[E]=null,void this[j]())}else super.attributeChangedCallback(e,t,a)}[(t=N,r=E,i=I,j)](){const e=this[C]?0:-1,t=this[E]??e;this[I]=!0,this.tabIndex=t,this[I]=!1}}return a([o({noAccessor:!0})],s.prototype,"tabIndex",void 0),s}(c);class D extends F{get selected(){return this.active}set selected(e){this.active=e}constructor(){super(),this.isTab=!0,this.active=!1,this.hasIcon=!1,this.iconOnly=!1,this.fullWidthIndicator=!1,this.internals=this.attachInternals(),this.internals.role="tab",this.addEventListener("keydown",this.handleKeydown.bind(this))}render(){const e=s`<div class="indicator"></div>`;return s`<div
      class="button"
      role="presentation"
      @click=${this.handleContentClick}>
      <md-focus-ring part="focus-ring" inward .control=${this}></md-focus-ring>
      <md-elevation part="elevation"></md-elevation>
      <md-ripple .control=${this}></md-ripple>
      <div
        class="content ${b(this.getContentClasses())}"
        role="presentation">
        <slot name="icon" @slotchange=${this.handleIconSlotChange}></slot>
        <slot @slotchange=${this.handleSlotChange}></slot>
        ${this.fullWidthIndicator?i:e}
      </div>
      ${this.fullWidthIndicator?e:i}
    </div>`}getContentClasses(){return{"has-icon":this.hasIcon,"has-label":!this.iconOnly}}updated(){this.internals.ariaSelected=String(this.active)}async handleKeydown(e){await 0,e.defaultPrevented||"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),this.click())}handleContentClick(e){e.stopPropagation(),this.click()}[B](e){if(!this.indicator)return;this.indicator.getAnimations().forEach(e=>{e.cancel()});const t=this.getKeyframes(e);null!==t&&this.indicator.animate(t,{duration:250,easing:u.EMPHASIZED})}getKeyframes(e){const t=window.matchMedia("(prefers-reduced-motion: reduce)").matches;if(!this.active)return t?[{opacity:1},{transform:"none"}]:null;const a={},o=e.indicator?.getBoundingClientRect()??{},r=o.left,i=o.width,s=this.indicator.getBoundingClientRect(),n=s.left,l=i/s.width;return t||void 0===r||void 0===n||isNaN(l)?a.opacity=0:a.transform=`translateX(${(r-n).toFixed(4)}px) scaleX(${l.toFixed(4)})`,[a,{transform:"none"}]}handleSlotChange(){this.iconOnly=!1;for(const e of this.assignedDefaultNodes){const t=e.nodeType===Node.TEXT_NODE&&!!e.wholeText.match(/\S/);if(e.nodeType===Node.ELEMENT_NODE||t)return}this.iconOnly=!0}handleIconSlotChange(){this.hasIcon=this.assignedIcons.length>0}}a([o({type:Boolean,reflect:!0,attribute:"md-tab"})],D.prototype,"isTab",void 0),a([o({type:Boolean,reflect:!0})],D.prototype,"active",void 0),a([o({type:Boolean})],D.prototype,"selected",null),a([o({type:Boolean,attribute:"has-icon"})],D.prototype,"hasIcon",void 0),a([o({type:Boolean,attribute:"icon-only"})],D.prototype,"iconOnly",void 0),a([v(".indicator")],D.prototype,"indicator",void 0),a([p()],D.prototype,"fullWidthIndicator",void 0),a([y({flatten:!0})],D.prototype,"assignedDefaultNodes",void 0),a([m({slot:"icon",flatten:!0})],D.prototype,"assignedIcons",void 0);class R extends D{constructor(){super(...arguments),this.inlineIcon=!1}getContentClasses(){return{...super.getContentClasses(),stacked:!this.inlineIcon}}}a([o({type:Boolean,attribute:"inline-icon"})],R.prototype,"inlineIcon",void 0);const A=t`:host{--_active-indicator-color: var(--md-primary-tab-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-height: var(--md-primary-tab-active-indicator-height, 3px);--_active-indicator-shape: var(--md-primary-tab-active-indicator-shape, 3px 3px 0px 0px);--_active-hover-state-layer-color: var(--md-primary-tab-active-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_active-hover-state-layer-opacity: var(--md-primary-tab-active-hover-state-layer-opacity, 0.08);--_active-pressed-state-layer-color: var(--md-primary-tab-active-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_active-pressed-state-layer-opacity: var(--md-primary-tab-active-pressed-state-layer-opacity, 0.12);--_container-color: var(--md-primary-tab-container-color, var(--md-sys-color-surface, #fef7ff));--_container-elevation: var(--md-primary-tab-container-elevation, 0);--_container-height: var(--md-primary-tab-container-height, 48px);--_with-icon-and-label-text-container-height: var(--md-primary-tab-with-icon-and-label-text-container-height, 64px);--_hover-state-layer-color: var(--md-primary-tab-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-primary-tab-hover-state-layer-opacity, 0.08);--_pressed-state-layer-color: var(--md-primary-tab-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-primary-tab-pressed-state-layer-opacity, 0.12);--_active-focus-icon-color: var(--md-primary-tab-active-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_active-hover-icon-color: var(--md-primary-tab-active-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_active-icon-color: var(--md-primary-tab-active-icon-color, var(--md-sys-color-primary, #6750a4));--_active-pressed-icon-color: var(--md-primary-tab-active-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-primary-tab-icon-size, 24px);--_focus-icon-color: var(--md-primary-tab-focus-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-icon-color: var(--md-primary-tab-hover-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_icon-color: var(--md-primary-tab-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-primary-tab-pressed-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_label-text-font: var(--md-primary-tab-label-text-font, var(--md-sys-typescale-title-small-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-primary-tab-label-text-line-height, var(--md-sys-typescale-title-small-line-height, 1.25rem));--_label-text-size: var(--md-primary-tab-label-text-size, var(--md-sys-typescale-title-small-size, 0.875rem));--_label-text-weight: var(--md-primary-tab-label-text-weight, var(--md-sys-typescale-title-small-weight, var(--md-ref-typeface-weight-medium, 500)));--_active-focus-label-text-color: var(--md-primary-tab-active-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_active-hover-label-text-color: var(--md-primary-tab-active-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_active-label-text-color: var(--md-primary-tab-active-label-text-color, var(--md-sys-color-primary, #6750a4));--_active-pressed-label-text-color: var(--md-primary-tab-active-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-label-text-color: var(--md-primary-tab-focus-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-primary-tab-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_label-text-color: var(--md-primary-tab-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-label-text-color: var(--md-primary-tab-pressed-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_container-shape-start-start: var(--md-primary-tab-container-shape-start-start, var(--md-primary-tab-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-start-end: var(--md-primary-tab-container-shape-start-end, var(--md-primary-tab-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-end-end: var(--md-primary-tab-container-shape-end-end, var(--md-primary-tab-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-end-start: var(--md-primary-tab-container-shape-end-start, var(--md-primary-tab-container-shape, var(--md-sys-shape-corner-none, 0px)))}.content.stacked{flex-direction:column;gap:2px}.content.stacked.has-icon.has-label{height:var(--_with-icon-and-label-text-container-height)}
`,O=t`:host{display:inline-flex;align-items:center;justify-content:center;outline:none;padding:0 16px;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:middle;user-select:none;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);color:var(--_label-text-color);z-index:0;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity);--md-elevation-level: var(--_container-elevation)}md-focus-ring{--md-focus-ring-shape: 8px}:host([active]) md-focus-ring{margin-bottom:calc(var(--_active-indicator-height) + 1px)}.button::before{background:var(--_container-color);content:"";inset:0;position:absolute;z-index:-1}.button::before,md-ripple,md-elevation{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start)}.content{position:relative;box-sizing:border-box;display:inline-flex;flex-direction:row;align-items:center;justify-content:center;height:var(--_container-height);gap:8px}.indicator{position:absolute;box-sizing:border-box;z-index:-1;transform-origin:bottom left;background:var(--_active-indicator-color);border-radius:var(--_active-indicator-shape);height:var(--_active-indicator-height);inset:auto 0 0 0;opacity:0}::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;color:var(--_icon-color);font-size:var(--_icon-size);width:var(--_icon-size);height:var(--_icon-size)}:host(:hover){color:var(--_hover-label-text-color);cursor:pointer}:host(:hover) ::slotted([slot=icon]){color:var(--_hover-icon-color)}:host(:focus){color:var(--_focus-label-text-color)}:host(:focus) ::slotted([slot=icon]){color:var(--_focus-icon-color)}:host(:active){color:var(--_pressed-label-text-color)}:host(:active) ::slotted([slot=icon]){color:var(--_pressed-icon-color)}:host([active]) .indicator{opacity:1}:host([active]){color:var(--_active-label-text-color);--md-ripple-hover-color: var(--_active-hover-state-layer-color);--md-ripple-hover-opacity: var(--_active-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_active-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_active-pressed-state-layer-opacity)}:host([active]) ::slotted([slot=icon]){color:var(--_active-icon-color)}:host([active]:hover){color:var(--_active-hover-label-text-color)}:host([active]:hover) ::slotted([slot=icon]){color:var(--_active-hover-icon-color)}:host([active]:focus){color:var(--_active-focus-label-text-color)}:host([active]:focus) ::slotted([slot=icon]){color:var(--_active-focus-icon-color)}:host([active]:active){color:var(--_active-pressed-label-text-color)}:host([active]:active) ::slotted([slot=icon]){color:var(--_active-pressed-icon-color)}:host,::slotted(*){white-space:nowrap}@media(forced-colors: active){.indicator{background:CanvasText}}
`;let J=class extends R{};J.styles=[O,A],J=a([l("md-primary-tab")],J);class W extends c{get activeTab(){return this.tabs.find(e=>e.active)??null}set activeTab(e){e&&this.activateTab(e)}get activeTabIndex(){return this.tabs.findIndex(e=>e.active)}set activeTabIndex(e){const t=()=>{const t=this.tabs[e];t&&this.activateTab(t)};this.slotElement?t():this.updateComplete.then(t)}get focusedTab(){return this.tabs.find(e=>e.matches(":focus-within"))}constructor(){super(),this.autoActivate=!1,this.internals=this.attachInternals(),this.internals.role="tablist",this.addEventListener("keydown",this.handleKeydown.bind(this)),this.addEventListener("keyup",this.handleKeyup.bind(this)),this.addEventListener("focusout",this.handleFocusout.bind(this))}async scrollToTab(e){await this.updateComplete;const{tabs:t}=this;if(e??=this.activeTab,!e||!t.includes(e)||!this.tabsScrollerElement)return;for(const e of this.tabs)await e.updateComplete;const a=e.offsetLeft,o=e.offsetWidth,r=this.scrollLeft,i=a-48,s=a+o-this.offsetWidth+48,n=Math.min(i,Math.max(s,r)),l=this.focusedTab?"auto":"instant";this.tabsScrollerElement.scrollTo({behavior:l,top:0,left:n})}render(){return s`
      <div class="tabs">
        <slot
          @slotchange=${this.handleSlotChange}
          @click=${this.handleTabClick}></slot>
      </div>
      <md-divider part="divider"></md-divider>
    `}async handleTabClick(e){const t=e.target;var a;(await 0,e.defaultPrevented||!((a=t)instanceof HTMLElement&&a.hasAttribute("md-tab"))||t.active)||this.activateTab(t)}activateTab(e){const{tabs:t}=this,a=this.activeTab;if(t.includes(e)&&a!==e){for(const a of t)a.active=a===e;if(a){if(!this.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!0}))){for(const e of t)e.active=e===a;return}e[B](a)}this.updateFocusableTab(e),this.scrollToTab(e)}}updateFocusableTab(e){for(const t of this.tabs)t.tabIndex=t===e?0:-1}async handleKeydown(e){await 0;const t="ArrowLeft"===e.key,a="ArrowRight"===e.key,o="Home"===e.key,r="End"===e.key;if(e.defaultPrevented||!t&&!a&&!o&&!r)return;const{tabs:i}=this;if(i.length<2)return;let s;if(e.preventDefault(),o||r)s=o?0:i.length-1;else{const e="rtl"===getComputedStyle(this).direction?t:a,{focusedTab:o}=this;if(o){const t=this.tabs.indexOf(o);s=e?t+1:t-1,s>=i.length?s=0:s<0&&(s=i.length-1)}else s=e?0:i.length-1}const n=i[s];n.focus(),this.autoActivate?this.activateTab(n):this.updateFocusableTab(n)}handleKeyup(){this.scrollToTab(this.focusedTab??this.activeTab)}handleFocusout(){if(this.matches(":focus-within"))return;const{activeTab:e}=this;e&&this.updateFocusableTab(e)}handleSlotChange(){const e=this.tabs[0];!this.activeTab&&e&&this.activateTab(e),this.scrollToTab(this.activeTab)}}a([m({flatten:!0,selector:"[md-tab]"})],W.prototype,"tabs",void 0),a([o({type:Number,attribute:"active-tab-index"})],W.prototype,"activeTabIndex",null),a([o({type:Boolean,attribute:"auto-activate"})],W.prototype,"autoActivate",void 0),a([v(".tabs")],W.prototype,"tabsScrollerElement",void 0),a([v("slot")],W.prototype,"slotElement",void 0);const K=t`:host{box-sizing:border-box;display:flex;flex-direction:column;overflow:auto;scroll-behavior:smooth;scrollbar-width:none;position:relative}:host([hidden]){display:none}:host::-webkit-scrollbar{display:none}.tabs{align-items:end;display:flex;height:100%;overflow:inherit;scroll-behavior:inherit;scrollbar-width:inherit;justify-content:space-between;width:100%}::slotted(*){flex:1}::slotted([active]){z-index:1}
`;let L=class extends W{};L.styles=[K],L=a([l("md-tabs")],L);let M=class extends c{#i="simple";get selectedTab(){return this.#i}set selectedTab(e){this.#i=e}#s;get projectSrc(){return this.#s}set projectSrc(e){this.#s=e}#n="index.html";get htmlFile(){return this.#n}set htmlFile(e){this.#n=e}#l;get lineNumbers(){return this.#l}set lineNumbers(e){this.#l=e}#c;get lineWrapping(){return this.#c}set lineWrapping(e){this.#c=e}updated(e){if(e.has("selectedTab")&&"playground"===this.selectedTab)try{import("./DXjlzyOj.js")}catch(e){this.dispatchEvent(new g(e))}}static{this.styles=[t`
      :host {
        display: block;
      }

      playground-ide {
        --playground-preview-width: 50%;
        min-height: 500px;

        --playground-tab-bar-indicator-color: #212121;
        --playground-bar-height: 48px;
        --playground-highlight-color: #212121;
        /* --playground-tab-bar-foreground-color: #fff; */
        --playground-tab-bar-background: white;
      }
    `]}render(){return s`
      <md-tabs
        @change=${e=>{this.selectedTab=0===e.target.activeTabIndex?"simple":"playground"}}
      >
        <md-primary-tab
          >Demo
          <md-icon slot="icon">preview</md-icon>
        </md-primary-tab>
        <md-primary-tab
          >Playground (BETA)
          <md-icon slot="icon">family_restroom</md-icon>
        </md-primary-tab>
      </md-tabs>

      ${"playground"===this.selectedTab?s` <playground-ide
            ?line-numbers=${this.lineNumbers}
            ?line-wrapping=${this.lineNumbers}
            ?resizable=${this.resizable}
            .projectSrc=${this.projectSrc}
            .htmlFile=${this.htmlFile}
          >
          </playground-ide>`:s`<main><slot></slot></main>`}
    `}};a([o({type:String})],M.prototype,"selectedTab",null),a([o({type:String,attribute:"project-src"})],M.prototype,"projectSrc",null),a([o({type:String,attribute:"html-file"})],M.prototype,"htmlFile",null),a([o({type:Boolean,attribute:"line-numbers"})],M.prototype,"lineNumbers",null),a([o({type:Boolean,attribute:"line-wrapping"})],M.prototype,"lineWrapping",null),a([o({type:Boolean})],M.prototype,"resizable",void 0),M=a([l("smart-demo")],M);export{f as S,y as n};
