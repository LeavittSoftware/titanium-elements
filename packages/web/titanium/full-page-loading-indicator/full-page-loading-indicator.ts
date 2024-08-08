import { css, html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { PendingStateEvent } from '../types/pending-state-event';

import '@material/web/progress/linear-progress';

/**
 * A simple full-screen veil with loading indicator that uses promise driven pending-state-events
 *
 * @element titanium-full-page-loading-indicator
 *
 *
 */
@customElement('titanium-full-page-loading-indicator')
export class TitaniumFullPageLoadingIndicator extends LitElement {
  @state() private accessor open: boolean;

  #openDelayTimer: number;
  #closeDelayTimer: number;

  //Promises faster than this do not cause the scrim to open at all
  //Prevents flicker for fast promises
  #openDelay: number = 75;

  // min time scrim has to remain open
  #minTimeOpen: number = 350;
  #timeOpen: number;
  #openCount = 0;

  firstUpdated() {
    this.popover = 'manual';
    this.addEventListener('toggle', (e: ToggleEvent) => (this.open = e.newState === 'open'));

    window.addEventListener(PendingStateEvent.eventType, async (e: PendingStateEvent) => {
      this.#open();
      this.#openCount++;
      try {
        await e.detail.promise;
      } finally {
        this.#openCount--;
        if (this.#openCount === 0) {
          this.#close();
        }
      }
    });
  }

  #open() {
    window.clearTimeout(this.#openDelayTimer);

    //If re-opened while close timer is running, prevent the close
    window.clearTimeout(this.#closeDelayTimer);

    this.#openDelayTimer = window.setTimeout(() => {
      this.#timeOpen = performance.now();
      if (this.showPopover) {
        this.showPopover();
      } else {
        this.open = true;
      }
      this.style.display = 'block';
    }, this.#openDelay);
  }

  #close() {
    window.clearTimeout(this.#openDelayTimer);
    const totalTimeOpened = performance.now() - this.#timeOpen;
    const closeDelay = Math.max(this.#minTimeOpen - totalTimeOpened, 0);

    this.#closeDelayTimer = window.setTimeout(() => {
      if (this.hidePopover) {
        this.hidePopover();
      } else {
        this.open = false;
      }
      this.style.display = 'none';
    }, closeDelay);
  }

  static styles = css`
    :host {
      width: 100%;
      height: 100%;
      max-width: 100vw;
      max-height: 100vh;

      border: 0;
      inset: unset;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      margin: 0;
      padding: 0;
      background: transparent;
    }

    :host::backdrop {
      background-color: var(--md-sys-color-scrim, #000);
      backdrop-filter: blur(6px);
    }

    :host(:popover-open)::backdrop {
      opacity: 0.32;
    }

    md-linear-progress {
      position: absolute;
      width: 100%;
      top: 0;
      right: 0;
      left: 0;
    }
  `;

  render() {
    return html` <md-linear-progress ?indeterminate=${this.open} ?hide=${!this.open}></md-linear-progress> `;
  }
}
