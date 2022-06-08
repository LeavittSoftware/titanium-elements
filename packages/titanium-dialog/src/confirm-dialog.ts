import { css, html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import '@material/mwc-button';
import './titanium-dialog';

import { ConfirmDialogOpenEvent } from './confirm-dialog-open-event';
import { p } from '@leavittsoftware/titanium-styles';
import { TitaniumDialogElement } from './titanium-dialog';

@customElement('confirm-dialog')
export default class ConfirmDialogElement extends LitElement {
  @state() private text: string;
  @state() private header: string;
  @query('titanium-dialog') private dialog!: TitaniumDialogElement;

  /**
   * This method is used to set up the event listener to capture the confirm dialog open event
   * You can skip using this method and set up the event listener yourself (recommended)
   */
  listenOn(el: HTMLElement) {
    el.addEventListener(ConfirmDialogOpenEvent.eventType, async (event: ConfirmDialogOpenEvent) => {
      this.header = event.header;
      this.text = event.text;

      event.resolver((await this.dialog.open()) === 'confirmed');
    });
  }

  /**
   * This method is used after capturing the confirm dialog open event
   * usually in the same class where the confirm-dialog element is used.
   * After capturing the event pass it directly into this method `this.dialog.handleEvent(e);`
   */
  async handleEvent(event: ConfirmDialogOpenEvent) {
    this.header = event.header;
    this.text = event.text;

    event.resolver((await this.dialog.open()) === 'confirmed');
  }

  static styles = [
    p,
    css`
      :host {
        --titanium-dialog-max-width: 350px;
      }
    `,
  ];

  render() {
    return html`
      <titanium-dialog full-width focus-trap header=${this.header}>
        <p>${this.text}</p>
        <mwc-button
          slot="secondaryAction"
          @click=${() => {
            this.dialog.close('cancel');
          }}
          label="CANCEL"
        ></mwc-button>
        <mwc-button
          slot="primaryAction"
          @click=${() => {
            this.dialog.close('confirmed');
          }}
          label="CONFIRM"
        ></mwc-button>
      </titanium-dialog>
    `;
  }
}
