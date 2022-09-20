/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { h1, p, button } from '@leavittsoftware/titanium-styles';
import '@leavittsoftware/profile-picture';
import '@material/mwc-button';
import { TitaniumDurationInputElement } from '@leavittsoftware/titanium-duration-input';

/* playground-fold-end */
import '@leavittsoftware/titanium-duration-input';

/* playground-fold */
@customElement('titanium-duration-input-playground')
export class TitaniumDurationInputPlayground extends LitElement {
  @query('titanium-duration-input[required]') requiredInput: TitaniumDurationInputElement;
  @state() duration: number = 1500000000;

  static styles = [
    h1,
    p,
    button,
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

      section[buttons] {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 12px;
      }
    `,
  ];

  render() {
    /* playground-fold-end */
    return html`
      <h1>Default</h1>
      <div>
        <titanium-duration-input
          label="Duration"
          .value=${this.duration}
          @changed=${event => {
            this.duration = event.target.value;
          }}
        ></titanium-duration-input>
        <p>${this.duration}</p>
        <titanium-duration-input label="Duration"></titanium-duration-input>
      </div>
    `;
  }
}
