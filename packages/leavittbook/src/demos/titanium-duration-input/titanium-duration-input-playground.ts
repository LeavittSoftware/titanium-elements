/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';
import '@leavittsoftware/web/leavitt/profile-picture/profile-picture';
// import '@material/mwc-button';

/* playground-fold-end */
import '@leavittsoftware/web/titanium/duration-input/duration-input';
import dayjs from 'dayjs/esm';
import duration from 'dayjs/esm/plugin/duration';
dayjs.extend(duration);

/* playground-fold */
@customElement('titanium-duration-input-playground')
export class TitaniumDurationInputPlayground extends LitElement {
  @state() duration: duration.Duration = dayjs.duration(14400);

  async firstUpdated() {
    await this.updateComplete;
    setTimeout(() => {
      this.duration = dayjs.duration(244000);
    }, 2000);
  }

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
          @duration-change=${(event) => {
            this.duration = event.target.duration;
          }}
        ></titanium-duration-input>
        <p>Duration is: ${this.duration ? html`${this.duration.asSeconds()} seconds` : String(this.duration)}</p>
      </div>

      <h1>Required</h1>
      <div>
        <titanium-duration-input required validationMessage="This duration is required" label="Duration" helperPersistent outlined></titanium-duration-input>
      </div>
    `;
  }
}
