import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '@material/web/progress/circular-progress';
import { PendingStateEvent } from '@leavittsoftware/web/titanium/types/pending-state-event';

/**
 * A simple circle with loading indicator that uses promise driven pending-state-events
 *
 * @element titanium-circle-loading-indicator
 *
 *
 */
@customElement('titanium-circle-loading-indicator')
export class TitaniumCircleLoadingIndicator extends LitElement {
  @property({ type: Object }) accessor pendingStateElement: Element | null;

  @property({ type: Boolean, reflect: true }) private accessor open: boolean;
  @property({ type: Boolean, reflect: true }) private accessor closed: boolean;

  #openDelayTimer: number;
  #closeDelayTimer: number;

  //Promises faster than this do not cause the scrim to open at all
  //Prevents flicker for fast promises
  #openDelay: number = 75;

  // min time scrim has to remain open
  #minTimeOpen: number = 400;
  #timeOpen: number;
  #openCount = 0;

  firstUpdated() {
    const element = this.pendingStateElement ?? this;
    element.addEventListener(PendingStateEvent.eventType, async (e: PendingStateEvent) => {
      e.stopPropagation();
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

      // add the inert attribute to the parent element
      this.parentElement?.setAttribute('inert', '');

      this.open = true;
      this.closed = false;
    }, this.#openDelay);
  }

  #close() {
    window.clearTimeout(this.#openDelayTimer);
    const totalTimeOpened = performance.now() - this.#timeOpen;
    const closeDelay = Math.max(this.#minTimeOpen - totalTimeOpened, 0);

    this.#closeDelayTimer = window.setTimeout(() => {
      this.open = false;
      this.closed = true;
      this.parentElement?.removeAttribute('inert');
    }, closeDelay);
  }

  static styles = css`
    :host {
      display: none;
      opacity: 0;

      position: absolute;
      inset: 0;

      z-index: 1000;
      background-color: rgb(from var(--md-sys-color-scrim, #000) r g b / 0.52);
      backdrop-filter: blur(2px);

      transition:
        display 0.2s ease,
        opacity 0.2s ease;
      transition-behavior: allow-discrete;
    }

    :host([open]) {
      display: grid;
      opacity: 1;

      @starting-style {
        opacity: 0;
      }
    }

    md-circular-progress {
      place-self: center;
    }
  `;

  render() {
    return html` <md-circular-progress ?indeterminate=${this.open} ?hide=${!this.open}></md-circular-progress>`;
  }
}
