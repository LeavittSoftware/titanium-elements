import { css, html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import '@material/mwc-button';

import { Dialog } from '@material/mwc-dialog';
import { ConfirmDialogOpenEvent } from './confirm-dialog-open-event';
import { p } from '@leavittsoftware/titanium-styles';

@customElement('confirm-dialog')
export default class ConfirmDialogElement extends LitElement {
  @state() private text: string;
  @state() private header: string;
  @query('mwc-dialog') private dialog!: Dialog;

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
