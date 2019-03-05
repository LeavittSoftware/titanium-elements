import '@material/mwc-ripple';
import {css, customElement, html, LitElement, property} from 'lit-element';

@customElement('titanium-svg-button')
export class TitaniumSvgButton extends LitElement {
  @property() path: string;
  @property({type: Boolean, reflect: true}) disabled: boolean;

  static styles = css`
   :host {
     display: block;
     cursor: pointer;
     width: 42px;
     height: 42px;
     border-radius:50%;

     @apply --titanium-svg-button;
   }

   :host(:hover:not([disabled])) {
     background-color: #fafafa;
   }
  
   :host([large]) {
    width: 64px;
    height: 64px;
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
    height: 65%;
    width: 65%;
    fill: var(--titanium-svg-button-svg-active-color, #3b95ff);
    @apply --titanium-svg-button-active-color;
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
