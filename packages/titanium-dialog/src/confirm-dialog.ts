import { css, html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import '@material/mwc-button';
import '@material/mwc-dialog';

import { Dialog } from '@material/mwc-dialog';
import { ConfirmDialogOpenEvent } from './confirm-dialog-open-event';
import { p } from '@leavittsoftware/titanium-styles';

@customElement('confirm-dialog')
export default class ConfirmDialogElement extends LitElement {
  @state() private text: string;
  @state() private header: string;
  @query('mwc-dialog') private dialog!: Dialog;

  /**
   * This method is used to set up the event listener to capture the confirm dialog open event
   * You can skip using this method and set up the event listener yourself (recommended)
   */
  listenOn(el: HTMLElement) {
    el.addEventListener(ConfirmDialogOpenEvent.eventType, async (event: ConfirmDialogOpenEvent) => {
      this.header = event.header;
      this.text = event.text;

      if (this.dialogOpenPromise) {
        this.dialog.close();
        this.dialogOpenPromise(false);
      }
      this.dialogOpenPromise = event.resolver;
    });
  }

  private dialogOpenPromise: ((confirmed: boolean) => void) | null = null;

  /**
   * This method is used after capturing the confirm dialog open event
   * usually in the same class where the confirm-dialog element is used.
   * After capturing the event pass it directly into this method `this.dialog.handleEvent(e);`
   */
  async handleEvent(event: ConfirmDialogOpenEvent) {
    this.header = event.header;
    this.text = event.text;

    if (this.dialogOpenPromise) {
      this.dialog.close();
      this.dialogOpenPromise(false);
    }
    this.dialogOpenPromise = event.resolver;
    this.dialog.show();
  }

  static styles = [
    p,
    css`
      :host {
        --mdc-dialog-max-width: 350px;
      }
    `,
  ];

  render() {
    return html`
      <mwc-dialog heading=${this.header}>
        <p>${this.text}</p>
        <mwc-button
          slot="secondaryAction"
          @click=${() => {
            this.dialog.close();
            this.dialogOpenPromise?.(false);
          }}
          label="CANCEL"
        ></mwc-button>
        <mwc-button
          slot="primaryAction"
          @click=${() => {
            this.dialog.close();
            this.dialogOpenPromise?.(true);
          }}
          label="CONFIRM"
        ></mwc-button>
      </mwc-dialog>
    `;
  }
}
