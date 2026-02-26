import{i as t,h as e,X as i,b as o,f as a,c as n,_ as s,n as r,t as h}from"./BkdWKSMI.js";let l=class extends t{#t;get header(){return this.#t}set header(t){this.#t=t}#e;get subHeader(){return this.#e}set subHeader(t){this.#e=t}#i;get icon(){return this.#i}set icon(t){this.#i=t}#o=!1;get noNav(){return this.#o}set noNav(t){this.#o=t}#a=!1;get disableDefaultBackButtonBehavior(){return this.#a}set disableDefaultBackButtonBehavior(t){this.#a=t}#n(){this.disableDefaultBackButtonBehavior?this.dispatchEvent(new CustomEvent("titanium-header-back-click",{composed:!0})):window.history.back()}static{this.styles=[e,i,o`
      :host {
        display: flex;
        flex-direction: column;
        -webkit-font-smoothing: antialiased;
        padding: 0 52px 8px 52px;
        position: relative;
      }

      :host([no-nav]) md-icon-button {
        display: none;
      }

      :host([no-nav]) {
        padding: 0 0 8px 0;
      }

      header {
        display: block;
        text-align: center;
        padding: 0 0 8px 0;
      }

      h1 {
        display: inline;
        font-size: 40px;
        line-height: 42px;
        font-weight: 200;

        margin: 0;
        color: var(--md-sys-color-on-background);
      }

      h3 {
        color: var(--md-sys-color-on-surface-variant);
        font-family: Metropolis, Roboto, Noto, sans-serif;
        font-weight: 300;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
      }

      md-icon[header-icon] {
        display: inline;
        vertical-align: text-bottom;
        font-size: 40px;
        color: var(--md-sys-color-on-background);
        margin-right: 8px;
      }

      md-icon-button {
        position: absolute;
        top: 0;
        left: 0;
      }

      @media (max-width: 920px) {
        h1 {
          font-size: 30px;
          line-height: 32px;
        }

        h3 {
          font-size: 14px;
          line-height: 16px;
        }

        md-icon[header-icon] {
          font-size: 30px;
        }
      }

      :host([hidden]) {
        display: none;
      }
    `]}render(){return n`
      <header part="header">
        ${this.icon?n`<md-icon header-icon part="icon">${this.icon}</md-icon>`:a}
        <h1 part="h1">${this.header}</h1>
        <md-icon-button part="button" @click=${this.#n} large> <md-icon>arrow_back</md-icon></md-icon-button>
      </header>

      <h3 part="h3">${this.subHeader}</h3>
    `}};s([r({type:String})],l.prototype,"header",null),s([r({type:String})],l.prototype,"subHeader",null),s([r({type:String})],l.prototype,"icon",null),s([r({type:Boolean,reflect:!0,attribute:"no-nav"})],l.prototype,"noNav",null),s([r({type:Boolean,reflect:!0,attribute:"disable-default-back-button-behavior"})],l.prototype,"disableDefaultBackButtonBehavior",null),l=s([h("titanium-header")],l);
