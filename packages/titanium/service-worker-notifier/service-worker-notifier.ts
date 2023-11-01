import { html, LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { TitaniumSnackbarSingleton } from '../../titanium/snackbar/snackbar';

@customElement('titanium-service-worker-notifier')
export class TitanuimServiceWorkerNotifier extends LitElement {
  @property({ type: String }) notificationsStatus: string;
  @property({ type: String }) scriptUrl: string = 'service-worker.js';

  #newWorker: ServiceWorker | null;
  #refreshing = false;

  async connectedCallback() {
    if ('serviceWorker' in navigator) {
      const reg = await navigator.serviceWorker.getRegistration();
      if (reg) {
        reg.addEventListener('updatefound', () => {
          this.#newWorker = reg.installing;
          this.#newWorker?.addEventListener('statechange', () => {
            if (this.#newWorker?.state === 'installed' && navigator.serviceWorker.controller) {
              this.#showUpdatedSnackbar();
            }
          });
        });

        if (reg.waiting && navigator.serviceWorker.controller) {
          this.#newWorker = reg.waiting;
          this.#showUpdatedSnackbar();
        }
      }

      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (this.#refreshing) {
          return;
        }
        window.location.reload();
        this.#refreshing = true;
      });
    }
  }

  async #showUpdatedSnackbar() {
    await TitaniumSnackbarSingleton.open('Site has been updated', { actionText: 'RELOAD' });
    this.#newWorker?.postMessage({ type: 'SKIP_WAITING' });
  }

  render() {
    return html``;
  }
}
