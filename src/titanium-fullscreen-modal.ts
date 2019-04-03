import '@vaadin/vaadin-button/theme/material/vaadin-button';
import {animationFrame} from '@polymer/polymer/lib/utils/async';

import {css, customElement, html, LitElement, property} from 'lit-element';

@customElement('titanium-fullscreen-modal')
export class TitaniumFullscreenModal extends LitElement {
  @property({type: Boolean, reflect: true}) opened: boolean;
  @property({type: Boolean, reflect: true}) thirdline: boolean;
  @property({type: Boolean, reflect: true}) opening: boolean;
  @property({type: Boolean, reflect: true}) closing: boolean;
  @property({type: String}) message: string;
  @property({type: String}) title: string;
  @property({type: String}) cancelText: string = 'CANCEL';
  @property({type: String}) confirmText: string = 'YES';

  private _previousOverflow: string|null;

  private _animationTimer: NodeJS.Timer;
  private _animationFrame: number;
  private resolve;

  open() {
    return new Promise((resolve) => {
      this._previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      this.resolve = resolve;
      this.closing = false;
      this.opening = false;

      this._animationFrame = animationFrame.run(() => {
        this.opened = true;
        this._animationTimer = setTimeout(() => {
          this.handleAnimationTimerEnd_();
        }, 150);
      });
    });
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
      document.body.style.overflow = this._previousOverflow;
    }, 75);

    this.resolve();
  }

  private handleAnimationTimerEnd_() {
    this.opening = false;
    this.closing = false;
  }

  static styles = css`:host {
          display: none;
          position: fixed;
          top: 0;
          right: 0;
          left: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.32);
          z-index: 9;

          flex-direction: column;
          align-content: center;
          justify-content: center;         
        }
        
        :host([opening]),
        :host([opened]),
        :host([closing]) {
          display: flex;
        }

        dialog-container {
          display: flex;
          flex-direction: column;
          align-self: center;

          margin: 24px;
          background: #fff;
          -webkit-box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);
          box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);
          overflow: hidden;
          border-radius: 4px;

          -webkit-transform: scale(0.8);
          -ms-transform: scale(0.8);
          transform: scale(0.8);
          opacity: 0;
        }


        :host([opening]) dialog-container,
        :host([opened]) dialog-container,
        :host([closing]) dialog-container{
          display: flex;
        }

        :host([closing]) dialog-container {
          -webkit-transform: scale(1);
          -ms-transform: scale(1);
          transform: scale(1);
          -webkit-transition: opacity 75ms 0ms cubic-bezier(0.4, 0, 1, 1);
          -o-transition: opacity 75ms 0ms cubic-bezier(0.4, 0, 1, 1);
          transition: opacity 75ms 0ms cubic-bezier(0.4, 0, 1, 1);
        }

        :host([opened]) dialog-container {
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

       
        dialog-content {
          display: flex;
          flex-direction: column;
          padding: 24px;
          align-self: center;
          overflow-y: auto;
        }

        action-buttons {
          display: flex;
          justify-content: flex-end;
        }

        [hidden] {
            display:none;
        }`;

  render() {
    return html`<dialog-container>
      <dialog-content>${this.message}</dialog-content>
      <action-buttons>
        <vaadin-button theme="tertiary" @click=${this.close}>${this.cancelText}</vaadin-button>
        <vaadin-button theme="tertiary" confirm @click=${this.close}>${this.confirmText}</vaadin-button>
      </action-buttons>
    </dialog-container>`;
  }
}