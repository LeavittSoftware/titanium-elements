import '@material/mwc-ripple';
import {css, customElement, html, LitElement, property} from 'lit-element';

@customElement('titanium-svg-button')
export class TitaniumSvgButton extends LitElement {
  @property() path: string;
  @property({type: Boolean, reflect: true}) disabled: boolean;

  static styles = css`
   :host {
     display: block;
     width: 42px;
     height: 42px;
     border-radius:50%;
     flex-shrink: 0;
   }

   :host([hidden]) {
    display: none;
  }

   :host(:hover:not([disabled])) {
     background-color: var(--titanium-svg-button-hover-color, #fafafa);  
   }
   
   :host(:not([disabled])) {
     cursor: pointer;
   }
  
   :host([large]) {
    width: 52px;
    height: 52px;
   }

   ripple-contianer { 
    display: flex;
    height: 100%;
    justify-content: center;
    text-align: center;
    flex-direction: column;
   }
   
   svg {
    display: block;
    margin: 0 auto;
    width: var(--titanium-svg-button-svg-width, 60%);
    height: var(--titanium-svg-button-svg-height, 60%);
    fill: var(--titanium-svg-button-svg-active-color, #5f6368);
   }
   
   :host([disabled]) svg {
    fill: var(--titanium-svg-button-svg-disabled-color, #9b9b9b);
   }`;

  // Render element DOM by returning a `lit-html` template.
  render() {
    return html`<ripple-contianer>
       <svg viewBox="0 0 24 24">
        <path d="${this.path}" />
       </svg>
       <mwc-ripple ?disabled=${this.disabled} unbounded></mwc-ripple>
     </ripple-contianer>`;
  }
}
