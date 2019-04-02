import '@material/mwc-ripple';

import {animationFrame} from '@polymer/polymer/lib/utils/async';
import {css, customElement, html, LitElement, property} from 'lit-element';

@customElement('titanium-snackbar')
export class TitaniumSnackbar extends LitElement {
  @property({type: String}) message: string;
  @property({type: Boolean, reflect: true}) open: boolean;
  @property({type: Boolean, reflect: true}) opening: boolean;
  @property({type: Boolean, reflect: true}) closing: boolean;

  private _animationTimer: NodeJS.Timer;
  private _animationFrame: number;

  do_open() {
    this.closing = false;
    this.opening = false;

    this._animationFrame = animationFrame.run(() => {
      this.open = true;
      this._animationTimer = setTimeout(() => {
        this.handleAnimationTimerEnd_();
      }, 150);
    });
  }

  do_close() {
    if (!this.open) {
      return;
    }

    cancelAnimationFrame(this._animationFrame);
    this._animationFrame = 0;

    this.closing = true;
    this.open = false;
    this.opening = false;
    clearTimeout(this._animationTimer);
    this._animationTimer = setTimeout(() => {
      this.handleAnimationTimerEnd_();
    }, 75);
  }

  private handleAnimationTimerEnd_() {
    this.opening = false;
    this.closing = false;
  }

  static styles = css`:host {
    display: flex;
    font-family: Roboto, Noto, sans-serif;
    -webkit-font-smoothing: antialiased;
    position: fixed;
    bottom: 0;
    left: 0;
    max-width: 600px;
    margin: 16px;
    padding: 8px;
    border-radius: 8px;
    background: #323232;
    color: #f1f1f1;
    font-size: 14px;

    pointer-events: none;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transform: scale(0.8);
    -ms-transform: scale(0.8);
    transform: scale(0.8);
    opacity: 0;
  }

  :host([opening]),
  :host([open]),
  :host([closing]) {
    display: flex;
  }

  :host([closing]) {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
    -webkit-transition: opacity 75ms 0ms cubic-bezier(0.4, 0, 1, 1);
    -o-transition: opacity 75ms 0ms cubic-bezier(0.4, 0, 1, 1);
    transition: opacity 75ms 0ms cubic-bezier(0.4, 0, 1, 1);
  }

  :host([open]) {
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    transform: scale(1);
    -webkit-transition: opacity 150ms 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1);
    transition: opacity 150ms 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1);
    -o-transition: opacity 150ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1);
    transition: opacity 150ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1);
    transition: opacity 150ms 0ms cubic-bezier(0, 0, 0.2, 1), transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1);
    opacity: 1;
    pointer-events: auto;
  }

  span {
    align-self: center;
    flex: 1 1 auto;
    margin: 8px;
  }

  a {
    display: block;
    cursor: pointer;
    align-self: flex-end;
    text-decoration: none;
    color: var(--app-secondary-color, #3B95FF);
    font-weight: 500;
    padding: 16px;
  }`;

  render() {
    return html`<span>${this.message}</span>
    <a @click=${(e: Event) => {
      e.preventDefault();
      this.do_close();
    }}> CLOSE<mwc-ripple></mwc-ripple></a>`;
  }
}