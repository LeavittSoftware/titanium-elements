import '@material/mwc-ripple';

import {animationFrame} from '@polymer/polymer/lib/utils/async';
import {css, customElement, html, LitElement, property} from 'lit-element';

export let TitaniumSnackbarSingleton = {
  open(message: string) {
    alert(message);
    console.warn(`TitaniumSnackbar.open called before an instance was created. Did you forget to add the TitaniumSnackbar element to your project?`);
  },
  close() {
    console.warn(`TitaniumSnackbar.close called before an instance was created. Did you forget to add the TitaniumSnackbar element to your project?`);
  }
} as TitaniumSnackbar;

@customElement('titanium-snackbar')
export class TitaniumSnackbar extends LitElement {
  @property({type: String}) private message: string;
  @property({type: String}) private actionText: string = 'DISMISS';
  @property({type: Boolean, reflect: true}) protected opened: boolean;
  @property({type: Boolean, reflect: true}) protected thirdline: boolean;
  @property({type: Boolean, reflect: true}) protected opening: boolean;
  @property({type: Boolean, reflect: true}) protected closing: boolean;

  private _animationTimer: NodeJS.Timer;
  private _animationFrame: number;
  private resolve;
  private isComponent = true;

  constructor() {
    super();
    if (!TitaniumSnackbarSingleton || !TitaniumSnackbarSingleton.isComponent) {
      TitaniumSnackbarSingleton = this;
    } else {
      console.warn('More than one <titanium-snackbar> element has been used in this web application, consider removing one.')
    }
  }

  updated(changedProps) {
    if (changedProps.has('actionText') && changedProps.get('actionText') !== this.actionText) {
      this.thirdline = !!this.actionText && this.actionText.length > 8;
    }
  }

  open(message: string, actionText?: string) {
    return new Promise((resolve) => {
      if (message) {
        this.message = message;
      }

      if (actionText) {
        this.actionText = actionText;
      }

      this.resolve = resolve;
      this.closing = false;
      this.opening = false;

      this._animationFrame = animationFrame.run(() => {
        this.opened = true;
        this._animationTimer = setTimeout(() => {
          this.handleAnimationTimerEnd_();
        }, 150);
      });
    })
  }

  close() {
    if (!this.opened) {
      return;
    }

    cancelAnimationFrame(this._animationFrame);
    this._animationFrame = 0;

    this.closing = true;
    this.opened = false;
    this.opening = false;
    clearTimeout(this._animationTimer);
    this._animationTimer = setTimeout(() => {
      this.handleAnimationTimerEnd_();
    }, 75);

    this.resolve();
  }

  private handleAnimationTimerEnd_() {
    this.opening = false;
    this.closing = false;
  }

  static styles = css`:host {
    display: flex;
    flex-direction: row;
    font-family: Roboto, Noto, sans-serif;
    -webkit-font-smoothing: antialiased;
    position: fixed;
    bottom: 0;
    left: 0;
    max-width: 600px;
    margin: 16px;
    padding: 8px;
    border-radius: 4px;
    background: var(--titanium-snackbar-background-color, #323232); 
    color: var(--titanium-snackbar-text-color, #f1f1f1); 
    font-size: 14px;
    -webkit-box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);
    box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);

    pointer-events: none;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transform: scale(0.8);
    -ms-transform: scale(0.8);
    transform: scale(0.8);
    opacity: 0;
  }

  :host([thirdline]) {
    flex-direction: column;
  }

  :host([opening]),
  :host([opened]),
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

  :host([opened]) {
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
    color: var(--titanium-snackbar-action-color, #3b95ff); 
    font-weight: 600;
    padding: 16px;
    user-select: none;
  }`;

  render() {
    return html`<span>${this.message}</span>
    <a @click=${(e: Event) => {
      e.preventDefault();
      this.close();
    }}> ${this.actionText}<mwc-ripple></mwc-ripple></a>`;
  }
}
