import { css, html, LitElement } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { ThemePreference } from '../theme/theme-preference';

import '@material/web/progress/circular-progress';

@customElement('leavitt-service-worker-notifier')
export class LeavittServiceWorkerNotifier extends ThemePreference(LitElement) {
  @query('main') private accessor main: HTMLElement;

  @state() private accessor isLoading: boolean = false;

  #newWorker: ServiceWorker | null;
  #refreshing = false;

  async connectedCallback() {
    super.connectedCallback();
    if ('serviceWorker' in navigator) {
      const originalSW = navigator.serviceWorker.controller;
      const reg = await navigator.serviceWorker.getRegistration();
      if (reg) {
        reg.addEventListener('updatefound', () => {
          this.#newWorker = reg.installing;
          this.#newWorker?.addEventListener('statechange', () => {
            if (this.#newWorker?.state === 'installed' && navigator.serviceWorker.controller) {
              this.#newWorker?.postMessage({ type: 'SKIP_WAITING' });
            }
          });
        });

        if (reg.waiting && navigator.serviceWorker.controller) {
          this.#newWorker = reg.waiting;
          this.#newWorker?.postMessage({ type: 'SKIP_WAITING' });
        }
      }

      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (this.#refreshing) {
          return;
        }

        if (originalSW) {
          this.main.showPopover();
          this.#refreshing = true;
        } else {
          //This is due to a SW taking control for the  first time
        }
      });
    }
  }

  static styles = [
    css`
      :host {
        display: block;
        container-type: inline-size;
      }

      main {
        display: none;
        position: fixed;
        background-color: var(--app-background-color);
        color: var(--md-sys-color-on-background);

        cursor: pointer;

        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;

        grid: 'image text' / auto 1fr;
        align-items: center;
        gap: 16px 12px;

        border: 0;
        padding: 8px;

        @container (max-width: 500px) {
          grid:
            'image' auto
            'text' 1fr / auto;

          justify-items: center;
          text-align: center;
        }
      }

      main::backdrop {
        background-color: var(--app-background-color);
      }

      main:popover-open {
        display: grid;
      }

      md-circular-progress,
      img {
        grid-area: image;
        width: 48px;
        height: 48px;
      }

      h1 {
        font-family: var(--titanium-styles-h1-font-family, Metropolis, Roboto, Noto, sans-serif);
        -webkit-font-smoothing: antialiased;
        font-size: 32px;
        line-height: 34px;
        font-weight: 700;
        letter-spacing: -1px;

        margin: 0;
        padding: 0;

        @container (max-width: 500px) {
          font-size: 24px;
          line-height: 26px;

          margin-bottom: 6px;
        }
      }

      h3 {
        font-family: var(--titanium-styles-h2-font-family, Metropolis, Roboto, Noto, sans-serif);
        -webkit-font-smoothing: antialiased;
        font-size: 16px;
        line-height: 18px;
        font-weight: 300;
        letter-spacing: 0.6px;

        margin: 0;
        padding: 0;
        margin-left: 6px;
      }

      click-blocker {
        display: none;
        position: fixed;
        width: 100vw;
        height: 100vh;
        z-index: 9999;
        left: 0;
        right: 0;
        background: transparent;
        cursor: pointer;
        pointer-events: all;
      }

      main:popover-open + click-blocker {
        display: block;
      }
    `,
  ];

  render() {
    return html`<main popover="manual" @click=${this.handleClick}>
        ${this.isLoading
          ? html`<md-circular-progress indeterminate></md-circular-progress>`
          : html`<img
              src=${this.themePreference === 'dark' ? 'https://cdn.leavitt.com/company-mark-57-dark.svg' : 'https://cdn.leavitt.com/company-mark-57.svg'}
            />`}
        <div>
          <h1>This site has been updated!</h1>
          <h3>Please click to reload</h3>
        </div>
      </main>
      <click-blocker @click=${this.handleClick}></click-blocker>`;
  }

  async handleClick() {
    this.isLoading = true;
    await this.updateComplete;
    window.location.reload();
  }
}
