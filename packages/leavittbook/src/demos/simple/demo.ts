/* playground-fold */
import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
/* playground-fold-end */
import '@leavittsoftware/titanium-chip';
import '@material/mwc-icon';

import { h1, p } from '@leavittsoftware/titanium-styles';

/* playground-fold */
@customElement('chip-demo')
export class ChipDemo extends LitElement {
  static styles = [
    h1,
    p,
    ,
    css`
      :host {
        display: flex;
        flex-direction: column;
        --mdc-icon-font: 'Material Icons Outlined';
        margin: 24px;
      }

      div {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin: 12px 0 36px 0;
      }
    `,
  ];

  render() {
    /* playground-fold-end */
    return html`
      <h1>Default</h1>
      <p>Examples using disabled, closeable, and readonly attribute</p>
      <div>
        <titanium-chip label="Default"></titanium-chip>
        <titanium-chip disabled label="Disabled"></titanium-chip>
        <titanium-chip closeable label="Closeable"></titanium-chip>
        <titanium-chip readonly label="Readonly"></titanium-chip>
      </div>

      <h1>Selectable</h1>
      <p>Chips can be selected with the selectable attribute. To create a selectable group please add a matching name attribute to each chip.</p>
      <div>
        <titanium-chip name="PayWith" selectable label="Cash"> <mwc-icon slot="chip-icon">money</mwc-icon></titanium-chip>
        <titanium-chip name="PayWith" selectable label="Credit"> <mwc-icon slot="chip-icon">payment</mwc-icon></titanium-chip>
        <titanium-chip name="PayWith" selectable label="Check"> <mwc-icon slot="chip-icon">savings</mwc-icon></titanium-chip>
      </div>

      <h1>Images</h1>
      <p>Examples using the image src attribute as well as fallbackSrc</p>
      <div>
        <titanium-chip label="Image" src="https://cdn.leavitt.com/user-771130-32.jpeg"></titanium-chip>
        <titanium-chip
          label="Fallback image"
          src="https://cdn.leavitt.com/user-77asd0-32.jpeg"
          fallbackSrc="https://www.leavitt.com/application/themes/lg/img/logo/leavitt-group-logo.svg"
        ></titanium-chip>
      </div>

      <h1>Icons</h1>
      <p>Examples using the icon slot to display an mwc-icon inside a chip</p>
      <div>
        <titanium-chip label="Offline"> <mwc-icon slot="chip-icon">offline_bolt</mwc-icon></titanium-chip>
        <titanium-chip label="Online"> <mwc-icon slot="chip-icon">bolt</mwc-icon></titanium-chip>
      </div>
    `;
  }
}
