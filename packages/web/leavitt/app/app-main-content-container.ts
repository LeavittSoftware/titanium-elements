import '../../titanium/circle-loading-indicator/circle-loading-indicator';

import { LitElement, css, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { mainMenuPositionContext } from './contexts/main-menu-position-context';
import { consume } from '@lit/context';

@customElement('leavitt-app-main-content-container')
export class LeavittAppContentContainer extends LitElement {
  @query('scroll-container') accessor scrollContainer!: HTMLDivElement | null;
  @property({ type: Object }) private accessor pendingStateElement: Element | null = null;
  @consume({ context: mainMenuPositionContext, subscribe: true })
  @property({ type: String, reflect: true, attribute: 'main-menu-position' })
  public mainMenuPosition: string = 'full';

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

      /* The host squares off in drawer mode, so the scroller has to as well — its
         rounded overflow clip is otherwise visible at the page's top corners once
         there is enough content to scroll. Safari does not like nested selectors on
         host, so this stays flat. */
      :host([main-menu-position='drawer']) scroll-container {
        border-radius: 0;
      }
    `,
  ];

  render() {
    return html`
      <titanium-circle-loading-indicator part="loading-indicator" .pendingStateElement=${this.pendingStateElement}></titanium-circle-loading-indicator>
      <scroll-container part="scroll-container"><slot></slot></scroll-container>
    `;
  }
}
