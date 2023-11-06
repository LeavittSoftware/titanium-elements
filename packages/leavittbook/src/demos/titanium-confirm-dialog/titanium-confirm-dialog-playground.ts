/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/web/titanium/styles/styles';

import '@material/web/button/outlined-button';

/* playground-fold-end */
import '@leavittsoftware/web/titanium/confirm-dialog/confirm-dialog';
import TitaniumConfirmDialog from '@leavittsoftware/web/titanium/confirm-dialog/confirm-dialog';
import { ConfirmDialogOpenEvent } from '@leavittsoftware/web/titanium/confirm-dialog/confirm-dialog-open-event';

/* playground-fold */
@customElement('titanium-confirm-dialog-playground')
export class TitaniumConfirmDialogPlayground extends LitElement {
  @query('titanium-confirm-dialog') protected dialog!: TitaniumConfirmDialog;
  @state() private confirmed = false;

  async #open() {
    const confirmationDialogEvent = new ConfirmDialogOpenEvent(
      'Confirm delete?',
      'Are you sure you would like to delete the universe? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis massa tincidunt dui ut ornare. Ut tortor pretium viverra suspendisse potenti nullam. Dolor morbi non arcu risus. Porttitor rhoncus dolor purus non. Vitae justo eget magna fermentum iaculis eu non diam. Pretium quam vulputate dignissim suspendisse in est ante in. Semper quis lectus nulla at volutpat. Id volutpat lacus laoreet non curabitur gravida arcu ac tortor. Orci dapibus ultrices in iaculis.'
    );
    this.dispatchEvent(confirmationDialogEvent);
    this.confirmed = await confirmationDialogEvent.dialogResult;
  }

  static styles = [
    h1,
    p,
    css`
      :host {
        display: flex;
        flex-direction: column;
        margin: 24px 12px;
      }

      div {
        border: 1px solid var(--md-sys-color-outline);
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
        <p>Confirmed: ${this.confirmed}</p>
        <br />
        <section buttons>
          <md-outlined-button @click=${this.#open}>Open</md-outlined-button>
        </section>
      </div>
    `;
  }
}
