import { customElement, html, LitElement, property } from 'lit-element';
import { TitaniumSnackbarSingleton as AppSnackbar } from '@leavittsoftware/titanium-snackbar';

@customElement('titanium-sw-notifier')
export class TitanuimServiceWorkerNotifierElement extends LitElement {
  @property({ type: String }) notificationsStatus: string;
  @property({ type: String }) scriptUrl: string = 'service-worker.js';

  private _newWorker: ServiceWorker | null;
  private _refreshing = false;

  async connectedCallback() {
    if ('serviceWorker' in navigator) {
      const reg = await navigator.serviceWorker.getRegistration();
      if (reg) {
        reg.addEventListener('updatefound', () => {
          this._newWorker = reg.installing;
          this._newWorker?.addEventListener('statechange', () => {
            if (this._newWorker?.state === 'installed' && navigator.serviceWorker.controller) {
              this._showUpdatedSnackbar();
            }
          });
        });

        if (reg.waiting && navigator.serviceWorker.controller) {
          this._newWorker = reg.waiting;
          this._showUpdatedSnackbar();
        }
      }

      navigator.serviceWorker.addEventListener('controllerchange', () => {
        if (this._refreshing) {
          return;
        }
        window.location.reload();
        this._refreshing = true;
      });
    }
  }

  private async _showUpdatedSnackbar() {
    await AppSnackbar.open('Site has been updated', { actionText: 'RELOAD' });
    this._newWorker?.postMessage({ type: 'SKIP_WAITING' });
  }

  render() {
    return html``;
  }
}
