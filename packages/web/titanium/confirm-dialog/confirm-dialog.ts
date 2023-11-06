import { css, html, LitElement, TemplateResult } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import '@material/web/dialog/dialog';
import '@material/web/button/filled-tonal-button';
import '@material/web/button/text-button';

import { ConfirmDialogOpenEvent } from './confirm-dialog-open-event';
import { p } from '../styles/p';
import { MdDialog } from '@material/web/dialog/dialog';
import { DOMEvent } from '../types/dom-event';

@customElement('titanium-confirm-dialog')
export default class TitaniumConfirmDialog extends LitElement {
  @state() protected text: string | TemplateResult;
  @state() protected headline: string;
  @query('md-dialog') protected dialog!: MdDialog;
  #resolve: (value: 'confirmed' | 'cancel') => void;

  /**
   * This method is used to set up the event listener to capture the confirm dialog open event
   * You can skip using this method and set up the event listener yourself (recommended)
   */
  listenOn(el: HTMLElement) {
    el.addEventListener(ConfirmDialogOpenEvent.eventType, async (event: ConfirmDialogOpenEvent) => {
      this.#openDialogWithEvent(event);
    });
  }

  /**
   * This method is used after capturing the confirm dialog open event
   * usually in the same class where the confirm-dialog element is used.
   * After capturing the event pass it directly into this method `this.dialog.handleEvent(e);`
   */
  async handleEvent(event: ConfirmDialogOpenEvent) {
    this.#openDialogWithEvent(event);
  }

  #openDialogWithEvent = async (event: ConfirmDialogOpenEvent) => {
    this.headline = event.header;
    this.text = event.text;
    this.dialog.returnValue = '';
    this.dialog.show();

    const result = await new Promise<'confirmed' | 'cancel'>((resolve) => {
      this.#resolve = resolve;
    });

    event.resolver(result === 'confirmed');
  };

  static styles = [
    p,
    css`
      p {
        margin: 6px 24px 0 24px;
      }

      md-dialog {
        max-width: 550px;
        max-height: calc(100vh - 24px);
      }
    `,
  ];

  render() {
    return html`
      <md-dialog
        @close=${(e: DOMEvent<MdDialog>) => {
          if (e.target.returnValue === 'cancel' || e.target.returnValue === 'confirmed') {
            return this.#resolve(e.target.returnValue as 'cancel' | 'confirmed');
          }
          e.preventDefault();
        }}
      >
        <div slot="headline">${this.headline}</div>
        <p slot="content">${this.text}</p>
        <div slot="actions">
          <md-text-button
            @click=${() => {
              this.dialog.close('cancel');
            }}
            >CANCEL</md-text-button
          >
          <md-filled-tonal-button
            @click=${() => {
              this.dialog.close('confirmed');
            }}
            >CONFIRM</md-filled-tonal-button
          >
        </div>
      </md-dialog>
    `;
  }
}
