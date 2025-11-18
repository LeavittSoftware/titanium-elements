import '@material/web/ripple/ripple';
import '@material/web/focus/md-focus-ring';
import '@material/web/elevation/elevation';
import '@material/web/icon/icon';

import { css, html, LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('titanium-collapsible-container')
export class TitaniumCollapsibleContainer extends LitElement {
  @property({ type: Boolean, reflect: true }) accessor disabled: boolean = false;
  @property({ type: Boolean, reflect: true }) accessor opened: boolean = false;

  static styles = css`
    :host {
      display: grid;
      --titanium-collapsible-container-border-radius: 12px;
      border-radius: var(--titanium-collapsible-container-border-radius);
    }

    button {
      display: grid;
      position: relative;

      grid-auto-columns: 1fr auto;
      grid-auto-flow: column;
      padding: 12px;
      margin: 0;
      outline: none;

      text-align: left;

      cursor: pointer;
      color: inherit;
      background-color: inherit;

      border: none;
      align-items: center;
      box-sizing: border-box;

      border-radius: var(--titanium-collapsible-container-border-radius);
      --md-focus-ring-shape: var(--titanium-collapsible-container-border-radius);

      width: 100%;

      md-icon {
        transition: transform 0.35s;
      }
    }

    main {
      display: grid;

      color: inherit;
      background-color: inherit;

      interpolate-size: allow-keywords;

      height: 0;
      overflow: hidden;
      transition: all 0.35s;

      border-radius: 0 0 var(--titanium-collapsible-container-border-radius) var(--titanium-collapsible-container-border-radius);
      box-sizing: border-box;

      @starting-style {
        height: 0px;
      }
    }

    :host([opened]) {
      main {
        height: auto;
      }

      md-icon {
        transform: rotate(-180deg);
      }

      button {
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
        --md-focus-ring-shape-end-start: 0;
        --md-focus-ring-shape-end-end: 0;
      }
    }
  `;

  render() {
    return html`
      <button part="button" draggable="false" @click=${() => (this.opened = !this.opened)}>
        <header><slot name="header"></slot></header>
        <md-icon arrow>expand_more</md-icon>

        <md-ripple ?disabled=${this.disabled}></md-ripple>
        <md-focus-ring inward ?inward=${!this.opened}></md-focus-ring>
      </button>
      <main part="main">
        <slot name="content"></slot>
      </main>
      <md-elevation></md-elevation>
    `;
  }
}
