import './circle-loading-indicator';

import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { mainMenuPositionContext } from './contexts/main-menu-position-context';
import { consume } from '@lit/context';

@customElement('leavitt-app-main-content-container')
export class LeavittAppContentContainer extends LitElement {
  @property({ type: Object }) private accessor pendingStateElement: Element | null;

  @consume({ context: mainMenuPositionContext, subscribe: true })
  @property({ type: String, reflect: true, attribute: 'main-menu-position' })
  public mainMenuPosition: string;

  static styles = [
    css`
      :host {
        display: grid;
        border-radius: 28px;
        background-color: var(--md-sys-color-surface-container-lowest);
        height: calc(100dvh - (64px + 12px));
        box-sizing: border-box;
        overflow: hidden;

        position: relative;

        margin-right: 16px;
      }

      :host([main-menu-position='drawer']) {
        border-radius: 0;
        height: calc(100dvh - (54px + 12px));
        margin-right: 0;
      }

      scroll-container {
        display: grid;
        overflow-y: auto;

        scrollbar-color: var(--md-sys-color-surface-container-highest) transparent;
        border-radius: 28px;
      }
    `,
  ];

  render() {
    return html`
      <titanium-circle-loading-indicator .pendingStateElement=${this.pendingStateElement}></titanium-circle-loading-indicator>
      <scroll-container><slot></slot></scroll-container>
    `;
  }
}
