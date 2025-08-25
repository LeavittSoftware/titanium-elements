import '@material/web/dialog/dialog';
import '@material/web/button/text-button';
import '@material/web/button/filled-tonal-button';

import { css, html, LitElement, nothing } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { MdDialog } from '@material/web/dialog/dialog';
import { DOMEvent } from '../types/dom-event';
import { p } from '../styles/p';
import { dialogZIndexHack } from '../hacks/dialog-zindex-hack';
import { dialogCloseNavigationHack, dialogOpenNavigationHack } from '../hacks/dialog-navigation-hack';

@customElement('titanium-confirmation-dialog')
export default class TitaniumConfirmationDialog extends LitElement {
  @property({ type: String }) accessor text: string;
  @property({ type: String }) accessor headline: string;
  @property({ type: String, attribute: 'confirm-action-text' }) accessor confirmActionText: string = 'Confirm';
  @property({ type: String, attribute: 'cancel-action-text' }) accessor cancelActionText: string = 'Cancel';

  @query('md-dialog') protected accessor dialog!: MdDialog;

  #resolve: (value: 'confirmed' | 'cancel') => void;

  open = async (headline: string, text: string) => {
    this.headline = headline;
    this.text = text;
    this.dialog.returnValue = '';
    this.dialog.show();

    return await new Promise<'confirmed' | 'cancel'>((resolve) => {
      this.#resolve = resolve;
    });
  };

  static styles = [
    p,
    css`
      main {
        display: grid;
        padding: 6px 24px 0 24px;
        gap: 12px;
      }

      md-dialog {
        max-width: 550px;
        max-height: calc(100vh - 24px);
      }

      b,
      strong {
        font-weight: 500;
      }
    `,
  ];

  render() {
    return html`
      <md-dialog
        @open=${(e: DOMEvent<MdDialog>) => {
          dialogZIndexHack(e.target);
          dialogOpenNavigationHack(e.target);
        }}
        @close=${(e: DOMEvent<MdDialog>) => {
          dialogCloseNavigationHack(e.target);
          if (e.target.returnValue === 'confirmed') {
            return this.#resolve('confirmed');
          }
          return this.#resolve('cancel');
        }}
      >
        <div slot="headline">${this.headline}</div>
        <main slot="content" part="content-container">
          ${this.text ? html`<p>${this.text}</p>` : nothing}
          <slot></slot>
        </main>
        <div slot="actions">
          <md-text-button @click=${() => this.dialog.close('cancel')}>${this.cancelActionText}</md-text-button>
          <md-filled-tonal-button @click=${() => this.dialog.close('confirmed')}>${this.confirmActionText}</md-filled-tonal-button>
        </div>
      </md-dialog>
    `;
  }
}
