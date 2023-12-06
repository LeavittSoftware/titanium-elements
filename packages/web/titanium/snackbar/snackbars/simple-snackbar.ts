import { css, html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { SnackbarOptions } from '../types/snackbar-options';

import '@material/web/button/text-button';
/**
 * Material design snackbar.
 *
 */

@customElement('titanium-simple-snackbar')
export class SimpleSnackbar extends LitElement {
  #resolve: (reason: string) => void;

  /**
   * Firefox support
   */
  @property({ type: Boolean, reflect: true }) private accessor open: boolean;

  @property({ type: Boolean, reflect: true }) private accessor noAction: boolean;
  @property({ type: String }) private accessor actionText: string;
  @property({ type: String }) private accessor message: string | TemplateResult;

  constructor() {
    super();
    this.popover = 'manual';
  }

  show(message: string, options?: SnackbarOptions) {
    //Firefox support
    this.showPopover ? this.showPopover() : (this.open = true);

    this.message = options?.overrideTemplate ? options?.overrideTemplate : message;
    this.noAction = options?.noAction ?? false;
    this.actionText = options?.actionText ?? 'Dismiss';

    if (options?.autoHide) {
      const duration = typeof options?.autoHide === 'number' ? options?.autoHide : 5000;
      this.#autoCloseTimeout = window.setTimeout(() => this.close('auto-close'), duration);
    }

    return new Promise<string>((resolve) => {
      this.#resolve = resolve;
    });
  }

  #autoCloseTimeout = 0;
  close(reason: string = '') {
    clearTimeout(this.#autoCloseTimeout);
    //Firefox support
    this.hidePopover ? this.hidePopover() : (this.open = false);
    this.#resolve(reason);
  }

  static styles = [
    css`
      :host {
        display: none;
      }

      :host([popover]),
      :host([open]) {
        display: flex;

        position: fixed;
        inset: unset;
        left: 0;
        bottom: 0;
        border: 0;

        min-width: 240px;
        flex-direction: column;
        font-family: Roboto, Noto, sans-serif;
        -webkit-font-smoothing: antialiased;
        margin: 16px;
        padding: 8px;
        border-radius: 4px;
        background: var(--md-sys-color-inverse-surface);
        color: var(--md-sys-color-inverse-on-surface);
        font-size: 14px;
        -webkit-box-shadow:
          0 3px 5px -1px rgba(0, 0, 0, 0.2),
          0 6px 10px 0 rgba(0, 0, 0, 0.14),
          0 1px 18px 0 rgba(0, 0, 0, 0.12);
        box-shadow:
          0 3px 5px -1px rgba(0, 0, 0, 0.2),
          0 6px 10px 0 rgba(0, 0, 0, 0.14),
          0 1px 18px 0 rgba(0, 0, 0, 0.12);

        -webkit-box-sizing: border-box;
        box-sizing: border-box;
      }

      /* Firefox non-popover support */
      :host([open]) {
        z-index: 99;
      }

      div[main] {
        max-width: 600px;
        overflow: hidden;
        margin: 12px;
      }

      md-text-button {
        --md-text-button-label-text-color: var(--md-sys-color-inverse-primary);
        align-self: flex-end;
      }

      [hidden] {
        display: none !important;
      }
    `,
  ];

  render() {
    return html`
      <div main>${this.message}</div>
      <md-text-button ?hidden=${this.noAction} @click=${() => this.close('dismiss')}>${this.actionText} </md-text-button>
    `;
  }
}
