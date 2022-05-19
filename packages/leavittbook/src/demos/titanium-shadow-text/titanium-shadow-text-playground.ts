/* playground-fold */
import { css, html, LitElement, nothing } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/titanium-styles';
import '@material/mwc-list/mwc-list-item';
import '@material/mwc-select';
import '@leavittsoftware/titanium-icon';

/* playground-fold-end */
import '@leavittsoftware/titanium-shadow-text';
import { DOMEvent } from '@leavittsoftware/leavitt-elements/lib/dom-event';
import { Select } from '@material/mwc-select';

/* playground-fold */
@customElement('titanium-shadow-text-playground')
export class TitaniumShadowTextPlayground extends LitElement {
  @state() color: string;

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

      mwc-select {
        width: 100%;
      }
    `,
  ];

  render() {
    /* playground-fold-end */
    return html`
      <div>
        <h1>Default</h1>
        <titanium-shadow-text text="Default Shadow Text"></titanium-shadow-text>
      </div>

      <div>
        <h1>Full example</h1>
        <mwc-select
          outlined
          label="Color"
          @change=${(e: DOMEvent<Select>) => {
            this.color = e.target.value;
          }}
        >
          <mwc-list-item value=""></mwc-list-item>
          <mwc-list-item value="Coyote Brown" graphic="avatar" twoline>
            <titanium-icon slot="graphic" icon="category"></titanium-icon>
            <span>Coyote Brown</span>
            <span slot="secondary"><titanium-shadow-text text="Almost coyote but partially brown"></titanium-shadow-text></span>
          </mwc-list-item>
        </mwc-select>
      </div>
    `;
  }
}
