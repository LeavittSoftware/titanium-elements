/* playground-fold */
import { css, html, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { h1, p } from '@leavittsoftware/titanium-styles';
import '@material/mwc-icon';
import '@material/mwc-button';
/* playground-fold-end */

import '@leavittsoftware/titanium-dialog/lib/confirm-dialog';
import { ConfirmDialogOpenEvent } from '@leavittsoftware/titanium-dialog/lib/confirm-dialog-open-event';

/* playground-fold */
@customElement('confirm-dialog-playground')
export class ConfirmDialogPlayground extends LitElement {
  @query('confirm-dialog') dialog;

  firstUpdated() {
    this.addEventListener(ConfirmDialogOpenEvent.eventType, async (e: ConfirmDialogOpenEvent) => {
      this.dialog.handleEvent(e);
    });
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
      <p>Default example of confirm-dialog</p>
      <mwc-button
        outlined
        @click=${async () => {
          const confirmationDialogEvent = new ConfirmDialogOpenEvent('Delete the universe?', 'Are you sure you would like to delete the universe?');
          this.dispatchEvent(confirmationDialogEvent);
          if (!(await confirmationDialogEvent.dialogResult)) {
            alert('Universe deletion failed');
            return;
          }
          alert('Universe deletion successful');
        }}
        label="Do Not Push"
      ></mwc-button>

      <confirm-dialog> </confirm-dialog>
    `;
  }
}
