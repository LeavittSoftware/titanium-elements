import{b as e,_ as a,n as t,a6 as i,A as o,c as s,a7 as r,t as l,i as n,e as c,r as d}from"./D_imZRq6.js";import{S as p}from"./Cp0ERCaT.js";import"./Cr5T8rNp.js";import"./BrugqwTk.js";import"./BdNhM9Md.js";import"./B-WXJukW.js";import"./Bzz7vt2X.js";import"./B4dJ93Bs.js";const v=e`.elevated{--md-elevation-level: var(--_elevated-container-elevation);--md-elevation-shadow-color: var(--_elevated-container-shadow-color)}.elevated::before{background:var(--_elevated-container-color)}.elevated:hover{--md-elevation-level: var(--_elevated-hover-container-elevation)}.elevated:focus-within{--md-elevation-level: var(--_elevated-focus-container-elevation)}.elevated:active{--md-elevation-level: var(--_elevated-pressed-container-elevation)}.elevated.disabled{--md-elevation-level: var(--_elevated-disabled-container-elevation)}.elevated.disabled::before{background:var(--_elevated-disabled-container-color);opacity:var(--_elevated-disabled-container-opacity)}@media(forced-colors: active){.elevated md-elevation{border:1px solid CanvasText}.elevated.disabled md-elevation{border-color:GrayText}}
`;class g extends i{constructor(){super(...arguments),this.elevated=!1,this.href="",this.download="",this.target=""}get primaryId(){return this.href?"link":"button"}get rippleDisabled(){return!this.href&&(this.disabled||this.softDisabled)}getContainerClasses(){return{...super.getContainerClasses(),disabled:!this.href&&(this.disabled||this.softDisabled),elevated:this.elevated,link:!!this.href}}renderPrimaryAction(e){const{ariaLabel:a}=this;return this.href?s`
        <a
          class="primary action"
          id="link"
          aria-label=${a||o}
          href=${this.href}
          download=${this.download||o}
          target=${this.target||o}
          >${e}</a
        >
      `:s`
      <button
        class="primary action"
        id="button"
        aria-label=${a||o}
        aria-disabled=${this.softDisabled||o}
        ?disabled=${this.disabled&&!this.alwaysFocusable}
        type="button"
        >${e}</button
      >
    `}renderOutline(){return this.elevated?s`<md-elevation part="elevation"></md-elevation>`:super.renderOutline()}}a([t({type:Boolean})],g.prototype,"elevated",void 0),a([t()],g.prototype,"href",void 0),a([t()],g.prototype,"download",void 0),a([t()],g.prototype,"target",void 0);class h extends g{}const m=e`:host{--_container-height: var(--md-suggestion-chip-container-height, 32px);--_disabled-label-text-color: var(--md-suggestion-chip-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-suggestion-chip-disabled-label-text-opacity, 0.38);--_elevated-container-color: var(--md-suggestion-chip-elevated-container-color, var(--md-sys-color-surface-container-low, #f7f2fa));--_elevated-container-elevation: var(--md-suggestion-chip-elevated-container-elevation, 1);--_elevated-container-shadow-color: var(--md-suggestion-chip-elevated-container-shadow-color, var(--md-sys-color-shadow, #000));--_elevated-disabled-container-color: var(--md-suggestion-chip-elevated-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_elevated-disabled-container-elevation: var(--md-suggestion-chip-elevated-disabled-container-elevation, 0);--_elevated-disabled-container-opacity: var(--md-suggestion-chip-elevated-disabled-container-opacity, 0.12);--_elevated-focus-container-elevation: var(--md-suggestion-chip-elevated-focus-container-elevation, 1);--_elevated-hover-container-elevation: var(--md-suggestion-chip-elevated-hover-container-elevation, 2);--_elevated-pressed-container-elevation: var(--md-suggestion-chip-elevated-pressed-container-elevation, 1);--_focus-label-text-color: var(--md-suggestion-chip-focus-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-label-text-color: var(--md-suggestion-chip-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-suggestion-chip-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-opacity: var(--md-suggestion-chip-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-suggestion-chip-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-suggestion-chip-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-suggestion-chip-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-suggestion-chip-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-suggestion-chip-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-label-text-color: var(--md-suggestion-chip-pressed-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-color: var(--md-suggestion-chip-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-opacity: var(--md-suggestion-chip-pressed-state-layer-opacity, 0.12);--_disabled-outline-color: var(--md-suggestion-chip-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-suggestion-chip-disabled-outline-opacity, 0.12);--_focus-outline-color: var(--md-suggestion-chip-focus-outline-color, var(--md-sys-color-on-surface-variant, #49454f));--_outline-color: var(--md-suggestion-chip-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-suggestion-chip-outline-width, 1px);--_disabled-leading-icon-color: var(--md-suggestion-chip-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-suggestion-chip-disabled-leading-icon-opacity, 0.38);--_focus-leading-icon-color: var(--md-suggestion-chip-focus-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-leading-icon-color: var(--md-suggestion-chip-hover-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-icon-color: var(--md-suggestion-chip-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_pressed-leading-icon-color: var(--md-suggestion-chip-pressed-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-suggestion-chip-icon-size, 18px);--_container-shape-start-start: var(--md-suggestion-chip-container-shape-start-start, var(--md-suggestion-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-start-end: var(--md-suggestion-chip-container-shape-start-end, var(--md-suggestion-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-end-end: var(--md-suggestion-chip-container-shape-end-end, var(--md-suggestion-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-end-start: var(--md-suggestion-chip-container-shape-end-start, var(--md-suggestion-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_leading-space: var(--md-suggestion-chip-leading-space, 16px);--_trailing-space: var(--md-suggestion-chip-trailing-space, 16px);--_icon-label-space: var(--md-suggestion-chip-icon-label-space, 8px);--_with-leading-icon-leading-space: var(--md-suggestion-chip-with-leading-icon-leading-space, 8px)}@media(forced-colors: active){.link .outline{border-color:ActiveText}}
`;let u=class extends h{};u.styles=[r,v,m],u=a([l("md-suggestion-chip")],u);let b=class extends n{#e;get pageControl(){return this.#e}set pageControl(e){this.#e=e}#a=25;get count(){return this.#a}set count(e){this.#a=e}#t;get data(){return this.#t}set data(e){this.#t=e}#i;get filteredData(){return this.#i}set filteredData(e){this.#i=e}firstUpdated(){this.data=Array(25).fill(null).map((e,a)=>({id:a+1,name:"Bob"})),this.#o()}#o(){const e=this.pageControl.take*this.pageControl.page;this.filteredData=this.data.slice(e,e+this.pageControl.take)}static{this.styles=[p,e`
      suggestion-chip-group {
        display: flex;
        flex-wrap: wrap;
        margin: 24px 0;
        gap: 12px;
      }
    `]}render(){return s`
      <leavitt-app-main-content-container .pendingStateElement=${this}>
        <main>
          <leavitt-app-navigation-header level1Text="Titanium page control" level1Href="/titanium-page-control" sticky-top> </leavitt-app-navigation-header>
          <leavitt-app-width-limiter max-width="1000px">
            <story-header name="Titanium page control" className="TitaniumPageControl"></story-header>

            <div>
              <h1>Default</h1>
              <p>Basic page control with local storage</p>
              <titanium-page-control localStorageKey="demoPageTake1"></titanium-page-control>
            </div>

            <div>
              <h1>Disabled</h1>
              <p>Disabled page control</p>
              <titanium-page-control disabled></titanium-page-control>
            </div>

            <div>
              <h1>Filled</h1>
              <p>Filled page control variant</p>
              <titanium-page-control></titanium-page-control>
            </div>

            <div>
              <h1>Full example</h1>
              <p>Complete page control with data pagination</p>
              <suggestion-chip-group>
                ${this.filteredData?.map(e=>s` <md-suggestion-chip label="${e?.name} #${e?.id}"></md-suggestion-chip> `)}
              </suggestion-chip-group>
              <titanium-page-control
                main
                .pageSizes=${[2,4,6,8]}
                .count=${this.count}
                localStorageKey="demoPageTake2"
                @action=${()=>{this.#o()}}
              ></titanium-page-control>
            </div>

            <api-docs src="./custom-elements.json" selected="titanium-page-control"></api-docs>
          </leavitt-app-width-limiter>
        </main>
      </leavitt-app-main-content-container>
    `}};a([c("titanium-page-control[main]")],b.prototype,"pageControl",null),a([d()],b.prototype,"count",null),a([d()],b.prototype,"data",null),a([d()],b.prototype,"filteredData",null),b=a([l("titanium-page-control-demo")],b);export{b as TitaniumPageControlDemo};
