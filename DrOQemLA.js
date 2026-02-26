import{b as t,f as e,c as i,_ as l,n as o,t as s}from"./BkdWKSMI.js";import{E as n}from"./Co12Lg7Y.js";let a=class extends n{#t=!1;get hideClearButton(){return this.#t}set hideClearButton(t){this.#t=t}#e=!1;get preventCollapse(){return this.#e}set preventCollapse(t){this.#e=t}#i=!0;get hasValue(){return this.#i}set hasValue(t){this.#i=t}#l="off";get autocomplete(){return this.#l}set autocomplete(t){this.#l=t}#o=!1;get spellcheck(){return this.#o}set spellcheck(t){this.#o=t}async updated(t){t.has("value")&&(this.hasValue=!!this.value)}static{this.styles=t`
    :host {
      display: block;
      cursor: pointer;
      overflow: hidden;
    }

    md-outlined-text-field {
      width: 48px;
      --md-outlined-field-outline-width: 0;
      --md-outlined-field-hover-outline-width: 0;
      --md-outlined-field-disabled-outline-width: 0;

      -webkit-transition: width 250ms 0ms cubic-bezier(0.4, 0, 0.2, 1); /* Safari */
      transition: width 250ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
      --md-outlined-text-field-bottom-space: 11px;
      --md-outlined-text-field-top-space: 11px;
    }

    :host([has-value]) md-icon-button[search],
    :host([prevent-collapse]) md-icon-button[search],
    md-outlined-text-field:focus-within md-icon-button[search] {
      pointer-events: none;
    }

    :host([has-value]) md-outlined-text-field,
    :host([prevent-collapse]) md-outlined-text-field,
    md-outlined-text-field:focus-within {
      --md-outlined-field-outline-width: initial;
      --md-outlined-field-disabled-outline-width: initial;
      --md-outlined-field-hover-outline-width: initial;
      --md-outlined-text-field-container-shape: initial;

      width: var(--titanium-search-input-expanded-width, 258px);
    }
  `}renderMainSlot(){return i`
      <slot></slot>
      <md-icon-button search ?disabled=${this.disabled} @click=${()=>this.focus()} @focus=${()=>this.focus()} slot="leading-icon">
        <md-icon search>search</md-icon></md-icon-button
      >

      ${this.hasValue?i`<md-icon-button
            slot="trailing-icon"
            ?disabled=${!this.value||this.disabled}
            @click=${()=>{this.disabled||(this.input.focus(),this.value="",this.dispatchEvent(new Event("input")))}}
          >
            <md-icon>close</md-icon></md-icon-button
          >`:e}
    `}};l([o({type:Boolean,attribute:"hide-clear-button"})],a.prototype,"hideClearButton",null),l([o({type:Boolean,reflect:!0,attribute:"prevent-collapse"})],a.prototype,"preventCollapse",null),l([o({type:Boolean,reflect:!0,attribute:"has-value"})],a.prototype,"hasValue",null),l([o({reflect:!0,type:String})],a.prototype,"autocomplete",null),l([o({reflect:!0,type:Boolean})],a.prototype,"spellcheck",null),a=l([s("titanium-search-input")],a);
