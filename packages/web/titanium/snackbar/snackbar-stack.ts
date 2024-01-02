import { HttpError } from '../../leavitt/api-service/HttpError';
import { LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { SimpleSnackbar } from './snackbars/simple-snackbar';

import './snackbars/simple-snackbar';
import './snackbars/http-error-snackbar';
import '@material/web/button/text-button';
import { SnackbarOptions } from './types/snackbar-options';
import { ShowSnackbarEvent } from './show-snackbar-event';
import { HttpErrorSnackbar } from './snackbars/http-error-snackbar';

/**
 *  Stackable snackbar container.
 *
 * @element titanium-snackbar-stack
 *
 */

@customElement('titanium-snackbar-stack')
export class SnackbarStack extends LitElement {
  @property({ type: Object }) accessor eventListenerTarget: HTMLElement | Document | undefined;

  SnackbarStack: (SimpleSnackbar | HttpErrorSnackbar)[] = [];

  connectedCallback() {
    (this.eventListenerTarget || this.getRootNode()).addEventListener(ShowSnackbarEvent.eventName, (e: ShowSnackbarEvent) => {
      e.stopImmediatePropagation();
      this.open(e.SnackbarMessage, e.SnackbarOptions);
    });
  }

  async open(message: string | Partial<HttpError>, options?: SnackbarOptions) {
    let closeReason: Promise<string>;
    let popover: SimpleSnackbar | HttpErrorSnackbar;

    if (typeof message === 'string') {
      const html = '<titanium-simple-snackbar newest></titanium-simple-snackbar>';
      this.insertAdjacentHTML('beforeend', html);
      const normalPopover = this.querySelector('titanium-simple-snackbar[newest]') as SimpleSnackbar;
      normalPopover.removeAttribute('newest');

      if (options) {
        options.close = (reason) => normalPopover.close(reason);
      }

      this.SnackbarStack.unshift(normalPopover);
      closeReason = normalPopover.show(message, options);
      popover = normalPopover;
    } else {
      let httpPopover = this.querySelector('titanium-http-error-snackbar') as HttpErrorSnackbar;
      if (!httpPopover) {
        const html = '<titanium-http-error-snackbar></titanium-http-error-snackbar>';
        this.insertAdjacentHTML('beforeend', html);
        httpPopover = this.querySelector('titanium-http-error-snackbar') as HttpErrorSnackbar;
        this.SnackbarStack.unshift(httpPopover);
        closeReason = httpPopover.show(message);
      } else {
        httpPopover.addError(message);
        return;
      }

      if (options) {
        options.close = (reason) => httpPopover.close(reason);
      }
      popover = httpPopover;
    }

    // Show the popover
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
