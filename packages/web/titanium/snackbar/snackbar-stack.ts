import { HttpError } from '../../leavitt/api-service/HttpError';
import { LitElement, TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { TitaniumSnackbarPopover } from './snackbar-popover';

import './snackbar-popover';
import '@material/web/button/text-button';
import { SnackbarOptions } from './types/snackbar-options';
import { ShowSnackbarEvent } from './show-snackbar-event';

/**
 *  Stackable snackbar container.
 *
 * @element titanium-snackbar-stack
 *
 * @cssprop {Color} [--titanium-snackbar-background-color=#323232] - Snackbar background color
 * @cssprop {Color} [--titanium-snackbar-text-color=#f1f1f1] - Color of the text in the snackbar
 *
 */

@customElement('titanium-snackbar-stack')
export class TitaniumSnackbarStack extends LitElement {
  SnackbarStack: TitaniumSnackbarPopover[] = [];
  connectedCallback() {
    this.parentNode?.addEventListener(ShowSnackbarEvent.eventName, (e: ShowSnackbarEvent) => {
      e.stopImmediatePropagation();
      this.open(e.SnackbarMessage, e.SnackbarOptions);
    });
  }

  async open(message: string | TemplateResult | HttpError, options?: SnackbarOptions) {
    const html = '<titanium-snackbar-popover newest></titanium-snackbar-popover>';
    this.insertAdjacentHTML('beforeend', html);
    const popover = this.querySelector('titanium-snackbar-popover[newest]') as TitaniumSnackbarPopover;
    popover.removeAttribute('newest');
    this.SnackbarStack.unshift(popover);

    this.appendChild(popover);

    // Show the popover
    const closeReason = popover.show(message, options);
    this.reposition();

    await closeReason;
    this.SnackbarStack.splice(this.SnackbarStack.indexOf(popover), 1);
    popover.remove();

    this.reposition();
    return closeReason;
  }

  dismissAll() {
    this.SnackbarStack.forEach((o) => o.close());
  }

  async reposition() {
    let offset = 0;
    for (let index = 0; index < this.SnackbarStack.length; index++) {
      const snackbar = this.SnackbarStack[index];
      await snackbar.updateComplete;

      if (snackbar.clientHeight === 0) {
        snackbar.close();
      }

      snackbar.style.bottom = `${offset}px`;
      offset += snackbar.clientHeight + 12;
    }
  }
}
