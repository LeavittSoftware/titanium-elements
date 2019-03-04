import {css, customElement, html, LitElement, property} from 'lit-element';

// This decorator defines the element.
@customElement('titanium-header')
export class TitaniumHeader extends LitElement {
  // This decorator creates a property accessor that triggers rendering and
  // an observed attribute.
  @property() header: string;
  @property() subHeader: string;

  static styles = css`
   :host {
     @apply --layout-vertical;
     padding: 0 24px 24px 24px;
   }

   h1 {
     font-family: 'Roboto', 'Noto', sans-serif;
     -webkit-font-smoothing: antialiased;
     letter-spacing: -.012em;
     line-height: 32px;
     font-size: 28px;
     font-weight: 400;

     text-align: center;
     color: #202124;
     margin: 8px 0;
     @apply --titanium-header-h1;
   }

   h3 {
     font-family: 'Roboto', 'Noto', sans-serif;
     -webkit-font-smoothing: antialiased;
     letter-spacing: -.012em;
     font-size: 16px;
     font-weight: 400;
     line-height: 20px;
     text-align: center;
     margin: 4px 0;
     color: #5f6368;
     @apply --titanium-header-h3;
   }`;

  // Render element DOM by returning a `lit-html` template.
  render() {
    return html`<h1>${this.header}</h1>
         <h3>${this.subHeader}</h3>`;
  }
}