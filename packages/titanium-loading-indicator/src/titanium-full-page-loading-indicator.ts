import { css, html, LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import '@leavittsoftware/titanium-progress';
import { PendingStateEvent } from './pending-state-event';

/**
 * A simple full-screen veil with loading indicator.
 *
 * @element titanium-full-page-loading-indicator
 *
 *
 */
@customElement('titanium-full-page-loading-indicator')
export class TitaniumFullPageLoadingIndicatorElement extends LitElement {
  @property({ type: Boolean, reflect: true }) protected opened: boolean;
  @property({ type: Boolean, reflect: true }) protected opening: boolean;
  @property({ type: Boolean, reflect: true }) protected closing: boolean;

  #animationTimer: number;
  #animationFrame: number;
  #openDelayTimer: number;
  #closeDelayTimer: number;
  #openDelay: number = 75;
  #minTimeOpen: number = 350;
  #timeOpen;
  #openCount = 0;

  firstUpdated() {
    window.addEventListener(PendingStateEvent.eventType, async (e: PendingStateEvent) => {
      this.#open();
      this.#openCount++;
      try {
        await e.detail.promise;
      } catch {
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
      this.closing = false;
      this.opened = false;
      this.opening = true;

      document.body.style.overflow = 'hidden';

      this.#runNextAnimationFrame_(() => {
        if (this.closing) {
          return;
        }
        this.opened = true;
        this.#animationTimer = window.setTimeout(() => {
          this.#handleAnimationTimerEnd_();
        }, 50);
      });
    }, this.#openDelay);
  }

  #close() {
    window.clearTimeout(this.#openDelayTimer);
    const totalTimeOpened = performance.now() - this.#timeOpen;
    const closeDelay = Math.max(this.#minTimeOpen - totalTimeOpened, 0);

    this.#closeDelayTimer = window.setTimeout(() => {
      cancelAnimationFrame(this.#animationFrame);
      this.#animationFrame = 0;

      this.closing = true;
      this.opened = false;
      this.opening = false;
      clearTimeout(this.#animationTimer);
      this.#animationTimer = window.setTimeout(() => {
        this.#handleAnimationTimerEnd_();
        document.body.style.overflow = '';
      }, 150);
    }, closeDelay);
  }

  #handleAnimationTimerEnd_() {
    this.opening = false;
    this.closing = false;
  }

  /**
   * Runs the given logic on the next animation frame, using setTimeout to factor in Firefox reflow behavior.
   */
  #runNextAnimationFrame_(callback: () => void) {
    cancelAnimationFrame(this.#animationFrame);
    this.#animationFrame = requestAnimationFrame(() => {
      this.#animationFrame = 0;
      clearTimeout(this.#animationFrame);
      this.#animationFrame = window.setTimeout(callback, 0);
    });
  }

  static styles = css`
    :host {
      display: none;
      position: relative;
      position: fixed;
      z-index: 19;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #eee;
      opacity: 0;
      -webkit-transition: opacity 75ms linear;
      -o-transition: opacity 75ms linear;
      transition: opacity 75ms linear;
    }

    :host([opening]),
    :host([closing]),
    :host([opened]) {
      display: block;
      z-index: 7;
    }

    :host([opening]) {
      -webkit-transition: opacity 50ms linear;
      -o-transition: opacity 50ms linear;
      transition: opacity 50ms linear;
    }

    :host([closing]) {
      -webkit-transition: opacity 150ms linear;
      -o-transition: opacity 150ms linear;
      transition: opacity 150ms linear;
    }

    :host([opened]) {
      opacity: 0.6;
    }

    titanium-progress {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
    }
  `;

  render() {
    return html` <titanium-progress ?disabled=${!this.opening && !this.closing && !this.opened}></titanium-progress> `;
  }
}

