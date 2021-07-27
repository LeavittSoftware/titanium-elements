import { TitaniumDialogElement } from './titanium-dialog';
import { css, customElement, html, LitElement, query, state } from 'lit-element';

import './titanium-dialog';
import '@material/mwc-button';
import { ConfirmDialogOpenEvent } from './confirm-dialog-open-event';

@customElement('confirm-dialog')
export default class ConfirmDialogElement extends LitElement {
  @state() private text: string;
  @state() private header: string;
  @query('titanium-dialog') private dialog!: TitaniumDialogElement;

  listenOn(el: HTMLElement) {
    el.addEventListener(ConfirmDialogOpenEvent.eventType, async (event: ConfirmDialogOpenEvent) => {
      this.header = event.header;
      this.text = event.text;

      event.resolver((await this.dialog.open()) === 'confirmed');
    });
  }

  async handleEvent(event: ConfirmDialogOpenEvent) {
    this.header = event.header;
    this.text = event.text;

    event.resolver((await this.dialog.open()) === 'confirmed');
  }

  static styles = css`
    :host {
      --titanium-dialog-max-width: 400px;
    }
  `;

  render() {
    return html`
      <titanium-dialog fullwidth header=${this.header}>
        <section slot="content">${this.text}</section>
        <div slot="actions">
          <mwc-button slot="actions" @click=${() => this.dialog.close('cancel')} label="CANCEL"></mwc-button>
          <mwc-button slot="actions" @click=${() => this.dialog.close('confirmed')} label="CONFIRM"></mwc-button>
        </div>
      </titanium-dialog>
    `;
  }
}
