/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { h1, p, button } from '@leavittsoftware/titanium-styles';
import '@leavittsoftware/profile-picture';
import '@material/mwc-button';

/* playground-fold-end */
import '@leavittsoftware/titanium-duration-input';
import dayjs from 'dayjs/esm';
import duration from 'dayjs/esm/plugin/duration';
dayjs.extend(duration);

/* playground-fold */
@customElement('titanium-duration-input-playground')
export class TitaniumDurationInputPlayground extends LitElement {
  @state() duration: duration.Duration = dayjs.duration(144000);

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
        margin: 24px 0 36px 0;
      }

      p {
        margin-top: 24px;
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
          helperPersistent
          .duration=${this.duration}
          outlined
          @duration-changed=${event => {
            console.log(event.target.duration);
            this.duration = event.target.duration;
          }}
        ></titanium-duration-input>
        <p>Duration is: ${this.duration ? html`${this.duration.asSeconds()} seconds` : String(this.duration)}</p>
      </div>
    `;
  }
}
