import '../lib/titanium-svg-button';

import {css, customElement, html, LitElement, property} from 'lit-element';

// This decorator defines the element.
@customElement('titanium-header')
export class TitaniumHeader extends LitElement {
  // This decorator creates a property accessor that triggers rendering and
  // an observed attribute.
  @property() header: string;
  @property() subHeader: string;

  _handleBackClick() {
    this.dispatchEvent(
        new CustomEvent('titanium-header-back-click', {composed: true}));
  }

  static styles = css`
   :host {
     display: block;    
     padding-bottom: 24px;
     font-family: 'Roboto', 'Noto', sans-serif;
     -webkit-font-smoothing: antialiased;
   }

   :host([hidden]) {
    display: none;
  }

  :host([no-nav]) h1 {
    padding: 0 12px 8px 12px;
  }

  :host([no-nav]) titanium-svg-button{
      display: none;
  }

  h1 {
     display:block;
     position: relative;
     letter-spacing: -.012em;
     line-height: 32px;
     font-size: 28px;
     font-weight: 400;
     text-align: center;
     margin: 0;
     padding: 0 52px 8px 52px;
     color: var(--titanium-header-header-color, #202124);
   }

   h3 {
     letter-spacing: -.012em;
     font-size: 16px;
     font-weight: 400;
     line-height: 20px;
     text-align: center;
     margin: 0;
     padding: 0 12px;
     color: var(--titanium-header-subheader-color, #5f6368);
   }
   
   titanium-svg-button {
     position: absolute;
     top: -11px;
     left: 0;
   }
   
   `;

  // Render element DOM by returning a `lit-html` template.
  render() {
    return html
    `<h1><titanium-svg-button @click="${
        this._handleBackClick}" large path="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></titanium-svg-button>${
        this.header}</h1>
     <h3>${this.subHeader}</h3>`;
  }
}