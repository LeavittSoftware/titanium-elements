import{b as e,_ as a,n as o,ao as t,f as i,c as s,ap as r,t as n,i as l,p as c,r as d,h as p}from"./BkdWKSMI.js";import{h as m}from"./z-LiiMbg.js";const v=e`.elevated{--md-elevation-level: var(--_elevated-container-elevation);--md-elevation-shadow-color: var(--_elevated-container-shadow-color)}.elevated::before{background:var(--_elevated-container-color)}.elevated:hover{--md-elevation-level: var(--_elevated-hover-container-elevation)}.elevated:focus-within{--md-elevation-level: var(--_elevated-focus-container-elevation)}.elevated:active{--md-elevation-level: var(--_elevated-pressed-container-elevation)}.elevated.disabled{--md-elevation-level: var(--_elevated-disabled-container-elevation)}.elevated.disabled::before{background:var(--_elevated-disabled-container-color);opacity:var(--_elevated-disabled-container-opacity)}@media(forced-colors: active){.elevated md-elevation{border:1px solid CanvasText}.elevated.disabled md-elevation{border-color:GrayText}}
`;class g extends t{constructor(){super(...arguments),this.elevated=!1,this.href="",this.download="",this.target=""}get primaryId(){return this.href?"link":"button"}get rippleDisabled(){return!this.href&&(this.disabled||this.softDisabled)}getContainerClasses(){return{...super.getContainerClasses(),disabled:!this.href&&(this.disabled||this.softDisabled),elevated:this.elevated,link:!!this.href}}renderPrimaryAction(e){const{ariaLabel:a}=this;return this.href?s`
        <a
          class="primary action"
          id="link"
          aria-label=${a||i}
          href=${this.href}
          download=${this.download||i}
          target=${this.target||i}
          >${e}</a
        >
      `:s`
      <button
        class="primary action"
        id="button"
        aria-label=${a||i}
        aria-disabled=${this.softDisabled||i}
        ?disabled=${this.disabled&&!this.alwaysFocusable}
        type="button"
        >${e}</button
      >
    `}renderOutline(){return this.elevated?s`<md-elevation part="elevation"></md-elevation>`:super.renderOutline()}}a([o({type:Boolean})],g.prototype,"elevated",void 0),a([o()],g.prototype,"href",void 0),a([o()],g.prototype,"download",void 0),a([o()],g.prototype,"target",void 0);class h extends g{}const u=e`:host{--_container-height: var(--md-suggestion-chip-container-height, 32px);--_disabled-label-text-color: var(--md-suggestion-chip-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-suggestion-chip-disabled-label-text-opacity, 0.38);--_elevated-container-color: var(--md-suggestion-chip-elevated-container-color, var(--md-sys-color-surface-container-low, #f7f2fa));--_elevated-container-elevation: var(--md-suggestion-chip-elevated-container-elevation, 1);--_elevated-container-shadow-color: var(--md-suggestion-chip-elevated-container-shadow-color, var(--md-sys-color-shadow, #000));--_elevated-disabled-container-color: var(--md-suggestion-chip-elevated-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_elevated-disabled-container-elevation: var(--md-suggestion-chip-elevated-disabled-container-elevation, 0);--_elevated-disabled-container-opacity: var(--md-suggestion-chip-elevated-disabled-container-opacity, 0.12);--_elevated-focus-container-elevation: var(--md-suggestion-chip-elevated-focus-container-elevation, 1);--_elevated-hover-container-elevation: var(--md-suggestion-chip-elevated-hover-container-elevation, 2);--_elevated-pressed-container-elevation: var(--md-suggestion-chip-elevated-pressed-container-elevation, 1);--_focus-label-text-color: var(--md-suggestion-chip-focus-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-label-text-color: var(--md-suggestion-chip-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-suggestion-chip-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-opacity: var(--md-suggestion-chip-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-suggestion-chip-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-suggestion-chip-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-suggestion-chip-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-suggestion-chip-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-suggestion-chip-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-label-text-color: var(--md-suggestion-chip-pressed-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-color: var(--md-suggestion-chip-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-opacity: var(--md-suggestion-chip-pressed-state-layer-opacity, 0.12);--_disabled-outline-color: var(--md-suggestion-chip-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-suggestion-chip-disabled-outline-opacity, 0.12);--_focus-outline-color: var(--md-suggestion-chip-focus-outline-color, var(--md-sys-color-on-surface-variant, #49454f));--_outline-color: var(--md-suggestion-chip-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-suggestion-chip-outline-width, 1px);--_disabled-leading-icon-color: var(--md-suggestion-chip-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-suggestion-chip-disabled-leading-icon-opacity, 0.38);--_focus-leading-icon-color: var(--md-suggestion-chip-focus-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-leading-icon-color: var(--md-suggestion-chip-hover-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-icon-color: var(--md-suggestion-chip-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_pressed-leading-icon-color: var(--md-suggestion-chip-pressed-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-suggestion-chip-icon-size, 18px);--_container-shape-start-start: var(--md-suggestion-chip-container-shape-start-start, var(--md-suggestion-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-start-end: var(--md-suggestion-chip-container-shape-start-end, var(--md-suggestion-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-end-end: var(--md-suggestion-chip-container-shape-end-end, var(--md-suggestion-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-end-start: var(--md-suggestion-chip-container-shape-end-start, var(--md-suggestion-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_leading-space: var(--md-suggestion-chip-leading-space, 16px);--_trailing-space: var(--md-suggestion-chip-trailing-space, 16px);--_icon-label-space: var(--md-suggestion-chip-icon-label-space, 8px);--_with-leading-icon-leading-space: var(--md-suggestion-chip-with-leading-icon-leading-space, 8px)}@media(forced-colors: active){.link .outline{border-color:ActiveText}}
`;let y=class extends h{};y.styles=[r,v,u],y=a([n("md-suggestion-chip")],y);let b=null;const f=async e=>{try{const a=await fetch(e,{method:"GET"}),o=await a.text();return o.length?JSON.parse(o):{}}catch(e){console.warn(e)}return null};let x=class extends l{#e;get name(){return this.#e}set name(e){this.#e=e}#a;get className(){return this.#a}set className(e){this.#a=e}#o;get deprecatedReason(){return this.#o}set deprecatedReason(e){this.#o=e}#t=null;get customElementDeclaration(){return this.#t}set customElementDeclaration(e){this.#t=e}#i=null;get customElementsJSON(){return this.#i}set customElementsJSON(e){this.#i=e}async updated(e){e.has("className")&&this.className&&(this.customElementsJSON=await(async()=>(b||(b=await f("/custom-elements.json")),b))(),this.customElementDeclaration=this.customElementsJSON?.modules.flatMap(e=>e.declarations).find(e=>e.name===this.className)??null,console.log(this.customElementDeclaration))}static{this.styles=[m,c,e`
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
    `]}render(){return s`
      <h1>${this.name}</h1>
      <info-container>
        <p code>${this.className}</p>
        ${this.customElementDeclaration?.tagName?s`<p code>${"<"}${this.customElementDeclaration?.tagName}${">"}</p>`:""}
      </info-container>
      <chip-container>
        ${this.deprecatedReason?s`<md-suggestion-chip disabled label="Deprecated (${this.deprecatedReason})"></md-suggestion-chip>`:i}
      </chip-container>
    `}};a([o({type:String})],x.prototype,"name",null),a([o({type:String})],x.prototype,"className",null),a([o({type:String})],x.prototype,"deprecatedReason",null),a([d()],x.prototype,"customElementDeclaration",null),a([d()],x.prototype,"customElementsJSON",null),x=a([n("story-header")],x);const _=[m,p,c,e`
    leavitt-app-width-limiter > md-divider {
      margin-bottom: 48px;
    }

    titanium-card {
      margin-bottom: 36px;
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
  `];export{_ as S};
