import { HttpError } from '../../leavitt/api-service/HttpError';
import { css, LitElement } from 'lit';
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
    super.connectedCallback();
    (this.eventListenerTarget || this.getRootNode()).addEventListener(ShowSnackbarEvent.eventName, (e: ShowSnackbarEvent) => {
      e.stopImmediatePropagation();
      this.open(e.SnackbarMessage, e.SnackbarOptions);
    });
  }

  static styles = [
    css`
      :host {
        display: contents;
      }
    `,
  ];

  async open(message: string | Partial<HttpError>, options?: SnackbarOptions) {
    let closeReason: Promise<string>;
    let popover: SimpleSnackbar | HttpErrorSnackbar;

    if (typeof message === 'string') {
      const normalPopover = document.createElement('titanium-simple-snackbar');
      normalPopover.popover = 'manual';
      this.shadowRoot?.appendChild(normalPopover);

      if (options) {
        options.close = (reason) => normalPopover.close(reason);
      }

      this.SnackbarStack.unshift(normalPopover);
      closeReason = normalPopover.show(message, options);
      popover = normalPopover;
    } else {
      let httpPopover = this.shadowRoot?.querySelector<HttpErrorSnackbar>('titanium-http-error-snackbar');
      if (!httpPopover) {
        httpPopover = document.createElement('titanium-http-error-snackbar');
        this.shadowRoot?.appendChild(httpPopover);
        httpPopover.popover = 'manual';
        this.SnackbarStack.unshift(httpPopover);

        closeReason = httpPopover.show(message, options);
      } else {
        httpPopover.addError(message, options);
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
