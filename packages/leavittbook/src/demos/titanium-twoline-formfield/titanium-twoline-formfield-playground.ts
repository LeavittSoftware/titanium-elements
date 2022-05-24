/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/titanium-styles';
import '@leavittsoftware/profile-picture';
import '@material/mwc-checkbox';
import { Checkbox } from '@material/mwc-checkbox';

/* playground-fold-end */
import '@leavittsoftware/titanium-twoline-formfield';
import { DOMEvent } from '@leavittsoftware/leavitt-elements/lib/dom-event';

/* playground-fold */
@customElement('titanium-twoline-formfield-playground')
export class TitaniumTwolineFormfieldPlayground extends LitElement {
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
      <p>Default twoline formfield styles</p>
      <div>
        <titanium-twoline-formfield label="Share template" description="Share this template with your friends">
          <mwc-checkbox checked @change=${(e: DOMEvent<Checkbox>) => console.log(e.target.checked)}> </mwc-checkbox>
        </titanium-twoline-formfield>
      </div>
    `;
  }
}
