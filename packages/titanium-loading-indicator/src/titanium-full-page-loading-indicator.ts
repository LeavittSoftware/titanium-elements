import { customElement, html, LitElement, property, css } from 'lit-element';
import '@leavittsoftware/titanium-progress';

/**
 * A simple full-screen veil with loading indicator.
 *
 * @element titanium-full-page-loading-indicator
 *
 */
@customElement('titanium-full-page-loading-indicator')
export class TitaniumFullPageLoadingIndicatorElement extends LitElement {
  @property({ type: Boolean, reflect: true }) protected opened: boolean;
  @property({ type: Boolean, reflect: true }) protected opening: boolean;
  @property({ type: Boolean, reflect: true }) protected closing: boolean;

  private _animationTimer: number;
  private _animationFrame: number;
  private _openDelayTimer: number;
  private _openDelay: number = 75;
  private _minTimeOpen: number = 350;
  private _timeOpen;
  private _openCount = 0;

  firstUpdated() {
    window.addEventListener('pending-state', async (e: CustomEvent<{ promise: Promise<unknown> }>) => {
      this._open();
      this._openCount++;
      await e.detail.promise;
      this._openCount--;
      if (this._openCount === 0) {
        this._close();
      }
    });
  }

  private _open() {
    window.clearTimeout(this._openDelayTimer);
    this._openDelayTimer = window.setTimeout(() => {
      this._timeOpen = performance.now();
      this.closing = false;
      this.opened = false;
      this.opening = true;

      if (window.innerWidth > document.documentElement.clientWidth) {
        document.body.style.overflowY = 'scroll';
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
      }

      this.runNextAnimationFrame_(() => {
        this.opened = true;
        this._animationTimer = window.setTimeout(() => {
          this.handleAnimationTimerEnd_();
        }, 50);
      });
    }, this._openDelay);
  }

  private _close() {
    window.clearTimeout(this._openDelayTimer);
    const totalTimeOpened = performance.now() - this._timeOpen;
    const closeDelay = totalTimeOpened > this._minTimeOpen ? 0 : this._minTimeOpen - totalTimeOpened || 0;

    window.setTimeout(() => {
      cancelAnimationFrame(this._animationFrame);
      this._animationFrame = 0;

      this.closing = true;
      this.opened = false;
      this.opening = false;
      clearTimeout(this._animationTimer);
      this._animationTimer = window.setTimeout(() => {
        this.handleAnimationTimerEnd_();
        document.body.style.overflowY = '';
        document.body.style.position = '';
        document.body.style.width = '';
      }, 150);
    }, closeDelay);
  }

  private handleAnimationTimerEnd_() {
    this.opening = false;
    this.closing = false;
  }

  /**
   * Runs the given logic on the next animation frame, using setTimeout to factor in Firefox reflow behavior.
   */
  private runNextAnimationFrame_(callback: () => void) {
    cancelAnimationFrame(this._animationFrame);
    this._animationFrame = requestAnimationFrame(() => {
      this._animationFrame = 0;
      clearTimeout(this._animationFrame);
      this._animationFrame = window.setTimeout(callback, 0);
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
    return html`
      <titanium-progress ?disabled=${!this.opening && !this.closing && !this.opened}></titanium-progress>
    `;
  }
}
