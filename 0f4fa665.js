import{i as o,k as e,_ as t,I as r,t as l,s as i,h as a,p as c,x as n,S as s,r as d,c as p}from"./d0ace671.js";import{S as m}from"./9e8552c1.js";import"./41178c5b.js";import"./cb83c3c8.js";import"./ec341a4d.js";import"./62698f2c.js";import"./663a7052.js";const u=o`:host{--_container-color: var(--md-filled-icon-button-container-color, var(--md-sys-color-primary, #6750a4));--_container-height: var(--md-filled-icon-button-container-height, 40px);--_container-width: var(--md-filled-icon-button-container-width, 40px);--_disabled-container-color: var(--md-filled-icon-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-icon-button-disabled-container-opacity, 0.12);--_disabled-icon-color: var(--md-filled-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-icon-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-icon-button-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_hover-icon-color: var(--md-filled-icon-button-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-color: var(--md-filled-icon-button-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-opacity: var(--md-filled-icon-button-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-filled-icon-button-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-size: var(--md-filled-icon-button-icon-size, 24px);--_pressed-icon-color: var(--md-filled-icon-button-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-color: var(--md-filled-icon-button-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-opacity: var(--md-filled-icon-button-pressed-state-layer-opacity, 0.12);--_selected-container-color: var(--md-filled-icon-button-selected-container-color, var(--md-sys-color-primary, #6750a4));--_toggle-selected-focus-icon-color: var(--md-filled-icon-button-toggle-selected-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-hover-icon-color: var(--md-filled-icon-button-toggle-selected-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-hover-state-layer-color: var(--md-filled-icon-button-toggle-selected-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-icon-color: var(--md-filled-icon-button-toggle-selected-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-pressed-icon-color: var(--md-filled-icon-button-toggle-selected-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-pressed-state-layer-color: var(--md-filled-icon-button-toggle-selected-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_unselected-container-color: var(--md-filled-icon-button-unselected-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_toggle-focus-icon-color: var(--md-filled-icon-button-toggle-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-hover-icon-color: var(--md-filled-icon-button-toggle-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-hover-state-layer-color: var(--md-filled-icon-button-toggle-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_toggle-icon-color: var(--md-filled-icon-button-toggle-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-pressed-icon-color: var(--md-filled-icon-button-toggle-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-pressed-state-layer-color: var(--md-filled-icon-button-toggle-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var(--md-filled-icon-button-container-shape-start-start, var(--md-filled-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-filled-icon-button-container-shape-start-end, var(--md-filled-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-filled-icon-button-container-shape-end-end, var(--md-filled-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-filled-icon-button-container-shape-end-start, var(--md-filled-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)))}.icon-button{color:var(--_icon-color);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.icon-button:hover{color:var(--_hover-icon-color)}.icon-button:focus{color:var(--_focus-icon-color)}.icon-button:active{color:var(--_pressed-icon-color)}.icon-button:disabled{color:var(--_disabled-icon-color)}.icon-button::before{background-color:var(--_container-color);border-radius:inherit;content:"";inset:0;position:absolute;z-index:-1}.icon-button:disabled::before{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}.icon-button:disabled .icon{opacity:var(--_disabled-icon-opacity)}.toggle-filled{--md-ripple-hover-color: var(--_toggle-hover-state-layer-color);--md-ripple-pressed-color: var(--_toggle-pressed-state-layer-color)}.toggle-filled:not(:disabled){color:var(--_toggle-icon-color)}.toggle-filled:not(:disabled):hover{color:var(--_toggle-hover-icon-color)}.toggle-filled:not(:disabled):focus{color:var(--_toggle-focus-icon-color)}.toggle-filled:not(:disabled):active{color:var(--_toggle-pressed-icon-color)}.toggle-filled:not(:disabled)::before{background-color:var(--_unselected-container-color)}.selected{--md-ripple-hover-color: var(--_toggle-selected-hover-state-layer-color);--md-ripple-pressed-color: var(--_toggle-selected-pressed-state-layer-color)}.selected:not(:disabled){color:var(--_toggle-selected-icon-color)}.selected:not(:disabled):hover{color:var(--_toggle-selected-hover-icon-color)}.selected:not(:disabled):focus{color:var(--_toggle-selected-focus-icon-color)}.selected:not(:disabled):active{color:var(--_toggle-selected-pressed-icon-color)}.selected:not(:disabled)::before{background-color:var(--_selected-container-color)}
`;let v=class extends r{getRenderClasses(){return{...super.getRenderClasses(),filled:!0,"toggle-filled":this.toggle}}};v.styles=[e,u],v=t([l("md-filled-icon-button")],v);const f=o`
  form {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
    grid-gap: 24px;
  }

  form [fullwidth] {
    grid-column: 1 / -1;
  }

  /* Make things how we like it */
  form md-switch {
    --md-switch-track-height: 28px;
  }

  form label {
    display: flex;
    font-size: 14px;
    align-items: center;
    justify-self: start;
    user-select: none;
  }

  form label > md-checkbox,
  form label > md-switch {
    margin-right: 14px;
  }

  @media (max-width: 786px) {
    form {
      display: flex;
      flex-direction: column;
    }
  }
`;let g=class extends i{#o="";get iconSelected(){return this.#o}set iconSelected(o){this.#o=o}#e;get validators(){return this.#e}set validators(o){this.#e=o}static{this.styles=[a,c,f,o`
      :host {
        display: flex;
        flex-direction: column;
        margin: 24px 12px;
      }

      div {
        border: 1px solid var(--md-sys-color-outline);
        padding: 24px;
        border-radius: 8px;
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin: 24px 0 36px 0;
      }

      section[buttons] {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 12px;
      }

      button-container {
        padding: 12px;
        display: flex;
        gap: 12px;
      }

      titanium-input-validator {
        width: 299px;
      }
    `]}render(){return n`
      <h1>Default</h1>
      <p>A validator example for a custom selectable icon button input</p>
      <div>
        <titanium-input-validator label="Bunnies" .evaluator=${()=>"cruelty_free"===this.iconSelected} .errorText=${"Bunny is not selected"}>
          <button-container>
            <md-outlined-icon-button
              type="button"
              @click=${()=>this.iconSelected="cruelty_free"}
              toggle
              ?selected=${"cruelty_free"===this.iconSelected}
            >
              <md-icon>cruelty_free</md-icon>
            </md-outlined-icon-button>
            <md-outlined-icon-button type="button" @click=${()=>this.iconSelected="pets"} toggle ?selected=${"pets"===this.iconSelected}>
              <md-icon>pets</md-icon>
            </md-outlined-icon-button>
            <md-outlined-icon-button type="button" @click=${()=>this.iconSelected="person"} toggle ?selected=${"person"===this.iconSelected}>
              <md-icon>person</md-icon>
            </md-outlined-icon-button>
          </button-container>
        </titanium-input-validator>
        <section buttons>
          <md-outlined-button @click=${()=>Array.from(this.validators).forEach((o=>o.reportValidity()))}>Report Validity</md-outlined-button>
          <md-outlined-button
            @click=${()=>this.dispatchEvent(new s(`Check Validity is ${Array.from(this.validators).map((o=>o.checkValidity()))}`))}
          >
            Check Validity</md-outlined-button
          >
          <md-outlined-button @click=${()=>Array.from(this.validators).forEach((o=>o.reset()))}> Reset</md-outlined-button>
        </section>
      </div>
    `}};t([d()],g.prototype,"iconSelected",null),t([p("titanium-input-validator")],g.prototype,"validators",null),g=t([l("titanium-input-validator-playground")],g);let b=class extends i{static{this.styles=[m,o``]}render(){return n`
      <story-header name="Titanium Input Validator" className="TitaniumInputValidator"></story-header>
      <smart-demo line-numbers resizable project-src="../src/demos/titanium-input-validator/project.json"
        ><titanium-input-validator-playground></titanium-input-validator-playground>
      </smart-demo>
      <api-docs src="./custom-elements.json" selected="titanium-input-validator"></api-docs>
    `}};b=t([l("titanium-input-validator-demo")],b);export{b as TitaniumInputValidatorDemo};
