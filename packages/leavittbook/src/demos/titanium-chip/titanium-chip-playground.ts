/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/titanium-styles';

/* playground-fold-end */
import '@leavittsoftware/titanium-chip';
import '@leavittsoftware/profile-picture';
import '@material/mwc-icon';

/* playground-fold */
@customElement('titanium-chip-playground')
export class TitaniumChipPlayground extends LitElement {
  static styles = [
    h1,
    p,
    css`
      :host {
        display: flex;
        flex-direction: column;
        --mdc-icon-font: 'Material Icons Outlined';
        margin: 24px 12px;
      }

      div {
        border: 1px solid var(--app-border-color);
        padding: 24px;
        border-radius: 8px;
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin: 24px 0 36px 0;
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

      <h1>Profile pictures</h1>
      <p>Slot in the profile picture element</p>
      <div>
        <titanium-chip label="The Rock"><profile-picture slot="chip-icon" personId="915608" size="28"></profile-picture ></profile-picture></titanium-chip>
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
